import { Hero } from "app/componentes/home/Hero";

import { Description } from "app/componentes/home/Description";

import { MainProducts } from "app/componentes/home/MainProducts";


export default function Home() {
  return (
    <main >
      <Hero/>

     <Description />
     
     <MainProducts/>
    </main>
  )
}
