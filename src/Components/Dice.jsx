
import { useState } from 'react';
import RollLog from './RollLog.jsx';

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
    setShowRollLog(true);
  };

  const handleCloseLog = () => {
    setShowRollLog(false);
  };

  const handleResetDice = () => {
    setDie1(6);
    setDie2(10);
    setDie3(100);
    setRoll1('');
    setRoll2('');
    setRoll3('');
  };

  return (
  <>
    <div className="dice-bar">
      <button
        className="log-btn"
        onClick={handleLogBtn}
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
          Throw Die 1
        </button>
        <br />
        <input 
          className="output"
          type="text"
          readOnly
          value={roll1}
        />
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
          Throw Die 2
        </button>
        <br />
        <input
          className="output"
          type="text"
          readOnly
          value={roll2}
        />
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
          Throw Die 3
        </button>
        <br />
        <input
          className="output"
          type="text"
          readOnly
          value={roll3}
        />
      </form>

      <button
        className="reset-btn"
        onClick={handleResetDice}
      >
        Reset Dice
      </button>

      <button
        className="reset-btn"
      >
        Psycho Scope
      </button>
    </div>

    <div className={`roll-log ${showRollLog ? 'visible' : ''}`}>
      <RollLog onCloseLog={handleCloseLog} roll1={roll1} />
    </div>
  </>
  )
};

export default Dice;
