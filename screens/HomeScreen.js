import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> Home Screen </Text>
            </View>
        )
    }
}