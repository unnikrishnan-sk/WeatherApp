import React from 'react'
import { Image, Text, View } from 'react-native'
import { setColors } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { sunrise_path, wind_homelogo } from '../assets'

const SunMoonComponent = ({sunMoonData}) => {
  return (
    <View style={{ paddingHorizontal: WIDTH*0.02, paddingBottom: HEIGHT*0.15, marginTop: HEIGHT*0.02 }}>
    <View style={{ backgroundColor: '#2F313A', paddingHorizontal: WIDTH*0.05, borderRadius: HEIGHT*0.02, paddingBottom: HEIGHT*0.02 }}>
        <Text style={{ color: setColors.white, fontSize: 16, fontWeight: 600, paddingTop: HEIGHT*0.02 }}>Sun & Moon</Text>
        <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.02, justifyContent: 'space-between' }}>
        <View style={{ marginTop: HEIGHT*0.02 }}>
        <Text style={{ color: setColors.white, fontWeight: 600 }}>{sunMoonData && sunMoonData?.sunrise || 'NA'}</Text>
        <Text style={{ color: setColors.textGray, marginLeft: WIDTH*0.02, marginTop: HEIGHT*0.01 }}>Sunrise</Text>
        </View>
        <Image style={{ position: 'absolute', bottom: WIDTH*0.09, left: WIDTH*0.5 }}
        source={wind_homelogo}></Image>
        <Image source={sunrise_path}></Image>
        <View style={{ marginTop: HEIGHT*0.02 }}>
        <Text style={{ color: setColors.white, fontWeight: 600 }}>{sunMoonData && sunMoonData?.sunset || 'NA'}</Text>
        <Text style={{ color: setColors.textGray, marginLeft: WIDTH*0.02, marginTop: HEIGHT*0.01, fontSize: 12 }}>Sunset</Text>
        </View>
        </View>                
    </View>
    </View>
  )
}

export default SunMoonComponent