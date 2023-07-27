import { Route, Routes,  } from "react-router-dom"
import MemoTest from "./juegos/memotest/MemoTest.jsx"

function App() {
  return (
    <>
      <h1 className="text-9xl font-bold underline">
      </h1>
      
      <Routes>
        {/* <Route path="*" element={</>} /> */}
        {/* <Route path="*" element={<MemoTest/>} /> */}
        <Route path="/memotest" element={<MemoTest/>} />
      </Routes>
    </>
  )
}

export default App
