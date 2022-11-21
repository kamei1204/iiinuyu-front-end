import { Alert, AlertIcon, Flex, Icon, Image, Skeleton, Spinner, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsChat } from "react-icons/bs"
import { FiShare, FiBookmark, } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Post } from '../../atoms/postAtom'

type postItem = {
    post : Post;
}

const PostItem:React.FC<postItem> = ({post})  => {
    
    const [ like, setLike]   = useState(post.like);
    const [ isLiked, setIsLiked] = useState(false)

    const onGood = () => {
        setLike( isLiked ? like -1 : like +1 );
        setIsLiked(!isLiked);
    }
    const onBad = () => {
        setLike( isLiked ? like +1 : like -1 );
        setIsLiked(!isLiked);
    }

    return (
        <>
        <Flex border="1px solid" bg="white"  
                borderColor="white"
                borderRadius="4px 4px 0 0 "
                _hover={{ borderColor:"none"}} 
                cursor="unset"
                mb={5}
                // onClick={() => onSelectPost && onSelectPost(post)}
            >
            <Flex flexDirection="column" width="60px" bg="white" borderRadius={4} align="center">
                <Icon as={ BsFillArrowUpCircleFill } 
                        color="brand.100"
                        // color={ userVoteValue === 1 ? "brand.100" : "gray.400" }
                        fontSize={18}
                        cursor="pointer"
                        userSelect="none"
                        onClick={() => onGood()}
                        mt={4}
                />
                <Text fontSize={20}>{like}</Text>
                <Icon as={ BsFillArrowDownCircleFill } 
                        color= "blue.200"
                        fontSize={18}
                        cursor="pointer"
                        userSelect="none"
                        onClick={() => onBad()}
                />
            </Flex>
            
            <Flex flexDirection="column" width="100%">

                {/* <Alert status='error'>
                    <AlertIcon />
                    <Text mr={2}>エラーなし</Text>
                </Alert> */}
                <Stack spacing={1} p='10px'>
                    <Stack 
                            direction="row" 
                            spacing={0.6} 
                            fontSize="8pt" 
                            align="center">
                        {post.profileImage ? (
                        <Image
                            borderRadius="full"
                            boxSize="18px"
                            src={post.profileImage}
                            mr={2}
                        />
                        ) : (
                            <Image 
                                src="/yu.png" 
                                height={10} 
                                width={10} 
                                mr={4} 
                                alt="pug"/>
                        )}
                        <Link href={"/"}>
                            <Text mr={2}>
                                {/* {Users.filter((user) => user.id === post.id)[0].username} */}
                            </Text>
                            <Text>
                                {post.date}
                                {/* Post by u/{post.creatorDisplayName} {moment(new Date(post.createdAt.seconds * 1000)).fromNow()} */}
                            </Text>
                        </Link>
                    </Stack>
                    <Text fontSize="12pt" fontWeight={600}>
                        {post.desc}
                    </Text>
                    <Text fontSize="10pt">
                        {post.desc}
                    </Text>
                    {post.photo && (
                        <Flex justify="center" align="center" p={2} width="100%">
                                {/* <Skeleton height="200px" width="100%" borderRadius={4} /> */}
                            <Image src={post.photo} maxHeight="460px"alt="投稿画像" />
                        </Flex>

                    )}
                    <Flex ml={1} mb={0.8} fontWeight={600} color="gray.500">
                        <Flex p="8px 10px" align="center" borderRadius={4} _hover={{ color: "gray.300" }} cursor="pointer">
                            <Icon as={BsChat}/>
                            <Text ml={2} fontSize="9pt">{post.comment}</Text>
                        </Flex>
                        <Flex ml={1} mb={0.8} fontWeight={600} color="gray.500">
                            <Flex p="8px 10px" align="center" borderRadius={4} _hover={{ color: "gray.300" }} cursor="pointer">
                                <Icon as={FiShare}/>
                                <Text ml={2} fontSize="9pt">共有</Text>
                            </Flex>
                        </Flex>
                        <Flex ml={1} mb={0.8} fontWeight={600} color="gray.500">
                            <Flex p="8px 10px" align="center" borderRadius={4} _hover={{ color: "gray.300" }} cursor="pointer">
                                <Icon as={FiBookmark}/>
                                <Text ml={2} fontSize="9pt">保存</Text>
                            </Flex>
                        </Flex>
                            <Flex ml={1} mb={0.8} fontWeight={600} color="gray.500">
                            <Flex p="8px 10px" align="center" borderRadius={4} _hover={{ color: "gray.300" }} cursor="pointer">
                                    {/* <Spinner size="sm" /> */}
                                    <>
                                        <Icon as={RiDeleteBin6Line}/>
                                        <Text ml={2} fontSize="9pt">投稿を削除</Text>
                                    </>
                            </Flex>
                        </Flex>
                    </Flex>
                </Stack>
            </Flex>
        </Flex>
        </>
    )
}
export default PostItem
            