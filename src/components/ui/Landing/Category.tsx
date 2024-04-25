'use client'
import { category, dataCategory } from '@/components/ui/data/data'

import Image from 'next/image'

import '@/components/sass/Landing.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Category() {
  return (
    <section className="category">

      <div className="category__container container grid">

        {
          category.map((item) => (
            <div className="heading">
              <Fade triggerOnce duration={1000} delay={500} direction='down'>
                <h1>{item.title}</h1>
              </Fade>
            </div>
          ))
        }

        <div className="data">
          {
            dataCategory.map((item) => (
              <div className="card">
                <Zoom triggerOnce duration={1000} delay={500}>
                  <Image src={item.img} alt='' />
                </Zoom>

                <div className="text">
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
