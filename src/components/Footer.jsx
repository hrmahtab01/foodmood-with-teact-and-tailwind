import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <section>
        <div className='max-w-[1200px] mx-auto'>
            <div>
                <div className='flex gap-[30px] mb-[75px]'>
                    <img src="images/foodcheff.png" alt=" food chef" />
                    <img src="images/lezatoz.png" alt="lezatoz" />
                    <img src="images/chef ganteng.png" alt="chef ganteng" />
                    <img src="images/tastyfood.png" alt="tastyfood" />
                </div>
            </div>
            <div className='mt-[79px] mb-[200px] flex gap-[80px]'>
                <div className=''>
                    <img src="images/footer logo.png" alt="" />
                    <p className='w-[380px] text-[17px] font-normal font-poppins text-[#231900] mt-[47px]'>Vivamus convallis fermen sollicitudin et, 
                    vitae elit in vel ultrices sed in urna ipsum ullamcorper auctor.</p>
                    <ul className='flex mt-[47px] gap-[48px]'>
                        <li className='text-[30px]'><a href="#"> <FaTwitter /></a></li>
                        <li className='text-[30px]'><a href="#">  <FaFacebookF /></a></li>
                        <li className='text-[30px]'><a href="#"> <RiInstagramFill /></a></li>
                    </ul>
                </div>   
                <div>
                    <h3 className='text-[24px] font-semibold font-poppins text-[#231900] mb-[45px]'>ABOUT US</h3>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Our Story</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Our Locations</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Current Deals</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Contact Us</p>
                </div>
                <div>
                    <h3 className='text-[24px] font-semibold font-poppins text-[#231900] mb-[45px]'>OUR MENU</h3>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Pizza</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Pasta</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Dessert</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>Take & Bake</p>
                </div>
                <div>
                    <h3 className='text-[24px] font-semibold font-poppins text-[#231900] mb-[45px]'>OUR LOCATION</h3>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>The FOODMOOD Rome</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>The FOODMOOD Madrid</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>The FOODMOOD Paris</p>
                    <p className='text-[17px] font-poppins font-normal text-[#231900] mt-[13px]'>The FOODMOOD Miami</p>
                </div>
            </div>
            <div className='flex justify-between mb-[10px]'>
                <p className='text-[18px] font-poppins font-normal text-[#231900]'>Copyright © 2022 The Pizzeria</p>
                <p className='text-[18px] font-poppins font-normal text-[#231900]'>Powered by The FOODMOOD</p>
            </div>

        </div>
      </section>
    </>
  )
}

export default Footer
