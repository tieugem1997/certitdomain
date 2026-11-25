# CCDV-F — Claude Certified Developer – Foundations: 155 questions

Source: practice-cert.maithienan.com study mode. Your progress: 0 correct, 0 incorrect, 155 unanswered.

Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).


---

## Q1 · single choice · — not answered

A developer creates an AI coding assistant for a known workflow with repeatable steps. 

Which design approach is appropriate?

- **A.** Allow unlimited autonomous exploration
- ✅ **B.** Use a fixed sequence of prompts
- **C.** Remove all workflow instructions
- **D.** Use random decision paths

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a fixed sequence of prompts

Chuỗi prompt cố định phù hợp bước đã biết và lặp lại: dễ kiểm tra đầu vào/đầu ra từng bước mà không cần agent tự tìm đường.

#### Vì sao các phương án khác không phù hợp?

- **Allow unlimited autonomous exploration**: Tự khám phá vô hạn thêm chi phí và rủi ro không cần cho quy trình đã biết.
- **Remove all workflow instructions**: Bỏ hướng dẫn làm mất hợp đồng từng bước.
- **Use random decision paths**: Đường đi ngẫu nhiên phá tính lặp lại cần thiết.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q2 · single choice · — not answered

A team wants stable automated pull request review results from Claude Code. 

Which method best supports automation?

- **A.** Use stricter markdown parsing rules
- ✅ **B.** Use JSON output with a defined schema
- **C.** Split responses using headings
- **D.** Post the entire response for manual review

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use JSON output with a defined schema

JSON theo schema cố định cho CI đọc field và validate tự động, thay vì đoán bố cục câu chữ.

#### Vì sao các phương án khác không phù hợp?

- **Split responses using headings**: Heading chỉ định dạng văn bản, không ràng buộc kiểu dữ liệu.
- **Use stricter markdown parsing rules**: Parser Markdown chặt vẫn dễ hỏng khi câu chữ đổi.
- **Post the entire response for manual review**: Review toàn response thủ công không đáp ứng tự động hóa.

**Tham khảo:**

- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference)

</details>


---

## Q3 · single choice · — not answered

A team needs to update every file ending with `.fixture.json` across a monorepo. Searching for the word “fixture” creates noisy results and misses sparse files. 

Which tool-use strategy should be adopted?

- **A.** Use Bash commands and paste the entire directory listing.
- ✅ **B.** Use Glob patterns like `**/*.fixture.json` and then Read matching files.
- **C.** Use Grep for "fixture" and infer matching files.
- **D.** Read all possible files before searching.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Glob patterns like `**/*.fixture.json` and then Read matching files.

Glob khớp hậu tố đường dẫn nên tìm được cả file ít nội dung; Read sau đó chỉ đọc ứng viên đúng.

#### Vì sao các phương án khác không phù hợp?

- **Use Bash commands and paste the entire directory listing.**: Pasting cả listing tốn context và không khoanh chính xác hậu tố.
- **Read all possible files before searching.**: Đọc mọi file trước làm tăng công và nhiễu không cần thiết.
- **Use Grep for "fixture" and infer matching files.**: Grep tìm nội dung, không bảo đảm tên file có hậu tố mong muốn.

**Tham khảo:**

- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q4 · single choice · — not answered

**Scenario**: 

Developer Productivity with Claude Your CI job invokes Claude Code successfully and posts a single pull request summary comment. 

The team now wants automated inline comments for each finding, but the integration frequently breaks because Claude sometimes adds prose, changes field names, or formats findings as markdown. 

What change best supports reliable automation?

- ✅ **A.** Run Claude Code with `--output-format json` and `--json-schema`, then map validated findings to inline PR comments.
- **B.** Parse Claude's markdown bullets with regular expressions.
- **C.** Store previous comments and ask Claude to rewrite them into records.
- **D.** Strengthen the prompt to demand valid JSON only.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run Claude Code with `--output-format json` and `--json-schema`, then map validated findings to inline PR comments.

Output JSON cùng JSON Schema ổn định hợp đồng findings để validate trước khi ánh xạ sang inline comments; vẫn phải kiểm tra line/path hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **Parse Claude's markdown bullets with regular expressions.**: Regex Markdown phụ thuộc bố cục thay đổi.
- **Strengthen the prompt to demand valid JSON only.**: Chỉ prompt đòi JSON không ràng buộc field như schema.
- **Store previous comments and ask Claude to rewrite them into records.**: Viết lại comment cũ không bảo đảm record mới đúng schema.

**Tham khảo:**

- [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference)
- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q5 · single choice · — not answered

**Scenario**: 

Multi-Agent Research System The document analysis subagent receives coordinator-selected PDFs and reports from an approved catalog, but it has a generic URL retrieval tool. 

It sometimes follows links inside documents to: l blogs l login pages l duplicate HTML summaries and then cites those pages instead of the approved sources. 

What change best addresses this?

- **A.** Give the document analysis subagent web search tools too, so it can independently confirm whether linked pages are relevant.
- **B.** Keep fetch_url available, but add prompt instructions warning the subagent never to open links found inside documents.
- **C.** Allow fetch_url for any link, then have synthesis discard citations whose domains are not in the approved catalog.
- ✅ **D.** Replace fetch_url with a load_document tool that accepts catalog document IDs or approved URLs and validates before fetching.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Replace fetch_url with a load_document tool that accepts catalog document IDs or approved URLs and validates before fetching.

load_document kiểm tra ID/URL trong catalog tại biên truy cập, nên tài liệu không thể tự mở rộng nguồn được phép qua link nhúng.

#### Vì sao các phương án khác không phù hợp?

- **Keep fetch_url available, but add prompt instructions warning the subagent never to open links found inside documents.**: Cảnh báo trong prompt không cưỡng chế giới hạn URL ở công cụ.
- **Give the document analysis subagent web search tools too, so it can independently confirm whether linked pages are relevant.**: Thêm search mở rộng nguồn thay vì chặn nguồn ngoài catalog.
- **Allow fetch_url for any link, then have synthesis discard citations whose domains are not in the approved catalog.**: Lọc cuối quá muộn vì agent đã truy cập và dựa vào nguồn sai.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q6 · single choice · — not answered

A coordinator launches subagents to analyze API handlers, database writes, and scheduled jobs. 

Final architecture reports often attach claims to incorrect files or omit line ranges. 

What improves handoff reliability?

- ✅ **A.** Require structured handoff records with paths, symbols, line ranges, and evidence snippets.
- **B.** Concatenate complete transcripts
- **C.** Ask the synthesizer to reconstruct locations.
- **D.** Use regex parsing on summaries.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Require structured handoff records with paths, symbols, line ranges, and evidence snippets.

Handoff có path, symbol, dòng và trích dẫn giữ liên kết claim→evidence, giúp synthesizer kiểm tra thay vì tái dựng vị trí.

#### Vì sao các phương án khác không phù hợp?

- **Concatenate complete transcripts**: Transcript dài khó tìm bằng chứng và vẫn có thể gắn nhầm.
- **Use regex parsing on summaries.**: Regex summary không phục hồi evidence bị bỏ mất.
- **Ask the synthesizer to reconstruct locations.**: Tự dựng location từ suy đoán tạo citation không kiểm chứng.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q7 · single choice · — not answered

**Scenario**: 

Structured Data Extraction Your QA pipeline flags mistakes in supplier contracts. 

Analysts accept many findings about missing renewal clauses but reject most findings involving informal pricing language. 

Current logs store only: l Document ID l Field name l Confidence l Finding text 

What change should you make first?

- **A.** Increase QA confidence threshold globally.
- ✅ **B.** Add a structured detected_pattern field to each QA finding, then analyze acceptance rates by pattern and document type.
- **C.** Store only analyst decisions.
- **D.** Tell Claude to report only findings analysts accept.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add a structured detected_pattern field to each QA finding, then analyze acceptance rates by pattern and document type.

detected_pattern bổ sung chiều phân loại lỗi, cho biết pattern giá nào hay bị bác trong từng loại hợp đồng trước khi thay threshold.

#### Vì sao các phương án khác không phù hợp?

- **Increase QA confidence threshold globally.**: Tăng threshold chung có thể loại cả findings đúng ở nhóm khác.
- **Store only analyst decisions.**: Chỉ quyết định người review làm mất context pattern gây lỗi.
- **Tell Claude to report only findings analysts accept.**: Yêu cầu chỉ báo điều được chấp nhận không định nghĩa tiêu chí đo được.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q8 · single choice · — not answered

A multi-agent system uses a coordinator and specialized researchers. 

How should required MCP server configuration be shared across a team repository?

- **A.** Ask every user to recreate servers manually
- **B.** Store all servers in personal user configuration
- **C.** Combine all integrations into one MCP server
- ✅ **D.** Place required shared servers in project-scoped .mcp.json

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Place required shared servers in project-scoped .mcp.json

mcp.json cấp project chia sẻ cấu hình server cần thiết qua repository; credential riêng vẫn phải được quản lý đúng.

#### Vì sao các phương án khác không phù hợp?

- **Ask every user to recreate servers manually**: Tái tạo thủ công dễ lệch giữa thành viên.
- **Store all servers in personal user configuration**: User config riêng không tự đi cùng repository.
- **Combine all integrations into one MCP server**: Gộp server không giải quyết scope phân phối config.

**Tham khảo:**

- [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp)

</details>


---

## Q9 · single choice · — not answered

A customer support agent alternates unpredictably between `get_customer` and `lookup_order` when handling mixed requests. 

The MCP tool catalog only contains short autogenerated descriptions. 

What change should you make first to improve tool selection reliability?

- **A.** Update the system prompt to tell Claude to think carefully before selecting tools.
- **B.** Add a keyword router that maps phrases like “order” or “refund” to one tool.
- **C.** Consolidate get_customer and lookup_order into one broad lookup tool.
- ✅ **D.** Rewrite each MCP tool description to specify purpose, accepted identifiers, returned fields, edge cases, and boundaries.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Rewrite each MCP tool description to specify purpose, accepted identifiers, returned fields, edge cases, and boundaries.

Mô tả rõ mục đích, identifier, output và ranh giới giúp phân biệt lookup khách với đơn, sửa đúng thiếu thông tin của catalog.

#### Vì sao các phương án khác không phù hợp?

- **Update the system prompt to tell Claude to think carefully before selecting tools.**: “Think carefully” không bổ sung ý nghĩa khác nhau giữa tool.
- **Add a keyword router that maps phrases like “order” or “refund” to one tool.**: Keyword router đơn giản dễ sai với mixed requests và identifier.
- **Consolidate get_customer and lookup_order into one broad lookup tool.**: Gộp tool rộng che mất ranh giới và tăng mơ hồ tham số.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q10 · single choice · — not answered

Your Claude application's content policy specifies categories of content it should not produce under any circumstance. 

The application currently has no mechanism to enforce this policy, and content matching these categories is appearing in the application's output. 

How would you enforce the content policy?

- ✅ **A.** Add deterministic output filtering that checks responses against the content policy before they reach users.
- **B.** Remove the content policy entirely and let any output reach users during normal operation, accepting whatever content the application produces in response to incoming traffic.
- **C.** Move enforcement to users by asking them to report content policy violations after the violating content has already reached them in the application's responses.
- **D.** Enhance the system prompt to contain explicit instructions for the categories to avoid, complete with examples of each category. Treat the strengthened prompt as the primary enforcement mechanism for the application's content policy across all responses.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add deterministic output filtering that checks responses against the content policy before they reach users.

Đặt bộ lọc ở đầu ra ứng dụng để kiểm tra và chặn nội dung vi phạm trước khi gửi. Prompt hỗ trợ hành vi nhưng không thay thế bước chặn; vẫn phải kiểm thử độ bao phủ của bộ lọc.

#### Vì sao các phương án khác không phù hợp?

- **Enhance the system prompt to contain explicit instructions for the categories to avoid, complete with examples of each category. Treat the strengthened prompt as the primary enforcement mechanism for the application's content policy across all responses.**: Chỉ tăng hướng dẫn trong prompt không đủ để cưỡng chế quy tắc đầu ra.
- **Remove the content policy entirely and let any output reach users during normal operation, accepting whatever content the application produces in response to incoming traffic.**: Bỏ chính sách là bỏ yêu cầu.
- **Move enforcement to users by asking them to report content policy violations after the violating content has already reached them in the application's responses.**: Người dùng báo cáo thì nội dung vi phạm đã được gửi đi.

**Tham khảo:**

- [platform.claude.com — mitigate-jailbreaks](%5C%22https%3A//platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks%5C%22)

</details>


---

## Q11 · single choice · — not answered

A debugging agent investigates unfamiliar systems where the correct solution is unknown at the beginning. 

Which strategy should it use?

- ✅ **A.** Use adaptive planning based on discoveries
- **B.** Ignore intermediate findings
- **C.** Always restart from the beginning
- **D.** Follow a completely fixed workflow

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use adaptive planning based on discoveries

Kế hoạch thích ứng cập nhật theo bằng chứng debug, vì bước tiếp theo chưa biết trước khi tìm nguyên nhân.

#### Vì sao các phương án khác không phù hợp?

- **Follow a completely fixed workflow**: Workflow hoàn toàn cố định không đáp ứng nhánh điều tra mới.
- **Ignore intermediate findings**: Bỏ kết quả trung gian khiến điều tra không tích lũy bằng chứng.
- **Always restart from the beginning**: Luôn bắt đầu lại mất tiến độ và lặp kiểm tra.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q12 · single choice · — not answered

An engineer asks Claude to add a caching layer around a legacy authorization module. 

The system has multiple tenants, audit logging, and inconsistent invalidation behavior. 

What should happen before modifying files?

- ✅ **A.** Ask targeted questions about invariants, invalidation, audit requirements, and failure modes.
- **B.** Implement a simple cache wrapper and iterate later.
- **C.** Provide performance goals and let Claude infer rules.
- **D.** Copy caching patterns from another module.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Ask targeted questions about invariants, invalidation, audit requirements, and failure modes.

Cache authorization phải giữ tenant isolation, audit và invalidation; câu hỏi nhắm làm rõ bất biến trước khi bọc cache có thể cấp quyền sai.

#### Vì sao các phương án khác không phù hợp?

- **Implement a simple cache wrapper and iterate later.**: Wrapper đơn giản có thể giữ quyền đã bị thu hồi hoặc rò tenant.
- **Provide performance goals and let Claude infer rules.**: Chỉ performance goal không định nghĩa tính đúng đắn bảo mật.
- **Copy caching patterns from another module.**: Pattern module khác có thể dùng key/invalidation khác.

**Tham khảo:**

- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q13 · single choice · — not answered

Your team's Claude agent has accumulated several customizations that bypass the SDK's defaults, including custom history management, retry logic, and error handling. 

A new team member has proposed reverting all the customizations to maintain the codebase more easily. 

The tech lead disagrees and says each customization was added for a reason. 

How would you advise the team?

- ✅ **A.** Decide on each customization individually based on its original reason and the SDK's current capabilities.
- **B.** Revert all customizations to the SDK's defaults to standardize the codebase.
- **C.** Keep all customizations, trusting that the tech lead's original reasoning is still valid.
- **D.** Migrate the agent off the SDK and rebuild it with a custom loop.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Decide on each customization individually based on its original reason and the SDK's current capabilities.

Đánh giá từng tùy biến theo vấn đề ban đầu và khả năng SDK hiện tại. Chỉ giữ khi nhu cầu vẫn còn và cơ chế mặc định chưa đáp ứng.

#### Vì sao các phương án khác không phù hợp?

- **Migrate the agent off the SDK and rebuild it with a custom loop.**: Viết lại toàn bộ thêm phức tạp trước khi đánh giá nhu cầu.
- **Revert all customizations to the SDK's defaults to standardize the codebase.**: Bỏ hết có thể làm mất hành vi cần thiết.
- **Keep all customizations, trusting that the tech lead's original reasoning is still valid.**: Giữ hết bỏ qua yêu cầu đã đổi và cải tiến của SDK.

**Tham khảo:**

- [code.claude.com — overview](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/overview%5C%22)

</details>


---

## Q14 · single choice · — not answered

A developer creates a multi-agent workflow where one agent researches documentation and another writes implementation plans. 

How should information flow between agents be handled?

- **A.** Assume all agents share the same conversation context
- ✅ **B.** Pass required findings through the coordinator
- **C.** Remove the coordinator role
- **D.** Allow each agent to access every previous message

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Pass required findings through the coordinator

Coordinator truyền findings cần thiết một cách có cấu trúc vì subagent thường có context riêng, không mặc nhiên thấy mọi hội thoại.

#### Vì sao các phương án khác không phù hợp?

- **Assume all agents share the same conversation context**: Giả định chung context dễ mất thông tin chưa được chuyển.
- **Allow each agent to access every previous message**: Truy cập mọi message không cần thiết và tăng nhiễu/quyền.
- **Remove the coordinator role**: Bỏ coordinator không tạo hợp đồng trao đổi findings.

**Tham khảo:**

- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q15 · single choice · — not answered

A structured extraction system divides documents into sections and sends them to extraction subagents. 

One subagent temporarily loses access to its source system. 

The current implementation either returns an empty successful extraction or aborts the entire document. 

What should you change?

- **A.** Retry the failed section until it succeeds before returning anything.
- **B.** Terminate the entire document workflow whenever any subagent fails.
- **C.** Return an empty extraction object for the failed section.
- ✅ **D.** Have subagents report unresolved failures with attempted section, failure type, partial fields, and recovery suggestions.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Have subagents report unresolved failures with attempted section, failure type, partial fields, and recovery suggestions.

Báo lỗi có section, loại lỗi, trường đã lấy và gợi ý phục hồi phân biệt thiếu dữ liệu thật với không đọc được nguồn, đồng thời giữ phần thành công.

#### Vì sao các phương án khác không phù hợp?

- **Return an empty extraction object for the failed section.**: Empty success che giấu mất nguồn như thể không có dữ liệu.
- **Terminate the entire document workflow whenever any subagent fails.**: Một section lỗi không luôn cần hủy mọi section thành công.
- **Retry the failed section until it succeeds before returning anything.**: Retry vô hạn không có giới hạn chi phí hay cơ chế trả lỗi.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)
- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q16 · single choice · — not answered

A multi-agent research system occasionally generates reports while the synthesis agent is still incomplete, resulting in missing or unverifiable citations. 

What change prevents invalid reports?

- **A.** Generate reports immediately and remove invalid citations afterward.
- **B.** Tell the report agent to refuse incomplete synthesis.
- ✅ **C.** Block report-generation tasks until synthesis returns a structured citation manifest and success status.
- **D.** Check whether synthesis messages contain words like “complete.”

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Block report-generation tasks until synthesis returns a structured citation manifest and success status.

Gate dựa success status và citation manifest chặn chạy report trước khi synthesis hoàn tất, cưỡng chế phụ thuộc bằng state thay vì câu chữ.

#### Vì sao các phương án khác không phù hợp?

- **Generate reports immediately and remove invalid citations afterward.**: Xóa citation sau không phục hồi evidence và có thể đã xuất báo cáo sai.
- **Tell the report agent to refuse incomplete synthesis.**: Prompt từ chối không bằng kiểm tra điều kiện ở scheduler.
- **Check whether synthesis messages contain words like “complete.”**: Từ “complete” có thể xuất hiện trong thông điệp chưa hoàn tất.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q17 · single choice · — not answered

A migration assistant sometimes starts dependency analysis before collecting required package manager and framework versions. 

What change most reliably enforces the correct first step?

- **A.** Detect whether Claude mentions metadata completion in natural language.
- ✅ **B.** Force the metadata extraction tool with tool_choice for the first request.
- **C.** Set tool_choice to any for the first request.
- **D.** Strengthen the system prompt requiring metadata extraction first.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Force the metadata extraction tool with tool_choice for the first request.

Ép chọn tool trích metadata bằng tool_choice là cơ chế khóa nguồn muốn nói: trên model hỗ trợ, chỉ định tên tool ràng buộc lựa chọn đầu tiên trực tiếp hơn prompt. Nhưng điều này có điều kiện: tài liệu hiện hành liệt kê model và cấu hình thinking từ chối ép tool. Cần kiểm tra model thực tế và chặn phân tích phụ thuộc trong điều phối cho đến khi đủ metadata.

#### Vì sao các phương án khác không phù hợp?

- **Detect whether Claude mentions metadata completion in natural language.**: Nhắc đã xong bằng ngôn ngữ tự nhiên không chứng minh đã đủ metadata.
- **Set tool_choice to any for the first request.**: Chọn any buộc gọi một tool khi được hỗ trợ, nhưng không chỉ định tool metadata.
- **Strengthen the system prompt requiring metadata extraction first.**: Prompt mạnh hơn nêu thứ tự nhưng không cưỡng chế điều kiện trước trực tiếp như chốt điều phối có kiểm tra.

**Cần xem lại:** Đề thiếu model và cấu hình thinking. Ép tool_choice không được hỗ trợ trên một số model/cấu hình hiện tại, nên khóa nguồn không đúng vô điều kiện. Giữ nguyên khóa và cần nêu môi trường hỗ trợ hoặc viết lại theo chốt metadata xác định.

**Tham khảo:**

