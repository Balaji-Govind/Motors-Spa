// components/LogoForm.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, submitForm} from '../Store/logosSlice';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

const LogoForm: React.FC = () => {
  const dispatch = useDispatch();
  const formModal = useSelector((state: RootState) => state.logos.formModal);
  const [showJsonData, setShowJsonData] = useState(false);
  const [submittedData, setSubmittedData] = useState<string>('');
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    model: '',
    color: '',
    yearOfManufacture: '',
    insuranceValidUpto: '',
    kms: '',
    location: '',
    numOfOwners: '',
    transmission: '',
    externalFitments: '',
    photo: selectedImage,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      model: formModal || '',
    }));
  }, [formModal]);

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
  };

 

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets?.[0]?.uri || response.uri;
        setSelectedImage(imageUri);
        setFormData({ ...formData, photo: imageUri });
      }
    });
  };


  const handleSubmit = () => {
    setShowJsonData(true);
    dispatch(submitForm(formData));
    const newJson = JSON.stringify(formData, null, 2);
    setSubmittedData(prevData => prevData + '\n\n' + newJson);
    navigation.navigate('Results');
  };

 

  return (
    <ScrollView style={{flex: 1}}>
      {formModal && (
        <>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              marginVertical: 10,
            }}>
            {formModal}
          </Text>
          <TextInput
            style={styles.TextInputContainer}
            placeholder="Model"
            value={formData.model}
            onChangeText={text => handleInputChange('model', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="Color"
            value={formData.color}
            onChangeText={text => handleInputChange('color', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="YearOfManufacture"
            value={formData.yearOfManufacture}
            onChangeText={text => handleInputChange('yearOfManufacture', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="InsuranceValidUpto"
            value={formData.insuranceValidUpto}
            onChangeText={text => handleInputChange('insuranceValidUpto', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="kms"
            value={formData.kms}
            onChangeText={text => handleInputChange('kms', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="Location"
            value={formData.location}
            onChangeText={text => handleInputChange('location', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="numOfOwners"
            value={formData.numOfOwners}
            onChangeText={text => handleInputChange('numOfOwners', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="transmission"
            value={formData.transmission}
            onChangeText={text => handleInputChange('transmission', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="externalFitments"
            value={formData.externalFitments}
            onChangeText={text => handleInputChange('externalFitments', text)}
          />
          <TextInput
            style={styles.TextInputContainer}
            placeholder="photo"
            value={formData.photo}
            onChangeText={text => handleInputChange('photo', text)}
          />
           <Button title="Pick Image" onPress={openImagePicker} />
           <Image source={{ uri: formData.photo }} style={{ width: 100, height: 100, alignSelf: "center"}} />
          <Button title="Submit" onPress={handleSubmit}/>
          {showJsonData && <Text>{submittedData}</Text>}
        </>
      )}
    </ScrollView>
  );
};

export default LogoForm;

const styles = StyleSheet.create({
  TextInputContainer: {
    borderWidth: 1,
    padding: 4,
    alignSelf: 'center',
    marginTop: 4,
    flex: 1,
  },
});
