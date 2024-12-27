import { Config } from '@docusaurus/types';


const config: Config = {
  title: 'i-ARM Docs',
  tagline: 'Take Control with AI driven security, compliance and governance of your data.',
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
      title: 'i-ARM Docs',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo-light.svg', 
        srcDark: 'img/logo-dark.svg', 
      },
      items: [
        { to: 'docs/records-lifecycle/overview', label: 'Records Lifecycle', position: 'left' },
        { to: '/docs/data-discovery/overview', label: 'Data Discovery', position: 'left' },
        { to: '/docs/digital-workspace/overview', label: 'Digital Workspace', position: 'left' },
        { to: '/docs/ai-governance/guide', label: 'AI Governance', position: 'left' },

        // create nested navbar using following snippit
        // {
        //   label: 'My Data',
        //   position: 'left', 
        //   to: '/docs/my-data', 
        //   items: [

        //     {
        //       label: 'Data Ingestion', 
        //       to: '/docs/my-data/data-ingestion',
        //     },
            
        //   ],
        // },

      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Records Lifecycle', to: '/docs/records-lifecycle' },
            { label: 'Data Discovery And Security', to: '/docs/data-discovery' },
            { label: 'Digital WorkSpace Governance', to: '/docs/digital-workspace' },
            { label: 'AI Governance', to: '/docs/ai-governance' },
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
