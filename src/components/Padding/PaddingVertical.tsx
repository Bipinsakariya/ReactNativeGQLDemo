import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  h: number;
}
const PaddingVertical = (props: Props) => {
  return <View style={{width: props.h}}></View>;
};

export default PaddingVertical;
