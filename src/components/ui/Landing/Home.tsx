'use client'
import { imgHome, sideHome } from "../data/data"

import Image from "next/image"

import Link from "next/link"

import "@/components/sass/Landing.scss"

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Home() {
  return (
    <section className="home">

      <div className="home__container container grid">

        <div className="home__data">

          {
            imgHome.map((item) => (
              <div className="left">
                <div className="text">
                  <Fade triggerOnce duration={1000} delay={500} direction='left'>
                    <h1>{item.title}</h1>
                  </Fade>
                </div>
                <Image src={item.img} alt="" />
              </div>
            ))
          }

          {
            sideHome.map((item) => (
              <div className="right">
                <Fade triggerOnce duration={1000} delay={500} direction='down'>
                  <h1 className="home__title">{item.title}</h1>
                </Fade>

                <Fade triggerOnce duration={1000} delay={500} direction="up">
                  <Link href={item.path} className="button">{item.button}</Link>
                </Fade>
              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}
