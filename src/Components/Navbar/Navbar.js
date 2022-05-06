import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Navbar({ toggle }) {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/'>
          <img
            src={require('../../assets/images/flag.png')}
            className='logo'
            alt='logo'
          />
        </Link>
        <div className='mobile-icon' onClick={toggle}>
          <FaBars />
        </div>
        <div className='nav-menu'>
          <div className='nav-item'>
            <Link className='nav-links' to='/'>
              Home
            </Link>
          </div>
          <div className='nav-item'>
            <Link className='nav-links' to='/history'>
              History
            </Link>
          </div>
          <div className='nav-item'>
            <Link className='nav-links' to='/map'>
              US Map
            </Link>
          </div>
          <div className='nav-item'>
            <Link
              className='nav-links'
              to={{ pathname: 'https://www.nass.org/can-I-vote' }}
              target='_blank'
            >
              Voting Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
