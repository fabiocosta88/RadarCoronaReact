import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import Icon from 'react-native-ionicons'
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Components
import News from '../../pages/News/News';
import Home from '../../pages/Home/Home';
import Cares from '../../pages/Cares/Cares';
import Config from '../../pages/Config/Config';
import County from '../../pages/County/County';

// Styles
import {colors} from '../../styles/colors';

const Tab = createMaterialTopTabNavigator();

function emptyList() {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <ActivityIndicator size={100} color={colors.primary} />
    </View>
  );
}

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        lazy={true}
        lazyPlaceholder={emptyList}
        tabBarPosition={'bottom'}
        tabBarOptions={{
          showIcon: true,
          activeTintColor: colors.primary,
          inactiveTintColor: '#959595',
          labelStyle: {fontSize: 8},
          tabStyle: {height: 60},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="County"
          component={County}
          options={{
            tabBarLabel: 'Locais',
            tabBarIcon: ({color}) => (
              <Icon name="map" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Cares"
          component={Cares}
          options={{
            tabBarLabel: 'Cuidados',
            tabBarIcon: ({color}) => (
              <Icon name="medkit" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarLabel: 'Notícias',
            tabBarIcon: ({color}) => (
              <Icon name="newspaper" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Config"
          component={Config}
          options={{
            tabBarLabel: 'Sobre',
            tabBarIcon: ({color}) => (
              <Icon name="information-circle" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
