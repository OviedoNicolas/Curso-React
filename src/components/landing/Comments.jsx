import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import brienne from '../../img/customers/brienne.png'
import frodo from '../../img/customers/frodo.png'
import geralt from '../../img/customers/geralt.png'
import juana from '../../img/customers/juana.png'
import link from '../../img/customers/link.png'
import merlin from '../../img/customers/merlin.png'
import vetinari from '../../img/customers/vetinari.png'

export const Comments = () => {

const customers = [
    {
        name: 'Frodo Bolsón' ,
        description: 'Valeroso Hobbit.' ,
        img: frodo ,
        comment: '"Nunca hubiésemos llegado a Mordor sin todas las cosas que compramos aquí."',
        id: '1'
    },
    {
        name: 'Juana de Arco' ,
        description: 'Doncella guerrera.' ,
        img: juana ,
        comment: '"Ni en mis visiones vi precios mejores que estos."',
        id: '2'
    },
    {
        name: 'Link',
        description: 'Héroe Hyliano.'  ,
        img: link ,
        comment: '"..."',
        id: '3'
    },
    {
        name: 'Lord Vetinari' ,
        description: 'Justo tirano.',
        img: vetinari ,
        comment: '"Compro toda mi ropa por aquí, nadie en el reino se atreve a contradecirme, y menos viéndome tan genial."',
        id: '4'
    },
    {
        name: 'Brienne de Tarth' ,
        description: 'Miembro de la Guardia Real.' ,
        img: brienne ,
        comment: '"Amo que traigan talles como para gente de mi altura. Sigan así chicos."',
        id: '5'
    },
    {
        name: 'Geralt de Rivia' ,
        description: 'Brujo cazador.',
        img: geralt ,
        comment: '"No hay monstruo que no pueda derrotar con estas armas."',
        id: '6'
    },
    {
        name: "Merlín" ,
        description: 'Mago legendario.' ,
        img: merlin ,
        comment: '"Sus báculos te hacen sentir más poderoso y sus ropas más sabio. Las pociones son muy ricas."',
        id: '7'
    }
]

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "linear"
}

return (
    <div className='comments'>
        <div className='commentsCarousel'>
            <Slider {...settings}>
                {customers.map (customer =>(
                    <div key={customer.id} className ='containerPrincipal'>
                        <div className='containerSecundario'>
                            <div className='commentContainer'>
                                <div className='customerImgContainer'>
                                    <img src={customer.img} alt={customer.name}/>
                                </div>
                                <h3 className='customerName'>{customer.name}</h3>
                                <p className='customerComment'>{customer.comment}</p>
                                <p className='customerDescription'>{customer.description}</p>
                            </div>
                        </div>
                    </div>
                ) )}
            </Slider>
        </div>
    </div>
    )
}
