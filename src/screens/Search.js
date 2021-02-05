import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Picker

} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

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

function Search(props) {

    const [spinner, setSpinner] = useState(false)

    const [status, setStatus] = useState('Select Details Below')
    const [bloodGroup, setBloodGroup] = useState(null)
    const [rhFactor, setRHfactor] = useState(null)

    const [bloodgroup, setBloodgroup] = useState(null)
    const [rhfactor, setrhfactor] = useState(null)

    const { UserName } = props.route.params;
    const { Intrest } = props.route.params;


    useEffect(() => {

        setSpinner(true)
        setInterval(() => {
            setSpinner(false)
          }, 2000);

        database().ref("Recipients/" + UserName + "/").once('value')
            .then((snapshot) => {
                setrhfactor(snapshot.val().recipientsrRHfactor)
                setBloodgroup(snapshot.val().recipientsbloodGroup)
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    const searchWithProfile = () => {

        setSpinner(true)

        setStatus('Searching...')

        if (bloodgroup === null || bloodgroup === "") {
            setInterval(() => {
                setSpinner(false)
              }, 3000);
            setStatus('Error Try Again')
        }
        else if (rhfactor === null || rhfactor === "") {
            setInterval(() => {
                setSpinner(false)
              }, 3000);
            setStatus('Error Try Again')
        }

        else {
            setInterval(() => {
                setSpinner(false)
              }, 3000);
            setStatus('Select Details Below')
            props.navigation.navigate("HomeScreen", { UserName: UserName, BloodGroup: bloodgroup, rhFactor: rhfactor, Option: "Profile" })
        }

    }


    const search = () => {

        setSpinner(true)
        setStatus('Searching...')

        if (bloodGroup === null || bloodGroup === "") {
            setInterval(() => {
                setSpinner(false)
              }, 3000);
            setStatus('Error Try Again')
        }
        else if (rhFactor === null || rhFactor === "") {
            setInterval(() => {
                setSpinner(false)
              }, 3000);
            setStatus('Error Try Again')
        }

        else {
            setInterval(() => {
                setSpinner(false)
              }, 3000);
            setStatus('Select Details Below')
            props.navigation.navigate("HomeScreen", { UserName: UserName, Intrest: Intrest, BloodGroup: bloodGroup, rhFactor: rhFactor, Option: "Search" })
        }

    }
    return (
        <>
            <View
                style={styles.container}>
                <Spinner
                    visible={spinner === true}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
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

                            <Label
                                style={{ color: '#656565', width: '100%', marginTop: 33 }}
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
                                style={{ color: '#656565', width: '100%', marginTop: 15 }}
                            >RH Factor</Label>
                            <Picker
                                selectedValue={rhFactor}
                                style={{ height: 50, width: "100%", color: '#656565' }}
                                onValueChange={(text) => setRHfactor(text)}
                            >
                                <Picker.Item disabled={true} label="Select" value="" />
                                <Picker.Item label="-" value="-" />
                                <Picker.Item label="+" value="+" />
                            </Picker>

                            <Button block success style={styles.button3}
                                onPress={search}

                            >
                                <Text style={styles.b1}>
                                    Search For Blood
            </Text>
                            </Button>

                            <Button disabled block danger style={styles.b3}
                            //onPress={search}

                            >
                                <Text style={styles.b3F}>
                                    OR
            </Text>
                            </Button>

                            <Button block success style={styles.b2}
                                onPress={searchWithProfile}

                            >
                                <Text style={styles.b1}>
                                    Search Blood Acording To Profile
            </Text>

                            </Button>
                            <View style={{ width: "85%", height: 120 }}>
                                <Text style={{ textAlign: 'center', color: 'red' }}>
                                    Searching blood according to profile will display all blood group which {bloodgroup} {rhfactor} can accept.
</Text>
                            </View>

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
    spinnerTextStyle: {
        color: '#FFF'
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
        flex: 1,
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
        marginTop: 30
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
        marginTop: 25,
        borderRadius: 20,
        marginBottom: 15
    },
    b1:
    {
        fontSize: 18,
        color: "white"
    },
    b2:
    {
        width: "100%",
        borderRadius: 20,
        marginBottom: 20
    },
    b3:
    {
        color: 'black',
        width: "100%",
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: 'transparent',
        elevation: 0
    },
    b3F:
    {
        fontSize: 20,
        color: '#656565',
        fontWeight: 'bold'
    }
});

export default Search;
