

Data Privacy and Security for i-ARM Databot

# Introduction

The i-ARM Databot allows users to get a better understanding of their enterprise�s content and content management by leveraging the data insights collected by the suite of i-ARM solutions and Microsoft Purview. The Databot leverages LLMs provided by the [Azure OpenAI service](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview) and i-ARM created Power BI datasets to empower users.

# How does the i-ARM Databot use Power BI?

The i-ARM Databot harnesses i-ARM�s Power BI datasets to answer user questions. The Databot translates the user�s question and the selected dataset to create a DAX query that is then passed onto to the Power BI REST API. The REST API fetches the data from the selected dataset, while applying any row-level security rules that would apply to the logged-in user.

It's important to note that the LLM powering the Databot never views any of the data in Power BI. The LLM uses the metadata of the selected Power BI dataset, which includes table names, column names, and measure names. None of the raw data in the Power BI dataset is exposed. Even when the Databot is creating the visualization, only the metadata of the response table is provided to the LLM, which is just column names.

# Data stored about user interactions

The i-ARM Databot stores the history of user interactions, including the:

* Logged-in user
* Selected dataset
* Prompt
* Generated DAX query
* Associated text response
* Parameters for data visualization

The generated DAX query is used to re-query the Power BI dataset when the user logs in again to the website.

# The EU Data Boundary

The i-ARM Databot, powered by the Azure OpenAI Service, operates as a **Platform as a Service (PaaS)** solution. In this deployment model:

* Microsoft hosts and manages the infrastructure, providing access to OpenAI models within the Azure environment.
* Customer data, including prompts and responses, is processed securely within the designated Azure region.
* For deployments within the **European Union**, Azure OpenAI ensures compliance with the **EU Data Boundary**, meaning all data remains within the EU geography for both processing and storage.

This PaaS model offers the flexibility, scalability, and security necessary for enterprise-grade solutions while ensuring strict adherence to GDPR and other EU-specific regulations.

# Meeting Regulatory Compliance Requirements

The i-ARM Databot is built on top of the technologies and standards Microsoft has developed to support its commitment to complying with existing privacy, security, and compliance regulations. As these requirements evolve over time, the i-ARM Databot will be updated to ensure that it follows these requirements, and any other best practices Microsoft recommends.

# Additional Information

## Content that the Databot creates

The i-ARM Databot helps users to understand their enterprise content and content management approach. It relies on i-ARM created Power BI datasets to answer specific questions about the client�s content, and it can explain records management best practices as well.

When it comes to answering questions that are specific to the client�s content, the i-ARM Databot uses the metadata of the selected dataset to answer that question. This approach ensures that the data that is reflected back to the user is always accurate with respect to the Power BI dataset. This minimizes the risk of hallucinations, or other negative consequences.

## Blocking harmful content

The Azure OpenAI service is pre-trained to block various forms of harmful content, including but not limited to, Hate & Fairness, Sexual, Violence, and Self-harm. For more details on Microsoft�s content filtration, you can refer to this [link](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy#how-does-copilot-block-harmful-content).

## Sensitive information detection

The i-ARM Databot integrates with Microsoft Purview to scan for any sensitive information contained in the response. Purview admins can view logs of interactions to see whether any sensitive information was shown, and if so, what type of sensitive information was displayed.


