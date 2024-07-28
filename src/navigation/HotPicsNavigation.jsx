import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HotScreen from "../screens/HotScreen";
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

export default function HotPicsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Hot"
                component={HotScreen}
                options={{ title: "Hot Pics", headerTitleAlign: 'center' }}
            />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}