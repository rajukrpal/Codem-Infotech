import React from 'react'
import Welcome from './Welcome'
import WhatWeDo from './WhatWeDo'
import Benner from './Benner'
import OurServices from './OurServices'
// import Awards from './Awards'
import Reviews from './Reviews'
import Talk from './Talk'


function HomeAllcomponets() {
    return (
        <div className='bg-white'>
            <section id="home"> <Welcome /></section>
            <section id="services"><OurServices /></section>
            <section id="Benner"> <Benner /></section>
            <section id="about"> <WhatWeDo /></section>
            {/* <section id="Awards"><Awards /></section> */}
            <section id="Reviews"><Reviews /></section>
            <section id="contact"> <Talk /></section>
        </div>
    )
}

export default HomeAllcomponets


