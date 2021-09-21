import React from 'react'
import PropTypes from 'prop-types'

function Error({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  )
}

export default Error

Error.propTypes = {
  message: PropTypes.string.isRequired,
}
