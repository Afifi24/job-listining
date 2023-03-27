import React from 'react'
import data from '../../data.json'
import CardItem from './CardItems'
import Filtring from './Filtring'
const Card = ({Add,store,setStore}) => {
  return (
    <div className='py-20 relative mx-8 md:mx-20 flex flex-col gap-14 md:gap-6'>
      <Filtring setStore={setStore} store={store}/>
      {
        data.map((item,index)=>(
        <CardItem Add={Add}  index={index} item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Card