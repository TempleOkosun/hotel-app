import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/home" exact component={HomeScreen} />
      </Router>
    </div>
  )
}

export default App
