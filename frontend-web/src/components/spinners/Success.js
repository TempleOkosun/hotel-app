import React from 'react'
import PropTypes from 'prop-types'

function Success({ message }) {
  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  )
}

export default Success

Success.propTypes = {
  message: PropTypes.string.isRequired,
}
