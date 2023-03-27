import React from 'react'
import data from '../../data.json'
import CardItem from './CardItems'
const Card = () => {
  return (
    <div className='py-10 mx-8 md:mx-20 flex flex-col gap-14 md:gap-6'>
      {
        data.map((item,index)=>(
        <CardItem index={index} item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Card