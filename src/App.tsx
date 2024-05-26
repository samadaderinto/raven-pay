import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AppContextProvider } from './utils/contexts';


import Home from './pages/home/home';




function App() {

  const [mode, setMode] = useState("dark");

  return (
    <AppContextProvider.Provider value={{
      mode: mode,
      setMode: setMode
    }}>
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode} />}></Route>
      </Routes>
    </AppContextProvider.Provider>
  )
}

export default App
