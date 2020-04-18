import {Alert} from 'react-native';
import axios from 'axios';

let url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    if ( country ){
        url = `${url}/countries/${country}`;
    }

    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        
        return { confirmed, recovered, deaths, lastUpdate };


    } catch(error) {
        Alert.alert(error);
    }

}

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name);

    } catch (error) {
      Alert.alert("Ocorreu um erro ao buscar os paises da API");
    }
};