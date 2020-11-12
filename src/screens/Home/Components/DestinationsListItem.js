import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, ImageBackground, View } from "react-native";
import config from "../../../config"
import { LinearGradient } from 'expo-linear-gradient';
import Rating from "../../Components/Rating"


const DestinationsListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <ImageBackground
        source={{uri: `${config.baseUrl}/${item.photo}`}}
        imageStyle={styles.imageStyle}
        style={styles.image}
        >
        <LinearGradient
          colors={['#00000000', '#000']}
          style={styles.card}
          >
            <View style={styles.priceTag}>
              <Text style={styles.priceTxt}>{`$${item.price}/night`}</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.titleTxt}>{`${item.title}`}</Text>
              <Text style={styles.locationTxt}>{`${item.location}`}</Text>
              <Rating rating={item.rating} />
              <Text style={styles.reviewsTxt}>{`${item.reviews} Reviews`}</Text>
            </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    marginRight:20,
    height:300,
  },
  image: {
    width:220,
    height:300,

  },
  imageStyle:{
    borderRadius: 20,
  },
  card: { 
    justifyContent: "space-around",
    borderRadius: 20, 
    flex: 1 
  },
  priceTag:{
    backgroundColor: config.colors.accent,
    padding:15,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    width:"50%",
    shadowColor: "#D21169",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 3,
    shadowRadius: 0,

    elevation: 8,
  },
  priceTxt: {
    color:"white",
    fontFamily: "Rubik_500Medium",
    textAlign:"center"
  },
  descriptionView: {
    justifyContent:"center",
    alignItems:"center",

  },
  titleTxt: {
    color:"white",
    fontFamily: "Rubik_500Medium",
    textAlign:"center",
    fontSize: 16,
    paddingHorizontal:10,
    marginBottom:5
  },
  locationTxt: {
    color:"gray",
    fontFamily: "Rubik_400Regular",
    textAlign:"center",
    fontSize:12,
    paddingHorizontal: 10
  },
  reviewsTxt: {
    color:"gray",
    fontFamily: "Rubik_400Regular",
    textAlign:"center",
    fontSize: 15,
    fontWeight: "bold"
  }
});
export default DestinationsListItem