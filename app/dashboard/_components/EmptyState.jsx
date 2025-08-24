import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function EmptyState (){
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <Image src={'./logo.svg'} width={200} height={200} alt='placeholder' />
      <h2 className='font-medium text-lg text-gray-500'>Create new AI Interior Design for your room</h2>
      <Button className='mt-5'>+ Redesign Room</Button>
    </div>
  )
}

export default EmptyState