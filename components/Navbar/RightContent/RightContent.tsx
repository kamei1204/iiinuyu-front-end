import { Button, Flex } from '@chakra-ui/react'
import { signOut, User } from 'firebase/auth'
import React from 'react'
import AuthModal from '../../Modal/Auth/AuthModal'
import Icons from '../Icons'
import AuthButton from './AuthButtons'
import UserMenu from './UserMenu'

type RightContentProps = {
  user?: User | null ;
}

const RightContent:React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex align="center" justify="center">
        { user ? <Icons /> : <AuthButton />}
      </Flex>
      <UserMenu user={user}/>
    </>
  )
}

export default RightContent