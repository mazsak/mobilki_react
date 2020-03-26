import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  AppRegistry,
  TouchableOpacity,
  Button,
  Image,
  Alert
} from 'react-native';
import firebase from 'firebase';
import db from './App';

export default class ListFirebase extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    firebase
      .database()
      .ref('items')
      .on('value', snapshot => {
        var temp = [];
        snapshot.forEach(item => temp.push({
          id: item.key,
          brand: item.val().brand,
          link: item.val().link,
          type: item.val().type,
          distance: item.val().distance,
          combustion: item.val().combustion,
          expense: item.val().expense,
          result: item.val().result,
          date: item.val().date,
        }));
        temp.sort(function (a, b) {
          var textA = a.marka.toLowerCase();
          var textB = b.marka.toLowerCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        this.setState({
          items: temp
        });
      });
  }

  render() {
    let keys = Object.keys(this.state.items);
    return (
      <ScrollView style={{ flex: 1, marginBottom: 15 }}>
        <Button
          onPress={() => this.props.navigation.navigate('First')}
          title="Add new item"
        />
        {keys.length > 0 ? (
          keys.map(key => (
            <TouchableOpacity
              style={styles.input}
              onPress={() => this.props.navigation.navigate('Second', { fuel: this.state.items[keys], show: false })}
              onLongPress={() => Alert.alert("Delete", "Do you want delete element?", [
                { text: 'Cancel' },
                {
                  text: 'OK', onPress: () => firebase
                    .database()
                    .ref('items')
                    .child(this.state.items[key].id)
                    .remove()
                },
              ])}
            >
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image source={{ uri: this.state.items[key].link }} style={{
                  width: 150, height: 100
                  , resizeMode: 'stretch', margin: 5
                }} />
                <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
                  <Text>Brand: {this.state.items[key].brand}</Text>
                  <Text>Distance: {this.state.items[key].distance} km</Text>
                  <Text>{this.state.items[key].combustion}</Text>
                </View>
              </View>
            </TouchableOpacity >
          ))
        ) : (
            <Text>No item</Text>
          )}
      </ScrollView >
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
    marginTop: 15,
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