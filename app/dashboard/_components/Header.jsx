import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import React, { useContext } from 'react'

function Header(){

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={40} height={40} alt="interior-design" />
        <h2 className="font bold-text-lg">AesthetIQ</h2>
      </div>

      <div className='flex gap-2 items-center'>
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
          <Image src={'/star.png'} width={20} height={20}/>
          <h2>3</h2>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header