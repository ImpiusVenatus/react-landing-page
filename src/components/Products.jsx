import React from 'react'
import aboutImg from '../assets/mobile-login.png'
import Maecenas from '../assets/about2.png'

const Products = () => {
  return (
    <div>
        {/*About Text*/}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={aboutImg} alt='' />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer
                    like we did</h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
                    Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar 
                    sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
                    Donec elementum pulvinar odio.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>

        {/*Company Stats*/}
        <div className='px-4 lg:px-24 flex items-center justify-center max-w-screen-4xl bg-neutralSilver py-16' id='testimonial'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3 flex justify-end'>
                    <img src={Maecenas} alt='' />
                </div>

                {/*Stats*/}
                <div className='md:w-2/3 mx-auto'>
                    <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
                    vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero 
                    ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit 
                    elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. 
                    Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. 
                    Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. 
                    Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque 
                    vulputate odio neque, eget efficitur libero condimentum id. 
                    Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                    <p className='text-base text-neutralGrey'>British Dragon Boat Racing Association</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src='/src/assets/company1.png' alt='' className='cursor-pointer' />
                            <img src='/src/assets/company2.png' alt='' className='cursor-pointer' />
                            <img src='/src/assets/company3.png' alt='' className='cursor-pointer' />
                            <img src='/src/assets/company4.png' alt='' className='cursor-pointer' />
                            <img src='/src/assets/company5.png' alt='' className='cursor-pointer' />
                            <img src='/src/assets/company6.png' alt='' className='cursor-pointer' />
                            <div className='flex items-center gap-8'>
                                <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>
                                Meet all customers <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none" className='inline-block ml-2'>
                                                    <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#4CAF4F" stroke-width="1.5" stroke-linecap="round"/>
                                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products