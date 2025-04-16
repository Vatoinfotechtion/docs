# Target Operating Model
A target operating model (TOM) defines how a business or organization operates to achieve its goals and deliver value. It includes governance structures, processes, systems, skills, and performance metrics to ensure efficiency, security, and compliance. 
The i-ARM operating model will cover Shared Responsibility Model, Skills Requirements, Microsoft Certifications Recommendations, Workflow to Manage Product Feature Release and Hotfixes, Service Request Management, and Failover Modes and Possible Resolutions. These ensure clarity in roles, essential skills, structured workflows, efficient service request handling, and robust failover strategies for operational continuity.

## Shared Responsibility Model
The shared responsibility model for i-ARM delineates the responsibilities between the cloud service provider (Microsoft Azure) and the customer (i-ARM). The model ensures clarity in roles to maintain security, compliance, and operational efficiency. [i-ARM_TOM_Activities_Sample.xlsx](TargetoperatingsystemImages/i-ARM_TOM_Activities_Sample.xlsx)

| Responsibility Area | Infotechtion i-ARM Support | Consumer Cloud Support | Consumer Modern Workplace | Consumer Governance & Compliance |
| --- | --- | --- | --- | --- |
| Azure Management Group and Subscription Organization | Not Applicable | Management and Support responsibility | Not Applicable | Not Applicable |
| Azure landing zone | Review policies and rules, advise on any changes to enable i-ARM deployment. | Managing policies and rules for the security of landing zone. | Not Applicable | Not Applicable |
| i-ARM subscription Management | Provide subscription configurations. | Configuration and Management of subscription. | Not Applicable | Not Applicable |
| i-ARM resource Group Management | Configuration and Management of i-ARM services and binaries deployed in the resource group. | Configuration and management of shared services and connectivity. | Not Applicable | Not Applicable |
| Connectivity Subscription | • Review existing or new connectivity rules to assess impact to i-ARM services. • Provide Azure firewall rules required for connecting i-ARM service in/outbound connection • Investigate and report connectivity issues impacting i-ARM services as reported via support ticket. | • Configure firewall rules, VNet peering • Troubleshoot and Resolve connectivity issues impacting i-ARM services. | • Investigate and report connectivity issues impacting i-ARM services to i-ARM support and Cloud support. | Not Applicable |
| Network Infrastructure | Provide rules and exceptions required to be configured to allow communication between i-ARM services and endpoints. | Ensuring network connectivity and security. Configuring network settings and VPNs. | • Investigate and report connectivity issues impacting i-ARM services to i-ARM support and Cloud support. | Not Applicable |
| Virtual Machines (Data Gateway) | Managing i-ARM component configuration on VMs. | IAC template based new VM deployment | Not Applicable | Not Applicable |
| Identity and Access | Provide documentation of identities required by i-ARM. | Creation and management of i-ARM specific identities and RBAC. | Authorise use of RBAC and services requested for access by i-ARM. | Not Applicable |
| Security Monitoring | Enable i-ARM services integration with Azure Monitor service associated with i-ARM resource group. | Integrate Azure Monitor with Management subscription for monitoring. | Regular review i-ARM resource group Azure Monitor for critical errors and report to i-ARM support. | Not Applicable |
| Microsoft Purview | Configure and monitor Sync of i-ARM with Microsoft Purview labels and policies, disposition events and audit log via API connectivity. | Not Applicable | Coordinate issue resolution with Microsoft related to Microsoft services impacting the i-ARM service. | Review and report issues related to i-ARM integration with MS Purview. |
| Microsoft365 Endpoints | Support investigation and qualification of an issue attributed to i-ARM vs Microsoft service. | Not Applicable | Coordinate issue resolution with Microsoft related to Microsoft services impacting the i-ARM service. | Not Applicable. |
| Managed / Unmanaged Devices / Users | Not Applicable | Not Applicable | Investigate and assign responsibility for issues related to end user computing. | Not Applicable. |
| Information and Data | Not Applicable | Not Applicable | Data integrity and availability in M365 platform. | Data classification policies and enforcement. |

