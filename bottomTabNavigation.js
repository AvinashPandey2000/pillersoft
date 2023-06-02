import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import IntroSlider from './src/introSlider';
import StackNavigation from './stackNavigation';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="StackNavigation" 
      component={StackNavigation} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home-sharp" size={24} color="black" />
          ),
          tabBarLabel: '' 
    }}
     
    
     
      />
      <Tab.Screen name="IntroSlider" component={IntroSlider} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
            <Entypo name="dropbox" size={24} color="black" />
          ),
          tabBarLabel: '' 
    }}
     />
      
     <Tab.Screen name="Searcj" component={IntroSlider} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={24} color="black" />
          ),
          tabBarLabel: '' 
    }}
     />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
