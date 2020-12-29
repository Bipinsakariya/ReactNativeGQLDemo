import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  w: number;
}
const PaddingHorizontal = (props: Props) => {
  return <View style={{width: props.w}}></View>;
};

export default PaddingHorizontal;
