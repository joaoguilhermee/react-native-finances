import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../src/screens/Dashboard';
import { Register } from '../src/screens/Register';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name='Listagem'
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name='format-list-bulleted'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='attach-money' color={color} size={size} />
          ),
        }}
        name='Cadastrar'
        component={Register}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='pie-chart' color={color} size={size} />
          ),
        }}
        name='Resumo'
        component={Register}
      />
    </Navigator>
  );
};
