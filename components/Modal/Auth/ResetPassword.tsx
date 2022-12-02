import React, { useState } from "react";
import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { BsDot, BsReddit } from "react-icons/bs";
import { authModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { auth } from "../../../FIREBASE/Client";

// type ResetPasswordProps = {
//     toggleView: (view: ModalView) => void;
// };

const ResetPassword: React.FC= () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await sendPasswordResetEmail(email);
        setSuccess(true);
    };
    return (
        <Flex direction="column" alignItems="center" width="100%">
        <Icon as={BsReddit} color="brand.100" fontSize={40} mb={2} />
        <Text fontWeight={700} mb={2}>
            パスワードの再設定
        </Text>
        {success ? (
            <Text mb={4}>メールアドレスが</Text>
        ) : (
            <>
            <Text fontSize="sm" textAlign="center" mb={2}>
                ご登録のメールアドレスにパスワード再設定用のリンクを送信します
            </Text>
            <form onSubmit={onSubmit} style={{ width: "100%" }}>
                <Input
                required
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={(event) => setEmail(event.target.value)}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
                />
                <Text textAlign="center" fontSize="10pt" color="red">
                {error?.message}
                </Text>
                <Button
                width="100%"
                height="36px"
                mb={2}
                mt={2}
                type="submit"
                isLoading={sending}
                >
                パスワードを再設定
                </Button>
            </form>
            </>
        )}
        <Flex
            alignItems="center"
            fontSize="9pt"
            color="blue.500"
            fontWeight={700}
            cursor="pointer"
        >
            <Text
            onClick={() =>
                setAuthModalState((prev) => ({
                ...prev,
                view: "ログイン",
                }))
            }
            >
            ログイン
            </Text>
            <Icon as={BsDot} />
            <Text
            onClick={() =>
                setAuthModalState((prev) => ({
                ...prev,
                view: "会員登録",
                }))
            }
            >
            会員登録
            </Text>
        </Flex>
        </Flex>
    );
};
export default ResetPassword;