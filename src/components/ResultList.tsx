// components/ResultList.tsx
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, selectFormData } from '../Store/logosSlice';

const ResultList: React.FC = () => {
  const formData = useSelector(selectFormData);

  return (
    <View>
      {/* Render your results based on formData */}
    </View>
  );
};

export default ResultList;
