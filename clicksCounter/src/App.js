import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import { useState } from 'react';

function App() {
 const [clicksNum, setclicksNum] = useState(0)

  const manageClick = () => {
    setclicksNum(clicksNum + 1)
  
  }
  const restartClick = () => {
    setclicksNum(0)
    
  }
  return (
    <div className="App">
        <div className= 'logo-container'>
          <h1 className='logo'>
            MY CLICK COUNTER
          </h1>
        </div>
        <div className='principal-container'>
          <Counter 
            clicksNum={clicksNum}
          />
          <Button 
            texto= 'Clic'
            isClickButton={true}
            manageClick={manageClick}
          />
          <Button 
            texto= 'Restart'
            isClickButton={false}
            manageClick={restartClick}
          />
        </div>
    </div>
  );
}

export default App;
