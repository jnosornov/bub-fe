import React from 'react'
import PropTypes from 'prop-types'

const TopicCard = ({ title, nickname }) => {
  return (
    <>
      <div className="card">
        <span>{nickname}</span>
        <h1>{title}</h1>
      </div>
      <style jsx>{`
        .card {
          display: inline-flex;
          flex-direction: column;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 15px 20px;
        }

        span {
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}

TopicCard.propTypes = {
  title: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
}

export default TopicCard