import 'react-native-gesture-handler';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from './screen/Home';
import Board from './screen/Board';
import History from './screen/History';
import Chat from './screen/Chat';
import Profile from './screen/Profile';

export default function App() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === '홈') {
                    iconName = 'ios-home'
                } else if (route.name === '구매내역') {
                    iconName = 'ios-cart';
                } else if (route.name === '신청') {
                    iconName = 'ios-list';
                } else if (route.name === '메시지') {
                    iconName = 'ios-chatbubbles';
                } else if (route.name === '프로필') {
                    iconName = 'ios-person';
                }
                return <Ionicons name={iconName} size={size} color={color} />
            }})}
                tabBarOptions={{
                activeTintColor: '#FF6767',
                inactiveTintColor: '#A7A7A7',
            }}
        >
            <Tab.Screen name="홈" component={Home} />
            <Tab.Screen name="신청" component={History} options={{ tabBarBadge: 2 }} />
            <Tab.Screen name="구매내역" component={Board} />
            <Tab.Screen name="메시지" component={Chat} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="프로필" component={Profile} />
        </Tab.Navigator>
    );
}