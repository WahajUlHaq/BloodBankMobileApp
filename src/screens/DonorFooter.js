import React, { useEffect } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,

    StatusBar,
    Image
} from 'react-native';


function DonorFooter(props) {

    const navigation = useNavigation();
    
    const requests = () => {
        navigation.navigate("DonorHome")
    }
    const myProfile = () => {
        navigation.navigate("Login")
    }
    const backToLogin = () => {
        navigation.navigate("Login")
       // console.log(props.UserName)
    }
    // const user_requests = () => {
    //     navigation.navigate("User_Requests",  { UserName: props.UserName })
      

    // }
    return (
        
        <Footer style={styles.bg}>
            <FooterTab style={styles.bg}>
                <Button vertical active
             onPress={() => requests()}
                    >
                    <Icon name="home" />
                    <Text>My Request</Text>
                </Button>

                {/* <Button vertical active
                onPress={() => myProfile()}
                >
                    <Icon active name="person" />
                    <Text>Profile</Text>
                </Button> */}

       

                <Button vertical active
                onPress={() => backToLogin()}
                >
                    <Icon name="speedometer" />
                    <Text>Logout</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}

const styles = StyleSheet.create({
    bg:
    {
        backgroundColor: '#3250ce'
    },
});
export default DonorFooter;