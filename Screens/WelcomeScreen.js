import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }
  SignIn = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert('User has been added succesfully');
        alert('User has been added succesfully');
      })
      .catch(function (error) {
        Alert.alert(error);
      });
  };

  LogIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert('User has been Logged in succesfully');
        alert('User has been Logged in succesfully');
      })
      .catch(function (error) {
        Alert.alert(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Barter App</Text>
          <Image style={styles.img} source={require('../assets/Barter.png')} />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="e.g. BarterApp@expo.com"
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
            keyboardType="email-address"></TextInput>

          <TextInput
            style={styles.inputBox}
            placeholder="Enter 6 Or More Digit Password"
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            secureTextEntry={true}></TextInput>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.SignIn(this.state.email, this.state.password);
            }}>
            <Text style={styles.btntxt}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.LogIn(this.state.email, this.state.password);
            }}>
            <Text style={styles.btntxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '112.23%',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: 'gold',
  },
  inputBox: {
    width: 300,
    height: 50,
    borderWidth: 5,
    paddingLeft: 8,
    fontSize: 20,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 10,
  },
  btn: {
    width: 200,
    height: 50,
    justfyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 25,
    margin: 10,
  },
  btntxt: {
    fontSize: 20,
    fontWeight: '900',
    paddingTop: 10,
  },
  img: {
    width: 333,
    height: 206,
    alignSelf: 'center',
  },
});
