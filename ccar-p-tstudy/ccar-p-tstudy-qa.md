# CCAR-P-TSTUDY — CCAR-P: Claude Certified Architect – Professional: 166 questions

Source: tstudy.vercel.app (T-Study — data của ThinhNH39). Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).


---

## Q1 · pick 2

You are compiling guardrail tactics for a customer-facing assistant.  
Which two tactics belong on the guardrail list?  
Each correct answer presents a complete solution.

- **A.** Embed approved override phrases that let trusted users relax guardrails on demand.
- **B.** Lower sampling temperature globally to reduce the chance of off-policy completions.
- **C.** Rely on a single hardened system prompt that enumerates every disallowed behavior.
- ✅ **D.** Layer prompt-level guardrails with runtime content checks rather than relying on either alone.
- ✅ **E.** Validate the model output against a structured schema before downstream actions are taken.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
D. Layer prompt-level guardrails with runtime content checks rather than relying on either alone.
E. Validate the model output against a structured schema before downstream actions are taken.

D. Using multiple guardrail layers provides defense in depth. Prompt-level instructions establish behavioral boundaries, while runtime checks can detect or block problematic content before it reaches users or downstream systems.

E. Structured output validation helps ensure that the model response conforms to the expected format and required fields before it is passed to downstream systems. This reduces the risk of malformed or unexpected model output triggering unintended actions.

**A.** Allowing users to bypass guardrails through special phrases can create a security and policy risk. Guardrails should not be easily disabled through conversational instructions, even for trusted users.

**B.** Lowering temperature can make outputs more consistent and predictable, but it is not a reliable substitute for explicit safety controls. Model randomness settings alone cannot enforce policy boundaries.

**C.** A system prompt is an important layer, but relying on one control alone is not sufficient. Complex customer-facing systems benefit from multiple independent safeguards.

**D.** Using multiple guardrail layers provides defense in depth. Prompt-level instructions establish behavioral boundaries, while runtime checks can detect or block problematic content before it reaches users or downstream systems.

**E.** Structured output validation helps ensure that the model response conforms to the expected format and required fields before it is passed to downstream systems. This reduces the risk of malformed or unexpected model output triggering unintended actions.

</details>


---

## Q2 · pick 2

A Claude architect is implementing safety controls for a customer-facing advice assistant that must never provide regulated investment recommendations.  
Which two guardrail implementations most directly enforce this constraint? (Select two.)

- **A.** Increase response temperature to introduce variability that reduces the likelihood of specific recommendations.
- **B.** Log all user queries to a SIEM for post-hoc compliance review.
- **C.** Limit session length to reduce the volume of queries processed per user per day.
- ✅ **D.** Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advicerequests.
- ✅ **E.** Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
D. Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advicerequests.
E. Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.

D. Explicitly defining out-of-scope behavior in the system instructions establishes a clear boundary for the assistant. Fixed refusal guidance also makes the expected response more consistent when users request prohibited investment recommendations.

E. An output classifier provides a runtime enforcement layer that can detect prohibited content before it reaches the customer. This complements prompt-level guardrails and provides an additional control if the model attempts to generate restricted advice.

**A.** Increasing temperature makes responses more variable and less predictable. It does not enforce a safety boundary and could actually make it harder to consistently prevent prohibited investment recommendations.

**B.** Logging supports monitoring, auditing, and investigation, but it is a post-hoc control. It does not directly prevent the assistant from generating a prohibited investment recommendation before the response reaches the user.

**C.** Limiting session length may reduce overall usage, but it does not prevent the model from providing a regulated investment recommendation within an allowed session. It is therefore not a direct enforcement mechanism for this requirement.

**D.** Explicitly defining out-of-scope behavior in the system instructions establishes a clear boundary for the assistant. Fixed refusal guidance also makes the expected response more consistent when users request prohibited investment recommendations.

**E.** An output classifier provides a runtime enforcement layer that can detect prohibited content before it reaches the customer. This complements prompt-level guardrails and provides an additional control if the model attempts to generate restricted advice.

</details>


---

## Q3 · single choice

You are configuring tool permissions for a Claude-based assistant. The assistant's defined responsibilities require read access to a knowledge base and write access to a draft queue, and nothing else.  
Which scoping design best applies least privilege?

- **A.** Allow access to every tool in the catalog and rely on the model to decline tools it should not use.
- ✅ **B.** Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.
- **C.** Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for.
- **D.** Allow access to all tools with read permissions globally and restrict write permissions to the draft- queue tool, without scoping to only the specific tools required for defined tasks.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.

This is the strongest least-privilege design. The assistant receives access to only the two tools required for its defined responsibilities. Enforcing the allow-list at the orchestration layer provides a technical permission boundary rather than relying on the model's behavior.

**A.** This does not follow the least-privilege principle because the assistant receives access to tools it does not need. Relying on the model to voluntarily avoid those tools is not an adequate security control.

**B.** This is the strongest least-privilege design. The assistant receives access to only the two tools required for its defined responsibilities. Enforcing the allow-list at the orchestration layer provides a technical permission boundary rather than relying on the model's behavior.

**C.** Although disabling all tools minimizes permissions, it also prevents the assistant from performing its required responsibilities. Least privilege means granting the minimum permissions necessary to accomplish the intended task, not removing necessary access.

**D.** This still grants unnecessary access to tools outside the assistant's responsibilities. Least privilege requires permissions to be scoped to the specific capabilities the assistant actually needs.

</details>


---

## Q4 · pick 2

You are compiling team-setup practices for a Claude Code rollout across an engineering organization.  
Which two practices belong on the list? (Select two.)  
Each correct answer presents a complete solution.

- **A.** Use project scope for personal editor preferences so the preferences apply consistently within the project.
- ✅ **B.** Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.
- **C.** Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work.
- **D.** Use user scope for team-shared MCP servers so every engineer on the team has consistent access.
- ✅ **E.** Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.

**Answer:** B, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.
E. Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.

B. Managed configuration is appropriate for security-critical controls that need consistent enforcement across the organization. Central management prevents individual engineers from overriding important security policies.

E. Project scope is appropriate for team-shared configuration. Keeping MCP server settings and permission rules under version control improves consistency, reviewability, and change tracking across the engineering organization.

**A.** Project scope is intended for team-shared configuration, not personal preferences. Personal editor preferences should generally remain at the user or local scope so they do not affect other engineers working on the project.

**B.** Managed configuration is appropriate for security-critical controls that need consistent enforcement across the organization. Central management prevents individual engineers from overriding important security policies.

**C.** Security-critical permission rules should not be individually adjustable when organizational consistency is required. Local configuration could allow engineers to weaken or bypass important security controls.

**D.** User scope applies to an individual engineer, not the entire project team. Team-shared MCP servers should be configured at a shared project or managed organizational level.

**E.** Project scope is appropriate for team-shared configuration. Keeping MCP server settings and permission rules under version control improves consistency, reviewability, and change tracking across the engineering organization.

</details>


---

## Q5 · single choice

You are designing a content moderation classifier that processes high volumes of user-generated comments under a tight per-message latency budget using well-defined classification labels.  
Which model selection best aligns with the workload?

- **A.** Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict.
- ✅ **B.** Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.
- **C.** Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling.
- **D.** Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.

Haiku is well suited to fast, high-volume workloads where the task is clearly defined and does not require extensive reasoning. Its efficiency helps meet strict latency requirements while controlling resource consumption.

**A.** Sonnet provides strong general-purpose capabilities, but this workload emphasizes high volume, low latency, and well-defined classification tasks. A lighter model is generally a better fit when deep reasoning is not required.

**B.** Haiku is well suited to fast, high-volume workloads where the task is clearly defined and does not require extensive reasoning. Its efficiency helps meet strict latency requirements while controlling resource consumption.

**C.** Extended Thinking adds deeper reasoning but can increase latency and resource consumption. Applying it to every high-volume classification request is unnecessary when the labels and task are already well defined.

**D.** Maximum reasoning capability is not required for every moderation task. Using a highly capable model for simple, high-volume classification can result in unnecessary cost and latency.

</details>


---

## Q6 · single choice

You are supporting an engineer whose Claude Code session reports a permission denial when the engineer expected the action to be allowed.  
Which resolution step is most appropriate?

- ✅ **A.** Inspect the active permission rules across all scopes-managed, command-line, local, project, and user-to identify which rule is denying the action and confirm whether it should be amended or remain denied.
- **B.** Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional.
- **C.** Disable the permission system entirely across all scopes to remove the denial, eliminating all tool-pattern and deny-rule controls rather than identifying and amending the specific rule.
- **D.** Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool-pattern constraints rather than amending only the rule in

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Inspect the active permission rules across all scopes-managed, command-line, local, project, and user-to identify which rule is denying the action and confirm whether it should be amended or remain denied.

The appropriate approach is to diagnose the active permission configuration rather than bypassing the security controls. Reviewing the applicable rules across scopes helps identify the exact rule responsible for the denial and determine whether the rule is intentional or needs to be changed.

**A.** The appropriate approach is to diagnose the active permission configuration rather than bypassing the security controls. Reviewing the applicable rules across scopes helps identify the exact rule responsible for the denial and determine whether the rule is intentional or needs to be changed.

**B.** Repeated retries do not address the underlying permission configuration. The denial may be intentional, so the correct approach is to inspect and understand the active rules first.

**C.** Disabling the permission system removes important security controls and violates the principle of least privilege. Only the specific rule that is incorrectly denying the required action should be considered for amendment.

**D.** Unrestricted Bash access creates an unnecessarily broad security exposure. The appropriate solution is to identify and adjust the specific permission rule if necessary, rather than granting unrestricted capabilities.

</details>


---

## Q7 · pick 2

A managed agent deployment for claims triage has grown from 6 tools to 34 tools over 18 months as product teams added capabilities. Triage accuracy has declined from 91 percent to 78 percent, and average tool- selection latency has increased by 2.3 seconds. A junior engineer has proposed adding a tool-router agent in front of the current agent to filter the tool list per request.  
Which two findings should you present to justify capability decomposition before adding the router? (Select two.)  
Each correct answer presents part of the solution.

- ✅ **A.** Tool descriptions overlap across multiple claim categories within the agent's tool set.
- **B.** Several tools have not been invoked across the most recent 90 days of traffic.
- **C.** The router pattern is well documented across publicly available agent literature.
- **D.** The proposed router introduces an additional model call on every incoming request.
- ✅ **E.** The 34 tools serve four distinct claim-workflow domains within the triage scope.

**Answer:** A, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers used in this course:
A. Tool descriptions overlap across multiple claim categories within the agent's tool set.
E. The 34 tools serve four distinct claim-workflow domains within the triage scope.

> **⚠️ Answer keys disagree**
> Another practice source marks D and E instead. This course uses these two findings: overlapping tool descriptions and four distinct workflow domains are findings about the current deployment that directly justify splitting it by capability, while the router's extra model call argues against the proposed router rather than for decomposition.

#### Alternative reasoning (supports D and E)

- A. Overlapping tool descriptions can contribute to tool-selection confusion, but this finding alone does not directly establish that the agent should first be decomposed into separate capability domains.

- B. Unused tools are useful evidence for tool rationalization or removal, but they do not directly demonstrate that the 34-tool set should be divided into separate capability domains.

- C. The existence of a documented routing pattern does not establish that it is the right architectural solution for this deployment. The team should first understand the underlying capability structure and performance problem.

- D. Adding another agent introduces additional model-call overhead, which can increase latency and complexity. Since the existing system already has a 2.3-second increase in tool-selection latency, adding another model call may worsen the problem rather than address its root cause.

- E. This is strong evidence for capability decomposition. If the tools naturally fall into four distinct workflow domains, the system can potentially be divided into more focused agents or capability groups, reducing the number of tools each agent must reason over.

</details>


---

## Q8 · single choice

A technical team is debating whether to implement a new capability for generating regulatory filings from internal data as a Claude Skill or as an MCP server. The capability requires a fixed authoring procedure with embedded examples, does not need to call live external systems, and must be portable across three Claude deployments: claude.ai, an internal API integration, and Claude Code.  
Which factor most strongly favors implementing the capability as a Skill?

- **A.** The capability needs to query a live database for the most recent regulatory filings.
- **B.** The capability requires direct authentication against the corporate identity provider.
- ✅ **C.** The capability is procedural knowledge with no live external-system calls required.
- **D.** The capability must also be callable from a developer's command-line interface.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. The capability is procedural knowledge with no live external-system calls required.

This is the strongest reason to choose a Skill. Skills are well suited to reusable procedures, instructions, examples, and domain-specific workflows that Claude can apply when relevant. Since this capability does not need to call live external systems, an MCP server is unnecessary.

**A.** A capability that needs to interact with a live external system is better suited to an MCP-based integration. MCP is designed to connect Claude with external tools, services, and data sources.

**B.** Direct authentication and integration with enterprise systems are characteristics that favor an MCP server or another external integration, rather than a Skill focused on procedural knowledge.

**C.** This is the strongest reason to choose a Skill. Skills are well suited to reusable procedures, instructions, examples, and domain-specific workflows that Claude can apply when relevant. Since this capability does not need to call live external systems, an MCP server is unnecessary.

**D.** Being usable from Claude Code does not by itself make MCP the better choice. The key distinction is whether the capability primarily provides procedural knowledge or requires external tools and system access.

</details>


---

## Q9 · pick 2

A Claude architect is auditing configuration scope assignments.  
Which two statements correctly identify an appropriate use of user-scope configuration versus other scopes?  
(Select two.)

- **A.** Defining MCP server endpoints shared by all contributors to a specific repository.
- **B.** Storing API authentication keys so they are not committed to version control.
- **C.** Enforcing a company-wide policy that disables a feature for all engineers.
- ✅ **D.** Persisting personal editor theme preferences that follow an engineer across projects.
- ✅ **E.** Saving a preferred Claude response language that applies to all repositories the engineer uses.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
D. Persisting personal editor theme preferences that follow an engineer across projects.
E. Saving a preferred Claude response language that applies to all repositories the engineer uses.

D. User scope is appropriate for personal preferences that should follow an individual engineer across different projects. An editor theme is a good example because it does not need to be shared with the entire team.

E. A preferred response language is also an individual user preference. User scope allows the preference to persist across the engineer's different repositories and projects without imposing it on other team members.

**A.** MCP servers shared by contributors to a particular repository are better suited to project scope, because project-level configuration can be shared and maintained with the project rather than tied to one individual engineer.

**B.** Authentication keys and other secrets require secure secret-management practices. Simply placing them in user-scope configuration is not the appropriate general solution for protecting sensitive credentials.

**C.** Company-wide security or policy requirements should be enforced through managed/organizational configuration, rather than user scope. Individual engineers should not be able to override centrally required controls.

**D.** User scope is appropriate for personal preferences that should follow an individual engineer across different projects. An editor theme is a good example because it does not need to be shared with the entire team.

**E.** A preferred response language is also an individual user preference. User scope allows the preference to persist across the engineer's different repositories and projects without imposing it on other team members.

</details>


---

## Q10 · pick 2

A research summarization assistant has been deployed for six months. A user has flagged that a generated summary contained a fabricated citation. The product team has asked whether the incident requires architectural action or whether it is an isolated case.  
Which two Diligence-competency actions should you take? (Select two.)  
Each correct answer presents part of the solution.

- **A.** Disable the assistant immediately for all current users without any prior diagnostic analysis.
- ✅ **B.** Review whether citation-grounding controls exist anywhere in the current generation pipeline.
- ✅ **C.** Sample recent summaries to estimate the fabrication frequency across the population.
- **D.** Treat the incident as an anecdotal isolated case and take no further investigative action.
- **E.** Communicate to users that the assistant does not fabricate output as a matter of design.

**Answer:** B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Review whether citation-grounding controls exist anywhere in the current generation pipeline.
C. Sample recent summaries to estimate the fabrication frequency across the population.

B. Reviewing the existing pipeline determines whether there are controls designed to prevent unsupported or fabricated citations. This helps identify potential architectural weaknesses and whether additional grounding or validation mechanisms are needed.

C. Sampling recent outputs helps determine whether the reported citation is an isolated event or part of a recurring pattern. Measuring the frequency provides evidence for deciding whether broader corrective or architectural action is warranted.

**A.** Immediately disabling the assistant may be appropriate in an extreme safety situation, but this scenario first requires evidence-based investigation. The team needs to understand the scope and cause of the issue before deciding on an architectural response.

**B.** Reviewing the existing pipeline determines whether there are controls designed to prevent unsupported or fabricated citations. This helps identify potential architectural weaknesses and whether additional grounding or validation mechanisms are needed.

**C.** Sampling recent outputs helps determine whether the reported citation is an isolated event or part of a recurring pattern. Measuring the frequency provides evidence for deciding whether broader corrective or architectural action is warranted.

**D.** A single reported incident should not automatically be dismissed. Diligence requires investigating and assessing the broader risk before concluding that the problem is isolated.

**E.** A design intention does not prove that the system cannot produce fabricated content. Such a statement could create a false sense of reliability rather than addressing the reported incident.

</details>


---

## Q11 · single choice

A customer support team has proposed delegating customer refund decisions to a Claude-driven workflow with no human review for refunds under 50 USD. The team's reasoning is that small refunds are low-risk and human review would erase the efficiency gain.  
Which Delegation-competency principle should quide your response?

- **A.** Delegation should be avoided entirely wherever financial transactions occur in the workflow.
- **B.** Delegation should always include human review on every decision the workflow produces.
- ✅ **C.** Delegation scope should reflect the type of risk involved, not the transaction size alone.
- **D.** Delegation scope should be set primarily by maximizing efficiency gains across the workflow.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Delegation scope should reflect the type of risk involved, not the transaction size alone.

The risk associated with an action is more important than the dollar amount alone. Even a small refund could involve fraud, customer disputes, policy exceptions, or other consequences. Delegation should therefore consider factors such as financial, legal, customer, and reputational risk when determining the appropriate level of human oversight.

**A.** Delegation is not automatically inappropriate simply because a workflow involves financial transactions. The appropriate approach is to assess the specific risks and consequences and determine what level of human oversight is necessary.

**B.** Human review is important for higher-risk decisions, but requiring manual review for every single decision is unnecessarily rigid. Appropriate delegation depends on the risk associated with the task and its potential impact.

**C.** The risk associated with an action is more important than the dollar amount alone. Even a small refund could involve fraud, customer disputes, policy exceptions, or other consequences. Delegation should therefore consider factors such as financial, legal, customer, and reputational risk when determining the appropriate level of human oversight.

**D.** Efficiency is an important consideration, but it should not override risk management and accountability. Delegation decisions should balance productivity with the potential consequences of automated decisions.

</details>


---

## Q12 · single choice

You must present an architectural recommendation to deploy a Claude-based contract review assistant to a steering committee that includes the CFO, the general counsel, and the CIO. Each stakeholder cares about different aspects of the decision.  
How should you structure the recommendation document?

- **A.** Lead with detailed cost projections across the full multi-year horizon before the rationale section.
- **B.** Lead with the technical architecture diagram and the full component list before any other section.
- **C.** Present the same dense narrative throughout with no stakeholder differentiation in any section.
- ✅ **D.** Lead with the architectural decision, then address each stakeholder's primary concerns directly.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Lead with the architectural decision, then address each stakeholder's primary concerns directly.

The strongest approach is to state the recommendation clearly at the beginning and then address the key concerns of each stakeholder. For example, the CFO may focus on cost and ROI, the General Counsel on legal risk and compliance, and the CIO on architecture, security, integration, and operational considerations.
This structure makes the recommendation decision-oriented, concise, and relevant to the entire steering committee.

**A.** Cost is highly relevant to the CFO, but leading exclusively with detailed financial projections may not address the legal, technical, and strategic concerns of the other stakeholders.

**B.** The technical architecture is particularly important to the CIO, but beginning with a detailed component list may overwhelm stakeholders who primarily need to understand the decision, rationale, risks, and business impact.

**C.** Different stakeholders have different responsibilities and concerns. A one-size-fits-all narrative may fail to address the specific information each decision-maker needs.

**D.** The strongest approach is to state the recommendation clearly at the beginning and then address the key concerns of each stakeholder. For example, the CFO may focus on cost and ROI, the General Counsel on legal risk and compliance, and the CIO on architecture, security, integration, and operational considerations.
This structure makes the recommendation decision-oriented, concise, and relevant to the entire steering committee.

</details>


---

## Q13 · single choice

You are investigating an MCP server that fails on first launch but succeeds on subsequent runs. System permission dialogs appeared during the first launch.  
Which response is most appropriate?

- **A.** Treat the first-run failure as a permanent fault, replace the MCP server, and do not verify whether subsequent runs succeed.
- **B.** Reinstall the operating system to clear all permission state without first confirming whether the one- time permission grant caused the failure.
- ✅ **C.** Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.
- **D.** Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.

The appearance of system permission dialogs during the first launch is a strong indication that the initial failure was related to one-time operating-system authorization. The appropriate response is to document this expected first-run behavior and verify that the MCP server works normally afterward.

**A.** The fact that the MCP server succeeds on subsequent runs strongly suggests that the initial failure may be related to first-run permissions or authorization. Replacing the server without investigating would be unnecessary and could fail to address the actual cause.

**B.** Reinstalling the operating system is an extreme and unnecessary troubleshooting step. The permission dialogs provide a much more relevant clue that should be investigated first.

**C.** The appearance of system permission dialogs during the first launch is a strong indication that the initial failure was related to one-time operating-system authorization. The appropriate response is to document this expected first-run behavior and verify that the MCP server works normally afterward.

**D.** Disabling operating-system permission controls unnecessarily weakens security protections. The better approach is to understand the permission requirement, document it, and verify successful subsequent operation.

</details>


---

## Q14 · pick 2

You are producing an architecture guide for a new deployment and must complete the planning steps before  
drafting each section.  
Which two steps must be completed BEFORE drafting each section of the guide? (Select two.) Each correct answer presents part of the solution.

- **A.** Translate the guide into the supported regional languages for the candidate population.
- **B.** Establish the document under version control with a defined review cadence and approver list.
- ✅ **C.** Identify the audience and the questions the guide must answer for that audience.
- ✅ **D.** Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.
- **E.** Validate the guide with the implementation team and incorporate corrections.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Identify the audience and the questions the guide must answer for that audience.
D. Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.

C. Before writing, you should understand the intended audience and their information needs. This ensures that each section is written at the appropriate technical level and addresses the questions stakeholders actually need answered.

D. Creating an outline establishes the guide's structure and scope before detailed writing begins. It helps ensure important architecture topics are covered systematically and prevents unnecessary duplication or omissions.

**A.** Translation is a later-stage activity. Before drafting, the priority is to establish who the guide is for and what information it needs to contain.

**B.** Version control, review cadence, and approval processes are valuable for document governance, but they are not the primary content-planning steps required before drafting the sections.

**C.** Before writing, you should understand the intended audience and their information needs. This ensures that each section is written at the appropriate technical level and addresses the questions stakeholders actually need answered.

**D.** Creating an outline establishes the guide's structure and scope before detailed writing begins. It helps ensure important architecture topics are covered systematically and prevents unnecessary duplication or omissions.

**E.** Validation with the implementation team is an important review and refinement step, but it happens after the relevant content has been drafted rather than before drafting each section.

</details>


---

## Q15 · single choice

You are responding to an adversarial input pattern in which users include text claiming admin authority and instructing the model to bypass safety restrictions.  
Which combination of controls most effectively mitigates this attack pattern?

- ✅ **A.** Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.
- **B.** Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification.
- **C.** Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging.
- **D.** Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.

This approach provides defense in depth. User-provided claims of authority are treated as untrusted input, runtime controls can identify suspicious override attempts, and scoped permissions prevent the user from escalating privileges simply through prompt content. Audit logging also supports monitoring, investigation, and incident response.

**A.** This approach provides defense in depth. User-provided claims of authority are treated as untrusted input, runtime controls can identify suspicious override attempts, and scoped permissions prevent the user from escalating privileges simply through prompt content. Audit logging also supports monitoring, investigation, and incident response.

**B.** User-supplied text is not a reliable source of authorization. Allowing users to declare their own privileges creates a serious privilege-escalation risk.

**C.** A model should not be treated as the sole security boundary. Multiple technical and procedural controls are needed because adversarial inputs can sometimes bypass model-level instructions.

**D.** Removing safety controls does not mitigate the attack; it eliminates the protections that are intended to prevent unsafe behavior.

</details>


---

## Q16 · single choice

You are a solution architect designing a Claude-based assistant with access to 60 internal tools across multiple business domains. Loading every tool definition on every request increases token usage and time to first response.  
Which design pattern best addresses this issue without sacrificing capability breadth?

- **A.** Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability.
- ✅ **B.** Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.
- **C.** Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task.
- **D.** Use a separate model call to summarize all 60 tool definitions before each user turn.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.

Progressive tool discovery reduces the amount of tool information that must be loaded initially. A relevant subset can be exposed first, and additional tools can be discovered or loaded when the task requires them. This preserves broad capability while reducing initial token usage and latency.

**A.** Increasing context capacity does not solve the underlying efficiency problem. Loading all 60 tool definitions on every request still consumes tokens and processing time, even when most tools are irrelevant to the current task.

**B.** Progressive tool discovery reduces the amount of tool information that must be loaded initially. A relevant subset can be exposed first, and additional tools can be discovered or loaded when the task requires them. This preserves broad capability while reducing initial token usage and latency.

**C.** Although this reduces token usage, it can restrict capability and prevent Claude from accessing tools required for a particular request. The selection should be task-relevant rather than an arbitrary fixed number.

**D.** This adds another model call and therefore introduces additional latency and resource consumption. It also does not necessarily provide Claude with the precise tool definitions needed for reliable tool use.

</details>


---

## Q17 · single choice

You are presenting an architectural decision to a mixed audience that includes an executive sponsor and the engineering leads who will implement the decision.  
Which presentation strategy best serves both audiences?

- **A.** Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs.
- **B.** Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it.
- ✅ **C.** Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.
- **D.** Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.

This structure serves both audiences effectively. Executives get the decision, business value, and key trade-offs early, while engineering leads receive the technical rationale, alternatives, and implementation details needed to execute the decision.

**A.** This approach focuses almost entirely on the engineering audience and fails to address the executive sponsor's need to understand business outcomes, strategic rationale, risks, and trade-offs.

**B.** Simply announcing the decision does not provide enough context. Both audiences need to understand why the decision was made, what alternatives were considered, and what trade-offs were accepted.

**C.** This structure serves both audiences effectively. Executives get the decision, business value, and key trade-offs early, while engineering leads receive the technical rationale, alternatives, and implementation details needed to execute the decision.

**D.** Different stakeholders have different information needs. Giving every section equal technical and business depth can make the presentation less focused and less useful for both audiences.

</details>


---

## Q18 · pick 2

You are designing a test strategy for a Claude-based pipeline that handles sensitive financial data. hich two test types should be prioritized to cover both safety under attack and cross-component correctness?  
(Select two.)

- ✅ **A.** Integration tests that verify end-to-end pipeline behavior across all components.
- **B.** Smoke tests that verify core paths after each deployment.
- **C.** Unit tests targeting only individual prompt-template rendering logic.
- **D.** Regression tests against a stable reference set of previously known-good outputs.
- ✅ **E.** Adversarial tests using prompt-injection and malformed-input cases.

**Answer:** A, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Integration tests that verify end-to-end pipeline behavior across all components.
E. Adversarial tests using prompt-injection and malformed-input cases.

A. Integration tests verify that the different components of the pipeline work correctly together. For a sensitive financial-data workflow, this is important because failures can occur at the boundaries between components even when individual components work correctly in isolation.

E. Adversarial testing directly evaluates how the system behaves under malicious, unexpected, or malformed inputs. For a financial-data pipeline, this helps identify safety weaknesses and potential ways attackers could manipulate the system.

A = Cross-component correctness
E = Safety under attack

**A.** Integration tests verify that the different components of the pipeline work correctly together. For a sensitive financial-data workflow, this is important because failures can occur at the boundaries between components even when individual components work correctly in isolation.

**B.** Smoke tests are useful for quickly checking whether the system's basic functionality works after deployment, but they do not provide sufficient coverage for adversarial safety or detailed cross-component correctness.

**C.** Unit tests are valuable for testing isolated logic, but testing only prompt-template rendering does not adequately cover the end-to-end pipeline or attacks such as prompt injection and malformed inputs.

**D.** Regression testing is useful for detecting unexpected changes in output behavior, but it does not directly provide targeted coverage for adversarial attacks or verify all cross-component interactions.

**E.** Adversarial testing directly evaluates how the system behaves under malicious, unexpected, or malformed inputs. For a financial-data pipeline, this helps identify safety weaknesses and potential ways attackers could manipulate the system.

</details>


---

## Q19 · pick 2

You are running a risk assessment on a planned Claude-based deployment and must complete the inventory steps before assessing threats against assets.  
Which two steps must be completed BEFORE assessing threats against assets to estimate likelihood and impact?  
(Select two.) Each correct answer presents part of the solution.

- **A.** Recommend mitigations and residual-risk acceptance for the risks that remain after analysis.
- **B.** Recommend mitigations and residual-risk acceptance for risks that remain.
- ✅ **C.** Enumerate the threat actors and attack vectors relevant to the deployment.
- **D.** Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners.
- ✅ **E.** Identify the assets that the deployment touches, along with the sensitivity of each asset.

**Answer:** C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Enumerate the threat actors and attack vectors relevant to the deployment.
E. Identify the assets that the deployment touches, along with the sensitivity of each asset.

