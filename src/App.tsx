import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import './App.css';

import reducer from "./redux/rootReducer";

import Home from './pages/Home';
import Question from './components/Question';
import Results from './pages/Results';

// @ts-ignore
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App: React.FunctionComponent = () => {
	return (
		<Provider store={store}>
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/question" component={Question} />
					<Route path="/results" component={Results} />
				</Switch>
			</div>
		</Router>
		</Provider>
	);
};

export default App;
