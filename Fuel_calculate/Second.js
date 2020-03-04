import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class Second extends Component {

  constructor(props) {
    super(props);
    this.state.distance = this.props.route.params.fuel.distance;
    this.state.combustion = this.props.route.params.fuel.combustion;
    this.state.expense = this.props.route.params.fuel.expense;
    this.calculate();
  }

  state = {
    distance: 0,
    combustion: 0,
    expense: 0,
    result: 0
  };

  calculate() {
    this.state.result = (this.state.combustion / this.state.distance) * this.state.expense;
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.input}>
          <Text style={styles.texttitle}>Data</Text>
          <Text style={styles.text}>Distance: {this.state.distance} km</Text>
          <Text style={styles.text}>Combustion: {this.state.combustion} l</Text>
          <Text style={styles.text}>Expense: {this.state.expense} zł</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.texttitle}>Result</Text>
          <Text style={styles.textbig}>{this.state.result} zł for 1 km</Text>
          <Text style={styles.textbig}>{this.state.result * 100} zł for 100 km</Text>
          <Text style={styles.textbig}>{this.state.result * this.state.distance} zł for {this.state.distance} km</Text>
        </View>
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