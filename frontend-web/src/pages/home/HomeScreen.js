import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import components
import Room from '../../components/room/Room'
import Loader from '../../components/spinners/Loader'
import Error from '../../components/spinners/Error'

function HomeScreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)

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

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : rooms.length > 0 ? (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3" key={room._id}>
                <Room room={room} />
              </div>
            )
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  )
}

export default HomeScreen
