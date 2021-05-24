import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Welcome from "./Screens/WelcomeScreen"

export default class App extends React.Component {
 render(){
   return(
     <View>
     <Welcome/>
     </View>
   )
 }
}

const styles = StyleSheet.create({
 
});
