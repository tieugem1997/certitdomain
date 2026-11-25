window.__PC_DECK_LAST__ = [
 {
  "no": 1,
  "id": "ccdv-f-q001",
  "type": "single",
  "select": 1,
  "question": "Your Claude application's content policy defines categories of content that it must never produce under any circumstances. The application currently has no way to enforce this policy, and content in these categories is appearing in its output. How would you enforce the content policy?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Enhance the system prompt to contain explicit instructions for the categories to avoid, complete with examples of each category. Treat the strengthened prompt as the primary enforcement mechanism for the application’s content policy across all responses."
   },
   {
    "key": "B",
    "text": "Remove the content policy entirely and let any output reach users during normal operation, accepting whatever content the application produces in response to incoming traffic."
   },
   {
    "key": "C",
    "text": "Add deterministic output filtering that checks responses against the content policy before they reach users."
   },
   {
    "key": "D",
    "text": "Move enforcement to users by asking them to report content policy violations after the violating content has already reached them in the application’s responses."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Add deterministic output filtering that checks responses against the content policy before they reach users.\n\nDeterministic output filtering evaluates each generated response against the defined prohibited categories before it is delivered to users, enabling matching content to be blocked consistently. System-prompt instructions may steer model behavior but are not a guaranteed enforcement control.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 2,
  "id": "ccdv-f-q002",
  "type": "single",
  "select": 1,
  "question": "Your Claude application’s API keys are kept in a secrets manager. The team is considering whether to use the same key in development, staging, and production. How should the keys be handled across environments?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use a single development key everywhere on the grounds that production keys are too risky to deploy across the application's three environments during normal operation."
   },
   {
    "key": "B",
    "text": "Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application’s lifecycle."
   },
   {
    "key": "C",
    "text": "Rotate the same key across environments at random intervals on the grounds that random rotation provides isolation between environments without requiring distinct keys."
   },
   {
    "key": "D",
    "text": "Use the same key across all environments for simplicity and treat the propagation of any compromise as a known operational tradeoff for the team's key management approach."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application’s lifecycle.\n\nEach environment should use its own API key. Environment-specific credentials isolate compromise, revocation, auditing, permissions, and rotation, so exposure in development or staging does not grant access to production. Anthropic documentation also recommends creating a dedicated API key for direct API use and storing it securely.\n\n#### Learn more\n\n- Claude Code SDK — Authentication",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 3,
  "id": "ccdv-f-q003",
  "type": "single",
  "select": 1,
  "question": "The team is considering whether to implement a new capability as a custom tool or use an existing built-in tool that almost meets the use case but is missing one specific feature. How should you make the decision?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Review the built-in tool’s documentation and assess whether its existing capabilities are sufficient to cover the use case without any modification or extension."
   },
   {
    "key": "B",
    "text": "Identify whether the team has previously built similar custom tools and use those precedents to determine which approach is more consistent with the existing codebase."
   },
   {
    "key": "C",
    "text": "Examine the custom tool option by scoping the implementation effort and determining whether the additional flexibility justifies the development and maintenance cost."
   },
   {
    "key": "D",
    "text": "Evaluate whether the missing feature can be addressed by extending the built-in tool or warrants a custom tool, then choose accordingly."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Evaluate whether the missing feature can be addressed by extending the built-in tool or warrants a custom tool, then choose accordingly.\n\nChoose the approach based on whether the built-in tool can be extended to support the missing feature and whether that is preferable to the flexibility, implementation effort, and ongoing maintenance of a custom tool. This evaluates the relevant technical and lifecycle trade-off across both options.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 4,
  "id": "ccdv-f-q004",
  "type": "single",
  "select": 1,
  "question": "A teammate has asked for an explanation of when a Skill is the better choice than an MCP server. The teammate is unsure how the two differ in practice when both can be reused across teams. How would you describe the distinction?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A Skill is preferable for cross-team reuse because it loads more efficiently than an MCP server during normal operation in the team’s typical multi-team workloads."
   },
   {
    "key": "B",
    "text": "A Skill bundles prompts, scripts, and data into a package the model loads as a unit while a MCP server exposes resources, tools, and prompts through a standard client interface."
   },
   {
    "key": "C",
    "text": "A Skill and an MCP server are equivalent extension mechanisms that the team can use interchangeably for any reusable capability that needs to be accessible across teams."
   },
   {
    "key": "D",
    "text": "A Skill is the older mechanism and an MCP server is the newer one, so the team should prefer an MCP server for any reusable capability that the team builds going forward."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. A Skill bundles prompts, scripts, and data into a package the model loads as a unit while a MCP server exposes resources, tools, and prompts through a standard client interface.\n\nA Skill packages instructions and optional workflow resources, including scripts, templates, and references, to guide repeatable work. An MCP server exposes live information and controlled actions through a standard client-server interface, including tools, resources, and prompts. Skills can complement MCP servers by defining how to use their capabilities for a workflow.\n\n#### Learn more\n\n- Skills – Plugins | OpenAI Developers\n\n- MCP server – Plugins | OpenAI Developers",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 5,
  "id": "ccdv-f-q005",
  "type": "single",
  "select": 1,
  "question": "You are creating a system prompt for a Claude application that must generate output in a particular JSON shape. The downstream system will reject any output that fails to conform to the schema. Your prompt would need to ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "omit any reference to the format and rely on a post-processing step in the application to reshape Claude’s output."
   },
   {
    "key": "B",
    "text": "instruct Claude to return JSON sometimes and free text other times so the application's output captures both formats."
   },
   {
    "key": "C",
    "text": "include explicit constraints describing the required JSON schema and an instruction to produce only output matching that schema."
   },
   {
    "key": "D",
    "text": "instruct Claude to use whichever output format it considers most appropriate for each request the application handles."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. include explicit constraints describing the required JSON schema and an instruction to produce only output matching that schema.\n\nWhen a downstream system requires a particular JSON schema, the model must receive explicit instructions defining that schema and requiring output only in that format. Clear, specific output-format constraints improve compliance and prevent extra free text or incompatible structures.\n\n#### Learn more\n\n- Anthropic Prompting Best Practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 6,
  "id": "ccdv-f-q006",
  "type": "single",
  "select": 1,
  "question": "Your Claude application generates good responses for typical inputs but has difficulty with edge cases. You have several labeled examples of edge-case inputs and the desired response for each. You want to use these examples to improve the model’s treatment of edge cases. What is the best way to use these examples?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Embed the examples in a database for the model to find during inference."
   },
   {
    "key": "B",
    "text": "Train a custom model on the edge-case examples and deploy that custom model in place of the team’s current Claude integration."
   },
   {
    "key": "C",
    "text": "Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern."
   },
   {
    "key": "D",
    "text": "Tell users to avoid submitting the edge-case inputs to the application by adding warnings in the application’s user interface."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern.\n\nFew-shot prompting places representative labeled input-output examples in the prompt so Claude can infer and apply the desired handling pattern. Anthropic recommends relevant, diverse examples that cover edge cases because they improve output accuracy and consistency.\n\n#### Learn more\n\n- Anthropic Prompting Best Practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 7,
  "id": "ccdv-f-q007",
  "type": "single",
  "select": 1,
  "question": "Your Claude application validates structured output, but it has been treating validation failures as terminal errors. Every validation failure makes the entire user request fail. The team wants to handle validation failures more gracefully. How would you handle the validation failures?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Tell users that validation failures are unavoidable and instruct them to perform manual accuracy checks before relying on outputs."
   },
   {
    "key": "B",
    "text": "Disable output validation until the underlying cause of validation failures has been identified and addressed in a future release."
   },
   {
    "key": "C",
    "text": "Treat validation failures as a recognized error path that triggers retry, repair, or fallback logic before failing the user request."
   },
   {
    "key": "D",
    "text": "Pass validation failures directly to downstream systems and let each downstream system decide how to handle the malformed output."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Treat validation failures as a recognized error path that triggers retry, repair, or fallback logic before failing the user request.\n\nValidation failures should be handled as a recognized error path with bounded recovery: retry generation, repair invalid structured data when safe, or use a valid fallback before failing the user-facing request. Keeping validation in place prevents malformed output from reaching downstream systems while avoiding unnecessary terminal failures.\n\n#### Learn more\n\n- Claude API errors",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 8,
  "id": "ccdv-f-q008",
  "type": "single",
  "select": 1,
  "question": "You are designing an agent to manage a complex claim-processing workflow. Each claim proceeds through fact extraction, eligibility evaluation, and a decision step. The three subtasks have separate success criteria, and some claims need iteration between fact extraction and eligibility evaluation before a decision can be made.\n\nWhich agent pattern would you use?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A single tool-use loop pattern that gives one agent access to all the tools needed for fact extraction, eligibility evaluation, and decision-making."
   },
   {
    "key": "B",
    "text": "A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria."
   },
   {
    "key": "C",
    "text": "A linear chain pattern that processes every claim through fact extraction, then eligibility evaluation, then decision, with no return paths between subtasks."
   },
   {
    "key": "D",
    "text": "A streaming pattern that emits partial decisions as the agent processes each claim, refining the output until a final decision emerges from the stream."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria.\n\nA graph-based pattern models each subtask as a stateful node with conditional transitions, allowing claims to return from eligibility evaluation to fact extraction when more or corrected facts are needed. It also supports evaluating each specialized subtask against its own success criteria. This flexibility is required for branching and iterative workflows, unlike a fixed sequential chain.\n\n#### Learn more\n\n- Choose a design pattern for your agentic AI system",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 9,
  "id": "ccdv-f-q009",
  "type": "single",
  "select": 1,
  "question": "The Anthropic API has deprecated a request parameter that your Claude application uses in approximately 40 locations across the codebase. The deprecation notice provides a six-month window before the parameter is removed and recommends a replacement parameter with slightly different semantics. You would address the deprecation by ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "swapping all 40 call sites in a single change right away to prevent drawn-out migration work that will delay ongoing functioning."
   },
   {
    "key": "B",
    "text": "migrating all 40 call sites in a single change near the removal date to ensure the deprecated parameter continues to work as long as possible."
   },
   {
    "key": "C",
    "text": "adding regression tests to cover the parameter’s behavior, then migrating call sites in batches that you validate against regression tests."
   },
   {
    "key": "D",
    "text": "keeping the deprecated parameter in place while writing a wrapper function around it to insulate the rest of the codebase from the eventual change."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. adding regression tests to cover the parameter’s behavior, then migrating call sites in batches that you validate against regression tests.\n\nWhen a deprecated API parameter has a replacement with different semantics, regression tests preserve the intended behavior as a migration baseline. Updating call sites in validated batches limits the scope of each change, exposes behavioral differences early, and allows the migration to finish safely before removal. Anthropic recommends thoroughly testing applications with replacements well before a retirement date and updating code promptly.\n\n#### Learn more\n\n- Model deprecations - Claude Platform Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 10,
  "id": "ccdv-f-q010",
  "type": "single",
  "select": 1,
  "question": "A Claude application uses structured output that downstream code consumes. The team wants to gracefully handle malformed or unexpected output so that it does not crash downstream systems. The best option for addressing this issue is to ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "use the output the model produces and leave schema enforcement to a later phase of production after the application is more complete."
   },
   {
    "key": "B",
    "text": "apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on."
   },
   {
    "key": "C",
    "text": "crash on any unexpected output and require manual recovery on affected requests the application handles during normal operation."
   },
   {
    "key": "D",
    "text": "silently drop any output that does not match expectations so downstream systems do not see the malformed output the application receives from the model."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on.\n\nDefensive parsing validates and safely handles unexpected fields, missing values, and type mismatches at the boundary where model output enters application code, preventing unhandled parsing or runtime failures. Anthropic notes that, without structured outputs, malformed JSON, missing required fields, inconsistent types, and schema violations can occur; robust downstream handling addresses these failure cases.\n\n#### Learn more\n\n- Structured outputs — Claude API Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 11,
  "id": "ccdv-f-q011",
  "type": "single",
  "select": 1,
  "question": "A teammate asks why your Claude agent’s tool definitions contain detailed descriptions even though the tool names are already descriptive. They propose removing those descriptions to make the tool definitions simpler. How would you reply?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Agree with the teammate because tool names are sufficient for the model to choose the right tool on every request the agent handles."
   },
   {
    "key": "B",
    "text": "Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough."
   },
   {
    "key": "C",
    "text": "Suggest moving the descriptions out of the tool definition and into a separate documentation file the team maintains so the tool definitions stay short and the descriptions remain available."
   },
   {
    "key": "D",
    "text": "Suggest replacing the descriptions with example calls embedded in the tool definition, treating example calls as a complete substitute for the prose description."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough.\n\nClaude uses a tool’s description to understand what the tool does, when it should and should not be called, and how its parameters affect behavior. Detailed descriptions provide context that tool names cannot reliably express, helping Claude distinguish between tools and select the appropriate one. Anthropic identifies detailed tool descriptions as a key factor in tool-use performance.\n\n#### Learn more\n\n- Anthropic: Implement tool use",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 12,
  "id": "ccdv-f-q012",
  "type": "single",
  "select": 1,
  "question": "You are designing a Claude application that requires structured JSON output for downstream processing. The output schema is clearly defined, and downstream systems will reject malformed JSON. Your application design would ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "avoid structured output and use free-form text everywhere instead, on the grounds that free-form text is more flexible and handles edge cases better than structured schemas."
   },
   {
    "key": "B",
    "text": "structure the prompt to request output in a schema that is described in plain English, with downstream systems parsing whatever shape Claude produces."
   },
   {
    "key": "C",
    "text": "define a clear schema and structure the prompt to request output in that schema, with downstream systems handling any validation needed."
   },
   {
    "key": "D",
    "text": "define a clear schema, structure the prompt to request output in that schema, and validate Claude’s output against the schema before passing it downstream."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. define a clear schema, structure the prompt to request output in that schema, and validate Claude’s output against the schema before passing it downstream.\n\nA defined schema gives the model an unambiguous target format, while validating the returned JSON against that schema prevents malformed JSON, missing required fields, incorrect data types, and other schema violations from reaching systems that reject invalid input. Anthropic’s structured-output guidance likewise identifies schema-conforming JSON as the appropriate mechanism for reliable downstream processing.\n\n#### Learn more\n\n- Structured outputs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 13,
  "id": "ccdv-f-q013",
  "type": "single",
  "select": 1,
  "question": "Your Claude application processes 50-page legal contracts and generates summaries with citation references to the source. The team is considering whether to send each contract as a whole or divide it into smaller pieces. The contracts fit within Claude’s context window.\n\nInitial testing indicates that whole-document processing produces summaries with better cross-section reasoning, but citation accuracy occasionally drifts in later sections. Chunked processing yields stronger citation accuracy for each chunk but loses cross-section reasoning. The team has not yet decided which property is more important. How would you guide the team’s decision?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Assess the cost and latency implications of both approaches against the application’s performance requirements before recommending which processing strategy to adopt."
   },
   {
    "key": "B",
    "text": "Examine the use cases where cross-section reasoning failures occur and assess whether whole-document processing meets the application’s accuracy requirements across a representative sample of contracts."
   },
   {
    "key": "C",
    "text": "Review the citation accuracy results from chunked processing and determine whether the loss of cross-section reasoning produces summaries that still meet the application’s quality bar."
   },
   {
    "key": "D",
    "text": "Identify which property matters more for the application’s actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Identify which property matters more for the application’s actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts.\n\nThe processing approach should be driven by the quality property that is most important to the application’s actual use case: whole-document processing favors reasoning across contract sections, while chunking favors citation precision within each section. The selected approach should then be tested against representative contracts to confirm that it meets the required quality standard.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 14,
  "id": "ccdv-f-q014",
  "type": "single",
  "select": 1,
  "question": "A teammate has asked you to explain why the team’s Claude application is charged a different rate for output tokens than for input tokens. They had assumed that the two rates were identical.\n\nHow would you explain the difference?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Output tokens are typically billed at a higher rate than input tokens, and cost models for the application should reflect both rates separately."
   },
   {
    "key": "B",
    "text": "Output tokens are typically billed at the same rate as input tokens, and the apparent rate difference is a billing error to report to Anthropic."
   },
   {
    "key": "C",
    "text": "Output tokens are typically billed at a lower rate than input tokens, because output tokens are cheaper to produce than input tokens are to process."
   },
   {
    "key": "D",
    "text": "Output tokens are not billed at all, because cost is determined entirely by the input tokens sent to the model on each request."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Output tokens are typically billed at a higher rate than input tokens, and cost models for the application should reflect both rates separately.\n\nAnthropic prices input and output tokens as separate usage categories, and its model pricing tables generally charge more per output token than per base input token. Cost models must therefore calculate input-token and output-token charges independently using their respective rates.\n\n#### Learn more\n\n- Anthropic Claude API pricing",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 15,
  "id": "ccdv-f-q015",
  "type": "single",
  "select": 1,
  "question": "You are designing a multi-step Claude workflow in which certain steps must reason without viewing the complete preceding conversation history. The team wants to keep particular context isolated to particular steps. The context-engineering technique to use is ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "context isolation through subagents or multi-step agentic workflows that scope each step’s context to only what the step needs."
   },
   {
    "key": "B",
    "text": "using a single global prompt that applies to every step in the workflow no matter what each step is reasoning about during its run."
   },
   {
    "key": "C",
    "text": "embedding the full prior history in each step regardless of whether the step needs the prior history for its reasoning."
   },
   {
    "key": "D",
    "text": "augmenting the context with all available content at every step so each step has access to the entire prior history of the workflow during its reasoning."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. context isolation through subagents or multi-step agentic workflows that scope each step’s context to only what the step needs.\n\nContext isolation scopes each subagent or workflow step to only the information needed for its task, preventing irrelevant prior conversation history from being exposed to that step. Anthropic identifies isolated context as a valid use case for subagents in agentic workflows.\n\n#### Learn more\n\n- Anthropic Claude Platform Docs — Prompting best practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 16,
  "id": "ccdv-f-q016",
  "type": "single",
  "select": 1,
  "question": "A teammate is reviewing the team’s threat model for a Claude application and has asked you to identify the AI-specific threat categories the model should cover. The teammate has already listed traditional web-application threats and wants to know which additional categories apply to a Claude application.\n\nWhich AI-specific threat categories would you add?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Supply chain attacks on the Claude SDK because the SDK itself is the only point of vulnerability that a Claude application introduces beyond traditional web application threats."
   },
   {
    "key": "B",
    "text": "Network-level denial of service and physical infrastructure attacks, because these categories cover the threats most likely to affect any Claude application in production."
   },
   {
    "key": "C",
    "text": "Cross-site scripting and SQL injection, because these traditional web application threats apply with equal weight to any application that uses Claude in any way."
   },
   {
    "key": "D",
    "text": "Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls.\n\nClaude applications have LLM-specific risks: prompt injection can redirect model behavior, prompts and context can disclose sensitive data, jailbreak attempts can circumvent guardrails, and unsafe generated output can bypass or undermine application controls. Anthropic identifies jailbreaks and both direct and indirect prompt injection as distinct threat models, and recommends limiting the model’s access to sensitive data and actions.\n\n#### Learn more\n\n- Mitigate jailbreaks and prompt injections",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 17,
  "id": "ccdv-f-q017",
  "type": "single",
  "select": 1,
  "question": "A Claude agent can access a tool that retrieves customer records. A teammate observes that the agent sometimes invokes the tool with arguments not declared by its schema, causing the downstream service to return an error each time. The teammate suggests loosening the schema so the tool accepts any arguments the model generates.\n\nHow would you respond?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Remove the schema entirely and rely on the downstream service to reject invalid calls, treating the downstream service as the team’s primary enforcement layer."
   },
   {
    "key": "B",
    "text": "Loosen the schema as the teammate proposed so the downstream service receives every call the agent makes during normal operation."
   },
   {
    "key": "C",
    "text": "Add a system prompt instruction telling the model to produce schema-conforming arguments, treating the prompt instruction as the primary mechanism for keeping the agent’s tool calls valid."
   },
   {
    "key": "D",
    "text": "Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry.\n\nTool schemas establish the valid input contract for a tool. Strict pre-dispatch validation prevents malformed or undeclared arguments from reaching the downstream service, and a structured tool error provides feedback the agent can use to make a corrected retry. Prompting can improve behavior but does not replace validation at the system boundary.\n\n#### Learn more\n\n- Anthropic: Implement tool use",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 18,
  "id": "ccdv-f-q018",
  "type": "single",
  "select": 1,
  "question": "Your Claude agent’s hooks currently fire for every action, substantially slowing the agent even when the actions present no risk. The team wants to scope the hooks more precisely. How should you scope the hooks?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Replace hooks with system prompt instructions on the grounds that prompt instructions can produce the same enforcement effect that hooks produce on the agent’s actions."
   },
   {
    "key": "B",
    "text": "Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance."
   },
   {
    "key": "C",
    "text": "Disable all hooks while the team re-scopes them, treating the period of no hook enforcement as a temporary state during the re-scoping work."
   },
   {
    "key": "D",
    "text": "Disable the agent during peak hours so the hook overhead does not slow the application down during the busiest periods of the day across the application’s operation."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance.\n\nClaude Code hook configuration supports matchers and conditional filters that restrict a handler to relevant tool calls or subcommands. Applying hooks only to high-risk operations—such as destructive commands or sensitive-data access—maintains deterministic safeguards while avoiding the process overhead of executing them for low-risk actions.\n\n#### Learn more\n\n- Hooks reference — Claude Code Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 19,
  "id": "ccdv-f-q019",
  "type": "single",
  "select": 1,
  "question": "You are designing an agent for a multi-step research task. You want it to divide the task into smaller parts, delegate each part to a specialized subagent, and consolidate the results. The agent pattern to apply is ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "a single tool-use loop that includes every tool the agent might need across all subtasks."
   },
   {
    "key": "B",
    "text": "an orchestrator and subagent pattern with specialized subagents assigned to each subtask."
   },
   {
    "key": "C",
    "text": "a memory pattern that stores the entire research history in advance, before any subtask begins execution."
   },
   {
    "key": "D",
    "text": "a context-window pruning pattern that drops each subtask’s content after the agent moves on."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. an orchestrator and subagent pattern with specialized subagents assigned to each subtask.\n\nA manager/orchestrator pattern uses a central agent to delegate work to specialized agents and synthesize their outputs into a unified result. OpenAI describes this as the manager pattern for coordinated multi-agent workflows.\n\n#### Learn more\n\n- A practical guide to building agents",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 20,
  "id": "ccdv-f-q020",
  "type": "single",
  "select": 1,
  "question": "You are creating an agent that must call multiple internal APIs and a database in a structured, repeatable manner. Your team has chosen the Claude Agent SDK instead of building a custom loop. You are configuring the agent’s tool definitions and execution loop. How should you configure the tools and execution loop?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Call the Messages API directly and let the model format its tool calls in plain text."
   },
   {
    "key": "B",
    "text": "Use the SDK’s tool interface and loop, with conversation history stored in a separate team database."
   },
   {
    "key": "C",
    "text": "Use the SDK’s tool interface and let the SDK handle the loop, dispatch, and history."
   },
   {
    "key": "D",
    "text": "Use the SDK’s tool interface and write the loop and history layer in the team’s own code."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Use the SDK’s tool interface and let the SDK handle the loop, dispatch, and history.\n\nClaude’s SDK Tool Runner supports SDK-defined tools and automatically manages the agentic loop, including tool dispatch, request/response handling, and conversation-state history. This removes the need to build and maintain a separate custom loop or history layer for the normal tool-use workflow.\n\n#### Learn more\n\n- Tool runner (SDK)",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 21,
  "id": "ccdv-f-q021",
  "type": "single",
  "select": 1,
  "question": "Your team’s Claude agent has built up several customizations that bypass the SDK defaults, including custom history management, retry logic, and error handling. A new team member proposes reverting every customization to make the codebase easier to maintain. The tech lead disagrees, stating that each customization was introduced for a reason. What would you advise the team?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Revert all customizations to the SDK’s defaults to standardize the codebase."
   },
   {
    "key": "B",
    "text": "Decide on each customization individually based on its original reason and the SDK’s current capabilities."
   },
   {
    "key": "C",
    "text": "Keep all customizations, trusting that the tech lead’s original reasoning is still valid."
   },
   {
    "key": "D",
    "text": "Migrate the agent off the SDK and rebuild it with a custom loop."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Decide on each customization individually based on its original reason and the SDK’s current capabilities.\n\nEach SDK override should be assessed individually against the need that originally justified it and the SDK’s current capabilities. This preserves custom behavior where it remains necessary while removing overrides that have become redundant, improving maintainability without sacrificing required reliability or functionality.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 22,
  "id": "ccdv-f-q022",
  "type": "single",
  "select": 1,
  "question": "Your team’s Claude application has been in production for one year, and the team has chosen to formalize its testing strategy. At present, the team writes ad-hoc tests for individual features but lacks an overall testing approach. Which testing approach should be formalized?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Adopt a test-driven development practice where unit tests are written before each feature is implemented and must pass before code is merged."
   },
   {
    "key": "B",
    "text": "Define unit tests for individual functions, integration tests for the Claude integration, and end-to-end tests for critical user flows, applied consistently across the codebase."
   },
   {
    "key": "C",
    "text": "Continue writing ad-hoc tests as features ship and introduce a peer review step to ensure each test adequately covers the feature being released."
   },
   {
    "key": "D",
    "text": "Define a single testing approach that uses end-to-end tests and apply it consistently across all new features as they are added to the codebase."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Define unit tests for individual functions, integration tests for the Claude integration, and end-to-end tests for critical user flows, applied consistently across the codebase.\n\nA layered test strategy provides fast, focused validation of individual functions through unit tests, verifies the Claude integration with integration tests, and protects the most important user journeys with end-to-end tests. Applying these levels consistently gives the codebase comprehensive and maintainable coverage; relying only on end-to-end tests or continuing ad-hoc testing does not provide that balance.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 23,
  "id": "ccdv-f-q023",
  "type": "single",
  "select": 1,
  "question": "A teammate submitted a pull request that introduces a Claude-powered feature to your service. The code functions, but its prompt and model choice are hard-coded inline, it lacks error handling, and there are no tests for the integration. What would you request in code review?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration."
   },
   {
    "key": "B",
    "text": "Request changes that move prompt and model configuration to a configurable location and add tests, treating the missing error handling as a follow-up release item."
   },
   {
    "key": "C",
    "text": "Approve the pull request and add the missing pieces yourself in a follow-up commit so the teammate can move on to other work immediately."
   },
   {
    "key": "D",
    "text": "Approve the pull request as-is, on the grounds that the feature works in the happy path and the missing pieces can be added in follow-up commits."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration.\n\nPrompt and model settings should be configurable, Claude API failures require explicit error handling for reliable service behavior, and integration tests are needed to validate the feature and prevent regressions. All three are necessary review changes before approval.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 24,
  "id": "ccdv-f-q024",
  "type": "single",
  "select": 1,
  "question": "A teammate asks why your Claude application sometimes returns a response that repeats the prompt text, while at other times it rephrases that prompt text. They suspect there is a bug in the application’s request construction. How would you respond?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction."
   },
   {
    "key": "B",
    "text": "Confirm that the variation is a bug in the application’s request construction and start investigating which part of the application is producing the inconsistent prompt text."
   },
   {
    "key": "C",
    "text": "Tell the teammate that the variation depends on which Claude model serves the request, and recommend pinning the application to a single model version to make the output behavior consistent."
   },
   {
    "key": "D",
    "text": "Tell the teammate that the variation is caused by the application sending two different prompts on different runs and propose a code change that pins the system prompt to a single version."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction.\n\nLanguage models generate output as token-by-token continuations of their input context. Normal variation in generation can cause prompt wording to be echoed in one response and restated in another, without indicating a defect in request construction.\n\n#### Learn more\n\n- Anthropic glossary",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 25,
  "id": "ccdv-f-q025",
  "type": "single",
  "select": 1,
  "question": "The team is considering whether to integrate with the Claude API directly or via a third-party abstraction layer that supports multiple LLM providers. The team has determined that all current and anticipated use cases run on Claude, no internal customer has asked for LLM portability, and the product roadmap contains no multi-provider support over the next two years. The third-party abstraction would add about 15 percent overhead in code complexity and introduce an additional dependency.\n\nWhich integration approach would you recommend?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The third-party abstraction layer, on the grounds that multi-provider support is valuable for any application as a matter of long-term flexibility across vendors."
   },
   {
    "key": "B",
    "text": "Direct integration with Claude through its SDK, because no multi-provider need exists and abstraction would add complexity that does not pay off."
   },
   {
    "key": "C",
    "text": "A custom multi-provider abstraction layer the team builds in-house so that the team controls every part of the abstraction the application uses for its API calls."
   },
   {
    "key": "D",
    "text": "Both integration paths in parallel, where the application uses each path on different runs to compare which performs better in production over time."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Direct integration with Claude through its SDK, because no multi-provider need exists and abstraction would add complexity that does not pay off.\n\nA direct Claude SDK integration meets every identified requirement while avoiding the added code complexity and dependency of a multi-provider abstraction. An abstraction layer is justified only when provider portability or multi-provider support has a concrete expected benefit.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 26,
  "id": "ccdv-f-q026",
  "type": "single",
  "select": 1,
  "question": "You are examining an architectural diagram for a Claude-powered travel-booking system. It depicts a top-level component that interprets user requests and three subordinate components responsible for flights, hotels, and ground transportation. The top-level component routes each request, sequences the subordinate components, and reconciles their outputs into a final itinerary. The diagram also indicates that every subordinate component has its own tool list and its own short conversation history, neither of which is shared with the others. Which architectural pattern does this diagram most closely represent?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A manager and supervisor pattern with shared context, where the top-level agent and the subagents all share a single conversation history that grows as the request flows through the system."
   },
   {
    "key": "B",
    "text": "A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list."
   },
   {
    "key": "C",
    "text": "A retrieval-augmented pattern, where the top-level component retrieves relevant context from the subordinate components' indexed data stores before generating each response."
   },
   {
    "key": "D",
    "text": "A pipeline pattern, where each component processes the user request in sequence and passes the full conversation history along with the request to the next component in the pipeline."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list.\n\nA manager or supervisor agent coordinates specialized subagents, delegates the relevant parts of a task, sequences their work, and synthesizes their outputs. Separate tool lists and nonshared conversation histories indicate isolated context for each subagent, rather than a shared-context manager pattern or a pipeline that passes the full history between stages. Anthropic’s guidance identifies isolated context and independent workstreams as appropriate uses for subagents.\n\n#### Learn more\n\n- Anthropic Prompting Best Practices — Subagent orchestration",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 27,
  "id": "ccdv-f-q027",
  "type": "single",
  "select": 1,
  "question": "You are designing a Claude application that preserves user sessions across multi-turn conversations. The product team has asked how the application will manage session lifecycle: when sessions should expire, how state is reset, and how it prevents stale context from being carried into new conversations. How would you design the session lifecycle?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define explicit session expiration rules but rely on users to start new conversations when they want fresh context, with no automatic reset triggers in the application."
   },
   {
    "key": "B",
    "text": "Define explicit session expiration rules, state reset triggers, and rules for starting fresh sessions so stale context does not leak into new conversations."
   },
   {
    "key": "C",
    "text": "Define a single short session timeout that applies across all conversations and treat the timeout as the application’s complete session lifecycle mechanism."
   },
   {
    "key": "D",
    "text": "Define state reset triggers tied to specific application events but apply them across all sessions globally, with no per-session expiration rules."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Define explicit session expiration rules, state reset triggers, and rules for starting fresh sessions so stale context does not leak into new conversations.\n\nA robust session lifecycle defines per-session expiration rules, explicit triggers that clear session state, and conditions for beginning a new session. Together, these controls prevent stale conversational context from leaking into subsequent conversations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 28,
  "id": "ccdv-f-q028",
  "type": "single",
  "select": 1,
  "question": "Your enterprise has an AWS contract requiring Claude API calls to be routed through Amazon Bedrock instead of the direct Anthropic API. Your team is developing a new Claude application and is unfamiliar with this restriction. How should you build the application?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Build two parallel implementations of every call, one for the direct Anthropic API and one for Bedrock, and pick the faster one at runtime."
   },
   {
    "key": "B",
    "text": "Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application’s logic provider- agnostic."
   },
   {
    "key": "C",
    "text": "Build the application against the direct Anthropic API and ignore the contractual requirement to route Claude calls through Amazon Bedrock."
   },
   {
    "key": "D",
    "text": "Build the application against the direct Anthropic API now and migrate to Bedrock in a follow-up release once the team has more experience with the Bedrock API."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application’s logic provider- agnostic.\n\nClaude requests must be sent through Amazon Bedrock to meet the contractual routing requirement. Anthropic supports invoking Claude on Bedrock through its Bedrock integration and SDKs, allowing the application’s higher-level Claude interaction logic to remain decoupled from the underlying provider while the configured invocation path uses Bedrock.\n\n#### Learn more\n\n- Claude on Amazon Bedrock",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 29,
  "id": "ccdv-f-q029",
  "type": "single",
  "select": 1,
  "question": "You have recently deployed a new Claude-powered application to production. Development is finished, and the system is now actively used by internal teams. The system’s next phase of work is ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "operating and maintaining the system, including monitoring, responding to issues, and planning evolution."
   },
   {
    "key": "B",
    "text": "handing the system over to a separate operations team that will manage it independently of the development team going forward."
   },
   {
    "key": "C",
    "text": "retiring the system, since shipping is the final lifecycle stage for any application that reaches production."
   },
   {
    "key": "D",
    "text": "running a formal post-deployment review that assesses the development phase before the team does any further work on the system."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. operating and maintaining the system, including monitoring, responding to issues, and planning evolution.\n\nA production application proceeds into ongoing operations and maintenance, including monitoring, incident response, and planning or delivering future evolution.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 30,
  "id": "ccdv-f-q030",
  "type": "single",
  "select": 1,
  "question": "You are setting up Claude Code for a new project. The team must configure permissions, default model selections, and environment-specific behavior at the project level so that the configuration remains consistent for every developer working in the repository. Which Claude Code mechanism would you use?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "environment variables that each developer sets on their own machine when working with Claude Code on the project."
   },
   {
    "key": "B",
    "text": "a shared spreadsheet that lists configuration values for team members to reference and update by hand as the project evolves."
   },
   {
    "key": "C",
    "text": "the settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository."
   },
   {
    "key": "D",
    "text": "a system prompt embedded in every Claude Code conversation by each developer at the start of every session in the project."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. the settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository.\n\nThe project-scoped .claude/settings.json file is version-controlled with the repository and shared across collaborators. It supports configuration such as permissions, environment variables, and model defaults, providing consistent project-level Claude Code behavior.\n\n#### Learn more\n\n- Claude Code settings\n\n- Explore the .claude directory",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 31,
  "id": "ccdv-f-q031",
  "type": "single",
  "select": 1,
  "question": "You are developing a Claude application that must keep a persistent connection to a service streaming real-time updates. The team is uncertain which communication pattern to use. Which communication pattern would you choose?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A single long HTTP request the server holds open indefinitely, with no standard websocket framing on the connection."
   },
   {
    "key": "B",
    "text": "File-based communication where the service writes new updates to disk and the application polls the file system for changes."
   },
   {
    "key": "C",
    "text": "A websocket, because websockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service."
   },
   {
    "key": "D",
    "text": "Repeated short-lived HTTP polling requests, where the application opens a new HTTP connection each time it checks for updates."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. A websocket, because websockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service.\n\nWebSockets are designed for persistent, bidirectional, real-time communication between a client and a streaming service, avoiding the overhead and latency of repeated polling requests.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 32,
  "id": "ccdv-f-q032",
  "type": "single",
  "select": 1,
  "question": "Your Claude application’s prompt was authored months ago and has not been updated. The team has learned through evaluations that the prompt performs well for common cases but performs poorly for a particular category of inputs whose volume has increased. How should you respond?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Replace the prompt with a new one aligned to the underperforming category, treating any common-case performance change as a known tradeoff."
   },
   {
    "key": "B",
    "text": "Tell users to avoid the underperforming category by adding warnings in the application's user interface about handled inputs."
   },
   {
    "key": "C",
    "text": "Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed."
   },
   {
    "key": "D",
    "text": "Add the underperforming category to a separate Claude application with its own prompt so the original prompt does not change."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed.\n\nPrompt engineering should be an iterative process: update the prompt to improve performance for the growing failure category, validate the update with evaluations that also protect common-case performance, and continue refining based on the results.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 33,
  "id": "ccdv-f-q033",
  "type": "single",
  "select": 1,
  "question": "You are developing a Claude application that must provide model output to end users as it is produced, rather than waiting for the entire response to finish. The Claude API mechanism to use is ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "structured JSON output, which delivers responses only after the model has finalized the JSON shape across the entire response."
   },
   {
    "key": "B",
    "text": "prompt caching, which speeds up the cost profile of future requests and does not affect the delivery timing of the first response."
   },
   {
    "key": "C",
    "text": "streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively."
   },
   {
    "key": "D",
    "text": "the batch API, which delivers full responses after a delay suitable for non-interactive workloads."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively.\n\nClaude streaming sends Messages API responses incrementally through server-sent events, including text deltas as generation proceeds. This lets an application display output progressively instead of waiting for the completed response.\n\n#### Learn more\n\n- Streaming Messages — Claude API",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 34,
  "id": "ccdv-f-q034",
  "type": "single",
  "select": 1,
  "question": "You are designing a Claude application that processes customer-support tickets in two stages: a triage stage that classifies tickets and a response stage that drafts replies. The team is considering either one Claude call for both stages or separate Claude calls for each stage. How would you structure the application?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts."
   },
   {
    "key": "B",
    "text": "Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies."
   },
   {
    "key": "C",
    "text": "Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer."
   },
   {
    "key": "D",
    "text": "Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts.\n\nSeparate Claude calls let the triage stage use a focused classification prompt and produce an intermediate result that can be inspected, evaluated, routed, or constrained before a response-specific prompt drafts the reply. Explicit prompt chaining is appropriate when an application needs a defined sequential pipeline and observable intermediate outputs.\n\n#### Learn more\n\n- Prompting best practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 35,
  "id": "ccdv-f-q035",
  "type": "single",
  "select": 1,
  "question": "The product team has expressed a new Claude feature in business terms: “agents should help our analysts create client memos more quickly.” You need to translate this into actionable technical requirements for the engineering team. Your first step would be to …",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "ask the analysts about the current memo production process to see where they think Claude could be introduced as a prompt-driven drafting step."
   },
   {
    "key": "B",
    "text": "examine what model capabilities and tier options are available and determine which best supports the memo drafting workflow described by the product team."
   },
   {
    "key": "C",
    "text": "assess what similar agent-based features have been built internally or in the industry and use those precedents to scope the technical approach."
   },
   {
    "key": "D",
    "text": "interpret the functional and infrastructure requirements implied by the business goal."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. interpret the functional and infrastructure requirements implied by the business goal.\n\nBusiness goals must first be interpreted as functional requirements, such as the agent’s required memo-drafting tasks and user interactions, and infrastructure or nonfunctional requirements, such as performance, security, integration, and reliability constraints. Those requirements provide the basis for later workflow discovery, model selection, and technical scoping.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 36,
  "id": "ccdv-f-q036",
  "type": "single",
  "select": 1,
  "question": "Your team is getting ready to deploy a configuration change that updates several prompt versions across a Claude application used by multiple downstream systems. The change has already been tested in staging, but the team has not evaluated how the prompt change will affect every downstream system that relies on the application's output. What should you do before deploying the change?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Document the prompt version changes in the application changelog and proceed with the rollout, treating the staging test results as sufficient evidence of impact across all downstream systems."
   },
   {
    "key": "B",
    "text": "Limit the rollout to systems that were explicitly included in staging testing, and defer all other downstream systems until a later release cycle."
   },
   {
    "key": "C",
    "text": "Notify downstream system owners that a change is coming and schedule the rollout for the following week, without conducting a formal impact assessment."
   },
   {
    "key": "D",
    "text": "Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed.\n\nA prompt-version change can change the output contract, behavior, format, or quality consumed by dependent systems. Each downstream dependency therefore requires an impact assessment before deployment, with coordination from its owners where needed. Anthropic’s evaluation guidance recommends rerunning the full evaluation set after a prompt update to determine how the new prompt affects performance across test cases.\n\n#### Learn more\n\n- Anthropic: Use the Evaluation Tool",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 37,
  "id": "ccdv-f-q037",
  "type": "single",
  "select": 1,
  "question": "Your Claude application makes a high volume of API calls during business hours and very few calls overnight. The team is concerned about remaining within rate limits at peak hours and wants to understand how the Claude API applies those limits. How should you proceed?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Examine the peak-hour request patterns in your application logs and smooth traffic by distributing requests more evenly across the business-hours window."
   },
   {
    "key": "B",
    "text": "Assess the average payload size of current API calls and consolidate requests where possible to reduce the total number of calls made during peak hours."
   },
   {
    "key": "C",
    "text": "Review the API documentation for streaming endpoints and evaluate whether migrating peak-hour calls to streaming reduces exposure to rate limit enforcement."
   },
   {
    "key": "D",
    "text": "Identify the rate limits, design the application to stay within them during peak hours, and use exponential backoff when limits are reached."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Identify the rate limits, design the application to stay within them during peak hours, and use exponential backoff when limits are reached.\n\nThe Claude API enforces organization-level limits for requests per minute, input tokens per minute, and output tokens per minute, including over short intervals through a token-bucket mechanism. Applications should identify their applicable limits, keep peak-hour traffic within them, and handle rate-limit responses by waiting and retrying with exponential backoff. A 429 rate-limit response supplies a retry-after header indicating when retrying may succeed.\n\n#### Learn more\n\n- Anthropic Claude API rate limits",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 38,
  "id": "ccdv-f-q038",
  "type": "single",
  "select": 1,
  "question": "A teammate asks you to explain the distinction between context engineering and prompt engineering. They have heard the terms used interchangeably and are uncertain how each applies to a Claude application that handles long-running, multi-step tasks. How would you describe the difference?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Prompt engineering focuses on the model's response, while context engineering focuses on the user’s input across many sessions in a long-running multi-step Claude application."
   },
   {
    "key": "B",
    "text": "Prompt engineering and context engineering each address content the team gives Claude, but the team can group them under a single workflow because the practices use overlapping techniques."
   },
   {
    "key": "C",
    "text": "Prompt engineering is the older term for prompt design, while context engineering is the newer term that has replaced it in modern Claude applications across the industry."
   },
   {
    "key": "D",
    "text": "Prompt engineering shapes individual prompts for specific outputs, while context engineering manages how content flows across turns and steps and takes steps to keep relevant state visible."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Prompt engineering shapes individual prompts for specific outputs, while context engineering manages how content flows across turns and steps and takes steps to keep relevant state visible.\n\nPrompt engineering shapes the instructions, examples, constraints, and output format of an individual model interaction. Context engineering manages the relevant information and state supplied throughout a multi-step, long-horizon workflow, including continuity across turns or context windows, so the model retains the information needed for subsequent work.\n\n#### Learn more\n\n- Anthropic Claude Platform Docs — Prompting best practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 39,
  "id": "ccdv-f-q039",
  "type": "single",
  "select": 1,
  "question": "A Claude application sometimes declines to answer questions that should be within scope, including questions it has previously answered correctly. You want to investigate this behavior. What should be the first step of the investigation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Identify which questions have been refused and compare them against previously answered questions to determine what changed between the successful and refused interactions."
   },
   {
    "key": "B",
    "text": "Test whether removing or adjusting those instructions resolves the behavior."
   },
   {
    "key": "C",
    "text": "Assess whether the refusals cluster around specific input patterns, question types, or time periods by analyzing the distribution of refused requests in the logs."
   },
   {
    "key": "D",
    "text": "Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context.\n\nRequest traces expose the complete context of each refusal, allowing the specific trigger—such as the input pattern, system-prompt content, or other request context—to be identified before making changes or performing aggregate analysis. Claude identifies safety refusals with a refusal stop reason, so request-level inspection is the appropriate starting point for diagnosing them.\n\n#### Learn more\n\n- Handling stop reasons — Anthropic",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 40,
  "id": "ccdv-f-q040",
  "type": "single",
  "select": 1,
  "question": "A new Claude model release provides performance improvements for several reasoning tasks, but it changes how it responds to system prompts containing multi-section instructions. Your application relies extensively on multi-section system prompts. An initial evaluation using the application’s real workload finds that the new model performs 8 percent better on reasoning tasks, but its format change causes malformed output on approximately 3 percent of requests. The team is considering whether to upgrade.\n\nHow would you make the decision?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Upgrade and add a downstream validation step that catches the 3 percent malformed output before it reaches users, treating the validation step as the team’s mitigation for the format change."
   },
   {
    "key": "B",
    "text": "Adapt the application’s system prompt to the new model’s format expectations and re-evaluate, then upgrade only if the adapted prompt eliminates the malformed output while preserving the reasoning improvements."
   },
   {
    "key": "C",
    "text": "Stay on the previous model permanently to avoid the malformed output rate and any future format changes that subsequent model releases might introduce in the application."
   },
   {
    "key": "D",
    "text": "Upgrade immediately, because the 8 percent reasoning improvement outweighs the 3 percent malformed output rate across the application’s typical request distribution."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Adapt the application’s system prompt to the new model’s format expectations and re-evaluate, then upgrade only if the adapted prompt eliminates the malformed output while preserving the reasoning improvements.\n\nA model upgrade should be validated with the application’s actual prompts and workload. When a regression is caused by changed response formatting for multi-section system prompts, adapting the prompt to the new model’s documented formatting and instruction conventions, followed by re-evaluation, directly tests whether compatibility can be restored without losing the measured reasoning benefit. Claude’s prompting guidance recommends clear, explicit output requirements and structured prompts for complex instructions, and its migration guidance calls for updating prompts and configurations when moving between model generations.\n\n#### Learn more\n\n- Anthropic Claude Platform Docs — Prompting best practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 41,
  "id": "ccdv-f-q041",
  "type": "single",
  "select": 1,
  "question": "You are establishing the configuration-management approach for a new Claude Code project. Your team will use CLAUDE.md files and settings.json files to control behavior, and you want to ensure that changes are tracked and reviewable. The configuration-management approach would ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "version-control CLAUDE.md alongside the project’s source code and settings.json files in a separate repository from the project’s source code."
   },
   {
    "key": "B",
    "text": "version-control CLAUDE.md and settings.json files alongside the project’s source code, with changes reviewed through standard pull request workflows the team applies."
   },
   {
    "key": "C",
    "text": "duplicate CLAUDE.md and settings.json files in multiple repositories to provide redundancy, on the grounds that a single source of truth is risky for project configuration."
   },
   {
    "key": "D",
    "text": "version-control CLAUDE.md and settings.json files in a separate repository from the project’s source code, so configuration evolves independently from the application code over time."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. version-control CLAUDE.md and settings.json files alongside the project’s source code, with changes reviewed through standard pull request workflows the team applies.\n\nProject-level CLAUDE.md instructions are team-shared through source control, and shared project settings belong with the repository they configure. Keeping both alongside the application source provides one reviewable history and lets standard pull-request controls govern changes to code and its Claude Code configuration.\n\n#### Learn more\n\n- How Claude remembers your project\n\n- Claude Code settings",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 42,
  "id": "ccdv-f-q042",
  "type": "single",
  "select": 1,
  "question": "You are launching a new Claude application and have a small set of well-labeled examples that show the required output format. You want to use these examples to steer Claude’s behavior. How would you guide the application’s behavior?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Embed the examples in a database and retrieve them at runtime as reference material for the team."
   },
   {
    "key": "B",
    "text": "Use zero-shot prompting and rely on the model’s general capability to produce the desired output format consistently across all incoming requests."
   },
   {
    "key": "C",
    "text": "Train a custom model on the labeled examples before deployment so that the application does not need to include the examples in any prompt during operation."
   },
   {
    "key": "D",
    "text": "Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request.\n\nMulti-shot prompting includes labeled examples in the prompt, allowing Claude to recognize and reproduce the intended output format for each request. Anthropic identifies well-crafted few-shot or multi-shot examples as a reliable way to steer output format and improve consistency.\n\n#### Learn more\n\n- Anthropic Claude Platform Docs: Prompting best practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 43,
  "id": "ccdv-f-q043",
  "type": "single",
  "select": 1,
  "question": "A Claude application produces outputs that progressively drift from the expected JSON format after several conversation turns. The initial few turns generate correctly formatted output, but later turns gradually lose structure. How would you address this drift?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Truncate every response to the first few characters, validate that the truncated output matches the expected JSON structure, and log any mismatches for review."
   },
   {
    "key": "B",
    "text": "Identify the failure mode as format drift, examine how the conversation context evolves over turns, and address the drift through context management or output validation."
   },
   {
    "key": "C",
    "text": "Switch to a smaller Claude model and re-test the application to determine whether the drift persists across conversation turns."
   },
   {
    "key": "D",
    "text": "Restart the application after every turn and monitor whether the format remains consistent across subsequent interactions."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Identify the failure mode as format drift, examine how the conversation context evolves over turns, and address the drift through context management or output validation.\n\nFormat drift in a multi-turn application is addressed by examining how accumulated conversation context affects instruction adherence, managing that context, and validating outputs against the required JSON structure. Explicit output-format constraints and structured prompting help maintain consistent formatting, while validation detects outputs that fail the required schema.\n\n#### Learn more\n\n- Prompting best practices - Claude Platform Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 44,
  "id": "ccdv-f-q044",
  "type": "single",
  "select": 1,
  "question": "Your team uses Claude Code across several repositories. You want team rules and general coding standards to apply to every repository, while other rules should apply only to particular repositories. The team currently duplicates instructions in each repository’s CLAUDE.md file. How would you handle this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository’s local CLAUDE.md."
   },
   {
    "key": "B",
    "text": "Stop using CLAUDE.md altogether and ask each developer to configure Claude Code manually for each project they work on."
   },
   {
    "key": "C",
    "text": "Move all instructions to a separate documentation site that developers consult during Claude Code sessions across all repositories."
   },
   {
    "key": "D",
    "text": "Use a single repository’s CLAUDE.md as the central source of truth and link to it from every other repository’s CLAUDE.md file."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository’s local CLAUDE.md.\n\nClaude Code reads CLAUDE.md files hierarchically, allowing broadly scoped instructions to provide shared standards and repository-local files to add project-specific rules. This centralizes common guidance without losing repository-specific context.\n\n#### Learn more\n\n- Manage Claude Code memory",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 45,
  "id": "ccdv-f-q045",
  "type": "single",
  "select": 1,
  "question": "A team has deployed a multi-agent system where a primary agent breaks down user requests and assigns subtasks to three specialized subagents: one for data retrieval, one for analysis, and one for report generation. In production, the team finds that subagents make redundant tool calls, sometimes exceed token budgets, and occasionally produce contradictory outputs—all of which the primary agent forwards without detecting. What is the most appropriate way to resolve these failures?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Strengthen the primary agent’s management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages."
   },
   {
    "key": "B",
    "text": "Give each subagent read access to the other subagents’ outputs so they can identify and resolve contradictions without routing back through the primary agent."
   },
   {
    "key": "C",
    "text": "Add retry logic to each subagent so that when a tool call fails, the subagent retries automatically before escalating – and configure each subagent to log its tool calls and outputs to a shared trace so the team can audit redundancy and contradictions after the fact."
   },
   {
    "key": "D",
    "text": "Collapse the three subagents into a single large-context model call that handles retrieval, analysis, and generation in one pass."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Strengthen the primary agent’s management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages.\n\nA primary orchestration layer should govern specialized agents through enforceable per-agent resource limits, structured output validation, and explicit contracts for information passed between stages. These controls prevent unnecessary tool use and token overruns, reject malformed or incompatible outputs before propagation, and make responsibilities and expected data formats clear enough to reduce contradictions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 46,
  "id": "ccdv-f-q046",
  "type": "single",
  "select": 1,
  "question": "Your Claude application produces inconsistent outputs for similar inputs, even when it uses the same model and prompt. You want to troubleshoot the issue systematically. Your debugging approach would ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "retry every request that produces an unexpected output and log the results to identify whether repeated calls converge on a consistent response pattern."
   },
   {
    "key": "B",
    "text": "lower the model’s temperature and re-run the inconsistent inputs to determine whether the parameter change reduces output variability across runs."
   },
   {
    "key": "C",
    "text": "capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs."
   },
   {
    "key": "D",
    "text": "assume inconsistent outputs reflect normal LLM non-determinism and document the variability as an accepted characteristic of the application’s behavior."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs.\n\nFull request-and-response traces make runs reproducible and comparable. Recording the input, system prompt, user messages, model output, and parameters exposes hidden contextual or configuration differences that can account for inconsistent behavior. Anthropic’s documentation supports logging and inspecting intermediate API outputs when diagnosing application behavior.\n\n#### Learn more\n\n- Prompting best practices\n\n- Claude on Amazon Bedrock — Activity logging",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 47,
  "id": "ccdv-f-q047",
  "type": "single",
  "select": 1,
  "question": "You are choosing among Claude models for a task. The team has identified three relevant tradeoff dimensions: quality, latency, and cost. The appropriate model is the one that ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "fits the task’s quality, latency, and cost requirements together, recognizing that improving one dimension typically affects the others."
   },
   {
    "key": "B",
    "text": "meets the task’s cost target within a defined latency budget, with quality validated against a representative sample of inputs after the model is selected."
   },
   {
    "key": "C",
    "text": "meets the task’s quality requirements at an acceptable latency, with cost reviewed separately once the quality and latency bar has been established."
   },
   {
    "key": "D",
    "text": "satisfies the task’s latency requirement first, then evaluated against quality and cost thresholds to confirm the selection is acceptable across all three dimensions."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. fits the task’s quality, latency, and cost requirements together, recognizing that improving one dimension typically affects the others.\n\nClaude model selection should satisfy the task’s quality, latency, and cost requirements jointly, because model capability, response time, and token pricing are interdependent tradeoffs. Selecting by one dimension first and evaluating the others only afterward can produce a model that is unsuitable for the overall workload. Anthropic’s model pricing documentation also shows that Claude models have materially different costs, reinforcing that cost must be considered alongside performance requirements.\n\n#### Learn more\n\n- Anthropic Claude pricing",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 48,
  "id": "ccdv-f-q048",
  "type": "single",
  "select": 1,
  "question": "You are using Claude Code in an automated continuous-integration pipeline. The pipeline must have Claude Code perform a set of clearly defined tasks without asking for confirmation, and its output must be captured for downstream processing. How should the pipeline be configured?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Disable Claude Code’s confirmation prompts globally across all environments so the pipeline runs without interruption from any prompt."
   },
   {
    "key": "B",
    "text": "Run Claude Code in headless mode with the required permissions configured in settings.json and capture its output for downstream processing."
   },
   {
    "key": "C",
    "text": "Replace Claude Code with a different tool that does not require any configuration to operate without confirmation prompts in the pipeline."
   },
   {
    "key": "D",
    "text": "Run Claude Code in interactive mode and have a developer manually approve every confirmation prompt while the pipeline executes its tasks."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Run Claude Code in headless mode with the required permissions configured in settings.json and capture its output for downstream processing.\n\nClaude Code supports non-interactive/headless execution with print mode (-p) for scripts and CI pipelines. Preconfiguring the permitted tools in settings.json allows the defined actions to run without manual approval, and JSON or stream-JSON output can be captured for downstream processing.\n\n#### Learn more\n\n- Claude Code CLI reference\n\n- Claude Code common workflows",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 49,
  "id": "ccdv-f-q049",
  "type": "single",
  "select": 1,
  "question": "The Claude application your team built has expanded over six months, and its prompt-handling code has built up duplication and convoluted control flow. The functionality works, but adding new features is becoming more difficult. How should you address this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Move all the prompt-handling code into a single large function to reduce the number of files developers have to navigate when reading the code."
   },
   {
    "key": "B",
    "text": "Continue adding features and plan a refactoring pass after the next two release cycles when the team has more bandwidth for internal work."
   },
   {
    "key": "C",
    "text": "Plan a refactoring pass to consolidate duplicated logic, separate concerns, and simplify control flow before adding new features."
   },
   {
    "key": "D",
    "text": "Refactor the prompt-handling code in small increments as part of each new feature ticket, treating the cleanup as a side effect of feature work."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Plan a refactoring pass to consolidate duplicated logic, separate concerns, and simplify control flow before adding new features.\n\nA planned refactoring pass removes the technical debt that is making further development difficult. Consolidating duplicated logic, separating concerns, and simplifying control flow improves maintainability and establishes a safer foundation for new features.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 50,
  "id": "ccdv-f-q050",
  "type": "single",
  "select": 1,
  "question": "You are configuring a Claude application that will handle a mix of multi-turn conversations and one-off requests. You want to use caching methods to lower token costs where applicable. A teammate also proposes caching the model’s output so the application need not make duplicate Claude calls when similar queries arrive. You would use prompt caching for ...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "the model’s output, treating the response from each request as cacheable content the application can return on similar future queries."
   },
   {
    "key": "B",
    "text": "nothing, because prompt caching does not affect cost in any application that mixes multi-turn conversations and one-off requests in a single deployment."
   },
   {
    "key": "C",
    "text": "only the user’s input portion of each request because user input is the part of the prompt that varies the most across the application's normal operation."
   },
   {
    "key": "D",
    "text": "the static portions of prompts that are repeated across requests, such as system prompts, instructions, or shared context."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. the static portions of prompts that are repeated across requests, such as system prompts, instructions, or shared context.\n\nPrompt caching reuses an identical prefix of an API prompt to reduce input-token processing time and cost. The reusable prefix should contain static content that recurs across requests, including system prompts, instructions, shared context, examples, and tool definitions. It does not cache generated model output; application-level response caching is a separate technique.\n\n#### Learn more\n\n- Anthropic Claude Platform Docs: Prompt caching",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 51,
  "id": "ccdv-f-q051",
  "type": "single",
  "select": 1,
  "question": "Your Claude application uses multi-step workflows in which each step’s output is required only briefly before the agent continues. Cumulative tool output is filling the context window with content that is no longer relevant. How would you manage the accumulating tool output?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Apply prompt caching to the accumulated tool outputs so the application does not re-pay for the older content on each subsequent step."
   },
   {
    "key": "B",
    "text": "Keep every tool output in the context indefinitely so the agent has the full record of every step it has executed during the workflow."
   },
   {
    "key": "C",
    "text": "Switch to a smaller Claude model that processes context more efficiently and treat any quality loss as a tradeoff for the cost reduction."
   },
   {
    "key": "D",
    "text": "Apply tool output pruning to remove tool outputs that are no longer needed by later steps in the workflow."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Apply tool output pruning to remove tool outputs that are no longer needed by later steps in the workflow.\n\nTool output pruning removes results that later workflow steps no longer require, preventing obsolete tool-result content from consuming the context window. Tool-result blocks contribute to the input tokens sent to Claude, so caching retained results does not solve context bloat.\n\n#### Learn more\n\n- Anthropic API pricing: Tool use pricing",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 52,
  "id": "ccdv-f-q052",
  "type": "single",
  "select": 1,
  "question": "You are deciding between STDIO-based and HTTP-based communication for an MCP server. The server will be started by a locally running Claude Code session. Which communication pattern should you use?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "HTTP on the grounds that HTTP is preferable to STDIO in any context the application might encounter during normal operation."
   },
   {
    "key": "B",
    "text": "HTTP polling against the MCP server, treating HTTP as a substitute for the standard MCP communication patterns."
   },
   {
    "key": "C",
    "text": "STDIO and HTTP simultaneously for redundancy, with the team running two communication patterns at the same time across Claude Code sessions."
   },
   {
    "key": "D",
    "text": "STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup.\n\nSTDIO is appropriate for a local, process-spawned MCP server: the client launches the server as a subprocess and exchanges JSON-RPC messages through standard input and output. This avoids the unnecessary network endpoint and configuration required by HTTP transport. MCP Transport Specification\n\n#### Learn more\n\n- MCP Transport Specification\n\n- Claude Code MCP documentation",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 53,
  "id": "ccdv-f-q053",
  "type": "single",
  "select": 1,
  "question": "You are explaining to a stakeholder why executing the same Claude prompt twice may yield slightly different results. The stakeholder is worried that this indicates the application is broken. How would you respond to the stakeholder’s concern?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Tell the stakeholder the variation is caused by Claude being updated continuously by Anthropic, and that switching to a fixed model snapshot will eliminate the variation entirely."
   },
   {
    "key": "B",
    "text": "Tell the stakeholder the variation comes from network latency and that switching to a faster network connection will produce more consistent results across runs."
   },
   {
    "key": "C",
    "text": "Tell the stakeholder the variation is a bug that the team will fix in the next release of the application, then create a work ticket to fix the bug."
   },
   {
    "key": "D",
    "text": "Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment.\n\nLLM generation is probabilistic: sampling can select different plausible tokens for identical inputs, so minor variation across runs is expected and does not by itself indicate an application defect. Production applications should manage this variability with measures such as output validation, retries, and—where supported by the selected model—sampling controls such as temperature. Anthropic notes that API outputs can remain non-deterministic even at temperature 0.\n\n#### Learn more\n\n- Claude Platform Docs — Glossary",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 54,
  "id": "ccdv-f-q054",
  "type": "single",
  "select": 1,
  "question": "A developer must process 10,000 documents overnight to produce a non-urgent analytics report. Cost is the primary concern, and results are not needed until the following morning. Which approach best fits the requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Send every request synchronously through the Messages API in parallel to finish as quickly as possible."
   },
   {
    "key": "B",
    "text": "Use the Message Batches API, which processes large asynchronous workloads within a 24-hour window at reduced cost."
   },
   {
    "key": "C",
    "text": "Lower max_tokens on synchronous calls to minimize cost."
   },
   {
    "key": "D",
    "text": "Switch to the smallest available model regardless of output quality."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Use the Message Batches API, which processes large asynchronous workloads within a 24-hour window at reduced cost.\n\nThe Message Batches API is designed for latency-tolerant, high-volume workloads at lower cost, which matches an overnight, non-urgent job. Sending requests synchronously in parallel (A) does not reduce per-token cost; lowering max_tokens (C) or blindly downsizing the model (D) does not address the batch-versus-realtime tradeoff.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 55,
  "id": "ccdv-f-q055",
  "type": "single",
  "select": 1,
  "question": "A Claude-powered agent summarizes web pages submitted by end users. One page contains hidden text instructing the model to ignore previous instructions and reveal its system prompt. Which mitigation is most effective?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Raise the model's temperature so its behavior is harder to predict."
   },
   {
    "key": "B",
    "text": "Treat retrieved page content as untrusted input, keep it separate from trusted instructions, and use guardrails or hooks so injected instructions cannot trigger sensitive actions."
   },
   {
    "key": "C",
    "text": "Add a line to the system prompt asking users not to include malicious instructions."
   },
   {
    "key": "D",
    "text": "Switch to a larger model that follows instructions more reliably."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Treat retrieved page content as untrusted input, keep it separate from trusted instructions, and use guardrails or hooks so injected instructions cannot trigger sensitive actions.\n\nPrompt injection is addressed by isolating untrusted content from trusted instructions and enforcing least-privilege guardrails so injected text cannot invoke sensitive tools. Temperature (A) is irrelevant to injection; a polite request (C) is not an enforceable control; a more instruction-following model (D) can be more susceptible, not less.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 56,
  "id": "ccdv-f-q056",
  "type": "single",
  "select": 1,
  "question": "A team needs Claude to call an internal inventory service exposed as a REST API. They want the capability to be reusable across several Claude applications and maintained independently of any one app. Which approach best fits?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Hard-code the inventory logic into each application's system prompt."
   },
   {
    "key": "B",
    "text": "Build an MCP server that exposes the inventory operations as tools so multiple Claude applications can connect to it."
   },
   {
    "key": "C",
    "text": "Paste the current inventory data into the context window on every request."
   },
   {
    "key": "D",
    "text": "Rely on a built-in tool, since built-in tools can reach any internal REST API."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Build an MCP server that exposes the inventory operations as tools so multiple Claude applications can connect to it.\n\nAn MCP server exposes reusable tools that multiple Claude applications can share and that can be maintained independently. Hard-coding logic into prompts (A) is neither reusable nor maintainable; pasting data (C) gives no live access and wastes context; built-in tools (D) do not automatically reach arbitrary internal APIs.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 57,
  "id": "ccdv-f-q057",
  "type": "single",
  "select": 1,
  "question": "Your Claude application's error handling currently logs every API error with the same severity level. The team wants to differentiate between errors that should page an on-call engineer and errors that should be logged for later review.\n\nHow would you structure the error handling?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle."
   },
   {
    "key": "B",
    "text": "Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either."
   },
   {
    "key": "C",
    "text": "Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging."
   },
   {
    "key": "D",
    "text": "Log every error with the same severity, on the grounds that differentiating severity adds complexity that does not pay off in most application setups over time."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging.\n\n\nOption C is correct because operational error handling should distinguish failures by impact, urgency, and recoverability. Anthropic's API documentation already separates error conditions by type and documents different recovery behaviors. For example, transient connection failures, rate limits, and many 5xx errors are automatically retried by official SDKs with exponential backoff, while other failures require application correction or investigation. Treating all of those conditions as the same operational severity creates either alert fatigue or missed incidents. A production design should classify errors using criteria such as user impact, data integrity risk, security exposure, persistence after retry, affected request volume, and whether automatic recovery succeeds. High- severity failures that threaten service availability or correctness can page the on-call engineer. Recoverable or isolated failures can be logged with structured metadata, request IDs, and metrics for later review. Option A pages on everything and quickly makes alerts noisy. Option B destroys observability for non-paging errors. Option D preserves the original defect by assigning the same severity to every condition. Therefore, C follows sound Claude application operations. Relevant Study Guide topics: API errors, retries, observability, incident response, severity classification, structured logging, and production operations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 58,
  "id": "ccdv-f-q058",
  "type": "single",
  "select": 1,
  "question": "Your Claude application is hitting context window limits when processing long customer service transcripts. A junior developer suggests increasing the temperature parameter to fix the issue. How would you respond?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking."
   },
   {
    "key": "B",
    "text": "Adjust the temperature parameter together with the max_tokens parameter, treating the combined adjustment as the team's mechanism for managing context window pressure during long-transcript processing."
   },
   {
    "key": "C",
    "text": "Remove the system prompt entirely to make room for longer transcripts in each request, freeing up context window space the system prompt would otherwise consume."
   },
   {
    "key": "D",
    "text": "Increase the temperature parameter as the junior developer suggested and observe whether the context window issue resolves over the next several runs of the application in production."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking.\n\nOption A correctly separates sampling configuration from context management. Temperature historically controlled the randomness of token selection; it did not increase the number of tokens Claude could accept within a request. Anthropic's current Messages API documentation continues to describe temperature in terms of randomness and, for newer model generations, marks manual temperature control as deprecated. Therefore, changing temperature cannot solve a context-capacity problem. Long transcripts instead require context-engineering techniques. Appropriate approaches include chunking documents, summarizing earlier material, retrieving only relevant sections, or using context editing /compaction so high-value information remains visible while unnecessary material is removed. Anthropic's context-editing guidance explicitly supports summarization and replacement of growing conversation history to keep long-running workloads within usable context limits. B incorrectly conflates generation parameters with context capacity. C may save some tokens but removes persistent application instructions and is therefore architecturally unsound. D modifies an unrelated parameter without addressing the root cause. Relevant Study Guide topics: context windows, token budgets, sampling parameters, summarization, chunking, and context engineering.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 59,
  "id": "ccdv-f-q059",
  "type": "single",
  "select": 1,
  "question": "You are building a Claude application that processes 10,000 customer emails overnight to extract structured data. The work is non-interactive, runs once daily, and has a flexible completion window of several hours.\n\nWhich Claude API would you use?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The Batch API, which is designed for non-interactive workloads with flexible completion windows."
   },
   {
    "key": "B",
    "text": "The streaming responses API to process each email and return partial results to a database as the model generates them."
   },
   {
    "key": "C",
    "text": "The real-time Messages API, processing the emails one at a time sequentially to ensure consistent ordering of results."
   },
   {
    "key": "D",
    "text": "The real-time Messages API with concurrent requests to process the emails as fast as possible during the overnight window."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. The Batch API, which is designed for non-interactive workloads with flexible completion windows.\n\nOption A is correct because the Message Batches API is designed for asynchronous, high-volume processing where results do not need to be returned interactively. Anthropic's API reference states that a Message Batch can contain many independent Messages requests and may take up to 24 hours to complete. That makes it appropriate for 10,000 overnight email-extraction jobs with a several-hour completion window. Streaming in B solves a different requirement: it exposes partial response events while a single request is being generated, which is valuable for interactive user experiences or long-running synchronous requests, but it does not provide the workload-management advantages of a batch job. C processes items sequentially and unnecessarily sacrifices throughput. D can increase throughput with concurrent real-time calls, but it adds concurrency management and rate-limit pressure when the workload explicitly tolerates asynchronous completion. The batch design also lets each request carry a custom identifier so results can be matched back to source emails even if completion order differs. Therefore, A is the intended Claude API choice. Relevant Study Guide topics: Message Batches API, asynchronous processing, high-volume workloads, request correlation, throughput, and non-interactive application design.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 60,
  "id": "ccdv-f-q060",
  "type": "single",
  "select": 1,
  "question": "A new agent your team built handles customer support tickets, but it routinely gets confused when a single ticket spans billing, shipping, and product issues. The agent often loses track of which sub-issue it has already addressed and revisits the same one. The team is considering architectural changes.\n\nWhat architectural change would you recommend?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase the size of the agent's context window so it can hold the full ticket history at once."
   },
   {
    "key": "B",
    "text": "Add detailed prompting that instructs the agent to track which sub-issues have been resolved and which remain."
   },
   {
    "key": "C",
    "text": "Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents."
   },
   {
    "key": "D",
    "text": "Switch to a deterministic workflow that handles billing, shipping, and product issues in a fixed sequence."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 61,
  "id": "ccdv-f-q061",
  "type": "single",
  "select": 1,
  "question": "You are implementing a custom tool for your Claude agent. The tool needs to interact with an external pricing service that returns product data.\n\nWhich of the following best practices would you apply as you develop this tool?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Omit the tool description and let the model infer when to use the tool based on the tool's name and the rest of the prompt context."
   },
   {
    "key": "B",
    "text": "Define the tool with a loose schema and let the model interpret the inputs flexibly on each call the agent makes."
   },
   {
    "key": "C",
    "text": "Implement the tool with no error handling and let the agent loop catch failures whenever the pricing service returns an error during operation."
   },
   {
    "key": "D",
    "text": "Define the tool with a clear schema, write a precise description for when to call it, and handle pricing service errors explicitly."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Define the tool with a clear schema, write a precise description for when to call it, and handle pricing service errors explicitly.\n\nOption D combines the three key properties of a reliable Claude tool: an explicit contract, clear tool-selection guidance, and controlled execution failure handling. Anthropic's tool documentation defines user tools using a name, detailed description, and JSON input_schema. The description should explain what the tool does, when it should and should not be used, parameter semantics, and relevant limitations. Anthropic emphasizes that precise descriptions materially improve Claude's ability to select the correct tool. A clear schema prevents ambiguous parameter interpretation and allows validation before calling the external pricing API. Where stronger guarantees are required, Anthropic also supports strict tool use, which constrains generated tool inputs to the declared JSON Schema. The application's execution layer must also convert pricing-service failures into explicit, handled error paths rather than uncontrolled exceptions. A deprives Claude of critical selection information. B increases malformed-call risk. C delegates infrastructure reliability to the reasoning loop instead of implementing appropriate integration error handling. Therefore, D represents production-quality custom-tool construction. Relevant Study Guide topics: custom tools, JSON Schema, tool descriptions, validation, external API integration, and error handling.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 62,
  "id": "ccdv-f-q062",
  "type": "single",
  "select": 1,
  "question": "A Claude application that worked well in testing is now occasionally returning outputs that mention information not present in the input. The development team initially assumed the model was hallucinating, so they asked you to troubleshoot.\n\nWhat would you do first?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix."
   },
   {
    "key": "B",
    "text": "Replace the current model with a larger one to reduce the chance of hallucination, on the grounds that larger models tend to hallucinate less in typical applications."
   },
   {
    "key": "C",
    "text": "Apply a retrieval-augmented generation pattern to ground the responses in source content before any further investigation of the production traces."
   },
   {
    "key": "D",
    "text": "Add a system prompt instruction telling the model not to invent information, on the grounds that prompt-level instructions are the fastest fix for hallucination concerns."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix.\n\n\nOption A follows disciplined production debugging: diagnose the actual failure mode before changing architecture or prompts. An output containing unsupported information might indeed be hallucination, but similar symptoms can result from stale conversation state, incorrect retrieval, unexpected tool output, prompt injection, incorrect request construction, or mismatched model/configuration versions. A production trace should capture the user input, system instructions, relevant conversation history, retrieved content, tool calls and results, model/version, request parameters, response, and identifiers necessary to compare successful and failing cases. This establishes whether the model invented a fact or whether that fact entered context through another path. B changes the model before establishing causality. C may eventually be useful if the confirmed problem is insufficient grounding, but implementing RAG before diagnosis can hide rather than explain the defect. D similarly changes prompting before verifying that prompt behavior is responsible. The engineering sequence should be observe, reproduce, classify the failure, form a hypothesis, apply a targeted correction, and validate the correction with evaluations. Relevant Study Guide topics: production troubleshooting, observability, tracing, hallucination analysis, prompt injection, context failures, regression diagnosis, and lifecycle monitoring.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 63,
  "id": "ccdv-f-q063",
  "type": "single",
  "select": 1,
  "question": "A teammate has asked how the Claude SDK handles transient API errors, such as a temporary network issue or a brief rate-limit response. They want to know whether the application code needs to handle every transient error or whether the SDK provides any default behavior.\n\nHow would you describe the SDK's default behavior?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The SDK provides default retry behavior for transient errors up to a fixed number of attempts, and this behavior is not configurable."
   },
   {
    "key": "B",
    "text": "The SDK provides default retry behavior for network errors but surfaces rate-limit responses directly to the application code, which must implement its own retry logic for those cases."
   },
   {
    "key": "C",
    "text": "The SDK logs transient errors to a default error stream and continues execution without retrying, leaving the application code responsible for detecting and responding to failed calls."
   },
   {
    "key": "D",
    "text": "The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed.\n\nOption D precisely matches Anthropic's SDK behavior. Official SDK documentation states that transient conditions are automatically retried two times by default with exponential backoff. The default retry set includes connection failures, HTTP 408 Request Timeout, 409 Conflict, 429 Rate Limit, and 5xx server errors. Developers can alter or disable this behavior through the SDK's retry configuration. This directly eliminates A because the retry count is configurable. B is incorrect because rate-limit responses are among the conditions automatically retried by the supported SDKs; the API also provides retry-after information where applicable. C is incorrect because the SDK does not merely log these failures and continue without attempting recovery. Application-level handling is still necessary after the configured retry policy is exhausted. Production code should distinguish permanent errors from transient failures, preserve request IDs for diagnostics, and decide whether higher-level fallback, queuing, or user-visible failure handling is appropriate. Therefore, D correctly characterizes the SDK abstraction: useful retry defaults combined with developer control. Relevant Study Guide topics: Claude SDKs, transient errors, HTTP 429, retries, exponential backoff, configuration, and resilient API integration.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 64,
  "id": "ccdv-f-q064",
  "type": "single",
  "select": 1,
  "question": "A teammate is debugging a Claude application whose system prompt has grown to several hundred lines and now contains overlapping, contradictory, and obsolete instructions. How would you advise the teammate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add more explicit instructions so the most recent rules dominate the model's interpretation of the prompt during each request."
   },
   {
    "key": "B",
    "text": "Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant."
   },
   {
    "key": "C",
    "text": "Tighten only the contradictory rules first, treating the overlap and obsolete content as lower-priority work the team can address later."
   },
   {
    "key": "D",
    "text": "Split the prompt across multiple system prompts so the model sees a smaller portion at any given time."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant.\n\nOption B is correct. A large prompt containing overlapping, contradictory, or obsolete instructions creates instruction ambiguity and increases the likelihood that Claude will apply an unintended rule, over-weight irrelevant guidance, or produce inconsistent behavior. Anthropic's current prompting guidance reinforces this principle: Claude performs best when instructions are clear, explicit, and direct. Prompt design should minimize ambiguity and provide the model with precisely the context and behavioral requirements needed for the task. Refactoring should therefore remove obsolete requirements, consolidate duplicated instructions, resolve contradictions, and establish one authoritative formulation for each behavioral rule. The revised prompt should then be regression-tested against representative inputs. A makes an already overloaded prompt larger and relies on instruction ordering instead of eliminating conflicts. C addresses only one defect while retaining redundant and obsolete material. D does not inherently solve contradictions and may fragment authoritative instructions across multiple locations. Therefore, B addresses the root cause. Relevant Study Guide topics: system prompt design, prompt maintainability, instruction clarity, conflicting instructions, prompt refactoring, regression evaluation, and context quality.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 65,
  "id": "ccdv-f-q065",
  "type": "single",
  "select": 1,
  "question": "You are building an MCP server that exposes several internal data sources as MCP resources. The server needs to be deployed so multiple Claude applications can integrate with it.\n\nHow would you approach the build and deployment?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment."
   },
   {
    "key": "B",
    "text": "Build the MCP server with resource and tool definitions scoped to the first Claude application that needs it, and extend the definitions to additional applications as each integration is requested."
   },
   {
    "key": "C",
    "text": "Deploy the MCP server only on individual developer machines, with the Claude applications unable to reach the server outside each developer's machine."
   },
   {
    "key": "D",
    "text": "Bypass the MCP server and embed each data source directly in every Claude application that needs the data, with each application maintaining its own integration."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment.\n\n$1a",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 66,
  "id": "ccdv-f-q066",
  "type": "single",
  "select": 1,
  "question": "Your Claude application receives untrusted input from external sources. The team is establishing how the application should treat this untrusted input. Untrusted input would be...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions."
   },
   {
    "key": "B",
    "text": "Treated identically to trusted input from internal sources, on the grounds that all input the application receives can be handled the same way."
   },
   {
    "key": "C",
    "text": "Routed through a separate Claude application with more lax security controls so the original application does not handle the untrusted input directly."
   },
   {
    "key": "D",
    "text": "Blocked entirely so the application accepts only trusted input, with no path for legitimate external input the application might process."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions.\n\n$1b",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 67,
  "id": "ccdv-f-q067",
  "type": "single",
  "select": 1,
  "question": "Your team uses several plugins across multiple Claude applications, and a recent plugin update introduced a regression. The team had not been tracking plugin versions, so the team cannot easily identify which version was previously working.\n\nHow would you address this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Stop using all plugins until the team can rebuild equivalent functionality directly into the application code, treating plugin avoidance as a way to remove version-related risk."
   },
   {
    "key": "B",
    "text": "Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately."
   },
   {
    "key": "C",
    "text": "Treat plugins as untrackable third-party code and rely on plugin authors to communicate breaking changes when they happen, with no internal version tracking."
   },
   {
    "key": "D",
    "text": "Upgrade every plugin to the latest version on a regular cadence to keep version drift small, on the grounds that drift contributes to regression risk."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately.\n\n$1c",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 68,
  "id": "ccdv-f-q068",
  "type": "single",
  "select": 1,
  "question": "Your Claude application is deployed to development, staging, and production environments. Each environment uses a different model version, different prompt versions, and different plugin dependencies, but the configuration is currently scattered across environment variables, hardcoded values, and undocumented setup scripts.\n\nHow would you manage the configuration?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce."
   },
   {
    "key": "B",
    "text": "Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time."
   },
   {
    "key": "C",
    "text": "Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment."
   },
   {
    "key": "D",
    "text": "Standardize all environments to use the same configuration values to eliminate the differences between development, staging, and production."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.\n\n$1d",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 69,
  "id": "ccdv-f-q069",
  "type": "single",
  "select": 1,
  "question": "Your Claude application returns confident-sounding answers, but occasionally those answers contain factual errors that downstream systems treat as ground truth. The team is concerned about the application's confidence-versus-accuracy gap.\n\nHow would you address the gap?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Lower the model's temperature so the model's responses sound less confident and downstream systems are less likely to treat the responses as ground truth in normal operation."
   },
   {
    "key": "B",
    "text": "Apply skepticism toward confident output by adding validation steps, sourcing requirements, or confidence calibration before treating outputs as ground truth."
   },
   {
    "key": "C",
    "text": "Reject every response the application produces until a manual accuracy review is conducted on each response by a human reviewer before any downstream system uses it."
   },
   {
    "key": "D",
    "text": "Add a disclaimer to every output telling users to verify the accuracy of the output and treat the disclaimer as the primary mechanism for managing the confidence-versus-accuracy gap."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Apply skepticism toward confident output by adding validation steps, sourcing requirements, or confidence calibration before treating outputs as ground truth.\n\n$1e",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 70,
  "id": "ccdv-f-q070",
  "type": "single",
  "select": 1,
  "question": "You are designing an agent that processes vendor invoices. The work involves a small number of well-understood steps, but occasionally an invoice arrives in an unexpected format that requires the system to decide between rerouting, requesting clarification, or flagging for human review. The most appropriate architecture for this system is...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A fully autonomous agent that handles every invoice from start to finish across all formats."
   },
   {
    "key": "B",
    "text": "A manager agent that delegates each step of standard invoice processing to a dedicated subagent, with a separate subagent handling each unexpected format."
   },
   {
    "key": "C",
    "text": "A single large prompt that processes every incoming invoice, both standard and unexpected, in one model call."
   },
   {
    "key": "D",
    "text": "A workflow for the standard path with an agent invoked at the decision point for unexpected formats."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. A workflow for the standard path with an agent invoked at the decision point for unexpected formats.\n\n$1f",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 71,
  "id": "ccdv-f-q071",
  "type": "single",
  "select": 1,
  "question": "You are designing a Claude application that processes user-submitted text. Some of that text could include sensitive information such as account numbers or passwords that the application should not send to Claude.\n\nHow would you design the application?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary."
   },
   {
    "key": "B",
    "text": "Add a prompt instruction in the system prompt specifying the categories of sensitive information Claude should disregard when processing user-submitted text."
   },
   {
    "key": "C",
    "text": "Log all user-submitted text before it is sent to Claude and review the logs periodically to identify whether sensitive information is reaching the model."
   },
   {
    "key": "D",
    "text": "Apply filtering at the boundary for the most commonly observed sensitive data patterns and expand coverage to additional patterns based on findings from production monitoring."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary.\n\n\nOption A is correct because sensitive-data protection must occur before prohibited information crosses the application's trust boundary. If account numbers, passwords, or other secrets must not be sent to Claude, asking Claude to \"ignore\" those values after transmission does not satisfy the requirement. The application must determine which data is permitted to leave its controlled environment and transform or reject prohibited content before constructing the Claude request. This principle is consistent with Anthropic's defense-in-depth guidance. Anthropic recommends input screening, limiting Claude's access to sensitive information, and applying least privilege so the model receives only information necessary for the task. B is fundamentally too late: the sensitive information has already been transmitted to the model context before the system instruction can influence behavior. C is worse because logging can create an additional store containing the sensitive information and only detects exposure after it occurs. D implements some boundary filtering but deliberately leaves coverage incomplete until production incidents reveal additional patterns. Therefore, A requires the boundary and its permitted data flows to be defined first, then enforced comprehensively through filtering, redaction, tokenization, or rejection. Relevant Study Guide topics: application boundaries, data minimization, sensitive-data handling, filtering, redaction, least privilege, and privacy-preserving design.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 72,
  "id": "ccdv-f-q072",
  "type": "single",
  "select": 1,
  "question": "Your Claude application's outputs are inconsistent in format. The team's instructions are scattered across the system prompt and user messages, with some instructions stated only once and others repeated.\n\nHow would you fix the inconsistency?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Move all instructions into the user message so the application's behavior is controlled at the input point."
   },
   {
    "key": "B",
    "text": "Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input."
   },
   {
    "key": "C",
    "text": "Place each instruction wherever the developer who first wrote it found most natural, retaining the original intent."
   },
   {
    "key": "D",
    "text": "Repeat all instructions in both the system prompt and the user message so the model sees each instruction more than once."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input.\n\n\nOption B creates a clear separation between persistent application instructions and per-request user content. Stable behavioral rules-role, output conventions, formatting constraints, policies, and other instructions intended to apply across requests-belong in the system-level instruction layer. User messages should primarily carry task-specific input and requirements that vary from interaction to interaction. Anthropic's Messages API defines the system prompt specifically as the mechanism for providing overarching context and instructions to Claude. Current guidance likewise recommends the top-level system field for instructions that should apply from the beginning of the conversation, while more transient information belongs in conversation messages. A mixes persistent application behavior with user-controlled content and weakens separation of concerns. C preserves the inconsistent architecture responsible for the problem. D duplicates instructions unnecessarily, wastes context tokens, and increases the possibility that future edits create conflicting versions of the same rule. Consolidating stable instructions also makes prompts easier to version, evaluate, review, and maintain. Therefore, B is the correct design. Relevant Study Guide topics: system prompts, instruction hierarchy, prompt organization, formatting consistency, separation of concerns, and maintainable prompt construction.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 73,
  "id": "ccdv-f-q073",
  "type": "single",
  "select": 1,
  "question": "Your team is preparing a new Claude application for production, and the product team has asked for a cost projection. The team needs to estimate the cost based on expected request volume, average input length, and average output length.\n\nHow would you build the projection?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Build a cost model that uses the average per-request cost from a similar Claude application the team built last year, scaling that figure by expected request volume."
   },
   {
    "key": "B",
    "text": "Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits."
   },
   {
    "key": "C",
    "text": "Build a cost model that combines expected request volume and average input tokens, treating output tokens as a small enough share of cost to leave out of the projection."
   },
   {
    "key": "D",
    "text": "Build a cost model based on expected request volume and the chosen model's pricing, treating average input and output token counts as variables to be estimated post-launch."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits.\n\nOption B is correct because Claude API cost is fundamentally driven by usage volume multiplied by the token economics of the selected model and features. A credible projection must therefore estimate requests, average input tokens per request, average output tokens per request, applicable input/output prices, and expected prompt-cache behavior. Anthropic's pricing documentation treats input, output, cache writes, and cache reads as distinct billable categories, with cache hits priced below standard input processing. A practical forecast can be modeled as: request volume × expected per-request input cost plus request volume × expected per-request output cost, adjusted for cache-write/read rates and any other applicable pricing modifiers. The model should also include ranges for variance rather than only one point estimate, because token lengths and cache-hit rates will fluctuate in production. Option A assumes a historical application has the same token profile and pricing, which may be false. Option C omits output tokens even though output pricing can be a material share of cost. Option D postpones the very token estimates the product team needs before launch. Therefore, B is the complete projection method. Relevant Study Guide topics: token accounting, model pricing, prompt caching, cost forecasting, workload sizing, and production economics.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 74,
  "id": "ccdv-f-q074",
  "type": "single",
  "select": 1,
  "question": "The product team has asked you to choose a Claude model for a new feature. The team has provided functional requirements but has not specified performance, cost, or quality targets.\n\nThe team's product manager says, \"Use whatever model gives us the best results.\" How would you respond?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets."
   },
   {
    "key": "B",
    "text": "Run every Claude model on a representative sample and pick whichever scores best on a generic benchmark."
   },
   {
    "key": "C",
    "text": "Choose a mid-tier model and ship the feature, because mid-tier models work for most use cases without specified targets."
   },
   {
    "key": "D",
    "text": "Choose the largest, highest-capability Claude model, on the grounds that \"best results\" is most likely to mean highest quality."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets.\n\nOption A is correct because model selection requires measurable non-functional requirements, not an undefined objective such as \"best.\" Anthropic's model-selection guidance explicitly frames the decision around capabilities, speed, and cost and recommends identifying those requirements before narrowing the candidate models. \"Quality\" must also be translated into task-specific success criteria-for example classification accuracy, extraction correctness, acceptable false-positive rate, or human preference. Latency may be constrained by an interactive SLA, and cost may be defined per request, per user, or per completed task. Once those thresholds exist, representative evaluations can compare candidate models using the actual prompts and data. B uses a generic benchmark that may not correlate with the application's workload. C chooses a model tier without requirements or evidence. D optimizes only for raw capability and ignores latency and cost, potentially producing an unnecessarily expensive architecture. Thus, requirements definition precedes technology selection. Relevant Study Guide topics: Understanding Reqs, functional versus non-functional requirements, quality thresholds, latency budgets, cost constraints, acceptance criteria, workload-specific evaluation, and model-selection tradeoffs.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 75,
  "id": "ccdv-f-q075",
  "type": "single",
  "select": 1,
  "question": "Your team is choosing how to add a capability to a Claude application. You want to apply the appropriate option, whether built-in tool, custom tool, Skill, or MCP server, based on the use case. You would choose the option that...",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Is the most familiar to the team based on prior experience with similar capabilities."
   },
   {
    "key": "B",
    "text": "Is the newest available option among built-in tools, custom tools, Skills, and MCP servers."
   },
   {
    "key": "C",
    "text": "Is the easiest to build given the team's current development tools and workflows."
   },
   {
    "key": "D",
    "text": "Matches the use case's scope, reuse needs, and integration context."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Matches the use case's scope, reuse needs, and integration context.\n\n\nOption D reflects the correct architecture-selection principle: extension mechanisms should be selected according to what the capability must accomplish rather than familiarity, novelty, or implementation convenience. Anthropic explicitly distinguishes Claude extension mechanisms by purpose. Built-in tools cover common capabilities already supported by the platform. Custom tools expose application-specific callable operations through defined schemas. Skills package reusable knowledge, instructions, and workflows. MCP connects Claude to external systems, APIs, databases, and services through a standardized protocol. The decision therefore depends on scope and integration boundaries. A reusable procedural workflow may belong in a Skill; access to an external enterprise system may warrant MCP; a narrowly application-specific operation can be a custom tool; and a built-in tool should generally be preferred when it already satisfies the requirement. A makes prior team experience the architectural criterion rather than requirements. B assumes newer technology is inherently better. C optimizes implementation convenience without considering maintainability, interoperability, or reuse. Therefore, D is the appropriate selection rule. Relevant Study Guide topics: built-in tools, custom tools, Skills, MCP, extension architecture, reuse boundaries, and capability selection.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 76,
  "id": "ccdv-f-q076",
  "type": "single",
  "select": 1,
  "question": "A code-review agent needs to read through 40 files, but the team wants the main conversation to stay short so later turns aren't paying for tokens spent on every file that was opened during the review.\n\nWhich architecture keeps the main agent's context lean?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Delegate the review to a subagent defined with an AgentDefinition; its tool calls and file contents stay in its own context, and only a final summary returns to the parent."
   },
   {
    "key": "B",
    "text": "Increase max_turns on the main query so Claude has enough budget to read all 40 files directly in the main conversation without the loop stopping early."
   },
   {
    "key": "C",
    "text": "Set effort to \"low\" on the main query so each turn that reads a file consumes fewer reasoning tokens, even though all 40 files still load fully into the shared main conversation."
   },
   {
    "key": "D",
    "text": "Enable include_partial_messages so file contents stream back to the main conversation incrementally as text deltas instead of arriving all at once."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Delegate the review to a subagent defined with an AgentDefinition; its tool calls and file contents stay in its own context, and only a final summary returns to the parent.\n\nCorrect. A subagent starts with a fresh context; intermediate tool calls and file contents stay inside the subagent, and only its final message returns to the parent, so the main conversation's context does not grow by the full subtask transcript.\n\n**A.** Correct. A subagent starts with a fresh context; intermediate tool calls and file contents stay inside the subagent, and only its final message returns to the parent, so the main conversation's context does not grow by the full subtask transcript.\n\n**B.** Raising max_turns only permits more tool-use round trips; it does nothing to prevent the contents of all 40 files from accumulating directly in the main conversation's context.\n\n**C.** Lower effort reduces reasoning tokens spent per turn, but the file contents themselves are still read directly into the main conversation and accumulate exactly as before.\n\n**D.** Partial message streaming changes how output is delivered in real time; it does not change whether tool results accumulate in the conversation's context window.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 77,
  "id": "ccdv-f-q077",
  "type": "single",
  "select": 1,
  "question": "A long-running agent session is approaching its context window limit. The team wants two things: a full, unabridged copy of the conversation saved before the SDK summarizes older history, and a guarantee that a specific formatting rule survives every compaction event without being paraphrased away.\n\nWhich combination of mechanisms addresses both needs?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Register a PreCompact hook to archive the full transcript first, and put the formatting rule in CLAUDE.md so it reloads on every request instead of living only in the initial prompt."
   },
   {
    "key": "B",
    "text": "Increase max_turns so compaction never triggers, and repeat the formatting rule at the start of every single user message sent throughout the session."
   },
   {
    "key": "C",
    "text": "Rely on the automatic compaction summary alone to preserve both the transcript and the formatting rule, since summaries are designed to retain conversation details verbatim."
   },
   {
    "key": "D",
    "text": "Register a PostToolUse hook to archive the transcript after each tool call completes, and place the formatting rule inside a subagent's AgentDefinition prompt instead of the main session."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Register a PreCompact hook to archive the full transcript first, and put the formatting rule in CLAUDE.md so it reloads on every request instead of living only in the initial prompt.\n\nCorrect. A PreCompact hook fires before compaction and is the documented mechanism for archiving the full transcript first, and CLAUDE.md is reloaded and re-injected on every request, so a rule placed there survives compaction rather than being paraphrased away as an early-conversation instruction would be.\n\n**A.** Correct. A PreCompact hook fires before compaction and is the documented mechanism for archiving the full transcript first, and CLAUDE.md is reloaded and re-injected on every request, so a rule placed there survives compaction rather than being paraphrased away as an early-conversation instruction would be.\n\n**B.** Compaction triggers based on the context window approaching its limit, not on turn count, so raising max_turns does not prevent it; manually repeating the rule in every message is also fragile and does not match the documented CLAUDE.md pattern.\n\n**C.** Compaction is explicitly described as summarizing older history, which can lose specific instructions from earlier in the conversation; it is not documented as preserving details verbatim.\n\n**D.** A PostToolUse hook fires after individual tool calls, not immediately before a compaction event, so it does not reliably archive the transcript at the right moment; placing the rule in a subagent's prompt also does not affect the main session's own compaction behavior.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 78,
  "id": "ccdv-f-q078",
  "type": "multiple",
  "select": 2,
  "question": "A software architect is comparing three open-source agent frameworks for a project that requires integration with multiple LLM providers and end-to-end observability via OpenTelemetry. The project's agent logic is linear and does not require the manual specification of execution graphs. The frameworks under consideration are Strands Agents SDK, LangGraph, and Pydantic AI. Based on your knowledge of these frameworks, which of the following statements are true? (Select all that apply.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The Strands Agents SDK is designed to be model-agnostic and includes first-class support for OpenTelemetry, allowing trace export to observability platforms like AWS CloudWatch."
   },
   {
    "key": "B",
    "text": "LangGraph can only orchestrate agents that use the Anthropic API because it was developed by Anthropic."
   },
   {
    "key": "C",
    "text": "LangGraph models agent workflows as directed graphs, giving developers precise control over branching and looping in execution paths."
   },
   {
    "key": "D",
    "text": "Pydantic AI includes a built-in OpenTelemetry collector that can be configured to send traces to CloudWatch out of the box."
   },
   {
    "key": "E",
    "text": "Strands Agents SDK enforces that all agents are deployed on AWS and does not permit the use of third-party model APIs."
   },
   {
    "key": "F",
    "text": "LangGraph is best suited for simple, linear agent chains because its graph model restricts the developer to a single execution path."
   }
  ],
  "correct": [
   "A",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. The Strands Agents SDK is designed to be model-agnostic and includes first-class support for OpenTelemetry, allowing trace export to observability platforms like AWS CloudWatch.\nC. LangGraph models agent workflows as directed graphs, giving developers precise control over branching and looping in execution paths.\n\nA. Official documentation confirms that Strands Agents SDK is model-agnostic, supporting Anthropic, OpenAI, Amazon Bedrock, and others. It natively integrates OpenTelemetry for distributed tracing, enabling export to any OTLP-compatible backend, including AWS CloudWatch via X-Ray. This aligns with the project's need for linear, multi-model observability.\n\nC. LangGraph's core design represents agent behaviors as directed graphs, enabling explicit control over complex, conditional flows. This is ideal when fine-grained branching and looping are needed, but the given project's linear logic does not require such manual graph specification.\n\n**A.** Official documentation confirms that Strands Agents SDK is model-agnostic, supporting Anthropic, OpenAI, Amazon Bedrock, and others. It natively integrates OpenTelemetry for distributed tracing, enabling export to any OTLP-compatible backend, including AWS CloudWatch via X-Ray. This aligns with the project's need for linear, multi-model observability.\n\n**B.** Incorrect. LangGraph is a model-agnostic framework. It can orchestrate agents using a variety of LLM providers (e.g., OpenAI, Cohere) and is not tied exclusively to Anthropic's API. Its development by Anthropic does not limit its model compatibility.\n\n**C.** LangGraph's core design represents agent behaviors as directed graphs, enabling explicit control over complex, conditional flows. This is ideal when fine-grained branching and looping are needed, but the given project's linear logic does not require such manual graph specification.\n\n**D.** Pydantic AI does not ship with a built-in OpenTelemetry collector. While it can be instrumented with OpenTelemetry SDKs like any Python application, it does not include a preconfigured collector for automatic trace export to CloudWatch or other backends.\n\n**E.** Strands Agents SDK is cloud-agnostic and not restricted to AWS. It supports multiple model providers (e.g., Anthropic, OpenAI, Ollama) and can be deployed in any environment, contrary to the claim of forced AWS deployment and API limitations.\n\n**F.** LangGraph's directed graph model is specifically designed for complex, non-linear workflows with branching and looping. Simple linear chains are more naturally handled by frameworks like Strands Agents that emphasize model-driven planning, making LangGraph overly complex for the project's requirements.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 79,
  "id": "ccdv-f-q079",
  "type": "single",
  "select": 1,
  "question": "A team wants higher-confidence answers from a fraud-detection prompt applied to a transaction description. Rather than reviewing different angles, they run the exact same prompt against the same transaction five times and keep whichever verdict -- fraudulent or legitimate -- appears most often across the five runs.\n\nWhich pattern are they using?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Parallelization by sectioning, where five different prompts each examine a distinct aspect of the same transaction independently."
   },
   {
    "key": "B",
    "text": "Parallelization by voting, where the identical task runs multiple times and the majority verdict is selected."
   },
   {
    "key": "C",
    "text": "Evaluator-optimizer, where a second LLM call critiques the first verdict and the prompt is revised until the criteria are satisfied."
   },
   {
    "key": "D",
    "text": "Prompt chaining, where each of the five runs consumes the verdict produced by the run immediately before it."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Parallelization by voting, where the identical task runs multiple times and the majority verdict is selected.\n\nCorrect. This is the voting variation of parallelization: the identical task is run multiple times to get diverse outputs, and the most common result is treated as the answer. Running the same fraud-detection prompt five times against the same transaction and keeping the verdict that appears most often across the runs is exactly that pattern.\n\n**A.** Incorrect. Parallelization by sectioning breaks a task into independent subtasks that run in parallel, with different prompts each examining a different aspect of the same input. This scenario runs one identical prompt five times against the same transaction, not five different prompts each covering a different aspect, so it does not match sectioning.\n\n**B.** Correct. This is the voting variation of parallelization: the identical task is run multiple times to get diverse outputs, and the most common result is treated as the answer. Running the same fraud-detection prompt five times against the same transaction and keeping the verdict that appears most often across the runs is exactly that pattern.\n\n**C.** Incorrect. Evaluator-optimizer is an iterative loop in which one LLM call generates a response and a second call critiques or evaluates it, with the response revised across cycles until it satisfies the evaluator's criteria. The scenario has no critique step and no revision between runs; it simply repeats the same prompt and tallies verdicts.\n\n**D.** Incorrect. Prompt chaining decomposes a task into a sequence of steps where each LLM call processes the output of the previous one. The five runs in the scenario are independent and identical; none of them consumes another run's verdict as input.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 80,
  "id": "ccdv-f-q080",
  "type": "single",
  "select": 1,
  "question": "A support-ticket pipeline runs a simple sentiment classification step on every incoming ticket before the main conversation continues with more complex reasoning. This classification happens far more often than any other step and doesn't need the team's most capable model.\n\nHow should the team reduce cost for this specific step?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Run the classification step in the main conversation using the same model as the rest of the pipeline, since subagents cannot be configured with a different model than their caller."
   },
   {
    "key": "B",
    "text": "Route the classification step to a dedicated subagent configured to use a faster, cheaper model, since subagents can be assigned their own model independent of the main conversation."
   },
   {
    "key": "C",
    "text": "Convert the classification step into an evaluator-optimizer loop, since that pattern always uses a cheaper model for the evaluator half of the loop."
   },
   {
    "key": "D",
    "text": "Convert the pipeline into an agent team, since every teammate in an agent team automatically defaults to the cheapest available model."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Route the classification step to a dedicated subagent configured to use a faster, cheaper model, since subagents can be assigned their own model independent of the main conversation.\n\nCorrect. Anthropic recommends delegating high-volume, straightforward tasks to subagents assigned to smaller models such as `Claude Haiku 4.5`, which is described as the fastest and cheapest model and is well suited for sub-agent execution. Subagents can be configured independently of the main conversation's model, making this a valid cost-reduction strategy for a frequent classification step.\n\n**A.** Incorrect. Anthropic's agent frameworks and documentation allow subagents to be configured with their own model independent of the main conversation. The recommended orchestrator-subagent pattern uses a faster, cheaper model such as `Claude Haiku` for high-volume, straightforward subtasks while the main conversation continues with a more capable model.\n\n**B.** Correct. Anthropic recommends delegating high-volume, straightforward tasks to subagents assigned to smaller models such as `Claude Haiku 4.5`, which is described as the fastest and cheapest model and is well suited for sub-agent execution. Subagents can be configured independently of the main conversation's model, making this a valid cost-reduction strategy for a frequent classification step.\n\n**C.** Incorrect. An evaluator-optimizer loop is designed for iterative generation and assessment, and Anthropic does not state that it always uses a cheaper model for the evaluator half. The supported cost-reduction approach is to assign the classification step to a dedicated subagent configured with a faster, cheaper model rather than converting the step into a different agent pattern.\n\n**D.** Incorrect. Agent team members do not automatically default to the cheapest available model. Model assignment is configurable, and the recommended approach is to configure the classification subagent with a cheaper model such as `Claude Haiku` rather than relying on an automatic lowest-cost default.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 81,
  "id": "ccdv-f-q081",
  "type": "multiple",
  "select": 2,
  "question": "A long-running autonomous agent conversation regularly approaches the model's context window limit. The architecture needs the platform to automatically summarize earlier parts of the conversation server-side, and to clear out stale tool results as the token limit approaches, without the client managing this manually.\n\nWhich two features should the architecture enable?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Compaction"
   },
   {
    "key": "B",
    "text": "Context editing"
   },
   {
    "key": "C",
    "text": "Prompt caching"
   },
   {
    "key": "D",
    "text": "Token counting"
   },
   {
    "key": "E",
    "text": "Batch processing"
   },
   {
    "key": "F",
    "text": "Files API"
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Compaction\nB. Context editing\n\nA. Compaction provides server-side context summarization for long-running conversations, automatically summarizing earlier parts of the conversation as the window limit approaches.\n\nB. Context editing automatically manages conversation context with configurable strategies, including clearing tool results as token limits approach, matching the stale-tool-result requirement.\n\n**A.** Compaction provides server-side context summarization for long-running conversations, automatically summarizing earlier parts of the conversation as the window limit approaches.\n\n**B.** Context editing automatically manages conversation context with configurable strategies, including clearing tool results as token limits approach, matching the stale-tool-result requirement.\n\n**C.** Prompt caching reduces cost and latency for reused static content, but it does not summarize conversation history or clear stale tool results.\n\n**D.** Token counting only reports how many tokens a message would use; it does not summarize history or manage stale tool results.\n\n**E.** Batch processing is for asynchronous bulk request handling and is unrelated to managing an ongoing long-running conversation's context window.\n\n**F.** The Files API manages uploaded documents for reuse; it does not summarize conversation history or clear tool results within an ongoing session.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 82,
  "id": "ccdv-f-q082",
  "type": "single",
  "select": 1,
  "question": "A team wants to build a production billing pipeline's core logic entirely around a platform capability currently labeled Beta in Anthropic's feature-availability table. A tech lead raises a concern before approving the design.\n\nWhat is the most accurate basis for that concern?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Beta features are billed at a 50% premium compared to generally available features, making them unsuitable for cost-sensitive billing pipelines."
   },
   {
    "key": "B",
    "text": "Beta features cannot be used together with prompt caching or batch processing, which would prevent the pipeline from scaling cost-effectively."
   },
   {
    "key": "C",
    "text": "Beta features are capped at 200k tokens of context regardless of the underlying model, which would limit the pipeline's document processing."
   },
   {
    "key": "D",
    "text": "Beta features may change significantly or be discontinued based on feedback and are not guaranteed for ongoing production use, unlike GA features."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Beta features may change significantly or be discontinued based on feedback and are not guaranteed for ongoing production use, unlike GA features.\n\nCorrect -- by definition, Beta features may change significantly or be discontinued based on feedback and are not guaranteed for ongoing production use, which is exactly the risk of anchoring core billing logic to one.\n\n**A.** Incorrect -- Beta classification does not imply a fixed premium pricing rule; pricing varies by feature and model, not by a blanket beta surcharge.\n\n**B.** Incorrect -- there's no general rule that beta-classified features are incompatible with caching or batch processing; compatibility depends on the specific feature, not its beta status alone.\n\n**C.** Incorrect -- context window limits are tied to the underlying model, not to whether a feature is classified as beta.\n\n**D.** Correct -- by definition, Beta features may change significantly or be discontinued based on feedback and are not guaranteed for ongoing production use, which is exactly the risk of anchoring core billing logic to one.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 83,
  "id": "ccdv-f-q083",
  "type": "single",
  "select": 1,
  "question": "An agent built with the Claude Agent SDK reads an authentication module in one query call, and the team wants a second, later query call to reference 'it' meaning that same module without re-reading or re-explaining context.\n\nWhat should they capture and reuse from the first call to accomplish this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Capture the session_id from the SystemMessage of type 'init' during the first query, then pass it as the resume option on the second query call."
   },
   {
    "key": "B",
    "text": "Capture the full text of every message from the first query and re-send it as the prompt string prefix on the second query call."
   },
   {
    "key": "C",
    "text": "Capture the file contents read during the first query and hardcode them into the system prompt used for the second query call."
   },
   {
    "key": "D",
    "text": "Capture the tool_use_id from the first query's Read tool call and pass it as the model parameter on the second query call."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Capture the session_id from the SystemMessage of type 'init' during the first query, then pass it as the resume option on the second query call.\n\nCorrect -- capturing the session_id from the init SystemMessage and passing it to the resume option lets the second query continue with full context from the first, including which file was read.\n\n**A.** Correct -- capturing the session_id from the init SystemMessage and passing it to the resume option lets the second query continue with full context from the first, including which file was read.\n\n**B.** Incorrect -- manually re-sending message text as a prompt prefix is not how session continuity works in the SDK and would not reliably reconstruct tool state like files already read.\n\n**C.** Incorrect -- hardcoding file contents into a new system prompt duplicates work the resume option already handles and doesn't scale to arbitrary prior context.\n\n**D.** Incorrect -- tool_use_id identifies a specific tool invocation, not a session, and the model parameter selects which Claude model to use, not which session to resume.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 84,
  "id": "ccdv-f-q084",
  "type": "single",
  "select": 1,
  "question": "An engineer building an SDLC automation wants an agent to run git status, stage changes, and commit them as part of a scripted workflow, in addition to reading and editing source files.\n\nWhich built-in Agent SDK tool grants this ability to run version-control commands directly?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Bash, which runs terminal commands and scripts, including git operations, in addition to other shell tasks"
   },
   {
    "key": "B",
    "text": "Grep, which searches file contents with regex and has no ability to invoke external commands like git"
   },
   {
    "key": "C",
    "text": "WebFetch, which retrieves and parses web page content and cannot execute local version-control commands"
   },
   {
    "key": "D",
    "text": "AskUserQuestion, which prompts the user with clarifying multiple-choice questions rather than executing shell commands"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Bash, which runs terminal commands and scripts, including git operations, in addition to other shell tasks\n\nCorrect. Bash is documented as running terminal commands and scripts, explicitly including git operations, which covers status, staging, and committing.\n\n**A.** Correct. Bash is documented as running terminal commands and scripts, explicitly including git operations, which covers status, staging, and committing.\n\n**B.** Incorrect. Grep only searches file contents with regex; it cannot invoke git or any other external command.\n\n**C.** Incorrect. WebFetch retrieves remote web content; it has no capability to run local shell or git commands.\n\n**D.** Incorrect. AskUserQuestion is for gathering clarifying input from the user, not for executing version-control operations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 85,
  "id": "ccdv-f-q085",
  "type": "single",
  "select": 1,
  "question": "A batch-processing service runs thousands of independent, single-shot document classification tasks per hour using the Agent SDK. Each task is unrelated to the others, must never be resumable later, and the team wants to avoid unnecessary disk writes for these throwaway sessions in their TypeScript service.\n\nWhat is the correct session configuration?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set `persistSession: false` on each `query()` call, so the session exists only in memory for the duration of that call and nothing is written to disk"
   },
   {
    "key": "B",
    "text": "Set `continue: true` on each call so every task shares a single reusable session instead of creating a new one each time"
   },
   {
    "key": "C",
    "text": "Call `resume` with a randomly generated session ID on each task, which creates a new in-memory-only session and skips disk persistence"
   },
   {
    "key": "D",
    "text": "Use the Python SDK's `ClaudeSDKClient` instead, since only the Python SDK offers an option to skip writing session transcripts to disk"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Set `persistSession: false` on each `query()` call, so the session exists only in memory for the duration of that call and nothing is written to disk\n\nCorrect. For a stateless task where nothing should be written to disk, TypeScript's `persistSession: false` option keeps the session in memory only for the duration of the call; this is documented as a TypeScript-only capability since Python always persists sessions to disk.\n\n**A.** Correct. For a stateless task where nothing should be written to disk, TypeScript's `persistSession: false` option keeps the session in memory only for the duration of the call; this is documented as a TypeScript-only capability since Python always persists sessions to disk.\n\n**B.** Incorrect. `continue: true` resumes the most recent session and would incorrectly merge unrelated classification tasks into one shared, growing conversation rather than keeping each task independent and non-persistent.\n\n**C.** Incorrect. `resume` is for returning to an existing session by its real ID; supplying a random ID does not create a valid in-memory-only session and is not the documented mechanism for skipping persistence.\n\n**D.** Incorrect. It is the TypeScript SDK, not Python, that offers the in-memory-only `persistSession: false` behavior; Python always persists sessions to disk, so switching to Python would not achieve the goal.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 86,
  "id": "ccdv-f-q086",
  "type": "single",
  "select": 1,
  "question": "A developer resumes a long-running session with `claude --resume` that was previously running on Opus 4.6. Between the original session and the resume, the organization's admin retired Opus 4.6 and it is no longer reachable.\n\nWhat happens when the session resumes?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The resumed session falls through to the normal precedence order for selecting a model, since the restored model is unavailable, rather than failing outright"
   },
   {
    "key": "B",
    "text": "The resume command fails immediately with an unrecoverable error, since resumed sessions are hard-locked to their originally saved model with no fallback path"
   },
   {
    "key": "C",
    "text": "The session silently resumes on Opus 4.6 anyway, since Claude Code caches the model's response format locally and does not need to reach the retired model to continue an existing transcript"
   },
   {
    "key": "D",
    "text": "The session automatically and permanently updates its saved `model` setting to whatever the resume happens to fall back to, overwriting the user's prior explicit `/model` choice for all future sessions"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. The resumed session falls through to the normal precedence order for selecting a model, since the restored model is unavailable, rather than failing outright\n\nCorrect. Resumed sessions normally keep the model they were using when the transcript was saved, but if that restored model has been retired or is excluded, the session falls through to the normal precedence order for setting a model rather than resuming on an unreachable model or failing outright.\n\n**A.** Correct. Resumed sessions normally keep the model they were using when the transcript was saved, but if that restored model has been retired or is excluded, the session falls through to the normal precedence order for setting a model rather than resuming on an unreachable model or failing outright.\n\n**B.** Incorrect. Resumed sessions are not hard-locked with no fallback; the documented behavior specifically covers the retired/excluded case by falling through to normal model-selection precedence instead of erroring.\n\n**C.** Incorrect. Claude Code needs to reach the actual model to process new requests; a retired, unreachable model cannot silently continue serving the session, which is exactly why the fallback to normal precedence exists.\n\n**D.** Incorrect. Falling through to normal precedence for one resumed session does not describe a documented behavior of permanently overwriting the user's saved settings file as a side effect.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 87,
  "id": "ccdv-f-q087",
  "type": "multiple",
  "select": 3,
  "question": "A team is scoping the operational limits of the Message Batches API before committing to it for a recurring nightly job. Select the statements below that accurately describe these limits.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A single Message Batch is restricted to a maximum of 100,000 requests or 256 MB, and the API will immediately reject any batch exceeding either of these limits."
   },
   {
    "key": "B",
    "text": "A batch expires if it has not finished processing within 24 hours of creation, and any requests still unprocessed at that point are automatically marked as expired."
   },
   {
    "key": "C",
    "text": "Batch results remain available for download for 29 days after the batch creation, after which the batch record still exists but results can no longer be downloaded."
   },
   {
    "key": "D",
    "text": "Batches are visible across every Workspace in an organization by default, so a batch created in one Workspace can be listed and its results downloaded by any other Workspace."
   },
   {
    "key": "E",
    "text": "A batch can include `stream: true` on individual requests as long as the overall batch call itself is submitted without streaming, letting each request specify its own streaming behavior."
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. A single Message Batch is restricted to a maximum of 100,000 requests or 256 MB, and the API will immediately reject any batch exceeding either of these limits.\nB. A batch expires if it has not finished processing within 24 hours of creation, and any requests still unprocessed at that point are automatically marked as expired.\nC. Batch results remain available for download for 29 days after the batch creation, after which the batch record still exists but results can no longer be downloaded.\n\nA. Correct. The Message Batches API enforces a strict limit of 100,000 requests or 256 MB, whichever is reached first. If a batch exceeds either limit, the API immediately rejects the submission.\n\nB. Correct. A batch has a 24-hour processing window starting from its creation. If it does not finish within that time, any remaining unprocessed requests are automatically marked as expired.\n\nC. Correct. Batch results are downloadable for 29 days after creation. After that period, the batch object remains visible, but the results files are no longer accessible for download.\n\n**A.** Correct. The Message Batches API enforces a strict limit of 100,000 requests or 256 MB, whichever is reached first. If a batch exceeds either limit, the API immediately rejects the submission.\n\n**B.** Correct. A batch has a 24-hour processing window starting from its creation. If it does not finish within that time, any remaining unprocessed requests are automatically marked as expired.\n\n**C.** Correct. Batch results are downloadable for 29 days after creation. After that period, the batch object remains visible, but the results files are no longer accessible for download.\n\n**D.** Incorrect. Batches are scoped to a single Workspace; only API keys belonging to the creating Workspace can list and download its results. They are not automatically shared across Workspaces in an organization.\n\n**E.** Incorrect. The `stream` parameter is not supported on individual requests within a batch and will trigger a validation error. Batch processing always produces a results file and does not support streaming delivery.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 88,
  "id": "ccdv-f-q088",
  "type": "single",
  "select": 1,
  "question": "A platform team deploys `.claude/settings.json` to every repository with a `permissions.deny` rule blocking `Bash(curl *)`. An individual developer adds the opposite rule, an `allow` entry for `Bash(curl *)`, in their own `.claude/settings.local.json` because they need curl for a personal debugging script.\n\nWhen that developer runs Claude Code in the repo, what happens to `curl` commands?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Curl commands stay blocked, because permission rules merge across scopes instead of one scope overriding another, so a local allow cannot remove a project-level deny"
   },
   {
    "key": "B",
    "text": "Curl commands become allowed, because `settings.local.json` has higher precedence than `settings.json` and its permission rules fully replace the lower-scoped file's rules"
   },
   {
    "key": "C",
    "text": "Curl commands prompt for manual approval every time, because conflicting allow and deny rules across scopes cancel each other out and fall back to interactive confirmation"
   },
   {
    "key": "D",
    "text": "Curl commands stay blocked only until the developer restarts Claude Code, after which the local settings file's allow rule takes effect on the next session"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Curl commands stay blocked, because permission rules merge across scopes instead of one scope overriding another, so a local allow cannot remove a project-level deny\n\nCorrect. Permission rules are the documented exception to normal settings precedence: they merge across scopes instead of one scope overriding another, so a deny rule from a higher-precedence project scope remains in effect even when a lower-precedence local scope adds a conflicting allow.\n\n**A.** Correct. Permission rules are the documented exception to normal settings precedence: they merge across scopes instead of one scope overriding another, so a deny rule from a higher-precedence project scope remains in effect even when a lower-precedence local scope adds a conflicting allow.\n\n**B.** Incorrect. While `settings.local.json` does sit above `settings.json` in general precedence, permission rules specifically merge rather than override, so the local file's allow entry does not erase the project-level deny.\n\n**C.** Incorrect. Merging conflicting permission rules does not produce an interactive prompt state; the deny rule simply continues to block the command outright.\n\n**D.** Incorrect. Restarting Claude Code does not change how permission rules merge across scopes; the project-level deny remains effective before and after any restart.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 89,
  "id": "ccdv-f-q089",
  "type": "single",
  "select": 1,
  "question": "A vendor wants to package a set of internal-workflow skills, a custom subagent, an audit-logging hook, and a database MCP server as one reusable unit that different project teams can load into their own Claude Code sessions without copying files into each project.\n\nWhich design satisfies this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Package the skills, agent, hooks, and MCP server definition into a plugin directory (with `skills/`, `agents/`, `hooks/`, and `.mcp.json`) and have each project load it via the `plugins` option pointing at the plugin's path."
   },
   {
    "key": "B",
    "text": "Place the skills, subagent, hooks, and MCP config into a base directory; then have each team copy the skills into their `.claude/skills/` folder and manually add the subagent, hooks, and MCP settings to their project configuration."
   },
   {
    "key": "C",
    "text": "Publish the skills, subagent definition, hook scripts, and MCP server configuration as a single CLAUDE.md file with sections like `## Skills`, `## Agents`, `## Hooks`, and `## MCP`, and have each project load it by adding an import directive in the project configuration."
   },
   {
    "key": "D",
    "text": "Register the skills, subagent logic, hook scripts, and MCP server configuration as a single custom tool function in the Agent SDK's tool registry, and have each project team enable it by adding the tool to their session's tool-calling loop."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Package the skills, agent, hooks, and MCP server definition into a plugin directory (with `skills/`, `agents/`, `hooks/`, and `.mcp.json`) and have each project load it via the `plugins` option pointing at the plugin's path.\n\nOfficial Claude Code documentation recommends packaging reusable capabilities as a plugin directory with root-level `skills/`, `agents/`, `hooks/`, and `.mcp.json`, plus the required `.claude-plugin/plugin.json` metadata file. This lets projects load the unit through the `plugins` option or `/plugin install`, with no file copying into each project. Hooks can implement audit logging, and `.mcp.json` centralizes the MCP server definition for consistent reuse.\n\n**A.** Official Claude Code documentation recommends packaging reusable capabilities as a plugin directory with root-level `skills/`, `agents/`, `hooks/`, and `.mcp.json`, plus the required `.claude-plugin/plugin.json` metadata file. This lets projects load the unit through the `plugins` option or `/plugin install`, with no file copying into each project. Hooks can implement audit logging, and `.mcp.json` centralizes the MCP server definition for consistent reuse.\n\n**B.** This approach requires each team to copy files into their own project and manually configure subagents, hooks, and MCP settings, which violates the requirement of loading a single reusable unit without copying files. It also splits the components across project folders and configuration, making updates and consistency harder to maintain.\n\n**C.** `CLAUDE.md` is an instruction and memory file, not a plugin packaging format that can declare structured skills, agents, hooks, or MCP servers as loadable components. There is no documented import directive that turns these sections into dynamically loaded agent and MCP capabilities, so this design does not satisfy the requirement.\n\n**D.** A single custom tool function cannot package the distinct capabilities of skills, subagents, lifecycle hooks, and MCP server definitions into a reusable plugin. This approach would require manually registering tool logic in each project and cannot provide the automatic skill activation, hook lifecycle execution, or MCP connection handling that the plugin directory structure provides.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 90,
  "id": "ccdv-f-q090",
  "type": "single",
  "select": 1,
  "question": "A product team needs a model for code generation, data analysis, and agentic tool use across a large user base. They want the best combination of speed and intelligence rather than the highest-capability, most expensive model.\n\nWhich current Claude model fits this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Claude Opus 5.5"
   },
   {
    "key": "B",
    "text": "Claude Haiku 4.5"
   },
   {
    "key": "C",
    "text": "Claude Sonnet 5.5"
   },
   {
    "key": "D",
    "text": "Claude Mythos 5.1"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Claude Sonnet 5.5\n\nSonnet 5.5 is described in the models overview as the best combination of speed and intelligence, and the model selection matrix lists code generation, data analysis, and agentic tool use as its example use cases.\n\n**A.** Opus 5.5 is positioned for long-running agentic coding and knowledge work, with moderate latency and a higher price ($4 / $20 per MTok), so it sits above the balanced speed-and-intelligence tier the requirement asks for.\n\n**B.** Haiku 4.5 is the fastest and cheapest tier, positioned for real-time and high-volume cost-sensitive work, not as the model with the best combination of speed and intelligence for everyday coding and analysis.\n\n**C.** Sonnet 5.5 is described in the models overview as the best combination of speed and intelligence, and the model selection matrix lists code generation, data analysis, and agentic tool use as its example use cases.\n\n**D.** Mythos 5.1 offers the same capabilities as Fable 5.1, the highest-capability tier, and is available only to Project Glasswing participants, so it is neither the balanced choice nor open to a general user base.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 91,
  "id": "ccdv-f-q091",
  "type": "single",
  "select": 1,
  "question": "A team's usage sits well under their published requests-per-minute limit, yet they begin seeing 429 errors after a marketing campaign causes API traffic to triple within a few minutes. Historical usage was steady before the spike.\n\nWhat is the most likely explanation, and what should the team change to avoid recurrence?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The spike likely triggered acceleration limits designed to catch sharp usage increases; the team should ramp traffic up gradually and keep usage patterns more consistent"
   },
   {
    "key": "B",
    "text": "The published RPM limit only applies to the Message Batches API, so any spike in synchronous Messages API traffic will always return 429 regardless of pacing"
   },
   {
    "key": "C",
    "text": "The 429 responses indicate the organization's API key was automatically revoked for suspected abuse and must be regenerated in the Console"
   },
   {
    "key": "D",
    "text": "The spike exceeded the request size limit for the Messages API, so each oversized request was individually rejected with a rate-limit error"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. The spike likely triggered acceleration limits designed to catch sharp usage increases; the team should ramp traffic up gradually and keep usage patterns more consistent\n\nCorrect. The documentation notes that a sharp increase in usage can trigger 429 errors from acceleration limits even while under the standard published limits, and the recommended mitigation is to ramp traffic up gradually and maintain consistent usage patterns.\n\n**A.** Correct. The documentation notes that a sharp increase in usage can trigger 429 errors from acceleration limits even while under the standard published limits, and the recommended mitigation is to ramp traffic up gradually and maintain consistent usage patterns.\n\n**B.** Published RPM limits apply per model to the Messages API itself; the Message Batches API has its own separate rate limits, so this statement misattributes which endpoint the published limit governs.\n\n**C.** A 429 rate_limit_error does not indicate key revocation; a revoked or invalid key produces a 401 authentication_error instead, so this diagnosis points to the wrong error type.\n\n**D.** Exceeding the maximum request payload size produces a 413 request_too_large error, not a 429, and is unrelated to the number of requests sent per minute.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 92,
  "id": "ccdv-f-q092",
  "type": "multiple",
  "select": 3,
  "question": "An engineer is deciding, for several failing requests, whether simply switching to the streaming API or increasing max_tokens would resolve the failure. Select all of the following scenarios where neither of those two changes would fix the described error.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A request fails with 413 request_too_large because the inlined message content itself exceeds the Messages API's maximum request payload size"
   },
   {
    "key": "B",
    "text": "A request fails with 409 conflict_error because two workers concurrently modified the same underlying resource before this request was sent"
   },
   {
    "key": "C",
    "text": "A response completes with stop_reason set to max_tokens because the generated content reached the configured output token cap"
   },
   {
    "key": "D",
    "text": "A request fails with 401 authentication_error because the API key used to sign the request has expired"
   },
   {
    "key": "E",
    "text": "A request fails with 504 timeout_error because a very large non-streaming generation ran past the idle-connection limit on an unreliable network"
   }
  ],
  "correct": [
   "A",
   "B",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. A request fails with 413 request_too_large because the inlined message content itself exceeds the Messages API's maximum request payload size\nB. A request fails with 409 conflict_error because two workers concurrently modified the same underlying resource before this request was sent\nD. A request fails with 401 authentication_error because the API key used to sign the request has expired\n\nA. Correct: the payload itself is too large regardless of streaming or max_tokens; the fix is to reduce the request size, for example by using the Files API instead of inlining content.\n\nB. Correct: a resource-state conflict from concurrent modification is unrelated to streaming or token limits and requires resolving the conflict, such as re-reading current state before retrying.\n\nD. Correct: an expired API key is a credential problem that streaming or max_tokens changes cannot fix; the key itself must be renewed or replaced.\n\n**A.** Correct: the payload itself is too large regardless of streaming or max_tokens; the fix is to reduce the request size, for example by using the Files API instead of inlining content.\n\n**B.** Correct: a resource-state conflict from concurrent modification is unrelated to streaming or token limits and requires resolving the conflict, such as re-reading current state before retrying.\n\n**C.** Incorrect: this is exactly the case increasing max_tokens is meant to address, since output was truncated at the configured cap.\n\n**D.** Correct: an expired API key is a credential problem that streaming or max_tokens changes cannot fix; the key itself must be renewed or replaced.\n\n**E.** Incorrect: this is exactly the case switching to the streaming API (or the Message Batches API) is documented to address, since it avoids the long unbroken connection that triggers the timeout.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 93,
  "id": "ccdv-f-q093",
  "type": "single",
  "select": 1,
  "question": "A billing-sensitive workload needs to know exactly how many tokens a large prompt will consume before it is sent to Claude, so the team can stay within a budget. What should they use?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A token counting call, to determine the number of tokens in a message before sending it"
   },
   {
    "key": "B",
    "text": "The effort parameter set to low, which returns an estimated token count in the response metadata"
   },
   {
    "key": "C",
    "text": "The Files API, since uploaded files automatically report their token size before generation begins"
   },
   {
    "key": "D",
    "text": "The budget_tokens field on extended thinking, which caps and reports total request token usage"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. A token counting call, to determine the number of tokens in a message before sending it\n\nToken counting lets you determine the number of tokens in a message before sending it, which is exactly what a pre-send budget check requires.\n\n**A.** Token counting lets you determine the number of tokens in a message before sending it, which is exactly what a pre-send budget check requires.\n\n**B.** The effort parameter controls how many tokens Claude spends when responding; it does not return a pre-send token estimate for a prompt.\n\n**C.** The Files API manages uploading and reusing files across requests; it does not itself report token counts for a prompt before generation.\n\n**D.** Budget_tokens caps thinking token spend during manual extended thinking; it is not a pre-send counting mechanism for the full request.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 94,
  "id": "ccdv-f-q094",
  "type": "single",
  "select": 1,
  "question": "While streaming a response with extended thinking enabled, a client receives a thinking content block that ends with a signature_delta event immediately before content_block_stop.\n\nWhat is the purpose of this signature_delta event?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "It provides a signature used to verify the integrity of the thinking block's content."
   },
   {
    "key": "B",
    "text": "It marks the point at which the thinking block's token usage should be added to the cumulative usage total."
   },
   {
    "key": "C",
    "text": "It indicates that the thinking block has been redacted for policy compliance and its content should be discarded."
   },
   {
    "key": "D",
    "text": "It signals that a fallback model has taken over generation for the remainder of the response."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. It provides a signature used to verify the integrity of the thinking block's content.\n\nCorrect - the signature_delta event carries a signature used to verify the integrity of the preceding thinking content, sent just before the block closes.\n\n**A.** Correct - the signature_delta event carries a signature used to verify the integrity of the preceding thinking content, sent just before the block closes.\n\n**B.** Token usage accounting happens through the usage field on message_delta and message_start, not through signature_delta.\n\n**C.** Redaction of thinking content is a distinct mechanism and is not what signature_delta communicates; signature_delta is about integrity verification, not content redaction.\n\n**D.** Model fallback during streaming is represented by dedicated fallback content blocks at model boundaries, not by a signature_delta on a thinking block.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 95,
  "id": "ccdv-f-q095",
  "type": "single",
  "select": 1,
  "question": "A junior engineer asks why Claude appears to produce text piece by piece rather than generating the entire response instantly. Which explanation best matches how Claude generates output?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Claude autoregressively predicts the next token based on the prompt and previously generated tokens, repeating the process to build the full response."
   },
   {
    "key": "B",
    "text": "Claude retrieves the entire response from a precomputed lookup table by matching the prompt's embedding to a database of response embeddings and returning the nearest full text."
   },
   {
    "key": "C",
    "text": "Claude generates the full response as a complete string in one forward pass through the model, then splits it into tokens only for transmission to the client."
   },
   {
    "key": "D",
    "text": "Claude generates tokens in a random order, then applies a learned reordering function to arrange them into a coherent response before returning it."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Claude autoregressively predicts the next token based on the prompt and previously generated tokens, repeating the process to build the full response.\n\nCorrect. Claude's generation is autoregressive, meaning it iteratively predicts the next token conditioned on all preceding tokens and the input prompt. This token-by-token process creates the appearance of text being produced piece by piece, as the model continues until a stop condition is met.\n\n**A.** Correct. Claude's generation is autoregressive, meaning it iteratively predicts the next token conditioned on all preceding tokens and the input prompt. This token-by-token process creates the appearance of text being produced piece by piece, as the model continues until a stop condition is met.\n\n**B.** Incorrect. Claude does not use a precomputed lookup table; it actively generates each token through model computations. The response is not retrieved from a database of embeddings but is dynamically predicted one token at a time.\n\n**C.** Incorrect. Claude does not generate the entire response in a single forward pass. Instead, it produces output sequentially, with each token prediction step depending on the prior tokens, causing the piece-by-piece display.\n\n**D.** Incorrect. Claude predicts tokens in a left-to-right, sequential order, not randomly. There is no learned reordering function applied after generation; the coherence emerges naturally from the autoregressive process.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 96,
  "id": "ccdv-f-q096",
  "type": "single",
  "select": 1,
  "question": "A support-ticket triage service sends the same 6,000-token system prompt and tool definitions with every request, followed by a unique customer message. Requests arrive in bursts roughly every 30 seconds throughout the day. The team wants to cut input token costs on the repeated prefix without adding infrastructure.\n\nWhich change addresses this most directly?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Mark the system prompt and tool definitions with a 5-minute ephemeral cache_control breakpoint; repeated requests then read the prefix from cache, avoiding the full input price."
   },
   {
    "key": "B",
    "text": "Move the system prompt and tool definitions into each request's user message so that the fixed 6,000-token prefix is cached per message, cutting input costs across the 30-second burst cycle."
   },
   {
    "key": "C",
    "text": "Reduce the max_tokens parameter on every request to the minimum needed for a short triage response, so Claude's completions stay brief and the blended token cost per call decreases."
   },
   {
    "key": "D",
    "text": "Switch the tool definitions to a compact JSON schema with shorter property names and fewer nested objects, so the 6,000-token prefix shrinks and each request consumes fewer input tokens."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Mark the system prompt and tool definitions with a 5-minute ephemeral cache_control breakpoint; repeated requests then read the prefix from cache, avoiding the full input price.\n\nCorrect. The system prompt and tool definitions form a stable prefix that is reused within a short window, making prompt caching ideal. By marking them with a 5-minute ephemeral cache_control breakpoint, subsequent requests in the burst read from cache and pay only a fraction of the full input price, directly cutting costs.\n\n**A.** Correct. The system prompt and tool definitions form a stable prefix that is reused within a short window, making prompt caching ideal. By marking them with a 5-minute ephemeral cache_control breakpoint, subsequent requests in the burst read from cache and pay only a fraction of the full input price, directly cutting costs.\n\n**B.** Incorrect. Simply moving the prefix into the user message does not enable caching; prompt caching requires an explicit cache_control breakpoint on the content. Without that, each request is still billed for the full 6,000 tokens, so input costs remain unchanged regardless of role placement.\n\n**C.** Incorrect. Reducing max_tokens limits the length of the model's output, which reduces output token spend, but it does nothing to lower the repeated 6,000-token input prefix cost. The scenario targets input cost reduction, so this change is misaligned.\n\n**D.** Incorrect. A compact schema reduces the token count of the prefix, but every request still pays full input price for that smaller prefix. Prompt caching would allow repeated reads from cache at a much lower cost per request, making it a more effective solution for the burst pattern.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 97,
  "id": "ccdv-f-q097",
  "type": "single",
  "select": 1,
  "question": "An engineer is building a research agent that needs to read dozens of files across a large repository to answer one question, without letting all that file content pile up in the main conversation's context.\n\nWhich design best achieves this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Delegate the file exploration to a subagent, whose fresh context absorbs all the intermediate reads while only its final summary message returns to the parent"
   },
   {
    "key": "B",
    "text": "Read every file directly in the main agent loop, then issue a manual /compact command immediately afterward to shrink the accumulated history"
   },
   {
    "key": "C",
    "text": "Read every file directly in the main agent loop, but set effort to low so the extra file content consumes fewer tokens per turn"
   },
   {
    "key": "D",
    "text": "Store all file contents in a custom MCP resource and have the main agent fetch a single combined resource URI instead of individual files"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Delegate the file exploration to a subagent, whose fresh context absorbs all the intermediate reads while only its final summary message returns to the parent\n\nCorrect. A subagent runs in its own fresh conversation; intermediate tool calls and results stay inside the subagent, and only its final message returns to the parent, so the main context grows by a summary rather than every file read.\n\n**A.** Correct. A subagent runs in its own fresh conversation; intermediate tool calls and results stay inside the subagent, and only its final message returns to the parent, so the main context grows by a summary rather than every file read.\n\n**B.** Incorrect. Reading everything in the main loop still pays the full context cost of every file during exploration; manual compaction afterward summarizes history but doesn't prevent that cost from accumulating first, and it also risks losing detail the task still needs.\n\n**C.** Incorrect. The effort setting controls how much reasoning Claude applies per turn; it reduces token usage from reasoning, not the token cost of the file contents themselves being read into context.\n\n**D.** Incorrect. Combining file contents into one MCP resource still delivers that same total content into the main agent's context when fetched; it does not isolate it the way a subagent's separate conversation does.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 98,
  "id": "ccdv-f-q098",
  "type": "single",
  "select": 1,
  "question": "A prompt written for a legal-document summarizer produces inconsistent structure across runs, and engineers on the team disagree about why.\n\nBefore tuning the prompt further, which practice would most directly reveal ambiguity in the current wording?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Show the prompt to a colleague who has minimal context on the task and ask them to follow it exactly as written, since confusion for a human reader tends to predict confusion for Claude"
   },
   {
    "key": "B",
    "text": "Rerun the identical, unedited prompt against the model twenty times and keep only the most common resulting structure, treating majority voting as a substitute for locating the ambiguity"
   },
   {
    "key": "C",
    "text": "Ask Claude to explain its own instructions back in a separate call, treating the model's paraphrase of the prompt as a reliable substitute for a human comprehension check"
   },
   {
    "key": "D",
    "text": "Reduce the temperature to zero for the summarizer's requests, on the assumption that ambiguity in phrasing is resolved by lower-variance sampling rather than by clearer instructions"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Show the prompt to a colleague who has minimal context on the task and ask them to follow it exactly as written, since confusion for a human reader tends to predict confusion for Claude\n\nCorrect. The golden rule for clarity is to show the prompt to a colleague with minimal context and have them follow it; if they are confused, Claude is likely to be confused too.\n\n**A.** Correct. The golden rule for clarity is to show the prompt to a colleague with minimal context and have them follow it; if they are confused, Claude is likely to be confused too.\n\n**B.** Incorrect. Majority voting across repeated runs of an ambiguous prompt does not locate or fix the ambiguity in the wording itself.\n\n**C.** Incorrect. A model's own paraphrase of its instructions is not documented as a reliable substitute for an independent human comprehension check.\n\n**D.** Incorrect. Lowering temperature reduces sampling variance but does not address ambiguous or unclear instruction wording, which is a distinct problem from output randomness.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 99,
  "id": "ccdv-f-q099",
  "type": "single",
  "select": 1,
  "question": "A summarization service parses the response text as JSON. For very long transcripts, the JSON string is occasionally cut off mid-object and the parser raises a decode error. Investigating, the engineer finds stop_reason is \"max_tokens\" on every one of the failing calls.\n\nWhat should the defensive parsing logic do?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Catch the decode error, check stop_reason for max_tokens, and treat the response as incomplete"
   },
   {
    "key": "B",
    "text": "Ignore stop_reason and retry parsing with a lenient JSON parser that tolerates trailing commas"
   },
   {
    "key": "C",
    "text": "Lower max_tokens further so Claude is forced to produce shorter, safer completions"
   },
   {
    "key": "D",
    "text": "Treat every JSON decode error as a transient network issue and resend the identical request"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Catch the decode error, check stop_reason for max_tokens, and treat the response as incomplete\n\nCorrect. stop_reason \"max_tokens\" is the documented signal that the response was cut off before completion; defensive code should branch on it and handle the response as incomplete rather than as malformed JSON.\n\n**A.** Correct. stop_reason \"max_tokens\" is the documented signal that the response was cut off before completion; defensive code should branch on it and handle the response as incomplete rather than as malformed JSON.\n\n**B.** Incorrect. A lenient parser might mask trailing-comma typos, but it cannot recover data that was never generated because the response was truncated mid-object.\n\n**C.** Incorrect. Lowering max_tokens makes truncation more likely, not less, worsening the exact failure being investigated.\n\n**D.** Incorrect. The failures are explained by output length, not network transience; blindly resending the same request risks the same truncation again.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 100,
  "id": "ccdv-f-q100",
  "type": "multiple",
  "select": 3,
  "question": "During testing, an agent occasionally calls a create_ticket tool while omitting the required priority field. Which of the following are appropriate ways to handle this within the conversation, according to recommended tool-use error handling? (Select all that apply)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Return a tool_result with is_error: true naming the missing field so Claude retries with it supplied"
   },
   {
    "key": "B",
    "text": "Add strict: true to the tool definition so input is validated against the schema before your handler"
   },
   {
    "key": "C",
    "text": "Improve the tool's description so the priority-field requirement is stated more explicitly"
   },
   {
    "key": "D",
    "text": "Automatically terminate the session and require the user to start an entirely new conversation"
   },
   {
    "key": "E",
    "text": "Log the omission silently and proceed with ticket creation using a null priority value"
   },
   {
    "key": "F",
    "text": "Rewrite the schema to make priority optional so it can never be reported as missing again"
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Return a tool_result with is_error: true naming the missing field so Claude retries with it supplied\nB. Add strict: true to the tool definition so input is validated against the schema before your handler\nC. Improve the tool's description so the priority-field requirement is stated more explicitly\n\nA. Correct. Returning an is_error tool_result that describes the missing parameter lets Claude retry the call with the field filled in, which is the documented recovery pattern for invalid tool calls.\n\nB. Correct. Adding strict: true guarantees tool inputs match the schema exactly, preventing this class of missing-parameter error from reaching the handler in the first place.\n\nC. Correct. When required information is missing from a call, improving the tool's description is a recommended way to help Claude recognize and supply the missing parameter going forward.\n\n**A.** Correct. Returning an is_error tool_result that describes the missing parameter lets Claude retry the call with the field filled in, which is the documented recovery pattern for invalid tool calls.\n\n**B.** Correct. Adding strict: true guarantees tool inputs match the schema exactly, preventing this class of missing-parameter error from reaching the handler in the first place.\n\n**C.** Correct. When required information is missing from a call, improving the tool's description is a recommended way to help Claude recognize and supply the missing parameter going forward.\n\n**D.** Incorrect. Ending the session for a recoverable, self-correctable error is unnecessarily disruptive when Claude can simply retry with the missing field.\n\n**E.** Incorrect. Silently substituting a null priority hides the omission and creates a ticket with data no one actually specified, rather than letting Claude correct itself.\n\n**F.** Incorrect. Making the field optional avoids ever surfacing the omission again, but it doesn't fix the actual data-quality problem of tickets missing a priority.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 101,
  "id": "ccdv-f-q101",
  "type": "single",
  "select": 1,
  "question": "A prompt concatenates two source documents as plain, undifferentiated text, and Claude's responses sometimes misattribute which document a fact came from. What restructuring best fixes this attribution problem?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Wrap each document in its own  tag with nested  and  subtags, placed inside an outer  tag, thereby providing clear boundaries and metadata."
   },
   {
    "key": "B",
    "text": "Insert a page-break control character between the two documents, such as a form feed, and prepend a short system note that instructs Claude to treat the page break as a document separator for attribution."
   },
   {
    "key": "C",
    "text": "Prefix each document with a numbered markdown heading (e.g., \"# Document 1\") and then include a prompt instruction for Claude to attribute facts based solely on which heading they appear under."
   },
   {
    "key": "D",
    "text": "Convert both documents into a single CSV file where each row holds one paragraph and the left column labels the source document, so Claude can read the tabular data and attribute facts to the correct source."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Wrap each document in its own  tag with nested  and  subtags, placed inside an outer  tag, thereby providing clear boundaries and metadata.\n\nCorrect. Wrapping each document in its own  tag with nested  and  subtags, inside an outer  tag, provides clear boundaries and explicit source metadata. This is the documented XML pattern for multi-document prompts, ensuring reliable attribution of facts to the correct source.\n\n**A.** Correct. Wrapping each document in its own  tag with nested  and  subtags, inside an outer  tag, provides clear boundaries and explicit source metadata. This is the documented XML pattern for multi-document prompts, ensuring reliable attribution of facts to the correct source.\n\n**B.** Incorrect. A page-break control character like a form feed is not a reliable or documented mechanism for conveying document boundaries to Claude. Even with an explanatory system note, it lacks the structured, machine-readable metadata that dedicated XML tags provide, making misattribution more likely.\n\n**C.** Incorrect. While markdown headings create visual separation, they do not carry structured source metadata the way nested XML tags with a  subtag do. Relying solely on a prompt instruction to attribute based on headings can be brittle and is not the documented best practice for multi-document attribution.\n\n**D.** Incorrect. Converting free-form documents into a single CSV file would destroy the original paragraph structure and narrative flow, harming comprehension. This format is not a documented or effective approach for maintaining source attribution, whereas structured XML tagging preserves document integrity.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 102,
  "id": "ccdv-f-q102",
  "type": "single",
  "select": 1,
  "question": "A subagent is defined to automatically spawn further subagents to divide up its own workload, and those in turn may spawn more.\n\nWhat governs how deep this nesting can go, and how can a team stop a specific subagent from spawning any children at all?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Nesting defaults to three levels below the main agent and can be changed with the `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` setting; omitting `Agent` from a subagent's tools (or adding it to `disallowedTools`) prevents that subagent from spawning children."
   },
   {
    "key": "B",
    "text": "Nesting has no depth limit as long as each subagent runs in the background, because background execution bypasses the configured depth cap, and to prevent a particular subagent from spawning children, set its effort level to low, which prevents it from spawning children."
   },
   {
    "key": "C",
    "text": "Nesting is capped at two levels only when the subagent runs in the foreground, because foreground execution limits nesting to two levels, and to prevent a subagent from spawning children, set its `permissionMode` to `plan` to restrict it to read-only and prevent spawning."
   },
   {
    "key": "D",
    "text": "Nesting is unlimited regardless of execution mode, because there is no built-in depth limit, and to prevent a specific subagent from spawning children, the team must remove the `Bash` tool from its tools list to block the execution of child-spawning commands."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Nesting defaults to three levels below the main agent and can be changed with the `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` setting; omitting `Agent` from a subagent's tools (or adding it to `disallowedTools`) prevents that subagent from spawning children.\n\nCorrect. The current default maximum nesting depth is 3 levels below the main agent, and it is configurable via `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` in `settings.json`. To stop a specific subagent from spawning children, omit `Agent` from its `tools` list or add `Agent` to `disallowedTools`; without the `Agent` tool, the subagent cannot create child subagents.\n\n**A.** Correct. The current default maximum nesting depth is 3 levels below the main agent, and it is configurable via `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` in `settings.json`. To stop a specific subagent from spawning children, omit `Agent` from its `tools` list or add `Agent` to `disallowedTools`; without the `Agent` tool, the subagent cannot create child subagents.\n\n**B.** Incorrect. Background execution does not bypass the depth limit; the default maximum of 3 levels (or the configured `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` value) applies regardless of execution mode. Effort level does not control child spawning; use `Agent` omission or `disallowedTools`.\n\n**C.** Incorrect. Foreground execution does not impose a two-level cap; the same 3-level default (or configured depth) applies to foreground and background subagents. Setting `permissionMode` to `plan` is not the documented way to prevent spawning; use `Agent` omission or `disallowedTools`.\n\n**D.** Incorrect. Nesting is not unlimited; by default it is capped at 3 levels (configurable via `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`). Removing `Bash` does not block child spawning because subagents spawn children through the `Agent` tool, not shell commands; use `Agent` omission or `disallowedTools`.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 103,
  "id": "ccdv-f-q103",
  "type": "multiple",
  "select": 3,
  "question": "A support agent built on Claude has access to a customer database tool and forwards conversation transcripts to a third-party analytics vendor for quality monitoring. Transcripts routinely contain customers' full names, emails, and account numbers. Which of these actions should the team take to prevent unnecessary PII exposure? (Select all that apply.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Redact or mask personally identifiable information in the transcripts before they leave the system, sending the vendor only the fields it actually needs"
   },
   {
    "key": "B",
    "text": "Apply the same PII minimization to data logged internally for debugging, not just to data sent to the external vendor"
   },
   {
    "key": "C",
    "text": "Send the full unredacted transcripts as-is, since the analytics vendor's contract already covers general data handling and confidentiality obligations"
   },
   {
    "key": "D",
    "text": "Compress the transcripts before sending them, since compression is treated as equivalent to redaction for the purpose of protecting personal data"
   },
   {
    "key": "E",
    "text": "Review which fields the analytics vendor's quality-monitoring use case genuinely requires before deciding what to include in each transcript export"
   },
   {
    "key": "F",
    "text": "Ask Claude to verbally warn the customer at the start of each chat that their data might be shared externally, then proceed without further changes"
   }
  ],
  "correct": [
   "A",
   "B",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Redact or mask personally identifiable information in the transcripts before they leave the system, sending the vendor only the fields it actually needs\nB. Apply the same PII minimization to data logged internally for debugging, not just to data sent to the external vendor\nE. Review which fields the analytics vendor's quality-monitoring use case genuinely requires before deciding what to include in each transcript export\n\nA. Correct. Minimizing and redacting PII before it leaves the system to a third party is a core data leakage prevention practice, sending only the fields actually needed for the stated purpose.\n\nB. Correct. PII exposure risk applies to internal logs and debugging data too, not just external transfers, so minimization should be applied consistently across storage locations.\n\nE. Correct. Determining which fields the vendor's use case actually requires is the basis for deciding what to minimize or exclude before export.\n\n**A.** Correct. Minimizing and redacting PII before it leaves the system to a third party is a core data leakage prevention practice, sending only the fields actually needed for the stated purpose.\n\n**B.** Correct. PII exposure risk applies to internal logs and debugging data too, not just external transfers, so minimization should be applied consistently across storage locations.\n\n**C.** Incorrect. A general contract does not substitute for technical minimization of PII in transit to a third party; unredacted transfer still increases exposure risk.\n\n**D.** Incorrect. Compression changes file size, not content sensitivity; compressed PII is still PII and remains exposed to anyone who decompresses the file.\n\n**E.** Correct. Determining which fields the vendor's use case actually requires is the basis for deciding what to minimize or exclude before export.\n\n**F.** Incorrect. A verbal disclosure does not reduce the actual data exposure and is not a substitute for technical PII minimization before external transfer.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 104,
  "id": "ccdv-f-q104",
  "type": "multiple",
  "select": 3,
  "question": "A fintech company is deploying a multi-tenant Claude-powered advisor that reads account data for one customer per session and can place trades through an internal API. Which combination of practices best supports authentication, authorization, and confidentiality across tenants? (Select all that apply.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Scope each session's tool access so it can only read and act on the data belonging to the authenticated customer for that session"
   },
   {
    "key": "B",
    "text": "Screen inbound account notes and support messages for injected instructions before they are returned to Claude as tool results"
   },
   {
    "key": "C",
    "text": "Issue one shared service credential for the trading API that every customer session reuses, to simplify credential rotation"
   },
   {
    "key": "D",
    "text": "Log full account numbers and portfolio balances in plaintext application logs so support staff can search history freely"
   },
   {
    "key": "E",
    "text": "Require a fresh authorization check on the backend before executing any trade action the agent requests, rather than trusting the agent's own judgment alone"
   },
   {
    "key": "F",
    "text": "Let a session continue reading a different customer's data mid-conversation if the agent decides it is contextually relevant to the current advice"
   }
  ],
  "correct": [
   "A",
   "B",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Scope each session's tool access so it can only read and act on the data belonging to the authenticated customer for that session\nB. Screen inbound account notes and support messages for injected instructions before they are returned to Claude as tool results\nE. Require a fresh authorization check on the backend before executing any trade action the agent requests, rather than trusting the agent's own judgment alone\n\nA. Correct. Scoping each session's access to only the authenticated customer's own data is core to per-tenant authorization and confidentiality.\n\nB. Correct. Screening untrusted inbound content for injected instructions before it reaches Claude as a tool result reduces the risk of a session being redirected into unauthorized actions.\n\nE. Correct. A backend authorization check before executing a trade adds a trust boundary independent of the agent's own output, protecting integrity if the agent is manipulated.\n\n**A.** Correct. Scoping each session's access to only the authenticated customer's own data is core to per-tenant authorization and confidentiality.\n\n**B.** Correct. Screening untrusted inbound content for injected instructions before it reaches Claude as a tool result reduces the risk of a session being redirected into unauthorized actions.\n\n**C.** Incorrect. A single shared credential across all sessions removes per-tenant accountability and makes it impossible to scope or revoke access for one customer without affecting all others.\n\n**D.** Incorrect. Logging full account numbers and balances in plaintext expands the confidentiality exposure surface and violates PII and data leakage prevention practices.\n\n**E.** Correct. A backend authorization check before executing a trade adds a trust boundary independent of the agent's own output, protecting integrity if the agent is manipulated.\n\n**F.** Incorrect. Allowing a session to access another customer's data breaks tenant isolation and violates the authorization scoping the rest of the design relies on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 105,
  "id": "ccdv-f-q105",
  "type": "single",
  "select": 1,
  "question": "A healthcare organization with a HIPAA-enabled Claude API organization sends a request that includes the code execution tool. The API responds with a 400 invalid_request_error stating the feature is not available for HIPAA-regulated organizations without Zero Data Retention.\n\nWhat is the most appropriate immediate remediation for this specific request?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Remove the code execution tool from the request and use only features listed as eligible for HIPAA readiness in the feature eligibility table"
   },
   {
    "key": "B",
    "text": "Retry the identical request with a higher max_tokens value, since the error is caused by insufficient token budget for the tool call"
   },
   {
    "key": "C",
    "text": "Switch the request to a different, unrelated organization ID without a BAA in place so the feature restriction no longer applies"
   },
   {
    "key": "D",
    "text": "Ignore the error and resubmit the same request repeatedly, since HIPAA feature restrictions are only advisory warnings rather than enforced blocks"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Remove the code execution tool from the request and use only features listed as eligible for HIPAA readiness in the feature eligibility table\n\nCorrect. The documented HIPAA error handling behavior is that the API enforces feature restrictions automatically and returns a 400 listing non-eligible features; the resolution is to remove those features and use ones eligible under HIPAA readiness.\n\n**A.** Correct. The documented HIPAA error handling behavior is that the API enforces feature restrictions automatically and returns a 400 listing non-eligible features; the resolution is to remove those features and use ones eligible under HIPAA readiness.\n\n**B.** Incorrect. The error is about feature eligibility under the HIPAA arrangement, not token budget, so adjusting max_tokens would not resolve it.\n\n**C.** Incorrect. Routing PHI-bearing requests through an organization without a BAA would violate HIPAA compliance obligations rather than legitimately resolve the restriction.\n\n**D.** Incorrect. HIPAA feature restrictions are enforced by the API, not advisory; the 400 error blocks the request until the non-eligible feature is removed.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 106,
  "id": "ccdv-f-q106",
  "type": "multiple",
  "select": 3,
  "question": "Which of the following statements about hook decision priority and configuration scope are accurate according to Anthropic's documentation? (Select 3)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "When multiple hooks return conflicting decisions, deny takes priority over defer, which takes priority over ask, which takes priority over allow"
   },
   {
    "key": "B",
    "text": "`.claude/settings.local.json` is gitignored and intended for local-only configuration, not for sharing hooks with a team"
   },
   {
    "key": "C",
    "text": "Managed policy settings apply organization-wide and are admin-controlled, taking precedence in a way project-local settings cannot override"
   },
   {
    "key": "D",
    "text": "A hook matcher of `*` is functionally identical to an omitted matcher, since only `*` fully disables regex evaluation for that hook"
   },
   {
    "key": "E",
    "text": "PostToolUse hooks can block a tool call before it executes, just like PreToolUse hooks"
   },
   {
    "key": "F",
    "text": "Async hook outputs can safely block, modify, or inject context into the operation as long as `asyncTimeout` is set high enough"
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. When multiple hooks return conflicting decisions, deny takes priority over defer, which takes priority over ask, which takes priority over allow\nB. `.claude/settings.local.json` is gitignored and intended for local-only configuration, not for sharing hooks with a team\nC. Managed policy settings apply organization-wide and are admin-controlled, taking precedence in a way project-local settings cannot override\n\nA. Correct. This priority ordering (deny > defer > ask > allow) is explicitly documented as how conflicting hook decisions are resolved.\n\nB. Correct. `.claude/settings.local.json` is documented as project-scoped but not shareable (gitignored), distinct from the shareable `.claude/settings.json`.\n\nC. Correct. Managed policy settings are documented as organization-wide, admin-controlled policy, which sits above project and user-local configuration.\n\n**A.** Correct. This priority ordering (deny > defer > ask > allow) is explicitly documented as how conflicting hook decisions are resolved.\n\n**B.** Correct. `.claude/settings.local.json` is documented as project-scoped but not shareable (gitignored), distinct from the shareable `.claude/settings.json`.\n\n**C.** Correct. Managed policy settings are documented as organization-wide, admin-controlled policy, which sits above project and user-local configuration.\n\n**D.** Incorrect. `*`, an empty string, and an omitted matcher are documented as behaving identically (all match every occurrence); regex evaluation is not a distinguishing factor between them, so the premise that only `*` disables regex is false.\n\n**E.** Incorrect. PostToolUse fires after a tool call has already succeeded and explicitly cannot block it since the tool already ran; only PreToolUse (and similar pre-execution hooks) can block.\n\n**F.** Incorrect. Async outputs are documented as unable to block, modify, or inject context regardless of asyncTimeout, since the agent has already moved on by the time the async hook resolves.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 107,
  "id": "ccdv-f-q107",
  "type": "single",
  "select": 1,
  "question": "An engineer configuring a Claude Code hook wants it to fire for every Bash, Edit, and NotebookEdit tool call without listing each tool name explicitly.\n\nAccording to Anthropic's documentation on regex-based matchers, which configuration achieves this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A matcher like `Bash|Edit.*` is used; the system falls back to regex evaluation and matches any tool name containing those as substrings."
   },
   {
    "key": "B",
    "text": "A matcher of `Bash, Edit, NotebookEdit` with commas, which triggers regex evaluation, causing the pattern to match any tool name containing those substrings."
   },
   {
    "key": "C",
    "text": "Omitting the matcher field entirely, which causes the hook to fire only for tools with names longer than four characters, such as Bash and NotebookEdit."
   },
   {
    "key": "D",
    "text": "A matcher of `Bash+Edit+NotebookEdit`, where the plus sign acts as a concatenation operator, causing the pattern to be evaluated as a single exact-match string."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. A matcher like `Bash|Edit.*` is used; the system falls back to regex evaluation and matches any tool name containing those as substrings.\n\nCorrect. Per Claude Code's hook matcher rule, a matcher value that contains any character outside letters, digits, underscores, hyphens, spaces, commas and pipes is evaluated as a JavaScript regular expression, tested with JavaScript's RegExp.prototype.test() - unanchored, so a match anywhere in the tool name counts. `Bash|Edit.*` matches `Bash` through the first alternative, and matches both `Edit` and `NotebookEdit` because `Edit.*` is found starting partway through the string; the documentation's own example confirms `Edit.*` matches both `Edit` and `NotebookEdit`. It is a contains match, not a starts-with match: `NotebookEdit` qualifies because it contains `Edit`, not because it begins with it.\n\n**A.** Correct. Per Claude Code's hook matcher rule, a matcher value that contains any character outside letters, digits, underscores, hyphens, spaces, commas and pipes is evaluated as a JavaScript regular expression, tested with JavaScript's RegExp.prototype.test() - unanchored, so a match anywhere in the tool name counts. `Bash|Edit.*` matches `Bash` through the first alternative, and matches both `Edit` and `NotebookEdit` because `Edit.*` is found starting partway through the string; the documentation's own example confirms `Edit.*` matches both `Edit` and `NotebookEdit`. It is a contains match, not a starts-with match: `NotebookEdit` qualifies because it contains `Edit`, not because it begins with it.\n\n**B.** Incorrect. Commas keep a matcher on the exact-match path rather than triggering regex evaluation - a value built only from letters, digits, underscores, hyphens, spaces, commas and pipes is evaluated as a list of exact strings, the same way the documentation shows `Edit, Write` matching either tool exactly. So `Bash, Edit, NotebookEdit` would not fail the way this option claims; it would match `Bash`, `Edit`, and `NotebookEdit` each exactly. The reason this configuration is still wrong for the scenario is that it lists every tool name individually, which is exactly what the engineer is trying to avoid.\n\n**C.** Incorrect. There is no such length-based behavior in the documentation. If the matcher field is omitted, the hook may not fire at all or may follow a different default (e.g., match all tools), but it definitely does not use a character-length rule. This option describes a fictional behavior.\n\n**D.** Incorrect. In regex, `+` means \"one or more of the preceding element,\" not concatenation. Thus, `Bash+Edit+NotebookEdit` would be treated as a regex requiring one or more \"h\" after \"Bas\", etc., which is unlikely to match the intended tool names. Even if intended as a literal string, the presence of `+` would force regex evaluation, not exact match.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 108,
  "id": "ccdv-f-q108",
  "type": "single",
  "select": 1,
  "question": "A team is building an automated agent using the Claude Agent SDK that runs unattended in a CI pipeline. It needs to run a fixed set of tools (`Read`, `Grep`, `Bash(npm test)`) without any human available to approve prompts, and any tool call outside that fixed set must be rejected outright rather than hang waiting for approval.\n\nWhich configuration achieves this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set `allowed_tools` to the fixed set and `permission_mode` to `dontAsk`; listed tools run, and every other call is denied without invoking `canUseTool`."
   },
   {
    "key": "B",
    "text": "Set `permission_mode` to `bypassPermissions` and omit `allowed_tools` entirely, since bypass mode already restricts execution to a minimal safe tool set by default."
   },
   {
    "key": "C",
    "text": "Set `permission_mode` to `plan` and set `allowed_tools` to the fixed set, since plan mode auto-denies any tool call that is not explicitly pre-approved."
   },
   {
    "key": "D",
    "text": "Set `permission_mode` to `default` and register a `canUseTool` callback that always throws an exception for tools outside the fixed set."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Set `allowed_tools` to the fixed set and `permission_mode` to `dontAsk`; listed tools run, and every other call is denied without invoking `canUseTool`.\n\nCorrect. `dontAsk` converts any permission check that would otherwise prompt into a denial without ever calling `canUseTool`, so pairing it with `allowed_tools` gives a fixed, explicit tool surface: listed tools run, and any other tool call is denied immediately instead of hanging on a human who isn't there.\n\n**A.** Correct. `dontAsk` converts any permission check that would otherwise prompt into a denial without ever calling `canUseTool`, so pairing it with `allowed_tools` gives a fixed, explicit tool surface: listed tools run, and any other tool call is denied immediately instead of hanging on a human who isn't there.\n\n**B.** Incorrect. `bypassPermissions` approves every tool call that reaches it, including tools well beyond a minimal set; it does not restrict scope by default and is the opposite of what's needed here.\n\n**C.** Incorrect. plan mode routes file-edit and shell-write tools to canUseTool regardless of allow rules, which would hang without a human approver rather than denying outright.\n\n**D.** Incorrect. The SDK documentation defines what dontAsk paired with allowed_tools does, but not what happens when a canUseTool callback throws - relying on an uncaught exception to enforce the fixed tool set is undefined behavior, not a documented rejection path. It also reimplements by hand what dontAsk already provides declaratively.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 109,
  "id": "ccdv-f-q109",
  "type": "single",
  "select": 1,
  "question": "A fintech startup is building an internal support agent with the Claude Agent SDK. The agent must look up account balances from a proprietary ledger service reachable only through an internal REST gateway with no existing MCP server or public SDK.\n\nWhich approach best fits this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define a custom tool that calls the internal REST gateway and register it through an in-process MCP server"
   },
   {
    "key": "B",
    "text": "Rely on the built-in WebFetch tool to query the gateway directly from the agent's prompt"
   },
   {
    "key": "C",
    "text": "Write a Skill that documents the ledger schema and expects Claude to reason about balances from memory"
   },
   {
    "key": "D",
    "text": "Search for a community MCP server that might expose a similar ledger balance capability"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Define a custom tool that calls the internal REST gateway and register it through an in-process MCP server\n\nCorrect: a custom tool wraps the handler logic for calling the proprietary gateway and is registered via create_sdk_mcp_server/createSdkMcpServer, giving Claude a purpose-built function for this internal system.\n\n**A.** Correct: a custom tool wraps the handler logic for calling the proprietary gateway and is registered via create_sdk_mcp_server/createSdkMcpServer, giving Claude a purpose-built function for this internal system.\n\n**B.** WebFetch is a general-purpose built-in tool for parsing public web pages; it is not designed for authenticated internal gateway calls with structured request/response handling.\n\n**C.** A Skill supplies knowledge or workflow instructions, not a live connection to an external system, so Claude would have no way to actually retrieve real balance data.\n\n**D.** No public integration exists for this proprietary internal service, so a community MCP server would not have the credentials or schema to reach it.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 110,
  "id": "ccdv-f-q110",
  "type": "single",
  "select": 1,
  "question": "A small internal tool needs to read files, run shell commands, and search a codebase for a one-off refactor task using the Claude Agent SDK. No external systems or custom domain logic are involved.\n\nWhat is the most appropriate starting point?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use the SDK's built-in tools such as Read, Edit, Bash, Glob, and Grep without building any custom tools or MCP servers"
   },
   {
    "key": "B",
    "text": "Build a custom tool for reading files and another for running shell commands before writing any code"
   },
   {
    "key": "C",
    "text": "Connect an external MCP server that reimplements filesystem and shell access over a network protocol"
   },
   {
    "key": "D",
    "text": "Write a Skill containing instructions for how to read files and run commands in place of built-in tools"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Use the SDK's built-in tools such as Read, Edit, Bash, Glob, and Grep without building any custom tools or MCP servers\n\nCorrect: the Agent SDK includes built-in tools for reading files, running commands, and searching code out of the box, covering this task without any custom implementation.\n\n**A.** Correct: the Agent SDK includes built-in tools for reading files, running commands, and searching code out of the box, covering this task without any custom implementation.\n\n**B.** Building custom tools for file reading and command execution duplicates capabilities the built-in tools already provide, adding unnecessary implementation work for a one-off task.\n\n**C.** An external MCP server built to reimplement filesystem and shell access over the network adds infrastructure and latency for functionality already available locally as built-in tools.\n\n**D.** A Skill provides knowledge or workflow instructions; it cannot substitute for the actual tool execution that Read, Edit, and Bash already perform natively.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 }
];