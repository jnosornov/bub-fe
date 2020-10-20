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
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container > :global(div:not(:last-child)) {
          margin-bottom: 30px;
        }

        .isCentered {
          margin: 0 auto;
        }

        .size-md {
          max-width: 700px;
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