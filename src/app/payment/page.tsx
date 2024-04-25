import { payment, dataPayment, pengiriman, dataPengiriman } from "@/components/ui/data/data"

import Image from "next/image"

import "@/components/sass/Page.scss"

export default function Payment() {
  return (
    <section className="payment">
      <div className="payment__container container grid">
        <div className="content">
          <div className="payment__content">
            {
              payment.map((item) => (
                <div className="heading">
                  <h1>{item.title}</h1>
                </div>
              ))
            }

            <div className="box">
              {
                dataPayment.map((item) => (
                  <div className="card" key={item.id}>
                    <Image src={item.img} alt='' />
                  </div>
                ))
              }
            </div>
          </div>

          <div className="pengiriman__content">
            {
              pengiriman.map((item) => (
                <div className="heading">
                  <h1>{item.title}</h1>
                </div>
              ))
            }

            <div className="box">
              {
                dataPengiriman.map((item) => (
                  <div className="card">
                    <Image src={item.img} alt='' />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
