import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";


export default function ShopDetailsHeader({
  shopName,
  hawkerName,
  hawkerAddress,
}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.treksplorer.com/wp-content/uploads/best-hawker-centres-singapore.jpg",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{shopName}</Text>
        <Text style={styles.caption}>{hawkerName}</Text>
        <View style={styles.addressContainer}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
          <Text style={styles.caption}>{hawkerAddress}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "#304057"
  },
  image: {
    contentFit: "cover",
    width: "100%",
    paddingTop: "calc(212 / 375 * 100%)",
  },
  textContainer: {
    backgroundColor: "#E2814E",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: "120%",
    color: "#FEFDFB",
  },
  caption: {
    padding: 2,
    fontSize: 13,
    color: "#FEFDFB",
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    size: 13,
    color: "#FEFDFB",
  },
});
