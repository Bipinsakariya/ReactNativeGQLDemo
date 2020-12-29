import {gql} from '@apollo/client';

const GET_COUNTRIES = gql`
  query {
    Country {
      _id
      capital
      name
      population
      area
      flag {
        emoji
        svgFile
      }
      subregion {
        name
      }
    }
  }
`;

export {GET_COUNTRIES};
