import React from 'react'
import DarkButton from '../../components/Buttons/DarkButton'
import OutlinedButton from '../../components/OutlinedButton';
import Logo from "../../assets/mindful.svg"
const index = () => {
    const k ='flex flex-col justify-center items-center min-h-screen border w-full border-black';
    const ca= "flex flex-col justify-around items-center h-[50%] w-full"
  return (
    <section className='center-section page'>
        <div className='center-section' id='cta'>
        <img src={Logo} alt="" className='w-8' />
        <h1 className='text-5xl font-bold'>HabitHero</h1>
        <p className=''>Designed to help you become the best you</p>
        <div className='center-section horizonatal-button-group'>
        <DarkButton text={"Get Started"}/>
        <OutlinedButton text={"Access As Guest"} />
        </div>
        </div>

    </section>
  )
}

export default index