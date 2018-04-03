import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
/*import AppActions from '../flux/actions/AppActions.js'
import AppStore from '../flux/stores/AppStore.js'*/

class App extends React.Component{
	render(){
		return (
			<div> 
				App.jsx

				<Switch> 
					<Route exact path='/' component={Home} />
					<Route path='/contacts' component={Contacts} />
					<Route path='/page' component={Page} />
				</Switch>
			</div>
		)
	}
}



const Home = () => {
	return(
		<div>Home</div>
	)
}
const Contacts = () => {
	return(
		<div>Contacts</div>
	)
}
const Page = () => {
	return(
		<div>Page</div>
	)
}













export default App