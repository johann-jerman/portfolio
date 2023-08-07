import { useState } from "react";
import { Card } from "./Card";
import { Cards, setCardsStorage } from "./Utils";

export function Todo() {
  let [cards, setCards] = useState([]);
  let [createForm, setCreateForm] = useState(false);

  const create = (e) => {
    setCardsStorage([{ tite: "alo" }]);
    console.log(e.target);
    Cards.addCard(e.target.values)
  };
  const createFormView = () => {
    setCreateForm(true);
  };

  const closeCreateForm = (e)=>{
    if(e.keyCode == 27){
      setCreateForm(false)
    }
  }

  return (
    <main>
      <section>
        {createForm && (
          <article className="bg-a-c w-full h-full absolute top-0 flex justify-center  items-center">
            <form action="" className="flex flex-col ">
                <div type="text" className="fa-solid fa-trash"/>
                <input type="text" />
                <input type="text" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
          </article>
          // <article onKeyDown={closeCreateForm}>
          //   <div className=" bg-a-c w-full h-full absolute top-0 flex justify-center  items-center">
          //       <div onClick={create}
          //       className="
          //       absolute top-20 
          //       w-1/4 text-center rounded h-7 text-white
          //       border border-solid border-black bg-a-o 
          //       ">Crear</div>
          //     <div className="w-1/4 border border-red border-solid">
                
          //       <div onClick={() => setCreateForm(false)}
          //       className="
          //       fa-solid fa-trash text-red-600 
          //       border border-solid border-red-600 rounded-full
          //       absolute m-2 p-1 
          //       "></div>
                
          //       <div className="bg-b p-3">
          //         <p className="text-center pt-8">Titulo: </p>
          //         <input type="text" className="w-full border border-solid border-gray-300 rounded" />
          //       </div>
                
          //       <div className="bg-b p-3">
          //         <p className="text-center pt-6">Tarea: </p>
          //         <textarea className="w-full border border-solid border-gray-300 rounded" cols="30" rows="16"></textarea>
          //       </div>

          //     </div>
          //   </div>
          //   {/* <textarea cols="30" rows="10"></textarea> */}
          // </article>
        )}
        {!createForm && (
          <article>
            <button onClick={createFormView}>no me clickees</button>
            <Card title={"hola"}></Card>
          </article>
        )}
      </section>
    </main>
  );
}
