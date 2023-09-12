import { deleteCard } from "./Utils";

export function Card({id, text, onClick}) {
    return(
        <article className="w-1/6 hover:shadow-md flex shadow-black rounded bg-white m-4 ">
          <div id={id} onClick={onClick} 
          className="
          fa-solid fa-trash
          text-red-700 border-red-400 border-solid border rounded
          w-1/6 p-1 flex justify-center items-center
          "
          ></div>
          <p className="p-2 text-right h-auto w-auto">{text}</p>
        </article>
    )
}

