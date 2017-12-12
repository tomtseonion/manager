
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router>
			<Scene hideNavBar key="root">
				<Scene key="auth">
					<Scene 	key="login" 
							component={LoginForm} 
							title="Login" />
				</Scene>

				<Scene key="main">	
					<Scene 
							onRight={() => Actions.employeeCreate()}
							rightTitle="Add"
							key="employeeList"
							component={EmployeeList} 
							title="Employees" initial/>

					<Scene 
							key="employeeCreate" 
							component={EmployeeCreate} 
							title="Create Employee" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;