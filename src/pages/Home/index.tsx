import React from 'react'
import DarkButton from '../../components/Buttons/DarkButton'
import OutlinedButton from '../../components/Buttons/OutlinedButton';
// import Logo from "../../assets/gym.svg"
import Logo from "../../assets/SVG/larry-with-friend.svg"
import { Link } from 'react-router-dom';

const index = () => {
    const k ='flex flex-col justify-center items-center min-h-screen border w-full border-black';
    const ca= "flex flex-col justify-around items-center h-[50%] w-full"
  return (
    <section className='center-section page'>
        <div className='center-section' id='cta'>
        <img src={Logo} alt="" className='w-30' />
        <h1 className='text-5xl font-bold'>HabitHero</h1>
        <p className='text-xl'>Create atomic habits with science</p>
        <div className='center-section horizonatal-button-group'>
        <Link to="/dashboard" className='w-full flex justify-center'>
        <DarkButton text={"Get Started"}/>
        </Link>
        <Link to="/dashboard" className='w-full flex justify-center'>
        <OutlinedButton text={"Access As Guest"} />
        </Link>
        </div>
        </div>

    </section>
  )
}

export default index