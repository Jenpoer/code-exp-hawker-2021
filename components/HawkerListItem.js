import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function HawkerListItem({ hawkerName, hawkerAddress, imgSrc }) {
  //   let [fontsLoaded] = useFonts({
  //     "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  //     "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
  //   });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.treksplorer.com/wp-content/uploads/best-hawker-centres-singapore.jpg",
        }}
      />
      <View style={styles.columns}>
        <View style={styles.left}>
          <Text style={styles.title}>{hawkerName}</Text>
          <View style={styles.addressContainer}>
            <FontAwesomeIcon
              style={styles.icon}
              icon={faMapMarkerAlt}
            ></FontAwesomeIcon>
            <Text style={styles.address}>{hawkerAddress}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 10,
  },
  image: {
    width: "100%",
    flex: 1,
    alignSelf: "center",
    paddingTop: "calc(160/325 * 100%)",
    borderRadius: 10,
  },
  columns: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  },
  left: {
    flex: 1,
    flexBasis: "50%",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexBasis: "50%",
    paddingTop: 5,
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
  },
  address: {
    fontSize: 13,
    // fontFamily: "Inter-Regular",
    padding: 2,
    color: "#FEFDFB",
  },
  title: {
    fontSize: 24,
    lineHeight: "120%",
    // fontFamily: "Inter-SemiBold",
    color: "#FEB904",
  },
  preference: {
    padding: 2,
    // fontFamily: "Inter-Regular",
    fontSize: 13,
    color: "#FEFDFB",
  },
  icon: {
    size: 13,
    color: "#FEFDFB",
  },
});