C. Identifying relevant threat actors and attack vectors is necessary before estimating risk. Understanding who could attack the system and how they might do so helps establish the likelihood and potential impact of threats against the identified assets.

E. Asset identification is a foundational step. Knowing which assets are involved and how sensitive they are provides the basis for evaluating the potential impact if those assets are compromised.

C = Identify relevant threats and attack vectors
E = Identify affected assets and their sensitivity

**A.** Mitigations and residual-risk acceptance are later stages of the risk-assessment process. You first need to identify the assets and relevant threats before determining appropriate controls.

**B.** This is also a post-analysis activity. Mitigation decisions depend on understanding the risks, their likelihood, their impact, and the controls already available.

**C.** Identifying relevant threat actors and attack vectors is necessary before estimating risk. Understanding who could attack the system and how they might do so helps establish the likelihood and potential impact of threats against the identified assets.

**D.** Documenting the final assessment is generally performed after the analysis has been completed. You need the risk findings and mitigation decisions before producing the final assessment record.

**E.** Asset identification is a foundational step. Knowing which assets are involved and how sensitive they are provides the basis for evaluating the potential impact if those assets are compromised.

</details>


---

## Q20 · pick 2

A senior architect is managing stakeholder expectations for a Claude-based reporting assistant midway through development. Stakeholders have escalating concerns about response latency.  
Which two actions most directly address stakeholder expectation alignment in this situation? (Select two.)

- **A.** Replace the current Claude model with a third-party model that may offer lower latency without evaluation.
- **B.** Pause all development and reallocate engineering resources entirely to latency optimization.
- ✅ **C.** Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.
- ✅ **D.** Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.
- **E.** Communicate that latency concerns are a known LLM limitation and outside the architecture team's control.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.
D. Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.

C. Providing objective performance measurements gives stakeholders a clear understanding of the current state. Comparing p50 and p95 latency with the agreed SLA helps distinguish actual performance gaps from perception and supports informed decisions.

D. If the original SLA is unrealistic given validated production constraints, the appropriate approach is to review and revise it collaboratively with stakeholders. This creates shared expectations rather than silently accepting an unachievable target.

C = Establish objective latency baselines against the SLA
D = Collaboratively revise the SLA when justified by production constraints

**A.** Replacing the model without proper evaluation does not address stakeholder alignment. It could introduce new quality, security, compatibility, or performance risks. Model changes should be based on measured requirements and controlled evaluation.

**B.** This is a broad project-management decision rather than a direct stakeholder-alignment action. It may also unnecessarily disrupt other development priorities without first establishing the actual performance gap.

**C.** Providing objective performance measurements gives stakeholders a clear understanding of the current state. Comparing p50 and p95 latency with the agreed SLA helps distinguish actual performance gaps from perception and supports informed decisions.

**D.** If the original SLA is unrealistic given validated production constraints, the appropriate approach is to review and revise it collaboratively with stakeholders. This creates shared expectations rather than silently accepting an unachievable target.

**E.** This approach dismisses stakeholder concerns instead of addressing them. Architecture teams should provide measured evidence, options, and trade-offs rather than treating performance as completely outside their responsibility.

</details>


---

## Q21 · pick 2

A Claude architect is designing a HIPAA-compliant pipeline that processes patient records.  
Which two design decisions directly support HIPAA compliance requirements? (Select two.)

- **A.** Setting max_tokens to a low value to minimize the volume of text generated per request.
- **B.** Selecting the highest-capability Claude model to maximize diagnostic accuracy.
- ✅ **C.** Enforcing role-based access controls so that PH is retrievable only by authorized personnel.
- ✅ **D.** Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.
- **E.** Using streaming responses to reduce perceived latency for clinical users.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Enforcing role-based access controls so that PH is retrievable only by authorized personnel.
D. Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.

C. Role-based access control (RBAC) limits access to protected health information (PHI) based on authorized roles. Restricting PHI access to appropriate personnel supports the principle of controlled access required when handling sensitive healthcare information.

D. Patient information requires appropriate privacy and contractual safeguards when processed by an external service provider. Ensuring PHI is not improperly used in provider training or feedback processes, and having the appropriate Business Associate Agreement (BAA) where required, directly supports HIPAA compliance.

C = Enforce role-based access to PHI
D = Apply appropriate PHI data-handling and BAA safeguards

**A.** Reducing the maximum number of generated tokens can help control cost and output length, but it does not directly address HIPAA requirements such as access control, protection of protected health information, or appropriate contractual safeguards.

**B.** Model capability and HIPAA compliance are separate concerns. Choosing a more capable model does not by itself provide the privacy, access-control, contractual, or data-handling protections required for compliant processing.

**C.** Role-based access control (RBAC) limits access to protected health information (PHI) based on authorized roles. Restricting PHI access to appropriate personnel supports the principle of controlled access required when handling sensitive healthcare information.

**D.** Patient information requires appropriate privacy and contractual safeguards when processed by an external service provider. Ensuring PHI is not improperly used in provider training or feedback processes, and having the appropriate Business Associate Agreement (BAA) where required, directly supports HIPAA compliance.

**E.** Streaming can improve the user experience and perceived response speed, but it does not directly establish HIPAA privacy or security compliance.

</details>


---

## Q22 · single choice

You are preparing an operational runbook for a Claude-based service.  
Which content is essential to include in the runbook?

- **A.** Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on.
- ✅ **B.** Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.
- **C.** Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use.
- **D.** Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.

A strong operational runbook should provide actionable guidance for incident response. It should explain common alerts, initial triage, escalation procedures, rollback or recovery steps, and where to find the relevant monitoring information.

**A.** Dashboards and logs are useful, but references alone do not tell the on-call engineer what the alert means, how to investigate it, who to contact, or how to recover the service.

**B.** A strong operational runbook should provide actionable guidance for incident response. It should explain common alerts, initial triage, escalation procedures, rollback or recovery steps, and where to find the relevant monitoring information.

**C.** Alert definitions and triage are important, but they are incomplete without escalation paths, recovery procedures, and monitoring references.

**D.** Rollback and escalation procedures are valuable, but the on-call engineer also needs to know how to recognize and investigate the incident before escalating or rolling back.

</details>


---

## Q23 · pick 2

A technical team is cataloguing risks specific to Claude's use in a document-grounded Q & A system.  
Which two items represent failure modes intrinsic to LLM-based systems rather than generic software defects?  
(Select two.)

- **A.** An expired TLS certificate blocks outbound API calls to Claude.
- **B.** A database connection timeout causes retrieval to return an empty result set.
- ✅ **C.** The model refuses a legitimate query because surface features trigger an overly broad safety pattern.
- **D.** A misconfigured load balancer routes requests to a deprecated API version.
- ✅ **E.** The model generates a plausible-sounding answer unsupported by any retrieved document.

**Answer:** C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. The model refuses a legitimate query because surface features trigger an overly broad safety pattern.
E. The model generates a plausible-sounding answer unsupported by any retrieved document.

C. This is an LLM-specific failure mode. Safety systems can sometimes produce over-refusals, where a legitimate request is incorrectly classified as unsafe because of particular words or patterns in the input.

E. This is a classic hallucination/grounding failure. An LLM can generate an answer that sounds convincing even when the available source documents do not support the claim. This is particularly important in document-grounded Q&A systems.

C = Over-refusal of legitimate requests
E = Plausible but unsupported generated answers

**A.** An expired TLS certificate is a general infrastructure and security configuration problem. It can affect many types of applications and is not specific to LLM behavior.

**B.** A database connection timeout is a generic integration or infrastructure failure. It is not an intrinsic failure mode of the language model itself.

**C.** This is an LLM-specific failure mode. Safety systems can sometimes produce over-refusals, where a legitimate request is incorrectly classified as unsafe because of particular words or patterns in the input.

**D.** This is a deployment and infrastructure configuration issue, not an intrinsic LLM failure mode.

**E.** This is a classic hallucination/grounding failure. An LLM can generate an answer that sounds convincing even when the available source documents do not support the claim. This is particularly important in document-grounded Q&A systems.

</details>


---

## Q24 · pick 2

You are rolling out monitoring for a Claude-based deployment and must complete the specification steps efore instrumenting the deployment.  
Which two steps must be completed BEFORE instrumenting the deployment to emit metrics and traces?  
(Select two.)  
Each correct answer presents part of the solution.

- ✅ **A.** Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.
- **B.** Tune the alert thresholds based on observed normal-state distributions to reduce false positives.
- ✅ **C.** Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.
- **D.** Build the dashboards that surface metrics across slices at the cadence the team operates on.
- **E.** Document the dashboards, alerts, and runbooks for the on-call rotation that will respond.

**Answer:** A, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.
C. Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.

A. Before instrumentation, you need to determine what you are going to measure. Defining the metrics and relevant slices establishes the observability requirements and ensures the deployment collects meaningful data for both normal and adversarial traffic.

C. SLOs establish the target level of service performance and reliability. Defining them before instrumentation ensures the metrics and telemetry collected can be evaluated against meaningful objectives and error budgets.

A = Define what to measure and how to slice the data
C = Define SLOs and error budgets

**A.** Before instrumentation, you need to determine what you are going to measure. Defining the metrics and relevant slices establishes the observability requirements and ensures the deployment collects meaningful data for both normal and adversarial traffic.

**B.** Threshold tuning requires observed operational data. That data generally becomes available only after instrumentation has been implemented and the system has produced baseline measurements.

**C.** SLOs establish the target level of service performance and reliability. Defining them before instrumentation ensures the metrics and telemetry collected can be evaluated against meaningful objectives and error budgets.

**D.** Dashboards depend on the metrics and telemetry being available. While dashboard requirements can be planned early, building the operational dashboards is normally part of the implementation after the monitoring specifications have been defined.

**E.** Runbooks and operational documentation are important, but they should be developed after the monitoring requirements, instrumentation, dashboards, and alerting behavior have been established.

</details>


---

## Q25 · single choice

A document analysis service processes legal filings averaging 80,000 tokens each. Each filing is queried by attorneys an average of 14 times during a case. The current architecture sends the full filing on every query.  
The CFO has asked you to reduce per-query costs while preserving response quality. The security officer requires that filing contents not be stored outside Fabrikam's tenancy.  
Which optimization approach should you recommend?

- **A.** Summarize each filing once at intake and run all subsequent queries against the summary.
- ✅ **B.** Cache the filing as the prompt prefix for reuse across the 14 queries per case.
- **C.** Index filings in a vector store and retrieve only the relevant passages per query.
- **D.** Move the workload to a smaller Claude model to reduce the per-token cost paid.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Cache the filing as the prompt prefix for reuse across the 14 queries per case.

Caching the repeated filing content as a prompt prefix can reduce the cost associated with repeatedly processing the same large context. Since the same 80,000-token filing is reused across approximately 14 queries, caching is particularly valuable. The implementation can also be designed to keep the filing within Fabrikam's controlled environment and approved data-handling boundaries.

**A.** Summarizing the filing once can reduce the amount of context used later, but it may discard important legal details needed for subsequent attorney questions. For legal filings, losing precise language or specific clauses can reduce response quality.

**B.** Caching the repeated filing content as a prompt prefix can reduce the cost associated with repeatedly processing the same large context. Since the same 80,000-token filing is reused across approximately 14 queries, caching is particularly valuable. The implementation can also be designed to keep the filing within Fabrikam's controlled environment and approved data-handling boundaries.

**C.** Retrieval can reduce the amount of context sent for each query, but it requires storing and indexing the filing content in a vector store. Given the explicit requirement that filing contents not be stored outside Fabrikam's tenancy, an externally hosted vector store would be unsuitable unless it is explicitly within the required tenancy and security boundary.

**D.** A smaller model may reduce cost, but it could also affect response quality, especially for complex legal-document analysis. The requirement specifically calls for preserving quality, so reducing model capability is not the most direct optimization.

</details>


---

## Q26 · single choice

When communicating an architectural decision to a security and compliance reviewer, which content set is most aligned with that audience's primary concerns?

- **A.** Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager.
- **B.** Implementation timeline, component interfaces, and deployment sequence for the engineering team.
- ✅ **C.** Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.
- **D.** Decision rationale, business outcomes, and high-level risk summary for executive review.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.

This content directly addresses the primary concerns of security and compliance reviewers. They need to understand the threats being considered, which controls mitigate those threats, what residual risks remain, who accepts those risks, and how the decisions can be demonstrated during an audit.

**A.** This information is primarily relevant to a product manager. While delivery timelines and scope can matter to security teams, they do not directly address the reviewer's main concerns around security controls, threats, compliance, and auditability.

**B.** These details are mainly intended for the engineering implementation team. They explain how the system will be built and deployed but do not provide sufficient evidence about security risks and compliance controls.

**C.** This content directly addresses the primary concerns of security and compliance reviewers. They need to understand the threats being considered, which controls mitigate those threats, what residual risks remain, who accepts those risks, and how the decisions can be demonstrated during an audit.

**D.** These elements are more appropriate for an executive audience. Executives generally need the decision, business value, and high-level risks rather than detailed control mappings and audit evidence.

</details>


---

## Q27 · single choice

You are integrating Claude Code into a workflow that runs against a production database.  
Which guardrail design most directly preserves safety on data-modifying operations?

- **A.** Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations.
- **B.** Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation.
- **C.** Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications.
- ✅ **D.** Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.

This provides defense in depth. Read-only credentials establish a safe default, tool scoping limits what the subagent can access, and explicit human confirmation creates an additional control before potentially destructive or consequential operations are performed.

**A.** This design provides excessive privileges and removes important safety controls. A production database should not be exposed to unrestricted automated write operations because an unintended action could modify or delete critical data.

**B.** A fully privileged credential violates the principle of least privilege. Removing confirmation for write operations also eliminates an important human control over potentially irreversible changes.

**C.** Disabling logging removes valuable auditability and observability. Production database operations should generally be traceable so unexpected or unauthorized changes can be investigated.

**D.** This provides defense in depth. Read-only credentials establish a safe default, tool scoping limits what the subagent can access, and explicit human confirmation creates an additional control before potentially destructive or consequential operations are performed.

</details>


---

## Q28 · single choice

You are identifying signals that a deployment should re-enter design rather than continue iterating in place.  
Which signal most directly indicates the need for a new design cycle?

- **A.** A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts.
- **B.** A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle.
- **C.** A minor copy edit is requested in a customer-facing string within the existing Ul, which can be handled as a localized content change without altering component responsibilities or contracts.
- ✅ **D.** The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.

This is the clearest signal that the system needs to re-enter the design cycle. Changes to component responsibilities or core contracts affect fundamental architectural decisions and should be evaluated through a new design process rather than handled as routine iteration.

**A.** This is a documentation-level change. It does not alter the system's architecture, component responsibilities, or contracts, so a new design cycle is unnecessary.

**B.** A small alert-threshold adjustment is an operational tuning change. It can be made without revisiting the underlying architecture.

**C.** A copy change is a localized content modification and does not require architectural redesign when the existing components and contracts remain unchanged.

**D.** This is the clearest signal that the system needs to re-enter the design cycle. Changes to component responsibilities or core contracts affect fundamental architectural decisions and should be evaluated through a new design process rather than handled as routine iteration.

</details>


---

## Q29 · single choice

You are reviewing a peer's Claude Code permission rules for an enterprise rollout. The rules grant unrestricted  
Bash access to all projects across all developers.  
Which response is most appropriate?

- **A.** Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency.
- **B.** Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add nfiguration complexity, accepting the full attack surface for all engineers across all projects.
- ✅ **C.** Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.
- **D.** Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.

This is the safest approach. Narrowly scoped permissions ensure Claude Code can perform the required operations without unnecessary privileges. Explicit deny rules provide an additional layer of protection for sensitive commands and operations.

**A.** Expanding unrestricted access does not solve the security problem. It would increase the attack surface and give developers broader capabilities than their workflows require.

**B.** Enterprise permissions should follow the principle of least privilege. Configuration complexity is not a sufficient reason to accept unrestricted access to potentially powerful commands.

**C.** This is the safest approach. Narrowly scoped permissions ensure Claude Code can perform the required operations without unnecessary privileges. Explicit deny rules provide an additional layer of protection for sensitive commands and operations.

**D.** Disabling permissions entirely removes the security boundary and creates an unnecessarily large attack surface. Enterprise deployments require controlled and auditable access.

</details>


---

## Q30 · single choice

A solutions architect is analyzing stakeholder feedback collected after the first quarter of a Claude-powered procurement automation deployment. The feedback includes four statements:  
(1) "Our procurement team is processing 3x more purchase orders per analyst per day."  
(2) "We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management."  
(3) "The API integration costs are running 40% over the projected per-transaction budget."  
(4) "Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA."  
Which of the following correctly identifies the primary business value pillar each stakeholder statement represents?

- ✅ **A.** Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4:Performance SLA
- **B.** Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4:Performance SLA
- **C.** Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4:Efficiency
- **D.** Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4:Solution Cost

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4:Performance SLA

Statement 1 represents Efficiency because the team is processing significantly more purchase orders per analyst, demonstrating improved operational efficiency.
Statement 2 represents Transformation because the workflow has changed the way work is performed, eliminating a manual role and redeploying employees to a higher-value activity.
Statement 3 represents Solution Cost because it directly concerns the actual cost of operating the API integration compared with the planned budget.
Statement 4 represents Performance SLA because the observed 11-second latency is being compared directly against the committed 5-second SLA.

Statement 1 = Efficiency
Statement 2 = Transformation
Statement 3 = Solution Cost
Statement 4 = Performance SLA

**A.** Statement 1 represents Efficiency because the team is processing significantly more purchase orders per analyst, demonstrating improved operational efficiency.
Statement 2 represents Transformation because the workflow has changed the way work is performed, eliminating a manual role and redeploying employees to a higher-value activity.
Statement 3 represents Solution Cost because it directly concerns the actual cost of operating the API integration compared with the planned budget.
Statement 4 represents Performance SLA because the observed 11-second latency is being compared directly against the committed 5-second SLA.

**B.** Although Statement 3 and Statement 4 are correctly classified, Statement 2 describes a broader organizational/workflow transformation, not merely an efficiency improvement. The elimination of manual data entry and redeployment of staff represents a change in how the organization operates.

**C.** Statement 1 is primarily about efficiency, since it measures purchase orders processed per analyst. Statement 2 represents transformation, while Statement 4 clearly concerns an SLA rather than general efficiency.

**D.** This option reverses the classifications for Statements 3 and 4. The 40% cost overrun is a Solution Cost issue, while the 11-second response time versus the 5-second SLA is a Performance SLA issue.

</details>


---

## Q31 · pick 2

An operations engineer reports that a Claude-based pipeline began returning malformed JSON responses after a scheduled maintenance window, causing downstream processing failures.  
Which two investigative steps most directly isolate the root cause? (Select two.)

- **A.** Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes.
- ✅ **B.** Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.
- **C.** Switch to a different Claude model tier to rule out provider-side changes as a contributing factor.
- **D.** Increase the max_tokens limit to determine whether output truncation is causing incomplete JSON structures.
- ✅ **E.** Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing.

**Answer:** B, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.
E. Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing.

B. The problem started immediately after a maintenance window, so comparing the current configuration with the last known good configuration is an effective way to identify changes that may have introduced the malformed JSON behavior.

E. Replaying known premaintenance requests provides a controlled way to compare behavior. Inspecting the raw model output before downstream parsing helps determine whether Claude is producing malformed JSON or whether the problem occurs later in the pipeline.

B = Compare current and last known-good configuration
E = Replay known requests and inspect raw output before parsing

**A.** There is no evidence that stale cached prefixes caused the problem. Clearing the cache before establishing a baseline could introduce unnecessary changes and make the investigation harder to isolate.

**B.** The problem started immediately after a maintenance window, so comparing the current configuration with the last known good configuration is an effective way to identify changes that may have introduced the malformed JSON behavior.

**C.** Changing the model introduces another variable into the investigation. The existing configuration should first be examined to determine whether a maintenance-related configuration change caused the issue.

**D.** Output truncation can cause malformed JSON, but there is no evidence that token limits are the cause here. Increasing max_tokens would be a configuration change before the underlying cause is established.

**E.** Replaying known premaintenance requests provides a controlled way to compare behavior. Inspecting the raw model output before downstream parsing helps determine whether Claude is producing malformed JSON or whether the problem occurs later in the pipeline.

</details>


---

## Q32 · pick 2

You are compiling a diagnostic toolkit for Claude Code operational issues.  
Which two diagnostic actions belong in the toolkit? (Select two.)  
Each correct answer presents a complete solution.

- **A.** Increase the model sampling temperature so that intermittent issues surface more frequently for analysis.
- **B.** File a support ticket with vendor support before any local reproduction or evidence collection.
- ✅ **C.** Reproduce the issue with a minimal reproduction case that isolates one variable at a time.
- **D.** Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific.
- ✅ **E.** List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.

**Answer:** C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Reproduce the issue with a minimal reproduction case that isolates one variable at a time.
E. List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.

C. A minimal reproduction case is a fundamental troubleshooting technique. By reducing the workflow and changing one variable at a time, you can determine which component or configuration is responsible for the failure.

E. MCP servers are important dependencies in Claude Code workflows. Checking the configured servers and their status can quickly identify connection, availability, or configuration problems that may be causing the operational issue.

C = Reproduce the issue using a minimal reproduction case.
E = Inspect configured MCP servers and their connection status.

**A.** Changing the sampling temperature introduces another variable and can make the system's behavior less consistent. It is not a reliable first-line diagnostic technique for isolating Claude Code operational issues.

**B.** Support escalation can be appropriate when internal investigation is insufficient, but you should first reproduce the issue and collect relevant evidence whenever possible. This gives the support team useful diagnostic information.

**C.** A minimal reproduction case is a fundamental troubleshooting technique. By reducing the workflow and changing one variable at a time, you can determine which component or configuration is responsible for the failure.

**D.** An immediate rollback changes the environment before the issue has been properly characterized. Version comparison can be useful later, but first you should collect evidence and isolate the problem.

**E.** MCP servers are important dependencies in Claude Code workflows. Checking the configured servers and their status can quickly identify connection, availability, or configuration problems that may be causing the operational issue.

</details>


---

## Q33 · single choice

You are assessing data-exfiltration risk in a Claude-based assistant that has tools for both internal-document retrieval and outbound HTTP calls.  
Which scenario most directly indicates a data-exfiltration risk?

- **A.** The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request.
- **B.** The user submits a routine question and receives a routine answer.
- ✅ **C.** Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.
- **D.** The internal-document retrieval tool returns a document that the user is authorized to view.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.

This is a direct data-exfiltration scenario. The retrieved document contains adversarial instructions attempting to manipulate the model into sending sensitive information to an attacker-controlled destination. This is a classic example of indirect prompt injection combined with an outbound tool, creating a serious security risk.

C = Adversarial retrieved content attempts to send sensitive data to an attacker-controlled URL.

**A.** This describes a normal, authorized tool interaction. The destination is allow-listed, and the request was initiated by the user for a legitimate purpose. There is no indication that sensitive information is being sent to an unauthorized destination.

**B.** A routine question producing a routine answer does not indicate data exfiltration. There is no evidence of unauthorized data access or transmission.

**C.** This is a direct data-exfiltration scenario. The retrieved document contains adversarial instructions attempting to manipulate the model into sending sensitive information to an attacker-controlled destination. This is a classic example of indirect prompt injection combined with an outbound tool, creating a serious security risk.

**D.** The user is authorized to access the document, so the retrieval itself does not indicate unauthorized disclosure or exfiltration.

</details>


---

## Q34 · single choice

After a prompt-template update, several previously passing test cases now produce unexpected outputs.  
Which test type is specifically designed to detect this category of failure?

- **A.** Integration tests that validate cross-component pipeline behavior.
- **B.** Adversarial tests that probe for prompt-injection vulnerabilities.
- ✅ **C.** Regression tests scored against a stable reference set of known-good behavior.
- **D.** Smoke tests that confirm high-level system availability after the change.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Regression tests scored against a stable reference set of known-good behavior.

Regression testing compares the current behavior against a stable set of previously validated results. If a prompt-template update causes previously passing test cases to produce unexpected outputs, regression tests can identify those unintended changes.

C = Regression tests against a stable reference set of known-good behavior.

**A.** Integration tests focus on whether multiple components work correctly together. They are useful for detecting interface and integration problems, but this scenario specifically concerns a change causing previously passing cases to behave differently.

**B.** Adversarial tests are designed to identify security weaknesses and attack behaviors, such as prompt injection. They are not specifically intended to detect regressions caused by a prompt-template change.

**C.** Regression testing compares the current behavior against a stable set of previously validated results. If a prompt-template update causes previously passing test cases to produce unexpected outputs, regression tests can identify those unintended changes.

**D.** Smoke tests primarily verify that the system's basic functionality and availability remain intact after a change. They generally do not provide detailed comparison against previously known-good outputs.

</details>


---

## Q35 · single choice

You are identifying the highest-impact optimization for a deployment whose token cost is dominated by a long, repeated system prompt and a large retrieved context per request.  
Which optimization most directly targets the dominant cost driver?

- **A.** Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them.
- **B.** Add additional repeated content to the system prompt to give the model more guidance.
- ✅ **C.** Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.
- **D.** Switch every request to the heaviest available model to maximize output quality, accepting that higher per-request inference cost compounds rather than addresses the dominant cost driver.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.

This approach directly addresses both major cost drivers. Caching the repeated system prompt reduces the cost of repeatedly processing identical prefix content, while trimming retrieval to only relevant passages reduces the number of context tokens processed for each request.

C = Cache the repeated prompt prefix and trim retrieved context to query-relevant content.

**A.** Increasing retrieval depth adds even more tokens to each request. Since the current cost is already dominated by large retrieved context, this would increase the primary cost driver rather than optimize it.

**B.** Adding more repeated content makes the system prompt larger and increases token usage. It directly works against the goal of reducing the dominant prompt-related cost.

**C.** This approach directly addresses both major cost drivers. Caching the repeated system prompt reduces the cost of repeatedly processing identical prefix content, while trimming retrieval to only relevant passages reduces the number of context tokens processed for each request.

**D.** Using a heavier model generally increases inference cost and resource consumption. It does not address the repeated system prompt or excessive retrieved context that are causing the current cost problem.

</details>


---

## Q36 · single choice

You are designing a feedback session for a deployment in flight.  
Which structure best supports productive stakeholder feedback?

- **A.** Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants' memory to carry decisions and follow-up owners forward.
- ✅ **B.** Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.
- **C.** Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real timewithout preparation before the discussion begins.
- **D.** End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session's outcomes forward.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.

This creates a structured and accountable feedback process. Sharing materials beforehand gives stakeholders time to prepare, while documenting decisions, owners, and deadlines ensures that feedback turns into clear, trackable actions.

B = Focused agenda + advance artifacts + documented decisions + clear owners and dates.

**A.** An unstructured meeting makes it difficult to keep the discussion focused and can lead to unclear decisions and missing follow-up actions. Relying on memory also increases the chance that important commitments will be lost.

**B.** This creates a structured and accountable feedback process. Sharing materials beforehand gives stakeholders time to prepare, while documenting decisions, owners, and deadlines ensures that feedback turns into clear, trackable actions.

**C.** Providing materials only at the start leaves stakeholders with insufficient preparation time. This can reduce the quality of discussion and make it harder to reach informed decisions efficiently.

**D.** Without written decisions and assigned owners and dates, accountability becomes unclear. Effective stakeholder feedback should produce documented, actionable outcomes.

</details>


---

## Q37 · pick 2

A loan pre-qualification assistant shows 94 percent approval recommendations that match the human underwriter decision. The fairness team has reviewed approval rate parity across protected groups and reported no significant difference. A board member has asked whether this evidence is sufficient to declare the assistant fair.  
Which two Discernment-competency findings should you report? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** Approval rate parity does not by itself assess error rate parity across protected groups.
- ✅ **B.** Match with human underwriters does not establish freedom from underwriter-introduced bias.
- **C.** The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions.
- **D.** The fairness team's review process likely missed at least some of the protected groups studied.
- **E.** A larger sample is needed before any meaningful fairness claim can be made about the model.

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Approval rate parity does not by itself assess error rate parity across protected groups.
B. Match with human underwriters does not establish freedom from underwriter-introduced bias.

A. Equal or similar approval rates do not necessarily mean the system performs equally well across groups. A proper fairness assessment should also consider error patterns, such as false positives and false negatives, across protected groups.

B. A 94% match with human decisions only shows that the assistant agrees with the existing decision process. If human underwriters have existing biases, the model could reproduce those biases rather than eliminate them.

A = Approval-rate parity does not establish error-rate parity.
B = Agreement with humans does not establish freedom from human bias.

**A.** Equal or similar approval rates do not necessarily mean the system performs equally well across groups. A proper fairness assessment should also consider error patterns, such as false positives and false negatives, across protected groups.

**B.** A 94% match with human decisions only shows that the assistant agrees with the existing decision process. If human underwriters have existing biases, the model could reproduce those biases rather than eliminate them.

**C.** Agreement with human decisions measures consistency, not fairness. High agreement alone cannot establish that the decisions are unbiased or equitable.

**D.** There is no evidence that the fairness team omitted protected groups. This conclusion cannot be drawn from the information provided.

**E.** Sample size can affect statistical confidence, but the key issue here is that approval-rate parity and agreement with humans are insufficient fairness measures even when the sample is large.

</details>


---

