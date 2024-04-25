'use client'
import { useState } from "react";

import { gallery, galleryData } from "../data/data"

import Image from "next/image"

import '@/components/sass/Landing.scss'

import { StaticImageData } from "next/image"

import { FaTimes } from 'react-icons/fa'

import { Fade, Zoom } from 'react-awesome-reveal'
export default function Gallery() {

  const [visibleItems, setVisibleItems] = useState(4);
  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 2);
  };

  const [model, setModel] = useState(false)

  const [tempingSrc, setTempImgSrc] = useState<StaticImageData | null>(null);

  const getImg = (Image: StaticImageData) => {
    setTempImgSrc(Image)
    setModel(true)
  }

  const remainingItems = galleryData.length - visibleItems;

  return (
    <section className="gallery" id="gallery">

      <div className="gallery__container container grid">

        {
          gallery.map((item) => (
            <div className="heading">
              <Fade triggerOnce duration={1000} delay={500} direction='left'>
                <h1>{item.title}</h1>
              </Fade>
            </div>
          ))
        }

        <div className="box__data">
          {
            galleryData.slice(0, visibleItems).map((item) => (
              <div className="data">
                <Zoom triggerOnce duration={1000} delay={500 * item.id}>
                  <Image src={item.img} alt='' onClick={() => getImg(item.img)} />
                </Zoom>
              </div>
            ))
          }
        </div>

        <div className={model ? "model open" : "model"}>
          <div className="model__content">
            {tempingSrc && <Image src={tempingSrc} alt='' />}
          </div>

          <div className="close" onClick={() => setModel(false)}>
            <FaTimes className='icon' />
          </div>

        </div>

        {remainingItems <= 0 && <p>Foto telah habis</p>}

        {remainingItems > 0 && <button onClick={loadMoreItems}>Muat lebih banyak</button>}

      </div>

    </section>
  )
}
