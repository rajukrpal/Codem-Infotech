import React from 'react'

function BtnNav({ btn }) {
  return (
    <button className='py-3 px-3.5 bg-[#3535de] text-white tracking-wider rounded-md text-sm hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer'>
      {btn}
    </button>
  )
}

export default BtnNav
