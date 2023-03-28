import React from 'react'
import data from '../data.json'
import CardItem from './CardItems'
import Filtring from './Filtring'
const Card = ({Add,store,setStore,search,setSearch}) => {
  const filtered = data.filter(fil=>{
    if(fil.languages.includes(search)){

      return fil
    }
    else if(fil.role.includes(search)){

      return fil
    }
    else if(fil.level.includes(search)){

      return fil
    }
    
  }
    )
  return (
    <div className='py-20 relative mx-8 md:mx-20 flex flex-col gap-14 md:gap-6'>
      {  search &&
        <Filtring search={search} setSearch={setSearch} setStore={setStore} store={store}/>}
     
          {filtered.map((item,index)=>(
            <CardItem Add={Add}  index={index} item={item} key={item.id}/>
            ))}
      
    </div>
  )
}

export default Card