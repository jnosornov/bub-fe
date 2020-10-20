import React from 'react'

import Container from '../components/layout/Container'
import Button from '../components/atoms/Button'
import { Empty, OneItem, MultipleItems }from './TrendList.stories'

export default {
  title: 'Pages/Container',
  component: Container
}

export const FullContent = args => {
  return (
    <Container {...args}>
      <div style={{ width: '100%', textAlign: 'end', marginBottom: '15px' }}>
        <Button size="sm">Add topic</Button>
      </div>
      <Empty title="Topics" />
      <OneItem title="Messages" />
      <MultipleItems title="Events" />
    </Container>
  )
}
FullContent.args = { size: "md", isCentered: true, padding: "md" }