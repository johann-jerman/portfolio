import React, { useEffect, useState } from 'react'
import { icons } from "./Icons"; 
import { randomArray } from './Utils';

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

  return (
    <>
      <button onClick={startPlay}>{state}</button>
      <main className='flex flex-wrap max-w-7xl m-auto  '>
        {
          token.map( (icon , i) => {
            return(
              <div key={i} className='bg-red-100 m-2 rounded'>
                <div className='
                  h-20 w-20 m-5 p-5 space-y-0
                  border-black-600 border-2 rounded-full
                  bg-gray-100
                  flex justify-center items-center space-x-0.1'
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

