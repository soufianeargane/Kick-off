import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Color, FontSize } from '../GlobalStyles';
// import BottomBar from "../components/BottomBar";
import { useEffect, useState } from 'react';
import axios from 'axios';

function MatchDetails({ route }) {
  const { match } = route.params;
  const [country, setCountry] = useState('');
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://api.sportmonks.com/v3/core/countries/${match.league.country_id}?api_token=jrt9w7G0gDykH1CB4LaUQmZXThK7Qvmms80qPUPn30dGfZNMbyksdPoDBGlc`);
        setCountry(response.data.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, []);
  return (
    <View style={styles.container}>
      {(match && country) && (
        <ScrollView>
          <View>
            <Image
              style={styles.image}
              source={{ uri: match.venue.image_path }}
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>
              {match.name}
            </Text>
          </View>
          <View>
            <View style={{ paddingHorizontal: 20, flexDirection: 'column', gap: 15 }}>
              <View>
                <Text style={{
                  color: 'white',
                  fontWeight: '900',
                  fontSize: 20,
                }}>League</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                  <Image style={{ width: 50, height: 50, backgroundColor: 'white' }} source={{
                    uri: match.league.image_path
                  }
                  } />
                  <View>
                    <Text style={styles.league}>{match.league.name}</Text>
                    <Text style={styles.country}>
                      {country}
                    </Text>
                  </View>

                </View>

              </View>
              <View>
                <Text style={{
                  color: 'white',
                  fontWeight: '900',
                  fontSize: 20,
                }}>Stadium</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                  <Image style={{ width: 50, height: 50 }} source={require("../../assets/location.png")} />
                  <View>
                    <Text style={styles.league}>
                      {match.venue.address}
                    </Text>
                  </View>

                </View>

              </View>
              <View>
                <Text style={{
                  color: 'white',
                  fontWeight: '900',
                  fontSize: 20,
                }}>Score</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                  <Image style={{ width: 50, height: 50 }} source={require("../../assets/score.png")} />
                  <View>
                    <Text style={styles.league}>
                      {match.result_info}
                    </Text>
                  </View>

                </View>

              </View>

            </View>
          </View>
          <View style={{ paddingHorizontal: 30, flexDirection: 'row', gap: 40, marginTop: 20, justifyContent: 'center' }}>
            <View>
              <Image
                style={{ width: 120, height: 120 }}
                source={{
                  uri: match.participants[0].image_path
                }}
              />
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 5, fontSize: 20 }}>
                {match.participants[0].name}
              </Text>
            </View>
            <View>
              <Image
                style={{ width: 120, height: 120 }}
                source={{
                  uri: match.participants[1].image_path

                }}
              />
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 5, fontSize: 20 }}>
                {match.participants[1].name}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}

      {/* <BottomBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Color.colorGray_100,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 15,
  },
  titleText: {
    fontSize: 25,
    color: Color.colorWhite,
    textAlign: 'center',
  },
  league: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  country: {
    fontSize: 14,
    color: '#BC8F8F',
  },

})

export default MatchDetails