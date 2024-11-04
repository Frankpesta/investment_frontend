'use client'
import Image from 'next/image';
import React from 'react'
import { Separator } from '../ui/separator';
import Link from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='w-full px-12 py-10'>
      <Separator />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 py-4 items-start justify-center'>
        <div className=''>
          <Image
          src={'/next.svg'}
          alt='Logo'
          width={100}
          height={100}
          className='pb-8'
          />
          <p className='text-justify text-base'>
          Investing in cryptocurrencies involves significant risk. At YG, we carefully consider your financial situation, investment objectives, and risk tolerance before investing in any digital asset. Our past performance is an assurance of future results. Investments may go up or down in value, but your investments are secure with us.
          </p>
        </div>
        <div className='space-y-4'>
          <p className='font-bold'>Company</p>
          <ul className='space-y-4'>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about-us'}>About</Link>
            </li>
            <li>
              <Link href={'/services'}>Services</Link>
            </li>
          </ul>
        </div>
        <div className='space-y-4'>
          <p className='font-bold'>Contact</p>
          <ul className='space-y-4'>
          <li>
              <Link href={'/contact'}>Contact Us</Link></li>
              <li>
              Live Support
            </li>
          
          </ul>
        </div>
        <div className='space-y-4'>
          <p className='font-bold'>Policies</p>
          <ul className='space-y-4'>
          <li>
              <Link href={'/privacy'}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={'/terms'}>Terms and Conditions</Link>
            </li>
            <li>
              <Link href={'/'}>Hep</Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <p className='text-center pt-2'>© {date}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer