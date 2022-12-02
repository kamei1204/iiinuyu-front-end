import { Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import { auth } from '../../../FIREBASE/Client'
import AuthInput from './AuthInput'
import OAuthButtons from './OAuthButtons'
import ResetPassword from './ResetPassword'


type AuthModalProps = {}
// AuthButtonをonClickした際に開くmodal
const AuthModal:React.FC<AuthModalProps> = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);
    // auth = firebase認証 // 認証オブジェクトがユーザーの読み込みとエラーを取得する
    const [user, loading, error] = useAuthState(auth);

    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false,
        }));
    }

    useEffect(() => {
        if(user) handleClose()
        console.log(user)
    },[user]);
    

    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <Image src='/images/image1.JPEG' height='100px' objectFit='cover'/>
                    <ModalHeader display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        {modalState.view === "ログイン" && "ログイン"}
                        {modalState.view === "会員登録" && "会員登録"}
                        {modalState.view === "パスワードの再設定" && "パスワードの再設定"}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Flex direction="column" align="center" justify="center" width="70%">
                            {modalState.view === "ログイン" || modalState.view === "会員登録" ? (
                            <>
                                <OAuthButtons />
                                <Text color="gray.500" fontWeight={500}>OR</Text>
                                <AuthInput /> 
                            </>
                            ) : ( <ResetPassword/>)
                        } 
                        </Flex>
                    </ModalBody>
                </ModalContent >
            </Modal>
        </>
    )
}

export default AuthModal
                            