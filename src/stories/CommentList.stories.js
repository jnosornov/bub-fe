import React from 'react'
import CommentList from '../components/organisms/CommentList'

export default {
  title: "Components/CommentList",
  component: CommentList
}

export const Default = () => {
  const comments = [
    { description: 'This is a comment body', comments: [] },
    { description: 'This is a comment body', comments: [] },
    { description: 'This is a comment body', comments: [] }
  ]
  return <CommentList comments={comments}/>
}
