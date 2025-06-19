import React from 'react';
import './App.css';
import GreetingCard from './features/GreetingCard';

function App() {
  return (
    <div className="App">
      <GreetingCard name={'Zoey'} message={'This is the best Kerem course ever!'}></GreetingCard>
    </div>
  );
}

export default App;
