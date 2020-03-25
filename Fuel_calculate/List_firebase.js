import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from 'firebase';


export default class ListFirebase extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 10,
    marginStart: 10,
    marginEnd: 10,
    marginTop: 15

  },
  text: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 24
  },
  textbig: {
    textAlign: "center",
    fontWeight: 'bold',
    color: 'green',
    fontSize: 32
  },
  texttitle: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 16,
    top: -12,
    marginStart: 10,
    marginEnd: 10
},
});