## Skills Requirements
The following skills are essential for the support staff managing the Azure subscription for i-ARM:
 * Cloud Architecture: Understanding of cloud infrastructure design and best practices.
 * Security Management: Knowledge of security protocols, identity management, and data protection.
 * Networking: Proficiency in configuring and managing virtual networks, VPNs, and firewalls.
 * Automation and Scripting: Skills in PowerShell, Azure CLI, and other automation tools.
 * Monitoring and Troubleshooting: Ability to use Azure Monitor, Log Analytics, and troubleshooting tools.
 * Compliance and Governance: Understanding of compliance requirements and governance frameworks.
 * Microsoft Purview: Understanding of various features of Data lifecycle, Records Management, Audit and eDiscovery.
 * Data Security: Knowledge of security best practices and compliance requirements for cloud environments. Experience with Azure Security Center, Azure Policy, and identity and access management (IAM).

## Technology Components
## Technology Components
i-ARM application utilizes the below key technology components:

### Azure Governance
- **Subscription**: Logical container that organizes and manages Azure resources, providing a way to control access, manage billing, and apply policies.
- **Resource group**: Container that holds related Azure resources.
- **Subscription Resource Providers**: Includes providers like Microsoft.Network, Microsoft.Sql, Microsoft.Storage, etc.

### Entra (Azure Active Directory)
- **Application Registration**: Registers applications for secure access and authentication.
- **Service/User Accounts**: Manages service principals and user accounts for various operations.
- **RBAC Roles**: Role-Based Access Control for managing access to Azure resources.

### Networking
- **Virtual Network (VNet)**: Ensures secure communication among resources.
- **User Defined Route Tables**: Customizable routing rules for traffic management.
- **Network Security Groups (NSGs)**: Manages inbound and outbound traffic at the subnet and VM level.
- **Subnets**: Isolates and secures different resources within the VNet.

### Key Vault
- **Vault**: Secure storage for secrets, keys, and certificates.

### Web and App Services
- **App Service Plan**: Manages compute resources for web and function apps.
- **Function Apps**: Serverless functions for various business logic and workflows.
- **Storage Accounts**: Secure storage integrated with private endpoints.

### Database
- **Azure SQL Database**: Backend data store with private endpoint for secure access.

### Azure Monitoring
- **Log Analytics Workspace**: Central repository for aggregating and analyzing log data.

### Data Gateway
- **On-Premises Data Gateway**: Facilitates secure connections between external SaaS offerings and the SQL database.

### Security
- **Consumer Firewall Access**: Security policies and firewall rules for enhanced protection.

### Power Platform
- **Power BI**: Aggregates and visualizes data from various resources.
- **Power Automate**: Automates and orchestrates workflows.

### SharePoint Webparts
- **PRM SPFx**: Manages physical records.
- **PnP Search SPFx**: Enhanced search and filtering capabilities.
- **Modern Script Editor SPFx**: Custom styling for enhanced user experience.

### Azure Container Instances
- **Azure Container Registry**: Stores and manages container images.
- **Azure Container Instance**: Runs containers in the cloud without managing infrastructure.

### Azure DevOps
- **Repository**: Version control and CI/CD for i-ARM services.

## Microsoft Certifications 
To ensure the support staff is well-equipped to manage the Azure subscription, the following Microsoft certifications are recommended:

- **Microsoft Certified: Azure Fundamentals (AZ-900)**
- **Microsoft Certified: Azure Administrator Associate (AZ-104)**
- **Microsoft Certified: Azure Security Engineer Associate (AZ-500)**
- **Microsoft Certified: Azure Solutions Architect Expert (AZ-305)**
- **Microsoft Certified: DevOps Engineer Expert (AZ-400)**
- **Microsoft Certified: Information Protection & Governance (SC-400)**

## Workflow to Manage Product Feature Release and Hotfixes
### Discovery & Planning Phase
Define the scope, objectives, and timeline for the new feature. Key activities in this phase are:
- Define the problem
- Understanding users and their context
- Understanding constraints
- Design decisions to support the planned improvements
- KPI and Metrics to measure success

