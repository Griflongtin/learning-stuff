import { LearningStuffPage } from './app.po';

describe('learning-stuff App', function() {
  let page: LearningStuffPage;

  beforeEach(() => {
    page = new LearningStuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
