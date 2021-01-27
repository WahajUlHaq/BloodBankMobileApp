import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Picker
} from 'react-native';


import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import app from '@react-native-firebase/app';

import { Button, Item, Input, Label } from 'native-base';

function Donor_Register(props) {
    const [status, setStatus] = useState('Donor Registeration')
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [number, setNumber] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [address, setAddress] = useState(null)
    const [bloodGroup, setBloodGroup] = useState('')
    const [rhFactor, setRHFactor] = useState('')


    const authToRegister = () => {
        if (name === null || name === "") {
            setStatus('Error Try Again')
        }

        else if (email === null || email === "") {
            setStatus('Error Try Again')
        }

        else if (password === null || password === "") {
            setStatus('Error Try Again')
        }

        else if (number === null || number === "") {
            setStatus('Error Try Again')
        }

        else if (country === null || country === "") {
            setStatus('Error Try Again')
        }

        else if (city === null || city === "") {
            setStatus('Error Try Again')
        }

        else if (address === null || address === "") {
            setStatus('Error Try Again')
        }

        else if (bloodGroup === null || bloodGroup === "") {
            setStatus('Error Try Again')
        }

        else if (rhFactor === null || rhFactor === "") {
            setStatus('Error Try Again')
        }

        else {
            database().ref('Donors/' + bloodGroup + "/" + rhFactor + "/" + name).update({
                donorName: name,
                donorEmail: email,
                donorPassword: password,
                donorNumber: number,
                donorCountry: country,
                donorCity: city,
                donorAddress: address,
                donorbloodGroup: bloodGroup,
                donorRHfactor: rhFactor
            })

                .then(() => {
                    database().ref('AuthUsers/' + name).update({
                        donorbloodGroup: bloodGroup,
                        donorRHfactor: rhFactor,
                        donorName: name,
                        interest: "Donors"
                    })
                        .then(() => {
                            setStatus('Success! Please Wait')
                            setStatus('Donor Registeration')
                            props.navigation.navigate("Login")
                        })
                        .catch(() => {
                            setStatus('Error Contact Admin')

                        })
                })

                .catch(() => {
                    setStatus('Error Contact Admin')

                })

        }
    }

    return (
        <>
            <View
                style={styles.container}>

                <View
                    style={styles.subContainer1} >

                    <Text
                        style={styles.t1}>
                        {status}

                    </Text>



                </View>

                <View
                    style={styles.subContainer2}>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.subContainer2_1}>

                            <Item floatingLabel
                                style={styles.inp1}>
                                <Label>Full Name</Label>
                                <Input
                                    autoCompleteType="off"

                                    maxLength={16}
                                    onChangeText={(text) => setName(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item>

                            <Item floatingLabel
                                style={styles.inp2}
                            >
                                <Label>Email Id</Label>
                                <Input
                                    autoCompleteType="off"

                                    onChangeText={(text) => setEmail(text)}
                                    keyboardType="email-address"
                                    keyboardAppearance="dark"
                                />
                            </Item>

                            <Item floatingLabel
                                style={styles.inp2}>
                                <Label>Account Password</Label>
                                <Input
                                    autoCompleteType="off"

                                    onChangeText={(text) => setPassword(text)}
                                    secureTextEntry={true}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item>

                            <Item floatingLabel
                                style={styles.inp2}>
                                <Label>Mobile Number</Label>
                                <Input
                                    autoCompleteType="off"

                                    maxLength={15}
                                    onChangeText={(text) => setNumber(text)}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark"
                                />
                            </Item>



                            <Item floatingLabel
                                style={styles.inp2}>
                                <Label>Country</Label>
                                <Input
                                    autoCompleteType="off"

                                    maxLength={20}
                                    onChangeText={(text) => setCountry(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item>

                            <Item floatingLabel
                                style={styles.inp2}>
                                <Label>City</Label>
                                <Input
                                    autoCompleteType="off"

                                    maxLength={20}
                                    onChangeText={(text) => setCity(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item>


                            <Item floatingLabel
                                style={styles.inp2}>
                                <Label>Address</Label>
                                <Input
                                    autoCompleteType="off"

                                    maxLength={100}
                                    onChangeText={(text) => setAddress(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item>

                            {/* <Item floatingLabel
                                style={styles.inp2}>
                                <Label>Blood Group</Label>
                                <Input
                                    maxLength={2}
                                    onChangeText={(text) => setBloodGroup(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item> */}

                            <Label
                                style={{ color: '#656565', width: '100%', marginTop: 15 }}
                            >Blood Group</Label>

                            <Picker
                                selectedValue={bloodGroup}
                                style={{ height: 50, width: "100%", color: '#656565' }}
                                onValueChange={(text) => setBloodGroup(text)}
                            >
                                <Picker.Item disabled={true} label="Select" value="" />
                                <Picker.Item label="O" value="O" />
                                <Picker.Item label="A" value="A" />
                                <Picker.Item label="B" value="B" />
                                <Picker.Item label="AB" value="AB" />
                            </Picker>

                            <Label
                                style={{ color: '#656565', width: '100%', marginTop: 10 }}
                            >RH Factor</Label>
                            <Picker
                                selectedValue={rhFactor}
                                style={{ height: 50, width: "100%", color: '#656565' }}
                                onValueChange={(text) => setRHFactor(text)}
                            >
                                <Picker.Item disabled={true} label="Select" value="" />
                                <Picker.Item label="-" value="-" />
                                <Picker.Item label="+" value="+" />

                            </Picker>



                            {/* <Item floatingLabel
                                style={styles.inp2}>
                                <Label>Blood RH Factor (+ or -)</Label>
                                <Input
                                    maxLength={1}
                                    onChangeText={(text) => setRHFactor(text)}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                />
                            </Item> */}

                            <Button block success style={styles.button3}
                                onPress={authToRegister}

                            >
                                <Text style={styles.b1}>
                                    Register As Blood Donor
                                 </Text>
                            </Button>


                        </View>
                    </ScrollView>
                </View>
            </View>



        </>
    );
};

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: '#3250ce'
    },
    subContainer1:
    {
        width: "100%",
        height: "15%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer2:
    {
        height: "85%",
        width: "100%",
        borderTopLeftRadius: 23,
        borderTopEndRadius: 23,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer2_1:
    {
        width: "100%",
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    img: {
        width: "100%",
        height: "100%"
    },
    inp1:
    {
        marginBottom: 15,
        marginTop: 26
    },
    inp2:
    {
        marginBottom: 10,

    },
    t1:
    {
        fontSize: 28,
        fontWeight: 'normal',
        color: "white",
        marginBottom: 15
    },

    button3:
    {
        width: "100%",
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    b1:
    {
        fontSize: 18,
        color: "white"
    }

});

export default Donor_Register;
