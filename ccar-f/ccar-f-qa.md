# CCAR-F — CCAF: Claude Certified Architect – Foundations: 175 questions

Source: tstudy.vercel.app (T-Study — data của ThinhNH39). Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).


---

## Q1 · single choice

A developer asks the agent to investigate why a specific API endpoint intermittently returns 500 responses. The codebase has 200+ files and the developer doesn't know which components are involved. The agent must trace the error through routing, middleware, business logic, and database layers.

What task decomposition approach would be most effective?

- ✅ **A.** Have the agent dynamically generate investigation subtasks based on what it discovers at each step, adapting its exploration plan as new information about the error path emerges.
- **B.** Define a fixed sequence of investigation steps upfront—grep for error handlers, then examine middleware, then check database queries, then examine middleware-woven code.
- **C.** Run parallel worker agents on the file system of four layers, then combine their findings to reconstruct the complete error path.
- **D.** Have the agent first create a comprehensive plan mapping all code paths through documented components before beginning any exploration or code reading.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Have the agent dynamically generate investigation subtasks based on what it discovers at each step, adapting its exploration plan as new information about the error path emerges.

Debugging is adaptive by nature — each file you read changes the most useful next step. Let the agent follow the evidence.

**A.** Debugging is adaptive by nature — each file you read changes the most useful next step. Let the agent follow the evidence.

**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**C.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q2 · single choice

Your agent needs to insert a new helper function into the middle of a 150-line utility module, between two existing functions. The Edit tool fails because its old_string parameter cannot find unique text to match – the file has repetitive docstrings, variable names, and structural patterns.

What's the most reliable way to complete this insertion?

- **A.** Use Bash to append the function definition to the end of the file using heredoc syntax
- **B.** Use Edit's replace_all parameter to target a common pattern and embed the new function in the replacement text
- **C.** Use Edit with an extremely long old_string capturing 30+ lines of context to guarantee uniqueness
- ✅ **D.** Use Read to load the file, add the function at the appropriate location, then Write the updated file

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Use Read to load the file, add the function at the appropriate location, then Write the updated file

When old_string cannot find unique text because the file has many repeating patterns, the most reliable way is to read the entire file (Read), edit

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** When old_string cannot find unique text because the file has many repeating patterns, the most reliable way is to read the entire file (Read), edit

</details>


---

## Q3 · single choice

An engineer used Claude Code yesterday to investigate authentication flows in a legacy monolith, building up significant context over a 2-hour session. Today she wants to continue that specific investigation. She's worked on three other codebases since then and knows the session was named "auth-deep-dive".

How should she resume?

- **A.** Start fresh and re-read the same files
- **B.** Use --session-id with the UUID from yesterday's session transcript file
- **C.** Use --continue to pick up where the most recent conversation left off
- ✅ **D.** Use --resume auth-deep-dive to load that specific session by name

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Use --resume auth-deep-dive to load that specific session by name

--resume allows resuming a specific session by name. --continue only continues the most recent session (not the session 2 days ago), and --session-id needs a specific UUID, not a name.

**A.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

**B.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** --resume allows resuming a specific session by name. --continue only continues the most recent session (not the session 2 days ago), and --session-id needs a specific UUID, not a name.

</details>


---

## Q4 · single choice

An engineer's exploration subagent spent 30 minutes analyzing a legacy payment system, reading 47 files and documenting data flows. The session was interrupted when the engineer's connection dropped. While away, a teammate merged a PR that renamed two utility functions. The engineer wants to continue the same exploration.

What's the most effective approach?

- **A.** Resume the subagent from its previous transcript without mentioning the changes–the architecture understanding remains valid.
- **B.** Launch a fresh subagent with a summary of prior findings.
- ✅ **C.** Resume the subagent from its previous transcript and inform it about the renamed functions.
- **D.** Launch a fresh subagent and include the prior transcript in the initial prompt for context.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Resume the subagent from its previous transcript and inform it about the renamed functions.

Continuing from the old transcript with updated information about renamed functions is optimal: keep the accumulated 30 minutes of architectural context intact, while notifying agents about specific changes to avoid re-analyzing from scratch.

**A.** Resuming without explicitly incorporating the new changes risks carrying stale assumptions forward into the next step.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** Continuing from the old transcript with updated information about renamed functions is optimal: keep the accumulated 30 minutes of architectural context intact, while notifying agents about specific changes to avoid re-analyzing from scratch.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q5 · single choice

Your agent has spent 25 minutes exploring a game engine's rendering subsystem–reading shader code, buffer management, and frame synchronization logic. An engineer now asks it to understand how the physics engine integrates with rendering for collision debug overlays. You notice recent responses reference "typical rendering patterns" rather than the specific VulkanPipeline and FrameGraph classes it discovered earlier.

What's the most effective approach?

- **A.** Spawn a sub-agent to explore physics independently, then manually synthesize its findings with the rendering knowledge accumulated in the main conversation.
- **B.** Continue in the current context with more targeted prompts referencing the specific classes by name.
- ✅ **C.** Summarize key rendering findings, then spawn a sub-agent for physics exploration with that summary in its initial context.
- **D.** Use /clear to reset context completely, then start fresh with physics exploration using file paths from the project's CLAUDE.md.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Summarize key rendering findings, then spawn a sub-agent for physics exploration with that summary in its initial context.

The generic "typical rendering patterns" responses signal context degradation from a long, bloated session, so the fix is to compact the valuable rendering knowledge into a summary and hand it to a sub-agent with a fresh context for the physics task. This follows Anthropic's context-management best practice of summarization plus sub-agents with clean contexts, preserving the specific VulkanPipeline/FrameGraph findings that the integration task depends on, unlike A (loses knowledge), B (sub-agent lacks needed rendering context and synthesis happens in the degraded context), or D (continues in a degraded context).

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** The generic "typical rendering patterns" responses signal context degradation from a long, bloated session, so the fix is to compact the valuable rendering knowledge into a summary and hand it to a sub-agent with a fresh context for the physics task. This follows Anthropic's context-management best practice of summarization plus sub-agents with clean contexts, preserving the specific VulkanPipeline/FrameGraph findings that the integration task depends on, unlike A (loses knowledge), B (sub-agent lacks needed rendering context and synthesis happens in the degraded context), or D (continues in a degraded context).

**D.** Resetting context can throw away useful information and does not by itself create a better investigation strategy.

</details>


---

## Q6 · single choice

An engineer asks the agent to find all callers of a function before removing it. The function is defined in a core library but is also exposed through wrapper modules that rename the function for domain-specific use (e.g., calculateTax in the library becomes computeOrderTax in the orders module).

What exploration strategy will most reliably identify all callers?

- **A.** Use Grep to find all files that import from the library or wrapper modules, then read each file to check whether it uses the function.
- **B.** Search for the function name in project documentation to understand intended usage patterns and navigate to documented integration points.
- **C.** Use Grep to search for the function's original name across the codebase.
- ✅ **D.** Read the library and wrapper modules to identify all exposed names for the function, then Grep for each name across the codebase.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Read the library and wrapper modules to identify all exposed names for the function, then Grep for each name across the codebase.

Because the function is exposed through many wrapper modules with different names, it is necessary to determine ALL names (original + aliases in wrappers), then Grep each name. Only Grep the original name (B) will miss callers using wrappers.

**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**B.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.

**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**D.** Because the function is exposed through many wrapper modules with different names, it is necessary to determine ALL names (original + aliases in wrappers), then Grep each name. Only Grep the original name (B) will miss callers using wrappers.

</details>


---

## Q7 · single choice

During testing, you observe that in extended exploration sessions (30+ minutes), the agent starts giving inconsistent answers about code structure it discussed earlier. Engineers report having to repeat context about modules they've already explored.

What's the most effective approach to address this?

- **A.** Implement automatic context clearing every 15 minutes to ensure the agent starts with fresh, uncontaminated context.
- ✅ **B.** Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions.
- **C.** Switch to a higher-capacity model tier to provide more context window space for accumulated exploration data.
- **D.** Create summaries of all source files before exploration begins, loading only these compressed representations into context.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions.

Context window is limited and after 30+ minutes, old information is pushed out. Maintain a scratchpad file to record key findings so the agent can refer back to them without depending on memory in the context.

**A.** Clearing context blindly removes useful information and treats the symptom rather than designing a better way to preserve what matters.

**B.** Context window is limited and after 30+ minutes, old information is pushed out. Maintain a scratchpad file to record key findings so the agent can refer back to them without depending on memory in the context.

**C.** Changing model size affects capacity or cost, but it does not directly fix the workflow mistake described in the question.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q8 · single choice

After adding an MCP server with specialized code refactoring tools (extract_function, rename_variable, inline_function), you notice the agent still uses basic text manipulation via Write and Bash sed commands for refactoring tasks. The MCP server is connected and working. Examining the configuration, you find each MCP tool has a minimal description like "extract_function: extracts a function from code."

What's the most effective way to improve adoption of the MCP refactoring tools?

- **A.** Accept this as expected behavior since simpler tools like sed are more predictable than specialized refactoring tools.
- **B.** Implement a request classifier that detects refactoring intent and automatically routes those requests to the MCP server before the agent processes them.
- ✅ **C.** Enhance the MCP tool descriptions to explain when each tool is preferable to text manipulation and clarify expected inputs and outputs.
- **D.** Remove the Write tool from the agent's configuration for refactoring sessions so it must use the MCP tools for code modifications.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Enhance the MCP tool descriptions to explain when each tool is preferable to text manipulation and clarify expected inputs and outputs.

Tool selection is driven by the descriptions Claude sees. When the MCP tools say 'extracts a function from code' and Write/sed come with rich documentation, Claude picks Write/sed. Beef up the descriptions.

**A.** Treating the behavior as acceptable leaves the adoption problem unsolved instead of improving the agent’s decision-making.

**B.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

**C.** Tool selection is driven by the descriptions Claude sees. When the MCP tools say 'extracts a function from code' and Write/sed come with rich documentation, Claude picks Write/sed. Beef up the descriptions.

**D.** Forcing tool use by removing alternatives may change behavior, but it does not solve the real issue of helping the agent understand when the specialized tool is appropriate.

</details>


---

## Q9 · single choice

An engineer asks the agent to investigate error handling in a legacy payment processing module spanning 15 files. After reading the first 8 files, the agent's responses are becoming noticeably less accurate—it's forgetting previously discovered code patterns and hasn't yet located all test files or traced the complete data flow.

What's the most effective approach to complete this investigation?

- **A.** Use Grep to search for specific function names across remaining files, reducing the content loaded into context.
- ✅ **B.** Spawn a subagent to explore the remaining files, providing a summary of discovered patterns as its initial context.
- **C.** Close the current context with /clear and start fresh, re-reading only the most critical files.
- **D.** Document a summary of findings so far in a file, then start fresh with a new context using that summary as reference.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Spawn a subagent to explore the remaining files, providing a summary of discovered patterns as its initial context.

When the agent is losing context after reading too many files, spawning a new subagent with a summary of the current findings is the optimal way to continue the investigation. The main agent coordinates while the subagent explores with clean context.

**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**B.** When the agent is losing context after reading too many files, spawning a new subagent with a summary of the current findings is the optimal way to continue the investigation. The main agent coordinates while the subagent explores with clean context.

**C.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

**D.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

</details>


---

## Q10 · single choice

An engineer used the agent yesterday to analyze a legacy authentication module, identifying two distinct refactoring approaches: extracting a microservice versus refactoring in-place. Today, they want to explore both approaches in depth–having the agent propose specific code changes for each–before deciding which to implement.

What's the most effective way to structure this exploration?

- **A.** Start two fresh sessions, manually providing a summary of yesterday's analysis findings to establish context.
- **B.** Resume yesterday's session to explore the first approach, then start a new session for the second, manually recreating the original context.
- ✅ **C.** Use fork_session to create two branches from yesterday's analysis, exploring one approach in each fork.
- **D.** Resume yesterday's session and explore both approaches sequentially within the same conversation thread.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Use fork_session to create two branches from yesterday's analysis, exploring one approach in each fork.

fork_session allows creating two branches from the same analysis point, each branch exploring a different approach without affecting each other, while keeping the entire context from the previous session intact.

**A.** Fresh sessions lose the advantage of the accumulated context you already have and create unnecessary rework.

**B.** Resuming without explicitly incorporating the new changes risks carrying stale assumptions forward into the next step.

**C.** fork_session allows creating two branches from the same analysis point, each branch exploring a different approach without affecting each other, while keeping the entire context from the previous session intact.

**D.** Resuming without explicitly incorporating the new changes risks carrying stale assumptions forward into the next step.

</details>


---

## Q11 · single choice

Your agent has analyzed a complex service module–reading 23 source files, tracing request flows, and identifying error handling patterns. A developer wants to compare two testing strategies before committing to one: end-to-end tests with mocked external services vs. snapshot tests capturing expected outputs. They need to independently develop both approaches to evaluate trade-offs.

How should you manage the sessions?

- ✅ **A.** Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.
- **B.** Start two fresh sessions, having each re-read the relevant source files before beginning.
- **C.** Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially.
- **D.** Export the analysis session's key findings to a file, then create two new sessions that reference this file.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.

fork_session allows creating two branches from the same analysis point, each branch develops an independent testing strategy without affecting each other, while keeping the entire context from the analysis session intact.

**A.** fork_session allows creating two branches from the same analysis point, each branch develops an independent testing strategy without affecting each other, while keeping the entire context from the analysis session intact.

**B.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

**C.** Handling both paths sequentially misses the point of keeping the branches separate and makes comparison or independent exploration harder.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q12 · single choice

Your codebase exploration tool stores session IDs to allow engineers to continue investigations across work sessions. An engineer spent an hour yesterday analyzing a legacy authentication module, building context about its architecture and dependencies. They want to continue today. The session ID is valid, but version control shows 3 of the 12 files the agent previously read were modified overnight by a teammate's merge.

What approach best balances efficiency and accuracy?

- **A.** Resume the session without informing the agent about the changed files
- ✅ **B.** Resume the session and inform the agent which specific files changed for targeted re-analysis
- **C.** Resume the session and immediately have the agent re-read all 12 previously analyzed files
- **D.** Start a fresh session to ensure the agent works with current codebase state without stale assumptions

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Resume the session and inform the agent which specific files changed for targeted re-analysis

Resume session + notification of changed files is the most balanced way: keep the context of the 9 files unchanged (avoid costly re-reads), and update the agent about new changes to ensure accuracy.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** Resume session + notification of changed files is the most balanced way: keep the context of the 9 files unchanged (avoid costly re-reads), and update the agent about new changes to ensure accuracy.

**C.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q13 · single choice

An engineer asks the agent to understand how the caching layer works before adding a new cache invalidation trigger. After initial Grep searches, the agent has identified that caching logic spans 15 files including decorators, middleware, and service classes (~8,000 lines total).

What's the most effective next step for building understanding while managing context constraints?

- **A.** Use the Read tool to sequentially load all 15 files, building complete understanding across the full caching implementation.
- **B.** Use Grep to search for "invalidate" and "expire" patterns across all files, then Read only those specific line ranges with minimal surrounding context.
- ✅ **C.** Analyze imports and class hierarchies to identify the base cache class, Read that file to understand the interface, then trace specific invalidation implementations.
- **D.** Use Glob to find files matching common caching patterns (cache.py, caching/), prioritize the largest files by reading them first, then check smaller files for gaps.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Analyze imports and class hierarchies to identify the base cache class, Read that file to understand the interface, then trace specific invalidation implementations.

Starting from the class hierarchy to find the base cache class, reading the interface, then trace implementations is the most effective way. Avoid reading all 15 files (too much context) or just searching for patterns (lacking architectural context).

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**C.** Starting from the class hierarchy to find the base cache class, reading the interface, then trace implementations is the most effective way. Avoid reading all 15 files (too much context) or just searching for patterns (lacking architectural context).

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q14 · single choice

An engineer who just joined the team asks the agent to help them understand the authentication and authorization architecture before making security improvements. The codebase has 800+ files across multiple services.

What exploration strategy will most effectively build understanding, given Claude built-in tools and context limits?

- **A.** Launch parallel subagents to explore different services simultaneously, then synthesize their findings into an architectural overview.
- ✅ **B.** Use Grep to find authentication entry points, read those files, then follow imports and function calls to map the auth flow incrementally.
- **C.** Read any CLAUDE.md and README files first, then ask the engineer to specify which 10-15 files are most important for understanding the auth system.
- **D.** Read all files containing "auth", "login", "permission", or "token" in their content or filename.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Use Grep to find authentication entry points, read those files, then follow imports and function calls to map the auth flow incrementally.

With a codebase of 800+ files, incremental exploration from entry points and by imports is the most effective way to build structured understanding without being overwhelmed by context. Reading all related files (B) would consume too much context.

**A.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

**B.** With a codebase of 800+ files, incremental exploration from entry points and by imports is the most effective way to build structured understanding without being overwhelmed by context. Reading all related files (B) would consume too much context.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q15 · single choice

After integrating a local MCP server providing code analysis tools (analyze_dependencies, find_dead_code, calculate_complexity), you notice the agent continues to use Grep to inspect dependencies even when users explicitly ask about "code dependencies". Tool definitions reveal: analyze_dependencies returns a dependency graph by analyzing imports.

What's the most effective approach to improve the agent's selection of MCP tools?

- **A.** Add routing questions to the system prompt specifying that dependency-related questions should use MCP tools rather than Grep.
- **B.** Remove Grep from the available tools to eliminate functional overlap.
- **C.** Split analyze_dependencies into granular tools: list_imports, detect_transitive_deps, identify_circular_deps to avoid overlap with Grep.
- ✅ **D.** Expand MCP tool descriptions and outputs–e.g., "Builds dependency graph with list_imports, direct_circular_deps"–to clearly distinguish dependencies and cycle analysis from Grep.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Expand MCP tool descriptions and outputs–e.g., "Builds dependency graph with list_imports, direct_circular_deps"–to clearly distinguish dependencies and cycle analysis from Grep.

Agents do not use MCP tools because the tool descriptions are not detailed enough to distinguish when to use them versus Grep. Expand descriptions with specific output examples to help agents understand and choose the right tool.

**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**D.** Agents do not use MCP tools because the tool descriptions are not detailed enough to distinguish when to use them versus Grep. Expand descriptions with specific output examples to help agents understand and choose the right tool.

</details>


---

## Q16 · single choice

Your extraction pipeline processes contracts that frequently include amendments. When a contract contains both original terms and later amendments (e.g., original clause specifies "30-day payment terms" while Amendment 1 changes this to "45 days"), the model inconsistently extracts one value or the other with no indication of which applies.

What's the most effective approach to improve extraction accuracy for documents with amendments?

- **A.** Implement post-extraction validation using pattern matching to detect amendments and flag those extractions for manual review.
- **B.** Preprocess documents with a classifier that identifies and removes superseded sections before the main extraction step.
- **C.** Add prompt instructions to always extract the most recent amendment value and ignore superseded original terms.
- ✅ **D.** Redesign the schema so amended fields capture multiple values, each with source location and effective date.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Redesign the schema so amended fields capture multiple values, each with source location and effective date.

When a document has both original terms and amendments, the schema should capture both values along with effective date and source location. This preserves complete information and allows downstream systems to decide for themselves which values to apply.

**A.** This defers the problem rather than solving the system behavior that caused it.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** When a document has both original terms and amendments, the schema should capture both values along with effective date and source location. This preserves complete information and allows downstream systems to decide for themselves which values to apply.

</details>


---

## Q17 · single choice

After deployment, you find that 12% of extractions contain semantic errors that pass JSON schema validation (e.g., a duration like "30 minutes" incorrectly placed in an ingredient quantity field). Human reviewers have capacity to check only 20% of extractions.

Which approach most effectively allocates reviewer attention?

- **A.** Randomly sample 20% of extractions for review, using corrections to track accuracy and identify error patterns.
- **B.** Prioritize review of all extractions where required fields are empty or explicitly marked as not found.
- ✅ **C.** Have the model output field-level confidence scores, then calibrate review thresholds using a labeled validation set.
- **D.** Review all extractions from documents with formatting anomalies such as unusual layouts or mixed content types.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Have the model output field-level confidence scores, then calibrate review thresholds using a labeled validation set.

Semantic errors are difficult to detect through schema validation. To optimize 20% reviewer capacity, model output field-level confidence scores and then use labeled validation set to find the optimal threshold, focusing review on extractions with low confidence.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** Semantic errors are difficult to detect through schema validation. To optimize 20% reviewer capacity, model output field-level confidence scores and then use labeled validation set to find the optimal threshold, focusing review on extractions with low confidence.

**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

</details>


---

## Q18 · single choice

Your extraction pipeline processes invoices and extracts line items, tax amounts, and grand totals. You discover that 8% of documents have extracted line item amounts that don't sum to the extracted grand total—the downstream accounting system has been detecting mismatches.

What's the most effective improvement?

- ✅ **A.** Add a calculated_total field where the model extracts line items independently, then validate totals alongside a is_total_consistent boolean flag for human review when values differ.
- **B.** Extract line items and totals independently, then use a separate validation model to reconcile discrepancies.
- **C.** Implement post-processing that automatically adjusts line item amounts when the extracted total doesn't match the sum.
- **D.** Add few-shot examples to the system prompt where extracted line items correctly sum to demonstrate the desired extraction behavior.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Add a calculated_total field where the model extracts line items independently, then validate totals alongside a is_total_consistent boolean flag for human review when values differ.

Add the calculated_total field so the model can self-validate by calculating the total from line items and comparing with the grand total, combined with a boolean flag to flag cases that need review. This method detects mismatches right in the extraction step.

**A.** Add the calculated_total field so the model can self-validate by calculating the total from line items and comparing with the grand total, combined with a boolean flag to flag cases that need review. This method detects mismatches right in the extraction step.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q19 · single choice

Your pipeline uses a tool called extract_metadata with a JSON schema for paper details. During testing, the agent sometimes fails to call extract_metadata because it wants to provide direct answers.

What's the most reliable way to ensure metadata extraction always happens first?

- **A.** Set tool_choice to "auto" in the API call, combined with tools so that Claude always prioritizes metadata before any other tool calls.
- **B.** Set tool_choice to type "any" so Claude must use a tool, combined with system prompt instructions to call extract_metadata first.
- **C.** Set tool_choice to "auto" and reorder the tool definitions placing extract_metadata first since Claude prioritizes earlier-listed tools.
- ✅ **D.** Set tool_choice to type "tool", name "extract_metadata" and process the enrichment requests in subsequent turns after receiving the extracted metadata.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Set tool_choice to type "tool", name "extract_metadata" and process the enrichment requests in subsequent turns after receiving the extracted metadata.

Using tool_choice with type "tool" and name "extract_metadata" forces Claude to call the correct tool first. After receiving metadata, enrichment requests are processed in subsequent turns. This is the only way that is 100% guaranteed.

**A.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

**D.** Using tool_choice with type "tool" and name "extract_metadata" forces Claude to call the correct tool first. After receiving metadata, enrichment requests are processed in subsequent turns. This is the only way that is 100% guaranteed.

</details>


---

## Q20 · single choice

After your daily batch of 10,000 documents completes, 300 documents (3%) failed with "context_length_exceeded" errors. The results file identifies each failure by custom_id.

