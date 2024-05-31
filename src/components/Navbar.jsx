import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className=''>
                <div className='max-w-[1200px] bg-red-500 mx-auto'>
                    <div className='flex justify-between items-center absolute z-10 top-[35px] '>
                        <img className='mr-[370px]' src="images/logo.png" alt="logo" />
                        <div className='flex items-center'>
                            <ul className='flex gap-[44px] font-poppins text-[#ffff]'>
                                <li>HOME</li>
                                <li>OUR MENU</li>
                                <li>OFFER</li>
                                <li>ABOUT</li>
                                <li>CONTACT</li>
                            </ul>
                            <button className='px-[47px] py-[14px] bg-[#FFCC00] font-poppins ml-[54px] text-[#fff]'>DOWNLOAD APP</button>

                        </div>
                    </div>
                </div>
            </nav>

            <section class="bg-[url('images/banner.png')] w-full h-screen bg-center bg-cover relative mb-[100px]">
                <div className='max-w-[1200px] mx-auto'>
                    <div className='absolute'>
                        <h3 className='mt-[149px] text-[#fff] text-[26px] font-poppins font-bold '>Only $15.00</h3>
                        <h1 className='text-[#ffff] text-[64px] font-poppins font-semibold mt-[25px] '>AUTHENTIC ITALIAN PIZZA</h1>
                        <div className='flex'>
                            <div className='bg-[#FFCC00] w-[205px] h-[205px] rounded-full text-center text-[#fff]  font-bold mt-[26px] '>
                                <h4 className='text-[64px] font-poppins'>20%</h4>
                                <h4 className='text-[32px] font-poppins'>DISCOUNT</h4>
                            </div>
                            <h4 className='text-[#ffff] w-[325px] h-[241px] text-[36px] font-semibold ml-[29px] mt-[20px] mb-[79px] font-poppins'>On your first
                                order, if you order
                                online through
                                our App!</h4>
                        </div>

                        <button className='px-[47px] py-[14px] bg-[#FFCC00] font-poppins ml-[54px] text-[#fff]'>ORDER ONLINE</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
