import React from 'react'

const Food = () => {
    return (
        <>
            <section className='mb-[30px] dark:bg-black dark:text-[#fff]'>
                <div className='max-w-[1200px] mx-auto'>
                    <div >
                        <div className='text-center'>
                            <h4 className='text-[#FFCC00] text-[18px] font-semibold font-poppins mb-[26px] dark:text-[#fff]'>TOP FOODS</h4>
                            <h2 className='text-[#231900] text-[55px] font-semibold font-poppins dark:text-[#fff]'>Our Categories</h2>
                        </div>
                        <div className='flex gap-[32px]'>
                            <div className='relative '>
                                <img className='' src="images/pizza.png" alt="" />
                                <h3 className='absolute bottom-[60px] left-[70px] text-[24px] font-bold text-[#231900] dark:text-[#fff]'>Pizza</h3>
                                <p className='absolute  bottom-[30px] left-[70px] text-[20px] font-semibold text-[#231900] dark:text-[#fff]'>20 Restaurants Foods</p>
                            </div>
                            <div className='relative '>
                                <img className='' src="images/pasta.png" alt="" />
                                <h3 className='absolute bottom-[60px] left-[70px] text-[24px] font-bold text-[#231900] dark:text-[#fff]'>Pasta</h3>
                                <p className='absolute  bottom-[30px] left-[70px] text-[20px] font-semibold text-[#231900] dark:text-[#fff]'>15 Restaurants Foods</p>
                            </div>
                            <div className='relative '>
                                <img className='' src="images/shakes.png" alt="" />
                                <h3 className='absolute bottom-[60px] left-[70px] text-[24px] font-bold text-[#231900] dark:text-[#fff]'>Shakes</h3>
                                <p className='absolute  bottom-[30px] left-[70px] text-[20px] font-semibold text-[#231900] dark:text-[#fff]'>20 Restaurants Foods</p>
                            </div>
                            <div className='relative '>
                                <img className='' src="images/burger.png" alt="" />
                                <h3 className='absolute bottom-[60px] left-[70px] text-[24px] font-bold text-[#231900] dark:text-[#fff]'>Burger</h3>
                                <p className='absolute  bottom-[30px] left-[70px] text-[20px] font-semibold text-[#231900] dark:text-[#fff]'>25 Restaurants Foods</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-[#FFCC00] px-120px pt-[45px] pb-[56px] dark:bg-black'>
                    <div className='max-w-[1200px] mx-auto'>
                        <div className='flex gap-32'>
                            <div className=''>
                                <img src="images/car.png" alt="car " />
                                <h3 className='mt-[42px] text-[20px] text-[#FFFFFF] font-bold font-poppins dark:text-[#fff]'>Free Shipping on</h3>
                                <h4 className='mt-[7px] text-[#ffffff] text-[20px] font-poppins font-bold dark:text-[#fff]'>First Order</h4>
                                <p className='text-[17px] font-semibold w-[380px] text-[#ffff] font-poppins mt-[22px] dark:text-[#fff]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                            <div className=''>
                                <img src="images/foods.png" alt="foods " />
                                <h3 className='mt-[42px] text-[20px] text-[#FFFFFF] font-bold font-poppins dark:text-[#fff]'>Variety of</h3>
                                <h4 className='mt-[7px] text-[#ffffff] text-[20px] font-poppins font-bold dark:text-[#fff]'>Dishes</h4>
                                <p className='text-[17px] font-semibold w-[380px] text-[#ffff] font-poppins mt-[22px] dark:text-[#fff]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                            <div >
                                <img src="images/time.png" alt="time " />
                                <h3 className='mt-[42px] text-[20px] text-[#FFFFFF] font-bold font-poppins dark:text-[#fff]'>Thirty Minutes</h3>
                                <h4 className='mt-[7px] text-[#ffffff] text-[20px] font-poppins font-bold dark:text-[#fff]'>Delivery</h4>
                                <p className='text-[17px] font-semibold w-[380px] text-[#ffff] font-poppins mt-[22px] dark:text-[#fff]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Food
