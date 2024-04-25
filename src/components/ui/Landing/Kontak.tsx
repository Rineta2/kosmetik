'use client'
import { imgKontak, sideKontak, dataKontak, social } from '@/components/ui/data/data';

import Image from 'next/image';

import Link from 'next/link';

import "@/components/sass/Landing.scss";

import { Fade, Zoom } from 'react-awesome-reveal';
export default function Kontak() {
  return (
    <section className="kontak">
      <div className="kontak__container container grid">

        <div className="kontak__data">

          {
            imgKontak.map((item) => (
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
            sideKontak.map((item) => (
              <div className="right">
                <div className="content__data">
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <h1 className="kontak__title">{item.title}</h1>
                  </Fade>

                  {
                    dataKontak.map((item) => (
                      <div className="box__contact" key={item.id}>
                        <Zoom triggerOnce duration={1000} delay={500}>
                          <h1><i>{item.icons}</i>{item.title}</h1>
                        </Zoom>

                        <Zoom triggerOnce duration={1000} delay={500}>
                          <Link href={item.path} className="button" target='_blank'>{item.button}<i>{item.arrow}</i></Link>
                        </Zoom>
                      </div>
                    ))
                  }

                  <div className="social">
                    {
                      social.map((item) => (
                        <Zoom>
                          <Link href={item.path} key={item.id} target='_blank'>
                            <i>{item.icon}</i>
                          </Link>
                        </Zoom>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}
