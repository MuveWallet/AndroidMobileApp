import React from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from "react-native";

import ActionScreen from "./actions/ActionScreen";


function SecurityPinRecovery({ navigation }) {
  const [isSent, setIsSent] = React.useState(false);
    if (isSent == true){
      return ( <ActionScreen navigation={navigation} page_name="Recover Security Pin" title="Mail Sent Successfully" subtitle="Please, visit your mailbox to follow the security pin recovery steps" button_text="Ok" next_screen="Log In" />)

    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex_1}>
        <Text style={styles.headerFont}>Recover Password</Text>
      </View>

      <View style={styles.flex_2}>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            Enter recovery mail
          </Text>
          <TextInput
            style={styles.input_email}
            placeholder="John24@gmail.com"
          />
        </View>
      </View>

      <View style={styles.flex_3}>
        <TouchableOpacity
          onPress={() => {
            setIsSent(true);
          }}
          style={styles.buttonSignUp}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Product-Sans-Regular",
            }}
          >
            Send Recovery Email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.push("Log In");
          }}
          style={styles.buttonLogIn}
        >
          <Text
            style={{
              color: "rgba(14, 227, 148, 0.98)",
              textAlign: "center",
              fontFamily: "Product-Sans-Regular",
            }}
          >
            Enter Security Pin
          </Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 30,
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
export default SecurityPinRecovery;
