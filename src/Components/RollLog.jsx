
import { useState, useEffect }from 'react';

function RollLog({ onCloseLog, roll1 }) {
  const [rolls, setRolls] = useState([]);

  useEffect(() => {
    if (roll1 !== '') {
      setRolls(prevRolls => [...prevRolls, roll1]);
    }
  }, [roll1]);

  return (
    <>
      <button
        onClick={onCloseLog}
      >
      </button>
      <div className="roll-log-page">
        {rolls.map((roll1, index) => (
          <div key={index}>
            Die 1 rolled {roll1}
          </div>
        ))}
      </div>
    </>
  )
};

export default RollLog;
