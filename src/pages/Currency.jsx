import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryCurrencyList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryCurrencyList = response.data.map((country) => {
          const currencyObj = country.currencies
            ? Object.values(country.currencies)[0]
            : null;

          return {
            name: country.name.common,
            code: country.cca2,
            currency: currencyObj ? currencyObj.name : 'N/A',
            currencyCode: currencyObj
              ? Object.keys(country.currencies)[0]
              : 'N/A',
          };
        });
        setCountries(countryCurrencyList);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Country and Currency List</h2>
      <ul className="max-h-[400px] overflow-auto border p-2 rounded">
        {countries.map((country, index) => (
          <li key={index} className="mb-2">
            <strong>{country.name}</strong> ({country.code}) -{' '}
            {country.currencyCode} ({country.currency})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryCurrencyList;
