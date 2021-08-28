import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center'
    },
    texto:{
      color: '#398',
      fontSize: 30,
      textAlign: 'center'
    },
    slogan:{
      color: 'pink'
    },
    tinyLogo:{

      backgroundColor :'#fff',
      marginTop:20,
      marginLeft:20,
      width:100,
      height:100

    },
    menu:{
      bottom:5,
      marginVertical: 2,
      width:50,
      position:'absolute',
      marginBottom: 0
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "#fff"
    },
    bgColor:{
      margin:15,
      backgroundColor: "#07fc03"
    },
    row:{
      flexDirection: "row",
      flexWrap: "wrap",
      width:50,
      height:50
    }
  });

export default styles;