## Q38 · single choice

You are an architect supporting the iteration phase of a deployed Claude-based system.  
Which activity most directly fits this phase?

- **A.** Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed.
- **B.** Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle.
- **C.** Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes.
- ✅ **D.** Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework.

This directly reflects an evidence-driven iteration cycle. Production telemetry, output evaluations, and stakeholder feedback reveal where improvements are most valuable. The proposed change can then be evaluated against the existing framework to measure its impact.

D = Use production telemetry, evaluations, and stakeholder feedback to identify and plan the highest-impact improvement.

**A.** Iteration does not mean rebuilding the entire system every cycle. Changes should be evidence-driven, based on production results, evaluations, and stakeholder feedback.

**B.** Deployment is not the end of evaluation. Production monitoring and ongoing evaluation are essential for identifying performance issues, quality changes, and opportunities for improvement.

**C.** The evaluation framework and reference set provide a consistent baseline for measuring whether changes improve or degrade the system. They should be maintained throughout iteration.

**D.** This directly reflects an evidence-driven iteration cycle. Production telemetry, output evaluations, and stakeholder feedback reveal where improvements are most valuable. The proposed change can then be evaluated against the existing framework to measure its impact.

</details>


---

## Q39 · single choice

You are explaining the precedence of Claude Code configuration scopes to the team.  
Which precedence ordering, from highest to lowest, is correct?

- **A.** Local # managed # user # command-line arguments # project
- **B.** Project # user # managed # local # command-line arguments
- ✅ **C.** Managed # command-line arguments # local # project # user
- **D.** User # project # local # command-line arguments # managed

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Managed # command-line arguments # local # project # user

This ordering correctly places the scopes from highest to lowest precedence:
Managed → Command-line arguments → Local → Project → User
This precedence determines which configuration takes effect when settings from multiple scopes apply to the same behavior.

C = Managed → Command-line arguments → Local → Project → User

**A.** This ordering places local configuration above managed and command-line settings. It does not reflect the intended precedence hierarchy for Claude Code configuration.

**B.** Project configuration is not the highest-precedence scope in this ordering. This option also places command-line arguments too low.

**C.** This ordering correctly places the scopes from highest to lowest precedence:
Managed → Command-line arguments → Local → Project → User
This precedence determines which configuration takes effect when settings from multiple scopes apply to the same behavior.

**D.** This reverses the hierarchy by placing user scope above managed configuration and puts managed configuration at the lowest level.

</details>


---

## Q40 · single choice

A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents.  
Which mitigation is most directly targeted at this failure mode?

- ✅ **A.** Constrain responses to source-supported content, require citations, and add a verification step.
- **B.** Score each new model version against a stable adversarial evaluation set.
- **C.** Replace the shared API key with per-user Auth tokens to restrict data access.
- **D.** Treat retrieved data as untrusted and apply input classifiers at ingestion time.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Constrain responses to source-supported content, require citations, and add a verification step.

This directly addresses grounding failures and hallucinated claims. Restricting the response to information supported by retrieved sources, requiring citations, and adding verification helps prevent unsupported information from reaching users.

A = Restrict responses to source-supported content, require citations, and verify the output.

**A.** This directly addresses grounding failures and hallucinated claims. Restricting the response to information supported by retrieved sources, requiring citations, and adding verification helps prevent unsupported information from reaching users.

**B.** This is an excellent model-upgrade evaluation practice, but it primarily helps detect whether a new version introduces regressions. It does not directly mitigate the immediate problem of unsupported claims in production responses.

**C.** Per-user authentication improves access control and accountability, but it does not directly prevent the model from generating claims that are unsupported by retrieved documents.

**D.** Input classification can help address malicious or adversarial content, such as prompt injection in retrieved documents. However, the specific failure described is unsupported generation after a model upgrade, so source-grounding and verification controls are more directly targeted.

</details>


---

## Q41 · single choice

You are distinguishing functional from non-functional requirements during discovery.  
Which item is a non-functional requirement?

- **A.** The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.
- **B.** The system must produce a draft response that a human reviewer can edit before sending.
- **C.** The system must classify inbound tickets into a defined set of categories.
- ✅ **D.** The system must respond at p95 latency under 800 milliseconds at the expected request volume.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. The system must respond at p95 latency under 800 milliseconds at the expected request volume.

This defines a performance constraint rather than a specific business function. Latency, throughput, scalability, reliability, and similar characteristics are typically non-functional requirements.

D = The system must meet a p95 latency requirement of under 800 milliseconds.

**A.** This describes what the system must do: extract specific invoice fields and populate another record. That is a functional requirement.

**B.** This specifies a system capability or behavior: generating an editable draft for human review. Therefore, it is a functional requirement.

**C.** Ticket classification describes what the system is required to perform, making it a functional requirement.

**D.** This defines a performance constraint rather than a specific business function. Latency, throughput, scalability, reliability, and similar characteristics are typically non-functional requirements.

</details>


---

## Q42 · single choice

You are integrating Claude Code into the team's pull-request workflow. The team wants Al-assisted review without removing human approval.  
Which integration design best fits this requirement?

- ✅ **A.** Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer etains the approval decision under the existing branch-protection rules
- **B.** Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules.
- **C.** Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate.
- **D.** Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer etains the approval decision under the existing branch-protection rules

This design keeps Claude Code in an assistive role while preserving human accountability. Claude can analyze the pull request and provide useful feedback, but the human reviewer remains responsible for the final approval decision. Existing branch-protection rules also maintain an important safety and governance control.

A = Claude provides structured AI-assisted review while human reviewers retain the final approval decision.

**A.** This design keeps Claude Code in an assistive role while preserving human accountability. Claude can analyze the pull request and provide useful feedback, but the human reviewer remains responsible for the final approval decision. Existing branch-protection rules also maintain an important safety and governance control.

**B.** Automatic merging removes the required human approval gate and bypasses established branch protections. This does not meet the team's requirement for AI assistance while retaining human oversight.

**C.** Disabling branch protection weakens the team's existing security and governance controls. It also directly conflicts with the requirement to retain human approval.

**D.** Deleting pull requests without human review or notification creates an unaccountable and potentially destructive workflow. Claude should assist reviewers rather than independently take irreversible actions.

</details>


---

## Q43 · pick 2

A revenue projection assistant has missed its monthly cost target by 38 percent. Profiling shows three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship-tier model (25 percent).  
Stakeholders require that projection accuracy remain unchanged.  
Which two optimizations should you sequence first to reduce cost without affecting accuracy? (Select two.)  
Each correct answer presents part of the solution.

- **A.** Reduce the number of historical sales chunks retrieved across each query run.
- **B.** Truncate the policy preamble to remove non-essential clauses from the prompt.
- ✅ **C.** Enable prompt caching on the static policy preamble across the recurring calls.
- **D.** Switch the workload to a smaller, faster Claude model tier across all queries.
- ✅ **E.** Cache common retrieved sales chunks accessed across many of the daily queries.

**Answer:** C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Enable prompt caching on the static policy preamble across the recurring calls.
E. Cache common retrieved sales chunks accessed across many of the daily queries.

C. The policy preamble accounts for 45% of the total cost and is repeated unchanged on every call. Prompt caching directly targets this dominant cost driver while preserving the full policy content, so it can reduce cost without changing the information provided to the model.

E. Frequently reused historical sales content can benefit from caching. This reduces repeated processing of the same context while preserving the underlying sales information, making it a safer cost optimization than reducing retrieval depth.

C = Enable prompt caching for the repeated static policy preamble.
E = Cache frequently reused historical sales chunks.

**A.** Reducing the number of retrieved chunks could lower token usage, but it may remove relevant historical information and therefore affect projection accuracy. Since accuracy must remain unchanged, this is not the safest first optimization.

**B.** Although removing unnecessary content could reduce token usage, changing the policy preamble may remove information that affects model behavior or compliance. It is therefore less reliable than caching the unchanged content.

**C.** The policy preamble accounts for 45% of the total cost and is repeated unchanged on every call. Prompt caching directly targets this dominant cost driver while preserving the full policy content, so it can reduce cost without changing the information provided to the model.

**D.** A smaller model could reduce inference costs, but it could also change the quality and accuracy of revenue projections. Since stakeholders explicitly require unchanged accuracy, changing the model is not the best first optimization.

**E.** Frequently reused historical sales content can benefit from caching. This reduces repeated processing of the same context while preserving the underlying sales information, making it a safer cost optimization than reducing retrieval depth.

</details>


---

## Q44 · pick 2

You are building an ethics-review checklist for deployments supported by artificial intelligence.  
Which two checks belong on the list? (Select two.)  
Each correct answer presents a complete solution.

- **A.** Confirm that vendor licensing terms permit the planned production use of the model.
- ✅ **B.** Verify that outputs do not rely on generalizations about people that the underlying data does not support.
- ✅ **C.** Confirm that high-impact decisions retain human accountability rather than being attributed to the model.
- **D.** Restrict ethics review to outputs that exceed a defined model-confidence threshold.
- **E.** Confirm that latency and throughput targets are met across supported user populations.

**Answer:** B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Verify that outputs do not rely on generalizations about people that the underlying data does not support.
C. Confirm that high-impact decisions retain human accountability rather than being attributed to the model.

B. This is an important ethical and fairness check. AI-generated outputs should not make unsupported generalizations about individuals or groups, particularly when those generalizations could lead to unfair treatment or harmful outcomes.

C. High-impact decisions should maintain human accountability and oversight. The model should support decision-making rather than become an unaccountable authority for consequential decisions.

B = Check for unsupported generalizations about people.
C = Preserve human accountability for high-impact decisions.

**A.** Licensing is an important legal and procurement consideration, but it is not primarily an ethics-review check concerning fairness, accountability, or potential harm to people.

**B.** This is an important ethical and fairness check. AI-generated outputs should not make unsupported generalizations about individuals or groups, particularly when those generalizations could lead to unfair treatment or harmful outcomes.

**C.** High-impact decisions should maintain human accountability and oversight. The model should support decision-making rather than become an unaccountable authority for consequential decisions.

**D.** Model confidence is not a sufficient basis for determining whether an output requires ethical review. A model can be highly confident while still producing biased, harmful, or unsupported content.

**E.** Latency and throughput are primarily performance and operational requirements. They are important deployment considerations but are not the core focus of an ethics review.

</details>


---

## Q45 · pick 2

A Claude architect at a health services organization is defining evaluation metrics for a clinical-summary pipeline. The pipeline must remain within a per-query cost ceiling and must never surface patient data to unauthorized roles.  
Which two metrics directly address these requirements? (Select two.)

- **A.** BLEU score computed against a human-annotated reference summary set
- ✅ **B.** Role-based access-control enforcement rate measured on a red-team dataset
- **C.** Throughput measured as successful requests processed per minute
- ✅ **D.** Per-query token cost measured against the defined cost ceiling
- **E.** Response latency at the 95th percentile across a one-week sample window

**Answer:** B, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Role-based access-control enforcement rate measured on a red-team dataset
D. Per-query token cost measured against the defined cost ceiling

B. This directly addresses the requirement that unauthorized roles must not receive patient data. Testing role-based access controls with adversarial or red-team cases can measure whether the system consistently prevents unauthorized data exposure.

D. This directly measures whether each query remains within the required cost constraint. Comparing actual token cost against the defined ceiling provides a clear operational metric for cost compliance.

B = Measure role-based access-control enforcement.
D = Measure per-query token cost against the defined ceiling.

**A.** BLEU measures text similarity between generated summaries and reference summaries. It can be useful for evaluating output quality, but it does not directly measure access-control enforcement or whether the pipeline stays within its cost ceiling.

**B.** This directly addresses the requirement that unauthorized roles must not receive patient data. Testing role-based access controls with adversarial or red-team cases can measure whether the system consistently prevents unauthorized data exposure.

**C.** Throughput measures system capacity and performance. It does not directly indicate whether patient data is protected from unauthorized users or whether individual requests remain within the specified cost ceiling.

**D.** This directly measures whether each query remains within the required cost constraint. Comparing actual token cost against the defined ceiling provides a clear operational metric for cost compliance.

**E.** p95 latency is a useful performance metric, but the stated requirements concern cost control and authorization, not response speed.

</details>


---

## Q46 · pick 2

The compliance team has authored a regulatory disclosure procedure that must be applied identically across customer service, sales, and onboarding workflows. The procedure changes when regulators issue updates, currently four to six times per year. You are designing how the procedure will be packaged for use by Claude across all three workflows.  
Which two design decisions should you include? (Select two.)  
Each correct answer presents part of the solution.

- ✅ **A.** Package the procedure as a Claude Skill owned directly by the compliance team.
- **B.** Embed the procedure text into each workflow's system prompt at integration time.
- **C.** Store the procedure in a shared retrieval corpus accessed by all three workflows.
- **D.** Have each workflow team rewrite the procedure for its own context.
- ✅ **E.** Reference the same Claude Skill from all three workflow integrations.

**Answer:** A, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Package the procedure as a Claude Skill owned directly by the compliance team.
E. Reference the same Claude Skill from all three workflow integrations.

A. A Claude Skill is well suited for reusable, procedural knowledge that needs to be applied consistently across multiple workflows. Having the compliance team own the Skill also creates a clear governance and maintenance owner, which is especially important because the procedure changes several times per year.

E. Referencing the same Skill across all three workflows ensures that they use a common, centrally maintained procedure. When compliance updates the Skill, the change can be managed in one place rather than manually updating three separate system prompts.

A = Package the procedure as a compliance-owned Claude Skill.
E = Reference the same Skill from all three workflow integrations.

**A.** A Claude Skill is well suited for reusable, procedural knowledge that needs to be applied consistently across multiple workflows. Having the compliance team own the Skill also creates a clear governance and maintenance owner, which is especially important because the procedure changes several times per year.

**B.** Embedding the procedure separately into every workflow creates duplication and maintenance overhead. Each update would need to be propagated across multiple integrations, increasing the risk that one workflow uses an outdated version.

**C.** A shared retrieval corpus can be useful for retrieving reference information, but this scenario involves a specific, repeatable procedure that must be consistently applied. Packaging it as a reusable Skill provides a more appropriate mechanism for procedural guidance.

**D.** Rewriting the procedure independently introduces inconsistency and governance risk. The requirement is that the same regulatory procedure be applied identically across all three workflows.

**E.** Referencing the same Skill across all three workflows ensures that they use a common, centrally maintained procedure. When compliance updates the Skill, the change can be managed in one place rather than manually updating three separate system prompts.

</details>


---

## Q47 · single choice

You are defining when to introduce a project subagent versus relying on Claude Code's general capabilities.  
Which scenario most directly justifies a dedicated subagent?

- ✅ **A.** The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.
- **B.** The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection.
- **C.** The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope.
- **D.** The team wants every Claude Code interaction to use the same generic system prompt with no task- specific specialization, narrow tool permissions, or dedicated model selection.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.

A dedicated subagent is appropriate when a task is recurring, specialized, and requires consistent configuration. A focused system prompt, restricted tool permissions, and task-appropriate model selection allow the subagent to operate within a clearly defined scope while reducing unnecessary access.

A = Use a dedicated subagent for recurring specialized work that benefits from focused instructions, narrow permissions, and task-specific model selection.

**A.** A dedicated subagent is appropriate when a task is recurring, specialized, and requires consistent configuration. A focused system prompt, restricted tool permissions, and task-appropriate model selection allow the subagent to operate within a clearly defined scope while reducing unnecessary access.

**B.** A one-time, general-purpose task does not justify the additional configuration and maintenance overhead of a dedicated subagent. Claude Code's general capabilities are sufficient.

**C.** Without a recurring specialized workload, there is little reason to create a dedicated subagent. The general Claude Code environment is more appropriate.

**D.** A generic configuration without task specialization does not provide the main benefits of a subagent. Dedicated subagents are valuable precisely when they can provide focused instructions, scoped permissions, and task-specific behavior.

</details>


---

## Q48 · single choice

You are evaluating an evaluation set used to score a Claude-based hiring-support tool. The set is drawn from one geographic region and one tenure band.  
Which response is most appropriate?

- **A.** Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool's full user population.
- ✅ **B.** Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.
- **C.** Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population.
- **D.** Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.

The evaluation set should represent the intended user population. Expanding coverage across relevant geographic regions and tenure bands helps identify potential performance or fairness issues that may be hidden by the narrow original dataset. The system should then be rescored before broader deployment.

B = Expand the evaluation set to represent the intended population and rescore before broader release.

**A.** Replacing quantitative evaluation with a small convenience sample would reduce the reliability and representativeness of the evaluation. The goal should be to improve coverage, not eliminate structured measurement.

**B.** The evaluation set should represent the intended user population. Expanding coverage across relevant geographic regions and tenure bands helps identify potential performance or fairness issues that may be hidden by the narrow original dataset. The system should then be rescored before broader deployment.

**C.** Narrowing the evaluation set further makes the evaluation less representative and can hide problems affecting other groups. Simplifying evaluation should not come at the expense of meaningful population coverage.

**D.** High scores on a narrow subset do not demonstrate that the system will perform reliably across the full intended population. Broader evaluation is necessary before making a wider release decision.

</details>


---

## Q49 · single choice

During an architectural review, the security team identifies a risk that adversarial content injected into retrieved documents could manipulate the model's behavior.  
Which mitigation most directly addresses this threat?

- ✅ **A.** Treat all retrieved content as untrusted input and apply input classifiers with output validation.
- **B.** Require citations for each claim and constrain responses to source-supported content.
- **C.** Restrict outbound tool calls to an approved destination allow-list.
- **D.** Score outputs against a stable adversarial evaluation set on each model-version change.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Treat all retrieved content as untrusted input and apply input classifiers with output validation.

Retrieved documents should be treated as untrusted data, because they may contain malicious instructions designed to manipulate the model. Input classification can help identify suspicious content, while output validation provides an additional layer of protection before the model's response is used downstream.

A = Treat retrieved content as untrusted input, apply input classification, and validate outputs.

**A.** Retrieved documents should be treated as untrusted data, because they may contain malicious instructions designed to manipulate the model. Input classification can help identify suspicious content, while output validation provides an additional layer of protection before the model's response is used downstream.

**B.** These controls are primarily aimed at grounding and hallucination risks. They can improve traceability and factual support, but they do not directly prevent adversarial instructions inside retrieved content from influencing the model.

**C.** An allow-list is an effective control against unauthorized outbound communication and data exfiltration, but it does not directly address the initial prompt-injection threat within retrieved documents.

**D.** Adversarial evaluation is useful for detecting regressions and measuring security behavior, especially after model changes. However, it is an evaluation mechanism rather than the most direct runtime mitigation for malicious content in retrieved documents.

</details>


---

## Q50 · single choice

You are responding to a stakeholder request that adds significant scope to a deployment already in flight.  
Which response best aligns expectations while respecting the stakeholder's underlying need?

- **A.** Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications.
- **B.** Decline the request outright without acknowledging the stakeholder's underlying need or offering alternatives such as deferral, descoping, or timeline extension.
- ✅ **C.** Acknowledge the request, describe the scope and timeline implications transparently, and propose options-defer it, descope something else, or extend the timeline-for the stakeholder to choose.
- **D.** Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Acknowledge the request, describe the scope and timeline implications transparently, and propose options-defer it, descope something else, or extend the timeline-for the stakeholder to choose.

This approach combines transparency, expectation management, and stakeholder alignment. It makes the trade-offs explicit while allowing the stakeholder to choose how the underlying need should be addressed.

C = Acknowledge the need, explain the trade-offs, and offer clear options for the stakeholder to choose.

**A.** Hiding scope changes creates a transparency and planning problem. The delivery team needs visibility into changes that could affect timelines, resources, and commitments.

**B.** Simply rejecting the request does not address the stakeholder's underlying business need. Effective stakeholder management should acknowledge the need and explore practical alternatives.

**C.** This approach combines transparency, expectation management, and stakeholder alignment. It makes the trade-offs explicit while allowing the stakeholder to choose how the underlying need should be addressed.

**D.** Accepting additional scope without discussing its impact creates unmanaged scope creep and can lead to missed deadlines and unrealistic stakeholder expectations.

</details>


---

## Q51 · pick 2

The compliance team at a firm has approved a Claude Skill that generates client-facing investment summaries.  
The Skill includes the firm's required disclaimers and prohibited-language list. A product manager has asked whether additional guardrails are needed at the application layer or whether the Skill alone is sufficient.  
Which two guardrail responsibilities should remain at the application layer rather than the Skill? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** Log every generated summary to the firm's compliance audit trail for retention.
- ✅ **B.** Verify the requesting user is authorized to generate investment summaries at all.
- **C.** Format output sections according to the firm's standardized house style guidelines.
- **D.** Apply the disclaimer template that the compliance team has standardized firm-wide.
- **E.** Apply the prohibited-language list that the compliance team maintains and updates.

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Log every generated summary to the firm's compliance audit trail for retention.
B. Verify the requesting user is authorized to generate investment summaries at all.

A. Audit logging is an application-level responsibility because it concerns system-wide observability, compliance records, retention, and traceability. A Skill can provide procedural guidance, but the application should enforce and record the actual audit trail.

B. Authorization is an access-control responsibility. The application must independently verify the user's identity and permissions before allowing the operation. A Skill should not be relied upon to enforce whether a user is authorized to perform the task.

A = Maintain the compliance audit trail at the application layer.
B = Enforce user authorization at the application layer.

**A.** Audit logging is an application-level responsibility because it concerns system-wide observability, compliance records, retention, and traceability. A Skill can provide procedural guidance, but the application should enforce and record the actual audit trail.

**B.** Authorization is an access-control responsibility. The application must independently verify the user's identity and permissions before allowing the operation. A Skill should not be relied upon to enforce whether a user is authorized to perform the task.

**C.** Formatting and presentation instructions are well suited to the Skill, particularly when they are part of the standardized procedure for producing investment summaries.

**D.** The disclaimer is explicitly part of the approved Skill's compliance procedure. Therefore, it is appropriate for the Skill to provide this instruction.

**E.** The prohibited-language list is already part of the compliance-owned Skill. Maintaining and applying this procedural guidance is an appropriate responsibility for the Skill.

</details>


---

## Q52 · single choice

You are defining an SLA for a Claude-based assistant.  
Which SLA definition is most operationally meaningful?

- **A.** A target tied to a stakeholder sentiment measure such as "the team feels satisfied," which cannot be measured objectively or used to trigger a documented breach response.
- ✅ **B.** A measurable target with a defined metric, threshold, evaluation window, and consequence for breach- for example,"p95 per-request latency under 800 ms over a 28-day window."
- **C.** A qualitative commitment such as "the system will be fast and reliable," which names no metric, threshold, or evaluation window.
- **D.** A target without a defined metric, threshold, evaluation window, or breach consequence.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. A measurable target with a defined metric, threshold, evaluation window, and consequence for breach- for example,"p95 per-request latency under 800 ms over a 28-day window."

This is a strong SLA because it clearly defines:

• Metric: p95 per-request latency

• Threshold: under 800 ms

• Evaluation window: 28 days

• Breach condition/consequence: a defined response when the target is not met

This makes the SLA objective, measurable, and operationally actionable.

B = Define a measurable metric, threshold, evaluation window, and breach consequence.

**A.** An SLA should be objective and measurable. Stakeholder sentiment alone does not provide a precise metric, threshold, or defined method for determining whether the SLA has been breached.

**B.** This is a strong SLA because it clearly defines:

• Metric: p95 per-request latency

• Threshold: under 800 ms

• Evaluation window: 28 days

• Breach condition/consequence: a defined response when the target is not met

This makes the SLA objective, measurable, and operationally actionable.

**C.** “Fast and reliable” is too vague to function as an operational SLA. There is no measurable definition of how fast, how reliable, or over what period performance should be evaluated.

**D.** Without measurable criteria and a defined evaluation period, stakeholders cannot objectively determine whether the service has met or breached the SLA.

</details>


---

## Q53 · single choice

You are transitioning a Claude-based deployment from design into implementation.  
Which handoff package most directly supports a clean transition?

- **A.** The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register.
- **B.** A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRS, omponent contracts, evaluation framework, runbooks, playbook, or known limitations.
- ✅ **C.** Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations.
- **D.** Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation amework, runbooks, on-call playbook, or known-limitations register to support the delivery team.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations.

This provides the implementation team with the technical, evaluation, and operational information required for a smooth transition.
It includes:

• Architecture overview for understanding the overall system

• ADRs for understanding important architectural decisions

• Component contracts for integration boundaries

• Evaluation framework and reference set for validating behavior

• Runbooks and on-call playbook for operational support

• Known limitations for understanding risks and constraints

C = Architecture overview + ADRs + component contracts + evaluation framework + runbooks + on-call playbook + known limitations.

**A.** Presentation slides alone rarely provide enough implementation detail. The delivery team needs architecture details, contracts, evaluation criteria, operational procedures, and known limitations to implement and operate the system correctly.

**B.** A verbal walkthrough can supplement documentation, but it should not replace it. Without written artifacts, important decisions and operational knowledge can be lost or interpreted inconsistently.

**C.** This provides the implementation team with the technical, evaluation, and operational information required for a smooth transition.
It includes:

• Architecture overview for understanding the overall system

• ADRs for understanding important architectural decisions

• Component contracts for integration boundaries

• Evaluation framework and reference set for validating behavior

• Runbooks and on-call playbook for operational support

• Known limitations for understanding risks and constraints

**D.** Source code does not provide the complete architectural and operational context needed for a clean handoff. The implementation team also needs documentation explaining decisions, interfaces, evaluation, operations, and limitations.

</details>


---

## Q54 · pick 2

A security team is evaluating two proposed controls. Control A adds an outbound tool allow-list with destination restrictions and per-call review. Control B scores responses against a stable adversarial evaluation set after each model-version change.  
Which two risk categories are correctly matched to these controls? (Select two.)

- **A.** Control A - prompt injection from adversarial content in retrieved data
- **B.** Control A - silent quality drift after a model-version upgrade
- ✅ **C.** Control A - data exfiltration via outbound tool calls
- **D.** Control B - data exfiltration via outbound tool calls
- ✅ **E.** Control B - silent quality drift after a model-version upgrade

**Answer:** C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Control A - data exfiltration via outbound tool calls
E. Control B - silent quality drift after a model-version upgrade

C. An outbound destination allow-list and per-call review directly reduce the risk of sensitive data being transmitted to unauthorized external destinations through tools.

E. Comparing each new model version against a stable adversarial evaluation set can reveal unexpected changes in behavior and identify quality or safety regressions after an upgrade.

C = Control A → Data exfiltration via outbound tool calls.
E = Control B → Silent quality drift after a model-version upgrade.

**A.** Control A primarily restricts outbound tool destinations and calls. Prompt injection from retrieved content is more directly addressed by treating retrieved content as untrusted input, input classification, and output validation.

**B.** An outbound allow-list does not detect quality or behavioral drift after a model update. This type of risk requires evaluation and comparison against a stable reference set.

**C.** An outbound destination allow-list and per-call review directly reduce the risk of sensitive data being transmitted to unauthorized external destinations through tools.

**D.** Control B is an evaluation control designed to identify changes in model behavior. It does not directly prevent outbound data exfiltration.

**E.** Comparing each new model version against a stable adversarial evaluation set can reveal unexpected changes in behavior and identify quality or safety regressions after an upgrade.

</details>


---

## Q55 · single choice

A Claude Architect is reviewing a post-deployment performance report for an Al-assisted legal-document summarization system. The report includes these observations:  
* Average summarization time decreased from 47 minutes to 6 minutes per document.  
* Associates spend less time on summaries, but overall billable output has not measurably changed.  
* Infrastructure costs increased by 22% because redundant retry logic generated additional API calls.  
* Some summaries require attorney correction, adding an average of 8 minutes of review per document.  
Which analysis correctly attributes each observation to the appropriate business-value pillar?

- **A.** Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.
- **B.** Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.
- **C.** Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.
- ✅ **D.** Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

Each observation is correctly mapped:

• Observation 1: 47 minutes → 6 minutes demonstrates a clear efficiency gain.

• Observation 2: Less time spent on summaries has not translated into increased billable output, so the expected productivity benefit has not yet been realized.

• Observation 3: A 22% increase in infrastructure/API costs is a solution-cost issue.

• Observation 4: Attorney correction adds 8 minutes of work, creating an efficiency loss that partially offsets the initial time savings.

D = Efficiency gain + unrealized productivity + solution-cost issue + partially offsetting efficiency loss.

**A.** Observation 2 specifically states that overall billable output has not measurably changed, so it does not demonstrate a realized efficiency/productivity outcome. Observation 4 concerns additional attorney review time, not a performance SLA.

**B.** Observation 1 is primarily an efficiency gain, not necessarily a transformation outcome. Observation 3 explicitly concerns increased infrastructure/API costs, making it a solution-cost issue, not a performance-SLA issue.

**C.** Observation 1 measures time saved per document, while Observation 4 measures human correction/review effort. Neither directly establishes a performance-SLA improvement. Observation 3 is explicitly about increased infrastructure costs.

**D.** Each observation is correctly mapped:

• Observation 1: 47 minutes → 6 minutes demonstrates a clear efficiency gain.

• Observation 2: Less time spent on summaries has not translated into increased billable output, so the expected productivity benefit has not yet been realized.

• Observation 3: A 22% increase in infrastructure/API costs is a solution-cost issue.

• Observation 4: Attorney correction adds 8 minutes of work, creating an efficiency loss that partially offsets the initial time savings.

