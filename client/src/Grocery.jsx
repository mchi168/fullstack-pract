import React from 'react';


//props is object with {item: {name: "", quantity: #}}
const Grocery = (props) => (
	<div>
		<span>{ props.item.name } </span>
		<span>{ props.item.quantity }</span>
	<div>

)

export default Grocery;