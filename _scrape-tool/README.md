# Công cụ cào bộ đề

Hai nguồn:
1. **T-Study** (`tstudy.vercel.app`) — nguồn chính hiện tại. Site Next.js nhúng toàn bộ
   đáp án + giải thích trong flight data của trang `/study/<id>?view=all` → cào bằng
   HTTP thường, **không cần cookie/trình duyệt**.
2. practice-cert.maithienan.com (site cũ, trả phí) — xem phần dưới.

## Cào T-Study (tstudy_scrape.py)

Chỉ cần Python 3.12+ (thư viện chuẩn, không cần pip install gì).

```
python tstudy_scrape.py catalog                 # danh sách 14 course từ homepage
python tstudy_scrape.py fetch <slug>            # -> ../_tstudy-data/<slug>.json (dữ liệu site)
python tstudy_scrape.py build <slug> <outdir> "<title>" [--out-slug <slug-ra>]
python tstudy_scrape.py all                     # cào + build toàn bộ course công khai
python tstudy_scrape.py unlock <slug> <password>  # mở khóa course riêng tư, rồi fetch lại
python verify_decks.py                          # kiểm tra chất lượng các bộ đề đã build
```

Ghi chú:
- Course riêng tư (PMI-CPMAI `cpmai`, 3 Databricks) hiện 404 ở `?view=all` — phải
  `unlock` bằng mật khẩu course (POST `/api/course-access/<id>` set cookie, lưu vào
  `../_tstudy-data/cookies.txt`) rồi mới `fetch` được.
- Flight data có T-template row bị chia nhỏ giữa các push và row con nhúng inline
  (`15:T528,` nằm trong content row 14) — `decode_flight` đã xử lý, đừng đơn giản hóa.
- Một số quirk dữ liệu gốc trên site (VD: AI-103 Q87 explanation rỗng do ref `$62`
  không resolve cả trên trình duyệt; AB-730 Q65 true/false toàn No) — converter tự
  chèn fallback text, không cần sửa tay.
- Bộ đề trùng slug với bộ cũ từ practice-cert (ccar-p, ccdv-f) được build vào folder
  `<slug>-tstudy` để không ghi đè — hai nguồn có nội dung khác nhau.

## Cào practice-cert.maithienan.com (site cũ)

## Yêu cầu (site cũ)

- Python 3.12 64-bit + `pip install playwright` (cần Chrome đã cài trên máy, không cần tải browser riêng)
- Cookie `october_session` của tài khoản đã mua khóa học (lấy từ DevTools → Application → Cookies, **chú ý session hết hạn sau ~1 giờ**)

## Quy trình cào bộ đề mới

1. Sửa biến `COOKIE` trong `walk_exam2.py` bằng cookie mới.
2. Chạy: `python walk_exam2.py <slug> <slug>`
   - Script mở phòng luyện tập, nhảy từng câu qua ô "Đến câu số", chọn đáp án → Kiểm tra → thu đáp án đúng + giải thích.
   - Có checkpoint `*-capture.json` lưu sau từng câu — bị ngắt giữa chừng cứ chạy lại.
   - Tự reset tiến độ trên site khi xong (không làm bẩn tài khoản).
3. Build bộ đề: `python build_deck.py <slug> "D:/Trong/Skill Learn/Cert/<slug>" "<Tên chứng chỉ>"`
   - Tạo 4 file theo cấu trúc ccar-p: `-raw.json`, `-html.json`, `-qa.json`, `-qa.md`.
4. Tạo file cho player offline: ghi `window.__PC_DECK_LAST__ = <qa.json>;` thành `<slug>-qa.js` trong cùng thư mục bộ đề.
5. Thêm entry vào `BUILTIN_DECKS` trong `..\_player\app.js` để hiện trên màn chọn bộ đề.

## Ghi chú

- Câu hỏi có ảnh: ảnh trên site gốc thường 404 — bộ đề sẽ gắn cờ ⚠️ (đúng như bộ ccar-p tham chiếu).
- `patch_static.py` dùng để sửa các câu bị capture thiếu nội dung ở ranh giới batch.
- `pcap-console.js` là bản chạy trên console trình duyệt (không cần cookie) nếu muốn tự cào bằng tay.
