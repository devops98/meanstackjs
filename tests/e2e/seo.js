module.exports = {
  tags: ['seo'],
  '52.211.38.127 Check SEO:blog list': function (browser) {
    browser
      .url(browser.launch_url + '/blog/list')
      .waitForElementVisible('body', 1000)
      .assert.visible('.blog-title')
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check SEO:404': function (browser) {
    browser
      .url(browser.launch_url + '404')
      .waitForElementVisible('body', 1000)
      .assert.title('Page Not Found')
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check SEO:500': function (browser) {
    browser
      .url(browser.launch_url + '500')
      .waitForElementVisible('body', 1000)
      .assert.title('Server Side Error')
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check SEO:signin': function (browser) {
    browser
      .url(browser.launch_url + 'signin')
      .waitForElementVisible('body', 1000)
      .assert.title('Signin to Mean Stack JS')
      .verify.visible('.container')
      .end()
  },
  '52.211.38.127 Check SEO:signup': function (browser) {
    browser
      .url(browser.launch_url + 'signup')
      .waitForElementVisible('body', 1000)
      .assert.title('Join Mean Stack JS')
      .verify.visible('.container')
      .end()
  }
}
