//import 'react-hot-loader/patch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'client/components/App';
import { BrowserRouter, withRouter } from 'react-router-dom';

const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

/* 
if (module.hot) {
  //console.clear();
  module.hot.accept('./components/App', () => {
    //const App = require('./components/App');
    ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
      document.getElementById('root')
    );
  });
} */