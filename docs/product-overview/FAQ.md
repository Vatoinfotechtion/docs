# Frequently Asked Questions (FAQ) – Infotechtion-ARM

## General Information

**Q1: What is Infotechtion-ARM?**  
**A1:** Infotechtion-ARM is an advanced information lifecycle automation, analytics, and physical records inventory management suite designed to enhance user experiences and simplify governance of information and records managed via Microsoft Purview.

## Integration and Deployment

**Q2: How does Infotechtion-ARM integrate with Microsoft 365?**  
**A2:** Infotechtion-ARM integrates with Microsoft 365 through APIs and data gateways. Reporting and analytics are via Power BI reports, which are preconfigured for use.

**Q3: Can Infotechtion-ARM be hosted on my own cloud infrastructure?**  
**A3:** Yes, Infotechtion-ARM can be deployed on your own cloud infrastructure with PaaS, such as Microsoft Azure, or it can be fully managed by Infotechtion with SaaS dedicated to your subscription and isolated from other customer data.

## Features and Capabilities

**Q4: What are some key features of Infotechtion-ARM?**  
**A4:** Key features include:  
- [**Data Discovery and Security - Infotechtion**](https://infotechtion.com/data-discovery-and-security/)  
- [**AI Governance - Infotechtion**](https://infotechtion.com/ai-governance/)  
- [**Records Lifecycle Governance - Infotechtion**](https://infotechtion.com/records-lifecycle-governance/)  
- [**Digital Workspace Governance - Infotechtion**](https://infotechtion.com/digital-workspace-governance/)  

**Q5: Does Infotechtion-ARM support analytics and reporting?**  
**A5:** Yes, Infotechtion-ARM provides personalized analytics dashboards for Records Managers, Disposition Reviewers, and Physical Record Managers, built on Microsoft Unified audit log and Infotechtion advanced analytics engine. It also supports advanced search, business reporting integration through Microsoft Power BI, and data insights.

## Licensing and Support

**Q6: What is the licensing model for Infotechtion-ARM?**  
**A6:** The licensing model is based on volume per TB of data and annual support subscription fees. You can write to [contact@infotechtion.com](mailto:contact@infotechtion.com) for more information.

**Q7: What support services are available for Infotechtion-ARM?**  
**A7:** Infotechtion offers comprehensive support services, including:  
- A dedicated customer relations owner  
- Access to the Infotechtion support portal  
- Email and phone support  
- Remote troubleshooting and diagnostics  
- On-site support visits  
- Training and documentation  

For more information, access the *Target Operating Model* section in this documentation.

## Maintenance and Updates

**Q8: How are releases managed for Infotechtion-ARM?**  
**A8:** Deployment takes place through CI/CD pipelines managed by Infotechtion DevOps. Updates are rolled out quarterly, complying with the conditional policies of the consumer tenant before deployment. Customers receive notifications ahead of a release, and authentication approval from the customer is required for a successful release.

**Q9: What is the Evergreen Strategy for Infotechtion-ARM?**  
**A9:** The Evergreen Strategy ensures that Infotechtion-ARM is aligned with the Microsoft Purview roadmap. Infotechtion closely follows the Microsoft platform and solutions roadmap changes and updates the solution suite accordingly.

## Security and Compliance

**Q10: How does Infotechtion-ARM ensure data security?**  
**A10:** Infotechtion-ARM uses various security measures, including authentication, authorization, encryption, logging, and auditing. It also performs regular security risk assessments, vulnerability scans, and penetration tests.

**Q11: What is the disaster recovery strategy for Infotechtion-ARM?**  
**A11:** Infotechtion-ARM uses Azure Site Recovery to replicate the virtual machines and data from the primary site to the secondary site, ensuring continuous replication and recovery points. It also uses zone-redundant storage (ZRS) to replicate data across three availability zones within the same region.

## Onboarding and Offboarding

**Q12: How does the onboarding process work for Infotechtion-ARM?**  
**A12:** The onboarding process includes functional training, a process for reporting issues, and service desk support. It also involves regular checks to ensure the exit plan is practical and delivered via a joint customer and Infotechtion team.

**Q13: What happens to the data if the service is discontinued?**  
**A13:** In case of discontinuing the Infotechtion services, the underlying information, files, and all audit data remain with the customer. Data/metadata extraction is supported via a service request, and the data is made accessible within the customer's Microsoft Azure or other cloud subscription.

## Miscellaneous

**Q14: What types of service/technology maintenance tasks are required?**  
**A14:** Maintenance tasks include:  
- Regular updates and patches for Domain Joined Virtual Machines  
- Monitoring of the Azure App Service  
- Management of Client Secrets/Certificates for Service Principals and Key Vaults  
- Storage optimization of Azure SQL Database

**Q15: How does Infotechtion-ARM support dynamic scaling?**  
**A15:** Infotechtion-ARM uses cloud-native technologies and a microservices framework, integrating with Azure load balancers and auto-scaling groups for dynamic scaling. It also utilizes caching and data compression strategies to maximize efficiency.
