import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";
import { useSelector } from 'react-redux';

const PlayerDetails = () => {

    const player = useSelector((state) => state.player.player);
    return (
        <ScrollView style={styles.galileoDesign}>
            <View style={styles.depth0Frame0}>
                <View style={styles.depth1Frame1}>
                    <View style={[styles.depth2Frame01, styles.frameLayout2]}>
                        <View style={[styles.depth3Frame01, styles.frameLayout2]}>
                            <View style={styles.frameLayout1}>
                                <Image
                                    style={[styles.depth5Frame01, styles.frameLayout1]}
                                    contentFit="cover"
                                    source={{
                                        uri: player?.image_path,
                                    }}
                                />
                            </View>
                            <View style={styles.depth4Frame1}>
                                <View style={styles.depth5Frame02}>
                                    <View style={styles.depth6Frame01}>
                                        <Text style={[styles.lebronJames, styles.textTypo]}>
                                            {player?.display_name}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.depth5Frame1}>
                                    <View style={styles.depth6Frame01}>
                                        <Text style={[styles.proBasketballPlayer, styles.ppgTypo]}>
                                            {player?.nationality?.name}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.depth1Frame3}>
                    <View style={[styles.depth2Frame03, styles.depth2FrameLayout]}>
                        <View style={styles.depth3Frame03}>
                            <Image
                                style={styles.depth4Frame03}
                                contentFit="cover"
                                source={require("../../assets/depth-4-frame-01.png")}
                            />
                        </View>
                        <View style={styles.depth3Frame11}>
                            <View style={styles.depth4Frame04}>
                                <View style={styles.depth3Frame02}>
                                    <Text style={styles.points}>
                                        height
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.depth4Frame11}>
                                <View style={styles.depth3Frame02}>
                                    <Text style={[styles.ppg, styles.ppgTypo]}>{player?.height} cm</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.depth2Frame1, styles.depth2FrameLayout]}>
                        <View style={styles.depth3Frame03}>
                            <Image
                                style={styles.depth4Frame03}
                                contentFit="cover"
                                source={require("../../assets/depth-4-frame-01.png")}
                            />
                        </View>
                        <View style={styles.depth3Frame11}>
                            <View style={styles.depth4Frame04}>
                                <View style={styles.depth3Frame02}>
                                    <Text style={styles.points}>
                                        Weight
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.depth4Frame11}>
                                <View style={styles.depth3Frame02}>
                                    <Text style={[styles.ppg, styles.ppgTypo]}>
                                        {player?.weight} kg
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.depth2Frame2, styles.depth2FrameLayout]}>
                        <View style={styles.depth3Frame03}>
                            <Image
                                style={styles.depth4Frame03}
                                contentFit="cover"
                                source={require("../../assets/depth-4-frame-01.png")}
                            />
                        </View>
                        <View style={styles.depth3Frame11}>
                            <View style={styles.depth4Frame04}>
                                <View style={styles.depth3Frame02}>
                                    <Text style={styles.points}>
                                        Date of Birth
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.depth4Frame11}>
                                <View style={styles.depth3Frame02}>
                                    <Text style={[styles.ppg, styles.ppgTypo]}>
                                        {player?.date_of_birth}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    frameFlexBox: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 48,
    },
    frameLayout3: {
        height: 48,
        width: 48,
        flexDirection: "row",
    },
    frameLayout2: {
        height: 196,
        alignItems: "center",
    },
    frameLayout1: {
        height: 128,
        width: 128,
    },
    textTypo: {
        fontFamily: FontFamily.lexendBold,
        fontWeight: "700",
        color: Color.colorWhite,
    },
    ppgTypo: {
        fontFamily: FontFamily.lexendRegular,
        color: Color.colorRosybrown,
    },
    depth2FrameLayout: {
        height: 115,
        width: 173,
        borderWidth: 1,
        borderColor: Color.colorDimgray,
        borderRadius: Border.br_5xs,
        borderStyle: "solid",
        backgroundColor: Color.colorGray_100,
        position: "absolute",
        padding: Padding.p_base,
    },
    frameLayout: {
        height: 104,
        width: 358,
    },
    text1Typo: {
        fontFamily: FontFamily.lexendMedium,
        fontWeight: "500",
        textAlign: "left",
        lineHeight: 24,
        fontSize: FontSize.size_base,
    },
    depth4FrameSpaceBlock: {
        marginTop: 8,
        width: 358,
    },
    depth5FrameSpaceBlock: {
        marginLeft: 4,
        height: 24,
    },
    depth4FrameFlexBox: {
        height: 32,
        alignItems: "center",
        flexDirection: "row",
    },
    depth4FrameLayout: {
        height: 18,
        marginTop: 4,
        alignItems: "center",
    },
    homeTypo: {
        lineHeight: 18,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.lexendMedium,
        fontWeight: "500",
        textAlign: "center",
        letterSpacing: 0,
    },
    depth3FrameLayout: {
        width: 65,
        height: 54,
        alignItems: "center",
    },
    depth4Frame0: {
        height: 24,
        width: 24,
    },
    depth3Frame0: {
        width: 48,
        alignItems: "center",
        flexDirection: "row",
    },
    depth5Frame0: {
        justifyContent: "flex-end",
        width: 48,
        alignItems: "center",
        flexDirection: "row",
    },
    depth4Frame01: {
        width: 48,
        flexDirection: "row",
    },
    depth3Frame1: {
        width: 310,
        paddingLeft: 262,
    },
    depth2Frame0: {
        width: 358,
    },
    depth1Frame0: {
        height: 72,
        paddingTop: Padding.p_base,
        paddingBottom: Padding.p_5xs,
        paddingHorizontal: Padding.p_base,
        width: 390,
        backgroundColor: Color.colorGray_200,
    },
    depth5Frame01: {
        borderRadius: 64,
        overflow: "hidden",
    },
    lebronJames: {
        textAlign: "center",
        color: Color.colorWhite,
        lineHeight: 28,
        letterSpacing: 0,
        fontSize: FontSize.size_3xl,
        fontWeight: "700",
    },
    depth6Frame01: {
        alignSelf: "stretch",
        alignItems: "center",
    },
    depth5Frame02: {
        width: 154,
        height: 28,
        alignItems: "center",
    },
    proBasketballPlayer: {
        color: Color.colorRosybrown,
        lineHeight: 24,
        fontFamily: FontFamily.lexendRegular,
        fontSize: FontSize.size_base,
        textAlign: "center",
    },
    depth5Frame1: {
        width: 165,
        height: 24,
        alignItems: "center",
    },
    depth4Frame1: {
        height: 52,
        marginTop: 16,
        justifyContent: "center",
        width: 165,
        alignItems: "center",
    },
    depth3Frame01: {
        width: 165,
    },
    depth2Frame01: {
        width: 358,
    },
    depth1Frame1: {
        height: 228,
        padding: Padding.p_base,
        flexDirection: "row",
        width: 390,
    },
    seasonalStats: {
        textAlign: "left",
        color: Color.colorWhite,
        lineHeight: 28,
        letterSpacing: 0,
        fontSize: FontSize.size_3xl,
        fontWeight: "700",
    },
    depth3Frame02: {
        alignSelf: "stretch",
    },
    depth2Frame02: {
        width: 161,
        height: 28,
    },
    depth1Frame2: {
        height: 60,
        paddingTop: Padding.p_xl,
        paddingBottom: Padding.p_xs,
        flexDirection: "row",
        paddingHorizontal: Padding.p_base,
        width: 390,
    },
    depth4Frame03: {
        height: 24,
        width: 24,
        overflow: "hidden",
    },
    depth3Frame03: {
        width: 139,
        height: 24,
    },
    points: {
        lineHeight: 20,
        textAlign: "left",
        fontSize: FontSize.size_base,
        color: Color.colorWhite,
        fontFamily: FontFamily.lexendBold,
        fontWeight: "700",
    },
    depth4Frame04: {
        height: 20,
        width: 139,
    },
    ppg: {
        fontSize: FontSize.size_sm,
        lineHeight: 21,
        textAlign: "left",
        color: Color.colorRosybrown,
    },
    depth4Frame11: {
        height: 21,
        marginTop: 4,
        width: 139,
    },
    depth3Frame11: {
        height: 45,
        marginTop: 12,
        width: 139,
    },
    depth2Frame03: {
        left: 16,
        top: 16,
        width: 173,
        borderWidth: 1,
        borderColor: Color.colorDimgray,
        borderRadius: Border.br_5xs,
    },
    depth2Frame1: {
        left: 201,
        top: 16,
        width: 173,
        borderWidth: 1,
        borderColor: Color.colorDimgray,
        borderRadius: Border.br_5xs,
    },
    depth2Frame2: {
        top: 143,
        left: 16,
    },
    depth1Frame3: {
        height: 274,
        width: 390,
    },
    depth2Frame04: {
        width: 141,
        height: 28,
    },
    points1: {
        color: Color.colorWhite,
    },
    depth4Frame09: {
        height: 24,
        width: 358,
    },
    text: {
        fontSize: FontSize.size_13xl,
        letterSpacing: -1,
        lineHeight: 40,
        textAlign: "left",
        color: Color.colorWhite,
        alignSelf: "stretch",
    },
    depth5Frame010: {
        height: 40,
        width: 358,
    },
    depth4Frame14: {
        height: 40,
        overflow: "hidden",
    },
    last7Days: {
        textAlign: "left",
        color: Color.colorRosybrown,
        lineHeight: 24,
        fontFamily: FontFamily.lexendRegular,
        fontSize: FontSize.size_base,
    },
    depth5Frame011: {
        width: 88,
        height: 24,
    },
    text1: {
        color: Color.colorLimegreen,
    },
    depth5Frame11: {
        width: 32,
    },
    depth4Frame2: {
        height: 24,
        flexDirection: "row",
    },
    depth2Frame05: {
        top: 24,
        left: 16,
        position: "absolute",
        height: 104,
    },
    depth1Frame5: {
        height: 152,
        width: 390,
    },
    depth2Frame06: {
        height: 28,
        width: 165,
    },
    depth5Frame014: {
        width: 76,
        height: 24,
    },
    depth5Frame12: {
        width: 41,
    },
    depth4Frame011: {
        borderRadius: 16,
        justifyContent: "center",
        width: 48,
    },
    home: {
        color: Color.colorWhite,
    },
    depth4Frame16: {
        width: 36,
    },
    depth4Frame012: {
        paddingHorizontal: 0,
        paddingVertical: Padding.p_9xs,
        width: 24,
    },
    players: {
        color: Color.colorRosybrown,
    },
    depth4Frame17: {
        width: 45,
    },
    depth3Frame14: {
        marginLeft: 8,
    },
    depth4Frame18: {
        width: 39,
    },
    depth4Frame19: {
        width: 32,
    },
    depth4Frame110: {
        width: 30,
    },
    depth2Frame08: {
        height: 54,
        flexDirection: "row",
        width: 358,
    },
    depth1Frame9: {
        borderColor: "#452626",
        borderTopWidth: 1,
        height: 75,
        paddingTop: Padding.p_5xs,
        borderStyle: "solid",
        backgroundColor: Color.colorGray_100,
        paddingBottom: Padding.p_xs,
        paddingHorizontal: Padding.p_base,
        width: 390,
    },
    depth1Frame10: {
        height: 20,
        backgroundColor: Color.colorGray_100,
        width: 390,
    },
    depth0Frame0: {
        height: 1151,
        overflow: "hidden",
        width: '100%',
        backgroundColor: Color.colorGray_200,
    },
    galileoDesign: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        width: "100%",
    },
});

export default PlayerDetails;
