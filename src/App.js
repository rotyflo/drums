import React from 'react';
import './App.css';
import { Drumpad } from './features/drumpad/Drumpad';

const baseLink = 'https://s3.amazonaws.com/freecodecamp/drums/';
const sounds = [
  ['q', 'Heater-1'],
  ['w', 'Heater-2'],
  ['e', 'Heater-3'],
  ['a', 'Heater-4_1'],
  ['s', 'Heater-6'],
  ['d', 'Dsc_Oh'],
  ['z', 'Kick_n_Hat'],
  ['x', 'RP4_KICK_1'],
  ['c', 'Cev_H2']
];

document.addEventListener('keydown', event => {
  for (let i = 0; i < sounds.length; i++) {
    if (event.key === sounds[i][0]) {
      document.getElementById('current').innerText = sounds[i][1];					
      document.getElementById(sounds[i][0].toUpperCase()).play();
      setTimeout(() => {
        document.getElementById('current').innerText = 'Sounds';
      }, 500);
    }
  }
});

function App() {
  return (
    <div className="App container" id="drum-machine">
      <div id="display">
        <p id="current">Sounds</p>
        {sounds.map(sound => 
          <Drumpad
            sound={baseLink + sound[1] + '.mp3'}
            keyboardKey={sound[0].toUpperCase()}
            name={sound[1]}
          />
        )}
      </div>
    </div>
  );
}

export default App;
