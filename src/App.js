import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gameplay } from './gameplay';
import { MonsterFrame } from './MonsterFrame';

let game = new gameplay();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="monster-row">
        {game.trolls.map(monster => <MonsterFrame key={monster.id} monster={monster} game={game} />)}
      </div>


    </div>
  );
}

export default App;
