// screens/HomeScreen.tsx
import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import LogoList from '../components/LogoList';
import LogoForm from '../components/LogoForm';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={{flex: 1, }}>
      <LogoList />
      <LogoForm />
    </ScrollView>
  );
};

export default HomeScreen;
