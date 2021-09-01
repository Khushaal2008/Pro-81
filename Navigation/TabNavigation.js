import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/Feed';
import CreatePost from '../Screens/CreatePost';

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () =>{
    return(
        <Tab.Navigator
        screenOptions ={({route})=>({
            tabBarIcon:({focused,color,size}) =>{
                let icon;
                if(route.name ==='Feed')
                {
                    icon = focused
                    ? 'book'
                    : 'book-outline'
                }
                else if(route.name === 'CreatePost')
                {
                    icon = focused
                    ? 'create'
                    : 'create-outline';
                }
                return <Ionicons name={icon} size={size} color={color}/>
            },
        })}
        tabBarOptions ={{
            activeTintColor:'blue',
            inactiveTintColor:'green'
        }}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;