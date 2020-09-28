import React from 'react';
import './App.css';
import PizzaProvider from './contexts/Pizza';
import Routes from './routes';

function App() {
  return (
    <PizzaProvider>
      <div className="App">
        <Routes />
      </div>
    </PizzaProvider>
  );
}

export default App;