### Alpha Phase
Alpha is where different solutions are applied to the problems identified in scope during discovery. Solutions developed during Alpha phase are not available for public (consumer) to use, but Infotechtion reserves the right to demonstrate prototypes to consumers. Key activities in this phase are:
- **User Journey and Design**: Confirm the design, possible solutions and the riskiest assumptions to be validated.
- **Prototype Development**: Code and develop the new feature in a controlled environment focused on solving a whole problem.
- **Testing**: Develop testing plans linked to features and perform a proof-of-concept testing as per the i-ARM testing strategy.
- **Approval**: Obtain approval from Infotechtion Product architecture board and Product Owner to progress to Beta Phase.

### Beta Phase
The best solutions from the alpha phase are promoted for development and announced to customers via the product backlog communications including considerations for integrating with existing services and preparing for transition to live. Key activities in this phase are:
- **Consumer Research**: Finalize 'user journey' via consumer research informing the service integration with existing consumer infrastructure and service components.
- **Architecture and Design**: Convert the outcome of Alpha phase into an architecture and design integrated with existing product architecture, security and data model. The activity will define the development guidelines including functional and non-functional aspects of feature development.
- **Test Plan Development**: Enrich user stories with well-developed test plans in-line with the testing cycles and test suites.
- **Feature Development**: Convert the Alpha code into an enterprise code aligned with i-ARM architecture and secure software development standards including compliance with cybersecurity, privacy and legislative constraints.
- **Architecture Reviews**:
    - The way to deploy feature, proving integration without impacting existing use of i-ARM service
    - How feature developers have made feature secure
    - Considerations related to cookies, performance and impacts to data model
    - Managing the limits placed on i-ARM service by the technology stack and development toolchains
    - Use of open standards and common platforms
    - Feature availability, backup and disaster management
    - Repo approvals to enable a controlled progressing of feature through testing cycles
- **Testing**: Includes two sub phases
    - **Private Beta**: Documentation, deployment and testing of the developed features internally within Infotechtion as per the i-ARM testing strategy. Includes following stakeholders:
        - Internal product testing teams
        - Internal product deployment team
        - Wider i-ARM product delivery teams (internal and partners)
    - **Consumer Beta**: Release of the feature for testing by 'early adopter' consumer in an Infotechtion managed / Consumer managed non-production environment. Includes following stakeholders:
        - Private beta stakeholders
        - Consumer testing team
        - 3rd party testers verifying security, vulnerability, accessibility, performance and stability
- **Approval**: Obtain approval from Infotechtion Product architecture board and Product Owner including feedback from participating consumers to progress to Live Phase.

### Live Phase
A fully tested feature is ready for release into a consumer managed non-production and production environment. Key activities in this phase are:
- **Consumer Approval**: Based on the release notes which includes feature description, version, components, change impact, deployment instructions, test plan, functional, non-functional and security test results.
- **Deployment**: Deploy the feature to the non / & production environment using i-ARM DevOps CI/CD pipelines.
- **Monitoring**: Monitor the feature in production for any issues or performance metrics.
- **Feedback**: Collect feedback from users and stakeholders to ensure the feature meets expectations.
- **Transition to Operate**: Provide relevant feature documentation, knowledge articles to customer support teams and Infotechtion product support associated with the customer.

## Hotfix Workflow
### Hotfix Workflow
- **Issue Identification**: Detect and document the issue requiring a hotfix.
- **Impact Analysis**: Assess the impact of the issue on the system and users.
- **Development**: Develop the hotfix in a controlled environment.
- **Testing**: Conduct thorough testing to ensure the hotfix resolves the issue without introducing new problems.
- **Approval**: Obtain expedited approval from relevant stakeholders.
- **Deployment**: Deploy the hotfix to the production environment using CI/CD pipelines.
- **Verification**: Verify that the hotfix has successfully resolved the issue.
- **Documentation**: Document the issue, solution, and any lessons learned for future reference.

