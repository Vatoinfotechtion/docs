import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Add your sidebars here
  recordsLifecycleSidebar: [
    {
      type: 'category',
      label: 'Records Lifecycle',
      link: {
        type: 'doc',
        id: 'records-lifecycle/Overview', 
      },
      items: [
        'records-lifecycle/Overview',
        'records-lifecycle/Getstarted',
        'records-lifecycle/Usermanual',
        'records-lifecycle/FAQ',
      ],
    }
  ],
  dataDiscoverySidebar: [
    {
      type: 'category',
      label: 'Data Discovery',
      link: {
        type: 'doc',
        id: 'data-discovery/Overview', 
      },
      items: [
        'data-discovery/Overview',
        'data-discovery/Getstarted',
        'data-discovery/Usermanual',
        'data-discovery/FAQ',
      ],
    }
  ],
  digitalWorkspaceSidebar: [
    {
      type: 'category',
      label: 'Digital Workspace',
      link: {
        type: 'doc',
        id: 'digital-workspace/Overview', 
      },
      items: [
        'digital-workspace/Overview',
        'digital-workspace/Getstarted',
        'digital-workspace/Usermanual',
        'digital-workspace/FAQ',
      ],
    }
  ],
  aigovernanceSidebar: [
    {
      type: 'category',
      label: 'AI Governance',
      link: {
        type: 'doc',
        id: 'ai-governance/guide', 
      },
      items: [
        'ai-governance/guide',
        'ai-governance/privacy',
      ],
    }
  ],
  techDocsSidebar: [
    {
      type: 'category',
      label: 'Technical Documentation',
      link: {
        type: 'doc',
        id: 'tech-docs/Overview', 
      },
      items: [
        'tech-docs/Overview',
        'tech-docs/Architecture',
        {
        type: 'doc',
        id: 'tech-docs/DBSchema',
        label: 'i-ARM DB Schema',
      },
        'tech-docs/Targetoperatingsystem',
        'tech-docs/ConfigurationDesign',
        {
    type: 'doc',
    id: 'tech-docs/DeploymentGuide',
    label: 'Deployment Guide',
  },
      ],
    }
  ],
  productOverviewSidebar: [
    {
      type: 'category',
      label: 'Product Overview',
      link: {
        type: 'doc',
        id: 'product-overview/Overview', 
      },
      items: [
        'product-overview/Overview',
        'product-overview/Usecase',
        'product-overview/FAQ',
      ],
    }
  ],
  
};

export default sidebars;
