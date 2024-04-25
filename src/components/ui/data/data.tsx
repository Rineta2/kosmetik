import homeImg from '@/components/assets/Home/home.jpg'

import { FaCircleUser } from "react-icons/fa6";
import { IoMdHome, IoIosArrowForward } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SiGmail } from "react-icons/si";

import img1 from '@/components/assets/Populer/img1.jpg'
import img2 from '@/components/assets/Populer/img2.jpeg'
import img3 from '@/components/assets/Populer/img3.jpeg'

import gallery1 from '@/components/assets/Gallery/img1.jpg'
import gallery2 from '@/components/assets/Gallery/img2.jpg'
import gallery3 from '@/components/assets/Gallery/img3.jpg'
import gallery4 from '@/components/assets/Gallery/img4.jpg'
import gallery5 from '@/components/assets/Gallery/img5.jpg'
import gallery6 from '@/components/assets/Gallery/img6.jpg'
import gallery7 from '@/components/assets/Gallery/img7.jpg'
import gallery8 from '@/components/assets/Gallery/img8.jpg'
import gallery9 from '@/components/assets/Gallery/img9.jpg'

import makeup from '@/components/assets/Kategory/makeup.jpg'
import parfum from '@/components/assets/Kategory/parfum.jpg'
import shampo from '@/components/assets/Kategory/shampo.jpg'

import meetImg from '@/components/assets/Meet/meet.jpg'

import AboutImg from '@/components/assets/About/about.jpg'

import shampo1 from '@/components/assets/Product/shampo1.jpeg'
import shampo2 from '@/components/assets/Product/shampo2.jpeg'
import shampo3 from '@/components/assets/Product/shampo3.jpeg'
import shampo4 from '@/components/assets/Product/shampo4.jpeg'
import makeup1 from '@/components/assets/Product/makeup1.jpeg'
import makeup2 from '@/components/assets/Product/makeup2.jpeg'
import makeup3 from '@/components/assets/Product/makeup3.jpeg'
import makeup4 from '@/components/assets/Product/makeup4.jpeg'
import parfum1 from '@/components/assets/Product/parfum1.jpeg'
import parfum2 from '@/components/assets/Product/parfum2.jpeg'
import parfum3 from '@/components/assets/Product/parfum3.jpeg'
import parfum4 from '@/components/assets/Product/parfum4.jpeg'

import payment1 from '@/components/assets/payment/alfamart.png'
import payment2 from '@/components/assets/payment/alfamidi.png'
import payment3 from '@/components/assets/payment/bca.png'
import payment4 from '@/components/assets/payment/bni.png'
import payment5 from '@/components/assets/payment/bri.png'
import payment6 from '@/components/assets/payment/bsi.png'
import payment7 from '@/components/assets/payment/cimb.png'
import payment8 from '@/components/assets/payment/indomaret.png'
import payment9 from '@/components/assets/payment/mandiri.png'
import payment10 from '@/components/assets/payment/seabank.png'
import payment11 from '@/components/assets/payment/visa.png'

import pengiriman1 from '@/components/assets/Pengiriman/anaraja.png'
import pengiriman2 from '@/components/assets/Pengiriman/gosend.png'
import pengiriman3 from '@/components/assets/Pengiriman/grab.png'
import pengiriman4 from '@/components/assets/Pengiriman/j&t.png'
import pengiriman5 from '@/components/assets/Pengiriman/j&t2.png'
import pengiriman6 from '@/components/assets/Pengiriman/jne.png'
import pengiriman7 from '@/components/assets/Pengiriman/ninja.png'
import pengiriman8 from '@/components/assets/Pengiriman/post.png'
import pengiriman9 from '@/components/assets/Pengiriman/sicepat.png'
import pengiriman10 from '@/components/assets/Pengiriman/spx.png'

import { StaticImageData } from 'next/image';

//================== Menu ==================//

export const menu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <IoMdHome />,
    active: "home"
  },

  {
    id: 2,
    title: "About",
    path: "/about",
    icon: <FaCircleUser />,
    active: "about"
  },

  {
    id: 3,
    title: "Product",
    path: "/product",
    icon: <RiProductHuntLine />,
    active: "product"
  },

  {
    id: 4,
    title: "Payment",
    path: "/payment",
    icon: <GrShieldSecurity />,
    active: "payment"
  },
]

