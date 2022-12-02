import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import { auth } from '../../../FIREBASE/Client'
import { FIREBASE_ERRORS } from '../../../FIREBASE/Errors'

const Login = () => {

    const setModalState = useSetRecoilState(authModalState);

    const [ login , setLogin ] = useState({
        email    : "",
        password : "",
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        signInWithEmailAndPassword(login.email , login.password);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form onSubmit={onSubmit}>
            <Input 
                required 
                name='email' 
                placeholder='メールアドレス' 
                type='email' 
                mb={2} 
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: 'gray.500'}} 
                _hover={{ bg: 'white', border: '1px solid', borderColor: 'orange.500'}}
                _focus={{  bg: 'white', border: '1px solid', borderColor: 'orange.500' }}/>

            <Input 
                required 
                name='password' 
                placeholder='パスワード' 
                type='password' 
                mb={2} 
                onChange={onChange}
                fontSize='10pt' 
                _placeholder={{ color: 'gray.500'}} 
                _hover={{ bg: 'white', border: '1px solid', borderColor: 'orange.500'}}
                _focus={{  bg: 'white', border: '1px solid', borderColor: 'orange.500' }}
            />

            <Text textAlign='center' fontSize='10pt' color='red'>
                {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>

            <Button 
                width="100%" 
                height="30px" 
                mb={4} mt={4} 
                type='submit'>
                ログイン
            </Button>
            <Flex justify='center' align='center' mb={4} flexDirection='column'>
                <Text fontSize='9pt' mr={2}>パスワードをお忘れですか？</Text>
                <Text  
                    cursor='pointer' 
                    fontSize='9pt' 
                    fontWeight={700} 
                    color='orange.500' 
                    mr={2} 
                    onClick={() => setModalState((prev) => ({ ...prev, view: "パスワードの再設定"}))}>
                    パスワードの再設定はこちらから
                </Text>
            </Flex>
            <Flex justify='center' align='center' mb={4}>
                <Text fontSize='9pt' mr={2}>登録はお済みですか？ |</Text>
                <Text  
                    cursor='pointer' 
                    fontSize='9pt' 
                    fontWeight={700} 
                    color='orange.500' 
                    mr={2} 
                    onClick={() => setModalState((prev) => ({ ...prev, view: "会員登録"}))}>
                    登録はこちらから
                </Text>
            </Flex>
            
        </form>
    )
}

export default Login
