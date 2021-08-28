import React, { Component } from 'react';
import { View, Text , Image, Button, Alert, TextInput, SafeAreaView, StatusBar,ScrollView } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import styles from './styles/style.js';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends Component {
  render() {
  return(
    <ScrollView style={{ backgroundColor:'#be03fc'}}>
      <Header></Header>
      <Body></Body>
    </ScrollView>
  );
  
  }
}