This target operating model ensures that i-ARM operates efficiently, maintains security, and delivers high-quality features and fixes to its users.

## i-ARM Support SLA
To ensure the highest level of service and operational efficiency, i-ARM commits to the following Service Level Agreement (SLA) for support:
The following incident categories will be generally supported in the product.

| Category | Impact | Description | Example |
| --- | --- | --- | --- |
| Critical | extensive / widespread | The Solution is unavailable or Materially Disrupted in its entirety, or a Core element / application of the Solution is unavailable to all users. | Failure: Infotechtion solution database corruption. Mitigation: Data recovery based on recovery point and time objectives agreed with customer. |
| High | significant / large | The Solution is unavailable or Materially Disrupted for 25 Users or greater, or a Core element / application of the Solution is unavailable to 25 users or greater, or a non-Core element of the Solution is unavailable for all users. | Failure: Physical records Management user interface not available to records new Physical record metadata. Mitigation: Leverage bulk import feature with IT support which can be used even when user interface is inaccessible. |
| Medium | moderate / limited | The Solution is unavailable or Materially Disrupted for fewer than 25 Users, or a Core element / application of the Solution is unavailable to fewer than 25 Users, or a non-Core element of the Solution is unavailable to 25 users or greater. | Failure: Advanced analytics dashboard is unavailable to Compliance managers / reviewers. Mitigation: Critical data can be exported in Excel with IT support. |
| Low | minor / localised | The Solution is unavailable or Materially Disrupted for an individual User, or a non-Core element of the Solution is unavailable for fewer than 25 Users. All other Incidents not falling within the descriptions of Critical, High or Medium above. | Failure: Universal retention connector unable to connect to Microsoft purview to detect and update retention changes. Mitigation: Use Fileplan import method to update allowed changes using a CSV. |

## Incident Service Level Agreement
Infotechtion is committed to resolve all production incidents and bring them to a stable state. The resolution time is the elapsed time between the fault being reported to Infotechtion support and either the Service returning to full operation or an agreed workaround being in place.
| Category | Response Target | Resolution Target | Applicable Hours* |
| --- | --- | --- | --- |
| Critical | 20 minutes | 4 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| High | 20 minutes | 8 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Medium | 3 hours | 29 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Low | 7 hours | 44 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |

\* Custom hours as per customer requirements to be agreed with additional costs.

An incident resolution is considered to have been achieved when the Service is returned to a condition where the Solution is delivering its full functionality. This may be achieved by a workaround without root-cause being established by agreement of the customer. 
If the Service is returned with ongoing minor disruption the severity will be downgraded to the appropriate severity level. A root-cause analysis will be carried out in line with the standard Problem Management processes. 

## Support Channels
- **Email Support**: Available 24/7 for all issues. Monitoring and response according to priority.
- **Phone Support**: Available for Critical and High Priority issues during business hours.
- **Ticketing System**: All issues must be logged through the ticketing system for tracking and escalation purposes.

## Escalation Process
- If an issue is not resolved within the specified resolution time, it will be escalated to the next support level.
- Critical Issues will be escalated immediately to senior management if unresolved within 2 hours of the initial response.

## Performance Metrics
- **First Contact Resolution Rate**: Target of 80% of issues resolved on first contact.
- **Customer Satisfaction**: Regular surveys to ensure a satisfaction rate of 90% or higher.
- **Uptime**: Target uptime of 99.9% for all critical services.

## Service Request Management
A service request is a process through which a customer can request changes to the product configurations and features already included in the service request agreement or through raising an additional change request. The following table provides the definition of service request categories:

| Request Category | Description |
| --- | --- |
| Standard Request | A request which is offered as standard part of the support model to all customers. These can be further identified by following priorities: |
| Non-standard Request | A request where there is no defined process or a request for completing standard requests. These often require additional effort and priced per request through a change management process. The exception to the above will be in scenarios where a non-standard request is already / agreed to be included in the product roadmap for delivery. In which case, the service request delivery will follow the standard product delivery roadmap. |

