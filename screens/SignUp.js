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


function SignUp({ navigation }) {
    let [success, setSuccess] = React.useState(false);
    if (success == true){

        return ( <ActionScreen navigation={navigation} page_name="Sign Up" title="Registration Successful" subtitle="Proceed to create your security pin" button_text="Continue" next_screen="Setup Pin" />)
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex_1}>
        <Text style={styles.headerFont}>Sign up</Text>
      </View>

      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          display: "flex",
          marginBottom: 8,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{ flex: 3, fontFamily: "Product-Sans-Bold", fontSize: 15 }}
        >
          Last Name
        </Text>
        <Text style={{ flex: 1 }} />
        <Text
          style={{ flex: 3, fontFamily: "Product-Sans-Bold", fontSize: 15 }}
        >
          Other Name
        </Text>
      </View>

      <View style={styles.flex_2}>
        <View style={styles.flex_input}>
          <TextInput style={styles.input1} placeholder="John" />
          <View style={styles.space} />
          <TextInput style={styles.input2} placeholder="James" />
        </View>

        <View style={{marginBottom:30}}>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            Email
          </Text>
          <TextInput
            style={styles.input_email}
            placeholder="John24@gmail.com"
          />
        </View>

        <View style={{marginBottom:30}}>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            Password
          </Text>
          <TextInput
            style={styles.input_email}
            placeholder="********"
            secureTextEntry={true}
          />
        </View>

        <View style={{marginBottom:30}}>
          <Text
            style={{
              fontFamily: "Product-Sans-Bold",
              fontSize: 15,
              marginBottom: 8,
            }}
          >
            Confirm Password
          </Text>
          <TextInput
            style={styles.input_email}
            secureTextEntry={true}
            placeholder="********"
          />
        </View>

      </View>

      <View style={styles.flex_3}>
        <TouchableOpacity
          onPress={() => {
            setSuccess(true);
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
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.push("Log In")
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
            Log In
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
    paddingTop: 20,
    paddingLeft: 20,
    marginBottom:30

  },
  flex_2: {
    flex: 5,
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    
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
    paddingLeft:20

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
    paddingLeft:20

  },
  input_email: {
    height: 45,
    backgroundColor: "#F9F9F9",
    borderStyle: "solid",
    borderColor: "#ECEBFF",
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft:20
  },
  flex_3: {
    flex: 2,
    width: "100%",
    height: 50,
    paddingLeft: 23,
    paddingRight: 23,
  },
});
export default SignUp;
