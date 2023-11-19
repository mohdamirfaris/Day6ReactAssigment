import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

function Navbar() {
  return (

<div>
    
    <div className='container'>
    
            <li><Link to={'/'}>Component1</Link></li>
            
            <li><Link to={'2'}>Component2</Link></li>

            <li><Link to={'3'}>Component3</Link></li>

            <li><Link to={'4'}>Component4</Link></li>

            <li><Link to={'5'}>Component5</Link></li>

            <li><Link to={'6'}>Component6</Link></li>

            <li><Link to={'7'}>Component7</Link></li>

    </div>

</div>

  )
}

export default Navbar