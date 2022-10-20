import React from 'react'
import {Google, Facebook, Instagram } from 'react-bootstrap-icons'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="text-center footer">
        <div className="container">
            <hr className="hr m-0"></hr>
          <section className="">
            <Facebook className='iconos m-5'/>
            <Google className='iconos m-5'/>
            <Instagram className='iconos m-5'/>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Footer