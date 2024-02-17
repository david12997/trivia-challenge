import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import TriviaPage from "./pages/trivia"
import ResultsTriviaPage from "./pages/results.trivia"


function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/trivia" element={<TriviaPage/>} />
      <Route path="/trivia/results" element={<ResultsTriviaPage/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
   
  )
}

export default App
