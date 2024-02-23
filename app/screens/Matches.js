import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";


import LiveScoresContainer from "../components/LiveScoresContainer";
import MatchCardContainer from "../components/MatchCardContainer";
import BottomBar from "../components/BottomBar";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Matches = ({ navigation }) => {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get("https://api.sportmonks.com/v3/football/fixtures?include=league;participants;venue&api_token=jrt9w7G0gDykH1CB4LaUQmZXThK7Qvmms80qPUPn30dGfZNMbyksdPoDBGlc", {
                });
                setMatches(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMatches();
    }, []);

    const handlePress = (match) => {
        console.log('Match pressed');
        navigation.navigate('MatchDetails', { match });
    };
    return (
        <View style={styles.galileoDesign}>
            <View style={styles.depth0Frame0}>
                <LiveScoresContainer title={'Matches'} />
                {/* filter  */}
                <View style={styles.barHolder}>
                    <View style={{ paddingHorizontal: 25 }}>
                        <View style={styles.filterBar} >
                            <TouchableOpacity style={{
                                backgroundColor: Color.colorRosybrown,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 15,
                            }} >
                                <View >
                                    <Text style={{ color: 'white' }}>All Matches</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: Color.colorRosybrown,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 15,
                            }} >
                                <View >
                                    <Text style={{ color: 'white' }}>All Matches</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: Color.colorRosybrown,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 15,
                            }} >
                                <View >
                                    <Text style={{ color: 'white' }}>All Matches</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ marginBottom: 75 }}>
                    {matches && matches.map((match) => (
                        <TouchableOpacity key={match.id} activeOpacity={0.1} onPress={() => handlePress(match)}>
                            <MatchCardContainer
                                dimensionsText={require("../../assets/depth-3-frame-0.png")}
                                matchResultText={match.name}
                                leagueNameText={match.starting_at}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    barHolder: {
        backgroundColor: Color.colorGray_200,
        height: 50,
        zIndex: 100,
        width: "100%",
        paddingBottom: 24,
    },
    filterBar: {
        flexDirection: "row",
        justifyContent: "",
        gap: 10,
        // padding: 20,
    },
    depth1FrameBg: {
        backgroundColor: Color.colorGray_100,
        width: 390,
    },
    depth3FrameLayout: {
        width: 84,
        alignItems: "center",
        height: 54,
    },
    depth4FrameFlexBox: {
        height: 32,
        alignItems: "center",
        flexDirection: "row",
    },
    depth4FrameSpaceBlock: {
        marginTop: 4,
        height: 18,
        alignItems: "center",
    },
    homeTypo: {
        textAlign: "center",
        fontFamily: FontFamily.lexendMedium,
        fontWeight: "500",
        lineHeight: 18,
        fontSize: FontSize.size_xs,
        letterSpacing: 0,
    },
    upcoming: {
        fontSize: FontSize.size_lg,
        lineHeight: 23,
        fontWeight: "700",
        fontFamily: FontFamily.lexendBold,
        textAlign: "left",
        color: Color.colorWhite,
        letterSpacing: 0,
    },
    depth3Frame0: {
        alignSelf: "stretch",
    },
    depth2Frame0: {
        width: 91,
        height: 23,
    },
    depth1Frame4: {
        height: 47,
        paddingTop: Padding.p_base,
        paddingBottom: Padding.p_5xs,
        paddingHorizontal: Padding.p_base,
        flexDirection: "row",
        width: 390,
    },
    depth1Frame7: {
        height: 137,
        width: 390,
    },
    depth5Frame0: {
        height: 24,
        width: 24,
    },
    depth4Frame0: {
        paddingHorizontal: 0,
        paddingVertical: Padding.p_9xs,
        width: 24,
    },
    home: {
        color: Color.colorRosybrown,
    },
    depth5Frame01: {
        alignItems: "center",
        alignSelf: "stretch",
    },
    depth4Frame1: {
        width: 36,
    },
    depth3Frame01: {
        alignItems: "center",
    },
    depth4Frame01: {
        borderRadius: 16,
        width: 48,
        justifyContent: "center",
    },
    scores: {
        color: Color.colorWhite,
    },
    depth4Frame11: {
        width: 40,
    },
    depth3Frame1: {
        marginLeft: 8,
        alignItems: "center",
    },
    depth4Frame12: {
        width: 32,
    },
    depth4Frame13: {
        width: 54,
    },
    depth2Frame01: {
        width: 358,
        height: 54,
        flexDirection: "row",
    },
    depth1Frame8: {
        borderStyle: "solid",
        borderColor: "#452626",
        borderTopWidth: 1,
        height: 75,
        paddingTop: Padding.p_5xs,
        paddingBottom: 12,
        paddingHorizontal: Padding.p_base,
    },
    depth1Frame9: {
        height: 20,
    },
    depth0Frame0: {
        backgroundColor: Color.colorGray_200,
        height: '100%',
        // overflow: "hidden",
        width: '100%',
        // paddingBottom: 24,
    },
    galileoDesign: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
    },
});

export default Matches;
