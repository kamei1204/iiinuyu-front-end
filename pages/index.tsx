import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Post } from '../atoms/postAtom'
import Promotion from '../components/community/Promotion'
import Recommend from '../components/community/Recommend'
import PageContent from '../components/Layout/Pagecontent'
import PostForm from '../components/Post/PostForm'
import PostItem from '../components/Post/PostItem'
import { Posts } from '../DummyData'

const Home: NextPage = () => {
  return (
      <PageContent>
        <>
          <PostForm />
          <Stack>
            {Posts.map((post:Post) => (
              <PostItem key={post.id} post={post}/>
              ))}
            </Stack>
          </>
          <>
            <Recommend />
            <Promotion />
          </>
        </PageContent>
    )
  }
  
  export default Home


