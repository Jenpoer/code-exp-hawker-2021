import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTag, faStar } from "@fortawesome/free-solid-svg-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function ShopListItem({
  shopName,
  itemTags,
  preferredNo,
  imgSrc,
}) {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${imgSrc}`,
        }}
      />
      <View style={styles.columns}>
        <View style={styles.left}>
          <Text style={styles.title}>{shopName}</Text>
          <View style={styles.addressContainer}>
            <FontAwesomeIcon style={styles.icon} icon={faTag}></FontAwesomeIcon>
            {itemTags.map((itemTag) => (
              <Text style={styles.address}>{itemTag},</Text>
            ))}
          </View>
        </View>
        <View style={styles.right}>
          <FontAwesomeIcon style={styles.icon} icon={faStar}></FontAwesomeIcon>
          <Text style={styles.preference}>
            {preferredNo} people has this on their wishlist!
          </Text>
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
    fontFamily: "Inter-Regular",
    padding: 2,
    color: "#FEFDFB",
  },
  title: {
    fontSize: 24,
    lineHeight: "120%",
    fontFamily: "Inter-SemiBold",
    color: "#FEB904",
  },
  preference: {
    padding: 2,
    fontFamily: "Inter-Regular",
    fontSize: 13,
    color: "#FEFDFB",
  },
  icon: {
    size: 13,
    color: "#FEFDFB",
  },
});
