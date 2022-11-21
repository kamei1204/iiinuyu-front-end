import React, { useState } from "react";
import { Box, Button, Flex, Icon, Image, Skeleton, SkeletonCircle, Stack, Text } from "@chakra-ui/react";
import { Posts } from "../../DummyData";
import Link from "next/link";
import { Post } from "../../atoms/postAtom";

type PersonalHome = {
    post: Post;
}

const PersonalHome= () => {

    return (
        <Flex flexDirection="column" bg="white"  borderRadius={3}>
            <Flex 
                color="white" 
                fontWeight={600}
                align="flex-end" 
                p="8px 12px" 
                height="70px" 
                borderRadius="4px 4px 0px 0px" 
                backgroundSize="cover"
                backgroundImage="url(/images/image1.JPEG)"
                >
            </Flex>
            <Flex direction="column">
                <Flex direction="column" p="12px">
                    <Flex align="center" mb={2}>
                    <Image src="/yu.png" height={10} width={10} mr={4} alt="pug"/>
                    <Text fontWeight={600}>Home</Text>
                    </Flex>
                    <Stack spacing={3}>
                    <Text fontSize="9pt">
                        今日知った〇〇湯を投稿しよう！
                    </Text>
                    <Button height="30px">Create Post</Button>
                    <Button variant="outline" height="30px">
                        コミュニティーを作成
                    </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
};
export default PersonalHome;