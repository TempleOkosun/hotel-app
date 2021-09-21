import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Components
import { Modal, Button, Carousel } from 'react-bootstrap'

// Css
import './_Room.css'
import { Link } from 'react-router-dom'

function Room({ room }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="row box-shadow">
      <div className="col-md-4">
        <img src={room.image_urls[0]} alt="" className="small-img" />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <p>Max Count: {room.max_count}</p>
        <p>Type: {room.type}</p>

        <div>
          <button className="btn btn-primary m-2" onClick={handleShow}>
            View Details
          </button>
          <Link to={`/book/${room._id}`}>
            <button className="btn btn-primary m-2">Book Now</button>
          </Link>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.image_urls.map((url) => {
              return (
                <Carousel.Item key={room._id}>
                  <img className="d-block w-100 big-img" src={url} alt="" />
                </Carousel.Item>
              )
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Room

Room.propTypes = {
  room: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image_urls: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    max_count: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rent_per_day: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}