//================== Home ==================//

export const imgHome = [
  {
    title: "PT Kecantikan Aurora",
    img: homeImg
  }
]

export const sideHome = [
  {
    title: "Koleksi Cerah Berseri",
    path: "#gallery",
    button: "Lihat Selengkapnya"
  }
]

//================== Populer ==================//

export const populer = [
  {
    title: "Product Populer Saat Ini",
    text: "Untuk tampilan lembut dan awet muda",
  }
]

export const dataPopuler = [
  {
    id: 1,
    img: img1,
    title: "Lipstik Ultra Stay Lolepop Matte",
  },
  {
    id: 2,
    img: img2,
    title: "LAMEILA 3019 FOUNDATION",
  },
  {
    id: 3,
    img: img3,
    title: "Sadoer Powder",
  }
]

//================== Kategory ==================//

export const category = [
  {
    title: "Kategori Lainnya"
  }
]

export const dataCategory = [
  {
    id: 1,
    img: makeup,
    text: "Makeup",
  },

  {
    id: 2,
    img: parfum,
    text: "Parfum",
  },

  {
    id: 3,
    img: shampo,
    text: "Shampo",
  },
]

//================== Meet ==================//

export const meet = [
  {
    img: meetImg
  }
]

export const meetData = [
  {
    title: "layanan perawatan kulit",
    text: "Kami memiliki ahli perawatan kulit yang siap mendampingi Anda sepanjang perjalanan perawatan diri Anda",
    button: "buat janji temu",
  }
]

//================== Gallery ==================//

export const gallery = [
  {
    title: "Galeri",
  }
]

export const galleryData = [
  {
    id: 1,
    img: gallery1,
  },
  {
    id: 2,
    img: gallery2,
  },
  {
    id: 3,
    img: gallery3,
  },

  {
    id: 4,
    img: gallery4,
  },

  {
    id: 5,
    img: gallery5,
  },
  {
    id: 6,
    img: gallery6,
  },

  {
    id: 7,
    img: gallery7,
  },
  {
    id: 8,
    img: gallery8,
  },

  {
    id: 9,
    img: gallery9,
  },
]

//================== Kontak ==================//

export const imgKontak = [
  {
    title: "PT Kecantikan Aurora",
    img: homeImg
  }
]

export const sideKontak = [
  {
    title: "Kontak Kami",
  }
]

export const dataKontak = [
  {
    id: 1,
    title: "Temukan toko kami",
    button: "Google Maps",
    icons: <MdOutlineMapsHomeWork />,
    arrow: <IoIosArrowForward />,
    path: "https://maps.app.goo.gl/fyrYN8rKuiEYJMcL7"
  },

  {
    id: 2,
    title: "Alamat Surel",
    button: "rinetastore@gmail.com",
    icons: <SiGmail />,
    arrow: <IoIosArrowForward />,
    path: "mailto:rinetastore@gmail"
  },
]

export const social = [
  {
    id: 1,
    icon: <FaFacebookF />,
    path: 'https://www.facebook.com/profile.php?id=61552827874333'
  },

  {
    id: 2,
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/rzkir.20/'
  },

  {
    id: 3,
    icon: <FaWhatsapp />,
    path: 'https://wa.me/6281398632939'
  },

  {
    id: 4,
    icon: <FaTiktok />,
    path: 'https://www.tiktok.com/@rineta.io?is_from_webapp=1&sender_device=pc'
  },
]

//================== About ==================//

export const about = [
  {
    img: AboutImg
  }
]

export const dataAbout = [
  {
    title: "Kisah Merek Kami",
    text: "PT Kecantikan Aurora didirikan oleh Cleo Smith pada tahun 2015. Perusahaan ini berdedikasi untuk menghasilkan produk berkualitas tinggi yang pasti akan Anda sukai."
  }
]

