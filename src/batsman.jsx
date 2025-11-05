import {use, useState} from 'react';

export default function Batsman() {

    const [runs, setRuns] = useState(0);

    const [sixes, setSixes] = useState(0);
    const [foures, setFoures] = useState(0);

    const handleSingle = () => {
        setRuns(runs + 1);
    }

       const handleDouble = () => {
        setRuns(runs + 2);
    }

    const handleFour = () => {
        setRuns(runs + 4);
        const newFoures = foures + 1;
        setFoures(newFoures);
    }

    const handleSix = () => {
        setRuns(runs + 6);
        const newSixes = sixes + 1;
        setSixes(newSixes);
        
    }


    const batsmanStyle = {
        border: '2px solid green',
        padding: '10px',
        marginTop: '10px'
    }
  return (
    <div style={batsmanStyle}>
      <h2>Bangladeshi Batsman </h2>
      {
        runs >= 50 && <h3>Congrats! for Half Century!</h3>
      }
      <h1>Score: {runs}</h1>
      <p>Sixes: {sixes} Foures: {foures}</p> 
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleDouble}>Double</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
      
    </div>
  );
}