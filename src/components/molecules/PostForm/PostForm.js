import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'

const PostForm = ({ placeholder, isHidden, onSubmit, style }) => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log("submit was clicked")
  }

  if(isHidden) return null
  return (
    <>
      <form style={style} className="post">
        <div className="post-container">
          <textarea 
            rows="1"
            className="text-area"
            value=""
            onChange={() => {}}
            placeholder={placeholder}
          />
        </div>
        <div className="submit-container">
          <Button
            size="full"
            isDisabled={false}
            onClick={handleSubmit} 
          >
            Submit
          </Button>
        </div>
      </form>
      <style jsx>{`
        .post {
          width: 100%;
          max-width: 800px;
          display: flex;
        }
        .post-container {
          width: 100%;
        }
        .submit-container {
          width: 20%;
          margin-left: 30px;
          text-align: end;
        }
        .text-area {
          display: inherit;
          width: 100%;
          padding: 8px 10px;
          border-radius: 2px;
          resize: none;
          font-family: inherit;
          font-size: 16px;
        }
      `}</style>
    </>
  )
}

PostForm.propTypes = {
  isHidden: PropTypes.bool,
  onSubmit: PropTypes.func,
  style: PropTypes.object
}

export default PostForm