import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Dashboard from './secure/components/Dashboard';
import Users from './secure/components/Users';
import Page_404 from './components/Page_404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Navbar />

				<div className="container-fluid">
					<div className="row">
						<Menu />

						<main
							role="main"
							className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
						>
							<Switch>
								<Route exact path="/users" component={Users} />
								<Route exact path="/" component={Dashboard} />
								<Route component={Page_404} />
							</Switch>
						</main>
					</div>
				</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
