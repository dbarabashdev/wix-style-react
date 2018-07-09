import eyes from 'eyes.it';
import {getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';

describe('Icons', () => {
  const storyUrl = getStoryUrl('1. Foundation', '1.4 Icons');
  eyes.it('should show all icons', async () => {
    browser.get(storyUrl);
    await waitForVisibilityOf($('[data-hook="new-icons"]'), 'Cannot find all icons');
  });
});
