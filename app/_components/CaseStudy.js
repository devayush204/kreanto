import Image from 'next/image'
import React from 'react'

const CaseStudy = () => {
    return (
        <section className="bg-gray-900 text-white ">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ">Case <span class="text-primary-500">Studies </span></h2>

                    <p className="mt-4 text-sm md:text-lg lg:text-xl text-gray-300">
                        Join us to hear inspiring success stories, client case studies,
                        and industry insights that fuel our innovative solutions.
                    </p>
                </div>
                <div className='flex items-center lg:flex-row flex-col gap-5 md:gap-7 lg:gap-10 mt-10'>
                    <div className='overflow-hidden flex-1'>
                        <Image src={"/case1.png"} width={600} height={100} className='hover:scale-105 transition' alt='img' />
                    </div>

                    <div className='overflow-hidden flex-1'>
                    <Image src={"/case2.png"} width={600} height={100} className='hover:scale-105 transition' alt='img' />
                    </div>
                    <div className='overflow-hidden flex-1'>
                    <Image src={"/case1.png"} width={600} height={100} className='hover:scale-105 transition' alt='img' />
                    </div>
                </div>



                <div className="md:mt-12 mt-5 text-center ">
                    <a
                        href="#"
                        className="inline-block rounded-lg bg-primary-600 px-16 py-3 md:text-xl font-semibold text-white transition hover:scale-90 "
                    >
                        Read More Case Studies
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy