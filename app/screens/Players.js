import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomBar from '../components/BottomBar';
import { Color, FontFamily, FontSize, Padding } from '../GlobalStyles';
import LiveScoresContainer from '../components/LiveScoresContainer';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import { setPlayer } from '../state/playerSlice';
import { useDispatch } from 'react-redux';

function Players() {
    const [players, setPlayers] = useState([]);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const goToPlayerDetails = (player) => {
        dispatch(setPlayer(player));
        navigation.navigate('PlayerDetails');
    };

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get("https://api.sportmonks.com/v3/football/players?include=nationality&api_token=jrt9w7G0gDykH1CB4LaUQmZXThK7Qvmms80qPUPn30dGfZNMbyksdPoDBGlc", {
                });
                const data = response.data.data;
                setPlayers(response.data.data.slice(0, 12));
                // setPlayers(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPlayers();
    }, []);
    return (
        <View style={styles.container}>
            <LiveScoresContainer title={'Players'} />
            <ScrollView style={{
                marginBottom: 75,
            }}>
                {
                    players && players.map((player, index) => (
                        <View key={player.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Padding.p_base, }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <View style={{
                                    paddingVertical: Padding.p_5xs,
                                }}>
                                    <Image
                                        style={{
                                            width: 70,
                                            height: 90,
                                            borderRadius: 15,
                                        }}
                                        source={{
                                            uri: player.image_path,
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        padding: Padding.p_base,
                                    }}
                                >
                                    <Text style={styles.playerNames}>
                                        {player.firstname} {player.lastname}
                                    </Text>
                                    <Text style={styles.team}>
                                        {player.nationality.name}
                                    </Text>
                                </View>
                            </View>
                            <View style={{

                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: Color.colorRosybrown,
                                    paddingHorizontal: 30,
                                    paddingVertical: 5,
                                    borderRadius: 15,
                                    justifyContent: 'center',

                                }}
                                    onPress={() => goToPlayerDetails(player)}
                                >
                                    <View >
                                        <Text style={{ color: 'white' }}>View</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: Color.colorGray_200,
    },
    playerNames: {
        fontSize: FontSize.size_lg,
        letterSpacing: 0,
        lineHeight: 23,
        fontWeight: "700",
        fontFamily: FontFamily.lexendBold,
        color: Color.colorWhite,
        textAlign: "center",
    },
    team: {
        fontSize: FontSize.size_md,
        letterSpacing: 0,
        lineHeight: 18,
        fontWeight: "500",
        fontFamily: FontFamily.lexendMedium,
        color: Color.colorRosybrown,
    },
})

export default Players