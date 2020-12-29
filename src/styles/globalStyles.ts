import {StyleSheet} from 'react-native';
import {AppColors} from './AppColors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    position: 'relative',
    margin: 16,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  loaderStyle: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  countryListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
  },
  countryNameContainer: {
    flex: 1,
  },
  titleText: {
    color: AppColors.titleText,
    fontWeight: 'bold',
  },

  itemSeparator: {
    height: 2,
    backgroundColor: AppColors.accent,
    opacity: 0.4,
  },
  searchInputWrapper: {
    padding: 16,
    backgroundColor: AppColors.input,
    borderRadius: 6,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
  },
  superScript: {
    alignSelf: 'flex-start',
    fontSize: 10,
  },
  countryFlagContainer: {
    height: 50,
    backgroundColor: '#999',
  },
  navIcons: {
    width: 14,
    height: 14,
  },
});
