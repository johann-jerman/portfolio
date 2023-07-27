import React, { useEffect, useState } from 'react'
import { icons } from "./Icons"; 
import { randomArray } from './Utils';
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
    let {target} = e
    let {children} = target
    children[0].classList.add("hidden")
    console.log(target.id);

  }

  return (
    <>
      <button onClick={startPlay}>{state}</button>
      <main className='flex flex-wrap max-w-7xl m-auto  '>
        {
          token.map( (icon , i) => {
            return(
              
              <div id={i} key={i} onClick={handle} className='bg-red-100 m-2 rounded relative'>
                
                <div className='
                  bg-gray-100 absolute
                  h-20 w-20 m-5 p-5 space-y-0
                  border-black-600 border-2 rounded-full
                  flex justify-center items-center space-x-0.1
                  '
                ><i className="fa-solid fa-question text-3xl absolute posicion"></i></div>
                
                <div className='
                  bg-gray-100 
                  h-20 w-20 m-5 p-5 space-y-0
                  border-black-600 border-2 rounded-full
                  flex justify-center items-center space-x-0.1
                  '
                > {icon} 
                </div>

              </div>
              )
            })
          }
      </main>
    </>
    )
}

