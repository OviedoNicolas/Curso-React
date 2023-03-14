import React from 'react'
import { Item } from '../item/Item'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const CarouselProductos = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1024 },
            items: 5
        }
    };

  return (
    <div className='coanta'>
        <Carousel responsive={responsive} infinite={true} draggable={false} partialVisbile={false} renderButtonGroupOutside= {true}>
            <div>
                <Item id='2' img={'master.png'} nombre = 'cape' precio= '200' />
            </div>
            <div>
                <Item id='2' img={'master.png'} nombre = 'cape' precio= '200' />
            </div>
            <div>
                <Item id='2' img={'master.png'} nombre = 'cape' precio= '200' />
            </div>
            <div>
                <Item id='2' img={'master.png'} nombre = 'cape' precio= '200' />
            </div>
            <div>
                <Item id='2' img={'master.png'} nombre = 'cape' precio= '200' />
            </div>
            <div>
                <Item id='2' img={'master.png'} nombre = 'cape' precio= '200' />
            </div>
            <div>
                <Item id='2' img={'cape.jpg'} nombre = 'cape' precio= '200' />
            </div>
        </Carousel>
    </div>
  )
}
