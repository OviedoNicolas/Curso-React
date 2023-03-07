import React, { useState } from 'react'
import banner from '../../img/result4.jpg'
import banner1 from '../../img/result2.png'
import banner2 from '../../img/result.png'
import HeroSlider from 'hero-slider/dist/HeroSlider'
import { Slide } from 'hero-slider'


export const Hero = () => {

    const [clase, setClase] = useState(false)

    return (
        <HeroSlider
        autoplay = {{
            autoplayDuration : 7000,
            autoplayDebounce: 0 
        }}
        animations={{
            slidingAnimation: "fade"
        }}
        accessability ={{
            shouldDisplayButtons : false
        }}
        controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay : 200,
            onAfterSliding: () =>{
                setClase(true)
            },
            onSliding : () =>{
                setClase(false)
            }
        }}
        >
            <Slide
            background={{
                backgroundImageSrc: banner1
            }}
            >
                <div className='bannerHeroina'>
                    <h2 className={clase ? 'tituloHeroina' : 'heroOculto'}>Escribe tu <br/> propia historia</h2>
                    <p className={clase ? 'subtituloHeroina' : 'heroOculto'}>El estílo lo <br/> ponemos nosotros</p>
                </div>
            </Slide>
            <Slide
            background={{
                backgroundImageSrc: banner,
            }}
            >
                <div className='bannerGuerrera'>
                    <h2 className={clase ? 'tituloGuerrera' : 'heroOculto'}>Muestra tu valor en el campo de batalla</h2>
                    <p className={clase ? 'subtituloGuerrera' : 'heroOculto'}>Y tu buen gusto</p>
                </div>
            </Slide>
            <Slide
            background={{
                backgroundImageSrc: banner2
            }}
            >
                <div className='bannerArquero'>
                    <h2 className={clase ? 'tituloArquero' : 'heroOculto'}>Derrota a tus enemigos</h2>
                    <p className={clase ? 'subtituloArquero' : 'heroOculto'}>Y que exclamen WOW!!</p>
                </div>
            </Slide>
        </HeroSlider>
    )
}
