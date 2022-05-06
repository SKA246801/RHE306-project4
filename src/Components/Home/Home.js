import React, { useState } from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className='homepage'>
        <h1 className='title'>The Electoral College</h1>
      </div>
    </>
  )
}

export default Home