</details>


---

## Q56 · pick 2

You are listing characteristics of robust guardrail design for an enterprise deployment.  
Which two characteristics belong on the list? (Select two.)  
Each correct answer presents a complete solution.

- **A.** Centralized log retention for guardrail violations with quarterly review by the security team.
- ✅ **B.** Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.
- ✅ **C.** Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.
- **D.** User feedback channels that route reported guardrail failures into the product backlog for triage.
- **E.** Periodic refresh of the system prompt wording to keep refusal language current and clear.

**Answer:** B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.
C. Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.

B. Enforcing per-role tool allow-lists at the orchestration layer applies least privilege before a tool can execute. This provides a strong preventive control because the model cannot simply decide to use a tool outside the permissions granted to its role.

C. Robust guardrails need continuous adversarial testing and regression tracking. Including attack-oriented cases in the evaluation set helps verify that guardrails continue to work as prompts, models, and system components change.

B = Per-role tool allow-lists enforced before tool execution.
C = Adversarial evaluation coverage with regression tracking.

**A.** Centralized logging and periodic review are useful for monitoring and governance, but they are not as directly related to the core guardrail enforcement and evaluation mechanisms represented by the correct answers.

**B.** Enforcing per-role tool allow-lists at the orchestration layer applies least privilege before a tool can execute. This provides a strong preventive control because the model cannot simply decide to use a tool outside the permissions granted to its role.

**C.** Robust guardrails need continuous adversarial testing and regression tracking. Including attack-oriented cases in the evaluation set helps verify that guardrails continue to work as prompts, models, and system components change.

**D.** User feedback is valuable for identifying issues, but it is primarily a feedback and improvement mechanism, rather than a direct preventive or evaluation control for guardrail robustness.

**E.** Refreshing refusal wording can improve clarity, but changing prompt language alone is not sufficient to establish robust guardrail enforcement. Strong guardrails should include controls outside the model's instructions as well.

</details>


---

## Q57 · pick 2

A Claude architect is leading the discovery phase for a new Al-powered customer service solution.  
Which two activities are characteristic of structured discovery and requirement gathering for a Claude-based  
deployment? (Select two.)

- ✅ **A.** Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins.
- **B.** Selecting the Claude model tier based on the architect's prior project experience before stakeholder input is collected.
- **C.** Generating an initial prototype and iterating based on user reaction rather than written requirements.
- ✅ **D.** Documenting explicit success criteria and failure thresholds that will gate production deployment.
- **E.** Deferring constraint documentation until the integration design phase to avoid scope creep.

**Answer:** A, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins.
D. Documenting explicit success criteria and failure thresholds that will gate production deployment.

A. Structured discovery begins by understanding the stakeholders, business needs, constraints, and expectations. Workshops can identify important requirements such as latency, accuracy, compliance, security, and operational constraints before architectural decisions are made.

D. Clearly defined success criteria and failure thresholds turn stakeholder expectations into measurable requirements. They also provide objective criteria for determining whether the solution is ready for production.

A = Facilitate stakeholder workshops to identify requirements and constraints.
D = Document measurable success criteria and failure thresholds for production readiness.

**A.** Structured discovery begins by understanding the stakeholders, business needs, constraints, and expectations. Workshops can identify important requirements such as latency, accuracy, compliance, security, and operational constraints before architectural decisions are made.

**B.** Model selection should be driven by requirements and evidence, not simply by prior experience. Choosing a model before understanding stakeholder needs can result in an inappropriate architecture or unnecessary cost.

**C.** Prototyping can be valuable, but relying primarily on user reactions without documented requirements and success criteria does not represent structured discovery.

**D.** Clearly defined success criteria and failure thresholds turn stakeholder expectations into measurable requirements. They also provide objective criteria for determining whether the solution is ready for production.

**E.** Constraints should be identified and documented during discovery. Delaying them can cause major architectural changes later and increase delivery risk.

</details>


---

## Q58 · single choice

You are identifying inefficiency in a Claude Code workflow where each engineer manually re-explains the project's conventions and architecture in every session.  
Which adjustment most directly removes this inefficiency?

- **A.** Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all Al-assisted development productivity for this codebase.
- ✅ **B.** Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.
- **C.** Tell each engineer to retype the project conventions and architecture context more quickly at the start of eachsession, reducing time lost without eliminating the repeated manual effort.
- **D.** Remove all documented project conventions and architectural standards so engineers have nothing to re-explain at session start, accepting the loss of consistency and shared coding standards.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.

A project-scoped CLAUDE.md provides persistent project context that can be reused across sessions. This eliminates the need for engineers to repeatedly explain the same architecture, conventions, and project instructions, while keeping the information version-controlled and shared with the team.

B = Store project conventions and architecture in a project-scoped CLAUDE.md so every Claude Code session can load the shared context automatically.

**A.** This eliminates the inefficiency by eliminating Claude Code itself, but it also removes the team's AI-assisted development capability. It is not an effective solution to the underlying context-management problem.

**B.** A project-scoped CLAUDE.md provides persistent project context that can be reused across sessions. This eliminates the need for engineers to repeatedly explain the same architecture, conventions, and project instructions, while keeping the information version-controlled and shared with the team.

**C.** This only makes the existing inefficient process faster. It does not eliminate the repeated manual work or provide consistent persistent context.

**D.** Removing project standards sacrifices consistency and governance rather than solving the context problem. The correct approach is to preserve the standards in persistent project context.

</details>


---

## Q59 · single choice

You are integrating Al-assisted tooling into the team's documentation workflow. The team wants generated documentation that stays grounded in the actual code.  
Which integration approach best fits this requirement?

- **A.** Generate documentation from the model's training-data recall without reading any of the actual repository code, cepting that the output will not reflect the current implementation.
- **B.** Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow or any human approval step.
- ✅ **C.** Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.
- **D.** Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that cumentation generation will be entirely disconnected from the actual implementation.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.

This approach grounds the documentation in the actual repository implementation. Filesystem and code-search tools allow the subagents to inspect current code, while the normal review workflow provides human oversight and quality control before publication.

C = Have subagents inspect the actual code, generate grounded documentation, and submit changes through the normal review workflow.

**A.** Training-data recall may be outdated or unrelated to the current repository. Without access to the actual code, the generated documentation cannot reliably reflect the current implementation.

**B.** Direct publication bypasses the team's review and approval process and could allow inaccurate or inappropriate documentation to reach users. AI-generated changes should follow the existing review workflow.

**C.** This approach grounds the documentation in the actual repository implementation. Filesystem and code-search tools allow the subagents to inspect current code, while the normal review workflow provides human oversight and quality control before publication.

**D.** Removing access to the repository prevents the system from grounding its documentation in the current codebase, which directly conflicts with the requirement.

</details>


---

## Q60 · pick 2

A security audit uncovers two issues: (1) all end users share a single API key, and (2) tool calls are executed without logging the initiating user.  
Which two mitigations directly address these specific findings? (Select two.)

- **A.** Validate structured outputs against a schema before downstream actions are executed.
- **B.** Enforce RBAC at the retrieval layer before content enters the model context.
- **C.** Move credentials out of the prompt context and resolve them from a server-side secret store.
- ✅ **D.** Add actor attribution to tool-call logs so each call records the initiating user identity.
- ✅ **E.** Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
D. Add actor attribution to tool-call logs so each call records the initiating user identity.
E. Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions.

D. This directly addresses the second finding. Recording the initiating user's identity with each tool call provides accountability, traceability, and useful audit information.

E. This directly addresses the first finding. Per-user, scope-restricted authentication provides individual accountability and supports least-privilege access instead of giving every user the same shared credential.

D = Add initiating-user attribution to tool-call logs.
E = Replace the shared API key with per-user, scope-restricted authentication tokens.

**A.** Schema validation helps prevent malformed or unexpected outputs from being passed to downstream systems. It does not address shared credentials or missing user attribution in tool-call logs.

**B.** RBAC at the retrieval layer is useful for preventing unauthorized access to retrieved information, but it does not directly resolve the two findings of shared API credentials and missing actor attribution.

**C.** A server-side secret store improves credential handling and secret protection, but by itself it does not replace the shared API key with per-user authorization or provide attribution for tool calls.

**D.** This directly addresses the second finding. Recording the initiating user's identity with each tool call provides accountability, traceability, and useful audit information.

**E.** This directly addresses the first finding. Per-user, scope-restricted authentication provides individual accountability and supports least-privilege access instead of giving every user the same shared credential.

</details>


---

## Q61 · single choice

You are assessing a Claude-based system whose dominant risk is silent quality drift on safety-relevant outputs  
after a model-version upgrade.  
Which assessment activity most directly addresses this risk?

- **A.** Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production.
- **B.** Rotate adversarial inputs randomly so no two upgrades are scored on the same set.
- **C.** Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic.
- ✅ **D.** Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.

A stable adversarial evaluation set provides a consistent baseline for comparing model versions. Version-attributed scoring makes it possible to identify quality or safety drift and prevent a problematic version from being promoted.

D = Maintain a stable adversarial evaluation set and compare each model version against it before promotion.

**A.** Disabling adversarial evaluation removes an important mechanism for detecting safety regressions before deployment. This increases the risk that a model-version change introduces undetected problems into production.

**B.** Changing the evaluation set every time makes it difficult to establish a consistent baseline between model versions. Stable test cases are important for accurately identifying behavioral drift.

**C.** Waiting for user complaints means the system is being evaluated after exposure to production users. Safety-relevant regressions should be detected before promotion whenever possible.

**D.** A stable adversarial evaluation set provides a consistent baseline for comparing model versions. Version-attributed scoring makes it possible to identify quality or safety drift and prevent a problematic version from being promoted.

</details>


---

## Q62 · single choice

You are a platform architect designing an internal Claude-based assistant that serves both finance analysts and external auditors. Each population must access only documents permitted by its role.  
Where should role-based access control be enforced in the pipeline?

- **A.** Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents.
- ✅ **B.** At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.
- **C.** Nowhere in the pipeline; rely on the model's general refusal behavior to reject unauthorized document access without any enforced access control.
- **D.** After the response is generated, by post-filtering content that should not have been retrieved.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.

RBAC should be enforced before retrieval results are passed into the model context. The retrieval layer can verify the user's role and return only documents that the user is authorized to access.
This follows the principle of enforcing authorization at the data-access boundary, rather than relying on model behavior.

B = Enforce RBAC at the retrieval layer before unauthorized content can enter the model context.

**A.** A system prompt is an instruction to the model, not an enforcement boundary. Relying on the model to follow access-control instructions could allow unauthorized content to enter the model context.

**B.** RBAC should be enforced before retrieval results are passed into the model context. The retrieval layer can verify the user's role and return only documents that the user is authorized to access.
This follows the principle of enforcing authorization at the data-access boundary, rather than relying on model behavior.

**C.** Model refusal behavior is not an access-control mechanism. Authorization must be explicitly enforced by the application or retrieval layer.

**D.** Post-filtering is too late. Unauthorized information may already have entered the model's context and influenced the generated response. Access control should occur before the content reaches the model.

</details>


---

## Q63 · pick 2

You are running a controlled experiment to compare two prompts and must complete the design steps before executing the experiment.  
Which two steps must be completed BEFORE running the experiment with random assignment? (Select two.)  
Each correct answer presents part of the solution.

- ✅ **A.** Determine the minimum detectable effect size and the sample size needed for power.
- **B.** Decide whether to promote, reject, or iterate the candidate based on the analysis.
- ✅ **C.** Define the hypothesis and the primary success metric for the comparison.
- **D.** Analyze the results against the predefined success metric and significance threshold.
- **E.** Document the recommendation, the trade-offs accepted, and the alternatives considered.

**Answer:** A, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Determine the minimum detectable effect size and the sample size needed for power.
C. Define the hypothesis and the primary success metric for the comparison.

A. Before running the experiment, you should determine the minimum detectable effect (MDE) and the required sample size. This ensures the experiment has enough statistical power to detect a meaningful difference between the two prompts.

C. The hypothesis and primary success metric must be defined before the experiment begins. Predefining them prevents changing the evaluation criteria after seeing the results and helps maintain an objective comparison.

A = Determine the MDE and required sample size for adequate statistical power.
C = Define the hypothesis and primary success metric before random assignment.

**A.** Before running the experiment, you should determine the minimum detectable effect (MDE) and the required sample size. This ensures the experiment has enough statistical power to detect a meaningful difference between the two prompts.

**B.** This is a post-experiment decision. You can only decide whether to promote, reject, or iterate after collecting and analyzing the experimental results.

**C.** The hypothesis and primary success metric must be defined before the experiment begins. Predefining them prevents changing the evaluation criteria after seeing the results and helps maintain an objective comparison.

**D.** Analysis occurs after the experiment has been executed and the required data has been collected.

**E.** This belongs to the decision and reporting stage after the experiment has been analyzed. It is not a prerequisite for running the experiment.

</details>


---

## Q64 · single choice

You are evaluating a customer-support agent’s configuration. Each prospective tool belongs to one of four categories: (1) required to carry out defined tasks, (2) frequently used and reduces hand-offs, (3) occasionally helpful for unrelated work, (4) speculative future utility.

Which categories should generally stay in the agent configuration?

- **A.** Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent’s defined tasks.
- **B.** Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them.
- ✅ **C.** Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand-offs.
- **D.** All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand-offs.

Agent tools should be limited to capabilities that support defined tasks and regular operational workflows. Required tools enable the agent’s intended work, and frequently used tools that reduce hand-offs improve its routine execution. Occasionally useful unrelated tools and speculative future tools do not justify current access and unnecessarily broaden the available tool set. OpenAI’s API supports constraining a model to a predefined set of allowed tools.

#### Learn more

- OpenAI API Reference — Responses tool configuration

</details>


---

## Q65 · single choice

You are adding human review to a high-volume classification pipeline in which reviewing every output is impractical.

Which sampling strategy best balances throughput and quality oversight?

- **A.** No sampling, relying entirely on user complaints to reveal quality and safety problems after they affect users.
- ✅ **B.** Risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs.
- **C.** Inverse sampling that reviews only high-confidence routine outputs and skips low-confidence and high-impact outputs.
- **D.** Universal review of every output regardless of confidence or throughput impact.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs.

Risk-stratified sampling directs human review toward outputs with the greatest likelihood or cost of error—low-confidence and high-impact cases—while random sampling of routine high-confidence outputs provides an ongoing check for hidden quality issues. This preserves scalable throughput without abandoning oversight.

</details>


---

## Q66 · single choice

You operate an interactive assistant where per-turn latency is the primary performance constraint. Quality on routine turns is already acceptable.

Which configuration change most directly improves latency without disproportionately harming quality?

- **A.** Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.
- ✅ **B.** Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.
- **C.** Increase retrieval depth to the corpus maximum to improve recall regardless of latency.
- **D.** Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.

Retrieving only the top-k passages that historically supply the needed information reduces retrieval work and the prompt context processed on each turn, while preserving routine-answer quality. Caching stable system-prompt content avoids reprocessing an unchanged prefix. Retrieval adds compute and round trips, and preserving cached context improves cache utilization.

#### Learn more

- Retrieval augmented generation (RAG) and indexes in Microsoft Foundry

- OpenAI API Reference — Realtime server events

</details>


---

## Q67 · single choice

You are evaluating patterns for a batch document-classification job with fixed stages: extract metadata, classify, summarize, and persist.

Which pattern is the best fit, and why?

- **A.** A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store.
- **B.** An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks.
- **C.** An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability.
- ✅ **D.** A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility.

A workflow pattern fits a deterministic batch process whose stages are known in advance. It provides repeatable orchestration and predictable per-request token costs, whereas agentic flexibility and open-ended planning are unnecessary for this fixed sequence.

</details>


---

## Q68 · pick 2

A pilot AI assistant for procurement specialists has an 89 percent first-response acceptance rate, but follow-up surveys show that specialists often override the assistant’s vendor recommendations after considering criteria the assistant did not assess. The pilot owner wants to launch the assistant unchanged because of the strong acceptance rate.

Which two Discernment-competency observations should you raise BEFORE approving the launch? (Select two.)

Choose two

- **A.** The acceptance rate alone proves readiness for general production use.
- **B.** The survey response rate may not be statistically representative of all specialists.
- ✅ **C.** The unconsidered criteria represent a scope gap in the assistant’s input space.
- ✅ **D.** Acceptance does not establish whether recommendations remain correct after specialist review.
- **E.** The pilot duration was probably too short to demonstrate reliability across the full year.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. The unconsidered criteria represent a scope gap in the assistant’s input space.
D. Acceptance does not establish whether recommendations remain correct after specialist review.

Specialists’ overrides after considering omitted vendor-selection criteria reveal that the assistant’s evaluated input space is incomplete. A high initial acceptance rate measures early user uptake, not whether recommendations remain correct after the fuller specialist review needed for a procurement decision.

</details>


---

## Q69 · pick 2

An engineering organization is rolling out Claude Code across 200 developers. A team lead proposes that AI-generated pull requests bypass the standard code-review process for changes under 50 lines, because small changes are viewed as low risk and review capacity is limited.

Which two Diligence-competency objections should you raise? Each correct answer presents part of the solution. (Select two.)

Choose two

- ✅ **A.** Removing review eliminates the verification mechanism required for AI-generated output across the workflow.
- **B.** Code-review capacity should be expanded to handle every code change submitted across the team.
- **C.** The threshold should be increased to 200 lines to capture more changes.
- **D.** AI-generated pull requests should be rejected by default across the organization.
- ✅ **E.** Line count is a poor proxy for the actual risk introduced by a code change.

**Answer:** A, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Removing review eliminates the verification mechanism required for AI-generated output across the workflow.
E. Line count is a poor proxy for the actual risk introduced by a code change.

AI-generated changes still require verification before integration; Anthropic’s security guidance assigns users responsibility for reviewing proposed code and advises reviewing all suggested changes before approval. Line count does not represent the security, correctness, authorization, configuration, dependency, or operational impact of a change, so it cannot safely determine whether review may be bypassed. Automated review can supplement, but does not replace, existing manual code-review and security practices.

#### Learn more

- Claude Code Security

- Automated Security Reviews in Claude Code

</details>


---

## Q70 · pick 2

You are choosing a model for a new production workload and must complete the upstream steps before empirically testing candidate models.

Which two steps must be completed BEFORE testing a representative sample on a candidate model? Each correct answer is part of the solution. (Select two.)

Choose two

- **A.** Select the lightest model that consistently meets the quality bar across the sample.
- **B.** Retest the model choice when a new model version becomes available.
- ✅ **C.** Choose a candidate model based on the requirements profile and known capabilities.
- ✅ **D.** Define the quality bar, latency tolerance, and expected volume for the workload.
- **E.** Sign off the production rollout plan with the platform and security teams.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Choose a candidate model based on the requirements profile and known capabilities.
D. Define the quality bar, latency tolerance, and expected volume for the workload.

A candidate model should be selected using the workload’s defined requirements—required output quality, latency tolerance, and expected volume—together with known model capabilities. A representative evaluation is performed after those criteria and an initial candidate are established. Selecting the lightest model that passes the evaluation, retesting new versions, and obtaining rollout approval are subsequent activities.

#### Learn more

- Model selection | OpenAI API

- API deployment checklist | OpenAI API

</details>


---

## Q71 · pick 3

You are evaluating model-selection claims used by a peer team.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- ✅ **A.** Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input.
- ✅ **B.** A representative-sample evaluation on the target workload is the right basis for confirming a model selection.
- **C.** The most capable model is always the right choice regardless of the workload profile.
- ✅ **D.** Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability.
- **E.** Selecting a model based on which version was most recently announced is the right basis for production decisions.

**Answer:** A, B, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

Correct answers from the source:
Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input. — Yes
A representative-sample evaluation on the target workload is the right basis for confirming a model selection. — Yes
The most capable model is always the right choice regardless of the workload profile. — No
Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability. — Yes
Selecting a model based on which version was most recently announced is the right basis for production decisions. — No

Higher reasoning effort trades increased latency and token use for deeper reasoning, so it can consume more rate-limit capacity. Model selection should be confirmed through evaluations that represent the production workload and its quality, latency, and cost requirements. The most capable model is not invariably appropriate: smaller models can be better for cost-sensitive or latency-sensitive routine work. Tiered routing appropriately directs simple requests to a lighter model and reserves a stronger model for complex requests. Announcement recency does not establish production suitability; measured performance on the target workload does.

#### Learn more

- Model guidance

- Models

</details>


---

## Q72 · pick 2

You are assessing instrumentation in a multi-agent system.

Which two findings represent valid observability gaps in the instrumentation? Each correct answer provides a complete solution. (Select two.)

Choose two

- **A.** Trace spans for each agent step are exported to the shared distributed-tracing backend.
- **B.** Latency and token usage on every span are emitted to the central metrics pipeline.
- **C.** Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields.
- ✅ **D.** Model identity and version on each turn are not recorded with the turn artifacts.
- ✅ **E.** Request-scoped correlation identifiers do not propagate across agent and tool calls.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
D. Model identity and version on each turn are not recorded with the turn artifacts.
E. Request-scoped correlation identifiers do not propagate across agent and tool calls.

Model identity and version must be captured with each turn so behavior, latency, token usage, failures, and regressions can be attributed to the specific model configuration. Request-scoped correlation identifiers must propagate across agent and tool calls so their spans and telemetry remain connected within one distributed trace. OpenTelemetry defines GenAI model attributes and explains that context propagation enables correlation across distributed service boundaries.

#### Learn more

- OpenTelemetry GenAI attributes

- OpenTelemetry context propagation

</details>


---

## Q73 · single choice

An engineer accidentally commits an API key to the repository by placing it in .claude/settings.json.

Which configuration design principle was breached?

- **A.** Project-scope configuration should always override user-scope configuration.
- **B.** Managed configuration must be applied before project-scope configuration is read.
- ✅ **C.** Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.
- **D.** MCP server definitions must reside in environment variables to prevent scope conflicts.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.

API keys are credentials and must not be committed to version-controlled configuration files, where repository access and history can expose them. They should be supplied securely at runtime, such as through a secret store or protected environment-based mechanism. Anthropic documents using a key helper that retrieves a key from a Vault secret for dynamic credentials.

#### Learn more

- LLM gateway configuration — Anthropic

</details>


---

## Q74 · pick 3

You are classifying chunking strategies by the corpus type to which each is best suited.

For each chunking strategy, select the applicable corpus type: “Long Structured Documents,” “Heterogeneous Short Records,” or “Code or Hierarchical Specs.”

- ✅ **A.** Long Structured Documents
- ✅ **B.** Heterogeneous Short Records
- ✅ **C.** Code or Hierarchical Specs

**Answer:** C, B, A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: function-level or section-level chunking for code modules → Code or Hierarchical Specs; tree-aware chunking that follows code or specification hierarchy → Code or Hierarchical Specs; per-record chunking where each record is one chunk → Heterogeneous Short Records; semantic chunking along clause or paragraph boundaries → Long Structured Documents; fixed-size chunking with overlap for short records of similar length → Heterogeneous Short Records; hierarchical chunking that mirrors document section structure → Long Structured Documents)

Correct answers from the source:
function-level or section-level chunking for code modules — Code or Hierarchical Specs
tree-aware chunking that follows code or specification hierarchy — Code or Hierarchical Specs
per-record chunking where each record is one chunk — Heterogeneous Short Records
semantic chunking along clause or paragraph boundaries — Long Structured Documents
fixed-size chunking with overlap for short records of similar length — Heterogeneous Short Records
hierarchical chunking that mirrors document section structure — Long Structured Documents

Function-level and tree-aware boundaries preserve the logical hierarchy of source code and specifications. Per-record and fixed-size overlapping chunks suit short, independently meaningful records. Semantic paragraph/clause boundaries and document-section hierarchies preserve the context and structure of long documents.

</details>


---

## Q75 · single choice

You are choosing a pattern for a compliance Q&A assistant that must respond to policy questions with citations from the authoritative internal source set. Latency, cost, and audit predictability are priorities.

Which pattern is the best fit?

- ✅ **A.** Augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer.
- **B.** Multi-agent orchestration with a planner, researcher, and writer agent for every query.
- **C.** A pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus.
- **D.** A static prompt with the entire policy corpus concatenated into every request.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer.

Retrieval-augmented generation retrieves relevant material from the indexed authoritative policy corpus for each response, enabling source-grounded citations and predictable auditability. It is typically more efficient and controlled than multi-agent orchestration, unrestricted web retrieval, or including the entire corpus in every prompt.

</details>


---

## Q76 · pick 2

For each statement, select Yes if it reflects a sound architectural practice. Otherwise, select No.

- ✅ **A.** Authentication and authorization run before retrieval so retrieval can filter by identity.
- ✅ **B.** An asynchronous queue absorbs bursty traffic between intake and the model invocation layer.
- **C.** Tax computation is encoded directly in the system prompt rather than in code.
- **D.** Conversation logs include unredacted government identifiers to maximize signal for tuning.

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

Correct answers from the source:
Authentication and authorization run before retrieval so retrieval can filter by identity. — Yes
An asynchronous queue absorbs bursty traffic between intake and the model invocation layer. — Yes
Tax computation is encoded directly in the system prompt rather than in code. — No
Conversation logs include unredacted government identifiers to maximize signal for tuning. — No

Authorization before retrieval enables identity-based access filtering. Queues smooth burst traffic and decouple request intake from asynchronous model processing. Tax calculations require deterministic, testable application logic rather than prompt behavior. Government identifiers are sensitive PII, so logs should redact or mask them and restrict their use.

#### Learn more

- AWS Well-Architected Framework — Fail fast and limit queues

- Amazon Bedrock — Remove PII from conversations by using sensitive information filters

</details>


---

## Q77 · pick 2

You are building an evaluation pipeline for a Claude-based deployment and must finish the specification steps before running the deployment against the dataset.

Which two steps must be completed BEFORE running the deployment against the evaluation dataset? Each correct answer represents part of the solution. (Select two.)

Choose two

- **A.** Publish the aggregated metrics to a dashboard and gate releases on threshold checks.
- ✅ **B.** Curate and label the evaluation dataset to match the defined slices.
- **C.** Review failure cases with subject matter experts to refine the scoring rubric.
- ✅ **D.** Define the metrics and slices the framework will report across representative, edge, and adversarial cases.
- **E.** Score the deployment outputs against the reference labels and aggregate the metrics.

**Answer:** B, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Curate and label the evaluation dataset to match the defined slices.
D. Define the metrics and slices the framework will report across representative, edge, and adversarial cases.

Evaluation requires predefined, measurable success criteria and an evaluation set that reflects the intended task distribution, including edge cases. Metrics and slices establish what will be measured, while curated reference labels enable the resulting outputs to be scored. Aggregating scores, reviewing failures, and publishing dashboard results occur after the deployment has been run on that dataset.

#### Learn more

- Define success criteria and build evaluations — Claude Platform Docs

</details>


---

## Q78 · pick 2

An architect is assessing a Claude-based candidate-screening tool before deployment. A stakeholder claims that no bias evaluation is needed because the model was not trained on company data.

Which two responses most accurately dispute this claim? (Select two.)

Choose two

- **A.** Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation.
- **B.** Fairness testing is required only when the training dataset is known to contain protected-class labels.
- ✅ **C.** The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.
- ✅ **D.** The system should be evaluated on outcome-disparity metrics across protected groups before deployment.
- **E.** Bias evaluation is unnecessary when the model provider has published a responsible-use policy.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.
D. The system should be evaluated on outcome-disparity metrics across protected groups before deployment.

A model can retain demographic biases from its broad pretraining even when it has not been trained on an organization’s data. For an employment-screening use case, fairness evaluation should measure whether outcomes differ across protected groups before deployment. NIST guidance calls for evaluating fairness and bias and using context-specific metrics to assess performance and harms across groups.

#### Learn more

- NIST AI RMF Core — Measure

- NIST AI RMF Playbook — Measure

</details>


---

## Q79 · pick 3

You are ordering decomposed components in an invoice-processing pipeline.

For every decomposed component, choose the execution layer to which it belongs: “Pre-Processing”, “Model Stage”, or “Post-Processing”.

- ✅ **A.** Pre-Processing
- ✅ **B.** Model Stage
- ✅ **C.** Post-Processing

**Answer:** B, C, A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Claude-based classification of invoice type → Model Stage; persistence of validated records to the system of record → Post-Processing; schema validation of the extracted fields → Post-Processing; Claude-based extraction of structured invoice fields → Model Stage; PII redaction on extracted text prior to model invocation → Pre-Processing; optical character recognition on scanned invoice images → Pre-Processing)

Correct answers from the source:
Claude-based classification of invoice type — Model Stage
persistence of validated records to the system of record — Post-Processing
schema validation of the extracted fields — Post-Processing
Claude-based extraction of structured invoice fields — Model Stage
PII redaction on extracted text prior to model invocation — Pre-Processing
optical character recognition on scanned invoice images — Pre-Processing

Pre-processing prepares invoice inputs for inference, including OCR and redacting sensitive text before model invocation. The model stage performs the Claude classification and structured-data extraction. Post-processing validates extracted output against its schema and persists only validated records to the system of record.

</details>


---

## Q80 · single choice

You are creating a prompt for a ticket-triage classifier with thirty clearly defined categories and clear descriptions of each category in the prompt.

Which technique is the most appropriate starting point?

