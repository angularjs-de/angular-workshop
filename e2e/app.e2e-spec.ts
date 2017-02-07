import { AngularWorkshopPage } from './app.po';

describe('angular-workshop App', function() {
  let page: AngularWorkshopPage;

  beforeEach(() => {
    page = new AngularWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
