import React from 'react'
import { icons } from "./Icons"; 

export default function MemoTest() {
  return (
      <main className='flex flex-wrap max-w-7xl m-auto bg-gray-100 '>
        {
          icons.map( (icon , i) => {
            return(
              <div key={i} className='
                h-50 w-450 m-10 p-10 space-y-0
                border-black-600 border-2 rounded-full
                flex justify-center items-center'
              > {icon} 
              </div>
              )
            })
        }
      </main>
    )
}

