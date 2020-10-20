import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'

import choices from '../../../tokens/choices'

const Post = ({ postText }) => {
  return (
    <>
      <div className="post">
        <textarea className="text-area" rows="5">
          {postText}
        </textarea>
        <div className="post-footer">
          <Button size="sm">Create topic</Button>
        </div>
      </div>
      <style jsx>{`
        .post {
          max-width: 600px;
          width: 100%;
        }
        .text-area {
          padding: 14px;
          border-radius: 4px;
          resize: none;
          width: 100%;
          font-family: inherit;
          font-size: 16px;
        }
        textarea:focus {
          outline: 2px solid ${choices.colors.brand.wisteria};
        }
        .post-footer {
          text-align: end;
          padding: 5px 0px;
        }
      `}</style>
    </>
  )
}

Post.propTypes = {
  postText: PropTypes.string
}

export default Post