
import { useState, useEffect }from 'react';

function RollLog({ onCloseLog, newRoll }) {
  const [rolls, setRolls] = useState([]);

  useEffect(() => {
    if (newRoll !== '') {
      setRolls(prevRolls => [
        ...prevRolls, 
        newRoll
      ]);
    }
  }, [newRoll]);

  return (
    <>
      <button
        onClick={onCloseLog}
      >
      </button>
      <div className="roll-log-page">
        {rolls.map((roll, index) => (
          <div key={index}>
            Die {roll.die} rolled {roll.result}
          </div>
        ))}
      </div>
    </>
  )
};

export default RollLog;
