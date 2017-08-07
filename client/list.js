import React from 'react';

// list element will take input from trip element

// will render each item of the array/object passed to it as a clickable list 
//each list item when clicked will toggle 'strikethrough' 

//if all items are 'struckthrough' show and alert or additional colorful element that indicates/celebrates completion. 
var listItem = (item) => {
    return ( 
      <li key={item.toString()}> 
        {item} 
      </li>
    );
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    }

  };


//getting error with rendering on this,  somehow not returning properly, the values appear to be passing in properly,  work out htis kink and expand to react component listItem for easier handling of returned objects.  

  render(){
    return (
      <ul>
        {this.state.list.map(item => listItem(item))}
      </ul>
    );
  };
}

export default List;