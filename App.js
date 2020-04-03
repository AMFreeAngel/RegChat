import React from 'react';
import {Image} from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppStack = createStackNavigator({ 
    Home: HomeScreen,
    Chat: ChatScreen
});

AppStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = navigation.state.index === 0;

    return {
        tabBarVisible
    };
};

const AuthStack = createStackNavigator({ 
    Loading: LoginScreen 
});

const TabNavigator = createBottomTabNavigator({
    Chats: AppStack,
    Profile: ProfileScreen
},{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let imageName = require('./images/chats.png');
            if (routeName === 'Profile') {
                imageName = require('./images/settings.png');
            }

            return <Image source={imageName} style={{width:25, resizeMode: 'contain', tintColor}}/>
        },

        
    }),
    tabBarOptions: {
        activeTintColor: '#DADBA1',
        inactiveTintColor: '#8B6CA8', 
        style: {
            backgroundColor: '#BFA1DB',
          }
    },
})

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: TabNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);