What's the most cost-effective approach to process these failures?

- **A.** Reprocess the entire batch with prompt caching enabled to reduce the cost of retrying requests with identical system prompts
- **B.** Resubmit the entire 10,000 document batch using a model tier with a larger context window
- **C.** Increase the max_tokens parameter for the 300 failed documents and resubmit them in a new batch
- ✅ **D.** Resubmit only the 300 failed documents after chunking them into smaller pieces, then combine the partial extractions

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Resubmit only the 300 failed documents after chunking them into smaller pieces, then combine the partial extractions

context_length_exceeded is an error because the input is too long, not the output. Just resubmit 300 failed documents after chunking them into smaller pieces. No need to reprocess all 10,000 documents or increase max_tokens.

**A.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** context_length_exceeded is an error because the input is too long, not the output. Just resubmit 300 failed documents after chunking them into smaller pieces. No need to reprocess all 10,000 documents or increase max_tokens.

</details>


---

## Q21 · single choice

Your extraction system parses e-commerce product descriptions to extract specifications like dimensions, weight, and materials into JSON. Despite having a well-defined schema, the model inconsistently extracts the "materials" field–sometimes returning "cotton blend", other times "Cotton/Polyester mix", and occasionally omitting the field when material information is clearly present in the source.

What's the most effective way to improve extraction consistency?

- **A.** Make the "materials" field required instead of optional in the schema to force the model to always extract a value
- **B.** Switch to a more capable model tier since inconsistent extraction indicates insufficient model capability
- **C.** Set temperature to 0 to eliminate randomness and ensure deterministic outputs
- ✅ **D.** Add few-shot examples showing 2-3 complete input-output pairs with standardized material description formats

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Add few-shot examples showing 2-3 complete input-output pairs with standardized material description formats

Inconsistency in extraction is often due to the lack of specific examples of standard formats. Few-shot examples with standardized material descriptions teach the model to format output properly, more effectively than setting temperature=0 or making field required.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** Inconsistency in extraction is often due to the lack of specific examples of standard formats. Few-shot examples with standardized material descriptions teach the model to format output properly, more effectively than setting temperature=0 or making field required.

</details>


---

## Q22 · single choice

Your system extracts event metadata (date, location, organizer, attendee_count) from news articles using a JSON schema with all nullable fields. During evaluation, you observe the model frequently generates plausible but incorrect values for fields not mentioned in the article–for example, outputting "500" for attendee_count when the source contains no attendance information.

What's the most effective way to reduce these false extractions?

- **A.** Make all schema fields required (non-nullable) with strict validation rules to ensure the model only outputs verifiable data.
- **B.** Add a post-processing step using a second LLM call to verify each extracted value exists in the source document.
- ✅ **C.** Add prompt instructions to return null for any field where information is not directly stated in the source.
- **D.** Upgrade to a more capable model tier with improved instruction-following to reduce hallucination tendencies.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Add prompt instructions to return null for any field where information is not directly stated in the source.

Model hallucinating probable values for fields are not present in the source due to lack of clear 'no information' instructions. Adding explicit instruction 'return null if the information is not directly in the source' directly solves the problem.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** Model hallucinating probable values for fields are not present in the source due to lack of clear 'no information' instructions. Adding explicit instruction 'return null if the information is not directly in the source' directly solves the problem.

**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

</details>


---

## Q23 · single choice

After implementing tool use with strict schema definitions, JSON syntax errors are eliminated, but 5% of extractions still have valid JSON with empty arrays or null values for required fields like citations and methodology. Spot-checking reveals that source documents contain this information, but in varied formats–inline citations vs. bibliographies, methodology sections vs. details embedded in introductions.

What's the most effective way to address these failures?

- **A.** Implement retry logic that re-sends requests when validation detects empty required fields.
- ✅ **B.** Add few-shot examples demonstrating extractions from documents with varied structures–showing how to identify citations in different formats and locate methodology details across section types.
- **C.** Build a regex-based post-processing layer that scans source documents for citation patterns and methodology keywords, populating empty fields when the model fails to extract.
- **D.** Modify your schema to make citations and methodology optional, and flag incomplete records for manual review rather than failing validation.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Add few-shot examples demonstrating extractions from documents with varied structures–showing how to identify citations in different formats and locate methodology details across section types.

Since the same information appears in many different formats (inline vs bibliography, section vs embedded), these few-shot examples showing how to identify and extract from these formats are the most effective way to improve extraction.

**A.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**B.** Since the same information appears in many different formats (inline vs bibliography, section vs embedded), these few-shot examples showing how to identify and extract from these formats are the most effective way to improve extraction.

**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**D.** Manual review can be useful as a fallback, but it does not solve the system behavior that the question is asking you to improve.

</details>


---

## Q24 · single choice

Your extraction system implements automatic retries when validation fails. On each retry, the specific validation error is appended to the prompt. This retry-with-error-feedback approach resolves most failures within 2-3 attempts

For which failure pattern would additional retries be LEAST effective?

- **A.** The model extracts dates as ISO 8601 datetime strings ("2023-03-15T00:00:00Z") when the schema requires only the date portion (YYYY-MM-DD)
- **B.** The model extracts keywords as a nested object organized by category when the schema requires a flat array of strings
- ✅ **C.** The model extracts "et al." for co-authors when the full list exists only in an external document not in the input
- **D.** The model extracts citation counts as locale-formatted strings ("1,234") when the schema requires integers

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. The model extracts "et al." for co-authors when the full list exists only in an external document not in the input

No amount of retrying teaches the model information that isn't in the input. Retry-with-error-feedback only fixes mistakes the model could have gotten right from the source.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**C.** No amount of retrying teaches the model information that isn't in the input. Retry-with-error-feedback only fixes mistakes the model could have gotten right from the source.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q25 · single choice

Your extraction pipeline processes restaurant menus and must output structured JSON with fields for item names, descriptions, prices, and dietary tags. Some menus use inconsistent formatting–prices as "$12" vs "12.00", dietary info as icons vs text.

What's the most reliable approach?

- ✅ **A.** Define a strict output schema and include format normalization rules in your prompt.
- **B.** Request multiple extraction attempts per document and select the most common format.
- **C.** Use separate extraction calls for each field to ensure consistent handling of each type.
- **D.** Extract data as-is and normalize formats in post-processing code after Claude returns.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Define a strict output schema and include format normalization rules in your prompt.

For menus with inconsistent formatting, combining strict output schema (structure) with normalization rules right in the prompt (for example: 'prices as float without currency symbol') normalize right in the extraction step, is the most effective and simple.

**A.** For menus with inconsistent formatting, combining strict output schema (structure) with normalization rules right in the prompt (for example: 'prices as float without currency symbol') normalize right in the extraction step, is the most effective and simple.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

</details>


---

## Q26 · single choice

Your extraction uses tool use with a JSON schema where property_type is defined as an enum: ['house', 'apartment', 'condo', 'townhouse']. After deployment, 8% of extractions fail schema validation. Investigation reveals listings mention many uncommon property types –"studio", "loft", "duplex", "mobile home", "tiny house", "converted warehouse"–and new types continue appearing regularly.

What's the most effective long-term solution?

- **A.** Change property_type from an enum to a free-form string and implement a normalization step in post-processing.
- **B.** Add few-shot examples to your prompt demonstrating how to map unexpected property types to the closest existing enum value.
- **C.** Continuously expand the enum to include newly observed property types and add monitoring for additional edge cases.
- ✅ **D.** Add an "other" value to your enum with a separate property_type_detail string field for specifics when "other" is selected.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Add an "other" value to your enum with a separate property_type_detail string field for specifics when "other" is selected.

Because new property types constantly appear, hard enums will always be outdated. Adding 'other' value with its own property_type_detail field allows handling all current and future edge cases without constantly updating the enum.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** Because new property types constantly appear, hard enums will always be outdated. Adding 'other' value with its own property_type_detail field allows handling all current and future edge cases without constantly updating the enum.

</details>


---

## Q27 · single choice

Your system has been operating with 100% human review for 3 months. Analysis shows that extractions with model confidence >90% have 97% accuracy overall. To reduce reviewer workload, you plan to automate high-confidence extractions

Before deploying, what validation step is most critical?

- ✅ **A.** Analyze accuracy by document type and field to verify high-confidence extractions perform consistently across all segments, not just in aggregate.
- **B.** Compare accuracy at different confidence thresholds (85%, 90%, 95%) to find the optimal cutoff that maximizes automation while minimizing errors.
- **C.** Run a two-week pilot routing 25% of high-confidence extractions directly to downstream systems and monitor error reports.
- **D.** Verify that 97% accuracy meets requirements for all downstream systems that consume the extracted data.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Analyze accuracy by document type and field to verify high-confidence extractions perform consistently across all segments, not just in aggregate.

Aggregate accuracy hides segment failures — one document type could be 70% while others are 99%. Auto-routing by overall number alone risks systemic errors in the weak segments.

**A.** Aggregate accuracy hides segment failures — one document type could be 70% while others are 99%. Auto-routing by overall number alone risks systemic errors in the weak segments.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q28 · single choice

Documents arrive continuously throughout business hours and need structured data extracted. To reduce costs, you want to use the Message Batches API (50% discount, up-to-24-hour processing window). Your SLA specifies that extraction results must be available within 30 hours of document arrival with 99.9% reliability.

Which batching strategy is most appropriate?

- **A.** Use the real-time API for all documents instead of batch processing
- **B.** Submit a single batch at end of day containing all documents from that day
- ✅ **C.** Submit batches every 4 hours containing documents from that window
- **D.** Submit batches every 6 hours containing documents from that window

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Submit batches every 4 hours containing documents from that window

Submitting batches every 4 hours ensures that in the worst case, documents wait a maximum of 4 hours + 24 hours of processing = 28 hours < 30 hours SLA. Submitting every 6 hours may violate the SLA (6 + 24 = 30 hours without a safety buffer).

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Submitting batches every 4 hours ensures that in the worst case, documents wait a maximum of 4 hours + 24 hours of processing = 28 hours < 30 hours SLA. Submitting every 6 hours may violate the SLA (6 + 24 = 30 hours without a safety buffer).

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q29 · single choice

Your schema includes a skills: string[] field. Production monitoring reveals three consistency issues: (1) compound phrases like "Python and SQL" are sometimes kept as one entry, sometimes split; (2) implied but unstated skills occasionally appear in extractions; (3) similar documents produce wildly different array lengths (5-10 vs 40+ entries). Your prompt currently says "Extract all skills mentioned."

What's the most effective improvement?

- ✅ **A.** Add few-shot examples demonstrating compound phrase handling, explicit mention criteria, and appropriate entry granularity.
- **B.** Add constraints: "Extract 10-20 skills maximum, one skill per entry, only explicitly named skills."
- **C.** Enrich the schema to {skill: string, confidence: float, source_quote: string[]} to capture extraction metadata.
- **D.** Add post-extraction normalization that maps skills to a canonical taxonomy and deduplicates similar entries.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Add few-shot examples demonstrating compound phrase handling, explicit mention criteria, and appropriate entry granularity.

The three problems (compound phrases, implied skills, length inconsistency) all stem from the lack of specific examples of expected behavior. Few-shot examples demonstrating compound phrase handling, explicit mention criteria, and granularity address all three issues directly.

**A.** The three problems (compound phrases, implied skills, length inconsistency) all stem from the lack of specific examples of expected behavior. Few-shot examples demonstrating compound phrase handling, explicit mention criteria, and granularity address all three issues directly.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

</details>


---

## Q30 · single choice

Your extraction system processes two document types: standard monthly reports (archived after processing) and urgent exception reports (must trigger business alerts within 30 minutes of receipt). Both use the same JSON schema. You want to minimize API costs while meeting latency requirements.

How should you architect the processing pipeline?

- **A.** Submit all documents to the real-time Messages API to ensure consistent processing latency across document types.
- ✅ **B.** Route standard reports to the Batch API for 50% cost savings, and route urgent exception reports to the real-time Messages API.
- **C.** Submit all documents to the Batch API with custom_ids for tracking. When results arrive, immediately process urgent documents and trigger delayed alerts for exceptions.
- **D.** Queue all documents and submit hourly batches, flagging urgent documents for expedited handling when batch results return.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Route standard reports to the Batch API for 50% cost savings, and route urgent exception reports to the real-time Messages API.

Standard reports (archived) conforms to the Batch API to save 50% on costs. Urgent exception reports need to trigger alerts within 30 minutes so must use the real-time Messages API. This is the optimal architecture for both cost and latency

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** Standard reports (archived) conforms to the Batch API to save 50% on costs. Urgent exception reports need to trigger alerts within 30 minutes so must use the real-time Messages API. This is the optimal architecture for both cost and latency

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

</details>


---

## Q31 · single choice

The document analysis agent has a single analyze_document tool that takes a document and a free-text instruction parameter. During evaluation, requests like "extract the key financial metrics" often return narrative summaries, while "summarize the methodology" sometimes returns raw data tables. The synthesis agent reports that 35% of analysis results require re-requests with clarified instructions.

What's the most effective way to improve reliability?

- ✅ **A.** Split the generic tool into purpose-specific tools– extract_data_points, summarize_content, verify_claim_against_source –each with defined input/output contracts.
- **B.** Have the coordinator pre-classify each analysis request before passing instructions to the document analysis agent.
- **C.** Keep the single tool but add an analysis_type enum parameter requiring explicit selection between extraction, summarization, and verification modes.
- **D.** Enhance the tool description with detailed examples showing how different instruction phrasings should map to different output formats.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Split the generic tool into purpose-specific tools– extract_data_points, summarize_content, verify_claim_against_source –each with defined input/output contracts.

Generic analyze_document with free-text instructions leads to ambiguous and inconsistent outputs. Splitting into specialized tools with defined input/output contracts completely eliminates ambiguity, ensuring the agent always receives the correct output format.

**A.** Generic analyze_document with free-text instructions leads to ambiguous and inconsistent outputs. Splitting into specialized tools with defined input/output contracts completely eliminates ambiguity, ensuring the agent always receives the correct output format.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q32 · single choice

The coordinator agent has AgentFunctions configured for all four specialized subagents, each with appropriate descriptions and restrictions. During testing, you find the coordinator sometimes fails to delegate—it writes "I'll ask the web search agent to find sources" without actually invoking it.

What is the most likely cause?

- ✅ **A.** The coordinator's allowed Tools configuration doesn't include "Task", so while it can describe delegation, it cannot actually invoke the tool required to spawn subagents.
- **B.** The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent parameter can be specified.
- **C.** The AgentFunctions are configured correctly, but the coordinator's system prompt includes a statement that prevents it from knowing the available subagent types.
- **D.** Subagent context limit descriptions from the coordinator don't provide enough context; you need to configure explicit context content between coordinator and tool descriptions.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. The coordinator's allowed Tools configuration doesn't include "Task", so while it can describe delegation, it cannot actually invoke the tool required to spawn subagents.

The coordinator can describe delegation (generating text), but cannot actually invoke subagents because the 'Task' tool is not in the allowed tools configuration. This is a common configuration error in multi-agent setup.

**A.** The coordinator can describe delegation (generating text), but cannot actually invoke subagents because the 'Task' tool is not in the allowed tools configuration. This is a common configuration error in multi-agent setup.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

</details>


---

## Q33 · single choice

When researching "renewable energy adoption," the web search agent returns recent statistics (2024: 35% adoption) while the document analysis agent extracts data from internal reports (2022: 18% adoption). The synthesis agent incorrectly flags these as contradictory sources rather than recognizing the data shows growth over time.

What change would best enable the synthesis agent to correctly interpret such temporal differences?

- **A.** Configure the web search agent to only return results from the past 6 months.
- **B.** Add a conflict resolution agent that automatically discards older data when newer data exists for the same metric.
- **C.** Instruct the synthesis agent to always treat the most recent data as authoritative and place older findings in a separate historical appendix.
- ✅ **D.** Require subagents to include publication or data collection dates in their structured outputs.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Require subagents to include publication or data collection dates in their structured outputs.

The synthesis agent misreads the data because it never sees the dates. Making each data point carry its own timestamp in the structured output lets synthesis reason about trends instead of contradictions.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The synthesis agent misreads the data because it never sees the dates. Making each data point carry its own timestamp in the structured output lets synthesis reason about trends instead of contradictions.

</details>


---

## Q34 · single choice

Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analysis agent had partially completed extraction, and the synthesizer had begun pattern identification.  
You need to resume processing without repeating work or losing fidelity of prior findings.

What state management approach best balances information fidelity with context efficiency when restoring agent state?

- **A.** Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings.
- **B.** Have each agent maintain its own persistent state file and reload it independently at the start of each session.
- **C.** Persist the coordinator's conversation log containing all task delegations and responses, providing this to agents when resuming.
- ✅ **D.** Have each agent persist a structured report to a known location. On resume, the coordinator loads the reports and injects relevant state into agent prompts.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Have each agent persist a structured report to a known location. On resume, the coordinator loads the reports and injects relevant state into agent prompts.

Structured reports persist to known locations allowing the coordinator to load and inject state into agent prompts when resuming. This is more efficient than raw conversation logs (too verbose) or vector stores (more complicated than necessary).

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** Structured reports persist to known locations allowing the coordinator to load and inject state into agent prompts when resuming. This is more efficient than raw conversation logs (too verbose) or vector stores (more complicated than necessary).

</details>


---

## Q35 · single choice

Production reviews reveal inconsistent handling of uncertainty in final reports. Sometimes confidence calibrations are synthesized into standardized uncertainty expressions, while other times results produce vague estimates without clear methodology.

Which system-level improvement best addresses this inconsistency?

- ✅ **A.** Instruct the synthesis agent to use explicit sections separating confirmed findings from contested analysis, preserving original source characterizations.
- **B.** Add a verification subagent that cross-references findings across sources, only accepting synthesis corroborated by at least two independent sources.
- **C.** Implement a confidence calibration layer where synthesis agent normalizes uncertainty expressions into standardized probability representations (0.0-1.0), then weights their calibrated confidence.
- **D.** Configure subagents to only report findings with sufficient coverage breadth, source diversity, and quality criteria before passing results to the synthesis agent.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Instruct the synthesis agent to use explicit sections separating confirmed findings from contested analysis, preserving original source characterizations.

The report structure clearly separates confirmed findings from those that are controversial, while preserving the original context – this is a way to ensure balance and accuracy without being too hedged in any case.

**A.** The report structure clearly separates confirmed findings from those that are controversial, while preserving the original context – this is a way to ensure balance and accuracy without being too hedged in any case.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q36 · single choice

The coordinator provides detailed step-by-step instructions to the web search subagent, specifying exact search queries, source quality criteria (coverage breadth, source diversity), and content type classifications. The coordinator sometimes encounters challenges where instructions fail when the subagent encounters unexpected situations.

What's the most effective way to improve subagent adaptability?

- **A.** Implement a task classification step where the coordinator categorizes requests as "analytical" vs "exploratory" and uses different instruction sets for each category.
- **B.** Remove procedural detail entirely, delegating with simple goals like "research it thoroughly" and relying on the subagent's general capabilities.
- **C.** Add explicit fallback directives to the detailed instructions: "if specified searches fail, attempt alternative queries before reporting failure."
- ✅ **D.** Specify research goals and quality criteria (coverage breadth, source diversity, content type) rather than procedural instructions, letting the subagent determine execution.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Specify research goals and quality criteria (coverage breadth, source diversity, content type) rather than procedural instructions, letting the subagent determine execution.

Step-by-step instructions are too rigid, making the subagent unable to adapt when encountering unexpected situations. Specifying goals and quality criteria instead allows the subagent to use judgment to handle unforeseen situations.

**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** Step-by-step instructions are too rigid, making the subagent unable to adapt when encountering unexpected situations. Specifying goals and quality criteria instead allows the subagent to use judgment to handle unforeseen situations.

</details>


---

## Q37 · single choice

A user is expanding the research system beyond its single web search agent by adding specialized data sources. They add a financial API agent that returns structured JSON with revenue, margins, and growth rates; a news monitoring agent that returns prose summaries of recent developments; and a patent analysis agent that returns structured lists of technology areas. The synthesis agent combines these into executive briefings. Currently, it converts everything to bullet points, causing financial comparisons to lose tabular clarity and news summaries to lose narrative flow.

What change would most improve briefing quality?

- **A.** Add a format conversion layer between subagents and synthesis that transforms all outputs to a common intermediate representation.
- ✅ **B.** Update the synthesis agent to render each content type appropriately–financial data as tables, news as prose.
- **C.** Standardize all subagent outputs to JSON with fields for claim, evidence, source, and confidence.
- **D.** Standardize all subagent outputs to prose summaries with inline citations.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Update the synthesis agent to render each content type appropriately–financial data as tables, news as prose.

The problem is that the synthesis agent converts everything to bullet points. The most direct solution is to update the synthesis agent to render each content type properly: financial data → tables, news → prose. No need to add layers or standardize outputs.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** The problem is that the synthesis agent converts everything to bullet points. The most direct solution is to update the synthesis agent to render each content type properly: financial data → tables, news → prose. No need to add layers or standardize outputs.

**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

</details>


---

## Q38 · single choice

The web search agent has gathered several relevant sources for a research topic. The document analysis agent now needs to examine these sources.

How does information typically flow between these two specialized subagents?

- **A.** The web search agent directly invokes the document analysis agent, passing the discovered sources as parameters.
- **B.** The agents communicate through an event-driven message queue, with the document analysis agent subscribing to web search completion events.
- **C.** Both agents access a shared memory store where the web search agent writes findings and the document analysis agent reads them.
- ✅ **D.** The coordinator agent receives the web search agent's output and includes relevant findings in the prompt when invoking the document analysis agent.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. The coordinator agent receives the web search agent's output and includes relevant findings in the prompt when invoking the document analysis agent.

In multi-agent architecture with coordinator, information flows through the coordinator: the web search agent returns output to the coordinator, the coordinator includes relevant findings in the prompt when invoking the document analysis agent. Subagents do not directly communicate with each other.

**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**B.** That adds infrastructure or indirection, but the question is really about choosing a simpler coordination pattern that fits the current workflow.

**C.** This adds infrastructure but does not directly solve the failure mode described in the question.

**D.** In multi-agent architecture with coordinator, information flows through the coordinator: the web search agent returns output to the coordinator, the coordinator includes relevant findings in the prompt when invoking the document analysis agent. Subagents do not directly communicate with each other.

</details>


---

## Q39 · single choice

After the web search agent and document analysis agent complete their tasks, the coordinator invokes the synthesis agent. However, the synthesis agent responds that it cannot complete the task because no research findings were provided.

What is the most likely cause of this issue?

- **A.** The subagents need to share a single API connection to enable automatic context sharing between invocations.
- **B.** The synthesis agent needs tools that can fetch results directly from the other agents' conversation histories.
- **C.** The synthesis agent's context window is not large enough to hold the combined outputs from both previous agents.
- ✅ **D.** The coordinator did not include the outputs from the previous agents in the synthesis agent's prompt.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. The coordinator did not include the outputs from the previous agents in the synthesis agent's prompt.

Subagents do not automatically share context. The coordinator must proactively include outputs from previous agents into the prompt when invoking the synthesis agent. This is the most common error in multi-agent orchestration.

