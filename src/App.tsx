import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './ReduxToolkit/store';
import Splash from './screens/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import CarDetail from './screens/CarDetail';
const RootStack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}>
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              title: 'Trang chủ',
            }}
          />
          <RootStack.Screen
            name="CarDetail"
            component={CarDetail}
            options={{
              headerShown: true,
              title: 'THÔNG TIN XE',
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
