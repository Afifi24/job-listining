import React from 'react'

const CardItems = ({item,index}) => {
  return (
    <div className={`flex  items-start flex-col md:flex-row  md:justify-between font-LeagueSpartan md:items-center py-6 gap-4 px-4 bg-white shadow-lg rounded-md ${index===0 || index===1 ? 'border-l-4 border-LightGrayish':''}`}>
        <div className='flex flex-col md:flex-row gap-6  items-center'>
           <img className='-mt-14 relative right-16 w-14 md:w-16 md:right-0 md:-mt-0' src={item.logo} alt="" />
             <div className='flex flex-col gap-1'>
              <div className='flex gap-4'>
                <span className='text-LightGrayish text-[14px] font-bold'>{item.company}</span>
                {
                  item.new && <span className='bg-LightGrayish text-white uppercase  rounded-full py-[2px] px-2 text-[11px]'>new!</span>
                }
                {item.featured &&
                <span className='bg-VeryDarkGrayishCyan text-white uppercase rounded-full py-[2px] px-2 text-[11px]'>featured</span>}
              </div>
              <h4 className='font-bold text-VeryDarkGrayishCyan'>{item.position}</h4>
              <div className='flex w-48  justify-between text-darkgrayish text-[12px]  items-center'>
                <span>{item.postedAt}</span>
                <span>{item.contract}</span>
                <span>{item.location}</span>
              </div>
             </div>
        </div>
        <div className='border-b-2 h-2 w-full md:hidden'/>
        <div className='flex flex-wrap gap-3 md:gap-6'>
        <div className='flex text-[12px] flex-wrap font-bold gap-6'>
            <button className='bg-lightbackground text-[12px] py-1 px-2 rounded-sm text-darkgreen font-bold'>{item.role}</button>
            <button className='bg-lightbackground text-[12px] py-1 px-2 rounded-sm text-darkgreen font-bold'>{item.level}</button>
          </div>
          {item.languages.map((element,index)=>(
            <div className='flex-wrap'>
              <button className='bg-lightbackground text-[12px] py-1 px-2 rounded-sm text-darkgreen font-bold'>{element}</button>
            </div>
          ))}
          
        </div>
    </div>
  )
}

export default CardItems