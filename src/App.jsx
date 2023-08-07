import { Route, Routes,  } from "react-router-dom"
import MemoTest from "./juegos/memotest/MemoTest.jsx"
import Home from './Home.jsx'
import { Pokedex } from "./pokedex/Pokedex.jsx"
import {CardIndex} from "./CardIndex.jsx"
import { DolarApp } from "./dolar_app/DolarApp.jsx"
import { Todo } from "./todo/Todo.jsx"
import { Cumple } from "./cumpleaños/Cumple.jsx"

function App() {
  return (
    <>
     <Home>
      
     </Home>
      
      <Routes>
        {/* <Route path="*" element={</>} /> */}
        <Route path="/" element={<CardIndex/>} />
        <Route path="/memotest" element={<MemoTest/>} />
        <Route path="/pokedex" element={<Pokedex/>} />
        <Route path="/dolarhoy" element={<DolarApp/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/cumple" element={<Cumple/>} />
      </Routes>
    </>
  )
}

export default App
