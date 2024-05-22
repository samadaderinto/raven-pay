import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from './pages';
import { Chart, OrderBook } from './components';




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Chart />}></Route>
          <Route path="/" element={<OrderBook />}></Route>
        </Route>

      </Routes >
    </>
  )
}

export default App
