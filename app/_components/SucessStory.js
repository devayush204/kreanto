import Image from 'next/image'
import React from 'react'

const SucessStory = () => {
  return (

    <section className='pt-10 relative '  >
      <div className='w-[50%] mb-8 '>
        <h1 class="mb-4 text-3xl w-[600px] font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Success Stories From <span class="text-primary-500">Our Clients </span> </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Dive into the firsthand experiences of clients who entrusted us with their design needs. Witness the transformative power of our innovative solutions in elevating brands and driving business growth.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 z-10">

        <div class="grid gap-4">
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
              <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Exceptional creativity and attention to detail! Our website redesign exceeded our expectations, and the UI/UX enhancements have significantly improved user engagement. Highly recommended!</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Professional and innovative! The team transformed our outdated website into a modern, user-friendly platform that reflects our brand identity. The positive feedback from our customers speaks volumes</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Exceptional creativity and attention to detail! Our website redesign exceeded our expectations, and the UI/UX enhancements have significantly improved user engagement. Highly recommended!</p>
          </div>
        </div>

        <div class="grid gap-4">
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Innovative solutions that drive results!</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Exceptional creativity and attention to detail! Our website redesign exceeded our expectations, and the UI/UX enhancements have significantly improved user engagement. Highly recommended!</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Exceptional creativity and attention to detail! Our website redesign exceeded our expectations.</p>
          </div>
        </div>

        <div class="grid gap-4">
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Highly recommend for all design needs! From initial consultation to final delivery, they demonstrated professionalism and creativity every step of the way. We&apos;ve seen a significant improvement in our brand&apos;s visibility and engagement.</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Their commitment to excellence is truly commendable.</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Exceptional creativity and attention to detail! Our website redesign exceeded our expectations.</p>
          </div>
        </div>

        <div class="grid gap-4">
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Exceptional creativity and attention to detail! Our website redesign exceeded our expectations, and the UI/UX enhancements have significantly improved user engagement. Highly recommended!</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Professional and innovative! The team transformed our outdated website into a modern, user-friendly platform that reflects our brand identity.</p>
          </div>
          <div className='bg-gray-900 px-7 py-5 hover:scale-95 transition max-w-full rounded-3xl'>
            <div className='flex gap-3 items-center'>
                <Image src={"/profile.jpg"} width={40}  height={40} alt='img' className='rounded-full border border-blue-800 w-[40px] h-[40px] '/>
              <p className='text-[17px] font-semibold text-primary-500'>Ayush Bhatt</p>
            </div>
            <p className='text-[15px] mt-5 text-white/75 '>Impressive creativity and versatility! Whether it&apos;s graphic design, web development, or branding, they consistently deliver exceptional results. Couldn&apos;t be happier with their services.</p>
          </div>
        </div>
      </div>

      {/* Overlay gradient for reducing opacity effect */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-[700px] pointer-events-none ">
        <div className="h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      
    </section>

  )
}

export default SucessStory