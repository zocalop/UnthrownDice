
import { useState } from 'react';

function Dice() { 
  const [roll, setRoll] = useState(''); 
  const handleRoll = (e) => {
    setRoll(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <button
        className="dice-style"
        onClick={(e) => handleRoll()}
      >
        Throw Die
      </button>
      <p className="dice-output">
        {roll}
      </p>
    </div>
  )
};

export default Dice;
