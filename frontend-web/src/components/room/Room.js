import React from 'react'
import PropTypes from 'prop-types'

// Css
import './_Room.css'

function Room({ room }) {
  return (
    <div className="row box-shadow">
      <div className="col-md-4">
        <img src={room.image_urls[0]} alt="" className="small-img" />
      </div>
      <div className="col-md-7 text-left">
        <h1>{room.name}</h1>
        <p>Max Count: {room.max_count}</p>
        <p>Phone Number: {room.phone_number}</p>
        <p>Type: {room.type}</p>

        <div>
          <button className="btn btn-primary"> View Details</button>
        </div>
      </div>
    </div>
  )
}

export default Room

Room.propTypes = {
  room: PropTypes.shape({
    image_urls: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    max_count: PropTypes.number.isRequired,
    phone_number: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}
