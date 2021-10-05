import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import components
import Room from '../../components/room/Room'
import Loader from '../../components/spinners/Loader'
import Error from '../../components/spinners/Error'
import moment from 'moment'
import { DatePicker, Space } from 'antd'

const { RangePicker } = DatePicker

import 'antd/dist/antd.css'

function HomeScreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)

  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  useEffect(async () => {
    try {
      setLoading(true)
      const resRooms = await axios.get('/api/rooms/getallrooms')
      setRooms(resRooms.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  function filterByDate(dates) {
    setFromDate(moment(dates[0]).format('DD-MM-YYYY'))
    setToDate(moment(dates[1]).format('DD-MM-YYYY'))
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : rooms.length > 0 ? (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3" key={room._id}>
                <Room room={room} fromDate={fromDate} toDate={toDate} />
              </div>
            )
          })
        ) : (
          <Error message="Something went wrong" />
        )}
      </div>
    </div>
  )
}

export default HomeScreen
