module.exports = {
  tags: ['general'],
  '52.211.38.127 Check:page': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check:admin': function (browser) {
    browser
      .url(browser.launch_url + '/admin')
      .waitForElementVisible('body', 1000)
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check:blog list': function (browser) {
    browser
      .url(browser.launch_url + '/blog/list')
      .waitForElementVisible('body', 1000)
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check:404': function (browser) {
    browser
      .url(browser.launch_url + '404')
      .waitForElementVisible('body', 1000)
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check:500': function (browser) {
    browser
      .url(browser.launch_url + '500')
      .waitForElementVisible('body', 1000)
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check:signin': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 1000)
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check:signup': function (browser) {
    browser
      .url(browser.launch_url + 'signup')
      .waitForElementVisible('body', 1000)
      .verify.visible('.container')
      .end()
  }
}
