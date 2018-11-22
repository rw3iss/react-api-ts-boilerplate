import * as React from 'react';
//import { hot } from 'react-hot-loader'
//import { BrowserRouter, withRouter } from 'react-router-dom';
//import EventBus from 'eventbusjs';
import Routes from '../routes';
import SiteHeader from 'client/components/shared/SiteHeader';

import '../style/app.scss';

let mounted = false;
class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
		const self = this;

		// Todo: load current theme from cookie/user
		this.state = {
            currentPage: undefined
		};

		/* props.history.listen((location, action) => {
			if (mounted) {
				self.setState({
					currentPage: location.pathname
				});
			}
		});
 */
		// on App start, ask backend for latest user info:
		this.bindEvents();
	}

	bindEvents() {
	}

	render() {
		const self = this;

		return (
			<div>

				<SiteHeader />

				<div id="app-container" className={ 'app-container' }>
					
                    <div className="app-view" id="app-view">
                        <Routes />
                    </div>

				</div>
			</div>
		);
	}

}

// Todo: remove hot 
export default App;
//export default hot(module)(App)