import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const OAuthButtons = () => {
    return (
        <Flex flexDirection='column' width='100%'>
            <Button variant='oauth' mb={2}>
                <Image src='/images/googleIcon.png' height='24px' mr={2}/>
                <Text fontSize='10pt' fontWeight={700}>Googleアカウントでログイン</Text>
            </Button>
            <Button variant='oauth' mb={2} >
                <a target="_blank" href="https://icons8.com/icon/95294/mac-os"></a><a target="_blank" href="https://icons8.com"></a>
                <Image src='/images/apple.png' height='24px' mr={3}/>
                <Text fontSize='10pt' fontWeight={700}>Appleアカウントでログイン</Text>
            </Button>
        </Flex>
    )
}

export default OAuthButtons