**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**D.** Subagents do not automatically share context. The coordinator must proactively include outputs from previous agents into the prompt when invoking the synthesis agent. This is the most common error in multi-agent orchestration.

</details>


---

## Q40 · single choice

In production, final reports frequently contain claims without proper source attribution. Investigation shows that while the web search and document analysis agents correctly attach citations to their outputs, the synthesis agent loses track of which sources support which conclusions when combining findings.

What's the most effective architectural change?

- **A.** Maintain complete transcripts of all subagent interactions and add a citation-resolution agent to analyze logs and determine attributions before report generation.
- **B.** Have the coordinator inject source identifier prefixes into text before each handoff, then parse these prefixes at report generation to reconstruct citations.
- **C.** Add a verification step where the report generator uses semantic similarity matching against original sources to reconstruct which claims came from which documents.
- ✅ **D.** Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources.

The failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them. This matches Anthropic's multi-agent best practice of structured outputs over fragile text-prefix conventions (A), costly post-hoc log analysis (B), or unreliable semantic-similarity reconstruction (D).

**A.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.

**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them. This matches Anthropic's multi-agent best practice of structured outputs over fragile text-prefix conventions (A), costly post-hoc log analysis (B), or unreliable semantic-similarity reconstruction (D).

</details>


---

## Q41 · single choice

Production monitoring shows that follow-up queries like "summarize what we learned about market trends" consistently take 40+ seconds. Investigation reveals the coordinator spawns the synthesis subagent for each summarization request, passing 80K+ tokens of accumulated findings. The coordinator already has these findings in its context from orchestrating the research.

What's the most effective way to improve response time for these follow-up summaries?

- **A.** Pre-generate and cache summaries at multiple granularities whenever new findings accumulate.
- **B.** Spawn the synthesis subagent with reduced context and have it request specific findings from the coordinator on-demand.
- **C.** Enable prompt caching on the synthesis subagent to reduce the overhead of repeatedly transferring the same research findings.
- ✅ **D.** Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analysis.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analysis.

The coordinator already has findings in context from the orchestration process. Spawn synthesis subagent just to summarize is overkill (80K+ token transfer overhead). It is simply the most efficient way for the coordinator to handle summary requests themselves.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** The coordinator already has findings in context from the orchestration process. Spawn synthesis subagent just to summarize is overkill (80K+ token transfer overhead). It is simply the most efficient way for the coordinator to handle summary requests themselves.

</details>


---

## Q42 · single choice

After the web search agent finds 25 sources (120K tokens of raw content), the document analysis agent extracts key insights (15K tokens), and the synthesis agent produces a coherent narrative draft (3K tokens), the coordinator must pass context to the report generation agent for the final output with proper source citations.

What context-passing strategy provides the best balance of completeness and efficiency?

- **A.** Pass a condensed summary of all prior stages that preserves the main findings and attributes them to sources by name only.
- ✅ **B.** Pass the synthesis draft along with a structured source index that maps key claims to their source URLs and relevant excerpts.
- **C.** Pass only the synthesis draft and have a separate post-processing pipeline match claims to sources and insert citations after the report is generated.
- **D.** Pass the full accumulated context from all prior agents.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Pass the synthesis draft along with a structured source index that maps key claims to their source URLs and relevant excerpts.

Pass synthesis draft (3K tokens) + source index mapping claims to URLs/excerpts provides enough information for the report generator without transferring the entire 150K+ tokens raw content. Source index ensures accurate citations.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** Pass synthesis draft (3K tokens) + source index mapping claims to URLs/excerpts provides enough information for the report generator without transferring the entire 150K+ tokens raw content. Source index ensures accurate citations.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q43 · single choice

When analyzing complex legal cases that cite multiple precedents, the document analysis subagent processes each sequentially. A landmark case citing 12 precedents takes over 3 minutes to analyze completely.

What's the most effective way to reduce this latency while preserving the coordinator's ability to monitor and debug the system?

- **A.** Create a recursive agent hierarchy where analysis agents subdivide work among child agents until reaching single-precedent granularity.
- **B.** Implement a message queue where precedent analysis tasks are processed asynchronously by a pool of worker agents.
- **C.** Enable the document analysis subagent to spawn its own specialized subagents dynamically when it encounters cases with many citations.
- ✅ **D.** Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis.

Anthropic's recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place. Options B and C create nested/recursive agent hierarchies that severely degrade observability and debuggability, and D introduces asynchronous queue infrastructure that decouples work from the coordinator's direct visibility.

**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

**D.** Anthropic's recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place. Options B and C create nested/recursive agent hierarchies that severely degrade observability and debuggability, and D introduces asynchronous queue infrastructure that decouples work from the coordinator's direct visibility.

</details>


---

## Q44 · single choice

In production, you're distributing complex queries to specialized subagents. The query distribution is uneven and evolving as users discover new applications.

What's the most effective approach to optimize for query complexity?

- ✅ **A.** Create a fast-track path for factual questions that bypasses subagents entirely, routing only analytical queries through the complete pipeline.
- **B.** Implement pattern-based routing that categorizes queries based on factual vs analytical patterns and maps each to a predefined subagent combination.
- **C.** Train a query complexity classifier based on labeled historical data to predict optimal subagent combination.
- **D.** Have the coordinator analyze each query dynamically and selectively route subagents based on the query's complexity and routing characteristics.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Create a fast-track path for factual questions that bypasses subagents entirely, routing only analytical queries through the complete pipeline.

For distribution queries that are mostly factual/simple, create fast-track path bypass subagents for simple factual questions, only route analytical queries through the full pipeline. This method reduces latency and cost for the majority of queries.

**A.** For distribution queries that are mostly factual/simple, create fast-track path bypass subagents for simple factual questions, only route analytical queries through the full pipeline. This method reduces latency and cost for the majority of queries.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**D.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

</details>


---

## Q45 · single choice

The synthesis agent receives summarized findings from the web search and document analysis agents, then passes a consolidated summary to the report generator. During testing, you discover the generated reports make factual claims without proper citations–the report generator cannot attribute statements to their original sources because that metadata was lost during the summarization steps.

What's the most effective approach to ensure proper source attribution in the final reports?

- ✅ **A.** Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers).
- **B.** Have the report generator query the web search agent to re-locate sources for claims in the final report.
- **C.** Instruct the synthesis agent to embed source references inline within its summary text using a consistent citation format.
- **D.** Skip summarization and pass full raw outputs from web search and document analysis directly to the report generator.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers).

Instead of fixing attribution after loss, each agent needs to output structured data with separate content summaries and source metadata (URLs, document names, page numbers). This ensures metadata is not lost through summarization steps.

**A.** Instead of fixing attribution after loss, each agent needs to output structured data with separate content summaries and source metadata (URLs, document names, page numbers). This ensures metadata is not lost through summarization steps.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q46 · single choice

When implementing your lookup_order MCP tool, the backend sometimes returns errors (e.g., "Order not found" or temporary database failures).

What is the correct pattern for communicating these errors back to the agent?

- **A.** Return a success response with a "status" field indicating the error type
- **B.** Log the error server-side and return an empty result to avoid confusing the model
- ✅ **C.** Return the error message in the tool result content with the isError flag set to true
- **D.** Throw an exception from the tool handler so the agent framework can catch and log it

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Return the error message in the tool result content with the isError flag set to true

MCP's designed pattern: put the error text in the content field and mark isError=true. Claude sees both the failure flag and a readable message to reason about.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** MCP's designed pattern: put the error text in the content field and mark isError=true. Claude sees both the failure flag and a readable message to reason about.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q47 · single choice

After investigating a billing dispute over 25+ turns, you've identified that duplicate charges occurred due to a payment gateway timeout triggering retry logic. The required refund ($847) exceeds your $500 authorization limit. You need to call escalate_to_human, and the human agent won't have access to your conversation transcript.

What context should you pass to enable effective resolution?

- **A.** Your diagnosis and the refund amount only.
- **B.** The customer's original complaint verbatim plus the tool result excerpts showing duplicate transactions.
- ✅ **C.** A structured summary: customer ID, root cause, refund amount, and recommended action.
- **D.** The complete conversation transcript with all tool results.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. A structured summary: customer ID, root cause, refund amount, and recommended action.

Human agents need enough information to resolve quickly, but do not need the entire transcript. Structured summary with customer ID, root cause, refund amount and recommended action provides exactly what is needed in a concise and actionable way.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** Human agents need enough information to resolve quickly, but do not need the entire transcript. Structured summary with customer ID, root cause, refund amount and recommended action provides exactly what is needed in a concise and actionable way.

**D.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.

</details>


---

## Q48 · single choice

Your agent has called lookup_order multiple times while investigating a customer's return requests. Each response includes 40+ fields (items, shipping details, payment info, status history). Tool outputs now represent the majority of the conversation's context. The customer mentions two more orders they want to discuss.

What's the most effective approach before making additional lookups?

- **A.** Move all tool responses to a vector database with semantic indexing, retrieving relevant portions as the conversation continues
- ✅ **B.** Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details
- **C.** Proceed with additional lookups without modifying the existing tool output context
- **D.** Have the model generate a natural language summary of each order's key details, replacing structured responses with prose descriptions

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details

When tool outputs take up most of the context, you need to trim down to only keep the return-relevant fields (items, purchase date, return window, status) before adding lookups. Frees the context window without losing important information.

**A.** That adds infrastructure or indirection, but the question is really about choosing a simpler coordination pattern that fits the current workflow.

**B.** When tool outputs take up most of the context, you need to trim down to only keep the return-relevant fields (items, purchase date, return window, status) before adding lookups. Frees the context window without losing important information.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q49 · single choice

A customer sends: "This is frustrating. I've explained my issue twice and nothing is being resolved. I want to talk to a real person NOW." The agent has not yet called any tools to investigate their account.

What should the agent do?

- **A.** First call get_customer and lookup_order to gather account context, then escalate to a human agent.
- ✅ **B.** Immediately call escalate_to_human with the conversation history.
- **C.** Briefly explain what the agent can help with and offer to resolve the issue quickly, escalating only if the customer repeats their request.
- **D.** Acknowledge the frustration and ask one targeted question to understand the specific issue before escalating.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Immediately call escalate_to_human with the conversation history.

An explicit request for a human agent, particularly after repeated unresolved attempts and clear frustration, should be escalated immediately. Delaying escalation to gather context, explain capabilities, or ask another question disregards the customer’s stated request.

> **⚠️ Answer keys disagree**
> Another practice source marks D instead. This course uses B because the exam objectives list "Honoring explicit customer requests for human agents immediately without first attempting investigation" as a tested skill.

#### Alternative reasoning (supports D)

- The customer says 'twice' but you don't have context yet. An empathetic question, intended to give you the opportunity to resolve it the first time without incurring frustration or delaying a potential handoff.

- A. Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

- B. Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

- C. It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

- D. The customer says 'twice' but you don't have context yet. An empathetic question, intended to give you the opportunity to resolve it the first time without incurring frustration or delaying a potential handoff.

</details>


---

## Q50 · single choice

You're implementing the escalation logic for when the agent should call escalate_to_human. Your team proposes four different approaches for triggering escalation.

Which approach will most reliably identify cases that genuinely require human intervention?

- **A.** Build a rules engine that maps specific issue types, customer segments, and product categories to escalation decisions, removing the need for model judgment calls.
- **B.** Configure the agent to escalate after three consecutive tool calls that fail to resolve the customer's stated issue, ensuring a reasonable attempt before involving a human.
- **C.** Implement sentiment analysis that monitors for frustration indicators (negative language, repeated questions, exclamation marks) and trigger escalation when the frustration score exceeds a configured threshold.
- ✅ **D.** Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress.

Defining clear escalation conditions (customer requests human, policy exceptions needed, no meaningful progress) is the most comprehensive and flexible approach. Rules engine (D) is too rigid, sentiment analysis (C) is not reliable enough, fixed retry count (A) is too mechanical.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Defining clear escalation conditions (customer requests human, policy exceptions needed, no meaningful progress) is the most comprehensive and flexible approach. Rules engine (D) is too rigid, sentiment analysis (C) is not reliable enough, fixed retry count (A) is too mechanical.

</details>


---

## Q51 · single choice

Your agent is handling a billing dispute. After calling get_customer and lookup_order, it identifies that the dispute involves a promotional pricing error requiring manager approval–beyond the agent's authorization level.

How should the workflow handle this mid-process escalation?

- **A.** Persist the complete conversation and tool response history to a database, then call escalate_to_human with a reference ID.
- **B.** Attempt the refund with process_refund anyway, escalating only if the system rejects the transaction.
- **C.** Call escalate_to_human passing only the customer's original message.
- ✅ **D.** Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human.

Mid-process escalation needs to provide enough context for the human agent. Compile structured handoff with customer details, order information and identified issue ensures the human agent has enough information to resolve without needing to re-investigate from the beginning.

**A.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**D.** Mid-process escalation needs to provide enough context for the human agent. Compile structured handoff with customer details, order information and identified issue ensures the human agent has enough information to resolve without needing to re-investigate from the beginning.

</details>


---

## Q52 · single choice

During a billing dispute resolution, your agent successfully retrieves customer info via get_customer and order details via lookup_order, but when attempting to process the refund via process_refund, the tool returns a timeout error. The agent has enough information to explain the billing, confirm the refund eligibility, and verify refund eligibility, but cannot actually process the refund due to the backend failure.

What approach best balances first-contact resolution with appropriate error handling?

- **A.** Implement automatic retries with exponential backoff for process_refund, keeping the conversation open until the refund is successfully processed
- **B.** Confirm the refund will be processed and close the conversation, since the system has all necessary information to complete it automatically
- ✅ **C.** Explain the billing, confirm refund eligibility, acknowledge the system issue preventing immediate processing, and offer escalation or retry later
- **D.** Escalate immediately to a human agent since the refund action cannot be completed

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Explain the billing, confirm refund eligibility, acknowledge the system issue preventing immediate processing, and offer escalation or retry later

Deliver the partial value you can (explanation + eligibility), be honest about the failure, and let the customer choose between human escalation or a retry. Classic graceful degradation.

**A.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

**B.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.

**C.** Deliver the partial value you can (explanation + eligibility), be honest about the failure, and let the customer choose between human escalation or a retry. Classic graceful degradation.

**D.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

</details>


---

## Q53 · single choice

Production logs reveal inconsistent error responses when lookup_order fails. The agent sometimes retries (wasting 3-4 turns) before concluding on the error. Your MCP tool currently returns only a plain text error message to Claude.

What's the most effective improvement?

- ✅ **A.** Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.
- **B.** Add few-shot examples to the system prompt showing how to distinguish retryable from non-retryable errors by parsing error message text.
- **C.** Create an analyze_error MCP tool the agent calls to determine the error type before deciding how to handle it.
- **D.** Implement retry logic with exponential backoff in your MCP server for all errors, returning only successful results to the agent.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.

When the tool returns only plain text, the agent cannot distinguish transient vs permanent errors. Structured error response with retryable: false for business errors allows agents to know immediately that there is no need to retry, saving turns and improving customer experience.

**A.** When the tool returns only plain text, the agent cannot distinguish transient vs permanent errors. Structured error response with retryable: false for business errors allows agents to know immediately that there is no need to retry, saving turns and improving customer experience.

**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.

</details>


---

## Q54 · single choice

When the agent calls lookup_order and receives order details showing the item was purchased 45 days ago, how does the agentic loop determine whether to call process_refund or escalate_to_human next?

- **A.** The agent executes the remaining steps in a tool sequence planned at the start of the request.
- **B.** The agent follows a pre-configured decision tree mapping order attributes to specific tool calls.
- ✅ **C.** The order details are added to the conversation and the model reasons about which action to take.
- **D.** The orchestration layer automatically routes to the next tool based on the order's status field.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. The order details are added to the conversation and the model reasons about which action to take.

In Claude's agentic loop, after the tool returns results, order details are added to the conversation context and the model reasons about the next action based on that information. There is no hardcoded decision tree or orchestration layer to automatically route.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** In Claude's agentic loop, after the tool returns results, order details are added to the conversation context and the model reasons about the next action based on that information. There is no hardcoded decision tree or orchestration layer to automatically route.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q55 · single choice

A customer writes: "I've been going back and forth on this return for days. I just want to speak to someone who can actually help me." The agent has confirmed via lookup_order that the return is straightforward–within policy and eligible for immediate processing.

What should the agent do?

- **A.** Ask what specifically hasn't worked in previous attempts before deciding whether to escalate or resolve automatically
- ✅ **B.** Acknowledge frustration, inform them this is resolvable now, and offer to complete it or escalate
- **C.** Process the refund via process_refund to resolve the underlying issue, then inform them it's complete
- **D.** Call escalate_to_human immediately to honor the customer's request

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Acknowledge frustration, inform them this is resolvable now, and offer to complete it or escalate

Return eligible and can be processed immediately, but customer is frustrated. Agents should not decide to escalate (A) or process without asking (C). The best approach is to acknowledge frustration, inform that the issue can be resolved immediately, and let the customer choose.

**A.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**B.** Return eligible and can be processed immediately, but customer is frustrated. Agents should not decide to escalate (A) or process without asking (C). The best approach is to acknowledge frustration, inform that the issue can be resolved immediately, and let the customer choose.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

</details>


---

## Q56 · single choice

Compliance requires that refunds exceeding $500 must automatically escalate to a human agent–this rule cannot be left to model discretion. Despite clear system prompt instructions, production logs show the agent occasionally processes high-value refunds directly (3% failure rate).

How should you achieve guaranteed compliance?

- ✅ **A.** Implement a hook to intercept tool calls; when the refund process amount exceeds $500, block it and invoke human escalation.
- **B.** Strengthen the system prompt with emphatic language: "CRITICAL POLICY: Refunds over $500 MUST trigger human escalation. NEVER process these directly."
- **C.** Modify the refund tool to return an error with message "Amount exceeds policy limit–please escalate" when threshold is exceeded.
- **D.** Add few-shot examples to the prompt showing correct escalation behavior at various refund amounts ($400, $500, $600).

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Implement a hook to intercept tool calls; when the refund process amount exceeds $500, block it and invoke human escalation.

When compliance is mandatory and cannot be left to model discretion, programmatic protection needs to be implemented at the infrastructure level. Hook intercept tool calls and block refund >$500 are guaranteed compliance, regardless of model behavior or prompt interpretation.

**A.** When compliance is mandatory and cannot be left to model discretion, programmatic protection needs to be implemented at the infrastructure level. Hook intercept tool calls and block refund >$500 are guaranteed compliance, regardless of model behavior or prompt interpretation.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q57 · single choice

A customer raises three separate issues during one session: a refund inquiry (turns 1-15), a subscription question (turns 16-30), and a payment method update (turns 31-45). At turn 48, the customer asks "What happened with my refund?" The conversation is approaching context limits.

What strategy best maintains the agent's ability to address all issues throughout the session?

- ✅ **A.** Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer.
- **B.** Rely on MCP tools to re-fetch relevant information on demand when the customer references earlier issues.
- **C.** Summarize earlier turns into a narrative description, preserving full message history only for the active issue.
- **D.** Implement sliding window context that retains the most recent 30 turns.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer.

A separate structured context layer preserves the exact state and key facts for every issue, including order IDs, amounts, and statuses, even when the conversational history must be compressed or truncated. This enables accurate retrieval of the earlier refund details when that issue is raised again.

> **⚠️ Answer keys disagree**
> Another practice source marks C instead. This course uses A because the exam objectives list "Extracting transactional facts (amounts, dates, order numbers, statuses) into a persistent "case facts" block" as a tested skill.

#### Alternative reasoning (supports C)

- Progressive summarization compresses already resolved topics while keeping the thread active verbatim – this is the classic pattern for long multi-issue conversations approaching the context limit.

- A. It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

- B. It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

- C. Progressive summarization compresses already resolved topics while keeping the thread active verbatim – this is the classic pattern for long multi-issue conversations approaching the context limit.

- D. It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q58 · single choice

The agent verifies customer identity through a multi-step process before resetting passwords. During testing, you notice that after the customer answers the third verification question, the agent asks them to provide their name again, as if the earlier exchange never happened.

What's the most likely cause of this behavior?

- **A.** Claude's memory retention is limited to two conversational turns by default, requiring explicit configuration to extend it.
- ✅ **B.** The conversation history isn't being passed in subsequent API requests.
- **C.** The verification tool is clearing the agent's internal state after each successful validation step.
- **D.** The prompt lacks instructions telling Claude to remember information across multiple exchanges.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. The conversation history isn't being passed in subsequent API requests.

Claude has no inherent memory between API calls. If the agent asks again for the information provided, the most common reason is that the conversation history was not passed during subsequent API requests. Prompt instructions (A) or tool behavior (C) are not the main cause.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** Claude has no inherent memory between API calls. If the agent asks again for the information provided, the most common reason is that the conversation history was not passed during subsequent API requests. Prompt instructions (A) or tool behavior (C) are not the main cause.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q59 · single choice

Your process_refund tool returns two types of errors: technical errors ("503 Service Unavailable", "Connection timeout") that are transient (5% of calls), and business errors ("Order exceeds 30-day return window", "Item already refunded") that are permanent (12% of calls). Monitoring shows the agent wastes 3-4 turns retrying business errors that can never succeed. Currently, both error types return only a plain text message to Claude.

What's the most effective way to reduce wasted retries while improving customer-facing response quality?

- **A.** Implement automatic retry logic at the tool level for technical errors only, passing business errors to Claude without retries.
- **B.** Add few-shot examples showing how to distinguish retryable from non-retryable errors by parsing error message text.
- **C.** Add a check_refund_eligibility tool that must be called before process_refund to prevent business rule violations.
- ✅ **D.** Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.

Adding retryable: false flag to business errors allows Claude to know immediately without retry, and customer-friendly explanation to communicate with customers. Separating retry (technical) vs no-retry (business) logic at the tool level is the cleanest solution.

**A.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.

**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** Adding retryable: false flag to business errors allows Claude to know immediately without retry, and customer-friendly explanation to communicate with customers. Separating retry (technical) vs no-retry (business) logic at the tool level is the cleanest solution.

</details>


---

## Q60 · single choice

A customer returns 4 hours after their initial session about the same billing dispute. The previous 32-turn session contains context: lookup_status_result messages containing "Status: Pending Refund" and significant tokens from prior lookup results. The agent needs to be prepared to answer the customer fully.

What approach most reliably handles returning customers?

- **A.** Create a new session with a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed.
- **B.** Resume with state and configure the agent to automatically re-call all previous tool_results messages to ensure data freshness.
- **C.** Resume with the full conversation and add a system prompt instruction that instructs the agent to prioritize resolving the pending refund.
- ✅ **D.** Start a new session, inject a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Start a new session, inject a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed.

After 4 hours, cached data can become stale. Starting a new session with a structured summary of the previous interaction (issue type, steps taken, current status) provides the necessary context, while fresh tool calls ensure data accuracy.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** After 4 hours, cached data can become stale. Starting a new session with a structured summary of the previous interaction (issue type, steps taken, current status) provides the necessary context, while fresh tool calls ensure data accuracy.

</details>


---

## Q61 · single choice

