import React from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  Image,
  ScrollView,
 
} from "react-native";
import {
  TouchableHighlight, TouchableNativeFeedback,
} from "react-native-gesture-handler";
import TransCard from "../components/TransCard";


function Wallet({ navigation }) {
  const [hide, toggleHide] = React.useState(false);

  const [figure, setFigure] = React.useState("");
  let amtRef = React.createRef();
  let amount = "10,000";

  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
        <View
          style={{
            height: 90,
            paddingTop: 30,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              flex: 5,
              fontSize: 25,
              color: "#000000",
              marginTop: 10,
              fontFamily: "Product-Sans-Bold",
            }}
          >
            Wallet
          </Text>
        
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            height: 250,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "white",
            paddingLeft: 22,
            paddingRight: 22,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#4D4D4D",
              paddingLeft: 20,
              paddingTop: 15,
              height: 45,
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <Text
              style={{ color: "white", fontFamily: "Product-Sans-Regular" }}
            >
              Current Wallet Balance
            </Text>

            <Image
              source={require("../../assets/img/feather_pocket1.png")}
              style={{
                height: 25,
                width: 30,
                position: "absolute",
                top: 10,
                right: 20,
              }}
            />
          </View>

          <Text
            style={{
              color: "#4D4D4D",
              fontFamily: "Product-Sans-Bold",
              textAlign: "center",
              fontSize: 40,
              marginTop: 20,
            }}
          >
            &#8358; {hide == true ? ` **,***` : amount}
          </Text>

          <TouchableOpacity onPress={() => toggleHide(!hide)}>
            {hide == true ? (
              <Image
                source={require("../../assets/img/showamt.png")}
                style={{ width: 80, height: 100 }}
              />
            ) : (
              <Image
                source={require("../../assets/img/hideamt.png")}
                style={{ width: 80, height: 100 }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopColor: "silver",
            borderTopWidth: 1,
            height: 100,
            marginBottom: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", paddingLeft: 20 }}>
            <Image
              source={require("../../assets/img/arrowgreen.png")}
              style={{ width: 30, height: 30 }}
            />

            <Text
              style={{
                fontFamily: "Product-Sans-Regular",
                marginLeft: 10,
                color: "#BDBDBD",
              }}
            >
              Income{"\n"}
              <Text style={{ fontSize: 20, fontWeight: "200", color: "black" }}>
              &#8358; 200.5k
              </Text>
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("../../assets/img/arrowred.png")}
              style={{ width: 30, height: 30 }}
            />

            <Text
              style={{
                fontFamily: "Product-Sans-Regular",
                marginLeft: 10,
                color: "#BDBDBD",
              }}
            >
              Expenses{"\n"}
              <Text style={{ fontSize: 20, fontWeight: "200", color: "black" }}>
              &#8358; 1,000
              </Text>
            </Text>
          </View>
        </View>

        <TouchableNativeFeedback style={{
            height: 100,
            borderRadius: 10,
            backgroundColor: "white",
            // marginBottom: 20,
            paddingLeft: 20,
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            alignContent:"space-between",
            paddingRight:20

          }} onPress={()=>alert("Click again")}>
      
          <Image source={require("../../assets/img/featherdownload.png")} width={20} height={20} style={{width:30, height:30, marginRight:10}}/>
         
          <View style={{marginRight:20}}>
          <Text style={{fontFamily:"Product-Sans-Bold"}}>Wallet Top-Up</Text>
          <Text style={{fontFamily:"Product-Sans-Regular"}}> Transfer money from bank to wallet</Text>
          </View>
          
          {/* <Image source={require("../../assets/img/right_arrow.png")} width={10} height={10} style={{width:10, height:20}}/> */}

          <Text style={{fontFamily:"Product-Sans-Regular", color:"gray", fontSize:40}}> &rarr; </Text>
        </TouchableNativeFeedback>


        <View style={{ height: 250, marginTop:20, flexDirection:"row", justifyContent:"space-between",  marginTop: 30, }}>
          <Text
            style={{
              color: "black",
              fontFamily: "Product-Sans-Bold",
              fontSize: 25,
            }}
          >
            Cards
          </Text>
          
          <Text
            style={{
              color: "rgba(14, 227, 148, 0.98);",
              fontFamily: "Product-Sans-Bold",
              fontSize: 20,
                                        
            }}
          >
            New card +
          </Text>
        </View>

        <View style={{ marginTop: 40, height: "auto", width:"100%" }}>
          <Text style={{fontFamily:"Product-Sans-Regular",  color:"white", backgroundColor:"#4D4D4D", marginLeft:"24%",marginRight:"24%",marginBottom:20,textAlign:"center", paddingHorizontal:1,width:"50%", height:45, lineHeight:50, borderRadius:50}}>Recent Transactions</Text>

          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Pending" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Cancelled" time="2-10-2020 at 12:25pm" amount="250,000"/>

        
        </View>



</View>

  

      </ScrollView>
    </SafeAreaView>
  );
}










var styles = StyleSheet.create({
  primaryFont:{
    fontFamily:"Product-Sans-Bold"
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
    backgroundColor: "#E5E5E5",
    paddingTop: Platform.OS === "android" ? 25 : 0, //HACK
    paddingLeft: 22,
    paddingRight: 22,
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
    paddingTop: 20,
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


export default Wallet;
