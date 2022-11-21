import React from 'react'
import { communityData } from '../../../atoms/communityAtom'
import { communityDates } from '../../../DummyCommunityData'
import Header from '../../../components/community/Header'
import PageContent from '../../../components/Layout/Pagecontent'
import PostForm from '../../../components/Post/PostForm'
import { Stack } from '@chakra-ui/react'
import { Posts } from '../../../DummyData'
import { Post } from '../../../atoms/postAtom'
import PostItem from '../../../components/Post/PostItem'
import About from '../../../components/community/About'

const index = () => {
    return (
        <>
        {communityDates.map((communityData:communityData) => (
                <Header key={communityData.id} communityData={communityData}/>
            ))}
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
            {communityDates.map((communityData:communityData) => (
                <About key={communityData.id} communityData={communityData}/>
            ))}
            </>
        </PageContent>
        </>
        )
    }
    
    export default index
