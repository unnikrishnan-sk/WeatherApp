import React from 'react'
import { Image, Text, View } from 'react-native'
import { HEIGHT } from '../constants/dimensions'
import { setColors } from '../constants/color'

const ForecastComponent = ({data}) => {
    const { id, image, day, low} = data;
    
  return (
    <View style={{ padding: HEIGHT*0.01, alignItems: 'center' }}>
      <View style={{ height: HEIGHT*0.04 }}>
        <Image source={image}></Image>
      </View>
    <Text style={{ marginTop: HEIGHT*0.01, color: setColors.textGray, fontSize: 12 }}>{day.slice(0,3).toUpperCase() || "NA"}</Text>
    <Text style={{ marginTop: HEIGHT*0.01, color: setColors.white, alignSelf: 'baseline', fontSize: 12 }}>{low || 0}C</Text>
    </View>
  )
}

export default ForecastComponent