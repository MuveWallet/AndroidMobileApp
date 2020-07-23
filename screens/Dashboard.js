import React from "react";
import {

  StyleSheet,
  View,
  Platform,
  ScrollView,

} from "react-native";

import Home from "./Dashboard/Home"
import RemoteCash from "./Dashboard/RemoteCash"
import Settings from "./Dashboard/Settings"
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Wallet from "./Dashboard/Wallet";


function Dashboard({ navigation }) {
  
  const Tab = createBottomTabNavigator();
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

   let screen_options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      switch(route.name){
        case "Home":
          iconName = focused ? 'ios-home': 'ios-home';
          break;

          case "Wallet":
            iconName = focused ? 'ios-wallet' : 'ios-wallet';
          break;

            case "Remote Cash":
              iconName = focused ? 'ios-compass' : 'ios-compass';
        break;

          case "Settings":
            iconName = focused ? 'ios-settings' : 'ios-settings';
        break;

      }
     

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={30} color={color} />;
    },
  })


  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screen_options} tabBarOptions={{
      activeTintColor: 'rgba(14, 227, 148, 0.98)',
      inactiveTintColor: 'gray',
      labelStyle:{
          fontSize:11,
          fontFamily:"Product-Sans-Regular"
      }
    }}
    
    >
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Remote Cash" component={RemoteCash}  />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  
  );
}

var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  headerFont: {
    fontSize: 30,
    fontFamily: "Product-Sans-Bold",
    color: "black",
    marginBottom: 25,
    // fontWeight: "bold",
    fontStyle: "normal",
    marginTop: 26,
  },
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0, //HACK
  },
  logo: {
    width: 80,
    height: 18,
    marginTop: 26,
    marginBottom: 51,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    color: "#BDBDBD",
    fontFamily: "Product-Sans-Regular",
  },
  buttonSignUp: {
    height: 55,
    width: 310,
    marginBottom: 24,
    backgroundColor: "rgba(14, 227, 148, 0.98)",
    paddingTop: 20,
    borderRadius: 10,
  },
  buttonLogIn: {
    height: 55,
    width: 310,
    backgroundColor: "#DBF9ED",
    paddingTop: 20,
    borderRadius: 10,
  },
  flex_1: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    paddingLeft: 20,
    marginBottom: 20,
  },
  flex_2: {
    flex: 5,
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:20

  },
  flex_input: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  input1: {
    backgroundColor: "yellow",
    flex: 6,
    height: 45,
    backgroundColor: "#F9F9F9",
    borderStyle: "solid",
    borderColor: "#ECEBFF",
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
  },
  space: {
    flex: 1,
  },
  input2: {
    backgroundColor: "blue",
    flex: 6,
    height: 45,
    backgroundColor: "#F9F9F9",
    borderStyle: "solid",
    borderColor: "#ECEBFF",
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
  },
  input_email: {
    height: 45,
    backgroundColor: "#F9F9F9",
    borderStyle: "solid",
    borderColor: "#ECEBFF",
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
  },
  flex_3: {
    flex: 2,
    width: "100%",
    height: 50,
    paddingLeft: 23,
    paddingRight: 23,
  },
});
export default Dashboard;
