import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../../atoms/Heading'
import PostForm from '../../molecules/PostForm'

import choices from '../../../tokens/choices'

const TopicDescription = ({ topic }) => {
  return (
    <>
      <div className="message-wrapper">
        <Heading size="2xl">{topic.body}</Heading>
        <PostForm
          isHidden={false}
          placeholder="Add comment"
          style={{ marginTop: choices.size.spacing[8] }}
        />
      </div>
      <style jsx>{`
        .message-wrapper {
          width: 100%;
        }
      `}</style>
    </>
  )
}

TopicDescription.propTypes = {
  topic: PropTypes.object.isRequired,
}

export default TopicDescription