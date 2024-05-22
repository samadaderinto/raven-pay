import './App.css'
import { Routes, Route } from "react-router-dom";


import { AppContextProvider } from './utils/contexts';
import { useState } from 'react';
import { Chart } from './components/chart/chart';
import { OrderBook } from './components/order-book/order-book';
import Home from './pages/home/home';




function App() {

  const [mode, setMode] = useState("dark");

  return (
    <AppContextProvider.Provider value={{
      mode: mode,
      setMode: setMode
    }}>
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode} />}>
          <Route index element={<Chart />}></Route>
          <Route path="/" element={<OrderBook />}></Route>
        </Route>
      </Routes>
    </AppContextProvider.Provider>
  )
}

export default App
