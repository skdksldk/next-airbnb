'use client';

import Image from "next/image";

import Container from "./Container";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div
          className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          "
        >
           <Image
              className="hidden md:block cursor-pointer" 
              src="/images/logo.png" 
              height="100" 
              width="100" 
              alt="Logo" 
           />
            <Search />
            <UserMenu />
        </div>
      </Container>
    </div>
  </div>
  );
}


export default Navbar;