import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
          <div>
          <Header/>
          </div>
          <Form/>
        </div>
      </section>
    </div>
    );
  }
}

export default App;
