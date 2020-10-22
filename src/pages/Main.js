import React, { useState, useEffect } from 'react'

import TrendList from '../components/molecules/TrendList'
import Container from '../components/layout/Container'
import Post from '../components/molecules/Post'

const Main = () => {
  const [topics, setTopics] = useState([])
  const [messages, setMessages] = useState([])
  const [comments, setComments] = useState([])


  useEffect(() => {
    fetchTopics()
  }, [])

  const fetchTopics = () => {
    return fetch('http://localhost:3000/api/topic')
      .then(response => response.json())
      .then(data => {
        setTopics(data.topics)
      })
  }

  return (
    <Container size="md" isCentered>
      <Post />
      <TrendList title="Topics" items={topics}/>
      <TrendList title="Messages" items={messages}/>
      <TrendList title="Comments" items={comments}/>
    </Container>
  )
}

export default Main