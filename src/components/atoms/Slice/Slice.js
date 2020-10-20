import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import choices from '../../../tokens/choices'

const Slice = ({ children, type }) => {
  return (
    <>
      <span className={classNames("slice", {
        [`type-${type}`]: type
      })}>{children}</span>
      <style jsx>{`
        .slice {
          font-weight: 600;
          margin: 0 5px;
          color: ${choices.colors.brand.wisteria}
        }
      `}</style>
    </>
  )
}

Slice.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string
}

export default Slice