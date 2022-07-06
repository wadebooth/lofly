import React from 'react'
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav>
      <h1>Lofly: Lofi Music Player</h1>
      <button
        className='btn'
        onClick={() => {
          if (!librarystatus) {
            setLibrarystatus(true)
          } else if (librarystatus) {
            setLibrarystatus(false)
          }
        }}
      ></button>
    </nav>
  )
}

export default Nav
