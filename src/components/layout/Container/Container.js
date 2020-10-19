import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Container = ({ children, size, padding }) => {
  return (
    <>
      <div className={classNames("container", {
        [`size-${size}`]: size,
        [`padding-${padding}`]: padding
      })}>
        {children}
      </div>
      <style jsx>{`
        .container {
          border: 1px dashed #ccc;
        }

        .size-md {
          max-width: 600px;
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