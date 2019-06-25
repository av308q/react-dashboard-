// Import react libraries 
import React from 'react';

// Import components
import CardList from './cardList';

// Import CSS

import './App.css';
// import CardList from './cardList';

const dummyUser = {
  username: {
    first: 'Angel',
    last: 'Valdivia'
  }
};

function App() {
  return (
    <div className="App">
      <CardList userData={dummyUser} />
    </div>
  );
}

export default App;
