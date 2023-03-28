import React,{useState} from 'react'
import Card from './components/Card'
import green from './images/bg-header-desktop.svg'
import Filtring from './components/Filtring'
const App = () => {
  const [store,setStore] = useState([])
  const [search,setSearch]= useState('')
  const Add = (item)=>{
      setStore([...store,item])
      setSearch(item)
  }
  console.log(search)
 
  return (
    <div>
     <div className='bg-LightGrayishCyan w-full h-32 bgimg'>
     </div>
     <div id='white' className='bg-lightbackground min-h-screen'><Card setSearch={setSearch} search={search} setStore={setStore} store={store} Add={Add}/></div>
    </div>
  )
}

export default App
