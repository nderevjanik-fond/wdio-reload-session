import { driver, expect } from '@wdio/globals';
import { describe, it } from 'mocha';

describe('wdio reload session', function () {
  it('should create new sessions ids', async function () {
    const sessionIdA = driver.sessionId;
    await driver.reloadSession();
    const sessionIdB = driver.sessionId;

    expect(sessionIdA).not.toEqual(sessionIdB);
  });
});
