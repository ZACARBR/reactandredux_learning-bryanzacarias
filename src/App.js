import React, { useState }from 'react';
import './App.css';

function App() {
  const [favorite, setFavorite] = useState ("singing");
  return (
    <div className='App'>
      <h1>My favorite thing to do is {favorite}!</h1>
      <button className='button' onClick={()=>setFavorite("reading")}>Reading</button>
      <button className='button' onClick={()=>setFavorite("singing")}>Singing</button>
      <button className='button' onClick={()=>setFavorite("dancing")}>Dancing</button>
      <button className='button' onClick={()=>setFavorite("watching movies")}>Watching Movies</button>
      
    </div>
  );
}
export default App;