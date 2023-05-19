import type { Options } from '@wdio/types';
import { join } from 'node:path';

export const config: Options.Testrunner = {
  injectGlobals: false,
  port: 4723,
  specs: ['./specs/**/*.ts'],
  maxInstances: 1,
  capabilities: [], // Placeholder that is overwritten by specific platform configurations.
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    ['appium', {
      logPath: join(process.cwd(), './logs'),
      args: {
        allowCors: true,
        localTimezone: true,
        logNoColors: true,
        logTimestamp: true
      }
    }]
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 1000 * 60 * 5
  },
}
