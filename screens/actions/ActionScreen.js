import React from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  Image,
} from "react-native";


function ActionScreen({ navigation, page_name,title, subtitle, button_text, next_screen } ) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex_1}>
        <Text style={styles.headerFont}>{page_name}</Text>
      </View>
      <View style={styles.flex_2}>
    <Image source={require("../../assets/img/success.png")} style={styles.logo}/>
    <Text style={{textAlign:"center", color: "#4D4D4D", fontSize:18, fontFamily:"Product-Sans-Bold"}}>{title}</Text>
  <Text style={{textAlign:"center", color: "#828282", fontSize:13, fontFamily:"Product-Sans-Regular"}}>{subtitle}</Text>

     </View>

     <View style={styles.flex_3}>
    
     <TouchableOpacity
            onPress={() => {
              navigation.push(next_screen)
            }}
            style={styles.button}
          >
            <Text style={{color:"white",textAlign:"center", fontFamily: "Product-Sans-Regular"}}>{button_text}</Text>
          </TouchableOpacity>
     </View>

    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
    button: {
        height: 55,
        width: 310,
        top:40,
        backgroundColor: "rgba(14, 227, 148, 0.98)",
        paddingTop: 20,
        borderRadius:10,
        
      },
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
    width: 200,
    height: 200,
    marginLeft:"20%",
    marginBottom:20,
    marginTop:20

    
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
  },
  flex_2: {
    flex: 5,
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:"center"
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
export default ActionScreen;
