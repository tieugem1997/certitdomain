window.__PC_DECK_LAST__ = [
 {
  "no": 1,
  "id": "ccar-f-q001",
  "type": "single",
  "select": 1,
  "question": "A developer asks the agent to investigate why a specific API endpoint intermittently returns 500 responses. The codebase has 200+ files and the developer doesn't know which components are involved. The agent must trace the error through routing, middleware, business logic, and database layers.\n\nWhat task decomposition approach would be most effective?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Have the agent dynamically generate investigation subtasks based on what it discovers at each step, adapting its exploration plan as new information about the error path emerges."
   },
   {
    "key": "B",
    "text": "Define a fixed sequence of investigation steps upfront—grep for error handlers, then examine middleware, then check database queries, then examine middleware-woven code."
   },
   {
    "key": "C",
    "text": "Run parallel worker agents on the file system of four layers, then combine their findings to reconstruct the complete error path."
   },
   {
    "key": "D",
    "text": "Have the agent first create a comprehensive plan mapping all code paths through documented components before beginning any exploration or code reading."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Have the agent dynamically generate investigation subtasks based on what it discovers at each step, adapting its exploration plan as new information about the error path emerges.\n\nDebugging is adaptive by nature — each file you read changes the most useful next step. Let the agent follow the evidence.\n\n**A.** Debugging is adaptive by nature — each file you read changes the most useful next step. Let the agent follow the evidence.\n\n**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**C.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 2,
  "id": "ccar-f-q002",
  "type": "single",
  "select": 1,
  "question": "Your agent needs to insert a new helper function into the middle of a 150-line utility module, between two existing functions. The Edit tool fails because its old_string parameter cannot find unique text to match – the file has repetitive docstrings, variable names, and structural patterns.\n\nWhat's the most reliable way to complete this insertion?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use Bash to append the function definition to the end of the file using heredoc syntax"
   },
   {
    "key": "B",
    "text": "Use Edit's replace_all parameter to target a common pattern and embed the new function in the replacement text"
   },
   {
    "key": "C",
    "text": "Use Edit with an extremely long old_string capturing 30+ lines of context to guarantee uniqueness"
   },
   {
    "key": "D",
    "text": "Use Read to load the file, add the function at the appropriate location, then Write the updated file"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Use Read to load the file, add the function at the appropriate location, then Write the updated file\n\nWhen old_string cannot find unique text because the file has many repeating patterns, the most reliable way is to read the entire file (Read), edit\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** When old_string cannot find unique text because the file has many repeating patterns, the most reliable way is to read the entire file (Read), edit",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 3,
  "id": "ccar-f-q003",
  "type": "single",
  "select": 1,
  "question": "An engineer used Claude Code yesterday to investigate authentication flows in a legacy monolith, building up significant context over a 2-hour session. Today she wants to continue that specific investigation. She's worked on three other codebases since then and knows the session was named \"auth-deep-dive\".\n\nHow should she resume?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Start fresh and re-read the same files"
   },
   {
    "key": "B",
    "text": "Use --session-id with the UUID from yesterday's session transcript file"
   },
   {
    "key": "C",
    "text": "Use --continue to pick up where the most recent conversation left off"
   },
   {
    "key": "D",
    "text": "Use --resume auth-deep-dive to load that specific session by name"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Use --resume auth-deep-dive to load that specific session by name\n\n--resume allows resuming a specific session by name. --continue only continues the most recent session (not the session 2 days ago), and --session-id needs a specific UUID, not a name.\n\n**A.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.\n\n**B.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** --resume allows resuming a specific session by name. --continue only continues the most recent session (not the session 2 days ago), and --session-id needs a specific UUID, not a name.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 4,
  "id": "ccar-f-q004",
  "type": "single",
  "select": 1,
  "question": "An engineer's exploration subagent spent 30 minutes analyzing a legacy payment system, reading 47 files and documenting data flows. The session was interrupted when the engineer's connection dropped. While away, a teammate merged a PR that renamed two utility functions. The engineer wants to continue the same exploration.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Resume the subagent from its previous transcript without mentioning the changes–the architecture understanding remains valid."
   },
   {
    "key": "B",
    "text": "Launch a fresh subagent with a summary of prior findings."
   },
   {
    "key": "C",
    "text": "Resume the subagent from its previous transcript and inform it about the renamed functions."
   },
   {
    "key": "D",
    "text": "Launch a fresh subagent and include the prior transcript in the initial prompt for context."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Resume the subagent from its previous transcript and inform it about the renamed functions.\n\nContinuing from the old transcript with updated information about renamed functions is optimal: keep the accumulated 30 minutes of architectural context intact, while notifying agents about specific changes to avoid re-analyzing from scratch.\n\n**A.** Resuming without explicitly incorporating the new changes risks carrying stale assumptions forward into the next step.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** Continuing from the old transcript with updated information about renamed functions is optimal: keep the accumulated 30 minutes of architectural context intact, while notifying agents about specific changes to avoid re-analyzing from scratch.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 5,
  "id": "ccar-f-q005",
  "type": "single",
  "select": 1,
  "question": "Your agent has spent 25 minutes exploring a game engine's rendering subsystem–reading shader code, buffer management, and frame synchronization logic. An engineer now asks it to understand how the physics engine integrates with rendering for collision debug overlays. You notice recent responses reference \"typical rendering patterns\" rather than the specific VulkanPipeline and FrameGraph classes it discovered earlier.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Spawn a sub-agent to explore physics independently, then manually synthesize its findings with the rendering knowledge accumulated in the main conversation."
   },
   {
    "key": "B",
    "text": "Continue in the current context with more targeted prompts referencing the specific classes by name."
   },
   {
    "key": "C",
    "text": "Summarize key rendering findings, then spawn a sub-agent for physics exploration with that summary in its initial context."
   },
   {
    "key": "D",
    "text": "Use /clear to reset context completely, then start fresh with physics exploration using file paths from the project's CLAUDE.md."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Summarize key rendering findings, then spawn a sub-agent for physics exploration with that summary in its initial context.\n\nThe generic \"typical rendering patterns\" responses signal context degradation from a long, bloated session, so the fix is to compact the valuable rendering knowledge into a summary and hand it to a sub-agent with a fresh context for the physics task. This follows Anthropic's context-management best practice of summarization plus sub-agents with clean contexts, preserving the specific VulkanPipeline/FrameGraph findings that the integration task depends on, unlike A (loses knowledge), B (sub-agent lacks needed rendering context and synthesis happens in the degraded context), or D (continues in a degraded context).\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** The generic \"typical rendering patterns\" responses signal context degradation from a long, bloated session, so the fix is to compact the valuable rendering knowledge into a summary and hand it to a sub-agent with a fresh context for the physics task. This follows Anthropic's context-management best practice of summarization plus sub-agents with clean contexts, preserving the specific VulkanPipeline/FrameGraph findings that the integration task depends on, unlike A (loses knowledge), B (sub-agent lacks needed rendering context and synthesis happens in the degraded context), or D (continues in a degraded context).\n\n**D.** Resetting context can throw away useful information and does not by itself create a better investigation strategy.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 6,
  "id": "ccar-f-q006",
  "type": "single",
  "select": 1,
  "question": "An engineer asks the agent to find all callers of a function before removing it. The function is defined in a core library but is also exposed through wrapper modules that rename the function for domain-specific use (e.g., calculateTax in the library becomes computeOrderTax in the orders module).\n\nWhat exploration strategy will most reliably identify all callers?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use Grep to find all files that import from the library or wrapper modules, then read each file to check whether it uses the function."
   },
   {
    "key": "B",
    "text": "Search for the function name in project documentation to understand intended usage patterns and navigate to documented integration points."
   },
   {
    "key": "C",
    "text": "Use Grep to search for the function's original name across the codebase."
   },
   {
    "key": "D",
    "text": "Read the library and wrapper modules to identify all exposed names for the function, then Grep for each name across the codebase."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Read the library and wrapper modules to identify all exposed names for the function, then Grep for each name across the codebase.\n\nBecause the function is exposed through many wrapper modules with different names, it is necessary to determine ALL names (original + aliases in wrappers), then Grep each name. Only Grep the original name (B) will miss callers using wrappers.\n\n**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**B.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.\n\n**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**D.** Because the function is exposed through many wrapper modules with different names, it is necessary to determine ALL names (original + aliases in wrappers), then Grep each name. Only Grep the original name (B) will miss callers using wrappers.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 7,
  "id": "ccar-f-q007",
  "type": "single",
  "select": 1,
  "question": "During testing, you observe that in extended exploration sessions (30+ minutes), the agent starts giving inconsistent answers about code structure it discussed earlier. Engineers report having to repeat context about modules they've already explored.\n\nWhat's the most effective approach to address this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement automatic context clearing every 15 minutes to ensure the agent starts with fresh, uncontaminated context."
   },
   {
    "key": "B",
    "text": "Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions."
   },
   {
    "key": "C",
    "text": "Switch to a higher-capacity model tier to provide more context window space for accumulated exploration data."
   },
   {
    "key": "D",
    "text": "Create summaries of all source files before exploration begins, loading only these compressed representations into context."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Have the agent maintain a scratchpad file that records key findings, referencing it for subsequent questions.\n\nContext window is limited and after 30+ minutes, old information is pushed out. Maintain a scratchpad file to record key findings so the agent can refer back to them without depending on memory in the context.\n\n**A.** Clearing context blindly removes useful information and treats the symptom rather than designing a better way to preserve what matters.\n\n**B.** Context window is limited and after 30+ minutes, old information is pushed out. Maintain a scratchpad file to record key findings so the agent can refer back to them without depending on memory in the context.\n\n**C.** Changing model size affects capacity or cost, but it does not directly fix the workflow mistake described in the question.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 8,
  "id": "ccar-f-q008",
  "type": "single",
  "select": 1,
  "question": "After adding an MCP server with specialized code refactoring tools (extract_function, rename_variable, inline_function), you notice the agent still uses basic text manipulation via Write and Bash sed commands for refactoring tasks. The MCP server is connected and working. Examining the configuration, you find each MCP tool has a minimal description like \"extract_function: extracts a function from code.\"\n\nWhat's the most effective way to improve adoption of the MCP refactoring tools?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Accept this as expected behavior since simpler tools like sed are more predictable than specialized refactoring tools."
   },
   {
    "key": "B",
    "text": "Implement a request classifier that detects refactoring intent and automatically routes those requests to the MCP server before the agent processes them."
   },
   {
    "key": "C",
    "text": "Enhance the MCP tool descriptions to explain when each tool is preferable to text manipulation and clarify expected inputs and outputs."
   },
   {
    "key": "D",
    "text": "Remove the Write tool from the agent's configuration for refactoring sessions so it must use the MCP tools for code modifications."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Enhance the MCP tool descriptions to explain when each tool is preferable to text manipulation and clarify expected inputs and outputs.\n\nTool selection is driven by the descriptions Claude sees. When the MCP tools say 'extracts a function from code' and Write/sed come with rich documentation, Claude picks Write/sed. Beef up the descriptions.\n\n**A.** Treating the behavior as acceptable leaves the adoption problem unsolved instead of improving the agent’s decision-making.\n\n**B.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.\n\n**C.** Tool selection is driven by the descriptions Claude sees. When the MCP tools say 'extracts a function from code' and Write/sed come with rich documentation, Claude picks Write/sed. Beef up the descriptions.\n\n**D.** Forcing tool use by removing alternatives may change behavior, but it does not solve the real issue of helping the agent understand when the specialized tool is appropriate.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 9,
  "id": "ccar-f-q009",
  "type": "single",
  "select": 1,
  "question": "An engineer asks the agent to investigate error handling in a legacy payment processing module spanning 15 files. After reading the first 8 files, the agent's responses are becoming noticeably less accurate—it's forgetting previously discovered code patterns and hasn't yet located all test files or traced the complete data flow.\n\nWhat's the most effective approach to complete this investigation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use Grep to search for specific function names across remaining files, reducing the content loaded into context."
   },
   {
    "key": "B",
    "text": "Spawn a subagent to explore the remaining files, providing a summary of discovered patterns as its initial context."
   },
   {
    "key": "C",
    "text": "Close the current context with /clear and start fresh, re-reading only the most critical files."
   },
   {
    "key": "D",
    "text": "Document a summary of findings so far in a file, then start fresh with a new context using that summary as reference."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Spawn a subagent to explore the remaining files, providing a summary of discovered patterns as its initial context.\n\nWhen the agent is losing context after reading too many files, spawning a new subagent with a summary of the current findings is the optimal way to continue the investigation. The main agent coordinates while the subagent explores with clean context.\n\n**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**B.** When the agent is losing context after reading too many files, spawning a new subagent with a summary of the current findings is the optimal way to continue the investigation. The main agent coordinates while the subagent explores with clean context.\n\n**C.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.\n\n**D.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 10,
  "id": "ccar-f-q010",
  "type": "single",
  "select": 1,
  "question": "An engineer used the agent yesterday to analyze a legacy authentication module, identifying two distinct refactoring approaches: extracting a microservice versus refactoring in-place. Today, they want to explore both approaches in depth–having the agent propose specific code changes for each–before deciding which to implement.\n\nWhat's the most effective way to structure this exploration?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Start two fresh sessions, manually providing a summary of yesterday's analysis findings to establish context."
   },
   {
    "key": "B",
    "text": "Resume yesterday's session to explore the first approach, then start a new session for the second, manually recreating the original context."
   },
   {
    "key": "C",
    "text": "Use fork_session to create two branches from yesterday's analysis, exploring one approach in each fork."
   },
   {
    "key": "D",
    "text": "Resume yesterday's session and explore both approaches sequentially within the same conversation thread."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Use fork_session to create two branches from yesterday's analysis, exploring one approach in each fork.\n\nfork_session allows creating two branches from the same analysis point, each branch exploring a different approach without affecting each other, while keeping the entire context from the previous session intact.\n\n**A.** Fresh sessions lose the advantage of the accumulated context you already have and create unnecessary rework.\n\n**B.** Resuming without explicitly incorporating the new changes risks carrying stale assumptions forward into the next step.\n\n**C.** fork_session allows creating two branches from the same analysis point, each branch exploring a different approach without affecting each other, while keeping the entire context from the previous session intact.\n\n**D.** Resuming without explicitly incorporating the new changes risks carrying stale assumptions forward into the next step.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 11,
  "id": "ccar-f-q011",
  "type": "single",
  "select": 1,
  "question": "Your agent has analyzed a complex service module–reading 23 source files, tracing request flows, and identifying error handling patterns. A developer wants to compare two testing strategies before committing to one: end-to-end tests with mocked external services vs. snapshot tests capturing expected outputs. They need to independently develop both approaches to evaluate trade-offs.\n\nHow should you manage the sessions?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy."
   },
   {
    "key": "B",
    "text": "Start two fresh sessions, having each re-read the relevant source files before beginning."
   },
   {
    "key": "C",
    "text": "Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially."
   },
   {
    "key": "D",
    "text": "Export the analysis session's key findings to a file, then create two new sessions that reference this file."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.\n\nfork_session allows creating two branches from the same analysis point, each branch develops an independent testing strategy without affecting each other, while keeping the entire context from the analysis session intact.\n\n**A.** fork_session allows creating two branches from the same analysis point, each branch develops an independent testing strategy without affecting each other, while keeping the entire context from the analysis session intact.\n\n**B.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.\n\n**C.** Handling both paths sequentially misses the point of keeping the branches separate and makes comparison or independent exploration harder.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 12,
  "id": "ccar-f-q012",
  "type": "single",
  "select": 1,
  "question": "Your codebase exploration tool stores session IDs to allow engineers to continue investigations across work sessions. An engineer spent an hour yesterday analyzing a legacy authentication module, building context about its architecture and dependencies. They want to continue today. The session ID is valid, but version control shows 3 of the 12 files the agent previously read were modified overnight by a teammate's merge.\n\nWhat approach best balances efficiency and accuracy?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Resume the session without informing the agent about the changed files"
   },
   {
    "key": "B",
    "text": "Resume the session and inform the agent which specific files changed for targeted re-analysis"
   },
   {
    "key": "C",
    "text": "Resume the session and immediately have the agent re-read all 12 previously analyzed files"
   },
   {
    "key": "D",
    "text": "Start a fresh session to ensure the agent works with current codebase state without stale assumptions"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Resume the session and inform the agent which specific files changed for targeted re-analysis\n\nResume session + notification of changed files is the most balanced way: keep the context of the 9 files unchanged (avoid costly re-reads), and update the agent about new changes to ensure accuracy.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** Resume session + notification of changed files is the most balanced way: keep the context of the 9 files unchanged (avoid costly re-reads), and update the agent about new changes to ensure accuracy.\n\n**C.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 13,
  "id": "ccar-f-q013",
  "type": "single",
  "select": 1,
  "question": "An engineer asks the agent to understand how the caching layer works before adding a new cache invalidation trigger. After initial Grep searches, the agent has identified that caching logic spans 15 files including decorators, middleware, and service classes (~8,000 lines total).\n\nWhat's the most effective next step for building understanding while managing context constraints?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use the Read tool to sequentially load all 15 files, building complete understanding across the full caching implementation."
   },
   {
    "key": "B",
    "text": "Use Grep to search for \"invalidate\" and \"expire\" patterns across all files, then Read only those specific line ranges with minimal surrounding context."
   },
   {
    "key": "C",
    "text": "Analyze imports and class hierarchies to identify the base cache class, Read that file to understand the interface, then trace specific invalidation implementations."
   },
   {
    "key": "D",
    "text": "Use Glob to find files matching common caching patterns (cache.py, caching/), prioritize the largest files by reading them first, then check smaller files for gaps."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Analyze imports and class hierarchies to identify the base cache class, Read that file to understand the interface, then trace specific invalidation implementations.\n\nStarting from the class hierarchy to find the base cache class, reading the interface, then trace implementations is the most effective way. Avoid reading all 15 files (too much context) or just searching for patterns (lacking architectural context).\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**C.** Starting from the class hierarchy to find the base cache class, reading the interface, then trace implementations is the most effective way. Avoid reading all 15 files (too much context) or just searching for patterns (lacking architectural context).\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 14,
  "id": "ccar-f-q014",
  "type": "single",
  "select": 1,
  "question": "An engineer who just joined the team asks the agent to help them understand the authentication and authorization architecture before making security improvements. The codebase has 800+ files across multiple services.\n\nWhat exploration strategy will most effectively build understanding, given Claude built-in tools and context limits?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Launch parallel subagents to explore different services simultaneously, then synthesize their findings into an architectural overview."
   },
   {
    "key": "B",
    "text": "Use Grep to find authentication entry points, read those files, then follow imports and function calls to map the auth flow incrementally."
   },
   {
    "key": "C",
    "text": "Read any CLAUDE.md and README files first, then ask the engineer to specify which 10-15 files are most important for understanding the auth system."
   },
   {
    "key": "D",
    "text": "Read all files containing \"auth\", \"login\", \"permission\", or \"token\" in their content or filename."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Use Grep to find authentication entry points, read those files, then follow imports and function calls to map the auth flow incrementally.\n\nWith a codebase of 800+ files, incremental exploration from entry points and by imports is the most effective way to build structured understanding without being overwhelmed by context. Reading all related files (B) would consume too much context.\n\n**A.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.\n\n**B.** With a codebase of 800+ files, incremental exploration from entry points and by imports is the most effective way to build structured understanding without being overwhelmed by context. Reading all related files (B) would consume too much context.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 15,
  "id": "ccar-f-q015",
  "type": "single",
  "select": 1,
  "question": "After integrating a local MCP server providing code analysis tools (analyze_dependencies, find_dead_code, calculate_complexity), you notice the agent continues to use Grep to inspect dependencies even when users explicitly ask about \"code dependencies\". Tool definitions reveal: analyze_dependencies returns a dependency graph by analyzing imports.\n\nWhat's the most effective approach to improve the agent's selection of MCP tools?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add routing questions to the system prompt specifying that dependency-related questions should use MCP tools rather than Grep."
   },
   {
    "key": "B",
    "text": "Remove Grep from the available tools to eliminate functional overlap."
   },
   {
    "key": "C",
    "text": "Split analyze_dependencies into granular tools: list_imports, detect_transitive_deps, identify_circular_deps to avoid overlap with Grep."
   },
   {
    "key": "D",
    "text": "Expand MCP tool descriptions and outputs–e.g., \"Builds dependency graph with list_imports, direct_circular_deps\"–to clearly distinguish dependencies and cycle analysis from Grep."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Expand MCP tool descriptions and outputs–e.g., \"Builds dependency graph with list_imports, direct_circular_deps\"–to clearly distinguish dependencies and cycle analysis from Grep.\n\nAgents do not use MCP tools because the tool descriptions are not detailed enough to distinguish when to use them versus Grep. Expand descriptions with specific output examples to help agents understand and choose the right tool.\n\n**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**D.** Agents do not use MCP tools because the tool descriptions are not detailed enough to distinguish when to use them versus Grep. Expand descriptions with specific output examples to help agents understand and choose the right tool.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 16,
  "id": "ccar-f-q016",
  "type": "single",
  "select": 1,
  "question": "Your extraction pipeline processes contracts that frequently include amendments. When a contract contains both original terms and later amendments (e.g., original clause specifies \"30-day payment terms\" while Amendment 1 changes this to \"45 days\"), the model inconsistently extracts one value or the other with no indication of which applies.\n\nWhat's the most effective approach to improve extraction accuracy for documents with amendments?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement post-extraction validation using pattern matching to detect amendments and flag those extractions for manual review."
   },
   {
    "key": "B",
    "text": "Preprocess documents with a classifier that identifies and removes superseded sections before the main extraction step."
   },
   {
    "key": "C",
    "text": "Add prompt instructions to always extract the most recent amendment value and ignore superseded original terms."
   },
   {
    "key": "D",
    "text": "Redesign the schema so amended fields capture multiple values, each with source location and effective date."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Redesign the schema so amended fields capture multiple values, each with source location and effective date.\n\nWhen a document has both original terms and amendments, the schema should capture both values along with effective date and source location. This preserves complete information and allows downstream systems to decide for themselves which values to apply.\n\n**A.** This defers the problem rather than solving the system behavior that caused it.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** When a document has both original terms and amendments, the schema should capture both values along with effective date and source location. This preserves complete information and allows downstream systems to decide for themselves which values to apply.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 17,
  "id": "ccar-f-q017",
  "type": "single",
  "select": 1,
  "question": "After deployment, you find that 12% of extractions contain semantic errors that pass JSON schema validation (e.g., a duration like \"30 minutes\" incorrectly placed in an ingredient quantity field). Human reviewers have capacity to check only 20% of extractions.\n\nWhich approach most effectively allocates reviewer attention?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Randomly sample 20% of extractions for review, using corrections to track accuracy and identify error patterns."
   },
   {
    "key": "B",
    "text": "Prioritize review of all extractions where required fields are empty or explicitly marked as not found."
   },
   {
    "key": "C",
    "text": "Have the model output field-level confidence scores, then calibrate review thresholds using a labeled validation set."
   },
   {
    "key": "D",
    "text": "Review all extractions from documents with formatting anomalies such as unusual layouts or mixed content types."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Have the model output field-level confidence scores, then calibrate review thresholds using a labeled validation set.\n\nSemantic errors are difficult to detect through schema validation. To optimize 20% reviewer capacity, model output field-level confidence scores and then use labeled validation set to find the optimal threshold, focusing review on extractions with low confidence.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** Semantic errors are difficult to detect through schema validation. To optimize 20% reviewer capacity, model output field-level confidence scores and then use labeled validation set to find the optimal threshold, focusing review on extractions with low confidence.\n\n**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 18,
  "id": "ccar-f-q018",
  "type": "single",
  "select": 1,
  "question": "Your extraction pipeline processes invoices and extracts line items, tax amounts, and grand totals. You discover that 8% of documents have extracted line item amounts that don't sum to the extracted grand total—the downstream accounting system has been detecting mismatches.\n\nWhat's the most effective improvement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add a calculated_total field where the model extracts line items independently, then validate totals alongside a is_total_consistent boolean flag for human review when values differ."
   },
   {
    "key": "B",
    "text": "Extract line items and totals independently, then use a separate validation model to reconcile discrepancies."
   },
   {
    "key": "C",
    "text": "Implement post-processing that automatically adjusts line item amounts when the extracted total doesn't match the sum."
   },
   {
    "key": "D",
    "text": "Add few-shot examples to the system prompt where extracted line items correctly sum to demonstrate the desired extraction behavior."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Add a calculated_total field where the model extracts line items independently, then validate totals alongside a is_total_consistent boolean flag for human review when values differ.\n\nAdd the calculated_total field so the model can self-validate by calculating the total from line items and comparing with the grand total, combined with a boolean flag to flag cases that need review. This method detects mismatches right in the extraction step.\n\n**A.** Add the calculated_total field so the model can self-validate by calculating the total from line items and comparing with the grand total, combined with a boolean flag to flag cases that need review. This method detects mismatches right in the extraction step.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 19,
  "id": "ccar-f-q019",
  "type": "single",
  "select": 1,
  "question": "Your pipeline uses a tool called extract_metadata with a JSON schema for paper details. During testing, the agent sometimes fails to call extract_metadata because it wants to provide direct answers.\n\nWhat's the most reliable way to ensure metadata extraction always happens first?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set tool_choice to \"auto\" in the API call, combined with tools so that Claude always prioritizes metadata before any other tool calls."
   },
   {
    "key": "B",
    "text": "Set tool_choice to type \"any\" so Claude must use a tool, combined with system prompt instructions to call extract_metadata first."
   },
   {
    "key": "C",
    "text": "Set tool_choice to \"auto\" and reorder the tool definitions placing extract_metadata first since Claude prioritizes earlier-listed tools."
   },
   {
    "key": "D",
    "text": "Set tool_choice to type \"tool\", name \"extract_metadata\" and process the enrichment requests in subsequent turns after receiving the extracted metadata."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Set tool_choice to type \"tool\", name \"extract_metadata\" and process the enrichment requests in subsequent turns after receiving the extracted metadata.\n\nUsing tool_choice with type \"tool\" and name \"extract_metadata\" forces Claude to call the correct tool first. After receiving metadata, enrichment requests are processed in subsequent turns. This is the only way that is 100% guaranteed.\n\n**A.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.\n\n**D.** Using tool_choice with type \"tool\" and name \"extract_metadata\" forces Claude to call the correct tool first. After receiving metadata, enrichment requests are processed in subsequent turns. This is the only way that is 100% guaranteed.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 20,
  "id": "ccar-f-q020",
  "type": "single",
  "select": 1,
  "question": "After your daily batch of 10,000 documents completes, 300 documents (3%) failed with \"context_length_exceeded\" errors. The results file identifies each failure by custom_id.\n\nWhat's the most cost-effective approach to process these failures?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Reprocess the entire batch with prompt caching enabled to reduce the cost of retrying requests with identical system prompts"
   },
   {
    "key": "B",
    "text": "Resubmit the entire 10,000 document batch using a model tier with a larger context window"
   },
   {
    "key": "C",
    "text": "Increase the max_tokens parameter for the 300 failed documents and resubmit them in a new batch"
   },
   {
    "key": "D",
    "text": "Resubmit only the 300 failed documents after chunking them into smaller pieces, then combine the partial extractions"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Resubmit only the 300 failed documents after chunking them into smaller pieces, then combine the partial extractions\n\ncontext_length_exceeded is an error because the input is too long, not the output. Just resubmit 300 failed documents after chunking them into smaller pieces. No need to reprocess all 10,000 documents or increase max_tokens.\n\n**A.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** context_length_exceeded is an error because the input is too long, not the output. Just resubmit 300 failed documents after chunking them into smaller pieces. No need to reprocess all 10,000 documents or increase max_tokens.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 21,
  "id": "ccar-f-q021",
  "type": "single",
  "select": 1,
  "question": "Your extraction system parses e-commerce product descriptions to extract specifications like dimensions, weight, and materials into JSON. Despite having a well-defined schema, the model inconsistently extracts the \"materials\" field–sometimes returning \"cotton blend\", other times \"Cotton/Polyester mix\", and occasionally omitting the field when material information is clearly present in the source.\n\nWhat's the most effective way to improve extraction consistency?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Make the \"materials\" field required instead of optional in the schema to force the model to always extract a value"
   },
   {
    "key": "B",
    "text": "Switch to a more capable model tier since inconsistent extraction indicates insufficient model capability"
   },
   {
    "key": "C",
    "text": "Set temperature to 0 to eliminate randomness and ensure deterministic outputs"
   },
   {
    "key": "D",
    "text": "Add few-shot examples showing 2-3 complete input-output pairs with standardized material description formats"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Add few-shot examples showing 2-3 complete input-output pairs with standardized material description formats\n\nInconsistency in extraction is often due to the lack of specific examples of standard formats. Few-shot examples with standardized material descriptions teach the model to format output properly, more effectively than setting temperature=0 or making field required.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** Inconsistency in extraction is often due to the lack of specific examples of standard formats. Few-shot examples with standardized material descriptions teach the model to format output properly, more effectively than setting temperature=0 or making field required.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 22,
  "id": "ccar-f-q022",
  "type": "single",
  "select": 1,
  "question": "Your system extracts event metadata (date, location, organizer, attendee_count) from news articles using a JSON schema with all nullable fields. During evaluation, you observe the model frequently generates plausible but incorrect values for fields not mentioned in the article–for example, outputting \"500\" for attendee_count when the source contains no attendance information.\n\nWhat's the most effective way to reduce these false extractions?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Make all schema fields required (non-nullable) with strict validation rules to ensure the model only outputs verifiable data."
   },
   {
    "key": "B",
    "text": "Add a post-processing step using a second LLM call to verify each extracted value exists in the source document."
   },
   {
    "key": "C",
    "text": "Add prompt instructions to return null for any field where information is not directly stated in the source."
   },
   {
    "key": "D",
    "text": "Upgrade to a more capable model tier with improved instruction-following to reduce hallucination tendencies."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Add prompt instructions to return null for any field where information is not directly stated in the source.\n\nModel hallucinating probable values for fields are not present in the source due to lack of clear 'no information' instructions. Adding explicit instruction 'return null if the information is not directly in the source' directly solves the problem.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** Model hallucinating probable values for fields are not present in the source due to lack of clear 'no information' instructions. Adding explicit instruction 'return null if the information is not directly in the source' directly solves the problem.\n\n**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 23,
  "id": "ccar-f-q023",
  "type": "single",
  "select": 1,
  "question": "After implementing tool use with strict schema definitions, JSON syntax errors are eliminated, but 5% of extractions still have valid JSON with empty arrays or null values for required fields like citations and methodology. Spot-checking reveals that source documents contain this information, but in varied formats–inline citations vs. bibliographies, methodology sections vs. details embedded in introductions.\n\nWhat's the most effective way to address these failures?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement retry logic that re-sends requests when validation detects empty required fields."
   },
   {
    "key": "B",
    "text": "Add few-shot examples demonstrating extractions from documents with varied structures–showing how to identify citations in different formats and locate methodology details across section types."
   },
   {
    "key": "C",
    "text": "Build a regex-based post-processing layer that scans source documents for citation patterns and methodology keywords, populating empty fields when the model fails to extract."
   },
   {
    "key": "D",
    "text": "Modify your schema to make citations and methodology optional, and flag incomplete records for manual review rather than failing validation."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Add few-shot examples demonstrating extractions from documents with varied structures–showing how to identify citations in different formats and locate methodology details across section types.\n\nSince the same information appears in many different formats (inline vs bibliography, section vs embedded), these few-shot examples showing how to identify and extract from these formats are the most effective way to improve extraction.\n\n**A.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**B.** Since the same information appears in many different formats (inline vs bibliography, section vs embedded), these few-shot examples showing how to identify and extract from these formats are the most effective way to improve extraction.\n\n**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**D.** Manual review can be useful as a fallback, but it does not solve the system behavior that the question is asking you to improve.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 24,
  "id": "ccar-f-q024",
  "type": "single",
  "select": 1,
  "question": "Your extraction system implements automatic retries when validation fails. On each retry, the specific validation error is appended to the prompt. This retry-with-error-feedback approach resolves most failures within 2-3 attempts\n\nFor which failure pattern would additional retries be LEAST effective?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The model extracts dates as ISO 8601 datetime strings (\"2023-03-15T00:00:00Z\") when the schema requires only the date portion (YYYY-MM-DD)"
   },
   {
    "key": "B",
    "text": "The model extracts keywords as a nested object organized by category when the schema requires a flat array of strings"
   },
   {
    "key": "C",
    "text": "The model extracts \"et al.\" for co-authors when the full list exists only in an external document not in the input"
   },
   {
    "key": "D",
    "text": "The model extracts citation counts as locale-formatted strings (\"1,234\") when the schema requires integers"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. The model extracts \"et al.\" for co-authors when the full list exists only in an external document not in the input\n\nNo amount of retrying teaches the model information that isn't in the input. Retry-with-error-feedback only fixes mistakes the model could have gotten right from the source.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**C.** No amount of retrying teaches the model information that isn't in the input. Retry-with-error-feedback only fixes mistakes the model could have gotten right from the source.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 25,
  "id": "ccar-f-q025",
  "type": "single",
  "select": 1,
  "question": "Your extraction pipeline processes restaurant menus and must output structured JSON with fields for item names, descriptions, prices, and dietary tags. Some menus use inconsistent formatting–prices as \"$12\" vs \"12.00\", dietary info as icons vs text.\n\nWhat's the most reliable approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define a strict output schema and include format normalization rules in your prompt."
   },
   {
    "key": "B",
    "text": "Request multiple extraction attempts per document and select the most common format."
   },
   {
    "key": "C",
    "text": "Use separate extraction calls for each field to ensure consistent handling of each type."
   },
   {
    "key": "D",
    "text": "Extract data as-is and normalize formats in post-processing code after Claude returns."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Define a strict output schema and include format normalization rules in your prompt.\n\nFor menus with inconsistent formatting, combining strict output schema (structure) with normalization rules right in the prompt (for example: 'prices as float without currency symbol') normalize right in the extraction step, is the most effective and simple.\n\n**A.** For menus with inconsistent formatting, combining strict output schema (structure) with normalization rules right in the prompt (for example: 'prices as float without currency symbol') normalize right in the extraction step, is the most effective and simple.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 26,
  "id": "ccar-f-q026",
  "type": "single",
  "select": 1,
  "question": "Your extraction uses tool use with a JSON schema where property_type is defined as an enum: ['house', 'apartment', 'condo', 'townhouse']. After deployment, 8% of extractions fail schema validation. Investigation reveals listings mention many uncommon property types –\"studio\", \"loft\", \"duplex\", \"mobile home\", \"tiny house\", \"converted warehouse\"–and new types continue appearing regularly.\n\nWhat's the most effective long-term solution?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Change property_type from an enum to a free-form string and implement a normalization step in post-processing."
   },
   {
    "key": "B",
    "text": "Add few-shot examples to your prompt demonstrating how to map unexpected property types to the closest existing enum value."
   },
   {
    "key": "C",
    "text": "Continuously expand the enum to include newly observed property types and add monitoring for additional edge cases."
   },
   {
    "key": "D",
    "text": "Add an \"other\" value to your enum with a separate property_type_detail string field for specifics when \"other\" is selected."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Add an \"other\" value to your enum with a separate property_type_detail string field for specifics when \"other\" is selected.\n\nBecause new property types constantly appear, hard enums will always be outdated. Adding 'other' value with its own property_type_detail field allows handling all current and future edge cases without constantly updating the enum.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** Because new property types constantly appear, hard enums will always be outdated. Adding 'other' value with its own property_type_detail field allows handling all current and future edge cases without constantly updating the enum.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 27,
  "id": "ccar-f-q027",
  "type": "single",
  "select": 1,
  "question": "Your system has been operating with 100% human review for 3 months. Analysis shows that extractions with model confidence >90% have 97% accuracy overall. To reduce reviewer workload, you plan to automate high-confidence extractions\n\nBefore deploying, what validation step is most critical?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Analyze accuracy by document type and field to verify high-confidence extractions perform consistently across all segments, not just in aggregate."
   },
   {
    "key": "B",
    "text": "Compare accuracy at different confidence thresholds (85%, 90%, 95%) to find the optimal cutoff that maximizes automation while minimizing errors."
   },
   {
    "key": "C",
    "text": "Run a two-week pilot routing 25% of high-confidence extractions directly to downstream systems and monitor error reports."
   },
   {
    "key": "D",
    "text": "Verify that 97% accuracy meets requirements for all downstream systems that consume the extracted data."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Analyze accuracy by document type and field to verify high-confidence extractions perform consistently across all segments, not just in aggregate.\n\nAggregate accuracy hides segment failures — one document type could be 70% while others are 99%. Auto-routing by overall number alone risks systemic errors in the weak segments.\n\n**A.** Aggregate accuracy hides segment failures — one document type could be 70% while others are 99%. Auto-routing by overall number alone risks systemic errors in the weak segments.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 28,
  "id": "ccar-f-q028",
  "type": "single",
  "select": 1,
  "question": "Documents arrive continuously throughout business hours and need structured data extracted. To reduce costs, you want to use the Message Batches API (50% discount, up-to-24-hour processing window). Your SLA specifies that extraction results must be available within 30 hours of document arrival with 99.9% reliability.\n\nWhich batching strategy is most appropriate?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use the real-time API for all documents instead of batch processing"
   },
   {
    "key": "B",
    "text": "Submit a single batch at end of day containing all documents from that day"
   },
   {
    "key": "C",
    "text": "Submit batches every 4 hours containing documents from that window"
   },
   {
    "key": "D",
    "text": "Submit batches every 6 hours containing documents from that window"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Submit batches every 4 hours containing documents from that window\n\nSubmitting batches every 4 hours ensures that in the worst case, documents wait a maximum of 4 hours + 24 hours of processing = 28 hours < 30 hours SLA. Submitting every 6 hours may violate the SLA (6 + 24 = 30 hours without a safety buffer).\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Submitting batches every 4 hours ensures that in the worst case, documents wait a maximum of 4 hours + 24 hours of processing = 28 hours < 30 hours SLA. Submitting every 6 hours may violate the SLA (6 + 24 = 30 hours without a safety buffer).\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 29,
  "id": "ccar-f-q029",
  "type": "single",
  "select": 1,
  "question": "Your schema includes a skills: string[] field. Production monitoring reveals three consistency issues: (1) compound phrases like \"Python and SQL\" are sometimes kept as one entry, sometimes split; (2) implied but unstated skills occasionally appear in extractions; (3) similar documents produce wildly different array lengths (5-10 vs 40+ entries). Your prompt currently says \"Extract all skills mentioned.\"\n\nWhat's the most effective improvement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add few-shot examples demonstrating compound phrase handling, explicit mention criteria, and appropriate entry granularity."
   },
   {
    "key": "B",
    "text": "Add constraints: \"Extract 10-20 skills maximum, one skill per entry, only explicitly named skills.\""
   },
   {
    "key": "C",
    "text": "Enrich the schema to {skill: string, confidence: float, source_quote: string[]} to capture extraction metadata."
   },
   {
    "key": "D",
    "text": "Add post-extraction normalization that maps skills to a canonical taxonomy and deduplicates similar entries."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Add few-shot examples demonstrating compound phrase handling, explicit mention criteria, and appropriate entry granularity.\n\nThe three problems (compound phrases, implied skills, length inconsistency) all stem from the lack of specific examples of expected behavior. Few-shot examples demonstrating compound phrase handling, explicit mention criteria, and granularity address all three issues directly.\n\n**A.** The three problems (compound phrases, implied skills, length inconsistency) all stem from the lack of specific examples of expected behavior. Few-shot examples demonstrating compound phrase handling, explicit mention criteria, and granularity address all three issues directly.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 30,
  "id": "ccar-f-q030",
  "type": "single",
  "select": 1,
  "question": "Your extraction system processes two document types: standard monthly reports (archived after processing) and urgent exception reports (must trigger business alerts within 30 minutes of receipt). Both use the same JSON schema. You want to minimize API costs while meeting latency requirements.\n\nHow should you architect the processing pipeline?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Submit all documents to the real-time Messages API to ensure consistent processing latency across document types."
   },
   {
    "key": "B",
    "text": "Route standard reports to the Batch API for 50% cost savings, and route urgent exception reports to the real-time Messages API."
   },
   {
    "key": "C",
    "text": "Submit all documents to the Batch API with custom_ids for tracking. When results arrive, immediately process urgent documents and trigger delayed alerts for exceptions."
   },
   {
    "key": "D",
    "text": "Queue all documents and submit hourly batches, flagging urgent documents for expedited handling when batch results return."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Route standard reports to the Batch API for 50% cost savings, and route urgent exception reports to the real-time Messages API.\n\nStandard reports (archived) conforms to the Batch API to save 50% on costs. Urgent exception reports need to trigger alerts within 30 minutes so must use the real-time Messages API. This is the optimal architecture for both cost and latency\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** Standard reports (archived) conforms to the Batch API to save 50% on costs. Urgent exception reports need to trigger alerts within 30 minutes so must use the real-time Messages API. This is the optimal architecture for both cost and latency\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 31,
  "id": "ccar-f-q031",
  "type": "single",
  "select": 1,
  "question": "The document analysis agent has a single analyze_document tool that takes a document and a free-text instruction parameter. During evaluation, requests like \"extract the key financial metrics\" often return narrative summaries, while \"summarize the methodology\" sometimes returns raw data tables. The synthesis agent reports that 35% of analysis results require re-requests with clarified instructions.\n\nWhat's the most effective way to improve reliability?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Split the generic tool into purpose-specific tools– extract_data_points, summarize_content, verify_claim_against_source –each with defined input/output contracts."
   },
   {
    "key": "B",
    "text": "Have the coordinator pre-classify each analysis request before passing instructions to the document analysis agent."
   },
   {
    "key": "C",
    "text": "Keep the single tool but add an analysis_type enum parameter requiring explicit selection between extraction, summarization, and verification modes."
   },
   {
    "key": "D",
    "text": "Enhance the tool description with detailed examples showing how different instruction phrasings should map to different output formats."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Split the generic tool into purpose-specific tools– extract_data_points, summarize_content, verify_claim_against_source –each with defined input/output contracts.\n\nGeneric analyze_document with free-text instructions leads to ambiguous and inconsistent outputs. Splitting into specialized tools with defined input/output contracts completely eliminates ambiguity, ensuring the agent always receives the correct output format.\n\n**A.** Generic analyze_document with free-text instructions leads to ambiguous and inconsistent outputs. Splitting into specialized tools with defined input/output contracts completely eliminates ambiguity, ensuring the agent always receives the correct output format.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 32,
  "id": "ccar-f-q032",
  "type": "single",
  "select": 1,
  "question": "The coordinator agent has AgentFunctions configured for all four specialized subagents, each with appropriate descriptions and restrictions. During testing, you find the coordinator sometimes fails to delegate—it writes \"I'll ask the web search agent to find sources\" without actually invoking it.\n\nWhat is the most likely cause?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The coordinator's allowed Tools configuration doesn't include \"Task\", so while it can describe delegation, it cannot actually invoke the tool required to spawn subagents."
   },
   {
    "key": "B",
    "text": "The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent parameter can be specified."
   },
   {
    "key": "C",
    "text": "The AgentFunctions are configured correctly, but the coordinator's system prompt includes a statement that prevents it from knowing the available subagent types."
   },
   {
    "key": "D",
    "text": "Subagent context limit descriptions from the coordinator don't provide enough context; you need to configure explicit context content between coordinator and tool descriptions."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. The coordinator's allowed Tools configuration doesn't include \"Task\", so while it can describe delegation, it cannot actually invoke the tool required to spawn subagents.\n\nThe coordinator can describe delegation (generating text), but cannot actually invoke subagents because the 'Task' tool is not in the allowed tools configuration. This is a common configuration error in multi-agent setup.\n\n**A.** The coordinator can describe delegation (generating text), but cannot actually invoke subagents because the 'Task' tool is not in the allowed tools configuration. This is a common configuration error in multi-agent setup.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 33,
  "id": "ccar-f-q033",
  "type": "single",
  "select": 1,
  "question": "When researching \"renewable energy adoption,\" the web search agent returns recent statistics (2024: 35% adoption) while the document analysis agent extracts data from internal reports (2022: 18% adoption). The synthesis agent incorrectly flags these as contradictory sources rather than recognizing the data shows growth over time.\n\nWhat change would best enable the synthesis agent to correctly interpret such temporal differences?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Configure the web search agent to only return results from the past 6 months."
   },
   {
    "key": "B",
    "text": "Add a conflict resolution agent that automatically discards older data when newer data exists for the same metric."
   },
   {
    "key": "C",
    "text": "Instruct the synthesis agent to always treat the most recent data as authoritative and place older findings in a separate historical appendix."
   },
   {
    "key": "D",
    "text": "Require subagents to include publication or data collection dates in their structured outputs."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Require subagents to include publication or data collection dates in their structured outputs.\n\nThe synthesis agent misreads the data because it never sees the dates. Making each data point carry its own timestamp in the structured output lets synthesis reason about trends instead of contradictions.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The synthesis agent misreads the data because it never sees the dates. Making each data point carry its own timestamp in the structured output lets synthesis reason about trends instead of contradictions.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 34,
  "id": "ccar-f-q034",
  "type": "single",
  "select": 1,
  "question": "Your multi-agent research pipeline crashed after processing 12 of 28 documents. The web search agent had identified relevant sources, the document analysis agent had partially completed extraction, and the synthesizer had begun pattern identification.\nYou need to resume processing without repeating work or losing fidelity of prior findings.\n\nWhat state management approach best balances information fidelity with context efficiency when restoring agent state?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Index all agent outputs in a shared vector store. When resuming, each agent queries the store using semantic search to retrieve relevant prior findings."
   },
   {
    "key": "B",
    "text": "Have each agent maintain its own persistent state file and reload it independently at the start of each session."
   },
   {
    "key": "C",
    "text": "Persist the coordinator's conversation log containing all task delegations and responses, providing this to agents when resuming."
   },
   {
    "key": "D",
    "text": "Have each agent persist a structured report to a known location. On resume, the coordinator loads the reports and injects relevant state into agent prompts."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Have each agent persist a structured report to a known location. On resume, the coordinator loads the reports and injects relevant state into agent prompts.\n\nStructured reports persist to known locations allowing the coordinator to load and inject state into agent prompts when resuming. This is more efficient than raw conversation logs (too verbose) or vector stores (more complicated than necessary).\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** Structured reports persist to known locations allowing the coordinator to load and inject state into agent prompts when resuming. This is more efficient than raw conversation logs (too verbose) or vector stores (more complicated than necessary).",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 35,
  "id": "ccar-f-q035",
  "type": "single",
  "select": 1,
  "question": "Production reviews reveal inconsistent handling of uncertainty in final reports. Sometimes confidence calibrations are synthesized into standardized uncertainty expressions, while other times results produce vague estimates without clear methodology.\n\nWhich system-level improvement best addresses this inconsistency?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Instruct the synthesis agent to use explicit sections separating confirmed findings from contested analysis, preserving original source characterizations."
   },
   {
    "key": "B",
    "text": "Add a verification subagent that cross-references findings across sources, only accepting synthesis corroborated by at least two independent sources."
   },
   {
    "key": "C",
    "text": "Implement a confidence calibration layer where synthesis agent normalizes uncertainty expressions into standardized probability representations (0.0-1.0), then weights their calibrated confidence."
   },
   {
    "key": "D",
    "text": "Configure subagents to only report findings with sufficient coverage breadth, source diversity, and quality criteria before passing results to the synthesis agent."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Instruct the synthesis agent to use explicit sections separating confirmed findings from contested analysis, preserving original source characterizations.\n\nThe report structure clearly separates confirmed findings from those that are controversial, while preserving the original context – this is a way to ensure balance and accuracy without being too hedged in any case.\n\n**A.** The report structure clearly separates confirmed findings from those that are controversial, while preserving the original context – this is a way to ensure balance and accuracy without being too hedged in any case.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 36,
  "id": "ccar-f-q036",
  "type": "single",
  "select": 1,
  "question": "The coordinator provides detailed step-by-step instructions to the web search subagent, specifying exact search queries, source quality criteria (coverage breadth, source diversity), and content type classifications. The coordinator sometimes encounters challenges where instructions fail when the subagent encounters unexpected situations.\n\nWhat's the most effective way to improve subagent adaptability?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement a task classification step where the coordinator categorizes requests as \"analytical\" vs \"exploratory\" and uses different instruction sets for each category."
   },
   {
    "key": "B",
    "text": "Remove procedural detail entirely, delegating with simple goals like \"research it thoroughly\" and relying on the subagent's general capabilities."
   },
   {
    "key": "C",
    "text": "Add explicit fallback directives to the detailed instructions: \"if specified searches fail, attempt alternative queries before reporting failure.\""
   },
   {
    "key": "D",
    "text": "Specify research goals and quality criteria (coverage breadth, source diversity, content type) rather than procedural instructions, letting the subagent determine execution."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Specify research goals and quality criteria (coverage breadth, source diversity, content type) rather than procedural instructions, letting the subagent determine execution.\n\nStep-by-step instructions are too rigid, making the subagent unable to adapt when encountering unexpected situations. Specifying goals and quality criteria instead allows the subagent to use judgment to handle unforeseen situations.\n\n**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** Step-by-step instructions are too rigid, making the subagent unable to adapt when encountering unexpected situations. Specifying goals and quality criteria instead allows the subagent to use judgment to handle unforeseen situations.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 37,
  "id": "ccar-f-q037",
  "type": "single",
  "select": 1,
  "question": "A user is expanding the research system beyond its single web search agent by adding specialized data sources. They add a financial API agent that returns structured JSON with revenue, margins, and growth rates; a news monitoring agent that returns prose summaries of recent developments; and a patent analysis agent that returns structured lists of technology areas. The synthesis agent combines these into executive briefings. Currently, it converts everything to bullet points, causing financial comparisons to lose tabular clarity and news summaries to lose narrative flow.\n\nWhat change would most improve briefing quality?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add a format conversion layer between subagents and synthesis that transforms all outputs to a common intermediate representation."
   },
   {
    "key": "B",
    "text": "Update the synthesis agent to render each content type appropriately–financial data as tables, news as prose."
   },
   {
    "key": "C",
    "text": "Standardize all subagent outputs to JSON with fields for claim, evidence, source, and confidence."
   },
   {
    "key": "D",
    "text": "Standardize all subagent outputs to prose summaries with inline citations."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Update the synthesis agent to render each content type appropriately–financial data as tables, news as prose.\n\nThe problem is that the synthesis agent converts everything to bullet points. The most direct solution is to update the synthesis agent to render each content type properly: financial data → tables, news → prose. No need to add layers or standardize outputs.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** The problem is that the synthesis agent converts everything to bullet points. The most direct solution is to update the synthesis agent to render each content type properly: financial data → tables, news → prose. No need to add layers or standardize outputs.\n\n**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 38,
  "id": "ccar-f-q038",
  "type": "single",
  "select": 1,
  "question": "The web search agent has gathered several relevant sources for a research topic. The document analysis agent now needs to examine these sources.\n\nHow does information typically flow between these two specialized subagents?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The web search agent directly invokes the document analysis agent, passing the discovered sources as parameters."
   },
   {
    "key": "B",
    "text": "The agents communicate through an event-driven message queue, with the document analysis agent subscribing to web search completion events."
   },
   {
    "key": "C",
    "text": "Both agents access a shared memory store where the web search agent writes findings and the document analysis agent reads them."
   },
   {
    "key": "D",
    "text": "The coordinator agent receives the web search agent's output and includes relevant findings in the prompt when invoking the document analysis agent."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. The coordinator agent receives the web search agent's output and includes relevant findings in the prompt when invoking the document analysis agent.\n\nIn multi-agent architecture with coordinator, information flows through the coordinator: the web search agent returns output to the coordinator, the coordinator includes relevant findings in the prompt when invoking the document analysis agent. Subagents do not directly communicate with each other.\n\n**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**B.** That adds infrastructure or indirection, but the question is really about choosing a simpler coordination pattern that fits the current workflow.\n\n**C.** This adds infrastructure but does not directly solve the failure mode described in the question.\n\n**D.** In multi-agent architecture with coordinator, information flows through the coordinator: the web search agent returns output to the coordinator, the coordinator includes relevant findings in the prompt when invoking the document analysis agent. Subagents do not directly communicate with each other.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 39,
  "id": "ccar-f-q039",
  "type": "single",
  "select": 1,
  "question": "After the web search agent and document analysis agent complete their tasks, the coordinator invokes the synthesis agent. However, the synthesis agent responds that it cannot complete the task because no research findings were provided.\n\nWhat is the most likely cause of this issue?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The subagents need to share a single API connection to enable automatic context sharing between invocations."
   },
   {
    "key": "B",
    "text": "The synthesis agent needs tools that can fetch results directly from the other agents' conversation histories."
   },
   {
    "key": "C",
    "text": "The synthesis agent's context window is not large enough to hold the combined outputs from both previous agents."
   },
   {
    "key": "D",
    "text": "The coordinator did not include the outputs from the previous agents in the synthesis agent's prompt."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. The coordinator did not include the outputs from the previous agents in the synthesis agent's prompt.\n\nSubagents do not automatically share context. The coordinator must proactively include outputs from previous agents into the prompt when invoking the synthesis agent. This is the most common error in multi-agent orchestration.\n\n**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**D.** Subagents do not automatically share context. The coordinator must proactively include outputs from previous agents into the prompt when invoking the synthesis agent. This is the most common error in multi-agent orchestration.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 40,
  "id": "ccar-f-q040",
  "type": "single",
  "select": 1,
  "question": "In production, final reports frequently contain claims without proper source attribution. Investigation shows that while the web search and document analysis agents correctly attach citations to their outputs, the synthesis agent loses track of which sources support which conclusions when combining findings.\n\nWhat's the most effective architectural change?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Maintain complete transcripts of all subagent interactions and add a citation-resolution agent to analyze logs and determine attributions before report generation."
   },
   {
    "key": "B",
    "text": "Have the coordinator inject source identifier prefixes into text before each handoff, then parse these prefixes at report generation to reconstruct citations."
   },
   {
    "key": "C",
    "text": "Add a verification step where the report generator uses semantic similarity matching against original sources to reconstruct which claims came from which documents."
   },
   {
    "key": "D",
    "text": "Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Require all subagents to output structured claim-source mappings that the synthesis agent must preserve and merge when combining findings from multiple sources.\n\nThe failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them. This matches Anthropic's multi-agent best practice of structured outputs over fragile text-prefix conventions (A), costly post-hoc log analysis (B), or unreliable semantic-similarity reconstruction (D).\n\n**A.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.\n\n**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The failure is information loss at the synthesis stage, so the fix is to carry attribution as structured data end-to-end: subagents emit explicit claim-source mappings and the synthesis agent is required to preserve and merge them. This matches Anthropic's multi-agent best practice of structured outputs over fragile text-prefix conventions (A), costly post-hoc log analysis (B), or unreliable semantic-similarity reconstruction (D).",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 41,
  "id": "ccar-f-q041",
  "type": "single",
  "select": 1,
  "question": "Production monitoring shows that follow-up queries like \"summarize what we learned about market trends\" consistently take 40+ seconds. Investigation reveals the coordinator spawns the synthesis subagent for each summarization request, passing 80K+ tokens of accumulated findings. The coordinator already has these findings in its context from orchestrating the research.\n\nWhat's the most effective way to improve response time for these follow-up summaries?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Pre-generate and cache summaries at multiple granularities whenever new findings accumulate."
   },
   {
    "key": "B",
    "text": "Spawn the synthesis subagent with reduced context and have it request specific findings from the coordinator on-demand."
   },
   {
    "key": "C",
    "text": "Enable prompt caching on the synthesis subagent to reduce the overhead of repeatedly transferring the same research findings."
   },
   {
    "key": "D",
    "text": "Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analysis."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Have the coordinator handle straightforward summarization requests directly using its existing context, reserving subagent spawning for complex analysis.\n\nThe coordinator already has findings in context from the orchestration process. Spawn synthesis subagent just to summarize is overkill (80K+ token transfer overhead). It is simply the most efficient way for the coordinator to handle summary requests themselves.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** The coordinator already has findings in context from the orchestration process. Spawn synthesis subagent just to summarize is overkill (80K+ token transfer overhead). It is simply the most efficient way for the coordinator to handle summary requests themselves.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 42,
  "id": "ccar-f-q042",
  "type": "single",
  "select": 1,
  "question": "After the web search agent finds 25 sources (120K tokens of raw content), the document analysis agent extracts key insights (15K tokens), and the synthesis agent produces a coherent narrative draft (3K tokens), the coordinator must pass context to the report generation agent for the final output with proper source citations.\n\nWhat context-passing strategy provides the best balance of completeness and efficiency?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Pass a condensed summary of all prior stages that preserves the main findings and attributes them to sources by name only."
   },
   {
    "key": "B",
    "text": "Pass the synthesis draft along with a structured source index that maps key claims to their source URLs and relevant excerpts."
   },
   {
    "key": "C",
    "text": "Pass only the synthesis draft and have a separate post-processing pipeline match claims to sources and insert citations after the report is generated."
   },
   {
    "key": "D",
    "text": "Pass the full accumulated context from all prior agents."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Pass the synthesis draft along with a structured source index that maps key claims to their source URLs and relevant excerpts.\n\nPass synthesis draft (3K tokens) + source index mapping claims to URLs/excerpts provides enough information for the report generator without transferring the entire 150K+ tokens raw content. Source index ensures accurate citations.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** Pass synthesis draft (3K tokens) + source index mapping claims to URLs/excerpts provides enough information for the report generator without transferring the entire 150K+ tokens raw content. Source index ensures accurate citations.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 43,
  "id": "ccar-f-q043",
  "type": "single",
  "select": 1,
  "question": "When analyzing complex legal cases that cite multiple precedents, the document analysis subagent processes each sequentially. A landmark case citing 12 precedents takes over 3 minutes to analyze completely.\n\nWhat's the most effective way to reduce this latency while preserving the coordinator's ability to monitor and debug the system?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create a recursive agent hierarchy where analysis agents subdivide work among child agents until reaching single-precedent granularity."
   },
   {
    "key": "B",
    "text": "Implement a message queue where precedent analysis tasks are processed asynchronously by a pool of worker agents."
   },
   {
    "key": "C",
    "text": "Enable the document analysis subagent to spawn its own specialized subagents dynamically when it encounters cases with many citations."
   },
   {
    "key": "D",
    "text": "Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Have the coordinator spawn parallel document analysis subagents, each handling a subset of precedents, then aggregate results before synthesis.\n\nAnthropic's recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place. Options B and C create nested/recursive agent hierarchies that severely degrade observability and debuggability, and D introduces asynchronous queue infrastructure that decouples work from the coordinator's direct visibility.\n\n**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.\n\n**D.** Anthropic's recommended multi-agent design is the orchestrator-worker pattern with a flat hierarchy: the coordinator itself spawns parallel subagents and aggregates their results, which cuts latency through parallelism while keeping all spawning, monitoring, and debugging centralized in one place. Options B and C create nested/recursive agent hierarchies that severely degrade observability and debuggability, and D introduces asynchronous queue infrastructure that decouples work from the coordinator's direct visibility.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 44,
  "id": "ccar-f-q044",
  "type": "single",
  "select": 1,
  "question": "In production, you're distributing complex queries to specialized subagents. The query distribution is uneven and evolving as users discover new applications.\n\nWhat's the most effective approach to optimize for query complexity?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create a fast-track path for factual questions that bypasses subagents entirely, routing only analytical queries through the complete pipeline."
   },
   {
    "key": "B",
    "text": "Implement pattern-based routing that categorizes queries based on factual vs analytical patterns and maps each to a predefined subagent combination."
   },
   {
    "key": "C",
    "text": "Train a query complexity classifier based on labeled historical data to predict optimal subagent combination."
   },
   {
    "key": "D",
    "text": "Have the coordinator analyze each query dynamically and selectively route subagents based on the query's complexity and routing characteristics."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Create a fast-track path for factual questions that bypasses subagents entirely, routing only analytical queries through the complete pipeline.\n\nFor distribution queries that are mostly factual/simple, create fast-track path bypass subagents for simple factual questions, only route analytical queries through the full pipeline. This method reduces latency and cost for the majority of queries.\n\n**A.** For distribution queries that are mostly factual/simple, create fast-track path bypass subagents for simple factual questions, only route analytical queries through the full pipeline. This method reduces latency and cost for the majority of queries.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**D.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 45,
  "id": "ccar-f-q045",
  "type": "single",
  "select": 1,
  "question": "The synthesis agent receives summarized findings from the web search and document analysis agents, then passes a consolidated summary to the report generator. During testing, you discover the generated reports make factual claims without proper citations–the report generator cannot attribute statements to their original sources because that metadata was lost during the summarization steps.\n\nWhat's the most effective approach to ensure proper source attribution in the final reports?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers)."
   },
   {
    "key": "B",
    "text": "Have the report generator query the web search agent to re-locate sources for claims in the final report."
   },
   {
    "key": "C",
    "text": "Instruct the synthesis agent to embed source references inline within its summary text using a consistent citation format."
   },
   {
    "key": "D",
    "text": "Skip summarization and pass full raw outputs from web search and document analysis directly to the report generator."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Have each agent output structured data separating content summaries from source metadata (URLs, document names, page numbers).\n\nInstead of fixing attribution after loss, each agent needs to output structured data with separate content summaries and source metadata (URLs, document names, page numbers). This ensures metadata is not lost through summarization steps.\n\n**A.** Instead of fixing attribution after loss, each agent needs to output structured data with separate content summaries and source metadata (URLs, document names, page numbers). This ensures metadata is not lost through summarization steps.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 46,
  "id": "ccar-f-q046",
  "type": "single",
  "select": 1,
  "question": "When implementing your lookup_order MCP tool, the backend sometimes returns errors (e.g., \"Order not found\" or temporary database failures).\n\nWhat is the correct pattern for communicating these errors back to the agent?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Return a success response with a \"status\" field indicating the error type"
   },
   {
    "key": "B",
    "text": "Log the error server-side and return an empty result to avoid confusing the model"
   },
   {
    "key": "C",
    "text": "Return the error message in the tool result content with the isError flag set to true"
   },
   {
    "key": "D",
    "text": "Throw an exception from the tool handler so the agent framework can catch and log it"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Return the error message in the tool result content with the isError flag set to true\n\nMCP's designed pattern: put the error text in the content field and mark isError=true. Claude sees both the failure flag and a readable message to reason about.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** MCP's designed pattern: put the error text in the content field and mark isError=true. Claude sees both the failure flag and a readable message to reason about.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 47,
  "id": "ccar-f-q047",
  "type": "single",
  "select": 1,
  "question": "After investigating a billing dispute over 25+ turns, you've identified that duplicate charges occurred due to a payment gateway timeout triggering retry logic. The required refund ($847) exceeds your $500 authorization limit. You need to call escalate_to_human, and the human agent won't have access to your conversation transcript.\n\nWhat context should you pass to enable effective resolution?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Your diagnosis and the refund amount only."
   },
   {
    "key": "B",
    "text": "The customer's original complaint verbatim plus the tool result excerpts showing duplicate transactions."
   },
   {
    "key": "C",
    "text": "A structured summary: customer ID, root cause, refund amount, and recommended action."
   },
   {
    "key": "D",
    "text": "The complete conversation transcript with all tool results."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. A structured summary: customer ID, root cause, refund amount, and recommended action.\n\nHuman agents need enough information to resolve quickly, but do not need the entire transcript. Structured summary with customer ID, root cause, refund amount and recommended action provides exactly what is needed in a concise and actionable way.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** Human agents need enough information to resolve quickly, but do not need the entire transcript. Structured summary with customer ID, root cause, refund amount and recommended action provides exactly what is needed in a concise and actionable way.\n\n**D.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 48,
  "id": "ccar-f-q048",
  "type": "single",
  "select": 1,
  "question": "Your agent has called lookup_order multiple times while investigating a customer's return requests. Each response includes 40+ fields (items, shipping details, payment info, status history). Tool outputs now represent the majority of the conversation's context. The customer mentions two more orders they want to discuss.\n\nWhat's the most effective approach before making additional lookups?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Move all tool responses to a vector database with semantic indexing, retrieving relevant portions as the conversation continues"
   },
   {
    "key": "B",
    "text": "Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details"
   },
   {
    "key": "C",
    "text": "Proceed with additional lookups without modifying the existing tool output context"
   },
   {
    "key": "D",
    "text": "Have the model generate a natural language summary of each order's key details, replacing structured responses with prose descriptions"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Extract only return-relevant fields (items, purchase date, return window, status) from each existing order response, removing verbose details\n\nWhen tool outputs take up most of the context, you need to trim down to only keep the return-relevant fields (items, purchase date, return window, status) before adding lookups. Frees the context window without losing important information.\n\n**A.** That adds infrastructure or indirection, but the question is really about choosing a simpler coordination pattern that fits the current workflow.\n\n**B.** When tool outputs take up most of the context, you need to trim down to only keep the return-relevant fields (items, purchase date, return window, status) before adding lookups. Frees the context window without losing important information.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 49,
  "id": "ccar-f-q049",
  "type": "single",
  "select": 1,
  "question": "A customer sends: \"This is frustrating. I've explained my issue twice and nothing is being resolved. I want to talk to a real person NOW.\" The agent has not yet called any tools to investigate their account.\n\nWhat should the agent do?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "First call get_customer and lookup_order to gather account context, then escalate to a human agent."
   },
   {
    "key": "B",
    "text": "Immediately call escalate_to_human with the conversation history."
   },
   {
    "key": "C",
    "text": "Briefly explain what the agent can help with and offer to resolve the issue quickly, escalating only if the customer repeats their request."
   },
   {
    "key": "D",
    "text": "Acknowledge the frustration and ask one targeted question to understand the specific issue before escalating."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Immediately call escalate_to_human with the conversation history.\n\nAn explicit request for a human agent, particularly after repeated unresolved attempts and clear frustration, should be escalated immediately. Delaying escalation to gather context, explain capabilities, or ask another question disregards the customer’s stated request.\n\n> **⚠️ Answer keys disagree**\n> Another practice source marks D instead. This course uses B because the exam objectives list \"Honoring explicit customer requests for human agents immediately without first attempting investigation\" as a tested skill.\n\n#### Alternative reasoning (supports D)\n\n- The customer says 'twice' but you don't have context yet. An empathetic question, intended to give you the opportunity to resolve it the first time without incurring frustration or delaying a potential handoff.\n\n- A. Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n- B. Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n- C. It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n- D. The customer says 'twice' but you don't have context yet. An empathetic question, intended to give you the opportunity to resolve it the first time without incurring frustration or delaying a potential handoff.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 50,
  "id": "ccar-f-q050",
  "type": "single",
  "select": 1,
  "question": "You're implementing the escalation logic for when the agent should call escalate_to_human. Your team proposes four different approaches for triggering escalation.\n\nWhich approach will most reliably identify cases that genuinely require human intervention?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Build a rules engine that maps specific issue types, customer segments, and product categories to escalation decisions, removing the need for model judgment calls."
   },
   {
    "key": "B",
    "text": "Configure the agent to escalate after three consecutive tool calls that fail to resolve the customer's stated issue, ensuring a reasonable attempt before involving a human."
   },
   {
    "key": "C",
    "text": "Implement sentiment analysis that monitors for frustration indicators (negative language, repeated questions, exclamation marks) and trigger escalation when the frustration score exceeds a configured threshold."
   },
   {
    "key": "D",
    "text": "Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Instruct the agent to escalate when the customer requests a human, when the issue requires policy exceptions, or when the agent cannot make meaningful progress.\n\nDefining clear escalation conditions (customer requests human, policy exceptions needed, no meaningful progress) is the most comprehensive and flexible approach. Rules engine (D) is too rigid, sentiment analysis (C) is not reliable enough, fixed retry count (A) is too mechanical.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Defining clear escalation conditions (customer requests human, policy exceptions needed, no meaningful progress) is the most comprehensive and flexible approach. Rules engine (D) is too rigid, sentiment analysis (C) is not reliable enough, fixed retry count (A) is too mechanical.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 51,
  "id": "ccar-f-q051",
  "type": "single",
  "select": 1,
  "question": "Your agent is handling a billing dispute. After calling get_customer and lookup_order, it identifies that the dispute involves a promotional pricing error requiring manager approval–beyond the agent's authorization level.\n\nHow should the workflow handle this mid-process escalation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Persist the complete conversation and tool response history to a database, then call escalate_to_human with a reference ID."
   },
   {
    "key": "B",
    "text": "Attempt the refund with process_refund anyway, escalating only if the system rejects the transaction."
   },
   {
    "key": "C",
    "text": "Call escalate_to_human passing only the customer's original message."
   },
   {
    "key": "D",
    "text": "Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Compile a structured handoff with customer details, order info, and the identified issue before calling escalate_to_human.\n\nMid-process escalation needs to provide enough context for the human agent. Compile structured handoff with customer details, order information and identified issue ensures the human agent has enough information to resolve without needing to re-investigate from the beginning.\n\n**A.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**D.** Mid-process escalation needs to provide enough context for the human agent. Compile structured handoff with customer details, order information and identified issue ensures the human agent has enough information to resolve without needing to re-investigate from the beginning.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 52,
  "id": "ccar-f-q052",
  "type": "single",
  "select": 1,
  "question": "During a billing dispute resolution, your agent successfully retrieves customer info via get_customer and order details via lookup_order, but when attempting to process the refund via process_refund, the tool returns a timeout error. The agent has enough information to explain the billing, confirm the refund eligibility, and verify refund eligibility, but cannot actually process the refund due to the backend failure.\n\nWhat approach best balances first-contact resolution with appropriate error handling?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement automatic retries with exponential backoff for process_refund, keeping the conversation open until the refund is successfully processed"
   },
   {
    "key": "B",
    "text": "Confirm the refund will be processed and close the conversation, since the system has all necessary information to complete it automatically"
   },
   {
    "key": "C",
    "text": "Explain the billing, confirm refund eligibility, acknowledge the system issue preventing immediate processing, and offer escalation or retry later"
   },
   {
    "key": "D",
    "text": "Escalate immediately to a human agent since the refund action cannot be completed"
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Explain the billing, confirm refund eligibility, acknowledge the system issue preventing immediate processing, and offer escalation or retry later\n\nDeliver the partial value you can (explanation + eligibility), be honest about the failure, and let the customer choose between human escalation or a retry. Classic graceful degradation.\n\n**A.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.\n\n**B.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.\n\n**C.** Deliver the partial value you can (explanation + eligibility), be honest about the failure, and let the customer choose between human escalation or a retry. Classic graceful degradation.\n\n**D.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 53,
  "id": "ccar-f-q053",
  "type": "single",
  "select": 1,
  "question": "Production logs reveal inconsistent error responses when lookup_order fails. The agent sometimes retries (wasting 3-4 turns) before concluding on the error. Your MCP tool currently returns only a plain text error message to Claude.\n\nWhat's the most effective improvement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use."
   },
   {
    "key": "B",
    "text": "Add few-shot examples to the system prompt showing how to distinguish retryable from non-retryable errors by parsing error message text."
   },
   {
    "key": "C",
    "text": "Create an analyze_error MCP tool the agent calls to determine the error type before deciding how to handle it."
   },
   {
    "key": "D",
    "text": "Implement retry logic with exponential backoff in your MCP server for all errors, returning only successful results to the agent."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.\n\nWhen the tool returns only plain text, the agent cannot distinguish transient vs permanent errors. Structured error response with retryable: false for business errors allows agents to know immediately that there is no need to retry, saving turns and improving customer experience.\n\n**A.** When the tool returns only plain text, the agent cannot distinguish transient vs permanent errors. Structured error response with retryable: false for business errors allows agents to know immediately that there is no need to retry, saving turns and improving customer experience.\n\n**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 54,
  "id": "ccar-f-q054",
  "type": "single",
  "select": 1,
  "question": "When the agent calls lookup_order and receives order details showing the item was purchased 45 days ago, how does the agentic loop determine whether to call process_refund or escalate_to_human next?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The agent executes the remaining steps in a tool sequence planned at the start of the request."
   },
   {
    "key": "B",
    "text": "The agent follows a pre-configured decision tree mapping order attributes to specific tool calls."
   },
   {
    "key": "C",
    "text": "The order details are added to the conversation and the model reasons about which action to take."
   },
   {
    "key": "D",
    "text": "The orchestration layer automatically routes to the next tool based on the order's status field."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. The order details are added to the conversation and the model reasons about which action to take.\n\nIn Claude's agentic loop, after the tool returns results, order details are added to the conversation context and the model reasons about the next action based on that information. There is no hardcoded decision tree or orchestration layer to automatically route.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** In Claude's agentic loop, after the tool returns results, order details are added to the conversation context and the model reasons about the next action based on that information. There is no hardcoded decision tree or orchestration layer to automatically route.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 55,
  "id": "ccar-f-q055",
  "type": "single",
  "select": 1,
  "question": "A customer writes: \"I've been going back and forth on this return for days. I just want to speak to someone who can actually help me.\" The agent has confirmed via lookup_order that the return is straightforward–within policy and eligible for immediate processing.\n\nWhat should the agent do?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Ask what specifically hasn't worked in previous attempts before deciding whether to escalate or resolve automatically"
   },
   {
    "key": "B",
    "text": "Acknowledge frustration, inform them this is resolvable now, and offer to complete it or escalate"
   },
   {
    "key": "C",
    "text": "Process the refund via process_refund to resolve the underlying issue, then inform them it's complete"
   },
   {
    "key": "D",
    "text": "Call escalate_to_human immediately to honor the customer's request"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Acknowledge frustration, inform them this is resolvable now, and offer to complete it or escalate\n\nReturn eligible and can be processed immediately, but customer is frustrated. Agents should not decide to escalate (A) or process without asking (C). The best approach is to acknowledge frustration, inform that the issue can be resolved immediately, and let the customer choose.\n\n**A.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**B.** Return eligible and can be processed immediately, but customer is frustrated. Agents should not decide to escalate (A) or process without asking (C). The best approach is to acknowledge frustration, inform that the issue can be resolved immediately, and let the customer choose.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 56,
  "id": "ccar-f-q056",
  "type": "single",
  "select": 1,
  "question": "Compliance requires that refunds exceeding $500 must automatically escalate to a human agent–this rule cannot be left to model discretion. Despite clear system prompt instructions, production logs show the agent occasionally processes high-value refunds directly (3% failure rate).\n\nHow should you achieve guaranteed compliance?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement a hook to intercept tool calls; when the refund process amount exceeds $500, block it and invoke human escalation."
   },
   {
    "key": "B",
    "text": "Strengthen the system prompt with emphatic language: \"CRITICAL POLICY: Refunds over $500 MUST trigger human escalation. NEVER process these directly.\""
   },
   {
    "key": "C",
    "text": "Modify the refund tool to return an error with message \"Amount exceeds policy limit–please escalate\" when threshold is exceeded."
   },
   {
    "key": "D",
    "text": "Add few-shot examples to the prompt showing correct escalation behavior at various refund amounts ($400, $500, $600)."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Implement a hook to intercept tool calls; when the refund process amount exceeds $500, block it and invoke human escalation.\n\nWhen compliance is mandatory and cannot be left to model discretion, programmatic protection needs to be implemented at the infrastructure level. Hook intercept tool calls and block refund >$500 are guaranteed compliance, regardless of model behavior or prompt interpretation.\n\n**A.** When compliance is mandatory and cannot be left to model discretion, programmatic protection needs to be implemented at the infrastructure level. Hook intercept tool calls and block refund >$500 are guaranteed compliance, regardless of model behavior or prompt interpretation.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 57,
  "id": "ccar-f-q057",
  "type": "single",
  "select": 1,
  "question": "A customer raises three separate issues during one session: a refund inquiry (turns 1-15), a subscription question (turns 16-30), and a payment method update (turns 31-45). At turn 48, the customer asks \"What happened with my refund?\" The conversation is approaching context limits.\n\nWhat strategy best maintains the agent's ability to address all issues throughout the session?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer."
   },
   {
    "key": "B",
    "text": "Rely on MCP tools to re-fetch relevant information on demand when the customer references earlier issues."
   },
   {
    "key": "C",
    "text": "Summarize earlier turns into a narrative description, preserving full message history only for the active issue."
   },
   {
    "key": "D",
    "text": "Implement sliding window context that retains the most recent 30 turns."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Extract and persist structured issue data (order IDs, amounts, statuses) into a separate context layer.\n\nA separate structured context layer preserves the exact state and key facts for every issue, including order IDs, amounts, and statuses, even when the conversational history must be compressed or truncated. This enables accurate retrieval of the earlier refund details when that issue is raised again.\n\n> **⚠️ Answer keys disagree**\n> Another practice source marks C instead. This course uses A because the exam objectives list \"Extracting transactional facts (amounts, dates, order numbers, statuses) into a persistent \"case facts\" block\" as a tested skill.\n\n#### Alternative reasoning (supports C)\n\n- Progressive summarization compresses already resolved topics while keeping the thread active verbatim – this is the classic pattern for long multi-issue conversations approaching the context limit.\n\n- A. It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n- B. It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n- C. Progressive summarization compresses already resolved topics while keeping the thread active verbatim – this is the classic pattern for long multi-issue conversations approaching the context limit.\n\n- D. It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 58,
  "id": "ccar-f-q058",
  "type": "single",
  "select": 1,
  "question": "The agent verifies customer identity through a multi-step process before resetting passwords. During testing, you notice that after the customer answers the third verification question, the agent asks them to provide their name again, as if the earlier exchange never happened.\n\nWhat's the most likely cause of this behavior?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Claude's memory retention is limited to two conversational turns by default, requiring explicit configuration to extend it."
   },
   {
    "key": "B",
    "text": "The conversation history isn't being passed in subsequent API requests."
   },
   {
    "key": "C",
    "text": "The verification tool is clearing the agent's internal state after each successful validation step."
   },
   {
    "key": "D",
    "text": "The prompt lacks instructions telling Claude to remember information across multiple exchanges."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. The conversation history isn't being passed in subsequent API requests.\n\nClaude has no inherent memory between API calls. If the agent asks again for the information provided, the most common reason is that the conversation history was not passed during subsequent API requests. Prompt instructions (A) or tool behavior (C) are not the main cause.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** Claude has no inherent memory between API calls. If the agent asks again for the information provided, the most common reason is that the conversation history was not passed during subsequent API requests. Prompt instructions (A) or tool behavior (C) are not the main cause.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 59,
  "id": "ccar-f-q059",
  "type": "single",
  "select": 1,
  "question": "Your process_refund tool returns two types of errors: technical errors (\"503 Service Unavailable\", \"Connection timeout\") that are transient (5% of calls), and business errors (\"Order exceeds 30-day return window\", \"Item already refunded\") that are permanent (12% of calls). Monitoring shows the agent wastes 3-4 turns retrying business errors that can never succeed. Currently, both error types return only a plain text message to Claude.\n\nWhat's the most effective way to reduce wasted retries while improving customer-facing response quality?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement automatic retry logic at the tool level for technical errors only, passing business errors to Claude without retries."
   },
   {
    "key": "B",
    "text": "Add few-shot examples showing how to distinguish retryable from non-retryable errors by parsing error message text."
   },
   {
    "key": "C",
    "text": "Add a check_refund_eligibility tool that must be called before process_refund to prevent business rule violations."
   },
   {
    "key": "D",
    "text": "Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Return structured error responses with retryable: false for business errors and a customer-friendly explanation for Claude to use.\n\nAdding retryable: false flag to business errors allows Claude to know immediately without retry, and customer-friendly explanation to communicate with customers. Separating retry (technical) vs no-retry (business) logic at the tool level is the cleanest solution.\n\n**A.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.\n\n**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** Adding retryable: false flag to business errors allows Claude to know immediately without retry, and customer-friendly explanation to communicate with customers. Separating retry (technical) vs no-retry (business) logic at the tool level is the cleanest solution.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 60,
  "id": "ccar-f-q060",
  "type": "single",
  "select": 1,
  "question": "A customer returns 4 hours after their initial session about the same billing dispute. The previous 32-turn session contains context: lookup_status_result messages containing \"Status: Pending Refund\" and significant tokens from prior lookup results. The agent needs to be prepared to answer the customer fully.\n\nWhat approach most reliably handles returning customers?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create a new session with a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed."
   },
   {
    "key": "B",
    "text": "Resume with state and configure the agent to automatically re-call all previous tool_results messages to ensure data freshness."
   },
   {
    "key": "C",
    "text": "Resume with the full conversation and add a system prompt instruction that instructs the agent to prioritize resolving the pending refund."
   },
   {
    "key": "D",
    "text": "Start a new session, inject a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Start a new session, inject a structured summary of the previous interaction (issue type, resolution steps, current status), then make fresh tool calls as needed.\n\nAfter 4 hours, cached data can become stale. Starting a new session with a structured summary of the previous interaction (issue type, steps taken, current status) provides the necessary context, while fresh tool calls ensure data accuracy.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** After 4 hours, cached data can become stale. Starting a new session with a structured summary of the previous interaction (issue type, steps taken, current status) provides the necessary context, while fresh tool calls ensure data accuracy.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 61,
  "id": "ccar-f-q061",
  "type": "single",
  "select": 1,
  "question": "Your extraction pipeline processes invoices and extracts line items, subtotals, tax amounts, and grand totals. During evaluation, you discover that in 18% of extractions, the sum of extracted line item amounts doesn't match the extracted grand total—sometimes due to OCR errors in the source document, sometimes due to extraction mistakes by the model. Downstream accounting systems reject records with mismatched totals.\n\nWhat's the most effective approach to improve extraction reliability?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Extract line items and totals independently, then use a separate validation model to reconcile discrepancies by determining which extracted values are most likely correct."
   },
   {
    "key": "B",
    "text": "Implement post-processing that automatically adjusts line item amounts proportionally when their sum doesn't match the stated total."
   },
   {
    "key": "C",
    "text": "Add few-shot examples demonstrating invoices where extracted line items sum correctly to the stated total, encouraging the model to produce mathematically consistent extractions."
   },
   {
    "key": "D",
    "text": "Add a \"calculated_total\" field where the model sums extracted line items alongside a \"stated_total\" field. Flag records for human review when values differ."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Add a \"calculated_total\" field where the model sums extracted line items alongside a \"stated_total\" field. Flag records for human review when values differ.\n\nCapturing both calculated_total and stated_total turns discrepancy into a first-class signal – uniformly detects both OCR errors and extraction mistakes, and routes only 18% mismatched records to human review. Auto-adjust and reconciliation model both silently fabricate/hide incorrect data for the accounting system.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**D.** Capturing both calculated_total and stated_total turns discrepancy into a first-class signal – uniformly detects both OCR errors and extraction mistakes, and routes only 18% mismatched records to human review. Auto-adjust and reconciliation model both silently fabricate/hide incorrect data for the accounting system.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 62,
  "id": "ccar-f-q062",
  "type": "single",
  "select": 1,
  "question": "An engineer asks your agent to identify untested code paths in a legacy payment processing module spanning 45 files. After reading the first 8 source files, the agent's responses are becoming noticeably less accurate — it's forgetting previously discussed code patterns and hasn't yet located all test files or traced critical payment flows.\n\nWhat's the most effective approach to complete this investigation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Switch to using Grep to search for specific function names instead of reading full files, reducing the content loaded into context for remaining exploration."
   },
   {
    "key": "B",
    "text": "Document all current findings in a summary report, clear context completely, then use that report as the sole reference for continuing the investigation."
   },
   {
    "key": "C",
    "text": "Spawn subagents to investigate specific questions (e.g., \"find all test files for payment processing\", \"trace refund flow dependencies\") while the main agent coordinates findings and preserves high-level understanding."
   },
   {
    "key": "D",
    "text": "Clear context with /clear, then selectively re-read only the most critical files discovered so far, writing key findings to a scratchpad file that persists between context resets."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Spawn subagents to investigate specific questions (e.g., \"find all test files for payment processing\", \"trace refund flow dependencies\") while the main agent coordinates findings and preserves high-level understanding.\n\nThe strongest approach is to delegate well-scoped investigations to subagents with fresh context while the main agent keeps the architectural overview. This lets the system continue deep exploration without overloading a single context window, and it preserves both detailed findings and high-level coordination.\n\n**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**B.** A summary can help, but turning it into the only source of truth strips away detail that may still be needed for accurate follow-up work.\n\n**C.** The strongest approach is to delegate well-scoped investigations to subagents with fresh context while the main agent keeps the architectural overview. This lets the system continue deep exploration without overloading a single context window, and it preserves both detailed findings and high-level coordination.\n\n**D.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 63,
  "id": "ccar-f-q063",
  "type": "single",
  "select": 1,
  "question": "The coordinator agent has AgentDefinitions configured for all four specialized subagents, each with appropriate descriptions, prompts, and tool restrictions. During testing, you notice the coordinator correctly reasons about when to delegate — it generates messages like \"I'll ask the web search agent to find sources on this topic\" — but no subagent execution ever occurs. The coordinator then proceeds as if the delegation happened and continues with incomplete information. Logs show no errors.\n\nWhat is the most likely cause?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The coordinator's allowedTools configuration doesn't include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents."
   },
   {
    "key": "B",
    "text": "Subagent context isolation means task descriptions from the coordinator don't automatically reach subagents; you need to configure explicit context forwarding in ClaudeAgentOptions."
   },
   {
    "key": "C",
    "text": "The AgentDefinitions are configured correctly, but the coordinator's system prompt doesn't explicitly list the available subagent types, preventing the model from knowing they can be invoked."
   },
   {
    "key": "D",
    "text": "The coordinator's max_tokens setting is too low, causing the Task tool invocation to be truncated before the subagent type parameter can be specified."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. The coordinator's allowedTools configuration doesn't include \"Task\", so while it can reason about delegation, it cannot invoke the tool required to spawn subagents.\n\nWithout the Task tool in allowedTools, the coordinator can talk about delegating but has no way of actually calling the subagent – true to the 'reasons about it, no execution, no errors' symptom.\n\n**A.** Without the Task tool in allowedTools, the coordinator can talk about delegating but has no way of actually calling the subagent – true to the 'reasons about it, no execution, no errors' symptom.\n\n**B.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 64,
  "id": "ccar-f-q064",
  "type": "single",
  "select": 1,
  "question": "In production, you observe that simple fact-checking queries (e.g., \"What year was the Paris Climate Agreement signed?\") traverse all four subagents sequentially, consuming 40+ seconds and significant tokens per query. Complex comparative research benefits from the full pipeline. Your query distribution is diverse and evolving as users discover new applications.\n\nWhat's the most effective approach to optimize for varying query complexity?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement pattern-based routing that categorizes queries by structure (single-fact vs. comparative vs. analytical) and maps each category to a predefined subagent combination."
   },
   {
    "key": "B",
    "text": "Create a fast-path for factual questions that bypasses subagents entirely, routing all other queries through the complete pipeline to ensure research thoroughness."
   },
   {
    "key": "C",
    "text": "Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements."
   },
   {
    "key": "D",
    "text": "Train a query complexity classifier on labeled historical data to predict optimal subagent combinations, retraining periodically as query patterns evolve."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Have the coordinator analyze each query and dynamically decide which subagents to invoke based on its assessment of query requirements.\n\nLet the LLM coordinator independently reason about each query and select only the subagents that are truly necessary – this approach adapts naturally to diverse and evolving query distributions.\n\n**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** Let the LLM coordinator independently reason about each query and select only the subagents that are truly necessary – this approach adapts naturally to diverse and evolving query distributions.\n\n**D.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 65,
  "id": "ccar-f-q065",
  "type": "single",
  "select": 1,
  "question": "Production logs reveal inconsistent error handling: when lookup_order fails, the agent sometimes retries 5+ times (wasteful when the order ID doesn't exist), sometimes escalates immediately (premature for temporary network issues), and sometimes asks users for clarification (inappropriate when the issue is a backend permission error). Investigation shows your MCP tool returns uniform error responses: {\"isError\": true, \"content\": [{\"type\": \"text\", \"text\": \"Operation failed\"}]}. The agent cannot distinguish between error types.\n\nWhat's the most effective improvement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each."
   },
   {
    "key": "B",
    "text": "Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action."
   },
   {
    "key": "C",
    "text": "Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted."
   },
   {
    "key": "D",
    "text": "Enhance error responses with structured metadata: include errorCategory (transient/validation/permission), isRetryable boolean, and a description of what caused the failure."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Enhance error responses with structured metadata: include errorCategory (transient/validation/permission), isRetryable boolean, and a description of what caused the failure.\n\nProvide agents with the necessary information to make the right decision: category, retryability and human-readable cause.\n\n**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.\n\n**D.** Provide agents with the necessary information to make the right decision: category, retryability and human-readable cause.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 66,
  "id": "ccar-f-q066",
  "type": "single",
  "select": 1,
  "question": "Users report that final reports sometimes lack depth on specific subtopics. Investigation shows that the document analysis agent frequently identifies gaps—for instance, noting \"the retrieved sources discuss API authentication but lack details on token refresh patterns\"—but under the current strict pipeline, this insight isn't actionable since search has already completed.\n\nWhat's the most effective architectural change?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient."
   },
   {
    "key": "B",
    "text": "Have the synthesis agent attach confidence scores to each section and flag areas with insufficient coverage for manual review."
   },
   {
    "key": "C",
    "text": "Add a research planning agent before the search phase that decomposes topics into specific sub- questions."
   },
   {
    "key": "D",
    "text": "Have the coordinator review analysis output for gap indicators and re-invoke search with gapinformed queries when gaps are detected."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Have the analysis agent report specific gaps to the coordinator, which triggers targeted searches and re-invokes analysis until sufficient.\n\nThe core problem is a rigid one-way pipeline where gap insights arrive after search is finished. The best fix is a closed feedback loop: the analysis agent reports specific gaps as structured output, the coordinator launches targeted follow-up searches, and analysis runs again until coverage is sufficient. That makes the missing-information signal actionable instead of leaving it as a passive observation.\n\n**A.** The core problem is a rigid one-way pipeline where gap insights arrive after search is finished. The best fix is a closed feedback loop: the analysis agent reports specific gaps as structured output, the coordinator launches targeted follow-up searches, and analysis runs again until coverage is sufficient. That makes the missing-information signal actionable instead of leaving it as a passive observation.\n\n**B.** This defers the problem rather than solving the system behavior that caused it.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 67,
  "id": "ccar-f-q067",
  "type": "single",
  "select": 1,
  "question": "This currently requires manually copy-pasting content into conversations. The team wants the agent to access this standard Jira ticket data directly.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use the Bash tool with curl to call Jira's REST API, including authentication headers and parsing JSON responses inline."
   },
   {
    "key": "B",
    "text": "Export Jira tickets to markdown files in the repository that the agent accesses using the Read tool."
   },
   {
    "key": "C",
    "text": "Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces."
   },
   {
    "key": "D",
    "text": "Build a custom MCP server wrapping Jira's API with tools designed specifically for this team's code review workflow."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Integrate an existing Jira MCP server that exposes tickets, comments, and metadata through discoverable tool interfaces.\n\nFor standard third-party service data like Jira tickets, Anthropic's recommended practice is to integrate an existing MCP server, which provides discoverable, typed tool interfaces with managed authentication. Building a custom MCP server (B) is unnecessary effort for standard ticket data, markdown exports (A) go stale and require manual syncing, and ad-hoc curl calls (D) are brittle and expose credentials inline.\n\n**A.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** For standard third-party service data like Jira tickets, Anthropic's recommended practice is to integrate an existing MCP server, which provides discoverable, typed tool interfaces with managed authentication. Building a custom MCP server (B) is unnecessary effort for standard ticket data, markdown exports (A) go stale and require manual syncing, and ad-hoc curl calls (D) are brittle and expose credentials inline.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 68,
  "id": "ccar-f-q068",
  "type": "single",
  "select": 1,
  "question": "A critical bug is affecting production users. Error logs show exceptions in the OrderProcessing module with a clear stack trace pointing to a specific area, but you haven't worked with this module before.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Start with direct execution to gather initial information, then switch to plan mode to design a comprehensive solution before implementing."
   },
   {
    "key": "B",
    "text": "Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause."
   },
   {
    "key": "C",
    "text": "Use plan mode to analyze the error in context of the module's design, enumerate potential root causes, and prioritize fixes systematically."
   },
   {
    "key": "D",
    "text": "Enter plan mode to explore the module's architecture and dependencies before attempting any fix."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Use direct execution to examine the stack trace, read the relevant code, and implement a fix once you identify the root cause.\n\nDebugging is adaptive — each file you read changes the most useful next step, so let the agent follow the evidence. The stack trace already points straight at the failure, so direct execution (read the trace read the relevant code fix once the root cause is identified) is the fastest, most reliable path.\n\n> **⚠️ Answer keys disagree**\n> Another practice source marks C (plan mode). This course keeps B because the exam objectives list \"Selecting direct execution for well-understood changes with clear scope (e.g., a single-file bug fix with a clear stack trace)\" as a tested skill.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** Debugging is adaptive — each file you read changes the most useful next step, so let the agent follow the evidence. The stack trace already points straight at the failure, so direct execution (read the trace read the relevant code fix once the root cause is identified) is the fastest, most reliable path.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 69,
  "id": "ccar-f-q069",
  "type": "single",
  "select": 1,
  "question": "After deploying the automated review, you notice high precision but low recall — real bugs are slipping through undetected. Investigation reveals your review prompt instructs Claude to \"only report high- confidence issues you are certain about\" and \"err on the side of not commenting.\" Developers appreciate the low noise, but a race condition that caused a production outage was visible in a reviewed PR and went unreported. You need to substantially improve bug detection while keeping false positive rates manageable for your team.\n\nWhat is the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Split the review into a finding stage where Claude's goal is coverage — flagging every potential issue with confidence and severity metadata — and a separate stage that thresholds those findings."
   },
   {
    "key": "B",
    "text": "Add detailed few-shot examples demonstrating bug categories Claude should flag — race conditions, null dereferences, error handling gaps — while keeping the high-confidence filtering instruction to maintain current precision levels."
   },
   {
    "key": "C",
    "text": "Expand the context window by including related test files, recent git history, and the module's dependency graph alongside the diff, giving Claude richer signals to assess issue severity."
   },
   {
    "key": "D",
    "text": "Remove the conservative filtering instructions and prompt Claude to report all potential issues, then apply a programmatic filter to deduplicate and suppress categories that historically generate false positives."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Split the review into a finding stage where Claude's goal is coverage — flagging every potential issue with confidence and severity metadata — and a separate stage that thresholds those findings.\n\nThe best approach is to separate coverage from filtering. Let the review stage report every plausible finding together with confidence and severity metadata, then apply thresholding in a later stage. This improves recall substantially without forcing the team to accept raw unfiltered output as the final review result.\n\n**A.** The best approach is to separate coverage from filtering. Let the review stage report every plausible finding together with confidence and severity metadata, then apply thresholding in a later stage. This improves recall substantially without forcing the team to accept raw unfiltered output as the final review result.\n\n**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 70,
  "id": "ccar-f-q070",
  "type": "single",
  "select": 1,
  "question": "Your remove_team_member tool uses a dry_run: boolean parameter for previewing impacts before execution. Production monitoring shows the agent bypasses the preview step in 15% of calls by calling with dry_run=false directly. You need to ensure every removal is preceded by a preview that the user explicitly confirms.\n\nWhat is the most reliable approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action."
   },
   {
    "key": "B",
    "text": "Add detailed instructions and few-shot examples to the tool description requiring the agent to always call with dry_run=true first and wait for user confirmation before calling with dry_run=false."
   },
   {
    "key": "C",
    "text": "Annotate the tool as requiring confirmation and configure the orchestration layer to prompt the user for approval before forwarding any calls to annotated tools."
   },
   {
    "key": "D",
    "text": "Add server-side validation that permits dry_run=false only when a dry_run=true call with identical parameters occurred within the past 60 seconds."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action.\n\nThe best approach is to Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Replace with two tools: preview_remove_member returns impact details and a single-use confirmation token; execute_remove_member requires that token, binding execution to the specific previewed action. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 71,
  "id": "ccar-f-q071",
  "type": "single",
  "select": 1,
  "question": "Your invoice extraction uses tool use with strict JSON schemas. JSON syntax errors never occur, but 12% of extractions fail semantic validation--for example, line Item amounts don't extracted total, or vendor IDs don't match valid formats. These failures currently route to manual review.\n\nWhat's the most effective approach to reduce manual review volume while maintaining accuracy?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement post-processing logic that automatically corrects common amors, such as recalculating totais from line items when sums don't match."
   },
   {
    "key": "B",
    "text": "Add stricter schema constraints with detailed field descriptions to prevent the model from generating invalid values initially."
   },
   {
    "key": "C",
    "text": "When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction."
   },
   {
    "key": "D",
    "text": "Retry the extraction up to 3 times when validation fallis, accepting the first result that passes validation."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction.\n\nThe best approach is to When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** The best approach is to When validation falls, make a follow-up request with the document, extraction, and validation errors for model correction. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**D.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 72,
  "id": "ccar-f-q072",
  "type": "single",
  "select": 1,
  "question": "Your system must extract event details from calendar invitations and output JSON that strictly conforms to a schema with fields for title, date, time, location, and attendees. Downstream reject any malformed or non- conformant JSON.\n\nWhat approach provides the most reliable schema compliance?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Include detailed JSON formatting instructions and the target schema in your prompt, then parse Claude's text response as JSON."
   },
   {
    "key": "B",
    "text": "Append instructions like \"Output only valid JSON matching the schema exactly\" and implement retry logic to re-prompt when JSON parsing fails."
   },
   {
    "key": "C",
    "text": "Pre-fill Claude's response with an opening brace to force JSON output, then complete and parse the response."
   },
   {
    "key": "D",
    "text": "Define a tool with your target schema as input parameters and have Claude call it with the extracted data."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Define a tool with your target schema as input parameters and have Claude call it with the extracted data.\n\nThe best approach is to Define a tool with your target schema as input parameters and have Claude call it with the extracted data. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**D.** The best approach is to Define a tool with your target schema as input parameters and have Claude call it with the extracted data. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 73,
  "id": "ccar-f-q073",
  "type": "single",
  "select": 1,
  "question": "Your extraction system uses tool_use with a JSON schema containing 12 fields and detailed descriptions, totaling approximately 2,500 tokens for the complete tool definition. Processing documents under 150K tokens yields 98% accuracy. For documents between 175-190K tokens, accuracy drops to 71%, with information from the final third consistently missed. The model's context window is 200K tokens.\n\nWhat is the most likely cause?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing."
   },
   {
    "key": "B",
    "text": "The model distributes attention proportionally across input length, causing fields mentioned only once near the document's end to receive insufficient processing focus."
   },
   {
    "key": "C",
    "text": "Schemas exceeding 8-10 fields increase decision complexity during parameter generation, reducing extraction accuracy independent of document length."
   },
   {
    "key": "D",
    "text": "Very long documents exceed the model's effective attention span regardless of context limits, causing accuracy degradation for content farther from the prompt instructions."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing.\n\nThe best approach is to Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** The best approach is to Tool definitions consume input context tokens. Combined with system prompts and document content, the total approaches the context limit, degrading end-of-document processing. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 74,
  "id": "ccar-f-q074",
  "type": "single",
  "select": 1,
  "question": "The extraction pipeline receives documents of varying types—some are invoices, others are contracts, and some are receipts. You've defined separate extraction tools, each with its own schema tailored to the document type. During testing, you observe that with tool_choice: \"auto\", Claude sometimes returns conversational text instead of calling an extraction tool, causing downstream parsing failures. You need guaranteed structured output without knowing the document type in advance.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set tool_choice: \"any\" with all extraction tools defined."
   },
   {
    "key": "B",
    "text": "Keep tool_choice: \"auto\" with system prompt instructions requiring tool use."
   },
   {
    "key": "C",
    "text": "Add a preliminary classification call, then make a second call with tool_choice forced to the identified extraction tool."
   },
   {
    "key": "D",
    "text": "Consolidate all document types into a single unified-schema extraction tool and force that tool."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Set tool_choice: \"any\" with all extraction tools defined.\n\nWhen you need guaranteed structured output but do not know the document type upfront, the most reliable approach is a two-step flow: classify first, then force tool_choice to the correct extractor. Leaving selection on auto still allows conversational responses, while collapsing everything into one giant schema usually hurts precision.\n\n**A.** When you need guaranteed structured output but do not know the document type upfront, the most reliable approach is a two-step flow: classify first, then force tool_choice to the correct extractor. Leaving selection on auto still allows conversational responses, while collapsing everything into one giant schema usually hurts precision.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 75,
  "id": "ccar-f-q075",
  "type": "single",
  "select": 1,
  "question": "Monitoring shows 12% of extractions fall Pydantic validation with specific errors like \"expected float for quantity, got '2 to 3\". Retrying these requests without modification produces failures.\n\nWhat's the most effective approach to recover from these validation failures?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Send a follow-up request including the validation error, asking the model to correct its output"
   },
   {
    "key": "B",
    "text": "Set temperature to 0 to eliminate output variability and ensure consistent formatting"
   },
   {
    "key": "C",
    "text": "Pre-process source documents to standardize problematic formats before sending them for extraction"
   },
   {
    "key": "D",
    "text": "Implement a secondary pipeline using a larger model tier to reprocess documents that fail validation"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Send a follow-up request including the validation error, asking the model to correct its output\n\nThe best approach is to Send a follow-up request including the validation error, asking the model to correct its output. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** The best approach is to Send a follow-up request including the validation error, asking the model to correct its output. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** Changing model size may affect cost or quality, but it does not directly address the root cause in this scenario.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 76,
  "id": "ccar-f-q076",
  "type": "single",
  "select": 1,
  "question": "After three months of weekly sessions, your conversation history has grown to 85,000 tokens. When users ask \"What did we conclude about the theme of isolation?\", the assistant provides generic literary analysis rather than referencing the group's specific insights from earlier sessions. Discussions often build on previous meetings' conclusions, so maintaining narrative context is important.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement rolling window truncation to keep only the most recent 25,000 tokens."
   },
   {
    "key": "B",
    "text": "Use semantic embedding to index the full conversation history and retrieve only relevant past exchanges for each user query, replacing the linear conversation format with retrieved segments."
   },
   {
    "key": "C",
    "text": "Implement progressive summarization where older conversation blocks are replaced with concise summaries that explicitly extract key conclusions, decisions, and recurring themes, keeping recent exchanges verbatim."
   },
   {
    "key": "D",
    "text": "Add structured XML tags to mark significant discussion conclusions throughout the conversation history."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Implement progressive summarization where older conversation blocks are replaced with concise summaries that explicitly extract key conclusions, decisions, and recurring themes, keeping recent exchanges verbatim.\n\nWhen a conversation grows long but still depends on earlier conclusions, progressive summarization is the most balanced approach. It compresses older discussion into reusable takeaways while preserving recent exchanges verbatim.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.\n\n**C.** When a conversation grows long but still depends on earlier conclusions, progressive summarization is the most balanced approach. It compresses older discussion into reusable takeaways while preserving recent exchanges verbatim.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 77,
  "id": "ccar-f-q077",
  "type": "single",
  "select": 1,
  "question": "You're Implementing a feature where users refine their playlist preferences through multiple conversation turns. After deploying, you notice Claude's responses don't reflect what us earlier in the same conversation— for example, a user says they love jazz, but two messages later Claude asks what genres they enjoy.\n\nWhat is the most likely cause?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Your application isn't including prior messages in the messages array"
   },
   {
    "key": "B",
    "text": "Claude requires a vector database connection to maintain conversation memory"
   },
   {
    "key": "C",
    "text": "The Claude API requires a session_id parameter that you haven't configured"
   },
   {
    "key": "D",
    "text": "The model's context window has been exceeded by the conversation length"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Your application isn't including prior messages in the messages array\n\nIf Claude immediately forgets what was said a few turns ago in the same conversation, it's usually because the application doesn't retransmit the full message history in each API call. Claude does not maintain state across requests if the application does not provide context again.\n\n**A.** If Claude immediately forgets what was said a few turns ago in the same conversation, it's usually because the application doesn't retransmit the full message history in each API call. Claude does not maintain state across requests if the application does not provide context again.\n\n**B.** This adds infrastructure but does not directly solve the failure mode described in the question.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 78,
  "id": "ccar-f-q078",
  "type": "single",
  "select": 1,
  "question": "Your home renovation planning assistant uses a system prompt defining an expert contractor persona with specific guidelines: always ask about budget, suggest alternatives at multiple price points, and confirm timeline requirements. During testing, responses follow these guidelines for turns 1-4, but by turn 7, the assistant gives generic advice without asking about budget or timeline. The conversation totals only 2,500 tokens.\n\nWhat is the most likely cause?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The model's attention on system prompt instructions naturally weakens as turns accumulate."
   },
   {
    "key": "B",
    "text": "The system prompt is only sent with the first API request."
   },
   {
    "key": "C",
    "text": "The assistant's accumulated responses are diluting the system prompt's influence."
   },
   {
    "key": "D",
    "text": "System prompts only establish initial behavior and don't persist across all turns."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. The assistant's accumulated responses are diluting the system prompt's influence.\n\nIn this case the conversation is still short compared to the context window, so the error does not come from the token limit. The most likely problem is that the influence of system prompts is diluted as conversation history accumulates, causing the model to adhere less closely to the initial guidelines.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** In this case the conversation is still short compared to the context window, so the error does not come from the token limit. The most likely problem is that the influence of system prompts is diluted as conversation history accumulates, causing the model to adhere less closely to the initial guidelines.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 79,
  "id": "ccar-f-q079",
  "type": "single",
  "select": 1,
  "question": "Users report that during extended conversations, the AI loses track of specific topics, examples, and preferences they mentioned earlier in the session. Your current implementation uses a sliding window that keeps only the most recent 25 message pairs to stay within context limits.\n\nWhat's the most effective approach to maintain awareness of earlier conversation content while managing context size?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement vector similarity search over the full conversation history, retrieving relevant past messages for each user query."
   },
   {
    "key": "B",
    "text": "Increase the window size to 50 message pairs to retain more conversation history before truncation."
   },
   {
    "key": "C",
    "text": "Add a separate API call each turn to summarize messages being dropped, prepending this running summary to the conversation."
   },
   {
    "key": "D",
    "text": "Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim.\n\nThe best approach is to Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** The best approach is to Replace the sliding window with a hybrid approach: summarize older messages while keeping recent messages verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 80,
  "id": "ccar-f-q080",
  "type": "single",
  "select": 1,
  "question": "During QA testing, you notice that Claude follows your system prompt guidelines consistently in the first 10- 15 turns, but by turn 25-30, responses begin deviating—using informal tone when formality was specified, occasionally skipping required formatting, or providing information types the guidelines restrict. Conversation length is well within context limits (typically 30,000 tokens out of 200,000 available).\n\nWhat's the most effective approach to maintain consistent behavior throughout extended conversations?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Move behavioral guidelines from the system prompt into the first user message."
   },
   {
    "key": "B",
    "text": "Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests."
   },
   {
    "key": "C",
    "text": "Automatically start a new conversation after 20 turns, passing a summary of the prior context to maintain continuity."
   },
   {
    "key": "D",
    "text": "Implement post-response validation that regenerates each response until it conforms to the specified guidelines."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests.\n\nThe best approach is to Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** The best approach is to Insert user-role messages that reinforce critical guidelines at natural conversation breakpoints, especially before complex requests. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 81,
  "id": "ccar-f-q081",
  "type": "single",
  "select": 1,
  "question": "During a conversation about order tracking, your external system receives a webhook indicating the user's package has shipped. The user is actively chatting and will likely send a follow-up message soon. You want the assistant to naturally incorporate this status change in its next response.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add the current shipping status to the system prompt before the next API call."
   },
   {
    "key": "B",
    "text": "Append the status update as a prefix to the next user message before calling the API."
   },
   {
    "key": "C",
    "text": "Immediately send an API request with the update as a synthetic user message, generating an unsolicited assistant response."
   },
   {
    "key": "D",
    "text": "Configure the assistant to call a get_order_status tool at the start of every response."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Add the current shipping status to the system prompt before the next API call.\n\nThe best approach is to Add the current shipping status to the system prompt before the next API call. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Add the current shipping status to the system prompt before the next API call. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 82,
  "id": "ccar-f-q082",
  "type": "single",
  "select": 1,
  "question": "Users report that responses feel repetitive across turns—each message begins with phrases like \"Certainly!\" or \"I'd be happy to help!\" even deep into conversations. You want responses to feel more natural, without these repetitive openers.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement post-processing to detect and strip common greeting phrases from response beginnings"
   },
   {
    "key": "B",
    "text": "Append a partial assistant message with a direct response opening that the model will continue from"
   },
   {
    "key": "C",
    "text": "Lower the temperature parameter to make response openings more deterministic and less variable"
   },
   {
    "key": "D",
    "text": "Add system prompt instructions specifying phrases to avoid, such as \"Never begin responses with 'Certainly' or similar affirmations\""
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Append a partial assistant message with a direct response opening that the model will continue from\n\nThe best approach is to Append a partial assistant message with a direct response opening that the model will continue from. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The best approach is to Append a partial assistant message with a direct response opening that the model will continue from. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 83,
  "id": "ccar-f-q083",
  "type": "single",
  "select": 1,
  "question": "Users frequently send ambiguous requests like \"book a venue for the party\" without specifying date, guest count, or budget. Your evaluation shows the assistant asks an average of 4.2 clarifying questions before taking any action, causing 35% of users to abandon mid-conversation. However, when you reduce questions, users sometimes receive recommendations that don't match their preferences.\n\nWhat's the most effective approach to improve this trade-off?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Configure the assistant to consolidate all clarifying questions into a single compound question (e.g., \"What date, guest count, and budget are you considering?\") to reduce the total number of conversational turns."
   },
   {
    "key": "B",
    "text": "Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings."
   },
   {
    "key": "C",
    "text": "Implement a structured intake form that collects all required parameters (date, guest count, budget, venue type) upfront before the assistant begins providing any recommendations."
   },
   {
    "key": "D",
    "text": "Configure the assistant to proceed with reasonable defaults (medium-sized venue, next weekend, moderate budget) without explicitly stating these assumptions, allowing users to provide corrections if results don't match expectations."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings.\n\nThe best approach is to Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.\n\n**B.** The best approach is to Instruct the assistant to state explicit assumptions based on conversation history, proceed with recommendations while inviting corrections, and reserve clarifying questions only for irreversible actions like confirming bookings. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 84,
  "id": "ccar-f-q084",
  "type": "single",
  "select": 1,
  "question": "Your conversational AI tutor has a 2,800-token system prompt containing teaching methodology, persona guidelines, and detailed written instructions for adapting explanations to different proficiency levels. User testing reveals that in conversations exceeding 12 turns (approximately 4,000 tokens of conversation history), the assistant increasingly ignores the proficiency-adaptation guidelines, defaulting to intermediate-level explanations regardless of the learner's stated level.\n\nWhat's the most effective approach to ensure consistent adherence to these guidelines throughout extended conversations?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "After each assistant response, make a separate API call to evaluate whether the difficulty level matched the learner's profile, regenerating responses that don't align."
   },
   {
    "key": "B",
    "text": "Inject a condensed reminder of the proficiency requirements into the conversation as a system message every 4-5 turns."
   },
   {
    "key": "C",
    "text": "Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth."
   },
   {
    "key": "D",
    "text": "Restructure the system prompt to place the proficiency-adaptation rules in a clearly-marked final section immediately before the conversation history begins."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth.\n\nThe best approach is to Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** The best approach is to Replace the verbose proficiency guidelines with few-shot examples demonstrating appropriate responses at each proficiency level, showing concrete differences in vocabulary, complexity, and explanation depth. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 85,
  "id": "ccar-f-q085",
  "type": "single",
  "select": 1,
  "question": "The system routes documents with extraction confidence below 85% to human review. A quarterly audit reveals that 12% of high-confidence extractions (>85%) also contain errors—cases where the model finds plausible-but-incorrect values. Error sources vary: comparison tables showing competitor specs, appendices referencing different product variants, and ambiguous phrasing the model misinterprets. You need a sustainable strategy to catch these high-confidence errors and measure whether improvements reduce the error rate over time.\n\nWhat approach is most effective?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Lower the confidence threshold from 85% to 70%, routing a larger volume of extractions to human review."
   },
   {
    "key": "B",
    "text": "Add a verification pass that re-extracts from each high-confidence document, flagging cases where the two extraction attempts produce different results."
   },
   {
    "key": "C",
    "text": "Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection."
   },
   {
    "key": "D",
    "text": "Implement heuristic rules that flag documents containing comparison tables or appendices for review regardless of confidence score."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection.\n\nThe best approach is to Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** The best approach is to Implement stratified random sampling reviewing a fixed percentage of high-confidence extractions weekly, enabling error rate measurement and novel pattern detection. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 86,
  "id": "ccar-f-q086",
  "type": "single",
  "select": 1,
  "question": "Your research assistant helps users analyze academic papers over extended conversations. User testing reveals a recurring issue: after conversations exceed 60K tokens, users ask follow-up questions requiring precise numerical details from papers discussed earlier—sample sizes, exact p-values, specific inclusion criteria. Your current approach summarizes paper discussions after 8 turns to stay within context limits. Users report that responses to these precision-dependent questions are often hedged or inaccurate.\n\nWhat's the most effective architectural change?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use a separate Claude call with explicit instructions to generate higher-fidelity summaries that preserve all numerical details and statistical values."
   },
   {
    "key": "B",
    "text": "Keep source text from methodology and results sections in context permanently, while summarizing only the conversational discussion and interpretation portions."
   },
   {
    "key": "C",
    "text": "Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected."
   },
   {
    "key": "D",
    "text": "Implement retrieval that re-injects relevant paper sections when the user's question suggests they need specific numerical details."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected.\n\nThe best approach is to Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** The best approach is to Maintain a structured database of key facts extracted from each paper (sample sizes, statistics, methods) and retrieve relevant entries into context when precision-dependent questions are detected. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 87,
  "id": "ccar-f-q087",
  "type": "single",
  "select": 1,
  "question": "A security audit requires updating your authentication library from v2 to v3. The migration guide documents breaking changes: authenticate() now returns a Promise instead of accepting a callback, the User type has restructured fields, and three deprecated methods were removed. Grep shows the library is imported in 45 files across several modules.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Update the dependency version, run the test suite, and use Claude Code to fix each failure as it appears."
   },
   {
    "key": "B",
    "text": "Create a custom slash command encapsulating the migration transformations, then execute it against each file without prior codebase exploration."
   },
   {
    "key": "C",
    "text": "Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing."
   },
   {
    "key": "D",
    "text": "Paste the migration guide's breaking changes into your prompt and use direct execution to update all usages across the 45 files."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing.\n\nThe best approach is to Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** The best approach is to Enter plan mode to explore library usage across modules, map affected code paths, then create a migration strategy before implementing. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 88,
  "id": "ccar-f-q088",
  "type": "single",
  "select": 1,
  "question": "You've asked Claude Code to build a PDF report generation feature. The initial implementation queries the database correctly, but the output has formatting issues: table columns are too narrow causing content truncation, dates display without proper formatting, and page break handling is incorrect. You've noticed these issues interact— changing column widths affects how dates render, and page breaks depend on content height.\n\nWhat's the most effective approach for iterating toward a working solution?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Start fresh with a detailed prompt specifying all formatting requirements upfront."
   },
   {
    "key": "B",
    "text": "Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change."
   },
   {
    "key": "C",
    "text": "Provide all three issues in a single detailed message with exact specifications for each, allowing Claude to address them together in one update."
   },
   {
    "key": "D",
    "text": "Show Claude an example of a correctly formatted report and ask it to match that output, rather than listing the specific technical issues."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change.\n\nThe best approach is to Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.\n\n**B.** The best approach is to Address the column width issue first with specific measurements, verify it works, then fix date formatting within the corrected columns, then adjust page breaks— testing after each change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 89,
  "id": "ccar-f-q089",
  "type": "single",
  "select": 1,
  "question": "You're implementing a new payment processing module that must follow your project's established patterns for database transactions, error handling, and audit logging. You've identified three existing modules that exemplify these patterns: db_utils.py, error_handlers.py, and audit_logger.py. This is a one-off integration task—these patterns are well-documented in your team wiki and don't need additional project-level documentation.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow."
   },
   {
    "key": "B",
    "text": "Describe the patterns from the three modules in natural language in your prompt, explaining the transaction handling approach, error format, and logging conventions Claude should follow."
   },
   {
    "key": "C",
    "text": "Add documentation of each pattern to your CLAUDE.md file, establishing them as project conventions that Claude will apply automatically."
   },
   {
    "key": "D",
    "text": "Ask Claude to explore your codebase to find and understand the transaction, error handling, and logging patterns before generating the new module."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow.\n\nThe best approach is to Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** The best approach is to Use @references to include the three modules directly in your prompt, giving Claude concrete code examples of the patterns to follow. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 90,
  "id": "ccar-f-q090",
  "type": "single",
  "select": 1,
  "question": "Your monorepo contains shared coding standards in /docs/standards/security-rules.md (for services handling user data), testing-patterns.md (for all packages), and api-conventions.md (for API-facing services). Your 15 packages are organized by feature domain (/packages/auth/, /packages/billing/, /packages/notifications/, etc.) without naming conventions indicating which handle user data or expose APIs. Package maintainers are expected to configure their own local development settings, as they understand their package's domain requirements. Currently, all package CLAUDE.md files duplicate all three standards, applying irrelevant guidance.\n\nWhat's the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create a shared-standards.nd that uses @imports to combine all three standards, then have each package's CLAUDE.md import that combined file."
   },
   {
    "key": "B",
    "text": "Create claude/rules/ files for each standard with YAML frontmatter paths listing every package directory where that standard should apply."
   },
   {
    "key": "C",
    "text": "Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge."
   },
   {
    "key": "D",
    "text": "Put all standards in the root CLAUDE.md with override instructions like \"ignore security-rules.md when working in packages that don't handle user data.\""
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge.\n\nThe best approach is to Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** The best approach is to Use @imports in each package's CLAUDE.md to reference only the specific standard files relevant to that package, based on the maintainer's domain knowledge. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 91,
  "id": "ccar-f-q091",
  "type": "single",
  "select": 1,
  "question": "The system needs to extract candidate information (name, contact details, skills, work experience, education) from uploaded resumes. The extracted data must strictly conform to a predefined JSON schema, as missing required fields or incorrect data types will cause downstream validation failures.\n\nWhat is the most reliable approach to ensure Claude's output consistently matches the schema?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response."
   },
   {
    "key": "B",
    "text": "Make two separate API calls—first extracting information as text, then asking Claude to format that text as JSON."
   },
   {
    "key": "C",
    "text": "Include detailed JSON formatting instructions and a template example in the system prompt, asking Claude to output only valid JSON."
   },
   {
    "key": "D",
    "text": "Parse Claude's text response with regex patterns to extract JSON objects, using retry logic for malformed responses."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response.\n\nThe best approach is to Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** The best approach is to Define a tool with an input schema matching your required JSON structure and extract the data from Claude's tool_use response. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 92,
  "id": "ccar-f-q092",
  "type": "single",
  "select": 1,
  "question": "Anthropic's tool use documentation states: \"Write instructive error messages. Instead of generic errors like 'failed', include what went wrong and what Claude should try next.\" A billing dispute agent uses lookup_order, which catches all exceptions and returns a tool_result with is_error: true and the message \"execution failed\". Monitoring shows two failure modes: the agent retries the identical call until hitting the turn limit, or it immediately calls escalate_to_human without trying alternative tools.\n\nWhich change follows the documented recommendation and gives Claude the information it needs to select the correct recovery action for each error type?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Return error-type-specific messages with is_error: true, e.g., \"order not found-try get_customer to search by phone\" for data errors and \"Database timeout (transient)-retry should succeed\" for infrastructure errors."
   },
   {
    "key": "B",
    "text": "Remove is_error: true and return the error details as normal tool content, so Claude reasons about the response as data rather than treating it as a flagged failure condition that biases retry behavior."
   },
   {
    "key": "C",
    "text": "Add an error classification step in the agentic loop that intercepts tool errors before Claude sees them, tags each as \"retry\" \"try_alternative,\" or \"escalate,\" and adds that recommendation to the tool result."
   },
   {
    "key": "D",
    "text": "Implement retry logic with exponential backoff inside each tool implementation so transient errors are resolved transparently within the tool before any failure result is surfaced to Claude in the agentic loop."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Return error-type-specific messages with is_error: true, e.g., \"order not found-try get_customer to search by phone\" for data errors and \"Database timeout (transient)-retry should succeed\" for infrastructure errors.\n\nThe best approach is to Return error-type-specific messages with is_error: true, e.g., \"order not found-try get_customer to search by phone\" for data errors and \"Database timeout (transient)-retry should succeed\" for infrastructure errors. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** The best approach is to Return error-type-specific messages with is_error: true, e.g., \"order not found-try get_customer to search by phone\" for data errors and \"Database timeout (transient)-retry should succeed\" for infrastructure errors. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**C.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**D.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 93,
  "id": "ccar-f-q093",
  "type": "single",
  "select": 1,
  "question": "Production logs reveal inconsistent error handling: when tool_code fails, the agent sometimes retries 5 times (even if the tool_id doesn't exist), sometimes escalates immediately (premature for temporary network issues), and sometimes adds user-friendly explanation (inappropriate when the issue is a backend permission error). Investigation shows four MCP tool returns uniform error responses: {\"status\": \"error\", \"content\": \"{\"type\": \"Error\", \"message\": \"Operation failed.\"}\"}.\n\nThe agent learns different types. What's the most effective improvement?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add a few-shot examples to the system prompt demonstrating how to interpret error message patterns and select appropriate responses for each."
   },
   {
    "key": "B",
    "text": "Create an analyze_error MCP tool the agent calls after any failure to determine the error category and recommended action."
   },
   {
    "key": "C",
    "text": "Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure."
   },
   {
    "key": "D",
    "text": "Implement retry logic with exponential backoff in your MCP server for all errors, returning to the agent only after retries are exhausted."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure.\n\nThe best approach is to Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** The best approach is to Enhance error responses with structured metadata. Include error_category (transient/retriable/permission), reason, and a description of what caused the failure. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 94,
  "id": "ccar-f-q094",
  "type": "single",
  "select": 1,
  "question": "Your code review prompts include both implementation changes and the corresponding test file, but the LLM's review comments fail to point out untested code paths. Analysis reveals the model correctly flags functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functions that have no tests at all, but fails to identify when conditional branches or error-handling paths within tested functio lack coverage.\n\nWhat's the most effective way to improve detection of branch-level coverage gaps without overcomplicating the pipeline?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Restructure the prompt to interleave implementation and tests, presenting each function followed immediately by its test cases"
   },
   {
    "key": "B",
    "text": "Implement a multi-pass pipeline where separate LLM calls first extract all conditional branches, then cross-reference each against test assertions in a second pass."
   },
   {
    "key": "C",
    "text": "Add explicit instructions directing the model to enumerate each conditional branch and exception path, then verify each has a corresponding test assertion."
   },
   {
    "key": "D",
    "text": "Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case.\n\nThe best approach is to Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** The best approach is to Include few-shot examples showing code with an uncovered branch paired with the review comment identifying the specific missing test case. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 95,
  "id": "ccar-f-q095",
  "type": "single",
  "select": 1,
  "question": "Your pipeline uses a tool called extract_metadata with a JSON schema for paper details. You've also defined lookup_citations and verify_doi tools for enrichment. During testing, you notice that when users include requests like \"extract the metadata and tell me how cited it is,\" Claude sometimes calls lookup_citations first, which fails because it needs the DOI that extract_metadata would provide.\n\nWhat's the most effective way to ensure structured metadata extraction happens first?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set tool_choice to \"any\" so Claude must use a tool, combined with system prompt instructions prioritizing extract_metadata."
   },
   {
    "key": "B",
    "text": "Set tool_choice to {\"type\": \"tool\", \"name\": \"extract_metadata\"} for every API call in the pipeline, ensuring Claude always extracts metadata before any enrichment can occur."
   },
   {
    "key": "C",
    "text": "Set tool_choice to \"auto\" and reorder the tool definitions so extract_metadata appears first in the tools array, since Claude prioritizes earlier-listed tools."
   },
   {
    "key": "D",
    "text": "Set tool_choice to {\"type\": \"tool\", \"name\": \"extract_metadata\"} and process the enrichment requests in subsequent turns after receiving the extracted metadata."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Set tool_choice to {\"type\": \"tool\", \"name\": \"extract_metadata\"} and process the enrichment requests in subsequent turns after receiving the extracted metadata.\n\ntool_choice=specific-tool deterministically forces extract_metadata on the first turn. Then you hand control back to 'auto' to let the model use citations/DOI enrichment with the metadata in context.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.\n\n**D.** tool_choice=specific-tool deterministically forces extract_metadata on the first turn. Then you hand control back to 'auto' to let the model use citations/DOI enrichment with the metadata in context.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 96,
  "id": "ccar-f-q096",
  "type": "single",
  "select": 1,
  "question": "Your pipeline reviews every PR using a single API call with a static prompt containing the diff and full text of each changed file — unchanged files are not included. Reviews are posted asynchronously and don't block PR creation. Developers report that reviews consistently miss bugs involving cross-file interactions — for example, a PR renames a function's parameters but the review doesn't flag callers in unchanged files that still use the old argument order. Evaluation shows cross-file bugs account for 35% of production incidents from reviewed PRs.\n\nWhat is the most effective change to your review design?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Run parallel review passes per changed file with direct dependents included in each pass, then aggregate and deduplicate findings using a final summarization call."
   },
   {
    "key": "B",
    "text": "Use static analysis to build a dependency graph of changed code, then expand the prompt to include all files within two dependency hops of any changed file."
   },
   {
    "key": "C",
    "text": "Add chain-of-thought instructions asking the model to list all external references in the diff, then reason step-by-step about how each change might affect callers in other files."
   },
   {
    "key": "D",
    "text": "Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Redesign the review as a turn-limited agentic task where the model can read files and search the codebase via tools, following references to verify cross-file findings.\n\nThe failure is a missing-context problem: callers live in unchanged files the static prompt never includes, so chain-of-thought (B) cannot help the model reason about code it cannot see, and static heuristics (C, D) bloat context while still missing dynamic or multi-hop references. Anthropic's agent guidance favors agentic search — letting the model retrieve exactly the context it needs via file-read/search tools — and the asynchronous, nonblocking review pipeline tolerates the added latency, while a turn limit bounds cost.\n\n**A.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** The failure is a missing-context problem: callers live in unchanged files the static prompt never includes, so chain-of-thought (B) cannot help the model reason about code it cannot see, and static heuristics (C, D) bloat context while still missing dynamic or multi-hop references. Anthropic's agent guidance favors agentic search — letting the model retrieve exactly the context it needs via file-read/search tools — and the asynchronous, nonblocking review pipeline tolerates the added latency, while a turn limit bounds cost.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 97,
  "id": "ccar-f-q097",
  "type": "single",
  "select": 1,
  "question": "Your search Flights tool calls an external airline API that occasionally returns a 503 Service Unavailable error.\n\nWhat is the most effective way to handle this error in your tool implementation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Log the error internally and return an empty response, letting the model continue without the flight data."
   },
   {
    "key": "B",
    "text": "Automatically retry the request up to five times with exponential backoff before returning results to the agent."
   },
   {
    "key": "C",
    "text": "Return an empty flight list as if the search succeeded but found no matching flights."
   },
   {
    "key": "D",
    "text": "Return an error message in the tool result explaining the service is temporarily unavailable."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Automatically retry the request up to five times with exponential backoff before returning results to the agent.\n\nThe best approach is to Automatically retry the request up to five times with exponential backoff before returning results to the agent. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** The best approach is to Automatically retry the request up to five times with exponential backoff before returning results to the agent. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 98,
  "id": "ccar-f-q098",
  "type": "single",
  "select": 1,
  "question": "Your agent has a log_workout tool that accepts exercise_type (string), value (number), and measurement (string). Production monitoring shows the agent frequently passes mismatched combinations-using measurement: \"reps\" for cardio exercises like running, or measurement: \"miles\" for strength exercises like bench press. Your exercises naturally divide into two categories: cardio (measured in time or distance) and strength (measured in reps and sets). 23% of tool calls have invalid combinations.\n\nWhat approach would most effectively reduce these errors?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add explicit examples to the tool description showing valid combinations (e.g., \"For running: use minutes or miles. For push-ups: use reps\") with constraints for each exercise category."
   },
   {
    "key": "B",
    "text": "Implement server-side validation returning descriptive errors for invalid combinations, allowing the agent to retry with corrections."
   },
   {
    "key": "C",
    "text": "Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters)."
   },
   {
    "key": "D",
    "text": "Add enum constraints on measurement limiting values to \"minutes\", \"miles\", \"reps\", or \"sets\" to prevent arbitrary measurement strings."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters).\n\nThe best approach is to Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters). This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**B.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**C.** The best approach is to Split into log_cardio_workout (with duration_minutes or distance_miles parameters) and log_strength_workout (with reps and sets parameters). This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 99,
  "id": "ccar-f-q099",
  "type": "single",
  "select": 1,
  "question": "During initial testing, you notice that Claude doesn't seem to remember vocabulary words from earlier in the conversation. When a student asks \"Can you quiz me on those words?\", responds as if no words have been discussed.\n\nWhat is the most likely explanation?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "You need to enable conversation persistence by passing a session ID parameter with each API call."
   },
   {
    "key": "B",
    "text": "Your system prompt needs explicit instructions telling Claude to remember information from earlier turns."
   },
   {
    "key": "C",
    "text": "The model's context window has filled up, causing earlier conversation content to be dropped."
   },
   {
    "key": "D",
    "text": "You're not including prior messages in each API request—the stateless API doesn't retain conversation history."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. You're not including prior messages in each API request—the stateless API doesn't retain conversation history.\n\nThe best approach is to You're not including prior messages in each API request—the stateless API doesn't retain conversation history. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The best approach is to You're not including prior messages in each API request—the stateless API doesn't retain conversation history. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 100,
  "id": "ccar-f-q100",
  "type": "single",
  "select": 1,
  "question": "A new user's first message is \"Set up my focus music,\" This could mean configure preferences, create a playlist, or play music immediately. Your system supports all three actions.\n\nWhat's the effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Play popular focus tracks Immediately and let the user redirect if needed"
   },
   {
    "key": "B",
    "text": "Start preference configuration by asking about genres, temps, and artists they prefer for focus."
   },
   {
    "key": "C",
    "text": "Create a new \"Focus\" playlist with curated tracks and notify the user it's ready."
   },
   {
    "key": "D",
    "text": "Ask one clarifying question about action type: play now or configure for later"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Ask one clarifying question about action type: play now or configure for later\n\nThe best approach is to Ask one clarifying question about action type: play now or configure for later. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The best approach is to Ask one clarifying question about action type: play now or configure for later. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 101,
  "id": "ccar-f-q101",
  "type": "single",
  "select": 1,
  "question": "Your conversational assistant frequently generates multiple clarifying questions when users make ambiguous requests. When a user asks \"Can you help me with the report?\", the assistant responds: \"I'd be happy to help! Could you tell me: 1) Which report? 2) What kind of help—drafting, reviewing, or formatting? 3) What's your deadline?\" User analytics show a 40% conversation abandonment rate after these multi-question responses.\n\nWhat's the most effective way to reduce friction while appropriately handling ambiguity?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Limit the assistant to one clarifying question per turn, using conversation history to accumulate answers over multiple exchanges rather than requesting everything upfront."
   },
   {
    "key": "B",
    "text": "Add a preprocessing step using a smaller model to classify request ambiguity on a 1-5 scale, routing high-ambiguity requests to a clarification dialog and low-ambiguity requests directly to the assistant."
   },
   {
    "key": "C",
    "text": "Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong."
   },
   {
    "key": "D",
    "text": "Create a lookup table of common request patterns with predefined default interpretations, having the assistant respond with those defaults without stating the assumptions made."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong.\n\nThe best approach is to Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** Changing model size may affect cost or quality, but it does not directly address the root cause in this scenario.\n\n**C.** The best approach is to Modify the system prompt to instruct the assistant to make reasonable assumptions from available context, state those assumptions explicitly, and offer to adjust if the interpretation is wrong. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 102,
  "id": "ccar-f-q102",
  "type": "single",
  "select": 1,
  "question": "You need to add a date validation check ensuring event dates are in the future. This requires adding a conditional statement to one existing function in a single file.\n\nWhat is the most appropriate approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Enter plan mode to analyze how the validation might impact other parts of the reservation flow"
   },
   {
    "key": "B",
    "text": "Start with extended thinking mode enabled to ensure thorough reasoning about the validation logic"
   },
   {
    "key": "C",
    "text": "Enter plan mode first to create a detailed implementation strategy before making the change"
   },
   {
    "key": "D",
    "text": "Use direct execution to make the change"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Use direct execution to make the change\n\nThe best approach is to Use direct execution to make the change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The best approach is to Use direct execution to make the change. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 103,
  "id": "ccar-f-q103",
  "type": "single",
  "select": 1,
  "question": "Your team's CLAUDE.md includes a rule: \"Use 4-space indentation and always run Prettier formatting.\" Despite this, code reviews reveal that roughly 30% of files Claude Code generates use inconsistent formatting — sometimes 2-space indentation, sometimes missing trailing commas. Adding emphasis (\"IMPORTANT: You MUST use Prettier formatting\") reduces violations to about 15%, but doesn't eliminate them.\n\nWhat is the most effective way to ensure all generated code is consistently formatted?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Extract the formatting rules into a dedicated skill that Claude loads automatically when generating code, with more detailed examples of correct formatting."
   },
   {
    "key": "B",
    "text": "Add a Stop hook with a prompt-based check that evaluates whether generated code follows formatting standards and prompts Claude to fix violations."
   },
   {
    "key": "C",
    "text": "Split the formatting rules into path-scoped .claude/rules/ files that load when Claude works on matching file types."
   },
   {
    "key": "D",
    "text": "Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies.\n\nThe best approach is to Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The best approach is to Configure a Post ToolUse hook with an Edit|Write matcher that automatically runs Prettier on each file Claude modifies. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 104,
  "id": "ccar-f-q104",
  "type": "single",
  "select": 1,
  "question": "You're implementing a caching layer for API responses to speed up the /products endpoint. You have a rough idea—Redis with a 5-minute TTL—but you're new to production caching and aren't sure what other considerations a robust implementation requires.\n\nWhat's the most effective way to start your iterative workflow?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes."
   },
   {
    "key": "B",
    "text": "Write a specification with your known requirements and \"TBD\" markers for uncertain areas, having Claude propose solutions for each TBD as it implements."
   },
   {
    "key": "C",
    "text": "Use plan mode to analyze the current/products endpoint implementation, then provide your caching requirements once Claude explains how the existing code is structured."
   },
   {
    "key": "D",
    "text": "Start with a minimal request: \"Add Redis caching to/products with 5-minute TTL.\" Add features and fix issues through follow-up prompts as problems surface during testing."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes.\n\nThe best approach is to Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Ask Claude to interview you about the caching requirements before implementing, surfacing considerations like invalidation strategies, cache layers, consistency guarantees, and failure modes. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 105,
  "id": "ccar-f-q105",
  "type": "single",
  "select": 1,
  "question": "You've asked Claude to write a data migration script, but the initial output doesn't correctly handle records with null values in required fields.\n\nWhat's the most effective way to iterate toward a working solution?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Manually edit the generated code to fix the null handling, then continue working with Claude on other parts."
   },
   {
    "key": "B",
    "text": "Add \"think harder about edge cases\" to your prompt and request a complete rewrite of the migration logic."
   },
   {
    "key": "C",
    "text": "Describe the null value problem in detail and ask Claude to regenerate the entire script with improved edge case handling."
   },
   {
    "key": "D",
    "text": "Provide a test case with example input containing null values and the expected output, then ask Claude to fix it."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Provide a test case with example input containing null values and the expected output, then ask Claude to fix it.\n\nThe best approach is to Provide a test case with example input containing null values and the expected output, then ask Claude to fix it. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The best approach is to Provide a test case with example input containing null values and the expected output, then ask Claude to fix it. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 106,
  "id": "ccar-f-q106",
  "type": "single",
  "select": 1,
  "question": "Production monitoring shows the research phase takes longer than expected. Analysis reveals the coordinator invokes the web search subagent, then invokes the document analysis subagent and waits again. These tasks are independent—neither requires the other's output.\n\nWhat is the most effective way to run these subagents concurrently?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create an async orchestration layer outside the agent that spawns parallel threads, each running a separate coordinator."
   },
   {
    "key": "B",
    "text": "Add detailed instructions to the coordinator's system prompt explaining the performance benefits of parallel execution at the same time."
   },
   {
    "key": "C",
    "text": "Switch both subagents to use a Haiku-tier model instead of Sonnet to reduce their individual execution time."
   },
   {
    "key": "D",
    "text": "Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message.\n\nThe best approach is to Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.\n\n**A.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.\n\n**D.** The best approach is to Structure the coordinator to emit both Task tool calls (for web search and document analysis) in a single response message. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 107,
  "id": "ccar-f-q107",
  "type": "single",
  "select": 1,
  "question": "Your automated review calls the Claude API for each PR, using tool_use with a report_findings tool that returns a JSON array of finding objects (each with file_path, line_number, severity, category, and description). During testing on a large PR touching 30+ files, the response hits the max_tokens limit and the output is truncated mid-JSON, causing your pipeline's parser to fail.\n\nWhat is the most effective way to handle this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase max_tokens to the model's maximum and instruct Claude to keep finding descriptions under 50 words each."
   },
   {
    "key": "B",
    "text": "Switch from tool_use to prompting Claude to return findings as a markdown list."
   },
   {
    "key": "C",
    "text": "Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays."
   },
   {
    "key": "D",
    "text": "Add retry logic that detects truncated JSON and re-sends the request with instructions to report only critical and high severity findings."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays.\n\nThe best approach is to Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** The best approach is to Split the review into multiple API calls that each analyze a subset of the changed files, then merge the resulting findings arrays. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 108,
  "id": "ccar-f-q108",
  "type": "single",
  "select": 1,
  "question": "An engineer sees an unfamiliar error message \"SYNC_CONFLICT: entity version mismatch detected\" in production logs but doesn't know which of the 12 services in the codebase generates it. They ask the agent to help locate the source code.\n\nWhat exploration approach will most efficiently find the responsible code?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Read the project's README and service configuration files to understand the architecture, then systematically Read source files in service directory."
   },
   {
    "key": "B",
    "text": "Use Glob to find files in directories commonly associated with error handling (such as errors/, exceptions/, or handlers/) across services, then Read each matching file."
   },
   {
    "key": "C",
    "text": "Use Grep to find all files that import the project's error handling module, then Read those files to locate custom error definitions."
   },
   {
    "key": "D",
    "text": "Use Grep to search for distinctive text from the error message (like \"SYNC_CONFLICT\" or \"entity version mismatch\"), then Read the matching files to understand context."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Use Grep to search for distinctive text from the error message (like \"SYNC_CONFLICT\" or \"entity version mismatch\"), then Read the matching files to understand context.\n\nThe best approach is to Use Grep to search for distinctive text from the error message (like \"SYNC_CONFLICT\" or \"entity version mismatch\"), then Read the matching files to understand context. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**D.** The best approach is to Use Grep to search for distinctive text from the error message (like \"SYNC_CONFLICT\" or \"entity version mismatch\"), then Read the matching files to understand context. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 109,
  "id": "ccar-f-q109",
  "type": "single",
  "select": 1,
  "question": "An engineer asks your agent to add comprehensive tests to a legacy codebase with 200 files and minimal existing test coverage. The engineer hasn't specified which modules to prioritize.\n\nHow should the agent decompose this open-ended task?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Systematically read all 200 files to create a complete function inventory before writing any tests, ensuring the testing plan accounts for every function before beginning."
   },
   {
    "key": "B",
    "text": "Start writing tests for the first module alphabetically, using test failures and imports to discover related files organically."
   },
   {
    "key": "C",
    "text": "Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered."
   },
   {
    "key": "D",
    "text": "Create a fixed testing schedule upfront based on directory structure, allocating equal effort to each top-level directory regardless of code complexity or business importance."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Use Glob and Grep to map codebase structure, identify heavily-coupled modules, create a prioritized plan for high-impact areas, and revise as dependencies are discovered.\n\nAnthropic's agent best practices favor efficient context gathering with search tools (Glob/Grep) over exhaustively reading every file, which would waste context and time. Prioritizing high-impact, heavily-coupled modules and iteratively revising the plan as dependencies surface is the correct way to decompose an open-ended task; A is wasteful, B ignores impact/complexity, and C is arbitrary and unplanned.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Anthropic's agent best practices favor efficient context gathering with search tools (Glob/Grep) over exhaustively reading every file, which would waste context and time. Prioritizing high-impact, heavily-coupled modules and iteratively revising the plan as dependencies surface is the correct way to decompose an open-ended task; A is wasteful, B ignores impact/complexity, and C is arbitrary and unplanned.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 110,
  "id": "ccar-f-q110",
  "type": "single",
  "select": 1,
  "question": "Your productivity agent connects to three MCP servers: an issue tracker (search_issues, get_issue, create_comment), a documentation wiki (search_docs, get_page, list_spaces), and a database explorer (run_query, get_schema, list_databases). When engineers ask cross-system questions like \"What database tables are affected by the authentication refactor in PROJ-1234?\", monitoring shows the agent makes 8-10 sequential tool calls, frequently issues exploratory calls because it lacks visibility into what content each server contains, and exhausts context space before completing complex investigations.\n\nWhat architectural change best leverages MCP capabilities to address these issues?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add an orchestrator that routes questions to a single server based on keywords"
   },
   {
    "key": "B",
    "text": "Expose each server's content catalog as MCP resources—issue summaries, documentation hierarchy, database schemas"
   },
   {
    "key": "C",
    "text": "Add a prepare_investigation tool to each server that accepts a natural language question and returns relevant content summaries"
   },
   {
    "key": "D",
    "text": "Consolidate all three servers into a unified MCP server with cross-referencing capabilities"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Expose each server's content catalog as MCP resources—issue summaries, documentation hierarchy, database schemas\n\nMCP resources are the protocol primitive designed for exactly this problem: servers expose browsable, application-controlled context (issue summaries, doc hierarchies, database schemas) that the agent can discover and read without exploratory tool-call round trips, directly fixing the visibility gap and context exhaustion. A rebuilds a monolith against MCP's composable design, C just adds more tools without leveraging MCP capabilities, and D's single-server keyword routing breaks inherently cross-system questions.\n\n**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**B.** MCP resources are the protocol primitive designed for exactly this problem: servers expose browsable, application-controlled context (issue summaries, doc hierarchies, database schemas) that the agent can discover and read without exploratory tool-call round trips, directly fixing the visibility gap and context exhaustion. A rebuilds a monolith against MCP's composable design, C just adds more tools without leveraging MCP capabilities, and D's single-server keyword routing breaks inherently cross-system questions.\n\n**C.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**D.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 111,
  "id": "ccar-f-q111",
  "type": "single",
  "select": 1,
  "question": "The synthesis agent completes its initial pass but flags that three key research questions remain unanswered because the web search and document analysis agents didn't find relevant information on those specific subtopics. The coordinator currently proceeds directly to report generation, producing reports with incomplete coverage.\n\nWhat change would most effectively improve research completeness?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Increase the initial breadth of queries sent to web search and document analysis to reduce the probability of missing relevant information."
   },
   {
    "key": "B",
    "text": "Give the synthesis agent direct access to web search tools so it can autonomously fill knowledge gaps without returning control to the coordinator."
   },
   {
    "key": "C",
    "text": "Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again."
   },
   {
    "key": "D",
    "text": "Have the report generation agent note which research questions couldn't be answered, so users understand the limitations of the final output."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again.\n\nThe best approach is to Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.\n\n**A.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**B.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n**C.** The best approach is to Have the coordinator evaluate synthesis output for gaps, then re-delegate to web search and document analysis with targeted queries before Invoking synthesis again. This fits the coordination problem described and makes responsibilities, delegation, or handoff behavior more reliable.\n\n**D.** It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 112,
  "id": "ccar-f-q112",
  "type": "single",
  "select": 1,
  "question": "Your documents (query) tool returns results as \"Found 3 documents: Q2 Budget Proposal, Q2 Budget Forecast, Annual Review\". You want the agent to document (4, multi) and doc (24, multi).\n\n What return format would best enable these multi-step workflows?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Structured data containing document IDs and metadata for each result."
   },
   {
    "key": "B",
    "text": "URLs that users can click to open the document in their browser."
   },
   {
    "key": "C",
    "text": "More detailed human-readable descriptions including the size and authors."
   },
   {
    "key": "D",
    "text": "A JSON array of document titles extracted from the search results."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Structured data containing document IDs and metadata for each result.\n\nThe best approach is to Structured data containing document IDs and metadata for each result. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Structured data containing document IDs and metadata for each result. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 113,
  "id": "ccar-f-q113",
  "type": "single",
  "select": 1,
  "question": "Your agent has access to 50+ specialized API connectors for different external services. As the connector library grew, tool selection accuracy dropped to 58%. You design a search_connectors(description) tool that finds matching connectors, but in testing agents frequently skip searching and call connectors directly (often incorrectly), or search select wrong connectors from the filtered results.\n\nHow should you design the tool composition pattern to address both issues?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Design connectors with built-in compatibility validation that return descriptive errors for mismatched requests."
   },
   {
    "key": "B",
    "text": "Enhance all connector descriptions with detailed usage samples, edge cases, and input requirements. Add few-shot examples showing the correct search-then-use workflow."
   },
   {
    "key": "C",
    "text": "Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered."
   },
   {
    "key": "D",
    "text": "Design a find_and_execute(description, params) composite tool that searches and immediately executes the best matching connector."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered.\n\nThe best approach is to Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**A.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**C.** The best approach is to Design search_connectors to dynamically add matched connectors to the agent's available tools. Connectors start unavailable and persist once discovered. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**D.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 114,
  "id": "ccar-f-q114",
  "type": "single",
  "select": 1,
  "question": "Your publish article tool calls an external CMS API that occasionally returns transient errors (network timeouts, 503s) and non-transient errors (403 permission denied, 422 validation failure). Currently, every error is returned directly to the agent, which leads to the agent retrying non-transient errors and wasting turns on failures that will never succeed.\n\nHow should you partition error-handling responsibility between the tool implementation and the agent?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement a universal error handler that catches all exceptions and returns a generic \"tool unavailable- try again later\" message, shielding the agent from error complexity."
   },
   {
    "key": "B",
    "text": "Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action."
   },
   {
    "key": "C",
    "text": "Handle all errors inside the tool: Implement retries with exponential backoff for every error type, and only surface a failure to the agent after a fixed number of retry attempts have been exhausted."
   },
   {
    "key": "D",
    "text": "Surface all errors to the agent immediately with detailed context, and let the agent decide which errors to retry and how many times-keeping the tool implementation stateless and simple."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action.\n\nThe best approach is to Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** The best approach is to Handle transient errors (timeouts, 503s) with automatic retries inside the tool implementation, and surface non-transient errors (permission denied, validation fallures) to the agent with descriptive messages so it can take corrective action. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**C.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.\n\n**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 115,
  "id": "ccar-f-q115",
  "type": "single",
  "select": 1,
  "question": "Your scheduling agent uses get_available_slots(date, provider_id) to retrieve open appointment times, then book_appointment(provider_id, slot_time, patient_id) to reserve a slot. tickets show that 15% of booking attempts fall with \"slot no longer available\" because another user booked the slot between the availability check and the booking call.\n\nHow should you refactor these tools?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Modify book_appointment to return detailed failure information including currently available alternative slots when the requested slot is unavailable, enabling the agent to retry with a different time."
   },
   {
    "key": "B",
    "text": "Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives."
   },
   {
    "key": "C",
    "text": "Add a hold_slot(provider_id, slot_time) tool that creates a 60 second temporary reservation, requiring the agent to call it between checking availability and booking."
   },
   {
    "key": "D",
    "text": "Keep both tools but add retry logic to the agent's system prompt, instructing it to call get_available_slots again and select a different time if booking fails."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives.\n\nThe best approach is to Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** This is incorrect because retrying by itself does not resolve the underlying cause unless the failure is clearly transient.\n\n**B.** The best approach is to Combine both tools into a single find_and_book_appointment that atomically checks availability and books, returning either the confirmed booking or available alternatives. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 116,
  "id": "ccar-f-q116",
  "type": "single",
  "select": 1,
  "question": "Production monitoring shows your search_catalog tool fails 12% of the time: 8% are network timeouts that succeed when immediately retried, while 4% are query syntax errors from malformed user-provided filters that never succeed regardless of retry attempts. Currently, both error types are returned to the agent identically, causing it to waste turns retrying syntax errors and telling users to \"try again later\" for timeouts.\n\nHow should you modify the tool's error handling?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add few-shot examples to your system prompt demonstrating how to distinguish network errors from syntax errors and handle each case appropriately."
   },
   {
    "key": "B",
    "text": "Return all errors with a retryable boolean flag and error type details."
   },
   {
    "key": "C",
    "text": "Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details."
   },
   {
    "key": "D",
    "text": "Apply exponential backoff retry logic to all errors uniformly, returning a generic \"service temporarily unavailable\" message after max retries are exhausted."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details.\n\nThe best approach is to Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**B.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.\n\n**C.** The best approach is to Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**D.** Retrying only helps when the problem is transient; it does not fix a design or classification problem by itself.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 117,
  "id": "ccar-f-q117",
  "type": "single",
  "select": 1,
  "question": "Your document extraction tool uses ML models to extract invoice fields (vendor, amount, date). The models return confidence scores (0.0-1.0) for each extracted field. In production, you observe: (1) the agent proceeds with low-confidence extractions that are incorrect 23% of the time, and (2) the agent requests unnecessary human review for 31% of extractions that were actually correct.\n\nHow should you restructure the tool's output?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Compute an aggregate extraction quality score across all fields and return it alongside the extracted values. Include a text summary describing the overall extraction reliability."
   },
   {
    "key": "B",
    "text": "Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review."
   },
   {
    "key": "C",
    "text": "Return fields organized into verified and needs_verification objects based on confidence thresholds."
   },
   {
    "key": "D",
    "text": "Return fields with their raw confidence scores and add detailed few-shot examples to your system prompt demonstrating how to interpret different confidence ranges and when to request human review."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review.\n\nThe best approach is to Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The best approach is to Return fields with confidence scores, plus a requires_review boolean computed using your tested confidence thresholds, along with a review_reasons array explaining which fields triggered review. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 118,
  "id": "ccar-f-q118",
  "type": "single",
  "select": 1,
  "question": "Your agent includes an update_game_score tool that accepts game_date (string), home_team (string), and away_team (string) parameters. Production logs reveal recurring issues: the agent uses team nicknames instead of official names, applies inconsistent date formats, and selects the wrong game when teams have rematches in the same season.\n\nWhat tool interface change would effectively prevent these errors?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add a season parameter to disambiguate rematches, and add a confirm_before_update flag that returns the resolved game details for the agent to verify before the score is committed."
   },
   {
    "key": "B",
    "text": "Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs."
   },
   {
    "key": "C",
    "text": "Add enum constraints listing valid team names for both team parameters, and add a regex pattern enforcing ISO 8601 format for the date parameter."
   },
   {
    "key": "D",
    "text": "Add detailed examples to the tool description showing the required date format and complete list of official team names."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs.\n\nThe best approach is to Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** The best approach is to Replace the three parameters with a single game_id parameter and a separate search_games lookup tool that returns matching game IDs. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 119,
  "id": "ccar-f-q119",
  "type": "single",
  "select": 1,
  "question": "You've configured the system so that all four subagents have access to the complete set of 18 tools. During testing, agents frequently call tools outside their specialization—the synthesis agent attempts web searches, and the report generator tries to analyze documents.\n\nWhat is the primary cause of this poor tool selection behavior?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The agents' role descriptions in their system prompts conflict with having access to tools outside that role."
   },
   {
    "key": "B",
    "text": "The tool definitions consume too much context window space, leaving insufficient room for task content."
   },
   {
    "key": "C",
    "text": "The coordinator cannot track which capabilities each subagent has, leading to misrouted tasks."
   },
   {
    "key": "D",
    "text": "Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds.\n\nThe best approach is to Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**C.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**D.** The best approach is to Choosing from 18 tools instead of 4-5 relevant ones increases decision complexity beyond reliable selection thresholds. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 120,
  "id": "ccar-f-q120",
  "type": "single",
  "select": 1,
  "question": "You've documented API error handling conventions in a CLAUDE.md file at your project root, specifying that endpoint handlers should use a custom ApiError class. After several sessions, you notice Claude Code sometimes follows these conventions and sometimes uses generic try/catch blocks with string messages. The inconsistency appears random across different coding sessions.\n\nWhat's the most efficient first diagnostic step?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create path-specific rules in claude/rules/handlers.md with YAML frontmatter scoping the error handling instructions to your API handler files."
   },
   {
    "key": "B",
    "text": "Search for conflicting instructions in ~/.claude/CLAUDE.md or ~/.claude/rules/ that might override your project conventions."
   },
   {
    "key": "C",
    "text": "Run /memory to check which memory files are loaded and verify your CLAUDE.md is included."
   },
   {
    "key": "D",
    "text": "Add more detailed code examples to your CLAUDE.md showing the exact ApiError usage pattern for different endpoint types."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Run /memory to check which memory files are loaded and verify your CLAUDE.md is included.\n\nThe best approach is to Run /memory to check which memory files are loaded and verify your CLAUDE.md is included. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** The best approach is to Run /memory to check which memory files are loaded and verify your CLAUDE.md is included. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 121,
  "id": "ccar-f-q121",
  "type": "single",
  "select": 1,
  "question": "Your CI pipeline performs security-focused code reviews on approximately 50 PRs daily, currently costing $150/day using the synchronous API. Reviews are non-blocking—developers merge after tests pass and address findings in follow-up commits. You're evaluating the Message Batches API for its 50% cost reduction.\n\nWhat factor most determines whether batch processing is appropriate for this use case?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Whether your result processing can handle reviews arriving in a different order than submitted."
   },
   {
    "key": "B",
    "text": "Whether review feedback arriving up to 24 hours after PR creation remains actionable."
   },
   {
    "key": "C",
    "text": "Whether reducing per-review latency from 30-60 seconds to near-instant matters for your workflow."
   },
   {
    "key": "D",
    "text": "Whether you can structure each review as a single request without multi-turn refinement."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Whether review feedback arriving up to 24 hours after PR creation remains actionable.\n\nThe Message Batches API is asynchronous — most batches finish within 1 hour but can take up to 24 hours — so the decisive suitability factor is latency tolerance: whether review findings delivered up to 24 hours after PR creation are still actionable in a non-blocking, merge-then-fix workflow. Batching increases latency (B is backwards), results are correlated via custom_id so ordering is a non-issue (D), and single-request structuring (A) is secondary to the latency question.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The Message Batches API is asynchronous — most batches finish within 1 hour but can take up to 24 hours — so the decisive suitability factor is latency tolerance: whether review findings delivered up to 24 hours after PR creation are still actionable in a non-blocking, merge-then-fix workflow. Batching increases latency (B is backwards), results are correlated via custom_id so ordering is a non-issue (D), and single-request structuring (A) is secondary to the latency question.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 122,
  "id": "ccar-f-q122",
  "type": "single",
  "select": 1,
  "question": "After a 40-minute session helping plan a dinner party, the conversation has grown to 78,000 tokens. The history includes: (1) the user mentioning a guest has a severe shellfish allergy, (2) measurements for scaling recipes to 8 servings, (3) the user's clarification that \"room temperature butter\" means 68°F in their kitchen, and (4) general back-and-forth about meal timing and presentation. You need to implement context management before the window limit is reached.\n\nWhat approach best balances information preservation with token reduction?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement a sliding window retaining only the most recent 20,000 tokens relying on users to re-state important information when relevant."
   },
   {
    "key": "B",
    "text": "Summarize the entire conversation history into a concise summary capturing main topics discussed, then append new messages going forward."
   },
   {
    "key": "C",
    "text": "Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim."
   },
   {
    "key": "D",
    "text": "Store the full conversation externally and use semantic search to retrieve relevant portions for each turn, loading only matching segments into context."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim.\n\nThe best approach is to Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** The best approach is to Extract critical structured data (allergies, serving counts, user-defined terms) into a compact reference section, summarize general discussion, and retain recent exchanges verbatim. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**D.** Dumping the full transcript adds noise and makes it harder for the next actor to find the key facts quickly.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 123,
  "id": "ccar-f-q123",
  "type": "single",
  "select": 1,
  "question": "Your resource allocation tool returns a simple acknowledgment message after provisioning is requested. Users frequently approve allocations and immediately ask \"how much did that cost?\" or \"which project was that?\" - indicating they confirmed without understanding the request.\n\nWhat tool design change would most effectively address this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement a 60-second hold before execution completes, allowing users time to review pending allocations and cancel if needed"
   },
   {
    "key": "B",
    "text": "Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response"
   },
   {
    "key": "C",
    "text": "Add a user_acknowledged: boolean parameter that must be set true, with instructions for the agent to only set it after the user explicitly confirms they reviewed the details"
   },
   {
    "key": "D",
    "text": "Add a detail_level parameter with options \"minimal\" or \"comprehensive\" that controls how much context the agent presents in confirmations"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response\n\nThe best approach is to Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response. This preserves the link between conclusions and supporting evidence, which is the key requirement in the scenario.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The best approach is to Return structured data including cost estimate, target project, resource specifications, and impact summary in the tool response. This preserves the link between conclusions and supporting evidence, which is the key requirement in the scenario.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 124,
  "id": "ccar-f-q124",
  "type": "single",
  "select": 1,
  "question": "Your search products tool queries an external catalog API that returns paginated results (50 items per request). Production logs show queries frequently match 200+ products, and the design that auto-fetches all pages causes 15-20 second delays.\n\nHow should you redesign the pagination handling?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement server-side relevance ranking and return only the top 50 most relevant items."
   },
   {
    "key": "B",
    "text": "Return the first page with total match count and cursor for additional pages."
   },
   {
    "key": "C",
    "text": "Create separate search products and fetch more results tools for pagination."
   },
   {
    "key": "D",
    "text": "Add a max pages parameter (default: 2) that controls how many pages are fetched internally."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Return the first page with total match count and cursor for additional pages.\n\nThe best approach is to Return the first page with total match count and cursor for additional pages. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The best approach is to Return the first page with total match count and cursor for additional pages. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 125,
  "id": "ccar-f-q125",
  "type": "single",
  "select": 1,
  "question": "Your MCP server implements a check_availability tool that queries an external calendar API. During testing, you encounter three error conditions: (1) the tool is called with a malformed request, missing the required user_email parameter (2) the calendar API returns a 404 because the specified user doesn't exist in the calendar system (3) the calendar API returns a 503 because the service is temporarily unavailable.\n\nHow should each error be reported according to MCP's error handling design?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true"
   },
   {
    "key": "B",
    "text": "Report errors 1 and 2 as JSON-RPC protocol errors, report error 3 as a tool result with isError: true"
   },
   {
    "key": "C",
    "text": "Report all three as JSON-RPC protocol errors."
   },
   {
    "key": "D",
    "text": "Report all three as tool results with isError: true"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true\n\nThe best approach is to Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** The best approach is to Report error 1 as a JSON-RPC protocol error, report errors 2 and 3 as tool results with isError: true. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 126,
  "id": "ccar-f-q126",
  "type": "single",
  "select": 1,
  "question": "Your system has been running for 3 weeks and human reviewers have corrected 847 extractions. Analysis reveals a recurring pattern: when recipes use informal measurements like \"a handful\" or \"a splash,\" the model either invents specific amounts or leaves fields empty—accounting for 23% of all corrections.\n\nHow should you use this feedback to improve extraction accuracy?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Fine-tune the model on the 847 corrected extractions."
   },
   {
    "key": "B",
    "text": "Update your JSON schema to add a \"measurement_type\" enum field (precise/informal)."
   },
   {
    "key": "C",
    "text": "Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them."
   },
   {
    "key": "D",
    "text": "Implement a post-processing layer that uses pattern matching to detect informal measurement phrases in source text and automatically populate values when the extraction is empty."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them.\n\nThe best approach is to Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**C.** The best approach is to Add few-shot examples to your prompt demonstrating correct handling of informal measurements— extracting them verbatim rather than converting or omitting them. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 127,
  "id": "ccar-f-q127",
  "type": "single",
  "select": 1,
  "question": "\"You're the Lead Data Scientist/Engineer on a critical project. Something is not completely right with technical details or the data, and it negative impacts expected outputs. They need to independently develop both approaches to evaluation data... \n\nHow do you manage this scenario?\"",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Start two fresh sessions, having each re-read the relevant source files before beginning."
   },
   {
    "key": "B",
    "text": "Export the analysis session's key findings to a file, then create two new sessions that reference this file."
   },
   {
    "key": "C",
    "text": "Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy."
   },
   {
    "key": "D",
    "text": "Continue in the original session, developing end-to-end tests first, then snapshot tests sequentially."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy.\n\nThe best approach is to Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** Starting over throws away useful context that the scenario is trying to preserve, so it adds cost without solving the underlying problem.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** The best approach is to Resume the analysis session with fork_session enabled, creating a separate branch for each testing strategy. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**D.** Handling both paths sequentially misses the point of keeping the branches separate and makes comparison or independent exploration harder.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 128,
  "id": "ccar-f-q128",
  "type": "single",
  "select": 1,
  "question": "Your automated reviewer uses a single prompt covering security issues, API design, and business logic correctness. Your evaluation suite shows strong recall findings (82%) but poor recall for business logic edge cases in quiz scoring (34%). When you add few-shot examples of logic bugs to the prompt, logic recall is 41% but API design recall drops to 68%. \n\nHow should you address this trade-off to improve detection across both categories?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Replace the few-shot examples with a detailed checklist of specific logic edge cases to verify, such as division-by-zero in score calculation or grading thresholds."
   },
   {
    "key": "B",
    "text": "Provide the full repository as context instead of just the changed files and surrounding code, giving the model deeper visibility into business logic."
   },
   {
    "key": "C",
    "text": "Upgrade to a more capable model tier, since its stronger reasoning will handle both concern types in a single prompt and eliminate the recall trade-off."
   },
   {
    "key": "D",
    "text": "Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting.\n\nThe best approach is to Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** The best approach is to Split the review into separate focused prompts - one for security and API design, another for business logic - each with dedicated examples, then combine findings before posting. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 129,
  "id": "ccar-f-q129",
  "type": "single",
  "select": 1,
  "question": "Your code review assistant needs to analyze pull requests and provide feedback on three aspects: code style compliance, potential security issues, and documentation completeness. Each aspect requires reading files, running analysis tools, and generating a report section. The review process follows the same three-step workflow for every PR.\n\nWhich task decomposition pattern is most appropriate for this workflow?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step."
   },
   {
    "key": "B",
    "text": "Orchestrator-workers—have a central LLM analyze each PR to dynamically determine which checks are needed, then delegate to specialized worker LLMs for each identified subtask."
   },
   {
    "key": "C",
    "text": "Routing—classify each PR by type (feature, bugfix, refactor) first, then route to different review prompts optimized for that category."
   },
   {
    "key": "D",
    "text": "Single comprehensive prompt—include all instructions in one prompt and let the model handle all three aspects simultaneously."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Prompt chaining—break the review into sequential steps where each aspect (style, security, documentation) is analyzed separately, with outputs combined in a final synthesis step.\n\nThe scenario explicitly states the review \"follows the same three-step workflow for every PR,\" which per Anthropic's \"Building Effective Agents\" guidance is the textbook case for the prompt chaining workflow: a fixed, predictable sequence of subtasks each handled by a focused prompt, then synthesized. Orchestrator-workers (D) is only warranted when the needed subtasks vary unpredictably per input, and routing (B) applies when inputs fall into distinct categories needing different handling—neither fits a fixed, identical workflow.\n\n**A.** The scenario explicitly states the review \"follows the same three-step workflow for every PR,\" which per Anthropic's \"Building Effective Agents\" guidance is the textbook case for the prompt chaining workflow: a fixed, predictable sequence of subtasks each handled by a focused prompt, then synthesized. Orchestrator-workers (D) is only warranted when the needed subtasks vary unpredictably per input, and routing (B) applies when inputs fall into distinct categories needing different handling—neither fits a fixed, identical workflow.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 130,
  "id": "ccar-f-q130",
  "type": "single",
  "select": 1,
  "question": "After the web search and document analysis subagents complete their tasks, the coordinator needs to spawn the synthesis subagent to synthesize the findings.\n\nWhat is the correct approach for providing the synthesis subagent with the information it needs?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Pass reference identifiers and configure the subagent with read access to a shared memory store where other subagents deposited their results"
   },
   {
    "key": "B",
    "text": "Spawn the subagent with only a brief task description, relying on automatic context inheritance from the coordinator"
   },
   {
    "key": "C",
    "text": "Provide the subagent with tool definitions that allow it to request outputs from other subagents via callbacks"
   },
   {
    "key": "D",
    "text": "Include the complete findings from both subagents directly in the synthesis subagent's prompt"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Include the complete findings from both subagents directly in the synthesis subagent's prompt\n\nA spawned synthesis subagent needs the relevant research outputs supplied explicitly in its task context. Including the complete findings from the web-search and document-analysis subagents in its prompt gives it all of the evidence required to synthesize them; context from the coordinator is not implicitly inherited in full.\n\n> **⚠️ Answer keys disagree**\n> Another practice source marks A instead. This course uses D because the exam objectives list \"Including complete findings from prior agents directly in the subagent's prompt\" as a tested skill.\n\n#### Alternative reasoning (supports A)\n\n- Anthropic's multi-agent best practice is for subagents to deposit their full outputs as artifacts in external/shared storage and pass lightweight references, so the synthesis subagent reads the prior results directly rather than receiving lossy or token-heavy copies through prompts. Callbacks between subagents (A) and automatic context inheritance (D) don't exist in this architecture, and inlining complete findings into the prompt (B) bloats context and risks information loss.\n\n- A. Anthropic's multi-agent best practice is for subagents to deposit their full outputs as artifacts in external/shared storage and pass lightweight references, so the synthesis subagent reads the prior results directly rather than receiving lossy or token-heavy copies through prompts. Callbacks between subagents (A) and automatic context inheritance (D) don't exist in this architecture, and inlining complete findings into the prompt (B) bloats context and risks information loss.\n\n- B. It does not make the coordination boundary clearer, so the workflow would still be fragile or inefficient.\n\n- C. This adds coordination overhead and is not justified unless the work is clearly separable into independent subtasks.\n\n- D. Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 131,
  "id": "ccar-f-q131",
  "type": "single",
  "select": 1,
  "question": "Developer Productivity An engineer asks the agent to find all files in the monorepo that import the @company/auth package to understand how authentication is used across services.\n\nWhich built-in tool is most appropriate for this task?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Glob, to find files with \"auth\" in their filename or path"
   },
   {
    "key": "B",
    "text": "Grep, to search for the import statement pattern across file contents"
   },
   {
    "key": "C",
    "text": "Bash, to execute find . -type d -name \"*auth*\" and explore matching directories"
   },
   {
    "key": "D",
    "text": "Read, starting with package.json files to trace dependency declarations"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Grep, to search for the import statement pattern across file contents\n\nThe task is to find every file whose contents contain an import of @company/auth, which is a content- search problem — exactly what the built-in Grep tool (ripgrep-based) is designed for. Glob and find/Bash only match filenames or directory names, which would miss the many importing files that don't have \"auth\" in their path, and reading package.json files only shows declared dependencies, not actual usage sites.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The task is to find every file whose contents contain an import of @company/auth, which is a content- search problem — exactly what the built-in Grep tool (ripgrep-based) is designed for. Glob and find/Bash only match filenames or directory names, which would miss the many importing files that don't have \"auth\" in their path, and reading package.json files only shows declared dependencies, not actual usage sites.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 132,
  "id": "ccar-f-q132",
  "type": "single",
  "select": 1,
  "question": "Your MCP server includes archive_file(file_id) and delete_file(file_id) tools. Production logs show the agent calls delete_file when users ask to \"remove old backups,\" policy requires archiving backup files. Both tools currently have minimal descriptions: \"Archives a file\" and \"Deletes a file.\" \n\nWhich change most directly improves tool selection?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement server-side validation that rejects delete_file calls for files tagged as backups, returning an error message suggesting archive_file."
   },
   {
    "key": "B",
    "text": "Expand tool descriptions to clarify use cases, adding guidance like \"Do not use for backup files\" to delete_file."
   },
   {
    "key": "C",
    "text": "Add few-shot examples to the system prompt demonstrating that requests involving \"backup\" or \"old\" should use archive_file."
   },
   {
    "key": "D",
    "text": "Add a confirmation step that requires users to type \"CONFIRM DELETE\" before delete_file executes."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Expand tool descriptions to clarify use cases, adding guidance like \"Do not use for backup files\" to delete_file.\n\nThe best approach is to Expand tool descriptions to clarify use cases, adding guidance like \"Do not use for backup files\" to delete_file. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**A.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**B.** The best approach is to Expand tool descriptions to clarify use cases, adding guidance like \"Do not use for backup files\" to delete_file. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**C.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**D.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 133,
  "id": "ccar-f-q133",
  "type": "single",
  "select": 1,
  "question": "Your CRM agent's delete_contact tool handles requests like \"delete the duplicate entry for Acme Corp.\" The database contains similarly named records (e.g., \"Acme Corp,\" \"Acme Corporation,\" \"ACME Corp Inc.\"), and analytics show 8% of deletions are reversed within 24 hours due to misidentified records. Users have also complained that the current multi-step confirmation flow adds too much friction to routine cleanup tasks.\n\nWhich approach most effectively reduces the error rate while maintaining workflow efficiency?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion."
   },
   {
    "key": "B",
    "text": "Implement soft-delete with a 30-day recovery window so users can undo mistakes without slowing down the deletion workflow."
   },
   {
    "key": "C",
    "text": "Require users to supply the exact record ID from the CRM Interface rather than using natural language references to contact names."
   },
   {
    "key": "D",
    "text": "Deploy automated duplicate detection that identifies and merges probable duplicates, removing the need for manual deletion requests."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion.\n\nThe best approach is to Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** The best approach is to Present matched records with differentiating fields and require single-click confirmation of the intended target before executing deletion. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**B.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 134,
  "id": "ccar-f-q134",
  "type": "single",
  "select": 1,
  "question": "Your team is extracting structured data from 50,000 legacy legal contracts under a two-week deadline. Initial testing with 500 sample documents shows 82% pass JSON schema first attempt, while the remaining 18% fall due to diverse issues—missing required fields, malformed dates, and incorrectly identified parties. Documents that fail typically need refinements targeting their specific failure modes before extraction succeeds.\n\nWhich batch processing strategy is the most cost-efficient while still meeting the deadline?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use the real-time API for all 50,000 documents since the batch API's 24-hour processing window creates unacceptable deadline risk."
   },
   {
    "key": "B",
    "text": "Process 2,000 sample documents via real time API to identify failure patterns and refine prompts, then batch process all 50,000 with the optimized prompts."
   },
   {
    "key": "C",
    "text": "Split documents into 10 sequential batches of 5,000 each, analysing results and refining prompts between batches to improve extraction quality progressively."
   },
   {
    "key": "D",
    "text": "Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation.\n\nThe best approach is to Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** The best approach is to Submit all 50,000 documents via batch API, then submit failed extractions in successive batches— refining prompts between each batch—until all documents pass validation. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 135,
  "id": "ccar-f-q135",
  "type": "single",
  "select": 1,
  "question": "After deploying an updated system prompt that improves response quality, users with multi-session conversations spanning several weeks report that the assistant now contradicts its earlier statements and has a noticeably different communication style. New users don't experience these issues.\n\nWhat's the best approach to resolve this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations."
   },
   {
    "key": "B",
    "text": "Regenerate summaries of existing conversations using the new prompt and replace the stored histories to align past context with current behavior."
   },
   {
    "key": "C",
    "text": "Add a transition message when sessions resume explaining that the assistant has been updated and behavior may differ."
   },
   {
    "key": "D",
    "text": "Add instructions to the new system prompt directing the assistant to maintain consistency with any prior statements in the conversation history."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations.\n\nThe best approach is to Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Version system prompts and associate each conversation with the prompt version under which it started, applying updates only to new conversations. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 136,
  "id": "ccar-f-q136",
  "type": "single",
  "select": 1,
  "question": "Evaluation shows 94% extraction accuracy on short meeting transcripts (60 minutes) where discussions meander and key information is scattered throughout. Transcripts of both lengths fit within the model's context window.\n\nWhat pattern most effectively improves accuracy on complex, lengthy documents?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add a pre-extraction step where the model summarizes key discussions and conclusions before performing structured extraction."
   },
   {
    "key": "B",
    "text": "Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results."
   },
   {
    "key": "C",
    "text": "Upgrade to a more capable model tier for the extraction task"
   },
   {
    "key": "D",
    "text": "Add few-shot examples demonstrating correct extraction from lengthy meetings with scattered Information."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results.\n\nThe best approach is to Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** The best approach is to Split lengthy transcripts Into chunks, extract from each chunk separately, then merge and deduplicate the results. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 137,
  "id": "ccar-f-q137",
  "type": "single",
  "select": 1,
  "question": "You're implementing a complex graph traversal algorithm with specific performance requirements and edge cases to handle (disconnected nodes, cycles, weighted edges). You want to structure your workflow for efficient iterative refinement with Claude.\n\nWhat approach will most effectively enable progressive improvement across multiple iterations?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Provide Claude with a detailed natural language specification of the algorithm, including all requirements and edge cases. Review each output manually and provide descriptive feedback on what behavior needs to change."
   },
   {
    "key": "B",
    "text": "Have Claude extensively research the algorithm and create a detailed implementation plan using extended thinking, then implement the complete solution based on that plan."
   },
   {
    "key": "C",
    "text": "Provide Claude with a reference implementation from documentation, then ask it to rewrite the code to match your codebase style and add the required edge case handling, comparing outputs against the reference."
   },
   {
    "key": "D",
    "text": "Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request.\n\nThe best approach is to Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.\n\n**D.** The best approach is to Write a test suite covering expected behavior, edge cases, and performance requirements before implementation. Ask Claude to write code that passes the tests, then iterate by sharing test failures with each refinement request. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 138,
  "id": "ccar-f-q138",
  "type": "single",
  "select": 1,
  "question": "Your infrastructure-as-code repository includes Terraform modules (/terraform/), Kubernetes manifests (/kubernetes/), and CI/CD pipeline scripts (/pipelines/). Each requires different conventions, but your single root CLAUDE.md has grown to 500+ lines. When developers work on Kubernetes files, Terraform-specific rules load into context unnecessarily, consuming tokens. \n\nWhat is the best approach to reorganize so only relevant guidance loads when editing specific file types?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: [\"terraform/**/*\"]), loading rules only when editing matching files."
   },
   {
    "key": "B",
    "text": "Split content into subdirectory CLAUDE.md files (/terraform/CLAUDE.md, /kubernetes/CLAUDE.md), so Claude loads directory-specific guidance."
   },
   {
    "key": "C",
    "text": "Restructure the root CLAUDE.md into clearly labeled sections with headers (e.g., \"## Terraform Conventions\"), improving organization and readability."
   },
   {
    "key": "D",
    "text": "Keep the root CLAUDE.md and use @path/to/import syntax to modularly include tool-specific guidance files from separate documents."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: [\"terraform/**/*\"]), loading rules only when editing matching files.\n\nThe best approach is to Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: [\"terraform/**/*\"]), loading rules only when editing matching files. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** The best approach is to Create files in .claude/rules/ with YAML frontmatter path-scoping (e.g., paths: [\"terraform/**/*\"]), loading rules only when editing matching files. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 139,
  "id": "ccar-f-q139",
  "type": "single",
  "select": 1,
  "question": "After expanding the agent's MCP tools with delivery-specific capabilities (check_delivery_status, contact_driver, issue_credit, apply_promo_code, update_delivery_address, reschedule_delivery), the total tool count has grown from 4 to 10. Your evaluation suite shows tool selection accuracy has dropped to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools- calling issue_credit when process_refund is correct, and calling check_delivery_status when lookup_order already returns the needed data.\n\nWhich approach structurally eliminates the semantic overlaps that are being logged as the error source?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag."
   },
   {
    "key": "B",
    "text": "Enable the tool search tool with defer_loading on the six new tools, keeping the original four always loaded, so the agent dynamically calls it when needed."
   },
   {
    "key": "C",
    "text": "Split the tools across two sub-agents - a \"financial resolution\" agent with process_refund, issue_credit, and apply_promo_code, and a \"delivery\" agent with the remaining delivery tools - with a coordinator routing between them."
   },
   {
    "key": "D",
    "text": "Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool pair, such as showing when issue_credit or process_refund is appropriate."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag.\n\nThe best approach is to Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**A.** The best approach is to Consolidate semantically overlapping tools-merge issue_credit and process_refund into a single resolve_compensation tool with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**B.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**C.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 140,
  "id": "ccar-f-q140",
  "type": "single",
  "select": 1,
  "question": "After expanding the agent's MCP tools with delivery-specific capabilities [apply_promo_code, update_delivery_address, reconcile_delivery], the total tool count has grown from 1 to 7. We have observed that the agent now shows tool selection accuracy has dropped from 86% to 71%. Log analysis reveals the majority of errors involve the agent selecting between semantically overlapping tools — calling issue_credit when process_refund was correct, and calling check_delivery_status when looking order_allready_returns_the_needed_data.\n\nWhich approach structurally eliminates the semantic overlap identified in the error source?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Split the tools across two sub-agents — a 'financial resolution' agent with issue_credit, process_refund, return_order, and apply_promo_code and a 'delivery operations' agent with the remaining delivery tools — with a coordinating routing between them."
   },
   {
    "key": "B",
    "text": "Add few-shot examples to the system prompt demonstrating correct selection for each ambiguous tool, such as showing when issue_credit applies versus when process_refund is appropriate."
   },
   {
    "key": "C",
    "text": "Enable the tool search tool with defer_loading on the six new tools, keeping the original two always loaded, so the agent dynamically discovers specialized tools only when needed."
   },
   {
    "key": "D",
    "text": "Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag.\n\nThe best approach is to Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.\n\n**A.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**B.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**C.** It does not reduce the ambiguity that is causing the agent to pick the wrong tool in the first place.\n\n**D.** The best approach is to Consolidate semantically overlapping tools – merge issue_credit and process_refund into a single handle_promotions tool with an action parameter and fold check_delivery_status into lookup_order with an optional include_tracking flag. This reduces tool-selection mistakes by making the decision surface clearer and better aligned with the agent's task.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 141,
  "id": "ccar-f-q141",
  "type": "single",
  "select": 1,
  "question": "Your order management system requires tools for three distinct operations: issuing refunds (requires amount and reason), canceling orders (requires reason), and res (requires shipping address). Each operation shares an order id parameter but has different additional requirements. You notice during testing that with your current frequently omits required parameters or includes irrelevant ones.\n\nWhat design change will most effectively improve parameter accuracy?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Split into three separate tools (each defining only the parameters required for that specific operation."
   },
   {
    "key": "B",
    "text": "Keep one unified tool with a nested operation object parameter whose internal structure varies by operation type, documented in the tool description."
   },
   {
    "key": "C",
    "text": "Keep one unified tool but add JSON Schema if-then-else conditionals to enforce that parameters like amount are required only when the operation type is \"refund\"."
   },
   {
    "key": "D",
    "text": "Keep one unified tool with all parameters marked optional, but add few-shot examples in the system prompt showing correct parameter combinations for each operation."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Split into three separate tools (each defining only the parameters required for that specific operation.\n\nThe best approach is to Split into three separate tools (each defining only the parameters required for that specific operation. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Split into three separate tools (each defining only the parameters required for that specific operation. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**D.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 142,
  "id": "ccar-f-q142",
  "type": "single",
  "select": 1,
  "question": "Your fitness coaching assistant uses a system prompt with detailed conditional logic: \"If the user mentions being a beginner, provide step-by-step form instructions. If they use term 'progressive overload' or 'superset', respond concisely. If they ask about injury history, always recommend consulting a physician.\" During evaluation, you find the assistant correct explicit expertise declarations but struggles when users don't clearly state their level-often defaulting to overly detailed responses regardless of contextual cues like technical terms.\n\nWhich change to the system prompt would most directly address this failure to pick up on implicit expertise signals?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement a pre-conversation intake that asks users to rate their experience level, then inject that rating into the system prompt as context for all subsequent responses."
   },
   {
    "key": "B",
    "text": "Replace most conditionals with a general principle: \"Adapt explanation depth to match user expertise, mirroring their terminology.\" Keep only the safety-critical conditional abou consultations."
   },
   {
    "key": "C",
    "text": "Add an explicit instruction for the model to ask a clarifying question about experience level whenever the user's expertise isn't immediately clear from their first message."
   },
   {
    "key": "D",
    "text": "Add more conditional branches to cover additional expertise signals, such as \"If user mentions specific rep ranges or asks about periodization, treat as advanced.\""
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Replace most conditionals with a general principle: \"Adapt explanation depth to match user expertise, mirroring their terminology.\" Keep only the safety-critical conditional abou consultations.\n\nThe best approach is to Replace most conditionals with a general principle: \"Adapt explanation depth to match user expertise, mirroring their terminology.\" Keep only the safety-critical conditional abou consultations. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** The best approach is to Replace most conditionals with a general principle: \"Adapt explanation depth to match user expertise, mirroring their terminology.\" Keep only the safety-critical conditional abou consultations. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 143,
  "id": "ccar-f-q143",
  "type": "single",
  "select": 1,
  "question": "You're building a security scanning workflow. \n\nWhen engineers need to locate all occurrences of a dangerous function like eval() across a large codebase, which tool should your agent use for content search?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Use Bash to run ls -R | grep eval to recursively list files containing eval."
   },
   {
    "key": "B",
    "text": "Read the project's main entry file and follow import statements to trace where eval might be used."
   },
   {
    "key": "C",
    "text": "Use Grep to search for the pattern \"eval(\" across all files in the codebase."
   },
   {
    "key": "D",
    "text": "Use Glob with a pattern like /*eval* to find files, then Read each matching file."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Use Grep to search for the pattern \"eval(\" across all files in the codebase.\n\nGrep is the purpose-built content-search tool (ripgrep-based) for finding patterns inside file contents across a large codebase, which is exactly what locating all eval( call sites requires. Glob only matches file names, reading entry files and tracing imports doesn't scale or guarantee coverage, and ls -R | grep only matches file names, not file contents.\n\n**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** Grep is the purpose-built content-search tool (ripgrep-based) for finding patterns inside file contents across a large codebase, which is exactly what locating all eval( call sites requires. Glob only matches file names, reading entry files and tracing imports doesn't scale or guarantee coverage, and ls -R | grep only matches file names, not file contents.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 144,
  "id": "ccar-f-q144",
  "type": "single",
  "select": 1,
  "question": "Your test generation produces unit tests for new code, but reviews show 55% are low-value: trivial assertions that only verify functions don't throw exceptions, tests duplicating existing coverage, or tests ignoring your team's fixture conventions.\n\nHow do you reduce the rate of low-value tests being generated in the first place?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing."
   },
   {
    "key": "B",
    "text": "Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers."
   },
   {
    "key": "C",
    "text": "Add post-generation coverage analysis that automatically filters out any generated test that doesn't increase line coverage beyond what existing tests provide."
   },
   {
    "key": "D",
    "text": "Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.\n\nThe question explicitly asks how to reduce low-value tests \"being generated in the first place,\" which means fixing the upstream cause: Claude lacks context about what the team considers a valuable test. Documenting testing standards, fixture usage, and good-vs-trivial examples in CLAUDE.md gives Claude that context at generation time, whereas A and D only filter bad output after the fact and B avoids the problem rather than solving it.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The question explicitly asks how to reduce low-value tests \"being generated in the first place,\" which means fixing the upstream cause: Claude lacks context about what the team considers a valuable test. Documenting testing standards, fixture usage, and good-vs-trivial examples in CLAUDE.md gives Claude that context at generation time, whereas A and D only filter bad output after the fact and B avoids the problem rather than solving it.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 145,
  "id": "ccar-f-q145",
  "type": "single",
  "select": 1,
  "question": "Your expense reimbursement agent processes employee requests using a process reimbursement tool. Company policy requires that reimbursements above $500 must be approved before funds are disbursed. \n\nThe agent handles hundreds of requests daily, and you need the threshold enforcement to be tamper-proof regardless of how the agent is prompted ensures the $500 approval threshold cannot be bypassed?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement the threshold check in a PreToolUse hook that inspects the amount parameter before process reimbursement executes. If the amount exceeds $500, the hook modifies the context to add a requires approval: true flag, which the tool checks before disbursing."
   },
   {
    "key": "B",
    "text": "The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending."
   },
   {
    "key": "C",
    "text": "Provide two tools: auto reimburse (hard-coded limit of $500) and manager approval. Include detailed system prompt instructions telling the agent to check the amount and use the appropriate tool. Add a Post ToolUse hook that logs which tool was called for auditing."
   },
   {
    "key": "D",
    "text": "The process reimbursement tool accepts an approved by manager parameter. The system prompt instructs the agent to only set this to true after confirming that a manager approved the request. A nightly audit script reviews all reimbursements where approved by manager was set to true."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending.\n\nThe best approach is to The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The best approach is to The process reimbursement tool accepts amount and details, and internally enforces the threshold; amounts $500 cause the tool to create a pending approval request and return a status indicating manager review is pending. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 146,
  "id": "ccar-f-q146",
  "type": "single",
  "select": 1,
  "question": "Your portfolio value tool returns the total value of a user's investment portfolio. You're deciding between returning a structured JSON object with explicit fields versus returning information as a formatted text string.\n\nWhat is the primary advantage of using structured output with defined fields?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "JSON schemas automatically validate that the underlying API returned correct data before the agent processes it."
   },
   {
    "key": "B",
    "text": "Structured JSON consumes significantly fewer tokens than natural language, substantially reducing API costs."
   },
   {
    "key": "C",
    "text": "The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations."
   },
   {
    "key": "D",
    "text": "Structured JSON is processed deterministically by the model, significantly improving accuracy when extracting values."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations.\n\nThe best approach is to The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.\n\n**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**C.** The best approach is to The agent can reliably extract specific values without parsing free form text, reducing errors in subsequent operations. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 147,
  "id": "ccar-f-q147",
  "type": "single",
  "select": 1,
  "question": "Performance analysis reveals your context is composed of accumulated RAG results from all previous queries, which is crowding out conversation history and causing coherence degradation after 15+ turns.\n\nWhich approach best addresses this issue?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement semantic deduplication to identify and remove redundant information across the accumulated RAG results and conversation turns"
   },
   {
    "key": "B",
    "text": "Shift context budget to favor RAG results while reducing conversation history allocation"
   },
   {
    "key": "C",
    "text": "Compress all RAG results into a consolidated summary document that updates incrementally after each retrieval"
   },
   {
    "key": "D",
    "text": "Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history\n\nThe best approach is to Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**C.** Collapsing everything into one path reduces precision and usually makes the system harder to control, not easier.\n\n**D.** The best approach is to Implement a sliding window for RAG results from the last 2-3 queries while preserving conversation history. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 148,
  "id": "ccar-f-q148",
  "type": "single",
  "select": 1,
  "question": "Your team frequently migrates React components to Vue. You've written a step-by-step workflow for Claude Code to follow during each migration, and you want every developer on the team to invoke it by typing /migrate-component. The workflow should stay in sync as the team iterates on it.\n\nWhere should you place the skill file?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "As a detailed instruction block in the project's root CLAUDE.md file"
   },
   {
    "key": "B",
    "text": "In the project's .claude/settings.json using a skillOverrides entry to register and define the workflow"
   },
   {
    "key": "C",
    "text": "In ~/.claude/skills/migrate-component/SKILL.md on each developer's machine"
   },
   {
    "key": "D",
    "text": "In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control\n\nThe best approach is to In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** The best approach is to In .claude/skills/migrate-component/SKILL.md at the project root, committed to version control. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 149,
  "id": "ccar-f-q149",
  "type": "single",
  "select": 1,
  "question": "The system processes product reviews using tool use with a defined schema: rating (integer 1-5), pros (string array), cons (string array), and overall_sentiment (enum: positive, negative, mixed). Testing reveals two issues with brief or ambiguous reviews (~20% of the dataset): (1) for reviews like \"Great product!\", Claude fabricates specific pros and cons rather than indicating this information isn't explicitly stated, and (2) for sarcastic reviews like \"Well that was... interesting\", Claude picks sentiment arbitrarily since there's no option for ambiguous cases.\n\nWhat schema modification best addresses both issues?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add an extraction_confidence field (0.0-1.0) for each value, and filter outputs where any confidence falls below a threshold."
   },
   {
    "key": "B",
    "text": "Allow null values for pros/cons, and add \"unclear\" to the sentiment enum."
   },
   {
    "key": "C",
    "text": "Allow empty arrays for pros/cons as valid output, and add \"unclear\" to the sentiment enum."
   },
   {
    "key": "D",
    "text": "Make pros and cons optional fields, and add \"neutral\" and \"unclear\" to the sentiment enum."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Allow empty arrays for pros/cons as valid output, and add \"unclear\" to the sentiment enum.\n\nThe best approach is to Allow empty arrays for pros/cons as valid output, and add \"unclear\" to the sentiment enum. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**A.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**B.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.\n\n**C.** The best approach is to Allow empty arrays for pros/cons as valid output, and add \"unclear\" to the sentiment enum. This is the most reliable way to keep the output aligned with the required structure and reduce downstream parsing or validation failures.\n\n**D.** That approach is too brittle for a case where the output has to stay consistently aligned with a required structure.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 150,
  "id": "ccar-f-q150",
  "type": "single",
  "select": 1,
  "question": "Production logs show that when the agent handles complex billing disputes requiring 6+ tool calls, it sometimes exhausts its max_turns limit after gathering data and before completing resolution or escalating. The team's goal is to guarantee that every customer interaction ends with either a completed resolution or a human escalation, regardless of how the agent loop terminates.\n\nWhich approach achieves this guarantee?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results."
   },
   {
    "key": "B",
    "text": "Split the workflow into two sequential agent invocations — a first agent gathers information via get_customer and lookup_order, then the second agent uses that data and handles process_refund or escalate_to_human, each with separate turn budgets."
   },
   {
    "key": "C",
    "text": "Add system prompt instructions telling the agent to call escalate_to_human with a summary of its findings whenever it determines it cannot resolve the dispute."
   },
   {
    "key": "D",
    "text": "Implement a pre-tool-use hook that counts tool invocations and terminates the loop with an automatic escalation once the agent reaches 80% of its remaining actions."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results.\n\nThe best approach is to Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Add orchestration-layer code that checks the agent's outcome after each loop termination - if the loop ended without a completed resolution or escalation, programmatically call escalate_to_human with the accumulated conversation context and tool results. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** Escalation is too early here because the scenario is asking for a better system behavior, not a handoff as the primary fix.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 151,
  "id": "ccar-f-q151",
  "type": "single",
  "select": 1,
  "question": "A developer uses Claude Code to refactor a function during their development session. Before committing, they ask the same Claude session to review the code for issues. Later, a separate automated CI review catches several bugs that the same-session review missed.\n\nWhat best explains this discrepancy?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "The CI review uses a more specific prompt tailored for catching bugs, while the developer's request was too general"
   },
   {
    "key": "B",
    "text": "Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions"
   },
   {
    "key": "C",
    "text": "The CI environment has access to the full codebase context while the local session only sees the current file"
   },
   {
    "key": "D",
    "text": "The extended session length caused the context window to fill with conversation history, leaving less room for thorough analysis"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions\n\nThe best approach is to Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**B.** The best approach is to Claude retains context about its prior reasoning in the session, making it less likely to question its own decisions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 152,
  "id": "ccar-f-q152",
  "type": "single",
  "select": 1,
  "question": "You've configured your Claude agent with three MCP servers: one for git operations, one for Jira ticket management, and one for documentation search.\n\nWhen a user asks the agent to \"create a branch for JIRA- 123 and add documentation links to the ticket,\" how does the agent access tools across these servers?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent."
   },
   {
    "key": "B",
    "text": "The agent automatically selects the most relevant server based on the request and loads only that server's tools."
   },
   {
    "key": "C",
    "text": "You must specify which MCP server to use for each turn, and the agent can only access one server's tools at a time."
   },
   {
    "key": "D",
    "text": "The agent queries each server sequentially to determine which handles each tool, routing calls based on tool name prefixes."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent.\n\nThe best approach is to Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Tools from all configured MCP servers are discovered at connection time and available simultaneously to the agent. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** Leaving the choice on auto still keeps the critical decision in the same place that is already failing.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 153,
  "id": "ccar-f-q153",
  "type": "single",
  "select": 1,
  "question": "An engineer submits two requests: • Request A: \"Rename the getUserData function to fetchUserProfile everywhere it's used.\" • Request B: \"Improve error handling throughout the data processing module—add try/catch blocks, meaningful error messages, and ensure failures don't silently corrupt data.\"\n\nFor which request does specifying an explicit multi-phase workflow (such as analyze propose implement with review) most improve outcome quality?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Neither request benefits significantly"
   },
   {
    "key": "B",
    "text": "Request B, the error handling task"
   },
   {
    "key": "C",
    "text": "Request A, the function rename task"
   },
   {
    "key": "D",
    "text": "Both requests benefit equally"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Request B, the error handling task\n\nRequest B is open-ended and judgment-heavy — \"improve error handling\" requires analyzing current behavior, deciding where try/catch belongs, and choosing meaningful messages, so an explicit analyze propose implement-with-review workflow materially raises quality and catches bad design before code changes. Request A is a mechanical, well-defined rename that a simple find-and-replace-style execution handles fine, so the multi-phase structure adds little.\n\n**A.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**B.** Request B is open-ended and judgment-heavy — \"improve error handling\" requires analyzing current behavior, deciding where try/catch belongs, and choosing meaningful messages, so an explicit analyze propose implement-with-review workflow materially raises quality and catches bad design before code changes. Request A is a mechanical, well-defined rename that a simple find-and-replace-style execution handles fine, so the multi-phase structure adds little.\n\n**C.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.\n\n**D.** It still leaves the failure too ambiguous, so the agent would have little basis for choosing the right recovery action.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 154,
  "id": "ccar-f-q154",
  "type": "single",
  "select": 1,
  "question": "During initial testing of the automated review pipeline, you notice that reviews on large PRs (50+ changed files) sometimes take over 20 minutes and cost $8-12 per run due to extensive agentic loops — Claude reads files, runs analysis tools, and iterates many times. Your team needs each invocation to abort once it reaches a fixed iteration count and a fixed dollar amount, enforced by Claude Code itself rather than the surrounding job runner.\n\nWhich configuration change directly enforces both of those per-invocation caps?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set timeout-minutes: 5 on the GitHub Actions job step and monitor per-run costs via the Anthropic Console usage dashboard."
   },
   {
    "key": "B",
    "text": "Add --max-turns 10 --max-budget-usd 2.00 to the claude -p invocation to cap iterations and spend."
   },
   {
    "key": "C",
    "text": "Switch the --model flag to a smaller, cheaper model so each iteration uses fewer tokens and lower per- call cost."
   },
   {
    "key": "D",
    "text": "Set --permission-mode dontAsk to auto-deny any tool permission requests not in the explicitly allowed set."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Add --max-turns 10 --max-budget-usd 2.00 to the claude -p invocation to cap iterations and spend.\n\nThe required controls are native per-invocation limits inside Claude Code itself: one that caps the number of agentic turns and one that caps dollar spend for that run. Using those built-in runtime limits is the direct way to stop oversized reviews without depending on external job settings or indirect cost reductions.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The required controls are native per-invocation limits inside Claude Code itself: one that caps the number of agentic turns and one that caps dollar spend for that run. Using those built-in runtime limits is the direct way to stop oversized reviews without depending on external job settings or indirect cost reductions.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** This still leaves the critical decision to model discretion, which is exactly what the scenario says is failing.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 155,
  "id": "ccar-f-q155",
  "type": "single",
  "select": 1,
  "question": "Your update_user_profile tool accepts a user_id (required) and an optional fields_to_update object. In testing, Claude frequently omits user_id or passes incorrectly structured data.\n\nWhat is most critical for helping Claude understand what parameter values to provide?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Clear parameter descriptions explaining expected format, such as \"user_id : UUID of the user to update (required)\""
   },
   {
    "key": "B",
    "text": "Verbose parameter names encoding format hints, such as user_id_string_uuid_format"
   },
   {
    "key": "C",
    "text": "Strict JSON Schema type constraints marking user_id as required and defining fields_to_update as an object type"
   },
   {
    "key": "D",
    "text": "Detailed error responses explaining why invalid parameter values were rejected"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Clear parameter descriptions explaining expected format, such as \"user_id : UUID of the user to update (required)\"\n\nThe best approach is to Clear parameter descriptions explaining expected format, such as \"user_id : UUID of the user to update (required)\". This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to Clear parameter descriptions explaining expected format, such as \"user_id : UUID of the user to update (required)\". This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 156,
  "id": "ccar-f-q156",
  "type": "single",
  "select": 1,
  "question": "Your conversation history includes two types of content: persistent story elements (character backgrounds, plot structure, world rules) that must remain consistent throughout, and extensive brainstorming discussion that's mostly ephemeral. After 40+ turns, you're hitting context limits and users report the assistant \"forgets\" established character traits, breaking narrative consistency.\n\nWhich approach best ensures persistent story elements remain available to the model while reclaiming context space?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Apply a sliding-window approach keeping only the most recent 25 turns, relying on the model to infer earlier context from recent discussion flow."
   },
   {
    "key": "B",
    "text": "Store all history in a vector database and retrieve semantically similar passages for each new message, replacing conversation history with retrieved chunks."
   },
   {
    "key": "C",
    "text": "Separate persistent story elements into a retained \"story bible\" section at context start, applying trimming or summarization only to brainstorming discussion."
   },
   {
    "key": "D",
    "text": "Summarize the entire conversation history into a condensed synopsis every 20 turns, replacing the full history to free up tokens."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Separate persistent story elements into a retained \"story bible\" section at context start, applying trimming or summarization only to brainstorming discussion.\n\nThe best approach is to Separate persistent story elements into a retained \"story bible\" section at context start, applying trimming or summarization only to brainstorming discussion. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** That adds infrastructure or indirection, but the question is really about choosing a simpler coordination pattern that fits the current workflow.\n\n**C.** The best approach is to Separate persistent story elements into a retained \"story bible\" section at context start, applying trimming or summarization only to brainstorming discussion. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**D.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 157,
  "id": "ccar-f-q157",
  "type": "single",
  "select": 1,
  "question": "Users frequently refine their search criteria mid-conversation. You notice a pattern: when users say things like \"Actually, let's raise the budget to $650K\" or \"I'd prefer a condo now instead of a house,\" the assistant sometimes continues referencing the original preferences in later responses—even though the updates are clearly present in the conversation history. Context usage is only at 35% capacity.\n\nWhich solution most reliably ensures the model uses the current preferences?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Implement conversation pruning to remove turns containing outdated preferences, ensuring only current ones remain in context."
   },
   {
    "key": "B",
    "text": "Add system prompt instructions emphasizing that the model should always prioritize the most recently stated preferences over earlier ones."
   },
   {
    "key": "C",
    "text": "Include few-shot examples showing the assistant correctly acknowledging and applying preference changes in responses."
   },
   {
    "key": "D",
    "text": "Maintain a structured state object with current preferences, update it on changes, and include it in each request."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Maintain a structured state object with current preferences, update it on changes, and include it in each request.\n\nThe best approach is to Maintain a structured state object with current preferences, update it on changes, and include it in each request. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** It does not preserve the right information in the right form, so it fails to solve the real context-management problem.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Examples may improve behavior at the margin, but they do not address the deeper control or architecture issue behind this failure.\n\n**D.** The best approach is to Maintain a structured state object with current preferences, update it on changes, and include it in each request. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 158,
  "id": "ccar-f-q158",
  "type": "single",
  "select": 1,
  "question": "After deploying automated code review, developers report that approximately 35% of flagged findings are false positives falling into consistent patterns: style suggestion contradicting team conventions, security warnings for patterns safe in your deployment context, and performance suggestions that would degrade your specific use case. You want to reduce false positives while maintaining the ability to catch genuine issues.\n\nWhich approach best enables the model to generalize its judgment to novel code patterns it hasn't seen before?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create a comprehensive written specification of all patterns that should not be flagged, then include this full documentation in the system prompt."
   },
   {
    "key": "B",
    "text": "Add instructions to your system prompt to \"be conservative,\" \"only flag definite issues,\" and \"consider that some patterns may be intentional.\""
   },
   {
    "key": "C",
    "text": "Implement post-processing that uses keyword matching to filter out findings containing terms like \"convention,\" \"context-dependent,\" or \"trade-off.\""
   },
   {
    "key": "D",
    "text": "Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category.\n\nThe best approach is to Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.\n\n**A.** Documentation may give useful background, but it is not a reliable way to discover every real caller or usage path in code.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**D.** The best approach is to Include few-shot examples in your prompt showing annotated code snippets that distinguish acceptable patterns from genuine issues in each category. This manages context more deliberately so the model keeps the most important information available without depending on brittle long-history recall.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 159,
  "id": "ccar-f-q159",
  "type": "single",
  "select": 1,
  "question": "You are setting up a non-interactive automated code review pipeline using Claude Code. You want Claude to analyze a pulled Git diff (git diff) against the main branch and apply a custom set of code review instructions. However, you notice that when you run the pipeline, Claude only looks at the raw diff text itself and completely stops using its file-reading or code navigation tools. As a result, it fails to inspect the broader codebase repository context, which is critical because the diff modifies a core function called by many other external modules.\n\nWhich change to the CLI invocation will cause Claude to read related files in the repository while still successfully applying your custom review instructions?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Keep --system-prompt and add --allowedTools \"Read, Glob, Grep\" so that the non-interactive mode permits file system tools that it otherwise disables."
   },
   {
    "key": "B",
    "text": "Remove --system-prompt entirely and place the review instructions in a CLAUDE.md file at the repo root, since --system-prompt is incompatible with tool use under -p."
   },
   {
    "key": "C",
    "text": "Stop piping the diff via stdin and instead embed the diff contents inside the prompt string, so Claude Code treats the invocation as an agentic session rather than a stream-processing one."
   },
   {
    "key": "D",
    "text": "Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools.\n\nThe best approach is to Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.\n\n**A.** Surface-level searching is too narrow here because the task depends on richer structural understanding than simple text matching provides.\n\n**B.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**C.** Prompt wording alone is not enough here, because the scenario needs a stronger structural mechanism than instructions by themselves can provide.\n\n**D.** The best approach is to Replace --system-prompt with --append-system-prompt so your review instructions are added to Claude Code's default prompt instead of overwriting the built-in guidance for using file-reading and code navigation tools. This gives the agent clearer signals about the failure so it can choose the right recovery action instead of retrying blindly or escalating too early.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 160,
  "id": "ccar-f-q160",
  "type": "single",
  "select": 1,
  "question": "Your development team is using Claude Code to automate test generation across a large codebase. However, developers are frequently rejecting the generated test suites because Claude creates a high volume of trivial assertions or tests that merely maximize line coverage without validating meaningful behavioral logic or edge cases. You want to guide Claude to generate high-quality, production-ready tests directly without introducing high latency or modifying the core pipeline script.\n\nWhich strategy best ensures that high-quality, meaningful tests are generated in the first place?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Restrict test generation to directories where historical quality metrics show higher acceptance rates, disabling it for areas where generated tests consistently require heavy editing."
   },
   {
    "key": "B",
    "text": "Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions."
   },
   {
    "key": "C",
    "text": "Implement a two-phase generation where a second Claude call scores each test against quality criteria, filtering out low-scoring tests before presenting results to developers."
   },
   {
    "key": "D",
    "text": "Add post-generation coverage analysis that automatically filters out any generated test that doesn't increase line coverage beyond what existing tests provide."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions.\n\nThe best approach is to Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**B.** The best approach is to Document testing standards in CLAUDE.md including valuable test criteria, available fixtures with intended use cases, and examples distinguishing meaningful behavioral tests from trivial assertions. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 161,
  "id": "ccar-f-q161",
  "type": "single",
  "select": 1,
  "question": "Your music discovery assistant should consistently maintain an enthusiastic tone, explain its reasoning for each recommendation, and ask clarifying questions to better understand user preferences. You want this behavior to persist reliably across all user interactions.\n\nWhere should you define these behavioral guidelines?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "In the system prompt"
   },
   {
    "key": "B",
    "text": "Prepended to each user message before sending to the API"
   },
   {
    "key": "C",
    "text": "In environmental variables that your application passes to the API client"
   },
   {
    "key": "D",
    "text": "In the first assistant message, instructing Claude to follow these guidelines going forward"
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. In the system prompt\n\nThe best approach is to In the system prompt. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** The best approach is to In the system prompt. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**B.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**C.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.\n\n**D.** It sounds plausible, but it does not solve the specific failure mode or constraint the scenario is focused on.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 162,
  "id": "ccar-f-q162",
  "type": "single",
  "select": 1,
  "question": "Your team is configuring MCP servers in Claude Code. You want to add a shared venue lookup server that all team members should have access to, and you personally want to add an experimental music playlist server that only you are testing.\n\nWhich configuration approach correctly applies MCP server scopes?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add both servers to your local ~/.claude.json"
   },
   {
    "key": "B",
    "text": "Add venue server to .mcp.json and playlist server to ~/.claude.json"
   },
   {
    "key": "C",
    "text": "Add both servers to the project-level .mcp.json file"
   },
   {
    "key": "D",
    "text": "Add venue server to ~/.claude.json and playlist server to .mcp.json"
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Add venue server to .mcp.json and playlist server to ~/.claude.json\n\nThe best approach is to Add venue server to .mcp.json and playlist server to ~/.claude.json. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**A.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**B.** The best approach is to Add venue server to .mcp.json and playlist server to ~/.claude.json. This most directly addresses the failure or constraint described in the scenario and is more reliable than weaker, more ambiguous alternatives.\n\n**C.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.\n\n**D.** This still relies on fragile text-generation behavior rather than enforcing the structure in a more reliable way.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 163,
  "id": "ccar-f-q163",
  "type": "single",
  "select": 1,
  "question": "While testing an agent, you notice that when a customer states, \"I need a refund for my recent purchase,\" the agent immediately invokes process_refund — but supplies the required order_id parameter with a plausible-looking value that it made up, rather than first calling lookup_order to retrieve the actual order ID. As a result, the refund call fails because the invented order ID does not correspond to any real order. Which change would directly address the root cause of the agent inventing the order_id value?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Switch tool_choice from “auto” to “any” to force the agent to make a tool call on every turn."
   },
   {
    "key": "B",
    "text": "Update the process_refund tool description to explicitly state that order_id must be obtained from a prior lookup_order call and must never be assumed or invented."
   },
   {
    "key": "C",
    "text": "Pre-parse incoming customer messages to extract any order IDs mentioned, and inject them into the conversation context before passing to Claude."
   },
   {
    "key": "D",
    "text": "Add server-side validation that checks whether the order_id exists in your database before executing the refund, returning an error to the agent if not found."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Update the process_refund tool description to explicitly state that order_id must be obtained from a prior lookup_order call and must never be assumed or invented.\n\nAccording to Anthropic's official guidance on defining tools for Claude, tool descriptions are the primary mechanism by which the model learns what a tool does, when to use it, and how each parameter should be populated — including any dependencies on other tools. If the process_refund tool's description does not explicitly state that order_id must be retrieved via a prior lookup_order call and must never be assumed, guessed, or fabricated, the model has no basis to refrain from filling the required parameter with an invented value. Updating the description to state this explicit constraint directly targets the reasoning process that leads to fabrication, whereas forcing tool use on every turn, pre-extracting IDs from user text, or validating the ID server-side either fail to address why the model invents the value in the first place or only catch the problem after it has already occurred.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 164,
  "id": "ccar-f-q164",
  "type": "single",
  "select": 1,
  "question": "A customer reaches out about a warranty claim on a power drill. Resolving the request requires multiple sequential tool calls: get_customer to look up their account, lookup_order to find the purchase details, and then either process_refund or escalate_to_human depending on warranty eligibility. You are implementing the agentic loop that orchestrates these steps using the Claude API. What is the primary mechanism your application uses to determine whether to continue the loop or stop?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "You manually set the tool_choice parameter to “none” after the final expected tool call to force Claude to stop requesting tools."
   },
   {
    "key": "B",
    "text": "You check whether Claude's response contains a text content block – if text is present, the agent has produced its final answer and the loop should exit."
   },
   {
    "key": "C",
    "text": "You track the number of tool calls made and exit the loop once a preconfigured maximum is reached."
   },
   {
    "key": "D",
    "text": "You check the stop_reason field in each API response – the loop continues while it equals “tool_use” and exits when it changes to “end_turn” or another terminal value."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. You check the stop_reason field in each API response – the loop continues while it equals “tool_use” and exits when it changes to “end_turn” or another terminal value.\n\nIn the Claude API's tool-use (agentic loop) pattern, each API response includes a stop_reason field indicating why the model stopped generating. When Claude wants to invoke a tool, the response has stop_reason: \"tool_use\". The orchestrating application should check this field after every API call: as long as stop_reason is \"tool_use\", it executes the requested tool(s), sends the tool results back as a new user message, and calls the API again. Once stop_reason changes to \"end_turn\" (or another terminal value such as \"max_tokens\" or \"stop_sequence\"), Claude has finished its turn and the loop exits. Checking for the presence of a text block is unreliable because Claude can emit text alongside a tool_use block in the same response (e.g., explaining its next action) without that meaning it's done. Setting tool_choice to \"none\" is a way to prevent tool calls on a specific request, not a dynamic stopping signal, and tracking a maximum call count is merely a safety cap, not the primary control mechanism.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 165,
  "id": "ccar-f-q165",
  "type": "single",
  "select": 1,
  "question": "Your team has connected a custom MCP server that provides DevOps workflow templates. This server exposes several MCP prompts (such as deploy_checklist and incident_response) in addition to tools. How do these MCP prompts become accessible within Claude Code?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "They are surfaced as @ -mentionable resources alongside files, fetched and attached to your message when referenced."
   },
   {
    "key": "B",
    "text": "They are automatically prepended to every conversation as additional system-level context, influencing Claude’s behavior throughout the session."
   },
   {
    "key": "C",
    "text": "They are added to Claude Code’s tool registry alongside the server’s tools, invoked automatically by the model when relevant to the task."
   },
   {
    "key": "D",
    "text": "They appear as slash commands (e.g., mcp_servername_deploy_checklist) that you can invoke, with arguments passed after the command name."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. They appear as slash commands (e.g., mcp_servername_deploy_checklist) that you can invoke, with arguments passed after the command name.\n\nMCP servers can expose prompts as one of the three MCP primitive types (tools, resources, and prompts). In Claude Code, MCP prompts are surfaced as slash commands using the naming convention /mcp__servername__promptname — for example, /mcp__devops__deploy_checklist — and any parameters the prompt defines are supplied as arguments typed after the command name, much like arguments passed to custom slash commands. This is distinct from MCP resources, which are instead surfaced as @-mentionable items that get fetched and attached to a message, and distinct from MCP tools, which populate the tool registry and are invoked automatically by the model during a task. Because prompts are reusable, explicitly user-triggered templates (not autonomous tool calls or injected system context), Claude Code exposes them through the slash-command interface rather than auto-invoking or auto-injecting them.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 166,
  "id": "ccar-f-q166",
  "type": "single",
  "select": 1,
  "question": "Your team has three requirements for how Claude Code should behave in your project: Claude must never modify files in the db/migrations/ directory. Claude should prefer your custom logging module over console.log. All TypeScript files must be auto-formatted with Prettier after every edit. All three requirements are currently written as instructions inside your project's CLAUDE.md file. During a complex refactoring session, a developer discovers that Claude edited a migration file, violating requirement #1. How should you restructure these requirements across Claude Code's configuration mechanisms?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add Edit(./db/migrations/**) to permissions.deny in the project settings, keep the logging preference in CLAUDE.md, and add a PostToolUse hook on the Edit tool that runs Prettier on changed TypeScript files."
   },
   {
    "key": "B",
    "text": "Move all three requirements into .claude/rules/ as path-scoped rules: one targeting db/migrations/** that forbids editing those files, and others targeting **/*.ts for the logging convention and formatting instruction."
   },
   {
    "key": "C",
    "text": "Rewrite all three requirements in CLAUDE.md using stronger directive language and add few-shot examples that demonstrate Claude refusing to edit migration files and running Prettier after edits."
   },
   {
    "key": "D",
    "text": "Configure hooks for all three: a PreToolUse hook script that blocks Edit calls targeting db/migrations/,a PreToolUse hook script that adds logging convention context before edits, and a PostToolUse hook that runs Prettier after TypeScript edits."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Add Edit(./db/migrations/**) to permissions.deny in the project settings, keep the logging preference in CLAUDE.md, and add a PostToolUse hook on the Edit tool that runs Prettier on changed TypeScript files.\n\n\nCLAUDE.md content is loaded into the model's context as advisory guidance, so the model can still deviate from it—especially during long, complex sessions—which is exactly why the migration file was edited despite the instruction. Claude Code's official documentation distinguishes deterministic enforcement layers from contextual guidance: permission rules (permissions.deny in settings.json) are evaluated by the Claude Code harness itself and block a matching tool call (e.g., Edit(./db/migrations/**)) before it can run, giving a guaranteed hard boundary, whereas CLAUDE.md is explicitly documented as 'not a hard security boundary.' The hooks documentation further states that for static path-based blocking you should 'use the permission system rather than a hook to enforce a hard allow or deny,' since hooks are best-effort while permission rules are deterministic and enforced with no LLM judgment involved. Meanwhile, the logging-module preference is a stylistic convention well-suited to CLAUDE.md, where the model can apply judgment. The Prettier formatting requirement is a repeatable, deterministic post-edit action, which is the standard use case for a PostToolUse hook (matching the Edit/Write tools) that invokes Prettier on the changed file—Claude Code's hooks guide gives this exact pattern as a canonical example. This mapping—hard restriction to permissions.deny, soft preference to CLAAUDE.md, deterministic automation to a PostToolUse hook—correctly addresses the demonstrated compliance failure by moving the safety-critical rule to an enforcement mechanism that cannot be bypassed by the model's behavior.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 167,
  "id": "ccar-f-q167",
  "type": "single",
  "select": 1,
  "question": "Your team wants Claude to follow a detailed code review checklist (8 items covering API changes, test coverage, documentation, security, etc.) whenever it reviews pull requests. The team also relies on Claude extensively for other tasks, including: Writing new features Debugging production issues Generating documentation Currently, developers manually paste the checklist at the start of each review session. Which approach best addresses this workflow need?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create a /review slash command containing the checklist, invoked when starting reviews."
   },
   {
    "key": "B",
    "text": "Create a dedicated review subagent with the checklist embedded in its configuration."
   },
   {
    "key": "C",
    "text": "Configure plan mode as the default for code review sessions."
   },
   {
    "key": "D",
    "text": "Add the checklist to the project’s CLAUDE.md file under a “Code Review” section."
   }
  ],
  "correct": [
   "A"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: A. Create a /review slash command containing the checklist, invoked when starting reviews.\n\nCustom slash commands in Claude Code are reusable prompt templates stored as markdown files (e.g., under .claude/commands/) that are invoked on demand by typing a command like /review. This lets the team encode the full 8-item checklist once and pull it into context only when a review session is explicitly started, replacing the manual copy-paste step. In contrast, content placed in CLAUDE.md is loaded automatically into every session's context regardless of task type, so putting a review-specific checklist there would unnecessarily inject it into unrelated work such as feature development, debugging, or documentation generation. A dedicated subagent or a default plan-mode setting doesn't match the simple need of triggering a specific static checklist only for review sessions, making the slash command the most targeted and efficient solution.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 168,
  "id": "ccar-f-q168",
  "type": "single",
  "select": 1,
  "question": "Your send_notification tool invokes third-party messaging APIs. If these services time out during delivery, you cannot tell whether the message was actually sent. At present, the tool returns is_error: true with a generic “Notification failed” message for every timeout. Production monitoring shows that agents automatically retry these failures, often causing users to receive duplicate notifications. How should you change the error response?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Return is_error: true with a structured field retry_safe: true for timeouts, distinguishing them from permanent failures that should not be retried."
   },
   {
    "key": "B",
    "text": "Return is_error: true with a message communicating uncertainty: “Timeout – status unknown. Message may have been sent. Avoid retry.”"
   },
   {
    "key": "C",
    "text": "Return is_error: true with a message encouraging retry: “Delivery service temporarily unavailable. Please retry the notification.”"
   },
   {
    "key": "D",
    "text": "Return is_error: true with the original message content echoed back."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Return is_error: true with a message communicating uncertainty: “Timeout – status unknown. Message may have been sent. Avoid retry.”\n\nA timeout after a delivery request creates an unknown-result condition rather than a confirmed delivery failure. Because the notification may already have been sent, an automatic retry can produce a duplicate; the error should clearly state that status is unknown and advise against retrying.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 169,
  "id": "ccar-f-q169",
  "type": "single",
  "select": 1,
  "question": "Your control_device tool controls smart-home devices through external APIs. If a device fails to respond within the timeout period, the tool returns an error. Production logs indicate that the agent only tells users, “the device is not responding,” without providing useful next steps. Which error-response structure would best allow the agent to provide helpful follow-up?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Set is_error: true with a structured technical error containing the device ID, timeout duration, and raw API response code for debugging purposes."
   },
   {
    "key": "B",
    "text": "Set is_error: true with a brief “Device offline” message and provide a separate tool the agent can call to retrieve context-specific troubleshooting suggestions."
   },
   {
    "key": "C",
    "text": "Set is_error: false with an optimistic message indicating the command was dispatched successfully but device acknowledgment is still pending."
   },
   {
    "key": "D",
    "text": "Set is_error: true with a message explaining the likely cause and suggesting troubleshooting steps the agent can offer the user."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Set is_error: true with a message explaining the likely cause and suggesting troubleshooting steps the agent can offer the user.\n\nAn error response should accurately signal the timeout while providing actionable, user-relevant context. Including a likely cause and suggested troubleshooting steps gives the agent information it can immediately turn into useful follow-up guidance.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 170,
  "id": "ccar-f-q170",
  "type": "single",
  "select": 1,
  "question": "Your content-curation agent finds articles, evaluates each one for relevance, and then adds chosen articles to themed collections. Using separate discover_articles(topic), analyze_article(id), and add_to_collection(article_id, collection_id) tools, you observe 18+ sequential tool calls per request, creating latency problems. The agent must make editorial decisions about which articles match a collection’s theme—this requires viewing all candidates and their analysis scores at the same time to choose a cohesive set. Which tool composition best improves efficiency while retaining editorial judgment?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Keep all tools separate but implement response caching for analyze_article calls."
   },
   {
    "key": "B",
    "text": "Create a curate_collection(topic, collection_id) tool that handles discovery, analysis, and selection internally using configurable quality thresholds."
   },
   {
    "key": "C",
    "text": "Create a discover_and_analyze(topic) composite tool that returns all candidates with their analysis scores, keeping add_to_collection separate for selective calls."
   },
   {
    "key": "D",
    "text": "Add a preview_curation(topic, collection_id) tool that shows what would be added based on predefined rules, with an approve_curation() tool to confirm."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Create a discover_and_analyze(topic) composite tool that returns all candidates with their analysis scores, keeping add_to_collection separate for selective calls.\n\nA composite discovery-and-analysis operation can gather and score all candidate articles in one workflow, reducing tool-call overhead while giving the agent the complete comparison set needed to make a cohesive editorial selection. Keeping the add operation separate preserves the agent’s ability to choose exactly which scored candidates are added rather than delegating selection to fixed thresholds or predefined rules.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 171,
  "id": "ccar-f-q171",
  "type": "single",
  "select": 1,
  "question": "Your post_content tool needs user confirmation before publishing. The current workflow shows “Ready to post to social media. Confirm?”, and analytics indicate that users approve 98% of requests within 2 seconds. Post-mortems identify incidents in which posts were sent to incorrect accounts, scheduled for incorrect times, or contained errors—all approved by users who did not notice the mistakes. How should the confirmation workflow be redesigned?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Auto-approve routine posts and only require explicit confirmation for unusual patterns like posting to new accounts or large audiences"
   },
   {
    "key": "B",
    "text": "Require users to type a confirmation phrase instead of clicking a button"
   },
   {
    "key": "C",
    "text": "Add a mandatory waiting period before the confirm option becomes available"
   },
   {
    "key": "D",
    "text": "Include the complete post text, target account, scheduled time, and platform in the confirmation request"
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Include the complete post text, target account, scheduled time, and platform in the confirmation request\n\nA meaningful confirmation must present the action’s material parameters so the user can verify them before approving: the full post content, target account, scheduled time, and platform. This makes confirmation an informed review of the irreversible or consequential action rather than a reflexive acknowledgment.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 172,
  "id": "ccar-f-q172",
  "type": "single",
  "select": 1,
  "question": "After 30+ turns, your conversational assistant has noticeably slower responses and sometimes produces less coherent outputs. Investigation shows: Average conversations reach 50,000 tokens by turn 35. Production logs show that 94% of user messages reference only the preceding 3–5 exchanges. The 6% of queries that reference earlier context generally ask about information the user could easily re-state. Your goal is to improve response speed and quality while preserving a good user experience. What is the most effective approach?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Enable prompt caching and continue sending the complete conversation history, using cached prefixes to reduce per-request costs while preserving all context."
   },
   {
    "key": "B",
    "text": "Build a retrieval system that stores all conversation turns and uses semantic search to pull in relevant historical context only when the current query appears to reference past information."
   },
   {
    "key": "C",
    "text": "Implement a summarization layer that progressively compresses older conversation turns into a running summary while keeping the most recent 5-6 turns verbatim, maintaining full historical context in condensed form."
   },
   {
    "key": "D",
    "text": "Implement a sliding window keeping only the system prompt and last 8-10 turns. When users reference earlier context, acknowledge the limitation and ask them to re-state the relevant information."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Implement a sliding window keeping only the system prompt and last 8-10 turns. When users reference earlier context, acknowledge the limitation and ask them to re-state the relevant information.\n\nA sliding context window keeps the prompt focused on the recent exchanges that nearly all requests actually need, substantially reducing inference latency and limiting irrelevant historical context that can dilute coherence. Since the uncommon earlier-context requests involve details users can easily repeat, asking for that information only when needed is a better speed-and-quality tradeoff than continuously retaining, summarizing, or retrieving the entire conversation history.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 173,
  "id": "ccar-f-q173",
  "type": "single",
  "select": 1,
  "question": "Your product-search tool queries an external catalog API and returns matching items. In production, the agent often retries searches immediately after receiving zero results, treating “no matches found” as a failure that requires a retry. The external API returns HTTP 200 with an empty results array—a valid response. How should you reorganize the tool’s result so the agent correctly interprets empty result sets?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Add a suggestions field containing alternative search strategies when results are empty, helping guide the agent toward more productive follow-up queries."
   },
   {
    "key": "B",
    "text": "Return a natural language string describing the outcome, allowing the agent to interpret the result contextually based on the message content."
   },
   {
    "key": "C",
    "text": "Return a result object with isError: true and a message explaining no products matched."
   },
   {
    "key": "D",
    "text": "Return a structured result with a success boolean and results array, reserving isError: true for actual execution failures only."
   }
  ],
  "correct": [
   "D"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: D. Return a structured result with a success boolean and results array, reserving isError: true for actual execution failures only.\n\nA successful catalog request can validly return no matching products. A structured response containing a success boolean and a results array explicitly represents that outcome as successful with empty data, whereas isError: true should indicate only actual tool-execution failures.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 174,
  "id": "ccar-f-q174",
  "type": "single",
  "select": 1,
  "question": "An agent uses three tools: get_property_details(property_id), which returns data including a street address; get_price_history(property_id), which returns historical pricing; and get_neighborhood_info(address), which returns area statistics. You observe that get_neighborhood_info always requires get_property_details to run first solely to extract the address, even when users identify the property by ID. This introduces unnecessary latency and failure coupling—if the first call fails, the neighborhood request fails as well. What tool-design change best resolves this?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Create a lookup_address(property_id) helper tool for retrieving addresses."
   },
   {
    "key": "B",
    "text": "Add retry logic and timeout handling to get_property_details."
   },
   {
    "key": "C",
    "text": "Change get_neighborhood_info to accept property_id, resolving the address internally."
   },
   {
    "key": "D",
    "text": "Consolidate into a single get_property_with_neighborhood(property_id) tool returning both datasets."
   }
  ],
  "correct": [
   "C"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: C. Change get_neighborhood_info to accept property_id, resolving the address internally.\n\nget_neighborhood_info should accept property_id and perform any necessary address resolution internally. This lets callers use the identifier they already have, eliminates an unnecessary externally orchestrated tool dependency, and prevents failure of the address-details call from blocking the neighborhood lookup.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 },
 {
  "no": 175,
  "id": "ccar-f-q175",
  "type": "single",
  "select": 1,
  "question": "The track_shipment(tracking_id) tool calls an external logistics API that can occasionally fail—the API may be temporarily unavailable, the tracking ID may be malformed, or the shipment may not exist. The tool currently raises a Python exception when an error occurs. Users report that the agent gives unhelpful replies such as “I’m having trouble with that request,” rather than suggesting alternatives like checking the tracking-number format or looking up the shipment by order number. How should errors in tool results be handled?",
  "imageMissing": false,
  "options": [
   {
    "key": "A",
    "text": "Return a generic error response (e.g., {\"success\": false, \"error\": \"lookup_failed\"}) for all failure cases to maintain a consistent schema and avoid exposing internal error details."
   },
   {
    "key": "B",
    "text": "Return structured error information as normal tool output including error type, recoverability status, and actionable context for the user."
   },
   {
    "key": "C",
    "text": "Create dedicated error-recovery tools (retry_tracking_lookup, search_by_order_number) that the model can invoke after the primary tracking tool returns a failure indicator."
   },
   {
    "key": "D",
    "text": "Implement retry logic with exponential backoff inside the tool implementation so transient errors are automatically handled and only return a result after all retry attempts are exhausted."
   }
  ],
  "correct": [
   "B"
  ],
  "yourAnswer": [],
  "result": "unanswered",
  "explanation": "Correct answer: B. Return structured error information as normal tool output including error type, recoverability status, and actionable context for the user.\n\nStructured error output lets the agent distinguish transient service failures from invalid tracking IDs and missing shipments, determine whether recovery is possible, and give the user an appropriate next step. Including an error category, recoverability indicator, and actionable context preserves useful information without relying on exceptions as the agent-facing interface.",
  "references": [
   {
    "title": "from ThinhNH39's data",
    "url": ""
   }
  ]
 }
];