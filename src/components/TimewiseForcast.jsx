import React  from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { setColors } from '../constants/color'

const TimewiseForcast = ({data}) => {
    const {id, time, image, climate} = data;

  return (
    <Pressable 
    style={{ borderWidth: id===0?1:0, borderColor: setColors.white, backgroundColor: id===0? setColors.timeBackground:setColors.forecastBackground, borderRadius: HEIGHT*0.035, alignItems: 'center', marginLeft: WIDTH*0.05 }}>
        <Text style={{ paddingHorizontal: WIDTH*0.025, paddingTop: HEIGHT*0.025, fontSize: 10, color: setColors.white }}>{time}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: HEIGHT*0.02, height: HEIGHT*0.04 }}>
        <Image source={image}></Image>
        </View>
        <Text style={{ marginTop: HEIGHT*0.02, paddingBottom: HEIGHT*0.015, color:setColors.white, fontWeight: 800,}}>{climate}</Text>
    </Pressable>
  )
}

export default TimewiseForcast