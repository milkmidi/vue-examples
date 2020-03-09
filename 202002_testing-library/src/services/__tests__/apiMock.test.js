/**
 * @jest-environment node
 */

import { fetchData } from '../api';

jest.mock('../api', () => ({
  fetchData: jest.fn(),
}));

describe('api2', () => {
  test('fetchData', async () => {
    fetchData.mockResolvedValueOnce(['1', '2', '3']);
    const result:string[] = await fetchData();
    expect(result.length).toBe(3);
    expect(fetchData).toHaveBeenCalled();
    expect(fetchData).toHaveBeenCalledTimes(1);
  });
});
