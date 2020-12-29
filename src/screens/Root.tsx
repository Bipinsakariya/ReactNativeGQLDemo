import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import CountryItem from '../components/CountryItem';
import Loader from '../components/Loader';
import PaddingVertical from '../components/Padding/PaddingVertical';
import {AppColors} from '../styles/AppColors';
import {globalStyles} from '../styles/globalStyles';
import {ICountry} from '../types/interfaces/ICountry';
import {GET_COUNTRIES} from '../graphql/queries/country';
import {Picker} from 'native-base';

interface CountryListItem {
  item: ICountry;
  index: number;
}

const SORT_SELECTION = {
  NAME: 'Name',
  POPULATION: 'Population',
  AREA: 'Area',
};

const ORDER_LIST = {
  ASC: 'Ascending',
  DES: 'Descending',
};

const sortList = [
  SORT_SELECTION.NAME,
  SORT_SELECTION.POPULATION,
  SORT_SELECTION.AREA,
];

const listOrders = [ORDER_LIST.ASC, ORDER_LIST.DES];

const Root = () => {
  let {loading, data, error} = useQuery(GET_COUNTRIES);
  const [countryData, setCountryData] = useState(data ? data : []);
  const [searchText, setSearchText] = useState('');

  const [selectedSortingValue, setSelectedSortingValue] = useState<string>(
    SORT_SELECTION.NAME,
  );
  const [selectedOrderType, setSelectedOrderType] = useState<string>(
    ORDER_LIST.ASC,
  );

  const renderItem = ({item, index}: CountryListItem) => (
    <CountryItem country={item} />
  );

  const renderItemSeparatorComponent = () => (
    <View style={globalStyles.itemSeparator}></View>
  );

  useEffect(() => {
    if (data) {
      let myArray: any = [...data.Country];

      console.log('VALUE', searchText);

      if (searchText) {
        myArray = myArray.filter((item: ICountry) =>
          item.name.toLowerCase().startsWith(searchText.toLocaleLowerCase()),
        );
      } else {
        myArray = [...data.Country];
      }
      if (selectedSortingValue === SORT_SELECTION.NAME) {
        myArray.sort((a: ICountry, b: ICountry) =>
          a.name.localeCompare(b.name),
        );
      } else if (selectedSortingValue === SORT_SELECTION.POPULATION) {
        myArray.sort((a: ICountry, b: ICountry) => a.population - b.population);
      } else if (selectedSortingValue === SORT_SELECTION.AREA) {
        myArray.sort((a: ICountry, b: ICountry) => a.area - b.area);
      }

      if (selectedOrderType === ORDER_LIST.ASC) {
        if (selectedSortingValue === SORT_SELECTION.NAME) {
          myArray.sort((a: ICountry, b: ICountry) =>
            a.name.localeCompare(b.name),
          );
        } else {
          myArray.sort(
            (a: any, b: any) =>
              a[selectedSortingValue] - b[selectedSortingValue],
          );
        }
      } else if (selectedOrderType === ORDER_LIST.DES) {
        myArray.reverse();
      }
      setCountryData(myArray);
    }
  }, [selectedSortingValue, loading, selectedOrderType, searchText]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.searchInputWrapper}>
        <TextInput
          style={globalStyles.searchInput}
          placeholder="Search Country"
          onChangeText={(value) => setSearchText(value)}
        />
        <Image
          style={{width: 24, height: 24, tintColor: AppColors.accent}}
          resizeMode="contain"
          source={require('../../assets/images/search.png')}
        />
      </View>

      <View
        style={[
          globalStyles.rowContainer,
          {justifyContent: 'space-between', paddingVertical: 16},
        ]}>
        <View style={globalStyles.rowContainer}>
          <Text
            style={[
              globalStyles.titleText,
              {color: AppColors.secondary, alignSelf: 'center'},
            ]}>
            Sort By :
          </Text>
          <View style={{alignSelf: 'center', ...globalStyles.rowContainer}}>
            <Picker
              mode="dropdown"
              style={{
                height: 30,
              }}
              selectedValue={selectedSortingValue}
              textStyle={{fontWeight: 'bold', fontSize: 16}}
              onValueChange={(value) => {
                console.log(value);

                setSelectedSortingValue(value);
              }}>
              {sortList.map((item: any) => (
                <Picker.Item label={item} value={item} />
              ))}
            </Picker>
            <Image
              style={[
                globalStyles.navIcons,
                {
                  tintColor:
                    selectedOrderType === ORDER_LIST.DES
                      ? AppColors.black
                      : AppColors.accent,
                  alignSelf: 'center',
                },
              ]}
              source={require('../../assets/images/down.png')}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={globalStyles.rowContainer}>
          <Text
            style={[
              globalStyles.titleText,
              {color: AppColors.secondary, alignSelf: 'center'},
            ]}>
            Order :
          </Text>
          <View style={{alignSelf: 'center'}}>
            <View style={globalStyles.rowContainer}>
              <Picker
                mode="dropdown"
                style={{
                  height: 30,
                }}
                iosIcon={
                  <View style={globalStyles.rowContainer}>
                    <Image
                      style={[
                        globalStyles.navIcons,
                        {
                          tintColor:
                            selectedOrderType === ORDER_LIST.ASC
                              ? AppColors.black
                              : AppColors.accent,
                        },
                      ]}
                      source={require('../../assets/images/up.png')}
                    />
                    <Image
                      style={[
                        globalStyles.navIcons,
                        {
                          tintColor:
                            selectedOrderType === ORDER_LIST.DES
                              ? AppColors.black
                              : AppColors.accent,
                        },
                      ]}
                      source={require('../../assets/images/down.png')}
                      resizeMode="contain"
                    />
                  </View>
                }
                // selectedValue={selectedOrderType}
                placeholderStyle={{}}
                textStyle={{fontWeight: 'bold', fontSize: 16}}
                onValueChange={(value) => {
                  console.log(value);
                  setSelectedOrderType(value);
                }}>
                {listOrders.map((item: any) => (
                  <Picker.Item label={item} value={item} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          keyExtractor={(item: ICountry, index: number) => item.name + index}
          data={countryData}
          extraData={[selectedSortingValue, selectedOrderType, searchText]}
          renderItem={renderItem}
          ItemSeparatorComponent={renderItemSeparatorComponent}
        />
      )}
    </SafeAreaView>
  );
};

export default Root;
