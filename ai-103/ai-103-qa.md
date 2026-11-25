# AI-103 — AI-103 — Azure AI Apps and Agents Developer Associate: 175 questions

Source: tstudy.vercel.app (T-Study — data của ThinhNH39). Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).


---

## Q1 · single choice

You are building a speech processing solution in Microsoft Foundry for a customer support platform.  
The platform will transcribe live phone calls, so that supervisors at your company can view call transcripts  
and detect issues while the calls are in progress. The call audio will arrive as a continuous stream from the  
telephony system.  
You need to ensure that the call transcripts appear within only a few seconds of the audio stream.  
What should you do?

- **A.** Use text to speech by using a custom neural voice.
- **B.** Use speech translation to generate the transcripts into multiple languages.
- **C.** Run a batch transcription job on recorded audio files.
- ✅ **D.** Use real-time speech to text to process streaming audio input.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q1 · pages 2–2

<details><summary>Explanation</summary>

Correct Answer:
D. Use real-time speech to text to process streaming audio input.
Real-time speech to text is specifically designed to transcribe streaming audio with low latency, making it
ideal for live scenarios such as customer support phone calls. As audio is received from the telephony
system, the Speech service continuously converts speech into text, allowing supervisors to view transcripts
within seconds and monitor conversations while they are still in progress. This capability supports live
captioning, real-time monitoring, and immediate issue detection, which are key requirements of the scenario.
Incorrect Answers:
A. Use text to speech by using a custom neural voice.
Text to speech converts text into spoken audio. It does not transcribe audio into text.
B. Use speech translation to generate the transcripts into multiple languages.
Speech translation is intended for translating spoken language into another language. The requirement is to
generate live transcripts, not translations.
C. Run a batch transcription job on recorded audio files.
Batch transcription processes completed audio recordings and is not suitable for generating transcripts
during live phone calls.

</details>


---

## Q2 · single choice

You have a Microsoft Foundry project that contains an agent.  
The agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes.  
The agent must preserve the PDF layout in the extracted output to ensure that downstream processing can  
reference sections and tables.  
You plan to call Azure Content Understanding in Foundry Tools.  
You need to extract content and layout elements and detect QR codes without requiring a language model  
deployment.  
Which built-in analyzer should you use?

- **A.** prebuilt-documentFieldSchema
- **B.** prebuilt-read
- **C.** prebuilt-documentSearch
- ✅ **D.** prebuilt-layout

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q2 · pages 2–3

<details><summary>Explanation</summary>

Correct Answer:
D. prebuilt-layout
The prebuilt-layout analyzer is designed to extract the structural elements of a document while preserving its
layout. It identifies text, paragraphs, tables, selection marks, and other layout components, enabling
downstream processes to reference the original document structure accurately. It also supports the detection
of barcodes and QR codes without requiring a language model deployment. This makes it the best choice for
processing scanned PDF vendor invoices that contain tables and embedded QR codes while maintaining the
document's layout.
Incorrect Answers:
A. prebuilt-documentFieldSchema
This analyzer focuses on extracting predefined fields from documents rather than preserving the complete
document layout or detecting QR codes.
B. prebuilt-read
The prebuilt-read analyzer is intended primarily for OCR and text extraction. It does not provide the rich
layout analysis needed for preserving document structure.
C. prebuilt-documentSearch
This analyzer is intended for document search and retrieval scenarios rather than extracting layout elements
and QR codes for downstream processing.

</details>


---

## Q3 · pick 2

You have a Microsoft Foundry project that contains an agent.  
The agent accepts user-uploaded screenshots and uses a multimodal chat model. Some screenshots contain  
potentially malicious embedded text.  
You need to prevent a prompt injection attack and ensure that third-party content is treated as lower trust.  
How should you configure prompt shields for document attacks?

