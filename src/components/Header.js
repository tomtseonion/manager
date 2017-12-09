// Import libraries for making a compoent
import React from 'react';
import { Text, View } from 'react-native';
// Make a compoent
const Header = (props) => {
	const { viewStyle, textStyle } = styles;

	return (
	<View style={viewStyle}>	
		<Text style={textStyle}>{props.headerText}</Text>
	</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		height: 60,
		paddingTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// Make the compoent available to othe parts of the app
export default Header;