import React from 'react'

const Discount = () => {
  return (
    <>
      <section className='bg-[#FFCC00] px-[120px] pt-[65px] pb-[135px] mb-[75px]'>
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex gap-[30px] '>
                <div>
                    <h2 className='mt-[136px] text-[55px] font-bold font-poppins text-[#FFFFFF]'>Get 20% Discount</h2>
                    <p className='text-[26px] font-semibold font-poppins text-[#ffffff] w-[580px] mt-[26px] mb-[73px]'>Get flat 20% off on your first order though The Foodmood App!</p>
                    <div className='flex gap-[12px] '>
                        <img src="images/playstore.png" alt="play store" />
                        <img src="images/appstore.png" alt="app store" />
                    </div>
                </div>
                <div>
                    <img src="images/mobile image.png" alt="mobile image" />
                </div>
            </div>

        </div>
      </section>
    </>
  )
}

export default Discount
