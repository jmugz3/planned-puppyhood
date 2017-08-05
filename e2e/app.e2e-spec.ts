import { Pupper2doggoPage } from './app.po';

describe('pupper2doggo App', () => {
  let page: Pupper2doggoPage;

  beforeEach(() => {
    page = new Pupper2doggoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
