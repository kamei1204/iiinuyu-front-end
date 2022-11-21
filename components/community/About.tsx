import { Box, Divider, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { communityData } from '../../atoms/communityAtom'

type AboutProps = {
    communityData: communityData;
}

const About = ({communityData}:AboutProps) => {
    return (
        <Box position="sticky" top="16px">
            <Flex justify="space-between" align="center" bg="orange.300" p={3} color="white" borderRadius="4px 4px 0px 0px">
                <Text fontSize="10pt" fontWeight={700}>どんなコミュニティー?</Text>
                <Icon />
            </Flex>
            <Flex flexDirection="column" p={8} borderRadius="0px 0px 4px 4px" bg="white">
                <Stack>
                    <Flex width="100%" p={2} fontSize="10pt" fontWeight={700}>
                        <Flex flexDirection="column" flexGrow={1}>
                            <Flex><Text>{communityData.numberOfMembers}</Text></Flex>  
                            <Flex><Text>参加中の友達</Text></Flex>  
                        </Flex>
                        <Flex flexDirection="column" flexGrow={1}>
                            <Flex><Text>{communityData.numberOfMembers}</Text></Flex>  
                            <Flex><Text>オンライン中の友達</Text></Flex>  
                        </Flex>
                    </Flex>
                    <Divider />
                </Stack>
            </Flex>
        </Box>
    )
}

export default About
            
            
