import React from 'react'


const Detail =["anirban","yuvraj","Kaushik","Juman","Upamanyu","Devanuj"]
const Offers = () => {
  return (
    <section className="h-screen w-screen bg-[#DFDFD9] flex justify-center items-center">
      <div className="bg-white w-[90%] p-8 rounded-[30px]">
        <p className="text-6xl text-[#2C2C2C] font-serif mb-4">Our <span className="margarine text-[#848426]">Offers</span></p>
        <div className="relative flex flex-wrap justify-between">
          {Detail.map((item,index)=>(
            <Card/>
          ))}
        </div>
      </div>

    </section>
  )
}


const Card = () => {
  return (
    <div className=" w-[30%] border border-[#4D4D4D] rounded-[30px] p-5 pb-3 mb-8">
      <div className='flex gap-4'>
      <img src="/assests/offerpic.png"  />
      <div>
        <p className="font-semibold text-2xl mb-4">LOREM IPSUM</p>
        <p className="text-sm opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus? </p>
       
      </div>
     </div>
     <div className="flex justify-end">
      <button className="text-[#002D2D] text-xl font-bold lora">BOOK NOW</button>
     </div>
    </div>
  )
}

export default Offers


