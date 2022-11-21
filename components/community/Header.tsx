import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { communityData } from '../../atoms/communityAtom'

type communityDataProps = {
    communityData: communityData;
}

const Header:React.FC<communityDataProps> = ({communityData}) => {
    return (
        <Flex 
            flexDirection="column"
            width="100%"
            height="156px"
        >
            <Box backgroundImage="url(/images/image1.JPEG)" height="50%"/>
                <Flex bg="white" justifyContent="center" flexGrow={1}>
                    <Flex width="95%" maxWidth="1200px">
                        {communityData.imageURL ? 
                            ( <Image 
                                position="relative"
                                border="1.5px solid white"
                                borderRadius="full"
                                boxSize="70px"
                                src={communityData.imageURL}
                                ml={2}
                                top={-3}
                                objectFit="cover"
                            /> ) : 
                            ( <Image
                                position="relative"
                                border="1.5px solid white"
                                borderRadius="full"
                                boxSize="70px"
                                src="/sunny.png"
                                ml={2}
                                top={-3}
                                objectFit="cover"
                        />)}
                        <Flex align="center" p="10px 18px">
                            <Flex flexDirection="column" mr={6}>
                                <Text fontWeight={800} fontSize="18pt">
                                    {communityData.id}
                                </Text>
                                <Text fontWeight={600} fontSize="10pt">
                                    {communityData.id}
                                </Text>
                            </Flex>
                            <Button height="30px" pr={6} pl={6} onClick={() => {}}>join</Button>
                        </Flex>                    
                    </Flex>
                </Flex>
        </Flex>
    )
}

export default Header
                    