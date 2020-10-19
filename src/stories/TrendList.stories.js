import React from 'react'

import TrendList from '../components/molecules/TrendList'
import Card from '../components/atoms/Card'

export default {
  title: 'Component/TrendList',
  component: TrendList
}

export const Empty = args => <TrendList {...args} />
Empty.args = { title: "Events" }

export const OneItem = args => (
  <TrendList {...args}>
    <Card title="Russia will start Mars explorations next year" nickname="demogorgon" />
  </TrendList>
)
OneItem.args = { title: "Topics" }

export const MultipleItems = args => {
  return (
    <TrendList {...args}>
      <Card title="UK protests caused private property damage" nickname="unrated_chameleon" />
      <Card title="China and US negotiations over product import fees are still open" nickname="rey_solomon" />
    </TrendList>
  )
}
MultipleItems.args = { title: "Messages" }