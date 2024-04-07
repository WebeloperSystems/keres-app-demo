import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Poke from './Poke';
function App() {

  const [result, setResult]=useState([]);
  const [search, setSearch]=useState("");

useEffect(()=>{
axios.get("https://pokeapi.co/api/v2/pokemon")
.then(res=>setResult(res.data.results));
},[]);
const pokeApi=result.filter(p=>{
  return p.name.toLowerCase().includes(search.toLowerCase());
});

  return (
    <div className="App">
    <input value={search} className='input' type='text' placeholder='Keresés' onChange={(e)=>setSearch(e.target.value)}/>

    {
      pokeApi.map((k)=>{
        return <Poke name={k.name}/>
      })
    }
    </div>
  
  );
  
}

export default App;
