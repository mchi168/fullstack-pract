import React from 'react';
import GroceryList from './GroceryList.jsx'

//make sure to import jquery, and npm install jquery
import $ from 'jquery';



const list = [
	{name: 'pie', quantity: 4},
	{name: 'orange', quantity: 10},
	{name: 'cookie', quantity: 3}

]


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			groceryList: [],
		}
		componentDidMount() {
			$.ajax({
				url: 'http://localhost:3000/groceries',
				method: GET, //type does same thing 
				success: function(data){
					console.log('data', data);
					this.setState({
						groceryList: data,
					}).bind(this),
				},

				error: function(err){
					console.log('err', err);
				}
			})
		}
	}
	render(){
		return (
			<div> 
				//<Grocery item={{name: 'pizza', quanity: 5}} />
				<GroceryList groceryList={this.state.groceryList}/>
			</div>
		)
	}
}

////////////////////////////////////////////////
const App = () => (

	<div> 
		//<Grocery item={{name: 'pizza', quanity: 5}} />
		<GroceryList groceryList={list}/>
	</div>
);

export default App;





















/*
class App() extends React.Component {
	constructor(props){
		super(props);
	}

	render() {

		<div>
			<AddGrocery />
			<GroceryList groceryList />
		</div>
	}
	
}
*/