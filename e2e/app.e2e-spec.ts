import { YolobroloNg2SvccPage } from './app.po';

describe('yolobrolo-ng2-svcc App', function() {
  let page: YolobroloNg2SvccPage;

  beforeEach(() => {
    page = new YolobroloNg2SvccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
