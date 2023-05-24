import { config } from "./wdio.shared.conf";

config.capabilities = [
  {
    maxInstances: 1,
    platformName: 'Android',
    'appium:newCommandTimeout': 60 * 5,
    'appium:deviceName': 'Android',
    'appium:avd': 'Pixel_4a_Android_12_API_31',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.android.contacts',
    'appium:appActivity': 'com.android.contacts.activities.PeopleActivity',
  }
];

exports.config = config;
