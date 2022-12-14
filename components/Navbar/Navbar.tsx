import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import Direction from './Direction';
import SearchInput from './SearchInput';
import { BsBell } from "react-icons/bs";
import Icons from './Icons';
import RightContent from './RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../FIREBASE/Client';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <Flex bg="white" height="66px" padding="6px 12px" align="center">
            <Flex align="center">
                <Box display={{ base: "none", md: "unset" }} mr="20px">
                    <Image src="/yu.png" height={40} width={40} alt="pug"/>
                </Box>
                <Image src="/logo5.png" height={56} width={90} alt="iiinuyu" />
            </Flex>
            <Direction />
            <SearchInput />
            <RightContent user={user}/>
        </Flex>
        );
    };

    export default Navbar;
