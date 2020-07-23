import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

function Status({ message }) {
  let lowerCaseMessage = message.toLowerCase();
  switch (lowerCaseMessage) {
    case "pending":
      return (
        <Image
          source={require("../../assets/img/pendingcircle.png")}
          style={styles.icon}
        />
      );

    case "completed":
      return (
        <Image
          source={require("../../assets/img/completedcircle.png")}
          style={styles.icon}
        />
      );

    case "cancelled":
      return (
        <Image
          source={require("../../assets/img/cancelledcircle.png")}
          style={styles.icon}
        />
      );
  }
}

function TransCardGray({
  color="white",
  trans_type,
  status,
  trans_id,
  time,
  amount,
}) {
  return (
    <View style={ styles.cardGray }>
      <View style={styles.icons}>
        <Image
          source={require("../../assets/img/featherbox.png")}
          style={styles.icon}
        />
        <Text>{""}</Text>
        <Status message={status} />
      </View>

      <View style={styles.left}>
        <View>
          <Text style={{ marginBottom: 10, color:"white", fontFamily: "Product-Sans-Bold" }}>
            {trans_type}{"\n"}
            {trans_id}

          </Text>
          <Text style={{ color: "white" }}> </Text>
        </View>
        <View>
          <Text
            style={{ fontFamily: "Product-Sans-Regular", color: "white" }}
          >
            {status}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text
          style={{
            fontFamily: "Product-Sans-Bold",
            fontSize: 25,
            marginBottom: 15,
            color:"white"
          }}
        >
          &#8358; {amount}
        </Text>
        <Text style={{ fontFamily: "Product-Sans-Regular", color: "white" }}>
          {time}
        </Text>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  primaryBoldFont: {
    fontFamily: "Product-Sans-Bold",
  },
  primaryRegularFont: {
    fontFamily: "Product-Sans-Regular",
  },
  cardWhite: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "rgba(228, 231, 255, 0.76)",
    elevation: 3,
    backgroundColor:"white"
    
    // boxShadow: "4px 4px 20px rgba(228, 231, 255, 0.76)"
  },
  cardGray: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "rgba(228, 231, 255, 0.76)",
    elevation: 3,
    backgroundColor:"#4D4D4D"
    
    // boxShadow: "4px 4px 20px rgba(228, 231, 255, 0.76)"
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // backgroundColor:"yellow"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    flex: 3,
    // backgroundColor:"red"
  },
  right: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
  },
  icon: {
    height: 25,
    width: 25,
    // marginBottom:10
  },
});

export default TransCardGray;