//================== Quetes ==================//
export const quetes = [
  {
    text: "Saya pengguna terbesar produk kami. Saya tidak akan menaruh sesuatu yang berbahaya pada kulit saya, jadi saya dapat meyakinkan Anda bahwa hanya bahan-bahan paling murni yang digunakan di Kastil Viridian.",
    name: "- Cleo Smith, CEO"
  }
]

//================== Product ==================//

export const product = [
  {
    title: "Product Kami"
  }
]

export const dataProduct = [
  {
    id: 1,
    title: "TRESEMME SHAMPOO KERATIN",
    price: "Rp. 40.000",
    category: "shampo",
    img: shampo1,
  },

  {
    id: 2,
    title: "Premiere Beaute",
    price: "Rp. 200.000",
    category: "parfum",
    img: parfum1,
  },

  {
    id: 3,
    title: "O.TWO.O Makeup",
    price: "Rp. 200.000",
    category: "makeup",
    img: makeup1,
  },

  {
    id: 4,
    title: "Lilith and Eve Night",
    price: "Rp. 200.000",
    category: "parfum",
    img: parfum2,
  },

  {
    id: 5,
    title: "Beauty Powder",
    price: "Rp. 200.000",
    category: "makeup",
    img: makeup2,
  },

  {
    id: 6,
    title: "SAMPO PELURUS RAMBUT",
    price: "Rp. 135.000",
    category: "shampo",
    img: shampo2,
  },

  {
    id: 7,
    title: "Eloi Coco Temptation",
    price: "Rp. 35.000",
    category: "parfum",
    img: parfum3,
  },

  {
    id: 8,
    title: "BIOAQUA x Sunisa",
    price: "Rp. 200.000",
    category: "makeup",
    img: makeup3,
  },

  {
    id: 9,
    title: "Kahf Revered Oud Eau De Toilette",
    price: "Rp. 72.000",
    category: "parfum",
    img: parfum4,
  },

  {
    id: 10,
    title: "SELSUN Yellow",
    price: "Rp. 200.000",
    category: "shampo",
    img: shampo3,
  },

  {
    id: 11,
    title: "AZZURA Two Way Cake",
    price: "Rp. 200.000",
    category: "makeup",
    img: makeup4,
  },

  {
    id: 12,
    title: "AZZURA Two Way Cake",
    price: "Rp. 200.000",
    category: "shampo",
    img: shampo4,
  },
]

export const button = [
  {
    id: 1,
    title: "Semua Produk",
    category: "all",
  },

  {
    id: 2,
    title: "Shampo",
    category: "shampo",
  },

  {
    id: 3,
    title: "Parfum",
    category: "parfum",
  },

  {
    id: 4,
    title: "Makeup",
    category: "makeup",
  }
]

//================== Payment ==================//

export const payment = [
  {
    title: "Metode Pembayaran"
  }
]

export const dataPayment = [
  {
    id: 1,
    img: payment1,
  },

  {
    id: 2,
    img: payment2,
  },

  {
    id: 3,
    img: payment3,
  },

  {
    id: 4,
    img: payment4,
  },

  {
    id: 5,
    img: payment5,
  },

  {
    id: 6,
    img: payment6,
  },

  {
    id: 7,
    img: payment7,
  },

  {
    id: 8,
    img: payment8,
  },

  {
    id: 9,
    img: payment9,
  },

  {
    id: 10,
    img: payment10,
  },

  {
    id: 11,
    img: payment11,
  },
]

export const pengiriman = [
  {
    title: "Pengiriman"
  }
]

export const dataPengiriman = [
  {
    id: 1,
    img: pengiriman1,
  },

  {
    id: 2,
    img: pengiriman2,
  },

  {
    id: 3,
    img: pengiriman3,
  },

  {
    id: 4,
    img: pengiriman4,
  },

  {
    id: 5,
    img: pengiriman5,
  },

  {
    id: 6,
    img: pengiriman6,
  },

  {
    id: 7,
    img: pengiriman7,
  },

  {
    id: 8,
    img: pengiriman8,
  },

  {
    id: 9,
    img: pengiriman9,
  },

  {
    id: 10,
    img: pengiriman10,
  },
]