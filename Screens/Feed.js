import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Feed extends React.Component
{
    render()
    {
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:"yellow"
            }}>
              <Text style= {{fontWeight:"bold",fontSize:30,color:"purple"}}>Feed!!</Text>
              
            </View>
        );
    }
}