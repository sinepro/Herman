import './App.css'
import Form from './Form'
import Recap from './Recap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Form />} /> {/* Default landing page */}
          <Route exact path='/recap' element={<Recap />} />
          {/* Other routes of the application */}
        </Routes>
      </div>
    </Router>

  );
}

export default App
