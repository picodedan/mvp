import React from 'react';

// list element will take input from trip element

// will render each item of the array/object passed to it as a clickable list 
//each list item when clicked will toggle 'strikethrough' 

//if all items are 'struckthrough' show and alert or additional colorful element that indicates/celebrates completion. 
var ListItem = (props) => (
  <li key={props.article}> 
    {props.days + 'x ' + props.article} 
  </li>
);

var List = (props) => (
  <ul>
  {props.list.map(item => <ListItem article={item} days={props.days} />)}
  </ul>
);


export default List;