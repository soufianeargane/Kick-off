import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Matches from './screens/Matches';
import MatchDetails from './screens/MatchDetails';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Matches" component={Matches} options={{ headerShown: false }} />
                <Stack.Screen name="MatchDetails" component={MatchDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
