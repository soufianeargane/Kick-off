import React from 'react';
import { render } from '@testing-library/react-native';

import Matches from '../app/screens/Matches';

describe('Matches component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<Matches navigation={{ navigate: jest.fn() }} />);

        // Check if a specific element in the component is present
        const liveScoresContainer = getByTestId('live-scores-container');
        expect(liveScoresContainer).toBeTruthy();
    });
});
