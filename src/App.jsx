import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [quote,setQuote] = useState('')
  const [author,setAuther] = useState('')
  const [color,setColor] = useState('')
  const ltr = 'ABCDEF1234567890'

  const randomColour = ()=>{
    let result = '#'
    for(let i=0;i<6;i++){
      const randomltr = Math.floor(Math.random()*ltr.length)
      result += ltr[randomltr]
    }
    console.log(result)
    setColor(result)
    
  }

  const fetchQuotes = async ()=>{
      try{
        const response =await axios.get("https://dummyjson.com/quotes/random?limit=1")
        console.log(response.data)
        setQuote(response.data.quote)
        setAuther(response.data.author)
      }
      catch(error){
        console.log(error)
      }
  }

  const handleReload = ()=>{
    window.location.reload()
  }
  useEffect(()=>{
    fetchQuotes()
    randomColour()
  },[])


  return (
    <div className='quote-container'  style={{backgroundColor:color}}>
      <div className='quote-box'>
        <p className='quote-text' style={{color:color}}>❝{quote}</p>
        <br />
        <div className='author-box'>
          <p className='quote-auther' style={{color:color}}>-{author}</p>
        </div>
        <br />
        <div className='btn-container' style={{display:'flex', alignItems:'flex-end', justifyContent:'flex-end'}}>
            <button onClick={handleReload} className='btn' style={{backgroundColor:color, color:'white', padding:'10px', border:'none'}}>New Quote</button>
        </div>

      </div>
    </div>
  )
}

export default App
