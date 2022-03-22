import { Navigate, Route, Routes } from 'react-router-dom'
import './styling/App.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { User } from './pages/User'
import { Profile } from './pages/Profile'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="sign-in" />} />
        <Route path='/sign-in' element={< SignIn />} />
        <Route path='/sign-up' element={< SignUp />} />
        <Route path='/user/:username' element={<User/>} />
        <Route path='/profile' element={< Profile/>} />
      </Routes>
    </div>
  )
}

export default App