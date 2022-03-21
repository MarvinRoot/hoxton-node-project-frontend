import { Navigate, Route, Routes } from 'react-router-dom'
import './styling/App.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="sign-in" />} />
        <Route path='/sign-in' element={< SignIn />} />
        <Route path='/sign-up' element={< SignUp />} />
        <Route path='/home' element={< Home />} />
      </Routes>
    </div>
  )
}

export default App
