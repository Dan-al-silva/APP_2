import * as React from 'react';
import{View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return (
<View style={estilo.container}>
<Image style ={ estilo.logo} source={require("./assets/logo.jpg")}/>
<ScrollView style={estilo.lis}>
<Text style={estilo.data}>2019</Text>
<Image style={estilo.fotos} source={require("./assets/img2.jpg")}/>

<Text style={estilo.data}>2018</Text>
<Image style={estilo.fotos} source={require("./assets/img3.jpg")}/>
<Text style={estilo.data}>2015</Text>
<Image style={estilo.fotos} source={require("./assets/img4.jpg")}/>
<Text style={estilo.data}>2012</Text>
<Image style={estilo.fotos} source={require("./assets/img5.jpg")}/>

</ScrollView>
</View>
  );
}

const estilo = StyleSheet.create({

container:{
  alignItems:"center",
  backgroundColor:'#FFD4CA',
},

logo:{
  borderRadius:20,
},
fotos:{
  width:240,
  height: 350,
  borderRadius:20,
  marginBottom:20, 
  border:'5px solid white',
},
lis:{
  marginTop:30,
},
data:{
  textAlign:"center",
  backgroundColor:'white',
  borderRadius:100,
  marginBottom:5,
  fontWeight:"bold",

},




})