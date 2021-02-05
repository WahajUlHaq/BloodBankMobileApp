import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Donor_Register from '../screens/DonorRegister';
import Recipient_Register from '../screens/RecipientRegister';
import HomeScreen from '../screens/Home';
import Search_Page from '../screens/Search';
import DonorHome from '../screens/DonorHome';
import User_Requests from '../screens/Requests';
import DonorApprove from '../screens/Approve';
import Info from '../screens/Info';
import DonorInfo from '../screens/donorInfo';
import RedirecterHomeDonor from '../screens/Redirecter';

const Stack = createStackNavigator();

function Navigation(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen hideNavBar={true} name="Login" component={Login} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'black',
            height : 0
          },
          headerTintColor: '#3250ce',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
         />

<Stack.Screen hideNavBar={true} name="Donor_Register" component={Donor_Register} 
        options={{
          title: 'Mobie Blood Bank',
          headerStyle: {
            backgroundColor: '#3250ce',
            elevation: 0,
            height : 50
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
          },

        }}
         />
    
    <Stack.Screen hideNavBar={true} name="Recipient_Register" component={Recipient_Register} 
         options={{
          title: 'Mobie Blood Bank',
          headerStyle: {
            backgroundColor: '#3250ce',
            elevation: 0,
            height : 50
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
          },

      }}
         />

          
    <Stack.Screen hideNavBar={true} name="HomeScreen" component={HomeScreen} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#3250ce',
            height : 0
          },
          headerTintColor: '#3250ce',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
         />

 <Stack.Screen hideNavBar={true} name="Search_Page" component={Search_Page} 
         options={{
          title: 'Mobie Blood Bank',
          headerStyle: {
            backgroundColor: '#3250ce',
            elevation: 0,
            height : 50
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
          },

      }}
/>

<Stack.Screen hideNavBar={true} name="DonorHome" component={DonorHome} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#3250ce',
            height : 0
          },
          headerTintColor: '#3250ce',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
         />

<Stack.Screen hideNavBar={true} name="User_Requests" component={User_Requests} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#3250ce',
            height : 0
          },
          headerTintColor: '#3250ce',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
         />
<Stack.Screen hideNavBar={true} name="DonorApprove" component={DonorApprove} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#3250ce',
            height : 0
          },
          headerTintColor: '#3250ce',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
         />

<Stack.Screen hideNavBar={true} name="Info" component={Info} 
        options={{
          title: 'Donor Details',
          headerStyle: {
            backgroundColor: '#3250ce',
            height : 50
          },
          headerTintColor: 'white',
          headerTitleStyle: {
          
          },

        }}
         />


<Stack.Screen hideNavBar={true} name="DonorInfo" component={DonorInfo} 
        options={{
          title: 'Recipient Details',
          headerStyle: {
            backgroundColor: '#3250ce',
            height : 50
          },
          headerTintColor: 'white',
          headerTitleStyle: {
          
          },

        }}
         />

<Stack.Screen hideNavBar={true} name="RedirecterHomeDonor" component={RedirecterHomeDonor} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#3250ce',
            height : 0
          },
          headerTintColor: 'white',
          headerTitleStyle: {
          
          },

        }}
         />

     </Stack.Navigator>

    </NavigationContainer>
  );
}

export default Navigation;



