import React from 'react'

const Team = () => {
  return (
    <>
      <section className='mt-[47px] mb-[65px]'>
        <div className='max-w-[1200px] mx-auto'>
            <div>
                <div className='text-center'>
                    <h3 className='text-[18px] font-semibold font-poppins text-[#FFCC00]'>TEAM MEMBERS</h3>
                    <h2 className='text-[55px] font-semibold font-poppins text-[#000000] mt-[25px]'>Meet Our Best Team</h2>
                    <div className='w-[205px] h-[2px] bg-[#FFCC00] mx-auto mb-[48px]'></div>
                </div>
                <div className='flex gap-[31px]'>
                    <div >
                        <img src="images/teamone.png" alt="team one" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px]'>Alizeh Anderson</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px]'>Senior Chef</p>
                    </div>
                    <div>
                        <img src="images/teamtwo.png" alt="team two" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px]'>Angelina John</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px]'>Master Chef</p>
                    </div>
                    <div>
                        <img src="images/teamthree.png" alt="team three" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px]'>Andre Smith</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px]'>Professor</p>
                    </div>
                    <div>
                        <img src="images/teamfour.png" alt="team four" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px]'>Christina Chi</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px]'>Psychologist</p>
                    </div>
                </div>
            </div>

        </div>

      </section>
    </>
  )
}

export default Team
