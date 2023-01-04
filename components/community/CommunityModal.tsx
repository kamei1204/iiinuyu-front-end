import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Text,
    Divider,
    Input,
    Image,
    Stack,
    Checkbox,
    Flex,
    Icon,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { MdSupervisorAccount } from 'react-icons/md'
import { AiFillEye, AiFillLock } from 'react-icons/ai'
import { doc, getDoc, runTransaction, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../../FIREBASE/Client';
import { useAuthState } from 'react-firebase-hooks/auth';


type CommunityModalProps = {
    open        : boolean;
    handleClose : () => void;
}

const CommunityModal:React.FC<CommunityModalProps> = ({ open, handleClose}) => {

    const [user] = useAuthState(auth);
    const [ communityName , setCommunityName ] = useState("");
    const [ charsRemaining , setCharsRemaining ] = useState(21);
    const [ changeType , setChangeType ] = useState("public");
    const [ error , setError ] = useState("");
    const [ loading, setLoading] = useState(false)

    const handleChange = ( event : React.ChangeEvent<HTMLInputElement>) => {

        if ( event.target.value.length > 21 ) return;

        setCommunityName( event.target.value );
        setCharsRemaining( 21 - event.target.value.length );
    }

    const handleChangeType = ( event : React.ChangeEvent<HTMLInputElement>) => {
        setChangeType(event.target.name);
    }

    const handleCreate = async () => {
        if (error) setError("");
        const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;

        if ( format.test(communityName) || communityName.length < 3 ) {
                return setError("大文字.英数字を加える必要があり、3文字以上の名前をつけてください");
        }
        //firebase firestore
        // doc(firestoreに接続, "文字列:ドキュメント名任意", 入れる情報)
        setLoading(true);
        
        try {
        const communityDocRef = doc(firestore, "communities", communityName)

        await runTransaction(firestore, async (transaction) => {

            const communityDoc = await transaction.get(communityDocRef);
    
            //exists = 存在するかの確認をする
            if (communityDoc.exists()) {
                throw new Error(`ごめんなさい。ゆ/${communityName}は既に登録されています。`);
            }

            //"communities"ドキュメントにプロパティを追加
            transaction.set(communityDocRef, {
                creatorId: user?.uid,
                createdAt: serverTimestamp(),
                numberOfMembers: 1,
                privacyType: changeType,
            });
            //コミュニティースニペットの作成
            transaction.set(
                doc(firestore, `users/${user?.uid}/communitySnipetts`, communityName),
                {
                    communityId: communityName,
                    isModerator: true,
                }
            )
        });


        } catch (error:any) {
            console.log("handleCreateError",error);
            setError(error.message)
        }
        setLoading(false);

    }

    return (
        <>
            <Modal isOpen={open} onClose={handleClose} size={{ base: 'md', md: 'lg' }} >
                <ModalOverlay />
                <ModalContent flex='flex' flexDirection="column" >
                <Image src='/images/image1.JPEG' height='70px' objectFit='cover' borderRadius='0px 0px 10px 10px'/>
                <ModalHeader fontSize="14pt" fontWeight={700} >コミュニティを作成</ModalHeader >
                <Box ml={2} mr={2} >
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody p={4}>
                        <Text fontSize="12pt" fontWeight={700} mb={1}>名前</Text>
                        <Text fontSize="10pt" fontWeight={400} color='gray.400'>後から名前を変更する事はできません</Text>
                        <Text 
                            position="relative" 
                            top="30px" 
                            ml={3} mt={-2} 
                            color="gray.500" 
                            fontSize='10pt'>ゆ/
                        </Text>
                        <Input 
                            value={communityName} 
                            position="relative" 
                            pl={10} 
                            onChange={handleChange}
                        />
                        <Text 
                            color={ charsRemaining === 0 ? 'red.300' : 'gray.500' } 
                            ml={2} mt={1} 
                            fontSize='10pt' >残り{charsRemaining}文字です
                        </Text>
                        <Text fontSize="9pt" color="red" pt={1}>{error}</Text>
                        <Box mt={4} mb={2}>
                            <Stack spacing={2}>
                            <Text fontSize='10pt' fontWeight={700}>下記から一つ選んでください</Text>
                                <Checkbox name='public' onChange={handleChangeType} isChecked={ changeType === "public" }>
                                    <Flex align='center'>
                                        <Icon as={MdSupervisorAccount} fontSize='10pt' color='gray.600' mr={2}/>
                                        <Text 
                                            fontSize='10pt' mr={2} color='gray.600'>一般で公開する</Text>
                                        <Text fontSize='7pt' color='gray.500'>誰でも入れる部屋を作成します</Text>
                                    </Flex>
                                </Checkbox>
                                <Checkbox name='private' onChange={handleChangeType} isChecked={ changeType === "private" }>
                                    <Flex align='center'>
                                        <Icon as={AiFillEye} fontSize='10pt' color='gray.600' mr={2}/>
                                        <Text fontSize='10pt' mr={2} color='gray.600'>鍵付きで公開する</Text>
                                        <Text fontSize='7pt' color='gray.500'>ログイン認証済みのユーザーが入れます</Text>
                                    </Flex>
                                </Checkbox>
                                <Checkbox name='close' onChange={handleChangeType} isChecked={ changeType === "close" }>
                                    <Flex align='center'>
                                        <Icon as={AiFillLock} fontSize='10pt' color='gray.600' mr={2}/>
                                        <Text fontSize='10pt' mr={2} color='gray.600'>まだ公開しない</Text>
                                        <Text fontSize='7pt' color='gray.500'>パスワード付きで公開します</Text>
                                    </Flex>
                                </Checkbox>
                            </Stack>
                        </Box>
                    </ModalBody >
                </Box>
                <ModalFooter bg='gray.100' borderRadius='10px 10px 0px 0px'>
                    <Button variant='outline' mr={3} onClick={handleClose} height='30px'>
                    キャンセル
                    </Button>
                    <Button variant='solid' height='30px' onClick={handleCreate} isLoading={loading}>作成</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            </>
        )
}

export default CommunityModal
        