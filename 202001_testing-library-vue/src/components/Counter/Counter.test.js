import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/vue';
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
});
