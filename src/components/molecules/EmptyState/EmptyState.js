import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import Paragraph from '../../atoms/Paragraph'

const EmptyState = ({ imgSrc, copy }) => {
  return (
    <>
      <div className="empty-state">
        <div className="img-box">
          <img className="img" src={imgSrc} />
        </div>
        <Paragraph>{copy}</Paragraph>
        <Button size="md">Add event</Button>
      </div>
      <style jsx>{`
        .empty-state {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 20px 0;
        }
        .img-box {
          width: 180px;
        }
        .img {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default EmptyState