/**
 * @jest-environment node
 */
import moxios from 'moxios';
import axios from 'axios';
import { fetchData } from '../api';

describe('api', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  test('fetchData', async () => {
    expect.assertions(1);
    moxios.stubRequest('/api/data', {
      status: 200,
      response: ['React', 'Vue', 'Angular'],
    });
    const result:string[] = await fetchData();
    expect(result.length).toBe(3);
  });
});
