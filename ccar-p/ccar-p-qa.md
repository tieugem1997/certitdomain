# CCAR-P — Claude Certified Architect (Professional): 126 questions

Source: practice-cert.maithienan.com study mode. Your progress: 101 correct, 24 incorrect, 1 unanswered.

Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).


---

## Q1 · pick 2 · ✔ you got it right

You are compiling guardrail tactics for a customer-facing assistant. 

Which two tactics belong on the guardrail list? Each correct answer presents a complete solution.

- **A.** Rely on a single hardened system prompt that enumerates every disallowed behavior.
- **B.** Embed approved override phrases that let trusted users relax guardrails on demand.
- **C.** Lower sampling temperature globally to reduce the chance of off-policy completions.
- ✅ **D.** Validate the model output against a structured schema before downstream actions are taken.
- ✅ **E.** Layer prompt-level guardrails with runtime content checks rather than relying on either alone.

**Answer:** D, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Layer prompt-level guardrails with runtime content checks rather than relying on either alone.; Validate the model output against a structured schema before downstream actions are taken.

Kết hợp chỉ dẫn trong prompt với kiểm tra nội dung khi chạy giúp ứng dụng phát hiện vi phạm mà mô hình vẫn có thể tạo ra. Kiểm tra schema trước hành động tiếp theo chặn đầu ra sai cấu trúc hoặc thiếu trường bắt buộc. Hai lớp này xử lý các điểm lỗi khác nhau; schema hợp lệ vẫn cần được kiểm tra về nội dung và quyền.

#### Vì sao các phương án khác không phù hợp?

- **Embed approved override phrases that let trusted users relax guardrails on demand.**: Cụm từ ghi đè được nhúng trong hội thoại tạo đường vượt rào có thể bị sao chép; quyền phải được xác minh bên ngoài nội dung người dùng.
- **Lower sampling temperature globally to reduce the chance of off-policy completions.**: Giảm temperature làm lựa chọn từ ít biến động hơn, nhưng một câu trả lời vi phạm có xác suất cao vẫn có thể được sinh ra.
- **Rely on a single hardened system prompt that enumerates every disallowed behavior.**: Một system prompt không thể liệt kê và cưỡng chế mọi tình huống; thiếu kiểm tra khi chạy khiến đầu ra vi phạm đi thẳng tới hệ thống sau.

**Tham khảo:**

- [Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)
- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q2 · pick 2 · ✔ you got it right

A Claude architect is implementing safety controls for a customer-facing advice assistant that must never provide regulated investment recommendations.

Which two guardrail implementations most directly enforce this constraint? (Select two.)

- ✅ **A.** Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.
- **B.** Increase response temperature to introduce variability that reduces the likelihood of specific recommendations.
- **C.** Log all user queries to a SIEM for post-hoc compliance review.
- ✅ **D.** Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advicerequests.
- **E.** Limit session length to reduce the volume of queries processed per user per day.

**Answer:** A, D

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

Trợ lý được trả lời khách nhưng có một nhóm nội dung tuyệt đối ngoài phạm vi.

#### 2. Đề thực sự muốn gì?

must never → tuyệt đối không; most directly enforce → trực tiếp ngăn chặn; Từ hạn định trong đề: must, never

#### 3. Đáp án

- **D. Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advicerequests.**
- **E. Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.**

#### 4. Vì sao đúng?

D nói rõ loại yêu cầu phải từ chối; E kiểm tra và chặn đầu ra trước khi khách nhận. Một lớp hướng dẫn hành vi, một lớp kiểm soát kết quả.

#### 5. Vì sao các phương án khác sai?

- **A:** tăng ngẫu nhiên không ngăn lời khuyên đầu tư.
- **B:** ghi log để xem lại xảy ra sau câu trả lời.
- **C:** giới hạn số lượt vẫn cho phép một lượt vi phạm.

#### 6. Câu thần chú

MUST NEVER → ranh giới trong prompt + chặn đầu ra.

</details>


---

## Q3 · single choice · ✔ you got it right

You are configuring tool permissions for a Claude-based assistant. The assistant's defined responsibilities require read access to a knowledge base and write access to a draft queue, and nothing else.

Which scoping design best applies least privilege?

- **A.** Allow access to all tools with read permissions globally and restrict write permissions to the draft- queue tool, without scoping to only the specific tools required for defined tasks.
- ✅ **B.** Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.
- **C.** Allow access to every tool in the catalog and rely on the model to decline tools it should not use.
- **D.** Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.

Allow-list đúng hai tool cần thiết ở orchestration giữ đủ năng lực đọc knowledge base/ghi draft, đồng thời không cấp quyền ngoài trách nhiệm.

#### Vì sao các phương án khác không phù hợp?

- **Allow access to every tool in the catalog and rely on the model to decline tools it should not use.**: Tin model tự từ chối không phải giới hạn quyền thực thi.
- **Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for.**: Tắt hết làm tác vụ thiết kế không thể thực hiện.
- **Allow access to all tools with read permissions globally and restrict write permissions to the draft- queue tool, without scoping to only the specific tools required for defined tasks.**: Read toàn catalog vẫn rộng hơn knowledge base cần thiết.

**Tham khảo:**

