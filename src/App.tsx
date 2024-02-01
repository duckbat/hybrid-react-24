import {useState} from 'react';
import Home from './components/Home';

const App = () => {
  const [text, setText] = useState('kukkuu');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2
        onClick={() => {
          setCounter(counter + 1);
          setText('Something new');
          console.log('Bombo', text);
        }}
      >
        {text} Counter: {counter}
      </h2>
      <h1>My App</h1>
      <Home />
    </>
  );
};

export default App;
