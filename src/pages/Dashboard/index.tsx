import React from 'react'

const Dashboard = () => {
//${i==0? "bg-black" : ""}
    const days = Array(6).fill(1).map((el, i) =>{
        return     <div className={`flex flex-col w-10 justify-center`}>
        <span className='text-center'>Su</span>
        {/**index can be replaced with present day flag */}
        <span className={`${i==0? "bg-black text-white" : ""} border-2 border-black h-10 rounded-full flex justify-center items-center`}>23</span>
</div>
    }
  )


  return (
    <section className='section p-6' id='dashboard'>
        {/**month selector */}
    <div className='text-2xl flex justify-between'>
    <span>January</span>
    <span>add</span>
    </div>

    {/**calendar */}
    <div className='mt-4 flex justify-around'>
    {days}
    </div>
    </section>
  )
}

export default Dashboard