- **A.** A chain-of-thought prompt for a routing decision that does not require multi-step reasoning.
- ✅ **B.** A zero-shot prompt that specifies the categories with their descriptions and the required output format.
- **C.** A prompt that demands the model invent new categories when the supplied ones do not fit.
- **D.** A prompt with no category descriptions, expecting the model to infer the category set.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. A zero-shot prompt that specifies the categories with their descriptions and the required output format.

For classification against a fixed taxonomy, a zero-shot prompt should state the allowed categories, define them clearly, and specify the required response format. This grounds the model in the intended label set and produces consistent, machine-readable routing decisions.

</details>


---

## Q81 · single choice

A platform team runs a self-hosted, multi-agent system on Kubernetes that coordinates seven specialized agents for invoice processing. The team uses approximately 40 percent of its engineering capacity for infrastructure maintenance, message-bus reliability, and agent-state recovery. The CFO has asked for an evaluation of a move to managed agent infrastructure to recover engineering capacity. The security officer requires all customer financial data to stay within an approved network boundary.

Which factor should carry the greatest weight in your recommendation?

- **A.** Whether the current seven agents map cleanly to the patterns supported by managed agents.
- **B.** Whether managed agents reduce per-invoice token costs across the existing processing volume.
- **C.** Whether managed agents support the current bus topology used by the platform team.
- ✅ **D.** Whether managed agent data handling satisfies the network boundary required by security.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Whether managed agent data handling satisfies the network boundary required by security.

Compliance with the approved network boundary for customer financial data is a mandatory security constraint. Operational benefits such as reduced maintenance effort, lower token costs, or architectural compatibility cannot justify adopting a managed service that fails to meet that data-handling requirement.

</details>


---

## Q82 · single choice

You are determining where human review must remain in a proposed automated pipeline.

Which placement represents sound human-in-the-loop design?

- **A.** Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate.
- ✅ **B.** Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.
- **C.** Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review.
- **D.** Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.

Human review should occur after the model produces its output but before any high-impact, irreversible action, and reviewers need explicit approval criteria. This preserves meaningful oversight and enables intervention before harm or irreversible consequences occur.

</details>


---

## Q83 · pick 2

A Claude-based research assistant starts generating responses that confidently contradict its retrieved source documents, even though the retrieval pipeline has not changed.

Which two diagnostic actions most directly identify the root cause of this behavior? (Select two.)

Choose two

- **A.** Increase the context-window size to allow more retrieved chunks per query.
- **B.** Switch the retrieval index to a denser embedding model to improve chunk-relevance scores.
- ✅ **C.** Determine whether the failure reproduces on the previous model version to test for a model mismatch.
- **D.** Reduce the temperature setting to lower response variance across all query types.
- ✅ **E.** Inspect the system-prompt grounding instructions to determine whether citation constraints remain intact.

**Answer:** C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Determine whether the failure reproduces on the previous model version to test for a model mismatch.
E. Inspect the system-prompt grounding instructions to determine whether citation constraints remain intact.

Reproducing the behavior with the previous model version can isolate a model-version or model-routing mismatch when retrieval has remained unchanged. Reviewing the system prompt verifies that the instructions requiring answers to be grounded in retrieved content and constrained by citations have not been removed or weakened. Claude model updates can change instruction-following behavior, so Anthropic recommends testing applications when changing models.

#### Learn more

- Prompting best practices — Claude Platform Docs

- Model deprecations — Claude Platform Docs

</details>


---

## Q84 · pick 3

You are assessing prompting claims in a peer’s design document.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- ✅ **A.** Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt.
- ✅ **B.** Adding a few-shot example set with exact field names anchors output formatting on extraction tasks.
- **C.** Chain-of-thought should be the default on every task regardless of complexity.
- ✅ **D.** Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria.
- **E.** Behavioral differences across model versions can be ignored once a prompt has been validated on one version.

**Answer:** A, B, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

Correct answers from the source:
Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt. — Yes
Adding a few-shot example set with exact field names anchors output formatting on extraction tasks. — Yes
Chain-of-thought should be the default on every task regardless of complexity. — No
Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria. — Yes
Behavioral differences across model versions can be ignored once a prompt has been validated on one version. — No

Zero-shot classification works when labels and their definitions are clearly specified. Few-shot examples with exact schema fields reinforce the desired extraction format. Chain-of-thought should be applied only when useful for the task, not as a blanket default. Neutral comparisons with explicit criteria counter leading framing. Model behavior can vary by version, so prompts require validation after version changes.

</details>


---

## Q85 · pick 3

You are assessing retrieval-strategy claims used by a peer team.

For each claim, select Yes when it is generally accurate; otherwise, select No.

- ✅ **A.** Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text.
- ✅ **B.** Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone.
- ✅ **C.** Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes.
- **D.** Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics.
- **E.** Random sampling of a data store is a sound retrieval strategy for production Q&A.

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

Correct answers from the source:
Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text. — Yes
Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone. — Yes
Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes. — Yes
Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics. — No
Random sampling of a data store is a sound retrieval strategy for production Q&A. — No

Dense vector search captures semantic similarity, which supports paraphrase retrieval. Sparse lexical retrieval is strongest for exact strings, identifiers, and rare terms. Relational queries and indexes support deterministic filtering and aggregation. Hybrid retrieval combines sparse and dense approaches, giving it different retrieval and recall behavior from dense-only search. Random sampling provides no relevance guarantee, so it is not suitable for production question-answering retrieval.

</details>


---

## Q86 · pick 3

You are a solution architect evaluating candidate use cases for a Claude-based program.

For each scenario, select Yes if Claude is appropriate as the primary solution at the architectural level. Otherwise, select No.

- ✅ **A.** drafting first-pass investigative reports from semi-structured incident logs for analyst review
- **B.** computing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline
- ✅ **C.** long-context contract review with structured clause extraction and deviation flagging
- **D.** replacing a vector index for semantic retrieval over a multi-million-document corpus
- ✅ **E.** routing inbound support tickets into 30 categories with reasoning for the chosen routing

**Answer:** A, C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

Correct answers from the source:
drafting first-pass investigative reports from semi-structured incident logs for analyst review — Yes
computing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline — No
long-context contract review with structured clause extraction and deviation flagging — Yes
replacing a vector index for semantic retrieval over a multi-million-document corpus — No
routing inbound support tickets into 30 categories with reasoning for the chosen routing — Yes

Claude is well suited to drafting reports from semi-structured text, reviewing long documents, extracting structured clauses, identifying deviations, classifying support tickets, and explaining classifications. A sub-50-ms streaming fraud decision needs predictable, low-latency specialized scoring rather than an LLM as its primary solution. Semantic retrieval across millions of documents requires a vector index or comparable retrieval system; Claude can use retrieved results but does not replace that index.

#### Learn more

- Anthropic: Prompting best practices

- Anthropic: Introduction to Claude

</details>


---

## Q87 · pick 2

You are assembling factors that should guide the selection among Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff.

Which two factors should be included on the list? Each correct answer provides a complete solution. (Select two.)

Choose two

- **A.** Whether the vendor publishes detailed reference documentation for each candidate protocol.
- **B.** Whether the team has prior implementation experience with any of the candidate protocols.
- **C.** Whether the underlying transport supports encryption in transit between the integrated services.
- ✅ **D.** Whether the integration must be portable across multiple AI clients in the ecosystem.
- ✅ **E.** Whether the interaction is stateless and latency-sensitive or stateful and longer-running.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
D. Whether the integration must be portable across multiple AI clients in the ecosystem.
E. Whether the interaction is stateless and latency-sensitive or stateful and longer-running.

Portability across multiple AI clients favors MCP because it provides a standardized client-server protocol that compatible hosts can use. Interaction lifecycle also determines the integration approach: direct APIs suit simple, low-latency request-response operations, while agent handoffs transfer control and preserve context for longer-running, stateful work between specialized agents.

#### Learn more

- MCP TypeScript SDK

- Running agents

</details>


---

## Q88 · single choice

You are choosing a protocol for one low-latency, stateless tool call from a Claude-based assistant to an internal pricing service that already offers a stable HTTP API.

Which integration mechanism is most appropriate?

- ✅ **A.** A direct API call to the existing endpoint with the appropriate scoped credentials.
- **B.** A long-lived stateful session protocol for a stateless single-call interaction.
- **C.** A bespoke streaming protocol layered over an unrelated asynchronous message bus.
- **D.** An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. A direct API call to the existing endpoint with the appropriate scoped credentials.

A direct call to the existing HTTP endpoint is the simplest and lowest-latency integration for a single stateless operation. Scoped credentials enforce least-privilege access, while a persistent session protocol, custom streaming layer, or intervening agent adds complexity and latency without serving a stated requirement. Claude supports client-side tool use, in which the application executes the tool call and returns its result.

#### Learn more

- Anthropic: Tool use overview

</details>


---

## Q89 · pick 2

You are assessing an integration specification for security weaknesses.

Which two findings represent valid security gaps in the specification? Each correct answer provides a complete solution. (Select two.)

Choose two

- **A.** Tool calls execute server-side under a least-privilege service principal scoped to the requested action.
- ✅ **B.** Service credentials are placed in the prompt context, where they can leak into logs and traces.
- ✅ **C.** Role-based access control is enforced only at the response-rendering layer after the model accesses restricted data.
- **D.** Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session.
- **E.** Tool inputs and outputs are encrypted in transit using transport-layer security between services.

**Answer:** B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Service credentials are placed in the prompt context, where they can leak into logs and traces.
C. Role-based access control is enforced only at the response-rendering layer after the model accesses restricted data.

Service credentials must not be included in prompt context because they can be exposed through logging and tracing. Authorization must be enforced before a model or tool accesses restricted data; response-layer-only RBAC allows unauthorized access to occur before rendering is blocked.

</details>


---

## Q90 · pick 2

The platform team at Trenova Systems, Inc. must lower per-query cost and p95 latency for a high-volume Claude pipeline without reducing output quality for the core use case.

Which two optimizations directly address both cost and latency at the same time? (Select two.)

Choose two

- ✅ **A.** Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.
- ✅ **B.** Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.
- **C.** Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls.
- **D.** Add a retrieval step that fetches the full source corpus into the context window before generation.
- **E.** Expand the system prompt to include additional few-shot examples on every request.

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.
B. Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.

Prompt caching lets repeated calls reuse a static system-prompt prefix, so cached input is billed at a lower rate and avoids reprocessing that prefix. Routing straightforward requests to a smaller, faster model lowers inference cost and response time, while reserving the larger model for complex requests preserves quality where it matters. Increasing output limits, retrieving an entire corpus, or expanding every prompt adds processing or tokens rather than directly reducing both metrics.

#### Learn more

- Anthropic Claude API pricing

</details>


---

## Q91 · single choice

A healthcare organization is assessing two Claude-powered AI architectures for a clinical-documentation assistant. Architecture X delivers higher output-quality scores, but costs $0.18 per documentation session and averages 4.2 seconds per response. Architecture Y scores slightly lower on quality metrics, but costs $0.09 per session and averages 2.1 seconds per response. The stated SLA requires responses in under 3 seconds, and the projected annual volume is 2 million documentation sessions.

Which evaluation approach properly applies business-value pillar analysis to this decision?

- **A.** Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments.
- **B.** Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment.
- ✅ **C.** Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.
- **D.** Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.

A mandatory latency SLA is a feasibility constraint: Architecture X's 4.2-second average does not meet the under-3-second requirement, whereas Architecture Y's 2.1-second average does. At 2 million sessions, the annual spend is $360,000 for X and $180,000 for Y, yielding a $180,000 annual difference. The remaining decision is whether Y's quality reduction materially reduces clinical-workflow productivity enough to outweigh its compliant performance and lower cost. AWS guidance similarly calls for discarding options that do not meet workload requirements, then selecting and testing the options that satisfy latency, throughput, and response-quality requirements while evaluating their cost-performance trade-offs.

#### Learn more

- AWS Generative AI Lens: Balance cost and performance when selecting inference paradigms

- AWS Generative AI Lens: Model selection and cost optimization

</details>


---

## Q92 · single choice

You are troubleshooting a Claude Code session in which its subagent uses 50,000 context tokens before the engineer types even a single message.

Which root cause is most likely?

- **A.** The developer's keyboard layout or input-method configuration is the cause of the elevated context consumption, introducing extra tokens before the engineer types any message.
- ✅ **B.** Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront.
- **C.** The model has internal personal preferences or default behaviors that silently consume large portions of context budget before any user message is processed, independent of tool configuration.
- **D.** The font rendering or display-scaling settings of the IDE are converting visual output into additional context tokens, causing the high pre-session context consumption.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront.

When Tool Search is disabled, Claude Code loads all configured MCP tool definitions into the context window at startup. A large collection of MCP servers can therefore consume tens of thousands of tokens before any engineer message is entered.

#### Learn more

- Connect Claude Code to tools via MCP

- Tool search tool

</details>


---

## Q93 · single choice

You are assisting an engineer whose newly added MCP server is not appearing in their Claude Code session.

Which diagnostic step should be attempted first?

- **A.** Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.
- **B.** Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.
- ✅ **C.** Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.
- **D.** Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

claude mcp list confirms whether an MCP server is configured and reports its health status, such as connected, authentication required, or failed to connect. This establishes whether the issue is registration or session connectivity before taking disruptive action; reconnecting the session can refresh the active MCP state when necessary.

#### Learn more

- Connect Claude Code to tools via MCP

</details>


---

## Q94 · pick 2

You are identifying characteristics of strong architectural-decision communication.

Which two characteristics should be included on the list? Each correct answer represents a complete solution. (Select two.)

Choose two

- ✅ **A.** Ownership and review cadence for revisiting the decision when conditions or assumptions change.
- **B.** Distribution to a standing review forum with mandatory attendance from senior engineering leaders.
- **C.** Omission of rejected alternatives to keep the decision document focused and concise for readers.
- ✅ **D.** Alternatives considered along with the criteria that were used to evaluate each alternative.
- **E.** Use of a consistent template across the team to standardize the visual presentation of decisions.

**Answer:** A, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Ownership and review cadence for revisiting the decision when conditions or assumptions change.
D. Alternatives considered along with the criteria that were used to evaluate each alternative.

Strong architectural decision records communicate both accountability and rationale. Ownership with a review cadence keeps a decision maintainable as its assumptions or conditions change, while documenting considered alternatives and their evaluation criteria makes the trade-offs and justification understandable to current and future stakeholders. Official ADR guidance calls for ownership and for recording the context, including possible solutions considered and the decision’s consequences.

#### Learn more

- Architectural decision record process - AWS Prescriptive Guidance

- FAQ about architectural decision records - AWS Prescriptive Guidance

</details>


---

## Q95 · pick 2

An architect reviews a set of architecture-documentation packages before transferring a Claude-based pipeline to an implementation team.

Which two characteristics show that a documentation package is sufficient to enable implementation without continued involvement from the architect? (Select two.)

Choose two

- ✅ **A.** The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.
- ✅ **B.** The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.
- **C.** The document provides a high-level narrative description of the business problem without component-level detail.
- **D.** The document includes the architect’s contact information for questions arising during implementation.
- **E.** The document lists all Claude models that were evaluated but does not specify which was selected or why.

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.
B. The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.

Implementation teams need explicit integration contracts, configuration schemas, and expected input/output shapes to build and connect components correctly. A decision log also preserves the rationale for key architectural choices and rejected alternatives, allowing the team to apply the intended trade-offs without relying on the architect.

</details>


---

## Q96 · pick 2

The engineering lead at Trenova Systems, Inc. is assessing two proposals to improve developer workflows with Claude-assisted tooling. Proposal A integrates Claude Code into the IDE for inline code generation and review. Proposal B sends all code-generation requests through a shared Slack bot with no IDE integration.

Which two observations most accurately assess these proposals against workflow-improvement objectives? (Select two.)

Choose two

- **A.** Proposal B is superior because centralizing requests in Slack creates an auditable log of all code-generation activity.
- ✅ **B.** Proposal B introduces workflow friction by requiring developers to leave the IDE, undermining the productivity objective.
- ✅ **C.** Proposal A reduces context switching by providing AI assistance at the point of development without requiring a separate tool.
- **D.** Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue.
- **E.** Both proposals are equivalent because the model capabilities are identical regardless of the integration point.

**Answer:** B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Proposal B introduces workflow friction by requiring developers to leave the IDE, undermining the productivity objective.
C. Proposal A reduces context switching by providing AI assistance at the point of development without requiring a separate tool.

AI assistance integrated directly into the IDE reduces context switching and supports code generation and review at the point where development work occurs. Requiring developers to submit requests through Slack takes them out of that environment and adds workflow friction, which undermines the productivity objective.

</details>


---

## Q97 · single choice

You are reviewing a peer’s draft architecture decision record (ADR). The ADR records the decision and technical details but omits the alternatives considered and the trade-offs accepted.

Which response is most appropriate?

- **A.** Delete the ADR entirely and rely on the engineering team’s collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding.
- ✅ **B.** Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.
- **C.** Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it.
- **D.** Replace the ADR with a different decision unrelated to the one drafted.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.

An ADR should document not only the decision, but also the alternatives evaluated and the consequences or trade-offs accepted. This preserves the rationale needed for future review, maintenance, audits, and onboarding.

</details>


---

## Q98 · pick 2

A Claude architect is setting up a shared Claude Code environment for a 12-person development team.

Which two configuration choices most directly create a consistent, secure team environment? (Select two.)

Choose two

- ✅ **A.** Commit shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository.
- ✅ **B.** Apply managed configuration to enforce non-overridable security and compliance policies across all team members.
- **C.** Set editor theme and display preferences at the project scope so they are uniform across workstations.
- **D.** Instruct each engineer to configure their preferred Claude model in personal user-scope settings.
- **E.** Store the team’s shared API key in the project-scope settings.json so all engineers use the same credential.

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Commit shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository.
B. Apply managed configuration to enforce non-overridable security and compliance policies across all team members.

Project-scoped configuration can be committed with the repository so all contributors receive the same MCP server definitions and tool-permission baseline. Managed configuration takes precedence over user and project settings and cannot be overridden, enabling organization-wide enforcement of security and compliance policies. Credentials should be kept out of committed project settings and supplied through secure credential mechanisms or environment variables.

#### Learn more

- Connect Claude Code to tools via MCP

- Identity and access management for Claude Code

</details>


---

## Q99 · single choice

A team manager needs every engineer working in the same repository to use identical MCP server definitions, without manually keeping them in sync.

Which configuration approach meets this requirement?

- **A.** managed configuration pushed to all endpoints by the administrator
- **B.** environment variables set at the operating-system level on each workstation
- ✅ **C.** project-scope .claude/settings.json and .mcp.json files committed to the repository
- **D.** each engineer maintains a personal ~/.claude/settings.json with the shared definitions

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. project-scope .claude/settings.json and .mcp.json files committed to the repository

Project-scope MCP servers are stored in the repository’s .mcp.json and are designed to be committed to version control, allowing all project contributors to share the same MCP server definitions. A committed project settings file can accompany that shared repository configuration.

#### Learn more

- Anthropic Claude Code: Connect to tools through MCP

</details>


---

## Q100 · pick 2

An architect at Trenova Systems, Inc. is evaluating two draft communication packages for the same architectural decision. Package 1 includes a threat model, residual-risk register, and control-mapping table. Package 2 includes a list of delivered capabilities and feature-level roadmap dependencies.

Which two audiences are correctly matched to these packages? (Select two.)

Choose two

- **A.** Package 1 engineering implementation team
- **B.** Package 2 executive sponsor
- ✅ **C.** Package 1 security and compliance reviewer
- ✅ **D.** Package 2 product manager owning the roadmap
- **E.** Package 2 security and compliance reviewer

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
C. Package 1 security and compliance reviewer
D. Package 2 product manager owning the roadmap

A threat model, residual-risk register, and control-mapping table support security assurance, risk acceptance, and compliance evaluation, so Package 1 is suited to a security and compliance reviewer. Delivered capabilities and feature-level roadmap dependencies support product planning and prioritization, so Package 2 is suited to the product manager who owns the roadmap.

</details>


---

## Q101 · pick 2

You are establishing a feedback-and-alignment routine for a deployment with multiple stakeholders.

Which two practices should be included in the routine? Each correct answer provides a complete solution. (Select two.)

Choose two

- **A.** Record each session and distribute the recording to stakeholders who could not attend live.
- **B.** Escalate any disagreement among stakeholders to the executive sponsor for binding resolution.
- **C.** Rotate facilitation among the participating stakeholder groups to share ownership of the routine.
- ✅ **D.** Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.
- ✅ **E.** Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
D. Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.
E. Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.

A regular cadence for reassessing expectations and assumptions keeps stakeholder alignment current as deployment conditions change. Explicitly reconciling differing stakeholder positions resolves substantive conflicts instead of leaving them hidden, creating durable alignment.

</details>


---

## Q102 · single choice

You are establishing transparency practices for a customer-facing assistant whose responses are materially influenced by AI.

Which transparency practice most directly promotes responsible deployment?

- **A.** Misrepresent the AI’s role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency.
- **B.** Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI’s role as confidential operational information.
- ✅ **C.** Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.
- **D.** Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.

Responsible deployment requires clear disclosure of AI involvement to the people affected by the system, enabling them to understand the nature of the interaction and calibrate their reliance appropriately. A documented, accessible path to human assistance also supports oversight and escalation when the assistant cannot appropriately resolve a need. Microsoft guidance calls for clear AI disclosure for external-facing agents and visible human handoff or interaction options.

#### Learn more

- Apply responsible AI

- Responsible AI in Azure Workloads

</details>


---

## Q103 · pick 3

You are auditing a procurement-assistant agent whose defined responsibility is drafting purchase requests for review. For each currently configured tool, select Yes if it should remain after a least-privilege audit. Otherwise, select No if it should be removed.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- ✅ **A.** a read-only catalog lookup tool that returns vendor and SKU information
- **B.** an inbox-send tool that emails purchase requests to vendors directly
- ✅ **C.** a draft-write tool that creates purchase-request drafts in the review queue
- **D.** a production-database admin tool unrelated to procurement
- ✅ **E.** A read-only policy-document tool that returns the relevant procurement policies

**Answer:** A, C, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

Correct answers from the source:
a read-only catalog lookup tool that returns vendor and SKU information — Yes
an inbox-send tool that emails purchase requests to vendors directly — No
a draft-write tool that creates purchase-request drafts in the review queue — Yes
a production-database admin tool unrelated to procurement — No
A read-only policy-document tool that returns the relevant procurement policies — Yes

Least privilege permits the read-only catalog and policy lookups needed to prepare compliant purchase-request drafts, plus the draft-write capability required to place drafts in the review queue. Direct vendor email sending exceeds the review-only responsibility, and unrelated production-database administration is unnecessary and overly privileged.

</details>


---

## Q104 · single choice

You are establishing escalation criteria for ambiguous cases in an automated workflow.

Which set of criteria best enables consistent escalation?

- **A.** No escalation criteria; the model decides independently on every turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags.
- **B.** Escalation only after an affected customer has contacted support to complain, after the automated workflow has already completed without human review.
- **C.** Escalation at the discretion of whoever is available when the team’s on-call engineer has spare capacity, without a defined threshold, category, or ambiguity criterion.
- ✅ **D.** A confidence score below a defined threshold, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. A confidence score below a defined threshold, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review.

Consistent escalation depends on explicit, repeatable triggers: a defined confidence threshold, designated high-impact decision categories, classifier-based ambiguity signals, and a user request for review. These criteria enable the workflow to identify cases requiring human oversight before a potentially consequential automated decision is finalized.

</details>


---

## Q105 · pick 2

You are deploying a standardized Claude Code configuration to an engineering team and need to complete the planning activities before piloting the configuration.

Which two steps must be completed BEFORE piloting the configuration with a small group of engineers? Each correct answer represents part of the solution. (Select two.)

Choose two

- ✅ **A.** Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents.
- **B.** Onboard every engineer in the organization to the new configuration through mandatory training sessions.
- **C.** Roll out the stabilized configuration to additional teams with documentation and a defined support channel.
- ✅ **D.** Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope.
- **E.** Iterate the configuration based on the pilot findings and stabilize the baseline before broader rollout.

**Answer:** A, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents.
D. Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope.

A controlled pilot requires defining the applicable team workflows and security boundaries, including which controls must be centrally managed and which belong to a project. That decision enables a project-scope baseline for shared MCP servers, permission rules, and subagents. Claude Code distinguishes centrally managed settings from shared project settings, and project-scoped MCP servers are intended for team-shared configuration. Organization-wide training, broader rollout, and post-pilot refinement follow rather than precede the pilot.

#### Learn more

- Claude Code on Console to Enterprise migration

- Connect Claude Code to tools through MCP

</details>


---

## Q106 · single choice

You are supporting an EU-based deployment subject to GDPR obligations.

Which combination of measures best supports the deployment’s GDPR posture?

- ✅ **A.** enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling
- **B.** disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure
- **C.** using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure
- **D.** pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling

GDPR requires personal data to be limited to what is necessary, retained no longer than necessary, and processed by a service provider under an appropriate binding processor arrangement. Redacting unnecessary personal data, defining retention, maintaining a Data Processing Addendum, and documenting procedures for data-subject rights support these obligations. Claude Enterprise also provides configurable data-retention controls.

#### Learn more

- Regulation (EU) 2016/679 (GDPR)

- Custom Data Retention Controls for Claude Enterprise

</details>


---

## Q107 · single choice

You support a team whose Claude Code sessions routinely load 60 or more MCP tools from numerous servers, exhausting the context budget before a session starts.

Which change most directly resolves this problem without removing capability?

- ✅ **A.** Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.
- **B.** Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session.
- **C.** Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue.
- **D.** Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.

Tool Search supports deferred loading, which prevents deferred MCP tool descriptions from entering the model’s initial context. The tools remain available and their definitions load on demand when discovered through search, reducing initial context overhead without removing MCP capability.

#### Learn more

- Tool search tool — Claude Platform Docs

- MCP connector — Claude Platform Docs

</details>


---

## Q108 · single choice

You are selecting the appropriate level of detail for an implementation guide. The audience is a delivery team that will build the deployment.

Which guidance composition best supports them?

- ✅ **A.** Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks.
- **B.** Component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks.
- **C.** An architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration-parameter tables, or operational runbooks for the delivery team to follow.
- **D.** An architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks.

A delivery team needs implementation-level guidance covering component responsibilities, contracts between components, dominant-flow sequences, configuration parameters and defaults, and operational procedures. Together, these artifacts support building, integrating, configuring, and operating the deployment.

</details>


---

## Q109 · pick 2

You are incorporating Claude Code into a team workflow and must complete the design and configuration steps before piloting the integrated workflow with a small group.

Which two steps must be completed BEFORE piloting the integrated workflow? Each correct answer represents part of the solution. (Select two.)

Choose two

- **A.** Document the integrated workflow with handoff criteria, permission boundaries, and on-call runbooks.
- ✅ **B.** Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.
- **C.** Negotiate the workflow change with affected teams and obtain formal sign-off from each manager.
- **D.** Iterate the integrated workflow based on pilot findings before broader rollout to the team.
- ✅ **E.** Configure the project-scope MCP servers, permissions, subagents, and persistent project context.

**Answer:** B, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.
E. Configure the project-scope MCP servers, permissions, subagents, and persistent project context.

A Claude Code pilot needs an explicit division between workflow activities where AI assistance adds value and activities that remain under human authority. It also needs the project’s operational configuration in place: MCP integrations, permission controls, specialized subagents, and persistent project instructions/context. Claude Code documents project-scoped MCP setup, permissions, subagents, and project memory as distinct configuration mechanisms that establish those capabilities and boundaries.

#### Learn more

- Claude Code Commands

- Connect Claude Code to tools via MCP

</details>


---

## Q110 · single choice

You are documenting an architectural decision to enable future audit and onboarding.

Which artifact is the best fit?

- **A.** A slide deck in a presentation folder with no accompanying written rationale.
- **B.** A code comment in a single file that contains an opinion of one engineer.
- ✅ **C.** An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors.
- **D.** A short verbal note shared during a hallway conversation with no written record.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors.

An Architecture Decision Record preserves the context and rationale for an architectural choice, including alternatives, decision outcome, and consequences. Its written, attributable record supports later audits and helps new team members understand why the architecture took its current form.

#### Learn more

- Maintain an architecture decision record (ADR)

</details>


---

## Q111 · single choice

A business sponsor has asked for an AI solution to “improve customer experience.” The sponsor cannot specify which customer journey is failing, which metric demonstrates that failure, or which decisions the AI should support. The sponsor is asking you to start design work next week.

Which delegation-competency action should you take first?

- **A.** Recommend that the sponsor revise the request and resubmit it later for evaluation.
- **B.** Begin prototyping a generic assistant against the broad request before the next deadline.
- **C.** Propose a fixed scope that you commit to by default based on your own assumptions.
- ✅ **D.** Facilitate a structured discovery to define the failing decision and the target metric.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Facilitate a structured discovery to define the failing decision and the target metric.

A structured discovery session establishes the specific failing decision, the affected customer journey, and a measurable target outcome before solution design begins. These definitions provide the problem scope and success criteria needed to determine whether AI is appropriate and what it should support.

</details>


---

## Q112 · single choice

A Claude architect must ensure that, once it is set, a security-hardening flag cannot be disabled by any individual engineer.

Which configuration scope correctly enforces this requirement?

