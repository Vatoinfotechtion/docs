---
id: Getstarted
title: Getstarted – My Disposal Dashboard
sidebar_label: Getstarted
---

<h1>Introduction</h1>

**The primary interface is 'My Disposal Dashboard',** it provides an
intuitive interface for managing and tracking the disposal and archival
of information assets. It offers a comprehensive overview of scheduled
disposals, ensuring full visibility and control over asset lifecycles.
Users can easily review asset details such as serial numbers, status,
and disposal schedules, streamlining decision-making and compliance
processes. 

The dashboard helps organizations meet environmental and data security
regulations by incorporating audit trails, disposal certifications, and
reporting tools. It ensures proper tracking of hardware disposal and
secure data wiping before assets are recycled or resold, reducing risks
associated with data breaches. 

By simplifying the decommissioning process, iARM's My Disposal Dashboard
enhances efficiency, transparency, and compliance. Organizations can
confidently manage asset disposal while minimizing legal and security
risks.

<h1> Overview </h1>

**i-ARM** is a powerful tool designed to streamline and automate records
disposition reviews across Physical and Digital managed data sources. By
integrating with Microsoft Purview, i-ARM ensures that organizations
manage records efficiently, securely, and in compliance with regulatory,
legal, and business requirements. 

**This guide** will help users navigate the management and records
review interface, where they can: 

-   Review and act on records pending disposition, including deletion,
    retention extension, reclassification, or archival. 

-   Leverage automated disposition workflows, bulk action capabilities,
    and seamless integration with Microsoft Purview using Microsoft
    Graph APIs and Power BI.

-   Ensure compliance with retention policies, legal holds, and business
    regulations such as GDPR, SEC 17a4, and ISO 15489. 

-   Monitor and track actions through interactive dashboards, bulk
    processing, and audit logs for transparency and governance. 

-   Simplify records oversight with advanced search, reporting, and bulk
    processing tools tailored for records managers, compliance officers,
    and legal teams.

iARM simplifies decision-making for business and archive reviewers,
helping organizations efficiently manage records while ensuring
compliance and reducing unnecessary data retention risks.

<h1> Key Features and Capabilities </h1>

1.  **Centralized Disposition Management** -- Provides a single
    dashboard to review, approve, or extend the retention of records
    across multiple Microsoft 365 locations, ensuring a streamlined
    disposal process.

2.  **Automated Disposition Workflows** -- Automates the collection of
    expired records, aggregates them for review, and enables bulk
    actions to reduce manual effort and ensure consistency.

3.  **Seamless Integration with Microsoft Purview** -- Ensures that all
    disposition decisions and actions are automatically communicated to
    Microsoft Purview using Microsoft Graph APIs for compliance
    tracking.

4.  **Multi-Stage Review Process** -- Supports multiple levels of
    review, allowing Business and Archive Reviewers to assess records
    based on regulatory, legal, and business requirements before final
    disposition.

5.  **Bulk Review and Action Capabilities** -- Enables users to process
    large volumes of records at once, whether for deletion, retention
    extension, or archival, significantly improving efficiency.

6.  **Advanced Filtering and Sorting** -- Provides customizable filters
    and search options to help reviewers triage, prioritize, and
    efficiently navigate records requiring action.

7.  **Automated Notifications & Reminders** -- Sends email alerts and
    dashboard notifications to keep reviewers informed of pending
    disposition tasks and deadlines.

8.  **Comprehensive Audit Trails** -- Logs all disposition decisions and
    actions, providing a defensible audit trail for compliance with
    regulatory and legal requirements.

9.  **Interactive Dashboards and Reporting** -- Leverages Power BI to
    deliver real-time insights into disposition metrics, compliance
    status, and pending actions across the organization.

10. **Integration with External Retention Schedules** -- Synchronizes
    with external retention management tools (such as Iron Mountain
    Policy Center) to align retention schedules with Microsoft Purview
    for seamless governance, facilitating a single source of truth for
    records managers.

11. **Historical Record Tracking** -- Maintains a historical log of
    disposed and archived items, allowing users to reference past
    decisions and ensure compliance over time.

12. **Custom Metadata Retention** -- Preserves key metadata associated
    with records even after disposition, ensuring continuity for
    compliance and reporting needs.

13. **Long-Term Digital Preservation** -- Archives digital records in
    Azure Storage or other preservation solutions after disposition to
    optimize storage and maintain compliance.


## Definitions

The table below defines the terms present in the iARM records lifecycle solution.

| #  | Term               | Description |
|----|--------------------|-----------------------------------------------------------|
| 1  | **Source**         | Cloud-hosted storage space that needs to be scanned and managed in iARM. |
| 2  | **Source Instance** | A subset of source data to be scanned and managed in iARM at a given interval. |
| 3  | **Disposition**    | The type of action that occurs to a file when the retention period expires. Generally, disposition is deletion, but it can be other actions. |
| 4  | **Label**          | Labels contain policies for file/data, including file plan details (retention duration, etc.) and actions (dispose, etc.). |
| 5  | **Retention**      | Number of days the data will be kept before it is marked for disposition. |

## User Roles and Permissions

| #  | Role               | Description |
|----|--------------------|-----------------------------------------------------------|
| 1  | **End User**       | End Users will only have access to the source instance in which they are added as members. |
| 2  | **Business Reviewer** | Can take actions on records where they have been designated as a Business Reviewer in My Disposal Dashboard. |
| 3  | **Archive Reviewer**  | Can take actions on records where they have been designated as an Archive Reviewer in My Disposal Dashboard. |
| 4  | **iARM Administrator** | Admins can edit:  |
|    |                    | - **Disposal Settings:** Resume or pause disposal notifications. |
|    |                    | - **Container Settings:** Rules to delete empty containers left behind after all records are disposed of in a source managed by iARM. |
|    |                    | - **Update Business and Archive Reviewers:** Rules to manage review responsibilities across data sources. |

