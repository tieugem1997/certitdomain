# CertiTDomain — Ôn luyện chứng chỉ offline

Bộ sưu tập đề luyện thi chứng chỉ + player offline (thuần HTML/JS, không cần server).

## Dùng ngay

Mở `_player/index.html` bằng trình duyệt (file://) — hoặc bản online:
**https://tieugem1997.github.io/certitdomain/_player/**

3 chế độ mỗi bộ đề:

| Chế độ | Mô tả |
|---|---|
| 📖 Học | Hiện đáp án + giải thích ngay từng câu |
| 🎯 Thi thử | Làm từng câu, bấm "Kiểm tra đáp án" từng câu, xem giải thích liền |
| 📝 Thi | Làm hết rồi nộp cuối bài, chấm điểm, xem lại bài làm |

Tiến độ lưu trên trình duyệt (localStorage). Có thể import thêm bộ đề từ file `*-qa.json`.

## Bộ đề

| Mã | Tên | Số câu | Nguồn |
|---|---|---|---|
| AB-100 | Agentic AI Business Solutions Architect | 111 | T-Study |
| AB-730 | AI Business Professional | 100 | T-Study |
| AB-731 | AI Transformation Leader | 100 | T-Study |
| AI-103 | Azure AI Apps and Agents Developer Associate | 175 | T-Study |
| CCAO-F | Claude Certified Associate – Foundations | 169 | T-Study |
| CCAF | Claude Certified Architect – Foundations | 175 | T-Study |
| CCAR-P | Claude Certified Architect – Professional | 126 | practice-cert |
| CCAR-P (T-Study) | Claude Certified Architect – Professional | 166 | T-Study |
| CCDV-F | Claude Certified Developer – Foundations | 155 | practice-cert |
| CCDV-F (T-Study) | Claude Certified Developer – Foundations | 110 | T-Study |
| DATABRICKS-DEA | Databricks Certified Data Engineer Associate | 528 | practice-cert |
| DP-800 | Developing AI-Enabled Database Solutions | 141 | T-Study |
| GH-300 | GitHub Copilot | 116 | T-Study |

> ⚠️ Tài liệu chỉ dùng để luyện dạng đề — hãy đối chiếu với nguồn chính thức.

## Cấu trúc

- `_player/` — app offline (HTML/CSS/JS thuần)
- `<slug>/` — mỗi bộ đề: `<slug>-qa.json` (dữ liệu player), `-qa.js`, `-qa.md`, `-raw.json`
- `_scrape-tool/` — công cụ cào + build bộ đề (xem `_scrape-tool/README.md`)
- `_tstudy-data/` — dữ liệu gốc cào từ T-Study (tstudy.vercel.app)

## Cập nhật bộ đề

```
cd _scrape-tool
python tstudy_scrape.py all                    # cào + build toàn bộ course công khai
python tstudy_scrape.py build ccao-f ../ccao-f "CCAO-F: ..." --group-by-type   # gom theo dạng câu
```

Bộ đề mới phải được đăng ký trong `BUILTIN_DECKS` (cuối `_player/app.js`).
