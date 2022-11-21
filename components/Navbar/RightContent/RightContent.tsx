import { Flex } from '@chakra-ui/react'
import React from 'react'
import AuthModal from '../../Modal/Auth/AuthModal'
import AuthButton from './AuthButtons'

type RightContentProps = {
  // user: any
}

const RightContent:React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex align="center" justify="center">
        <AuthButton />
      </Flex>
    </>
  )
}

export default RightContent