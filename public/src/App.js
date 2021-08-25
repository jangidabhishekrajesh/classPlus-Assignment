import './App.css';
import React, { useState } from 'react'


import Search from './component/Search'; 
import Gallery from './component/Gallery';




function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <Search input={input} setInput={setInput}/>
      <Gallery query={input}/>
    </>
  );
}

export default App;
