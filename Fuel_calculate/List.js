import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  Alert,
  ToastAndroid
} from 'react-native';
import firebase from 'firebase';
import SQLite from "react-native-sqlite-storage";

var db = SQLite.openDatabase({ name: 'Items.db' });
db.transaction(txn => {
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS raport(id integer PRIMARY KEY AUTOINCREMENT, brand text,link text,type text,distance integer,combustion integer,expense integer,result integer,date text)',
    []
  );
});
export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsSQLite: []
    };
    db
      .transaction(txn => {
        txn.executeSql(
          'select * from raport',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
              console.log(result.rows.item(i));
              temp.push(results.rows.item(i));
            }
            this.setState({
              itemsSQLite: temp
            });
          });
      });
  }

  componentDidMount() {
    firebase
      .database()
      .ref('items')
      .on('value', snapshot => {
        var temp = [];
        snapshot.forEach(item => {
          temp.push({
            id: item.key,
            brand: item.val().brand,
            link: item.val().link,
            type: item.val().type,
            distance: item.val().distance,
            combustion: item.val().combustion,
            expense: item.val().expense,
            result: item.val().result,
            date: item.val().date
          });
        });
        temp.sort((a, b) => {
          var textA = a.brand.toLowerCase();
          var textB = b.brand.toLowerCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        this.setState({
          items: temp
        });
      });
  }

  componentDidUpdate() {
    db
      .transaction(txn => {
        txn.executeSql(
          'select * from raport',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
              console.log(result.rows.item(i));
              temp.push(results.rows.item(i));
            }
            this.setState({
              itemsSQLite: temp
            });
          });
      });
  }

  render() {
    let keys = Object.keys(this.state.items);
    let keysSQLite = Object.keys(this.state.itemsSQLite);
    console.log(this.state.itemsSQLite);
    return (
      <ScrollView style={{ flex: 1, marginBottom: 15 }}>
        <Button
          onPress={() => this.props.navigation.navigate('First')}
          title="Add new item"
        />
        <View style={styles.input}>
          <Text style={styles.text}>Firebase</Text>
          {keys.length > 0 ? (
            keys.map(key => (
              <TouchableOpacity
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Second', { fuel: this.state.items[key], show: false })}
                onLongPress={() => Alert.alert("Delete", "Do you want to delete element?", [
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
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                  <Image source={{ uri: this.state.items[key].link }} style={{
                    width: 150, height: 100
                    , resizeMode: 'stretch', margin: 5
                  }} />
                  <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', margin: 10 }}>
                    <Text>Brand: {this.state.items[key].brand}</Text>
                    <Text>Distance: {this.state.items[key].distance} km</Text>
                    <Text>Combustion: {this.state.items[key].combustion}</Text>
                  </View>
                </View>
              </TouchableOpacity >
            ))
          ) : (
              <Text>No item</Text>
            )}
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>SQLite</Text>
          {keysSQLite.length > 0 ? (
            keysSQLite.map(keySQLite => (
              <TouchableOpacity
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Second', { fuel: this.state.itemsSQLite[keySQLite], show: false })}
                onLongPress={() => Alert.alert("Delete", "Do you want to delete element?", [
                  { text: 'Cancel' },
                  {
                    text: 'OK', onPress: () => db.transaction(tx => {
                      tx.executeSql(
                        'DELETE FROM  raport where id=?',
                        [this.state.itemsSQLite[keySQLite].id]
                      )
                    })
                  },
                ])}
              >
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                  <Image source={{ uri: this.state.itemsSQLite[keySQLite].link }} style={{
                    width: 150, height: 100
                    , resizeMode: 'stretch', margin: 5
                  }} />
                  <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', margin: 10 }}>
                    <Text>Brand: {this.state.itemsSQLite[keySQLite].brand}</Text>
                    <Text>Distance: {this.state.itemsSQLite[keySQLite].distance} km</Text>
                    <Text>Combustion: {this.state.itemsSQLite[keySQLite].combustion}</Text>
                  </View>
                </View>
              </TouchableOpacity >
            ))
          ) : (
              <Text>No item</Text>
            )}
        </View>
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