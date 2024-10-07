import React from 'react'
import { more_icon, profile_icon } from '../assets'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { setColors } from '../constants/color'
import { useNavigation } from '@react-navigation/native'

const Navbar = ({place,state}) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.05, justifyContent: 'space-between', paddingTop: HEIGHT*0.05 }}>
      <Pressable onPress={()=>navigation.openDrawer()}>
      <Image source={profile_icon}></Image>
      </Pressable>
        <Text style={{ color: setColors.white, fontSize: 16, fontWeight: 600 }}>{place && place || "Trivandrum"}, {state && state || 'Kerala'}</Text>
        <Image source={more_icon}></Image>
    </View>
  )
}

export default Navbar