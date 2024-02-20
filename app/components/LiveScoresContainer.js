import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const LiveScoresContainer = () => {
    return (
        <View style={styles.topbar}>
            <View style={styles.depth2Frame0}>
                <View style={styles.depth5Frame0}>
                    <Text style={styles.liveScores}>Matches</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    liveScores: {
        fontSize: FontSize.size_lg,
        letterSpacing: 0,
        lineHeight: 23,
        fontWeight: "700",
        fontFamily: FontFamily.lexendBold,
        color: Color.colorWhite,
        textAlign: "center",
    },
    depth5Frame0: {
        alignSelf: "stretch",
        flex: 1,
        justifyContent: "center",
    },
    depth2Frame0: {
        width: 358,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 48,
    },
    topbar: {
        backgroundColor: Color.colorGray_200,
        width: "100%",
        height: 72,
        paddingHorizontal: Padding.p_base,
        paddingTop: Padding.p_base,
        paddingBottom: Padding.p_5xs,
    },
});

export default LiveScoresContainer;
