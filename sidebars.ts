import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  // Custom sidebar for "Overview" with a specific order
  overviewSidebar: [
    {
      type: 'category',
      label: 'Overview',
      link: {
        type: 'doc',
        id: 'overview/overview', // Default landing page for "Overview"
      },
      items: [
        'overview/detailed-introduction', // Detailed Intro
        'overview/glossary-taxonomy', // Glossary / Taxonomy
        'overview/deployment-requirements', // Deployment Requirements
        'overview/troubleshooting-faq', // Troubleshooting / FAQ
      ],
    },
  ],
  dataExplorerSidebar: [
    {
      type: 'category',
      label: 'Data Explorer',
      link: {
        type: 'doc',
        id: 'data-explorer/index', // Default landing page for "Data Explorer"
      },
      items: [
        // 'data-explorer/detailed-intro',
        // 'data-explorer/glossary-taxonomy',
        // 'data-explorer/deployment-requirements',
        // 'data-explorer/troubleshooting-faq',
        'data-explorer/overview'
      ],
    },
  ],
  myDataSidebar: [
    {
      type: 'category',
      label: 'My Data',
      link: {
        type: 'doc',
        id: 'my-data/index', // Default landing page for "My Data"
      },
      items: [
        'my-data/overview',
        // 'my-data/detailed-intro',
        // 'my-data/glossary-taxonomy',
        // 'my-data/deployment-requirements',
        // 'my-data/troubleshooting-faq',
      ],
    },
  ],
  dataIngestionSidebar: [
    {
      type: 'category',
      label: 'Data Ingestion',
      items: [
        'my-data/data-ingestion',
        'my-data/sharepoint',
      ],
    },
  ],
  myDisposableDashboardSidebar: [
    {
      type: 'category',
      label: 'My Disposable Dashboard',
      link: {
        type: 'doc',
        id: 'my-disposable-dashboard/index',
      },
      items: [
        'my-disposable-dashboard/overview'
        // 'my-disposable-dashboard/detailed-intro',
        // 'my-disposable-dashboard/glossary-taxonomy',
        // 'my-disposable-dashboard/deployment-requirements',
        // 'my-disposable-dashboard/troubleshooting-faq',
      ],
    },
  ],
  workspaceGovSidebar: [
    {
      type: 'category',
      label: 'Workspace Gov',
      link: {
        type: 'doc',
        id: 'workspace-gov/index',
      },
      items: [
        'workspace-gov/overview'
        // 'workspace-gov/detailed-intro',
        // 'workspace-gov/glossary-taxonomy',
        // 'workspace-gov/deployment-requirements',
        // 'workspace-gov/troubleshooting-faq',
      ],
    },
  ],
  prmSidebar: [
    {
      type: 'category',
      label: 'PRM',
      link: {
        type: 'doc',
        id: 'prm/index',
      },
      items: [
        'prm/overview'
        // 'prm/detailed-intro',
        // 'prm/glossary-taxonomy',
        // 'prm/deployment-requirements',
        // 'prm/troubleshooting-faq',
      ],
    },
  ],
  auditLogSyncSidebar: [
    {
      type: 'category',
      label: 'Audit Log Sync',
      link: {
        type: 'doc',
        id: 'audit-log-sync/index',
      },
      items: [
        'audit-log-sync/overview'
        // 'audit-log-sync/detailed-intro',
        // 'audit-log-sync/glossary-taxonomy',
        // 'audit-log-sync/deployment-requirements',
        // 'audit-log-sync/troubleshooting-faq',
      ],
    },
  ],
  universalRententionConnectorSidebar: [
    {
      type: 'category',
      label: 'Universal Retention Connector',
      link: {
        type: 'doc',
        id: 'uniretentionconn/index',
      },
      items: [
        'uniretentionconn/overview'
      ],
    },
  ],
  reportsSidebar: [
    {
      type: 'category',
      label: 'Reports',
      link: {
        type: 'doc',
        id: 'reports/index',
      },
      items: [
        'reports/overview'
        // 'reports/detailed-intro',
        // 'reports/glossary-taxonomy',
        // 'reports/deployment-requirements',
        // 'reports/troubleshooting-faq',
      ],
    },
  ],
  administrationSidebar: [
    {
      type: 'category',
      label: 'Administration',
      link: {
        type: 'doc',
        id: 'administration/index',
      },
      items: [
        // 'administration/detailed-intro',
        // 'administration/glossary-taxonomy',
        // 'administration/deployment-requirements',
        // 'administration/troubleshooting-faq',
        'administration/overview'
      ],
    },
  ],
};

export default sidebars;
