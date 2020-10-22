import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'

import choices from '../../../tokens/choices'

const Post = () => {
  const [postText, setPostText] = useState("")
  const [isPostActionDisabled, setPostActionDisabled] = useState(false)

  const onSubmit = () => {
    fetch('http://localhost:3000/api/topic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ matter: postText })
    })
      .then(response => response.json())
      .then(data => {
        setPostText('')
        console.log(data)
      })
  }

  return (
    <>
      <div className="post">
        <textarea 
          rows="5"
          className="text-area"
          value={postText}
          onChange={event => {
            setPostText(event.target.value)
          }}
        />
        <div className="post-footer">
          <Button
            size="sm"
            isDisabled={isPostActionDisabled}
            onClick={() => {
              setPostActionDisabled(true)
              onSubmit()
              setPostActionDisabled(false)
            }} 
          >
            Submit
          </Button>
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