import { JSDOM } from 'jsdom';
import fs from 'fs';

const browser = (url = './test/unit/__mocks__/index.html') => {
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  global.document.body.innerHTML = fs.readFileSync(url).toString();
};

export default browser;