- **A.** User scope (~/.claude/settings.json) on each engineer’s machine
- **B.** Environment variable defined in the CI/CD pipeline only
- ✅ **C.** Managed configuration applied centrally and marked as non-overridable
- **D.** Project scope (.claude/settings.json) committed to the repository

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Managed configuration applied centrally and marked as non-overridable

Claude Code applies centrally deployed managed settings above user, project, local, and command-line configuration, preventing an engineer from overriding an enforced security policy. A managed policy is therefore the appropriate scope for an organization-wide non-overridable hardening flag.

#### Learn more

- Deploy managed settings - Claude Code Docs

</details>


---

## Q113 · single choice

You are setting up a HIPAA-eligible deployment for a healthcare customer.

Which configuration enables HIPAA compliance when using Anthropic-provided tools?

- **A.** Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box.
- ✅ **B.** Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking.
- **C.** Disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA.
- **D.** An ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking.

A HIPAA-eligible Anthropic deployment must be covered by an appropriate Business Associate Agreement for an approved service. Zero Data Retention and audit logging support the required handling and accountability controls, whereas consumer and personal accounts without a BAA do not provide that contractual HIPAA coverage. The deployment must also follow Anthropic’s HIPAA-specific configuration and feature limitations.

#### Learn more

- Business Associate Agreements (BAA) for Commercial Customers

- Anthropic Trust Center

</details>


---

## Q114 · single choice

A senior architect is developing briefing materials for a new retrieval architecture. The executive sponsor has asked for a summary of the architectural decision.

Which framing is most suitable for that audience?

- **A.** Technical alternatives evaluated, implementation implications, and component-level consequences.
- ✅ **B.** Business outcomes achieved, trade-offs accepted, and high-level risks acknowledged.
- **C.** Capabilities delivered, scope implications, and feature-level dependencies on the roadmap.
- **D.** Threat model, control mappings, residual-risk acceptance, and audit traceability.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Business outcomes achieved, trade-offs accepted, and high-level risks acknowledged.

Executive-level architectural communication should focus on the business outcomes enabled by the decision, the significant trade-offs involved, and the high-level risks that require awareness or sponsorship.

</details>


---

## Q115 · pick 1

You are setting up Claude Code for a team that requires every engineer to use the same MCP server set, permission rules, and project context throughout the engineering monorepo.

Which configuration scope best meets this requirement?

- **A.** User scope
- ✅ **B.** Project scope
- **C.** Local scope

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Select the answer that correctly completes the sentence. → Project scope)

Correct answer from the source:
Select the answer that correctly completes the sentence. — Project scope

Project scope stores repository-level configuration that can be version-controlled and shared with all collaborators. User and local scopes are personal or machine-specific, so they cannot reliably enforce a common MCP server set, permissions, and project context across a team.

</details>


---

## Q116 · single choice

You are conducting a discovery session with a business sponsor who requests “an AI system to fix our customer escalations.”

Which approach is most likely to produce actionable requirements?

- **A.** Accept the sponsor’s original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints.
- ✅ **B.** Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints—latency, cost, audit, and data sensitivity—apply.
- **C.** Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions.
- **D.** Assume the requirement matches the architect’s previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints—latency, cost, audit, and data sensitivity—apply.

Actionable requirements require clarifying the people involved, the events that initiate escalation, the desired definition of successful resolution, and applicable nonfunctional constraints such as latency, cost, auditability, and data sensitivity. These details turn a vague solution request into scoping and design requirements.

</details>


---

## Q117 · single choice

You are reviewing a peer's draft system prompt containing conflicting instructions: one section says never to speculate beyond the supplied source, while another instructs the model to confidently fill in any gaps.

Which response is most appropriate?

- **A.** Add a priority instruction directing the model to evaluate all instructions and apply whichever appears most contextually appropriate on each request.
- ✅ **B.** Remove or rewrite the gap-filling instruction so the prompt consistently constrains the model to source-supported content.
- **C.** Increase temperature so output randomness masks the contradiction.
- **D.** Keep both instructions and rely on the model to decide which one to follow on each request.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Remove or rewrite the gap-filling instruction so the prompt consistently constrains the model to source-supported content.

System prompts should give consistent, unambiguous instructions. Removing or rewriting the instruction to fill gaps ensures the model does not invent unsupported information and remains constrained to content supported by the supplied source.

</details>


---

## Q118 · pick 2

You are assessing a Claude-based deployment for compliance with a particular regulation.

Which two steps must be performed before mapping the deployment’s data flows to individual regulatory clauses? Each correct answer represents part of the solution. (Select two.)

Choose two

- **A.** Compare the in-place controls against the regulatory requirements to identify any compliance gaps.
- ✅ **B.** Identify the applicability of the regulation based on data types, jurisdiction, and audience.
- **C.** Schedule the remediation work with the engineering team based on the prioritized gap findings.
- **D.** Document the identified gaps along with recommended remediations and residual risk for sign-off.
- ✅ **E.** Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.

**Answer:** B, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Identify the applicability of the regulation based on data types, jurisdiction, and audience.
E. Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.

Regulatory applicability must be established from the data types, jurisdiction, and audience before clause-level analysis can be scoped. The vendor’s available compliance tooling and enabled compliance affordances must also be identified so the actual controls and data-handling capabilities can be mapped to the applicable clauses. Gap analysis, remediation planning, and sign-off follow that mapping.

</details>


---

## Q119 · pick 2

You are conducting a discovery engagement for a new Claude-based capability and must complete the requirements-gathering activities before validating the captured requirements with stakeholders.

Which two steps must be completed BEFORE validating the captured requirements with stakeholders? Each correct answer presents part of the solution. (Select two.)

Choose two

- **A.** Produce architecture decision records that capture the rationale for major design choices.
- ✅ **B.** Capture the business goals, success criteria, and the in-scope user population for the engagement.
- **C.** Document the consolidated requirements with traceability to the source stakeholder for each item.
- **D.** Schedule the rollout milestones and dependencies with engineering and product partners.
- ✅ **E.** Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.

**Answer:** B, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Capture the business goals, success criteria, and the in-scope user population for the engagement.
E. Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.

Business goals, measurable success criteria, scope, and the intended user population define the outcome the capability must serve. Non-functional constraints such as latency, cost, auditability, data sensitivity, and regulatory obligations bound which solutions are acceptable. These inputs must be elicited before stakeholders can meaningfully validate the requirements.

#### Learn more

- Define success criteria and build evaluations

- Claude prompting best practices

</details>


---

## Q120 · pick 2

You are creating a human-in-the-loop validation workflow for a new Claude-based deployment and must finish the design steps before running a pilot of the workflow.

Which two steps must be completed BEFORE piloting the workflow using a representative subset of traffic? Each correct answer represents part of the solution. (Select two.)

Choose two

- ✅ **A.** Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.
- **B.** Iterate the workflow design based on observed pilot findings before broader rollout to production.
- **C.** Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures.
- **D.** Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step.
- ✅ **E.** Identify the decision points in the pipeline that require human oversight by impact and reversibility.

**Answer:** A, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.
E. Identify the decision points in the pipeline that require human oversight by impact and reversibility.

A human-in-the-loop validation design must identify the pipeline decisions that warrant human oversight according to their impact and reversibility, and define the sampling and escalation criteria for each oversight point. Those controls establish the scope and behavior to be tested in the pilot; revisions based on pilot findings occur afterward.

</details>


---

## Q121 · single choice

Engineering leadership plans to deploy Claude Skills to 280 developers across 14 teams. The Skills will capture internal coding standards, code-review checklists, and incident-postmortem templates. Leadership has asked how Skill authorship should be governed so that Skills stay trustworthy without creating a bottleneck around one central team.

Which governance model should you recommend?

- **A.** Per-developer authorship across the 280 engineers with no team-level coordination required.
- **B.** Centralized authorship by a single platform team responsible for every Skill produced.
- **C.** Fully decentralized authorship across the 14 teams with no review before publication.
- ✅ **D.** Federated authorship across the 14 teams with a central review and publication gate.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Federated authorship across the 14 teams with a central review and publication gate.

Federated authorship enables each team to create and maintain Skills for its own domain, distributing the authoring workload. A central review and publication gate ensures that shared Skills meet organization-wide quality, security, consistency, and trust requirements before they become broadly available.

</details>


---

## Q122 · pick 2

You are assembling continuity practices that extend across the deployment lifecycle.

Which two practices should be included on the list? Each correct answer provides a complete solution. (Select two.)

Choose two

- **A.** Maintain a stakeholder register and notify the listed parties at every phase transition event.
- ✅ **B.** Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.
- **C.** Archive every phase deliverable in long-term storage to preserve a record of what was produced.
- ✅ **D.** Capture lessons learned at the end of each phase and surface them as inputs to the next phase.
- **E.** Lock decisions made in early phases to prevent revisiting them as later phases begin.

**Answer:** B, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
B. Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.
D. Capture lessons learned at the end of each phase and surface them as inputs to the next phase.

A continuous deployment lifecycle uses a persistent evaluation framework and reference set so results remain comparable across iterations and regressions can be detected. It also incorporates lessons learned from each phase into the next phase, enabling systematic improvement. Microsoft guidance describes continuously operationalized evaluation and recommends postmortems to capture deployment lessons.

#### Learn more

- Build an iterative evaluation framework in four stages

- Architecture strategies for safe deployment practices

</details>


---

## Q123 · single choice

You are choosing the documentation set that should accompany a Claude-based deployment at handoff.

Which set is the most complete?

- ✅ **A.** Architecture overview, ADRs, component-level diagrams, runbooks for common operations, an on-call playbook, and a list of known limitations.
- **B.** Code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members.
- **C.** A single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers.
- **D.** A verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Architecture overview, ADRs, component-level diagrams, runbooks for common operations, an on-call playbook, and a list of known limitations.

A complete deployment handoff package documents the overall architecture and component design, records architectural decisions, provides runbooks for routine operations and an on-call playbook for support, and identifies known limitations for operators and future maintainers.

</details>


---

## Q124 · pick 3

You are categorizing token-management tactics by the request-lifecycle stage at which each applies.

For each tactic, select its applicable request-lifecycle stage.

- ✅ **A.** Input Preparation
- ✅ **B.** Prompt Construction
- ✅ **C.** Output Handling

**Answer:** C, B, A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Persist the validated output for downstream consumption and audit. → Output Handling; Order the prompt sections so cacheable content sits before per-request content. → Prompt Construction; Summarize prior conversation history when full history is no longer needed. → Input Preparation; Validate the model's structured output against the expected schema. → Output Handling; Move stable repeated content into a cacheable prefix at the head of the prompt. → Prompt Construction; Trim retrieved passages to spans relevant to the user's question. → Input Preparation)

Correct answers from the source:
Persist the validated output for downstream consumption and audit. — Output Handling
Order the prompt sections so cacheable content sits before per-request content. — Prompt Construction
Summarize prior conversation history when full history is no longer needed. — Input Preparation
Validate the model's structured output against the expected schema. — Output Handling
Move stable repeated content into a cacheable prefix at the head of the prompt. — Prompt Construction
Trim retrieved passages to spans relevant to the user's question. — Input Preparation

Input preparation reduces or condenses conversation and retrieved context before it is assembled. Prompt construction determines the ordering and stable cacheable prefix of the prompt. Output handling validates generated structured data and persists validated results for downstream use and auditing.

#### Learn more

- Prompt caching

- Structured Outputs

</details>


---

## Q125 · single choice

When the support agent invokes escalate_to_human, human agents report they must re-read the entire raw conversation to understand each case, and average handle time for escalated tickets has risen. What should the agent do at the moment of escalation to fix this?

- **A.** Attach the full untrimmed transcript of the conversation so the human has complete information.
- **B.** Enable extended thinking on the escalation turn so the model reasons longer before handing off.
- **C.** Escalate earlier in ambiguous cases so humans receive tickets before much conversation has accumulated.
- ✅ **D.** Produce a structured handoff summary — the customer's issue, verified identifiers, tool results and account state gathered, actions already attempted, and the specific recommended next step.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Produce a structured handoff summary — the customer's issue, verified identifiers, tool results and account state gathered, actions already attempted, and the specific recommended next step.

Why D is correct. Effective human handoff requires a structured summary that front-loads exactly what the human needs: the problem, confirmed identifiers, what was tried, and a recommendation. That is what removes the re-reading burden and shortens handle time. Dumping the full transcript (A) is the current failure mode — it forces the human to reconstruct the case themselves. Extended thinking (B) improves the model's own reasoning but produces no artifact for the human. Escalating earlier (C) changes when tickets arrive, not the missing information problem, and would likely lower first-contact resolution.

</details>


---

## Q126 · single choice

You are evaluating two configurations for an internal compliance Q&A assistant. Configuration X decreases top-k retrieval and uses a lighter model, reducing p95 latency by 38 percent but resulting in a measured 2 percent decrease in the accuracy benchmark. Configuration Y keeps the current top-k retrieval setting and heavier model, with no change to p95 latency and no measurable accuracy change. The deployment’s declared priorities are accuracy first and latency second.

Which configuration is the better recommendation?

- **A.** Configuration X, because the 2 percent accuracy reduction falls within normal benchmark variance and is not a meaningful regression.
- ✅ **B.** Configuration Y, because the deployment’s stated priority is accuracy first, and Configuration X produces a measured reduction in accuracy.
- **C.** Configuration X, because lower latency generally matters more than accuracy, regardless of the deployment’s stated priorities.
- **D.** Configuration X, because a 38 percent latency improvement outweighs a 2 percent accuracy reduction as a general rule across compliance deployments.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Configuration Y, because the deployment’s stated priority is accuracy first, and Configuration X produces a measured reduction in accuracy.

When accuracy is the primary deployment priority, the configuration that maintains measured accuracy is preferable. Configuration Y preserves accuracy, while Configuration X introduces a measured accuracy regression; its latency improvement is secondary to that stated priority.

</details>


---

## Q127 · pick 2

You are designing a human-in-the-loop validation workflow.  
Which two design elements belong in the workflow? (Choose two.)  
Each correct answer presents a complete solution.

- ✅ **A.** capture of reviewer decisions as labeled data that feeds the evaluation set over time
- **B.** mandatory reviewer agreement with the model output to maintain consistent reviewer-model alignment
- **C.** aggregate reviewer throughput metrics published weekly to leadership for headcount planning
- **D.** uniform sampling of all model outputs to give every request an equal chance of review
- ✅ **E.** risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs

**Answer:** A, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. capture of reviewer decisions as labeled data that feeds the evaluation set over time
E. risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs

</details>


---

## Q128 · single choice

A team exposes a customer-support agent that can read tickets, draft replies, issue refunds, and delete user accounts. Support staff only ever need to read tickets and draft replies. Applying least-privilege principles, which change best reduces risk?

- **A.** Add logging to the refund and delete tools so misuse can be audited later.
- ✅ **B.** Remove the refund and delete tools from the agent's configuration entirely.
- **C.** Keep all tools but add a confirmation prompt before refunds and deletions.
- **D.** Replace the agent with a larger model that follows instructions more reliably.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Remove the refund and delete tools from the agent's configuration entirely.

Least privilege means removing capabilities the role does not require, eliminating the attack surface rather than monitoring or guarding it. Logging (A) and confirmations (C) are detective/compensating controls, not removal of unnecessary privilege; model size (D) is unrelated to authorization scope.

</details>


---

## Q129 · single choice

An application sends the same 8,000-token system prompt and policy document on every request, followed by a short, varying user message. Latency and cost are both concerns. Which optimization most directly addresses both?

- **A.** Truncate the policy document to the first 1,000 tokens.
- **B.** Switch to the smallest available model regardless of task fit.
- ✅ **C.** Place the static system prompt and policy before the dynamic content and enable prompt caching.
- **D.** Move the policy document into a few-shot example block.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Place the static system prompt and policy before the dynamic content and enable prompt caching.

Ordering stable content first and enabling prompt caching lets repeated prefixes be reused, reducing both time-to-first-token and per-request cost without discarding required context. Truncation (A) loses needed policy; downsizing blindly (B) risks quality; relocating to few-shot (D) does not create a cacheable, reusable prefix.

</details>


---

## Q130 · single choice

A RAG system suddenly returns confident but incorrect answers after a document refresh, while latency and model version are unchanged. What is the most likely first place to investigate?

- **A.** The model weights have silently changed.
- ✅ **B.** The retrieval/indexing step is returning irrelevant or stale chunks.
- **C.** The temperature setting is too low.
- **D.** The context window has shrunk.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. The retrieval/indexing step is returning irrelevant or stale chunks.

Confident-but-wrong answers following a document refresh, with model and latency unchanged, point to retrieval feeding the model poor context, for example a broken re-index or mismatched embeddings. The other options would not be triggered specifically by a document refresh.

</details>


---

## Q131 · single choice

You are configuring Claude Code for a team that needs every engineer to share the same MCP server set, permission rules, and project context across the engineering monorepo.

Which configuration scope best supports this requirement?

- **A.** User scope, with the MCP server definitions and permission rules placed in each engineer's ~/.claude/settings.json and synchronized manually through a shared setup script outside version control.
- **B.** Local scope configured only on the lead architect's machine, with no configuration present on other engineers' machines and no mechanism to distribute MCP servers or permission rules.
- ✅ **C.** Project scope, with the configuration committed to the repository so every engineer working in the project receives the same MCP servers, permissions, and context.
- **D.** User scope configured individually on each engineer's machine, with no shared configuration committed to the repository and no guarantee of consistency across the team.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Project scope, with the configuration committed to the repository so every engineer working in the project receives the same MCP servers, permissions, and context.

Project scope is designed for configuration that must be shared by everyone working in a repository. Committing the approved configuration provides versioning, review history, repeatable onboarding, and consistent MCP and permission behavior across the monorepo. User scope is intended primarily for individual preferences and personal rules, so independently maintained user files create configuration drift. Local scope affects only one person in one project and is therefore unsuitable for team-wide distribution. A lead architect's local configuration cannot establish a shared environment. Claude Code documentation specifically describes .claude/settings.json as the shared project settings file that teams check into source control. Security-critical policies that must not be overridden should additionally be enforced through managed organizational settings rather than relying exclusively on repository configuration. Claude Code: Settings files and precedence

</details>


---

## Q132 · single choice

A software vendor wants to build a RAG assistant over its own internal support-ticket archive (not the public web) and needs the same quality of source attribution that citation-grounded answers provide, without sending queries to an external search index.

Which feature fits this requirement?

- **A.** Web search tool, because it augments Claude's knowledge with current information regardless of where the documents are hosted.
- **B.** Web fetch, because retrieving full page content from specified URLs works equally well for private ticket archives.
- ✅ **C.** Search results, because it provides citation-quality source attribution for custom knowledge bases outside the public web.
- **D.** Code execution, because running retrieval scripts in a sandbox lets the model fetch and cite ticket content directly.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
C. Search results, because it provides citation-quality source attribution for custom knowledge bases outside the public web.

Correct. Search results is built to enable natural citations for RAG applications, achieving web-search-quality citations for custom knowledge bases and internal tools.

**A.** Incorrect. The web search tool augments Claude with public web content and is not the mechanism for attributing answers to a private, internal ticket archive.

**B.** Incorrect. Web fetch retrieves content from specified URLs on the web; it is not designed to provide citation attribution over an internal, non-web knowledge base.

**C.** Correct. Search results is built to enable natural citations for RAG applications, achieving web-search-quality citations for custom knowledge bases and internal tools.

**D.** Incorrect. Code execution runs sandboxed code for analysis and file processing; it is not a citation or source-attribution feature for retrieval-augmented answers.

</details>


---

## Q133 · pick 2

A long-running autonomous coding agent needs two things in its architecture: automatically clearing stale tool results from context as a session approaches the token limit, and retaining key project facts across separate sessions run days apart. Select all components that correctly satisfy these two needs.

- ✅ **A.** Context editing, which supports clearing tool results automatically as a conversation approaches the token limit
- ✅ **B.** The memory tool, which lets Claude store and retrieve information across separate conversations over time
- **C.** Fine-grained tool streaming, which reduces latency by streaming tool parameters without JSON buffering
- **D.** Compaction, positioned as the sole mechanism that fully replaces context editing for long-running sessions
- **E.** Code execution, which runs code in a sandboxed container for data analysis and file processing tasks
- **F.** The Files API, which lets uploaded documents be referenced repeatedly without re-uploading their content

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Context editing, which supports clearing tool results automatically as a conversation approaches the token limit
B. The memory tool, which lets Claude store and retrieve information across separate conversations over time

A. Correct. Context editing is documented as supporting automatic clearing of tool results when approaching token limits, directly addressing the first need in the scenario.

B. Correct. The memory tool is documented as enabling Claude to store and retrieve information across conversations, building knowledge over time, which addresses retaining facts across separate sessions.

**A.** Correct. Context editing is documented as supporting automatic clearing of tool results when approaching token limits, directly addressing the first need in the scenario.

**B.** Correct. The memory tool is documented as enabling Claude to store and retrieve information across conversations, building knowledge over time, which addresses retaining facts across separate sessions.

**C.** Incorrect. Fine-grained tool streaming reduces latency for large tool-call parameters; it has no role in clearing stale context or retaining cross-session facts.

**D.** Incorrect. Compaction summarizes conversation history automatically, but it is a distinct, separate feature from context editing, not a replacement that makes context editing unnecessary.

**E.** Incorrect. Code execution runs sandboxed code for analysis tasks; it does not manage context size or persist facts across sessions.

**F.** Incorrect. The Files API avoids re-uploading document content across requests, which is useful but does not clear stale tool results or persist project facts across separate sessions.

</details>


---

## Q134 · pick 2

A team is choosing between orchestrator-workers and parallelization by sectioning for a document-analysis pipeline. Which statements correctly distinguish orchestrator-workers from parallelization by sectioning?

- ✅ **A.** In orchestrator-workers, a central LLM determines subtasks at runtime, whereas sectioning requires subtasks predefined before execution
- **B.** In orchestrator-workers, worker LLMs run in a fixed, predetermined order, whereas sectioning always runs its subtasks simultaneously
- ✅ **C.** Orchestrator-workers suits subtasks that vary unpredictably case to case, while sectioning suits tasks that split cleanly into known subtasks
- **D.** Parallelization by sectioning always requires a second LLM to evaluate the sectioned outputs before combining them into a final result
- **E.** Orchestrator-workers and parallelization by sectioning both aggregate multiple independent votes on one input to reach a majority-based answer

**Answer:** A, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. In orchestrator-workers, a central LLM determines subtasks at runtime, whereas sectioning requires subtasks predefined before execution
C. Orchestrator-workers suits subtasks that vary unpredictably case to case, while sectioning suits tasks that split cleanly into known subtasks

A. Correct. The core distinction is that orchestrator-workers decomposes subtasks dynamically at runtime, while sectioning requires the subtasks to be known and fixed before execution starts.

C. Correct. Orchestrator-workers fits unpredictable, case-varying subtask requirements, while sectioning fits tasks that decompose cleanly into known independent pieces ahead of time.

**A.** Correct. The core distinction is that orchestrator-workers decomposes subtasks dynamically at runtime, while sectioning requires the subtasks to be known and fixed before execution starts.

**B.** Incorrect. Orchestrator-workers does not imply a fixed predetermined order for its workers, and this option's framing misstates the relationship between the two patterns.

**C.** Correct. Orchestrator-workers fits unpredictable, case-varying subtask requirements, while sectioning fits tasks that decompose cleanly into known independent pieces ahead of time.

**D.** Incorrect. Sectioning combines independent subtask outputs directly; requiring a second LLM to evaluate and combine them describes evaluator-optimizer, not sectioning.

**E.** Incorrect. Aggregating multiple independent votes on the same input to reach a majority answer describes parallelization by voting, not orchestrator-workers or sectioning.

</details>


---

## Q135 · single choice

A team is building an agent that must audit a large codebase across three distinct dimensions: security vulnerabilities, code quality, and test coverage. Each dimension requires a different set of tools and a different area of focus.

Which approach best decomposes this problem using the Agent SDK?

- ✅ **A.** Define an orchestrator agent that invokes specialized subagents through the Agent tool, each configured with a scoped tool set and description matching its subtask domain
- **B.** Send one prompt to the main agent instructing it to sequentially perform code quality checks, then security scanning, then test coverage analysis without additional configuration
- **C.** Configure a single MCP server that exposes security, quality, and coverage checks as three separate tools, and let the primary agent call each tool directly instead of delegating
- **D.** Increase the primary agent's context window and rely on extended thinking so it can reason through all three review dimensions within one continuous session

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Define an orchestrator agent that invokes specialized subagents through the Agent tool, each configured with a scoped tool set and description matching its subtask domain

Correct. The Agent SDK's subagent capability lets an orchestrator delegate focused subtasks to specialized agents, each with its own scoped tools and description, then aggregate their results - the intended decomposition pattern for multi-dimensional review work.

**A.** Correct. The Agent SDK's subagent capability lets an orchestrator delegate focused subtasks to specialized agents, each with its own scoped tools and description, then aggregate their results - the intended decomposition pattern for multi-dimensional review work.

**B.** Incorrect. A single undifferentiated prompt forces one agent to hold all three review contexts and tool needs at once, losing the isolation and specialization benefits of decomposition.

**C.** Incorrect. Exposing checks as tools on one MCP server still leaves a single agent responsible for orchestrating and interpreting all three domains itself, rather than delegating focused reasoning to specialized subagents.

**D.** Incorrect. A larger context window and extended thinking add reasoning depth but do not decompose the task into independently scoped, delegatable units of work.

</details>


---

## Q136 · pick 2

An enterprise customer's support desk has committed to a contractual 99.9% uptime and sub-2-second p95 response SLA for its Claude-powered ticket triage assistant. During architecture review, the team must select which platform capabilities to prioritize primarily to protect this SLA commitment. Which two capabilities are the most directly relevant to protecting a latency and availability SLA? (Select 2)

- ✅ **A.** Server-side fallback, which retries a refused request against a backup model within the same API call for a timely response
- ✅ **B.** Choosing a model with faster comparative latency, such as Claude Haiku 4.5, for the latency-sensitive triage path
- **C.** Batch processing, which processes large volumes of requests asynchronously at a discounted rate over an extended completion window
- **D.** Agent Skills, which extend Claude's capabilities with pre-built instructions and scripts for document-format tasks
- **E.** The Files API, which lets documents be uploaded once and referenced across multiple requests without re-uploading content

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Server-side fallback, which retries a refused request against a backup model within the same API call for a timely response
B. Choosing a model with faster comparative latency, such as Claude Haiku 4.5, for the latency-sensitive triage path

A. Correct. Server-side fallback keeps a request from failing outright by automatically retrying against a named backup model within the same call, directly protecting availability and response-time commitments when the primary model declines a request.

B. Correct. Selecting a model chosen for faster comparative latency, such as Haiku 4.5, directly targets the sub-2-second p95 requirement on the synchronous triage path, making it a core lever for meeting the SLA.

**A.** Correct. Server-side fallback keeps a request from failing outright by automatically retrying against a named backup model within the same call, directly protecting availability and response-time commitments when the primary model declines a request.

**B.** Correct. Selecting a model chosen for faster comparative latency, such as Haiku 4.5, directly targets the sub-2-second p95 requirement on the synchronous triage path, making it a core lever for meeting the SLA.

**C.** Batch processing is designed for asynchronous, non-latency-sensitive workloads with an extended completion window, which is the opposite of what a sub-2-second synchronous SLA requires.

**D.** Agent Skills extend task capability for document-format work such as spreadsheets or slides; they are not a mechanism for protecting response latency or uptime commitments.

**E.** The Files API reduces redundant re-uploading of documents across requests, which helps with convenience and token efficiency but is not a direct lever for latency or availability SLA protection.

</details>


---

## Q137 · single choice

A manufacturing client wants a Claude-based quality-inspection assistant that repeatedly analyzes the same reference specification documents alongside new inspection reports throughout the day. The client's stated goal is to reduce redundant token spend on the unchanging reference material while keeping individual inspection turnaround fast.

Which architectural choice best serves this efficiency and cost goal?

- ✅ **A.** Use prompt caching so the unchanging reference specification is cached and reused across requests, cutting cost and latency
- **B.** Move the entire workload to the Message Batches API so all inspection reports are processed together once per day
- **C.** Increase the effort parameter to xhigh on every inspection request so Claude reasons more thoroughly each time
- **D.** Re-upload the full reference specification as plain text in every single request to guarantee the model always has the latest version

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Use prompt caching so the unchanging reference specification is cached and reused across requests, cutting cost and latency

Correct. Prompt caching is designed exactly for this pattern: providing Claude with recurring background context, such as an unchanging reference document, so subsequent requests reduce both cost and latency instead of reprocessing the same content each time.

**A.** Correct. Prompt caching is designed exactly for this pattern: providing Claude with recurring background context, such as an unchanging reference document, so subsequent requests reduce both cost and latency instead of reprocessing the same content each time.

**B.** Batch processing trades same-day turnaround for cost savings on non-urgent work, which conflicts with the client's requirement to keep individual inspection turnaround fast throughout the day.

**C.** Raising the effort parameter increases reasoning depth and token usage per request, which adds cost rather than reducing the redundant token spend the client wants to cut.

**D.** Re-uploading the full reference document in every request is the exact redundant-token pattern the client wants eliminated, and it neither reduces cost nor improves turnaround.

</details>


---

## Q138 · single choice

A coding assistant must modify an unknown number of files across a repository to implement a feature, where the exact files and scope of changes can only be determined once the assistant inspects the codebase.

