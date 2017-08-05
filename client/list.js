import React from 'react';

// list element will take input from trip element

// will render each item of the array/object passed to it as a clickable list 
//each list item when clicked will toggle 'strikethrough' 

//if all items are 'struckthrough' show and alert or additional colorful element that indicates/celebrates completion. 

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    }

  };


  render() {
    <ul>
      {this.state.list.map(item => { <li>{item} </li> })}
    </ul>

  }
}

export default List;