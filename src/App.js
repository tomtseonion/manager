import React, { Component } from  'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {

	componentWillMount() {
		const config = {
		    apiKey: 'AIzaSyBX6Fs52TK3t7CHKfRHfBvgH8XkqlLDNA8',
		    authDomain: 'manager-ed80e.firebaseapp.com',
		    databaseURL: 'https://manager-ed80e.firebaseio.com',
		    projectId: 'manager-ed80e',
		    storageBucket: 'manager-ed80e.appspot.com',
		    messagingSenderId: '81510930930'
		};

		firebase.initializeApp(config);
	}
	render() {
		const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;