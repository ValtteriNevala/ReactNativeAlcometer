import {Platform, StyleSheet } from "react-native";
import {Constants} from "expo-constants";

export const lightTheme = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        paddingBottom:100,
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10
    },
    label: {
        backgroundColor: 'lightblue',
        borderWidth: 2,
    },
    text: {
        color: 'black',
        paddingBottom: 5,
        alignItems: 'center'
    },
    textOtsikkoIso: {
        fontSize: 25,
        fontWeight: 'bolder',
        marginTop: 20,
        color: 'green',
        marginBottom: 15,
    },
    titleWeight: {
        fontSize: 20,
        color: '#0A1334',
        marginTop: 20,
        marginBottom: 10

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: 'brown'
      },
    header: {
        fontSize: 30,
      color: '#0A1334',
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: 20,
    },
    textInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        width: 386,
        margin: 5,
        height: 30,
    },
    result: {
        fontSize: 30,
        color: '#0A1334',
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 30
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingLeft: 10
    },
    switch: {
        color: 'purple',
        flexDirection: 'row'
    },
})

export const darkTheme = StyleSheet.create({
    main: {
        ...lightTheme.main,
        backgroundColor: 'black',
    },
    container: { 
        ...lightTheme.container,
        backgroundColor: 'black',
     },
    label: {
        ...lightTheme.label,
        backgroundColor: 'grey',
    },
    text: {
        ...lightTheme.text,
        color: 'white'
    },
    textOtsikkoIso: {
        ...lightTheme.textOtsikkoIso,
        color: 'yellow',
    },
    titleWeight: {
...lightTheme.titleWeight,
color:'grey',


    },
    header: {
        ...lightTheme.header,
        color: 'white',
    },
    textInput: {
        ...lightTheme.textInput,
        backgroundColor: 'grey',
        borderColor: 'black',
    },
radio: {
backgroundColor:'black'


},
button: {
...lightTheme.button,
backgroundColor:'grey'
  },
    result: {
        ...lightTheme.result,
        backgroundColor: 'pink',
        color: 'blue'
    },
    field: {
        ...lightTheme.field,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingLeft: 10
    },
    switch: {
        ...lightTheme.switch,
        color: 'red'
    }
})