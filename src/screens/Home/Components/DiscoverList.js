import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import DiscoverListItem from "./DiscoverListItem"
import axios from "axios"
import config from "../../../config"


const DisoverList = () => {
  const [discoverItems, setDiscoverItems] = useState([])

  useEffect(() => {
    fetchData = async() => {
      const destinationListUrl = `${config.baseUrl}/discover`
      let list = []
      try {
        list = await axios.get(destinationListUrl)
      } catch (error) {
        console.log("error", error.message, destinationListUrl)
      }
      setDiscoverItems(list.data)
    }
    fetchData()
    
  },[]);

  const renderItem = ( { item }) =>  {
    return [
      <DiscoverListItem 
        key={item.id+ ''}
        item={item}
        onPress={() => console.log(item.title)}
      />
    ]
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={discoverItems}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height:150,
    marginLeft:20,
  },
});

export default DisoverList