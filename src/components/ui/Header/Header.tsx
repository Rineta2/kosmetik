'use client'

import { useState, useEffect } from 'react';

import { menu } from "../data/data"

import { MdMedicalInformation } from "react-icons/md";

import Link from "next/link"

import "@/components/sass/Header.scss"

import { usePathname } from "next/navigation";

import { IoIosCall } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { FaRegTimesCircle } from "react-icons/fa";

import { Fade, Zoom } from 'react-awesome-reveal'
export default function Header() {

  const pathname = usePathname()


  //=========== Fixed Header ===========//

  const [fix, setFix] = useState<boolean>(false);
  const [hideNav, setHideNav] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false)

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (windowHeight + scrollPosition >= documentHeight) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }

    if (scrollPosition > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={fix ? "fixed" : ""}>
        <nav className="container">

          <div className="logo">
            <Fade triggerOnce duration={1000} delay={500} direction='down'>
              <h1>Aurora</h1>
            </Fade>
          </div>

          <Zoom triggerOnce duration={1000} delay={500}>
            <ul className={hideNav ? "nav__list hide" : "nav__list"}>
              {
                menu.map((item) => (
                  <li key={item.id} className="nav__item">
                    <Link href={item.path} className={pathname === item.path ? "nav__link active" : "nav__link"}>
                      <span className="nav__name">{item.title}</span>
                      <span className="nav__icons">{item.icon}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Zoom>

          <div className="info" onClick={() => setShow(true)}>
            <Fade triggerOnce duration={1000} delay={500} direction='down'>
              <MdMedicalInformation className="menu" />
            </Fade>
          </div>
        </nav>
      </header>

      <div className={`box__info ${show ? "open" : ""}`}>
        <div className="content">
          <div className="content__info">
            <h1 className='title'>Social Kami</h1>

            <div className="social">
              <div className="call">
                <IoIosCall className='icons' />
                <span>+6281398632939</span>
              </div>

              <div className="email">
                <MdAttachEmail className='icons' />
                <span>rinetastore@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="maps">
            <h1>Alamat Kami</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1714032814815!6m8!1m7!1sfxnAD4XL0OAuToy5s0cl8w!2m2!1d-6.571014799863566!2d106.6342068991356!3f87.20919!4f0!5f0.7820865974627469" width="600" height="400" style={{ border: 0 }} loading="lazy"></iframe>
          </div>

          <div className="close" onClick={() => setShow(false)}>
            <FaRegTimesCircle className='close__icons' />
          </div>
        </div>
      </div>
    </>
  )
}
