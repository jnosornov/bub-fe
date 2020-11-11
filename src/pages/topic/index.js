import React from 'react'

import Container from '../../components/layout/Container'
import TopicHeadline from '../../components/organisms/TopicHeadline'
import TopicThread from '../../components/organisms/TopicThread'

const Topic = () => {
  const { topic, comments } = Seed.Post
  return (
    <>
      <Container padding="md" size="sm" isCentered>
        <div className="topic-thread">
          <TopicHeadline topic={topic}/>
          <TopicThread comments={comments} />
        </div>
      </Container>
      <style jsx>{`
        .topic-thread {
          padding: 40px 20px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Topic