import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import AddNoteScreen from './pages/AddNoteScreen';
import DetailsScreen from './pages/DetailsScreen';

const Stack = createStackNavigator();

const MainContainer = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='My Notebook' component={HomeScreen} />
            <Stack.Screen name='AddNote' component={AddNoteScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default MainContainer;