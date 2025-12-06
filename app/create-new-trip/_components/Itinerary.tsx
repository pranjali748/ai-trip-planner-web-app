import React from 'react'
import Image from 'next/image';
function Itinerary() {
  return (
    <div>
      <Image src ={'/travel3.webp'} alt='travel' width={800} height={800} 
      className='w-full h-full object-cover rounded-3xl'/>
    </div>
  )
}

export default Itinerary