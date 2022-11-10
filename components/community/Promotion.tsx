import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Promotion = () => {
    return (
        <Flex direction="column" bg="white" p={6} borderRadius="10px 10px 0px 0px" m="20px 0" cursor="pointer">
            <Flex mb={2}>
                <Image src="/yu.png" height={10} width={10} mr={4} alt="pug"/>
                <Stack spacing={1} pl={2} fontSize="14px">
                    <Text fontWeight={700}>プロモーション広告</Text>
                    <Text>おすすめの犬湯教えてください</Text>
                </Stack>
            </Flex>
            <Button height="30px">掲載する</Button>
        </Flex>
    )
}

export default Promotion