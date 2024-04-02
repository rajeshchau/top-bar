import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YaCx1kn7ff49RjGyg7-eipMZurgnQY_zgYZuH2E4&s" alt="logo" className='logo' />
      <ul>
        <li>Ai tool category</li>
        <li>Deals</li>
        <li>Submit the tools</li>
        <li>Advertise</li>
        <li>Resources</li>
      </ul>

      <div className='search-box'>
        <input type='text' placeholder='Search'/>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </div>
      


    </div>
  )
}

export default Navbar