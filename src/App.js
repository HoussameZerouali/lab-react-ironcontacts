import logo from './logo.svg';
import contacts from "./contacts.json";
import React, { Component } from "react";
import CelebrityList from './components/CelebrityList'
import './App.css';

// const table = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]




// const result = table.map((e) => {
//   return (
//    <tr className =  {`${e.name}Row`}>
//      <td className = {`${e.name}Picture`}> <img src={e.pictureUrl} alt="" /></td>
//      <td className =  {`${e.name}`}>{e.name}</td>
//      <td className =  {`${e.name}Popularity`}>{e.popularity}</td>
//    </tr>
//   )
// })

// const handleClick = () => {
//   const randomIndex = Math.floor(Math.random() * contacts.length)
//   const newTable = table.push(contacts[randomIndex])
//   this.setState({
//     table: newTable
//   })
  
// }






function App() {
  
 
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <CelebrityList /> 
    </div>
  );
}

export default App;
