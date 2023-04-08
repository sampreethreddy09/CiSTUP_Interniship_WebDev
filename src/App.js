import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Mode from "./components/Mode"
import NoPage from "./components/NoPage"

function App() {

  const [data, setData] = useState({})
  const [array, setArray] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home data ={data} array={array} setData={setData} setArray={setArray}/>} />
        <Route path="/mode" element={<Mode data={data} array={array}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
