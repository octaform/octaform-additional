import { JSDOM } from 'jsdom';
import fs from 'fs';

const browser = (url = './test/unit/__mocks__/index.html') => {
  global.document = new JSDOM('<!doctype html><html><body></body></html>');
  document.body.innerHTML = fs.readFileSync(url).toString();
};

export default browser;