Your extraction pipeline processes invoices and extracts line items, subtotals, tax amounts, and grand totals. During evaluation, you discover that in 18% of extractions, the sum of extracted line item amounts doesn't match the extracted grand total—sometimes due to OCR errors in the source document, sometimes due to extraction mistakes by the model. Downstream accounting systems reject records with mismatched totals.

What's the most effective approach to improve extraction reliability?

- **A.** Extract line items and totals independently, then use a separate validation model to reconcile discrepancies by determining which extracted values are most likely correct.
- **B.** Implement post-processing that automatically adjusts line item amounts proportionally when their sum doesn't match the stated total.
- **C.** Add few-shot examples demonstrating invoices where extracted line items sum correctly to the stated total, encouraging the model to produce mathematically consistent extractions.
- ✅ **D.** Add a "calculated_total" field where the model sums extracted line items alongside a "stated_total" field. Flag records for human review when values differ.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Add a "calculated_total" field where the model sums extracted line items alongside a "stated_total" field. Flag records for human review when values differ.

Capturing both calculated_total and stated_total turns discrepancy into a first-class signal – uniformly detects both OCR errors and extraction mistakes, and routes only 18% mismatched records to human review. Auto-adjust and reconciliation model both silently fabricate/hide incorrect data for the accounting system.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**D.** Capturing both calculated_total and stated_total turns discrepancy into a first-class signal – uniformly detects both OCR errors and extraction mistakes, and routes only 18% mismatched records to human review. Auto-adjust and reconciliation model both silently fabricate/hide incorrect data for the accounting system.

</details>


---

## Q62 · single choice

An engineer asks your agent to identify untested code paths in a legacy payment processing module spanning 45 files. After reading the first 8 source files, the agent's responses are becoming noticeably less accurate — it's forgetting previously discussed code patterns and hasn't yet located all test files or traced critical payment flows.

What's the most effective approach to complete this investigation?

- **A.** Switch to using Grep to search for specific function names instead of reading full files, reducing the content loaded into context for remaining exploration.
- **B.** Document all current findings in a summary report, clear context completely, then use that report as the sole reference for continuing the investigation.
- ✅ **C.** Spawn subagents to investigate specific questions (e.g., "find all test files for payment processing", "trace refund flow dependencies") while the main agent coordinates findings and preserves high-level understanding.
- **D.** Clear context with /clear, then selectively re-read only the most critical files discovered so far, writing key findings to a scratchpad file that persists between context resets.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Spawn subagents to investigate specific questions (e.g., "find all test files for payment processing", "trace refund flow dependencies") while the main agent coordinates findings and preserves high-level understanding.

The strongest approach is to delegate well-scoped investigations to subagents with fresh context while the main agent keeps the architectural overview. This lets the system continue deep exploration without overloading a single context window, and it preserves both detailed findings and high-level coordination.

**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**B.** A summary can help, but turning it into the only source of truth strips away detail that may still be needed for accurate follow-up work.

**C.** The strongest approach is to delegate well-scoped investigations to subagents with fresh context while the main agent keeps the architectural overview. This lets the system continue deep exploration without overloading a single context window, and it preserves both detailed findings and high-level coordination.

**D.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

</details>


---

## Q63 · single choice

The coordinator agent has AgentDefinitions configured for all four specialized subagents, each with appropriate descriptions, prompts, and tool restrictions. During testing, you notice the coordinator correctly reasons about when to delegate — it generates messages like "I'll ask the web search agent to find sources on this topic" — but no subagent execution ever occurs. The coordinator then proceeds as if the delegation happened and continues with incomplete information. Logs show no errors.

What is the most likely cause?

- ✅ **A.** The coordinator's allowedTools configuration doesn't include "Task", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents.
- **B.** Subagent context isolation means task descriptions from the coordinator don't automatically reach subagents; you need to configure explicit context forwarding in ClaudeAgentOptions.
- **C.** The AgentDefinitions are configured correctly, but the coordinator's system prompt doesn't explicitly list the available subagent types, preventing the model from knowing they can be invoked.
- **D.** The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent type parameter can be specified.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. The coordinator's allowedTools configuration doesn't include "Task", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents.

Without the Task tool in allowedTools, the coordinator can talk about delegating but has no way of actually calling the subagent – true to the 'reasons about it, no execution, no errors' symptom.

**A.** Without the Task tool in allowedTools, the coordinator can talk about delegating but has no way of actually calling the subagent – true to the 'reasons about it, no execution, no errors' symptom.

**B.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q64 · single choice

In production, you observe that simple fact-checking queries (e.g., "What year was the Paris Climate Agreement signed?") traverse all four subagents sequentially, consuming 40+ seconds and significant tokens per query. Complex comparative research benefits from the full pipeline. Your query distribution is diverse and evolving as users discover new applications.

What's the most effective approach to optimize for varying query complexity?

- **A.** Implement pattern-based routing that categorizes queries by structure (single-fact vs. comparative vs. analytical) and maps each category to a predefined subagent combination.
- **B.** Create a fast-path for factual questions that bypasses subagents entirely, routing all other queries through the complete pipeline to ensure research thoroughness.
- ✅ **C.** Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements.
- **D.** Train a query complexity classifier on labeled historical data to predict optimal subagent combinations, retraining periodically as query patterns evolve.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements.

Let the LLM coordinator independently reason about each query and select only the subagents that are truly necessary – this approach adapts naturally to diverse and evolving query distributions.

**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** Let the LLM coordinator independently reason about each query and select only the subagents that are truly necessary – this approach adapts naturally to diverse and evolving query distributions.

**D.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

</details>


---

## Q65 · single choice

Production logs reveal inconsistent error handling: when lookup_order fails, the agent sometimes retries 5+ times (wasteful when the order ID doesn't exist), sometimes escalates immediately (premature for temporary network issues), and sometimes asks users for clarification (inappropriate when the issue is a backend permission error). Investigation shows your MCP tool returns uniform error responses: {"isError": true, "content": [{"type": "text", "text": "Operation failed"}]}. The agent cannot distinguish between error types.

What's the most effective improvement?

- **A.** Add few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each.
- **B.** Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action.
- **C.** Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted.
- ✅ **D.** Enhance error responses with structured metadata: include errorCategory (transient/validation/permission), isRetryable boolean, and a description of what caused the failure.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Enhance error responses with structured metadata: include errorCategory (transient/validation/permission), isRetryable boolean, and a description of what caused the failure.

Provide agents with the necessary information to make the right decision: category, retryability and human-readable cause.

**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.

**D.** Provide agents with the necessary information to make the right decision: category, retryability and human-readable cause.

</details>


---

## Q66 · single choice

Users report that final reports sometimes lack depth on specific subtopics. Investigation shows that the document analysis agent frequently identifies gaps—for instance, noting "the retrieved sources discuss API authentication but lack details on token refresh patterns"—but under the current strict pipeline, this insight isn't actionable since search has already completed.

What's the most effective architectural change?

- ✅ **A.** Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient.
- **B.** Have the synthesis agent attach confidence scores to each section and flag areas with insufficient coverage for manual review.
- **C.** Add a research planning agent before the search phase that decomposes topics into specific sub- questions.
- **D.** Have the coordinator review analysis output for gap indicators and re-invoke search with gapinformed queries when gaps are detected.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient.

The core problem is a rigid one-way pipeline where gap insights arrive after search is finished. The best fix is a closed feedback loop: the analysis agent reports specific gaps as structured output, the coordinator launches targeted follow-up searches, and analysis runs again until coverage is sufficient. That makes the missing-information signal actionable instead of leaving it as a passive observation.

**A.** The core problem is a rigid one-way pipeline where gap insights arrive after search is finished. The best fix is a closed feedback loop: the analysis agent reports specific gaps as structured output, the coordinator launches targeted follow-up searches, and analysis runs again until coverage is sufficient. That makes the missing-information signal actionable instead of leaving it as a passive observation.

**B.** This defers the problem rather than solving the system behavior that caused it.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q67 · single choice

This currently requires manually copy-pasting content into conversations. The team wants the agent to access this standard Jira ticket data directly.

What's the most effective approach?

- **A.** Use the Bash tool with curl to call Jira's REST API, including authentication headers and parsing JSON responses inline.
- **B.** Export Jira tickets to markdown files in the repository that the agent accesses using the Read tool.
- ✅ **C.** Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces.
- **D.** Build a custom MCP server wrapping Jira's API with tools designed specifically for this team's code review workflow.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces.

For standard third-party service data like Jira tickets, Anthropic's recommended practice is to integrate an existing MCP server, which provides discoverable, typed tool interfaces with managed authentication. Building a custom MCP server (B) is unnecessary effort for standard ticket data, markdown exports (A) go stale and require manual syncing, and ad-hoc curl calls (D) are brittle and expose credentials inline.

**A.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** For standard third-party service data like Jira tickets, Anthropic's recommended practice is to integrate an existing MCP server, which provides discoverable, typed tool interfaces with managed authentication. Building a custom MCP server (B) is unnecessary effort for standard ticket data, markdown exports (A) go stale and require manual syncing, and ad-hoc curl calls (D) are brittle and expose credentials inline.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q68 · single choice

A critical bug is affecting production users. Error logs show exceptions in the OrderProcessing module with a clear stack trace pointing to a specific area, but you haven't worked with this module before.

What's the most effective approach?

- **A.** Start with direct execution to gather initial information, then switch to plan mode to design a comprehensive solution before implementing.
- ✅ **B.** Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause.
- **C.** Use plan mode to analyze the error in context of the module's design, enumerate potential root causes, and prioritize fixes systematically.
- **D.** Enter plan mode to explore the module's architecture and dependencies before attempting any fix.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause.

Debugging is adaptive — each file you read changes the most useful next step, so let the agent follow the evidence. The stack trace already points straight at the failure, so direct execution (read the trace read the relevant code fix once the root cause is identified) is the fastest, most reliable path.

> **⚠️ Answer keys disagree**
> Another practice source marks C (plan mode). This course keeps B because the exam objectives list "Selecting direct execution for well-understood changes with clear scope (e.g., a single-file bug fix with a clear stack trace)" as a tested skill.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** Debugging is adaptive — each file you read changes the most useful next step, so let the agent follow the evidence. The stack trace already points straight at the failure, so direct execution (read the trace read the relevant code fix once the root cause is identified) is the fastest, most reliable path.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q69 · single choice

After deploying the automated review, you notice high precision but low recall — real bugs are slipping through undetected. Investigation reveals your review prompt instructs Claude to "only report high- confidence issues you are certain about" and "err on the side of not commenting." Developers appreciate the low noise, but a race condition that caused a production outage was visible in a reviewed PR and went unreported. You need to substantially improve bug detection while keeping false positive rates manageable for your team.

What is the most effective approach?

- ✅ **A.** Split the review into a finding stage where Claude's goal is coverage — flagging every potential issue with confidence and severity metadata — and a separate stage that thresholds those findings.
- **B.** Add detailed few-shot examples demonstrating bug categories Claude should flag — race conditions, null dereferences, error handling gaps — while keeping the high-confidence filtering instruction to maintain current precision levels.
- **C.** Expand the context window by including related test files, recent git history, and the module's dependency graph alongside the diff, giving Claude richer signals to assess issue severity.
- **D.** Remove the conservative filtering instructions and prompt Claude to report all potential issues, then apply a programmatic filter to deduplicate and suppress categories that historically generate false positives.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Split the review into a finding stage where Claude's goal is coverage — flagging every potential issue with confidence and severity metadata — and a separate stage that thresholds those findings.

The best approach is to separate coverage from filtering. Let the review stage report every plausible finding together with confidence and severity metadata, then apply thresholding in a later stage. This improves recall substantially without forcing the team to accept raw unfiltered output as the final review result.

**A.** The best approach is to separate coverage from filtering. Let the review stage report every plausible finding together with confidence and severity metadata, then apply thresholding in a later stage. This improves recall substantially without forcing the team to accept raw unfiltered output as the final review result.

**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q70 · single choice

Your remove_team_member tool uses a dry_run: boolean parameter for previewing impacts before execution. Production monitoring shows the agent bypasses the preview step in 15% of calls by calling with dry_run=false directly. You need to ensure every removal is preceded by a preview that the user explicitly confirms.

What is the most reliable approach?

- ✅ **A.** Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action.
- **B.** Add detailed instructions and few-shot examples to the tool description requiring the agent to always call with dry_run=true first and wait for user confirmation before calling with dry_run=false.
- **C.** Annotate the tool as requiring confirmation and configure the orchestration layer to prompt the user for approval before forwarding any calls to annotated tools.
- **D.** Add server-side validation that permits dry_run=false only when a dry_run=true call with identical parameters occurred within the past 60 seconds.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action.

The best approach is to Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q71 · single choice

Your invoice extraction uses tool use with strict JSON schemas. JSON syntax errors never occur, but 12% of extractions fail semantic validation--for example, line Item amounts don't extracted total, or vendor IDs don't match valid formats. These failures currently route to manual review.

What's the most effective approach to reduce manual review volume while maintaining accuracy?

- **A.** Implement post-processing logic that automatically corrects common amors, such as recalculating totais from line items when sums don't match.
- **B.** Add stricter schema constraints with detailed field descriptions to prevent the model from generating invalid values initially.
- ✅ **C.** When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction.
- **D.** Retry the extraction up to 3 times when validation fallis, accepting the first result that passes validation.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction.

The best approach is to When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** The best approach is to When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**D.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

</details>


---

## Q72 · single choice

Your system must extract event details from calendar invitations and output JSON that strictly conforms to a schema with fields for title, date, time, location, and attendees. Downstream reject any malformed or non- conformant JSON.

What approach provides the most reliable schema compliance?

- **A.** Include detailed JSON formatting instructions and the target schema in your prompt, then parse Claude's text response as JSON.
- **B.** Append instructions like "Output only valid JSON matching the schema exactly" and implement retry logic to re-prompt when JSON parsing fails.
- **C.** Pre-fill Claude's response with an opening brace to force JSON output, then complete and parse the response.
- ✅ **D.** Define a tool with your target schema as input parameters and have Claude call it with the extracted data.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Define a tool with your target schema as input parameters and have Claude call it with the extracted data.

The best approach is to Define a tool with your target schema as input parameters and have Claude call it with the extracted data. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**D.** The best approach is to Define a tool with your target schema as input parameters and have Claude call it with the extracted data. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

</details>


---

## Q73 · single choice

Your extraction system uses tool_use with a JSON schema containing 12 fields and detailed descriptions, totaling approximately 2,500 tokens for the complete tool definition. Processing documents under 150K tokens yields 98% accuracy. For documents between 175-190K tokens, accuracy drops to 71%, with information from the final third consistently missed. The model's context window is 200K tokens.

What is the most likely cause?

- ✅ **A.** Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing.
- **B.** The model distributes attention proportionally across input length, causing fields mentioned only once near the document's end to receive insufficient processing focus.
- **C.** Schemas exceeding 8-10 fields increase decision complexity during parameter generation, reducing extraction accuracy independent of document length.
- **D.** Very long documents exceed the model's effective attention span regardless of context limits, causing accuracy degradation for content farther from the prompt instructions.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing.

The best approach is to Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** The best approach is to Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q74 · single choice

The extraction pipeline receives documents of varying types—some are invoices, others are contracts, and some are receipts. You've defined separate extraction tools, each with its own schema tailored to the document type. During testing, you observe that with tool_choice: "auto", Claude sometimes returns conversational text instead of calling an extraction tool, causing downstream parsing failures. You need guaranteed structured output without knowing the document type in advance.

What's the most effective approach?

- ✅ **A.** Set tool_choice: "any" with all extraction tools defined.
- **B.** Keep tool_choice: "auto" with system prompt instructions requiring tool use.
- **C.** Add a preliminary classification call, then make a second call with tool_choice forced to the identified extraction tool.
- **D.** Consolidate all document types into a single unified-schema extraction tool and force that tool.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Set tool_choice: "any" with all extraction tools defined.

When you need guaranteed structured output but do not know the document type upfront, the most reliable approach is a two-step flow: classify first, then force tool_choice to the correct extractor. Leaving selection on auto still allows conversational responses, while collapsing everything into one giant schema usually hurts precision.

**A.** When you need guaranteed structured output but do not know the document type upfront, the most reliable approach is a two-step flow: classify first, then force tool_choice to the correct extractor. Leaving selection on auto still allows conversational responses, while collapsing everything into one giant schema usually hurts precision.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.

</details>


---

## Q75 · single choice

Monitoring shows 12% of extractions fall Pydantic validation with specific errors like "expected float for quantity, got '2 to 3". Retrying these requests without modification produces failures.

What's the most effective approach to recover from these validation failures?

- ✅ **A.** Send a follow-up request including the validation error, asking the model to correct its output
- **B.** Set temperature to 0 to eliminate output variability and ensure consistent formatting
- **C.** Pre-process source documents to standardize problematic formats before sending them for extraction
- **D.** Implement a secondary pipeline using a larger model tier to reprocess documents that fail validation

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Send a follow-up request including the validation error, asking the model to correct its output

The best approach is to Send a follow-up request including the validation error, asking the model to correct its output. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** The best approach is to Send a follow-up request including the validation error, asking the model to correct its output. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** Changing model size may affect cost or quality, but it does not directly address the root cause in this scenario.

</details>


---

## Q76 · single choice

After three months of weekly sessions, your conversation history has grown to 85,000 tokens. When users ask "What did we conclude about the theme of isolation?", the assistant provides generic literary analysis rather than referencing the group's specific insights from earlier sessions. Discussions often build on previous meetings' conclusions, so maintaining narrative context is important.

What's the most effective approach?

- **A.** Implement rolling window truncation to keep only the most recent 25,000 tokens.
- **B.** Use semantic embedding to index the full conversation history and retrieve only relevant past exchanges for each user query, replacing the linear conversation format with retrieved segments.
- ✅ **C.** Implement progressive summarization where older conversation blocks are replaced with concise summaries that explicitly extract key conclusions, decisions, and recurring themes, keeping recent exchanges verbatim.
- **D.** Add structured XML tags to mark significant discussion conclusions throughout the conversation history.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Implement progressive summarization where older conversation blocks are replaced with concise summaries that explicitly extract key conclusions, decisions, and recurring themes, keeping recent exchanges verbatim.

When a conversation grows long but still depends on earlier conclusions, progressive summarization is the most balanced approach. It compresses older discussion into reusable takeaways while preserving recent exchanges verbatim.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.

**C.** When a conversation grows long but still depends on earlier conclusions, progressive summarization is the most balanced approach. It compresses older discussion into reusable takeaways while preserving recent exchanges verbatim.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q77 · single choice

You're Implementing a feature where users refine their playlist preferences through multiple conversation turns. After deploying, you notice Claude's responses don't reflect what us earlier in the same conversation— for example, a user says they love jazz, but two messages later Claude asks what genres they enjoy.

What is the most likely cause?

- ✅ **A.** Your application isn't including prior messages in the messages array
- **B.** Claude requires a vector database connection to maintain conversation memory
- **C.** The Claude API requires a session_id parameter that you haven't configured
- **D.** The model's context window has been exceeded by the conversation length

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Your application isn't including prior messages in the messages array

If Claude immediately forgets what was said a few turns ago in the same conversation, it's usually because the application doesn't retransmit the full message history in each API call. Claude does not maintain state across requests if the application does not provide context again.

**A.** If Claude immediately forgets what was said a few turns ago in the same conversation, it's usually because the application doesn't retransmit the full message history in each API call. Claude does not maintain state across requests if the application does not provide context again.

**B.** This adds infrastructure but does not directly solve the failure mode described in the question.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q78 · single choice

Your home renovation planning assistant uses a system prompt defining an expert contractor persona with specific guidelines: always ask about budget, suggest alternatives at multiple price points, and confirm timeline requirements. During testing, responses follow these guidelines for turns 1-4, but by turn 7, the assistant gives generic advice without asking about budget or timeline. The conversation totals only 2,500 tokens.

What is the most likely cause?

- **A.** The model's attention on system prompt instructions naturally weakens as turns accumulate.
- **B.** The system prompt is only sent with the first API request.
- ✅ **C.** The assistant's accumulated responses are diluting the system prompt's influence.
- **D.** System prompts only establish initial behavior and don't persist across all turns.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. The assistant's accumulated responses are diluting the system prompt's influence.

In this case the conversation is still short compared to the context window, so the error does not come from the token limit. The most likely problem is that the influence of system prompts is diluted as conversation history accumulates, causing the model to adhere less closely to the initial guidelines.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** In this case the conversation is still short compared to the context window, so the error does not come from the token limit. The most likely problem is that the influence of system prompts is diluted as conversation history accumulates, causing the model to adhere less closely to the initial guidelines.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q79 · single choice

Users report that during extended conversations, the AI loses track of specific topics, examples, and preferences they mentioned earlier in the session. Your current implementation uses a sliding window that keeps only the most recent 25 message pairs to stay within context limits.

What's the most effective approach to maintain awareness of earlier conversation content while managing context size?

- **A.** Implement vector similarity search over the full conversation history, retrieving relevant past messages for each user query.
- **B.** Increase the window size to 50 message pairs to retain more conversation history before truncation.
- **C.** Add a separate API call each turn to summarize messages being dropped, prepending this running summary to the conversation.
- ✅ **D.** Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim.

The best approach is to Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** The best approach is to Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

</details>


---

## Q80 · single choice

During QA testing, you notice that Claude follows your system prompt guidelines consistently in the first 10- 15 turns, but by turn 25-30, responses begin deviating—using informal tone when formality was specified, occasionally skipping required formatting, or providing information types the guidelines restrict. Conversation length is well within context limits (typically 30,000 tokens out of 200,000 available).

What's the most effective approach to maintain consistent behavior throughout extended conversations?

- **A.** Move behavioral guidelines from the system prompt into the first user message.
- ✅ **B.** Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests.
- **C.** Automatically start a new conversation after 20 turns, passing a summary of the prior context to maintain continuity.
- **D.** Implement post-response validation that regenerates each response until it conforms to the specified guidelines.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests.

The best approach is to Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** The best approach is to Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q81 · single choice

During a conversation about order tracking, your external system receives a webhook indicating the user's package has shipped. The user is actively chatting and will likely send a follow-up message soon. You want the assistant to naturally incorporate this status change in its next response.

What's the most effective approach?

- ✅ **A.** Add the current shipping status to the system prompt before the next API call.
- **B.** Append the status update as a prefix to the next user message before calling the API.
- **C.** Immediately send an API request with the update as a synthetic user message, generating an unsolicited assistant response.
- **D.** Configure the assistant to call a get_order_status tool at the start of every response.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Add the current shipping status to the system prompt before the next API call.

The best approach is to Add the current shipping status to the system prompt before the next API call. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Add the current shipping status to the system prompt before the next API call. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q82 · single choice

Users report that responses feel repetitive across turns—each message begins with phrases like "Certainly!" or "I'd be happy to help!" even deep into conversations. You want responses to feel more natural, without these repetitive openers.

What's the most effective approach?

- **A.** Implement post-processing to detect and strip common greeting phrases from response beginnings
- ✅ **B.** Append a partial assistant message with a direct response opening that the model will continue from
- **C.** Lower the temperature parameter to make response openings more deterministic and less variable
- **D.** Add system prompt instructions specifying phrases to avoid, such as "Never begin responses with 'Certainly' or similar affirmations"

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Append a partial assistant message with a direct response opening that the model will continue from

The best approach is to Append a partial assistant message with a direct response opening that the model will continue from. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The best approach is to Append a partial assistant message with a direct response opening that the model will continue from. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q83 · single choice

Users frequently send ambiguous requests like "book a venue for the party" without specifying date, guest count, or budget. Your evaluation shows the assistant asks an average of 4.2 clarifying questions before taking any action, causing 35% of users to abandon mid-conversation. However, when you reduce questions, users sometimes receive recommendations that don't match their preferences.

What's the most effective approach to improve this trade-off?

- **A.** Configure the assistant to consolidate all clarifying questions into a single compound question (e.g., "What date, guest count, and budget are you considering?") to reduce the total number of conversational turns.
- ✅ **B.** Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings.
- **C.** Implement a structured intake form that collects all required parameters (date, guest count, budget, venue type) upfront before the assistant begins providing any recommendations.
- **D.** Configure the assistant to proceed with reasonable defaults (medium-sized venue, next weekend, moderate budget) without explicitly stating these assumptions, allowing users to provide corrections if results don't match expectations.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings.

The best approach is to Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.

**B.** The best approach is to Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q84 · single choice

Your conversational AI tutor has a 2,800-token system prompt containing teaching methodology, persona guidelines, and detailed written instructions for adapting explanations to different proficiency levels. User testing reveals that in conversations exceeding 12 turns (approximately 4,000 tokens of conversation history), the assistant increasingly ignores the proficiency-adaptation guidelines, defaulting to intermediate-level explanations regardless of the learner's stated level.

What's the most effective approach to ensure consistent adherence to these guidelines throughout extended conversations?

- **A.** After each assistant response, make a separate API call to evaluate whether the difficulty level matched the learner's profile, regenerating responses that don't align.
- **B.** Inject a condensed reminder of the proficiency requirements into the conversation as a system message every 4-5 turns.
- ✅ **C.** Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth.
- **D.** Restructure the system prompt to place the proficiency-adaptation rules in a clearly-marked final section immediately before the conversation history begins.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth.

The best approach is to Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** The best approach is to Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q85 · single choice

The system routes documents with extraction confidence below 85% to human review. A quarterly audit reveals that 12% of high-confidence extractions (>85%) also contain errors—cases where the model finds plausible-but-incorrect values. Error sources vary: comparison tables showing competitor specs, appendices referencing different product variants, and ambiguous phrasing the model misinterprets. You need a sustainable strategy to catch these high-confidence errors and measure whether improvements reduce the error rate over time.

What approach is most effective?

- **A.** Lower the confidence threshold from 85% to 70%, routing a larger volume of extractions to human review.
- **B.** Add a verification pass that re-extracts from each high-confidence document, flagging cases where the two extraction attempts produce different results.
- ✅ **C.** Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection.
- **D.** Implement heuristic rules that flag documents containing comparison tables or appendices for review regardless of confidence score.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection.

The best approach is to Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** The best approach is to Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q86 · single choice

Your research assistant helps users analyze academic papers over extended conversations. User testing reveals a recurring issue: after conversations exceed 60K tokens, users ask follow-up questions requiring precise numerical details from papers discussed earlier—sample sizes, exact p-values, specific inclusion criteria. Your current approach summarizes paper discussions after 8 turns to stay within context limits. Users report that responses to these precision-dependent questions are often hedged or inaccurate.

What's the most effective architectural change?

- **A.** Use a separate Claude call with explicit instructions to generate higher-fidelity summaries that preserve all numerical details and statistical values.
- **B.** Keep source text from methodology and results sections in context permanently, while summarizing only the conversational discussion and interpretation portions.
- ✅ **C.** Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected.
- **D.** Implement retrieval that re-injects relevant paper sections when the user's question suggests they need specific numerical details.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected.

The best approach is to Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** The best approach is to Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q87 · single choice

A security audit requires updating your authentication library from v2 to v3. The migration guide documents breaking changes: authenticate() now returns a Promise instead of accepting a callback, the User type has restructured fields, and three deprecated methods were removed. Grep shows the library is imported in 45 files across several modules.

What's the most effective approach?

- **A.** Update the dependency version, run the test suite, and use Claude Code to fix each failure as it appears.
- **B.** Create a custom slash command encapsulating the migration transformations, then execute it against each file without prior codebase exploration.
- ✅ **C.** Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing.
- **D.** Paste the migration guide's breaking changes into your prompt and use direct execution to update all usages across the 45 files.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing.

The best approach is to Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** The best approach is to Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q88 · single choice

You've asked Claude Code to build a PDF report generation feature. The initial implementation queries the database correctly, but the output has formatting issues: table columns are too narrow causing content truncation, dates display without proper formatting, and page break handling is incorrect. You've noticed these issues interact— changing column widths affects how dates render, and page breaks depend on content height.

What's the most effective approach for iterating toward a working solution?

- **A.** Start fresh with a detailed prompt specifying all formatting requirements upfront.
- ✅ **B.** Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change.
- **C.** Provide all three issues in a single detailed message with exact specifications for each, allowing Claude to address them together in one update.
- **D.** Show Claude an example of a correctly formatted report and ask it to match that output, rather than listing the specific technical issues.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change.

The best approach is to Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

**B.** The best approach is to Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q89 · single choice

You're implementing a new payment processing module that must follow your project's established patterns for database transactions, error handling, and audit logging. You've identified three existing modules that exemplify these patterns: db_utils.py, error_handlers.py, and audit_logger.py. This is a one-off integration task—these patterns are well-documented in your team wiki and don't need additional project-level documentation.

What's the most effective approach?

- ✅ **A.** Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow.
- **B.** Describe the patterns from the three modules in natural language in your prompt, explaining the transaction handling approach, error format, and logging conventions Claude should follow.
- **C.** Add documentation of each pattern to your CLAUDE.md file, establishing them as project conventions that Claude will apply automatically.
- **D.** Ask Claude to explore your codebase to find and understand the transaction, error handling, and logging patterns before generating the new module.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow.

The best approach is to Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** The best approach is to Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q90 · single choice

Your monorepo contains shared coding standards in /docs/standards/security-rules.md (for services handling user data), testing-patterns.md (for all packages), and api-conventions.md (for API-facing services). Your 15 packages are organized by feature domain (/packages/auth/, /packages/billing/, /packages/notifications/, etc.) without naming conventions indicating which handle user data or expose APIs. Package maintainers are expected to configure their own local development settings, as they understand their package's domain requirements. Currently, all package CLAUDE.md files duplicate all three standards, applying irrelevant guidance.

What's the most effective approach?

- **A.** Create a shared-standards.nd that uses @imports to combine all three standards, then have each package's CLAUDE.md import that combined file.
- **B.** Create claude/rules/ files for each standard with YAML frontmatter paths listing every package directory where that standard should apply.
- ✅ **C.** Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge.
- **D.** Put all standards in the root CLAUDE.md with override instructions like "ignore security-rules.md when working in packages that don't handle user data."

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge.

The best approach is to Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** The best approach is to Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q91 · single choice

The system needs to extract candidate information (name, contact details, skills, work experience, education) from uploaded resumes. The extracted data must strictly conform to a predefined JSON schema, as missing required fields or incorrect data types will cause downstream validation failures.

What is the most reliable approach to ensure Claude's output consistently matches the schema?

- ✅ **A.** Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response.
- **B.** Make two separate API calls—first extracting information as text, then asking Claude to format that text as JSON.
- **C.** Include detailed JSON formatting instructions and a template example in the system prompt, asking Claude to output only valid JSON.
- **D.** Parse Claude's text response with regex patterns to extract JSON objects, using retry logic for malformed responses.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response.

The best approach is to Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** The best approach is to Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

</details>


---

## Q92 · single choice

Anthropic's tool use documentation states: "Write instructive error messages. Instead of generic errors like 'failed', include what went wrong and what Claude should try next." A billing dispute agent uses lookup_order, which catches all exceptions and returns a tool_result with is_error: true and the message "execution failed". Monitoring shows two failure modes: the agent retries the identical call until hitting the turn limit, or it immediately calls escalate_to_human without trying alternative tools.

Which change follows the documented recommendation and gives Claude the information it needs to select the correct recovery action for each error type?

- ✅ **A.** Return error-type-specific messages with is_error: true, e.g., "order not found-try get_customer to search by phone" for data errors and "Database timeout (transient)-retry should succeed" for infrastructure errors.
- **B.** Remove is_error: true and return the error details as normal tool content, so Claude reasons about the response as data rather than treating it as a flagged failure condition that biases retry behavior.
- **C.** Add an error classification step in the agentic loop that intercepts tool errors before Claude sees them, tags each as "retry" "try_alternative," or "escalate," and adds that recommendation to the tool result.
- **D.** Implement retry logic with exponential backoff inside each tool implementation so transient errors are resolved transparently within the tool before any failure result is surfaced to Claude in the agentic loop.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Return error-type-specific messages with is_error: true, e.g., "order not found-try get_customer to search by phone" for data errors and "Database timeout (transient)-retry should succeed" for infrastructure errors.

The best approach is to Return error-type-specific messages with is_error: true, e.g., "order not found-try get_customer to search by phone" for data errors and "Database timeout (transient)-retry should succeed" for infrastructure errors. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** The best approach is to Return error-type-specific messages with is_error: true, e.g., "order not found-try get_customer to search by phone" for data errors and "Database timeout (transient)-retry should succeed" for infrastructure errors. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**C.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**D.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

</details>


---

## Q93 · single choice

Production logs reveal inconsistent error handling: when tool_code fails, the agent sometimes retries 5 times (even if the tool_id doesn't exist), sometimes escalates immediately (premature for temporary network issues), and sometimes adds user-friendly explanation (inappropriate when the issue is a backend permission error). Investigation shows four MCP tool returns uniform error responses: {"status": "error", "content": "{"type": "Error", "message": "Operation failed."}"}.

The agent learns different types. What's the most effective improvement?

- **A.** Add a few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each.
- **B.** Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action.
- ✅ **C.** Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure.
- **D.** Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure.

The best approach is to Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** The best approach is to Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.

</details>


---

## Q94 · single choice

Your code review prompts include both implementation changes and the corresponding test file, but the LLM's review comments fail to point out untested code paths. Analysis reveals the model correctly flags functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functio lack coverage.

What's the most effective way to improve detection of branch-level coverage gaps without overcomplicating the pipeline?

- **A.** Restructure the prompt to interleave implementation and tests, presenting each function followed immediately by its test cases
- **B.** Implement a multi-pass pipeline where separate LLM calls first extract all conditional branches, then cross-reference each against test assertions in a second pass.
- **C.** Add explicit instructions directing the model to enumerate each conditional branch and exception path, then verify each has a corresponding test assertion.
- ✅ **D.** Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case.

The best approach is to Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** The best approach is to Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

</details>


---

## Q95 · single choice

Your pipeline uses a tool called extract_metadata with a JSON schema for paper details. You've also defined lookup_citations and verify_doi tools for enrichment. During testing, you notice that when users include requests like "extract the metadata and tell me how cited it is," Claude sometimes calls lookup_citations first, which fails because it needs the DOI that extract_metadata would provide.

What's the most effective way to ensure structured metadata extraction happens first?

- **A.** Set tool_choice to "any" so Claude must use a tool, combined with system prompt instructions prioritizing extract_metadata.
- **B.** Set tool_choice to {"type": "tool", "name": "extract_metadata"} for every API call in the pipeline, ensuring Claude always extracts metadata before any enrichment can occur.
- **C.** Set tool_choice to "auto" and reorder the tool definitions so extract_metadata appears first in the tools array, since Claude prioritizes earlier-listed tools.
- ✅ **D.** Set tool_choice to {"type": "tool", "name": "extract_metadata"} and process the enrichment requests in subsequent turns after receiving the extracted metadata.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Set tool_choice to {"type": "tool", "name": "extract_metadata"} and process the enrichment requests in subsequent turns after receiving the extracted metadata.

tool_choice=specific-tool deterministically forces extract_metadata on the first turn. Then you hand control back to 'auto' to let the model use citations/DOI enrichment with the metadata in context.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

**D.** tool_choice=specific-tool deterministically forces extract_metadata on the first turn. Then you hand control back to 'auto' to let the model use citations/DOI enrichment with the metadata in context.

</details>


---

## Q96 · single choice

Your pipeline reviews every PR using a single API call with a static prompt containing the diff and full text of each changed file — unchanged files are not included. Reviews are posted asynchronously and don't block PR creation. Developers report that reviews consistently miss bugs involving cross-file interactions — for example, a PR renames a function's parameters but the review doesn't flag callers in unchanged files that still use the old argument order. Evaluation shows cross-file bugs account for 35% of production incidents from reviewed PRs.

What is the most effective change to your review design?

- **A.** Run parallel review passes per changed file with direct dependents included in each pass, then aggregate and deduplicate findings using a final summarization call.
- **B.** Use static analysis to build a dependency graph of changed code, then expand the prompt to include all files within two dependency hops of any changed file.
- **C.** Add chain-of-thought instructions asking the model to list all external references in the diff, then reason step-by-step about how each change might affect callers in other files.
- ✅ **D.** Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings.

The failure is a missing-context problem: callers live in unchanged files the static prompt never includes, so chain-of-thought (B) cannot help the model reason about code it cannot see, and static heuristics (C, D) bloat context while still missing dynamic or multi-hop references. Anthropic's agent guidance favors agentic search — letting the model retrieve exactly the context it needs via file-read/search tools — and the asynchronous, nonblocking review pipeline tolerates the added latency, while a turn limit bounds cost.

**A.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** The failure is a missing-context problem: callers live in unchanged files the static prompt never includes, so chain-of-thought (B) cannot help the model reason about code it cannot see, and static heuristics (C, D) bloat context while still missing dynamic or multi-hop references. Anthropic's agent guidance favors agentic search — letting the model retrieve exactly the context it needs via file-read/search tools — and the asynchronous, nonblocking review pipeline tolerates the added latency, while a turn limit bounds cost.

</details>


---

## Q97 · single choice

Your search Flights tool calls an external airline API that occasionally returns a 503 Service Unavailable error.

What is the most effective way to handle this error in your tool implementation?

- **A.** Log the error internally and return an empty response, letting the model continue without the flight data.
- ✅ **B.** Automatically retry the request up to five times with exponential backoff before returning results to the agent.
- **C.** Return an empty flight list as if the search succeeded but found no matching flights.
- **D.** Return an error message in the tool result explaining the service is temporarily unavailable.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Automatically retry the request up to five times with exponential backoff before returning results to the agent.

The best approach is to Automatically retry the request up to five times with exponential backoff before returning results to the agent. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** The best approach is to Automatically retry the request up to five times with exponential backoff before returning results to the agent. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q98 · single choice

Your agent has a log_workout tool that accepts exercise_type (string), value (number), and measurement (string). Production monitoring shows the agent frequently passes mismatched combinations-using measurement: "reps" for cardio exercises like running, or measurement: "miles" for strength exercises like bench press. Your exercises naturally divide into two categories: cardio (measured in time or distance) and strength (measured in reps and sets). 23% of tool calls have invalid combinations.

What approach would most effectively reduce these errors?

- **A.** Add explicit examples to the tool description showing valid combinations (e.g., "For running: use minutes or miles. For push-ups: use reps") with constraints for each exercise category.
- **B.** Implement server-side validation returning descriptive errors for invalid combinations, allowing the agent to retry with corrections.
- ✅ **C.** Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters).
- **D.** Add enum constraints on measurement limiting values to "minutes", "miles", "reps", or "sets" to prevent arbitrary measurement strings.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters).

