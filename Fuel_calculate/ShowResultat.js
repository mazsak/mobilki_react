import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ToastAndroid,
  Button,
  Image
} from 'react-native';
import { db } from './App';


export default class ShowResultat extends Component {

  constructor(props) {
    super(props);
    this.state.brand = this.props.route.params.fuel.brand;
    this.state.link = this.props.route.params.fuel.link;
    this.state.type = this.props.route.params.fuel.type;
    this.state.distance = this.props.route.params.fuel.distance;
    this.state.combustion = this.props.route.params.fuel.combustion;
    this.state.expense = this.props.route.params.fuel.expense;
    this.state.date = this.props.route.params.fuel.date;
    this.calculate();
  }

  state = {
    brand: '',
    link: '',
    type: '',
    distance: 0,
    combustion: 0,
    expense: 0,
    result: 0,
    date: '',
  };

  calculate() {
    this.state.result = (this.state.combustion / this.state.distance) * this.state.expense;
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.input}>
          <Image source={{ uri: this.state.link }} style={{
            width: 380, height: 230, alignItems: 'center'
            , resizeMode: 'stretch', margin: 5
          }} />
          <Text style={styles.texttitle}>Data</Text>
          <Text style={styles.text}>Brand: {this.state.brand}</Text>
          <Text style={styles.text}>Typ of fuel: {this.state.type}</Text>
          <Text style={styles.text}>Distance: {this.state.distance} km</Text>
          <Text style={styles.text}>Combustion: {this.state.combustion} l</Text>
          <Text style={styles.text}>Expense: {this.state.expense} zł</Text>
          <Text style={styles.text}>Date: {this.state.date}</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.texttitle}>Result</Text>
          <Text style={styles.textbig}>{this.state.result} zł for 1 km</Text>
          <Text style={styles.textbig}>{this.state.result * 100} zł for 100 km</Text>
          <Text style={styles.textbig}>{this.state.result * this.state.distance} zł for {this.state.distance} km</Text>
        </View>
        {this.props.route.params.show ?
          <View style={styles.input, { margin: 15 }}>
            <Button title='Save'
              onPress={() => {
                db.push(this.state).then(ToastAndroid.show(
                  "Add new item",
                  ToastAndroid.SHORT
                ));
                this.props.navigation.navigate('List_firebase');
              }} />
          </View>
          : null}
      </ScrollView>
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