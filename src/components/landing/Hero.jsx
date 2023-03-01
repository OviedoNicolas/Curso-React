import React from 'react'
import banner from '../../img/result4.jpg'
import banner1 from '../../img/result2.png'
import banner2 from '../../img/result.png'
import HeroSlider from 'hero-slider/dist/HeroSlider'
import { Slide } from 'hero-slider'


export const Hero = () => {
    return (
        <HeroSlider
        autoplay = {{
            autoplayDuration : 5000,
            autoplayDebounce: 0 
        }}
        animations={{
            slidingAnimation: "fade"
        }}
        controller={{
            initialSlide: 2,
            slidingDuration: 500,
            slidingDelay : 200
        }}
        >
            <Slide
                background={{
                backgroundImageSrc: banner,
                }}
            >
                <div className='heroBanner'>
                    <h2>Escribe tu propia historia</h2>
                    <p>El estílo lo ponemos nosotros</p>
                </div>
            </Slide>
            <Slide
                background={{
                    backgroundImageSrc: banner1
                }}
            >
                <div className='heroBanner'>
                    <h2>Escribe tu propia historia</h2>
                    <p>El estílo lo ponemos nosotros</p>
                </div>
            </Slide>
            <Slide
            background={{
                backgroundImageSrc: banner2
            }}
            >
                <div className='heroBanner'>
                    <h2 className='tituloBanner'>Escribe tu propia historia</h2>
                    <p>El estílo lo ponemos nosotros</p>
                </div>
            </Slide>
        </HeroSlider>
    )
}
