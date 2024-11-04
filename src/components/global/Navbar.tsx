'use client'
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import NavItems from "./NavItems";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
   <nav className="w-full border-b">
    <div className='flex items-center justify-between px-12 py-4 rounded-md'>
      <Link href='/' className="w-36">
        <Image
        src={'/next.svg'}
        alt="Logo"
        width={100}
        height={100}
        className="object-contain"
        />
      </Link>
      <div className="md:flex md:items-center md:justify-between hidden w-full max-w-xs">
        <NavItems />
      </div>
      <div className="flex w-fit justify-end items-center  gap-3">
          <ModeToggle />
          <div className="hidden md:flex md:gap-3 md:items-center md:justify-center">
          <Button size={'sm'} className="bg-green-500 text-white hover:bg-green-600 hover:opacity-5">Register</Button>
          <Button size={'sm'}>Login</Button>
          </div>
          <MobileNav />
      </div>
    </div>
   </nav>
  )
}

export default Navbar;