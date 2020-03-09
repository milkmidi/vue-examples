import axios from 'axios';

export function fetchData():Promise<string[]> {
  console.log('fetchData');
  return axios.get('/api/data').then(({ data }) => data);
}
