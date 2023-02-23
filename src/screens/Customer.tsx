import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Booked from './Booked';
import FindCar from './FindCar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'FindCar') {
            iconName = 'car-side';
            size = focused ? 25 : 20;
          } else if (route.name === 'YourPost') {
            iconName = 'comment';
            size = focused ? 25 : 20;
          } else {
            iconName = 'calendar-check';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0080ff',
        tabBarInactiveTintColor: '#777777',
        tabBarLabelStyle: {fontSize: 15, fontWeight: '500'},
        headerShown: false,
      })}>
      <Tab.Screen
        name="FindCar"
        options={{title: 'Tìm xe'}}
        component={FindCar}
      />
      <Tab.Screen
        name="YourPost"
        component={Booked}
        options={{title: 'Bài đăng'}}
      />
      <Tab.Screen
        name="Booked"
        component={Booked}
        options={{title: 'Đã đặt'}}
      />
    </Tab.Navigator>
  );
}
