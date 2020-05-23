import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import logo from './logo.png'
import Launches from './components/Launches'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
		<ApolloProvider client={client}>
			<Router>
				<div className="container">
					<header className="app-header">
						<div className='logo'>
							<img
								src={logo}
								alt='SpaceX'
								style={{ margin: 'auto', display: 'block' }}
							/>
						</div>
					</header>

					<Route exact path='/' component={Launches} />
					<Route exact path='/launch/:flight_number' component={Launch} />
				</div>
			</Router>
	</ApolloProvider>
  );
}

export default App;
