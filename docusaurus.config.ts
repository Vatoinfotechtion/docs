import { Config } from '@docusaurus/types';


const config: Config = {
  title: 'iARM Docs',
  tagline: 'Get Started With i-ARM Documentation',
  url: 'https://your-site.com', // Replace with your site's URL
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Infotechtion', 
  projectName: 'i-ARM Documentation', 

  i18n: {
    defaultLocale: 'en',
    locales: ['en'], // Add additional locales if required
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs', // Base path for docs
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Infotechtion/docs/edit/main/', 
        },
        blog: false, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    themes: ['@docusaurus/theme-mermaid'],
    navbar: {
      title: 'iARM Docs',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo-light.svg', 
        srcDark: 'img/logo-dark.svg', 
      },
      items: [
        { to: '/docs/overview', label: 'Overview', position: 'left' },
        { to: '/docs/data-explorer', label: 'Data Explorer', position: 'left' },
        { to: '/docs/databot/guide', label: 'DataBot', position: 'left' },
        {
          label: 'My Data',
          position: 'left', 
          to: '/docs/my-data', 
          items: [

            {
              label: 'Data Ingestion', 
              to: '/docs/my-data/data-ingestion',
            },
            
          ],
        },
        { to: '/docs/my-disposable-dashboard', label: 'My Disposable Dashboard', position: 'left' },
        { to: '/docs/workspace-gov', label: 'Workspace Gov', position: 'left' },
        { to: '/docs/prm', label: 'PRM', position: 'left' },
        { to: '/docs/audit-log-sync', label: 'Audit Log Sync', position: 'left' },
        { to: '/docs/reports', label: 'Reports', position: 'left' },
        { to: '/docs/administration', label: 'Administration', position: 'left' },

      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Overview', to: '/docs/overview' },
            { label: 'Data Explorer', to: '/docs/data-explorer' },
            { label: 'DataBot', to: '/docs/databot' },
            { label: 'My Data', to: '/docs/my-data' },
            { label: 'My Disposable Dashboard', to: '/docs/my-disposable-dashboard' },
            { label: 'Workspace Gov', to: '/docs/workspace-gov' },
            { label: 'PRM', to: '/docs/prm' },
            { label: 'Audit Log Sync', to: '/docs/audit-log-sync' },
            { label: 'Universal Retention Connector', to: '/docs/uniRetentionConn' },
            { label: 'Reports', to: '/docs/reports' },
            { label: 'Administration', to: '/docs/administration' },
          ],
        },
        {
          title: 'Sitemap',
          items: [
            { label: 'Service', href: 'https://www.infotechtion.com/services/'},
            { label: 'Solution', href: 'https://www.infotechtion.com/solutions/'},
            { label: 'Success Stories', href: 'https://infotechtion.com/success-stories/'}
          ]
        },
        {
          title: 'Learn More',
          items: [
            { label: 'Insights', href: 'https://www.infotechtion.com/insights/'},
            { label: 'Partners', href: 'https://www.infotechtion.com/?page_id=15'},
            { label: 'About Us', href: 'https://infotechtion.com/about/'}
          ]
        },
        {
          title: 'Contact',
          items: [
            { label: 'contact@infotechtion.com', href: '#'},
            { label: 'Privacy Policy', href: 'https://infotechtion.com/privacy-policy'},
            { label: 'Copyright Statements', href: 'https://infotechtion.com/copyright-statement/'}
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Infotechtion.`,
    },
  },
  
};

export default config;