The best approach is to Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters). This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**C.** The best approach is to Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters). This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q99 · single choice

During initial testing, you notice that Claude doesn't seem to remember vocabulary words from earlier in the conversation. When a student asks "Can you quiz me on those words?", responds as if no words have been discussed.

What is the most likely explanation?

- **A.** You need to enable conversation persistence by passing a session ID parameter with each API call.
- **B.** Your system prompt needs explicit instructions telling Claude to remember information from earlier turns.
- **C.** The model's context window has filled up, causing earlier conversation content to be dropped.
- ✅ **D.** You're not including prior messages in each API request—the stateless API doesn't retain conversation history.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. You're not including prior messages in each API request—the stateless API doesn't retain conversation history.

The best approach is to You're not including prior messages in each API request—the stateless API doesn't retain conversation history. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The best approach is to You're not including prior messages in each API request—the stateless API doesn't retain conversation history. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q100 · single choice

A new user's first message is "Set up my focus music," This could mean configure preferences, create a playlist, or play music immediately. Your system supports all three actions.

What's the effective approach?

- **A.** Play popular focus tracks Immediately and let the user redirect if needed
- **B.** Start preference configuration by asking about genres, temps, and artists they prefer for focus.
- **C.** Create a new "Focus" playlist with curated tracks and notify the user it's ready.
- ✅ **D.** Ask one clarifying question about action type: play now or configure for later

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Ask one clarifying question about action type: play now or configure for later

The best approach is to Ask one clarifying question about action type: play now or configure for later. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The best approach is to Ask one clarifying question about action type: play now or configure for later. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q101 · single choice

Your conversational assistant frequently generates multiple clarifying questions when users make ambiguous requests. When a user asks "Can you help me with the report?", the assistant responds: "I'd be happy to help! Could you tell me: 1) Which report? 2) What kind of help—drafting, reviewing, or formatting? 3) What's your deadline?" User analytics show a 40% conversation abandonment rate after these multi-question responses.

What's the most effective way to reduce friction while appropriately handling ambiguity?

- **A.** Limit the assistant to one clarifying question per turn, using conversation history to accumulate answers over multiple exchanges rather than requesting everything upfront.
- **B.** Add a preprocessing step using a smaller model to classify request ambiguity on a 1-5 scale, routing high-ambiguity requests to a clarification dialog and low-ambiguity requests directly to the assistant.
- ✅ **C.** Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong.
- **D.** Create a lookup table of common request patterns with predefined default interpretations, having the assistant respond with those defaults without stating the assumptions made.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong.

The best approach is to Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** Changing model size may affect cost or quality, but it does not directly address the root cause in this scenario.

**C.** The best approach is to Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q102 · single choice

You need to add a date validation check ensuring event dates are in the future. This requires adding a conditional statement to one existing function in a single file.

What is the most appropriate approach?

- **A.** Enter plan mode to analyze how the validation might impact other parts of the reservation flow
- **B.** Start with extended thinking mode enabled to ensure thorough reasoning about the validation logic
- **C.** Enter plan mode first to create a detailed implementation strategy before making the change
- ✅ **D.** Use direct execution to make the change

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Use direct execution to make the change

The best approach is to Use direct execution to make the change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The best approach is to Use direct execution to make the change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q103 · single choice

Your team's CLAUDE.md includes a rule: "Use 4-space indentation and always run Prettier formatting." Despite this, code reviews reveal that roughly 30% of files Claude Code generates use inconsistent formatting — sometimes 2-space indentation, sometimes missing trailing commas. Adding emphasis ("IMPORTANT: You MUST use Prettier formatting") reduces violations to about 15%, but doesn't eliminate them.

What is the most effective way to ensure all generated code is consistently formatted?

- **A.** Extract the formatting rules into a dedicated skill that Claude loads automatically when generating code, with more detailed examples of correct formatting.
- **B.** Add a Stop hook with a prompt-based check that evaluates whether generated code follows formatting standards and prompts Claude to fix violations.
- **C.** Split the formatting rules into path-scoped .claude/rules/ files that load when Claude works on matching file types.
- ✅ **D.** Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies.

The best approach is to Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The best approach is to Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q104 · single choice

You're implementing a caching layer for API responses to speed up the /products endpoint. You have a rough idea—Redis with a 5-minute TTL—but you're new to production caching and aren't sure what other considerations a robust implementation requires.

What's the most effective way to start your iterative workflow?

- ✅ **A.** Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes.
- **B.** Write a specification with your known requirements and "TBD" markers for uncertain areas, having Claude propose solutions for each TBD as it implements.
- **C.** Use plan mode to analyze the current/products endpoint implementation, then provide your caching requirements once Claude explains how the existing code is structured.
- **D.** Start with a minimal request: "Add Redis caching to/products with 5-minute TTL." Add features and fix issues through follow-up prompts as problems surface during testing.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes.

The best approach is to Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q105 · single choice

You've asked Claude to write a data migration script, but the initial output doesn't correctly handle records with null values in required fields.

What's the most effective way to iterate toward a working solution?

- **A.** Manually edit the generated code to fix the null handling, then continue working with Claude on other parts.
- **B.** Add "think harder about edge cases" to your prompt and request a complete rewrite of the migration logic.
- **C.** Describe the null value problem in detail and ask Claude to regenerate the entire script with improved edge case handling.
- ✅ **D.** Provide a test case with example input containing null values and the expected output, then ask Claude to fix it.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Provide a test case with example input containing null values and the expected output, then ask Claude to fix it.

The best approach is to Provide a test case with example input containing null values and the expected output, then ask Claude to fix it. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The best approach is to Provide a test case with example input containing null values and the expected output, then ask Claude to fix it. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q106 · single choice

Production monitoring shows the research phase takes longer than expected. Analysis reveals the coordinator invokes the web search subagent, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other's output.

What is the most effective way to run these subagents concurrently?

- **A.** Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator.
- **B.** Add detailed instructions to the coordinator's system prompt explaining the performance benefits of parallel execution at the same time.
- **C.** Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time.
- ✅ **D.** Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message.

The best approach is to Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.

**A.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

**D.** The best approach is to Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.

</details>


---

## Q107 · single choice

Your automated review calls the Claude API for each PR, using tool_use with a report_findings tool that returns a JSON array of finding objects (each with file_path, line_number, severity, category, and description). During testing on a large PR touching 30+ files, the response hits the max_tokens limit and the output is truncated mid-JSON, causing your pipeline's parser to fail.

What is the most effective way to handle this?

- **A.** Increase max_tokens to the model's maximum and instruct Claude to keep finding descriptions under 50 words each.
- **B.** Switch from tool_use to prompting Claude to return findings as a markdown list.
- ✅ **C.** Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays.
- **D.** Add retry logic that detects truncated JSON and re-sends the request with instructions to report only critical and high severity findings.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays.

The best approach is to Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** The best approach is to Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q108 · single choice

An engineer sees an unfamiliar error message "SYNC_CONFLICT: entity version mismatch detected" in production logs but doesn't know which of the 12 services in the codebase generates it. They ask the agent to help locate the source code.

What exploration approach will most efficiently find the responsible code?

- **A.** Read the project's README and service configuration files to understand the architecture, then systematically Read source files in service directory.
- **B.** Use Glob to find files in directories commonly associated with error handling (such as errors/, exceptions/, or handlers/) across services, then Read each matching file.
- **C.** Use Grep to find all files that import the project's error handling module, then Read those files to locate custom error definitions.
- ✅ **D.** Use Grep to search for distinctive text from the error message (like "SYNC_CONFLICT" or "entity version mismatch"), then Read the matching files to understand context.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Use Grep to search for distinctive text from the error message (like "SYNC_CONFLICT" or "entity version mismatch"), then Read the matching files to understand context.

