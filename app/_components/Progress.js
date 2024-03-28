import React from 'react'

const Progress = () => {
    return (
        <>
        <section className='py-10 mt-10  bg-gray-900 rounded-3xl flex flex-col items-center'>
            <div className='flex px-10 hover:scale-90 transition '>
                <a href="#" class="inline-flex justify-between items-center py-2 px-6 mb-7  rounded-full bg-[#0c0e2a]" role="alert">
                    <svg className='md:w-[30px] w-[20px] mr-2 fill-primary-500' viewBox="0 0 52 52" >
                        <path d="M26,4C12.7,4,2.1,13.8,2.1,25.9c0,3.8,1.1,7.4,2.9,10.6c0.3,0.5,0.4,1.1,0.2,1.7l-3.1,8.5
	c-0.3,0.8,0.5,1.5,1.3,1.3l8.6-3.3c0.5-0.2,1.1-0.1,1.7,0.2c3.6,2,7.9,3.2,12.5,3.2C39.3,48,50,38.3,50,26.1C49.9,13.8,39.2,4,26,4z
	 M14,30c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S16.2,30,14,30z M26,30c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S28.2,30,26,30z M38,30
	c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S40.2,30,38,30z"/>
                    </svg>

                    <span class="md:text-base text-sm font-medium text-primary-500">Have Questions?</span>
                    <svg class="ml-1 w-5 h-5 fill-primary-500"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            <div className=' w-full flex flex-col px-3 items-center'>
                <div className='text-center'>
                    <h1 class="mb-4  text-3xl w-[700px] font-extrabold text-white md:text-5xl lg:text-6xl"> Empowering <br /><span class="text-primary-500">Success </span> in Numbers </h1>
                </div>
                <p class="md:text-lg font-normal text-gray-500 lg:text-xl text-center lg:w-[700px]">We redefine collaboration, innovation, and success. From our unwavering commitment to excellence to our dynamic approach that adapts to your unique needs, discover why working with us is not just a choice, it&apos;s a strategic investment in your unparalleled success</p>
                <button className='px-10 py-4 mt-7 bg-primary-500 text-white font-semibold rounded-lg'>Get in Touch</button>
            </div>

            <div className='w-full  md:mx-auto  mt-14 bg-[#0c0e2a] flex lg:flex-row flex-col gap-7 md:gap-10 lg:gap-0 justify-between md:px-20 py-6 md:py-10 lg:py-16 leading-8'>
                <p className='text-[50px] text-center text-primary-500 font-bold'>100% <br /><span className='text-[20px] text-white '>Satisfactory Rate</span></p>
                <p className='text-[50px] text-center text-primary-500 font-bold'>50+ <br /><span className='text-[20px] text-white '>Delivered Projects</span></p>
                <p className='text-[50px] text-center text-primary-500 font-bold'>2 <br /><span className='text-[20px] text-white '>Years of Experience </span></p>
                <p className='text-[50px] text-center text-primary-500 font-bold'>10+ <br /><span className='text-[20px] text-white '>Global Clients</span></p>
            </div>
        </section>
        </>
    )
}

export default Progress