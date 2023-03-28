import React from 'react'
import StoreDetail from './StoreDetail'
const Filtring = ({store,setStore,setSearch,search}) => {
  const Clear = ()=>{
    setStore([])
    setSearch('')
  }
  
  return (
    <div className='bg-white min-h-20   flex justify-between w-full rounded-md  p-4 absolute -top-7 '>
          <div className='flex flex-wrap gap-2'>
          {store.map((item)=>(
             <StoreDetail setSearch={setSearch} search={search} key={item.id}  store={store} setStore={setStore}  item={item}/>
          ))}
          </div>
        <button onClick={Clear} className='text-darkgreen left-0 font-bold'>Clear</button> 
        
    </div>
  )
}

export default Filtring