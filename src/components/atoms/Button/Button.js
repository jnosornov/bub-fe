import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import choices from '../../../tokens/choices'
import decisions from '../../../tokens/decisions'

const Button = ({ children, size, color, onClick, isDisabled }) => {
  return (
    <>
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={classNames("button", {
        [`size-${size}`]: size,
        [`color-${color}`]: color,
        'isDisabled': isDisabled
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
        }

        .isDisabled {
          background-color: ${decisions.common.disabled.backgroundColor}
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
        .size-full {
          height: 100%;
          width: 100%;
          border-radius: ${choices.size.borderRadius.sm}
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