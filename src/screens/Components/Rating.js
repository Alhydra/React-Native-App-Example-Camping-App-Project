import React from 'react';
import {View, Image, StyleSheet } from 'react-native';

const Rating = ({rating}) => {
  const starFilled = 'https://reactnativemaster.com/wp-content/uploads/2020/09/starFiller.png';
  const starEMpty = 'https://reactnativemaster.com/wp-content/uploads/2020/09/starEmpty.png';
  const starHalfEmpty = 'https://reactnativemaster.com/wp-content/uploads/2020/09/starHalfEmpty.png';

  let ratingStars = []
  

  // add filled stars
  for (let i = 0; i < parseInt(rating); i++) {
    ratingStars.push(
      <Image
        style={styles.starImage}
        source={{ uri: starFilled }}
        key= {new Date().getTime() + Math.random()+""}
    />)
  }
  // add half empty star
  if ( rating % 1 != 0) {
    ratingStars.push(
      <Image
        style={styles.starImage}
        source={{ uri: starHalfEmpty }}
        key= {new Date().getTime() + Math.random()+""}

    />)
  }
  // add empty stars
  for (let i = 0; i < parseInt(5 - rating); i++) {
    ratingStars.push(
      <Image
        style={styles.starImage}
        source={{ uri: starEMpty }}
        key= {new Date().getTime() + Math.random()+""}

    />)
    
  }

  return (
    <View
      style={styles.container}>
        {
          ratingStars
        }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    marginVertical: 15,
  },
  starImage: {
    width: 15,
    height: 15
  }
})
export default Rating;