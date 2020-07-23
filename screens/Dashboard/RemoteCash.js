import React from "react";
import {

  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  Image,
  ScrollView,
  Dimensions,

} from "react-native";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import { BarChart } from "react-native-chart-kit";
import TransCard from "../components/TransCard";
import TransCardGray from "../components/TransCardGray";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `black`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

function RemoteCash({ navigation }) {
  const [hide, toggleHide] = React.useState(false);

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
            Remote Cash
          </Text>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            
            <TouchableNativeFeedback onPress={()=> alert("sfdsdsd")}>
            <Image
              source={require("../../assets/img/bell.png")}
              style={{ height: 30, width: 30 }}
            />
            </TouchableNativeFeedback>

            

          </View>
        </View>

  
     

        <View
          style={{
            height: 150,
            borderRadius: 10,
            // backgroundColor: "#4D4D4D",
            marginBottom: 20,
            paddingTop: 20,
          }}
        >
          <Text style={{marginBottom:10, fontFamily:"Product-Sans-Regular", color:"gray"}}>Pending Cash Transaction</Text>
        <TransCardGray trans_type="Remote Cash" trans_id="Trans-0176478488" status="Pending" time="2-10-2020 at 12:25pm" amount="250,000"/>

        </View>

     
        <View style={{ marginTop: 10, height: "auto", width:"100%" }}>
          <Text style={{fontFamily:"Product-Sans-Regular",  color:"white", backgroundColor:"#4D4D4D", marginLeft:"24%",marginRight:"24%",marginBottom:20,textAlign:"center", paddingHorizontal:1,width:"50%", height:45, lineHeight:50, borderRadius:50}}>Recent Transactions</Text>

          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>
          <TransCard trans_type="Remote Cash" trans_id="Trans-0176478488" status="Completed" time="2-10-2020 at 12:25pm" amount="250,000"/>

        
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


export default RemoteCash;
