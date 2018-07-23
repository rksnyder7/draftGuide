import React, { Component } from 'react';
import './App.css';
import 'react-table/react-table.css'
import NavbarFunc from '../Components/Navbar';
import Homepage from '../Components/Homepage';
import TableRankings from '../Components/TableRankings';
import GuideRankings from './GuideRankings';
import { AllRanks, Ranks, AllRanksPPR, RanksPPR } from '../Utils/Data';
import 'tachyons';
import ReactGA from 'react-ga';


class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		route: 2,
      position: ''
  	}
  } 

// set route to 2 and position ''

  onItemClick = (event, event2) => {
  	this.setState({route: event})
    this.setState({position: event2})
  }

  render() {

    // google analytics
    ReactGA.initialize('UA-121403429-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    const positionDataReference = {'Top 300': AllRanks, 'Quarterbacks': Ranks['QB'], 'Running Backs': Ranks['RB'],'Wide Receivers': Ranks['WR'], 'Tight Ends': Ranks['TE'], 'Defenses': Ranks['DEF'], 'Kickers': Ranks['K']}
    const positionDataReferencePPR = {'Top 300': AllRanksPPR, 'Quarterbacks': RanksPPR['QB'], 'Running Backs': RanksPPR['RB'],'Wide Receivers': RanksPPR['WR'], 'Tight Ends': RanksPPR['TE'], 'Defenses': RanksPPR['DEF'], 'Kickers': RanksPPR['K']}
  	
    let mainDisplays = [<GuideRankings route={this.state.route} data={positionDataReferencePPR[this.state.position]} name={this.state.position}/>, <GuideRankings route={this.state.route} data={positionDataReference[this.state.position]} name={this.state.position}/>, <Homepage onItemClick={this.onItemClick} />, <TableRankings data={positionDataReference[this.state.position]} name={this.state.position}/>]
    
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



