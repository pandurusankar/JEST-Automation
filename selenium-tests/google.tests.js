const webdriver = require('selenium-webdriver');
const {until} = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

const capabilities = {
  'build': 'jest-google-Single',
  'browserName': 'chrome',
  'version':'72.0',
  'platform': 'WIN10',
  'video': true,
  'network': true,
  'console': true,
  'visual': true
};

const getElementById = async (driver, id, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByName = async (driver, name, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.name(name)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByXpath = async (driver, xpath, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

describe('webdriver', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder()      
      .withCapabilities(capabilities)
      .build();

    // eslint-disable-next-line no-undef
    await driver.get(
      `https://www.google.com/`,
    );
  }, 10000);

  afterAll(async () => {
    await driver.quit();
  }, 15000);

  test(
      'test',()=>{
      console.log("Hello test");

      expect("Yey, Let's add it to list").toEqual("Yey, Let's add it to list");
      
    },
    10000,
  );
});