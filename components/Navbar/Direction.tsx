import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { GoHome } from "react-icons/go"
import Communities from '../community/communities'


const Direction:React.FC = () => {
    return (
        <Menu>
            <MenuButton cursor="pointer" _hover={{ outline: "1px solid", outlineColor: "gray.200" }} borderRadius={4} ml={2} p='0px 8px'>
                <Flex align="center">
                    <Flex align="center">
                        <Icon as={GoHome} fontSize={20}/>
                        <Flex >
                            <Text fontSize={12} fontWeight={700} display={{ base: "none", lg: "flex" }} ml={2}>HOME</Text>
                        </Flex>
                    </Flex>
                    <ChevronDownIcon />
                </Flex>
            </MenuButton>
            <MenuList>
                <Communities />
            </MenuList>
        </Menu>
    )
}

export default Direction
                