## Service Request Service Level Agreement
| Category     | Priority | Response Target | Resolution Target | Applicable Hours* |
|--------------|----------|-----------------|-------------------|-------------------|
| Standard     | Medium   | 4 hours         | 3 days            | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Standard     | Low      | 4 hours         | 5 days            | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Non Standard | Medium   | 4 hours         | 7 days**          | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Non Standard | Low      | 8 hours         | As per roadmap timeline, earliest the following quarter. | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |

\* Custom hours as per customer requirements to be agreed with additional costs.

\*\* Subject to the complexity of service request, these could require additional days. In such cases, the overall delivery can be split in sprints of 7 days. 

## Failover Modes and Possible Resolutions
Failover modes are predefined methods that ensure the continuity and availability of services during an unexpected system failure or maintenance event. These modes can include automatic failover, where systems switch to a backup without human intervention, and manual failover, which requires manual initiation. Understanding and agreeing upon failover modes is crucial in a target operating model because it guarantees that both service providers and customers have a clear plan to maintain operational efficiency, minimize downtime, and ensure business continuity, thereby solidifying the reliability and robustness of the IT infrastructure.

| Failover Mode | Description | Recommended Action | Cloud Support | i-ARM Support |
| --- | --- | --- | --- | --- |
| Automatic Failover | Automatic failover is supported at the zone level for Azure SQL Database and Storage Accounts, ensuring seamless continuity within an availability zone. For regional-level, i-ARM supports manual failover, enabling controlled recovery processes in the event of a broader regional outage. | Configure Azure SQL database and storage account with zone redundancy configurations for automatic failovers | R+A | C+I |
| Manual Failover | Manual failover requires human intervention to initiate the switch to a secondary region. | Set up manual failover procedures and runbooks, and ensure staff are trained on executing the failover to UK West in case of a failure in UK South. | R+A | C+I |
| Read-access Geo-redundant Storage (RA-GRS) | RA-GRS allows read access to the data in the secondary region while the primary region is operational. | Enable RA-GRS for storage accounts to allow read access from UK West when UK South is unavailable. Configure applications to use the secondary endpoint for read operations. | R+A | C+I |
| Geo-redundant Storage (GRS) | GRS replicates data to a secondary region, but access to the secondary region is only available during failover. | Use GRS to ensure data is replicated to UK West. Plan and practice failover procedures to switch access to the secondary region if UK South becomes unavailable. | R+A | C+I |

## Failure Modes and Possible Resolutions
i-ARM failure modes refer to the various ways in which i-ARM services can fail or malfunction. These can include issues such as network connectivity problems, virtual machine failures, identity and access problems, security breaches, data synchronization issues, service downtime, application errors, and backup and restore failures.

In the context of a target operating model (TOM), understanding and addressing software failure modes is crucial. A TOM defines how an organization operates to achieve its goals and deliver value, including governance structures, processes, systems, skills, and performance metrics. By identifying potential failure modes and establishing clear investigation and resolution strategies, organizations can ensure operational continuity, maintain security, and deliver high-quality services to their users.

> **Note:** These failure modes relate to possible issues after a successful deployment and validation of i-ARM in the customer environment.

