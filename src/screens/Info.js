import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    StatusBar,
    Image,

} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Button, Item, Input, Label, List, ListItem, Text, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';

import FooterComp from './Footer'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import app from '@react-native-firebase/app';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Info(props) {

    const { UserName } = props.route.params;
    const { donorName } = props.route.params;
    // const { rhFactor } = props.route.params;
    // const { BloodGroup } = props.route.params;
    const [spinner, setSpinner] = useState(false)

    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)

    const [requestUser, setUsersrequest] = useState()
    const [request, setRequest] = useState([])
    const [phoneNumber, setphoneNumber] = useState(null)

    const [BloodGroup, setbloodGroup] = useState(null)
    const [rhFactor, setrhFactor] = useState(null)

    useEffect(() => {
        useEffectOne();
    }, []);

    useEffect(() => {
        useEffectTwo();
    });

    const useEffectOne = () => {

        setSpinner(true)
        setInterval(() => {
            setSpinner(false)
        }, 5000);

        database().ref("AuthUsers" + "/" + donorName + "/").once('value')
            .then((snapshot) => {
                setrhFactor(snapshot.val().donorRHfactor)
                setbloodGroup(snapshot.val().donorbloodGroup)
            })

        console.log(UserName, donorName, rhFactor, BloodGroup)

        database().ref("Donors" + "/" + BloodGroup + "/" + rhFactor + "/" + donorName + "/").once('value')
            .then((snapshot) => {
                setCity(snapshot.val().donorCity)
                setCountry(snapshot.val().donorCountry)
                setphoneNumber(snapshot.val().donorNumber)


            })

        database().ref("Recipients/" + UserName + "/requests/" + donorName + "/").once('value')
            .then((snapshot) => {
                setUsersrequest(snapshot.val().requestStatus)
            })
    }

    const useEffectTwo = () => {
        database().ref("Donors" + "/" + BloodGroup + "/" + rhFactor + "/" + donorName + "/").once('value')
            .then((snapshot) => {
                setCity(snapshot.val().donorCity)
                setCountry(snapshot.val().donorCountry)
                setphoneNumber(snapshot.val().donorNumber)

            })

        database().ref("Recipients/" + UserName + "/requests/" + donorName + "/").once('value')
            .then((snapshot) => {
                setUsersrequest(snapshot.val().requestStatus)
            })
    }


    const infoBtn = (e) => {

        setSpinner(true)
        database().ref('Donors/' + BloodGroup + "/" + rhFactor + "/" + e + "/requests/" + UserName + "/").update({
            requestName: UserName,
            requestStatus: "Not Accepted"

        })

        database().ref('Recipients/' + UserName + "/requests/" + donorName + "/").update({
            donorName: e,
            donorBloodGroup: BloodGroup,
            donorRHfactor: rhFactor,
            requestStatus: "Not Accepted"


        })

        setInterval(() => {
            setSpinner(false)
           
        }, 3000);

        setTimeout(() => { 
            alert('You have reqesuted blood from' + donorName + '. You will be updated once donor accept your request.')
            props.navigation.navigate("User_Requests", { UserName: UserName, BloodGroup: BloodGroup, rhFactor: rhFactor, donorName: e })
        }, 2000);

    }

    return (
        <>
            <View style={styles.container}>

                <Spinner
                    visible={spinner === true}
                    textContent={'Loading...'}
                    textStyle={{ color: '#fff' }}
                />

                <View
                    style={styles.subContainer1} >

                    <Text
                        style={styles.t1}>
                        Mobile Blood Bank
           </Text>

                    <Text
                        style={styles.t2}>
                        Powered By Wahaj Organization ©
            </Text>
                </View>


                <View
                    style={styles.subContainer2}
                >
                    {/* <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 30, fontWeight: 'Bold', color: '#3250ce', height: hiden === "false" ? 30 : 0 }}> </Text> */}

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ width: "100%", height: "100%" }}>
                            <View style={{ height: "100%", borderRadius: 20, backgroundColor: 'white', width: "100%", marginTop: '3%', paddingTop: 20, paddingRight: 30, paddingLeft: 30 }}>
                                <Text style={styles.PersonalDetails}>
                                    Personal Details