🖼 [Source: AI-103 PDF · page 4](https://tstudy.vercel.app/content/ai-103/figure-36.png)

- **A.** Disable prompt shields
- ✅ **B.** Set action to Block
- **C.** Set action to Annotate
- ✅ **D.** Enable Spotlighting
- **E.** Create a custom blocklist
- **F.** Use OCR to extract text

**Answer:** B, D

**Nguồn:** AI-103 1.pdf · Q3 · pages 3–5

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Prompt shields action → Set action to Block; Additional mitigation → Enable Spotlighting)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 4](https://tstudy.vercel.app/content/ai-103/figure-37.png)


Correct Answers:
Prompt shields action: Set action to block.
Setting the prompt shield action to block ensures that any detected prompt injection attack in uploaded
screenshots or documents is prevented from reaching the multimodal language model. Since the
screenshots may contain malicious embedded text, blocking the request provides the highest level of
protection by stopping the attack before it can influence the model's behavior.
Additional mitigation: Enable Spotlighting.
Spotlighting is designed to help the model distinguish between trusted system instructions and untrusted
third-party content, such as uploaded screenshots and documents. It marks external content as lower trust,
reducing the likelihood that malicious instructions embedded within the content will be followed by the
model. This is the recommended mitigation for defending against indirect prompt injection attacks.
Incorrect Answers:
Disable the shield.
Disabling the shield removes protection against prompt injection attacks and leaves the application
vulnerable.
Set action to annotate.
Annotate detects and flags potential prompt injection attempts but still allows the request to continue. Since
the requirement is to prevent the attack, blocking is the appropriate choice.
Create a custom blocklist.
A custom blocklist filters specific words or phrases but does not protect against prompt injection attacks or
establish trust boundaries between trusted and untrusted content.
Use optical character recognition (OCR) to extract the text from the images first.
OCR only extracts text from images. It does not detect or prevent prompt injection attacks, and the extracted
text could still contain malicious instructions.

</details>


---

## Q4 · single choice

You are building a web app named App1 that generates responses by using a model deployed to a  
Microsoft Foundry project named Project1. Before sending the prompts to the model, App1 must retrieve  
documents by using Azure AI Search. You need to integrate Project1 and App1.  
The solution must meet the following requirements:  
• Multiple client applications must use the same search configuration.  
• A security policy must prevent key-based authentication.  
• Administrative effort must be minimized.  
What should you do?

- **A.** Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application.
- ✅ **B.** Configure an Azure AI Search connection in Project1 and reference the connection in each application.
- **C.** Call Azure AI Search directly from each application by using Microsoft Entra authentication.
- **D.** Enable a managed identity for each application and call Azure AI Search directly.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q4 · pages 5–6

<details><summary>Explanation</summary>


Correct Answer:
B. Configure an Azure AI Search connection in Project1 and reference the connection in each application.
Creating an Azure AI Search connection in the Microsoft Foundry project centralizes the search configuration
so that multiple client applications can reuse the same connection. The connection can use Microsoft Entra
ID authentication, satisfying the requirement to prevent key-based authentication. Since the search endpoint
and authentication settings are managed once within the Foundry project, administrative effort is minimized
while ensuring consistent configuration across all applications.
Incorrect Answers:
A. Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per
application.
This requires each application to maintain its own search configuration, increasing administrative overhead
and reducing consistency.
C. Call Azure AI Search directly from each application by using Microsoft Entra authentication.
Although this avoids key-based authentication, each application must maintain its own search configuration,
which does not meet the requirement for a shared configuration and minimal administration.
D. Enable a managed identity for each application and call Azure AI Search directly.
Managed identities provide secure authentication, but each application still requires separate configuration,
increasing administrative effort compared to using a shared Foundry connection.

</details>


---

## Q5 · single choice

You have a Microsoft Foundry project that contains a customer support agent. The agent calls an internal  
knowledge API tool before generating responses.  
Users report the following issues:  
• Some requests take more than 15 seconds to complete.  
• Some responses are incorrect, even when the knowledge API returns the expected data.  
You need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls,  
tool invocations, and timing information.  
Which observability capability should you use?

- **A.** token usage
- **B.** monitoring
- **C.** safety metrics
- ✅ **D.** tracing

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q5 · pages 6–6

<details><summary>Explanation</summary>

Correct Answer:
D. tracing
Tracing provides detailed visibility into the execution of an individual agent run. It records the complete
sequence of operations, including large language model (LLM) calls, tool invocations, prompts, responses,
execution order, and timing information. This enables developers to diagnose latency issues, identify where
delays occur, and determine whether incorrect responses originate from the model, the tool, or the
orchestration logic. Since the requirement is to inspect individual agent runs and view the ordered sequence
of events, tracing is the appropriate observability capability.
Incorrect Answers:
A. token usage
Token usage reports the number of input and output tokens consumed by the model. It does not show the
execution flow, tool calls, or timing information.
B. monitoring
Monitoring provides high-level metrics and trends across applications, such as performance and availability,
but it does not provide detailed step-by-step execution information for individual agent runs.
C. safety metrics
Safety metrics measure content safety, such as harmful or unsafe outputs, and do not provide information
about tool invocations, execution flow, or latency.

</details>


---

## Q6 · pick 3

You have a Microsoft Foundry project that contains an agent used by the financial analysts at your  
company. You need to optimize the agent workflow by providing additional data access and processing  
capabilities. The solution must meet the following requirements:  
• Ensure that the agent can perform calculations during conversations.  
• Ensure that the agent can access up-to-date information from public websites.  
• Ensure that the agent can retrieve information from documents uploaded directly to the agent.  
What should you use for each requirement? To answer, drag the appropriate tools to the correct  
requirements. Each tool may be used once, more than once, or not at all.

🖼 [Source: AI-103 PDF · page 7](https://tstudy.vercel.app/content/ai-103/figure-49.png)

- ✅ **A.** Code interpreter
- **B.** Computer use
- ✅ **C.** File search
- ✅ **D.** Grounding with Bing Search
- **E.** Microsoft Fabric

**Answer:** D, A, C

**Nguồn:** AI-103 1.pdf · Q6 · pages 7–8

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Access up-to-date information from public websites → Grounding with Bing Search; Perform calculations → Code interpreter; Retrieve information from uploaded documents → File search)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 7](https://tstudy.vercel.app/content/ai-103/figure-50.png)


Correct Answers:
Access up-to-date information from public websites: Grounding with Bing Search
Grounding with Bing Search enables an agent to retrieve current information from the public web during a
conversation. Since the model's training data is static, Bing Search provides access to the latest information,
making it ideal for answering questions about recent events, current facts, or publicly available data.
Perform calculations during conversations: Code interpreter
The Code Interpreter tool allows the agent to execute Python code to perform mathematical calculations,
data analysis, statistical operations, and other computational tasks. This enables the agent to produce
accurate calculation results instead of relying solely on the language model's reasoning capabilities.
Retrieve information from documents uploaded directly to the agent: File search
File Search indexes documents uploaded directly to the agent and retrieves relevant content during
conversations. It enables the agent to answer questions based on the uploaded files using retrieval-
augmented generation, without requiring external search services.
Incorrect Answers:
Computer use
Computer Use is designed to interact with graphical user interfaces and perform actions on applications. It is
not intended for calculations, web grounding, or searching uploaded documents.
Microsoft Fabric
Microsoft Fabric is an analytics and data platform used for enterprise data engineering, warehousing, and
business intelligence. It is not the appropriate tool for these agent capabilities.

</details>


---

## Q7 · single choice

You have a Microsoft Foundry project named Project1 that contains an agent. The agent uses an  
OpenAPI 3.0 specification to call an external weather service.  
The weather service requires a key to be passed in an HTTP header. The key value is stored as a connection  
in Project1.  
You need to ensure that the key value from the connection is included automatically whenever the OpenAPI  
tool is invoked.  
What should you configure in the OpenAPI specification?

- **A.** a header parameter defined for each operation
- **B.** an Azure Key Vault connection
- ✅ **C.** an API key security scheme
- **D.** a Bearer token security scheme

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q7 · pages 8–9

<details><summary>Explanation</summary>

$1a

</details>


---

## Q8 · single choice

You have a Microsoft Foundry project that contains three agents as shown in the following table.

🖼 [Source: AI-103 PDF · page 9](https://tstudy.vercel.app/content/ai-103/figure-55.png)

You need to orchestrate the agents to ensure that the customer requests meet the following requirements:  
• Support a deterministic, step-based process that uses conditional branching and shared state across  
the agents.  
• Optionally trigger a ticket action based on the triage result.  
• The solution must minimize development effort.  
What should you include in the solution?

- ✅ **A.** a workflow
- **B.** threads and runs without a workflow
- **C.** a multi-agent group chat session
- **D.** separate agent runs coordinated in the application code

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q8 · pages 9–10

<details><summary>Explanation</summary>

$1b

</details>


---

## Q9 · pick 2

You have a Microsoft Foundry project that contains a customer support agent. The agent is deployed by  
using a GitHub Actions workflow.  
The organization has the following requirements:  
•  
Every deployment to the production environment must use the latest approved evaluation baseline.  
•  
Deployments must stop automatically if the current evaluation scores regress beyond the configured  
tolerance.  
How should you configure the workflow?

🖼 [Source: AI-103 PDF · page 10](https://tstudy.vercel.app/content/ai-103/figure-58.png)

- ✅ **A.** Latest approved baseline
- **B.** Previous workflow run
- **C.** Production deployment logs
- **D.** Repository default branch
- **E.** Continue and send an alert
- ✅ **F.** Fail the workflow
- **G.** Retry the evaluation automatically
- **H.** Lock the target branch

**Answer:** A, F

**Nguồn:** AI-103 1.pdf · Q9 · pages 10–12

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Evaluation comparison → Latest approved baseline; When metrics exceed the allowed tolerance → Fail the workflow)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 11](https://tstudy.vercel.app/content/ai-103/figure-61.png)

$1c

</details>


---

## Q10 · pick 1

$1d

🖼 [Source: AI-103 PDF · page 12](https://tstudy.vercel.app/content/ai-103/figure-64.png)

- **A.** The LangChain service will appear in Traces without configuring a tracer.
- ✅ **B.** Setting different OTEL_SERVICE_NAME values separates the services in Application Insights.
- **C.** When using enable_content_recording=False, prompts and tool data will be captured in the telemetry.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q10 · pages 12–13

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 12](https://tstudy.vercel.app/content/ai-103/figure-69.png)

$1e

</details>


---

## Q11 · single choice

You have a Microsoft Foundry project that contains an agent and an image generation model  
deployment. The agent generates original images from user-supplied product photos.  
You need to ensure that the generated images maintain the product identity and visual characteristics of the  
provided photo.  
What should you do?

- ✅ **A.** Set the input_fidelity parameter to high.
- **B.** Apply a groundedness detection filter.
- **C.** Include a prompt and input image in the request.
- **D.** Decrease the value of the temperature parameter.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q11 · pages 13–14

<details><summary>Explanation</summary>

$1f

</details>


---

## Q12 · single choice

You are developing a travel planning agent by using Microsoft Foundry Agent Service.  
The solution must meet the following requirements:  
•  
Remember each user's preferred airline and hotel chain across future conversations.  
•  
Ensure that payment card details are discarded after the conversation ends.  
•  
Minimize custom development.  
Which implementation should you recommend?

- **A.** Store both preferences and payment information in persistent agent memory.
- ✅ **B.** Store preferences in persistent agent memory and retain payment information only in orchestration- managed session context.
- **C.** Store both preferences and payment information in conversation history.
- **D.** Store payment information in Azure AI Search and preferences in session context.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q12 · pages 14–15

<details><summary>Explanation</summary>


Correct Answer:
B. Store preferences in persistent agent memory and retain payment information only in orchestration-
managed session context.
Persistent agent memory is designed to store long-term user preferences that should be available across
future conversations, such as a user's preferred airline or hotel chain. In contrast, sensitive information like
payment card details should not be retained after a conversation ends. Storing payment information only in
the orchestration-managed session context ensures that it is available only during the current conversation
and is discarded when the session ends. This approach satisfies both requirements while minimizing custom
development by using the built-in memory capabilities of Microsoft Foundry Agent Service.
Incorrect Answers:
A. Store both preferences and payment information in persistent agent memory.
Payment card details should not be stored in persistent memory because they must be discarded after the
conversation ends.
C. Store both preferences and payment information in conversation history.
Conversation history is not intended for long-term storage of user preferences across future conversations,
and it may also retain sensitive payment information longer than required.
D. Store payment information in Azure AI Search and preferences in session context.
Azure AI Search is intended for indexing and retrieving searchable content, not for storing sensitive payment
information. In addition, storing preferences in session context would not preserve them across future
conversations.

</details>


---

## Q13 · pick 2

You have a Microsoft Foundry project that contains an agent. The agent uses tools to retrieve internal  
content and call external APIs. The agent is configured to let the model decide when to call the tools.  
You need to publish the agent for a compliance workflow.  
The solution must meet the following requirements:  
• Each workflow run must include a retrieval step before generating a response.  
• Tool calls must authenticate by using the published agent’s own identity.  
• Tool access must use an identity isolated from other project resources.  
• Tool access must use support audit tracing.  
What should you do?

🖼 [Source: AI-103 PDF · page 15](https://tstudy.vercel.app/content/ai-103/figure-72.png)

- **A.** auto
- **B.** none
- ✅ **C.** required
- **D.** Store API keys in the prompt
- **E.** Use a shared project identity
- ✅ **F.** Use a distinct agent identity bound to the client

**Answer:** C, F

**Nguồn:** AI-103 1.pdf · Q13 · pages 15–16

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: tool_choice → required; Authentication → Use a distinct agent identity bound to the client)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 16](https://tstudy.vercel.app/content/ai-103/figure-80.png)


Correct Answers:
Set tool_choice to: required
Setting tool_choice to required ensures that the model must invoke a tool before generating a response.
Since the compliance workflow requires every workflow run to include a retrieval step, this setting
guarantees that the retrieval tool is always called instead of leaving the decision to the model.
Configure the tool to authenticate by: Using a distinct agent identity bound to the client application
Using a distinct agent identity provides an isolated identity for the published agent, separate from other
project resources. This approach supports least-privilege access, enables comprehensive audit tracing of tool
calls, and ensures that all tool invocations are performed using the published agent's own identity. It satisfies
the requirements for identity isolation and compliance auditing.
Incorrect Answers:
auto
The model decides whether to call a tool. This does not guarantee that every workflow run performs the
required retrieval step.
none
The model is prevented from calling any tools, making it impossible to perform the mandatory retrieval step.
Storing API keys in prompts
Embedding API keys in prompts is insecure and violates security best practices. It also does not support
identity-based authentication or audit tracing.
Using the shared project agent identity
A shared project identity is not isolated from other project resources and does not meet the requirement for
dedicated identity isolation for the published agent.

</details>


---

## Q14 · single choice

You have a chat app in a Microsoft Foundry project and an Azure AI Search vectorized index.  
You need to connect to the index to meet the following requirements:  
• Complex questions must retrieve information from multiple chunks.  
• Multi-turn conversations must influence retrieval planning.  
• Retrievals must run in parallel to reduce latency.  
Which retrieval approach should you use?

- **A.** iterative retrieval
- ✅ **B.** agentic Retrieval Augmented Generation (RAG)
- **C.** chain of thought
- **D.** classic Retrieval Augmented Generation (RAG)

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q14 · pages 17–17

<details><summary>Explanation</summary>

Correct Answer:
B. agentic Retrieval Augmented Generation (RAG)
Agentic Retrieval Augmented Generation (RAG) is designed for advanced retrieval scenarios where an AI
agent actively plans and orchestrates the retrieval process. It can decompose complex questions into
multiple search queries, retrieve information from multiple chunks in parallel, and use the context of previous
conversation turns to improve retrieval planning. This enables more accurate responses for complex, multi-
turn conversations while reducing latency through parallel retrieval operations. These capabilities directly
satisfy all the requirements in the scenario.
Incorrect Answers:
A. iterative retrieval
Iterative retrieval performs searches sequentially, refining results over multiple steps. While it can improve
retrieval quality, it does not inherently support parallel retrieval or conversation-aware retrieval planning.
C. chain of thought
Chain of thought is a reasoning technique used by language models to improve reasoning. It is not a retrieval
approach for Azure AI Search.
D. classic Retrieval Augmented Generation (RAG)
Classic RAG performs a single retrieval step before generating a response. It does not perform retrieval
planning across multiple conversation turns or execute parallel retrievals for complex queries.

</details>


---

## Q15 · single choice

You have a Microsoft Foundry project that contains an agent.  
The agent processes scanned employee identification cards from multiple countries.  
The solution must meet the following requirements:  
•  
Extract structured fields such as employee ID, full name, and expiration date.  
•  
Return the extracted values as a structured schema instead of raw text.  
•  
Minimize custom post-processing.  
You plan to call Azure Content Understanding in Foundry Tools.  
Which built-in analyzer should you use?

- **A.** prebuilt-layout
- **B.** prebuilt-documentSearch
- ✅ **C.** prebuilt-documentFieldSchema
- **D.** prebuilt-read

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q15 · pages 18–18

<details><summary>Explanation</summary>

Correct Answer:
C. prebuilt-documentFieldSchema
The prebuilt-documentFieldSchema analyzer is specifically designed to extract predefined structured fields
from documents and return the results in a structured schema. It is ideal for processing employee
identification cards because it can identify fields such as employee ID, full name, and expiration date without
requiring extensive custom parsing. Since the output is already structured, it minimizes the amount of post-
processing required by the application, directly meeting all the stated requirements.
Incorrect Answers:
A. prebuilt-layout
The prebuilt-layout analyzer preserves the document's structure by extracting text, tables, paragraphs, and
other layout elements. It does not focus on returning predefined fields as a structured schema.
B. prebuilt-documentSearch
The prebuilt-documentSearch analyzer is intended for document search and retrieval scenarios rather than
extracting structured document fields.
D. prebuilt-read
The prebuilt-read analyzer performs OCR and extracts raw text from documents. It does not return
structured fields such as employee ID or expiration date without additional post-processing.

</details>


---

## Q16 · pick 2

You have a Microsoft Foundry project that contains a deployed ticket-triage agent.  
You discover that sometimes the agent responds without calling any tools, even when a tool is required. You  
need to ensure that the agent calls a tool during execution.  
How should you complete the Python code?  
To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,  
or not at all.

🖼 [Source: AI-103 PDF · page 19](https://tstudy.vercel.app/content/ai-103/figure-83.png)

- **A.** "auto"
- ✅ **B.** "required"
- **C.** "response_format"
- ✅ **D.** "tool_choice"
- **E.** "tools"
- **F.** "type"

**Answer:** D, B

**Nguồn:** AI-103 1.pdf · Q16 · pages 18–20

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: First blank in the Python code → "tool_choice"; Second blank in the Python code → "required")

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 19](https://tstudy.vercel.app/content/ai-103/figure-84.png)

Correct Answers:
First blank: "tool_choice"
The tool_choice parameter controls whether the language model can decide to use a tool or must use one. It
determines the model's tool invocation behavior during execution. Since the requirement is to ensure that a
tool is always called, the payload must include the tool_choice parameter.
Second blank: "required"
Setting tool_choice to required forces the model to invoke at least one tool before generating a response.
This guarantees that the deployed ticket-triage agent does not respond directly without calling the necessary
retrieval or action tool.
Incorrect Answers:
"auto"
The model decides whether to call a tool. It may generate a response without using any tool, which does not
satisfy the requirement.
"response_format"
This parameter controls the structure of the model's output, not whether tools are invoked.
"tools"
The tools property defines the available tools but does not force the model to use them.
"type"
The type field specifies the type of a tool or schema and does not control tool invocation behavior.

</details>


---

## Q17 · single choice

You have a customer support agent built by using the Microsoft Foundry Agent Service. The agent calls  
an Azure OpenAI model deployment.  
During load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error.  
You need to handle throttling to reduce call failures and improve reliability under load. The solution must  
remain within the service and model limits.  
What should you do?

- **A.** Create a new thread and retry the calls immediately.
- **B.** Reduce the number of registered tools.
- ✅ **C.** Implement a retry policy that uses exponential backoff and jitter.
- **D.** Spit uploaded content into smaller files.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q17 · pages 20–20

<details><summary>Explanation</summary>

Correct Answer:
C. Implement a retry policy that uses exponential backoff and jitter.
An HTTP 429 (Too Many Requests) response indicates that the service or model deployment has reached its
rate limit. The recommended approach is to implement a retry policy that uses exponential backoff
combined with jitter. Exponential backoff progressively increases the delay between retry attempts, while
jitter introduces randomness to prevent multiple clients from retrying simultaneously. This reduces
con
tention, improves reliability under load, and allows requests to succeed without exceeding the service's
configured limits.
Incorrect Answers:
A. Create a new thread and retry the calls immediately.
Creating a new thread does not bypass rate limits, and immediately retrying requests can make throttling
even worse.
B. Reduce the number of registered tools.
The number of registered tools does not affect Azure OpenAI rate limits or resolve HTTP 429 errors.
D. Split uploaded content into smaller files.
Splitting files may reduce the size of individual requests but does not address request throttling or rate-limit
exceeded errors.

</details>


---

## Q18 · single choice

You are planning a Microsoft Foundry project named Project1 that will contain several prompt flow  
applications and agents.  
Each application must use the same Azure AI Foundry Model deployment hosted in another Azure resource.  
You need to recommend a solution that enables all applications in Project1 to reuse the model configuration  
without duplicating connection settings.  
What should you recommend?

- ✅ **A.** Create a connection to the model resource.
- **B.** Configure a managed private endpoint.
- **C.** Enable role-based access control (RBAC) on the model deployment.
- **D.** Configure diagnostic settings for the model deployment.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q18 · pages 21–21

<details><summary>Explanation</summary>

Correct Answer:
A. Create a connection to the model resource.
A connection in Microsoft Azure AI Foundry provides a centralized way to reference external resources such
as model deployments. By creating a connection to the Azure AI Foundry model hosted in another Azure
resource, all prompt flow applications and agents within Project1 can reuse the same model configuration.
This eliminates the need to duplicate endpoint URLs, authentication settings, and other connection details
across multiple applications, reducing administrative effort and ensuring consistent configuration.
Incorrect Answers:
B. Configure a managed private endpoint.
A managed private endpoint provides secure network connectivity to Azure resources but does not enable
applications to share or reuse model connection settings.
C. Enable role-based access control (RBAC) on the model deployment.
RBAC controls who can access the model deployment, but it does not centralize or reuse model
configuration across multiple applications.
D. Configure diagnostic settings for the model deployment.
Diagnostic settings collect logs and metrics for monitoring. They do not provide reusable model connection
configurations.

</details>


---

## Q19 · pick 2

You have a Microsoft Foundry project that contains an agent that answers questions by using Retrieval-  
Augmented Generation (RAG).  
A GitHub Actions workflow automatically deploys updates whenever a pull request is approved.  
The organization has the following requirements:  
•  
Validate that responses remain grounded in the retrieved documents before deployment.  
•  
Prevent pull requests from being merged if the evaluation does not satisfy the required quality  
thresholds.

🖼 [Source: AI-103 PDF · page 22](https://tstudy.vercel.app/content/ai-103/figure-91.png)

- ✅ **A.** Groundedness
- **B.** Fluency
- **C.** Similarity
- **D.** Content Safety
- ✅ **E.** Require successful evaluation before merge
- **F.** Automatically retry failed evaluations
- **G.** Notify reviewers
- **H.** Allow merge and then evaluate

**Answer:** A, E

**Nguồn:** AI-103 1.pdf · Q19 · pages 21–23

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Evaluation → Groundedness; Branch protection policy → Require successful evaluation before merge)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 22](https://tstudy.vercel.app/content/ai-103/figure-93.png)


Correct Answers:
Evaluation to execute: Groundedness evaluation
Groundedness evaluation verifies whether the agent's responses are supported by the retrieved documents.
Since the agent uses Retrieval-Augmented Generation (RAG), this evaluation ensures that answers remain
faithful to the retrieved content and do not introduce hallucinations. This directly satisfies the requirement to
validate that responses remain grounded before deployment.
Pull request policy: Require the evaluation workflow to succeed before merging
Requiring the evaluation workflow to succeed before merging enforces quality gates in the CI/CD pipeline. If
the groundedness evaluation fails to meet the configured quality thresholds, the pull request cannot be
merged, preventing unvalidated changes from being deployed to production.
Incorrect Answers:
Fluency evaluation
Fluency evaluates grammar, readability, and language quality, but it does not verify whether responses are
grounded in retrieved documents.
Similarity evaluation
Similarity compares responses against reference answers but does not determine whether the responses are
supported by the retrieved documents.
Content Safety evaluation
Content Safety evaluates harmful or unsafe content. It does not measure whether responses are grounded in
the retrieved knowledge.
Automatically rerun failed evaluations until they pass
Automatically retrying evaluations does not resolve genuine quality issues and does not enforce deployment
quality standards.
Notify reviewers when evaluations fail
Notification alone does not prevent a pull request from being merged.
Allow the merge and run evaluations after deployment
This allows potentially poor-quality changes to reach production, violating the requirement to validate
responses before deployment.

</details>


---

## Q20 · single choice

You are creating an image-processing workflow in a Microsoft Foundry project. The workflow must  
meet the following requirements:  
•  
Generate multiple alternative versions of an existing product image for marketing campaigns.  
•  
Preserve the overall composition, lighting, and subject.  
•  
Use the built-in image generation capabilities without training a custom model.  
You need to configure the workflow to generate several stylistic alternatives from the original image.  
How should you configure the workflow?

- ✅ **A.** Enable image_variation mode and provide the original image as the input.
- **B.** Enable mask_inpainting and provide a mask that covers the entire image.
- **C.** Enable text_to_image mode and describe the original image in the prompt.
- **D.** Enable image_to_image mode with the strength parameter set to 1.0.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q20 · pages 23–24

<details><summary>Explanation</summary>


Correct Answer:
A. Enable image_variation mode and provide the original image as the input.
The image_variation mode is specifically designed to generate multiple alternative versions of an existing
image while preserving its key visual characteristics. It maintains the overall composition, lighting, subject,
and structure of the original image, making it ideal for creating different marketing variations of a product
photo. Since it is a built-in capability of Microsoft Foundry image generation models, it also satisfies the
requirement of generating alternatives without training a custom model.
Incorrect Answers:
B. Enable mask_inpainting and provide a mask that covers the entire image.
Mask inpainting is intended to modify selected portions of an image. Using a mask that covers the entire
image effectively repaints the whole image and is not designed for generating multiple stylistic variations
while preserving the original composition.
C. Enable text_to_image mode and describe the original image in the prompt.
Text-to-image generation creates a new image based solely on the text prompt. Even with a detailed
description, it cannot reliably preserve the exact composition, lighting, and subject of the original product
image.
D. Enable image_to_image mode with the strength parameter set to 1.0.
With image-to-image generation, a strength value of 1.0 gives maximum influence to the text prompt and
minimal influence to the input image. This makes it unlikely to preserve the original composition and visual
characteristics.

</details>


---

## Q21 · single choice

You have a Microsoft Foundry project that contains an agent.  
The agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents  
include digitally scanned PDFs that contain multipage tables.  
You have an ingestion job that extracts only plain text, causing loss of table structure, headings, and page-  
number metadata.  
Users frequently ask questions that require the retrieval of specific table rows across the pages.  
You need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that performs  
optical character recognition (OCR) on scanned PDFs, preserves tables and headings as structure-aware  
chunks, and stores page-number metadata with each chunk.  
How should you configure the ingestion job?

- ✅ **A.** Use advanced data parsing to reingest the documents.
- **B.** Use OCR and page-level chunking.
- **C.** Use page-level OCR extraction and store each page as a single chunk.
- **D.** Use basic parsing and fixed-size chunking.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q21 · pages 24–25

<details><summary>Explanation</summary>


Correct Answer:
A. Use advanced data parsing to reingest the documents.
Advanced data parsing is designed for ingestion scenarios involving complex documents such as scanned
PDFs. It performs OCR on scanned content, preserves document structure including headings, tables, and
sections, creates structure-aware chunks instead of plain-text chunks, and stores useful metadata such as
page numbers with each chunk. This enables Retrieval-Augmented Generation (RAG) systems to retrieve
specific table rows across multiple pages while maintaining the original document context. Since the current
ingestion process loses table structure and metadata, reingesting the documents with advanced data parsing
directly addresses all the stated requirements.
Incorrect Answers:
B. Use OCR and page-level chunking.
Although OCR extracts text from scanned PDFs, page-level chunking stores an entire page as a chunk and
does not preserve document structure such as tables and headings as structure-aware chunks.
C. Use page-level OCR extraction and store each page as a single chunk.
Storing each page as a single chunk produces large chunks that make retrieval less precise, especially when
users need information from specific table rows across pages.
D. Use basic parsing and fixed-size chunking.
Basic parsing with fixed-size chunking loses document structure, table relationships, headings, and page
metadata, making it unsuitable for scanned documents used in RAG.

</details>


---

## Q22 · single choice

A Microsoft Foundry agent helps engineers troubleshoot production systems.  
The solution must meet the following requirements:  
•  
Download diagnostic logs from an internal web application that does not expose APIs.  
•  
Analyze the downloaded log files to identify performance bottlenecks.  
Which combination of tools should you recommend?

- ✅ **A.** Computer use and Code interpreter
- **B.** File search and Microsoft Fabric
- **C.** Grounding with Bing Search and Code interpreter
- **D.** Computer use and File search

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q22 · pages 25–26

<details><summary>Explanation</summary>

$2a

</details>


---

## Q23 · pick 2

You have a Microsoft Foundry project that contains an internal Q&A agent.  
Users report the following issues when they ask the agent questions:  
An increase in the following response: “No relevant information found”  
Periodic HTTP 429 rate limit exceeded errors during peak hours  
You need to identify whether each issue is caused by model unavailability, resource limits, or inference  
failures.  
What should you do?

🖼 [Source: AI-103 PDF · page 26](https://tstudy.vercel.app/content/ai-103/figure-102.png)

- ✅ **A.** Model Availability Rate and Provisioned Utilization
- **B.** Only Tokens Cache Match Rate
- **C.** Only Total Requests with status 200
- **D.** Time To Response and Total Tokens
- **E.** AllMetrics
- **F.** audit
- ✅ **G.** RequestResponse
- **H.** trace

**Answer:** A, G

**Nguồn:** AI-103 1.pdf · Q23 · pages 26–28

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Metrics → Model Availability Rate and Provisioned Utilization; Diagnostic log category → RequestResponse)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 27](https://tstudy.vercel.app/content/ai-103/figure-105.png)

$2b

</details>


---

## Q24 · pick 2

You have a Microsoft Foundry project that contains a prompt agent used by a customer support web  
app. The agent is invoked from a Python service that does NOT run in the Foundry portal.  
You need to implement end-to-end tracing to capture latency breakdowns and exceptions across agent runs.  
Which two components can you use?

- **A.** a Log Analytics workspace
- ✅ **B.** Application Insights
- ✅ **C.** OpenTelemetry
- **D.** the Azure Monitor Agent
- **E.** Microsoft Sentinel

**Answer:** B, C

**Nguồn:** AI-103 1.pdf · Q24 · pages 28–28

<details><summary>Explanation</summary>

$2c

</details>


---

## Q25 · single choice

You have a Microsoft Foundry project that contains a customer support agent.  
The agent uses multiple tools during execution. Users report that responses are delayed because the agent  
waits for several independent tool calls to complete.  
You need to reduce the overall response time. The solution must be implemented in the application logic.  
What should you do?

- ✅ **A.** Execute independent tool calls in parallel before generating the response.
- **B.** Increase the maximum completion tokens.
- **C.** Replace the language model with a larger deployment.
- **D.** Enable persistent agent memory.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q25 · pages 29–29

<details><summary>Explanation</summary>

$2d

</details>


---

## Q26 · pick 2

You have a Microsoft Foundry project that contains a customer support agent grounded in internal  
documentation. After a recent update, users report the following issues:  
• Some answers are unsupported by retrieved documents.  
• A small number of responses are flagged for policy violations.  
You need to evaluate each issue.  
Which observability signals should you use for each issue?  
To answer, drag the appropriate observability signals to the correct issues. Each observability signal may be  
used once, more than once, or not at all.

🖼 [Source: AI-103 PDF · page 30](https://tstudy.vercel.app/content/ai-103/figure-112.png)

- ✅ **A.** Groundedness evaluation metrics
- **B.** Latency breakdown traces
- ✅ **C.** Risk and safety metrics
- **D.** Token usage analytics

**Answer:** A, C

**Nguồn:** AI-103 1.pdf · Q26 · pages 29–30

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Identify unsupported statements → Groundedness evaluation metrics; Identify policy violations → Risk and safety metrics)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 30](https://tstudy.vercel.app/content/ai-103/figure-113.png)

$2e

</details>


---

## Q27 · single choice

You are creating an image-editing workflow in a Microsoft Foundry project.  
The workflow must meet the following requirements:  
• Ensure that background objects can be removed by applying a mask-based inpainting edit.  
• Preserve the original lighting and style of the edited images.  
• Use the built-in image editing controls, NOT a custom model.  
You need to ensure that image edits apply exclusively inside the masked area.  
How should you configure the workflow?

- **A.** Set generation mode to image_variation and provide the original image as a reference.
- **B.** Enable text_to_image mode and a prompt describing the desired background removal.
- **C.** Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt.
- ✅ **D.** Enable mask_inpainting and supply both the input image and a mask indicating which part of the image to modify.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q27 · pages 31–31

<details><summary>Explanation</summary>

$2f

</details>


---

## Q28 · single choice

You have a Microsoft Foundry project that contains an agent. The agent uses Azure AI Search in  
Foundry Tools to retrieve documents from a search index.  
The application returns an error indicating that the specified index cannot be found.  
You verify that the Azure AI Search service is reachable and authentication succeeds.  
You need to configure the request to reference the correct search index.  
To what should you set the index property?

- **A.** The Azure AI Search service name
- **B.** The Azure AI Search endpoint URL
- ✅ **C.** The Azure AI Search index name
- **D.** The Microsoft Foundry project name

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q28 · pages 32–32

<details><summary>Explanation</summary>

Correct Answer:
C. The Azure AI Search index name
The index property must be set to the Azure AI Search index name, which uniquely identifies the search
index that contains the documents to be queried. Since the Azure AI Search service is reachable and
authentication succeeds, the error indicates that the request is referencing an incorrect or non-existent
index. Specifying the correct index name enables the agent to retrieve documents from the intended search
index.
Incorrect Answers:
A. The Azure AI Search service name
The service name identifies the Azure AI Search service instance, not the specific index within that service.
B. The Azure AI Search endpoint URL
The endpoint URL specifies the location of the Azure AI Search service. It does not identify which search
index should be queried.
D. The Microsoft Foundry project name
The Microsoft Foundry project name identifies the AI project but has no relationship to the Azure AI Search
index used for document retrieval.

</details>


---

## Q29 · pick 2

You need to recommend a plan to create a customer support agent by using the Microsoft Foundry  
Agent Service.  
The agent must meet the following requirements:  
• Retain user preferences across multiple conversations.  
• Enable users to provide contextual grounding by directly uploading documents during a chat.  
Which Foundry capability should you recommend for each requirement?

🖼 [Source: AI-103 PDF · page 33](https://tstudy.vercel.app/content/ai-103/figure-120.png)

- ✅ **A.** Persistent agent memory
- **B.** Conversation history
- **C.** Orchestration-managed session context
- **D.** Azure AI Search
- **E.** Code interpreter
- ✅ **F.** File search

**Answer:** A, F

**Nguồn:** AI-103 1.pdf · Q29 · pages 32–34

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Retain user preferences → Persistent agent memory; Contextualize uploaded files → File search)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 33](https://tstudy.vercel.app/content/ai-103/figure-121.png)


Correct Answers:
To retain user preferences across conversations: Agent memory that uses persistent storage
Persistent agent memory is designed to store long-term user information such as preferences, allowing the
agent to remember details across multiple conversations. This capability enables personalized interactions
without requiring users to repeat their preferences in every new chat.
To enable users to provide contextual grounding during chats: File search tool
The File search tool allows users to upload documents directly during a conversation. The agent indexes
these uploaded files and retrieves relevant information from them to ground its responses. This enables
contextual question answering based on documents supplied by the user during the chat.
Incorrect Answers:
Conversation history
Conversation history maintains messages within a conversation but is not intended for storing long-term
user preferences across multiple conversations.
Orchestration-managed session context
Session context exists only for the duration of the current conversation and is discarded when the session
ends.
Azure AI Search tool
Azure AI Search retrieves information from existing Azure AI Search indexes. It is not designed for users to
upload documents directly during a chat.
Code interpreter tool
The Code Interpreter executes code and analyzes uploaded files but is not intended to provide document
grounding through semantic document retrieval.

</details>


---

## Q30 · single choice

You are developing an image-editing workflow in a Microsoft Foundry project.  
The workflow must meet the following requirements:  
•  
Replace the sky in landscape photographs with a sunset.  
•  
Modify only the selected sky region.  
•  
Preserve all foreground objects without regeneration.  
•  
Use the built-in image editing capabilities.  
You need to configure the workflow.  
How should you configure the workflow?

- **A.** Enable image_variation mode and provide the original image.
- ✅ **B.** Enable mask_inpainting and provide the original image together with a mask covering the sky.
- **C.** Enable text_to_image mode and describe the desired landscape.
- **D.** Enable image_to_image mode with a high-strength value.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q30 · pages 34–35

<details><summary>Explanation</summary>

Correct Answer:
B. Enable mask_inpainting and provide the original image together with a mask covering the sky.
Mask inpainting is the built-in image editing capability designed for selective image modifications. By
supplying the original image along with a mask covering only the sky, the model applies the requested edit
exclusively within the masked region while preserving the rest of the image. This ensures that the foreground
objects, lighting, composition, and other unmasked areas remain unchanged. It satisfies all the stated
requirements by replacing only the sky with a sunset using the built-in image editing capabilities.
Incorrect Answers:
A. Enable image_variation mode and provide the original image.
Image variation generates alternative versions of the entire image rather than modifying only a selected
region defined by a mask.
C. Enable text_to_image mode and describe the desired landscape.
Text-to-image generates a completely new image from a text prompt and cannot preserve the original
foreground objects or composition.
D. Enable image_to_image mode with a high-strength value.
A high-strength value causes much of the image to be regenerated based on the prompt, which can modify
areas outside the intended sky region and alter foreground objects.

</details>


---

## Q31 · single choice

You are planning a Microsoft Foundry project named Project1 that will contain multiple agents. Each  
agent will access the same Azure AI Search resource.  
You need to recommend a solution to centrally manage the Azure AI Search credentials within Project1. The  
solution must be implemented across all the agents.  
What should you recommend?

- **A.** Enable role-based access control (RBAC) for the Azure AI Search resource.
- **B.** Disable key-based access control on the Azure AI Search resource.
- ✅ **C.** Add a connection to the Azure AI Search resource.
- **D.** Create a managed private endpoint that connects to the Azure AI Search resource.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q31 · pages 35–35

<details><summary>Explanation</summary>

Correct Answer:
C. Add a connection to the Azure AI Search resource.
A connection in Microsoft Foundry provides a centralized way to store and manage the endpoint and
authentication credentials for external resources such as Azure AI Search. Once the connection is created
within Project1, all agents in the project can reference the same connection instead of maintaining separate
credentials. This simplifies administration, ensures consistent configuration, and eliminates duplication
across multiple agents.
Incorrect Answers:
A. Enable role-based access control (RBAC) for the Azure AI Search resource.
RBAC controls access permissions to the Azure AI Search resource but does not centrally manage or share
connection credentials across multiple agents.
B. Disable key-based access control on the Azure AI Search resource.
Disabling key-based authentication changes the authentication method but does not provide centralized
credential management within the Foundry project.
D. Create a managed private endpoint that connects to the Azure AI Search resource.
A managed private endpoint provides secure network connectivity to the Azure AI Search resource but does
not manage or centralize authentication credentials.

</details>


---

## Q32 · single choice

You are deploying a support agent that enables users to upload photos.  
You need to automatically classify uploaded images for harmful content. The solution must block content  
based on severity levels.  
What should you do?

- **A.** Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools.
- **B.** Enable prompt shields.
- **C.** Use blocklists.
- ✅ **D.** Implement image moderation.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q32 · pages 36–36

<details><summary>Explanation</summary>

Correct Answer:
D. Implement image moderation.
Image moderation is designed to analyze uploaded images and classify them for harmful or unsafe content.
It evaluates images against predefined safety categories and assigns severity levels, allowing the application
to automatically block content that exceeds configured thresholds. This directly satisfies the requirement to
classify uploaded images and block them based on severity levels using Microsoft's built-in responsible AI
capabilities.
Incorrect Answers:
A. Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry
Tools.
OCR extracts text from images, but keyword scanning cannot detect harmful visual content such as violence,
sexual content, or graphic imagery.
B. Enable prompt shields.
Prompt shields protect against prompt injection attacks and malicious instructions. They do not classify
uploaded images for harmful visual content.
C. Use blocklists.
Blocklists filter specific words or phrases in text. They are not intended for image content moderation or
severity-based image classification.

</details>


---

## Q33 · pick 2

You have a Microsoft Foundry project that contains an agent named PaymentAgent.  
PaymentAgent includes a function tool that issues customer refunds by using an external API.  
You are creating a workflow in YAML.  
You need to ensure that the workflow pauses for human approval and continues with the refund step only  
after approval is granted.  
How should you complete the workflow definition?

🖼 [Source: AI-103 PDF · page 37](https://tstudy.vercel.app/content/ai-103/figure-130.png)

- ✅ **A.** ask_question
- **B.** basic_chat
- **C.** data_transformation
- ✅ **D.** approval == "approved"
- **E.** propose_refund.output != null
- **F.** true

**Answer:** A, D

**Nguồn:** AI-103 1.pdf · Q33 · pages 36–38

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: YAML type → ask_question; Condition → approval == "approved")

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 37](https://tstudy.vercel.app/content/ai-103/figure-131.png)

Correct Answers:
Type: ask_question
The ask_question workflow step pauses execution and waits for human input before continuing. It is
designed for Human-in-the-Loop (HITL) scenarios where a user or approver must review and approve an
action before the workflow proceeds. Since the requirement is to pause the workflow until a human approves
the refund, this is the appropriate step type.
Condition: approval == "approved"
The refund should only be executed afte
r explicit approval is received. Setting the condition to approval ==
"approved" ensures that the execute_refund step runs only when the approval step returns the value
approved, preventing unauthorized refunds.
Incorrect Answers:
basic_chat
A basic chat step generates conversational responses but does not pause the workflow for structured human
approval.
data_transformation
A data transformation step modifies or reshapes data. It is not intended for collecting human approval.
propose_refund.output != null
This condition only checks whether the previous step produced an output. It does not verify that a human
approved the refund.
true
This condition always evaluates to true, causing the refund to execute regardless of whether approval was
granted.

</details>


---

## Q34 · single choice

You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal  
documentation. After a recent content update, users report that the agent’s answers have become less  
accurate.  
You need to identify whether the retrieved content is negatively influencing the model’s generated responses.  
Which observability signal should you review?

- **A.** indexer status and failure history
- **B.** latency breakdown traces
- **C.** prediction drift metrics
- ✅ **D.** groundedness evaluation metrics

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q34 · pages 38–39

<details><summary>Explanation</summary>

Correct Answer:
D. groundedness evaluation metrics
Groundedness evaluation metrics measure whether the agent's generated responses are supported by the
retrieved documents in a Retrieval-Augmented Generation (RAG) solution. If recent updates to the indexed
content cause the retrieved information to become less relevant or incorrect, groundedness metrics help
determine whether the retrieved content is negatively influencing the model's responses. This is the
appropriate observability signal for diagnosing answer quality issues in a RAG-based agent.
Incorrect Answers:
A. indexer status and failure history
Indexer status helps determine whether documents were successfully indexed, but it does not evaluate
whether the retrieved content is producing accurate or well-grounded responses.
B. latency breakdown traces
Latency breakdown traces measure the execution time of retrieval, tool calls, and model inference. They do
not measure response quality or grounding.
C. prediction drift metrics
Prediction drift metrics monitor changes in model predictions over time, typically for machine learning
models. They are not used to evaluate whether RAG responses are supported by retrieved documents.

</details>


---

## Q35 · single choice

You have a Microsoft Foundry project that contains an agent used by a legal department. The agent  
generates answers by using documents retrieved from an Azure AI Search index.  
Users report that some answers omit important clauses from lengthy legal documents.  
You need to improve the completeness of responses. The solution must be implemented in the application  
logic without changing the search index or replacing the deployed model.  
What should you do?

- ✅ **A.** Increase the number of retrieved document chunks before constructing the prompt.
- **B.** Enable Prompt Shields for document attacks.
- **C.** Configure Content Safety to annotate responses.
- **D.** Use a lower temperature value.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q35 · pages 39–40

<details><summary>Explanation</summary>


Correct Answer:
A. Increase the number of retrieved document chunks before constructing the prompt.
The agent uses Retrieval-Augmented Generation (RAG) with documents stored in an Azure AI Search index.
If users report that important clauses from lengthy legal documents are being omitted, the most effective
solution is to retrieve more relevant document chunks before building the prompt sent to the language
model. By increasing the number of retrieved chunks, the application provides the model with a broader and
more complete context, improving the likelihood that all relevant legal clauses are included in the generated
response. This solution is implemented entirely in the application logic and does not require changes to the
search index or the deployed model.
Incorrect Answers:
B. Enable Prompt Shields for document attacks.
Prompt Shields protect against prompt injection attacks and malicious instructions. They do not improve
retrieval completeness or include additional document content.
C. Configure Content Safety to annotate responses.
Content Safety evaluates responses for harmful or policy-violating content. It does not improve the
completeness of responses generated from retrieved documents.
D. Use a lower temperature value.
Reducing the temperature makes responses more deterministic, but it does not provide the model with
additional document context or prevent important clauses from being omitted.

</details>


---

## Q36 · pick 2

You have a Microsoft Foundry project that processes procurement documents submitted by suppliers.  
You need to implement two pipelines by using Azure Content Understanding in Foundry Tools.  
The solution must meet the following requirements:  
• Include a pipeline named Pipeline1 that supports cost-effective, high-volume processing of  
standalone PDF invoices.  
• Include a pipeline named Pipeline2 that supports cross-document validation by using multi-step  
reasoning and reference data.  
How should you configure each pipeline?  
To answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once,  
more than once, of not at all.

🖼 [Source: AI-103 PDF · page 40](https://tstudy.vercel.app/content/ai-103/figure-138.png)

- **A.** Multi-file model (pro mode)
- **B.** Multi-file model (standard mode)
- **C.** Single-file model (pro mode)
- ✅ **D.** Single-file model (standard mode)
- ✅ **E.** Multi-file model (pro mode)
- **F.** Multi-file model (standard mode)
- **G.** Single-file model (pro mode)
- **H.** Single-file model (standard mode)

**Answer:** D, E

**Nguồn:** AI-103 1.pdf · Q36 · pages 40–41

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Pipeline1 → Single-file model (standard mode); Pipeline2 → Multi-file model (pro mode))

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 40](https://tstudy.vercel.app/content/ai-103/figure-139.png)

Correct Answers:
Pipeline1: Single-file task in standard mode
Pipeline1 is intended for cost-effective, high-volume processing of standalone PDF invoices. Since each
invoice is processed independently and does not require advanced reasoning or cross-document analysis, a
single-file task in standard mode is the most efficient and economical choice. Standard mode is optimized
for straightforward document extraction at scale.
Pipeline2: Multi-file task in pro mode
Pipeline2 must perform cross-document validation using multi-step reasoning and reference data. This
requires analyzing multiple related documents together, comparing information across them, and applying
advanced reasoning. A multi-file task in pro mode is specifically designed for these complex document
understanding scenarios.
Incorrect Answers:
Multi-file task in standard mode
Standard mode does not provide the advanced multi-step reasoning capabilities needed for cross-document
validation.
Single-file task in pro mode
Although Pro mode supports advanced reasoning, a single-file task cannot analyze relationships across
multiple documents and therefore does not meet the cross-document validation requirement.

</details>


---

## Q37 · single choice

You have a multimodal AI generative model that accepts image uploads and uses extracted image text  
to generate responses.  
You discover that users can upload unsafe images and embed hidden instructions into images to manipulate  
the model.  
You need to implement controls to mitigate the risk.  
Solution: You configure a prompt shield for user prompts.  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q37 · pages 41–41

<details><summary>Explanation</summary>

Prompt Shields for user prompts protect against direct prompt injection attacks where malicious instructions
are entered directly by the user in the prompt. In this scenario, the threat comes from uploaded images
containing hidden or embedded text that is extracted and supplied to the multimodal model. This is an
indirect prompt injection (document attack). To mitigate this risk, you should configure Prompt Shields for
document attacks. If the content comes from third-party sources, enabling Spotlighting provides additional
protection by treating that content as lower trust.

</details>


---

## Q38 · single choice

You have a multimodal AI generative model that accepts image uploads and uses extracted image text  
to generate responses.  
You discover that users can upload unsafe images and embed hidden instructions into images to manipulate  
the model.  
You need to implement controls to mitigate the risk.  
Solution: You configure image moderation to block unsafe content before processing the images.  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q38 · pages 42–42

<details><summary>Explanation</summary>

Image moderation is designed to detect and block unsafe visual content, such as violence, sexual content,
or other harmful imagery based on configured severity levels. However, it does not protect against hidden
prompt injection instructions embedded as text within images. In this scenario, the risk is an indirect
prompt injection attack, which should be mitigated by using Prompt Shields for document attacks. If the
images originate from external or third-party sources, Spotlighting should also be enabled to treat the
extracted content as lower trust.

</details>


---

## Q39 · single choice

You have a multimodal AI generative model that accepts image uploads and uses extracted image text  
to generate responses.  
You discover that users can upload unsafe images and embed hidden instructions into images to manipulate  
the model.  
You need to implement controls to mitigate the risk.  
Solution: You configure a prompt shield for documents. .  
Does this meet the goal?

- ✅ **A.** Yes
- **B.** No

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q39 · pages 42–42

<details><summary>Explanation</summary>

Prompt Shields for documents are specifically designed to protect against indirect prompt injection attacks
originating from documents, images, and other external content. In this scenario, users upload images
containing hidden embedded text that is extracted and passed to the multimodal model. By enabling Prompt
Shields for documents, the service analyzes the extracted content and detects attempts to manipulate the
model through embedded instructions. This directly mitigates the identified risk. For third-party or untrusted
content, enabling Spotlighting provides additional protection by treating the extracted content as lower trust.

</details>


---

## Q40 · single choice

You have a multimodal AI generative model that accepts image uploads and uses extracted image text  
to generate responses.  
You discover that users can upload unsafe images and embed hidden instructions into images to manipulate  
the model.  
You need to implement controls to mitigate the risk.  
Solution: You configure protected material detection.  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q40 · pages 43–43

<details><summary>Explanation</summary>

Protected material detection is designed to identify copyrighted or protected content, such as copyrighted
text, code, lyrics, or other protected material. Its purpose is to help prevent the generation or reproduction of
copyrighted content. It does not detect or prevent indirect prompt injection attacks where hidden
instructions are embedded in uploaded images. To mitigate this scenario, the appropriate control is Prompt
Shields for document attacks, which analyze extracted content from documents and images for malicious
instructions.

</details>


---

## Q41 · single choice

You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage.  
Each invoice contains printed fine items and has a table-based layout.  
Extracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval  
Augmented Generation (RAG) solution.  
You need to create a single analyzer that meets the following requirements:  
• Extracts the invoice number, invoice date, vendor name, and total amount across varying templates  
• Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor  
review  
What should you use?

- **A.** a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores
- ✅ **B.** a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing
- **C.** the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer
- **D.** the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q41 · pages 43–44

<details><summary>Explanation</summary>


Correct Answer:
B. a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the
extracted fields and the returned confidence scores for routing
A custom Azure Content Understanding analyzer allows you to define the exact fields to extract, such as
invoice number, invoice date, vendor name, and total amount, even when invoices use different templates.
It also returns confidence scores for each extracted field, enabling the application to automatically identify
low-confidence results. By routing documents with confidence scores below 0.80 for supervisor review, the
solution meets both the extraction and validation requirements while producing structured JSON suitable for
a Retrieval-Augmented Generation (RAG) solution.
Incorrect Answers:
A. a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence
scores
Groundedness guardrails evaluate whether generated responses are supported by retrieved content. They
are not designed to extract structured invoice fields or provide extraction confidence scores.
C. the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer
The prebuilt-layout analyzer extracts document layout elements such as text, tables, and paragraphs, but it
does not extract predefined invoice fields with confidence scores across varying invoice templates.
D. the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score
from the Azure AI Search results for routing
The search.score in Azure AI Search represents the relevance of search results, not the confidence of
extracted document fields. It cannot be used to determine the accuracy of invoice field extraction.

</details>


---

## Q42 · single choice

A Microsoft Foundry agent retrieves content from external websites by using Grounding with Bing  
Search.  
Security administrators want to:  
•  
Detect indirect prompt injection attempts.  
•  
Review detections before deciding whether to block requests.  
Which configuration should you recommend?

- **A.** Disable Prompt Shields.
- **B.** Configure Prompt Shields to Block.
- ✅ **C.** Configure Prompt Shields to Annotate and enable Spotlighting.
- **D.** Configure Content Safety to Block Hate content.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q42 · pages 44–45

<details><summary>Explanation</summary>

Correct Answer:
C. Configure Prompt Shields to Annotate and enable Spotlighting.
This solution satisfies both requirements. Setting Prompt Shields to Annotate detects indirect prompt
injection attempts without automatically blocking requests, allowing security administrators to review
detections before taking action. Enabling Spotlighting marks third-party content, such as web content
retrieved through Grounding with Bing Search, as lower-trust input. This helps the model distinguish trusted
instructions from potentially malicious embedded instructions, reducing the risk of indirect prompt injection
attacks.
Incorrect Answers:
A. Disable Prompt Shields.
Disabling Prompt Shields removes protection against indirect prompt injection attacks and does not detect
malicious instructions.
B. Configure Prompt Shields to Block.
Block mode automatically rejects detected prompt injection attempts. The requirement is to review detections
before deciding whether to block requests.
D. Configure Content Safety to Block Hate content.
Content Safety filters harmful or unsafe content such as hate, violence, or sexual content. It does not detect
or mitigate indirect prompt injection attacks.

</details>


---

## Q43 · pick 2

You have a Microsoft Foundry project that contains a workflow for a customer support triage process.  
You have an Ask a question node that stores user responses in a local variable named Var01.  
You need to create the following Power Fx expressions:  
• An if/else condition expression that ensures that Var01 contains a value  
• A Send message expression that returns the stored user response in uppercase  
How should you configure the expressions?

🖼 [Source: AI-103 PDF · page 45](https://tstudy.vercel.app/content/ai-103/figure-150.png)

- **A.** IsBlank(Local.Var01)
- **B.** IsEmpty(Local.Var01)
- ✅ **C.** Not(IsBlank(Local.Var01))
- **D.** {Local.Var01}
- ✅ **E.** {Upper(Local.Var01)}
- **F.** {Upper(Var01)}

**Answer:** C, E

**Nguồn:** AI-103 1.pdf · Q43 · pages 45–46

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Condition → Not(IsBlank(Local.Var01)); Message → {Upper(Local.Var01)})

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 46](https://tstudy.vercel.app/content/ai-103/figure-158.png)

$3a

</details>


---

## Q44 · single choice

You have a customer support agent that uses the Microsoft Foundry Agent Service.  
Sometimes, customers return to a session days later to continue the same support case, and the agent must  
resume with the full historical context.  
The agent must provide the following:  
Multi-turn continuity within the session Cross-session continuity for the same case  
•  
Access to the full interaction history, including user messages, agent messages, tool calls, and tool  
•  
outputs  
You need to ensure that the agent automatically reloads the complete history on each new turn.  
What should you do?

- ✅ **A.** Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent requests.
- **B.** Persist only the final model response stored in the client application and prepend the response to future prompts.
- **C.** Enable memory summarization on the agent definition to persist the context automatically.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q44 · pages 46–47

<details><summary>Explanation</summary>

$3b

</details>


---

## Q45 · single choice

You have a Microsoft Foundry Agent Service project that contains an HR onboarding agent.  
Employees frequently pause conversations and continue them several days later.  
The solution must meet the following requirements:  
•  
Resume the conversation exactly where it ended.  
•  
Ensure the agent can reference previous tool invocations and uploaded documents.  
•  
Avoid manually reconstructing conversation history.  
What should you do?

- **A.** Create a new thread for each user request and copy previous responses into the prompt.
- ✅ **B.** Persist the thread ID and continue subsequent requests by using the existing thread.
- **C.** Store conversation summaries in persistent memory and start a new thread for every session.
- **D.** Save only the final assistant response and include it as context in future requests.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q45 · pages 47–48

<details><summary>Explanation</summary>

$3c

</details>


---

## Q46 · pick 2

You have a Microsoft Foundry project that processes regulatory compliance documents submitted by  
regional offices.  
You need to implement two pipelines by using Content Understanding in Microsoft Foundry Tools.  
The solution must meet the following requirements:  
•  
Include a pipeline named Pipeline1 that extracts key compliance information from individual audit  
reports while minimizing processing costs.  
•  
Include a pipeline named Pipeline2 that analyzes multiple related audit reports together to identify  
inconsistencies across reporting periods by using advanced reasoning.  
How should you configure each pipeline?  
To answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once,  
more than once, or not at all.

🖼 [Source: AI-103 PDF · page 48](https://tstudy.vercel.app/content/ai-103/figure-138.png)

- **A.** Multi-file model (pro mode)
- **B.** Multi-file model (standard mode)
- **C.** Single-file model (pro mode)
- ✅ **D.** Single-file model (standard mode)
- ✅ **E.** Multi-file model (pro mode)
- **F.** Multi-file model (standard mode)
- **G.** Single-file model (pro mode)
- **H.** Single-file model (standard mode)

**Answer:** D, E

**Nguồn:** AI-103 1.pdf · Q46 · pages 48–49

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Pipeline1 → Single-file model (standard mode); Pipeline2 → Multi-file model (pro mode))

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 49](https://tstudy.vercel.app/content/ai-103/figure-139.png)

$3d

</details>


---

## Q47 · single choice

You have a Microsoft Foundry project that contains a high-traffic agent. After a recent update,  
operational costs increase significantly.  
Monitoring confirms that the volume of user traffic to the agent remains unchanged.  
You suspect that changes to the request or response characteristics are causing the increase.  
You need to identify whether the additional costs are driven by the model input size, the model output size, or  
expanded tool usage.  
Which observability capability should you use?

- **A.** latency
- **B.** evaluation metrics
- **C.** run success rate
- ✅ **D.** token usage

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q47 · pages 49–50

<details><summary>Explanation</summary>

$3e

</details>


---

## Q48 · single choice

You have a Microsoft Foundry project that contains an Azure Storage account used to store documents  
for Retrieval-Augmented Generation (RAG).  
The agents authenticate by using managed identities.  
The agents must be able to read blob data but must not upload, modify, or delete files.  
Which role-based access control (RBAC) role should you assign to the managed identities?

- **A.** Storage Blob Data Owner
- **B.** Storage Blob Data Contributor
- ✅ **C.** Storage Blob Data Reader
- **D.** Contributor

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q48 · pages 50–51

<details><summary>Explanation</summary>

Correct Answer:
C. Storage Blob Data Reader
The Storage Blob Data Reader role grants read-only access to blob data in an Azure Storage account. It
allows managed identities to read and download blobs, which is exactly what Retrieval-Augmented
Generation (RAG) agents need to retrieve documents. At the same time, it prevents uploading, modifying, or
deleting blobs, satisfying the principle of least privilege and meeting the security requirements.
Incorrect Answers:
A. Storage Blob Data Owner
This role provides full control over blob data, including reading, writing, deleting, and managing permissions,
which exceeds the required permissions.
B. Storage Blob Data Contributor
This role allows reading, creating, modifying, and deleting blob data. It grants write permissions that are not
required.
D. Contributor
The Contributor role provides management access to Azure resources but does not specifically grant blob
data access. It also grants far more permissions than are needed for read-only document retrieval.

</details>


---

## Q49 · pick 2

You have a Microsoft Foundry project that contains an agent.  
You use a GitHub Actions workflow for CI/CD.  
You need to configure the workflow to automatically evaluate the agent when a pull request (PR) is created  
and prevent branches from merging if the evaluation results do NOT meet the defined thresholds.  
How should you configure the workflow?

🖼 [Source: AI-103 PDF · page 51](https://tstudy.vercel.app/content/ai-103/figure-169.png)

- **A.** Personal access token
- **B.** User-assigned managed identity
- ✅ **C.** Azure Login with OpenID Connect (OIDC)
- **D.** Lock the branch
- **E.** Send an alert
- ✅ **F.** Fail the workflow

**Answer:** C, F

**Nguồn:** AI-103 1.pdf · Q49 · pages 51–52

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Authentication → Azure Login with OpenID Connect (OIDC); Evaluation failure → Fail the workflow)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 51](https://tstudy.vercel.app/content/ai-103/figure-170.png)

$3f

</details>


---

## Q50 · single choice

You have a Microsoft Foundry project that contains an agent. The agent uses Azure Speech in Foundry  
Tools. You fine-tune a baseline speech to text model for the en-us locale and publish the model.  
The agent calls the Speech to text REST API and returns an error message indicating that the project ID is  
invalid. You need to set the project property to the correct ID.  
To what should you set the project property?

- **A.** the project URL
- ✅ **B.** the custom speech project ID
- **C.** the project ID
- **D.** the custom speech endpoint URL

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q50 · pages 52–53

<details><summary>Explanation</summary>

Correct Answer:
B. the custom speech project ID
When using a custom Speech-to-Text model that has been trained and published in Azure Speech, the
Speech-to-Text REST API expects the project property to contain the Custom Speech project ID. This unique
identifier associates the request with the correct custom speech project and its published models. If an
invalid or incorrect ID is provided, the service returns an error indicating that the project ID is invalid.
Incorrect Answers:
A. the project URL
The REST API expects a project ID, not the URL of the project.
C. the project ID
The generic Microsoft Foundry project ID is different from the Custom Speech project ID required by the
Speech service.
D. the custom speech endpoint URL
The endpoint URL specifies where the request is sent, but it is not used as the value of the project property.

</details>


---

## Q51 · single choice

You have a Microsoft Foundry project named Project1.  
Project1 contains an application that processes PDF vendor invoices.  
You need to configure Azure Document Intelligence in Foundry Tools to generate a Markdown output that  
preserves the sections and table structure of the PDFs. The solution must minimize development effort.  
What should you do?

- **A.** Configure output=figures when you analyze the PDF.
- **B.** Configure content=markdown when you analyze the document.
- **C.** Increase the confidence threshold.
- ✅ **D.** Set the output_content_format=ContentFormat.MARKDOWN value.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q51 · pages 53–54

<details><summary>Explanation</summary>

Correct Answer:
D. Set the output_content_format=ContentFormat.MARKDOWN value.
Azure Document Intelligence supports returning document content in Markdown format by setting the
output_content_format parameter to ContentFormat.MARKDOWN. This preserves the document's logical
structure, including headings, sections, paragraphs, lists, and tables, making it ideal for Retrieval-Augmented
Generation (RAG) and downstream processing. Since this is a built-in capability, it minimizes development
effort while producing well-structured Markdown output.
Incorrect Answers:
A. Configure output=figures when you analyze the PDF.
The figures output extracts figures and images from the document. It does not generate Markdown or
preserve the complete document structure.
B. Configure content=markdown when you analyze the document.
There is no content=markdown parameter in the Azure Document Intelligence API for specifying Markdown
output.
C. Increase the confidence threshold.
Increasing the confidence threshold affects the acceptance of extracted content but does not change the
output format to Markdown.

</details>


---

## Q52 · single choice

A legal research agent must satisfy the following requirements:  
•  
Search contracts uploaded by users during an active conversation.  
•  
Search millions of historical court decisions stored in a centralized enterprise index.  
Which combination should you recommend?

- **A.** File Search for both requirements
- **B.** Azure AI Search for both requirements
- ✅ **C.** File Search for uploaded contracts and Azure AI Search for historical court decisions
- **D.** Microsoft Fabric for uploaded contracts and File Search for historical court decisions

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q52 · pages 54–54

<details><summary>Explanation</summary>


Correct Answer:
C. File Search for uploaded contracts and Azure AI Search for historical court decisions
The File Search tool is designed to work with documents that users upload during an active conversation. It
automatically indexes the uploaded files and enables the agent to retrieve relevant information from those
documents without requiring a separate indexing process. This makes it ideal for searching contracts
uploaded during the current chat.
Azure AI Search is designed for large-scale enterprise search scenarios. It can index and search millions of
documents, supports advanced indexing, vector search, hybrid search, semantic ranking, and scalable
retrieval. This makes it the appropriate choice for searching a centralized repository containing millions of
historical court decisions.
Incorrect Answers:
A. File Search for both requirements
File Search is intended for documents uploaded during a conversation. It is not designed to index and search
millions of enterprise documents.
B. Azure AI Search for both requirements
Azure AI Search is excellent for enterprise repositories but is not intended for temporary user-uploaded
documents within an active conversation, where File Search provides a simpler and more efficient solution.
D. Microsoft Fabric for uploaded contracts and File Search for historical court decisions
Microsoft Fabric is an analytics platform rather than a conversational document retrieval tool, and File Search
is not intended for searching millions of historical enterprise documents.

</details>


---

## Q53 · pick 2

You have a Python application named App1 that integrates with a Microsoft Foundry project named  
Project1.  
You need to ensure that App1 meets the following requirements:  
• Authenticates by using a Microsoft Entra managed identity  
• Sends prompts to a deployed model by using the Azure OpenAI Responses API  
How should you complete the Python code?

🖼 [Source: AI-103 PDF · page 55](https://tstudy.vercel.app/content/ai-103/figure-179.png)

- **A.** AzureKeyCredential
- **B.** ClientSecretCredential
- ✅ **C.** DefaultAzureCredential
- **D.** compact
- ✅ **E.** create
- **F.** retrieve

**Answer:** C, E

**Nguồn:** AI-103 1.pdf · Q53 · pages 55–56

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Credential → DefaultAzureCredential; Responses API method → create)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 55](https://tstudy.vercel.app/content/ai-103/figure-181.png)

Correct Answers:
Credential: DefaultAzureCredential
DefaultAzureCredential enables the application to authenticate by using Microsoft Entra ID, including a
managed identity when the application is running in Azure. It automatically selects the appropriate
authentication mechanism based on the execution environment, making it the recommended credential for
applications that use managed identities.
Responses API method: create
The Azure OpenAI Responses API uses the responses.create() method to send prompts to a deployed model
and generate responses. This is the standard method for creating a new model response through the
Responses API.
Incorrect Answers:
AzureKeyCredential
This uses an API key rather than Microsoft Entra managed identity authentication.
ClientSecretCredential
Although it uses Microsoft Entra ID, it requires storing a client secret instead of using a managed identity.
compact
This is not a valid method for sending requests to the Responses API.
retrieve
This retrieves an existing response rather than creating a new one.

</details>


---

## Q54 · single choice

You have a Microsoft Foundry project that generates product marketing images from text prompts.  
After publishing several images, the legal team at your company identifies a competitor’s logo on a sign in  
the background of an image.  
You need to remove only the logo, while preserving the rest of the image.  
What should you do?

- ✅ **A.** Apply a mask-based inpainting edit to the part of the image that contains the logo.
- **B.** Increase the prompt guidance strength.
- **C.** Modify the original prompt to exclude brand names.
- **D.** Rerun the prompt by using a different random seed.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q54 · pages 56–57

<details><summary>Explanation</summary>

Correct Answer:
A. Apply a mask-based inpainting edit to the part of the image that contains the logo.
Mask-based inpainting is designed to modify only a selected region of an existing image. By providing a
mask that covers the competitor's logo, the image generation model replaces only that specific area while
preserving the rest of the image, including the background, lighting, composition, and surrounding objects.
This is the most precise way to remove unwanted content without regenerating the entire image.
Incorrect Answers:
B. Increase the prompt guidance strength.
Increasing prompt guidance influences how closely the generated image follows the prompt, but it does not
selectively remove an existing logo from an image.
C. Modify the original prompt to exclude brand names.
Changing the prompt may reduce the chance of logos appearing in future generations, but it does not edit
the existing image.
D. Rerun the prompt by using a different random seed.
Using a different random seed generates a completely new image and does not guarantee that only the logo
will be removed while preserving the rest of the image.

</details>


---

## Q55 · single choice

You have a Microsoft Foundry project that contains an agent.  
The agent processes scanned maintenance reports that are uploaded by field technicians.  
The solution must meet the following requirements:  
•  
Extract all readable text from each document.  
•  
Ignore the document layout, including tables and paragraph positions.  
•  
Do not identify key-value pairs or structured business fields.  
•  
Minimize processing costs and avoid using a language model deployment.  
You plan to call Azure Content Understanding in Foundry Tools.  
Which built-in analyzer should you use?

- **A.** prebuilt-documentFieldSchema
- **B.** prebuilt-layout
- ✅ **C.** prebuilt-read
- **D.** prebuilt-documentSearch

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q55 · pages 57–58

<details><summary>Explanation</summary>

Correct Answer:
C. prebuilt-read
The prebuilt-read analyzer is designed to perform optical character recognition (OCR) and extract all
readable text from documents and images. It does not attempt to preserve document layout, detect tables,
identify key-value pairs, or extract structured business fields. Because it focuses only on text extraction and
does not require a language model deployment, it is the most cost-effective option for this scenario.
Incorrect Answers:
A. prebuilt-documentFieldSchema
This analyzer extracts structured business fields and returns them according to a predefined schema, which
is not required.
B. prebuilt-layout
The prebuilt-layout analyzer preserves document structure, including tables, paragraphs, and layout
information, which the requirements specifically state should be ignored.
D. prebuilt-documentSearch
This analyzer is intended for semantic document search scenarios rather than simple OCR-based text
extraction.

</details>


---

## Q56 · pick 2

You have a Microsoft Foundry project that contains a sales assistant agent. The agent retrieves product  
information from an Azure AI Search index and generates responses by using a large language model.  
After deploying a new version of the agent, users report the following issues:  
•  
The average response time has increased significantly when users ask complex questions.  
•  
Monthly model inference costs have increased even though the number of user requests has  
remained unchanged.  
You need to evaluate each issue.  
Which observability signals should you use for each issue?  
To answer, drag the appropriate observability signals to the correct issues. Each observability signal may be  
used once, more than once, or not at all.

🖼 [Source: AI-103 PDF · page 58](https://tstudy.vercel.app/content/ai-103/figure-190.png)

- **A.** Groundedness evaluation metrics
- ✅ **B.** Latency breakdown traces
- **C.** Risk and safety metrics
- ✅ **D.** Token usage analytics

**Answer:** B, D

**Nguồn:** AI-103 1.pdf · Q56 · pages 58–59

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Investigate response times → Latency breakdown traces; Investigate costs → Token usage analytics)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 58](https://tstudy.vercel.app/content/ai-103/figure-191.png)

Correct Answers:
Increased response time: Latency breakdown traces
Latency breakdown traces provide detailed timing information for every stage of an agent run, including
Azure AI Search retrieval, tool invocations, prompt construction, and large language model inference. Since
response times have increased for complex questions, latency traces help identify which component is
introducing the delay and where optimization is needed.
Increased inference costs: Token usage analytics
Token usage analytics show the number of input tokens, output tokens, and token consumption during each
request. Because user traffic has remained unchanged while inference costs have increased, token usage
analytics can determine whether the increase is caused by larger prompts, longer model responses, or
increased retrieval context.
Incorrect Answers:
Groundedness evaluation metrics
Groundedness metrics determine whether responses are supported by retrieved documents. They do not
diagnose latency or inference costs.
Risk and safety metrics
Risk and safety metrics monitor content safety issues and policy violations. They do not provide information
about performance or token consumption.

</details>


---

## Q57 · single choice

You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.  
Transcript segments often contain both English and Spanish.  
App1 sends each segment to Azure Translator in Foundry Tools to translate to another language.  
Sometimes, mixed-language segments result in incomplete or incorrect translations.  
You need to reduce translation errors. The solution must ensure that the entire transcript is translated  
successfully.  
What should you do before sending the segments to Translator?

- **A.** Use document translation to translate the entire transcript as a single document.
- ✅ **B.** Split the mixed-language segments into single-language segments and translate each segment separately.
- **C.** Enable automatic language detection for the translation request.
- **D.** Specify English as the source language in the translation request for all the segments.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q57 · pages 59–60

<details><summary>Explanation</summary>

Correct Answer:
B. Split the mixed-language segments into single-language segments and translate each segment
separately.
Azure Translator works best when each request contains text in a single source language. Mixed-language
input can reduce translation accuracy because the service expects a consistent source language for each
translation request. By splitting transcript segments into separate English and Spanish portions before
sending them to Translator, each segment can be translated accurately, ensuring that the entire transcript is
translated successfully.
Incorrect Answers:
A. Use document translation to translate the entire transcript as a single document.
Document Translation is intended
 for translating complete documents such as PDFs or Office files, not live
streaming transcript segments.
C. Enable automatic language detection for the translation request.
Automatic language detection identifies the dominant language in a request. It does not reliably handle
segments containing multiple languages.
D. Specify English as the source language in the translation request for all the segments.
Specifying English as the source language causes Spanish portions of the transcript to be translated
incorrectly or ignored.

</details>


---

## Q58 · single choice

You have a Microsoft Foundry project that contains an agent used by a customer service application.  
Following a recent deployment, users report that responses take significantly longer to generate. Monitoring  
shows that the number of requests per minute has remained constant.  
You need to determine whether the increased response time is caused by document retrieval, tool execution,  
or model inference.  
Which observability capability should you use?

- **A.** Evaluation metrics
- ✅ **B.** Latency
- **C.** Run success rate
- **D.** Token usage

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q58 · pages 60–60

<details><summary>Explanation</summary>

Correct Answer:
B. Latency
Latency observability provides a detailed breakdown of the time spent during each stage of an agent run,
including document retrieval, tool execution, and model inference. Since the request volume has remained
constant but response times have increased, latency analysis enables you to determine exactly which stage
is responsible for the slowdown and target the appropriate optimization.
Incorrect Answers:
A. Evaluation metrics
Evaluation metrics measure response quality, such as groundedness, fluency, and similarity. They do not
identify performance bottlenecks.
C. Run success rate
Run success rate indicates whether agent executions succeed or fail, but it does not show where time is
being spent during execution.
D. Token usage
Token usage measures the number of input and output tokens consumed. It helps analyze inference costs
but does not identify whether delays are caused by document retrieval, tool execution, or model inference.

</details>


---

## Q59 · pick 2

You have a Microsoft Foundry project that processes engineering drawings stored in Azure Blob  
Storage.  
Azure AI Content Safety must retrieve images by using blob URLs to evaluate user-submitted images.  
The solution must meet the following requirements:  
•  
Follow the principle of least privilege.  
•  
Avoid using storage account keys or shared access signatures (SAS).  
•  
Allow Content Safety to read images stored in Azure Blob Storage.

🖼 [Source: AI-103 PDF · page 61](https://tstudy.vercel.app/content/ai-103/figure-198.png)

- **A.** Storage account access keys
- **B.** Shared Access Signature (SAS)
- ✅ **C.** System-assigned managed identity
- **D.** User-assigned managed identity
- ✅ **E.** Storage Blob Data Reader
- **F.** Storage Blob Data Contributor
- **G.** Storage Queue Data Contributor
- **H.** Owner

**Answer:** C, E

**Nguồn:** AI-103 1.pdf · Q59 · pages 61–62

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Authentication → System-assigned managed identity; Azure RBAC role → Storage Blob Data Reader)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 61](https://tstudy.vercel.app/content/ai-103/figure-199.png)


Correct Answers
Authentication: System-assigned managed identity
A system-assigned managed identity enables Azure AI Content Safety to authenticate securely to Azure Blob
Storage without using storage account keys or SAS tokens. This satisfies the requirement to avoid shared
secrets while leveraging Microsoft Entra ID authentication.
Azure RBAC role: Storage Blob Data Reader
The Storage Blob Data Reader role grants read-only access to blob data. This follows the principle of least
privilege, allowing Content Safety to retrieve images for evaluation without permitting uploads, modifications,
or deletions.
Incorrect Answers:
Storage account access keys
These provide full access to the storage account and violate the requirement to avoid storage account keys.
Shared Access Signature (SAS)
Although SAS can provide limited access, the requirement explicitly states to avoid using SAS.
User-assigned managed identity
A user-assigned managed identity could work technically, but unless there's a requirement to share the
identity across multiple resources, a system-assigned managed identity is the simpler and recommended
choice.
Storage Blob Data Contributor
This role grants read, write, and delete permissions, exceeding the required read-only access.
Storage Queue Data Contributor
This role applies to Azure Storage Queues, not Blob Storage.
Owner
This grants full management permissions and violates the principle of least privilege.

</details>


---

## Q60 · single choice

You have a Microsoft Foundry project that contains an agent and an image generation model  
deployment.  
The agent creates lifestyle marketing images for clothing products.  
Users provide a photograph of a jacket and request new scenes in different environments.  
The solution must ensure that the generated images continue to depict the same jacket while allowing the  
background, lighting, and setting to change.  
What should you do?

- ✅ **A.** Include the original image as a reference image in the generation request.
- **B.** Reduce the max_tokens parameter.
- **C.** Enable groundedness detection.
- **D.** Configure Content Safety to annotate the generated images.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q60 · pages 62–63

<details><summary>Explanation</summary>

Correct Answer:
A. Include the original image as a reference image in the generation request.
Providing the original jacket photo as a reference image (image-to-image or reference-guided generation)
allows the image generation model to preserve the product's visual characteristics, such as its color, texture,
pattern, and design, while generating new scenes with different backgrounds, lighting, and environments.
This is the recommended approach for maintaining product identity across generated images.
Incorrect Answers:
B. Reduce the max_tokens parameter.
The max_tokens parameter applies to text generation models and controls the maximum length of the
generated text. It has no effect on image generation or visual consistency.
C. Enable groundedness detection.
Groundedness detection evaluates whether generated text is supported by provided source material. It does
not help preserve the appearance of an object across generated images.
D. Configure Content Safety to annotate the generated images.
Content Safety is used to detect and annotate potentially harmful or unsafe content. It does not influence
how faithfully the model preserves the jacket's appearance.

</details>


---

## Q61 · single choice

You have an Azure Speech in Foundry Tools resource that hosts a custom speech to text model  
deployed to a custom endpoint. An agent uses the endpoint to perform real-time speech recognition.  
You are approaching the expiration date of the custom speech to text model.  
What is the expected behavior when the model expires?

- **A.** Speech recognition requests will return a 4xx error until a new custom model is deployed.
- **B.** Speech recognition requests will continue to use the expired custom model until the model is removed manually.
- ✅ **C.** Speech recognition requests will fall back to the most recent base model for the same locale.
- **D.** The custom model will be deleted automatically when the model expires.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q61 · pages 63–64

<details><summary>Explanation</summary>

Correct Answer:
C. Speech recognition requests will fall back to the most recent base model for the same locale.
In Azure Speech, when a custom Speech-to-Text model expires, it is no longer used for inference. Requests
sent to the custom endpoint automatically fall back to the latest available base model for the same locale.
This ensures that speech recognition continues without interruption, although the accuracy improvements
provided by the custom model are no longer available.
Incorrect Answers:
A. Speech recognition requests will return a 4xx error until a new custom model is deployed.
This is incorrect. The endpoint does not stop functioning or return client errors simply because the custom
model expires. Instead, it falls back to the corresponding base model.
B. Speech recognition requests will continue to use the expired custom model until the model is removed
manually.
This is incorrect. Once the custom model expires, it is no longer used for inference.
D. The custom model will be deleted automatically when the model expires.
This is incorrect. Expiration prevents the model from being used, but it is not automatically deleted.

</details>


---

## Q62 · single choice

You have a technical support agent that uses the Microsoft Foundry Agent Service.  
Customers often upload log files while troubleshooting issues. A support case can remain open for several  
weeks, and different support engineers may continue the conversation during that time.  
The solution must meet the following requirements:  
•  
Maintain the complete conversation history across multiple sessions.  
•  
Preserve uploaded files, tool calls, tool outputs, and agent responses.  
•  
Minimize application code.  
What should you do?

- ✅ **A.** Store the thread ID after the initial conversation and provide the same thread ID when continuing the support case.
- **B.** Store the generated responses in Azure AI Search and prepend them to every new prompt.
- **C.** Enable persistent agent memory and allow the agent to reconstruct previous conversations automatically.
- **D.** Store conversation summaries in a database and include the summaries in each new request.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q62 · pages 64–65

<details><summary>Explanation</summary>


Correct Answer:
A. Store the thread ID after the initial conversation and provide the same thread ID when continuing the
support case.
In Microsoft Foundry Agent Service, a thread automatically stores the entire conversation state, including
user and assistant messages, uploaded files, tool calls, tool outputs and conversation context.
By persisting the thread ID and reusing it for subsequent requests, the agent can resume the conversation
exactly where it left off, even if different support engineers continue the case weeks later. This approach also
minimizes application code, since the Agent Service manages the conversation history automatically.
Incorrect Answers:
B. Store the generated responses in Azure AI Search and prepend them to every new prompt.
This requires manually reconstructing the conversation and does not preserve uploaded files, tool calls, or
tool outputs.
C. Enable persistent agent memory and allow the agent to reconstruct previous conversations
automatically.
Persistent agent memory is intended for storing long-term user preferences or facts, not complete
conversation history with files, tool invocations, and execution state.
D. Store conversation summaries in a database and include the summaries in each new request.
Conversation summaries lose important details such as uploaded files, tool outputs, and the complete
execution history. They also require additional application logic.

</details>


---

## Q63 · pick 2

You have a Microsoft Foundry project that contains a customer support agent built by using the  
Foundry Agent Service.  
The agent uploads user-provided screenshots to Azure Storage through a ticketing tool and receives a blob  
URL for additional reasoning.  
You need to use image moderation during agent runs and prevent harmful content from being returned  
during runs.  
Azure AI Content Safety must access the images by using the blob URL. The solution must follow the  
principle of least privilege.

🖼 [Source: AI-103 PDF · page 65](https://tstudy.vercel.app/content/ai-103/figure-208.png)

- **A.** Select Tool call and set Action to Block
- **B.** Select User input and Output and set Action to Annotate
- **C.** Select User input and Tool response and set Action to Annotate
- ✅ **D.** Select User input, Output, Tool response, and Tool call and set Action to Block
- **E.** Storage account access keys
- **F.** User-assigned identity with Storage Queue Data Contributor
- ✅ **G.** System-assigned managed identity with Storage Blob Data Reader
- **H.** System-assigned managed identity with Storage Blob Data Contributor

**Answer:** D, G

**Nguồn:** AI-103 1.pdf · Q63 · pages 65–67

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Guardrails → Select User input, Output, Tool response, and Tool call and set Action to Block; Storage access → System-assigned managed identity with Storage Blob Data Reader)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 66](https://tstudy.vercel.app/content/ai-103/figure-211.png)

$4a

</details>


---

## Q64 · single choice

You have a Microsoft Foundry project that contains an agent. The agent generates summaries from  
retrieved policy documents.  
You need to improve response completeness. The solution must be implemented in the logic of the  
application code before responses are returned.  
What should you do?

- ✅ **A.** Add a retry evaluation before the responses are returned.
- **B.** Decrease the value of the max_tokens parameter.
- **C.** Switch to Retrieval Augmented Generation (RAG).
- **D.** Replace the model with a smaller deployment.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q64 · pages 67–67

<details><summary>Explanation</summary>

$4b

</details>


---

## Q65 · single choice

You have an app named App1 that uses a Microsoft Foundry chat model deployment.  
App1 accepts free-form text entered directly by users.  
Some users intentionally submit prompts that attempt to bypass system instructions, reveal hidden prompts,  
or manipulate tool execution.  
You need to detect these direct prompt injection attempts before the model processes the user's input.  
What should you use?

- **A.** Image moderation
- **B.** Prompt Shields for documents
- **C.** Protected material text
- ✅ **D.** Prompt Shields for user prompts

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q65 · pages 68–68

<details><summary>Explanation</summary>

$4c

</details>


---

## Q66 · pick 2

You have a Microsoft Foundry project that contains an agent that answers employee questions by using  
Retrieval-Augmented Generation (RAG).  
After deployment, users report the following issues:  
•  
The retrieved documents are relevant, but the generated answers do not address the user's question.  
•  
Responses generated by the agent are significantly longer than expected, increasing inference costs.  
You need to determine which diagnostic capability to use for each issue.  
Which diagnostic capability should you use?  
To answer, drag the appropriate diagnostic capabilities to the correct issues. Each diagnostic capability may  
be used once, more than once, or not at all.

🖼 [Source: AI-103 PDF · page 69](https://tstudy.vercel.app/content/ai-103/figure-218.png)

- ✅ **A.** Relevance evaluation
- ✅ **B.** Completion token analytics
- **C.** Groundedness
- **D.** Prompt traces
- **E.** Latency timeline

**Answer:** A, B

**Nguồn:** AI-103 1.pdf · Q66 · pages 68–69

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Investigate irrelevant answers → Relevance evaluation; Investigate excessively long responses → Completion token analytics)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 69](https://tstudy.vercel.app/content/ai-103/figure-219.png)

$4d

</details>


---

## Q67 · single choice

You have a Microsoft Foundry project named Project1 that contains the following: An OpenAPI tool that  
calls an external API  
A project connection named Connection1 that stores the API key of the external API  
When an agent calls the OpenAPI tool, the API returns a 401 unauthorized error, and traces show that the API  
key header is NOT being sent.  
You need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on all  
requests.  
What should you do?

- **A.** Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller.
- **B.** Add the API key header manually to the OpenAPI specification.
- **C.** Configure the tool to use the default connection of Project1.
- ✅ **D.** Connect the tool to Connection1.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q67 · pages 70–70

<details><summary>Explanation</summary>

$4e

</details>


---

## Q68 · single choice

You have a Microsoft Foundry project that contains a customer support agent.  
After deploying a new prompt template, administrators observe that Azure OpenAI costs have increased  
significantly, even though the number of user requests has remained constant.  
You need to determine whether the prompt or generated responses are consuming more tokens than  
expected.  
Which observability signal should you review?

- **A.** Groundedness evaluation metrics
- **B.** Retrieval evaluation metrics
- ✅ **C.** Token usage analytics
- **D.** Agent execution timeline

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q68 · pages 71–71

<details><summary>Explanation</summary>

$4f

</details>


---

## Q69 · pick 2

You have a Microsoft Foundry project that contains a customer support agent. The agent uses Azure AI  
Search as a knowledge source to answer questions by using Retrieval-Augmented Generation (RAG).  
After a recent deployment, users report the following issues:  
•  
The agent occasionally generates responses that are not supported by the retrieved documents.  
•  
Support engineers want the agent to return a fallback response instead of generating an answer  
when insufficient grounding evidence is available.  
You need to identify the evaluation metric and the recommended configuration to address the issues.

🖼 [Source: AI-103 PDF · page 72](https://tstudy.vercel.app/content/ai-103/figure-226.png)

- **A.** Coherence
- **B.** Fluency
- ✅ **C.** Groundedness
- **D.** Similarity
- **E.** Increase temperature
- ✅ **F.** Reject responses below the groundedness threshold
- **G.** Increase maximum tokens
- **H.** Fine-tune with the documents

**Answer:** C, F

**Nguồn:** AI-103 1.pdf · Q69 · pages 72–73

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Evaluation → Groundedness; Configuration → Reject responses below the groundedness threshold)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 72](https://tstudy.vercel.app/content/ai-103/figure-227.png)


Correct Answers
Evaluation metric: Groundedness
The issue states that the agent occasionally generates responses that are not supported by the retrieved
documents.
This is exactly what the Groundedness evaluation metric measures. It determines whether the generated
response is supported by the retrieved knowledge source rather than containing hallucinations or
unsupported claims.
Recommended configuration: Reject responses that do not meet the groundedness threshold.
The second requirement is Return a fallback response instead of generating an answer when insufficient
grounding evidence is available.
The appropriate configuration is to reject responses that fail the groundedness threshold. When a response
is not sufficiently grounded, the application can return a fallback message such as "I couldn't find enough
information to answer that question." instead of returning a potentially hallucinated response.
Incorrect Answers
Increase the model temperature.
A higher temperature makes responses more creative and less deterministic, increasing the likelihood of
unsupported answers.
Increase the maximum completion tokens.
Increasing completion tokens only allows longer responses. It does not improve grounding or reduce
hallucinations.
Fine-tune the model by using the retrieved documents.
RAG is designed to ground responses using retrieved documents at inference time. Fine-tuning is
unnecessary for this requirement and does not ensure that every response is grounded in the retrieved
content.

</details>


---

## Q70 · pick 2

You have a Microsoft Foundry project that contains an agent.  
Your organization needs to detect suspicious sign-in activity, investigate security incidents, and correlate  
alerts generated from Microsoft Foundry, Microsoft Defender, and Microsoft Entra ID.  
The solution must provide a centralized security operations platform.  
Which two components should you use?

- ✅ **A.** Microsoft Sentinel
- ✅ **B.** Log Analytics workspace
- **C.** Azure Monitor Agent
- **D.** Application Insights
- **E.** OpenTelemetry

**Answer:** A, B

**Nguồn:** AI-103 1.pdf · Q70 · pages 73–74

<details><summary>Explanation</summary>


Correct Answers
A. Microsoft Sentinel
Microsoft Sentinel is Microsoft's cloud-native SIEM (Security Information and Event Management) and
SOAR (Security Orchestration, Automation, and Response) platform.
It enables security teams to detect suspicious sign-in activity, investigate security incidents, correlate alerts
across multiple services and automate incident response
Since the requirement is for a centralized security operations platform, Microsoft Sentinel is the correct
choice.
B. Log Analytics workspace
A Log Analytics workspace serves as the data repository for Sentinel.
It collects logs from Microsoft Foundry, Microsoft Defender, Microsoft Entra ID, Azure resources and other
connected data sources
Sentinel uses the Log Analytics workspace to query, correlate, and investigate security events.
Incorrect Answers
C. Azure Monitor Agent
Azure Monitor Agent collects telemetry from Azure VMs and servers, but it is not the centralized security
platform or incident correlation engine required in this scenario.
D. Application Insights
Application Insights monitors application performance, availability, requests, dependencies, and exceptions. It
is intended for application observability, not security operations.
E. OpenTelemetry
OpenTelemetry provides a vendor-neutral framework for collecting traces, metrics, and logs for application
observability. It does not provide SIEM capabilities or security incident correlation.

</details>


---

## Q71 · single choice

You have a Microsoft Foundry project that contains a model deployment.  
You have an application that calls the deployment by using the Azure OpenAI v1 API and  
DefaultAzureCredential. The developers at your company receive HTTP 403 errors when they send inference  
requests, even after running az login.  
You need to ensure that the developers can perform model inference. The solution must follow the principle  
of least privilege.  
Which role-based access control (RBAC) role should you assign to the developers?

- **A.** Cognitive Services User
- ✅ **B.** Cognitive Services OpenAI User
- **C.** Contributor
- **D.** Cognitive Services Data Reader

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q71 · pages 74–75

<details><summary>Explanation</summary>

Correct Answer:
B. Cognitive Services OpenAI User
The application authenticates by using DefaultAzureCredential, which relies on Microsoft Entra ID for
authentication. Although the developers have successfully authenticated by running az login, they receive
HTTP 403 Forbidden errors because they do not have sufficient permissions to perform inference on the
Azure OpenAI model deployment.
The Cognitive Services OpenAI User role grants the minimum permissions required to invoke Azure OpenAI
models. It allows developers to perform inference requests without granting unnecessary management
permissions, thereby following the principle of least privilege.
Incorrect Answers:
A. Cognitive Services User
This role provides access to Azure AI services in general but does not specifically grant the permissions
required to perform inference against Azure OpenAI model deployments.
C. Contributor
The Contributor role grants broad management permissions, including creating, modifying, and deleting
Azure resources. This exceeds the permissions required for developers who only need to perform model
inference.
D. Cognitive Services Data Reader
This role provides read-only access to resource data and configuration. It does not allow users to invoke
Azure OpenAI model deployments.

</details>


---

## Q72 · single choice

You have an app named App1 that uses a Microsoft Foundry multimodal model deployment.  
App1 runs optical character recognition (OCR) on uploaded images and appends the OCR output to the  
prompt as additional context.  
Some uploaded images contain embedded text.  
You need to prevent potentially malicious instructions from being processed by the model.  
What should you use?

- **A.** image moderation
- ✅ **B.** prompt shields for documents
- **C.** protected material text
- **D.** prompt shields for user prompts

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q72 · pages 75–76

<details><summary>Explanation</summary>

Correct Answer:
B. Prompt Shields for documents
The application performs OCR on uploaded images and appends the extracted text to the prompt before
sending it to the multimodal model. If an attacker embeds malicious instructions within the image, those
instructions become part of the prompt after OCR. This is known as an indirect prompt injection attack, also
referred to as a document attack.
Prompt Shields for documents are specifically designed to detect and mitigate indirect prompt injection
attacks originating from documents, images, and other external content. They analyze the extracted content
before it reaches the model and help prevent malicious embedded instructions from influencing the model's
behavior.
Incorrect Answers:
A. Image moderation
Image moderation detects harmful visual content such as violence, sexual content, or graphic imagery. It
does not detect malicious instructions embedded as text within images.
C. Protected material text
Protected material text identifies copyrighted or protected text. It does not protect against prompt injection
attacks.
D. Prompt Shields for user prompts
Prompt Shields for user prompts protect against direct prompt injection, where malicious instructions are
typed directly into the user's prompt. They do not protect against instructions extracted from uploaded
documents or images.

</details>


---

## Q73 · pick 2

You need to recommend a solution for a legal research agent by using the Microsoft Foundry Agent  
Service.  
The solution must meet the following requirements:  
•  
Retain attorney preferences across multiple conversations.  
•  
Enable the agent to retrieve reference material from documents uploaded during a conversation.  
Which Foundry capability should you recommend for each requirement?

🖼 [Source: AI-103 PDF · page 76](https://tstudy.vercel.app/content/ai-103/figure-241.png)

- ✅ **A.** Persistent agent memory
- **B.** Conversation history
- **C.** Orchestration-managed session context
- **D.** Prompt caching
- ✅ **E.** File search
- **F.** Code interpreter
- **G.** Computer use
- **H.** Translator

**Answer:** A, E

**Nguồn:** AI-103 1.pdf · Q73 · pages 76–77

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Retain attorney preferences → Persistent agent memory; Use uploaded legal documents → File search)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 76](https://tstudy.vercel.app/content/ai-103/figure-242.png)


Correct Answers
The correct answers are Agent memory that uses persistent storage and File search tool.
To retain attorney preferences across multiple conversations, the agent must use persistent agent memory.
Unlike conversation history or session context, persistent memory stores user preferences across sessions,
allowing the agent to remember long-term information such as preferred legal terminology, citation style, or
document formatting preferences.
To retrieve reference material from documents uploaded during a conversation, the File search tool is the
appropriate capability. It indexes uploaded files and enables the agent to search their contents during the
conversation, making it ideal for legal research scenarios where users upload contracts, case files, or other
reference documents.
Incorrect Answers:
Conversation history is incorrect because it maintains the messages within a conversation or thread but is
not intended for storing long-term user preferences across multiple conversations.
Orchestration-managed session context is incorrect because it exists only for the duration of the current
session and is discarded afterward.
Prompt cache is incorrect because it is an optimization feature that reduces latency and cost by caching
repeated prompts. It does not store user preferences.
Code interpreter tool is incorrect because it is designed to execute Python code and analyze data rather than
search uploaded documents.
Computer use tool is incorrect because it automates interactions with graphical user interfaces and is
unrelated to document retrieval.
Azure AI Translator is incorrect because it translates text and documents but does not retrieve information
from uploaded files.

</details>


---

## Q74 · single choice

You have a Microsoft Foundry project named Project1.  
Project1 contains an application that processes scanned engineering drawings.  
You need to configure Azure Document Intelligence in Foundry Tools to extract the document content while  
preserving tables, headings, paragraphs, and reading order. The extracted content will be passed directly to a  
large language model for summarization.  
The solution must minimize custom post-processing.  
What should you do?

- **A.** Configure output=figures when analyzing the document.
- ✅ **B.** Set output_content_format=ContentFormat.MARKDOWN.
- **C.** Configure string_index_type=UnicodeCodePoint.
- **D.** Increase the OCR resolution before processing.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q74 · pages 77–78

<details><summary>Explanation</summary>


Correct Answer:
B. Set output_content_format=ContentFormat.MARKDOWN.
The application needs to extract content from scanned engineering drawings while preserving tables,
headings, paragraphs, and reading order. The extracted content will be passed directly to a large language
model, so the output should be structured and require minimal post-processing.
Setting output_content_format=ContentFormat.MARKDOWN instructs Azure Document Intelligence to return
the extracted content in Markdown format. Markdown preserves the logical structure of the document,
including headings, tables, paragraphs, and reading order, making it ideal for Retrieval-Augmented
Generation (RAG) and LLM summarization scenarios.
Incorrect Answers:
A. Configure output=figures when analyzing the document.
This option extracts figures and images from the document. It does not preserve the overall document
structure or produce structured text suitable for an LLM.
C. Configure string_index_type=UnicodeCodePoint.
This setting controls how text offsets are represented in the response. It does not affect the extracted
content or preserve tables, headings, or reading order.
D. Increase the OCR resolution before processing.
Increasing OCR resolution may improve text recognition quality for low-quality scans, but it does not produce
structured output or reduce the need for custom post-processing.

</details>


---

## Q75 · single choice

You have a Microsoft Foundry project that contains an Azure AI Search resource used to ground  
multiple agents.  
Developers at your company use Microsoft Entra ID authentication to query the search index from a custom  
application. They receive HTTP 403 (Forbidden) errors when executing search queries.  
You need to grant the minimum permissions required for developers to query the search index.  
Which role-based access control (RBAC) role should you assign?

- **A.** Search Service Contributor
- ✅ **B.** Search Index Data Reader
- **C.** Contributor
- **D.** Reader

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q75 · pages 78–79

<details><summary>Explanation</summary>

Correct Answer:
B. Search Index Data Reader
The developers are using Microsoft Entra ID authentication to query an Azure AI Search index. An HTTP
403 (Forbidden) error indicates that authentication has succeeded, but the developers do not have sufficient
permissions to perform search queries.
The Search Index Data Reader role grants the minimum permissions required to query documents in an
Azure AI Search index. It follows the principle of least privilege by allowing users to execute search
operations without granting permissions to modify the search service or indexes.
Incorrect Answers:
A. Search Service Contributor
This role allows users to create, modify, and manage Azure AI Search resources and indexes. It grants far
more permissions than are required for simply querying the index.
C. Contributor
The Contributor role provides broad Azure resource management permissions, including creating, updating,
and deleting resources. This exceeds the permissions needed to perform search queries.
D. Reader
The Reader role allows users to view Azure resource metadata but does not grant permission to query data
stored in the search index.

</details>


---

## Q76 · pick 3

You have a Microsoft Foundry project that contains an agent used by an insurance company.  
You need to enhance the agent by using built-in tools. The solution must meet the following requirements:  
•  
Allow the agent to analyze claim spreadsheets uploaded during conversations and generate charts.  
•  
Allow the agent to interact with a legacy claims management website that does not expose APIs.  
•  
Allow the agent to answer questions by using policy documents uploaded directly to the current  
conversation.  
What should you use for each requirement?  
To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than  
once, or not at all.

🖼 [Source: AI-103 PDF · page 79](https://tstudy.vercel.app/content/ai-103/figure-249.png)

- ✅ **A.** Code interpreter
- ✅ **B.** Computer use
- ✅ **C.** File search
- **D.** Grounding with Bing Search
- **E.** Microsoft Fabric

**Answer:** A, B, C

**Nguồn:** AI-103 1.pdf · Q76 · pages 79–80

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Analyze spreadsheets and generate charts → Code interpreter; Interact with a legacy website → Computer use; Search policy documents → File search)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 79](https://tstudy.vercel.app/content/ai-103/figure-250.png)

Correct Answers:
Analyze uploaded spreadsheets and generate charts: Code Interpreter
The Code Interpreter tool is designed to analyze uploaded files such as spreadsheets. It can execute Python
code to process claim data, perform calculations, and generate charts or other visualizations during the
conversation.
Interact with the legacy claims management website: Computer Use
The Computer Use tool enables an agent to interact with applications and websites that do not expose APIs.
It can navigate web pages, click buttons, enter text, and perform other user interface actions, making it ideal
for legacy web applications.
Retrieve information from uploaded policy documents: File Search
The File Search tool indexes documents uploaded during the current conversation and allows the agent to
retrieve relevant information from those files when answering user questions.
Incorrect Answers:
Grounding with Bing Search
This tool retrieves information from public websites on the internet. It cannot search documents uploaded
during a conversation or interact with internal legacy applications.
Microsoft Fabric
Microsoft Fabric is an analytics platform for enterprise data workloads. It is not intended for analyzing
uploaded spreadsheets during a chat, interacting with websites, or retrieving information from conversation-
uploaded documents.

</details>


---

## Q77 · single choice

You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol  
(MCP) tool that queries a knowledge base stored in Azure AI Search.  
Some agent runs return answers from the base model without invoking the knowledge base, which results in  
responses without grounded citations.  
You are provided with the following code snippet that runs the agent.  
run = project_client.agents.runs.create_and_process(  
thread_id=thread.id,  
agent_id=agent.id  
)  
You need to add the correct tool _choice parameter to the code to deterministically force the agent to invoke  
the MCP tool on each run.  
What should you add?

- **A.** tool_choice= “required”
- **B.** tool_choice= “auto”
- **C.** tool_choice= “type”:“knowledge_base”
- ✅ **D.** tool_choice = “type”:“mcp”

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q77 · pages 80–81

<details><summary>Explanation</summary>

Correct Answer:
D. tool_choice={"type":"mcp"}
The requirement is to deterministically force the agent to invoke the MCP tool on every run. Setting
tool_choice={"type":"mcp"} explicitly instructs the agent to use the Model Context Protocol (MCP) tool
instead of allowing the model to decide whether to call a tool. This guarantees that the agent queries the
Azure AI Search knowledge base through the MCP tool before generating a response, ensuring grounded
answers with citations.
Incorrect Answers:
A. tool_choice="required"
This forces the agent to call a tool, but it does not guarantee that the MCP tool will be selected if multiple
tools are available.
B. tool_choice="auto"
This is the default behavior. The model decides whether to call a tool, which is exactly the problem described
in the scenario because it sometimes answers directly from the base model.
C. tool_choice={"type":"knowledge_base"}
There is no supported knowledge_base tool type for the tool_choice parameter. Since the knowledge base is
exposed through an MCP server, the correct tool type is mcp.

</details>


---

## Q78 · single choice

A Microsoft Foundry agent invokes three custom tools.  
Administrators report that users occasionally experience response delays.  
They need to determine which tool contributes the most to the total response time.  
Which diagnostic capability should they review?

- **A.** Token usage analytics
- ✅ **B.** Tool execution traces
- **C.** Groundedness evaluation
- **D.** Conversation history

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q78 · pages 81–82

<details><summary>Explanation</summary>

Correct Answer:
B. Tool execution traces
The administrators need to determine which of the three custom tools contributes the most to the overall
response time. Tool execution traces provide detailed diagnostics for each tool invocation, including when a
tool starts, how long it executes, whether it succeeds or fails, and how much time each tool adds to the
overall agent run. This makes it possible to identify the slowest tool and pinpoint the source of response
delays.
Incorrect Answers:
A. Tok
en usage analytics
Token usage analytics measures the number of input and output tokens consumed by the language model. It
helps analyze inference costs but does not identify which tool is causing latency.
C. Groundedness evaluation
Groundedness evaluation measures whether the generated response is supported by retrieved data. It
evaluates response quality rather than tool performance or execution time.
D. Conversation history
Conversation history records the messages exchanged during a conversation. It does not provide timing or
performance information for individual tool executions.

</details>


---

## Q79 · pick 2

You need to recommend a solution for a customer service agent by using the Microsoft Foundry Agent  
Service.  
The agent must meet the following requirements:  
•  
Execute Python code to analyze spreadsheets uploaded by users during conversations.  
•  
Access current weather conditions from public websites without requiring users to upload  
documents.  
Which Foundry capability should you recommend for each requirement?

🖼 [Source: AI-103 PDF · page 82](https://tstudy.vercel.app/content/ai-103/figure-264.png)

- ✅ **A.** Code interpreter
- **B.** File search
- **C.** Computer use
- **D.** Azure AI Search
- ✅ **E.** Grounding with Bing Search
- **F.** File search
- **G.** Computer use
- **H.** Microsoft Fabric

**Answer:** A, E

**Nguồn:** AI-103 1.pdf · Q79 · pages 82–83

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Analyze spreadsheets → Code interpreter; Get current weather → Grounding with Bing Search)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 82](https://tstudy.vercel.app/content/ai-103/figure-265.png)

$5a

</details>


---

## Q80 · single choice

You have a Microsoft Foundry project that contains an agent used by an internal HR application.  
Following a prompt update, administrators notice that users are reporting more incomplete and unsupported  
answers. The application continues to process requests successfully, and response times remain unchanged.  
You need to determine whether the quality of the generated responses has degraded.  
Which observability capability should you use?

- **A.** Token usage
- **B.** Latency
- ✅ **C.** Evaluation metrics
- **D.** Run success rate

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q80 · pages 83–84

<details><summary>Explanation</summary>

$5b

</details>


---

## Q81 · single choice

You have a Microsoft Foundry project that serves a high-volume chat app. Most requests are simple  
FAQs, but some require advanced reasoning.  
You need to reduce costs and latency for common queries, without degrading the quality of the responses to  
complex questions.  
What should you do?

- **A.** Route all the requests to a smaller model.
- ✅ **B.** Use a model cascade that routes the requests to different models.
- **C.** Increase the value of the max_tokens parameter for all the requests.
- **D.** Route all the requests to the most capable model.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q81 · pages 84–85

<details><summary>Explanation</summary>

$5c

</details>


---

## Q82 · single choice

A financial reporting application generates JSON that is consumed by downstream automation.  
Occasionally, responses contain unexpected fields that cause processing failures.  
Which approach should you recommend?

- **A.** Lower the model temperature.
- ✅ **B.** Use structured outputs with a JSON schema.
- **C.** Increase the maximum completion tokens.
- **D.** Fine-tune the model.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q82 · pages 85–85

<details><summary>Explanation</summary>

$5d

</details>


---

## Q83 · pick 2

You need to recommend a solution for a procurement agent by using the Microsoft Foundry Agent  
Service.  
The solution must meet the following requirements:  
•  
Answer questions by using supplier contracts uploaded by users during conversations.  
•  
Generate charts that summarize purchasing trends from uploaded Excel workbooks.  
Which Foundry capability should you recommend for each requirement?

🖼 [Source: AI-103 PDF · page 86](https://tstudy.vercel.app/content/ai-103/figure-274.png)

- ✅ **A.** File search
- **B.** Code interpreter
- **C.** Grounding with Bing Search
- **D.** Computer use
- ✅ **E.** Code interpreter
- **F.** File search
- **G.** Azure AI Search
- **H.** Microsoft Fabric

**Answer:** A, E

**Nguồn:** AI-103 1.pdf · Q83 · pages 86–87

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Analyze contracts → File search; Generate charts from Excel → Code interpreter)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 86](https://tstudy.vercel.app/content/ai-103/figure-275.png)

$5e

</details>


---

## Q84 · single choice

You have a Microsoft Foundry project that contains an agent.  
You need to process mixed-format documents that contain scanned text, tables, and multicolumn layouts.  
The extracted content must preserve the document structure and be converted into the Markdown format for  
downstream reasoning.  
What should you configure first?

- **A.** an Azure Language in Foundry Tools text analysis model deployment
- **B.** a generative chat completion request
- **C.** an Azure OpenAI Responses API call that uses a multimodal model
- ✅ **D.** an Azure Content Understanding in Foundry Tools analyzer

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q84 · pages 87–88

<details><summary>Explanation</summary>

$5f

</details>


---

## Q85 · single choice

You have a Microsoft Foundry project.  
You plan to build a customer support solution that contains an agent. The solution must meet the following  
requirements:  
Provide accurate, context-aware responses grounded in internal product documentation stored in Azure AI  
Search. Require deep, multi-step reasoning across long contexts.  
Generate detailed natural language responses.  
Which type of model should you use to power the agent?

- **A.** a multimodal model
- **B.** a small language model (SLM)
- **C.** a key phrase extraction model
- ✅ **D.** a large language model (LLM)

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q85 · pages 88–89

<details><summary>Explanation</summary>

Correct Answer:
D. A large language model (LLM)
The customer support agent must provide accurate, context-aware responses grounded in internal product
documentation stored in Azure AI Search, perform deep, multi-step reasoning across long contexts, and
generate detailed natural language responses.
A Large Language Model (LLM) is specifically designed for these requirements. LLMs can process large
context windows, perform sophisticated reasoning, integrate Retrieval-Augmented Generation (RAG) with
Azure AI Search, and generate high-quality, detailed responses suitable for customer support scenarios.
Incorrect Answers:
A. A multimodal model
Multimodal models are designed to process multiple input types such as text, images, and audio. The
scenario only involves text-based product documentation and does not require multimodal capabilities.
B. A small language model (SLM)
Small Language Models are optimized for lower cost and latency but have more limited reasoning capabilities
and smaller context windows. They are not the best choice for deep, multi-step reasoning over long
contexts.
C. A key phrase extraction model
A key phrase extraction model identifies important phrases within text. It does not perform reasoning,
retrieval, or generate natural language responses.

</details>


---

## Q86 · pick 3

You have a Microsoft Foundry project that contains a legal research agent.  
The solution must meet the following requirements:  
•  
Research recently published court decisions available on public websites.  
•  
Search contracts that attorneys upload during a conversation.  
•  
Log in to a third-party compliance portal and download supporting evidence for the current case.  
What should you use for each requirement?  
To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than  
once, or not at all.

🖼 [Source: AI-103 PDF · page 89](https://tstudy.vercel.app/content/ai-103/figure-290.png)

- **A.** Code interpreter
- ✅ **B.** Computer use
- ✅ **C.** File search
- ✅ **D.** Grounding with Bing Search
- **E.** Microsoft Fabric

**Answer:** D, C, B

**Nguồn:** AI-103 1.pdf · Q86 · pages 89–90

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Find recent court decisions → Grounding with Bing Search; Search uploaded contracts → File search; Download from a portal → Computer use)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 89](https://tstudy.vercel.app/content/ai-103/figure-291.png)

Correct Answers:
Research recent court decisions: Grounding with Bing Search
The Grounding with Bing Search tool enables the agent to retrieve up-to-date information from public
websites. Since recently published court decisions are available on public websites, this is the appropriate
tool for accessing current legal information.
Search uploaded contracts: File Search
The File Search tool indexes documents uploaded during the current conversation and allows the agent to
retrieve relevant information from those contracts when answering questions.
Download evidence from the compliance portal: Computer Use
The Computer Use tool allows an agent to interact with websites through their graphical user interfaces. It
can log in to third-party portals, navigate pages, click buttons, and download documents, making it the
correct choice for interacting with a compliance portal that requires user interface automation.
Incorrect Answers:
Code Interpreter
Code Interpreter is designed for executing Python code to analyze data and files. It is not intended for
searching public websites, retrieving uploaded documents, or automating interactions with web portals.
Microsoft Fabric
Microsoft Fabric is an enterprise analytics platform and is not used for web search, document retrieval during
conversations, or browser 

</details>


---

## Q87 · single choice

You have a Microsoft Foundry project that contains an agent.  
The knowledge source for the agent is a set of scanned PDF troubleshooting guides stored in Azure Blob  
Storage. The guide pages contain two-column layouts and tables.  
You use Azure Content Understanding in Foundry Tools to process the PDFs.  
You plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) and store  
extracted fields for downstream automation.  
Stakeholders must be able to verify where each extracted field value came from in the original PDF and route  
low-reliability extractions for manual review.  
You need to ensure that the Content Understanding document analyzer output includes a per-field confidence  
score and source grounding to locations within the source document.  
What should you do?

- **A.** Set enableSegment to true.
- **B.** Provide labeled samples.
- ✅ **C.** Enable estimateFieldSourceAndConfidence.
- **D.** Configure the analyzer to use generative extraction for all fields.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q87 · pages 90–91

<details><summary>Explanation</summary>

(Site nguồn không có giải thích cho câu này.)

</details>


---

## Q88 · single choice

A Microsoft Foundry agent answers questions from an Azure AI Search index.  
Administrators observe the following:  
•  
Average prompt size has doubled.  
•  
Azure OpenAI costs have increased significantly.  
•  
Response quality remains unchanged.  
Which action should you recommend first?

- **A.** Replace the model with GPT-4.1.
- ✅ **B.** Retrieve fewer document chunks before constructing the prompt.
- **C.** Increase the chunk overlap during indexing.
- **D.** Increase the model context window.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q88 · pages 91–92

<details><summary>Explanation</summary>

Correct Answer:
B. Retrieve fewer document chunks before constructing the prompt.
The scenario states that average prompt size has doubled, azure OpenAI cos
ts have increased significantly
and response quality remains unchanged.
This indicates that the application is sending more retrieved content to the model than necessary. Since
response quality has not improved, the additional document chunks are increasing token consumption and
inference costs without providing any benefit.
Reducing the number of retrieved document chunks before constructing the prompt decreases the input
token count, lowering Azure OpenAI costs while maintaining the same response quality.
Incorrect Answers:
A. Replace the model with GPT-4.1.
Changing the model does not address the root cause, which is the increased prompt size. Costs may even
increase depending on the selected model.
C. Increase the chunk overlap during indexing.
Increasing chunk overlap creates more redundant content in the search index. This can further increase
prompt size and token usage, making the problem worse.
D. Increase the model context window.
A larger context window allows the model to accept longer prompts but does not reduce the number of input
tokens or lower inference costs.

</details>


---

## Q89 · pick 2

You have a Microsoft Foundry project that contains an agent deployed to multiple environments.  
The organization has adopted a passwordless authentication strategy.  
You need to configure the GitHub Actions workflow to meet the following requirements:  
•  
Eliminate long-lived credentials.  
•  
Authenticate securely to Azure resources.  
How should you configure the workflow?

🖼 [Source: AI-103 PDF · page 92](https://tstudy.vercel.app/content/ai-103/figure-298.png)

- ✅ **A.** Azure Login with OpenID Connect (OIDC)
- **B.** Personal access token
- **C.** Storage account key
- **D.** Publish profile
- **E.** Store credentials in GitHub secrets
- ✅ **F.** Use federated identity credentials
- **G.** Rotate personal access tokens
- **H.** Use a shared administrator account

**Answer:** A, F

**Nguồn:** AI-103 1.pdf · Q89 · pages 92–93

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Authentication → Azure Login with OpenID Connect (OIDC); Credential management → Use federated identity credentials)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 92](https://tstudy.vercel.app/content/ai-103/figure-299.png)


Correct Answers:
Authentication method: Azure Login action that uses OpenID Connect (OIDC)
The organization has adopted a passwordless authentication strategy and wants to eliminate long-lived
credentials. The Azure Login GitHub Action supports OpenID Connect (OIDC), allowing GitHub Actions to
obtain short-lived Microsoft Entra tokens without storing secrets such as client secrets or passwords.
Credential management: Configure workload identity federation
Workload identity federation establishes trust between GitHub Actions and Microsoft Entra ID. It enables
GitHub workflows to exchange GitHub-issued OIDC tokens for Azure access tokens, eliminating the need for
long-lived credentials while providing secure authentication.
Incorrect Answers:
Personal access token (PAT)
PATs are long-lived credentials and do not support a passwordless authentication strategy.
Storage account access key
Storage account keys are long-lived secrets and violate the requirement to eliminate long-lived credentials.
Publish Profile
A publish profile contains long-lived deployment credentials and is not recommended for secure GitHub
Actions authentication.
Store credentials as GitHub repository secrets
Although repository secrets protect stored credentials, they are still long-lived secrets and do not satisfy the
passwordless requirement.
Rotate PAT every 30 days
Regular rotation improves security but still relies on long-lived credentials instead of passwordless
authentication.
Use a shared administrator account
This violates security best practices and the principle of least privilege.

</details>


---

## Q90 · single choice

You have an application that processes scanned PDF invoices. The invoices have varied layouts and  
include multipage tables.  
You have a pipeline that uses optical character recognition (OCR) and extracts totals and invoice numbers.  
The results are often incorrect because the document structure is ignored.  
You need to implement a solution that provides OCR, layout analysis, and template-generalizing field  
extraction. The solution must NOT require training a custom model. The solution must minimize  
administrative effort.  
What should you include in the solution?

- **A.** Azure Language in Foundry Tools
- ✅ **B.** Azure Content Understanding in Foundry Tools
- **C.** an Azure Machine Learning model

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q90 · pages 93–94

<details><summary>Explanation</summary>

Correct Answer:
B. Azure Content Understanding in Foundry Tools
The solution must process scanned PDF invoices using OCR, understand document layout, including
multipage tables, extract fields such as invoice numbers and totals across varying invoice templates, not
require training a custom model and minimize administrative effort.
Azure Content Understanding in Foundry Tools is designed specifically for these scenarios. It combines OCR
to extract text from scanned documents, Layout analysis to preserve tables, reading order, and document
structure and Template-generalizing field extraction, allowing it to extract common business fields across
different document layouts without requiring a custom trained model.
This makes it the ideal solution with minimal administration.
Incorrect Answers:
A. Azure Language in Foundry Tools
Azure Language provides text analytics capabilities such as entity recognition, sentiment analysis, and
summarization. It does not perform OCR or understand document layouts.
C. An Azure Machine Learning model
A custom Azure Machine Learning model would require development, training, deployment, and ongoing
maintenance, which contradicts the requirements to avoid custom model training and minimize administrative
effort.

</details>


---

## Q91 · single choice

You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.  
The agent must receive continuous audio input, convert the input into text for reasoning, and then return  
spoken responses to a user.  
The workflow must meet the following requirements:  
• Support turn-taking dynamics, where the agent begins to generate the speech output before the user  
finishes speaking.  
• Operate with low latency to maintain conversational experience.  
You need to enable both speech to text and text to speech in a real-time agent interaction.  
What should you do?

- **A.** Use batch transcription to convert the audio input and return text responses from the agent.
- ✅ **B.** Use real-time speech to text for incoming audio and text to speech for agent responses.
- **C.** Use an embeddings model to encode the audio, and then decode the audio into text and speech.
- **D.** Use speech translation to convert the audio into another language and return the translated text.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q91 · pages 94–95

<details><summary>Explanation</summary>


Correct Answer:
B. Use real-time speech to text for incoming audio and text to speech for agent responses.
The solution must accept continuous audio input, convert speech to text for the agent's reasoning, return
spoken responses, support low-latency, real-time conversations and support turn-taking dynamics, where
the agent can begin responding before the user has completely finished speaking.
The Azure Speech service in Foundry Tools provides real-time Speech-to-Text (STT) and Text-to-Speech
(TTS) capabilities that are specifically designed for conversational AI. These services enable streaming audio,
low latency, and natural turn-taking, making them the correct choice for voice agents.
Incorrect Answers:
A. Use batch transcription to convert the audio input and return text responses from the agent.
Batch transcription is intended for processing prerecorded audio files. It introduces higher latency and cannot
support real-time conversations or spoken responses.
C. Use an embeddings model to encode the audio, and then decode the audio into text and speech.
Embedding models generate vector representations for similarity search and retrieval. They do not perform
speech recognition or speech synthesis.
D. Use speech translation to convert the audio into another language and return the translated text.
Speech translation is designed for multilingual translation scenarios. The requirement is real-time speech
recognition and speech synthesis, not language translation.

</details>


---

## Q92 · single choice

You have a Microsoft Foundry project that processes purchase orders stored in Azure Blob Storage.  
Each purchase order has a different layout depending on the supplier.  
The extracted information will be stored as structured JSON and used by a procurement agent.  
You need to create a single analyzer that meets the following requirements:  
Extract the purchase order number, supplier name, requested delivery date, and total value from all  
•  
supported layouts.  
Return confidence scores for each extracted field.  
•  
Minimize post-processing in the application.  
•  
What should you use?

- ✅ **A.** A custom Azure Content Understanding analyzer in Foundry Tools that defines the required fields as extracted fields.
- **B.** The Azure Content Understanding prebuilt-read analyzer.
- **C.** The Azure Content Understanding prebuilt-layout analyzer.
- **D.** Azure AI Search with vector search enabled.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q92 · pages 95–96

<details><summary>Explanation</summary>


Correct Answer:
A. A custom Azure Content Understanding analyzer in Foundry Tools that defines the required fields as
extracted fields.
The requirements are extract purchase order number, supplier name, requested delivery date, and total
value, support multiple supplier layouts with a single analyzer, return confidence scores for each extracted
field and produce structured JSON while minimizing application post-processing.
A custom Azure Content Understanding analyzer allows you to define the required business fields as
extracted fields. It can generalize across different document layouts, automatically returns structured JSON,
and includes per-field confidence scores, making it the best fit for downstream procurement agents.
Incorrect Answers:
B. The Azure Content Understanding prebuilt-read analyzer.
The prebuilt-read analyzer performs OCR to extract raw text. It does not identify business fields such as
purchase order number or supplier name, nor does it produce structured field extraction.
C. The Azure Content Understanding prebuilt-layout analyzer.
The prebuilt-layout analyzer identifies document structure, including tables, paragraphs, and reading order.
However, it does not extract specific business fields into structured JSON.
D. Azure AI Search with vector search enabled.
Azure AI Search is designed for indexing and retrieving documents. It does not perform document field
extraction or produce structured JSON from purchase orders.

</details>


---

## Q93 · pick 2

You have a Microsoft Foundry project that contains a deployed chat model.  
You have a Python service that sends API requests to the model. The service is integrated with an automated  
validation system that compares generated outputs against approved response patterns.  
Stakeholders report that small wording differences are causing validation mismatches.  
You need to update the request parameters to improve output stability. The solution must maximize  
reasoning quality.  
How should you complete the Python code?

🖼 [Source: AI-103 PDF · page 96](https://tstudy.vercel.app/content/ai-103/figure-300.png)

- ✅ **A.** 0
- **B.** 1
- **C.** 2
- ✅ **D.** high
- **E.** low
- **F.** medium

**Answer:** A, D

**Nguồn:** AI-103 1.pdf · Q93 · pages 96–97

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: temperature → 0; output_config.effort → high)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 97](https://tstudy.vercel.app/content/ai-103/figure-304.png)

Correct Answers:
Temperature: 0
The application uses an automated validation system that compares generated responses against approved
response patterns. Setting the temperature to 0 makes the model's output as deterministic as possible,
reducing wording variations between identical requests and improving output stability.
Output effort: "high"
The requirement also states to maximize reasoning quality. Setting output_config={"effort":"high"} instructs
the reasoning model to spend more effort generating accurate, well-reasoned responses while still producing
deterministic output due to the low temperature.
Incorrect Answers:
Temperature: 1
A temperature of 1 increases randomness and creativity, making responses less consistent and more likely to
fail automated validation.
Temperature: 2
A temperature of 2 produces even greater variability and is the least suitable option for deterministic outputs.
Output effort: "low"
Low effort reduces reasoning depth and may produce lower-quality responses.
Output effort: "medium"
Medium effort provides a balance between speed and reasoning quality but does not maximize reasoning as
required.

</details>


---

## Q94 · single choice

You have a Microsoft Foundry project that contains an agent. The agent uses Azure AI Search as the  
retriever.  
You plan to ingest PDF into an Azure AI Search index to ensure that the agent can ground responses in texts  
in both documents and embedded images.  
Users require citations that link to the source files.  
You need to ensure that during indexing, the images are extracted into a structure that can be used as input  
for the built-in optical character recognition (OCR) skill.  
Which indexing approach should you use?

- ✅ **A.** an indexer to extract image data into a normalized_images collection
- **B.** a Shaper skill to restructure the OCR input
- **C.** a skillset to run the OCR skill directly against the content field of the index
- **D.** the outputFieldMappings parameter to write image data to a searchable field

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q94 · pages 98–98

<details><summary>Explanation</summary>


Correct Answer:
A. An indexer to extract image data into a normalized_images collection`
The requirements are index PDF documents stored for RAG, extract text from both the document text and
embedded images, use the built-in OCR skill and preserve source information for citations.
In Azure AI Search, the indexer can crack PDF documents and extract embedded images into the
normalized_images collection. This collection is the expected input for the built-in OCR skill, which then
extracts text from the images. The extracted text can be indexed alongside the document text while
maintaining references to the source documents for citations.
This is the recommended indexing approach for processing images embedded within documents.
Incorrect Answers:
B. A Shaper skill to restructure the OCR input.
A Shaper skill reshapes or combines enriched data during skillset execution. It does not extract images from
documents or create the normalized_images collection required by the OCR skill.
C. A skillset to run the OCR skill directly against the content field of the index.
The OCR skill operates on image inputs, not on the document's text (content) field. Images must first be
extracted into normalized_images.
D. The outputFieldMappings parameter to write image data to a searchable field.
outputFieldMappings maps outputs from the enrichment pipeline into index fields. It does not extract
embedded images or prepare them for OCR.

</details>


---

## Q95 · single choice

You have a Microsoft Foundry project that generates real estate marketing images from text prompts.  
After publishing several images, you discover that one image contains a vehicle parked in the driveway. The  
property owner requests that only the vehicle be removed while preserving the house, landscaping, lighting,  
and shadows.  
You need to update the image.  
What should you do?

- ✅ **A.** Apply a mask-based inpainting edit to the area containing the vehicle.
- **B.** Regenerate the image by using a lower temperature value.
- **C.** Modify the original prompt to specify an empty driveway and generate a new image.
- **D.** Create an image variation from the original image.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q95 · pages 99–99

<details><summary>Explanation</summary>

$6a

</details>


---

## Q96 · single choice

You have a Microsoft Foundry project that contains a customer support agent.  
The agent invokes several tools to retrieve order information, customer profiles, and shipping status before  
generating a response.  
Users report that response times have increased significantly after a recent deployment.  
You need to identify which stage of the agent execution is contributing most to the increased response time.  
Which observability signal should you review?

- **A.** Groundedness evaluation metrics
- ✅ **B.** Latency breakdown traces
- **C.** Content Safety metrics
- **D.** Relevance evaluation metrics

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q96 · pages 100–100

<details><summary>Explanation</summary>

$6b

</details>


---

## Q97 · single choice

You have a Microsoft Foundry project that contains an agent. The agent generates summaries from  
retrieved policy documents.  
Users report that some responses omit required regulatory clauses, even when the clauses are present in  
the retrieved content.  
You need to improve response completeness.  
Solution: You increase the value of the max_tokens parameter.  
Does this meet the goal?

- ✅ **A.** Yes
- **B.** No

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q97 · pages 101–101

<details><summary>Explanation</summary>

(Site nguồn không có giải thích cho câu này.)

</details>


---

## Q98 · single choice

You have a Microsoft Foundry project that contains an agent. The agent generates summaries from  
retrieved policy documents.  
Users report that some responses omit required regulatory clauses, even when the clauses are present in  
the retrieved content.  
You need to improve response completeness.  
Solution: You add a reflection pass that regenerates the response if the required clauses are missing.  
Does this meet the goal?

- ✅ **A.** Yes
- **B.** No

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q98 · pages 101–101

<details><summary>Explanation</summary>

(Site nguồn không có giải thích cho câu này.)

</details>


---

## Q99 · single choice

You have a Microsoft Foundry project that contains an agent. The agent generates summaries from  
retrieved policy documents.  
Users report that some responses omit required regulatory clauses, even when the clauses are present in  
the retrieved content.  
You need to improve response completeness.  
Solution: You increase the value of the temperature parameter.  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q99 · pages 102–102

<details><summary>Explanation</summary>

(Site nguồn không có giải thích cho câu này.)

</details>


---

## Q100 · single choice

You have a Microsoft Foundry project that contains an agent. The agent generates summaries from  
retrieved policy documents.  
Users report that some responses omit required regulatory clauses, even when the clauses are present in  
the retrieved content.  
You need to improve response completeness.  
Solution: You run an evaluation flow that scores responses for completeness and blocks responses that fall  
below a defined threshold.  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q100 · pages 102–103

<details><summary>Explanation</summary>

(Site nguồn không có giải thích cho câu này.)

</details>


---

## Q101 · pick 2

You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) chat  
solution used by customer support agents.  
You are adding an automated pre-production evaluation step to a CI/CD pipeline named Pipeline1. The  
evaluation will run against a labeled test dataset that contains support questions and the expected grounding  
context.  
You need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined  
threshold:  
responses include claims not supported by the retrieved source content  
•  
retrieved source content does not align with the labeled expected context  
•  
Which two built-in evaluators should you use in Pipeline1?

- ✅ **A.** Retrieval
- **B.** Fluency
- **C.** Coherence
- ✅ **D.** Groundedness
- **E.** Response Completeness

**Answer:** A, D

**Nguồn:** AI-103 1.pdf · Q101 · pages 103–103

<details><summary>Explanation</summary>

$6c

</details>


---

## Q102 · single choice

You have a Microsoft Foundry project that contains a support-ticket triage agent built by using the  
Foundry Agent Service.  
The agent uses tool to classify the ticket type and sot the ticket priority.  
Sometimes, the same support case continues across multiple sessions over several days.  
You need to persist state by using a durable ID to ensure that the agent can automatically reuse the full  
interaction history. The solution must preserve previous user messages, tool calls and tool outputs across  
turns and sessions.  
Which runtime component should you use?

- **A.** output item
- **B.** agent
- ✅ **C.** conversation
- **D.** response

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q102 · pages 104–104

<details><summary>Explanation</summary>

Correct Answer:
C. conversation
A conversation is the runtime component that maintains state across multiple turns and sessions using a
durable identifier. It preserves the full interaction history, including user messages, tool calls, and tool
outputs. This allows the agent to resume context seamlessly across sessions, which is required when
support cases span multiple days.
Incorrect Answers:
A. output item
An output item represents a single response or piece of output, not a persistent state container.
B. agent
An agent defines behavior and orchestration logic but does not persist interaction history across sessions.
D. response
A response is a single execution result and does not store or manage conversation history.

</details>


---

## Q103 · pick 2

You have a Microsoft Founcy project that contains a Retrieval Augmented Generation (RAG) solution.  
You need to run a pre-production evaluation by using labeled CSV dataset that contains the query, context,  
response and ground truth.  
The evaluation must measure the following:  
Whether responses address the user query  
•  
Whether responses are supported by the provided context  
•  
Whether responses contain sensitive or proprietary information  
•  
Which AI quality evaluation metrics should you use?

🖼 [Source: AI-103 PDF · page 105](https://tstudy.vercel.app/content/ai-103/figure-321.png)

- **A.** Coherence and Fluency
- **B.** GPT similarity and F1
- ✅ **C.** Groundedness and Relevance
- **D.** Groundedness and ROUGE
- **E.** Hateful and unfair content
- **F.** Indirect attacks
- ✅ **G.** Protected material
- **H.** Violent content

**Answer:** C, G

**Nguồn:** AI-103 1.pdf · Q103 · pages 104–106

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Evaluate context and query → Groundedness and Relevance; Detect sensitive or proprietary content → Protected material)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 105](https://tstudy.vercel.app/content/ai-103/figure-322.png)

$6d

</details>


---

## Q104 · pick 2

You plan to configure an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG)  
chat app. You need to provide scores for groundedness, relevance, and harmful content categories.  
Which two evaluation categories can you use?

- ✅ **A.** risk and safety metrics
- **B.** fluency evaluator
- **C.** similarity evaluators
- **D.** AI quality (NLP) metrics
- ✅ **E.** AI quality (AI assisted) metrics

**Answer:** A, E

**Nguồn:** AI-103 1.pdf · Q104 · pages 106–107

<details><summary>Explanation</summary>

$6e

</details>


---

## Q105 · pick 2

You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to  
analyze marketing videos.  
Video segmentation is enabled.  
You need to configure an analyzer to output a generated JSON field that describes the color scheme of each  
video segment.  
How should you configure the analyzer?

🖼 [Source: AI-103 PDF · page 107](https://tstudy.vercel.app/content/ai-103/figure-332.png)

- **A.** classify
- ✅ **B.** generate
- **C.** group
- ✅ **D.** string
- **E.** table

**Answer:** D, B

**Nguồn:** AI-103 1.pdf · Q105 · pages 107–108

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Field value type → string; Method → generate)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 107](https://tstudy.vercel.app/content/ai-103/figure-333.png)

Correct Answer:
Field value type → string
A string field type is used when the output is descriptive text. In this scenario, the requirement is to describe
the color scheme of each video segment. This is not structured multi-field JSON with defined subfields, but
rather a natural language or textual description, which maps to a string.
Field method → generate
The generate method is used when the analyzer must create new content using AI rather than extract it
directly from the source. Since the color scheme must be inferred from visual content and described, it
requires generative capability.
Incorrect Answers:
group
Group is used for structured JSON with predefined subfields. The question asks for a generated description,
not a structured schema with multiple named fields.
classify
Classify is used when assigning predefined labels, not generating descriptive output.
table
Table is used for structured tabular extraction, not descriptive generation.

</details>


---

## Q106 · single choice

You have a Microsoft Foundry project that contains an agent. The agent uses two tools to perform the  
following actions:  
Use Azure AI Search to retrieve answers from a private product documentation index.  
•  
Use the web search tool to retrieve public information on the internet.  
•  
You need to ensure that for a specific run, the agent deterministically retrieves information only from the  
internet.  
To what should you set tool_choice?

- ✅ **A.** “type”: “bing_grouding”
- **B.** “type”: “azure_ai-search”
- **C.** “auto”
- **D.** “required”

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q106 · pages 108–109

<details><summary>Explanation</summary>

Correct Answer:
A. “type”: “bing_grounding”
This is correct because setting tool_choice explicitly to bing_grounding forces the agent to deterministically
use only the web search tool for that run. It ensures that responses are generated strictly from internet
sources and prevents the agent from calling Azure AI Search or any other tool.
Incorrect Answers:
B. “type”: “azure_ai-search”
This forces the agent to use the private index, which is the opposite of the requirement.
C. “auto”
Auto allows the agent to choose tools dynamically, so it does not guarantee internet-only retrieval.
D. “required”
Required forces tool usage but does not specify which tool, so it does not ensure deterministic selection of
web search.

</details>


---

## Q107 · pick 2

$6f

🖼 [Source: AI-103 PDF · page 109](https://tstudy.vercel.app/content/ai-103/figure-338.png)

- **A.** Changing the content filtering configuration to low severity will resolve the fine-tuning job issues.
- ✅ **B.** The difference between the 12% and 4% content harm defect rate is consistent with the different severity thresholds used in Run1 and Run2.
- ✅ **C.** The identical 6% protected material evaluation values across Run1 and Run2 indicate that this metric is unaffected by the change in the severity threshold.

**Answer:** B, C

**Nguồn:** AI-103 1.pdf · Q107 · pages 109–110

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 110](https://tstudy.vercel.app/content/ai-103/figure-349.png)

Statement 1 --> No
This is incorrect because lowering the severity threshold only reduces how strictly harmful content is
flagged, but it does not remove or fix the harmful content present in the dataset. The fine-tuning job fails due
to actual content violations detected during RAI checks, so the dataset itself must be cleaned rather than just
changing the filtering level.
Statement 2 --> Yes
This is correct because a medium severity threshold flags more content as harmful compared to a high
severity threshold, resulting in a higher defect rate (12% vs 4%). This difference directly reflects how varying
severity levels impact content harm detection sensitivity.
Statement 3 --> Yes
This is correct because protected material evaluation is independent of harmful content severity thresholds.
The identical 6% values across both runs confirm that changing severity levels affects only harmful content
metrics and not protected material detection.

</details>


---

## Q108 · single choice

You have a Microsoft Foundry project that contains a customer support agent built on a deployed chat  
model. The agent responses are validated by using an automated testing system that compares generated  
answers to stored expected outputs. Identical prompts must return consistent response to prevent  
automated test failures.  
You need to reduce response variability, without modifying the prompt or reducing factual accuracy.  
What should you do for the model?

- **A.** Increase the max_tokens parameter.
- **B.** Remove stop sequences from the requests.
- ✅ **C.** Decrease the temperature parameter.
- **D.** Increase the temperature parameter.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q108 · pages 110–111

<details><summary>Explanation</summary>

Correct Answer:
C. Decrease the temperature parameter
This is correct because temperature controls randomness in model output. Lowering the temperature makes
responses more deterministic and consistent for identical prompts, which is essential for automated testing
scenarios without impacting factual accuracy.
Incorrect Answers:
A. Increase the max_tokens parameter
This only affects response length, not variability or consistency.
B. Remove stop sequences from the requests
Stop sequences control where responses end, not how deterministic they are.
D. Increase the temperature parameter
Higher temperature increases randomness, leading to more variability and inconsistent outputs.

</details>


---

## Q109 · pick 2

You have a Microsoft Foundry project that contains two agents named PolicyWriter and RskReviewer.  
PolicyWriter generates daft updates for customer polices, and RiskReviewer reviews the drafts.  
In the visual builder, you need to create a workflow that meets the following requirements:  
Finalizes low-risk updates without manual intervention  
•  
Ensures predictable execution across the agents  
•  
Requires user approval for highs updates  
•  
What should you configure?

🖼 [Source: AI-103 PDF · page 112](https://tstudy.vercel.app/content/ai-103/figure-354.png)

- ✅ **A.** The sequential template that passes outputs node by-node
- **B.** The group chat template to dynamically route control between the agents
- **C.** The human-in-the-loop template that pauses execution of the workflow for input
- **D.** Add a Basic chat node
- **E.** Add a Condition statement
- ✅ **F.** Add an Ask a question node

**Answer:** A, F

**Nguồn:** AI-103 1.pdf · Q109 · pages 112–113

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Orchestration pattern → The sequential template that passes outputs node by-node; Approval checkpoints → Add an Ask a question node)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 112](https://tstudy.vercel.app/content/ai-103/figure-347.png)

Correct Answer:
Orchestration pattern → The sequential template that passes outputs node by-node
This is correct because the requirement is for predictable execution across agents. A sequential pattern
ensures PolicyWriter runs first and then RiskReviewer processes the output in a fixed, deterministic flow,
which avoids dynamic routing and ensures consistency.
Approval checkpoints → Add an Ask a question node
This is correct because high-risk updates require explicit user approval. An Ask a question node introduces a
human-in-the-loop checkpoint, allowing the workflow to pause and request approval only when needed.
Incorrect Answers:
The group chat template to dynamically route control between the agents
This introduces non-deterministic behavior, which violates the requirement for predictable execution.
The human-in-the-loop template that pauses execution of the workflow for input
This would pause all executions, not just high-risk cases, 
making it inefficient for low-risk updates.
Add a Basic chat node
This does not provide approval capability.
Add a Condition statement
This can route logic but cannot capture explicit user approval.

</details>


---

## Q110 · single choice

You are developing prompts for a Micosoft Foundry project that classifies incoming support tickets by  
category. You need to improve accuracy by showing the model how correct classifications look, without  
retaining the model or storing knowledge permanently.  
Which prompt engineering approach should you use?

- **A.** Retrieval Augmented Generation (RAG)
- **B.** zero-shot learning
- **C.** chain of thought
- ✅ **D.** few-shot learning

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q110 · pages 113–113

<details><summary>Explanation</summary>

Correct Answer:
D. few-shot learning
This is correct because few-shot learning improves classification accuracy by providing a few labeled
examples directly in the prompt. This shows the model what correct outputs look like without retraining or
permanently storing knowledge, aligning perfectly with the requirement.
Incorrect Answers:
A. Retrieval Augmented Generation (RAG)
RAG retrieves external data but does not demonstrate example classifications within the prompt.
B. zero-shot learning
Zero-shot provides no examples, so it does not help guide the model toward more accurate classifications.
C. chain of thought
Chain-of-thought improves reasoning steps, not classification accuracy through examples.

</details>


---

## Q111 · single choice

You have a web app named App1 that processes user prompts by integrating with a Microsoft Foundry  
project named Project1.  
App1 performs the following actions:  
Sends prompts directly to a model by using the Azure OpenAI Responses API  
•  
Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request  
•  
You need to configure end-to-end visibility into each step of the request workflow.  
What should you do?

- **A.** Enable logging by using the client SDK for Content Safety.
- **B.** Enable logging by using Foundry Local.
- ✅ **C.** Enable application tracing in Project1.
- **D.** Route requests through the Azure OpenAI endpoint.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q111 · pages 114–114

<details><summary>Explanation</summary>

Correct Answer:
C. Enable application tracing in Project1
This is correct because application tracing provides end-to-end observability across the entire request flow,
including model calls and tool invocations like Content Safety. It captures each step in the workflow, enabling
full visibility into how the request is processed within Foundry.
Incorrect Answers:
A. Enable logging by using the client SDK for Content Safety
This only provides visibility into Content Safety calls, not the complete workflow.
B. Enable logging by using Foundry Local
Foundry Local is used for local development and debugging, not full production tracing.
D. Route requests through the Azure OpenAI endpoint
This does not provide tracing across integrated tools or end-to-end workflow visibility.

</details>


---

## Q112 · single choice

You have a Microsoft Foundry project that contains an agent named Agent1.  
Agent runs successful, but Foundry Control Plane does NOT display values for error rates, runs, and token  
usage, and the Traces tab is empty.  
You need to ensure that Found Control Plane displays the appropriate values for Agent1. What should you  
do?

- **A.** Update Agent1 to a new version.
- **B.** Restart Agent from Foundry Control Plan
- **C.** Assign to a Log Analytics workspace to Agent1.
- ✅ **D.** Enable Application Insights for Agent1.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q112 · pages 114–115

<details><summary>Explanation</summary>

Correct Answer:
D. Enable Application Insights for Agent1
This is correct because metrics such as error rates, runs, token usage, and traces are collected through
Application Insights. Enabling it integrates telemetry and observability, allowing the Foundry Control Plane to
display detailed runtime metrics and traces for the agent.
Incorrect Answers:
A. Update Agent1 to a new version
Updating the version does not enable telemetry or monitoring capabilities.
B. Restart Agent from Foundry Control Plane
Restarting does not address missing telemetry configuration.
C. Assign to a Log Analytics workspace to Agent1
Log Analytics alone does not provide the required application-level tracing and metrics integration for
Foundry agents.

</details>


---

## Q113 · pick 2

You have a Microsoft Foundry project that contains an agent.  
The agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-  
credentials requirement.  
You need to ensure that the agent can retrieve the secrets. The solution must follow the principle of least  
privilege. What should you configure?

🖼 [Source: AI-103 PDF · page 115](https://tstudy.vercel.app/content/ai-103/figure-362.png)

- **A.** Enable a system-assigned managed identity at the Foundry level
- ✅ **B.** Enable a system-assigned managed identity at the project level
- **C.** Create a service principal and store its client secret
- **D.** Add an API key to application settings
- **E.** Add a Key Vault access policy for the secrets
- ✅ **F.** Assign the Key Vault Secrets User role to the managed identity

**Answer:** B, F

**Nguồn:** AI-103 1.pdf · Q113 · pages 115–116

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Managed identity scope → Enable a system-assigned managed identity at the project level; Key Vault authorization → Assign the Key Vault Secrets User role to the managed identity)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 116](https://tstudy.vercel.app/content/ai-103/figure-357.png)

Correct Answer:
Managed identity scope → Enable a system-assigned managed identity at the project level
This is correct because the agent runs within the Foundry project, so enabling a system-assigned managed
identity at the project level ensures secure, keyless authentication scoped specifically to that project, aligning
with least privilege.
Key Vault authorization method → Assign the Key Vault Secrets User role to the managed identity
This is correct because RBAC-based access using the Secrets User role allows the agent to retrieve secrets
without exposing keys, while granting only the minimum required permissions.
Incorrect Answers:
Enable a system-assigned managed identity at the Foundry level
This grants broader access than required and violates least privilege.
Create a service principal and store the principal’s client secret
This reintroduces credential management, which violates the keyless requirement.
Add an API key to application settings
This uses secrets instead of eliminating them.
Add a Key Vault access policy for the secrets
Access policies are legacy and less aligned with RBAC-based least privilege compared to role assignments.

</details>


---

## Q114 · single choice

You have a Microsoft Foundry project that contains an agent.  
The agent uses Azure Content Understanding in Foundry Too to process vendor onboarding packets. The  
packs include digital PDFs that contain tables and hyperlinks.  
The extracted content is indexed for search and provided to a downstream agent in the Markdown format.  
You need to generate a Markdown output that has a layout and a semantic structure optimized for Retrieval  
Augmented Generation (RAG) workflows.  
Which built-in analyzer should you use?

- **A.** prebuilt-documentFieldSchema
- ✅ **B.** prebuilt-documentSearch
- **C.** prebuilt-read
- **D.** prebuilt-layout

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q114 · pages 116–117

<details><summary>Explanation</summary>

Correct Answer:
B. prebuilt-documentSearch
This is correct because prebuilt-documentSearch is optimized for RAG scenarios, producing structured
Markdown output with semantic organization suitable for indexing and retrieval. It preserves layout elements
like tables and links while formatting content for efficient downstream search and grounding.
Incorrect Answers:
A. prebuilt-documentFieldSchema
Used for structured field extraction, not for generating RAG-optimized Markdown output.
C. prebuilt-read
Extracts raw text without preserving layout or semantic structure needed for RAG.
D. prebuilt-layout
Captures layout elements but does not produce semantically optimized Markdown for retrieval workflows.

</details>


---

## Q115 · pick 2

You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling  
to query internal systems.  
You need to implement responsible AI auditing to meet the following requirements:  
Capture all the nested operations across the entire agent run.  
•  
Record tool invocation arguments and retuned results as metadata.  
•  
What should you use for each requirement?

🖼 [Source: AI-103 PDF · page 117](https://tstudy.vercel.app/content/ai-103/figure-360.png)

- ✅ **A.** Hierarchical spans
- **B.** KQL queries
- **C.** Sampling
- ✅ **D.** Tool call attributes
- **E.** Trace sampling

**Answer:** A, D

**Nguồn:** AI-103 1.pdf · Q115 · pages 117–118

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Trace nested operations → Hierarchical spans; Capture tool arguments and results → Tool call attributes)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 118](https://tstudy.vercel.app/content/ai-103/figure-363.png)

Correct Answer:
Capture all the nested operations across the entire agent run → Hierarchical spans
This is correct because hierarchical spans represent the full execution tree of an agent run, capturing parent-
child relationships between steps, sub-steps, and tool calls. This ensures complete visibility into nested
operations for auditing and tracing.
Record tool invocation arguments and results → Tool call attributes
This is correct because tool call attributes store metadata about each tool invocation, including input
arguments and returned results. This enables detailed auditing of how tools were used and what data was
processed.
Incorrect Answers:
A KQL query filter
Used for querying logs, not for capturing execution traces.
Sampling / Trace sampling policy
Used to limit data collection, not to ensure full capture of operations.

</details>


---

## Q116 · single choice

You have a Microsoft Foundry project that contains an agent.  
The agent uses Azure AI Search for Retrieval Augmented Generation (RAG). You plan to ingest and index PDF  
product manuals.  
You need to build a solution that supports semantic similarity matching. The solution must ensure that the  
agent retrieves relevant data when user questions use different wording than the product manuals.  
Which indexing approach should you use?

- ✅ **A.** vector search
- **B.** semantic ranking
- **C.** suggesters
- **D.** analyzers

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q116 · pages 118–119

<details><summary>Explanation</summary>

Correct Answer:
A. vector search
This is correct because vector search enables semantic similarity matching by converting text into
embeddings and retrieving content based on meaning rather than exact keywords. This ensures that user
queries with different wording still match relevant content from product manuals.
Incorrect Answers:
B. semantic ranking
This improves ranking of already retrieved results but does not perform semantic retrieval itself.
C. suggesters
Used for autocomplete and search suggestions, not for semantic matching.
D. analyzers
Used for text processing like tokenization, not for semantic similarity search.

</details>


---

## Q117 · pick 2

You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry  
Tools API. The call is used to analyze the existence of company logos in images. The call returns a collection  
of brands named brands.  
You have the following code segment:

🖼 [Source: AI-103 PDF · page 119](https://tstudy.vercel.app/content/ai-103/figure-366.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

🖼 [Source: AI-103 PDF · page 119](https://tstudy.vercel.app/content/ai-103/figure-367.png)

- ✅ **A.** The code will display the name of each detected brand with a confidence equal to or higher than 75 percent.
- ✅ **B.** The code will display coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands.
- **C.** The code will display coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands.

**Answer:** A, B

**Nguồn:** AI-103 1.pdf · Q117 · pages 119–120

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 120](https://tstudy.vercel.app/content/ai-103/figure-370.png)

Statement 1 --> Yes
This is correct because the code checks if brand.confidence >= 0.75, which ensures that only brands with
confidence equal to or greater than 75% are processed. It then prints brand.name, so the name of each
qualifying detected brand will be displayed.
Statement 2 --> Yes
This is correct because the code prints {brand.rectangle.x} and {brand.rectangle.y}, which represent the
coordinates of the top-left corner of the bounding rectangle around the detected logo.
Statement 3 --> No
This is correct because the code prints width {brand.rectangle.w} and height {brand.rectangle.h}, not the
bottom-right coordinates. Bottom-right coordinates would require calculating x + w and y + h, which is not
done here.

</details>


---

## Q118 · single choice

You have a Microsoft Foundry agent that grounds responses from an Azure Search index that contains  
the following:  
Searchable text fields for product names and product codes  
•  
A vector field that stores embeddings for product descriptions  
•  
You need to ensure that users can query the index by using the following:  
Exact product names or codes  
•  
Natural language descriptions of the products  
•  
What should you configure?

- **A.** vector search only
- ✅ **B.** hybrid search
- **C.** keyword search only
- **D.** semantic search only

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q118 · pages 120–121

<details><summary>Explanation</summary>

Correct Answer:
B. hybrid search
This is correct because hybrid search combines keyword search for exact matches on product names and
codes with vector search for semantic similarity on product descriptions. This ensures both precise lookups
and natural language queries are handled effectively in a single query.
Incorrect Answers:
A. vector search only
This supports semantic queries but does not handle exact keyword matches efficiently.
C. keyword search only
This works for exact matches but cannot handle natural language or semantic similarity.
D. semantic search only
Semantic ranking enhances results but does not combine keyword and vector retrieval like hybrid search.

</details>


---

## Q119 · pick 2

You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an  
Azure key vault named KV1.  
You need to configure a connection from Project1 to KV1.  
How should you complete the Bicep code?

🖼 [Source: AI-103 PDF · page 122](https://tstudy.vercel.app/content/ai-103/figure-383.png)

- **A.** AzureAIService
- ✅ **B.** AzureKeyVault
- **C.** AzureOpenAI
- **D.** AccountKey
- ✅ **E.** AccountManagedIdentity
- **F.** ApiKey

**Answer:** B, E

**Nguồn:** AI-103 1.pdf · Q119 · pages 121–124

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: category → AzureKeyVault; authType → AccountManagedIdentity)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 123](https://tstudy.vercel.app/content/ai-103/figure-386.png)

Correct Answer:
category → AzureKeyVault
This is correct because the connection is being created to an Azure Key Vault resource (KV1). The category
must match the target service type so that Foundry correctly identifies and integrates with Key Vault.
authType → AccountManagedIdentity
This is correct because managed identity enables secure, keyless authentication between the Foundry project
and Key Vault. It aligns with best practices and avoids storing secrets like API keys while supporting least
privilege access.
Incorrect Answers:
AzureAIService / AzureOpenAI
These categories are for AI services, not Key Vault connections.
AccountKey / ApiKey
These require storing secrets, which violates secure keyless authentication practices.

</details>


---

## Q120 · single choice

You have an Azure AI Search indexer that ingests PDF policy manuals.  
Client applications must display page-level citations that have bounding polygons for both text and images.  
You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset.  
The solution must meet the following requirements:  
Provide text and image location metadata.  
•  
Extract tables that span multiple pages.  
•  
What should you add?

- **A.** Document Extraction
- ✅ **B.** Azure Content Understanding in Foundry Tools
- **C.** GenAI Prompt
- **D.** Document Layout

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q120 · pages 124–125

<details><summary>Explanation</summary>

Correct Answer:
B. Azure Content Understanding in Foundry Tools
This is correct because it satisfies both requirements simultaneously. It extracts text and images with
bounding polygon metadata, enabling precise page-level citations. More importantly, it can reconstruct tables
that span multiple pages as a single coherent structure (Markdown/semantic format), which is explicitly
required. Since the solution must handle both multimodal metadata and cross-page table continuity, this is
the only option that fully meets the requirements.
Incorrect Answers:
A. Document Extraction
Provides basic text extraction but does not include layout metadata such as bounding polygons or support
advanced table structures.
C. GenAI Prompt
Used for generating or transforming content, not for extracting layout, positional metadata, or structured
tables from documents.
Side Note (Important Exam Trap)
D. Document Layout
This option is very tempting and commonly chosen. It does provide bounding polygons for text and images,
so it partially meets the requirement. However, it fails the critical requirement of handling tables that span
multiple pages, as it tends to break them into separate segments or flatten them.
Since the question requires ALL conditions to be met, Document Layout becomes incorrect despite being
close.

</details>


---

## Q121 · single choice

You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in  
Azure Blob Storage. The invoices are stored as scanned images.  
You need to enable users to search invoice data across the invoice fields. Which built-in skill should you add  
to the skillset of Pipeline1?

- **A.** Text Split
- **B.** Text Translation
- ✅ **C.** optical character recognition (OCR)
- **D.** Image Analysis

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q121 · pages 125–125

<details><summary>Explanation</summary>

Correct Answer:
C. optical character recognition (OCR)
This is correct because the invoices are stored as scanned images, which means they do not contain
searchable text. OCR converts the text within images into machine-readable text, enabling Azure AI Search to
index invoice fields and make them searchable.
Incorrect Answers:
A. Text Split
Used to break large text into chunks, but it requires text input and cannot extract text from images.
B. Text Translation
Translates text between languages, but does not extract text from scanned images.
D. Image Analysis
Detects objects, captions, or tags in images, but does not extract structured text required for search
indexing.

</details>


---

## Q122 · single choice

You have an invoice-processing application named App1 that uses Azure Constant Understanding in  
Foundry Tools.  
You are building a new Content Understanding pipeline named Pipeline1 that must meet the following  
requirements:  
Compare an invoice to its related purchase order  
•  
Validate the voice against static vendor contact documents  
•  
Return a single structured output that includes discrepancy findings  
•  
You need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. What should you  
configure?

- **A.** a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis.
- **B.** a single-file task in standard mode that uses confidence scores enabled for the extracted fields.
- ✅ **C.** a multiple-file task in pro mode that uses the vendor contract files as reference data
- **D.** a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q122 · pages 125–126

<details><summary>Explanation</summary>

Correct Answer:
C. a multiple-file task in pro mode that uses the vendor contract files as reference data
This is correct because the requirements involve comparing multiple documents together (invoice vs
purchase order and vendor documents) and producing a single structured output with discrepancy findings.
Multi-file tasks enable cross-document reasoning, and pro mode supports more advanced scenarios like
comparisons and validation against reference documents, making it the only option that satisfies all
requirements.
Incorrect Answers:
A. a single-file task in standard mode that uses the vendor contract provided as an additional document
during analysis
Single-file tasks cannot properly handle comparisons across multiple documents.
B. a single-file task in standard mode that uses confidence scores enabled for the extracted fields
Confidence scores do not address cross-document comparison or validation requirements.
D. a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer
Standard mode lacks the advanced reasoning and validation capabilities required for discrepancy detection
across multiple documents.

</details>


---

## Q123 · pick 2

You have a Microsoft Foundry project.  
You need to create a customer support agent that meets the following requirements:  
Grounds responses only in company policy documents stored in curated repositories  
•  
Retains customer preferences across separate chat sessions  
•  
How should you configure the agent?

🖼 [Source: AI-103 PDF · page 127](https://tstudy.vercel.app/content/ai-103/figure-387.png)

- ✅ **A.** Configure retrieval from approved data sources
- **B.** Upload the policy documents directly to the agent
- **C.** Embed the policy documents directly into the agent instructions
- ✅ **D.** Enable agent memory that uses persistent storage
- **E.** Use orchestration-managed session context
- **F.** Retain user preferences in the state of the client application

**Answer:** A, D

**Nguồn:** AI-103 1.pdf · Q123 · pages 126–128

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Knowledge grounding → Configure retrieval from approved data sources; Memory → Enable agent memory that uses persistent storage)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 127](https://tstudy.vercel.app/content/ai-103/figure-388.png)

Correct Answer:
Knowledge grounding → Configure retrieval from approved data sources
This is correct because the requirement is to ground responses only in company policy documents stored in
curated repositori
es. Retrieval from approved data sources ensures controlled access to trusted content
using RAG, preventing the agent from using unverified or embedded information.
Memory → Enable agent memory that uses persistent storage
This is correct because the agent must retain customer preferences across separate chat sessions.
Persistent memory allows data to be stored beyond a single session, enabling long-term personalization and
continuity.
Incorrect Answers:
Upload the policy documents direct to the agent / Embed the policy documents directly into the agent
instructions
These approaches are static, not scalable, and do not enforce controlled retrieval from curated repositories.
Use orchestration-managed session context
This only retains information within a single session and does not persist across multiple interactions.
Retain user preferences in the state of the client application
This is not centralized or reliable for enterprise scenarios and does not provide true persistent agent
memory.

</details>


---

## Q124 · single choice

You have a Microsoft Foundry project that generates short promotional product videos.  
After several clips are approved, reviewers notice a small watermark in the top-right corner of some videos.  
You need to remove the watermark without regenerating the videos.  
What should you do?

- **A.** Modify the original prompt to exclude watermarks.
- **B.** Crop the video by using the size parameter.
- **C.** Increase the guidance scale.
- ✅ **D.** Apply a mask-based inpainting edit to the affected part of the video.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q124 · pages 128–128

<details><summary>Explanation</summary>

Correct Answer:
D. Apply a mask-based inpainting edit to the affected part of the video
This is correct because the requirement is to remove a watermark from already generated videos without
regenerating them. Mask-based inpainting allows you to selectively edit a specific region (top-right corner)
and remove or replace the watermark while preserving the rest of the video content.
Incorrect Answers:
A. Modify the original prompt to exclude watermarks
This would only affect future video generation and does not fix already generated videos.
B. Crop the video by using the size parameter
Cropping would remove part of the video frame and may affect important content. It is not a precise or
suitable solution for watermark removal.
C. Increase the guidance scale
Guidance scale influences how closely the model follows the prompt during generation. It has no effect on
already generated videos or post-processing edits.

</details>


---

## Q125 · pick 2

You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads  
and calls an Azure OpenAI model deployment.  
During load testing, calls intermittently fall and return an HTTP 429 rate limit exceeded error. Some user  
uploads fail and generate an HTTP 400 file size exceeded error.  
You need to mitigate the errors and reduce call failures. The solution must remain within the service and  
model limits.  
What should you do to resolve each error?

🖼 [Source: AI-103 PDF · page 129](https://tstudy.vercel.app/content/ai-103/figure-393.png)

- ✅ **A.** Implement exponential backoff with jitter
- ✅ **B.** Split files into smaller files
- **C.** Increase quotas
- **D.** Move large files and use search
- **E.** Add more tools

**Answer:** A, B

**Nguồn:** AI-103 1.pdf · Q125 · pages 128–129

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: HTTP 429 errors → Implement exponential backoff with jitter; HTTP 400 errors → Split files into smaller files)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 129](https://tstudy.vercel.app/content/ai-103/figure-394.png)

Correct Answer:
HTTP 429 → Implement exponential backoff and jitter in the retry logic
This is correct because HTTP 429 indicates rate limiting. The proper way to handle rate limits within service
constraints is to retry requests using exponential backoff with jitter. This reduces contention and prevents
overwhelming the service while staying within allowed quotas.
HTTP 400 → Split content into smaller files before uploading the files
This is correct because HTTP 400 with file size exceeded indicates that uploads are breaching the maximum
file size limit. Splitting files ensures each upload stays within the allowed limits and succeeds.
Incorrect Answers:
Increase tenant-wide quotas
This violates the requirement to remain within service and model limits.
Move large content to files and use file search
This helps with large prompts but does not directly resolve file upload size limit errors.
Use additional agent tools to reduce the message size
This may reduce prompt size but does not address file upload size constraints or rate limiting directly.

</details>


---

## Q126 · single choice

You have a web app named App1 that sends requests to a multimodal chat model deployment in a  
Microsoft Foundry project.  
User messages can contain both text and images.  
Currently, App1 includes image URL: as plain text inside the message content so the model cannot recognize  
them as images.  
Traces show that the requests contain a single text message instead of a multimodal content array.  
You need to send the message as a structured array that includes both the text portion and the image  
reference to ensure that the model can process the image correctly.  
What should you do?

- ✅ **A.** Set the user message content array to include items that have type: text and type: image_url.
- **B.** Encode the image to base64 and include the encoded data inside the content string of the user message.
- **C.** Add the image URL to the request metadata section, so the model can resolve the processing issue automatically.
- **D.** Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q126 · pages 130–130

<details><summary>Explanation</summary>

Correct Answer:
A. Set the user message content array to include items that have type: text and type: image_url
This is correct because multimodal chat models expect input in a structured content array, where each
element explicitly defines its type (for example, text or image_url). This allows the model to correctly
interpret and process both text and image inputs within the same message.
Incorrect Answers:
B. Encode the image to base64 and include the encoded data inside the content string of the user
message
Embedding base64 inside a plain text string does not create a multimodal input. The model will treat it as
text, not as an image.
C. Add the image URL to the request metadata section
Metadata is not used by the model for content understanding. The model only processes structured message
content.
D. Place the image URL inside the System Message and set type to image_url
System messages are meant for instructions and configuration, not for passing user content like images.
This will not correctly enable multimodal processing.

</details>


---

## Q127 · pick 1

You have a Python application that redacts sensitive information before sending prompt text to a  
language model. The application has the following code:

🖼 [Source: AI-103 PDF · page 131](https://tstudy.vercel.app/content/ai-103/figure-399.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

🖼 [Source: AI-103 PDF · page 132](https://tstudy.vercel.app/content/ai-103/figure-410.png)

- **A.** For sample_text, audit will include entity records for Contact and SSN.
- **B.** For sample_text, text_for_model will include john.doe@contoso.com and 859-98-0987.
- ✅ **C.** For sample_text, text_for_model will contain entity type masks for John Doe and 312-555-1234.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q127 · pages 131–132

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 132](https://tstudy.vercel.app/content/ai-103/figure-403.png)

Statement 1 --> No
This is correct because the configuration restricts detection to "piiCategories": ["Person", "PhoneNumber"].
The terms “Contact” and “SSN” are not included in these categories, so they will not be detected as entities
and therefore will not appear in the audit output.
Statement 2 --> No
This is correct because text_for_model uses redactedText, which applies masking (entityMask) to detected
entities. Even if email and SSN are present in the text, they will either be masked (if detected) or excluded (if
not part of configured categories). Hence, the original values like john.doe@contoso.com and 859-98-0987
will not appear.
Statement 3 --> Yes
This is correct because the configuration includes "Person" and "PhoneNumber" with entityMask redaction.
Therefore, “John Doe” and “312-555-1234” will be detected and replaced with masked placeholders in
text_for_model.

</details>


---

## Q128 · single choice

You are building a customer support web app named App1 in Microsoft Foundry that uses a GPT  
realtime model.  
App1 must support:  
Live, low-latency voice conversations that use Azure OpenAI  
•  
Streaming audio input from users and playback audio responses  
•  
You need to configure a connection method that supports real-time audio streaming in client application and  
targets approximately 100 ms latency.  
Which connection method should you use?

- **A.** RTMP
- ✅ **B.** WebRTC
- **C.** SIP
- **D.** WebSocket

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q128 · pages 133–133

<details><summary>Explanation</summary>

Correct Answer:
B. WebRTC
This is correct because WebRTC is designed for real-time, low-latency audio and video streaming, typically
achieving latency around ~100 ms. It supports bi-directional streaming, making it ideal for live voice
conversations where users send audio input and receive audio responses instantly.
Incorrect Answers:
A. RTMP
This is primarily used for live video streaming (e.g., broadcasting) and has higher latency. It is not suitable for
interactive real-time conversations.
C. SIP
SIP is used for telephony signaling but does not handle real-time media streaming efficiently for modern
web-based applications like GPT realtime models.
D. WebSocket
WebSocket supports real-time communication but is not optimized for low-latency audio streaming like
WebRTC. It typically results in higher latency compared to WebRTC for media scenarios.

</details>


---

## Q129 · pick 2

You have an Azure subscription.  
You need to create a new resource that will generate fictional stores in response to user prompts. The  
solution must ensure that the resource uses a customer-managed key to protect data.  
How should you complete the script?

🖼 [Source: AI-103 PDF · page 134](https://tstudy.vercel.app/content/ai-103/figure-408.png)

- **A.** AIServices
- **B.** LanguageAuthoring
- ✅ **C.** OpenAI
- **D.** --api-properties
- **E.** --assign-identity
- ✅ **F.** --encryption

**Answer:** C, F

**Nguồn:** AI-103 1.pdf · Q129 · pages 133–135

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Resource kind → OpenAI; CLI parameter → --encryption)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 134](https://tstudy.vercel.app/content/ai-103/figure-409.png)

Correct Answer:
kind → OpenAI
This is correct because the requirement is to generate responses to user prompts (fictional stores), which
requires an Azure OpenAI resource. Therefore, the resource type must be set to OpenAI.
parameter → --encryption
This is correct because customer-managed keys (CMK) are configured using the encryption property. The
provided JSON block specifies "keySource": "Microsoft.KeyVault" and Key Vault details, which are part of
encryption settings for CMK.
Incorrect Answers:
AIServices / LanguageAuthoring
These resource kinds are used for other AI capabilities (vision, language authoring) and do not support
OpenAI prompt-based generation.
--api-properties / --assign-identity
These parameters do not configure customer-managed keys. CMK specifically requires the encryption
configuration.

</details>


---

## Q130 · single choice

You have a Microsoft Foundry project that contains an agent and uses a GitHub repository. The  
repository contains a YAM file named File1 that defines the evaluation settings of the agent.  
You need to create a GitHub Actions workflow that runs the evaluation defined in File1 when a pull request  
(PR) is opened.  
How should you configure the workflow?

- **A.** Set project-endpoint to the endpoint of the project.
- ✅ **B.** Set evaluation-config to the path of the YAML file.
- **C.** Set model-deployment-name to the deployed model.
- **D.** Set tenant-id to the Microsoft Entra tenant ID

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q130 · pages 135–136

<details><summary>Explanation</summary>

Correct Answer:
B. Set evaluation-config to the path of the YAML file.
The GitHub Actions workflow for running evaluations in a Microsoft Foundry project relies on referencing the
evaluation configuration file that defines how the agent should be tested. Since File1 is a YAML file containing
the evaluation settings, the workflow must point to this file using the evaluation-config parameter. This
ensures that when a pull request is opened, the workflow executes the evaluation exactly as defined in the
YAML configuration, enabling automated validation of the agent’s behavior.
Incorrect answers:
A. Set project-endpoint to the endpoint of the project.
This is not required for triggering evaluation from a YAML configuration in GitHub Actions and does not
define which evaluation to run.
C. Set model-deployment-name to the deployed model.
This is unrelated to running evaluations from a YAML file and is only used when directly referencing a
specif
ic model deployment.
D. Set tenant-id to the Microsoft Entra tenant ID
Tenant ID is used for authentication context but does not specify or trigger the evaluation configuration
defined in the YAML file.

</details>


---

## Q131 · single choice

You have a Microsoft Foundry project.  
You need to deploy a model from the model catalog to support a search solution for internal policy  
documents. The model must generate vector representations of the text in the documents and of user  
queries.  
Which type of model should you use?

- ✅ **A.** an embedding model
- **B.** an image generation model
- **C.** a large language model (LLM)
- **D.** a small language model (SLM)

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q131 · pages 136–136

<details><summary>Explanation</summary>

Correct Answer:
A. an embedding model
Embedding models are specifically designed to convert text into numerical vector representations. These
vectors capture the semantic meaning of the text, enabling similarity-based search. In a search solution for
internal policy documents, both the documents and user queries must be converted into vectors so that
relevant matches can be identified using vector similarity. This is exactly the purpose of embedding models
in Azure AI Foundry and related services.
Incorrect answers:
B. an image generation model
This type of model is used to generate images from text prompts and is not suitable for text vectorization or
search.
C. a large language model (LLM)
LLMs are primarily used for text generation, summarization, and reasoning, not for generating vector
embeddings for search indexing.
D. a small language model (SLM)
SLMs are optimized for lightweight text processing tasks but are not designed specifically for generating
high-quality vector embeddings for semantic search.

</details>


---

## Q132 · single choice

You have a Microsoft Foundry project.  
You need to deploy a model from the model catalog to support real-time inference.  
The solution must meet the following requirements:  
Use key-based authentication.  
•  
Support real-time REST API access.  
•  
NOT consume the vCPU quota of the virtual machines in the Azure subscription.  
•  
Which type of deployment should you use?

- ✅ **A.** serverless API
- **B.** batch
- **C.** self-hosted container
- **D.** standard

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q132 · pages 137–137

<details><summary>Explanation</summary>

Correct Answer:
A. serverless API
A serverless API deployment in Microsoft Foundry allows you to expose the model through a real-time REST
endpoint without managing underlying infrastructure. It supports key-based authentication and provides
instant scalability for real-time inference. Most importantly, it does not consume the vCPU quota of your
Azure subscription because the compute is fully managed by the service, making it ideal for this requirement.
Incorrect answers:
B. batch
Batch deployments are designed for asynchronous, large-scale processing and do not support real-time
REST API inference.
C. self-hosted container
This option requires you to run the model on your own infrastructure, which would consume vCPU resources
in your Azure subscription.
D. standard
Standard deployments run on dedicated compute resources within your subscription, which means they
consume vCPU quota and do not meet the requirement.

</details>


---

## Q133 · pick 2

You have a Python application collects customer comments before posting them to a public forum.  
You need to send a text comment to Azure AI Content Safety and return the self-harm severity from the  
response. How should you complete the code?

🖼 [Source: AI-103 PDF · page 138](https://tstudy.vercel.app/content/ai-103/figure-418.png)

- **A.** categories=comment
- **B.** text=[comment]
- ✅ **C.** text=comment
- **D.** TextCategory.SELF_HARM(comment)
- **E.** analyze_image
- ✅ **F.** analyze_text
- **G.** moderate_text
- **H.** path.post

**Answer:** C, F

**Nguồn:** AI-103 1.pdf · Q133 · pages 137–139

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: AnalyzeTextOptions argument → text=comment; Client method → analyze_text)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 138](https://tstudy.vercel.app/content/ai-103/figure-419.png)

Correct Answer:
request = AnalyzeTextOptions(text=comment)
To analyze text using Azure AI Content Safety, you must create a request using AnalyzeTextOptions and pass
the actual text content. The parameter text=comment correctly sends the input string for analysis.
response = client.analyze_text(request)
The correct method to send the text analysis request using the ContentSafetyClient is analyze_text(). This
method processes the request and returns categorized analysis, including severity levels such as self-harm.
Incorrect answers:
AnalyzeTextOptions(categories=comment)
This is incorrect because categories is not used to pass input text; it is used to specify which categories to
evaluate.
AnalyzeTextOptions(text=[comment])
This is incorrect because the method expects a string, not a list of strings.
TextCategory.SELF_HARM(comment)
This is invalid syntax and TextCategory is used for filtering results, not for creating requests.
client.analyze_image(request)
This method is used for image analysis, not text.
client.moderate_text(request)
This is not the correct SDK method for Content Safety text analysis.
client.path("/text:analyze").post(request)
This is a low-level REST call pattern and not the recommended SDK method for this scenario.

</details>


---

## Q134 · single choice

You have a Microsoft Foundry project that contains an agent. The agent generates summaries from  
retrieved policy documents.  
You need to improve response completeness. The solution must be implemented in the logic of the  
application code before responses are returned.  
What should you do?

- ✅ **A.** Add a retry evaluation before the responses are returned.
- **B.** Decrease the value of the temperature parameter.
- **C.** Increase the value of the presence_penalty parameter
- **D.** Replace the model with a smaller deployment.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q134 · pages 139–140

<details><summary>Explanation</summary>

Correct Answer:
A. Add a retry evaluation before the responses are returned.
To improve response completeness, implementing a retry or evaluation mechanism in the application logic
allows the system to validate the generated response and regenerate it if it is incomplete. This approach
ensures higher-quality outputs by programmatically checking whether the response meets completeness
criteria before returning it to the user. This aligns directly with the requirement to implement the solution in
application code logic.
Incorrect answers:
B. Decrease the value of the temperature parameter.
Lowering temperature makes responses more deterministic but does not specifically improve completeness.
C. Increase the value of the presence_penalty parameter
This encourages introducing new topics, which may reduce focus rather than improve completeness.
D. Replace the model with a smaller deployment.
A smaller model typically has lower capability and may reduce response quality and completeness.

</details>


---

## Q135 · pick 3

You are developing an application that will detect faulty components produced on a factory production  
line. The components are specific to your business.  
You need to use the Azure Custom Vision API to help detect common faults.  
Which three actions should you perform in sequence?

🖼 [Source: AI-103 PDF · page 140](https://tstudy.vercel.app/content/ai-103/figure-424.png)

- **A.** Initialize a training dataset
- ✅ **B.** Train a classifier model
- ✅ **C.** Create a project
- ✅ **D.** Upload and tag images
- **E.** Train an object detection model

**Answer:** C, D, B

**Nguồn:** AI-103 1.pdf · Q135 · pages 140–141

<details><summary>Explanation</summary>

(Dạng gốc: sắp xếp thứ tự — thứ tự đúng: 1. Create a project → 2. Upload and tag images → 3. Train a classifier model)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 140](https://tstudy.vercel.app/content/ai-103/figure-425.png)

Correct Answer:
1. Create a project.
The first step in Azure Custom Vision is to create a project where you define the type of model (classification
or object detection) and organize your dataset and training process.
2. Upload and tag images.
After creating the project, you must upload images of the components and tag them appropriately (for
example, faulty vs non-faulty). Tagging is critical because it provides labeled data for supervised learning.
3. Train the classifier model.
Once the images are uploaded and tagged, you train the model so it can learn patterns and detect faults
based on the labeled dataset.
Incorrect answers:
Initialize the training dataset.
This is not an explicit step in Azure Custom Vision; dataset preparation happens during image upload and
tagging.
Train the object detection model.
Object detection is used when identifying locations of objects in images, not just classifying faults. The
scenario focuses on detecting faulty components, which aligns with classification.

</details>


---

## Q136 · single choice

You have an Azure subscription.  
You plan to build an app that will use the Azure AI DALL-E model. You need to deploy the model.  
What should you use?

- **A.** the Azure SDK for Python and PowerShell cmdlets.
- **B.** the Azure SDK for JavaScript and Azure Machine Learning Studio.
- ✅ **C.** Microsoft Foundry and the Azure Command Line Interface (CLI)
- **D.** the Azure portal and Microsoft Graph API

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q136 · pages 141–142

<details><summary>Explanation</summary>

Correct Answer:
C. Microsoft Foundry and the Azure Command Line Interface (CLI)
Azure AI DALL-E models are part of Azure AI Foundry (formerly Azure AI Studio) and are deployed through
model catalog capabilities. You can deploy these models using Microsoft Foundry UI or automate
deployments using the Azure CLI. This combination supports proper provisioning, deployment, and
management of generative AI models like DALL-E.
Incorrect answers:
A. the Azure SDK for Python and PowerShell cmdlets.
These can interact with deployed models but are not used to deploy DALL-E models from the model catalog.
B. the Azure SDK for JavaScript and Azure Machine Learning Studio.
Azure Machine Learning Studio is not used for deploying Azure AI DALL-E models from the Foundry model
catalog.
D. the Azure portal and Microsoft Graph API
Microsoft Graph API is unrelated to deploying AI models and cannot be used for this purpose.

</details>


---

## Q137 · single choice

You have a custom named entity recognition (NER) project in Azure Language in Foundry Tools for  
support tickets. The schema for the project contains an entity type named ContactInfo.  
In tagged training files, ContactInfo is used for phone numbers, email addresses, and social media handles.  
Model evaluation shows low precision for ContactInfo, including false positives in which nearby text is  
extracted as ContactInfo.  
You need to improve the precision of the project.  
What should you do before retraining the model?

- **A.** Lower the confidence threshold for ContactInfo.
- **B.** Trigger an auto-labeling job.
- **C.** Add more support tickets as training data and label more ContactInfo entities.
- ✅ **D.** Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q137 · pages 142–143

<details><summary>Explanation</summary>

Correct Answer:
D. Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span.
Low precision and false positives indicate that the model is overgeneralizing the ContactInfo entity. By
splitting this broad entity into more specific entities such as Phone, Email, and SocialMedia, you provide
clearer distinctions and reduce ambiguity. This improves the model’s ability to correctly identify only the
intended spans and avoid extracting nearby irrelevant text. Fine-grained labeling is a key technique to
improve precision in NER models.
Incorrect answers:
A. Lower the confidence threshold for ContactInfo.
Lowering the threshold would increase false positives, worsening precision.
B. Trigger an auto-labeling job.
Auto-labeling may propagate existing labeling issues and does not address the root cause of low precision.
C. Add more support tickets as training data and label more ContactInfo entities.
Adding more data without refining the entity definition may continue the same ambiguity and not significantly
improve precision.

</details>


---

## Q138 · single choice

You are building a text-to-speech solution that uses Azure Speech in Foundry Tools to read  
instructions from the script in a text file.  
You discover that the solution often pronounces technical terms incorrectly.  
You need to prevent the incorrect pronunciations. The solution must minimize development effort.  
What should you do?

- **A.** From Speech Studio, train a custom neural voice
- ✅ **B.** Use Speech Synthesis Markup Language (SSML) to specify phonemes.
- **C.** Use Speech Synthesis Markup Language (SSML) to apply say as rules.
- **D.** Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice.
- **E.** From Azure OpenAI use the Whisper model.

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q138 · pages 143–143

<details><summary>Explanation</summary>

$7a

</details>


---

## Q139 · pick 2

You need to create a new resource that will be used to perform sentiment analysis and optical  
character recognition (OCR).  
The solution must meet the following requirements:  
Use a single key and endpoint to access multiple services.  
•  
Consolidate billing for future services that you might use.  
•  
Support the use of Azure Vision in Foundry Tools in the future.  
•  
How should you complete the HTTP request to create the new resource?

🖼 [Source: AI-103 PDF · page 144](https://tstudy.vercel.app/content/ai-103/figure-434.png)

- **A.** PATCH
- **B.** POST
- ✅ **C.** PUT
- ✅ **D.** CognitiveServices
- **E.** ComputerVision
- **F.** TextAnalytics

**Answer:** C, D

**Nguồn:** AI-103 1.pdf · Q139 · pages 144–146

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: HTTP method → PUT; Resource kind → CognitiveServices)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 145](https://tstudy.vercel.app/content/ai-103/figure-437.png)

$7b

</details>


---

## Q140 · single choice

You are developing a new sales system that will process user-generated video and text from a public-  
facing website.  
You plan to notify users that their data has been processed by the sales system. Which responsible AI  
principle does this help meet?

- **A.** fairness
- ✅ **B.** transparency
- **C.** inclusiveness
- **D.** reliability and safety

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q140 · pages 146–147

<details><summary>Explanation</summary>

Correct Answer:
B. transparency
Transparency in responsible AI refers to informing users how their data is being used and how systems
operate. By notifying users that their video and text data are being processed by the sales system, you
ensure openness about data usage. This builds trust and aligns with the principle of making AI systems
understandable and clear to users.
Incorrect answers:
A. fairness
Fairness focuses on eliminating bias and ensuring equitable treatment, not informing users about data
processing.
C. inclusiveness
Inclusiveness ensures accessibility and usability for diverse groups, not transparency of data usage.
D. reliability and safety
This principle relates to consistent and safe system behavior, not user awareness of data processing.

</details>


---

## Q141 · pick 2

You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains  
unstructured JSON data and the text from scanned PDF documents.  
Which projection type should you use for each data type?

🖼 [Source: AI-103 PDF · page 147](https://tstudy.vercel.app/content/ai-103/figure-448.png)

- **A.** File projection
- ✅ **B.** Object projection
- **C.** Table projection
- **D.** File projection
- **E.** Object projection
- ✅ **F.** Table projection

**Answer:** B, F

**Nguồn:** AI-103 1.pdf · Q141 · pages 147–148

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Store JSON documents → Object projection; Store extracted text → Table projection)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 147](https://tstudy.vercel.app/content/ai-103/figure-443.png)

Correct Answer:
JSON data: Object projection
Object projection is used for structured or semi-structured data like JSON. It preserves the hierarchical
structure of the JSON documents, making it suitable for storing and querying complex objects in the
knowledge store.
Extracted text data: Table projection
Table projection is ideal for flattened, structured representations of data such as extracted text from
documents. It organizes the data into rows and columns, making it efficient for querying and analysis,
especially for OCR-extracted text from scanned PDFs.
Incorrect answers:
File projection
File projection is used to store enriched documents as files (for example, images or PDFs), not for structured
JSON or extracted text intended for querying.

</details>


---

## Q142 · single choice

You have an Azure subscription that contains an Azure App Service app named App1. You provision a  
Microsoft Foundry Service resource named CSAccount1.  
You need to configure App1 to access CSAccount1. The solution must minimize administrative effort.  
What should you use to configure App1?

- ✅ **A.** the endpoint URI and subscription key
- **B.** the endpoint URI and an OAuth token
- **C.** the endpoint URI and a shared access signature (SAS) token
- **D.** a system assigned managed identity and an X.509 certificate

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q142 · pages 148–148

<details><summary>Explanation</summary>

Correct Answer:
A. the endpoint URI and subscription key
Using the endpoint URI along with a subscription key is the simplest and most commonly used method to
authenticate an App Service app with an Azure AI (Foundry) resource. It requires minimal configuration and
administrative effort, making it ideal for quick integration scenarios. The application simply includes the key
in the request headers to securely access the service.
Incorrect answers:
B. the endpoint URI and an OAuth token
This requires additional setup with Microsoft Entra ID and token management, increasing administrative
effort.
C. the endpoint URI and a shared access signature (SAS) token
SAS tokens are typically used for Azure Storage, not for accessing Azure AI services.
D. a system assigned managed identity and an X.509 certificate
This involves more complex configuration and certificate management, which does not minimize
administrative effort.

</details>


---

## Q143 · pick 2

You are building a model to detect objects in images.  
The performance of the model based on training data is shown in the following exhibit.

🖼 [Source: AI-103 PDF · page 149](https://tstudy.vercel.app/content/ai-103/figure-454.png)

Use the drop-down menus to select the answer choice that completes each statement based on the  
information presented in the graphic.

🖼 [Source: AI-103 PDF · page 149](https://tstudy.vercel.app/content/ai-103/figure-449.png)

- ✅ **A.** 0
- **B.** 25
- **C.** 30
- **D.** 50
- **E.** 100
- **F.** 0
- ✅ **G.** 25
- **H.** 30
- **I.** 50
- **J.** 100

**Answer:** A, G

**Nguồn:** AI-103 1.pdf · Q143 · pages 148–150

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: False positive percentage → 0; True positives / (True positives + False negatives) → 25)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 150](https://tstudy.vercel.app/content/ai-103/figure-452.png)

Correct Answer:
0
Precision is given as 100%.
Precision = True Positives / (True Positives + False Positives).
If precision is 100%, it means False Positives = 0.
So, the percentage of false positives is 0%.
25
Recall is given as 25%.
Recall = True Positives / (True Positives + False Negatives).
So the required value is directly the recall value, which is 25%.

</details>


---

## Q144 · pick 3

You are developing an application that will use Azure AI Search for internal documents. You need to  
implement document-level filtering for Azure AI Search.  
Which three actions should you include in the solution?

- ✅ **A.** Add allowed groups to each index entry
- **B.** Create one index per group.
- **C.** Send access tokens from Microsoft Entra ID, with the search request.
- **D.** Retrieve all the groups.
- ✅ **E.** Retrieve the group memberships of the user
- ✅ **F.** Supply the groups as a filter for the search requests

**Answer:** A, E, F

**Nguồn:** AI-103 1.pdf · Q144 · pages 150–151

<details><summary>Explanation</summary>

$7c

</details>


---

## Q145 · pick 3

You have a web app that uses Azure AI Search.  
When reviewing activity you see greater than expected search query volumes. You suspect that the query  
key is compromised.  
You need to prevent unauthorized access to the search endpoint and ensure that users only have read only  
access to the documents collection. The solution must minimize app downtime.  
Which three actions should you perform in sequence?

🖼 [Source: AI-103 PDF · page 151](https://tstudy.vercel.app/content/ai-103/figure-455.png)

- **A.** Regenerate the primary admin key
- **B.** Regenerate the secondary admin key
- **C.** Change the application to use the secondary admin key
- ✅ **D.** Add a new query key
- ✅ **E.** Change the application to use the new query key
- ✅ **F.** Delete the compromised query key

**Answer:** D, E, F

**Nguồn:** AI-103 1.pdf · Q145 · pages 151–152

<details><summary>Explanation</summary>

(Dạng gốc: sắp xếp thứ tự — thứ tự đúng: 1. Add a new query key → 2. Change the application to use the new query key → 3. Delete the compromised query key)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 152](https://tstudy.vercel.app/content/ai-103/figure-464.png)

Correct Answer:
Add a new query key
To maintain availability and minimize downtime, you should first create a new query key. Query keys provide
read-only access, which meets the requirement that users should only have read access to the documents.
Change the app to use the new key
Next, update the application to use the newly created query key. This ensures uninterrupted service while
transitioning away from the compromised key.
Delete the compromised key
Finally, remove the compromised key to prevent any further unauthorized access to the search endpoint.
Incorrect answers:
Regenerate the primary admin key
Admin keys provide full control and are not intended for query operations; regenerating them does not
address compromised query keys.
Regenerate the secondary admin key
Same as above, admin keys are not used for query-only access.
Change the app to use the secondary admin key
Using admin keys violates the requirement of read-only access and increases security risk.

</details>


---

## Q146 · single choice

You have an Azure AI Search indexer that ingest PDF policy manuals.  
Client applications must display page-level citations that have bounding polygons for both text and images.  
You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset.  
The solution must meet the following requirements:  
Provide text and image location metadata.  
•  
Extract tables that span multiple pages.  
•  
What should you add?

- **A.** Document Layout
- **B.** Document Extraction
- ✅ **C.** Azure Content Understanding
- **D.** GenAI Prompt

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q146 · pages 152–153

<details><summary>Explanation</summary>

$7d

</details>


---

## Q147 · single choice

You are designing a content management system.  
You need to ensure that the reading experience is optimized for users who have reduced comprehension and  
learning differences, such as dyslexia. The solution must minimize development effort.  
Which Azure service should you include in the solution?

- **A.** Azure Document Intelligence in Foundry Tools
- **B.** Azure Language in Foundry Tools
- ✅ **C.** Azure AI Immersive Reader
- **D.** Azure Translator in Foundry Tools

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q147 · pages 153–154

<details><summary>Explanation</summary>

Correct Answer:
C. Azure AI Immersive Reader
Azure AI Immersive Reader is specifically designed to improve reading comprehension and accessibility for
users, including those with dyslexia and other learning differences. It provides features such as text-to-
speech, syllable breakdown, line focus, and customizable text display. It is easy to integrate and requires
minimal development effort, making it the best choice for optimizing the reading experience.
Incorrect answers:
A. Azure Document Intelligence in Foundry Tools
Used for extracting structured data from documents, not for improving reading accessibility.
B. Azure Language in Foundry Tools
Provides NLP capabilities like sentiment analysis and entity recognition, but does not enhance reading
experience.
D. Azure Translator in Foundry Tools
Used for language translation, not for improving comprehension or accessibility for users with learning
differences.

</details>


---

## Q148 · pick 2

You are building a custom vision model that will be deployed as part of an iOS app. You have images  
of cats and dogs. Each image contains either a cat or a dog.  
You need to use the Azure Custom Vision service to detect whether the image is of a cat or a dog.  
How should you configure the project in the Azure Custom Vision portal?

🖼 [Source: AI-103 PDF · page 155](https://tstudy.vercel.app/content/ai-103/figure-465.png)

- ✅ **A.** Standard
- **B.** Global Standard
- **C.** Global Provisioned
- **D.** Once the current version expires
- ✅ **E.** Opt out of automatic model version upgrades
- **F.** Upgrade once a new default version becomes available

**Answer:** A, E

**Nguồn:** AI-103 1.pdf · Q148 · pages 154–157

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Deployment type → Standard; Version update policy → Opt out of automatic model version upgrades)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 156](https://tstudy.vercel.app/content/ai-103/figure-468.png)

$7e

</details>


---

## Q149 · single choice

You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol  
(MCP) tool named kbsearch that queries a knowledge base stored in Azure AI Search.  
Some agent runs return answers from the base model without invoking the knowledge base, which results in  
responses without grounded citations.  
You are provided with the following code snippet that runs the agent.

🖼 [Source: AI-103 PDF · page 157](https://tstudy.vercel.app/content/ai-103/figure-471.png)

You need to deterministically force the agent to invoke kbsearch on each run. What should you do?

- **A.** Add the response_format parameter to the create_and_process() method call.
- **B.** Replace create_and_process() method with the create_thread_and_process_run() method.
- **C.** Add the toolset parameter to the create_and_process() method call.
- ✅ **D.** Add the tool_choice parameter to the create_and_process() method call.

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q149 · pages 157–158

<details><summary>Explanation</summary>

Correct Answer:
D. Add the tool_choice parameter to the create_and_process() method call.
This is correct because tool_choice controls which tool the agent must use during a run. By specifying the
kbsearch MCP tool as the required tool, you can prevent the agent from answering directly from the base
model and ensure that the knowledge base is invoked on every run, providing grounded responses and
citations.
Incorrect Answers:
A. Add the response_format parameter to the create_and_process() method call.
This controls the structure or format of the model's response and does not force a specific tool invocation.
B. Replace create_and_process() with create_thread_and_process_run().
This changes how the thread and run are created but does not force the agent to invoke a particular tool.
C. Add the toolset parameter to the create_and_process() method call.
A toolset defines or provides the tools available to the agent, but it does not deterministically force the agent
to invoke kbsearch.

</details>


---

## Q150 · single choice

You are developing a text processing solution. You have the following function.

🖼 [Source: AI-103 PDF · page 158](https://tstudy.vercel.app/content/ai-103/figure-474.png)

You call the function and use the following string as the second argument. Our tour of London included a  
visit to Buckingham Palace  
What will be the output of the function?

- ✅ **A.** London and Buckingham Palace only
- **B.** Tour and visit only
- **C.** Our tour of London included a visit to Buckingham Palace
- **D.** London and Tour only

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q150 · pages 158–159

<details><summary>Explanation</summary>

Correct Answer:
A. London and Buckingham Palace only
This is correct because recognize_entities() identifies named entities in the supplied text and returns them
through response.entities. In this sentence, London is recognized as a location entity and Buckingham
Palace as a location/landmark entity. The function then prints the recognized entity text, rather than printing
every word in the sentence.
Incorrect Answers:
B. Tour and visit only
These are common words and are not recognized as named entities by the entity recognition service.
C. Our tour of London included a visit to Buckingham Palace
The function does not print the original input text. It only prints the text of entities identified by
recognize_entities().
D. London and Tour only
“Tour” is not a named entity in this context, while Buckingham Palace is recognized as an entity.

</details>


---

## Q151 · pick 1

You are building a solution that students will use to find references for essays. You use the following  
code to start building the solution.

🖼 [Source: AI-103 PDF · page 159](https://tstudy.vercel.app/content/ai-103/figure-477.png)

For each of the following statements, select Yes is the statement is true. Otherwise, select No.

🖼 [Source: AI-103 PDF · page 159](https://tstudy.vercel.app/content/ai-103/q151-linked-entities-answer-area.png)

- **A.** The code will detect the language of documents.
- **B.** The url attribute returned for each linked entity will be a Bing search link.
- ✅ **C.** The matches attribute returned for each linked entity will provide the location in a document where the entity is referenced.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q151 · pages 159–160

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 160](https://tstudy.vercel.app/content/ai-103/figure-481.png)

$7f

</details>


---

## Q152 · pick 2

You have a Microsoft Foundry project for a support ticket triage app that reads ticket text from a  
database.  
You need to ensure that the app meets the following requirements:  
Compares candidate models by quality, cost, and throughput  
•  
Prevents hosting model weights in the Azure subscription  
•  
What should you configure?

🖼 [Source: AI-103 PDF · page 161](https://tstudy.vercel.app/content/ai-103/figure-484.png)

- **A.** Configure private endpoint access.
- **B.** Use deployment lists and license tabs.
- **C.** Use tool catalog connections and run traces.
- ✅ **D.** Use model catalog leaderboards and model cards.
- **E.** Bring your own model.
- **F.** Build a vector index.
- ✅ **G.** Use a serverless deployment.
- **H.** Use a managed compute deployment.

**Answer:** D, G

**Nguồn:** AI-103 1.pdf · Q152 · pages 160–162

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Model evaluation → Use model catalog leaderboards and model cards.; Deployment option → Use a serverless deployment.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 161](https://tstudy.vercel.app/content/ai-103/figure-485.png)


Model evaluation → Use model catalog leaderboards and model cards.
Model catalog leaderboards and model cards provide information that helps compare candidate models
based on factors such as quality, cost, and throughput. This allows you to select an appropriate model
before deploying it.
Deployment option → Use a serverless deployment.
A serverless deployment provides access to the model through an API without hosting the model weights
directly in your Azure subscription. The model is hosted and managed by the model provider, helping satisfy
the requirement to prevent model weights from being hosted in your Azure environment.
Incorrect Answers:
Configure private endpoint access.
This controls network access to resources; it does not provide model comparison information or determine
where model weights are hosted.
Use deployment lists and license tabs.
These provide deployment and licensing information but are not the primary mechanism for comparing
model quality, cost, and throughput.
Use tool catalog connections and run traces.
These relate to tools and application observability, not model evaluation or serverless model hosting.
Bring your own model.
This involves supplying and hosting your own model, which does not meet the requirement to avoid hosting
model weights in the Azure subscription.
Build a vector index.
A vector index is used for semantic/vector search and retrieval, not model evaluation or model deployment.
Use a managed compute deployment.
Managed compute deploys the model to compute resources in your Azure environment, so it does not meet
the requirement to prevent model weights from being hosted in the Azure subscription.

</details>


---

## Q153 · single choice

You have an Azure subscription.  
You need to build an app that will compare documents for semantic similarity. The solution must meet the  
following requirements:  
Return numeric vectors that represent the tokens of each document.  
•  
Minimize development effort.  
•  
Which Azure OpenAI model should you use?

- **A.** GPT-3.5
- ✅ **B.** embeddings
- **C.** GPT-4
- **D.** DALL-E

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q153 · pages 162–163

<details><summary>Explanation</summary>

Correct Answer:
B. embeddings
Azure OpenAI embedding models convert text into numeric vectors that capture the semantic meaning of
the text. These vectors can then be compared using similarity measures to determine how semantically
similar two documents are. Using the built-in embeddings capability minimizes development effort because
you do not need to build your own language representation model.
Incorrect Answers:
A. GPT-3.5
GPT-3.5 is a generative language model designed primarily for generating and understanding text, not
directly producing embedding vectors for semantic similarity.
C. GPT-4
GPT-4 is a generative language model and is not the appropriate model for directly generating document
embeddings.
D. DALL-E
DALL-E is designed for image generation and is not intended for converting document text into semantic
embedding vectors.

</details>


---

## Q154 · pick 1

You are building an app that will provide users with definitions of common AI terms. You create the  
following Python code.

🖼 [Source: AI-103 PDF · page 163](https://tstudy.vercel.app/content/ai-103/figure-490.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

🖼 [Source: AI-103 PDF · page 163](https://tstudy.vercel.app/content/ai-103/q154-llm-statements-answer-area.png)

- **A.** The response will contain an explanation of large language models (LLMs) that has a high degree of certainty.
- **B.** Changing “what is an LLM?” to “What is an LLM in the context of AI models?” will produce the intended response.
- ✅ **C.** Changing “You are a helpful assistant.” to “You must answer only within the context of AI language models.” will give a higher likelihood of producing the intended response.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q154 · pages 163–164

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 164](https://tstudy.vercel.app/content/ai-103/q154-llm-statements-answer-area-correct.png)

Statement 1 --> No
The prompt “What is an LLM?” is ambiguous because the abbreviation “LLM” can have different meanings.
The code does not provide enough contextual instruction to guarantee that the response will explain Large
Language Models with a high degree of certainty.
Statement 2 --> No
Changing the prompt to “What is an LLM in the context of AI models?” adds context and may make the
intended meaning clearer. However, the wording “will produce the intended response” implies a guarantee.
Prompt changes can increase the likelihood of a desired response but cannot guarantee a specific output.
Statement 3 --> Yes
Changing the system message to “You must answer only within the context of AI language models.”
provides a stronger and more specific instruction about the intended domain. System-level instructions have
a higher priority than user messages, so this change increases the likelihood that the model will interpret
LLM as Large Language Model and provide the intended response.

</details>


---

## Q155 · single choice

You have an Azure OpenAI model named AI1.  
You are building a web app named App1 by using the Azure OpenAI SDK. You need to configure App1 to  
connect to AI1.

What information must you provide?

- **A.** the deployment name, key, and model name
- **B.** the endpoint, key, and model type
- ✅ **C.** the deployment name, endpoint, and key
- **D.** the endpoint, key, and model name

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q155 · pages 164–165

<details><summary>Explanation</summary>

Correct Answer:
C. the deployment name, endpoint, and key

To connect an application to an Azure OpenAI model, the SDK needs the endpoint, key, and deployment name. The endpoint identifies the Azure OpenAI resource, the key authenticates the application, and the deployment name identifies the specific model deployment. Applications generally call a deployment rather than specifying the underlying model name directly.

Incorrect Answers:
A. the deployment name, key, and model name
This is missing the endpoint, which tells the SDK where the Azure OpenAI resource is located. The model name is not a substitute for the deployment name when making a request.

B. the endpoint, key, and model type
Although the endpoint and key are required, the SDK needs the deployment name to identify which deployed model should process the request. The model type alone does not identify the specific deployment.

D. the endpoint, key, and model name
The model name describes the underlying model, but Azure OpenAI applications target the deployment name when sending a request.

</details>


---

## Q156 · single choice

You are building a solution in Azure that will use Azure Language in Foundry Tools service to process  
sensitive customer data.  
You need to ensure that only specific Azure processes can access the Language service. The solution must  
minimize administrative effort.  
What should you include in the solution?

- **A.** Azure Application Gateway
- **B.** a virtual network gateway
- **C.** IPsec rules
- ✅ **D.** virtual network rules

**Answer:** D

**Nguồn:** AI-103 1.pdf · Q156 · pages 165–166

<details><summary>Explanation</summary>

Correct Answer:
D. virtual network rules
Virtual network rules allow you to restrict access to an Azure AI Language resource so that only traffic
originating from specified virtual networks and subnets can reach the service. This provides network-level
isolation for sensitive customer data without requiring you to manage individual IP addresses or complex
network infrastructure. It also minimizes administrative effort because access can be controlled by defining
which Azure virtual networks are trusted.
Incorrect Answers:
A. Azure Application Gateway
Azure Application Gateway is primarily used as a Layer 7 web traffic load balancer and reverse proxy. It can
provide features such as URL-based routing and Web Application Firewall protection, but it is not the
appropriate mechanism for restricting which Azure virtual networks can access the Language service.
B. a virtual network gateway
A virtual network gateway is used to connect an Azure virtual network to other networks, such as an on-
premises network through VPN or ExpressRoute. It does not by itself restrict access to an Azure AI
Language resource.
C. IPsec rules
IPsec is used to provide encrypted and authenticated network communication, commonly for VPN
connections. It is not the Azure AI Language resource access-control mechanism described in the question.

</details>


---

## Q157 · pick 2

You have an Azure subscription that contains a Microsoft Foundry Service resource named  
CSAccount1 and a virtual network named VNet1. CSAaccount1 is connected to VNet1.  
You need to ensure that only specific resources can access CSAccount1. The solution must meet the  
following requirements:  
Prevent external access to CSAccount1.  
•  
Minimize administrative effort.  
•  
Which two actions should you perform?

- **A.** AzureKeyCredential()
- ✅ **B.** DefaultAzureCredential()
- **C.** None
- **D.** create_version
- ✅ **E.** get
- **F.** get_version

**Answer:** B, E

**Nguồn:** AI-103 1.pdf · Q157 · pages 166–167

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: credential → DefaultAzureCredential(); project_client.agents method → get)

#### Original answer from the PDF


Correct Answer:
A. In CSAccount1, modify the virtual network settings.
The Microsoft Foundry Service resource can be configured to restrict network access so that requests are
allowed only from selected virtual networks. By changing the network settings of CSAccount1, you can
prevent access from the public/external network and allow access through the approved virtual network. This
is the resource-side configuration needed to enforce the restriction.
C. In VNet1, enable a service endpoint for CSAccount1.
A service endpoint extends the identity of a virtual network to an Azure service and allows the service to
recognize traffic coming from an authorized subnet. Enabling the endpoint for CSAccount1 on VNet1 allows
resources in the appropriate subnet to access the service while the resource's network rules restrict access
from outside the approved network. This provides the required network isolation without the additional
management overhead of more complex networking solutions.
Incorrect Answers:
B. In VNet1, create a virtual subnet.
A subnet is required for many Azure networking configurations, but simply creating a subnet does not restrict
access to CSAccount1. The subnet must be associated with the appropriate service endpoint and the service
itself must be configured to allow that network.
D. In CSAccount1, configure the Access control (IAM) settings.
IAM controls who has permission to perform actions on the Azure resource through Azure role-based
access control. It does not prevent external network access to the service. Network access restrictions
should instead be configured through the resource's networking settings.
E. In VNet1, modify the virtual network settings.
Changing general VNet settings does not by itself restrict access to CSAccount1. The required configuration
is specifically the service endpoint on the VNet/subnet and the corresponding network restriction on
CSAccount1.

</details>


---

## Q158 · pick 2

You have a collection of press releases stored as PDF files.  
You need to extract text from the files and perform sentiment analysis.  
Which service should you use for each task?

🖼 [Source: AI-103 PDF · page 168](https://tstudy.vercel.app/content/ai-103/figure-503.png)

- **A.** Azure AI Search
- **B.** Azure Vision in Foundry Tools
- ✅ **C.** Azure Document Intelligence in Foundry Tools
- **D.** Azure AI Search
- **E.** Azure AI Computer Vision
- **F.** Azure Document Intelligence in Foundry Tools
- ✅ **G.** Azure Language in Foundry Tools

**Answer:** C, G

**Nguồn:** AI-103 1.pdf · Q158 · pages 167–169

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Extract text → Azure Document Intelligence in Foundry Tools; Perform sentiment analysis → Azure Language in Foundry Tools)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 168](https://tstudy.vercel.app/content/ai-103/figure-504.png)

Correct Answer:
Extract text → Azure Document Intelligence in Foundry Tools
Azure Document Intelligence is designed to extract text and structured information from documents,
including PDF files. It can process the contents of the press releases and make the extracted text available
for further analysis.
Perform sentiment analysis → Azure Language in Foundry Tools
Azure Language provides sentiment analysis capabilities that determine whether text expresses positive,
negative, neutral, or mixed sentiment. Therefore, once the text has been extracted from the PDFs, Azure
Language is the appropriate service for analyzing its sentiment.
Incorrect Answers:
Azure AI Search
Azure AI Search is primarily used to index and search content, including extracted document text. It is not
the appropriate service for performing sentiment analysis.
Azure Vision in Foundry Tools / Azure AI Computer Vision
Vision services are intended for analyzing images and visual content, such as detecting objects, describing
images, or extracting text from images. They are not the appropriate choice for sentiment analysis of press-
release text.

</details>


---

## Q159 · single choice

You are designing an Azure AI solution to identify defective products on a production line.  
You have a real-time video feed and an image library of sample products that are approved or rejected  
manually. You need to recommend a service that meets the following requirements:  
Monitors the video feed and identifies the defective products.  
•  
Can train a new model by using the image library.  
•  
Minimizes development effort.  
•  
What should you recommend?

- **A.** Azure Vision in Foundry Tools
- **B.** Azure AI Video Indexer
- ✅ **C.** Azure AI Custom Vision
- **D.** Azure Machine Learning

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q159 · pages 169–170

<details><summary>Explanation</summary>


Correct Answer:
C. Azure AI Custom Vision
Azure AI Custom Vision is designed to create custom computer vision models using your own labeled
images. You can use the manually labeled library of approved and rejected products to train an image
classification or object detection model that distinguishes defective products from acceptable ones. The
trained model can then be integrated into an application that processes frames from the real-time video
feed, allowing the application to identify defective products while minimizing development effort because
Custom Vision provides the training and prediction infrastructure.
Incorrect Answers:
A. Azure Vision in Foundry Tools
Azure Vision provides prebuilt capabilities for analyzing images, such as image descriptions, object detection,
and OCR. However, it does not provide the same straightforward custom model training from your labeled
product image library that Custom Vision provides.
B. Azure AI Video Indexer
Video Indexer is designed to analyze and extract insights from video, such as people, objects, scenes,
speech, and other video content. It is not intended for training a custom defect-detection model from a
manually labeled image library.
D. Azure Machine Learning
Azure Machine Learning can be used to build and train custom computer vision models, but doing so
generally requires more development, data-science, and model-management effort. Since the requirement
explicitly says to minimize development effort, Custom Vision is the better choice.

</details>


---

## Q160 · pick 1

You run the following command.

🖼 [Source: AI-103 PDF · page 170](https://tstudy.vercel.app/content/ai-103/figure-509.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

🖼 [Source: AI-103 PDF · page 170](https://tstudy.vercel.app/content/ai-103/figure-510.png)

- **A.** Going to http://localhost:5000/status will query the Azure endpoint to verify whether the API key used to start the container is valid.
- **B.** The container logging provider will write log data.
- ✅ **C.** Going to http://localhost:5000/swagger will provide the details to access the documentation for the available endpoints.

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q160 · pages 170–171

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 171](https://tstudy.vercel.app/content/ai-103/figure-513.png)

Statement 1 --> No
The /status endpoint is used to verify whether the API key used to start the container is valid. However, it
performs this verification without causing an endpoint query to Azure. Therefore, the statement is incorrect
because it specifically says that /status will query the Azure endpoint.
Statement 2 --> No
The container logging provider does not automatically write persistent log data simply because the container
is started. Logging providers such as Disk or Fluentd must be explicitly configured. The command shown
only provides the EULA, billing endpoint, and API key, so no additional logging provider has been configured.
Statement 3 --> Yes
The /swagger endpoint provides the Swagger/OpenAPI documentation for the endpoints exposed by the
container. It can be used to view the available APIs and the information required to interact with them.

</details>


---

## Q161 · single choice

You are developing an app that will use the Speech and Language APIs.  
You need to provision resources for the app. The solution must ensure that each service is accessed by  
using a single endpoint and credential.  
Which type of resource should you create?

- **A.** Azure Language in Foundry Tools
- ✅ **B.** Microsoft Foundry service
- **C.** Azure Speech in Foundry Tools
- **D.** Content Safety in Foundry Control Plane

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q161 · pages 171–172

<details><summary>Explanation</summary>

Correct Answer:
B. Microsoft Foundry service
A Microsoft Foundry service is the appropriate choice when an application needs to use multiple Foundry
Tools, such as Azure Speech and Azure Language, through a shared resource. A multi-service resource
provides a single endpoint and credential that can be used to access multiple supported AI services,
reducing the need to provision and manage separate resources and credentials. Microsoft documentation
confirms that Azure AI multi-service resources support access to multiple Foundry Tools through a single
endpoint and API key.
Incorrect Answers:
A. Azure Language in Foundry Tools
This is a single-service resource intended for Language capabilities. It would not provide the required
shared resource for both Speech and Language.
C. Azure Speech in Foundry Tools
Similarly, an Azure Speech resource is focused on Speech capabilities. It does not provide the single shared
endpoint and credential for both Speech and Language that the question requires.
D. Content Safety in Foundry Control Plane
Content Safety is used to detect and mitigate potentially harmful content. It is unrelated to provisioning a
shared resource for the Speech and Language APIs.

</details>


---

## Q162 · single choice

You are building an app that will include one million scanned magazine articles. Each article will be  
stored as an image file.  
You need to configure the app to extract text from the images. The solution must minimize development  
effort.  
What should you include in the solution?

- **A.** Azure Document Intelligence in Foundry Tools
- ✅ **B.** the Read API in Azure Vision in Foundry Tools
- **C.** Azure Vision in Foundry Tools Image Analysis
- **D.** Azure Language in Foundry Tools

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q162 · pages 172–173

<details><summary>Explanation</summary>


Correct Answer:
B. the Read API in Azure Vision in Foundry Tools
The Read API is specifically designed to perform OCR (optical character recognition) and extract printed or
handwritten text from images. Since the magazine articles are stored as image files, the Read API can
process the images and return the recognized text. It is also a prebuilt capability, so it requires less
development effort than building a custom text-extraction solution.
Incorrect Answers:
A. Azure Document Intelligence in Foundry Tools
Document Intelligence is primarily designed for extracting text, fields, tables, and structured information
from documents such as forms, invoices, receipts, and other document formats. For a large collection of
article images where the primary requirement is simply OCR text extraction, the Read API is the more direct
choice.
C. Azure Vision in Foundry Tools Image Analysis
Image Analysis can perform several image-understanding tasks, including OCR capabilities, but the Read API
is specifically optimized for text extraction. Therefore, when the requirement is simply to extract text from a
very large collection of scanned images, Read is the more appropriate service.
D. Azure Language in Foundry Tools
Azure Language is designed for analyzing text that has already been extracted, with capabilities such as
sentiment analysis, entity recognition, and summarization. It does not perform the initial OCR extraction from
image files.

</details>


---

## Q163 · pick 3

You are building an app that will scan confidential documents and use the Azure Language in Foundry  
Tools service to analyze the contents.  
You provision a Microsoft Foundry Service resource.  
You need to ensure that the app can make requests to the Azure Language in Foundry Tools service  
endpoint. The solution must ensure that confidential documents remain on-premises.  
Which three actions should you perform in sequence?

🖼 [Source: AI-103 PDF · page 173](https://tstudy.vercel.app/content/ai-103/figure-518.png)

- **A.** Pull an image from Docker Hub.
- ✅ **B.** Run the container and specify an API key and the Endpoint URL of the Azure AI resource.
- **C.** Provision an on-premises Kubernetes cluster that is isolated from the internet.
- ✅ **D.** Provision an on-premises Kubernetes cluster that has internet connectivity.
- **E.** Provision an Azure Kubernetes Service (AKS) resource.
- **F.** Run the container and specify an App ID and Client Secret.
- ✅ **G.** Pull an image from the Microsoft Container Registry (MCR).

**Answer:** D, G, B

**Nguồn:** AI-103 1.pdf · Q163 · pages 173–174

<details><summary>Explanation</summary>

(Dạng gốc: sắp xếp thứ tự — thứ tự đúng: 1. Provision an on-premises Kubernetes cluster that has internet connectivity. → 2. Pull an image from the Microsoft Container Registry (MCR). → 3. Run the container and specify an API key and the Endpoint URL of the Azure AI resource.)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 174](https://tstudy.vercel.app/content/ai-103/figure-521.png)


1. Provision an on-premises Kubernetes cluster that has internet connectivity.
The confidential documents must remain on-premises, so the Azure AI Language container should run in an
on-premises environment rather than in Azure. The Kubernetes cluster needs internet connectivity because
the container must communicate with Azure for required billing, authorization, and metering operations. The
document processing itself can occur within the local container.
2. Pull an image from the Microsoft Container Registry (MCR).
Azure AI Language container images are distributed through the Microsoft Container Registry (MCR). After
provisioning the on-premises Kubernetes environment, pull the required Language container image from
MCR.
3. Run the container and specify an API key and the Endpoint URL of the Azure AI resource.
The container is configured with the API key and Endpoint URL of the provisioned Microsoft Foundry Service
resource. The application can then send requests to the locally deployed container, allowing the confidential
documents to be processed on-premises rather than sending the document contents directly to the Azure
Language service.
Incorrect Answers:
Pull an image from Docker Hub.
Azure AI Language container images are provided through MCR, not Docker Hub.
Provision an on-premises Kubernetes cluster that is isolated from the internet.
The container requires outbound connectivity to Azure for required service operations, so completely
isolating the cluster from the internet would prevent the required communication.
Provision an Azure Kubernetes Service (AKS) resource.
AKS runs the container workload in Azure. The requirement specifically states that the confidential
documents must remain on-premises.
Run the container and specify an App ID and Client Secret.
The required container configuration uses the API key and Endpoint URL of the Azure AI resource.

</details>


---

## Q164 · pick 2

You are developing an app that will use the Azure Vision in Foundry Tools API to analyze an image.  
You need configure the request that will be used by the app to identify whether an image is clipart or a line  
drawing.  
How should you complete the request?

🖼 [Source: AI-103 PDF · page 175](https://tstudy.vercel.app/content/ai-103/figure-524.png)

- **A.** GET
- **B.** PATCH
- ✅ **C.** POST
- **D.** description
- ✅ **E.** imageType
- **F.** objects
- **G.** tags

**Answer:** C, E

**Nguồn:** AI-103 1.pdf · Q164 · pages 175–176

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: HTTP method → POST; visualFeatures → imageType)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 175](https://tstudy.vercel.app/content/ai-103/figure-525.png)


Correct Answer:
HTTP method → POST
The Azure Vision Analyze Image v3.2 API uses the POST method because the image to be analyzed is
provided in the request body, either as binary image data or as a JSON payload containing an image URL.
Therefore, POST is required for the /vision/v3.2/analyze operation.
visualFeatures → imageType
The imageType visual feature is specifically used to determine the type of image. Its results include
information about whether the image is clip art and whether it is a line drawing, which directly satisfies the
requirement.
The completed request is:
POST

</details>


---

## Q165 · pick 2

You use the Azure Custom Vision service to build a classifier. After training is complete, you need to  
evaluate the classifier.  
Which two metrics are available for review?

- **A.** F-score
- **B.** area under the curve (AUC)
- ✅ **C.** precision
- **D.** weighted accuracy
- ✅ **E.** recall

**Answer:** C, E

**Nguồn:** AI-103 1.pdf · Q165 · pages 176–177

<details><summary>Explanation</summary>

$8a

</details>


---

## Q166 · pick 2

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to configure the model deployment for Agent1 to meet the technical requirements. What  
should you configure?

🖼 [Source: AI-103 PDF · page 180](https://tstudy.vercel.app/content/ai-103/figure-536.png)

- ✅ **A.** Standard
- **B.** Global Standard
- **C.** Global Provisioned
- **D.** Once the current version expires
- ✅ **E.** Opt out of automatic model version upgrades
- **F.** Upgrade once a new default version becomes available

**Answer:** A, E

**Nguồn:** AI-103 1.pdf · Q166 · pages 180–182

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Deployment type → Standard; Version update policy → Opt out of automatic model version upgrades)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 181](https://tstudy.vercel.app/content/ai-103/figure-539.png)

$8b

</details>


---

## Q167 · single choice

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to configure Agent1 to meet the security and compliance requirements.  
What should you use?

- **A.** self-harm content filtering
- ✅ **B.** prompt shields
- **C.** Personally identifiable information (PII) Detection
- **D.** violence content filtering

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q167 · pages 182–182

<details><summary>Explanation</summary>

$8c

</details>


---

## Q168 · single choice

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to recommend a solution to assess the responses generated by Agent1 when the agent uses  
the product information stored in storage1. The solution must meet the technical requirements.  
What should you include in the recommendation?

- ✅ **A.** a Retrieval Augmented Generation (RAG) evaluator
- **B.** a custom guardrail
- **C.** model fine-tuning
- **D.** a groundedness evaluator

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q168 · pages 182–183

<details><summary>Explanation</summary>

$8d

</details>


---

## Q169 · single choice

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to configure Agent1 to answer customer questions about only the Contoso products. The  
solution must meet the business requirements.  
What should you do?

- ✅ **A.** Modify the system message instructions.
- **B.** Add few-shot examples.
- **C.** Apply top-p sampling.
- **D.** Increase the value of the temperature parameter.

**Answer:** A

**Nguồn:** AI-103 1.pdf · Q169 · pages 183–184

<details><summary>Explanation</summary>

$8e

</details>


---

## Q170 · single choice

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to recommend an invoice review solution that resolves the issue reported by the finance  
department.  
What should you include in the recommendation?

- **A.** chat completions
- **B.** Azure Document Intelligence in Foundry Tools
- ✅ **C.** Azure Content Understanding in Foundry Tools
- **D.** Image Analysis

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q170 · pages 184–185

<details><summary>Explanation</summary>

$8f

</details>


---

## Q171 · pick 2

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to configure an indexing pipeline for Agent1 to retrieve the relevant product information in  
storage1. The solution must meet the technical requirement.  
Which two built-in skills should you use?

- ✅ **A.** Azure OpenAI Embedding
- **B.** Entity Recognition
- ✅ **C.** Text Split
- **D.** Merge
- **E.** Language Detection
- **F.** key phrase extraction

**Answer:** A, C

**Nguồn:** AI-103 1.pdf · Q171 · pages 185–186

<details><summary>Explanation</summary>


Correct Answers:
A. Azure OpenAI Embedding
The technical requirements specify that the indexing pipeline must support semantic search and vector
search. The Azure OpenAI Embedding skill generates vector embeddings for the product sheet content.
These embeddings are stored in the Azure AI Search index and enable semantic similarity matching, allowing
Agent1 to retrieve the most relevant product information for natural language queries.
C. Text Split
The product sheets are stored as PDF documents, which can be lengthy. The Text Split skill divides the
extracted text into smaller chunks before embeddings are generated. Chunking improves retrieval quality
because embeddings are created for manageable sections of text rather than entire documents, resulting in
more accurate semantic and vector search.
Incorrect Answers:
B. Entity Recognition
Entity Recognition extracts named entities such as people, organizations, and locations. It does not support
semantic or vector search.
D. Merge
The Merge skill combines text from multiple sources, such as OCR results and extracted document text. It is
not required to build a semantic and vector search pipeline.
E. Language Detection
Language Detection identifies the language of the document but does not contribute to semantic indexing or
vector search.
F. Key Phrase Extraction
Key Phrase Extraction identifies important phrases within documents. While useful for text analytics, it is not
required for implementing semantic and vector search.

</details>


---

## Q172 · single choice

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to recommend a solution to support the planned changes and technical requirements for  
Agent1 to use the product information stored in storage1.  
What should you include in the recommendation?

- **A.** Azure Translator in Foundry Tools
- **B.** Grounding with Bing Search
- ✅ **C.** Azure AI Search
- **D.** Azure Document intelligence in Foundry Tools

**Answer:** C

**Nguồn:** AI-103 1.pdf · Q172 · pages 186–187

<details><summary>Explanation</summary>


Correct Answer:
C. Azure AI Search
The planned changes require Agent1 to retrieve product information stored in Azure Blob Storage
(storage1), answer natural language questions about Contoso products, use an indexing pipeline that
supports semantic search and vector search and generate relevant, complete, and accurate responses.
Azure AI Search is the core service used to implement a Retrieval-Augmented Generation (RAG) solution. It
indexes the product sheets, supports both semantic search and vector search, and retrieves the most
relevant content for Agent1 to ground its responses.
This directly satisfies both the planned changes and the technical requirements.
Incorrect Answers:
A. Azure Translator in Foundry Tools
Azure Translator is used for language translation. The scenario does not require translating the product
sheets or customer questions.
B. Grounding with Bing Search
Grounding with Bing Search retrieves public web content. The requirement is to retrieve information from
internal product sheets stored in Azure Blob Storage, not from the internet.
D. Azure Document Intelligence in Foundry Tools
Azure Document Intelligence extracts text and structure from documents, but it is not the retrieval engine
used for RAG. While it can help process PDFs, the technical requirements specifically call for an indexing
solution that supports semantic and vector search, which is provided by Azure AI Search.

</details>


---

## Q173 · pick 2

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to ensure that the marketing department can generate videos by using the model  
deployed to Project2.  
How should you complete the Python code?

🖼 [Source: AI-103 PDF · page 187](https://tstudy.vercel.app/content/ai-103/figure-552.png)

- ✅ **A.** create
- **B.** download_content
- **C.** list
- **D.** retrieve
- **E.** create
- **F.** download_content
- **G.** list
- ✅ **H.** retrieve

**Answer:** A, H

**Nguồn:** AI-103 1.pdf · Q173 · pages 187–188

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Start video generation → create; Check job status → retrieve)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 188](https://tstudy.vercel.app/content/ai-103/figure-555.png)

Correct Answer:
create
To generate a new video using the deployed model, you must call the create method. This initializes the video
generation job using the provided prompt and model deployment.
Retrieve
Video generation is an asynchronous operation. The retrieve method is used to check the status of the video
generation job until it is completed, failed, or canceled.
Incorrect answers:
download_content
Used to download generated video content after completion, not to create or monitor the job.
list
Used to list existing video jobs, not to create or track a specific one.
retrieve (first dropdown)
Retrieve cannot be used to initiate video generation.
create (second dropdown)
Create is only used to start the job, not to poll or check status.

</details>


---

## Q174 · single choice

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to configure personalized user interactions for Agent1. The solution must meet the business  
requirements.  
What should you include in the solution?

- **A.** knowledge
- ✅ **B.** memory
- **C.** guardrails
- **D.** tools

**Answer:** B

**Nguồn:** AI-103 1.pdf · Q174 · pages 189–189

<details><summary>Explanation</summary>

Correct Answer:
B. memory
Memory enables the agent to retain conversation context and recall relevant information from previous
interactions. This directly satisfies the business requirement of providing personalized user experiences
across sessions. By using memory, Agent1 can remember past preferences, previous queries, and context,
allowing more relevant and tailored responses.
Incorrect answers:
A. knowledge
Knowledge refers to external data sources (like product documents), not personalization or remembering
user interactions.
C. guardrails
Guardrails are used for safety and policy enforcement, not for personalization.
D. tools
Tools enable the agent to perform actions or call external services, but do not provide conversational
memory or personalization.

</details>


---

## Q175 · pick 2

📋 **Contoso · Case study**


Case Study  
Overview  
Company Information  
Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-  
based solutions by using Microsoft Foundry.  
Existing Environment  
Identity Environment  
• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities  
that enable agents to access organizational resources and services.  
• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain  
existing AI solutions.  
• The team collaborates with solution architects, DevOps engineers, and security engineers to design,  
implement. monitor, and secure AI applications.  
• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the  
solution deployments.  
Generative Environment  
Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.  
Project1  
• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries  
and troubleshooting requests.  
• Agent1 has the following configurations:  
o Agent1 uses a base model deployment.  
o A safety evaluation pipeline is NOT enabled.  
o Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT  
configured.  
o Agent1 interacts with customers by using digital support channels and answers general questions  
about Contoso products.  
• Project1 is deployed to an Azure region located in the European Union (EU).  
• Agent1Dev Team will use Project1 to optimize and maintain Agent1.  
Project2  
• Project2 contains a deployed video generation model. The marketing department at Contoso has access  
to Project2 and plans to use the model to develop a video creation solution.  
• Development of the solution is incomplete.  
Data Environment  
• Contoso stores product-related information in Azure resources that support AI applications.  
• The Azure environment contains an Azure Blob Storage account named storage1 that stores product  
detail sheets for all the Contoso products.  
• The product sheets include specifications, feature descriptions, and product support information that  
Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.  
Problem Statements  
Contoso identifies the following issues:  
• Agent1 has only general knowledge of the Contoso products.  
• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT  
been processed yet.  
• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when  
responding to customer questions.  
• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure  
that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and  
varied layouts that make the documents difficult to process consistently.  
Requirements  
Planned Changes  
Contoso plans to implement the following changes:  
• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout  
and the textual content of the invoices, so that the invoice details can be verified against the vendor  
contract terms.  
• Update the base model deployment used by Agent1 and standardize the model version to ensure  
continuity and consistent responses.  
• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in  
storage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer  
questions.  
• Complete the development of the video creation solution.  
Technical Requirements  
Contoso identifies the following technical requirements:  
• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads  
and dynamically scale to handle variable customer support traffic, without requiring reserved throughput  
capacity. The product sheets must be processed by using an indexing pipeline that enables semantic and  
vector search, so that Agent1 can retrieve the relevant product information.  
• Responses generated by using the product sheet information must be relevant, complete, and accurate.  
Agent1 must be able to use the product sheets to answer natural language questions about product  
details. The model version used by Agent1 must remain consistent to ensure stable responses.  
• The data processed by the model must remain within the EU.  
Security and Compliance Requirements  
Contoso identifies the following security and compliance requirements:  
• API keys must NOT be used to access Foundry-deployed models.  
• Access to the Azure resources must follow the principle of least privilege.  
• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra  
authentication.  
• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group  
named SC_Agent1_Dev.  
• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group  
named SC_Agent1_Test.  
• Agent1 must never reveal customer information, even if a document that contains customer data is  
added erroneously to the product sheet repository in storage1.  
• The product sheets might contain images that include embedded text. Agent1 must be protected from  
malicious instructions potentially hidden within the images.  
Business Requirements  
Contoso identifies the following business requirements:  
• Users that interact with Agent1 must have a personalized experience in future interactions, including the  
ability for Agent1 to retain conversation context and recall relevant information from previous  
interactions.  
• Agent1 must answer questions only about the products sold by Contoso.

You need to ensure that Agent1Dev Team can access Agent1. The solution must meet the security and  
compliance requirements.  
How should you complete the Python code?

🖼 [Source: AI-103 PDF · page 190](https://tstudy.vercel.app/content/ai-103/figure-560.png)

- **A.** AzureKeyCredential()
- ✅ **B.** DefaultAzureCredential()
- **C.** None
- **D.** create_version
- ✅ **E.** get
- **F.** get_version

**Answer:** B, E

**Nguồn:** AI-103 1.pdf · Q175 · pages 189–191

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: credential → DefaultAzureCredential(); project_client.agents method → get)

#### Original answer from the PDF

🖼 [Source: AI-103 PDF · page 190](https://tstudy.vercel.app/content/ai-103/figure-561.png)

Correct Answer:
credential = DefaultAzureCredential()
The security requirement explicitly states that API keys must NOT be used and authentication must be done
using Microsoft Entra ID. DefaultAzureCredential() enables secure, identity-based authentication using Entra
ID and follows best practices like managed identities, thereby meeting compliance requirements.
agent = project_client.agents.get(agent_name=myAgent)
To allow Agent1Dev Team to access Agent1, the code must retrieve the existing agent. The get method is
used to fetch the agent by name, ensuring proper access without modifying or creating new versions.
Incorrect answers:
AzureKeyCredential()
Uses API keys, which violates the requirement that API keys must NOT be used.
None
No authentication mechanism is provided, which is insecure and does not meet requirements.
create_version
Creates a new version of the agent, which is not required for accessing an existing agent.
get_version
Retrieves a specific version, not the agent itself, and is unnecessary for basic access.

</details>
