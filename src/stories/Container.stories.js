import React from 'react'
import Container from '../components/layout/Container'

export default {
  title: 'Components/Container',
  component: Container
}

const Template = args => <Container {...args}>CONTENT</Container>

export const Medium = Template.bind({})
Medium.args = { size: "md", padding: "md" }

export const Full = Template.bind({})
Full.args = { padding: "md" }