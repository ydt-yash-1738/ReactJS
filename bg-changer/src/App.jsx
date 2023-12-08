import { useState, useEffect } from 'react'


function App() {
  const [color, setColor] = useState(localStorage.getItem('backgroundColor') || "olive")
  useEffect(() => {
    localStorage.setItem('backgroundColor', color); //this is used so that after refreshing the page we get the last onClick result as the bg-color.
  }, [color]);
  return (
    <div className='w-full h-screen duration-500'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
          style={{backgroundColor: "red"}}>
            Red
            </button>
            <button 
            onClick={()=>setColor("green")}
            className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
          style={{backgroundColor: "green"}}>
            Green
            </button>
            <button 
            onClick={()=>setColor("blue")}
            className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
          style={{backgroundColor: "blue"}}>
            Blue
            </button>
            <button 
            onClick={()=>setColor("black")}
            className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
          style={{backgroundColor: "black"}}>
            Black
            </button>
            <button 
            onClick={()=>setColor("yellow")}
            className='outline-none px-4 py-1 rounded-3xl shadow-lg'
          style={{backgroundColor: "yellow"}}>
            Yellow
            </button>
            <button 
            onClick={()=>setColor("pink")}
            className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
          style={{backgroundColor: "pink"}}>
            Pink
            </button>
            <button 
            onClick={()=>setColor("orange")}
            className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white'
          style={{backgroundColor: "orange"}}>
            Orange
            </button>
            <button 
            onClick={()=>setColor("white")}
            className='outline-none px-4 py-1 rounded-3xl shadow-lg'
          style={{backgroundColor: "white"}}>
            White
            </button>
        </div>
      </div>
    </div>
  )
}



export default App
