import React from 'react'

import Comment from '../../molecules/Comment'

const CommentThread = ({ comment }) => {
  return (
    <>
      <Comment comment={comment}/>
      <ul className="comment-thread">
        {comment.thread.map((comment, index) => {
          return (
            <li key={index}>
              <Comment comment={comment}/>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        .comment-thread {
          margin: 6px 0 0 25px;
        }
        .comment-thread > :global(li:not(:last-child)) {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  )
}

export default CommentThread