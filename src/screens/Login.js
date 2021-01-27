import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
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

function Login(props) {

  const [status, setStatus] = useState('Log In To Your Account')
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)
  const [nameChecker, setnameChecker] = useState([])
  const [stdCheck, setstdCheck] = useState(null)

  const authToHome = () => {
    window.intrest = null
    window.bloodGroup = null
    window.RHFactor = null

    setnameChecker (name) ;

    setStatus('Please Wait ...')

    database().ref("AuthUsers/" + name).once('value')
      .then((snapshot) => {

        window.intrest = snapshot.val().interest
        window.bloodGroup = snapshot.val().donorbloodGroup,
          window.RHFactor = snapshot.val().donorRHfactor,

          setStatus('User Found Validating ...')

        if (window.intrest === "Donors") {
          database().ref(window.intrest + "/" + window.bloodGroup + "/" + window.RHFactor + "/" + name).once('value')
            .then((snapshot) => {

              if (password === snapshot.val().donorPassword) {
                setStatus('Successfully Logged In')
                setStatus('Log In To Your Account')

                if (window.intrest === "Donors") {
                  props.navigation.navigate("DonorHome", { UserName: name, Intrest: window.intrest, userRHFactor: snapshot.val().donorRHfactor, userBloodGroup: snapshot.val().donorbloodGroup })
                }

              }
              else {
                setStatus('Incorrect Credentials')
              }
            })
            .catch(() => {
              setStatus('Server Error, Try Again')
            })
        }
        
        else if (window.intrest === "Recipients") {
          database().ref(window.intrest + "/" + name).once('value')
            .then((snapshot) => {
              if (password === snapshot.val().recipientsPassword) {
                setStatus('Successfully Logged In')
                setStatus('Log In To Your Account')
                props.navigation.navigate("Search_Page", { UserName: name, Intrest: window.intrest })
              }
              else {
                setStatus('Incorrect Credentials')
              }
            })
            .catch(() => {
              setStatus('Server Error, Try Again')
            })
        }

        else {
          setStatus('Server Error')

        }
      })

      .catch(() => {
        setStatus('User Not Found')
      })

  }

  const buttonToDonorRegisteration = () => {
    props.navigation.navigate("Donor_Register")
  }

  const buttonToRecipientRegisteration = () => {
    props.navigation.navigate("Recipient_Register")
  }

  return (
    <>

<StatusBar   
     backgroundColor = "#9b9b9b"  
     barStyle = "light-content"   
  />  


      <View
        style={styles.container}>
        <View style={styles.bg}>
          <Image
            source={{
              uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HBwcHBw0HBwcHBw0HBwcHBw8NCQcWFREiIiARFRMYKCogGCYxJxMfIjEmJTUxMzoyFys5OD86NzRCNjcBCgoKDQ0NDg0NDzcZHxkrMjcrKysyLSsrLSsrLSstKysrKys1Li0tKysrKy0rKy0rKy0rKysrKzcrKysrKysrN//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAwACBgX/xAAiEAEBAQACAAUFAAAAAAAAAAAAEQECEgMhIjFBcYGhwfD/xAAaAQEBAQADAQAAAAAAAAAAAAAAAQMEBQYC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAFhEf/aAAwDAQACEQMRAD8A8hTU6a9s6xSmp00FKanTQUpqdNEd01xTQd01xWoKU1OmiKU1OmgpTU6aClNTpojumuKaDump00FKanTRFKanTQUpqdNBSs4pojphTQZmYGZmB52mp00bqU1OmiKU1OmgpTU6aClauKaI7rqp1qCtap00RSmp00FKanTQUpqdNBSmp00R3TXFNB3TU6aClNTpoilNTpoKU1OmiKVq4poO6a4rUFKU6aI81TU6aOQpTU6aIpTU6aClNTpoKU1OmiKU1OtQVrVOmgpTU6aIpTU6aClNTpoKU1OmiKU1OmgpTU61BSmp00RSmp00FKanTQUpqdNEUpqdNBStXFag83Wrimjd3TXFaiKU1OmgpTU6aClNTpoilNTpoKU1Omg7primiO6anTQUpqdNBSmp00RSmp00FKanTQUrVxTRHdNcVqClNTpoKU1OmiKU1OmgpWrimg81TU6ardSmp00R3TXFNB3TU6agpTU6aIpTU6aClNTpoO6a4pojump00FKanTQUpqdNEUpqdNBSmp00FKanTRHdNcU0HdNTpoKU1OmiKU1OmgpTU6aDzVNTpqt1KanTQUpqdNEUpqVNBSmp00RSmp00FKanTUFKanTRFKanTQd01OmgpTU6aIpTU6aClNTpoKU1OmiKU1OmgpTUqaClNTpoilNTpoKU1Omg81TU6ardSmp00FKanTRFKanWoK1q4poO6a4rURSmp00FKanTQUpqdNEUpqdNQd01xWoKU1OmiKU1OmgpTU6aIpTU6aClNSpoK1qnXVB3TXFaiKU1Omg81TU6ardSmp00FKanTRFKanTQUrVxTQd01xWoilNTpoKU1OmgpTU6aIpTU6aClNTpoO6a4pojumuK1QUpqdNBSmp00RSmp00FK1cU0HdNcVqIpTU6aDzVNTpqt1KanTQUpqdNEUpqdNBStXFNB3TXFaiK1qnTQUpqdNBSmp00RSmp00FKanTQUpqdNEd11U61BWtU6aClNTpoilNTpqClNTpoKU1OmiKVq4rUHm6a5Z9N3VNcEHdNTpqIpTU6aClNTpoKU1OmiKU1KmgpTU6aClNTpoilNTpoKU1OmgpTU6aIpTU6aClap00FKa4rURSmp00FKanTQUpqdNEUrVxTQfADMrZmZgZmYC1ZgNNZgNNZkQ01mBqazAaazCGmswGmswGmswhprMBpoYDTWYQ00sDVTwuu9u/xx9Obymb92Yo6zpnG7vPeXn6c8vp5z+qm8fDy533evabxzd7e0/YZOaNnTM28uW7nHyzLnb8OOe5nLem7vH43fcsSI//Z"

            }}
            style={styles.img}
          >
          </Image>
        </View>

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
          style={styles.subContainer2}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.subContainer2_1}>
              <Text
                style={styles.f3}>
                {status}
              </Text>

              <Item floatingLabel
                style={styles.inp1}
              >
                <Label>Full Name</Label>
                <Input
                  autoCompleteType = "off"
                  onChangeText={(text) => setName(text)}
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                />
              </Item>

              <Item floatingLabel
                style={styles.inp2}>
                <Label>Account Password</Label>
                <Input
                  autoCompleteType = "off"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  keyboardType="default"
                  keyboardAppearance="dark"
                />
              </Item>

              <Button block success style={styles.button3}
                onPress={() => authToHome()}
              >
                <Text style={styles.b1}>
                  Login To Your Account
            </Text>
              </Button>

              <Text
                style={styles.f2}>
                New Member ?
          </Text>

              <Button block warning style={styles.button1}
                onPress={() => buttonToDonorRegisteration()}
              >
                <Text style={styles.b1}>
                  Register Your Account As Donor
            </Text>
              </Button>

              <Button block warning style={styles.button2}
                onPress={() => buttonToRecipientRegisteration()}
              >
                <Text style={styles.b1}>
                  Register Your Account As Recipient
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
    height: "100%"
  },
  subContainer1:
  {
    width: "100%",
    height: "25%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer2:
  {
    height: "75%",
    width: "100%",
    borderTopLeftRadius: 23,
    borderTopEndRadius: 23,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer2_1:
  {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:
  {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%"
  },
  inp1:
  {
    marginBottom: 10,
    marginTop: 22
  },
  inp2:
  {
    marginBottom: 10,

  },
  t1:
  {
    fontSize: 35,
    fontWeight: 'normal',
    color: "white",

  },
  t2:
  {
    fontSize: 15,
    fontWeight: 'normal',
    color: "white"
  },
  f3:
  {
    marginTop: 30,
    marginBottom: 5,
    color: "#353535",
    fontSize: 23,
    fontWeight: 'bold',
  },
  f2:
  {
    color: "#353535",
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },

  button1:
  {
    //backgroundColor : "#385ad7",
    width: "100%",
    borderRadius: 20,
  },
  button2:
  {
    //backgroundColor : "#385ad7",
    width: "100%",
    marginTop: 20,
    borderRadius: 20,
    marginBottom: 20
  },
  button3:
  {
    width: "100%",
    marginTop: 20,
    borderRadius: 20,
    marginBottom: 15
  },
  b1:
  {
    fontSize: 18,
    color: "white"
  }

});

export default Login;
