import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#424175'
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 12,
        textTransform: "uppercase",
        marginTop: 20
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#8A8F9E",
        borderBottomColor: "#8A8F9E",
        borderRadius: 4,
        marginTop: 5,
        //borderBottomWidth: StyleSheet.hairlineWidth,
        height: 45,
        fontSize: 15,
        color: "#FFF",
        width: '80%',
        marginBottom: 10
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#5C4175",
        position: "absolute",
        left: -120,
        top: -20
    },
    circlesmall: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: "#8B6CA8",
        position: "absolute",
        left: 150,
        top: -10
    },
    btnText: {
        color: "#FFF",
        fontSize: 20,
        marginTop: 5,
       // marginBottom: 2,
        height: 45,
        borderWidth: 1,
        borderColor: "#8A8F9E",
        borderRadius: 4,
        padding: 8,
        backgroundColor: "#8B6CA8",
        
        //marginBottom: 20
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#6D6CA8"
      }
});

export default styles;