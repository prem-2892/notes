import { Routes, Route } from 'react-router-dom'

// pages
import Home from '../page/Home'
import Navigation from './Navigation'

const Layout = () => {
  return (
    <div className='flex flex-col gap-5 sm:flex-row relative'>
      <Navigation />
      <div className='flex-1 sm:ml-20'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout
