import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    StatusBar,
    Image,
    TouchableOpacity
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

import DonorFooter from './DonorFooter'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import app from '@react-native-firebase/app';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

function DonorHome(props) {

    const [spinner, setSpinner] = useState(false)
    const { UserName } = props.route.params;
    const { Intrest } = props.route.params;
    const { userRHFactor } = props.route.params;
    const { userBloodGroup } = props.route.params;

    const [status, setStatus] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmai] = useState(null)
    const [users, setUsers] = useState([])
    const [requests, setrequests] = useState([])
    const [hiden, setHide] = useState(null)

    useEffect(() => {
        useEffectOne();
       
    }, []);


const useEffectOne = () => {

    setSpinner(true)
    database().ref("/").child("Donors/" + userBloodGroup + "/" + userRHFactor + "/" + UserName + "/requests/").on("child_added", (data) => {
        users.push(data.val());
        setrequests(users);

        if (requests === null || requests === []) {
            setHide("true")
        }
        else {
            setHide("false")
            console.group(requests)
        }

    })

   setInterval(() => {
                setSpinner(false)
            }, 5000);
}


    const toMoreInfo = (e) => {
        props.navigation.navigate("DonorInfo", { UserName: e, donorName: UserName })
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

                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20, fontWeight: 'bold', color: '#3250ce', height: hiden === "false" ? 30 : 0 }}>Blood Donations Request</Text>

                    <View style={{ marginTop: hiden === "false" ? "0%" : "50%", textAlign: 'center', width: "90%", height: hiden === "false" ? 0 : "100%" }}>
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', height: hiden === "false" ? 0 : "100%" }}>
                            Sorry, but for now no one requested blood from you.
</Text>
                    </View>

                    {/* <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>


                        <FlatList
                            data={requests}
                            key={requests.key}
                            renderItem={(data) => {
                                return (


                                    <View style={styles.myMainDispayCont}>

                                        <Text style={styles.font1}>{data.item.requestName}</Text>


                                        <TouchableOpacity
                                            onPress={() => toMoreInfo(data.item.requestName)}
                                            style={{ backgroundColor: '#3250ce', color: 'white', marginLeft: 'auto', marginRight: 30, marginTop: 10, height: "70%" }}
                                            activeOpacity={0.9}>

                                            <Text
                                                style={{
                                                    paddingLeft: 10, paddingRight: 10, color: 'white', fontWeight: 'bold', marginTop: 13
                                                }} >
                                                More Info
                                             </Text>


                                        </ TouchableOpacity>



                                    </View>
                                )

                            }}
                            keyExtractor={users => users.id}
                        />

                    </ScrollView> */}





                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>


                        <FlatList
                            data={requests}
                            key={requests.key}
                            renderItem={(data) => {
                                return (

                                    <View style={styles.myMainDispayCont}>

                                        <Text style={styles.font1}>{data.item.requestName}{"\n"}
                                            <Text style={{ paddingTop: 15, color: '#3250ce' }}>
                                                Status: {data.item.requestStatus}
                                            </Text>
                                        </Text>

                                        <TouchableOpacity

                                            // style={{ backgroundColor: '#3250ce', color: 'white', marginLeft: 'auto',  , marginRight: 30, marginTop: 10 }}
                                            style={styles.button1}
                                            onPress={() => toMoreInfo(data.item.requestName)}
                                            activeOpacity={0.9}>



                                            <Text
                                                style={{ height: "80%", paddingTop: 12, paddingLeft: 12, paddingRight: 10, color: 'white', fontWeight: 'bold' }}>
                                                More Info
                     </Text>
                                        </ TouchableOpacity>

                                    </View>



                                )

                            }}
                            keyExtractor={users => users.id}
                        />


                    </ScrollView>








                </View>

            </View>
            <DonorFooter />

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

    f001:
    {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        color: '#3250ce',

    },
    myMainDispayCont:
    {
        marginLeft: 5,
        marginRight: -40,
        flex: 1,
        height: 70,
        flexDirection: 'row',
        marginTop: 10,
        width: "100%",
        backgroundColor: 'white',
        marginBottom: 10,
        borderBottomColor: '#3250ce',
        borderBottomWidth: 2,
    },
    font1:
    {
        paddingTop: 10,
        color: 'black',
        fontSize: 20,

    }
});

export default DonorHome;
