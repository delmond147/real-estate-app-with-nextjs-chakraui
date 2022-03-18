import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '19b4a38989msh2f257289cb4699fp1fd903jsnf1738db7d3c2' ,
    },
  });
    
  return data;
}
