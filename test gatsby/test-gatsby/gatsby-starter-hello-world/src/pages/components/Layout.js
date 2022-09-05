import React from 'react'
import NavBar from './NavBar'
import './styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <NavBar />
      <div className='content'>
        { children }
      </div>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  )
}
