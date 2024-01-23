// components/LogoList.tsx
import React from 'react';
import {View, Button, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFormModal} from '../Store/logosSlice';

const logos = [
  {name: 'Benz', image: require('../Assets/Benz.png')},
  {name: 'FordImage', image: require('../Assets/FordImage.png')},
  {name: 'VolksWagen', image: require('../Assets/VolksWagen.png')},
];

const LogoList: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = (logoName: string) => {
    dispatch(setFormModal(logoName));
  };

  return (
    <View>
      {logos.map(logo => (
        <TouchableOpacity
        style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 8}}
          key={logo.name}
          onPress={() => handleClick(logo.name)}>
          <Image source={logo.image} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LogoList;
