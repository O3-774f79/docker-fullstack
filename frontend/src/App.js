import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
const styles =  {
  textbox:{
   display:'flex',
   marginTop:'20rem',
   justifyContent: 'center',
   alignItems: 'center',
  },
  tb:{
     height: "40px",
     width: "600px",
     padding: 5,
     margin: 5,
     fontSize: 18,
  },
  ta:{
    height: "130px",
    width:"800px"
  }
}
class App extends Component {
  state = {
    tbInput: '',
    tbOutput: '',
    selected: false
  }
  handleclickGET = async () => {
    const res =  await axios.get(this.state.tbInput)
    console.log(this.state.tbInput)
    console.log(res)
 }
 handleclickPOST = () =>{
   let res = axios.post(this.state.tbInput)
    console.log(res)
 }
 handlechange = e => {
    this.setState({tbInput: e.target.value})
 } 
  render() {
    document.body.style.backgroundColor = "black";
    return (
      <div className="App">
        <div style={styles.textbox}>
        <input 
        onChange = {this.handlechange}
        value = {this.state.tbInput}
        onKeyPress = {this.handlekeypress}
        style = {styles.tb}
        /><button onClick ={this.handleclickGET}>GET</button>
        <button onClick ={this.handleclickPOST}>POST</button>
        </div>
        <textarea rows="4" cols="50" 
        value = {this.state.tbOutput}
        style = {styles.ta}
        />
      </div>
    );
  }
}

export default App;
