import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';

type Props = {}

const SignUp = () => {
    const setModalState = useSetRecoilState(authModalState);

    const [ signUp , setSignUp ] = useState({
        email           : "",
        password        : "",
        confirmPassword : "",
    })

    const onSubmit = () => {};
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUp((prev) => ({
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
                _focus={{  bg: 'white', border: '1px solid', borderColor: 'orange.500' }} bg='gray.50'/>

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
                _focus={{  bg: 'white', border: '1px solid', borderColor: 'orange.500' }} bg='gray.50'/>

            <Input 
                required name='password' 
                placeholder='パスワードを再入力' 
                type='password' 
                mb={2} 
                onChange={onChange}
                fontSize='10pt' 
                _placeholder={{ color: 'gray.500'}}
                _hover={{ bg: 'white', border: '1px solid', borderColor: 'orange.500'}}
                _focus={{  bg: 'white', border: '1px solid', borderColor: 'orange.500' }} bg='gray.50'/>
            <Button width="100%" height="30px" mb={4} mt={4} type='submit'>会員登録</Button>
            <Flex justify='center' align='center' mb={4}>
                <Text fontSize='9pt' mr={2}>登録はお済みですか？ |</Text>
                <Text 
                    cursor='pointer' 
                    fontSize='9pt' 
                    fontWeight={700} 
                    color='orange.500' 
                    mr={2} 
                    onClick={() => setModalState((prev) => ({ ...prev, view: "ログイン"}))}>ログインはこちらから</Text>
            </Flex>
        </form>
    )
}
export default SignUp
            
