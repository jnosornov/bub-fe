import React from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph'

const Comment = ({ comment }) => {
  return (
    <>
      <div className="comment-wrapper">
        <Paragraph>{comment.description}</Paragraph>
        <div className="comment-footer">
          <span
            role="img"
            aria-label="speech-balloon"
          >
            💬
          </span>
        </div>
      </div>
      <style jsx>{`
        .comment-wrapper {
          width: 100%;
        }
      `}</style>
    </>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,

}

export default Comment