import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Container = ({ children, size, padding, isCentered }) => {
  return (
    <>
      <div className={classNames("container", {
        [`size-${size}`]: size,
        [`padding-${padding}`]: padding,
        "isCentered": isCentered
      })}>
        {children}
      </div>
      <style jsx>{`
        .container {
          border: 1px dashed #ccc;
        }
        .isCentered {
          margin: 0 auto;
        }
        .size-sm {
          max-width: 40%;
        }
        .size-md {
          max-width: 50%;
        }
        .size-lg {
          max-width: 75%;
        }
        .padding-md {
          padding: 10px 20px;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 640px) {
          .container {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

Container.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node
}

export default Container