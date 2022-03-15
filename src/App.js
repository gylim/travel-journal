import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Data from './data'

function App() {
  const places = Data.map(a => {return(<Card key={a.id} {...a}/>)})
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">
        {places}
      </section>
    </div>
  );
}

export default App;
