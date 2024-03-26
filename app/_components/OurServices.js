import Image from 'next/image'
import React from 'react'

const OurServices = () => {
    return (
        <section className='flex flex-col mt-[170px] pb-20'>
            <div className=' w-full flex flex-col  items-center'>
                <div className='text-center'>
                    <h1 class="mb-4 text-3xl w-[550px] font-extrabold text-white md:text-5xl lg:text-6xl"> <span class="text-primary-500">Creative </span>  </h1>
                    <h1 class="mb-4 text-3xl w-[550px] font-extrabold  text-white md:text-5xl lg:text-6xl">Solutions Studio </h1>
                </div>
                <p class="text-lg font-normal text-gray-500 lg:text-xl w-[900px]">Strategic Collaboration for Sustainable Growth: Your Trusted Business Development Partner, Committed to Crafting Tailored Solutions and Driving Long-term Success Together.</p>
            </div>

            <div className='flex gap-5 mt-10'>
                <div class="max-w-full flex-1 overflow-hidden border-gray-200 rounded-3xl shadow bg-gray-900">
                <Image src={"/1.png"} alt='img' width={600} height={100} class="rounded-3xl " />
                    
                    <div class="p-8">
                            <h5 class="mb-2 text-[27px] text-center font-extrabold tracking-tight text-primary-400">Strategic Brand Analysis</h5>
                        <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400"> Our seasoned experts analyze market trends, assess competition, and delve into your business dynamics to provide actionable insights, ensuring your brand, website, and app strategies are finely tuned for success.</p>
                       
                    </div>
                </div>
                <div class="max-w-full flex-1 border-gray-200 rounded-3xl shadow bg-gray-900">
                   
                <Image src={"/2.png"} alt='img' width={600} height={100} class="rounded-3xl " />
                    
                    <div class="p-8">
                        
                            <h5 class="mb-2 text-[27px] text-center font-extrabold tracking-tight text-primary-400">Engagement-Driven Marketing</h5>
                        
                        <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400"> We elevate your brand with engaging digital campaigns, tailored content, and innovative strategies to boost engagement and maximize reach across websites, apps, and landing pages.</p>
                       
                    </div>
                </div>
                <div class="max-w-full flex-1  border-gray-200 rounded-3xl shadow bg-gray-900">
                    
                <Image src={"/3.png"} alt='img' width={500} height={100} class="rounded-3xl h-[250px] " />
                    
                    <div class="p-8">
                        
                            <h5 class="mb-2 text-[27px] text-center font-extrabold tracking-tight text-primary-400">Cutting-Edge Technology Solutions</h5>
                        
                        <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400"> Stay ahead with cutting-edge tech. From seamless website and app integrations to UI/UX enhancements and landing page optimization, we empower your business in the digital landscape.</p>
                        
                    </div>
                </div>


            </div>
        </section>
    )
}

export default OurServices