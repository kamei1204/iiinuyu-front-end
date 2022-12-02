import { Flex, Icon, MenuItem, Text } from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import React, { useState } from 'react'
import CommunityModal from './CommunityModal'

const Communities = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <CommunityModal open={open} handleClose={() => setOpen(false)}/>
            <MenuItem width='100%' fontSize='10pt' onClick={() => setOpen(true)}>
                <Flex align='center'>
                    <Icon as={BsPlus} mr={2} fontSize={20}/>
                    <Text>community</Text>
                </Flex>
            </MenuItem>
        </>
        )
    }
    
    export default Communities
        
        