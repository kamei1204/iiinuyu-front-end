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


type CommunityModalProps = {
    open        : boolean;
    handleClose : () => void;
}

const CommunityModal:React.FC<CommunityModalProps> = ({ open, handleClose}) => {

    const [ communityName , setCommunityName ] = useState("");
    const [ charsRemaining , setCharsRemaining ] = useState(21);
    const [ changeType , setChangeType ] = useState('public')

    const handleChange = ( event : React.ChangeEvent<HTMLInputElement>) => {

        if ( event.target.value.length > 21 ) return;

        setCommunityName( event.target.value );
        setCharsRemaining( 21 - event.target.value.length );
    }

    const handleChangeType = ( event : React.ChangeEvent<HTMLInputElement>) => {
        setChangeType(event.target.name);
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
                        <Text fontSize="10pt" fontWeight={400} color='red.300'>後から名前を変更する事はできません</Text>
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
                    <Button variant='solid' height='30px'>作成</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            </>
        )
}

export default CommunityModal
        