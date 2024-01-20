import React from 'react';
import { Tabs } from "expo-router";
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default () => {
    return(
        <Tabs
            screenOptions={{ headerShown: false }}   
        >
            <Tabs.Screen 
                name = "home" 
                options={{
                    tabBarLabel: "",
                    title: "",
                    tabBarIcon: ({focused, color, size}) => {
                        return <Foundation name="home" size={32} color={focused ? "#E64072" :"#B7B7BF"} />
                }

            }}/>
            <Tabs.Screen 
                name = "map" 
                options={{
                    tabBarLabel: "",
                    title: "",
                    tabBarIcon: ({focused, color, size}) => {
                        return<Ionicons name="compass" size={32} color={focused ? "#E64072" :"#B7B7BF"} />
                }
            }}/>
            <Tabs.Screen 
                name = "temp" 
                options={{
                    tabBarLabel: "",
                    title: "",
                    tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons name="heart" size={32} color={focused ? "#E64072" :"#B7B7BF"} />
                }
            }}/>
        </Tabs>
    )
}