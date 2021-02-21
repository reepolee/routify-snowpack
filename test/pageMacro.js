const { chromium } = require('playwright')

const browserPromise = chromium.launch()

async function pageMacro(t, callback) {
  const browser = await browserPromise
  const page = await browser.newPage()
  page.setDefaultTimeout(1000)
  try {
    await callback(t, page)
  } finally {
    await page.close()
  }
}

module.exports = { pageMacro }
