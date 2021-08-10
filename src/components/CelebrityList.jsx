import contacts from '../contacts.json'
import React, { Component } from "react";
import  '../App.css';


class Table extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        table: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
      }
    }
  
    state = {
      table: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
      
    }
    
   

  newTable = this.state.table.map((e) => {
      return (<tr className =  {`${e.name}Row`}>
        <td className = {`${e.name}Picture`}> <img src={e.pictureUrl} alt="" /></td>
        <td className =  {`${e.name}`}>{e.name}</td>
        <td className =  {`${e.name}Popularity`}>{e.popularity}</td>
        <td><button onClick ={this.deleteButton} value={this.state.table.indexOf(e)}>Delete</button></td>
        </tr>
      )
    })

    



  handleClick = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length)
    const addedTable = this.state.table
    addedTable.push(contacts[randomIndex])
    this.setState ({
      table: addedTable
    })
    
    this.newTable = this.state.table.map((e) => {
      return (<tr className =  {`${e.name}Row`}>
        <td className = {`${e.name}Picture`}> <img src={e.pictureUrl} alt="" /></td>
        <td className =  {`${e.name}`}>{e.name}</td>
        <td className =  {`${e.name}Popularity`}>{e.popularity}</td>
        <td><button onClick ={this.deleteButton} value={this.state.table.indexOf(e)}>Delete</button></td>
      </tr>)
    })
  
}

sortByName = () => {
  const sortedTable = this.state.table.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  console.log(sortedTable)
  this.setState({
    table: sortedTable
  })

  this.newTable = this.state.table.map((e) => {
    return (<tr className =  {`${e.name}Row`}>
      <td className = {`${e.name}Picture`}> <img src={e.pictureUrl} alt="" /></td>
      <td className =  {`${e.name}`}>{e.name}</td>
      <td className =  {`${e.name}Popularity`}>{e.popularity}</td>
      <td><button onClick ={this.deleteButton} value={this.state.table.indexOf(e)}>Delete</button></td>
    </tr>)
  })
}

sortByPopularity = () => {
  const sortedTable = this.state.table.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
  console.log(sortedTable)
  this.setState({
    table: sortedTable
  })


  this.newTable = this.state.table.map((e) => {
    return (<tr className =  {`${e.name}Row`}>
      <td className = {`${e.name}Picture`}> <img src={e.pictureUrl} alt="" /></td>
      <td className =  {`${e.name}`}>{e.name}</td>
      <td className =  {`${e.name}Popularity`}>{e.popularity}</td>
      <td><button onClick ={this.deleteButton} value={this.state.table.indexOf(e)}>Delete</button></td>
    </tr>)
  })
} 

deleteButton = (e) => {
    
    const index = e.target.value
    console.log(index)
    const newList = this.state.table
    newList.splice(index, 1)
    
    
    this.setState({
      table: newList
    })

    console.log(this.state.table)
   
    this.newTable = this.state.table.map((e) => {
      return (<tr className =  {`${e.name}Row`}>
        <td className = {`${e.name}Picture`}> <img src={e.pictureUrl} alt="" /></td>
        <td className =  {`${e.name}`}>{e.name}</td>
        <td className =  {`${e.name}Popularity`}>{e.popularity}</td>
        <td><button onClick ={this.deleteButton} value={this.state.table.indexOf(e)}>Delete</button></td>
      </tr>)
    })
  
  
  
}

    render() {
      
      return(
        <div className="Table-container">
        <button onClick ={this.handleClick}>Add Random Celeb</button>
        <button onClick ={this.sortByName}>Sort By Name</button>
        <button onClick ={this.sortByPopularity}>Sort By Popularity</button>
        <table>
        <thead>
        <tr>
          <th><b>Picture</b></th>
          <th><b>Name</b></th>
          <th><b>Popularity</b></th>
          <th><b>Action</b></th>
        </tr>
        </thead>
        <tbody>
          <div>{this.newTable}</div>
        </tbody>
        
        </table>
        
      </div>
      
        
      )
    }
    
  
  
  }


  export default Table;