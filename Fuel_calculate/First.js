import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput
} from 'react-native';


export default class First extends Component {

    state = {
        distance: 0,
        combustion: 0,
        expense: 0
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 5 }}>
                    <View style={styles.input}>
                        <Text style={styles.text}>Distance</Text>
                        <TextInput
                            value={this.state.distance}
                            onChangeText={distance => this.setState({ distance })}
                            underlineColorAndroid='transparent'
                            placeholder='km'
                            keyboardType={'numeric'}
                            />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.text}>Combustion</Text>
                        <TextInput
                            value={this.state.combustion}
                            onChangeText={combustion => this.setState({ combustion })}
                            underlineColorAndroid='transparent'
                            placeholder='l'
                            keyboardType={'numeric'}
                            />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.text}>Expense</Text>
                        <TextInput
                            value={this.state.expense}
                            onChangeText={expense => this.setState({ expense })}
                            underlineColorAndroid='transparent'
                            placeholder='zł'
                            keyboardType={'numeric'}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'steelblue' }}>
                onPress={() => this.props.navigation.navigate('Second', {fuel: this.state})}
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
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 16,
        top: -12,
        marginStart: 10,
        marginEnd: 10
    },
});
