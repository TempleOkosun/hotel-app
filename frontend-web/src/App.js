import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './pages/home/HomeScreen'
import BookingScreen from './pages/booking/BookingScreen'
import RegisterScreen from './pages/register/RegisterScreen'
import LoginScreen from './pages/login/LoginScreen'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/book/:room_id/:fromDate/:toDate" exact component={BookingScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
      </Router>
    </div>
  )
}

export default App
