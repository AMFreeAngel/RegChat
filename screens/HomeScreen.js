import React from 'react';
import {SafeAreaView, Image, Text, TouchableOpacity, FlatList, TextBase} from 'react-native';
import User from '../User';
import styles from '../constants/styles';
import firebase from 'firebase';

export default class HomeScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Chats', 
            headerTitleStyle: {
                position: "absolute",
                left: 160,
                top: -5
              },
            headerStyle: {
                backgroundColor: '#424175',
              },
            headerTintColor: "#8B6CA8",
            headerRight: (
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Image source={require('../images/user.png')}style={{width:32, height: 32, marginRight:7}}/>
                </TouchableOpacity>
            )            
        };      
    }

    state = {
        users:[]
    }

    componentWillMount(){
        let dbRef = firebase.database().ref('users');
        dbRef.on('child_added', (val)=>{
            let person = val.val();
            person.phone = val.key;
            if(person.phone===User.phone){
                User.name = person.name
            }else{
                this.setState((prevState)=> {
                    return {
                        users: [...prevState.users, person]
                    }
                })
            }
        })
    }




    renderRow = ({item}) => {
        return(
            <TouchableOpacity 
                onPress={()=> this.props.navigation.navigate('Chat', item)}
                style={{padding: 10, borderBottomColor: "#424175", borderBottomWidth: 1,
                backgroundColor: "#8B6CA8"}}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <SafeAreaView 
                style={{flex: 1, backgroundColor: "#8B6CA8"}}
            >
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderRow}
                    keyExtractor={(item)=>item.phone}    
                />
            </SafeAreaView>
        )
    }
}
