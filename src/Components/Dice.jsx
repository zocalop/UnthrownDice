
import { useState } from 'react';


function Dice() { 
  const [roll1, setRoll1] = useState('');
  const [roll2, setRoll2] = useState('');
  const [roll3, setRoll3] = useState(''); 
  const [die1, setDie1] = useState('6');
  const [die2, setDie2] = useState('10');
  const [die3, setDie3] = useState('100');
  const [showRollLog, setShowRollLog] = useState(false);

  const handleRoll1 = (e) => {
    e.preventDefault();
    setRoll1(Math.floor(Math.random() * die1) + 1);
  };
  const handleRoll2 = (e) => {
    e.preventDefault();
    setRoll2(Math.floor(Math.random() * die2) + 1);
  };
  const handleRoll3 = (e) => {
    e.preventDefault();
    setRoll3(Math.floor(Math.random() * die3) + 1);
  };

  const handleLogBtn = (e) => {
    e.preventDefault();
    setShowRollLog(true);
  };

  return (
  <>
    <div className="dice-bar">
      <button
        className="log-btn"
        onClick={(e) => handleLogBtn()}
      >
        Roll Log
      </button>

      <form 
        onSubmit={handleRoll1}
        className="dice-bar-form1"
      >
        <input
          className="input"
          type="number"
          value={die1}
          onChange={(e) => setDie1(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="roll-btn"
        >
          Throw Die
        </button>
        <br />
        {roll1}
      </form>

      <form
        onSubmit={handleRoll2}
        className="dice-bar-form2"
      >
        <input
          className="input"
          type="number"
          value={die2}
          onChange={(e) => setDie2(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="roll-btn"
        >
          Throw Die
        </button>
        <br />
        {roll2}
      </form>

      <form
        onSubmit={handleRoll3}
        className="dice-bar-form3"
      >
        <input
          className="input"
          type="number"
          value={die3}
          onChange={(e) => setDie3(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="roll-btn"
        >
          Throw Die
        </button>
        <br />
        {roll3}
      </form>
    </div>

    <div className={`roll-log ${showRollLog ? 'visible' : ''}`}>

    </div>
  </>
  )
};

export default Dice;
