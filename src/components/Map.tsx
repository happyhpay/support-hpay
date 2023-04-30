'use client';

import WorldMap from 'react-svg-worldmap';
import data from './data.json';

const datList = convertCountries(data);

export default function App() {
  return (
    <div>
      <WorldMap
        frame
        frameColor="#052E9B"
        color="#052E9B"
        title="updated at 2023-04-29"
        size="responsive"
        data={datList}
        tooltipTextFunction={({ countryName }) => countryName}
      />
    </div>
  );
}

interface ICountry {
  enName: string;
  cnName: string;
  code: string;
}

function convertCountries(list: ICountry[]) {
  return list.map((item) => ({
    country: item.code.toLowerCase(),
    value: 100,
  }));
}
