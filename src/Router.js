
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="login" component={LoginForm} title="Login" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;