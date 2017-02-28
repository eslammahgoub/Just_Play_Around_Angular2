import { Angular2AirDatepickerPage } from './app.po';

describe('angular2-air-datepicker App', () => {
  let page: Angular2AirDatepickerPage;

  beforeEach(() => {
    page = new Angular2AirDatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
