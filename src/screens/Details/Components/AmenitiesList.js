import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import DiscoverListItem from "./AmenitiesListItem"
import axios from "axios"
import config from "../../../config"


const AmenitiesList = ({ amenities }) => {


  const renderItem = ( { item }) =>  {
    return [
      <DiscoverListItem 
        key={item}
        item={item}
      />
    ]
  }

  return (
    <FlatList
        numColumns={3}
        data={amenities}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
  )
}



export default AmenitiesList