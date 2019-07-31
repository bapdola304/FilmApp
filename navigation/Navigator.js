
import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TabBarIcon from '../components/TabBarIcon';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        }
    },
);
HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='ios-film'
        />
    ),
    headerStyle: {
        backgroundColor: '#3D3D4B',
    },
};

const SearchStack = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
        }
    },
);
SearchStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='ios-search'
        />
    ),
};

const FavoriteStack = createStackNavigator(
    {
        Favorite: {
            screen: FavoriteScreen,
        }
    },
);
FavoriteStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='ios-bookmark'
        />
    ),
};

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
        }
    },
);
ProfileStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name='ios-person'
        />
    ),
};

const Tab = createBottomTabNavigator({
    //The first prop is the name that will appear on your tab. So, we created Home to receive screen HomeScreen.
    Home: {
        screen: HomeStack //HomeScreen is our screen
    },
    Search: {
        screen: SearchStack //HomeScreen is our screen
    },
    Favorite: {
        screen: FavoriteStack //HomeScreen is our screen
    },
    Profile: {
        screen: ProfileStack //HomeScreen is our screen
    }
}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            tabStyle: {
                backgroundColor: '#2A2B36',
                borderTopColor: '#2A2B36',
            },
            style: {
                borderTopColor: '#2A2B36',
            },
            animationEnabled: true
        }
    });

export default createAppContainer(Tab);