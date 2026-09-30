
import { useState } from 'react';

function Dice() { 
  const [roll, setRoll] = useState(''); 
  const [die1, setDie1] = useState('');

  const handleRoll = (e) => {
    e.preventDefault();
    setRoll(Math.floor(Math.random() * die1) + 1);
  };

  return (
    <div className="die1">
      <form onSubmit={handleRoll}>
        <input
          type="number"
          value={die1}
          onChange={(e) => setDie1(e.target.value)}
        />
        <button
          className="dice-style"
          type="submit"
        >
          Throw Die
        </button>
      </form>
      <p className="dice-output">
        {roll}
      </p>
    </div>
  )
};

export default Dice;
