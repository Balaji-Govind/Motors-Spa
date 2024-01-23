// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import StackNavigation from './src/Navigation/NavigationScreen';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
