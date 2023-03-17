import React from 'react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'
import bolso from '../../img/gallery/bolso.jpg'
import caballero from '../../img/gallery/caballero.jpg'
import campesino from '../../img/gallery/campesino.jpg'
import caperuzita from '../../img/gallery/caperuzita.jpg'
import chica from '../../img/gallery/chica.jpeg'
import chicas from '../../img/gallery/chicas.jpg'
import chicos from '../../img/gallery/chicos.jpg'
import armas from '../../img/gallery/armas.png'
import mago from '../../img/gallery/mago.jpg'
import nieve from '../../img/gallery/nieve.jpg'
import piernas from '../../img/gallery/piernas.jpeg'
import princesa from '../../img/gallery/princesa.jpg'
import runas from '../../img/gallery/runas.jpg'
import vikingo from '../../img/gallery/vikingo.jpg'
import guerrera from '../../img/gallery/guerrera.jpg'
import pociones from '../../img/gallery/pociones.webp'

export const Gallery = ({principal}) => {
  return (
    principal ?
      <div className='galleryContainer'>
        <div className="ropaMujer">
          <div className="chicas">
            <Parallax bgImage={chicas} bgImageAlt="chicas" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          </div>
          <div className="caperuzita">
            <Parallax bgImage={caperuzita} bgImageAlt="caperuzita" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          </div>
          <div className="princesa">
            <Parallax bgImage={princesa} bgImageAlt="princesa" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          </div>
          <div className="chica">
            <Parallax bgImage={chica} bgImageAlt="chica" blur={{ min: -15, max: 15 }} strength={100}></Parallax>
          </div>
          <Link to={`productos/ropa/mujer`}>Para ellas</Link>
        </div>
        <div className="ropaHombre">
          <div className="chicos">
            <Parallax bgImage={chicos} bgImageAlt="chicos" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          </div>
          <div className="nieve">
            <Parallax bgImage={nieve} bgImageAlt="nieve" blur={{ min: -15, max: 15 }} strength={100}></Parallax>
          </div>
          <div className="vikingo">
            <Parallax bgImage={vikingo} bgImageAlt="vikingo" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          </div>
          <div className="campesino">
            <Parallax bgImage={campesino} bgImageAlt="campesino" blur={{ min: -15, max: 15 }} strength={100}></Parallax>
          </div>
          <div className="mago">
            <Parallax bgImage={mago} bgImageAlt="mago" blur={{ min: -15, max: 15 }} strength={100}></Parallax>
          </div>
          <Link to={`productos/ropa/hombre`}>Para ellos</Link>
        </div>
        <div className="ropaUnisex">
          <div className="guerrera">
            <Parallax bgImage={guerrera} bgImageAlt="guerrera" blur={{ min: -15, max: 15 }} strength={100}></Parallax>
          </div>
          <div className="piernas">
            <Parallax bgImage={piernas} bgImageAlt="piernas" blur={{ min: -15, max: 15 }} strength={150}></Parallax>
          </div>
          <div className="caballero">
            <Parallax bgImage={caballero} bgImageAlt="caballero" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          </div>
          <Link to={`productos/ropa/unisex`}>Para todos</Link>
        </div>
      </div>
      :

      <div className="misc">
        <div className="pociones">
          <Parallax bgImage={pociones} bgImageAlt="pociones" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          <Link to={`productos/pociones`}>Pociones</Link>
        </div>
        <div className="bolso">
          <Parallax bgImage={bolso} bgImageAlt="bolso" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          <Link to={`productos/accesorios`}>Accesorios</Link>
        </div>
        <div className="armas">
          <Parallax bgImage={armas} bgImageAlt="armas" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          <Link to={`productos/armas`}>Armas</Link>
        </div>
        <div className="runas">
          <Parallax bgImage={runas} bgImageAlt="runas" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
          <Link to={`productos/magia`}>Magia</Link>
        </div>
      </div>
    )
}











