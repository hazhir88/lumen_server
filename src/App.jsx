import React from 'react'
import cat from './assets/cat.jpg'
import love from './assets/love.png'
import camp from './assets/camp.png'

const App = () => {
  return (
    <div className=' h-screen  md:h-[50rem] bg-gradient-to-b from-[#7CABC2] to-[#0B2045] relative flex justify-center'>

      <section className=' md:h-[5rem] md:w-[40rem] h-[5rem] w-[25rem] bg-slate-50/50  rounded-3xl shadow-xl absolute top-5 flex justify-end items-center '>

        <div className="flex gap-5 items-center mr-10 ">
          <h1  className=' md:text-[3rem] text-[1.5rem] text-[#213958]'>اگه رفیقی نداری اینجا پیدا کن</h1>
          <img src={cat} className=' rounded-[5rem] h-[4rem]' />
        </div>

      </section>

      <section className='md:h-[30rem] md:w-[80rem] h-[30rem] w-[25rem] bg-slate-50/50  rounded-3xl shadow-xl absolute top-[10rem] flex md:flex-row flex-col md:gap-5 items-center'>

      <p className=' text-[#0d2c35] md:text-[2.5rem] text-[1.5rem] md:text-right text-center md:w-[45rem] w-[20rem] absolute md:right-5 mt-2 '>اگه حوصلت سر رفته یا رفیقی نداری یا حال بیرون رفتن رو نداری میتونی بیای سرور لومن ما هر جمعه شب ساعت 10:30 جمع میشیم و باهم میگیم میخندیم بازی میکنم مهم نیست دختری یا پسر کامپیوتر داری یا موبایل </p>
      <img src={camp} alt="" className=' md:h-[30rem] h-[17rem] absolute md:top-[0rem] top-[13rem]' />

      </section>

      <section className=' md:h-[5rem] md:w-[40rem] bg-slate-50/50  rounded-3xl shadow-xl absolute top-[43rem] flex justify-center items-center'>

      <a
        href="https://discord.gg/ZVQ8VZygYV"
        target="_blank"
        className="inline-block md:px-6 md:py-3 px-[2rem] py-[2rem] text-[2rem] md:text-2xl bg-indigo-600 text-[#000713] font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition"
      >
        Join Our Discord
      </a>

      </section>
       
    </div>
  )
}

export default App