The best approach is to Use Grep to search for distinctive text from the error message (like "SYNC_CONFLICT" or "entity version mismatch"), then Read the matching files to understand context. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**D.** The best approach is to Use Grep to search for distinctive text from the error message (like "SYNC_CONFLICT" or "entity version mismatch"), then Read the matching files to understand context. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

</details>


---

## Q109 · single choice

An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn't specified which modules to prioritize.

How should the agent decompose this open-ended task?

- **A.** Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for every function before beginning.
- **B.** Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically.
- ✅ **C.** Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered.
- **D.** Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top-level directory regardless of code complexity or business importance.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered.

Anthropic's agent best practices favor efficient context gathering with search tools (Glob/Grep) over exhaustively reading every file, which would waste context and time. Prioritizing high-impact, heavily-coupled modules and iteratively revising the plan as dependencies surface is the correct way to decompose an open-ended task; A is wasteful, B ignores impact/complexity, and C is arbitrary and unplanned.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Anthropic's agent best practices favor efficient context gathering with search tools (Glob/Grep) over exhaustively reading every file, which would waste context and time. Prioritizing high-impact, heavily-coupled modules and iteratively revising the plan as dependencies surface is the correct way to decompose an open-ended task; A is wasteful, B ignores impact/complexity, and C is arbitrary and unplanned.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q110 · single choice

Your productivity agent connects to three MCP servers: an issue tracker (search_issues, get_issue, create_comment), a documentation wiki (search_docs, get_page, list_spaces), and a database explorer (run_query, get_schema, list_databases). When engineers ask cross-system questions like "What database tables are affected by the authentication refactor in PROJ-1234?", monitoring shows the agent makes 8-10 sequential tool calls, frequently issues exploratory calls because it lacks visibility into what content each server contains, and exhausts context space before completing complex investigations.

What architectural change best leverages MCP capabilities to address these issues?

- **A.** Add an orchestrator that routes questions to a single server based on keywords
- ✅ **B.** Expose each server's content catalog as MCP resources—issue summaries, documentation hierarchy, database schemas
- **C.** Add a prepare_investigation tool to each server that accepts a natural language question and returns relevant content summaries
- **D.** Consolidate all three servers into a unified MCP server with cross-referencing capabilities

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Expose each server's content catalog as MCP resources—issue summaries, documentation hierarchy, database schemas

MCP resources are the protocol primitive designed for exactly this problem: servers expose browsable, application-controlled context (issue summaries, doc hierarchies, database schemas) that the agent can discover and read without exploratory tool-call round trips, directly fixing the visibility gap and context exhaustion. A rebuilds a monolith against MCP's composable design, C just adds more tools without leveraging MCP capabilities, and D's single-server keyword routing breaks inherently cross-system questions.

**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**B.** MCP resources are the protocol primitive designed for exactly this problem: servers expose browsable, application-controlled context (issue summaries, doc hierarchies, database schemas) that the agent can discover and read without exploratory tool-call round trips, directly fixing the visibility gap and context exhaustion. A rebuilds a monolith against MCP's composable design, C just adds more tools without leveraging MCP capabilities, and D's single-server keyword routing breaks inherently cross-system questions.

**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**D.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.

</details>


---

## Q111 · single choice

The synthesis agent completes its initial pass but flags that three key research questions remain unanswered because the web search and document analysis agents didn't find relevant information on those specific subtopics. The coordinator currently proceeds directly to report generation, producing reports with incomplete coverage.

What change would most effectively improve research completeness?

- **A.** Increase the initial breadth of queries sent to web search and document analysis to reduce the probability of missing relevant information.
- **B.** Give the synthesis agent direct access to web search tools so it can autonomously fill knowledge gaps without returning control to the coordinator.
- ✅ **C.** Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again.
- **D.** Have the report generation agent note which research questions couldn't be answered, so users understand the limitations of the final output.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again.

The best approach is to Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.

**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

**C.** The best approach is to Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.

**D.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

</details>


---

## Q112 · single choice

Your documents (query) tool returns results as "Found 3 documents: Q2 Budget Proposal, Q2 Budget Forecast, Annual Review". You want the agent to document (4, multi) and doc (24, multi).

 What return format would best enable these multi-step workflows?

- ✅ **A.** Structured data containing document IDs and metadata for each result.
- **B.** URLs that users can click to open the document in their browser.
- **C.** More detailed human-readable descriptions including the size and authors.
- **D.** A JSON array of document titles extracted from the search results.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Structured data containing document IDs and metadata for each result.

The best approach is to Structured data containing document IDs and metadata for each result. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Structured data containing document IDs and metadata for each result. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

</details>


---

## Q113 · single choice

Your agent has access to 50+ specialized API connectors for different external services. As the connector library grew, tool selection accuracy dropped to 58%. You design a search_connectors(description) tool that finds matching connectors, but in testing agents frequently skip searching and call connectors directly (often incorrectly), or search select wrong connectors from the filtered results.

How should you design the tool composition pattern to address both issues?

- **A.** Design connectors with built-in compatibility validation that return descriptive errors for mismatched requests.
- **B.** Enhance all connector descriptions with detailed usage samples, edge cases, and input requirements. Add few-shot examples showing the correct search-then-use workflow.
- ✅ **C.** Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered.
- **D.** Design a find_and_execute(description, params) composite tool that searches and immediately executes the best matching connector.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered.

The best approach is to Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**A.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**C.** The best approach is to Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**D.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

</details>


---

## Q114 · single choice

Your publish article tool calls an external CMS API that occasionally returns transient errors (network timeouts, 503s) and non-transient errors (403 permission denied, 422 validation failure). Currently, every error is returned directly to the agent, which leads to the agent retrying non-transient errors and wasting turns on failures that will never succeed.

How should you partition error-handling responsibility between the tool implementation and the agent?

- **A.** Implement a universal error handler that catches all exceptions and returns a generic "tool unavailable- try again later" message, shielding the agent from error complexity.
- ✅ **B.** Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action.
- **C.** Handle all errors inside the tool: Implement retries with exponential backoff for every error type, and only surface a failure to the agent after a fixed number of retry attempts have been exhausted.
- **D.** Surface all errors to the agent immediately with detailed context, and let the agent decide which errors to retry and how many times-keeping the tool implementation stateless and simple.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action.

The best approach is to Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** The best approach is to Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**C.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.

**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.

</details>


---

## Q115 · single choice

Your scheduling agent uses get_available_slots(date, provider_id) to retrieve open appointment times, then book_appointment(provider_id, slot_time, patient_id) to reserve a slot. tickets show that 15% of booking attempts fall with "slot no longer available" because another user booked the slot between the availability check and the booking call.

How should you refactor these tools?

- **A.** Modify book_appointment to return detailed failure information including currently available alternative slots when the requested slot is unavailable, enabling the agent to retry with a different time.
- ✅ **B.** Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives.
- **C.** Add a hold_slot(provider_id, slot_time) tool that creates a 60 second temporary reservation, requiring the agent to call it between checking availability and booking.
- **D.** Keep both tools but add retry logic to the agent's system prompt, instructing it to call get_available_slots again and select a different time if booking fails.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives.

The best approach is to Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.

**B.** The best approach is to Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q116 · single choice

Production monitoring shows your search_catalog tool fails 12% of the time: 8% are network timeouts that succeed when immediately retried, while 4% are query syntax errors from malformed user-provided filters that never succeed regardless of retry attempts. Currently, both error types are returned to the agent identically, causing it to waste turns retrying syntax errors and telling users to "try again later" for timeouts.

How should you modify the tool's error handling?

- **A.** Add few-shot examples to your system prompt demonstrating how to distinguish network errors from syntax errors and handle each case appropriately.
- **B.** Return all errors with a retryable boolean flag and error type details.
- ✅ **C.** Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details.
- **D.** Apply exponential backoff retry logic to all errors uniformly, returning a generic "service temporarily unavailable" message after max retries are exhausted.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details.

The best approach is to Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**B.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.

**C.** The best approach is to Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.

</details>


---

## Q117 · single choice

Your document extraction tool uses ML models to extract invoice fields (vendor, amount, date). The models return confidence scores (0.0-1.0) for each extracted field. In production, you observe: (1) the agent proceeds with low-confidence extractions that are incorrect 23% of the time, and (2) the agent requests unnecessary human review for 31% of extractions that were actually correct.

How should you restructure the tool's output?

- **A.** Compute an aggregate extraction quality score across all fields and return it alongside the extracted values. Include a text summary describing the overall extraction reliability.
- ✅ **B.** Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review.
- **C.** Return fields organized into verified and needs_verification objects based on confidence thresholds.
- **D.** Return fields with their raw confidence scores and add detailed few-shot examples to your system prompt demonstrating how to interpret different confidence ranges and when to request human review.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review.

The best approach is to Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The best approach is to Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q118 · single choice

Your agent includes an update_game_score tool that accepts game_date (string), home_team (string), and away_team (string) parameters. Production logs reveal recurring issues: the agent uses team nicknames instead of official names, applies inconsistent date formats, and selects the wrong game when teams have rematches in the same season.

What tool interface change would effectively prevent these errors?

- **A.** Add a season parameter to disambiguate rematches, and add a confirm_before_update flag that returns the resolved game details for the agent to verify before the score is committed.
- ✅ **B.** Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs.
- **C.** Add enum constraints listing valid team names for both team parameters, and add a regex pattern enforcing ISO 8601 format for the date parameter.
- **D.** Add detailed examples to the tool description showing the required date format and complete list of official team names.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs.

The best approach is to Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** The best approach is to Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q119 · single choice

You've configured the system so that all four subagents have access to the complete set of 18 tools. During testing, agents frequently call tools outside their specialization—the synthesis agent attempts web searches, and the report generator tries to analyze documents.

What is the primary cause of this poor tool selection behavior?

- **A.** The agents' role descriptions in their system prompts conflict with having access to tools outside that role.
- **B.** The tool definitions consume too much context window space, leaving insufficient room for task content.
- **C.** The coordinator cannot track which capabilities each subagent has, leading to misrouted tasks.
- ✅ **D.** Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds.

The best approach is to Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**C.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**D.** The best approach is to Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

</details>


---

## Q120 · single choice

You've documented API error handling conventions in a CLAUDE.md file at your project root, specifying that endpoint handlers should use a custom ApiError class. After several sessions, you notice Claude Code sometimes follows these conventions and sometimes uses generic try/catch blocks with string messages. The inconsistency appears random across different coding sessions.

What's the most efficient first diagnostic step?

- **A.** Create path-specific rules in claude/rules/handlers.md with YAML frontmatter scoping the error handling instructions to your API handler files.
- **B.** Search for conflicting instructions in ~/.claude/CLAUDE.md or ~/.claude/rules/ that might override your project conventions.
- ✅ **C.** Run /memory to check which memory files are loaded and verify your CLAUDE.md is included.
- **D.** Add more detailed code examples to your CLAUDE.md showing the exact ApiError usage pattern for different endpoint types.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Run /memory to check which memory files are loaded and verify your CLAUDE.md is included.

The best approach is to Run /memory to check which memory files are loaded and verify your CLAUDE.md is included. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** The best approach is to Run /memory to check which memory files are loaded and verify your CLAUDE.md is included. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q121 · single choice

Your CI pipeline performs security-focused code reviews on approximately 50 PRs daily, currently costing $150/day using the synchronous API. Reviews are non-blocking—developers merge after tests pass and address findings in follow-up commits. You're evaluating the Message Batches API for its 50% cost reduction.

What factor most determines whether batch processing is appropriate for this use case?

- **A.** Whether your result processing can handle reviews arriving in a different order than submitted.
- ✅ **B.** Whether review feedback arriving up to 24 hours after PR creation remains actionable.
- **C.** Whether reducing per-review latency from 30-60 seconds to near-instant matters for your workflow.
- **D.** Whether you can structure each review as a single request without multi-turn refinement.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Whether review feedback arriving up to 24 hours after PR creation remains actionable.

The Message Batches API is asynchronous — most batches finish within 1 hour but can take up to 24 hours — so the decisive suitability factor is latency tolerance: whether review findings delivered up to 24 hours after PR creation are still actionable in a non-blocking, merge-then-fix workflow. Batching increases latency (B is backwards), results are correlated via custom_id so ordering is a non-issue (D), and single-request structuring (A) is secondary to the latency question.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The Message Batches API is asynchronous — most batches finish within 1 hour but can take up to 24 hours — so the decisive suitability factor is latency tolerance: whether review findings delivered up to 24 hours after PR creation are still actionable in a non-blocking, merge-then-fix workflow. Batching increases latency (B is backwards), results are correlated via custom_id so ordering is a non-issue (D), and single-request structuring (A) is secondary to the latency question.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q122 · single choice

After a 40-minute session helping plan a dinner party, the conversation has grown to 78,000 tokens. The history includes: (1) the user mentioning a guest has a severe shellfish allergy, (2) measurements for scaling recipes to 8 servings, (3) the user's clarification that "room temperature butter" means 68°F in their kitchen, and (4) general back-and-forth about meal timing and presentation. You need to implement context management before the window limit is reached.

What approach best balances information preservation with token reduction?

- **A.** Implement a sliding window retaining only the most recent 20,000 tokens relying on users to re-state important information when relevant.
- **B.** Summarize the entire conversation history into a concise summary capturing main topics discussed, then append new messages going forward.
- ✅ **C.** Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim.
- **D.** Store the full conversation externally and use semantic search to retrieve relevant portions for each turn, loading only matching segments into context.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim.

The best approach is to Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** The best approach is to Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**D.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.

</details>


---

## Q123 · single choice

Your resource allocation tool returns a simple acknowledgment message after provisioning is requested. Users frequently approve allocations and immediately ask "how much did that cost?" or "which project was that?" - indicating they confirmed without understanding the request.

What tool design change would most effectively address this?

- **A.** Implement a 60-second hold before execution completes, allowing users time to review pending allocations and cancel if needed
- ✅ **B.** Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response
- **C.** Add a user_acknowledged: boolean parameter that must be set true, with instructions for the agent to only set it after the user explicitly confirms they reviewed the details
- **D.** Add a detail_level parameter with options "minimal" or "comprehensive" that controls how much context the agent presents in confirmations

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response

The best approach is to Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response. This preserves the link between conclusions and supporting evidence, which is the key requirement in the scenario.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The best approach is to Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response. This preserves the link between conclusions and supporting evidence, which is the key requirement in the scenario.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q124 · single choice

Your search products tool queries an external catalog API that returns paginated results (50 items per request). Production logs show queries frequently match 200+ products, and the design that auto-fetches all pages causes 15-20 second delays.

How should you redesign the pagination handling?

- **A.** Implement server-side relevance ranking and return only the top 50 most relevant items.
- ✅ **B.** Return the first page with total match count and cursor for additional pages.
- **C.** Create separate search products and fetch more results tools for pagination.
- **D.** Add a max pages parameter (default: 2) that controls how many pages are fetched internally.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Return the first page with total match count and cursor for additional pages.

The best approach is to Return the first page with total match count and cursor for additional pages. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The best approach is to Return the first page with total match count and cursor for additional pages. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q125 · single choice

Your MCP server implements a check_availability tool that queries an external calendar API. During testing, you encounter three error conditions: (1) the tool is called with a malformed request, missing the required user_email parameter (2) the calendar API returns a 404 because the specified user doesn't exist in the calendar system (3) the calendar API returns a 503 because the service is temporarily unavailable.

How should each error be reported according to MCP's error handling design?

- ✅ **A.** Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true
- **B.** Report errors 1 and 2 as JSON-RPC protocol errors, report error 3 as a tool result with isError: true
- **C.** Report all three as JSON-RPC protocol errors.
- **D.** Report all three as tool results with isError: true

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true

The best approach is to Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** The best approach is to Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q126 · single choice

Your system has been running for 3 weeks and human reviewers have corrected 847 extractions. Analysis reveals a recurring pattern: when recipes use informal measurements like "a handful" or "a splash," the model either invents specific amounts or leaves fields empty—accounting for 23% of all corrections.

How should you use this feedback to improve extraction accuracy?

- **A.** Fine-tune the model on the 847 corrected extractions.
- **B.** Update your JSON schema to add a "measurement_type" enum field (precise/informal).
- ✅ **C.** Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them.
- **D.** Implement a post-processing layer that uses pattern matching to detect informal measurement phrases in source text and automatically populate values when the extraction is empty.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them.

The best approach is to Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**C.** The best approach is to Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q127 · single choice

"You're the Lead Data Scientist/Engineer on a critical project. Something is not completely right with technical details or the data, and it negative impacts expected outputs. They need to independently develop both approaches to evaluation data... 

How do you manage this scenario?"

- **A.** Start two fresh sessions, having each re-read the relevant source files before beginning.
- **B.** Export the analysis session's key findings to a file, then create two new sessions that reference this file.
- ✅ **C.** Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.
- **D.** Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.

The best approach is to Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** The best approach is to Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**D.** Handling both paths sequentially misses the point of keeping the branches separate and makes comparison or independent exploration harder.

</details>


---

## Q128 · single choice

Your automated reviewer uses a single prompt covering security issues, API design, and business logic correctness. Your evaluation suite shows strong recall findings (82%) but poor recall for business logic edge cases in quiz scoring (34%). When you add few-shot examples of logic bugs to the prompt, logic recall is 41% but API design recall drops to 68%. 

How should you address this trade-off to improve detection across both categories?

- **A.** Replace the few-shot examples with a detailed checklist of specific logic edge cases to verify, such as division-by-zero in score calculation or grading thresholds.
- **B.** Provide the full repository as context instead of just the changed files and surrounding code, giving the model deeper visibility into business logic.
- **C.** Upgrade to a more capable model tier, since its stronger reasoning will handle both concern types in a single prompt and eliminate the recall trade-off.
- ✅ **D.** Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting.

The best approach is to Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** The best approach is to Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q129 · single choice

Your code review assistant needs to analyze pull requests and provide feedback on three aspects: code style compliance, potential security issues, and documentation completeness. Each aspect requires reading files, running analysis tools, and generating a report section. The review process follows the same three-step workflow for every PR.

Which task decomposition pattern is most appropriate for this workflow?

- ✅ **A.** Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step.
- **B.** Orchestrator-workers—have a central LLM analyze each PR to dynamically determine which checks are needed, then delegate to specialized worker LLMs for each identified subtask.
- **C.** Routing—classify each PR by type (feature, bugfix, refactor) first, then route to different review prompts optimized for that category.
- **D.** Single comprehensive prompt—include all instructions in one prompt and let the model handle all three aspects simultaneously.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step.

The scenario explicitly states the review "follows the same three-step workflow for every PR," which per Anthropic's "Building Effective Agents" guidance is the textbook case for the prompt chaining workflow: a fixed, predictable sequence of subtasks each handled by a focused prompt, then synthesized. Orchestrator-workers (D) is only warranted when the needed subtasks vary unpredictably per input, and routing (B) applies when inputs fall into distinct categories needing different handling—neither fits a fixed, identical workflow.

**A.** The scenario explicitly states the review "follows the same three-step workflow for every PR," which per Anthropic's "Building Effective Agents" guidance is the textbook case for the prompt chaining workflow: a fixed, predictable sequence of subtasks each handled by a focused prompt, then synthesized. Orchestrator-workers (D) is only warranted when the needed subtasks vary unpredictably per input, and routing (B) applies when inputs fall into distinct categories needing different handling—neither fits a fixed, identical workflow.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q130 · single choice

After the web search and document analysis subagents complete their tasks, the coordinator needs to spawn the synthesis subagent to synthesize the findings.

What is the correct approach for providing the synthesis subagent with the information it needs?

- **A.** Pass reference identifiers and configure the subagent with read access to a shared memory store where other subagents deposited their results
- **B.** Spawn the subagent with only a brief task description, relying on automatic context inheritance from the coordinator
- **C.** Provide the subagent with tool definitions that allow it to request outputs from other subagents via callbacks
- ✅ **D.** Include the complete findings from both subagents directly in the synthesis subagent's prompt

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Include the complete findings from both subagents directly in the synthesis subagent's prompt

A spawned synthesis subagent needs the relevant research outputs supplied explicitly in its task context. Including the complete findings from the web-search and document-analysis subagents in its prompt gives it all of the evidence required to synthesize them; context from the coordinator is not implicitly inherited in full.

> **⚠️ Answer keys disagree**
> Another practice source marks A instead. This course uses D because the exam objectives list "Including complete findings from prior agents directly in the subagent's prompt" as a tested skill.

#### Alternative reasoning (supports A)

- Anthropic's multi-agent best practice is for subagents to deposit their full outputs as artifacts in external/shared storage and pass lightweight references, so the synthesis subagent reads the prior results directly rather than receiving lossy or token-heavy copies through prompts. Callbacks between subagents (A) and automatic context inheritance (D) don't exist in this architecture, and inlining complete findings into the prompt (B) bloats context and risks information loss.

- A. Anthropic's multi-agent best practice is for subagents to deposit their full outputs as artifacts in external/shared storage and pass lightweight references, so the synthesis subagent reads the prior results directly rather than receiving lossy or token-heavy copies through prompts. Callbacks between subagents (A) and automatic context inheritance (D) don't exist in this architecture, and inlining complete findings into the prompt (B) bloats context and risks information loss.

- B. It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.

- C. This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.

- D. Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q131 · single choice

Developer Productivity An engineer asks the agent to find all files in the monorepo that import the @company/auth package to understand how authentication is used across services.

Which built-in tool is most appropriate for this task?

- **A.** Glob, to find files with "auth" in their filename or path
- ✅ **B.** Grep, to search for the import statement pattern across file contents
- **C.** Bash, to execute find . -type d -name "*auth*" and explore matching directories
- **D.** Read, starting with package.json files to trace dependency declarations

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Grep, to search for the import statement pattern across file contents

The task is to find every file whose contents contain an import of @company/auth, which is a content- search problem — exactly what the built-in Grep tool (ripgrep-based) is designed for. Glob and find/Bash only match filenames or directory names, which would miss the many importing files that don't have "auth" in their path, and reading package.json files only shows declared dependencies, not actual usage sites.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The task is to find every file whose contents contain an import of @company/auth, which is a content- search problem — exactly what the built-in Grep tool (ripgrep-based) is designed for. Glob and find/Bash only match filenames or directory names, which would miss the many importing files that don't have "auth" in their path, and reading package.json files only shows declared dependencies, not actual usage sites.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

</details>


---

## Q132 · single choice

Your MCP server includes archive_file(file_id) and delete_file(file_id) tools. Production logs show the agent calls delete_file when users ask to "remove old backups," policy requires archiving backup files. Both tools currently have minimal descriptions: "Archives a file" and "Deletes a file." 

Which change most directly improves tool selection?

- **A.** Implement server-side validation that rejects delete_file calls for files tagged as backups, returning an error message suggesting archive_file.
- ✅ **B.** Expand tool descriptions to clarify use cases, adding guidance like "Do not use for backup files" to delete_file.
- **C.** Add few-shot examples to the system prompt demonstrating that requests involving "backup" or "old" should use archive_file.
- **D.** Add a confirmation step that requires users to type "CONFIRM DELETE" before delete_file executes.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Expand tool descriptions to clarify use cases, adding guidance like "Do not use for backup files" to delete_file.

The best approach is to Expand tool descriptions to clarify use cases, adding guidance like "Do not use for backup files" to delete_file. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**A.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**B.** The best approach is to Expand tool descriptions to clarify use cases, adding guidance like "Do not use for backup files" to delete_file. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**C.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**D.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

