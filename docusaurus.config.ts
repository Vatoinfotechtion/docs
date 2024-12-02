import { Config } from '@docusaurus/types';


const config: Config = {
  title: 'iARM Docs',
  tagline: 'Get Started With i-ARM Documentation',
  url: 'https://your-site.com', // Replace with your site's URL
  baseUrl: '/', // Use '/' for local or hosted root-level setups
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'YourOrg', // Replace with your GitHub org/user name
  projectName: 'docusaurus-site', // Replace with your repo name

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
        blog: false, // Disable the blog if not needed
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
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Overview', to: '/docs/overview' },
            { label: 'Data Explorer', to: '/docs/data-explorer' },
            { label: 'My Data', to: '/docs/my-data' },
            { label: 'My Disposable Dashboard', to: '/docs/my-disposable-dashboard' },
            { label: 'Workspace Gov', to: '/docs/workspace-gov' },
            { label: 'PRM', to: '/docs/prm' },
            { label: 'Audit Log Sync', to: '/docs/audit-log-sync' },
            { label: 'Universal Retention Connector', to: '/uniretentionconn' },
            { label: 'Reports', to: '/reports' },
            { label: 'Administration', to: '/administration' },
          ],
        },
        {
          title: 'Sitemap',
          items: [
            { label: 'Service', href: '#'},
            { label: 'Solution', href: '#'},
            { label: 'Success Stories', href: '#'}
          ]
        },
        {
          title: 'Learn More',
          items: [
            { label: 'Insights', href: '#'},
            { label: 'Partners', href: '#'},
            { label: 'About Us', href: '#'}
          ]
        },
        {
          title: 'Contact',
          items: [
            { label: 'Contact Us', href: '#'},
            { label: 'Privacy Policy', href: '#'},
            { label: 'Copyright Statements', href: '#'}
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Infotechtion. Built with Docusaurus.`,
    },
  },
};

export default config;
