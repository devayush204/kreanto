import React from 'react'

const Faq = () => {
    return (
        <section className='lg:mt-36 mt-20 md:mt-28  lg:px-60'>
            <div className=' w-full flex flex-col  items-center'>
                <div className='text-center mb-4 md:mb-6'>
                    <h1 class=" text-3xl  font-extrabold text-white md:text-5xl lg:text-6xl ">Frequently Asked </h1>
                    <h1 class=" text-3xl  font-extrabold  text-white md:text-5xl lg:text-6xl"><span class="text-primary-500">Questions </span>
                    </h1>
                </div>
                <p class="md:text-lg font-normal text-center text-gray-500 lg:text-xl lg:w-[530px]">We address common queries, demystify intricacies, and provide insights to guide you through our services.</p>
            </div>
            <div className="space-y-4 mt-4 md:mt-4 lg:mt-6">
                <details
                    className="group bg-gray-900 px-7 py-4 rounded-xl md:rounded-3xl dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="md:text-lg font-medium text-gray-900 dark:text-white">
                        What design and development services does your agency offer?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-primary-500 p-1.5 text-gray-900 sm:p-3 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    Provide an overview of the creative services your agency specializes in, including brand identity design, UI/UX design, web development, mobile app development, and any other related services. Highlight your agency&apos;s expertise in creating cohesive and impactful brand experiences across various platforms.
                    </p>
                </details>
                <details
                    className="group bg-gray-900 px-7 py-4 rounded-3xl dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="md:text-lg text-base font-medium text-gray-900 dark:text-white">
                        What is your agency&apos;s approach to project management?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-primary-500 p-1.5 text-gray-900 sm:p-3 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    Explain how your agency manages projects from inception to completion. Discuss your process for communication, project timelines, client involvement, and how you ensure projects stay on track and meet deadlines.
                    </p>
                </details>
                <details
                    className="group bg-gray-900 px-7 py-4 rounded-3xl dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="md:text-lg text-base font-medium text-gray-900 dark:text-white">
                        Can you provide examples of past projects or client success stories?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-primary-500 p-1.5 text-gray-900 sm:p-3 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 md:text-base text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                    Showcase your agency&apos;s portfolio by sharing examples of previous work or success stories. Highlight key projects that demonstrate your expertise, creativity, and ability to deliver results for clients.
                    </p>
                </details>
                <details
                    className="group bg-gray-900 px-7 py-4 rounded-3xl dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="md:text-lg text-base font-medium text-gray-900 dark:text-white">
                        What sets your agency apart from competitors?                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-primary-500 p-1.5 text-gray-900 sm:p-3 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    Differentiate your agency by discussing what makes it unique or special. This could include factors such as your team&apos;s expertise, innovative approach, commitment to client satisfaction, competitive pricing, or any awards or recognitions your agency has received.
                    </p>
                </details>
                <details
                    className="group bg-gray-900 px-7 py-4 rounded-3xl dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="md:text-lg text-base font-medium text-gray-900 dark:text-white">
                        How do you determine pricing for your services?
                        </h2>

                        <span
                            className="shrink-0 rounded-full bg-primary-500 p-1.5 text-gray-900 sm:p-3 dark:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    Explain your agency&apos;s pricing structure and how you calculate costs for different services. Discuss any factors that may influence pricing, such as project complexity, scope, timeline, or additional services. Be transparent about your pricing to help potential clients understand the value they&apos;ll receive.
                    </p>
                </details>

                
            </div>
        </section>
    )
}

export default Faq