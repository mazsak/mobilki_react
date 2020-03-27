import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    ScrollView,
    Button,
    Text,
    Image,
    Picker,
    TextInput
} from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class Add extends Component {

    state = {
        brand: '',
        link: 'https://www.carscare.pl/wp-content/themes/carscare/img/green-car.png',
        type: 'Petrol',
        date: '',
        distance: 0,
        combustion: 0,
        expense: 0
    };


    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 5 }}>
                    <View style={styles.input}>
                        <Text style={styles.text}>Image car</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => {
                                this.state.link = 'https://www.carscare.pl/wp-content/themes/carscare/img/green-car.png';
                            }} >
                                <Image source={{ uri: 'https://www.carscare.pl/wp-content/themes/carscare/img/green-car.png' }} style={{
                                    width: 180, height: 100, resizeMode: 'stretch', margin: 5
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.state.link = 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/836b60425493647fd809df84f57429bd.png';
                            }} >
                                <Image source={{ uri: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/836b60425493647fd809df84f57429bd.png' }} style={{
                                    width: 180, height: 100, resizeMode: 'stretch', margin: 5
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => {
                                this.state.link = 'https://auto.ndtvimg.com/car-images/large/bmw/m2/bmw-m2.webp?v=1';
                            }} >
                                <Image source={{ uri: 'https://auto.ndtvimg.com/car-images/large/bmw/m2/bmw-m2.webp?v=1' }} style={{
                                    width: 180, height: 100, resizeMode: 'stretch', margin: 5
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.state.link = 'https://opcar.pl/wp-content/uploads/2018/08/purepng.com-opel-insignia-opc-red-carcarvehicletransportopel-9615246642672afz7.png';
                            }} >
                                <Image source={{ uri: 'https://opcar.pl/wp-content/uploads/2018/08/purepng.com-opel-insignia-opc-red-carcarvehicletransportopel-9615246642672afz7.png' }} style={{
                                    width: 180, height: 100, resizeMode: 'stretch', margin: 5
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.text}>Brand</Text>
                        <TextInput
                            value={this.state.brand}
                            onChangeText={brand => this.setState({ brand })}
                            underlineColorAndroid='transparent'
                            placeholder='name'
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.text}>Type of fuel</Text>
                        <Picker
                            selectedValue={this.state.type}
                            onValueChange={type => this.setState({ type })}
                        >
                            <Picker.Item label="Petrol" value="Petrol" />
                            <Picker.Item label="Oil" value="oil" />
                            <Picker.Item label="kWh" value="kWh" />
                        </Picker>
                    </View>
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
                    <View style={styles.input}>
                        <Text style={styles.text}>Date</Text>
                        <DatePicker
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'steelblue' }}>
                    <Button
                        title='Calculate'
                        onPress={() => this.props.navigation.navigate('Second', { fuel: this.state, show: true })} />
                </View>
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
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 16,
        top: -12,
        marginStart: 10,
        marginEnd: 10
    },
});
