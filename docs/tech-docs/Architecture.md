
# Introduction

This document provides a comprehensive architectural overview of i-ARM, a data and records management solution designed to enhance data governance, compliance, and seamless integration with Microsoft Purview. It outlines the architectural principles, key components, and deployment considerations required for successful implementation in the client's Azure environment.

The i-ARM solution supports both **structured and unstructured data sources**, enabling organizations to manage and govern their data across various cloud platforms including **Azure, AWS, Microsoft 365 and On-Premises environments**. By leveraging advanced purview capabilities, i-ARM provides organizations with complete visibility and control over their data assets, ensuring alignment with regulatory and compliance requirements while integrating seamlessly into existing IT ecosystems.

## Purpose of the document

This document serves as the authoritative reference for the design and implementation of the i-ARM solution. It provides a structured approach to defining the architecture, ensuring consistency, scalability, and security across all components.

**Key objectives of this document include:**

*   Defining the architectural framework, guiding principles, and key design decisions.
*   Establishing a common understanding among stakeholders, including solution architects, cloud infrastructure teams, and governance bodies.
*   Outlining the high-level requirements, technical dependencies, and operational considerations.
*   Acting as a living document, updated throughout the project lifecycle - from initial design approval to final implementation and ongoing maintenance.

## Governance

This document will be reviewed and approved by relevant architecture and governance teams, ensuring alignment with organizational policies and compliance standards. Updates will be incorporated at various project stages, including:

*   **Review & Approval:** Subject to validation by internal Architecture Review Boards (ARBs) or equivalent governance bodies.
*   **Final Implementation:** Documented as an “As-Built” reference after deployment.
*   **Ongoing Maintenance:** Periodically updated to reflect enhancements, security patches, and operational changes.

By maintaining this document as a central reference, stakeholders can ensure that the i-ARM solution remains aligned with evolving business needs and technological advancements.

# Design Guidelines and Considerations

This section outlines the key principles, assumptions, constraints, and security considerations that guide the design and implementation of the i-ARM solution. These guidelines ensure scalability, security, compliance, and seamless integration within the client’s technology landscape.

## General Overview

The design of i-ARM follows a **modular, scalable, and cloud-native approach**, ensuring:

*   **Seamless Integration** – The solution is designed to integrate with **Microsoft 365, Azure, and On-Premises** environments.
*   **Scalability & Performance** – The architecture supports **large-scale data management** with optimized performance for structured and unstructured data.
*   **Resilience & High Availability** – Leveraging **Azure’s global infrastructure**, i-ARM ensures minimal downtime and fault tolerance.
*   **Automation & Efficiency** – Integration of automation tools, workflow automation platforms, and serverless computing, to streamline data classification, governance, and retention processes.
*   **Interoperability** – Supports **industry standards (REST APIs, Graph API, OAuth 2.0, etc.)** for flexible integrations with third-party applications.
*   **Security & Compliance-Driven Design** – Aligns with **Microsoft Purview compliance policies, regulatory requirements, and industry security frameworks**.

## Guidelines, Standards, Best Practices

This section highlights reference to all relevant Guidelines, Standards, Best Practices, Frameworks etc. used for i-ARM

| Name | Version | Location |
| --- | --- | --- |
| Zero trust principles | NA | Zero Trust security in Azure | Microsoft Learn |
| Azure DevOps | NA | Azure DevOps documentation | Microsoft Learn |
| i-ARM Standards & Frameworks | NA | i-ARM Configuration Design | i-ARM Docs |

## Assumptions, Constraints, Dependencies and Risks

### Assumptions

| Reference | Assumption | Resulting Impacts |
| --- | --- | --- |
| Azure Environment | The Client’s Azure environment utilizes the Standard Enterprise Scale Azure Landing Zone as shown below (Refer image below the table), and i-ARM will be deployed within the new Azure subscription under the CORP management group. | Ensures that i-ARM deployment follows the standardized and scalable Azure architecture, aligning with corporate governance and management policies. |
| Network Integration | If i-ARM needs to support any network virtual appliance or firewall integrations, the implementation team will collaborate with the Client’s network architects for configuring network policies or updating/creating firewall rules. | Ensures that the network configurations required for secure communication are properly set up, facilitating uninterrupted i-ARM functionality. |
| Azure Subscription | The Azure subscription provisioned by CORP for hosting i-ARM services permits outbound internet connectivity. | Guarantees that i-ARM services have the necessary internet connectivity to interact with external resources and cloud services. |
| Deployment Environment | i-ARM deployments, including infrastructure components and solutions, will be executed from the Infotechtion Azure DevOps environment using Infotechtion deployment bicep templates. Client will provide the necessary connectivity access and permissions for these deployments for Infotechtion-hosted Azure DevOps pipelines. | Ensures that i-ARM deployments are executed smoothly, leveraging Infotechtion’s Azure DevOps pipelines with the necessary permissions for proper deployment execution. |
| Data Encryption | i-ARM upholds data encryption standards both at rest and in transit by utilizing standard Microsoft practices, such as the TLS protocol and Microsoft-managed keys. | Ensures that all i-ARM data is encrypted according to industry best practices, providing secure storage and transfer of sensitive information. |
| Network Connectivity | Network connectivity and firewall rules allow secure communication between cloud and on-premises resources. | Ensures secure and reliable data transfer between on-premises and cloud resources, preventing unauthorized access and maintaining operational integrity. |
| i-ARM Application Services and Components | The necessary licenses and subscriptions for hosting i-ARM services are available. | Ensures that all required features of i-ARM are functional and fully supported. |
| i-ARM Scanner Services | On-premises scanner services can communicate with the Azure SQL Server, i.e., outbound traffic from the on-premises network is able to resolve the private endpoint addresses of the SQL Server. | Ensures that file-related information is captured in the i-ARM data store and made available to authorized users via the i-ARM portal. |
| Lower Environments | A separate UAT environment will be set up by the client for testing i-ARM. | Facilitates early issue identification, user acceptance testing, avoids deployment service disruptions, supports security assessments, and helps establish performance baselines. |
| i-ARM Portal Access | The subscription for i-ARM deployment already includes the necessary configurations to enable connectivity from on-premises workloads. Any additional configurations, such as updating route tables, network segments, firewall settings, and DNS entries, will be managed by the relevant Client IT teams. | Ensures that the i-ARM web portal is accessible from internal systems, on-premises workstations, and the corporate network. |

![Image](ArchitectureImages/1.png)

### Constraints

| No | Constraint / Limitation | Description |
| --- | --- | --- |
| 1 | Downtime or Service Disruption Due to Service Outages | i-ARM’s operations are dependent on Microsoft 365 and Azure services. Any outages or disruptions in these services may lead to downtime, impacting the availability of i-ARM functionalities and integrations. |
| 2 | Impact of Network Latency and API Rate Limits | The performance of i-ARM may degrade if there is network latency or if API rate limits are hit during interactions with Microsoft 365 and third-party platforms, leading to slower data synchronization and processing. |
| 3 | Compliance Risks Due to Changes in Regulations | i-ARM is subject to compliance requirements. Changes in regulatory policies or misalignment between internal data governance policies and external standards could lead to compliance issues, affecting the solution’s effectiveness in governance and retention. |
| 4 | Risks from Unauthorized Changes in Production Environment | Unauthorized changes to the production environment could lead to unplanned downtime, data corruption, and security vulnerabilities, undermining the integrity and availability of i-ARM’s services. |
| 5 | Identity Applications rely on Microsoft Entra ID | The system depends on Entra ID for authentication and access control. If the service is unavailable, user access is disrupted. |
| 6 | Web Application relies on API and Identity Applications | The Web Application is dependent on APIs for data and the Identity Application for user authentication. Any failures in these services impact the web experience. |
| 7 | Network performance impacts Web Application | Slow or unstable network connectivity can degrade the user experience, particularly when handling large datasets or making multiple API calls. |
| 8 | On-premises Scanner Services hybrid model | Integrating on-premises scanners with cloud services introduces complexities in secure data transmission and synchronization. |
| 9 | Networking depends on VNet and subnets | The i-ARM solution's internal communication is reliant on Azure Virtual Networks and subnets, making network design and performance crucial for security and communication speed. |
| 10 | Cold start delays in serverless API Applications | Serverless functions (Azure Functions) may experience latency due to cold starts, especially during infrequent API calls. |
| 11 | API Applications performance dependent on database | The API Applications’ performance is tightly coupled with Azure SQL Database performance, making database optimization critical. |
| 12 | Background Applications limited by Azure Function execution time | Azure Functions have time constraints for execution. Long-running processes may need to be broken down into smaller, manageable tasks. |
| 13 | Power BI performance for large datasets | Power BI's report performance can degrade when dealing with very large datasets, which may slow down the generation of insights. |
| 14 | Power BI service limits and licensing | Power BI has service limits related to data refreshes, dataset size, and real-time streaming, which might require higher licensing tiers for extensive reporting. |
| 15 | Azure SQL scaling dependent on budget | The database's ability to scale is limited by the service tier and the available budget, affecting performance for larger datasets and high transaction volumes. |
| 16 | Secure data transmission for Scanner Services | Ensuring secure transmission from on-premises scanners to the cloud requires encryption and secure network configuration to prevent data breaches. |
| 17 | Scalability of on-premises Scanner Services | On-premises scanners may have limited scalability compared to cloud-native services, posing challenges for handling increasing data loads. |

### Dependencies

| Service | Service Description | Impact on Solution |
| --- | --- | --- |
| Infotechtion Azure DevOps | Manages application deployment and updates through automated pipelines. | Delays or failure of application deployments. |
| Microsoft Purview | Enforces data retention, classification, and compliance policies. | Compromises governance and compliance enforcement. |
| SharePoint | Facilitates document storage, management, and collaboration. | Affects data access and governance processes. |
| Power BI | Provides data analytics, visualization, and reporting. | Prevents generation of insights and data visualization. |
| Virgo/Iron Mountain Policy Center | Stores and manages records retention schedules and policies. | Disrupts compliance with data retention policies. |
| On-Premises Data Gateway | Enables secure data transfer between on-premises and cloud environments. | Blocks integration and data transfer from on-premises resources. |
| Serverless Compute and Application Hosting (e.g., Azure Functions, Azure Web App) | Handles serverless compute tasks, APIs, and hosting of web applications. | Prevents execution of APIs, workflows, and web services. |
| Azure Key Vault | Secures sensitive data, such as API keys and certificates | Secure access to sensitive data would be compromised. |
| Azure VNET | Provides secure networking between Azure resources. | Secure communication between resources may be compromised. |
| Power Automate | Automates tasks and workflows across services. | Fails to integrate services and automate processes. |
| Azure SQL | Centralized i-ARM Data Store that provides scalable and secure relational database management. | Affects the solution's ability to store and manage data. |
| Monitoring and Insights (e.g., Application Insights) | Provides performance monitoring, logging, and alerting for the application. | Limits operational visibility and performance management. |
| Entra ID | Manages user authentication and identity access for resources. | Disables access to the solution and related services. |
| Azure Drop Zone | Stores data before it’s moved to long-term secure storage (e.g., WORM). | Prevents the transfer of data to secure, compliant storage. |
| Access to Microsoft 365 Services (e.g., Microsoft Graph) | Facilitates integration with Microsoft 365 services and APIs. | Restricts access to Microsoft Purview and other 365 features. |
| On-Premises Resource Access | Connects on-premises resources to cloud services via a secure gateway. | Disrupts access to on-premises resources and service integration. |
|  |  |  |

### Risks