- [Define tools and control tool choice](%5C%22https%3A//platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools%5C%22)

</details>


---

## Q18 · single choice · — not answered

A team wants Claude-generated pull request reviews to integrate with existing development systems. 

What output approach should be selected?

- **A.** Long markdown explanations only
- **B.** Free-form text responses
- ✅ **C.** Structured JSON with validation rules
- **D.** Unformatted comments

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Structured JSON with validation rules

JSON có validation rules tạo hợp đồng máy đọc được để tích hợp findings mà không suy cấu trúc từ văn bản.

#### Vì sao các phương án khác không phù hợp?

- **Free-form text responses**: Free-form text thay field/bố cục khó parse ổn định.
- **Long markdown explanations only**: Markdown dài ưu tiên đọc thủ công, không schema dữ liệu.
- **Unformatted comments**: Comment không format không ràng buộc kiểu hay field bắt buộc.

**Tham khảo:**

- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q19 · single choice · — not answered

A new Claude model release includes performance improvements for several reasoning tasks but has changed the format of its responses to system prompts that use multi-section instructions. 

Your application uses multi-section system prompts heavily. 

Initial evaluation on the application's actual workload shows the new model performs 8 percent better on reasoning tasks but produces malformed output on roughly 3 percent of requests because of the format change. 

The team is debating whether to upgrade. 

How would you decide?

- **A.** Upgrade and add a downstream validation step that catches the 3 percent malformed output before it reaches users, treating the validation step as the team's mitigation for the format change.
- ✅ **B.** Adapt the application's system prompt to the new model's format expectations and re-evaluate, then upgrade only if the adapted prompt eliminates the malformed output while preserving the reasoning improvements.
- **C.** Upgrade immediately, because the 8 percent reasoning improvement outweighs the 3 percent malformed output rate across the application's typical request distribution.
- **D.** Stay on the previous model permanently to avoid the malformed output rate and any future format changes that subsequent model releases might introduce in the application.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Adapt the application's system prompt to the new model's format expectations and re-evaluate, then upgrade only if the adapted prompt eliminates the malformed output while preserving the reasoning improvements.

Phải xử lý lỗi định dạng trong lần nâng cấp: sửa prompt, chạy lại tập đánh giá đại diện và kiểm tra đồng thời tính hợp lệ lẫn chất lượng suy luận.

#### Vì sao các phương án khác không phù hợp?

- **Upgrade and add a downstream validation step that catches the 3 percent malformed output before it reaches users, treating the validation step as the team's mitigation for the format change.**: Chỉ chặn đầu ra chưa sửa sự không tương thích giữa model và prompt.
- **Stay on the previous model permanently to avoid the malformed output rate and any future format changes that subsequent model releases might introduce in the application.**: Giữ model cũ mãi bỏ qua cải tiến mà không đánh giá.
- **Upgrade immediately, because the 8 percent reasoning improvement outweighs the 3 percent malformed output rate across the application's typical request distribution.**: Suy luận tốt hơn không làm dữ liệu sai định dạng trở nên hợp lệ.

**Tham khảo:**

- [platform.claude.com — develop-tests](%5C%22https%3A//platform.claude.com/docs/en/test-and-evaluate/develop-tests%5C%22)

</details>


---

## Q20 · single choice · — not answered

A developer wants Claude to return API responses that can be directly consumed by another application. 

Which technique should be used?

- **A.** Ask Claude for longer explanations
- **B.** Request formatted paragraphs
- **C.** Allow unrestricted responses
- ✅ **D.** Use structured output with defined fieldscorrect

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use structured output with defined fieldscorrect

Dùng structured output có các trường xác định: ứng dụng khác cần tên, kiểu và giá trị bắt buộc dự đoán được thay vì đoạn văn theo phong cách. Phản hồi ràng buộc schema và kiểm tra ở điểm tiếp nhận làm giao diện đáng tin cậy. Nội dung được chọn trong nguồn có lỗi chép cần duyệt, không tự sửa lựa chọn.

#### Vì sao các phương án khác không phù hợp?

- **Request formatted paragraphs**: Đoạn văn được định dạng cải thiện trình bày nhưng chưa xác lập trường và kiểu cho máy.
- **Ask Claude for longer explanations**: Giải thích dài hơn thêm văn bản thay vì hợp đồng dữ liệu.
- **Allow unrestricted responses**: Phản hồi không giới hạn cho phép dạng mà ứng dụng nhận không hiểu.

**Cần xem lại:** Lựa chọn được chọn chứa từ lỗi fieldscorrect. Có thể nhận ra ý structured output, nhưng cần đối chiếu bản gốc và sửa lựa chọn bằng thay đổi biên tập rõ ràng.

**Tham khảo:**

- [Structured outputs](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/structured-outputs%5C%22)

</details>


---

## Q21 · single choice · — not answered

A teammate is debugging a Claude application whose system prompt has grown to several hundred lines and now contains overlapping, contradictory, and obsolete instructions. 

How would you advise the teammate?

- **A.** Split the prompt across multiple system prompts so the model sees a smaller portion at any given time.
- ✅ **B.** Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant.
- **C.** Add more explicit instructions so the most recent rules dominate the model's interpretation of the prompt during each request.
- **D.** Tighten only the contradictory rules first, treating the overlap and obsolete content as lower-priority work the team can address later.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant.

Rà toàn bộ hướng dẫn, bỏ quy tắc cũ và quy tắc xung đột. Một đặc tả nhất quán dễ thực hiện và đánh giá hơn danh sách ngoại lệ chồng chất.

#### Vì sao các phương án khác không phù hợp?

- **Add more explicit instructions so the most recent rules dominate the model's interpretation of the prompt during each request.**: Thêm hướng dẫn có thể làm mâu thuẫn chồng thêm.
- **Tighten only the contradictory rules first, treating the overlap and obsolete content as lower-priority work the team can address later.**: Chỉ sửa xung đột vẫn để nguyên các nguyên nhân đã nêu khác.
- **Split the prompt across multiple system prompts so the model sees a smaller portion at any given time.**: Chia nội dung mâu thuẫn sang nhiều message không giải quyết mâu thuẫn.

**Tham khảo:**

- [platform.claude.com — claude-prompting-best-practices](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices%5C%22)

</details>


---

## Q22 · single choice · — not answered

Multiple backend problems are returned to an agent as the same message: “Operation failed.” 

Problems include invalid order IDs, temporary service timeouts, expired tokens, and policy restrictions. 

What change most improves recovery behavior?

- **A.** Retry every failed tool call twice before escalation.
- **B.** Map failures to customer sentiment levels.
- ✅ **C.** Return structured MCP errors with categories, retryability, and user-safe details.
- **D.** Keep generic failures and let Claude infer retryability.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Return structured MCP errors with categories, retryability, and user-safe details.

Error có category, retryability và chi tiết an toàn giúp phân biệt ID sai, token hết hạn, timeout và policy block để chọn phục hồi đúng.

#### Vì sao các phương án khác không phù hợp?

- **Retry every failed tool call twice before escalation.**: Retry mọi lỗi hai lần lãng phí với ID sai hoặc policy từ chối.
- **Keep generic failures and let Claude infer retryability.**: Thông điệp chung không cung cấp căn cứ quyết định retry.
- **Map failures to customer sentiment levels.**: Sentiment không mô tả nguyên nhân kỹ thuật hoặc khả năng retry.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q23 · single choice · — not answered

**Scenario**: 

Multi-Agent Research System You are building a multi-agent research system using the Claude Agent SDK. 

A coordinator agent delegates to specialized subagents: one searches the web, one analyzes documents, one synthesizes findings, and one generates reports. 

Your coordinator's document-analysis subagent depends on an internal library-catalog MCP server. 

It works in your local Claude Code session, but two teammates who cloned the repository cannot access the catalog tools, so their runs fall back to weaker web searches. 

Separately, one researcher is testing an experimental notes server that should not affect the team. 

What should you change?

- **A.** Place both servers in each user's ~/.claude.json, and rely on onboarding scripts to synchronize changes across machines.
- ✅ **B.** Move the required catalog server into project-scoped .mcp.json, and keep the experimental notes server in user-scoped ~/.claude.json.
- **C.** Combine the catalog and notes integrations into one MCP server, and expose only role-specific tools to subagents.
- **D.** Document per-user claude mcp add commands in README, and ask each researcher to recreate both servers locally.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Move the required catalog server into project-scoped .mcp.json, and keep the experimental notes server in user-scoped ~/.claude.json.

Catalog bắt buộc ở .mcp.json project đi cùng repo, còn server ghi chú thử nghiệm ở user scope không ảnh hưởng cả nhóm.

#### Vì sao các phương án khác không phù hợp?

- **Document per-user claude mcp add commands in README, and ask each researcher to recreate both servers locally.**: Hướng dẫn thủ công cho cả hai server vẫn dễ thiếu config và phát tán thử nghiệm.
- **Place both servers in each user's ~/.claude.json, and rely on onboarding scripts to synchronize changes across machines.**: Đồng bộ user config trộn tùy chọn cá nhân với phụ thuộc project.
- **Combine the catalog and notes integrations into one MCP server, and expose only role-specific tools to subagents.**: Gộp server không giải quyết phân phối scope và cô lập thử nghiệm.

**Tham khảo:**

- [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp)

</details>


---

## Q24 · single choice · — not answered

**Scenario**: 

Developer Productivity with Claude A Claude-powered helper updates legacy configuration files to a new format. 

Initial generations look reasonable, but repeated runs keep breaking different corner cases: l Missing optional sections l Duplicate keys l Large files with thousands of entries Developers have been sending prompts like "fix the migration bugs" and receiving inconsistent improvements. 

What refinement approach should they use next?

- **A.** Ask Claude to reread the entire legacy codebase and rewrite the migration helper from scratch after each failed run.
- **B.** Remove the most difficult corner-case checks temporarily so Claude can stabilize the happy-path migration behavior first.
- **C.** Tell Claude the output is still wrong, request a more careful implementation, and continue until reviewers approve it.
- ✅ **D.** Share the failing test names, inputs, expected versus actual outputs, and stack traces, then iterate on minimal fixes.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Share the failing test names, inputs, expected versus actual outputs, and stack traces, then iterate on minimal fixes.

Input lỗi, expected/actual và stack trace giúp tái hiện chính xác regression rồi sửa nhỏ; “fix bugs” chung không chỉ rõ điều kiện hỏng.

#### Vì sao các phương án khác không phù hợp?

- **Ask Claude to reread the entire legacy codebase and rewrite the migration helper from scratch after each failed run.**: Viết lại mọi lần tăng phạm vi hồi quy và bỏ nguyên nhân cụ thể.
- **Remove the most difficult corner-case checks temporarily so Claude can stabilize the happy-path migration behavior first.**: Bỏ edge checks chỉ giấu lỗi đang cần xử lý.
- **Tell Claude the output is still wrong, request a more careful implementation, and continue until reviewers approve it.**: “Careful” không thay evidence tái hiện.

**Tham khảo:**

- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q25 · single choice · — not answered

Supplier contract extraction returns null values for effective dates and renewal terms even though information exists in cover letters, footnotes, and table captions. 

What change most improves accuracy?

- **A.** Retry until all metadata fields contain values.
- ✅ **B.** Add targeted few-shot examples showing extraction from varied document sections.
- **C.** Tell Claude null values are unacceptable for supplier contracts.
- **D.** Make fields required and non-null.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add targeted few-shot examples showing extraction from varied document sections.

Ví dụ lấy thông tin từ cover letter, footnote và caption dạy pattern vị trí khác nhau, giải quyết việc extractor chỉ chú ý phần chính.

#### Vì sao các phương án khác không phù hợp?

- **Retry until all metadata fields contain values.**: Retry không đổi hướng chú ý và có thể lặp thiếu dữ liệu.
- **Make fields required and non-null.**: Non-null bắt buộc có thể ép đoán thay vì tìm đúng nguồn.
- **Tell Claude null values are unacceptable for supplier contracts.**: Cấm null không chỉ vị trí cần đọc và tăng nguy cơ bịa.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

</details>


---

## Q26 · single choice · — not answered

A legacy subscription service has cancellation behavior distributed across command-line scripts, web handlers, and scheduled jobs. 

Previous direct edits often targeted the wrong abstraction. 

Which workflow should be recommended first?

- **A.** Start separate direct sessions for each module and combine changes later.
- ✅ **B.** Use plan mode to map relevant flows and compare implementation points before modifications.
- **C.** Directly edit and rely on test failures to guide corrections.
- **D.** Read every repository file before implementing changes.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use plan mode to map relevant flows and compare implementation points before modifications.

Plan mode khoanh flow cancellation qua script, web và job, so sánh điểm sửa trước khi thay đổi nhầm tầng.

#### Vì sao các phương án khác không phù hợp?

- **Read every repository file before implementing changes.**: Đọc mọi file không cần thiết khi có thể tìm flow liên quan.
- **Directly edit and rely on test failures to guide corrections.**: Sửa trước rồi chờ test không thay phân tích ownership.
- **Start separate direct sessions for each module and combine changes later.**: Các session rời có thể bỏ liên kết hành vi giữa module.

**Tham khảo:**

- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q27 · single choice · — not answered

A team builds an application where Claude must classify customer requests into predefined categories. 

Which approach provides the most consistent results?

- **A.** Remove category definitions from the prompt
- **B.** Ask Claude to create new categories when needed
- ✅ **C.** Provide examples of each category and expected classifications
- **D.** Use a random classification approach.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Provide examples of each category and expected classifications

Ví dụ từng category cùng expected label làm rõ ranh giới phân loại, nhất là trường hợp dễ nhầm.

#### Vì sao các phương án khác không phù hợp?

- **Ask Claude to create new categories when needed**: Tự thêm category phá tập nhãn downstream đã quy định.
- **Use a random classification approach.**: Ngẫu nhiên không giữ nhất quán cùng input.
- **Remove category definitions from the prompt**: Bỏ định nghĩa category làm mất ranh giới quyết định.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

</details>


---

## Q28 · single choice · — not answered

**Scenario**: 

Customer Support Resolution Agent You are building a customer support resolution agent using the Claude Agent SDK. 

The agent handles high- ambiguity requests like returns, billing disputes, and account issues. 

It has access to backend systems through MCP tools (get_customer, lookup_order, process_refund, escalate_to_human). 

Your target is 80%+ first-contact resolution while knowing when to escalate. 

During billing disputes, the agent creates condensed case notes before responding or escalating. 

Human reviewers report that notes sometimes say things like "refund approved" or "customer was promised free return shipping," but they cannot tell whether each claim came from the customer, an order record, a policy document, or the agent's inference. In several escalations, customer allegations were treated as verified backend facts. 

What change would most effectively reduce this reliability risk?

- ✅ **A.** Require summaries and handoffs to carry structured claim-source mappings with source type, excerpt or tool field, timestamp, and verification status.
- **B.** Store complete raw transcripts and tool outputs only, relying on human reviewers to reconstruct sources when disputes arise.
- **C.** Ask the agent to include only high-confidence claims in final responses, omitting uncertain details from summaries and escalations.
- **D.** Compress each case into a shorter narrative summary and instruct reviewers to ask follow-up questions when provenance seems unclear.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Require summaries and handoffs to carry structured claim-source mappings with source type, excerpt or tool field, timestamp, and verification status.

Claim-source mapping giữ phân biệt lời khách, field backend, policy và suy luận, kèm thời gian và verification để không biến cáo buộc thành sự kiện đã xác minh.

#### Vì sao các phương án khác không phù hợp?

- **Compress each case into a shorter narrative summary and instruct reviewers to ask follow-up questions when provenance seems unclear.**: Summary ngắn hơn có thể làm mất provenance thêm.
- **Store complete raw transcripts and tool outputs only, relying on human reviewers to reconstruct sources when disputes arise.**: Chỉ raw transcript bắt người review tái dựng mọi quan hệ nguồn.
- **Ask the agent to include only high-confidence claims in final responses, omitting uncertain details from summaries and escalations.**: Confidence cao không chứng minh nguồn hay trạng thái xác minh.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q29 · single choice · — not answered

A research system creates coherent reports, but coverage gaps remain. 

For example, AI regulation reports have strong EU coverage but weak Asia-Pacific coverage. 

What change improves completeness?

- **A.** Increase coordinator iteration count to a fixed number.
- ✅ **B.** Add a coordinator review loop that checks coverage, delegates follow-ups, and reruns synthesis.
- **C.** Repeat broad assignments twice.
- **D.** Hide unsupported sections.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add a coordinator review loop that checks coverage, delegates follow-ups, and reruns synthesis.

Coordinator kiểm tra coverage theo vùng, giao nghiên cứu bổ sung rồi synthesis lại để lấp khoảng trống APAC có mục tiêu.

#### Vì sao các phương án khác không phù hợp?

- **Repeat broad assignments twice.**: Lặp assignment rộng có thể lặp chính thiên lệch EU.
- **Hide unsupported sections.**: Ẩn section thiếu làm báo cáo trông đủ nhưng mất yêu cầu.
- **Increase coordinator iteration count to a fixed number.**: Số vòng cố định không kiểm tra coverage thực.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q30 · single choice · — not answered

A developer wants Claude to review code and return only actionable issues. 

What prompt design is most effective?

- **A.** Request every possible improvement
- **B.** Avoid describing expected output
- **C.** Ask for unlimited suggestions
- ✅ **D.** Define what qualifies as an issue and provide examples.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define what qualifies as an issue and provide examples.

Định nghĩa issue và ví dụ actionable giúp tách bug có tác động khỏi sở thích chỉnh style, giảm findings không cần hành động.

#### Vì sao các phương án khác không phù hợp?

- **Request every possible improvement**: Mọi cải tiến mở rộng phạm vi sang nhiều gợi ý không cần thiết.
- **Ask for unlimited suggestions**: Unlimited suggestions khuyến khích số lượng thay chất lượng.
- **Avoid describing expected output**: Thiếu output expectation khiến findings khó dùng nhất quán.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

</details>


---

## Q31 · single choice · — not answered

**Scenario**: 

Customer Support Resolution Agent Production logs show: l get_customer returns ISO 8601 timestamps and numeric loyalty tiers. l lookup_order returns Unix timestamps and numeric status codes. 

The agent sometimes miscomputes return windows or mislabels order status. 

You cannot modify upstream MCP servers. 

What change best addresses the reliability issue?

- **A.** Modify the final customer response parser.
- ✅ **B.** Add a PostToolUse hook that converts tool results into canonical dates, status labels, and tier fields before Claude sees it.
- **C.** Escalate all cases with mixed timestamp formats.
- **D.** Add system instructions telling Claude to remember each tool's format

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add a PostToolUse hook that converts tool results into canonical dates, status labels, and tier fields before Claude sees it.

PostToolUse có thể chuẩn hóa kết quả MCP trước model qua cơ chế output được hỗ trợ, giúp so thời gian và status theo một schema. Không chỉ format câu trả lời cuối.

#### Vì sao các phương án khác không phù hợp?

- **Escalate all cases with mixed timestamp formats.**: Escalate mọi mixed format lãng phí khi adapter xử lý được.
- **Add system instructions telling Claude to remember each tool's format**: Yêu cầu nhớ format vẫn để model tự đổi dữ liệu dễ sai.
- **Modify the final customer response parser.**: Parser cuối quá muộn vì tính cửa sổ hoàn trả đã dùng sai dữ liệu.

**Tham khảo:**

- [Claude Code hooks reference](https://code.claude.com/docs/en/hooks)

</details>


---

## Q32 · single choice · — not answered

A multi-agent research system assigns high confidence to most report claims, but customer audits find citation mismatches concentrated in regulatory topics and newly added source types. 

What review strategy should be implemented before further reducing reviewer coverage?

- ✅ **A.** Randomly sample high-confidence claims across topic, source type, and report section, then track errors by category.
- **B.** Auto-publish high-confidence reports and investigate only customer defects.
- **C.** Review only claims with low confidence scores.
- **D.** Use one aggregate accuracy metric and reduce review after reaching the target.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Randomly sample high-confidence claims across topic, source type, and report section, then track errors by category.

Sample ngẫu nhiên có phân tầng trong nhóm confidence cao đo calibration và lộ lỗi theo chủ đề/nguồn, tránh chỉ review nơi model tự nhận yếu.

#### Vì sao các phương án khác không phù hợp?

- **Review only claims with low confidence scores.**: Chỉ low confidence bỏ lỗi tự tin cao mà audit đang phát hiện.
- **Use one aggregate accuracy metric and reduce review after reaching the target.**: Accuracy chung che nhóm regulatory hay nguồn mới có lỗi.
- **Auto-publish high-confidence reports and investigate only customer defects.**: Đợi khách báo lỗi đẩy kiểm chứng sang hậu xuất bản.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q33 · single choice · — not answered

**Scenario**: 

Structured Data Extraction A labeled validation run reports: l 97.2% aggregate extraction accuracy l coverage across NDAs, invoices, insurance forms, and purchase orders Leadership wants to bypass human review for any record where Claude returns high confidence, but pilot complaints suggest errors cluster in specific document families and fields. 

What should you do before reducing reviewer coverage?

- **A.** Use the 97.2% aggregate accuracy to auto-approve all high-confidence outputs, monitoring user complaints for emerging regressions.
- **B.** Randomly review a fixed percentage of every extraction category, regardless of document type, field, or prior validation performance.
- **C.** Raise the global confidence threshold until the aggregate validation accuracy reaches 99%, then disable review for remaining outputs.
- ✅ **D.** Analyze accuracy by document type and extracted field, then automate only segments meeting validated thresholds while routing others to review.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Analyze accuracy by document type and extracted field, then automate only segments meeting validated thresholds while routing others to review.

Phân tích theo loại tài liệu và field phát hiện nhóm yếu bị accuracy chung che; chỉ tự động hóa phân đoạn đã đạt ngưỡng kiểm chứng.

#### Vì sao các phương án khác không phù hợp?

- **Randomly review a fixed percentage of every extraction category, regardless of document type, field, or prior validation performance.**: Tỷ lệ review giống nhau không ưu tiên vùng lỗi cao.
- **Raise the global confidence threshold until the aggregate validation accuracy reaches 99%, then disable review for remaining outputs.**: Threshold confidence chung không bảo đảm calibration từng nhóm.
- **Use the 97.2% aggregate accuracy to auto-approve all high-confidence outputs, monitoring user complaints for emerging regressions.**: 97,2% chung không chứng minh record confidence cao luôn đúng.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q34 · single choice · — not answered

**Scenario**: 

Structured Data Extraction You are building a structured data extraction system using Claude. 

The system extracts information from unstructured documents, validates output using JSON schemas, and maintains high accuracy. 

It must handle edge cases gracefully and integrate with downstream systems. 

Your QA prompt reviews a 90-page vendor onboarding packet and its extracted records in one call. 

It catches detailed field errors in the first few forms, but misses mismatched tax IDs in middle attachments and contradicts itself about required signatures. 

Which review architecture would best improve reliability?

- **A.** Run three full-packet reviews and accept only issues reported by at least two reviewers.
- **B.** Increase max_tokens and add stronger instructions to be exhaustive while reviewing the entire packet once.
- **C.** Ask the same extraction instance to critique its own output using extended thinking before returning final records.
- ✅ **D.** Run focused review passes on each packet section, then run a separate consistency pass across cross- section fields.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run focused review passes on each packet section, then run a separate consistency pass across cross- section fields.

Review từng phần giảm tải chú ý; lượt consistency riêng kiểm tra tax ID và chữ ký xuyên phần, giữ cả chi tiết lẫn quan hệ.

#### Vì sao các phương án khác không phù hợp?

- **Run three full-packet reviews and accept only issues reported by at least two reviewers.**: Ba lượt toàn bộ vẫn có thể cùng bỏ sót vùng giữa.
- **Ask the same extraction instance to critique its own output using extended thinking before returning final records.**: Self-critique cùng instance có thể lặp giả định sai của extraction.
- **Increase max_tokens and add stronger instructions to be exhaustive while reviewing the entire packet once.**: max_tokens tăng độ dài output, không tự sửa kiến trúc review quá rộng.

**Tham khảo:**

- [Effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)
- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q35 · single choice · — not answered

**Scenario**: 

Structured Data Extraction You are building a structured data extraction system using Claude. 

The system extracts information from unstructured documents, validates output using JSON schemas, and maintains high accuracy. 

Production review shows inconsistent routing: 

- documents with unreadable required values and unfamiliar layouts sometimes flow into downstream systems, 
- while routine invoices missing optional purchase-order numbers are sent for manual review. 

The extraction schema already permits nullable fields for data that is absent from the source. 

What change would most effectively improve routing decisions?

- **A.** Escalate documents based on frustrated wording, urgent language, or negative sentiment detected in the source text.
- **B.** Route documents to reviewers whenever the model reports confidence below a single global threshold after extraction.
- ✅ **C.** Add explicit human-review criteria with few-shot examples distinguishing absent optional fields, unreadable required fields, and unsupported document types.
- **D.** Require retries until all schema fields are populated, then escalate only documents still containing null values

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add explicit human-review criteria with few-shot examples distinguishing absent optional fields, unreadable required fields, and unsupported document types.

Tiêu chí review và ví dụ phân biệt optional absent, required unreadable và loại lạ giúp routing theo ý nghĩa lỗi, không chỉ null hoặc confidence.

#### Vì sao các phương án khác không phù hợp?

- **Require retries until all schema fields are populated, then escalate only documents still containing null values**: Lấp mọi field có thể ép bịa giá trị optional không có.
- **Escalate documents based on frustrated wording, urgent language, or negative sentiment detected in the source text.**: Sentiment không quyết định dữ liệu có đọc được và đủ bắt buộc.
- **Route documents to reviewers whenever the model reports confidence below a single global threshold after extraction.**: Một threshold chung không biểu diễn rủi ro khác nhau của field và loại tài liệu.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q36 · single choice · — not answered

A team wants to build a production billing pipeline's core logic entirely around a platform capability currently labeled Beta in Anthropic's feature-availability table. 

A tech lead raises a concern before approving the design. 

What is the most accurate basis for that concern?

- **A.** Beta features cannot be used together with prompt caching or batch processing, which would prevent the pipeline from scaling cost-effectively.
- **B.** Beta features are capped at 200k tokens of context regardless of the underlying model, which would limit the pipeline's document processing.
- **C.** Beta features are billed at a 50% premium compared to generally available features, making them unsuitable for cost-sensitive billing pipelines.
- ✅ **D.** Beta features may change significantly or be discontinued based on feedback and are not guaranteed for ongoing production use, unlike GA features.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Beta features may change significantly or be discontinued based on feedback and are not guaranteed for ongoing production use, unlike GA features.

Tính năng beta có vòng đời kém ổn định hơn tính năng GA. Cần đánh giá rủi ro thay đổi hoặc ngừng cung cấp trước khi dùng làm nền tảng duy nhất của quy trình quan trọng.

#### Vì sao các phương án khác không phù hợp?

- **Beta features are billed at a 50% premium compared to generally available features, making them unsuitable for cost-sensitive billing pipelines.**: Không có quy tắc chung mọi beta đều cộng giá 50%.
- **Beta features cannot be used together with prompt caching or batch processing, which would prevent the pipeline from scaling cost-effectively.**: Nhãn beta không mặc nhiên cấm cache hoặc batch.
- **Beta features are capped at 200k tokens of context regardless of the underlying model, which would limit the pipeline's document processing.**: Nhãn beta không áp trần context 200k cho mọi tính năng.

**Tham khảo:**

- [platform.claude.com — overview](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/overview%5C%22)

</details>


---

## Q37 · single choice · — not answered

A development team uses Claude Agent SDK for different workflows. 

Dependency reviews follow fixed rules, while debugging unknown systems requires exploration. 

Which decomposition strategy is best?

- **A.** Use dynamic planning for every workflow
- **B.** Use one large prompt for all tasks
- ✅ **C.** Use prompt chains for stable tasks and adaptive planning for investigations
- **D.** Use fixed steps for every workflow

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use prompt chains for stable tasks and adaptive planning for investigations

Prompt chain cho checklist ổn định, planning thích ứng cho điều tra chưa biết đường đi; chọn theo mức bất định tác vụ.

#### Vì sao các phương án khác không phù hợp?

- **Use fixed steps for every workflow**: Fixed steps cho mọi việc làm điều tra lãng phí hoặc bỏ nhánh mới.
- **Use dynamic planning for every workflow**: Dynamic cho mọi việc làm rubric ổn định bị trôi không cần thiết.
- **Use one large prompt for all tasks**: Prompt lớn không tách điều kiện kiểm tra và phụ thuộc từng bước.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q38 · single choice · — not answered

A development team uses Claude Agent SDK with multiple subagents to analyze a legacy payment system. 

How should the coordinator improve reliability when passing discovery results to a planning subagent?

- ✅ **A.** Maintain shared state and include relevant findings in later prompts
- **B.** Allow subagents to communicate directly without coordination
- **C.** Ask the planner to infer missing dependencies from file names
- **D.** Replace specialized subagents with one general-purpose subagent

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Maintain shared state and include relevant findings in later prompts

Shared state có findings liên quan được đưa rõ vào prompt planner giữ bằng chứng discovery giữa context riêng của subagent.

#### Vì sao các phương án khác không phù hợp?

- **Replace specialized subagents with one general-purpose subagent**: Một generalist không tự giải quyết mất thông tin handoff.
- **Ask the planner to infer missing dependencies from file names**: Tên file không đủ chứng minh dependency thực.
- **Allow subagents to communicate directly without coordination**: Trao đổi không điều phối có thể thiếu phiên bản và nguồn findings thống nhất.

**Tham khảo:**

- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q39 · single choice · — not answered

**Scenario**: 

Developer Productivity with Claude You are building developer productivity tools using the Claude Agent SDK. 

The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks. 

Dependency license reviews follow a stable rubric with known checks, while production bug investigations in unfamiliar services vary based on discovered call paths, logs, and failing tests. 

The current single-pass prompt misses checklist items during reviews and wastes effort during investigations. 

Which decomposition strategy is most appropriate?

- **A.** Use the same fixed sequential checklist for both workflows, requiring every investigation to complete every predefined step.
- ✅ **B.** Use a fixed prompt chain for stable review rubrics, and let the agent adapt subtasks during open-ended investigations.
- **C.** Use one large prompt for both request types, asking the agent to reason carefully before using any tools.
- **D.** Use dynamic task planning for every workflow, allowing the agent to redefine review criteria as it discovers code patterns.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a fixed prompt chain for stable review rubrics, and let the agent adapt subtasks during open-ended investigations.

Review license cần fixed chain theo rubric, còn bug cần điều chỉnh bước theo logs/call path/test; decomposition theo bản chất tác vụ.

#### Vì sao các phương án khác không phù hợp?

- **Use the same fixed sequential checklist for both workflows, requiring every investigation to complete every predefined step.**: Checklist cứng cho mọi bug có thể làm bước không liên quan.
- **Use dynamic task planning for every workflow, allowing the agent to redefine review criteria as it discovers code patterns.**: Cho tự đổi review criteria làm mất chuẩn license chung.
- **Use one large prompt for both request types, asking the agent to reason carefully before using any tools.**: Reason carefully trong prompt lớn không tạo gate checklist hay planning thích ứng.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q40 · single choice · — not answered

A CI pipeline needs Claude Code findings to create automated pull request comments. 

Which approach provides the most reliable integration?

- **A.** Rewrite previous comments into structured records
- **B.** Parse markdown output with regular expressions
- ✅ **C.** Use JSON output with JSON schema validation
- **D.** Ask Claude to always return JSON in the prompt

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use JSON output with JSON schema validation

JSON schema validation giữ finding theo cấu trúc CI dự kiến trước khi tạo comment, giảm lỗi parsing.

#### Vì sao các phương án khác không phù hợp?

- **Parse markdown output with regular expressions**: Regex Markdown phụ thuộc bố cục văn bản dễ đổi.
- **Ask Claude to always return JSON in the prompt**: Prompt JSON-only không cưỡng chế đủ field/type như schema.
- **Rewrite previous comments into structured records**: Chuyển comment cũ không bảo đảm findings mới đúng contract.

**Tham khảo:**

- [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference)
- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q41 · single choice · — not answered

A customer support agent using Claude Agent SDK receives multiple possible customer profiles when users provide common names and partial addresses. 

The agent sometimes selects a profile based on recent activity or name similarity, causing incorrect refunds and privacy disclosures. 

What change best improves reliability without unnecessarily routing routine cases to humans?

- **A.** Rank matching customers by recent activity and continue with the highest ranked profile when confidence exceeds a threshold.
- ✅ **B.** Treat multiple customer matches as unresolved identity and request a disambiguating identifier before any order or refund operations.
- **C.** Call lookup_order for each matching customer profile, then select the account whose order details best match the message.
- **D.** Escalate every request with duplicate customer records to a human agent before performing any lookup_order calls.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Treat multiple customer matches as unresolved identity and request a disambiguating identifier before any order or refund operations.

Nhiều hồ sơ là identity unresolved; hỏi identifier phân biệt trước truy xuất đơn hoặc hoàn tiền giúp tránh lộ dữ liệu mà không đẩy mọi case cho người.

#### Vì sao các phương án khác không phù hợp?

- **Rank matching customers by recent activity and continue with the highest ranked profile when confidence exceeds a threshold.**: Hoạt động gần đây không chứng minh đó là người đang yêu cầu.
- **Call lookup_order for each matching customer profile, then select the account whose order details best match the message.**: Tra đơn mọi hồ sơ tăng truy cập dữ liệu trước khi xác minh chủ thể.
- **Escalate every request with duplicate customer records to a human agent before performing any lookup_order calls.**: Escalate tất cả bỏ qua khả năng hỏi identifier đơn giản.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q42 · single choice · — not answered

A research report contains two credible studies with different productivity statistics. 

The synthesis agent chooses the larger number as the definitive result. 

What change improves reliability?

- **A.** Average the two statistics.
- **B.** Select the larger study and remove the smaller one.
- **C.** Search until another source confirms one statistic
- ✅ **D.** Preserve both statistics with source attribution, methodology notes, and conflict annotation

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Preserve both statistics with source attribution, methodology notes, and conflict annotation

Giữ cả hai số cùng phương pháp và nguồn cho thấy khác biệt đo lường; không chọn số lớn vì hợp câu chuyện.

#### Vì sao các phương án khác không phù hợp?

- **Search until another source confirms one statistic**: Tìm đến khi khớp một số là confirmation bias.
- **Select the larger study and remove the smaller one.**: Cỡ mẫu lớn không tự chứng minh phù hợp cùng câu hỏi hay phương pháp.
- **Average the two statistics.**: Trung bình hai metric khác định nghĩa có thể vô nghĩa.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q43 · single choice · — not answered

A structured extraction QA system produces valid JSON, but reviewer findings are inconsistent and difficult to act on. 

What should improve consistency?

- **A.** Require every schema field to be non-null
- ✅ **B.** Add examples showing complete actionable findings
- **C.** Use regular expressions to repair missing details
- **D.** Request only concise high-confidence responses

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add examples showing complete actionable findings

Ví dụ finding đầy đủ minh họa evidence, vị trí và hành động cần sửa; JSON hợp lệ chỉ kiểm tra hình thức chứ không tính actionable.

#### Vì sao các phương án khác không phù hợp?

- **Require every schema field to be non-null**: Non-null ép có dữ liệu không tồn tại và không thêm logic finding.
- **Use regular expressions to repair missing details**: Regex không bổ sung bằng chứng thực bị thiếu.
- **Request only concise high-confidence responses**: Ngắn và tự tin không xác định nội dung cần để hành động.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q44 · single choice · — not answered

You are setting up a Claude application that requires API keys for several external services. 

What is the best way to store the keys?

- ✅ **A.** Store the keys in a secrets manager or environment-specific configuration that is not checked into source code, and load them at runtime.
- **B.** Use a single shared key across all external services, so any developer working on the application can find the keys easily during development.
- **C.** Put the keys in the application's configuration file and check the configuration file into the team's repository alongside the rest of the source code.
- **D.** Email the keys to each developer as needed and have each developer paste the keys into their local environment when they begin working on the application's code.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Store the keys in a secrets manager or environment-specific configuration that is not checked into source code, and load them at runtime.

Secrets manager hoặc config môi trường ngoài version control giảm phát tán key, cho phép cấp/rotate theo môi trường rồi load runtime.

#### Vì sao các phương án khác không phù hợp?

- **Email the keys to each developer as needed and have each developer paste the keys into their local environment when they begin working on the application's code.**: Email nhân bản key khó thu hồi và audit.
- **Use a single shared key across all external services, so any developer working on the application can find the keys easily during development.**: Một key chung không phù hợp ranh giới service/quyền và làm rộng tác động lộ key.
- **Put the keys in the application's configuration file and check the configuration file into the team's repository alongside the rest of the source code.**: Commit key khiến lịch sử repo lưu bí mật dù xóa ở phiên bản sau.

**Tham khảo:**

- [Official Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python)

</details>


---

## Q45 · single choice · — not answered

You are designing a Claude application that maintains user sessions across multi-turn conversations. 

The product team has asked how the application will handle session lifecycle: when sessions should expire, how state is reset, and how the application avoids carrying stale context into new conversations. 

How would you design session lifecycle?

- ✅ **A.** Define explicit session expiration rules, state reset triggers, and rules for starting fresh sessions so stale context does not leak into new conversations.
- **B.** Define state reset triggers tied to specific application events but apply them across all sessions globally, with no per-session expiration rules.
- **C.** Define explicit session expiration rules but rely on users to start new conversations when they want fresh context, with no automatic reset triggers in the application.
- **D.** Define a single short session timeout that applies across all conversations and treat the timeout as the application's complete session lifecycle mechanism.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define explicit session expiration rules, state reset triggers, and rules for starting fresh sessions so stale context does not leak into new conversations.

Expiration, reset triggers và fresh-session rules cùng xác định khi nào bỏ state từng user, tránh ngữ cảnh cũ rò sang hội thoại mới.

#### Vì sao các phương án khác không phù hợp?

- **Define a single short session timeout that applies across all conversations and treat the timeout as the application's complete session lifecycle mechanism.**: Một timeout ngắn không xử lý mọi sự kiện reset hoặc nhu cầu hội thoại dài.
- **Define state reset triggers tied to specific application events but apply them across all sessions globally, with no per-session expiration rules.**: Reset toàn cục có thể xóa session người khác và thiếu expiry riêng.
- **Define explicit session expiration rules but rely on users to start new conversations when they want fresh context, with no automatic reset triggers in the application.**: Chỉ chờ user mở mới không cưỡng chế reset khi app cần.

**Tham khảo:**

- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q46 · single choice · — not answered

You are building an MCP server that exposes several internal data sources as MCP resources. 

The server needs to be deployed so multiple Claude applications can integrate with it. 

How would you approach the build and deployment?

- **A.** Bypass the MCP server and embed each data source directly in every Claude application that needs the data, with each application maintaining its own integration.
- ✅ **B.** Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment.
- **C.** Build the MCP server with resource and tool definitions scoped to the first Claude application that needs it, and extend the definitions to additional applications as each integration is requested.
- **D.** Deploy the MCP server only on individual developer machines, with the Claude applications unable to reach the server outside each developer's machine.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment.

Định nghĩa resource/tool/prompt rõ và transport/hosting truy cập được tạo giao diện MCP dùng chung giữa nhiều app.

#### Vì sao các phương án khác không phù hợp?

- **Build the MCP server with resource and tool definitions scoped to the first Claude application that needs it, and extend the definitions to additional applications as each integration is requested.**: Thiết kế chỉ cho app đầu dễ khóa contract vào nhu cầu cục bộ.
- **Deploy the MCP server only on individual developer machines, with the Claude applications unable to reach the server outside each developer's machine.**: Server chỉ ở máy cá nhân không đáp ứng các app không truy cập được.
- **Bypass the MCP server and embed each data source directly in every Claude application that needs the data, with each application maintaining its own integration.**: Nhúng tích hợp ở mọi app bỏ lợi ích tái sử dụng MCP và lặp bảo trì.

**Tham khảo:**

- [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp)

</details>


---

## Q47 · single choice · — not answered

Your team is preparing a new Claude application for production, and the product team has asked for a cost projection. 

The team needs to estimate the cost based on expected request volume, average input length, and average output length. 

How would you build the projection?

- ✅ **A.** Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits.
- **B.** Build a cost model that combines expected request volume and average input tokens, treating output tokens as a small enough share of cost to leave out of the projection.
- **C.** Build a cost model that uses the average per-request cost from a similar Claude application the team built last year, scaling that figure by expected request volume.
- **D.** Build a cost model based on expected request volume and the chosen model's pricing, treating average input and output token counts as variables to be estimated post-launch.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits.

Chi phí dự kiến cần volume nhân token input/output theo giá model, cộng điều kiện cache; nêu giả định và kiểm tra bằng đo thực.

#### Vì sao các phương án khác không phù hợp?

- **Build a cost model that uses the average per-request cost from a similar Claude application the team built last year, scaling that figure by expected request volume.**: Ứng dụng năm trước có token mix và giá khác nên chỉ là baseline sơ bộ.
- **Build a cost model that combines expected request volume and average input tokens, treating output tokens as a small enough share of cost to leave out of the projection.**: Bỏ output có thể thiếu phần chi phí đáng kể.
- **Build a cost model based on expected request volume and the chosen model's pricing, treating average input and output token counts as variables to be estimated post-launch.**: Chưa ước token thì giá mỗi request chưa xác định.

**Tham khảo:**

- [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

</details>


---

## Q48 · single choice · — not answered

Your Claude application uses structured output that is consumed by downstream code. 

The team wants to handle malformed or unexpected output gracefully so it does not crash downstream systems. 

The best choice for handling this issue would be to...

- **A.** Silently drop any output that does not match expectations so downstream systems do not see the malformed output the application receives from the model.
- ✅ **B.** Apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on.
- **C.** Crash on any unexpected output and require manual recovery on affected requests the application handles during normal operation.
- **D.** Use the output the model produces and leave schema enforcement to a later phase of production after the application is more complete.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on.

Defensive parsing kiểm tra field/type rồi trả lỗi hoặc fallback có chủ đích trước consumer, tránh crash và không âm thầm biến dữ liệu sai thành đúng.

#### Vì sao các phương án khác không phù hợp?

- **Crash on any unexpected output and require manual recovery on affected requests the application handles during normal operation.**: Crash và manual recovery mọi lần không graceful.
- **Use the output the model produces and leave schema enforcement to a later phase of production after the application is more complete.**: Để schema enforcement sau production khiến consumer nhận dữ liệu không đáng tin.
- **Silently drop any output that does not match expectations so downstream systems do not see the malformed output the application receives from the model.**: Âm thầm bỏ output che lỗi và gây mất record không truy vết.

**Tham khảo:**

- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q49 · single choice · — not answered

Your team uses several plugins across multiple Claude applications, and a recent plugin update introduced a regression. 

The team had not been tracking plugin versions, so the team cannot easily identify which version was previously working. 

How would you address this?

- **A.** Stop using all plugins until the team can rebuild equivalent functionality directly into the application code, treating plugin avoidance as a way to remove version-related risk.
- ✅ **B.** Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately.
- **C.** Treat plugins as untrackable third-party code and rely on plugin authors to communicate breaking changes when they happen, with no internal version tracking.
- **D.** Upgrade every plugin to the latest version on a regular cadence to keep version drift small, on the grounds that drift contributes to regression risk.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately.

Theo dõi và pin version cho phép tái tạo bản tốt, rollback và đánh giá nâng cấp plugin có chủ đích.

#### Vì sao các phương án khác không phù hợp?

- **Upgrade every plugin to the latest version on a regular cadence to keep version drift small, on the grounds that drift contributes to regression risk.**: Luôn latest không xác định được phiên bản gây regression.
- **Stop using all plugins until the team can rebuild equivalent functionality directly into the application code, treating plugin avoidance as a way to remove version-related risk.**: Bỏ mọi plugin mở rộng phạm vi xây lại mà không cần cho lỗi version.
- **Treat plugins as untrackable third-party code and rely on plugin authors to communicate breaking changes when they happen, with no internal version tracking.**: Phụ thuộc tác giả thông báo không thay nội bộ ghi version đang dùng.

**Tham khảo:**

- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q50 · single choice · — not answered

You are deciding between deploying a Claude-powered agent on Anthropic's hosted infrastructure or self-hosting under a "bring your own cloud" model in your own AWS account. 

The agent processes customer data subject to your enterprise's data residency policies, but the team wants to ship quickly and avoid managing infrastructure. 

Which deployment model would you recommend?

- **A.** Deploying on Anthropic-hosted infrastructure to meet the team's shipping timeline, and flagging the data residency requirement for a follow-up compliance review after launch.
- **B.** Self-hosting under BYOC for an initial pilot, then evaluating whether to migrate to Anthropic-hosted infrastructure once the agent's data-handling patterns are better understood.
- ✅ **C.** Self-hosting under BYOC to satisfy the data residency requirement, while working with the infrastructure team to reduce the operational overhead of managing the deployment.
- **D.** Deploying on Anthropic-hosted infrastructure while the team drafts a request to update the enterprise data residency policy to accommodate hosted Al deployments.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Self-hosting under BYOC to satisfy the data residency requirement, while working with the infrastructure team to reduce the operational overhead of managing the deployment.

Khóa nguồn chọn BYOC nhằm ưu tiên ràng buộc cư trú dữ liệu trước tốc độ giao hàng. Cách lập luận chỉ hợp lệ nếu triển khai trong AWS của doanh nghiệp thực sự đáp ứng yêu cầu, còn lựa chọn hosted cụ thể không đáp ứng. Cần phân biệt nơi chạy agent với nơi Claude xử lý dữ liệu: tự host agent không có nghĩa tự host trọng số model, cũng không tự bảo đảm mọi đường truyền và lưu trữ đúng khu vực.

#### Vì sao các phương án khác không phù hợp?

- **Deploying on Anthropic-hosted infrastructure to meet the team's shipping timeline, and flagging the data residency requirement for a follow-up compliance review after launch.**: Ra mắt rồi mới xem tuân thủ không giải quyết ràng buộc dữ liệu đã biết trước khi xử lý dữ liệu khách hàng.
- **Deploying on Anthropic-hosted infrastructure while the team drafts a request to update the enterprise data residency policy to accommodate hosted Al deployments.**: Đề nghị sửa chính sách chưa phải sự chấp thuận; triển khai trong lúc chờ có thể vẫn vi phạm yêu cầu hiện tại.
- **Self-hosting under BYOC for an initial pilot, then evaluating whether to migrate to Anthropic-hosted infrastructure once the agent's data-handling patterns are better understood.**: Pilot BYOC có thể hợp lý, nhưng chưa có bằng chứng hosted về sau đáp ứng điều kiện để chốt kế hoạch di chuyển.

**Cần xem lại:** Đề không nêu khu vực được phép, dịch vụ inference, điều khoản hosted hay quyền kiểm soát dữ liệu. Không thể kết luận BYOC là đáp án duy nhất chỉ từ nhãn triển khai; cần làm rõ các giả định trước khi publish.

**Tham khảo:**

- [Data residency](%5C%22https%3A//platform.claude.com/docs/en/manage-claude/data-residency%5C%22)
- [Hosting the Agent SDK](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/hosting%5C%22)

</details>


---

## Q51 · single choice · — not answered

Your Claude application uses tool calling to fetch patient data and generate summary reports. 

The flow occasionally fails because the model returns a tool_use block that references arguments not present in the schema, and your application code does not handle this case gracefully. 

How would you address this?

- **A.** Retry the same request repeatedly until the model returns a valid tool_use block that matches the schema as expected.
- **B.** Log invalid tool_use blocks when they occur and allow the tool dispatch to proceed, relying on the tool's own error handling to surface failures back to the application.
- ✅ **C.** Validate the tool_use block's arguments against the tool schema before dispatching the tool and handle invalid arguments as a recognized error path.
- **D.** Stop using tool calling entirely and replace tools with prompted text generation that asks the model to describe what it would do.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Validate the tool_use block's arguments against the tool schema before dispatching the tool and handle invalid arguments as a recognized error path.

Validate arguments trước dispatch chặn field ngoài schema và xử lý như lỗi có cấu trúc; phù hợp dữ liệu bệnh nhân cần ranh giới rõ.

#### Vì sao các phương án khác không phù hợp?

- **Stop using tool calling entirely and replace tools with prompted text generation that asks the model to describe what it would do.**: Bỏ tool calling làm mất khả năng lấy dữ liệu có kiểm soát thay vì sửa contract.
- **Retry the same request repeatedly until the model returns a valid tool_use block that matches the schema as expected.**: Retry vô hạn không sửa nguyên nhân hoặc giới hạn chi phí.
- **Log invalid tool_use blocks when they occur and allow the tool dispatch to proceed, relying on the tool's own error handling to surface failures back to the application.**: Log rồi vẫn dispatch để lỗi đi vào backend thay vì chặn trước.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q52 · single choice · — not answered

Your Claude application's prompt was written months ago and has not been updated. 

The team has discovered through evals that the prompt produces good results on common cases but underperforms on a specific category of inputs that has grown in volume. 

How would you respond?

- ✅ **A.** Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed.
- **B.** Add the underperforming category to a separate Claude application with its own prompt so the original prompt does not change.
- **C.** Replace the prompt with a new one aligned to the underperforming category, treating any common-case performance change as a known tradeoff.
- **D.** Tell users to avoid the underperforming category by adding warnings in the application's user interface about handled inputs.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed.

Bổ sung prompt cho nhóm lỗi rồi chạy eval cả nhóm mới lẫn case cũ giúp cải thiện mà kiểm soát regression.

#### Vì sao các phương án khác không phù hợp?

- **Tell users to avoid the underperforming category by adding warnings in the application's user interface about handled inputs.**: Bảo user tránh category không sửa nhu cầu đang tăng.
- **Add the underperforming category to a separate Claude application with its own prompt so the original prompt does not change.**: App riêng có thể không cần và làm phân tán logic trước khi thử prompt có kiểm chứng.
- **Replace the prompt with a new one aligned to the underperforming category, treating any common-case performance change as a known tradeoff.**: Đổi hẳn chỉ tối ưu nhóm mới chấp nhận regression mà chưa đo.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q53 · single choice · — not answered

A teammate is reviewing the team's threat model for a Claude application and has asked you to identify the categories of Al-specific threats that the model should cover. 

The teammate has already listed traditional web application threats and wants to know what additional categories apply to a Claude application. 

Which Al-specific threat categories would you add?

- ✅ **A.** Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls.
- **B.** Supply chain attacks on the Claude SDK because the SDK itself is the only point of vulnerability that a Claude application introduces beyond traditional web application threats.
- **C.** Network-level denial of service and physical infrastructure attacks, because these categories cover the threats most likely to affect any Claude application in production.
- **D.** Cross-site scripting and SQL injection, because these traditional web application threats apply with equal weight to any application that uses Claude in any way.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls.

Prompt injection, context leakage, jailbreak và unsafe output là các bề mặt đặc thù khi text có thể điều khiển hành vi model hoặc consumer.

#### Vì sao các phương án khác không phù hợp?

- **Supply chain attacks on the Claude SDK because the SDK itself is the only point of vulnerability that a Claude application introduces beyond traditional web application threats.**: SDK supply chain là rủi ro có thật nhưng không phải điểm yếu AI duy nhất.
- **Network-level denial of service and physical infrastructure attacks, because these categories cover the threats most likely to affect any Claude application in production.**: DoS và hạ tầng vật lý là rủi ro hệ thống chung, không bổ sung đúng bề mặt model.
- **Cross-site scripting and SQL injection, because these traditional web application threats apply with equal weight to any application that uses Claude in any way.**: XSS/SQLi vẫn cần kiểm soát nhưng đề đã có web threats và hỏi phần AI bổ sung.

**Tham khảo:**

- [Mitigate prompt injection and jailbreaks](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)

</details>


---

## Q54 · single choice · — not answered

The Claude application your team built has grown over six months, and the prompt-handling code has accumulated duplication and tangled control flow. 

The functionality is working, but new features are getting harder to add. How would you address this?

- **A.** Refactor the prompt-handling code in small increments as part of each new feature ticket, treating the cleanup as a side effect of feature work.
- **B.** Continue adding features and plan a refactoring pass after the next two release cycles when the team has more bandwidth for internal work.
- **C.** Move all the prompt-handling code into a single large function to reduce the number of files developers have to navigate when reading the code.
- ✅ **D.** Plan a refactoring pass to consolidate duplicated logic, separate concerns, and simplify control flow before adding new features.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Plan a refactoring pass to consolidate duplicated logic, separate concerns, and simplify control flow before adding new features.

Thành phần xử lý prompt đang cản trở việc thay đổi. Một đợt refactor có phạm vi rõ giúp bỏ logic lặp và tách trách nhiệm; kiểm tra hồi quy giữ nguyên hành vi.

#### Vì sao các phương án khác không phù hợp?

- **Refactor the prompt-handling code in small increments as part of each new feature ticket, treating the cleanup as a side effect of feature work.**: Dọn tiện theo từng ticket không bảo đảm xử lý phần nợ rộng đang tồn tại.
- **Continue adding features and plan a refactoring pass after the next two release cycles when the team has more bandwidth for internal work.**: Chờ thêm hai chu kỳ làm nợ tích tụ.
- **Move all the prompt-handling code into a single large function to reduce the number of files developers have to navigate when reading the code.**: Gom vào một hàm lớn làm mờ trách nhiệm thay vì đơn giản hóa.

**Tham khảo:**

- [testing.googleblog.com — just-say-no-to-more-end-to-end-tests.html](%5C%22https%3A//testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html%5C%22)

</details>


---

## Q55 · single choice · — not answered

You are building a Claude application that needs to deliver model output to end users as it is generated, instead of waiting for the full response to complete. 

The Claude API mechanism you would use is...

- **A.** The Batch APl, which delivers full responses after a delay suitable for non-interactive workloads.
- **B.** Structured JSON output, which delivers responses only after the model has finalized the JSON shape across the entire response.
- ✅ **C.** Streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively.
- **D.** Prompt caching, which speeds up the cost profile of future requests and does not affect the delivery timing of the first response.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively.

Streaming gửi các phần nội dung khi đang sinh để user thấy tiến độ sớm, không chờ cả response hoàn tất.

#### Vì sao các phương án khác không phù hợp?

- **The Batch APl, which delivers full responses after a delay suitable for non-interactive workloads.**: Batch phục vụ xử lý bất đồng bộ, không trả token tương tác ngay.
- **Prompt caching, which speeds up the cost profile of future requests and does not affect the delivery timing of the first response.**: Caching tái sử dụng prefix, không phải cơ chế truyền output từng phần.
- **Structured JSON output, which delivers responses only after the model has finalized the JSON shape across the entire response.**: Schema định dạng dữ liệu; không thay streaming và không phải lý do phải chờ cả response theo định nghĩa chung.

**Tham khảo:**

- [Streaming Messages](https://platform.claude.com/docs/en/build-with-claude/streaming)

</details>


---

## Q56 · single choice · — not answered

The Anthropic API deprecated a request parameter that your Claude application uses in approximately 40 laces across the codebase. 

The deprecation notice gives a six-month window before the parameter is removed and recommends a replacement parameter with slightly different semantics. 

You would respond to the deprecation by...

- **A.** Migrating all 40 call sites in a single change near the removal date to ensure the deprecated parameter continues to work as long as possible.
- **B.** Keeping the deprecated parameter in place while writing a wrapper function around it to insulate the rest of the codebase from the eventual change.
- ✅ **C.** Adding regression tests to cover the parameter's behavior, then migrating call sites in batches that you validate against regression tests.
- **D.** Swapping all 40 call sites in a single change right away to prevent drawn-out migration work that will delay ongoing functioning.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Adding regression tests to cover the parameter's behavior, then migrating call sites in batches that you validate against regression tests.

Test bảo toàn hành vi rồi migrate từng nhóm giúp phát hiện thay đổi semantics sớm trước deadline removal.

#### Vì sao các phương án khác không phù hợp?

- **Keeping the deprecated parameter in place while writing a wrapper function around it to insulate the rest of the codebase from the eventual change.**: Wrapper quanh parameter cũ vẫn phụ thuộc thứ sẽ bị xóa.
- **Migrating all 40 call sites in a single change near the removal date to ensure the deprecated parameter continues to work as long as possible.**: Chờ sát hạn làm ít thời gian xử lý khác biệt và rollback.
- **Swapping all 40 call sites in a single change right away to prevent drawn-out migration work that will delay ongoing functioning.**: Đổi mọi nơi ngay không test tăng blast radius regression.

**Tham khảo:**

- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q57 · single choice · — not answered

Your application uses the Messages API to handle multi-turn conversations. 

Each new turn resends the entire conversation history, and your token costs are growing as conversations get longer. 

You suspect there is a more efficient approach. 

How would you address this?

- **A.** Truncate every conversation to the last two messages so that token usage stays low and costs remain predictable across the application's normal operation.
- **B.** Summarize each conversation after every turn and replace the full history with the summary on the next request, reducing token count at the cost of fidelity.
- ✅ **C.** Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them at the normal input-token rate on every request the application sends.
- **D.** Switch to the Batch API for every turn so the per-call cost is reduced, treating the batch as the team's primary cost-control mechanism for multi-turn work.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them at the normal input-token rate on every request the application sends.

Prompt caching tái dùng prefix ổn định theo cơ chế cache, giảm giá đọc input lặp mà vẫn giữ nội dung; không tự xóa token hay mở rộng context.

#### Vì sao các phương án khác không phù hợp?

- **Truncate every conversation to the last two messages so that token usage stays low and costs remain predictable across the application's normal operation.**: Cắt chỉ hai message có thể mất ràng buộc quan trọng.
- **Summarize each conversation after every turn and replace the full history with the summary on the next request, reducing token count at the cost of fidelity.**: Tóm tắt mỗi lượt có thể mất chi tiết không cần thiết khi prefix cache đã hỗ trợ.
- **Switch to the Batch API for every turn so the per-call cost is reduced, treating the batch as the team's primary cost-control mechanism for multi-turn work.**: Batch cho mọi lượt làm mất độ trễ tương tác yêu cầu.

**Tham khảo:**

- [Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

</details>


---

## Q58 · single choice · — not answered

You are configuring Claude Code for a new project. 

The team needs to set permissions, default model selections, and environment-specific behavior at the project level so the configuration is consistent across all developers working on the repository. 

The Claude Code mechanism you would use is...

- ✅ **A.** The settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository.
- **B.** A shared spreadsheet that lists configuration values for team members to reference and update by hand as the project evolves.
- **C.** Environment variables that each developer sets on their own machine when working with Claude Code on the project.
- **D.** A system prompt embedded in every Claude Code conversation by each developer at the start of every session in the project.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository.

.claude/settings.json cấp project chia sẻ model/permissions phù hợp qua repo; config local và secret riêng không nên commit.

#### Vì sao các phương án khác không phù hợp?

- **A system prompt embedded in every Claude Code conversation by each developer at the start of every session in the project.**: Prompt mỗi session không phải cấu hình client permissions/model bền vững.
- **Environment variables that each developer sets on their own machine when working with Claude Code on the project.**: Env từng máy dễ lệch và không tự chia sẻ project config.
- **A shared spreadsheet that lists configuration values for team members to reference and update by hand as the project evolves.**: Spreadsheet đòi nhập tay và không được client tự áp.

**Tham khảo:**

- [Claude Code settings](https://code.claude.com/docs/en/settings)

</details>


---

## Q59 · single choice · — not answered

Your team is preparing to roll out a configuration change that updates several prompt versions across a Claude application used by multiple downstream systems. 

The change has already been tested in staging, but the team has not assessed how the prompt change will affect each downstream system that depends on the application's output. 

What would you do before rolling out the change?

- ✅ **A.** Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed.
- **B.** Notify downstream system owners that a change is coming and schedule the rollout for the following week, without conducting a formal impact assessment.
- **C.** Document the prompt version changes in the application changelog and proceed with the rollout, treating the staging test results as sufficient evidence of impact across all downstream systems.
- **D.** Limit the rollout to systems that were explicitly included in staging testing, and defer all other downstream systems until a later release cycle.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed.

Đánh giá contract và tác động từng downstream giúp phát hiện parser hoặc logic phụ thuộc format trước rollout, phối hợp owner để kiểm chứng.

#### Vì sao các phương án khác không phù hợp?

- **Notify downstream system owners that a change is coming and schedule the rollout for the following week, without conducting a formal impact assessment.**: Thông báo lịch không thay đánh giá tác động.
- **Document the prompt version changes in the application changelog and proceed with the rollout, treating the staging test results as sufficient evidence of impact across all downstream systems.**: Staging chung chưa chứng minh mọi consumer đều tương thích.
- **Limit the rollout to systems that were explicitly included in staging testing, and defer all other downstream systems until a later release cycle.**: Chỉ rollout nhóm đã test có thể là biện pháp sau đánh giá, không thay việc xác định ảnh hưởng còn thiếu.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q60 · single choice · — not answered

A teammate has submitted a pull request that adds a Claude-powered feature to your service. 

The code works, but the prompt and model selection are hard-coded inline, error handling is missing, and there are no tests for the integration. 

What would you request during code review?

- **A.** Request changes that move prompt and model configuration to a configurable location and add tests, treating the missing error handling as a follow-up release item.
- ✅ **B.** Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration.
- **C.** Approve the pull request as-is, on the grounds that the feature works in the happy path and the missing pieces can be added in follow-up commits.
- **D.** Approve the pull request and add the missing pieces yourself in a follow-up commit so the teammate can move on to other work immediately.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration.

Config rõ, xử lý API failure và test integration kiểm soát thay đổi model/prompt cùng tình huống lỗi, không chỉ happy path.

#### Vì sao các phương án khác không phù hợp?

- **Approve the pull request and add the missing pieces yourself in a follow-up commit so the teammate can move on to other work immediately.**: Approve rồi sửa sau đưa thiếu sót vào nhánh chính trước kiểm tra.
- **Approve the pull request as-is, on the grounds that the feature works in the happy path and the missing pieces can be added in follow-up commits.**: Happy path không chứng minh vận hành khi API lỗi.
- **Request changes that move prompt and model configuration to a configurable location and add tests, treating the missing error handling as a follow-up release item.**: Chừa error handling sau vẫn để production có đường lỗi chưa xử lý.

**Tham khảo:**

- [Official Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python)
- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q61 · single choice · — not answered

You are setting up Claude Code for a new project repository. 

Your team has shared coding standards, preferred libraries, and project-specific context that every developer working on the repository should have available when they use Claude Code. 

How would you set this up?

- ✅ **A.** Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.mdfile at the repository root.
- **B.** Add the coding standards and project context to the repository's existing README file and direct developers to reference it when starting Claude Code sessions.
- **C.** Document the standards in a separate wiki page maintained outside the repository so the documentation stays decoupled from the source code.
- **D.** Configure Claude Code through environment variables that each developer sets on their own machine when they begin working in the repository.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.mdfile at the repository root.

CLAUDE.md gốc repo mang chuẩn và context project vào phiên đúng phạm vi, thay vì mỗi người tự nhớ chép prompt.

#### Vì sao các phương án khác không phù hợp?

- **Document the standards in a separate wiki page maintained outside the repository so the documentation stays decoupled from the source code.**: Wiki ngoài repo không mặc nhiên được load trong session.
- **Configure Claude Code through environment variables that each developer sets on their own machine when they begin working in the repository.**: Env variables không phù hợp chứa toàn hướng dẫn coding/context.
- **Add the coding standards and project context to the repository's existing README file and direct developers to reference it when starting Claude Code sessions.**: README có thể được đọc khi cần nhưng không phải cơ chế tự nhận instruction project được hỏi.

**Tham khảo:**

- [Claude Code memory hierarchy](https://code.claude.com/docs/en/memory)

</details>


---

## Q62 · single choice · — not answered

You are reviewing an architectural diagram for a Claude-powered travel-booking system. 

The diagram shows a top-level component that interprets user requests and three subordinate components that handle flights, hotels, and ground transportation. 

The top-level component is responsible for routing each request, sequencing the subordinate components, and reconciling their outputs into a final itinerary. 

The diagram also shows that each subordinate component has its own tool list and own short conversation history that is not shared with the others. 

Which architectural pattern does this diagram most closely describe?

- **A.** A retrieval-augmented pattern, where the top-level component retrieves relevant context from the subordinate components' indexed data stores before generating each response.
- ✅ **B.** A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list.
- **C.** A manager and supervisor pattern with shared context, where the top-level agent and the subagents all share a single conversation history that grows as the request flows through the system.
- **D.** A pipeline pattern, where each component processes the user request in sequence and passes the full conversation history along with the request to the next component in the pipeline.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list.

Manager điều phối chuyên gia flights/hotels/ground, mỗi agent có tools và history riêng; isolation được nêu rõ trong diagram.

#### Vì sao các phương án khác không phù hợp?

- **A manager and supervisor pattern with shared context, where the top-level agent and the subagents all share a single conversation history that grows as the request flows through the system.**: Shared history trái điều kiện diagram nói không chia sẻ.
- **A pipeline pattern, where each component processes the user request in sequence and passes the full conversation history along with the request to the next component in the pipeline.**: Pipeline truyền toàn history không khớp routing và tổng hợp manager.
- **A retrieval-augmented pattern, where the top-level component retrieves relevant context from the subordinate components' indexed data stores before generating each response.**: Retrieval từ indexed stores không mô tả các subagent có tools/history.

**Tham khảo:**

- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)
- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q63 · single choice · — not answered

You are starting a new Claude application and have a small set of well-labeled examples that demonstrate the desired output format. 

You want to use these examples to guide Claude's behavior. 

How would you guide the application's behavior?

- **A.** Train a custom model on the labeled examples before deployment so that the application does not need to include the examples in any prompt during operation.
- ✅ **B.** Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request.
- **C.** Use zero-shot prompting and rely on the model's general capability to produce the desired output format consistently across all incoming requests.
- **D.** Embed the examples in a database and retrieve them at runtime as reference material for the team.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request.

Multi-shot đưa ví dụ gắn nhãn trực tiếp vào context để minh họa format và pattern mong muốn cho mỗi yêu cầu.

#### Vì sao các phương án khác không phù hợp?

- **Use zero-shot prompting and rely on the model's general capability to produce the desired output format consistently across all incoming requests.**: Zero-shot không dùng chính examples đã có.
- **Embed the examples in a database and retrieve them at runtime as reference material for the team.**: Database chỉ hữu ích nếu có retrieval đưa ví dụ vào context; lưu cho team chưa đủ.
- **Train a custom model on the labeled examples before deployment so that the application does not need to include the examples in any prompt during operation.**: Huấn luyện riêng từ ít ví dụ quá nặng so với mục tiêu format; không cần trước khi thử prompting.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

</details>


---

## Q64 · single choice · — not answered

You are setting up the configuration management approach for a new Claude Code project. 

Your team will use CLAUDE.md files and settings.json files to control behavior, and you want to make sure changes are tracked and reviewable. 

The configuration management approach would...

- **A.** Version-control CLAUDE.md and settings.json files in a separate repository from the project's source code, so configuration evolves independently from the application code over time.
- **B.** Duplicate CLAUDE.md and settings.json files in multiple repositories to provide redundancy, on the grounds that a single source of truth is risky for project configuration.
- **C.** Version-control CLAUDE.md alongside the project's source code and settings. json files in a separate repository from the project's source code.
- ✅ **D.** Version-control CLAUDE.md and settings.json files alongside the project's source code, with changes reviewed through standard pull request workflows the team applies.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Version-control CLAUDE.md and settings.json files alongside the project's source code, with changes reviewed through standard pull request workflows the team applies.

Version control chung code và cấu hình giúp review một thay đổi hành vi cùng implementation, tái tạo hoặc rollback đúng cặp phiên bản.

#### Vì sao các phương án khác không phù hợp?

- **Duplicate CLAUDE.md and settings.json files in multiple repositories to provide redundancy, on the grounds that a single source of truth is risky for project configuration.**: Nhân bản nhiều bản dễ drift, không tạo nguồn chuẩn duy nhất.
- **Version-control CLAUDE.md and settings.json files in a separate repository from the project's source code, so configuration evolves independently from the application code over time.**: Repo riêng có thể quản lý được nhưng cần liên kết version; không trực tiếp giữ thay đổi project cùng PR như đề yêu cầu.
- **Version-control CLAUDE.md alongside the project's source code and settings. json files in a separate repository from the project's source code.**: Tách chỉ settings vẫn làm việc tái tạo cặp code/config khó hơn.

**Tham khảo:**

- [Claude Code settings](https://code.claude.com/docs/en/settings)
- [Claude Code memory hierarchy](https://code.claude.com/docs/en/memory)

</details>


---

## Q65 · single choice · — not answered

Your agent is processing tasks that take 30 to 60 minutes to complete. 

Each task has well-defined intermediate checkpoints, and the team wants the agent to be able to resume from the most recent checkpoint if a process is interrupted. 

How would you implement this resumability?

- **A.** Restart the task from the beginning whenever a process is interrupted.
- ✅ **B.** Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task.
- **C.** Run two copies of the agent in parallel for every task and use whichever one finishes first as the source of truth.
- **D.** Increase the agent's timeout to several hours so that interruptions become rare enough to ignore in practice.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task.

Checkpoint lưu state trung gian và trạng thái bước đã hoàn tất để khôi phục từ điểm gần nhất, tránh làm lại tác vụ dài.

#### Vì sao các phương án khác không phù hợp?

- **Increase the agent's timeout to several hours so that interruptions become rare enough to ignore in practice.**: Timeout dài không tránh crash hoặc mất process.
- **Run two copies of the agent in parallel for every task and use whichever one finishes first as the source of truth.**: Hai bản chạy có thể lặp side effect và không định nghĩa khôi phục state.
- **Restart the task from the beginning whenever a process is interrupted.**: Restart toàn bộ bỏ lợi ích checkpoint đã có.

**Tham khảo:**

- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q66 · single choice · — not answered

A team has deployed a multi-agent system in which a primary agent decomposes user requests and delegates subtasks to three specialized subagents: one for data retrieval, one for analysis, and one for report generation. 

In production, the team observes that subagents are making redundant tool calls, occasionally exceeding token budgets, and sometimes producing outputs that contradict each other - all of which the primary agent passes along without catching. 

What is the most appropriate way to address these failures?

- ✅ **A.** Strengthen the primary agent's management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages.
- **B.** Add retry logic to each subagent so that when a tool call fails, the subagent retries automatically before escalating - and configure each subagent to log its tool calls and outputs to a shared trace so the team can audit redundancy and contradictions after the fact.
- **C.** Collapse the three subagents into a single large-context model call that handles retrieval, analysis, and generation in one pass.
- **D.** Give each subagent read access to the other subagents' outputs so they can identify and resolve contradictions without routing back through the primary agent.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Strengthen the primary agent's management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages.

Manager cưỡng chế budget, schema và hợp đồng handoff để chặn output mâu thuẫn hoặc quá giới hạn trước khi chuyển tiếp.

#### Vì sao các phương án khác không phù hợp?

- **Add retry logic to each subagent so that when a tool call fails, the subagent retries automatically before escalating - and configure each subagent to log its tool calls and outputs to a shared trace so the team can audit redundancy and contradictions after the fact.**: Retry và audit sau không ngăn redundant calls hay output sai lúc chạy.
- **Give each subagent read access to the other subagents' outputs so they can identify and resolve contradictions without routing back through the primary agent.**: Đọc output lẫn nhau không thay quản lý budget và gate thống nhất.
- **Collapse the three subagents into a single large-context model call that handles retrieval, analysis, and generation in one pass.**: Một call lớn bỏ chuyên môn hóa nhưng không giải quyết kiểm chứng hoặc giới hạn.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q67 · single choice · — not answered

Your agent makes 10 to 15 tool calls per task, and you have noticed it sometimes loses track of earlier results by the time it reaches later steps. 

The agent's context window is large enough to hold all the messages, but the relevant information appears to get buried as the conversation grows. 

How would you address this?

- **A.** Increase the context window further so all tool outputs from every prior step remain in full detail throughout the task.
- **B.** Switch to a different agentic framework that advertises automatic context-window management as a built-in feature.
- ✅ **C.** Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state.
- **D.** Reduce the number of tool calls per task by combining several existing tools into larger, multi-purpose tools.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state.

Tóm tắt/prune output cũ nhưng giữ mục tiêu, ràng buộc và kết quả đang dùng làm evidence giúp giảm nhiễu ngay cả khi chưa đầy context.

#### Vì sao các phương án khác không phù hợp?

- **Switch to a different agentic framework that advertises automatic context-window management as a built-in feature.**: Đổi framework không tự định nghĩa thông tin cần giữ.
- **Reduce the number of tool calls per task by combining several existing tools into larger, multi-purpose tools.**: Gộp tool quá rộng có thể làm interface mơ hồ, không xử lý state bị chôn.
- **Increase the context window further so all tool outputs from every prior step remain in full detail throughout the task.**: Context lớn hơn chứa thêm nhiễu chứ không bảo đảm tập trung.

**Tham khảo:**

- [Effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)

</details>


---

## Q68 · single choice · — not answered

A teammate has asked why your Claude application sometimes produces a response that includes the prompt text repeated back, and other times produces a response with the prompt text rephrased. 

They suspect a bug in the application's request construction. 

How would you respond?

- **A.** Confirm that the variation is a bug in the application's request construction and start investigating which part of the application is producing the inconsistent prompt text.
- **B.** Tell the teammate that the variation is caused by the application sending two different prompts on different runs and propose a code change that pins the system prompt to a single version.
- ✅ **C.** Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction.
- **D.** Tell the teammate that the variation depends on which Claude model serves the request, and recommend pinning the application to a single model version to make the output behavior consistent.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction.

Khóa nguồn chọn giải thích rằng LLM sinh văn bản từng token nên cùng nội dung prompt có thể được lặp lại hoặc diễn đạt lại khác nhau. Biến thiên này có thể là hành vi sinh bình thường, nhưng riêng hiện tượng đó chưa đủ để loại trừ lỗi dựng request. Cần so trace đầu vào và cấu hình giữa các lượt trước khi kết luận có hay không có bug.

#### Vì sao các phương án khác không phù hợp?

- **Tell the teammate that the variation depends on which Claude model serves the request, and recommend pinning the application to a single model version to make the output behavior consistent.**: Khác model có thể ảnh hưởng đầu ra, nhưng đề không chứng minh request được phục vụ bởi nhiều model; pin version không bảo đảm câu chữ giống hệt.
- **Confirm that the variation is a bug in the application's request construction and start investigating which part of the application is producing the inconsistent prompt text.**: Chốt là bug từ biến thiên đầu ra là kết luận trước khi xem request thực tế.
- **Tell the teammate that the variation is caused by the application sending two different prompts on different runs and propose a code change that pins the system prompt to a single version.**: Giả định có hai prompt khác nhau khi chưa so trace cũng là khẳng định nguyên nhân chưa có bằng chứng.

**Cần xem lại:** Đáp án nguồn khẳng định không phải lỗi request quá tuyệt đối. Nên sửa thành “có thể là biến thiên sinh bình thường; cần kiểm tra request để loại trừ bug”, đồng thời giữ khóa hiện có cho đến khi biên tập.

**Tham khảo:**

- [Glossary](%5C%22https%3A//platform.claude.com/docs/en/about-claude/glossary%5C%22)
- [Define success criteria and build evaluations](%5C%22https%3A//platform.claude.com/docs/en/test-and-evaluate/develop-tests%5C%22)

</details>


---

## Q69 · single choice · — not answered

You are designing a multi-step Claude workflow where some steps must reason without seeing the full prior conversation history. 

The team wants to keep specific context isolated to specific steps. 

The context engineering technique you would use is...

- ✅ **A.** Context isolation through subagents or multi-step agentic workflows that scope each step's context to only what the step needs.
- **B.** Using a single global prompt that applies to every step in the workflow no matter what each step is reasoning about during its run.
- **C.** Augmenting the context with all available content at every step so each step has access to the entire prior history of the workflow during its reasoning.
- **D.** Embedding the full prior history in each step regardless of whether the step needs the prior history for its reasoning.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Context isolation through subagents or multi-step agentic workflows that scope each step's context to only what the step needs.

Context isolation cấp từng bước đúng thông tin cần thiết, tránh lộ context hoặc tác động giả định không phù hợp giữa nhiệm vụ.

#### Vì sao các phương án khác không phù hợp?

- **Augmenting the context with all available content at every step so each step has access to the entire prior history of the workflow during its reasoning.**: Thêm mọi nội dung trái yêu cầu một số bước không thấy full history.
- **Using a single global prompt that applies to every step in the workflow no matter what each step is reasoning about during its run.**: Global prompt không tự tách dữ liệu history từng bước.
- **Embedding the full prior history in each step regardless of whether the step needs the prior history for its reasoning.**: Nhúng full history trực tiếp vi phạm điều kiện isolation.

**Tham khảo:**

- [Effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)
- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q70 · single choice · — not answered

A teammate has asked you to explain why your Claude agent's tools include detailed descriptions in the tool definition, even when the tool name is already descriptive. 

The teammate suggests removing the descriptions to simplify the tool definitions. 

How would you respond?

- ✅ **A.** Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough.
- **B.** Agree with the teammate because tool names are sufficient for the model to choose the right tool on every request the agent handles.
- **C.** Suggest moving the descriptions out of the tool definition and into a separate documentation file the teamnaintains so the tool definitions stay short and the descriptions remain available.
- **D.** Suggest replacing the descriptions with example calls embedded in the tool definition, treating example calls as a complete substitute for the prose description.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough.

Description nói khi dùng, input hợp lệ và giới hạn output; tên tool ngắn không truyền đủ edge cases để chọn đúng.

#### Vì sao các phương án khác không phù hợp?

- **Suggest replacing the descriptions with example calls embedded in the tool definition, treating example calls as a complete substitute for the prose description.**: Ví dụ bổ sung hữu ích nhưng không thay toàn ranh giới/điều kiện sử dụng.
- **Agree with the teammate because tool names are sufficient for the model to choose the right tool on every request the agent handles.**: Tên không bảo đảm chọn đúng mọi mixed request.
- **Suggest moving the descriptions out of the tool definition and into a separate documentation file the teamnaintains so the tool definitions stay short and the descriptions remain available.**: File ngoài không tự hiện trong catalog tool model đang dùng.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q71 · single choice · — not answered

Your Claude application's error handling currently logs every API error with the same severity level. 

The team wants to differentiate between errors that should page an on-call engineer and errors that should be logged for later review. 

How would you structure the error handling?

- ✅ **A.** Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging.
- **B.** Log every error with the same severity, on the grounds that differentiating severity adds complexity that does it pay off in most application setups over time.
- **C.** Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle.
- **D.** Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging.

Severity theo tác động và khả năng phục hồi giúp page sự cố cần hành động ngay, còn lỗi recoverable vẫn được ghi để phân tích.

#### Vì sao các phương án khác không phù hợp?

- **Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle.**: Page mọi lỗi gây alert fatigue và làm chìm sự cố quan trọng.
- **Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either.**: Không page không có nghĩa không cần dữ liệu debug.
- **Log every error with the same severity, on the grounds that differentiating severity adds complexity that does it pay off in most application setups over time.**: Severity đồng nhất không phân biệt ưu tiên hành động.

**Tham khảo:**

- [Official Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python)

</details>


---

## Q72 · single choice · — not answered

Your Claude application makes high-volume API calls during business hours and very few calls overnight. 

The team is concerned about staying within rate limits during peak hours and wants to understand how the Claude API enforces those limits. 

How would you proceed?

- **A.** Examine the peak-hour request patterns in your application logs and smooth traffic by distributing requests more evenly across the business-hours window.
- ✅ **B.** Identify the rate limits, design the application to stay within them during peak hours, and use exponential backoff when limits are reached.
- **C.** Assess the average payload size of current API calls and consolidate requests where possible to reduce the total number of calls made during peak hours.
- **D.** Review the API documentation for streaming endpoints and evaluate whether migrating peak-hour calls to streaming reduces exposure to rate limit enforcement.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Identify the rate limits, design the application to stay within them during peak hours, and use exponential backoff when limits are reached.

Xác định hạn mức request và token, điều tiết tải cao điểm, rồi chờ tăng dần khi thử lại lỗi giới hạn có thể phục hồi. Lưu lượng thấp ban đêm không xóa giới hạn giờ cao điểm.

#### Vì sao các phương án khác không phù hợp?

- **Examine the peak-hour request patterns in your application logs and smooth traffic by distributing requests more evenly across the business-hours window.**: Giãn tải có ích nhưng chưa xác định hạn mức và cách thử lại.
- **Assess the average payload size of current API calls and consolidate requests where possible to reduce the total number of calls made during peak hours.**: Giảm số lượt gọi chưa xử lý mọi loại hạn mức.
- **Review the API documentation for streaming endpoints and evaluate whether migrating peak-hour calls to streaming reduces exposure to rate limit enforcement.**: Streaming đổi cách truyền kết quả, không miễn giới hạn.

**Tham khảo:**

- [platform.claude.com — rate-limits](%5C%22https%3A//platform.claude.com/docs/en/api/rate-limits%5C%22)

</details>


---

## Q73 · single choice · — not answered

You are extending a Claude agent with a capability that needs to be reusable across multiple teams in the organization, with each team able to invoke and use it independently. 

How would you build the capability?

- ✅ **A.** As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team.
- **B.** As a shared library that each team imports into its own Claude application code, with each team responsible or keeping the library up to date in its integration.
- **C.** As a custom tool embedded in this team's agent only, with other teams able to copy the implementation into their own agents when they need the capability.
- **D.** As a wrapper around an existing built-in tool that adds the missing functionality, on the grounds that built-in tools cover the reuse pattern when extended carefully.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team.

Skill đóng gói workflow/instructions, MCP server cung cấp giao diện tool/resource dùng chung; chọn theo nội dung cần tái sử dụng giữa nhóm.

#### Vì sao các phương án khác không phù hợp?

- **As a custom tool embedded in this team's agent only, with other teams able to copy the implementation into their own agents when they need the capability.**: Embedded tool chỉ nhóm hiện tại buộc nhóm khác copy và tự bảo trì.
- **As a shared library that each team imports into its own Claude application code, with each team responsible or keeping the library up to date in its integration.**: Shared library cũng có thể tái dùng, nên không sai tuyệt đối; nhưng đòi từng app tích hợp thay vì cơ chế discover/invoke sẵn của Skill/MCP.
- **As a wrapper around an existing built-in tool that adds the missing functionality, on the grounds that built-in tools cover the reuse pattern when extended carefully.**: Wrapper built-in không tự tạo cơ chế phân phối độc lập cross-team.

**Tham khảo:**

- [Claude Code skills](https://code.claude.com/docs/en/skills)
- [Claude Code MCP configuration](https://code.claude.com/docs/en/mcp)

</details>


---

## Q74 · single choice · — not answered

You are choosing between using STDIO-based communication and HTTP-based communication for an ACP server. 

The server will be invoked by a Claude Code session running locally. 

Which communication pattern would you use?

- **A.** HTTP on the grounds that HTTP is preferable to STDIO in any context the application might encounter during normal operation.
- ✅ **B.** STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup.
- **C.** STDIO and HTTP simultaneously for redundancy, with the team running two communication patterns at the same time across Claude Code sessions.
- **D.** HTTP polling against the MCP server, treating HTTP as a substitute for the standard MCP communication patterns.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup.

STDIO phù hợp khi MCP server được chạy như tiến trình con cục bộ: client trao đổi thông điệp qua đầu vào và đầu ra chuẩn mà không mở điểm mạng. HTTP cục bộ cũng dùng được, nhưng STDIO tránh cấu hình mạng khi chỉ cần giao tiếp giữa tiến trình. Đề ghi ACP nên cách giải thích này có điều kiện: giao thức thực sự được hỏi phải là MCP.

#### Vì sao các phương án khác không phù hợp?

- **STDIO and HTTP simultaneously for redundancy, with the team running two communication patterns at the same time across Claude Code sessions.**: Chạy cả hai transport tăng cấu hình và điểm lỗi khi đề không yêu cầu dự phòng.
- **HTTP on the grounds that HTTP is preferable to STDIO in any context the application might encounter during normal operation.**: HTTP hữu ích cho server từ xa hoặc dùng chung, nhưng không luôn tốt hơn cho tiến trình con cục bộ.
- **HTTP polling against the MCP server, treating HTTP as a substitute for the standard MCP communication patterns.**: Polling điểm HTTP không thay thế việc triển khai đúng transport và thông điệp MCP.

**Cần xem lại:** Phần đề ghi ACP còn lựa chọn và khóa mô tả MCP. Giữ nguyên nguồn nhưng cần xác nhận giao thức được hỏi trước khi xuất bản.

**Tham khảo:**

- [MCP architecture — Transport layer](%5C%22https%3A//modelcontextprotocol.io/docs/learn/architecture%5C%22)

</details>


---

## Q75 · single choice · — not answered

Your Claude application's API keys are stored in a secrets manager. 

The team is debating whether the same key should be used in development, staging, and production environments. 

How would you handle the keys across environments?

- **A.** Use a single development key everywhere on the grounds that production keys are too risky to deploy across the application's three environments during normal operation.
- ✅ **B.** Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application's lifecycle.
- **C.** Rotate the same key across environments at random intervals on the grounds that random rotation provides isolation between environments without requiring distinct keys.
- **D.** Use the same key across all environments for simplicity and treat the propagation of any compromise as a known operational tradeoff for the team's key management approach.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application's lifecycle.

Key riêng từng môi trường cô lập quyền, quota và tác động khi lộ dev key khỏi production; vẫn cần quản lý rotate/revoke.

#### Vì sao các phương án khác không phù hợp?

- **Rotate the same key across environments at random intervals on the grounds that random rotation provides isolation between environments without requiring distinct keys.**: Rotate cùng key không tạo ranh giới đồng thời giữa môi trường.
- **Use the same key across all environments for simplicity and treat the propagation of any compromise as a known operational tradeoff for the team's key management approach.**: Chấp nhận lan lộ key không đáp ứng mục tiêu cô lập.
- **Use a single development key everywhere on the grounds that production keys are too risky to deploy across the application's three environments during normal operation.**: Dùng dev key ở production vẫn chia sẻ cùng bí mật và có thể sai quyền.

**Tham khảo:**

- [Official Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python)

</details>


---

## Q76 · single choice · — not answered

You are explaining to a stakeholder why running the same Claude prompt twice can produce slightly different results. 

The stakeholder is concerned this means the application is broken. 

How would you address the stakeholder's concern?

- **A.** Tell the stakeholder the variation is a bug that the team will fix in the next release of the application, then create a work ticket to fix the bug.
- **B.** Tell the stakeholder the variation comes from network latency and that switching to a faster network connection will produce more consistent results across runs.
- **C.** Tell the stakeholder the variation is caused by Claude being updated continuously by Anthropic, and that switching to a fixed model snapshot will eliminate the variation entirely
- ✅ **D.** Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment.

Sampling khiến cùng prompt có thể cho wording khác; ứng dụng nên validate tiêu chí, retry có giới hạn và điều chỉnh tham số hỗ trợ, không hứa tuyệt đối deterministic.

#### Vì sao các phương án khác không phù hợp?

- **Tell the stakeholder the variation is a bug that the team will fix in the next release of the application, then create a work ticket to fix the bug.**: Wording khác không tự chứng minh bug để hứa sửa.
- **Tell the stakeholder the variation comes from network latency and that switching to a faster network connection will produce more consistent results across runs.**: Độ trễ mạng không quyết định token sampling như mô tả.
- **Tell the stakeholder the variation is caused by Claude being updated continuously by Anthropic, and that switching to a fixed model snapshot will eliminate the variation entirely**: Snapshot cố định không loại toàn bộ biến thiên sampling.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

</details>


---

## Q77 · single choice · — not answered

The product team has asked you to choose a Claude model for a new feature. 

The team has provided functional requirements but has not specified performance, cost, or quality targets. 

The team's product manager says, "Use whatever model gives us the best results." 

How would you respond?

- **A.** Run every Claude model on a representative sample and pick whichever scores best on a generic benchmark.
- ✅ **B.** Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets.
- **C.** Choose a mid-tier model and ship the feature, because mid-tier models work for most use cases without specified targets.
- **D.** Choose the largest, highest-capability Claude model, on the grounds that "best results" is most likely to mean highest quality.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets.

Quality, latency và cost targets định nghĩa trade-off để eval chọn model phù hợp nhu cầu thực thay vì “best” chung chung.

#### Vì sao các phương án khác không phù hợp?

- **Run every Claude model on a representative sample and pick whichever scores best on a generic benchmark.**: Benchmark chung có thể không đo task và constraint sản phẩm.
- **Choose a mid-tier model and ship the feature, because mid-tier models work for most use cases without specified targets.**: Mid-tier mặc định không chứng minh đạt target chưa có.
- **Choose the largest, highest-capability Claude model, on the grounds that "best results" is most likely to mean highest quality.**: Model lớn nhất có thể không đáp ứng chi phí hoặc độ trễ.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q78 · single choice · — not answered

Your Claude application is deployed to development, staging, and production environments. 

Each environment uses a different model version, different prompt versions, and different plugin dependencies, but the configuration is currently scattered across environment variables, hardcoded values, and undocumented setup scripts. 

How would you manage the configuration?

- **A.** Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time.
- **B.** Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce.
- **C.** Standardize all environments to use the same configuration values to eliminate the differences betweendevelopment, staging, and production.
- ✅ **D.** Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.

Nguồn config versioned ghi rõ model/prompt/plugin từng môi trường giúp tái hiện, so drift và review rollout mà vẫn giữ khác biệt cần thiết.

#### Vì sao các phương án khác không phù hợp?

- **Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce.**: Luôn latest mất bản cụ thể để tái hiện regression.
- **Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time.**: Hardcode mọi config làm khó thay môi trường và không tự giải quyết tracking.
- **Standardize all environments to use the same configuration values to eliminate the differences betweendevelopment, staging, and production.**: Mọi môi trường giống hệt có thể trái nhu cầu test/pilot và quyền riêng.

**Tham khảo:**

- [Claude Code settings](https://code.claude.com/docs/en/settings)
- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q79 · single choice · — not answered

You are designing a Claude application that will require structured JSON output for downstream processing. 

The output schema is well-defined, and downstream systems will reject malformed JSON. 

Your application design would ...

- **A.** avoid structured output and use free-form text everywhere instead, on the grounds that free-form text is more flexible and handles edge cases better than structured schemas.
- **B.** define a clear schema and structure the prompt to request output in that schema, with downstream systems handling any validation needed.
- ✅ **C.** define a clear schema, structure the prompt to request output in that schema, and validate Claude's output against the schema before passing it downstream.
- **D.** structure the prompt to request output in a schema that is described in plain English, with downstream systems parsing whatever shape Claude produces.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** define a clear schema, structure the prompt to request output in that schema, and validate Claude's output against the schema before passing it downstream.

Dùng schema rõ ràng và kiểm tra dữ liệu trước khi chuyển cho hệ thống sau. Structured output ràng buộc lúc sinh; kiểm tra trong ứng dụng bảo vệ điểm tiếp nhận.

#### Vì sao các phương án khác không phù hợp?

- **avoid structured output and use free-form text everywhere instead, on the grounds that free-form text is more flexible and handles edge cases better than structured schemas.**: Văn bản tự do không đáp ứng giao diện dữ liệu.
- **structure the prompt to request output in a schema that is described in plain English, with downstream systems parsing whatever shape Claude produces.**: Mô tả schema mơ hồ rồi nhận mọi dạng dữ liệu không giữ hợp đồng.
- **define a clear schema and structure the prompt to request output in that schema, with downstream systems handling any validation needed.**: Đẩy toàn bộ kiểm tra cho phía sau bỏ mất chốt bảo vệ trước khi chuyển.

**Tham khảo:**

- [platform.claude.com — structured-outputs](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/structured-outputs%5C%22)

</details>


---

## Q80 · single choice · — not answered

You are designing a Claude application that will process customer support tickets in two stages: a triage stage that classifies tickets and a response stage that drafts replies. 

The team is debating whether to use a single Claude call that handles both stages or separate Claude calls for each stage. 

How would you structure the application?

- ✅ **A.** Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts.
- **B.** Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup.
- **C.** Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer.
- **D.** Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts.

Triage và drafting có input/output và tiêu chí khác; tách call giúp validate classification trước khi dùng nó chọn hướng trả lời.

#### Vì sao các phương án khác không phù hợp?

- **Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies.**: Rule-based drafting chưa được chứng minh phù hợp và không giải quyết trực tiếp phân tách hai bước Claude.
- **Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer.**: Nhiều complete replies song song là voting/evaluation, không tách triage rồi response.
- **Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup.**: Một call không luôn rẻ hơn khi prompt phức tạp hoặc lỗi phải sửa; không thay tiêu chí thiết kế.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q81 · single choice · — not answered

A new agent your team built handles customer support tickets, but it routinely gets confused when a single ticket spans billing, shipping, and product issues. 

The agent often loses track of which sub-issue it has already addressed and revisits the same one. 

The team is considering architectural changes. 

What architectural change would you recommend?

- **A.** Add detailed prompting that instructs the agent to track which sub-issues have been resolved and which remain.
- **B.** Increase the size of the agent's context window so it can hold the full ticket history at once.
- ✅ **C.** Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents.
- **D.** Switch to a deterministic workflow that handles billing, shipping, and product issues in a fixed sequence.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents.

Orchestrator tách billing/shipping/product cho chuyên gia, giữ trạng thái sub-issue rồi tổng hợp để giảm quay lại việc đã xử lý.

#### Vì sao các phương án khác không phù hợp?

- **Switch to a deterministic workflow that handles billing, shipping, and product issues in a fixed sequence.**: Chuỗi cứng mọi chủ đề có thể chạy bước không cần và khó linh hoạt theo ticket.
- **Add detailed prompting that instructs the agent to track which sub-issues have been resolved and which remain.**: Prompt tracking có thể giúp nhưng không tạo sự phân chia trách nhiệm khi hệ thống đang lẫn nhiều miền.
- **Increase the size of the agent's context window so it can hold the full ticket history at once.**: Context lớn không tự tạo task state hoặc phân biệt nhánh đã hoàn tất.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q82 · single choice · — not answered

Your Claude agent's hooks are currently triggered for every action, which slows down the agent significantly ven when actions pose no risk. 

The team wants to scope hooks more carefully. 

How would you scope the hooks?

- ✅ **A.** Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance.
- **B.** Replace hooks with system prompt instructions on the grounds that prompt instructions can produce the same enforcement effect that hooks produce on the agent's actions.
- **C.** Disable the agent during peak hours so the hook overhead does not slow the application down during the busiest periods of the day across the application's operation.
- **D.** Disable all hooks while the team re-scopes them, treating the period of no hook enforcement as a temporary state during the re-scoping work.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance.

Matcher hook theo loại hành động rủi ro giảm chạy kiểm tra không cần trong khi vẫn cưỡng chế nơi có phá hủy hoặc dữ liệu nhạy cảm; phải giữ kiểm soát bắt buộc.

#### Vì sao các phương án khác không phù hợp?

- **Disable all hooks while the team re-scopes them, treating the period of no hook enforcement as a temporary state during the re-scoping work.**: Tắt toàn bộ tạo khoảng trống enforcement.
- **Disable the agent during peak hours so the hook overhead does not slow the application down during the busiest periods of the day across the application's operation.**: Tắt agent giờ cao điểm không xử lý hook scope.
- **Replace hooks with system prompt instructions on the grounds that prompt instructions can produce the same enforcement effect that hooks produce on the agent's actions.**: Prompt không có cùng hiệu lực cưỡng chế như hook code.

**Tham khảo:**

- [Claude Code hooks reference](https://code.claude.com/docs/en/hooks)

</details>


---

## Q83 · single choice · — not answered

You are designing a Claude application that processes user-submitted text. 

Some of that text could include sensitive information such as account numbers or passwords that the application should not send to Claude. 

How would you design the application?

- ✅ **A.** Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary.
- **B.** Add a prompt instruction in the system prompt specifying the categories of sensitive information Claude should disregard when processing user-submitted text.
- **C.** Log all user-submitted text before it is sent to Claude and review the logs periodically to identify whether sensitive information is reaching the model.
- **D.** Apply filtering at the boundary for the most commonly observed sensitive data patterns and expand coverage to additional patterns based on findings from production monitoring.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary.

Xác định dữ liệu được phép rời boundary rồi lọc/redact trước gửi ngăn secret vào prompt ngay từ nguồn, không trông chờ model bỏ qua sau khi nhận.

#### Vì sao các phương án khác không phù hợp?

- **Add a prompt instruction in the system prompt specifying the categories of sensitive information Claude should disregard when processing user-submitted text.**: Model bỏ qua vẫn có nghĩa dữ liệu đã được gửi ra ngoài.
- **Log all user-submitted text before it is sent to Claude and review the logs periodically to identify whether sensitive information is reaching the model.**: Log đầy đủ tạo bản sao nhạy cảm và chỉ phát hiện sau sự kiện.
- **Apply filtering at the boundary for the most commonly observed sensitive data patterns and expand coverage to additional patterns based on findings from production monitoring.**: Chỉ pattern thường gặp thiếu ranh giới rõ cho dữ liệu chưa quan sát.

**Tham khảo:**

- [Mitigate prompt injection](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)
- [Securely deploying AI agents](https://code.claude.com/docs/en/agent-sdk/secure-deployment)

</details>


---

## Q84 · single choice · — not answered

Your Claude application runs long agentic workflows where the agent makes many tool calls, and the conversation history grows quickly. 

After about 20 tool calls, you notice the agent's responses become less focused and sometimes ignore earlier task constraints. 

How would you address this?

- **A.** Increase the model's context window so the agent can hold every tool output at full detail across the entire workflow no matter how many tool calls it accumulates.
- **B.** Restart the agent every five tool calls to prevent any drift, with the agent losing all task state at each restart point during the workflow.
- **C.** Remove tool calling from the workflow entirely so the agent operates as a single text-generation step with no tool outputs accumulating in the context window.
- ✅ **D.** Apply context engineering techniques such as tool output pruning or compaction to keep the active task state visible while reducing the volume of older content.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply context engineering techniques such as tool output pruning or compaction to keep the active task state visible while reducing the volume of older content.

Pruning/compaction giảm output cũ nhưng giữ mục tiêu, constraint và kết quả đang dùng để tác vụ dài không lạc hướng.

#### Vì sao các phương án khác không phù hợp?

- **Remove tool calling from the workflow entirely so the agent operates as a single text-generation step with no tool outputs accumulating in the context window.**: Bỏ tools làm mất khả năng thực hiện workflow cần dữ liệu/hành động.
- **Increase the model's context window so the agent can hold every tool output at full detail across the entire workflow no matter how many tool calls it accumulates.**: Context lớn không vô hạn và không bảo đảm chú ý mọi constraint.
- **Restart the agent every five tool calls to prevent any drift, with the agent losing all task state at each restart point during the workflow.**: Restart mất state mỗi năm call phá tính liên tục.

**Tham khảo:**

- [Effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)

</details>


---

## Q85 · single choice · — not answered

You are designing an agent that handles a complex claim-processing workflow. 

Each claim moves through fact extraction, eligibility evaluation, and a decision step. 

The three subtasks have distinct success criteria, and some claims require iteration between fact extraction and eligibility evaluation before a decision can be reached. 

Which agent pattern would you apply?

- ✅ **A.** A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria.
- **B.** A streaming pattern that emits partial decisions as the agent processes each claim, refining the output until a final decision emerges from the stream.
- **C.** A single tool-use loop pattern that gives one agent access to all the tools needed for fact extraction, eligibility evaluation, and decision-making.
- **D.** A linear chain pattern that processes every claim through fact extraction, then eligibility evaluation, then decision, with no return paths between subtasks.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria.

Graph theo state cho phép quay từ eligibility về fact extraction khi thiếu bằng chứng, đồng thời mỗi node có tiêu chí riêng trước decision.

#### Vì sao các phương án khác không phù hợp?

- **A streaming pattern that emits partial decisions as the agent processes each claim, refining the output until a final decision emerges from the stream.**: Streaming là cơ chế truyền output, không định nghĩa dependency hoặc back edge.
- **A single tool-use loop pattern that gives one agent access to all the tools needed for fact extraction, eligibility evaluation, and decision-making.**: Loop chung có thể làm được nhưng không biểu diễn rõ gate riêng từng subtask như graph.
- **A linear chain pattern that processes every claim through fact extraction, then eligibility evaluation, then decision, with no return paths between subtasks.**: Linear chain không có đường quay lại nên trái yêu cầu iteration.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q86 · single choice · — not answered

Your enterprise has a contract with AWS that requires Claude API calls to flow through Amazon Bedrock rather lan the direct Anthropic API. 

Your team is building a new Claude application and is unfamiliar with this constraint. 

How would you build the application?

- **A.** Build two parallel implementations of every call, one for the direct Anthropic API and one for Bedrock, and pick the faster one at runtime.
- **B.** Build the application against the direct Anthropic API and ignore the contractual requirement to route Claude calls through Amazon Bedrock.
- **C.** Build the application against the direct Anthropic API now and migrate to Bedrock in a follow-up release once the team has more experience with the Bedrock API.
- ✅ **D.** Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application's logic provider-agnostic.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application's logic provider-agnostic.

Dùng đường API Bedrock đáp ứng hợp đồng định tuyến, còn cô lập logic nghiệp vụ khỏi adapter giảm phụ thuộc provider.

#### Vì sao các phương án khác không phù hợp?

- **Build two parallel implementations of every call, one for the direct Anthropic API and one for Bedrock, and pick the faster one at runtime.**: Chọn nhanh nhất runtime có thể gọi direct API trái hợp đồng.
- **Build the application against the direct Anthropic API now and migrate to Bedrock in a follow-up release once the team has more experience with the Bedrock API.**: Migrate sau vẫn vi phạm trong giai đoạn đầu.
- **Build the application against the direct Anthropic API and ignore the contractual requirement to route Claude calls through Amazon Bedrock.**: Bỏ qua constraint hợp đồng không phải quyết định triển khai hợp lệ.

**Tham khảo:**

- [Claude on Amazon Bedrock](https://platform.claude.com/docs/en/build-with-claude/claude-on-amazon-bedrock-legacy)

</details>


---

## Q87 · single choice · — not answered

Your Claude application has been running for several conversation turns, and you notice the model occasionally references information that was discussed many turns ago but is no longer relevant. 

You suspect context drift is causing the model to weight stale content too heavily. 

How would you address the drift?

- ✅ **A.** Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight.
- **B.** Reset the conversation after every turn so the model loses all prior turns when generating a response.
- **C.** Truncate the conversation so the model sees only the most recent turn during each subsequent response.
- **D.** Increase the context window size so all turns of the conversation remain visible to the model in full detail.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight.

Compaction giữ ý chính cần thiết nhưng giảm chi tiết cũ không liên quan; summary phải bảo toàn mục tiêu và quyết định còn hiệu lực.

#### Vì sao các phương án khác không phù hợp?

- **Increase the context window size so all turns of the conversation remain visible to the model in full detail.**: Cửa sổ lớn giữ thêm stale content, không trực tiếp giảm trọng số nhiễu.
- **Reset the conversation after every turn so the model loses all prior turns when generating a response.**: Reset mọi lượt mất liên tục hội thoại.
- **Truncate the conversation so the model sees only the most recent turn during each subsequent response.**: Chỉ turn mới nhất làm mất constraint cũ còn hiệu lực.

**Tham khảo:**

- [Effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)

</details>


---

## Q88 · single choice · — not answered

You are building a Claude application that needs to maintain a persistent connection to a service that streams real- time updates. 

The team is unsure what communication pattern to use.

Which communication pattern would you use?

- ✅ **A.** A WebSocket, because WebSockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service.
- **B.** A single long HTTP request the server holds open indefinitely, with no standard WebSocket framing on the connection.
- **C.** File-based communication where the service writes new updates to disk and the application polls the file system for changes.
- **D.** Repeated short-lived HTTP polling requests, where the application opens a new HTTP connection each time it checks for updates.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A WebSocket, because WebSockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service.

WebSocket cung cấp kênh bền vững hai chiều nên phù hợp khi ứng dụng cần vừa nhận cập nhật vừa gửi thông điệp theo cùng kênh. Tuy nhiên đề chỉ nói nhận cập nhật thời gian thực: luồng sự kiện HTTP một chiều cũng có thể đáp ứng. Khóa WebSocket hợp lý nhưng chưa duy nhất nếu không có yêu cầu hai chiều.

#### Vì sao các phương án khác không phù hợp?

- **Repeated short-lived HTTP polling requests, where the application opens a new HTTP connection each time it checks for updates.**: Polling lặp tạo các lượt kiểm tra rời và overhead request thay vì luồng cập nhật mở liên tục được yêu cầu.
- **A single long HTTP request the server holds open indefinitely, with no standard WebSocket framing on the connection.**: HTTP giữ mở có thể triển khai streaming một chiều hợp lệ như SSE; không có frame WebSocket chưa đủ khiến nó không phù hợp.
- **File-based communication where the service writes new updates to disk and the application polls the file system for changes.**: Polling hệ thống file thêm phối hợp lưu trữ và không tạo kết nối dịch vụ bền vững trực tiếp.

**Cần xem lại:** Cần làm rõ có yêu cầu gửi nhận hai chiều không. Cập nhật liên tục từ server đến client có thể dùng HTTP streaming/SSE nên cách viết hiện tại chưa chọn duy nhất WebSocket.

**Tham khảo:**

- [RFC 6455 — The WebSocket Protocol](%5C%22https%3A//www.rfc-editor.org/rfc/rfc6455%5C%22)
- [Claude streaming messages — SSE](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/streaming%5C%22)

</details>


---

## Q89 · single choice · — not answered

A teammate has asked how the Claude SDK handles transient API errors, such as a temporary network issue or a brief rate-limit response. 

They want to know whether the application code needs to handle every transient error or whether the SDK provides any default behavior. 

How would you describe the SDK's default behavior?

- **A.** The SDK logs transient errors to a default error stream and continues execution without retrying, leaving the application code responsible for detecting and responding to failed calls.
- **B.** The SDK provides default retry behavior for transient errors up to a fixed number of attempts, and this behavior is not configurable.
- ✅ **C.** The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed.
- **D.** The SDK provides default retry behavior for network errors but surfaces rate-limit responses directly to the application code, which must implement its own retry logic for those cases.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed.

SDK có retry mặc định cho nhiều lỗi tạm thời và cho cấu hình max_retries; app vẫn cần xử lý exhausted retries và lỗi không retry được.

#### Vì sao các phương án khác không phù hợp?

- **The SDK provides default retry behavior for transient errors up to a fixed number of attempts, and this behavior is not configurable.**: Số lần retry có thể cấu hình, không cố định bất biến.
- **The SDK provides default retry behavior for network errors but surfaces rate-limit responses directly to the application code, which must implement its own retry logic for those cases.**: Rate-limit responses nằm trong nhóm có thể retry theo SDK, không luôn chuyển ngay không thử.
- **The SDK logs transient errors to a default error stream and continues execution without retrying, leaving the application code responsible for detecting and responding to failed calls.**: Log rồi tiếp tục không mô tả retry behavior của SDK.

**Tham khảo:**

- [Official Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python)

</details>


---

## Q90 · single choice · — not answered

Your team is debating how to manage the prompts used in your Claude application. 

Some prompts are checked into the code repository, some live in a separate configuration file, and some are constructed inline at runtime. 

The result is inconsistent, and a recent prompt change went out without code review. 

What steps would you take?

- **A.** Establish a single source of truth for prompts but keep change review optional, allowing developers to update prompts directly when changes are urgent.
- ✅ **B.** Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes.
- **C.** Move all prompts out of version control to a separate spreadsheet that team members can edit freely as the application evolves over time.
- **D.** Move all prompts to inline runtime construction so the team can update them quickly through a streamlined process outside the standard code review workflow.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes.

Một nguồn prompt versioned và code review giúp truy nguyên thay đổi hành vi, rollback và tránh chỉnh prompt ngoài quy trình.

#### Vì sao các phương án khác không phù hợp?

- **Move all prompts out of version control to a separate spreadsheet that team members can edit freely as the application evolves over time.**: Spreadsheet tự do ngoài version control mất review và lịch sử deploy rõ ràng.
- **Move all prompts to inline runtime construction so the team can update them quickly through a streamlined process outside the standard code review workflow.**: Inline runtime để né review làm trầm trọng vấn đề.
- **Establish a single source of truth for prompts but keep change review optional, allowing developers to update prompts directly when changes are urgent.**: Nguồn duy nhất nhưng review tùy chọn vẫn cho thay đổi chưa được đánh giá.

**Tham khảo:**

- [Claude Code best practices](https://code.claude.com/docs/en/best-practices)

</details>


---

## Q91 · single choice · — not answered

Your Claude application is hitting context window limits when processing long customer service transcripts. 

A junior developer suggests increasing the temperature parameter to fix the issue. 

How would you respond?

- ✅ **A.** Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking.
- **B.** Increase the temperature parameter as the junior developer suggested and observe whether the context window issue resolves over the next several runs of the application in production.
- **C.** Remove the system prompt entirely to make room for longer transcripts in each request, freeing up context window space the system prompt would otherwise consume.
- **D.** Adjust the temperature parameter together with the max_tokens parameter, treating the combined adjustment as the team's mechanism for managing context window pressure during long-transcript processing.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking.

Temperature ảnh hưởng độ ngẫu nhiên lấy mẫu nếu model được chọn hỗ trợ tham số đó; nó không tăng cửa sổ context. Hãy tóm tắt phần transcript cũ hoặc chia việc thành đoạn vừa giới hạn, đồng thời giữ dữ kiện cần thiết và chỉ dẫn tác vụ hiện tại. Cần tính cả token vào lẫn ra theo giới hạn thật của model.

#### Vì sao các phương án khác không phù hợp?

- **Adjust the temperature parameter together with the max_tokens parameter, treating the combined adjustment as the team's mechanism for managing context window pressure during long-transcript processing.**: Đổi lấy mẫu và giới hạn đầu ra không bỏ bớt đầu vào quá lớn; tăng ngân sách đầu ra còn có thể giảm chỗ dành cho đầu vào trong tổng context.
- **Remove the system prompt entirely to make room for longer transcripts in each request, freeing up context window space the system prompt would otherwise consume.**: Xóa toàn bộ system prompt làm mất quy tắc hành vi cần thiết và không phải chiến lược chung hợp lý để quản lý transcript.
- **Increase the temperature parameter as the junior developer suggested and observe whether the context window issue resolves over the next several runs of the application in production.**: Thử tham số lấy mẫu không liên quan trên production không xử lý nguyên nhân giới hạn dung lượng context đã biết.

**Tham khảo:**

- [Claude context windows](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/context-windows%5C%22)
- [Claude compaction overview](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/compaction%5C%22)

</details>


---

## Q92 · single choice · — not answered

You are integrating Claude into an application written in Python. 

The Claude SDK provides a Python client that wraps the underlying REST API. 

How would you integrate the SDK?

- **A.** Skip the SDK and embed Claude calls in shell commands invoked from Python, so that the application runs the calls outside the main Python process.
- **B.** Call the REST API directly with raw HTTP requests so the application avoids the SDK's abstraction between the application code and the API.
- ✅ **C.** Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations.
- **D.** Use a different LLM provider's SDK and translate the responses into Claude's API shape so the application can switch providers in the future.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations.

Python SDK chuẩn hóa auth, retry và parse response theo interface được tài liệu duy trì, giảm tự viết HTTP plumbing.

#### Vì sao các phương án khác không phù hợp?

- **Call the REST API directly with raw HTTP requests so the application avoids the SDK's abstraction between the application code and the API.**: Raw HTTP vẫn hợp lệ nhưng đòi tự xử lý cơ chế SDK đã cung cấp, không phải lựa chọn đơn giản nhất ở đây.
- **Use a different LLM provider's SDK and translate the responses into Claude's API shape so the application can switch providers in the future.**: SDK provider khác không tự tương thích schema Claude.
- **Skip the SDK and embed Claude calls in shell commands invoked from Python, so that the application runs the calls outside the main Python process.**: Shelling out thêm process/quoting/error handling không cần cho Python integration.

**Tham khảo:**

- [Official Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python)

</details>


---

## Q93 · single choice · — not answered

Your Claude agent has access to a tool that retrieves customer records. 

A teammate has noticed that the agent occasionally calls the tool with arguments the schema does not declare, and the tool's downstream service returns an error each time. 

The teammate proposes loosening the schema so the tool accepts whatever arguments the model produces. 

How would you respond?

- ✅ **A.** Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry.
- **B.** Add a system prompt instruction telling the model to produce schema-conforming arguments, treating the prompt instruction as the primary mechanism for keeping the agent's tool calls valid.
- **C.** Remove the schema entirely and rely on the downstream service to reject invalid calls, treating the downstream service as the team's primary enforcement layer.
- **D.** Loosen the schema as the teammate proposed so the downstream service receives every call the agent makes during normal operation.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry.

Giữ schema strict và validate trước dispatch bảo vệ contract backend; lỗi có cấu trúc chỉ rõ field sai để agent sửa thay vì cho tham số tùy ý.

#### Vì sao các phương án khác không phù hợp?

- **Add a system prompt instruction telling the model to produce schema-conforming arguments, treating the prompt instruction as the primary mechanism for keeping the agent's tool calls valid.**: Prompt nên bổ trợ, không thay validation code.
- **Remove the schema entirely and rely on the downstream service to reject invalid calls, treating the downstream service as the team's primary enforcement layer.**: Bỏ schema chuyển phát hiện lỗi xuống backend và mất hợp đồng tool.
- **Loosen the schema as the teammate proposed so the downstream service receives every call the agent makes during normal operation.**: Nới schema cho mọi argument che lỗi model và có thể nhận dữ liệu backend không hiểu.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q94 · single choice · — not answered

Your Claude application is producing inconsistent outputs for similar inputs, even when using the same model and prompt. 

You want to debug the issue systematically. 

Your debugging approach would...

- **A.** Assume inconsistent outputs reflect normal LLM non-determinism and document the variability as an accepted characteristic of the application's behavior.
- ✅ **B.** Capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs.
- **C.** Lower the model's temperature and re-run the inconsistent inputs to determine whether the parameter change reduces output variability across runs.
- **D.** Retry every request that produces an unexpected output and log the results to identify whether repeated calls converge on a consistent response pattern.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs.

Trace input, system/user messages, model và tham số cho phép so biến thực giữa run tốt/xấu trước khi quy lỗi sampling hoặc đổi cấu hình.

#### Vì sao các phương án khác không phù hợp?

- **Lower the model's temperature and re-run the inconsistent inputs to determine whether the parameter change reduces output variability across runs.**: Giảm temperature có thể là thử nghiệm sau khi ghi baseline, không thay chẩn đoán đầy đủ.
- **Retry every request that produces an unexpected output and log the results to identify whether repeated calls converge on a consistent response pattern.**: Retry chỉ quan sát thêm mà chưa giữ đủ yếu tố để tìm nguyên nhân.
- **Assume inconsistent outputs reflect normal LLM non-determinism and document the variability as an accepted characteristic of the application's behavior.**: Chấp nhận nondeterminism bỏ qua khả năng prompt/context/config khác ngoài ý muốn.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q95 · single choice · — not answered

You are building an agent that needs to call several internal APIs and a database in a structured, repeatable way. 

Your team has decided to use the Claude Agent SDK rather than build a custom loop. 

You are setting up the agent's tool definitions and execution loop. 

How would you set up the tools and execution loop?

- **A.** Call the Messages API directly and let the model format its tool calls in plain text.
- **B.** Use the SDK's tool interface and write the loop and history layer in the team's own code.
- ✅ **C.** Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history.
- **D.** Use the SDK's tool interface and loop, with conversation history stored in a separate team database.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history.

Agent SDK quản lý loop, dispatch và conversation history theo interface tool chuẩn, đúng mục tiêu tránh viết custom loop.

#### Vì sao các phương án khác không phù hợp?

- **Call the Messages API directly and let the model format its tool calls in plain text.**: Messages API cùng tool calls dạng text đòi tự parse và không dùng SDK loop đã chọn.
- **Use the SDK's tool interface and loop, with conversation history stored in a separate team database.**: Database ngoài có thể dùng để persist nhưng không bắt buộc tách quản lý history ra để đạt yêu cầu.
- **Use the SDK's tool interface and write the loop and history layer in the team's own code.**: Tự viết loop/history bỏ lợi ích chính team chọn SDK.

**Tham khảo:**

- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q96 · single choice · — not answered

Your Claude application's token costs have grown faster than expected. 

The team has not been tracking token usage by feature, so the team cannot identify which features are driving cost. 

The team is debating how to respona. 

How would you respond?

- **A.** Reduce token usage uniformly across all features by half, applying the cut evenly across the application during normal operation.
- ✅ **B.** Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes.
- **C.** Tell the team that cost growth is unavoidable as the application scales and that no investigation will change the trajectory of the application's cost over the next several quarters.
- **D.** Switch every feature to the smallest model to cut cost broadly across the application during normal operation.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes.

Theo dõi token theo feature gắn chi phí với tác vụ cụ thể để tối ưu nơi tốn nhiều trước, không cắt mù mọi tính năng.

#### Vì sao các phương án khác không phù hợp?

- **Tell the team that cost growth is unavoidable as the application scales and that no investigation will change the trajectory of the application's cost over the next several quarters.**: Tăng chi phí không tất yếu bất khả cải thiện; thiếu đo lường mới là vấn đề đầu.
- **Switch every feature to the smallest model to cut cost broadly across the application during normal operation.**: Model nhỏ mọi nơi có thể làm hỏng chất lượng tính năng khó.
- **Reduce token usage uniformly across all features by half, applying the cut evenly across the application during normal operation.**: Cắt đồng đều một nửa không căn cứ nhu cầu hoặc mức lãng phí từng feature.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q97 · single choice · — not answered

Your Claude application produces good responses for typical inputs but struggles with edge cases. 

You have several labeled examples of edge-case inputs and the desired response for each. 

You want to use these examples to improve the model's handling of edge cases. 

What is the best way to use these examples?

- **A.** Tell users to avoid submitting the edge-case inputs to the application by adding warnings in the application's user interface.
- **B.** Train a custom model on the edge-case examples and deploy that custom model in place of the team's currentClaude integration.
- ✅ **C.** Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern.
- **D.** Embed the examples in a database for the model to find during inference.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern.

Few-shot đưa case biên cùng output đúng vào prompt, cho thấy pattern quyết định ở những trường hợp model đang yếu.

#### Vì sao các phương án khác không phù hợp?

- **Embed the examples in a database for the model to find during inference.**: Lưu embedding chưa bảo đảm ví dụ được truy xuất và đưa vào context.
- **Train a custom model on the edge-case examples and deploy that custom model in place of the team's currentClaude integration.**: Train model riêng từ ít ví dụ là thay đổi lớn không cần trước khi thử prompt có eval.
- **Tell users to avoid submitting the edge-case inputs to the application by adding warnings in the application's user interface.**: Cấm user gửi edge case bỏ nhu cầu thay vì cải thiện xử lý.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

</details>


---

## Q98 · single choice · — not answered

You have just shipped a new Claude-powered application to production. 

The development phase is complete, and the system is now in active use by internal teams. 

The next phase of work for this system is...

- ✅ **A.** Operating and maintaining the system, including monitoring, responding to issues, and planning evolution.
- **B.** Running a formal post-deployment review that assesses the development phase before the team does any further work on the system.
- **C.** Retiring the system, since shipping is the final lifecycle stage for any application that reaches production.
- **D.** Handing the system over to a separate operations team that will manage it independently of the development team going forward.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Operating and maintaining the system, including monitoring, responding to issues, and planning evolution.

Production mở giai đoạn vận hành: giám sát chất lượng, chi phí, sự cố và cập nhật theo dữ liệu thực, không kết thúc lifecycle.

#### Vì sao các phương án khác không phù hợp?

- **Retiring the system, since shipping is the final lifecycle stage for any application that reaches production.**: Ship không có nghĩa retire hệ thống vừa đưa vào dùng.
- **Running a formal post-deployment review that assesses the development phase before the team does any further work on the system.**: Post-deploy review có ích nhưng không cần chặn mọi hoạt động vận hành chờ một buổi review.
- **Handing the system over to a separate operations team that will manage it independently of the development team going forward.**: Ops riêng là lựa chọn tổ chức, không điều kiện bắt buộc hoặc xóa trách nhiệm dev.

**Tham khảo:**

- [Define success criteria and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q99 · single choice · — not answered

A teammate has asked how to extend Claude Code with a custom Skill that the team can invoke during sessions. 

The Skill consists of a set of instructions and a few support scripts the team wants Claude to be able to call when the Skill is loaded. 

Where is the right place to define the Skill?

- **A.** Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories soClaude has access to it on every session.
- ✅ **B.** Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories.
- **C.** Define the Skill in a personal scratch directory on each developer's machine and load it manually before eachClaude Code session that needs it.
- **D.** Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories.

Skill ở thư mục Claude Code nhận biết giúp discovery và load hướng dẫn/script theo phạm vi, tái sử dụng mà không chép vào mọi session.

#### Vì sao các phương án khác không phù hợp?

- **Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories soClaude has access to it on every session.**: Nhét dài trong mọi CLAUDE.md làm luôn tải nội dung không cần và khó bảo trì.
- **Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code.**: Library module là logic app, không cơ chế Skill được Claude Code tìm thấy.
- **Define the Skill in a personal scratch directory on each developer's machine and load it manually before eachClaude Code session that needs it.**: Scratch riêng không chuẩn hóa discovery hoặc chia sẻ project.

**Tham khảo:**

- [Claude Code skills](https://code.claude.com/docs/en/skills)

</details>


---

## Q100 · single choice · — not answered

The product team has described a new Claude feature in business terms: "agents should help our analysts produce client memos faster." 

You need to convert this into actionable technical requirements for the engineering team. 

Your first step would be to...

- ✅ **A.** Interpret the functional and infrastructure requirements implied by the business goal.
- **B.** Examine what model capabilities and tier options are available and determine which best supports the memo drafting workflow described by the product team.
- **C.** Assess what similar agent-based features have been built internally or in the industry and use those precedents to scope the technical approach.
- **D.** Ask the analysts about the current memo production process to see where they think Claude could be introduced as a prompt-driven drafting step.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Interpret the functional and infrastructure requirements implied by the business goal.

Chuyển mục tiêu viết memo nhanh hơn thành chức năng, dữ liệu vào/ra, tiêu chí chất lượng, phụ thuộc và ràng buộc hạ tầng trước khi chọn cách làm.

#### Vì sao các phương án khác không phù hợp?

- **Ask the analysts about the current memo production process to see where they think Claude could be introduced as a prompt-driven drafting step.**: Hỏi người dùng hữu ích nhưng phương án đã giả định trước giải pháp soạn thảo bằng prompt.
- **Assess what similar agent-based features have been built internally or in the industry and use those precedents to scope the technical approach.**: Tiền lệ không xác lập yêu cầu riêng của sản phẩm.
- **Examine what model capabilities and tier options are available and determine which best supports the memo drafting workflow described by the product team.**: Chọn model trước làm đảo ngược trình tự thiết kế theo yêu cầu.

**Tham khảo:**

- [www.anthropic.com — building-effective-agents](%5C%22https%3A//www.anthropic.com/research/building-effective-agents%5C%22)

</details>


---

## Q101 · single choice · — not answered

A Claude application is occasionally refusing to answer questions that should be in scope, including questions the application has answered correctly in the past. 

You want to investigate. 

What is the first step of your investigation?

- ✅ **A.** Identify which questions have been refused and compare them against previously answered questions to determine what changed between the successful and refused interactions.
- **B.** Test whether removing or adjusting those instructions resolves the behavior.
- **C.** Assess whether the refusals cluster around specific input patterns, question types, or time periods by analyzing the distribution of refused requests in the logs.
- **D.** Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Identify which questions have been refused and compare them against previously answered questions to determine what changed between the successful and refused interactions.

So sánh lượt bị từ chối với lượt thành công để tìm thay đổi ở đầu vào, hướng dẫn, model hoặc ngữ cảnh. Bằng chứng này giúp khoanh vùng trước khi sửa.

#### Vì sao các phương án khác không phù hợp?

- **Test whether removing or adjusting those instructions resolves the behavior.**: Sửa hướng dẫn chưa xác định là thay đổi trước khi tìm nguyên nhân.
- **Assess whether the refusals cluster around specific input patterns, question types, or time periods by analyzing the distribution of refused requests in the logs.**: Phân tích phân bố hữu ích nhưng chưa so trực tiếp các lượt thành công và thất bại đã biết.
- **Examine traces of the refused requests to identify what triggers the refusal, whether input patterns, system prompt content, or other context.**: Xem trace hữu ích; bước đầu được chọn thiết lập mốc so sánh cụ thể.

**Tham khảo:**

- [platform.claude.com — develop-tests](%5C%22https%3A//platform.claude.com/docs/en/test-and-evaluate/develop-tests%5C%22)

</details>


---

## Q102 · single choice · — not answered

You are designing an agent that handles a multi-step research task. 

You want the agent to break the task into smaller pieces, hand each piece to a focused subagent, and consolidate the results. 

The agent pattern you would apply is...

- ✅ **A.** An orchestrator and subagent pattern with specialized subagents assigned to each subtask.
- **B.** A context-window pruning pattern that drops each subtask's content after the agent moves on.
- **C.** A memory pattern that stores the entire research history in advance, before any subtask begins execution.
- **D.** A single tool-use loop that includes every tool the agent might need across all subtasks.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** An orchestrator and subagent pattern with specialized subagents assigned to each subtask.

Orchestrator chia task cho chuyên gia rồi tổng hợp findings, đúng mô tả nhiều phần nghiên cứu có trách nhiệm riêng.

#### Vì sao các phương án khác không phù hợp?

- **A memory pattern that stores the entire research history in advance, before any subtask begins execution.**: Lưu toàn history trước không thực hiện phân chia và điều phối.
- **A context-window pruning pattern that drops each subtask's content after the agent moves on.**: Pruning quản lý context, không phải pattern phân công subtask.
- **A single tool-use loop that includes every tool the agent might need across all subtasks.**: Một loop mọi tool không tạo chuyên gia có context và trách nhiệm tách biệt.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

</details>


---

## Q103 · single choice · — not answered

Your Claude application receives untrusted input from external sources. 

The team is establishing how the application should treat this untrusted input. 

Untrusted input would be...

- **A.** Routed through a separate Claude application with more lax security controls so the original application does not handle the untrusted input directly.
- ✅ **B.** Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions.
- **C.** Treated identically to trusted input from internal sources, on the grounds that all input the application receives can be handled the same way.
- **D.** Blocked entirely so the application accepts only trusted input, with no path for legitimate external input the application might process.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions.

Validate/sanitize và đặt external text ở vai trò dữ liệu giữ ranh giới tin cậy; cần kiểm soát tool/permission vì lọc text không bảo đảm hết injection.

#### Vì sao các phương án khác không phù hợp?

- **Treated identically to trusted input from internal sources, on the grounds that all input the application receives can be handled the same way.**: Nguồn ngoài không có cùng độ tin cậy instruction nội bộ.
- **Routed through a separate Claude application with more lax security controls so the original application does not handle the untrusted input directly.**: App có bảo vệ lỏng hơn tăng rủi ro thay vì cô lập an toàn.
- **Blocked entirely so the application accepts only trusted input, with no path for legitimate external input the application might process.**: Chặn mọi nguồn ngoài bỏ cả use case hợp lệ khi có thể kiểm soát boundary.

**Tham khảo:**

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

</details>


---

## Q104 · single choice · — not answered

Your Claude application's outputs are inconsistent in format. 

The team's instructions are scattered across the system prompt and user messages, with some instructions stated only once and others repeated. 

How would you fix the inconsistency?

- **A.** Repeat all instructions in both the system prompt and the user message so the model sees each instruction more than once.
- ✅ **B.** Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input.
- **C.** Place each instruction wherever the developer who first wrote it found most natural, retaining the original intent.
- **D.** Move all instructions into the user message so the application's behavior is controlled at the input point.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input.

System prompt tập trung rule hành vi/format, user message chứa input giúp giảm hướng dẫn mâu thuẫn và phân biệt dữ liệu với chính sách; vẫn validate schema khi app cần.

#### Vì sao các phương án khác không phù hợp?

- **Move all instructions into the user message so the application's behavior is controlled at the input point.**: Dồn rule vào user làm lẫn chính sách app với dữ liệu đầu vào.
- **Place each instruction wherever the developer who first wrote it found most natural, retaining the original intent.**: Giữ chỗ viết ngẫu nhiên duy trì chính sự phân tán gây lỗi.
- **Repeat all instructions in both the system prompt and the user message so the model sees each instruction more than once.**: Lặp mọi rule hai nơi làm tốn token và tăng khả năng lệch phiên bản.

**Tham khảo:**

- [Claude prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

</details>


---

## Q105 · single choice · — not answered

Your team uses Claude Code across multiple repositories. 

You want the team's rules and general coding standards to apply to all repositories, and other rules to apply only to specific repositories. 

The team is currently duplicating instructions across every repository's CLAUDE.md file. 

How would you address this?

- ✅ **A.** Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md.
- **B.** Stop using CLAUDE.md altogether and ask each developer to configure Claude Code manually for each project they work on.
- **C.** Use a single repository's CLAUDE.md as the central source of truth and link to it from every other repository'sCLAUDE.md file.
- **D.** Move all instructions to a separate documentation site that developers consult during Claude Code sessions across all repositories.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md.

Hierarchy CLAUDE.md đặt chuẩn chung ở phạm vi rộng, context project ở repo giúp tái sử dụng mà vẫn áp quy tắc đặc thù đúng nơi.

#### Vì sao các phương án khác không phù hợp?

- **Move all instructions to a separate documentation site that developers consult during Claude Code sessions across all repositories.**: Website ngoài không tự được load theo scope repository.
- **Stop using CLAUDE.md altogether and ask each developer to configure Claude Code manually for each project they work on.**: Tự cấu hình mỗi người làm mất nguồn chuẩn chia sẻ và review.
- **Use a single repository's CLAUDE.md as the central source of truth and link to it from every other repository'sCLAUDE.md file.**: Link repo trung tâm có thể tham khảo nhưng không tự bằng hierarchy được client nhận biết.

**Tham khảo:**

- [Claude Code memory hierarchy](https://code.claude.com/docs/en/memory)

</details>


---

## Q106 · single choice · — not answered

You are running Claude Code as part of an automated continuous integration pipeline. 

The pipeline needs Claude Code to execute a set of well-defined tasks without prompting for confirmation, and the output needs to be captured for downstream processing. 

How would you configure the pipeline?

- **A.** Disable Claude Code's confirmation prompts globally across all environments so the pipeline runs without interruption from any prompt.
- **B.** Run Claude Code in interactive mode and have a developer manually approve every confirmation prompt while the pipeline executes its tasks.
- **C.** Replace Claude Code with a different tool that does not require any configuration to operate without confirmation prompts in the pipeline.
- ✅ **D.** Run Claude Code in headless mode with the required permissions configured in settings.json and capture its output for downstream processing.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run Claude Code in headless mode with the required permissions configured in settings.json and capture its output for downstream processing.

Chế độ headless cùng quyền được cấu hình đúng phạm vi cho phép CI chạy không cần người duyệt và thu kết quả. Cần nạp đúng settings dự án; dùng định dạng máy đọc được khi cần.

#### Vì sao các phương án khác không phù hợp?

- **Disable Claude Code's confirmation prompts globally across all environments so the pipeline runs without interruption from any prompt.**: Tắt quyền xác nhận toàn cục làm ảnh hưởng các môi trường không liên quan.
- **Replace Claude Code with a different tool that does not require any configuration to operate without confirmation prompts in the pipeline.**: Đổi công cụ không giải quyết yêu cầu cấu hình đang có.
- **Run Claude Code in interactive mode and have a developer manually approve every confirmation prompt while the pipeline executes its tasks.**: Duyệt thủ công trái với CI chạy tự động.

**Tham khảo:**

- [code.claude.com — permissions](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/permissions%5C%22)

</details>


---

## Q107 · single choice · — not answered

A teammate has asked you to explain why the team's Claude application is billed for output tokens at a different rate than input tokens. 

They had assumed the rate was the same for both. How would you explain the difference?

- **A.** Output tokens are typically billed at the same rate as input tokens, and the apparent rate difference is a billing error to report to Anthropic.
- **B.** Output tokens are typically billed at a lower rate than input tokens, because output tokens are cheaper to produce than input tokens are to process.
- **C.** Output tokens are not billed at all, because cost is determined entirely by the input tokens sent to the model on each request.
- ✅ **D.** Output tokens are typically billed at a higher rate than input tokens, and cost models for the application should reflect both rates separately.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Output tokens are typically billed at a higher rate than input tokens, and cost models for the application should reflect both rates separately.

Tính riêng lượng token vào và ra nhân đơn giá tương ứng, rồi cộng lại. Token ra thường có giá cao hơn; cần dùng bảng giá của model thay vì giả định một đơn giá chung.

#### Vì sao các phương án khác không phù hợp?

- **Output tokens are typically billed at the same rate as input tokens, and the apparent rate difference is a billing error to report to Anthropic.**: Đơn giá khác nhau là cấu phần bảng giá, không tự chứng minh lỗi tính phí.
- **Output tokens are typically billed at a lower rate than input tokens, because output tokens are cheaper to produce than input tokens are to process.**: Token ra nhìn chung không rẻ hơn token vào.
- **Output tokens are not billed at all, because cost is determined entirely by the input tokens sent to the model on each request.**: Token sinh ra có được tính phí.

**Tham khảo:**

- [platform.claude.com — overview](%5C%22https%3A//platform.claude.com/docs/en/models/overview%5C%22)

</details>


---

## Q108 · single choice · — not answered

A small internal tool needs to read files, run shell commands, and search a codebase for a one-off refactor task using the Claude Agent SDK. 

No external systems or custom domain logic are involved. 

What is the most appropriate starting point?

- **A.** Connect an external MCP server that reimplements filesystem and shell access over a network protocol
- **B.** Write a Skill containing instructions for how to read files and run commands in place of built-in tools
- **C.** Build a custom tool for reading files and another for running shell commands before writing any code
- ✅ **D.** Use the SDK's built-in tools such as Read, Edit, Bash, Glob, and Grep without building any custom tools or MCP servers

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use the SDK's built-in tools such as Read, Edit, Bash, Glob, and Grep without building any custom tools or MCP servers

Bắt đầu bằng tool file, tìm kiếm và shell sẵn có vì đã đủ cho công việc. Chỉ thêm tích hợp riêng khi xuất hiện khả năng thực sự còn thiếu.

#### Vì sao các phương án khác không phù hợp?

- **Build a custom tool for reading files and another for running shell commands before writing any code**: Tự viết lại tool file và shell là lặp khả năng đã được hỗ trợ.
- **Connect an external MCP server that reimplements filesystem and shell access over a network protocol**: MCP từ xa thêm tầng mạng không cần cho việc cục bộ.
- **Write a Skill containing instructions for how to read files and run commands in place of built-in tools**: Hướng dẫn trong Skill không thay thế tool thực hiện thao tác.

**Tham khảo:**

- [code.claude.com — overview](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/overview%5C%22)

</details>


---

## Q109 · single choice · — not answered

A fintech startup is building an internal support agent with the Claude Agent SDK. 

The agent must look up account balances from a proprietary ledger service reachable only through an internal REST gateway with no existing MCP server or public SDK. 

Which approach best fits this requirement?

- **A.** Rely on the built-in WebFetch tool to query the gateway directly from the agent's prompt
- **B.** Write a Skill that documents the ledger schema and expects Claude to reason about balances from memory
- ✅ **C.** Define a custom tool that calls the internal REST gateway and register it through an in-process MCP server
- **D.** Search for a community MCP server that might expose a similar ledger balance capability

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define a custom tool that calls the internal REST gateway and register it through an in-process MCP server

Viết handler gọi REST có xác thực rồi cung cấp qua MCP server trong tiến trình. Model gọi tool đã định nghĩa; mã ứng dụng quản lý thông tin xác thực, kiểm tra dữ liệu và lỗi dịch vụ.

#### Vì sao các phương án khác không phù hợp?

- **Rely on the built-in WebFetch tool to query the gateway directly from the agent's prompt**: Lấy web chung chung không phải tích hợp sổ cái có xác thực theo nghiệp vụ.
- **Write a Skill that documents the ledger schema and expects Claude to reason about balances from memory**: Tài liệu không cung cấp số dư trực tiếp từ trí nhớ.
- **Search for a community MCP server that might expose a similar ledger balance capability**: Server cộng đồng tương tự chưa triển khai API thật của dịch vụ riêng này.

**Tham khảo:**

- [code.claude.com — custom-tools](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/custom-tools%5C%22)

</details>


---

## Q110 · single choice · — not answered

A team is building an automated agent using the Claude Agent SDK that runs unattended in a CI pipeline. 

It needs to run a fixed set of tools (`Read`, `Grep`, `Bash(npm test)`) without any human available to approve prompts, and any tool call outside that fixed set must be rejected outright rather than hang waiting for approval. 

Which configuration achieves this?

- **A.** Set `permission_mode` to `bypassPermissions` and omit `allowed_tools` entirely, since bypass mode already restricts execution to a minimal safe tool set by default.
- **B.** Set `permission_mode` to `default` and register a `canUseTool` callback that always throws an exception for tools outside the fixed set.
- ✅ **C.** Set `allowed_tools` to the fixed set and `permission_mode` to `dontAsk`; listed tools run, and every other call is denied without invoking `canUseTool`.
- **D.** Set `permission_mode` to `plan` and set `allowed_tools` to the fixed set, since plan mode auto-denies any tool call that is not explicitly pre-approved.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Set `allowed_tools` to the fixed set and `permission_mode` to `dontAsk`; listed tools run, and every other call is denied without invoking `canUseTool`.

Phương án gần nhất kết hợp lời gọi được duyệt trước với dontAsk để từ chối lời gọi cần hỏi. Tuy nhiên allowed_tools là danh sách duyệt quyền trước, không phải danh sách duy nhất tool được thấy: một số lời gọi ngoài danh sách vốn không cần hỏi vẫn có thể chạy. Vì vậy phương án này chưa bảo đảm tuyệt đối như đề yêu cầu. Cần giới hạn tool được cung cấp hoặc thêm kiểm tra deny rõ ràng để cưỡng chế tập cố định.

#### Vì sao các phương án khác không phù hợp?

- **Set `permission_mode` to `bypassPermissions` and omit `allowed_tools` entirely, since bypass mode already restricts execution to a minimal safe tool set by default.**: Bypass không tự giới hạn còn tập tool an toàn tối thiểu.
- **Set `permission_mode` to `plan` and set `allowed_tools` to the fixed set, since plan mode auto-denies any tool call that is not explicitly pre-approved.**: Plan mode không phải chính sách thực thi tập tool cố định để chạy test.
- **Set `permission_mode` to `default` and register a `canUseTool` callback that always throws an exception for tools outside the fixed set.**: Callback ném ngoại lệ không phải quyết định deny rõ ràng và không thay thế chính sách giới hạn tool xác định.

**Cần duyệt nội dung: không lựa chọn nào bảo đảm đầy đủ việc giới hạn tool tuyệt đối như đề đang viết.**

**Tham khảo:**

- [code.claude.com — permissions](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/permissions%5C%22)

</details>


---

## Q111 · single choice · — not answered

An engineer configuring a Claude Code hook wants it to fire for every Bash, Edit, and NotebookEdit tool call without listing each tool name explicitly. 

According to Anthropic's documentation on regex-based matchers, which configuration achieves this?

- **A.** Omitting the matcher field entirely, which causes the hook to fire only for tools with names longer than four characters, such as Bash and NotebookEdit.
- **B.** A matcher of `Bash+Edit+NotebookEdit`, where the plus sign acts as a concatenation operator, causing the pattern to be evaluated as a single exact-match string.
- **C.** A matcher of `Bash, Edit, NotebookEdit` with commas, which triggers regex evaluation, causing the pattern to match any tool name containing those substrings.
- ✅ **D.** A matcher like `Bash|Edit.*` is used; the system falls back to regex evaluation and matches any tool name containing those as substrings.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A matcher like `Bash|Edit.*` is used; the system falls back to regex evaluation and matches any tool name containing those as substrings.

Phép hoặc trong regex khớp Bash hoặc tên chứa Edit rồi đến hậu tố bất kỳ, nên bao gồm Edit và NotebookEdit theo cơ chế matcher được mô tả.

#### Vì sao các phương án khác không phù hợp?

- **A matcher of `Bash, Edit, NotebookEdit` with commas, which triggers regex evaluation, causing the pattern to match any tool name containing those substrings.**: Với sự kiện tool, dấu phẩy phân cách các tên tool khớp chính xác; không kích hoạt cách khớp chuỗi con bằng regex như mô tả. Cách này cũng liệt kê từng tool, trái yêu cầu của đề.
- **Omitting the matcher field entirely, which causes the hook to fire only for tools with names longer than four characters, such as Bash and NotebookEdit.**: Bỏ matcher không đặt điều kiện độ dài tên tool.
- **A matcher of `Bash+Edit+NotebookEdit`, where the plus sign acts as a concatenation operator, causing the pattern to be evaluated as a single exact-match string.**: Dấu cộng là lượng từ regex, không biểu thị danh sách tên thay thế.

**Tham khảo:**

- [code.claude.com — hooks](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/hooks%5C%22)
- [Tham khảo hooks — quy tắc matcher](%5C%22https%3A//code.claude.com/docs/en/hooks#matcher-patterns%5C%22)

</details>


---

## Q112 · pick 3 · — not answered

Which of the following statements about hook decision priority and configuration scope are accurate according to Anthropic's documentation? (Select 3)

- **A.** Async hook outputs can safely block, modify, or inject context into the operation as long as `asyncTimeout` is set high enough
- **B.** A hook matcher of `*` is functionally identical to an omitted matcher, since only `*` fully disables regex evaluation for that hook
- ✅ **C.** When multiple hooks return conflicting decisions, deny takes priority over defer, which takes priority over ask, which takes priority over allow
- ✅ **D.** Managed policy settings apply organization-wide and are admin-controlled, taking precedence in a way project-local settings cannot override
- ✅ **E.** `.claude/settings.local.json` is gitignored and intended for local-only configuration, not for sharing hooks with a team
- **F.** PostToolUse hooks can block a tool call before it executes, just like PreToolUse hooks

**Answer:** C, D, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** When multiple hooks return conflicting decisions, deny takes priority over defer, which takes priority over ask, which takes priority over allow; `.claude/settings.local.json` is gitignored and intended for local-only configuration, not for sharing hooks with a team; Managed policy settings apply organization-wide and are admin-controlled, taking precedence in a way project-local settings cannot override

Quyết định PreToolUse đồng bộ xung đột dùng thứ tự deny/defer/ask/allow được tài liệu nêu. Settings local dành cho cấu hình riêng trong dự án; settings managed thể hiện chính sách quản trị. Ba nhận định này mô tả ba quy tắc riêng về quyết định và phạm vi cấu hình.

#### Vì sao các phương án khác không phù hợp?

- **A hook matcher of `*` is functionally identical to an omitted matcher, since only `*` fully disables regex evaluation for that hook**: Bỏ matcher cũng có thể khớp mọi sự kiện phù hợp, nên nói chỉ wildcard mới bỏ lọc là sai.
- **PostToolUse hooks can block a tool call before it executes, just like PreToolUse hooks**: PostToolUse chạy sau thực thi, không chặn ngược lời gọi đã xong.
- **Async hook outputs can safely block, modify, or inject context into the operation as long as `asyncTimeout` is set high enough**: Đầu ra async không chặn, sửa hay chèn context vào thao tác đã đi tiếp.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [code.claude.com — hooks](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/hooks%5C%22)
- [code.claude.com — settings](%5C%22https%3A//code.claude.com/docs/en/settings%5C%22)

</details>


---

## Q113 · single choice · — not answered

A healthcare organization with a HIPAA-enabled Claude API organization sends a request that includes the code execution tool. 

The API responds with a 400 invalid_request_error stating the feature is not available for HIPAA-regulated organizations without Zero Data Retention. 

What is the most appropriate immediate remediation for this specific request?

- **A.** Switch the request to a different, unrelated organization ID without a BAA in place so the feature restriction no longer applies
- **B.** Ignore the error and resubmit the same request repeatedly, since HIPAA feature restrictions are only advisory warnings rather than enforced blocks
- ✅ **C.** Remove the code execution tool from the request and use only features listed as eligible for HIPAA readiness in the feature eligibility table
- **D.** Retry the identical request with a higher max_tokens value, since the error is caused by insufficient token budget for the tool call

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Remove the code execution tool from the request and use only features listed as eligible for HIPAA readiness in the feature eligibility table

Với lỗi đã nêu, bỏ tool không tương thích và chỉ dùng tính năng được cho phép theo cấu hình thực của tổ chức. Thông báo lỗi quyết định cách sửa request ngay lúc này, không phải ngân sách token; cần kiểm tra lại bảng điều kiện hiện hành trước triển khai.

#### Vì sao các phương án khác không phù hợp?

- **Retry the identical request with a higher max_tokens value, since the error is caused by insufficient token budget for the tool call**: Tăng token đầu ra không bật được tính năng chưa được phép.
- **Switch the request to a different, unrelated organization ID without a BAA in place so the feature restriction no longer applies**: Chuyển sang tổ chức không liên quan là né ràng buộc thay vì xử lý điều kiện.
- **Ignore the error and resubmit the same request repeatedly, since HIPAA feature restrictions are only advisory warnings rather than enforced blocks**: Gửi lại y nguyên nhiều lần không xóa chặn tính năng xác định.

**Tham khảo:**

- [platform.claude.com — api-and-data-retention](%5C%22https%3A//platform.claude.com/docs/en/manage-claude/api-and-data-retention%5C%22)

</details>


---

## Q114 · single choice · — not answered

Your Claude application processes 50-page legal contracts and produces summaries with citation references back to the source. 

The team is debating whether to send each contract whole or split into smaller pieces. 

The contracts fit within Claude's context window. 

Initial testing shows that whole- document processing produces summaries with stronger cross-section reasoning but occasionally drifts on citation accuracy in later sections. 

Chunked processing produces stronger citation accuracy per chunk but loses cross-section reasoning. 

The team has not decided which property matters more. 

How would you guide the team's decision?

- **A.** Examine the use cases where cross-section reasoning failures occur and assess whether whole-document processing meets the application's accuracy requirements across a representative sample of contracts.
- ✅ **B.** Identify which property matters more for the application's actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts.
- **C.** Review the citation accuracy results from chunked processing and determine whether the loss of cross-section reasoning produces summaries that still meet the application's quality bar.
- **D.** Assess the cost and latency implications of both approaches against the application's performance requirements before recommending which processing strategy to adopt.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Identify which property matters more for the application's actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts.

Chốt thuộc tính chất lượng quan trọng nhất với nghiệp vụ, rồi kiểm tra cả xử lý nguyên văn lẫn chia đoạn trên hợp đồng đại diện. Vừa context chưa đủ để quyết định đánh đổi.

#### Vì sao các phương án khác không phù hợp?

- **Assess the cost and latency implications of both approaches against the application's performance requirements before recommending which processing strategy to adopt.**: Chi phí và độ trễ chưa giải quyết ưu tiên chất lượng còn bỏ ngỏ.
- **Examine the use cases where cross-section reasoning failures occur and assess whether whole-document processing meets the application's accuracy requirements across a representative sample of contracts.**: Chỉ đánh giá suy luận nguyên văn làm lệch quyết định trước khi đặt mục tiêu.
- **Review the citation accuracy results from chunked processing and determine whether the loss of cross-section reasoning produces summaries that still meet the application's quality bar.**: Chỉ nhìn trích dẫn theo đoạn cũng chốt ưu tiên quá sớm.

**Tham khảo:**

- [www.anthropic.com — effective-context-engineering-for-ai-agents](%5C%22https%3A//www.anthropic.com/engineering/effective-context-engineering-for-ai-agents%5C%22)

</details>


---

## Q115 · single choice · — not answered

You are writing a system prompt for a Claude application that needs to produce output in a specific JSON shape. 

The downstream system will reject any output that does not match the schema. 

Your prompt would need to...

- **A.** Instruct Claude to return JSON sometimes and free text other times so the application's output captures both formats.
- **B.** Omit any reference to the format and rely on a post-processing step in the application to reshape Claude's output.
- **C.** Instruct Claude to use whichever output format it considers most appropriate for each request the application handles.
- ✅ **D.** Include explicit constraints describing the required JSON schema and an instruction to produce only output matching that schema.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Include explicit constraints describing the required JSON schema and an instruction to produce only output matching that schema.

Nêu rõ cấu trúc cần trả và không thêm lời dẫn ngoài JSON. Prompt sẽ bớt mơ hồ; vẫn cần structured output được hỗ trợ và kiểm tra schema trong ứng dụng.

#### Vì sao các phương án khác không phù hợp?

- **Instruct Claude to use whichever output format it considers most appropriate for each request the application handles.**: Để model tự chọn dạng trái với hợp đồng cố định.
- **Instruct Claude to return JSON sometimes and free text other times so the application's output captures both formats.**: Lúc JSON lúc văn bản không tạo giao diện nhất quán.
- **Omit any reference to the format and rely on a post-processing step in the application to reshape Claude's output.**: Không nêu định dạng khiến schema cần dùng không được chỉ rõ.

**Tham khảo:**

- [platform.claude.com — structured-outputs](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/structured-outputs%5C%22)

</details>


---

## Q116 · single choice · — not answered

You are building a Claude application that processes 10,000 customer emails overnight to extract structured data. 

The work is non-interactive, runs once daily, and has a flexible completion window of several hours. 

Which Claude API would you use?

- ✅ **A.** The Batch API, which is designed for non-interactive workloads with flexible completion windows.
- **B.** The real-time Messages API with concurrent requests to process the emails as fast as possible during the overnight window.
- **C.** The real-time Messages API, processing the emails one at a time sequentially to ensure consistent ordering of results.
- **D.** The streaming responses API to process each email and return partial results to a database as the model generates them.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The Batch API, which is designed for non-interactive workloads with flexible completion windows.

Công việc chấp nhận chờ hoàn tất bất đồng bộ nên Message Batches phù hợp hơn luồng tương tác. Gắn mã từng email và xử lý riêng kết quả cùng lỗi.

#### Vì sao các phương án khác không phù hợp?

- **The streaming responses API to process each email and return partial results to a database as the model generates them.**: Streaming phục vụ trả dần kết quả, không trực tiếp phục vụ nhu cầu chạy lô.
- **The real-time Messages API, processing the emails one at a time sequentially to ensure consistent ordering of results.**: Gọi đồng bộ tuần tự làm các việc độc lập phải chờ nhau.
- **The real-time Messages API with concurrent requests to process the emails as fast as possible during the overnight window.**: Gọi đồng bộ song song ưu tiên độ trễ mà bài toán không đòi hỏi.

**Tham khảo:**

- [platform.claude.com — batch-processing](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/batch-processing%5C%22)

</details>


---

## Q117 · single choice · — not answered

The team is debating whether to integrate with the Claude API directly or through a third-party abstraction layer that supports multiple LLM providers. 

The team has identified that all current and projected use cases run on Claude, no internal customer has requested LLM portability, and the team's product roadmap does not mention multi-provider support over the next two years. 

The third-party abstraction would add roughly 15 percent overhead in code complexity and introduce one additional dependency. 

Which integration approach would you recommend?

- **A.** A custom multi-provider abstraction layer the team builds in-house so that the team controls every part of the abstraction the application uses for its API calls.
- ✅ **B.** Direct integration with Claude through its SDK, because no multi-provider need exists and abstraction would add complexity that does not pay off.
- **C.** The third-party abstraction layer, on the grounds that multi-provider support is valuable for any application as a matter of long-term flexibility across vendors.
- **D.** Both integration paths in parallel, where the application uses each path on different runs to compare which performs better in production over time.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Direct integration with Claude through its SDK, because no multi-provider need exists and abstraction would add complexity that does not pay off.

Dùng SDK trực tiếp vì lộ trình thực tế chỉ cần Claude. Lớp trừu tượng nên phục vụ nhu cầu chuyển nhà cung cấp có thật, thay vì thêm phụ thuộc cho khả năng giả định.

#### Vì sao các phương án khác không phù hợp?

- **The third-party abstraction layer, on the grounds that multi-provider support is valuable for any application as a matter of long-term flexibility across vendors.**: Linh hoạt chung chung trong tương lai chưa bù cho việc không có nhu cầu hiện tại.
- **Both integration paths in parallel, where the application uses each path on different runs to compare which performs better in production over time.**: Duy trì hai đường tích hợp thêm việc khi không có yêu cầu so sánh.
- **A custom multi-provider abstraction layer the team builds in-house so that the team controls every part of the abstraction the application uses for its API calls.**: Tự viết lớp đa nhà cung cấp vẫn tạo lớp trừu tượng chưa cần.

**Tham khảo:**

- [code.claude.com — overview](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/overview%5C%22)

</details>


---

## Q118 · single choice · — not answered

You are implementing a custom tool for your Claude agent. 

The tool needs to interact with an external pricing service that returns product data. 

Which of the following best practices would you apply as you develop this tool?

- **A.** Define the tool with a loose schema and let the model interpret the inputs flexibly on each call the agent makes.
- ✅ **B.** Define the tool with a clear schema, write a precise description for when to call it, and handle pricing service errors explicitly.
- **C.** Omit the tool description and let the model infer when to use the tool based on the tool's name and the rest of the prompt context.
- **D.** Implement the tool with no error handling and let the agent loop catch failures whenever the pricing service returns an error during operation.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define the tool with a clear schema, write a precise description for when to call it, and handle pricing service errors explicitly.

Tool cần hợp đồng đầu vào tin cậy và mô tả khi nào nên gọi. Xử lý lỗi dịch vụ giá rõ ràng giúp phân biệt đầu vào sai, gián đoạn và kết quả hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **Omit the tool description and let the model infer when to use the tool based on the tool's name and the rest of the prompt context.**: Chỉ tên tool chưa mô tả điều kiện lựa chọn.
- **Define the tool with a loose schema and let the model interpret the inputs flexibly on each call the agent makes.**: Schema lỏng làm tăng tham số sai.
- **Implement the tool with no error handling and let the agent loop catch failures whenever the pricing service returns an error during operation.**: Bỏ xử lý lỗi ở handler khiến lỗi dịch vụ đi vào vòng lặp không kiểm soát.

**Tham khảo:**

- [platform.claude.com — define-tools](%5C%22https%3A//platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools%5C%22)

</details>


---

## Q119 · single choice · — not answered

Your Claude application has multi-step workflows where each step's output is needed only briefly before the agent moves on. 

The cumulative tool output is filling the context window with content that is no longer relevant. 

How would you handle the accumulating tool output?

- **A.** Apply prompt caching to the accumulated tool outputs so the application does not re-pay for the older content on each subsequent step.
- **B.** Switch to a smaller Claude model that processes context more efficiently and treat any quality loss as a tradeoff for the cost reduction.
- **C.** Keep every tool output in the context indefinitely so the agent has the full record of every step it has executed during the workflow.
- ✅ **D.** Apply tool output pruning to remove tool outputs that are no longer needed by later steps in the workflow.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply tool output pruning to remove tool outputs that are no longer needed by later steps in the workflow.

Bỏ kết quả tool khi các bước sau không còn cần, đồng thời giữ quyết định và tham chiếu hữu ích. Cách này giảm context đang chiếm chỗ thay vì chỉ đổi giá.

#### Vì sao các phương án khác không phù hợp?

- **Apply prompt caching to the accumulated tool outputs so the application does not re-pay for the older content on each subsequent step.**: Cache giảm chi phí xử lý lặp nhưng không bỏ ngữ cảnh cũ.
- **Switch to a smaller Claude model that processes context more efficiently and treat any quality loss as a tradeoff for the cost reduction.**: Model nhỏ hơn không tự xóa kết quả đã hết cần.
- **Keep every tool output in the context indefinitely so the agent has the full record of every step it has executed during the workflow.**: Giữ mọi kết quả chính là nguyên nhân gây áp lực context.

**Tham khảo:**

- [platform.claude.com — context-editing](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/context-editing%5C%22)

</details>


---

## Q120 · single choice · — not answered

A Claude application that worked well in testing is now occasionally returning outputs that mention information not present in the input. 

The development team initially assumed the model was hallucinating, so they asked you to troubleshoot. 

What would you do first?

- **A.** Add a system prompt instruction telling the model not to invent information, on the grounds that prompt-level instructions are the fastest fix for hallucination concerns.
- **B.** Apply a retrieval-augmented generation pattern to ground the responses in source content before any further investigation of the production traces.
- **C.** Replace the current model with a larger one to reduce the chance of hallucination, on the grounds that larger models tend to hallucinate less in typical applications.
- ✅ **D.** Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix.

Đọc request thực tế, dữ liệu truy xuất, kết quả tool và đầu ra trước khi gọi hiện tượng này là ảo giác. Mỗi nguyên nhân cần cách sửa riêng.

#### Vì sao các phương án khác không phù hợp?

- **Replace the current model with a larger one to reduce the chance of hallucination, on the grounds that larger models tend to hallucinate less in typical applications.**: Đổi model là suy đoán khi chưa chẩn đoán.
- **Apply a retrieval-augmented generation pattern to ground the responses in source content before any further investigation of the production traces.**: Truy xuất có thể giúp bám nguồn nhưng không sửa mọi dạng lỗi.
- **Add a system prompt instruction telling the model not to invent information, on the grounds that prompt-level instructions are the fastest fix for hallucination concerns.**: Thêm hướng dẫn là giả định nguyên nhân khi chưa xem bằng chứng.

**Tham khảo:**

- [platform.claude.com — develop-tests](%5C%22https%3A//platform.claude.com/docs/en/test-and-evaluate/develop-tests%5C%22)

</details>


---

## Q121 · single choice · — not answered

Your team's Claude application has been in production for a year, and the team has decided to formalize its testing strategy. 

Currently, the team writes ad-hoc tests for individual features but has no overall testing approach. 

What testing approach would you formalize?

- ✅ **A.** Define unit tests for individual functions, integration tests for the Claude integration, and end-to-end tests for critical user flows, applied consistently across the codebase.
- **B.** Define a single testing approach that uses end-to-end tests and apply it consistently across all new features as they are added to the codebase.
- **C.** Continue writing ad-hoc tests as features ship and introduce a peer review step to ensure each test adequately covers the feature being released.
- **D.** Adopt a test-driven development practice where unit tests are written before each feature is implemented and must pass before code is merged.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define unit tests for individual functions, integration tests for the Claude integration, and end-to-end tests for critical user flows, applied consistently across the codebase.

Dùng unit test cho logic cục bộ, integration test cho điểm tích hợp và kiểm tra đầu cuối cho luồng quan trọng. Mỗi lớp bắt một nhóm lỗi khác nhau.

#### Vì sao các phương án khác không phù hợp?

- **Adopt a test-driven development practice where unit tests are written before each feature is implemented and must pass before code is merged.**: Viết test trước chưa tự xác lập độ phủ các tầng.
- **Continue writing ad-hoc tests as features ship and introduce a peer review step to ensure each test adequately covers the feature being released.**: Review test tùy hứng vẫn thiếu chiến lược chung.
- **Define a single testing approach that uses end-to-end tests and apply it consistently across all new features as they are added to the codebase.**: Chỉ test đầu cuối thường chậm và khó cô lập lỗi nhỏ.

**Tham khảo:**

- [testing.googleblog.com — just-say-no-to-more-end-to-end-tests.html](%5C%22https%3A//testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html%5C%22)

</details>


---

## Q122 · single choice · — not answered

A teammate has asked you to explain the difference between context engineering and prompt engineering. 

They have heard the terms used interchangeably and are unsure how each applies to a Claude application that processes long-running multi-step tasks. 

How would you describe the distinction?

- **A.** Prompt engineering focuses on the model's response, while context engineering focuses on the user's input across many sessions in a long-running multi-step Claude application.
- ✅ **B.** Prompt engineering shapes individual prompts for specific outputs, while context engineering manages how content flows across turns and steps and takes steps to keep relevant state visible.
- **C.** Prompt engineering and context engineering each address content the team gives Claude, but the team can group them under a single workflow because the practices use overlapping techniques.
- **D.** Prompt engineering is the older term for prompt design, while context engineering is the newer term that has replaced it in modern Claude applications across the industry.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Prompt engineering shapes individual prompts for specific outputs, while context engineering manages how content flows across turns and steps and takes steps to keep relevant state visible.

Prompt engineering thiết kế chỉ dẫn cho từng tương tác; context engineering chọn, giữ và chuyển thông tin cần dùng xuyên suốt quy trình.

#### Vì sao các phương án khác không phù hợp?

- **Prompt engineering focuses on the model's response, while context engineering focuses on the user's input across many sessions in a long-running multi-step Claude application.**: Context engineering gồm kết quả tool và trạng thái, không chỉ đầu vào người dùng.
- **Prompt engineering is the older term for prompt design, while context engineering is the newer term that has replaced it in modern Claude applications across the industry.**: Khái niệm mới không đơn giản thay thế khái niệm cũ.
- **Prompt engineering and context engineering each address content the team gives Claude, but the team can group them under a single workflow because the practices use overlapping techniques.**: Có kỹ thuật giao nhau không có nghĩa phạm vi giống nhau.

**Tham khảo:**

- [www.anthropic.com — effective-context-engineering-for-ai-agents](%5C%22https%3A//www.anthropic.com/engineering/effective-context-engineering-for-ai-agents%5C%22)

</details>


---

## Q123 · single choice · — not answered

The team is debating whether to build a new capability as a custom tool or to use an existing built-in tool that nearly covers the use case but lacks one specific feature. 

How would you decide?

- **A.** Examine the custom tool option by scoping the implementation effort and determining whether the additional flexibility justifies the development and maintenance cost.
- **B.** Review the built-in tool's documentation and assess whether its existing capabilities are sufficient to cover the use case without any modification or extension.
- **C.** Identify whether the team has previously built similar custom tools and use those precedents to determine which approach is more consistent with the existing codebase.
- ✅ **D.** Evaluate whether the missing feature can be addressed by extending the built-in tool or warrants a custom tool, then choose accordingly.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Evaluate whether the missing feature can be addressed by extending the built-in tool or warrants a custom tool, then choose accordingly.

Đánh giá phần còn thiếu và khả năng mở rộng được hỗ trợ để bù phần đó. Chỉ viết tool riêng khi lợi ích đủ bù chi phí xây dựng và duy trì.

#### Vì sao các phương án khác không phù hợp?

- **Identify whether the team has previously built similar custom tools and use those precedents to determine which approach is more consistent with the existing codebase.**: Tiền lệ có thể tham khảo nhưng chưa quyết định mức cần thiết của phần thiếu.
- **Examine the custom tool option by scoping the implementation effort and determining whether the additional flexibility justifies the development and maintenance cost.**: Chỉ tính phương án tự viết là bỏ qua tool sẵn có.
- **Review the built-in tool's documentation and assess whether its existing capabilities are sufficient to cover the use case without any modification or extension.**: Chỉ đọc tính năng hiện có bỏ qua mở rộng và phương án tool riêng.

**Tham khảo:**

- [code.claude.com — overview](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/overview%5C%22)

</details>


---

## Q124 · single choice · — not answered

Your Claude application returns confident-sounding answers, but occasionally those answers contain factual errors that downstream systems treat as ground truth. 

The team is concerned about the application's confidence-versus-accuracy gap. 

How would you address the gap?

- **A.** Lower the model's temperature so the model's responses sound less confident and downstream systems are less likely to treat the responses as ground truth in normal operation.
- ✅ **B.** Apply skepticism toward confident output by adding validation steps, sourcing requirements, or confidence calibration before treating outputs as ground truth.
- **C.** Add a disclaimer to every output telling users to verify the accuracy of the output and treat the disclaimer as the primary mechanism for managing the confidence-versus-accuracy gap.
- **D.** Reject every response the application produces until a manual accuracy review is conducted on each response by a human reviewer before any downstream system uses it.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply skepticism toward confident output by adding validation steps, sourcing requirements, or confidence calibration before treating outputs as ground truth.

Không coi diễn đạt trôi chảy và tự tin là bằng chứng đúng. Đối chiếu phát biểu quan trọng với nguồn hoặc quy tắc kiểm tra; hiệu chuẩn luồng theo confidence bằng kết quả có nhãn.

#### Vì sao các phương án khác không phù hợp?

- **Lower the model's temperature so the model's responses sound less confident and downstream systems are less likely to treat the responses as ground truth in normal operation.**: Temperature không kiểm chứng dữ kiện hay bảo đảm confidence được hiệu chuẩn.
- **Reject every response the application produces until a manual accuracy review is conducted on each response by a human reviewer before any downstream system uses it.**: Từ chối mọi đầu ra là quá rộng và mất tính hữu dụng.
- **Add a disclaimer to every output telling users to verify the accuracy of the output and treat the disclaimer as the primary mechanism for managing the confidence-versus-accuracy gap.**: Lời cảnh báo không ngăn hệ thống sau nhận dữ kiện sai.

**Tham khảo:**

- [platform.claude.com — develop-tests](%5C%22https%3A//platform.claude.com/docs/en/test-and-evaluate/develop-tests%5C%22)

</details>


---

## Q125 · single choice · — not answered

You are designing an agent that processes vendor invoices. 

The work involves a small number of well- understood steps, but occasionally an invoice arrives in an unexpected format that requires the system to decide between rerouting, requesting clarification, or flagging for human review. 

The most appropriate architecture for this system is...

- **A.** A fully autonomous agent that handles every invoice from start to finish across all formats.
- **B.** A single large prompt that processes every incoming invoice, both standard and unexpected, in one model call.
- ✅ **C.** A workflow for the standard path with an agent invoked at the decision point for unexpected formats.
- **D.** A manager agent that delegates each step of standard invoice processing to a dedicated subagent, with a separate subagent handling each unexpected format.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A workflow for the standard path with an agent invoked at the decision point for unexpected formats.

Giữ đường xử lý hóa đơn chuẩn trong workflow và dùng agent tại ngoại lệ cần lựa chọn. Nhờ vậy tính linh hoạt tập trung đúng nơi cần.

#### Vì sao các phương án khác không phù hợp?

- **A fully autonomous agent that handles every invoice from start to finish across all formats.**: Tự trị toàn bộ là không cần cho luồng thông thường đã rõ.
- **A manager agent that delegates each step of standard invoice processing to a dedicated subagent, with a separate subagent handling each unexpected format.**: Mỗi bước chuẩn một subagent làm tăng điều phối.
- **A single large prompt that processes every incoming invoice, both standard and unexpected, in one model call.**: Một prompt lớn không tạo luồng chuẩn và rẽ nhánh ngoại lệ rõ ràng.

**Tham khảo:**

- [www.anthropic.com — building-effective-agents](%5C%22https%3A//www.anthropic.com/research/building-effective-agents%5C%22)

</details>


---

## Q126 · single choice · — not answered

A teammate has asked you to explain when a Skill would be the right choice over an MCP server. 

The teammate is unsure how the two differ in practice when both can be reused across teams. 

How would you explain the distinction?

- **A.** A Skill and an MCP server are equivalent extension mechanisms that the team can use interchangeably for any reusable capability that needs to be accessible across teams.
- **B.** A Skill is the older mechanism and an MCP server is the newer one, so the team should prefer an MCP server for any reusable capability that the team builds going forward.
- ✅ **C.** A Skill bundles prompts, scripts, and data into a package the model loads as a unit while an MCP server exposes resources, tools, and prompts through a standard client interface.
- **D.** A Skill is preferable for cross-team reuse because it loads more efficiently than an MCP server during normal operation in the team's typical multi-team workloads.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A Skill bundles prompts, scripts, and data into a package the model loads as a unit while an MCP server exposes resources, tools, and prompts through a standard client interface.

Skill đóng gói hướng dẫn thao tác cùng tài nguyên hỗ trợ; MCP server cung cấp khả năng gọi qua giao thức. Chọn theo thứ cần tái sử dụng và cách bên khác sử dụng nó.

#### Vì sao các phương án khác không phù hợp?

- **A Skill and an MCP server are equivalent extension mechanisms that the team can use interchangeably for any reusable capability that needs to be accessible across teams.**: Hai cơ chế có vai trò khác nhau, không thể thay thế tùy ý.
- **A Skill is the older mechanism and an MCP server is the newer one, so the team should prefer an MCP server for any reusable capability that the team builds going forward.**: Cũ hay mới không quyết định cơ chế mở rộng.
- **A Skill is preferable for cross-team reuse because it loads more efficiently than an MCP server during normal operation in the team's typical multi-team workloads.**: Lợi thế hiệu suất tuyệt đối không phải khác biệt bản chất được hỏi.

**Tham khảo:**

- [code.claude.com — skills](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/skills%5C%22)
- [modelcontextprotocol.io — server-concepts](%5C%22https%3A//modelcontextprotocol.io/docs/learn/server-concepts%5C%22)

</details>


---

## Q127 · single choice · — not answered

Your team is choosing how to add a capability to a Claude application. 

You want to apply the appropriate option, whether built-in tool, custom tool, Skill, or MCP server, based on the use case. 

You would choose the option that...

- **A.** Is the easiest to build given the team's current development tools and workflows.
- **B.** Is the most familiar to the team based on prior experience with similar capabilities.
- **C.** Is the newest available option among built-in tools, custom tools, Skills, and MCP servers.
- ✅ **D.** Matches the use case's scope, reuse needs, and integration context.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Matches the use case's scope, reuse needs, and integration context.

Chọn cơ chế mở rộng vừa đủ đáp ứng khả năng và nhu cầu chia sẻ thực tế. Ranh giới tích hợp giúp quyết định tool sẵn có, handler riêng, Skill hay MCP server phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Is the most familiar to the team based on prior experience with similar capabilities.**: Quen thuộc chỉ là yếu tố phụ và có thể dẫn tới giao diện không phù hợp.
- **Is the newest available option among built-in tools, custom tools, Skills, and MCP servers.**: Mới hơn chưa chứng minh phù hợp hơn.
- **Is the easiest to build given the team's current development tools and workflows.**: Dễ xây chưa bảo đảm đáp ứng tái sử dụng và tích hợp.

**Tham khảo:**

- [code.claude.com — overview](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/overview%5C%22)

</details>


---

## Q128 · single choice · — not answered

A code-review agent needs to read through 40 files, but the team wants the main conversation to stay short so later turns aren't paying for tokens spent on every file that was opened during the review. 

Which architecture keeps the main agent's context lean?

- ✅ **A.** Delegate the review to a subagent defined with an AgentDefinition; its tool calls and file contents stay in its own context, and only a final summary returns to the parent.
- **B.** Enable include_partial_messages so file contents stream back to the main conversation incrementally as text deltas instead of arriving all at once.
- **C.** Increase max_turns on the main query so Claude has enough budget to read all 40 files directly in the main conversation without the loop stopping early.
- **D.** Set effort to "low" on the main query so each turn that reads a file consumes fewer reasoning tokens, even though all 40 files still load fully into the shared main conversation.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delegate the review to a subagent defined with an AgentDefinition; its tool calls and file contents stay in its own context, and only a final summary returns to the parent.

Cho việc review file một context riêng, rồi trả kết quả ngắn về agent chính. Các lượt đọc trung gian không đi vào lịch sử hội thoại tiếp diễn của agent chính.

#### Vì sao các phương án khác không phù hợp?

- **Increase max_turns on the main query so Claude has enough budget to read all 40 files directly in the main conversation without the loop stopping early.**: Tăng số lượt cho phép làm nhiều hơn nhưng không tách context.
- **Set effort to \"low\" on the main query so each turn that reads a file consumes fewer reasoning tokens, even though all 40 files still load fully into the shared main conversation.**: Effort thấp đổi mức suy luận, không giảm văn bản file đã nạp.
- **Enable include_partial_messages so file contents stream back to the main conversation incrementally as text deltas instead of arriving all at once.**: Trả message từng phần đổi cách truyền, không đổi nơi giữ context.

**Tham khảo:**

- [code.claude.com — subagents](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/subagents%5C%22)

</details>


---

## Q129 · single choice · — not answered

A long-running agent session is approaching its context window limit. 

The team wants two things: a full, unabridged copy of the conversation saved before the SDK summarizes older history, and a guarantee that a specific formatting rule survives every compaction event without being paraphrased away. 

Which combination of mechanisms addresses both needs?

- **A.** Register a PostToolUse hook to archive the transcript after each tool call completes, and place the formatting rule inside a subagent's AgentDefinition prompt instead of the main session.
- **B.** Increase max_turns so compaction never triggers, and repeat the formatting rule at the start of every single user message sent throughout the session.
- **C.** Rely on the automatic compaction summary alone to preserve both the transcript and the formatting rule, since summaries are designed to retain conversation details verbatim.
- ✅ **D.** Register a PreCompact hook to archive the full transcript first, and put the formatting rule in CLAUDE.md so it reloads on every request instead of living only in the initial prompt.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Register a PreCompact hook to archive the full transcript first, and put the formatting rule in CLAUDE.md so it reloads on every request instead of living only in the initial prompt.

Lưu transcript gốc ở PreCompact trước khi tóm tắt. Đặt quy tắc bền vững trong CLAUDE.md và bảo đảm SDK nạp nguồn cấu hình đó; bản tóm tắt không phải bản lưu nguyên văn.

#### Vì sao các phương án khác không phù hợp?

- **Increase max_turns so compaction never triggers, and repeat the formatting rule at the start of every single user message sent throughout the session.**: Giới hạn số lượt không vô hiệu nén theo dung lượng context.
- **Rely on the automatic compaction summary alone to preserve both the transcript and the formatting rule, since summaries are designed to retain conversation details verbatim.**: Tóm tắt có mất thông tin không bảo đảm transcript nguyên bản hay đúng từng chữ.
- **Register a PostToolUse hook to archive the transcript after each tool call completes, and place the formatting rule inside a subagent's AgentDefinition prompt instead of the main session.**: Hook sau tool và quy tắc chỉ cho subagent không đáp ứng cả hai yêu cầu của phiên chính.

**Tham khảo:**

- [code.claude.com — hooks](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/hooks%5C%22)

</details>


---

## Q130 · pick 2 · — not answered

A software architect is comparing three open-source agent frameworks for a project that requires integration with multiple LLM providers and end-to-end observability via OpenTelemetry. 

The project's agent logic is linear and does not require the manual specification of execution graphs. 

The frameworks under consideration are Strands Agents SDK, LangGraph, and Pydantic AI. 

Based on your knowledge of these frameworks, which of the following statements are true? (Select all that apply.)

- **A.** LangGraph is best suited for simple, linear agent chains because its graph model restricts the developer to a single execution path.
- **B.** Strands Agents SDK enforces that all agents are deployed on AWS and does not permit the use of third-party model APIs.
- ✅ **C.** LangGraph models agent workflows as directed graphs, giving developers precise control over branching and looping in execution paths.
- ✅ **D.** The Strands Agents SDK is designed to be model-agnostic and includes first-class support for OpenTelemetry, allowing trace export to observability platforms like AWS CloudWatch.
- **E.** Pydantic AI includes a built-in OpenTelemetry collector that can be configured to send traces to CloudWatch out of the box.
- **F.** LangGraph can only orchestrate agents that use the Anthropic API because it was developed by Anthropic.

**Answer:** C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The Strands Agents SDK is designed to be model-agnostic and includes first-class support for OpenTelemetry, allowing trace export to observability platforms like AWS CloudWatch.; LangGraph models agent workflows as directed graphs, giving developers precise control over branching and looping in execution paths.

Strands hỗ trợ nhiều nhà cung cấp model và đo lường bằng OpenTelemetry. LangGraph biểu diễn luồng có trạng thái bằng nút và cạnh, gồm cả rẽ nhánh và lặp. Cả hai nhận định đúng dù dự án tuyến tính không cần kiểm soát đồ thị.

#### Vì sao các phương án khác không phù hợp?

- **LangGraph can only orchestrate agents that use the Anthropic API because it was developed by Anthropic.**: LangGraph thuộc hệ sinh thái LangChain và không bị giới hạn ở Anthropic.
- **Pydantic AI includes a built-in OpenTelemetry collector that can be configured to send traces to CloudWatch out of the box.**: Tích hợp OpenTelemetry/Logfire không đồng nghĩa có sẵn collector được cấu hình cho CloudWatch.
- **Strands Agents SDK enforces that all agents are deployed on AWS and does not permit the use of third-party model APIs.**: Strands không bắt buộc chỉ chạy trên AWS hoặc chỉ dùng model AWS.
- **LangGraph is best suited for simple, linear agent chains because its graph model restricts the developer to a single execution path.**: Đồ thị hỗ trợ nhiều nhánh và vòng lặp, không chỉ một đường.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [aws.amazon.com — strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability](%5C%22https%3A//aws.amazon.com/blogs/machine-learning/strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability/%5C%22)
- [strandsagents.com — model-providers](%5C%22https%3A//strandsagents.com/latest/documentation/docs/user-guide/concepts/model-providers/%5C%22)
- [strandsagents.com — observability](%5C%22https%3A//strandsagents.com/latest/documentation/docs/user-guide/observability-evaluation/observability/%5C%22)
- [docs.langchain.com — overview](%5C%22https%3A//docs.langchain.com/oss/python/langgraph/overview%5C%22)
- [pydantic.dev — logfire](%5C%22https%3A//pydantic.dev/docs/ai/integrations/logfire/%5C%22)

</details>


---

## Q131 · single choice · — not answered

A team wants higher-confidence answers from a fraud-detection prompt applied to a transaction description. 

Rather than reviewing different angles, they run the exact same prompt against the same transaction five times and keep whichever verdict -- fraudulent or legitimate -- appears most often across the five runs. 

Which pattern are they using?

- **A.** Parallelization by sectioning, where five different prompts each examine a distinct aspect of the same transaction independently.
- **B.** Evaluator-optimizer, where a second LLM call critiques the first verdict and the prompt is revised until the criteria are satisfied.
- **C.** Prompt chaining, where each of the five runs consumes the verdict produced by the run immediately before it.
- ✅ **D.** Parallelization by voting, where the identical task runs multiple times and the majority verdict is selected.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Parallelization by voting, where the identical task runs multiple times and the majority verdict is selected.

Chạy độc lập cùng một tác vụ nhiều lần rồi lấy kết quả đa số là voting. Không có chia thành góc nhìn khác nhau hay truyền kết quả theo chuỗi.

#### Vì sao các phương án khác không phù hợp?

- **Parallelization by sectioning, where five different prompts each examine a distinct aspect of the same transaction independently.**: Sectioning chia các khía cạnh khác nhau thay vì lặp cùng việc.
- **Evaluator-optimizer, where a second LLM call critiques the first verdict and the prompt is revised until the criteria are satisfied.**: Evaluator-optimizer cần bước phê bình và cải tiến.
- **Prompt chaining, where each of the five runs consumes the verdict produced by the run immediately before it.**: Chaining truyền đầu ra bước trước cho bước sau.

**Tham khảo:**

- [www.anthropic.com — building-effective-agents](%5C%22https%3A//www.anthropic.com/research/building-effective-agents%5C%22)

</details>


---

## Q132 · single choice · — not answered

A support-ticket pipeline runs a simple sentiment classification step on every incoming ticket before the main conversation continues with more complex reasoning. 

This classification happens far more often than any other step and doesn't need the team's most capable model. 

How should the team reduce cost for this specific step?

- **A.** Convert the pipeline into an agent team, since every teammate in an agent team automatically defaults to the cheapest available model.
- **B.** Run the classification step in the main conversation using the same model as the rest of the pipeline, since subagents cannot be configured with a different model than their caller.
- **C.** Convert the classification step into an evaluator-optimizer loop, since that pattern always uses a cheaper model for the evaluator half of the loop.
- ✅ **D.** Route the classification step to a dedicated subagent configured to use a faster, cheaper model, since subagents can be assigned their own model independent of the main conversation.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Route the classification step to a dedicated subagent configured to use a faster, cheaper model, since subagents can be assigned their own model independent of the main conversation.

Bộ phân loại riêng có thể dùng model rẻ hơn trong khi agent chính giữ model cho suy luận khó. Cần kiểm tra chất lượng phân loại trước khi chuyển tải thực tế.

#### Vì sao các phương án khác không phù hợp?

- **Run the classification step in the main conversation using the same model as the rest of the pipeline, since subagents cannot be configured with a different model than their caller.**: Subagent có thể chọn model riêng, không bắt buộc dùng model đắt của agent chính.
- **Convert the classification step into an evaluator-optimizer loop, since that pattern always uses a cheaper model for the evaluator half of the loop.**: Mẫu evaluator-optimizer không bảo đảm evaluator rẻ hơn.
- **Convert the pipeline into an agent team, since every teammate in an agent team automatically defaults to the cheapest available model.**: Thành viên nhóm agent không tự động chọn model rẻ nhất.

**Tham khảo:**

- [code.claude.com — subagents](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/subagents%5C%22)

</details>


---

## Q133 · pick 2 · — not answered

A long-running autonomous agent conversation regularly approaches the model's context window limit. 

The architecture needs the platform to automatically summarize earlier parts of the conversation server-side, and to clear out stale tool results as the token limit approaches, without the client managing this manually. 

Which two features should the architecture enable?

- **A.** Batch processing
- **B.** Prompt caching
- ✅ **C.** Context editing
- ✅ **D.** Compaction
- **E.** Token counting
- **F.** Files API

**Answer:** C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Compaction; Context editing

Compaction tóm tắt phần hội thoại cũ. Context editing có thể bỏ kết quả tool hết cần theo chính sách cấu hình. Đề yêu cầu cả hai cơ chế quản lý context.

#### Vì sao các phương án khác không phù hợp?

- **Prompt caching**: Cache tái sử dụng tiền tố nhưng không bỏ phần context đó.
- **Token counting**: Đếm token chỉ đo, không tóm tắt hoặc xóa nội dung.
- **Batch processing**: Batch lập lịch request độc lập, không quản lý hội thoại đang chạy.
- **Files API**: Files API lưu file, không đặt chính sách cắt context hội thoại.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [platform.claude.com — compaction](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/compaction%5C%22)
- [platform.claude.com — context-editing](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/context-editing%5C%22)

</details>


---

## Q134 · single choice · — not answered

An agent built with the Claude Agent SDK reads an authentication module in one query call, and the team wants a second, later query call to reference 'it' meaning that same module without re-reading or re-explaining context. 

What should they capture and reuse from the first call to accomplish this?

- **A.** Capture the tool_use_id from the first query's Read tool call and pass it as the model parameter on the second query call.
- **B.** Capture the file contents read during the first query and hardcode them into the system prompt used for the second query call.
- **C.** Capture the full text of every message from the first query and re-send it as the prompt string prefix on the second query call.
- ✅ **D.** Capture the session_id from the SystemMessage of type 'init' during the first query, then pass it as the resume option on the second query call.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Capture the session_id from the SystemMessage of type 'init' during the first query, then pass it as the resume option on the second query call.

Lấy mã phiên lúc khởi tạo và dùng resume cho query sau. Lịch sử của phiên cung cấp đối tượng được nhắc tới, điều mà phiên độc lập mới chưa biết.

#### Vì sao các phương án khác không phù hợp?

- **Capture the full text of every message from the first query and re-send it as the prompt string prefix on the second query call.**: Tự ghép lại mọi văn bản là quản lý lịch sử thủ công thay vì dùng API phiên.
- **Capture the file contents read during the first query and hardcode them into the system prompt used for the second query call.**: Chép cứng file có thể lỗi thời và không khôi phục hội thoại.
- **Capture the tool_use_id from the first query's Read tool call and pass it as the model parameter on the second query call.**: Mã lượt gọi tool không phải mã phiên hay tên model.

**Tham khảo:**

- [code.claude.com — sessions](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/sessions%5C%22)

</details>


---

## Q135 · single choice · — not answered

An engineer building an SDLC automation wants an agent to run git status, stage changes, and commit them as part of a scripted workflow, in addition to reading and editing source files. 

Which built-in Agent SDK tool grants this ability to run version-control commands directly?

- ✅ **A.** Bash, which runs terminal commands and scripts, including git operations, in addition to other shell tasks
- **B.** AskUserQuestion, which prompts the user with clarifying multiple-choice questions rather than executing shell commands
- **C.** WebFetch, which retrieves and parses web page content and cannot execute local version-control commands
- **D.** Grep, which searches file contents with regex and has no ability to invoke external commands like git

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Bash, which runs terminal commands and scripts, including git operations, in addition to other shell tasks

Bash chạy lệnh shell, gồm các lệnh git trong yêu cầu, tùy quyền agent được cấp. Tool tìm kiếm và truy xuất không thực thi lệnh quản lý phiên bản cục bộ.

#### Vì sao các phương án khác không phù hợp?

- **Grep, which searches file contents with regex and has no ability to invoke external commands like git**: Grep tìm văn bản, không chạy git.
- **WebFetch, which retrieves and parses web page content and cannot execute local version-control commands**: WebFetch lấy nội dung web, không chạy lệnh máy cục bộ.
- **AskUserQuestion, which prompts the user with clarifying multiple-choice questions rather than executing shell commands**: AskUserQuestion lấy lựa chọn từ người dùng, không thực thi shell.

**Tham khảo:**

- [code.claude.com — overview](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/overview%5C%22)

</details>


---

## Q136 · single choice · — not answered

A batch-processing service runs thousands of independent, single-shot document classification tasks per hour using the Agent SDK. 

Each task is unrelated to the others, must never be resumable later, and the team wants to avoid unnecessary disk writes for these throwaway sessions in their TypeScript service. 

What is the correct session configuration?

- ✅ **A.** Set `persistSession: false` on each `query()` call, so the session exists only in memory for the duration of that call and nothing is written to disk
- **B.** Use the Python SDK's `ClaudeSDKClient` instead, since only the Python SDK offers an option to skip writing session transcripts to disk
- **C.** Set `continue: true` on each call so every task shares a single reusable session instead of creating a new one each time
- **D.** Call `resume` with a randomly generated session ID on each task, which creates a new in-memory-only session and skips disk persistence

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Set `persistSession: false` on each `query()` call, so the session exists only in memory for the duration of that call and nothing is written to disk

Đặt persistSession thành false cho query TypeScript dùng xong bỏ. Cấu hình này tắt lưu transcript phiên, không có nghĩa tool hoặc mọi thành phần ứng dụng đều bị cấm ghi file khác.

#### Vì sao các phương án khác không phù hợp?

- **Set `continue: true` on each call so every task shares a single reusable session instead of creating a new one each time**: Dùng tiếp một phiên trộn các tác vụ độc lập và giữ lịch sử của chúng.
- **Call `resume` with a randomly generated session ID on each task, which creates a new in-memory-only session and skips disk persistence**: Mã resume ngẫu nhiên không phải cấu hình tắt lưu.
- **Use the Python SDK's `ClaudeSDKClient` instead, since only the Python SDK offers an option to skip writing session transcripts to disk**: Không cần đổi ngôn ngữ vì TypeScript có hỗ trợ tùy chọn này.

**Tham khảo:**

- [code.claude.com — sessions](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/sessions%5C%22)

</details>


---

## Q137 · single choice · — not answered

A developer resumes a long-running session with `claude --resume` that was previously running on Opus 4.6. 

Between the original session and the resume, the organization's admin retired Opus 4.6 and it is no longer reachable. 

What happens when the session resumes?

- **A.** The session silently resumes on Opus 4.6 anyway, since Claude Code caches the model's response format locally and does not need to reach the retired model to continue an existing transcript
- **B.** The session automatically and permanently updates its saved `model` setting to whatever the resume happens to fall back to, overwriting the user's prior explicit `/model` choice for all future sessions
- **C.** The resume command fails immediately with an unrecoverable error, since resumed sessions are hard-locked to their originally saved model with no fallback path
- ✅ **D.** The resumed session falls through to the normal precedence order for selecting a model, since the restored model is unavailable, rather than failing outright

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The resumed session falls through to the normal precedence order for selecting a model, since the restored model is unavailable, rather than failing outright

Khi model đã lưu không thể khôi phục, hệ thống có thể chọn theo thứ tự ưu tiên cấu hình thông thường. Khôi phục hội thoại không khôi phục quyền truy cập model từ xa đã ngừng.

#### Vì sao các phương án khác không phù hợp?

- **The resume command fails immediately with an unrecoverable error, since resumed sessions are hard-locked to their originally saved model with no fallback path**: Có cơ chế chọn lại nên transcript không bị khóa cứng vào model không khả dụng.
- **The session silently resumes on Opus 4.6 anyway, since Claude Code caches the model's response format locally and does not need to reach the retired model to continue an existing transcript**: Metadata cache không sinh được phản hồi của model từ xa.
- **The session automatically and permanently updates its saved `model` setting to whatever the resume happens to fall back to, overwriting the user's prior explicit `/model` choice for all future sessions**: Chọn dự phòng không đồng nghĩa ghi đè vĩnh viễn tùy chọn đã lưu.

**Tham khảo:**

- [code.claude.com — model-config](%5C%22https%3A//code.claude.com/docs/en/model-config%5C%22)

</details>


---

## Q138 · pick 3 · — not answered

A team is scoping the operational limits of the Message Batches API before committing to it for a recurring nightly job. 

Select the statements below that accurately describe these limits.

- **A.** A batch can include `stream: true` on individual requests as long as the overall batch call itself is submitted without streaming, letting each request specify its own streaming behavior.
- **B.** Batches are visible across every Workspace in an organization by default, so a batch created in one Workspace can be listed and its results downloaded by any other Workspace.
- ✅ **C.** A batch expires if it has not finished processing within 24 hours of creation, and any requests still unprocessed at that point are automatically marked as expired.
- ✅ **D.** Batch results remain available for download for 29 days after the batch creation, after which the batch record still exists but results can no longer be downloaded.
- ✅ **E.** A single Message Batch is restricted to a maximum of 100,000 requests or 256 MB, and the API will immediately reject any batch exceeding either of these limits.

**Answer:** C, D, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A single Message Batch is restricted to a maximum of 100,000 requests or 256 MB, and the API will immediately reject any batch exceeding either of these limits.; A batch expires if it has not finished processing within 24 hours of creation, and any requests still unprocessed at that point are automatically marked as expired.; Batch results remain available for download for 29 days after the batch creation, after which the batch record still exists but results can no longer be downloaded.

Batch phải thỏa cả giới hạn số request lẫn dung lượng; phần chưa xử lý hết hạn khi quá thời gian xử lý; kết quả có cửa sổ tải riêng tính từ lúc tạo. Đây là ba giới hạn độc lập.

#### Vì sao các phương án khác không phù hợp?

- **Batches are visible across every Workspace in an organization by default, so a batch created in one Workspace can be listed and its results downloaded by any other Workspace.**: Batch bị giới hạn trong workspace, không tự hiển thị cho mọi workspace.
- **A batch can include `stream: true` on individual requests as long as the overall batch call itself is submitted without streaming, letting each request specify its own streaming behavior.**: Không hỗ trợ streaming từng request của batch; kết quả được tải dưới dạng file.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [platform.claude.com — batch-processing](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/batch-processing%5C%22)

</details>


---

## Q139 · single choice · — not answered

A platform team deploys `.claude/settings.json` to every repository with a `permissions.deny` rule blocking `Bash(curl *)`. 

An individual developer adds the opposite rule, an `allow` entry for `Bash(curl *)`, in their own `.claude/settings.local.json` because they need curl for a personal debugging script. 

When that developer runs Claude Code in the repo, what happens to `curl` commands?

- **A.** Curl commands prompt for manual approval every time, because conflicting allow and deny rules across scopes cancel each other out and fall back to interactive confirmation
- ✅ **B.** Curl commands stay blocked, because permission rules merge across scopes instead of one scope overriding another, so a local allow cannot remove a project-level deny
- **C.** Curl commands stay blocked only until the developer restarts Claude Code, after which the local settings file's allow rule takes effect on the next session
- **D.** Curl commands become allowed, because `settings.local.json` has higher precedence than `settings.json` and its permission rules fully replace the lower-scoped file's rules

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Curl commands stay blocked, because permission rules merge across scopes instead of one scope overriding another, so a local allow cannot remove a project-level deny

Danh sách quyền được gộp qua các phạm vi và deny khớp có ưu tiên chặn. Allow cục bộ của lập trình viên không xóa được deny của repository cho cùng lệnh.

#### Vì sao các phương án khác không phù hợp?

- **Curl commands become allowed, because `settings.local.json` has higher precedence than `settings.json` and its permission rules fully replace the lower-scoped file's rules**: File ưu tiên cao hơn không thay toàn bộ danh sách quyền đã gộp.
- **Curl commands prompt for manual approval every time, because conflicting allow and deny rules across scopes cancel each other out and fall back to interactive confirmation**: Deny rõ ràng không tự triệt tiêu thành câu hỏi duyệt.
- **Curl commands stay blocked only until the developer restarts Claude Code, after which the local settings file's allow rule takes effect on the next session**: Khởi động lại không đổi quy tắc phân giải quyền.

**Tham khảo:**

- [code.claude.com — settings](%5C%22https%3A//code.claude.com/docs/en/settings%5C%22)
- [code.claude.com — permissions](%5C%22https%3A//code.claude.com/docs/en/permissions%5C%22)

</details>


---

## Q140 · single choice · — not answered

A vendor wants to package a set of internal-workflow skills, a custom subagent, an audit-logging hook, and a database MCP server as one reusable unit that different project teams can load into their own Claude Code sessions without copying files into each project. 

Which design satisfies this requirement?

- **A.** Register the skills, subagent logic, hook scripts, and MCP server configuration as a single custom tool function in the Agent SDK's tool registry, and have each project team enable it by adding the tool to their session's tool-calling loop.
- **B.** Publish the skills, subagent definition, hook scripts, and MCP server configuration as a single CLAUDE.md file with sections like `## Skills`, `## Agents`, `## Hooks`, and `## MCP`, and have each project load it by adding an import directive in the project configuration.
- **C.** Place the skills, subagent, hooks, and MCP config into a base directory; then have each team copy the skills into their `.claude/skills/` folder and manually add the subagent, hooks, and MCP settings to their project configuration.
- ✅ **D.** Package the skills, agent, hooks, and MCP server definition into a plugin directory (with `skills/`, `agents/`, `hooks/`, and `.mcp.json`) and have each project load it via the `plugins` option pointing at the plugin's path.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Package the skills, agent, hooks, and MCP server definition into a plugin directory (with `skills/`, `agents/`, `hooks/`, and `.mcp.json`) and have each project load it via the `plugins` option pointing at the plugin's path.

Plugin đóng gói các loại mở rộng này cùng nhau và có thể được nạp theo đường dẫn. Mỗi nhóm tái sử dụng gói thay vì chép từng thành phần vào mọi repository.

#### Vì sao các phương án khác không phù hợp?

- **Place the skills, subagent, hooks, and MCP config into a base directory; then have each team copy the skills into their `.claude/skills/` folder and manually add the subagent, hooks, and MCP settings to their project configuration.**: Chép thủ công trái với yêu cầu dùng lại mà không nhân bản theo dự án.
- **Publish the skills, subagent definition, hook scripts, and MCP server configuration as a single CLAUDE.md file with sections like `## Skills`, `## Agents`, `## Hooks`, and `## MCP`, and have each project load it by adding an import directive in the project configuration.**: CLAUDE.md là file hướng dẫn, không phải manifest và bộ nạp plugin.
- **Register the skills, subagent logic, hook scripts, and MCP server configuration as a single custom tool function in the Agent SDK's tool registry, and have each project team enable it by adding the tool to their session's tool-calling loop.**: Một custom tool không thay thế vòng đời riêng của Skill, agent, hook và cấu hình MCP.

**Tham khảo:**

- [code.claude.com — plugins](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/plugins%5C%22)

</details>


---

## Q141 · single choice · — not answered

A product team needs a model for code generation, data analysis, and agentic tool use across a large user base. 

They want the best combination of speed and intelligence rather than the highest-capability, most expensive model. 

Which current Claude model fits this requirement?

- ✅ **A.** Claude Sonnet 5.5
- **B.** Claude Haiku 4.5
- **C.** Claude Mythos 5.1
- **D.** Claude Opus 5.5

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Claude Sonnet 5.5

Trong các lựa chọn, dòng Sonnet hướng tới cân bằng tốc độ và năng lực. Opus ưu tiên việc khó hơn; chỉ chọn dòng rẻ nhất hoặc mạnh nhất chưa đáp ứng đúng cân bằng cần tìm. Tên model phụ thuộc thời điểm.

#### Vì sao các phương án khác không phù hợp?

- **Claude Opus 5.5**: Opus ưu tiên công việc đòi hỏi cao hơn thay vì cân bằng được hỏi.
- **Claude Haiku 4.5**: Haiku ưu tiên độ trễ và chi phí thấp hơn là mức cân bằng năng lực trong đề.
- **Claude Mythos 5.1**: Mythos không phải lựa chọn cân bằng cho công việc phổ thông đang mô tả.

**Tham khảo:**

- [platform.claude.com — overview](%5C%22https%3A//platform.claude.com/docs/en/models/sonnet-5-5/overview%5C%22)

</details>


---

## Q142 · single choice · — not answered

A team's usage sits well under their published requests-per-minute limit, yet they begin seeing 429 errors after a marketing campaign causes API traffic to triple within a few minutes. 

Historical usage was steady before the spike. 

What is the most likely explanation, and what should the team change to avoid recurrence?

- **A.** The spike exceeded the request size limit for the Messages API, so each oversized request was individually rejected with a rate-limit error
- **B.** The published RPM limit only applies to the Message Batches API, so any spike in synchronous Messages API traffic will always return 429 regardless of pacing
- **C.** The 429 responses indicate the organization's API key was automatically revoked for suspected abuse and must be regenerated in the Console
- ✅ **D.** The spike likely triggered acceleration limits designed to catch sharp usage increases; the team should ramp traffic up gradually and keep usage patterns more consistent

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The spike likely triggered acceleration limits designed to catch sharp usage increases; the team should ramp traffic up gradually and keep usage patterns more consistent

Tải tăng đột ngột có thể chạm acceleration limit dù chưa đạt trần RPM ổn định. Tăng tải từ từ xử lý đúng dạng tăng vọt thay vì chỉ giảm mức trung bình.

#### Vì sao các phương án khác không phù hợp?

- **The published RPM limit only applies to the Message Batches API, so any spike in synchronous Messages API traffic will always return 429 regardless of pacing**: RPM không chỉ áp dụng cho Message Batches.
- **The 429 responses indicate the organization's API key was automatically revoked for suspected abuse and must be regenerated in the Console**: Mã 429 không có nghĩa API key tự bị thu hồi.
- **The spike exceeded the request size limit for the Messages API, so each oversized request was individually rejected with a rate-limit error**: Quá dung lượng request là lỗi kích thước payload, được phân biệt với hạn mức tần suất.

**Tham khảo:**

- [platform.claude.com — rate-limits](%5C%22https%3A//platform.claude.com/docs/en/api/rate-limits%5C%22)

</details>


---

## Q143 · pick 3 · — not answered

An engineer is deciding, for several failing requests, whether simply switching to the streaming API or increasing max_tokens would resolve the failure. 

Select all of the following scenarios where neither of those two changes would fix the described error.

- ✅ **A.** A request fails with 409 conflict_error because two workers concurrently modified the same underlying resource before this request was sent
- ✅ **B.** A request fails with 401 authentication_error because the API key used to sign the request has expired
- **C.** A request fails with 504 timeout_error because a very large non-streaming generation ran past the idle-connection limit on an unreliable network
- **D.** A response completes with stop_reason set to max_tokens because the generated content reached the configured output token cap
- ✅ **E.** A request fails with 413 request_too_large because the inlined message content itself exceeds the Messages API's maximum request payload size

**Answer:** A, B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A request fails with 413 request_too_large because the inlined message content itself exceeds the Messages API's maximum request payload size; A request fails with 409 conflict_error because two workers concurrently modified the same underlying resource before this request was sent; A request fails with 401 authentication_error because the API key used to sign the request has expired

Lỗi kích thước cần giảm hoặc tổ chức lại đầu vào; xung đột cần xử lý trạng thái tài nguyên; lỗi xác thực cần thông tin đăng nhập hợp lệ. Đổi cách truyền hoặc ngân sách đầu ra không sửa ba nguyên nhân này.

#### Vì sao các phương án khác không phù hợp?

- **A response completes with stop_reason set to max_tokens because the generated content reached the configured output token cap**: Đầu ra dừng vì max_tokens có thể được xử lý bằng tăng giới hạn đầu ra nếu model hỗ trợ.
- **A request fails with 504 timeout_error because a very large non-streaming generation ran past the idle-connection limit on an unreliable network**: Streaming có thể giúp tình huống kết nối không streaming bị timeout lúc chờ quá lâu như đề mô tả.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [platform.claude.com — errors](%5C%22https%3A//platform.claude.com/docs/en/api/errors%5C%22)

</details>


---

## Q144 · single choice · — not answered

A billing-sensitive workload needs to know exactly how many tokens a large prompt will consume before it is sent to Claude, so the team can stay within a budget. 

What should they use?

- **A.** The budget_tokens field on extended thinking, which caps and reports total request token usage
- ✅ **B.** A token counting call, to determine the number of tokens in a message before sending it
- **C.** The effort parameter set to low, which returns an estimated token count in the response metadata
- **D.** The Files API, since uploaded files automatically report their token size before generation begins

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A token counting call, to determine the number of tokens in a message before sending it

Dùng endpoint đếm token trước khi sinh để ước lượng đầu vào. Tài liệu chính thức lưu ý số đếm có thể lệch nhẹ so với mức dùng thực tế; từ exactly trong đề không phải bảo đảm hóa đơn tuyệt đối.

#### Vì sao các phương án khác không phù hợp?

- **The effort parameter set to low, which returns an estimated token count in the response metadata**: Effort điều khiển suy luận, không trả số token trước request.
- **The Files API, since uploaded files automatically report their token size before generation begins**: Tải file không thay thế đếm toàn bộ đầu vào message.
- **The budget_tokens field on extended thinking, which caps and reports total request token usage**: Ngân sách thinking điều khiển phần suy luận đầu ra, không đo đầu vào.

**Tham khảo:**

- [platform.claude.com — token-counting](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/token-counting%5C%22)

</details>


---

## Q145 · single choice · — not answered

While streaming a response with extended thinking enabled, a client receives a thinking content block that ends with a signature_delta event immediately before content_block_stop. 

What is the purpose of this signature_delta event?

- **A.** It marks the point at which the thinking block's token usage should be added to the cumulative usage total.
- **B.** It signals that a fallback model has taken over generation for the remainder of the response.
- ✅ **C.** It provides a signature used to verify the integrity of the thinking block's content.
- **D.** It indicates that the thinking block has been redacted for policy compliance and its content should be discarded.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It provides a signature used to verify the integrity of the thinking block's content.

Chữ ký đi kèm khối thinking để phục vụ xác minh tính toàn vẹn. Giữ nội dung thinking và chữ ký khi giao thức yêu cầu gửi lại những khối này ở lượt sau.

#### Vì sao các phương án khác không phù hợp?

- **It marks the point at which the thinking block's token usage should be added to the cumulative usage total.**: Token dùng được báo qua trường usage, không phải mục đích của chữ ký.
- **It indicates that the thinking block has been redacted for policy compliance and its content should be discarded.**: Khối redacted thinking khác khối thinking có chữ ký.
- **It signals that a fallback model has taken over generation for the remainder of the response.**: Sự kiện chữ ký không biểu thị đổi model.

**Tham khảo:**

- [platform.claude.com — streaming](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/streaming%5C%22)

</details>


---

## Q146 · single choice · — not answered

A junior engineer asks why Claude appears to produce text piece by piece rather than generating the entire response instantly. 

Which explanation best matches how Claude generates output?

- **A.** Claude retrieves the entire response from a precomputed lookup table by matching the prompt's embedding to a database of response embeddings and returning the nearest full text.
- **B.** Claude generates tokens in a random order, then applies a learned reordering function to arrange them into a coherent response before returning it.
- ✅ **C.** Claude autoregressively predicts the next token based on the prompt and previously generated tokens, repeating the process to build the full response.
- **D.** Claude generates the full response as a complete string in one forward pass through the model, then splits it into tokens only for transmission to the client.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Claude autoregressively predicts the next token based on the prompt and previously generated tokens, repeating the process to build the full response.

Sinh tự hồi quy dự đoán token kế tiếp từ ngữ cảnh và các token đã sinh. Lặp bước đó tạo nên câu trả lời; streaming cho thấy tiến trình từng phần.

#### Vì sao các phương án khác không phù hợp?

- **Claude retrieves the entire response from a precomputed lookup table by matching the prompt's embedding to a database of response embeddings and returning the nearest full text.**: Sinh văn bản không phải tra nguyên câu trả lời bằng embedding.
- **Claude generates the full response as a complete string in one forward pass through the model, then splits it into tokens only for transmission to the client.**: Không sinh toàn bộ câu trả lời trong một forward pass rồi mới tách token.
- **Claude generates tokens in a random order, then applies a learned reordering function to arrange them into a coherent response before returning it.**: Token không được sinh đảo thứ tự rồi sắp xếp lại.

**Tham khảo:**

- [platform.claude.com — glossary](%5C%22https%3A//platform.claude.com/docs/en/about-claude/glossary%5C%22)

</details>


---

## Q147 · single choice · — not answered

A support-ticket triage service sends the same 6,000-token system prompt and tool definitions with every request, followed by a unique customer message. 

Requests arrive in bursts roughly every 30 seconds throughout the day. 

The team wants to cut input token costs on the repeated prefix without adding infrastructure. 

Which change addresses this most directly?

- **A.** Move the system prompt and tool definitions into each request's user message so that the fixed 6,000-token prefix is cached per message, cutting input costs across the 30-second burst cycle.
- ✅ **B.** Mark the system prompt and tool definitions with a 5-minute ephemeral cache_control breakpoint; repeated requests then read the prefix from cache, avoiding the full input price.
- **C.** Switch the tool definitions to a compact JSON schema with shorter property names and fewer nested objects, so the 6,000-token prefix shrinks and each request consumes fewer input tokens.
- **D.** Reduce the max_tokens parameter on every request to the minimum needed for a short triage response, so Claude's completions stay brief and the blended token cost per call decreases.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Mark the system prompt and tool definitions with a 5-minute ephemeral cache_control breakpoint; repeated requests then read the prefix from cache, avoiding the full input price.

Đặt điểm cache ephemeral được hỗ trợ ở cuối tiền tố tools/system ổn định. Request trùng tiền tố trong thời gian cache có thể dùng lại; phần tin nhắn khách hàng thay đổi không nằm trong tiền tố đó.

#### Vì sao các phương án khác không phù hợp?

- **Move the system prompt and tool definitions into each request's user message so that the fixed 6,000-token prefix is cached per message, cutting input costs across the 30-second burst cycle.**: Chuyển sang user message không tự bật cache.
- **Reduce the max_tokens parameter on every request to the minimum needed for a short triage response, so Claude's completions stay brief and the blended token cost per call decreases.**: Giảm ngân sách đầu ra không giảm đơn giá tiền tố đầu vào lặp lại.
- **Switch the tool definitions to a compact JSON schema with shorter property names and fewer nested objects, so the 6,000-token prefix shrinks and each request consumes fewer input tokens.**: Rút gọn schema có thể tiết kiệm token nhưng chưa tạo tái sử dụng tiền tố.

**Tham khảo:**

- [platform.claude.com — prompt-caching](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/prompt-caching%5C%22)

</details>


---

## Q148 · single choice · — not answered

An engineer is building a research agent that needs to read dozens of files across a large repository to answer one question, without letting all that file content pile up in the main conversation's context. 

Which design best achieves this?

- **A.** Store all file contents in a custom MCP resource and have the main agent fetch a single combined resource URI instead of individual files
- **B.** Read every file directly in the main agent loop, but set effort to low so the extra file content consumes fewer tokens per turn
- ✅ **C.** Delegate the file exploration to a subagent, whose fresh context absorbs all the intermediate reads while only its final summary message returns to the parent
- **D.** Read every file directly in the main agent loop, then issue a manual /compact command immediately afterward to shrink the accumulated history

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delegate the file exploration to a subagent, whose fresh context absorbs all the intermediate reads while only its final summary message returns to the parent

Subagent khám phá giữ các lượt đọc chi tiết trong context riêng rồi trả phát hiện về. Context agent chính được dành cho quyết định thay vì đầy mã nguồn thô.

#### Vì sao các phương án khác không phù hợp?

- **Read every file directly in the main agent loop, then issue a manual /compact command immediately afterward to shrink the accumulated history**: Nén sau khi đọc vẫn nạp mọi file vào agent chính trước khi tóm tắt.
- **Read every file directly in the main agent loop, but set effort to low so the extra file content consumes fewer tokens per turn**: Effort thấp không làm ngắn nội dung file.
- **Store all file contents in a custom MCP resource and have the main agent fetch a single combined resource URI instead of individual files**: Lấy một resource gộp vẫn đưa toàn bộ kết quả đó vào agent chính.

**Tham khảo:**

- [code.claude.com — subagents](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/subagents%5C%22)

</details>


---

## Q149 · single choice · — not answered

A prompt written for a legal-document summarizer produces inconsistent structure across runs, and engineers on the team disagree about why. 

Before tuning the prompt further, which practice would most directly reveal ambiguity in the current wording?

- **A.** Ask Claude to explain its own instructions back in a separate call, treating the model's paraphrase of the prompt as a reliable substitute for a human comprehension check
- ✅ **B.** Show the prompt to a colleague who has minimal context on the task and ask them to follow it exactly as written, since confusion for a human reader tends to predict confusion for Claude
- **C.** Reduce the temperature to zero for the summarizer's requests, on the assumption that ambiguity in phrasing is resolved by lower-variance sampling rather than by clearer instructions
- **D.** Rerun the identical, unedited prompt against the model twenty times and keep only the most common resulting structure, treating majority voting as a substitute for locating the ambiguity

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Show the prompt to a colleague who has minimal context on the task and ask them to follow it exactly as written, since confusion for a human reader tends to predict confusion for Claude

Người đọc mới giúp phát hiện giả định chưa nói ra và chỉ dẫn mơ hồ. Yêu cầu họ làm đúng theo văn bản rồi sửa những điểm họ không thể hiểu thống nhất.

#### Vì sao các phương án khác không phù hợp?

- **Rerun the identical, unedited prompt against the model twenty times and keep only the most common resulting structure, treating majority voting as a substitute for locating the ambiguity**: Chọn kết quả đa số không chỉ ra chỗ diễn đạt lỗi.
- **Ask Claude to explain its own instructions back in a separate call, treating the model's paraphrase of the prompt as a reliable substitute for a human comprehension check**: Model diễn giải lại không thay thế kiểm tra hiểu độc lập.
- **Reduce the temperature to zero for the summarizer's requests, on the assumption that ambiguity in phrasing is resolved by lower-variance sampling rather than by clearer instructions**: Giảm độ ngẫu nhiên không làm yêu cầu mơ hồ thành rõ ràng.

**Tham khảo:**

- [platform.claude.com — claude-prompting-best-practices](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices%5C%22)

</details>


---

## Q150 · single choice · — not answered

A summarization service parses the response text as JSON. For very long transcripts, the JSON string is occasionally cut off mid-object and the parser raises a decode error. Investigating, the engineer finds stop_reason is "max_tokens" on every one of the failing calls. 

What should the defensive parsing logic do?

- **A.** Lower max_tokens further so Claude is forced to produce shorter, safer completions
- ✅ **B.** Catch the decode error, check stop_reason for max_tokens, and treat the response as incomplete
- **C.** Ignore stop_reason and retry parsing with a lenient JSON parser that tolerates trailing commas
- **D.** Treat every JSON decode error as a transient network issue and resend the identical request

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Catch the decode error, check stop_reason for max_tokens, and treat the response as incomplete

Lý do dừng cho biết quá trình sinh chưa hoàn tất, không phải một tài liệu hoàn chỉnh bị sai cú pháp. Bắt lỗi parse, nhận diện cắt ngắn rồi thử lại với ngân sách phù hợp hoặc tác vụ nhỏ hơn.

#### Vì sao các phương án khác không phù hợp?

- **Ignore stop_reason and retry parsing with a lenient JSON parser that tolerates trailing commas**: Parser nới lỏng không khôi phục được phần nội dung chưa được sinh.
- **Lower max_tokens further so Claude is forced to produce shorter, safer completions**: Giảm giới hạn làm tăng nguy cơ cắt ngắn.
- **Treat every JSON decode error as a transient network issue and resend the identical request**: Gửi lại y nguyên bỏ qua nguyên nhân giới hạn đầu ra đã thấy.

**Tham khảo:**

- [platform.claude.com — handling-stop-reasons](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/handling-stop-reasons%5C%22)

</details>


---

## Q151 · pick 3 · — not answered

During testing, an agent occasionally calls a create_ticket tool while omitting the required priority field. 

Which of the following are appropriate ways to handle this within the conversation, according to recommended tool-use error handling? (Select all that apply)

- ✅ **A.** Add strict: true to the tool definition so input is validated against the schema before your handler
- **B.** Automatically terminate the session and require the user to start an entirely new conversation
- ✅ **C.** Return a tool_result with is_error: true naming the missing field so Claude retries with it supplied
- ✅ **D.** Improve the tool's description so the priority-field requirement is stated more explicitly
- **E.** Log the omission silently and proceed with ticket creation using a null priority value
- **F.** Rewrite the schema to make priority optional so it can never be reported as missing again

**Answer:** A, C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Return a tool_result with is_error: true naming the missing field so Claude retries with it supplied; Add strict: true to the tool definition so input is validated against the schema before your handler; Improve the tool's description so the priority-field requirement is stated more explicitly

Trả lỗi nêu rõ priority để Claude sửa lời gọi. Strict tool use theo schema có thể ngăn thiếu trường; mô tả rõ hơn củng cố yêu cầu. Ba cách lần lượt hỗ trợ phục hồi, phòng ngừa và hướng dẫn; mô tả không thay thế kiểm tra dữ liệu.

#### Vì sao các phương án khác không phù hợp?

- **Automatically terminate the session and require the user to start an entirely new conversation**: Khởi động lại cả phiên là không cần cho lỗi tham số có thể sửa.
- **Log the omission silently and proceed with ticket creation using a null priority value**: Dùng null âm thầm vi phạm ý nghĩa trường bắt buộc.
- **Rewrite the schema to make priority optional so it can never be reported as missing again**: Cho trường thành tùy chọn là bỏ hợp đồng yêu cầu priority.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [platform.claude.com — handle-tool-calls](%5C%22https%3A//platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls%5C%22)
- [platform.claude.com — strict-tool-use](%5C%22https%3A//platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use%5C%22)

</details>


---

## Q152 · single choice · — not answered

A prompt concatenates two source documents as plain, undifferentiated text, and Claude's responses sometimes misattribute which document a fact came from. 

What restructuring best fixes this attribution problem?

- **A.** Insert a page-break control character between the two documents, such as a form feed, and prepend a short system note that instructs Claude to treat the page break as a document separator for attribution.
- **B.** Prefix each document with a numbered markdown heading (e.g., "# Document 1") and then include a prompt instruction for Claude to attribute facts based solely on which heading they appear under.
- **C.** Convert both documents into a single CSV file where each row holds one paragraph and the left column labels the source document, so Claude can read the tabular data and attribute facts to the correct source.
- ✅ **D.** Wrap each document in its own tag with nested  and subtags, placed inside an outer tag, thereby providing clear boundaries and metadata.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Wrap each document in its own 

Dùng ranh giới từng tài liệu và metadata nguồn để gắn dữ kiện với tài liệu gốc. Khi hiển thị ví dụ thẻ như văn bản, cần escape đúng để không mất nội dung.

#### Vì sao các phương án khác không phù hợp?

- **Insert a page-break control character between the two documents, such as a form feed, and prepend a short system note that instructs Claude to treat the page break as a document separator for attribution.**: Ngắt trang không cung cấp mã nguồn ổn định hay ranh giới có cấu trúc.
- **Prefix each document with a numbered markdown heading (e.g., \"# Document 1\") and then include a prompt instruction for Claude to attribute facts based solely on which heading they appear under.**: Tiêu đề đơn giản kém rõ hơn cấu trúc nguồn/nội dung lồng nhau được đề xuất.
- **Convert both documents into a single CSV file where each row holds one paragraph and the left column labels the source document, so Claude can read the tabular data and attribute facts to the correct source.**: Dồn thành CSV có thể làm mất cấu trúc và là bước chuyển không cần thiết.

**Tham khảo:**

- [platform.claude.com — claude-prompting-best-practices](%5C%22https%3A//platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices%5C%22)

</details>


---

## Q153 · single choice · — not answered

A subagent is defined to automatically spawn further subagents to divide up its own workload, and those in turn may spawn more. 

What governs how deep this nesting can go, and how can a team stop a specific subagent from spawning any children at all?

- ✅ **A.** Nesting defaults to three levels below the main agent and can be changed with the `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` setting; omitting `Agent` from a subagent's tools (or adding it to `disallowedTools`) prevents that subagent from spawning children.
- **B.** Nesting is unlimited regardless of execution mode, because there is no built-in depth limit, and to prevent a specific subagent from spawning children, the team must remove the `Bash` tool from its tools list to block the execution of child-spawning commands.
- **C.** Nesting is capped at two levels only when the subagent runs in the foreground, because foreground execution limits nesting to two levels, and to prevent a subagent from spawning children, set its `permissionMode` to `plan` to restrict it to read-only and prevent spawning.
- **D.** Nesting has no depth limit as long as each subagent runs in the background, because background execution bypasses the configured depth cap, and to prevent a particular subagent from spawning children, set its effort level to low, which prevents it from spawning children.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Nesting defaults to three levels below the main agent and can be changed with the `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` setting; omitting `Agent` from a subagent's tools (or adding it to `disallowedTools`) prevents that subagent from spawning children.

Trên các phiên bản SDK mới được tài liệu nêu, độ sâu mặc định là ba tầng và chỉnh bằng biến môi trường đã cho. Bỏ khả năng dùng Agent của một subagent sẽ ngăn nó ủy nhiệm tiếp. Cần kiểm tra phiên bản triển khai vì bản cũ có mặc định khác.

#### Vì sao các phương án khác không phù hợp?

- **Nesting has no depth limit as long as each subagent runs in the background, because background execution bypasses the configured depth cap, and to prevent a particular subagent from spawning children, set its effort level to low, which prevents it from spawning children.**: Chạy nền không xóa trần độ sâu; effort không phải quyền sinh agent.
- **Nesting is capped at two levels only when the subagent runs in the foreground, because foreground execution limits nesting to two levels, and to prevent a subagent from spawning children, set its `permissionMode` to `plan` to restrict it to read-only and prevent spawning.**: Plan mode không phải cơ chế trực tiếp loại tool Agent.
- **Nesting is unlimited regardless of execution mode, because there is no built-in depth limit, and to prevent a specific subagent from spawning children, the team must remove the `Bash` tool from its tools list to block the execution of child-spawning commands.**: Bỏ Bash không loại khả năng ủy nhiệm bằng Agent.

**Tham khảo:**

- [code.claude.com — subagents](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/subagents%5C%22)

</details>


---

## Q154 · pick 3 · — not answered

A support agent built on Claude has access to a customer database tool and forwards conversation transcripts to a third-party analytics vendor for quality monitoring. 

Transcripts routinely contain customers' full names, emails, and account numbers. 

Which of these actions should the team take to prevent unnecessary PII exposure? (Select all that apply.)

- **A.** Compress the transcripts before sending them, since compression is treated as equivalent to redaction for the purpose of protecting personal data
- ✅ **B.** Review which fields the analytics vendor's quality-monitoring use case genuinely requires before deciding what to include in each transcript export
- ✅ **C.** Apply the same PII minimization to data logged internally for debugging, not just to data sent to the external vendor
- **D.** Ask Claude to verbally warn the customer at the start of each chat that their data might be shared externally, then proceed without further changes
- **E.** Send the full unredacted transcripts as-is, since the analytics vendor's contract already covers general data handling and confidentiality obligations
- ✅ **F.** Redact or mask personally identifiable information in the transcripts before they leave the system, sending the vendor only the fields it actually needs

**Answer:** B, C, F

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Redact or mask personally identifiable information in the transcripts before they leave the system, sending the vendor only the fields it actually needs; Apply the same PII minimization to data logged internally for debugging, not just to data sent to the external vendor; Review which fields the analytics vendor's quality-monitoring use case genuinely requires before deciding what to include in each transcript export

Xác định trường dữ liệu cần cho giám sát, rồi che hoặc bỏ dữ liệu cá nhân không cần khi xuất và khi ghi log nội bộ. Hợp đồng hay lời thông báo không tự làm giảm dữ liệu bị lộ.

#### Vì sao các phương án khác không phù hợp?

- **Send the full unredacted transcripts as-is, since the analytics vendor's contract already covers general data handling and confidentiality obligations**: Hợp đồng bảo mật không biện minh cho việc gửi định danh thô không cần thiết.
- **Compress the transcripts before sending them, since compression is treated as equivalent to redaction for the purpose of protecting personal data**: Nén là biến đổi có thể khôi phục, không phải che dữ liệu.
- **Ask Claude to verbally warn the customer at the start of each chat that their data might be shared externally, then proceed without further changes**: Cảnh báo bằng lời không xóa trường thừa hoặc bảo vệ log.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [strandsagents.com — observability](%5C%22https%3A//strandsagents.com/latest/documentation/docs/user-guide/observability-evaluation/observability/%5C%22)
- [pydantic.dev — logfire](%5C%22https%3A//pydantic.dev/docs/ai/integrations/logfire/%5C%22)

</details>


---

## Q155 · pick 3 · — not answered

A fintech company is deploying a multi-tenant Claude-powered advisor that reads account data for one customer per session and can place trades through an internal API. 

Which combination of practices best supports authentication, authorization, and confidentiality across tenants? (Select all that apply.)

- ✅ **A.** Require a fresh authorization check on the backend before executing any trade action the agent requests, rather than trusting the agent's own judgment alone
- **B.** Issue one shared service credential for the trading API that every customer session reuses, to simplify credential rotation
- ✅ **C.** Screen inbound account notes and support messages for injected instructions before they are returned to Claude as tool results
- ✅ **D.** Scope each session's tool access so it can only read and act on the data belonging to the authenticated customer for that session
- **E.** Log full account numbers and portfolio balances in plaintext application logs so support staff can search history freely
- **F.** Let a session continue reading a different customer's data mid-conversation if the agent decides it is contextually relevant to the current advice

**Answer:** A, C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Scope each session's tool access so it can only read and act on the data belonging to the authenticated customer for that session; Screen inbound account notes and support messages for injected instructions before they are returned to Claude as tool results; Require a fresh authorization check on the backend before executing any trade action the agent requests, rather than trusting the agent's own judgment alone

Giới hạn tool theo khách hàng của phiên và kiểm tra quyền lại tại backend trước mỗi giao dịch. Sàng lọc chỉ dẫn chèn trong ghi chú không tin cậy là lớp phòng vệ bổ sung trước việc vượt ranh giới; không thay thế phân quyền.

#### Vì sao các phương án khác không phù hợp?

- **Issue one shared service credential for the trading API that every customer session reuses, to simplify credential rotation**: Một thông tin xác thực dùng chung không giới hạn chưa tạo phân quyền theo khách hàng.
- **Log full account numbers and portfolio balances in plaintext application logs so support staff can search history freely**: Log tài khoản nhạy cảm dạng rõ làm giảm bảo mật.
- **Let a session continue reading a different customer's data mid-conversation if the agent decides it is contextually relevant to the current advice**: Nhận định của agent không cấp quyền đọc dữ liệu khách hàng khác.

Đã sửa đáp án nguồn: PDF chỉ đánh dấu một phương án, nhưng đề và đối chiếu từng lựa chọn cho thấy có nhiều phương án đúng. Xem báo cáo kiểm tra đáp án đi kèm.

**Tham khảo:**

- [code.claude.com — secure-deployment](%5C%22https%3A//code.claude.com/docs/en/agent-sdk/secure-deployment%5C%22)
- [modelcontextprotocol.io — security_best_practices](%5C%22https%3A//modelcontextprotocol.io/docs/tutorials/security/security_best_practices%5C%22)
- [platform.claude.com — mitigate-jailbreaks](%5C%22https%3A//platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks%5C%22)

</details>
