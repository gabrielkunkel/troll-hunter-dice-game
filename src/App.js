import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { MonsterFrame } from './MonsterFrame';
import { monsterDatabase } from './monsterDatabase';

function App() {

  const [monsters, updateMonsters] = useState(generateInitialMonsters());
  const [player, updatePlayer] = useState({
    level: 4,
    life: 100
  });
  const [message, updateMessage] = useState('You are surrounded by a horde of monsters. You probably won\'t survive.');

  useEffect(() => {
    generateInitialMonsters();
    clearLogger();
  });


  /**
   * @name generateInitialMonsters
   * @returns {object[]} an array of monsters
   */
  function generateInitialMonsters() {
    let monsters = [];

    for (let i = 0; i < 3; i += 1) {
      let whichMonster = rollDice(monsterDatabase.length) - 1;
      let monsterToId = Object.assign({}, monsterDatabase[whichMonster], { id: i });
      monsters.push(monsterToId);
    }

    return monsters;
  }

  /**
   * @name rollDice
   * @param {number} sides number of sides on dice
   * @returns {number} roll of the dice
   */
  function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  /**
   * @name fight
   * @param {number} monsterId 
   */
  function fight(monsterId) {

    // roll
    let monsterRoll = rollDice(monsters[monsterId].level);
    let playerRoll = rollDice(player.level);

    // compare and update 
    if (monsterRoll > playerRoll) {
      let playerLostLife = Object.assign({}, player, { life: player.life - (monsterRoll - playerRoll) });
      updatePlayer(playerLostLife);
      initMessage(`${monsters[monsterId].name} strikes you. You lose ${monsterRoll - playerRoll} life.`);
    } else if (monsterRoll < playerRoll) {
      let MonstersUpdated = monsters.map(monster => {
        if (monster.id === monsterId) {
          return Object.assign({}, monster, { life: monsters[monsterId].life - (playerRoll - monsterRoll) });
        } else {
          return monster;
        }
      })
      updateMonsters(MonstersUpdated);
      initMessage(`You strike ${monsters[monsterId].name}. He loses ${playerRoll - monsterRoll} life.`);
    }

    // level up, win, or lose?
    if (monsters[monsterId].life < 1) {
      initMessage("You killed the monster. Level up!");
      let playerLeveledUp = Object.assign({}, player, { life: player.level + 1 });
      updatePlayer(playerLeveledUp);
      generateNewMonster(monsterId);
    }

    if (player.level === 8) {
      initMessage("You won. Yay.")
    }

    if (player.life < 1) {
      initMessage('You died. You\'re a loser.')
    }

  }

  function generateNewMonster(monsterId) {
    let whichMonster = rollDice(monsterDatabase.length) - 1;
    let newMonster = Object.assign({}, monsterDatabase[whichMonster], { id: monsterId });

    let MonstersUpdated = monsters.map(monster => {
      if (monster.id === monsterId) {
        return newMonster;
      } else {
        return monster;
      }
    })

    updateMonsters(MonstersUpdated);
  }

  function clearLogger() {
    setTimeout(() => {
      updateMessage('');
    }, 4000)
  }

  function initMessage(msg) {
    updateMessage(msg);
    clearLogger();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>MONSTER HORDE</h1>
        </div>
        <div className="row justify-content-center">
            {monsters.map(monster => <MonsterFrame className="col-md-4 px-1" key={monster.id} monster={monster} fight={fight} />)}
        </div>
        <div className="row justify-content-center mt-5">
            <i>{message}</i>
        </div>

      </div>


    </div>
  );
}

export default App;
