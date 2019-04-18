import React from 'react';
import Grocery from './Grocery.jsx'


const GroceryList = (props) => (
	<div>
		<Grocery item={{name: 'pizza', quanitity: 5}}

		props.groceryList.map((grocery) =>( 
			<Grocery item={grocery}/>
			)
		)
	</div>

)