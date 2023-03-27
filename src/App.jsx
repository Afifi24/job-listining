import React,{useState} from 'react'
import Card from './components/Card'
import green from './images/bg-header-desktop.svg'
import Filtring from './components/Filtring'
const App = () => {
  const [store,setStore] = useState([])
  const Add = (item)=>{
      setStore([...store,item])
  }
  console.log(store)
  return (
    <div>
     <div className='bg-LightGrayishCyan w-full h-32 bgimg'>
     </div>
     <div id='white' className='bg-lightbackground min-h-screen'><Card setStore={setStore} store={store} Add={Add}/></div>
    </div>
  )
}

export default App
