import React from 'react'
import { Image, Text, View } from 'react-native'
import { droplet_icon, precipitation, right_icon } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { setColors } from '../constants/color'
import LinearGradient from 'react-native-linear-gradient'
import { handleClimateImage } from '../constants/common'
import moment from 'moment'

const PrecipComponent = ({data}) => {
  
    const { id,day,date,text,wind,climate, precip_mm } = data;
    const image = handleClimateImage(data[0]?.temp_c || precipitation)

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: id===0?HEIGHT*0.02: HEIGHT*0.01, borderRadius: HEIGHT*0.018, alignItems: 'center' }}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  locations={[0,0.5,1]}
          style={{ flex:1, borderRadius: HEIGHT*0.018, marginTop: id===0?HEIGHT*0.025:HEIGHT*0.005, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: HEIGHT*0.025, alignItems: 'center' }}
          colors={[setColors.precipShade1,setColors.precipShade2,'#32333C']}>
        <View style={{ paddingLeft: WIDTH*0.04 }}>
          <Text style={{ color: setColors.textGray, fontSize: 12 }}>{moment(data[0]?.last_updated).format('ddd').toUpperCase()} </Text>
          <Text style={{ fontSize: 12, color: setColors.white, marginTop: HEIGHT*0.015 }}>{moment(data[0]?.last_updated).format('MMM DD').toUpperCase() || "NA"}</Text>
        </View>
        <Image source={image}></Image>
        <View>
          <Text style={{ color: '#F9BD04',fontSize: 14 }}>Thunderstorms</Text>
          <Text style={{ color: setColors.textGray, marginTop: HEIGHT*0.01, fontSize: 14 }}>{data[0]?.wind_dir} {data[0]?.wind_kph} km/h</Text>
        </View>
        <View>
          <Text style={{ color: setColors.white }}>{data[0]?.temp_c || "NA"} / {data[0]?.heatindex_c || "NA"}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: HEIGHT*0.01 }}>
            <Image source={droplet_icon}></Image>
          <Text style={{ color: setColors.white, marginLeft: WIDTH*0.025 }}>{data[0]?.precip_mm * 100 || "NA"}% </Text>
          </View>
        </View>
      <Image style={{ marginRight: WIDTH*0.03 }} 
      source={right_icon}></Image>
      </LinearGradient>
    </View>   
  )
}

export default PrecipComponent