Which pattern is most appropriate?

- ✅ **A.** Orchestrator-workers, where a central LLM inspects the repository and dynamically delegates each file edit to a worker LLM
- **B.** Prompt chaining, where the assistant edits files in a fixed sequence determined before inspecting the repository
- **C.** Parallelization by sectioning, where the assistant edits every file in the repository simultaneously using a predetermined split
- **D.** Routing, where the assistant classifies the feature request and sends it to one of several fixed file-editing prompts

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Orchestrator-workers, where a central LLM inspects the repository and dynamically delegates each file edit to a worker LLM

Correct. Anthropic describes the orchestrator-workers pattern as having a central LLM dynamically break down tasks, delegate them to worker LLMs, and synthesize results. Official guidance states this pattern is "well-suited for complex tasks where you can't predict the subtasks needed (in coding, for example, the number of files that need to be changed and the nature of the change in each file likely depend on the task)." This matches the scenario of an unpredictable set of repository edits. Anthropic does note that real-time coordination among coding agents is still challenging, but among the available workflow patterns this is the documented fit.

**A.** Correct. Anthropic describes the orchestrator-workers pattern as having a central LLM dynamically break down tasks, delegate them to worker LLMs, and synthesize results. Official guidance states this pattern is "well-suited for complex tasks where you can't predict the subtasks needed (in coding, for example, the number of files that need to be changed and the nature of the change in each file likely depend on the task)." This matches the scenario of an unpredictable set of repository edits. Anthropic does note that real-time coordination among coding agents is still challenging, but among the available workflow patterns this is the documented fit.

**B.** Incorrect. Prompt chaining uses a predefined sequence in which the output of one step feeds the next. In this scenario, the files and scope of changes cannot be known until the repository is inspected, so a fixed sequence determined before inspection would likely miss the correct edits or require rework. A dynamic delegation pattern such as orchestrator-workers is more appropriate.

**C.** Incorrect. Parallelization by sectioning works when the task can be divided into independent, predictable sections before execution. Here the exact files are unknown and cannot be predetermined before inspecting the codebase. Editing every file simultaneously using a fixed split would be inefficient and could introduce incorrect changes; orchestrator-workers handles dynamic delegation instead.

**D.** Incorrect. Routing classifies an input and sends it to a specialized fixed prompt or workflow, but it does not inspect the repository and dynamically delegate individual file edits as subtasks emerge. The described task requires dynamic planning and delegation, which is characteristic of the orchestrator-workers pattern.

</details>


---

## Q139 · pick 3

A developer is building an email-triage agent that reads inbound email bodies via a tool and drafts replies. To harden it against embedded instructions in email bodies, which combination of design choices should the developer apply? (Select all that apply)

- ✅ **A.** State a system prompt policy that content returned by tools is untrusted data and must never override the system prompt or the user's original request
- ✅ **B.** JSON-encode the email body when passing it as a tool result so quotes or tags in the content cannot break out of the surrounding structure
- ✅ **C.** Screen tool outputs with a lightweight classifier model before passing them to the main agent, and strip or flag content if an injection is suspected
- **D.** Place the developer's own operating instructions inside the same tool_result block as the email body so both travel together in one message
- **E.** Grant the agent broad, unscoped access to the user's full mailbox and account settings so it never needs to ask for additional permissions mid-task

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. State a system prompt policy that content returned by tools is untrusted data and must never override the system prompt or the user's original request
B. JSON-encode the email body when passing it as a tool result so quotes or tags in the content cannot break out of the surrounding structure
C. Screen tool outputs with a lightweight classifier model before passing them to the main agent, and strip or flag content if an injection is suspected

A. Correct. Stating explicitly that tool-returned content is untrusted data that must not override instructions is a core documented mitigation for indirect prompt injection.

B. Correct. JSON-encoding untrusted content provides unambiguous delimiters so an attacker cannot break out of the data context into an instruction context.

C. Correct. Screening tool outputs with a lightweight classifier before they reach the main conversation is a documented pattern for catching injected instructions in tool results.

**A.** Correct. Stating explicitly that tool-returned content is untrusted data that must not override instructions is a core documented mitigation for indirect prompt injection.

**B.** Correct. JSON-encoding untrusted content provides unambiguous delimiters so an attacker cannot break out of the data context into an instruction context.

**C.** Correct. Screening tool outputs with a lightweight classifier before they reach the main conversation is a documented pattern for catching injected instructions in tool results.

**D.** Incorrect. Anthropic explicitly advises against placing your own instructions in tool results, since Claude is trained to treat tool-result content as untrusted data and may ignore or flag instructions placed there.

**E.** Incorrect. This violates the least-privilege principle; broad unscoped access increases the damage a successful injection could cause rather than limiting it.

</details>


---

## Q140 · single choice

A team is building an English-to-Spanish translation feature that will be called repeatedly with different user-submitted text. They want to keep the instructional wording consistent across calls while making it easy to swap in new text and track changes to the instructions separately from the text being translated.

Which approach best fits this goal?

- ✅ **A.** Define a prompt template with the fixed instruction text and a placeholder such as {{text}}, substituting only the variable content on each call while the surrounding instructions stay constant.
- **B.** Regenerate the complete translation prompt on every call by constructing the instruction string dynamically with the user's text, ensuring that each request carries an up-to-date version of the wording.
- **C.** Store the entire prompt containing the fixed instructions and the user's text as one static string, editing the string by hand for each new translation request so the prompt is always up to date.
- **D.** Send the fixed instruction text and the user's text to the model in two separate API calls, then concatenate the responses, placing the translation after the instruction output to form the final result.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Define a prompt template with the fixed instruction text and a placeholder such as {{text}}, substituting only the variable content on each call while the surrounding instructions stay constant.

Correct. A prompt template separates fixed instructions from variable placeholders like {{text}}. This keeps the instructional wording consistent across calls, lets the variable content change per request, and makes it straightforward to version and track the fixed portion independently of what's being translated.

**A.** Correct. A prompt template separates fixed instructions from variable placeholders like {{text}}. This keeps the instructional wording consistent across calls, lets the variable content change per request, and makes it straightforward to version and track the fixed portion independently of what's being translated.

**B.** Incorrect. Regenerating the complete prompt including instructions on every call defeats the goal of keeping instructional wording consistent, because the surrounding text may drift. It also makes it harder to track changes to the instructions independently from the user's text.

**C.** Incorrect. Storing the entire prompt as one static string and editing it by hand conflates fixed instructions with variable content, making it error-prone and hard to test edge cases. This approach does not allow tracking instruction changes separately from the translated text.

**D.** Incorrect. Splitting into two API calls and concatenating responses adds unnecessary complexity and cost without providing reusable instruction wording. It does not achieve the goal of maintaining consistent, separately trackable instructions.

</details>


---

## Q141 · single choice

An agent runs long tool-use loops involving dozens of file reads per session. The team wants old tool results automatically cleared once input tokens exceed 30,000, while always preserving the 3 most recent tool exchanges and never clearing results from the web_search tool.

Which context_management configuration achieves this?

- ✅ **A.** Configure a clear_tool_uses_20250919 edit with trigger set to 30000 input tokens, keep 3 tool uses, exclude_tools set to web_search.
- **B.** A clear_thinking_20251015 edit with trigger set to 30000 input tokens, keep set to 3 thinking turns, and exclude_tools set to web_search should be used.
- **C.** A clear_tool_uses_20250919 edit with trigger set to tool_uses 30000, with no keep value explicitly set, and with no exclude_tools value explicitly set.
- **D.** A clear_tool_uses_20250919 edit with trigger set to 30000 input tokens, keep set to 3 tool uses, and exclude_tools set to file_read should be used.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Configure a clear_tool_uses_20250919 edit with trigger set to 30000 input tokens, keep 3 tool uses, exclude_tools set to web_search.

Correct. clear_tool_uses_20250919 is the appropriate edit for clearing old tool results. Setting the trigger to 30,000 input tokens, keeping the 3 most recent tool uses, and excluding web_search meets all specified requirements: auto-clears at the token threshold, preserves the last 3 exchanges, and never clears web_search results.

**A.** Correct. clear_tool_uses_20250919 is the appropriate edit for clearing old tool results. Setting the trigger to 30,000 input tokens, keeping the 3 most recent tool uses, and excluding web_search meets all specified requirements: auto-clears at the token threshold, preserves the last 3 exchanges, and never clears web_search results.

**B.** Incorrect. The clear_thinking_20251015 edit is designed to manage extended thinking blocks, not tool results. Using it would fail to clear old file-read outputs, regardless of trigger or exclusion settings.

**C.** Incorrect. This configuration triggers on a tool_uses count of 30,000 instead of the required input token threshold. Additionally, without setting keep or exclude_tools, recent tool exchanges are not preserved, and web_search results are not protected from clearing.

**D.** Incorrect. Excluding file_read instead of web_search results in file_read results being never cleared, while web_search results remain subject to automatic clearing-the opposite of the requirement.

</details>


---

## Q142 · single choice

A code-review prompt needs Claude to generate a fix, verify the fix against a set of criteria, and then refine the fix if criteria are not met. The team wants to inspect the intermediate review step and log it separately before the final refinement is produced.

Which approach best fits this requirement?

- **A.** Ask Claude to generate, verify, and refine the fix in one response using extended reasoning, but this keeps the review internal and unloggable.
- ✅ **B.** Break the task into separate API calls: generate a fix, review it against the criteria, then refine the fix, so each step can be logged independently.
- **C.** Add  tags around the review step so Claude places the review inside and the fix outside, and the review can be extracted and logged apart.
- **D.** Provide five few-shot examples of correct fixes for Claude to mimic, bypassing the review step, removing the intermediate step and preventing logging.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Break the task into separate API calls: generate a fix, review it against the criteria, then refine the fix, so each step can be logged independently.

Correct. Breaking the task into separate API calls implements a self-correction chaining pattern where each phase-generation, review against criteria, and refinement-is isolated. Each step can be independently inspected, logged, or branched on, exactly matching the need for separate logging.

**A.** Incorrect. Asking Claude to handle everything in one response with extended reasoning keeps the review internal to the model's generation process. The intermediate verification step cannot be extracted or logged separately, which fails to meet the team's logging requirement.

**B.** Correct. Breaking the task into separate API calls implements a self-correction chaining pattern where each phase-generation, review against criteria, and refinement-is isolated. Each step can be independently inspected, logged, or branched on, exactly matching the need for separate logging.

**C.** Incorrect. While adding  tags might seem to separate the review visually, the entire generation, review, and refinement still occur in a single API response. This makes it impractical to reliably extract and log a clean intermediate review step without mixing it with the draft or refinement content.

**D.** Incorrect. Providing few-shot examples for Claude to mimic bypasses the explicit review-against-criteria step entirely. Without performing a distinct review and refinement cycle, there is no intermediate step to log, so this approach fails to satisfy the requirement.

</details>


---

## Q143 · single choice

A platform wants Claude to discover tools using an existing embeddings index rather than the built-in regex or BM25 matching, because tool descriptions are sparse but semantically related through the embedding space.

Which implementation matches this requirement?

- ✅ **A.** Build a custom tool that runs the embeddings search and returns tool_reference blocks in its tool_result for Claude to expand.
- **B.** Enable the built-in BM25 tool search variant, since BM25 ranking approximates embedding-based semantic similarity closely enough.
- **C.** Enable the built-in regex tool search variant and rely on broad wildcard patterns to approximate semantic matching.
- **D.** Disable tool search and load every tool definition up front so the embeddings index becomes unnecessary.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Build a custom tool that runs the embeddings search and returns tool_reference blocks in its tool_result for Claude to expand.

Correct. A custom client-side tool search implementation can run any retrieval method, including embeddings, and return standard tool_result content with tool_reference blocks, which the API expands into full tool definitions.

**A.** Correct. A custom client-side tool search implementation can run any retrieval method, including embeddings, and return standard tool_result content with tool_reference blocks, which the API expands into full tool definitions.

**B.** BM25 is a term-frequency-based lexical ranking method, not a true semantic embedding similarity search, so it would not reproduce the intended embeddings-based matching.

**C.** Regex matching operates on literal patterns against names and descriptions and cannot capture semantic relationships between sparse, differently worded tool descriptions.

**D.** Loading every definition up front abandons retrieval entirely and reintroduces the context bloat problem that made an embeddings-based discovery approach necessary.

</details>


---

## Q144 · single choice

A support-ticket assistant retrieves passages from a 500-document internal knowledge base for each incoming ticket and must cite the exact source passage in every reply, without re-sending the entire corpus on each request.

Which approach best matches this data shape and query pattern?

- ✅ **A.** Return the retrieved passages as search result content blocks from a retrieval tool, each carrying source and title metadata, so Claude generates natural citations per ticket.
- **B.** Upload all 500 documents as citable text documents in the system prompt so that Claude can reference any passage directly, and then instruct it to cite the source document and section for every reply.
- **C.** Concatenate the full corpus into a single long-context user message with all 500 documents separated by titles, then prompt Claude to extract the relevant passage and cite its source.
- **D.** Store the corpus in the memory tool by saving each document as a separate entry, configure assistant to load all entries before answering, and prompt it to cite source document for any retrieved passage.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Return the retrieved passages as search result content blocks from a retrieval tool, each carrying source and title metadata, so Claude generates natural citations per ticket.

Correct. This approach uses a retrieval tool to dynamically fetch only relevant passages per query, with each result block including source and title metadata. This enables Claude to generate natural citations without resending the entire corpus, which is efficient and aligns with the need for exact source passage citations.

**A.** Correct. This approach uses a retrieval tool to dynamically fetch only relevant passages per query, with each result block including source and title metadata. This enables Claude to generate natural citations without resending the entire corpus, which is efficient and aligns with the need for exact source passage citations.

**B.** Incorrect. Uploading all 500 documents in the system prompt sends the full corpus with every request, defeating the purpose of avoiding corpus resending. It also wastes context on irrelevant passages, making it inefficient for a repeated ticket-answering workflow.

**C.** Incorrect. Concatenating the full corpus into a long user message per request is costly in terms of tokens and degrades accuracy as context grows. It skips the targeted retrieval step that efficiently supplies only relevant passages, which is what this query pattern requires.

**D.** Incorrect. The memory tool is intended for Claude to persist notes across conversation turns, not as a document retrieval index. Storing each document as a memory entry and loading all entries for each query is inefficient and does not support targeted retrieval with source metadata for citations.

</details>


---

## Q145 · single choice

A team originally split their onboarding manual into fixed 500-character chunks with no overlap. They now find that many chunks begin or end mid-sentence, and answers near a chunk boundary are frequently missed because the relevant sentence is split across two separate embeddings.

Which chunking adjustment most directly addresses this specific failure?

- ✅ **A.** Split chunks along natural boundaries such as paragraphs or sections, and add a small overlap between adjacent chunks so boundary sentences appear intact in at least one chunk.
- **B.** Reduce the chunk size so each chunk contains exactly one sentence, splitting on punctuation such as periods or exclamation points, and drop the fixed character limit to prevent mid-sentence breaks.
- **C.** Remove overlap and set a smaller fixed chunk size, such as 250 characters, to lower the vector index count and accelerate semantic search without changing how sentences are split.
- **D.** Keep the fixed 500-character boundaries and increase the embedding model's context window so that each vector encodes more surrounding text, reducing missed answers near splits.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Split chunks along natural boundaries such as paragraphs or sections, and add a small overlap between adjacent chunks so boundary sentences appear intact in at least one chunk.

Correct. Chunking on natural document boundaries such as paragraphs or sections, combined with a small overlap, ensures that sentences near chunk edges appear intact in at least one chunk. This directly addresses the problem of split-sentence retrieval failures.

**A.** Correct. Chunking on natural document boundaries such as paragraphs or sections, combined with a small overlap, ensures that sentences near chunk edges appear intact in at least one chunk. This directly addresses the problem of split-sentence retrieval failures.

**B.** Incorrect. Reducing chunks to single sentences by splitting on punctuation eliminates mid-sentence breaks, but loses the surrounding context necessary for accurate retrieval. Additionally, multi-sentence ideas are still separated across chunks, which can degrade answer completeness.

**C.** Incorrect. Removing overlap and using smaller fixed-size chunks increases the likelihood that a relevant sentence will be split across a chunk boundary. This strategy worsens the original problem rather than resolving it.

**D.** Incorrect. Increasing the embedding model's context window does not change where the pipeline cuts text; with fixed 500-character boundaries, sentences near the cuts remain split. The retrieval misses at boundaries persist regardless of the model's capacity.

</details>


---

## Q146 · single choice

An agent's project has accumulated a dozen skills, several of which perform side-effecting actions such as sending Slack messages or deleting stale branches. Reviewers notice Claude occasionally auto-triggers these side-effecting skills based on vague description matches, and want to reduce the agent's effective capability surface so these skills only run when a person explicitly invokes them.

What is the most direct fix?

- ✅ **A.** Set disable-model-invocation: true in the frontmatter of each side-effecting skill so Claude cannot select them automatically and only the user can invoke them with /name.
- **B.** Delete the skill descriptions from the frontmatter of each side-effecting skill so Claude has no basis for automatic matching and only the user can invoke those skills by name.
- **C.** Move the side-effecting skills into CLAUDE.md so they load as always-on context, which ensures Claude only uses them when the user explicitly invokes them by name in a request.
- **D.** Rewrite the instructions of each side-effecting skill to instruct Claude to ask for confirmation before performing the side effect, without modifying frontmatter fields.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Set disable-model-invocation: true in the frontmatter of each side-effecting skill so Claude cannot select them automatically and only the user can invoke them with /name.

Correct. Setting `disable-model-invocation: true` in the frontmatter hides the skill from Claude's automatic selection, so it cannot be triggered by vague description matches. The skill becomes accessible only when a user explicitly invokes it with `/name`, thus reducing the effective capability surface as intended.

**A.** Correct. Setting `disable-model-invocation: true` in the frontmatter hides the skill from Claude's automatic selection, so it cannot be triggered by vague description matches. The skill becomes accessible only when a user explicitly invokes it with `/name`, thus reducing the effective capability surface as intended.

**B.** Incorrect. Deleting skill descriptions may prevent automatic matching, but skills also rely on descriptions for proper discovery and correct invocation by users. This approach is not the documented method for controlling automatic model invocation and could lead to confusion or broken workflows.

**C.** Incorrect. Moving skills into `CLAUDE.md` would load them as always-on context in every session, meaning Claude could still act on them without an explicit user request, potentially increasing the effective capability surface rather than reducing it.

**D.** Incorrect. Adding instructions to ask for confirmation does not prevent Claude from auto-triggering the skill based on description matches; the skill may still be activated automatically, only then prompting for confirmation. This does not restrict invocation to explicit user commands.

</details>


---

## Q147 · single choice

A team is defining the success criteria for a new claims-summarization feature before building the evaluation dataset.

The current draft criterion reads: "the summaries should be concise and helpful." Which revised criterion best follows the SMART framework for evaluation design?

- ✅ **A.** Require summaries to average at least 4 out of 5 on a completeness rubric across a 500-claim sample
- **B.** Require summaries to earn a perfect 5 out of 5 completeness score from every adjuster in the sample
- **C.** Require summaries to sound less robotic and read more naturally to the adjusters who review them
- **D.** Require every summary to be signed off by a senior adjuster before it counts as acceptable

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Require summaries to average at least 4 out of 5 on a completeness rubric across a 500-claim sample

Correct. This criterion is specific (completeness rubric), measurable (numeric threshold), achievable (a 4/5 average rather than perfection), and relevant (tied directly to summary quality), and it defines a concrete sample size for measurement.

**A.** Correct. This criterion is specific (completeness rubric), measurable (numeric threshold), achievable (a 4/5 average rather than perfection), and relevant (tied directly to summary quality), and it defines a concrete sample size for measurement.

**B.** Incorrect. Requiring a perfect score from every adjuster is not achievable in practice; SMART criteria should be realistic targets grounded in frontier model capability, not unattainable perfection.

**C.** Incorrect. "Sound less robotic" and "read more naturally" are not measurable without a defined metric or scale, so this fails the Measurable requirement of SMART criteria.

**D.** Incorrect. This describes a manual sign-off process, not a measurable success criterion for the model's output quality, so it does not give the evaluation team a quantifiable target.

</details>


---

## Q148 · single choice

A platform engineer sets CLAUDE_CODE_ENABLE_TELEMETRY=1 on every CI runner but the team's OTLP collector never receives any spans, metrics, or logs from Claude Code jobs. No other telemetry variables were configured.

What is the most likely cause of the missing data?

- **A.** The collector rejects every signal until CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1 is also set, regardless of which exporters are chosen
- ✅ **B.** Telemetry is enabled but no exporter was selected, so OTEL_METRICS_EXPORTER and OTEL_LOGS_EXPORTER default to producing no export at all
- **C.** The CLI only emits telemetry once the console exporter has been configured first as a required local fallback
- **D.** The organization's Admin API key must be exported through OTEL_EXPORTER_OTLP_HEADERS before the CLI will emit any signal

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Telemetry is enabled but no exporter was selected, so OTEL_METRICS_EXPORTER and OTEL_LOGS_EXPORTER default to producing no export at all

Correct. Enabling telemetry alone does not choose a destination. Each signal has its own exporter switch (OTEL_METRICS_EXPORTER, OTEL_LOGS_EXPORTER, OTEL_TRACES_EXPORTER), and leaving them unset means nothing is exported even though telemetry generation is on.

**A.** Incorrect. The enhanced telemetry beta flag is only required to unlock distributed tracing spans; metrics and log events do not depend on it, and it has no bearing on whether an exporter is configured.

**B.** Correct. Enabling telemetry alone does not choose a destination. Each signal has its own exporter switch (OTEL_METRICS_EXPORTER, OTEL_LOGS_EXPORTER, OTEL_TRACES_EXPORTER), and leaving them unset means nothing is exported even though telemetry generation is on.

**C.** Incorrect. The console exporter is one optional choice among several (otlp, prometheus, console, none); it is not a prerequisite the CLI requires before other exporters will function.

**D.** Incorrect. OTEL_EXPORTER_OTLP_HEADERS carries authentication for the collector endpoint, not an Anthropic Admin API key, and its absence would cause auth failures at the collector, not a total absence of any emitted telemetry.

</details>


---

## Q149 · pick 3

An agentic coding assistant runs long sessions that accumulate hundreds of tool calls, and the conversation regularly approaches the model's context window limit before the task is finished. Engineers want strategies that let the session continue productively without losing critical state.

Which approaches address this goal?

- ✅ **A.** Enable server-side compaction so earlier turns are automatically summarized once the conversation nears the context window limit
- ✅ **B.** Configure context editing to clear old tool results once a token threshold is reached, keeping only recent tool use/result pairs
- ✅ **C.** Use the memory tool to persist critical state to durable storage before old context is cleared, so a session recovers quickly
- **D.** Lower the effort parameter to low so Claude generates shorter replies, preventing the context window from ever filling up
- **E.** Switch the session to the Message Batches API so each turn runs as an independent asynchronous request with fresh context
- **F.** Increase the effort parameter to max so Claude reasons more thoroughly and needs fewer total turns to finish the task

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Enable server-side compaction so earlier turns are automatically summarized once the conversation nears the context window limit
B. Configure context editing to clear old tool results once a token threshold is reached, keeping only recent tool use/result pairs
C. Use the memory tool to persist critical state to durable storage before old context is cleared, so a session recovers quickly

A. Correct. Server-side compaction is the primary strategy for long-running conversations that approach context window limits: it automatically summarizes earlier turns on the server so the session can continue past the limit.

B. Correct. Context editing's tool result clearing removes old tool results once a configured trigger is reached while preserving the most recent tool use/result pairs, directly freeing context space in tool-heavy agentic sessions.

C. Correct. The memory tool's multi-session pattern is designed to offload critical state to durable storage before context is cleared or a new session starts, so essential information is not lost when older turns are summarized or removed.

**A.** Correct. Server-side compaction is the primary strategy for long-running conversations that approach context window limits: it automatically summarizes earlier turns on the server so the session can continue past the limit.

**B.** Correct. Context editing's tool result clearing removes old tool results once a configured trigger is reached while preserving the most recent tool use/result pairs, directly freeing context space in tool-heavy agentic sessions.

**C.** Correct. The memory tool's multi-session pattern is designed to offload critical state to durable storage before context is cleared or a new session starts, so essential information is not lost when older turns are summarized or removed.

**D.** Lowering effort reduces token spend per turn but does not prevent the accumulated conversation history itself from growing and eventually approaching the context window limit.

**E.** The Batch API is for independent asynchronous requests without immediate responses, not for continuing a single long-running interactive session, and splitting it into fresh-context chunks would lose the conversation's accumulated state.

**F.** Raising effort to max increases token spend per turn for maximum capability; it does not reduce the number of turns needed and does not itself address a growing context window, since higher-effort turns can consume context faster.

</details>


---

## Q150 · single choice

A team wants to lower per-request cost and latency for a chat feature without switching models or losing response quality on genuinely hard questions. They want the model itself to spend fewer tokens on easy turns while still reasoning thoroughly on complex ones.

Which lever should they reach for first?

- ✅ **A.** Lower the effort parameter for routine turns, since it reduces token spend while letting Claude think harder when warranted
- **B.** Disable prompt caching entirely, since removing all cached writes always guarantees the very lowest possible token count of all
- **C.** Force every request through the Message Batches API, since batch requests are billed at a flat discounted rate
- **D.** Set max_tokens to a small fixed value on all requests so Claude cannot generate long responses on hard questions

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Lower the effort parameter for routine turns, since it reduces token spend while letting Claude think harder when warranted

Correct. The effort parameter is described as a behavioral signal that trades thoroughness for token efficiency across text, tool calls, and thinking, within a single model. At lower effort, Claude still thinks on sufficiently difficult problems but spends fewer tokens on simpler ones, which is exactly the described goal.

**A.** Correct. The effort parameter is described as a behavioral signal that trades thoroughness for token efficiency across text, tool calls, and thinking, within a single model. At lower effort, Claude still thinks on sufficiently difficult problems but spends fewer tokens on simpler ones, which is exactly the described goal.

**B.** Cache writes do cost more than base input, but cache reads cost 90% less; disabling caching entirely removes the possibility of cheap cache reads and would generally increase, not decrease, cost for any repeated content.

**C.** The Batch API requires asynchronous processing without immediate responses, which is incompatible with an interactive chat feature, and it does not adapt token spend to per-turn difficulty.

**D.** A small fixed max_tokens risks truncating responses on genuinely hard questions where more output is needed, directly conflicting with the requirement to preserve quality on complex turns.

</details>


---

## Q151 · single choice

Ahead of launch, a product manager sets a success criterion requiring the model to achieve 100% accuracy on an open-ended reasoning task, with zero tolerance for any incorrect or incomplete answer, matching or exceeding what a domain expert could produce.

What is the main problem with this success criterion, and how should it be revised?

- ✅ **A.** The target is unachievable because it exceeds realistic frontier-model capability. It should instead be grounded in benchmark results, prior experiments, or comparable industry performance.
- **B.** The target is not specific enough because it does not name a single numeric metric, so it should be replaced with a quantifiable percentage like a 95% accuracy score, regardless of feasibility.
- **C.** The target is not relevant because reasoning tasks should never have accuracy targets; instead, the criterion should specify maximum latency and cost, which are the only meaningful production metrics.
- **D.** The target is not measurable because open-ended tasks cannot be scored automatically under any circumstances, so the criterion should rely on subjective human ratings with no automated evaluation.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. The target is unachievable because it exceeds realistic frontier-model capability. It should instead be grounded in benchmark results, prior experiments, or comparable industry performance.

Correct. The target of 100% accuracy with zero tolerance is unachievable because it exceeds realistic frontier-model capability. It should be grounded in benchmark results, prior experiments, or comparable industry performance to ensure the success criterion is realistic and attainable.

**A.** Correct. The target of 100% accuracy with zero tolerance is unachievable because it exceeds realistic frontier-model capability. It should be grounded in benchmark results, prior experiments, or comparable industry performance to ensure the success criterion is realistic and attainable.

**B.** Incorrect. The target is already specific: 100% accuracy is a single numeric metric. The real problem is that it is unachievable, not that it lacks specificity, so replacing it with an arbitrary percentage like 95% without considering feasibility does not address the core issue.

**C.** Incorrect. Accuracy targets are relevant and appropriate for reasoning tasks; the problem is the unrealistic threshold, not the use of an accuracy metric. Additionally, latency and cost are not the only meaningful production metrics-accuracy and safety are also critical.

**D.** Incorrect. Open-ended reasoning tasks can be scored automatically using methods like LLM-based evaluation or rubric-based grading, so measurability is not the main problem. The core issue is that the 100% zero-tolerance target is unachievable and not grounded in realistic performance.

</details>


---

## Q152 · single choice

A team has been iterating on a claims-processing prompt using the same 200-example development set for every round of refinement. They now want to declare a final winning version before shipping.

What should they do before making that final decision?

- ✅ **A.** Evaluate the leading prompt candidate on a separate held-out test set not used during iteration to confirm that improvements generalize beyond the development set.
- **B.** Run one more round of refinement on the same 200-example development set, perhaps switching to a different model or adding few-shot examples, to maximize the score before finalizing the prompt.
- **C.** Reduce the development set to only the examples that the current prompt candidate already passes, then present the accuracy on that subset as the final metric to make the score appear higher.
- **D.** Ship the candidate that achieves the highest score on the 200-example development set right away, as iteratively refining on that same set already demonstrates its production readiness.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Evaluate the leading prompt candidate on a separate held-out test set not used during iteration to confirm that improvements generalize beyond the development set.

