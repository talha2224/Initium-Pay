import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native-web'
import onboarding1 from '../assets/images/onboarding-1.png';
import onboarding2 from '../assets/images/onboarding-2.png';
import onboarding3 from '../assets/images/onboarding-3.png';
import onboarding4 from '../assets/images/onboarding-4.png';
import next from '../assets/images/Next.svg';
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';



const { height, width } = Dimensions.get('window');

const index = () => {

  const [images] = useState([onboarding1, onboarding2, onboarding3, onboarding4]);
  const [text] = useState([{line1: "Welcome To",line2: "Initium",gold: "Pay"},{line1: "Secure Transactions",line2: "",gold: "Guaranteed"},{line1: "Reliable Market Data,",line2: "",gold: "Every Second"},{line1: "Fast, Flexible and",line2: "",gold: "Fearless Trading"}])
  const [currentTurn, setCurrentTurn] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTurn((prevTurn) => (prevTurn === 3 ? 0 : prevTurn + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <Text style={style.skip}>Skip</Text>
      </TouchableOpacity>
      <Image source={images[currentTurn]} style={style.image} />
      <Text style={style.welcome}>{text[currentTurn].line1}</Text>
      <Text style={style.name}>{text[currentTurn].line2} <Text style={style.gold}>{text[currentTurn].gold}</Text></Text>

      <View style={style.flexBox}>

        <View style={style.lineContainer}>
          {
            images.map((i, index) => (
              <Text key={index} style={index == currentTurn ? style.active : style.disable}></Text>
            ))
          }
        </View>


        <Image source={next} style={style.image} />



      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    height: height,
    position: "relative",
    padding: 20
  },
  skip: {
    textAlign: "right",
    color: "#F5C249",
    fontSize: 20
  },
  image: {
    marginTop: 30
  },
  welcome: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "600",
    color: "white"
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    color: "white"
  },
  gold: {
    fontSize: 30,
    fontWeight: "600",
    color: "#F5C249"
  },
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 0,
  },
  lineContainer: {
    display: "flex",
    columnGap: 5,
    flexDirection: "row",
    marginTop: 30
  },
  active: {
    width: 50,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#F5C249",
  },
  disable: {
    width: 30,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#494D58"
  },

})

export default index