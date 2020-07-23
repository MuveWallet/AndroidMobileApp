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
import SmoothPinCodeInput from "react-native-smooth-pincode-input";


function UsePin({ navigation }) {
  const [created, setCreated] = React.useState(false);
  const [code, setCode] = React.useState("");
  const pinInput = React.createRef();
  const [isOn, setIsOn] = React.useState(false);

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex_1}>
        <Text style={styles.headerFont}>Security Pin</Text>
      </View>

      <View style={styles.flex_2}>
        <Text
          style={{
            textAlign: "center",
            color: "#4D4D4D",
            fontFamily: "Product-Sans-Regular",
            fontSize: 19,
          }}
        >
          Enter your 4 digit security pin
        </Text>
        <View style={{ marginLeft: "17%", marginTop: 20, marginBottom: 20 }}>
          <SmoothPinCodeInput
            password
            mask="﹡"
            ref={pinInput}
            value={code}
            placeholder={<Text>-</Text>}
            onTextChange={(code) => setCode(code)}
            cellStyle={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#ECEBFF",
              backgroundColor: "#F9F9F9",
            }}
            cellStyleFocused={{
              borderColor: "lightseagreen",
              backgroundColor: "lightcyan",
            }}
            textStyle={{
              fontSize: 24,
              color: "black",
            }}
            textStyleFocused={{
              color: "rgba(14, 227, 148, 0.98)",
            }}
          />
        </View>

        <View style={{ marginTop: 20, marginBottom: 20, flex:4 }}>
          <Text
            style={{
              color: "rgba(14, 227, 148, 0.98)",
              textAlign:"center",
              fontSize: 15,
              fontFamily: "Product-Sans-Regular",
            }}
            onPress={() => navigation.push("Security Pin Recovery")}
          >
            Forgotten your Security Pin?
          </Text>
          </View>

      </View>

      <View style={styles.flex_3}>
        <TouchableOpacity
          onPress={() => {
            // setCreated(true);
            navigation.push("Dashboard")
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
            Resume Transaction
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

    backgroundColor: "rgba(14, 227, 148, 0.98)",
    paddingTop: 20,
    borderRadius: 10,
    marginTop: 30,
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
    paddingTop: 20,
    // backgroundColor:"yellow"
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
export default UsePin;
