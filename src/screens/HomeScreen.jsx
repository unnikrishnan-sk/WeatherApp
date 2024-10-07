import React, {useCallback, useEffect, useState} from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import {HEIGHT, WIDTH} from '../constants/dimensions';
import { humidity_homelogo, partly_cloudy, precipitation, sunset_homelogo, wind_homelogo } from '../assets';
import {setColors} from '../constants/color';
import TimewiseForcast from '../components/TimewiseForcast';
import DaywiseForcast from '../components/DaywiseForcast';
import LinearGradient from 'react-native-linear-gradient';
import {baseUrl, endpoints} from '../http/configApi';
import {networkApi} from '../http/api';
import moment from 'moment';
import {handleClimateImage} from '../constants/common';
import SunMoonComponent from '../components/SunMoonComponent';
import AirQualityComponent from '../components/AirQualityComponent';
import {useDispatch} from 'react-redux';
import {place} from '../redux/slice/placeSlice';
import {setClimate} from '../redux/slice/currentClimateSlice';
import {setPrecipitation} from '../redux/slice/precipitationSlice';
import {setForecast} from '../redux/slice/forecastSlice';
import {setForecastgraph} from '../redux/slice/forecastGraphSlice';
import {chartData, forecastChartData} from '../constants/dummydata';
import ClimateDetailsComponent from '../components/ClimateDetailsComponent';

