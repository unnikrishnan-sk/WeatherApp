import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { setColors } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimensions'
import PrecipComponent from '../components/PrecipComponent'
import LinearGradient from 'react-native-linear-gradient'
import BarChartComponent from '../components/BarChartComponent'
import { useSelector } from 'react-redux'

const PrecipitationScreen = () => {
  const [currentData,precipitationData] = useSelector((state)=>[state.climate,state.precipitation])

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#454857'}}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}}  locations={[0,0.5,1]} style={{ flex:1 }}
    colors={['#454857','#393A46','#2C2D35']}>
    <View style={{ borderBottomColor: 'gray', marginBottom: 10, height: HEIGHT, paddingTop: HEIGHT*0.05, paddingHorizontal: WIDTH*0.05}}>
      <Text style={{ color: setColors.white, fontSize: 16, fontWeight: 700 }}>Precipitation</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT*0.025, paddingHorizontal: WIDTH*0.04 }}>
    { precipitationData && precipitationData?.precipitation.map((item)=>(
      <Text style={{ color: setColors.textGray, fontSize: 12 }}>{item?.day || "DAY"}</Text>
    ))}
    </View>
  <View style={{ marginTop: HEIGHT*0.03 }}>
   <BarChartComponent data={precipitationData?.precipitation} hideyAxisText={true} spacing={0} hideRules={true} initialSpacing={0} showVerticalLines={true} verticalLinesStrokeDashArray={[5,7]} verticalLinesSpacing={65} verticalLinesColor={setColors.textGray} verticalLinesHeight={HEIGHT*0.5} yAxisThickness={0} showYAxisIndices={false} xAxisThickness={0} barBorderColor={setColors.gray} barWidth={65} noOfSections={4} dashWidth={4} dashGap={4} isAnimated={true} width={WIDTH}/>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: WIDTH*0.04 }}>
      { precipitationData && precipitationData?.precipitation.map((item)=>(
        <Text style={{ color: setColors.white, fontSize: 14, fontWeight: 700 }}>{(item.value *10).toFixed(0)}%</Text>
      ))}
    </View>
  </View>
    <Text style={{ color: setColors.white, fontSize: 16, fontWeight: 700, marginTop: HEIGHT*0.04 }}>Precipitation</Text>
    <PrecipComponent data={currentData?.climate} />
    </View>
    </LinearGradient>
    </ScrollView>
  </>
  )
}

export default PrecipitationScreen