
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login" />
				</Scene>

				<Scene key="main">	
					<Scene key="employeeList" component={EmployeeList} 
							title="Employees" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;