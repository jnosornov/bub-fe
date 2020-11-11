import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return (
    <>
      <p className="paragraph">{children}</p>
      <style jsx>{`
        .paragraph {
          // padding: 15px 0 8px;
        }
      `}</style>
    </>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string
}

export default Paragraph