| Failure Mode | Symptoms | Investigation Options | Possible Resolutions | Who to Contact for Support |
| --- | --- | --- | --- | --- |
| Network Connectivity Issues | i-ARM portal inaccessible from authorized devices. | Review Azure firewall and VNet peering configurations | Reconfigure firewall rules and VNet settings | Azure Cloud Support |
| Network Connectivity Issues | i-ARM portal loads but certain features or data does not load. | Review Azure firewall rules for ALL i-ARM API endpoints. | Update firewall rules to allow blocked API endpoints. | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Virtual Machine with Data gateway failure | Power BI reports are not loading after a successful sign-in | Check VM is online, Data gateway logs. | Re-configure Data gateway to allow Power BI access to i-ARM Azure SQL. | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Virtual Machine with Data gateway failure | No new items are displayed in 'my-disposal portal' as eligible for disposal for sites user reports items should be eligible for disposal review. | Check the VM is online Check the data gateway is configured as per i-ARM deployment guide Check Microsoft Purview Power automate flow logs for any failures Check i-ARM log analytics workspace for any application failures. | VM is online but missing configurations Power Automate unable to connect to Data Gateway Power automate did not trigger by Microsoft Purview Power Automate failed whilst updating i-ARM SQL update APIs | Primary: Cloud support to check VM and gateway Secondary: i-ARM support to check Microsoft Purview or i-ARM API issues. Finally: Microsoft Purview support for issues with Purview triggering Power Automate. |
| Identity and Access Problems | User successfully signed-in but unable to see any data in 'My Disposal' or Power BI reports. | Audit RBAC configurations and identity logs | Update RBAC roles, reset identities | Primary: Identity team for RBAC assignment Support: i-ARM Support |
| Security Breach or Alerts | Azure related cyber incident impacting ALL or some subscriptions. | Analyse Azure Security Center alerts and logs | Apply security patches, update security policies | Azure Cloud Support |
| Data Synchronization Issues | Record related activities are not captured in i-ARM audit for over 7 days, resulting in no new activity in Power Bi for past 7 days. | Verify Microsoft Purview sync status and API connections | Re-establish API connections, reconfigure sync | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Service Downtime or Degraded Performance | i-ARM portal takes more than 1 minute to load data. | Monitor Azure Monitor and Log Analytics for anomalies. | Scale resources, optimize configurations | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Application Errors | Azure log analytics captures critical application error. Authorized users report activities / decisions are not saved in i-ARM | Check application logs and error reports in i-ARM log analytics | A hotfix is required or affected service component requires re-deployment. | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Backup and Restore Failures | i-ARM portal / data / services are inaccessible after a failover test. | Review backup logs and recovery points | Re-initiate backup, restore from latest recovery point | Azure Cloud Support |

## Known  Limits Related to i-ARM and Microsoft Purview Integration

| Limit | Status | Owner | Planned Resolution | Workarounds |
| --- | --- | --- | --- | --- |
| Delays in master data sync between Microsoft Purview and i-ARM can be up to 14 days. | In Progress | Microsoft | Microsoft engineering has acknowledged the delays related to Purview notifications when items expire. A resolution to ALL Microsoft tenants is tracked for delivery in December 2024. | Infotechtion / Support team can perform manual synchronizations. |
| Limited support for special characters in File names needs extraction for archiving. | In Progress | Infotechtion | Expansion of special character support planned in Q1 2025 release. | Report failures to Infotechtion for a hotfix for identified special characters. |
| Delay in Record activities registration with Unified Purview Audit logs, impacting synchronization between i-ARM and Purview. | Known Limit | Microsoft | Customer advised to raise a ticket with Microsoft if audit entries are delayed. | Wait for audit to catchup, the delays are often due to M365 prioritization of higher priority services. |
| File move to another library or site after disposal review can result in unsuccessful dispositions by MS Purview | Known Limit | Microsoft | Wait for the file to come up again for disposition review. | Not Required, system will automatically pick up the file for a new disposition review cycle. |
| My Disposal dashboard allows Site level filters only when reviewing items for disposal or archival. | In Progress | Infotechtion | Scheduled feature update in Q1 2025 feature release. | Use other filter options available to find specific files. |
| Extension of records retention in bulk via selection of multiple items extend the retention for the first record retention in the selection, while all other record extension requests are ignored. | In Progress | Infotechtion | Scheduled Hotfix in Q1 2025 feature release. | Extend records one at a time by selecting a single record and select the retention extension option. |
| Delay by Microsoft Purview in performing the actual compliance actions on the SharePoint records, such as Compliance Delete or Compliance Relabel, after a review has been completed. | Known Limit | Microsoft | Customer advised to raise a ticket with Microsoft if compliance actions are delayed by over 14 days from confirming disposal decisions in i-ARM interface. | Wait for Microsoft Purview to catchup with the disposition backlog across the tenant. |
