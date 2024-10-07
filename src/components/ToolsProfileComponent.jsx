import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { setColors } from '../constants/color'

const ToolsProfileComponent = ({data}) => {
    const { id,image,text } = data;

  return (
    <View style={{ marginTop: HEIGHT*0.04, alignItems: 'center', flexDirection: 'row' }}>

        <Image source={image}></Image>
        <Text style={{ color: setColors.white, fontSize: 18, fontWeight: 700, marginLeft: WIDTH*0.06 }}>{text}</Text>
    </View>
  )
}

export default ToolsProfileComponent