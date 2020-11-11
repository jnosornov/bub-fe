import React from 'react'
import Comment from '../components/molecules/Comment'

export default {
  title: "Components/Comment",
  component: Comment
}

export const Default = () => {
  const comment = {
    description: 'This is a comment body',
    comments: []
  }
  return <Comment comment={comment}/>
}