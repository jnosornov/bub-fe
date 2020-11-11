import React from 'react'
import PostForm from '../components/molecules/PostForm'

export default {
  title: "Components/PostForm",
  component: PostForm
}

const Template = args => <PostForm {...args} />

export const Default = Template.bind({})
Default.args = { postText: 'Cinemas were closed due to COVID-19 pandemic' }