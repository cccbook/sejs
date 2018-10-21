const ok = require('assert').ok
const app = require('./app');
const puppeteer = require('puppeteer');
var browser, page

const opts = {
  // headless: false,
  slowMo: 100,
  timeout: 10000
};

describe('helloAjax', function() {
  before (async function () {
    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
  });
  after(function() {
    browser.close();
    app.close();
  });

  describe('puppeteer', function() {
    it('GET / should see fetchReadme()"', async function() {
      await page.goto('http://localhost:3000', {waitUntil: 'domcontentloaded'})
      // let html = await page.evaluate(() => document.body.innerHTML)
      let html = await page.content()
      ok(html.indexOf('fetchReadme()') >= 0)
    })
    it('click fetchReadme() should see helloAjax"', async function() {
      let button = await page.$('#fetchReadme');
      await button.click()
      let text = await page.evaluate(() => document.querySelector('#output').textContent)
      ok(text.indexOf('helloAjax') >= 0)
    })
    it('click fetchJson() should see ccckmit@gmail.com"', async function() {
      // let button = await page.$('#fetchJson');
      // await button.click()
      await page.click('#fetchJson')
      let text = await page.evaluate(() => document.querySelector('#output').textContent)
      ok(text.indexOf('ccckmit@gmail.com') >= 0)
    })
  })
})
