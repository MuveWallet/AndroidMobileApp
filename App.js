// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, AsyncStorage, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "./screens/GetStarted";
import * as Font from 'expo-font';
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import PasswordRecovery from "./screens/PasswordRecovery";
import SetupPin from "./screens/SetupPin";
import UsePin from "./screens/UsePin";
import SecurityPinRecovery from "./screens/SecurityPinRecovery";
import Dashboard from "./screens/Dashboard";
// import {TabNavigation} from "react-navigation"

const launchNav = createStackNavigator();
let customFonts = {
  "Product-Sans-Regular": require("./assets/font/ProductSansRegular.ttf"),
  "Product-Sans-Bold": require("./assets/font/ProductSansBold.ttf"),
};

 //load Fonts




function getOrSetAsync() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("muve_app_first_launch").then((result) => {
      if (result == "true") {
        // console.log(result, "GOTTEN FROM MAIN");

        resolve("true");
      } else {
        resolve("false")
        // AsyncStorage.setItem("muve_app_first_launch", "true").then((_) =>
        //   resolve("false")
        // );
      }
    });
  });
}

export default function App() {



  // let [isLoading, setLoader] = React.useState(true);
  let [isNew, setNewLaunch] = React.useState("true");
  let [fontLoaded, setFontLoaded] = React.useState(false)
 
  getOrSetAsync()
    .then((resolve) => {
      if (resolve == "true") {
        alert("I GOT TRUE")
        setNewLaunch(resolve);
      } else {
        setNewLaunch("false")
        // AsyncStorage.setItem("muve_app_first_launch", "true");
      }
    })
    .catch((err) => err);
    Font.loadAsync(customFonts).then(_=> setFontLoaded(true))

  if (isNew == "false" && fontLoaded== true) {
    return (
      <NavigationContainer>
        <launchNav.Navigator initialRouteName="Get Started" headerMode={true}>
          <launchNav.Screen name="Get Started" component={GetStarted}  />
          <launchNav.Screen name="Sign Up" component={SignUp}  />
          <launchNav.Screen name="Log In" component={LogIn}  />
          <launchNav.Screen name="Password Recovery" component={PasswordRecovery}  />
          <launchNav.Screen name="Security Pin Recovery" component={SecurityPinRecovery}  />

          <launchNav.Screen name="Setup Pin" component={SetupPin}  />
          <launchNav.Screen name="Use Pin" component={UsePin}  />
          <launchNav.Screen name="Dashboard" component={Dashboard}  />

          {/* <launchNav.Screen name="Use Pin" component={UsePin}  /> */}



        </launchNav.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 40 }}
          source={require("./assets/muve-logo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(14, 227, 148, 0.98)",
    alignItems: "center",
    justifyContent: "center",
  },
});
