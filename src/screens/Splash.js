import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import config from "../config"
import { useFonts, Rubik_700Bold, Rubik_400Regular, Rubik_500Medium } from '@expo-google-fonts/rubik';
import { AppLoading } from 'expo';



export default function Splash({ navigation }) {
  let [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_400Regular,
    Rubik_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
        style={styles.Image}
        source={require("../../assets/SplashImg.png")} />
      <Text style={styles.title}>Find yourself  outside.</Text>
      <Text style={styles.body}>
        Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.
      </Text>
      <TouchableOpacity
          style={styles.exploreBtn}
          onPress={()=> navigation.navigate('Home')}
        >
          <Text style={styles.exploreBtnTxt}>Explore Now!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width:274,
    height:274
  },
  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"white",
    width:"70%",
    textAlign:"center",
    fontFamily:"Rubik_700Bold",
    marginBottom:10,
    lineHeight:49
  },
  body: {
    width:"70%",
    color:"white",
    fontSize:14,
    fontFamily:"Rubik_400Regular",
    lineHeight:24
  },
  exploreBtn:{
    width:"70%",
    backgroundColor:config.colors.accent,
    height:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    marginTop:100
  },
  exploreBtnTxt: {
    color:"white",
    fontFamily:"Rubik_400Regular",
  }
});