const HomeScreen = () => {
  const [currentData, setCurrentData] = useState([]);
  const [location, setLocation] = useState();
  const [daywiseData, setDaywiseData] = useState([]);
  const [timewiseData, setTimewiseData] = useState([]);
  const [detailsData, setDetailsData] = useState();
  const [airQuality, setAirQuality] = useState();
  const [sunMoonData, setSunMoonData] = useState();
  const [precipForecast, setPrecipitationForecast] = useState(chartData);
  const [forecastGraph, setForecastGraph] = useState(forecastChartData);
  const [isCelsius, setIsCelsius] = useState(true);
  const [dailyTimewiseArray, setDailyTimeWiseArray] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      onRefresh();
      const url = `${baseUrl}/${endpoints?.forecast}?key=${endpoints?.key}&q=${endpoints?.place}&days=${endpoints?.forecastDays}&aqi=${endpoints?.airQuality}&alerts=${endpoints?.alerts}`;
      const res = await networkApi(url);

      if(!res || !res?.data){
        throw new Error("Invalid data structure")
      }
      else{
        const currentdata = res?.data?.current || {};
        setCurrentData(currentdata);
        dispatch(setClimate([currentdata]));
        const timeslab = res?.data?.forecast?.forecastday[0]?.hour || [];
        const groupedByDate = {};
        const timeWiseDetailClimate = res?.data?.forecast?.forecastday || [];
        timeWiseDetailClimate && timeWiseDetailClimate.map(item => {
          const timeStampDaily = item?.hour || [];
          const x = timeStampDaily.map(x => {
            const date = x?.time.split(' ')[0];
            if (!groupedByDate[date]) {
              groupedByDate[date] = [];
            }
            groupedByDate[date].push({ time: x?.time, temp_c: x?.temp_c, temp_f: x?.temp_f,
            });
          });
        });
        const finalDataArray = Object.keys(groupedByDate).map(date => ({
          date: date, 
          data: groupedByDate[date], 
        }));
        setDailyTimeWiseArray(finalDataArray);
        const timeData = timeslab.map((item, index) => ({
          id: index,
          time: moment(item?.time).format('hh:mm') || 'NA',
          image: handleClimateImage(item?.temp_c) || partly_cloudy,
          climate: item?.temp_c || 'NA',
        }));
        setTimewiseData(timeData);
        setDetailsData([{id: 0, text: 'Feels like', value: `${res?.data?.current?.feelslike_f} F`,},{id: 1, text: 'Humidity', value: res?.data?.current?.humidity},{id: 2, text: 'UV Index', value: res?.data?.current?.uv},
          {id: 3, text: 'wind speed',  value: res?.data?.current?.wind_kph},{id: 4, text: 'Pressure', value: res?.data?.current?.pressure_in },
        ]);
        setAirQuality(timeslab[0]?.air_quality?.pm10.toFixed(1) || 'NA');
        const sunMoon = res?.data?.forecast?.forecastday[0]?.astro;
        setSunMoonData({
          sunrise: sunMoon?.sunrise || "Not Updated",
          sunset: sunMoon?.sunset || "Not Updated",
          moonrise: sunMoon?.moonrise || "Not Updated",
          moonset: sunMoon?.moonset || "Not Updated",
        });
        setLocation({
          place: res?.data?.location?.name || "Not Updated",
          state: res?.data?.location?.region || "Not Updated",
        });
        dispatch(place([location?.place, location?.state]));
        const dayDetails = res?.data?.forecast?.forecastday || [];
        const daywiseDetails = dayDetails.map((item, index) => ({
          id: index,
          day: moment(item?.date).format('dddd') || 'NA',
          image: handleClimateImage(item?.day?.mintemp_c) || partly_cloudy,
          low: item?.day?.mintemp_c || 'NA',
          high: item?.day?.maxtemp_c || 'NA',
          low_f: item?.day?.mintemp_f || 'NA',
          high_f: item?.day?.maxtemp_f || 'NA',
        }));
        setDaywiseData(daywiseDetails);
        dispatch(setForecast(daywiseDetails));
        const forecastGraph = dayDetails.map((item, index) => ({
          id: index,
          value: item?.day?.mintemp_c || 0,
          frontColor: index % 2 === 0 ? '#60636D' : '#F1B188',
          date: item?.date || 'NA',
        }));
        setForecastGraph(forecastGraph);
        dispatch(setForecastgraph(forecastGraph));
        const precipData = dayDetails.map((item, index) => ({
          id: index,
          value: item?.day?.totalprecip_mm || 0,
          frontColor: index % 2 === 0 ? '#8A8C8F' : '#B4B5B9',
          day: moment(item?.date).format('ddd').toUpperCase() || 'NA',
        }));
        setPrecipitationForecast(precipData);
        dispatch(setPrecipitation(precipData));
      }
    } catch (error) {
      console.error('Fetch data error', error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <View style={{backgroundColor: setColors.homeScreenBackground}}>
      {refreshing && ( <ActivityIndicator size={'large'} color={'white'} refreshing={refreshing} onRefresh={()=>onRefresh()}/>)}

      {currentData && ( <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingTop: HEIGHT * 0.02, backgroundColor: '#484A5A'}}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} locations={[0, 0.5, 1]} style={{flex: 1}} colors={['#484A5A', '#393B46', '#2F3039']}>
            <View style={{ height: HEIGHT * 0.05, width: WIDTH * 0.4, borderRadius: HEIGHT * 0.025, alignSelf: 'center', backgroundColor: setColors.dateBackground, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: setColors.textGray, fontSize: 12, fontWeight: 600, }}>
                {currentData && moment(currentData?.last_updated).format('dddd, Do MMM') || "Not Available"}
              </Text>
            </View>

            {/* // Todays climate Section */}

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: WIDTH * 0.5}}>
                <Image source={partly_cloudy}></Image>
              </View>

              <View style={{width: WIDTH * 0.5, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 82, fontWeight: 700, color: setColors.tempFont}}> {(currentData && currentData?.temp_c).toFixed(0) || 0} </Text>
                <Text style={{color: setColors.white, fontSize: 12}}> {currentData && currentData?.condition?.text || "Not Available"}</Text>
              </View>
            </View>

            {/* // Feels like and wind Section */}
            <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH * 0.1, justifyContent: 'space-between', }}>
              <Text style={{color: setColors.textGray, fontSize: 12}}> Feels like{' '}
                <Text style={{color: setColors.white}}> {currentData && currentData?.feelslike_c || 0}C</Text>
              </Text>

              <Text style={{color: setColors.textGray, fontSize: 12}}>Wind{' '}
                <Text style={{color: setColors.white}}> {currentData && currentData?.wind_kph || 0} KM </Text>
                /H {currentData && currentData?.wind_dir || "Not Available"}</Text>
            </View>

            {/* // Todays weather Details */}
            <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH * 0.07, justifyContent: 'space-between', paddingVertical: HEIGHT * 0.02, paddingTop: HEIGHT * 0.07, }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image source={precipitation}></Image>
                  <Text style={{ paddingLeft: WIDTH * 0.025, color: setColors.textGray, fontSize: 12 }}> Precipitation:{' '}
                    <Text style={{color: setColors.white}}>{currentData && currentData?.precip_in || 0}</Text>
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', paddingTop: HEIGHT * 0.02, paddingLeft: WIDTH * 0.01, }}>
                  <Image source={wind_homelogo}></Image>
                  <Text style={{ paddingLeft: WIDTH * 0.025, color: setColors.textGray, fontSize: 12, marginTop: HEIGHT * 0.005 }}> Wind:{' '}
                    <Text style={{color: setColors.white}}>{currentData && currentData?.wind_kph || 0}km/h</Text>
                  </Text>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image source={humidity_homelogo}></Image>
                  <Text style={{ paddingLeft: WIDTH * 0.025, color: setColors.textGray, fontSize: 12,}}>Humidity:{' '}
                    <Text style={{color: setColors.white}}>{currentData && currentData?.humidity || 0}%</Text>
                  </Text>
                </View>
                <View
                  style={{ flexDirection: 'row', paddingTop: HEIGHT * 0.02, paddingLeft: WIDTH * 0.03,}}>
                  <Image source={sunset_homelogo}></Image>
                  <Text style={{ paddingLeft: WIDTH * 0.05, color: setColors.textGray, fontSize: 12,}}>Cloud:{' '}
                    <Text style={{color: setColors.white}}> {currentData && currentData?.cloud || 0}%</Text>
                  </Text>
                </View>
              </View>
            </View>

            {/* // Time wise Forcast Section */}
            <View style={{flexDirection: 'row', marginTop: HEIGHT * 0.015}}>
              <FlatList
                data={timewiseData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <TimewiseForcast data={item} />}
                keyExtractor={item => item.id}
              />
            </View>

            {/* // Day wise Section */}

            <View style={{ paddingHorizontal: WIDTH * 0.03, paddingVertical: HEIGHT * 0.02, marginTop: HEIGHT * 0.03,}}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} locations={[0, 0.8, 1]} style={{flex: 1, borderRadius: HEIGHT * 0.02}} colors={['#24252A', '#2C2E36', '#2F3139']}>
                <View style={{ paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, borderRadius: HEIGHT * 0.02,}}>
                  <View style={{height: HEIGHT * 0.03, alignItems: 'flex-end'}}>
                    <Text style={{color: setColors.textGray, fontSize: 12}}> High | Low
                    </Text>
                  </View>
                  <FlatList
                    data={daywiseData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                      <DaywiseForcast
                        data={item}
                        isCelsius={isCelsius}
                        finalDataArray={dailyTimewiseArray}
                      />
                    )}
                    keyExtractor={item => item.id}
                  />
                  <View style={{ height: HEIGHT * 0.03, alignItems: 'flex-end', marginTop: HEIGHT * 0.01, }}>
                    <Pressable onPress={() => setIsCelsius(!isCelsius)} style={{paddingHorizontal: HEIGHT * 0.015}}>
                      <Text style={{ color: isCelsius ? setColors.white : '#4BDDF2', fontSize: 12,}}>F <Text style={{color: setColors.white}}>/ </Text>
                        <Text style={{ color: isCelsius ? '#4BDDF2' : setColors.white,}}>C</Text>
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </LinearGradient>
            </View>

            {/* // Details Section */}
            <ClimateDetailsComponent detailsData={detailsData} />

            {/* // Air Quality Section */}
            <AirQualityComponent airQuality={airQuality} />

            {/* // Sun and Moon Section */}
            <SunMoonComponent sunMoonData={sunMoonData} />
          </LinearGradient>
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
