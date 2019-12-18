import React from 'react';
import PropertiesList from './components/PropertiesList';
import './App.scss';

function App() {
  return (
    <div className="App container text-center">
      <h1 className="text-huge">Properties For Rent</h1>
      <PropertiesList />
    </div>
  );
}

export default App;
