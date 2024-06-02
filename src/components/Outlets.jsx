import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const Outlets = () => {
    return (
        <>
            <section className='pt-[76px] px-[120px] pb-[44px] bg-[#F5F5F5] mb-[110px] dark:bg-black dark:text-[#fff]'>
                <div className='max-w-[1200px] mx-auto'>
                    <div>
                        <div className='text-center '>
                            <h3 className='text-[18px] font-semibold font-poppins text-[#FFCC00] dark:text-[#fff]'>OUR OUTLETS</h3>
                            <h2 className='text-[55px] font-semibold font-poppins text-[#000000] mb-[24px] dark:text-[#fff]'>Find an Outlet Near You</h2>
                        </div>
                        <div className='flex gap-[30px]'>
                            <div>
                                <img className='mb-[20px]' src="images/outletsone.png" alt="outletsone" />
                           <div className='text-[#FFCC00] flex justify-center'>

                           <IoLocationSharp className='text-center text-[30px]' />
                           </div>
                                <p className='text-[20px] font-bold font-poppins text-[#231900] w-[334px] text-center mt-[12px] dark:text-[#fff]'>762 Fulton St San Francisco, California(CA), 94102</p>
                            </div>
                            <div>
                                <img className='mb-[20px]' src="images/outleststwo.png" alt="outlettwo" />
                           <div className='text-[#FFCC00] flex justify-center'>
                           <IoLocationSharp className='text-center text-[30px]' />
                           </div>
                                <p className='text-[20px] font-bold font-poppins text-[#231900] w-[334px] text-center mt-[12px] dark:text-[#fff]'>762 Fulton St San Francisco, California(CA), 94102</p>
                            </div>
                            <div>
                                <img className='mb-[20px] ' src="images/outletsthree.png" alt="outletsthree" />
                           <div className='text-[#FFCC00] flex justify-center'>
                           <IoLocationSharp className='text-center text-[30px]' />
                           </div>
                                <p className='text-[20px] font-bold font-poppins text-[#231900] w-[334px] text-center mt-[12px] dark:text-[#fff]'>762 Fulton St San Francisco, California(CA), 94102</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Outlets
