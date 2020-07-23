import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from "react-native";


function GetStarted({ navigation }) {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex_1}>
        <Image
          source={require("../assets/small-inverted-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerFont}>Welcome to Muve</Text>
        <Text style={styles.subtitle}>
          Can't stand hectic queues due to {"\n"}an appointement?{"\n"}
          Muve wallet got you covered!
        </Text>
      </View>

      {/* <View style={styles.flex_2}> */}

      <ImageBackground
        source={require("../assets/img/welcome_screen_pattern.png")}
        w
        style={styles.flex_2}
      >
        <View style={styles.flex_3}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Sign Up")
            }}
            style={styles.button}
          >
            <Text style={{color:"white",textAlign:"center", fontFamily: "Product-Sans-Regular"}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* </View> */}
    </SafeAreaView>
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
    color: "#4D4D4D",
    marginBottom: 25,
    fontStyle: "normal",
    // fontFamily:"Product Sans Regular"
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
  button: {
    height: 55,
    width: 310,
    top:350,
    backgroundColor: "rgba(14, 227, 148, 0.98)",
    paddingTop: 20,
    borderRadius:10,
    
  },
  flex_1: {
    flex: 2,
    width: "100%",
    paddingTop: 20,
    paddingLeft: 20,
  },
  flex_2: {
    flex: 4,
    width: "100%",

  },
  flex_3: {
    flex: 2,
    width: "100%",
    paddingLeft:23,
    paddingRight:23
  },
});
export default GetStarted;
