import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './_BookingScreen.css'
import Loader from '../../components/spinners/Loader'
import Error from '../../components/spinners/Error'
import moment from 'moment'

function BookingScreen() {
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(false)
  const [totalAmount, setTotalAmount] = useState()

  const { room_id, fromDate, toDate } = useParams()
  // const formattedFromDate = moment(fromDate, 'DD-MM-YYYY')
  // const formattedToDate = moment(toDate, 'DD-MM-YYYY')
  // // const totalDays = moment.duration(formattedToDate.diff(formattedFromDate)).asDays() + 1
  const totalDays =
    moment.duration(moment(toDate, 'DD-MM-YYYY').diff(moment(fromDate, 'DD-MM-YYYY'))).asDays() + 1

  useEffect(async () => {
    try {
      setLoading(true)
      const resRoom = await axios({
        method: 'post',
        url: '/api/rooms/getroombyid',
        data: {
          room_id: room_id,
        },
      })
      setRoom(resRoom.data)
      setTotalAmount(totalDays * resRoom.data.rent_per_day)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [])

  async function bookRoom(e) {
    e.preventDefault()
    const bookingDetails = {
      room,
      userId: JSON.parse(localStorage.getItem('currentUser')),
      fromDate,
      toDate,
      totalDays,
      totalAmount,
    }

    try {
      const result = await axios.post('/api/bookings/bookroom', bookingDetails)
    } catch (error) {}
  }

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 box-shadow">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img src={room.image_urls[0]} alt="" className="big-img" />
            </div>

            <div className="col-md-6">
              <h1>Booking Details</h1>
              <hr />
              <div>
                <b>
                  <p>Name: </p>
                  <p>From Date: {fromDate} </p>
                  <p>To Date: {toDate} </p>
                  <p>Max count: {room.max_count} </p>
                </b>
              </div>

              <div>
                <h1>Amount</h1>
                <hr />
                <b>
                  <p>Total days: {totalDays}</p>
                  <p>Rent per day: {room.rent_per_day}</p>
                  <p>Total amount: {totalAmount}</p>
                </b>
              </div>

              <div>
                <button className="btn btn-primary mt-5" onClick={bookRoom}>
                  {' '}
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error message="Something went wrong" />
      )}
    </div>
  )
}

export default BookingScreen
