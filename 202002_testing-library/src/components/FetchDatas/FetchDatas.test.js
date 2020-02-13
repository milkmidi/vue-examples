import moxios from 'moxios';
import axios from 'axios';
import { render, wait, cleanup } from '@testing-library/vue';

import FetchDatas from './FetchDatas.vue';

describe('FetchDatas', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    cleanup();
    moxios.uninstall(axios);
  });

  test('children length', async () => {
    moxios.stubRequest('/api/data', {
      status: 200,
      response: ['React', 'Vue', 'Angular'],
    });
    const { getByTestId, debug } = render(FetchDatas);
    await wait(() => {
      debug();
      expect(getByTestId('ul').children.length).toBe(3);
    });
  });
});
