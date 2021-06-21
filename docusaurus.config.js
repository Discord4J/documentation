module.exports = {
  title: 'Discord4J',
  tagline:
    'A reactive, modular, and performant REST/WS wrapper for the official Discord Bot API, built for the JVM ecosystem.',
  url: 'https://discord4j.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Discord4J',
  projectName: 'Discord4J',
  plugins: ['docusaurus-tailwindcss-loader'],
  themeConfig: {
    algolia: {
      apiKey: '873fa3c2d55bb5c0e2ad7060b6b335b2',
      indexName: 'discord4j',
      contextualSearch: false,
    },
    navbar: {
      title: 'Discord4J',
      logo: {
        alt: 'Discord4J Logo',
        src: 'img/logo.svg',
      },
      // items: [
      //   {
      //     to: 'docs/',
      //     activeBasePath: 'docs',
      //     label: 'Docs',
      //     position: 'left',
      //   },
      //   { to: 'blog', label: 'Blog', position: 'left' },
      //   {
      //     href: 'https://github.com/Discord4J/Discord4J',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    prism: {
      theme: require('./themes/darcula'),
      additionalLanguages: ['groovy', 'scala']
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Discord4J Docs',
              to: '/',
            },
            {
              label: 'Javadocs',
              href: 'https://javadoc.io/doc/com.discord4j/discord4j-core',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/Discord4J/Discord4J',
            },
            {
              label: 'Reactor Reference Guide',
              href: 'https://projectreactor.io/docs/core/release/reference/',
            },
            {
              label: 'Discord API',
              href: 'https://discord.com/developers/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/d4j',
            },
            {
              html: `
              <a href="https://www.netlify.com">
                <img
                  src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
                  alt="Deploys by Netlify"
                />
              </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © 2015 - ${new Date().getFullYear()} Discord4J - Licensed under LGPLv3.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Discord4J/documentation/edit/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/Discord4J/documentation/edit/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
