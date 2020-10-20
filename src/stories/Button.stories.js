import React from 'react'
import Button from '../components/atoms/Button'

export default {
  title: "Components/Button",
  component: Button
}

const Template = args => <Button {...args}>Ghost like</Button>

export const Small = Template.bind({})
Small.args = { size: "sm" }

export const Medium = Template.bind({})
Medium.args = { size: "md" }