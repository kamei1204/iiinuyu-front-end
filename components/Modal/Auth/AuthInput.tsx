import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import Login from './Login'
import SignUp from './SignUp'

type Props = {}

const AuthInput = (props: Props) => {
    
    const authStateValue = useRecoilValue(authModalState);

    return (
        <Flex flexDirection="column" justify="center" width="100%" mt={4}>
            {authStateValue.view === "ログイン" && <Login />}
            {authStateValue.view === "会員登録" && <SignUp />}
        </Flex>
    )
}

export default AuthInput