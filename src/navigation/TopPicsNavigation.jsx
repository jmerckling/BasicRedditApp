import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from "../screens/PostScreen";
import TopScreen from "../screens/TopScreen";

const Stack = createStackNavigator();

export default function TopPicsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Top"
                component={TopScreen}
                options={{ title: "Top Pics", headerTitleAlign: 'center' }}
            />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}