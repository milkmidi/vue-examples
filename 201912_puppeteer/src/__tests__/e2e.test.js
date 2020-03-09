/**
 * @jest-environment node
 */
import puppeteer from 'puppeteer';

const WEB_URL = 'http://localhost:3000';


let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch(
    {
      headless: false,
      // headless: true,
      slowMo: 20,
      defaultViewport: {
        width: 1440,
        height: 900,
        isMobile: false,
      },
    },
  );
  page = await browser.newPage();
});
afterAll(() => {
  browser.close();
});

describe('Data', () => {
  test('/form Post', async () => {
    await page.goto(WEB_URL);
    await page.waitForSelector('#app');

    const inputElment = await page.waitForXPath('//*[@id="app"]/div/form/div[1]/input');
    inputElment.type('milkmidi');
    await page.waitFor(100);

    await page.type('#input-email', 'milkmidi@gmail.com');
    await page.select('#select-country', '2');

    await page.click('#radio-gender-0');
    await page.click('#checkbox-skill-0');
    await page.click('#checkbox-skill-1');

    const [apiResponse] = await Promise.all([
      page.waitForResponse(`${WEB_URL}/api/data`).then((response) => response.json()),
      page.click('#button-submit'),
    ]);
    expect(apiResponse.status).toBe('ok');
  });

  test('/form result', async () => {
    await page.goto(WEB_URL);
    await page.waitForSelector('#app');

    const [apiResponse] = await Promise.all([
      page.waitForResponse(`${WEB_URL}/api/data`).then((response) => response.json()),
      page.click('#button-tab-1'),
    ]);
    expect(apiResponse.status).toBe('ok');


    const inputNameElement = await page.$('#input-name');
    const inputName = await (await inputNameElement.getProperty('innerText')).jsonValue();

    // 或是用這個方法
    // const inputNameElement = await page.$('#input-name');
    // const inputName = page.evaluate(({ innerText }) => innerText, inputNameElement);
    expect(inputName).toBe('milkmidi');


    expect(
      await page.evaluate(({ innerText }) => innerText,
        await page.$('#input-email')),
    ).toBe('milkmidi@gmail.com');

    const selectCountryElement = await page.$('#select-country');
    const selectCountry = await page.evaluate(({ options, selectedIndex }) => options[selectedIndex].value, selectCountryElement);
    expect(selectCountry).toBe('2');

    // radio button
    expect(
      await page.evaluate(({ checked }) => checked,
        await page.$('#radio-gender-1')),
    ).toBe(true);

    // checkbox
    expect(
      await page.evaluate(({ checked }) => checked,
        await page.$('#checkbox-skill-0')),
    ).toBe(true);
    expect(
      await page.evaluate(({ checked }) => checked,
        await page.$('#checkbox-skill-1')),
    ).toBe(true);
    expect(
      await page.evaluate(({ checked }) => checked,
        await page.$('#checkbox-skill-2')),
    ).toBe(false);
  });
});
