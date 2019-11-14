# gridsome-plugin-robots-txt

> Generate a robots.txt for your site

## Installation

`yarn add gridsome-plugin-robots-txt`

## Usage

`gridsome.config.js`
```js
module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://my-awesome-fast-site.com',
  plugins: [
    'gridsome-plugin-robots-txt'
  ]
}
```

## Configuration

The default config options will take `siteUrl` as host, and assume a sitemap is hosted at `${siteUrl}/sitemap.xml`.
You can change these options, as well as adding policies:

```js
{
  use: 'gridsome-plugin-robots-txt',
  options: {
    host: 'https://my-awesome-fast-site.com',
    sitemap: 'https://my-awesome-fast-site.com/configs/sitemap.xml',
    policy: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/search",
        crawlDelay: 2
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/search",
        crawlDelay: 10,
        cleanParam: "ref /articles/"
      }
    ]
  }
}
```