</details>


---

## Q133 · single choice

Your CRM agent's delete_contact tool handles requests like "delete the duplicate entry for Acme Corp." The database contains similarly named records (e.g., "Acme Corp," "Acme Corporation," "ACME Corp Inc."), and analytics show 8% of deletions are reversed within 24 hours due to misidentified records. Users have also complained that the current multi-step confirmation flow adds too much friction to routine cleanup tasks.

Which approach most effectively reduces the error rate while maintaining workflow efficiency?

- ✅ **A.** Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion.
- **B.** Implement soft-delete with a 30-day recovery window so users can undo mistakes without slowing down the deletion workflow.
- **C.** Require users to supply the exact record ID from the CRM Interface rather than using natural language references to contact names.
- **D.** Deploy automated duplicate detection that identifies and merges probable duplicates, removing the need for manual deletion requests.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion.

The best approach is to Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** The best approach is to Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.

</details>


---

## Q134 · single choice

Your team is extracting structured data from 50,000 legacy legal contracts under a two-week deadline. Initial testing with 500 sample documents shows 82% pass JSON schema first attempt, while the remaining 18% fall due to diverse issues—missing required fields, malformed dates, and incorrectly identified parties. Documents that fail typically need refinements targeting their specific failure modes before extraction succeeds.

Which batch processing strategy is the most cost-efficient while still meeting the deadline?

- **A.** Use the real-time API for all 50,000 documents since the batch API's 24-hour processing window creates unacceptable deadline risk.
- **B.** Process 2,000 sample documents via real time API to identify failure patterns and refine prompts, then batch process all 50,000 with the optimized prompts.
- **C.** Split documents into 10 sequential batches of 5,000 each, analysing results and refining prompts between batches to improve extraction quality progressively.
- ✅ **D.** Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation.

The best approach is to Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** The best approach is to Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

</details>


---

## Q135 · single choice

After deploying an updated system prompt that improves response quality, users with multi-session conversations spanning several weeks report that the assistant now contradicts its earlier statements and has a noticeably different communication style. New users don't experience these issues.

What's the best approach to resolve this?

- ✅ **A.** Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations.
- **B.** Regenerate summaries of existing conversations using the new prompt and replace the stored histories to align past context with current behavior.
- **C.** Add a transition message when sessions resume explaining that the assistant has been updated and behavior may differ.
- **D.** Add instructions to the new system prompt directing the assistant to maintain consistency with any prior statements in the conversation history.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations.

The best approach is to Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q136 · single choice

Evaluation shows 94% extraction accuracy on short meeting transcripts (60 minutes) where discussions meander and key information is scattered throughout. Transcripts of both lengths fit within the model's context window.

What pattern most effectively improves accuracy on complex, lengthy documents?

- **A.** Add a pre-extraction step where the model summarizes key discussions and conclusions before performing structured extraction.
- ✅ **B.** Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results.
- **C.** Upgrade to a more capable model tier for the extraction task
- **D.** Add few-shot examples demonstrating correct extraction from lengthy meetings with scattered Information.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results.

The best approach is to Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** The best approach is to Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q137 · single choice

You're implementing a complex graph traversal algorithm with specific performance requirements and edge cases to handle (disconnected nodes, cycles, weighted edges). You want to structure your workflow for efficient iterative refinement with Claude.

What approach will most effectively enable progressive improvement across multiple iterations?

- **A.** Provide Claude with a detailed natural language specification of the algorithm, including all requirements and edge cases. Review each output manually and provide descriptive feedback on what behavior needs to change.
- **B.** Have Claude extensively research the algorithm and create a detailed implementation plan using extended thinking, then implement the complete solution based on that plan.
- **C.** Provide Claude with a reference implementation from documentation, then ask it to rewrite the code to match your codebase style and add the required edge case handling, comparing outputs against the reference.
- ✅ **D.** Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request.

The best approach is to Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.

**D.** The best approach is to Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q138 · single choice

Your infrastructure-as-code repository includes Terraform modules (/terraform/), Kubernetes manifests (/kubernetes/), and CI/CD pipeline scripts (/pipelines/). Each requires different conventions, but your single root CLAUDE.md has grown to 500+ lines. When developers work on Kubernetes files, Terraform-specific rules load into context unnecessarily, consuming tokens. 

What is the best approach to reorganize so only relevant guidance loads when editing specific file types?

- ✅ **A.** Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: ["terraform/**/*"]), loading rules only when editing matching files.
- **B.** Split content into subdirectory CLAUDE.md files (/terraform/CLAUDE.md, /kubernetes/CLAUDE.md), so Claude loads directory-specific guidance.
- **C.** Restructure the root CLAUDE.md into clearly labeled sections with headers (e.g., "## Terraform Conventions"), improving organization and readability.
- **D.** Keep the root CLAUDE.md and use @path/to/import syntax to modularly include tool-specific guidance files from separate documents.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: ["terraform/**/*"]), loading rules only when editing matching files.

The best approach is to Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: ["terraform/**/*"]), loading rules only when editing matching files. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** The best approach is to Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: ["terraform/**/*"]), loading rules only when editing matching files. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q139 · single choice

After expanding the agent's MCP tools with delivery-specific capabilities (check_delivery_status, contact_driver, issue_credit, apply_promo_code, update_delivery_address, reschedule_delivery), the total tool count has grown from 4 to 10. Your evaluation suite shows tool selection accuracy has dropped to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools- calling issue_credit when process_refund is correct, and calling check_delivery_status when lookup_order already returns the needed data.

Which approach structurally eliminates the semantic overlaps that are being logged as the error source?

- ✅ **A.** Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag.
- **B.** Enable the tool search tool with defer_loading on the six new tools, keeping the original four always loaded, so the agent dynamically calls it when needed.
- **C.** Split the tools across two sub-agents - a "financial resolution" agent with process_refund, issue_credit, and apply_promo_code, and a "delivery" agent with the remaining delivery tools - with a coordinator routing between them.
- **D.** Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool pair, such as showing when issue_credit or process_refund is appropriate.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag.

The best approach is to Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**A.** The best approach is to Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**B.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**C.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q140 · single choice

After expanding the agent's MCP tools with delivery-specific capabilities [apply_promo_code, update_delivery_address, reconcile_delivery], the total tool count has grown from 1 to 7. We have observed that the agent now shows tool selection accuracy has dropped from 86% to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools — calling issue_credit when process_refund was correct, and calling check_delivery_status when looking order_allready_returns_the_needed_data.

Which approach structurally eliminates the semantic overlap identified in the error source?

- **A.** Split the tools across two sub-agents — a 'financial resolution' agent with issue_credit, process_refund, return_order, and apply_promo_code and a 'delivery operations' agent with the remaining delivery tools — with a coordinating routing between them.
- **B.** Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool, such as showing when issue_credit applies versus when process_refund is appropriate.
- **C.** Enable the tool search tool with defer_loading on the six new tools, keeping the original two always loaded, so the agent dynamically discovers specialized tools only when needed.
- ✅ **D.** Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag.

The best approach is to Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

**A.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**C.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.

**D.** The best approach is to Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.

</details>


---

## Q141 · single choice

Your order management system requires tools for three distinct operations: issuing refunds (requires amount and reason), canceling orders (requires reason), and res (requires shipping address). Each operation shares an order id parameter but has different additional requirements. You notice during testing that with your current frequently omits required parameters or includes irrelevant ones.

What design change will most effectively improve parameter accuracy?

