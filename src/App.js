import './App.css'
import { Router, Routes, Route } from 'react-router-dom'

// components
import History from './Components/History/History'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/history' element={<History />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
