import { useEffect } from "react";
import { Text, StyleSheet, View, Image, StatusBar } from "react-native";

import LiveScoresContainer from "../components/LiveScoresContainer";
import MatchCardContainer from "../components/MatchCardContainer";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Matches = () => {
    useEffect(() => {

    }, []);
    return (
        <View style={styles.galileoDesign}>
            {/* <StatusBar hidden={true} /> */}
            <View style={styles.depth0Frame0}>
                <LiveScoresContainer />
                <MatchCardContainer
                    dimensionsText={require("../../assets/depth-3-frame-0.png")}
                    matchResultText="Tottenham 2 - 0 Watford"
                    leagueNameText="Premier League"
                />
                <MatchCardContainer
                    dimensionsText={require("../../assets/depth-3-frame-01.png")}
                    matchResultText="Crystal Palace 1 - 1 West Ham"
                    leagueNameText="Premier League"
                    propWidth={237}
                    propWidth1={237}
                    propWidth2={237}
                />
                <MatchCardContainer
                    dimensionsText={require("../../assets/depth-3-frame-02.png")}
                    matchResultText="Villarreal 1 - 1 Real Madrid"
                    leagueNameText="La Liga"
                    propWidth={210}
                    propWidth1={210}
                    propWidth2={210}
                />
                {/* <View style={styles.depth1Frame7} /> */}
                {/* <View style={[styles.depth1Frame8, styles.depth1FrameBg]}>
                    <View style={styles.depth2Frame01}>
                        <View style={[styles.depth3Frame01, styles.depth3FrameLayout]}>
                            <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
                                <Image
                                    style={styles.depth5Frame0}
                                    contentFit="cover"
                                    source={require("../assets/depth-5-frame-01.png")}
                                />
                            </View>
                            <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
                                <View style={styles.depth5Frame01}>
                                    <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
                            <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
                                <Image
                                    style={styles.depth5Frame0}
                                    contentFit="cover"
                                    source={require("../assets/depth-5-frame-02.png")}
                                />
                            </View>
                            <View
                                style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}
                            >
                                <View style={styles.depth5Frame01}>
                                    <Text style={[styles.scores, styles.homeTypo]}>Scores</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
                            <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
                                <Image
                                    style={styles.depth5Frame0}
                                    contentFit="cover"
                                    source={require("../assets/depth-5-frame-03.png")}
                                />
                            </View>
                            <View
                                style={[styles.depth4Frame12, styles.depth4FrameSpaceBlock]}
                            >
                                <View style={styles.depth5Frame01}>
                                    <Text style={[styles.home, styles.homeTypo]}>Stats</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
                            <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
                                <Image
                                    style={styles.depth5Frame0}
                                    contentFit="cover"
                                    source={require("../assets/depth-5-frame-04.png")}
                                />
                            </View>
                            <View
                                style={[styles.depth4Frame13, styles.depth4FrameSpaceBlock]}
                            >
                                <View style={styles.depth5Frame01}>
                                    <Text style={[styles.home, styles.homeTypo]}>My Team</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View> */}
                {/* <View style={[styles.depth1Frame9, styles.depth1FrameBg]} /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        height: 844,
        overflow: "hidden",
        width: '100%'
    },
    galileoDesign: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
    },
});

export default Matches;