| Reference | Risk | Mitigation Actions |
| --- | --- | --- |
| Identity Applications | Misconfiguration of application permissions and consent settings leading to unauthorized access. | Implement thorough review and testing of permissions and consent settings before deployment. Regular audits and reviews of permissions.Team: Security and Infotechtion DevOps Team |
| Identity Applications | Application registration credentials (client secrets) leakage or compromise | Use Azure Key Vault to securely store client secrets. Implement strict access controls and regular rotation of secrets.Team: Security and Infotechtion DevOps Team |
| Identity Applications | Users experience degradation due to multi-factor authentication (MFA) enforcement. | Misconfiguration leading to security vulnerabilities (e.g., open ports, weak authentication). Performance issues due to improper scaling configurations or unexpected load. |
| Web Application | Misconfiguration leading to security vulnerabilities (e.g., open ports, weak authentication). Performance issues due to improper scaling configurations or unexpected load. | Implement security best practices, conduct regular security assessments, and use Azure Security Centre recommendationsTeam: Security, Performance, andInfotechtion DevOps Team |
| Web Application | Downtime due to Azure service outages or maintenance activities. | Regularly review Azure Service Health advisories.Team: Operations Team |
| Web Application | Increased costs due to inefficient resource utilization or scaling configurations. | Implement cost monitoring using Azure Cost Management and set up alerts for unusual spending patterns. Optimize resource usage regularly.Team: Infotechtion DevOps Team |
| Web Application | Application vulnerabilities due to outdated libraries or dependencies. | Regularly update application libraries and dependencies. Implement a CI/CD pipeline with automated security scanning tools.Team: Infotechtion DevOps Team |
| Networking | Misconfiguration leading to network security vulnerabilities (e.g., open ports, insecure network security groups).Network performance issues due to improper subnet design or insufficient bandwidth.Compliance issues due to misalignment with regulatory requirements (e.g., data residency, network isolation). | Implement network security best practices, use Azure Firewall and NSGs, and conduct regular security audits.Plan and design the VNET with proper subnetting and bandwidth considerations. Use Azure Network Performance Monitor to monitor and optimize performance.Regularly review and update compliance policies. Use Azure Policy to enforce network compliance standards.Teams; Security, Networking, and Infotechtion DevOps Team Teams |
| API and Background Applications | Misconfiguration leading to security vulnerabilities (e.g., open endpoints, weak authentication).Performance issues due to improper scaling configurations or unexpected load.Downtime due to Azure service outages or maintenance activities. | Implement security best practices, use Entra ID Auth for security and App Insights monitoring, and conduct regular security assessments.Implement auto-scaling and load testing to ensure the functions can handle peak loads. Monitor performance using Azure Monitor and Application Insights.Regularly review and update compliance policies. Use Azure Policy to enforce compliance standards and ensure proper logging and monitoring.Teams; Security, Networking, and Infotechtion DevOps Team Teams |
| Dashboards & Reports / Online Reporting Platform | Misconfiguration or improper sharing leading to unauthorized access to sensitive data.Performance issues due to large datasets or complex calculations.Downtime or service disruption due to Power BI service outages or maintenance. | Implement robust access controls and role-based security. Regularly review sharing settings and access logs. Use Azure AD for authentication and authorization.Optimize data models and use data aggregation techniques. Implement incremental data refresh and monitor performance using Power BI service metrics.Regularly monitor Power BI service health. Have contingency plans in place for critical business operations.Teams; Security, and Infotechtion DevOps Team Teams |
| Database | Misconfiguration leading to security vulnerabilities (e.g., open firewall rules, weak authentication).Performance issues due to improper indexing, query optimization, or insufficient resources.Data loss or corruption due to inadequate backup and recovery processes. | Implement security best practices, use Azure SQL Database security features (e.g., firewall rules, threat detection), and conduct regular security audits.Optimize database schema and queries. Monitor performance using Azure SQL Database Performance Insights and adjust resource allocations as needed.Implement automated backups and regularly test recovery procedures. Use Point-in-Time Restore and Long-term Retention for backups.Teams; Security, and Infotechtion DevOps Team Teams |
| Database | Increased costs due to inefficient use of database resources or over-provisioning.Users experience degradation due to latency or slow query responses.Security vulnerabilities due to outdated or unpatched database components. | Regularly review and update compliance policies. Use Azure Policy and Azure SQL Database Auditing to enforce compliance standards.Optimize database performance through indexing, query optimization, and caching. Use Azure SQL Database Query Performance Insight for monitoring and optimization.Regularly apply updates and patches to the database. Use Azure SQL Database Vulnerability Assessment and Advanced Threat Protection for continuous monitoring.Teams; Security, and Infotechtion DevOps Team Teams |
| Data Gateway | Misconfiguration of the VM or gateway leading to security vulnerabilities (e.g., open ports, weak credentials). Performance issues due to insufficient VM resources or network bandwidth limitations. Downtime due to Azure service outages, maintenance, or VM failures. | Implement security best practices, use Azure Security Centre, and regularly update VM and gateway configurations. Conduct security audits and implement network security groups (NSGs).Right-size the VM based on workload requirements, monitor performance using Azure Monitor, and adjust resources as needed.Implement high availability strategies, such as using Availability Sets or Zones. Regularly review Azure Service Health advisories.Teams: Security, and Infotechtion DevOps |
| Release Management | Misconfiguration or security vulnerabilities in the Azure DevOps environment (e.g., open pipelines, weak permissions). Downtime or service disruption due to Azure DevOps service outages or maintenance. | Implement DevOps security best practices, use Azure DevOps security features (e.g., role-based access control, service connections), and conduct regular security audits.Regularly monitor Azure DevOps Service Health, implement redundancy where possible, and communicate planned maintenance to customers.Teams – Infotechtion DevOps |
| Microsoft Purview Compliance Portal | Misconfiguration leading to incomplete or inaccurate data classification.Downtime or service disruption due to Azure Purview service outages or maintenance. | Implement best practices for data classification and cataloguing. Regularly review and update data classifications. Conduct periodic audits and validations.Regularly monitor Azure Purview Service Health. Have contingency plans in place for critical compliance operations.Teams – Data Governance and Compliance |
| Absence of Lower Environments | The absence of lower environments presents several risks:Early Issue Detection: Issues identified in production are costlier to fix than those found early in lower environments.User Acceptance Testing: Lower environments are essential for validating new features through user acceptance testing, ensuring they meet user needs.Avoiding Downtime: Without lower environments, deploying new features directly to production increases the risk of downtime and service interruptions.Security and Compliance: Lower environments allow for critical security and compliance assessments, ensuring the production environment remains secure and compliant.Performance Expectations: Performance testing in lower environments helps establish baseline expectations and ensures the production environment can handle the expected load. | Establish lower environments (e.g., Development, QA, Staging) to thoroughly test and validate changes before production deployment. |
| Unauthorized Access to APIs | Data breaches, data loss, and potential misuse of sensitive information | Implement strong authentication and authorization mechanisms for all APIs. Regularly audit API access logs and use monitoring tools to detect and respond to unauthorized access attempts.Conduct regular security training for developers and users. |
| Unauthorized Changes to Production Environment (Release Management) | Unplanned downtime, data corruption, and potential security vulnerabilities | Implement strict control processes, including approval workflows and audit trails.Use role-based access control (RBAC) to restrict permissions. Regularly review and update access policies. |
| i-ARM Application Services and Components | Initial setup and configuration may require additional time and resources, any decision delays could impact project timelines. | Develop a comprehensive project plan with detailed timelines for each componentAllocate additional resources if necessary and provide training for team members. Implement a phased rollout if needed.Additionally, having a test or lower environments helps to adopt the fail fast approach.Teams: BoE Architecture |
| i-ARM Application Services and Components | Increased costs due to inefficient use of resources or over-provisioning across different services. | Implement cost monitoring using Azure Cost Management and set up alerts for unusual spending patterns.Optimize resource usage regularlyTeams: Finance and Resource Management Teams. |

# Application Architecture

## Logical Architecture

The diagram below represents the logical component architecture design of the i-ARM and provides the overall view of the components involved to provide i-ARM functionality along with integrations with external systems.

The primary logical components of the system are shown as below

*   **User Interface Layer:**
    *   Provides a unified dashboard for users (i-ARM Personas) to interact with the system.
    *   Offers tools for records management, governance actions, and data insights.
    *   Designed for ease of use to promote user adoption.  
        
*   **Integration and Application Business Layer:**
    *   Contains the core business logic for data and records management.
    *   Facilitates communication between the i-ARM user interface and other system components e.g. APIs or endpoints.
    *   Implements the governance policies for data classification, retention, and access.
    *   Implements automated and triggered workflows e.g. using Power Automate.
    *   Implements secure APIs.
*   **Data Storage Layer:**
    *   Ensures data integrity, security using relational database system.
*   **External Systems:**
    *   Release Management: Manages deployment pipelines for continuous integration and delivery of the i-ARM solution.
    *   Microsoft Purview (Compliance Portal) - Manages governance policies and ensures compliance with data retention and classification standards.

![Image](ArchitectureImages/2.jpg)

## Application Building Blocks

The i-ARM solution is designed with a modular and integrated architecture to provide data and records management capabilities.

The architecture diagram presented below illustrates the high-level structure of the system, highlighting the core containers and their interactions with external systems. This architecture ensures seamless integration for data governance and reporting functionalities while maintaining flexibility for future enhancements.

Each container is carefully designed to interact with others in a manner that supports efficient data flow, secure management, and comprehensive reporting.

The diagram below serves as a visual guide to understanding how the i-ARM solution orchestrates these interactions, ensuring a cohesive and effective system for managing data and records.

![Image](ArchitectureImages/3.png)

## i-ARM Software System Containers

1.  Identity Applications
    *   Purpose: Manages authentication and access control for i-ARM services.
    *   Technology: Microsoft Entra ID (SaaS).
    *   Responsibilities:
        *   Register and configure applications for secured access.
        *   Perform Authentication.
        *   Access control management.
    *   Interactions:
        *   Users: Authenticates and authorizes users.
        *   Web Application, SharePoint Application, API Applications: Provides authentication services to these containers ensuring secure access.
2.  Web Application
    *   Purpose: Provides a user interface for interacting with i-ARM features and services.
    *   Technology: React and .NET Azure WebApp.
    *   Responsibilities:
        *   i-ARM User interface for record interaction and management.
        *   Delivery of services through a web browser.
    *   Interactions:
        *   Users: Interfaces directly with users for record management interaction.
        *   Identity Applications: Utilizes authentication services to verify user access.
        *   API Applications: Makes API calls to access backend services and data.
3.  Networking
    *   Purpose: Ensures secure connectivity for internal communications within i-ARM.
    *   Technology: Azure Virtual Network and Subnets.
    *   Responsibilities:
        *   Secured communication channels.
        *   Integration of service and private endpoints.
    *   Interactions:
        *   All Containers: Provides secure VNET integration for internal communication between different containers.
4.  API Applications
    *   Purpose: Provides i-ARM features and services accessed via APIs.
    *   Technology: Serverless and .NET, Azure Functions.
    *   Responsibilities:
        *   Expose functionalities through HTTPs and JSON.
        *   Serve as backend for numerous services.
    *   Interactions:
        *   Web Application, SharePoint Application, Background Applications: Provides backend services and data via API calls.
        *   Database: Reads from and writes to the database for data storage and retrieval.
5.  Background Applications
    *   Purpose: Handles background processes and scheduled data processing.
    *   Technology: Azure VM, On-Premises VM, Serverless Functions, .NET, Power Automate.
    *   Responsibilities:
        *   Asynchronous data processing.
        *   Scheduled tasks management.
    *   Interactions:
        *   Database: Performs data processing tasks.
        *   API Applications: Interacts for backend services as needed.
        *   SharePoint Application: Provides backend services and data via Graph API calls
6.  Dashboards & Reports
    *   Purpose: Acts as an interface between SQL database and Power BI reports.
    *   Technology: Power BI Report Files.
    *   Responsibilities:
        *   Data visualization and reporting.
    *   Interactions:
        *   Database: Imports data for analysis and reporting.
        *   Users: Provides visual reports and dashboards for data insights.
        *   Data Gateway: Facilitates data transfer between SQL database and Power BI
7.  Database
    *   Purpose: Central data repository for i-ARM.
    *   Technology: Azure SQL Database.
    *   Responsibilities:
        *   Store i-ARM application data and configuration metadata.
        *   Support for read/write operations.
    *   Interactions:
        *   API Applications, Background Applications, Dashboards & Reports: Read from and write data to the database for various operations.
8.  Data Gateway
    *   Purpose: Facilitates data transfer between SQL databases and Power BI.
    *   Technology: Azure VM, IaaS.
    *   Responsibilities:
        *   Data import/export management.
        *   Secure data bridge.
    *   Interactions:
        *   Dashboards & Reports: Enables data connectivity for reporting and analytics.

**External Systems and Dependencies of i-ARM**

1.  Release Management
    *   Purpose: Manages the CI/CD pipeline for application deployment.
    *   Technology: Azure DevOps.
    *   Interactions:
        *   DevOps Users: DevOps users create and deploy builds using this system.
        *   Identity Applications: Deploys new builds and manages integration for continuous delivery.
2.  Microsoft Purview Compliance Portal
    *   Purpose: Manages records governance policies.
    *   Technology: Microsoft Purview (SaaS).
    *   Interactions:
        *   SharePoint Application: Applies compliance policies to records.
        *   Records Disposal: Ensures compliance with disposal policies.
3.  SharePoint Online

*   Purpose: Serves as the primary document management and collaboration platform for i-ARM.
*   Technology: SharePoint Online (SaaS).
*   Interactions:
    *   Document Storage & Retrieval: i-ARM integrates with SharePoint to classify and manage records.
    *   Retention & Compliance: Compliance policies from Microsoft Purview are enforced on SharePoint documents.
    *   Metadata Management: i-ARM captures and updates metadata for records stored in SharePoint.
        *   User Access & Permissions: i-ARM relies on SharePoint’s permission model to enforce role-based access control.

1.  Power Platform

*   Purpose: Supports automation, workflow management, and apps for i-ARM.
*   Technology: Microsoft Power Automate, Power Apps, and Power BI.
*   Interactions:
    *   Power Automate: Automates workflows such as approval processes, notifications, and compliance actions.
    *   Power Apps: Provides user-friendly interfaces for interacting with i-ARM data, including provisioning, record reviews and approvals.
    *   Power BI: Generates reports and dashboards for tracking record governance, compliance trends within i-ARM.

## Solution Architecture

The i-ARM solution is designed as a scalable, cloud-native application that integrates with Microsoft 365 and Azure services to enable intelligent records management and compliance. The architecture follows a modular approach, ensuring flexibility, security, and high availability while optimizing performance for both cloud and hybrid environments.

![Image](ArchitectureImages/4.png)

**Key Architectural Components**

1.  **Identity and Access Management**
    *   i-ARM utilizes **Microsoft Entra ID (Azure AD)** for authentication and authorization, ensuring secure access to application services.
    *   Role-based access control (RBAC) and conditional access policies enforce security at the user and system levels.
2.  **Web Application**
    *   The user interface is built using **React with TypeScript**, hosted on **Azure App Service**, and secured with **Microsoft Entra authentication**.
    *   Provides an intuitive interface for users to manage records, configure compliance policies, and generate reports.
3.  **API and Backend Services**
    *   i-ARM exposes RESTful APIs via **Azure Functions (Serverless)** to facilitate integration with Microsoft 365 services like SharePoint, Microsoft Purview, and Power Platform.
    *   Secure communication between services is maintained through **Managed Identity-based authentication**.
4.  **Data Storage and Management**
    *   **Azure SQL Database** serves as the central repository for metadata, compliance rules, and audit logs.
    *   Secure file storage is managed via **Azure Blob Storage** based on compliance policies.
5.  **Compliance and Policy Enforcement**
    *   **Microsoft Purview Compliance Portal** is integrated to manage records retention, disposal, and sensitivity labeling.
    *   Policies are applied dynamically based on metadata, and regulatory requirements.
6.  **On-Premises and Hybrid Integration**
    *   i-ARM supports hybrid environments by integrating with **on-premises scanner services** to classify and index records.
    *   Secure communication between cloud and on-premises resources is enabled via **Azure Virtual Network (VNet) and Private Endpoints**.
7.  **Automation and Workflow Management**
    *   **Power Automate** is leveraged to trigger workflows for approval, notifications.
8.  **Monitoring, Security, and Logging**
    *   **Azure Monitor and Application Insights** track system performance, usage patterns, and potential issues.
    *   **Azure Key Vault** securely manages secrets, connection strings, and encryption keys.

**Scalability and Performance Considerations**

*   **Autoscaling**: Azure App Service and Azure Functions scale dynamically based on workload demands.
*   **Database Performance Optimization**: Query indexing, partitioning, and caching strategies are implemented to ensure optimal performance.

The architecture ensures that i-ARM remains **scalable, secure, and compliant**, aligning with industry best practices and enterprise governance requirements.

# Data Architecture

This section describes the data aspects of the i-ARM product that employs a central relational database for its operations and offerings.

The database used is the PaaS offering from Azure i.e. Azure SQL database that provides numerous advantages e.g. freedom to scale when required, ability to cope up with increasing load and hassle-free management and maintenance reducing the overhead of operations and IT teams.

The table below shows the different architectural criteria considered before finalizing the SQL Azure database as a backend for i-ARM.

| Criteria | Justification |
| --- | --- |
| Reliability | - Built-in high availability with automatic failover configurations ensures minimal downtime.- Active geo-replication configuration possibilities enable creating readable secondary databases in different regions for disaster recovery.- Automatic backups with point-in-time restore ensure data can be restored from any point within the retention period. |
| Scalability | - Easily scale the database up or down to accommodate varying loads without application downtime.- Read replicas configuration possibilities allow scaling read workloads without affecting primary database performance. |
| Maintainability | - Regular maintenance and updates are automatically applied by the Azure platform, reducing manual effort.- Integrated tools like Azure Monitor and SQL Analytics provide insights into performance and health, aiding in proactive maintenance.- Intelligent features like automatic tuning and recommendations help optimize performance automatically. |

The following table outlines various personas and actors engaging with the i-ARM database through the i-ARM portal, along with a brief description of the nature of their interactions.

| Capability | Description |
| --- | --- |
| i-ARM Authenticated User Personas | Application users interacting with the i-ARM services with their roles e.g. Administrators, records administrators etc. |
| i-ARM application process and backend workers | Service to service connectors to perform data read and write actions to the i-ARM tables in the database. |

## Data Access and Utilization

i-ARM leverages Azure SQL Database as its central data repository. The table provided above identifies the various actors interacting with the database, while the data flow diagram illustrates the nature of these interactions and the movement of data into and out of the database.

Please refer to the logical data model below for a general understanding of i-ARM's backend, which highlights the primary components of the data store and their significance.

Additionally, the table provides an overview of how different personas and services securely access and utilize the Azure SQL Database by leveraging Azure AD authentication, role-based access control, and network security features.

| Persona/Service | Access Type | Description of Data Access | Security Measures |
| --- | --- | --- | --- |
| i-ARM Web Application | Read/Write | Accesses the database to perform CRUD (Create, Read, Update, Delete) operations for the application logic. | - Azure AD authentication for service principal credentials- SQL Firewall rules to restrict access by IP- Managed identities for authentication |
| Database Admin | Read/Write | Responsible for database setup, maintenance, and monitoring, with access to all data and schema modifications. | - Azure AD authentication with MFA (on approval)- Role-based access control (RBAC)- Activity logging and auditing |
| I-ARM Reporting Layer | Read | Queries the database for reporting and analytics purposes, without modifying data. | - Azure AD authentication with MFA- Read-only database roles |
| i-ARM Backend Services | Read/Write | Accesses the database to perform CRUD (Create, Read, Update, Delete) operations for the backend logic. | - Managed identities for authentication- IP firewall rules for allowed services- Role-based access control (RBAC) |

## Logical Data Model

The section below shows the generalised data model of i-ARM system that primarily makes use of the SQL Azure database for storing its configurations and operational data.

*   The i-ARM solution leverages the best practices in the industry for database design and management while utilizing Azure SQL Database as its central data repository.
*   The Azure SQL Database ensures that the solution can scale effortlessly to meet varying loads and provide optimal performance.
*   Integrated tools such as Azure Monitor and SQL Analytics provide insights into performance and health, aiding in proactive maintenance to address potential issues before they arise.
*   While the general data architecture and management principles are described, the detailed schema and database design pertaining to each module remain confidential and are managed by Infotechtion to protect intellectual property and ensure data security.

The design below shows the high-level schema of underlying key tables used by i-ARM and their relationship with different tables in the system. The database is normalized with third normal form standard to achieve data integrity, efficient storage, flexibility as well as the query performance for the reporting.

**Data security and compliance:**

*   Due to the use of Azure SQL database offering as the backend of i-ARM, the Data at rest is encrypted using Transparent Data Encryption (TDE).
*   Role-based access control (RBAC) ensures that users have access only to the data they need.

i-ARM data model uses indexes to ensure queries are executed in efficient manner.

![Image](ArchitectureImages/5.png)

## Data Flow

The data flow diagram shows how data moves through the i-ARM system across different modules.

![Image](ArchitectureImages/6.jpg)

The section below explains the general flow of the data within i-ARM

1.  User requests for login
    *   Action: The user opens the i-ARM portal in their browser and inputs their login credentials issued by Microsoft 365 Tenant.
    *   System Response: The credentials are sent to the WebApp, which forwards them to the Authentication service for verification.
2.  User Successfully Authenticates and Logs into i-ARM Portal
    *   Action: The Authentication service (Azure AD) verifies the user's credentials.
    *   System Response: If the credentials are valid, the user is granted access to the i-ARM portal, and the WebApp redirects the user to the home page.
3.  My Data Page Requests Web API to Get Source Instances
    *   Action: The user navigates to the My Data page within the i-ARM portal.
    *   System Response: The WebApp sends a request to the Web API to retrieve a list of source instances items from the Database for the logged in user.
4.  User Performs Various Operations on Listed Items in My Data
    *   Action: The user interacts with the My Data screen to perform various operations. The available operations include:
    *   Assign metadata and label: The user selects one or more items and assigns a label and/or metadata.
    *   System Response: Each operation sends a request to the Web API, which interacts with the Database to update the status of the items based on the user's actions.
5.  Disposal Dashboard Page Requests Web API to Get Disposable Items
    *   Action: The user navigates to the Disposal Dashboard page within the i-ARM portal.
    *   System Response: The WebApp sends a request to the Web API to retrieve a list of disposable items from the Database.
6.  Disposable Items are Visible in Grid View
    *   Action: The Web API retrieves the list of disposable items from the Database.
    *   System Response: The Web API returns the data to the WebApp, which displays the items in a grid view on the Disposal Dashboard page.
7.  User Performs Various Disposal Operations on Listed Items
    *   Action: The user interacts with the grid to perform various disposal operations. The available operations include:
    *   Dispose Items: The user selects one or more items and marks them for disposal.
        *   Extend Retention Period: The user selects items and changes their retention period to a later date.
        *   Re-Label/Change Retention Label: The user changes the retention label of selected items.
        *   Archive Items: The user archives selected items for long-term storage.
    *   System Response: Each operation sends a request to the Web API, which interacts with the Database to update the status of the items based on the user's actions.
8.  User Requests Reports
    *   Action: The user selects the Reports option in the i-ARM portal and specifies the type of report they need.
    *   System Response: The WebApp sends a request to Power BI to generate the required report. Power BI retrieves the necessary data from the Database and processes it to generate the report, which is then returned to the WebApp and displayed to the user.
9.  PA Flow: The section below describes the Power Automate Flows deployed as a part of the i-ARM system deployment within BoE Power Automate Environment.
    *   Disposal Actions Flow: This flow gets triggered daily, it picks items disposed or relabelled from i-ARM portal. Fetched item(s) details are sent to MS Purview for disposition/ re-labelling and Database is updated with proper status to keep track.
    *   Business Reviewers Disposition: This is triggered when an item reaches the end of its retention period. It retrieves to be disposed item details by making request to respective SharePoint site. Retrieved data or items details are inserted into database. Once it is inserted in database its available for disposition from i-ARM portal.
    *   Business and Archive Reviewers: Flow is same as Business Reviewers Disposition, with the only difference being that an item requires an Archive Reviewer User for disposing an item.
    *   Compliance Sync: This is Power Automate flow which will synchronise Retention Labels from MS Purview and insert details of retention label into database.

The data flow diagram shows how data moves through the PRM, SharePoint and i-ARM

![Image](ArchitectureImages/7.jpg)

The section below explains the general flow of the data within PRM, SharePoint and i-ARM

1.  Physical Records Management:

*   **SPFx Module:** This module is a SharePoint solution which handles creation and management of Physical Records.
    *   User requests login.
        *   *   Action: User opens the browser and inputs their login credentials issued by Microsoft 365 Tenant.
            *   System Response: The credentials are authenticated by M365’s authentication mechanism and the user are logged in.
    *   Login request to SharePoint authentication mechanism.
        *   *   Action: User credentials are passed on to M365 Tenant’s own authentication mechanism.
            *   System Response: User is authenticated from Microsoft’s end.
    *   After successful login user will request access to SharePoint
        *   *   Action: After successful log in users will need to request for SharePoint site/pages where our solution is deployed if they do not have the access already.
            *   System Response: Users will then be able to view all the search pages and pages where custom forms are implemented.
    *   User interacts with SharePoint via custom search pages and forms which are designed.
        *   *   Action: User may try to perform any of operations which are search, create, edit, view physical records using our solution.
            *   System Response: Solution will respond accordingly based on the operations performed.
                *   Search operation will return search results.
                *   Create operation will return display form with created entry.
                *   Edit operation will return display form with edited entries.
                *   View operation will return display form with relevant details.
*   **Bulk Import:** This module is a background process which creates physical records based on the records added in csv format.
    *   Timer trigger function runs after every interval to pick input file for processing.
        *   *   Action: Request to authenticate using AAD certificate.
            *   System Response: On successful response, access token is returned to the background process.
    *   Requests for input file to process.
        *   *   Action: After getting access token, process checks SharePoint list for input file.
            *   Response: Returns files whose status is “New.”
    *   Start processing the input file.
        *   *   Action: Once the input file is received, system starts processing the data and creates records in SharePoint list.
            *   Response: Returns the response message of success/fail while creating records.
    *   The i-ARM solution leverages capabilities of the PnP framework i.e. specifically the PnP search web part to provide search functionality within the physical records management feature.
*   **PRM Sync:** This module is a background process which sync the physical and archive box records into i-ARM.
    *   Timer trigger function runs after every interval to pick items eligible items to be synced to i-ARM.
        *   *   Action: Request to authenticate using Entra ID.
            *   System Response: On successful response, access token is returned to the background process.
    *   Requests for eligible items to process.
        *   *   Action: After getting access token, process checks SharePoint list for eligible items.
            *   Response: Returns items (New/Modified)
    *   Start Syncing the items.
        *   *   Action: Once the eligible items are received, system starts processing the data and creates/updates records in i-ARM Data Store.
            *   Response: Returns the response message of success/fail while creating records.

# System Design

## Disaster Recovery and Resilience

### Resilience

i-ARM application is built on native Azure features which are designed to be resilient in terms of failure tolerance, hardware workloads and network workloads utilizing the underlying infrastructure HA. The table below provides the overview of the scalability and resilience features of each container, along with the rationale for technology selection.

| i-ARM Container | Scalability | Resilience | Technology Choice |
| --- | --- | --- | --- |
| Identity Applications | Automatically scales to handle more users.Supports multi-tenant environments. | High availability with SLA guarantees.Built-in redundancy. | Microsoft Entra IDReason: Preferred for its seamless integration with other Microsoft services and enterprise-level identity management capabilities. |
| Web Application | Scales out automatically using Azure App Service.Can handle increased traffic with minimal configuration. | SLA-backed high availability.Automatic backups and disaster recovery options. | Azure Web AppReason: Chosen for its simplicity and powerful features for web app hosting, offering better ease of use and deployment flexibility. |
| Networking | VNet scales to accommodate growing services and endpoints.Flexible configuration to optimize traffic flow. | High availability and redundancy within Azure regions.Supports VPN and ExpressRoute for secure, resilient connections. | Azure Virtual NetworkReason: Offers superior integration with Azure services and enhanced security features. |
| API Applications | Automatically scales with demand using Azure Functions.Handles spikes in traffic efficiently. | Built-in fault tolerance and redundancy.Durable Functions for stateful workflows ensure resilience. | Azure FunctionsReason: Chosen for its serverless architecture, reducing overhead and cost compared to Azure App Services, which are better for full-fledged applications rather than lightweight, event-driven tasks. |
| Background Applications | Serverless scaling with Azure Functions.Scales according to the workload with no pre-provisioning needed. | Durable Functions ensure reliability of long-running processes.High availability and disaster recovery options. | Azure Functions, Power AutomateReason: These serverless offerings provide a more flexible and scalable solution for background tasks. |
| Dashboards & Reports | Can handle large datasets and concurrent report access. | SLA-backed service reliability. | Power BI Report FilesReason: Power BI offers advanced analytics and visualization capabilities that integrate seamlessly with Azure services, providing more robust features. |
| Database | Azure SQL Database can accommodate larger datasets and higher query volumes. | High availability with geo-replication can be configured.Automated backups and point-in-time restore. | Azure SQL DatabaseReason: Selected for its fully managed service with strong integration options and built-in intelligence, offering better overall performance and manageability. |
| Data Gateway | Can be configured to manage increasing data loads between on-premises data sources and cloud services.Optimized for large data transfers. | Infrastructure services managed by Azure for reliability. | Azure VM (IaaS)Reason: Using Azure VM provides more control and customization for data transfer processes. |

### Disaster Recovery

Table below outlines the high-level overview of the DR scenario and steps involved from i-ARM Azure solution component’s standpoint.

| Step | Action | Description |
| --- | --- | --- |
| Initiate Disaster Recovery Plan | - Assess the Situation- Notify Stakeholders | - Quickly determine the extent and impact of the disaster.- Inform relevant stakeholders and teams about the disaster and the activation of the recovery plan. |
| Deploy Infrastructure in Secondary Region | - Execute Infrastructure as Code (IaC) Templates | - Deploy Terraform scripts to provision necessary Azure resources (Storage Accounts, VNet, Web App, Function Apps, and SQL Database) in the secondary region. |
| Restore Data | - Restore Data | - Azure SQL Database Geo-Restore Utilize geo-replicated backups to restore the SQL Database in the secondary region.- Azure Storage Account Failover Confirm that Microsoft has initiated the failover process for GZRS-configured storage accounts, making the replicated data available in the secondary region. |
| Deploy Solution Components | - Trigger CI/CD Pipelines- Configuration and Testing | - Deploy application code and configurations to the newly provisioned infrastructure using CI/CD pipelines.- Ensure that application components are correctly configured and perform necessary testing to confirm functionality. |
| User Acceptance Testing (UAT) | - End-to-End Testing- User Acceptance Testing (UAT) | - Conduct comprehensive tests to ensure that all components of the solution are operational.- Perform UAT to verify that the solution meets business requirements and functions as expected. |
| Monitor and optimize | - Continuous Monitoring- Communication Status | - Monitor the solution for any issues and optimize performance as needed.- Update stakeholders on the status of the recovery process and any follow-up actions required. |
| Post-Recovery Review | - Documentation and Reporting- Stakeholder Communication | - Document the recovery process, capturing lessons learned and identifying areas for improvement.- Provide a detailed report to stakeholders, summarizing the recovery efforts and the next steps. |

By following these high-level steps, the i-ARM solution can be effectively brought back to service in a disaster scenario, ensuring minimal downtime and data loss.

### Backup Policy

*   The i-ARM employs backup policies to ensure data integrity and compliance with regulatory standards using Azure native features.
*   Both Azure SQL Database and Azure Storage Accounts within i-ARM are subject to these backup policies.
*   Azure SQL Databases are configured with built-in high availability and automated backups using Point-in-Time Restore (PITR) and Long-Term Retention (LTR) capabilities, ensuring that the data can be restored from any point within the retention period configured.
*   All critical data stored in Azure Storage Accounts, archived files, and other relevant information, are backed up regularly using Azure Backup. This ensures that in the event of accidental deletion or corruption, data can be quickly restored to its state at a previous point in time.
*   These backup policies are configurable, allowing APA Corp to configure the retention period according to their specific compliance requirements.

## Performance Optimization & Bandwidth Considerations

*   API rate limiting & caching: Cache is implemented to optimize API response times and reduce database load.
*   Optimized network bandwidth usage: Compression, and adaptive streaming reduce data transfer latency.
*   Query optimization: Indexing and partitioning strategies are applied to Azure SQL for fast data retrieval.
*   Real-time monitoring: Azure Application Insights tracks latency, response times, and error rates, allowing proactive optimization.

# Security & Identity Management

Security is a critical component of the i-ARM solution, ensuring data integrity, compliance, and protection against unauthorized access. The solution adheres to industry best practices and enterprise security standards to safeguard sensitive information.

## Authentication & Authorization

*   i-ARM leverages **Microsoft Entra ID (Azure AD)** for authentication and role-based access control (RBAC).
*   **Single Sign-On (SSO)** and **Multi-Factor Authentication (MFA)** are enforced to enhance security.
*   **Managed Identity** is used for secure authentication between services, reducing the need for explicit credentials.
*   Fine-grained access control is implemented through **custom roles and Azure RBAC policies**, ensuring users have only the necessary permissions.

## Secure Access & Connectivity

*   All i-ARM services are deployed within a **secure Azure Virtual Network (VNet)**, ensuring restricted access.
*   **Private Endpoints** are used for Azure SQL, Azure Storage, and other cloud resources, preventing exposure to the public internet.
*   **Conditional Access Policies** enforce security rules based on device compliance, geographic location, and risk-based authentication signals.
*   **Firewall rules and Network Security Groups (NSGs)** limit inbound and outbound traffic to only authorized applications and users.

## Data Protection & Encryption

*   **Encryption at rest:** Data stored in Azure SQL Database; Azure Blob Storage is encrypted using **Microsoft-managed keys**.
*   **Encryption in transit:** All data exchanged between services and users is encrypted using **TLS 1.2+** to prevent interception.
*   **Sensitive information masking:** Dynamic data masking and **Transparent Data Encryption (TDE)** are used to limit exposure to sensitive records.
*   **Secure data retention policies:** Microsoft Purview ensures that records follow strict **data lifecycle management** policies to prevent unauthorized access or premature deletion.

## Security Logging, Monitoring, & Alerting

*   **Azure Monitor & Log Analytics** track authentication attempts, access logs, and system performance.
*   **I-ARM** can be integrated with the customer SIEM solution for advanced security analytics and automated response to incidents.
*   Alerts and notifications are configured for **anomalous activities, unauthorized access attempts, and compliance violations**, ensuring quick response to potential threats.

# Service Operations & Maintenance

## Deployment

### Deployment Strategy

The i-ARM deployment strategy follows a structured, automated, and secure approach using Azure DevOps pipelines and Infrastructure as Code (IaC) to ensure consistency, scalability, and minimal downtime. The deployment is aligned with Microsoft’s recommendations ensuring security, operational efficiency, and compliance.

![Image](ArchitectureImages/8.png)

### Deployment Methodology

The deployment of i-ARM follows a **CI/CD pipeline-driven** approach to maintain consistency and automation across environments:

1.  **Continuous Integration (CI)**:
    *   Developers push code changes to **Azure DevOps Git repositories**.
    *   Code undergoes **automated testing**, including unit tests and security scans.
    *   Builds are validated against **quality and compliance gates** before moving to the next stage.
2.  **Continuous Deployment (CD)**:
    *   **Infrastructure provisioning** using **Bicep templates** ensures consistent environment setup.
    *   Application components, including **Azure Functions, Web Apps, APIs, and Database**, **VMs** are deployed automatically.
    *   Configurations are **environment-specific** and handled using **Azure Key Vault and DevOps variable groups**.

## Service Monitoring & Logging

## Change & Versioning Strategy

## Patching & Updating Policies

# References

*   i-ARM Configuration Design Document: [i-ARM Configuration Design | i-ARM Docs](https://docs.infotechtion.com/docs/tech-docs/ConfigurationDesign)
*   i-ARM Target Operating Model: [Target Operating Model | i-ARM Docs](https://docs.infotechtion.com/docs/tech-docs/Targetoperatingsystem)
*   i-ARM Deployment Guide: [DeploymentGuide | i-ARM Docs](https://docs.infotechtion.com/docs/tech-docs/DeploymentGuide)
