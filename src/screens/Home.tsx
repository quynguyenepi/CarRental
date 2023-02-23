import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Customer from './Customer';
import Driver from './Driver';
import Icon from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();
export default function Home() {
  return (
    <Drawer.Navigator initialRouteName="Customer">
      <Drawer.Screen
        name="Customer"
        component={Customer}
        options={{
          title: 'Khách tìm xe',
          drawerIcon: ({focused, size, color}) => {
            size = focused ? 25 : 20;
            return <Icon name="user-circle-o" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Driver"
        component={Driver}
        options={{
          title: 'Tài xế cho thuê',
          drawerIcon: ({focused, size, color}) => {
            size = focused ? 25 : 20;
            return <Icon name="car" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
