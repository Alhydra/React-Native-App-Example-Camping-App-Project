import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Home from "./src/screens/Home/Home"
import Splash from "./src/screens/Splash"
import Details from "./src/screens/Details/Details"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;