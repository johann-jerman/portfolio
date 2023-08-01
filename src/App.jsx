import { Route, Routes,  } from "react-router-dom"
import MemoTest from "./juegos/memotest/MemoTest.jsx"
import Home from './Home.jsx'

function App() {
  return (
    <>
     <Home></Home>
      
      <Routes>
        {/* <Route path="*" element={</>} /> */}
        {/* <Route path="*" element={<MemoTest/>} /> */}
        <Route path="/memotest" element={<MemoTest/>} />
      </Routes>
    </>
  )
}

export default App
