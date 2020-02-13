import {
  render,
  wait,
  fireEvent,
  cleanup,
} from '@testing-library/vue';

import Counter from './Counter.vue';


describe('Counter', () => {
  afterEach(cleanup);

  test('increments value on click', async () => {
    const { getByTestId } = render(Counter);

    expect(getByTestId('count').textContent.trim()).toBe('0');

    const button = getByTestId('button');

    // Dispatch a native click event to our button element.
    await fireEvent.click(button);
    await fireEvent.click(button);

    expect(getByTestId('count').textContent.trim()).toBe('2');
  });

  test('defaultCount', async () => {
    const { getByTestId } = render(Counter, {
      propsData: {
        defaultCount: 10,
      },
    });

    // https://github.com/TheBrainFamily/wait-for-expect/blob/master/src/index.ts
    await wait(() => {
      expect(getByTestId('count').textContent.trim()).toBe('10');
    });

    const button = getByTestId('button');
    await fireEvent.click(button);
    await fireEvent.click(button);
    expect(getByTestId('count').textContent.trim()).toBe('12');
  });
});
