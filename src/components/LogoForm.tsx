// components/LogoForm.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, submitForm} from '../Store/logosSlice';

const LogoForm: React.FC = () => {
  const dispatch = useDispatch();
  const formModal = useSelector((state: RootState) => state.logos.formModal);
  const [showJsonData, setShowJsonData] = useState(false);
  const [submittedData, setSubmittedData] = useState<string>('');

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
    photo: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = () => {
    // dispatch(submitForm(formData));
    // console.log(JSON.stringify(formData, null, 2));
    setShowJsonData(true);
    dispatch(submitForm(formData));
    const newJson = JSON.stringify(formData, null, 2);
    setSubmittedData(prevData => prevData + '\n\n' + newJson);
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
          <Button title="Submit" onPress={handleSubmit} />
          {showJsonData && <Text style={{marginTop: 10}}>{submittedData}</Text>}
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
