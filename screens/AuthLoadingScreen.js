import React from "react";
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    
    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyAjsDgZBgFFkY8kMm4dT37GuTiPaIDIo4s",
            authDomain: "regapp-a074e.firebaseapp.com",
            databaseURL: "https://regapp-a074e.firebaseio.com",
            projectId: "regapp-a074e",
            storageBucket: "regapp-a074e.appspot.com",
            messagingSenderId: "944256917914",
           // appId: "1:944256917914:web:f81969d4dccebedb8d5a23",
           // measurementId: "G-FRNC63Z4KS"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          //firebase.analytics();
    }

    _bootstrapAsync = async () => {
        User.phone = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}