'use client'
import React, { useState } from 'react';

import Image from 'next/image';

import img from '@/components/assets/Checkout/checkout.jpg';

import "@/components/sass/Page.scss";

export default function Checkout() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentName, setPaymentName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleChangeName = (e: any) => setName(e.target.value);
  const handleChangePhone = (e: any) => setPhone(e.target.value);
  const handleChangeAddress = (e: any) => setAddress(e.target.value);
  const handleChangePaymentName = (e: any) => setPaymentName(e.target.value);
  const handleChangePaymentMethod = (e: any) => setPaymentMethod(e.target.value);
  const handleChangeItemName = (e: any) => setItemName(e.target.value);
  const handleChangeQuantity = (e: any) => setQuantity(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !phone || !address || !paymentName || !paymentMethod || !itemName || !quantity) {
      alert("Silakan isi semua informasi sebelum mengirimkan pesanan.");
      return;
    }

    const confirmSubmission = window.confirm("Jika Anda sudah mengisi formulir, berikan bukti pembayaran dan klik OK untuk melanjutkan.");
    if (!confirmSubmission) return;

    const message = `
      Halo, saya ingin memesan:
      - Nama: ${encodeURIComponent(name)}
      - Nomor Handphone: ${encodeURIComponent(phone)}
      - Alamat: ${encodeURIComponent(address)}
      - Nama Pembayaran: ${encodeURIComponent(paymentName)}
      - Jenis Pembayaran: ${encodeURIComponent(paymentMethod)}
      - Nama Item: ${encodeURIComponent(itemName)}
      - Jumlah: ${encodeURIComponent(quantity)}
    `;

    const recipient = '6281398632939';
    const whatsappURL = `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className='checkout'>
      <div className="checkout__container container grid">
        <div className="box__checkout">
          <Image src={img} alt="Checkout Image" />
          <div className="form__content">
            <form onSubmit={handleSubmit}>
              <div className="box">
                <label htmlFor="name">Nama</label>
                <input id="name" type="text" value={name} onChange={handleChangeName} required />
              </div>

              <div className="box">
                <label htmlFor="phone">Nomor Handphone</label>
                <input id="phone" type="tel" value={phone} onChange={handleChangePhone} required />
              </div>

              <div className="box">
                <label htmlFor="quantity">Jumlah</label>
                <input id="quantity" type="number" min="1" value={quantity} onChange={handleChangeQuantity} required />
              </div>

              <div className="box">
                <label htmlFor="itemName">Nama Item</label>
                <input id="itemName" type="text" value={itemName} onChange={handleChangeItemName} required />
              </div>

              <div className="box">
                <label htmlFor="paymentName">Nama Pembayaran</label>
                <input id="paymentName" type="text" value={paymentName} onChange={handleChangePaymentName} required />
              </div>

              <div className="box">
                <label htmlFor="address">Alamat</label>
                <textarea id="address" value={address} onChange={handleChangeAddress} required />
              </div>

              <div className="box">
                <label htmlFor="paymentMethod">Jenis Pembayaran</label>
                <select id="paymentMethod" value={paymentMethod} onChange={handleChangePaymentMethod} required>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="OVO">OVO</option>
                  <option value="GoPay">GoPay</option>
                  <option value="Dana">Dana</option>
                  <option value="LinkAja">LinkAja</option>
                </select>
              </div>

              <button type="submit">Send Order</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}