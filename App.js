import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { AuthSession } from 'expo';
import Header from './Header';
import Axios from 'axios';
import { encode as btoa } from 'base-64';
import { stringify } from 'query-string';

const CLIENT_ID = '7u70f9iuv3rkafitfa0ai0p96j'
const CLIENT_SEC = '16obotfq503hiufcqh691u81qu0tdstn2o1bdefug4a1c8vtrri6'

export default class Tutorial extends Component {
  // Variables
  accessToken = null;
  refreshToken = null;
  
  state = {
    code: null,
    error: false
  };

  // Functions

  handleLogin = async () => {
    let redirectURL = AuthSession.getRedirectUrl();   // Retrieves Expo redirect URL to go back to the app after authentication
    var authDomain = 'https://stclogin-dev.auth.us-east-1.amazoncognito.com/'
    var authURL = `${authDomain}oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${{redirectURL}.redirectURL}`
    // User is redirected to authentication page
    let result = await AuthSession.startAsync({authUrl: authURL});
    if (result.type !== 'success') {
      this.setState({ didError: true });
    }
    else { 
    // If authentication is successful, update authorization code var
      this.setState({code: result.params.code});
      var creds = btoa(`${CLIENT_ID}:${CLIENT_SEC}`)  // Base64 Authorization Header
      var data = {
        grant_type: 'authorization_code',
        code: this.state.code,
        client_id: CLIENT_ID,
        redirect_uri: {redirectURL}.redirectURL
      }
      var headers = {
        Authorization: `Basic ${creds}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      // Use authorization code to exchange for user pool tokens
      Axios.post(`${authDomain}oauth2/token`, stringify(data), {headers: headers})
      .then(function (response) {
        this.accessToken = response.data.access_token;
        this.refreshToken = response.data.refresh_token;
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  // Components
  
  showError = () => {
    return (
      <View style={styles.userInfo}>
        <Text style={styles.resultText}>There was an error logging in to Datalogging</Text>
      </View>
    );
  }

  showSuccess = () => {
    if(this.state.code){
      return (
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.resultText}>Login to Datalogging was successful!</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header headerText={'Welcome!'} />
        </View>
        <TouchableOpacity   //Login button
          style={styles.button}
          onPress={this.handleLogin}
          disabled={this.state.userInfo ? true : false}
        >
          <Text style={styles.buttonText}>Login to Datalogging</Text>
        </TouchableOpacity>
        {this.state.didError ? this.showError() : this.showSuccess()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buton: {
    backgroundColor: '#DDDDDD',
    padding: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 20
  },
  userInfo: {
    height: 250,
    width: 200,
    alignItems: 'center',
  },
  resultText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center'
  },
})
