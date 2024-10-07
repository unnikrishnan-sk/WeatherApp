import React from 'react'
import { Text, View } from 'react-native'
import { setColors } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import { aqiIndex, aqiIndexRemarks } from '../constants/common'

const AirQualityComponent = ({airQuality}) => {

  let airQualityIndex = aqiIndex(airQuality);
  let airQualityRemarks = aqiIndexRemarks(airQualityIndex)

  return (
    <View style={{ paddingHorizontal: WIDTH*0.02, marginTop: HEIGHT*0.02 }}>

    <View style={{ paddingHorizontal: WIDTH*0.05, backgroundColor: setColors.qualityColor, paddingTop: HEIGHT*0.03, borderRadius: HEIGHT*0.02 }}>
        <Text style={{ color: setColors.white, fontSize: 16, fontWeight: 600 }}>Air Quality</Text>
          <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.02, marginBottom: HEIGHT*0.02 }}>
            <View style={{ marginTop: HEIGHT*0.02, alignItems: 'center' }}>
              <Text style={{ color: setColors.white, fontWeight: 700, fontSize: 32, marginLeft: WIDTH*0.02 }}>{airQuality || "NA"}</Text>
              <Text style={{ color: setColors.white, fontSize: 12, }}>{airQualityIndex || "NA"}</Text>
            </View>
            <View style={{ width: WIDTH*0.7, paddingHorizontal: WIDTH*0.05, paddingVertical: HEIGHT*0.02 }}>
              <Text style={{ color: setColors.textGray, fontSize: 12 }}>{airQualityRemarks || "NA"}</Text>
            </View>
          </View>   
      </View>  
      </View>
  )
}

export default AirQualityComponent