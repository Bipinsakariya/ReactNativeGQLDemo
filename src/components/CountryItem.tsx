import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {SvgUri} from 'react-native-svg';
// import SvgUri from 'react-native-svg-uri';

import {AppColors} from '../styles/AppColors';
import {globalStyles} from '../styles/globalStyles';
import {ICountry} from '../types/interfaces/ICountry';
import {formatNumber} from '../utils/formattionUtils';
import PaddingHorizontal from './Padding/PaddingHorizontal';

interface Props {
  country: ICountry;
}

const CountryItem = (props: Props) => {
  const {country} = props;

  return (
    <View style={globalStyles.countryListItemContainer}>
      <View style={globalStyles.countryFlagContainer}>
        <SvgUri
          width={80}
          height="100%"
          preserveAspectRatio="xMinYMin slice"
          uri={country.flag.svgFile}
        />
      </View>
      <PaddingHorizontal w={8} />
      <View style={globalStyles.countryNameContainer}>
        <View style={[globalStyles.rowContainer, {width: '100%'}]}>
          <Text
            style={[globalStyles.titleText, {maxWidth: '60%'}]}
            numberOfLines={1}>
            {country.name}
          </Text>
          <PaddingHorizontal w={4} />
          <Text
            numberOfLines={1}
            style={[
              globalStyles.titleText,
              {color: AppColors.accent, minWidth: '25%', maxWidth: '40%'},
            ]}>
            {country.capital}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          style={[globalStyles.titleText, {color: AppColors.accent}]}>
          {country.subregion?.name}
        </Text>
      </View>
      <PaddingHorizontal w={8} />
      <View>
        <View style={globalStyles.rowContainer}>
          <Text
            style={[globalStyles.titleText, {textAlign: 'right'}]}
            numberOfLines={1}>
            Area : {formatNumber(country.area, 1)} km
          </Text>
          <Text style={[globalStyles.titleText, globalStyles.superScript]}>
            2
          </Text>
        </View>
        <Text
          style={[globalStyles.titleText, {textAlign: 'right'}]}
          numberOfLines={1}>
          Pop :{formatNumber(country.population, 1)}
        </Text>
      </View>
    </View>
  );
};

export default CountryItem;
