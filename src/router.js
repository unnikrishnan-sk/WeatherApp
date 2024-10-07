import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from './screens/DashboardScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import PrecipitationScreen from './screens/PrecipitationScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from './screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './components/MyTabBar';
import ForecastScreen from './screens/ForecastScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />} tabBarPosition="top">
            <Tab.Screen name="today" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="forecast" component={ForecastScreen} options={{ headerShown: false }} />
            <Tab.Screen name="precipitation" component={PrecipitationScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName='homeTabs' drawerContent={(props) => <ProfileScreen {...props} />} >
            <Drawer.Screen name="homeTabs" component={TabNavigator} options={{ title: 'Home' }} />
            <Drawer.Screen name="profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='forecast' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='dash' component={DashboardScreen} />
                <Stack.Screen name='splash' component={SplashScreen} />
                {/* <Stack.Screen name='mytab' component={MyTab} /> */}
                <Stack.Screen name='home' component={DrawerNavigator} />
                {/* <Stack.Screen name='precipitation' component={PrecipitationScreen} /> */}
                {/* <Stack.Screen name='forecast' component={ForecastScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router