import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
<header className=" py-8">
  <div className="mx-auto max-w-screen-xl ">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12 overflow-hidden">
        <a className="block " href="#">
          <Image className='w-[120px] h-[80px] scale-150' src={"/creanto.png"} width={100} height={10} />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
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
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-transparent border border-primary-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Get in Touch
          </a>

          
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-green-200 p-2 text-gray-600 transition hover:text-gray-600/75">
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