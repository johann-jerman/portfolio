import { Route, Routes,  } from "react-router-dom"
import MemoTest from "./juegos/MemoTest"

function App() {
  return (
    <>
      <h1 className="text-9xl font-bold underline">
        Hello world!
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
