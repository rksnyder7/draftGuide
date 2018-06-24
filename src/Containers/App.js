import React, { Component } from 'react';
import './App.css';
import 'react-table/react-table.css'
import NavbarFunc from '../Components/Navbar';
import Homepage from '../Components/Homepage';
import TableRankings from '../Components/TableRankings';
import GuideRankings from './GuideRankings';
import { alRanks, qbRanks, rbRanks, teRanks, wrRanks, deRanks, kiRanks } from '../Utils/Data';
import 'tachyons';
 

class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		route: 1,
      position: 'Running Backs'
  	}
  } 

// set route to 2 and position ''

  onItemClick = (event, event2) => {
  	this.setState({route: event})
    this.setState({position: event2})
  }

  render() {

    const positionDataReference = {'All': alRanks, 'Quarterbacks': qbRanks, 'Running Backs': rbRanks,'Wide Receivers': wrRanks, 'Tight Ends': teRanks, 'Defenses': deRanks, 'Kickers': kiRanks}
  	let mainDisplays = [<TableRankings data={positionDataReference[this.state.position]} name={this.state.position}/>, <GuideRankings data={positionDataReference[this.state.position]} name={this.state.position}/>, <Homepage onItemClick={this.onItemClick} />]
    
    return (
    	<div>
	    	<NavbarFunc onItemClick={this.onItemClick} />
    		<div style ={{height:'100vh'}}>
	    		{mainDisplays[this.state.route]}
    		</div>
    	</div>
    );
  }
}

export default App;



