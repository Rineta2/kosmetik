import dynamic from "next/dynamic"

import { Fragment } from "react"

const Home = dynamic(() => import('@/components/ui/Landing/Home'), { ssr: false })
const Populer = dynamic(() => import('@/components/ui/Landing/Populer'), { ssr: false })
const Category = dynamic(() => import('@/components/ui/Landing/Category'), { ssr: false })
const Meet = dynamic(() => import('@/components/ui/Landing/Meet'), { ssr: false })
const Gallery = dynamic(() => import('@/components/ui/Landing/Gallery'), { ssr: false })
const Kontak = dynamic(() => import('@/components/ui/Landing/Kontak'), { ssr: false })
export default function Router() {
  return (
    <Fragment>
      <main>
        <Home />
        <Populer />
        <Category />
        <Meet />
        <Gallery />
        <Kontak />
      </main>
    </Fragment>
  )
}
