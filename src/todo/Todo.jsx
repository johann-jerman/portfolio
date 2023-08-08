import { useEffect, useState } from "react";
import { Card } from "./Card";
import { createCard, deleteAllCard, deleteCard, getCardsStorage, setCardsStorage } from "./Utils";

export function Todo() {
  let [card, setCard] = useState([])

  useEffect(()=>{
    setCard(getCardsStorage())
  }, [])
  // let info = getCardsStorage()
  
  const createTask = (e) =>{
    if (e.keyCode === 13 && e.target.value.trim().length > 0) {
      createCard(e.target.value);
      setCard(getCardsStorage())
      e.target.value = ""
    }
  }

  const deleteDom = (e)=>{
      deleteCard(e.target.id)
      setCard(getCardsStorage())
  }
  const deleteAll = ()=>{
    deleteAllCard()
    setCard(getCardsStorage())
  }

  return (
    <main>
      <section>
        <section className="flex flex-wrap justify-center items-center">
          <input type="text" className="w-1/4 p-3 rounded mx-5" placeholder="Agregar Tarea:" onKeyUp={createTask}/>
          <div className="rounded bg-red-500 text-white p-3 mx-5" onClick={deleteAll}>Eliminar Todo:</div>
        </section>
        <section className="flex flex-wrap p-4">
        {
          card?.map(({text, id})=>{
            return(
              <Card text={text} id={id} key={id} onClick={deleteDom}/>
            )
          })
        }
        </section>
        
      </section>
    </main>
  );
}
