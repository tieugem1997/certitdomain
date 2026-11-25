window.__PC_DECK_LAST__ = [
 {
  "no": 1,
  "id": "ccar-p-q001",
  "type": "multiple",
  "select": 2,
  "question": "You are compiling guardrail tactics for a customer-facing assistant.\nWhich two tactics belong on the guardrail list?\nEach correct answer presents a complete solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Embed approved override phrases that let trusted users relax guardrails on demand."
   },
   {
    "key": "B",
    "text": "Lower sampling temperature globally to reduce the chance of off-policy completions."
   },
   {
    "key": "C",
    "text": "Rely on a single hardened system prompt that enumerates every disallowed behavior."
   },
   {
    "key": "D",
    "text": "Layer prompt-level guardrails with runtime content checks rather than relying on either alone."
   },
   {
    "key": "E",
    "text": "Validate the model output against a structured schema before downstream actions are taken."
   }
  ],
  "correct": [
   "D",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nD. Layer prompt-level guardrails with runtime content checks rather than relying on either alone.\nE. Validate the model output against a structured schema before downstream actions are taken.\n\nD. Using multiple guardrail layers provides defense in depth. Prompt-level instructions establish behavioral boundaries, while runtime checks can detect or block problematic content before it reaches users or downstream systems.\n\nE. Structured output validation helps ensure that the model response conforms to the expected format and required fields before it is passed to downstream systems. This reduces the risk of malformed or unexpected model output triggering unintended actions.\n\n**A.** Allowing users to bypass guardrails through special phrases can create a security and policy risk. Guardrails should not be easily disabled through conversational instructions, even for trusted users.\n\n**B.** Lowering temperature can make outputs more consistent and predictable, but it is not a reliable substitute for explicit safety controls. Model randomness settings alone cannot enforce policy boundaries.\n\n**C.** A system prompt is an important layer, but relying on one control alone is not sufficient. Complex customer-facing systems benefit from multiple independent safeguards.\n\n**D.** Using multiple guardrail layers provides defense in depth. Prompt-level instructions establish behavioral boundaries, while runtime checks can detect or block problematic content before it reaches users or downstream systems.\n\n**E.** Structured output validation helps ensure that the model response conforms to the expected format and required fields before it is passed to downstream systems. This reduces the risk of malformed or unexpected model output triggering unintended actions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 2,
  "id": "ccar-p-q002",
  "type": "multiple",
  "select": 2,
  "question": "A Claude architect is implementing safety controls for a customer-facing advice assistant that must never provide regulated investment recommendations.\nWhich two guardrail implementations most directly enforce this constraint? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase response temperature to introduce variability that reduces the likelihood of specific recommendations."
   },
   {
    "key": "B",
    "text": "Log all user queries to a SIEM for post-hoc compliance review."
   },
   {
    "key": "C",
    "text": "Limit session length to reduce the volume of queries processed per user per day."
   },
   {
    "key": "D",
    "text": "Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advicerequests."
   },
   {
    "key": "E",
    "text": "Add an output classifier that detects and blocks responses containing regulated investment- recommendation language."
   }
  ],
  "correct": [
   "D",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nD. Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advicerequests.\nE. Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.\n\nD. Explicitly defining out-of-scope behavior in the system instructions establishes a clear boundary for the assistant. Fixed refusal guidance also makes the expected response more consistent when users request prohibited investment recommendations.\n\nE. An output classifier provides a runtime enforcement layer that can detect prohibited content before it reaches the customer. This complements prompt-level guardrails and provides an additional control if the model attempts to generate restricted advice.\n\n**A.** Increasing temperature makes responses more variable and less predictable. It does not enforce a safety boundary and could actually make it harder to consistently prevent prohibited investment recommendations.\n\n**B.** Logging supports monitoring, auditing, and investigation, but it is a post-hoc control. It does not directly prevent the assistant from generating a prohibited investment recommendation before the response reaches the user.\n\n**C.** Limiting session length may reduce overall usage, but it does not prevent the model from providing a regulated investment recommendation within an allowed session. It is therefore not a direct enforcement mechanism for this requirement.\n\n**D.** Explicitly defining out-of-scope behavior in the system instructions establishes a clear boundary for the assistant. Fixed refusal guidance also makes the expected response more consistent when users request prohibited investment recommendations.\n\n**E.** An output classifier provides a runtime enforcement layer that can detect prohibited content before it reaches the customer. This complements prompt-level guardrails and provides an additional control if the model attempts to generate restricted advice.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 3,
  "id": "ccar-p-q003",
  "type": "single",
  "select": 1,
  "question": "You are configuring tool permissions for a Claude-based assistant. The assistant's defined responsibilities require read access to a knowledge base and write access to a draft queue, and nothing else.\nWhich scoping design best applies least privilege?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Allow access to every tool in the catalog and rely on the model to decline tools it should not use."
   },
   {
    "key": "B",
    "text": "Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer."
   },
   {
    "key": "C",
    "text": "Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for."
   },
   {
    "key": "D",
    "text": "Allow access to all tools with read permissions globally and restrict write permissions to the draft- queue tool, without scoping to only the specific tools required for defined tasks."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.\n\nThis is the strongest least-privilege design. The assistant receives access to only the two tools required for its defined responsibilities. Enforcing the allow-list at the orchestration layer provides a technical permission boundary rather than relying on the model's behavior.\n\n**A.** This does not follow the least-privilege principle because the assistant receives access to tools it does not need. Relying on the model to voluntarily avoid those tools is not an adequate security control.\n\n**B.** This is the strongest least-privilege design. The assistant receives access to only the two tools required for its defined responsibilities. Enforcing the allow-list at the orchestration layer provides a technical permission boundary rather than relying on the model's behavior.\n\n**C.** Although disabling all tools minimizes permissions, it also prevents the assistant from performing its required responsibilities. Least privilege means granting the minimum permissions necessary to accomplish the intended task, not removing necessary access.\n\n**D.** This still grants unnecessary access to tools outside the assistant's responsibilities. Least privilege requires permissions to be scoped to the specific capabilities the assistant actually needs.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 4,
  "id": "ccar-p-q004",
  "type": "multiple",
  "select": 2,
  "question": "You are compiling team-setup practices for a Claude Code rollout across an engineering organization.\nWhich two practices belong on the list? (Select two.)\nEach correct answer presents a complete solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use project scope for personal editor preferences so the preferences apply consistently within the project."
   },
   {
    "key": "B",
    "text": "Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers."
   },
   {
    "key": "C",
    "text": "Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work."
   },
   {
    "key": "D",
    "text": "Use user scope for team-shared MCP servers so every engineer on the team has consistent access."
   },
   {
    "key": "E",
    "text": "Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control."
   }
  ],
  "correct": [
   "B",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.\nE. Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.\n\nB. Managed configuration is appropriate for security-critical controls that need consistent enforcement across the organization. Central management prevents individual engineers from overriding important security policies.\n\nE. Project scope is appropriate for team-shared configuration. Keeping MCP server settings and permission rules under version control improves consistency, reviewability, and change tracking across the engineering organization.\n\n**A.** Project scope is intended for team-shared configuration, not personal preferences. Personal editor preferences should generally remain at the user or local scope so they do not affect other engineers working on the project.\n\n**B.** Managed configuration is appropriate for security-critical controls that need consistent enforcement across the organization. Central management prevents individual engineers from overriding important security policies.\n\n**C.** Security-critical permission rules should not be individually adjustable when organizational consistency is required. Local configuration could allow engineers to weaken or bypass important security controls.\n\n**D.** User scope applies to an individual engineer, not the entire project team. Team-shared MCP servers should be configured at a shared project or managed organizational level.\n\n**E.** Project scope is appropriate for team-shared configuration. Keeping MCP server settings and permission rules under version control improves consistency, reviewability, and change tracking across the engineering organization.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 5,
  "id": "ccar-p-q005",
  "type": "single",
  "select": 1,
  "question": "You are designing a content moderation classifier that processes high volumes of user-generated comments under a tight per-message latency budget using well-defined classification labels.\nWhich model selection best aligns with the workload?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict."
   },
   {
    "key": "B",
    "text": "Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth."
   },
   {
    "key": "C",
    "text": "Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling."
   },
   {
    "key": "D",
    "text": "Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.\n\nHaiku is well suited to fast, high-volume workloads where the task is clearly defined and does not require extensive reasoning. Its efficiency helps meet strict latency requirements while controlling resource consumption.\n\n**A.** Sonnet provides strong general-purpose capabilities, but this workload emphasizes high volume, low latency, and well-defined classification tasks. A lighter model is generally a better fit when deep reasoning is not required.\n\n**B.** Haiku is well suited to fast, high-volume workloads where the task is clearly defined and does not require extensive reasoning. Its efficiency helps meet strict latency requirements while controlling resource consumption.\n\n**C.** Extended Thinking adds deeper reasoning but can increase latency and resource consumption. Applying it to every high-volume classification request is unnecessary when the labels and task are already well defined.\n\n**D.** Maximum reasoning capability is not required for every moderation task. Using a highly capable model for simple, high-volume classification can result in unnecessary cost and latency.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 6,
  "id": "ccar-p-q006",
  "type": "single",
  "select": 1,
  "question": "You are supporting an engineer whose Claude Code session reports a permission denial when the engineer expected the action to be allowed.\nWhich resolution step is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Inspect the active permission rules across all scopes-managed, command-line, local, project, and user-to identify which rule is denying the action and confirm whether it should be amended or remain denied."
   },
   {
    "key": "B",
    "text": "Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional."
   },
   {
    "key": "C",
    "text": "Disable the permission system entirely across all scopes to remove the denial, eliminating all tool-pattern and deny-rule controls rather than identifying and amending the specific rule."
   },
   {
    "key": "D",
    "text": "Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool-pattern constraints rather than amending only the rule in"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Inspect the active permission rules across all scopes-managed, command-line, local, project, and user-to identify which rule is denying the action and confirm whether it should be amended or remain denied.\n\nThe appropriate approach is to diagnose the active permission configuration rather than bypassing the security controls. Reviewing the applicable rules across scopes helps identify the exact rule responsible for the denial and determine whether the rule is intentional or needs to be changed.\n\n**A.** The appropriate approach is to diagnose the active permission configuration rather than bypassing the security controls. Reviewing the applicable rules across scopes helps identify the exact rule responsible for the denial and determine whether the rule is intentional or needs to be changed.\n\n**B.** Repeated retries do not address the underlying permission configuration. The denial may be intentional, so the correct approach is to inspect and understand the active rules first.\n\n**C.** Disabling the permission system removes important security controls and violates the principle of least privilege. Only the specific rule that is incorrectly denying the required action should be considered for amendment.\n\n**D.** Unrestricted Bash access creates an unnecessarily broad security exposure. The appropriate solution is to identify and adjust the specific permission rule if necessary, rather than granting unrestricted capabilities.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 7,
  "id": "ccar-p-q007",
  "type": "multiple",
  "select": 2,
  "question": "A managed agent deployment for claims triage has grown from 6 tools to 34 tools over 18 months as product teams added capabilities. Triage accuracy has declined from 91 percent to 78 percent, and average tool- selection latency has increased by 2.3 seconds. A junior engineer has proposed adding a tool-router agent in front of the current agent to filter the tool list per request.\nWhich two findings should you present to justify capability decomposition before adding the router? (Select two.)\nEach correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Tool descriptions overlap across multiple claim categories within the agent's tool set."
   },
   {
    "key": "B",
    "text": "Several tools have not been invoked across the most recent 90 days of traffic."
   },
   {
    "key": "C",
    "text": "The router pattern is well documented across publicly available agent literature."
   },
   {
    "key": "D",
    "text": "The proposed router introduces an additional model call on every incoming request."
   },
   {
    "key": "E",
    "text": "The 34 tools serve four distinct claim-workflow domains within the triage scope."
   }
  ],
  "correct": [
   "A",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers used in this course:\nA. Tool descriptions overlap across multiple claim categories within the agent's tool set.\nE. The 34 tools serve four distinct claim-workflow domains within the triage scope.\n\n> **⚠️ Answer keys disagree**\n> Another practice source marks D and E instead. This course uses these two findings: overlapping tool descriptions and four distinct workflow domains are findings about the current deployment that directly justify splitting it by capability, while the router's extra model call argues against the proposed router rather than for decomposition.\n\n#### Alternative reasoning (supports D and E)\n\n- A. Overlapping tool descriptions can contribute to tool-selection confusion, but this finding alone does not directly establish that the agent should first be decomposed into separate capability domains.\n\n- B. Unused tools are useful evidence for tool rationalization or removal, but they do not directly demonstrate that the 34-tool set should be divided into separate capability domains.\n\n- C. The existence of a documented routing pattern does not establish that it is the right architectural solution for this deployment. The team should first understand the underlying capability structure and performance problem.\n\n- D. Adding another agent introduces additional model-call overhead, which can increase latency and complexity. Since the existing system already has a 2.3-second increase in tool-selection latency, adding another model call may worsen the problem rather than address its root cause.\n\n- E. This is strong evidence for capability decomposition. If the tools naturally fall into four distinct workflow domains, the system can potentially be divided into more focused agents or capability groups, reducing the number of tools each agent must reason over.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 8,
  "id": "ccar-p-q008",
  "type": "single",
  "select": 1,
  "question": "A technical team is debating whether to implement a new capability for generating regulatory filings from internal data as a Claude Skill or as an MCP server. The capability requires a fixed authoring procedure with embedded examples, does not need to call live external systems, and must be portable across three Claude deployments: claude.ai, an internal API integration, and Claude Code.\nWhich factor most strongly favors implementing the capability as a Skill?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The capability needs to query a live database for the most recent regulatory filings."
   },
   {
    "key": "B",
    "text": "The capability requires direct authentication against the corporate identity provider."
   },
   {
    "key": "C",
    "text": "The capability is procedural knowledge with no live external-system calls required."
   },
   {
    "key": "D",
    "text": "The capability must also be callable from a developer's command-line interface."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. The capability is procedural knowledge with no live external-system calls required.\n\nThis is the strongest reason to choose a Skill. Skills are well suited to reusable procedures, instructions, examples, and domain-specific workflows that Claude can apply when relevant. Since this capability does not need to call live external systems, an MCP server is unnecessary.\n\n**A.** A capability that needs to interact with a live external system is better suited to an MCP-based integration. MCP is designed to connect Claude with external tools, services, and data sources.\n\n**B.** Direct authentication and integration with enterprise systems are characteristics that favor an MCP server or another external integration, rather than a Skill focused on procedural knowledge.\n\n**C.** This is the strongest reason to choose a Skill. Skills are well suited to reusable procedures, instructions, examples, and domain-specific workflows that Claude can apply when relevant. Since this capability does not need to call live external systems, an MCP server is unnecessary.\n\n**D.** Being usable from Claude Code does not by itself make MCP the better choice. The key distinction is whether the capability primarily provides procedural knowledge or requires external tools and system access.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 9,
  "id": "ccar-p-q009",
  "type": "multiple",
  "select": 2,
  "question": "A Claude architect is auditing configuration scope assignments.\nWhich two statements correctly identify an appropriate use of user-scope configuration versus other scopes?\n(Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Defining MCP server endpoints shared by all contributors to a specific repository."
   },
   {
    "key": "B",
    "text": "Storing API authentication keys so they are not committed to version control."
   },
   {
    "key": "C",
    "text": "Enforcing a company-wide policy that disables a feature for all engineers."
   },
   {
    "key": "D",
    "text": "Persisting personal editor theme preferences that follow an engineer across projects."
   },
   {
    "key": "E",
    "text": "Saving a preferred Claude response language that applies to all repositories the engineer uses."
   }
  ],
  "correct": [
   "D",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nD. Persisting personal editor theme preferences that follow an engineer across projects.\nE. Saving a preferred Claude response language that applies to all repositories the engineer uses.\n\nD. User scope is appropriate for personal preferences that should follow an individual engineer across different projects. An editor theme is a good example because it does not need to be shared with the entire team.\n\nE. A preferred response language is also an individual user preference. User scope allows the preference to persist across the engineer's different repositories and projects without imposing it on other team members.\n\n**A.** MCP servers shared by contributors to a particular repository are better suited to project scope, because project-level configuration can be shared and maintained with the project rather than tied to one individual engineer.\n\n**B.** Authentication keys and other secrets require secure secret-management practices. Simply placing them in user-scope configuration is not the appropriate general solution for protecting sensitive credentials.\n\n**C.** Company-wide security or policy requirements should be enforced through managed/organizational configuration, rather than user scope. Individual engineers should not be able to override centrally required controls.\n\n**D.** User scope is appropriate for personal preferences that should follow an individual engineer across different projects. An editor theme is a good example because it does not need to be shared with the entire team.\n\n**E.** A preferred response language is also an individual user preference. User scope allows the preference to persist across the engineer's different repositories and projects without imposing it on other team members.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 10,
  "id": "ccar-p-q010",
  "type": "multiple",
  "select": 2,
  "question": "A research summarization assistant has been deployed for six months. A user has flagged that a generated summary contained a fabricated citation. The product team has asked whether the incident requires architectural action or whether it is an isolated case.\nWhich two Diligence-competency actions should you take? (Select two.)\nEach correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Disable the assistant immediately for all current users without any prior diagnostic analysis."
   },
   {
    "key": "B",
    "text": "Review whether citation-grounding controls exist anywhere in the current generation pipeline."
   },
   {
    "key": "C",
    "text": "Sample recent summaries to estimate the fabrication frequency across the population."
   },
   {
    "key": "D",
    "text": "Treat the incident as an anecdotal isolated case and take no further investigative action."
   },
   {
    "key": "E",
    "text": "Communicate to users that the assistant does not fabricate output as a matter of design."
   }
  ],
  "correct": [
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Review whether citation-grounding controls exist anywhere in the current generation pipeline.\nC. Sample recent summaries to estimate the fabrication frequency across the population.\n\nB. Reviewing the existing pipeline determines whether there are controls designed to prevent unsupported or fabricated citations. This helps identify potential architectural weaknesses and whether additional grounding or validation mechanisms are needed.\n\nC. Sampling recent outputs helps determine whether the reported citation is an isolated event or part of a recurring pattern. Measuring the frequency provides evidence for deciding whether broader corrective or architectural action is warranted.\n\n**A.** Immediately disabling the assistant may be appropriate in an extreme safety situation, but this scenario first requires evidence-based investigation. The team needs to understand the scope and cause of the issue before deciding on an architectural response.\n\n**B.** Reviewing the existing pipeline determines whether there are controls designed to prevent unsupported or fabricated citations. This helps identify potential architectural weaknesses and whether additional grounding or validation mechanisms are needed.\n\n**C.** Sampling recent outputs helps determine whether the reported citation is an isolated event or part of a recurring pattern. Measuring the frequency provides evidence for deciding whether broader corrective or architectural action is warranted.\n\n**D.** A single reported incident should not automatically be dismissed. Diligence requires investigating and assessing the broader risk before concluding that the problem is isolated.\n\n**E.** A design intention does not prove that the system cannot produce fabricated content. Such a statement could create a false sense of reliability rather than addressing the reported incident.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 11,
  "id": "ccar-p-q011",
  "type": "single",
  "select": 1,
  "question": "A customer support team has proposed delegating customer refund decisions to a Claude-driven workflow with no human review for refunds under 50 USD. The team's reasoning is that small refunds are low-risk and human review would erase the efficiency gain.\nWhich Delegation-competency principle should quide your response?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Delegation should be avoided entirely wherever financial transactions occur in the workflow."
   },
   {
    "key": "B",
    "text": "Delegation should always include human review on every decision the workflow produces."
   },
   {
    "key": "C",
    "text": "Delegation scope should reflect the type of risk involved, not the transaction size alone."
   },
   {
    "key": "D",
    "text": "Delegation scope should be set primarily by maximizing efficiency gains across the workflow."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Delegation scope should reflect the type of risk involved, not the transaction size alone.\n\nThe risk associated with an action is more important than the dollar amount alone. Even a small refund could involve fraud, customer disputes, policy exceptions, or other consequences. Delegation should therefore consider factors such as financial, legal, customer, and reputational risk when determining the appropriate level of human oversight.\n\n**A.** Delegation is not automatically inappropriate simply because a workflow involves financial transactions. The appropriate approach is to assess the specific risks and consequences and determine what level of human oversight is necessary.\n\n**B.** Human review is important for higher-risk decisions, but requiring manual review for every single decision is unnecessarily rigid. Appropriate delegation depends on the risk associated with the task and its potential impact.\n\n**C.** The risk associated with an action is more important than the dollar amount alone. Even a small refund could involve fraud, customer disputes, policy exceptions, or other consequences. Delegation should therefore consider factors such as financial, legal, customer, and reputational risk when determining the appropriate level of human oversight.\n\n**D.** Efficiency is an important consideration, but it should not override risk management and accountability. Delegation decisions should balance productivity with the potential consequences of automated decisions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 12,
  "id": "ccar-p-q012",
  "type": "single",
  "select": 1,
  "question": "You must present an architectural recommendation to deploy a Claude-based contract review assistant to a steering committee that includes the CFO, the general counsel, and the CIO. Each stakeholder cares about different aspects of the decision.\nHow should you structure the recommendation document?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Lead with detailed cost projections across the full multi-year horizon before the rationale section."
   },
   {
    "key": "B",
    "text": "Lead with the technical architecture diagram and the full component list before any other section."
   },
   {
    "key": "C",
    "text": "Present the same dense narrative throughout with no stakeholder differentiation in any section."
   },
   {
    "key": "D",
    "text": "Lead with the architectural decision, then address each stakeholder's primary concerns directly."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Lead with the architectural decision, then address each stakeholder's primary concerns directly.\n\nThe strongest approach is to state the recommendation clearly at the beginning and then address the key concerns of each stakeholder. For example, the CFO may focus on cost and ROI, the General Counsel on legal risk and compliance, and the CIO on architecture, security, integration, and operational considerations.\nThis structure makes the recommendation decision-oriented, concise, and relevant to the entire steering committee.\n\n**A.** Cost is highly relevant to the CFO, but leading exclusively with detailed financial projections may not address the legal, technical, and strategic concerns of the other stakeholders.\n\n**B.** The technical architecture is particularly important to the CIO, but beginning with a detailed component list may overwhelm stakeholders who primarily need to understand the decision, rationale, risks, and business impact.\n\n**C.** Different stakeholders have different responsibilities and concerns. A one-size-fits-all narrative may fail to address the specific information each decision-maker needs.\n\n**D.** The strongest approach is to state the recommendation clearly at the beginning and then address the key concerns of each stakeholder. For example, the CFO may focus on cost and ROI, the General Counsel on legal risk and compliance, and the CIO on architecture, security, integration, and operational considerations.\nThis structure makes the recommendation decision-oriented, concise, and relevant to the entire steering committee.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 13,
  "id": "ccar-p-q013",
  "type": "single",
  "select": 1,
  "question": "You are investigating an MCP server that fails on first launch but succeeds on subsequent runs. System permission dialogs appeared during the first launch.\nWhich response is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Treat the first-run failure as a permanent fault, replace the MCP server, and do not verify whether subsequent runs succeed."
   },
   {
    "key": "B",
    "text": "Reinstall the operating system to clear all permission state without first confirming whether the one- time permission grant caused the failure."
   },
   {
    "key": "C",
    "text": "Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed."
   },
   {
    "key": "D",
    "text": "Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.\n\nThe appearance of system permission dialogs during the first launch is a strong indication that the initial failure was related to one-time operating-system authorization. The appropriate response is to document this expected first-run behavior and verify that the MCP server works normally afterward.\n\n**A.** The fact that the MCP server succeeds on subsequent runs strongly suggests that the initial failure may be related to first-run permissions or authorization. Replacing the server without investigating would be unnecessary and could fail to address the actual cause.\n\n**B.** Reinstalling the operating system is an extreme and unnecessary troubleshooting step. The permission dialogs provide a much more relevant clue that should be investigated first.\n\n**C.** The appearance of system permission dialogs during the first launch is a strong indication that the initial failure was related to one-time operating-system authorization. The appropriate response is to document this expected first-run behavior and verify that the MCP server works normally afterward.\n\n**D.** Disabling operating-system permission controls unnecessarily weakens security protections. The better approach is to understand the permission requirement, document it, and verify successful subsequent operation.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 14,
  "id": "ccar-p-q014",
  "type": "multiple",
  "select": 2,
  "question": "You are producing an architecture guide for a new deployment and must complete the planning steps before\ndrafting each section.\nWhich two steps must be completed BEFORE drafting each section of the guide? (Select two.) Each correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Translate the guide into the supported regional languages for the candidate population."
   },
   {
    "key": "B",
    "text": "Establish the document under version control with a defined review cadence and approver list."
   },
   {
    "key": "C",
    "text": "Identify the audience and the questions the guide must answer for that audience."
   },
   {
    "key": "D",
    "text": "Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations."
   },
   {
    "key": "E",
    "text": "Validate the guide with the implementation team and incorporate corrections."
   }
  ],
  "correct": [
   "C",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Identify the audience and the questions the guide must answer for that audience.\nD. Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.\n\nC. Before writing, you should understand the intended audience and their information needs. This ensures that each section is written at the appropriate technical level and addresses the questions stakeholders actually need answered.\n\nD. Creating an outline establishes the guide's structure and scope before detailed writing begins. It helps ensure important architecture topics are covered systematically and prevents unnecessary duplication or omissions.\n\n**A.** Translation is a later-stage activity. Before drafting, the priority is to establish who the guide is for and what information it needs to contain.\n\n**B.** Version control, review cadence, and approval processes are valuable for document governance, but they are not the primary content-planning steps required before drafting the sections.\n\n**C.** Before writing, you should understand the intended audience and their information needs. This ensures that each section is written at the appropriate technical level and addresses the questions stakeholders actually need answered.\n\n**D.** Creating an outline establishes the guide's structure and scope before detailed writing begins. It helps ensure important architecture topics are covered systematically and prevents unnecessary duplication or omissions.\n\n**E.** Validation with the implementation team is an important review and refinement step, but it happens after the relevant content has been drafted rather than before drafting each section.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 15,
  "id": "ccar-p-q015",
  "type": "single",
  "select": 1,
  "question": "You are responding to an adversarial input pattern in which users include text claiming admin authority and instructing the model to bypass safety restrictions.\nWhich combination of controls most effectively mitigates this attack pattern?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts."
   },
   {
    "key": "B",
    "text": "Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification."
   },
   {
    "key": "C",
    "text": "Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging."
   },
   {
    "key": "D",
    "text": "Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.\n\nThis approach provides defense in depth. User-provided claims of authority are treated as untrusted input, runtime controls can identify suspicious override attempts, and scoped permissions prevent the user from escalating privileges simply through prompt content. Audit logging also supports monitoring, investigation, and incident response.\n\n**A.** This approach provides defense in depth. User-provided claims of authority are treated as untrusted input, runtime controls can identify suspicious override attempts, and scoped permissions prevent the user from escalating privileges simply through prompt content. Audit logging also supports monitoring, investigation, and incident response.\n\n**B.** User-supplied text is not a reliable source of authorization. Allowing users to declare their own privileges creates a serious privilege-escalation risk.\n\n**C.** A model should not be treated as the sole security boundary. Multiple technical and procedural controls are needed because adversarial inputs can sometimes bypass model-level instructions.\n\n**D.** Removing safety controls does not mitigate the attack; it eliminates the protections that are intended to prevent unsafe behavior.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 16,
  "id": "ccar-p-q016",
  "type": "single",
  "select": 1,
  "question": "You are a solution architect designing a Claude-based assistant with access to 60 internal tools across multiple business domains. Loading every tool definition on every request increases token usage and time to first response.\nWhich design pattern best addresses this issue without sacrificing capability breadth?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability."
   },
   {
    "key": "B",
    "text": "Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task."
   },
   {
    "key": "C",
    "text": "Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task."
   },
   {
    "key": "D",
    "text": "Use a separate model call to summarize all 60 tool definitions before each user turn."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.\n\nProgressive tool discovery reduces the amount of tool information that must be loaded initially. A relevant subset can be exposed first, and additional tools can be discovered or loaded when the task requires them. This preserves broad capability while reducing initial token usage and latency.\n\n**A.** Increasing context capacity does not solve the underlying efficiency problem. Loading all 60 tool definitions on every request still consumes tokens and processing time, even when most tools are irrelevant to the current task.\n\n**B.** Progressive tool discovery reduces the amount of tool information that must be loaded initially. A relevant subset can be exposed first, and additional tools can be discovered or loaded when the task requires them. This preserves broad capability while reducing initial token usage and latency.\n\n**C.** Although this reduces token usage, it can restrict capability and prevent Claude from accessing tools required for a particular request. The selection should be task-relevant rather than an arbitrary fixed number.\n\n**D.** This adds another model call and therefore introduces additional latency and resource consumption. It also does not necessarily provide Claude with the precise tool definitions needed for reliable tool use.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 17,
  "id": "ccar-p-q017",
  "type": "single",
  "select": 1,
  "question": "You are presenting an architectural decision to a mixed audience that includes an executive sponsor and the engineering leads who will implement the decision.\nWhich presentation strategy best serves both audiences?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs."
   },
   {
    "key": "B",
    "text": "Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it."
   },
   {
    "key": "C",
    "text": "Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience."
   },
   {
    "key": "D",
    "text": "Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.\n\nThis structure serves both audiences effectively. Executives get the decision, business value, and key trade-offs early, while engineering leads receive the technical rationale, alternatives, and implementation details needed to execute the decision.\n\n**A.** This approach focuses almost entirely on the engineering audience and fails to address the executive sponsor's need to understand business outcomes, strategic rationale, risks, and trade-offs.\n\n**B.** Simply announcing the decision does not provide enough context. Both audiences need to understand why the decision was made, what alternatives were considered, and what trade-offs were accepted.\n\n**C.** This structure serves both audiences effectively. Executives get the decision, business value, and key trade-offs early, while engineering leads receive the technical rationale, alternatives, and implementation details needed to execute the decision.\n\n**D.** Different stakeholders have different information needs. Giving every section equal technical and business depth can make the presentation less focused and less useful for both audiences.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 18,
  "id": "ccar-p-q018",
  "type": "multiple",
  "select": 2,
  "question": "You are designing a test strategy for a Claude-based pipeline that handles sensitive financial data. hich two test types should be prioritized to cover both safety under attack and cross-component correctness?\n(Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Integration tests that verify end-to-end pipeline behavior across all components."
   },
   {
    "key": "B",
    "text": "Smoke tests that verify core paths after each deployment."
   },
   {
    "key": "C",
    "text": "Unit tests targeting only individual prompt-template rendering logic."
   },
   {
    "key": "D",
    "text": "Regression tests against a stable reference set of previously known-good outputs."
   },
   {
    "key": "E",
    "text": "Adversarial tests using prompt-injection and malformed-input cases."
   }
  ],
  "correct": [
   "A",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Integration tests that verify end-to-end pipeline behavior across all components.\nE. Adversarial tests using prompt-injection and malformed-input cases.\n\nA. Integration tests verify that the different components of the pipeline work correctly together. For a sensitive financial-data workflow, this is important because failures can occur at the boundaries between components even when individual components work correctly in isolation.\n\nE. Adversarial testing directly evaluates how the system behaves under malicious, unexpected, or malformed inputs. For a financial-data pipeline, this helps identify safety weaknesses and potential ways attackers could manipulate the system.\n\nA = Cross-component correctness\nE = Safety under attack\n\n**A.** Integration tests verify that the different components of the pipeline work correctly together. For a sensitive financial-data workflow, this is important because failures can occur at the boundaries between components even when individual components work correctly in isolation.\n\n**B.** Smoke tests are useful for quickly checking whether the system's basic functionality works after deployment, but they do not provide sufficient coverage for adversarial safety or detailed cross-component correctness.\n\n**C.** Unit tests are valuable for testing isolated logic, but testing only prompt-template rendering does not adequately cover the end-to-end pipeline or attacks such as prompt injection and malformed inputs.\n\n**D.** Regression testing is useful for detecting unexpected changes in output behavior, but it does not directly provide targeted coverage for adversarial attacks or verify all cross-component interactions.\n\n**E.** Adversarial testing directly evaluates how the system behaves under malicious, unexpected, or malformed inputs. For a financial-data pipeline, this helps identify safety weaknesses and potential ways attackers could manipulate the system.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 19,
  "id": "ccar-p-q019",
  "type": "multiple",
  "select": 2,
  "question": "You are running a risk assessment on a planned Claude-based deployment and must complete the inventory steps before assessing threats against assets.\nWhich two steps must be completed BEFORE assessing threats against assets to estimate likelihood and impact?\n(Select two.) Each correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Recommend mitigations and residual-risk acceptance for the risks that remain after analysis."
   },
   {
    "key": "B",
    "text": "Recommend mitigations and residual-risk acceptance for risks that remain."
   },
   {
    "key": "C",
    "text": "Enumerate the threat actors and attack vectors relevant to the deployment."
   },
   {
    "key": "D",
    "text": "Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners."
   },
   {
    "key": "E",
    "text": "Identify the assets that the deployment touches, along with the sensitivity of each asset."
   }
  ],
  "correct": [
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Enumerate the threat actors and attack vectors relevant to the deployment.\nE. Identify the assets that the deployment touches, along with the sensitivity of each asset.\n\nC. Identifying relevant threat actors and attack vectors is necessary before estimating risk. Understanding who could attack the system and how they might do so helps establish the likelihood and potential impact of threats against the identified assets.\n\nE. Asset identification is a foundational step. Knowing which assets are involved and how sensitive they are provides the basis for evaluating the potential impact if those assets are compromised.\n\nC = Identify relevant threats and attack vectors\nE = Identify affected assets and their sensitivity\n\n**A.** Mitigations and residual-risk acceptance are later stages of the risk-assessment process. You first need to identify the assets and relevant threats before determining appropriate controls.\n\n**B.** This is also a post-analysis activity. Mitigation decisions depend on understanding the risks, their likelihood, their impact, and the controls already available.\n\n**C.** Identifying relevant threat actors and attack vectors is necessary before estimating risk. Understanding who could attack the system and how they might do so helps establish the likelihood and potential impact of threats against the identified assets.\n\n**D.** Documenting the final assessment is generally performed after the analysis has been completed. You need the risk findings and mitigation decisions before producing the final assessment record.\n\n**E.** Asset identification is a foundational step. Knowing which assets are involved and how sensitive they are provides the basis for evaluating the potential impact if those assets are compromised.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 20,
  "id": "ccar-p-q020",
  "type": "multiple",
  "select": 2,
  "question": "A senior architect is managing stakeholder expectations for a Claude-based reporting assistant midway through development. Stakeholders have escalating concerns about response latency.\nWhich two actions most directly address stakeholder expectation alignment in this situation? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Replace the current Claude model with a third-party model that may offer lower latency without evaluation."
   },
   {
    "key": "B",
    "text": "Pause all development and reallocate engineering resources entirely to latency optimization."
   },
   {
    "key": "C",
    "text": "Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data."
   },
   {
    "key": "D",
    "text": "Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints."
   },
   {
    "key": "E",
    "text": "Communicate that latency concerns are a known LLM limitation and outside the architecture team's control."
   }
  ],
  "correct": [
   "C",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.\nD. Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.\n\nC. Providing objective performance measurements gives stakeholders a clear understanding of the current state. Comparing p50 and p95 latency with the agreed SLA helps distinguish actual performance gaps from perception and supports informed decisions.\n\nD. If the original SLA is unrealistic given validated production constraints, the appropriate approach is to review and revise it collaboratively with stakeholders. This creates shared expectations rather than silently accepting an unachievable target.\n\nC = Establish objective latency baselines against the SLA\nD = Collaboratively revise the SLA when justified by production constraints\n\n**A.** Replacing the model without proper evaluation does not address stakeholder alignment. It could introduce new quality, security, compatibility, or performance risks. Model changes should be based on measured requirements and controlled evaluation.\n\n**B.** This is a broad project-management decision rather than a direct stakeholder-alignment action. It may also unnecessarily disrupt other development priorities without first establishing the actual performance gap.\n\n**C.** Providing objective performance measurements gives stakeholders a clear understanding of the current state. Comparing p50 and p95 latency with the agreed SLA helps distinguish actual performance gaps from perception and supports informed decisions.\n\n**D.** If the original SLA is unrealistic given validated production constraints, the appropriate approach is to review and revise it collaboratively with stakeholders. This creates shared expectations rather than silently accepting an unachievable target.\n\n**E.** This approach dismisses stakeholder concerns instead of addressing them. Architecture teams should provide measured evidence, options, and trade-offs rather than treating performance as completely outside their responsibility.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 21,
  "id": "ccar-p-q021",
  "type": "multiple",
  "select": 2,
  "question": "A Claude architect is designing a HIPAA-compliant pipeline that processes patient records.\nWhich two design decisions directly support HIPAA compliance requirements? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Setting max_tokens to a low value to minimize the volume of text generated per request."
   },
   {
    "key": "B",
    "text": "Selecting the highest-capability Claude model to maximize diagnostic accuracy."
   },
   {
    "key": "C",
    "text": "Enforcing role-based access controls so that PH is retrievable only by authorized personnel."
   },
   {
    "key": "D",
    "text": "Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place."
   },
   {
    "key": "E",
    "text": "Using streaming responses to reduce perceived latency for clinical users."
   }
  ],
  "correct": [
   "C",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Enforcing role-based access controls so that PH is retrievable only by authorized personnel.\nD. Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.\n\nC. Role-based access control (RBAC) limits access to protected health information (PHI) based on authorized roles. Restricting PHI access to appropriate personnel supports the principle of controlled access required when handling sensitive healthcare information.\n\nD. Patient information requires appropriate privacy and contractual safeguards when processed by an external service provider. Ensuring PHI is not improperly used in provider training or feedback processes, and having the appropriate Business Associate Agreement (BAA) where required, directly supports HIPAA compliance.\n\nC = Enforce role-based access to PHI\nD = Apply appropriate PHI data-handling and BAA safeguards\n\n**A.** Reducing the maximum number of generated tokens can help control cost and output length, but it does not directly address HIPAA requirements such as access control, protection of protected health information, or appropriate contractual safeguards.\n\n**B.** Model capability and HIPAA compliance are separate concerns. Choosing a more capable model does not by itself provide the privacy, access-control, contractual, or data-handling protections required for compliant processing.\n\n**C.** Role-based access control (RBAC) limits access to protected health information (PHI) based on authorized roles. Restricting PHI access to appropriate personnel supports the principle of controlled access required when handling sensitive healthcare information.\n\n**D.** Patient information requires appropriate privacy and contractual safeguards when processed by an external service provider. Ensuring PHI is not improperly used in provider training or feedback processes, and having the appropriate Business Associate Agreement (BAA) where required, directly supports HIPAA compliance.\n\n**E.** Streaming can improve the user experience and perceived response speed, but it does not directly establish HIPAA privacy or security compliance.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 22,
  "id": "ccar-p-q022",
  "type": "single",
  "select": 1,
  "question": "You are preparing an operational runbook for a Claude-based service.\nWhich content is essential to include in the runbook?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on."
   },
   {
    "key": "B",
    "text": "Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs."
   },
   {
    "key": "C",
    "text": "Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use."
   },
   {
    "key": "D",
    "text": "Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.\n\nA strong operational runbook should provide actionable guidance for incident response. It should explain common alerts, initial triage, escalation procedures, rollback or recovery steps, and where to find the relevant monitoring information.\n\n**A.** Dashboards and logs are useful, but references alone do not tell the on-call engineer what the alert means, how to investigate it, who to contact, or how to recover the service.\n\n**B.** A strong operational runbook should provide actionable guidance for incident response. It should explain common alerts, initial triage, escalation procedures, rollback or recovery steps, and where to find the relevant monitoring information.\n\n**C.** Alert definitions and triage are important, but they are incomplete without escalation paths, recovery procedures, and monitoring references.\n\n**D.** Rollback and escalation procedures are valuable, but the on-call engineer also needs to know how to recognize and investigate the incident before escalating or rolling back.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 23,
  "id": "ccar-p-q023",
  "type": "multiple",
  "select": 2,
  "question": "A technical team is cataloguing risks specific to Claude's use in a document-grounded Q & A system.\nWhich two items represent failure modes intrinsic to LLM-based systems rather than generic software defects?\n(Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "An expired TLS certificate blocks outbound API calls to Claude."
   },
   {
    "key": "B",
    "text": "A database connection timeout causes retrieval to return an empty result set."
   },
   {
    "key": "C",
    "text": "The model refuses a legitimate query because surface features trigger an overly broad safety pattern."
   },
   {
    "key": "D",
    "text": "A misconfigured load balancer routes requests to a deprecated API version."
   },
   {
    "key": "E",
    "text": "The model generates a plausible-sounding answer unsupported by any retrieved document."
   }
  ],
  "correct": [
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. The model refuses a legitimate query because surface features trigger an overly broad safety pattern.\nE. The model generates a plausible-sounding answer unsupported by any retrieved document.\n\nC. This is an LLM-specific failure mode. Safety systems can sometimes produce over-refusals, where a legitimate request is incorrectly classified as unsafe because of particular words or patterns in the input.\n\nE. This is a classic hallucination/grounding failure. An LLM can generate an answer that sounds convincing even when the available source documents do not support the claim. This is particularly important in document-grounded Q&A systems.\n\nC = Over-refusal of legitimate requests\nE = Plausible but unsupported generated answers\n\n**A.** An expired TLS certificate is a general infrastructure and security configuration problem. It can affect many types of applications and is not specific to LLM behavior.\n\n**B.** A database connection timeout is a generic integration or infrastructure failure. It is not an intrinsic failure mode of the language model itself.\n\n**C.** This is an LLM-specific failure mode. Safety systems can sometimes produce over-refusals, where a legitimate request is incorrectly classified as unsafe because of particular words or patterns in the input.\n\n**D.** This is a deployment and infrastructure configuration issue, not an intrinsic LLM failure mode.\n\n**E.** This is a classic hallucination/grounding failure. An LLM can generate an answer that sounds convincing even when the available source documents do not support the claim. This is particularly important in document-grounded Q&A systems.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 24,
  "id": "ccar-p-q024",
  "type": "multiple",
  "select": 2,
  "question": "You are rolling out monitoring for a Claude-based deployment and must complete the specification steps efore instrumenting the deployment.\nWhich two steps must be completed BEFORE instrumenting the deployment to emit metrics and traces?\n(Select two.)\nEach correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define the metrics and the slices the deployment will monitor across normal and adversarial traffic."
   },
   {
    "key": "B",
    "text": "Tune the alert thresholds based on observed normal-state distributions to reduce false positives."
   },
   {
    "key": "C",
    "text": "Define the service-level objectives (SLOs) and the error budgets the deployment will be held to."
   },
   {
    "key": "D",
    "text": "Build the dashboards that surface metrics across slices at the cadence the team operates on."
   },
   {
    "key": "E",
    "text": "Document the dashboards, alerts, and runbooks for the on-call rotation that will respond."
   }
  ],
  "correct": [
   "A",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.\nC. Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.\n\nA. Before instrumentation, you need to determine what you are going to measure. Defining the metrics and relevant slices establishes the observability requirements and ensures the deployment collects meaningful data for both normal and adversarial traffic.\n\nC. SLOs establish the target level of service performance and reliability. Defining them before instrumentation ensures the metrics and telemetry collected can be evaluated against meaningful objectives and error budgets.\n\nA = Define what to measure and how to slice the data\nC = Define SLOs and error budgets\n\n**A.** Before instrumentation, you need to determine what you are going to measure. Defining the metrics and relevant slices establishes the observability requirements and ensures the deployment collects meaningful data for both normal and adversarial traffic.\n\n**B.** Threshold tuning requires observed operational data. That data generally becomes available only after instrumentation has been implemented and the system has produced baseline measurements.\n\n**C.** SLOs establish the target level of service performance and reliability. Defining them before instrumentation ensures the metrics and telemetry collected can be evaluated against meaningful objectives and error budgets.\n\n**D.** Dashboards depend on the metrics and telemetry being available. While dashboard requirements can be planned early, building the operational dashboards is normally part of the implementation after the monitoring specifications have been defined.\n\n**E.** Runbooks and operational documentation are important, but they should be developed after the monitoring requirements, instrumentation, dashboards, and alerting behavior have been established.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 25,
  "id": "ccar-p-q025",
  "type": "single",
  "select": 1,
  "question": "A document analysis service processes legal filings averaging 80,000 tokens each. Each filing is queried by attorneys an average of 14 times during a case. The current architecture sends the full filing on every query.\nThe CFO has asked you to reduce per-query costs while preserving response quality. The security officer requires that filing contents not be stored outside Fabrikam's tenancy.\nWhich optimization approach should you recommend?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Summarize each filing once at intake and run all subsequent queries against the summary."
   },
   {
    "key": "B",
    "text": "Cache the filing as the prompt prefix for reuse across the 14 queries per case."
   },
   {
    "key": "C",
    "text": "Index filings in a vector store and retrieve only the relevant passages per query."
   },
   {
    "key": "D",
    "text": "Move the workload to a smaller Claude model to reduce the per-token cost paid."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Cache the filing as the prompt prefix for reuse across the 14 queries per case.\n\nCaching the repeated filing content as a prompt prefix can reduce the cost associated with repeatedly processing the same large context. Since the same 80,000-token filing is reused across approximately 14 queries, caching is particularly valuable. The implementation can also be designed to keep the filing within Fabrikam's controlled environment and approved data-handling boundaries.\n\n**A.** Summarizing the filing once can reduce the amount of context used later, but it may discard important legal details needed for subsequent attorney questions. For legal filings, losing precise language or specific clauses can reduce response quality.\n\n**B.** Caching the repeated filing content as a prompt prefix can reduce the cost associated with repeatedly processing the same large context. Since the same 80,000-token filing is reused across approximately 14 queries, caching is particularly valuable. The implementation can also be designed to keep the filing within Fabrikam's controlled environment and approved data-handling boundaries.\n\n**C.** Retrieval can reduce the amount of context sent for each query, but it requires storing and indexing the filing content in a vector store. Given the explicit requirement that filing contents not be stored outside Fabrikam's tenancy, an externally hosted vector store would be unsuitable unless it is explicitly within the required tenancy and security boundary.\n\n**D.** A smaller model may reduce cost, but it could also affect response quality, especially for complex legal-document analysis. The requirement specifically calls for preserving quality, so reducing model capability is not the most direct optimization.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 26,
  "id": "ccar-p-q026",
  "type": "single",
  "select": 1,
  "question": "When communicating an architectural decision to a security and compliance reviewer, which content set is most aligned with that audience's primary concerns?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager."
   },
   {
    "key": "B",
    "text": "Implementation timeline, component interfaces, and deployment sequence for the engineering team."
   },
   {
    "key": "C",
    "text": "Threat model, control mappings, residual-risk acceptance criteria, and audit traceability."
   },
   {
    "key": "D",
    "text": "Decision rationale, business outcomes, and high-level risk summary for executive review."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.\n\nThis content directly addresses the primary concerns of security and compliance reviewers. They need to understand the threats being considered, which controls mitigate those threats, what residual risks remain, who accepts those risks, and how the decisions can be demonstrated during an audit.\n\n**A.** This information is primarily relevant to a product manager. While delivery timelines and scope can matter to security teams, they do not directly address the reviewer's main concerns around security controls, threats, compliance, and auditability.\n\n**B.** These details are mainly intended for the engineering implementation team. They explain how the system will be built and deployed but do not provide sufficient evidence about security risks and compliance controls.\n\n**C.** This content directly addresses the primary concerns of security and compliance reviewers. They need to understand the threats being considered, which controls mitigate those threats, what residual risks remain, who accepts those risks, and how the decisions can be demonstrated during an audit.\n\n**D.** These elements are more appropriate for an executive audience. Executives generally need the decision, business value, and high-level risks rather than detailed control mappings and audit evidence.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 27,
  "id": "ccar-p-q027",
  "type": "single",
  "select": 1,
  "question": "You are integrating Claude Code into a workflow that runs against a production database.\nWhich guardrail design most directly preserves safety on data-modifying operations?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations."
   },
   {
    "key": "B",
    "text": "Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation."
   },
   {
    "key": "C",
    "text": "Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications."
   },
   {
    "key": "D",
    "text": "Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.\n\nThis provides defense in depth. Read-only credentials establish a safe default, tool scoping limits what the subagent can access, and explicit human confirmation creates an additional control before potentially destructive or consequential operations are performed.\n\n**A.** This design provides excessive privileges and removes important safety controls. A production database should not be exposed to unrestricted automated write operations because an unintended action could modify or delete critical data.\n\n**B.** A fully privileged credential violates the principle of least privilege. Removing confirmation for write operations also eliminates an important human control over potentially irreversible changes.\n\n**C.** Disabling logging removes valuable auditability and observability. Production database operations should generally be traceable so unexpected or unauthorized changes can be investigated.\n\n**D.** This provides defense in depth. Read-only credentials establish a safe default, tool scoping limits what the subagent can access, and explicit human confirmation creates an additional control before potentially destructive or consequential operations are performed.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 28,
  "id": "ccar-p-q028",
  "type": "single",
  "select": 1,
  "question": "You are identifying signals that a deployment should re-enter design rather than continue iterating in place.\nWhich signal most directly indicates the need for a new design cycle?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts."
   },
   {
    "key": "B",
    "text": "A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle."
   },
   {
    "key": "C",
    "text": "A minor copy edit is requested in a customer-facing string within the existing Ul, which can be handled as a localized content change without altering component responsibilities or contracts."
   },
   {
    "key": "D",
    "text": "The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.\n\nThis is the clearest signal that the system needs to re-enter the design cycle. Changes to component responsibilities or core contracts affect fundamental architectural decisions and should be evaluated through a new design process rather than handled as routine iteration.\n\n**A.** This is a documentation-level change. It does not alter the system's architecture, component responsibilities, or contracts, so a new design cycle is unnecessary.\n\n**B.** A small alert-threshold adjustment is an operational tuning change. It can be made without revisiting the underlying architecture.\n\n**C.** A copy change is a localized content modification and does not require architectural redesign when the existing components and contracts remain unchanged.\n\n**D.** This is the clearest signal that the system needs to re-enter the design cycle. Changes to component responsibilities or core contracts affect fundamental architectural decisions and should be evaluated through a new design process rather than handled as routine iteration.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 29,
  "id": "ccar-p-q029",
  "type": "single",
  "select": 1,
  "question": "You are reviewing a peer's Claude Code permission rules for an enterprise rollout. The rules grant unrestricted\nBash access to all projects across all developers.\nWhich response is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency."
   },
   {
    "key": "B",
    "text": "Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add nfiguration complexity, accepting the full attack surface for all engineers across all projects."
   },
   {
    "key": "C",
    "text": "Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations."
   },
   {
    "key": "D",
    "text": "Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.\n\nThis is the safest approach. Narrowly scoped permissions ensure Claude Code can perform the required operations without unnecessary privileges. Explicit deny rules provide an additional layer of protection for sensitive commands and operations.\n\n**A.** Expanding unrestricted access does not solve the security problem. It would increase the attack surface and give developers broader capabilities than their workflows require.\n\n**B.** Enterprise permissions should follow the principle of least privilege. Configuration complexity is not a sufficient reason to accept unrestricted access to potentially powerful commands.\n\n**C.** This is the safest approach. Narrowly scoped permissions ensure Claude Code can perform the required operations without unnecessary privileges. Explicit deny rules provide an additional layer of protection for sensitive commands and operations.\n\n**D.** Disabling permissions entirely removes the security boundary and creates an unnecessarily large attack surface. Enterprise deployments require controlled and auditable access.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 30,
  "id": "ccar-p-q030",
  "type": "single",
  "select": 1,
  "question": "A solutions architect is analyzing stakeholder feedback collected after the first quarter of a Claude-powered procurement automation deployment. The feedback includes four statements:\n(1) \"Our procurement team is processing 3x more purchase orders per analyst per day.\"\n(2) \"We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management.\"\n(3) \"The API integration costs are running 40% over the projected per-transaction budget.\"\n(4) \"Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA.\"\nWhich of the following correctly identifies the primary business value pillar each stakeholder statement represents?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4:Performance SLA"
   },
   {
    "key": "B",
    "text": "Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4:Performance SLA"
   },
   {
    "key": "C",
    "text": "Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4:Efficiency"
   },
   {
    "key": "D",
    "text": "Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4:Solution Cost"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4:Performance SLA\n\nStatement 1 represents Efficiency because the team is processing significantly more purchase orders per analyst, demonstrating improved operational efficiency.\nStatement 2 represents Transformation because the workflow has changed the way work is performed, eliminating a manual role and redeploying employees to a higher-value activity.\nStatement 3 represents Solution Cost because it directly concerns the actual cost of operating the API integration compared with the planned budget.\nStatement 4 represents Performance SLA because the observed 11-second latency is being compared directly against the committed 5-second SLA.\n\nStatement 1 = Efficiency\nStatement 2 = Transformation\nStatement 3 = Solution Cost\nStatement 4 = Performance SLA\n\n**A.** Statement 1 represents Efficiency because the team is processing significantly more purchase orders per analyst, demonstrating improved operational efficiency.\nStatement 2 represents Transformation because the workflow has changed the way work is performed, eliminating a manual role and redeploying employees to a higher-value activity.\nStatement 3 represents Solution Cost because it directly concerns the actual cost of operating the API integration compared with the planned budget.\nStatement 4 represents Performance SLA because the observed 11-second latency is being compared directly against the committed 5-second SLA.\n\n**B.** Although Statement 3 and Statement 4 are correctly classified, Statement 2 describes a broader organizational/workflow transformation, not merely an efficiency improvement. The elimination of manual data entry and redeployment of staff represents a change in how the organization operates.\n\n**C.** Statement 1 is primarily about efficiency, since it measures purchase orders processed per analyst. Statement 2 represents transformation, while Statement 4 clearly concerns an SLA rather than general efficiency.\n\n**D.** This option reverses the classifications for Statements 3 and 4. The 40% cost overrun is a Solution Cost issue, while the 11-second response time versus the 5-second SLA is a Performance SLA issue.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 31,
  "id": "ccar-p-q031",
  "type": "multiple",
  "select": 2,
  "question": "An operations engineer reports that a Claude-based pipeline began returning malformed JSON responses after a scheduled maintenance window, causing downstream processing failures.\nWhich two investigative steps most directly isolate the root cause? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes."
   },
   {
    "key": "B",
    "text": "Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window."
   },
   {
    "key": "C",
    "text": "Switch to a different Claude model tier to rule out provider-side changes as a contributing factor."
   },
   {
    "key": "D",
    "text": "Increase the max_tokens limit to determine whether output truncation is causing incomplete JSON structures."
   },
   {
    "key": "E",
    "text": "Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing."
   }
  ],
  "correct": [
   "B",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.\nE. Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing.\n\nB. The problem started immediately after a maintenance window, so comparing the current configuration with the last known good configuration is an effective way to identify changes that may have introduced the malformed JSON behavior.\n\nE. Replaying known premaintenance requests provides a controlled way to compare behavior. Inspecting the raw model output before downstream parsing helps determine whether Claude is producing malformed JSON or whether the problem occurs later in the pipeline.\n\nB = Compare current and last known-good configuration\nE = Replay known requests and inspect raw output before parsing\n\n**A.** There is no evidence that stale cached prefixes caused the problem. Clearing the cache before establishing a baseline could introduce unnecessary changes and make the investigation harder to isolate.\n\n**B.** The problem started immediately after a maintenance window, so comparing the current configuration with the last known good configuration is an effective way to identify changes that may have introduced the malformed JSON behavior.\n\n**C.** Changing the model introduces another variable into the investigation. The existing configuration should first be examined to determine whether a maintenance-related configuration change caused the issue.\n\n**D.** Output truncation can cause malformed JSON, but there is no evidence that token limits are the cause here. Increasing max_tokens would be a configuration change before the underlying cause is established.\n\n**E.** Replaying known premaintenance requests provides a controlled way to compare behavior. Inspecting the raw model output before downstream parsing helps determine whether Claude is producing malformed JSON or whether the problem occurs later in the pipeline.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 32,
  "id": "ccar-p-q032",
  "type": "multiple",
  "select": 2,
  "question": "You are compiling a diagnostic toolkit for Claude Code operational issues.\nWhich two diagnostic actions belong in the toolkit? (Select two.)\nEach correct answer presents a complete solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase the model sampling temperature so that intermittent issues surface more frequently for analysis."
   },
   {
    "key": "B",
    "text": "File a support ticket with vendor support before any local reproduction or evidence collection."
   },
   {
    "key": "C",
    "text": "Reproduce the issue with a minimal reproduction case that isolates one variable at a time."
   },
   {
    "key": "D",
    "text": "Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific."
   },
   {
    "key": "E",
    "text": "List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures."
   }
  ],
  "correct": [
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Reproduce the issue with a minimal reproduction case that isolates one variable at a time.\nE. List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.\n\nC. A minimal reproduction case is a fundamental troubleshooting technique. By reducing the workflow and changing one variable at a time, you can determine which component or configuration is responsible for the failure.\n\nE. MCP servers are important dependencies in Claude Code workflows. Checking the configured servers and their status can quickly identify connection, availability, or configuration problems that may be causing the operational issue.\n\nC = Reproduce the issue using a minimal reproduction case.\nE = Inspect configured MCP servers and their connection status.\n\n**A.** Changing the sampling temperature introduces another variable and can make the system's behavior less consistent. It is not a reliable first-line diagnostic technique for isolating Claude Code operational issues.\n\n**B.** Support escalation can be appropriate when internal investigation is insufficient, but you should first reproduce the issue and collect relevant evidence whenever possible. This gives the support team useful diagnostic information.\n\n**C.** A minimal reproduction case is a fundamental troubleshooting technique. By reducing the workflow and changing one variable at a time, you can determine which component or configuration is responsible for the failure.\n\n**D.** An immediate rollback changes the environment before the issue has been properly characterized. Version comparison can be useful later, but first you should collect evidence and isolate the problem.\n\n**E.** MCP servers are important dependencies in Claude Code workflows. Checking the configured servers and their status can quickly identify connection, availability, or configuration problems that may be causing the operational issue.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 33,
  "id": "ccar-p-q033",
  "type": "single",
  "select": 1,
  "question": "You are assessing data-exfiltration risk in a Claude-based assistant that has tools for both internal-document retrieval and outbound HTTP calls.\nWhich scenario most directly indicates a data-exfiltration risk?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request."
   },
   {
    "key": "B",
    "text": "The user submits a routine question and receives a routine answer."
   },
   {
    "key": "C",
    "text": "Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL."
   },
   {
    "key": "D",
    "text": "The internal-document retrieval tool returns a document that the user is authorized to view."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.\n\nThis is a direct data-exfiltration scenario. The retrieved document contains adversarial instructions attempting to manipulate the model into sending sensitive information to an attacker-controlled destination. This is a classic example of indirect prompt injection combined with an outbound tool, creating a serious security risk.\n\nC = Adversarial retrieved content attempts to send sensitive data to an attacker-controlled URL.\n\n**A.** This describes a normal, authorized tool interaction. The destination is allow-listed, and the request was initiated by the user for a legitimate purpose. There is no indication that sensitive information is being sent to an unauthorized destination.\n\n**B.** A routine question producing a routine answer does not indicate data exfiltration. There is no evidence of unauthorized data access or transmission.\n\n**C.** This is a direct data-exfiltration scenario. The retrieved document contains adversarial instructions attempting to manipulate the model into sending sensitive information to an attacker-controlled destination. This is a classic example of indirect prompt injection combined with an outbound tool, creating a serious security risk.\n\n**D.** The user is authorized to access the document, so the retrieval itself does not indicate unauthorized disclosure or exfiltration.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 34,
  "id": "ccar-p-q034",
  "type": "single",
  "select": 1,
  "question": "After a prompt-template update, several previously passing test cases now produce unexpected outputs.\nWhich test type is specifically designed to detect this category of failure?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Integration tests that validate cross-component pipeline behavior."
   },
   {
    "key": "B",
    "text": "Adversarial tests that probe for prompt-injection vulnerabilities."
   },
   {
    "key": "C",
    "text": "Regression tests scored against a stable reference set of known-good behavior."
   },
   {
    "key": "D",
    "text": "Smoke tests that confirm high-level system availability after the change."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Regression tests scored against a stable reference set of known-good behavior.\n\nRegression testing compares the current behavior against a stable set of previously validated results. If a prompt-template update causes previously passing test cases to produce unexpected outputs, regression tests can identify those unintended changes.\n\nC = Regression tests against a stable reference set of known-good behavior.\n\n**A.** Integration tests focus on whether multiple components work correctly together. They are useful for detecting interface and integration problems, but this scenario specifically concerns a change causing previously passing cases to behave differently.\n\n**B.** Adversarial tests are designed to identify security weaknesses and attack behaviors, such as prompt injection. They are not specifically intended to detect regressions caused by a prompt-template change.\n\n**C.** Regression testing compares the current behavior against a stable set of previously validated results. If a prompt-template update causes previously passing test cases to produce unexpected outputs, regression tests can identify those unintended changes.\n\n**D.** Smoke tests primarily verify that the system's basic functionality and availability remain intact after a change. They generally do not provide detailed comparison against previously known-good outputs.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 35,
  "id": "ccar-p-q035",
  "type": "single",
  "select": 1,
  "question": "You are identifying the highest-impact optimization for a deployment whose token cost is dominated by a long, repeated system prompt and a large retrieved context per request.\nWhich optimization most directly targets the dominant cost driver?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them."
   },
   {
    "key": "B",
    "text": "Add additional repeated content to the system prompt to give the model more guidance."
   },
   {
    "key": "C",
    "text": "Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query."
   },
   {
    "key": "D",
    "text": "Switch every request to the heaviest available model to maximize output quality, accepting that higher per-request inference cost compounds rather than addresses the dominant cost driver."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.\n\nThis approach directly addresses both major cost drivers. Caching the repeated system prompt reduces the cost of repeatedly processing identical prefix content, while trimming retrieval to only relevant passages reduces the number of context tokens processed for each request.\n\nC = Cache the repeated prompt prefix and trim retrieved context to query-relevant content.\n\n**A.** Increasing retrieval depth adds even more tokens to each request. Since the current cost is already dominated by large retrieved context, this would increase the primary cost driver rather than optimize it.\n\n**B.** Adding more repeated content makes the system prompt larger and increases token usage. It directly works against the goal of reducing the dominant prompt-related cost.\n\n**C.** This approach directly addresses both major cost drivers. Caching the repeated system prompt reduces the cost of repeatedly processing identical prefix content, while trimming retrieval to only relevant passages reduces the number of context tokens processed for each request.\n\n**D.** Using a heavier model generally increases inference cost and resource consumption. It does not address the repeated system prompt or excessive retrieved context that are causing the current cost problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 36,
  "id": "ccar-p-q036",
  "type": "single",
  "select": 1,
  "question": "You are designing a feedback session for a deployment in flight.\nWhich structure best supports productive stakeholder feedback?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants' memory to carry decisions and follow-up owners forward."
   },
   {
    "key": "B",
    "text": "Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates."
   },
   {
    "key": "C",
    "text": "Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real timewithout preparation before the discussion begins."
   },
   {
    "key": "D",
    "text": "End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session's outcomes forward."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.\n\nThis creates a structured and accountable feedback process. Sharing materials beforehand gives stakeholders time to prepare, while documenting decisions, owners, and deadlines ensures that feedback turns into clear, trackable actions.\n\nB = Focused agenda + advance artifacts + documented decisions + clear owners and dates.\n\n**A.** An unstructured meeting makes it difficult to keep the discussion focused and can lead to unclear decisions and missing follow-up actions. Relying on memory also increases the chance that important commitments will be lost.\n\n**B.** This creates a structured and accountable feedback process. Sharing materials beforehand gives stakeholders time to prepare, while documenting decisions, owners, and deadlines ensures that feedback turns into clear, trackable actions.\n\n**C.** Providing materials only at the start leaves stakeholders with insufficient preparation time. This can reduce the quality of discussion and make it harder to reach informed decisions efficiently.\n\n**D.** Without written decisions and assigned owners and dates, accountability becomes unclear. Effective stakeholder feedback should produce documented, actionable outcomes.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 37,
  "id": "ccar-p-q037",
  "type": "multiple",
  "select": 2,
  "question": "A loan pre-qualification assistant shows 94 percent approval recommendations that match the human underwriter decision. The fairness team has reviewed approval rate parity across protected groups and reported no significant difference. A board member has asked whether this evidence is sufficient to declare the assistant fair.\nWhich two Discernment-competency findings should you report? (Select two.) Each correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Approval rate parity does not by itself assess error rate parity across protected groups."
   },
   {
    "key": "B",
    "text": "Match with human underwriters does not establish freedom from underwriter-introduced bias."
   },
   {
    "key": "C",
    "text": "The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions."
   },
   {
    "key": "D",
    "text": "The fairness team's review process likely missed at least some of the protected groups studied."
   },
   {
    "key": "E",
    "text": "A larger sample is needed before any meaningful fairness claim can be made about the model."
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Approval rate parity does not by itself assess error rate parity across protected groups.\nB. Match with human underwriters does not establish freedom from underwriter-introduced bias.\n\nA. Equal or similar approval rates do not necessarily mean the system performs equally well across groups. A proper fairness assessment should also consider error patterns, such as false positives and false negatives, across protected groups.\n\nB. A 94% match with human decisions only shows that the assistant agrees with the existing decision process. If human underwriters have existing biases, the model could reproduce those biases rather than eliminate them.\n\nA = Approval-rate parity does not establish error-rate parity.\nB = Agreement with humans does not establish freedom from human bias.\n\n**A.** Equal or similar approval rates do not necessarily mean the system performs equally well across groups. A proper fairness assessment should also consider error patterns, such as false positives and false negatives, across protected groups.\n\n**B.** A 94% match with human decisions only shows that the assistant agrees with the existing decision process. If human underwriters have existing biases, the model could reproduce those biases rather than eliminate them.\n\n**C.** Agreement with human decisions measures consistency, not fairness. High agreement alone cannot establish that the decisions are unbiased or equitable.\n\n**D.** There is no evidence that the fairness team omitted protected groups. This conclusion cannot be drawn from the information provided.\n\n**E.** Sample size can affect statistical confidence, but the key issue here is that approval-rate parity and agreement with humans are insufficient fairness measures even when the sample is large.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 38,
  "id": "ccar-p-q038",
  "type": "single",
  "select": 1,
  "question": "You are an architect supporting the iteration phase of a deployed Claude-based system.\nWhich activity most directly fits this phase?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed."
   },
   {
    "key": "B",
    "text": "Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle."
   },
   {
    "key": "C",
    "text": "Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes."
   },
   {
    "key": "D",
    "text": "Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework.\n\nThis directly reflects an evidence-driven iteration cycle. Production telemetry, output evaluations, and stakeholder feedback reveal where improvements are most valuable. The proposed change can then be evaluated against the existing framework to measure its impact.\n\nD = Use production telemetry, evaluations, and stakeholder feedback to identify and plan the highest-impact improvement.\n\n**A.** Iteration does not mean rebuilding the entire system every cycle. Changes should be evidence-driven, based on production results, evaluations, and stakeholder feedback.\n\n**B.** Deployment is not the end of evaluation. Production monitoring and ongoing evaluation are essential for identifying performance issues, quality changes, and opportunities for improvement.\n\n**C.** The evaluation framework and reference set provide a consistent baseline for measuring whether changes improve or degrade the system. They should be maintained throughout iteration.\n\n**D.** This directly reflects an evidence-driven iteration cycle. Production telemetry, output evaluations, and stakeholder feedback reveal where improvements are most valuable. The proposed change can then be evaluated against the existing framework to measure its impact.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 39,
  "id": "ccar-p-q039",
  "type": "single",
  "select": 1,
  "question": "You are explaining the precedence of Claude Code configuration scopes to the team.\nWhich precedence ordering, from highest to lowest, is correct?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Local # managed # user # command-line arguments # project"
   },
   {
    "key": "B",
    "text": "Project # user # managed # local # command-line arguments"
   },
   {
    "key": "C",
    "text": "Managed # command-line arguments # local # project # user"
   },
   {
    "key": "D",
    "text": "User # project # local # command-line arguments # managed"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Managed # command-line arguments # local # project # user\n\nThis ordering correctly places the scopes from highest to lowest precedence:\nManaged → Command-line arguments → Local → Project → User\nThis precedence determines which configuration takes effect when settings from multiple scopes apply to the same behavior.\n\nC = Managed → Command-line arguments → Local → Project → User\n\n**A.** This ordering places local configuration above managed and command-line settings. It does not reflect the intended precedence hierarchy for Claude Code configuration.\n\n**B.** Project configuration is not the highest-precedence scope in this ordering. This option also places command-line arguments too low.\n\n**C.** This ordering correctly places the scopes from highest to lowest precedence:\nManaged → Command-line arguments → Local → Project → User\nThis precedence determines which configuration takes effect when settings from multiple scopes apply to the same behavior.\n\n**D.** This reverses the hierarchy by placing user scope above managed configuration and puts managed configuration at the lowest level.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 40,
  "id": "ccar-p-q040",
  "type": "single",
  "select": 1,
  "question": "A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents.\nWhich mitigation is most directly targeted at this failure mode?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Constrain responses to source-supported content, require citations, and add a verification step."
   },
   {
    "key": "B",
    "text": "Score each new model version against a stable adversarial evaluation set."
   },
   {
    "key": "C",
    "text": "Replace the shared API key with per-user Auth tokens to restrict data access."
   },
   {
    "key": "D",
    "text": "Treat retrieved data as untrusted and apply input classifiers at ingestion time."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Constrain responses to source-supported content, require citations, and add a verification step.\n\nThis directly addresses grounding failures and hallucinated claims. Restricting the response to information supported by retrieved sources, requiring citations, and adding verification helps prevent unsupported information from reaching users.\n\nA = Restrict responses to source-supported content, require citations, and verify the output.\n\n**A.** This directly addresses grounding failures and hallucinated claims. Restricting the response to information supported by retrieved sources, requiring citations, and adding verification helps prevent unsupported information from reaching users.\n\n**B.** This is an excellent model-upgrade evaluation practice, but it primarily helps detect whether a new version introduces regressions. It does not directly mitigate the immediate problem of unsupported claims in production responses.\n\n**C.** Per-user authentication improves access control and accountability, but it does not directly prevent the model from generating claims that are unsupported by retrieved documents.\n\n**D.** Input classification can help address malicious or adversarial content, such as prompt injection in retrieved documents. However, the specific failure described is unsupported generation after a model upgrade, so source-grounding and verification controls are more directly targeted.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 41,
  "id": "ccar-p-q041",
  "type": "single",
  "select": 1,
  "question": "You are distinguishing functional from non-functional requirements during discovery.\nWhich item is a non-functional requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record."
   },
   {
    "key": "B",
    "text": "The system must produce a draft response that a human reviewer can edit before sending."
   },
   {
    "key": "C",
    "text": "The system must classify inbound tickets into a defined set of categories."
   },
   {
    "key": "D",
    "text": "The system must respond at p95 latency under 800 milliseconds at the expected request volume."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. The system must respond at p95 latency under 800 milliseconds at the expected request volume.\n\nThis defines a performance constraint rather than a specific business function. Latency, throughput, scalability, reliability, and similar characteristics are typically non-functional requirements.\n\nD = The system must meet a p95 latency requirement of under 800 milliseconds.\n\n**A.** This describes what the system must do: extract specific invoice fields and populate another record. That is a functional requirement.\n\n**B.** This specifies a system capability or behavior: generating an editable draft for human review. Therefore, it is a functional requirement.\n\n**C.** Ticket classification describes what the system is required to perform, making it a functional requirement.\n\n**D.** This defines a performance constraint rather than a specific business function. Latency, throughput, scalability, reliability, and similar characteristics are typically non-functional requirements.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 42,
  "id": "ccar-p-q042",
  "type": "single",
  "select": 1,
  "question": "You are integrating Claude Code into the team's pull-request workflow. The team wants Al-assisted review without removing human approval.\nWhich integration design best fits this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer etains the approval decision under the existing branch-protection rules"
   },
   {
    "key": "B",
    "text": "Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules."
   },
   {
    "key": "C",
    "text": "Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate."
   },
   {
    "key": "D",
    "text": "Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer etains the approval decision under the existing branch-protection rules\n\nThis design keeps Claude Code in an assistive role while preserving human accountability. Claude can analyze the pull request and provide useful feedback, but the human reviewer remains responsible for the final approval decision. Existing branch-protection rules also maintain an important safety and governance control.\n\nA = Claude provides structured AI-assisted review while human reviewers retain the final approval decision.\n\n**A.** This design keeps Claude Code in an assistive role while preserving human accountability. Claude can analyze the pull request and provide useful feedback, but the human reviewer remains responsible for the final approval decision. Existing branch-protection rules also maintain an important safety and governance control.\n\n**B.** Automatic merging removes the required human approval gate and bypasses established branch protections. This does not meet the team's requirement for AI assistance while retaining human oversight.\n\n**C.** Disabling branch protection weakens the team's existing security and governance controls. It also directly conflicts with the requirement to retain human approval.\n\n**D.** Deleting pull requests without human review or notification creates an unaccountable and potentially destructive workflow. Claude should assist reviewers rather than independently take irreversible actions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 43,
  "id": "ccar-p-q043",
  "type": "multiple",
  "select": 2,
  "question": "A revenue projection assistant has missed its monthly cost target by 38 percent. Profiling shows three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship-tier model (25 percent).\nStakeholders require that projection accuracy remain unchanged.\nWhich two optimizations should you sequence first to reduce cost without affecting accuracy? (Select two.)\nEach correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Reduce the number of historical sales chunks retrieved across each query run."
   },
   {
    "key": "B",
    "text": "Truncate the policy preamble to remove non-essential clauses from the prompt."
   },
   {
    "key": "C",
    "text": "Enable prompt caching on the static policy preamble across the recurring calls."
   },
   {
    "key": "D",
    "text": "Switch the workload to a smaller, faster Claude model tier across all queries."
   },
   {
    "key": "E",
    "text": "Cache common retrieved sales chunks accessed across many of the daily queries."
   }
  ],
  "correct": [
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Enable prompt caching on the static policy preamble across the recurring calls.\nE. Cache common retrieved sales chunks accessed across many of the daily queries.\n\nC. The policy preamble accounts for 45% of the total cost and is repeated unchanged on every call. Prompt caching directly targets this dominant cost driver while preserving the full policy content, so it can reduce cost without changing the information provided to the model.\n\nE. Frequently reused historical sales content can benefit from caching. This reduces repeated processing of the same context while preserving the underlying sales information, making it a safer cost optimization than reducing retrieval depth.\n\nC = Enable prompt caching for the repeated static policy preamble.\nE = Cache frequently reused historical sales chunks.\n\n**A.** Reducing the number of retrieved chunks could lower token usage, but it may remove relevant historical information and therefore affect projection accuracy. Since accuracy must remain unchanged, this is not the safest first optimization.\n\n**B.** Although removing unnecessary content could reduce token usage, changing the policy preamble may remove information that affects model behavior or compliance. It is therefore less reliable than caching the unchanged content.\n\n**C.** The policy preamble accounts for 45% of the total cost and is repeated unchanged on every call. Prompt caching directly targets this dominant cost driver while preserving the full policy content, so it can reduce cost without changing the information provided to the model.\n\n**D.** A smaller model could reduce inference costs, but it could also change the quality and accuracy of revenue projections. Since stakeholders explicitly require unchanged accuracy, changing the model is not the best first optimization.\n\n**E.** Frequently reused historical sales content can benefit from caching. This reduces repeated processing of the same context while preserving the underlying sales information, making it a safer cost optimization than reducing retrieval depth.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 44,
  "id": "ccar-p-q044",
  "type": "multiple",
  "select": 2,
  "question": "You are building an ethics-review checklist for deployments supported by artificial intelligence.\nWhich two checks belong on the list? (Select two.)\nEach correct answer presents a complete solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Confirm that vendor licensing terms permit the planned production use of the model."
   },
   {
    "key": "B",
    "text": "Verify that outputs do not rely on generalizations about people that the underlying data does not support."
   },
   {
    "key": "C",
    "text": "Confirm that high-impact decisions retain human accountability rather than being attributed to the model."
   },
   {
    "key": "D",
    "text": "Restrict ethics review to outputs that exceed a defined model-confidence threshold."
   },
   {
    "key": "E",
    "text": "Confirm that latency and throughput targets are met across supported user populations."
   }
  ],
  "correct": [
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Verify that outputs do not rely on generalizations about people that the underlying data does not support.\nC. Confirm that high-impact decisions retain human accountability rather than being attributed to the model.\n\nB. This is an important ethical and fairness check. AI-generated outputs should not make unsupported generalizations about individuals or groups, particularly when those generalizations could lead to unfair treatment or harmful outcomes.\n\nC. High-impact decisions should maintain human accountability and oversight. The model should support decision-making rather than become an unaccountable authority for consequential decisions.\n\nB = Check for unsupported generalizations about people.\nC = Preserve human accountability for high-impact decisions.\n\n**A.** Licensing is an important legal and procurement consideration, but it is not primarily an ethics-review check concerning fairness, accountability, or potential harm to people.\n\n**B.** This is an important ethical and fairness check. AI-generated outputs should not make unsupported generalizations about individuals or groups, particularly when those generalizations could lead to unfair treatment or harmful outcomes.\n\n**C.** High-impact decisions should maintain human accountability and oversight. The model should support decision-making rather than become an unaccountable authority for consequential decisions.\n\n**D.** Model confidence is not a sufficient basis for determining whether an output requires ethical review. A model can be highly confident while still producing biased, harmful, or unsupported content.\n\n**E.** Latency and throughput are primarily performance and operational requirements. They are important deployment considerations but are not the core focus of an ethics review.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 45,
  "id": "ccar-p-q045",
  "type": "multiple",
  "select": 2,
  "question": "A Claude architect at a health services organization is defining evaluation metrics for a clinical-summary pipeline. The pipeline must remain within a per-query cost ceiling and must never surface patient data to unauthorized roles.\nWhich two metrics directly address these requirements? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "BLEU score computed against a human-annotated reference summary set"
   },
   {
    "key": "B",
    "text": "Role-based access-control enforcement rate measured on a red-team dataset"
   },
   {
    "key": "C",
    "text": "Throughput measured as successful requests processed per minute"
   },
   {
    "key": "D",
    "text": "Per-query token cost measured against the defined cost ceiling"
   },
   {
    "key": "E",
    "text": "Response latency at the 95th percentile across a one-week sample window"
   }
  ],
  "correct": [
   "B",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Role-based access-control enforcement rate measured on a red-team dataset\nD. Per-query token cost measured against the defined cost ceiling\n\nB. This directly addresses the requirement that unauthorized roles must not receive patient data. Testing role-based access controls with adversarial or red-team cases can measure whether the system consistently prevents unauthorized data exposure.\n\nD. This directly measures whether each query remains within the required cost constraint. Comparing actual token cost against the defined ceiling provides a clear operational metric for cost compliance.\n\nB = Measure role-based access-control enforcement.\nD = Measure per-query token cost against the defined ceiling.\n\n**A.** BLEU measures text similarity between generated summaries and reference summaries. It can be useful for evaluating output quality, but it does not directly measure access-control enforcement or whether the pipeline stays within its cost ceiling.\n\n**B.** This directly addresses the requirement that unauthorized roles must not receive patient data. Testing role-based access controls with adversarial or red-team cases can measure whether the system consistently prevents unauthorized data exposure.\n\n**C.** Throughput measures system capacity and performance. It does not directly indicate whether patient data is protected from unauthorized users or whether individual requests remain within the specified cost ceiling.\n\n**D.** This directly measures whether each query remains within the required cost constraint. Comparing actual token cost against the defined ceiling provides a clear operational metric for cost compliance.\n\n**E.** p95 latency is a useful performance metric, but the stated requirements concern cost control and authorization, not response speed.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 46,
  "id": "ccar-p-q046",
  "type": "multiple",
  "select": 2,
  "question": "The compliance team has authored a regulatory disclosure procedure that must be applied identically across customer service, sales, and onboarding workflows. The procedure changes when regulators issue updates, currently four to six times per year. You are designing how the procedure will be packaged for use by Claude across all three workflows.\nWhich two design decisions should you include? (Select two.)\nEach correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Package the procedure as a Claude Skill owned directly by the compliance team."
   },
   {
    "key": "B",
    "text": "Embed the procedure text into each workflow's system prompt at integration time."
   },
   {
    "key": "C",
    "text": "Store the procedure in a shared retrieval corpus accessed by all three workflows."
   },
   {
    "key": "D",
    "text": "Have each workflow team rewrite the procedure for its own context."
   },
   {
    "key": "E",
    "text": "Reference the same Claude Skill from all three workflow integrations."
   }
  ],
  "correct": [
   "A",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Package the procedure as a Claude Skill owned directly by the compliance team.\nE. Reference the same Claude Skill from all three workflow integrations.\n\nA. A Claude Skill is well suited for reusable, procedural knowledge that needs to be applied consistently across multiple workflows. Having the compliance team own the Skill also creates a clear governance and maintenance owner, which is especially important because the procedure changes several times per year.\n\nE. Referencing the same Skill across all three workflows ensures that they use a common, centrally maintained procedure. When compliance updates the Skill, the change can be managed in one place rather than manually updating three separate system prompts.\n\nA = Package the procedure as a compliance-owned Claude Skill.\nE = Reference the same Skill from all three workflow integrations.\n\n**A.** A Claude Skill is well suited for reusable, procedural knowledge that needs to be applied consistently across multiple workflows. Having the compliance team own the Skill also creates a clear governance and maintenance owner, which is especially important because the procedure changes several times per year.\n\n**B.** Embedding the procedure separately into every workflow creates duplication and maintenance overhead. Each update would need to be propagated across multiple integrations, increasing the risk that one workflow uses an outdated version.\n\n**C.** A shared retrieval corpus can be useful for retrieving reference information, but this scenario involves a specific, repeatable procedure that must be consistently applied. Packaging it as a reusable Skill provides a more appropriate mechanism for procedural guidance.\n\n**D.** Rewriting the procedure independently introduces inconsistency and governance risk. The requirement is that the same regulatory procedure be applied identically across all three workflows.\n\n**E.** Referencing the same Skill across all three workflows ensures that they use a common, centrally maintained procedure. When compliance updates the Skill, the change can be managed in one place rather than manually updating three separate system prompts.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 47,
  "id": "ccar-p-q047",
  "type": "single",
  "select": 1,
  "question": "You are defining when to introduce a project subagent versus relying on Claude Code's general capabilities.\nWhich scenario most directly justifies a dedicated subagent?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions."
   },
   {
    "key": "B",
    "text": "The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection."
   },
   {
    "key": "C",
    "text": "The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope."
   },
   {
    "key": "D",
    "text": "The team wants every Claude Code interaction to use the same generic system prompt with no task- specific specialization, narrow tool permissions, or dedicated model selection."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.\n\nA dedicated subagent is appropriate when a task is recurring, specialized, and requires consistent configuration. A focused system prompt, restricted tool permissions, and task-appropriate model selection allow the subagent to operate within a clearly defined scope while reducing unnecessary access.\n\nA = Use a dedicated subagent for recurring specialized work that benefits from focused instructions, narrow permissions, and task-specific model selection.\n\n**A.** A dedicated subagent is appropriate when a task is recurring, specialized, and requires consistent configuration. A focused system prompt, restricted tool permissions, and task-appropriate model selection allow the subagent to operate within a clearly defined scope while reducing unnecessary access.\n\n**B.** A one-time, general-purpose task does not justify the additional configuration and maintenance overhead of a dedicated subagent. Claude Code's general capabilities are sufficient.\n\n**C.** Without a recurring specialized workload, there is little reason to create a dedicated subagent. The general Claude Code environment is more appropriate.\n\n**D.** A generic configuration without task specialization does not provide the main benefits of a subagent. Dedicated subagents are valuable precisely when they can provide focused instructions, scoped permissions, and task-specific behavior.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 48,
  "id": "ccar-p-q048",
  "type": "single",
  "select": 1,
  "question": "You are evaluating an evaluation set used to score a Claude-based hiring-support tool. The set is drawn from one geographic region and one tenure band.\nWhich response is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool's full user population."
   },
   {
    "key": "B",
    "text": "Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release."
   },
   {
    "key": "C",
    "text": "Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population."
   },
   {
    "key": "D",
    "text": "Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.\n\nThe evaluation set should represent the intended user population. Expanding coverage across relevant geographic regions and tenure bands helps identify potential performance or fairness issues that may be hidden by the narrow original dataset. The system should then be rescored before broader deployment.\n\nB = Expand the evaluation set to represent the intended population and rescore before broader release.\n\n**A.** Replacing quantitative evaluation with a small convenience sample would reduce the reliability and representativeness of the evaluation. The goal should be to improve coverage, not eliminate structured measurement.\n\n**B.** The evaluation set should represent the intended user population. Expanding coverage across relevant geographic regions and tenure bands helps identify potential performance or fairness issues that may be hidden by the narrow original dataset. The system should then be rescored before broader deployment.\n\n**C.** Narrowing the evaluation set further makes the evaluation less representative and can hide problems affecting other groups. Simplifying evaluation should not come at the expense of meaningful population coverage.\n\n**D.** High scores on a narrow subset do not demonstrate that the system will perform reliably across the full intended population. Broader evaluation is necessary before making a wider release decision.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 49,
  "id": "ccar-p-q049",
  "type": "single",
  "select": 1,
  "question": "During an architectural review, the security team identifies a risk that adversarial content injected into retrieved documents could manipulate the model's behavior.\nWhich mitigation most directly addresses this threat?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Treat all retrieved content as untrusted input and apply input classifiers with output validation."
   },
   {
    "key": "B",
    "text": "Require citations for each claim and constrain responses to source-supported content."
   },
   {
    "key": "C",
    "text": "Restrict outbound tool calls to an approved destination allow-list."
   },
   {
    "key": "D",
    "text": "Score outputs against a stable adversarial evaluation set on each model-version change."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Treat all retrieved content as untrusted input and apply input classifiers with output validation.\n\nRetrieved documents should be treated as untrusted data, because they may contain malicious instructions designed to manipulate the model. Input classification can help identify suspicious content, while output validation provides an additional layer of protection before the model's response is used downstream.\n\nA = Treat retrieved content as untrusted input, apply input classification, and validate outputs.\n\n**A.** Retrieved documents should be treated as untrusted data, because they may contain malicious instructions designed to manipulate the model. Input classification can help identify suspicious content, while output validation provides an additional layer of protection before the model's response is used downstream.\n\n**B.** These controls are primarily aimed at grounding and hallucination risks. They can improve traceability and factual support, but they do not directly prevent adversarial instructions inside retrieved content from influencing the model.\n\n**C.** An allow-list is an effective control against unauthorized outbound communication and data exfiltration, but it does not directly address the initial prompt-injection threat within retrieved documents.\n\n**D.** Adversarial evaluation is useful for detecting regressions and measuring security behavior, especially after model changes. However, it is an evaluation mechanism rather than the most direct runtime mitigation for malicious content in retrieved documents.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 50,
  "id": "ccar-p-q050",
  "type": "single",
  "select": 1,
  "question": "You are responding to a stakeholder request that adds significant scope to a deployment already in flight.\nWhich response best aligns expectations while respecting the stakeholder's underlying need?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications."
   },
   {
    "key": "B",
    "text": "Decline the request outright without acknowledging the stakeholder's underlying need or offering alternatives such as deferral, descoping, or timeline extension."
   },
   {
    "key": "C",
    "text": "Acknowledge the request, describe the scope and timeline implications transparently, and propose options-defer it, descope something else, or extend the timeline-for the stakeholder to choose."
   },
   {
    "key": "D",
    "text": "Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Acknowledge the request, describe the scope and timeline implications transparently, and propose options-defer it, descope something else, or extend the timeline-for the stakeholder to choose.\n\nThis approach combines transparency, expectation management, and stakeholder alignment. It makes the trade-offs explicit while allowing the stakeholder to choose how the underlying need should be addressed.\n\nC = Acknowledge the need, explain the trade-offs, and offer clear options for the stakeholder to choose.\n\n**A.** Hiding scope changes creates a transparency and planning problem. The delivery team needs visibility into changes that could affect timelines, resources, and commitments.\n\n**B.** Simply rejecting the request does not address the stakeholder's underlying business need. Effective stakeholder management should acknowledge the need and explore practical alternatives.\n\n**C.** This approach combines transparency, expectation management, and stakeholder alignment. It makes the trade-offs explicit while allowing the stakeholder to choose how the underlying need should be addressed.\n\n**D.** Accepting additional scope without discussing its impact creates unmanaged scope creep and can lead to missed deadlines and unrealistic stakeholder expectations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 51,
  "id": "ccar-p-q051",
  "type": "multiple",
  "select": 2,
  "question": "The compliance team at a firm has approved a Claude Skill that generates client-facing investment summaries.\nThe Skill includes the firm's required disclaimers and prohibited-language list. A product manager has asked whether additional guardrails are needed at the application layer or whether the Skill alone is sufficient.\nWhich two guardrail responsibilities should remain at the application layer rather than the Skill? (Select two.) Each correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Log every generated summary to the firm's compliance audit trail for retention."
   },
   {
    "key": "B",
    "text": "Verify the requesting user is authorized to generate investment summaries at all."
   },
   {
    "key": "C",
    "text": "Format output sections according to the firm's standardized house style guidelines."
   },
   {
    "key": "D",
    "text": "Apply the disclaimer template that the compliance team has standardized firm-wide."
   },
   {
    "key": "E",
    "text": "Apply the prohibited-language list that the compliance team maintains and updates."
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Log every generated summary to the firm's compliance audit trail for retention.\nB. Verify the requesting user is authorized to generate investment summaries at all.\n\nA. Audit logging is an application-level responsibility because it concerns system-wide observability, compliance records, retention, and traceability. A Skill can provide procedural guidance, but the application should enforce and record the actual audit trail.\n\nB. Authorization is an access-control responsibility. The application must independently verify the user's identity and permissions before allowing the operation. A Skill should not be relied upon to enforce whether a user is authorized to perform the task.\n\nA = Maintain the compliance audit trail at the application layer.\nB = Enforce user authorization at the application layer.\n\n**A.** Audit logging is an application-level responsibility because it concerns system-wide observability, compliance records, retention, and traceability. A Skill can provide procedural guidance, but the application should enforce and record the actual audit trail.\n\n**B.** Authorization is an access-control responsibility. The application must independently verify the user's identity and permissions before allowing the operation. A Skill should not be relied upon to enforce whether a user is authorized to perform the task.\n\n**C.** Formatting and presentation instructions are well suited to the Skill, particularly when they are part of the standardized procedure for producing investment summaries.\n\n**D.** The disclaimer is explicitly part of the approved Skill's compliance procedure. Therefore, it is appropriate for the Skill to provide this instruction.\n\n**E.** The prohibited-language list is already part of the compliance-owned Skill. Maintaining and applying this procedural guidance is an appropriate responsibility for the Skill.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 52,
  "id": "ccar-p-q052",
  "type": "single",
  "select": 1,
  "question": "You are defining an SLA for a Claude-based assistant.\nWhich SLA definition is most operationally meaningful?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A target tied to a stakeholder sentiment measure such as \"the team feels satisfied,\" which cannot be measured objectively or used to trigger a documented breach response."
   },
   {
    "key": "B",
    "text": "A measurable target with a defined metric, threshold, evaluation window, and consequence for breach- for example,\"p95 per-request latency under 800 ms over a 28-day window.\""
   },
   {
    "key": "C",
    "text": "A qualitative commitment such as \"the system will be fast and reliable,\" which names no metric, threshold, or evaluation window."
   },
   {
    "key": "D",
    "text": "A target without a defined metric, threshold, evaluation window, or breach consequence."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. A measurable target with a defined metric, threshold, evaluation window, and consequence for breach- for example,\"p95 per-request latency under 800 ms over a 28-day window.\"\n\nThis is a strong SLA because it clearly defines:\n\n• Metric: p95 per-request latency\n\n• Threshold: under 800 ms\n\n• Evaluation window: 28 days\n\n• Breach condition/consequence: a defined response when the target is not met\n\nThis makes the SLA objective, measurable, and operationally actionable.\n\nB = Define a measurable metric, threshold, evaluation window, and breach consequence.\n\n**A.** An SLA should be objective and measurable. Stakeholder sentiment alone does not provide a precise metric, threshold, or defined method for determining whether the SLA has been breached.\n\n**B.** This is a strong SLA because it clearly defines:\n\n• Metric: p95 per-request latency\n\n• Threshold: under 800 ms\n\n• Evaluation window: 28 days\n\n• Breach condition/consequence: a defined response when the target is not met\n\nThis makes the SLA objective, measurable, and operationally actionable.\n\n**C.** “Fast and reliable” is too vague to function as an operational SLA. There is no measurable definition of how fast, how reliable, or over what period performance should be evaluated.\n\n**D.** Without measurable criteria and a defined evaluation period, stakeholders cannot objectively determine whether the service has met or breached the SLA.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 53,
  "id": "ccar-p-q053",
  "type": "single",
  "select": 1,
  "question": "You are transitioning a Claude-based deployment from design into implementation.\nWhich handoff package most directly supports a clean transition?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register."
   },
   {
    "key": "B",
    "text": "A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRS, omponent contracts, evaluation framework, runbooks, playbook, or known limitations."
   },
   {
    "key": "C",
    "text": "Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations."
   },
   {
    "key": "D",
    "text": "Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation amework, runbooks, on-call playbook, or known-limitations register to support the delivery team."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations.\n\nThis provides the implementation team with the technical, evaluation, and operational information required for a smooth transition.\nIt includes:\n\n• Architecture overview for understanding the overall system\n\n• ADRs for understanding important architectural decisions\n\n• Component contracts for integration boundaries\n\n• Evaluation framework and reference set for validating behavior\n\n• Runbooks and on-call playbook for operational support\n\n• Known limitations for understanding risks and constraints\n\nC = Architecture overview + ADRs + component contracts + evaluation framework + runbooks + on-call playbook + known limitations.\n\n**A.** Presentation slides alone rarely provide enough implementation detail. The delivery team needs architecture details, contracts, evaluation criteria, operational procedures, and known limitations to implement and operate the system correctly.\n\n**B.** A verbal walkthrough can supplement documentation, but it should not replace it. Without written artifacts, important decisions and operational knowledge can be lost or interpreted inconsistently.\n\n**C.** This provides the implementation team with the technical, evaluation, and operational information required for a smooth transition.\nIt includes:\n\n• Architecture overview for understanding the overall system\n\n• ADRs for understanding important architectural decisions\n\n• Component contracts for integration boundaries\n\n• Evaluation framework and reference set for validating behavior\n\n• Runbooks and on-call playbook for operational support\n\n• Known limitations for understanding risks and constraints\n\n**D.** Source code does not provide the complete architectural and operational context needed for a clean handoff. The implementation team also needs documentation explaining decisions, interfaces, evaluation, operations, and limitations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 54,
  "id": "ccar-p-q054",
  "type": "multiple",
  "select": 2,
  "question": "A security team is evaluating two proposed controls. Control A adds an outbound tool allow-list with destination restrictions and per-call review. Control B scores responses against a stable adversarial evaluation set after each model-version change.\nWhich two risk categories are correctly matched to these controls? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Control A - prompt injection from adversarial content in retrieved data"
   },
   {
    "key": "B",
    "text": "Control A - silent quality drift after a model-version upgrade"
   },
   {
    "key": "C",
    "text": "Control A - data exfiltration via outbound tool calls"
   },
   {
    "key": "D",
    "text": "Control B - data exfiltration via outbound tool calls"
   },
   {
    "key": "E",
    "text": "Control B - silent quality drift after a model-version upgrade"
   }
  ],
  "correct": [
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Control A - data exfiltration via outbound tool calls\nE. Control B - silent quality drift after a model-version upgrade\n\nC. An outbound destination allow-list and per-call review directly reduce the risk of sensitive data being transmitted to unauthorized external destinations through tools.\n\nE. Comparing each new model version against a stable adversarial evaluation set can reveal unexpected changes in behavior and identify quality or safety regressions after an upgrade.\n\nC = Control A → Data exfiltration via outbound tool calls.\nE = Control B → Silent quality drift after a model-version upgrade.\n\n**A.** Control A primarily restricts outbound tool destinations and calls. Prompt injection from retrieved content is more directly addressed by treating retrieved content as untrusted input, input classification, and output validation.\n\n**B.** An outbound allow-list does not detect quality or behavioral drift after a model update. This type of risk requires evaluation and comparison against a stable reference set.\n\n**C.** An outbound destination allow-list and per-call review directly reduce the risk of sensitive data being transmitted to unauthorized external destinations through tools.\n\n**D.** Control B is an evaluation control designed to identify changes in model behavior. It does not directly prevent outbound data exfiltration.\n\n**E.** Comparing each new model version against a stable adversarial evaluation set can reveal unexpected changes in behavior and identify quality or safety regressions after an upgrade.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 55,
  "id": "ccar-p-q055",
  "type": "single",
  "select": 1,
  "question": "A Claude Architect is reviewing a post-deployment performance report for an Al-assisted legal-document summarization system. The report includes these observations:\n* Average summarization time decreased from 47 minutes to 6 minutes per document.\n* Associates spend less time on summaries, but overall billable output has not measurably changed.\n* Infrastructure costs increased by 22% because redundant retry logic generated additional API calls.\n* Some summaries require attorney correction, adding an average of 8 minutes of review per document.\nWhich analysis correctly attributes each observation to the appropriate business-value pillar?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue."
   },
   {
    "key": "B",
    "text": "Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue."
   },
   {
    "key": "C",
    "text": "Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering."
   },
   {
    "key": "D",
    "text": "Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.\n\nEach observation is correctly mapped:\n\n• Observation 1: 47 minutes → 6 minutes demonstrates a clear efficiency gain.\n\n• Observation 2: Less time spent on summaries has not translated into increased billable output, so the expected productivity benefit has not yet been realized.\n\n• Observation 3: A 22% increase in infrastructure/API costs is a solution-cost issue.\n\n• Observation 4: Attorney correction adds 8 minutes of work, creating an efficiency loss that partially offsets the initial time savings.\n\nD = Efficiency gain + unrealized productivity + solution-cost issue + partially offsetting efficiency loss.\n\n**A.** Observation 2 specifically states that overall billable output has not measurably changed, so it does not demonstrate a realized efficiency/productivity outcome. Observation 4 concerns additional attorney review time, not a performance SLA.\n\n**B.** Observation 1 is primarily an efficiency gain, not necessarily a transformation outcome. Observation 3 explicitly concerns increased infrastructure/API costs, making it a solution-cost issue, not a performance-SLA issue.\n\n**C.** Observation 1 measures time saved per document, while Observation 4 measures human correction/review effort. Neither directly establishes a performance-SLA improvement. Observation 3 is explicitly about increased infrastructure costs.\n\n**D.** Each observation is correctly mapped:\n\n• Observation 1: 47 minutes → 6 minutes demonstrates a clear efficiency gain.\n\n• Observation 2: Less time spent on summaries has not translated into increased billable output, so the expected productivity benefit has not yet been realized.\n\n• Observation 3: A 22% increase in infrastructure/API costs is a solution-cost issue.\n\n• Observation 4: Attorney correction adds 8 minutes of work, creating an efficiency loss that partially offsets the initial time savings.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 56,
  "id": "ccar-p-q057",
  "type": "multiple",
  "select": 2,
  "question": "You are listing characteristics of robust guardrail design for an enterprise deployment.\nWhich two characteristics belong on the list? (Select two.)\nEach correct answer presents a complete solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Centralized log retention for guardrail violations with quarterly review by the security team."
   },
   {
    "key": "B",
    "text": "Per-role tool allow-lists enforced at the orchestration layer before any tool call executes."
   },
   {
    "key": "C",
    "text": "Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance."
   },
   {
    "key": "D",
    "text": "User feedback channels that route reported guardrail failures into the product backlog for triage."
   },
   {
    "key": "E",
    "text": "Periodic refresh of the system prompt wording to keep refusal language current and clear."
   }
  ],
  "correct": [
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.\nC. Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.\n\nB. Enforcing per-role tool allow-lists at the orchestration layer applies least privilege before a tool can execute. This provides a strong preventive control because the model cannot simply decide to use a tool outside the permissions granted to its role.\n\nC. Robust guardrails need continuous adversarial testing and regression tracking. Including attack-oriented cases in the evaluation set helps verify that guardrails continue to work as prompts, models, and system components change.\n\nB = Per-role tool allow-lists enforced before tool execution.\nC = Adversarial evaluation coverage with regression tracking.\n\n**A.** Centralized logging and periodic review are useful for monitoring and governance, but they are not as directly related to the core guardrail enforcement and evaluation mechanisms represented by the correct answers.\n\n**B.** Enforcing per-role tool allow-lists at the orchestration layer applies least privilege before a tool can execute. This provides a strong preventive control because the model cannot simply decide to use a tool outside the permissions granted to its role.\n\n**C.** Robust guardrails need continuous adversarial testing and regression tracking. Including attack-oriented cases in the evaluation set helps verify that guardrails continue to work as prompts, models, and system components change.\n\n**D.** User feedback is valuable for identifying issues, but it is primarily a feedback and improvement mechanism, rather than a direct preventive or evaluation control for guardrail robustness.\n\n**E.** Refreshing refusal wording can improve clarity, but changing prompt language alone is not sufficient to establish robust guardrail enforcement. Strong guardrails should include controls outside the model's instructions as well.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 57,
  "id": "ccar-p-q058",
  "type": "multiple",
  "select": 2,
  "question": "A Claude architect is leading the discovery phase for a new Al-powered customer service solution.\nWhich two activities are characteristic of structured discovery and requirement gathering for a Claude-based\ndeployment? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins."
   },
   {
    "key": "B",
    "text": "Selecting the Claude model tier based on the architect's prior project experience before stakeholder input is collected."
   },
   {
    "key": "C",
    "text": "Generating an initial prototype and iterating based on user reaction rather than written requirements."
   },
   {
    "key": "D",
    "text": "Documenting explicit success criteria and failure thresholds that will gate production deployment."
   },
   {
    "key": "E",
    "text": "Deferring constraint documentation until the integration design phase to avoid scope creep."
   }
  ],
  "correct": [
   "A",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins.\nD. Documenting explicit success criteria and failure thresholds that will gate production deployment.\n\nA. Structured discovery begins by understanding the stakeholders, business needs, constraints, and expectations. Workshops can identify important requirements such as latency, accuracy, compliance, security, and operational constraints before architectural decisions are made.\n\nD. Clearly defined success criteria and failure thresholds turn stakeholder expectations into measurable requirements. They also provide objective criteria for determining whether the solution is ready for production.\n\nA = Facilitate stakeholder workshops to identify requirements and constraints.\nD = Document measurable success criteria and failure thresholds for production readiness.\n\n**A.** Structured discovery begins by understanding the stakeholders, business needs, constraints, and expectations. Workshops can identify important requirements such as latency, accuracy, compliance, security, and operational constraints before architectural decisions are made.\n\n**B.** Model selection should be driven by requirements and evidence, not simply by prior experience. Choosing a model before understanding stakeholder needs can result in an inappropriate architecture or unnecessary cost.\n\n**C.** Prototyping can be valuable, but relying primarily on user reactions without documented requirements and success criteria does not represent structured discovery.\n\n**D.** Clearly defined success criteria and failure thresholds turn stakeholder expectations into measurable requirements. They also provide objective criteria for determining whether the solution is ready for production.\n\n**E.** Constraints should be identified and documented during discovery. Delaying them can cause major architectural changes later and increase delivery risk.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 58,
  "id": "ccar-p-q059",
  "type": "single",
  "select": 1,
  "question": "You are identifying inefficiency in a Claude Code workflow where each engineer manually re-explains the project's conventions and architecture in every session.\nWhich adjustment most directly removes this inefficiency?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all Al-assisted development productivity for this codebase."
   },
   {
    "key": "B",
    "text": "Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically."
   },
   {
    "key": "C",
    "text": "Tell each engineer to retype the project conventions and architecture context more quickly at the start of eachsession, reducing time lost without eliminating the repeated manual effort."
   },
   {
    "key": "D",
    "text": "Remove all documented project conventions and architectural standards so engineers have nothing to re-explain at session start, accepting the loss of consistency and shared coding standards."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.\n\nA project-scoped CLAUDE.md provides persistent project context that can be reused across sessions. This eliminates the need for engineers to repeatedly explain the same architecture, conventions, and project instructions, while keeping the information version-controlled and shared with the team.\n\nB = Store project conventions and architecture in a project-scoped CLAUDE.md so every Claude Code session can load the shared context automatically.\n\n**A.** This eliminates the inefficiency by eliminating Claude Code itself, but it also removes the team's AI-assisted development capability. It is not an effective solution to the underlying context-management problem.\n\n**B.** A project-scoped CLAUDE.md provides persistent project context that can be reused across sessions. This eliminates the need for engineers to repeatedly explain the same architecture, conventions, and project instructions, while keeping the information version-controlled and shared with the team.\n\n**C.** This only makes the existing inefficient process faster. It does not eliminate the repeated manual work or provide consistent persistent context.\n\n**D.** Removing project standards sacrifices consistency and governance rather than solving the context problem. The correct approach is to preserve the standards in persistent project context.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 59,
  "id": "ccar-p-q060",
  "type": "single",
  "select": 1,
  "question": "You are integrating Al-assisted tooling into the team's documentation workflow. The team wants generated documentation that stays grounded in the actual code.\nWhich integration approach best fits this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Generate documentation from the model's training-data recall without reading any of the actual repository code, cepting that the output will not reflect the current implementation."
   },
   {
    "key": "B",
    "text": "Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow or any human approval step."
   },
   {
    "key": "C",
    "text": "Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow."
   },
   {
    "key": "D",
    "text": "Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that cumentation generation will be entirely disconnected from the actual implementation."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.\n\nThis approach grounds the documentation in the actual repository implementation. Filesystem and code-search tools allow the subagents to inspect current code, while the normal review workflow provides human oversight and quality control before publication.\n\nC = Have subagents inspect the actual code, generate grounded documentation, and submit changes through the normal review workflow.\n\n**A.** Training-data recall may be outdated or unrelated to the current repository. Without access to the actual code, the generated documentation cannot reliably reflect the current implementation.\n\n**B.** Direct publication bypasses the team's review and approval process and could allow inaccurate or inappropriate documentation to reach users. AI-generated changes should follow the existing review workflow.\n\n**C.** This approach grounds the documentation in the actual repository implementation. Filesystem and code-search tools allow the subagents to inspect current code, while the normal review workflow provides human oversight and quality control before publication.\n\n**D.** Removing access to the repository prevents the system from grounding its documentation in the current codebase, which directly conflicts with the requirement.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 60,
  "id": "ccar-p-q061",
  "type": "multiple",
  "select": 2,
  "question": "A security audit uncovers two issues: (1) all end users share a single API key, and (2) tool calls are executed without logging the initiating user.\nWhich two mitigations directly address these specific findings? (Select two.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Validate structured outputs against a schema before downstream actions are executed."
   },
   {
    "key": "B",
    "text": "Enforce RBAC at the retrieval layer before content enters the model context."
   },
   {
    "key": "C",
    "text": "Move credentials out of the prompt context and resolve them from a server-side secret store."
   },
   {
    "key": "D",
    "text": "Add actor attribution to tool-call logs so each call records the initiating user identity."
   },
   {
    "key": "E",
    "text": "Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions."
   }
  ],
  "correct": [
   "D",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nD. Add actor attribution to tool-call logs so each call records the initiating user identity.\nE. Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions.\n\nD. This directly addresses the second finding. Recording the initiating user's identity with each tool call provides accountability, traceability, and useful audit information.\n\nE. This directly addresses the first finding. Per-user, scope-restricted authentication provides individual accountability and supports least-privilege access instead of giving every user the same shared credential.\n\nD = Add initiating-user attribution to tool-call logs.\nE = Replace the shared API key with per-user, scope-restricted authentication tokens.\n\n**A.** Schema validation helps prevent malformed or unexpected outputs from being passed to downstream systems. It does not address shared credentials or missing user attribution in tool-call logs.\n\n**B.** RBAC at the retrieval layer is useful for preventing unauthorized access to retrieved information, but it does not directly resolve the two findings of shared API credentials and missing actor attribution.\n\n**C.** A server-side secret store improves credential handling and secret protection, but by itself it does not replace the shared API key with per-user authorization or provide attribution for tool calls.\n\n**D.** This directly addresses the second finding. Recording the initiating user's identity with each tool call provides accountability, traceability, and useful audit information.\n\n**E.** This directly addresses the first finding. Per-user, scope-restricted authentication provides individual accountability and supports least-privilege access instead of giving every user the same shared credential.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 61,
  "id": "ccar-p-q062",
  "type": "single",
  "select": 1,
  "question": "You are assessing a Claude-based system whose dominant risk is silent quality drift on safety-relevant outputs\nafter a model-version upgrade.\nWhich assessment activity most directly addresses this risk?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production."
   },
   {
    "key": "B",
    "text": "Rotate adversarial inputs randomly so no two upgrades are scored on the same set."
   },
   {
    "key": "C",
    "text": "Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic."
   },
   {
    "key": "D",
    "text": "Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.\n\nA stable adversarial evaluation set provides a consistent baseline for comparing model versions. Version-attributed scoring makes it possible to identify quality or safety drift and prevent a problematic version from being promoted.\n\nD = Maintain a stable adversarial evaluation set and compare each model version against it before promotion.\n\n**A.** Disabling adversarial evaluation removes an important mechanism for detecting safety regressions before deployment. This increases the risk that a model-version change introduces undetected problems into production.\n\n**B.** Changing the evaluation set every time makes it difficult to establish a consistent baseline between model versions. Stable test cases are important for accurately identifying behavioral drift.\n\n**C.** Waiting for user complaints means the system is being evaluated after exposure to production users. Safety-relevant regressions should be detected before promotion whenever possible.\n\n**D.** A stable adversarial evaluation set provides a consistent baseline for comparing model versions. Version-attributed scoring makes it possible to identify quality or safety drift and prevent a problematic version from being promoted.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 62,
  "id": "ccar-p-q063",
  "type": "single",
  "select": 1,
  "question": "You are a platform architect designing an internal Claude-based assistant that serves both finance analysts and external auditors. Each population must access only documents permitted by its role.\nWhere should role-based access control be enforced in the pipeline?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents."
   },
   {
    "key": "B",
    "text": "At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model."
   },
   {
    "key": "C",
    "text": "Nowhere in the pipeline; rely on the model's general refusal behavior to reject unauthorized document access without any enforced access control."
   },
   {
    "key": "D",
    "text": "After the response is generated, by post-filtering content that should not have been retrieved."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.\n\nRBAC should be enforced before retrieval results are passed into the model context. The retrieval layer can verify the user's role and return only documents that the user is authorized to access.\nThis follows the principle of enforcing authorization at the data-access boundary, rather than relying on model behavior.\n\nB = Enforce RBAC at the retrieval layer before unauthorized content can enter the model context.\n\n**A.** A system prompt is an instruction to the model, not an enforcement boundary. Relying on the model to follow access-control instructions could allow unauthorized content to enter the model context.\n\n**B.** RBAC should be enforced before retrieval results are passed into the model context. The retrieval layer can verify the user's role and return only documents that the user is authorized to access.\nThis follows the principle of enforcing authorization at the data-access boundary, rather than relying on model behavior.\n\n**C.** Model refusal behavior is not an access-control mechanism. Authorization must be explicitly enforced by the application or retrieval layer.\n\n**D.** Post-filtering is too late. Unauthorized information may already have entered the model's context and influenced the generated response. Access control should occur before the content reaches the model.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 63,
  "id": "ccar-p-q064",
  "type": "multiple",
  "select": 2,
  "question": "You are running a controlled experiment to compare two prompts and must complete the design steps before executing the experiment.\nWhich two steps must be completed BEFORE running the experiment with random assignment? (Select two.)\nEach correct answer presents part of the solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Determine the minimum detectable effect size and the sample size needed for power."
   },
   {
    "key": "B",
    "text": "Decide whether to promote, reject, or iterate the candidate based on the analysis."
   },
   {
    "key": "C",
    "text": "Define the hypothesis and the primary success metric for the comparison."
   },
   {
    "key": "D",
    "text": "Analyze the results against the predefined success metric and significance threshold."
   },
   {
    "key": "E",
    "text": "Document the recommendation, the trade-offs accepted, and the alternatives considered."
   }
  ],
  "correct": [
   "A",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Determine the minimum detectable effect size and the sample size needed for power.\nC. Define the hypothesis and the primary success metric for the comparison.\n\nA. Before running the experiment, you should determine the minimum detectable effect (MDE) and the required sample size. This ensures the experiment has enough statistical power to detect a meaningful difference between the two prompts.\n\nC. The hypothesis and primary success metric must be defined before the experiment begins. Predefining them prevents changing the evaluation criteria after seeing the results and helps maintain an objective comparison.\n\nA = Determine the MDE and required sample size for adequate statistical power.\nC = Define the hypothesis and primary success metric before random assignment.\n\n**A.** Before running the experiment, you should determine the minimum detectable effect (MDE) and the required sample size. This ensures the experiment has enough statistical power to detect a meaningful difference between the two prompts.\n\n**B.** This is a post-experiment decision. You can only decide whether to promote, reject, or iterate after collecting and analyzing the experimental results.\n\n**C.** The hypothesis and primary success metric must be defined before the experiment begins. Predefining them prevents changing the evaluation criteria after seeing the results and helps maintain an objective comparison.\n\n**D.** Analysis occurs after the experiment has been executed and the required data has been collected.\n\n**E.** This belongs to the decision and reporting stage after the experiment has been analyzed. It is not a prerequisite for running the experiment.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 64,
  "id": "ccar-p-q001-import-1",
  "type": "single",
  "select": 1,
  "question": "You are evaluating a customer-support agent’s configuration. Each prospective tool belongs to one of four categories: (1) required to carry out defined tasks, (2) frequently used and reduces hand-offs, (3) occasionally helpful for unrelated work, (4) speculative future utility.\n\nWhich categories should generally stay in the agent configuration?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent’s defined tasks."
   },
   {
    "key": "B",
    "text": "Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them."
   },
   {
    "key": "C",
    "text": "Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand-offs."
   },
   {
    "key": "D",
    "text": "All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand-offs.\n\nAgent tools should be limited to capabilities that support defined tasks and regular operational workflows. Required tools enable the agent’s intended work, and frequently used tools that reduce hand-offs improve its routine execution. Occasionally useful unrelated tools and speculative future tools do not justify current access and unnecessarily broaden the available tool set. OpenAI’s API supports constraining a model to a predefined set of allowed tools.\n\n#### Learn more\n\n- OpenAI API Reference — Responses tool configuration",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 65,
  "id": "ccar-p-q003-import-1",
  "type": "single",
  "select": 1,
  "question": "You are adding human review to a high-volume classification pipeline in which reviewing every output is impractical.\n\nWhich sampling strategy best balances throughput and quality oversight?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "No sampling, relying entirely on user complaints to reveal quality and safety problems after they affect users."
   },
   {
    "key": "B",
    "text": "Risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs."
   },
   {
    "key": "C",
    "text": "Inverse sampling that reviews only high-confidence routine outputs and skips low-confidence and high-impact outputs."
   },
   {
    "key": "D",
    "text": "Universal review of every output regardless of confidence or throughput impact."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs.\n\nRisk-stratified sampling directs human review toward outputs with the greatest likelihood or cost of error—low-confidence and high-impact cases—while random sampling of routine high-confidence outputs provides an ongoing check for hidden quality issues. This preserves scalable throughput without abandoning oversight.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 66,
  "id": "ccar-p-q004-import-1",
  "type": "single",
  "select": 1,
  "question": "You operate an interactive assistant where per-turn latency is the primary performance constraint. Quality on routine turns is already acceptable.\n\nWhich configuration change most directly improves latency without disproportionately harming quality?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions."
   },
   {
    "key": "B",
    "text": "Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content."
   },
   {
    "key": "C",
    "text": "Increase retrieval depth to the corpus maximum to improve recall regardless of latency."
   },
   {
    "key": "D",
    "text": "Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.\n\nRetrieving only the top-k passages that historically supply the needed information reduces retrieval work and the prompt context processed on each turn, while preserving routine-answer quality. Caching stable system-prompt content avoids reprocessing an unchanged prefix. Retrieval adds compute and round trips, and preserving cached context improves cache utilization.\n\n#### Learn more\n\n- Retrieval augmented generation (RAG) and indexes in Microsoft Foundry\n\n- OpenAI API Reference — Realtime server events",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 67,
  "id": "ccar-p-q005-import-1",
  "type": "single",
  "select": 1,
  "question": "You are evaluating patterns for a batch document-classification job with fixed stages: extract metadata, classify, summarize, and persist.\n\nWhich pattern is the best fit, and why?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store."
   },
   {
    "key": "B",
    "text": "An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks."
   },
   {
    "key": "C",
    "text": "An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability."
   },
   {
    "key": "D",
    "text": "A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility.\n\nA workflow pattern fits a deterministic batch process whose stages are known in advance. It provides repeatable orchestration and predictable per-request token costs, whereas agentic flexibility and open-ended planning are unnecessary for this fixed sequence.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 68,
  "id": "ccar-p-q006-import-1",
  "type": "multiple",
  "select": 2,
  "question": "A pilot AI assistant for procurement specialists has an 89 percent first-response acceptance rate, but follow-up surveys show that specialists often override the assistant’s vendor recommendations after considering criteria the assistant did not assess. The pilot owner wants to launch the assistant unchanged because of the strong acceptance rate.\n\nWhich two Discernment-competency observations should you raise BEFORE approving the launch? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The acceptance rate alone proves readiness for general production use."
   },
   {
    "key": "B",
    "text": "The survey response rate may not be statistically representative of all specialists."
   },
   {
    "key": "C",
    "text": "The unconsidered criteria represent a scope gap in the assistant’s input space."
   },
   {
    "key": "D",
    "text": "Acceptance does not establish whether recommendations remain correct after specialist review."
   },
   {
    "key": "E",
    "text": "The pilot duration was probably too short to demonstrate reliability across the full year."
   }
  ],
  "correct": [
   "C",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. The unconsidered criteria represent a scope gap in the assistant’s input space.\nD. Acceptance does not establish whether recommendations remain correct after specialist review.\n\nSpecialists’ overrides after considering omitted vendor-selection criteria reveal that the assistant’s evaluated input space is incomplete. A high initial acceptance rate measures early user uptake, not whether recommendations remain correct after the fuller specialist review needed for a procurement decision.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 69,
  "id": "ccar-p-q009-import-1",
  "type": "multiple",
  "select": 2,
  "question": "An engineering organization is rolling out Claude Code across 200 developers. A team lead proposes that AI-generated pull requests bypass the standard code-review process for changes under 50 lines, because small changes are viewed as low risk and review capacity is limited.\n\nWhich two Diligence-competency objections should you raise? Each correct answer presents part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Removing review eliminates the verification mechanism required for AI-generated output across the workflow."
   },
   {
    "key": "B",
    "text": "Code-review capacity should be expanded to handle every code change submitted across the team."
   },
   {
    "key": "C",
    "text": "The threshold should be increased to 200 lines to capture more changes."
   },
   {
    "key": "D",
    "text": "AI-generated pull requests should be rejected by default across the organization."
   },
   {
    "key": "E",
    "text": "Line count is a poor proxy for the actual risk introduced by a code change."
   }
  ],
  "correct": [
   "A",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Removing review eliminates the verification mechanism required for AI-generated output across the workflow.\nE. Line count is a poor proxy for the actual risk introduced by a code change.\n\nAI-generated changes still require verification before integration; Anthropic’s security guidance assigns users responsibility for reviewing proposed code and advises reviewing all suggested changes before approval. Line count does not represent the security, correctness, authorization, configuration, dependency, or operational impact of a change, so it cannot safely determine whether review may be bypassed. Automated review can supplement, but does not replace, existing manual code-review and security practices.\n\n#### Learn more\n\n- Claude Code Security\n\n- Automated Security Reviews in Claude Code",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 70,
  "id": "ccar-p-q010-import-1",
  "type": "multiple",
  "select": 2,
  "question": "You are choosing a model for a new production workload and must complete the upstream steps before empirically testing candidate models.\n\nWhich two steps must be completed BEFORE testing a representative sample on a candidate model? Each correct answer is part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Select the lightest model that consistently meets the quality bar across the sample."
   },
   {
    "key": "B",
    "text": "Retest the model choice when a new model version becomes available."
   },
   {
    "key": "C",
    "text": "Choose a candidate model based on the requirements profile and known capabilities."
   },
   {
    "key": "D",
    "text": "Define the quality bar, latency tolerance, and expected volume for the workload."
   },
   {
    "key": "E",
    "text": "Sign off the production rollout plan with the platform and security teams."
   }
  ],
  "correct": [
   "C",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Choose a candidate model based on the requirements profile and known capabilities.\nD. Define the quality bar, latency tolerance, and expected volume for the workload.\n\nA candidate model should be selected using the workload’s defined requirements—required output quality, latency tolerance, and expected volume—together with known model capabilities. A representative evaluation is performed after those criteria and an initial candidate are established. Selecting the lightest model that passes the evaluation, retesting new versions, and obtaining rollout approval are subsequent activities.\n\n#### Learn more\n\n- Model selection | OpenAI API\n\n- API deployment checklist | OpenAI API",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 71,
  "id": "ccar-p-q012-import-1",
  "type": "multiple",
  "select": 3,
  "question": "You are evaluating model-selection claims used by a peer team.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input."
   },
   {
    "key": "B",
    "text": "A representative-sample evaluation on the target workload is the right basis for confirming a model selection."
   },
   {
    "key": "C",
    "text": "The most capable model is always the right choice regardless of the workload profile."
   },
   {
    "key": "D",
    "text": "Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability."
   },
   {
    "key": "E",
    "text": "Selecting a model based on which version was most recently announced is the right basis for production decisions."
   }
  ],
  "correct": [
   "A",
   "B",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)\n\nCorrect answers from the source:\nHeavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input. — Yes\nA representative-sample evaluation on the target workload is the right basis for confirming a model selection. — Yes\nThe most capable model is always the right choice regardless of the workload profile. — No\nTiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability. — Yes\nSelecting a model based on which version was most recently announced is the right basis for production decisions. — No\n\nHigher reasoning effort trades increased latency and token use for deeper reasoning, so it can consume more rate-limit capacity. Model selection should be confirmed through evaluations that represent the production workload and its quality, latency, and cost requirements. The most capable model is not invariably appropriate: smaller models can be better for cost-sensitive or latency-sensitive routine work. Tiered routing appropriately directs simple requests to a lighter model and reserves a stronger model for complex requests. Announcement recency does not establish production suitability; measured performance on the target workload does.\n\n#### Learn more\n\n- Model guidance\n\n- Models",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 72,
  "id": "ccar-p-q013-import-1",
  "type": "multiple",
  "select": 2,
  "question": "You are assessing instrumentation in a multi-agent system.\n\nWhich two findings represent valid observability gaps in the instrumentation? Each correct answer provides a complete solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Trace spans for each agent step are exported to the shared distributed-tracing backend."
   },
   {
    "key": "B",
    "text": "Latency and token usage on every span are emitted to the central metrics pipeline."
   },
   {
    "key": "C",
    "text": "Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields."
   },
   {
    "key": "D",
    "text": "Model identity and version on each turn are not recorded with the turn artifacts."
   },
   {
    "key": "E",
    "text": "Request-scoped correlation identifiers do not propagate across agent and tool calls."
   }
  ],
  "correct": [
   "D",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nD. Model identity and version on each turn are not recorded with the turn artifacts.\nE. Request-scoped correlation identifiers do not propagate across agent and tool calls.\n\nModel identity and version must be captured with each turn so behavior, latency, token usage, failures, and regressions can be attributed to the specific model configuration. Request-scoped correlation identifiers must propagate across agent and tool calls so their spans and telemetry remain connected within one distributed trace. OpenTelemetry defines GenAI model attributes and explains that context propagation enables correlation across distributed service boundaries.\n\n#### Learn more\n\n- OpenTelemetry GenAI attributes\n\n- OpenTelemetry context propagation",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 73,
  "id": "ccar-p-q014-import-1",
  "type": "single",
  "select": 1,
  "question": "An engineer accidentally commits an API key to the repository by placing it in .claude/settings.json.\n\nWhich configuration design principle was breached?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Project-scope configuration should always override user-scope configuration."
   },
   {
    "key": "B",
    "text": "Managed configuration must be applied before project-scope configuration is read."
   },
   {
    "key": "C",
    "text": "Credentials must be resolved at runtime from a secret store and never stored in version-controlled files."
   },
   {
    "key": "D",
    "text": "MCP server definitions must reside in environment variables to prevent scope conflicts."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.\n\nAPI keys are credentials and must not be committed to version-controlled configuration files, where repository access and history can expose them. They should be supplied securely at runtime, such as through a secret store or protected environment-based mechanism. Anthropic documents using a key helper that retrieves a key from a Vault secret for dynamic credentials.\n\n#### Learn more\n\n- LLM gateway configuration — Anthropic",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 74,
  "id": "ccar-p-q017-import-1",
  "type": "multiple",
  "select": 3,
  "question": "You are classifying chunking strategies by the corpus type to which each is best suited.\n\nFor each chunking strategy, select the applicable corpus type: “Long Structured Documents,” “Heterogeneous Short Records,” or “Code or Hierarchical Specs.”",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Long Structured Documents"
   },
   {
    "key": "B",
    "text": "Heterogeneous Short Records"
   },
   {
    "key": "C",
    "text": "Code or Hierarchical Specs"
   }
  ],
  "correct": [
   "C",
   "B",
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: ghép cặp — đáp án: function-level or section-level chunking for code modules → Code or Hierarchical Specs; tree-aware chunking that follows code or specification hierarchy → Code or Hierarchical Specs; per-record chunking where each record is one chunk → Heterogeneous Short Records; semantic chunking along clause or paragraph boundaries → Long Structured Documents; fixed-size chunking with overlap for short records of similar length → Heterogeneous Short Records; hierarchical chunking that mirrors document section structure → Long Structured Documents)\n\nCorrect answers from the source:\nfunction-level or section-level chunking for code modules — Code or Hierarchical Specs\ntree-aware chunking that follows code or specification hierarchy — Code or Hierarchical Specs\nper-record chunking where each record is one chunk — Heterogeneous Short Records\nsemantic chunking along clause or paragraph boundaries — Long Structured Documents\nfixed-size chunking with overlap for short records of similar length — Heterogeneous Short Records\nhierarchical chunking that mirrors document section structure — Long Structured Documents\n\nFunction-level and tree-aware boundaries preserve the logical hierarchy of source code and specifications. Per-record and fixed-size overlapping chunks suit short, independently meaningful records. Semantic paragraph/clause boundaries and document-section hierarchies preserve the context and structure of long documents.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 75,
  "id": "ccar-p-q018-import-1",
  "type": "single",
  "select": 1,
  "question": "You are choosing a pattern for a compliance Q&A assistant that must respond to policy questions with citations from the authoritative internal source set. Latency, cost, and audit predictability are priorities.\n\nWhich pattern is the best fit?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer."
   },
   {
    "key": "B",
    "text": "Multi-agent orchestration with a planner, researcher, and writer agent for every query."
   },
   {
    "key": "C",
    "text": "A pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus."
   },
   {
    "key": "D",
    "text": "A static prompt with the entire policy corpus concatenated into every request."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer.\n\nRetrieval-augmented generation retrieves relevant material from the indexed authoritative policy corpus for each response, enabling source-grounded citations and predictable auditability. It is typically more efficient and controlled than multi-agent orchestration, unrestricted web retrieval, or including the entire corpus in every prompt.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 76,
  "id": "ccar-p-q020-import-1",
  "type": "multiple",
  "select": 2,
  "question": "For each statement, select Yes if it reflects a sound architectural practice. Otherwise, select No.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Authentication and authorization run before retrieval so retrieval can filter by identity."
   },
   {
    "key": "B",
    "text": "An asynchronous queue absorbs bursty traffic between intake and the model invocation layer."
   },
   {
    "key": "C",
    "text": "Tax computation is encoded directly in the system prompt rather than in code."
   },
   {
    "key": "D",
    "text": "Conversation logs include unredacted government identifiers to maximize signal for tuning."
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)\n\nCorrect answers from the source:\nAuthentication and authorization run before retrieval so retrieval can filter by identity. — Yes\nAn asynchronous queue absorbs bursty traffic between intake and the model invocation layer. — Yes\nTax computation is encoded directly in the system prompt rather than in code. — No\nConversation logs include unredacted government identifiers to maximize signal for tuning. — No\n\nAuthorization before retrieval enables identity-based access filtering. Queues smooth burst traffic and decouple request intake from asynchronous model processing. Tax calculations require deterministic, testable application logic rather than prompt behavior. Government identifiers are sensitive PII, so logs should redact or mask them and restrict their use.\n\n#### Learn more\n\n- AWS Well-Architected Framework — Fail fast and limit queues\n\n- Amazon Bedrock — Remove PII from conversations by using sensitive information filters",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 77,
  "id": "ccar-p-q021-import-1",
  "type": "multiple",
  "select": 2,
  "question": "You are building an evaluation pipeline for a Claude-based deployment and must finish the specification steps before running the deployment against the dataset.\n\nWhich two steps must be completed BEFORE running the deployment against the evaluation dataset? Each correct answer represents part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Publish the aggregated metrics to a dashboard and gate releases on threshold checks."
   },
   {
    "key": "B",
    "text": "Curate and label the evaluation dataset to match the defined slices."
   },
   {
    "key": "C",
    "text": "Review failure cases with subject matter experts to refine the scoring rubric."
   },
   {
    "key": "D",
    "text": "Define the metrics and slices the framework will report across representative, edge, and adversarial cases."
   },
   {
    "key": "E",
    "text": "Score the deployment outputs against the reference labels and aggregate the metrics."
   }
  ],
  "correct": [
   "B",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Curate and label the evaluation dataset to match the defined slices.\nD. Define the metrics and slices the framework will report across representative, edge, and adversarial cases.\n\nEvaluation requires predefined, measurable success criteria and an evaluation set that reflects the intended task distribution, including edge cases. Metrics and slices establish what will be measured, while curated reference labels enable the resulting outputs to be scored. Aggregating scores, reviewing failures, and publishing dashboard results occur after the deployment has been run on that dataset.\n\n#### Learn more\n\n- Define success criteria and build evaluations — Claude Platform Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 78,
  "id": "ccar-p-q023-import-1",
  "type": "multiple",
  "select": 2,
  "question": "An architect is assessing a Claude-based candidate-screening tool before deployment. A stakeholder claims that no bias evaluation is needed because the model was not trained on company data.\n\nWhich two responses most accurately dispute this claim? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation."
   },
   {
    "key": "B",
    "text": "Fairness testing is required only when the training dataset is known to contain protected-class labels."
   },
   {
    "key": "C",
    "text": "The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning."
   },
   {
    "key": "D",
    "text": "The system should be evaluated on outcome-disparity metrics across protected groups before deployment."
   },
   {
    "key": "E",
    "text": "Bias evaluation is unnecessary when the model provider has published a responsible-use policy."
   }
  ],
  "correct": [
   "C",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.\nD. The system should be evaluated on outcome-disparity metrics across protected groups before deployment.\n\nA model can retain demographic biases from its broad pretraining even when it has not been trained on an organization’s data. For an employment-screening use case, fairness evaluation should measure whether outcomes differ across protected groups before deployment. NIST guidance calls for evaluating fairness and bias and using context-specific metrics to assess performance and harms across groups.\n\n#### Learn more\n\n- NIST AI RMF Core — Measure\n\n- NIST AI RMF Playbook — Measure",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 79,
  "id": "ccar-p-q024-import-1",
  "type": "multiple",
  "select": 3,
  "question": "You are ordering decomposed components in an invoice-processing pipeline.\n\nFor every decomposed component, choose the execution layer to which it belongs: “Pre-Processing”, “Model Stage”, or “Post-Processing”.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Pre-Processing"
   },
   {
    "key": "B",
    "text": "Model Stage"
   },
   {
    "key": "C",
    "text": "Post-Processing"
   }
  ],
  "correct": [
   "B",
   "C",
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: ghép cặp — đáp án: Claude-based classification of invoice type → Model Stage; persistence of validated records to the system of record → Post-Processing; schema validation of the extracted fields → Post-Processing; Claude-based extraction of structured invoice fields → Model Stage; PII redaction on extracted text prior to model invocation → Pre-Processing; optical character recognition on scanned invoice images → Pre-Processing)\n\nCorrect answers from the source:\nClaude-based classification of invoice type — Model Stage\npersistence of validated records to the system of record — Post-Processing\nschema validation of the extracted fields — Post-Processing\nClaude-based extraction of structured invoice fields — Model Stage\nPII redaction on extracted text prior to model invocation — Pre-Processing\noptical character recognition on scanned invoice images — Pre-Processing\n\nPre-processing prepares invoice inputs for inference, including OCR and redacting sensitive text before model invocation. The model stage performs the Claude classification and structured-data extraction. Post-processing validates extracted output against its schema and persists only validated records to the system of record.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 80,
  "id": "ccar-p-q025-import-1",
  "type": "single",
  "select": 1,
  "question": "You are creating a prompt for a ticket-triage classifier with thirty clearly defined categories and clear descriptions of each category in the prompt.\n\nWhich technique is the most appropriate starting point?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A chain-of-thought prompt for a routing decision that does not require multi-step reasoning."
   },
   {
    "key": "B",
    "text": "A zero-shot prompt that specifies the categories with their descriptions and the required output format."
   },
   {
    "key": "C",
    "text": "A prompt that demands the model invent new categories when the supplied ones do not fit."
   },
   {
    "key": "D",
    "text": "A prompt with no category descriptions, expecting the model to infer the category set."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. A zero-shot prompt that specifies the categories with their descriptions and the required output format.\n\nFor classification against a fixed taxonomy, a zero-shot prompt should state the allowed categories, define them clearly, and specify the required response format. This grounds the model in the intended label set and produces consistent, machine-readable routing decisions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 81,
  "id": "ccar-p-q029-import-1",
  "type": "single",
  "select": 1,
  "question": "A platform team runs a self-hosted, multi-agent system on Kubernetes that coordinates seven specialized agents for invoice processing. The team uses approximately 40 percent of its engineering capacity for infrastructure maintenance, message-bus reliability, and agent-state recovery. The CFO has asked for an evaluation of a move to managed agent infrastructure to recover engineering capacity. The security officer requires all customer financial data to stay within an approved network boundary.\n\nWhich factor should carry the greatest weight in your recommendation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Whether the current seven agents map cleanly to the patterns supported by managed agents."
   },
   {
    "key": "B",
    "text": "Whether managed agents reduce per-invoice token costs across the existing processing volume."
   },
   {
    "key": "C",
    "text": "Whether managed agents support the current bus topology used by the platform team."
   },
   {
    "key": "D",
    "text": "Whether managed agent data handling satisfies the network boundary required by security."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Whether managed agent data handling satisfies the network boundary required by security.\n\nCompliance with the approved network boundary for customer financial data is a mandatory security constraint. Operational benefits such as reduced maintenance effort, lower token costs, or architectural compatibility cannot justify adopting a managed service that fails to meet that data-handling requirement.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 82,
  "id": "ccar-p-q030-import-1",
  "type": "single",
  "select": 1,
  "question": "You are determining where human review must remain in a proposed automated pipeline.\n\nWhich placement represents sound human-in-the-loop design?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate."
   },
   {
    "key": "B",
    "text": "Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval."
   },
   {
    "key": "C",
    "text": "Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review."
   },
   {
    "key": "D",
    "text": "Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.\n\nHuman review should occur after the model produces its output but before any high-impact, irreversible action, and reviewers need explicit approval criteria. This preserves meaningful oversight and enables intervention before harm or irreversible consequences occur.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 83,
  "id": "ccar-p-q032-import-1",
  "type": "multiple",
  "select": 2,
  "question": "A Claude-based research assistant starts generating responses that confidently contradict its retrieved source documents, even though the retrieval pipeline has not changed.\n\nWhich two diagnostic actions most directly identify the root cause of this behavior? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase the context-window size to allow more retrieved chunks per query."
   },
   {
    "key": "B",
    "text": "Switch the retrieval index to a denser embedding model to improve chunk-relevance scores."
   },
   {
    "key": "C",
    "text": "Determine whether the failure reproduces on the previous model version to test for a model mismatch."
   },
   {
    "key": "D",
    "text": "Reduce the temperature setting to lower response variance across all query types."
   },
   {
    "key": "E",
    "text": "Inspect the system-prompt grounding instructions to determine whether citation constraints remain intact."
   }
  ],
  "correct": [
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Determine whether the failure reproduces on the previous model version to test for a model mismatch.\nE. Inspect the system-prompt grounding instructions to determine whether citation constraints remain intact.\n\nReproducing the behavior with the previous model version can isolate a model-version or model-routing mismatch when retrieval has remained unchanged. Reviewing the system prompt verifies that the instructions requiring answers to be grounded in retrieved content and constrained by citations have not been removed or weakened. Claude model updates can change instruction-following behavior, so Anthropic recommends testing applications when changing models.\n\n#### Learn more\n\n- Prompting best practices — Claude Platform Docs\n\n- Model deprecations — Claude Platform Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 84,
  "id": "ccar-p-q033-import-1",
  "type": "multiple",
  "select": 3,
  "question": "You are assessing prompting claims in a peer’s design document.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt."
   },
   {
    "key": "B",
    "text": "Adding a few-shot example set with exact field names anchors output formatting on extraction tasks."
   },
   {
    "key": "C",
    "text": "Chain-of-thought should be the default on every task regardless of complexity."
   },
   {
    "key": "D",
    "text": "Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria."
   },
   {
    "key": "E",
    "text": "Behavioral differences across model versions can be ignored once a prompt has been validated on one version."
   }
  ],
  "correct": [
   "A",
   "B",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)\n\nCorrect answers from the source:\nZero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt. — Yes\nAdding a few-shot example set with exact field names anchors output formatting on extraction tasks. — Yes\nChain-of-thought should be the default on every task regardless of complexity. — No\nLeading-question framing is best mitigated by asking for an even-handed comparison with stated criteria. — Yes\nBehavioral differences across model versions can be ignored once a prompt has been validated on one version. — No\n\nZero-shot classification works when labels and their definitions are clearly specified. Few-shot examples with exact schema fields reinforce the desired extraction format. Chain-of-thought should be applied only when useful for the task, not as a blanket default. Neutral comparisons with explicit criteria counter leading framing. Model behavior can vary by version, so prompts require validation after version changes.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 85,
  "id": "ccar-p-q036-import-1",
  "type": "multiple",
  "select": 3,
  "question": "You are assessing retrieval-strategy claims used by a peer team.\n\nFor each claim, select Yes when it is generally accurate; otherwise, select No.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text."
   },
   {
    "key": "B",
    "text": "Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone."
   },
   {
    "key": "C",
    "text": "Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes."
   },
   {
    "key": "D",
    "text": "Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics."
   },
   {
    "key": "E",
    "text": "Random sampling of a data store is a sound retrieval strategy for production Q&A."
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)\n\nCorrect answers from the source:\nDense vector retrieval is well suited to recovering paraphrased intent against unstructured text. — Yes\nSparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone. — Yes\nStructured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes. — Yes\nHybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics. — No\nRandom sampling of a data store is a sound retrieval strategy for production Q&A. — No\n\nDense vector search captures semantic similarity, which supports paraphrase retrieval. Sparse lexical retrieval is strongest for exact strings, identifiers, and rare terms. Relational queries and indexes support deterministic filtering and aggregation. Hybrid retrieval combines sparse and dense approaches, giving it different retrieval and recall behavior from dense-only search. Random sampling provides no relevance guarantee, so it is not suitable for production question-answering retrieval.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 86,
  "id": "ccar-p-q038-import-1",
  "type": "multiple",
  "select": 3,
  "question": "You are a solution architect evaluating candidate use cases for a Claude-based program.\n\nFor each scenario, select Yes if Claude is appropriate as the primary solution at the architectural level. Otherwise, select No.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "drafting first-pass investigative reports from semi-structured incident logs for analyst review"
   },
   {
    "key": "B",
    "text": "computing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline"
   },
   {
    "key": "C",
    "text": "long-context contract review with structured clause extraction and deviation flagging"
   },
   {
    "key": "D",
    "text": "replacing a vector index for semantic retrieval over a multi-million-document corpus"
   },
   {
    "key": "E",
    "text": "routing inbound support tickets into 30 categories with reasoning for the chosen routing"
   }
  ],
  "correct": [
   "A",
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)\n\nCorrect answers from the source:\ndrafting first-pass investigative reports from semi-structured incident logs for analyst review — Yes\ncomputing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline — No\nlong-context contract review with structured clause extraction and deviation flagging — Yes\nreplacing a vector index for semantic retrieval over a multi-million-document corpus — No\nrouting inbound support tickets into 30 categories with reasoning for the chosen routing — Yes\n\nClaude is well suited to drafting reports from semi-structured text, reviewing long documents, extracting structured clauses, identifying deviations, classifying support tickets, and explaining classifications. A sub-50-ms streaming fraud decision needs predictable, low-latency specialized scoring rather than an LLM as its primary solution. Semantic retrieval across millions of documents requires a vector index or comparable retrieval system; Claude can use retrieved results but does not replace that index.\n\n#### Learn more\n\n- Anthropic: Prompting best practices\n\n- Anthropic: Introduction to Claude",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 87,
  "id": "ccar-p-q039-import-1",
  "type": "multiple",
  "select": 2,
  "question": "You are assembling factors that should guide the selection among Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff.\n\nWhich two factors should be included on the list? Each correct answer provides a complete solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Whether the vendor publishes detailed reference documentation for each candidate protocol."
   },
   {
    "key": "B",
    "text": "Whether the team has prior implementation experience with any of the candidate protocols."
   },
   {
    "key": "C",
    "text": "Whether the underlying transport supports encryption in transit between the integrated services."
   },
   {
    "key": "D",
    "text": "Whether the integration must be portable across multiple AI clients in the ecosystem."
   },
   {
    "key": "E",
    "text": "Whether the interaction is stateless and latency-sensitive or stateful and longer-running."
   }
  ],
  "correct": [
   "D",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nD. Whether the integration must be portable across multiple AI clients in the ecosystem.\nE. Whether the interaction is stateless and latency-sensitive or stateful and longer-running.\n\nPortability across multiple AI clients favors MCP because it provides a standardized client-server protocol that compatible hosts can use. Interaction lifecycle also determines the integration approach: direct APIs suit simple, low-latency request-response operations, while agent handoffs transfer control and preserve context for longer-running, stateful work between specialized agents.\n\n#### Learn more\n\n- MCP TypeScript SDK\n\n- Running agents",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 88,
  "id": "ccar-p-q040-import-1",
  "type": "single",
  "select": 1,
  "question": "You are choosing a protocol for one low-latency, stateless tool call from a Claude-based assistant to an internal pricing service that already offers a stable HTTP API.\n\nWhich integration mechanism is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A direct API call to the existing endpoint with the appropriate scoped credentials."
   },
   {
    "key": "B",
    "text": "A long-lived stateful session protocol for a stateless single-call interaction."
   },
   {
    "key": "C",
    "text": "A bespoke streaming protocol layered over an unrelated asynchronous message bus."
   },
   {
    "key": "D",
    "text": "An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. A direct API call to the existing endpoint with the appropriate scoped credentials.\n\nA direct call to the existing HTTP endpoint is the simplest and lowest-latency integration for a single stateless operation. Scoped credentials enforce least-privilege access, while a persistent session protocol, custom streaming layer, or intervening agent adds complexity and latency without serving a stated requirement. Claude supports client-side tool use, in which the application executes the tool call and returns its result.\n\n#### Learn more\n\n- Anthropic: Tool use overview",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 89,
  "id": "ccar-p-q041-import-1",
  "type": "multiple",
  "select": 2,
  "question": "You are assessing an integration specification for security weaknesses.\n\nWhich two findings represent valid security gaps in the specification? Each correct answer provides a complete solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Tool calls execute server-side under a least-privilege service principal scoped to the requested action."
   },
   {
    "key": "B",
    "text": "Service credentials are placed in the prompt context, where they can leak into logs and traces."
   },
   {
    "key": "C",
    "text": "Role-based access control is enforced only at the response-rendering layer after the model accesses restricted data."
   },
   {
    "key": "D",
    "text": "Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session."
   },
   {
    "key": "E",
    "text": "Tool inputs and outputs are encrypted in transit using transport-layer security between services."
   }
  ],
  "correct": [
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Service credentials are placed in the prompt context, where they can leak into logs and traces.\nC. Role-based access control is enforced only at the response-rendering layer after the model accesses restricted data.\n\nService credentials must not be included in prompt context because they can be exposed through logging and tracing. Authorization must be enforced before a model or tool accesses restricted data; response-layer-only RBAC allows unauthorized access to occur before rendering is blocked.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 90,
  "id": "ccar-p-q042-import-1",
  "type": "multiple",
  "select": 2,
  "question": "The platform team at Trenova Systems, Inc. must lower per-query cost and p95 latency for a high-volume Claude pipeline without reducing output quality for the core use case.\n\nWhich two optimizations directly address both cost and latency at the same time? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls."
   },
   {
    "key": "B",
    "text": "Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases."
   },
   {
    "key": "C",
    "text": "Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls."
   },
   {
    "key": "D",
    "text": "Add a retrieval step that fetches the full source corpus into the context window before generation."
   },
   {
    "key": "E",
    "text": "Expand the system prompt to include additional few-shot examples on every request."
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.\nB. Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.\n\nPrompt caching lets repeated calls reuse a static system-prompt prefix, so cached input is billed at a lower rate and avoids reprocessing that prefix. Routing straightforward requests to a smaller, faster model lowers inference cost and response time, while reserving the larger model for complex requests preserves quality where it matters. Increasing output limits, retrieving an entire corpus, or expanding every prompt adds processing or tokens rather than directly reducing both metrics.\n\n#### Learn more\n\n- Anthropic Claude API pricing",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 91,
  "id": "ccar-p-q045-import-1",
  "type": "single",
  "select": 1,
  "question": "A healthcare organization is assessing two Claude-powered AI architectures for a clinical-documentation assistant. Architecture X delivers higher output-quality scores, but costs $0.18 per documentation session and averages 4.2 seconds per response. Architecture Y scores slightly lower on quality metrics, but costs $0.09 per session and averages 2.1 seconds per response. The stated SLA requires responses in under 3 seconds, and the projected annual volume is 2 million documentation sessions.\n\nWhich evaluation approach properly applies business-value pillar analysis to this decision?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments."
   },
   {
    "key": "B",
    "text": "Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment."
   },
   {
    "key": "C",
    "text": "Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity."
   },
   {
    "key": "D",
    "text": "Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.\n\nA mandatory latency SLA is a feasibility constraint: Architecture X's 4.2-second average does not meet the under-3-second requirement, whereas Architecture Y's 2.1-second average does. At 2 million sessions, the annual spend is $360,000 for X and $180,000 for Y, yielding a $180,000 annual difference. The remaining decision is whether Y's quality reduction materially reduces clinical-workflow productivity enough to outweigh its compliant performance and lower cost. AWS guidance similarly calls for discarding options that do not meet workload requirements, then selecting and testing the options that satisfy latency, throughput, and response-quality requirements while evaluating their cost-performance trade-offs.\n\n#### Learn more\n\n- AWS Generative AI Lens: Balance cost and performance when selecting inference paradigms\n\n- AWS Generative AI Lens: Model selection and cost optimization",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 92,
  "id": "ccar-p-q046-import-1",
  "type": "single",
  "select": 1,
  "question": "You are troubleshooting a Claude Code session in which its subagent uses 50,000 context tokens before the engineer types even a single message.\n\nWhich root cause is most likely?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The developer's keyboard layout or input-method configuration is the cause of the elevated context consumption, introducing extra tokens before the engineer types any message."
   },
   {
    "key": "B",
    "text": "Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront."
   },
   {
    "key": "C",
    "text": "The model has internal personal preferences or default behaviors that silently consume large portions of context budget before any user message is processed, independent of tool configuration."
   },
   {
    "key": "D",
    "text": "The font rendering or display-scaling settings of the IDE are converting visual output into additional context tokens, causing the high pre-session context consumption."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront.\n\nWhen Tool Search is disabled, Claude Code loads all configured MCP tool definitions into the context window at startup. A large collection of MCP servers can therefore consume tens of thousands of tokens before any engineer message is entered.\n\n#### Learn more\n\n- Connect Claude Code to tools via MCP\n\n- Tool search tool",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 93,
  "id": "ccar-p-q047-import-1",
  "type": "single",
  "select": 1,
  "question": "You are assisting an engineer whose newly added MCP server is not appearing in their Claude Code session.\n\nWhich diagnostic step should be attempted first?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered."
   },
   {
    "key": "B",
    "text": "Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue."
   },
   {
    "key": "C",
    "text": "Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect."
   },
   {
    "key": "D",
    "text": "Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.\n\nclaude mcp list confirms whether an MCP server is configured and reports its health status, such as connected, authentication required, or failed to connect. This establishes whether the issue is registration or session connectivity before taking disruptive action; reconnecting the session can refresh the active MCP state when necessary.\n\n#### Learn more\n\n- Connect Claude Code to tools via MCP",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 94,
  "id": "ccar-p-q048-import-1",
  "type": "multiple",
  "select": 2,
  "question": "You are identifying characteristics of strong architectural-decision communication.\n\nWhich two characteristics should be included on the list? Each correct answer represents a complete solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Ownership and review cadence for revisiting the decision when conditions or assumptions change."
   },
   {
    "key": "B",
    "text": "Distribution to a standing review forum with mandatory attendance from senior engineering leaders."
   },
   {
    "key": "C",
    "text": "Omission of rejected alternatives to keep the decision document focused and concise for readers."
   },
   {
    "key": "D",
    "text": "Alternatives considered along with the criteria that were used to evaluate each alternative."
   },
   {
    "key": "E",
    "text": "Use of a consistent template across the team to standardize the visual presentation of decisions."
   }
  ],
  "correct": [
   "A",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Ownership and review cadence for revisiting the decision when conditions or assumptions change.\nD. Alternatives considered along with the criteria that were used to evaluate each alternative.\n\nStrong architectural decision records communicate both accountability and rationale. Ownership with a review cadence keeps a decision maintainable as its assumptions or conditions change, while documenting considered alternatives and their evaluation criteria makes the trade-offs and justification understandable to current and future stakeholders. Official ADR guidance calls for ownership and for recording the context, including possible solutions considered and the decision’s consequences.\n\n#### Learn more\n\n- Architectural decision record process - AWS Prescriptive Guidance\n\n- FAQ about architectural decision records - AWS Prescriptive Guidance",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 95,
  "id": "ccar-p-q050-import-1",
  "type": "multiple",
  "select": 2,
  "question": "An architect reviews a set of architecture-documentation packages before transferring a Claude-based pipeline to an implementation team.\n\nWhich two characteristics show that a documentation package is sufficient to enable implementation without continued involvement from the architect? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component."
   },
   {
    "key": "B",
    "text": "The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected."
   },
   {
    "key": "C",
    "text": "The document provides a high-level narrative description of the business problem without component-level detail."
   },
   {
    "key": "D",
    "text": "The document includes the architect’s contact information for questions arising during implementation."
   },
   {
    "key": "E",
    "text": "The document lists all Claude models that were evaluated but does not specify which was selected or why."
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.\nB. The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.\n\nImplementation teams need explicit integration contracts, configuration schemas, and expected input/output shapes to build and connect components correctly. A decision log also preserves the rationale for key architectural choices and rejected alternatives, allowing the team to apply the intended trade-offs without relying on the architect.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 96,
  "id": "ccar-p-q051-import-1",
  "type": "multiple",
  "select": 2,
  "question": "The engineering lead at Trenova Systems, Inc. is assessing two proposals to improve developer workflows with Claude-assisted tooling. Proposal A integrates Claude Code into the IDE for inline code generation and review. Proposal B sends all code-generation requests through a shared Slack bot with no IDE integration.\n\nWhich two observations most accurately assess these proposals against workflow-improvement objectives? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Proposal B is superior because centralizing requests in Slack creates an auditable log of all code-generation activity."
   },
   {
    "key": "B",
    "text": "Proposal B introduces workflow friction by requiring developers to leave the IDE, undermining the productivity objective."
   },
   {
    "key": "C",
    "text": "Proposal A reduces context switching by providing AI assistance at the point of development without requiring a separate tool."
   },
   {
    "key": "D",
    "text": "Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue."
   },
   {
    "key": "E",
    "text": "Both proposals are equivalent because the model capabilities are identical regardless of the integration point."
   }
  ],
  "correct": [
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Proposal B introduces workflow friction by requiring developers to leave the IDE, undermining the productivity objective.\nC. Proposal A reduces context switching by providing AI assistance at the point of development without requiring a separate tool.\n\nAI assistance integrated directly into the IDE reduces context switching and supports code generation and review at the point where development work occurs. Requiring developers to submit requests through Slack takes them out of that environment and adds workflow friction, which undermines the productivity objective.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 97,
  "id": "ccar-p-q052-import-1",
  "type": "single",
  "select": 1,
  "question": "You are reviewing a peer’s draft architecture decision record (ADR). The ADR records the decision and technical details but omits the alternatives considered and the trade-offs accepted.\n\nWhich response is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Delete the ADR entirely and rely on the engineering team’s collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding."
   },
   {
    "key": "B",
    "text": "Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR."
   },
   {
    "key": "C",
    "text": "Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it."
   },
   {
    "key": "D",
    "text": "Replace the ADR with a different decision unrelated to the one drafted."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.\n\nAn ADR should document not only the decision, but also the alternatives evaluated and the consequences or trade-offs accepted. This preserves the rationale needed for future review, maintenance, audits, and onboarding.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 98,
  "id": "ccar-p-q053-import-1",
  "type": "multiple",
  "select": 2,
  "question": "A Claude architect is setting up a shared Claude Code environment for a 12-person development team.\n\nWhich two configuration choices most directly create a consistent, secure team environment? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Commit shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository."
   },
   {
    "key": "B",
    "text": "Apply managed configuration to enforce non-overridable security and compliance policies across all team members."
   },
   {
    "key": "C",
    "text": "Set editor theme and display preferences at the project scope so they are uniform across workstations."
   },
   {
    "key": "D",
    "text": "Instruct each engineer to configure their preferred Claude model in personal user-scope settings."
   },
   {
    "key": "E",
    "text": "Store the team’s shared API key in the project-scope settings.json so all engineers use the same credential."
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Commit shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository.\nB. Apply managed configuration to enforce non-overridable security and compliance policies across all team members.\n\nProject-scoped configuration can be committed with the repository so all contributors receive the same MCP server definitions and tool-permission baseline. Managed configuration takes precedence over user and project settings and cannot be overridden, enabling organization-wide enforcement of security and compliance policies. Credentials should be kept out of committed project settings and supplied through secure credential mechanisms or environment variables.\n\n#### Learn more\n\n- Connect Claude Code to tools via MCP\n\n- Identity and access management for Claude Code",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 99,
  "id": "ccar-p-q056",
  "type": "single",
  "select": 1,
  "question": "A team manager needs every engineer working in the same repository to use identical MCP server definitions, without manually keeping them in sync.\n\nWhich configuration approach meets this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "managed configuration pushed to all endpoints by the administrator"
   },
   {
    "key": "B",
    "text": "environment variables set at the operating-system level on each workstation"
   },
   {
    "key": "C",
    "text": "project-scope .claude/settings.json and .mcp.json files committed to the repository"
   },
   {
    "key": "D",
    "text": "each engineer maintains a personal ~/.claude/settings.json with the shared definitions"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. project-scope .claude/settings.json and .mcp.json files committed to the repository\n\nProject-scope MCP servers are stored in the repository’s .mcp.json and are designed to be committed to version control, allowing all project contributors to share the same MCP server definitions. A committed project settings file can accompany that shared repository configuration.\n\n#### Learn more\n\n- Anthropic Claude Code: Connect to tools through MCP",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 100,
  "id": "ccar-p-q057-import-1",
  "type": "multiple",
  "select": 2,
  "question": "An architect at Trenova Systems, Inc. is evaluating two draft communication packages for the same architectural decision. Package 1 includes a threat model, residual-risk register, and control-mapping table. Package 2 includes a list of delivered capabilities and feature-level roadmap dependencies.\n\nWhich two audiences are correctly matched to these packages? (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Package 1 engineering implementation team"
   },
   {
    "key": "B",
    "text": "Package 2 executive sponsor"
   },
   {
    "key": "C",
    "text": "Package 1 security and compliance reviewer"
   },
   {
    "key": "D",
    "text": "Package 2 product manager owning the roadmap"
   },
   {
    "key": "E",
    "text": "Package 2 security and compliance reviewer"
   }
  ],
  "correct": [
   "C",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nC. Package 1 security and compliance reviewer\nD. Package 2 product manager owning the roadmap\n\nA threat model, residual-risk register, and control-mapping table support security assurance, risk acceptance, and compliance evaluation, so Package 1 is suited to a security and compliance reviewer. Delivered capabilities and feature-level roadmap dependencies support product planning and prioritization, so Package 2 is suited to the product manager who owns the roadmap.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 101,
  "id": "ccar-p-q061-import-1",
  "type": "multiple",
  "select": 2,
  "question": "You are establishing a feedback-and-alignment routine for a deployment with multiple stakeholders.\n\nWhich two practices should be included in the routine? Each correct answer provides a complete solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Record each session and distribute the recording to stakeholders who could not attend live."
   },
   {
    "key": "B",
    "text": "Escalate any disagreement among stakeholders to the executive sponsor for binding resolution."
   },
   {
    "key": "C",
    "text": "Rotate facilitation among the participating stakeholder groups to share ownership of the routine."
   },
   {
    "key": "D",
    "text": "Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time."
   },
   {
    "key": "E",
    "text": "Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment."
   }
  ],
  "correct": [
   "D",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nD. Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.\nE. Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.\n\nA regular cadence for reassessing expectations and assumptions keeps stakeholder alignment current as deployment conditions change. Explicitly reconciling differing stakeholder positions resolves substantive conflicts instead of leaving them hidden, creating durable alignment.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 102,
  "id": "ccar-p-q064-import-1",
  "type": "single",
  "select": 1,
  "question": "You are establishing transparency practices for a customer-facing assistant whose responses are materially influenced by AI.\n\nWhich transparency practice most directly promotes responsible deployment?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Misrepresent the AI’s role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency."
   },
   {
    "key": "B",
    "text": "Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI’s role as confidential operational information."
   },
   {
    "key": "C",
    "text": "Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed."
   },
   {
    "key": "D",
    "text": "Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.\n\nResponsible deployment requires clear disclosure of AI involvement to the people affected by the system, enabling them to understand the nature of the interaction and calibrate their reliance appropriately. A documented, accessible path to human assistance also supports oversight and escalation when the assistant cannot appropriately resolve a need. Microsoft guidance calls for clear AI disclosure for external-facing agents and visible human handoff or interaction options.\n\n#### Learn more\n\n- Apply responsible AI\n\n- Responsible AI in Azure Workloads",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 103,
  "id": "ccar-p-q065",
  "type": "multiple",
  "select": 3,
  "question": "You are auditing a procurement-assistant agent whose defined responsibility is drafting purchase requests for review. For each currently configured tool, select Yes if it should remain after a least-privilege audit. Otherwise, select No if it should be removed.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "a read-only catalog lookup tool that returns vendor and SKU information"
   },
   {
    "key": "B",
    "text": "an inbox-send tool that emails purchase requests to vendors directly"
   },
   {
    "key": "C",
    "text": "a draft-write tool that creates purchase-request drafts in the review queue"
   },
   {
    "key": "D",
    "text": "a production-database admin tool unrelated to procurement"
   },
   {
    "key": "E",
    "text": "A read-only policy-document tool that returns the relevant procurement policies"
   }
  ],
  "correct": [
   "A",
   "C",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)\n\nCorrect answers from the source:\na read-only catalog lookup tool that returns vendor and SKU information — Yes\nan inbox-send tool that emails purchase requests to vendors directly — No\na draft-write tool that creates purchase-request drafts in the review queue — Yes\na production-database admin tool unrelated to procurement — No\nA read-only policy-document tool that returns the relevant procurement policies — Yes\n\nLeast privilege permits the read-only catalog and policy lookups needed to prepare compliant purchase-request drafts, plus the draft-write capability required to place drafts in the review queue. Direct vendor email sending exceeds the review-only responsibility, and unrelated production-database administration is unnecessary and overly privileged.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 104,
  "id": "ccar-p-q066",
  "type": "single",
  "select": 1,
  "question": "You are establishing escalation criteria for ambiguous cases in an automated workflow.\n\nWhich set of criteria best enables consistent escalation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "No escalation criteria; the model decides independently on every turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags."
   },
   {
    "key": "B",
    "text": "Escalation only after an affected customer has contacted support to complain, after the automated workflow has already completed without human review."
   },
   {
    "key": "C",
    "text": "Escalation at the discretion of whoever is available when the team’s on-call engineer has spare capacity, without a defined threshold, category, or ambiguity criterion."
   },
   {
    "key": "D",
    "text": "A confidence score below a defined threshold, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. A confidence score below a defined threshold, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review.\n\nConsistent escalation depends on explicit, repeatable triggers: a defined confidence threshold, designated high-impact decision categories, classifier-based ambiguity signals, and a user request for review. These criteria enable the workflow to identify cases requiring human oversight before a potentially consequential automated decision is finalized.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 105,
  "id": "ccar-p-q071",
  "type": "multiple",
  "select": 2,
  "question": "You are deploying a standardized Claude Code configuration to an engineering team and need to complete the planning activities before piloting the configuration.\n\nWhich two steps must be completed BEFORE piloting the configuration with a small group of engineers? Each correct answer represents part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents."
   },
   {
    "key": "B",
    "text": "Onboard every engineer in the organization to the new configuration through mandatory training sessions."
   },
   {
    "key": "C",
    "text": "Roll out the stabilized configuration to additional teams with documentation and a defined support channel."
   },
   {
    "key": "D",
    "text": "Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope."
   },
   {
    "key": "E",
    "text": "Iterate the configuration based on the pilot findings and stabilize the baseline before broader rollout."
   }
  ],
  "correct": [
   "A",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents.\nD. Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope.\n\nA controlled pilot requires defining the applicable team workflows and security boundaries, including which controls must be centrally managed and which belong to a project. That decision enables a project-scope baseline for shared MCP servers, permission rules, and subagents. Claude Code distinguishes centrally managed settings from shared project settings, and project-scoped MCP servers are intended for team-shared configuration. Organization-wide training, broader rollout, and post-pilot refinement follow rather than precede the pilot.\n\n#### Learn more\n\n- Claude Code on Console to Enterprise migration\n\n- Connect Claude Code to tools through MCP",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 106,
  "id": "ccar-p-q081",
  "type": "single",
  "select": 1,
  "question": "You are supporting an EU-based deployment subject to GDPR obligations.\n\nWhich combination of measures best supports the deployment’s GDPR posture?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling"
   },
   {
    "key": "B",
    "text": "disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure"
   },
   {
    "key": "C",
    "text": "using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure"
   },
   {
    "key": "D",
    "text": "pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling\n\nGDPR requires personal data to be limited to what is necessary, retained no longer than necessary, and processed by a service provider under an appropriate binding processor arrangement. Redacting unnecessary personal data, defining retention, maintaining a Data Processing Addendum, and documenting procedures for data-subject rights support these obligations. Claude Enterprise also provides configurable data-retention controls.\n\n#### Learn more\n\n- Regulation (EU) 2016/679 (GDPR)\n\n- Custom Data Retention Controls for Claude Enterprise",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 107,
  "id": "ccar-p-q082",
  "type": "single",
  "select": 1,
  "question": "You support a team whose Claude Code sessions routinely load 60 or more MCP tools from numerous servers, exhausting the context budget before a session starts.\n\nWhich change most directly resolves this problem without removing capability?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront."
   },
   {
    "key": "B",
    "text": "Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session."
   },
   {
    "key": "C",
    "text": "Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue."
   },
   {
    "key": "D",
    "text": "Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.\n\nTool Search supports deferred loading, which prevents deferred MCP tool descriptions from entering the model’s initial context. The tools remain available and their definitions load on demand when discovered through search, reducing initial context overhead without removing MCP capability.\n\n#### Learn more\n\n- Tool search tool — Claude Platform Docs\n\n- MCP connector — Claude Platform Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 108,
  "id": "ccar-p-q084",
  "type": "single",
  "select": 1,
  "question": "You are selecting the appropriate level of detail for an implementation guide. The audience is a delivery team that will build the deployment.\n\nWhich guidance composition best supports them?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks."
   },
   {
    "key": "B",
    "text": "Component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks."
   },
   {
    "key": "C",
    "text": "An architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration-parameter tables, or operational runbooks for the delivery team to follow."
   },
   {
    "key": "D",
    "text": "An architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks.\n\nA delivery team needs implementation-level guidance covering component responsibilities, contracts between components, dominant-flow sequences, configuration parameters and defaults, and operational procedures. Together, these artifacts support building, integrating, configuring, and operating the deployment.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 109,
  "id": "ccar-p-q085",
  "type": "multiple",
  "select": 2,
  "question": "You are incorporating Claude Code into a team workflow and must complete the design and configuration steps before piloting the integrated workflow with a small group.\n\nWhich two steps must be completed BEFORE piloting the integrated workflow? Each correct answer represents part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Document the integrated workflow with handoff criteria, permission boundaries, and on-call runbooks."
   },
   {
    "key": "B",
    "text": "Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain."
   },
   {
    "key": "C",
    "text": "Negotiate the workflow change with affected teams and obtain formal sign-off from each manager."
   },
   {
    "key": "D",
    "text": "Iterate the integrated workflow based on pilot findings before broader rollout to the team."
   },
   {
    "key": "E",
    "text": "Configure the project-scope MCP servers, permissions, subagents, and persistent project context."
   }
  ],
  "correct": [
   "B",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.\nE. Configure the project-scope MCP servers, permissions, subagents, and persistent project context.\n\nA Claude Code pilot needs an explicit division between workflow activities where AI assistance adds value and activities that remain under human authority. It also needs the project’s operational configuration in place: MCP integrations, permission controls, specialized subagents, and persistent project instructions/context. Claude Code documents project-scoped MCP setup, permissions, subagents, and project memory as distinct configuration mechanisms that establish those capabilities and boundaries.\n\n#### Learn more\n\n- Claude Code Commands\n\n- Connect Claude Code to tools via MCP",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 110,
  "id": "ccar-p-q086",
  "type": "single",
  "select": 1,
  "question": "You are documenting an architectural decision to enable future audit and onboarding.\n\nWhich artifact is the best fit?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "A slide deck in a presentation folder with no accompanying written rationale."
   },
   {
    "key": "B",
    "text": "A code comment in a single file that contains an opinion of one engineer."
   },
   {
    "key": "C",
    "text": "An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors."
   },
   {
    "key": "D",
    "text": "A short verbal note shared during a hallway conversation with no written record."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors.\n\nAn Architecture Decision Record preserves the context and rationale for an architectural choice, including alternatives, decision outcome, and consequences. Its written, attributable record supports later audits and helps new team members understand why the architecture took its current form.\n\n#### Learn more\n\n- Maintain an architecture decision record (ADR)",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 111,
  "id": "ccar-p-q089",
  "type": "single",
  "select": 1,
  "question": "A business sponsor has asked for an AI solution to “improve customer experience.” The sponsor cannot specify which customer journey is failing, which metric demonstrates that failure, or which decisions the AI should support. The sponsor is asking you to start design work next week.\n\nWhich delegation-competency action should you take first?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Recommend that the sponsor revise the request and resubmit it later for evaluation."
   },
   {
    "key": "B",
    "text": "Begin prototyping a generic assistant against the broad request before the next deadline."
   },
   {
    "key": "C",
    "text": "Propose a fixed scope that you commit to by default based on your own assumptions."
   },
   {
    "key": "D",
    "text": "Facilitate a structured discovery to define the failing decision and the target metric."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Facilitate a structured discovery to define the failing decision and the target metric.\n\nA structured discovery session establishes the specific failing decision, the affected customer journey, and a measurable target outcome before solution design begins. These definitions provide the problem scope and success criteria needed to determine whether AI is appropriate and what it should support.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 112,
  "id": "ccar-p-q091",
  "type": "single",
  "select": 1,
  "question": "A Claude architect must ensure that, once it is set, a security-hardening flag cannot be disabled by any individual engineer.\n\nWhich configuration scope correctly enforces this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "User scope (~/.claude/settings.json) on each engineer’s machine"
   },
   {
    "key": "B",
    "text": "Environment variable defined in the CI/CD pipeline only"
   },
   {
    "key": "C",
    "text": "Managed configuration applied centrally and marked as non-overridable"
   },
   {
    "key": "D",
    "text": "Project scope (.claude/settings.json) committed to the repository"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Managed configuration applied centrally and marked as non-overridable\n\nClaude Code applies centrally deployed managed settings above user, project, local, and command-line configuration, preventing an engineer from overriding an enforced security policy. A managed policy is therefore the appropriate scope for an organization-wide non-overridable hardening flag.\n\n#### Learn more\n\n- Deploy managed settings - Claude Code Docs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 113,
  "id": "ccar-p-q092",
  "type": "single",
  "select": 1,
  "question": "You are setting up a HIPAA-eligible deployment for a healthcare customer.\n\nWhich configuration enables HIPAA compliance when using Anthropic-provided tools?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box."
   },
   {
    "key": "B",
    "text": "Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking."
   },
   {
    "key": "C",
    "text": "Disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA."
   },
   {
    "key": "D",
    "text": "An ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking.\n\nA HIPAA-eligible Anthropic deployment must be covered by an appropriate Business Associate Agreement for an approved service. Zero Data Retention and audit logging support the required handling and accountability controls, whereas consumer and personal accounts without a BAA do not provide that contractual HIPAA coverage. The deployment must also follow Anthropic’s HIPAA-specific configuration and feature limitations.\n\n#### Learn more\n\n- Business Associate Agreements (BAA) for Commercial Customers\n\n- Anthropic Trust Center",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 114,
  "id": "ccar-p-q102",
  "type": "single",
  "select": 1,
  "question": "A senior architect is developing briefing materials for a new retrieval architecture. The executive sponsor has asked for a summary of the architectural decision.\n\nWhich framing is most suitable for that audience?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Technical alternatives evaluated, implementation implications, and component-level consequences."
   },
   {
    "key": "B",
    "text": "Business outcomes achieved, trade-offs accepted, and high-level risks acknowledged."
   },
   {
    "key": "C",
    "text": "Capabilities delivered, scope implications, and feature-level dependencies on the roadmap."
   },
   {
    "key": "D",
    "text": "Threat model, control mappings, residual-risk acceptance, and audit traceability."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Business outcomes achieved, trade-offs accepted, and high-level risks acknowledged.\n\nExecutive-level architectural communication should focus on the business outcomes enabled by the decision, the significant trade-offs involved, and the high-level risks that require awareness or sponsorship.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 115,
  "id": "ccar-p-q103",
  "type": "multiple",
  "select": 1,
  "question": "You are setting up Claude Code for a team that requires every engineer to use the same MCP server set, permission rules, and project context throughout the engineering monorepo.\n\nWhich configuration scope best meets this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "User scope"
   },
   {
    "key": "B",
    "text": "Project scope"
   },
   {
    "key": "C",
    "text": "Local scope"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: ghép cặp — đáp án: Select the answer that correctly completes the sentence. → Project scope)\n\nCorrect answer from the source:\nSelect the answer that correctly completes the sentence. — Project scope\n\nProject scope stores repository-level configuration that can be version-controlled and shared with all collaborators. User and local scopes are personal or machine-specific, so they cannot reliably enforce a common MCP server set, permissions, and project context across a team.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 116,
  "id": "ccar-p-q104",
  "type": "single",
  "select": 1,
  "question": "You are conducting a discovery session with a business sponsor who requests “an AI system to fix our customer escalations.”\n\nWhich approach is most likely to produce actionable requirements?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Accept the sponsor’s original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints."
   },
   {
    "key": "B",
    "text": "Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints—latency, cost, audit, and data sensitivity—apply."
   },
   {
    "key": "C",
    "text": "Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions."
   },
   {
    "key": "D",
    "text": "Assume the requirement matches the architect’s previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints—latency, cost, audit, and data sensitivity—apply.\n\nActionable requirements require clarifying the people involved, the events that initiate escalation, the desired definition of successful resolution, and applicable nonfunctional constraints such as latency, cost, auditability, and data sensitivity. These details turn a vague solution request into scoping and design requirements.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 117,
  "id": "ccar-p-q108",
  "type": "single",
  "select": 1,
  "question": "You are reviewing a peer's draft system prompt containing conflicting instructions: one section says never to speculate beyond the supplied source, while another instructs the model to confidently fill in any gaps.\n\nWhich response is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add a priority instruction directing the model to evaluate all instructions and apply whichever appears most contextually appropriate on each request."
   },
   {
    "key": "B",
    "text": "Remove or rewrite the gap-filling instruction so the prompt consistently constrains the model to source-supported content."
   },
   {
    "key": "C",
    "text": "Increase temperature so output randomness masks the contradiction."
   },
   {
    "key": "D",
    "text": "Keep both instructions and rely on the model to decide which one to follow on each request."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Remove or rewrite the gap-filling instruction so the prompt consistently constrains the model to source-supported content.\n\nSystem prompts should give consistent, unambiguous instructions. Removing or rewriting the instruction to fill gaps ensures the model does not invent unsupported information and remains constrained to content supported by the supplied source.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 118,
  "id": "ccar-p-q111",
  "type": "multiple",
  "select": 2,
  "question": "You are assessing a Claude-based deployment for compliance with a particular regulation.\n\nWhich two steps must be performed before mapping the deployment’s data flows to individual regulatory clauses? Each correct answer represents part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Compare the in-place controls against the regulatory requirements to identify any compliance gaps."
   },
   {
    "key": "B",
    "text": "Identify the applicability of the regulation based on data types, jurisdiction, and audience."
   },
   {
    "key": "C",
    "text": "Schedule the remediation work with the engineering team based on the prioritized gap findings."
   },
   {
    "key": "D",
    "text": "Document the identified gaps along with recommended remediations and residual risk for sign-off."
   },
   {
    "key": "E",
    "text": "Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place."
   }
  ],
  "correct": [
   "B",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Identify the applicability of the regulation based on data types, jurisdiction, and audience.\nE. Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.\n\nRegulatory applicability must be established from the data types, jurisdiction, and audience before clause-level analysis can be scoped. The vendor’s available compliance tooling and enabled compliance affordances must also be identified so the actual controls and data-handling capabilities can be mapped to the applicable clauses. Gap analysis, remediation planning, and sign-off follow that mapping.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 119,
  "id": "ccar-p-q113",
  "type": "multiple",
  "select": 2,
  "question": "You are conducting a discovery engagement for a new Claude-based capability and must complete the requirements-gathering activities before validating the captured requirements with stakeholders.\n\nWhich two steps must be completed BEFORE validating the captured requirements with stakeholders? Each correct answer presents part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Produce architecture decision records that capture the rationale for major design choices."
   },
   {
    "key": "B",
    "text": "Capture the business goals, success criteria, and the in-scope user population for the engagement."
   },
   {
    "key": "C",
    "text": "Document the consolidated requirements with traceability to the source stakeholder for each item."
   },
   {
    "key": "D",
    "text": "Schedule the rollout milestones and dependencies with engineering and product partners."
   },
   {
    "key": "E",
    "text": "Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs."
   }
  ],
  "correct": [
   "B",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Capture the business goals, success criteria, and the in-scope user population for the engagement.\nE. Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.\n\nBusiness goals, measurable success criteria, scope, and the intended user population define the outcome the capability must serve. Non-functional constraints such as latency, cost, auditability, data sensitivity, and regulatory obligations bound which solutions are acceptable. These inputs must be elicited before stakeholders can meaningfully validate the requirements.\n\n#### Learn more\n\n- Define success criteria and build evaluations\n\n- Claude prompting best practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 120,
  "id": "ccar-p-q118",
  "type": "multiple",
  "select": 2,
  "question": "You are creating a human-in-the-loop validation workflow for a new Claude-based deployment and must finish the design steps before running a pilot of the workflow.\n\nWhich two steps must be completed BEFORE piloting the workflow using a representative subset of traffic? Each correct answer represents part of the solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define the sampling strategy and the escalation criteria at each oversight point in the pipeline."
   },
   {
    "key": "B",
    "text": "Iterate the workflow design based on observed pilot findings before broader rollout to production."
   },
   {
    "key": "C",
    "text": "Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures."
   },
   {
    "key": "D",
    "text": "Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step."
   },
   {
    "key": "E",
    "text": "Identify the decision points in the pipeline that require human oversight by impact and reversibility."
   }
  ],
  "correct": [
   "A",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.\nE. Identify the decision points in the pipeline that require human oversight by impact and reversibility.\n\nA human-in-the-loop validation design must identify the pipeline decisions that warrant human oversight according to their impact and reversibility, and define the sampling and escalation criteria for each oversight point. Those controls establish the scope and behavior to be tested in the pilot; revisions based on pilot findings occur afterward.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 121,
  "id": "ccar-p-q119",
  "type": "single",
  "select": 1,
  "question": "Engineering leadership plans to deploy Claude Skills to 280 developers across 14 teams. The Skills will capture internal coding standards, code-review checklists, and incident-postmortem templates. Leadership has asked how Skill authorship should be governed so that Skills stay trustworthy without creating a bottleneck around one central team.\n\nWhich governance model should you recommend?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Per-developer authorship across the 280 engineers with no team-level coordination required."
   },
   {
    "key": "B",
    "text": "Centralized authorship by a single platform team responsible for every Skill produced."
   },
   {
    "key": "C",
    "text": "Fully decentralized authorship across the 14 teams with no review before publication."
   },
   {
    "key": "D",
    "text": "Federated authorship across the 14 teams with a central review and publication gate."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Federated authorship across the 14 teams with a central review and publication gate.\n\nFederated authorship enables each team to create and maintain Skills for its own domain, distributing the authoring workload. A central review and publication gate ensures that shared Skills meet organization-wide quality, security, consistency, and trust requirements before they become broadly available.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 122,
  "id": "ccar-p-q120",
  "type": "multiple",
  "select": 2,
  "question": "You are assembling continuity practices that extend across the deployment lifecycle.\n\nWhich two practices should be included on the list? Each correct answer provides a complete solution. (Select two.)\n\nChoose two",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Maintain a stakeholder register and notify the listed parties at every phase transition event."
   },
   {
    "key": "B",
    "text": "Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time."
   },
   {
    "key": "C",
    "text": "Archive every phase deliverable in long-term storage to preserve a record of what was produced."
   },
   {
    "key": "D",
    "text": "Capture lessons learned at the end of each phase and surface them as inputs to the next phase."
   },
   {
    "key": "E",
    "text": "Lock decisions made in early phases to prevent revisiting them as later phases begin."
   }
  ],
  "correct": [
   "B",
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nB. Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.\nD. Capture lessons learned at the end of each phase and surface them as inputs to the next phase.\n\nA continuous deployment lifecycle uses a persistent evaluation framework and reference set so results remain comparable across iterations and regressions can be detected. It also incorporates lessons learned from each phase into the next phase, enabling systematic improvement. Microsoft guidance describes continuously operationalized evaluation and recommends postmortems to capture deployment lessons.\n\n#### Learn more\n\n- Build an iterative evaluation framework in four stages\n\n- Architecture strategies for safe deployment practices",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 123,
  "id": "ccar-p-q122",
  "type": "single",
  "select": 1,
  "question": "You are choosing the documentation set that should accompany a Claude-based deployment at handoff.\n\nWhich set is the most complete?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Architecture overview, ADRs, component-level diagrams, runbooks for common operations, an on-call playbook, and a list of known limitations."
   },
   {
    "key": "B",
    "text": "Code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members."
   },
   {
    "key": "C",
    "text": "A single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers."
   },
   {
    "key": "D",
    "text": "A verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Architecture overview, ADRs, component-level diagrams, runbooks for common operations, an on-call playbook, and a list of known limitations.\n\nA complete deployment handoff package documents the overall architecture and component design, records architectural decisions, provides runbooks for routine operations and an on-call playbook for support, and identifies known limitations for operators and future maintainers.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 124,
  "id": "ccar-p-q124",
  "type": "multiple",
  "select": 3,
  "question": "You are categorizing token-management tactics by the request-lifecycle stage at which each applies.\n\nFor each tactic, select its applicable request-lifecycle stage.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Input Preparation"
   },
   {
    "key": "B",
    "text": "Prompt Construction"
   },
   {
    "key": "C",
    "text": "Output Handling"
   }
  ],
  "correct": [
   "C",
   "B",
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "(Dạng gốc: ghép cặp — đáp án: Persist the validated output for downstream consumption and audit. → Output Handling; Order the prompt sections so cacheable content sits before per-request content. → Prompt Construction; Summarize prior conversation history when full history is no longer needed. → Input Preparation; Validate the model's structured output against the expected schema. → Output Handling; Move stable repeated content into a cacheable prefix at the head of the prompt. → Prompt Construction; Trim retrieved passages to spans relevant to the user's question. → Input Preparation)\n\nCorrect answers from the source:\nPersist the validated output for downstream consumption and audit. — Output Handling\nOrder the prompt sections so cacheable content sits before per-request content. — Prompt Construction\nSummarize prior conversation history when full history is no longer needed. — Input Preparation\nValidate the model's structured output against the expected schema. — Output Handling\nMove stable repeated content into a cacheable prefix at the head of the prompt. — Prompt Construction\nTrim retrieved passages to spans relevant to the user's question. — Input Preparation\n\nInput preparation reduces or condenses conversation and retrieved context before it is assembled. Prompt construction determines the ordering and stable cacheable prefix of the prompt. Output handling validates generated structured data and persists validated results for downstream use and auditing.\n\n#### Learn more\n\n- Prompt caching\n\n- Structured Outputs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 125,
  "id": "ccar-p-q126",
  "type": "single",
  "select": 1,
  "question": "When the support agent invokes escalate_to_human, human agents report they must re-read the entire raw conversation to understand each case, and average handle time for escalated tickets has risen. What should the agent do at the moment of escalation to fix this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Attach the full untrimmed transcript of the conversation so the human has complete information."
   },
   {
    "key": "B",
    "text": "Enable extended thinking on the escalation turn so the model reasons longer before handing off."
   },
   {
    "key": "C",
    "text": "Escalate earlier in ambiguous cases so humans receive tickets before much conversation has accumulated."
   },
   {
    "key": "D",
    "text": "Produce a structured handoff summary — the customer's issue, verified identifiers, tool results and account state gathered, actions already attempted, and the specific recommended next step."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Produce a structured handoff summary — the customer's issue, verified identifiers, tool results and account state gathered, actions already attempted, and the specific recommended next step.\n\nWhy D is correct. Effective human handoff requires a structured summary that front-loads exactly what the human needs: the problem, confirmed identifiers, what was tried, and a recommendation. That is what removes the re-reading burden and shortens handle time. Dumping the full transcript (A) is the current failure mode — it forces the human to reconstruct the case themselves. Extended thinking (B) improves the model's own reasoning but produces no artifact for the human. Escalating earlier (C) changes when tickets arrive, not the missing information problem, and would likely lower first-contact resolution.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 126,
  "id": "ccar-p-q127",
  "type": "single",
  "select": 1,
  "question": "You are evaluating two configurations for an internal compliance Q&A assistant. Configuration X decreases top-k retrieval and uses a lighter model, reducing p95 latency by 38 percent but resulting in a measured 2 percent decrease in the accuracy benchmark. Configuration Y keeps the current top-k retrieval setting and heavier model, with no change to p95 latency and no measurable accuracy change. The deployment’s declared priorities are accuracy first and latency second.\n\nWhich configuration is the better recommendation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Configuration X, because the 2 percent accuracy reduction falls within normal benchmark variance and is not a meaningful regression."
   },
   {
    "key": "B",
    "text": "Configuration Y, because the deployment’s stated priority is accuracy first, and Configuration X produces a measured reduction in accuracy."
   },
   {
    "key": "C",
    "text": "Configuration X, because lower latency generally matters more than accuracy, regardless of the deployment’s stated priorities."
   },
   {
    "key": "D",
    "text": "Configuration X, because a 38 percent latency improvement outweighs a 2 percent accuracy reduction as a general rule across compliance deployments."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Configuration Y, because the deployment’s stated priority is accuracy first, and Configuration X produces a measured reduction in accuracy.\n\nWhen accuracy is the primary deployment priority, the configuration that maintains measured accuracy is preferable. Configuration Y preserves accuracy, while Configuration X introduces a measured accuracy regression; its latency improvement is secondary to that stated priority.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 127,
  "id": "ccar-p-exam-q024",
  "type": "multiple",
  "select": 2,
  "question": "You are designing a human-in-the-loop validation workflow.\nWhich two design elements belong in the workflow? (Choose two.)\nEach correct answer presents a complete solution.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "capture of reviewer decisions as labeled data that feeds the evaluation set over time"
   },
   {
    "key": "B",
    "text": "mandatory reviewer agreement with the model output to maintain consistent reviewer-model alignment"
   },
   {
    "key": "C",
    "text": "aggregate reviewer throughput metrics published weekly to leadership for headcount planning"
   },
   {
    "key": "D",
    "text": "uniform sampling of all model outputs to give every request an equal chance of review"
   },
   {
    "key": "E",
    "text": "risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs"
   }
  ],
  "correct": [
   "A",
   "E"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. capture of reviewer decisions as labeled data that feeds the evaluation set over time\nE. risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 128,
  "id": "ccar-p-guide-sample-1",
  "type": "single",
  "select": 1,
  "question": "A team exposes a customer-support agent that can read tickets, draft replies, issue refunds, and delete user accounts. Support staff only ever need to read tickets and draft replies. Applying least-privilege principles, which change best reduces risk?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add logging to the refund and delete tools so misuse can be audited later."
   },
   {
    "key": "B",
    "text": "Remove the refund and delete tools from the agent's configuration entirely."
   },
   {
    "key": "C",
    "text": "Keep all tools but add a confirmation prompt before refunds and deletions."
   },
   {
    "key": "D",
    "text": "Replace the agent with a larger model that follows instructions more reliably."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Remove the refund and delete tools from the agent's configuration entirely.\n\nLeast privilege means removing capabilities the role does not require, eliminating the attack surface rather than monitoring or guarding it. Logging (A) and confirmations (C) are detective/compensating controls, not removal of unnecessary privilege; model size (D) is unrelated to authorization scope.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 129,
  "id": "ccar-p-guide-sample-2",
  "type": "single",
  "select": 1,
  "question": "An application sends the same 8,000-token system prompt and policy document on every request, followed by a short, varying user message. Latency and cost are both concerns. Which optimization most directly addresses both?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Truncate the policy document to the first 1,000 tokens."
   },
   {
    "key": "B",
    "text": "Switch to the smallest available model regardless of task fit."
   },
   {
    "key": "C",
    "text": "Place the static system prompt and policy before the dynamic content and enable prompt caching."
   },
   {
    "key": "D",
    "text": "Move the policy document into a few-shot example block."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Place the static system prompt and policy before the dynamic content and enable prompt caching.\n\nOrdering stable content first and enabling prompt caching lets repeated prefixes be reused, reducing both time-to-first-token and per-request cost without discarding required context. Truncation (A) loses needed policy; downsizing blindly (B) risks quality; relocating to few-shot (D) does not create a cacheable, reusable prefix.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 130,
  "id": "ccar-p-guide-sample-3",
  "type": "single",
  "select": 1,
  "question": "A RAG system suddenly returns confident but incorrect answers after a document refresh, while latency and model version are unchanged. What is the most likely first place to investigate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The model weights have silently changed."
   },
   {
    "key": "B",
    "text": "The retrieval/indexing step is returning irrelevant or stale chunks."
   },
   {
    "key": "C",
    "text": "The temperature setting is too low."
   },
   {
    "key": "D",
    "text": "The context window has shrunk."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. The retrieval/indexing step is returning irrelevant or stale chunks.\n\nConfident-but-wrong answers following a document refresh, with model and latency unchanged, point to retrieval feeding the model poor context, for example a broken re-index or mismatched embeddings. The other options would not be triggered specifically by a document refresh.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 131,
  "id": "ccar-p-q131",
  "type": "single",
  "select": 1,
  "question": "You are configuring Claude Code for a team that needs every engineer to share the same MCP server set, permission rules, and project context across the engineering monorepo.\n\nWhich configuration scope best supports this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "User scope, with the MCP server definitions and permission rules placed in each engineer's ~/.claude/settings.json and synchronized manually through a shared setup script outside version control."
   },
   {
    "key": "B",
    "text": "Local scope configured only on the lead architect's machine, with no configuration present on other engineers' machines and no mechanism to distribute MCP servers or permission rules."
   },
   {
    "key": "C",
    "text": "Project scope, with the configuration committed to the repository so every engineer working in the project receives the same MCP servers, permissions, and context."
   },
   {
    "key": "D",
    "text": "User scope configured individually on each engineer's machine, with no shared configuration committed to the repository and no guarantee of consistency across the team."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Project scope, with the configuration committed to the repository so every engineer working in the project receives the same MCP servers, permissions, and context.\n\nProject scope is designed for configuration that must be shared by everyone working in a repository. Committing the approved configuration provides versioning, review history, repeatable onboarding, and consistent MCP and permission behavior across the monorepo. User scope is intended primarily for individual preferences and personal rules, so independently maintained user files create configuration drift. Local scope affects only one person in one project and is therefore unsuitable for team-wide distribution. A lead architect's local configuration cannot establish a shared environment. Claude Code documentation specifically describes .claude/settings.json as the shared project settings file that teams check into source control. Security-critical policies that must not be overridden should additionally be enforced through managed organizational settings rather than relying exclusively on repository configuration. Claude Code: Settings files and precedence",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 132,
  "id": "ccar-p-q132",
  "type": "single",
  "select": 1,
  "question": "A software vendor wants to build a RAG assistant over its own internal support-ticket archive (not the public web) and needs the same quality of source attribution that citation-grounded answers provide, without sending queries to an external search index.\n\nWhich feature fits this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Web search tool, because it augments Claude's knowledge with current information regardless of where the documents are hosted."
   },
   {
    "key": "B",
    "text": "Web fetch, because retrieving full page content from specified URLs works equally well for private ticket archives."
   },
   {
    "key": "C",
    "text": "Search results, because it provides citation-quality source attribution for custom knowledge bases outside the public web."
   },
   {
    "key": "D",
    "text": "Code execution, because running retrieval scripts in a sandbox lets the model fetch and cite ticket content directly."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nC. Search results, because it provides citation-quality source attribution for custom knowledge bases outside the public web.\n\nCorrect. Search results is built to enable natural citations for RAG applications, achieving web-search-quality citations for custom knowledge bases and internal tools.\n\n**A.** Incorrect. The web search tool augments Claude with public web content and is not the mechanism for attributing answers to a private, internal ticket archive.\n\n**B.** Incorrect. Web fetch retrieves content from specified URLs on the web; it is not designed to provide citation attribution over an internal, non-web knowledge base.\n\n**C.** Correct. Search results is built to enable natural citations for RAG applications, achieving web-search-quality citations for custom knowledge bases and internal tools.\n\n**D.** Incorrect. Code execution runs sandboxed code for analysis and file processing; it is not a citation or source-attribution feature for retrieval-augmented answers.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 133,
  "id": "ccar-p-q133",
  "type": "multiple",
  "select": 2,
  "question": "A long-running autonomous coding agent needs two things in its architecture: automatically clearing stale tool results from context as a session approaches the token limit, and retaining key project facts across separate sessions run days apart. Select all components that correctly satisfy these two needs.",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Context editing, which supports clearing tool results automatically as a conversation approaches the token limit"
   },
   {
    "key": "B",
    "text": "The memory tool, which lets Claude store and retrieve information across separate conversations over time"
   },
   {
    "key": "C",
    "text": "Fine-grained tool streaming, which reduces latency by streaming tool parameters without JSON buffering"
   },
   {
    "key": "D",
    "text": "Compaction, positioned as the sole mechanism that fully replaces context editing for long-running sessions"
   },
   {
    "key": "E",
    "text": "Code execution, which runs code in a sandboxed container for data analysis and file processing tasks"
   },
   {
    "key": "F",
    "text": "The Files API, which lets uploaded documents be referenced repeatedly without re-uploading their content"
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Context editing, which supports clearing tool results automatically as a conversation approaches the token limit\nB. The memory tool, which lets Claude store and retrieve information across separate conversations over time\n\nA. Correct. Context editing is documented as supporting automatic clearing of tool results when approaching token limits, directly addressing the first need in the scenario.\n\nB. Correct. The memory tool is documented as enabling Claude to store and retrieve information across conversations, building knowledge over time, which addresses retaining facts across separate sessions.\n\n**A.** Correct. Context editing is documented as supporting automatic clearing of tool results when approaching token limits, directly addressing the first need in the scenario.\n\n**B.** Correct. The memory tool is documented as enabling Claude to store and retrieve information across conversations, building knowledge over time, which addresses retaining facts across separate sessions.\n\n**C.** Incorrect. Fine-grained tool streaming reduces latency for large tool-call parameters; it has no role in clearing stale context or retaining cross-session facts.\n\n**D.** Incorrect. Compaction summarizes conversation history automatically, but it is a distinct, separate feature from context editing, not a replacement that makes context editing unnecessary.\n\n**E.** Incorrect. Code execution runs sandboxed code for analysis tasks; it does not manage context size or persist facts across sessions.\n\n**F.** Incorrect. The Files API avoids re-uploading document content across requests, which is useful but does not clear stale tool results or persist project facts across separate sessions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 134,
  "id": "ccar-p-q134",
  "type": "multiple",
  "select": 2,
  "question": "A team is choosing between orchestrator-workers and parallelization by sectioning for a document-analysis pipeline. Which statements correctly distinguish orchestrator-workers from parallelization by sectioning?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "In orchestrator-workers, a central LLM determines subtasks at runtime, whereas sectioning requires subtasks predefined before execution"
   },
   {
    "key": "B",
    "text": "In orchestrator-workers, worker LLMs run in a fixed, predetermined order, whereas sectioning always runs its subtasks simultaneously"
   },
   {
    "key": "C",
    "text": "Orchestrator-workers suits subtasks that vary unpredictably case to case, while sectioning suits tasks that split cleanly into known subtasks"
   },
   {
    "key": "D",
    "text": "Parallelization by sectioning always requires a second LLM to evaluate the sectioned outputs before combining them into a final result"
   },
   {
    "key": "E",
    "text": "Orchestrator-workers and parallelization by sectioning both aggregate multiple independent votes on one input to reach a majority-based answer"
   }
  ],
  "correct": [
   "A",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. In orchestrator-workers, a central LLM determines subtasks at runtime, whereas sectioning requires subtasks predefined before execution\nC. Orchestrator-workers suits subtasks that vary unpredictably case to case, while sectioning suits tasks that split cleanly into known subtasks\n\nA. Correct. The core distinction is that orchestrator-workers decomposes subtasks dynamically at runtime, while sectioning requires the subtasks to be known and fixed before execution starts.\n\nC. Correct. Orchestrator-workers fits unpredictable, case-varying subtask requirements, while sectioning fits tasks that decompose cleanly into known independent pieces ahead of time.\n\n**A.** Correct. The core distinction is that orchestrator-workers decomposes subtasks dynamically at runtime, while sectioning requires the subtasks to be known and fixed before execution starts.\n\n**B.** Incorrect. Orchestrator-workers does not imply a fixed predetermined order for its workers, and this option's framing misstates the relationship between the two patterns.\n\n**C.** Correct. Orchestrator-workers fits unpredictable, case-varying subtask requirements, while sectioning fits tasks that decompose cleanly into known independent pieces ahead of time.\n\n**D.** Incorrect. Sectioning combines independent subtask outputs directly; requiring a second LLM to evaluate and combine them describes evaluator-optimizer, not sectioning.\n\n**E.** Incorrect. Aggregating multiple independent votes on the same input to reach a majority answer describes parallelization by voting, not orchestrator-workers or sectioning.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 135,
  "id": "ccar-p-q135",
  "type": "single",
  "select": 1,
  "question": "A team is building an agent that must audit a large codebase across three distinct dimensions: security vulnerabilities, code quality, and test coverage. Each dimension requires a different set of tools and a different area of focus.\n\nWhich approach best decomposes this problem using the Agent SDK?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define an orchestrator agent that invokes specialized subagents through the Agent tool, each configured with a scoped tool set and description matching its subtask domain"
   },
   {
    "key": "B",
    "text": "Send one prompt to the main agent instructing it to sequentially perform code quality checks, then security scanning, then test coverage analysis without additional configuration"
   },
   {
    "key": "C",
    "text": "Configure a single MCP server that exposes security, quality, and coverage checks as three separate tools, and let the primary agent call each tool directly instead of delegating"
   },
   {
    "key": "D",
    "text": "Increase the primary agent's context window and rely on extended thinking so it can reason through all three review dimensions within one continuous session"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Define an orchestrator agent that invokes specialized subagents through the Agent tool, each configured with a scoped tool set and description matching its subtask domain\n\nCorrect. The Agent SDK's subagent capability lets an orchestrator delegate focused subtasks to specialized agents, each with its own scoped tools and description, then aggregate their results - the intended decomposition pattern for multi-dimensional review work.\n\n**A.** Correct. The Agent SDK's subagent capability lets an orchestrator delegate focused subtasks to specialized agents, each with its own scoped tools and description, then aggregate their results - the intended decomposition pattern for multi-dimensional review work.\n\n**B.** Incorrect. A single undifferentiated prompt forces one agent to hold all three review contexts and tool needs at once, losing the isolation and specialization benefits of decomposition.\n\n**C.** Incorrect. Exposing checks as tools on one MCP server still leaves a single agent responsible for orchestrating and interpreting all three domains itself, rather than delegating focused reasoning to specialized subagents.\n\n**D.** Incorrect. A larger context window and extended thinking add reasoning depth but do not decompose the task into independently scoped, delegatable units of work.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 136,
  "id": "ccar-p-q136",
  "type": "multiple",
  "select": 2,
  "question": "An enterprise customer's support desk has committed to a contractual 99.9% uptime and sub-2-second p95 response SLA for its Claude-powered ticket triage assistant. During architecture review, the team must select which platform capabilities to prioritize primarily to protect this SLA commitment. Which two capabilities are the most directly relevant to protecting a latency and availability SLA? (Select 2)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Server-side fallback, which retries a refused request against a backup model within the same API call for a timely response"
   },
   {
    "key": "B",
    "text": "Choosing a model with faster comparative latency, such as Claude Haiku 4.5, for the latency-sensitive triage path"
   },
   {
    "key": "C",
    "text": "Batch processing, which processes large volumes of requests asynchronously at a discounted rate over an extended completion window"
   },
   {
    "key": "D",
    "text": "Agent Skills, which extend Claude's capabilities with pre-built instructions and scripts for document-format tasks"
   },
   {
    "key": "E",
    "text": "The Files API, which lets documents be uploaded once and referenced across multiple requests without re-uploading content"
   }
  ],
  "correct": [
   "A",
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Server-side fallback, which retries a refused request against a backup model within the same API call for a timely response\nB. Choosing a model with faster comparative latency, such as Claude Haiku 4.5, for the latency-sensitive triage path\n\nA. Correct. Server-side fallback keeps a request from failing outright by automatically retrying against a named backup model within the same call, directly protecting availability and response-time commitments when the primary model declines a request.\n\nB. Correct. Selecting a model chosen for faster comparative latency, such as Haiku 4.5, directly targets the sub-2-second p95 requirement on the synchronous triage path, making it a core lever for meeting the SLA.\n\n**A.** Correct. Server-side fallback keeps a request from failing outright by automatically retrying against a named backup model within the same call, directly protecting availability and response-time commitments when the primary model declines a request.\n\n**B.** Correct. Selecting a model chosen for faster comparative latency, such as Haiku 4.5, directly targets the sub-2-second p95 requirement on the synchronous triage path, making it a core lever for meeting the SLA.\n\n**C.** Batch processing is designed for asynchronous, non-latency-sensitive workloads with an extended completion window, which is the opposite of what a sub-2-second synchronous SLA requires.\n\n**D.** Agent Skills extend task capability for document-format work such as spreadsheets or slides; they are not a mechanism for protecting response latency or uptime commitments.\n\n**E.** The Files API reduces redundant re-uploading of documents across requests, which helps with convenience and token efficiency but is not a direct lever for latency or availability SLA protection.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 137,
  "id": "ccar-p-q137",
  "type": "single",
  "select": 1,
  "question": "A manufacturing client wants a Claude-based quality-inspection assistant that repeatedly analyzes the same reference specification documents alongside new inspection reports throughout the day. The client's stated goal is to reduce redundant token spend on the unchanging reference material while keeping individual inspection turnaround fast.\n\nWhich architectural choice best serves this efficiency and cost goal?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use prompt caching so the unchanging reference specification is cached and reused across requests, cutting cost and latency"
   },
   {
    "key": "B",
    "text": "Move the entire workload to the Message Batches API so all inspection reports are processed together once per day"
   },
   {
    "key": "C",
    "text": "Increase the effort parameter to xhigh on every inspection request so Claude reasons more thoroughly each time"
   },
   {
    "key": "D",
    "text": "Re-upload the full reference specification as plain text in every single request to guarantee the model always has the latest version"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Use prompt caching so the unchanging reference specification is cached and reused across requests, cutting cost and latency\n\nCorrect. Prompt caching is designed exactly for this pattern: providing Claude with recurring background context, such as an unchanging reference document, so subsequent requests reduce both cost and latency instead of reprocessing the same content each time.\n\n**A.** Correct. Prompt caching is designed exactly for this pattern: providing Claude with recurring background context, such as an unchanging reference document, so subsequent requests reduce both cost and latency instead of reprocessing the same content each time.\n\n**B.** Batch processing trades same-day turnaround for cost savings on non-urgent work, which conflicts with the client's requirement to keep individual inspection turnaround fast throughout the day.\n\n**C.** Raising the effort parameter increases reasoning depth and token usage per request, which adds cost rather than reducing the redundant token spend the client wants to cut.\n\n**D.** Re-uploading the full reference document in every request is the exact redundant-token pattern the client wants eliminated, and it neither reduces cost nor improves turnaround.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 138,
  "id": "ccar-p-q138",
  "type": "single",
  "select": 1,
  "question": "A coding assistant must modify an unknown number of files across a repository to implement a feature, where the exact files and scope of changes can only be determined once the assistant inspects the codebase.\n\nWhich pattern is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Orchestrator-workers, where a central LLM inspects the repository and dynamically delegates each file edit to a worker LLM"
   },
   {
    "key": "B",
    "text": "Prompt chaining, where the assistant edits files in a fixed sequence determined before inspecting the repository"
   },
   {
    "key": "C",
    "text": "Parallelization by sectioning, where the assistant edits every file in the repository simultaneously using a predetermined split"
   },
   {
    "key": "D",
    "text": "Routing, where the assistant classifies the feature request and sends it to one of several fixed file-editing prompts"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Orchestrator-workers, where a central LLM inspects the repository and dynamically delegates each file edit to a worker LLM\n\nCorrect. Anthropic describes the orchestrator-workers pattern as having a central LLM dynamically break down tasks, delegate them to worker LLMs, and synthesize results. Official guidance states this pattern is \"well-suited for complex tasks where you can't predict the subtasks needed (in coding, for example, the number of files that need to be changed and the nature of the change in each file likely depend on the task).\" This matches the scenario of an unpredictable set of repository edits. Anthropic does note that real-time coordination among coding agents is still challenging, but among the available workflow patterns this is the documented fit.\n\n**A.** Correct. Anthropic describes the orchestrator-workers pattern as having a central LLM dynamically break down tasks, delegate them to worker LLMs, and synthesize results. Official guidance states this pattern is \"well-suited for complex tasks where you can't predict the subtasks needed (in coding, for example, the number of files that need to be changed and the nature of the change in each file likely depend on the task).\" This matches the scenario of an unpredictable set of repository edits. Anthropic does note that real-time coordination among coding agents is still challenging, but among the available workflow patterns this is the documented fit.\n\n**B.** Incorrect. Prompt chaining uses a predefined sequence in which the output of one step feeds the next. In this scenario, the files and scope of changes cannot be known until the repository is inspected, so a fixed sequence determined before inspection would likely miss the correct edits or require rework. A dynamic delegation pattern such as orchestrator-workers is more appropriate.\n\n**C.** Incorrect. Parallelization by sectioning works when the task can be divided into independent, predictable sections before execution. Here the exact files are unknown and cannot be predetermined before inspecting the codebase. Editing every file simultaneously using a fixed split would be inefficient and could introduce incorrect changes; orchestrator-workers handles dynamic delegation instead.\n\n**D.** Incorrect. Routing classifies an input and sends it to a specialized fixed prompt or workflow, but it does not inspect the repository and dynamically delegate individual file edits as subtasks emerge. The described task requires dynamic planning and delegation, which is characteristic of the orchestrator-workers pattern.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 139,
  "id": "ccar-p-q139",
  "type": "multiple",
  "select": 3,
  "question": "A developer is building an email-triage agent that reads inbound email bodies via a tool and drafts replies. To harden it against embedded instructions in email bodies, which combination of design choices should the developer apply? (Select all that apply)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "State a system prompt policy that content returned by tools is untrusted data and must never override the system prompt or the user's original request"
   },
   {
    "key": "B",
    "text": "JSON-encode the email body when passing it as a tool result so quotes or tags in the content cannot break out of the surrounding structure"
   },
   {
    "key": "C",
    "text": "Screen tool outputs with a lightweight classifier model before passing them to the main agent, and strip or flag content if an injection is suspected"
   },
   {
    "key": "D",
    "text": "Place the developer's own operating instructions inside the same tool_result block as the email body so both travel together in one message"
   },
   {
    "key": "E",
    "text": "Grant the agent broad, unscoped access to the user's full mailbox and account settings so it never needs to ask for additional permissions mid-task"
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. State a system prompt policy that content returned by tools is untrusted data and must never override the system prompt or the user's original request\nB. JSON-encode the email body when passing it as a tool result so quotes or tags in the content cannot break out of the surrounding structure\nC. Screen tool outputs with a lightweight classifier model before passing them to the main agent, and strip or flag content if an injection is suspected\n\nA. Correct. Stating explicitly that tool-returned content is untrusted data that must not override instructions is a core documented mitigation for indirect prompt injection.\n\nB. Correct. JSON-encoding untrusted content provides unambiguous delimiters so an attacker cannot break out of the data context into an instruction context.\n\nC. Correct. Screening tool outputs with a lightweight classifier before they reach the main conversation is a documented pattern for catching injected instructions in tool results.\n\n**A.** Correct. Stating explicitly that tool-returned content is untrusted data that must not override instructions is a core documented mitigation for indirect prompt injection.\n\n**B.** Correct. JSON-encoding untrusted content provides unambiguous delimiters so an attacker cannot break out of the data context into an instruction context.\n\n**C.** Correct. Screening tool outputs with a lightweight classifier before they reach the main conversation is a documented pattern for catching injected instructions in tool results.\n\n**D.** Incorrect. Anthropic explicitly advises against placing your own instructions in tool results, since Claude is trained to treat tool-result content as untrusted data and may ignore or flag instructions placed there.\n\n**E.** Incorrect. This violates the least-privilege principle; broad unscoped access increases the damage a successful injection could cause rather than limiting it.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 140,
  "id": "ccar-p-q140",
  "type": "single",
  "select": 1,
  "question": "A team is building an English-to-Spanish translation feature that will be called repeatedly with different user-submitted text. They want to keep the instructional wording consistent across calls while making it easy to swap in new text and track changes to the instructions separately from the text being translated.\n\nWhich approach best fits this goal?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define a prompt template with the fixed instruction text and a placeholder such as {{text}}, substituting only the variable content on each call while the surrounding instructions stay constant."
   },
   {
    "key": "B",
    "text": "Regenerate the complete translation prompt on every call by constructing the instruction string dynamically with the user's text, ensuring that each request carries an up-to-date version of the wording."
   },
   {
    "key": "C",
    "text": "Store the entire prompt containing the fixed instructions and the user's text as one static string, editing the string by hand for each new translation request so the prompt is always up to date."
   },
   {
    "key": "D",
    "text": "Send the fixed instruction text and the user's text to the model in two separate API calls, then concatenate the responses, placing the translation after the instruction output to form the final result."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Define a prompt template with the fixed instruction text and a placeholder such as {{text}}, substituting only the variable content on each call while the surrounding instructions stay constant.\n\nCorrect. A prompt template separates fixed instructions from variable placeholders like {{text}}. This keeps the instructional wording consistent across calls, lets the variable content change per request, and makes it straightforward to version and track the fixed portion independently of what's being translated.\n\n**A.** Correct. A prompt template separates fixed instructions from variable placeholders like {{text}}. This keeps the instructional wording consistent across calls, lets the variable content change per request, and makes it straightforward to version and track the fixed portion independently of what's being translated.\n\n**B.** Incorrect. Regenerating the complete prompt including instructions on every call defeats the goal of keeping instructional wording consistent, because the surrounding text may drift. It also makes it harder to track changes to the instructions independently from the user's text.\n\n**C.** Incorrect. Storing the entire prompt as one static string and editing it by hand conflates fixed instructions with variable content, making it error-prone and hard to test edge cases. This approach does not allow tracking instruction changes separately from the translated text.\n\n**D.** Incorrect. Splitting into two API calls and concatenating responses adds unnecessary complexity and cost without providing reusable instruction wording. It does not achieve the goal of maintaining consistent, separately trackable instructions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 141,
  "id": "ccar-p-q141",
  "type": "single",
  "select": 1,
  "question": "An agent runs long tool-use loops involving dozens of file reads per session. The team wants old tool results automatically cleared once input tokens exceed 30,000, while always preserving the 3 most recent tool exchanges and never clearing results from the web_search tool.\n\nWhich context_management configuration achieves this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Configure a clear_tool_uses_20250919 edit with trigger set to 30000 input tokens, keep 3 tool uses, exclude_tools set to web_search."
   },
   {
    "key": "B",
    "text": "A clear_thinking_20251015 edit with trigger set to 30000 input tokens, keep set to 3 thinking turns, and exclude_tools set to web_search should be used."
   },
   {
    "key": "C",
    "text": "A clear_tool_uses_20250919 edit with trigger set to tool_uses 30000, with no keep value explicitly set, and with no exclude_tools value explicitly set."
   },
   {
    "key": "D",
    "text": "A clear_tool_uses_20250919 edit with trigger set to 30000 input tokens, keep set to 3 tool uses, and exclude_tools set to file_read should be used."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Configure a clear_tool_uses_20250919 edit with trigger set to 30000 input tokens, keep 3 tool uses, exclude_tools set to web_search.\n\nCorrect. clear_tool_uses_20250919 is the appropriate edit for clearing old tool results. Setting the trigger to 30,000 input tokens, keeping the 3 most recent tool uses, and excluding web_search meets all specified requirements: auto-clears at the token threshold, preserves the last 3 exchanges, and never clears web_search results.\n\n**A.** Correct. clear_tool_uses_20250919 is the appropriate edit for clearing old tool results. Setting the trigger to 30,000 input tokens, keeping the 3 most recent tool uses, and excluding web_search meets all specified requirements: auto-clears at the token threshold, preserves the last 3 exchanges, and never clears web_search results.\n\n**B.** Incorrect. The clear_thinking_20251015 edit is designed to manage extended thinking blocks, not tool results. Using it would fail to clear old file-read outputs, regardless of trigger or exclusion settings.\n\n**C.** Incorrect. This configuration triggers on a tool_uses count of 30,000 instead of the required input token threshold. Additionally, without setting keep or exclude_tools, recent tool exchanges are not preserved, and web_search results are not protected from clearing.\n\n**D.** Incorrect. Excluding file_read instead of web_search results in file_read results being never cleared, while web_search results remain subject to automatic clearing-the opposite of the requirement.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 142,
  "id": "ccar-p-q142",
  "type": "single",
  "select": 1,
  "question": "A code-review prompt needs Claude to generate a fix, verify the fix against a set of criteria, and then refine the fix if criteria are not met. The team wants to inspect the intermediate review step and log it separately before the final refinement is produced.\n\nWhich approach best fits this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Ask Claude to generate, verify, and refine the fix in one response using extended reasoning, but this keeps the review internal and unloggable."
   },
   {
    "key": "B",
    "text": "Break the task into separate API calls: generate a fix, review it against the criteria, then refine the fix, so each step can be logged independently."
   },
   {
    "key": "C",
    "text": "Add  tags around the review step so Claude places the review inside and the fix outside, and the review can be extracted and logged apart."
   },
   {
    "key": "D",
    "text": "Provide five few-shot examples of correct fixes for Claude to mimic, bypassing the review step, removing the intermediate step and preventing logging."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Break the task into separate API calls: generate a fix, review it against the criteria, then refine the fix, so each step can be logged independently.\n\nCorrect. Breaking the task into separate API calls implements a self-correction chaining pattern where each phase-generation, review against criteria, and refinement-is isolated. Each step can be independently inspected, logged, or branched on, exactly matching the need for separate logging.\n\n**A.** Incorrect. Asking Claude to handle everything in one response with extended reasoning keeps the review internal to the model's generation process. The intermediate verification step cannot be extracted or logged separately, which fails to meet the team's logging requirement.\n\n**B.** Correct. Breaking the task into separate API calls implements a self-correction chaining pattern where each phase-generation, review against criteria, and refinement-is isolated. Each step can be independently inspected, logged, or branched on, exactly matching the need for separate logging.\n\n**C.** Incorrect. While adding  tags might seem to separate the review visually, the entire generation, review, and refinement still occur in a single API response. This makes it impractical to reliably extract and log a clean intermediate review step without mixing it with the draft or refinement content.\n\n**D.** Incorrect. Providing few-shot examples for Claude to mimic bypasses the explicit review-against-criteria step entirely. Without performing a distinct review and refinement cycle, there is no intermediate step to log, so this approach fails to satisfy the requirement.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 143,
  "id": "ccar-p-q143",
  "type": "single",
  "select": 1,
  "question": "A platform wants Claude to discover tools using an existing embeddings index rather than the built-in regex or BM25 matching, because tool descriptions are sparse but semantically related through the embedding space.\n\nWhich implementation matches this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Build a custom tool that runs the embeddings search and returns tool_reference blocks in its tool_result for Claude to expand."
   },
   {
    "key": "B",
    "text": "Enable the built-in BM25 tool search variant, since BM25 ranking approximates embedding-based semantic similarity closely enough."
   },
   {
    "key": "C",
    "text": "Enable the built-in regex tool search variant and rely on broad wildcard patterns to approximate semantic matching."
   },
   {
    "key": "D",
    "text": "Disable tool search and load every tool definition up front so the embeddings index becomes unnecessary."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Build a custom tool that runs the embeddings search and returns tool_reference blocks in its tool_result for Claude to expand.\n\nCorrect. A custom client-side tool search implementation can run any retrieval method, including embeddings, and return standard tool_result content with tool_reference blocks, which the API expands into full tool definitions.\n\n**A.** Correct. A custom client-side tool search implementation can run any retrieval method, including embeddings, and return standard tool_result content with tool_reference blocks, which the API expands into full tool definitions.\n\n**B.** BM25 is a term-frequency-based lexical ranking method, not a true semantic embedding similarity search, so it would not reproduce the intended embeddings-based matching.\n\n**C.** Regex matching operates on literal patterns against names and descriptions and cannot capture semantic relationships between sparse, differently worded tool descriptions.\n\n**D.** Loading every definition up front abandons retrieval entirely and reintroduces the context bloat problem that made an embeddings-based discovery approach necessary.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 144,
  "id": "ccar-p-q144",
  "type": "single",
  "select": 1,
  "question": "A support-ticket assistant retrieves passages from a 500-document internal knowledge base for each incoming ticket and must cite the exact source passage in every reply, without re-sending the entire corpus on each request.\n\nWhich approach best matches this data shape and query pattern?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Return the retrieved passages as search result content blocks from a retrieval tool, each carrying source and title metadata, so Claude generates natural citations per ticket."
   },
   {
    "key": "B",
    "text": "Upload all 500 documents as citable text documents in the system prompt so that Claude can reference any passage directly, and then instruct it to cite the source document and section for every reply."
   },
   {
    "key": "C",
    "text": "Concatenate the full corpus into a single long-context user message with all 500 documents separated by titles, then prompt Claude to extract the relevant passage and cite its source."
   },
   {
    "key": "D",
    "text": "Store the corpus in the memory tool by saving each document as a separate entry, configure assistant to load all entries before answering, and prompt it to cite source document for any retrieved passage."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Return the retrieved passages as search result content blocks from a retrieval tool, each carrying source and title metadata, so Claude generates natural citations per ticket.\n\nCorrect. This approach uses a retrieval tool to dynamically fetch only relevant passages per query, with each result block including source and title metadata. This enables Claude to generate natural citations without resending the entire corpus, which is efficient and aligns with the need for exact source passage citations.\n\n**A.** Correct. This approach uses a retrieval tool to dynamically fetch only relevant passages per query, with each result block including source and title metadata. This enables Claude to generate natural citations without resending the entire corpus, which is efficient and aligns with the need for exact source passage citations.\n\n**B.** Incorrect. Uploading all 500 documents in the system prompt sends the full corpus with every request, defeating the purpose of avoiding corpus resending. It also wastes context on irrelevant passages, making it inefficient for a repeated ticket-answering workflow.\n\n**C.** Incorrect. Concatenating the full corpus into a long user message per request is costly in terms of tokens and degrades accuracy as context grows. It skips the targeted retrieval step that efficiently supplies only relevant passages, which is what this query pattern requires.\n\n**D.** Incorrect. The memory tool is intended for Claude to persist notes across conversation turns, not as a document retrieval index. Storing each document as a memory entry and loading all entries for each query is inefficient and does not support targeted retrieval with source metadata for citations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 145,
  "id": "ccar-p-q145",
  "type": "single",
  "select": 1,
  "question": "A team originally split their onboarding manual into fixed 500-character chunks with no overlap. They now find that many chunks begin or end mid-sentence, and answers near a chunk boundary are frequently missed because the relevant sentence is split across two separate embeddings.\n\nWhich chunking adjustment most directly addresses this specific failure?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Split chunks along natural boundaries such as paragraphs or sections, and add a small overlap between adjacent chunks so boundary sentences appear intact in at least one chunk."
   },
   {
    "key": "B",
    "text": "Reduce the chunk size so each chunk contains exactly one sentence, splitting on punctuation such as periods or exclamation points, and drop the fixed character limit to prevent mid-sentence breaks."
   },
   {
    "key": "C",
    "text": "Remove overlap and set a smaller fixed chunk size, such as 250 characters, to lower the vector index count and accelerate semantic search without changing how sentences are split."
   },
   {
    "key": "D",
    "text": "Keep the fixed 500-character boundaries and increase the embedding model's context window so that each vector encodes more surrounding text, reducing missed answers near splits."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Split chunks along natural boundaries such as paragraphs or sections, and add a small overlap between adjacent chunks so boundary sentences appear intact in at least one chunk.\n\nCorrect. Chunking on natural document boundaries such as paragraphs or sections, combined with a small overlap, ensures that sentences near chunk edges appear intact in at least one chunk. This directly addresses the problem of split-sentence retrieval failures.\n\n**A.** Correct. Chunking on natural document boundaries such as paragraphs or sections, combined with a small overlap, ensures that sentences near chunk edges appear intact in at least one chunk. This directly addresses the problem of split-sentence retrieval failures.\n\n**B.** Incorrect. Reducing chunks to single sentences by splitting on punctuation eliminates mid-sentence breaks, but loses the surrounding context necessary for accurate retrieval. Additionally, multi-sentence ideas are still separated across chunks, which can degrade answer completeness.\n\n**C.** Incorrect. Removing overlap and using smaller fixed-size chunks increases the likelihood that a relevant sentence will be split across a chunk boundary. This strategy worsens the original problem rather than resolving it.\n\n**D.** Incorrect. Increasing the embedding model's context window does not change where the pipeline cuts text; with fixed 500-character boundaries, sentences near the cuts remain split. The retrieval misses at boundaries persist regardless of the model's capacity.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 146,
  "id": "ccar-p-q146",
  "type": "single",
  "select": 1,
  "question": "An agent's project has accumulated a dozen skills, several of which perform side-effecting actions such as sending Slack messages or deleting stale branches. Reviewers notice Claude occasionally auto-triggers these side-effecting skills based on vague description matches, and want to reduce the agent's effective capability surface so these skills only run when a person explicitly invokes them.\n\nWhat is the most direct fix?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set disable-model-invocation: true in the frontmatter of each side-effecting skill so Claude cannot select them automatically and only the user can invoke them with /name."
   },
   {
    "key": "B",
    "text": "Delete the skill descriptions from the frontmatter of each side-effecting skill so Claude has no basis for automatic matching and only the user can invoke those skills by name."
   },
   {
    "key": "C",
    "text": "Move the side-effecting skills into CLAUDE.md so they load as always-on context, which ensures Claude only uses them when the user explicitly invokes them by name in a request."
   },
   {
    "key": "D",
    "text": "Rewrite the instructions of each side-effecting skill to instruct Claude to ask for confirmation before performing the side effect, without modifying frontmatter fields."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Set disable-model-invocation: true in the frontmatter of each side-effecting skill so Claude cannot select them automatically and only the user can invoke them with /name.\n\nCorrect. Setting `disable-model-invocation: true` in the frontmatter hides the skill from Claude's automatic selection, so it cannot be triggered by vague description matches. The skill becomes accessible only when a user explicitly invokes it with `/name`, thus reducing the effective capability surface as intended.\n\n**A.** Correct. Setting `disable-model-invocation: true` in the frontmatter hides the skill from Claude's automatic selection, so it cannot be triggered by vague description matches. The skill becomes accessible only when a user explicitly invokes it with `/name`, thus reducing the effective capability surface as intended.\n\n**B.** Incorrect. Deleting skill descriptions may prevent automatic matching, but skills also rely on descriptions for proper discovery and correct invocation by users. This approach is not the documented method for controlling automatic model invocation and could lead to confusion or broken workflows.\n\n**C.** Incorrect. Moving skills into `CLAUDE.md` would load them as always-on context in every session, meaning Claude could still act on them without an explicit user request, potentially increasing the effective capability surface rather than reducing it.\n\n**D.** Incorrect. Adding instructions to ask for confirmation does not prevent Claude from auto-triggering the skill based on description matches; the skill may still be activated automatically, only then prompting for confirmation. This does not restrict invocation to explicit user commands.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 147,
  "id": "ccar-p-q147",
  "type": "single",
  "select": 1,
  "question": "A team is defining the success criteria for a new claims-summarization feature before building the evaluation dataset.\n\nThe current draft criterion reads: \"the summaries should be concise and helpful.\" Which revised criterion best follows the SMART framework for evaluation design?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Require summaries to average at least 4 out of 5 on a completeness rubric across a 500-claim sample"
   },
   {
    "key": "B",
    "text": "Require summaries to earn a perfect 5 out of 5 completeness score from every adjuster in the sample"
   },
   {
    "key": "C",
    "text": "Require summaries to sound less robotic and read more naturally to the adjusters who review them"
   },
   {
    "key": "D",
    "text": "Require every summary to be signed off by a senior adjuster before it counts as acceptable"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Require summaries to average at least 4 out of 5 on a completeness rubric across a 500-claim sample\n\nCorrect. This criterion is specific (completeness rubric), measurable (numeric threshold), achievable (a 4/5 average rather than perfection), and relevant (tied directly to summary quality), and it defines a concrete sample size for measurement.\n\n**A.** Correct. This criterion is specific (completeness rubric), measurable (numeric threshold), achievable (a 4/5 average rather than perfection), and relevant (tied directly to summary quality), and it defines a concrete sample size for measurement.\n\n**B.** Incorrect. Requiring a perfect score from every adjuster is not achievable in practice; SMART criteria should be realistic targets grounded in frontier model capability, not unattainable perfection.\n\n**C.** Incorrect. \"Sound less robotic\" and \"read more naturally\" are not measurable without a defined metric or scale, so this fails the Measurable requirement of SMART criteria.\n\n**D.** Incorrect. This describes a manual sign-off process, not a measurable success criterion for the model's output quality, so it does not give the evaluation team a quantifiable target.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 148,
  "id": "ccar-p-q148",
  "type": "single",
  "select": 1,
  "question": "A platform engineer sets CLAUDE_CODE_ENABLE_TELEMETRY=1 on every CI runner but the team's OTLP collector never receives any spans, metrics, or logs from Claude Code jobs. No other telemetry variables were configured.\n\nWhat is the most likely cause of the missing data?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The collector rejects every signal until CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1 is also set, regardless of which exporters are chosen"
   },
   {
    "key": "B",
    "text": "Telemetry is enabled but no exporter was selected, so OTEL_METRICS_EXPORTER and OTEL_LOGS_EXPORTER default to producing no export at all"
   },
   {
    "key": "C",
    "text": "The CLI only emits telemetry once the console exporter has been configured first as a required local fallback"
   },
   {
    "key": "D",
    "text": "The organization's Admin API key must be exported through OTEL_EXPORTER_OTLP_HEADERS before the CLI will emit any signal"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Telemetry is enabled but no exporter was selected, so OTEL_METRICS_EXPORTER and OTEL_LOGS_EXPORTER default to producing no export at all\n\nCorrect. Enabling telemetry alone does not choose a destination. Each signal has its own exporter switch (OTEL_METRICS_EXPORTER, OTEL_LOGS_EXPORTER, OTEL_TRACES_EXPORTER), and leaving them unset means nothing is exported even though telemetry generation is on.\n\n**A.** Incorrect. The enhanced telemetry beta flag is only required to unlock distributed tracing spans; metrics and log events do not depend on it, and it has no bearing on whether an exporter is configured.\n\n**B.** Correct. Enabling telemetry alone does not choose a destination. Each signal has its own exporter switch (OTEL_METRICS_EXPORTER, OTEL_LOGS_EXPORTER, OTEL_TRACES_EXPORTER), and leaving them unset means nothing is exported even though telemetry generation is on.\n\n**C.** Incorrect. The console exporter is one optional choice among several (otlp, prometheus, console, none); it is not a prerequisite the CLI requires before other exporters will function.\n\n**D.** Incorrect. OTEL_EXPORTER_OTLP_HEADERS carries authentication for the collector endpoint, not an Anthropic Admin API key, and its absence would cause auth failures at the collector, not a total absence of any emitted telemetry.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 149,
  "id": "ccar-p-q149",
  "type": "multiple",
  "select": 3,
  "question": "An agentic coding assistant runs long sessions that accumulate hundreds of tool calls, and the conversation regularly approaches the model's context window limit before the task is finished. Engineers want strategies that let the session continue productively without losing critical state.\n\nWhich approaches address this goal?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Enable server-side compaction so earlier turns are automatically summarized once the conversation nears the context window limit"
   },
   {
    "key": "B",
    "text": "Configure context editing to clear old tool results once a token threshold is reached, keeping only recent tool use/result pairs"
   },
   {
    "key": "C",
    "text": "Use the memory tool to persist critical state to durable storage before old context is cleared, so a session recovers quickly"
   },
   {
    "key": "D",
    "text": "Lower the effort parameter to low so Claude generates shorter replies, preventing the context window from ever filling up"
   },
   {
    "key": "E",
    "text": "Switch the session to the Message Batches API so each turn runs as an independent asynchronous request with fresh context"
   },
   {
    "key": "F",
    "text": "Increase the effort parameter to max so Claude reasons more thoroughly and needs fewer total turns to finish the task"
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Enable server-side compaction so earlier turns are automatically summarized once the conversation nears the context window limit\nB. Configure context editing to clear old tool results once a token threshold is reached, keeping only recent tool use/result pairs\nC. Use the memory tool to persist critical state to durable storage before old context is cleared, so a session recovers quickly\n\nA. Correct. Server-side compaction is the primary strategy for long-running conversations that approach context window limits: it automatically summarizes earlier turns on the server so the session can continue past the limit.\n\nB. Correct. Context editing's tool result clearing removes old tool results once a configured trigger is reached while preserving the most recent tool use/result pairs, directly freeing context space in tool-heavy agentic sessions.\n\nC. Correct. The memory tool's multi-session pattern is designed to offload critical state to durable storage before context is cleared or a new session starts, so essential information is not lost when older turns are summarized or removed.\n\n**A.** Correct. Server-side compaction is the primary strategy for long-running conversations that approach context window limits: it automatically summarizes earlier turns on the server so the session can continue past the limit.\n\n**B.** Correct. Context editing's tool result clearing removes old tool results once a configured trigger is reached while preserving the most recent tool use/result pairs, directly freeing context space in tool-heavy agentic sessions.\n\n**C.** Correct. The memory tool's multi-session pattern is designed to offload critical state to durable storage before context is cleared or a new session starts, so essential information is not lost when older turns are summarized or removed.\n\n**D.** Lowering effort reduces token spend per turn but does not prevent the accumulated conversation history itself from growing and eventually approaching the context window limit.\n\n**E.** The Batch API is for independent asynchronous requests without immediate responses, not for continuing a single long-running interactive session, and splitting it into fresh-context chunks would lose the conversation's accumulated state.\n\n**F.** Raising effort to max increases token spend per turn for maximum capability; it does not reduce the number of turns needed and does not itself address a growing context window, since higher-effort turns can consume context faster.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 150,
  "id": "ccar-p-q150",
  "type": "single",
  "select": 1,
  "question": "A team wants to lower per-request cost and latency for a chat feature without switching models or losing response quality on genuinely hard questions. They want the model itself to spend fewer tokens on easy turns while still reasoning thoroughly on complex ones.\n\nWhich lever should they reach for first?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Lower the effort parameter for routine turns, since it reduces token spend while letting Claude think harder when warranted"
   },
   {
    "key": "B",
    "text": "Disable prompt caching entirely, since removing all cached writes always guarantees the very lowest possible token count of all"
   },
   {
    "key": "C",
    "text": "Force every request through the Message Batches API, since batch requests are billed at a flat discounted rate"
   },
   {
    "key": "D",
    "text": "Set max_tokens to a small fixed value on all requests so Claude cannot generate long responses on hard questions"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Lower the effort parameter for routine turns, since it reduces token spend while letting Claude think harder when warranted\n\nCorrect. The effort parameter is described as a behavioral signal that trades thoroughness for token efficiency across text, tool calls, and thinking, within a single model. At lower effort, Claude still thinks on sufficiently difficult problems but spends fewer tokens on simpler ones, which is exactly the described goal.\n\n**A.** Correct. The effort parameter is described as a behavioral signal that trades thoroughness for token efficiency across text, tool calls, and thinking, within a single model. At lower effort, Claude still thinks on sufficiently difficult problems but spends fewer tokens on simpler ones, which is exactly the described goal.\n\n**B.** Cache writes do cost more than base input, but cache reads cost 90% less; disabling caching entirely removes the possibility of cheap cache reads and would generally increase, not decrease, cost for any repeated content.\n\n**C.** The Batch API requires asynchronous processing without immediate responses, which is incompatible with an interactive chat feature, and it does not adapt token spend to per-turn difficulty.\n\n**D.** A small fixed max_tokens risks truncating responses on genuinely hard questions where more output is needed, directly conflicting with the requirement to preserve quality on complex turns.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 151,
  "id": "ccar-p-q151",
  "type": "single",
  "select": 1,
  "question": "Ahead of launch, a product manager sets a success criterion requiring the model to achieve 100% accuracy on an open-ended reasoning task, with zero tolerance for any incorrect or incomplete answer, matching or exceeding what a domain expert could produce.\n\nWhat is the main problem with this success criterion, and how should it be revised?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The target is unachievable because it exceeds realistic frontier-model capability. It should instead be grounded in benchmark results, prior experiments, or comparable industry performance."
   },
   {
    "key": "B",
    "text": "The target is not specific enough because it does not name a single numeric metric, so it should be replaced with a quantifiable percentage like a 95% accuracy score, regardless of feasibility."
   },
   {
    "key": "C",
    "text": "The target is not relevant because reasoning tasks should never have accuracy targets; instead, the criterion should specify maximum latency and cost, which are the only meaningful production metrics."
   },
   {
    "key": "D",
    "text": "The target is not measurable because open-ended tasks cannot be scored automatically under any circumstances, so the criterion should rely on subjective human ratings with no automated evaluation."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. The target is unachievable because it exceeds realistic frontier-model capability. It should instead be grounded in benchmark results, prior experiments, or comparable industry performance.\n\nCorrect. The target of 100% accuracy with zero tolerance is unachievable because it exceeds realistic frontier-model capability. It should be grounded in benchmark results, prior experiments, or comparable industry performance to ensure the success criterion is realistic and attainable.\n\n**A.** Correct. The target of 100% accuracy with zero tolerance is unachievable because it exceeds realistic frontier-model capability. It should be grounded in benchmark results, prior experiments, or comparable industry performance to ensure the success criterion is realistic and attainable.\n\n**B.** Incorrect. The target is already specific: 100% accuracy is a single numeric metric. The real problem is that it is unachievable, not that it lacks specificity, so replacing it with an arbitrary percentage like 95% without considering feasibility does not address the core issue.\n\n**C.** Incorrect. Accuracy targets are relevant and appropriate for reasoning tasks; the problem is the unrealistic threshold, not the use of an accuracy metric. Additionally, latency and cost are not the only meaningful production metrics-accuracy and safety are also critical.\n\n**D.** Incorrect. Open-ended reasoning tasks can be scored automatically using methods like LLM-based evaluation or rubric-based grading, so measurability is not the main problem. The core issue is that the 100% zero-tolerance target is unachievable and not grounded in realistic performance.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 152,
  "id": "ccar-p-q152",
  "type": "single",
  "select": 1,
  "question": "A team has been iterating on a claims-processing prompt using the same 200-example development set for every round of refinement. They now want to declare a final winning version before shipping.\n\nWhat should they do before making that final decision?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Evaluate the leading prompt candidate on a separate held-out test set not used during iteration to confirm that improvements generalize beyond the development set."
   },
   {
    "key": "B",
    "text": "Run one more round of refinement on the same 200-example development set, perhaps switching to a different model or adding few-shot examples, to maximize the score before finalizing the prompt."
   },
   {
    "key": "C",
    "text": "Reduce the development set to only the examples that the current prompt candidate already passes, then present the accuracy on that subset as the final metric to make the score appear higher."
   },
   {
    "key": "D",
    "text": "Ship the candidate that achieves the highest score on the 200-example development set right away, as iteratively refining on that same set already demonstrates its production readiness."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Evaluate the leading prompt candidate on a separate held-out test set not used during iteration to confirm that improvements generalize beyond the development set.\n\nCorrect. Reusing the same development set throughout iterations risks overfitting, so the candidate may not generalize. Testing on a separate held-out set is essential to confirm that improvements extend beyond the development data.\n\n**A.** Correct. Reusing the same development set throughout iterations risks overfitting, so the candidate may not generalize. Testing on a separate held-out set is essential to confirm that improvements extend beyond the development data.\n\n**B.** Incorrect. Another round of refinement on the same set only deepens overfitting to that specific data, making the prompt less reliable on new examples. Maximizing the development score does not guarantee real-world performance.\n\n**C.** Incorrect. Discarding failing examples creates an artificially high accuracy that masks the prompt's true weaknesses. This cherry-picking prevents fair assessment and leads to an unreliable final metric.\n\n**D.** Incorrect. The highest score on the iteratively used development set likely reflects overfitting to that set's specific patterns. Production readiness requires validation on unseen data to ensure the prompt performs well in practice.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 153,
  "id": "ccar-p-q153",
  "type": "multiple",
  "select": 3,
  "question": "A team currently runs a moderately complex data-extraction workflow on Claude Haiku 4.5. Which of the following observations would be valid evidence that the workflow has a model-capability mismatch and should be evaluated on a more capable model like Claude Opus 4.8? (Select all that apply.)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "On a use-case benchmark, accuracy on multi-step reasoning subtasks stays below threshold even after prompt revisions."
   },
   {
    "key": "B",
    "text": "The workflow needs nuanced understanding across long chains of interdependent steps where partial errors compound."
   },
   {
    "key": "C",
    "text": "Manual review shows the extraction errors resemble genuine reasoning mistakes rather than missing or truncated input."
   },
   {
    "key": "D",
    "text": "The team's monthly API spend for the workflow is higher than they originally budgeted for the project."
   },
   {
    "key": "E",
    "text": "The workflow occasionally times out because of ordinary network latency between the client and the API."
   },
   {
    "key": "F",
    "text": "The workflow's prompt was designed for an older model and has not been adapted to the current model's capabilities."
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. On a use-case benchmark, accuracy on multi-step reasoning subtasks stays below threshold even after prompt revisions.\nB. The workflow needs nuanced understanding across long chains of interdependent steps where partial errors compound.\nC. Manual review shows the extraction errors resemble genuine reasoning mistakes rather than missing or truncated input.\n\nA. Correct. Accuracy below threshold on multi-step reasoning subtasks that persists after prompt revisions indicates that the model's inherent reasoning capability is insufficient. This persistent underperformance points to a capability ceiling rather than a prompt engineering issue. Evaluating a more capable model like Claude Opus 4.8 is warranted.\n\nB. Correct. A workflow that requires nuanced understanding across long chains of interdependent steps, where partial errors compound, is inherently complex and exceeds the typical strengths of a lighter model. Such complexity is a direct signal of a model-capability mismatch. A more capable model is better suited to handle this demanding reasoning.\n\nC. Correct. When manual review shows extraction errors are genuine reasoning mistakes rather than issues from missing or truncated input, it highlights a fundamental limitation in the model's reasoning. This suggests the model is failing at logic or understanding, not just input processing. Upgrading the model may address these deep reasoning errors.\n\n**A.** Correct. Accuracy below threshold on multi-step reasoning subtasks that persists after prompt revisions indicates that the model's inherent reasoning capability is insufficient. This persistent underperformance points to a capability ceiling rather than a prompt engineering issue. Evaluating a more capable model like Claude Opus 4.8 is warranted.\n\n**B.** Correct. A workflow that requires nuanced understanding across long chains of interdependent steps, where partial errors compound, is inherently complex and exceeds the typical strengths of a lighter model. Such complexity is a direct signal of a model-capability mismatch. A more capable model is better suited to handle this demanding reasoning.\n\n**C.** Correct. When manual review shows extraction errors are genuine reasoning mistakes rather than issues from missing or truncated input, it highlights a fundamental limitation in the model's reasoning. This suggests the model is failing at logic or understanding, not just input processing. Upgrading the model may address these deep reasoning errors.\n\n**D.** Incorrect. Exceeding the monthly budget is a cost-management concern and does not indicate whether the current model is capable enough for the task. Moving to a more expensive model would likely increase costs, making this observation irrelevant to a capability mismatch.\n\n**E.** Incorrect. Occasional timeouts due to ordinary network latency are an infrastructure issue external to the model. This type of failure does not reflect the model's reasoning ability and can occur with any model regardless of capability.\n\n**F.** Incorrect. A prompt designed for an older model may not leverage the current model's strengths and should be adapted and retested before judging capability. Without prompt optimization, poor performance cannot be attributed to a model-capability mismatch.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 154,
  "id": "ccar-p-q154",
  "type": "single",
  "select": 1,
  "question": "A compliance analyst asks Claude to review a 40-page vendor contract and flag every clause that conflicts with the company's data-retention policy. In early testing, Claude cites clause numbers and language that do not actually appear in the contract.\n\nWhich prompting change is most effective at grounding the review in the actual document text for this kind of long-document task?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Ask Claude to answer using its general knowledge of standard contract clauses instead of the specific text, since standard clauses are usually representative"
   },
   {
    "key": "B",
    "text": "Instruct Claude to summarize the entire contract into three paragraphs first, then perform the compliance analysis using only that summary as its source"
   },
   {
    "key": "C",
    "text": "Reduce the max_tokens parameter for the response so Claude produces a shorter, more focused answer that is less likely to drift from the source contract"
   },
   {
    "key": "D",
    "text": "Instruct Claude to first extract exact, word-for-word quotes relevant to data retention, and only then analyze compliance by referencing those extracted quotes"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nD. Instruct Claude to first extract exact, word-for-word quotes relevant to data retention, and only then analyze compliance by referencing those extracted quotes\n\nCorrect. For long documents, having Claude extract word-for-word quotes before analyzing grounds its output in the actual text and reduces hallucinated citations.\n\n**A.** Incorrect. Relying on general knowledge instead of the provided document is the hallucination risk being addressed, not a fix for it.\n\n**B.** Incorrect. Summarizing first discards detail and can itself introduce the drift and inaccuracy the task is trying to eliminate.\n\n**C.** Incorrect. Response length has no bearing on whether cited clauses actually appear in the source document.\n\n**D.** Correct. For long documents, having Claude extract word-for-word quotes before analyzing grounds its output in the actual text and reduces hallucinated citations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 155,
  "id": "ccar-p-q155",
  "type": "single",
  "select": 1,
  "question": "A fintech company's Claude-powered agent can initiate wire transfers through a custom MCP tool. Even though the operations team has configured allowedTools to auto-approve most read and reporting tools, they want every wire-transfer tool call to require a human's explicit approval no matter what permission mode the session is later switched to, including bypassPermissions.\n\nWhich approach best satisfies this requirement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Register a PreToolUse hook scoped to the wire-transfer tool that returns permissionDecision \"ask\" for every call, since hooks execute before deny rules, ask rules, the permission mode check, and allow rules, and their decision holds even under bypassPermissions."
   },
   {
    "key": "B",
    "text": "Add a bare allowedTools entry for the wire-transfer tool so it auto-approves, then depend on the canUseTool callback to intercept it, since bare allow rules approve every matching call before canUseTool is ever consulted, so the callback never runs for that tool."
   },
   {
    "key": "C",
    "text": "Switch the session's permission mode to acceptEdits, expecting the wire-transfer tool to fall outside its file-edit scope and always route to canUseTool, though other tools under acceptEdits still fall through to any allow rules that already approve them."
   },
   {
    "key": "D",
    "text": "Add the wire-transfer tool to disallowed_tools with a wildcard pattern so it is blocked by default, then have the canUseTool callback lift the deny rule per call, though deny rules are evaluated before canUseTool runs and cannot be reversed from inside that callback."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Register a PreToolUse hook scoped to the wire-transfer tool that returns permissionDecision \"ask\" for every call, since hooks execute before deny rules, ask rules, the permission mode check, and allow rules, and their decision holds even under bypassPermissions.\n\nCorrect. Hooks run first in the evaluation order and a PreToolUse hook's decision applies regardless of permission mode, including bypassPermissions, guaranteeing the prompt for this tool.\n\n**A.** Correct. Hooks run first in the evaluation order and a PreToolUse hook's decision applies regardless of permission mode, including bypassPermissions, guaranteeing the prompt for this tool.\n\n**B.** Incorrect mechanism. A bare allow-rule entry auto-approves every matching call and the call never reaches canUseTool, so this design silently removes the intended approval step.\n\n**C.** Incorrect. acceptEdits only auto-approves file edits and specific filesystem commands; other tools still fall through to normal permission handling, which could still resolve via an existing allow rule rather than always prompting.\n\n**D.** Incorrect. Deny rules are evaluated before canUseTool in the flow, so the callback has no mechanism to reverse a deny decision for a specific call.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 156,
  "id": "ccar-p-q156",
  "type": "multiple",
  "select": 3,
  "question": "A solutions architect is scoping the ethical-risk controls for a Claude-based assistant that will draft internal performance-review summaries from manager notes across a multinational workforce. The compliance team wants a set of concrete measures that address bias, fairness, and transparency before launch. Which of the following measures should be included? (Select 3)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Run paired-scenario evaluations comparing summary tone and detail across employee groups given identical underlying performance notes."
   },
   {
    "key": "B",
    "text": "Document, in a form reviewers can inspect, which specific decision factors the assistant is instructed to weigh whenever it drafts a summary."
   },
   {
    "key": "C",
    "text": "Give every employee, regardless of role or seniority, a mechanism to request the specific factors that shaped their own summary."
   },
   {
    "key": "D",
    "text": "Skip bias testing across the initial launch region and only extend testing later if formal complaints get filed after go-live."
   },
   {
    "key": "E",
    "text": "Let each manager's personal phrasing preferences silently override the standardized summary template with absolutely no logging kept."
   },
   {
    "key": "F",
    "text": "Restrict summary review access to a single manager with no secondary sign-off, to keep the rollout process deliberately lightweight."
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Run paired-scenario evaluations comparing summary tone and detail across employee groups given identical underlying performance notes.\nB. Document, in a form reviewers can inspect, which specific decision factors the assistant is instructed to weigh whenever it drafts a summary.\nC. Give every employee, regardless of role or seniority, a mechanism to request the specific factors that shaped their own summary.\n\nA. Correct. Paired-scenario testing across demographic groups is a direct, evidence-based way to detect tone or detail disparities that would indicate bias, mirroring how Anthropic evaluates paired requests for evenhandedness.\n\nB. Correct. Documenting the decision factors the assistant weighs gives reviewers a transparent, inspectable basis for the summaries, directly addressing the transparency requirement.\n\nC. Correct. Giving employees a way to request the factors behind their own summary extends transparency to the people most affected by the assistant's output, supporting fairness and accountability.\n\n**A.** Correct. Paired-scenario testing across demographic groups is a direct, evidence-based way to detect tone or detail disparities that would indicate bias, mirroring how Anthropic evaluates paired requests for evenhandedness.\n\n**B.** Correct. Documenting the decision factors the assistant weighs gives reviewers a transparent, inspectable basis for the summaries, directly addressing the transparency requirement.\n\n**C.** Correct. Giving employees a way to request the factors behind their own summary extends transparency to the people most affected by the assistant's output, supporting fairness and accountability.\n\n**D.** Incorrect. Deferring bias testing until after complaints arise reverses the compliance team's request for pre-launch controls and lets biased summaries reach employees before any check occurs.\n\n**E.** Incorrect. Unlogged silent overrides of the standardized template reintroduce exactly the kind of unaccounted inconsistency that undermines both fairness and transparency.\n\n**F.** Incorrect. A single reviewer with no secondary sign-off removes an accountability check rather than adding one, working against the governance goals of the review.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 157,
  "id": "ccar-p-q157",
  "type": "multiple",
  "select": 3,
  "question": "A solutions architect is running the first discovery session with a new prospect before recommending any specific Claude model.\n\nAccording to Anthropic's model-selection guidance, which factors should the architect establish as key criteria during this session?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The specific capabilities the model must have to meet the prospect's needs"
   },
   {
    "key": "B",
    "text": "How quickly the model must respond within the prospect's application"
   },
   {
    "key": "C",
    "text": "The prospect's available budget for development and production usage"
   },
   {
    "key": "D",
    "text": "The exact number of employees currently working in the prospect's IT department"
   },
   {
    "key": "E",
    "text": "Which social media platforms the prospect uses for customer marketing"
   },
   {
    "key": "F",
    "text": "The version number of the prospect's internal ticketing software"
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. The specific capabilities the model must have to meet the prospect's needs\nB. How quickly the model must respond within the prospect's application\nC. The prospect's available budget for development and production usage\n\nA. Correct. Capabilities is one of the key criteria Anthropic's guidance lists to establish before choosing a model.\n\nB. Correct. Speed, meaning how quickly the model must respond, is explicitly named as a key criterion to evaluate first.\n\nC. Correct. Cost, meaning the budget for development and production usage, is explicitly named as a key criterion to evaluate first.\n\n**A.** Correct. Capabilities is one of the key criteria Anthropic's guidance lists to establish before choosing a model.\n\n**B.** Correct. Speed, meaning how quickly the model must respond, is explicitly named as a key criterion to evaluate first.\n\n**C.** Correct. Cost, meaning the budget for development and production usage, is explicitly named as a key criterion to evaluate first.\n\n**D.** Incorrect. Headcount in the IT department is not one of the documented model-selection criteria and does not inform capability, speed, or cost decisions.\n\n**E.** Incorrect. Marketing channel usage is unrelated to model capability, speed, or cost requirements and is not a discovery criterion for model selection.\n\n**F.** Incorrect. A third-party ticketing software version is an integration detail, not one of the capability, speed, or cost criteria used to scope model selection.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 158,
  "id": "ccar-p-q158",
  "type": "single",
  "select": 1,
  "question": "A financial services customer's compliance team says every AI-generated answer referencing internal policy documents must point to the exact sentence it was drawn from, so auditors can verify the source without re-reading the whole document.\n\nWhich capability addresses this discovery finding?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Citations, which let Claude reference the exact sentences and passages in source documents used to generate a response"
   },
   {
    "key": "B",
    "text": "Search results, which enable natural citations for RAG applications by attaching proper source attribution to search results"
   },
   {
    "key": "C",
    "text": "Token counting, which determines the number of tokens in a message before it is sent to Claude"
   },
   {
    "key": "D",
    "text": "The Files API, which uploads and manages documents so they do not need to be re-sent with every request"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Citations, which let Claude reference the exact sentences and passages in source documents used to generate a response\n\nCorrect. Citations is documented as grounding responses in source documents with references to the exact sentences and passages used, matching the auditability requirement described.\n\n**A.** Correct. Citations is documented as grounding responses in source documents with references to the exact sentences and passages used, matching the auditability requirement described.\n\n**B.** Incorrect. Search results attaches source attribution specifically for RAG applications built around a search tool, which is a narrower fit than directly citing provided internal policy documents.\n\n**C.** Incorrect. Token counting measures message size before sending; it has no role in producing verifiable source references for auditors.\n\n**D.** Incorrect. The Files API avoids re-uploading documents across requests but does not itself produce sentence-level source references in responses.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 159,
  "id": "ccar-p-q159",
  "type": "single",
  "select": 1,
  "question": "A customer support tooling vendor still runs Claude Haiku 3.5 in a legacy component and receives Anthropic's notice that the model is retired outside of Bedrock and Google Cloud. Their engineering stakeholders want to know how this affects their committed timeline.\n\nWhat is the accurate expectation to set?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Direct API and other non-Bedrock/Vertex-hosted traffic on Haiku 3.5 must migrate to a supported model before retirement, while deployments specifically on Bedrock or Google Cloud can keep running it under those platforms' own timelines"
   },
   {
    "key": "B",
    "text": "The retirement notice only affects new customers who sign up after the announcement date, so the vendor's existing production traffic is permanently exempt regardless of hosting platform"
   },
   {
    "key": "C",
    "text": "Retirement notices apply uniformly across every hosting platform including Bedrock and Google Cloud, so all deployments of Haiku 3.5 everywhere must migrate by the same date"
   },
   {
    "key": "D",
    "text": "Model retirement only restricts access to the Console UI for prompting Haiku 3.5, while direct Messages API traffic on any platform continues indefinitely unaffected"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Direct API and other non-Bedrock/Vertex-hosted traffic on Haiku 3.5 must migrate to a supported model before retirement, while deployments specifically on Bedrock or Google Cloud can keep running it under those platforms' own timelines\n\nCorrect. Haiku 3.5 is documented as retired except on Bedrock and Google Cloud, meaning direct API usage elsewhere must migrate while those two platforms retain their own continuation timelines.\n\n**A.** Correct. Haiku 3.5 is documented as retired except on Bedrock and Google Cloud, meaning direct API usage elsewhere must migrate while those two platforms retain their own continuation timelines.\n\n**B.** Incorrect. Retirement affects existing production traffic on the direct API, not just new signups; there is no blanket exemption tied to account age.\n\n**C.** Incorrect. This contradicts the documented exception carved out for Bedrock and Google Cloud, which are explicitly excluded from the retirement on the same schedule.\n\n**D.** Incorrect. Retirement affects the model's availability for actual inference, not merely a Console UI restriction; direct Messages API traffic on the retired platforms is the traffic that must migrate.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 160,
  "id": "ccar-p-q160",
  "type": "single",
  "select": 1,
  "question": "Two months after a customer support assistant goes live, the operations team notices their monthly Claude spend has grown faster than ticket volume and wants to identify which workspace and model combination is driving the increase.\n\nWhich monitoring approach addresses this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Query the Usage and Cost Admin API grouped by workspace and model to reconcile spend against token consumption"
   },
   {
    "key": "B",
    "text": "Re-run the original evaluation set from the design phase to check whether output quality has regressed"
   },
   {
    "key": "C",
    "text": "Increase the agent's allowed_tools scope so it can investigate its own billing records directly"
   },
   {
    "key": "D",
    "text": "Ask the support team to manually count tickets handled per day and compare that figure to the invoice total"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Query the Usage and Cost Admin API grouped by workspace and model to reconcile spend against token consumption\n\nCorrect - the Usage and Cost Admin API supports grouping by workspace and model, which directly answers where the added spend is coming from.\n\n**A.** Correct - the Usage and Cost Admin API supports grouping by workspace and model, which directly answers where the added spend is coming from.\n\n**B.** Re-running the evaluation set measures output quality, not which workspace or model is responsible for the cost increase.\n\n**C.** Expanding the agent's own tool permissions to inspect billing is unnecessary and unrelated to how usage and cost reporting is retrieved.\n\n**D.** Manually reconciling ticket counts against invoices is far less precise than the granular, per-workspace and per-model data the API already provides.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 161,
  "id": "ccar-p-q161",
  "type": "single",
  "select": 1,
  "question": "A team is documenting the caching architecture for a service where the same large system prompt and tool definitions are sent with nearly every request. The implementation guidance needs to explain how to cut repeated processing cost and latency for that static content.\n\nWhat should the guidance recommend?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Mark the reusable system prompt and tool definitions as cached blocks so repeated requests reuse the prefix instead of reprocessing it."
   },
   {
    "key": "B",
    "text": "Increase the context window to 1M tokens so the large system prompt fits entirely without ever needing to be truncated across requests."
   },
   {
    "key": "C",
    "text": "Move the system prompt into the Files API so it uploads once and Claude re-reads it fresh from storage on every single request."
   },
   {
    "key": "D",
    "text": "Enable batch processing so every request carrying the large system prompt is queued and billed at half price automatically."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Mark the reusable system prompt and tool definitions as cached blocks so repeated requests reuse the prefix instead of reprocessing it.\n\nCorrect. Prompt caching is designed exactly for this scenario: marking the static system prompt and tool definitions as cached lets repeated requests skip reprocessing that content, reducing both cost and latency.\n\n**A.** Correct. Prompt caching is designed exactly for this scenario: marking the static system prompt and tool definitions as cached lets repeated requests skip reprocessing that content, reducing both cost and latency.\n\n**B.** Incorrect. A larger context window changes how much content fits in a request but does not stop the same static content from being reprocessed on every call.\n\n**C.** Incorrect. The Files API avoids re-uploading file content, but re-reading a stored file on every request still requires reprocessing it, so it does not address the repeated-processing cost.\n\n**D.** Incorrect. Batch processing is for asynchronous bulk workloads with a discount on the whole request, not a mechanism for avoiding repeated processing of a shared prefix on synchronous calls.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 162,
  "id": "ccar-p-q162",
  "type": "single",
  "select": 1,
  "question": "Your coding-agent product is exceeding its latency budget on Claude Opus 4.8. Before proposing a switch to a smaller model, a colleague suggests first tuning the effort parameter.\n\nHow should you frame this trade-off to the team?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Adjusting effort trades intelligence for latency and cost within the same model; lowering it from the default may recover budget without the accuracy loss that comes from switching to a different, less capable model."
   },
   {
    "key": "B",
    "text": "The effort parameter governs only tool-call count per turn, not the model's raw inference latency, so the team should focus on switching to a smaller model that fits the latency budget for the coding-agent product."
   },
   {
    "key": "C",
    "text": "Effort on Claude Opus 4.8 can only be increased, never decreased, which prevents the team from lowering latency through this parameter; therefore, the migration to a model family that offers a tunable effort floor is the correct path to meet the latency budget."
   },
   {
    "key": "D",
    "text": "Effort tuning is only available via the Claude API, not in Claude Code, so the coding-agent product cannot lower latency this way; the team should switch to a model family with native effort controls in Claude Code."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Adjusting effort trades intelligence for latency and cost within the same model; lowering it from the default may recover budget without the accuracy loss that comes from switching to a different, less capable model.\n\nCorrect. Tuning the effort parameter directly trades off intelligence, latency, and cost within the same model; lowering effort from the default can bring latency back within budget while avoiding the accuracy degradation that typically comes from moving to a less capable model. This approach leverages the existing model's strengths with a controlled trade-off.\n\n**A.** Correct. Tuning the effort parameter directly trades off intelligence, latency, and cost within the same model; lowering effort from the default can bring latency back within budget while avoiding the accuracy degradation that typically comes from moving to a less capable model. This approach leverages the existing model's strengths with a controlled trade-off.\n\n**B.** Incorrect. The effort parameter actually controls reasoning depth and token usage, which directly influences raw inference latency, not just the number of tool calls. It is a global control over model intelligence, so adjusting it can meaningfully reduce latency without immediately resorting to a model switch.\n\n**C.** Incorrect. The effort parameter can be set to levels lower than the default, allowing latency to be reduced on Opus 4.8. There is no restriction preventing decreases; thus, tuning effort is a viable first step before considering model migration.\n\n**D.** Incorrect. Effort tuning is available across all surfaces, including Claude Code and the API. The coding-agent product can adjust effort in both environments, so the option's assertion that it's API-only is false, making a switch unnecessary on these grounds.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 163,
  "id": "ccar-p-q163",
  "type": "multiple",
  "select": 3,
  "question": "A solutions architect is designing the initial rollout of Claude Code for a mid-size company with no existing device management. The company has developers on unmanaged laptops, wants centralized visibility into token spend, and needs org-wide policy to reach both local sessions and Claude Code on the web. Which set of decisions correctly matches each requirement to the right mechanism? (Select 3)",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Choose Claude for Teams or Enterprise as the API provider so Claude Code and claude.ai share one per-seat subscription with no infrastructure to run"
   },
   {
    "key": "B",
    "text": "Use server-managed settings delivered from the claude.ai admin console, since it reaches both local and web sessions without requiring MDM"
   },
   {
    "key": "C",
    "text": "Use the usage dashboard at claude.ai/analytics/claude-code for centralized spend visibility, available on Claude for Teams and Enterprise plans"
   },
   {
    "key": "D",
    "text": "Deploy a plist-based managed-settings policy through macOS MDM as the primary policy channel, since it is the strongest enforcement mechanism available"
   },
   {
    "key": "E",
    "text": "Rely exclusively on project-level .claude/settings.json files committed to each repository to establish organization-wide policy"
   },
   {
    "key": "F",
    "text": "Configure Amazon Bedrock as the API provider so the company can use server-managed settings for centralized policy delivery"
   }
  ],
  "correct": [
   "A",
   "B",
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answers from the source:\nA. Choose Claude for Teams or Enterprise as the API provider so Claude Code and claude.ai share one per-seat subscription with no infrastructure to run\nB. Use server-managed settings delivered from the claude.ai admin console, since it reaches both local and web sessions without requiring MDM\nC. Use the usage dashboard at claude.ai/analytics/claude-code for centralized spend visibility, available on Claude for Teams and Enterprise plans\n\nA. Correct. For a company with no infrastructure to run and both Claude Code and claude.ai usage, Claude for Teams or Enterprise as the provider is the default recommendation, combining both products under one per-seat subscription.\n\nB. Correct. Server-managed settings are delivered from the admin console with no device management infrastructure required, and unlike endpoint-managed settings, they also reach Claude Code on the web, matching the requirement to cover both surfaces.\n\nC. Correct. The usage dashboard at claude.ai/analytics/claude-code is included on Claude for Teams and Enterprise plans and provides the centralized spend visibility the architect needs without building custom OpenTelemetry infrastructure.\n\n**A.** Correct. For a company with no infrastructure to run and both Claude Code and claude.ai usage, Claude for Teams or Enterprise as the provider is the default recommendation, combining both products under one per-seat subscription.\n\n**B.** Correct. Server-managed settings are delivered from the admin console with no device management infrastructure required, and unlike endpoint-managed settings, they also reach Claude Code on the web, matching the requirement to cover both surfaces.\n\n**C.** Correct. The usage dashboard at claude.ai/analytics/claude-code is included on Claude for Teams and Enterprise plans and provides the centralized spend visibility the architect needs without building custom OpenTelemetry infrastructure.\n\n**D.** Incorrect. The company has no existing device management, so introducing MDM as the primary channel contradicts the stated constraint; server-managed settings are the appropriate fit for unmanaged devices instead.\n\n**E.** Incorrect. Project-level settings are the lowest-precedence tier below managed settings and can be freely overridden by local or user settings, so they cannot establish organization-wide, non-overridable policy.\n\n**F.** Incorrect. Server-managed settings are explicitly not available when using third-party model providers like Amazon Bedrock; choosing Bedrock would require a self-hosted Claude apps gateway instead of native server-managed settings, and it does not unify Claude Code and claude.ai billing as required.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 164,
  "id": "ccar-p-q164",
  "type": "single",
  "select": 1,
  "question": "A platform team is wiring Claude Code into a locked-down CI pipeline where no human is available to approve prompts, and only a pre-approved set of tools defined in permission rules should ever run.\n\nWhich permission mode fits this pipeline?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "dontAsk mode, which auto-denies anything not covered by an explicit allow rule"
   },
   {
    "key": "B",
    "text": "acceptEdits mode, which auto-approves file edits and common filesystem commands"
   },
   {
    "key": "C",
    "text": "plan mode, which restricts Claude to reads and a proposed plan with no execution"
   },
   {
    "key": "D",
    "text": "auto mode, which relies on a classifier to approve most actions in real time"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. dontAsk mode, which auto-denies anything not covered by an explicit allow rule\n\nCorrect. dontAsk mode only executes actions matching pre-approved allow rules and read-only commands, auto-denying everything else instead of prompting, which makes a session fully non-interactive and safe for a CI pipeline with no human available.\n\n**A.** Correct. dontAsk mode only executes actions matching pre-approved allow rules and read-only commands, auto-denying everything else instead of prompting, which makes a session fully non-interactive and safe for a CI pipeline with no human available.\n\n**B.** Incorrect. acceptEdits still prompts for Bash commands outside its narrow auto-approved filesystem set, so an unattended CI run could stall waiting on a prompt that no human is present to answer.\n\n**C.** Incorrect. plan mode prevents any execution at all, including of pre-approved tools, so it cannot let a pipeline actually apply pre-approved fixes or changes.\n\n**D.** Incorrect. auto mode uses a classifier to approve actions dynamically rather than restricting execution to a fixed, pre-approved allow list, which does not match the requirement that only pre-approved tools ever run.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 165,
  "id": "ccar-p-q165",
  "type": "single",
  "select": 1,
  "question": "During a long debugging session, Claude Code raises \"Autocompact is thrashing: the context refilled to the limit...\" immediately after automatic compaction completes, and it stops retrying. The team was asking Claude to read an entire 40,000-line production log file to find the root cause of an outage.\n\nWhat is the most effective way to recover and continue the investigation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Raise CLAUDE_CODE_MAX_RETRIES so Claude Code keeps retrying compaction until the log file finishes loading successfully."
   },
   {
    "key": "B",
    "text": "Ask Claude to read the log file in smaller chunks, such as a specific line range, or delegate the analysis to a subagent instead."
   },
   {
    "key": "C",
    "text": "Set DISABLE_AUTO_COMPACT so Claude Code stops summarizing history and keeps the entire log output available for reference."
   },
   {
    "key": "D",
    "text": "Run /clear to discard the conversation, then paste only the final error line from the log file into a fresh session."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nB. Ask Claude to read the log file in smaller chunks, such as a specific line range, or delegate the analysis to a subagent instead.\n\nCorrect. Auto-compaction succeeded but the oversized file output immediately refilled the context window several times in a row, so Claude Code stopped retrying to avoid wasted API calls. Reading the file in smaller chunks or moving the work to a subagent's separate context window is the documented recovery path.\n\n**A.** Incorrect. CLAUDE_CODE_MAX_RETRIES governs retries of failed API requests, not the compaction-thrashing loop. Thrashing happens because the file itself refills the context after each compaction, so retrying compaction more times does not solve the underlying problem.\n\n**B.** Correct. Auto-compaction succeeded but the oversized file output immediately refilled the context window several times in a row, so Claude Code stopped retrying to avoid wasted API calls. Reading the file in smaller chunks or moving the work to a subagent's separate context window is the documented recovery path.\n\n**C.** Incorrect. Disabling auto-compaction removes the safeguard that prevents the context window from overflowing, so it would make the thrashing problem worse, not better, since the full log would still need to fit in context.\n\n**D.** Incorrect. This is more drastic than necessary and discards useful investigation context. The documented recovery steps are to chunk the file, use a targeted /compact, or delegate to a subagent, not to abandon the conversation entirely.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 166,
  "id": "ccar-p-q166",
  "type": "single",
  "select": 1,
  "question": "A team's project relies on an internal MCP server for ticket lookups. Running /mcp shows the server status as connected, but Claude reports it has no tools available from that server and cannot look up tickets.\n\nWhat is the correct next step to diagnose the failure?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Select Reconnect for the server from /mcp, and if the tool count stays at zero, run claude --debug mcp to see the server's stderr output."
   },
   {
    "key": "B",
    "text": "Edit .mcp.json to change the server's command from a relative path to an absolute path, since a relative path always prevents any tools from loading."
   },
   {
    "key": "C",
    "text": "Approve the server from /mcp again, since project-scoped MCP servers silently stop returning tools after the one-time approval expires."
   },
   {
    "key": "D",
    "text": "Restart Claude Code with claude --safe-mode, since a server that reports zero tools while connected is always disabled under safe mode."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer from the source:\nA. Select Reconnect for the server from /mcp, and if the tool count stays at zero, run claude --debug mcp to see the server's stderr output.\n\nCorrect. A server that shows connected but lists zero tools has started but isn't returning a tool list. The documented step is to select Reconnect from /mcp, and if the count stays at zero, run claude --debug mcp to inspect the server's stderr output.\n\n**A.** Correct. A server that shows connected but lists zero tools has started but isn't returning a tool list. The documented step is to select Reconnect from /mcp, and if the count stays at zero, run claude --debug mcp to inspect the server's stderr output.\n\n**B.** Incorrect. A relative path in command or args typically causes the server to fail to start entirely, which shows as failed in /mcp, not connected with zero tools. That is not the situation described here.\n\n**C.** Incorrect. Project-scoped approval does not silently expire; once approved, a server stays enabled. This does not explain a connected server returning no tools.\n\n**D.** Incorrect. Safe mode disables all MCP servers for the session, so the server would not show as connected at all, let alone connected with zero tools. This is not a diagnostic step for this symptom.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 }
];