import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The Four Pillars That Empower SIPBN:' />
            <p>Here's how we function to maximize value in your life</p>
          </div>
          <div className='hero-content grid-2 '>
          
            {expertise.map((item) => (
          <Link href="/about">     
              <Card data={item} caption='learn more' className="pillars"/>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
