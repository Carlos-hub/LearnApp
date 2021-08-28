import React from 'react';
import { View, Text , Image, Button, Alert, TextInput, SafeAreaView, StatusBar ,StyleSheet} from 'react-native';
import styles from '../styles/style';
// import styles from './styles/style.js';

        const Header = () => {   
            return(     
            <View style={{alignContent:'center', justifyContent:'center',alignItems:'center',display:'flex',borderRadius:100,padding:20,flex:1,flexDirection:'row'}}>
                <View>
                <Image style={{flex:1,flexDirection:'row',marginLeft:10, width:50,height:50}}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
                <Image style={{width:50,height:50}}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
                <Image style={{width:50,height:50}}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
                <Text style={{}}>icone </Text>
                </View>
                <View>
                <Button style={{backgroundColor:'rgb(252, 186, 3)'}}
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                />
                </View>
            </View>
                );
            }

export default Header;

