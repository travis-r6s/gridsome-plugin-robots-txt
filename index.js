const path = require('path')
const url = require( 'url' )
const fs = require('fs')
const generateRobotsTxt = require('generate-robotstxt')

module.exports = (api, options) => {
  api.afterBuild(async ({ queue, config }) => {
    if (!config.siteUrl && !options.host) {
      throw new Error(`Robots Txt plugin is missing a required siteUrl or host config.`)
    }

    let { host, sitemap, policy, output } = options

    if (!host) host = config.siteUrl
    if (!sitemap) sitemap = url.resolve(host, 'sitemap.xml')

    const robotsTxt = await generateRobotsTxt({ policy, sitemap, host })
    const filename = path.join(config.outputDir, options.output)

    return fs.writeFileSync(filename, robotsTxt)
  })
}

module.exports.defaultOptions = () => ({
  host: '',
  sitemap: '',
  policy: [],
  output: 'robots.txt'
})