Correct. Reusing the same development set throughout iterations risks overfitting, so the candidate may not generalize. Testing on a separate held-out set is essential to confirm that improvements extend beyond the development data.

**A.** Correct. Reusing the same development set throughout iterations risks overfitting, so the candidate may not generalize. Testing on a separate held-out set is essential to confirm that improvements extend beyond the development data.

**B.** Incorrect. Another round of refinement on the same set only deepens overfitting to that specific data, making the prompt less reliable on new examples. Maximizing the development score does not guarantee real-world performance.

**C.** Incorrect. Discarding failing examples creates an artificially high accuracy that masks the prompt's true weaknesses. This cherry-picking prevents fair assessment and leads to an unreliable final metric.

**D.** Incorrect. The highest score on the iteratively used development set likely reflects overfitting to that set's specific patterns. Production readiness requires validation on unseen data to ensure the prompt performs well in practice.

</details>


---

## Q153 · pick 3

A team currently runs a moderately complex data-extraction workflow on Claude Haiku 4.5. Which of the following observations would be valid evidence that the workflow has a model-capability mismatch and should be evaluated on a more capable model like Claude Opus 4.8? (Select all that apply.)

- ✅ **A.** On a use-case benchmark, accuracy on multi-step reasoning subtasks stays below threshold even after prompt revisions.
- ✅ **B.** The workflow needs nuanced understanding across long chains of interdependent steps where partial errors compound.
- ✅ **C.** Manual review shows the extraction errors resemble genuine reasoning mistakes rather than missing or truncated input.
- **D.** The team's monthly API spend for the workflow is higher than they originally budgeted for the project.
- **E.** The workflow occasionally times out because of ordinary network latency between the client and the API.
- **F.** The workflow's prompt was designed for an older model and has not been adapted to the current model's capabilities.

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. On a use-case benchmark, accuracy on multi-step reasoning subtasks stays below threshold even after prompt revisions.
B. The workflow needs nuanced understanding across long chains of interdependent steps where partial errors compound.
C. Manual review shows the extraction errors resemble genuine reasoning mistakes rather than missing or truncated input.

A. Correct. Accuracy below threshold on multi-step reasoning subtasks that persists after prompt revisions indicates that the model's inherent reasoning capability is insufficient. This persistent underperformance points to a capability ceiling rather than a prompt engineering issue. Evaluating a more capable model like Claude Opus 4.8 is warranted.

B. Correct. A workflow that requires nuanced understanding across long chains of interdependent steps, where partial errors compound, is inherently complex and exceeds the typical strengths of a lighter model. Such complexity is a direct signal of a model-capability mismatch. A more capable model is better suited to handle this demanding reasoning.

C. Correct. When manual review shows extraction errors are genuine reasoning mistakes rather than issues from missing or truncated input, it highlights a fundamental limitation in the model's reasoning. This suggests the model is failing at logic or understanding, not just input processing. Upgrading the model may address these deep reasoning errors.

**A.** Correct. Accuracy below threshold on multi-step reasoning subtasks that persists after prompt revisions indicates that the model's inherent reasoning capability is insufficient. This persistent underperformance points to a capability ceiling rather than a prompt engineering issue. Evaluating a more capable model like Claude Opus 4.8 is warranted.

**B.** Correct. A workflow that requires nuanced understanding across long chains of interdependent steps, where partial errors compound, is inherently complex and exceeds the typical strengths of a lighter model. Such complexity is a direct signal of a model-capability mismatch. A more capable model is better suited to handle this demanding reasoning.

**C.** Correct. When manual review shows extraction errors are genuine reasoning mistakes rather than issues from missing or truncated input, it highlights a fundamental limitation in the model's reasoning. This suggests the model is failing at logic or understanding, not just input processing. Upgrading the model may address these deep reasoning errors.

**D.** Incorrect. Exceeding the monthly budget is a cost-management concern and does not indicate whether the current model is capable enough for the task. Moving to a more expensive model would likely increase costs, making this observation irrelevant to a capability mismatch.

**E.** Incorrect. Occasional timeouts due to ordinary network latency are an infrastructure issue external to the model. This type of failure does not reflect the model's reasoning ability and can occur with any model regardless of capability.

**F.** Incorrect. A prompt designed for an older model may not leverage the current model's strengths and should be adapted and retested before judging capability. Without prompt optimization, poor performance cannot be attributed to a model-capability mismatch.

</details>


---

## Q154 · single choice

A compliance analyst asks Claude to review a 40-page vendor contract and flag every clause that conflicts with the company's data-retention policy. In early testing, Claude cites clause numbers and language that do not actually appear in the contract.

Which prompting change is most effective at grounding the review in the actual document text for this kind of long-document task?

- **A.** Ask Claude to answer using its general knowledge of standard contract clauses instead of the specific text, since standard clauses are usually representative
- **B.** Instruct Claude to summarize the entire contract into three paragraphs first, then perform the compliance analysis using only that summary as its source
- **C.** Reduce the max_tokens parameter for the response so Claude produces a shorter, more focused answer that is less likely to drift from the source contract
- ✅ **D.** Instruct Claude to first extract exact, word-for-word quotes relevant to data retention, and only then analyze compliance by referencing those extracted quotes

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
D. Instruct Claude to first extract exact, word-for-word quotes relevant to data retention, and only then analyze compliance by referencing those extracted quotes

Correct. For long documents, having Claude extract word-for-word quotes before analyzing grounds its output in the actual text and reduces hallucinated citations.

**A.** Incorrect. Relying on general knowledge instead of the provided document is the hallucination risk being addressed, not a fix for it.

**B.** Incorrect. Summarizing first discards detail and can itself introduce the drift and inaccuracy the task is trying to eliminate.

**C.** Incorrect. Response length has no bearing on whether cited clauses actually appear in the source document.

**D.** Correct. For long documents, having Claude extract word-for-word quotes before analyzing grounds its output in the actual text and reduces hallucinated citations.

</details>


---

## Q155 · single choice

A fintech company's Claude-powered agent can initiate wire transfers through a custom MCP tool. Even though the operations team has configured allowedTools to auto-approve most read and reporting tools, they want every wire-transfer tool call to require a human's explicit approval no matter what permission mode the session is later switched to, including bypassPermissions.

Which approach best satisfies this requirement?

- ✅ **A.** Register a PreToolUse hook scoped to the wire-transfer tool that returns permissionDecision "ask" for every call, since hooks execute before deny rules, ask rules, the permission mode check, and allow rules, and their decision holds even under bypassPermissions.
- **B.** Add a bare allowedTools entry for the wire-transfer tool so it auto-approves, then depend on the canUseTool callback to intercept it, since bare allow rules approve every matching call before canUseTool is ever consulted, so the callback never runs for that tool.
- **C.** Switch the session's permission mode to acceptEdits, expecting the wire-transfer tool to fall outside its file-edit scope and always route to canUseTool, though other tools under acceptEdits still fall through to any allow rules that already approve them.
- **D.** Add the wire-transfer tool to disallowed_tools with a wildcard pattern so it is blocked by default, then have the canUseTool callback lift the deny rule per call, though deny rules are evaluated before canUseTool runs and cannot be reversed from inside that callback.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Register a PreToolUse hook scoped to the wire-transfer tool that returns permissionDecision "ask" for every call, since hooks execute before deny rules, ask rules, the permission mode check, and allow rules, and their decision holds even under bypassPermissions.

Correct. Hooks run first in the evaluation order and a PreToolUse hook's decision applies regardless of permission mode, including bypassPermissions, guaranteeing the prompt for this tool.

**A.** Correct. Hooks run first in the evaluation order and a PreToolUse hook's decision applies regardless of permission mode, including bypassPermissions, guaranteeing the prompt for this tool.

**B.** Incorrect mechanism. A bare allow-rule entry auto-approves every matching call and the call never reaches canUseTool, so this design silently removes the intended approval step.

**C.** Incorrect. acceptEdits only auto-approves file edits and specific filesystem commands; other tools still fall through to normal permission handling, which could still resolve via an existing allow rule rather than always prompting.

**D.** Incorrect. Deny rules are evaluated before canUseTool in the flow, so the callback has no mechanism to reverse a deny decision for a specific call.

</details>


---

## Q156 · pick 3

A solutions architect is scoping the ethical-risk controls for a Claude-based assistant that will draft internal performance-review summaries from manager notes across a multinational workforce. The compliance team wants a set of concrete measures that address bias, fairness, and transparency before launch. Which of the following measures should be included? (Select 3)

- ✅ **A.** Run paired-scenario evaluations comparing summary tone and detail across employee groups given identical underlying performance notes.
- ✅ **B.** Document, in a form reviewers can inspect, which specific decision factors the assistant is instructed to weigh whenever it drafts a summary.
- ✅ **C.** Give every employee, regardless of role or seniority, a mechanism to request the specific factors that shaped their own summary.
- **D.** Skip bias testing across the initial launch region and only extend testing later if formal complaints get filed after go-live.
- **E.** Let each manager's personal phrasing preferences silently override the standardized summary template with absolutely no logging kept.
- **F.** Restrict summary review access to a single manager with no secondary sign-off, to keep the rollout process deliberately lightweight.

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Run paired-scenario evaluations comparing summary tone and detail across employee groups given identical underlying performance notes.
B. Document, in a form reviewers can inspect, which specific decision factors the assistant is instructed to weigh whenever it drafts a summary.
C. Give every employee, regardless of role or seniority, a mechanism to request the specific factors that shaped their own summary.

A. Correct. Paired-scenario testing across demographic groups is a direct, evidence-based way to detect tone or detail disparities that would indicate bias, mirroring how Anthropic evaluates paired requests for evenhandedness.

B. Correct. Documenting the decision factors the assistant weighs gives reviewers a transparent, inspectable basis for the summaries, directly addressing the transparency requirement.

C. Correct. Giving employees a way to request the factors behind their own summary extends transparency to the people most affected by the assistant's output, supporting fairness and accountability.

**A.** Correct. Paired-scenario testing across demographic groups is a direct, evidence-based way to detect tone or detail disparities that would indicate bias, mirroring how Anthropic evaluates paired requests for evenhandedness.

**B.** Correct. Documenting the decision factors the assistant weighs gives reviewers a transparent, inspectable basis for the summaries, directly addressing the transparency requirement.

**C.** Correct. Giving employees a way to request the factors behind their own summary extends transparency to the people most affected by the assistant's output, supporting fairness and accountability.

**D.** Incorrect. Deferring bias testing until after complaints arise reverses the compliance team's request for pre-launch controls and lets biased summaries reach employees before any check occurs.

**E.** Incorrect. Unlogged silent overrides of the standardized template reintroduce exactly the kind of unaccounted inconsistency that undermines both fairness and transparency.

**F.** Incorrect. A single reviewer with no secondary sign-off removes an accountability check rather than adding one, working against the governance goals of the review.

</details>


---

## Q157 · pick 3

A solutions architect is running the first discovery session with a new prospect before recommending any specific Claude model.

According to Anthropic's model-selection guidance, which factors should the architect establish as key criteria during this session?

- ✅ **A.** The specific capabilities the model must have to meet the prospect's needs
- ✅ **B.** How quickly the model must respond within the prospect's application
- ✅ **C.** The prospect's available budget for development and production usage
- **D.** The exact number of employees currently working in the prospect's IT department
- **E.** Which social media platforms the prospect uses for customer marketing
- **F.** The version number of the prospect's internal ticketing software

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. The specific capabilities the model must have to meet the prospect's needs
B. How quickly the model must respond within the prospect's application
C. The prospect's available budget for development and production usage

A. Correct. Capabilities is one of the key criteria Anthropic's guidance lists to establish before choosing a model.

B. Correct. Speed, meaning how quickly the model must respond, is explicitly named as a key criterion to evaluate first.

C. Correct. Cost, meaning the budget for development and production usage, is explicitly named as a key criterion to evaluate first.

**A.** Correct. Capabilities is one of the key criteria Anthropic's guidance lists to establish before choosing a model.

**B.** Correct. Speed, meaning how quickly the model must respond, is explicitly named as a key criterion to evaluate first.

**C.** Correct. Cost, meaning the budget for development and production usage, is explicitly named as a key criterion to evaluate first.

**D.** Incorrect. Headcount in the IT department is not one of the documented model-selection criteria and does not inform capability, speed, or cost decisions.

**E.** Incorrect. Marketing channel usage is unrelated to model capability, speed, or cost requirements and is not a discovery criterion for model selection.

**F.** Incorrect. A third-party ticketing software version is an integration detail, not one of the capability, speed, or cost criteria used to scope model selection.

</details>


---

## Q158 · single choice

A financial services customer's compliance team says every AI-generated answer referencing internal policy documents must point to the exact sentence it was drawn from, so auditors can verify the source without re-reading the whole document.

Which capability addresses this discovery finding?

- ✅ **A.** Citations, which let Claude reference the exact sentences and passages in source documents used to generate a response
- **B.** Search results, which enable natural citations for RAG applications by attaching proper source attribution to search results
- **C.** Token counting, which determines the number of tokens in a message before it is sent to Claude
- **D.** The Files API, which uploads and manages documents so they do not need to be re-sent with every request

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Citations, which let Claude reference the exact sentences and passages in source documents used to generate a response

Correct. Citations is documented as grounding responses in source documents with references to the exact sentences and passages used, matching the auditability requirement described.

**A.** Correct. Citations is documented as grounding responses in source documents with references to the exact sentences and passages used, matching the auditability requirement described.

**B.** Incorrect. Search results attaches source attribution specifically for RAG applications built around a search tool, which is a narrower fit than directly citing provided internal policy documents.

**C.** Incorrect. Token counting measures message size before sending; it has no role in producing verifiable source references for auditors.

**D.** Incorrect. The Files API avoids re-uploading documents across requests but does not itself produce sentence-level source references in responses.

</details>


---

## Q159 · single choice

A customer support tooling vendor still runs Claude Haiku 3.5 in a legacy component and receives Anthropic's notice that the model is retired outside of Bedrock and Google Cloud. Their engineering stakeholders want to know how this affects their committed timeline.

What is the accurate expectation to set?

- ✅ **A.** Direct API and other non-Bedrock/Vertex-hosted traffic on Haiku 3.5 must migrate to a supported model before retirement, while deployments specifically on Bedrock or Google Cloud can keep running it under those platforms' own timelines
- **B.** The retirement notice only affects new customers who sign up after the announcement date, so the vendor's existing production traffic is permanently exempt regardless of hosting platform
- **C.** Retirement notices apply uniformly across every hosting platform including Bedrock and Google Cloud, so all deployments of Haiku 3.5 everywhere must migrate by the same date
- **D.** Model retirement only restricts access to the Console UI for prompting Haiku 3.5, while direct Messages API traffic on any platform continues indefinitely unaffected

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Direct API and other non-Bedrock/Vertex-hosted traffic on Haiku 3.5 must migrate to a supported model before retirement, while deployments specifically on Bedrock or Google Cloud can keep running it under those platforms' own timelines

Correct. Haiku 3.5 is documented as retired except on Bedrock and Google Cloud, meaning direct API usage elsewhere must migrate while those two platforms retain their own continuation timelines.

**A.** Correct. Haiku 3.5 is documented as retired except on Bedrock and Google Cloud, meaning direct API usage elsewhere must migrate while those two platforms retain their own continuation timelines.

**B.** Incorrect. Retirement affects existing production traffic on the direct API, not just new signups; there is no blanket exemption tied to account age.

**C.** Incorrect. This contradicts the documented exception carved out for Bedrock and Google Cloud, which are explicitly excluded from the retirement on the same schedule.

**D.** Incorrect. Retirement affects the model's availability for actual inference, not merely a Console UI restriction; direct Messages API traffic on the retired platforms is the traffic that must migrate.

</details>


---

## Q160 · single choice

Two months after a customer support assistant goes live, the operations team notices their monthly Claude spend has grown faster than ticket volume and wants to identify which workspace and model combination is driving the increase.

Which monitoring approach addresses this?

- ✅ **A.** Query the Usage and Cost Admin API grouped by workspace and model to reconcile spend against token consumption
- **B.** Re-run the original evaluation set from the design phase to check whether output quality has regressed
- **C.** Increase the agent's allowed_tools scope so it can investigate its own billing records directly
- **D.** Ask the support team to manually count tickets handled per day and compare that figure to the invoice total

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Query the Usage and Cost Admin API grouped by workspace and model to reconcile spend against token consumption

Correct - the Usage and Cost Admin API supports grouping by workspace and model, which directly answers where the added spend is coming from.

**A.** Correct - the Usage and Cost Admin API supports grouping by workspace and model, which directly answers where the added spend is coming from.

**B.** Re-running the evaluation set measures output quality, not which workspace or model is responsible for the cost increase.

**C.** Expanding the agent's own tool permissions to inspect billing is unnecessary and unrelated to how usage and cost reporting is retrieved.

**D.** Manually reconciling ticket counts against invoices is far less precise than the granular, per-workspace and per-model data the API already provides.

</details>


---

## Q161 · single choice

A team is documenting the caching architecture for a service where the same large system prompt and tool definitions are sent with nearly every request. The implementation guidance needs to explain how to cut repeated processing cost and latency for that static content.

What should the guidance recommend?

- ✅ **A.** Mark the reusable system prompt and tool definitions as cached blocks so repeated requests reuse the prefix instead of reprocessing it.
- **B.** Increase the context window to 1M tokens so the large system prompt fits entirely without ever needing to be truncated across requests.
- **C.** Move the system prompt into the Files API so it uploads once and Claude re-reads it fresh from storage on every single request.
- **D.** Enable batch processing so every request carrying the large system prompt is queued and billed at half price automatically.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Mark the reusable system prompt and tool definitions as cached blocks so repeated requests reuse the prefix instead of reprocessing it.

Correct. Prompt caching is designed exactly for this scenario: marking the static system prompt and tool definitions as cached lets repeated requests skip reprocessing that content, reducing both cost and latency.

**A.** Correct. Prompt caching is designed exactly for this scenario: marking the static system prompt and tool definitions as cached lets repeated requests skip reprocessing that content, reducing both cost and latency.

**B.** Incorrect. A larger context window changes how much content fits in a request but does not stop the same static content from being reprocessed on every call.

**C.** Incorrect. The Files API avoids re-uploading file content, but re-reading a stored file on every request still requires reprocessing it, so it does not address the repeated-processing cost.

**D.** Incorrect. Batch processing is for asynchronous bulk workloads with a discount on the whole request, not a mechanism for avoiding repeated processing of a shared prefix on synchronous calls.

</details>


---

## Q162 · single choice

Your coding-agent product is exceeding its latency budget on Claude Opus 4.8. Before proposing a switch to a smaller model, a colleague suggests first tuning the effort parameter.

How should you frame this trade-off to the team?

- ✅ **A.** Adjusting effort trades intelligence for latency and cost within the same model; lowering it from the default may recover budget without the accuracy loss that comes from switching to a different, less capable model.
- **B.** The effort parameter governs only tool-call count per turn, not the model's raw inference latency, so the team should focus on switching to a smaller model that fits the latency budget for the coding-agent product.
- **C.** Effort on Claude Opus 4.8 can only be increased, never decreased, which prevents the team from lowering latency through this parameter; therefore, the migration to a model family that offers a tunable effort floor is the correct path to meet the latency budget.
- **D.** Effort tuning is only available via the Claude API, not in Claude Code, so the coding-agent product cannot lower latency this way; the team should switch to a model family with native effort controls in Claude Code.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Adjusting effort trades intelligence for latency and cost within the same model; lowering it from the default may recover budget without the accuracy loss that comes from switching to a different, less capable model.

Correct. Tuning the effort parameter directly trades off intelligence, latency, and cost within the same model; lowering effort from the default can bring latency back within budget while avoiding the accuracy degradation that typically comes from moving to a less capable model. This approach leverages the existing model's strengths with a controlled trade-off.

**A.** Correct. Tuning the effort parameter directly trades off intelligence, latency, and cost within the same model; lowering effort from the default can bring latency back within budget while avoiding the accuracy degradation that typically comes from moving to a less capable model. This approach leverages the existing model's strengths with a controlled trade-off.

**B.** Incorrect. The effort parameter actually controls reasoning depth and token usage, which directly influences raw inference latency, not just the number of tool calls. It is a global control over model intelligence, so adjusting it can meaningfully reduce latency without immediately resorting to a model switch.

**C.** Incorrect. The effort parameter can be set to levels lower than the default, allowing latency to be reduced on Opus 4.8. There is no restriction preventing decreases; thus, tuning effort is a viable first step before considering model migration.

**D.** Incorrect. Effort tuning is available across all surfaces, including Claude Code and the API. The coding-agent product can adjust effort in both environments, so the option's assertion that it's API-only is false, making a switch unnecessary on these grounds.

</details>


---

## Q163 · pick 3

A solutions architect is designing the initial rollout of Claude Code for a mid-size company with no existing device management. The company has developers on unmanaged laptops, wants centralized visibility into token spend, and needs org-wide policy to reach both local sessions and Claude Code on the web. Which set of decisions correctly matches each requirement to the right mechanism? (Select 3)

- ✅ **A.** Choose Claude for Teams or Enterprise as the API provider so Claude Code and claude.ai share one per-seat subscription with no infrastructure to run
- ✅ **B.** Use server-managed settings delivered from the claude.ai admin console, since it reaches both local and web sessions without requiring MDM
- ✅ **C.** Use the usage dashboard at claude.ai/analytics/claude-code for centralized spend visibility, available on Claude for Teams and Enterprise plans
- **D.** Deploy a plist-based managed-settings policy through macOS MDM as the primary policy channel, since it is the strongest enforcement mechanism available
- **E.** Rely exclusively on project-level .claude/settings.json files committed to each repository to establish organization-wide policy
- **F.** Configure Amazon Bedrock as the API provider so the company can use server-managed settings for centralized policy delivery

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answers from the source:
A. Choose Claude for Teams or Enterprise as the API provider so Claude Code and claude.ai share one per-seat subscription with no infrastructure to run
B. Use server-managed settings delivered from the claude.ai admin console, since it reaches both local and web sessions without requiring MDM
C. Use the usage dashboard at claude.ai/analytics/claude-code for centralized spend visibility, available on Claude for Teams and Enterprise plans

A. Correct. For a company with no infrastructure to run and both Claude Code and claude.ai usage, Claude for Teams or Enterprise as the provider is the default recommendation, combining both products under one per-seat subscription.

B. Correct. Server-managed settings are delivered from the admin console with no device management infrastructure required, and unlike endpoint-managed settings, they also reach Claude Code on the web, matching the requirement to cover both surfaces.

C. Correct. The usage dashboard at claude.ai/analytics/claude-code is included on Claude for Teams and Enterprise plans and provides the centralized spend visibility the architect needs without building custom OpenTelemetry infrastructure.

**A.** Correct. For a company with no infrastructure to run and both Claude Code and claude.ai usage, Claude for Teams or Enterprise as the provider is the default recommendation, combining both products under one per-seat subscription.

**B.** Correct. Server-managed settings are delivered from the admin console with no device management infrastructure required, and unlike endpoint-managed settings, they also reach Claude Code on the web, matching the requirement to cover both surfaces.

**C.** Correct. The usage dashboard at claude.ai/analytics/claude-code is included on Claude for Teams and Enterprise plans and provides the centralized spend visibility the architect needs without building custom OpenTelemetry infrastructure.

**D.** Incorrect. The company has no existing device management, so introducing MDM as the primary channel contradicts the stated constraint; server-managed settings are the appropriate fit for unmanaged devices instead.

**E.** Incorrect. Project-level settings are the lowest-precedence tier below managed settings and can be freely overridden by local or user settings, so they cannot establish organization-wide, non-overridable policy.

**F.** Incorrect. Server-managed settings are explicitly not available when using third-party model providers like Amazon Bedrock; choosing Bedrock would require a self-hosted Claude apps gateway instead of native server-managed settings, and it does not unify Claude Code and claude.ai billing as required.

</details>


---

## Q164 · single choice

A platform team is wiring Claude Code into a locked-down CI pipeline where no human is available to approve prompts, and only a pre-approved set of tools defined in permission rules should ever run.

Which permission mode fits this pipeline?

- ✅ **A.** dontAsk mode, which auto-denies anything not covered by an explicit allow rule
- **B.** acceptEdits mode, which auto-approves file edits and common filesystem commands
- **C.** plan mode, which restricts Claude to reads and a proposed plan with no execution
- **D.** auto mode, which relies on a classifier to approve most actions in real time

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. dontAsk mode, which auto-denies anything not covered by an explicit allow rule

Correct. dontAsk mode only executes actions matching pre-approved allow rules and read-only commands, auto-denying everything else instead of prompting, which makes a session fully non-interactive and safe for a CI pipeline with no human available.

**A.** Correct. dontAsk mode only executes actions matching pre-approved allow rules and read-only commands, auto-denying everything else instead of prompting, which makes a session fully non-interactive and safe for a CI pipeline with no human available.

**B.** Incorrect. acceptEdits still prompts for Bash commands outside its narrow auto-approved filesystem set, so an unattended CI run could stall waiting on a prompt that no human is present to answer.

**C.** Incorrect. plan mode prevents any execution at all, including of pre-approved tools, so it cannot let a pipeline actually apply pre-approved fixes or changes.

**D.** Incorrect. auto mode uses a classifier to approve actions dynamically rather than restricting execution to a fixed, pre-approved allow list, which does not match the requirement that only pre-approved tools ever run.

</details>


---

## Q165 · single choice

During a long debugging session, Claude Code raises "Autocompact is thrashing: the context refilled to the limit..." immediately after automatic compaction completes, and it stops retrying. The team was asking Claude to read an entire 40,000-line production log file to find the root cause of an outage.

What is the most effective way to recover and continue the investigation?

- **A.** Raise CLAUDE_CODE_MAX_RETRIES so Claude Code keeps retrying compaction until the log file finishes loading successfully.
- ✅ **B.** Ask Claude to read the log file in smaller chunks, such as a specific line range, or delegate the analysis to a subagent instead.
- **C.** Set DISABLE_AUTO_COMPACT so Claude Code stops summarizing history and keeps the entire log output available for reference.
- **D.** Run /clear to discard the conversation, then paste only the final error line from the log file into a fresh session.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
B. Ask Claude to read the log file in smaller chunks, such as a specific line range, or delegate the analysis to a subagent instead.

Correct. Auto-compaction succeeded but the oversized file output immediately refilled the context window several times in a row, so Claude Code stopped retrying to avoid wasted API calls. Reading the file in smaller chunks or moving the work to a subagent's separate context window is the documented recovery path.

**A.** Incorrect. CLAUDE_CODE_MAX_RETRIES governs retries of failed API requests, not the compaction-thrashing loop. Thrashing happens because the file itself refills the context after each compaction, so retrying compaction more times does not solve the underlying problem.

**B.** Correct. Auto-compaction succeeded but the oversized file output immediately refilled the context window several times in a row, so Claude Code stopped retrying to avoid wasted API calls. Reading the file in smaller chunks or moving the work to a subagent's separate context window is the documented recovery path.

**C.** Incorrect. Disabling auto-compaction removes the safeguard that prevents the context window from overflowing, so it would make the thrashing problem worse, not better, since the full log would still need to fit in context.

**D.** Incorrect. This is more drastic than necessary and discards useful investigation context. The documented recovery steps are to chunk the file, use a targeted /compact, or delegate to a subagent, not to abandon the conversation entirely.

</details>


---

## Q166 · single choice

A team's project relies on an internal MCP server for ticket lookups. Running /mcp shows the server status as connected, but Claude reports it has no tools available from that server and cannot look up tickets.

What is the correct next step to diagnose the failure?

- ✅ **A.** Select Reconnect for the server from /mcp, and if the tool count stays at zero, run claude --debug mcp to see the server's stderr output.
- **B.** Edit .mcp.json to change the server's command from a relative path to an absolute path, since a relative path always prevents any tools from loading.
- **C.** Approve the server from /mcp again, since project-scoped MCP servers silently stop returning tools after the one-time approval expires.
- **D.** Restart Claude Code with claude --safe-mode, since a server that reports zero tools while connected is always disabled under safe mode.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer from the source:
A. Select Reconnect for the server from /mcp, and if the tool count stays at zero, run claude --debug mcp to see the server's stderr output.

Correct. A server that shows connected but lists zero tools has started but isn't returning a tool list. The documented step is to select Reconnect from /mcp, and if the count stays at zero, run claude --debug mcp to inspect the server's stderr output.

**A.** Correct. A server that shows connected but lists zero tools has started but isn't returning a tool list. The documented step is to select Reconnect from /mcp, and if the count stays at zero, run claude --debug mcp to inspect the server's stderr output.

**B.** Incorrect. A relative path in command or args typically causes the server to fail to start entirely, which shows as failed in /mcp, not connected with zero tools. That is not the situation described here.

**C.** Incorrect. Project-scoped approval does not silently expire; once approved, a server stays enabled. This does not explain a connected server returning no tools.

**D.** Incorrect. Safe mode disables all MCP servers for the session, so the server would not show as connected at all, let alone connected with zero tools. This is not a diagnostic step for this symptom.

</details>
