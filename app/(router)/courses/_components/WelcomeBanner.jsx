import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-gray-100 rounded-xl p-5 justify-center'>
      <Image src={'/forklift.png'} alt='forklift' width={100} height={100}/>
      <div>
        <h1 className='font-bold text-3xl text-gray-900'>Welcome to Unknown Arena</h1>
        <h2 className='font-medium text-gray-500 text-2xl'>Explore All Section</h2>

      </div>
    </div>
  )
}

export default WelcomeBanner