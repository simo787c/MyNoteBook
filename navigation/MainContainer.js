
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import AddNoteScreen from './pages/AddNoteScreen';
import DetailsScreen from './pages/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackNav = () => (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='My Notebook' component={HomeScreen} />
        <Stack.Screen name='AddNote' component={AddNoteScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
);
//props in parameter so we can access props
const MainContainer = (props) => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Notebook" component={stackNav} options={{ headerShown: false }} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default MainContainer;