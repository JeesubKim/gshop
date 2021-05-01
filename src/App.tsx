import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import ShopPage from './page/ShopPage';
import ShopDetailPage from './page/ShopDetailPage';
import PostPage from './page/PostPage';
import './App.css';
import AppLayout from './layout/AppLayout';

function App() {
	return (
		<AppLayout>
			<AppLayout.Header>header</AppLayout.Header>
			<AppLayout.Body>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={LandingPage}></Route>
						<Route exact path="/shop" component={ShopPage}></Route>
						<Route exact path="/shop/post" component={PostPage}></Route>
						<Route path="/shop/:id" component={ShopDetailPage}></Route>
					</Switch>
				</BrowserRouter>
			</AppLayout.Body>
		</AppLayout>
	);
}

export default App;
