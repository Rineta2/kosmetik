'use client'
import { useState, useEffect } from 'react'

import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowAltCircleUp } from "react-icons/fa";

import { Fade, Zoom } from 'react-awesome-reveal'

import { ImMakeGroup } from "react-icons/im";

import '@/components/sass/Footer.scss'
export default function Footer() {

  const [currentYear] = useState(new Date().getFullYear());

  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setShowArrow(true)
      } else {
        setShowArrow(false)
      }
    })
  })

  return (
    <>
      <footer>
        <div className="footer__container">

          <div className="footer__logo">
            <Fade triggerOnce duration={1000} delay={500} direction='down'>
              <h1><ImMakeGroup className="icons" />PT Kecantikan Aurora</h1>
            </Fade>
          </div>

          <div className="social">
            <Zoom triggerOnce duration={1000} delay={500}>
              <a href="https://www.facebook.com/profile.php?id=61552827874333" target='_blank'><FaFacebookF className="icons" /></a>
              <a href="https://www.instagram.com/rzkir.20/" target='_blank'><FaInstagram className="icons" /></a>
              <a href="https://wa.me/+6281398632939" target='_blank'><FaWhatsapp className="icons" /></a>
            </Zoom>
          </div>

          <Fade triggerOnce duration={1000} delay={500} direction='up'>
            <p>Copyright &copy; {currentYear} <a href="https://rineta.vercel.app/" target='_blank'>rineta.io</a> All rights reserved</p>
          </Fade>

        </div>

      </footer>

      <div className={`arrow ${showArrow ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <FaArrowAltCircleUp className='icon' />
      </div>
    </>
  )
}
