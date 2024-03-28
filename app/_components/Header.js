import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
<header className=" pt-4 md:pt-6 sm:pt-8">
  <div className="mx-auto max-w-screen-xl ">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12 overflow-hidden">
        <a className="block " href="#">
          <Image className='w-[80px] md:w-[120px] md:h-[80px] sm:w-[150px] sm:h-[130px]  h-[60px] scale-150' src={"/creanto.png"} width={100} height={10} alt='img' />
        </a>
      </div>

      <div className="hidden lg:block">
        <nav >
          <ul className="flex items-center gap-10 text-[16px] font-semibold ">
            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> About Us</a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> How we work </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-500/75" href="#"> Contact us </a>
            </li>

            
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex sm:flex sm:gap-4 ">
          <a
            className="rounded-md md:rounded-lg bg-transparent border border-primary-600 px-2 md:px-7 md:py-3 py-2 text-[9px] md:text-[14px] font-medium text-white hover:text-black hover:bg-primary-500 hover:font-semibold shadow"
            href="/" >
            Get in Touch
          </a>

          
        </div>

        <div className="block lg:hidden ">
          <button className="rounded bg-primary-500 p-2 md:p-3 text-white text-3xl transition ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>  )
}

export default Header