import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../../FIREBASE/Client';
import { FIREBASE_ERRORS } from '../../../FIREBASE/Errors';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {
    const setModalState = useSetRecoilState(authModalState);

    const [ signUp , setSignUp ] = useState({
        email           : "",
        password        : "",
        confirmPassword : "",
    })

    const [ error , setError] = useState("");

    //FIREBASE LOGIC
    const [
        createUserWithEmailAndPassword,
        userCred,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);
    

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if ( error ) setError("");
        if ( signUp.password !== signUp.confirmPassword) {
            setError("パスワードが違います");
            return;
        }

        createUserWithEmailAndPassword( signUp.email, signUp.password );
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUp((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const createUserDocument = async (user:User) => {
        await addDoc(collection(firestore, "users"), JSON.parse(JSON.stringify(user)));
    };

    useEffect(() => {
        if(userCred) {
            createUserDocument(userCred.user);
        }
    }, [userCred])
    

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
                required 
                name='confirmPassword' 
                placeholder='パスワードを再入力' 
                type='password' 
                mb={2} 
                onChange={onChange}
                fontSize='10pt' 
                _placeholder={{ color: 'gray.500'}}
                _hover={{ bg: 'white', border: '1px solid', borderColor: 'orange.500'}}
                _focus={{  bg: 'white', border: '1px solid', borderColor: 'orange.500' }} bg='gray.50'/>
            { error || userError && (
            <Text>
                {error || FIREBASE_ERRORS[userError.message as keyof typeof FIREBASE_ERRORS]};
            </Text>
            )}
            
            <Button width="100%" height="30px" mb={4} mt={4} type='submit' isLoading={loading}>会員登録</Button>
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
            
