
'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Avatar } from '@nextui-org/avatar'
import Link from 'next/link'
import { useState } from 'react'


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);



  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='justify-start fixed' style={{
      display: '-webkit-box', zIndex: 9999
    }}>
        <Avatar
              isBordered
              as='span'
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src='/profile-pic.png'
            />
    <NavbarBrand>
        <p className="font-bold text-inherit ">{"<div>Hola soy Martín<div/>"}</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Sobre mi
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Experiencias
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Skills
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Contacto
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  )
}
