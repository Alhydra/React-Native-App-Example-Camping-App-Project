import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import config from "../../../config"
const DisoverListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image 
        source={{uri: `${config.baseUrl}/${item.ic}`}}
        style={styles.image}
        />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    width:130,
    height: 105,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent:"center",
    alignItems:"center",
    marginRight:20
  },
  title: {

  },
  image: {
    width:42,
    height:42
  }
});
export default DisoverListItem