import React from 'react';
import { View, Text , Image, Button, Alert, TextInput, SafeAreaView, StatusBar ,StyleSheet} from 'react-native';
// import styles from './styles/style.js';

    const Body  = () =>{
        return(
            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{width:'50%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Image style={{width:100, height:100}}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
            </View>
        );
    }

export default Body;