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


function FooterComp(props) {

    const navigation = useNavigation();
    
    const backToLogin = () => {
        navigation.navigate("Login")
    }
    const home = () => {
        navigation.navigate("HomeScreen")
    }
    const search = () => {
        navigation.navigate("Search_Page")

    }
    const user_requests = () => {
        navigation.navigate("User_Requests",  { UserName: props.UserName })
      

    }
    return (
        
        <Footer style={styles.bg}>
            <FooterTab style={styles.bg}>
                {/* <Button vertical active
             onPress={() => home()}
                    >
                    <Icon name="home" />
                    <Text>Home</Text>
                </Button> */}

                <Button vertical active
                onPress={() => search()}
                >
                    <Icon active name="search" />
                    <Text>Search</Text>
                </Button>

                <Button vertical active
                    onPress={() => user_requests()}
                    >
                    <Icon active name="person" />
                    <Text>Requests</Text>
                </Button>
{/* 
                <Button vertical active>
                    <Icon active name="person" />
                    <Text>Me</Text>
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
export default FooterComp;