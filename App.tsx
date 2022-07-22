
import * as React from 'react';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/Home';
import CategoryScreen from './src/screens/Category';
import ProductScreen from './src/screens/Product';

// Components
import Toaster from './src/components/ui/Toaster';

// Store
import ToasterState from './src/store/toaster/ToasterState';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ToasterState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
        <Toaster />
      </NavigationContainer>
    </ToasterState>
  );
}

export default App;