- ✅ **A.** Split into three separate tools (each defining only the parameters required for that specific operation.
- **B.** Keep one unified tool with a nested operation object parameter whose internal structure varies by operation type, documented in the tool description.
- **C.** Keep one unified tool but add JSON Schema if-then-else conditionals to enforce that parameters like amount are required only when the operation type is "refund".
- **D.** Keep one unified tool with all parameters marked optional, but add few-shot examples in the system prompt showing correct parameter combinations for each operation.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Split into three separate tools (each defining only the parameters required for that specific operation.

The best approach is to Split into three separate tools (each defining only the parameters required for that specific operation. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Split into three separate tools (each defining only the parameters required for that specific operation. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

</details>


---

## Q142 · single choice

Your fitness coaching assistant uses a system prompt with detailed conditional logic: "If the user mentions being a beginner, provide step-by-step form instructions. If they use term 'progressive overload' or 'superset', respond concisely. If they ask about injury history, always recommend consulting a physician." During evaluation, you find the assistant correct explicit expertise declarations but struggles when users don't clearly state their level-often defaulting to overly detailed responses regardless of contextual cues like technical terms.

Which change to the system prompt would most directly address this failure to pick up on implicit expertise signals?

- **A.** Implement a pre-conversation intake that asks users to rate their experience level, then inject that rating into the system prompt as context for all subsequent responses.
- ✅ **B.** Replace most conditionals with a general principle: "Adapt explanation depth to match user expertise, mirroring their terminology." Keep only the safety-critical conditional abou consultations.
- **C.** Add an explicit instruction for the model to ask a clarifying question about experience level whenever the user's expertise isn't immediately clear from their first message.
- **D.** Add more conditional branches to cover additional expertise signals, such as "If user mentions specific rep ranges or asks about periodization, treat as advanced."

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Replace most conditionals with a general principle: "Adapt explanation depth to match user expertise, mirroring their terminology." Keep only the safety-critical conditional abou consultations.

The best approach is to Replace most conditionals with a general principle: "Adapt explanation depth to match user expertise, mirroring their terminology." Keep only the safety-critical conditional abou consultations. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** The best approach is to Replace most conditionals with a general principle: "Adapt explanation depth to match user expertise, mirroring their terminology." Keep only the safety-critical conditional abou consultations. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q143 · single choice

You're building a security scanning workflow. 

When engineers need to locate all occurrences of a dangerous function like eval() across a large codebase, which tool should your agent use for content search?

- **A.** Use Bash to run ls -R | grep eval to recursively list files containing eval.
- **B.** Read the project's main entry file and follow import statements to trace where eval might be used.
- ✅ **C.** Use Grep to search for the pattern "eval(" across all files in the codebase.
- **D.** Use Glob with a pattern like /*eval* to find files, then Read each matching file.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Use Grep to search for the pattern "eval(" across all files in the codebase.

Grep is the purpose-built content-search tool (ripgrep-based) for finding patterns inside file contents across a large codebase, which is exactly what locating all eval( call sites requires. Glob only matches file names, reading entry files and tracing imports doesn't scale or guarantee coverage, and ls -R | grep only matches file names, not file contents.

**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** Grep is the purpose-built content-search tool (ripgrep-based) for finding patterns inside file contents across a large codebase, which is exactly what locating all eval( call sites requires. Glob only matches file names, reading entry files and tracing imports doesn't scale or guarantee coverage, and ls -R | grep only matches file names, not file contents.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q144 · single choice

Your test generation produces unit tests for new code, but reviews show 55% are low-value: trivial assertions that only verify functions don't throw exceptions, tests duplicating existing coverage, or tests ignoring your team's fixture conventions.

How do you reduce the rate of low-value tests being generated in the first place?

- **A.** Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing.
- **B.** Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers.
- **C.** Add post-generation coverage analysis that automatically filters out any generated test that doesn't increase line coverage beyond what existing tests provide.
- ✅ **D.** Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.

The question explicitly asks how to reduce low-value tests "being generated in the first place," which means fixing the upstream cause: Claude lacks context about what the team considers a valuable test. Documenting testing standards, fixture usage, and good-vs-trivial examples in CLAUDE.md gives Claude that context at generation time, whereas A and D only filter bad output after the fact and B avoids the problem rather than solving it.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The question explicitly asks how to reduce low-value tests "being generated in the first place," which means fixing the upstream cause: Claude lacks context about what the team considers a valuable test. Documenting testing standards, fixture usage, and good-vs-trivial examples in CLAUDE.md gives Claude that context at generation time, whereas A and D only filter bad output after the fact and B avoids the problem rather than solving it.

</details>


---

## Q145 · single choice

Your expense reimbursement agent processes employee requests using a process reimbursement tool. Company policy requires that reimbursements above $500 must be approved before funds are disbursed. 

The agent handles hundreds of requests daily, and you need the threshold enforcement to be tamper-proof regardless of how the agent is prompted ensures the $500 approval threshold cannot be bypassed?

- **A.** Implement the threshold check in a PreToolUse hook that inspects the amount parameter before process reimbursement executes. If the amount exceeds $500, the hook modifies the context to add a requires approval: true flag, which the tool checks before disbursing.
- ✅ **B.** The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending.
- **C.** Provide two tools: auto reimburse (hard-coded limit of $500) and manager approval. Include detailed system prompt instructions telling the agent to check the amount and use the appropriate tool. Add a Post ToolUse hook that logs which tool was called for auditing.
- **D.** The process reimbursement tool accepts an approved by manager parameter. The system prompt instructs the agent to only set this to true after confirming that a manager approved the request. A nightly audit script reviews all reimbursements where approved by manager was set to true.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending.

The best approach is to The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The best approach is to The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

</details>


---

## Q146 · single choice

Your portfolio value tool returns the total value of a user's investment portfolio. You're deciding between returning a structured JSON object with explicit fields versus returning information as a formatted text string.

What is the primary advantage of using structured output with defined fields?

- **A.** JSON schemas automatically validate that the underlying API returned correct data before the agent processes it.
- **B.** Structured JSON consumes significantly fewer tokens than natural language, substantially reducing API costs.
- ✅ **C.** The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations.
- **D.** Structured JSON is processed deterministically by the model, significantly improving accuracy when extracting values.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations.

The best approach is to The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.

**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**C.** The best approach is to The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

</details>


---

## Q147 · single choice

Performance analysis reveals your context is composed of accumulated RAG results from all previous queries, which is crowding out conversation history and causing coherence degradation after 15+ turns.

Which approach best addresses this issue?

- **A.** Implement semantic deduplication to identify and remove redundant information across the accumulated RAG results and conversation turns
- **B.** Shift context budget to favor RAG results while reducing conversation history allocation
- **C.** Compress all RAG results into a consolidated summary document that updates incrementally after each retrieval
- ✅ **D.** Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history

The best approach is to Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**C.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.

**D.** The best approach is to Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

</details>


---

## Q148 · single choice

Your team frequently migrates React components to Vue. You've written a step-by-step workflow for Claude Code to follow during each migration, and you want every developer on the team to invoke it by typing /migrate-component. The workflow should stay in sync as the team iterates on it.

Where should you place the skill file?

- **A.** As a detailed instruction block in the project's root CLAUDE.md file
- **B.** In the project's .claude/settings.json using a skillOverrides entry to register and define the workflow
- **C.** In ~/.claude/skills/migrate-component/SKILL.md on each developer's machine
- ✅ **D.** In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control

The best approach is to In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** The best approach is to In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

</details>


---

## Q149 · single choice

The system processes product reviews using tool use with a defined schema: rating (integer 1-5), pros (string array), cons (string array), and overall_sentiment (enum: positive, negative, mixed). Testing reveals two issues with brief or ambiguous reviews (~20% of the dataset): (1) for reviews like "Great product!", Claude fabricates specific pros and cons rather than indicating this information isn't explicitly stated, and (2) for sarcastic reviews like "Well that was... interesting", Claude picks sentiment arbitrarily since there's no option for ambiguous cases.

What schema modification best addresses both issues?

- **A.** Add an extraction_confidence field (0.0-1.0) for each value, and filter outputs where any confidence falls below a threshold.
- **B.** Allow null values for pros/cons, and add "unclear" to the sentiment enum.
- ✅ **C.** Allow empty arrays for pros/cons as valid output, and add "unclear" to the sentiment enum.
- **D.** Make pros and cons optional fields, and add "neutral" and "unclear" to the sentiment enum.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Allow empty arrays for pros/cons as valid output, and add "unclear" to the sentiment enum.

The best approach is to Allow empty arrays for pros/cons as valid output, and add "unclear" to the sentiment enum. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

**C.** The best approach is to Allow empty arrays for pros/cons as valid output, and add "unclear" to the sentiment enum. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.

**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.

</details>


---

## Q150 · single choice

Production logs show that when the agent handles complex billing disputes requiring 6+ tool calls, it sometimes exhausts its max_turns limit after gathering data and before completing resolution or escalating. The team's goal is to guarantee that every customer interaction ends with either a completed resolution or a human escalation, regardless of how the agent loop terminates.

Which approach achieves this guarantee?

- ✅ **A.** Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results.
- **B.** Split the workflow into two sequential agent invocations — a first agent gathers information via get_customer and lookup_order, then the second agent uses that data and handles process_refund or escalate_to_human, each with separate turn budgets.
- **C.** Add system prompt instructions telling the agent to call escalate_to_human with a summary of its findings whenever it determines it cannot resolve the dispute.
- **D.** Implement a pre-tool-use hook that counts tool invocations and terminates the loop with an automatic escalation once the agent reaches 80% of its remaining actions.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results.

The best approach is to Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

</details>


---

## Q151 · single choice

A developer uses Claude Code to refactor a function during their development session. Before committing, they ask the same Claude session to review the code for issues. Later, a separate automated CI review catches several bugs that the same-session review missed.

What best explains this discrepancy?

- **A.** The CI review uses a more specific prompt tailored for catching bugs, while the developer's request was too general
- ✅ **B.** Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions
- **C.** The CI environment has access to the full codebase context while the local session only sees the current file
- **D.** The extended session length caused the context window to fill with conversation history, leaving less room for thorough analysis

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions

The best approach is to Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**B.** The best approach is to Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q152 · single choice

You've configured your Claude agent with three MCP servers: one for git operations, one for Jira ticket management, and one for documentation search.

When a user asks the agent to "create a branch for JIRA- 123 and add documentation links to the ticket," how does the agent access tools across these servers?

- ✅ **A.** Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent.
- **B.** The agent automatically selects the most relevant server based on the request and loads only that server's tools.
- **C.** You must specify which MCP server to use for each turn, and the agent can only access one server's tools at a time.
- **D.** The agent queries each server sequentially to determine which handles each tool, routing calls based on tool name prefixes.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent.

The best approach is to Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q153 · single choice

An engineer submits two requests: • Request A: "Rename the getUserData function to fetchUserProfile everywhere it's used." • Request B: "Improve error handling throughout the data processing module—add try/catch blocks, meaningful error messages, and ensure failures don't silently corrupt data."

For which request does specifying an explicit multi-phase workflow (such as analyze propose implement with review) most improve outcome quality?

- **A.** Neither request benefits significantly
- ✅ **B.** Request B, the error handling task
- **C.** Request A, the function rename task
- **D.** Both requests benefit equally

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Request B, the error handling task

Request B is open-ended and judgment-heavy — "improve error handling" requires analyzing current behavior, deciding where try/catch belongs, and choosing meaningful messages, so an explicit analyze propose implement-with-review workflow materially raises quality and catches bad design before code changes. Request A is a mechanical, well-defined rename that a simple find-and-replace-style execution handles fine, so the multi-phase structure adds little.

**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**B.** Request B is open-ended and judgment-heavy — "improve error handling" requires analyzing current behavior, deciding where try/catch belongs, and choosing meaningful messages, so an explicit analyze propose implement-with-review workflow materially raises quality and catches bad design before code changes. Request A is a mechanical, well-defined rename that a simple find-and-replace-style execution handles fine, so the multi-phase structure adds little.

**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.

</details>


---

## Q154 · single choice

During initial testing of the automated review pipeline, you notice that reviews on large PRs (50+ changed files) sometimes take over 20 minutes and cost $8-12 per run due to extensive agentic loops — Claude reads files, runs analysis tools, and iterates many times. Your team needs each invocation to abort once it reaches a fixed iteration count and a fixed dollar amount, enforced by Claude Code itself rather than the surrounding job runner.

Which configuration change directly enforces both of those per-invocation caps?

- **A.** Set timeout-minutes: 5 on the GitHub Actions job step and monitor per-run costs via the Anthropic Console usage dashboard.
- ✅ **B.** Add --max-turns 10 --max-budget-usd 2.00 to the claude -p invocation to cap iterations and spend.
- **C.** Switch the --model flag to a smaller, cheaper model so each iteration uses fewer tokens and lower per- call cost.
- **D.** Set --permission-mode dontAsk to auto-deny any tool permission requests not in the explicitly allowed set.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Add --max-turns 10 --max-budget-usd 2.00 to the claude -p invocation to cap iterations and spend.

The required controls are native per-invocation limits inside Claude Code itself: one that caps the number of agentic turns and one that caps dollar spend for that run. Using those built-in runtime limits is the direct way to stop oversized reviews without depending on external job settings or indirect cost reductions.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The required controls are native per-invocation limits inside Claude Code itself: one that caps the number of agentic turns and one that caps dollar spend for that run. Using those built-in runtime limits is the direct way to stop oversized reviews without depending on external job settings or indirect cost reductions.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.

</details>


---

## Q155 · single choice

Your update_user_profile tool accepts a user_id (required) and an optional fields_to_update object. In testing, Claude frequently omits user_id or passes incorrectly structured data.

What is most critical for helping Claude understand what parameter values to provide?

- ✅ **A.** Clear parameter descriptions explaining expected format, such as "user_id : UUID of the user to update (required)"
- **B.** Verbose parameter names encoding format hints, such as user_id_string_uuid_format
- **C.** Strict JSON Schema type constraints marking user_id as required and defining fields_to_update as an object type
- **D.** Detailed error responses explaining why invalid parameter values were rejected

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Clear parameter descriptions explaining expected format, such as "user_id : UUID of the user to update (required)"

The best approach is to Clear parameter descriptions explaining expected format, such as "user_id : UUID of the user to update (required)". This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to Clear parameter descriptions explaining expected format, such as "user_id : UUID of the user to update (required)". This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q156 · single choice

Your conversation history includes two types of content: persistent story elements (character backgrounds, plot structure, world rules) that must remain consistent throughout, and extensive brainstorming discussion that's mostly ephemeral. After 40+ turns, you're hitting context limits and users report the assistant "forgets" established character traits, breaking narrative consistency.

Which approach best ensures persistent story elements remain available to the model while reclaiming context space?

- **A.** Apply a sliding-window approach keeping only the most recent 25 turns, relying on the model to infer earlier context from recent discussion flow.
- **B.** Store all history in a vector database and retrieve semantically similar passages for each new message, replacing conversation history with retrieved chunks.
- ✅ **C.** Separate persistent story elements into a retained "story bible" section at context start, applying trimming or summarization only to brainstorming discussion.
- **D.** Summarize the entire conversation history into a condensed synopsis every 20 turns, replacing the full history to free up tokens.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Separate persistent story elements into a retained "story bible" section at context start, applying trimming or summarization only to brainstorming discussion.

The best approach is to Separate persistent story elements into a retained "story bible" section at context start, applying trimming or summarization only to brainstorming discussion. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** That adds infrastructure or indirection, but the question is really about choosing a simpler coordination pattern that fits the current workflow.

**C.** The best approach is to Separate persistent story elements into a retained "story bible" section at context start, applying trimming or summarization only to brainstorming discussion. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

</details>


---

## Q157 · single choice

Users frequently refine their search criteria mid-conversation. You notice a pattern: when users say things like "Actually, let's raise the budget to $650K" or "I'd prefer a condo now instead of a house," the assistant sometimes continues referencing the original preferences in later responses—even though the updates are clearly present in the conversation history. Context usage is only at 35% capacity.

Which solution most reliably ensures the model uses the current preferences?

- **A.** Implement conversation pruning to remove turns containing outdated preferences, ensuring only current ones remain in context.
- **B.** Add system prompt instructions emphasizing that the model should always prioritize the most recently stated preferences over earlier ones.
- **C.** Include few-shot examples showing the assistant correctly acknowledging and applying preference changes in responses.
- ✅ **D.** Maintain a structured state object with current preferences, update it on changes, and include it in each request.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Maintain a structured state object with current preferences, update it on changes, and include it in each request.

The best approach is to Maintain a structured state object with current preferences, update it on changes, and include it in each request. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.

**D.** The best approach is to Maintain a structured state object with current preferences, update it on changes, and include it in each request. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

</details>


---

## Q158 · single choice

After deploying automated code review, developers report that approximately 35% of flagged findings are false positives falling into consistent patterns: style suggestion contradicting team conventions, security warnings for patterns safe in your deployment context, and performance suggestions that would degrade your specific use case. You want to reduce false positives while maintaining the ability to catch genuine issues.

Which approach best enables the model to generalize its judgment to novel code patterns it hasn't seen before?

- **A.** Create a comprehensive written specification of all patterns that should not be flagged, then include this full documentation in the system prompt.
- **B.** Add instructions to your system prompt to "be conservative," "only flag definite issues," and "consider that some patterns may be intentional."
- **C.** Implement post-processing that uses keyword matching to filter out findings containing terms like "convention," "context-dependent," or "trade-off."
- ✅ **D.** Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category.

The best approach is to Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

**A.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**D.** The best approach is to Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.

</details>


---

## Q159 · single choice

You are setting up a non-interactive automated code review pipeline using Claude Code. You want Claude to analyze a pulled Git diff (git diff) against the main branch and apply a custom set of code review instructions. However, you notice that when you run the pipeline, Claude only looks at the raw diff text itself and completely stops using its file-reading or code navigation tools. As a result, it fails to inspect the broader codebase repository context, which is critical because the diff modifies a core function called by many other external modules.

Which change to the CLI invocation will cause Claude to read related files in the repository while still successfully applying your custom review instructions?

- **A.** Keep --system-prompt and add --allowedTools "Read, Glob, Grep" so that the non-interactive mode permits file system tools that it otherwise disables.
- **B.** Remove --system-prompt entirely and place the review instructions in a CLAUDE.md file at the repo root, since --system-prompt is incompatible with tool use under -p.
- **C.** Stop piping the diff via stdin and instead embed the diff contents inside the prompt string, so Claude Code treats the invocation as an agentic session rather than a stream-processing one.
- ✅ **D.** Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools.

The best approach is to Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.

**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.

**D.** The best approach is to Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.

</details>


---

## Q160 · single choice

Your development team is using Claude Code to automate test generation across a large codebase. However, developers are frequently rejecting the generated test suites because Claude creates a high volume of trivial assertions or tests that merely maximize line coverage without validating meaningful behavioral logic or edge cases. You want to guide Claude to generate high-quality, production-ready tests directly without introducing high latency or modifying the core pipeline script.

Which strategy best ensures that high-quality, meaningful tests are generated in the first place?

- **A.** Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing.
- ✅ **B.** Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.
- **C.** Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers.
- **D.** Add post-generation coverage analysis that automatically filters out any generated test that doesn't increase line coverage beyond what existing tests provide.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.

The best approach is to Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**B.** The best approach is to Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q161 · single choice

Your music discovery assistant should consistently maintain an enthusiastic tone, explain its reasoning for each recommendation, and ask clarifying questions to better understand user preferences. You want this behavior to persist reliably across all user interactions.

Where should you define these behavioral guidelines?

- ✅ **A.** In the system prompt
- **B.** Prepended to each user message before sending to the API
- **C.** In environmental variables that your application passes to the API client
- **D.** In the first assistant message, instructing Claude to follow these guidelines going forward

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. In the system prompt

The best approach is to In the system prompt. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** The best approach is to In the system prompt. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.

</details>


---

## Q162 · single choice

Your team is configuring MCP servers in Claude Code. You want to add a shared venue lookup server that all team members should have access to, and you personally want to add an experimental music playlist server that only you are testing.

Which configuration approach correctly applies MCP server scopes?

- **A.** Add both servers to your local ~/.claude.json
- ✅ **B.** Add venue server to .mcp.json and playlist server to ~/.claude.json
- **C.** Add both servers to the project-level .mcp.json file
- **D.** Add venue server to ~/.claude.json and playlist server to .mcp.json

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Add venue server to .mcp.json and playlist server to ~/.claude.json

The best approach is to Add venue server to .mcp.json and playlist server to ~/.claude.json. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**A.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**B.** The best approach is to Add venue server to .mcp.json and playlist server to ~/.claude.json. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.

**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.

</details>


---

## Q163 · single choice

While testing an agent, you notice that when a customer states, "I need a refund for my recent purchase," the agent immediately invokes process_refund — but supplies the required order_id parameter with a plausible-looking value that it made up, rather than first calling lookup_order to retrieve the actual order ID. As a result, the refund call fails because the invented order ID does not correspond to any real order. Which change would directly address the root cause of the agent inventing the order_id value?

- **A.** Switch tool_choice from “auto” to “any” to force the agent to make a tool call on every turn.
- ✅ **B.** Update the process_refund tool description to explicitly state that order_id must be obtained from a prior lookup_order call and must never be assumed or invented.
- **C.** Pre-parse incoming customer messages to extract any order IDs mentioned, and inject them into the conversation context before passing to Claude.
- **D.** Add server-side validation that checks whether the order_id exists in your database before executing the refund, returning an error to the agent if not found.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Update the process_refund tool description to explicitly state that order_id must be obtained from a prior lookup_order call and must never be assumed or invented.

According to Anthropic's official guidance on defining tools for Claude, tool descriptions are the primary mechanism by which the model learns what a tool does, when to use it, and how each parameter should be populated — including any dependencies on other tools. If the process_refund tool's description does not explicitly state that order_id must be retrieved via a prior lookup_order call and must never be assumed, guessed, or fabricated, the model has no basis to refrain from filling the required parameter with an invented value. Updating the description to state this explicit constraint directly targets the reasoning process that leads to fabrication, whereas forcing tool use on every turn, pre-extracting IDs from user text, or validating the ID server-side either fail to address why the model invents the value in the first place or only catch the problem after it has already occurred.

</details>


---

## Q164 · single choice

A customer reaches out about a warranty claim on a power drill. Resolving the request requires multiple sequential tool calls: get_customer to look up their account, lookup_order to find the purchase details, and then either process_refund or escalate_to_human depending on warranty eligibility. You are implementing the agentic loop that orchestrates these steps using the Claude API. What is the primary mechanism your application uses to determine whether to continue the loop or stop?

- **A.** You manually set the tool_choice parameter to “none” after the final expected tool call to force Claude to stop requesting tools.
- **B.** You check whether Claude's response contains a text content block – if text is present, the agent has produced its final answer and the loop should exit.
- **C.** You track the number of tool calls made and exit the loop once a preconfigured maximum is reached.
- ✅ **D.** You check the stop_reason field in each API response – the loop continues while it equals “tool_use” and exits when it changes to “end_turn” or another terminal value.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. You check the stop_reason field in each API response – the loop continues while it equals “tool_use” and exits when it changes to “end_turn” or another terminal value.

In the Claude API's tool-use (agentic loop) pattern, each API response includes a stop_reason field indicating why the model stopped generating. When Claude wants to invoke a tool, the response has stop_reason: "tool_use". The orchestrating application should check this field after every API call: as long as stop_reason is "tool_use", it executes the requested tool(s), sends the tool results back as a new user message, and calls the API again. Once stop_reason changes to "end_turn" (or another terminal value such as "max_tokens" or "stop_sequence"), Claude has finished its turn and the loop exits. Checking for the presence of a text block is unreliable because Claude can emit text alongside a tool_use block in the same response (e.g., explaining its next action) without that meaning it's done. Setting tool_choice to "none" is a way to prevent tool calls on a specific request, not a dynamic stopping signal, and tracking a maximum call count is merely a safety cap, not the primary control mechanism.

</details>


---

## Q165 · single choice

Your team has connected a custom MCP server that provides DevOps workflow templates. This server exposes several MCP prompts (such as deploy_checklist and incident_response) in addition to tools. How do these MCP prompts become accessible within Claude Code?

- **A.** They are surfaced as @ -mentionable resources alongside files, fetched and attached to your message when referenced.
- **B.** They are automatically prepended to every conversation as additional system-level context, influencing Claude’s behavior throughout the session.
- **C.** They are added to Claude Code’s tool registry alongside the server’s tools, invoked automatically by the model when relevant to the task.
- ✅ **D.** They appear as slash commands (e.g., mcp_servername_deploy_checklist) that you can invoke, with arguments passed after the command name.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. They appear as slash commands (e.g., mcp_servername_deploy_checklist) that you can invoke, with arguments passed after the command name.

MCP servers can expose prompts as one of the three MCP primitive types (tools, resources, and prompts). In Claude Code, MCP prompts are surfaced as slash commands using the naming convention /mcp__servername__promptname — for example, /mcp__devops__deploy_checklist — and any parameters the prompt defines are supplied as arguments typed after the command name, much like arguments passed to custom slash commands. This is distinct from MCP resources, which are instead surfaced as @-mentionable items that get fetched and attached to a message, and distinct from MCP tools, which populate the tool registry and are invoked automatically by the model during a task. Because prompts are reusable, explicitly user-triggered templates (not autonomous tool calls or injected system context), Claude Code exposes them through the slash-command interface rather than auto-invoking or auto-injecting them.

</details>


---

## Q166 · single choice

Your team has three requirements for how Claude Code should behave in your project: Claude must never modify files in the db/migrations/ directory. Claude should prefer your custom logging module over console.log. All TypeScript files must be auto-formatted with Prettier after every edit. All three requirements are currently written as instructions inside your project's CLAUDE.md file. During a complex refactoring session, a developer discovers that Claude edited a migration file, violating requirement #1. How should you restructure these requirements across Claude Code's configuration mechanisms?

- ✅ **A.** Add Edit(./db/migrations/**) to permissions.deny in the project settings, keep the logging preference in CLAUDE.md, and add a PostToolUse hook on the Edit tool that runs Prettier on changed TypeScript files.
- **B.** Move all three requirements into .claude/rules/ as path-scoped rules: one targeting db/migrations/** that forbids editing those files, and others targeting **/*.ts for the logging convention and formatting instruction.
- **C.** Rewrite all three requirements in CLAUDE.md using stronger directive language and add few-shot examples that demonstrate Claude refusing to edit migration files and running Prettier after edits.
- **D.** Configure hooks for all three: a PreToolUse hook script that blocks Edit calls targeting db/migrations/,a PreToolUse hook script that adds logging convention context before edits, and a PostToolUse hook that runs Prettier after TypeScript edits.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Add Edit(./db/migrations/**) to permissions.deny in the project settings, keep the logging preference in CLAUDE.md, and add a PostToolUse hook on the Edit tool that runs Prettier on changed TypeScript files.


CLAUDE.md content is loaded into the model's context as advisory guidance, so the model can still deviate from it—especially during long, complex sessions—which is exactly why the migration file was edited despite the instruction. Claude Code's official documentation distinguishes deterministic enforcement layers from contextual guidance: permission rules (permissions.deny in settings.json) are evaluated by the Claude Code harness itself and block a matching tool call (e.g., Edit(./db/migrations/**)) before it can run, giving a guaranteed hard boundary, whereas CLAUDE.md is explicitly documented as 'not a hard security boundary.' The hooks documentation further states that for static path-based blocking you should 'use the permission system rather than a hook to enforce a hard allow or deny,' since hooks are best-effort while permission rules are deterministic and enforced with no LLM judgment involved. Meanwhile, the logging-module preference is a stylistic convention well-suited to CLAUDE.md, where the model can apply judgment. The Prettier formatting requirement is a repeatable, deterministic post-edit action, which is the standard use case for a PostToolUse hook (matching the Edit/Write tools) that invokes Prettier on the changed file—Claude Code's hooks guide gives this exact pattern as a canonical example. This mapping—hard restriction to permissions.deny, soft preference to CLAAUDE.md, deterministic automation to a PostToolUse hook—correctly addresses the demonstrated compliance failure by moving the safety-critical rule to an enforcement mechanism that cannot be bypassed by the model's behavior.

</details>


---

## Q167 · single choice

Your team wants Claude to follow a detailed code review checklist (8 items covering API changes, test coverage, documentation, security, etc.) whenever it reviews pull requests. The team also relies on Claude extensively for other tasks, including: Writing new features Debugging production issues Generating documentation Currently, developers manually paste the checklist at the start of each review session. Which approach best addresses this workflow need?

- ✅ **A.** Create a /review slash command containing the checklist, invoked when starting reviews.
- **B.** Create a dedicated review subagent with the checklist embedded in its configuration.
- **C.** Configure plan mode as the default for code review sessions.
- **D.** Add the checklist to the project’s CLAUDE.md file under a “Code Review” section.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: A. Create a /review slash command containing the checklist, invoked when starting reviews.

Custom slash commands in Claude Code are reusable prompt templates stored as markdown files (e.g., under .claude/commands/) that are invoked on demand by typing a command like /review. This lets the team encode the full 8-item checklist once and pull it into context only when a review session is explicitly started, replacing the manual copy-paste step. In contrast, content placed in CLAUDE.md is loaded automatically into every session's context regardless of task type, so putting a review-specific checklist there would unnecessarily inject it into unrelated work such as feature development, debugging, or documentation generation. A dedicated subagent or a default plan-mode setting doesn't match the simple need of triggering a specific static checklist only for review sessions, making the slash command the most targeted and efficient solution.

</details>


---

## Q168 · single choice

Your send_notification tool invokes third-party messaging APIs. If these services time out during delivery, you cannot tell whether the message was actually sent. At present, the tool returns is_error: true with a generic “Notification failed” message for every timeout. Production monitoring shows that agents automatically retry these failures, often causing users to receive duplicate notifications. How should you change the error response?

- **A.** Return is_error: true with a structured field retry_safe: true for timeouts, distinguishing them from permanent failures that should not be retried.
- ✅ **B.** Return is_error: true with a message communicating uncertainty: “Timeout – status unknown. Message may have been sent. Avoid retry.”
- **C.** Return is_error: true with a message encouraging retry: “Delivery service temporarily unavailable. Please retry the notification.”
- **D.** Return is_error: true with the original message content echoed back.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Return is_error: true with a message communicating uncertainty: “Timeout – status unknown. Message may have been sent. Avoid retry.”

A timeout after a delivery request creates an unknown-result condition rather than a confirmed delivery failure. Because the notification may already have been sent, an automatic retry can produce a duplicate; the error should clearly state that status is unknown and advise against retrying.

</details>


---

## Q169 · single choice

Your control_device tool controls smart-home devices through external APIs. If a device fails to respond within the timeout period, the tool returns an error. Production logs indicate that the agent only tells users, “the device is not responding,” without providing useful next steps. Which error-response structure would best allow the agent to provide helpful follow-up?

- **A.** Set is_error: true with a structured technical error containing the device ID, timeout duration, and raw API response code for debugging purposes.
- **B.** Set is_error: true with a brief “Device offline” message and provide a separate tool the agent can call to retrieve context-specific troubleshooting suggestions.
- **C.** Set is_error: false with an optimistic message indicating the command was dispatched successfully but device acknowledgment is still pending.
- ✅ **D.** Set is_error: true with a message explaining the likely cause and suggesting troubleshooting steps the agent can offer the user.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Set is_error: true with a message explaining the likely cause and suggesting troubleshooting steps the agent can offer the user.

An error response should accurately signal the timeout while providing actionable, user-relevant context. Including a likely cause and suggested troubleshooting steps gives the agent information it can immediately turn into useful follow-up guidance.

</details>


---

## Q170 · single choice

Your content-curation agent finds articles, evaluates each one for relevance, and then adds chosen articles to themed collections. Using separate discover_articles(topic), analyze_article(id), and add_to_collection(article_id, collection_id) tools, you observe 18+ sequential tool calls per request, creating latency problems. The agent must make editorial decisions about which articles match a collection’s theme—this requires viewing all candidates and their analysis scores at the same time to choose a cohesive set. Which tool composition best improves efficiency while retaining editorial judgment?

- **A.** Keep all tools separate but implement response caching for analyze_article calls.
- **B.** Create a curate_collection(topic, collection_id) tool that handles discovery, analysis, and selection internally using configurable quality thresholds.
- ✅ **C.** Create a discover_and_analyze(topic) composite tool that returns all candidates with their analysis scores, keeping add_to_collection separate for selective calls.
- **D.** Add a preview_curation(topic, collection_id) tool that shows what would be added based on predefined rules, with an approve_curation() tool to confirm.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Create a discover_and_analyze(topic) composite tool that returns all candidates with their analysis scores, keeping add_to_collection separate for selective calls.

A composite discovery-and-analysis operation can gather and score all candidate articles in one workflow, reducing tool-call overhead while giving the agent the complete comparison set needed to make a cohesive editorial selection. Keeping the add operation separate preserves the agent’s ability to choose exactly which scored candidates are added rather than delegating selection to fixed thresholds or predefined rules.

</details>


---

## Q171 · single choice

Your post_content tool needs user confirmation before publishing. The current workflow shows “Ready to post to social media. Confirm?”, and analytics indicate that users approve 98% of requests within 2 seconds. Post-mortems identify incidents in which posts were sent to incorrect accounts, scheduled for incorrect times, or contained errors—all approved by users who did not notice the mistakes. How should the confirmation workflow be redesigned?

- **A.** Auto-approve routine posts and only require explicit confirmation for unusual patterns like posting to new accounts or large audiences
- **B.** Require users to type a confirmation phrase instead of clicking a button
- **C.** Add a mandatory waiting period before the confirm option becomes available
- ✅ **D.** Include the complete post text, target account, scheduled time, and platform in the confirmation request

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Include the complete post text, target account, scheduled time, and platform in the confirmation request

A meaningful confirmation must present the action’s material parameters so the user can verify them before approving: the full post content, target account, scheduled time, and platform. This makes confirmation an informed review of the irreversible or consequential action rather than a reflexive acknowledgment.

</details>


---

## Q172 · single choice

After 30+ turns, your conversational assistant has noticeably slower responses and sometimes produces less coherent outputs. Investigation shows: Average conversations reach 50,000 tokens by turn 35. Production logs show that 94% of user messages reference only the preceding 3–5 exchanges. The 6% of queries that reference earlier context generally ask about information the user could easily re-state. Your goal is to improve response speed and quality while preserving a good user experience. What is the most effective approach?

- **A.** Enable prompt caching and continue sending the complete conversation history, using cached prefixes to reduce per-request costs while preserving all context.
- **B.** Build a retrieval system that stores all conversation turns and uses semantic search to pull in relevant historical context only when the current query appears to reference past information.
- **C.** Implement a summarization layer that progressively compresses older conversation turns into a running summary while keeping the most recent 5-6 turns verbatim, maintaining full historical context in condensed form.
- ✅ **D.** Implement a sliding window keeping only the system prompt and last 8-10 turns. When users reference earlier context, acknowledge the limitation and ask them to re-state the relevant information.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Implement a sliding window keeping only the system prompt and last 8-10 turns. When users reference earlier context, acknowledge the limitation and ask them to re-state the relevant information.

A sliding context window keeps the prompt focused on the recent exchanges that nearly all requests actually need, substantially reducing inference latency and limiting irrelevant historical context that can dilute coherence. Since the uncommon earlier-context requests involve details users can easily repeat, asking for that information only when needed is a better speed-and-quality tradeoff than continuously retaining, summarizing, or retrieving the entire conversation history.

</details>


---

## Q173 · single choice

Your product-search tool queries an external catalog API and returns matching items. In production, the agent often retries searches immediately after receiving zero results, treating “no matches found” as a failure that requires a retry. The external API returns HTTP 200 with an empty results array—a valid response. How should you reorganize the tool’s result so the agent correctly interprets empty result sets?

- **A.** Add a suggestions field containing alternative search strategies when results are empty, helping guide the agent toward more productive follow-up queries.
- **B.** Return a natural language string describing the outcome, allowing the agent to interpret the result contextually based on the message content.
- **C.** Return a result object with isError: true and a message explaining no products matched.
- ✅ **D.** Return a structured result with a success boolean and results array, reserving isError: true for actual execution failures only.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: D. Return a structured result with a success boolean and results array, reserving isError: true for actual execution failures only.

A successful catalog request can validly return no matching products. A structured response containing a success boolean and a results array explicitly represents that outcome as successful with empty data, whereas isError: true should indicate only actual tool-execution failures.

</details>


---

## Q174 · single choice

An agent uses three tools: get_property_details(property_id), which returns data including a street address; get_price_history(property_id), which returns historical pricing; and get_neighborhood_info(address), which returns area statistics. You observe that get_neighborhood_info always requires get_property_details to run first solely to extract the address, even when users identify the property by ID. This introduces unnecessary latency and failure coupling—if the first call fails, the neighborhood request fails as well. What tool-design change best resolves this?

- **A.** Create a lookup_address(property_id) helper tool for retrieving addresses.
- **B.** Add retry logic and timeout handling to get_property_details.
- ✅ **C.** Change get_neighborhood_info to accept property_id, resolving the address internally.
- **D.** Consolidate into a single get_property_with_neighborhood(property_id) tool returning both datasets.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: C. Change get_neighborhood_info to accept property_id, resolving the address internally.

get_neighborhood_info should accept property_id and perform any necessary address resolution internally. This lets callers use the identifier they already have, eliminates an unnecessary externally orchestrated tool dependency, and prevents failure of the address-details call from blocking the neighborhood lookup.

</details>


---

## Q175 · single choice

The track_shipment(tracking_id) tool calls an external logistics API that can occasionally fail—the API may be temporarily unavailable, the tracking ID may be malformed, or the shipment may not exist. The tool currently raises a Python exception when an error occurs. Users report that the agent gives unhelpful replies such as “I’m having trouble with that request,” rather than suggesting alternatives like checking the tracking-number format or looking up the shipment by order number. How should errors in tool results be handled?

- **A.** Return a generic error response (e.g., {"success": false, "error": "lookup_failed"}) for all failure cases to maintain a consistent schema and avoid exposing internal error details.
- ✅ **B.** Return structured error information as normal tool output including error type, recoverability status, and actionable context for the user.
- **C.** Create dedicated error-recovery tools (retry_tracking_lookup, search_by_order_number) that the model can invoke after the primary tracking tool returns a failure indicator.
- **D.** Implement retry logic with exponential backoff inside the tool implementation so transient errors are automatically handled and only return a result after all retry attempts are exhausted.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

Correct answer: B. Return structured error information as normal tool output including error type, recoverability status, and actionable context for the user.

Structured error output lets the agent distinguish transient service failures from invalid tracking IDs and missing shipments, determine whether recovery is possible, and give the user an appropriate next step. Including an error category, recoverability indicator, and actionable context preserves useful information without relying on exceptions as the agent-facing interface.

</details>
