import { config } from "./wdio.shared.conf";

config.capabilities = [
  {
    platformName: 'macOS',
    browserName: 'chrome',
    'appium:automationName': 'Chromium',
  }
];

exports.config = config;
