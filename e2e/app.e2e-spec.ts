import { AngularYoutubePage } from './app.po';

describe('angular-youtube App', function() {
  let page: AngularYoutubePage;

  beforeEach(() => {
    page = new AngularYoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
