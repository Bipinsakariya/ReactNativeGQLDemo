export interface ICountry {
  _id: string;
  capital: string;
  name: string;
  population: number;
  area: number;
  flag: {
    emoji: string;
    svgFile: string;
  };
  subregion: {
    name: string;
  };
}
