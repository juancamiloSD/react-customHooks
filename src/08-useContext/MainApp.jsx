import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPAge'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <>
        <UserProvider>
        <div className='container'>
            <NavBar />
            <hr />
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='login' element={ <LoginPage /> } />
                <Route path='about' element={ <AboutPage /> } />
                {/* <Route path='/*' element={ <AboutPage /> } /> */}
                <Route path='/*' element={ <Navigate to="/about" /> } />
            </Routes>
        </div>
        </UserProvider>
    </>
  )
}
