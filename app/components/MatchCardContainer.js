import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Color } from "../GlobalStyles";

const MatchCardContainer = ({
    dimensionsText,
    matchResultText,
    leagueNameText,
    propWidth,
    propWidth1,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={dimensionsText}
                />
                <View style={styles.textContainer}>
                    <View style={[styles.scoreContainer, { width: propWidth }]}>
                        <Text style={styles.score}>{matchResultText}</Text>
                    </View>
                    <View style={[styles.leagueContainer, { width: propWidth1 }]}>
                        <Text style={styles.league}>{leagueNameText}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.colorGray_200,
        width: '100%',
        height: 99,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    image: {
        borderRadius: 5,
        width: 56,
        height: 75,
    },
    textContainer: {
        marginLeft: 16,
        flex: 1,
    },
    scoreContainer: {
        overflow: 'hidden',
        height: 24,
    },
    score: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
    },
    leagueContainer: {
        overflow: 'hidden',
        height: 21,
    },
    league: {
        fontSize: 14,
        color: '#BC8F8F',
    },
});

export default MatchCardContainer;
