import React from 'react';
import { render } from '@testing-library/react-native';
import MatchCardContainer from '../app/components/MatchCardContainer';

describe('MatchCardContainer', () => {
    const matchResultText = '3-1';
    const leagueNameText = 'Premier League';
    const propWidth = 100;
    const propWidth1 = 200;
    const dimensionsText = '100x200';

    it('renders correctly', () => {
        const { getByText, getByTestId } = render(
            <MatchCardContainer
                dimensionsText={dimensionsText}
                matchResultText={matchResultText}
                leagueNameText={leagueNameText}
                propWidth={propWidth}
                propWidth1={propWidth1}
            />
        );


        // Check if match result text is rendered correctly
        const matchResultElement = getByText(matchResultText);
        expect(matchResultElement).toBeDefined();

        // Check if league name text is rendered correctly
        const leagueNameElement = getByText(leagueNameText);
        expect(leagueNameElement).toBeDefined();
    });
});