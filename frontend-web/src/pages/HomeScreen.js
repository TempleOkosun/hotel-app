import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import components
import Room from '../components/room/Room'

function HomeScreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  useEffect(async () => {
    try {
      setLoading(true)
      const data = (await axios.get('/api/rooms/getallrooms')).data
      setRooms(data)
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
          <h1>Error</h1>
        ) : (
          rooms.map((room) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="col-md-9 mt-2">
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
