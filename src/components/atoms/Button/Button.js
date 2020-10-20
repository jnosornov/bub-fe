import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import decisions from '../../../tokens/decisions'

const Button = ({ children, size, color, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={classNames("button", {
        [`size-${size}`]: size,
        [`color-${color}`]: color
      })}>
        {children}
      </button>
      <style jsx>{`
        .button {
          border-color: ${decisions.components.button.essence.primary};
          background-color: ${decisions.components.button.essence.primary};
          border: 1px solid transparent;
          color: white;
          box-shadow: ${decisions.components.button.shadow};
          cursor: pointer;
          // margin-bottom: 15px;
        }

        .color-east-side {
          background-color: ${decisions.components.button.essence.primary};
        }

        .size-sm {
          border-radius: ${decisions.components.button.size.sm.borderRadius};
          padding: ${decisions.components.button.size.sm.padding.horizontal} ${decisions.components.button.size.sm.padding.vertical};
        }

        .size-md {
          border-radius: ${decisions.components.button.size.md.borderRadius};
          padding: ${decisions.components.button.size.md.padding.horizontal} ${decisions.components.button.size.md.padding.vertical};
        }
      `}</style>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string
}

export default Button