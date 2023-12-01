import React from 'react'
import './Nav.css'
import { MdOutlineLocationOn ,MdSearch} from 'react-icons/md';

export default function Menu() {
  return (
    <div id='menu'>
          <ul>
            <MdSearch/>
            <MdOutlineLocationOn/>
          </ul>
    </div>
  )
}
