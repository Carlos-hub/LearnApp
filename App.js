import React, { Component, useState,useEffect } from 'react';
import { View, Text , Image, Button, Alert, TextInput, SafeAreaView, StatusBar,ScrollView, Platform} from 'react-native';
import styles from './styles/style.js';

import Body from './components/Body';

export default function App {

      constructor(props){
        super(props);
        console.disableYellowBox = true;
        var altera;
        this.state = {
          contador:0,
          pagina: 'home'
        }
      }
      alterarAba  = (pag) => {
        this.setState({pagina:pag});
      }

    componentDidMount(){
      alert('O componente foi renderizado');
    }
  render() {
      if(this.state.pagina == 'home'){
        return(
          <View style={{marginTop:30}}>
            <Text>Home</Text>
            <Button title="clique para ir a contato" onPress={() =>this.alterarAba('contato')}></Button>
          </View>
        )
      }else if(this.state.pagina == 'contato'){
        return(
        <View style={{marginTop:20}}>
          <View>
          <Text>Contato</Text>
          </View>
          <Button title="clique para ir a home" onPress={() =>this.alterarAba('home')}></Button>
        </View>
     );  
    }


  }
}
