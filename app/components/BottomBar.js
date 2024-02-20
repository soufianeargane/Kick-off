import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { Color, FontFamily, FontSize, Padding } from '../GlobalStyles';

function BottomBar() {
    return (
        <View style={styles.container}>
            <View style={[styles.depth1Frame8, styles.depth1FrameBg]}>
                <View style={styles.depth2Frame01}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.depth3Frame1,
                            styles.depth3FrameLayout,
                            pressed && { backgroundColor: '#eee' } // Change the background color when pressed
                        ]}
                        onPress={() => console.log('Home pressed')}
                    >
                        <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
                            <Image
                                style={styles.depth5Frame0}
                                contentFit="cover"
                                source={require("../../assets/home.png")}
                            />
                        </View>
                        <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
                            <View style={styles.depth5Frame01}>
                                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            styles.depth3Frame1,
                            styles.depth3FrameLayout,
                            pressed && { backgroundColor: '#eee' } // Change the background color when pressed
                        ]}
                        onPress={() => console.log('trophy pressed')}
                    >
                        <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
                            <Image
                                style={styles.depth5Frame0}
                                contentFit="cover"
                                source={require("../../assets/trophy.png")}
                            />
                        </View>
                        <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
                            <View style={styles.depth5Frame01}>
                                <Text style={[styles.home, styles.homeTypo]}>trophy</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            styles.depth3Frame1,
                            styles.depth3FrameLayout,
                            pressed && { backgroundColor: '#eee' } // Change the background color when pressed
                        ]}
                        onPress={() => console.log('stats pressed')}
                    >
                        <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
                            <Image
                                style={styles.depth5Frame0}
                                contentFit="cover"
                                source={require("../../assets/stats.png")}
                            />
                        </View>
                        <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
                            <View style={styles.depth5Frame01}>
                                <Text style={[styles.home, styles.homeTypo]}>stats</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [
                            styles.depth3Frame1,
                            styles.depth3FrameLayout,
                            pressed && { backgroundColor: '#eee' } // Change the background color when pressed
                        ]}
                        onPress={() => console.log('people pressed')}
                    >
                        <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
                            <Image
                                style={styles.depth5Frame0}
                                contentFit="cover"
                                source={require("../../assets/people.png")}
                            />
                        </View>
                        <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
                            <View style={styles.depth5Frame01}>
                                <Text style={[styles.home, styles.homeTypo]}>people</Text>
                            </View>
                        </View>
                    </Pressable>

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // make sure the bottom bar is always at the bottom and not floating
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: "white",
        height: 75,
    },
    depth1FrameBg: {
        backgroundColor: Color.colorGray_100,
        width: '100%',
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

export default BottomBar