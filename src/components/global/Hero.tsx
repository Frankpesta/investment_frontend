import React from 'react';
import { HeroParallax } from '../ui/hero-parallax';
import { products } from '@/constants';

const Hero = () => {
  return (
    <div className=''>
        <HeroParallax products={products} />
    </div>
  )
}

export default Hero