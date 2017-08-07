import React from 'react';
import List from './list';
import axios from 'axios';

//user input fields and state manager for list
// will render list when data from DB is recieved 

class Trip extends React.Component {
  constructor() {
    super();
    this.state = {
      trip: [], //assuming array for now, as in array of list objects to populate the sub-component List
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
    axios.post('/', {
      destination: this.state.destination
    }).then((res) => {
      //send response data to packingTime function.
      this.packingTime(res.data[0]);
    }).catch((error) => {
      console.log(error);
    })
  };

  packingTime (res) {
    //handles inbound list and renders trip list to the id list
    console.log(res);
    this.state.trip = res.toPack;
    this.setState({trip: this.state.trip});
  }

  packedIt (e) {
    //take clicke event from list item and remove from page
  }

  allDone () {
    //if all items have been packed,  show a congratulations message
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
            onClick={e => this.submitDestination(e)} 
          />
        </form>
        <List list={this.state.trip} days={this.state.days} />
      </div>
      
    )
  };
}

//user input will trigger a post to the web host
  //passing the 'destination' and 'days' 

//host will return data for the list element to render

export default Trip;