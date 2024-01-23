// screens/ResultsScreen.tsx
import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, selectFormData} from '../Store/logosSlice';

const ResultsScreen: React.FC = () => {
  const formData = useSelector(selectFormData);

  const filteredData = formData.filter(item => item);

  const renderResultItem = ({item}) => (
    <View style={styles.resultItem}>
      <Image source={{uri: item.photo}} style={styles.resultImage} />
      <Text>Model: {item.model}</Text>
      <Text>Color: {item.color}</Text>
      <Text>Year: {item.yearOfManufacture}</Text>
      <Text>insuranceValidUpto: {item.insuranceValidUpto}</Text>
      <Text>kms: {item.kms}</Text>
      <Text>location: {item.location}</Text>
      <Text>numOfOwners: {item.numOfOwners}</Text>
      <Text>transmission: {item.transmission}</Text>
      <Text>externalFitments: {item.externalFitments}</Text>

    </View>
  );


  return (
    <View>
      <FlatList
        data={filteredData}
        renderItem={renderResultItem}
        keyExtractor={item => item.model}
      />
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  resultItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  resultImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
