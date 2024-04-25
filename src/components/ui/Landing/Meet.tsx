'use client'
import { useState } from "react";

import { meet, meetData } from "../data/data"

import Image from "next/image"

import { TiTimes } from "react-icons/ti";

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Meet() {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = (e: any, setter: any) => setter(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !phone || !address || !date || !time || !message) {
      alert("Silahkan isi semua informasi sebelum mengirimkan pesan.");
      return;
    }

    const confirmSubmission = window.confirm("Apakah formulir ini sudah benar? Klik OK untuk melanjutkan.");
    if (!confirmSubmission) return;

    const messageContent = `
      Hello, Saya Ingin Membuat Janji Tamu:
      - Name: ${name}
      - Phone Number: ${phone}
      - Address: ${address}
      - Date: ${date}
      - Time: ${time}
      - Message: ${message}
    `;

    const recipient = '6281398632939';
    const whatsappURL = `https://wa.me/${recipient}?text=${encodeURIComponent(messageContent)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="meet">
      <div className="meet__container container grid">

        {
          meet.map((item) => (
            <Image src={item.img} alt="" />
          ))
        }

        {
          meetData.map((item) => (
            <div className="text">
              <h1>{item.title}</h1>

              <p>{item.text}</p>

              <Fade triggerOnce duration={1000} delay={500} direction='up'>
                <button onClick={() => setShow(!show)}>{item.button}</button>
              </Fade>
            </div>
          ))
        }

        <div className={`model ${show ? 'open' : ''}`}>
          <form onSubmit={handleSubmit}>
            <div className="box">
              <Zoom triggerOnce duration={1000} delay={500}>
                <label>Nama :</label>
                <input id="name" type="text" value={name} onChange={(e) => handleChange(e, setName)} required />
              </Zoom>
            </div>

            <div className="box">
              <Zoom triggerOnce duration={1000} delay={500}>
                <label>Tanggal :</label>
                <input id="date" type="date" value={date} onChange={(e) => handleChange(e, setDate)} required />
              </Zoom>
            </div>

            <div className="box">
              <Zoom triggerOnce duration={1000} delay={500}>
                <label>Jam : </label>
                <input id="time" type="time" value={time} onChange={(e) => handleChange(e, setTime)} required />
              </Zoom>
            </div>

            <div className="box">
              <Zoom triggerOnce duration={1000} delay={500}>
                <label>Pesan :</label>
                <textarea id="message" value={message} onChange={(e) => handleChange(e, setMessage)} required />
              </Zoom>
            </div>

            <div className="box">
              <Zoom triggerOnce duration={1000} delay={500}>
                <label>Nomber :</label>
                <input id="phone" type="tel" value={phone} onChange={(e) => handleChange(e, setPhone)} required />
              </Zoom>
            </div>

            <div className="box">
              <Zoom triggerOnce duration={1000} delay={500}>
                <label>Alamat :</label>
                <textarea id="address" value={address} onChange={(e) => handleChange(e, setAddress)} required />
              </Zoom>
            </div>

            <Fade triggerOnce duration={1000} delay={500} direction='up'>
              <button type="submit">Kirim</button>
            </Fade>
          </form>

          <div className="close" onClick={() => setShow(!show)}>
            <i><TiTimes /></i>
          </div>
        </div>

      </div>
    </section>
  )
}
