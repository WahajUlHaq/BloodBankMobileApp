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

function RedirecterHomeDonor(props) {

    const [spinner, setSpinner] = useState(false)

    const { donorName } = props.route.params;
    const [BloodGroup, setbloodGroup] = useState(null)
    const [rhFactor, setrhFactor] = useState(null)

    useEffect(() => {
        useEffectOne();

    }, []);


    const useEffectOne = () => {

        setSpinner(true)

        props.navigation.navigate("DonorHome", { UserName: donorName, userBloodGroup: BloodGroup, userRHFactor: rhFactor })

        setInterval(() => {
            setSpinner(false)
        }, 2000);
    }


    return (
        <>
            <View style={styles.container}>

                <Spinner
                    visible={spinner === true}
                    textContent={'Redirecting...'}
                    textStyle={{ color: '#fff' }}
                />

            </View>

            {/* <DonorFooter /> */}

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


});

export default RedirecterHomeDonor;
