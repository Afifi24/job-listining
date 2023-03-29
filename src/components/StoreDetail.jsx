import React, { useState } from 'react'
import close from '../../images/icon-remove.svg'
const StoreDetail = ({item,store,setStore,setSearch}) => {
    const Delete =(elem)=>{
        const deleted = store.filter(fil=>fil.id!==elem.id)
       setStore(deleted)
       setSearch('')

  }
  return (
    <div>

       <div  className='flex gap-2'>
            <button className='flex items-center bg-lightbackground pl-2 font-bold '>{item}  <span className='bg-black ml-2 h-6  px-2 rounded-r flex items-center justify-center'><img  onClick={()=>Delete(item)} className='w-full inline' src={close} alt="" /></span></button>
            
        </div>
    </div>
  )
}

export default StoreDetail