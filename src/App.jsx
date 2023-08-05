import { Route, Routes,  } from "react-router-dom"
import MemoTest from "./juegos/memotest/MemoTest.jsx"
import Home from './Home.jsx'
import { Pokedex } from "./pokedex/Pokedex.jsx"
import {CardIndex} from "./CardIndex.jsx"

function App() {
  return (
    <>
     <Home>
      
     </Home>
      
      <Routes>
        {/* <Route path="*" element={</>} /> */}
        {/* <Route path="/" element={<CardIndex/>} /> */}
        <Route path="/memotest" element={<MemoTest/>} />
        <Route path="/pokedex" element={<Pokedex/>} />
      </Routes>
    </>
  )
}

export default App
