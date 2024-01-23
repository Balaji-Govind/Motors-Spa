// navigation/StackNavigation.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import ResultsScreen from '../Screen/ResultsScreen';


const Stack = createStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spa Screen" component={HomeScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
