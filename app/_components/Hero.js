import React from 'react'

const Hero = () => {
  return (
    <section  class="lg:h-[90vh] lg:mt-28 mt-10 md:mt-16">
    <div class=" mx-auto max-w-screen-xl text-center  lg:px-12">
        <a href="/" class="inline-flex justify-between items-center py-1 px-1 md:px-3 mb-4 md:mb-6   bg-gray-600 rounded-full text-white dark:hover:bg-gray-700" role="alert">
            <span class="text-[10px] md:text-[15px] bg-primary-600 rounded-full text-white p-1 md:px-2 md:py-1.5 lg:px-4 lg:font-semibold  mr-1 md:mr-2">New</span> 
            <span class="text-[11px] md:text-[16px]  font-medium">Watchout our latest Offers</span> 
            <svg class="ml-1 w-5 md:w-6 sm:w-8" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-8 text-[40px] leading-[45px] sm:text-4xl font-extrabold   text-gray-900 md:text-5xl lg:text-[70px] dark:text-white"><span className='text-primary-600'> We </span>Craft Digital Experiences: <br /> <span >Where <span className='text-primary-600'>Creativity</span> Meets <span className='text-primary-600'>Functionality</span>!</span></h1>
        <p class=" text-base md:text-xl font-normal  text-gray-400 lg:text-2xl sm:px-16 xl:px-48 ">Here at Kreanto we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class=" mt-10 space-y-4  ">
            <a href="#" class="inline-flex justify-center items-center py-4 px-8 md:px-16 text-base md:text-xl  font-medium text-center text-white rounded-2xl bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Start Purchasing
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
             
        </div>
        
    </div>
</section>
  )
}

export default Hero