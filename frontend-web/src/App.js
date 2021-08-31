import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import BookingScreen from './pages/BookingScreen'
import PropTypes from 'prop-types'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/book/:room_id" exact component={BookingScreen} />
      </Router>
    </div>
  )
}

export default App
