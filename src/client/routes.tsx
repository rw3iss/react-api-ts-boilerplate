import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
//import createHashHistory from 'history/createHashHistory';
import HomePage from 'client/components/HomePage';
import ShopPage from 'client/components/ShopPage';
import StoryPage from 'client/components/StoryPage';
import LearnPage from 'client/components/LearnPage';
import ContactPage from 'client/components/ContactPage';
import ProductPage from 'client/components/ProductPage';

//const history = createHashHistory();

// import libs
const Routes = () => (
		<Switch>
			{/* <Route exact path="/">
				<Redirect to={{
				pathname: '/'
			}}/>
      </Route> */}

			<Route exact path="/" component={HomePage} />
			<Route path="/shop" component={ShopPage} />
			<Route path="/story" component={StoryPage} />
			<Route path="/learn" component={LearnPage} />
			<Route path="/contact" component={ContactPage} />
			<Route path="/product/:productId" component={ProductPage} />

		</Switch>
);

export default Routes;