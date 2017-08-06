import React from 'react';
import List from './list';

//user input fields and state manager for list
// will render list when data from DB is recieved 

class Trip extends React.Component {
  constructor() {
    super();
    this.state = {
      trip: ['test1','test2','test3', 'test4' ], //assuming array for now, as in array of list objects to populate the sub-component List
      destination: '',
      days: 0
    };
  };
  updateState (e) {
    if(e.target.name === 'days') {
      this.setState({days: e.target.value});
    } else {
      this.setState({destination: e.target.value});
    }
  };

  submitDestination (e) {
    e.preventDefault();
    //posts the destionation and days to the server

  };

  packingTime (result) {
    //handles inbound list and renders trip list to the id list
    this.setState({trip: result});
  }

  render() {
    return (
      <div>
        <form action="/" method="post">
          <div>
            Where To?: 
            <input 
              type="text" 
              name="destination" 
              value={this.state.destination}
              onChange={(e) => this.updateState(e)} 
            />
          </div>
          <div>
            How many Days will you be staying?: 
            <input 
              type="text" 
              name="days" 
              value={this.state.days}
              onChange={(e) => this.updateState(e)}
            />
          </div>
          <input 
            type="submit" 
            value="Start Packing!!" 
            onClick={e => this.handleSubmit(e)} 
          />
        </form>
        <List list={this.state.trip} />
      </div>
      
    )
  };
}

//user input will trigger a post to the web host
  //passing the 'destination' and 'days' 

//host will return data for the list element to render

export default Trip;