/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://webrain.pro',
    generateRobotsTxt: true, // (optional)
    changefreq: 'daily',
    // ...other options
  }