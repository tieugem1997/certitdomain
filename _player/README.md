# 🎯 Ôn luyện chứng chỉ — Offline

## Cách dùng

1. Mở file **`index.html`** trong thư mục này bằng trình duyệt (nhấn đúp chuột).
2. Chọn bộ đề, mỗi bộ có **2 nút**:
   - **📖 Học** — mỗi câu **hiện luôn đáp án đúng + giải thích**, không cần trả lời
   - **📝 Thi** — làm bài như thi thật: chọn đáp án, đi hết bài rồi **Nộp bài** mới chấm điểm
3. Sau khi nộp bài thi: xem điểm → **🔍 Xem lại bài làm** để xem từng câu sai kèm giải thích.

## Tính năng

| Tính năng | Mô tả |
|---|---|
| 📖 Chế độ Học | Hiện luôn đáp án đúng (✅) + giải thích chi tiết từng câu + link tham khảo |
| 📝 Chế độ Thi | Không hiện đáp án, Nộp bài cuối cùng mới chấm — đúng/sai/bỏ trống + phần trăm |
| 🔍 Xem lại bài thi | Từng câu: đáp án của bạn vs đáp án đúng + giải thích |
| 🗺️ Bản đồ câu hỏi | Xanh = đúng, đỏ = sai, xám = chưa làm, xanh dương = đã trả lời; bấm số để nhảy |
| 🔍 Bộ lọc | Theo chế độ: Tất cả / Câu sai / Câu đúng / Đã trả lời / Chưa trả lời / Đánh dấu |
| 🚩 Đánh dấu | Gắn cờ câu khó để ôn lại sau |
| 💾 Lưu tự động | Bài thi làm dở, kết quả lần thi gần nhất — mở lại vẫn còn |
| 🌓 Sáng/tối | Nút 🌓 góc trên phải |
| ⌨️ Phím tắt | `Enter` = câu tiếp theo · `←` `→` = chuyển câu |
| 📂 Import | Nạp bộ đề khác từ file `*-qa.json` (lưu lại trên máy, có nút ✕ để xóa) |

## Bộ đề có sẵn

| Bộ đề | Số câu |
|---|---|
| 🤖 CCDV-F — Claude Certified Developer – Foundations | 155 |
| 🧱 DATABRICKS-DEA — Databricks Data Engineer Associate | 528 |
| 🏗️ CCAR-P — Claude Certified Architect (Professional) | 126 |

Nguồn: practice-cert.maithienan.com (chế độ luyện tập có giải thích).

## Import bộ đề mới

File JSON phải có cấu trúc mỗi câu:

```json
{
  "no": 1,
  "type": "single",            // hoặc "multiple"
  "select": 1,                 // số đáp án cần chọn
  "question": "Nội dung câu hỏi (Markdown đơn giản)",
  "options": [{"key": "A", "text": "..."}, ...],
  "correct": ["A"],
  "explanation": "Giải thích (Markdown đơn giản)",
  "references": [{"title": "Tên tài liệu", "url": "https://..."}]
}
```

## Ghi chú kỹ thuật

- Trình duyệt chặn đọc file JSON trực tiếp khi mở từ `file://`, nên player load bộ đề qua file `*-qa.js` (JSON gói trong biến JS) bằng thẻ `<script>`. Nếu thêm bộ đề mới vào thư mục chung, cần:
  1. Tạo `<slug>-qa.js` cạnh file `-qa.json` (nội dung `window.__PC_DECK_LAST__ = <nội dung qa.json>;`)
  2. Thêm entry vào `BUILTIN_DECKS` trong `app.js`
