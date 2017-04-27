import { MwFirstAppPage } from './app.po';

describe('mw-first-app App', () => {
  let page: MwFirstAppPage;

  beforeEach(() => {
    page = new MwFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
