
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
import Modal from './src/components/ui/Modal';

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
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Modal" component={Modal} options={{ title: 'Filter catergories' }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <Toaster />
    </ToasterState>
  );
}

export default App;