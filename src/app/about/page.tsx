'use client'
import { about, dataAbout, quetes } from '@/components/ui/data/data'

import Image from 'next/image'

import "@/components/sass/Page.scss"

import { Fade, Zoom } from 'react-awesome-reveal'
export default function About() {
  return (
    <>
      <section className="about">

        <div className="about__container container grid">

          <div className="content">

            {
              about.map((item) => (
                <div className="left">
                  <Image src={item.img} alt="" />
                </div>
              ))
            }

            {
              dataAbout.map((item) => (
                <div className="right">
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <h1>{item.title}</h1>
                  </Fade>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <p>{item.text}</p>
                  </Fade>
                </div>
              ))
            }

          </div>

        </div>

      </section>

      <section className="quetes">

        <div className="quetes__container container grid">

          {
            quetes.map((item) => (
              <div className="card">
                <Zoom triggerOnce duration={1000} delay={500}>
                  <h3>" {item.text} "</h3>
                </Zoom>

                <Fade triggerOnce duration={1000} delay={500} direction='up'>
                  <span>{item.name}</span>
                </Fade>
              </div>
            ))
          }

        </div>

      </section>
    </>
  )
}
