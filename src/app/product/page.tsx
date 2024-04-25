'use client'
import { useEffect, useState, useRef } from 'react';

import Link from 'next/link';

import '@/components/sass/Page.scss';

import { product, dataProduct, button } from '@/components/ui/data/data';

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(5);
  const [model, setModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [loadedItems, setLoadedItems] = useState<number[]>([]);
  const modelRef = useRef<HTMLDivElement | null>(null);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    setVisibleItems(5);
  };

  const filteredData = selectedCategory === 'all'
    ? dataProduct
    : dataProduct.filter(img => img.category === selectedCategory);

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };

  const remainingItems = filteredData.length - visibleItems;

  const loadImage = (src: string, id: number) => {
    const img = new Image();
    img.onload = () => handleImageLoad(id);
    img.src = src;
  };

  const handleImageLoad = (id: number) => {
    setLoadedItems((prevLoadedItems) => [...prevLoadedItems, id]);
  };

  useEffect(() => {
    filteredData.slice(0, visibleItems).forEach((item) => {
      if (!loadedItems.includes(item.id)) {
        loadImage(item.img.src, item.id);
      }
    });
  }, [filteredData, visibleItems, loadedItems]);

  const openModel = (product: any) => {
    setSelectedProduct(product);
    setModel(true);
  };

  const closeModel = () => {
    setSelectedProduct(null);
    setModel(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modelRef.current && !modelRef.current.contains(event.target as Node)) {
        closeModel();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modelRef]);

  return (
    <section className="product">
      <div className="product__container container grid">
        {product.map((item, index) => (
          <div className="heading" key={index}>
            <Fade triggerOnce duration={1000} delay={500} direction='down'>
              <h1>{item.title}</h1>
            </Fade>
          </div>
        ))}
        <div className="filter__button">
          {button.map((item, index) => (
            <Zoom triggerOnce duration={1000} delay={500}>
              <button key={index} className={selectedCategory === item.category ? 'active' : ''} onClick={() => handleFilter(item.category)}>{item.title}</button>
            </Zoom>
          ))}
        </div>

        <div className="content">
          {filteredData.slice(0, visibleItems).map((item) => (
            <div className="card" key={item.id}>
              <Zoom>
                <img src={item.img.src} alt="" onLoad={() => loadImage(item.img.src, item.id)} className={`fadeIn ${loadedItems.includes(item.id) ? 'loaded' : ''}`} />
              </Zoom>
              <div className="text">
                <Fade triggerOnce duration={1000} delay={500} direction='down'>
                  <b>{item.price}</b>
                </Fade>

                <Zoom triggerOnce duration={1000} delay={500}>
                  <span>{item.title}</span>
                </Zoom>

                <Fade triggerOnce duration={1000} delay={500} direction='up'>
                  <button onClick={() => openModel(item)}>Lihat Detail</button>
                </Fade>
              </div>
            </div>
          ))}
        </div>

        <div className={model ? 'model open' : 'model'}>
          <div className="box__model" ref={modelRef}>
            {selectedProduct && (
              <>
                <img src={selectedProduct.img.src} alt={selectedProduct.title} />
                <div className="product__info">
                  <h2>{selectedProduct.title}</h2>
                  <p>{selectedProduct.price}</p>
                  <Link href="/checkout">checkout</Link>
                </div>
              </>
            )}
          </div>
        </div>

        <Fade triggerOnce duration={1000} delay={500} direction='up'>
          {remainingItems <= 0 && <p>Produk kosong</p>}
        </Fade>

        {remainingItems > 0 && <button onClick={loadMoreItems}>Lihat Product Lainnya</button>}
      </div>
    </section>
  );
}