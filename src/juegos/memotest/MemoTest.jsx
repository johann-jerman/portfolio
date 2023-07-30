import React, { useEffect, useState } from 'react'
import { icons } from "./Icons"; 
import { compare, randomArray } from './Utils';
import './card.css'

export default function MemoTest() {
  let [state, setState] = useState("Empezar a Jugar!!!")
  let [token, setToken] = useState(icons)
  
  const startPlay = () => {
    if (state == "Empezar a Jugar!!!") {
      setState("Da vuelta todos los pares de fichas!!!")
      
      setToken(
        randomArray(token)
      )
    }
  }

  const handle = (e) => {
    if(state == "Empezar a Jugar!!!" ) return null ;
    let {target} = e
    let {children} = target
    target.id == 'answer' ? target.classList.add('hidden'): null   
    target.id && children ? children[0].classList.add("hidden"): null ;  
    if (target.id && children[0].id == 'answer') {
      
      compare(target)
    }
    
  }


  return (
    <>
        <button onClick={startPlay}>{state}</button>
          <main className='grid grid-cols-8 grid-rows-6 p-10 m-10 justify-items-center'>
        {
          token.map( (icon , i) => {
            return(
              
              <div id={i} key={i} onClick={handle} className='bg-violet-300 m-4 p-4 rounded'>
                  
                  <div id='answer' className='
                    bg-violet-300 absolute
                    h-20 w-20 m-6 p-5
                    flex justify-center items-center 
                    fa-solid fa-question text-3xl'>
                  </div>
                  <div className='
                    bg-violet-300 
                    h-20 w-20 m-6 p-5
                    flex justify-center items-center'> 
                    {icon} 
                  </div>
              </div>
              )
            })
          }
      </main>
    </>
    )
  }

