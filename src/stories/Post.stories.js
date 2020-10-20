import React from 'react'
import Post from '../components/molecules/Post'

export default {
  title: "Components/Post",
  component: Post
}

const Template = args => <Post {...args} />

export const Default = Template.bind({})
Default.args = { postText: 'Cinemas were closed due to COVID-19 pandemic' }