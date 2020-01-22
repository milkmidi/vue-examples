import axios from 'axios';

export function fetchData() {
  return axios.get('/api/data').then(({ data }) => data);
}
