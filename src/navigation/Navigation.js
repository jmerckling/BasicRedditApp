import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5"
import HotPicsNavigation from './HotPicsNavigation';
import TopPicsNavigation from './TopPicsNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Hot Pics"
                component={HotPicsNavigation}
                options={{
                    tabBarLabel: "Hot",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='fire' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Top Pics" component={TopPicsNavigation}
                options={{
                    tabBarLabel: "Top",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='sort-amount-up' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}