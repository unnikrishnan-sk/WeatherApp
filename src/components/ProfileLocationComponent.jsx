import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { setColors } from '../constants/color'

const ProfileLocationComponent = ({data}) => {
    const { id,image,place,climate,text } = data;

  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.03 }}>
        <Image source={image}></Image>
        <View style={{ marginLeft: WIDTH*0.05 }}>
        <Text style={{ color: setColors.white, fontSize: 16, fontWeight: 600 }}>{place || 'NA'}</Text>
        <Text style={{ color: setColors.textGray, fontSize: 14, marginTop: HEIGHT*0.01 }}>{climate || 'NA'}, {text}</Text>
        </View>
    </View>
  )
}

export default ProfileLocationComponent