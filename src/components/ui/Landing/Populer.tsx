'use client'
import { populer, dataPopuler } from '@/components/ui/data/data'

import Image from 'next/image'

import '@/components/sass/Landing.scss'

import Link from 'next/link'

import { Fade, Zoom } from 'react-awesome-reveal'
export default function Populer() {
  return (
    <section className='populer'>
      <div className="populer__container container grid">

        <div className="populer__data">

          {
            populer.map((item) => (
              <div className="text">
                <Fade triggerOnce duration={1000} delay={500} direction='left'>
                  <h1>{item.title}</h1>
                </Fade>

                <Fade triggerOnce duration={1000} delay={500} direction='up'>
                  <p>{item.text}</p>
                </Fade>
              </div>
            ))
          }

          <div className="content">
            {
              dataPopuler.map((item) => (
                <div className="card" key={item.id}>
                  <Zoom triggerOnce duration={1000} delay={500}>
                    <Image src={item.img} alt='' />
                  </Zoom>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <span>{item.title}</span>
                  </Fade>
                </div>
              ))
            }
          </div>
        </div>

        <Zoom triggerOnce duration={1000} delay={500}>
          <Link href={'/product'} className='button'>Lihat Produk Lainnya</Link>
        </Zoom>

      </div>
    </section>
  )
}
