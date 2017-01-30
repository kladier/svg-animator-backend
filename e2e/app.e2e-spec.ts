import { TestingBackendPage } from './app.po';

describe('testing-backend App', function() {
  let page: TestingBackendPage;

  beforeEach(() => {
    page = new TestingBackendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
