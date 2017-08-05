import React from 'react';

//user input fields and state manager for list
// will render list when data from DB is recieved 

class Trip extends React.Component {
  constructor() {
    super();
    this.state = {
      trip: [] //assuming array for now, as in array of list objects to populate the sub-component List
    };
  };

  render() {
    return (
      <div>
        <form action="/" method="post">
          Where To?: <input type="text" name="destination" />
          How many Days will you be staying?: <input type="text" name="days" />
          <input type="submit" value="Start Packing!! " />
        </form>
      </div>
    )
  }
}

//user input will trigger a post to the web host
  //passing the 'destination' and 'days' 

//host will return data for the list element to render

export default Trip;