</Text>
                                <Text style={styles.name}>
                                    Name: {donorName}
                                </Text>

                                <Text style={{ fontSize: 19, color: 'red', paddingBottom: 5, height: requestUser === 'Accepted' ? 'auto' : '0%' }}>
                                    Phone Number : {phoneNumber}
                                </Text>

                                <Text style={styles.Country}>
                                    Country : {country}
                                </Text>

                                <Text style={styles.city}>
                                    City : {city}
                                </Text>


                                <Text style={styles.bloodDetails}>
                                    Blood Details
</Text >

                                <Text style={styles.Group}>
                                    Blood Group : {BloodGroup}
                                </Text>

                                <Text style={styles.RH}>
                                    Blood RH Factor : {rhFactor}
                                </Text>


                                <Text style={{ marginTop: requestUser === undefined ? 15 : 0, color: '#3250ce', height: requestUser === undefined ? 'auto' : '0%' }}>
                                    To see phone number and email id, please request blood from this donor.
                                </Text>

                                <Text style={{ marginTop: requestUser === 'Not Accepted' ? 15 : 0, color: '#3250ce', height: requestUser === 'Not Accepted' ? 'auto' : '0%' }}>
                                    You have requested blood from this donor. Once he accept your request you can see his phone number to contact him.
                                </Text>

                                <TouchableOpacity
                                    style={{ shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.43, shadowRadius: 9.51, elevation: 5, backgroundColor: requestUser === "Accepted" ? '#3250ce' : '#3250ce', marginTop: 20, borderRadius: 10, paddingBottom: 13, }}
                                    onPress={() => infoBtn(donorName)}
                                    activeOpacity={0.9}
                                    disabled={requestUser === 'Not Accepted' || requestUser === 'Accepted'}
                                >

                                    <Text
                                        style={{ paddingLeft: 12, textAlign: 'center', paddingRight: 10, color: 'white', fontWeight: 'bold', paddingTop: requestUser === undefined ? 13 : 0, height: requestUser === undefined ? 'auto' : '0%' }}>
                                        Request This Blood
                                    </Text>

                                    <Text
                                        style={{ paddingLeft: 12, textAlign: 'center', paddingRight: 10, color: 'white', fontWeight: 'bold', paddingTop: requestUser === 'Not Accepted' ? 13 : 0, height: requestUser === 'Not Accepted' ? 'auto' : '0%' }}>
                                        Requested
                                    </Text>

                                    <Text
                                        style={{ paddingLeft: 12, textAlign: 'center', paddingRight: 10, color: 'white', fontWeight: 'bold', paddingTop: requestUser === 'Accepted' ? 15 : 0, height: requestUser === 'Accepted' ? 'auto' : '0%' }}>
                                        Request Accepted
                                    </Text>

                                </ TouchableOpacity>


                            </View>

                        </View>
                    </ScrollView>

                </View>
            </View>
            <FooterComp {...{ UserName: UserName }} />
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
        backgroundColor: '#3250ce',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },

    subContainer2:
    {

        width: "100%",
        height: "85%",
        backgroundColor: 'white',
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    t1:
    {
        fontSize: 27,
        textAlign: 'center',
        color: "white"
    },
    t2:
    {
        fontSize: 13,
        textAlign: 'center',
        color: "white"
    },



    // This Comp
    PersonalDetails:
    {
        fontSize: 22,
        color: '#3250ce',
        paddingBottom: 9,
        fontWeight: 'bold'
    },
    name:
    {
        fontSize: 18,
        paddingBottom: 5
    },
    Country:
    {
        fontSize: 18,
        paddingBottom: 5
    },
    city:
    {
        fontSize: 18,
        paddingBottom: 15
    },
    bloodDetails:
    {
        fontSize: 22,
        color: '#3250ce',
        paddingBottom: 9,
        fontWeight: 'bold'
    },
    Group:
    {
        fontSize: 18,
        paddingBottom: 5
    },
    RH:
    {
        fontSize: 18
    },
    button1:
    {
        backgroundColor: '#3250ce',
        marginLeft: 'auto',
        marginRight: 30,
        marginTop: 10,
        borderRadius: 10,
        height: "70%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 8,
    },
});

export default Info;
