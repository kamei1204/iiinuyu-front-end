import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { GiJumpingDog } from "react-icons/gi"
import { BsLink45Deg } from "react-icons/bs"
import { IoImageOutline } from "react-icons/io5"

type Props = {}

const PostForm = () => {
    return (
        <Flex 
            justify="space-evenly" align="center" height="56px" bg="white" 
            border="1px solid" borderRadius={5} borderColor="gray.300"
            p={2} mb={4}>
            <Icon as={GiJumpingDog} fontSize={24} color="gray.400" cursor="pointer" mr={2} textColor="pink.400"/>
                <Input 
                    bg="gray.50"
                    placeholder='今日〇〇な犬湯に行ってきました！' fontSize="10pt"  _placeholder={{ color: "gray.500" }}
                    borderRadius="5px 0 0 5px" borderColor="gray.200" 
                    _hover={{ bg:"white", borderColor: "orange.400", border:"1px solid orange.400" }}
                    _focus={{ outline: "none", bg: "white", borderColor: "orange.400", border: "1px solid orange.400" }}
                />
                <Button type="submit" width="150px" mr={3}
                    borderRadius="0 5px 5px 0" cursor="pointer" bg="orange.400" color="white" fontWeight="bold" 
                    _hover={{ bg: "orange.300" }}>
                        <Text color="white">投稿する</Text>
                </Button>
                <Icon
                    as={IoImageOutline}
                    fontSize={24}
                    mr={4}
                    color="gray.400"
                    cursor="pointer"
                />
                <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer" />
        </Flex>
    )
}

export default PostForm