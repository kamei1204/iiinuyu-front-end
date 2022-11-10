import { Box, Button, Flex, Icon, Image, Skeleton, SkeletonCircle, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useState } from 'react'
import { Posts } from '../../DummyData';

type Props = {}

const Recommend = () => {

    const [ loading , setLoading] = useState(false);

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
                backgroundImage="url(/images/iiinuyu2.png)"
                >
                人気の犬湯
            </Flex>
            <Flex direction="column">
                {loading ? (
                    <Stack mt={2} p={3}>
                        <Flex justify="space-between" align="center">
                            <SkeletonCircle size="10"/>
                            <Skeleton height="10px" width="70%"/>
                        </Flex>
                        <Flex justify="space-between" align="center">
                            <SkeletonCircle size="10"/>
                            <Skeleton height="10px" width="70%"/>
                        </Flex>
                        <Flex justify="space-between" align="center">
                            <SkeletonCircle size="10"/>
                            <Skeleton height="10px" width="70%"/>
                        </Flex>
                    </Stack>
                ) : (
                    //本来はmapで展開する
                    <>
                        {Posts.map((post) => (
                        <Link key={post.id} href={"/"}>
                            <Flex position="relative" align="center" fontSize="10pt" border="1px solid" borderColor="gray.200" p="10px 12px">
                                <Flex width="80%" align="center">
                                    <Flex width="15%">
                                        <Text>{post.id}</Text>
                                    </Flex>
                                    <Flex width="80%" align="center">
                                        {post.imageUrl ? <Image src={post.imageUrl} height={10} width={10} mr={4} borderRadius={30}/>
                                            : 
                                        <Image src="/yu.png" height={10} width={10} mr={4} alt="pug"/>}
                                        
                                        <Text fontWeight={700} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{post.desc}</Text>
                                    </Flex>
                                </Flex>
                                <Box position="absolute" right="10px">
                                    <Button height="25px" fontSize={14}>join</Button>
                                </Box>
                            </Flex>
                        </Link>
                        ))}
                    </>
                )}
            </Flex>
        </Flex>
    )
}

export default Recommend