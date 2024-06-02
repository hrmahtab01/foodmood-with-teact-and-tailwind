import React from 'react'

const Team = () => {
  return (
    <>
      <section className='mt-[47px] mb-[65px] dark:bg-black dark:text-[#fff]'>
        <div className='max-w-[1200px] mx-auto'>
            <div>
                <div className='text-center'>
                    <h3 className='text-[18px] font-semibold font-poppins text-[#FFCC00] dark:text-[#fff]'>TEAM MEMBERS</h3>
                    <h2 className='text-[55px] font-semibold font-poppins text-[#000000] mt-[25px] dark:text-[#fff]'>Meet Our Best Team</h2>
                    <div className='w-[205px] h-[2px] bg-[#FFCC00] mx-auto mb-[48px]'></div>
                </div>
                <div className='flex gap-[31px]'>
                    <div >
                        <img src="images/teamone.png" alt="team one" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px] dark:text-[#fff]'>Alizeh Anderson</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px] dark:text-[#fff]' >Senior Chef</p>
                    </div>
                    <div>
                        <img src="images/teamtwo.png" alt="team two" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px] dark:text-[#fff]'>Angelina John</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px] dark:text-[#fff]'>Master Chef</p>
                    </div>
                    <div>
                        <img src="images/teamthree.png" alt="team three" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px] dark:text-[#fff]' >Andre Smith</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px] dark:text-[#fff]'>Professor</p>
                    </div>
                    <div>
                        <img src="images/teamfour.png" alt="team four" />
                        <h3 className='text-[24px] font-poppins font-semibold text-[#231900] mt-[37px] dark:text-[#fff]'>Christina Chi</h3>
                        <p className='text-[20px] font-poppins font-normal text-[#231900] mt-[13px] dark:text-[#fff]'>Psychologist</p>
                    </div>
                </div>
            </div>

        </div>

      </section>
    </>
  )
}

export default Team
