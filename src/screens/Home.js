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

function HomeScreen(props) {

  const { UserName } = props.route.params;
  const { Intrest } = props.route.params;
  const { rhFactor } = props.route.params;
  const { BloodGroup } = props.route.params;
  const { Option } = props.route.params;

  Option
  const [status, setStatus] = useState(null)
  const [name, setName] = useState(null)
  const [email, setEmai] = useState(null)
  const [users, setUsers] = useState([])
  const [donors, setDonors] = useState([])
  const [hiden, setHide] = useState(null)

  const [requestUser, setUsersrequest] = useState([])
  const [request, setRequest] = useState([])
  const [requestHide, setRequestHide] = useState(null)

  const [selectedDonor, setselectedDonor] = useState(null)

  useEffect(() => {

    if (Option === "Search") {
      database().ref("/").child("Donors/" + BloodGroup + "/" + rhFactor).on("child_added", (data) => {
        users.push(data.val());
        setDonors(users);

        if (donors === null) {
          setHide("true")
        }
        else {
          setHide("false")
        }
      })
    }

    else if (Option === "Profile") {

      if (BloodGroup === 'O' && rhFactor === '-') // for O - 
      {

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
      }

      else if (BloodGroup === 'A' && rhFactor === '-') // for A - 
      {

        database().ref("/").child("Donors/A/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

      }
      else if (BloodGroup === 'B' && rhFactor === '-') // for B - 
      {

        database().ref("/").child("Donors/B/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

      }
      else if (BloodGroup === 'AB' && rhFactor === '-') // for AB - 
      {

        database().ref("/").child("Donors/AB/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
        database().ref("/").child("Donors/B/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
        database().ref("/").child("Donors/A/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
      }



      if (BloodGroup === 'O' && rhFactor === '+') // for O + 
      {

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
      }

      else if (BloodGroup === 'A' && rhFactor === '+') // for A + 
      {

        database().ref("/").child("Donors/A/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })


        database().ref("/").child("Donors/A/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

      }
      else if (BloodGroup === 'B' && rhFactor === '+') // for B + 
      {

        database().ref("/").child("Donors/B/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })


        database().ref("/").child("Donors/B/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
      }
      else if (BloodGroup === 'AB' && rhFactor === '+') // for AB + 
      {

        database().ref("/").child("Donors/AB/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
        database().ref("/").child("Donors/B/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
        database().ref("/").child("Donors/A/-/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })



        database().ref("/").child("Donors/AB/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

        database().ref("/").child("Donors/O/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
        database().ref("/").child("Donors/B/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })
        database().ref("/").child("Donors/A/+/").on("child_added", (data) => {
          users.push(data.val());
          setDonors(users);

          if (donors === null) {
            setHide("true")
          }
          else {
            setHide("false")
          }
        })

      }

    }

  }, []);

  const infoBtn = (e) => {
    props.navigation.navigate("Info", { UserName: UserName, Intrest: Intrest, BloodGroup: BloodGroup, rhFactor: rhFactor, donorName: e })
  }


  return (
    <>
      <View style={styles.container}>

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
          <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 30, fontWeight: 'normal', color: '#3250ce', height: hiden === "false" ? 30 : 0 }}> Find Your Donor Below</Text>

          <View style={{ marginTop: hiden === "false" ? "0%" : "50%", textAlign: 'center', width: "90%", height: hiden === "false" ? 0 : "100%" }}>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', height: hiden === "false" ? 0 : "100%" }}>
              Sorry, but for now we donot have any donor available of your choice.
</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>


            <FlatList
              data={donors}
              key={donors.key}
              renderItem={(data) => {
                return (

                  <View style={styles.myMainDispayCont}>

                    <Text style={styles.font1}>{data.item.donorName}{"\n"}
                      <Text style={{ paddingTop: 15, color: '#3250ce' }}>
                        Blood Group: {data.item.donorbloodGroup} {data.item.donorRHfactor}
                      </Text>
                    </Text>


                    <Button style={{ height: request.find(e => e === data.item.donorName) ? "0%" : "65%", backgroundColor: '#3250ce', marginLeft: 'auto', marginRight: 30, marginTop: 10 }}
                      disabled
                      block success
                    >

                    </Button>

                    <TouchableOpacity

                      // style={{ backgroundColor: '#3250ce', color: 'white', marginLeft: 'auto',  , marginRight: 30, marginTop: 10 }}
                      style={styles.button1}
                      onPress={() => infoBtn(data.item.donorName)}
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
  button1:
  {
    backgroundColor: '#3250ce',
    marginLeft: 'auto',
    marginRight: 30,
    marginTop: 10,
    borderRadius: 10,
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
    width: "100%",
    backgroundColor: 'white',
    marginBottom: 10,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 2,

  },
  font1:
  {
    paddingTop: 10,
    color: 'black',
    fontSize: 20,

  }
});

export default HomeScreen;
