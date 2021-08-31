import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import components
import Room from '../components/room/Room'

function HomeScreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(async () => {
    try {
      const resRooms = await axios.get('/api/rooms/getallrooms')
      setRooms(resRooms.data)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }
  }, [])

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error...</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2" key={room._id}>
                <Room room={room} />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default HomeScreen
