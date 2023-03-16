import React from 'react'
import { Parallax } from 'react-parallax'
import bolso from '../../img/gallery/bolso.jpg'
import caballero from '../../img/gallery/caballero.jpg'
import campesino from '../../img/gallery/campesino.jpg'
import caperuzita from '../../img/gallery/caperuzita.jpg'
import chica from '../../img/gallery/chica.jpeg'
import chicas from '../../img/gallery/chicas.jpg'
import chicos from '../../img/gallery/chicos.jpg'
import ladron from '../../img/gallery/ladron.jpg'
import mago from '../../img/gallery/mago.jpg'
import nieve from '../../img/gallery/nieve.jpg'
import piernas from '../../img/gallery/piernas.jpeg'
import princesa from '../../img/gallery/princesa.jpg'
import principe from '../../img/gallery/principe.jpg'
import runas from '../../img/gallery/runas.jpg'
import vikingo from '../../img/gallery/vikingo.jpg'

export const Gallery = () => {
  return (
    <div className="gallery">
        <div className="caballero">
        <Parallax bgImage={caballero} bgImageAlt="caballero" blur={{ min: -15, max: 15 }}  strength={-80}></Parallax>
        </div>
        <div className="caperuzita">
        <Parallax bgImage={caperuzita} bgImageAlt="caperuzita" strength={60}></Parallax>
        </div>
        <div className="campesino">
        <Parallax bgImage={campesino}  bgImageAlt="campesino" strength={75}></Parallax>
        </div>
        <div className="princesa">
        <Parallax bgImage={princesa} bgImageAlt="princesa" strength={-100}></Parallax>
        </div>
        <div className="runas">
        <Parallax bgImage={runas} bgImageAlt="runas" blur={{ min: -15, max: 15 }} strength={50}></Parallax>
        </div>
        <div className="mago">
        <Parallax bgImage={mago} bgImageAlt="mago" strength={200}></Parallax>
        </div>
        <div className="chicas">
        <Parallax bgImage={chicas} bgImageAlt="chicas" strength={-80}></Parallax>
        </div>
        <div className="chica">
        <Parallax bgImage={chica} bgImageAlt="chica" blur={{ min: -15, max: 15 }}  strength={200}></Parallax>
        </div>
        <div className="principe">
        <Parallax bgImage={principe} bgImageAlt="principe" strength={200}></Parallax>
        </div>
        <div className="bolso">
        <Parallax bgImage={bolso} bgImageAlt="bolso" strength={200}></Parallax>
        </div>
        <div className="vikingo">
        <Parallax bgImage={vikingo} bgImageAlt="vikingo" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
        </div>
        <div className="piernas">
        <Parallax bgImage={piernas} bgImageAlt="piernas" strength={80}></Parallax>
        </div>
        <div className="ladron">
        <Parallax bgImage={ladron} bgImageAlt="ladron" strength={-170}></Parallax>
        </div>
        <div className="chicos">
        <Parallax bgImage={chicos} bgImageAlt="chicos" strength={-200}></Parallax>
        </div>
        <div className="nieve">
        <Parallax bgImage={nieve} bgImageAlt="nieve" blur={{ min: -15, max: 15 }} strength={200}></Parallax>
        </div>
    </div>
    )
}
