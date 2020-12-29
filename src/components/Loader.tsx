import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {AppColors} from '../styles/AppColors';
import {globalStyles} from '../styles/globalStyles';

const Loader = () => {
  return (
    <ActivityIndicator
      style={globalStyles.loaderStyle}
      size="large"
      color={AppColors.primary}
    />
  );
};

export default Loader;
