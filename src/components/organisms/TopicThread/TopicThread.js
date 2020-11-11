import React from 'react'

import CommentThread from '../CommentThread'

const TopicThread = ({ comments }) => {
  if(!comments.length) return null
  return (
    <>
      <div className="thread">
        <ul className="thread-list">
          {comments.map((comment, index) => {
            return (
              <li key={index}>
                <CommentThread comment={comment} />
              </li>
            )
          })}
        </ul>
      </div>
        <style jsx>{`
          .thread {
            margin-top: 60px;
          }
          .thread-list > :global(li:not(:last-child)){
            margin-bottom: 15px;
          }
        `}</style>
    </>
  )
}

export default TopicThread