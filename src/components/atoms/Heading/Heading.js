import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import decisions from '../../../tokens/decisions' 

const Heading = ({ children, size }) => {
  return (
    <>
      <h1 className={classNames("heading", {
        [`size-${size}`]: size
      })}>{children}</h1>
      <style jsx>{`
        .size-3xl {
          font-size: ${decisions.typography.title.fontSize["1"]}
        }
        .size-2xl { 
          font-size: ${decisions.typography.title.fontSize["2"]}
        }
        .size-xl {
          font-size: ${decisions.typography.title.fontSize["3"]}
        }
      `}</style>
    </>
  )
}

Heading.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string
}

export default Heading