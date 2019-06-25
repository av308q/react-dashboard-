// Import react libraries 
import React, {Component} from 'react';

// Import components
import CardList from './cardList';

// Import CSS

import './App.css';
// import CardList from './cardList';

class App extends Component {
  state = {
    userData: []
  }

  async componentDidMount() {
    const response = await fetch('https://randomuser.me/api/?results=2');
    const data = await response.json();
    console.log('data is', data);

  

this.setState({
  userData: data.results
 })
}



  render() {
  const { userData } = this.state;
    return (
      <div className ='App'>
        <CardList userData={userData} />
    </div>
  );
 } 
}

export default App;

