import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { routes } from '../consts/routes';
import HomeContainer from '../containers/HomeContainer';
import InspiringPersonContainer from '../containers/InspiringPersonContainer';

const Stack = createStackNavigator();

function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={routes.home} component={HomeContainer} />
				<Stack.Screen name={routes.inspiringPreson} component={InspiringPersonContainer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;
