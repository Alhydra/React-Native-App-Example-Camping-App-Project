import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import config from "../../../config"
const AmenitiesList = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image 
        resizeMode="contain"
        source={{uri: `${config.baseUrl}/images/amenities/${item}.png`}}
        style={styles.image}
        />
      <Text style={styles.label}>{item}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    width:91,
    height: 80,
    backgroundColor: "#F5F2FA",
    borderRadius: 20,
    justifyContent:"center",
    alignItems:"center",
    marginRight:10,
    marginBottom:10
  },
  image: {
    width:30,
    height:22
  },
  label: {
    color: "#8F87A5",
    fontFamily: "Rubik_400Regular",
    textAlign:"center",
    fontSize:14,
    paddingTop: 10
  }
});
export default AmenitiesList