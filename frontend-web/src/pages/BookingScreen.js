import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BookingScreen() {
  const [room, setRoom] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const { room_id } = useParams()
  useEffect(async () => {
    try {
      const resRoom = await axios({
        method: 'post',
        url: '/api/rooms/getroombyid',
        data: {
          room_id: room_id,
        },
      })
      setRoom(resRoom.data)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }
  }, [])

  return (
    <div className="container">
      <div>
        <h1>Booking screen</h1>
        <h1>Room id: {room._id}</h1>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error...</h1>
        ) : (
          <div>
            <div className="row">
              <div className="col-md-5">
                <h1>{room.name}</h1>
                <img src={room.image_urls[0]} alt="" />
              </div>
              <div className="col-md-5">
                <h1>Booking Details</h1>
                <hr />
                <div>
                  <b>
                    <p>Name: </p>
                    <p>From Date: </p>
                    <p>To Date: </p>
                    <p>Max count: {room.max_count} </p>
                  </b>
                </div>
                <div>
                  <h1>Amount</h1>
                  <hr />
                  <b>
                    <p>Total days:</p>
                    <p>Rent per day:{room.rent_per_day}</p>
                    <p>Total amount:</p>
                  </b>
                </div>
                <div>
                  <button className="btn btn-primary"> Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingScreen
