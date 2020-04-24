import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import React from 'react';

// Components
import MyTabs from './Components/TabsNavigator/Tabs';

import {colors} from './styles/colors';

console.disableYellowBox = true;

const App: () => React$Node = () => {
  return (
    <>
        <StatusBar
            barStyle='light-content'
            hidden={false}
            backgroundColor={colors.primary}
        />
        <MyTabs />
    </>
  );
};
export default App;
