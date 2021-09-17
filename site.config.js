module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'c164b4b63d234db5ac0c89938c3ddd89',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Iatrology',
  domain: 'iatrology.net',
  author: 'CoCo',

  // open graph metadata (optional)
  description: '一个医学生的博客！',
  socialImageTitle: 'CoCo',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  github: 'MHC-I',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: MHC-I/nextjs-notion-starter-kit,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,
  
  // whether or not to include notion IDs as suffixes in URLs
  // NOTE: this will make incremental SSG much faster with the downside of
  // having less pretty URLs
  includeNotionIdInUrls: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
