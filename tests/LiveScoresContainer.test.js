import React from 'react';
import { render } from '@testing-library/react-native';
import LiveScoresContainer from '../app/components/LiveScoresContainer';

describe('LiveScoresContainer', () => {
    // it('renders correctly', () => {
    //     const { getByTestId } = render(<LiveScoresContainer />);

    //     // Check if liveScores style is applied correctly
    //     const liveScoresElement = getByTestId('liveScores');
    //     expect(liveScoresElement).toHaveStyle({
    //         fontSize: FontSize.size_lg,
    //         letterSpacing: 0,
    //         lineHeight: 23,
    //         fontWeight: "700",
    //         fontFamily: FontFamily.lexendBold,
    //         color: Color.colorWhite,
    //         textAlign: "center",
    //     });

    //     // Check if depth5Frame0 style is applied correctly
    //     const depth5Frame0Element = getByTestId('depth5Frame0');
    //     expect(depth5Frame0Element).toHaveStyle({
    //         alignSelf: "stretch",
    //         flex: 1,
    //         justifyContent: "center",
    //     });

    //     // Check if depth2Frame0 style is applied correctly
    //     const depth2Frame0Element = getByTestId('depth2Frame0');
    //     expect(depth2Frame0Element).toHaveStyle({
    //         width: 358,
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         flexDirection: "row",
    //         height: 48,
    //     });

    //     // Check if topbar style is applied correctly
    //     const topbarElement = getByTestId('topbar');
    //     expect(topbarElement).toHaveStyle({
    //         backgroundColor: Color.colorGray_200,
    //         width: "100%",
    //         height: 72,
    //         paddingHorizontal: Padding.p_base,
    //         paddingTop: Padding.p_base,
    //         paddingBottom: Padding.p_5xs,
    //     });
    // });

    const title = 'Live Scores';
    it('renders correctly', () => {
        const { getByText, getByTestId } = render(
            <LiveScoresContainer
                title={title}
            />
        );


        // Check if match result text is rendered correctly
        const titleElement = getByText(title);
        expect(titleElement).toBeDefined();

    });

});