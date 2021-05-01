import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import ShopPage from './page/ShopPage';
import ShopDetailPage from './page/ShopDetailPage';
import PostPage from './page/PostPage';
import './App.css';
import AppLayout from './layout/AppLayout';

import HeaderIcon from './component/HeaderIcon';
import HeaderMenu from './component/HeaderMenu';
import HeaderMenuItem from './component/HeaderMenuItem';
function App() {
	return (
		<AppLayout>
			<AppLayout.Header>
				<HeaderMenu>
					<HeaderIcon />
					<HeaderMenuItem to="/">.</HeaderMenuItem>
					<HeaderMenuItem to="/shop">#</HeaderMenuItem>
					<HeaderMenuItem to="/note">MyList</HeaderMenuItem>
				</HeaderMenu>
			</AppLayout.Header>
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
