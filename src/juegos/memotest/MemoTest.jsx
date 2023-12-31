import React, { useEffect, useState } from 'react'
import { icons } from "./Icons"; 
import { hidden, randomArray } from './Utils';
import './card.css'

export default function MemoTest() {
  let [state, setState] = useState("Empezar a Jugar!!!")
  let [token, setToken] = useState(icons)

  let elementToCompare = [];
  let elementToWin = [];
  
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
    
    if (target.classList.contains('padre')) {
      children[0].classList.add('hidden');
    }
    // children ? children[0].classList.add("hidden"): null ;
    //children[0].classList.contains('padre') ||
    if ( target.classList.contains('padre') ) {
      setTimeout(() => {
        compare(target)
      }, 500);
    }
    
  }

  const compare = (johann) =>{

    if (elementToCompare.length < 2) {
        elementToCompare.push(johann)
    }
    if (elementToCompare[0]?.id == elementToCompare[1]?.id) {
      elementToCompare[0].children[0].classList.remove('hidden');
      elementToCompare = [];
    }
    if (elementToCompare.length == 2 &&
      elementToCompare[0].children[1].children[0].id != elementToCompare[1].children[1].children[0].id) {

        elementToCompare[0].children[0].classList.remove('hidden')
        elementToCompare[1].children[0].classList.remove('hidden')
        elementToCompare = []
    }

    if (elementToCompare.length == 2 &&
      elementToCompare[0].children[1].children[0].id == elementToCompare[1].children[1].children[0].id) {
        
        elementToWin.push(elementToCompare[0])
        elementToWin.push(elementToCompare[1])
        elementToCompare = []
    }
    
    if (elementToWin.length == 32) {
      let reroll = document.querySelectorAll(".padre")
      setState("Empezar a Jugar!!!");
      hidden(reroll)
      setToken(icons)
      elementToWin = 0;
    }

    return null;
}

  return (
    <>

        <div className='flex justify-center'>
        <button id='boton' onClick={startPlay}>{state}</button>
        </div>
          <main className='
            flex flex-wrap
            p-5 m-5 
            justify-center items-center
          '>
        {
          token.map( (icon , i) => {
            return(
              
              <div id={i} key={i} onClick={handle} className={' bg-violet-300 m-4 p-4 rounded padre'}>
                  
                  <div className='
                    answer
                    bg-violet-300 absolute
                    h-20 w-20 m-6
                    flex justify-center items-center 
                    fa-solid fa-question text-2xl'>
                  </div>
                  <div className='
                    bg-violet-300 
                    h-20 w-20 m-6
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

