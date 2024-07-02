import { Hero } from "@/sections";
import Head from "next/head";
import Marqueee from "@/components/common/Marqueee";
export default function Home() {
  return (
    <>
      <Head>
        <title>SIPBN</title>
      </Head>
      
      <div className="marquee-hero">
      <Marqueee className="marquee"/>
      </div>
    
      <Hero />
    </>
  );
}
