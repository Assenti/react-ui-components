import React from 'react';
import Carousel from '../../components/carousel';
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';

const slides = [
    { img: slide1, title: 'Slide 1' },
    { img: slide2, title: 'Slide 2' },
    { img: slide3, title: 'Slide 3' }
]

export default {
  title: 'Example/Carousel',
  component: Carousel,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = () => (
    <Carousel 
        height={400}
        autoMotion
        items={slides}/>
)

export const Carousel_ = Template.bind({});