import { config } from "./wdio.shared.conf";

config.capabilities = [
  {
    maxInstances: 1,
    platformName: 'iOS',
    'appium:newCommandTimeout': 60 * 5,
    'appium:deviceName': 'iPhone 11',
    'appium:platformVersion': '13.7',
    'appium:automationName': 'XCUITest',
    'appium:bundleId': 'com.apple.MobileAddressBook'
  }
];

exports.config = config;
