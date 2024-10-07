import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {right_icon} from '../assets';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import {setColors} from '../constants/color';
import ForecastComponent from '../components/ForecastComponent';
import LinearGradient from 'react-native-linear-gradient';
import PrecipComponent from '../components/PrecipComponent';
import {useSelector} from 'react-redux';
import BarChartComponent from '../components/BarChartComponent';
import {calculateAverage} from '../constants/common';
import moment from 'moment';
import { forecastChartData } from '../constants/dummydata';

const ForecastScreen = () => {
  const [currentData, forecastData, forecastGraph] = useSelector(state => [state.climate, state.forecast,state.forecastGraph]);
  const average = calculateAverage(forecastData?.forecast) || 0;

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#454857'}}>
      <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0, 0.5, 1]} style={{flex: 1}} colors={['#434653', '#2F3039', '#2C2D35']}>
        <View style={{ paddingHorizontal: WIDTH * 0.05, paddingTop: HEIGHT * 0.03, height: HEIGHT, }}>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              data={forecastData?.forecast}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={{ marginHorizontal: WIDTH * 0.025, justifyContent: 'space-between', }}>
                  <ForecastComponent data={item} forecast={forecastData?.forecast} />
                </View>
              )}
              keyExtractor={item => item.id}/>
          </View>
          <Text style={{ marginTop: HEIGHT * 0.03, color: setColors.textGray, fontSize: 16, fontWeight: 600, }}> Average :{' '}
            <Text style={{color: setColors.white, fontSize: 16, fontWeight: 700}}> {average}%</Text>
          </Text>
          <View style={{ height: HEIGHT * 0.4, marginTop: HEIGHT * 0.03, borderRadius: HEIGHT * 0.02, paddingHorizontal: WIDTH * 0.04,}}>
            <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 0}} locations={[0, 0.5, 1]} style={{ flex: 1, borderRadius: HEIGHT * 0.02, width: WIDTH * 0.85,}} colors={['#24252A', '#292B34', '#2E303A']}>
              <BarChartComponent
                data={forecastGraph?.forecastGraph || forecastChartData} hideyAxisText={true} spacing={WIDTH * 0.17} hideRules={true} showVerticalLines={true} initialSpacing={0} verticalLines verticalLinesStrokeDashArray={[5, 7]} verticalLinesSpacing={WIDTH * 0.182} verticalLinesColor={setColors.textGray} verticalLinesHeight={HEIGHT * 0.5} yAxisThickness={0} showYAxisIndices={false} xAxisThickness={0} barBorderColor={setColors.gray} barWidth={4} noOfSections={4} dashWidth={3} dashGap={3} isAnimated={true} scrollEnabled={false} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: WIDTH * 0.03, width: WIDTH * 0.8, marginTop: HEIGHT * 0.01, }}>
                {forecastGraph && forecastGraph?.forecastGraph.map(item => (
                  <Text style={{color: setColors.white, fontSize: 14}}> {moment(item?.date).format('D')}</Text>
                ))}
              </View>
            </LinearGradient>
          </View>
          <View style={{ marginTop: HEIGHT * 0.03, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: WIDTH * 0.04, paddingVertical: HEIGHT * 0.01, borderRadius: HEIGHT * 0.045, backgroundColor: '#27282F', }}>
            <View style={{paddingLeft: WIDTH * 0.01}}>
              <Text style={{ color: setColors.textGray, fontSize: 14, fontWeight: 600,}}>See minute-by-minute forecasts</Text>
              <Text style={{marginTop: HEIGHT * 0.005, color: setColors.white}}> Plan for the next 5 hours</Text>
            </View>
            <View style={{ height: HEIGHT * 0.07, width: HEIGHT * 0.07, borderRadius: HEIGHT * 0.04, backgroundColor: '#2F3139', alignItems: 'center', justifyContent: 'center',}}>
              <Image source={right_icon}></Image>
            </View>
          </View>
          <PrecipComponent data={currentData?.climate} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default ForecastScreen;