- [Claude Code — Permissions](https://code.claude.com/docs/en/permissions)

</details>


---

## Q4 · pick 2 · ✘ you got it wrong

You are compiling team-setup practices for a Claude Code rollout across an engineering organization.

Which two practices belong on the list? (Select two.)

Each correct answer presents a complete solution.

- ✅ **A.** Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.
- **B.** Use user scope for team-shared MCP servers so every engineer on the team has consistent access.
- **C.** Use project scope for personal editor preferences so the preferences apply consistently within the project.
- **D.** Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work.
- ✅ **E.** Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.

**Answer:** A, E · **Yours:** A, B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.; Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.

Managed settings cưỡng chế bảo mật toàn tổ chức; cấu hình project version-controlled chia sẻ MCP và policy repo cho team.

#### Vì sao các phương án khác không phù hợp?

- **Use project scope for personal editor preferences so the preferences apply consistently within the project.**: Sở thích cá nhân trong project áp sang người khác ngoài ý định.
- **Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work.**: Local security cho từng người sửa không đáp ứng policy không override.
- **Use user scope for team-shared MCP servers so every engineer on the team has consistent access.**: User scope không tự chia sẻ endpoint cho mọi thành viên.

**Tham khảo:**

- [Claude Code — Settings](https://code.claude.com/docs/en/settings)
- [Claude Code — Permissions](https://code.claude.com/docs/en/permissions)

</details>


---

## Q5 · single choice · ✔ you got it right

You are designing a content moderation classifier that processes high volumes of user-generated comments under a tight per-message latency budget using well-defined classification labels.

Which model selection best aligns with the workload?

- **A.** Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict.
- **B.** Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling.
- ✅ **C.** Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.
- **D.** Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.

Haiku là điểm khởi đầu hợp lý cho classification nhãn rõ, khối lượng cao và latency chặt; phải benchmark chất lượng moderation chứ không chọn chỉ bằng tên họ model.

#### Vì sao các phương án khác không phù hợp?

- **Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict.**: Model lớn hơn không mặc nhiên tối ưu latency/cost.
- **Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling.**: Extended thinking mọi comment thêm độ trễ không cần khi reasoning đơn giản.
- **Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity.**: Mọi moderation không cần độ sâu reasoning tối đa.

**Tham khảo:**

- [Claude — Model overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Claude — Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)

</details>


---

## Q6 · single choice · ✔ you got it right

You are supporting an engineer whose Claude Code session reports a permission denial when the engineer expected the action to be allowed.

Which resolution step is most appropriate?

- ✅ **A.** Inspect the active permission rules across all scopes-managed, command-line, local, project, and user-to identify which rule is denying the action and confirm whether it should be amended or remain denied.
- **B.** Disable the permission system entirely across all scopes to remove the denial, eliminating all tool-pattern and deny-rule controls rather than identifying and amending the specific rule.
- **C.** Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool- pattern constraints rather than amending only the rule in
- **D.** Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Inspect the active permission rules across all scopes-managed, command-line, local, project, and user-to identify which rule is denying the action and confirm whether it should be amended or remain denied.

Kiểm tra rule hiệu lực ở mọi scope định vị deny có chủ đích hay lỗi cấu hình rồi sửa đúng chỗ, không mở rộng quyền toàn hệ thống.

#### Vì sao các phương án khác không phù hợp?

- **Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional.**: Retry nguyên thao tác không thay đổi deny rule.
- **Disable the permission system entirely across all scopes to remove the denial, eliminating all tool-pattern and deny-rule controls rather than identifying and amending the specific rule.**: Tắt permission xóa cả các ranh giới cần giữ.
- **Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool- pattern constraints rather than amending only the rule in**: Bash không giới hạn mở quyền lớn hơn nhu cầu.

**Tham khảo:**

- [Claude Code — Permissions](https://code.claude.com/docs/en/permissions)

</details>


---

## Q7 · pick 2 · ✘ you got it wrong

A managed agent deployment for claims triage has grown from **6 tools** to **34 tools** over **18 months** as product teams added capabilities. Triage accuracy has declined from **91 percent** to **78 percent**, and average tool- selection latency has increased by **2.3 second**s. A junior engineer has proposed adding a tool-router agent in front of the current agent to filter the tool list per request.

Which two findings should you present to justify capability decomposition before adding the router? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** The proposed router introduces an additional model call on every incoming request.
- **B.** Tool descriptions overlap across multiple claim categories within the agent's tool set.
- **C.** The router pattern is well documented across publicly available agent literature.
- ✅ **D.** The 34 tools serve four distinct claim-workflow domains within the triage scope.
- **E.** Several tools have not been invoked across the most recent 90 days of traffic.

**Answer:** A, D · **Yours:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The proposed router introduces an additional model call on every incoming request.; The 34 tools serve four distinct claim-workflow domains within the triage scope.

Bốn domain công việc là ranh giới decomposition tự nhiên; router thêm một model call mỗi request nên cần cân nhắc trước khi chỉ bọc toolset 34 công cụ.

#### Vì sao các phương án khác không phù hợp?

- **Tool descriptions overlap across multiple claim categories within the agent's tool set.**: Description chồng lấn quan trọng nhưng chưa chỉ rõ ranh giới domain để phân rã.
- **Several tools have not been invoked across the most recent 90 days of traffic.**: Tool không dùng gợi ý pruning, không trực tiếp chứng minh cách chia domain.
- **The router pattern is well documented across publicly available agent literature.**: Pattern được mô tả công khai không chứng minh phù hợp workload.

**Tham khảo:**

- [Anthropic — Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q8 · single choice · ✔ you got it right

A technical team is debating whether to implement a new capability for generating regulatory filings from internal data as a Claude Skill or as an MCP server. The capability requires a fixed authoring procedure with embedded examples, does not need to call live external systems, and must be portable across three Claude deployments: claude.ai, an internal API integration, and Claude Code.

Which factor most strongly favors implementing the capability as a Skill?

- ✅ **A.** The capability is procedural knowledge with no live external-system calls required.
- **B.** The capability requires direct authentication against the corporate identity provider.
- **C.** The capability must also be callable from a developer's command-line interface.
- **D.** The capability needs to query a live database for the most recent regulatory filings.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The capability is procedural knowledge with no live external-system calls required.

Quy trình tác giả cố định kèm ví dụ là tri thức procedural thích hợp Skill; MCP dành cho khả năng truy cập hệ thống/công cụ, chưa cần ở đây.

#### Vì sao các phương án khác không phù hợp?

- **The capability needs to query a live database for the most recent regulatory filings.**: Database live là lý do cần tích hợp tool, không ưu điểm của Skill thuần.
- **The capability requires direct authentication against the corporate identity provider.**: Identity authentication là tích hợp hệ thống, không nội dung quy trình.
- **The capability must also be callable from a developer's command-line interface.**: CLI invocation không phân biệt vì cả Skill lẫn MCP có thể dùng từ Claude Code.

**Tham khảo:**

- [Claude Code — Skills](https://code.claude.com/docs/en/skills)

</details>


---

## Q9 · pick 2 · ✘ you got it wrong

A Claude architect is auditing configuration scope assignments.

Which two statements correctly identify an appropriate use of user-scope configuration versus other scopes? (Select two.)

- ✅ **A.** Saving a preferred Claude response language that applies to all repositories the engineer uses.
- ✅ **B.** Persisting personal editor theme preferences that follow an engineer across projects.
- **C.** Enforcing a company-wide policy that disables a feature for all engineers.
- **D.** Defining MCP server endpoints shared by all contributors to a specific repository.
- **E.** Storing API authentication keys so they are not committed to version control.

**Answer:** A, B · **Yours:** B

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

Kiểm tra đâu là sở thích theo một kỹ sư qua nhiều repository.

#### 2. Đề thực sự muốn gì?

user-scope → phạm vi cá nhân; across projects → qua nhiều dự án

#### 3. Đáp án

- **D. Persisting personal editor theme preferences that follow an engineer across projects.**
- **E. Saving a preferred Claude response language that applies to all repositories the engineer uses.**

#### 4. Vì sao đúng?

D là chủ đề giao diện cá nhân; E là ngôn ngữ trả lời ưa thích. Cả hai theo người dùng, không theo repository hoặc tổ chức.

#### 5. Vì sao các phương án khác sai?

- **A:** endpoint chung theo repo thuộc project.
- **B:** bí mật cần kho secret hoặc biến môi trường phù hợp, không suy ra cứ user settings là nơi chứa khóa an toàn.
- **C:** chính sách bắt buộc toàn công ty thuộc managed.

#### 6. Câu thần chú

THEO NGƯỜI → user; BÍ MẬT → secret store.

</details>


---

## Q10 · pick 2 · ✔ you got it right

A research summarization assistant has been deployed for six months. A user has flagged that a generated summary contained a fabricated citation. The product team has asked whether the incident requires architectural action or whether it is an isolated case.

Which two Diligence-competency actions should you take? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** Sample recent summaries to estimate the fabrication frequency across the population.
- **B.** Treat the incident as an anecdotal isolated case and take no further investigative action.
- **C.** Disable the assistant immediately for all current users without any prior diagnostic analysis.
- ✅ **D.** Review whether citation-grounding controls exist anywhere in the current generation pipeline.
- **E.** Communicate to users that the assistant does not fabricate output as a matter of design.

**Answer:** A, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Review whether citation-grounding controls exist anywhere in the current generation pipeline.; Sample recent summaries to estimate the fabrication frequency across the population.

Kiểm tra citation grounding và lấy mẫu summary xác định vừa thiếu control vừa mức độ phổ biến, tránh kết luận toàn hệ thống từ một báo cáo.

#### Vì sao các phương án khác không phù hợp?

- **Disable the assistant immediately for all current users without any prior diagnostic analysis.**: Tắt mọi user ngay chưa có phân tích tác động/mức độ là phản ứng chưa có căn cứ.
- **Treat the incident as an anecdotal isolated case and take no further investigative action.**: Bỏ qua một sự cố có thể bỏ lỗi hệ thống.
- **Communicate to users that the assistant does not fabricate output as a matter of design.**: Khẳng định không bịa trái chính bằng chứng sự cố.

**Tham khảo:**

- [Claude — Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q11 · single choice · — not answered

A customer support team has proposed delegating customer refund decisions to a Claude-driven workflow with no human review for refunds under 50 USD. The team's reasoning is that small refunds are low-risk and human review would erase the efficiency gain.

Which Delegation-competency principle should quide your response?

- **A.** Delegation should always include human review on every decision the workflow produces.
- **B.** Delegation scope should be set primarily by maximizing efficiency gains across the workflow.
- ✅ **C.** Delegation scope should reflect the type of risk involved, not the transaction size alone.
- **D.** Delegation should be avoided entirely wherever financial transactions occur in the workflow.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delegation scope should reflect the type of risk involved, not the transaction size alone.

Phạm vi delegation phải xét loại rủi ro, quyền, khả năng đảo và tác động cộng dồn; 50 USD nhỏ không tự làm mọi refund an toàn.

#### Vì sao các phương án khác không phù hợp?

- **Delegation should be avoided entirely wherever financial transactions occur in the workflow.**: Cấm toàn bộ giao dịch tài chính bỏ lợi ích automation có kiểm soát.
- **Delegation should always include human review on every decision the workflow produces.**: Review mọi quyết định không phải yêu cầu chung cho mọi mức rủi ro.
- **Delegation scope should be set primarily by maximizing efficiency gains across the workflow.**: Efficiency đơn thuần không quyết định thẩm quyền và tác hại.

**Tham khảo:**

- [Anthropic — AI Fluency overview](https://www.anthropic.com/ai-fluency/overview)

</details>


---

## Q12 · single choice · ✔ you got it right

You must present an architectural recommendation to deploy a Claude-based contract review assistant to a steering committee that includes the CFO, the general counsel, and the CIO. Each stakeholder cares about different aspects of the decision.

How should you structure the recommendation document?

- **A.** Present the same dense narrative throughout with no stakeholder differentiation in any section.
- **B.** Lead with the technical architecture diagram and the full component list before any other section.
- **C.** Lead with detailed cost projections across the full multi-year horizon before the rationale section.
- ✅ **D.** Lead with the architectural decision, then address each stakeholder's primary concerns directly.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Lead with the architectural decision, then address each stakeholder's primary concerns directly.

Mở bằng quyết định rồi giải thích chi phí cho CFO, rủi ro/kiểm soát cho counsel và tích hợp cho CIO giúp từng người đánh giá đúng phần họ chịu trách nhiệm.

#### Vì sao các phương án khác không phù hợp?

- **Lead with detailed cost projections across the full multi-year horizon before the rationale section.**: Dự phóng chi phí trước rationale chưa phục vụ toàn bộ hội đồng.
- **Lead with the technical architecture diagram and the full component list before any other section.**: Diagram kỹ thuật trước mọi nội dung bỏ nhu cầu ra quyết định kinh doanh.
- **Present the same dense narrative throughout with no stakeholder differentiation in any section.**: Văn xuôi dày đồng nhất gây khó tìm mối quan tâm từng người.

**Tham khảo:**

- [Microsoft Well-Architected — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q13 · single choice · ✔ you got it right

You are investigating an MCP server that fails on first launch but succeeds on subsequent runs. System permission dialogs appeared during the first launch.

Which response is most appropriate?

- ✅ **A.** Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.
- **B.** Treat the first-run failure as a permanent fault, replace the MCP server, and do not verify whether subsequent runs succeed.
- **C.** Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs.
- **D.** Reinstall the operating system to clear all permission state without first confirming whether the one- time permission grant caused the failure.

**Answer:** A

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

Hệ điều hành hiện hộp thoại cấp quyền lúc khởi chạy; sau khi cấp thì những lần sau chạy được.

#### 2. Đề thực sự muốn gì?

first launch → lần đầu; subsequent runs succeed → lần sau thành công

#### 3. Đáp án

- **C. Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.**

#### 4. Vì sao đúng?

C phù hợp dấu hiệu quyền khởi tạo: xác nhận chạy lại ổn rồi ghi bước cấp quyền vào hướng dẫn onboarding. Đây là giả thuyết cần kiểm chứng, không kết luận chỉ từ một hộp thoại.

#### 5. Vì sao các phương án khác sai?

- **A:** thay server ngay bỏ qua trạng thái chỉ lỗi lần đầu.
- **B:** cài lại hệ điều hành quá rộng.
- **D:** tắt hộp thoại quyền làm yếu bảo mật mà không xác minh nguyên nhân.

#### 6. Câu thần chú

FIRST RUN + PERMISSION DIALOG → xác nhận quyền, ghi onboarding.

</details>


---

## Q14 · pick 2 · ✘ you got it wrong

You are producing an architecture guide for a new deployment and must complete the planning steps before drafting each section.

Which two steps must be completed BEFORE drafting each section of the guide? (Select two.) Each correct answer presents part of the solution.

- **A.** Translate the guide into the supported regional languages for the candidate population.
- ✅ **B.** Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.
- **C.** Validate the guide with the implementation team and incorporate corrections.
- ✅ **D.** Identify the audience and the questions the guide must answer for that audience.
- **E.** Establish the document under version control with a defined review cadence and approver list.

**Answer:** B, D · **Yours:** C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Identify the audience and the questions the guide must answer for that audience.; Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.

Xác định độc giả/câu hỏi và dàn ý overview–contracts–flows–runbooks–limits tạo phạm vi và cấu trúc trước khi viết từng phần.

#### Vì sao các phương án khác không phù hợp?

- **Translate the guide into the supported regional languages for the candidate population.**: Dịch thực hiện sau khi có nội dung cần dịch.
- **Establish the document under version control with a defined review cadence and approver list.**: Version/review hữu ích quản trị nhưng không thay chuẩn bị nội dung từng phần.
- **Validate the guide with the implementation team and incorporate corrections.**: Validate implementation thường cần bản nháp để xem và sửa.

**Tham khảo:**

- [Microsoft Well-Architected — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q15 · single choice · ✔ you got it right

You are responding to an adversarial input pattern in which users include text claiming admin authority and instructing the model to bypass safety restrictions.

Which combination of controls most effectively mitigates this attack pattern?

- **A.** Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs.
- **B.** Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification.
- **C.** Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging.
- ✅ **D.** Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.

Tách user content không tin cậy, runtime detection, quyền tool không nâng bằng text và audit tạo nhiều lớp chống giả admin.

#### Vì sao các phương án khác không phù hợp?

- **Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification.**: Tự xưng admin không phải xác thực quyền.
- **Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging.**: Tin model tự chống mọi tấn công thiếu các lớp cưỡng chế.
- **Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs.**: Bỏ mọi hạn chế thực hiện chính điều attacker muốn.

**Tham khảo:**

- [Claude — Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)

</details>


---

## Q16 · single choice · ✔ you got it right

You are a solution architect designing a Claude-based assistant with access to 60 internal tools across multiple business domains. Loading every tool definition on every request increases token usage and time to first response.

Which design pattern best addresses this issue without sacrificing capability breadth?

- **A.** Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability.
- ✅ **B.** Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.
- **C.** Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task.
- **D.** Use a separate model call to summarize all 60 tool definitions before each user turn.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.

Progressive discovery chỉ nạp tool cần cho tác vụ, giữ khả năng tới 60 tool mà giảm token định nghĩa và nhiễu chọn lựa mỗi request.

#### Vì sao các phương án khác không phù hợp?

- **Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability.**: Context dài hơn giữ nguyên chi phí nạp mọi tool.
- **Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task.**: Năm tool cố định có thể thiếu đúng khả năng tác vụ cần.
- **Use a separate model call to summarize all 60 tool definitions before each user turn.**: Tóm tắt mọi tool mỗi lượt thêm model call và dễ mất schema.

**Tham khảo:**

- [Claude — Tool search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)

</details>


---

## Q17 · single choice · ✔ you got it right

You are presenting an architectural decision to a mixed audience that includes an executive sponsor and the engineering leads who will implement the decision.

Which presentation strategy best serves both audiences?

- ✅ **A.** Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.
- **B.** Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it.
- **C.** Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs.
- **D.** Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.

Decision/outcome/trade-off trước giúp executive quyết định; kỹ thuật, alternatives và triển khai sau giúp engineering thực thi có căn cứ.

#### Vì sao các phương án khác không phù hợp?

- **Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs.**: Chỉ low-level bỏ mục tiêu và trade-off của sponsor.
- **Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it.**: Chỉ công bố quyết định không cho bằng chứng để đánh giá.
- **Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section.**: Một mức chi tiết cho mọi người làm cả hai khó tìm phần cần.

**Tham khảo:**

- [Microsoft Well-Architected — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q18 · pick 2 · ✔ you got it right

You are designing a test strategy for a Claude-based pipeline that handles sensitive financial data. 

Which two test types should be prioritized to cover both safety under attack and cross-component correctness? (Select two.)

- **A.** Smoke tests that verify core paths after each deployment.
- ✅ **B.** Adversarial tests using prompt-injection and malformed-input cases.
- **C.** Regression tests against a stable reference set of previously known-good outputs.
- **D.** Unit tests targeting only individual prompt-template rendering logic.
- ✅ **E.** Integration tests that verify end-to-end pipeline behavior across all components.

**Answer:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Integration tests that verify end-to-end pipeline behavior across all components.; Adversarial tests using prompt-injection and malformed-input cases.

Integration test kiểm tra hợp đồng xuyên component; adversarial injection/malformed input kiểm tra hành vi khi bị tấn công, bao phủ hai rủi ro khác nhau.

#### Vì sao các phương án khác không phù hợp?

- **Smoke tests that verify core paths after each deployment.**: Smoke chỉ xác nhận đường cơ bản, chưa kiểm tra liên kết sâu hoặc attack.
- **Unit tests targeting only individual prompt-template rendering logic.**: Unit prompt rendering quá hẹp cho hệ thống tài chính nhạy cảm.
- **Regression tests against a stable reference set of previously known-good outputs.**: Regression có ích nhưng bộ known-good không tự chứa tấn công mới.

**Tham khảo:**

- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [Claude — Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)

</details>


---

## Q19 · pick 2 · ✘ you got it wrong

You are running a risk assessment on a planned Claude-based deployment and must complete the inventory steps before assessing threats against assets. 

Which two steps must be completed BEFORE assessing threats against assets to estimate likelihood and impact? (Select two.) Each correct answer presents part of the solution.

- **A.** Recommend mitigations and residual-risk acceptance for risks that remain.
- **B.** Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners.
- ✅ **C.** Identify the assets that the deployment touches, along with the sensitivity of each asset.
- ✅ **D.** Enumerate the threat actors and attack vectors relevant to the deployment.
- **E.** Recommend mitigations and residual-risk acceptance for the risks that remain after analysis.

**Answer:** C, D · **Yours:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Enumerate the threat actors and attack vectors relevant to the deployment.; Identify the assets that the deployment touches, along with the sensitivity of each asset.

Cần biết tài sản và độ nhạy để xác định cái gì có thể bị hại, đồng thời liệt kê tác nhân và đường tấn công để xác định hại xảy ra bằng cách nào. Khi đã có hai danh mục này mới ghép mối đe dọa với tài sản và ước lượng khả năng, tác động một cách có căn cứ.

#### Vì sao các phương án khác không phù hợp?

- **Recommend mitigations and residual-risk acceptance for the risks that remain after analysis.**: Đề xuất giảm thiểu và chấp nhận rủi ro còn lại cần biết rủi ro nào đáng xử lý, nên thuộc sau bước phân tích được hỏi.
- **Recommend mitigations and residual-risk acceptance for risks that remain.**: Khuyến nghị giảm thiểu và chấp nhận phần rủi ro còn lại cũng là đầu ra sau đánh giá, không cung cấp danh mục ban đầu để đánh giá.
- **Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners.**: Hồ sơ kết quả và người nhận rủi ro cần dựa trên kết quả phân tích; lập chúng không thay cho nhận diện tài sản và đường tấn công.

**Tham khảo:**

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q20 · pick 2 · ✘ you got it wrong

A senior architect is managing stakeholder expectations for a Claude-based reporting assistant midway through development. Stakeholders have escalating concerns about response latency. 

Which two actions most directly address stakeholder expectation alignment in this situation? (Select two.)

- ✅ **A.** Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.
- ✅ **B.** Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.
- **C.** Communicate that latency concerns are a known LLM limitation and outside the architecture team's control.
- **D.** Pause all development and reallocate engineering resources entirely to latency optimization.
- **E.** Replace the current Claude model with a third-party model that may offer lower latency without evaluation.

**Answer:** A, B · **Yours:** A, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.; Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.

p50/p95 so SLA đưa bằng chứng trải nghiệm thường và đuôi trễ; cùng điều chỉnh SLA nếu giới hạn production không đáp ứng giữ kỳ vọng thực tế.

#### Vì sao các phương án khác không phù hợp?

- **Replace the current Claude model with a third-party model that may offer lower latency without evaluation.**: Đổi provider chưa eval không chứng minh đáp ứng chất lượng/latency.
- **Pause all development and reallocate engineering resources entirely to latency optimization.**: Dừng mọi phát triển là quyết định nguồn lực quá mức chưa có dữ liệu.
- **Communicate that latency concerns are a known LLM limitation and outside the architecture team's control.**: Nói ngoài tầm kiểm soát bỏ các lựa chọn kiến trúc và thương lượng SLA.

**Tham khảo:**

- [Google SRE Workbook — Implementing SLOs](https://sre.google/workbook/implementing-slos/)

</details>


---

## Q21 · pick 2 · ✔ you got it right

A Claude architect is designing a HIPAA-compliant pipeline that processes patient records. 

Which two design decisions directly support HIPAA compliance requirements? (Select two.)

- ✅ **A.** Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.
- **B.** Setting max _ tokens to a low value to minimize the volume of text generated per request.
- ✅ **C.** Enforcing role-based access controls so that PH is retrievable only by authorized personnel.
- **D.** Selecting the highest-capability Claude model to maximize diagnostic accuracy.
- **E.** Using streaming responses to reduce perceived latency for clinical users.

**Answer:** A, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Enforcing role-based access controls so that PH is retrievable only by authorized personnel.; Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.

Kiểm soát theo vai trò giới hạn ai được lấy thông tin bệnh nhân, trực tiếp hỗ trợ giới hạn truy cập dữ liệu nhạy cảm. Việc ngăn gửi dữ liệu bệnh nhân vào vòng phản hồi huấn luyện khi chưa có thỏa thuận phù hợp tránh một đường tiết lộ không được thẩm định. “PH” trong đề có vẻ là PHI; có BAA vẫn không tự cho phép dùng PHI để huấn luyện, còn phải xét mục đích được phép và điều khoản.

#### Vì sao các phương án khác không phù hợp?

- **Setting max _ tokens to a low value to minimize the volume of text generated per request.**: Giảm max_tokens giới hạn độ dài đầu ra chứ không xác thực người nhận hoặc kiểm soát việc chuyển dữ liệu bệnh nhân.
- **Selecting the highest-capability Claude model to maximize diagnostic accuracy.**: Mô hình mạnh hơn có thể cải thiện nội dung nhưng không cung cấp cơ chế phân quyền hoặc cơ sở cho việc chia sẻ PHI.
- **Using streaming responses to reduce perceived latency for clinical users.**: Streaming thay đổi thời điểm hiển thị câu trả lời, không quyết định người xem có được phép truy cập dữ liệu hay không.

**Cần xem lại:** Giữ khóa nguồn; “PH” có vẻ là lỗi OCR của PHI. Cách viết về BAA có thể khiến người đọc hiểu BAA đủ để cho phép training; cần thẩm định mục đích sử dụng và điều khoản cụ thể.

**Tham khảo:**

- [HHS: Summary of the HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html)
- [HHS: Business Associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html)

</details>


---

## Q22 · single choice · ✔ you got it right

You are preparing an operational runbook for a Claude-based service. 

Which content is essential to include in the runbook?

- ✅ **A.** Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.
- **B.** Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on.
- **C.** Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response.
- **D.** Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.

Runbook phải biến cảnh báo thành hành động: cách phân loại và chẩn đoán ban đầu, khi nào chuyển cấp, cách quay lui và nơi tìm bằng chứng trên dashboard hoặc log. Kết hợp đủ các mục giúp người trực xử lý cả sự cố quen thuộc lẫn tình huống cần hỗ trợ thêm.

#### Vì sao các phương án khác không phù hợp?

- **Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on.**: Chỉ có liên kết dashboard và log cho biết nơi xem dữ liệu nhưng thiếu hướng dẫn quyết định và khắc phục.
- **Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use.**: Định nghĩa cảnh báo và triage giúp bắt đầu nhưng không chỉ cách chuyển cấp hoặc khôi phục khi triage không đủ.
- **Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response.**: Chuyển cấp và rollback chưa chỉ cách nhận diện cảnh báo, kiểm tra triệu chứng hay chọn đúng thời điểm thực hiện.

**Tham khảo:**

- [Google SRE: On-Call](https://sre.google/workbook/on-call/)

</details>


---

## Q23 · pick 2 · ✘ you got it wrong

A technical team is cataloguing risks specific to Claude's use in a document-grounded Q & A system. 

Which two items represent failure modes intrinsic to LLM-based systems rather than generic software defects? (Select two.)

- ✅ **A.** The model refuses a legitimate query because surface features trigger an overly broad safety pattern.
- **B.** A misconfigured load balancer routes requests to a deprecated API version.
- **C.** An expired TLS certificate blocks outbound API calls to Claude.
- ✅ **D.** The model generates a plausible-sounding answer unsupported by any retrieved document.
- **E.** A database connection timeout causes retrieval to return an empty result set.

**Answer:** A, D · **Yours:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The model refuses a legitimate query because surface features trigger an overly broad safety pattern.; The model generates a plausible-sounding answer unsupported by any retrieved document.

Từ chối nhầm truy vấn hợp lệ xuất phát từ cách mô hình khái quát hóa mẫu an toàn. Tạo câu trả lời nghe hợp lý nhưng không có nguồn là lỗi sinh nội dung không được grounding. Cả hai gắn với hành vi suy luận và sinh ngôn ngữ, dù các biện pháp kiến trúc có thể giảm chúng.

#### Vì sao các phương án khác không phù hợp?

- **An expired TLS certificate blocks outbound API calls to Claude.**: Chứng chỉ TLS hết hạn là lỗi vận hành kết nối có thể xảy ra với bất kỳ API nào, không cần có mô hình ngôn ngữ.
- **A database connection timeout causes retrieval to return an empty result set.**: Timeout cơ sở dữ liệu là lỗi phụ thuộc hạ tầng; ứng dụng truy xuất thông thường cũng gặp được.
- **A misconfigured load balancer routes requests to a deprecated API version.**: Load balancer trỏ sai phiên bản là lỗi cấu hình định tuyến phần mềm, không phải hành vi sinh hoặc từ chối của LLM.

**Tham khảo:**

- [Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
- [NIST AI Risks and Trustworthiness](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)

</details>


---

## Q24 · pick 2 · ✔ you got it right

You are rolling out monitoring for a Claude-based deployment and must complete the specification steps efore instrumenting the deployment. 

Which two steps must be completed BEFORE instrumenting the deployment to emit metrics and traces? (Select two.) Each correct answer presents part of the solution.

- **A.** Document the dashboards, alerts, and runbooks for the on-call rotation that will respond.
- ✅ **B.** Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.
- **C.** Tune the alert thresholds based on observed normal-state distributions to reduce false positives.
- **D.** Build the dashboards that surface metrics across slices at the cadence the team operates on.
- ✅ **E.** Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.

**Answer:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.; Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.

Xác định metric và các lát dữ liệu cần theo dõi trước giúp instrumentation thu đúng tín hiệu ở cả lưu lượng thường và đối kháng. SLO cùng error budget xác định mức dịch vụ cần bảo vệ và mức sai lệch có thể chấp nhận, để việc đo có mục đích vận hành rõ ràng.

#### Vì sao các phương án khác không phù hợp?

- **Tune the alert thresholds based on observed normal-state distributions to reduce false positives.**: Tinh chỉnh ngưỡng theo phân bố bình thường cần dữ liệu quan sát đã thu; nó phụ thuộc instrumentation thay vì hoàn tất trước đó.
- **Build the dashboards that surface metrics across slices at the cadence the team operates on.**: Dashboard có thể được phác thảo sớm nhưng việc hiển thị metric thực tế phụ thuộc tín hiệu đã được định nghĩa và phát ra.
- **Document the dashboards, alerts, and runbooks for the on-call rotation that will respond.**: Tài liệu dashboard, cảnh báo và runbook phải bám vào hệ thống quan sát được triển khai; nó không xác định ban đầu phải đo gì.

**Tham khảo:**

- [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)

</details>


---

## Q25 · single choice · ✔ you got it right

A document analysis service processes legal filings averaging 80,000 tokens each. Each filing is queried by attorneys an average of 14 times during a case. The current architecture sends the full filing on every query. The CFO has asked you to reduce per-query costs while preserving response quality. The security officer requires that filing contents not be stored outside Fabrikam's tenancy. 

Which optimization approach should you recommend?

- **A.** Summarize each filing once at intake and run all subsequent queries against the summary.
- ✅ **B.** Cache the filing as the prompt prefix for reuse across the 14 queries per case.
- **C.** Index filings in a vector store and retrieve only the relevant passages per query.
- **D.** Move the workload to a smaller Claude model to reduce the per-token cost paid.

**Answer:** B

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

Một hồ sơ 80.000 token được hỏi khoảng 14 lần; cần giảm xử lý lặp nhưng giữ nguyên chi tiết pháp lý.

#### 2. Đề thực sự muốn gì?

reused filing → hồ sơ dùng lại; preserving quality → giữ chất lượng; not stored outside tenancy → không lưu ngoài ranh giới tenant; Từ hạn định trong đề: not

#### 3. Đáp án

- **B. Cache the filing as the prompt prefix for reuse across the 14 queries per case.**

#### 4. Vì sao đúng?

Theo nguồn, B dùng prefix cache cho cùng nội dung thay vì tóm lược hoặc đổi model. Cache tái sử dụng tính toán phần đầu; vẫn cần kiểm tra TTL, cache hit và nơi xử lý. Đề thiếu nền tảng triển khai nên chưa chứng minh B thỏa ranh giới tenancy.

#### 5. Vì sao các phương án khác sai?

- **A:** tóm tắt có thể bỏ điều khoản quan trọng.
- **C:** RAG có thể bỏ sót ngữ cảnh nhưng vector store nội bộ KHÔNG mặc nhiên vi phạm tenancy; lý do loại C của nguồn chưa chặt.
- **D:** model nhỏ chưa được chứng minh giữ chất lượng.

#### 6. Câu thần chú

TÀI LIỆU LẶP → xét prefix cache; TENANCY → kiểm tra riêng.

</details>


---

## Q26 · single choice · ✔ you got it right

When communicating an architectural decision to a security and compliance reviewer, which content set is most aligned with that audience's primary concerns?

- **A.** Decision rationale, business outcomes, and high-level risk summary for executive review.
- **B.** Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager.
- **C.** Implementation timeline, component interfaces, and deployment sequence for the engineering team.
- ✅ **D.** Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.

Threat model cho biết nguy cơ nào được xét; ánh xạ kiểm soát chỉ cách xử lý từng nguy cơ. Tiêu chí chấp nhận rủi ro còn lại và dấu vết kiểm toán giúp người duyệt xác định ai chịu trách nhiệm và có bằng chứng nào để xác minh tuân thủ. Đây là nội dung gắn trực tiếp với nhiệm vụ an ninh và compliance.

#### Vì sao các phương án khác không phù hợp?

- **Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager.**: Lịch tính năng và phụ thuộc roadmap phục vụ quản lý sản phẩm nhưng không cho biết kiểm soát bảo mật có đáp ứng nghĩa vụ hay không.
- **Implementation timeline, component interfaces, and deployment sequence for the engineering team.**: Timeline, interface và thứ tự triển khai hữu ích cho kỹ sư nhưng thiếu ánh xạ rủi ro, kiểm soát và chứng cứ kiểm toán.
- **Decision rationale, business outcomes, and high-level risk summary for executive review.**: Tóm lược kinh doanh cho lãnh đạo quá cao cấp để người duyệt compliance kiểm tra từng kiểm soát và rủi ro còn lại.

**Tham khảo:**

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q27 · single choice · ✔ you got it right

You are integrating Claude Code into a workflow that runs against a production database. 

Which guardrail design most directly preserves safety on data-modifying operations?

- **A.** Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications.
- **B.** Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations.
- **C.** Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation.
- ✅ **D.** Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.

Thông tin đăng nhập chỉ đọc ở MCP tạo giới hạn ngay tại cơ sở dữ liệu; danh sách công cụ chỉ đọc của subagent thu hẹp thao tác được đề xuất. Khi cần sửa dữ liệu, phải có luồng được người có thẩm quyền xác nhận và quyền ghi thích hợp riêng biệt; xác nhận không tự biến credential chỉ đọc thành credential ghi.

#### Vì sao các phương án khác không phù hợp?

- **Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations.**: Ghi thẳng production không giới hạn hoặc phê duyệt khiến một quyết định sai có thể sửa dữ liệu thật ngay.
- **Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation.**: Credential toàn quyền cho mọi thao tác không tạo giới hạn thiệt hại và bỏ mất cổng xác nhận cho thay đổi dữ liệu.
- **Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications.**: Tắt audit chỉ làm mất bằng chứng thao tác; nó không ngăn ghi sai và khiến phát hiện, truy vết khó hơn.

**Tham khảo:**

- [Configure permissions](https://code.claude.com/docs/en/permissions)
- [Create custom subagents](https://code.claude.com/docs/en/sub-agents)

</details>


---

## Q28 · single choice · ✔ you got it right

You are identifying signals that a deployment should re-enter design rather than continue iterating in place. 

Which signal most directly indicates the need for a new design cycle?

- **A.** A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle.
- ✅ **B.** The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.
- **C.** A minor copy edit is requested in a customer-facing string within the existing Ul, which can be handled as a localized content change without altering component responsibilities or contracts.
- **D.** A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.

Khi yêu cầu mới buộc thay trách nhiệm thành phần hoặc hợp đồng cốt lõi, giả định thiết kế cũ không còn đủ. Mở chu kỳ thiết kế mới cho phép đánh giá lại ranh giới, luồng và đánh đổi trước khi sửa từng phần làm các thành phần mất nhất quán.

#### Vì sao các phương án khác không phù hợp?

- **A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts.**: Làm rõ một bước runbook sửa hướng dẫn vận hành trong kiến trúc hiện có, không tự đòi thay hợp đồng thành phần.
- **A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle.**: Điều chỉnh nhỏ ngưỡng cảnh báo là tuning cấu hình dựa trên tín hiệu vận hành, chưa cho thấy kiến trúc không còn đáp ứng yêu cầu.
- **A minor copy edit is requested in a customer-facing string within the existing Ul, which can be handled as a localized content change without altering component responsibilities or contracts.**: Sửa câu chữ giao diện tại chỗ không thay trách nhiệm hay giao tiếp thành phần nên phù hợp vòng lặp hiện tại.

**Tham khảo:**

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q29 · single choice · ✔ you got it right

You are reviewing a peer's Claude Code permission rules for an enterprise rollout. The rules grant unrestricted Bash access to all projects across all developers. 

Which response is most appropriate?

- **A.** Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency.
- ✅ **B.** Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.
- **C.** Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add nfiguration complexity, accepting the full attack surface for all engineers across all projects.
- **D.** Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.

Allow pattern lệnh cần thiết và deny thao tác nhạy cảm giảm bề mặt Bash so với mọi lệnh mọi project, giữ quyền tương xứng công việc.

#### Vì sao các phương án khác không phù hợp?

- **Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency.**: Mở thêm tool làm tăng bề mặt thay vì sửa vấn đề.
- **Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add nfiguration complexity, accepting the full attack surface for all engineers across all projects.**: Tiện cấu hình không bù rủi ro quyền không giới hạn.
- **Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations.**: Tắt rule bỏ toàn bộ kiểm soát quyền.

**Tham khảo:**

- [Claude Code — Permissions](https://code.claude.com/docs/en/permissions)

</details>


---

## Q30 · single choice · ✘ you got it wrong

A solutions architect is analyzing stakeholder feedback collected after the first quarter of a Claude-powered procurement automation deployment. The feedback includes four statements: 

(1) "Our procurement team is processing 3x more purchase orders per analyst per day. " 

(2) "We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management. " 

(3) "The API integration costs are running 40% over the projected per-transaction budget. " 

(4) "Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA. " 

Which of the following correctly identifies the primary business value pillar each stakeholder statement represents?

- ✅ **A.** 
  - Statement 1: Efficiency; 
  - Statement 2: Transformation; 
  - Statement 3: Solution Cost; 
  - Statement 4:Performance SLA
- **B.** 
  - Statement 1: Productivity; 
  - Statement 2: Efficiency; 
  - Statement 3: Solution Cost; 
  - Statement 4:Performance SLA
- **C.** 
  - Statement 1: Efficiency; 
  - Statement 2: Productivity; 
  - Statement 3: Performance SLA; 
  - Statement 4:Solution Cost
- **D.** 
  - Statement 1: Transformation; 
  - Statement 2: Productivity; 
  - Statement 3: Solution Cost; 
  - Statement 4:Efficiency

**Answer:** A · **Yours:** B

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

Báo cáo nói số đơn tăng, đổi vai trò nhân sự, vượt ngân sách và chậm hơn cam kết; mỗi việc mô tả một mặt khác nhau.

#### 2. Đề thực sự muốn gì?

primary business value pillar → trụ cột giá trị chính; committed SLA → cam kết hiệu năng

#### 3. Đáp án

- **A. Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4:Performance SLA**

#### 4. Vì sao đúng?

Theo cách gán nhãn của nguồn: (1) Efficiency, (2) Transformation, (3) Solution Cost, (4) Performance SLA. Đổi vai trò là chuyển đổi; tiền vượt là chi phí; 11 giây so 5 giây là SLA. Nhãn (1) có giao thoa Productivity; đừng học thành định nghĩa tuyệt đối.

#### 5. Vì sao các phương án khác sai?

- **B:** (2) là đổi cách tổ chức, không chỉ tiết kiệm thao tác.
- **C:** (1) chưa mô tả chuyển đổi và (4) rõ là SLA.
- **D:** tráo chi phí với SLA ở (3)/(4), đồng thời bỏ thay đổi vai trò ở (2).

#### 6. Câu thần chú

ĐỔI CÁCH LÀM → transformation; TIỀN → cost; CAM KẾT THỜI GIAN → SLA.

</details>


---

## Q31 · pick 2 · ✔ you got it right

An operations engineer reports that a Claude-based pipeline began returning malformed JSON responses after a scheduled maintenance window, causing downstream processing failures. 

Which two investigative steps most directly isolate the root cause? (Select two.)

- **A.** Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes.
- ✅ **B.** Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.
- ✅ **C.** Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing.
- **D.** Increase the max _ tokens limit to determine whether output truncation is causing incomplete JSON structures.
- **E.** Switch to a different Claude model tier to rule out provider-side changes as a contributing factor.

**Answer:** B, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.; Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing.

Đối chiếu system prompt và schema với phiên bản hoạt động trước bảo trì tìm ra cấu hình đã thay đổi đúng thời điểm lỗi xuất hiện. Phát lại yêu cầu cũ và xem đầu ra thô trước parser giúp phân biệt mô hình sinh JSON sai, bị cắt ngắn hay bộ xử lý sau làm hỏng dữ liệu. Hai bước tạo bằng chứng trước khi thay thành phần.

#### Vì sao các phương án khác không phù hợp?

- **Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes.**: Xóa cache không xác định thay đổi nào gây JSON lỗi; cache prompt không phải bộ lưu câu trả lời để xóa là sửa đầu ra. API cũng không cung cấp thao tác xóa thủ công cache prefix.
- **Switch to a different Claude model tier to rule out provider-side changes as a contributing factor.**: Đổi model tier thay thêm một biến trước khi so sánh cấu hình, nên khó quy lỗi cho thay đổi xảy ra trong bảo trì.
- **Increase the max _ tokens limit to determine whether output truncation is causing incomplete JSON structures.**: Tăng max_tokens hợp lý nếu đầu ra thô và stop_reason cho thấy cắt ngắn; chưa có dấu hiệu đó thì đây là giả thuyết cần kiểm chứng, không phải bước cô lập đầu tiên tốt nhất.

**Tham khảo:**

- [Google SRE: Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/)
- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- [Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

</details>


---

## Q32 · pick 2 · ✔ you got it right

You are compiling a diagnostic toolkit for Claude Code operational issues. 

Which two diagnostic actions belong in the toolkit? (Select two.) Each correct answer presents a complete solution.

- **A.** File a support ticket with vendor support before any local reproduction or evidence collection.
- ✅ **B.** List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.
- **C.** Increase the model sampling temperature so that intermittent issues surface more frequently for analysis.
- ✅ **D.** Reproduce the issue with a minimal reproduction case that isolates one variable at a time.
- **E.** Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific.

**Answer:** B, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Reproduce the issue with a minimal reproduction case that isolates one variable at a time.; List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.

Một ca tái hiện tối giản giảm yếu tố gây nhiễu và cho phép thay từng biến để quan sát nguyên nhân. Liệt kê MCP server và kiểm tra trạng thái kết nối xác minh lớp công cụ có thật sự sẵn sàng. Hai hành động tạo dữ liệu chẩn đoán trực tiếp cho lỗi Claude Code thay vì đoán hoặc sửa đồng thời nhiều biến.

#### Vì sao các phương án khác không phù hợp?

- **Increase the model sampling temperature so that intermittent issues surface more frequently for analysis.**: Tăng temperature thay đổi tính ngẫu nhiên của đầu ra nhưng không làm lỗi kết nối hoặc cấu hình dễ cô lập một cách có kiểm soát.
- **File a support ticket with vendor support before any local reproduction or evidence collection.**: Support có thể cần sau đó; gửi yêu cầu trước khi có tái hiện và bằng chứng thường thiếu dữ liệu để phân biệt nguyên nhân.
- **Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific.**: Rollback có thể là thử nghiệm hữu ích nếu nghi phiên bản, nhưng làm ngay trước khi thu bằng chứng có thể mất trạng thái lỗi và chưa cô lập được biến.

**Tham khảo:**

- [Google SRE: Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/)
- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)

</details>


---

## Q33 · single choice · ✔ you got it right

You are assessing data-exfiltration risk in a Claude-based assistant that has tools for both internal-document retrieval and outbound HTTP calls. 

Which scenario most directly indicates a data-exfiltration risk?

- **A.** The internal-document retrieval tool returns a document that the user is authorized to view.
- **B.** The user submits a routine question and receives a routine answer.
- **C.** The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request.
- ✅ **D.** Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.

Tài liệu truy xuất chứa chỉ dẫn gửi nội dung nhạy cảm tới URL của kẻ tấn công tạo chuỗi từ dữ liệu nội bộ qua công cụ HTTP ra ngoài. Đây là prompt injection gián tiếp nhằm exfiltration: nội dung tài liệu cố vượt ranh giới từ dữ liệu sang mệnh lệnh sử dụng công cụ.

#### Vì sao các phương án khác không phù hợp?

- **The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request.**: HTTP 200 từ miền được cho phép trong tra cứu do người dùng yêu cầu chỉ cho biết gọi thành công; tự nó chưa có dấu hiệu gửi dữ liệu nhạy cảm sai mục đích.
- **The user submits a routine question and receives a routine answer.**: Hỏi đáp bình thường không mô tả đường chuyển dữ liệu nội bộ tới người nhận không được phép.
- **The internal-document retrieval tool returns a document that the user is authorized to view.**: Truy xuất tài liệu mà người dùng được phép xem là truy cập được ủy quyền; rủi ro nêu trong đáp án cần thêm bước gửi ra ngoài sai quyền.

**Tham khảo:**

- [Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)

</details>


---

## Q34 · single choice · ✔ you got it right

After a prompt-template update, several previously passing test cases now produce unexpected outputs. 

Which test type is specifically designed to detect this category of failure?

- ✅ **A.** Regression tests scored against a stable reference set of known-good behavior.
- **B.** Smoke tests that confirm high-level system availability after the change.
- **C.** Integration tests that validate cross-component pipeline behavior.
- **D.** Adversarial tests that probe for prompt-injection vulnerabilities.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Regression tests scored against a stable reference set of known-good behavior.

Regression test chạy lại tập hành vi đã được chấp nhận sau khi prompt đổi, rồi chấm theo tiêu chí ổn định để thấy trường hợp từng đạt nay bị lỗi. Với LLM, nên đánh giá ý nghĩa và tiêu chí nhiệm vụ thay vì đòi chuỗi văn bản giống hệt nếu nhiệm vụ cho phép nhiều cách diễn đạt.

#### Vì sao các phương án khác không phù hợp?

- **Integration tests that validate cross-component pipeline behavior.**: Integration test tập trung vào phối hợp giữa thành phần; có thể phát hiện hồi quy nhưng không phải loại được định nghĩa riêng để giữ hành vi cũ.
- **Adversarial tests that probe for prompt-injection vulnerabilities.**: Adversarial test thăm dò cách hệ thống bị tấn công, trong khi đề nói trường hợp bình thường từng đạt bị hỏng sau thay prompt.
- **Smoke tests that confirm high-level system availability after the change.**: Smoke test kiểm tra dịch vụ và đường chính còn hoạt động; hệ thống vẫn có thể qua smoke test dù nhiều kết quả cũ đã sai.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q35 · single choice · ✔ you got it right

You are identifying the highest-impact optimization for a deployment whose token cost is dominated by a long, repeated system prompt and a large retrieved context per request. 

Which optimization most directly targets the dominant cost driver?

- ✅ **A.** Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.
- **B.** Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them.
- **C.** Add additional repeated content to the system prompt to give the model more guidance.
- **D.** Switch every request to the heaviest available model to maximize output quality, accepting that higher per- request inference cost compounds rather than addresses the dominant cost driver.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.

Cache prefix system lặp và trim retrieval theo spans liên quan đánh trực tiếp hai nguồn token lớn, giữ bằng chứng cần thay vì thêm context.

#### Vì sao các phương án khác không phù hợp?

- **Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them.**: Retrieval sâu hơn tăng nguồn chi phí đang trội.
- **Add additional repeated content to the system prompt to give the model more guidance.**: Thêm nội dung lặp tăng chi phí system.
- **Switch every request to the heaviest available model to maximize output quality, accepting that higher per- request inference cost compounds rather than addresses the dominant cost driver.**: Model nặng hơn tăng đơn giá mà chưa giảm token thừa.

**Tham khảo:**

- [Claude — Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

</details>


---

## Q36 · single choice · ✔ you got it right

You are designing a feedback session for a deployment in flight. 

Which structure best supports productive stakeholder feedback?

- ✅ **A.** Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.
- **B.** Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real timewithout preparation before the discussion begins.
- **C.** End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session's outcomes forward.
- **D.** Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants' memory to carry decisions and follow-up owners forward.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.

Agenda tập trung xác định quyết định cần góp ý; gửi tài liệu trước cho người tham gia thời gian đọc và chuẩn bị phản hồi. Ghi quyết định, việc tiếp theo, người phụ trách và ngày hoàn tất biến thảo luận thành các hành động có thể theo dõi, giảm hiểu khác nhau sau buổi họp.

#### Vì sao các phương án khác không phù hợp?

- **Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants' memory to carry decisions and follow-up owners forward.**: Không agenda hay tài liệu trước khiến buổi họp dễ trôi khỏi mục tiêu; dựa trí nhớ còn làm mất quyết định và trách nhiệm.
- **Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real timewithout preparation before the discussion begins.**: Phát tài liệu lúc bắt đầu lấy mất thời gian chuẩn bị, buộc người tham gia vừa đọc vừa đưa nhận xét thay vì cân nhắc trước.
- **End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session's outcomes forward.**: Không ghi kết quả, chủ sở hữu và hạn làm việc tiếp theo khó được thực hiện và kiểm tra.

**Tham khảo:**

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q37 · pick 2 · ✘ you got it wrong

A loan pre-qualification assistant shows 94 percent approval recommendations that match the human underwriter decision. The fairness team has reviewed approval rate parity across protected groups and reported no significant difference. A board member has asked whether this evidence is sufficient to declare the assistant fair. 

Which two Discernment-competency findings should you report? (Select two.) Each correct answer presents part of the solution.

- **A.** The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions.
- **B.** The fairness team's review process likely missed at least some of the protected groups studied.
- ✅ **C.** Match with human underwriters does not establish freedom from underwriter-introduced bias.
- ✅ **D.** Approval rate parity does not by itself assess error rate parity across protected groups.
- **E.** A larger sample is needed before any meaningful fairness claim can be made about the model.

**Answer:** C, D · **Yours:** C, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Approval rate parity does not by itself assess error rate parity across protected groups.; Match with human underwriters does not establish freedom from underwriter-introduced bias.

Approval parity không đo false-positive/false-negative parity; khớp underwriter cũng có thể sao lại bias người thật. Hai chỉ số hiện tại chưa đủ tuyên bố fair.

#### Vì sao các phương án khác không phù hợp?

- **The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions.**: 94% agreement là accuracy theo nhãn tham chiếu, không bảo đảm fairness.
- **The fairness team's review process likely missed at least some of the protected groups studied.**: Không có bằng chứng fairness team bỏ nhóm nào.
- **A larger sample is needed before any meaningful fairness claim can be made about the model.**: Đề không cho sample size nên không thể kết luận cần lớn hơn là nguyên nhân chính.

**Tham khảo:**

- [NIST — AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)

</details>


---

## Q38 · single choice · ✔ you got it right

You are an architect supporting the iteration phase of a deployed Claude-based system. 

Which activity most directly fits this phase?

- **A.** Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed.
- **B.** Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle.
- ✅ **C.** Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest- impact change for the next cycle, then plan the change against the evaluation framework.
- **D.** Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest- impact change for the next cycle, then plan the change against the evaluation framework.

Trong giai đoạn lặp, telemetry cho biết hệ thống đang vận hành thế nào, đánh giá mẫu cho biết chất lượng đầu ra, còn phản hồi cho biết nhu cầu thực tế. Dùng ba nguồn để chọn thay đổi có tác động cao nhất rồi đo lại bằng khung đánh giá tạo vòng cải tiến có căn cứ.

#### Vì sao các phương án khác không phù hợp?

- **Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed.**: Xây lại kiến trúc mỗi vòng không phụ thuộc bằng chứng gây chi phí và rủi ro không cần thiết; chỉ thiết kế lại khi yêu cầu hoặc giới hạn kiến trúc đòi hỏi.
- **Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle.**: Ngừng đo sau go-live làm mất tín hiệu drift, lỗi và giá trị thực tế cần để chọn bước cải tiến.
- **Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes.**: Bỏ reference set và khung đánh giá khiến không có cơ sở nhất quán để biết phiên bản sau tốt hơn hay làm hỏng hành vi cũ.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q39 · single choice · ✔ you got it right

You are explaining the precedence of Claude Code configuration scopes to the team. 

Which precedence ordering, from highest to lowest, is correct?

- **A.** User # project # local # command-line arguments # managed
- ✅ **B.** Managed # command-line arguments # local # project # user
- **C.** Project # user # managed # local # command-line arguments
- **D.** Local # managed # user # command-line arguments # project

**Answer:** B

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

Một khóa có nhiều giá trị ở nhiều nơi; cần biết lớp nào thắng theo thứ bậc chung.

#### 2. Đề thực sự muốn gì?

highest to lowest → từ cao xuống thấp; precedence → ưu tiên

#### 3. Đáp án

- **C. Managed # command-line arguments # local # project # user**

#### 4. Vì sao đúng?

C: Managed → command-line → local → project → user. Quy tắc chung này dùng để hiểu nguồn thiết lập; danh sách có thể được gộp và permission deny có quy tắc riêng, không áp dụng ghi đè đơn giản cho mọi khóa.

#### 5. Vì sao các phương án khác sai?

- **A:** đặt managed thấp hơn local sai thứ bậc.
- **B:** project không cao hơn managed.
- **D:** user không có ưu tiên cao nhất.

#### 6. Câu thần chú

MANAGED > CLI > LOCAL > PROJECT > USER.

</details>


---

## Q40 · single choice · ✔ you got it right

A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents. 

Which mitigation is most directly targeted at this failure mode?

- ✅ **A.** Constrain responses to source-supported content, require citations, and add a verification step.
- **B.** Score each new model version against a stable adversarial evaluation set.
- **C.** Treat retrieved data as untrusted and apply input classifiers at ingestion time.
- **D.** Replace the shared API key with per-user Auth tokens to restrict data access.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Constrain responses to source-supported content, require citations, and add a verification step.

Chỉ cho claim có nguồn, dẫn citation và verify đối chiếu tài liệu trực tiếp nhắm hallucination sau upgrade; eval để phát hiện, không tự sửa output.

#### Vì sao các phương án khác không phù hợp?

- **Score each new model version against a stable adversarial evaluation set.**: Eval adversarial đo regression nhưng không trực tiếp ràng buộc câu trả lời.
- **Replace the shared API key with per-user Auth tokens to restrict data access.**: Auth token kiểm soát truy cập, không độ đúng của claim.
- **Treat retrieved data as untrusted and apply input classifiers at ingestion time.**: Input classifier nhắm injection, khác hallucination không có nguồn.

**Tham khảo:**

- [Claude — Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

</details>


---

## Q41 · single choice · ✔ you got it right

You are distinguishing functional from non-functional requirements during discovery. 

Which item is a non-functional requirement?

- ✅ **A.** The system must respond at p95 latency under 800 milliseconds at the expected request volume.
- **B.** The system must classify inbound tickets into a defined set of categories.
- **C.** The system must produce a draft response that a human reviewer can edit before sending.
- **D.** The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The system must respond at p95 latency under 800 milliseconds at the expected request volume.

Yêu cầu p95 dưới 800 ms ở lưu lượng dự kiến mô tả chất lượng thực thi của hệ thống khi có tải, không phải một chức năng xử lý nghiệp vụ mới. Điều kiện lưu lượng làm tiêu chí đo có ý nghĩa, vì cùng mô hình có thể đáp ứng khác nhau dưới mức tải khác nhau.

#### Vì sao các phương án khác không phù hợp?

- **The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.**: Trích xuất trường hóa đơn và tạo bản ghi mô tả hệ thống phải làm gì với đầu vào, nên là chức năng.
- **The system must produce a draft response that a human reviewer can edit before sending.**: Tạo bản nháp cho người sửa xác định một khả năng và bước của quy trình làm việc, nên là chức năng.
- **The system must classify inbound tickets into a defined set of categories.**: Phân loại ticket vào danh mục xác định là thao tác nghiệp vụ mà hệ thống phải thực hiện, nên là chức năng.

**Tham khảo:**

- [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)

</details>


---

## Q42 · single choice · ✔ you got it right

You are integrating Claude Code into the team's pull-request workflow. The team wants Al-assisted review without removing human approval. 

Which integration design best fits this requirement?

- **A.** Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate.
- **B.** Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author.
- ✅ **C.** Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer etains the approval decision under the existing branch-protection rules
- **D.** Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer etains the approval decision under the existing branch-protection rules

Claude comment phân tích có cấu trúc cung cấp hỗ trợ review, còn human approval và branch protection giữ quyền quyết định merge.

#### Vì sao các phương án khác không phù hợp?

- **Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules.**: Auto-merge bỏ yêu cầu human approval.
- **Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate.**: Tắt branch protection xóa chính gate cần giữ.
- **Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author.**: Xóa PR im lặng là hành động không được yêu cầu và không có review minh bạch.

**Tham khảo:**

- [Claude Code — Common workflows](https://code.claude.com/docs/en/common-workflows)

</details>


---

## Q43 · pick 2 · ✔ you got it right

A revenue projection assistant has missed its monthly cost target by 38 percent. Profiling shows three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship-tier model (25 percent). Stakeholders require that projection accuracy remain unchanged. 

Which two optimizations should you sequence first to reduce cost without affecting accuracy? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** Cache common retrieved sales chunks accessed across many of the daily queries.
- **B.** Reduce the number of historical sales chunks retrieved across each query run.
- ✅ **C.** Enable prompt caching on the static policy preamble across the recurring calls.
- **D.** Truncate the policy preamble to remove non-essential clauses from the prompt.
- **E.** Switch the workload to a smaller, faster Claude model tier across all queries.

**Answer:** A, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Enable prompt caching on the static policy preamble across the recurring calls.; Cache common retrieved sales chunks accessed across many of the daily queries.

Cache preamble và sales chunks lặp tái dùng đúng dữ liệu thay vì thay model hoặc cắt nguồn, nên là bước ít tác động accuracy nhất cần đo hit rate.

#### Vì sao các phương án khác không phù hợp?

- **Reduce the number of historical sales chunks retrieved across each query run.**: Giảm chunks có thể mất bằng chứng ảnh hưởng dự báo.
- **Truncate the policy preamble to remove non-essential clauses from the prompt.**: Cắt policy có thể thay hành vi nếu xác định “non-essential” sai.
- **Switch the workload to a smaller, faster Claude model tier across all queries.**: Đổi model nhỏ cần eval vì có thể giảm accuracy.

**Tham khảo:**

- [Claude — Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

</details>


---

## Q44 · pick 2 · ✔ you got it right

You are building an ethics-review checklist for deployments supported by artificial intelligence. 

Which two checks belong on the list? (Select two.) Each correct answer presents a complete solution.

- **A.** Confirm that latency and throughput targets are met across supported user populations.
- **B.** Restrict ethics review to outputs that exceed a defined model-confidence threshold.
- ✅ **C.** Verify that outputs do not rely on generalizations about people that the underlying data does not support.
- ✅ **D.** Confirm that high-impact decisions retain human accountability rather than being attributed to the model.
- **E.** Confirm that vendor licensing terms permit the planned production use of the model.

**Answer:** C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Verify that outputs do not rely on generalizations about people that the underlying data does not support.; Confirm that high-impact decisions retain human accountability rather than being attributed to the model.

Kiểm tra khái quát hóa thiếu bằng chứng giúp phát hiện định kiến có thể ảnh hưởng con người. Giữ người chịu trách nhiệm với quyết định tác động lớn bảo đảm có chủ thể giải trình, xem xét khiếu nại và sửa quyết định; không thể đẩy trách nhiệm sang mô hình. Hai mục tập trung trực tiếp vào tác động đạo đức của đầu ra và quyền quyết định.

#### Vì sao các phương án khác không phù hợp?

- **Confirm that vendor licensing terms permit the planned production use of the model.**: Giấy phép production là kiểm tra pháp lý và mua sắm cần thiết, nhưng riêng quyền sử dụng sản phẩm chưa đánh giá tính công bằng hay trách nhiệm đối với người bị tác động.
- **Restrict ethics review to outputs that exceed a defined model-confidence threshold.**: Chỉ xem đầu ra có confidence cao bỏ sót tác hại ở đầu ra không chắc chắn; confidence không quyết định mức cần rà soát đạo đức.
- **Confirm that latency and throughput targets are met across supported user populations.**: Latency và throughput đo hiệu năng; chúng hữu ích cho chất lượng dịch vụ nhưng không trực tiếp kiểm tra định kiến và trách nhiệm quyết định trong đề.

**Tham khảo:**

- [NIST AI Risks and Trustworthiness](https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/)

</details>


---

## Q45 · pick 2 · ✔ you got it right

A Claude architect at a health services organization is defining evaluation metrics for a clinical-summary pipeline. The pipeline must remain within a per-query cost ceiling and must never surface patient data to unauthorized roles. 

Which two metrics directly address these requirements? (Select two.)

- **A.** Throughput measured as successful requests processed per minute
- **B.** Response latency at the 95th percentile across a one-week sample window
- ✅ **C.** Role-based access-control enforcement rate measured on a red-team dataset
- ✅ **D.** Per-query token cost measured against the defined cost ceiling
- **E.** BLEU score computed against a human-annotated reference summary set

**Answer:** C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Role-based access-control enforcement rate measured on a red-team dataset; Per-query token cost measured against the defined cost ceiling

RBAC enforcement trên red-team kiểm tra lộ PHI sai vai trò; cost/query so ceiling đo trực tiếp giới hạn tiền. Các metric khác không thay hai ràng buộc này.

#### Vì sao các phương án khác không phù hợp?

- **BLEU score computed against a human-annotated reference summary set**: BLEU đo gần văn bản tham chiếu, không kiểm soát quyền hay tiền.
- **Throughput measured as successful requests processed per minute**: Throughput không chứng minh vai trò đúng hoặc cost thấp.
- **Response latency at the 95th percentile across a one-week sample window**: p95 latency đo tốc độ, không hai ràng buộc đã nêu.

**Tham khảo:**

- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [NIST — AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)

</details>


---

## Q46 · pick 2 · ✘ you got it wrong

The compliance team has authored a regulatory disclosure procedure that must be applied identically across customer service, sales, and onboarding workflows. The procedure changes when regulators issue updates, currently four to six times per year. You are designing how the procedure will be packaged for use by Claude across all three workflows. 

Which two design decisions should you include? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** Reference the same Claude Skill from all three workflow integrations.
- **B.** Have each workflow team rewrite the procedure for its own context.
- ✅ **C.** Package the procedure as a Claude Skill owned directly by the compliance team.
- **D.** Store the procedure in a shared retrieval corpus accessed by all three workflows.
- **E.** Embed the procedure text into each workflow's system prompt at integration time.

**Answer:** A, C · **Yours:** C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Package the procedure as a Claude Skill owned directly by the compliance team.; Reference the same Claude Skill from all three workflow integrations.

Skill do compliance sở hữu và dùng chung cả ba workflow tạo một quy trình chuẩn có owner; cập nhật một nguồn tránh ba bản disclaimer bị lệch.

#### Vì sao các phương án khác không phù hợp?

- **Embed the procedure text into each workflow's system prompt at integration time.**: Nhúng từng system prompt tạo nhiều bản cần đồng bộ.
- **Store the procedure in a shared retrieval corpus accessed by all three workflows.**: Retrieval corpus trả tham khảo, không tự áp quy trình đầy đủ đúng phiên bản.
- **Have each workflow team rewrite the procedure for its own context.**: Team tự viết lại phá tính áp dụng giống nhau.

**Tham khảo:**

- [Claude Code — Skills](https://code.claude.com/docs/en/skills)

</details>


---

## Q47 · single choice · ✔ you got it right

You are defining when to introduce a project subagent versus relying on Claude Code's general capabilities. 

Which scenario most directly justifies a dedicated subagent?

- **A.** The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope.
- **B.** The team wants every Claude Code interaction to use the same generic system prompt with no task- specific specialization, narrow tool permissions, or dedicated model selection.
- ✅ **C.** The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.
- **D.** The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.

Rà soát schema cơ sở dữ liệu lặp lại qua nhiều phiên cần một vai trò chuyên môn có prompt, công cụ và model riêng. Subagent đóng gói đúng các lựa chọn đó để tái sử dụng trong project, đồng thời tách ngữ cảnh của nhiệm vụ chuyên biệt khỏi công việc chung.

#### Vì sao các phương án khác không phù hợp?

- **The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection.**: Một câu hỏi một lần không cần prompt hoặc quyền riêng chưa tạo lợi ích rõ ràng để duy trì cấu hình subagent chuyên dụng.
- **The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope.**: Không có nhiệm vụ chuyên biệt lặp lại thì thiếu nhu cầu tái sử dụng vai trò mà subagent giải quyết.
- **The team wants every Claude Code interaction to use the same generic system prompt with no task- specific specialization, narrow tool permissions, or dedicated model selection.**: Muốn mọi tương tác dùng cùng prompt tổng quát đi ngược lý do tách vai trò chuyên môn và quyền công cụ của subagent.

**Tham khảo:**

- [Create custom subagents](https://code.claude.com/docs/en/sub-agents)

</details>


---

## Q48 · single choice · ✔ you got it right

You are evaluating an evaluation set used to score a Claude-based hiring-support tool. The set is drawn from one geographic region and one tenure band. 

Which response is most appropriate?

- ✅ **A.** Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.
- **B.** Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool's full user population.
- **C.** Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population.
- **D.** Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.

Eval phải phủ vùng địa lý và tenure thực tế phục vụ để điểm cao một nhóm không che sai lệch ở nhóm chưa kiểm thử trước release.

#### Vì sao các phương án khác không phù hợp?

- **Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool's full user population.**: Ấn tượng convenience sample vẫn không đại diện population.
- **Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population.**: Thu hẹp thêm làm thiếu coverage nặng hơn.
- **Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset.**: Điểm cao subset không chứng minh generalization ra nhóm khác.

**Tham khảo:**

- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [NIST — AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)

</details>


---

## Q49 · single choice · ✔ you got it right

During an architectural review, the security team identifies a risk that adversarial content injected into retrieved documents could manipulate the model's behavior. 

Which mitigation most directly addresses this threat?

- **A.** Restrict outbound tool calls to an approved destination allow-list.
- ✅ **B.** Treat all retrieved content as untrusted input and apply input classifiers with output validation.
- **C.** Require citations for each claim and constrain responses to source-supported content.
- **D.** Score outputs against a stable adversarial evaluation set on each model-version change.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Treat all retrieved content as untrusted input and apply input classifiers with output validation.

Coi tài liệu truy xuất là dữ liệu không đáng tin ngăn nó được mặc nhiên xem như lệnh điều khiển. Classifier đầu vào có thể nhận diện chỉ dẫn cài cắm; kiểm tra đầu ra bổ sung một điểm chặn nếu mô hình vẫn làm theo. Đây là xử lý trực tiếp đường prompt injection qua tài liệu, dù không phải bảo đảm phát hiện mọi cuộc tấn công.

#### Vì sao các phương án khác không phù hợp?

- **Require citations for each claim and constrain responses to source-supported content.**: Trích dẫn và giới hạn theo nguồn giúp grounding, nhưng nguồn độc hại vẫn có thể chứa lệnh thao túng; trích dẫn không phân biệt dữ liệu với quyền ra lệnh.
- **Restrict outbound tool calls to an approved destination allow-list.**: Allow-list đích ra ngoài giảm một đường exfiltration nhưng injection cũng có thể sửa câu trả lời hoặc thao tác nội bộ, nên biện pháp này hẹp hơn mối đe dọa.
- **Score outputs against a stable adversarial evaluation set on each model-version change.**: Adversarial evaluation phát hiện hồi quy qua phiên bản nhưng không phải kiểm soát khi tài liệu độc hại cụ thể đi qua pipeline sản xuất.

**Tham khảo:**

- [Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)

</details>


---

## Q50 · single choice · ✔ you got it right

You are responding to a stakeholder request that adds significant scope to a deployment already in flight. 

Which response best aligns expectations while respecting the stakeholder's underlying need?

- **A.** Decline the request outright without acknowledging the stakeholder's underlying need or offering alternatives such as deferral, descoping, or timeline extension.
- ✅ **B.** Acknowledge the request, describe the scope and timeline implications transparently, and propose options- defer it, descope something else, or extend the timeline-for the stakeholder to choose.
- **C.** Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications.
- **D.** Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Acknowledge the request, describe the scope and timeline implications transparently, and propose options- defer it, descope something else, or extend the timeline-for the stakeholder to choose.

Thừa nhận nhu cầu rồi nêu rõ tác động phạm vi và thời hạn cho phép stakeholder lựa chọn có thông tin: hoãn yêu cầu, bỏ bớt phần khác hoặc dời mốc. Cách này giữ mục tiêu kinh doanh trong cuộc trao đổi và biến đánh đổi nguồn lực thành quyết định minh bạch cho đội triển khai.

#### Vì sao các phương án khác không phù hợp?

- **Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications.**: Giấu yêu cầu khiến đội không thể điều chỉnh kế hoạch hay báo phụ thuộc, nên sai lệch kỳ vọng chỉ xuất hiện khi đã trễ.
- **Decline the request outright without acknowledging the stakeholder's underlying need or offering alternatives such as deferral, descoping, or timeline extension.**: Từ chối ngay không tìm hiểu nhu cầu hoặc đề xuất đánh đổi có thể bỏ cơ hội đáp ứng bằng lịch hay phạm vi khác.
- **Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays.**: Nhận thêm mà không nêu chi phí thời gian tạo cam kết ngầm không có nguồn lực tương ứng và che rủi ro giao hàng.

**Tham khảo:**

- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q51 · pick 2 · ✔ you got it right

The compliance team at a firm has approved a Claude Skill that generates client-facing investment summaries. The Skill includes the firm's required disclaimers and prohibited-language list. A product manager has asked whether additional guardrails are needed at the application layer or whether the Skill alone is sufficient. 

Which two guardrail responsibilities should remain at the application layer rather than the Skill? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** Log every generated summary to the firm's compliance audit trail for retention.
- **B.** Apply the disclaimer template that the compliance team has standardized firm-wide.
- ✅ **C.** Verify the requesting user is authorized to generate investment summaries at all.
- **D.** Apply the prohibited-language list that the compliance team maintains and updates.
- **E.** Format output sections according to the firm's standardized house style guidelines.

**Answer:** A, C

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

Skill biết viết tóm tắt đầu tư theo mẫu; ứng dụng vẫn phải kiểm tra người dùng và giữ hồ sơ kiểm toán.

#### 2. Đề thực sự muốn gì?

application layer rather than Skill → tầng ứng dụng thay vì Skill; authorized → được phép

#### 3. Đáp án

- **A. Log every generated summary to the firm's compliance audit trail for retention.**
- **B. Verify the requesting user is authorized to generate investment summaries at all.**

#### 4. Vì sao đúng?

B cưỡng chế ai được tạo bản tóm tắt; A đưa kết quả vào audit trail của công ty. Một file hướng dẫn không thể tự bảo đảm danh tính, quyền và lưu log bền vững.

#### 5. Vì sao các phương án khác sai?

- **C:** cách trình bày có thể đóng gói trong Skill.
- **D:** mẫu disclaimer là nội dung quy trình.
- **E:** danh sách từ cấm có thể được hướng dẫn trong Skill; thực tế vẫn nên có kiểm tra runtime, không coi Skill là cơ chế chặn chắc chắn.

#### 6. Câu thần chú

SKILL → cách viết; APP → quyền và audit.

</details>


---

## Q52 · single choice · ✔ you got it right

You are defining an SLA for a Claude-based assistant. 

Which SLA definition is most operationally meaningful?

- **A.** A target without a defined metric, threshold, evaluation window, or breach consequence.
- ✅ **B.** A measurable target with a defined metric, threshold, evaluation window, and consequence for breach- for example, "p95 per-request latency under 800 ms over a 28-day window. "
- **C.** A target tied to a stakeholder sentiment measure such as "the team feels satisfied, " which cannot be measured objectively or used to trigger a documented breach response.
- **D.** A qualitative commitment such as "the system will be fast and reliable, " which names no metric, threshold, or evaluation window.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A measurable target with a defined metric, threshold, evaluation window, and consequence for breach- for example, "p95 per-request latency under 800 ms over a 28-day window. "

Một SLA dùng được phải xác định đo gì, ngưỡng nào, trong cửa sổ nào và hệ quả khi vi phạm. Mục tiêu p95 dưới 800 ms trong 28 ngày có thể kiểm tra bằng dữ liệu; để thành SLA đầy đủ, cam kết còn phải nêu hệ quả vi phạm, không chỉ chép ví dụ độ trễ.

#### Vì sao các phương án khác không phù hợp?

- **A target tied to a stakeholder sentiment measure such as "the team feels satisfied, " which cannot be measured objectively or used to trigger a documented breach response.**: Cảm nhận hài lòng có thể khảo sát bằng phương pháp riêng, nhưng câu “team cảm thấy hài lòng” như viết ở đây chưa có metric, ngưỡng và phản ứng vi phạm xác định.
- **A qualitative commitment such as "the system will be fast and reliable, " which names no metric, threshold, or evaluation window.**: “Nhanh và đáng tin” không cho biết bao nhiêu mili giây, tỷ lệ nào hay khoảng thời gian nào được chấp nhận để quyết định đạt.
- **A target without a defined metric, threshold, evaluation window, or breach consequence.**: Không có metric, ngưỡng, cửa sổ và hệ quả thì không thể đo vi phạm một cách lặp lại hoặc kích hoạt trách nhiệm đã thỏa thuận.

**Tham khảo:**

- [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)

</details>


---

## Q53 · single choice · ✔ you got it right

You are transitioning a Claude-based deployment from design into implementation. 

Which handoff package most directly supports a clean transition?

- ✅ **A.** Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on- call playbook, and known limitations.
- **B.** A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRS, omponent contracts, evaluation framework, runbooks, playbook, or known limitations.
- **C.** The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register.
- **D.** Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation amework, runbooks, on-call playbook, or known-limitations register to support the delivery team.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on- call playbook, and known limitations.

Gói bàn giao đầy đủ nối quyết định với thực thi: tổng quan và ADR giải thích cấu trúc, lý do chọn; hợp đồng thành phần xác định giao tiếp; khung đánh giá và reference set xác định cách chứng minh đúng. Runbook, playbook trực và giới hạn đã biết giúp đội tiếp nhận vận hành và xử lý sự cố mà không phải suy đoán các giả định bị thiếu.

#### Vì sao các phương án khác không phù hợp?

- **The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register.**: Slides có thể truyền đạt tổng quan nhưng thiếu hợp đồng, tiêu chí đánh giá và cách vận hành được nêu trong lựa chọn, nên chưa đủ cho đội triển khai.
- **A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRS, omponent contracts, evaluation framework, runbooks, playbook, or known limitations.**: Trao đổi miệng không để lại nguồn tra cứu ổn định về quyết định, giao tiếp và giới hạn, nên người vắng mặt hoặc nhận ca sau phải dựa trí nhớ người khác.
- **Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation amework, runbooks, on-call playbook, or known-limitations register to support the delivery team.**: Code cho biết hệ thống thực thi ra sao nhưng không thay thế lý do thiết kế, tiêu chí chấp nhận và quy trình xử lý sự cố bị thiếu.

**Tham khảo:**

- [Google SRE: On-Call](https://sre.google/workbook/on-call/)
- [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q54 · pick 2 · ✔ you got it right

A security team is evaluating two proposed controls. Control A adds an outbound tool allow-list with destination restrictions and per-call review. Control B scores responses against a stable adversarial evaluation set after each model-version change. 

Which two risk categories are correctly matched to these controls? (Select two.)

- **A.** Control A - silent quality drift after a model-version upgrade
- **B.** Control B - data exfiltration via outbound tool calls
- **C.** Control A - prompt injection from adversarial content in retrieved data
- ✅ **D.** Control B - silent quality drift after a model-version upgrade
- ✅ **E.** Control A - data exfiltration via outbound tool calls

**Answer:** D, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Control A - data exfiltration via outbound tool calls; Control B - silent quality drift after a model-version upgrade

Allow-list destination và review call chặn đường gửi dữ liệu ra ngoài; eval adversarial sau model change phát hiện quality drift im lặng.

#### Vì sao các phương án khác không phù hợp?

- **Control A - prompt injection from adversarial content in retrieved data**: Outbound restriction giảm hậu quả một số injection nhưng không giải quyết mọi injection nội dung.
- **Control A - silent quality drift after a model-version upgrade**: Destination policy không đo hồi quy chất lượng model mới.
- **Control B - data exfiltration via outbound tool calls**: Eval không phải control cưỡng chế outbound mỗi request.

**Tham khảo:**

- [Claude — Mitigate prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)
- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q55 · single choice · ✘ you got it wrong

A Claude Architect is reviewing a post-deployment performance report for an Al-assisted legal-document summarization system. The report includes these observations: 

- Average summarization time decreased from 47 minutes to 6 minutes per document. 
- Associates spend less time on summaries, but overall billable output has not measurably changed. 
- Infrastructure costs increased by 22% because redundant retry logic generated additional API calls. 
- Some summaries require attorney correction, adding an average of 8 minutes of review per document. 

Which analysis correctly attributes each observation to the appropriate business-value pillar?

- ✅ **A.** Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.
- **B.** Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.
- **C.** Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.
- **D.** Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.

**Answer:** A · **Yours:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

Giảm 47 xuống 6 phút là tiết kiệm thao tác; billable output chưa tăng nghĩa productivity chưa được chứng minh; retry tăng chi phí; 8 phút sửa ăn bớt tiết kiệm.

#### Vì sao các phương án khác không phù hợp?

- **Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.**: Review 8 phút là công sức, chưa có SLA nào để gọi vi phạm SLA.
- **Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.**: Tiết kiệm một bước không tự biến đổi mô hình kinh doanh.
- **Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.**: Không có SLA được nêu và chi phí API không phải đơn thuần productivity.

**Tham khảo:**

- [Microsoft — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q56 · single choice · ✔ you got it right

A Claude Architect is reviewing a post-deployment performance report for an Al-assisted legal-document summarization system. The report includes these observations: 

- Average summarization time decreased from 47 minutes to 6 minutes per document. 
- Associates spend less time on summaries, but overall billable output has not measurably changed. 
- Infrastructure costs increased by 22% because redundant retry logic generated additional API calls. 
- Some summaries require attorney correction, adding an average of 8 minutes of review per document. 

Which analysis correctly attributes each observation to the appropriate business-value pillar?

- **A.** Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.
- ✅ **B.** Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.
- **C.** Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.
- **D.** Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

Phải phân biệt thời gian task với output kinh doanh: 6 phút sinh cộng 8 phút review vẫn giảm so 47, nhưng chưa chứng minh tăng billable output; retry thuộc chi phí giải pháp.

#### Vì sao các phương án khác không phù hợp?

- **Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.**: Gọi correction time là SLA không có ngưỡng cam kết hỗ trợ.
- **Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.**: Không có bằng chứng thay đổi mô hình công việc để gọi transformation.
- **Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.**: Billable output chưa tăng không tự là transformation gap hay vấn đề SLA.

**Tham khảo:**

- [Microsoft — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q57 · pick 2 · ✘ you got it wrong

You are listing characteristics of robust guardrail design for an enterprise deployment. 

Which two characteristics belong on the list? (Select two.) Each correct answer presents a complete solution.

- **A.** Centralized log retention for guardrail violations with quarterly review by the security team.
- ✅ **B.** Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.
- **C.** User feedback channels that route reported guardrail failures into the product backlog for triage.
- **D.** Periodic refresh of the system prompt wording to keep refusal language current and clear.
- ✅ **E.** Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.

**Answer:** B, E · **Yours:** A, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.; Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.

Allow-list trước execution cưỡng chế quyền; adversarial coverage/regression kiểm tra guardrail trước và sau thay đổi. Hai phần kết hợp kiểm soát và bằng chứng hiệu quả.

#### Vì sao các phương án khác không phù hợp?

- **Centralized log retention for guardrail violations with quarterly review by the security team.**: Log/quý chỉ hậu kiểm, chưa ngăn tool sai quyền.
- **User feedback channels that route reported guardrail failures into the product backlog for triage.**: Feedback backlog hữu ích nhưng không là kiểm tra hoặc chặn ngay.
- **Periodic refresh of the system prompt wording to keep refusal language current and clear.**: Đổi lời từ chối không chứng minh guardrail hoạt động.

**Tham khảo:**

- [Claude — Mitigate prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)
- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q58 · pick 2 · ✔ you got it right

A Claude architect is leading the discovery phase for a new Al-powered customer service solution. 

Which two activities are characteristic of structured discovery and requirement gathering for a Claude-based deployment? (Select two.)

- **A.** Generating an initial prototype and iterating based on user reaction rather than written requirements.
- **B.** Deferring constraint documentation until the integration design phase to avoid scope creep.
- ✅ **C.** Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins. collected.
- **D.** Selecting the Claude model tier based on the architect's prior project experience before stakeholder input is
- ✅ **E.** Documenting explicit success criteria and failure thresholds that will gate production deployment.

**Answer:** C, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins. collected.; Documenting explicit success criteria and failure thresholds that will gate production deployment.

Workshop giúp xác định giới hạn độ trễ, độ chính xác và tuân thủ trước khi chốt phạm vi. Tiêu chí thành công cùng ngưỡng thất bại biến các mong muốn đó thành điều kiện có thể kiểm tra trước triển khai; phần câu bị hỏng trong lựa chọn cần được biên tập lại.

#### Vì sao các phương án khác không phù hợp?

- **Selecting the Claude model tier based on the architect's prior project experience before stakeholder input is**: Chọn hạng model trước khi nghe yêu cầu dễ tối ưu theo kinh nghiệm cũ thay vì giới hạn thực tế của dự án.
- **Generating an initial prototype and iterating based on user reaction rather than written requirements.**: Prototype có thể giúp khám phá, nhưng thay yêu cầu đã ghi nhận bằng phản ứng người dùng khiến phạm vi và tiêu chí chấp nhận không rõ.
- **Deferring constraint documentation until the integration design phase to avoid scope creep.**: Để đến thiết kế tích hợp mới ghi giới hạn có thể buộc phải làm lại kiến trúc hoặc phạm vi đã chốt.

**Cần xem lại:** Văn bản lựa chọn workshop và lựa chọn chọn model bị đảo hoặc thiếu cụm cuối trong nguồn (“collected.” / “input is”). Ý chính vẫn xác định được; nên sửa lỗi biên tập sau khi đối chiếu PDF.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q59 · single choice · ✔ you got it right

You are identifying inefficiency in a Claude Code workflow where each engineer manually re-explains the project's conventions and architecture in every session. 

Which adjustment most directly removes this inefficiency?

- **A.** Remove all documented project conventions and architectural standards so engineers have nothing to re- explain at session start, accepting the loss of consistency and shared coding standards.
- ✅ **B.** Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.
- **C.** Tell each engineer to retype the project conventions and architecture context more quickly at the start of eachsession, reducing time lost without eliminating the repeated manual effort.
- **D.** Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all Al-assisted development productivity for this codebase.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.

Đưa quy ước và kiến trúc chung vào CLAUDE.md ở cấp dự án, quản lý cùng repository, tạo nguồn chỉ dẫn được nạp cho các phiên làm việc. Nhờ vậy kỹ sư cập nhật một tài liệu chung thay vì kể lại cùng thông tin mỗi lần.

#### Vì sao các phương án khác không phù hợp?

- **Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all Al-assisted development productivity for this codebase.**: Cấm Claude Code loại bỏ cả công cụ hỗ trợ chứ không giải quyết cách cung cấp ngữ cảnh lặp lại.
- **Tell each engineer to retype the project conventions and architecture context more quickly at the start of eachsession, reducing time lost without eliminating the repeated manual effort.**: Gõ nhanh hơn vẫn đòi hỏi mỗi người nhập lại và dễ tạo các phiên bản quy ước khác nhau.
- **Remove all documented project conventions and architectural standards so engineers have nothing to re- explain at session start, accepting the loss of consistency and shared coding standards.**: Xóa chuẩn chung làm mất tính nhất quán của dự án; vấn đề là cách nạp chuẩn, không phải sự tồn tại của chuẩn.

**Tham khảo:**

- [How Claude remembers your project](https://code.claude.com/docs/en/memory)

</details>


---

## Q60 · single choice · ✔ you got it right

**HOTSPOT**  
You are evaluating prompting claims in a peer’s design document.  
For each claim, select yes if the claim reflects sound practice. Otherwise, select no.

> ⚠️ This question references an image that is missing on the source site (404).

- ✅ **A.** 
  - Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: Yes
  - Adding a few-shot example set with exact field names helps establish output formatting for extraction tasks: Yes
  - Chain-of-thought should be the default on every task, regardless of complexity: No
  - Leading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: Yes
  - Behavioral differences across model versions can be ignored once a prompt has been validated on one version: No
- **B.** 
  - Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: Yes
  - Adding a few-shot example set with exact field names helps establish output formatting for extraction tasks: No
  - Chain-of-thought should be the default on every task, regardless of complexity: No
  - Leading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: Yes
  - Behavioral differences across model versions can be ignored once a prompt has been validated on one version: Yes
- **C.** 
  - Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: No
  - Adding a few-shot example set with exact field names helps establish output formatting for extraction tasks: Yes
  - Chain-of-thought should be the default on every task, regardless of complexity: No
  - Leading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: No
  - Behavioral differences across model versions can be ignored once a prompt has been validated on one version: No
- **D.** 
  - Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: Yes
  - Adding a few-shot example set with exact field names helps establish output formatting for extraction tasks: Yes
  - Chain-of-thought should be the default on every task, regardless of complexity: Yes
  - Leading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: Yes
  - Behavioral differences across model versions can be ignored once a prompt has been validated on one version: No

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: YesAdding a few-shot example set with exact field names helps establish output formatting for extraction tasks: YesChain-of-thought should be the default on every task, regardless of complexity: NoLeading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: YesBehavioral differences across model versions can be ignored once a prompt has been validated on one version: No

Zero-shot là baseline cho nhãn rõ; few-shot định hình field; không cần chain-of-thought mọi task; so sánh theo tiêu chí giảm dẫn dắt; model đổi phải eval lại.

#### Vì sao các phương án khác không phù hợp?

- **Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: YesAdding a few-shot example set with exact field names helps establish output formatting for extraction tasks: YesChain-of-thought should be the default on every task, regardless of complexity: YesLeading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: YesBehavioral differences across model versions can be ignored once a prompt has been validated on one version: No**: Mặc định reasoning dài cho mọi task tăng chi phí không cần.
- **Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: YesAdding a few-shot example set with exact field names helps establish output formatting for extraction tasks: NoChain-of-thought should be the default on every task, regardless of complexity: NoLeading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: YesBehavioral differences across model versions can be ignored once a prompt has been validated on one version: Yes**: Bỏ lợi ích few-shot và cho phép bỏ qua model-version drift đều sai.
- **Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt: NoAdding a few-shot example set with exact field names helps establish output formatting for extraction tasks: YesChain-of-thought should be the default on every task, regardless of complexity: NoLeading-question framing can be mitigated by requesting an even-handed comparison using explicit criteria: NoBehavioral differences across model versions can be ignored once a prompt has been validated on one version: No**: Zero-shot có thể dùng làm baseline và so sánh tiêu chí là thực hành hợp lý.

**Tham khảo:**

- [Claude — Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q61 · single choice · ✔ you got it right

You are integrating Al-assisted tooling into the team's documentation workflow. The team wants generated documentation that stays grounded in the actual code. 

Which integration approach best fits this requirement?

- **A.** Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow or any human approval step.
- **B.** Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that cumentation generation will be entirely disconnected from the actual implementation.
- ✅ **C.** Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.
- **D.** Generate documentation from the model's training-data recall without reading any of the actual repository code, cepting that the output will not reflect the current implementation.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.

Agent phải đọc mã repo qua filesystem/search để tài liệu phản ánh implementation hiện tại, rồi đưa diff qua review bình thường thay vì tự publish.

#### Vì sao các phương án khác không phù hợp?

- **Generate documentation from the model's training-data recall without reading any of the actual repository code, cepting that the output will not reflect the current implementation.**: Training recall không biết implementation riêng hiện tại.
- **Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow or any human approval step.**: Publish thẳng bỏ quy trình review được yêu cầu.
- **Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that cumentation generation will be entirely disconnected from the actual implementation.**: Tắt đọc/search làm tài liệu mất nguồn grounding.

**Tham khảo:**

- [Claude Code — Common workflows](https://code.claude.com/docs/en/common-workflows)

</details>


---

## Q62 · pick 2 · ✔ you got it right

A security audit uncovers two issues: 

(1) all end users share a single API key, 

and (2) tool calls are executed without logging the initiating user.

Which two mitigations directly address these specific findings? (Select two.)

- **A.** Enforce RBAC at the retrieval layer before content enters the model context.
- **B.** Move credentials out of the prompt context and resolve them from a server-side secret store.
- ✅ **C.** Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions.
- ✅ **D.** Add actor attribution to tool-call logs so each call records the initiating user identity.
- **E.** Validate structured outputs against a schema before downstream actions are executed.

**Answer:** C, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add actor attribution to tool-call logs so each call records the initiating user identity.; Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions.

User-scoped token giới hạn quyền giải quyết credential dùng chung; actor ID trong log ghép hành động với người khởi tạo để audit.

#### Vì sao các phương án khác không phù hợp?

- **Validate structured outputs against a schema before downstream actions are executed.**: Schema output không xác thực người dùng hoặc ghi actor.
- **Enforce RBAC at the retrieval layer before content enters the model context.**: RBAC retrieval hữu ích nhưng không sửa thiếu actor log/shared identity trực tiếp.
- **Move credentials out of the prompt context and resolve them from a server-side secret store.**: Secret store bảo vệ credential nhưng vẫn có thể là một key chung.

**Tham khảo:**

- [Claude Code — Permissions](https://code.claude.com/docs/en/permissions)

</details>


---

## Q63 · single choice · ✔ you got it right

You are assessing a Claude-based system whose dominant risk is silent quality drift on safety-relevant outputs after a model-version upgrade. Which assessment activity most directly addresses this risk?

- **A.** Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic.
- **B.** Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production.
- **C.** Rotate adversarial inputs randomly so no two upgrades are scored on the same set.
- ✅ **D.** Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.

Giữ adversarial set ổn định và gắn score với model version cho phép so drift trước promotion, thay vì để sự cố ra production mới biết.

#### Vì sao các phương án khác không phù hợp?

- **Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production.**: Bỏ eval làm đúng rủi ro drift không được phát hiện.
- **Rotate adversarial inputs randomly so no two upgrades are scored on the same set.**: Đổi ngẫu nhiên toàn set làm so sánh version mất baseline.
- **Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic.**: Complaint chỉ xuất hiện sau tác động tới user.

**Tham khảo:**

- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q64 · single choice · ✔ you got it right

You are a platform architect designing an internal Claude-based assistant that serves both finance analysts and external auditors. Each population must access only documents permitted by its role. 

Where should role-based access control be enforced in the pipeline?

- **A.** After the response is generated, by post-filtering content that should not have been retrieved.
- **B.** Nowhere in the pipeline; rely on the model's general refusal behavior to reject unauthorized document access without any enforced access control.
- **C.** Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents.
- ✅ **D.** At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.

RBAC ở retrieval lọc tài liệu theo role trước prompt, nên nội dung auditor không có quyền không bao giờ được đưa vào context model.

#### Vì sao các phương án khác không phù hợp?

- **Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents.**: Prompt bỏ qua dữ liệu vẫn đã để dữ liệu vào model.
- **Nowhere in the pipeline; rely on the model's general refusal behavior to reject unauthorized document access without any enforced access control.**: Refusal chung không thay được authorization backend.
- **After the response is generated, by post-filtering content that should not have been retrieved.**: Post-filter quá muộn vì tài liệu đã được truy xuất và xử lý.

**Tham khảo:**

- [Claude Code — Permissions](https://code.claude.com/docs/en/permissions)
- [Claude — Mitigate prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)

</details>


---

## Q65 · pick 2 · ✔ you got it right

You are running a controlled experiment to compare two prompts and must complete the design steps before executing the experiment. 

Which two steps must be completed BEFORE running the experiment with random assignment? (Select two.) Each correct answer presents part of the solution.

- ✅ **A.** Determine the minimum detectable effect size and the sample size needed for power.
- **B.** Document the recommendation, the trade-offs accepted, and the alternatives considered.
- **C.** Decide whether to promote, reject, or iterate the candidate based on the analysis.
- ✅ **D.** Define the hypothesis and the primary success metric for the comparison.
- **E.** Analyze the results against the predefined success metric and significance threshold.

**Answer:** A, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Determine the minimum detectable effect size and the sample size needed for power.; Define the hypothesis and the primary success metric for the comparison.

Trước thử nghiệm cần chốt giả thuyết và chỉ số chính để biết hiệu quả nào đang được đo. Sau đó xác định mức cải thiện nhỏ nhất cần phát hiện và cỡ mẫu đủ lực thống kê; nếu thiếu hai phần này, kết quả ngẫu nhiên khó dẫn tới quyết định đáng tin cậy.

#### Vì sao các phương án khác không phù hợp?

- **Decide whether to promote, reject, or iterate the candidate based on the analysis.**: Quyết định triển khai, loại bỏ hay sửa ứng viên cần dựa trên kết quả, nên không thể hoàn tất trước khi chạy.
- **Analyze the results against the predefined success metric and significance threshold.**: Phân tích cần đầu ra thí nghiệm; chỉ metric và ngưỡng được định nghĩa trước.
- **Document the recommendation, the trade-offs accepted, and the alternatives considered.**: Bản khuyến nghị và đánh đổi cuối cùng là kết quả tổng hợp sau phân tích, không phải hai bước xác định phép thử được hỏi.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q66 · single choice · ✔ you got it right

You are reviewing a customer-support agent's configuration. Each candidate tool falls into one of four categories: 

(1) required to complete defined tasks, 

(2) frequently used and reduces hand-offs, 

3) occasionally useful for unrelated work, 

(4) speculative future utility. 

Which categories should typically remain in the agent configuration?

- **A.** Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them.
- **B.** Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent's defined tasks.
- ✅ **C.** Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs.
- **D.** All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs.

Tool phục vụ nhiệm vụ và các handoff thường xuyên có giá trị giữ lại; unrelated/speculative chỉ tăng quyền và nhiễu lựa chọn.

#### Vì sao các phương án khác không phù hợp?

- **Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent's defined tasks.**: Ưu tiên unrelated bỏ mất khả năng bắt buộc.
- **Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them.**: Chỉ future utility không hoàn thành nhiệm vụ hiện tại.
- **All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs.**: Nhiều tool không mặc nhiên làm agent tốt hơn.

**Tham khảo:**

- [Anthropic — Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Claude Code — Permissions](https://code.claude.com/docs/en/permissions)

</details>


---

## Q67 · single choice · ✔ you got it right

You are comparing patterns for a batch document-classification job that follows fixed steps: extract metadata, classify, summarize, and persist. 

Which pattern is the best fit and why?

- **A.** An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability.
- **B.** An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks.
- ✅ **C.** A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility.
- **D.** A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility.

Workflow cố định phù hợp chuỗi trích metadata, phân loại, tóm tắt rồi lưu vì thứ tự và điều kiện đã biết. Điều phối bằng mã giúp dự tính số lần gọi và kiểm soát chi phí tốt hơn vòng lặp lập kế hoạch mở; điều đó không có nghĩa chi phí token luôn hằng số.

#### Vì sao các phương án khác không phù hợp?

- **An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability.**: Agent không mặc nhiên chính xác hơn; thêm quyền tự lập kế hoạch cho chuỗi đã biết có thể tăng số lần gọi mà không thêm giá trị.
- **An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks.**: Lập kế hoạch mở không tự bảo đảm cấu trúc đầu ra; schema và kiểm tra ở ranh giới mới xử lý yêu cầu này.
- **A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store.**: Workflow là lựa chọn đúng nhưng lý do sai: agent vẫn có thể gọi công cụ và lưu dữ liệu.

**Tham khảo:**

- [Building effective agents](https://www.anthropic.com/research/building-effective-agents)

</details>


---

## Q68 · single choice · ✔ you got it right

You are selecting a pattern for a compliance Q&A assistant that must answer policy questions with citations to the authoritative internal source set. Latency, cost, and audit predictability are prioritized. 

Which pattern is the best fit?

- **A.** a pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus
- ✅ **B.** augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer
- **C.** a static prompt with the entire policy corpus concatenated into every request
- **D.** multi-agent orchestration with a planner, researcher, and writer agent for every query

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer

RAG trên corpus policy authoritative rồi render citation cung cấp grounding và audit nguồn với ít orchestration hơn nhiều agent mỗi câu.

#### Vì sao các phương án khác không phù hợp?

- **multi-agent orchestration with a planner, researcher, and writer agent for every query**: Planner/researcher/writer mỗi query tăng chi phí và latency chưa cần.
- **a static prompt with the entire policy corpus concatenated into every request**: Toàn corpus mỗi request tăng token và khó mở rộng.
- **a pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus**: Web mở có thể lấy policy ngoài nguồn authoritative nội bộ.

**Tham khảo:**

- [Anthropic — Building effective agents](https://www.anthropic.com/research/building-effective-agents)
- [Claude — Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

</details>


---

## Q69 · single choice · ✘ you got it wrong

You are reviewing a peer’s draft system prompt that contains contradictory instructions: one section says to never speculate beyond the supplied source, and another says to confidently fill in any gaps. 

Which response is most appropriate?

- **A.** Add a priority-ordering instruction that tells the model to evaluate all available instructions and apply the most contextually appropriate one on each request.
- **B.** Increase the temperature setting so that output randomness masks the contradictions.
- ✅ **C.** Resolve the contradiction by removing or rewording the gap-filling instruction so the prompt consistently constrains the model to source-supported content.
- **D.** Keep both contradictory instructions in place and rely on the model to select which one to follow on each individual request, accepting inconsistent behavior as a result.

**Answer:** C · **Yours:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Resolve the contradiction by removing or rewording the gap-filling instruction so the prompt consistently constrains the model to source-supported content.

Cần bỏ hoặc sửa yêu cầu tự tin lấp chỗ trống để toàn prompt thống nhất với nguyên tắc chỉ dùng bằng chứng đã cung cấp. Khi thiếu thông tin, hướng dẫn nhất quán cho phép báo thiếu thay vì buộc model chọn giữa hai mục tiêu đối lập.

#### Vì sao các phương án khác không phù hợp?

- **Add a priority-ordering instruction that tells the model to evaluate all available instructions and apply the most contextually appropriate one on each request.**: Yêu cầu tự chọn chỉ dẫn “phù hợp ngữ cảnh” vẫn để nguyên mâu thuẫn và chuyển quyết định grounding cho model mỗi lần.
- **Increase the temperature setting so that output randomness masks the contradictions.**: Tăng temperature thay độ ngẫu nhiên của đầu ra, không làm hai chỉ dẫn đối lập trở nên tương thích.
- **Keep both contradictory instructions in place and rely on the model to select which one to follow on each individual request, accepting inconsistent behavior as a result.**: Giữ cả hai mục tiêu khiến grounding phụ thuộc lựa chọn từng lần của model, không sửa lỗi thiết kế prompt.

**Tham khảo:**

- [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)

</details>


---

## Q70 · single choice · ✔ you got it right

You are designing the prompt for a ticket-triage classifier with thirty well-defined categories and clear category descriptions in the prompt. 

Which technique is most appropriate as the starting point?

- ✅ **A.** a zero-shot prompt that specifies the categories with their descriptions and the required output format
- **B.** a prompt with no category descriptions, expecting the model to infer the category set
- **C.** a prompt that demands the model invent new categories when the supplied ones do not fit
- **D.** a chain-of-thought prompt for a routing decision that does not require multi-step reasoning

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** a zero-shot prompt that specifies the categories with their descriptions and the required output format

Zero-shot với đủ tên, mô tả của 30 nhóm và định dạng đầu ra là điểm xuất phát hợp lý cho phân loại tập đóng. Đánh giá lỗi thực tế rồi mới bổ sung ví dụ hoặc cách xử lý khó hơn nếu cần, thay vì tăng độ phức tạp ngay từ đầu.

#### Vì sao các phương án khác không phù hợp?

- **a prompt that demands the model invent new categories when the supplied ones do not fit**: Cho phép tự tạo nhóm làm phá vỡ tập 30 nhãn đã định nghĩa và hợp đồng routing phía sau.
- **a chain-of-thought prompt for a routing decision that does not require multi-step reasoning**: Yêu cầu suy luận nhiều bước cho quyết định đơn giản tăng độ phức tạp mà chưa có lỗi nào cho thấy cần thiết.
- **a prompt with no category descriptions, expecting the model to infer the category set**: Thiếu mô tả khiến model phải đoán ranh giới nhãn thay vì áp dụng quy tắc phân loại của hệ thống.

**Tham khảo:**

- [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)

</details>


---

## Q71 · pick 2 · ✔ you got it right

You are selecting a model for a new production workload and must complete the upstream steps before testing candidate models empirically. 

Which two steps must be completed BEFORE running a representative sample on a candidate model? (Choose two.) Each correct answer presents part of the solution.

- ✅ **A.** Choose a candidate model based on the requirements profile and known capabilities.
- **B.** Select the lightest model that consistently meets the quality bar across the sample.
- **C.** Retest the model choice when a new model version becomes available.
- **D.** Sign off the production rollout plan with the platform and security teams.
- ✅ **E.** Define the quality bar, latency tolerance, and expected volume for the workload.

**Answer:** A, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Choose a candidate model based on the requirements profile and known capabilities.; Define the quality bar, latency tolerance, and expected volume for the workload.

Trước khi thử model cần định nghĩa mức chất lượng, độ trễ và lưu lượng dự kiến để biết ứng viên phải đạt gì. Dựa trên hồ sơ yêu cầu và năng lực đã biết mới chọn ứng viên đem chạy mẫu đại diện; quyết định model cuối cùng cần bằng chứng từ phép thử đó.

#### Vì sao các phương án khác không phù hợp?

- **Sign off the production rollout plan with the platform and security teams.**: Kế hoạch rollout cần kết quả chọn và xác minh model; ký kế hoạch sản xuất không phải điều kiện kỹ thuật để chạy mẫu ban đầu.
- **Select the lightest model that consistently meets the quality bar across the sample.**: Chọn model nhẹ nhất đạt chuẩn là quyết định sau khi đã đo ứng viên trên mẫu, không phải trước khi đo.
- **Retest the model choice when a new model version becomes available.**: Kiểm thử lại khi có phiên bản mới thuộc vòng đời vận hành sau này, không xác định ứng viên và tiêu chuẩn cho lần thử đầu.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)

</details>


---

## Q72 · pick 2 · ✘ you got it wrong

You are compiling factors that should drive the choice between Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff. 

Which two factors belong on the list? (Choose two.) Each correct answer presents a complete solution.

- **A.** whether the underlying transport supports encryption in transit between the integrated services
- **B.** whether the vendor publishes detailed reference documentation for each candidate protocol
- ✅ **C.** whether the integration must be portable across multiple AI clients in the ecosystem
- ✅ **D.** whether the interaction is stateless and latency-sensitive or stateful and longer-running
- **E.** whether the team has prior implementation experience with any of the candidate protocols

**Answer:** C, D · **Yours:** A, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** whether the interaction is stateless and latency-sensitive or stateful and longer-running; whether the integration must be portable across multiple AI clients in the ecosystem

Tính chất tương tác giúp chọn mức điều phối: một lời gọi stateless nhạy độ trễ khác tác vụ có trạng thái kéo dài và bàn giao công việc. Nhu cầu tái sử dụng qua nhiều AI client làm tiêu chuẩn mở như MCP đáng cân nhắc hơn tích hợp chỉ phục vụ một client; không có nghĩa MCP chỉ hỗ trợ tác vụ có trạng thái.

#### Vì sao các phương án khác không phù hợp?

- **whether the underlying transport supports encryption in transit between the integrated services**: Mã hóa đường truyền là yêu cầu bảo mật hợp lệ với mọi cách tích hợp, nhưng tự nó không phân biệt tốt MCP, API trực tiếp và handoff.
- **whether the vendor publishes detailed reference documentation for each candidate protocol**: Tài liệu nhà cung cấp ảnh hưởng tính khả thi, nhưng mức chi tiết tài liệu không định nghĩa semantics tương tác hoặc nhu cầu tương thích client.
- **whether the team has prior implementation experience with any of the candidate protocols**: Kinh nghiệm nhóm là đánh đổi triển khai hợp lệ; khóa ưu tiên đặc tính workload và hệ sinh thái, không phủ nhận yếu tố con người.

**Tham khảo:**

- [What is the Model Context Protocol?](https://modelcontextprotocol.io/docs/getting-started/intro)

</details>


---

## Q73 · single choice · ✔ you got it right

**HOTSPOT**  
You are reviewing a peer’s end-to-end design for a Claude-based platform expected to scale to thousands of concurrent users.  
For each statement, indicate yes if the statement reflects a sound architectural practice. Otherwise, select no.

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** Yes, Yes, No, Yes.
- ✅ **B.** Yes, Yes, No, No.
- **C.** Yes, Yes, Yes, No.
- **D.** No, Yes, No, No.

**Answer:** B

<details><summary>Explanation</summary>

#### **1. Chuyện gì đang xảy ra?**

Hệ thống cần bảo vệ dữ liệu, chịu tải tăng đột biến và xử lý nghiệp vụ chính xác mà không làm lộ thông tin cá nhân.

#### **2. Đề thực sự muốn gì?**

Chú ý **before retrieval** — trước truy xuất; **bursty traffic** — tải tăng đột biến; **rather than in code** — thay cho code; **unredacted identifiers** — số định danh chưa được che.

#### **3. Đáp án**

**A: Yes → Yes → No → No.**

#### **4. Vì sao đúng?**

- **Nhận định 1 — Yes:** Xác định danh tính và quyền trước khi truy xuất giúp chỉ lấy tài liệu người dùng được phép xem. Không đưa tài liệu trái quyền vào model rồi mới nhờ model giấu đi.
- **Nhận định 2 — Yes:** Queue giữ yêu cầu chờ xử lý, giúp hệ thống tiếp nhận tải đột biến mà không dồn tất cả vào model cùng lúc. Queue không tạo thêm năng lực xử lý vô hạn.
- **Nhận định 3 — No:** Tính thuế cần công thức xác định, kiểm thử và kiểm toán được. Model có thể gọi công cụ tính thuế, nhưng system prompt không thay thế code tính toán chính xác.
- **Nhận định 4 — No:** Giữ nguyên số định danh chỉ để tăng tín hiệu tuning tạo nguy cơ lộ dữ liệu không cần thiết. Nên giảm thiểu, che hoặc loại bỏ thông tin nhạy cảm khỏi log theo nhu cầu thực tế.

#### **5. Vì sao các phương án khác sai?**

- **B:** Đánh giá nhận định 3 là Yes, coi prompt thay được logic tính thuế chính xác.
- **C:** Đánh giá nhận định 1 là No, bỏ qua việc kiểm quyền trước khi dữ liệu vào context.
- **D:** Đánh giá nhận định 4 là Yes, chấp nhận giữ thông tin định danh nguyên vẹn chỉ để phục vụ tuning.

#### **6. Câu thần chú**

**Quyền trước truy xuất; queue đệm tải; thuế bằng code; log che định danh.**

</details>


---

## Q74 · single choice · ✔ you got it right

You are selecting a protocol for a single low-latency stateless tool call from a Claude-based assistant to an internal pricing service that already exposes a stable HTTP API. 

Which integration mechanism is the most appropriate?

- **A.** a bespoke streaming protocol layered over an unrelated asynchronous message bus
- ✅ **B.** a direct API call to the existing endpoint with the appropriate scoped credentials
- **C.** a long-lived stateful session protocol for a stateless single-call interaction
- **D.** an agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** a direct API call to the existing endpoint with the appropriate scoped credentials

Gọi trực tiếp HTTP endpoint sẵn có với credential giới hạn quyền đáp ứng đúng một lần gọi stateless và tránh thêm tầng điều phối. Vì dịch vụ giá đã có hợp đồng API ổn định, không có nhu cầu trong đề biện minh cho một agent hoặc phiên dài hơn.

#### Vì sao các phương án khác không phù hợp?

- **a bespoke streaming protocol layered over an unrelated asynchronous message bus**: Giao thức tự chế trên message bus không liên quan thêm độ phức tạp và điểm chuyển giao cho một truy vấn đồng bộ đơn giản.
- **an agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service**: Agent trung gian không bổ sung nhiệm vụ suy luận nào được yêu cầu nhưng có thể thêm độ trễ và chi phí.
- **a long-lived stateful session protocol for a stateless single-call interaction**: Phiên có trạng thái kéo dài buộc quản lý vòng đời không cần thiết cho một lần gọi stateless.

**Tham khảo:**

- [What is the Model Context Protocol?](https://modelcontextprotocol.io/docs/getting-started/intro)

</details>


---

## Q75 · single choice · ✔ you got it right

**HOTSPOT**  
You are sequencing decomposed components in an invoice-processing pipeline.  
For each of the decomposed components, select the execution layer it belongs to: “Pre-Processing”, “Model Stage”, or “Post-Processing”.

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** 
  - Claude-based classification of invoice type: Pre-Processing
  - Persistence of validated records to the system of record: Post-Processing
  - Schema validation of the extracted fields: Post-Processing
  - Claude-based extraction of structured invoice fields: Model Stage
  - PII redaction on extracted text before model invocation: Post-Processing
  - Optical character recognition (OCR) on scanned invoice images: Pre-Processing
- **B.** 
  - Claude-based classification of invoice type: Model Stage
  - Persistence of validated records to the system of record: Post-Processing
  - Schema validation of the extracted fields: Post-Processing
  - Claude-based extraction of structured invoice fields: Model Stage
  - PII redaction on extracted text before model invocation: Post-Processing
  - Optical character recognition (OCR) on scanned invoice images: Pre-Processing
- **C.** 
  - Claude-based classification of invoice type: Model Stage
  - Persistence of validated records to the system of record: Post-Processing
  - Schema validation of the extracted fields: Model Stage
  - Claude-based extraction of structured invoice fields: Model Stage
  - PII redaction on extracted text before model invocation: Pre-Processing
  - Optical character recognition (OCR) on scanned invoice images: Pre-Processing
- ✅ **D.** 
  - Claude-based classification of invoice type: Model Stage
  - Persistence of validated records to the system of record: Post-Processing
  - Schema validation of the extracted fields: Post-Processing
  - Claude-based extraction of structured invoice fields: Model Stage
  - PII redaction on extracted text before model invocation: Pre-Processing
  - Optical character recognition (OCR) on scanned invoice images: Pre-Processing

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Claude-based classification of invoice type: Model StagePersistence of validated records to the system of record: Post-ProcessingSchema validation of the extracted fields: Post-ProcessingClaude-based extraction of structured invoice fields: Model StagePII redaction on extracted text before model invocation: Pre-ProcessingOptical character recognition (OCR) on scanned invoice images: Pre-Processing

OCR và redaction trước model là Pre-Processing; Claude classify/extract là Model Stage; schema validation và lưu record đã valid là Post-Processing.

#### Vì sao các phương án khác không phù hợp?

- **Claude-based classification of invoice type: Model StagePersistence of validated records to the system of record: Post-ProcessingSchema validation of the extracted fields: Model StageClaude-based extraction of structured invoice fields: Model StagePII redaction on extracted text before model invocation: Pre-ProcessingOptical character recognition (OCR) on scanned invoice images: Pre-Processing**: Schema validation của output phải kiểm tra sau model, không là bước sinh model.
- **Claude-based classification of invoice type: Pre-ProcessingPersistence of validated records to the system of record: Post-ProcessingSchema validation of the extracted fields: Post-ProcessingClaude-based extraction of structured invoice fields: Model StagePII redaction on extracted text before model invocation: Post-ProcessingOptical character recognition (OCR) on scanned invoice images: Pre-Processing**: Claude classification không phải preprocessing; redaction trước model không thể ở post.
- **Claude-based classification of invoice type: Model StagePersistence of validated records to the system of record: Post-ProcessingSchema validation of the extracted fields: Post-ProcessingClaude-based extraction of structured invoice fields: Model StagePII redaction on extracted text before model invocation: Post-ProcessingOptical character recognition (OCR) on scanned invoice images: Pre-Processing**: Redaction để bảo vệ input phải trước invocation.

**Tham khảo:**

- [Claude — Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q76 · pick 2 · ✘ you got it wrong

You are designing a human-in-the-loop validation workflow. 

Which two design elements belong in the workflow? (Choose two.) Each correct answer presents a complete solution.

- **A.** aggregate reviewer throughput metrics published weekly to leadership for headcount planning
- **B.** mandatory reviewer agreement with the model output to maintain consistent reviewer-model alignment
- ✅ **C.** risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs
- ✅ **D.** capture of reviewer decisions as labeled data that feeds the evaluation set over time
- **E.** uniform sampling of all model outputs to give every request an equal chance of review

**Answer:** C, D · **Yours:** B, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** capture of reviewer decisions as labeled data that feeds the evaluation set over time; risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs

Lấy mẫu theo rủi ro tập trung người duyệt vào kết quả thiếu chắc chắn hoặc tác động cao, nơi sai sót đáng quan tâm nhất. Ghi quyết định người duyệt thành nhãn và đưa vào bộ đánh giá biến giám sát thành bằng chứng để cải tiến; nhãn vẫn cần hướng dẫn và kiểm tra chất lượng.

#### Vì sao các phương án khác không phù hợp?

- **mandatory reviewer agreement with the model output to maintain consistent reviewer-model alignment**: Bắt người duyệt đồng ý với model triệt tiêu kiểm tra độc lập và che lỗi thay vì phát hiện lỗi.
- **aggregate reviewer throughput metrics published weekly to leadership for headcount planning**: Throughput hữu ích cho lập kế hoạch nhân sự nhưng không quy định mẫu rủi ro hoặc nội dung phán xét chất lượng.
- **uniform sampling of all model outputs to give every request an equal chance of review**: Lấy mẫu đều có ích để ước lượng chất lượng tổng thể, nhưng một mình nó có thể lấy quá ít trường hợp hiếm mà tác động cao; khóa ưu tiên phân tầng rủi ro.

**Tham khảo:**

- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)
- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q77 · single choice · ✘ you got it wrong

**HOTSPOT**  
You are classifying token-management tactics by where in the request lifecycle each tactic applies.  
For each of the tactics, select where in the request lifecycle each tactic applies: “Input Preparation”, “Prompt Construction”, or “Output Handling”.

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** 
  - Persist the validated output for downstream consumption and audit: Input Handling
  - Order prompt sections so cacheable content appears before per-request content: Prompt Construction
  - Summarize prior conversation history when the full history is no longer needed: Input Preparation
  - Validate the model’s structured output against the expected schema: Output Handling
  - Move stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt Construction
  - Trim retrieved passages to spans relevant to the user’s question: Input Preparation
- ✅ **B.** 
  - Persist the validated output for downstream consumption and audit: Output Handling
  - Order prompt sections so cacheable content appears before per-request content: Prompt Construction
  - Summarize prior conversation history when the full history is no longer needed: Input Preparation
  - Validate the model’s structured output against the expected schema: Output Handling
  - Move stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt Construction
  - Trim retrieved passages to spans relevant to the user’s question: Input Preparation
- **C.** 
  - Persist the validated output for downstream consumption and audit: Output Handling
  - Order prompt sections so cacheable content appears before per-request content: Input Preparation
  - Summarize prior conversation history when the full history is no longer needed: Prompt Construction
  - Validate the model’s structured output against the expected schema: Output Handling
  - Move stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt Construction
  - Trim retrieved passages to spans relevant to the user’s question: Input Preparation
- **D.** 
  - Persist the validated output for downstream consumption and audit: Output Handling
  - Order prompt sections so cacheable content appears before per-request content: Prompt Construction
  - Summarize prior conversation history when the full history is no longer needed: Input Preparation
  - Validate the model’s structured output against the expected schema: Prompt Construction
  - Move stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt Construction
  - Trim retrieved passages to spans relevant to the user’s question: Output Preparation

**Answer:** B · **Yours:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Persist the validated output for downstream consumption and audit: Output HandlingOrder prompt sections so cacheable content appears before per-request content: Prompt ConstructionSummarize prior conversation history when the full history is no longer needed: Input PreparationValidate the model’s structured output against the expected schema: Output HandlingMove stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt ConstructionTrim retrieved passages to spans relevant to the user’s question: Input Preparation

Tóm tắt history và trim retrieved spans thuộc Input Preparation; sắp cacheable prefix trước dynamic là Prompt Construction; validate và persist output thuộc Output Handling.

#### Vì sao các phương án khác không phù hợp?

- **Persist the validated output for downstream consumption and audit: Input HandlingOrder prompt sections so cacheable content appears before per-request content: Prompt ConstructionSummarize prior conversation history when the full history is no longer needed: Input PreparationValidate the model’s structured output against the expected schema: Output HandlingMove stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt ConstructionTrim retrieved passages to spans relevant to the user’s question: Input Preparation**: Persist kết quả model không phải xử lý input.
- **Persist the validated output for downstream consumption and audit: Output HandlingOrder prompt sections so cacheable content appears before per-request content: Input PreparationSummarize prior conversation history when the full history is no longer needed: Prompt ConstructionValidate the model’s structured output against the expected schema: Output HandlingMove stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt ConstructionTrim retrieved passages to spans relevant to the user’s question: Input Preparation**: Ordering prompt thuộc construction; summary history là chuẩn bị dữ liệu trước đó.
- **Persist the validated output for downstream consumption and audit: Output HandlingOrder prompt sections so cacheable content appears before per-request content: Prompt ConstructionSummarize prior conversation history when the full history is no longer needed: Input PreparationValidate the model’s structured output against the expected schema: Prompt ConstructionMove stable, repeated content into a cacheable prefix at the beginning of the prompt: Prompt ConstructionTrim retrieved passages to spans relevant to the user’s question: Output Preparation**: Validation output xảy ra sau generation; trim retrieved data phải trước prompt.

**Tham khảo:**

- [Claude — Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Claude — Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

</details>


---

## Q78 · pick 2 · ✔ you got it right

A Claude-based research assistant begins producing responses that confidently contradict its retrieved source documents despite no change to the retrieval pipeline. 

Which two diagnostic actions most directly identify the root cause of this behavior? (Choose two.)

- ✅ **A.** Isolate whether the failure reproduces on the previous model version to test for model mismatch.
- **B.** Switch the retrieval index to a denser embedding model to improve chunk relevance scores.
- **C.** Reduce the temperature setting to lower response variance across all query types.
- ✅ **D.** Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.
- **E.** Increase the context window size to allow more retrieved chunks per query.

**Answer:** A, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Isolate whether the failure reproduces on the previous model version to test for model mismatch.; Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.

Chạy lại trên phiên bản model trước giúp cô lập thay đổi hành vi model khi truy xuất không đổi. Kiểm tra chỉ dẫn grounding và ràng buộc trích dẫn xác định prompt có đang yêu cầu hoặc cho phép suy diễn vượt nguồn; hai phép chẩn đoán này đánh vào lỗi mâu thuẫn với tài liệu đã tìm được.

#### Vì sao các phương án khác không phù hợp?

- **Switch the retrieval index to a denser embedding model to improve chunk relevance scores.**: Embedding mới thay khâu tìm đoạn dù đề chưa cho thấy tài liệu sai hoặc thiếu; nó không cô lập việc sinh trái với nguồn đã có.
- **Reduce the temperature setting to lower response variance across all query types.**: Giảm temperature có thể giảm biến thiên nhưng không chỉ ra prompt hay phiên bản model gây lỗi grounding.
- **Increase the context window size to allow more retrieved chunks per query.**: Thêm ngữ cảnh không trực tiếp sửa việc model bỏ qua hoặc bóp méo đoạn nguồn đang có và có thể tăng nhiễu.

**Tham khảo:**

- [Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q79 · single choice · ✔ you got it right

**HOTSPOT**  
You are classifying chunking strategies by the corpus type each is best suited to.  
For each chunking strategy, select where in the request lifecycle each applies: “Long Structured Documents”, “Heterogeneous Short Records”, or “Code or Hierarchical Specs”.

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** 
  - Function-level or section-level chunking for code modules: Code or Hierarchical Specs
  - Tree-aware chunking that follows code or specification hierarchy: Code or Hierarchical Specs
  - Per-record chunking where each record is one chunk: Long Structured Documents
  - Semantic chunking along clause or paragraph boundaries: Long Structured Documents
  - Fixed-size chunking with overlap for short records of similar length: Code or Hierarchical Specs
  - Hierarchical chunking that mirrors document section structure: Long Structured Documents
- **B.** 
  - Function-level or section-level chunking for code modules: Long Structured Documents
  - Tree-aware chunking that follows code or specification hierarchy: Code or Hierarchical Specs
  - Per-record chunking where each record is one chunk: Heterogeneous Short Records
  - Semantic chunking along clause or paragraph boundaries: Long Structured Documents
  - Fixed-size chunking with overlap for short records of similar length: Heterogeneous Short Records
  - Hierarchical chunking that mirrors document section structure: Long Structured Documents
- ✅ **C.** 
  - Function-level or section-level chunking for code modules: Code or Hierarchical Specs
  - Tree-aware chunking that follows code or specification hierarchy: Code or Hierarchical Specs
  - Per-record chunking where each record is one chunk: Heterogeneous Short Records
  - Semantic chunking along clause or paragraph boundaries: Long Structured Documents
  - Fixed-size chunking with overlap for short records of similar length: Heterogeneous Short Records
  - Hierarchical chunking that mirrors document section structure: Long Structured Documents
- **D.** 
  - Function-level or section-level chunking for code modules: Code or Hierarchical Specs
  - Tree-aware chunking that follows code or specification hierarchy: Long Structured Documents
  - Per-record chunking where each record is one chunk: Heterogeneous Short Records
  - Semantic chunking along clause or paragraph boundaries: Long Structured Documents
  - Fixed-size chunking with overlap for short records of similar length: Heterogeneous Short Records
  - Hierarchical chunking that mirrors document section structure: Heterogeneous Short Records

**Answer:** C

<details><summary>Explanation</summary>

#### **1. Chuyện gì đang xảy ra?**

Bạn cần chia dữ liệu thành các mẩu nhỏ — gọi là **chunk** — để hệ thống tìm kiếm và đưa nội dung liên quan cho model. Cách chia phải giữ được cấu trúc và ý nghĩa của dữ liệu.

#### **2. Đề thực sự muốn gì?**

Các từ khóa quyết định:

- **Function / code / specification hierarchy** → hàm và cây cấu trúc code → **Code or Hierarchical Specs**.
- **Per-record / short records** → các bản ghi ngắn, riêng biệt → **Heterogeneous Short Records**.
- **Clause / paragraph / document section** → điều khoản, đoạn văn và mục tài liệu → **Long Structured Documents**.

#### **3. Đáp án**

**B**, theo thứ tự:

**Code → Code → Short Records → Long Documents → Short Records → Long Documents.**

#### **4. Vì sao đúng?**

- **Strategy 1 — Code:** Chia theo hàm hoặc phần code giúp giữ nguyên một đơn vị xử lý, tránh cắt giữa hàm.
- **Strategy 2 — Code:** Chia theo cây giữ quan hệ giữa module, class, function hoặc các cấp đặc tả.
- **Strategy 3 — Short Records:** Mỗi bản ghi thành một chunk giúp tránh trộn thông tin của các đối tượng khác nhau.
- **Strategy 4 — Long Documents:** Chia theo đoạn hoặc điều khoản giữ được một ý hoàn chỉnh trong tài liệu dài.
- **Strategy 5 — Short Records:** Trong cách phân loại của đề, cửa sổ kích thước cố định có phần chồng lấn được ghép với các bản ghi ngắn có độ dài tương tự. Khi triển khai, vẫn cần giữ ranh giới bản ghi nếu không được phép trộn dữ liệu.
- **Strategy 6 — Long Documents:** Chia theo section/subsection giữ cấu trúc các mục và ngữ cảnh của tài liệu dài.

#### **5. Vì sao các phương án khác sai?**

- **A:** Xếp chia theo hàm của **code modules** vào Long Structured Documents. Từ khóa **code modules** xác định rõ nhóm Code.
- **C:** Xếp cây code/specification vào Long Documents và cấu trúc section của tài liệu vào Short Records. Phải xét cây đó thuộc **code** hay **tài liệu**, không chỉ thấy chữ “hierarchy”.
- **D:** Xếp mỗi record thành một chunk vào Long Documents, đồng thời xếp cửa sổ cho short records vào Code. Cả hai đều bỏ qua loại dữ liệu được nêu rõ.

#### **6. Câu thần chú**

**Code giữ hàm/cây; record giữ từng bản ghi; tài liệu dài giữ đoạn/mục.**

</details>


---

## Q80 · pick 2 · ✘ you got it wrong

A pilot AI assistant for procurement specialists shows 89 percent first-response acceptance, but follow-up surveys reveal that specialists frequently override the assistant’s vendor recommendations after consulting unrelated criteria the assistant did not consider. The pilot owner wants to ship the assistant as is, given the strong acceptance rate. 

Which two discernment-competency observations should you raise BEFORE approving the launch? (Choose two.) Each correct answer presents part of the solution.

- **A.** The pilot duration was likely too short to establish reliability across the full year.
- **B.** The acceptance rate alone is sufficient evidence of readiness for general production use.
- ✅ **C.** Acceptance does not measure whether recommendations are right after specialist review.
- **D.** The survey response rate may not be statistically representative of all the specialists.
- ✅ **E.** The unconsidered criteria represent a scope gap in the assistant’s input space directly.

**Answer:** C, E · **Yours:** B, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Acceptance does not measure whether recommendations are right after specialist review.; The unconsidered criteria represent a scope gap in the assistant’s input space directly.

Acceptance ban đầu không đo chất lượng sau specialist review; criteria bị bỏ khỏi input là scope gap có thể làm vendor recommendation không đủ căn cứ.

#### Vì sao các phương án khác không phù hợp?

- **The survey response rate may not be statistically representative of all the specialists.**: Survey sample có thể bias nhưng đề chưa cho tỷ lệ/thiết kế để kết luận.
- **The acceptance rate alone is sufficient evidence of readiness for general production use.**: 89% acceptance không thay thẩm định kết quả cuối.
- **The pilot duration was likely too short to establish reliability across the full year.**: Không có dữ liệu để kết luận pilot ngắn theo mùa năm.

**Tham khảo:**

- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [NIST — AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)

</details>


---

## Q81 · single choice · ✔ you got it right

**HOTSPOT**  
You are evaluating retrieval-strategy claims used by a peer team.  
For each claim, select yes if the statement is generally accurate. Otherwise, select no.

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** 
  - Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text: Yes
  - Sparse term-matching retrieval recovers exact terms, such as identifiers and rare tokens, more reliably than dense retrieval alone: Yes
  - Structured query retrieval is appropriate for filter-and-aggregate workloads against a relational store with schema and indexes: Yes
  - Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics: Yes
  - Fixed-size chunking with overlap for short records of similar length: Yes
- **B.** 
  - Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text: Yes
  - Sparse term-matching retrieval recovers exact terms, such as identifiers and rare tokens, more reliably than dense retrieval alone: Yes
  - Structured query retrieval is appropriate for filter-and-aggregate workloads against a relational store with schema and indexes: No
  - Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics: No
  - Fixed-size chunking with overlap for short records of similar length: No
- ✅ **C.** 
  - Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text: Yes
  - Sparse term-matching retrieval recovers exact terms, such as identifiers and rare tokens, more reliably than dense retrieval alone: Yes
  - Structured query retrieval is appropriate for filter-and-aggregate workloads against a relational store with schema and indexes: Yes
  - Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics: No
  - Fixed-size chunking with overlap for short records of similar length: No
- **D.** 
  - Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text: Yes
  - Sparse term-matching retrieval recovers exact terms, such as identifiers and rare tokens, more reliably than dense retrieval alone: No
  - Structured query retrieval is appropriate for filter-and-aggregate workloads against a relational store with schema and indexes: Yes
  - Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics: No
  - Fixed-size chunking with overlap for short records of similar length: No

**Answer:** C

<details><summary>Explanation</summary>

#### **1. Chuyện gì đang xảy ra?**

Hệ thống cần tìm đúng dữ liệu trước khi trả lời. Cách tìm phù hợp phụ thuộc vào việc người dùng muốn tìm **cùng ý nghĩa**, **đúng mã/từ**, hay **lọc và tính tổng trên dữ liệu có cấu trúc**.

#### **2. Đề thực sự muốn gì?**

Các từ khóa quyết định:

- **Paraphrased intent** → cùng ý nhưng diễn đạt khác → **Dense vector retrieval**.
- **Exact terms / identifiers / rare tokens** → đúng từ hoặc mã → **Sparse term matching**.
- **Filter-and-aggregate / relational store** → lọc và tổng hợp dữ liệu bảng → **Structured queries**, thường là SQL.
- **Identical to dense-only** → khẳng định hybrid giống hoàn toàn dense → **No**.
- **Random sampling** → lấy ngẫu nhiên, không xét liên quan câu hỏi → **No** cho chiến lược truy xuất Q&A được mô tả.

#### **3. Đáp án**

**C: Yes → Yes → Yes → No → No.**

#### **4. Vì sao đúng?**

- **Statement 1 — Yes:** Dense retrieval dùng vector biểu diễn ý nghĩa, nên có thể tìm những đoạn cùng ý dù dùng từ khác nhau.
- **Statement 2 — Yes:** Sparse retrieval dựa trên khớp từ, thường phù hợp hơn với mã như `INV-1048` hoặc thuật ngữ hiếm. Hiệu quả thực tế vẫn cần đánh giá trên dữ liệu cụ thể.
- **Statement 3 — Yes:** SQL và hệ thống quan hệ được thiết kế để lọc, nối và tổng hợp, chẳng hạn tính tổng doanh thu theo tháng.
- **Statement 4 — No:** Hybrid kết hợp nhiều tín hiệu, thường là dense và sparse. Nó không đồng nhất với dense-only; mức cải thiện cần được đo, không tự động bảo đảm.
- **Statement 5 — No:** Lấy ngẫu nhiên không ưu tiên bằng chứng liên quan, nên có thể đưa dữ liệu không hữu ích vào model. Random sampling có thể dùng cho đánh giá, nhưng đó là mục đích khác.

#### **5. Vì sao các phương án khác sai?**

- **A:** Đánh giá sai statement 3. Truy vấn có cấu trúc chính là lựa chọn phù hợp cho lọc và tổng hợp trên database quan hệ.
- **B:** Đánh giá sai statement 2. Khớp từ là thế mạnh quan trọng khi cần tìm đúng mã hoặc từ hiếm.
- **D:** Đánh giá sai statements 4 và 5: hybrid không giống dense-only, và lấy dữ liệu ngẫu nhiên không thay thế truy xuất theo mức liên quan.

#### **6. Câu thần chú**

**Tìm ý → Dense; tìm mã → Sparse; lọc/tổng → SQL; Hybrid là kết hợp; Q&A không lấy nguồn ngẫu nhiên.**

</details>


---

## Q82 · pick 2 · ✔ you got it right

The platform team at Trenova Systems, Inc. needs to reduce per-query cost and p95 latency for a high-volume Claude pipeline without degrading output quality on the core use case. 

Which two optimizations directly target both cost and latency simultaneously? (Choose two.)

- **A.** Expand the system prompt to include additional few-shot examples for every request.
- ✅ **B.** Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.
- **C.** Add a retrieval step that fetches the full source corpus into the context window before generation.
- ✅ **D.** Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.
- **E.** Increase max _ tokens to reduce the frequency of truncated responses requiring follow-up calls

**Answer:** B, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.; Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.

Cache prefix ổn định giảm xử lý lặp và chi phí đầu vào khi có cache hit; hiệu quả phụ thuộc điều kiện cache và tần suất tái sử dụng. Routing truy vấn đơn giản sang model nhỏ, nhanh hơn giảm chi phí và độ trễ, miễn đánh giá xác nhận model đó vẫn đạt chất lượng cho nhóm truy vấn ấy.

#### Vì sao các phương án khác không phù hợp?

- **Add a retrieval step that fetches the full source corpus into the context window before generation.**: Nạp toàn corpus làm tăng đầu vào và xử lý, thường đi ngược cả hai mục tiêu so với chỉ lấy bằng chứng cần thiết.
- **Expand the system prompt to include additional few-shot examples for every request.**: Thêm ví dụ cho mọi yêu cầu tăng token lặp lại; có thể tăng chất lượng nhưng không trực tiếp tối ưu cả chi phí và độ trễ.
- **Increase max _ tokens to reduce the frequency of truncated responses requiring follow-up calls**: Tăng max_tokens có thể giúp khi có bằng chứng cắt cụt và retry, nhưng đề chưa nêu lỗi này; trần cao hơn tự nó không giảm thời gian hay token thực sinh.

**Tham khảo:**

- [Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)
- [Reducing latency](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-latency)

</details>


---

## Q83 · single choice · ✔ you got it right

You are integrating human review into a high-volume classification pipeline where reviewing every output is infeasible. 

Which sampling strategy best balances throughput with quality oversight?

- **A.** inverse sampling that reviews only high-confidence routine outputs and skips all low-confidence and high- impact outputs
- ✅ **B.** risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs
- **C.** universal sampling that reviews every output regardless of confidence level or throughput impact, treating all outputs as equally requiring human review
- **D.** no sampling at all, relying entirely on user-submitted complaints to surface quality and safety issues after they have already affected end users at scale

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs

Duyệt mọi đầu ra thiếu chắc chắn hoặc tác động cao, đồng thời lấy một mẫu ngẫu nhiên nhỏ từ nhóm thường lệ, tập trung nhân lực vào nguy cơ mà vẫn quan sát được lỗi tự tin sai. Các ngưỡng và khối lượng cần được thiết kế để phù hợp năng lực reviewer, vì đề đã loại cách duyệt tất cả.

#### Vì sao các phương án khác không phù hợp?

- **no sampling at all, relying entirely on user-submitted complaints to surface quality and safety issues after they have already affected end users at scale**: Chỉ đợi khiếu nại không cung cấp giám sát chủ động và bỏ sót lỗi người dùng không nhận ra hoặc không báo.
- **inverse sampling that reviews only high-confidence routine outputs and skips all low-confidence and high- impact outputs**: Chỉ duyệt nhóm tự tin cao bỏ qua chính nhóm bất định và tác động cao cần giám sát nhất.
- **universal sampling that reviews every output regardless of confidence level or throughput impact, treating all outputs as equally requiring human review**: Duyệt toàn bộ không đáp ứng giới hạn throughput đã nêu, dù có thể phù hợp pipeline nhỏ hơn.

**Tham khảo:**

- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q84 · single choice · ✔ you got it right

**HOTSPOT**  
You are evaluating model-selection claims used by a peer team.  
For each statement, select yes if the statement is generally true. Otherwise, select no.

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** 
  - Heavier-reasoning models typically consume more of the token-based rate-limit budget and run more slowly than lighter models on the same input: Yes
  - A representative-sample evaluation on the target workload is the right basis for confirming a model selection: Yes
  - The most capable model is always the right choice, regardless of the workload profile: Yes
  - Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for requests that need its capabilities: Yes
  - Selecting a model based on which version was most recently announced is the right basis for production decisions: No
- ✅ **B.** 
  - Heavier-reasoning models typically consume more of the token-based rate-limit budget and run more slowly than lighter models on the same input: Yes
  - A representative-sample evaluation on the target workload is the right basis for confirming a model selection: Yes
  - The most capable model is always the right choice, regardless of the workload profile: No
  - Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for requests that need its capabilities: Yes
  - Selecting a model based on which version was most recently announced is the right basis for production decisions: No
- **C.** 
  - Heavier-reasoning models typically consume more of the token-based rate-limit budget and run more slowly than lighter models on the same input: No
  - A representative-sample evaluation on the target workload is the right basis for confirming a model selection: Yes
  - The most capable model is always the right choice, regardless of the workload profile: No
  - Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for requests that need its capabilities: No
  - Selecting a model based on which version was most recently announced is the right basis for production decisions: No
- **D.** 
  - Heavier-reasoning models typically consume more of the token-based rate-limit budget and run more slowly than lighter models on the same input: Yes
  - A representative-sample evaluation on the target workload is the right basis for confirming a model selection: No
  - The most capable model is always the right choice, regardless of the workload profile: No
  - Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for requests that need its capabilities: Yes
  - Selecting a model based on which version was most recently announced is the right basis for production decisions: Yes

**Answer:** B

<details><summary>Explanation</summary>

#### **1. Chuyện gì đang xảy ra?**

Bạn cần chọn model vừa đủ khả năng giải quyết công việc, đồng thời đáp ứng yêu cầu về chất lượng, tốc độ và chi phí. Model mạnh nhất hoặc mới nhất chưa chắc phù hợp nhất.

#### **2. Đề thực sự muốn gì?**

Các từ khóa quyết định:

- **Typically** → xu hướng thường gặp, không phải quy luật tuyệt đối.
- **Representative sample / target workload** → kiểm tra bằng mẫu đại diện cho công việc thật.
- **Always / regardless** → luôn chọn bất kể yêu cầu → khẳng định quá tuyệt đối.
- **Routine traffic / needs its capabilities** → phân model theo độ khó.
- **Most recently announced** → mới công bố không chứng minh phù hợp.

#### **3. Đáp án**

**B: Yes → Yes → No → Yes → No.**

#### **4. Vì sao đúng?**

- **Statement 1 — Yes, theo xu hướng được hỏi:** Suy luận nhiều hơn thường tạo thêm token và tăng thời gian xử lý. Thinking tokens cũng được tính vào giới hạn token. Tuy nhiên, không được suy ra quota cụ thể chỉ từ tên hoặc mức độ mạnh của model; phải kiểm tra giới hạn thực tế. [Claude Platform Docs](https://platform.claude.com/docs/en/build-with-claude/context-windows?frmapp=yes&utm_source=chatgpt.com)
- **Statement 2 — Yes:** Mẫu đại diện giúp đo model có đạt yêu cầu trên dữ liệu thực tế không, thay vì chỉ dựa vào một màn trình diễn đẹp.
- **Statement 3 — No:** Tác vụ đơn giản có thể dùng model nhẹ vẫn đạt chuẩn, với chi phí và độ trễ thấp hơn.
- **Statement 4 — Yes:** Chuyển việc thường cho model nhẹ và việc khó cho model mạnh có thể tối ưu tài nguyên. Cần kiểm chứng cả chất lượng model nhẹ lẫn khả năng phân tuyến.
- **Statement 5 — No:** Ngày công bố không đo được chất lượng, độ trễ, chi phí hay độ phù hợp với hệ thống của bạn.

#### **5. Vì sao các phương án khác sai?**

- **A:** Chấp nhận statement 3, coi model mạnh nhất luôn là lựa chọn đúng.
- **C:** Phủ nhận đánh giá bằng mẫu đại diện ở statement 2 và chấp nhận chọn theo độ mới ở statement 5.
- **D:** Phủ nhận xu hướng chi phí suy luận ở statement 1 và lợi ích có điều kiện của tiered routing ở statement 4.

#### **6. Câu thần chú**

**Chọn theo bài toán và số đo; việc thường dùng nhẹ, việc khó dùng mạnh; mới nhất không đồng nghĩa phù hợp nhất.**

</details>


---

## Q85 · single choice · ✔ you got it right

You are operating an interactive assistant whose dominant performance constraint is per-turn latency. Quality on routine turns is already acceptable. 

Which configuration adjustment most directly improves latency without disproportionately damaging quality?

- **A.** Increase retrieval depth to the corpus maximum to improve recall regardless of latency.
- **B.** Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.
- **C.** Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.
- ✅ **D.** Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system- prompt content.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system- prompt content.

Giữ top-k đã đo đủ trả lời giảm input retrieval, còn cache system ổn định giảm xử lý prefix lặp mà không đổi quality đang đủ.

#### Vì sao các phương án khác không phù hợp?

- **Increase retrieval depth to the corpus maximum to improve recall regardless of latency.**: Corpus maximum tăng latency do thêm input.
- **Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.**: Tắt cache bỏ lợi ích prefix lặp; content change được phân biệt theo prefix.
- **Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.**: Model nặng nhất mọi lượt tăng thời gian chưa có nhu cầu quality.

**Tham khảo:**

- [Claude — Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

</details>


---

## Q86 · single choice · ✔ you got it right

You are operating an interactive assistant whose dominant performance constraint is per-turn latency. Quality on routine turns is already acceptable. 

Which configuration adjustment most directly improves latency without disproportionately damaging quality?

- **A.** Increase retrieval depth to the corpus maximum to improve recall regardless of latency.
- ✅ **B.** Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system- prompt content.
- **C.** Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.
- **D.** Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system- prompt content.

Trim truy xuất tới spans/top-k đủ bằng chứng và cache prefix là hai thay đổi nhắm input latency; phải giữ eval để không cắt mất đáp án.

#### Vì sao các phương án khác không phù hợp?

- **Increase retrieval depth to the corpus maximum to improve recall regardless of latency.**: Tăng depth tối đa đi ngược mục tiêu latency.
- **Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.**: Cache prefix ổn định không phải lấy dữ liệu stale nếu key nội dung thay đổi.
- **Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.**: Đổi tất cả sang model nặng hơn chưa được quality gap yêu cầu.

**Tham khảo:**

- [Claude — Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)

</details>


---

## Q87 · pick 2 · ✔ you got it right

You are reviewing instrumentation in a multi-agent system. 

Which two findings constitute valid observability gaps in the instrumentation? (Choose two.) Each correct answer presents a complete solution.

- **A.** Latency and token usage on every span are emitted to the central metrics pipeline.
- ✅ **B.** Model identity and version on each turn are not recorded with the turn artifacts.
- **C.** Trace spans for each agent step are exported to the shared distributed-tracing backend.
- ✅ **D.** Request-scoped correlation identifiers do not propagate across agent and tool calls.
- **E.** Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields

**Answer:** B, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Model identity and version on each turn are not recorded with the turn artifacts.; Request-scoped correlation identifiers do not propagate across agent and tool calls.

Thiếu tên và phiên bản model khiến khó gắn lỗi với thay đổi model hoặc tái hiện lượt chạy. Không truyền correlation ID qua agent và công cụ làm đứt trace của cùng yêu cầu; cần cả thuộc tính model lẫn liên kết nhân quả giữa các span để chẩn đoán luồng nhiều thành phần.

#### Vì sao các phương án khác không phù hợp?

- **Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields**: Ghi payload và kết quả với trường nhạy cảm đã che là tín hiệu quan sát hữu ích kết hợp bảo vệ dữ liệu, không phải thiếu instrumentation.
- **Latency and token usage on every span are emitted to the central metrics pipeline.**: Phát latency và token usage từng span cung cấp số đo hiệu năng và chi phí, đúng với nhu cầu giám sát.
- **Trace spans for each agent step are exported to the shared distributed-tracing backend.**: Xuất span cho từng bước vào backend tracing chung giúp dựng lại luồng; vấn đề là liên kết và metadata còn thiếu, không phải việc xuất span.

**Tham khảo:**

- [Context propagation](https://opentelemetry.io/docs/concepts/context-propagation/)
- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q88 · pick 2 · ✘ you got it wrong

You are building an evaluation pipeline for a Claude-based deployment and must complete the specification steps before running the deployment against the dataset. 

Which two steps must be completed BEFORE running the deployment against the evaluation dataset? (Choose two.) Each correct answer presents part of the solution.

- **A.** Review failure cases with subject matter experts to refine the scoring rubric.
- ✅ **B.** Define the metrics and slices the framework will report across representative, edge, and adversarial cases.
- ✅ **C.** Curate and label the evaluation dataset to match the defined slices.
- **D.** Publish the aggregated metrics to a dashboard and gate releases on threshold checks.
- **E.** Score the deployment outputs against the reference labels and aggregate the metrics.

**Answer:** B, C · **Yours:** B, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define the metrics and slices the framework will report across representative, edge, and adversarial cases.; Curate and label the evaluation dataset to match the defined slices.

Trước chạy đánh giá phải xác định metric và các lát cắt đại diện, biên và đối kháng để biết cần đo gì. Curate và gán nhãn dataset theo các lát cắt đó tạo đầu vào và chuẩn đối chiếu; sau khi có đầu ra mới chấm và tổng hợp được.

#### Vì sao các phương án khác không phù hợp?

- **Score the deployment outputs against the reference labels and aggregate the metrics.**: Chấm đầu ra cần deployment đã chạy và sinh kết quả, nên không thể hoàn tất trước lần chạy được hỏi.
- **Publish the aggregated metrics to a dashboard and gate releases on threshold checks.**: Dashboard metric tổng hợp và gate theo số đo cần kết quả đánh giá; có thể thiết kế dashboard trước nhưng chưa thể công bố kết quả.
- **Review failure cases with subject matter experts to refine the scoring rubric.**: Rà lỗi thực nghiệm với chuyên gia diễn ra sau khi quan sát lỗi; chuyên gia có thể giúp viết rubric trước nhưng đó không phải hoạt động đã mô tả.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q89 · pick 2 · ✔ you got it right

An architect is reviewing a Claude-based candidate-screening tool prior to deployment. A stakeholder asserts that because the model was not trained on company data, no bias evaluation is necessary. 

Which two responses most accurately challenge this assertion? (Choose two.)

- ✅ **A.** The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.
- **B.** Bias evaluation is unnecessary when the model provider has published a responsible-use policy.
- **C.** Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation.
- **D.** Fairness testing is required only when the training dataset is known to contain protected-class labels.
- ✅ **E.** The system should be evaluated on outcome-disparity metrics across protected groups before deployment.

**Answer:** A, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.; The system should be evaluated on outcome-disparity metrics across protected groups before deployment.

Bias pretraining vẫn có thể ảnh hưởng dù không train trên company data; đánh giá disparity theo nhóm trước deployment kiểm tra outcome thực tế.

#### Vì sao các phương án khác không phù hợp?

- **Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation.**: Công bố có AI chưa thay việc kiểm tra bias và tác hại.
- **Fairness testing is required only when the training dataset is known to contain protected-class labels.**: Không có protected labels trong training không bảo đảm không có proxy bias.
- **Bias evaluation is unnecessary when the model provider has published a responsible-use policy.**: Policy provider không chứng minh app cụ thể công bằng.

**Tham khảo:**

- [NIST — AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)

</details>


---

## Q90 · single choice · ✔ you got it right

You are defining where human review must remain in a planned automated pipeline. 

Which placement reflects sound human-in-the-loop design?

- **A.** Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate.
- ✅ **B.** Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.
- **C.** Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review.
- **D.** Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.

Đặt reviewer giữa đầu ra model và hành động tác động cao, không thể đảo ngược tạo cơ hội chặn lỗi trước khi gây hậu quả. Tiêu chí duyệt cụ thể giúp người duyệt biết phải kiểm gì và khi nào từ chối hoặc chuyển cấp, thay vì chỉ bấm đồng ý theo cảm tính.

#### Vì sao các phương án khác không phù hợp?

- **Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight.**: Bỏ mọi review tối đa hóa throughput bằng cách loại luôn cơ hội kiểm soát trước hành động khó khắc phục.
- **Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review.**: Mẫu ngẫu nhiên không có tiêu chí có thể bỏ sót hành động nguy hiểm và khiến reviewer đánh giá không nhất quán.
- **Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate.**: Duyệt sau hành động không thể đảo ngược chỉ còn là kiểm toán; nó không còn khả năng ngăn tác động ban đầu.

**Tham khảo:**

- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q91 · single choice · ✔ you got it right

An engineer inadvertently commits an API key to the repository by placing it in .claude/settings.json. 

Which configuration design principle was violated?

- **A.** Project-scope configuration should always override user-scope configuration.
- ✅ **B.** Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.
- **C.** MCP server definitions must reside in environment variables to prevent scope conflicts.
- **D.** Managed configuration must be applied before project-scope configuration is read.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.

Credential phải được lấy lúc chạy từ cơ chế quản lý secret, không ghi giá trị khóa vào tệp theo dõi bằng Git. settings.json cấp dự án là nơi chia sẻ cấu hình, nên đưa khóa vào đó làm bí mật đi cùng lịch sử repository; thay đổi precedence không giải quyết rò rỉ này.

#### Vì sao các phương án khác không phù hợp?

- **Project-scope configuration should always override user-scope configuration.**: Thứ tự ưu tiên cấu hình quyết định giá trị nào có hiệu lực, không quyết định liệu khóa đã bị công khai trong Git hay chưa.
- **MCP server definitions must reside in environment variables to prevent scope conflicts.**: MCP server có thể được định nghĩa trong tệp cấu hình; điều cần tách là giá trị secret, không phải bắt mọi định nghĩa nằm trong biến môi trường.
- **Managed configuration must be applied before project-scope configuration is read.**: Đọc managed config trước không làm biến mất credential đã commit và không phải nguyên tắc lưu bí mật bị vi phạm ở đây.

**Tham khảo:**

- [Settings files and precedence](https://code.claude.com/docs/en/settings)
- [Security](https://code.claude.com/docs/en/security)

</details>


---

## Q92 · pick 2 · ✘ you got it wrong

An engineering organization is adopting Claude Code across 200 developers. A team lead has proposed that AI- generated pull requests bypass the standard code review process for changes under 50 lines, on the grounds that small changes are low-risk and review capacity is constrained. 

Which two Diligence-competency objections should you raise? (Choose two.) Each correct answer presents part of the solution.

- ✅ **A.** Line count is a poor proxy for the actual risk a code change introduces into the system.
- **B.** Code review capacity should be expanded to handle every code change submitted across the team.
- **C.** The 50-line threshold should be raised to 200 lines instead to capture more changes overall.
- **D.** AI-generated pull requests should be rejected as a default policy across the engineering organization.
- ✅ **E.** Removing review removes the verification mechanism that AI-generated output requires across the workflow.

**Answer:** A, E · **Yours:** A, B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Line count is a poor proxy for the actual risk a code change introduces into the system.; Removing review removes the verification mechanism that AI-generated output requires across the workflow.

Một dòng đổi quyền hoặc logic thanh toán vẫn rủi ro cao; bỏ review vì dưới 50 dòng loại cơ chế xác minh thay vì đánh giá tác động thật.

#### Vì sao các phương án khác không phù hợp?

- **Code review capacity should be expanded to handle every code change submitted across the team.**: Tăng capacity là giải pháp nguồn lực, không chỉ ra sai lầm proxy line count.
- **The 50-line threshold should be raised to 200 lines instead to capture more changes overall.**: 200 dòng chỉ đổi ngưỡng tùy ý, không sửa proxy rủi ro.
- **AI-generated pull requests should be rejected as a default policy across the engineering organization.**: Reject mọi PR AI là cấm chung không cần thiết.

**Tham khảo:**

- [NIST — AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)

</details>


---

## Q93 · pick 2 · ✘ you got it wrong

You are evaluating a Claude-based deployment for adherence to a specific regulation. 

Which two steps must be completed BEFORE mapping deployment data flows to specific regulatory clauses? (Choose two.) Each correct answer presents part of the solution.

- **A.** Document the identified gaps along with recommended remediations and residual risk for sign-off
- ✅ **B.** Identify the applicability of the regulation based on data types, jurisdiction, and audience
- **C.** Schedule the remediation work with the engineering team based on the prioritized gap findings.
- **D.** Compare the in-place controls against the regulatory requirements to identify any compliance gaps.
- ✅ **E.** Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.

**Answer:** B, E · **Yours:** A, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.; Identify the applicability of the regulation based on data types, jurisdiction, and audience

Theo khóa nguồn, trước hết xác định quy định có áp dụng theo dữ liệu, khu vực và đối tượng, đồng thời kiểm kê các affordance tuân thủ của nhà cung cấp. Việc xác định phạm vi áp dụng là điều kiện rõ ràng để map clause; kiểm kê công cụ giúp hiểu kiểm soát hiện có nhưng không phải tiền đề bắt buộc theo thứ tự chung, vì có thể làm song song với map luồng dữ liệu.

#### Vì sao các phương án khác không phù hợp?

- **Compare the in-place controls against the regulatory requirements to identify any compliance gaps.**: So kiểm soát với yêu cầu để tìm gap cần hiểu điều khoản và phạm vi trước; đây là phân tích sau mapping, không phải hai đầu vào được khóa chọn.
- **Document the identified gaps along with recommended remediations and residual risk for sign-off**: Ghi gap và rủi ro còn lại cần gap analysis đã có, nên chưa thể hoàn tất ở thời điểm trước mapping.
- **Schedule the remediation work with the engineering team based on the prioritized gap findings.**: Xếp lịch khắc phục dựa trên gap đã ưu tiên thuộc phần xử lý sau đánh giá, không phải bước tiền đề để biết điều khoản nào áp dụng.

**Cần xem lại:** Giữ khóa nguồn. Không có quy định chung rằng kiểm kê công cụ nhà cung cấp luôn phải hoàn tất trước khi map data flow vào clause; cần làm rõ dependency mà đề muốn áp đặt.

**Tham khảo:**

- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q94 · pick 2 · ✔ you got it right

You are reviewing an integration specification for security gaps. 

Which two findings constitute valid security gaps in the specification? (Choose two.) Each correct answer presents a complete solution.

- **A.** Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session.
- ✅ **B.** Role-based access control (RBAC) is enforced only at the response-rendering layer after the model accesses restricted data.
- ✅ **C.** Service credentials are placed in the prompt context where they can leak into logs and traces.
- **D.** Tool calls execute server-side under a least-privilege service principal scoped to the requested action.
- **E.** Tool inputs and outputs are encrypted in transit using transport layer security between services.

**Answer:** B, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Service credentials are placed in the prompt context where they can leak into logs and traces.; Role-based access control (RBAC) is enforced only at the response-rendering layer after the model accesses restricted data.

Đặt credential trong ngữ cảnh prompt cho model và hệ thống log cơ hội tiếp xúc bí mật không cần thiết. Chỉ áp dụng RBAC lúc render cũng quá muộn vì model đã được truy cập dữ liệu hạn chế; secret cần giải quyết phía server và quyền tài liệu cần lọc trước model.

#### Vì sao các phương án khác không phù hợp?

- **Tool inputs and outputs are encrypted in transit using transport layer security between services.**: TLS bảo vệ dữ liệu đang truyền giữa dịch vụ; đây là kiểm soát có ích, không phải lỗ hổng được mô tả.
- **Tool calls execute server-side under a least-privilege service principal scoped to the requested action.**: Service principal phía server với quyền tối thiểu thu hẹp quyền công cụ; cần thực thi đúng nhưng mô tả này tự nó không chỉ ra lỗ hổng.
- **Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session.**: Token OAuth theo người dùng với scope giới hạn hỗ trợ quyền và truy vết theo actor; refresh phiên không tự làm cơ chế này thành lỗ hổng.

**Tham khảo:**

- [Security](https://code.claude.com/docs/en/security)

</details>


---

## Q95 · single choice · ✔ you got it right

You are defining escalation criteria for ambiguous cases in an automated workflow. 

Which set of criteria best supports consistent escalation?

- **A.** escalation at the discretion of whoever is available when the teams on-call engineer has spare capacity, with no defined threshold, category, or ambiguity criterion to trigger it
- ✅ **B.** confidence threshold below a defined level, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review
- **C.** escalation only after an affected customer has already contacted the support channel to complain, by which point the automated workflow has already completed without human review
- **D.** no escalation criteria at all; the model itself decides on each turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** confidence threshold below a defined level, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review

Ngưỡng confidence đã định, impact category, ambiguity flags và yêu cầu user review tạo trigger có thể kiểm tra thống nhất thay vì tùy người đang rảnh.

#### Vì sao các phương án khác không phù hợp?

- **escalation at the discretion of whoever is available when the teams on-call engineer has spare capacity, with no defined threshold, category, or ambiguity criterion to trigger it**: Theo người rảnh không phải tiêu chí tác hại hoặc độ chắc.
- **escalation only after an affected customer has already contacted the support channel to complain, by which point the automated workflow has already completed without human review**: Chờ complaint làm review xảy ra sau tác động.
- **no escalation criteria at all; the model itself decides on each turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags**: Model tùy ý không có policy dễ quyết định không nhất quán.

**Tham khảo:**

- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [NIST — AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/)

</details>


---

## Q96 · single choice · ✔ you got it right

A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents. 

Which mitigation is most directly targeted at this failure mode?

- **A.** scoring each new model version against a stable adversarial evaluation set
- **B.** treating retrieved data as untrusted and applying input classifiers at ingestion time
- ✅ **C.** constraining responses to source-supported content combined with required citations and a verification step
- **D.** replacing the shared API key with per-user OAuth tokens to restrict data access

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** constraining responses to source-supported content combined with required citations and a verification step

Source-only, citation và verify đối chiếu claim với tài liệu sửa trực tiếp grounded answer có chi tiết không hỗ trợ sau upgrade.

#### Vì sao các phương án khác không phù hợp?

- **replacing the shared API key with per-user OAuth tokens to restrict data access**: OAuth thay access, không correctness của claim.
- **scoring each new model version against a stable adversarial evaluation set**: Eval phát hiện drift nhưng chưa ngăn từng claim sai.
- **treating retrieved data as untrusted and applying input classifiers at ingestion time**: Input classifier nhắm instruction injection, không mọi hallucination.

**Tham khảo:**

- [Claude — Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

</details>


---

## Q97 · single choice · ✔ you got it right

You are preparing a HIPAA-eligible deployment for a healthcare customer. 

Which configuration supports HIPAA compliance using Anthropic-offered tools?

- **A.** an ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured
- **B.** Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box
- ✅ **C.** Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking
- **D.** disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking

Khóa nguồn chọn gói Enterprise có BAA, cấu hình dữ liệu và audit log vì các phương án còn lại xử lý PHI mà không có nền tảng hợp đồng và kiểm soát thích hợp. Tuy nhiên tổ hợp được viết không đủ chính xác để coi là công thức tuân thủ: hiện phải bật HIPAA-ready Enterprise và dùng tính năng nằm trong BAA; BAA có thể được chấp nhận trong luồng cấu hình, còn ZDR và cấu hình HIPAA riêng của Claude Code/Cowork có điều kiện sản phẩm. Cần đối chiếu Implementation Guide áp dụng, không suy ra mọi Enterprise có ZDR đều đã tuân thủ.

#### Vì sao các phương án khác không phù hợp?

- **disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA**: Tắt toàn bộ audit logging không thay BAA và làm mất bằng chứng vận hành; cần bảo vệ log nhạy cảm theo thiết kế thay vì coi không có log là đủ tuân thủ.
- **an ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured**: Tài khoản cá nhân không có BAA và cấu hình HIPAA phù hợp không phải nền tảng được nêu cho xử lý PHI của tổ chức.
- **Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box**: Claude Free không có HIPAA-ready Enterprise enablement và BAA chỉ vì sản phẩm được cung cấp cho người tiêu dùng.

**Cần xem lại:** Cần sửa độ chính xác sản phẩm của lựa chọn theo BAA hiện hành: HIPAA-ready Enterprise yêu cầu cấu hình riêng; ZDR cho Claude Code và API không được gộp thành một tính năng chung. Giữ khóa nguồn để người biên tập quyết định.

**Tham khảo:**

- [HIPAA-ready Enterprise plans](https://support.claude.com/en/articles/13296973-hipaa-ready-enterprise-plans)

</details>


---

## Q98 · single choice · ✔ you got it right

You are defining transparency practices for a customer-facing assistant whose responses are materially shaped by AI. 

Which transparency practice most directly supports responsible deployment?

- **A.** Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system.
- **B.** Misrepresent the AI’s role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency.
- **C.** Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI’s role as confidential operational information.
- ✅ **D.** Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.

Thông báo cho người dùng cuối rằng AI có vai trò đáng kể giúp họ hiểu nguồn gốc và giới hạn của tương tác. Có đường dẫn được ghi rõ để gặp người thật cho phép xin hỗ trợ hoặc phản đối khi cần; cách diễn đạt nên phù hợp chính sách minh bạch của tổ chức.

#### Vì sao các phương án khác không phù hợp?

- **Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system.**: Chỉ nói với nhân viên nội bộ không cung cấp thông tin cho chính người dùng chịu tác động của câu trả lời AI.
- **Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI’s role as confidential operational information.**: Từ chối mọi câu hỏi về AI cản khả năng hiểu và đánh giá tương tác của người dùng.
- **Misrepresent the AI’s role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency.**: Mô tả sai vai trò AI tạo lòng tin dựa trên thông tin sai, trái với mục tiêu minh bạch.

**Tham khảo:**

- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q99 · single choice · ✔ you got it right

You are supporting an EU-based deployment with GDPR obligations. 

Which combination of measures best supports the deployment’s GDPR posture?

- **A.** using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure
- ✅ **B.** enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling
- **C.** pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations
- **D.** disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling

DPA áp dụng, thời hạn lưu rõ ràng, tối thiểu hóa dữ liệu qua redaction và quy trình quyền của chủ thể dữ liệu cùng hỗ trợ trách nhiệm xử lý. Khóa chọn tổ hợp Enterprise này so với các phương án bỏ kiểm soát, nhưng GDPR không chỉ dành cho Enterprise và Anthropic hiện tích hợp DPA vào Commercial Terms; không phải lúc nào cũng có hợp đồng cần ký riêng. Căn cứ pháp lý và nghĩa vụ cụ thể vẫn phụ thuộc triển khai.

#### Vì sao các phương án khác không phù hợp?

- **disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure**: Bỏ retention, redaction và xử lý quyền dữ liệu loại các cơ chế giới hạn lưu trữ, tối thiểu hóa và đáp ứng yêu cầu cá nhân.
- **pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations**: Đưa toàn dữ liệu cá nhân vào mọi prompt không xét nhu cầu là trái mục tiêu tối thiểu hóa và tạo phơi lộ không cần thiết.
- **using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure**: Tài khoản cá nhân không có thỏa thuận xử lý áp dụng và quy trình quyền chủ thể để lại khoảng trống quản trị; điểm yếu là thiếu cơ chế, không chỉ tên hạng tài khoản.

**Cần xem lại:** Giữ khóa nguồn nhưng tránh dạy rằng chỉ enterprise-tier mới hỗ trợ GDPR hoặc DPA luôn phải ký riêng; cần xác định căn cứ pháp lý và điều khoản áp dụng cho sản phẩm cụ thể.

**Tham khảo:**

- [Data Processing Addendum](https://www.anthropic.com/legal/data-processing-addendum)
- [How do I view and sign your Data Processing Addendum?](https://privacy.claude.com/en/articles/7996862-how-do-i-view-and-sign-your-data-processing-addendum-dpa)

</details>


---

## Q100 · pick 2 · ✔ you got it right

You are designing a human-in-the-loop validation workflow for a new Claude-based deployment and must complete the design steps before piloting the workflow. 

Which two steps must be completed BEFORE piloting the workflow with a representative subset of traffic? (Choose two.) Each correct answer presents part of the solution.

- **A.** Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step.
- ✅ **B.** Identify the decision points in the pipeline that require human oversight by impact and reversibility.
- ✅ **C.** Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.
- **D.** Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures.
- **E.** Iterate the workflow design based on observed pilot findings before broader rollout to production.

**Answer:** B, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.; Identify the decision points in the pipeline that require human oversight by impact and reversibility.

Hai quyết định nền tảng mà khóa nguồn chọn là xác định điểm cần người giám sát theo tác động/khả năng đảo ngược và thiết kế lấy mẫu, escalation tại từng điểm. Chúng xác định ai phải xem loại đầu ra nào trước khi pilot. Tuy nhiên câu hỏi “phải hoàn tất trước pilot” quá rộng: tài liệu tiêu chí và đào tạo reviewer cũng có thể là điều kiện sẵn sàng bắt buộc, nên giữ cờ cần duyệt.

#### Vì sao các phương án khác không phù hợp?

- **Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures.**: Đào tạo reviewer theo tiêu chí và escalation là hoạt động hợp lệ, thường cần trước pilot có người tham gia; khóa chỉ ưu tiên hai quyết định thiết kế nền tảng, không chứng minh đào tạo là bước sau pilot.
- **Iterate the workflow design based on observed pilot findings before broader rollout to production.**: Sửa theo phát hiện pilot cần đã có dữ liệu pilot, nên không thể hoàn tất trước pilot đầu tiên.
- **Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step.**: Tài liệu check criteria, escalation và SLA cũng có thể cần trước pilot để reviewer làm nhất quán; đây là phương án hợp lý bị khóa giới hạn hai lựa chọn bỏ qua.

**Cần xem lại:** Câu hỏi Choose two nhưng onboarding reviewer và documentation cũng có thể bắt buộc trước pilot. Cần giới hạn thành hai quyết định thiết kế nền tảng để khóa nguồn không loại bỏ sai các yêu cầu vận hành.

**Tham khảo:**

- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q101 · pick 2 · ✔ you got it right

An architect at Trenova Systems, Inc. is reviewing two draft communication packages for the same architectural decision. Package 1 contains a threat model, residual-risk register, and control-mapping table. Package 2 contains a list of capabilities delivered and feature-level roadmap dependencies. Which two audiences are correctly matched to these packages? (Choose two.)

- **A.** Package 1 --> engineering implementation team
- ✅ **B.** Package 1 --> security and compliance reviewer
- **C.** Package 2 --> security and compliance reviewer
- **D.** Package 2 --> executive sponsor
- ✅ **E.** Package 2 --> product manager owning the roadmap

**Answer:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Package 2 --> product manager owning the roadmap; Package 1 --> security and compliance reviewer

Roadmap/capability là nội dung product manager; threat/control/residual risk phù hợp security-compliance reviewer, theo trách nhiệm ra quyết định của họ.

#### Vì sao các phương án khác không phù hợp?

- **Package 2 --> executive sponsor**: Executive cần outcomes/trade-offs chứ roadmap feature không phải ghép đặc thù nhất.
- **Package 1 --> engineering implementation team**: Engineering cần contract/flow/config nhiều hơn risk register đơn thuần.
- **Package 2 --> security and compliance reviewer**: Roadmap không cung cấp bằng chứng control cho security.

**Tham khảo:**

- [Microsoft — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q102 · single choice · ✔ you got it right

You are reviewing a peer’s draft ADR. The ADR states the decision and the technical detail but does not state the alternatives considered or the trade-offs accepted. 

Which response is most appropriate?

- **A.** Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it.
- ✅ **B.** Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.
- **C.** Delete the ADR entirely and rely on the engineering team’s collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding.
- **D.** Replace the ADR with a different decision unrelated to the one drafted.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.

ADR cần alternatives và accepted trade-offs để người sau hiểu vì sao quyết định được chọn và điều kiện nào khiến cần xem lại.

#### Vì sao các phương án khác không phù hợp?

- **Delete the ADR entirely and rely on the engineering team’s collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding.**: Xóa ADR bỏ mất record cần cho audit/onboarding.
- **Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it.**: Chỉ decision không đủ lý do đánh giá lại.
- **Replace the ADR with a different decision unrelated to the one drafted.**: Thay decision không liên quan không sửa thiếu nội dung.

**Tham khảo:**

- [Microsoft — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q103 · pick 2 · ✔ you got it right

You are running a discovery engagement for a new Claude-based capability and must complete the requirements- gathering steps before validating with stakeholders. 

Which two steps must be completed BEFORE validating the captured requirements with stakeholders? (Choose two.) Each correct answer presents part of the solution.

- **A.** Schedule the rollout milestones and dependencies with engineering and product partners.
- **B.** Document the consolidated requirements with traceability to the source stakeholder for each item.
- **C.** Produce architecture decision records that capture the rationale for major design choices.
- ✅ **D.** Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.
- ✅ **E.** Capture the business goals, success criteria, and the in-scope user population for the engagement.

**Answer:** D, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Capture the business goals, success criteria, and the in-scope user population for the engagement.; Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.

Mục tiêu kinh doanh, tiêu chí thành công và nhóm người dùng xác định kết quả và phạm vi cần xác nhận. Các giới hạn latency, chi phí, audit, dữ liệu và quy định xác định điều kiện giải pháp phải đáp ứng. Khóa nguồn chọn hai nhóm nội dung này, nhưng tài liệu hợp nhất có traceability cũng có thể cần trước validation; không nên diễn giải rằng việc ghi yêu cầu chỉ làm sau khi xác nhận.

#### Vì sao các phương án khác không phù hợp?

- **Produce architecture decision records that capture the rationale for major design choices.**: ADR ghi lựa chọn thiết kế dựa trên yêu cầu; chốt lý do kiến trúc không phải công việc thu thập yêu cầu cốt lõi trước xác nhận.
- **Schedule the rollout milestones and dependencies with engineering and product partners.**: Mốc rollout và phụ thuộc là kế hoạch giao hàng cần dựa vào phạm vi đã hiểu, không thay việc thu thập mục tiêu và ràng buộc.
- **Document the consolidated requirements with traceability to the source stakeholder for each item.**: Hợp nhất yêu cầu và chỉ ra stakeholder nguồn là thực hành đúng, có thể phải có trước validation. Vì thế đây là phương án hợp lý ngoài khóa, làm câu hỏi choose-two cần sửa.

**Cần xem lại:** Giữ khóa nguồn. Documentation có traceability cũng là bước có thể phải hoàn tất trước validation; nên hỏi hai nhóm nội dung cần thu thập để tránh nhiều hơn hai đáp án hợp lý.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [Architectural decision record process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

</details>


---

## Q104 · single choice · ✔ you got it right

You are defining an SLA for a Claude-based assistant. 

Which SLA definition is most operationally meaningful?

- **A.** a target tied to a stakeholder sentiment measure such as “the team feels satisfied” , which cannot be measured objectively or used to trigger a documented breach response
- ✅ **B.** a measurable target with a defined metric, threshold, evaluation window, and consequence for breach (for example, “p95 per-request latency under 800 ms over a 28-day window”)
- **C.** a qualitative commitment such as “the system will be fast and reliable” , which names no metric, no threshold, and no evaluation window
- **D.** a target that names the metric and threshold but omits the evaluation window and breach consequence, leaving compliance periods and remediation triggers undefined

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** a measurable target with a defined metric, threshold, evaluation window, and consequence for breach (for example, “p95 per-request latency under 800 ms over a 28-day window”)

SLA có metric/threshold/window/breach condition mới kiểm tra được; p95 800ms trong 28 ngày là phần target phải kèm hậu quả vi phạm đã thống nhất.

#### Vì sao các phương án khác không phù hợp?

- **a target that names the metric and threshold but omits the evaluation window and breach consequence, leaving compliance periods and remediation triggers undefined**: Thiếu window và consequence không rõ kỳ đo và hành động khi sai.
- **a qualitative commitment such as “the system will be fast and reliable” , which names no metric, no threshold, and no evaluation window**: “Fast and reliable” không có chỉ số định lượng.
- **a target tied to a stakeholder sentiment measure such as “the team feels satisfied” , which cannot be measured objectively or used to trigger a documented breach response**: Cảm giác satisfaction chưa có thước đo khách quan.

**Tham khảo:**

- [Google SRE — Implementing SLOs](https://sre.google/workbook/implementing-slos/)

</details>


---

## Q105 · single choice · ✔ you got it right

You are selecting the documentation set that should accompany a Claude-based deployment at handoff. 

Which set is most complete?

- ✅ **A.** architecture overview, ADRs, component-level diagrams, runbooks for common operations, on-call playbook, and a list of known limitations
- **B.** code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members
- **C.** a single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers
- **D.** a verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** architecture overview, ADRs, component-level diagrams, runbooks for common operations, on-call playbook, and a list of known limitations

Bộ gồm tổng quan kiến trúc, ADR, sơ đồ thành phần, runbook, playbook on-call và giới hạn đã biết bao phủ cách hệ thống tổ chức, vì sao được chọn, cách vận hành và khi nào cần can thiệp. Sự kết hợp này giúp nhóm nhận bàn giao có tài liệu bền vững cho cả bảo trì lẫn sự cố.

#### Vì sao các phương án khác không phù hợp?

- **a verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference**: Walkthrough bằng lời có thể bổ trợ nhưng không lưu cách vận hành hoặc giới hạn để người vắng mặt và ca trực tương lai tra cứu.
- **code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members**: Comment mã giải thích cục bộ, không kết nối bức tranh hệ thống, lý do quyết định và hành động xử lý sự cố.
- **a single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers**: Một sơ đồ một trang cho biết hình dạng hệ thống nhưng thiếu hướng dẫn thao tác, hệ quả quyết định và giới hạn cần khi vận hành.

**Tham khảo:**

- [Architectural decision record process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q106 · single choice · ✔ you got it right

A Claude Architect is reviewing a post-deployment performance report for an AI-assisted legal document summarization system. The report includes the following observations: 

(1) Average summarization time has decreased from 47 minutes to 6 minutes per document. 

(2) Associates report spending less time on summaries but no measurable change in overall billable output. 

(3) Infrastructure costs have increased 22% due to higher API call volume from a redundant retry logic implementation. 

(4) The system occasionally generates summaries requiring attorney correction, adding an average of 8 minutes of review time per document. 

Which analysis correctly attributes each observation to the appropriate business value pillar?

- ✅ **A.** Observation 1 indicates an efficiency gain; Observation 2 indicates that productivity has not yet been realized; Observation 3 indicates a solution cost issue; Observation 4 indicates an efficiency loss that partially offsets the gain from Observation 1.
- **B.** Observations 1 and 4 together indicate a net performance SLA improvement; Observation 2 indicates a transformation gap; Observation 3 indicates a productivity drain from over-engineering.
- **C.** Observation 1 indicates a transformation outcome; Observation 2 indicates an efficiency gain; Observation 3 indicates a performance SLA degradation; Observation 4 indicates a solution cost issue.
- **D.** Observations 1 and 2 both indicate efficiency gains; Observation 3 indicates a solution cost issue; Observation 4 indicates a performance SLA issue.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Observation 1 indicates an efficiency gain; Observation 2 indicates that productivity has not yet been realized; Observation 3 indicates a solution cost issue; Observation 4 indicates an efficiency loss that partially offsets the gain from Observation 1.

47→6 phút giảm effort; 8 phút sửa bù lại một phần tiết kiệm, billable output chưa tăng nên chưa có productivity gain đo được; API tăng là solution cost.

#### Vì sao các phương án khác không phù hợp?

- **Observation 1 indicates a transformation outcome; Observation 2 indicates an efficiency gain; Observation 3 indicates a performance SLA degradation; Observation 4 indicates a solution cost issue.**: Tiết kiệm thời gian không tự là transformation; API cost không phải SLA.
- **Observations 1 and 4 together indicate a net performance SLA improvement; Observation 2 indicates a transformation gap; Observation 3 indicates a productivity drain from over-engineering.**: Không có threshold SLA nào để gán net SLA improvement.
- **Observations 1 and 2 both indicate efficiency gains; Observation 3 indicates a solution cost issue; Observation 4 indicates a performance SLA issue.**: Correction effort không tự là performance-SLA breach.

**Tham khảo:**

- [Microsoft — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q107 · pick 2 · ✘ you got it wrong

You are building a feedback-and-alignment routine for a multi-stakeholder deployment. 

Which two practices belong in the routine? (Choose two.) Each correct answer presents a complete solution.

- **A.** Record each session and distribute the recording to stakeholders who could not attend live.
- **B.** Escalate any disagreement among stakeholders to the executive sponsor for binding resolution.
- ✅ **C.** Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.
- **D.** Rotate facilitation among the participating stakeholder groups to share ownership of the routine.
- ✅ **E.** Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.

**Answer:** C, E · **Yours:** A, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.; Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.

Lịch xem lại kỳ vọng và giả định tạo cơ hội điều chỉnh khi điều kiện đổi. Giải quyết rõ các quan điểm khác nhau giúp nhóm ghi nhận thỏa thuận và đánh đổi thật sự, thay vì mang mâu thuẫn chưa xử lý sang thiết kế hoặc triển khai.

#### Vì sao các phương án khác không phù hợp?

- **Record each session and distribute the recording to stakeholders who could not attend live.**: Ghi hình và gửi lại hỗ trợ người vắng mặt nhưng không tự kiểm tra giả định hoặc giải quyết bất đồng.
- **Escalate any disagreement among stakeholders to the executive sponsor for binding resolution.**: Đẩy mọi bất đồng lên sponsor làm mất cơ hội giải quyết ở cấp phù hợp; escalation nên dành cho xung đột vượt quyền hoặc bế tắc đã xác định.
- **Rotate facilitation among the participating stakeholder groups to share ownership of the routine.**: Luân phiên điều phối có thể tăng sở hữu chung, nhưng không bảo đảm các kỳ vọng thay đổi được xét lại hay mâu thuẫn được tháo gỡ.

**Tham khảo:**

- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q108 · single choice · ✔ you got it right

You are choosing the level of detail for an implementation guide. The audience is a delivery team that will build the deployment. 

Which guidance composition best serves them?

- ✅ **A.** component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks
- **B.** an architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation
- **C.** component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks
- **D.** an architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration parameter tables, or operational runbooks for the delivery team to follow

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks

Delivery cần trách nhiệm component, contract, flow sequence, default config và runbook để biết xây gì, nối thế nào và xử lý vận hành ra sao.

#### Vì sao các phương án khác không phù hợp?

- **component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks**: Thiếu sequence/config/runbook để triển khai và vận hành.
- **an architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration parameter tables, or operational runbooks for the delivery team to follow**: Overview/sequence chưa đủ khi thiếu contract và tham số.
- **an architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation**: Overview/limitations quá cao, thiếu chi tiết build thực tế.

**Tham khảo:**

- [Microsoft — Architecture decision records](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

</details>


---

## Q109 · single choice · ✔ you got it right

You are running a discovery session with a business sponsor who asks for “an AI system to fix our customer escalations” . 

Which approach best yields actionable requirements?

- **A.** Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions.
- **B.** Assume the requirement matches the architect’s previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor.
- **C.** Accept the sponsor’s original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints.
- ✅ **D.** Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints (latency, cost, audit, data sensitivity) apply.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints (latency, cost, audit, data sensitivity) apply.

Tách yêu cầu “sửa escalations” thành người tham gia, trigger, kết quả tốt và ràng buộc tạo yêu cầu có thể thiết kế và kiểm thử. Các câu hỏi latency, chi phí, audit và độ nhạy dữ liệu giúp giới hạn giải pháp trước khi chọn kỹ thuật.

#### Vì sao các phương án khác không phù hợp?

- **Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions.**: Hoãn vô hạn đòi sponsor tự làm toàn bộ discovery, trong khi vai trò của architect là giúp làm rõ đề bài.
- **Accept the sponsor’s original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints.**: Chấp nhận câu chung là yêu cầu cuối cùng bỏ trống tác nhân, trigger và tiêu chí thành công để đánh giá thiết kế.
- **Assume the requirement matches the architect’s previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor.**: Mượn nguyên bối cảnh ngành khác có thể nhập sai quy trình hoặc giới hạn dữ liệu chưa được sponsor xác nhận.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q110 · single choice · ✔ you got it right

A business sponsor has requested an AI solution to “improve customer experience” . The sponsor cannot articulate which customer journey is failing, which metric reflects the failure, or which decisions the AI should support. The sponsor is asking you to begin design work next week. 

Which delegation-competency action should you take first?

- ✅ **A.** Facilitate a structured discovery to define the failing decision and the target metric.
- **B.** Begin prototyping a generic assistant against the broad request before the next deadline.
- **C.** Propose a fixed scope that you commit to by default based on your own assumptions.
- **D.** Recommend that the sponsor revise the request and resubmit it later for evaluation.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Facilitate a structured discovery to define the failing decision and the target metric.

Discovery xác định journey/decision đang hỏng và metric mục tiêu trước mới biết có nên dùng AI và delegate phần nào.

#### Vì sao các phương án khác không phù hợp?

- **Recommend that the sponsor revise the request and resubmit it later for evaluation.**: Bảo resubmit không giúp sponsor làm rõ nhu cầu.
- **Propose a fixed scope that you commit to by default based on your own assumptions.**: Scope mặc định từ giả định architect dễ giải sai vấn đề.
- **Begin prototyping a generic assistant against the broad request before the next deadline.**: Generic prototype chưa có metric để biết tốt hơn ở đâu.

**Tham khảo:**

- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q111 · pick 2 · ✘ you got it wrong

You are compiling continuity practices that span the deployment lifecycle. 

Which two practices belong on the list? (Choose two.) Each correct answer presents a complete solution.

- ✅ **A.** Capture lessons learned at the end of each phase and surface them as inputs to the next phase.
- **B.** Archive every phase deliverable in long-term storage to preserve a record of what was produced.
- **C.** Lock decisions made in early phases to prevent revisiting them as later phases begin.
- ✅ **D.** Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.
- **E.** Maintain a stakeholder register and notify the listed parties at every phase transition event.

**Answer:** A, D · **Yours:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.; Capture lessons learned at the end of each phase and surface them as inputs to the next phase.

Mang framework và reference set đánh giá qua các vòng giữ mốc so sánh, đồng thời bổ sung trường hợp mới khi cần. Chuyển bài học của từng giai đoạn thành đầu vào giai đoạn sau giúp kinh nghiệm thực tế thay đổi quyết định tiếp theo; đây là tính liên tục chủ động chứ không chỉ lưu hồ sơ.

#### Vì sao các phương án khác không phù hợp?

- **Maintain a stakeholder register and notify the listed parties at every phase transition event.**: Stakeholder register và thông báo chuyển giai đoạn là thực hành quản trị hợp lệ nhưng không tự mang bằng chứng đánh giá hoặc bài học sang quyết định tiếp theo.
- **Lock decisions made in early phases to prevent revisiting them as later phases begin.**: Khóa cứng quyết định đầu kỳ chặn thích nghi với bằng chứng và yêu cầu mới, trái mục tiêu học qua vòng đời.
- **Archive every phase deliverable in long-term storage to preserve a record of what was produced.**: Lưu trữ deliverable giữ lịch sử nhưng không bảo đảm chúng được dùng lại để kiểm tra hồi quy hoặc cải tiến giai đoạn sau.

**Tham khảo:**

- [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/)

</details>


---

## Q112 · pick 2 · ✔ you got it right

You are listing characteristics of strong architectural-decision communication. 

Which two characteristics belong on the list? (Choose two.) Each correct answer presents a complete solution.

- ✅ **A.** alternatives considered along with the criteria that were used to evaluate each alternative
- **B.** omission of rejected alternatives to keep the decision document focused and concise for readers
- **C.** distribution to a standing review forum with mandatory attendance from senior engineering leaders
- **D.** use of a consistent template across the team to standardize the visual presentation of decisions
- ✅ **E.** ownership and review cadence for revisiting the decision when conditions or assumptions change

**Answer:** A, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** ownership and review cadence for revisiting the decision when conditions or assumptions change; alternatives considered along with the criteria that were used to evaluate each alternative

Ghi rõ người chịu trách nhiệm và thời điểm xem lại giúp quyết định không trở thành giả định vĩnh viễn. Lưu các phương án cùng tiêu chí đánh giá giúp người đến sau hiểu vì sao lựa chọn phù hợp với bối cảnh lúc đó.

#### Vì sao các phương án khác không phù hợp?

- **omission of rejected alternatives to keep the decision document focused and concise for readers**: Bỏ các phương án bị loại làm mất dấu vết đánh đổi.
- **distribution to a standing review forum with mandatory attendance from senior engineering leaders**: Họp bắt buộc với lãnh đạo không tự tạo ra lý do có thể kiểm tra.
- **use of a consistent template across the team to standardize the visual presentation of decisions**: Mẫu chung giúp dễ đọc nhưng hình thức thống nhất chưa giải thích quyết định hay thời điểm xem lại.

**Tham khảo:**

- [Architectural decision record process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

</details>


---

## Q113 · pick 2 · ✔ you got it right

An architect is reviewing a set of architecture documentation packages before handing off a Claude-based pipeline to an implementation team. 

Which two characteristics indicate that a documentation package is sufficient to support implementation without ongoing architect involvement? (Choose two.)

- **A.** The document includes the architect's contact information for questions arising during implementation.
- ✅ **B.** The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.
- **C.** The document lists all Claude models that were evaluated but does not specify which was selected or why.
- **D.** The document provides a high-level narrative description of the business problem without component-level detail.
- ✅ **E.** The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.

**Answer:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.; The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.

Hợp đồng tích hợp, schema cấu hình và dạng dữ liệu vào/ra cho nhóm biết phải xây gì và nối các thành phần thế nào. Nhật ký quyết định giải thích lý do và phương án bị loại để nhóm xử lý tình huống mới mà không phải hỏi lại kiến trúc sư.

#### Vì sao các phương án khác không phù hợp?

- **The document includes the architect's contact information for questions arising during implementation.**: Thông tin liên hệ chỉ chuyển sự phụ thuộc sang việc hỏi người viết.
- **The document provides a high-level narrative description of the business problem without component-level detail.**: Mô tả nghiệp vụ cấp cao thiếu chi tiết để triển khai từng thành phần.
- **The document lists all Claude models that were evaluated but does not specify which was selected or why.**: Danh sách model đã thử không cho biết model cần triển khai hoặc lý do chọn.

**Tham khảo:**

- [Architectural decision record process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

</details>


---

## Q114 · single choice · ✔ you got it right

A healthcare organization is evaluating two Claude-powered AI architectures for a clinical documentation assistant. 

- Architecture X produces higher output quality scores but costs $0.18 per documentation session and averages 4.2 seconds per response. 
- Architecture Y scores slightly lower on quality metrics but costs $0.09 per session and averages 2.1 seconds per response.

The stated SLA requires responses under 3 seconds, and the annual volume is projected at 2 million documentation sessions. 

Which evaluation approach correctly applies business value pillar analysis to this decision?

- ✅ **A.** Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.
- **B.** Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments.
- **C.** Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most.
- **D.** Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment.

**Answer:** A

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

X tốn 0,18 USD/lượt và 4,2 giây; Y tốn 0,09 USD và 2,1 giây; ngưỡng dưới 3 giây, 2 triệu lượt/năm.

#### 2. Đề thực sự muốn gì?

under 3 seconds → dưới 3 giây; annual volume → lượng năm; quality delta → chênh chất lượng

#### 3. Đáp án

- **C. Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.**

#### 4. Vì sao đúng?

C loại X theo diễn giải SLA của đề rồi đánh giá Y có đạt chất lượng tối thiểu không. Chi phí X=360.000 USD/năm, Y=180.000, chênh 180.000. Trung bình không chứng minh SLA theo p95 hoặc từng lượt; triển khai thật cần metric đúng loại.

#### 5. Vì sao các phương án khác sai?

- **A:** chỉ giá rẻ bỏ yêu cầu chất lượng và SLA.
- **B:** hứa sửa SLA sau triển khai khi chưa có bằng chứng.
- **D:** hybrid chưa phân tích có thể vẫn đưa ca tới X vi phạm ngưỡng.

#### 6. Câu thần chú

HARD CONSTRAINT TRƯỚC → quality floor → cost/productivity.

</details>


---

## Q115 · single choice · ✔ you got it right

You are documenting an architectural decision to support future audit and onboarding. 

Which artifact is the strongest fit?

- **A.** a slide deck in a presentation folder with no accompanying written rationale
- **B.** a short verbal note shared during a hallway conversation with no written record
- ✅ **C.** an Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors
- **D.** a code comment in a single file that contains an opinion of one engineer

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** an Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors

Architecture Decision Record lưu bối cảnh, lựa chọn, phương án, hệ quả, ngày và tác giả thành hồ sơ bền vững. Người kiểm toán và người mới có thể tìm lại cả quyết định lẫn lý do mà không phụ thuộc trí nhớ của nhóm.

#### Vì sao các phương án khác không phù hợp?

- **a slide deck in a presentation folder with no accompanying written rationale**: Slide thiếu lý do viết lại không đủ để tái dựng đánh đổi.
- **a code comment in a single file that contains an opinion of one engineer**: Ý kiến trong một file quá hẹp và không ghi đầy đủ bối cảnh quyết định.
- **a short verbal note shared during a hallway conversation with no written record**: Trao đổi miệng không có bản ghi không thể tra cứu hoặc kiểm toán sau này.

**Tham khảo:**

- [Architectural decision record process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

</details>


---

## Q116 · pick 2 · ✔ you got it right

The engineering lead at Trenova Systems, Inc. is evaluating two proposals for improving developer workflows using Claude-assisted tooling Proposal A adds Claude Code to the IDE for inline code generation and review. Proposal B routes all code-generation requests through a shared Slack bot with no IDE integration. 

Which two observations most accurately evaluate these proposals against workflow-improvement objectives? (Choose two.)

- **A.** Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue.
- **B.** Both proposals are equivalent because the underlying model capabilities are identical regardless of integration point.
- ✅ **C.** Proposal B introduces workflow friction by requiring developers to leave the IDE, which undermines the productivity objective.
- **D.** Proposal B is superior because centralizing requests in Slack creates an auditable log of all code-generation activity.
- ✅ **E.** Proposal A reduces context-switching by surfacing AI assistance at the point of development without requiring a separate tool.

**Answer:** C, E

<details><summary>Explanation</summary>

#### 1. Chuyện gì đang xảy ra?

A hỗ trợ ngay IDE; B bắt chuyển sang bot Slack để lấy code rồi quay lại.

#### 2. Đề thực sự muốn gì?

context-switching → chuyển ngữ cảnh; point of development → ngay nơi phát triển

#### 3. Đáp án

- **B. Proposal B introduces workflow friction by requiring developers to leave the IDE, which undermines the productivity objective.**
- **C. Proposal A reduces context-switching by surfacing AI assistance at the point of development without requiring a separate tool.**

#### 4. Vì sao đúng?

C: A giảm đổi công cụ, dùng hỗ trợ ngay lúc viết/review. B: B thêm ma sát rời IDE. So mục tiêu cải thiện workflow, không chỉ so cùng model.

#### 5. Vì sao các phương án khác sai?

- **A:** log tập trung hữu ích nhưng không chứng minh năng suất tốt hơn.
- **D:** queue Slack không tự bù thời gian chuyển ngữ cảnh.
- **E:** cùng model mà nơi tích hợp khác vẫn khác hiệu quả.

#### 6. Câu thần chú

WORKFLOW → AI ở điểm làm việc, giảm đổi ngữ cảnh.

</details>


---

## Q117 · pick 2 · ✘ you got it wrong

You are integrating Claude Code into a team workflow and must complete the design and configuration steps before piloting the integrated workflow. 

Which two steps must be completed BEFORE piloting the integrated workflow with a small group? (Choose two.) Each correct answer presents part of the solution.

- ✅ **A.** Configure the project-scope Model Context Protocol (MCP) servers, permissions, subagents, and persistent project context.
- **B.** Negotiate the workflow change with affected teams and obtain formal sign-off from each manager.
- **C.** Document the integrated workflow with hand-off criteria, permission boundaries, and on-call runbooks.
- **D.** Iterate the integrated workflow based on pilot findings before broader rollout to the team.
- ✅ **E.** Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.

**Answer:** A, E · **Yours:** C, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.; Configure the project-scope Model Context Protocol (MCP) servers, permissions, subagents, and persistent project context.

Trước khi thử nghiệm, nhóm cần xác định bước nào giao AI và bước nào giữ quyền quyết định của con người, rồi cấu hình MCP, permissions, subagents và ngữ cảnh dự án để hiện thực hóa thiết kế. Đây là hai hoạt động thiết kế/cấu hình mà khóa muốn nhấn mạnh; tài liệu và phê duyệt phù hợp vẫn có thể cần trước pilot.

#### Vì sao các phương án khác không phù hợp?

- **Iterate the integrated workflow based on pilot findings before broader rollout to the team.**: Cải tiến từ kết quả pilot chỉ thực hiện sau khi đã có kết quả.
- **Document the integrated workflow with hand-off criteria, permission boundaries, and on-call runbooks.**: Tài liệu bàn giao và ranh giới quyền là hữu ích, có thể cần trước pilot; khóa bỏ qua lựa chọn hợp lệ này nên câu hỏi cần làm rõ.
- **Negotiate the workflow change with affected teams and obtain formal sign-off from each manager.**: Phê duyệt có thể cần theo quản trị của tổ chức, nhưng chữ ký mọi quản lý không phải điều kiện kỹ thuật phổ quát.

**Cần xem lại:** Giữ khóa nguồn. Cách hỏi BEFORE piloting khiến documentation và một số phê duyệt cũng có thể đúng; nên nêu rõ đang hỏi hai hoạt động thiết kế/cấu hình trọng tâm.

**Tham khảo:**

- [Settings files and precedence](https://code.claude.com/docs/en/settings)

</details>


---

## Q118 · pick 2 · ✔ you got it right

You are resolving a Claude Code operational issue reported by the team and must complete the diagnostic steps before applying a targeted fix. 

Which two steps must be completed BEFORE applying the targeted fix? (Choose two.) Each correct answer presents part of the solution.

- **A.** Notify the affected users that a fix has been deployed and the operational issue is resolved.
- ✅ **B.** Reproduce the issue with a minimal reproduction case to confirm the symptom and isolate variables.
- ✅ **C.** Form a hypothesis about the most likely root cause given the symptom, configuration, and recent changes.
- **D.** Open a permanent change request in the change-management system to formalize the upcoming fix.
- **E.** Document the root cause and the fix in the team runbook for future occurrences.

**Answer:** B, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Form a hypothesis about the most likely root cause given the symptom, configuration, and recent changes.; Reproduce the issue with a minimal reproduction case to confirm the symptom and isolate variables.

Giả thuyết dựa trên triệu chứng, cấu hình và thay đổi gần đây định hướng điều cần kiểm tra. Tái hiện tối thiểu loại bỏ biến nhiễu và xác nhận lỗi, nhờ đó bản sửa nhắm vào nguyên nhân thay vì phỏng đoán.

#### Vì sao các phương án khác không phù hợp?

- **Open a permanent change request in the change-management system to formalize the upcoming fix.**: Change request có thể là thủ tục bắt buộc nhưng không xác định nguyên nhân.
- **Document the root cause and the fix in the team runbook for future occurrences.**: Runbook cần kết luận đã được kiểm chứng; chưa thể ghi bản sửa là đúng trước chẩn đoán.
- **Notify the affected users that a fix has been deployed and the operational issue is resolved.**: Thông báo đã giải quyết phải chờ triển khai và kiểm tra thành công.

**Tham khảo:**

- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)

</details>


---

## Q119 · pick 2 · ✔ you got it right

A Claude architect is configuring a shared Claude Code environment for a twelve-person development team. 

Which two configuration decisions most directly establish a consistent, secure team environment? (Choose two.)

- ✅ **A.** applying managed configuration to enforce non-overridable security and compliance policies across all team members
- ✅ **B.** committing shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository
- **C.** storing the team’s shared API key in the project-scope settings.json so all engineers use the same credential
- **D.** setting editor theme and display preferences at the project scope so they are uniform across workstations
- **E.** instructing each engineer to configure their preferred Claude model in personal user-scope settings

**Answer:** A, B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** applying managed configuration to enforce non-overridable security and compliance policies across all team members; committing shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository

Managed settings đặt chính sách bảo mật ở tầng ưu tiên tổ chức. Cấu hình project được commit chia sẻ bộ MCP và permissions cho cùng repository. Hai tầng bổ sung nhau: mặc định chung cho nhóm và giới hạn do quản trị viên áp đặt.

#### Vì sao các phương án khác không phù hợp?

- **instructing each engineer to configure their preferred Claude model in personal user-scope settings**: Tùy chọn model cá nhân không thiết lập chính sách bảo mật chung.
- **storing the team’s shared API key in the project-scope settings.json so all engineers use the same credential**: Commit API key làm lộ bí mật và khó thu hồi quyền riêng từng người.
- **setting editor theme and display preferences at the project scope so they are uniform across workstations**: Theme editor chỉ ảnh hưởng trình bày, không kiểm soát quyền công cụ.

**Tham khảo:**

- [Settings files and precedence](https://code.claude.com/docs/en/settings)

</details>


---

## Q120 · single choice · ✔ you got it right

You are configuring Claude Code for a team that needs every engineer to share the same MCP server set, permission rules, and project context across the engineering monorepo. 

Which configuration scope best supports this requirement?

- **A.** local scope configured only on the lead architect’s machine, with no configuration present on other engineers’ machines and no mechanism to distribute MCP servers or permission rules
- ✅ **B.** project scope, with the configuration committed to the repository so every engineer working in the project picks up the same MCP servers, permissions, and context
- **C.** user scope configured individually on each engineer’s machine, with no shared configuration committed to the repository and no guarantee of consistency across the team
- **D.** user scope with the MCP server definitions and permission rules placed in each engineer’s ~/.claude/settings.json and synchronized manually via a shared setup script outside version control

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** project scope, with the configuration committed to the repository so every engineer working in the project picks up the same MCP servers, permissions, and context

Project scope đưa cấu hình đi cùng monorepo: MCP trong .mcp.json, permissions trong .claude/settings.json và hướng dẫn dự án trong CLAUDE.md. Version control giúp nhóm cùng nhận thay đổi đã review; không có nghĩa mọi loại dữ liệu đều nằm trong một file.

#### Vì sao các phương án khác không phù hợp?

- **user scope configured individually on each engineer’s machine, with no shared configuration committed to the repository and no guarantee of consistency across the team**: Cấu hình user độc lập không đảm bảo đồng nhất theo repository.
- **user scope with the MCP server definitions and permission rules placed in each engineer’s ~/.claude/settings.json and synchronized manually via a shared setup script outside version control**: Đồng bộ tay ngoài version control dễ lệch phiên bản và không gắn thay đổi với mã.
- **local scope configured only on the lead architect’s machine, with no configuration present on other engineers’ machines and no mechanism to distribute MCP servers or permission rules**: Cấu hình local của người trưởng nhóm không phân phối sang máy đồng nghiệp.

**Tham khảo:**

- [Settings files and precedence](https://code.claude.com/docs/en/settings)

</details>


---

## Q121 · single choice · ✔ you got it right

A Claude needs to ensure that a security-hardening flag cannot be disabled by any individual engineer after it is set. 

Which configuration scope correctly enforces this requirement?

- **A.** project scope (.claude/settings.json) committed to the repository
- **B.** user scope (~/.claude/settings.json) on each engineer’s machine
- ✅ **C.** managed configuration applied centrally and marked as non-overridable
- **D.** environment variable defined in the CI/CD pipeline only

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** managed configuration applied centrally and marked as non-overridable

Managed configuration là tầng phù hợp để quản trị viên áp đặt tùy chọn hardening được hỗ trợ; cấu hình cá nhân hoặc project không thể hạ chính sách đó. Cần dùng đúng setting có ngữ nghĩa cưỡng chế, không xem mọi giá trị mặc định là khóa bảo mật.

#### Vì sao các phương án khác không phù hợp?

- **environment variable defined in the CI/CD pipeline only**: Biến trong CI chỉ tác động môi trường CI, không bao phủ phiên local của mọi kỹ sư.
- **project scope (.claude/settings.json) committed to the repository**: File project là cấu hình nhóm có thể chỉnh sửa, không phải chính sách tổ chức cao nhất.
- **user scope (~/.claude/settings.json) on each engineer’s machine**: File user do từng kỹ sư kiểm soát nên không đáp ứng cấm tự tắt.

**Tham khảo:**

- [Settings files and precedence](https://code.claude.com/docs/en/settings)

</details>


---

## Q122 · single choice · ✔ you got it right

You are supporting a team whose Claude Code sessions consistently load 60 or more MCP tools from many servers, exhausting context budget before the session begins. Which adjustment most directly addresses this issue without removing capability?

- **A.** Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session.
- ✅ **B.** Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.
- **C.** Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget.
- **D.** Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.

Tool Search giữ catalog đủ nhưng defer schema đến khi cần, giảm overhead 60 MCP definitions trước khi làm việc mà không tắt khả năng.

#### Vì sao các phương án khác không phù hợp?

- **Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget.**: Thêm server càng tăng definition overhead.
- **Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue.**: Prompt dài hơn dùng thêm context không giảm tool schema.
- **Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session.**: Tắt hết giải phóng context bằng cách mất toàn capability.

**Tham khảo:**

- [Claude — Tool search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)

</details>


---

## Q123 · single choice · ✘ you got it wrong

A team manager wants all engineers working on the same repository to share identical MCP server definitions without manual synchronization. 

Which configuration approach satisfies this requirement?

- **A.** each engineer maintains a personal ~/.claude/settings.json with the shared definitions
- **B.** managed configuration pushed to all endpoints by the administrator
- ✅ **C.** project-scope .claude/settings.json and .mcp.json files committed to the repository
- **D.** environment variables set at the operating-system level on each workstation

**Answer:** C · **Yours:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** project-scope .claude/settings.json and .mcp.json files committed to the repository

Commit .mcp.json ở project scope cho định nghĩa server đi cùng repository; .claude/settings.json chia sẻ permissions liên quan. Đây là cách nhóm tự quản lý cấu hình chung theo mã, nhưng đề chưa loại trừ quản trị MCP tập trung cũng có thể đồng bộ định nghĩa.

#### Vì sao các phương án khác không phù hợp?

- **managed configuration pushed to all endpoints by the administrator**: Managed MCP cũng phân phối định nghĩa nhất quán; đây là phương án có thể đúng mà khóa không chọn.
- **environment variables set at the operating-system level on each workstation**: Biến môi trường từng máy không tự phân phối định nghĩa server có version chung.
- **each engineer maintains a personal ~/.claude/settings.json with the shared definitions**: Tự giữ file user đòi hỏi cơ chế đồng bộ riêng.

**Cần xem lại:** Managed MCP cũng có thể đáp ứng identical definitions without manual synchronization. Để chỉ có một đáp án, cần thêm yêu cầu cấu hình đi cùng repo và do project quản lý; giữ nguyên khóa nguồn.

**Tham khảo:**

- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)

</details>


---

## Q124 · pick 2 · ✔ you got it right

A Claude-based research assistant begins producing responses that confidently contradict its retrieved source documents despite no change to the retrieval pipeline. 

Which two diagnostic actions most directly identify the root cause of this behavior? (Choose two.)

- **A.** Reduce the temperature setting to lower response variance across all query types.
- ✅ **B.** Isolate whether the failure reproduces on the previous model version to test for model mismatch.
- **C.** Switch the retrieval index to a denser embedding model to improve chunk relevance scores.
- ✅ **D.** Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.
- **E.** Increase the context window size to allow more retrieved chunks per query.

**Answer:** B, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Isolate whether the failure reproduces on the previous model version to test for model mismatch.; Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.

Chạy lại model trước kiểm tra version regression và đọc grounding prompt kiểm tra ràng buộc nguồn; đây là chẩn đoán mục tiêu khi retrieval không đổi.

#### Vì sao các phương án khác không phù hợp?

- **Switch the retrieval index to a denser embedding model to improve chunk relevance scores.**: Đổi embedding chưa chứng minh retrieval là nguyên nhân.
- **Reduce the temperature setting to lower response variance across all query types.**: Giảm temperature có thể thay variance nhưng không cô lập nguyên nhân.
- **Increase the context window size to allow more retrieved chunks per query.**: Thêm context không tự sửa claim trái tài liệu.

**Tham khảo:**

- [Claude — Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
- [Claude — Define success and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)

</details>


---

## Q125 · single choice · ✔ you got it right

You are supporting an engineer whose newly added MCP server does not appear in their Claude Code session. 

Which diagnostic step should be tried first?

- **A.** Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.
- **B.** Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.
- **C.** Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.
- ✅ **D.** Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

Dùng claude mcp list để xác nhận server đã đăng ký và đúng scope trước. Sau đó kiểm tra /mcp và reconnect hoặc khởi động lại nếu cấu hình chưa được nhận; bằng chứng này giúp phân biệt lỗi đăng ký với lỗi kết nối.

#### Vì sao các phương án khác không phù hợp?

- **Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.**: Cài lại hệ điều hành quá rộng và phá trạng thái trước khi kiểm tra cấu hình.
- **Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.**: Tắt mọi server không xác nhận server mới đã được đăng ký đúng.
- **Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.**: Đổi họ sản phẩm bỏ qua nguyên nhân cấu hình đang cần chẩn đoán.

**Tham khảo:**

- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)

</details>


---

## Q126 · single choice · ✔ you got it right

You are supporting an engineer whose newly added MCP server does not appear in their Claude Code session. 

Which diagnostic step should be tried first?

- ✅ **A.** Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.
- **B.** Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.
- **C.** Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.
- **D.** Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

Listing và server status cho thấy MCP mới có trong cấu hình hiệu lực hay chưa; chỉ reconnect sau khi xác minh scope/config phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.**: Reinstall OS không phải bước đầu cho một server chưa hiện.
- **Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.**: Disable mọi MCP không phân biệt server mới đăng ký sai ở đâu.
- **Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.**: Chuyển product bỏ workflow mà chưa xác định nguyên nhân.

**Tham khảo:**

- [Claude Code — MCP](https://code.claude.com/docs/en/mcp)

</details>
