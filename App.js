import React from 'react';
import { SignUp,Scan } from './Screens';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const HomeStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const ScanStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen=({navigation})=>(
   <HomeStack.Navigator>
        <HomeStack.Screen 
            name="Home" 
            component={Tabs} 
            options={{
                title:'Digi Wallet',
                headerLeft:() =>(
                    <Icon.Button 
                        name="ios-menu" 
                        size={25}
                        backgroundColor="#24C16B"
                        onPress={() => navigation.openDrawer()} 
                    >
                    </Icon.Button>
                )
            }}
        />
    </HomeStack.Navigator> 
);

const SignUpStackScreen=({navigation})=>(
    <SignUpStack.Navigator>
        <SignUpStack.Screen 
            name="SignUp" 
            component={SignUp} 
                options={{
                    title:'Digi Wallet',
                    headerLeft:() =>(
                        <Icon.Button
                            name="ios-menu" 
                            size={25}
                            backgroundColor="#24C16B"
                            onPress={() => navigation.openDrawer()} >
                        </Icon.Button>
                    )
                }}
        />
    </SignUpStack.Navigator> 
 );

 const ScanStackScreen=({navigation})=>(
    <ScanStack.Navigator>
        <ScanStack.Screen 
            name="Scan" 
            component={Scan} 
                options={{
                    title:'Digi Wallet',
                    headerLeft:() =>(
                        <Icon.Button 
                            name="ios-menu" 
                            size={25}
                            backgroundColor="#24C16B"
                            onPress={() => navigation.openDrawer()} >
                        </Icon.Button>
                    )
                }}
        />
    </ScanStack.Navigator> 
 );

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="Scan" component={ScanStackScreen} />
                <Drawer.Screen name="SignUp" component={SignUpStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App;