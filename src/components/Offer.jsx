import React, { useEffect, useState } from 'react'

const Offer = () => {
  const calculateTimeLeft = ()=>{
    const difference = + new Date("2025-04-28T12:15:00") - +new Date();
    let timeLeft = {};
    if(difference > 0){
      timeLeft ={
        days : String(Math.floor(difference / (1000 * 60 * 24))).padStart(2 , "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60))%24)).padStart(2,"0"),
        minutes: String(Math.floor((difference / 1000 / 60)%24)).padStart(2,"0"),
        second : String(Math.floor((difference / 1000 ) % 60)).padStart(2 , "2"),
      };
    }else{
      timeLeft = {
        days : "00",
        hours : "00",
        minutes : "00",
        second : "00",
      };
    };
    return timeLeft;
  }
  const [timeLeft , setTimeLeft] = useState(calculateTimeLeft())
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setTimeLeft(calculateTimeLeft())
    },1000);
    return ()=>calculateTimeLeft(timer)
  });


  return (
    <section className='max-padd-container bg-banner bg-center bg-cover h-[555px] rounded-xl'>
      <div className='flex items-center flex-col gap-1 mt-20 max-w-xl'>
        <h3 className=' uppercase meduim-20'>Sales Fever</h3>
        <h2 className=' bold-44 uppercase'>20% Off Everyting</h2>
        <span className=' italic font-ace '> Offer ends in</span>
        <div className='flex gap-x-4 xs:gap-x-7 mt-2'>
          <div className='bg-white p-2 rounded-lg'>
            <span className='font-bold text-4xl'>{timeLeft.days}</span>
            <span className='block'>Days</span>
          </div>
          <div className='bg-white p-2 rounded-lg'>
          <span className='font-bold text-4xl'>{timeLeft.hours}</span>
          <span className='block'>Hours</span>
          </div>
          <div className='bg-white p-2 rounded-lg'>
          <span className='font-bold text-4xl'>{timeLeft.minutes}</span>
          <span className='block'>Minuts</span>
          </div>
          <div className='bg-white p-2 rounded-lg'>
          <span className='font-bold text-4xl'>{timeLeft.second}</span>
          <span className='block'>Seconds</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer