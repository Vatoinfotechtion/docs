recovery

Contents
#### Document Purpose ..................................................................................................................................................................................................................... 3  
___
#### 1. Summary  ................................................................................................................................................................................................................................... 3  
___

#### 1.1. Contacts .................................................................................................................................................................................................................................. 3  
#### 1.2. References ............................................................................................................................................................................................................................. 3  
#### 1.3. Document History ............................................................................................................................................................................................................... 4  
#### 1.4. Approvals .............................................................................................................................................................................................................................. 4  

### 2. Stakeholders ..............................................................................................................................................................................................................................                              5  

#### 3. Architecture Overview ..............................................................................................................................................................................................................................                     6  
#### 3.1. Context ..............................................................................................................................................................................................................................                                6  
#### 3.2. Solution Scope ..............................................................................................................................................................................................................................                         6  
#### 3.3. As-Is Architecture ..............................................................................................................................................................................................................................                     6  
#### 3.4. Target Architecture ..............................................................................................................................................................................................................................                    6  
#### 3.5. Previous Input ..............................................................................................................................................................................................................................                         6  

#### 4. Application Architecture                 7  
#### 4.1. Logical Application Diagram           7  
#### 4.2. Application Building Blocks           7  
#### 4.3. Dynamic Design                        7  

#### 5. Data Architecture                        8  
#### 5.1. Main Analytical Use Cases             8  
#### 5.2. Data Access and Utilization           8  
#### 5.3. Conceptual Data Model                 9  
#### 5.4. Logical Data Model                   10  
#### 5.5. Data Flow Diagram                    10  
#### 5.6. Data Quality                         10  
#### 5.7. Metadata                             10  

#### 6. Infrastructure Architecture            11  
#### 6.1. Logical Infrastructure Diagram       11  
#### 6.2. Infrastructure Building Blocks       11  

#### 7. Interfaces                             12  

#### 8. Security by Design                     13  
#### 8.1. Security Implications                13  
#### 8.2. Access Management                    13  
#### 8.3. Supply Chain Management              13  

#### 9. Service by Design                      15  
#### 9.1. Service Implications                 15  
#### 9.2. Business Change Implications         15  
#### 9.3. Service Levels                       15  
#### 9.4. Service Monitoring                   15  
#### 9.5. Testability                          16  
#### 9.6. Solution Environments                16  

#### 10. Architecture Summary                  17  
#### 10.1. Decisions                           17  
#### 10.3. Waivers                             18  
#### 10.4. Requirements Compliance             18  
#### 10.5. Risks, Assumptions, Issues, and Dependencies  18  

#### 11. Additional Details                    21  
#### 11.1. Estimation                          21  
#### 11.2. Principle Alignment                 21  
#### 11.3. Document References                 22  
#### 11.4. Glossary                            22  

#### 12. Template                              23  

# Table of Contents

| Section                                      | Page |
|----------------------------------------------|------|
| **Document Purpose**                         | 3    |
| **1. Summary**                               | 3    |
| 1.1. Contacts                                | 3    |
| 1.2. References                              | 3    |
| 1.3. Document History                        | 4    |
| 1.4. Approvals                               | 4    |
| **2. Stakeholders**                          | 5    |
| **3. Architecture Overview**                 | 6    |
| 3.1. Context                                 | 6    |
| 3.2. Solution Scope                          | 6    |
| 3.3. As-Is Architecture                      | 6    |
| 3.4. Target Architecture                     | 6    |
| 3.5. Previous Input                          | 6    |
| **4. Application Architecture**              | 7    |
| 4.1. Logical Application Diagram             | 7    |
| 4.2. Application Building Blocks             | 7    |
| 4.3. Dynamic Design                          | 7    |
| **5. Data Architecture**                     | 8    |
| 5.1. Main Analytical Use Cases               | 8    |
| 5.2. Data Access and Utilization             | 8    |
| 5.3. Conceptual Data Model                   | 9    |
| 5.4. Logical Data Model                      | 10   |
| 5.5. Data Flow Diagram                       | 10   |
| 5.6. Data Quality                            | 10   |
| 5.7. Metadata                                | 10   |
| **6. Infrastructure Architecture**           | 11   |
| 6.1. Logical Infrastructure Diagram          | 11   |
| 6.2. Infrastructure Building Blocks          | 11   |
| **7. Interfaces**                            | 12   |
| **8. Security by Design**                    | 13   |
| 8.1. Security Implications                   | 13   |
| 8.2. Access Management                       | 13   |
| 8.3. Supply Chain Management                 | 13   |
| **9. Service by Design**                     | 15   |
| 9.1. Service Implications                    | 15   |
| 9.2. Business Change Implications            | 15   |
| 9.3. Service Levels                          | 15   |
| 9.4. Service Monitoring                      | 15   |
| 9.5. Testability                             | 16   |
| 9.6. Solution Environments                   | 16   |
| **10. Architecture Summary**                 | 17   |
| 10.1. Decisions                              | 17   |
| 10.3. Waivers                                | 18   |
| 10.4. Requirements Compliance                | 18   |
| 10.5. Risks, Assumptions, Issues, and Dependencies | 18 |
| **11. Additional Details**                   | 21   |
| 11.1. Estimation                             | 21   |
| 11.2. Principle Alignment                    | 21   |
| 11.3. Document References                    | 22   |
| 11.4. Glossary                               | 22   |
| **12. Template**                             | 23   |


#  Document Purpose

This document provides the High-Level design (HLD) which builds on the
initial architecture defined within the Solution Blueprint and the
Proposition document to finalise the architecture for the solution and
by which Domains can produce Domain specific Low-Level designs (LLD) and
build the proposed solution. The HLD specifies the architecture building
blocks that make up the solution and highlights functional and
non-functional requirements alignment & final delivery scope for
traceability as well as all necessary information to drive accurate
delivery costs.

# Summary

| Status          | DRAFT                  |                    |                |
|-----------------|------------------------|--------------------|----------------|
| Author          | Rakesh Jain            | Date               | 30/05/2024     |
| Sponsoring Area | Secretary’s Department | Business Sponsor   | Seb Walsh      |
| Version         | 1.0                    | Document Reference | \[ID-version\] |

### Contacts

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 49%" />
</colgroup>
<thead>
<tr>
<th>Programme &amp; Portfolio Manager</th>
<th>Nicolette Usher</th>
</tr>
</thead>
<tbody>
<tr>
<th><p>Primary Stakeholder</p>
<p>(Representing the request)</p></th>
<td>Kelly Clark, Project Manager</td>
</tr>
<tr>
<th>Accountable Architect</th>
<td>David Parrott, Rakesh Jain</td>
</tr>
<tr>
<th>Accountable Business Analyst</th>
<td>[BA name]</td>
</tr>
</tbody>
</table>

### References 

| Statement of Business Need | \[Insert SOBN link\] |
|----|----|
| Initial Technology Assessment (ITA) | \[Insert ITA link\] |
| Architecture Approach | \[Insert Architecture Approach link\] |
| Proposition Document | \[Insert approved Proposition Document link if relevant\] |
| Solution Blueprint | \[Insert approved Solution Blueprint link if relevant\] |
| Technical Options | \[Insert approved Technical Options link if relevant\] |
| Business Requirements Document | \[Insert BRD link\] |
| Other link description | \[Insert other link (any other relevant material that has informed this engagement)\] |

### Document History

| Version | Date | Author | Summary of Change |
|----|----|----|----|
| 1.0 | 30/05/2024 | Rakesh Jain | Final draft submitted for review |
| 2.0 | 12/06/24 | Rakesh Jain/Colinda Latour | Updated Template with changes from comments. |
| 3.0 | 14/06/24 | Rakesh Jain/Molly Brean/Colinda Latour | Updated with additional collateral on decisions, risks & dependencies. |

### Approvals

| Architecture Design Authority – Peer review and challenge: | \[Insert date of ADA submission, and link to ADA meeting notes\] |
|----|----|
| Architecture Review Board - Governance: | \[Insert date of ARB approval and link to ARB outcomes\] |
| Primary Stakeholder Acceptance: | \[Insert acceptance email from primary stakeholder\] |
| Date Finalised: | \[Insert the date that this deliverable was finalised and ready for handover\] |

# Stakeholders

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 29%" />
<col style="width: 27%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr>
<th><p>R- Responsible</p>
<p>(Author)</p></th>
<th><p>A-Accountable</p>
<p>(Sign off completed document)</p></th>
<th><p>C-Consulted</p>
<p>(Contribute expertise)</p></th>
<th colspan="4"><p>I-Informed</p>
<p>(Document emailed after sign-off)</p></th>
</tr>
</thead>
<tbody>
<tr>
<th>Area</th>
<td>Name / Mailbox</td>
<td>Role</td>
<td>R</td>
<td>A</td>
<td>C</td>
<td>I</td>
</tr>
<tr>
<th>Infotechtion</th>
<td>Colinda Latour / Molly Brean</td>
<td>Information Governance Lead / Technical Specialist</td>
<td><mark>☐</mark></td>
<td>☐</td>
<td>☐</td>
<td>☐</td>
</tr>
<tr>
<th>Bank</th>
<td></td>
<td></td>
<td>☐</td>
<td>☐</td>
<td><mark>☐</mark></td>
<td>☐</td>
</tr>
<tr>
<th></th>
<td></td>
<td></td>
<td>☐</td>
<td>☐</td>
<td>☐</td>
<td>☐</td>
</tr>
<tr>
<th></th>
<td></td>
<td></td>
<td>☐</td>
<td>☐</td>
<td>☐</td>
<td>☐</td>
</tr>
<tr>
<th></th>
<td></td>
<td></td>
<td>☐</td>
<td>☐</td>
<td>☐</td>
<td>☐</td>
</tr>
</tbody>
</table>

# Architecture Overview

<span id="_Toc145519981" class="anchor"></span>The Bank’s physical
records and electronic records in FileSite are currently managed by
Autonomy Records Manager (ARM). This system provides the capability to
classify our records in line with the Bank’s Records Classification
Scheme (RCS) and to manage the retention and defensible disposition of
those records based on the retention policies specified in the RCS. It
also provides the location management of physical records. The
capabilities of ARM are being replaced by utilising the records
management capabilities of Microsoft Purview supplemented by i-ARM.
Electronic records (in CLOSED FileSite Folders) will be migrated to
SharePoint Online.

The document contains the details of the i-ARM offerings, which is a
comprehensive data and records management product. It provides the
high-level details of what will be required to implement i-ARM component
on the Banks Microsoft Azure production tenant.

The use of i-ARM is designed to enhance the Bank’s data governance and
compliance processes while ensuring seamless integration with M365
workloads and Purview. This solution leverages advanced capabilities to
provide organizations with complete visibility and control over their
data assets.

This high level design covers the necessary design for the
implementation for the i-ARM component and covers the following aspects
for the design:

- Th implementation of the i-ARM component on the Banks Tenant IaaS and
  PaaS infrastructure

- The connectivity of the i-ARM component through to the Banks M365
  Tenant – SPO and Purview

- The DevOps pipeline for updates for the i-ARM components from
  Infotechtion environment

- The implementation of the Online Reporting Platform for i-ARM.

. It does not cover other aspects which will be required for the
completion of the project, such as:

- The connectivity back to on-premise required for the migration of
  documents

- The on-going movement of documents from on-premise ARM and FileSite to
  i-ARM and SPO as records close on ARM

- I Information Architecture for the structure of the target solution
  within SharePoint Online

- The actual migration process

- tInetgartion with the Banks implementation of Preservuica for the
  digital preservation of documents.

As such it is a platform design, further high-level designs will need to
be produced to inform on these aspects above at a later date. The
production of these designs will need to be scheduled and planned.

Note that the Architecture Brief for this ARM Replacement project deals
with the on-premise infrastructure which is required for the migration
tool Proventeq. This is to enable the discovery and the extraction of
the data from Filesite and ARM. We will extend this HLD to include the
design and implementation necessary to enable the migration of documents
to M365.

### Context

<span id="_Toc145519982" class="anchor"></span>i-ARM will be deployed in
BoE’s Azure environment, providing a scalable and secure platform that
aligns with the Bank’s cloud strategy and extends Microsoft Purv’ew's
capabilities, enabling advanced data governance, discovery, and
classification features. This ensures that the B’nk's data is
effectively managed and compliant with regulatory requirements.

The product is designed to be extensible and can be integrated with
other services, like Preserve365, in the future. This enables the
organization to leverage specialized tools for digital preservation,
further enhancing the overall data management strategy.

### Solution Scope

The scope of the product deployment described in this section of the HLD
relates to the target architecture, defining the elements that are
included and excluded from the solution.

Included in Scope for this HLD version:

- Data and Records Management: The i-ARM provides physical records
  management offerings, along with archival and disposal of records
  using disposal dashboard.

- Integration with M365, namely SPO and Microsoft Purview: Integrations
  with Microsoft Purview, extending its capabilities to enhance data
  discovery, classification, and governance.

- Deployment in BoE Azure Environment: i-ARM will be deployed on the BoE
  Azure cloud platform, utilizing Az’re's infrastructure services to
  ensure scalability, security, and high availability.

- 

i-ARM is a pre-packaged solution offered as a dedicated service with its
own API layer for proprietary actions. Additionally, integration with
external systems such as SharePoint and Purview is facilitated using
standard Microsoft Graph APIs.

### As-Is Architecture

The diagram below provides a high-level as-is architecture of the
existing FileSite and ARM solutions within the B’nk's environment.
<img src="./ArchitectureImages/image1.png" style="width:7.24985in;height:3.64167in"
alt="A diagram of a computer network Description automatically generated" />

### Target Architecture

The diagram below provides a high-level overview of how the i-ARM
product fits into the broader ecosystem, interacting with multiple
external systems within/out of BoE IT environment to fulfil its role as
a comprehensive data and records management solution.
<p align="center">
<img src="./ArchitectureImages/image2.png" style="width:7.26875in;height:6.56875in"
alt="A diagram of a system Description automatically generated" />
</p>
Here is an explanation of each component and its role within the
architecture:

- Users (i-ARM Personas): This represents the end-users who will
  interact with the i-ARM solution. These users perform various actions
  related to records and data management, utilizing the solution’s
  dashboards and different services.

- i-ARM Solution (Software System): The principal component of the
  architecture, the i-ARM solution is designed to enable data and
  records management activities. It provides users with features to
  govern data, manage records, and implement data governance
  configurations.

- Release Management (Software System): This component represents the
  integrated toolchain for continuous integration and continuous
  delivery (CI/CD). It is responsible for managing updates and deploying
  new features to the i-ARM solution to ensure it remains current and
  functional.

- Records Archival (Software System): This system provides digital
  preservation capabilities for long-term storage and access to data.
  The i-ARM solution integrates with this component to ensure that data
  is archived according to governance policies.

- SharePoint (Software System): SharePoint provides a collaborative
  platform that supports document management and team communication. The
  i-ARM solution integrates with SharePoint for data access and
  governance configurations, ensuring that data is appropriately managed
  and accessible.

- Records Migration (Software System): This component represents a
  content migration solution that facilitates the migration of records
  into the i-ARM solution and runs within the On-premises infrastructure
  of BoE. It ensures data migration connections and activities are
  seamless and efficient.

Online Reporting Platform \[Software System\]: A cloud-based analytics
platform that allows users to visualize data, share insights, and
collaborate on reports. It receives dashboards and reports created using
the i-ARM data stores

<!-- - . -->

### Transition Architecture diagram 

This diagram provides a high-level overview of how the legacy systems of
ARM and FileSite will be replaced. The focus for this iteration of the
High-Level design is on the implementation of the i-ARM component and
the integration with the Banks M365 tenant and the SPO and Purview
components. This is implementation is highlighted below in the diagram.
<p align="center">
<img src="./ArchitectureImages/image3.png" style="width:6.7524in;height:3.38828in" />
</p>
<!-- ##Previous Input -->

| **Source** | **Type** | **Architecture Comment** |
|----|----|----|
| Filesite & ARM Replacement Solution Blueprint | Decision: KD01: M365 is our target solution utilising SharePoint Online (SPO), Purview, OneDrive4Business (OD4B), MS Search and Teams (including E5 Information Compliance). | Foundational to this design |
| Filesite & ARM Replacement Solution Blueprint | Decision: KD02: Infotechtion ARM (i-ARM) has been chosen as an extension onto SPO and Purview for the purposes of paper Records Management and improved support of mass disposition reviews | Foundational to this design |

The Above table include the main decisions form the Solution Blueprint
which are pertinent to the design contained within this HLD at tis
stage.

All design decisions concerning the target architecture are documented
in section 10.1. Details regarding the current state architecture, such
as RAID, should be maintained by the bank

# Application Architecture 

The Application Architecture section below focuses on the design and
structure of the application that provides the functional capabilities
required for the i-ARM product. This description explains how various
architectural building blocks forms the complete product and its
functional framework.

### Logical Application Diagram

The diagram below represents the logical component architecture design
of the i-ARM and provides the overall view of the components involved to
provide i-ARM functionality along with integrations with external
systems.

The primary logical components of the system are shown as below

- User Interface Layer:

  - Provides a unified dashboard for users (i-ARM Personas) to interact
    with the system.

  - Offers tools for records management, governance actions, and data
    insights.

  - Designed for ease of use to promote user adoption.

- Business Service Layer:

  - Contains the core business logic for data and records management.

  - Implements the governance policies for data classification,
    retention, and access.

  - Implements automated and triggered workflows e.g. using Power
    Automate.

- Application Integration Layer:

  - Facilitates communication between the i-ARM user interface and other
    system components e.g. APIs or endpoints.

  - Manages the integration with external systems for archival.

  - Implements secure APIs.

- Data Storage Layer:

  - Ensures data integrity, security using relational database system.

- External Systems:

  - Release Management: Manages deployment pipelines for continuous
    integration and delivery of the i-ARM solution.

  - Records Archival: Provides digital preservation capabilities for
    long-term data storage.

  - SharePoint: Supports document management and collaboration.

  - Records Migration: Handles data migration into the i-ARM system from
    legacy systems.

  - Reporting System: Provides the cloud-based analytics platform to
    publish reports.

<!-- **  
** -->

<img src="./ArchitectureImages/image4.png" style="width:7.20903in;height:6.44048in"
alt="A diagram of a system Description automatically generated" />

<img src="./ArchitectureImages/image5.png" style="width:7.26875in;height:8.93056in"
alt="A screenshot of a computer Description automatically generated" />

### Application Building Blocks

The i-ARM solution is designed with a modular and integrated
architecture to provide data and records management capabilities.

The architecture diagram presented below illustrates the high-level
structure of the system, highlighting the core containers and their
interactions with external systems. This architecture ensures seamless
integration for data governance, archival, and reporting functionalities
while maintaining flexibility for future enhancements.

Each container is carefully designed to interact with others in a manner
that supports efficient data flow, secure management, and comprehensive
reporting.

<img src="./ArchitectureImages/image7.png" style="width:8.01183in;height:5.14583in"
alt="A diagram of a person&#39;s work flow Description automatically generated" />The
diagram serves as a visual guide to understanding how the i-ARM solution
orchestrates these interactions, ensuring a cohesive and effective
system for managing data and records.

**i-ARM Software System Containers Description:**

1.  Identity Applications

    - Purpose: Manages authentication and access control for i-ARM
      services.

    - Technology: Microsoft Entra ID (SaaS).

    - Responsibilities:

      - Register and configure applications for secured access.

      - Perform Authentication.

      - Access control management.

    - Interactions:

      - Users: Authenticates and authorizes users.

      - Web Application, SharePoint Application, API Applications:
        Provides authentication services to these containers ensuring
        secure access.

2.  Web Application

    - Purpose: Provides a user interface for interacting with i-ARM
      features and services.

    - Technology: React and .NET Azure WebApp.

    - Responsibilities:

      - i-ARM User interface for record interaction and management.

      - Delivery of services through a web browser.

    - Interactions:

      - Users: Interfaces directly with users for record management
        interaction.

      - Identity Applications: Utilizes authentication services to
        verify user access.

      - API Applications: Makes API calls to access backend services and
        data.

3.  SharePoint Application

    - Purpose: Custom built interface for performing actions related to
      physical records to manage them.

    - Technology: SPFx and TypeScript.

    - Responsibilities:

      - Interface for creating and managing records.

      - Interaction with archive boxes.

    - Interactions:

      - Users: Direct user interaction for records management.

      - Identity Applications: Uses authentication services for secure
        access.

      - API Applications: Makes API calls for backend data services.

      - SharePoint: Integrates with the management process for physical
        records.

4.  Networking

    - Purpose: Ensures secure connectivity for internal communications
      within i-ARM.

    - Technology: Azure Virtual Network and Subnets.

    - Responsibilities:

      - Secured communication channels.

      - Integration of service and private endpoints.

    - Interactions:

      - All Containers: Provides secure VNET integration for internal
        communication between different containers.

5.  API Applications

    - Purpose: Provides i-ARM features and services accessed via APIs.

    - Technology: Serverless and .NET, Azure Functions.

    - Responsibilities:

      - Expose functionalities through HTTPs and JSON.

      - Serve as backend for numerous services.

    - Interactions:

      - Web Application, SharePoint Application, Background
        Applications: Provides backend services and data via API calls.

      - Database: Reads from and writes to the database for data storage
        and retrieval.

6.  Background Applications

    - Purpose: Handles background processes and scheduled data
      processing.

    - Technology: Serverless Functions, .NET, Power Automate.

    - Responsibilities:

      - Asynchronous data processing.

      - Scheduled tasks management.

    - Interactions:

      - Database: Archives records and performs scheduled data
        processing tasks.

      - API Applications: Interacts for backend services as needed.

      - Records Archive & Disposal: Manages long-term storage and
        disposal processes.

7.  Dashboards & Reports

    - Purpose: Acts as an interface between SQL database and Power BI
      reports.

    - Technology: Power BI Report Files.

    - Responsibilities:

      - Data visualization and reporting.

    - Interactions:

      - Database: Imports data for analysis and reporting.

      - Users: Provides visual reports and dashboards for data insights.

      - Data Gateway: Facilitates data transfer between SQL database and
        Power BI

8.  Database

    - Purpose: Central data repository for i-ARM.

    - Technology: Azure SQL Database.

    - Responsibilities:

      - Store i-ARM application data and configuration metadata.

      - Support for read/write operations.

    - Interactions:

      - API Applications, Background Applications, Dashboards & Reports:
        Read from and write data to the database for various operations.

9.  Data Gateway

    - Purpose: Facilitates data transfer between SQL databases and Power
      BI.

    - Technology: Azure VM, IaaS.

    - Responsibilities:

      - Data import/export management.

      - Secure data bridge.

    - Interactions:

      - Dashboards & Reports: Enables data connectivity for reporting
        and analytics.

> **Binary Scan** **– For the deployment of i-ARM code (initial and for
> on-going** **updates)**
>
> For Azure resource deployments via code (Infrastructure as code),
> i-ARM implementation follows the Microsoft-recommended, verified
> modules. These modules ensure that configurations align with the
> Well-Architected Framework of Azure, significantly reducing the
> chances of incorrectly configured resources within the environment.
>
> Regarding solution builds, such as function apps and web apps, i-ARM
> follow SecOps principles. In the DevOps pipelines, binaries are
> evaluated using standard tools, and specific activities are performed,
> including checks for memory leaks and assessments of cyclomatic code
> complexities. Additionally, all modules undergo unit testing, and the
> pipelines are designed to push artifacts only after successful
> completion of these tests. This rigorous process ensures that
> deployment artifacts are well-tested, thereby minimizing any margin of
> error or issues arising from unforeseen errors.

10. **  
    **

**External Systems and Dependencies of i-ARM**

1.  Release Management

    1.  Purpose: Manages the CI/CD pipeline for application deployment.

    2.  Technology: Azure DevOps.

    3.  Interactions:

        1.  DevOps Users: DevOps users create and deploy builds using
            this system.

        2.  Identity Applications: Deploys new builds and manages
            integration for continuous delivery.

2.  Compliance Portal

    1.  Purpose: Manages records governance policies.

    2.  Technology: Microsoft Purview (SaaS).

    3.  Interactions:

        1.  SharePoint Application: Applies compliance policies to
            records.

        2.  Records Archive & Disposal: Ensures compliance with
            long-term storage and disposal policies.

3.  SharePoint

    1.  Purpose: Collaborative platform for document management and team
        communication.

    2.  Technology: SharePoint (SaaS).

    3.  Interactions:

        1.  SharePoint Application: Uses SharePoint for document and
            records management.

        2.  Compliance Portal: Applies policies and manages document
            retention.

4.  Records Migration (for information only at this stage, <u>not</u>
    part of this version of the design)

    1.  Purpose: Content migration solution running within the
        on-premises environment of BoE

    2.  Technology: Software System.

    3.  Interactions:

        1.  SharePoint Application: Facilitates the migration of
            physical records into the system.

        2.  Records Archive & Disposal: Assists in migrating records for
            long-term archiving.

5.  Records Archive & Disposal (for information only at this stage,
    <u>not</u> part of this version of the design)

    1.  Purpose: Long-term data storage and disposal.

    2.  Technology: Software System.

    3.  Interactions:

        1.  Background Applications: Archives records and manages
            disposal processes.

        2.  Compliance Portal: Ensures records are archived and disposed
            of according to compliance policies.

6.  Online Reporting Platform

    1.  Purpose: Data analytics and visualization platform.

    2.  Technology: Software System.

    3.  Interactions:

        1.  Dashboards and Reports: Enables data visualisation and
            analysis.

**Scalability and Resilience of i-ARM Containers**

Table below provides the clear and concise overview of the scalability
and resilience features of each container, along with the rationale for
technology selection.

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 21%" />
<col style="width: 22%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr>
<th>i-ARM Container</th>
<th>Scalability</th>
<th>Resilience</th>
<th>Technology Choice</th>
</tr>
</thead>
<tbody>
<tr>
<th>Identity Applications</th>
<td><p>Automatically scales to handle more users.</p>
<p>Supports multi-tenant environments.</p></td>
<td><p>High availability with SLA guarantees.</p>
<p>Built-in redundancy.</p></td>
<td><p>Microsoft Entra ID</p>
<p>Reason: Preferred for its seamless integration with other Microsoft
services and enterprise-level identity management capabilities.</p></td>
</tr>
<tr>
<th>Web Application</th>
<td><p>Scales out automatically using Azure App Service.</p>
<p>Can handle increased traffic with minimal configuration.</p></td>
<td><p>SLA-backed high availability.</p>
<p>Automatic backups and disaster recovery options.</p></td>
<td><p>Azure Web App</p>
<p>Reason: Chosen for its simplicity and powerful features for web app
hosting, offering better ease of use and deployment
flexibility.</p></td>
</tr>
<tr>
<th>SharePoint Application</th>
<td><p>Leverages SharePoint On l’ne's ability to scale with
organizational needs.</p>
<p>Supports large volumes of data and users.</p></td>
<td><p>Built-in data redundancy and high availability like SharePoint
services.</p>
<p>Be-spoke automated routines for backing up data from SharePoint to
Azure storage accounts.</p></td>
<td><p>SPFx and TypeScript</p>
<p>Reason: SPFx offers a development framework tailored for SharePoint,
providing deeper integration and customization options.</p></td>
</tr>
<tr>
<th>Networking</th>
<td><p>VNet scales to accommodate growing services and endpoints.</p>
<p>Flexible configuration to optimize traffic flow.</p></td>
<td><p>High availability and redundancy within Azure regions.</p>
<p>Supports VPN and ExpressRoute for secure, resilient
connections.</p></td>
<td><p>Azure Virtual Network</p>
<p>Reason: Offers superior integration with Azure services and enhanced
security features.</p></td>
</tr>
<tr>
<th>API Applications</th>
<td><p>Automatically scales with demand using Azure Functions.</p>
<p>Handles spikes in traffic efficiently.</p></td>
<td><p>Built-in fault tolerance and redundancy.</p>
<p>Durable Functions for stateful workflows ensure resilience.</p></td>
<td><p>Azure Functions</p>
<p>Reason: Chosen for its serverless architecture, reducing overhead and
cost compared to Azure App Services, which are better for full-fledged
applications rather than lightweight, event-driven tasks.</p></td>
</tr>
<tr>
<th>Background Applications</th>
<td><p>Serverless scaling with Azure Functions.</p>
<p>Scales according to the workload with no pre-provisioning
needed.</p></td>
<td><p>Durable Functions ensure reliability of long-running
processes.</p>
<p>High availability and disaster recovery options.</p></td>
<td><p>Azure Functions, Power Automate</p>
<p>Reason: These serverless offerings provides a more flexible and
scalable solution for background tasks.</p></td>
</tr>
<tr>
<th>Dashboards &amp; Reports</th>
<td>Can handle large datasets and concurrent report access.</td>
<td>SLA-backed service reliability.</td>
<td><p>Power BI Report Files</p>
<p>Reason: Power BI offers advanced analytics and visualization
capabilities that integrate seamlessly with Azure services, providing
more robust features.</p></td>
</tr>
<tr>
<th>Database</th>
<td>Azure SQL Database can scale to accommodate larger datasets and
higher query volumes.</td>
<td><p>High availability with geo-replication can be configured.</p>
<p>Automated backups and point-in-time restore.</p></td>
<td><p>Azure SQL Database</p>
<p>Reason: Selected for its fully managed service with strong
integration options and built-in intelligence, offering better overall
performance and manageability.</p></td>
</tr>
<tr>
<th>Data Gateway</th>
<td><p>Can be configured to scale to manage increasing data loads
between on-premises data sources and cloud services.</p>
<p>Optimized for large data transfers.</p></td>
<td>Infrastructure services managed by Azure for reliability.</td>
<td><p>Azure VM (IaaS)</p>
<p>Reason: Using Azure VM provides more control and customization for
data transfer processes.</p></td>
</tr>
</tbody>
</table>

### Dynamic Design

| N/A |
|-----|

# Data Architecture

This section describes the data aspects of the i-ARM product that
employs a central relational database for its operations and offerings.

The database used is the PaaS offering from Azure i.e. Azure SQL
database that provides numerous advantages e.g. freedom to scale when
required, ability to cope up with increasing load and hassle-free
management and maintenance reducing the overhead of operations and IT
teams.

The table below shows the different architectural criteria considered
before finalizing the SQL Azure database as a backend for i-ARM.

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 82%" />
</colgroup>
<thead>
<tr>
<th>Criteria</th>
<th>Justification</th>
</tr>
</thead>
<tbody>
<tr>
<th>Reliability</th>
<td><p>- Built-in high availability with automatic failover
configurations ensures minimal downtime.</p>
<p>- Active geo-replication configuration possibilities enable creating
readable secondary databases in different regions for disaster
recovery.</p>
<p>- Automatic backups with point-in-time restore ensure data can be
restored from any point within the retention period.</p></td>
</tr>
<tr>
<th>Scalability</th>
<td><p>- Easily scale the database up or down to accommodate varying
loads without application downtime.</p>
<p>- Read replicas configuration possibilities allow scaling read
workloads without affecting primary database performance.</p></td>
</tr>
<tr>
<th>Maintainability</th>
<td><p>- Regular maintenance and updates are automatically applied by
the Azure platform, reducing manual effort.</p>
<p>- Integrated tools like Azure Monitor and SQL Analytics provide
insights into performance and health, aiding in proactive
maintenance.</p>
<p>- Intelligent features like automatic tuning and recommendations help
optimize performance automatically.</p></td>
</tr>
</tbody>
</table>

### Main Analytical Use Cases

The following table outlines various personas and actors engaging with
the i-ARM database through the i-ARM portal, along with a brief
description of the nature of their interactions.

| Capability | Description |
|----|----|
| i-ARM Authenticated User Personas | Application users interacting with the i-ARM services with their roles e.g. Administrators, archive reviewers etc. |
| i-ARM application process and backend workers | Service to service connectors to perform data read and write actions to the i-ARM tables in the database. |

| Explorer | Build an ML pipeline |
|----|----|
| Constructor | Automating pipelines with A&V tools that connect to the data source |
| Influencer | Consuming data via a gateway (Tableau Server, etc.) |

### Data Access and utilisation 

i-ARM leverages Azure SQL Database as its central data repository. The
table provided above identifies the various actors interacting with the
database, while the data flow diagram illustrates the nature of these
interactions and the movement of data into and out of the database.

Please refer to the logical data model below for a general understanding
of i-’RM's backend, which highlights the primary components of the data
store and their significance.

Additionally, the table provides an overview of how different personas
and services securely access and utilize the Azure SQL Database by
leveraging Azure AD authentication, role-based access control, and
network security features.

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 21%" />
<col style="width: 29%" />
<col style="width: 29%" />
</colgroup>
<thead>
<tr>
<th>Persona/Service</th>
<th>Access Type</th>
<th>Description of Data Access</th>
<th>Security Measures</th>
</tr>
</thead>
<tbody>
<tr>
<th>i-ARM Web Application</th>
<td>Read/Write</td>
<td>Accesses the database to perform CRUD (Create, Read, Update, Delete)
operations for the application logic.</td>
<td>- Azure AD authentication for service principal credentials<br />
- SQL Firewall rules to restrict access by IP<br />
- Managed identities for authentication</td>
</tr>
<tr>
<th>Database Admin</th>
<td>Read/Write</td>
<td>Responsible for database setup, maintenance, and monitoring, with
access to all data and schema modifications.</td>
<td>- Azure AD authentication with MFA (on approval)<br />
- Role-based access control (RBAC)<br />
- Activity logging and auditing</td>
</tr>
<tr>
<th>I-ARM Reporting Layer</th>
<td>Read</td>
<td>Queries the database for reporting and analytics purposes, without
modifying data.</td>
<td>- Azure AD authentication with MFA<br />
- Read-only database roles</td>
</tr>
<tr>
<th>i-ARM Backend Services</th>
<td>Read/Write</td>
<td>Accesses the database to perform CRUD (Create, Read, Update, Delete)
operations for the backend logic.</td>
<td><p>- Managed identities for authentication</p>
<p>- IP firewall rules for allowed services<br />
- Role-based access control (RBAC)</p></td>
</tr>
</tbody>
</table>

### Conceptual Data Mode

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 32%" />
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 10%" />
<col style="width: 9%" />
<col style="width: 8%" />
<col style="width: 8%" />
</colgroup>
<thead>
<tr>
<th><strong>Entity Name</strong> </th>
<th><strong>Definition</strong> </th>
<th><strong>Data Owner</strong> </th>
<th><strong>Data sensitivity</strong> </th>
<th><strong>Records Classification</strong> </th>
<th><strong>Records Retention &amp; Disposal</strong> </th>
<th><p><strong>Mastered </strong> </p>
<p><strong>by</strong> </p></th>
<th><strong>Used by</strong> </th>
</tr>
</thead>
<tbody>
<tr>
<th>Source </th>
<td>The entity captures the data about various data sources like Azure
Files, Network Files, M365<del>,</del> <del>AWS, M-Files, Sybase
etc.</del> </td>
<td>i-ARM Admin </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<th>Source Instance </th>
<td>The entity captures information about a subset of data from the
specific source. </td>
<td>Primary Owner </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<th>Retention Labels </th>
<td>The entity captures all the labels synchronized from M365 Purview to
achieve records management functionality. </td>
<td>Record Manager </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<th>Disposal Details </th>
<td>The entity captures details of all the records/files which are ready
for disposition or archival. </td>
<td>Disposition Reviewer, Archival Reviewer </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<th>Audit Logs </th>
<td>The entity captures all the audit data from various events that
occur in various i-ARM processes. </td>
<td>i-ARM Admin </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
</tbody>
</table>

### Logical Data Model

> The section below shows the generalised data model of i-ARM system
> that primarily makes use of the SQL Azure database for storing its
> configurations and operational data.
>
> The design shows the schema of underlying key tables used by i-ARM and
> their relationship with different tables in the system. The database
> is normalized with third normal form standard to achieve data
> integrity, efficient storage, flexibility as well as the query
> performance for the reporting.
>
> The design shows the schema of underlying key tables used by i-ARM and
> their relationship with different tables in the system. The database
> is normalized with third normal form standard to achieve data
> integrity, efficient storage, flexibility as well as the query
> performance for the reporting.

Data security and compliance:

- Due to the use of Azure SQL database offering as the backend of i-ARM,
  the Data at rest is encrypted using Transparent Data Encryption (TDE).

- Role-based access control (RBAC) ensures that users have access only
  to the data they need.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr>
<th><p>The purpose of this section is to provide information about key
attribute level data that is part of and included in the i-ARM.</p>
<p><img src="./ArchitectureImages/image8.emf" /></p>
<p>i-ARM data model uses indexes to ensure queries are executed in
efficient manner. Following are some of the indexes defined on the
various entities:</p>
<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 27%" />
<col style="width: 41%" />
</colgroup>
<thead>
<tr>
<th><strong>Entity Name</strong></th>
<th><strong>Attribute Name</strong></th>
<th><strong>Index Types</strong></th>
</tr>
</thead>
<tbody>
<tr>
<th>Sources</th>
<td>SourceName</td>
<td>Unique non-clustered index</td>
</tr>
<tr>
<th>SourceInstances</th>
<td>SourceInstanceName</td>
<td>Unique non-clustered index</td>
</tr>
<tr>
<th>SourceInstances</th>
<td>SourceId</td>
<td>Non-unique non-clustered index</td>
</tr>
<tr>
<th>RetentionLabels</th>
<td>RetentionLabelId</td>
<td>Unique non-clustered index</td>
</tr>
<tr>
<th>RetentionLabels</th>
<td>RetentionLabelName</td>
<td>Unique non-clustered index</td>
</tr>
<tr>
<th>DisposalDetails</th>
<td>FileUniqueId</td>
<td>Non-unique non-clustered index</td>
</tr>
<tr>
<th>DisposalDetails</th>
<td>RetentionLabelId</td>
<td>Non-unique non-clustered index</td>
</tr>
<tr>
<th>AuditLogs</th>
<td>ObjectId</td>
<td>Non-unique non-clustered index</td>
</tr>
</tbody>
</table>
<p>Following are the attributes which is sensitive with respect to
person or organization:</p>
<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 20%" />
<col style="width: 39%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th><strong>Entity Name</strong></th>
<th><strong>Attribute Name</strong></th>
<th><strong>Definition</strong></th>
<th><strong>Data sensitivity</strong></th>
</tr>
</thead>
<tbody>
<tr>
<th>DisposalDetails</th>
<td>FileName</td>
<td>Name of the File</td>
<td>Internal</td>
</tr>
<tr>
<th>DisposalDetails</th>
<td>DispositionReviewer</td>
<td>Disposition Reviewer</td>
<td>Internal</td>
</tr>
<tr>
<th>DisposalDetails</th>
<td>ArchiveReviewer</td>
<td>Archive Reviewer</td>
<td>Internal</td>
</tr>
<tr>
<th>DisposalDetails</th>
<td>SiteTitle</td>
<td>Title of the Site</td>
<td>Internal</td>
</tr>
<tr>
<th>RentetionLabels</th>
<td>RetentionLabelName</td>
<td>Name of the Retention Label applied to File</td>
<td>Internal</td>
</tr>
</tbody>
</table></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Data Flow Diagram

The logical data flow diagram shows how data moves through the i-ARM
system.
<p align="center">
<img src="./ArchitectureImages/image9.png" style="width:7.04126in;height:9.10843in"
alt="A diagram of a computer Description automatically generated" />
</p>
The section below explains the general flow of the data within i-ARM

1.  User requests for login

    - Action: The user opens the i-ARM portal in their browser and
      inputs their login credentials issued by Microsoft 365 Tenant.

    - System Response: The credentials are sent to the WebApp, which
      forwards them to the Authentication service for verification.

2.  User Successfully Authenticates and Logs into i-ARM Portal

    - Action: The Authentication service (Azure AD) verifies the u’er's
      credentials.

    - System Response: If the credentials are valid, the user is granted
      access to the i-ARM portal, and the WebApp redirects the user to
      the home page.

3.  Disposal Dashboard Page Requests Web API to Get Disposable Items

    - Action: The user navigates to the Disposal Dashboard page within
      the i-ARM portal.

    - System Response: The WebApp sends a request to the Web API to
      retrieve a list of disposable items from the Database.

4.  Disposable Items are Visible in Grid View

    - Action: The Web API retrieves the list of disposable items from
      the Database.

    - System Response: The Web API returns the data to the WebApp, which
      displays the items in a grid view on the Disposal Dashboard page.

5.  User Performs Various Disposal Operations on Listed Items

    - Action: The user interacts with the grid to perform various
      disposal operations. The available operations include:

    - Dispose Items: The user selects one or more items and marks them
      for disposal.

      - Extend Retention Period: The user selects items and changes
        their retention period to a later date.

      - Re-Label/Change Retention Label: The user changes the retention
        label of selected items.

      - Archive Items: The user archives selected items for long-term
        storage.

    - System Response: Each operation sends a request to the Web API,
      which interacts with the Database to update the status of the
      items based on the u’er's actions.

6.  User Requests Reports

    - Action: The user selects the Reports option in the i-ARM portal
      and specifies the type of report they need.

    - System Response: The WebApp sends a request to Power BI to
      generate the required report. Power BI retrieves the necessary
      data from the Database and processes it to generate the report,
      which is then returned to the WebApp and displayed to the user.

7.  PA Flow: The section below describes the Power Automate Flows
    deployed as a part of the i-ARM system deployment within BoE Power
    Automate Environment.

    - Disposal Actions Flow: This flow gets triggered daily, it picks
      items disposed or relabelled from i-ARM portal. Fetched item(s)
      details are sent to MS Purview for disposition/ re-labelling and
      Database is updated with proper status to keep track.

    - Business Reviewers Disposition: This is triggered when an item
      reaches the end of its retention period. It retrieves to be
      disposed item details by making request to respective SharePoint
      site. Retrieved data or items details are inserted into database.
      Once it is inserted in database its available for disposition from
      i-ARM portal.

    - Business and Archive Reviewers: Flow is same as Business Reviewers
      Disposition, with the only difference being that an item requires
      an Archive Reviewer User for disposing an item.

    - Compliance Sync: This is Power Automate flow which will
      synchronise Retention Labels from MS Purview and insert details of
      retention label into database.

8.  Physical Records Management:

- **SPFx Module:** This module is a SharePoint solution which handles
  creation and management of Physical Records.

  - User requests login.

    - Action: User opens the browser and inputs their login credentials
      issued by Microsoft 365 Tenant.

    - System Response: The credentials are authenticated by M365’s
      authentication mechanism and the user are logged in.

  - Login request to SharePoint authentication mechanism.

    - Action: User credentials are passed on to M365 Tenant’s own
      authentication mechanism.

    - System Response: User is authenticated from Microsoft’s end.

  - After successful login user will request access to SharePoint

    - Action: After successful log in users will need to request for
      SharePoint site/pages where our solution is deployed if they do
      not have the access already.

    - System Response: Users will then be able to view all the search
      pages and pages where custom forms are implemented.

  - User interacts with SharePoint via custom search pages and forms
    which are designed.

    - Action: User may try to perform any of operations which are
      search, create, edit, view physical records using our solution.

    - System Response: Solution will respond accordingly based on the
      operations performed.

      - Search operation will return search results.

      - Create operation will return display form with created entry.

      - Edit operation will return display form with edited entries.

      - View operation will return display form with relevant details.

- **Bulk Import:** This module is a background process which creates
  physical records based on the records added in csv format.

  - Timer trigger function runs after every interval to pick input file
    for processing.

    - Action: Request to authenticate using AAD certificate.

    - System Response: On successful response, access token is returned
      to the background process.

  - Requests for input file to process.

    - Action: After getting access token, process checks SharePoint list
      for input file.

    - Response: Returns files whose status is “New.”

  - Start processing the input file.

    - Action: Once the input file is received, system starts processing
      the data and creates records in SharePoint list.

    - Response: Returns the response message of success/fail while
      creating records.

  <!-- -->

  - The i-ARM solution leverages capabilities of the PnP framework i.e.
    specifically the PnP search web part to provide search functionality
    within the physical records management feature.

### Data Quality

> N/A

### Metadata 

> N/A

# Infrastructure Architecture

This section highlights i-ARM product’s PaaS services, the only IaaS
component is the on-premises data gateway VM.

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 24%" />
<col style="width: 23%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr>
<th><strong>Status</strong></th>
<th><strong>Name</strong></th>
<th><strong>Functional Description</strong></th>
<th><strong>Design Comment</strong></th>
</tr>
</thead>
<tbody>
<tr>
<th>New</th>
<td>Azure Functions</td>
<td>PaaS Services</td>
<td><ul>
<li><p>Built using .NET and integrated with Microsoft Graph
APIs.</p></li>
<li><p>Used for serverless computing to handle on-demand data processing
and event-driven workflows.</p></li>
</ul></td>
</tr>
<tr>
<th>New</th>
<td>Azure Web App</td>
<td>PaaS Services</td>
<td><ul>
<li><p>Developed using React and SPA architecture.</p></li>
<li><p>Hosts the web application, providing scalable and managed web
services for the product.</p></li>
</ul></td>
</tr>
<tr>
<th>New</th>
<td>Azure App Service Plan</td>
<td>PaaS Services</td>
<td><ul>
<li><p>Manages the pricing and scaling options for web applications and
APIs.</p></li>
<li><p>Offers different pricing tiers to meet performance and scaling
requirements.</p></li>
</ul></td>
</tr>
<tr>
<th>New</th>
<td>Azure Key Vault</td>
<td>PaaS Services</td>
<td><ul>
<li><p>Securely stores sensitive data such as API keys, secrets, and
certificates.</p></li>
<li><p>Ensures secure access to sensitive information for applications
and services.</p></li>
</ul></td>
</tr>
<tr>
<th>New</th>
<td>Power Automate Flows</td>
<td>PaaS Services</td>
<td><ul>
<li><p>Within the Power Platform environment, used to automate
repetitive tasks and workflows.</p></li>
<li><p>Facilitates integration with other services and products to
streamline business processes</p></li>
</ul></td>
</tr>
<tr>
<th>New</th>
<td>Azure SQL Database</td>
<td>PaaS Services</td>
<td><ul>
<li><p>Serves as the central data store for the product.</p></li>
<li><p>Provides scalable, managed relational database services.</p></li>
</ul></td>
</tr>
<tr>
<th>New</th>
<td>Azure Virtual Network</td>
<td>PaaS Services</td>
<td><ul>
<li><p>Provides a secure networking environment to connect Azure
resources.</p></li>
<li><p>Allows for the creation of subnets, network security groups, and
VPN connections for secure communication.</p></li>
</ul></td>
</tr>
<tr>
<th>New</th>
<td>On-premises data gateway VM</td>
<td>IaaS Services</td>
<td><ul>
<li><p>Acts as a bridge between on-premises data sources and cloud
services.</p></li>
<li><p>Facilitates secure data transfer between on-premises resources
and azure services.</p></li>
</ul></td>
</tr>
</tbody>
</table>

### Logical Infrastructure Diagram

The diagram below is a representation of the infrastructure building
blocks that the i-ARM solution is built upon. (See next page).
<p align="center">
<img src="./ArchitectureImages/image10.png" style="width:7.26042in;height:4.97917in"
alt="A screenshot of a computer Description automatically generated" />
</p>
The information flow can be referred in the section above, the
interactions between different infrastructure components remain secured
and controlled using the central identity store on the BoE environment
i.e. Microsoft Entra ID.

### Infrastructure Building Blocks

Refer to the section Infrastructure Architecture for details.

| **Status** | **Name** | **Functional Description** | **Design Comment** |
|----|----|----|----|
| New | Linux Server | Server | Hosting the application web services |
| New (for all) |  |  |  |

# Interfaces

The purpose of this section is to describe the application interfaces
that supports the integration with i-ARM services.

| **ID** | **Category (New, Modified, Unchanged)** | **Service Provider** | **Service Consumer** | **Protocol** | **Authentication Method** | **Latency** | **Comment** |
|----|----|----|----|----|----|----|----|
| 1 | New | Infotechtion through i-ARM hosted on Azure Web App | i-ARM Web Application and Authorized Users | HTTPS | OAUTH 2.0 | Low | Primary interface for accessing i-ARM services. |
| 2 | Existing | Microsoft 365 – SharePoint | Tenant Authorized Users | HTTPS | OAUTH 2.0 | Low | Access M365 SharePoint Services |
| 3 | Existing | Microsoft 3–5 - Purview | Tenant Authorized Users | HTTPS | OAUTH 2.0 | Low | Access M365 and Purview Services |
| 4 | Existing | Microsoft 365 – Power Platform | Tenant Authorized Users | HTTPS | OAUTH 2.0 | Low | Access Power Platform Services |
| 5 | Existing | Microsoft 365 – Power BI | Tenant Authorized Users | HTTPS | OAUTH 2.0 | Low | Access Power BI Services |

# Security by Design

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 69%" />
</colgroup>
<thead>
<tr>
<th><strong>Information Classification</strong></th>
<th><p>The classification of the information processed by the solution
against the Bank’s ISS</p>
<p>Official-AmberNo–e - The data being managed by this add-in may be up
to Official Red, however the data is held within the underlying
SharePoint online solution which has its own SCA. On discussion with
Cyber Security Architecture we have agreed that enhanced Security
control set is sufficient for this application. I have therefore lowered
the confidentiality to Official-Amber.</p></th>
</tr>
</thead>
<tbody>
<tr>
<th><strong>Information Security BIA</strong></th>
<td><p>Tier 2 Service – Enhanced security</p>
<p><a
href="http://intranet/Banknav/IML.asp?svr=BOE-DMS&amp;db=Services&amp;id=16176649&amp;v=0">SCA
document link -Services_16176649</a></p></td>
</tr>
</tbody>
</table>

### Security Implications

N/A

### Access Management

| Role | Access Tier | Description |
|----|----|----|
| i-ARM specific application roles and tenancy permissions. | NA | These are specific roles to the i-ARM application and managed from within the source code. The access is governed using the central identity store of BoE Microsoft Tenancy i.e. using Microsoft Entra ID and i-ARM is integrated to use it using Azure Role Based Access Control by following the principle of least privileges. |

### Supply Chain Management

\[Consider the security implications and control requirements for
managing risk of suppliers with weak cyber controls\]

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 34%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><strong>Supplier Attack Vector</strong></th>
<th><strong>Security Implications</strong></th>
<th><strong>Design to mitigate Security Implications</strong></th>
</tr>
</thead>
<tbody>
<tr>
<th><p>Malicious code/patch update from supplier</p>
<p>Unauthorised access to approved remote access to Bank network from
supplier.</p>
<p>Unauthorised access to Bank data when providing support or
consultancy to the Bank.</p></th>
<td>[describe the security implications as they relate to the attack
vector and location of development/support. Agreed with Security
Design&gt;</td>
<td>[include the options to mitigate supplier attack vectors such as
additional Bank owned controls, needed supplier assurance requirements
(e.g., ISO 27001, SOC 2 Type II, and Cyber Essentials Plus) etc.]</td>
</tr>
</tbody>
</table>

# Service by Design

\[This section describes the business or technical service delivered by
the solution\]

<table>
<colgroup>
<col style="width: 24%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><strong>Service Ownership</strong></th>
<th><p>[Clear definition of the service owners – business owner,
technical owner, service owner]</p>
<p>Technical Owner: Digital Workplace</p>
<p>Service Owner: David Patterson</p>
<p>Business Owner: Jo Frampton</p></th>
</tr>
</thead>
<tbody>
<tr>
<th><strong>Service Criticality</strong></th>
<td><p>The features of i-ARM are classified as ‘non-business critical.’
The rationale for the classification is as follows:</p>
<ul>
<li><p>The failure of i-ARM features does not impact a user’s ability to
work with information, records are accessed via M365 user interface.</p>
<ul>
<li><p>The solution does not prevent a user from uploading / downloading
or collaborating with the information in M365.</p></li>
</ul></li>
<li><p>The failure mode still allows the underlying information files
(digital records) and metadata (physical records) to still be accessible
to authorised personnel.</p></li>
<li><p>On occasion of discontinuing the Infotechtion services, the
underlying information, files, and all audit data stays with the
customer.</p></li>
<li><p>All workflows and M365 purview Graph API orchestrations are
configured to retry after failure, audit the failure diagnostics for
remediation and restart from the point of failure.</p></li>
<li><p>Information metadata, retention details and eligibility for
disposal details are mastered in Microsoft Purview. Therefore, in
critical / disaster failure situation the entire data model can be
rebuilt from the master data in M365 and Purview.</p></li>
<li><p>The only data loss can be the business decisions related
information eligible of disposal. These are mitigated through a backup
management of Infotechtion database managed in customer Azure
subscription.</p></li>
</ul></td>
</tr>
</tbody>
</table>

### Service Implications

\[Consider the service implications for any new or modified building
blocks used in the solution\]

| **Status** | **Name** | **Service Implications** | **Design Comment** |
|----|----|----|----|
| Modified | Azure consumption monitoring | Additional service monitoring required to ensure any platform level issues are addressed by the bank’s cloud support team. | The activities will be included in the service introduction documentation. Failover modes will be included in responsibility matrix. |
| New | i-ARM feature release support | Azure administrator is required to approve the release of new features. | A process will be documented to approve and authenticate the cloud release of new features. |

### Business Change Implications

\[Consider the business change implications for any new or modified
building blocks used in the solution\]

| **Status** | **Name** | **B Implications** | **Design Comment** |
|----|----|----|----|
| Modified | Records access control | The access to records is currently managed at a file object level, this will change in the target architecture to align with recommended practices. The change will require education to manage permissions at a container (site / library) level in the target architecture. | Data access governance design will follow the [Sharing & permissions in the SharePoint modern experien–e - SharePoint in Microsoft 365 \| Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions) |
| New | Disposal reviews | i-ARM feature ‘My disposal dashboard’ will require new skills for existing records management team to operationally manage the disposal activities related to physical and digital records. | Existing disposal process will be configured in the target architecture. |

### Service Levels

The following table is for request service levels.

| Category | Priority | Response target | Resolution target | Applicable hours\* |
|----|----|----|----|----|
| Standard | Medium | 4 hours | 3 days | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Standard | Low | 4 hours | 5 days | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Non-Standard | Medium | 4 hours | 7 days\*\* | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Non-Standard | Low | 8 hours | As per roadmap timeline, earliest the following quarter. | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |

\* Custom hours as per customer requirements to be agreed with
additional costs. These are outlined in the pricing section.

\*\* Subject to the complexity of service request, these could require
additional days. In such cases, the overall delivery can be split in
sprints of 7 days.

### Service Monitoring

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr>
<th>Monitoring Consideration</th>
<th>Design Comment</th>
</tr>
</thead>
<tbody>
<tr>
<th>Operational</th>
<td><p>Infotechtion solution primarily leverages a variety of Azure
Platform-as-a-Service (PaaS) offerings, and to ensure operational
excellence the native monitoring tools and services utilized
include:</p>
<p>- Azure Monitor: Azure Monitor is a comprehensive solution for
collecting, analysing, and acting on telemetry from our Azure resources.
It provides:</p>
<p>- Metrics and Logs: Aggregates metrics and logs from Azure services,
enabling us to gain insights into the performance and health of
applications.</p>
<p>- Application Insights: Integrated with Azure Monitor, Application
Insights provides deep diagnostics and performance monitoring for
applications, including dependency tracking, request rates, response
times, and failure rates.</p>
<p>- Dashboards: Customizable dashboards for real-time monitoring and
visualization of key performance indicators (KPIs) and metrics across
azure services.</p>
<p>Additionally, the operations teams would check for inbuilt metrics
and service telemetry dashboards of Azure services that offer:</p>
<p>- Service Health Monitoring: Continuous monitoring of the health and
availability of Azure services we utilize, with real-time updates and
historical data.</p>
<p>- Performance Metrics: Detailed performance metrics such as CPU
usage, memory consumption, disk I/O, and network traffic, which help in
capacity planning and optimization.</p>
<p>- Diagnostic Logs: Access to diagnostic logs that provide granular
insights into service operations, aiding in troubleshooting and root
cause analysis.</p>
<p>For SharePoint servic–s - Administrators still have access to
detailed usage reports, site analytics, and service health information
through the Microsoft 365 admin centre. These tools help ensure that
SharePoint Online operates smoothly and that any issues are promptly
addressed by Micros’ft's support and engineering teams.</p></td>
</tr>
<tr>
<th>Performance</th>
<td><p>[Describe the performance monitoring of the solution and how
performance will be assessed and maintained from an on-going service
perspective]</p>
<p>Infotechtion solution has built-in logging to monitor the response
times of critical services, including throughput of the Azure SQL
Database, Web App, and functional services.</p>
<p>The performance indicators are used to compare against the product
benchmark for determining Additionally, i-Arm leverages instrumentation
services built into the architecture to monitor application health,
performance, and metrics, and leverage tools like Azure Monitor and
Application Insights to collect telemetry data and gain insights into
application behavior.</p>
<p>Finally, an annual performance testing is conducted to compare
feature performance against the benchmark.</p></td>
</tr>
<tr>
<th>Capacity</th>
<td><p>[Describe the capacity monitoring of the solution and how
capacity will be assessed and maintained from an on-going service
perspective]</p>
<p>The capacity monitoring will be categorized into:</p>
<p>M365 Capacity: The capacity monitoring shall be achieved through
capacity monitoring tools available in M365 especially SharePoint online
for monitoring storage capacity metrics to stay within Microsoft’s
limits and boundaries.</p>
<ul>
<li><p>Azure Capacity: i-ARM will be hosted in Bank’s Azure
subscription. The main component to monitor for capacity is the Azure
SQL database. This will be achieved as per the Microsoft recommendations
based on <a
href="https://learn.microsoft.com/en-us/azure/azure-sql/database/query-performance-insight-use?view=azuresql">Query
Performance Insig–t - Azure SQL Database | Microsoft Learn</a></p></li>
</ul></td>
</tr>
</tbody>
</table>

### Testability

\[Describe at a high level (in a few lines) the approach suggested for
testing considering operability, observability, controllability
decomposability, simplicity, stability and understand ability. This
section should also include suggested types of testing by the
architecture such as function testing, non-functional testing
(resilience, performance, load, security, volume, recovery etc.)\]

modular nature allows for flexibility and agility, enabling rapid
development and deployment.

- Operability:

  - The architecture primarily leverages Az’re's PaaS services, which
    offer high operability due to their managed nature.

  - DevOps & Release Pipelines ensure smooth CI/CD, providing automated
    deployment and version control.

  - The Azure VM Data Gateway allows secure data transfer between Power
    BI and firewall protected services e.g. SQL Azure database,
    enhancing operational flexibility.

- Observability:

  - Instrumentation Services are built into the architecture to monitor
    application health, performance, and metrics.

  - Azure Monitor and Application Insights can be used to collect
    telemetry data from Azure Web App, Function Apps, providing insights
    into application behaviour.

  - Logs and metrics are easily accessible, enabling quick detection and
    diagnosis of issues.

- Controllability:

  - The architecture implements Azure Key Vault and Managed Identities
    for secure authentication and authorization control.

  - The use of Azure Policy and Role-Based Access Control (RBAC) ensures
    fine-grained control over resource access.

  - Azure VNET provides network isolation and security controls at the
    network level.

- Decomposability:

  - The architecture is modular, with distinct services such as Azure
    Functions and Web App, each handling specific workloads.

  - A few services operate independently, enabling isolated development,
    testing, and deployment.

  - Services can be updated or replaced independently without affecting
    the entire system.

- Simplicity:

  - Azure PaaS services abstract much of the underlying infrastructure
    complexity, simplifying the architecture.

  - The logical separation of services (Functions, Web App) makes it
    easy to understand and manage the application.

  - Using managed services like Azure SQL Database and Azure Key Vault
    reduces the need for custom configurations.

- Stability:

  - Az’re's managed services ensure high availability and redundancy
    configuration options, contributing to the stability of the
    architecture.

  - The modular design allows for graceful degradation if a particular
    service experiences issues, minimizing impact on the overall system.

  - Automated pipelines ensure consistent, tested deployments, reducing
    the risk of configuration drift.

- Understandability:

  - The architecture is well-documented and logically laid out, making
    it easy for teams to understand the flow of data and dependencies.

  - Standardized components like Azure Functions, and Web App are
    familiar to most teams, reducing the learning curve.

Additionally, the section below addresses the aspects of function
testing and non-functional testing (resilience, performance, load,
security, volume, recovery, etc.) of the i-ARM. Note that since i-ARM is
a product offering, the functional and non-functional tests specified
below has been performed in the Infotechtion’s internal environment.

- Function Testing:

  - Unit Testing: Each component, such as Azure Functions and Web App,
    have been unit tested to validate their individual functionalities.

  - Integration Testing: i-ARM team has validated interactions between
    components like the Web ’pp's interaction with the Azure SQL
    Database orchestration with Functions.

  - End-to-End Testing: Ensured the entire workflow from data input to
    final output works as expected, including interactions with external
    services like Power BI and Microsoft 365.

- Non-Functional Testing:

  - Resilience Testing:

    - i-ARM team has simulated failures in individual components like
      Azure Functions to ensure the system can handle faults gracefully.

  - Performance Testing:

    - The product team has done the benchmarking the response times of
      critical services like the Web App and Functions to ensure they
      meet performance requirements.

    - Testing the latency and throughput of Azure SQL Database to
      guarantee fast data access has been validated.

  - Load Testing:

    - Stress testing the Web App and Functions under high loads to
      assess their scalability has been performed.

  - Security Testing:

    - Penetration testing the entire architecture to identify potential
      vulnerabilities has been completed by a third-party service
      provider.

  - Volume Testing:

    - Testing the sys’em's capability to handle large volumes of data,
      especially focusing on Azure SQL Database has been completed.

    - Simulating high traffic scenarios to verify the Web ’pp's ability
      to handle large user volumes has been completed.

  - Recovery Testing:

    - Testing backup and restore processes for Azure SQL Database to
      ensure data recovery in case of failure has been verified.

### Solution Environments

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 74%" />
</colgroup>
<thead>
<tr>
<th>Environment</th>
<th>Design Consideration</th>
</tr>
</thead>
<tbody>
<tr>
<th>Production / Live</th>
<td><p>A dedicated Azure subscription within the BoE Azure Tenancy has
been designated as a production environment. The lack of lower
environments poses a risk that should be documented. However, it is
advisable to establish lower operating environments because of following
reasons:</p>
<p>- to enable early issue detection, as fixing issues can be more
costly in prod than lower environments.<br />
- to facilitate user acceptance testing for new features over the long
term.<br />
- to avoid any downtimes and service interruptions while deploying new
features.<br />
- to conduct any security and compliance assessments relating to the
industry or organization.<br />
- to derive any baseline performance expectations by generating load
equivalent to the prod environment.</p></td>
</tr>
</tbody>
</table>

# Architecture Summary

### Decisions

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 9%" />
<col style="width: 20%" />
<col style="width: 18%" />
<col style="width: 22%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th><strong>ID (Container)</strong></th>
<th><strong>Classification</strong></th>
<th><strong>Decision</strong></th>
<th><strong>Rational</strong></th>
<th><strong>Implications</strong></th>
<th><p><strong>Technical Debt ​</strong></p>
<p>(if the decision classification is tactical)</p></th>
</tr>
</thead>
<tbody>
<tr>
<th><p>D01</p>
<p>Identity Applications</p>
<p>Azure Entra is existing service, but the applications are
new.</p></th>
<td>Strategic</td>
<td>Use Microsoft Entra ID for its robust security and integration
capabilities.</td>
<td>Preferred for its seamless integration with other Microsoft services
and enterprise-level identity management capabilities. It also has
comprehensive identity and access management solution that provides
robust security, single sign-on (SSO), and multi-factor authentication
(MFA).</td>
<td><ul>
<li><p>Centralizes identity management, enhances security, and
simplifies user access to applications and services.</p></li>
<li><p>Implication attributes are not applicable for existing
resources.</p></li>
</ul></td>
<td>Low - Requires ongoing management of identities, policies, and
security configurations, but greatly reduces security risks</td>
</tr>
<tr>
<th><p>D02</p>
<p>Web Application</p>
<p>-New</p></th>
<td>Strategic</td>
<td>Leverage Azure App Service for auto scaling and optimum
performance</td>
<td>Chosen for its simplicity and powerful features for web app hosting,
offering better ease of use and deployment flexibility. It is a fully
managed platform for building, deploying, and scaling web apps. Supports
multiple programming languages and frameworks.</td>
<td><ul>
<li><p>Simplifies web application deployment and management, offers
built-in scaling, high availability, and security features.</p></li>
<li><p>Design, Planning and Deployment: Infotechtion, i-ARM.</p></li>
<li><p>Management: Operation and i-ARM Release Management Teams</p></li>
<li><p>Cost: Operational cost for each environment, Pay as you
go</p></li>
<li><p>Complexity: Operation Teams</p></li>
</ul></td>
<td><ul>
<li><p>Low - Managed service reduces operational overhead but requires
monitoring and periodic updates to application code.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th>SharePoint is existing service, but application is new</th>
<td>Strategic</td>
<td>Implement SPFx for seamless SharePoint integration and enhanced
security.</td>
<td>SPFx offers a development framework tailored for SharePoint,
providing deeper integration and customization options.</td>
<td><ul>
<li><p>Provides a flexible, client-side development environment that
supports modern web technologies, enabling rich user
experiences.</p></li>
<li><p>Design, Planning and Deployment: Infotechtion, i-ARM</p></li>
<li><p>Management: Operation and i-ARM Release Management Teams</p></li>
<li><p>Cost: N/A</p></li>
<li><p>Complexity: Operation Teams</p></li>
</ul></td>
<td><ul>
<li><p>Low - Requires ongoing updates and maintenance of custom code, as
well as adherence to modern development practices.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th><p>Networking</p>
<p>-New</p></th>
<td>Strategic</td>
<td>Use Azure Virtual Network for secure, scalable networking.</td>
<td>Offers superior integration with native Azure services and enhanced
security features. Provides a secure, isolated network environment to
run virtual machines, applications, and PaaS services</td>
<td><ul>
<li><p>Enables secure and private communication between Azure resources,
supports hybrid cloud scenarios as well in future, and offers robust
networking features like subnets, VPN, NSGs, and route tables.</p></li>
<li><p>Design, Planning and Deployment: Infotechtion, i-ARM</p></li>
<li><p>Management: Operation and i-ARM Release Management Teams</p></li>
<li><p>Cost: Operational cost for each environment, Pay as you
go</p></li>
<li><p>Complexity: Operation Teams</p></li>
</ul></td>
<td><ul>
<li><p>Low - Requires proper design, ongoing management, and monitoring
to ensure optimal performance and security, i-ARM build will ensure
deployment of correct VNET ranges required.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th><p>API Applications</p>
<p>-New</p></th>
<td>Strategic</td>
<td>Deploy Azure Functions for scalable, serverless API management.</td>
<td>Chosen for its serverless architecture, reducing overhead and cost
compared to Azure App Services, which are better for full-fledged
applications rather than lightweight, event-driven tasks.</td>
<td><ul>
<li><p>Provides automatic scaling, high availability, and cost-effective
execution for API workloads. Integrates seamlessly with other Azure
services and supports multiple programming languages.</p></li>
<li><p>Design, Planning and Deployment: Infotechtion, i-ARM</p></li>
<li><p>Management: Operation and i-ARM Release Management Teams</p></li>
<li><p>Cost: Operational cost for each environment, Pay as you
go</p></li>
<li><p>Complexity: Operation Teams</p></li>
</ul></td>
<td><ul>
<li><p>Low - Infrastructure management is minimized but requires ongoing
monitoring and maintenance of function code and configurations.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th><p>Background Applications</p>
<p>-New</p></th>
<td>Strategic</td>
<td>Utilise Azure Functions, Power Automate for resilient background
processing.</td>
<td><p>These serverless offerings provides a more flexible and scalable
solution for background tasks.</p>
<p>Service for automating workflows across applications and services
with a no-code/low-code approach.</p></td>
<td><ul>
<li><p>Easy to deploy and manage within existing Azure App Service
environments, ideal for continuous or triggered background tasks.
Facilitates rapid automation of repetitive tasks, integrates well with
Microsoft 365 and other services.</p></li>
<li><p>Design, Planning and Deployment: Infotechtion, i-ARM</p></li>
<li><p>Management: Operation and i-ARM Release Management Teams</p></li>
<li><p>Cost: Operational cost for each environment, Pay as you
go</p></li>
<li><p>Complexity: Operation Teams</p></li>
</ul></td>
<td><ul>
<li><p>Low - Requires Azure App Service plan for hosting which is
anyways a deployable artefact of i-ARM, and ongoing monitoring and
maintenance of jobs.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th><p>Database</p>
<p>-New</p></th>
<td>Strategic</td>
<td>Implement Azure SQL Database for managed, scalable, and secure data
storage.</td>
<td>Selected for its fully managed service with strong integration
options and built-in intelligence, offering better overall performance
and manageability.</td>
<td><ul>
<li><p>Simplified database management, automatic updates, and scaling,
along with robust security features.</p></li>
<li><p>Design, Planning and Deployment: Infotechtion, i-ARM</p></li>
<li><p>Management: Operation and i-ARM Release Management Teams</p></li>
<li><p>Cost: Operational cost for each environment, Pay as you
go</p></li>
<li><p>Complexity: Operation Teams</p></li>
</ul></td>
<td><ul>
<li><p>Low - Managed service reduces the need for manual updates and
maintenance but requires monitoring and cost management.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th><p>Data Gateway</p>
<p>-New</p></th>
<td>Strategic</td>
<td>Deploy Azure VM (IaaS) for customised and controlled data transfer
solutions.</td>
<td>Using Azure VM provides more control and customization for data
transfer processes. Provides secure data transfer between on-premises
data sources and cloud services like Power BI, enabling real-time
reporting on secured data.</td>
<td><ul>
<li><p>Ensures data security while enabling advanced reporting
capabilities but requires ongoing maintenance and monitoring by
operation teams.</p></li>
<li><p>Design, Planning and Deployment: Infotechtion, i-ARM</p></li>
<li><p>Management: Operation and i-ARM Release Management Teams</p></li>
<li><p>Cost: Operational cost for each environment, Pay as you
go</p></li>
<li><p>Complexity: Operation Teams</p></li>
</ul></td>
<td><ul>
<li><p>Moderate - Requires configuration and updates to ensure security
and performance, but essential for secure data connectivity.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th><p>Release Management</p>
<p>-Existing</p></th>
<td>Strategic</td>
<td>Use Azure DevOps for streamlined and automated deployment processes
with release controls.</td>
<td>Comprehensive tool for CI/CD pipelines, integration with various
development tools, and support for multiple languages</td>
<td><ul>
<li><p>Streamlined release processes, improved collaboration among
development and operations teams, faster feature release cycles for end
users.</p></li>
<li><p>Implication attributes are not applicable for existing
resources.</p></li>
</ul></td>
<td>Low - Regular updates and strong support from Microsoft and
Infotechtion to ensure continuous improvement and new features.</td>
</tr>
<tr>
<th><p>Compliance Portal</p>
<p>-Existing</p></th>
<td>Strategic</td>
<td>Implement Microsoft Purview for comprehensive governance and
compliance management.</td>
<td>Comprehensive data governance and compliance tool that helps manage
and protect sensitive data across the enterprise.</td>
<td><ul>
<li><p>Enhanced data visibility, improved compliance with regulations,
and better data management practices.</p></li>
<li><p>Implication attributes are not applicable for existing
resources.</p></li>
</ul></td>
<td>Low - Microsoft's ongoing updates and integrations with other
services minimize long-term technical debt.</td>
</tr>
<tr>
<th><p>Content Management System</p>
<p>-Existing</p></th>
<td>Strategic</td>
<td>Use SharePoint (SaaS) for collaborative document management and
integration.</td>
<td>Robust platform for document management, collaboration, and intranet
portals. Integrates well with Microsoft 365.</td>
<td><ul>
<li><p>Enhanced collaboration, improved document management, and
centralized content storage.</p></li>
<li><p>Implication attributes are not applicable for existing
resources.</p></li>
</ul></td>
<td>Low - Requires less ongoing management and updates, but
well-supported by Microsoft with regular enhancements.</td>
</tr>
<tr>
<th>Records Migration</th>
<td></td>
<td><mark>To be filled by Proventeq</mark></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<th>Records Archive &amp; Disposal</th>
<td></td>
<td><mark>To be filled by Proventeq</mark></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<th><p>Online Reporting Platform</p>
<p>-Existing</p></th>
<td>Strategic</td>
<td>Use Power BI service for secure and efficient data analysis.</td>
<td>Powerful data visualization and business intelligence tool that
integrates seamlessly with various data sources.</td>
<td><ul>
<li><p>Enhanced decision-making through interactive dashboards,
real-time data analysis, and user-friendly reporting.</p></li>
<li><p>Implication attributes are not applicable for existing
resources</p></li>
</ul></td>
<td><ul>
<li><p>Low - Regular updates from Microsoft and a strong user community
minimize long-term technical debt.</p></li>
<li><p>Configuration/Code maintenance: Regular updates and audits for
operations and i-ARM release management teams.</p></li>
<li><p>Documentation: i-ARM product features documentation.</p></li>
</ul></td>
</tr>
<tr>
<th>Azure DevOps for Release and Deployment (Infotechtion managed)</th>
<td>Strategic</td>
<td>Infotechtion will be releasing application and service updates to
i-ARM within the bank’s environment.</td>
<td></td>
<td><ul>
<li><p>i-ARM services and its components are updated upon successful
deployments.</p></li>
</ul></td>
<td></td>
</tr>
<tr>
<th>D***</th>
<td>Strategic</td>
<td>The i-ARM implement for the Bank will be with a single Azure Region.
The IaaS and PaaS configuration within that region will be on te
Standard Tier of service for Azure.</td>
<td>This is a Tier 2 service, specifically for the disposition review
and disposal processes along with paper records management. Access to
documents for the business would remain if this service was not
available.</td>
<td>This is a more straight forwarder and cost effective deployment to
implement and run.</td>
<td>There is a risk that we would need to enhance or extend resilience
further down the line if stability issues are encountered. This Risk is
low in terms of likelihood</td>
</tr>
<tr>
<th>D***</th>
<td>Strategic</td>
<td>We will have a separate deployment of i-ARM onto the Bank Tenant for
the purposes of UAT.</td>
<td>i-ARM deployments can first be tested and roved by the Bank before
release into production.</td>
<td>A separate Azure subscription to be established with the same IaaS
and PaaS elements configured and deployed for the UAT environment to
mirror production.</td>
<td>N/A</td>
</tr>
<tr>
<th>D***</th>
<td>Tactical</td>
<td>The UAT i-ARM environment will connect to a non-production M365
instance controlled by the Bank.</td>
<td>To help remove potential negative, I impact of i-ARM deployments to
the Banks M365 production environment without first teasing the release
in the UAT environment first.</td>
<td>The Bank has the M365 Engineering tenant and the intension is to
reuse / utilise this tenant for this purpose. This Tenant is not
representative of production and so the value of proving will be
limited. We will need to spend some time configuring te Engineering
tenant to make sure it does do a broad set of proving.</td>
<td>We may decide to with to connecting the UAT i-ARM subscription to
the production M365 and some work would need to be redone if that proved
to be the case.</td>
</tr>
<tr>
<th>D***</th>
<td>Strategic</td>
<td>We will implement the Data Gateway to facilitate the transfer of the
data between the i-ARM SQL Azure Database and the Banks Power Platform
to enable the Online Reporting Platform. This choice has been made over
the use of IP Whitelisting.</td>
<td>Enhanced security and control (see section 11.3 in the
Appendix)</td>
<td>Implications: Additional complexity in the implementation as the
only IaaS component provided within the solution</td>
<td>N/A</td>
</tr>
<tr>
<th>D***</th>
<td>Tactical</td>
<td style="text-align: left;">We have taken the approach of developing
the HLD in Phases. This phase of the HLD deals with the implementation
of the i-ARM component as detailed in the Architectural Overview
(Section 3).</td>
<td>We have not yet investigated / agreed the other areas required by
this project as detailed in te Architectural Overview (Section 3)</td>
<td>We will not be able to start the actual migration of documents or
take advantage of the i-ARM capabilities to provide business benefit
until the other areas are investigated / decided upon. There is a risk
that it takes time to complete this and the i-ARM component remains
implemented for a period of time without being used (see RAID
Section).</td>
<td>No technical debt issues in terms of rework required. However, more
work to do to take advantage of the implementation.</td>
</tr>
</tbody>
</table>

##  

## 

### Waivers

N/A - The product is deployed as a packaged solution within the
environment.

### Requirements Compliance

N/A - The product is deployed as a packaged solution within the
environment.

Infotechtion i-ARM has been chosen as an additional component for
Advanced Records Management in te areas of mass disposition reviews and
paper records management in-order to meet the Banks Recurd Management
requirements. All the Banks requirements should be met through the
implementation of i-ARM in those areas.

### Risks, Assumptions, Issues and Dependencies

Due to the packaged solution deployment approach of the i-ARM product,
the details highlighting the risk and impacts are documented in the
context as well as container architecture diagrams above.

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 24%" />
<col style="width: 9%" />
<col style="width: 8%" />
<col style="width: 0%" />
<col style="width: 8%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Reference</strong></th>
<th style="text-align: center;"><strong>Risk</strong></th>
<th style="text-align: center;"><strong>Impact L/M/H</strong></th>
<th colspan="3"
style="text-align: center;"><p><strong>Likelihood</strong></p>
<p><strong>L/M/H (Now and Post-mitigation)</strong></p></th>
<th style="text-align: center;"><strong>Mitigation Actions</strong></th>
</tr>
</thead>
<tbody>
<tr>
<th>Identity Applications</th>
<td>Misconfiguration of application permissions and consent settings
leading to unauthorized access.</td>
<td style="text-align: center;">L</td>
<td colspan="2" style="text-align: center;">M</td>
<td style="text-align: center;">M</td>
<td><p>Implement thorough review and testing of permissions and consent
settings before deployment. Regular audits and reviews of
permissions.</p>
<ul>
<li><p>Team: Security and Infotechtion DevOps Team</p></li>
</ul></td>
</tr>
<tr>
<th>Identity Applications</th>
<td>Application registration credentials (client secrets) leakage or
compromise</td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Use Azure Key Vault to securely store client secrets. Implement
strict access controls and regular rotation of secrets.</p>
<ul>
<li><p>Team: Security and Infotechtion DevOps Team</p></li>
</ul></td>
</tr>
<tr>
<th>Identity Applications</th>
<td>User experience degradation due to multi-factor authentication (MFA)
enforcement.</td>
<td style="text-align: center;">L</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td>Misconfiguration leading to security vulnerabilities (e.g., open
ports, weak authentication). Performance issues due to improper scaling
configurations or unexpected load.</td>
</tr>
<tr>
<th>Web Application</th>
<td>Misconfiguration leading to security vulnerabilities (e.g., open
ports, weak authentication). Performance issues due to improper scaling
configurations or unexpected load.</td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Implement security best practices, conduct regular security
assessments, and use Azure Security Centre recommendations</p>
<ul>
<li><p>Team: Security, Performance, and</p></li>
</ul>
<ul>
<li><p>Infotechtion DevOps Team</p></li>
</ul></td>
</tr>
<tr>
<th>Web Application</th>
<td>Downtime due to Azure service outages or maintenance
activities.</td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Regularly review Azure Service Health advisories.</p>
<ul>
<li><p>Team: Operations Team</p></li>
</ul></td>
</tr>
<tr>
<th>Web Application</th>
<td>Increased costs due to inefficient resource utilization or scaling
configurations.</td>
<td style="text-align: center;">M</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Implement cost monitoring using Azure Cost Management and set up
alerts for unusual spending patterns. Optimize resource usage
regularly.</p>
<ul>
<li><p>Team: Infotechtion DevOps Team</p></li>
</ul></td>
</tr>
<tr>
<th>Web Application</th>
<td>Application vulnerabilities due to outdated libraries or
dependencies.</td>
<td style="text-align: center;">M</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Regularly update application libraries and dependencies.
Implement a CI/CD pipeline with automated security scanning tools.</p>
<ul>
<li><p>Team: Infotechtion DevOps Team</p></li>
</ul></td>
</tr>
<tr>
<th>SharePoint Application / Content Management System</th>
<td><p>Data breaches or unauthorized access due to misconfigured
permissions and sharing settings.</p>
<p>Downtime or service disruption due to Microsoft 365 service
outages.</p>
<p> </p>
<p>Compliance issues due to changes in regulatory requirements or
misalignment with internal policies.</p></td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Conduct regular audits of permissions and sharing settings.
Implement least privilege access and use Azure AD Conditional Access
policies.</p>
<p>Regularly monitor Microsoft 365 Service Health Dashboard.</p>
<p>Regularly review and update compliance policies. Conduct audits and
use Office 365 Compliance Centre to enforce compliance standards.</p>
<ul>
<li><p>Team: Existing Service, IT Ops Teams</p></li>
</ul></td>
</tr>
<tr>
<th>Networking</th>
<td><p>Misconfiguration leading to network security vulnerabilities
(e.g., open ports, insecure network security groups).</p>
<p>Network performance issues due to improper subnet design or
insufficient bandwidth.</p>
<p>Compliance issues due to misalignment with regulatory requirements
(e.g., data residency, network isolation).</p></td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Implement network security best practices, use Azure Firewall and
NSGs, and conduct regular security audits.</p>
<p>Plan and design the VNET with proper subnetting and bandwidth
considerations. Use Azure Network Performance Monitor to monitor and
optimize performance.</p>
<p>Regularly review and update compliance policies. Use Azure Policy to
enforce network compliance standards.</p>
<ul>
<li><p>Teams; Security, Networking, and Infotechtion DevOps Team
Teams</p></li>
</ul></td>
</tr>
<tr>
<th>API and Background Applications</th>
<td><p>Misconfiguration leading to security vulnerabilities (e.g., open
endpoints, weak authentication).</p>
<p>Performance issues due to improper scaling configurations or
unexpected load.</p>
<p>Downtime due to Azure service outages or maintenance
activities.</p></td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">M</td>
<td style="text-align: center;">M</td>
<td><p>Implement security best practices, use Entra ID Auth for security
and App Insights monitoring, and conduct regular security
assessments.</p>
<p>Implement auto-scaling and load testing to ensure the functions can
handle peak loads. Monitor performance using Azure Monitor and
Application Insights.</p>
<p>Regularly review and update compliance policies. Use Azure Policy to
enforce compliance standards and ensure proper logging and
monitoring.</p>
<ul>
<li><p>Teams; Security, Networking, and Infotechtion DevOps Team
Teams</p></li>
</ul></td>
</tr>
<tr>
<th>Dashboards &amp; Reports / Online Reporting Platform</th>
<td><p>Misconfiguration or improper sharing leading to unauthorized
access to sensitive data.</p>
<p>Performance issues due to large datasets or complex calculations.</p>
<p>Downtime or service disruption due to Power BI service outages or
maintenance.</p></td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">M</td>
<td style="text-align: center;">M</td>
<td><p>Implement robust access controls and role-based security.
Regularly review sharing settings and access logs. Use Azure AD for
authentication and authorization.</p>
<p>Optimize data models and use data aggregation techniques. Implement
incremental data refresh and monitor performance using Power BI service
metrics.</p>
<p>Regularly monitor Power BI service health. Have contingency plans in
place for critical business operations.</p>
<ul>
<li><p>Teams; Security, and Infotechtion DevOps Team Teams</p></li>
</ul></td>
</tr>
<tr>
<th>Database</th>
<td><p>Misconfiguration leading to security vulnerabilities (e.g., open
firewall rules, weak authentication).</p>
<p>Performance issues due to improper indexing, query optimization, or
insufficient resources.</p>
<p>Data loss or corruption due to inadequate backup and recovery
processes.</p></td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">M</td>
<td style="text-align: center;">M</td>
<td><p>Implement security best practices, use Azure SQL Database
security features (e.g., firewall rules, threat detection), and conduct
regular security audits.</p>
<p>Optimize database schema and queries. Monitor performance using Azure
SQL Database Performance Insights and adjust resource allocations as
needed.</p>
<p>Implement automated backups and regularly test recovery procedures.
Use Point-in-Time Restore and Long-term Retention for backups.</p>
<ul>
<li><p>Teams; Security, and Infotechtion DevOps Team Teams</p></li>
</ul></td>
</tr>
<tr>
<th>Database</th>
<td><p>Increased costs due to inefficient use of database resources or
over-provisioning.</p>
<p>User experience degradation due to latency or slow query
responses.</p>
<p>Security vulnerabilities due to outdated or unpatched database
components.</p></td>
<td style="text-align: center;">M</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Regularly review and update compliance policies. Use Azure Policy
and Azure SQL Database Auditing to enforce compliance standards.</p>
<p>Optimize database performance through indexing, query optimization,
and caching. Use Azure SQL Database Query Performance Insight for
monitoring and optimization.</p>
<p>Regularly apply updates and patches to the database. Use Azure SQL
Database Vulnerability Assessment and Advanced Threat Protection for
continuous monitoring.</p>
<ul>
<li><p>Teams; Security, and Infotechtion DevOps Team Teams</p></li>
</ul></td>
</tr>
<tr>
<th>Data Gateway</th>
<td><p>Misconfiguration of the VM or gateway leading to security
vulnerabilities (e.g., open ports, weak credentials).</p>
<p> </p>
<p>Performance issues due to insufficient VM resources or network
bandwidth limitations.</p>
<p> </p>
<p>Downtime due to Azure service outages, maintenance, or VM
failures.</p></td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">M</td>
<td style="text-align: center;">M</td>
<td><p>Implement security best practices, use Azure Security Centre, and
regularly update VM and gateway configurations. Conduct security audits
and implement network security groups (NSGs).</p>
<p>Right-size the VM based on workload requirements, monitor performance
using Azure Monitor, and adjust resources as needed.</p>
<p>Implement high availability strategies, such as using Availability
Sets or Zones. Regularly review Azure Service Health advisories.</p>
<ul>
<li><p>Teams: Security, and Infotechtion DevOps</p></li>
</ul></td>
</tr>
<tr>
<th>Release Management</th>
<td><p>Misconfiguration or security vulnerabilities in the Azure DevOps
environment (e.g., open pipelines, weak permissions).</p>
<p> </p>
<p>Downtime or service disruption due to Azure DevOps service outages or
maintenance.</p></td>
<td style="text-align: center;">L</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Implement DevOps security best practices, use Azure DevOps
security features (e.g., role-based access control, service
connections), and conduct regular security audits.</p>
<p>Regularly monitor Azure DevOps Service Health, implement redundancy
where possible, and communicate planned maintenance to customers.</p>
<ul>
<li><p>Teams – Infotechtion DevOps</p></li>
</ul></td>
</tr>
<tr>
<th>Compliance Portal</th>
<td><p>Misconfiguration leading to incomplete or inaccurate data
classification.</p>
<p>Downtime or service disruption due to Azure Purview service outages
or maintenance.</p></td>
<td style="text-align: center;">L</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Implement best practices for data classification and cataloguing.
Regularly review and update data classifications. Conduct periodic
audits and validations.</p>
<p>Regularly monitor Azure Purview Service Health. Have contingency
plans in place for critical compliance operations.</p>
<ul>
<li><p>Teams – Data Governance and Compliance</p></li>
</ul></td>
</tr>
<tr>
<th></th>
<td></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td></td>
</tr>
<tr>
<th></th>
<td></td>
<td style="text-align: center;"></td>
<td colspan="2" style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td></td>
</tr>
<tr>
<th>Absence of Lower Environments</th>
<td><p>The absence of lower environments presents several risks:</p>
<p>Early Issue Detection: Issues identified in production are costlier
to fix than those found early in lower environments.</p>
<p>User Acceptance Testing: Lower environments are essential for
validating new features through user acceptance testing, ensuring they
meet user needs.</p>
<p>Avoiding Downtime: Without lower environments, deploying new features
directly to production increases the risk of downtime and service
interruptions.</p>
<p>Security and Compliance: Lower environments allow for critical
security and compliance assessments, ensuring the production environment
remains secure and compliant.</p>
<p>Performance Expectations: Performance testing in lower environments
helps establish baseline expectations and ensures the production
environment can handle the expected load.</p></td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">H</td>
<td style="text-align: center;">H</td>
<td>Establish lower environments (e.g., Development, QA, Staging) to
thoroughly test and validate changes before production deployment.</td>
</tr>
<tr>
<th>Unauthorized Access to APIs</th>
<td>Data breaches, data loss, and potential misuse of sensitive
information</td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">L</td>
<td style="text-align: center;">L</td>
<td><p>Implement strong authentication and authorization mechanisms for
all APIs. Regularly audit API access logs and use monitoring tools to
detect and respond to unauthorized access attempts.</p>
<p>Conduct regular security training for developers and users.</p></td>
</tr>
<tr>
<th>Unauthorized Changes to Production Environment (Release
Management)</th>
<td>Unplanned downtime, data corruption, and potential security
vulnerabilities</td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">M</td>
<td style="text-align: center;">M</td>
<td><p>Implement strict change control processes, including approval
workflows and audit trails.</p>
<p>Use role-based access control (RBAC) to restrict permissions.
Regularly review and update access policies.</p></td>
</tr>
<tr>
<th>i-ARM Application Services and Components</th>
<td>Initial setup and configuration may require additional time and
resources, any decision delays could impact project timelines.</td>
<td style="text-align: center;">H</td>
<td colspan="2" style="text-align: center;">H</td>
<td style="text-align: center;">H</td>
<td><p>Develop a comprehensive project plan with detailed timelines for
each component</p>
<p>Allocate additional resources if necessary and provide training for
team members. Implement a phased rollout if needed.</p>
<p>Additionally, having a test or lower environments helps to adopt the
fail fast approach.</p>
<ul>
<li><p>Teams: BoE Architecture</p></li>
</ul></td>
</tr>
<tr>
<th>i-ARM Application Services and Components</th>
<td>Increased costs due to inefficient use of resources or
over-provisioning across different services.</td>
<td style="text-align: center;">L</td>
<td colspan="2" style="text-align: center;">M</td>
<td style="text-align: center;">M</td>
<td><p>Implement cost monitoring using Azure Cost Management and set up
alerts for unusual spending patterns.</p>
<p>Optimize resource usage regularly</p>
<ul>
<li><p>Teams: Finance and Resource Management Teams.</p></li>
</ul></td>
</tr>
<tr>
<th></th>
<td></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td></td>
</tr>
<tr>
<th style="text-align: center;"><strong>Reference</strong></th>
<td style="text-align: center;"><strong>Assumption</strong></td>
<td colspan="4" style="text-align: center;"><strong>Resulting
impacts</strong></td>
<td style="text-align: center;"><strong>Assumption
Validations</strong></td>
</tr>
<tr>
<th>i-ARM Application Services and Components</th>
<td>The BoE has necessary licenses and subscriptions for hosting i-ARM
services.</td>
<td colspan="4" style="text-align: center;">[Ensures that all functional
features required for i-ARM are available.</td>
<td>To be validated post initial deployment cycles.</td>
</tr>
<tr>
<th>Lower Environments</th>
<td>BoE should have a separate UAT environment to test i-ARM and how it
interacts with the wider M365 configuration.</td>
<td colspan="4" style="text-align: center;">Helps catch issues early,
facilitates user acceptance testing, avoids service interruptions during
deployments, supports security assessments, and establishes performance
baselines.</td>
<td>To be verified in the initial deployment cycles.</td>
</tr>
<tr>
<th>Preservica365</th>
<td></td>
<td colspan="4" style="text-align: center;"></td>
<td></td>
</tr>
<tr>
<th></th>
<td></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td></td>
</tr>
<tr>
<th style="text-align: center;"><strong>Reference</strong></th>
<td style="text-align: center;"><strong>Issue</strong></td>
<td colspan="4" style="text-align: center;"><strong>Owner</strong></td>
<td style="text-align: center;"><strong>Resolving plan</strong></td>
</tr>
<tr>
<th>i-ARM Application Services and Components</th>
<td>Potential increase in support requests due to deployment issues or
environment-specific challenges.</td>
<td colspan="4" style="text-align: center;">Support Teams (Post
prod)</td>
<td><p>Implement a robust support framework with clear documentation and
training for BoE.</p>
<p>Provide dedicated support channels for deployment issues.</p></td>
</tr>
<tr>
<th>i-ARM Application Services and Components</th>
<td>Security vulnerabilities due to outdated or unpatched components
across different services.</td>
<td colspan="4" style="text-align: center;">Security Team (Post
prod)</td>
<td><p>Regularly apply updates and patches to all components.</p>
<p>Use Azure Security Centre and other security features for continuous
monitoring. Conduct regular security audits.</p>
<p><strong><mark>Bank to Review this</mark></strong></p></td>
</tr>
<tr>
<th></th>
<td></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td></td>
</tr>
<tr>
<th style="text-align: center;"><strong>Reference</strong></th>
<td style="text-align: center;"><strong>Dependency</strong></td>
<td colspan="2" style="text-align: center;"><strong>Owner</strong></td>
<td colspan="2"
style="text-align: center;"><strong>Direction</strong></td>
<td style="text-align: center;"><strong>Management Plan</strong></td>
</tr>
<tr>
<th>i-ARM Application Services and Components</th>
<td>Integration with existing data sources, infrastructure, and
governance policies (e.g., Power BI, Purview, SharePoint).</td>
<td colspan="2" style="text-align: center;">Infotechtion and BoE
Operations Teams</td>
<td colspan="2" style="text-align: center;">In</td>
<td><p>Conduct a thorough assessment of existing data sources,
infrastructure, and governance policies.</p>
<p>Develop a integration plan with clear communication protocols.</p>
<p>Test integrations in a lower environments before production
deployment.</p></td>
</tr>
</tbody>
</table>

# 

# Additional Details

### i-ARM User Personas 

The table below highlights different user personas involved to operate
i-ARM

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 14%" />
<col style="width: 24%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr>
<th>Role</th>
<th>Feature</th>
<th>Description</th>
<th>Responsibilities</th>
</tr>
</thead>
<tbody>
<tr>
<th>Business Reviewer</th>
<td>Disposal Dashboard</td>
<td>Can take actions on records where they have been designated as
Business Reviewers.</td>
<td><p>Can approve disposal of single or multiple files</p>
<p>Can relabel retention label for single or multiple files</p>
<p>Can extend retention of single or multiple files</p>
<p>Can see action performed in historic tab</p>
<p>User can use all the filters and will see data only for sites which
they are configured</p>
<p>User can manage columns of my disposal dashboard</p>
<p>User can access overview section and can see data for all users</p>
<p>User can access all sub-parts of reports section and can see data for
all users</p>
<p>User can access request a space</p>
<p>User can access data explorer</p></td>
</tr>
<tr>
<th>Archive Reviewer</th>
<td>Disposal Dashboard</td>
<td>Can take actions on records where they have been designated as
Archive Reviewers.</td>
<td><p>Can approve disposal of single or multiple files</p>
<p>Can approve archival of single or multiple files</p>
<p>Can see action performed in historic tab</p>
<p>User can use all the filters and will see data only for sites which
they are configured</p>
<p>User can manage columns of my disposal dashboard</p>
<p>User can access overview section and can see data for all users</p>
<p>User can access all sub-parts of reports section and can see data for
all users</p>
<p>User can access request a space</p>
<p>User can access data explorer</p></td>
</tr>
<tr>
<th>Custodians and SharePoint Group Users for PRM</th>
<td>Physical Records Management</td>
<td>Can create, edit, and check out the physical records.</td>
<td><p>Custodians Can access to search pages, create, edit form and can
check-in/check-out records.</p>
<p>Bulk upload users can access to search pages, create, edit form and
can check-in/check-out records. This group is created for bulk
automation feature who would still need access for existing process.</p>
<p>Physical record users can access search pages, create and can
check-in/check-out records.</p>
<p>Associated owners' group can create, edit, and check out the physical
records as well as manage SharePoint site with full control.</p>
<p>Associated Members Groups can create, edit, and check out the
physical records as well as manage SharePoint site with contribute
access.</p>
<p>Location Role Users can add/change location of a record.</p>
<p>Confidential Physical Record Users can access all the records created
by users in this group will be created as confidential records.</p></td>
</tr>
<tr>
<th>Administration</th>
<td>Web Portal Administration</td>
<td>Can access only if they have been added to the i-ARM administrator
group.</td>
<td><p>Add and edit business and archive reviewers.</p>
<p>Configure container and disposition settings.</p></td>
</tr>
<tr>
<th>Reports</th>
<td>All Users, Records (current &amp; Disposed)</td>
<td>All authenticated users can access.</td>
<td><p>User can access all sub-parts of reports section and can see data
for all users, records (current and disposed)</p>
<p>Possibly at LLD design further subcategory grouping to be
decided.</p></td>
</tr>
</tbody>
</table>

### Cost Optimization 

This section outlines the cost optimization strategies employed in the
design and deployment of i-ARM, which utilizes Azure and SharePoint as
its primary platforms.

The solution components involved include Azure Function Apps, Azure Web
Apps, Azure Virtual Networking, Azure SQL Database, Azure VMs with
on-premises gateway installed, Power Automate Flows, and Azure Storage
Accounts.

The approach ensures that all components are deployed in accordance with
Microsoft's best practices and leverages recommendations from Azure
Advisor to achieve optimal cost efficiency.

**Components and Cost Optimization Techniques:**

- Azure Function Apps

  - Serverless Architecture

  - Scaling: Implement auto-scaling to handle varying loads efficiently
    and avoid over-provisioning.

  - Code Optimization: Optimize code to reduce execution time and
    resource consumption.

- Azure Web Apps

  - App Service Plan: Choose the appropriate App Service Plan based on
    expected traffic and performance requirements.

  - Scaling: Use auto-scaling rules to dynamically adjust resources
    based on demand.

- Azure SQL Database

  - Service Tiers: Select the appropriate service tier based on
    performance requirements.

- Azure VMs with On-Premises Gateway Installed

  - Right-Sizing: Choose the appropriate VM size based on workload
    requirements to avoid over-provisioning.

  - Reserved Instances: Purchase reserved instances for predictable
    workloads to benefit from discounted rates.

  - Shutdown Schedules: Implement automated shutdown schedules for
    non-critical VMs during off-hours.

- Azure Storage Accounts

  - Storage Tiers: Utilize different storage tiers (Hot, Cool, Archive)
    based on access patterns to optimize costs.

  - Lifecycle Management: Implement lifecycle management policies to
    automatically transition data to lower-cost storage tiers.

  - Redundancy Options: Choose the appropriate redundancy option (LRS,
    GRS, RA-GRS) based on data availability requirements and cost
    considerations.

- Power Automate Flows

  - Efficient Design: Design flows to minimize the number of actions and
    reduce execution time.

  - Trigger Optimization: Use appropriate triggers to avoid unnecessary
    flow executions.

  - Licensing: Select the right licensing plan based on usage patterns
    and requirements.

- Azure Advisor: Cloud operations team to regularly review Azure Advisor
  recommendations to identify cost-saving opportunities and implement
  suggested optimizations.

- Monitoring and Alerts: i-ARM will setup up the monitoring and alerts
  to track resource usage and costs, allowing for proactive management
  and adjustments.

- Resource Tagging: i-ARM to implement the resource tagging to
  categorize and track costs by department, project, or environment as
  per the bank’s policies.

- Cost Management Tools: The cloud operations team to utilize Azure Cost
  Management and Billing tools to analyse spending patterns and forecast
  future costs.

### On-Premises Data Gateway vs IP Whitelisting

**Using On-Premises Data Gateway**

- **Pros**:

  - Enhanced Security: The on-premises data gateway ensures a secure
    connection between Power Platform and your SQL Azure database
    without exposing the database to the public internet.

  - Data Encryption: Data is encrypted during transmission, providing an
    additional layer of security.

  - Centralized Management: The gateway provides a centralized point for
    managing data connections and can be used for multiple data sources.

  - Support for Multiple Services: The gateway can be used not only for
    Power Automate but also for Power BI, Power Apps, and other services
    within the Power Platform ecosystem.

  - No IP Whitelisting Required: Since the gateway handles the
    connection, there is no need to manage and update IP whitelisting
    rules on SQL firewall.

- **Cons**:

  - Complex Setup: Setting up and configuring the on-premises data
    gateway may require assistance from IT and Infra teams.

  - Maintenance: The gateway requires ongoing maintenance, including
    updates and monitoring to ensure it remains operational.

  - Resource Consumption: The gateway runs on a local machine or server,
    which consumes local resources and may require additional hardware.

  - Latency: There might be increased latency due to the additional hop
    through the on-premises data gateway.

**Whitelisting IP Address Range - Power Platform Region**

- **Pros**:

  - Simpler Setup: Whitelisting the IP address range of the Power
    Automate region is simpler and quicker to implement compared to
    setting up a gateway.

  - No Additional Hardware: This approach does not require any
    additional hardware or software installation.

  - Direct Connection: The connection is more direct, potentially
    reducing latency compared to using an on-premises data gateway.

  - Less Maintenance: Once the IP addresses are whitelisted, there is
    minimal ongoing maintenance required.

- **Cons**:

  - Security Risks: Whitelisting a range of IP addresses exposes the
    database to potential security risks, as any service within that IP
    range can attempt to connect.

  - IP Address Changes: IP address ranges for cloud services can change,
    requiring regular updates to the whitelist to ensure continued
    connectivity.

  - Limited Control: You have less control over which specific services
    or users can access the database, increasing the risk of
    unauthorized access.

  - Region-Specific: This solution is region-specific, so if your Power
    Automate flows operate across multiple regions, you may need to
    manage multiple sets of IP ranges.

**Conclusion**:

- Infotechtion recommends to deploy on premises data gateway for secure
  connectivity with data sources, example SQL from Power BI Service.

### Auto and Manual Steps

Infotechtion solution deployment process involves a combination of
automated and manual steps to ensure the successful deployment and
configuration of the solution. Below is a detailed breakdown of what is
deployed automatically versus what requires manual intervention.

**Deployment Flow**

- Pre-Infrastructure Deployment

- Infrastructure Deployment

- Key Vault Configuration

- Solution Deployment

- Automation after Solution Deployment

- Creation using the UI

- Automated Deployment

The following components are deployed automatically using Infrastructure
as Code (IaC) templates and deployment pipelines:

- Automated provisioning of all necessary infrastructure components,
  including:

  - Azure App Service

  - Azure Functions

  - Azure SQL Database

  - Key Vault

  - Storage Accounts (V2)

  - Log Analytics

  - Application Insights

  - Private Endpoint

  - Private DNS Zone

  - Network Interface

  - Network Security Group

  - Virtual Network

- Solution Deployment: Automated deployment of the solution components,
  such as:

  - Azure Functions

  - Azure Web App

  - Azure Web Job

**Manual Configurations**

Certain steps require manual intervention by the deployment team to
ensure proper configuration and integration. These include:

- App Registration Creation & Configuration: Registering the application
  in Azure AD and configuring necessary permissions.

- Key Vault Certificate and Secret Configuration: Manually adding
  certificates and secrets to the Key Vault.

- Azure Function Authentication Creation and Configuration: Setting up
  authentication for Azure Functions.

- Add Function Managed Identity to Key Vault: Configuring managed
  identities for Azure Functions to access Key Vault.

- Power Platform Solution Configuration: Manually configuring the Power
  Platform solutions.

- SharePoint specific configurations e.g. list, libraries etc.

### High-Level Components: 

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 21%" />
<col style="width: 24%" />
<col style="width: 17%" />
<col style="width: 28%" />
</colgroup>
<tbody>
<tr>
<td><strong>Item #</strong></td>
<td><strong>Service Type</strong></td>
<td><strong>Purpose</strong></td>
<td><strong>i-ARM Module</strong></td>
<td><strong>Minimum Configuration</strong></td>
</tr>
<tr>
<td>1</td>
<td>Azure Tenant</td>
<td>Azure Tenant to host the i-ARM Application</td>
<td>All</td>
<td>NA</td>
</tr>
<tr>
<td>2</td>
<td>Azure Subscription</td>
<td>Azure Subscription with the tenant to host the i-ARM
Application</td>
<td>All</td>
<td>NA</td>
</tr>
<tr>
<td>3</td>
<td>Azure Virtual Machine</td>
<td>On-premises data gateway</td>
<td>All</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Azure App Service</td>
<td>Azure App Service hosting the i-ARM portal and hosting web jobs</td>
<td>All</td>
<td>Standard Tier; 1 S2 (2 Core(s), 3.5 GB RAM, 50 GB Storage) x 730
Hours; Windows OS; 0 SNI SSL Connections; 0 IP SSL Connections; 1 Custom
Domains; 0 Standard SLL Certificates; 0 Wildcard SSL Certificates</td>
</tr>
<tr>
<td>5</td>
<td>Service Principals</td>
<td>Required to authenticate against the APIs, SQL instead of using
username and passwords</td>
<td>All</td>
<td>NA</td>
</tr>
<tr>
<td>6</td>
<td>Azure Functions</td>
<td>Has the required APIs used by the i-ARM solution</td>
<td>All</td>
<td>Premium tier, pay as you go, EP2: 2 Cores(s), 7 GB RAM, 250 GB
Storage, 1 Pre-warmed instances, 0 Additional scaled out units</td>
</tr>
<tr>
<td>7</td>
<td>Azure Automation</td>
<td>Required for syncing the records label and label policies from the
M365 Compliance Purview Portal</td>
<td>All</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>Azure SQL</td>
<td>Data Store for i-ARM application</td>
<td>All</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>Key Vault</td>
<td>Required to securely store and access secrets, certificates, API
keys.</td>
<td>All</td>
<td>Vault: 1,000 operations, 1,000 advanced operations, 10 renewals, 0
protected keys, 0 advanced protected keys; Managed HSM Pools: 0 Standard
B1 HSM Pool(s) x 730 Hours</td>
</tr>
<tr>
<td>10</td>
<td>Storage Accounts V2</td>
<td>Azure storage account contains the azure file storage objects.</td>
<td>All</td>
<td>Block Blob Storage, General Purpose V2, Flat Namespace, LRS
Redundancy, Hot Access Tier, 1,000 GB Capacity - Pay as you go, 10 x
10,000 Write operations, 10 x 10,000 List and Create Container
Operations, 10 x 10,000 Read operations, 1 x 10,000 Other operations.
1,000 GB Data Retrieval, 1,000 GB Data Write</td>
</tr>
<tr>
<td>11</td>
<td>Log Analytics</td>
<td>Logging and Monitoring</td>
<td>All</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>Application Insights</td>
<td>Logging and Monitoring</td>
<td>All</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>Power Automate Premium per user license (E5 one per user supporting
premium connector)</td>
<td>Required by the workflows for business logic and notification</td>
<td><p>My Disposal</p>
<p>PRM</p></td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>Power BI Premium Workspace</td>
<td>Required for hosting the Power BI reports</td>
<td>All</td>
<td></td>
</tr>
<tr>
<td>15</td>
<td>Power BI Pro License</td>
<td>Required for creating and publishing Power BI reports</td>
<td>All</td>
<td></td>
</tr>
</tbody>
</table>

### Information Governance Architecture 

<img src="./ArchitectureImages/image11.png" style="width:7.26806in;height:3.63403in"
alt="A computer screen shot of a computer program Description automatically generated" />

**Information Architecture Sequence**:

| **Sequence** | **Title** | **Description** |
|----|----|----|
| 1 | Collaboration User interface | Microsoft office client, web interfaces providing access to ALL data integrated with access controls. |
|  |  | i-ARM web interface provides access to records management functions |
| 2 | Data Storage | SharePoint Hub sites become the centralised storage for Active and closed records. Libraries / Folders are provisioned to structure records and manage access. |
| 3 | Microsoft Purview Policies | Retention and Sensitivity labels are configured for tagging active / closed records. |
|  |  | Additional automation policies configured to reduce burden on need for user dependent tagging. |
| 4 | Information Architecture Controls | Content Type / metadata providing enrichment and context to records further supporting automation. |
|  |  | Navigation, branding and themes are configured to support findability from various interfaces. |
|  |  | Enterprise search supported by verticals, metadata providing tailored views to Active / Closed   Records together with general purpose search activities. |
| 5 | Operational Governance Processes | Service request management processes to support user-initiated requests, workspace governance and records lifecycle management processes / workflows. |
| 6 | 3*rd* party archival | Integration configured to transfer records from M365 to long term digital preservation solution integrated with the end of lifecycle review workflows. |
| 7 | Operational User interfaces | Existing or new interfaces which may be required for supporting reporting, service management activities and other applications which are used but not in scope of the M365 integrations. |

**Hub Structure:**

<img src="./ArchitectureImages/image12.png" style="width:7.26806in;height:2.37153in"
alt="A diagram of a company Description automatically generated with medium confidence" />

### Estimation

\[For each solution element (i.e. building block, or grouping of
building blocks), identify the affected domains and the effort required
by those domains to make the changes\]

| **Solution Element** | **Type of change** | **Impacted Areas** | **Effort Required** |
|----|----|----|----|
| \[E.g., building block, group of building blocks, service\] | \[E.g., new deployment, configuration. Consider scale, etc.\] | \[List the organisational areas involved in the change, e.g., delivery domains\] | \[estimated effort\] |
|  |  |  |  |
|  |  |  |  |

For each solution, please define alignment with Principles and indicate
Red, Amber and Green for level of alignment:

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 7%" />
<col style="width: 78%" />
</colgroup>
<thead>
<tr>
<th>Fitness for Purpose</th>
<th></th>
<th><p>The Programme's objectives are aligned to the Strategic Plan
(SP7) and the Technology Enablers (TE2, TE3, TE4).</p>
<p>SP7– Modernise the Bank’s ways of working, TE2 - Safe, efficient and
robust operational running of the Bank, TE3 - Effective communications
and stakeholder engagement, TE4 - Bank decision-making informed by the
best available data, analysis and intelligence</p></th>
</tr>
</thead>
<tbody>
<tr>
<td>User Experience</td>
<td></td>
<td>This plays a role in the overall FileSite Replacement Programme and
will aid in improving user experience as one of the primary objectives
(Item 3 - Measurably improve user experience on day-to-day information
management tasks, through the provision of intuitive and collaborative
ways of working)</td>
</tr>
<tr>
<td>Simplification</td>
<td></td>
<td>Extending the use of SaaS services the Bank already is licensed for
and uses. Only extend beyond this where necessary e.g. where there is a
capability gap. We will decommission ARM when FileSite Replacement is
complete. Straightforward configuration is a key driver for the
programme.</td>
</tr>
<tr>
<td>Modularity in Design</td>
<td></td>
<td>The solution is SaaS/Infotechtion based and we will be locked into
their roadmap which will evolve over time. Swapping away from the
MS/Infotechtion product base will not be easy, hence the Amber
rating.</td>
</tr>
<tr>
<td>Reuse, Buy, Build</td>
<td></td>
<td>We will be reusing components we are already licensed for (we will
need E5 for Compliance anyway) reducing double spend. We are extending
use of Proventeq. We do not intend to build anything of any consequence.
We are only buying extensions (e.g. Infotechtion) where there is a
gap.</td>
</tr>
</tbody>
</table>

### Document References

| Item                                            | Attachment / Link |
|-------------------------------------------------|-------------------|
| FileSite & ARM replacement – Solution Blueprint |                   |
| Proventeq Architecture Brief                    |                   |

### Glossary

Please ensure all of the terms and meanings below are in the [TSA
Glossary](https://bankofenglandcouk.sharepoint.com/sites/eaicommunitiesofpractice/Lists/EAI%20Glossary/AllItems.aspx)

| Term | Meaning |
|------|---------|
|      |         |

# Template

| Version | Date | Author | Summary of Change |
|----|----|----|----|
| 1.0 | 17/10/2018 | B Davies | Original |
| 2.0 | 05/12/2018 | S Moth / J Hinks | Apply AAC branding |
| 3.0 | 21/03/2019 | R Humfress | Removed Headings from Tables to ensure Navigation works |
| 4.0 | 27/12/2019 | Kishor Patil | Changes made to include the outcome from the Architecture Continuous Improvement group. |
| 5.0 | 23/11/2020 | Alwyn Finch | Updated the “Additional Details” section to include the breakdown of Principles to ensure alignment with the Bank’s Principles |
| 6.0 | 23/06/2021 | Rebecca Duffy | Updated with business change impact, data access and DSID references |
| 7.0 | 24/02/2023 | Kishor Patil | Updated the template with TSA name change and new bank standard format template. |
| 8.0 | 13/09/2023 | Francis Yesudas | Added reference to data retention policy guidelines document in section 5.3 |
