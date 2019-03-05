import React, { Component } from 'react';
import Card2 from './newcard'
import Card from './Card'
import './App.css';





class App extends Component {
  constructor() {
    super()
    this.state = {
     name1:'',
     number:'',
     valid:''
    

    }
  }

    validname=(value)=>{
      this.setState({name1:value})
    }

    validnumber=(value)=>{
      this.setState({number:value})
    }
    valid2=(value)=>{
      this.setState({valid:value})
    }
  
  
  render() {
    return (
      <div className="App">
        <Card2 name={(x)=>this.validname(x)}
           number={(y)=>this.validnumber(y)}
           valid={(z)=>this.valid2(z)}/>
        <Card cardname={this.state.name1}
              cardnumber={this.state.number}
              cardvalid={this.state.valid}/>

      </div>
    );
  }
}

export default App;
