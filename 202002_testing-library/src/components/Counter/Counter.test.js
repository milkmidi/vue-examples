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
    // render vue Component
    const { getByTestId } = render(Counter);

    // 比對 data-testid="count" DOM 素的值是否為 0
    expect(getByTestId('count').textContent.trim()).toBe('0');

    // 抓到 button 元素
    const button = getByTestId('button');

    // 點擊二次
    await fireEvent.click(button);
    await fireEvent.click(button);

    // 比對 data-testid="count" DOM 素的值是否為 2
    expect(getByTestId('count').textContent.trim()).toBe('2');
  });

  test('defaultCount', async () => {
    // render vue Component, 並帶入 props 值
    const { getByTestId } = render(Counter, {
      propsData: {
        defaultCount: 10,
      },
    });

    // testing-library 有提供一種非同步的比對方法
    // 直接使用 wait 函式，可以參考以上的原始碼。
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
