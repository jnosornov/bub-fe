import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../../atoms/Heading'
import decisions from '../../../tokens/decisions'

const Card = ({ title, nickname }) => {
  return (
    <>
      <div className="card">
        <span>{nickname}</span>
        <Heading size="xl">{title}</Heading>
      </div>
      <style jsx>{`
        .card {
          display: inline-flex;
          flex-direction: column;
          border: 1px solid #eee;
          margin-bottom: 15px;
          padding: 15px 20px;
          border-radius: ${decisions.components.card.borderRadius};
          box-shadow: ${decisions.components.card.shadow};
          width: 100%;
          max-width: 600px;
        }

        span {
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
}

export default Card