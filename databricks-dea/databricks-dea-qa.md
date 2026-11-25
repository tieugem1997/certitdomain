# DATABRICKS-DEA — Databricks Certified Data Engineer Associate: 528 questions

Source: practice-cert.maithienan.com study mode. Your progress: 0 correct, 0 incorrect, 528 unanswered.

Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).


---

## Q1 · single choice · — not answered

A data engineer is working with two tables. Each of these tables is displayed below in its entirety. 



The data engineer runs the following query to join these tables together: 



Which of the following will be returned by the above query?

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** [image]
- ✅ **B.** [image]
- **C.** [image]
- **D.** [image]
- **E.** [image]

**Answer:** B

<details><summary>Explanation</summary>

**Kết quả đúng:** Ba hàng tương ứng với khách hàng `a1`, `a3` và `a4`:

[image]

`LEFT JOIN` giữ tất cả hàng của bảng bên trái là `sales`. Khách hàng `a1` khớp với cửa hàng `s1`, `a4` khớp với `s2`; `a3` không có hàng khớp trong `favorite_stores` nên `store_id` là `NULL`.

Khách hàng `a2` chỉ tồn tại trong bảng bên phải nên không được thêm vào kết quả. Mệnh đề `SELECT` chỉ lấy `sales.customer_id`, `sales.spend` và `favorite_stores.store_id`, vì vậy không có cột `units`. Truy vấn không có `ORDER BY` nên thứ tự hiển thị các hàng không được bảo đảm.

#### Vì sao các kết quả khác không phù hợp?

- **Ba hàng a1, a2 và a4:** Vừa giữ thêm `a2` từ bảng phải, vừa bỏ `a3` của bảng trái, trái với yêu cầu giữ toàn bộ `sales`.
- **Hai hàng a1 và a4, gồm ba cột:** Bỏ mất `a3` dù đây là hàng của bảng trái; tập hàng này phù hợp với việc chỉ giữ các hàng khớp như `INNER JOIN`.
- **Bốn hàng a1, a2, a3 và a4:** Giữ thêm khách hàng `a2` không khớp từ bảng phải; truy vấn `LEFT JOIN` này không giữ hàng đó.

**Tham khảo:** [Databricks SQL — JOIN](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-join)

</details>


---

## Q2 · single choice · — not answered

A data engineer has a Python variable table_name that they would like to use in a SQL query. They want to construct a Python code block that will run the query using table_name. They have the following incomplete code block: ____(f"SELECT customer_id, spend FROM {table_name}") Which of the following can be used to fill in the blank to successfully complete the task?

- **A.** spark.delta.table
- ✅ **B.** spark.sql
- **C.** spark.delta.sql
- **D.** dbutils.sql
- **E.** spark.table

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** spark.sql

spark.sql nhận chuỗi SQL đã dựng và trả DataFrame; f-string Python thay table_name trước khi SQL thực thi.

#### Vì sao các phương án khác không phù hợp?

- **spark.delta.table**: spark.delta.table không phải API SparkSession chuẩn.
- **dbutils.sql**: dbutils.sql không phải phương thức thực thi SQL của SparkSession.
- **spark.table**: spark.table nhận tên bảng, không nhận toàn bộ câu SELECT.
- **spark.delta.sql**: spark.delta.sql không phải namespace thực thi SQL được quy định.

**Tham khảo:**

- [SparkSession.sql](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.sql.html)

</details>


---

## Q3 · single choice · — not answered

A data engineer has a single-task Job that runs each morning before they begin working. After identifying an upstream data issue, they need to set up another task to run a new notebook prior to the original task. Which approach can the data engineer use to set up the new task?

- **A.** They can clone the existing task to a new Job and then edit it to run the new notebook.
- **B.** They can clone the existing task in the existing Job and update it to run the new notebook.
- **C.** They can create a new task in the existing Job and then add the original task as a dependency of the new task.
- ✅ **D.** They can create a new task in the existing Job and then add it as a dependency of the original task.
- **E.** They can create a new job from scratch and add both tasks to run concurrently.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can create a new task in the existing Job and then add it as a dependency of the original task.

Tạo tác vụ mới phía trước và đặt tác vụ gốc phụ thuộc vào nó để notebook mới hoàn tất trước khi công việc gốc bắt đầu.

#### Vì sao các phương án khác không phù hợp?

- **They can clone the existing task in the existing Job and update it to run the new notebook.**: Clone tác vụ đổi định nghĩa nhưng không thiết lập phụ thuộc thực thi cần thiết.
- **They can create a new task in the existing Job and then add the original task as a dependency of the new task.**: Đặt tác vụ mới phụ thuộc vào tác vụ gốc làm đảo thứ tự cần thiết.
- **They can create a new job from scratch and add both tasks to run concurrently.**: Tác vụ đồng thời không bảo đảm bước tiên quyết mới hoàn tất trước.
- **They can clone the existing task to a new Job and then edit it to run the new notebook.**: Clone sang job khác không thực thi ràng buộc thứ tự với job gốc.

**Tham khảo:**

- [Configure task dependencies](https://docs.databricks.com/aws/en/jobs/run-if)

</details>


---

## Q4 · single choice · — not answered

What is a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?

- **A.** Parquet files have the ability to be optimized
- **B.** Parquet files will become Delta tables
- **C.** Parquet files can be partitioned
- ✅ **D.** Parquet files have a well-defined schema

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Parquet files have a well-defined schema

Tệp Parquet mang metadata schema, cho reader lấy tên và kiểu cột thay vì suy luận từ giá trị văn bản như CSV. Nhờ vậy việc xác định schema đáng tin cậy hơn.

#### Vì sao các phương án khác không phù hợp?

- **Parquet files can be partitioned**: Dataset CSV cũng có thể lưu trong thư mục partition.
- **Parquet files will become Delta tables**: Đọc Parquet không tự biến các tệp nguồn đó thành bảng Delta.
- **Parquet files have the ability to be optimized**: Tối ưu phụ thuộc lớp bảng đích và thao tác, không phải lợi ích schema nguồn đặc trưng này.

**Tham khảo:**

- [Parquet files](https://docs.databricks.com/aws/en/query/formats/parquet)

</details>


---

## Q5 · single choice · — not answered

A data engineer uses PySpark Structured Streaming to read from a table, transform the data, and write to another table. Which configuration on the StreamingQueryWriter sets a micro-batch trigger interval of 5 seconds?

- **A.** trigger(continuous="5 seconds")
- **B.** trigger("5 seconds")
- ✅ **C.** trigger(processingTime="5 seconds")
- **D.** trigger(once="5 seconds")
- **E.** trigger()

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** trigger(processingTime="5 seconds")

processingTime="5 seconds" đặt chu kỳ kích hoạt micro-batch. Batch chạy lâu hơn chu kỳ sẽ không bảo đảm hoàn tất đúng mỗi năm giây.

#### Vì sao các phương án khác không phù hợp?

- **trigger("5 seconds")**: API trigger của Python cần đối số loại trigger có tên, không phải chuỗi vị trí này.
- **trigger()**: Trigger mặc định không đặt chu kỳ năm giây.
- **trigger(once="5 seconds")**: once là thiết lập Boolean chạy giới hạn, không nhận thời lượng.
- **trigger(continuous="5 seconds")**: continuous chọn xử lý liên tục, không phải chu kỳ micro-batch được yêu cầu.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q6 · single choice · — not answered

A PySpark DataFrame sales_df has columns region and sales_amount. The function pyspark.sql.functions.sum has been imported as sum. Which code creates region_sales with one row per region and a column total_sales_amount containing that region's summed sales?

- **A.** region_sales = sales_df. sum ("salen_aiTiount") . groupBy ("region") .alias ("total_sale3_amount")
- **B.** region_sales= sales_df.groupBy("category").sum(nsales_amount").alias("t_otal_sales_amounl")
- **C.** region sales - sales_df.agg(sum("sales_amount").groupBy("region").alias("total sales amount"))
- ✅ **D.** region_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** region_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))

groupBy("region") nhóm bản ghi theo vùng, sau đó agg(sum("sales_amount").alias("total_sales_amount")) tính tổng được đặt tên cho mỗi nhóm và gán kết quả vào region_sales.

#### Vì sao các phương án khác không phù hợp?

- **region sales - sales_df.agg(sum("sales_amount").groupBy("region").alias("total sales amount"))**: Biểu thức tổng hợp cố nhóm một Column sum sai cách, đồng thời phép gán sai cú pháp.
- **region_sales= sales_df.groupBy("category").sum(nsales_amount").alias("t_otal_sales_amounl")**: Mã nhóm theo category thay vì region và chứa tên/dấu chuỗi sai.
- **region_sales = sales_df. sum ("salen_aiTiount") . groupBy ("region") .alias ("total_sale3_amount")**: Chuỗi sum-trước-groupBy không phải cú pháp tổng hợp theo nhóm hợp lệ và tên trường bị hỏng.

**Tham khảo:**

- [DataFrame.groupBy](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.groupBy.html)

</details>


---

## Q7 · single choice · — not answered

Which of the following describes the type of workloads that are always compatible with Auto Loader?

- **A.** Serverless workloads
- **B.** Dashboard workloads
- **C.** Machine learning workloads
- **D.** Batch workloads
- ✅ **E.** Streaming workloads

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Streaming workloads

Auto Loader là nguồn Structured Streaming để nạp tệp tăng dần. Cũng có thể đặt lịch AvailableNow cho lượt tăng dần giới hạn mà không thay mô hình API streaming.

#### Vì sao các phương án khác không phù hợp?

- **Serverless workloads**: Tương thích serverless phụ thuộc runtime/tính năng hỗ trợ, không thể giả định cho mọi tác vụ.
- **Batch workloads**: Có thể lập lịch kiểu batch bằng trigger streaming, nhưng Auto Loader không phải nguồn DataFrameReader batch chung.
- **Dashboard workloads**: Dashboard tiêu thụ kết quả truy vấn thay vì trực tiếp định nghĩa nguồn nạp Auto Loader.
- **Machine learning workloads**: Tác vụ ML có thể dùng dữ liệu đã nạp, nhưng không phải mọi thao tác ML đều là tác vụ đầu vào tương thích Auto Loader.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q8 · single choice · — not answered

A data engineer wants to schedule their Databricks SQL dashboard to refresh every hour, but they only want the associated SQL endpoint to be running when it is necessary. The dashboard has multiple queries on multiple datasets associated with it. The data that feeds the dashboard is automatically processed using a Databricks Job. Which of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?

- **A.** They can set up the dashboard's SQL endpoint to be serverless.
- **B.** They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint.
- ✅ **C.** They can turn on the Auto Stop feature for the SQL endpoint.
- **D.** They can reduce the cluster size of the SQL endpoint.
- **E.** They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can turn on the Auto Stop feature for the SQL endpoint.

Auto Stop dừng SQL warehouse sau thời gian nhàn cấu hình; lần làm mới dashboard theo lịch tiếp theo có thể khởi động lại, giảm thời gian chạy không cần thiết giữa các lần.

#### Vì sao các phương án khác không phù hợp?

- **They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint.**: Cố ý chọn endpoint khác không dừng năng lực nhàn và có thể phân tán thực thi.
- **They can reduce the cluster size of the SQL endpoint.**: Cluster nhỏ hơn đổi năng lực và mức phí, không đổi chính sách dừng khi nhàn.
- **They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints.**: Dùng chung endpoint có thể giảm trùng lặp nhưng không tự dừng giữa các lần làm mới.
- **They can set up the dashboard's SQL endpoint to be serverless.**: Serverless cung cấp quản lý vòng đời nhanh hơn, nhưng Auto Stop là điều khiển rõ ràng thời gian nhàn được hỏi.

**Tham khảo:**

- [Create a SQL warehouse](https://docs.databricks.com/aws/en/compute/sql-warehouse/create)

</details>


---

## Q9 · single choice · — not answered

A data engineer wants to create a new table containing the names of customers that live in France. They have written the following command:

A senior data engineer mentions that it is organization policy to include a table property indicating that the new table includes personally identifiable information (PII). Which of the following lines of code fills in the above blank to successfully complete the task?

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** There is no way to indicate whether a table contains PII.
- ✅ **B.** COMMENT "Contains PII"
- **C.** PII
- **D.** TBLPROPERTIES PII
- **E.** "COMMENT PII"

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** `COMMENT "Contains PII"`

COMMENT "Contains PII" là mệnh đề hợp lệ đặt trước AS SELECT để lưu mô tả rằng bảng chứa thông tin định danh cá nhân. Trong các lựa chọn của câu này, đây là cách ghi chú PII hợp lệ. COMMENT lưu mô tả; nó không tạo thuộc tính khóa/giá trị PII=true và cũng không tự che dữ liệu hay cấp quyền bảo vệ.

#### Vì sao các phương án khác không phù hợp?

- **There is no way to indicate whether a table contains PII.**: Có thể ghi nhận PII bằng mô tả COMMENT hoặc thuộc tính bảng đúng cú pháp, nên khẳng định không có cách nào là sai.
- **"COMMENT PII"**: Cả cụm COMMENT PII nằm trong dấu nháy, không phải mệnh đề COMMENT theo sau bởi chuỗi mô tả.
- **TBLPROPERTIES PII**: TBLPROPERTIES có thể lưu metadata PII nhưng phải có ngoặc và cặp khóa/giá trị, chẳng hạn TBLPROPERTIES ('PII' = 'true'); TBLPROPERTIES PII như lựa chọn này sai cú pháp.
- **PII**: PII đứng riêng không phải mệnh đề CREATE TABLE hợp lệ để khai báo mô tả hay thuộc tính.

**Tham khảo:** [CREATE TABLE [USING] — Databricks](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q10 · single choice · — not answered

A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader, but the engineer has not provided any type inference or schema hints in their pipeline. Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values. Which of the following describes why Auto Loader inferred all of the columns to be of the string type?

- **A.** Auto Loader only works with string data
- ✅ **B.** Auto Loader infers JSON fields as STRING by default unless cloudFiles.inferColumnTypes or an explicit schema changes that policy.
- **C.** There was a type mismatch between the specific schema and the inferred schema
- **D.** Auto Loader cannot infer the schema of ingested data
- **E.** All of the fields had at least one null value

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Auto Loader infers JSON fields as STRING by default unless cloudFiles.inferColumnTypes or an explicit schema changes that policy.

Auto Loader mặc định suy luận trường JSON thành STRING để tránh bất ổn kiểu khi nạp. Bản thân JSON biểu diễn được số và Boolean; kết quả toàn chuỗi do chính sách suy luận có thể cấu hình này.

#### Vì sao các phương án khác không phù hợp?

- **Auto Loader cannot infer the schema of ingested data**: Auto Loader suy luận được schema; vấn đề ở đây là chính sách kiểu mặc định.
- **There was a type mismatch between the specific schema and the inferred schema**: Không có schema tường minh hay xung đột được nêu; kết quả toàn chuỗi là mặc định thông thường khi suy luận JSON.
- **Auto Loader only works with string data**: Auto Loader hỗ trợ định dạng có kiểu và suy luận kiểu cấu hình được, không chỉ hỗ trợ chuỗi.
- **All of the fields had at least one null value**: Giá trị null không chứng minh mọi cột luôn phải suy luận thành chuỗi trong mọi cấu hình.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q11 · single choice · — not answered

A data engineer uses PySpark Structured Streaming to read from a table, transform records, and write to another table. Which StreamingQueryWriter trigger configuration processes all data available when the run starts in as many micro-batches as necessary, then stops?

- **A.** trigger(parallelBatch=True)
- ✅ **B.** trigger(availableNow=True)
- **C.** trigger(continuous="once")
- **D.** trigger(processingTime="once")
- **E.** processingTime(1)

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** trigger(availableNow=True)

AvailableNow tiêu thụ dữ liệu sẵn có khi gọi bằng nhiều micro-batch nếu cần rồi kết thúc, phù hợp lượt xử lý tăng dần có giới hạn.

#### Vì sao các phương án khác không phù hợp?

- **processingTime(1)**: processingTime(1) không phải cấu hình trigger có tên đúng và không biểu diễn lượt dữ liệu tồn giới hạn.
- **trigger(parallelBatch=True)**: parallelBatch không phải tham số trigger StreamingQueryWriter được quy định.
- **trigger(processingTime="once")**: processingTime nhận thời lượng; "once" không phải thời lượng hợp lệ và không có nghĩa AvailableNow.
- **trigger(continuous="once")**: continuous nhận chu kỳ xử lý và không biểu diễn hành vi nhiều batch giới hạn này.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q12 · single choice · — not answered

A data engineer maintains a Declarative Automation Bundle (formerly Databricks Asset Bundle), which deploys a dashboard. Which set of actions will enable the dashboard to be deployed in prod using catalog_prod without changing the resource definition?

- **A.** Run databricks bundle deploy --var dataset_catalog=catalog_prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.
- **B.** Run databricks bundle execute --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.
- **C.** Run databricks bundle deploy --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.
- ✅ **D.** Run databricks bundle deploy --target prod so the deployment uses targets.prod and overrides dataset_catalog to catalog_prod.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run databricks bundle deploy --target prod so the deployment uses targets.prod and overrides dataset_catalog to catalog_prod.

bundle deploy --target prod chọn target prod và áp dụng giá trị biến ghi đè đã cấu hình. Profile xác thực xác định thông tin đăng nhập, không chọn target trùng tên.

#### Vì sao các phương án khác không phù hợp?

- **Run databricks bundle deploy --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.**: Cờ profile không chọn targets.prod.
- **Run databricks bundle execute --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.**: bundle execute không phải lệnh triển khai và profile không chọn target.
- **Run databricks bundle deploy --var dataset_catalog=catalog_prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.**: Ghi đè biến đặt giá trị nhưng không chọn target prod.

**Tham khảo:**

- [bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q13 · single choice · — not answered

A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The cade block used by the data engineer is below: `(spark.table("sales") .withColumn("avg_price", col("sales") / col("units")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("complete") ._____ .table("new_sales") )`

If the data engineer only wants the query to execute a micro-batch to process data every 5 seconds, which of the following lines of code should the data engineer use to fill in the blank?

- **A.** trigger(continuous="5 seconds")
- **B.** trigger("5 seconds")
- ✅ **C.** trigger(processingTime="5 seconds")
- **D.** trigger(once="5 seconds")
- **E.** trigger()

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** trigger(processingTime="5 seconds")

processingTime="5 seconds" yêu cầu lên lịch micro-batch định kỳ. Nó điều khiển nhịp trigger, không bảo đảm hoàn tất đúng năm giây và không sửa đầu vào batch trước writeStream trong hình.

#### Vì sao các phương án khác không phù hợp?

- **trigger("5 seconds")**: API trigger Python cần đối số trigger có tên, không phải khoảng thời gian theo vị trí này.
- **trigger()**: Gọi trigger rỗng không chỉ định chu kỳ năm giây.
- **trigger(once="5 seconds")**: once là trigger hữu hạn kiểu Boolean, không phải lịch nhận thời lượng.
- **trigger(continuous="5 seconds")**: Continuous processing không phải thực thi micro-batch định kỳ và không được hỗ trợ cho các workload Databricks này.

**Cần xem lại:** Nguồn bắt đầu bằng spark.table("sales") dù phần mô tả nói đọc luồng; chi tiết này được giữ nguyên. Chỗ trống sau dấu chấm cũng được giữ nguyên. Truy vấn in sẵn còn dùng complete output mode khi không có aggregate streaming; trigger được chọn tự nó đúng nhưng toàn bộ hình chưa hợp lệ.

**Tham khảo:**

- [DataStreamWriter.trigger](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/api/pyspark.sql.streaming.DataStreamWriter.trigger.html)

</details>


---

## Q14 · single choice · — not answered

A data architect has determined that a table of the following format is necessary: 



Which of the following code blocks uses SQL DDL commands to create an empty Delta table in the above format regardless of whether a table already exists with this name?

> ⚠️ This question references an image that is missing on the source site (404).

- ✅ **A.** `CREATE OR REPLACE TABLE table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )`
- **B.** `CREATE OR REPLACE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT USING DELTA`
- **C.** `CREATE OR REPLACE TABLE table_name WITH COLUMNS ( employeeId STRING, startDate DATE, avgRating FLOAT ) USING DELTA`
- **D.** `CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT`
- **E.** `CREATE TABLE IF NOT EXISTS table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )`

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE OR REPLACE TABLE table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )

CREATE OR REPLACE TABLE với định nghĩa cột tạo bảng rỗng hoặc thay thế nội dung bảng. Delta là định dạng mặc định trong Databricks.

#### Vì sao các phương án khác không phù hợp?

- **CREATE TABLE IF NOT EXISTS table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )**: IF NOT EXISTS giữ nguyên bảng và dữ liệu đang có.
- **CREATE OR REPLACE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT USING DELTA**: AS SELECT được viết không phải danh sách định nghĩa cột có kiểu hợp lệ.
- **CREATE OR REPLACE TABLE table_name WITH COLUMNS ( employeeId STRING, startDate DATE, avgRating FLOAT ) USING DELTA**: WITH COLUMNS không phải cú pháp danh sách cột của CREATE TABLE.
- **CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT**: CREATE TABLE AS SELECT không thay bảng hiện có và không định nghĩa đúng các cột có kiểu này.

**Tham khảo:**

- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q15 · single choice · — not answered

A data engineer needs to create a table in Databricks using data from a CSV file at location /path/to/csv. They run the following command: `CREATE TABLE new_table _____ OPTIONS ( header = "true", delimiter = "|" ) LOCATION "path/to/csv"`

Which of the following lines of code fills in the above blank to successfully complete the task?

- **A.** FROM "path/to/csv"
- **B.** FROM CSV
- **C.** None of these lines of code are needed to successfully complete the task
- ✅ **D.** USING CSV
- **E.** USING DELTA

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** USING CSV

USING CSV chọn bộ đọc nguồn CSV cho các tệp ngoài. OPTIONS cung cấp thiết lập tiêu đề và dấu phân cách.

#### Vì sao các phương án khác không phù hợp?

- **None of these lines of code are needed to successfully complete the task**: Thiếu định dạng nguồn Databricks mặc định Delta, không phải CSV.
- **FROM CSV**: FROM CSV không phải mệnh đề nguồn trong CREATE TABLE.
- **USING DELTA**: USING DELTA yêu cầu dữ liệu Delta và nhật ký giao dịch.
- **FROM "path/to/csv"**: LOCATION đã cấp đường dẫn; FROM không phải khai báo định dạng nguồn còn thiếu.

**Cần xem lại:** Vị trí trong đoạn mã là "path/to/csv" không có dấu gạch chéo đầu, trong khi phần mô tả ghi /path/to/csv. Chỗ trống trong nguồn được giữ nguyên.

**Tham khảo:**

- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q16 · single choice · — not answered

A data engineer is using the following code block as part of a batch ingestion pipeline to read from a composable table: `transactions_df = (spark.read .schema(schema) .format("delta") .table("transactions") )`

Which of the following changes needs to be made so this code block will work when the transactions table is a stream source?

- **A.** Replace predict with a stream-friendly prediction function
- **B.** Replace "transactions" with the path to the location of the Delta table
- ✅ **C.** Replace spark.read with spark.readStream
- **D.** Replace format("delta") with format("stream")
- **E.** Replace schema(schema) with option ("maxFilesPerTrigger", 1)

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Replace spark.read with spark.readStream

spark.readStream chọn bộ đọc streaming thay vì bộ đọc batch. Lần đọc Delta streaming hợp lệ có thể cấp dữ liệu cho truy vấn streaming.

#### Vì sao các phương án khác không phù hợp?

- **Replace predict with a stream-friendly prediction function**: Mã đã cho không có lệnh predict.
- **Replace schema(schema) with option ("maxFilesPerTrigger", 1)**: maxFilesPerTrigger giới hạn nạp, không chuyển bộ đọc batch sang streaming.
- **Replace "transactions" with the path to the location of the Delta table**: Streaming có thể tham chiếu bảng theo tên.
- **Replace format("delta") with format("stream")**: stream không phải định dạng thay thế Delta.

**Cần xem lại:** Nguồn truyền schema(schema) khi đọc bảng Delta; bộ đọc streaming Delta lấy schema từ bảng và có thể không hỗ trợ schema tường minh. Đổi bộ đọc theo đáp án là cần thiết nhưng có thể chưa đủ để toàn đoạn mã hợp lệ.

**Tham khảo:**

- [SparkSession.readStream](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.readStream.html)

</details>


---

## Q17 · single choice · — not answered

Which Structured Streaming query is performing a hop from a Silver table to a Gold table?

- ✅ **A.** `(spark.table("sales") .groupBy("store") .agg(sum("sales")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("complete") .table("newSales") )`
- **B.** `(spark.readStream.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- **C.** `(spark.table("sales") .withColumn("avgPrice", col("sales") / col("units")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- **D.** `(spark.table("sales") .filter(col("units") > 0) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** (spark.table("sales") .groupBy("store") .agg(sum("sales")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("complete") .table("newSales") )

Nhóm theo cửa hàng và tính tổng doanh số tạo chỉ số tổng hợp nghiệp vụ, đặc trưng cho bước Silver sang Gold. Các phép biến đổi khác giữ chi tiết từng dòng hoặc chỉ nạp dữ liệu.

#### Vì sao các phương án khác không phù hợp?

- **(spark.readStream.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Nạp tệp thô vào bảng là bước nạp hướng tới Bronze.
- **(spark.table("sales") .withColumn("avgPrice", col("sales") / col("units")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Tính giá trung bình từng dòng là làm giàu dữ liệu thay vì tổng hợp nghiệp vụ được nêu.
- **(spark.table("sales") .filter(col("units") > 0) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Lọc số lượng đơn vị không hợp lệ là thao tác làm sạch kiểu Silver.

**Cần xem lại:** Mã được chọn dùng spark.table đọc lô trước writeStream; phép tổng hợp minh họa bước chuyển nhưng mã hiện tại không phải truy vấn luồng hợp lệ.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q18 · single choice · — not answered

A company sells products across multiple categories (e.g., Electronics, Clothing) and regions. 

The sales team has provided you with a PySpark dataframe named sales_df as below, and the team wants the data engineer to analyze the sales data to help make strategic decisions. 



Calculate the total sales amount for each region and store the results in a new dataframe called region_sales. Given the total sales amount for each region and store the results in a new dataframe called region_sales.



Which code will generate the expected result?

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** region_sales = sales_df.agg(sum("sales_amount").alias("total_sales_amount")).groupBy("region")
- **B.** region_sales = sales_df.groupBy("region").agg(sales_df("total_sales_amount"))
- **C.** region_sales = sales_df.groupBy("region").agg(sales("total_sales_amount"))
- ✅ **D.** region_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** region_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))

Nhóm theo region, tổng hợp sum(sales_amount) và đặt bí danh total_sales_amount. Các tổng trong hình lần lượt là North 250, South 500, East 250, West 400.

#### Vì sao các phương án khác không phù hợp?

- **region_sales = sales_df.agg(sum("sales_amount").alias("total_sales_amount")).groupBy("region")**: Tổng hợp toàn bộ trước làm mất region nên nhóm theo nó sau đó không tạo tổng vùng.
- **region_sales = sales_df.groupBy("region").agg(sales("total_sales_amount"))**: sales không phải phép tổng sum cần thiết và total_sales_amount không phải cột đầu vào nguồn.
- **region_sales = sales_df.groupBy("region").agg(sales_df("total_sales_amount"))**: Gọi DataFrame không phải phép tổng hợp sum trên sales_amount.

**Cần xem lại:** Bảng kết quả mong đợi đặt tên cột số là sales_amount, trong khi các phương án đặt bí danh total_sales_amount. Tên cột trong hình được giữ nguyên.

**Tham khảo:**

- [DataFrame.groupBy](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.groupBy.html)

</details>


---

## Q19 · single choice · — not answered

A data engineering team needs a compute resource that automatically shuts down between scheduled runs to control cost and only runs a single nightly ETL notebook. Which Azure Databricks compute type is the most appropriate choice?

- **A.** An always-on all-purpose (interactive) cluster shared across the team
- **B.** A personal dedicated cluster left running for the day
- **C.** A SQL warehouse in serverless mode
- ✅ **D.** Job compute provisioned for the workflow run

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Job compute provisioned for the workflow run

Job compute được cấp cho workflow và giải phóng khi lượt chạy kết thúc, tránh duy trì cụm nhàn rỗi giữa các đêm.

#### Vì sao các phương án khác không phù hợp?

- **An always-on all-purpose (interactive) cluster shared across the team**: Compute tương tác luôn bật vẫn giữ tài nguyên nhàn rỗi giữa các lượt chạy.
- **A SQL warehouse in serverless mode**: SQL warehouse hướng đến SQL thay vì yêu cầu compute cho notebook ETL này.
- **A personal dedicated cluster left running for the day**: Để cụm dedicated chạy suốt ngày gây chi phí nhàn rỗi.

**Tham khảo:**

- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q20 · single choice · — not answered

For classic Databricks compute on AWS, what is the primary difference between the Control Plane and the classic Data (Compute) Plane?

- ✅ **A.** The Control Plane hosts the Databricks web application and manages jobs/notebooks, while the Data Plane processes customer data in the customer's cloud account
- **B.** The Control Plane is optional while the Data Plane is required for all operations
- **C.** The Control Plane manages compute resources while the Data Plane handles user authentication
- **D.** The Control Plane stores all customer data while the Data Plane manages network security

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** The Control Plane hosts the Databricks web application and manages jobs/notebooks, while the Data Plane processes customer data in the customer's cloud account

Với classic compute, control plane chứa ứng dụng web workspace và dịch vụ quản lý, còn compute plane xử lý workload trong tài khoản AWS khách hàng.

#### Vì sao các phương án khác không phù hợp?

- **The Control Plane manages compute resources while the Data Plane handles user authentication**: Xác thực thuộc quản lý danh tính của control plane, không phải chức năng chính của data plane.
- **The Control Plane stores all customer data while the Data Plane manages network security**: Không phải toàn bộ dữ liệu khách hàng được lưu tại control plane.
- **The Control Plane is optional while the Data Plane is required for all operations**: Control plane cung cấp dịch vụ quản lý workspace thiết yếu.

**Tham khảo:**

- [High-level architecture](https://docs.databricks.com/aws/en/getting-started/high-level-architecture)

</details>


---

## Q21 · single choice · — not answered

Several data scientists want to share one running cluster throughout the day so they can attach notebooks, run ad hoc exploratory queries, and install shared libraries without waiting for a new cluster to start each time. Which compute type fits this pattern?

- ✅ **A.** An all-purpose cluster, since it stays available for multiple users to attach notebooks and share libraries across an interactive session.
- **B.** A serverless SQL warehouse, since it is designed for teams to attach notebooks directly and install custom Python libraries for exploration.
- **C.** A Classic SQL warehouse, since Classic warehouses allow notebook attachment and multi-user library installation during interactive sessions.
- **D.** A job cluster, since Databricks provisions it fresh for each notebook attachment and automatically shares libraries across every user session.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** An all-purpose cluster, since it stays available for multiple users to attach notebooks and share libraries across an interactive session.

All-purpose compute hỗ trợ phiên notebook tương tác liên tục cho nhiều người được cấp quyền; thư viện cấp compute dùng chung trên tài nguyên đó.

#### Vì sao các phương án khác không phù hợp?

- **A job cluster, since Databricks provisions it fresh for each notebook attachment and automatically shares libraries across every user session.**: Job compute theo vòng đời job, không phải phiên notebook dùng chung lâu dài.
- **A serverless SQL warehouse, since it is designed for teams to attach notebooks directly and install custom Python libraries for exploration.**: SQL warehouse không cung cấp môi trường notebook Python và thư viện dùng chung như mô tả.
- **A Classic SQL warehouse, since Classic warehouses allow notebook attachment and multi-user library installation during interactive sessions.**: Classic SQL warehouse cũng phục vụ SQL, không phải thư viện tùy ý cho notebook dùng chung.

**Tham khảo:**

- [Compute configuration reference](https://docs.databricks.com/aws/en/compute/configure)

</details>


---

## Q22 · single choice · — not answered

Which of the following benefits is provided by the array functions from Spark SQL?

- **A.** An ability to work with time-related data in specified intervals
- **B.** An ability to work with data within certain partitions and windows
- **C.** An ability to work with data in a variety of types at once
- **D.** An ability to work with an array of tables for procedural automation
- ✅ **E.** An ability to work with complex, nested data ingested from JSON files

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** An ability to work with complex, nested data ingested from JSON files

Hàm mảng biến đổi hoặc kiểm tra phần tử trong cột mảng, giúp xử lý collection lồng từ JSON thay vì coi chúng như hàng scalar rời rạc.

#### Vì sao các phương án khác không phù hợp?

- **An ability to work with data in a variety of types at once**: Hỗ trợ nhiều kiểu dữ liệu rộng hơn mục đích của hàm mảng.
- **An ability to work with data within certain partitions and windows**: Tính theo phân vùng và cửa sổ dùng hàm window phân tích.
- **An ability to work with time-related data in specified intervals**: Khoảng thời gian thuộc thao tác thời gian/cửa sổ, không phải duyệt mảng.
- **An ability to work with an array of tables for procedural automation**: Mảng SQL chứa giá trị; không phải cơ chế tự động thủ tục bằng mảng các bảng.

**Tham khảo:**

- [Spark SQL built-in functions](https://spark.apache.org/docs/latest/sql-ref-functions-builtin.html)

</details>


---

## Q23 · single choice · — not answered

You want clusters that can be reused across the team to access Unity Catalog data while supporting multiple concurrent users with data isolation between them. Which cluster access mode should you configure?

- **A.** Hive metastore legacy mode
- ✅ **B.** Standard (shared) access mode
- **C.** No-isolation shared mode
- **D.** Dedicated (single-user) access mode

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Standard (shared) access mode

Standard access mode cho phép người dùng đồng thời, cô lập việc thực thi và áp dụng quản trị Unity Catalog.

#### Vì sao các phương án khác không phù hợp?

- **Dedicated (single-user) access mode**: Dedicated compute gắn với một principal, không phải chế độ chia sẻ tổng quát này.
- **No-isolation shared mode**: No-isolation shared không đáp ứng cô lập người dùng hoặc hỗ trợ Unity Catalog cần thiết.
- **Hive metastore legacy mode**: Dùng Hive metastore cũ không phải access mode Unity Catalog được yêu cầu.

**Tham khảo:**

- [Standard compute overview](https://docs.databricks.com/aws/en/compute/standard-overview)

</details>


---

## Q24 · single choice · — not answered

What is a Delta Lake?

- **A.** A machine learning model management system
- **B.** A proprietary cloud storage service from Databricks
- ✅ **C.** An open-source storage layer that brings ACID transactions to Apache Spark and big data workloads
- **D.** A real-time streaming processing engine

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** An open-source storage layer that brings ACID transactions to Apache Spark and big data workloads

Delta Lake bổ sung transaction log và tính năng bảng như nhất quán ACID trên tệp data lake; đây là lớp lưu trữ mã nguồn mở.

#### Vì sao các phương án khác không phù hợp?

- **A proprietary cloud storage service from Databricks**: Delta Lake không phải dịch vụ object storage độc quyền.
- **A real-time streaming processing engine**: Spark Structured Streaming là bộ máy thực thi; Delta là lớp lưu trữ/bảng.
- **A machine learning model management system**: Quản lý mô hình dùng công cụ như MLflow, không phải vai trò chính của Delta.

**Tham khảo:**

- [Delta Lake overview](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q25 · single choice · — not answered

A company runs three Databricks workspaces in the same AWS region for different business units and wants every workspace to enforce the same table permissions, lineage tracking, and audit logs without maintaining separate governance configuration in each workspace. What should they do?

- ✅ **A.** Attach a single Unity Catalog metastore to all three workspaces so grants, lineage, and audit logs apply consistently across them
- **B.** Enable a classic SQL warehouse in each workspace, since SQL warehouses independently enforce table-level access control
- **C.** Create an identical set of catalogs and manually replicate every grant statement in each workspace's own separate metastore
- **D.** Configure a job cluster per workspace with matching cluster policies so that compute-level settings mirror the intended governance settings

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Attach a single Unity Catalog metastore to all three workspaces so grants, lineage, and audit logs apply consistently across them

Metastore Unity Catalog dùng chung trong vùng cung cấp một không gian quản trị, quyền tập trung, lineage và khả năng kiểm toán.

#### Vì sao các phương án khác không phù hợp?

- **Create an identical set of catalogs and manually replicate every grant statement in each workspace's own separate metastore**: Sao chép thủ công gây lệch cấu hình và lặp công việc quản trị.
- **Configure a job cluster per workspace with matching cluster policies so that compute-level settings mirror the intended governance settings**: Cluster policies giới hạn cấu hình compute thay vì quyền catalog.
- **Enable a classic SQL warehouse in each workspace, since SQL warehouses independently enforce table-level access control**: Warehouse thực thi theo hệ quản trị được gắn; warehouse riêng không tập trung quyền.

**Tham khảo:**

- [Unity Catalog object model](https://docs.databricks.com/aws/en/data-governance/unity-catalog)

</details>


---

## Q26 · single choice · — not answered

Which of the following is hosted completely in the control plane of the classic Databricks architecture?

- **A.** Worker node
- **B.** Databricks Filesystem
- **C.** JDBC data source
- ✅ **D.** Databricks web application
- **E.** Driver node

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks web application

Ứng dụng web Databricks là dịch vụ control plane trong kiến trúc classic. Driver và worker thực thi ở compute plane.

#### Vì sao các phương án khác không phù hợp?

- **Worker node**: Worker node xử lý dữ liệu trong compute plane.
- **JDBC data source**: Nguồn JDBC có thể là cơ sở dữ liệu bên ngoài, không phải dịch vụ trong control plane.
- **Databricks Filesystem**: DBFS trừu tượng hóa cloud storage, không nằm hoàn toàn trong control plane.
- **Driver node**: Driver điều phối Spark trong compute plane.

**Tham khảo:**

- [High-level architecture](https://docs.databricks.com/aws/en/getting-started/high-level-architecture)

</details>


---

## Q27 · single choice · — not answered

Which compute feature setting in Azure Databricks accelerates SQL and DataFrame workloads using a native vectorized engine written in C++?

- **A.** Delta caching
- **B.** Adaptive Query Execution
- **C.** KEDA autoscaling
- ✅ **D.** Photon acceleration

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Photon acceleration

Photon sử dụng bộ máy thực thi vector hóa C++ để tăng tốc các phép SQL và DataFrame được hỗ trợ.

#### Vì sao các phương án khác không phù hợp?

- **Adaptive Query Execution**: AQE điều chỉnh kế hoạch bằng thống kê lúc chạy; không phải bộ máy C++.
- **Delta caching**: Disk caching giảm đọc từ xa lặp lại, không thay bộ máy thực thi.
- **KEDA autoscaling**: KEDA mở rộng workload Kubernetes theo sự kiện, không cung cấp thực thi Photon.

**Tham khảo:**

- [What is Photon?](https://docs.databricks.com/aws/en/compute/photon)

</details>


---

## Q28 · single choice · — not answered

Which Databricks compute type is created for a single job run and is automatically terminated when that run completes?

- **A.** An all-purpose cluster
- ✅ **B.** A jobs compute cluster (job cluster)
- **C.** A SQL warehouse
- **D.** A dedicated SQL endpoint

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A jobs compute cluster (job cluster)

Job compute gắn với lượt chạy job và kết thúc sau khi các task dùng nó hoàn tất.

#### Vì sao các phương án khác không phù hợp?

- **An all-purpose cluster**: All-purpose compute hỗ trợ tái sử dụng tương tác và vòng đời kết thúc riêng.
- **A SQL warehouse**: SQL warehouse phục vụ SQL, không mặc định cấp riêng cho mỗi lượt notebook job.
- **A dedicated SQL endpoint**: SQL endpoint là thuật ngữ warehouse, không phải job cluster theo lượt chạy.

**Tham khảo:**

- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q29 · single choice · — not answered

A data engineer wants Auto Loader to process all currently available files in a source directory and then stop on its own, rather than running continuously, so the workload can be scheduled as a Lakeflow Job that runs once per hour. Which configuration achieves this batch-style behavior?

- ✅ **A.** Configure the `writeStream` with `Trigger.AvailableNow`, which processes all files available at the start of the run and then stops the stream automatically.
- **B.** Configure the `readStream` to omit `cloudFiles.schemaLocation`, which forces Auto Loader to treat the workload as a one-time batch load by default.
- **C.** Configure the `writeStream` with `Trigger.Continuous`, which processes files as they arrive and stops automatically once the source directory is empty.
- **D.** Configure the `writeStream` with no trigger specified at all, which causes Auto Loader to process one file per run and then exit without a checkpoint.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Configure the `writeStream` with `Trigger.AvailableNow`, which processes all files available at the start of the run and then stops the stream automatically.

AvailableNow xử lý backlog có khi truy vấn bắt đầu, có thể qua nhiều micro-batch, rồi kết thúc để job hàng giờ gọi lại.

#### Vì sao các phương án khác không phù hợp?

- **Configure the `writeStream` with no trigger specified at all, which causes Auto Loader to process one file per run and then exit without a checkpoint.**: Không chỉ định trigger vẫn tiếp tục xử lý micro-batch, không thoát sau một tệp.
- **Configure the `readStream` to omit `cloudFiles.schemaLocation`, which forces Auto Loader to treat the workload as a one-time batch load by default.**: Schema location kiểm soát lưu schema suy luận, không quyết định chạy hữu hạn.
- **Configure the `writeStream` with `Trigger.Continuous`, which processes files as they arrive and stops automatically once the source directory is empty.**: Continuous processing không dừng chỉ vì hiện không có tệp.

**Tham khảo:**

- [Auto Loader production workloads](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/production)

</details>


---

## Q30 · single choice · — not answered

Which of the following benefits of using the Databricks Lakehouse Platform is provided by Delta Lake?

- **A.** The ability to set up alerts for query failures
- **B.** The ability to manipulate the same data using a variety of languages
- ✅ **C.** The ability to support batch and streaming workloads
- **D.** The ability to distribute complex data operations
- **E.** The ability to collaborate in real time on a single notebook

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The ability to support batch and streaming workloads

Bảng Delta hỗ trợ đọc/ghi batch và nguồn/đích streaming trên cùng lớp lưu trữ giao dịch.

#### Vì sao các phương án khác không phù hợp?

- **The ability to manipulate the same data using a variety of languages**: Lựa chọn ngôn ngữ đến từ Spark và API nền tảng.
- **The ability to collaborate in real time on a single notebook**: Cộng tác notebook thời gian thực là tính năng workspace.
- **The ability to set up alerts for query failures**: Cảnh báo truy vấn thuộc SQL/giám sát.
- **The ability to distribute complex data operations**: Spark thực thi phân tán; đây không phải tính năng riêng do Delta Lake cung cấp.

**Tham khảo:**

- [Delta Lake overview](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q31 · single choice · — not answered

A team wants new clusters to start faster by drawing pre-initialized cloud VMs from a ready pool. Which compute performance setting addresses this?

- ✅ **A.** Instance pools
- **B.** Auto-termination
- **C.** Autoscaling
- **D.** Spot instances

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Instance pools

Instance pools giữ máy ảo sẵn sàng để cụm lấy node mà không phải chờ cấp máy ảo từ đầu.

#### Vì sao các phương án khác không phù hợp?

- **Autoscaling**: Autoscaling đổi số worker, tự nó không dự trữ máy ảo sẵn.
- **Auto-termination**: Auto-termination giải phóng compute nhàn rỗi, không tăng tốc cấp máy.
- **Spot instances**: Spot là lựa chọn dung lượng/giá, không bảo đảm khởi động nhanh.

**Tham khảo:**

- [Pool configuration reference](https://docs.databricks.com/aws/en/compute/pools)

</details>


---

## Q32 · single choice · — not answered

What does the Databricks File System (DBFS) provide?

- **A.** A real-time data ingestion service
- **B.** A machine learning model registry
- **C.** A distributed SQL query engine
- ✅ **D.** A layer of abstraction over cloud object storage that allows mounting various storage locations

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A layer of abstraction over cloud object storage that allows mounting various storage locations

DBFS trước đây cung cấp truy cập kiểu hệ tệp và mount trên object storage. DBFS root và mounts hiện đã lỗi thời; nên dùng Unity Catalog volumes cho truy cập tệp mới có quản trị.

#### Vì sao các phương án khác không phù hợp?

- **A distributed SQL query engine**: Bộ máy SQL thực thi truy vấn, không cung cấp lớp hệ tệp DBFS.
- **A machine learning model registry**: Model registry quản lý phiên bản/vòng đời mô hình, không phải đường dẫn DBFS.
- **A real-time data ingestion service**: DBFS phục vụ truy cập lưu trữ, không phải bộ xử lý nạp thời gian thực.

**Tham khảo:**

- [What is DBFS?](https://docs.databricks.com/aws/en/dbfs/)

</details>


---

## Q33 · single choice · — not answered

A source S3 bucket receives files from multiple upstream systems, and a data engineer wants a single `COPY INTO` run to ingest only the files under a `landing/2026/09/` prefix whose names end in `.csv`, ignoring `.json` and `.txt` files that land in the same prefix. Which clause should the engineer add to the statement?

- **A.** `FILEFORMAT = CSV` alone, since specifying the file format automatically restricts the command to loading only files with a matching extension.
- **B.** `FILES = ('landing/2026/09/*.csv')` so the command treats the entire glob expression as a single explicit filename and attempts to load only that one literal path.
- ✅ **C.** `PATTERN = 'landing/2026/09/*.csv'` so the command matches only files under that prefix whose names end with the `.csv` extension using glob-style matching.
- **D.** `FORMAT_OPTIONS ('extension' = 'csv')` so the command filters the format reader to only parse files that Spark identifies as CSV-formatted content.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** `PATTERN = 'landing/2026/09/*.csv'` so the command matches only files under that prefix whose names end with the `.csv` extension using glob-style matching.

PATTERN chọn đường dẫn tệp theo glob, giới hạn prefix và đuôi CSV được yêu cầu. Glob được diễn giải tương đối với đường dẫn nguồn đã cấu hình.

#### Vì sao các phương án khác không phù hợp?

- **`FILES = ('landing/2026/09/*.csv')` so the command treats the entire glob expression as a single explicit filename and attempts to load only that one literal path.**: FILES liệt kê tên tệp cụ thể thay vì mở rộng biểu thức wildcard.
- **`FORMAT_OPTIONS ('extension' = 'csv')` so the command filters the format reader to only parse files that Spark identifies as CSV-formatted content.**: Tùy chọn định dạng extension không phải mệnh đề chọn tệp được tài liệu quy định.
- **`FILEFORMAT = CSV` alone, since specifying the file format automatically restricts the command to loading only files with a matching extension.**: CSV chọn bộ đọc, không bảo đảm lọc theo đuôi tên tệp.

**Tham khảo:**

- [COPY INTO](https://docs.databricks.com/aws/en/sql/language-manual/delta-copy-into)

</details>


---

## Q34 · single choice · — not answered

Which of the following describes the storage organization of a Delta table?

- **A.** Delta tables store their data in a single file and all metadata in a collection of files in a separate location.
- ✅ **B.** Delta tables are stored in a collection of files that contain data, history, metadata, and other attributes.
- **C.** Delta tables are stored in a single file that contains only the data stored within the table.
- **D.** Delta tables are stored in a single file that contains data, history, metadata, and other attributes.
- **E.** Delta tables are stored in a collection of files that contain only the data stored within the table.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta tables are stored in a collection of files that contain data, history, metadata, and other attributes.

Thư mục bảng Delta chứa nhiều tệp dữ liệu cùng transaction log ghi phiên bản bảng và metadata.

#### Vì sao các phương án khác không phù hợp?

- **Delta tables are stored in a single file that contains data, history, metadata, and other attributes.**: Bảng không phải một tệp nguyên khối.
- **Delta tables store their data in a single file and all metadata in a collection of files in a separate location.**: Dữ liệu thường trải trên nhiều tệp, log nằm trong thư mục bảng.
- **Delta tables are stored in a collection of files that contain only the data stored within the table.**: Transaction log và metadata là phần thiết yếu, không chỉ có tệp dữ liệu.
- **Delta tables are stored in a single file that contains only the data stored within the table.**: Một tệp chỉ chứa dữ liệu không thể biểu diễn cấu trúc bảng Delta.

**Tham khảo:**

- [Delta Lake overview](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q35 · single choice · — not answered

An administrator wants to restrict which cluster configurations users can create, for example limiting node types and forcing auto-termination after 30 minutes. What is the recommended mechanism?

- **A.** Unity Catalog row filters
- **B.** Workspace IP access lists
- **C.** Personal access token scopes
- ✅ **D.** Compute (cluster) policies

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Compute (cluster) policies

Compute policies giới hạn cấu hình được phép khi tạo cụm, gồm loại node và giá trị auto-termination cố định hoặc có giới hạn.

#### Vì sao các phương án khác không phù hợp?

- **Workspace IP access lists**: IP access lists kiểm soát truy cập mạng vào workspace.
- **Unity Catalog row filters**: Row filters giới hạn hàng trả về, không phải cấu hình cụm.
- **Personal access token scopes**: Quyền token quản lý xác thực/truy cập, không quy định cấu hình cụm.

**Tham khảo:**

- [Compute policies](https://docs.databricks.com/aws/en/admin/clusters/policies)

</details>


---

## Q36 · single choice · — not answered

A data engineer needs to share notebooks and code with team members while maintaining version history. Which Databricks feature should they use?

- **A.** Delta Lake time travel
- **B.** Unity Catalog
- ✅ **C.** Databricks Repos
- **D.** DBFS mounts

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks Repos

Databricks Repos, hiện gọi là Git folders, tích hợp lịch sử repository và cộng tác với notebook/mã trong workspace.

#### Vì sao các phương án khác không phù hợp?

- **DBFS mounts**: DBFS mounts cung cấp truy cập lưu trữ, không quản lý phiên bản.
- **Delta Lake time travel**: Time travel lưu phiên bản dữ liệu bảng, không phải mã notebook.
- **Unity Catalog**: Unity Catalog quản trị đối tượng dữ liệu/AI, không lưu lịch sử Git của mã.

**Tham khảo:**

- [Create and manage Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos)

</details>


---

## Q37 · single choice · — not answered

A team needs to ingest data from a niche internal REST API that is not among the enterprise applications supported by Lakeflow Connect's managed connectors, and they need control over pagination, authentication headers, and retry logic in the extraction code. Which approach is most appropriate?

- ✅ **A.** A standard connector built as a custom Lakeflow Spark Declarative Pipeline, trading some automation for the flexibility to code custom extraction logic.
- **B.** A managed connector, which offers a simple UI and prebuilt API integration for any REST source regardless of whether it is officially supported by Lakeflow Connect.
- **C.** The Zerobus direct-write API, which is intended for individual applications writing records straight into Delta tables rather than polling an external REST API.
- **D.** `COPY INTO`, which is designed to bulk-load files that are already staged in cloud object storage rather than call a live REST API endpoint directly.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A standard connector built as a custom Lakeflow Spark Declarative Pipeline, trading some automation for the flexibility to code custom extraction logic.

Pipeline nạp tùy chỉnh có thể triển khai phân trang, header và retry của API khi không có managed connector hỗ trợ nguồn. Đây là mã trích xuất tự viết, không phải connector được cung cấp tự động.

#### Vì sao các phương án khác không phù hợp?

- **A managed connector, which offers a simple UI and prebuilt API integration for any REST source regardless of whether it is officially supported by Lakeflow Connect.**: Managed connectors hỗ trợ nguồn đã được tài liệu công bố, không phải REST API tùy ý.
- **`COPY INTO`, which is designed to bulk-load files that are already staged in cloud object storage rather than call a live REST API endpoint directly.**: COPY INTO nạp tệp đã lưu, không polling API tùy ý.
- **The Zerobus direct-write API, which is intended for individual applications writing records straight into Delta tables rather than polling an external REST API.**: Zerobus nhận bản ghi do ứng dụng đẩy đến; không cung cấp polling API tùy chỉnh.

**Tham khảo:**

- [Lakeflow Connect overview](https://docs.databricks.com/aws/en/ingestion/overview)

</details>


---

## Q38 · single choice · — not answered

Which of the following code blocks will remove the rows where the value in column age is greater than 25 from the existing Delta table my_table and save the updated table?

- **A.** UPDATE my_table WHERE age <= 25;
- **B.** UPDATE my_table WHERE age > 25;
- **C.** SELECT * FROM my_table WHERE age > 25;
- **D.** DELETE FROM my_table WHERE age <= 25;
- ✅ **E.** DELETE FROM my_table WHERE age > 25;

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** DELETE FROM my_table WHERE age > 25;

DELETE FROM my_table WHERE age > 25 xóa các hàng khớp trong giao dịch; điều kiện giữ lại hàng không thỏa tiêu chí đó.

#### Vì sao các phương án khác không phù hợp?

- **SELECT * FROM my_table WHERE age > 25;**: SELECT đọc hàng khớp, không sửa bảng.
- **UPDATE my_table WHERE age > 25;**: UPDATE cần phép gán SET và sửa giá trị thay vì xóa hàng.
- **UPDATE my_table WHERE age = 25;**: UPDATE thiếu SET không hợp lệ và dùng điều kiện tuổi ngược lại.
- **DELETE FROM my_table WHERE age = 25;**: Xóa age = 25 sẽ xóa các hàng cần giữ.

**Tham khảo:**

- [DELTA DELETE FROM](https://docs.databricks.com/aws/en/sql/language-manual/delta-delete-from)

</details>


---

## Q39 · single choice · — not answered

Which statement correctly describes the Unity Catalog object hierarchy for the three-level namespace?

- **A.** Workspace contains catalogs, which contain tables directly
- **B.** Schema contains catalogs, which contain tables
- **C.** Catalog contains metastores, which contain schemas
- ✅ **D.** Metastore contains catalogs, catalogs contain schemas, and schemas contain tables and other objects

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Metastore contains catalogs, catalogs contain schemas, and schemas contain tables and other objects

Metastore chứa catalog, catalog chứa schema, schema chứa bảng và đối tượng liên quan; tên bảng dùng catalog.schema.table.

#### Vì sao các phương án khác không phù hợp?

- **Workspace contains catalogs, which contain tables directly**: Không thể bỏ lớp metastore và schema trong hệ phân cấp này.
- **Catalog contains metastores, which contain schemas**: Metastore chứa catalog, không phải ngược lại.
- **Schema contains catalogs, which contain tables**: Catalog chứa schema, không phải ngược lại.

**Tham khảo:**

- [Unity Catalog object model](https://docs.databricks.com/aws/en/data-governance/unity-catalog)

</details>


---

## Q40 · single choice · — not answered

Which dbutils command is used to list files in a DBFS directory?

- **A.** dbutils.fs.cp()
- ✅ **B.** dbutils.fs.ls()
- **C.** dbutils.fs.mount()
- **D.** dbutils.fs.mkdirs()

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** dbutils.fs.ls()

dbutils.fs.ls(path) liệt kê mục trong thư mục của hệ tệp và trả thông tin tệp.

#### Vì sao các phương án khác không phù hợp?

- **dbutils.fs.mount()**: mount tạo điểm mount lưu trữ, không liệt kê thư mục.
- **dbutils.fs.cp()**: cp sao chép tệp hoặc thư mục.
- **dbutils.fs.mkdirs()**: mkdirs tạo thư mục.

**Tham khảo:**

- [Databricks utilities](https://docs.databricks.com/aws/en/dev-tools/databricks-utils)

</details>


---

## Q41 · single choice · — not answered

While planning a managed connector rollout for a Google Analytics source, an engineer discovers that the connector is listed as not yet available in their workspace's cloud region. What should the engineer do based on how Databricks documents managed connector availability?

- **A.** Conclude that Google Analytics can never be ingested into Databricks and switch the entire ingestion strategy to a different analytics platform.
- **B.** Deploy the workspace's Unity Catalog metastore to a different region automatically, since metastore location is what determines connector availability.
- ✅ **C.** Check Databricks' regional feature support documentation, since managed connectors are not universally available across every region and workspace.
- **D.** Assume this is a temporary outage affecting all regions equally and simply retry the connector setup again in a few minutes without further checks.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Check Databricks' regional feature support documentation, since managed connectors are not universally available across every region and workspace.

Khả dụng của connector phụ thuộc hỗ trợ cloud và vùng được công bố; cần kiểm tra trước khi chọn môi trường phù hợp hoặc phương thức nạp khác.

#### Vì sao các phương án khác không phù hợp?

- **Assume this is a temporary outage affecting all regions equally and simply retry the connector setup again in a few minutes without further checks.**: Không được hỗ trợ trong vùng không chứng minh có sự cố tạm thời toàn cầu.
- **Conclude that Google Analytics can never be ingested into Databricks and switch the entire ingestion strategy to a different analytics platform.**: Managed connector chưa có không ngăn mọi cách nạp khác.
- **Deploy the workspace's Unity Catalog metastore to a different region automatically, since metastore location is what determines connector availability.**: Không thể tự động chuyển metastore để bật tính năng theo vùng.

**Tham khảo:**

- [Lakeflow Connect overview](https://docs.databricks.com/aws/en/ingestion/overview)

</details>


---

## Q42 · single choice · — not answered

Which of the following tools is used by Auto Loader process data incrementally?

- **A.** Data Explorer
- **B.** Checkpointing
- ✅ **C.** Spark Structured Streaming
- **D.** Databricks SQL
- **E.** Unity Catalog

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Spark Structured Streaming

Auto Loader dùng nguồn Structured Streaming cloudFiles để phát hiện và xử lý tăng dần tệp mới; checkpoint lưu tiến độ.

#### Vì sao các phương án khác không phù hợp?

- **Checkpointing**: Checkpoint lưu tiến độ và hỗ trợ khôi phục, không phải bộ máy xử lý streaming bên dưới.
- **Data Explorer**: Data Explorer là giao diện duyệt, không thực thi xử lý tăng dần.
- **Unity Catalog**: Unity Catalog quản trị truy cập và metadata, không phải bộ máy streaming.
- **Databricks SQL**: Databricks SQL không phải bộ máy nguồn mà xử lý tệp Auto Loader dựa vào.

**Tham khảo:**

- [Auto Loader overview](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)

</details>


---

## Q43 · single choice · — not answered

A data engineer needs to determine whether to use the built-in Databricks Notebooks versioning or version their project using Databricks Repos. Which of the following is an advantage of using Databricks Repos over the Databricks Notebooks versioning?

- **A.** Databricks Repos automatically saves development progress
- ✅ **B.** Databricks Repos supports the use of multiple branches
- **C.** Databricks Repos is wholly housed within the Databricks Lakehouse Platform
- **D.** Databricks Repos allows users to revert to previous versions of a notebook
- **E.** Databricks Repos provides the ability to comment on specific changes

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks Repos supports the use of multiple branches

Git folders hỗ trợ nhánh độc lập và merge qua Git repository kết nối, cho phép phát triển song song vượt quá lịch sử revision notebook.

#### Vì sao các phương án khác không phù hợp?

- **Databricks Repos automatically saves development progress**: Tự động lưu không phải lợi thế riêng của quản lý phiên bản Git.
- **Databricks Repos allows users to revert to previous versions of a notebook**: Lịch sử revision notebook cũng hỗ trợ khôi phục phiên bản trước.
- **Databricks Repos provides the ability to comment on specific changes**: Bình luận thay đổi không phải lợi thế phân nhánh Git chính được hỏi.
- **Databricks Repos is wholly housed within the Databricks Lakehouse Platform**: Git folders kết nối Git provider bên ngoài thay vì nằm hoàn toàn trong nền tảng.

**Tham khảo:**

- [Create and manage Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos)

</details>


---

## Q44 · single choice · — not answered

In Unity Catalog, which object combines a cloud storage path with a storage credential to authorize access to a broad area of Azure Data Lake Storage?

- **A.** A managed table
- **B.** A schema
- **C.** A volume
- ✅ **D.** An external location

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** An external location

External location kết hợp đường dẫn cloud storage với storage credential, tạo ranh giới cấp quyền truy cập khu vực đó.

#### Vì sao các phương án khác không phù hợp?

- **A volume**: Volume quản trị tệp trong vùng lưu trữ, không thay định nghĩa external location gồm đường dẫn và credential.
- **A schema**: Schema nhóm đối tượng catalog, không kết hợp xác thực cloud với gốc lưu trữ.
- **A managed table**: Managed table quản trị dữ liệu bảng, không cấp truy cập vùng lưu trữ bên ngoài rộng.

**Tham khảo:**

- [Unity Catalog cloud storage](https://docs.databricks.com/aws/en/connect/unity-catalog/cloud-storage)

</details>


---

## Q45 · single choice · — not answered

What is the main advantage of using Delta Lake over standard Parquet files in a data lake?

- **A.** Delta Lake files are smaller than Parquet files
- **B.** Delta Lake requires less storage space
- **C.** Delta Lake can only be used with Python
- ✅ **D.** Delta Lake provides ACID transactions, time travel, and automatic schema evolution

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta Lake provides ACID transactions, time travel, and automatic schema evolution

Delta bổ sung giao dịch, phiên bản lịch sử và kiểm soát schema cho lưu trữ dựa trên Parquet. Schema evolution có khi được cấu hình, không tự động vô điều kiện với mọi lần ghi.

#### Vì sao các phương án khác không phù hợp?

- **Delta Lake files are smaller than Parquet files**: Delta thường dùng tệp Parquet, không bảo đảm tệp nhỏ hơn.
- **Delta Lake can only be used with Python**: Delta hỗ trợ SQL và nhiều API, không chỉ Python.
- **Delta Lake requires less storage space**: Transaction log và tệp lịch sử giữ lại có thể tăng dung lượng.

**Tham khảo:**

- [Delta Lake overview](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q46 · single choice · — not answered

A pipeline owner wants Auto Loader to never fail the stream when unexpected columns appear in incoming files, but also wants those unexpected values preserved rather than silently discarded. Which `cloudFiles.schemaEvolutionMode` setting satisfies both requirements?

- **A.** `none`, which ignores unexpected columns entirely and continues the stream without capturing their values anywhere.
- ✅ **B.** `rescue`, which prevents schema evolution and captures unexpected columns in the rescued data column instead of failing the stream.
- **C.** `failOnNewColumns`, which halts the stream permanently until an updated schema is explicitly provided by the user.
- **D.** `addNewColumns`, which evolves the schema automatically but stops the stream once with an exception before resuming.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** `rescue`, which prevents schema evolution and captures unexpected columns in the rescued data column instead of failing the stream.

rescue giữ schema hiện tại và lưu trường bất ngờ vào rescued data, tránh lỗi do cột mới nhưng vẫn giữ giá trị.

#### Vì sao các phương án khác không phù hợp?

- **`none`, which ignores unexpected columns entirely and continues the stream without capturing their values anywhere.**: none không bảo đảm giữ dữ liệu nếu không cấu hình riêng rescued-data column.
- **`addNewColumns`, which evolves the schema automatically but stops the stream once with an exception before resuming.**: addNewColumns có thể dừng stream khi phát hiện schema đổi trước khi khởi động lại.
- **`failOnNewColumns`, which halts the stream permanently until an updated schema is explicitly provided by the user.**: failOnNewColumns chủ động gây lỗi khi schema thay đổi.

**Tham khảo:**

- [Auto Loader schema inference and evolution](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q47 · single choice · — not answered

Which of the following commands will return the number of null values in the member_id column?

- ✅ **A.** SELECT count_if(member_id IS NULL) FROM my_table;
- **B.** SELECT count_null(member_id) FROM my_table;
- **C.** SELECT count(member_id) FROM my_table;
- **D.** SELECT null(member_id) FROM my_table;
- **E.** SELECT count(member_id) - count_null(member_id) FROM my_table;

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SELECT count_if(member_id IS NULL) FROM my_table;

count_if(member_id IS NULL) đếm các hàng có member_id là NULL. Điều kiện đúng chính xác cho những hàng cần đếm.

#### Vì sao các phương án khác không phù hợp?

- **SELECT count(member_id) FROM my_table;**: count(member_id) đếm giá trị khác NULL.
- **SELECT count(member_id) - count_null(member_id) FROM my_table;**: count_null không phải hàm tổng hợp được tài liệu hóa và phép trừ không diễn đạt số cần đếm.
- **SELECT null(member_id) FROM my_table;**: null(member_id) không phải hàm tổng hợp đếm NULL.
- **SELECT count_null(member_id) FROM my_table;**: count_null không phải hàm được hỗ trợ ở đây.

**Tham khảo:**

- [count_if aggregate function](https://docs.databricks.com/gcp/en/sql/language-manual/functions/count_if)

</details>


---

## Q48 · single choice · — not answered

When configuring a storage credential in Azure Databricks to access ADLS Gen2 without storing secrets, which credential type follows Microsoft's recommended security practice?

- **A.** Account access key
- **B.** Shared Access Signature (SAS) token
- **C.** Service principal client secret in plaintext
- ✅ **D.** Azure Managed Identity via an access connector

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Azure Managed Identity via an access connector

Access connector dùng Azure managed identity xác thực vào storage mà không phải duy trì client secret hoặc storage key trong mã.

#### Vì sao các phương án khác không phù hợp?

- **Account access key**: Account key là bí mật cần bảo vệ và luân chuyển.
- **Shared Access Signature (SAS) token**: SAS token vẫn là bearer secret cần quản lý hạn và phạm vi.
- **Service principal client secret in plaintext**: Client secret dạng văn bản thuần vi phạm yêu cầu không lưu bí mật.

**Tham khảo:**

- [Azure managed identities for Unity Catalog](https://learn.microsoft.com/en-us/azure/databricks/connect/unity-catalog/cloud-storage/azure-managed-identities)

</details>


---

## Q49 · single choice · — not answered

In Databricks, what is the purpose of a Service Principal?

- **A.** To provide interactive notebook access for human users
- **B.** To monitor cluster performance metrics
- ✅ **C.** To enable automated processes and applications to authenticate and access Databricks resources securely
- **D.** To manage SQL warehouse queries

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To enable automated processes and applications to authenticate and access Databricks resources securely

Service principal là danh tính ứng dụng cho job tự động, API và tích hợp, với quyền được cấp rõ ràng.

#### Vì sao các phương án khác không phù hợp?

- **To provide interactive notebook access for human users**: Đăng nhập tương tác của con người dùng danh tính người dùng.
- **To monitor cluster performance metrics**: Giám sát hiệu năng do công cụ giám sát thực hiện, không phải bản thân danh tính.
- **To manage SQL warehouse queries**: Principal có thể được cấp quyền dùng tài nguyên nhưng không phải dịch vụ quản lý truy vấn.

**Tham khảo:**

- [Service principals](https://docs.databricks.com/aws/en/admin/users-groups/service-principals)

</details>


---

## Q50 · single choice · — not answered

A data engineering team is designing an ingestion strategy for a new source system and is unsure whether to build a custom connector immediately. Following Databricks' recommended approach to selecting an ingestion method, what should they do first?

- **A.** Start by building a fully custom connector first, then evaluate whether a managed connector could have replaced it later.
- **B.** Start with a community connector regardless of source support, since community connectors are the most cost-effective default choice.
- ✅ **C.** Start with the most managed layer available, such as a managed connector, and drop to less-managed layers only if requirements aren't met.
- **D.** Start with Auto Loader for every source type, since it is described as the single default entry point for all ingestion needs.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Start with the most managed layer available, such as a managed connector, and drop to less-managed layers only if requirements aren't met.

Ưu tiên managed connector được hỗ trợ để giảm vận hành tự viết, rồi chuyển sang phương án ít quản lý hơn khi nguồn hoặc biến đổi đòi hỏi.

#### Vì sao các phương án khác không phù hợp?

- **Start by building a fully custom connector first, then evaluate whether a managed connector could have replaced it later.**: Tự viết trước tạo gánh bảo trì khi chưa kiểm tra hỗ trợ sẵn có.
- **Start with a community connector regardless of source support, since community connectors are the most cost-effective default choice.**: Hỗ trợ cộng đồng và chi phí không được bảo đảm cho mọi nguồn.
- **Start with Auto Loader for every source type, since it is described as the single default entry point for all ingestion needs.**: Auto Loader hướng đến tệp cloud, không phải mọi database, SaaS hoặc API.

**Tham khảo:**

- [Lakeflow Connect overview](https://docs.databricks.com/aws/en/ingestion/overview)

</details>


---

## Q51 · single choice · — not answered

Which of the following data lakehouse features results in improved data quality over a traditional data lake?

- ✅ **A.** A data lakehouse supports ACID-compliant transactions.
- **B.** A data lakehouse stores data in open formats.
- **C.** A data lakehouse allows the use of SQL queries to examine data.
- **D.** A data lakehouse enables machine learning and artificial Intelligence workloads.
- **E.** A data lakehouse provides storage solutions for structured and unstructured data.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A data lakehouse supports ACID-compliant transactions.

Giao dịch ACID ngăn cập nhật bảng dở dang hoặc không nhất quán, tăng độ tin cậy so với tập tệp lake thiếu điều phối.

#### Vì sao các phương án khác không phù hợp?

- **A data lakehouse provides storage solutions for structured and unstructured data.**: Cả lake và lakehouse đều có thể chứa nhiều loại dữ liệu.
- **A data lakehouse allows the use of SQL queries to examine data.**: Truy cập SQL tự nó không bảo đảm cập nhật nhất quán.
- **A data lakehouse stores data in open formats.**: Định dạng mở tự nó không áp dụng giao dịch hoặc chất lượng.
- **A data lakehouse enables machine learning and artificial Intelligence workloads.**: Hỗ trợ ML/AI là khả năng workload, không phải cơ chế nhất quán.

**Tham khảo:**

- [Delta Lake overview](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q52 · single choice · — not answered

A data engineer needs to install a custom Python wheel so that it is available to all notebooks running on a specific job cluster. Where should the library be configured?

- ✅ **A.** As a cluster-scoped library on the compute resource
- **B.** As a Unity Catalog volume only
- **C.** By committing the wheel to the workspace Git folder
- **D.** In the SQL warehouse settings

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** As a cluster-scoped library on the compute resource

Cài wheel ở cấp compute giúp notebook và job trên compute đó dùng thư viện; cấu hình job cần bảo đảm cài khi tạo compute tạm thời.

#### Vì sao các phương án khác không phù hợp?

- **By committing the wheel to the workspace Git folder**: Commit wheel chỉ lưu artifact, không cài đặt.
- **As a Unity Catalog volume only**: Volume có thể chứa wheel nhưng không cài vào compute.
- **In the SQL warehouse settings**: Cấu hình SQL warehouse không cài wheel vào job cluster.

**Tham khảo:**

- [Compute-scoped libraries](https://docs.databricks.com/aws/en/libraries/cluster-libraries)

</details>


---

## Q53 · single choice · — not answered

On Unity Catalog-enabled compute, which access mode lets multiple users securely share a cluster with table access control and data isolation between users?

- **A.** No-isolation shared access mode
- **B.** Single Node compute
- ✅ **C.** Standard access mode (formerly High Concurrency / Shared)
- **D.** Dedicated (single-user) access mode

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Standard access mode (formerly High Concurrency / Shared)

Standard access mode cho phép thực thi đồng thời dùng chung, cô lập từng người dùng và áp dụng quyền Unity Catalog.

#### Vì sao các phương án khác không phù hợp?

- **Dedicated (single-user) access mode**: Dedicated gán compute cho người hoặc nhóm, không phải mô hình chia sẻ standard tổng quát.
- **No-isolation shared access mode**: No-isolation thiếu cô lập bảo mật được yêu cầu.
- **Single Node compute**: Single Node quy định cấu trúc cụm, không phải cô lập truy cập nhiều người.

**Tham khảo:**

- [Standard compute overview](https://docs.databricks.com/aws/en/compute/standard-overview)

</details>


---

## Q54 · single choice · — not answered

A JDBC read of a narrow, 10-column table with 5 million rows from a notebook is unexpectedly slow even though the source database responds quickly to test queries. Reviewing the Spark job, the JDBC data source is issuing tens of thousands of small round trips, each returning only a handful of rows. Which option should the engineer adjust first?

- **A.** Lower the cluster's `spark.sql.shuffle.partitions` value, since shuffle partition count directly controls how many rows a JDBC connector requests from the source in each round trip.
- ✅ **B.** Increase the `fetchSize` option so each round trip to the source database returns a larger batch of rows, reducing the number of network round trips needed to pull the full result set.
- **C.** Increase `numPartitions` so more parallel JDBC connections open against the source, since adding connections reduces the number of rows returned per individual round trip automatically.
- **D.** Set `partitionColumn` to a column that is not indexed on the source database, which forces the database to return larger row batches per query instead of many small ones.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Increase the `fetchSize` option so each round trip to the source database returns a larger batch of rows, reducing the number of network round trips needed to pull the full result set.

Tăng JDBC fetchsize trả nhiều hàng hơn mỗi lượt trao đổi với database, trực tiếp xử lý nhiều lần lấy quá ít hàng. Cần kiểm tra hỗ trợ driver và bộ nhớ.

#### Vì sao các phương án khác không phù hợp?

- **Increase `numPartitions` so more parallel JDBC connections open against the source, since adding connections reduces the number of rows returned per individual round trip automatically.**: numPartitions đổi số kết nối song song, không đổi số hàng mỗi lần lấy.
- **Set `partitionColumn` to a column that is not indexed on the source database, which forces the database to return larger row batches per query instead of many small ones.**: partitionColumn chọn cách chia lượt đọc; thiếu index không tăng lô fetch.
- **Lower the cluster's `spark.sql.shuffle.partitions` value, since shuffle partition count directly controls how many rows a JDBC connector requests from the source in each round trip.**: Shuffle partitions điều khiển trao đổi phân tán sau đọc, không điều khiển lô fetch JDBC.

**Tham khảo:**

- [Spark JDBC data source](https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html)

</details>


---

## Q55 · single choice · — not answered

A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?

- **A.** View
- **B.** Spark SQL Table
- ✅ **C.** Temporary view
- **D.** Delta Table
- **E.** Database

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Temporary view

Temporary view lưu định nghĩa truy vấn mà không sao chép hàng và chỉ tồn tại trong phiên. Nó đáp ứng yêu cầu riêng trong phiên và tiết kiệm lưu trữ.

#### Vì sao các phương án khác không phù hợp?

- **Spark SQL Table**: Bảng thường lưu dữ liệu vật lý thay vì chỉ định nghĩa truy vấn.
- **View**: View thường cũng không sao chép nhưng tồn tại quá phiên cần dùng.
- **Database**: Database là không gian tên, không phải kết quả truy vấn nối.
- **Delta Table**: Bảng Delta lưu hàng vật lý và cần dung lượng.

**Tham khảo:**

- [CREATE VIEW](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-view)

</details>


---

## Q56 · single choice · — not answered

Which Azure Databricks compute is purpose-built to run Databricks SQL queries and power BI dashboards against Delta tables?

- **A.** Job compute
- ✅ **B.** SQL warehouse
- **C.** All-purpose cluster
- **D.** Single-node cluster

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SQL warehouse

SQL warehouse là compute thực thi SQL chuyên cho truy vấn phân tích và kết nối BI.

#### Vì sao các phương án khác không phù hợp?

- **All-purpose cluster**: All-purpose hỗ trợ tương tác tổng quát, không phải dịch vụ SQL chuyên dụng được hỏi.
- **Job compute**: Job compute hướng đến thực thi workflow theo lịch.
- **Single-node cluster**: Cấu trúc một node không định nghĩa dịch vụ SQL cho BI.

**Tham khảo:**

- [Compute configuration reference](https://docs.databricks.com/aws/en/compute/configure)

</details>


---

## Q57 · single choice · — not answered

What happens when you run the VACUUM command on a Delta table?

- ✅ **A.** It removes old files that are no longer needed for time travel, beyond the retention period
- **B.** It optimizes the table layout for faster queries
- **C.** It exports the table data to external storage
- **D.** It repairs the table by recreating missing files

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It removes old files that are no longer needed for time travel, beyond the retention period

VACUUM xóa tệp dữ liệu không còn được tham chiếu đã quá ngưỡng giữ lại. Sau đó không đọc được phiên bản lịch sử cần các tệp ấy.

#### Vì sao các phương án khác không phù hợp?

- **It optimizes the table layout for faster queries**: OPTIMIZE dồn tệp/cải thiện bố trí; VACUUM dọn tệp cũ.
- **It repairs the table by recreating missing files**: VACUUM không tái tạo tệp dữ liệu bị thiếu.
- **It exports the table data to external storage**: VACUUM không xuất dữ liệu bảng.

**Tham khảo:**

- [Remove unused data files with vacuum](https://docs.databricks.com/aws/en/delta/vacuum)

</details>


---

## Q58 · single choice · — not answered

A data engineer is building an Auto Loader stream that reads deeply nested JSON files. Downstream consumers require that a nested `user_info.dob` field always be materialized as a `DATE` column rather than whatever type Auto Loader would otherwise infer for it. Which mechanism lets the engineer force that specific nested field to a chosen type while still letting Auto Loader infer the rest of the schema automatically?

- **A.** Casting the entire DataFrame after the stream is read, using a single `withColumn` call
- **B.** A `COPY INTO` `FORCE` option applied directly to the destination Delta table definition
- ✅ **C.** A schema hint such as `"user_info.dob DATE"` passed as a reader option to the stream
- **D.** A Lakeflow Spark Declarative Pipelines expectation that rejects rows where the field is not a valid date

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A schema hint such as `"user_info.dob DATE"` passed as a reader option to the stream

cloudFiles.schemaHints có thể chỉ định user_info.dob DATE trong khi suy luận các trường khác, tạo ràng buộc schema có mục tiêu.

#### Vì sao các phương án khác không phù hợp?

- **Casting the entire DataFrame after the stream is read, using a single `withColumn` call**: Cast sau khi đọc là phép biến đổi; một cast cấp ngoài không đặt schema hint cho trường lồng.
- **A Lakeflow Spark Declarative Pipelines expectation that rejects rows where the field is not a valid date**: Expectation kiểm tra hàng nhưng không khai báo kiểu trường của bộ đọc.
- **A `COPY INTO` `FORCE` option applied directly to the destination Delta table definition**: COPY INTO FORCE nạp lại tệp, không cấu hình suy luận trường lồng của Auto Loader.

**Tham khảo:**

- [Auto Loader schema inference and evolution](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q59 · single choice · — not answered

A Unity Catalog table owner has left the organization and no longer has access. The new lead engineer has no ownership or MANAGE privileges on the table or its parent containers. Which listed administrative role is authorized to transfer ownership of the Delta tables in Catalog Explorer?

- ✅ **A.** Unity Catalog metastore administrator
- **B.** Databricks account representative
- **C.** Original data engineer
- **D.** New lead data engineer
- **E.** This transfer is not possible

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** Unity Catalog metastore administrator

Metastore administrator của Unity Catalog được phép chuyển ownership bảng khi chủ cũ không còn truy cập. Kỹ sư trưởng mới không tự có quyền này chỉ nhờ chức danh.

#### Vì sao các phương án khác không phù hợp?

- **Databricks account representative**: Đại diện thương mại không phải administrator của Unity Catalog.
- **This transfer is not possible**: Administrator có thẩm quyền chuyển ownership mà không cần chủ cũ đăng nhập.
- **New lead data engineer**: Đề nêu rõ kỹ sư này không có quyền quản lý bảng hoặc container cha.
- **Original data engineer**: Chủ cũ không còn truy cập nên không thể thực hiện chuyển quyền.

**Tham khảo:**

- [Transfer object ownership in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges)

</details>


---

## Q60 · single choice · — not answered

A team must follow a naming convention that isolates production from development data and supports external sharing. Which Unity Catalog practice best supports this isolation requirement?

- **A.** Use a single shared catalog and prefix every table name with the environment
- ✅ **B.** Create separate catalogs per environment, such as prod and dev, and bind them to the appropriate workspaces
- **C.** Put development and production tables in the same schema
- **D.** Store all data in the legacy hive_metastore catalog

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Create separate catalogs per environment, such as prod and dev, and bind them to the appropriate workspaces

Catalog prod/dev riêng tạo ranh giới quản trị; workspace-catalog bindings giới hạn workspace được dùng từng catalog.

#### Vì sao các phương án khác không phù hợp?

- **Use a single shared catalog and prefix every table name with the environment**: Tiền tố tên không thực thi ranh giới truy cập.
- **Store all data in the legacy hive_metastore catalog**: Hive metastore cũ không cung cấp quản trị catalog xuyên workspace được yêu cầu.
- **Put development and production tables in the same schema**: Schema dùng chung trộn môi trường, thiếu cô lập cấp catalog được yêu cầu.

**Tham khảo:**

- [Catalogs and data isolation](https://docs.databricks.com/aws/en/catalogs/)

</details>


---

## Q61 · single choice · — not answered

A company requires classic Databricks worker and driver nodes to run in its own pre-existing AWS VPC so it can control subnets, routing, and outbound network restrictions. Which deployment option meets this compute-placement requirement?

- **A.** Shared Databricks workspace across multiple regions
- ✅ **B.** Databricks workspace with Customer-Managed VPC and appropriate network configurations
- **C.** Standard Databricks workspace with DBFS
- **D.** Standard Databricks SQL warehouse

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Databricks workspace with Customer-Managed VPC and appropriate network configurations

Customer-managed VPC cho công ty đặt classic compute plane trong VPC đã chọn và kiểm soát subnet, route, truy cập ra ngoài. Bản thân nó không bảo đảm mọi thông điệp dịch vụ hay dataset lưu trữ đều nằm trong VPC đó.

#### Vì sao các phương án khác không phù hợp?

- **Standard Databricks workspace with DBFS**: DBFS là lớp trừu tượng storage, không chọn VPC khách hàng có sẵn cho compute.
- **Shared Databricks workspace across multiple regions**: Chia sẻ workspace qua vùng không buộc compute nằm trong VPC đã chỉ định.
- **Standard Databricks SQL warehouse**: Chỉ loại warehouse không xác định cấu hình mạng customer-managed VPC cần có.

**Tham khảo:**

- [Configure a customer-managed VPC](https://docs.databricks.com/aws/en/security/network/classic/customer-managed-vpc)

</details>


---

## Q62 · single choice · — not answered

A data engineer has an `active_customers` DataFrame with 6 columns and an `archived_customers` DataFrame with 5 columns, and attempts `active_customers.union(archived_customers)`. What is the result?

- ✅ **A.** Spark raises an `AnalysisException` because `union` requires both DataFrames to have the same number of columns
- **B.** Spark drops the extra column from `active_customers` automatically and unions the remaining five matching columns
- **C.** Spark combines the rows successfully but leaves the sixth column entirely absent from the resulting DataFrame's schema
- **D.** Spark combines the rows successfully and fills the missing sixth column in `archived_customers` with null values

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Spark raises an `AnalysisException` because `union` requires both DataFrames to have the same number of columns

DataFrame.union ghép theo vị trí và yêu cầu số cột bằng nhau; không thể union trực tiếp sáu cột với năm cột.

#### Vì sao các phương án khác không phù hợp?

- **Spark combines the rows successfully and fills the missing sixth column in `archived_customers` with null values**: Tự điền null cần unionByName thích hợp với allowMissingColumns, không phải union này.
- **Spark drops the extra column from `active_customers` automatically and unions the remaining five matching columns**: union không tự bỏ cột không khớp.
- **Spark combines the rows successfully but leaves the sixth column entirely absent from the resulting DataFrame's schema**: union không tự sửa kết quả để loại cột thừa.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q63 · single choice · — not answered

A data analyst has created a Delta table sales that is used by the entire data analysis team. They want help from the data engineering team to implement a series of tests to ensure the data is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following commands could the data engineering team use to access sales in PySpark?

- **A.** spark.delta.table("sales")
- **B.** spark.sql("sales")
- **C.** SELECT * FROM sales
- ✅ **D.** spark.table("sales")
- **E.** There is no way to share data between PySpark and SQL.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** spark.table("sales")

spark.table("sales") trả bảng đã đăng ký dưới dạng PySpark DataFrame để kiểm thử Python truy cập cùng bảng được truy vấn bằng SQL.

#### Vì sao các phương án khác không phù hợp?

- **SELECT * FROM sales**: Văn bản SELECT thô là SQL, không phải biểu thức PySpark độc lập.
- **There is no way to share data between PySpark and SQL.**: SQL và PySpark có thể truy cập cùng bảng Spark đã đăng ký.
- **spark.sql("sales")**: spark.sql cần câu SQL như SELECT * FROM sales, không phải tên bảng đơn lẻ.
- **spark.delta.table("sales")**: spark.delta.table không phải API đọc bảng của SparkSession.

**Tham khảo:**

- [SparkSession.table — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.table.html)

</details>


---

## Q64 · single choice · — not answered

Which privilege on the Unity Catalog metastore is required to register a new external location's storage credential?

- **A.** MODIFY
- ✅ **B.** CREATE STORAGE CREDENTIAL
- **C.** USE CATALOG
- **D.** SELECT

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE STORAGE CREDENTIAL

CREATE STORAGE CREDENTIAL trên metastore cho phép tạo đối tượng credential. Tạo external location còn cần các quyền riêng tương ứng.

#### Vì sao các phương án khác không phù hợp?

- **USE CATALOG**: USE CATALOG cho phép dùng không gian catalog, không tạo credential.
- **MODIFY**: MODIFY cho phép thay đổi dữ liệu thích hợp, không tạo credential cấp metastore.
- **SELECT**: SELECT cho phép đọc dữ liệu bảng.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q65 · single choice · — not answered

An engineer notices that queries on a Delta table are reading more files than expected. After investigating, they find many small files in the table directory. What is the BEST approach to optimize this table?

- ✅ **A.** Run OPTIMIZE to compact small files into larger ones
- **B.** Recreate the table with a different partitioning strategy
- **C.** Increase the cluster size
- **D.** Run VACUUM to remove old files

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run OPTIMIZE to compact small files into larger ones

OPTIMIZE dồn các tệp dữ liệu nhỏ đang hoạt động, giảm chi phí xử lý từng tệp khi quét bảng.

#### Vì sao các phương án khác không phù hợp?

- **Run VACUUM to remove old files**: VACUUM xóa tệp lỗi thời, không dồn tệp nhỏ đang cần cho lần đọc hiện tại.
- **Increase the cluster size**: Tăng compute có thể che chi phí nhưng không sửa bố trí nhiều tệp nhỏ.
- **Recreate the table with a different partitioning strategy**: Tạo lại bảng gây xáo trộn hơn dồn tệp có mục tiêu và chưa được bằng chứng yêu cầu.

**Tham khảo:**

- [DELTA OPTIMIZE](https://docs.databricks.com/aws/en/sql/language-manual/delta-optimize)

</details>


---

## Q66 · single choice · — not answered

After cleaning a bronze `events` table with PySpark, an engineer needs to persist the cleaned DataFrame as a new managed Unity Catalog silver table named `main.sales.events_silver`, replacing any existing data on each run. Which call accomplishes this?

- **A.** Write the DataFrame out as CSV files to a path instead of registering it as a queryable table in the catalog
- **B.** Call `createOrReplaceTempView` to register the cleaned data, which only lasts for the current Spark session
- **C.** Write with `mode("append")` and `saveAsTable` to add new rows onto whatever data already exists in that same table
- ✅ **D.** Write with `mode("overwrite")` and `saveAsTable` to fully replace the managed silver table on every single run

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Write with `mode("overwrite")` and `saveAsTable` to fully replace the managed silver table on every single run

Ghi overwrite với saveAsTable("main.sales.events_silver") lưu và đăng ký kết quả, thay dữ liệu cũ. Bảng mới không chỉ định vị trí ngoài sử dụng managed storage.

#### Vì sao các phương án khác không phù hợp?

- **Write with `mode("append")` and `saveAsTable` to add new rows onto whatever data already exists in that same table**: Append thêm hàng thay vì thay dữ liệu hiện có.
- **Call `createOrReplaceTempView` to register the cleaned data, which only lasts for the current Spark session**: Temporary view chỉ tồn tại trong phiên và không lưu bảng silver managed.
- **Write the DataFrame out as CSV files to a path instead of registering it as a queryable table in the catalog**: Chỉ ghi CSV không tạo bảng managed trong catalog theo yêu cầu.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q67 · single choice · — not answered

A workspace administrator wants users to be able to access non-tabular files (such as model artifacts and images) under a governed cloud path with Unity Catalog access control. Which object should they create?

- ✅ **A.** A volume
- **B.** A managed table
- **C.** A materialized view
- **D.** An external table

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A volume

Unity Catalog volume cung cấp truy cập có quản trị vào tệp/thư mục, gồm ảnh và artifact mô hình không được quản lý như hàng trong bảng.

#### Vì sao các phương án khác không phù hợp?

- **An external table**: External table quản trị bản ghi dạng bảng, không truy cập tệp tùy ý.
- **A managed table**: Managed table lưu bản ghi dạng bảng.
- **A materialized view**: Materialized view lưu kết quả truy vấn, không phải không gian tệp tổng quát.

**Tham khảo:**

- [Unity Catalog volumes](https://docs.databricks.com/aws/en/volumes/)

</details>


---

## Q68 · single choice · — not answered

Which SQL command is used to create a new Delta table from a query result?

- ✅ **A.** CREATE TABLE AS SELECT (CTAS)
- **B.** UPDATE TABLE
- **C.** INSERT INTO
- **D.** MERGE INTO

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE TABLE AS SELECT (CTAS)

CTAS định nghĩa bảng mới và nạp kết quả SELECT trong cùng câu lệnh.

#### Vì sao các phương án khác không phù hợp?

- **INSERT INTO**: INSERT INTO thêm hàng vào đích đã có thay vì định nghĩa bảng mới.
- **UPDATE TABLE**: UPDATE TABLE không phải cú pháp tạo CTAS; cập nhật không tạo bảng kết quả truy vấn.
- **MERGE INTO**: MERGE INTO hợp nhất thay đổi vào bảng đích thay vì định nghĩa bảng kết quả mới.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q69 · single choice · — not answered

A data engineer builds `df.groupBy("region", "product_category").agg(sum("units_sold").alias("total_units"))` on a sales DataFrame. What does the resulting DataFrame contain?

- ✅ **A.** One row per distinct combination of `region` and `product_category`, each with the summed `units_sold` for that combination
- **B.** One row per distinct `region` value only, with `product_category` and `units_sold` dropped from the output entirely
- **C.** One row per original input row, each annotated with the running total of `units_sold` accumulated up to that row
- **D.** A single row containing the grand total of `units_sold` across the whole DataFrame, ignoring both grouping columns

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** One row per distinct combination of `region` and `product_category`, each with the summed `units_sold` for that combination

Group theo cả region và product_category tạo một aggregate cho mỗi cặp riêng biệt; SUM cộng units_sold trong cặp đó.

#### Vì sao các phương án khác không phù hợp?

- **One row per original input row, each annotated with the running total of `units_sold` accumulated up to that row**: Tổng lũy kế trên từng hàng đầu vào cần phép tính cửa sổ.
- **One row per distinct `region` value only, with `product_category` and `units_sold` dropped from the output entirely**: product_category cũng là khóa nhóm và vẫn có trong kết quả.
- **A single row containing the grand total of `units_sold` across the whole DataFrame, ignoring both grouping columns**: Tổng toàn cục sẽ không có các khóa groupBy.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q70 · single choice · — not answered

Which Azure Databricks runtime selection consideration is most important when a team relies on liquid clustering for new Delta tables?

- **A.** Liquid clustering only works on Databricks Runtime 9.x
- **B.** Any runtime version works identically for liquid clustering
- **C.** Liquid clustering requires the machine learning runtime
- ✅ **D.** Liquid clustering for Delta tables reached GA in Databricks Runtime 15.2 and above, so choose a recent runtime

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Liquid clustering for Delta tables reached GA in Databricks Runtime 15.2 and above, so choose a recent runtime

Liquid clustering được cung cấp rộng rãi cho bảng Delta từ Databricks Runtime 15.2; chọn runtime mới được hỗ trợ giúp tránh dùng tính năng không khả dụng.

#### Vì sao các phương án khác không phù hợp?

- **Any runtime version works identically for liquid clustering**: Hỗ trợ và hành vi tính năng phụ thuộc phiên bản runtime.
- **Liquid clustering only works on Databricks Runtime 9.x**: Runtime 9.x có trước hỗ trợ liquid clustering.
- **Liquid clustering requires the machine learning runtime**: Liquid clustering là tính năng bố trí bảng, không đòi runtime ML.

**Tham khảo:**

- [Use liquid clustering for Delta tables](https://docs.databricks.com/aws/en/delta/clustering)

</details>


---

## Q71 · single choice · — not answered

What is the default format when creating a table in Databricks without specifying USING?

- **A.** JSON
- **B.** Parquet
- **C.** CSV
- ✅ **D.** Delta

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta

Trong Databricks, bỏ USING làm provider của bảng mặc định là DELTA. Đây là mặc định Databricks, không áp dụng cho mọi cài đặt Apache Spark.

#### Vì sao các phương án khác không phù hợp?

- **Parquet**: Parquet không phải provider mặc định Databricks với cú pháp này.
- **CSV**: CSV cần được chỉ định rõ khi được hỗ trợ.
- **JSON**: JSON cần được chỉ định rõ khi được hỗ trợ.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q72 · single choice · — not answered

A job aggregates a 2 TB dataset while `spark.sql.shuffle.partitions` is left at its default of 200. The Spark UI shows each shuffle task processing several gigabytes of data, heavy spill to disk, and stage durations far longer than comparable jobs on smaller data. Which change should be applied and re-measured first?

- ✅ **A.** Increase `spark.sql.shuffle.partitions` so each shuffle partition holds a smaller amount of data and disk spill is reduced.
- **B.** Increase `spark.sql.autoBroadcastJoinThreshold` so the 2 TB dataset is broadcast to every executor instead of being shuffled.
- **C.** Increase `spark.driver.memory` so the driver process can hold the intermediate shuffle output in memory instead of letting it spill.
- **D.** Increase `spark.default.parallelism`, since this setting overrides `spark.sql.shuffle.partitions` for DataFrame and SQL aggregations.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Increase `spark.sql.shuffle.partitions` so each shuffle partition holds a smaller amount of data and disk spill is reduced.

Tăng SQL shuffle partitions chia dữ liệu trao đổi khi aggregate thành phân vùng nhỏ hơn mỗi task, có thể giảm spill tại executor; cần đo lại để tránh quá nhiều task.

#### Vì sao các phương án khác không phù hợp?

- **Increase `spark.sql.autoBroadcastJoinThreshold` so the 2 TB dataset is broadcast to every executor instead of being shuffled.**: Broadcast hai terabyte đến mọi executor không phải cách xử lý thực tế.
- **Increase `spark.default.parallelism`, since this setting overrides `spark.sql.shuffle.partitions` for DataFrame and SQL aggregations.**: spark.default.parallelism không thường ghi đè cấu hình SQL shuffle partitions.
- **Increase `spark.driver.memory` so the driver process can hold the intermediate shuffle output in memory instead of letting it spill.**: Driver không giữ toàn bộ dữ liệu shuffle trung gian của executor.

**Tham khảo:**

- [Spark SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

</details>


---

## Q73 · single choice · — not answered

A job repeatedly processes spiky, variable-sized batches. To balance cost and performance, which compute performance configuration is most appropriate?

- ✅ **A.** Autoscaling with a minimum and maximum worker count
- **B.** A fixed-size cluster sized for peak load
- **C.** Disabling auto-termination entirely
- **D.** A single-node cluster

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Autoscaling with a minimum and maximum worker count

Autoscaling thêm/bớt worker trong giới hạn cấu hình khi nhu cầu thay đổi, tránh duy trì cụm kích thước đỉnh.

#### Vì sao các phương án khác không phù hợp?

- **A fixed-size cluster sized for peak load**: Kích thước cố định theo đỉnh lãng phí tài nguyên với batch nhỏ.
- **A single-node cluster**: Một node không thể linh hoạt thêm worker phân tán.
- **Disabling auto-termination entirely**: Tắt tự kết thúc tăng thời gian nhàn rỗi và không điều chỉnh số worker.

**Tham khảo:**

- [Compute configuration reference](https://docs.databricks.com/aws/en/compute/configure)

</details>


---

## Q74 · single choice · — not answered

Which PySpark method is used to display the contents of a DataFrame?

- ✅ **A.** show()
- **B.** write()
- **C.** collect()
- **D.** save()

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** show()

show() in bản xem trước các hàng DataFrame dạng bảng, trực tiếp hiển thị nội dung mà không lấy cả tập dữ liệu thành danh sách Python.

#### Vì sao các phương án khác không phù hợp?

- **write()**: write mở giao diện ghi dữ liệu đầu ra.
- **save()**: save lưu dữ liệu thay vì hiển thị bản xem trước.
- **collect()**: collect trả tất cả hàng về driver, không phải phương thức hiển thị dạng bảng.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q75 · single choice · — not answered

A junior data engineer proposes an append-flow streaming table for a gold-layer customer_lifetime_value dataset. Its query must recompute full historical aggregates when existing source orders are corrected or back-dated refunds arrive. No CDC flow or custom stateful correction logic is planned. Why is this simple append-flow design a poor fit?

- ✅ **A.** An append-flow streaming table processes each input record incrementally and does not automatically recompute previously processed historical source rows; a materialized view is better suited to maintaining this full-history query result.
- **B.** A streaming table cannot be created inside a Lakeflow Spark Declarative Pipeline at all, so any attempt to define `customer_lifetime_value` as a streaming table would immediately fail to compile or deploy within that pipeline.
- **C.** A streaming table can only be defined using Python decorators and does not support SQL syntax at all, so the team would be forced to rewrite the entire lifetime-value aggregation logic in PySpark instead of SQL.
- **D.** A streaming table always stores its data in the internal `__databricks_internal` catalog rather than a user-facing schema, making it impossible for BI tools to connect to or query the resulting lifetime value numbers directly.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** An append-flow streaming table processes each input record incrementally and does not automatically recompute previously processed historical source rows; a materialized view is better suited to maintaining this full-history query result.

Append flow được đề xuất không tự đọc lại các hàng lịch sử đã xử lý khi bản ghi nguồn thay đổi. Materialized view duy trì toàn bộ kết quả truy vấn, còn CDC hoặc logic state tùy chỉnh cần thiết kế rõ ràng khác.

#### Vì sao các phương án khác không phù hợp?

- **A streaming table cannot be created inside a Lakeflow Spark Declarative Pipeline at all, so any attempt to define `customer_lifetime_value` as a streaming table would immediately fail to compile or deploy within that pipeline.**: Streaming table là dataset được pipeline hỗ trợ; vấn đề là ngữ nghĩa sửa dữ liệu.
- **A streaming table always stores its data in the internal `__databricks_internal` catalog rather than a user-facing schema, making it impossible for BI tools to connect to or query the resulting lifetime value numbers directly.**: Streaming table có thể được xuất vào schema người dùng và được consumer truy vấn.
- **A streaming table can only be defined using Python decorators and does not support SQL syntax at all, so the team would be forced to rewrite the entire lifetime-value aggregation logic in PySpark instead of SQL.**: Streaming table hỗ trợ định nghĩa SQL và Python.

**Tham khảo:**

- [Streaming tables](https://docs.databricks.com/aws/en/ldp/concepts/streaming-tables)
- [Materialized views](https://docs.databricks.com/aws/en/ldp/concepts/materialized-views)

</details>


---

## Q76 · single choice · — not answered

Which of the following commands can be used to write data into a Delta table while avoiding the writing of duplicate records?

- **A.** DROP
- **B.** APPEND
- **C.** IGNORE
- **D.** INSERT
- ✅ **E.** MERGE

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** MERGE

MERGE có thể chỉ chèn hàng nguồn chưa khớp đích, tránh trùng khóa với dữ liệu đã có. Vẫn cần loại trùng trong nguồn; MERGE tự nó không phải ràng buộc duy nhất tổng quát.

#### Vì sao các phương án khác không phù hợp?

- **DROP**: DROP xóa đối tượng thay vì hợp nhất hàng mới duy nhất.
- **IGNORE**: IGNORE không phải phép hợp nhất theo khóa khớp được yêu cầu.
- **APPEND**: Append ghi hàng đến mà không kiểm tra khớp đích.
- **INSERT**: INSERT riêng lẻ không so khóa đầu vào với hàng đích đã có.

**Tham khảo:**

- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q77 · single choice · — not answered

Which statement about serverless compute and Unity Catalog access is correct?

- **A.** Serverless compute requires no-isolation shared mode
- **B.** Serverless compute only works with the Hive metastore
- ✅ **C.** All serverless compute and Databricks SQL compute support Unity Catalog
- **D.** Serverless compute cannot access Unity Catalog data

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** All serverless compute and Databricks SQL compute support Unity Catalog

Serverless và Databricks SQL tích hợp quản trị Unity Catalog; dùng serverless không yêu cầu bỏ qua kiểm soát catalog.

#### Vì sao các phương án khác không phù hợp?

- **Serverless compute cannot access Unity Catalog data**: Serverless được thiết kế để truy cập dữ liệu Unity Catalog.
- **Serverless compute only works with the Hive metastore**: Serverless không bị giới hạn ở Hive metastore cũ.
- **Serverless compute requires no-isolation shared mode**: No-isolation shared không phải access mode bắt buộc cho serverless.

**Tham khảo:**

- [Unity Catalog object model](https://docs.databricks.com/aws/en/data-governance/unity-catalog)

</details>


---

## Q78 · single choice · — not answered

What does the following SQL command do: ALTER TABLE table_name ADD COLUMN new_col INT?

- **A.** Renames the existing column
- **B.** Deletes the existing column and creates a new one
- ✅ **C.** Adds a new column to an existing Delta table
- **D.** Modifies the data type of an existing column

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Adds a new column to an existing Delta table

ALTER TABLE ... ADD COLUMN mở rộng schema bảng hiện có bằng new_col INT, giữ nguyên các cột cũ.

#### Vì sao các phương án khác không phù hợp?

- **Deletes the existing column and creates a new one**: ADD COLUMN không xóa cột hiện có.
- **Renames the existing column**: Đổi tên dùng thao tác rename.
- **Modifies the data type of an existing column**: Đổi kiểu cột hiện có cần thao tác alter-column.

**Tham khảo:**

- [DDL ALTER TABLE](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-alter-table)

</details>


---

## Q79 · single choice · — not answered

On Databricks Runtime 12.1, an engineer writes SELECT order_id, explode(items) AS item_id, explode(tags) AS tag FROM orders. What is the result of using these two generator expressions in the same SELECT list?

- **A.** The query succeeds and produces the full cross product of `items` and `tags` for every single order row, similar to running a `CROSS JOIN LATERAL` between the two exploded array columns.
- **B.** The query succeeds and interleaves the two arrays element by element, pairing the first item with the first tag, the second item with the second tag, and so on.
- ✅ **C.** The query fails with UNSUPPORTED_GENERATOR.MULTI_GENERATOR because this runtime allows only one generator in a SELECT list; use separate expansion steps.
- **D.** The query succeeds and silently ignores the second `explode` call, returning only the rows produced by expanding the `items` array and leaving `tags` untouched.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** The query fails with UNSUPPORTED_GENERATOR.MULTI_GENERATOR because this runtime allows only one generator in a SELECT list; use separate expansion steps.

Runtime 12.1 giới hạn SELECT list chỉ có một biểu thức generator, nên hai lời gọi explode gây lỗi multi-generator. Giới hạn phiên bản tránh nhầm cú pháp table-reference mới với hành vi SELECT cũ.

#### Vì sao các phương án khác không phù hợp?

- **The query succeeds and produces the full cross product of `items` and `tags` for every single order row, similar to running a `CROSS JOIN LATERAL` between the two exploded array columns.**: Cú pháp SELECT cũ đã nêu gây lỗi trước khi tạo kết quả tích Descartes.
- **The query succeeds and silently ignores the second `explode` call, returning only the rows produced by expanding the `items` array and leaving `tags` untouched.**: Generator không được hỗ trợ bị từ chối, không bị âm thầm bỏ qua.
- **The query succeeds and interleaves the two arrays element by element, pairing the first item with the first tag, the second item with the second tag, and so on.**: explode không ghép mảng theo từng vị trí, và câu lệnh này thất bại.

**Tham khảo:**

- [explode generator function — runtime-specific rules](https://docs.databricks.com/aws/en/sql/language-manual/functions/explode)

</details>


---

## Q80 · single choice · — not answered

An engineer wants to grant another teammate the ability to attach to and run notebooks on a specific all-purpose cluster, but not manage it. Which compute permission should be assigned?

- **A.** Can Manage
- ✅ **B.** Can Attach To
- **C.** No Permissions
- **D.** Can Restart

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Can Attach To

CAN ATTACH TO cho phép gắn notebook và thực thi lệnh trên compute đang chạy mà không cấp quyền quản lý compute.

#### Vì sao các phương án khác không phù hợp?

- **Can Manage**: CAN MANAGE cấp quyền cấu hình và quản lý quyền rộng hơn.
- **Can Restart**: CAN RESTART bao gồm khả năng khởi động lại, vượt yêu cầu gắn tối thiểu.
- **No Permissions**: Không có quyền thì không được gắn theo yêu cầu.

**Tham khảo:**

- [Compute configuration reference](https://docs.databricks.com/aws/en/compute/configure)

</details>


---

## Q81 · single choice · — not answered

Which SQL function returns the current date?

- **A.** today()
- ✅ **B.** current_date()
- **C.** now()
- **D.** getdate()

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** current_date()

current_date() trả giá trị DATE hiện tại; trực tiếp đáp ứng yêu cầu chỉ lấy ngày.

#### Vì sao các phương án khác không phù hợp?

- **now()**: now() trả timestamp có thành phần thời gian.
- **today()**: today() không phải hàm Spark SQL chuẩn được tài liệu chỉ định cho yêu cầu này.
- **getdate()**: getdate() là alias trả timestamp khi được hỗ trợ, không chỉ trả ngày.

**Tham khảo:**

- [CURRENT_DATE](https://docs.databricks.com/aws/en/sql/language-manual/functions/current_date)

</details>


---

## Q82 · single choice · — not answered

A team writes Lakeflow pipeline code in Python using `import pyspark.pipelines as dp`. They need to silently discard any order record whose `order_total` is negative before it reaches the silver table, without failing the update. Which decorator call on the table function meets this requirement?

- **A.** `@dp.expect_or_drop("valid_total", "order_total < 0")` removes rows that fail the condition before the write, so only the negative-total rows would be kept in the target table.
- **B.** `@dp.expect_or_fail("valid_total", "order_total >= 0")` stops the pipeline update entirely the first time a negative `order_total` is encountered.
- **C.** `@dp.expect("valid_total", "order_total >= 0")` records violations as a quality metric but still writes the negative-total rows into the target table.
- ✅ **D.** `@dp.expect_or_drop("valid_total", "order_total >= 0")` removes rows that fail the condition before the write and lets the update finish normally.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** `@dp.expect_or_drop("valid_total", "order_total >= 0")` removes rows that fail the condition before the write and lets the update finish normally.

expect_or_drop giữ hàng thỏa order_total >= 0 và bỏ hàng vi phạm mà không làm lượt cập nhật thất bại.

#### Vì sao các phương án khác không phù hợp?

- **`@dp.expect("valid_total", "order_total >= 0")` records violations as a quality metric but still writes the negative-total rows into the target table.**: expect ghi nhận vi phạm nhưng vẫn giữ hàng không hợp lệ.
- **`@dp.expect_or_fail("valid_total", "order_total >= 0")` stops the pipeline update entirely the first time a negative `order_total` is encountered.**: expect_or_fail làm cập nhật thất bại khi có vi phạm.
- **`@dp.expect_or_drop("valid_total", "order_total 0")` removes rows that fail the condition before the write, so only the negative-total rows would be kept in the target table.**: Kiểm tra order_total 0 giữ đơn âm và bỏ hàng hợp lệ cần giữ.

**Tham khảo:**

- [Manage data quality with expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q83 · single choice · — not answered

A data analyst has a series of queries in a SQL program. The data analyst wants this program to run every day. They only want the final query in the program to run on Sundays. They ask for help from the data engineering team to complete this task. Which of the following approaches could be used by the data engineering team to complete this task?

- **A.** They could only run the entire program on Sundays.
- ✅ **B.** They could wrap the queries using PySpark and use Python’s control flow system to determine when to run the final query.
- **C.** They could redesign the data model to separate the data used in the final query into a new table.
- **D.** They could submit a feature request with Databricks to add this functionality.
- **E.** They could automatically restrict access to the source table in the final query so that it is only accessible on Sundays.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They could wrap the queries using PySpark and use Python’s control flow system to determine when to run the final query.

Luồng điều khiển Python có thể chạy truy vấn chung mỗi ngày và chỉ gọi spark.sql cuối khi ngày hiện tại là Chủ nhật.

#### Vì sao các phương án khác không phù hợp?

- **They could submit a feature request with Databricks to add this functionality.**: Đã có thực thi có điều kiện qua điều phối hoặc mã.
- **They could only run the entire program on Sundays.**: Chỉ chạy toàn bộ vào Chủ nhật vi phạm yêu cầu chạy truy vấn trước hằng ngày.
- **They could automatically restrict access to the source table in the final query so that it is only accessible on Sundays.**: Giới hạn quyền nguồn là thay đổi truy cập gián tiếp thay vì logic lịch rõ ràng.
- **They could redesign the data model to separate the data used in the final query into a new table.**: Đổi mô hình dữ liệu tự nó không đặt lịch có điều kiện cho truy vấn cuối.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q84 · single choice · — not answered

Which constraint applies to an Azure Data Lake Storage Gen2 account used as a Unity Catalog external location?

- **A.** It must reside in a different region than the workspace
- **B.** It must be a blob-only account without HNS
- **C.** It must use an immutability (WORM) policy
- ✅ **D.** It must have a hierarchical namespace enabled

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It must have a hierarchical namespace enabled

Tài khoản ADLS Gen2 bên ngoài phải bật hierarchical namespace để đáp ứng yêu cầu external location Unity Catalog.

#### Vì sao các phương án khác không phù hợp?

- **It must use an immutability (WORM) policy**: Container WORM không bắt buộc và không được hỗ trợ cho cấu hình external location này.
- **It must be a blob-only account without HNS**: Tài khoản blob thiếu HNS không đáp ứng yêu cầu.
- **It must reside in a different region than the workspace**: Không bắt buộc khác vùng và khác vùng có thể tăng chi phí egress.

**Tham khảo:**

- [ADLS Gen2 external locations](https://learn.microsoft.com/en-us/azure/databricks/connect/unity-catalog/cloud-storage/external-locations-adls)

</details>


---

## Q85 · single choice · — not answered

What is the purpose of the MERGE INTO statement in Delta Lake?

- **A.** To create a backup copy of a table
- **B.** To optimize table storage
- ✅ **C.** To perform an upsert operation - updating existing rows and inserting new ones based on a condition
- **D.** To combine two tables into a single permanent table

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To perform an upsert operation - updating existing rows and inserting new ones based on a condition

MERGE INTO đối chiếu hàng nguồn với khóa đích rồi áp dụng update và insert đã cấu hình, thực hiện upsert.

#### Vì sao các phương án khác không phù hợp?

- **To combine two tables into a single permanent table**: MERGE là đối soát có điều kiện thay vì chỉ nối hai bảng bền.
- **To create a backup copy of a table**: Tạo bản sao lưu cần chiến lược copy/clone riêng.
- **To optimize table storage**: Tối ưu bố trí tệp do OPTIMIZE xử lý, không phải mục đích chính MERGE.

**Tham khảo:**

- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q86 · single choice · — not answered

Which set of comparison operators can an If/else condition task in a Lakeflow Job evaluate when comparing a task value or job parameter against a literal?

- **A.** ==, !=, LIKE, IN
- **B.** ==, !=, AND, OR
- **C.** ==, CONTAINS, STARTSWITH, ENDSWITH
- ✅ **D.** ==, !=, >, >=, <, <=

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** ==, !=, >, >=, , =

If/else task hỗ trợ so sánh bằng/khác và có thứ tự giữa giá trị đã phân giải; các toán tử chọn nhánh phụ thuộc true hoặc false.

#### Vì sao các phương án khác không phù hợp?

- **==, !=, LIKE, IN**: LIKE và IN là predicate SQL, không thuộc bộ so sánh của task này.
- **==, CONTAINS, STARTSWITH, ENDSWITH**: CONTAINS và toán tử tiền tố/hậu tố không thuộc bộ so sánh của task này.
- **==, !=, AND, OR**: AND và OR kết hợp biểu thức Boolean, không phải các toán tử so sánh được hỗ trợ ở đây.

**Tham khảo:**

- [If/else condition task](https://docs.databricks.com/aws/en/jobs/if-else)

</details>


---

## Q87 · single choice · — not answered

To allow a user to read data from a table in Unity Catalog, which combination of privileges must they hold along the namespace path?

- **A.** MODIFY on the schema only
- ✅ **B.** USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the table
- **C.** Only SELECT on the table
- **D.** OWNER on the metastore

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** USE CATALOG on the catalog, USE SCHEMA on the schema, and SELECT on the table

Đọc bảng cần quyền đi qua catalog và schema cùng SELECT trên bảng, trực tiếp hoặc qua kế thừa phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Only SELECT on the table**: SELECT riêng không cung cấp quyền dùng không gian tên cần thiết.
- **OWNER on the metastore**: Sở hữu metastore quá rộng, không phải tổ hợp quyền đọc tối thiểu.
- **MODIFY on the schema only**: MODIFY liên quan sửa dữ liệu, không cung cấp đường quyền đọc này.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q88 · single choice · — not answered

Which DataFrame operation transforms each row into multiple rows based on an array column?

- ✅ **A.** explode()
- **B.** pivot()
- **C.** join()
- **D.** groupBy()

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** explode()

explode mở rộng mảng thành các hàng đầu ra riêng, mỗi hàng cho một phần tử; các trường được chọn khác có thể lặp kèm.

#### Vì sao các phương án khác không phù hợp?

- **groupBy()**: groupBy gom hàng thành nhóm thay vì mở phần tử mảng.
- **pivot()**: pivot trải giá trị thành cột thay vì phần tử mảng thành hàng.
- **join()**: join kết hợp quan hệ, tự nó không mở mảng.

**Tham khảo:**

- [explode generator function](https://docs.databricks.com/aws/en/sql/language-manual/functions/explode)

</details>


---

## Q89 · single choice · — not answered

Using the Jobs API definition for a table-update trigger, a team wants a minimum interval between consecutive trigger firings despite frequent small table writes. Which setting imposes that interval, measured since the trigger last fired?

- **A.** Change the `condition` to `ALL_UPDATED` so a run only fires once every monitored table has changed at least once.
- ✅ **B.** Set min_time_between_triggers_seconds to prevent another trigger firing until the configured interval has elapsed since the previous firing.
- **C.** Set `wait_after_last_change_seconds` to delay each run until table writes stop for that duration, resetting on each write.
- **D.** Remove the table update trigger and replace it with a file arrival trigger monitoring the table's underlying storage path.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Set min_time_between_triggers_seconds to prevent another trigger firing until the configured interval has elapsed since the previous firing.

Trong Jobs API, min_time_between_triggers_seconds đo thời gian từ lần kích hoạt trước. Nó giới hạn tần suất trigger thay vì đợi các thao tác ghi ngừng.

#### Vì sao các phương án khác không phù hợp?

- **Set `wait_after_last_change_seconds` to delay each run until table writes stop for that duration, resetting on each write.**: wait_after_last_change_seconds tạo khoảng yên được reset bởi ghi mới, không phải khoảng tối thiểu giữa các lần kích hoạt.
- **Change the `condition` to `ALL_UPDATED` so a run only fires once every monitored table has changed at least once.**: ALL_UPDATED chọn điều kiện các bảng cập nhật, không đặt giới hạn thời gian.
- **Remove the table update trigger and replace it with a file arrival trigger monitoring the table's underlying storage path.**: Theo dõi tệp storage của bảng không thay cho thiết lập thời gian table trigger.

**Tham khảo:**

- [Jobs API table_update trigger fields](https://docs.databricks.com/api/jobs/v2/update-job)

</details>


---

## Q90 · single choice · — not answered

Which statement about Unity Catalog GRANT statements and identity is correct?

- **A.** GRANT can only target individual users, never groups
- **B.** GRANT works with workspace-local groups
- ✅ **C.** GRANT statements only work with account-level groups, not workspace-local groups
- **D.** GRANT requires Azure RBAC roles instead of UC privileges

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** GRANT statements only work with account-level groups, not workspace-local groups

Quyền Unity Catalog có thể cấp cho nhóm cấp account; nhóm cục bộ workspace không dùng làm principal Unity Catalog. Người dùng và service principal cũng là principal hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **GRANT works with workspace-local groups**: Nhóm cục bộ workspace không được hỗ trợ nhận quyền Unity Catalog.
- **GRANT can only target individual users, never groups**: Nhóm có thể nhận quyền khi là nhóm cấp account.
- **GRANT requires Azure RBAC roles instead of UC privileges**: Azure RBAC kiểm soát tài nguyên cloud, không thay quyền Unity Catalog.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q91 · single choice · — not answered

What is the result of the Spark SQL query: SELECT concat("Hello", " ", "World")?

- **A.** Error - concat only accepts two arguments
- ✅ **B.** Hello World
- **C.** HelloWorld
- **D.** NULL

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Hello World

concat nối cả ba chuỗi, gồm dấu cách ở giữa, tạo Hello World.

#### Vì sao các phương án khác không phù hợp?

- **HelloWorld**: HelloWorld bỏ dấu cách đã được truyền rõ ràng.
- **Error - concat only accepts two arguments**: concat hỗ trợ nhiều đối số chuỗi.
- **NULL**: Mọi đối số đều là chuỗi khác null nên biểu thức không trả NULL.

**Tham khảo:**

- [CONCAT](https://docs.databricks.com/aws/en/sql/language-manual/functions/concat)

</details>


---

## Q92 · single choice · — not answered

An upstream process periodically overwrites the same file name in a Unity Catalog volume with refreshed content instead of writing a new file. A data engineer configured a file arrival trigger on that volume and is confused that the downstream job never starts after these overwrites. What is the most likely explanation?

- **A.** File arrival triggers require the storage location to be an external location rather than a Unity Catalog volume, so the trigger never fires.
- **B.** File arrival triggers check for changes only once every twenty-four hours, so the overwrite has simply not yet been noticed.
- **C.** File arrival triggers only support paths containing wildcard patterns, so a fixed file name is silently ignored by the trigger.
- ✅ **D.** File arrival triggers only fire when genuinely new files appear in the location, so overwriting an existing file name does not start a run.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** File arrival triggers only fire when genuinely new files appear in the location, so overwriting an existing file name does not start a run.

File arrival triggers phản ứng với tệp mới; ghi lại nội dung đường dẫn đã thấy không được tính là tệp mới đến.

#### Vì sao các phương án khác không phù hợp?

- **File arrival triggers require the storage location to be an external location rather than a Unity Catalog volume, so the trigger never fires.**: Volumes là vị trí giám sát được hỗ trợ khi đáp ứng yêu cầu tài liệu.
- **File arrival triggers only support paths containing wildcard patterns, so a fixed file name is silently ignored by the trigger.**: File arrival triggers không đòi đường dẫn wildcard.
- **File arrival triggers check for changes only once every twenty-four hours, so the overwrite has simply not yet been noticed.**: Dịch vụ không dùng khoảng polling hai mươi bốn giờ cố định cho mọi trường hợp.

**Tham khảo:**

- [File arrival triggers](https://docs.databricks.com/aws/en/jobs/file-arrival-triggers)

</details>


---

## Q93 · single choice · — not answered

A governance team wants masking and filtering rules that apply automatically to any table tagged as containing PII across an entire catalog, without configuring each table individually. Which Unity Catalog feature should they use?

- **A.** Per-user personal access tokens
- **B.** Table-level row filters set with ALTER TABLE on each table
- **C.** Dynamic views recreated per table
- ✅ **D.** Attribute-based access control (ABAC) policies driven by governed tags

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Attribute-based access control (ABAC) policies driven by governed tags

ABAC policies đánh giá governed tags rồi áp dụng lọc hàng hoặc che cột cho đối tượng khớp trong phạm vi catalog/schema, tránh cấu hình thủ công từng bảng.

#### Vì sao các phương án khác không phù hợp?

- **Table-level row filters set with ALTER TABLE on each table**: Row filter riêng từng bảng cần cấu hình cho từng bảng.
- **Dynamic views recreated per table**: Tạo lại view cho từng bảng lặp công việc mà nhóm muốn tránh.
- **Per-user personal access tokens**: Personal access tokens xác thực danh tính, không lựa chọn chính sách dữ liệu theo tag.

**Tham khảo:**

- [Attribute-based access control](https://docs.databricks.com/aws/en/data-governance/unity-catalog/abac)

</details>


---

## Q94 · single choice · — not answered

Which SQL clause is used to filter rows after aggregation has been performed?

- **A.** AGGREGATE
- ✅ **B.** HAVING
- **C.** WHERE
- **D.** FILTER

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** HAVING

HAVING lọc nhóm sau GROUP BY và aggregate, phù hợp điều kiện trên kết quả tổng hợp.

#### Vì sao các phương án khác không phù hợp?

- **WHERE**: WHERE lọc hàng đầu vào trước aggregate.
- **FILTER**: FILTER có thể giới hạn đầu vào một aggregate, không phải mệnh đề lọc sau nhóm.
- **AGGREGATE**: AGGREGATE không phải mệnh đề SQL lọc kết quả đã nhóm.

**Tham khảo:**

- [QRY SELECT HAVING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-having)

</details>


---

## Q95 · single choice · — not answered

A finance team wants a nightly reconciliation job scheduled for 2 AM in America/New_York regardless of new data arrival. They accept the scheduler's documented daylight-saving and service-delay behavior. Which trigger expresses this wall-clock scheduling requirement?

- **A.** A continuous trigger, because it keeps a run active at all times and can therefore be expected to produce fresh output well before analysts arrive each morning.
- **B.** A table update trigger on the transaction table, because that underlying table is technically updated at some point before 2 AM on most business nights.
- ✅ **C.** A scheduled trigger using a Quartz cron expression with the time zone set to America/New_York, since the requirement is a fixed wall-clock time rather than a data event.
- **D.** A file arrival trigger, because the reconciliation job still depends on transaction data files that were written earlier in the day and must react to their arrival.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** A scheduled trigger using a Quartz cron expression with the time zone set to America/New_York, since the requirement is a fixed wall-clock time rather than a data event.

Scheduled trigger với biểu thức Quartz cron và America/New_York nhắm giờ địa phương yêu cầu độc lập với sự kiện dữ liệu. Chuyển giờ mùa hè và trễ dịch vụ có thể ảnh hưởng thực thi thực tế.

#### Vì sao các phương án khác không phù hợp?

- **A file arrival trigger, because the reconciliation job still depends on transaction data files that were written earlier in the day and must react to their arrival.**: File arrival theo sự kiện, không bảo đảm giờ hằng ngày cố định.
- **A table update trigger on the transaction table, because that underlying table is technically updated at some point before 2 AM on most business nights.**: Table update xảy ra lúc dữ liệu đổi, không nhất thiết 2 giờ sáng.
- **A continuous trigger, because it keeps a run active at all times and can therefore be expected to produce fresh output well before analysts arrive each morning.**: Chạy continuous không quy định mốc đối soát mỗi đêm.

**Tham khảo:**

- [Scheduled jobs](https://docs.databricks.com/aws/en/jobs/scheduled)

</details>


---

## Q96 · single choice · — not answered

Which statement accurately describes how row filters and column masks interact with base table privileges in Unity Catalog?

- **A.** They replace the need to GRANT SELECT
- **B.** They apply only to external tables
- **C.** They grant access to data on their own
- ✅ **D.** They only add restrictions on top of existing object-level privileges granted with GRANT

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They only add restrictions on top of existing object-level privileges granted with GRANT

Row filters và column masks giới hạn dữ liệu nhìn thấy khi truy vấn sau khi người dùng có quyền đối tượng cần thiết; chúng không tự cấp SELECT.

#### Vì sao các phương án khác không phù hợp?

- **They grant access to data on their own**: Chính sách hạn chế tự nó không cấp quyền truy cập bảng.
- **They replace the need to GRANT SELECT**: Vẫn cần SELECT và quyền dùng không gian tên.
- **They apply only to external tables**: Các kiểm soát này không chỉ dành cho external tables.

**Tham khảo:**

- [Row filters and column masks](https://docs.databricks.com/aws/en/data-governance/unity-catalog/filters-and-masks/)

</details>


---

## Q97 · single choice · — not answered

What is the primary purpose of the DESCRIBE TABLE command?

- **A.** To optimize the table
- ✅ **B.** To view the column names, data types, and comments of a table
- **C.** To delete the table
- **D.** To modify the table schema

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To view the column names, data types, and comments of a table

DESCRIBE TABLE báo thông tin schema như tên, kiểu và comment mà không thay dữ liệu hoặc cấu trúc bảng.

#### Vì sao các phương án khác không phù hợp?

- **To modify the table schema**: Đổi schema dùng ALTER TABLE.
- **To delete the table**: Xóa bảng dùng DROP TABLE.
- **To optimize the table**: Tối ưu bố trí tệp dùng thao tác bảo trì như OPTIMIZE.

**Tham khảo:**

- [AUX DESCRIBE TABLE](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-aux-describe-table)

</details>


---

## Q98 · single choice · — not answered

A `disable_switch` task is marked disabled so it is skipped at runtime, but a downstream task depends on it with the `All succeeded` run-if condition. Based on how Lakeflow Jobs evaluates disabled upstream tasks, what happens to the downstream task?

- **A.** The downstream task runs anyway, because Lakeflow Jobs treats a disabled upstream task as successful when it evaluates the `All succeeded` run-if condition.
- **B.** The downstream task runs only after an administrator manually approves the disabled task from inside the job run's UI page, using the approvals panel.
- ✅ **C.** The downstream task does not run; it is marked disabled for that run, because a disabled parent does not satisfy `All succeeded`.
- **D.** The downstream task stays pending indefinitely, because Lakeflow Jobs cannot evaluate any run-if condition against a disabled upstream task at all, ever.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The downstream task does not run; it is marked disabled for that run, because a disabled parent does not satisfy `All succeeded`.

Parent bị disabled không được coi là thành công nên không thỏa All succeeded; Lakeflow Jobs vô hiệu hóa task downstream trong lượt chạy.

#### Vì sao các phương án khác không phù hợp?

- **The downstream task runs anyway, because Lakeflow Jobs treats a disabled upstream task as successful when it evaluates the `All succeeded` run-if condition.**: Disabled không được coi là succeeded với điều kiện này.
- **The downstream task stays pending indefinitely, because Lakeflow Jobs cannot evaluate any run-if condition against a disabled upstream task at all, ever.**: Scheduler đánh giá phụ thuộc disabled thay vì chờ vô hạn.
- **The downstream task runs only after an administrator manually approves the disabled task from inside the job run's UI page, using the approvals panel.**: Không có cơ chế approvals panel tự làm thỏa phụ thuộc này.

**Tham khảo:**

- [Disabled tasks](https://docs.databricks.com/aws/en/jobs/disabled-tasks)

</details>


---

## Q99 · single choice · — not answered

An organization needs to securely share live Delta tables with an external partner who does not use Databricks, without copying or duplicating the data. Which Unity Catalog capability supports this?

- **A.** External tables
- **B.** Delta cloning
- **C.** Workspace Git folders
- ✅ **D.** Delta Sharing

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta Sharing

Delta Sharing dùng giao thức chia sẻ mở để bên nhận ngoài đọc bảng sống được cấp quyền mà không cần workspace Databricks hoặc bản sao duy trì riêng.

#### Vì sao các phương án khác không phù hợp?

- **Delta cloning**: Clone tạo bảng khác thay vì giao thức chia sẻ sống được yêu cầu.
- **External tables**: External table riêng lẻ không cấu hình truy cập cho bên nhận ngoài Databricks.
- **Workspace Git folders**: Git folders chia sẻ mã nguồn, không phải dữ liệu bảng sống có quản trị.

**Tham khảo:**

- [Delta Sharing / OpenSharing](https://docs.databricks.com/aws/en/opensharing)

</details>


---

## Q100 · single choice · — not answered

In PySpark, which expression writes a DataFrame as a named Delta table called target_table?

- **A.** df.export()
- **B.** df.load()
- **C.** df.read()
- ✅ **D.** df.write.format("delta").saveAsTable("target_table")

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** df.write.format("delta").saveAsTable("target_table")

DataFrameWriter chọn định dạng Delta và saveAsTable cung cấp tên bảng đăng ký cần thiết.

#### Vì sao các phương án khác không phù hợp?

- **df.read()**: DataFrame không dùng read() để ghi đầu ra.
- **df.load()**: load là thao tác reader, không phải phương thức DataFrame lưu bảng có tên.
- **df.export()**: export không phải API lưu của DataFrameWriter trong tài liệu.

**Tham khảo:**

- [DataFrameWriter.saveAsTable — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrameWriter.saveAsTable.html)

</details>


---

## Q101 · single choice · — not answered

A developer in a Databricks Git folder has staged several changed files and clicks Commit & Push, but leaves the commit message field empty. What happens?

- ✅ **A.** Databricks blocks the commit because a commit message is required before changes can be pushed to the remote branch.
- **B.** Databricks queues the commit locally and prompts for a message only the next time the folder is opened.
- **C.** Databricks pushes the changes with no commit message, leaving the message field blank in the Git provider's history.
- **D.** Databricks pushes the changes using an auto-generated message that lists every modified file path in the folder.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks blocks the commit because a commit message is required before changes can be pushed to the remote branch.

Commit & Push yêu cầu thông điệp commit trước khi tạo commit và cập nhật nhánh từ xa. Stage chưa phải commit hoàn chỉnh.

#### Vì sao các phương án khác không phù hợp?

- **Databricks pushes the changes using an auto-generated message that lists every modified file path in the folder.**: Hộp thoại Git không bảo đảm tự tạo thông điệp danh sách tệp.
- **Databricks queues the commit locally and prompts for a message only the next time the folder is opened.**: Thông điệp trống ngăn hoàn tất thao tác thay vì xếp hàng commit vô danh.
- **Databricks pushes the changes with no commit message, leaving the message field blank in the Git provider's history.**: Hộp thoại yêu cầu thông điệp thay vì push commit thông điệp trống.

**Tham khảo:**

- [Create and manage Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos)

</details>


---

## Q102 · single choice · — not answered

A data engineer wants to create a data entity from a couple of tables. The data entity must be used by other data engineers in other sessions. It also must be saved to a physical location. Which of the following data entities should the data engineer create?

- ✅ **A.** Table
- **B.** Temporary view
- **C.** View
- **D.** Database
- **E.** Function

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Table

Bảng lưu bền vật chất hóa kết quả truy vấn tại vị trí lưu trữ và đăng ký đối tượng dùng xuyên các phiên.

#### Vì sao các phương án khác không phù hợp?

- **Database**: Database/schema nhóm đối tượng thay vì lưu kết quả truy vấn này thành hàng.
- **Function**: Function định nghĩa logic tái sử dụng thay vì tập dữ liệu vật chất hóa này.
- **View**: View thông thường lưu định nghĩa truy vấn thay vì dữ liệu kết quả vật lý.
- **Temporary view**: Temporary view có phạm vi phiên và không lưu bền dữ liệu được yêu cầu.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q103 · single choice · — not answered

Where does Unity Catalog expose operational data such as audit logs, billable usage, and lineage as queryable tables?

- **A.** In the Spark UI only
- ✅ **B.** In Unity Catalog system tables
- **C.** In the Hive metastore
- **D.** In Azure Key Vault

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** In Unity Catalog system tables

System tables cung cấp dữ liệu vận hành qua system catalog, gồm sự kiện audit, mức sử dụng tính phí và bảng lineage tùy quyền truy cập.

#### Vì sao các phương án khác không phù hợp?

- **In the Hive metastore**: Hive metastore không phải system catalog chứa các bảng vận hành này.
- **In the Spark UI only**: Spark UI hiển thị thực thi, không phải các system table cấp account thống nhất để truy vấn.
- **In Azure Key Vault**: Azure Key Vault lưu bí mật và khóa, không chứa các tập dữ liệu vận hành Databricks này.

**Tham khảo:**

- [System tables reference](https://docs.databricks.com/aws/en/admin/system-tables)

</details>


---

## Q104 · single choice · — not answered

A data engineer needs to cast a column from string to integer type in PySpark. Which approach is correct?

- **A.** df.select("col_name".toInt())
- **B.** df.convert("col_name", "int")
- **C.** df.select("col_name".asInteger())
- ✅ **D.** df.select(col("col_name").cast("int")) or df.select(expr("CAST(col_name AS INT)"))

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df.select(col("col_name").cast("int")) or df.select(expr("CAST(col_name AS INT)"))

Column.cast("int") hoặc expr("CAST(col_name AS INT)") tạo biểu thức cột có kiểu để select tính trên từng hàng.

#### Vì sao các phương án khác không phù hợp?

- **df.select("col_name".toInt())**: Chuỗi Python không có phương thức Spark toInt.
- **df.select("col_name".asInteger())**: asInteger không phải API cast từ chuỗi sang cột Spark.
- **df.convert("col_name", "int")**: DataFrame.convert không phải phương thức cast cột chuẩn PySpark.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q105 · single choice · — not answered

A data engineering team keeps a Lakeflow Job and a Lakeflow Spark Declarative Pipeline defined as source in a repository, and wants to promote the exact same resource definitions from a dev workspace to a prod workspace without hand-editing settings in the UI at each stage. Which capability of Declarative Automation Bundles addresses this directly?

- **A.** A cluster policy attached to the job restricts which workspace the job can run in, which indirectly forces the same compute configuration to apply consistently across dev and prod.
- **B.** Lakeflow Jobs and Spark Declarative Pipelines synchronize their configuration across workspaces natively whenever the resources share the same catalog and schema names in both environments.
- ✅ **C.** A `databricks.yml` file declares the job and pipeline as code, and named targets override settings like the workspace host so the same definitions deploy consistently across environments.
- **D.** The Databricks workspace UI automatically detects every resource change made in dev and replicates it into prod once an administrator approves the diff through the audit log console.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A `databricks.yml` file declares the job and pipeline as code, and named targets override settings like the workspace host so the same definitions deploy consistently across environments.

Bundle khai báo tài nguyên job/pipeline bằng mã và dùng target có tên để ghi đè workspace/cấu hình theo môi trường, giúp triển khai lặp lại nhất quán.

#### Vì sao các phương án khác không phù hợp?

- **The Databricks workspace UI automatically detects every resource change made in dev and replicates it into prod once an administrator approves the diff through the audit log console.**: Thay đổi UI workspace không tự nhân bản qua console duyệt audit log.
- **Lakeflow Jobs and Spark Declarative Pipelines synchronize their configuration across workspaces natively whenever the resources share the same catalog and schema names in both environments.**: Tên catalog giống nhau không đồng bộ định nghĩa tài nguyên.
- **A cluster policy attached to the job restricts which workspace the job can run in, which indirectly forces the same compute configuration to apply consistently across dev and prod.**: Compute policy giới hạn cấu hình compute, không triển khai định nghĩa job/pipeline xuyên workspace.

**Tham khảo:**

- [Declarative Automation Bundles](https://docs.databricks.com/aws/en/dev-tools/bundles/)

</details>


---

## Q106 · single choice · — not answered

A data steward wants to transfer ownership of a Unity Catalog table to a governance group. Which approach is correct?

- **A.** Delete and recreate the table under the new owner
- **B.** Reassign the underlying storage account in Azure
- ✅ **C.** Run ALTER TABLE OWNER TO
- **D.** Grant the group SELECT, which makes them the owner

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run ALTER TABLE OWNER TO 

ALTER TABLE table_name OWNER TO principal chuyển quyền sở hữu khi principal có quyền thực thi; nhóm có thể sở hữu bảng Unity Catalog.

#### Vì sao các phương án khác không phù hợp?

- **Delete and recreate the table under the new owner**: Xóa/tạo lại không cần thiết và có thể ảnh hưởng dữ liệu cùng phụ thuộc.
- **Reassign the underlying storage account in Azure**: Sở hữu cloud storage khác sở hữu đối tượng catalog.
- **Grant the group SELECT, which makes them the owner**: SELECT cấp quyền đọc thay vì sở hữu.

**Tham khảo:**

- [DDL ALTER TABLE](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-alter-table)

</details>


---

## Q107 · single choice · — not answered

What is the difference between INNER JOIN and LEFT OUTER JOIN?

- **A.** LEFT OUTER JOIN is faster than INNER JOIN
- ✅ **B.** INNER JOIN returns only matching rows from both tables; LEFT OUTER JOIN returns all rows from the left table and matching rows from the right
- **C.** INNER JOIN can only be used with two tables
- **D.** There is no difference; they return the same results

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** INNER JOIN returns only matching rows from both tables; LEFT OUTER JOIN returns all rows from the left table and matching rows from the right

INNER JOIN chỉ trả cặp khớp; LEFT OUTER JOIN còn giữ hàng trái không khớp với trường phía phải là NULL.

#### Vì sao các phương án khác không phù hợp?

- **There is no difference; they return the same results**: Hàng trái không khớp làm hai tập kết quả khác nhau.
- **LEFT OUTER JOIN is faster than INNER JOIN**: Tốc độ phụ thuộc dữ liệu/kế hoạch, không có lợi thế left join tuyệt đối.
- **INNER JOIN can only be used with two tables**: Có thể nối chuỗi nhiều inner join qua hơn hai bảng.

**Tham khảo:**

- [QRY SELECT JOIN](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-join)

</details>


---

## Q108 · single choice · — not answered

A bundle variable has a target-level override defined inside `databricks.yml`, and a `--var` flag for the same variable is also passed on the `bundle deploy` command line. Which value does the Databricks CLI use?

- ✅ **A.** The command-line `--var` value wins, because CLI flags take precedence over target overrides, environment variables, and top-level defaults.
- **B.** The target-level override wins, because values already defined inside `databricks.yml` always take precedence over any command-line input.
- **C.** The CLI raises a validation error and refuses to deploy, because a variable cannot be set from two different sources at once.
- **D.** Both values are merged into a single ordered list, and the job receives the target override first followed by the command-line value as a fallback.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The command-line `--var` value wins, because CLI flags take precedence over target overrides, environment variables, and top-level defaults.

Giá trị --var từ CLI ưu tiên hơn biến môi trường và định nghĩa target/default cho cùng biến bundle.

#### Vì sao các phương án khác không phù hợp?

- **The target-level override wins, because values already defined inside `databricks.yml` always take precedence over any command-line input.**: Ghi đè target không ưu tiên hơn giá trị biến CLI tường minh.
- **The CLI raises a validation error and refuses to deploy, because a variable cannot be set from two different sources at once.**: Nhiều nguồn giá trị được phân giải theo ưu tiên, không mặc định gây lỗi.
- **Both values are merged into a single ordered list, and the job receives the target override first followed by the command-line value as a fallback.**: Giá trị scalar bị ghi đè, không được nối thành danh sách fallback có thứ tự.

**Tham khảo:**

- [Bundle substitutions and variables](https://docs.databricks.com/aws/en/dev-tools/bundles/variables)

</details>


---

## Q109 · single choice · — not answered

Which Unity Catalog tool lets users browse the three-level namespace, view table schemas and sample data, manage permissions, and trace lineage graphs in one UI?

- ✅ **A.** Catalog Explorer
- **B.** Spark UI
- **C.** Databricks CLI
- **D.** Ganglia metrics

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Catalog Explorer

Catalog Explorer là UI quản trị dữ liệu để duyệt catalog/schema, xem dữ liệu, quản lý quyền và khám phá lineage.

#### Vì sao các phương án khác không phù hợp?

- **Spark UI**: Spark UI tập trung thực thi phân tán và chẩn đoán job/stage.
- **Ganglia metrics**: Ganglia metrics giám sát compute, không điều hướng quản trị catalog.
- **Databricks CLI**: CLI là giao diện lệnh, không phải công cụ đồ họa tích hợp được hỏi.

**Tham khảo:**

- [Unity Catalog object model](https://docs.databricks.com/aws/en/data-governance/unity-catalog)

</details>


---

## Q110 · single choice · — not answered

An engineer needs to handle duplicate rows in a DataFrame. Which PySpark function removes duplicates?

- **A.** Neither function exists in PySpark
- **B.** Only distinct() works; dropDuplicates() is not a valid function
- ✅ **C.** distinct() and dropDuplicates() both remove duplicate rows
- **D.** Only dropDuplicates() works; distinct() only works on SQL

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** distinct() and dropDuplicates() both remove duplicate rows

distinct() bỏ hàng trùng hoàn toàn, còn dropDuplicates() cho phép chọn tập cột làm khóa nhận diện trùng.

#### Vì sao các phương án khác không phù hợp?

- **Only distinct() works; dropDuplicates() is not a valid function**: dropDuplicates là phương thức DataFrame PySpark hợp lệ.
- **Only dropDuplicates() works; distinct() only works on SQL**: distinct có trên PySpark DataFrame, không chỉ SQL.
- **Neither function exists in PySpark**: Cả hai phương thức loại trùng đều tồn tại.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q111 · single choice · — not answered

A platform team wants an early GitHub Actions step that checks a contributor's databricks.yml configuration before deploying resources. Workspace authentication and target resolution may be configured when required. Which CLI step is appropriate?

- **A.** Add a step that runs `databricks bundle destroy -t dev --auto-approve`, since tearing down and recreating the dev target on every pull request is described as the standard way to catch config drift
- ✅ **B.** Run databricks bundle validate to validate the bundle configuration for the selected target without deploying its resources.
- **C.** Add a step that runs `databricks bundle deploy -t dev --auto-approve`, since deploying to a scratch dev target is the only way the CLI can confirm the configuration parses correctly
- **D.** Add a step that runs `databricks bundle run --validate-only`, since this flag exists specifically to check every resource type in the bundle for configuration errors before any deploy happens at all

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Run databricks bundle validate to validate the bundle configuration for the selected target without deploying its resources.

bundle validate kiểm tra cấu hình bundle trước triển khai và báo vấn đề. Validation có thể phân giải target và lookup nên nhu cầu xác thực tùy cấu hình bundle.

#### Vì sao các phương án khác không phù hợp?

- **Add a step that runs `databricks bundle deploy -t dev --auto-approve`, since deploying to a scratch dev target is the only way the CLI can confirm the configuration parses correctly**: Deploy thay đổi tài nguyên workspace và không cần thiết chỉ để gọi kiểm tra cấu hình.
- **Add a step that runs `databricks bundle run --validate-only`, since this flag exists specifically to check every resource type in the bundle for configuration errors before any deploy happens at all**: bundle run --validate-only không phải lệnh kiểm tra bundle trong tài liệu.
- **Add a step that runs `databricks bundle destroy -t dev --auto-approve`, since tearing down and recreating the dev target on every pull request is described as the standard way to catch config drift**: Destroy xóa tài nguyên đã triển khai, không phải chiến lược kiểm tra cấu hình.

**Tham khảo:**

- [Databricks CLI bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q112 · single choice · — not answered

An auditor needs a complete record of who accessed which Unity Catalog objects over the past 90 days. Which feature provides this automatically captured record?

- ✅ **A.** Audit logging via Unity Catalog (system.access tables)
- **B.** Photon metrics
- **C.** Spark event logs only
- **D.** Cluster init scripts

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Audit logging via Unity Catalog (system.access tables)

Sự kiện audit ghi danh tính, hành động và đối tượng liên quan, có thể truy vấn qua system.access.audit cho khoảng lịch sử yêu cầu, tùy phạm vi log và thời gian lưu.

#### Vì sao các phương án khác không phù hợp?

- **Spark event logs only**: Spark event logs mô tả thực thi, không cung cấp đầy đủ dấu vết audit account/đối tượng.
- **Cluster init scripts**: Init scripts khởi tạo compute, không phải bản ghi lịch sử truy cập.
- **Photon metrics**: Photon metrics đo hiệu năng thực thi truy vấn, không ghi ai truy cập đối tượng.

**Tham khảo:**

- [Audit log reference](https://docs.databricks.com/aws/en/admin/account-settings/audit-logs)

</details>


---

## Q113 · single choice · — not answered

What is the purpose of the ZORDER BY clause in the Delta Lake OPTIMIZE command?

- **A.** To sort data alphabetically by column names
- **B.** To create an index on the specified columns
- **C.** To partition the table by the specified columns
- ✅ **D.** To co-locate related information in the same set of files, improving query performance on filtered columns

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To co-locate related information in the same set of files, improving query performance on filtered columns

ZORDER đặt giá trị cột liên quan gần nhau trong các tệp để thống kê data skipping loại nhiều tệp không liên quan khi lọc có chọn lọc.

#### Vì sao các phương án khác không phù hợp?

- **To sort data alphabetically by column names**: ZORDER tác động giá trị cột, không sắp tên cột theo bảng chữ cái.
- **To partition the table by the specified columns**: ZORDER không tạo thư mục partition của bảng.
- **To create an index on the specified columns**: ZORDER tổ chức lại tệp, không tạo secondary index thông thường.

**Tham khảo:**

- [DELTA OPTIMIZE](https://docs.databricks.com/aws/en/sql/language-manual/delta-optimize)

</details>


---

## Q114 · single choice · — not answered

A pipeline job that normally completes in about 12 minutes has been taking over 40 minutes for the last three runs, though it still finishes with a Succeeded status each time. Using only the Lakeflow Jobs UI, how can the engineer confirm this is an unusual trend rather than normal variance?

- **A.** Check the Spark UI stage detail page for the most recent run, since only stage-level shuffle metrics reveal whether a run duration is abnormal.
- **B.** Query the job's cluster event log directly, because the Jobs UI only reports whether a run succeeded or failed and never reports duration.
- **C.** Rerun the job manually from the Repair run option, since a successful repair run duration is the only reliable duration baseline available.
- ✅ **D.** Open the job's run history and compare the total duration bars across recent runs against the historical baseline shown in the Matrix or Runs list view.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Open the job's run history and compare the total duration bars across recent runs against the historical baseline shown in the Matrix or Runs list view.

So sánh thanh thời lượng trong lịch sử cho thấy nhiều lượt 40 phút gần đây lệch khỏi mốc 12 phút trước đó dù vẫn thành công.

#### Vì sao các phương án khác không phù hợp?

- **Check the Spark UI stage detail page for the most recent run, since only stage-level shuffle metrics reveal whether a run duration is abnormal.**: Metric một stage giúp chẩn đoán lượt chạy, không tự xác định biến động thời lượng lịch sử.
- **Query the job's cluster event log directly, because the Jobs UI only reports whether a run succeeded or failed and never reports duration.**: Jobs UI có thời lượng và lịch sử; log cụm không phải nguồn duy nhất.
- **Rerun the job manually from the Repair run option, since a successful repair run duration is the only reliable duration baseline available.**: Repair để khôi phục task chưa thành công, không tạo mốc thời lượng cho lượt đã thành công.

**Tham khảo:**

- [Monitor Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/monitor)

</details>


---

## Q115 · single choice · — not answered

To improve data discovery, a team wants every governed table and key columns to carry human-readable descriptions and business comments. Which Unity Catalog capability supports this?

- **A.** Enabling Photon
- **B.** Increasing the VACUUM retention period
- ✅ **C.** Setting COMMENT on tables and columns and adding tags for discovery
- **D.** Configuring autoscaling

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Setting COMMENT on tables and columns and adding tags for discovery

Comment bảng/cột mô tả ý nghĩa nghiệp vụ, còn tag cải thiện phân loại và tìm kiếm tài sản có quản trị.

#### Vì sao các phương án khác không phù hợp?

- **Enabling Photon**: Photon thay đổi hiệu năng thực thi, không tạo mô tả.
- **Increasing the VACUUM retention period**: Thời gian giữ VACUUM ảnh hưởng tệp cũ, không phải metadata dễ đọc.
- **Configuring autoscaling**: Autoscaling đổi dung lượng compute, không tài liệu hóa dữ liệu.

**Tham khảo:**

- [Unity Catalog object model](https://docs.databricks.com/aws/en/data-governance/unity-catalog)

</details>


---

## Q116 · single choice · — not answered

Which SQL window function assigns equal ranks to tied rows within an ordered partition and leaves gaps in subsequent ranks?

- **A.** NTILE()
- ✅ **B.** RANK()
- **C.** ROW_NUMBER()
- **D.** DENSE_RANK()

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** RANK()

RANK cho các hàng hòa cùng hạng và bỏ qua vị trí tiếp theo, khác ROW_NUMBER tách hàng hòa thành số hàng khác nhau.

#### Vì sao các phương án khác không phù hợp?

- **ROW_NUMBER()**: ROW_NUMBER gán số duy nhất, không giữ cùng hạng khi hòa.
- **DENSE_RANK()**: DENSE_RANK giữ hòa nhưng không tạo khoảng trống hạng.
- **NTILE()**: NTILE chia hàng vào số bucket yêu cầu, không xếp hạng giá trị hòa.

**Tham khảo:**

- [rank ranking window function](https://docs.databricks.com/aws/en/sql/language-manual/functions/rank)

</details>


---

## Q117 · single choice · — not answered

A `groupBy` aggregation is heavily skewed because a single customer ID accounts for a large share of all rows, causing one task to process far more data than the others in the Spark UI's stage metrics. AQE's skew join optimization does not apply here because the bottleneck occurs in an aggregation rather than a join. Which technique would most directly reduce the skew for this aggregation?

- **A.** Reducing `spark.sql.shuffle.partitions` to a smaller value, consolidating the aggregation into fewer, larger partitions per task.
- **B.** Repartitioning the DataFrame by a monotonically increasing surrogate column, ignoring the original grouping key altogether.
- ✅ **C.** Salting the skewed key with a random suffix before grouping, then re-aggregating to spread its rows across partitions.
- **D.** Converting the aggregation to a broadcast join against a lookup table, eliminating the shuffle step regardless of key distribution.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Salting the skewed key with a random suffix before grouping, then re-aggregating to spread its rows across partitions.

Salting chia khóa khách hàng quá lớn thành nhiều khóa aggregate tạm; aggregate lần hai bỏ salt và hợp nhất kết quả. Cần phép aggregate phân rã đúng được.

#### Vì sao các phương án khác không phù hợp?

- **Reducing `spark.sql.shuffle.partitions` to a smaller value, consolidating the aggregation into fewer, larger partitions per task.**: Ít partition hơn có thể tăng tải mỗi task thay vì chia khóa nóng.
- **Converting the aggregation to a broadcast join against a lookup table, eliminating the shuffle step regardless of key distribution.**: Broadcast bảng tra cứu không thay aggregate theo nhóm hoặc loại khóa nóng.
- **Repartitioning the DataFrame by a monotonically increasing surrogate column, ignoring the original grouping key altogether.**: groupBy sau đó trên khóa gốc lại shuffle khóa về chung, vô hiệu repartition không liên quan.

**Tham khảo:**

- [Spark SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

</details>


---

## Q118 · single choice · — not answered

Which object in Unity Catalog sits directly under the metastore rather than inside the three-level catalog.schema.table namespace?

- **A.** A table
- ✅ **B.** A storage credential
- **C.** A view
- **D.** A column

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A storage credential

Storage credential là đối tượng cấp metastore chứa thông tin xác thực lưu trữ ngoài; nó không nằm trong catalog.schema.table.

#### Vì sao các phương án khác không phù hợp?

- **A table**: Bảng nằm trong schema.
- **A view**: View nằm trong schema.
- **A column**: Cột thuộc bảng hoặc view, không trực tiếp thuộc metastore.

**Tham khảo:**

- [Unity Catalog cloud storage](https://docs.databricks.com/aws/en/connect/unity-catalog/cloud-storage)

</details>


---

## Q119 · single choice · — not answered

What does the following PySpark code do: df.na.fill({"age": 0, "name": "Unknown"})?

- **A.** Creates a new DataFrame with only NULL values
- ✅ **B.** Replaces NULL values in specific columns with specified default values
- **C.** Deletes rows with NULL values
- **D.** Counts the number of NULL values in each column

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Replaces NULL values in specific columns with specified default values

na.fill với dictionary thay age thiếu bằng 0 và name thiếu bằng Unknown trong các cột có kiểu phù hợp, trả DataFrame đã biến đổi.

#### Vì sao các phương án khác không phù hợp?

- **Deletes rows with NULL values**: fill thay null thay vì xóa hàng chứa null.
- **Creates a new DataFrame with only NULL values**: Kết quả giữ hàng gốc thay vì chỉ chọn hàng null.
- **Counts the number of NULL values in each column**: Phương thức đổi giá trị, không đếm null.

**Tham khảo:**

- [PySpark DataFrame API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/dataframe.html)

</details>


---

## Q120 · single choice · — not answered

Which three maintenance operations does predictive optimization automatically manage for eligible Unity Catalog managed tables?

- ✅ **A.** `OPTIMIZE`, `VACUUM`, and `ANALYZE`, covering file compaction, stale file cleanup, and statistics collection respectively
- **B.** `OPTIMIZE`, `VACUUM`, and `REORG TABLE`, combining compaction, cleanup, and type-widening rewrites automatically
- **C.** `OPTIMIZE`, `ZORDER`, and `VACUUM`, since ZORDER is required alongside file compaction for predictive optimization to run
- **D.** `ANALYZE`, `REORG TABLE`, and `REPAIR TABLE`, since these rebuild metadata and table structure for query planning

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** `OPTIMIZE`, `VACUUM`, and `ANALYZE`, covering file compaction, stale file cleanup, and statistics collection respectively

Predictive optimization lên lịch OPTIMIZE cho bố trí tệp, VACUUM cho tệp cũ và ANALYZE cho thống kê tối ưu hóa trên managed tables đủ điều kiện.

#### Vì sao các phương án khác không phù hợp?

- **`OPTIMIZE`, `ZORDER`, and `VACUUM`, since ZORDER is required alongside file compaction for predictive optimization to run**: ZORDER không phải thao tác bảo trì predictive optimization bắt buộc.
- **`ANALYZE`, `REORG TABLE`, and `REPAIR TABLE`, since these rebuild metadata and table structure for query planning**: REORG TABLE và REPAIR TABLE không thuộc bộ ba tự động được tài liệu quy định này.
- **`OPTIMIZE`, `VACUUM`, and `REORG TABLE`, combining compaction, cleanup, and type-widening rewrites automatically**: REORG TABLE không thay ANALYZE trong nhóm bảo trì được công bố.

**Tham khảo:**

- [Predictive optimization](https://docs.databricks.com/aws/en/optimizations/predictive-optimization)

</details>


---

## Q121 · single choice · — not answered

A team wants automatic timestamp-based row expiry on an eligible Unity Catalog managed table, with asynchronous physical cleanup rather than a guarantee of deletion at the exact expiry instant. Predictive optimization is enabled. Which feature provides this lifecycle policy?

- **A.** Instance pools
- ✅ **B.** Auto time-to-live (Auto-TTL) row-deletion policy
- **C.** Z-ordering
- **D.** Photon

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Auto time-to-live (Auto-TTL) row-deletion policy

Auto-TTL định nghĩa hạn dùng từ cột timestamp và tự động xóa, dọn storage nền. Nó cần bảng managed được hỗ trợ và predictive optimization; thời gian xóa vật lý là bất đồng bộ.

#### Vì sao các phương án khác không phù hợp?

- **Z-ordering**: Z-ordering tổ chức tính cục bộ dữ liệu, không định nghĩa hạn xóa hàng.
- **Photon**: Photon tăng tốc thực thi, không cấu hình hạn dùng dữ liệu.
- **Instance pools**: Instance pool tăng tốc cấp compute, không xóa hàng hết hạn.

**Tham khảo:**

- [Automatic row deletion with auto time-to-live](https://docs.databricks.com/aws/en/tables/operations/auto-ttl)

</details>


---

## Q122 · single choice · — not answered

Which approach is recommended for handling slowly changing dimensions (SCD) Type 1 in Delta Lake?

- ✅ **A.** Use MERGE INTO with WHEN MATCHED UPDATE to overwrite existing records and WHEN NOT MATCHED INSERT for new records
- **B.** Use INSERT INTO for all new records
- **C.** Delete the entire table and recreate it
- **D.** Create a new table for each update

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use MERGE INTO with WHEN MATCHED UPDATE to overwrite existing records and WHEN NOT MATCHED INSERT for new records

SCD Type 1 ghi đè giá trị dimension hiện tại không giữ lịch sử phiên bản; MERGE cập nhật khóa khớp và chèn khóa chưa có.

#### Vì sao các phương án khác không phù hợp?

- **Use INSERT INTO for all new records**: Chỉ INSERT không ghi đè hàng dimension đã có.
- **Delete the entire table and recreate it**: Tạo lại toàn bảng không cần thiết khi chỉ cập nhật theo khóa.
- **Create a new table for each update**: Tạo bảng mới mỗi cập nhật không thực hiện ngữ nghĩa hàng hiện tại Type 1.

**Tham khảo:**

- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q123 · single choice · — not answered

A serverless Lakeflow task issues 150 SQL queries during a single run, and an engineer notices that several later queries show no performance insight badge even though they appear slow in the query history. What explains this?

- **A.** Performance insight badges only ever appear for queries that read from Unity Catalog managed tables rather than external tables.
- **B.** The task was executed on a job cluster instead of serverless compute, which disables performance insight badges entirely.
- ✅ **C.** Databricks aggregates query-level performance metrics for only the first 100 queries in a run, so later queries are excluded.
- **D.** The job's expected completion time threshold was already exceeded, which suppresses insight badges for remaining queries.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks aggregates query-level performance metrics for only the first 100 queries in a run, so later queries are excluded.

Metric truy vấn của task-run serverless bao phủ 100 truy vấn đầu mỗi task run, nên truy vấn sau có thể không xuất hiện trong insight tổng hợp dù có trong query history.

#### Vì sao các phương án khác không phù hợp?

- **Performance insight badges only ever appear for queries that read from Unity Catalog managed tables rather than external tables.**: Giới hạn 100 đầu không phải quy tắc phân biệt bảng managed và external.
- **The job's expected completion time threshold was already exceeded, which suppresses insight badges for remaining queries.**: Ngưỡng thời lượng dự kiến không quy định mốc giới hạn số truy vấn này.
- **The task was executed on a job cluster instead of serverless compute, which disables performance insight badges entirely.**: Đề nêu thực thi serverless; classic job cluster không giải thích việc loại truy vấn sau trong lượt này.

**Tham khảo:**

- [Diagnose Lakeflow Jobs performance](https://docs.databricks.com/gcp/en/jobs/diagnose-job-performance)

</details>


---

## Q124 · single choice · — not answered

Which governed control restricts which rows of a table a user can see by applying a SQL user-defined function that returns FALSE for rows the user is not authorized to view?

- **A.** A volume ACL
- **B.** A cluster policy
- ✅ **C.** A row filter
- **D.** A column mask

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A row filter

Row filter gắn SQL UDF Boolean với bảng để loại hàng không thỏa điều kiện cấp quyền tại thời điểm truy vấn.

#### Vì sao các phương án khác không phù hợp?

- **A column mask**: Column mask thay giá trị cột được bảo vệ thay vì loại hàng không được phép.
- **A volume ACL**: Volume ACL quản trị truy cập tệp, không kiểm soát từng hàng bảng.
- **A cluster policy**: Cluster policy giới hạn cấu hình compute, không áp predicate hàng bảng.

**Tham khảo:**

- [Row filters and column masks](https://docs.databricks.com/aws/en/data-governance/unity-catalog/filters-and-masks/)

</details>


---

## Q125 · single choice · — not answered

What is the difference between a managed table and an external table in Databricks?

- **A.** There is no difference
- ✅ **B.** Managed tables store data in the Databricks-managed location and are dropped with the table; external tables reference data in external storage
- **C.** Managed tables can only use Delta format
- **D.** External tables are faster than managed tables

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Managed tables store data in the Databricks-managed location and are dropped with the table; external tables reference data in external storage

Bảng managed giao vòng đời lưu trữ cho Databricks; xóa bảng sẽ lên lịch xóa dữ liệu. Xóa bảng external chỉ xóa metadata và giữ các tệp được quản lý bên ngoài.

#### Vì sao các phương án khác không phù hợp?

- **There is no difference**: Hai loại khác nhau về quản lý lưu trữ và vòng đời dữ liệu.
- **External tables are faster than managed tables**: Lưu trữ external không tự bảo đảm truy vấn nhanh hơn.
- **Managed tables can only use Delta format**: Bảng managed trong Unity Catalog hiện cũng hỗ trợ Apache Iceberg; giới hạn chỉ Delta đã lỗi thời.

**Tham khảo:**

- [Unity Catalog managed tables](https://docs.databricks.com/aws/en/tables/managed)
- [Work with external tables](https://docs.databricks.com/aws/en/tables/external)

</details>


---

## Q126 · single choice · — not answered

When a Spark job on a Databricks cluster fails with an out-of-memory error, which combination of resources gives the most direct evidence of whether the failure originated on the driver or on an executor?

- **A.** The Databricks billing usage dashboard, which reports which specific node incurred the highest compute cost during the run and is therefore the likely failure point.
- **B.** The cluster's autoscaling history graph, which shows only how many executors were attached over time and not their individual memory usage.
- ✅ **C.** The driver logs for stack traces mentioning the failing process, combined with the Spark UI Executors tab for per-node memory and garbage-collection metrics.
- **D.** The workspace audit log, which records every notebook command but does not capture memory allocation on either the driver or the executors.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The driver logs for stack traces mentioning the failing process, combined with the Spark UI Executors tab for per-node memory and garbage-collection metrics.

Log driver xác định tiến trình lỗi và stack trace; chỉ số bộ nhớ và GC của executor trong Spark UI cho biết áp lực trên executor. Đối chiếu chúng với thời điểm chạy lỗi.

#### Vì sao các phương án khác không phù hợp?

- **The Databricks billing usage dashboard, which reports which specific node incurred the highest compute cost during the run and is therefore the likely failure point.**: Billing đo mức sử dụng và chi phí, không xác định JVM lỗi hoặc stack trace.
- **The workspace audit log, which records every notebook command but does not capture memory allocation on either the driver or the executors.**: Sự kiện audit phản ánh thao tác và truy cập, không chẩn đoán heap của tiến trình.
- **The cluster's autoscaling history graph, which shows only how many executors were attached over time and not their individual memory usage.**: Số executor cho biết co giãn, không chỉ ra tiến trình cạn bộ nhớ.

**Tham khảo:**

- [Manage classic compute — logs and Spark UI](https://docs.databricks.com/aws/en/compute/clusters-manage)

</details>


---

## Q127 · single choice · — not answered

A dataset has been defined using Delta Live Tables and includes an expectations clause: CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW What is the expected behavior when a batch of data containing data that violates these constraints is processed?

- **A.** Records that violate the expectation are added to the target dataset and recorded as invalid in the event log.
- **B.** Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset.
- **C.** Records that violate the expectation cause the job to fail.
- ✅ **D.** Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log.
- **E.** Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log.

ON VIOLATION DROP ROW loại bản ghi có timestamp không hợp lệ, đồng thời ghi chỉ số vi phạm expectation vào event log; bản ghi hợp lệ tiếp tục được xử lý.

#### Vì sao các phương án khác không phù hợp?

- **Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table.**: Phải triển khai luồng quarantine riêng; DROP ROW không tự tạo bảng cách ly.
- **Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset.**: Thao tác drop loại bản ghi lỗi thay vì giữ lại và thêm cờ.
- **Records that violate the expectation are added to the target dataset and recorded as invalid in the event log.**: DROP ROW không ghi bản ghi vi phạm vào bảng đích.
- **Records that violate the expectation cause the job to fail.**: Muốn làm update thất bại phải dùng ON VIOLATION FAIL UPDATE.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q128 · single choice · — not answered

A platform architect wants a catalog-level masking rule that table owners cannot remove or bypass. Which approach guarantees this?

- **A.** Table-level column mask set with ALTER TABLE
- ✅ **B.** ABAC policy defined at the catalog level
- **C.** A dynamic view owned by the table owner
- **D.** A personal access token restriction

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** ABAC policy defined at the catalog level

ABAC ở cấp catalog tập trung chính sách che dữ liệu ở trên quyền sở hữu bảng. Chủ bảng không thể xóa chính sách cấp cha chỉ bằng quyền sở hữu bảng được áp dụng.

#### Vì sao các phương án khác không phù hợp?

- **Table-level column mask set with ALTER TABLE**: Mask cấp bảng do chủ bảng quản lý, nên thiếu sự phân tách quyền cần thiết.
- **A dynamic view owned by the table owner**: Chủ bảng có thể sửa view mà họ sở hữu.
- **A personal access token restriction**: Hạn chế token kiểm soát xác thực, không tạo mask kế thừa tập trung.

**Tham khảo:**

- [Create and manage ABAC policies](https://docs.databricks.com/aws/en/data-governance/unity-catalog/abac/policies)

</details>


---

## Q129 · single choice · — not answered

Which SQL command creates a partitioned table by date?

- ✅ **A.** CREATE TABLE t (id INT, date STRING) PARTITIONED BY (date)
- **B.** CREATE TABLE t (id INT, date STRING) CLUSTERED BY (date)
- **C.** CREATE TABLE t (id INT, date STRING) ZORDER BY (date)
- **D.** CREATE TABLE t (id INT, date STRING) DISTRIBUTED BY (date)

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE TABLE t (id INT, date STRING) PARTITIONED BY (date)

PARTITIONED BY (date) khai báo phân vùng vật lý theo date khi tạo bảng.

#### Vì sao các phương án khác không phù hợp?

- **CREATE TABLE t (id INT, date STRING) CLUSTERED BY (date)**: CLUSTERED BY không khai báo partition; clustering và partitioning là hai kiểu bố trí khác nhau.
- **CREATE TABLE t (id INT, date STRING) ZORDER BY (date)**: ZORDER BY thuộc tối ưu hóa, không phải cú pháp khai báo partition khi CREATE TABLE.
- **CREATE TABLE t (id INT, date STRING) DISTRIBUTED BY (date)**: DISTRIBUTED BY không phải mệnh đề partition cần dùng trong CREATE TABLE của Databricks.

**Tham khảo:**

- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q130 · single choice · — not answered

A data engineer runs `CREATE TABLE analytics.sales.orders (...)` and omits any `LOCATION` clause. Where does Unity Catalog store the resulting data files?

- **A.** In the same storage path as the most recently created external table in that schema, since Unity Catalog reuses the last referenced path by default.
- ✅ **B.** Under the managed storage location resolved from the containing schema, catalog, or metastore, whichever level has a managed location configured, since no path was given.
- **C.** In a temporary DBFS root path that must be manually migrated to permanent storage before the table can be queried by any other user or job in the workspace.
- **D.** In the workspace's default external location, which every Unity Catalog metastore provisions automatically for tables that omit an explicit `LOCATION` clause at creation time.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Under the managed storage location resolved from the containing schema, catalog, or metastore, whichever level has a managed location configured, since no path was given.

Không có LOCATION, Unity Catalog tạo bảng managed và chọn vị trí managed storage theo cấu hình schema, rồi catalog, rồi metastore.

#### Vì sao các phương án khác không phù hợp?

- **In a temporary DBFS root path that must be manually migrated to permanent storage before the table can be queried by any other user or job in the workspace.**: Managed storage của Unity Catalog bền vững; không có yêu cầu chuyển bắt buộc từ DBFS tạm.
- **In the workspace's default external location, which every Unity Catalog metastore provisions automatically for tables that omit an explicit `LOCATION` clause at creation time.**: Bỏ LOCATION không chọn một external location mặc định được tự tạo.
- **In the same storage path as the most recently created external table in that schema, since Unity Catalog reuses the last referenced path by default.**: Vị trí managed không kế thừa đường dẫn bảng external vừa tạo.

**Tham khảo:**

- [Unity Catalog managed tables](https://docs.databricks.com/aws/en/tables/managed)
- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q131 · single choice · — not answered

Which of the following describes when to use the CREATE STREAMING LIVE TABLE (formerly CREATE INCREMENTAL LIVE TABLE) syntax over the CREATE LIVE TABLE syntax when creating Delta Live Tables (DLT) tables using SQL?

- ✅ **A.** CREATE STREAMING LIVE TABLE should be used when data needs to be processed incrementally.
- **B.** CREATE STREAMING LIVE TABLE should be used when the previous step in the DLT pipeline is static.
- **C.** CREATE STREAMING LIVE TABLE is redundant for DLT and it does not need to be used.
- **D.** CREATE STREAMING LIVE TABLE should be used when the subsequent step in the DLT pipeline is static.
- **E.** CREATE STREAMING LIVE TABLE should be used when data needs to be processed through complicated aggregations.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE STREAMING LIVE TABLE should be used when data needs to be processed incrementally.

Cú pháp cũ CREATE STREAMING LIVE TABLE khai báo xử lý streaming tăng dần; live table không streaming biểu diễn kết quả truy vấn có thể làm mới như materialized view.

#### Vì sao các phương án khác không phù hợp?

- **CREATE STREAMING LIVE TABLE should be used when the subsequent step in the DLT pipeline is static.**: Bước phía sau tĩnh không quyết định mô hình xử lý đầu vào.
- **CREATE STREAMING LIVE TABLE is redundant for DLT and it does not need to be used.**: Khai báo streaming có ngữ nghĩa tăng dần riêng, không dư thừa.
- **CREATE STREAMING LIVE TABLE should be used when data needs to be processed through complicated aggregations.**: Chỉ có tổng hợp phức tạp chưa đủ để chọn streaming tăng dần.
- **CREATE STREAMING LIVE TABLE should be used when the previous step in the DLT pipeline is static.**: Nguồn phía trước tĩnh không tự đòi hỏi đích streaming.

**Tham khảo:**

- [Streaming tables](https://docs.databricks.com/aws/en/ldp/concepts/streaming-tables)
- [Materialized views](https://docs.databricks.com/aws/en/ldp/concepts/materialized-views)

</details>


---

## Q132 · single choice · — not answered

Following least-privilege guidance, who should receive the CREATE EXTERNAL LOCATION privilege in Unity Catalog?

- ✅ **A.** Only administrators or trusted data engineers tasked with connecting Unity Catalog to cloud storage
- **B.** Anyone with SELECT on a single table
- **C.** All notebook users by default
- **D.** Every data analyst in the workspace

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Only administrators or trusted data engineers tasked with connecting Unity Catalog to cloud storage

CREATE EXTERNAL LOCATION thiết lập truy cập có quản trị tới đường dẫn cloud và credential. Chỉ nên cấp cho nhân sự tin cậy phụ trách tích hợp này.

#### Vì sao các phương án khác không phù hợp?

- **Every data analyst in the workspace**: Analyst thường truy vấn đối tượng đã được quản trị, không cần tạo kết nối storage.
- **All notebook users by default**: Việc dùng notebook không tạo nhu cầu tích hợp storage có đặc quyền.
- **Anyone with SELECT on a single table**: SELECT cho phép đọc bảng, không cấp quyền kết nối vị trí cloud mới.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q133 · single choice · — not answered

What does the PIVOT operation do in SQL?

- **A.** It creates a backup of the table
- ✅ **B.** It rotates data from rows into columns, aggregating values
- **C.** It removes duplicate rows
- **D.** It sorts the data in descending order

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It rotates data from rows into columns, aggregating values

PIVOT biến các giá trị hàng khác nhau thành cột và tính phép tổng hợp đã chỉ định cho từng nhóm.

#### Vì sao các phương án khác không phù hợp?

- **It sorts the data in descending order**: Sắp xếp đổi thứ tự, không chuyển giá trị hàng thành cột.
- **It creates a backup of the table**: PIVOT là biến đổi truy vấn, không sao lưu.
- **It removes duplicate rows**: Khử trùng lặp loại bản ghi lặp, không biến nhóm giá trị thành cột.

**Tham khảo:**

- [PIVOT clause](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-pivot)

</details>


---

## Q134 · single choice · — not answered

A column mask policy redacts customer email addresses for most groups. The compliance team must still see the full, unmasked email address for investigations. How should this exception be expressed in the `CREATE POLICY` statement?

- **A.** Grant the compliance team the `MODIFY` privilege on the table, since only write privileges determine whether column mask policies apply to a group's queries.
- **B.** Add a `WHEN has_tag_value('sensitivity','high')` clause naming the compliance team, since `WHEN` clauses in `CREATE POLICY` select principals rather than tables.
- ✅ **C.** Add an `EXCEPT compliance_team` clause to the policy's principal list, so the masking function is skipped whenever a member of that group runs the query.
- **D.** Create a second column mask policy that masks the column for every group, then rely on the newer policy to silently override the first one.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add an `EXCEPT compliance_team` clause to the policy's principal list, so the masking function is skipped whenever a member of that group runs the query.

EXCEPT loại compliance_team khỏi chính sách mask, nên thành viên thấy giá trị gốc khi có đủ quyền truy cập thông thường.

#### Vì sao các phương án khác không phù hợp?

- **Create a second column mask policy that masks the column for every group, then rely on the newer policy to silently override the first one.**: Các mask khác nhau chồng lấn có thể gây xung đột; chính sách mới không âm thầm ghi đè chính sách cũ.
- **Grant the compliance team the `MODIFY` privilege on the table, since only write privileges determine whether column mask policies apply to a group's queries.**: MODIFY cho phép ghi, không miễn mask cho người đọc.
- **Add a `WHEN has_tag_value('sensitivity','high')` clause naming the compliance team, since `WHEN` clauses in `CREATE POLICY` select principals rather than tables.**: Điều kiện tag chọn dữ liệu phù hợp, không khai báo danh sách principal được miễn.

**Tham khảo:**

- [Create and manage ABAC policies](https://docs.databricks.com/aws/en/data-governance/unity-catalog/abac/policies)

</details>


---

## Q135 · single choice · — not answered

A data engineering team has noticed that their Databricks SQL queries are running too slowly when they are submitted to a non-running SQL endpoint. The data engineering team wants this issue to be resolved. Which of the following approaches can the team use to reduce the time it takes to return results in this scenario?

- **A.** They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to "Reliability Optimized."
- **B.** They can increase the cluster size of the SQL endpoint.
- ✅ **C.** They can turn on the Serverless feature for the SQL endpoint.
- **D.** They can turn on the Auto Stop feature for the SQL endpoint.
- **E.** They can increase the maximum bound of the SQL endpoint's scaling range.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can turn on the Serverless feature for the SQL endpoint.

SQL warehouse serverless giảm thời gian khởi động nhờ tài nguyên được quản lý và sẵn sàng nhanh. Chỉ tăng năng lực xử lý không giải quyết thời gian chờ warehouse đang tắt khởi động.

#### Vì sao các phương án khác không phù hợp?

- **They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to "Reliability Optimized."**: Chính sách độ tin cậy của Spot không phải yêu cầu bổ sung để serverless khởi động nhanh.
- **They can turn on the Auto Stop feature for the SQL endpoint.**: Auto Stop tắt tài nguyên nhàn rỗi, không tăng tốc khởi động.
- **They can increase the cluster size of the SQL endpoint.**: Cụm lớn hơn chủ yếu thay đổi năng lực thực thi truy vấn.
- **They can increase the maximum bound of the SQL endpoint's scaling range.**: Tăng giới hạn mở rộng chủ yếu phục vụ tải truy vấn đồng thời.

**Tham khảo:**

- [SQL warehouse types](https://docs.databricks.com/aws/en/compute/sql-warehouse/warehouse-types)

</details>


---

## Q136 · single choice · — not answered

What is the correct fully qualified way to reference a table named orders in schema sales within catalog prod in Unity Catalog?

- **A.** sales.orders
- ✅ **B.** prod.sales.orders
- **C.** orders
- **D.** metastore.prod.sales.orders

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** prod.sales.orders

Unity Catalog định danh đầy đủ bảng bằng catalog.schema.table; prod.sales.orders cung cấp đủ ba cấp.

#### Vì sao các phương án khác không phù hợp?

- **orders**: orders phụ thuộc catalog và schema hiện hành.
- **sales.orders**: sales.orders vẫn phụ thuộc catalog hiện hành.
- **metastore.prod.sales.orders**: Metastore không phải thành phần thứ tư trong tên bảng Unity Catalog.

**Tham khảo:**

- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q137 · single choice · — not answered

An engineer needs to read nested JSON files without supplying an explicit schema. Which PySpark approach lets the JSON reader infer that schema automatically?

- **A.** .option("schema", "auto")
- ✅ **B.** Call spark.read.json(path) without an explicit schema; the JSON reader infers the schema automatically.
- **C.** .option("parse", "nested")
- **D.** Schema inference is not supported for JSON

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Call spark.read.json(path) without an explicit schema; the JSON reader infers the schema automatically.

JSON reader của Spark suy luận trường và cấu trúc lồng nhau khi không có schema rõ ràng. multiLine chỉ điều khiển bản ghi JSON trải nhiều dòng; nó không phải nút bật suy luận schema.

#### Vì sao các phương án khác không phù hợp?

- **.option("schema", "auto")**: schema="auto" không phải API schema tường minh được tài liệu quy định.
- **.option("parse", "nested")**: parse="nested" không phải tùy chọn JSON reader trong tài liệu.
- **Schema inference is not supported for JSON**: Spark JSON có hỗ trợ suy luận schema tự động.

**Tham khảo:**

- [JSON files — Apache Spark](https://spark.apache.org/docs/latest/sql-data-sources-json.html)

</details>


---

## Q138 · single choice · — not answered

A compliance team asks whether SELECT * FROM finance.transactions VERSION AS OF 5 can read a table with active table-level row filters and column masks, configured directly on the table rather than by ABAC policies. What is the expected outcome?

- **A.** The query succeeds and returns the version-5 data exactly as it looked before any row filter or column mask was ever attached to it
- **B.** The query succeeds only for members of the account's top-level admin group, regardless of what the row filter or mask logic actually specifies
- ✅ **C.** Time travel is unsupported on tables with table-level row filters or column masks attached, so this VERSION AS OF query is expected to fail.
- **D.** The query succeeds, but Unity Catalog silently ignores the `VERSION AS OF` clause and returns the table's current state instead of it

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** Time travel is unsupported on tables with table-level row filters or column masks attached, so this VERSION AS OF query is expected to fail.

Time travel trên bảng gắn trực tiếp row filter hoặc column mask cấp bảng không được hỗ trợ và thất bại. Điều này không mô tả tính năng time travel ABAC có các điều kiện riêng.

#### Vì sao các phương án khác không phù hợp?

- **The query succeeds and returns the version-5 data exactly as it looked before any row filter or column mask was ever attached to it**: Time travel không phải cơ chế bỏ qua bảo vệ đang hoạt động.
- **The query succeeds, but Unity Catalog silently ignores the `VERSION AS OF` clause and returns the table's current state instead of it**: Yêu cầu VERSION AS OF không được hỗ trợ sẽ bị từ chối, không âm thầm đổi sang dữ liệu hiện tại.
- **The query succeeds only for members of the account's top-level admin group, regardless of what the row filter or mask logic actually specifies**: Chỉ là thành viên admin không đồng nghĩa được miễn mọi chính sách.

**Tham khảo:**

- [ABAC policy requirements and limitations](https://docs.databricks.com/aws/en/data-governance/unity-catalog/abac/requirements)
- [Time travel with ABAC policies — Beta requirements and current-policy enforcement](https://docs.databricks.com/gcp/en/data-governance/unity-catalog/abac/time-travel)

</details>


---

## Q139 · single choice · — not answered

In which of the following file formats is data from Delta Lake tables primarily stored?

- **A.** CSV
- **B.** A proprietary, optimized format specific to Databricks
- **C.** JSON
- ✅ **D.** Parquet
- **E.** Delta

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Parquet

Delta Lake lưu dữ liệu bảng chủ yếu trong tệp Parquet và bổ sung transaction log để điều phối phiên bản, giao dịch.

#### Vì sao các phương án khác không phù hợp?

- **Delta**: Delta là định dạng bảng/lớp lưu trữ, không phải encoding chính của tệp dữ liệu.
- **CSV**: CSV không có encoding dạng cột được dùng cho tệp dữ liệu Delta.
- **JSON**: JSON dùng cho bản ghi log, không phải tệp dữ liệu chính của bảng.
- **A proprietary, optimized format specific to Databricks**: Parquet và Delta là định dạng mở, không phải encoding độc quyền chỉ của Databricks.

**Tham khảo:**

- [What is Delta Lake in Databricks?](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q140 · single choice · — not answered

A security team wants to ensure that an external location is only usable from the production workspace and not from development workspaces. Which Unity Catalog feature accomplishes this?

- **A.** Setting a column mask on the location
- **B.** Enabling Photon on the location
- **C.** Adding a row filter to the location
- ✅ **D.** Binding the external location to specific workspaces (workspace bindings)

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Binding the external location to specific workspaces (workspace bindings)

Workspace binding giới hạn external location vào các workspace chỉ định, bổ sung ranh giới workspace bên cạnh quyền thông thường.

#### Vì sao các phương án khác không phù hợp?

- **Setting a column mask on the location**: Column mask biến đổi giá trị cột bảng, không giới hạn workspace truy cập location.
- **Enabling Photon on the location**: Photon tăng tốc thực thi, không ràng buộc truy cập storage theo workspace.
- **Adding a row filter to the location**: Row filter giới hạn hàng của bảng, không giới hạn workspace dùng external location.

**Tham khảo:**

- [Manage external locations — workspace bindings](https://docs.databricks.com/aws/en/connect/unity-catalog/cloud-storage/manage-external-locations)

</details>


---

## Q141 · single choice · — not answered

What is the purpose of the spark.read.format("delta").option("versionAsOf", 5).load() syntax?

- ✅ **A.** To read the table at version 5 (time travel)
- **B.** To create a new table with version 5
- **C.** To upgrade the table to version 5
- **D.** To delete version 5 of the table

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To read the table at version 5 (time travel)

versionAsOf=5 chọn snapshot Delta phiên bản 5; cần còn đủ log và tệp dữ liệu tương ứng để đọc.

#### Vì sao các phương án khác không phù hợp?

- **To upgrade the table to version 5**: Tùy chọn đọc không nâng cấp protocol hay phiên bản bảng.
- **To delete version 5 of the table**: Đọc snapshot không xóa lịch sử.
- **To create a new table with version 5**: Đọc phiên bản cũ không tạo bảng riêng.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

</details>


---

## Q142 · single choice · — not answered

An engineer runs `GRANT USE CATALOG, USE SCHEMA, SELECT ON CATALOG analytics TO bi_team` before any schemas exist in the catalog. Months later, several new schemas and tables are created inside `analytics`. Does `bi_team` need any additional grants to query the new tables?

- **A.** No, but only because Unity Catalog automatically re-runs every catalog-level grant statement nightly against newly created schemas and tables.
- **B.** Yes, the group needs a fresh grant on each new schema, because catalog-level grants only apply to objects that already existed when the statement ran.
- ✅ **C.** No, because privileges granted on a catalog also apply to schemas and tables created in it later, not only to objects that existed at grant time.
- **D.** Yes, but only `USE SCHEMA` needs to be re-granted on each new schema, since `SELECT` inherited from the catalog covers tables while `USE` privileges never inherit downward.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** No, because privileges granted on a catalog also apply to schemas and tables created in it later, not only to objects that existed at grant time.

Trong privilege model 1.0 của Unity Catalog, quyền thích hợp ở catalog được kế thừa bởi đối tượng con hiện tại và tương lai. USE và SELECT do đó áp dụng cho schema và bảng mới.

#### Vì sao các phương án khác không phù hợp?

- **Yes, the group needs a fresh grant on each new schema, because catalog-level grants only apply to objects that already existed when the statement ran.**: Kế thừa không bị giới hạn vào các đối tượng tồn tại lúc cấp quyền.
- **Yes, but only `USE SCHEMA` needs to be re-granted on each new schema, since `SELECT` inherited from the catalog covers tables while `USE` privileges never inherit downward.**: USE SCHEMA có thể cấp trên catalog và được schema bên dưới kế thừa.
- **No, but only because Unity Catalog automatically re-runs every catalog-level grant statement nightly against newly created schemas and tables.**: Kế thừa được mô hình quyền thực thi, không nhờ chạy lại SQL mỗi đêm.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q143 · single choice · — not answered

A data engineer has three tables in a Delta Live Tables (DLT) pipeline. They have configured the pipeline to drop invalid records at each table. They notice that some data is being dropped due to quality concerns at some point in the DLT pipeline. They would like to determine at which table in their pipeline the data is being dropped. Which of the following approaches can the data engineer take to identify the table that is dropping the records?

- **A.** They can set up DLT to notify them via email when records are dropped.
- ✅ **B.** They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics.
- **C.** They cannot determine which table is dropping the records.
- **D.** They can navigate to the DLT pipeline page, click on the “Error” button, and review the present errors.
- **E.** They can set up separate expectations for each table when developing their DLT pipeline.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics.

Thống kê chất lượng từng dataset hiển thị số hàng qua/vi phạm/bị bỏ theo expectation, nên xem từng bảng xác định được nơi loại hàng không hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **They can set up separate expectations for each table when developing their DLT pipeline.**: Định nghĩa expectation từng bảng tạo điều kiện có metric nhưng tự nó chưa kiểm tra bảng nào đang bỏ hàng.
- **They cannot determine which table is dropping the records.**: Metric chất lượng dataset và event log cho phép quan sát nguồn gây bỏ hàng.
- **They can set up DLT to notify them via email when records are dropped.**: Có thể thiết kế thông báo riêng, nhưng không cần cấu hình email chung để xem metric bỏ hàng hiện có.
- **They can navigate to the DLT pipeline page, click on the “Error” button, and review the present errors.**: Bỏ hàng không hợp lệ là hành động chất lượng được cấu hình, không nhất thiết là lỗi pipeline trong bảng lỗi.

**Tham khảo:**

- [Pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q144 · single choice · — not answered

A data engineer is processing ingested streaming tables and needs to filter out NULL values in the order_datetime column from the raw streaming table orders_raw and store the results in a new table orders_valid using DLT. Which code snippet should the data engineer use?

- ✅ **A.** CREATE OR REPLACE STREAMING TABLE orders_validCONSTRAINT valid_dateORDER_DATETIME IS NOT NULLON VIOLATION DROP ROWAS SELECT * FROM orders_raw
- **B.** SELECT *CREATE OR REPLACE STREAMING TABLE orders_validSELECT *FROM orders_rawWHERE order_datetime IS NOT NULL
- **C.** SELECTCREATE OR REPLACE STREAMING TABLE orders_validCONSTRAINT valid_date EXPECT (order_datetime IS NOT NULL)ON VIOLATION DROP ROWAS SELECT * FROM orders_raw
- **D.** CREATE OR REPLACE STREAMING TABLE orders_validFILTER (order_datetime IS NOT NULL)AS SELECT * FROM orders_raw

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE OR REPLACE STREAMING TABLE orders_validCONSTRAINT valid_dateORDER_DATETIME IS NOT NULLON VIOLATION DROP ROWAS SELECT * FROM orders_raw

Đoạn mã theo khóa định dùng expectation với ON VIOLATION DROP ROW cho order_datetime khác NULL. Nhưng bản in thiếu EXPECT và cú pháp ràng buộc hợp lệ nên không thể coi là SQL chạy được.

#### Vì sao các phương án khác không phù hợp?

- **SELECT *CREATE OR REPLACE STREAMING TABLE orders_validSELECT *FROM orders_rawWHERE order_datetime IS NOT NULL**: SELECT đầu và thiếu AS khiến chuỗi CREATE/SELECT hiển thị không hợp lệ.
- **SELECTCREATE OR REPLACE STREAMING TABLE orders_validCONSTRAINT valid_date EXPECT (order_datetime IS NOT NULL)ON VIOLATION DROP ROWAS SELECT * FROM orders_raw**: Nó chứa SELECT thừa ở đầu và không tạo câu lệnh CREATE hợp lệ.
- **CREATE OR REPLACE STREAMING TABLE orders_validFILTER (order_datetime IS NOT NULL)AS SELECT * FROM orders_raw**: FILTER không thay thế expectation hay WHERE ở mức bảng trong trường hợp này.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q145 · single choice · — not answered

Which identity provider does Azure Databricks integrate with to manage users and groups that are then synchronized to the account for Unity Catalog grants?

- **A.** Active Directory Federation Services only
- **B.** Azure Key Vault
- **C.** Local workspace accounts only
- ✅ **D.** Microsoft Entra ID

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Microsoft Entra ID

Azure Databricks tích hợp Microsoft Entra ID; đồng bộ danh tính cấp account đưa người dùng và nhóm vào để cấp quyền Unity Catalog.

#### Vì sao các phương án khác không phù hợp?

- **Active Directory Federation Services only**: Chỉ ADFS quá hạn chế và không phải giải pháp provisioning account Entra gốc.
- **Local workspace accounts only**: Nhóm cục bộ workspace không quản lý danh tính Unity Catalog toàn account.
- **Azure Key Vault**: Key Vault lưu bí mật, không quản lý danh tính người dùng/nhóm.

**Tham khảo:**

- [Sync users and groups from Microsoft Entra ID using SCIM](https://learn.microsoft.com/en-us/azure/databricks/admin/users-groups/scim/)

</details>


---

## Q146 · single choice · — not answered

Which function converts a timestamp to a date string in a specific format?

- **A.** to_timestamp()
- ✅ **B.** date_format()
- **C.** from_unixtime()
- **D.** current_date()

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** date_format()

date_format(timestamp, pattern) trả chuỗi theo mẫu ngày giờ yêu cầu.

#### Vì sao các phương án khác không phù hợp?

- **to_timestamp()**: to_timestamp phân tích/chuyển sang timestamp, không trả chuỗi định dạng.
- **from_unixtime()**: from_unixtime nhận số giây epoch, không phải hàm định dạng trực tiếp timestamp được hỏi.
- **current_date()**: current_date trả ngày hiện tại thay vì định dạng timestamp đầu vào.

**Tham khảo:**

- [date_format function](https://docs.databricks.com/aws/en/sql/language-manual/functions/date_format)

</details>


---

## Q147 · single choice · — not answered

Which ingestion mechanism incrementally and efficiently processes only new files as they arrive in cloud storage, tracking which files have already been ingested?

- **A.** A one-time COPY INTO with no state
- **B.** A full table scan on every run
- ✅ **C.** Auto Loader using the cloudFiles source
- **D.** spark.read.format('parquet') in batch mode

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Auto Loader using the cloudFiles source

Auto Loader cung cấp cloudFiles và theo dõi tệp đã phát hiện bằng trạng thái streaming, giúp nạp tăng dần thay vì quét toàn bộ lặp lại.

#### Vì sao các phương án khác không phù hợp?

- **A full table scan on every run**: Quét toàn bộ lặp lại đọc lại dữ liệu cũ thay vì theo dõi tệp mới.
- **A one-time COPY INTO with no state**: COPY INTO thực tế có tính idempotent, nhưng mô tả chạy một lần không trạng thái không phải cơ chế theo dõi liên tục của Auto Loader.
- **spark.read.format('parquet') in batch mode**: Reader Parquet batch tự nó không duy trì checkpoint tệp đã xử lý.

**Tham khảo:**

- [What is Auto Loader?](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)

</details>


---

## Q148 · single choice · — not answered

What is the result of a CROSS JOIN between two tables with 100 and 50 rows respectively?

- ✅ **A.** 5,000 rows (Cartesian product of all combinations)
- **B.** 100 rows
- **C.** 150 rows
- **D.** 50 rows

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** 5,000 rows (Cartesian product of all combinations)

Cross join tạo mọi cặp: 100 nhân 50 bằng 5.000 hàng.

#### Vì sao các phương án khác không phù hợp?

- **50 rows**: 50 là số hàng một đầu vào, không phải số cặp.
- **100 rows**: 100 là số hàng đầu vào còn lại, không phải tích Descartes.
- **150 rows**: 150 cộng số hàng như union; cross join nhân chúng.

**Tham khảo:**

- [JOIN](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-join)

</details>


---

## Q149 · single choice · — not answered

When configuring Auto Loader, which option specifies the location where the inferred schema and schema-evolution metadata are stored?

- **A.** checkpointLocation
- ✅ **B.** cloudFiles.schemaLocation
- **C.** cloudFiles.maxBytesPerTrigger
- **D.** cloudFiles.format

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** cloudFiles.schemaLocation

cloudFiles.schemaLocation lưu schema suy luận và lịch sử tiến hóa của chúng; vị trí này khác checkpoint tiến độ streaming.

#### Vì sao các phương án khác không phù hợp?

- **cloudFiles.format**: cloudFiles.format chỉ định định dạng tệp đầu vào.
- **checkpointLocation**: checkpointLocation theo dõi tiến độ và trạng thái xử lý, không phải thiết lập vị trí schema.
- **cloudFiles.maxBytesPerTrigger**: cloudFiles.maxBytesPerTrigger giới hạn dung lượng nạp mỗi trigger.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q150 · single choice · — not answered

In Delta Lake, what does DELETE FROM table_name WHERE condition do?

- **A.** Creates a backup before deleting
- ✅ **B.** Marks rows as deleted in the transaction log; files are logically removed but physically remain until VACUUM
- **C.** Only works on partitioned tables
- **D.** Immediately removes data files from storage

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Marks rows as deleted in the transaction log; files are logically removed but physically remain until VACUUM

DELETE commit thay đổi logic của bảng; tệp dữ liệu lỗi thời còn tồn tại đến khi VACUUM xóa theo retention. Delta có thể ghi lại tệp hoặc dùng deletion vector, không xóa vật lý tức thì.

#### Vì sao các phương án khác không phù hợp?

- **Immediately removes data files from storage**: Xóa vật lý tách khỏi xóa logic và chịu retention của VACUUM.
- **Creates a backup before deleting**: DELETE không tự tạo bản sao lưu độc lập.
- **Only works on partitioned tables**: DELETE cũng hoạt động với bảng Delta không phân vùng.

**Tham khảo:**

- [Remove unused data files with VACUUM](https://docs.databricks.com/aws/en/delta/vacuum)

</details>


---

## Q151 · single choice · — not answered

A one-time bulk load of CSV files from ADLS into a Delta table needs idempotent, re-runnable ingestion that skips already-loaded files. Which SQL command is designed for this?

- ✅ **A.** COPY INTO
- **B.** REFRESH TABLE
- **C.** CREATE TEMP VIEW
- **D.** INSERT OVERWRITE

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** COPY INTO

COPY INTO ghi nhận tệp đã nạp để lần chạy lại thường bỏ qua chúng, tạo nạp tệp idempotent vào Delta.

#### Vì sao các phương án khác không phù hợp?

- **INSERT OVERWRITE**: INSERT OVERWRITE thay dữ liệu đích thay vì theo dõi tệp đã nạp.
- **CREATE TEMP VIEW**: Temporary view tạo giao diện truy vấn, không ghi lịch sử nạp bền vững.
- **REFRESH TABLE**: REFRESH TABLE làm mới metadata cache, không nạp hàng loạt có theo dõi tệp.

**Tham khảo:**

- [COPY INTO for incremental file ingestion](https://docs.databricks.com/aws/en/ingestion/copy-into/)

</details>


---

## Q152 · single choice · — not answered

What is the purpose of the COLLECT_LIST() function in Spark SQL?

- ✅ **A.** To return a list of non-unique values from a group (aggregate function)
- **B.** To count the number of rows
- **C.** To sort a list of values
- **D.** To find the maximum value

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To return a list of non-unique values from a group (aggregate function)

collect_list tổng hợp giá trị của nhóm thành mảng và giữ giá trị trùng; không nên giả định thứ tự đầu ra ổn định sau shuffle.

#### Vì sao các phương án khác không phù hợp?

- **To sort a list of values**: Muốn sắp xếp cần thao tác như sort_array ngoài việc gom giá trị.
- **To count the number of rows**: COUNT trả số lượng, không trả mảng giá trị nhóm.
- **To find the maximum value**: MAX chọn một giá trị lớn nhất thay vì gom mọi giá trị.

**Tham khảo:**

- [collect_list aggregate function](https://docs.databricks.com/aws/en/sql/language-manual/functions/collect_list)

</details>


---

## Q153 · single choice · — not answered

Which SQL pattern creates a new managed Delta table populated from the result of a query in a single statement?

- ✅ **A.** CREATE TABLE ... AS SELECT (CTAS)
- **B.** OPTIMIZE ... ZORDER BY
- **C.** DESCRIBE HISTORY
- **D.** ALTER TABLE ... ADD COLUMNS

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE TABLE ... AS SELECT (CTAS)

CTAS chạy SELECT để điền dữ liệu vào bảng mới; bỏ LOCATION tạo bảng managed, và Delta thường là định dạng mặc định trong Databricks.

#### Vì sao các phương án khác không phù hợp?

- **ALTER TABLE ... ADD COLUMNS**: ADD COLUMNS sửa schema có sẵn, không tạo và điền bảng mới.
- **DESCRIBE HISTORY**: DESCRIBE HISTORY đọc lịch sử giao dịch.
- **OPTIMIZE ... ZORDER BY**: OPTIMIZE tổ chức lại tệp của bảng có sẵn.

**Tham khảo:**

- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q154 · single choice · — not answered

Which SQL statement creates a permanent, non-materialized view whose query definition persists across sessions but whose result data is not stored?

- ✅ **A.** CREATE VIEW (permanent, non-materialized view)
- **B.** CREATE MATERIALIZED VIEW
- **C.** CREATE TABLE
- **D.** CREATE TEMP VIEW

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** CREATE VIEW (permanent, non-materialized view)

CREATE VIEW giữ định nghĩa truy vấn logic qua các session và tính kết quả khi truy vấn thay vì lưu kết quả vật hóa.

#### Vì sao các phương án khác không phù hợp?

- **CREATE TEMP VIEW**: CREATE TEMP VIEW có phạm vi session, nên định nghĩa không đáp ứng vòng đời permanent.
- **CREATE TABLE**: CREATE TABLE lưu dữ liệu bảng thay vì chỉ định nghĩa view logic.
- **CREATE MATERIALIZED VIEW**: CREATE MATERIALIZED VIEW lưu kết quả tính sẵn, trái yêu cầu không vật hóa.

**Tham khảo:**

- [CREATE VIEW](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-view)

</details>


---

## Q155 · single choice · — not answered

Which Delta Lake operation upserts data, inserting new rows and updating existing rows that match on a key in a single atomic statement?

- **A.** TRUNCATE TABLE
- **B.** UNION ALL
- ✅ **C.** MERGE INTO
- **D.** INSERT INTO

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** MERGE INTO

MERGE ghép nguồn và đích theo khóa, rồi cập nhật hàng khớp và thêm hàng không khớp trong một giao dịch.

#### Vì sao các phương án khác không phù hợp?

- **INSERT INTO**: INSERT thêm hàng mà không cập nhật có điều kiện những hàng đã khớp.
- **UNION ALL**: UNION ALL ghép hàng truy vấn, không sửa hàng đích khớp.
- **TRUNCATE TABLE**: TRUNCATE xóa mọi hàng đích thay vì upsert.

**Tham khảo:**

- [Upsert into a Delta Lake table using MERGE](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q156 · single choice · — not answered

An engineer needs to implement SCD Type 2 to maintain historical changes. Which columns should be added to track record versions?

- **A.** No additional columns are needed
- ✅ **B.** Start date, end date (or NULL for current), and a current flag column
- **C.** Only a boolean flag
- **D.** Only a timestamp column

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Start date, end date (or NULL for current), and a current flag column

SCD Type 2 giữ nhiều phiên bản của thực thể nghiệp vụ. Mốc bắt đầu/kết thúc xác định khoảng hiệu lực; cờ current giúp chọn phiên bản hiện hành.

#### Vì sao các phương án khác không phù hợp?

- **Only a timestamp column**: Một timestamp riêng lẻ không biểu diễn rõ cả hai mốc hiệu lực hay trạng thái hiện hành.
- **Only a boolean flag**: Boolean xác định trạng thái hiện hành nhưng không xác lập khoảng hiệu lực lịch sử.
- **No additional columns are needed**: Giữ các phiên bản phân biệt được cần metadata theo dõi phiên bản.

**Tham khảo:**

- [The AUTO CDC APIs](https://docs.databricks.com/aws/en/ldp/cdc)

</details>


---

## Q157 · single choice · — not answered

A Structured Streaming job must ingest events continuously from Azure Event Hubs into a Delta table with exactly-once guarantees. Which configuration element is essential for fault tolerance and exactly-once writes?

- **A.** Setting VACUUM RETAIN 0 HOURS
- **B.** Disabling the transaction log
- **C.** Running the query in batch mode without state
- ✅ **D.** A checkpointLocation for the streaming query

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A checkpointLocation for the streaming query

Checkpoint bền vững ghi offset, commit và state để truy vấn khởi động lại tiếp tục nhất quán; kết hợp nguồn có thể phát lại và Delta sink được hỗ trợ sẽ tạo nền tảng exactly-once.

#### Vì sao các phương án khác không phù hợp?

- **Disabling the transaction log**: Transaction log của Delta là thành phần thiết yếu của sink giao dịch.
- **Running the query in batch mode without state**: Lần chạy batch không trạng thái không cung cấp khôi phục offset streaming.
- **Setting VACUUM RETAIN 0 HOURS**: VACUUM quá ngắn xóa tệp lịch sử và không thay thế khôi phục checkpoint.

**Tham khảo:**

- [Structured Streaming checkpoints](https://docs.databricks.com/aws/en/structured-streaming/checkpoints)

</details>


---

## Q158 · single choice · — not answered

What is the most efficient way to ingest data from a relational database into Delta Lake incrementally based on a timestamp column?

- **A.** Export to CSV and then read
- **B.** Read only the first 1000 rows each time
- ✅ **C.** Use a JDBC query with a WHERE clause filtering on the timestamp column, and track the last processed timestamp
- **D.** Read the entire table every time

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a JDBC query with a WHERE clause filtering on the timestamp column, and track the last processed timestamp

Điều kiện timestamp trong JDBC giới hạn trích xuất vào bản ghi sau mốc đã theo dõi, tránh quét toàn bộ. Chỉ tăng mốc sau ghi thành công và xử lý trùng mốc hoặc cập nhật đến muộn rõ ràng.

#### Vì sao các phương án khác không phù hợp?

- **Read the entire table every time**: Đọc toàn bảng tăng theo toàn bộ dữ liệu thay vì phần thay đổi.
- **Export to CSV and then read**: Xuất CSV chỉ thêm bước chuyển dữ liệu, không tự theo dõi tăng dần.
- **Read only the first 1000 rows each time**: Lấy 1.000 hàng đầu cố định có thể đọc lặp và bỏ sót thay đổi.

**Tham khảo:**

- [JDBC to other databases — Apache Spark](https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html)

</details>


---

## Q159 · single choice · — not answered

To enable reading historical changes (row-level inserts, updates, deletes) from a Delta table for downstream CDC processing, which feature should be enabled on the source table?

- ✅ **A.** Change Data Feed (delta.enableChangeDataFeed)
- **B.** Photon
- **C.** Auto-termination
- **D.** Z-ordering

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Change Data Feed (delta.enableChangeDataFeed)

Bật delta.enableChangeDataFeed ghi thay đổi cấp hàng từ thời điểm bật để consumer phía sau xử lý tăng dần.

#### Vì sao các phương án khác không phù hợp?

- **Photon**: Photon tăng tốc thực thi, không sinh bản ghi thay đổi.
- **Auto-termination**: Auto-termination kiểm soát chi phí compute rảnh.
- **Z-ordering**: Z-ordering đổi bố trí dữ liệu, không cung cấp sự kiện thay đổi.

**Tham khảo:**

- [Use Delta Lake change data feed](https://docs.databricks.com/aws/en/delta/delta-change-data-feed)

</details>


---

## Q160 · single choice · — not answered

In a MERGE INTO operation, what is the difference between WHEN MATCHED AND condition versus just WHEN MATCHED?

- **A.** There is no difference
- ✅ **B.** AND condition allows additional filtering on when to update matched rows
- **C.** AND condition only works with INSERT
- **D.** AND condition makes the operation faster

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** AND condition allows additional filtering on when to update matched rows

WHEN MATCHED AND condition yêu cầu vừa khớp điều kiện nối vừa thỏa điều kiện bổ sung trước khi cập nhật hoặc xóa.

#### Vì sao các phương án khác không phù hợp?

- **There is no difference**: Điều kiện bổ sung có thể loại hàng đã khớp khỏi thao tác.
- **AND condition makes the operation faster**: Lọc bổ sung đổi ngữ nghĩa, không bảo đảm luôn nhanh hơn.
- **AND condition only works with INSERT**: Mệnh đề matched điều khiển UPDATE hoặc DELETE; insert thường dùng NOT MATCHED.

**Tham khảo:**

- [Upsert into a Delta Lake table using MERGE](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q161 · single choice · — not answered

In a legacy Hive metastore workspace using SQL table access control, the data engineering group team needs the database privileges represented by ALL PRIVILEGES on customers. Which statement grants that privilege set to the correct group?

- **A.** GRANT USAGE ON DATABASE customers TO team;
- **B.** GRANT SELECT CREATE MODIFY USAGE PRIVILEGES ON DATABASE customers TO team;
- **C.** GRANT ALL PRIVILEGES ON DATABASE team TO customers;
- ✅ **D.** GRANT ALL PRIVILEGES ON DATABASE customers TO team;
- **E.** GRANT SELECT PRIVILEGES ON DATABASE customers TO teams;

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** GRANT ALL PRIVILEGES ON DATABASE customers TO team;

GRANT ALL PRIVILEGES ON DATABASE customers TO team nhắm đúng database customers và nhóm team theo đúng thứ tự. Đây là thuật ngữ quyền Hive metastore cũ, không phải khẳng định ownership Unity Catalog.

#### Vì sao các phương án khác không phù hợp?

- **GRANT USAGE ON DATABASE customers TO team;**: Chỉ USAGE cho phép dùng namespace, không đủ sửa dữ liệu và tạo đối tượng.
- **GRANT ALL PRIVILEGES ON DATABASE team TO customers;**: Tên database và đối tượng nhận quyền bị đảo.
- **GRANT SELECT PRIVILEGES ON DATABASE customers TO teams;**: SELECT thiên về đọc, đồng thời tên người nhận cũng khác.
- **GRANT SELECT CREATE MODIFY USAGE PRIVILEGES ON DATABASE customers TO team;**: Danh sách này không phải cấp ALL PRIVILEGES và cú pháp quyền SQL bị lỗi.

**Tham khảo:**

- [Legacy Hive metastore privileges](https://docs.databricks.com/aws/en/data-governance/table-acls/object-privileges)

</details>


---

## Q162 · single choice · — not answered

Which Delta Lake capability lets you query a table as it existed at a previous version or timestamp, for example SELECT * FROM sales VERSION AS OF 5?

- **A.** Liquid clustering
- **B.** Predictive optimization
- ✅ **C.** Time travel
- **D.** Schema enforcement

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Time travel

Time travel tái dựng snapshot bảng còn được giữ theo phiên bản hoặc thời gian; VERSION AS OF 5 chọn phiên bản đó mà không đổi bảng hiện tại.

#### Vì sao các phương án khác không phù hợp?

- **Liquid clustering**: Liquid clustering đổi bố trí để tăng tốc lọc.
- **Predictive optimization**: Predictive optimization tự động bảo trì, không chọn snapshot lịch sử.
- **Schema enforcement**: Schema enforcement kiểm tra dữ liệu ghi vào, không đọc lịch sử.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

</details>


---

## Q163 · single choice · — not answered

What happens when you run OPTIMIZE on a partitioned Delta table with ZORDER BY?

- **A.** It only optimizes the partition directories
- **B.** It converts the table to unpartitioned
- **C.** It removes the partitioning
- ✅ **D.** It compacts files within each partition AND applies Z-order clustering to improve query filtering on specified columns

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It compacts files within each partition AND applies Z-order clustering to improve query filtering on specified columns

OPTIMIZE gom tệp phù hợp và ZORDER BY đặt giá trị các cột đã chọn gần nhau trong partition hiện có, cải thiện bỏ qua dữ liệu khi lọc chọn lọc.

#### Vì sao các phương án khác không phù hợp?

- **It only optimizes the partition directories**: Thao tác tổ chức lại tệp dữ liệu và clustering, không chỉ thư mục partition.
- **It removes the partitioning**: OPTIMIZE không xóa đặc tả partition.
- **It converts the table to unpartitioned**: Bảng vẫn phân vùng sau compaction và Z-ordering.

**Tham khảo:**

- [Optimize data file layout](https://docs.databricks.com/aws/en/delta/optimize)

</details>


---

## Q164 · single choice · — not answered

Which statement correctly describes the intended refinement from Bronze tables to Silver tables in the medallion architecture?

- ✅ **A.** Silver tables contain cleaned and validated data derived from Bronze; their row count can decrease, stay the same, or increase depending on the transformations.
- **B.** Silver tables contain more data than Bronze tables.
- **C.** Silver tables contain aggregates while Bronze data is unaggregated.
- **D.** Silver tables contain a less refined, less clean view of data than Bronze data.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** Silver tables contain cleaned and validated data derived from Bronze; their row count can decrease, stay the same, or increase depending on the transformations.

Silver áp dụng làm sạch, xác thực, khử trùng và bổ sung cho dữ liệu Bronze. Các thao tác tăng khả năng sử dụng nhưng không buộc quan hệ số hàng cố định: lọc có thể giảm hàng, còn join có thể tăng hàng.

#### Vì sao các phương án khác không phù hợp?

- **Silver tables contain a less refined, less clean view of data than Bronze data.**: Silver được thiết kế sạch và tinh lọc hơn, không kém hơn Bronze.
- **Silver tables contain aggregates while Bronze data is unaggregated.**: Silver có thể giữ bản ghi chi tiết đã xác thực; tổng hợp không phải yêu cầu định nghĩa tầng này.
- **Silver tables contain more data than Bronze tables.**: Bổ sung có thể tăng số hàng, nhưng số hàng cao hơn không phải thuộc tính bắt buộc của Silver.

**Tham khảo:**

- [What is the medallion lakehouse architecture?](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q165 · single choice · — not answered

A large Delta table has accumulated many small files, hurting read performance. Which command compacts small files into larger, well-sized files?

- **A.** MSCK REPAIR TABLE
- **B.** ANALYZE TABLE
- ✅ **C.** OPTIMIZE
- **D.** VACUUM

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** OPTIMIZE

OPTIMIZE gom tệp Delta nhỏ thành tệp lớn hơn để giảm chi phí mở tệp và lập lịch khi đọc.

#### Vì sao các phương án khác không phù hợp?

- **VACUUM**: VACUUM xóa tệp lỗi thời, không gom tệp nhỏ đang hoạt động.
- **ANALYZE TABLE**: ANALYZE TABLE thu thập thống kê cho optimizer.
- **MSCK REPAIR TABLE**: MSCK REPAIR TABLE sửa metadata partition, không gom tệp Delta.

**Tham khảo:**

- [Optimize data file layout](https://docs.databricks.com/aws/en/delta/optimize)

</details>


---

## Q166 · single choice · — not answered

Which strategy should be used when joining a large table with a small table that fits in memory?

- **A.** Shuffle Hash Join
- **B.** Sort Merge Join
- **C.** Cartesian Join
- ✅ **D.** Broadcast Hash Join using broadcast() hint

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Broadcast Hash Join using broadcast() hint

Broadcast bảng nhỏ đưa nó tới executor để tránh shuffle bảng lớn khi join, với điều kiện phía nhỏ vừa bộ nhớ an toàn.

#### Vì sao các phương án khác không phù hợp?

- **Sort Merge Join**: Sort-merge join thường shuffle và sắp xếp hai phía, tăng việc không cần thiết khi một bảng rất nhỏ.
- **Shuffle Hash Join**: Shuffle hash join vẫn phân phối lại dữ liệu thay vì broadcast phía nhỏ.
- **Cartesian Join**: Cartesian join tạo mọi cặp, không thực hiện join theo khóa mong muốn.

**Tham khảo:**

- [Spark SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

</details>


---

## Q167 · single choice · — not answered

A data engineer is running code in a Databricks Repo that is cloned from a central Git repository. A colleague of the data engineer informs them that changes have been made and synced to the central Git repository. The data engineer now needs to sync their Databricks Repo to get the changes from the central Git repository. Which of the following Git operations does the data engineer need to run to accomplish this task?

- **A.** Clone
- ✅ **B.** Pull
- **C.** Merge
- **D.** Push
- **E.** Commit

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Pull

Pull lấy thay đổi từ remote và tích hợp vào nhánh đang checkout trong Git folder của Databricks.

#### Vì sao các phương án khác không phù hợp?

- **Merge**: Merge ghép lịch sử nhánh đã có, bản thân không lấy cập nhật remote.
- **Push**: Push gửi commit cục bộ lên remote, ngược hướng yêu cầu.
- **Commit**: Commit ghi thay đổi cục bộ, không tải công việc remote.
- **Clone**: Clone tạo checkout mới thay vì cập nhật checkout hiện có.

**Tham khảo:**

- [Git operations in Databricks Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos)

</details>


---

## Q168 · single choice · — not answered

Which statement about liquid clustering on Delta tables is correct?

- ✅ **A.** It replaces partitioning and ZORDER, supports up to four clustering keys, and lets you change keys without rewriting data
- **B.** It can be combined with both partitioning and ZORDER on the same table
- **C.** It requires re-creating the table to change clustering keys
- **D.** It only works with the machine learning runtime

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It replaces partitioning and ZORDER, supports up to four clustering keys, and lets you change keys without rewriting data

Liquid clustering thay thế partitioning và Z-ordering của bảng. Nó cho phép tối đa bốn khóa và đổi khóa không cần ghi lại toàn bộ ngay; OPTIMIZE tiếp theo bố trí dữ liệu theo khóa mới.

#### Vì sao các phương án khác không phù hợp?

- **It can be combined with both partitioning and ZORDER on the same table**: Liquid clustering không thể cùng tồn tại với partitioning hay ZORDER trên cùng bảng.
- **It requires re-creating the table to change clustering keys**: ALTER TABLE có thể đổi khóa clustering mà không tạo lại bảng.
- **It only works with the machine learning runtime**: Đây là tính năng bố trí Delta, không giới hạn ở machine learning runtime.

**Tham khảo:**

- [Use liquid clustering for tables](https://docs.databricks.com/aws/en/delta/clustering)

</details>


---

## Q169 · single choice · — not answered

What is the behavior of the LAG() window function in Spark SQL?

- **A.** It sorts the data in descending order
- **B.** It looks ahead to the next row
- **C.** It calculates the sum of all previous rows
- ✅ **D.** It accesses data from a previous row in the same result set without self-join

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It accesses data from a previous row in the same result set without self-join

LAG lấy giá trị từ hàng trước trong partition cửa sổ có thứ tự, tránh self-join để so sánh hàng trước.

#### Vì sao các phương án khác không phù hợp?

- **It looks ahead to the next row**: LEAD mới truy cập hàng phía sau, không phải LAG.
- **It calculates the sum of all previous rows**: SUM lũy kế là tính tổng cửa sổ, không phải LAG.
- **It sorts the data in descending order**: LAG dùng thứ tự cửa sổ nhưng không tự sắp xếp kết quả cuối giảm dần.

**Tham khảo:**

- [lag analytic window function](https://docs.databricks.com/aws/en/sql/language-manual/functions/lag)

</details>


---

## Q170 · single choice · — not answered

By default, how far back does VACUUM retain Delta data files, and what is the consequence of running it?

- **A.** 30 days; it has no effect on time travel
- **B.** 1 hour; it improves time travel
- **C.** Forever; it never deletes files
- ✅ **D.** 7 days; it removes old file versions and you lose time travel to deleted versions

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** 7 days; it removes old file versions and you lose time travel to deleted versions

Ngưỡng retention tệp đã loại mặc định là bảy ngày. VACUUM xóa vật lý tệp không còn tham chiếu đủ cũ, nên snapshot lịch sử cần chúng không đọc được nữa.

#### Vì sao các phương án khác không phù hợp?

- **1 hour; it improves time travel**: Một giờ không phải mặc định; xóa tệp lịch sử không cải thiện khả năng time travel.
- **30 days; it has no effect on time travel**: Ba mươi ngày liên quan retention log mặc định, không phải retention tệp dữ liệu đã loại.
- **Forever; it never deletes files**: VACUUM dùng để xóa tệp lỗi thời sau ngưỡng retention.

**Tham khảo:**

- [Remove unused data files with VACUUM](https://docs.databricks.com/aws/en/delta/vacuum)

</details>


---

## Q171 · single choice · — not answered

An engineer notices that queries on a Delta table are slower than expected. The table is partitioned by date and frequently filtered by customer_id. What optimization should be applied?

- **A.** Increase the cluster size only
- ✅ **B.** Run OPTIMIZE with ZORDER BY on customer_id to co-locate customer data within each partition
- **C.** Remove the date partitioning
- **D.** Convert to a Parquet table

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run OPTIMIZE with ZORDER BY on customer_id to co-locate customer data within each partition

Z-order customer_id trong partition date hiện có để đặt dữ liệu khách hàng gần nhau và tăng bỏ qua tệp khi lọc khách hàng; cách này giữ chiến lược partition hiện tại.

#### Vì sao các phương án khác không phù hợp?

- **Remove the date partitioning**: Bỏ partition date không tự tạo tính cục bộ theo khách hàng.
- **Convert to a Parquet table**: Chuyển khỏi Delta làm mất tính năng Delta và không sắp dữ liệu theo khách hàng.
- **Increase the cluster size only**: Thêm compute có thể che triệu chứng nhưng không sửa việc quét quá nhiều tệp do bố trí.

**Tham khảo:**

- [Optimize data file layout](https://docs.databricks.com/aws/en/delta/optimize)

</details>


---

## Q172 · single choice · — not answered

A pipeline must reject any incoming record whose write would change a column's data type or add unexpected columns, protecting the target Delta table's structure. Which Delta capability provides this default protection?

- **A.** Auto compaction
- **B.** Predictive optimization
- ✅ **C.** Schema enforcement (schema validation on write)
- **D.** Delta Sharing

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Schema enforcement (schema validation on write)

Schema enforcement của Delta kiểm tra dữ liệu ghi theo schema đích và từ chối thay đổi không tương thích trừ khi quy tắc tiến hóa schema hoặc ép kiểu rõ ràng cho phép.

#### Vì sao các phương án khác không phù hợp?

- **Auto compaction**: Auto compaction tổ chức lại tệp, không kiểm tra tương thích cột.
- **Predictive optimization**: Predictive optimization tự động bảo trì, không kiểm tra schema ghi.
- **Delta Sharing**: Delta Sharing chia sẻ truy cập dữ liệu, không kiểm tra schema khi ghi.

**Tham khảo:**

- [Schema enforcement](https://docs.databricks.com/aws/en/tables/schema-enforcement)

</details>


---

## Q173 · single choice · — not answered

What is the difference between a LEFT SEMI JOIN and a LEFT ANTI JOIN?

- **A.** LEFT SEMI JOIN is faster
- **B.** They are the same
- ✅ **C.** LEFT SEMI JOIN returns rows from the left table where there is a match in the right; LEFT ANTI JOIN returns rows where there is NO match
- **D.** LEFT ANTI JOIN returns all rows from both tables

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** LEFT SEMI JOIN returns rows from the left table where there is a match in the right; LEFT ANTI JOIN returns rows where there is NO match

Left semi join trả hàng trái có ít nhất một hàng khớp; left anti join trả hàng trái không khớp. Cả hai không thêm cột phía phải.

#### Vì sao các phương án khác không phù hợp?

- **They are the same**: Chúng thực hiện hai phép kiểm tra tồn tại đối lập.
- **LEFT SEMI JOIN is faster**: Thời gian chạy tùy dữ liệu và plan; tốc độ không phải khác biệt ngữ nghĩa.
- **LEFT ANTI JOIN returns all rows from both tables**: Full outer join mới giữ hàng không khớp của cả hai đầu vào, không phải left anti.

**Tham khảo:**

- [JOIN](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-join)

</details>


---

## Q174 · single choice · — not answered

Which of the following describes a scenario in which a data engineer will want to use a single-node cluster?

- ✅ **A.** When they are working interactively with a small amount of data
- **B.** When they are running automated reports to be refreshed as quickly as possible
- **C.** When they are concerned about the ability to automatically scale with larger data
- **D.** When they are working with SQL within Databricks SQL
- **E.** When they are manually running reports with a large amount of data

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** When they are working interactively with a small amount of data

Cluster một node chạy driver và Spark cục bộ trên một máy, phù hợp công việc tương tác nhỏ không cần executor phân tán.

#### Vì sao các phương án khác không phù hợp?

- **When they are running automated reports to be refreshed as quickly as possible**: Yêu cầu báo cáo chạy nhanh chưa chứng minh dữ liệu phù hợp một máy.
- **When they are working with SQL within Databricks SQL**: Databricks SQL thường dùng SQL warehouse thay vì chọn cluster một node.
- **When they are concerned about the ability to automatically scale with larger data**: Cluster một node không mở rộng thêm worker để đáp ứng tăng trưởng.
- **When they are manually running reports with a large amount of data**: Công việc thủ công lớn có thể vượt bộ nhớ và năng lực xử lý cục bộ.

**Tham khảo:**

- [Configure classic compute](https://docs.databricks.com/aws/en/compute/configure)

</details>


---

## Q175 · single choice · — not answered

An Auto Loader JSON stream has no explicit input schema. Its writer is configured for target schema evolution and its job can restart after an inferred-schema change. Which reader option adds newly discovered columns to the stored inferred schema before the stream restarts?

- **A.** cloudFiles.format set to json
- **B.** mergeSchema set to false
- **C.** cloudFiles.useNotifications set to false
- ✅ **D.** cloudFiles.schemaEvolutionMode set to addNewColumns

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** cloudFiles.schemaEvolutionMode set to addNewColumns

cloudFiles.schemaEvolutionMode=addNewColumns ghi cột mới phát hiện vào schema suy luận rồi dừng stream với UnknownFieldException. Sau khởi động lại reader dùng schema mới; tiến hóa schema writer là yêu cầu riêng.

#### Vì sao các phương án khác không phù hợp?

- **cloudFiles.format set to json**: cloudFiles.format chọn phân tích JSON, không điều khiển tiến hóa schema.
- **mergeSchema set to false**: mergeSchema=false tắt hợp nhất schema đích thay vì thêm cột.
- **cloudFiles.useNotifications set to false**: Thiết lập notification cho phát hiện tệp không điều khiển chế độ tiến hóa cột mới.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q176 · single choice · — not answered

Among the listed supported Auto Loader inputs, which structured file format embeds typed schema metadata, avoiding text-based type inference?

- **A.** CSV with inferSchema=true
- **B.** JSON with multiline=true
- **C.** Text files
- ✅ **D.** Parquet (typed schema is embedded in file metadata)

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** Parquet (typed schema is embedded in file metadata)

Parquet nhúng kiểu trường trong metadata tệp, cho Auto Loader đọc và hợp nhất schema có kiểu thay vì suy luận kiểu từ giá trị CSV hoặc JSON dạng văn bản.

#### Vì sao các phương án khác không phù hợp?

- **CSV with inferSchema=true**: CSV cần xem văn bản và suy luận kiểu, không có metadata có kiểu như Parquet.
- **JSON with multiline=true**: multiline điều khiển ranh giới bản ghi JSON, không nhúng metadata schema có kiểu.
- **Text files**: Tệp text có schema văn bản cố định, không có kiểu cột cấu trúc phong phú để suy luận.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q177 · single choice · — not answered

Before loading source data, an engineer wants to generate summary statistics and assess column distributions to find anomalies. What is this profiling step called and how is it commonly done in Databricks?

- **A.** Z-ordering
- ✅ **B.** Data profiling, for example using summary statistics or display() data profiles
- **C.** Workspace binding
- **D.** Vacuuming

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Data profiling, for example using summary statistics or display() data profiles

Data profiling xem phân phối, null và thống kê tóm tắt trước biến đổi để tìm bất thường. Data profile trong notebook Databricks hoặc phép tính thống kê cung cấp góc nhìn này.

#### Vì sao các phương án khác không phù hợp?

- **Z-ordering**: Z-ordering tối ưu bố trí tệp, không kiểm tra phân phối dữ liệu.
- **Vacuuming**: VACUUM xóa tệp lỗi thời, không phát hiện bất thường chất lượng dữ liệu.
- **Workspace binding**: Workspace binding giới hạn workspace truy cập đối tượng được quản trị.

**Tham khảo:**

- [Tutorial: EDA techniques using Databricks notebooks](https://docs.databricks.com/aws/en/notebooks/eda-tutorial)

</details>


---

## Q178 · single choice · — not answered

What is the purpose of the WITH clause (Common Table Expressions) in SQL?

- **A.** To grant permissions
- **B.** To optimize query performance automatically
- **C.** To create permanent tables
- ✅ **D.** To define temporary result sets that can be referenced within a single query, improving readability and enabling recursion

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To define temporary result sets that can be referenced within a single query, improving readability and enabling recursion

WITH đặt tên kết quả trung gian để dùng lại trong câu lệnh, cải thiện khả năng đọc. CTE đệ quy cần phiên bản hỗ trợ và cú pháp đệ quy rõ ràng.

#### Vì sao các phương án khác không phù hợp?

- **To create permanent tables**: CTE có phạm vi câu lệnh, không tạo bảng bền vững.
- **To optimize query performance automatically**: Dễ đọc và dùng lại biểu thức không bảo đảm tự động tăng hiệu năng.
- **To grant permissions**: WITH định nghĩa quan hệ truy vấn; GRANT quản lý quyền.

**Tham khảo:**

- [Common table expressions](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-cte)

</details>


---

## Q179 · single choice · — not answered

A DataFrame contains duplicate rows that must be removed before loading to the silver layer. Which PySpark method removes duplicate rows?

- **A.** df.cache()
- **B.** df.explode()
- **C.** df.repartition()
- ✅ **D.** df.dropDuplicates()

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df.dropDuplicates()

dropDuplicates loại hàng trùng trong DataFrame hoặc trùng trên tập con cột chỉ định trước khi ghi dữ liệu Silver đã làm sạch.

#### Vì sao các phương án khác không phù hợp?

- **df.explode()**: explode mở rộng array hoặc map thành hàng và có thể tăng số hàng.
- **df.cache()**: cache lưu dữ liệu đã tính để dùng lại, không loại trùng.
- **df.repartition()**: repartition đổi bố trí phân tán và vẫn giữ số lần lặp hàng.

**Tham khảo:**

- [DataFrame.dropDuplicates — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.dropDuplicates.html)

</details>


---

## Q180 · single choice · — not answered

Which Delta Lake feature allows you to enforce that a column cannot contain NULL values?

- **A.** CHECK constraint only
- ✅ **B.** NOT NULL constraint added via ALTER TABLE ALTER COLUMN
- **C.** PRIMARY KEY constraint
- **D.** UNIQUE constraint

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** NOT NULL constraint added via ALTER TABLE ALTER COLUMN

Ràng buộc NOT NULL được thực thi sẽ từ chối ghi null vào cột. Dữ liệu hiện có phải thỏa điều kiện trước khi thêm ràng buộc.

#### Vì sao các phương án khác không phù hợp?

- **PRIMARY KEY constraint**: Primary key trong Databricks mang tính thông tin, không thay kiểm tra NOT NULL được thực thi.
- **UNIQUE constraint**: Khai báo uniqueness mang tính thông tin không thực thi việc từ chối null.
- **CHECK constraint only**: CHECK có thể biểu diễn điều kiện khác, nhưng NOT NULL là ràng buộc trực tiếp được hỏi.

**Tham khảo:**

- [Constraints on Databricks](https://docs.databricks.com/aws/en/tables/constraints)

</details>


---

## Q181 · single choice · — not answered

Which set of operators would you use to combine two DataFrames by stacking rows, then keep only rows present in both, and finally remove rows present in a third?

- **A.** pivot, melt, explode
- **B.** groupBy, agg, having
- ✅ **C.** union, intersect, except
- **D.** join, filter, distinct

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** union, intersect, except

union xếp chồng hàng tương thích, intersect giữ hàng chung, và except loại hàng có trong quan hệ còn lại; đây là ngữ nghĩa phép toán tập hợp thay vì nối theo khóa.

#### Vì sao các phương án khác không phù hợp?

- **join, filter, distinct**: Join ghép cột theo điều kiện; filter và distinct không biểu diễn trực tiếp đủ ba phép tập hợp.
- **pivot, melt, explode**: Pivot, melt và explode đổi hình dạng dữ liệu, không thực hiện phép thành viên tập hợp.
- **groupBy, agg, having**: Nhóm và tổng hợp tính tóm tắt, không thực hiện hợp/giao/hiệu.

**Tham khảo:**

- [Set operators — Apache Spark](https://spark.apache.org/docs/latest/sql-ref-syntax-qry-select-setops.html)

</details>


---

## Q182 · single choice · — not answered

What is the purpose of the CONVERT TO DELTA command?

- **A.** To create a new Delta table
- **B.** To optimize a Delta table
- ✅ **C.** To convert an existing Parquet table to Delta Lake format in-place
- **D.** To delete a Delta table

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To convert an existing Parquet table to Delta Lake format in-place

CONVERT TO DELTA tạo transaction log Delta cho tệp Parquet hiện có ngay tại chỗ, tránh ghi lại toàn bộ chỉ để chuyển đổi.

#### Vì sao các phương án khác không phù hợp?

- **To create a new Delta table**: Mục tiêu đặc trưng là chuyển dữ liệu hiện có, không tạo bảng rỗng độc lập.
- **To optimize a Delta table**: Gom tệp và clustering thuộc OPTIMIZE.
- **To delete a Delta table**: Chuyển đổi giữ dữ liệu, không xóa bảng.

**Tham khảo:**

- [Convert to Delta Lake](https://docs.databricks.com/aws/en/delta/convert-to-delta)

</details>


---

## Q183 · single choice · — not answered

An analyst needs to reshape a tall table of (product, month, sales) into a wide table with one column per month. Which transformation accomplishes this?

- **A.** filter
- ✅ **B.** pivot
- **C.** union
- **D.** unpivot

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** pivot

pivot biến giá trị month thành cột đầu ra và tổng hợp sales cho từng tổ hợp product-month.

#### Vì sao các phương án khác không phù hợp?

- **unpivot**: unpivot làm chiều ngược lại từ rộng sang dài.
- **filter**: filter chọn hàng, không chuyển giá trị month thành cột.
- **union**: union xếp chồng hàng từ các quan hệ tương thích.

**Tham khảo:**

- [PIVOT clause](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-pivot)

</details>


---

## Q184 · single choice · — not answered

Which SQL command restores a Delta table to a previous version?

- **A.** UNDO TABLE
- **B.** REVERT TABLE
- **C.** ROLLBACK TABLE
- ✅ **D.** RESTORE TABLE TO VERSION AS OF

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** RESTORE TABLE TO VERSION AS OF

RESTORE TABLE ... TO VERSION AS OF khôi phục nội dung cũ còn được giữ bằng cách commit phiên bản hiện tại mới tham chiếu trạng thái lịch sử.

#### Vì sao các phương án khác không phù hợp?

- **ROLLBACK TABLE**: ROLLBACK TABLE không phải cú pháp restore Delta trong tài liệu.
- **UNDO TABLE**: UNDO TABLE không phải lệnh Delta khôi phục phiên bản.
- **REVERT TABLE**: REVERT TABLE không phải lệnh RESTORE TABLE được tài liệu quy định.

**Tham khảo:**

- [RESTORE — Databricks SQL command reference](https://docs.databricks.com/aws/en/sql/language-manual/delta-restore)

</details>


---

## Q185 · single choice · — not answered

To compute total revenue per region, which combination of DataFrame operations is appropriate?

- **A.** df.orderBy('region')
- **B.** df.dropDuplicates(['region'])
- ✅ **C.** df.groupBy('region').agg(sum('revenue'))
- **D.** df.select('region')

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df.groupBy('region').agg(sum('revenue'))

groupBy(region).agg(sum(revenue)) tạo một nhóm mỗi region và tính tổng revenue của nhóm.

#### Vì sao các phương án khác không phù hợp?

- **df.select('region')**: select(region) chọn cột mà không cộng revenue.
- **df.dropDuplicates(['region'])**: dropDuplicates giữ hàng region đại diện và không tính tổng cần thiết.
- **df.orderBy('region')**: orderBy sắp hàng, không tính tổng hợp theo vùng.

**Tham khảo:**

- [GroupedData.agg — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.GroupedData.agg.html)

</details>


---

## Q186 · single choice · — not answered

What does the df.repartition(100) operation do in PySpark?

- **A.** Limits the DataFrame to 100 rows
- **B.** Creates 100 copies of the DataFrame
- ✅ **C.** Redistributes the data into 100 partitions with full shuffle
- **D.** Sorts the DataFrame by 100 columns

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Redistributes the data into 100 partitions with full shuffle

repartition(100) phân phối lại hàng vào 100 partition đầu ra bằng shuffle, thay mức song song chứ không thay số bản ghi.

#### Vì sao các phương án khác không phù hợp?

- **Sorts the DataFrame by 100 columns**: Đối số số chỉ số partition, không phải cột sắp xếp.
- **Limits the DataFrame to 100 rows**: Giới hạn số hàng cần limit(100).
- **Creates 100 copies of the DataFrame**: Partition chia dataset, không tạo các bản sao đầy đủ.

**Tham khảo:**

- [DataFrame.repartition — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.repartition.html)

</details>


---

## Q187 · single choice · — not answered

A company uses Delta Sharing to collaborate with partners across different cloud providers and geographic regions. What will result in additional costs due to cross-region or egress fees?

- ✅ **A.** Transferring data via Delta Sharing across clouds and across different geographic regions
- **B.** Sharing data within the same cloud provider and region
- **C.** Utilizing Delta Sharing for internal data analytics within a single cloud environment
- **D.** Accessing Delta Sharing data using a VPN within the same data center

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Transferring data via Delta Sharing across clouds and across different geographic regions

Bên đọc Delta Sharing truy cập storage của bên cung cấp; truyền qua vùng hoặc cloud có thể phát sinh phí truyền dữ liệu/egress của nhà cung cấp storage.

#### Vì sao các phương án khác không phù hợp?

- **Sharing data within the same cloud provider and region**: Truy cập cùng cloud và vùng tránh tình huống qua ranh giới được hỏi, dù vẫn có thể có phí sử dụng khác.
- **Accessing Delta Sharing data using a VPN within the same data center**: VPN tự nó không chứng minh truyền qua vùng hoặc cloud.
- **Utilizing Delta Sharing for internal data analytics within a single cloud environment**: Dùng nội bộ trong một cloud không nhất thiết vượt ranh giới vùng tính phí.

**Tham khảo:**

- [What is Delta Sharing?](https://docs.databricks.com/aws/en/delta-sharing/)

</details>


---

## Q188 · single choice · — not answered

Which join type returns all rows from the left DataFrame and matching rows from the right, with nulls where there is no match?

- **A.** semi join
- ✅ **B.** left (left outer) join
- **C.** cross join
- **D.** inner join

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** left (left outer) join

Left outer join giữ mọi hàng trái và điền cột phải từ hàng khớp, dùng null khi không có giá trị phải khớp.

#### Vì sao các phương án khác không phù hợp?

- **inner join**: Inner join loại hàng trái không khớp.
- **cross join**: Cross join tạo mọi cặp hàng, không thêm null theo việc thiếu hàng khớp.
- **semi join**: Semi join chỉ trả hàng trái có khớp và không đưa cột phải vào kết quả.

**Tham khảo:**

- [JOIN](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-join)

</details>


---

## Q189 · single choice · — not answered

An engineer needs to update multiple columns in a Delta table based on a complex business rule that references other tables. Which approach is most appropriate?

- **A.** Use separate UPDATE statements for each column
- ✅ **B.** Use MERGE INTO with a subquery or join that sources from other tables in the USING clause
- **C.** Create a new table each time
- **D.** Delete and reinsert all data

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use MERGE INTO with a subquery or join that sources from other tables in the USING clause

MERGE có thể tạo nguồn bằng join hoặc subquery trong USING và cập nhật nguyên tử nhiều cột đích theo điều kiện nghiệp vụ.

#### Vì sao các phương án khác không phù hợp?

- **Use separate UPDATE statements for each column**: Các update riêng lặp công việc và tạo trạng thái trung gian giữa câu lệnh.
- **Delete and reinsert all data**: Xóa rồi nạp lại mọi hàng tăng dữ liệu ghi và rủi ro không cần thiết.
- **Create a new table each time**: Tạo lại bảng nhiều lần là không cần thiết cho cập nhật có điều kiện theo khóa.

**Tham khảo:**

- [Upsert into a Delta Lake table using MERGE](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q190 · single choice · — not answered

Which of the following is a benefit of the Databricks Lakehouse Platform embracing open source technologies?

- **A.** Ability to scale storage
- ✅ **B.** Avoiding vendor lock-in
- **C.** Simplified governance
- **D.** Cloud-specific integrations
- **E.** Ability to scale workloads

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Avoiding vendor lock-in

Engine nguồn mở và định dạng bảng/tệp mở giúp chuyển đổi dữ liệu và workload dễ hơn, giảm phụ thuộc một nhà cung cấp độc quyền.

#### Vì sao các phương án khác không phù hợp?

- **Cloud-specific integrations**: Tích hợp riêng một cloud không phải hệ quả của khả năng di chuyển nhờ nguồn mở.
- **Simplified governance**: Đơn giản hóa quản trị đến từ dịch vụ và thiết kế quản trị, không chỉ từ tính mở.
- **Ability to scale workloads**: Co giãn compute là khả năng kiến trúc cũng có trong hệ thống độc quyền.
- **Ability to scale storage**: Co giãn storage tùy kiến trúc lưu trữ, không chỉ giấy phép nguồn mở.

**Tham khảo:**

- [What is Delta Lake in Databricks?](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q191 · single choice · — not answered

A data engineer has a Python notebook in Databricks, but they need to use SQL to accomplish a specific task within a cell. They still want all of the other cells to use Python without making any changes to those cells. Which of the following describes how the data engineer can use SQL within a cell of their Python notebook?

- **A.** They can attach the cell to a SQL endpoint rather than a Databricks cluster
- **B.** It is not possible to use SQL in a Python notebook
- ✅ **C.** They can add %sql to the first line of the cell
- **D.** They can simply write SQL syntax in the cell
- **E.** They can change the default language of the notebook to SQL

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can add %sql to the first line of the cell

Language magic %sql ở dòng đầu chuyển riêng cell đó sang SQL trong khi cell khác tiếp tục dùng Python mặc định.

#### Vì sao các phương án khác không phù hợp?

- **It is not possible to use SQL in a Python notebook**: Notebook Databricks hỗ trợ nhiều ngôn ngữ theo cell.
- **They can attach the cell to a SQL endpoint rather than a Databricks cluster**: Đổi compute gắn vào không phải cách đổi bộ phân tích cell Python thành SQL.
- **They can simply write SQL syntax in the cell**: SQL thô không có language magic bị phân tích như Python trong cell Python.
- **They can change the default language of the notebook to SQL**: Đổi ngôn ngữ mặc định notebook tác động vượt cell duy nhất được yêu cầu.

**Tham khảo:**

- [Develop code in Databricks notebooks](https://docs.databricks.com/aws/en/notebooks/notebooks-code)

</details>


---

## Q192 · single choice · — not answered

Which compute option should be chosen in a scenario where small-scale ad-hoc Python scripts need to be run at high frequency and should wind down quickly after these queries have finished running?

- **A.** SQL Warehouse
- **B.** Job Cluster
- ✅ **C.** Serverless Compute
- **D.** All-purpose Cluster

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Serverless Compute

Serverless compute cấp tài nguyên theo nhu cầu và quản lý vòng đời, phù hợp tác vụ Python ngắn, thường xuyên được hỗ trợ mà ít phải quản lý cluster.

#### Vì sao các phương án khác không phù hợp?

- **All-purpose Cluster**: Cluster all-purpose có vòng đời tương tác và có thể thêm chi phí rảnh/khởi động.
- **Job Cluster**: Job cluster phù hợp tự động hóa theo lịch nhưng kém trực tiếp hơn cho tác vụ ad-hoc thường xuyên cần sẵn sàng nhanh.
- **SQL Warehouse**: SQL warehouse phục vụ SQL thay vì thực thi Python ad-hoc tùy ý.

**Tham khảo:**

- [Serverless compute](https://docs.databricks.com/aws/en/compute/serverless/)

</details>


---

## Q193 · single choice · — not answered

When choosing column data types for a Delta table holding currency amounts, which type best preserves exact precision for financial values?

- ✅ **A.** DECIMAL(10,2)
- **B.** DOUBLE
- **C.** FLOAT
- **D.** STRING

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** DECIMAL(10,2)

DECIMAL(10,2) dùng độ chính xác và scale cố định để số tiền trong phạm vi khai báo giữ phép tính chính xác hai chữ số thập phân.

#### Vì sao các phương án khác không phù hợp?

- **FLOAT**: FLOAT biểu diễn xấp xỉ nhiều phân số thập phân bằng nhị phân.
- **DOUBLE**: DOUBLE có độ chính xác nhị phân cao hơn nhưng vẫn không biểu diễn chính xác nhiều phần thập phân tiền tệ.
- **STRING**: STRING lưu văn bản, cần phân tích để tính toán và kiểm tra số.

**Tham khảo:**

- [DECIMAL type](https://docs.databricks.com/aws/en/sql/language-manual/data-types/decimal-type)

</details>


---

## Q194 · single choice · — not answered

For a current PySpark DataFrame, how does df.cache() compare with df.persist(StorageLevel.MEMORY_AND_DISK_DESER)?

- **A.** cache() is equivalent to persist(StorageLevel.MEMORY_ONLY)
- **B.** cache() stores data on disk only
- ✅ **C.** There is no difference
- **D.** persist() is deprecated

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** There is no difference

DataFrame.cache() dùng storage level mặc định MEMORY_AND_DISK_DESER, nên persist rõ cùng DataFrame ở mức đó có ngữ nghĩa cache tương đương.

#### Vì sao các phương án khác không phù hợp?

- **cache() is equivalent to persist(StorageLevel.MEMORY_ONLY)**: MEMORY_ONLY không phải mặc định cache của PySpark DataFrame hiện hành.
- **persist() is deprecated**: persist vẫn là phương thức được hỗ trợ để chọn storage level.
- **cache() stores data on disk only**: Mặc định gồm bộ nhớ và dự phòng đĩa, không chỉ lưu trên đĩa.

**Tham khảo:**

- [DataFrame.cache — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.cache.html)

</details>


---

## Q195 · single choice · — not answered

Which Spark architecture statement is accurate about how work is distributed?

- **A.** Executors plan the query and the driver stores the data
- ✅ **B.** The driver coordinates the application and schedules tasks that executors run in parallel across the cluster
- **C.** Spark cannot run tasks in parallel
- **D.** The driver runs all computation on a single machine

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The driver coordinates the application and schedules tasks that executors run in parallel across the cluster

Driver xây dựng và lập lịch công việc ứng dụng; executor chạy task và giữ dữ liệu trên các node, cho phép thực thi phân tán song song.

#### Vì sao các phương án khác không phù hợp?

- **The driver runs all computation on a single machine**: Driver điều phối, không phải máy duy nhất thực thi phép tính phân tán.
- **Executors plan the query and the driver stores the data**: Lập kế hoạch truy vấn chủ yếu thuộc driver, executor thực hiện công việc và lưu trữ phân tán.
- **Spark cannot run tasks in parallel**: Task song song là khả năng cốt lõi của Spark.

**Tham khảo:**

- [Apache Spark cluster overview](https://spark.apache.org/docs/latest/cluster-overview.html)

</details>


---

## Q196 · single choice · — not answered

When should you use df.coalesce(1) versus df.repartition(1)?

- **A.** coalesce only works with CSV files
- **B.** Always use repartition
- **C.** They are identical
- ✅ **D.** Use coalesce when reducing partitions to avoid full shuffle; use repartition when you need equal-sized partitions or increasing partitions

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use coalesce when reducing partitions to avoid full shuffle; use repartition when you need equal-sized partitions or increasing partitions

coalesce có thể giảm partition không cần full shuffle; repartition shuffle để phân phối lại hàng và có thể tăng hoặc giảm partition. Ép còn một partition có thể gây nghẽn với cả hai.

#### Vì sao các phương án khác không phù hợp?

- **They are identical**: Hành vi shuffle và phân phối lại của chúng khác nhau.
- **Always use repartition**: Luôn repartition gây shuffle không cần thiết khi coalesce hẹp đã đủ.
- **coalesce only works with CSV files**: coalesce hoạt động trên DataFrame không phụ thuộc định dạng tệp nguồn.

**Tham khảo:**

- [DataFrame.coalesce — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.coalesce.html)
- [DataFrame.repartition — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.repartition.html)

</details>


---

## Q197 · single choice · — not answered

Which of the following describes a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?

- ✅ **A.** Parquet files have a well-defined schema
- **B.** Parquet files can be partitioned
- **C.** Parquet files have the ability to be optimized
- **D.** CREATE TABLE AS SELECT statements cannot be used on files
- **E.** Parquet files will become Delta tables

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Parquet files have a well-defined schema

Parquet chứa metadata schema có kiểu để CTAS suy ra tin cậy, còn kiểu dữ liệu CSV thường cần schema rõ ràng hoặc suy luận từ văn bản.

#### Vì sao các phương án khác không phù hợp?

- **Parquet files can be partitioned**: CSV cũng có thể bố trí trong thư mục partition; partitioning không riêng Parquet.
- **CREATE TABLE AS SELECT statements cannot be used on files**: CTAS có thể SELECT từ nguồn dữ liệu dạng tệp.
- **Parquet files have the ability to be optimized**: Tối ưu hóa không phải lợi thế schema cụ thể phân biệt Parquet với CSV trong câu này.
- **Parquet files will become Delta tables**: Nguồn Parquet tự nó không tự chuyển mọi tệp nguồn thành Delta.

**Tham khảo:**

- [Parquet files — Apache Spark](https://spark.apache.org/docs/latest/sql-data-sources-parquet.html)

</details>


---

## Q198 · single choice · — not answered

A single Job runs two notebooks as two separate tasks. A data engineer has noticed that one of the notebooks is running slowly in the Job’s current run. The data engineer asks a tech lead for help in identifying why this might be the case. Which of the following approaches can the tech lead use to identify why the notebook is running slowly as part of the Job?

- **A.** They can navigate to the Runs tab in the Jobs UI to immediately review the processing notebook.
- **B.** They can navigate to the Tasks tab in the Jobs UI to immediately review the processing notebook.
- **C.** They can navigate to the Tasks tab in the Jobs UI and click on the active run to review the processing notebook.
- ✅ **D.** They can navigate to the Runs tab in the Jobs UI and click on the active run to review the processing notebook.
- **E.** There is no way to determine why a Job task is running slowly.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can navigate to the Runs tab in the Jobs UI and click on the active run to review the processing notebook.

Mở lần chạy đang hoạt động từ lịch sử run, rồi xem output notebook, thời gian và chi tiết thực thi của task chậm; cấu hình task riêng không có bằng chứng theo lần chạy.

#### Vì sao các phương án khác không phù hợp?

- **They can navigate to the Tasks tab in the Jobs UI and click on the active run to review the processing notebook.**: Tab cấu hình task không phải điểm chính để xem một lần chạy đang hoạt động cụ thể.
- **There is no way to determine why a Job task is running slowly.**: Chi tiết run và task cung cấp output và bằng chứng hiệu năng để chẩn đoán.
- **They can navigate to the Tasks tab in the Jobs UI to immediately review the processing notebook.**: Chỉ cấu hình task không mở ngay việc thực thi notebook của run hiện tại.
- **They can navigate to the Runs tab in the Jobs UI to immediately review the processing notebook.**: Danh sách run vẫn cần chọn đúng lần chạy và task đang hoạt động.

**Tham khảo:**

- [Monitor and observe Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/monitor)

</details>


---

## Q199 · single choice · — not answered

A column contains many null values that should be replaced with a default of 0 before aggregation. Which PySpark function fills nulls?

- **A.** df.na.drop()
- **B.** df.distinct()
- ✅ **C.** df.na.fill(0)
- **D.** df.limit(0)

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df.na.fill(0)

df.na.fill(0) thay null trong cột số tương thích bằng 0 trước tổng hợp; dùng subset hoặc mapping để chọn cột cụ thể.

#### Vì sao các phương án khác không phù hợp?

- **df.na.drop()**: na.drop xóa hàng có null thay vì thay giá trị.
- **df.distinct()**: distinct loại hàng trùng, không thay null.
- **df.limit(0)**: limit(0) trả không hàng nào, không điền dữ liệu thiếu.

**Tham khảo:**

- [DataFrame.fillna — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.fillna.html)

</details>


---

## Q200 · single choice · — not answered

How can an external scalar Python UDF used in Spark SQL affect the Catalyst optimizer?

- ✅ **A.** UDFs act as black boxes to Catalyst optimizer which can limit optimization opportunities
- **B.** UDFs are fully optimized by Catalyst like built-in functions
- **C.** UDFs cannot be used with Spark SQL
- **D.** UDFs are always faster than built-in functions

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** UDFs act as black boxes to Catalyst optimizer which can limit optimization opportunities

Scalar UDF Python bên ngoài nhìn chung là hộp đen đối với Catalyst, hạn chế tối ưu biểu thức so với built-in hoặc biểu thức ngôn ngữ SQL minh bạch. Nhận định này giới hạn ở triển khai Python.

#### Vì sao các phương án khác không phù hợp?

- **UDFs are fully optimized by Catalyst like built-in functions**: Không bảo đảm tối ưu đầy đủ như mọi hàm built-in đối với UDF dạng hộp đen.
- **UDFs are always faster than built-in functions**: UDF có thể thêm chi phí serialization và gọi hàm, không phải luôn nhanh hơn.
- **UDFs cannot be used with Spark SQL**: UDF đã đăng ký có thể được gọi từ Spark SQL.

**Tham khảo:**

- [Introducing SQL User-Defined Functions — Databricks](https://www.databricks.com/blog/2021/10/20/introducing-sql-user-defined-functions.html)

</details>


---

## Q201 · single choice · — not answered

In a Lakeflow Spark Declarative Pipeline, which object is a Unity Catalog managed table that serves as an incremental streaming target supporting append and AUTO CDC flows?

- **A.** A temporary view
- **B.** A materialized view
- **C.** A SQL warehouse
- ✅ **D.** A streaming table

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A streaming table

Streaming table là bảng Unity Catalog được pipeline quản lý, nhận dữ liệu từ append flow tăng dần hoặc AUTO CDC flow.

#### Vì sao các phương án khác không phù hợp?

- **A materialized view**: Materialized view duy trì kết quả truy vấn, không phải đích streaming append/AUTO CDC được mô tả.
- **A temporary view**: Temporary view lưu định nghĩa truy vấn, không phải đích tăng dần bền vững.
- **A SQL warehouse**: SQL warehouse là compute, không phải dataset đích managed.

**Tham khảo:**

- [Streaming tables](https://docs.databricks.com/aws/en/ldp/concepts/streaming-tables)
- [The AUTO CDC APIs](https://docs.databricks.com/aws/en/ldp/cdc)

</details>


---

## Q202 · single choice · — not answered

What is Structured Streaming in Apache Spark?

- **A.** A data visualization tool
- ✅ **B.** A stream processing engine built on Spark SQL that treats streams as unbounded tables
- **C.** A batch processing engine
- **D.** A machine learning library

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A stream processing engine built on Spark SQL that treats streams as unbounded tables

Structured Streaming biểu diễn dữ liệu đến như bảng không giới hạn đang tăng và duy trì kết quả truy vấn tăng dần bằng thực thi Spark SQL.

#### Vì sao các phương án khác không phù hợp?

- **A batch processing engine**: Nó dùng công nghệ thực thi batch Spark bên trong nhưng cung cấp ngữ nghĩa xử lý stream.
- **A data visualization tool**: Nó xử lý stream thay vì vẽ biểu đồ.
- **A machine learning library**: Đây không phải thư viện machine learning của Spark.

**Tham khảo:**

- [Structured Streaming programming guide](https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html)

</details>


---

## Q203 · single choice · — not answered

A data engineer has realized that they made a mistake when making a daily update to a table. They need to use Delta time travel to restore the table to a version that is 10 days old. However, when the data engineer attempts to time travel to the older version, they are unable to restore the data because the data files have been deleted. Which of the following explains why the data files are no longer present?

- **A.** The HISTORY command was run on the table
- **B.** The OPTIMIZE command was nun on the table
- **C.** The TIME TRAVEL command was run on the table
- ✅ **D.** The VACUUM command was run on the table
- **E.** The DELETE HISTORY command was run on the table

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** The VACUUM command was run on the table

VACUUM mặc định có thể xóa tệp dữ liệu lỗi thời quá ngưỡng giữ bảy ngày. Nếu snapshot mười ngày tuổi cần tệp đã xóa đó, time travel và restore snapshot không khôi phục được chúng.

#### Vì sao các phương án khác không phù hợp?

- **The TIME TRAVEL command was run on the table**: Time travel đọc tệp lịch sử, không xóa chúng.
- **The DELETE HISTORY command was run on the table**: DELETE HISTORY không phải lệnh cleanup Delta trong tài liệu.
- **The OPTIMIZE command was nun on the table**: OPTIMIZE ghi lại tệp hoạt động nhưng giữ tệp lỗi thời đến khi cleanup theo retention.
- **The HISTORY command was run on the table**: DESCRIBE HISTORY đọc metadata, không xóa tệp.

**Tham khảo:**

- [Remove unused data files with VACUUM](https://docs.databricks.com/aws/en/delta/vacuum)

</details>


---

## Q204 · single choice · — not answered

Which Lakeflow Declarative Pipelines dataset is a batch target that precomputes and incrementally refreshes the result of a query and is also a Unity Catalog managed table?

- **A.** A sink
- **B.** A streaming table
- **C.** An external location
- ✅ **D.** A materialized view

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A materialized view

Materialized view lưu kết quả truy vấn tính sẵn dưới dạng bảng managed và làm mới, tăng dần khi được hỗ trợ, cho biến đổi thiên về batch.

#### Vì sao các phương án khác không phù hợp?

- **A streaming table**: Streaming table là đích flow tăng dần, không phải kết quả truy vấn batch tính sẵn tổng quát được mô tả.
- **A sink**: Sink chỉ đích đầu ra, không riêng kết quả truy vấn managed được vật hóa.
- **An external location**: External location quản trị đường dẫn cloud và credential.

**Tham khảo:**

- [Materialized views](https://docs.databricks.com/aws/en/ldp/concepts/materialized-views)

</details>


---

## Q205 · single choice · — not answered

What is the purpose of checkpointing in Structured Streaming?

- **A.** To compress data
- **B.** To speed up queries
- ✅ **C.** To track progress and enable fault tolerance by saving state and offsets
- **D.** To encrypt data at rest

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To track progress and enable fault tolerance by saving state and offsets

Checkpoint lưu bền vững tiến độ nguồn, commit và state để stream lỗi có thể khôi phục nhất quán thay vì phát lại không kiểm soát.

#### Vì sao các phương án khác không phù hợp?

- **To speed up queries**: Mục tiêu là khôi phục; checkpoint thêm ghi và không tự tăng tốc mọi truy vấn.
- **To compress data**: Checkpoint không phải cơ chế nén.
- **To encrypt data at rest**: Mã hóa khi lưu là thiết lập bảo mật storage riêng.

**Tham khảo:**

- [Structured Streaming checkpoints](https://docs.databricks.com/aws/en/structured-streaming/checkpoints)

</details>


---

## Q206 · single choice · — not answered

In a Lakeflow Declarative Pipeline, you want to drop records that fail a data quality rule and log how many were dropped, without failing the whole pipeline. Which expectation should you use?

- **A.** @dlt.expect_or_fail
- **B.** @dlt.expect (warn)
- **C.** No expectation
- ✅ **D.** @dlt.expect_or_drop

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** @dlt.expect_or_drop

expect_or_drop loại bản ghi vi phạm điều kiện, vẫn cho bản ghi hợp lệ đi tiếp và ghi số lượng chất lượng. API mới có decorator tương ứng dp.expect_or_drop.

#### Vì sao các phương án khác không phù hợp?

- **@dlt.expect (warn)**: Expectation kiểu cảnh báo giữ bản ghi không hợp lệ.
- **@dlt.expect_or_fail**: expect_or_fail dừng flow khi vi phạm thay vì chỉ loại hàng lỗi.
- **No expectation**: Không có quy tắc thì không có loại hàng hoặc chỉ số drop theo expectation.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q207 · single choice · — not answered

What does Auto Loader in Databricks do?

- **A.** Manually loads files one at a time
- ✅ **B.** Incrementally and efficiently processes new files as they arrive in cloud storage
- **C.** Automatically creates machine learning models
- **D.** Automatically loads data from databases only

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Incrementally and efficiently processes new files as they arrive in cloud storage

Auto Loader phát hiện tệp cloud mới và nạp tăng dần bằng cloudFiles cùng trạng thái xử lý được theo dõi.

#### Vì sao các phương án khác không phù hợp?

- **Automatically loads data from databases only**: Nguồn của nó là tệp object storage cloud, không chỉ database quan hệ.
- **Automatically creates machine learning models**: Tạo mô hình không liên quan phát hiện tệp để nạp.
- **Manually loads files one at a time**: Nó tự động phát hiện tăng dần, không yêu cầu nạp thủ công từng tệp.

**Tham khảo:**

- [What is Auto Loader?](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)

</details>


---

## Q208 · single choice · — not answered

Which expectation action causes a Lakeflow Declarative Pipelines update to fail when an invalid record is detected, requiring manual intervention before reprocessing?

- **A.** expect_or_drop
- ✅ **B.** expect_or_fail (ON VIOLATION FAIL UPDATE)
- **C.** expect_all (warn)
- **D.** expect (warn)

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** expect_or_fail (ON VIOLATION FAIL UPDATE)

expect_or_fail tương ứng ON VIOLATION FAIL UPDATE: hàng vi phạm làm update của flow liên quan thất bại thay vì commit dữ liệu lỗi. Cần sửa quy tắc hoặc dữ liệu trước lần chạy lại thành công.

#### Vì sao các phương án khác không phù hợp?

- **expect (warn)**: Warn ghi nhận vi phạm nhưng giữ bản ghi và cho xử lý tiếp.
- **expect_or_drop**: Drop chỉ loại bản ghi lỗi và cho dữ liệu hợp lệ tiếp tục.
- **expect_all (warn)**: expect_all không có hành động fail áp dụng các expectation cảnh báo thay vì làm thất bại khi vi phạm.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q209 · single choice · — not answered

What is the Bronze-Silver-Gold architecture in the Lakehouse?

- **A.** A security model
- ✅ **B.** A medallion architecture with Bronze (raw), Silver (cleaned), and Gold (aggregated) data layers
- **C.** A clustering algorithm
- **D.** A hardware specification

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A medallion architecture with Bronze (raw), Silver (cleaned), and Gold (aggregated) data layers

Các lớp medallion tiến từ Bronze thô qua Silver làm sạch đến Gold tổng hợp phục vụ nghiệp vụ, nâng chất lượng và khả năng sử dụng từng bước.

#### Vì sao các phương án khác không phù hợp?

- **A hardware specification**: Các lớp tổ chức tinh luyện dữ liệu, không quy định phần cứng xử lý hay storage.
- **A security model**: Có thể áp dụng bảo mật cho các lớp nhưng đó không phải mục tiêu định nghĩa.
- **A clustering algorithm**: Các tên chỉ lớp pipeline, không phải thuật toán clustering.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q210 · single choice · — not answered

Which constraint type enforces that a column may never contain null values when writing to a Unity Catalog Delta table?

- **A.** A foreign key constraint
- **B.** A liquid clustering key
- **C.** A Z-order column
- ✅ **D.** A NOT NULL constraint

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A NOT NULL constraint

NOT NULL là ràng buộc cột được thực thi, từ chối ghi giá trị null.

#### Vì sao các phương án khác không phù hợp?

- **A foreign key constraint**: Foreign key mô tả quan hệ, không phải cấm null được thực thi như yêu cầu.
- **A liquid clustering key**: Khóa liquid clustering tối ưu bố trí, không từ chối null.
- **A Z-order column**: Cột Z-order điều khiển vị trí dữ liệu trong tệp, không kiểm tra null.

**Tham khảo:**

- [Constraints on Databricks](https://docs.databricks.com/aws/en/tables/constraints)

</details>


---

## Q211 · single choice · — not answered

Which output mode in Structured Streaming appends only new rows to the result sink?

- **A.** Update mode
- **B.** Complete mode
- **C.** Replace mode
- ✅ **D.** Append mode

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Append mode

Append mode chỉ phát hàng kết quả mới; với tổng hợp có state, hàng phải hoàn tất trước khi được append.

#### Vì sao các phương án khác không phù hợp?

- **Complete mode**: Complete mode phát toàn bộ bảng kết quả mỗi trigger.
- **Update mode**: Update mode phát hàng kết quả thay đổi, gồm cập nhật kết quả đã có.
- **Replace mode**: Replace không phải output mode chuẩn của Structured Streaming.

**Tham khảo:**

- [Structured Streaming programming guide](https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html)

</details>


---

## Q212 · single choice · — not answered

Which Databricks ingestion tool provides managed, low-code connectors that pull data from sources such as SaaS apps and databases directly into the lakehouse with native Unity Catalog governance?

- ✅ **A.** Lakeflow Connect
- **B.** Ganglia
- **C.** Spark UI
- **D.** Azure Storage Explorer

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Lakeflow Connect

Connector managed của Lakeflow Connect nạp nguồn database và SaaS được hỗ trợ theo cơ chế tăng dần với quản trị Unity Catalog.

#### Vì sao các phương án khác không phù hợp?

- **Azure Storage Explorer**: Storage Explorer duyệt và quản lý Azure storage, không cung cấp connector SaaS managed vào lakehouse.
- **Spark UI**: Spark UI chẩn đoán thực thi Spark, không thực hiện nạp qua connector.
- **Ganglia**: Ganglia là công cụ giám sát chỉ số, không phải dịch vụ nạp.

**Tham khảo:**

- [Lakeflow Connect connector concepts](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/)

</details>


---

## Q213 · single choice · — not answered

What is Change Data Capture (CDC)?

- **A.** A clustering algorithm
- **B.** A data compression method
- **C.** A data visualization technique
- ✅ **D.** A method to capture and propagate changes made to data in a source system

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A method to capture and propagate changes made to data in a source system

CDC thu thập thao tác thêm, sửa, xóa ở nguồn và truyền đi để duy trì dữ liệu phía sau tăng dần.

#### Vì sao các phương án khác không phù hợp?

- **A data visualization technique**: Trực quan hóa hiển thị dữ liệu, không thu thập thay đổi nguồn.
- **A clustering algorithm**: Clustering nhóm hoặc bố trí dữ liệu, không theo dõi sự kiện thay đổi.
- **A data compression method**: Nén giảm dung lượng lưu, không truyền thay đổi.

**Tham khảo:**

- [The AUTO CDC APIs](https://docs.databricks.com/aws/en/ldp/cdc)

</details>


---

## Q214 · single choice · — not answered

Within a Lakeflow Declarative Pipeline, which flow type applies change data capture to maintain a target table, including support for slowly changing dimension type 2 history?

- ✅ **A.** The AUTO CDC flow (create_auto_cdc_flow / APPLY CHANGES)
- **B.** A VACUUM operation
- **C.** A plain append flow
- **D.** A materialized view refresh

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The AUTO CDC flow (create_auto_cdc_flow / APPLY CHANGES)

AUTO CDC áp dụng sự kiện thay đổi theo thứ tự vào đích streaming và có thể giữ lịch sử SCD Type 2, thay cho tên cũ APPLY CHANGES.

#### Vì sao các phương án khác không phù hợp?

- **A plain append flow**: Append thông thường chỉ thêm bản ghi, tự nó không duy trì upsert/delete có phiên bản.
- **A materialized view refresh**: Làm mới materialized view suy ra kết quả truy vấn, không khai báo flow CDC hợp nhất/lịch sử chuyên dụng.
- **A VACUUM operation**: VACUUM xóa tệp lưu trữ lỗi thời, không áp dụng sự kiện thay đổi nguồn.

**Tham khảo:**

- [The AUTO CDC APIs](https://docs.databricks.com/aws/en/ldp/cdc)

</details>


---

## Q215 · single choice · — not answered

What is the purpose of a watermark in Structured Streaming?

- **A.** To encrypt streaming data
- **B.** To compress data
- ✅ **C.** To define a threshold for how late data can arrive and still be processed, enabling state cleanup
- **D.** To visualize data flow

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To define a threshold for how late data can arrive and still be processed, enabling state cleanup

Watermark theo event time xác lập tiến độ so với thời gian sự kiện đã thấy và độ trễ cho phép, giúp dọn state có giới hạn. Bản ghi quá bảo đảm trễ này có thể bị loại.

#### Vì sao các phương án khác không phù hợp?

- **To encrypt streaming data**: Watermark không phải khóa mã hóa hay thao tác mật mã.
- **To compress data**: Nó điều khiển quản lý state theo event time, không nén dữ liệu.
- **To visualize data flow**: Đây là khái niệm thực thi/state, không phải trực quan hóa pipeline.

**Tham khảo:**

- [Structured Streaming programming guide](https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html)

</details>


---

## Q216 · single choice · — not answered

A medallion architecture stores raw ingested data, cleaned/conformed data, and business-level aggregates. Which naming correctly orders these layers?

- **A.** gold, silver, bronze
- **B.** silver, bronze, gold
- ✅ **C.** bronze, silver, gold
- **D.** raw, gold, bronze

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** bronze, silver, gold

Bronze giữ dữ liệu thô đã nạp, Silver làm sạch và chuẩn hóa, Gold tạo tổng hợp nghiệp vụ để sử dụng.

#### Vì sao các phương án khác không phù hợp?

- **gold, silver, bronze**: Thứ tự này đảo chiều tinh luyện và đặt tổng hợp trước.
- **silver, bronze, gold**: Thứ tự này bắt đầu bằng dữ liệu sạch trước nạp thô và đặt Gold sai chỗ.
- **raw, gold, bronze**: Raw mô tả Bronze, nhưng thứ tự này thiếu Silver và đặt Bronze cuối.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q217 · single choice · — not answered

What is Delta Live Tables (DLT)?

- **A.** A data visualization tool
- **B.** A machine learning service
- ✅ **C.** A declarative ETL framework for building reliable data pipelines with automatic dependency management
- **D.** A data governance tool only

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A declarative ETL framework for building reliable data pipelines with automatic dependency management

DLT, nay là Lakeflow Spark Declarative Pipelines, cho kỹ sư khai báo dataset và phép biến đổi trong khi framework quản lý phụ thuộc và thực thi pipeline.

#### Vì sao các phương án khác không phù hợp?

- **A data visualization tool**: Nó xây pipeline dữ liệu thay vì chủ yếu vẽ biểu đồ.
- **A machine learning service**: Huấn luyện/phục vụ mô hình machine learning không phải chức năng định nghĩa.
- **A data governance tool only**: Nó gồm điều phối biến đổi và quản lý chất lượng, không chỉ quản trị.

**Tham khảo:**

- [Streaming tables](https://docs.databricks.com/aws/en/ldp/concepts/streaming-tables)
- [Materialized views](https://docs.databricks.com/aws/en/ldp/concepts/materialized-views)

</details>


---

## Q218 · single choice · — not answered

Which configuration would you use to make a Structured Streaming or Lakeflow stream process all currently available data and then stop, suitable for an incremental batch job?

- **A.** trigger(continuous='1 second')
- **B.** trigger(processingTime='10 seconds')
- ✅ **C.** trigger(availableNow=True)
- **D.** No trigger at all

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** trigger(availableNow=True)

availableNow=True xử lý dữ liệu sẵn có lúc bắt đầu lần chạy, có thể qua nhiều micro-batch, rồi tự kết thúc.

#### Vì sao các phương án khác không phù hợp?

- **trigger(processingTime='10 seconds')**: Trigger processing-time tiếp tục kiểm tra theo khoảng đã cấu hình.
- **trigger(continuous='1 second')**: Continuous processing hướng tới chạy liên tục độ trễ thấp, không kết thúc hữu hạn.
- **No trigger at all**: Trigger mặc định tiếp tục xử lý thay vì dừng sau đầu vào hiện có.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q219 · single choice · — not answered

What is the difference between a trigger Once and trigger ProcessingTime in Structured Streaming?

- **A.** ProcessingTime is faster
- **B.** There is no difference
- **C.** Trigger Once only works with Delta tables
- ✅ **D.** Trigger Once runs a single micro-batch and stops; ProcessingTime continues running micro-batches at the specified interval.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** Trigger Once runs a single micro-batch and stops; ProcessingTime continues running micro-batches at the specified interval.

Trigger.Once kết thúc sau một micro-batch; trigger ProcessingTime tiếp tục lập lịch micro-batch theo khoảng cấu hình. AvailableNow là trigger nạp hữu hạn được ưu tiên trong Databricks hiện nay.

#### Vì sao các phương án khác không phù hợp?

- **There is no difference**: Một loại kết thúc sau một micro-batch, loại kia tiếp tục lập lịch.
- **ProcessingTime is faster**: Thông lượng tùy workload; tốc độ không phải khác biệt ngữ nghĩa.
- **Trigger Once only works with Delta tables**: Once không chỉ giới hạn nguồn Delta.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q220 · single choice · — not answered

An engineer wants to detect outliers by checking that a numeric column's values fall within an expected range before loading. Which Unity Catalog data quality technique applies?

- **A.** Enabling Photon
- **B.** Increasing autoscaling maximum
- ✅ **C.** A CHECK constraint or range-validation expectation
- **D.** Running VACUUM RETAIN 0 HOURS

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A CHECK constraint or range-validation expectation

Điều kiện CHECK hoặc expectation phạm vi kiểm tra trực tiếp giới hạn số. Chọn từ chối, drop hay cảnh báo theo hành vi nạp mong muốn.

#### Vì sao các phương án khác không phù hợp?

- **Enabling Photon**: Photon đổi tốc độ thực thi, không kiểm tra khoảng hợp lệ nghiệp vụ.
- **Increasing autoscaling maximum**: Thêm năng lực autoscaling không kiểm tra giá trị số.
- **Running VACUUM RETAIN 0 HOURS**: VACUUM retention bằng không có thể xóa lịch sử cần thiết và không nhận diện outlier.

**Tham khảo:**

- [Constraints on Databricks](https://docs.databricks.com/aws/en/tables/constraints)
- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q221 · single choice · — not answered

What is the purpose of Change Data Feed (CDF) in Delta Lake?

- **A.** To encrypt data
- **B.** To compress data
- **C.** To partition tables automatically
- ✅ **D.** To provide a change log of row-level changes for incremental processing

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To provide a change log of row-level changes for incremental processing

CDF cung cấp bản ghi thay đổi insert, delete và update đã commit, giúp consumer xử lý chênh lệch thay vì đọc lại toàn bảng.

#### Vì sao các phương án khác không phù hợp?

- **To compress data**: CDF thêm metadata thay đổi, không phải codec nén.
- **To encrypt data**: Mã hóa dữ liệu tách biệt với thu thập thay đổi.
- **To partition tables automatically**: CDF không tự chọn cột partition hoặc bố trí partition.

**Tham khảo:**

- [Use Delta Lake change data feed](https://docs.databricks.com/aws/en/delta/delta-change-data-feed)

</details>


---

## Q222 · single choice · — not answered

A multi-step ETL workflow must run task B only after task A succeeds, and task C only after both A and B succeed. Which Lakeflow Jobs feature defines this execution order?

- **A.** Delta Sharing
- ✅ **B.** Task dependencies (Depends on) between tasks
- **C.** Z-ordering
- **D.** Cluster auto-termination

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Task dependencies (Depends on) between tasks

Depends on tạo đồ thị task có hướng. Với điều kiện success, task phía sau đợi các tiền điều kiện được liệt kê thành công.

#### Vì sao các phương án khác không phù hợp?

- **Cluster auto-termination**: Auto-termination điều khiển vòng đời compute, không thứ tự task.
- **Z-ordering**: Z-ordering đổi bố trí dữ liệu bảng.
- **Delta Sharing**: Delta Sharing chia sẻ truy cập dữ liệu, không lập lịch phụ thuộc task.

**Tham khảo:**

- [Configure and edit tasks in Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/configure-task)

</details>


---

## Q223 · single choice · — not answered

In legacy Delta Live Tables SQL syntax, which declaration creates a non-streaming table maintained as the materialized result of a source query?

- **A.** CREATE VIEW
- ✅ **B.** CREATE LIVE TABLE
- **C.** CREATE STREAMING LIVE TABLE
- **D.** CREATE TEMPORARY VIEW

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** CREATE LIVE TABLE

CREATE LIVE TABLE cũ khai báo dataset vật hóa không streaming. Kết quả được làm mới phản ánh truy vấn nguồn; cấu trúc hiện đại tương ứng là materialized view, có thể dùng refresh tăng dần.

#### Vì sao các phương án khác không phù hợp?

- **CREATE STREAMING LIVE TABLE**: CREATE STREAMING LIVE TABLE chọn ngữ nghĩa streaming tăng dần.
- **CREATE TEMPORARY VIEW**: Temporary view không lưu kết quả vật hóa thành bảng được yêu cầu.
- **CREATE VIEW**: View thường lưu định nghĩa truy vấn, không vật hóa kết quả.

**Tham khảo:**

- [Materialized views](https://docs.databricks.com/aws/en/ldp/concepts/materialized-views)
- [Streaming tables](https://docs.databricks.com/aws/en/ldp/concepts/streaming-tables)

</details>


---

## Q224 · single choice · — not answered

A job must run automatically at 2 AM every day. Which Lakeflow Jobs configuration achieves this?

- ✅ **A.** A scheduled trigger using a cron expression
- **B.** Setting Photon on the cluster
- **C.** Manual run only
- **D.** A file arrival trigger

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A scheduled trigger using a cron expression

Scheduled trigger với biểu thức cron và múi giờ phù hợp chạy job hằng ngày lúc 2 giờ sáng; múi giờ quyết định cách xử lý thay đổi giờ mùa hè.

#### Vì sao các phương án khác không phù hợp?

- **Manual run only**: Chạy chỉ thủ công cần người hoặc API gọi thay vì lịch hằng ngày.
- **A file arrival trigger**: File arrival phản ứng tệp mới thay vì giờ cố định mỗi ngày.
- **Setting Photon on the cluster**: Photon tăng tốc truy vấn, không tạo lịch.

**Tham khảo:**

- [Run jobs on a schedule](https://docs.databricks.com/aws/en/jobs/scheduled)

</details>


---

## Q225 · single choice · — not answered

What is the difference between a streaming join and a batch join in Spark?

- **A.** Batch joins are faster
- **B.** Streaming joins only support inner joins
- ✅ **C.** Streaming joins handle continuously arriving data and may require watermarking for state management
- **D.** There is no difference

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Streaming joins handle continuously arriving data and may require watermarking for state management

Streaming join xử lý dữ liệu đến không giới hạn và có thể giữ state giữa các trigger. Watermark giúp giới hạn state cho stream-stream join phù hợp, khác join batch hữu hạn.

#### Vì sao các phương án khác không phù hợp?

- **There is no difference**: Streaming join khác về dữ liệu đến, state và ngữ nghĩa hoàn tất.
- **Batch joins are faster**: Hiệu năng tùy dữ liệu và plan; batch không luôn nhanh hơn.
- **Streaming joins only support inner joins**: Streaming hỗ trợ cả biến thể outer/semi với yêu cầu watermark và điều kiện nối phù hợp.

**Tham khảo:**

- [Structured Streaming programming guide](https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html)

</details>


---

## Q226 · single choice · — not answered

A job should start automatically whenever new files land in a monitored cloud storage location. Which Lakeflow Jobs trigger type fits?

- **A.** Scheduled (cron) trigger
- ✅ **B.** File arrival trigger
- **C.** Manual trigger
- **D.** Continuous trigger

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** File arrival trigger

File arrival trigger giám sát vị trí storage chỉ định và chạy job khi phát hiện tệp mới, phù hợp thực thi theo dữ liệu đến không đều.

#### Vì sao các phương án khác không phù hợp?

- **Scheduled (cron) trigger**: Cron chạy theo thời gian, không nhất thiết trùng lúc tệp đến.
- **Manual trigger**: Trigger thủ công cần được gọi rõ ràng.
- **Continuous trigger**: Lịch continuous duy trì chạy lặp, không chuyên phản ứng với tệp được phát hiện.

**Tham khảo:**

- [Trigger jobs when new files arrive](https://docs.databricks.com/aws/en/jobs/file-arrival-triggers)

</details>


---

## Q227 · single choice · — not answered

What is the purpose of the applyInPandas function in PySpark?

- **A.** To read CSV files
- ✅ **B.** To apply a Python function using Pandas DataFrames to each group of a Spark DataFrame
- **C.** To save data to Parquet
- **D.** To create a Spark session

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To apply a Python function using Pandas DataFrames to each group of a Spark DataFrame

GroupedData.applyInPandas truyền từng nhóm dưới dạng pandas DataFrame vào hàm Python rồi ghép các frame trả về theo schema đầu ra khai báo.

#### Vì sao các phương án khác không phù hợp?

- **To read CSV files**: Đọc CSV dùng DataFrameReader, không phải thao tác theo nhóm này.
- **To create a Spark session**: Tạo SparkSession tách biệt với áp dụng logic Python theo nhóm.
- **To save data to Parquet**: Ghi Parquet dùng DataFrameWriter, không phải applyInPandas.

**Tham khảo:**

- [GroupedData.applyInPandas — PySpark](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.GroupedData.applyInPandas.html)

</details>


---

## Q228 · single choice · — not answered

To package job and pipeline definitions as code and deploy the same project consistently across dev, test, and prod, which Databricks feature should a team adopt?

- ✅ **A.** Databricks Asset Bundles
- **B.** Notebook revision history
- **C.** The DBFS root
- **D.** Ganglia metrics

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks Asset Bundles

Bundle đóng gói code cùng tài nguyên job/pipeline khai báo và target môi trường, cho phép triển khai lặp lại nhất quán qua dev, test, prod. Databricks hiện gọi chúng là Declarative Automation Bundles.

#### Vì sao các phương án khác không phù hợp?

- **Notebook revision history**: Lịch sử revision theo dõi chỉnh sửa, không định nghĩa và triển khai toàn dự án tài nguyên.
- **The DBFS root**: DBFS root là storage, không phải framework đặc tả triển khai.
- **Ganglia metrics**: Ganglia báo chỉ số, không đóng gói tài nguyên triển khai.

**Tham khảo:**

- [Declarative Automation Bundles](https://docs.databricks.com/aws/en/dev-tools/bundles/)

</details>


---

## Q229 · single choice · — not answered

In Delta Live Tables, what is an expectation?

- **A.** A user permission setting
- **B.** A cluster configuration
- **C.** A schedule for pipeline runs
- ✅ **D.** A Boolean data-quality rule on a pipeline dataset, with a violation action such as retain-and-warn, drop, or fail.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** A Boolean data-quality rule on a pipeline dataset, with a violation action such as retain-and-warn, drop, or fail.

Expectation kết hợp điều kiện hợp lệ Boolean cấp dataset với hành vi khi vi phạm: giữ bản ghi lỗi kèm chỉ số, loại chúng, hoặc làm update liên quan thất bại.

#### Vì sao các phương án khác không phù hợp?

- **A schedule for pipeline runs**: Lịch quyết định khi chạy; expectation kiểm tra bản ghi.
- **A user permission setting**: Quyền cấp phép cho principal, không kiểm tra giá trị.
- **A cluster configuration**: Cấu hình cluster điều khiển compute, không phải điều kiện chất lượng dataset.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q230 · single choice · — not answered

Which Databricks feature lets engineers connect a workspace to a remote Git repository to manage notebook and code versioning with branches and pull requests?

- **A.** Photon
- ✅ **B.** Git folders (Repos)
- **C.** Cluster init scripts
- **D.** DBFS mounts

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Git folders (Repos)

Git folder, tên cũ Repos, clone repository remote vào workspace và hỗ trợ đồng bộ theo nhánh, quản lý phiên bản notebook/code. Pull request được quản lý qua nhà cung cấp Git.

#### Vì sao các phương án khác không phù hợp?

- **DBFS mounts**: DBFS mount cung cấp đường dẫn storage, không cung cấp nhánh Git.
- **Cluster init scripts**: Init script cấu hình khởi động compute, không quản lý phiên bản repository.
- **Photon**: Photon là engine thực thi, không phải quản lý mã nguồn.

**Tham khảo:**

- [Git operations in Databricks Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos)

</details>


---

## Q231 · single choice · — not answered

What happens when late data arrives after the watermark has passed in a windowed aggregation?

- ✅ **A.** It may be dropped after the relevant aggregation state is cleaned up; Spark does not guarantee processing beyond the configured lateness threshold.
- **B.** The entire aggregation restarts
- **C.** The watermark is automatically extended
- **D.** It is always processed

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** It may be dropped after the relevant aggregation state is cleaned up; Spark does not guarantee processing beyond the configured lateness threshold.

Watermark giới hạn giữ state cho tổng hợp cửa sổ. Dữ liệu trong độ trễ cho phép được bảo vệ khỏi loại theo watermark, còn bản ghi đủ cũ có thể bị loại sau dọn state; không có handler dữ liệu muộn tự động.

#### Vì sao các phương án khác không phù hợp?

- **It is always processed**: Watermark không bảo đảm xử lý bản ghi muộn vô hạn.
- **The entire aggregation restarts**: Bản ghi đến muộn không tự khởi động lại toàn bộ phép tổng hợp.
- **The watermark is automatically extended**: Sự kiện muộn không tự mở rộng ngưỡng trễ đã cấu hình.

**Tham khảo:**

- [Structured Streaming programming guide](https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html)

</details>


---

## Q232 · single choice · — not answered

A data engineer is attempting to drop a Spark SQL table my_table and runs the following command: DROP TABLE IF EXISTS my_table; After running this command, the engineer notices that the data files and metadata files have been deleted from the file system. Which of the following describes why all of these files were deleted?

- **A.** The table did not have a location
- **B.** The table was external
- **C.** The table's data was smaller than 10 GB
- ✅ **D.** The table was managed
- **E.** The table's data was larger than 10 GB

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The table was managed

Bảng managed giao cho metastore quản lý cả định nghĩa lẫn dữ liệu, nên xóa bảng sẽ loại bỏ cả hai. Unity Catalog có thể trì hoãn xóa tệp vật lý để hỗ trợ khôi phục.

#### Vì sao các phương án khác không phù hợp?

- **The table's data was smaller than 10 GB**: Ngưỡng 10 GB không quyết định cách DROP xử lý dữ liệu.
- **The table's data was larger than 10 GB**: Kích thước lớn không khiến DROP xóa tệp external.
- **The table was external**: Xóa bảng external thường giữ lại tệp dữ liệu.
- **The table did not have a location**: Bảng managed vẫn có vị trí lưu trữ dù không khai báo LOCATION.

**Tham khảo:**

- [DROP TABLE](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-drop-table)

</details>


---

## Q233 · single choice · — not answered

A production job failed overnight due to a transient cloud error. The team wants Databricks to automatically retry the run a few times before alerting. Which job setting addresses this?

- ✅ **A.** Configuring automatic retries (and automatic restarts) for the job or task
- **B.** Enabling Delta Sharing
- **C.** Adding a Z-order column
- **D.** Disabling auto-termination

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Configuring automatic retries (and automatic restarts) for the job or task

Retry tự động chạy lại task bị lỗi tạm thời đến giới hạn cấu hình; nên kết hợp thông báo lỗi và khoảng chờ phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Disabling auto-termination**: Giữ compute hoạt động không tự chạy lại lần thất bại.
- **Adding a Z-order column**: Z-ordering tối ưu bố trí dữ liệu, không cấu hình retry.
- **Enabling Delta Sharing**: Delta Sharing chia sẻ dữ liệu, không chạy lại task.

**Tham khảo:**

- [Configure and edit tasks in Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/configure-task)

</details>


---

## Q234 · single choice · — not answered

Which command reads only changes from a Delta table using Change Data Feed?

- **A.** READ_CDC FROM table
- ✅ **B.** SELECT * FROM table_changes("table_name", startVersion, endVersion)
- **C.** DESCRIBE HISTORY table
- **D.** SELECT * FROM table

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SELECT * FROM table_changes("table_name", startVersion, endVersion)

Hàm table_changes trả về các thay đổi hàng giữa những phiên bản bảng, kèm metadata thay đổi, khi bảng hỗ trợ change data feed.

#### Vì sao các phương án khác không phù hợp?

- **SELECT * FROM table**: SELECT thông thường trả snapshot bảng thay vì riêng phần thay đổi.
- **READ_CDC FROM table**: READ_CDC FROM không phải cú pháp SQL được tài liệu quy định.
- **DESCRIBE HISTORY table**: DESCRIBE HISTORY trả lịch sử thao tác, không trả các hàng dữ liệu thay đổi.

**Tham khảo:**

- [Use change data feed on Databricks](https://docs.databricks.com/aws/en/tables/features/change-data-feed)

</details>


---

## Q235 · single choice · — not answered

An engineer wants to be notified by email when a scheduled job fails. Which Lakeflow Jobs capability provides this?

- ✅ **A.** Job notifications/alerts on failure
- **B.** VACUUM RETAIN
- **C.** Liquid clustering
- **D.** Photon acceleration

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Job notifications/alerts on failure

Thông báo lỗi job gửi email khi xảy ra sự kiện thất bại đã chọn; cần cấu hình địa chỉ người nhận.

#### Vì sao các phương án khác không phù hợp?

- **VACUUM RETAIN**: VACUUM RETAIN điều khiển thời gian giữ tệp không còn dùng.
- **Photon acceleration**: Photon tăng tốc thực thi, không thiết lập gửi email.
- **Liquid clustering**: Liquid clustering tổ chức tệp bảng, không gửi thông báo.

**Tham khảo:**

- [Add notifications on a job](https://docs.databricks.com/aws/en/jobs/notifications)

</details>


---

## Q236 · single choice · — not answered

What is the purpose of foreachBatch in Structured Streaming?

- **A.** To create a checkpoint
- **B.** To write to Delta tables
- **C.** To start a streaming query
- ✅ **D.** To perform custom logic on each micro-batch of a streaming query using DataFrame operations

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To perform custom logic on each micro-batch of a streaming query using DataFrame operations

foreachBatch cung cấp từng micro-batch dưới dạng DataFrame batch và batch ID, cho phép biến đổi hoặc ghi tùy chỉnh. Callback phải bảo đảm chạy lại không tạo tác dụng trùng.

#### Vì sao các phương án khác không phù hợp?

- **To write to Delta tables**: Ghi Delta chỉ là một ứng dụng, không phải toàn bộ mục đích callback.
- **To start a streaming query**: start khởi chạy truy vấn; foreachBatch định nghĩa xử lý mỗi batch.
- **To create a checkpoint**: Vị trí checkpoint được cấu hình riêng.

**Tham khảo:**

- [Use foreachBatch to write to arbitrary data sinks](https://docs.databricks.com/aws/en/structured-streaming/foreach)

</details>


---

## Q237 · single choice · — not answered

When deciding between authoring a transformation as a notebook task versus a Lakeflow Spark Declarative Pipeline, which factor favors the declarative pipeline?

- **A.** You want to avoid Unity Catalog entirely
- **B.** You only need a one-off ad hoc exploratory query
- ✅ **C.** You want the framework to manage dependencies, incremental refresh, data quality expectations, and lineage automatically
- **D.** You need fine-grained imperative control over each Spark API call with no managed orchestration

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** You want the framework to manage dependencies, incremental refresh, data quality expectations, and lineage automatically

Pipeline khai báo mô tả dataset và phép biến đổi; framework quản lý phụ thuộc, xử lý tăng dần và expectations.

#### Vì sao các phương án khác không phù hợp?

- **You need fine-grained imperative control over each Spark API call with no managed orchestration**: Điều phối mệnh lệnh chi tiết phù hợp hơn với notebook hoặc mã Spark tùy chỉnh.
- **You only need a one-off ad hoc exploratory query**: Một truy vấn khám phá đơn lẻ không cần vòng đời pipeline được quản lý.
- **You want to avoid Unity Catalog entirely**: Tránh Unity Catalog không phải lý do chọn xử lý khai báo.

**Tham khảo:**

- [Spark Declarative Pipelines on Lakeflow](https://docs.databricks.com/aws/en/ldp)

</details>


---

## Q238 · single choice · — not answered

What is the recommended approach for handling duplicate records in an incremental pipeline?

- **A.** Use CSV format
- **B.** Ignore them
- ✅ **C.** Use Delta Lake MERGE with match conditions to deduplicate or idempotent writes
- **D.** Delete the entire table

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Delta Lake MERGE with match conditions to deduplicate or idempotent writes

MERGE đối chiếu khóa nghiệp vụ nguồn với bảng đích để insert hoặc update có thể chạy lại an toàn. Cũng phải khử trùng lô đầu vào nếu có khóa lặp.

#### Vì sao các phương án khác không phù hợp?

- **Ignore them**: Bỏ qua vấn đề khiến số đếm sai và bản ghi trùng còn tồn tại.
- **Delete the entire table**: Xóa toàn bộ bảng làm mất trạng thái đã tích lũy.
- **Use CSV format**: Định dạng CSV không bảo đảm duy nhất theo khóa nghiệp vụ.

**Tham khảo:**

- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q239 · single choice · — not answered

A data engineer is using Spark SQL to analyze a large dataset stored in Delta format. The engineer notices that queries filtering on partition columns run significantly faster. What is the primary reason for this performance improvement?

- **A.** Data replication
- **B.** Broadcast joins
- ✅ **C.** Partition pruning
- **D.** Data caching

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Partition pruning

Partition pruning bỏ qua thư mục có giá trị partition không thể thỏa bộ lọc, giảm số tệp và lượng dữ liệu phải quét.

#### Vì sao các phương án khác không phù hợp?

- **Data caching**: Cache tái sử dụng dữ liệu đã đọc, không giải thích lợi thế riêng của bộ lọc partition.
- **Data replication**: Nhân bản tạo bản sao, không phải cơ chế loại bỏ phần dữ liệu cần quét.
- **Broadcast joins**: Broadcast join phân phối phía join nhỏ, không cắt bỏ thư mục partition.

**Tham khảo:**

- [Parquet Files: Partition Discovery](https://spark.apache.org/docs/latest/sql-data-sources-parquet.html)

</details>


---

## Q240 · single choice · — not answered

Which task type in a Lakeflow Job runs a Lakeflow Spark Declarative Pipeline as part of a larger orchestrated workflow?

- **A.** A Python wheel task only
- ✅ **B.** A Pipeline task
- **C.** A SQL alert task
- **D.** A dbt task only

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A Pipeline task

Pipeline task gọi pipeline khai báo đã cấu hình và cho phép các task khác phụ thuộc vào kết quả hoàn tất.

#### Vì sao các phương án khác không phù hợp?

- **A dbt task only**: Task dbt chạy lệnh dbt, không phải loại task chuyên chạy pipeline này.
- **A SQL alert task**: SQL alert task đánh giá điều kiện cảnh báo.
- **A Python wheel task only**: Python wheel task chạy mã Python đóng gói thay vì chọn trực tiếp pipeline.

**Tham khảo:**

- [Pipeline task for jobs](https://docs.databricks.com/gcp/en/jobs/tasks/pipeline)

</details>


---

## Q241 · single choice · — not answered

What is the difference between append and complete output modes for streaming aggregations?

- ✅ **A.** Append only outputs new rows; Complete outputs the entire updated result table
- **B.** They are identical
- **C.** Append is faster
- **D.** Complete mode only works with batch

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Append only outputs new rows; Complete outputs the entire updated result table

Append phát các hàng kết quả mới đã ổn định; complete phát toàn bộ kết quả tổng hợp mỗi trigger. Tổng hợp append thường cần watermark theo thời gian sự kiện để chốt hàng.

#### Vì sao các phương án khác không phù hợp?

- **They are identical**: Hai chế độ phát những phần khác nhau của bảng kết quả.
- **Append is faster**: Tốc độ phụ thuộc state, lượng đầu ra và sink; không phải khác biệt ngữ nghĩa.
- **Complete mode only works with batch**: Complete chính là chế độ đầu ra cho tổng hợp streaming.

**Tham khảo:**

- [Select an output mode for Structured Streaming](https://docs.databricks.com/aws/en/structured-streaming/output-mode)

</details>


---

## Q242 · single choice · — not answered

A data engineer wants to switch an ingestion pipeline from a batch read of the Delta table transactions to a streaming read of the same table. Which API change is required?

- **A.** Replace schema(schema) with option ("maxFilesPerTrigger", 1)
- **B.** Replace predict with a stream-friendly prediction function
- **C.** Replace "transactions" with the path to the location of the Delta table
- ✅ **D.** Replace spark.read with spark.readStream
- **E.** Replace format("delta") with format("stream")

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** Replace spark.read with spark.readStream

Đổi spark.read thành spark.readStream chuyển đầu vào từ DataFrame batch sang DataFrame streaming; vẫn có thể đọc bảng Delta đã đăng ký bằng tên. Câu đã hiệu đính kiểm tra thay đổi API này, không dựa vào khối mã bị thiếu.

#### Vì sao các phương án khác không phù hợp?

- **Replace predict with a stream-friendly prediction function**: Đổi hàm dự đoán không chuyển bộ đọc đầu vào từ batch sang streaming.
- **Replace schema(schema) with option ("maxFilesPerTrigger", 1)**: maxFilesPerTrigger giới hạn tốc độ nguồn streaming được hỗ trợ, không thay API bộ đọc hoặc schema đã cung cấp.
- **Replace "transactions" with the path to the location of the Delta table**: Có thể đọc streaming bảng Delta bằng tên đã đăng ký; đổi sang đường dẫn lưu trữ không phải thay đổi API bắt buộc.
- **Replace format("delta") with format("stream")**: delta là định dạng bảng; stream không phải định dạng nguồn thay thế Delta.

**Tham khảo:**

- [Delta table streaming reads and writes](https://docs.databricks.com/aws/en/structured-streaming/delta-lake)

</details>


---

## Q243 · single choice · — not answered

A team wants reliable error handling in a notebook task so that a failure in one step is caught, logged, and surfaced cleanly to the job. Which approach is best practice?

- **A.** Delete the cluster on any error
- **B.** Suppress all exceptions silently so the job always shows success
- **C.** Run everything in a single line with no error handling
- ✅ **D.** Wrap risky logic in try/except, log details, and raise an exception so the task is marked failed

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Wrap risky logic in try/except, log details, and raise an exception so the task is marked failed

Ghi log ngữ cảnh lỗi hữu ích rồi ném lại ngoại lệ để hệ thống điều phối đánh dấu task thất bại, từ đó retry hoặc cảnh báo.

#### Vì sao các phương án khác không phù hợp?

- **Suppress all exceptions silently so the job always shows success**: Nuốt ngoại lệ che giấu lỗi và có thể báo thành công giả.
- **Run everything in a single line with no error handling**: Mã một dòng không cung cấp chẩn đoán hay phục hồi có cấu trúc.
- **Delete the cluster on any error**: Xóa compute không phải xử lý lỗi ứng dụng và có thể làm mất ngữ cảnh chẩn đoán.

**Tham khảo:**

- [Use foreachBatch to write to arbitrary data sinks](https://docs.databricks.com/aws/en/structured-streaming/foreach)

</details>


---

## Q244 · single choice · — not answered

For Auto Loader reading JSON without an explicit input schema, which reader configuration stores inferred schema history and enables discovery of new columns? Assume target Delta writer evolution and restart handling are configured separately.

- **A.** Auto Loader does not support schema inference
- ✅ **B.** .option("cloudFiles.schemaLocation", schema_path).option("cloudFiles.schemaEvolutionMode", "addNewColumns")
- **C.** .option("schema", "auto")
- **D.** .option("inferSchema", "false")

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** .option("cloudFiles.schemaLocation", schema_path).option("cloudFiles.schemaEvolutionMode", "addNewColumns")

schemaLocation lưu lịch sử schema suy luận và addNewColumns cập nhật khi phát hiện cột mới. Stream thường dừng sau cập nhật rồi dùng schema mới khi khởi động lại; mergeSchema của writer là riêng.

#### Vì sao các phương án khác không phù hợp?

- **.option("inferSchema", "false")**: inferSchema=false không phải cấu hình lịch sử/tiến hóa schema Auto Loader được hỏi.
- **.option("schema", "auto")**: schema="auto" không phải API lưu schema suy luận Auto Loader trong tài liệu.
- **Auto Loader does not support schema inference**: Auto Loader có hỗ trợ suy luận và tiến hóa schema cho JSON.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q245 · single choice · — not answered

Which of the following queries is performing a streaming hop from raw data to a Bronze table?

- **A.** `(spark.table("sales") .filter(col("units") > 0) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- ✅ **B.** `(spark.readStream.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- **C.** `(spark.table("sales") .withColumn("avgPrice", col("sales") / col("units")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- **D.** `(spark.read.load(rawSalesLocation) .write .mode("append") .table("newSales") )`
- **E.** `(spark.table("sales") .groupBy("store") .agg(sum("sales")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("complete") .table("newSales") )`

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** (spark.readStream.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )

Truy vấn readStream.load(rawSalesLocation) thêm bản ghi thô mới vào bảng kèm checkpoint. Đây là bước nạp từ nguồn thô sang Bronze.

#### Vì sao các phương án khác không phù hợp?

- **(spark.table("sales") .groupBy("store") .agg(sum("sales")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("complete") .table("newSales") )**: Nhóm sales tạo tổng hợp thường thuộc Gold và dùng đọc bảng batch.
- **(spark.table("sales") .filter(col("units") > 0) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Lọc units là làm sạch thường thuộc Silver và bắt đầu từ đọc bảng batch.
- **(spark.table("sales") .withColumn("avgPrice", col("sales") / col("units")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Tính avgPrice làm giàu bản ghi đã có thay vì nạp nguồn thô.
- **(spark.read.load(rawSalesLocation) .write .mode("append") .table("newSales") )**: spark.read với write nạp batch, không phải streaming.

**Tham khảo:**

- [SparkSession.readStream](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.readStream.html)
- [What is the medallion lakehouse architecture?](https://docs.databricks.com/gcp/en/lakehouse/medallion)

</details>


---

## Q246 · single choice · — not answered

Which of the following Structured Streaming queries is performing a hop from a Silver table to a Gold table?

- **A.** `(spark.table("sales") .filter(col("units") > 0) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- ✅ **B.** `(spark.table("sales") .groupBy("store") .agg(sum("sales")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("complete") .table("newSales") )`
- **C.** `(spark.table("sales") .withColumn("avgPrice", col("sales") / col("units")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- **D.** `(spark.readStream.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`
- **E.** `(spark.read.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )`

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** (spark.table("sales") .groupBy("store") .agg(sum("sales")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("complete") .table("newSales") )

Nhóm sales theo store và tính tổng biểu diễn aggregate nghiệp vụ đặc trưng Gold. Tuy nhiên đoạn được chọn bắt đầu bằng spark.table là đọc batch; cần bộ đọc streaming trước writeStream để thực thi như truy vấn streaming.

#### Vì sao các phương án khác không phù hợp?

- **(spark.readStream.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Nạp trực tiếp nguồn thô vào bảng mới là bước Bronze thay vì tổng hợp nghiệp vụ từ Silver.
- **(spark.read.load(rawSalesLocation) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Đọc batch rồi writeStream không hợp lệ và không có aggregate Gold.
- **(spark.table("sales") .withColumn("avgPrice", col("sales") / col("units")) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Cột giá trung bình từng hàng làm giàu bản ghi riêng thay vì nhóm tổng nghiệp vụ; bộ đọc cũng là batch.
- **(spark.table("sales") .filter(col("units") > 0) .writeStream .option("checkpointLocation", checkpointPath) .outputMode("append") .table("newSales") )**: Lọc units không hợp lệ là làm sạch kiểu Silver; bộ đọc batch cũng ngăn thực thi streaming.

**Tham khảo:**

- [Medallion architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)
- [Structured Streaming overview](https://spark.apache.org/docs/latest/streaming/index.html)

**Cần xem lại:** Đoạn mã khóa gọi writeStream trên DataFrame đọc lô từ spark.table("sales"). Cách xử lý: Đổi spark.table("sales") trong lựa chọn tổng hợp đang được khóa thành spark.readStream.table("sales"); nêu sales là bảng Silver. Giữ khóa của lựa chọn tổng hợp sau khi duyệt sửa mã.

</details>


---

## Q247 · single choice · — not answered

Which Azure service is commonly used alongside Azure Databricks to monitor cluster and workspace logs and metrics, as referenced in the DP-750 audience profile?

- **A.** Azure Cosmos DB
- **B.** Azure Cognitive Search
- ✅ **C.** Azure Monitor
- **D.** Azure DevOps Boards

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Azure Monitor

Azure Monitor thu thập tín hiệu giám sát tài nguyên Azure và hỗ trợ phân tích log, metric tập trung cùng Azure Databricks.

#### Vì sao các phương án khác không phù hợp?

- **Azure DevOps Boards**: Azure DevOps Boards theo dõi công việc thay vì telemetry khi chạy.
- **Azure Cognitive Search**: Azure Cognitive Search lập chỉ mục tìm kiếm, không giám sát cluster.
- **Azure Cosmos DB**: Cosmos DB là dịch vụ cơ sở dữ liệu, không phải dịch vụ giám sát Azure.

**Tham khảo:**

- [Monitor Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/admin/account-settings/audit-log-delivery)

</details>


---

## Q248 · single choice · — not answered

What is the purpose of the state store in Structured Streaming?

- ✅ **A.** To maintain state for stateful operations like aggregations and joins across micro-batches
- **B.** To store user credentials
- **C.** To store configuration files
- **D.** To cache data for faster reads

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To maintain state for stateful operations like aggregations and joins across micro-batches

State store lưu kết quả trung gian theo khóa để tổng hợp và join kết hợp được bản ghi đến ở các micro-batch sau.

#### Vì sao các phương án khác không phù hợp?

- **To store user credentials**: Thông tin xác thực thuộc hệ thống quản lý bí mật phù hợp.
- **To cache data for faster reads**: State cần cho tính đúng đắn xuyên batch, không chỉ là cache đọc.
- **To store configuration files**: Tệp cấu hình không biểu diễn trạng thái truy vấn theo khóa đang thay đổi.

**Tham khảo:**

- [What is stateful streaming?](https://docs.databricks.com/aws/en/structured-streaming/stateful-streaming)

</details>


---

## Q249 · single choice · — not answered

To diagnose a slow Spark job by inspecting stages, tasks, shuffle sizes, and skew, which tool should a data engineer use first?

- **A.** Catalog Explorer
- **B.** Delta Sharing dashboard
- ✅ **C.** The Spark UI
- **D.** Key Vault logs

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The Spark UI

Spark UI hiển thị stage, thời lượng task và metric shuffle để xác định skew hoặc stage tốn kém.

#### Vì sao các phương án khác không phù hợp?

- **Catalog Explorer**: Catalog Explorer tập trung vào đối tượng dữ liệu và quyền.
- **Delta Sharing dashboard**: Công cụ Delta Sharing theo dõi chia sẻ, không thực thi stage Spark.
- **Key Vault logs**: Log Key Vault ghi truy cập bí mật, không ghi metric task Spark.

**Tham khảo:**

- [Diagnose cost and performance issues using the Spark UI](https://docs.databricks.com/gcp/en/optimizations/spark-ui-guide/)

</details>


---

## Q250 · single choice · — not answered

In the medallion architecture, what type of transformations typically occur in the Silver layer?

- **A.** Machine learning model training
- ✅ **B.** Data cleansing, deduplication, type casting, joining with reference data
- **C.** No transformations - data is raw
- **D.** Final aggregations for reporting only

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Data cleansing, deduplication, type casting, joining with reference data

Silver xác thực và tinh lọc bản ghi Bronze bằng làm sạch, khử trùng, sửa kiểu và bổ sung dữ liệu, đồng thời giữ chi tiết hữu ích.

#### Vì sao các phương án khác không phù hợp?

- **No transformations - data is raw**: Giữ bản ghi thô là vai trò của Bronze.
- **Final aggregations for reporting only**: Tổng hợp nghiệp vụ cuối thường thuộc Gold.
- **Machine learning model training**: Huấn luyện mô hình có thể dùng Silver nhưng không phải phép biến đổi định nghĩa tầng này.

**Tham khảo:**

- [What is the medallion lakehouse architecture?](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q251 · single choice · — not answered

A data engineer is designing a Databricks Job that includes a Notebook task for data cleansing and a SQL Query task for generating a summary report. The summary report must only execute after the cleansing task completes successfully. How should the dependency be configured in the Lakeflow Jobs task graph?

- **A.** Configure the cleansing task to use an 'On Failure' trigger to start the summary report.
- **B.** Set both tasks to run on the same schedule with a five-minute start delay for the report.
- ✅ **C.** In the summary report task, select the cleansing task under Depends on and set Run if to All succeeded.
- **D.** Place both tasks in the same notebook and use a standard Python function call.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** In the summary report task, select the cleansing task under Depends on and set Run if to All succeeded.

Depends on xác định task làm sạch phía trước, còn Run if = All succeeded chỉ cho báo cáo chạy khi tiền điều kiện đó thành công.

#### Vì sao các phương án khác không phù hợp?

- **Set both tasks to run on the same schedule with a five-minute start delay for the report.**: Độ trễ thời gian không bảo đảm task phía trước đã hoàn tất thành công.
- **Configure the cleansing task to use an 'On Failure' trigger to start the summary report.**: Chạy sau thất bại trái yêu cầu chỉ chạy khi thành công.
- **Place both tasks in the same notebook and use a standard Python function call.**: Gộp task vào một notebook không cấu hình phụ thuộc đồ thị task được hỏi.

**Tham khảo:**

- [Configure task dependencies](https://docs.databricks.com/aws/en/jobs/run-if)

</details>


---

## Q252 · single choice · — not answered

A bundle should deploy a job to a development target with a -dev suffix and to production without it, using the same definition. Which Databricks Asset Bundles concept enables this environment separation?

- **A.** Delta checkpoints
- **B.** Z-order keys
- **C.** Cluster pools
- ✅ **D.** Bundle targets (environments)

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Bundle targets (environments)

Bundle targets ghi đè thiết lập tài nguyên theo môi trường; target phát triển có thể đặt tên riêng còn production dùng tên production.

#### Vì sao các phương án khác không phù hợp?

- **Cluster pools**: Pool quản lý instance compute sẵn có, không định nghĩa môi trường triển khai.
- **Z-order keys**: Khóa Z-order tổ chức tệp dữ liệu.
- **Delta checkpoints**: Checkpoint Delta tóm tắt transaction log, không phải target bundle.

**Tham khảo:**

- [Declarative Automation Bundles configuration](https://docs.databricks.com/aws/en/dev-tools/bundles/settings)

</details>


---

## Q253 · single choice · — not answered

What is the benefit of using readStream with Delta Lake as a source?

- **A.** It only works with small tables
- **B.** It requires more storage
- ✅ **C.** It enables efficient incremental processing by reading only new data files added to the table
- **D.** It is slower than batch

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It enables efficient incremental processing by reading only new data files added to the table

Nguồn Delta streaming theo dõi dữ liệu đã commit mới theo kiểu tăng dần thay vì quét lại toàn bộ snapshot. Update và delete cần xử lý riêng hoặc change data feed.

#### Vì sao các phương án khác không phù hợp?

- **It is slower than batch**: Streaming không mặc nhiên chậm hơn; tránh đọc lại toàn bộ có thể giảm công việc.
- **It requires more storage**: Tăng dung lượng lưu trữ không phải lợi ích của readStream.
- **It only works with small tables**: Delta streaming được thiết kế để mở rộng vượt quá bảng nhỏ.

**Tham khảo:**

- [Delta Lake table streaming reads and writes](https://docs.databricks.com/aws/en/structured-streaming/delta-lake)

</details>


---

## Q254 · single choice · — not answered

A Unity Catalog user needs to grant and revoke privileges within a schema. The user should not implicitly receive SELECT or MODIFY data privileges, although administrators recognize that a privilege manager can explicitly grant further privileges. Assuming required parent usage privileges, which grant fits this requirement?

- ✅ **A.** MANAGE privilege on the schema
- **B.** Table Owner
- **C.** Catalog Owner
- **D.** USE catalog/schema privilege on the schema

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** MANAGE privilege on the schema

MANAGE trên schema cho phép quản lý quyền và áp dụng cho đối tượng con mà không tự cấp SELECT hay MODIFY. Đây là quyền quản trị cần tin cậy vì người giữ có thể cấp thêm truy cập rõ ràng, kể cả cho chính mình.

#### Vì sao các phương án khác không phù hợp?

- **Table Owner**: Ownership bảng nhắm một bảng và cấp đầy đủ năng lực chủ sở hữu thay vì quyền schema được hỏi.
- **Catalog Owner**: Ownership catalog rộng hơn phạm vi schema yêu cầu.
- **USE catalog/schema privilege on the schema**: USE CATALOG và USE SCHEMA chỉ cho dùng namespace, không cấp quyền quản trị grant/revoke.

**Tham khảo:**

- [Unity Catalog privileges reference — MANAGE](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q255 · single choice · — not answered

Which command-line tool validates, deploys, and runs Databricks Asset Bundles from a CI/CD pipeline?

- ✅ **A.** The Databricks CLI (databricks bundle deploy/run)
- **B.** terraform plan only
- **C.** kubectl
- **D.** az storage blob upload

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The Databricks CLI (databricks bundle deploy/run)

Databricks CLI cung cấp các lệnh bundle validate, bundle deploy và bundle run để hệ thống CI/CD gọi.

#### Vì sao các phương án khác không phù hợp?

- **kubectl**: kubectl quản lý tài nguyên Kubernetes, không triển khai bundle bản địa.
- **terraform plan only**: terraform plan chỉ xem trước thay đổi Terraform, không chạy lệnh bundle.
- **az storage blob upload**: Tải blob lên storage không xác thực hay triển khai tài nguyên Databricks.

**Tham khảo:**

- [bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q256 · single choice · — not answered

What is the purpose of the legacy ignoreChanges option when reading from a Delta table as a stream?

- **A.** It only ignores changes to the table schema
- **B.** It silently drops every record in the stream
- **C.** It disables checkpointing for the stream
- ✅ **D.** It lets the stream continue after source-file rewrites such as UPDATE or MERGE; rows from rewritten files, including unchanged rows, can be re-emitted, and source deletes are not propagated.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** It lets the stream continue after source-file rewrites such as UPDATE or MERGE; rows from rewritten files, including unchanged rows, can be re-emitted, and source deletes are not propagated.

ignoreChanges cũ cho phép tiếp tục sau khi tệp nguồn được ghi lại, nhưng cả hàng không đổi trong tệp đó cũng có thể được phát lại; delete không được truyền xuống. Có thể cần khử trùng phía sau.

#### Vì sao các phương án khác không phù hợp?

- **It silently drops every record in the stream**: Nó không loại bỏ toàn bộ bản ghi streaming.
- **It disables checkpointing for the stream**: Xử lý thay đổi nguồn không tắt checkpoint.
- **It only ignores changes to the table schema**: Nó liên quan ghi lại tệp dữ liệu, không chỉ thay đổi schema.

**Tham khảo:**

- [Delta Lake table streaming reads and writes](https://docs.databricks.com/aws/en/structured-streaming/delta-lake)

</details>


---

## Q257 · single choice · — not answered

A pipeline computes a daily snapshot but should not reprocess all historical data each run. Which design choice best supports incremental processing?

- **A.** Disable checkpoints to force reprocessing
- ✅ **B.** Use streaming tables and Auto Loader to process only new data incrementally
- **C.** Use VACUUM to incrementally load new data
- **D.** Run a full CREATE OR REPLACE TABLE on the entire source every day

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use streaming tables and Auto Loader to process only new data incrementally

Streaming table và Auto Loader giữ tiến độ xử lý để các lần sau nạp dữ liệu mới phát hiện thay vì mọi tệp lịch sử.

#### Vì sao các phương án khác không phù hợp?

- **Run a full CREATE OR REPLACE TABLE on the entire source every day**: Thay bảng từ toàn bộ nguồn sẽ tính lại dữ liệu lịch sử.
- **Disable checkpoints to force reprocessing**: Xóa checkpoint làm mất tiến độ và gây xử lý lại.
- **Use VACUUM to incrementally load new data**: VACUUM xóa tệp cũ thay vì nạp dữ liệu mới.

**Tham khảo:**

- [Delta Lake table streaming reads and writes](https://docs.databricks.com/aws/en/structured-streaming/delta-lake)

</details>


---

## Q258 · single choice · — not answered

In open-source Apache Spark 3.5.6, which statement about Structured Streaming triggers is TRUE?

- ✅ **A.** Continuous trigger provides sub-second latency but has limited operator support
- **B.** All triggers provide exactly-once guarantees
- **C.** Triggers only work with Kafka
- **D.** Triggers are required to be exactly 1 second

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** Continuous trigger provides sub-second latency but has limited operator support

Trong Spark mã nguồn mở, trigger Continuous thử nghiệm hướng đến độ trễ thấp với ít phép toán được hỗ trợ và ngữ nghĩa at-least-once. Tài liệu Databricks hiện không hỗ trợ trigger này và hướng đến real-time mode.

#### Vì sao các phương án khác không phù hợp?

- **Triggers are required to be exactly 1 second**: Khoảng xử lý có thể cấu hình, không bắt buộc một giây.
- **All triggers provide exactly-once guarantees**: Xử lý continuous không bảo đảm exactly-once cho mọi trường hợp.
- **Triggers only work with Kafka**: Trigger cũng hoạt động với các nguồn tệp và Delta được hỗ trợ.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)
- [Structured Streaming Programming Guide (Spark 3.5.6)](https://spark.apache.org/docs/3.5.6/structured-streaming-programming-guide.html)

</details>


---

## Q259 · single choice · — not answered

Which of the following approaches should be used to send the Databricks Job owner an email in the case that the Job fails?

- **A.** Manually programming in an alert system in each cell of the Notebook
- **B.** MLflow Model Registry Webhooks
- ✅ **C.** Setting up an Alert in the Job page
- **D.** Setting up an Alert in the Notebook
- **E.** There is no way to notify the Job owner in the case of Job failure

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Setting up an Alert in the Job page

Cấu hình thông báo thất bại với email chủ job trên trang job; quy tắc thông báo được quản lý cùng job thay vì từng ô notebook.

#### Vì sao các phương án khác không phù hợp?

- **Manually programming in an alert system in each cell of the Notebook**: Mã cảnh báo từng ô lặp lại chức năng điều phối và dễ bỏ sót.
- **Setting up an Alert in the Notebook**: Nội dung notebook không phải nơi cấu hình thông báo job bản địa.
- **There is no way to notify the Job owner in the case of Job failure**: Có hỗ trợ thông báo job thất bại.
- **MLflow Model Registry Webhooks**: Webhook Model Registry phản ứng sự kiện mô hình, không phải chính sách lỗi job này.

**Tham khảo:**

- [Add notifications on a job](https://docs.databricks.com/aws/en/jobs/notifications)

</details>


---

## Q260 · single choice · — not answered

A Lakeflow Declarative Pipeline records data quality metrics and flow progress. Where can these be queried for SQL-based observability and debugging?

- **A.** The Key Vault audit log
- **B.** The cluster init script output only
- **C.** The DBFS trash folder
- ✅ **D.** The pipeline event log

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The pipeline event log

Event log pipeline lưu tiến độ flow và thông tin chất lượng dữ liệu dưới dạng bản ghi truy vấn được, phục vụ gỡ lỗi và giám sát bằng SQL.

#### Vì sao các phương án khác không phù hợp?

- **The cluster init script output only**: Đầu ra init script liên quan khởi tạo compute, không chứa đầy đủ metric chất lượng pipeline.
- **The Key Vault audit log**: Log Key Vault liên quan thao tác bí mật.
- **The DBFS trash folder**: Thư mục rác không phải nguồn quan sát pipeline.

**Tham khảo:**

- [Pipeline event log](https://docs.databricks.com/aws/en/ldp/monitor-event-logs)

</details>


---

## Q261 · single choice · — not answered

What is the recommended sink for maintaining exactly-once semantics in Structured Streaming?

- **A.** JSON files
- **B.** CSV files
- **C.** Text files
- ✅ **D.** Delta Lake (idempotent writes with checkpointing)

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta Lake (idempotent writes with checkpointing)

Sink Delta được quản lý kết hợp commit transaction log với checkpoint streaming để tránh commit trùng micro-batch. Bảo đảm đầu cuối vẫn cần nguồn phát lại được và logic xác định.

#### Vì sao các phương án khác không phù hợp?

- **CSV files**: File sink có thể có bảo đảm theo giao thức được hỗ trợ, nhưng bản thân CSV không có transaction log Delta.
- **JSON files**: JSON là định dạng tuần tự hóa, không phải lớp bảng giao dịch.
- **Text files**: Định dạng text tự nó không cung cấp ghi bảng giao dịch.

**Tham khảo:**

- [Processing guarantees in Lakeflow pipelines](https://docs.databricks.com/aws/en/ldp/best-practices/processing-guarantees)

</details>


---

## Q262 · single choice · — not answered

Which Lakeflow Declarative Pipelines configuration sets how often a continuous pipeline looks for new data, for example every 10 seconds?

- **A.** delta.enableChangeDataFeed
- **B.** cloudFiles.schemaLocation
- **C.** spark.sql.shuffle.partitions
- ✅ **D.** pipelines.trigger.interval

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** pipelines.trigger.interval

pipelines.trigger.interval điều khiển khoảng giữa các lần cập nhật flow khi pipeline chạy continuous. Pipeline triggered xử lý dữ liệu sẵn có rồi dừng.

#### Vì sao các phương án khác không phù hợp?

- **spark.sql.shuffle.partitions**: shuffle.partitions điều khiển song song shuffle.
- **delta.enableChangeDataFeed**: enableChangeDataFeed bật bản ghi thay đổi, không đặt chu kỳ xử lý.
- **cloudFiles.schemaLocation**: schemaLocation lưu schema suy luận, không đặt thời điểm trigger.

**Tham khảo:**

- [Triggered vs. continuous pipeline mode](https://docs.databricks.com/aws/en/ldp/concepts/pipeline-mode)
- [Auto Loader with file events overview](https://docs.databricks.com/gcp/en/ingestion/cloud-object-storage/auto-loader/file-events-explained)

</details>


---

## Q263 · single choice · — not answered

What is the purpose of the availableNow trigger in Structured Streaming?

- **A.** To run continuously
- ✅ **B.** To process all available data and stop, with optimized resource usage
- **C.** To run every hour
- **D.** To wait for new data indefinitely

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To process all available data and stop, with optimized resource usage

AvailableNow xử lý đầu vào có sẵn lúc bắt đầu, có thể qua nhiều micro-batch, rồi kết thúc. Nó phù hợp nạp tăng dần theo lịch.

#### Vì sao các phương án khác không phù hợp?

- **To run continuously**: Chạy liên tục không dừng sau khi xử lý hết dữ liệu sẵn có.
- **To wait for new data indefinitely**: AvailableNow kết thúc thay vì chờ vô hạn dữ liệu mới.
- **To run every hour**: Lịch mỗi giờ do hệ thống điều phối đặt, không phải AvailableNow tự đặt.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q264 · single choice · — not answered

After a bad deployment wrote incorrect data, the team wants to revert a Delta table to a known-good earlier state. Which operation restores the table to a prior version?

- **A.** TRUNCATE TABLE
- **B.** OPTIMIZE
- ✅ **C.** RESTORE TABLE ... TO VERSION AS OF
- **D.** DROP TABLE

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** RESTORE TABLE ... TO VERSION AS OF

RESTORE đưa phiên bản Delta trước thành trạng thái hiện tại mới, với điều kiện các tệp lịch sử cần thiết vẫn còn.

#### Vì sao các phương án khác không phù hợp?

- **TRUNCATE TABLE**: TRUNCATE làm rỗng bảng thay vì khôi phục dữ liệu trước.
- **DROP TABLE**: DROP xóa định nghĩa bảng thay vì chọn phiên bản lịch sử.
- **OPTIMIZE**: OPTIMIZE tổ chức lại tệp, không hoàn tác nội dung logic.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

</details>


---

## Q265 · single choice · — not answered

Which statement best describes the configurable ways Auto Loader can handle new source columns?

- **A.** It requires manual intervention
- ✅ **B.** With cloudFiles.schemaEvolutionMode=addNewColumns it updates the inferred schema, stops, and requires a restart; with rescue it stores unexpected fields in the rescued data column without adding them to the schema.
- **C.** It ignores new columns automatically
- **D.** It fails the pipeline

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** With cloudFiles.schemaEvolutionMode=addNewColumns it updates the inferred schema, stops, and requires a restart; with rescue it stores unexpected fields in the rescued data column without adding them to the schema.

Tiến hóa schema Auto Loader được điều khiển phía đọc. addNewColumns lưu schema mở rộng rồi dừng stream để hệ thống điều phối có thể restart; rescue giữ trường bất ngờ mà không mở rộng schema khai báo.

#### Vì sao các phương án khác không phù hợp?

- **It fails the pipeline**: addNewColumns có thể dừng stream sau khi cập nhật schema, nhưng thất bại không phải hành vi duy nhất.
- **It ignores new columns automatically**: Bỏ qua trường mới chỉ là một chế độ cấu hình, không phải hành vi chung.
- **It requires manual intervention**: Restart được quản lý và chế độ evolution có thể tránh can thiệp thủ công khi thêm cột được hỗ trợ.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q266 · single choice · — not answered

A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to a data analytics dashboard for a retail use case. The job has a Databricks SQL query that returns the number of store- level records where sales is equal to zero. The data engineer wants their entire team to be notified via a messaging webhook whenever this value is greater than 0. Which of the following approaches can the data engineer use to notify their entire team via a messaging webhook whenever the number of stores with $0 in sales is greater than zero?

- **A.** They can set up an Alert without notifications.
- **B.** They can set up an Alert with one-time notifications.
- **C.** They can set up an Alert with a custom template.
- **D.** They can set up an Alert with a new email alert destination.
- ✅ **E.** They can set up an Alert with a new webhook alert destination.

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can set up an Alert with a new webhook alert destination.

Tạo cảnh báo có điều kiện kết quả lớn hơn không và kết nối đích thông báo webhook. Điều kiện quyết định khi nào gửi, còn đích chuyển thông báo tới kênh nhóm.

#### Vì sao các phương án khác không phù hợp?

- **They can set up an Alert with a custom template.**: Mẫu tùy chỉnh thay đổi nội dung, không thay đổi đích nhận.
- **They can set up an Alert with a new email alert destination.**: Đích email không đáp ứng yêu cầu gửi qua webhook.
- **They can set up an Alert with one-time notifications.**: Thông báo một lần không đáp ứng theo dõi điều kiện liên tục.
- **They can set up an Alert without notifications.**: Tắt thông báo không thể báo cho nhóm.

**Tham khảo:**

- [Databricks SQL alerts](https://docs.databricks.com/aws/en/sql/user/alerts/)

</details>


---

## Q267 · single choice · — not answered

A team practices CI/CD and wants automated tests to run against a feature branch before merging changes to production pipelines. Which workflow correctly supports this?

- ✅ **A.** Develop in a feature branch with Git folders, run tests in CI, then merge via pull request to deploy with bundles
- **B.** Edit production notebooks directly in the prod workspace
- **C.** Copy notebooks manually between workspaces
- **D.** Skip branches and commit straight to main without review

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Develop in a feature branch with Git folders, run tests in CI, then merge via pull request to deploy with bundles

Nhánh tính năng cô lập thay đổi, CI kiểm tra chúng và merge được duyệt cung cấp mã có phiên bản để bundle triển khai production.

#### Vì sao các phương án khác không phù hợp?

- **Edit production notebooks directly in the prod workspace**: Sửa production trực tiếp bỏ qua kiểm thử nhánh và duyệt mã.
- **Skip branches and commit straight to main without review**: Commit thẳng main bỏ cổng kiểm tra trước merge được yêu cầu.
- **Copy notebooks manually between workspaces**: Sao chép notebook thủ công khó kiểm toán và tái lập.

**Tham khảo:**

- [What are Declarative Automation Bundles?](https://docs.databricks.com/aws/en/dev-tools/bundles)
- [Create and manage Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos)

</details>


---

## Q268 · single choice · — not answered

What is the main advantage of using Delta Live Tables over manual Structured Streaming pipelines?

- **A.** DLT only supports batch
- **B.** DLT is slower
- **C.** DLT does not support Python
- ✅ **D.** DLT provides automatic dependency management, data quality enforcement, and simplified declarative syntax

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** DLT provides automatic dependency management, data quality enforcement, and simplified declarative syntax

DLT, nay là Lakeflow Spark Declarative Pipelines, quản lý phụ thuộc dataset và expectations từ định nghĩa SQL hoặc Python khai báo, giúp giảm điều phối thủ công.

#### Vì sao các phương án khác không phù hợp?

- **DLT is slower**: Chậm không phải lợi thế hay thuộc tính luôn đúng.
- **DLT only supports batch**: Pipeline khai báo hỗ trợ cả batch lẫn streaming.
- **DLT does not support Python**: Python là ngôn ngữ được hỗ trợ.

**Tham khảo:**

- [Spark Declarative Pipelines on Lakeflow](https://docs.databricks.com/aws/en/ldp)

</details>


---

## Q269 · single choice · — not answered

Which statement best describes how Lakeflow Spark Declarative Pipelines determine task execution order?

- **A.** Tasks always run alphabetically by name
- **B.** You must manually number each step
- **C.** All tasks run simultaneously regardless of dependencies
- ✅ **D.** The framework infers dependencies from how datasets reference each other and runs them in the correct order

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The framework infers dependencies from how datasets reference each other and runs them in the correct order

Tham chiếu giữa dataset xác lập đồ thị phụ thuộc; framework tính dataset đầu vào trước biến đổi phía sau. Thứ tự tệp hay tên theo bảng chữ cái không quyết định thực thi.

#### Vì sao các phương án khác không phù hợp?

- **You must manually number each step**: Không cần đánh số bước thủ công để suy ra phụ thuộc dữ liệu.
- **Tasks always run alphabetically by name**: Tên không ghi đè quan hệ phụ thuộc.
- **All tasks run simultaneously regardless of dependencies**: Công việc độc lập có thể song song, nhưng dataset phụ thuộc phải chờ.

**Tham khảo:**

- [What are pipelines?](https://docs.databricks.com/gcp/en/ldp/concepts/pipelines)

</details>


---

## Q270 · single choice · — not answered

What is the correct approach for a stream-stream join with event time windows and handling late data?

- **A.** Use only processing time
- ✅ **B.** Define watermarks on both sides and use event time windows, with state cleanup based on watermark
- **C.** Convert both streams to batch
- **D.** Join without watermarks

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define watermarks on both sides and use event time windows, with state cleanup based on watermark

Watermark và ràng buộc thời gian sự kiện giới hạn thời gian mỗi phía stream-stream join giữ state đối chiếu, đồng thời cho phép dữ liệu đến muộn theo cấu hình. Hai phía cần giới hạn phù hợp để dọn state đầy đủ.

#### Vì sao các phương án khác không phù hợp?

- **Join without watermarks**: Join không có giới hạn watermark có thể giữ state vô hạn.
- **Use only processing time**: Thời gian xử lý không biểu diễn yêu cầu đến muộn theo thời gian sự kiện.
- **Convert both streams to batch**: Chuyển batch làm mất xử lý stream-stream liên tục được yêu cầu.

**Tham khảo:**

- [Apply watermarks to control data processing thresholds](https://docs.databricks.com/aws/en/structured-streaming/watermarks)

</details>


---

## Q271 · single choice · — not answered

To reduce inference and query cost on a frequently re-run dashboard query over a large Delta table, which performance technique is most directly helpful?

- **A.** Removing all clustering
- **B.** Running VACUUM more aggressively
- **C.** Disabling Photon
- ✅ **D.** Materializing the result as a materialized view that refreshes incrementally

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Materializing the result as a materialized view that refreshes incrementally

Materialized view lưu kết quả truy vấn để tái sử dụng; refresh tăng dần đủ điều kiện chỉ cập nhật kết quả bị ảnh hưởng, giảm tính lại cho dashboard. Vẫn cần xét điều kiện và chi phí refresh.

#### Vì sao các phương án khác không phù hợp?

- **Disabling Photon**: Tắt Photon bỏ tăng tốc thay vì tái sử dụng kết quả đã tính.
- **Running VACUUM more aggressively**: VACUUM xóa tệp cũ, không loại bỏ tính toán lặp.
- **Removing all clustering**: Bỏ clustering có thể tăng dữ liệu quét và không lưu sẵn kết quả.

**Tham khảo:**

- [Incremental refresh for materialized views](https://docs.databricks.com/aws/en/ldp/incremental-refresh)

</details>


---

## Q272 · single choice · — not answered

In a triggered Delta Live Tables pipeline, what happens when an expectation with ON VIOLATION FAIL UPDATE is violated?

- ✅ **A.** The affected flow update fails; invalid data or its quality rule must be corrected before successful reprocessing, while independent parallel flows do not fail solely because of this flow failure.
- **B.** The violating record is automatically corrected by DLT
- **C.** The expectation is logged but has no effect on the run
- **D.** The violating record is dropped and processing continues

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** The affected flow update fails; invalid data or its quality rule must be corrected before successful reprocessing, while independent parallel flows do not fail solely because of this flow failure.

Expectation fail-update làm thất bại lần cập nhật flow bị ảnh hưởng khi bản ghi vi phạm ràng buộc; cần sửa dữ liệu hoặc chủ động sửa quy tắc để chạy thành công.

#### Vì sao các phương án khác không phù hợp?

- **The violating record is dropped and processing continues**: Loại hàng lỗi rồi tiếp tục tương ứng DROP ROW, không phải FAIL UPDATE.
- **The violating record is automatically corrected by DLT**: Expectation kiểm tra dữ liệu, không tự tạo giá trị sửa lỗi.
- **The expectation is logged but has no effect on the run**: Chỉ ghi nhận mà không từ chối hàng tương ứng chính sách giữ lại/cảnh báo.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q273 · single choice · — not answered

A streaming Lakeflow pipeline must write its output to an Apache Kafka topic in addition to Delta tables. Which Lakeflow SDP object supports this?

- **A.** A materialized view
- **B.** A storage credential
- ✅ **C.** A sink
- **D.** An external location

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A sink

Sink đặt tên đích ghi bên ngoài như Kafka; append flow hoặc update flow ghi bản ghi đã biến đổi vào đích đó.

#### Vì sao các phương án khác không phù hợp?

- **A materialized view**: Materialized view duy trì kết quả trong bảng được quản lý, không phải điểm xuất Kafka.
- **An external location**: External location quản trị đường dẫn lưu trữ đám mây.
- **A storage credential**: Storage credential xác thực truy cập storage thay vì định nghĩa flow đầu ra Kafka.

**Tham khảo:**

- [Sinks in Lakeflow pipelines](https://docs.databricks.com/gcp/en/ldp/concepts/sinks)

</details>


---

## Q274 · single choice · — not answered

What is the recommended pattern for implementing SCD Type 2 using Delta Lake and MERGE?

- **A.** Append only with no updates
- **B.** DELETE all records and INSERT new ones
- ✅ **C.** Use MERGE to update end_date of existing records and INSERT new versions with start_date
- **D.** Create a new table for each version

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use MERGE to update end_date of existing records and INSERT new versions with start_date

SCD Type 2 đóng hiệu lực hàng hiện tại cũ và thêm phiên bản mới với ngày hiệu lực, giữ lịch sử. MERGE với dữ liệu staging phải sắp xếp hàng để thực hiện đủ hai thao tác khi cần.

#### Vì sao các phương án khác không phù hợp?

- **DELETE all records and INSERT new ones**: Thay mọi bản ghi làm mất lịch sử phiên bản.
- **Create a new table for each version**: Mỗi phiên bản một bảng gây khó truy vấn, không phải thiết kế phiên bản theo hàng thường dùng.
- **Append only with no updates**: Chỉ append mà không đóng hàng hiện tại cũ khiến khoảng hiệu lực không được giải quyết.

**Tham khảo:**

- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)
- [Table deletes, updates, and merges](https://docs.delta.io/latest/delta-update.html)

</details>


---

## Q275 · single choice · — not answered

Which approach lets a single Lakeflow Job task run a notebook with different parameter values across runs without editing the notebook code?

- **A.** Storing values only in cluster environment variables that cannot change
- **B.** Hardcoding values inside the notebook
- ✅ **C.** Job/task parameters passed to the notebook (for example via widgets)
- **D.** Creating a new notebook for every value

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Job/task parameters passed to the notebook (for example via widgets)

Tham số job và task cung cấp giá trị lúc chạy; widget notebook cho mã truy cập chúng mà không phải sửa notebook mỗi lần.

#### Vì sao các phương án khác không phù hợp?

- **Hardcoding values inside the notebook**: Giá trị ghi cứng cần sửa mã khi cấu hình đổi.
- **Creating a new notebook for every value**: Mỗi giá trị một bản notebook tạo mã trùng không cần thiết.
- **Storing values only in cluster environment variables that cannot change**: Biến môi trường không thay đổi không cung cấp giá trị khác nhau theo lần chạy.

**Tham khảo:**

- [Access parameter values from a task](https://docs.databricks.com/aws/en/jobs/parameter-use)
- [Databricks Utilities reference](https://docs.databricks.com/aws/en/dev-tools/databricks-utils)

</details>


---

## Q276 · single choice · — not answered

How can you achieve exactly-once semantics when writing to a non-idempotent sink like JDBC?

- ✅ **A.** Use foreachBatch with idempotent inserts based on a unique key or transaction semantics
- **B.** Use Complete mode only
- **C.** Use Append mode only
- **D.** Write without checkpointing

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use foreachBatch with idempotent inserts based on a unique key or transaction semantics

Bản thân foreachBatch là at-least-once; cần ghi JDBC idempotent bằng batch ID bền vững hoặc khóa nghiệp vụ duy nhất cùng giao dịch thích hợp để retry không tạo tác dụng trùng.

#### Vì sao các phương án khác không phù hợp?

- **Use Append mode only**: Append đơn thuần có thể thêm lại cùng batch sau lỗi.
- **Write without checkpointing**: Không có checkpoint, bộ đọc mất theo dõi tiến độ bền vững.
- **Use Complete mode only**: Complete đổi tập hàng xuất ra, không bảo đảm commit JDBC idempotent.

**Tham khảo:**

- [Use foreachBatch to write to arbitrary data sinks](https://docs.databricks.com/aws/en/structured-streaming/foreach)

</details>


---

## Q277 · single choice · — not answered

A data engineer runs a statement every day to copy the previous day’s sales into the table transactions. Each day’s sales are in their own file in the location "/transactions/raw".  
Today, the data engineer runs the following command to complete this task:  
After running the command today, the data engineer notices that the number of records in table transactions has not changed.  
Which of the following describes why the statement might not have copied any new records into the table?

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** The COPY INTO statement requires the table to be refreshed to view the copied rows.
- ✅ **B.** The previous day's file has already been copied into the table.
- **C.** The names of the files to be copied were not included with the FILES keyword.
- **D.** The PARQUET file format does not support COPY INTO.
- **E.** The format of the files to be copied were not included with the FORMAT_OPTIONS keyword.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** The previous day's file has already been copied into the table.

COPY INTO theo dõi tệp đã nạp vào đích và thường bỏ qua ở lần chạy sau. Nếu tệp theo ngày đã được nạp, một lần chạy thành công nữa có thể không thêm hàng nào.

#### Vì sao các phương án khác không phù hợp?

- **The format of the files to be copied were not included with the FORMAT_OPTIONS keyword.**: FORMAT_OPTIONS cung cấp tùy chọn parser, không phải lúc nào cũng bắt buộc.
- **The names of the files to be copied were not included with the FILES keyword.**: COPY INTO có thể tìm tệp trong thư mục mà không cần danh sách FILES.
- **The PARQUET file format does not support COPY INTO.**: Parquet là định dạng đầu vào COPY INTO được hỗ trợ.
- **The COPY INTO statement requires the table to be refreshed to view the copied rows.**: Insert thành công không cần REFRESH để hàng đã commit tồn tại.

**Tham khảo:**

- [Get started using COPY INTO to load data](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/copy-into)

</details>


---

## Q278 · single choice · — not answered

Which of the following describes a scenario in which a data team will want to utilize cluster pools?

- **A.** An automated report needs to be tested to identify errors.
- **B.** An automated report needs to be version-controlled across multiple collaborators.
- **C.** An automated report needs to be made reproducible.
- **D.** An automated report needs to be runnable by all stakeholders.
- ✅ **E.** An automated report needs to be refreshed as quickly as possible.

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** An automated report needs to be refreshed as quickly as possible.

Pools tái sử dụng máy cloud sẵn sàng, giảm thời gian khởi động cụm khi báo cáo cần compute nhanh. Chúng xử lý độ trễ cấp phát, không thay logic báo cáo.

#### Vì sao các phương án khác không phù hợp?

- **An automated report needs to be made reproducible.**: Tái lập cần kiểm soát mã, dữ liệu và phụ thuộc thay vì máy sẵn.
- **An automated report needs to be tested to identify errors.**: Kiểm thử xác nhận tính đúng; pool không kiểm thử logic báo cáo.
- **An automated report needs to be version-controlled across multiple collaborators.**: Quản lý phiên bản đến từ Git, không phải pool máy.
- **An automated report needs to be runnable by all stakeholders.**: Truy cập của người liên quan cần quyền và chia sẻ phù hợp, không phải pool.

**Tham khảo:**

- [Pool configuration reference](https://docs.databricks.com/aws/en/compute/pools)

</details>


---

## Q279 · single choice · — not answered

Which statement about Unity Catalog managed tables and predictive optimization is correct?

- **A.** Predictive optimization disables time travel
- ✅ **B.** Predictive optimization automatically runs OPTIMIZE and VACUUM on managed tables when cost-effective
- **C.** Predictive optimization only works on external tables
- **D.** Predictive optimization deletes tables that are not queried

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Predictive optimization automatically runs OPTIMIZE and VACUUM on managed tables when cost-effective

Predictive optimization lên lịch bảo trì có ích cho bảng managed Unity Catalog, gồm OPTIMIZE, VACUUM và thu thập thống kê, giảm bảo trì thủ công.

#### Vì sao các phương án khác không phù hợp?

- **Predictive optimization deletes tables that are not queried**: Nó loại tệp cũ qua bảo trì, không xóa cả bảng không dùng.
- **Predictive optimization disables time travel**: Nó không tắt time travel, dù retention VACUUM giới hạn lịch sử truy cập được.
- **Predictive optimization only works on external tables**: Khả năng này dành cho bảng managed, không chỉ external.

**Tham khảo:**

- [Predictive optimization for Unity Catalog managed tables](https://docs.databricks.com/aws/en/optimizations/predictive-optimization)

</details>


---

## Q280 · single choice · — not answered

What is the impact of a large state store on Structured Streaming performance?

- **A.** No impact
- ✅ **B.** Large state can cause slow processing, memory pressure, and longer checkpointing times
- **C.** It reduces checkpoint size
- **D.** It always improves performance

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Large state can cause slow processing, memory pressure, and longer checkpointing times

State lớn tăng truy cập state, nhu cầu bộ nhớ/đĩa và công việc checkpoint, làm micro-batch lâu hơn. Cần giới hạn state bằng watermark hoặc timeout phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **No impact**: Kích thước state có thể ảnh hưởng đáng kể độ trễ và tài nguyên.
- **It always improves performance**: Giữ thêm khóa không phải lúc nào cũng tăng hiệu năng.
- **It reduces checkpoint size**: State lớn hơn thường cần lưu nhiều thông tin trạng thái hơn.

**Tham khảo:**

- [What is stateful streaming?](https://docs.databricks.com/aws/en/structured-streaming/stateful-streaming)

</details>


---

## Q281 · single choice · — not answered

A maintenance job runs OPTIMIZE and VACUUM nightly on partitioned tables that use ZORDER. Which ordering and caution is correct?

- **A.** Never run OPTIMIZE and VACUUM in the same job
- ✅ **B.** Run OPTIMIZE ... ZORDER first, then VACUUM, and avoid setting retention below 7 days without disabling the safety check
- **C.** Run VACUUM RETAIN 0 HOURS first to free space immediately
- **D.** VACUUM should retain 0 hours in production to maximize savings

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run OPTIMIZE ... ZORDER first, then VACUUM, and avoid setting retention below 7 days without disabling the safety check

OPTIMIZE ghi lại dữ liệu đang dùng để compact hoặc Z-order; VACUUM sau đó xóa tệp cũ đủ điều kiện sau retention. Bảy ngày là mức an toàn mặc định; rút ngắn cần chứng minh reader và writer không cần tệp đó.

#### Vì sao các phương án khác không phù hợp?

- **Run VACUUM RETAIN 0 HOURS first to free space immediately**: Retention không giờ có thể xóa tệp thao tác đang chạy còn cần.
- **Never run OPTIMIZE and VACUUM in the same job**: Có thể điều phối an toàn cả hai lệnh bảo trì với retention phù hợp.
- **VACUUM should retain 0 hours in production to maximize savings**: Xóa tối đa không phải chính sách retention production hợp lý.

**Tham khảo:**

- [OPTIMIZE](https://docs.databricks.com/aws/en/sql/language-manual/delta-optimize)
- [VACUUM](https://docs.databricks.com/aws/en/sql/language-manual/delta-vacuum)

</details>


---

## Q282 · single choice · — not answered

When using Auto Loader with cloudFiles.schemaLocation, what is the purpose of this option?

- **A.** To specify the data location
- **B.** To specify the output format
- **C.** To set the checkpoint location
- ✅ **D.** To persist the inferred schema across stream restarts, enabling schema evolution tracking

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To persist the inferred schema across stream restarts, enabling schema evolution tracking

cloudFiles.schemaLocation lưu các phiên bản schema suy luận để Auto Loader dùng lại metadata khi restart và theo dõi tiến hóa được hỗ trợ.

#### Vì sao các phương án khác không phù hợp?

- **To specify the data location**: Đường dẫn đầu vào truyền cho load, không phải schemaLocation.
- **To set the checkpoint location**: checkpointLocation theo dõi tiến độ stream; có thể chung thư mục nhưng mục đích khác.
- **To specify the output format**: Định dạng đầu ra cấu hình ở writer.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q283 · single choice · — not answered

A scheduled job intermittently fails because an upstream file is occasionally late. The team wants the job to retry automatically but also alert if all retries are exhausted. Which combination is appropriate?

- **A.** Replace the job with an interactive notebook run by hand
- **B.** Disable retries and rely on manual reruns
- ✅ **C.** Set a retry policy on the task and configure a failure notification
- **D.** Set retries to zero and no alerts

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Set a retry policy on the task and configure a failure notification

Chính sách retry task xử lý đầu vào đến trễ tạm thời; thông báo lỗi báo lần chạy vẫn thất bại sau cơ chế retry cho phép. Cần đặt chế độ hạn chế thông báo khi retry phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Disable retries and rely on manual reruns**: Chạy lại thủ công không đáp ứng phục hồi tự động.
- **Set retries to zero and no alerts**: Không retry và không cảnh báo bỏ cả hai bảo vệ được yêu cầu.
- **Replace the job with an interactive notebook run by hand**: Chạy tương tác thủ công làm mất lịch và phục hồi tự động.

**Tham khảo:**

- [Configure and edit tasks in Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/configure-task)
- [Add notifications on a job](https://docs.databricks.com/aws/en/jobs/notifications)

</details>


---

## Q284 · single choice · — not answered

What is the difference between mapGroupsWithState and flatMapGroupsWithState?

- ✅ **A.** mapGroupsWithState returns one output row per group; flatMapGroupsWithState can return zero or more rows
- **B.** flatMapGroupsWithState is deprecated
- **C.** There is no difference
- **D.** mapGroupsWithState only works with batch

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** mapGroupsWithState returns one output row per group; flatMapGroupsWithState can return zero or more rows

mapGroupsWithState ánh xạ mỗi nhóm khóa thành một kết quả đồng thời giữ state người dùng; flatMapGroupsWithState trả iterator có thể phát không hoặc nhiều kết quả cho mỗi nhóm.

#### Vì sao các phương án khác không phù hợp?

- **There is no difference**: Số lượng kết quả đầu ra của chúng khác nhau.
- **flatMapGroupsWithState is deprecated**: Có API mới hơn, nhưng trạng thái ngừng khuyến nghị không phải khác biệt ngữ nghĩa được hỏi.
- **mapGroupsWithState only works with batch**: mapGroupsWithState hỗ trợ streaming có state, không chỉ batch.

**Tham khảo:**

- [Structured Streaming Programming Guide (Spark 3.5.6)](https://spark.apache.org/docs/3.5.6/structured-streaming-programming-guide.html)

</details>


---

## Q285 · single choice · — not answered

Which tool natively integrates with Lakeflow Declarative Pipelines to capture column-level lineage across pipeline executions in Unity Catalog?

- **A.** Cluster init scripts
- ✅ **B.** Unity Catalog lineage
- **C.** Ganglia
- **D.** The DBFS root

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Unity Catalog lineage

Unity Catalog ghi phụ thuộc bảng và cột lúc chạy, tổng hợp lineage cho workload pipeline được hỗ trợ để kiểm tra dòng dữ liệu qua các lần thực thi.

#### Vì sao các phương án khác không phù hợp?

- **Ganglia**: Ganglia cung cấp metric compute thay vì lineage cột được quản trị.
- **The DBFS root**: DBFS root là storage, không phải catalog lineage.
- **Cluster init scripts**: Init script cấu hình khởi động compute, không thu lineage cột bản địa.

**Tham khảo:**

- [Lineage in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-lineage)

</details>


---

## Q286 · single choice · — not answered

How does Delta Lake handle concurrent writes during a MERGE operation?

- **A.** It only supports single-writer scenarios
- **B.** It allows conflicts and data corruption
- **C.** It blocks all writes
- ✅ **D.** It uses optimistic concurrency control and detects conflicting commits; a conflicting MERGE can fail and require retry handling.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** It uses optimistic concurrency control and detects conflicting commits; a conflicting MERGE can fail and require retry handling.

Delta dùng kiểm soát đồng thời lạc quan và kiểm tra xung đột trước commit để giữ nhất quán giao dịch. MERGE xung đột có thể thất bại và cần xử lý retry rõ ràng; không phải lúc nào cũng tự retry.

#### Vì sao các phương án khác không phù hợp?

- **It allows conflicts and data corruption**: Phát hiện xung đột ngăn commit ghi không tương thích thành dữ liệu hỏng.
- **It blocks all writes**: Ghi đồng thời độc lập có thể tiếp tục; Delta không chặn toàn bộ ghi.
- **It only supports single-writer scenarios**: Hỗ trợ nhiều writer theo quy tắc isolation và xung đột.

**Tham khảo:**

- [Isolation levels and write conflicts](https://docs.databricks.com/aws/en/optimizations/isolation)

</details>


---

## Q287 · single choice · — not answered

A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which of the following locations can the data engineer review their permissions on the table?

- **A.** Dashboards
- **B.** Repos
- **C.** Databricks Filesystem
- **D.** Jobs
- ✅ **E.** Data Explorer

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Data Explorer

Data Explorer, nay là Catalog Explorer, hiển thị siêu dữ liệu và quyền bảng để người dùng xem quyền đã cấp trong phạm vi được phép nhìn thấy.

#### Vì sao các phương án khác không phù hợp?

- **Databricks Filesystem**: DBFS là giao diện hệ thống tệp, không phải giao diện xem quyền bảng.
- **Jobs**: Jobs quản lý thực thi quy trình, không phải quyền đối tượng catalog.
- **Dashboards**: Dashboard tiêu thụ dữ liệu, không phải giao diện quản lý ACL bảng.
- **Repos**: Repos/Git folders quản lý mã theo phiên bản, không quản lý quyền bảng.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q288 · single choice · — not answered

When orchestrating an end-to-end workflow that ingests with Auto Loader, transforms with a declarative pipeline, and refreshes a downstream report, what is the correct design order of operations?

- **A.** Run all three tasks in parallel with no dependencies
- ✅ **B.** Ingest raw data, then run transformations, then refresh the downstream report, using task dependencies
- **C.** Transform first, then ingest, then report
- **D.** Refresh the report, then ingest, then transform

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Ingest raw data, then run transformations, then refresh the downstream report, using task dependencies

Phụ thuộc phải đặt nạp trước biến đổi và biến đổi trước báo cáo để mỗi task sau dùng dữ liệu đã chuẩn bị thành công.

#### Vì sao các phương án khác không phù hợp?

- **Refresh the report, then ingest, then transform**: Báo cáo trước khi nạp có thể hiển thị dữ liệu cũ.
- **Run all three tasks in parallel with no dependencies**: Task song song không ràng buộc có thể đọc đầu vào chưa hoàn tất.
- **Transform first, then ingest, then report**: Biến đổi trước khi nạp bỏ lỡ dữ liệu thô mới.

**Tham khảo:**

- [Configure task dependencies](https://docs.databricks.com/aws/en/jobs/run-if)

</details>


---

## Q289 · single choice · — not answered

What is the correct pattern for implementing sessionization (tracking user sessions) in Structured Streaming?

- **A.** It is not possible
- ✅ **B.** Use flatMapGroupsWithState with a user-defined state class to track session state with timeouts
- **C.** Use window aggregation only
- **D.** Use simple groupBy

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use flatMapGroupsWithState with a user-defined state class to track session state with timeouts

flatMapGroupsWithState có thể giữ state phiên tùy chỉnh theo người dùng và kết thúc phiên bằng timeout, cho phép đầu ra linh hoạt. session_window có sẵn cũng phù hợp trong một số trường hợp.

#### Vì sao các phương án khác không phù hợp?

- **Use simple groupBy**: Chỉ group theo khóa không tự định nghĩa khoảng ngắt hay kết thúc phiên.
- **Use window aggregation only**: Cửa sổ cố định đơn thuần không tạo ranh giới phiên theo khoảng bất hoạt tùy ý; session window chuyên dụng có thể làm.
- **It is not possible**: API stateful và session window có hỗ trợ tạo phiên.

**Tham khảo:**

- [Structured Streaming Programming Guide (Spark 3.5.6)](https://spark.apache.org/docs/3.5.6/structured-streaming-programming-guide.html)

</details>


---

## Q290 · single choice · — not answered

To keep secrets such as connection tokens out of notebook code, where should a Databricks data engineer store and reference them?

- **A.** Hardcoded as plaintext in the notebook
- **B.** In the table comments
- **C.** In a public Git repository
- ✅ **D.** In a Databricks secret scope (optionally backed by Azure Key Vault), referenced with dbutils.secrets.get

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** In a Databricks secret scope (optionally backed by Azure Key Vault), referenced with dbutils.secrets.get

Secret scope lưu thông tin xác thực có phân quyền; dbutils.secrets.get lấy lúc chạy, tránh giá trị rõ trong mã notebook.

#### Vì sao các phương án khác không phù hợp?

- **Hardcoded as plaintext in the notebook**: Giá trị rõ làm lộ token cho người đọc mã và lịch sử phiên bản.
- **In a public Git repository**: Repository công khai làm lộ bí mật rộng rãi.
- **In the table comments**: Comment bảng là metadata mô tả, không phải nơi lưu thông tin xác thực an toàn.

**Tham khảo:**

- [Secret management](https://docs.databricks.com/aws/en/security/secrets)
- [Databricks Utilities reference](https://docs.databricks.com/aws/en/dev-tools/databricks-utils)

</details>


---

## Q291 · single choice · — not answered

What is the recommended approach for testing Structured Streaming pipelines?

- **A.** Convert the stream to a batch job for all testing
- **B.** Disable checkpointing so each test run starts clean
- ✅ **C.** Use a memory or Delta sink, control input with a rate or file source, and use availableNow/once triggers to process small deterministic batches
- **D.** Run the pipeline only in production and inspect output manually

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a memory or Delta sink, control input with a rate or file source, and use availableNow/once triggers to process small deterministic batches

Đầu vào kiểm thử kiểm soát được và trigger hữu hạn cho phép xử lý lượng dữ liệu xác định rồi kiểm tra kết quả ở memory hoặc sink Delta riêng. Dùng checkpoint riêng; nguồn rate cần giới hạn hoặc kỳ vọng kiểm soát được.

#### Vì sao các phương án khác không phù hợp?

- **Run the pipeline only in production and inspect output manually**: Chỉ kiểm tra thủ công production không cung cấp bằng chứng lặp lại trước triển khai.
- **Disable checkpointing so each test run starts clean**: Tắt checkpoint toàn bộ không kiểm tra được tính đúng khi restart và tiến độ.
- **Convert the stream to a batch job for all testing**: Chỉ test batch bỏ sót state, watermark và phục hồi streaming.

**Tham khảo:**

- [Unit testing for Databricks notebooks](https://docs.databricks.com/aws/en/notebooks/testing)
- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q292 · single choice · — not answered

A pipeline's transformation logic must be unit tested independently of Databricks before deployment. Which practice best enables testable code?

- ✅ **A.** Factor transformation logic into Python functions/modules that accept and return DataFrames, then test them with a test framework
- **B.** Write all logic inline in notebook cells with no functions
- **C.** Test only in production after deployment
- **D.** Avoid functions because notebooks cannot import them

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Factor transformation logic into Python functions/modules that accept and return DataFrames, then test them with a test framework

Tách biến đổi DataFrame thành hàm phân chia logic nghiệp vụ với điều phối notebook, cho phép kiểm tra đầu vào/đầu ra nhỏ bằng môi trường Spark kiểm thử cục bộ.

#### Vì sao các phương án khác không phù hợp?

- **Write all logic inline in notebook cells with no functions**: Logic viết trực tiếp trong ô khó gọi trong unit test độc lập.
- **Test only in production after deployment**: Test production xảy ra sau thời điểm kiểm tra trước triển khai được yêu cầu.
- **Avoid functions because notebooks cannot import them**: Notebook có thể import module và hàm Python tái sử dụng.

**Tham khảo:**

- [Unit testing for Databricks notebooks](https://docs.databricks.com/aws/en/notebooks/testing)

</details>


---

## Q293 · single choice · — not answered

When reading from Kafka with Structured Streaming, what is the purpose of the startingOffsets option?

- **A.** To set the checkpoint location
- **B.** To specify the Kafka broker
- ✅ **C.** To control where to start reading: earliest, latest, or specific offsets
- **D.** To configure the topic name

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To control where to start reading: earliest, latest, or specific offsets

startingOffsets chọn offset Kafka ban đầu cho truy vấn mới: earliest, latest hoặc offset rõ theo partition. Khi restart, checkpoint đã có quyết định tiến độ tiếp tục.

#### Vì sao các phương án khác không phù hợp?

- **To specify the Kafka broker**: Địa chỉ broker cấu hình bằng kafka.bootstrap.servers.
- **To set the checkpoint location**: checkpointLocation lưu tiến độ streaming riêng.
- **To configure the topic name**: subscribe hoặc assign chọn topic và partition.

**Tham khảo:**

- [Connect to Apache Kafka](https://docs.databricks.com/aws/en/connect/streaming/kafka)

</details>


---

## Q294 · single choice · — not answered

Which SQL DDL statement creates an empty Delta table named table_name with employeeId STRING, startDate DATE, and avgRating FLOAT, replacing the existing table if one already has that name?

- **A.** CREATE OR REPLACE TABLE table_name WITH COLUMNS ( employeeId STRING, startDate DATE, avgRating FLOAT ) USING DELTA
- ✅ **B.** CREATE OR REPLACE TABLE table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )
- **C.** CREATE TABLE IF NOT EXISTS table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )
- **D.** CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** CREATE OR REPLACE TABLE table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )

CREATE OR REPLACE TABLE với định nghĩa cột đã nêu tạo bảng rỗng và thay bảng cùng tên nếu có. Databricks mặc định dùng Delta khi không chỉ định provider.

#### Vì sao các phương án khác không phù hợp?

- **CREATE OR REPLACE TABLE table_name WITH COLUMNS ( employeeId STRING, startDate DATE, avgRating FLOAT ) USING DELTA**: WITH COLUMNS không phải cú pháp định nghĩa cột CREATE TABLE theo ngữ pháp SQL.
- **CREATE TABLE IF NOT EXISTS table_name ( employeeId STRING, startDate DATE, avgRating FLOAT )**: IF NOT EXISTS giữ nguyên bảng đã có thay vì thay thế.
- **CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT**: AS SELECT cần truy vấn hợp lệ và tạo hàng thay vì chỉ khai báo schema rỗng này.

**Tham khảo:**

- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q295 · single choice · — not answered

Which statement about choosing job compute versus an existing all-purpose cluster for a production scheduled pipeline is correct?

- **A.** Scheduled jobs must reuse interactive clusters
- **B.** All-purpose clusters are always cheaper for scheduled jobs
- **C.** Job compute cannot access Unity Catalog
- ✅ **D.** Job compute is recommended for production scheduled runs because it is cheaper per DBU and isolated per run

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Job compute is recommended for production scheduled runs because it is cheaper per DBU and isolated per run

Job compute được thiết kế cho workload tự động với vòng đời theo lần chạy, tách biệt hoạt động tương tác. Giá classic jobs khác all-purpose; tổng chi phí còn tùy workload và loại compute.

#### Vì sao các phương án khác không phù hợp?

- **All-purpose clusters are always cheaper for scheduled jobs**: Compute all-purpose không phải luôn rẻ hơn cho production theo lịch.
- **Job compute cannot access Unity Catalog**: Job compute cấu hình phù hợp có thể dùng Unity Catalog.
- **Scheduled jobs must reuse interactive clusters**: Job theo lịch có thể cấp job compute thay vì dùng lại cluster tương tác.

**Tham khảo:**

- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q296 · single choice · — not answered

What is the impact of using dropDuplicates on a streaming DataFrame without a watermark?

- **A.** Spark automatically applies a default 10-minute watermark
- **B.** Duplicates are still emitted because state is not used
- **C.** It reduces shuffle and improves performance
- ✅ **D.** Streaming state grows without bound because every unique key must be retained indefinitely to detect duplicates

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Streaming state grows without bound because every unique key must be retained indefinitely to detect duplicates

Không có watermark hay giới hạn hết hạn khác, khử trùng streaming phải giữ vô hạn khóa đã thấy để nhận biết bản trùng đến muộn tùy ý, khiến state tiếp tục tăng.

#### Vì sao các phương án khác không phù hợp?

- **It reduces shuffle and improves performance**: Giữ state vô hạn gây rủi ro tài nguyên, không tự tăng hiệu năng.
- **Duplicates are still emitted because state is not used**: dropDuplicates dùng state để chặn khóa lặp.
- **Spark automatically applies a default 10-minute watermark**: Spark không tự đặt watermark mười phút cho thao tác này.

**Tham khảo:**

- [What is stateful streaming?](https://docs.databricks.com/aws/en/structured-streaming/stateful-streaming)
- [Apply watermarks to control data processing thresholds](https://docs.databricks.com/aws/en/structured-streaming/watermarks)

</details>


---

## Q297 · single choice · — not answered

A data engineer has been given a new record of data: id STRING = 'a1' rank INTEGER = 6 rating FLOAT = 9.4 Which of the following SQL commands can be used to append the new record to an existing Delta table my_table?

- **A.** INSERT VALUES ( 'a1' , 6, 9.4) INTO my_table
- ✅ **B.** INSERT INTO my_table VALUES ('a1', 6, 9.4)
- **C.** my_table UNION VALUES ('a1', 6, 9.4)
- **D.** UPDATE VALUES ('a1', 6, 9.4) my_table
- **E.** UPDATE my_table VALUES ('a1', 6, 9.4)

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** INSERT INTO my_table VALUES ('a1', 6, 9.4)

INSERT INTO nối thêm dòng mới, VALUES cung cấp trường theo thứ tự cột bảng. UPDATE thay vào đó sửa dòng đã có.

#### Vì sao các phương án khác không phù hợp?

- **my_table UNION VALUES ('a1', 6, 9.4)**: UNION kết hợp kết quả truy vấn; đây không phải lệnh chèn hợp lệ.
- **INSERT VALUES ( 'a1' , 6, 9.4) INTO my_table**: INSERT cần INTO tên bảng trước VALUES, không sau bộ giá trị.
- **UPDATE my_table VALUES ('a1', 6, 9.4)**: UPDATE dùng phép gán SET và điều kiện tùy chọn, không dùng cú pháp VALUES này để thêm dòng.
- **UPDATE VALUES ('a1', 6, 9.4) my_table**: Từ khóa UPDATE và thứ tự mệnh đề không biểu diễn chèn dòng hợp lệ.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q298 · single choice · — not answered

A team needs to query data quality metrics, dropped-record counts, and flow progress for a Lakeflow Declarative Pipeline over the last week to build a monitoring dashboard. What is the recommended source?

- **A.** Open each run in the UI and copy numbers by hand
- ✅ **B.** Query the pipeline event log (optionally published to a Delta table) with SQL
- **C.** Inspect Azure Key Vault entries
- **D.** Read the cluster's local disk logs manually

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Query the pipeline event log (optionally published to a Delta table) with SQL

Truy vấn event log pipeline để tổng hợp kiểm tra chất lượng, hàng bị loại và tiến độ flow theo thời gian; bản ghi có cấu trúc phù hợp làm dashboard giám sát.

#### Vì sao các phương án khác không phù hợp?

- **Read the cluster's local disk logs manually**: Log cục bộ cluster kém trực tiếp và khó tổng hợp chất lượng xuyên lần chạy.
- **Open each run in the UI and copy numbers by hand**: Sao chép tay dễ lỗi và không tạo khả năng giám sát SQL lặp lại.
- **Inspect Azure Key Vault entries**: Key Vault lưu hoặc kiểm toán bí mật, không chứa metric chất lượng hàng pipeline.

**Tham khảo:**

- [Pipeline event log](https://docs.databricks.com/aws/en/ldp/monitor-event-logs)

</details>


---

## Q299 · single choice · — not answered

In standard PySpark, what happens when you call toDelta(...) on a DataStreamWriter while trying to write a stream to a Delta table, even if partitionBy has been configured?

- **A.** Data is automatically partitioned by the specified column, with optimized writes for each partition
- **B.** Partitioning is ignored
- ✅ **C.** It causes an error
- **D.** Partitions must be manually created

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** It causes an error

Gọi toDelta trên DataStreamWriter PySpark chuẩn gây AttributeError vì phương thức đó không tồn tại. Cần dùng phương thức được quy định như toTable hoặc format("delta") với start, cùng checkpoint và thiết lập partition phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Partitioning is ignored**: Lời gọi lỗi trước khi sink xử lý partition; đây không phải trường hợp âm thầm bỏ qua thiết lập partition.
- **Data is automatically partitioned by the specified column, with optimized writes for each partition**: Phương thức writer không tồn tại không thể tạo tệp partition hay bật tối ưu ghi.
- **Partitions must be manually created**: Tạo partition thủ công không bổ sung được phương thức Python thiếu; writer hợp lệ tạo thư mục đầu ra khi cần.

**Tham khảo:**

- [PySpark DataStreamWriter API](https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/api/pyspark.sql.streaming.DataStreamWriter.html)
- [Delta Lake table streaming reads and writes](https://docs.databricks.com/aws/en/structured-streaming/delta-lake)

</details>


---

## Q300 · single choice · — not answered

A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which of the following code blocks can the data engineer use to complete this task?

- **A.** `function add_integers(x, y): x + y`
- **B.** `def add_integers(x, y): print(x + y)`
- **C.** `function add_integers(x, y): return x + y`
- ✅ **D.** `def add_integers(x, y): return x + y`
- **E.** `def add_integers(x, y): x + y`

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** def add_integers(x, y): return x + y

def add_integers(x, y) với return x + y định nghĩa hàm Python trả tổng. Lệnh return thụt lề chuyển giá trị cho nơi gọi.

#### Vì sao các phương án khác không phù hợp?

- **function add_integers(x, y): return x + y**: function không phải từ khóa định nghĩa hàm Python.
- **function add_integers(x, y): x + y**: function không hợp lệ trong Python và biểu thức không được trả về.
- **def add_integers(x, y): print(x + y)**: print hiển thị tổng nhưng hàm trả None.
- **def add_integers(x, y): x + y**: Biểu thức không có return khiến hàm trả None.

**Tham khảo:**

- [Python control flow tools](https://docs.python.org/3/tutorial/controlflow.html)

</details>


---

## Q301 · single choice · — not answered

A data engineer has realized that the data files associated with a Delta table are incredibly small. They want to compact the small files to form larger files to improve performance. Which of the following keywords can be used to compact the small files?

- **A.** REDUCE
- **B.** COMPACTION
- ✅ **C.** OPTIMIZE
- **D.** VACUUM
- **E.** REPARTITION

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** OPTIMIZE

OPTIMIZE ghi lại tệp nhỏ thành bố cục hiệu quả hơn, giảm chi phí mở tệp khi đọc bảng sau đó mà không đổi bản ghi logic.

#### Vì sao các phương án khác không phù hợp?

- **REDUCE**: REDUCE không phải lệnh SQL nén gộp tệp Delta được quy định.
- **COMPACTION**: COMPACTION là khái niệm, không phải lệnh SQL dùng ở đây.
- **REPARTITION**: REPARTITION đổi phân vùng thực thi DataFrame/truy vấn, không phải từ khóa bảo trì bảng trực tiếp được hỏi.
- **VACUUM**: VACUUM xóa tệp cũ không dùng sau thời gian lưu giữ, không gộp tệp nhỏ đang hoạt động.

**Tham khảo:**

- [Optimize data file layout](https://docs.databricks.com/aws/en/tables/operations/optimize)

</details>


---

## Q302 · single choice · — not answered

In a legacy Databricks Hive-metastore workspace using the default warehouse root dbfs:/user/hive/warehouse, a data engineer executes CREATE DATABASE IF NOT EXISTS customer360 without a LOCATION clause. Under which warehouse root is the new database directory created?

- **A.** dbfs:/user/hive/database/customer360
- **B.** dbfs:/user/hive/customer360
- ✅ **C.** dbfs:/user/hive/warehouse
- **D.** dbfs:/user/hive/database

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** dbfs:/user/hive/warehouse

Không có LOCATION, thư mục database Hive cũ được tạo dưới gốc warehouse đã cấu hình. Theo giả định rõ trong đề, gốc đó là dbfs:/user/hive/warehouse; database có thư mục con riêng bên dưới.

#### Vì sao các phương án khác không phù hợp?

- **dbfs:/user/hive/database/customer360**: Đường dẫn database này không phải vị trí Hive warehouse thông thường.
- **dbfs:/user/hive/customer360**: Đường dẫn này thiếu thư mục cha warehouse thông thường.
- **dbfs:/user/hive/database**: database không phải tên thư mục warehouse chuẩn.

**Tham khảo:**

- [CREATE SCHEMA](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-schema)

</details>


---

## Q303 · single choice · — not answered

Which of the following SQL keywords can be used to convert a table from a long format to a wide format?

- **A.** TRANSFORM
- **B.** SUM
- **C.** WHERE
- ✅ **D.** PIVOT
- **E.** CONVERT

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** PIVOT

PIVOT biến giá trị khác nhau trên dòng thành các cột đầu ra đồng thời tổng hợp chỉ số, tạo kết quả rộng hơn.

#### Vì sao các phương án khác không phù hợp?

- **CONVERT**: CONVERT liên quan đổi định dạng/kiểu, không xoay giá trị dòng thành cột.
- **WHERE**: WHERE lọc dòng, không tạo cột pivot.
- **TRANSFORM**: TRANSFORM không phải mệnh đề SQL chuyên đổi dữ liệu dài thành cột pivot.
- **SUM**: SUM tổng hợp chỉ số nhưng tự nó không xoay giá trị chiều thành cột.

**Tham khảo:**

- [PIVOT clause](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-pivot)

</details>


---

## Q304 · single choice · — not answered

A data engineer needs to apply custom logic to identify employees with more than 5 years of experience in array column employees in table stores. The custom logic should create a new column exp_employees that is an array of all of the employees with more than 5 years of experience for each row. In order to apply this custom logic at scale, the data engineer wants to use the FILTER higher-order function. Which of the following code blocks successfully completes this task?

- **A.** `SELECT store_id, employees, FILTER (exp_employees, years_exp > 5) AS exp_employees FROM stores;`
- **B.** `SELECT store_id, employees, FILTER (employees, years_exp > 5) AS exp_employees FROM stores;`
- **C.** `SELECT store_id, employees, FILTER (exp_employees, i -> i.years_exp > 5) AS exp_employees FROM stores;`
- **D.** `SELECT store_id, employees, CASE WHEN employees.years_exp > 5 THEN employees ELSE NULL END AS exp_employees FROM stores;`
- ✅ **E.** `SELECT store_id, employees, FILTER (employees, i -> i.years_exp > 5) AS exp_employees FROM stores;`

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SELECT store_id, employees, FILTER (employees, i -> i.years_exp > 5) AS exp_employees FROM stores;

FILTER(employees, i -> i.years_exp > 5) xét từng nhân viên và giữ phần tử thỏa điều kiện. Mảng kết quả được đặt tên exp_employees.

#### Vì sao các phương án khác không phù hợp?

- **SELECT store_id, employees, FILTER (exp_employees, years_exp > 5) AS exp_employees FROM stores;**: Đoạn này đọc tên đầu ra và thiếu lambda cho phần tử.
- **SELECT store_id, employees, FILTER (employees, years_exp > 5) AS exp_employees FROM stores;**: Điều kiện thiếu lambda ràng buộc từng nhân viên.
- **SELECT store_id, employees, CASE WHEN employees.years_exp > 5 THEN employees ELSE NULL END AS exp_employees FROM stores;**: CASE xét biểu thức toàn hàng thay vì lọc từng phần tử mảng.
- **SELECT store_id, employees, FILTER (exp_employees, i -> i.years_exp > 5) AS exp_employees FROM stores;**: Nó lọc exp_employees thay vì mảng nguồn employees.

**Tham khảo:**

- [filter function](https://docs.databricks.com/aws/en/sql/language-manual/functions/filter)

</details>


---

## Q305 · single choice · — not answered

A PySpark Structured Streaming query runs on supported classic Databricks compute. Which DataStreamWriter trigger call requests micro-batch processing at five-second intervals?

- **A.** trigger(once="5 seconds")
- **B.** trigger("5 seconds")
- ✅ **C.** trigger(processingTime="5 seconds")
- **D.** trigger(continuous="5 seconds")

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** trigger(processingTime="5 seconds")

trigger(processingTime="5 seconds") cấu hình chu kỳ xử lý micro-batch. Nếu batch mất hơn năm giây, Spark không bảo đảm nhịp hoàn tất chính xác năm giây.

#### Vì sao các phương án khác không phù hợp?

- **trigger("5 seconds")**: Phương thức Python dùng đối số có tên để chọn trigger, không phải khoảng thời gian dạng vị trí này.
- **trigger(continuous="5 seconds")**: continuous chọn chế độ xử lý thử nghiệm khác, không phải micro-batch năm giây.
- **trigger(once="5 seconds")**: once là thiết lập Boolean chạy một lần, không phải chuỗi chu kỳ lặp.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q306 · single choice · — not answered

In order for Structured Streaming to reliably track the exact progress of the processing so that it can handle any kind of failure by restarting and/or reprocessing, which of the following two approaches is used by Spark to record the offset range of the data being processed in each trigger?

- **A.** Replayable Sources and Idempotent Sinks
- **B.** Write-ahead Logs and Idempotent Sinks
- **C.** Checkpointing and Idempotent Sinks
- ✅ **D.** Checkpointing and Write-ahead Logs
- **E.** Structured Streaming cannot record the offset range of the data being processed in each trigger.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Checkpointing and Write-ahead Logs

Tiến độ checkpoint cùng log offset/commit ghi trước lưu dải đầu vào của mỗi micro-batch, giúp khôi phục để tiếp tục hoặc phát lại nhất quán.

#### Vì sao các phương án khác không phù hợp?

- **Structured Streaming cannot record the offset range of the data being processed in each trigger.**: Structured Streaming có lưu tiến độ cho nguồn được hỗ trợ và truy vấn dùng checkpoint.
- **Replayable Sources and Idempotent Sinks**: Khả năng phát lại và idempotency là điều kiện/đặc tính khôi phục, không phải hai cơ chế ghi tiến độ được hỏi.
- **Write-ahead Logs and Idempotent Sinks**: Sink idempotent kiểm soát tác động ghi lặp, không ghi log offset đầu vào.
- **Checkpointing and Idempotent Sinks**: Checkpoint có liên quan nhưng đặc tính sink không thay log tiến độ ghi trước.

**Tham khảo:**

- [Structured Streaming overview](https://spark.apache.org/docs/latest/streaming/index.html)

</details>


---

## Q307 · single choice · — not answered

A data engineer needs access to a table new_table, but they do not have the correct permissions. They can ask the table owner for permission, but they do not know who the table owner is. Which of the following approaches can be used to identify the owner of new_table?

- **A.** All of these options can be used to identify the owner of the table
- **B.** Review the Permissions tab in the table's page in Data Explorer
- **C.** Review the Owner field in the table's page in the cloud storage solution
- ✅ **D.** Review the Owner field in the table's page in Data Explorer
- **E.** There is no way to identify the owner of the table

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Review the Owner field in the table's page in Data Explorer

Chi tiết bảng trong Catalog Explorer, trước là Data Explorer, xác định chủ bảng để kỹ sư yêu cầu quyền từ principal phụ trách.

#### Vì sao các phương án khác không phù hợp?

- **Review the Permissions tab in the table's page in Data Explorer**: Mục Permissions tập trung vào grant; trường Owner chỉ trực tiếp chủ sở hữu.
- **There is no way to identify the owner of the table**: Metadata catalog hiển thị chủ sở hữu cho người xem được phép.
- **All of these options can be used to identify the owner of the table**: Các lựa chọn có phát biểu sai nên không phải mọi cách đều dùng được.
- **Review the Owner field in the table's page in the cloud storage solution**: Chủ tệp cloud không nhất thiết trùng chủ bảng catalog.

**Tham khảo:**

- [Manage privileges in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges)

</details>


---

## Q308 · single choice · — not answered

Which of the following describes the relationship between Gold tables and Silver tables?

- **A.** Gold tables are more likely to contain more data than Silver tables.
- **B.** Gold tables are more likely to contain a less refined view of data than Silver tables.
- ✅ **C.** Gold tables are more likely to contain aggregations than Silver tables.
- **D.** Gold tables are more likely to contain valuable data than Silver tables.
- **E.** Gold tables are more likely to contain truthful data than Silver tables.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Gold tables are more likely to contain aggregations than Silver tables.

Bảng Gold thường tổng hợp bản ghi Silver đã kiểm tra thành chỉ số sẵn dùng cho kinh doanh, giảm tính toán lặp cho dashboard và báo cáo.

#### Vì sao các phương án khác không phù hợp?

- **Gold tables are more likely to contain valuable data than Silver tables.**: Cả hai lớp đều có thể chứa dữ liệu giá trị; giá trị không phải điểm phân biệt kiến trúc.
- **Gold tables are more likely to contain a less refined view of data than Silver tables.**: Gold thường tinh chỉnh và hướng tiêu thụ hơn, không kém tinh chỉnh.
- **Gold tables are more likely to contain more data than Silver tables.**: Tổng hợp thường giảm số dòng; Gold không được định nghĩa bằng nhiều dữ liệu hơn.
- **Gold tables are more likely to contain truthful data than Silver tables.**: Cả hai phải giữ dữ kiện đúng; mức trung thực không phải điểm phân biệt Silver/Gold.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q309 · single choice · — not answered

A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Production mode using the Continuous Pipeline Mode. Assuming previously unprocessed data exists and all definitions are valid, what is the expected outcome after clicking Start to update the pipeline?

- **A.** All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated.
- **B.** All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing.
- **C.** All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing.
- ✅ **D.** All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will be deployed for the update and terminated when the pipeline is stopped.
- **E.** All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will be deployed for the update and terminated when the pipeline is stopped.

Chế độ continuous tiếp tục xử lý dữ liệu mới đến khi dừng. Trong production, compute được quản lý theo vòng đời cập nhật đang chạy thay vì giữ để thử nghiệm phát triển.

#### Vì sao các phương án khác không phù hợp?

- **All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing.**: Giữ compute để thử nghiệm thêm mô tả hành vi development thay vì production.
- **All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused.**: Continuous tiếp tục xử lý, không cố ý nhàn rỗi vĩnh viễn sau một lần cập nhật.
- **All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated.**: Dừng sau một lần cập nhật là triggered mode, không phải continuous.
- **All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing.**: Một lần cập nhật rồi giữ compute thử nghiệm mô tả triggered development, không phải continuous production.

**Tham khảo:**

- [Pipeline source code and update modes](https://docs.databricks.com/aws/en/ldp/concepts/pipelines)

</details>


---

## Q310 · single choice · — not answered

Which processing API model does the Auto Loader cloudFiles source use?

- **A.** Batch workloads
- **B.** Machine learning workloads
- ✅ **C.** Streaming workloads
- **D.** Serverless workloads

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** Streaming workloads

Auto Loader cung cấp cloudFiles như nguồn Structured Streaming. Cùng API streaming có thể chạy liên tục hoặc nạp tăng dần hữu hạn bằng AvailableNow; serverless mô tả môi trường compute thay vì mô hình API.

#### Vì sao các phương án khác không phù hợp?

- **Machine learning workloads**: Machine learning có thể dùng dữ liệu đã nạp nhưng không phải mô hình API nguồn cloudFiles.
- **Serverless workloads**: Serverless là mô hình compute có thể chạy workload nạp được hỗ trợ, không phải API xử lý nguồn.
- **Batch workloads**: Auto Loader có thể chạy tăng dần kiểu batch nhưng vẫn dùng Structured Streaming thay vì nguồn batch spark.read.

**Tham khảo:**

- [What is Auto Loader?](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)
- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q311 · single choice · — not answered

A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start. Which of the following actions can the data engineer perform to improve the start up time for the clusters used for the Job?

- **A.** They can use jobs clusters instead of all-purpose clusters
- **B.** They can configure the clusters to autoscale for larger data sizes
- **C.** They can use endpoints available in Databricks SQL
- ✅ **D.** They can use clusters that are from a cluster pool
- **E.** They can configure the clusters to be single-node

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can use clusters that are from a cluster pool

Instance pool giữ sẵn instance đám mây để cluster nhận, giảm thời gian chờ cấp VM khi cluster job theo lịch khởi động.

#### Vì sao các phương án khác không phù hợp?

- **They can use endpoints available in Databricks SQL**: SQL warehouse là compute SQL chuyên dụng, không trực tiếp cấp instance sẵn cho cluster job hiện có.
- **They can use jobs clusters instead of all-purpose clusters**: Job cluster cung cấp cô lập và vòng đời lượt chạy nhưng vẫn chờ cấp phát khởi động nếu thiếu pool sẵn.
- **They can configure the clusters to be single-node**: Bố cục một nút đổi năng lực thực thi, không bảo đảm nhận VM nhanh hơn cho tác vụ.
- **They can configure the clusters to autoscale for larger data sizes**: Autoscaling điều chỉnh nhu cầu worker nhưng tự nó không giữ instance cấp sẵn.

**Tham khảo:**

- [Pool configuration reference](https://docs.databricks.com/aws/en/compute/pools)

</details>


---

## Q312 · single choice · — not answered

A data analysis team has noticed that their Databricks SQL queries are running too slowly when connected to their always-on SQL endpoint. They claim that this issue is present when many members of the team are running small queries simultaneously. They ask the data engineering team for help. The data engineering team notices that each of the team’s queries uses the same SQL endpoint. Which of the following approaches can the data engineering team use to improve the latency of the team’s queries?

- **A.** They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to “Reliability Optimized.”
- **B.** They can turn on the Serverless feature for the SQL endpoint.
- ✅ **C.** They can increase the maximum bound of the SQL endpoint’s scaling range.
- **D.** They can turn on the Auto Stop feature for the SQL endpoint.
- **E.** They can increase the cluster size of the SQL endpoint.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can increase the maximum bound of the SQL endpoint’s scaling range.

Tăng số cluster tối đa cho phép warehouse scale-out để phục vụ nhiều truy vấn nhỏ đồng thời, giảm tranh chấp và hàng chờ trên endpoint dùng chung.

#### Vì sao các phương án khác không phù hợp?

- **They can increase the cluster size of the SQL endpoint.**: Cluster lớn hơn giúp truy vấn riêng nặng; tăng năng lực đồng thời phù hợp trực tiếp hơn với nhiều truy vấn nhỏ cùng lúc.
- **They can turn on the Auto Stop feature for the SQL endpoint.**: Auto Stop giảm thời gian nhàn thay vì thêm năng lực lúc bận.
- **They can turn on the Serverless feature for the SQL endpoint.**: Serverless có thể cải thiện phản hồi, nhưng số cluster đồng thời tối đa là điều khiển trực tiếp cho nút thắt này.
- **They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to “Reliability Optimized.”**: Warehouse serverless không cung cấp cấu hình Spot Instance Policy của khách hàng như mô tả.

**Tham khảo:**

- [SQL warehouse sizing/scaling](https://docs.databricks.com/aws/en/compute/sql-warehouse/warehouse-behavior)

</details>


---

## Q313 · single choice · — not answered

A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to an ELT job. The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100. Which of the following approaches can the data engineer use to notify their entire team via a messaging webhook whenever the number of NULL values reaches 100?

- ✅ **A.** They can set up an Alert with a new webhook alert destination.
- **B.** They can set up an Alert with one-time notifications.
- **C.** They can set up an Alert with a custom template.
- **D.** They can set up an Alert without notifications.
- **E.** They can set up an Alert with a new email alert destination.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can set up an Alert with a new webhook alert destination.

Alert dùng đích webhook gửi thông báo ngưỡng đến công cụ nhắn tin của nhóm. Đặt điều kiện khi số NULL đạt 100.

#### Vì sao các phương án khác không phù hợp?

- **They can set up an Alert with a custom template.**: Mẫu tùy chỉnh đổi nội dung, không chọn đích gửi.
- **They can set up an Alert with a new email alert destination.**: Đích email gửi thư thay vì webhook được yêu cầu.
- **They can set up an Alert with one-time notifications.**: Thông báo một lần điều khiển tần suất, không định tuyến webhook.
- **They can set up an Alert without notifications.**: Tắt thông báo không thể báo cho nhóm.

**Tham khảo:**

- [Create an alert](https://docs.databricks.com/aws/en/sql/user/alerts/create)

</details>


---

## Q314 · single choice · — not answered

A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary. Which of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?

- ✅ **A.** They can turn on the Auto Stop feature for the SQL endpoint.
- **B.** They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint.
- **C.** They can reduce the cluster size of the SQL endpoint.
- **D.** They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints.
- **E.** They can set up the dashboard's SQL endpoint to be serverless.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** They can turn on the Auto Stop feature for the SQL endpoint.

Auto Stop dừng SQL warehouse sau thời gian nhàn đã cấu hình; lượt làm mới dashboard theo lịch sau có thể khởi động lại, giảm chạy không cần thiết giữa các lần hằng ngày.

#### Vì sao các phương án khác không phù hợp?

- **They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints.**: Đồng nhất endpoint có thể đơn giản hóa thực thi nhưng không đặt chính sách tắt khi nhàn.
- **They can set up the dashboard's SQL endpoint to be serverless.**: Serverless cung cấp compute có quản lý khởi động nhanh, nhưng điều khiển rõ thời gian nhàn là Auto Stop.
- **They can reduce the cluster size of the SQL endpoint.**: Cluster nhỏ hơn đổi năng lực và phí mỗi đơn vị thời gian, không đổi chính sách dừng khi nhàn.
- **They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint.**: Dùng endpoint khác không khiến endpoint nào tự dừng khi nhàn.

**Tham khảo:**

- [Create a SQL warehouse](https://docs.databricks.com/aws/en/compute/sql-warehouse/create)

</details>


---

## Q315 · single choice · — not answered

An engineering manager wants to monitor the performance of a recent project using a Databricks SQL query. For the first week following the project’s release, the manager wants the query results to be updated every minute. However, the manager is concerned that the compute resources used for the query will be left running and cost the organization a lot of money beyond the first week of the project’s release. Which of the following approaches can the engineering team use to ensure the query does not cost the organization any money beyond the first week of the project’s release?

- **A.** They can set a limit to the number of DBUs that are consumed by the SQL Endpoint.
- **B.** They cannot ensure the query does not cost the organization money beyond the first week of the project’s release.
- **C.** They can set a limit to the number of individuals that are able to manage the query’s refresh schedule.
- ✅ **D.** They can set the query’s refresh schedule to end on a certain date in the query scheduler.
- **E.** They can set the query’s refresh schedule to end after a certain number of refreshes.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can set the query’s refresh schedule to end on a certain date in the query scheduler.

Ngày kết thúc giới hạn lịch làm mới để không khởi tạo truy vấn sau tuần đầu. Cần cấu hình dừng compute nhàn rỗi riêng để kiểm soát toàn bộ phí warehouse.

#### Vì sao các phương án khác không phù hợp?

- **They can set a limit to the number of DBUs that are consumed by the SQL Endpoint.**: Ngân sách DBU không phải điều kiện kết thúc của lịch truy vấn và không biểu diễn ngày yêu cầu.
- **They can set the query’s refresh schedule to end after a certain number of refreshes.**: Số lượt làm mới cố định không trực tiếp biểu diễn mốc lịch và có thể không phải tùy chọn được hỗ trợ.
- **They cannot ensure the query does not cost the organization money beyond the first week of the project’s release.**: Có thể dừng lịch, vì vậy khẳng định hoàn toàn không thể là quá mức.
- **They can set a limit to the number of individuals that are able to manage the query’s refresh schedule.**: Giới hạn người quản lý thay đổi quyền, không quyết định khi lịch dừng.

**Tham khảo:**

- [Create a SQL warehouse](https://docs.databricks.com/aws/en/compute/sql-warehouse/create)

**Cần xem lại:** Đáp án ngày kết thúc lịch không đủ bảo đảm không còn chi phí warehouse và chưa có phạm vi giao diện legacy xác thực. Cách xử lý: Viết lại yêu cầu thành dừng các lần chạy của riêng truy vấn sau tuần đầu; thay phương án khóa bằng tạm dừng/xóa lịch sau thời hạn. Nếu vẫn yêu cầu ngừng phí compute, thêm dừng warehouse riêng không có workload khác. Duyệt lại khóa sau khi sửa.

</details>


---

## Q316 · single choice · — not answered

Under legacy Databricks Hive-metastore table access control, a group named team needs access to the customers database namespace and permission to inspect table metadata, without permission to create objects. Which grant sequence supplies the required privileges on that database?

- **A.** GRANT CREATE ON DATABASE customers TO team;
- **B.** GRANT VIEW ON CATALOG customers TO team;
- ✅ **C.** GRANT USAGE ON DATABASE customers TO team; GRANT READ_METADATA ON DATABASE customers TO team;
- **D.** GRANT USAGE ON CATALOG team TO customers;

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** GRANT USAGE ON DATABASE customers TO team; GRANT READ_METADATA ON DATABASE customers TO team;

Trong ACL Hive metastore cũ, USAGE là điều kiện bổ sung để dùng namespace, còn READ_METADATA cho phép xem metadata đối tượng. Cấp cả hai trên database đáp ứng truy cập namespace và metadata mà không cấp CREATE hoặc SELECT.

#### Vì sao các phương án khác không phù hợp?

- **GRANT VIEW ON CATALOG customers TO team;**: VIEW không phải quyền metadata cũ được quy định và câu này nhắm catalog thay vì database.
- **GRANT CREATE ON DATABASE customers TO team;**: CREATE cho tạo đối tượng, vượt yêu cầu truy cập metadata.
- **GRANT USAGE ON CATALOG team TO customers;**: Câu này nhắm catalog team và cấp cho customers, đảo vai trò database với nhóm.

**Tham khảo:**

- [Hive metastore privileges and securable objects (legacy)](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/table-acls/object-privileges)

</details>


---

## Q317 · single choice · — not answered

Differentiate between all-purpose clusters and jobs clusters. A data engineering team has created a python notebook to load data from cloud storage, this job has been tested and now needs to be scheduled in production. Which would be the best cluster to be used in this case?

- **A.** All purpose cluster
- ✅ **B.** Jobs Cluster
- **C.** Any Unity Catalog-enabled cluster
- **D.** Serverless SQL warehouse

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Jobs Cluster

Job compute dành cho notebook production theo lịch, với vòng đời do job quản lý thay vì phiên tương tác dùng chung.

#### Vì sao các phương án khác không phù hợp?

- **All purpose cluster**: Cluster all-purpose hướng đến tương tác, không phải mặc định classic phù hợp nhất cho job theo lịch.
- **Any Unity Catalog-enabled cluster**: Chỉ tương thích Unity Catalog không quyết định vòng đời compute phù hợp.
- **Serverless SQL warehouse**: SQL warehouse dành cho task SQL thay vì notebook Python tổng quát này.

**Tham khảo:**

- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q318 · single choice · — not answered

A data engineer needs to develop integration tests for an ETL process and deploy a version-controlled, packaged workflow into production using an external job scheduler. Which tool should the data engineer use for this job?

- **A.** Databricks Software Development Kit
- ✅ **B.** Databricks Asset Bundles
- **C.** Databricks Connect
- **D.** Databricks Command Line Interface

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks Asset Bundles

Bundle đóng gói mã có phiên bản, kiểm thử và định nghĩa tài nguyên workflow để triển khai lặp lại; scheduler bên ngoài có thể gọi workflow đã triển khai qua API hoặc công cụ được hỗ trợ.

#### Vì sao các phương án khác không phù hợp?

- **Databricks Connect**: Databricks Connect hỗ trợ phát triển Spark từ xa, không đóng gói triển khai toàn dự án.
- **Databricks Command Line Interface**: CLI có thể thao tác bundle, nhưng bundle mới là lớp đóng gói và triển khai dự án được hỏi.
- **Databricks Software Development Kit**: SDK cung cấp API lập trình nhưng tự nó không phải gói dự án khai báo này.

**Tham khảo:**

- [What are Declarative Automation Bundles?](https://docs.databricks.com/aws/en/dev-tools/bundles)

</details>


---

## Q319 · single choice · — not answered

The table random_values has a single column col1 containing these six rows: 0, 1, 2, NULL, 2, 3. What are count_a, count_b, and count_c for this query?`SELECT count_if(col1 > 1) AS count_a, count(*) AS count_b, count(col1) AS count_c FROM random_values;`

- **A.** 3 6 6
- **B.** 4 6 6
- **C.** 4 6 5
- ✅ **D.** 3 6 5

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** 3 6 5

Các giá trị 2, 2 và 3 thỏa col1 > 1 nên count_a=3. count(*) tính mọi hàng nên count_b=6; count(col1) bỏ một NULL nên count_c=5.

#### Vì sao các phương án khác không phù hợp?

- **4 6 5**: Bốn giá trị lớn hơn 1 nghĩa là đã tính nhầm 1 hoặc NULL.
- **3 6 6**: count(cột) bỏ hàng NULL nên bằng năm, không phải sáu.
- **4 6 6**: Cả số đếm theo điều kiện và số đếm không NULL đều sai.

**Tham khảo:**

- [count_if aggregate function](https://docs.databricks.com/aws/en/sql/language-manual/functions/count_if)
- [count aggregate function](https://docs.databricks.com/aws/en/sql/language-manual/functions/count)

</details>


---

## Q320 · single choice · — not answered

Which resource configuration fragment uses valid YAML structure for a Databricks Asset Bundle notebook job?

- **A.** resources { jobs { name = "hello-job" tasks{ task_key = "hello-task" existing_cluster_id = "1234-567890-abcde123" notebook_task{ notebook_path = ".hello.py" } } } }
- **B.** "resources":{ "jobs":{ "name":"hello-job", "tasks":{ "task_key:"hello-task", "existing_cluster_id":"1234-567890-abcde123", "notebook_task":{ "notebook_path": ".hello.py" } } }
- ✅ **C.** resources: jobs: hello-job: name: hello-job tasks: 
  
   
  - task_key: hello-task existing_cluster_id: 1234-567890-abcde123 notebook_task: notebook_path: ./hello.py
- **D.** configuration = { "resources":{ "jobs":{ "name":"hello-job", "tasks":{ "task_key:"hello-task", "existing_cluster_id":"1234-567890-abcde123", "notebook_task":{ "notebook_path": ".hello.py" } } } }

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** resources: jobs: hello-job: name: hello-job tasks: - task_key: hello-task existing_cluster_id: 1234-567890-abcde123 notebook_task: notebook_path: ./hello.py

Đoạn YAML lồng job có tên dưới resources.jobs và biểu diễn tasks thành danh sách, trong đó notebook_task chứa đường dẫn notebook. Các mức thụt lề cung cấp cấu trúc phân cấp schema tài nguyên bundle yêu cầu.

#### Vì sao các phương án khác không phù hợp?

- **"resources":{ "jobs":{ "name":"hello-job", "tasks":{ "task_key:"hello-task", "existing_cluster_id":"1234-567890-abcde123", "notebook_task":{ "notebook_path": ".hello.py" } } }**: Văn bản giống JSON thiếu mapping job có tên và sai cú pháp chuỗi/đối tượng.
- **configuration = { "resources":{ "jobs":{ "name":"hello-job", "tasks":{ "task_key:"hello-task", "existing_cluster_id":"1234-567890-abcde123", "notebook_task":{ "notebook_path": ".hello.py" } } } }**: Phép gán configuration trần không phải định dạng YAML bundle đang hỏi và có dữ liệu lồng sai cú pháp.
- **resources { jobs { name = "hello-job" tasks{ task_key = "hello-task" existing_cluster_id = "1234-567890-abcde123" notebook_task{ notebook_path = ".hello.py" } } } }**: Cú pháp khối giống HCL này không phải YAML bundle.

**Tham khảo:**

- [Declarative Automation Bundles configuration](https://docs.databricks.com/aws/en/dev-tools/bundles/settings)

</details>


---

## Q321 · pick 2 · — not answered

Which two management or metadata services belong to the Databricks control plane, rather than workload execution in a compute plane? (Choose two.)

- **A.** Compute
- ✅ **B.** Compute Orchestration
- ✅ **C.** Unity Catalog metastore metadata service
- **D.** Serverless Compute
- **E.** Virtual Machines

**Answer:** B, C

<details><summary>Explanation</summary>

**Nội dung đáp án:** Compute Orchestration; Unity Catalog metastore metadata service

Điều phối compute quản lý hạ tầng workload từ control plane. Metastore Unity Catalog được lưu trữ rõ ràng như dịch vụ metadata và governance nhiều tenant trong plane đó; điều này không có nghĩa mọi cơ chế thực thi quyền dữ liệu đều chạy tại đó.

#### Vì sao các phương án khác không phù hợp?

- **Virtual Machines**: Máy ảo workload thuộc compute plane thay vì tầng dịch vụ quản lý hay metadata.
- **Serverless Compute**: Serverless compute chạy workload trong serverless compute plane do Databricks quản lý.
- **Compute**: Compute thực thi workload dữ liệu trong compute plane thay vì điều phối chúng từ control plane.

**Tham khảo:**

- [High-level architecture](https://docs.databricks.com/aws/en/getting-started/high-level-architecture)
- [Design Unity Catalog architecture](https://docs.databricks.com/aws/en/lakehouse-architecture/deployment-guide/unity-catalog)

</details>


---

## Q322 · single choice · — not answered

A data engineer needs to ingest from both streaming and batch sources for a firm that relies on highly accurate data. Occasionally, some of the data picked up by the sensors that provide a streaming input are outside the expected parameters. If this occurs, the data must be dropped, but the stream should not fail. Which feature of Delta Live Tables meets this requirement?

- **A.** Monitoring
- **B.** Error Handling
- ✅ **C.** Expectations
- **D.** Change Data Capture

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Expectations

Expectation định nghĩa ràng buộc chất lượng cho bản ghi pipeline. Cấu hình hành động drop-row với giá trị cảm biến lỗi để loại hàng đó và cho flow tiếp tục.

#### Vì sao các phương án khác không phù hợp?

- **Change Data Capture**: Change Data Capture áp dụng insert, update và delete nguồn, không phải chính sách xác thực này.
- **Error Handling**: Xử lý lỗi chung không chỉ tính năng chất lượng khai báo theo hàng.
- **Monitoring**: Monitoring quan sát lỗi và metric, không tự loại bản ghi không hợp lệ.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q323 · single choice · — not answered

In a healthcare provider organization using Delta Lake to store electronic health records (EHRs), a data analyst needs to analyze a snapshot of the patient_records table from two weeks ago before some recent data corrections were applied. What approach should the Data Engineer take to allow the analyst to query that specific prior version?

- **A.** Use the VACUUM command to remove all versions of the table older than two weeks, then the analyst can query the remaining version.
- **B.** Truncate the table to remove all data, then reload the data from two weeks ago into the truncated table for the analyst to query.
- **C.** Restore the table to the version from two weeks ago using the RESTORE command, and have the analyst query the restored table.
- ✅ **D.** Identify the version number corresponding to two weeks ago from the Delta transaction log, share that version number with the analyst to query using VERSION AS OF syntax, or export that version to a new Delta table for the analyst to query.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Identify the version number corresponding to two weeks ago from the Delta transaction log, share that version number with the analyst to query using VERSION AS OF syntax, or export that version to a new Delta table for the analyst to query.

Xác định phiên bản lịch sử rồi truy vấn VERSION AS OF để đọc snapshot cũ mà không đổi bảng hiện tại. Tệp dữ liệu và lịch sử log cần thiết phải còn; hai tuần có thể cần retention tệp dài hơn mặc định.

#### Vì sao các phương án khác không phù hợp?

- **Truncate the table to remove all data, then reload the data from two weeks ago into the truncated table for the analyst to query.**: Truncate làm mất nội dung hiện tại và tạo công việc nạp lại không cần thiết.
- **Restore the table to the version from two weeks ago using the RESTORE command, and have the analyst query the restored table.**: RESTORE đổi trạng thái hiện tại cho mọi người dùng thay vì cung cấp đọc lịch sử tách biệt.
- **Use the VACUUM command to remove all versions of the table older than two weeks, then the analyst can query the remaining version.**: VACUUM xóa tệp cũ và có thể khiến phiên bản cần đọc không còn truy cập được.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

</details>


---

## Q324 · single choice · — not answered

Which of the following can be used to simplify and unify siloed data architectures that are specialized for specific use cases?

- ✅ **A.** Data lakehouse
- **B.** Data lake
- **C.** None of these
- **D.** Data warehouse
- **E.** All of these

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Data lakehouse

Lakehouse hợp nhất nhiều tác vụ trên lưu trữ dữ liệu chung có giao dịch và phân tích, giảm kiến trúc chia cắt.

#### Vì sao các phương án khác không phù hợp?

- **None of these**: Lakehouse cung cấp hợp nhất được nêu, nên lựa chọn không có đáp án đúng không có cơ sở.
- **All of these**: Lake và warehouse truyền thống riêng lẻ không đồng thời cung cấp toàn bộ kiến trúc kết hợp.
- **Data lake**: Lake riêng lẻ không cung cấp mọi chức năng quản lý và phục vụ kiểu warehouse.
- **Data warehouse**: Warehouse riêng lẻ không bao phủ toàn mô hình tác vụ lake mở.

**Tham khảo:**

- [Databricks lakehouse architecture](https://docs.databricks.com/aws/en/getting-started/architecture)

</details>


---

## Q325 · single choice · — not answered

An organization is looking for an optimized storage layer that supports ACID transactions and schema enforcement. Which technology should the organization use?

- ✅ **A.** Delta Lake
- **B.** Unity Catalog
- **C.** Cloud File Storage
- **D.** Data lake

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta Lake

Delta Lake bổ sung nhật ký giao dịch cho dữ liệu Parquet, cung cấp commit ACID và kiểm tra schema khi ghi.

#### Vì sao các phương án khác không phù hợp?

- **Unity Catalog**: Unity Catalog quản trị quyền và siêu dữ liệu, không phải định dạng tệp giao dịch.
- **Cloud File Storage**: Lưu trữ đối tượng chứa tệp nhưng tự nó không điều phối commit ACID và schema cấp bảng.
- **Data lake**: Data lake là kiến trúc; bảo đảm giao dịch cần lớp bảng như Delta Lake.

**Tham khảo:**

- [What is Delta Lake?](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q326 · single choice · — not answered

A PySpark Structured Streaming query should process all data available when the run starts, using as many micro-batches as needed, and then stop. Which DataStreamWriter trigger call satisfies this requirement?

- **A.** trigger(once=True)
- **B.** trigger(processingTime= "once")
- **C.** trigger(continuous= "once")
- ✅ **D.** trigger(availableNow=True)

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** trigger(availableNow=True)

trigger(availableNow=True) xử lý hết dữ liệu có sẵn lúc bắt đầu qua số micro-batch cần thiết rồi kết thúc. Điều này khác trigger once cũ chỉ xử lý một micro-batch.

#### Vì sao các phương án khác không phù hợp?

- **trigger(processingTime= "once")**: processingTime cần khoảng thời gian; once không phải khoảng hợp lệ và thiết lập này không diễn tả xử lý hết rồi dừng.
- **trigger(continuous= "once")**: continuous cần khoảng thời gian và chọn mô hình xử lý khác; once không phải khoảng hợp lệ.
- **trigger(once=True)**: Trigger once cũ xử lý một micro-batch, không xử lý toàn bộ đầu vào sẵn có qua chuỗi batch có thể dài hơn.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)
- [Structured Streaming Programming Guide (Spark 3.5.6)](https://spark.apache.org/docs/3.5.6/structured-streaming-programming-guide.html)

</details>


---

## Q327 · single choice · — not answered

A data engineer and data analyst are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?

- **A.** The pipeline will need to be written entirely in Python
- **B.** The pipeline will need to stop using the medallion-based multi-hop architecture
- **C.** The pipeline will need to use a batch source in place of a streaming source
- **D.** The pipeline will need to be written entirely in SQL
- ✅ **E.** None of these changes will need to be made

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** None of these changes will need to be made

Không cần thay đổi kiến trúc nào được liệt kê: pipeline hỗ trợ đồng thời Python, SQL, nguồn streaming và các tầng medallion. Mã vẫn cần chuyển sang định nghĩa dataset khai báo của pipeline.

#### Vì sao các phương án khác không phù hợp?

- **The pipeline will need to stop using the medallion-based multi-hop architecture**: Thiết kế medallion nhiều bước được hỗ trợ.
- **The pipeline will need to be written entirely in SQL**: Không bắt buộc viết toàn bộ bằng SQL.
- **The pipeline will need to use a batch source in place of a streaming source**: Nguồn streaming được hỗ trợ.
- **The pipeline will need to be written entirely in Python**: Không bắt buộc viết toàn bộ bằng Python.

**Tham khảo:**

- [Configure pipelines](https://docs.databricks.com/aws/en/ldp/configure-pipeline)
- [What is the medallion lakehouse architecture?](https://docs.databricks.com/gcp/en/lakehouse/medallion)

</details>


---

## Q328 · single choice · — not answered

An organization has data stored across multiple external systems, including MySQL, Amazon Redshift, and Google BigQuery. The data engineer wants to perform analytics without ingesting directly into Databricks, ensuring unified governance and minimizing data duplication. Which feature of Databricks enables querying these external data sources while maintaining centralized governance?

- **A.** Databricks Connect
- **B.** MLflow
- ✅ **C.** Lakehouse Federation
- **D.** Delta Lake

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Lakehouse Federation

Lakehouse Federation đưa hệ thống ngoài vào foreign catalog của Unity Catalog, cho phép truy vấn có quản trị mà không phải sao chép toàn bộ trước.

#### Vì sao các phương án khác không phù hợp?

- **Delta Lake**: Delta Lake quản lý bảng giao dịch, không phải tính năng truy vấn liên kết hệ thống ngoài.
- **MLflow**: MLflow quản lý thử nghiệm và mô hình ML, không truy vấn liên kết cơ sở dữ liệu.
- **Databricks Connect**: Databricks Connect nối máy phát triển với compute, không đăng ký cơ sở dữ liệu ngoài có quản trị.

**Tham khảo:**

- [Connect to external databases and catalogs](https://docs.databricks.com/aws/en/query-federation/)

</details>


---

## Q329 · single choice · — not answered

A Delta Live Tables pipeline validates travel reimbursement records. If an employee has not supplied location details (location is NULL), the affected flow update must fail instead of merely dropping the invalid row. Which constraint implements this rule?

- ✅ **A.** CONSTRAINT valid_location EXPECT (location IS NOT NULL) ON VIOLATION FAIL UPDATE
- **B.** CONSTRAINT valid_location EXPECT (location = NULL)
- **C.** CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL
- **D.** CONSTRAINT valid_location EXPECT (location != NULL) ON DROP ROW

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** CONSTRAINT valid_location EXPECT (location IS NOT NULL) ON VIOLATION FAIL UPDATE

IS NOT NULL trả false khi thiếu location. ON VIOLATION FAIL UPDATE làm thất bại cập nhật bị ảnh hưởng khi ràng buộc Boolean đó không đạt, thay vì chỉ loại hàng hay âm thầm chấp nhận.

#### Vì sao các phương án khác không phù hợp?

- **CONSTRAINT valid_location EXPECT (location = NULL)**: location = NULL cho kết quả không xác định thay vì kiểm tra null, đồng thời không chỉ định fail-update.
- **CONSTRAINT valid_location EXPECT (location != NULL) ON DROP ROW**: location != NULL không kiểm tra null đúng; ON DROP ROW cũng sai cú pháp và loại hàng không đáp ứng chính sách thất bại.
- **CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL**: location != NULL không phải phép kiểm tra null đúng; hành động được quy định là FAIL UPDATE chứ không chỉ FAIL.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)
- [NULL semantics](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-null-semantics)

</details>


---

## Q330 · single choice · — not answered

A data engineer streams customer orders into a Kafka topic (orders_topic) and is currently writing the ingestion script of a DLT pipeline. The data engineer needs to ingest the data from Kafka brokers to DLT using Databricks. What is the correct code for ingesting the data?

- **A.** import dlt@dlt.table(name = "orders_raw",)def orders_raw():return (spark.readstream.format("kafka").option("kafka.bootstrap.servers", "broker:9092").option("subscribe", "orders_topic").load())
- ✅ **B.** import dlt@dlt.table(name = "orders_raw")def orders_raw():return (spark.readstream.format("kafka").option("kafka.bootstrap.servers", "broker:9092").option("subscribe", "orders_topic").option("startingOffsets", "earliest").load())
- **C.** import dlt@dlt.table(name = "orders_raw",)def orders_raw():return (spark.readstream.format("cloudFiles").option("cloudFiles.format", "json").option("cloudFiles.schemaLocation", "/schema/location").load("kafka://broker:9092/orders_topic"))
- **D.** import dlt@dlt.table(name = "orders_raw")def orders_raw():return (spark.readstream.format("cloudFiles").option("cloudFiles.format", "json").load("kafka://broker:9092/orders_topic"))

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** import dlt@dlt.table(name = "orders_raw")def orders_raw():return (spark.readstream.format("kafka").option("kafka.bootstrap.servers", "broker:9092").option("subscribe", "orders_topic").option("startingOffsets", "earliest").load())

Bộ đọc Kafka theo đáp án cấp broker, topic và offset earliest để đọc cả thông điệp cũ. Tuy nhiên earliest là tùy chọn nếu không cần lịch sử nên bộ đọc Kafka còn lại cũng nạp được thông điệp mới.

#### Vì sao các phương án khác không phù hợp?

- **import dlt@dlt.table(name = "orders_raw",)def orders_raw():return (spark.readstream.format("cloudFiles").option("cloudFiles.format", "json").option("cloudFiles.schemaLocation", "/schema/location").load("kafka://broker:9092/orders_topic"))**: cloudFiles đọc tệp đám mây, không đọc URL topic Kafka.
- **import dlt@dlt.table(name = "orders_raw",)def orders_raw():return (spark.readstream.format("kafka").option("kafka.bootstrap.servers", "broker:9092").option("subscribe", "orders_topic").load())**: Cấu hình Kafka này hợp lệ về ý định với offset latest mặc định nên không mặc nhiên sai.
- **import dlt@dlt.table(name = "orders_raw")def orders_raw():return (spark.readstream.format("cloudFiles").option("cloudFiles.format", "json").load("kafka://broker:9092/orders_topic"))**: cloudFiles Auto Loader không phải connector Kafka.

**Tham khảo:**

- [Structured Streaming Kafka integration](https://spark.apache.org/docs/latest/streaming/structured-streaming-kafka-integration.html)

**Cần xem lại:** Mã Python không chạy được; sau sửa readStream, hai phương án Kafka đều đáp ứng đề vì earliest không được yêu cầu. Cách xử lý: Khôi phục xuống dòng/thụt lề và spark.readStream trong các lựa chọn; thêm vào đề yêu cầu lần chạy đầu đọc toàn bộ dữ liệu còn lưu từ offset sớm nhất để lựa chọn có startingOffsets="earliest" là đáp án duy nhất. Giữ khóa hiện có sau khi duyệt sửa đề.

</details>


---

## Q331 · pick 2 · — not answered

For standard Unity Catalog catalogs in a Databricks AWS account, which two statements are correct under the documented metastore and managed-storage configuration rules? (Choose two.)

- **A.** If catalog is not associated with location, it's mandatory to associate schema with managed locations
- **B.** You can have multiple catalogs within metastore and 1 catalog can be associated with multiple metastore
- **C.** Both catalog and schema must have a managed location in Unity Catalog provided metastore is not associated with a location
- ✅ **D.** You can have more than 1 metastore within a databricks account console but only 1 per region.
- ✅ **E.** If metastore is not associated with location, it's mandatory to associate catalog with managed locations

**Answer:** D, E

<details><summary>Explanation</summary>

**Nội dung đáp án:** You can have more than 1 metastore within a databricks account console but only 1 per region.; If metastore is not associated with location, it's mandatory to associate catalog with managed locations

Mỗi account dùng một Unity Catalog metastore cho mỗi vùng. Khi tạo standard catalog mà không có managed storage ở metastore, catalog phải có managed location riêng. Managed location ở schema có thể ghi đè sau đó, nhưng không đồng thời bắt buộc.

#### Vì sao các phương án khác không phù hợp?

- **Both catalog and schema must have a managed location in Unity Catalog provided metastore is not associated with a location**: Không bắt buộc đồng thời vị trí ở catalog và schema; vị trí ở schema là tùy chọn để ghi đè catalog.
- **You can have multiple catalogs within metastore and 1 catalog can be associated with multiple metastore**: Catalog thuộc một metastore, không được gắn vào nhiều metastore.
- **If catalog is not associated with location, it's mandatory to associate schema with managed locations**: Nếu bỏ vị trí ở catalog nhưng metastore có vị trí, schema có thể kế thừa metastore thay vì phải có vị trí riêng.

**Tham khảo:**

- [Create catalogs — managed storage requirement](https://docs.databricks.com/aws/en/catalogs/create-catalog)
- [Unity Catalog best practices — one metastore per region](https://docs.databricks.com/aws/en/data-governance/unity-catalog/best-practices/)
- [Managed storage hierarchy](https://docs.databricks.com/aws/en/connect/unity-catalog/cloud-storage/managed-storage)

</details>


---

## Q332 · single choice · — not answered

A data engineer needs to access the view created by the sales team, using a shared cluster. The data engineer has been provided usage permissions on the catalog and schema. In order to access the view created by sales team. What are the minimum permissions the data engineer would require in addition?

- **A.** Needs SELECT permission only on the VIEW
- ✅ **B.** Needs SELECT permission on the VIEW and the underlying TABLE.
- **C.** Needs ALL PRIVILEGES at the SCHEMA level
- **D.** Needs ALL PRIVILEGES on the VIEW

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Needs SELECT permission on the VIEW and the underlying TABLE.

Trên standard/shared compute dùng Unity Catalog, người đọc thường cần SELECT trên view cùng quyền dùng không gian tên cha; quyền phụ thuộc của chủ view quản lý truy cập bảng bên dưới. Nguồn sai khi coi SELECT bảng bên dưới luôn là quyền thêm bắt buộc của người đọc.

#### Vì sao các phương án khác không phù hợp?

- **Needs SELECT permission only on the VIEW**: Chỉ SELECT trên view thường là quyền đọc bổ sung tối thiểu cho mẫu shared compute đã nêu.
- **Needs ALL PRIVILEGES on the VIEW**: ALL PRIVILEGES trên view vượt yêu cầu đọc tối thiểu.
- **Needs ALL PRIVILEGES at the SCHEMA level**: ALL PRIVILEGES trên toàn schema cấp quyền rộng hơn nhiều so với đọc view này.

**Tham khảo:**

- [Unity Catalog privileges](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

**Cần xem lại:** Khóa yêu cầu SELECT trên cả view lẫn bảng nền, trong khi shared/standard compute chỉ cần SELECT trên view cho người đọc. Cách xử lý: Phê duyệt đổi khóa sang lựa chọn "Needs SELECT permission only on the VIEW"; ghi rõ Unity Catalog và standard (formerly shared) compute để khóa không phụ thuộc giả định legacy.

</details>


---

## Q333 · single choice · — not answered

Which statement describes a potential resource-cost benefit of running scheduled Databricks workflows on job compute provisioned for each run?

- **A.** Scheduled Workflows run continuously until manually stopped.
- **B.** Scheduled Workflows process data as it arrives at configured sources.
- **C.** Scheduled Workflows require an always-running cluster, which is more expensive but reduces processing latency.
- ✅ **D.** Scheduled Workflows can reduce resource consumption and expense since the cluster runs only long enough to execute the pipeline.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** Scheduled Workflows can reduce resource consumption and expense since the cluster runs only long enough to execute the pipeline.

Job compute có thể được cấp cho lần chạy theo lịch và kết thúc sau khi các task liên quan hoàn tất, tránh giữ cluster tương tác chạy giữa các lần. Chi phí vẫn tùy compute và cấu hình workload thực tế.

#### Vì sao các phương án khác không phù hợp?

- **Scheduled Workflows require an always-running cluster, which is more expensive but reduces processing latency.**: Job compute theo lịch có thể bắt đầu mỗi lần chạy; không bắt buộc cluster chạy liên tục.
- **Scheduled Workflows process data as it arrives at configured sources.**: Xử lý ngay khi dữ liệu đến mô tả thực thi liên tục hoặc theo sự kiện, không phải vòng đời theo lịch nêu trong đề.
- **Scheduled Workflows run continuously until manually stopped.**: Lần chạy theo lịch hữu hạn kết thúc khi task xong thay vì bắt buộc chờ dừng thủ công.

**Tham khảo:**

- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q334 · single choice · — not answered

A data engineer is attempting to write Python and SQL in the same command cell and is running into an error. The engineer thought that it was possible to use a Python variable in a select statement. Why does the command fail?

- **A.** Databricks supports multiple languages but only one per notebook.
- ✅ **B.** Databricks supports one language per cell.
- **C.** Databricks supports language interoperability in the same cell but only between Scala and SQL.
- **D.** Databricks supports language interoperability but only if a special character is used.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks supports one language per cell.

Một ô notebook có một bộ thông dịch ngôn ngữ. Dùng spark.sql từ Python khi truy vấn cần nhận giá trị Python.

#### Vì sao các phương án khác không phù hợp?

- **Databricks supports language interoperability in the same cell but only between Scala and SQL.**: Tương tác ngôn ngữ không chỉ giới hạn Scala và SQL; cú pháp trộn trực tiếp vẫn cần bộ thông dịch phù hợp.
- **Databricks supports multiple languages but only one per notebook.**: Các ô khác nhau trong cùng notebook có thể dùng ngôn ngữ hỗ trợ khác nhau.
- **Databricks supports language interoperability but only if a special character is used.**: Lệnh magic chọn ngôn ngữ ô, không khiến mọi cú pháp Python trộn SQL trở nên hợp lệ.

**Tham khảo:**

- [Develop code in Databricks notebooks](https://docs.databricks.com/gcp/en/notebooks/notebooks-code)

</details>


---

## Q335 · single choice · — not answered

An engineering manager uses a Databricks SQL query to monitor ingestion latency for each data source. The manager checks the results of the query every day, but they are manually rerunning the query each day and waiting for the results. Which of the following approaches can the manager use to ensure the results of the query are updated each day?

- **A.** They can schedule the query to run every 12 hours from the Jobs UI.
- **B.** They can schedule the query to refresh every 1 day from the SQL endpoint's page in Databricks SQL.
- **C.** They can schedule the query to run every 1 day from the Jobs UI.
- **D.** They can schedule the query to refresh every 12 hours from the SQL endpoint's page in Databricks SQL.
- ✅ **E.** They can schedule the query to refresh every 1 day from the query's page in Databricks SQL.

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** They can schedule the query to refresh every 1 day from the query's page in Databricks SQL.

Lập lịch chạy hằng ngày trong trình soạn thảo truy vấn để tự cập nhật kết quả. Khóa nguồn chọn quy trình lập lịch trực tiếp cho truy vấn.

#### Vì sao các phương án khác không phù hợp?

- **They can schedule the query to refresh every 1 day from the SQL endpoint's page in Databricks SQL.**: Cài đặt warehouse điều khiển tài nguyên, không phải lịch của từng truy vấn.
- **They can schedule the query to refresh every 12 hours from the SQL endpoint's page in Databricks SQL.**: Trang warehouse không phải nơi đặt lịch truy vấn, bất kể khoảng thời gian.
- **They can schedule the query to run every 1 day from the Jobs UI.**: Tác vụ SQL trong Jobs hiện cũng có thể được lập lịch hằng ngày.
- **They can schedule the query to run every 12 hours from the Jobs UI.**: Có thể lập lịch tác vụ SQL hai lần mỗi ngày nhưng vượt tần suất hằng ngày yêu cầu.

**Tham khảo:**

- [Schedule a query](https://docs.databricks.com/aws/en/sql/user/queries/schedule-query)

**Cần xem lại:** Đề một đáp án nhưng lập lịch truy vấn từ query page và Jobs UI đều hợp lệ. Cách xử lý: Thu hẹp đề thành "configure a once-daily refresh directly in the SQL query editor, without creating a Lakeflow Job"; giữ phương án query page mỗi 1 ngày là đáp án sau khi duyệt sửa đề.

</details>


---

## Q336 · single choice · — not answered

A PySpark DataFrame named sales_df contains region, category, and numeric sales_amount columns. Assume sum has been imported from pyspark.sql.functions. Which code creates region_sales with one row per region and its total sales amount named total_sales_amount?

- ✅ **A.** region_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))
- **B.** region_sales = sales_df.agg(sum("sales_amount").groupBy("region").alias("total_sales_amount"))
- **C.** region_sales = sales_df.sum("sales_amount").groupBy("region").alias("total_sales_amount")
- **D.** region_sales = sales_df.groupBy("category").sum("sales_amount").alias("total_sales_amount")

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** region_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))

groupBy("region") tạo một nhóm mỗi vùng, sau đó agg(sum("sales_amount").alias("total_sales_amount")) tính và đặt tên tổng. Kết quả được gán cho region_sales.

#### Vì sao các phương án khác không phù hợp?

- **region_sales = sales_df.groupBy("category").sum("sales_amount").alias("total_sales_amount")**: Câu này nhóm theo category thay vì region; alias DataFrame bên ngoài không đổi tên cột tổng hợp.
- **region_sales = sales_df.sum("sales_amount").groupBy("region").alias("total_sales_amount")**: Câu này cố sum trên DataFrame trước khi nhóm; không phải chuỗi API tổng hợp nhóm được hỗ trợ.
- **region_sales = sales_df.agg(sum("sales_amount").groupBy("region").alias("total_sales_amount"))**: groupBy phải áp dụng lên DataFrame, không lên biểu thức Column sum truyền vào agg.

**Tham khảo:**

- [DataFrame.groupBy](https://docs.databricks.com/aws/en/pyspark/reference/classes/dataframe/groupBy)

</details>


---

## Q337 · single choice · — not answered

Which of the following describes the relationship between Bronze tables and raw data?

- **A.** Bronze tables contain less data than raw data files.
- **B.** Bronze tables contain a less refined view of data than raw data.
- **C.** Bronze tables contain more truthful data than raw data.
- **D.** Bronze tables contain aggregates while raw data is unaggregated.
- ✅ **E.** Bronze tables contain raw data with a schema applied.

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Bronze tables contain raw data with a schema applied.

Nạp Bronze giữ dữ liệu mức nguồn và áp schema dùng được để Silver phân tích, kiểm tra và tinh chỉnh sau đó. Bronze không hứa mọi giá trị nguồn đã đúng.

#### Vì sao các phương án khác không phù hợp?

- **Bronze tables contain less data than raw data files.**: Bronze không được định nghĩa bằng việc luôn giảm số hàng nguồn.
- **Bronze tables contain more truthful data than raw data.**: Chỉ nạp dữ liệu chưa chứng minh giá trị đúng hơn.
- **Bronze tables contain aggregates while raw data is unaggregated.**: Tổng hợp nghiệp vụ thường là tinh chỉnh phía sau, không phải vai trò thô của Bronze.
- **Bronze tables contain a less refined view of data than raw data.**: Bronze thêm cấu trúc truy vấn được thay vì chủ ý làm dữ liệu kém tinh chỉnh hơn nguồn thô.

**Tham khảo:**

- [Medallion architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q338 · single choice · — not answered

A data engineering team is using Kafka to capture event data and then ingest it into Databricks. The team wants to be able to see these historical events. Medallion architecture is already in place. The team wants to be mindful of costs. Where should this historical event data be stored?

- ✅ **A.** Bronze
- **B.** Gold
- **C.** Raw layer
- **D.** Silver

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Bronze

Bronze là lớp nạp bền vững cho sự kiện Kafka thô, giữ lịch sử để phát lại và dựng lại dữ liệu sau mà không cần bản tinh chỉnh đắt hơn chỉ để lưu lịch sử.

#### Vì sao các phương án khác không phù hợp?

- **Gold**: Gold chứa tổng hợp phục vụ kinh doanh có thể mất lịch sử cấp sự kiện.
- **Silver**: Silver chứa bản ghi đã kiểm tra hoặc làm giàu, không phải kho sự kiện thô đầu tiên.
- **Raw layer**: Có thể có lớp raw riêng, nhưng trong medallion đã nêu, Bronze là lớp bảng nạp thô bền vững.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q339 · single choice · — not answered

What is the maximum output supported by a job cluster to ensure a notebook does not fail?

- ✅ **A.** 15MBs
- **B.** 10MBs
- **C.** 25MBs
- **D.** 30MBs

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** 15MBs

Khóa nguồn ghi 15 MB nhưng tài liệu hiện tại quy định tổng đầu ra notebook trên job cluster là 30 MB. Giới hạn đầu ra từng ô là riêng và phụ thuộc runtime hoặc phiên bản môi trường serverless.

#### Vì sao các phương án khác không phù hợp?

- **10MBs**: 10 MB là giới hạn từng ô mặc định hiện tại ở môi trường mới, không phải tổng tối đa notebook Jobs.
- **25MBs**: 25 MB không phải tổng đầu ra notebook tối đa được tài liệu quy định.
- **30MBs**: 30 MB là tổng giới hạn được tài liệu quy định nên lựa chọn không được chọn này mâu thuẫn với khóa.

**Tham khảo:**

- [Known limitations of Databricks notebooks](https://docs.databricks.com/aws/en/notebooks/notebook-limitations)

**Cần xem lại:** Khóa 15 MB sai với giới hạn notebook output 30 MB của job cluster. Cách xử lý: Chọn nội dung 30MBs sau khi người biên tập duyệt đổi khóa; giữ khóa hiện tại cho đến khi duyệt.

</details>


---

## Q340 · pick 2 · — not answered

Which two items are characteristics of the Gold Layer? (Choose two.)

- **A.** Raw Data
- **B.** Normalised
- **C.** Historical lineage
- ✅ **D.** De-normalised
- ✅ **E.** Read-optimized

**Answer:** D, E

<details><summary>Explanation</summary>

**Nội dung đáp án:** De-normalised; Read-optimized

Bảng Gold thường phi chuẩn hóa và tối ưu đọc để người dùng nghiệp vụ dùng kết quả báo cáo và mô hình chiều hiệu quả. Đây là đặc điểm thiết kế phục vụ, không phải nạp dữ liệu thô hay lineage xuyên tầng.

#### Vì sao các phương án khác không phù hợp?

- **Historical lineage**: Lineage lịch sử là metadata quản trị có thể trải mọi tầng, không đặc trưng bố trí phục vụ Gold.
- **Raw Data**: Dữ liệu thô chủ yếu giữ ở Bronze trước làm sạch và mô hình hóa nghiệp vụ.
- **Normalised**: Chi tiết chuẩn hóa tái sử dụng đặc trưng Silver hơn; Gold thường ưu tiên phi chuẩn hóa hướng tiêu thụ.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)
- [What is Medallion Architecture?](https://www.databricks.com/blog/what-is-medallion-architecture)

</details>


---

## Q341 · single choice · — not answered

In current Databricks Git folders, which of the following Git operations must be performed outside the Git folders UI?

- **A.** Clone
- **B.** Pull
- **C.** Commit
- **D.** Merge
- ✅ **E.** None of these operations; all listed operations are supported in the Git folders UI.

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án:** None of these operations; all listed operations are supported in the Git folders UI.

Không thao tác nào trong danh sách bắt buộc thực hiện ngoài Git folders: giao diện hỗ trợ clone, commit, pull, push và merge. Phương án không có thao tác nào được biên soạn bổ sung để sửa câu gốc vốn không có lựa chọn đúng.

#### Vì sao các phương án khác không phù hợp?

- **Commit**: Commit ghi thay đổi qua giao diện commit của Git folders; không bắt buộc thực hiện bên ngoài.
- **Pull**: Pull có sẵn trong Git folders để lấy và tích hợp thay đổi từ remote.
- **Merge**: Git folders cung cấp thao tác Merge và giao diện xử lý xung đột.
- **Clone**: Tạo Git folder có thể clone repository hiện có vào workspace.

**Tham khảo:**

- [Create and manage Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos)

</details>


---

## Q342 · single choice · — not answered

A data analyst has developed a query that runs against Delta table. They want help from the data engineering team to implement a series of tests to ensure the data returned by the query is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following operations could the data engineering team use to run the query and operate with the results in PySpark?

- **A.** There is no way to share data between PySpark and SQL.
- ✅ **B.** spark.sql
- **C.** SELECT * FROM sales
- **D.** spark.table
- **E.** spark.delta.table

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** spark.sql

spark.sql thực thi SQL của nhà phân tích và trả về PySpark DataFrame. Kiểm thử Python có thể kiểm tra hoặc biến đổi kết quả.

#### Vì sao các phương án khác không phù hợp?

- **SELECT * FROM sales**: Câu SQL đơn lẻ không phải API Python trả kết quả truy vấn.
- **spark.delta.table**: spark.delta.table không phải phương thức chuẩn thực thi SQL của SparkSession.
- **There is no way to share data between PySpark and SQL.**: Kết quả SQL và PySpark dùng chung mô hình DataFrame.
- **spark.table**: spark.table đọc bảng theo tên, không thực thi truy vấn SQL tùy ý.

**Tham khảo:**

- [SparkSession.sql](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.sql.html)

</details>


---

## Q343 · single choice · — not answered

How does Unity Catalog's data lineage feature support the visualization of relationships between Delta tables, notebooks, jobs, and dashboards?

- **A.** Unity Catalog lineage only supports visualizing relationships at the table level and does not extend to notebooks, jobs, or dashboards.
- **B.** Unity Catalog lineage provides an interactive graph that tracks dependencies between tables and notebooks but excludes any job-related dependencies or dashboard visualizations.
- ✅ **C.** Unity Catalog provides an interactive graph that visualizes the dependencies between Delta tables, notebooks, jobs, and dashboards, while also supporting column-level tracking of data transformations.
- **D.** Unity Catalog lineage visualizes dependencies between Delta tables, notebooks, and jobs, but does not provide column-level tracing or relationships with dashboards.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Unity Catalog provides an interactive graph that visualizes the dependencies between Delta tables, notebooks, jobs, and dashboards, while also supporting column-level tracking of data transformations.

Unity Catalog có đồ thị lineage tương tác bao gồm bảng, notebook, Jobs và dashboard được hỗ trợ. Lineage cấp cột còn truy vết phép biến đổi được hỗ trợ giữa các cột riêng.

#### Vì sao các phương án khác không phù hợp?

- **Unity Catalog lineage visualizes dependencies between Delta tables, notebooks, and jobs, but does not provide column-level tracing or relationships with dashboards.**: Lineage cấp cột và quan hệ dashboard được hỗ trợ trong các giới hạn tài liệu.
- **Unity Catalog lineage only supports visualizing relationships at the table level and does not extend to notebooks, jobs, or dashboards.**: Lineage mở rộng ngoài bảng tới tài sản thực thi và tiêu thụ.
- **Unity Catalog lineage provides an interactive graph that tracks dependencies between tables and notebooks but excludes any job-related dependencies or dashboard visualizations.**: Phụ thuộc Jobs và dashboard không bị loại hoàn toàn.

**Tham khảo:**

- [Lineage in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-lineage)

</details>


---

## Q344 · single choice · — not answered

A data engineer is debugging a Python notebook in Databricks that processes a dataset using PySpark. The notebook fails with an error during a DataFrame transformation. The engineer wants to inspect the state of variables, such as the input DataFrame and intermediate results, to identify where the error occurs. Which tool should the engineer use to debug the notebook and inspect the values of variables like DataFrames?

- **A.** Use the Databricks CLI to download and analyze driver logs for detailed error messages
- **B.** Use the Ganglia UI to monitor cluster resource usage and identify hardware issues
- **C.** Use the Spark UI to analyze the execution plan and identify stages where the job failed
- ✅ **D.** Use the Python Notebook Interactive Debugger to set breakpoints and inspect variable values in real-time

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use the Python Notebook Interactive Debugger to set breakpoints and inspect variable values in real-time

Trình gỡ lỗi Python tương tác dừng ở breakpoint và cho xem biến cục bộ để tìm đoạn Python gây lỗi biến đổi. Mã chạy trên executor phân tán có thể cần công cụ khác.

#### Vì sao các phương án khác không phù hợp?

- **Use the Databricks CLI to download and analyze driver logs for detailed error messages**: Log hỗ trợ chẩn đoán sau khi xảy ra lỗi nhưng không cho xem biến trực tiếp tại breakpoint.
- **Use the Ganglia UI to monitor cluster resource usage and identify hardware issues**: Ganglia theo dõi tài nguyên, không phải trạng thái biến Python.
- **Use the Spark UI to analyze the execution plan and identify stages where the job failed**: Spark UI hiển thị kế hoạch, job và stage, không phải bộ xem biến Python cục bộ.

**Tham khảo:**

- [Debug Databricks notebooks](https://docs.databricks.com/aws/en/notebooks/debugger)

</details>


---

## Q345 · single choice · — not answered

In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?

- **A.** When the target table is an external table
- ✅ **B.** When the target table cannot contain duplicate records
- **C.** When the source is not a Delta table
- **D.** When the location of the data needs to be changed
- **E.** When the source table can be deleted

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** When the target table cannot contain duplicate records

MERGE có thể khớp bản ghi đã có và chỉ chèn bản ghi chưa khớp, hỗ trợ nạp dữ liệu lặp an toàn. Điều kiện khớp và khử trùng nguồn phải đúng; chỉ dùng MERGE không tự đảm bảo duy nhất.

#### Vì sao các phương án khác không phù hợp?

- **When the location of the data needs to be changed**: Di chuyển dữ liệu là việc quản lý lưu trữ, không phải yêu cầu upsert.
- **When the target table is an external table**: Bảng ngoài có thể dùng cả hai lệnh nếu định dạng hỗ trợ.
- **When the source table can be deleted**: Có thể xóa nguồn không quyết định dùng insert hay merge.
- **When the source is not a Delta table**: Nguồn không phải Delta vẫn có thể cấp dữ liệu cho cả hai thao tác.

**Tham khảo:**

- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q346 · single choice · — not answered

A data engineer is developing a small proof of concept in a notebook. When running the entire notebook, the Cluster usage spikes. The data engineer wants to keep the development requirements and get real-time results. Which Cluster meets these requirements?

- **A.** All-Purpose Cluster with a large fixed memory size
- **B.** Job Cluster with autoscaling enabled
- ✅ **C.** All Purpose Cluster with autoscaling
- **D.** Job cluster with Photon enabled and autoscaling

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** All Purpose Cluster with autoscaling

Cluster all-purpose hỗ trợ lặp tương tác trên notebook, còn autoscaling điều chỉnh worker khi nhu cầu phát triển thay đổi.

#### Vì sao các phương án khác không phù hợp?

- **Job cluster with Photon enabled and autoscaling**: Photon có thể tăng tốc tác vụ hỗ trợ, nhưng job compute hướng lượt chạy theo lịch hơn phiên phát triển tương tác lâu dài.
- **Job Cluster with autoscaling enabled**: Autoscaling riêng nó không khiến vòng đời job compute phù hợp phát triển notebook.
- **All-Purpose Cluster with a large fixed memory size**: Cấu hình lớn cố định không thích nghi đột biến ngắt quãng và có thể lãng phí khi nhàn.

**Tham khảo:**

- [Compute configuration reference](https://docs.databricks.com/aws/en/compute/configure)

</details>


---

## Q347 · single choice · — not answered

A data engineer is designing a data pipeline. The source system generates files in a shared directory that is also used by other processes. As a result, the files should be kept as is and will accumulate in the directory. The data engineer needs to identify which files are new since the previous run in the pipeline, and set up the pipeline to only ingest those new files with each run. Which of the following tools can the data engineer use to solve this problem?

- **A.** Delta Lake
- **B.** Databricks SQL
- **C.** Data Explorer
- **D.** Unity Catalog
- ✅ **E.** Auto Loader

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Auto Loader

Auto Loader theo dõi tệp đã phát hiện trong checkpoint và xử lý tăng dần tệp mới đến mà không cần xóa tệp nguồn đã xử lý.

#### Vì sao các phương án khác không phù hợp?

- **Unity Catalog**: Unity Catalog quản trị truy cập tệp/bảng, không duy trì tiến độ nạp từng tệp được phát hiện.
- **Delta Lake**: Delta Lake cung cấp lưu trữ đích giao dịch, tự nó không phải cơ chế phát hiện tệp để nạp.
- **Databricks SQL**: Riêng Databricks SQL không mặc định có cơ chế phát hiện tệp mới dùng checkpoint.
- **Data Explorer**: Data Explorer duyệt tài sản thay vì nạp tệp tăng dần.

**Tham khảo:**

- [Auto Loader overview](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)

</details>


---

## Q348 · single choice · — not answered

In the classic Databricks architecture with customer-provided object storage, which of the following describes the customer datasets stored in that cloud account rather than a Databricks control-plane management service or workspace code asset?

- ✅ **A.** Data
- **B.** Notebooks
- **C.** Databricks web application
- **D.** Cluster management metadata

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** Data

Trong mô hình triển khai classic, dữ liệu khách hàng nằm trong lưu trữ đám mây của khách hàng, còn Databricks vận hành ứng dụng web và điều phối ở control plane.

#### Vì sao các phương án khác không phù hợp?

- **Databricks web application**: Ứng dụng web thuộc control plane của Databricks.
- **Cluster management metadata**: Dịch vụ và siêu dữ liệu quản lý cluster thuộc control plane, khác dữ liệu khách hàng.
- **Notebooks**: Bản sửa đổi notebook cũng có thể nằm dưới dạng dữ liệu hệ thống workspace trong bucket khách hàng; câu đã sửa hỏi riêng dữ liệu nghiệp vụ thay vì tài sản mã/hệ thống workspace.

**Tham khảo:**

- [High-level architecture](https://docs.databricks.com/aws/en/getting-started/high-level-architecture/)

</details>


---

## Q349 · single choice · — not answered

A data engineer needs to share Unity Catalog-managed Delta tables and the notebook source files that demonstrate how those tables are created with a partner that also uses Databricks. The requirement is to share notebook files, not deploy runnable job definitions. Which approach provides governed Databricks-to-Databricks asset sharing?

- **A.** Data and Notebooks can be shared simply using Unity Catalog.
- ✅ **B.** Share required datasets and notebooks via Delta Sharing. Manage permissions via Unity Catalog.
- **C.** Zip all the code and share via email and allow data ingestion from your data lake
- **D.** Share access to codebase via Github and allow them to ingest datasets from your Datalake.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Share required datasets and notebooks via Delta Sharing. Manage permissions via Unity Catalog.

Delta Sharing giữa hai bên Databricks hỗ trợ bảng và tệp notebook làm tài sản chia sẻ, với Unity Catalog quản trị share và quyền bên nhận. Cách này phân phối mã notebook, không phải định nghĩa job đã triển khai.

#### Vì sao các phương án khác không phù hợp?

- **Share access to codebase via Github and allow them to ingest datasets from your Datalake.**: GitHub phân phối mã được, nhưng nạp trực tiếp từ lake không cung cấp mô hình chia sẻ có quản trị của Delta Sharing.
- **Zip all the code and share via email and allow data ingestion from your data lake**: Tệp mã gửi email thiếu truy cập dữ liệu có quản trị liên tục và quản lý tài nguyên tự động.
- **Data and Notebooks can be shared simply using Unity Catalog.**: Unity Catalog quản lý quyền nhưng chuyển giao giữa tổ chức vẫn cần cơ chế chia sẻ rõ ràng.

**Tham khảo:**

- [Create shares and add assets](https://docs.databricks.com/aws/en/opensharing/create-share)

</details>


---

## Q350 · pick 2 · — not answered

The Delta transaction log for the ‘students’ tables is shown using the ‘DESCRIBE HISTORY students’ command. A Data Engineer needs to query the table as it existed before the UPDATE operation listed in the log. Which command should the Data Engineer use to achieve this? (Choose two.)

> ⚠️ This question references an image that is missing on the source site (404).

- **A.** SELECT * FROM students VERSION AS OF 5
- ✅ **B.** SELECT * FROM students TIMESTAMP AS OF ‘2024-04-22T 14:32:47.000+00:00’
- **C.** SELECT * FROM students TIMESTAMP AS OF ‘2024-04-22T 14:32:58.000+00:00’
- **D.** SELECT * FROM students FROM HISTORY VERSION AS OF 3
- ✅ **E.** SELECT * FROM students@v4

**Answer:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SELECT * FROM students@v4; SELECT * FROM students TIMESTAMP AS OF ‘2024-04-22T 14:32:47.000+00:00’

UPDATE tạo phiên bản5 lúc14:32:58; snapshot ngay trước là phiên bản4, commit lúc14:32:47. Cú pháp phiên bản rút gọn và time travel tại timestamp trước đó chọn cùng dữ liệu trước cập nhật, tùy tệp còn giữ và diễn giải múi giờ phiên đúng.

#### Vì sao các phương án khác không phù hợp?

- **SELECT * FROM students FROM HISTORY VERSION AS OF 3**: FROM HISTORY VERSION AS OF không phải cú pháp SELECT temporal hợp lệ và phiên bản3 không phải tiền nhiệm trực tiếp được hiển thị.
- **SELECT * FROM students VERSION AS OF 5**: VERSION AS OF5 chứa UPDATE thay vì trạng thái trước đó.
- **SELECT * FROM students TIMESTAMP AS OF ‘2024-04-22T 14:32:58.000+00:00’**: Timestamp14:32:58 tương ứng commit UPDATE, không phải snapshot WRITE trước.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

**Cần xem lại:** Lệnh TIMESTAMP AS OF được chọn dùng ngoặc cong và khoảng trắng sau T; bảng lịch sử chưa nêu múi giờ. Cách xử lý: Giữ hai ý version 4 và timestamp của version 4; thay ngoặc cong bằng dấu nháy SQL hợp lệ và bỏ khoảng trắng thừa sau T. Xác nhận múi giờ của bảng history rồi dùng timestamp cùng múi giờ; không tự suy luận UTC.

</details>


---

## Q351 · single choice · — not answered

A data engineer has written a function in a Databricks Notebook to calculate the population of bacteria in a given medium. `def calculate_population_of_bacteria (intital_population, exponential_factor) return future_population = intitial_population ** expontential_factor`

Analysts use this function in the notebook and sometimes provide input arguments of the wrong data type, which can cause errors during execution. 

Which Databricks feature will help the data engineer quickly identify if an incorrect data type has been provided as input?

- ✅ **A.** The Databricks debugger enables the use of a variable explorer to see at a glance the value of the variables.
- **B.** The Data Engineer should add print statements to find out what the variable is.
- **C.** The Spark User interface has a debug tab that contains the variables that are used in this session.
- **D.** The Databricks debugger enables breakpoints that will raise an error if the wrong data type is submitted.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The Databricks debugger enables the use of a variable explorer to see at a glance the value of the variables.

Variable explorer của debugger cho kiểm tra giá trị và kiểu đầu vào khi chạy. Nó giúp nhận diện đối số sai kiểu lúc gỡ lỗi.

#### Vì sao các phương án khác không phù hợp?

- **The Spark User interface has a debug tab that contains the variables that are used in this session.**: Spark UI tập trung job và task phân tán, không phải biến cục bộ Python.
- **The Databricks debugger enables breakpoints that will raise an error if the wrong data type is submitted.**: Breakpoint tạm dừng thực thi, không tự cưỡng chế kiểu đối số.
- **The Data Engineer should add print statements to find out what the variable is.**: Print có thể giúp thủ công nhưng không cung cấp variable explorer tích hợp.

**Tham khảo:**

- [Notebook and file editor](https://docs.databricks.com/aws/en/notebooks/notebook-editor)

**Cần xem lại:** Hàm thiếu dấu hai chấm, dùng return kèm phép gán và viết không thống nhất tên tham số. Cách xử lý: Giữ đáp án variable explorer; thay hàm bằng def calculate_population_of_bacteria(initial_population, exponential_factor): rồi dòng thụt lề return initial_population ** exponential_factor.

</details>


---

## Q352 · single choice · — not answered

A data engineer needs to optimize the data layout and query performance for an e-commerce transactions Delta table. The table is partitioned by "purchase_date" a date column which helps with time-based queries but does not optimize searches on user statistics "customer_id", a high-cardinality column. The table is usually queried with filters on "customer_id" within specific date ranges, but since this data is spread across multiple files in each partition, it results in full partition scans and increased runtime and costs. How should the data engineer optimize the Data Layout for efficient reads?

- **A.** Alter the table to partition by "customer_id".
- **B.** Enable delta caching on the cluster so that frequent reads are cached for performance.
- **C.** Alter table implementing liquid clustering on "customer_id" while keeping the existing partitioning.
- ✅ **D.** Alter the table implementing liquid clustering by "customer_id" and "purchase_date".

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Alter the table implementing liquid clustering by "customer_id" and "purchase_date".

Liquid clustering theo customer_id và purchase_date bố trí tệp cho cả bộ lọc khách hàng lẫn khoảng ngày. Nó thay thế bố cục phân vùng thay vì cùng tồn tại.

#### Vì sao các phương án khác không phù hợp?

- **Alter table implementing liquid clustering on "customer_id" while keeping the existing partitioning.**: Liquid clustering không kết hợp cùng sơ đồ phân vùng truyền thống hiện có.
- **Alter the table to partition by "customer_id".**: Phân vùng theo mã khách hàng có nhiều giá trị dễ tạo rất nhiều phân vùng nhỏ và mất bố cục hướng ngày.
- **Enable delta caching on the cluster so that frequent reads are cached for performance.**: Cache có thể tăng tốc đọc lặp lại nhưng không sửa bố cục tệp cho truy vấn chọn lọc.

**Tham khảo:**

- [Use liquid clustering for tables](https://docs.databricks.com/gcp/en/tables/clustering)

</details>


---

## Q353 · single choice · — not answered

An organization plans to share a large dataset stored in a Databricks workspace on AWS with a partner organization whose Databricks workspace is hosted on Azure. The data engineer wants to minimize data transfer costs while ensuring secure and efficient data sharing. Which strategy will reduce data egress costs associated with cross-cloud data sharing?

- **A.** Sharing data via pre-signed URLs without monitoring egress costs
- **B.** Configure VPN connection between AWS and Azure for faster data sharing
- **C.** Migrating the dataset to Cloudflare R2 object storage before sharing
- ✅ **D.** Using Delta Sharing without any additional configurations

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Using Delta Sharing without any additional configurations

Khóa nguồn chọn Delta Sharing thuần túy, cung cấp chia sẻ an toàn nhưng không loại phí xuất dữ liệu lưu trữ xuyên đám mây. Di chuyển hoặc sao chép dữ liệu chia sẻ sang Cloudflare R2 là chiến lược được tài liệu nêu để tránh phí xuất lưu trữ.

#### Vì sao các phương án khác không phù hợp?

- **Migrating the dataset to Cloudflare R2 object storage before sharing**: Di chuyển sang R2 thực tế là cách giảm phí xuất được tài liệu nêu, mâu thuẫn với khóa nguồn.
- **Configure VPN connection between AWS and Azure for faster data sharing**: VPN thay đổi kết nối nhưng không miễn phí xuất của nhà cung cấp lưu trữ.
- **Sharing data via pre-signed URLs without monitoring egress costs**: URL ký sẵn cho phép đọc nhưng không loại hay kiểm soát phí xuất.

**Tham khảo:**

- [Manage sharing egress costs](https://docs.databricks.com/aws/en/opensharing/manage-egress)

**Cần xem lại:** Khóa không chọn chiến lược R2 giảm phí egress như yêu cầu. Cách xử lý: Chọn nội dung di chuyển dataset sang Cloudflare R2 trước khi chia sẻ sau khi duyệt đổi khóa; nêu chi phí di chuyển ban đầu riêng nếu cần.

</details>


---

## Q354 · single choice · — not answered

A Databricks single-task workflow fails due to an error in a notebook. The data engineer fixes the mistake in the notebook. What should the data engineer do to rerun the workflow?

- ✅ **A.** Trigger the corrected single-task job again using Run now.
- **B.** Restart the Cluster
- **C.** Repair the task
- **D.** Swap the cluster

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** Trigger the corrected single-task job again using Run now.

Với job một tác vụ, Run now gửi lượt thực thi mới dùng notebook đã sửa. Repair run dành cho job điều phối ít nhất hai tác vụ.

#### Vì sao các phương án khác không phù hợp?

- **Repair the task**: Repair task không phải hành động phục hồi được quy định cho job một tác vụ.
- **Restart the Cluster**: Khởi động lại compute không gửi chạy job notebook đã sửa.
- **Swap the cluster**: Đổi compute không thực thi notebook đã sửa.

**Tham khảo:**

- [Troubleshoot and repair job failures](https://docs.databricks.com/aws/en/jobs/repair-job-failures)

</details>


---

## Q355 · single choice · — not answered

After a failed multi-task job run, a data engineer changes the cluster size and updates a notebook path for one task. The data engineer wants to re-run just the failed/skipped tasks with the updated settings and keep the run lineage intact. Which strategy should the data engineer use to preserve the run history?

- **A.** Export the job as a Databricks Asset Bundle, redeploy it, and re-run only the modified tasks from the bundle.
- ✅ **B.** Use Jobs REST API repairRun to re-run failed tasks; the repair uses the current job and task settings and appears in the run history.
- **C.** Increase the task retry count and click 'Retry' on the failed task to automatically apply new cluster settings within the same run.
- **D.** Use 'Run now' to start a new run, so that the updated settings apply; the new run replaces the prior run history.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Jobs REST API repairRun to re-run failed tasks; the repair uses the current job and task settings and appears in the run history.

Repair chạy lại tác vụ thất bại và phụ thuộc với thiết lập job/tác vụ hiện tại, ghi lần sửa trong lịch sử lượt chạy gốc, giữ công việc đã thành công và lineage.

#### Vì sao các phương án khác không phù hợp?

- **Increase the task retry count and click 'Retry' on the failed task to automatically apply new cluster settings within the same run.**: Số lần retry không phải cơ chế được mô tả để áp dụng cấu hình đã sửa bằng repair rõ ràng cho lượt chạy cũ.
- **Export the job as a Databricks Asset Bundle, redeploy it, and re-run only the modified tasks from the bundle.**: Triển khai lại bundle quản lý định nghĩa, không tự sửa lượt chạy trong lịch sử gốc.
- **Use 'Run now' to start a new run, so that the updated settings apply; the new run replaces the prior run history.**: Run now tạo lượt riêng và không thay thế lịch sử lượt trước.

**Tham khảo:**

- [Troubleshoot and repair job failures](https://docs.databricks.com/aws/en/jobs/repair-job-failures)

</details>


---

## Q356 · single choice · — not answered

A data engineer needs to enforce row-level security on main.secure.events (region STRING, event_id STRING). Members of the account group all_regions need to see all rows. All other users need to see only rows where region = 'EU'. Which SQL sequence satisfies the requirement?

- **A.** CREATE FUNCTION main.secure.region_filter(region STRING)
  
  RETURN IF(is_account_group_member('all_regions'), true, region - 'EU');
  
  ALTER VIEW main.secure.events
  
  SET ROW FILTER main.secure.region_filter ON (region);
- **B.** CREATE FUNCTION main.secure.region_filter (region STRING)
  
  RETURN IF (is_account_group_member('all_regions'), true, region = 'EU');
  
  ALTER TABLE main.secure.events
  
  ALTER COLUMN region
  
  SET MASK main.secure.region_filter:
- ✅ **C.** CREATE FUNCTION main.secure.region_filter(region STRING)
  
  RETURN IF(is_account_group_member('all_regions'), true, region = 'EU');
  
  ALTER TABLE main.secure.events
  
  SET ROW FILTER main.secure.region_filter ON (region);
- **D.** CREATE FUNCTION main.secure.region_filter (region STRING)
  
  RETURN IF (is_account_group_member('all_regions'), true, region = 'EU');
  
  ALTER TABLE main.secure.events
  
  SET ROW FILTER main.secure.region_filter 
  
  USING COLUMNS (region):

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE FUNCTION main.secure.region_filter(region STRING)RETURN IF(is_account_group_member('all_regions'), true, region = 'EU');ALTER TABLE main.secure.eventsSET ROW FILTER main.secure.region_filter ON (region);

Tạo hàm Boolean trước rồi gắn vào bảng bằng SET ROW FILTER ... ON (region). Thành viên nhóm nhận true cho mọi hàng; người khác chỉ qua khi region bằng EU.

#### Vì sao các phương án khác không phù hợp?

- **CREATE FUNCTION main.secure.region_filter(region STRING)RETURN IF(is_account_group_member('all_regions'), true, region - 'EU');ALTER VIEW main.secure.eventsSET ROW FILTER main.secure.region_filter ON (region);**: ALTER VIEW nhắm sai loại đối tượng và region trừ chuỗi không phải phép kiểm bằng dự định.
- **CREATE FUNCTION main.secure.region_filter (region STRING)RETURN IF (is_account_group_member('all_regions'), true, region = 'EU');ALTER TABLE main.secure.eventsALTER COLUMN regionSET MASK main.secure.region_filter:**: Predicate hàng Boolean không phải mask trả chuỗi cho region; mask không thực hiện loại hàng cần có.
- **CREATE FUNCTION main.secure.region_filter (region STRING)RETURN IF (is_account_group_member('all_regions'), true, region = 'EU');ALTER TABLE main.secure.eventsSET ROW FILTER main.secure.region_filter USING COLUMNS (region):**: Cú pháp gắn được quy định dùng ON (region), không phải USING COLUMNS.

**Tham khảo:**

- [Apply row filters and masks](https://docs.databricks.com/aws/en/data-governance/unity-catalog/filters-and-masks/manually-apply)

**Cần xem lại:** Đáp án được chọn chứa main.secure.eventsSET ROW FILTER, thiếu khoảng trắng trước SET và không chạy được. Cách xử lý: Giữ khóa hiện tại; sửa thành ALTER TABLE main.secure.events SET ROW FILTER main.secure.region_filter ON (region); và trình bày hai câu lệnh SQL trên các dòng riêng.

</details>


---

## Q357 · single choice · — not answered

Which single Databricks CLI command deploys local bundle assets to the target workspace specified in the configuration file?

- **A.** databricks bundle init && databricks bundle deployment
- ✅ **B.** databricks bundle deploy
- **C.** databricks bundle validate
- **D.** databricks bundle plan && databricks bundle run

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** databricks bundle deploy

databricks bundle deploy đồng bộ tài sản và tạo/cập nhật tài nguyên tại workspace đích từ cấu hình. Có thể chọn target bằng -t nếu không dùng target mặc định.

#### Vì sao các phương án khác không phù hợp?

- **databricks bundle init && databricks bundle deployment**: init tạo dự án; bundle deployment không thay thế lệnh deploy và chuỗi này không phải một lệnh triển khai hợp lệ.
- **databricks bundle plan && databricks bundle run**: plan xem thay đổi và run thực thi tài nguyên đã triển khai; không thay thế deploy.
- **databricks bundle validate**: validate kiểm tra cấu hình nhưng không triển khai tài nguyên.

**Tham khảo:**

- [bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q358 · single choice · — not answered

A data engineer needs to create a table in Databricks using data from their organization’s existing SQLite database. They run the following command: `CREATE TABLE jdbc_customer360 USING _____ OPTIONS ( url "jdbc:sqlite:/customers.db", dbtable "customer360" )`

Which of the following lines of code fills in the above blank to successfully complete the task?

- **A.** DELTA
- **B.** autoloader
- ✅ **C.** org.apache.spark.sql.jdbc
- **D.** sqlite
- **E.** org.apache.spark.sql.sqlite

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** org.apache.spark.sql.jdbc

org.apache.spark.sql.jdbc là provider nguồn JDBC được tài liệu Spark SQL minh họa trực tiếp. URL jdbc:sqlite chọn SQLite qua provider đó; môi trường còn cần driver SQLite JDBC tương thích.

#### Vì sao các phương án khác không phù hợp?

- **autoloader**: Auto Loader phát hiện tệp cloud thay vì mở cơ sở dữ liệu SQLite qua JDBC.
- **DELTA**: Delta là định dạng lưu trữ bảng, không phải provider JDBC cho URL này.
- **sqlite**: sqlite trong URL chỉ subprotocol JDBC, không phải nguồn Spark sqlite được tích hợp phổ quát.
- **org.apache.spark.sql.sqlite**: org.apache.spark.sql.sqlite không phải provider nguồn JDBC được quy định.

**Tham khảo:**

- [Spark JDBC data source](https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html)

</details>


---

## Q359 · single choice · — not answered

A data engineer is joining a very large events_df (billions of rows) with a small country_lookup_df (fewer than 10,000 rows) on the country_code column. The join is slow due to data shuffling. How should the data engineer improve performance?

- **A.** Cache both DataFrames, then run the same join
- **B.** Persist both DataFrames, then run the same join
- **C.** broadcast events_df when performing the join
- ✅ **D.** broadcast country_lookup_df when performing the join

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** broadcast country_lookup_df when performing the join

Broadcast country_lookup_df để mỗi executor nối bảng nhỏ cục bộ với partition events. Cách này tránh shuffle bảng events khổng lồ cho join chia lại partition thông thường.

#### Vì sao các phương án khác không phù hợp?

- **Cache both DataFrames, then run the same join**: Cache hai đầu vào tự nó không loại shuffle join.
- **Persist both DataFrames, then run the same join**: Persist hai đầu vào cũng không thay chiến lược join.
- **broadcast events_df when performing the join**: Broadcast hàng tỷ events không khả thi và đảo bên nhỏ phù hợp.

**Tham khảo:**

- [Spark SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

</details>


---

## Q360 · single choice · — not answered

A data engineer only wants to execute the final block of a Python program if the Python variable day_of_week is equal to 1 and the Python variable review_period is True. Which of the following control flow statements should the data engineer use to begin this conditionally executed code block?

- **A.** if day_of_week = 1 and review_period = "True":
- **B.** if day_of_week = 1 and review_period:
- **C.** if day_of_week == 1 and review_period == "True":
- ✅ **D.** if day_of_week == 1 and review_period:
- **E.** if day_of_week = 1 & review_period: = "True":

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** if day_of_week == 1 and review_period:

Dùng == để so sánh bằng và and để kết hợp với Boolean review_period. Khối chỉ chạy khi cả hai điều kiện đúng.

#### Vì sao các phương án khác không phù hợp?

- **if day_of_week = 1 and review_period:**: Dấu = đơn là phép gán và không hợp lệ trong phép so sánh if này.
- **if day_of_week = 1 and review_period = "True":**: Mã dùng cú pháp gán và so sánh với chuỗi thay vì Boolean.
- **if day_of_week == 1 and review_period == "True":**: Chuỗi "True" khác Boolean True được giả định trong câu.
- **if day_of_week = 1 & review_period: = "True":**: Mã trộn dấu gán sai với toán tử bit thay vì điều kiện Boolean hợp lệ.

**Tham khảo:**

- [Python if statements](https://docs.python.org/3/reference/compound_stmts.html#if)

</details>


---

## Q361 · single choice · — not answered

What are the transformations typically included in building the Bronze layer?

- **A.** Business rules and transformations
- ✅ **B.** Include columns Load date/time, process ID
- **C.** Aggregate data from multiple sources
- **D.** Perform extensive data cleansing

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Include columns Load date/time, process ID

Timestamp nạp và ID tiến trình thêm dấu vết nạp trong khi giữ giá trị nguồn thô ở Bronze. Chúng giúp truy nguyên bản ghi đến từ đâu và khi nào.

#### Vì sao các phương án khác không phù hợp?

- **Perform extensive data cleansing**: Làm sạch sâu chủ yếu thuộc xử lý Silver.
- **Business rules and transformations**: Quy tắc nghiệp vụ thường nằm sau bước giữ nguồn thô, ở Silver hoặc Gold.
- **Aggregate data from multiple sources**: Aggregate nghiệp vụ xuyên nguồn là đặc trưng Gold.

**Tham khảo:**

- [Medallion architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q362 · single choice · — not answered

A data engineer has a Job that has a complex run schedule, and they want to transfer that schedule to other Jobs. Rather than manually selecting each value in the scheduling form in Databricks, which of the following tools can the data engineer use to represent and submit the schedule programmatically?

- **A.** There is no way to represent and submit this information programmatically
- ✅ **B.** Cron syntax
- **C.** pyspark.sql.types.DateType
- **D.** datetime
- **E.** pyspark.sql.types.TimestampType

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Cron syntax

Cron biểu diễn lịch thời gian lặp lại bằng biểu thức gọn, tái sử dụng được trong cấu hình job và yêu cầu API.

#### Vì sao các phương án khác không phù hợp?

- **pyspark.sql.types.DateType**: DateType là kiểu dữ liệu Spark, không biểu diễn lịch lặp.
- **datetime**: datetime biểu diễn và xử lý ngày giờ nhưng không phải biểu thức cron của bộ lịch job.
- **pyspark.sql.types.TimestampType**: TimestampType là kiểu cột, không phải lịch thực thi lặp.
- **There is no way to represent and submit this information programmatically**: Jobs hỗ trợ cấu hình cron qua API nên có thể đặt lịch bằng chương trình.

**Tham khảo:**

- [Run jobs on a schedule](https://docs.databricks.com/aws/en/jobs/scheduled)

</details>


---

## Q363 · single choice · — not answered

In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?

- **A.** When another task needs to use as little compute resources as possible
- **B.** When another task needs to be replaced by the new task
- **C.** When another task has the same dependency libraries as the new task
- ✅ **D.** When another task needs to successfully complete before the new task begins
- **E.** When another task needs to fail before the new task begins

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** When another task needs to successfully complete before the new task begins

Chọn tác vụ trước trong Depends on khiến tác vụ mới chờ phụ thuộc; điều kiện All succeeded mặc định yêu cầu tác vụ trước hoàn tất thành công.

#### Vì sao các phương án khác không phù hợp?

- **When another task needs to be replaced by the new task**: Phụ thuộc thiết lập thứ tự, không thay thế tác vụ cũ.
- **When another task needs to fail before the new task begins**: Thực thi theo thất bại cần Run if phù hợp, không chỉ phụ thuộc thành công mặc định.
- **When another task has the same dependency libraries as the new task**: Dùng chung thư viện không tạo phụ thuộc dữ liệu hoặc thực thi.
- **When another task needs to use as little compute resources as possible**: Depends on là quan hệ thứ tự, không phải thiết lập trực tiếp giảm tài nguyên.

**Tham khảo:**

- [Configure task dependencies](https://docs.databricks.com/aws/en/jobs/run-if)

</details>


---

## Q364 · single choice · — not answered

A data engineer needs to apply custom logic to string column city in table stores for a specific use case. In order to apply this custom logic at scale, the data engineer wants to create a SQL user-defined function (UDF). Which of the following code blocks creates this SQL UDF?

- **A.** [image]
- **B.** [image]
- **C.** [image]
- **D.** [image]
- ✅ **E.** [image]

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE FUNCTION combine_nyc(city STRING) RETURNS STRING RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;

CREATE FUNCTION có tham số định kiểu và RETURN CASE định nghĩa biến đổi SQL scalar được yêu cầu. RETURNS STRING tường minh hợp lệ, nhưng cú pháp SQL UDF hiện cho phép suy ra kiểu trả về, nên biến thể CREATE FUNCTION khác được in cũng hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **CREATE UDF combine_nyc(city STRING) RETURNS STRING CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;**: CREATE UDF không phải từ khóa khai báo được quy định và đoạn này còn thiếu RETURN.
- **CREATE UDF combine_nyc(city STRING) RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;**: Dùng CREATE UDF thay CREATE FUNCTION làm khai báo không hợp lệ.
- **CREATE FUNCTION combine_nyc(city STRING) RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;**: Bỏ RETURNS được phép với SQL UDF khi suy ra được kiểu kết quả; đây cũng là ứng viên hợp lệ.
- **CREATE UDF combine_nyc(city STRING) RETURNS STRING RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;**: CREATE UDF vẫn không hợp lệ dù có RETURNS và RETURN.

**Tham khảo:**

- [CREATE FUNCTION](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-sql-function)

**Cần xem lại:** Câu một đáp án có hai đoạn CREATE FUNCTION hợp lệ, có và không có RETURNS STRING. Cách xử lý: Giữ khóa đoạn có RETURNS STRING và sửa câu hỏi thành yêu cầu khai báo tường minh kiểu trả về STRING; hoặc duyệt chuyển câu sang nhiều đáp án nếu giữ nguyên câu hỏi.

</details>


---

## Q365 · single choice · — not answered

A Data Engineer is building a simple data pipeline using Delta Live Tables (DLT) in Databricks to ingest customer data. The raw customer data is stored in a cloud storage location in JSON format. The task is to create a DLT pipeline that reads the raw JSON data and writes it into a Delta table for further processing. Which code snippet will correctly ingest the raw JSON data and create a Delta table using DLT?

- **A.** import dlt@dlt.tabledef raw_customers():return spark.read.format("json").load("s3://my-bucket/raw- customers/")
- **B.** import dlt@dlt.tabledef raw_customers():return spark.read.text("s3://my-bucket/raw-customers/")
- ✅ **C.** @dlt.tabledef raw_customers():return spark.read.json("s3://my-bucket/raw-customers/")
- **D.** import dlt@dlt.tabledef raw_customers():return spark.read.format("delta").load("s3://my-bucket/raw- customers/")

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** @dlt.tabledef raw_customers():return spark.read.json("s3://my-bucket/raw-customers/")

Dataset có decorator trả spark.read.json biểu diễn nạp JSON. Tuy nhiên đoạn được chọn thiếu import dlt; chỉ chạy khi dlt đã có trong phạm vi, và reader dùng format json khác cũng đúng về ý tưởng sau khi định dạng hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **import dlt@dlt.tabledef raw_customers():return spark.read.format("json").load("s3://my-bucket/raw- customers/")**: Với import, thụt dòng và đường dẫn nguồn đúng, read.format("json") cũng nạp JSON; yêu cầu không loại cách này.
- **import dlt@dlt.tabledef raw_customers():return spark.read.format("delta").load("s3://my-bucket/raw- customers/")**: Reader Delta cần bảng Delta thay vì tệp JSON thô.
- **import dlt@dlt.tabledef raw_customers():return spark.read.text("s3://my-bucket/raw-customers/")**: Reader text tạo dòng văn bản thô thay vì phân tích bản ghi JSON.

**Tham khảo:**

- [Python pipeline development](https://docs.databricks.com/aws/en/ldp/developer/python-dev)

**Cần xem lại:** Không có snippet Python hoàn chỉnh chạy được; còn mơ hồ giữa hai cách đọc JSON tương đương. Cách xử lý: Giữ ý đáp án read.json; thêm import dlt, xuống dòng decorator/hàm và thụt lề return; đồng thời sửa phương án dùng format("json").load thành định dạng không phải JSON để chỉ còn một đáp án đúng.

</details>


---

## Q366 · single choice · — not answered

A data engineer is working in a Python notebook on Databricks to process data, but notices that the output is not as expected. The data engineer wants to investigate the issue by stepping through the code and checking the values of certain variables during execution. Which tool should the data engineer use to inspect the code execution and variables in real-time?

- **A.** Job Execution Dashboard
- ✅ **B.** Python Notebook Interactive Debugger
- **C.** Cluster Logs
- **D.** SQL Analytics

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Python Notebook Interactive Debugger

Trình gỡ lỗi notebook tương tác hỗ trợ breakpoint, chạy từng bước và xem biến tại điểm thực thi hiện tại.

#### Vì sao các phương án khác không phù hợp?

- **Cluster Logs**: Log cluster ghi sự kiện và lỗi thay vì chạy tương tác từng bước.
- **SQL Analytics**: SQL Analytics hướng phân tích SQL, không phải trạng thái gỡ lỗi Python trực tiếp.
- **Job Execution Dashboard**: Dashboard job theo dõi trạng thái và lịch sử chạy, không phải biến cục bộ tại breakpoint.

**Tham khảo:**

- [Debug Databricks notebooks](https://docs.databricks.com/aws/en/notebooks/debugger)

</details>


---

## Q367 · single choice · — not answered

A data engineer needs to parse only png files in a directory that contains files with different suffixes. Which code should the data engineer use to achieve this task?

- **A.** df = spark.readStream.format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .option("pathGlobfilter", "*.png") \ .append()
- ✅ **B.** df = spark.readstream. format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .option("pathGlobfilter", "*.png") \ .load()
- **C.** df = spark.readStream.format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .append("/*.png")
- **D.** df = spark.readstream.format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .load("/*.png")

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df = spark.readstream. format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .option("pathGlobfilter", "*.png") \ .load()

Cấu hình dự kiến dùng binaryFile với pathGlobFilter="*.png" và load để giới hạn tên tệp. Mã được in có lỗi tên API và đường dẫn nên không thể coi là chạy được nguyên trạng.

#### Vì sao các phương án khác không phù hợp?

- **df = spark.readStream.format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .append("/*.png")**: append không phải phương thức nạp của DataStreamReader và không cấu hình lọc tên.
- **df = spark.readStream.format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .option("pathGlobfilter", "*.png") \ .append()**: append không thể thay load trên bộ đọc streaming này.
- **df = spark.readstream.format("cloudFiles") \ .option("cloudFiles.format", "binaryFile") \ .load("/*.png")**: Đoạn này cũng viết sai hoa-thường readstream và không thể hiện tùy chọn pathGlobFilter cần dùng.

**Tham khảo:**

- [Auto Loader options](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/options)

**Cần xem lại:** Snippet được chọn dùng spark.readstream và load() không có đường dẫn nguồn. Cách xử lý: Giữ ý lọc *.png bằng pathGlobFilter; sửa thành spark.readStream.format("cloudFiles").option("cloudFiles.format", "binaryFile").option("pathGlobFilter", "*.png").load("

</details>


---

## Q368 · single choice · — not answered

Which of the following supplies the executable dataset and transformation definitions required by a Lakeflow Spark Declarative Pipelines pipeline, formerly Delta Live Tables?

- ✅ **A.** At least one pipeline source file or notebook containing SQL or Python dataset definitions.
- **B.** The preferred DBU/hour cost
- **C.** A path to cloud storage location for the written data
- **D.** A location of a target database for the written data
- **E.** A key-value pair configuration

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** At least one pipeline source file or notebook containing SQL or Python dataset definitions.

Pipeline cần mã nguồn SQL hoặc Python định nghĩa tập dữ liệu và phép biến đổi. Các định nghĩa có thể nằm trong tệp nguồn được hỗ trợ hoặc notebook; riêng notebook không bắt buộc.

#### Vì sao các phương án khác không phù hợp?

- **A key-value pair configuration**: Cấu hình khóa-giá trị tùy chỉnh là tùy chọn, không bắt buộc chung.
- **The preferred DBU/hour cost**: Mức DBU/giờ mong muốn không phải trường bắt buộc của định nghĩa pipeline.
- **A path to cloud storage location for the written data**: Đường dẫn lưu trữ đám mây tường minh không luôn bắt buộc vì có thể dùng managed storage.
- **A location of a target database for the written data**: Có thể cấu hình đích xuất bản nhưng pipeline cũ có thể chạy mà không xuất bản vào database đích.

**Tham khảo:**

- [Pipeline source code and update modes](https://docs.databricks.com/aws/en/ldp/concepts/pipelines)

</details>


---

## Q369 · single choice · — not answered

A data engineer uses SQL to conduct exploratory analysis of a database in the company's private cloud network. Supported connectivity and data access from serverless SQL have already been configured, and the workspace is in a supported region. Which SQL warehouse type provides managed, rapidly scaling compute for many analytical queries with minimal infrastructure management?

- **A.** Classic SQL Warehouse
- ✅ **B.** Serverless SQL Warehouse
- **C.** Serverless compute for notebooks
- **D.** Pro SQL Warehouse

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Serverless SQL Warehouse

Khi đã cấu hình kết nối nguồn, serverless SQL warehouse cung cấp khởi động và co giãn tải có quản lý cho SQL phân tích mà kỹ sư không phải cấp phát hạ tầng warehouse.

#### Vì sao các phương án khác không phù hợp?

- **Serverless compute for notebooks**: Compute serverless cho notebook không phải endpoint SQL warehouse cho trường hợp phân tích SQL này.
- **Pro SQL Warehouse**: Pro có thể hỗ trợ yêu cầu mạng khách hàng nhưng còn nhiều chi phí vận hành cấp phát hơn serverless khi kết nối serverless được hỗ trợ.
- **Classic SQL Warehouse**: Classic warehouse thiếu lợi thế khởi động và quản lý tải serverless được mô tả.

**Tham khảo:**

- [SQL warehouse sizing scaling and queuing](https://docs.databricks.com/aws/en/compute/sql-warehouse/warehouse-behavior)

</details>


---

## Q370 · single choice · — not answered

A production ETL notebook runs once nightly and currently executes on a shared all-purpose cluster that stays running 24 hours a day. Which change reduces cost while preserving the schedule?

- **A.** Move the notebook to a SQL warehouse with auto-stop disabled.
- **B.** Increase the all-purpose cluster's minimum worker count to speed up the run.
- **C.** Convert the notebook to a global temp view refreshed on demand.
- ✅ **D.** Configure the scheduled job to use a job cluster that is created at run start and terminated at run end.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Configure the scheduled job to use a job cluster that is created at run start and terminated at run end.

Job compute được cấp cho lượt chạy ban đêm và dừng sau đó, giữ lịch nhưng loại bỏ tài nguyên nhàn cả ngày của cluster dùng chung.

#### Vì sao các phương án khác không phù hợp?

- **Increase the all-purpose cluster's minimum worker count to speed up the run.**: Tăng worker tối thiểu làm tăng phí nền và không thay vòng đời nhàn.
- **Move the notebook to a SQL warehouse with auto-stop disabled.**: Warehouse tắt auto-stop vẫn chạy liên tục và có thể không hỗ trợ mã ngoài SQL của notebook.
- **Convert the notebook to a global temp view refreshed on demand.**: Global temporary view không thay thế việc thực thi notebook ETL theo lịch.

**Tham khảo:**

- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q371 · pick 2 · — not answered

A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Development mode using the Continuous Pipeline Mode. Assuming previously unprocessed data exists and all definitions are valid, which two statements describe continuous processing and the retained development compute? (Choose two.)

- ✅ **A.** All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing.
- **B.** All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing.
- **C.** All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused.
- ✅ **D.** All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist until the pipeline is shut down.
- **E.** All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated.

**Answer:** A, D

<details><summary>Explanation</summary>

**Nội dung đáp án:** All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist until the pipeline is shut down.; All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing.

Continuous tiếp tục làm mới tập dữ liệu khi dữ liệu đến cho tới khi pipeline dừng. Development giữ compute để lặp phát triển, nên cả hai mô tả cập nhật lặp với compute được giữ đều phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated.**: Một cập nhật rồi tắt mô tả triggered production thay vì continuous development.
- **All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused.**: Xử lý continuous không cố ý ngừng mọi xử lý sau cập nhật đầu.
- **All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing.**: Một cập nhật rồi dừng là hành vi triggered, dù compute được giữ để thử nghiệm sau.

**Tham khảo:**

- [Pipeline source code and update modes](https://docs.databricks.com/aws/en/ldp/concepts/pipelines)
- [Pipeline API development mode and continuous settings](https://learn.microsoft.com/en-us/azure/databricks/delta-live-tables/api-guide)

</details>


---

## Q372 · single choice · — not answered

A data engineer has a bundle with a job resource keyed as etl_job in databricks.yml. After running 'databricks bundle deploy', the job appears in the workspace but has not executed. Which command triggers execution of the deployed job?

- **A.** databricks bundle execute etl_job
- **B.** databricks jobs submit --json
- ✅ **C.** databricks bundle run etl_job
- **D.** databricks bundle deploy --run

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** databricks bundle run etl_job

bundle run etl_job chạy tài nguyên đã triển khai theo khóa etl_job trong cấu hình bundle. Deploy tạo hoặc cập nhật tài nguyên nhưng không đồng nghĩa với một lần chạy job.

#### Vì sao các phương án khác không phù hợp?

- **databricks jobs submit --json**: jobs submit tạo lần chạy một lần từ JSON, không chọn tài nguyên bundle bằng khóa.
- **databricks bundle deploy --run**: deploy --run không phải cú pháp được tài liệu hóa để chạy job bundle.
- **databricks bundle execute etl_job**: bundle execute không phải lệnh chạy bundle được hỗ trợ.

**Tham khảo:**

- [bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q373 · single choice · — not answered

A data engineer creates a table customersInFrance from a SELECT over customerLocations. Organization policy requires a key/value table property recording that it contains personally identifiable information. Which CREATE TABLE clause records PII=true as a table property?

- **A.** "COMMENT PII"
- **B.** There is no way to indicate whether a table contains PII.
- **C.** COMMENT "Contains PII"
- ✅ **D.** TBLPROPERTIES ('PII' = 'true')
- **E.** PII

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** TBLPROPERTIES ('PII' = 'true')

TBLPROPERTIES có phép gán khóa/giá trị trong ngoặc lưu thuộc tính PII yêu cầu vào siêu dữ liệu bảng. COMMENT là văn bản mô tả, không phải thuộc tính đó.

#### Vì sao các phương án khác không phù hợp?

- **COMMENT "Contains PII"**: COMMENT lưu mô tả, không phải thuộc tính khóa/giá trị PII được yêu cầu.
- **There is no way to indicate whether a table contains PII.**: CREATE TABLE hỗ trợ thuộc tính bảng nên khẳng định không thể ghi PII bằng siêu dữ liệu là sai.
- **PII**: PII riêng lẻ không phải mệnh đề siêu dữ liệu CREATE TABLE.
- **"COMMENT PII"**: Cụm COMMENT trong dấu nháy không phải phép gán thuộc tính hợp lệ.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q374 · single choice · — not answered

A data engineer is building an ETL pipeline in Databricks that loads raw JSON files from cloud object storage into a Delta Lake table. The pipeline must ensure ACID transactions and schema enforcement while supporting scalable reads and writes from multiple concurrent jobs. Which storage format should the engineer use?

- **A.** Avro
- **B.** Parquet
- ✅ **C.** Delta Lake
- **D.** CSV

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta Lake

Delta Lake kết hợp dữ liệu Parquet với nhật ký giao dịch để đọc/ghi đồng thời dùng snapshot nhất quán và thao tác ghi tuân thủ schema bảng.

#### Vì sao các phương án khác không phù hợp?

- **Avro**: Avro là định dạng tuần tự hóa, tự nó không cung cấp giao dịch bảng Delta.
- **Parquet**: Parquet cung cấp tệp cột, nhưng điều phối ACID cần thêm lớp bảng/nhật ký.
- **CSV**: CSV là tệp văn bản không tích hợp điều phối bảng giao dịch.

**Tham khảo:**

- [What is Delta Lake?](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q375 · single choice · — not answered

A data engineer works for an organization that must meet a stringent Service Level Agreement (SLA) that demands minimal runtime errors and high availability for its data processing pipelines. The data engineer wants to avoid the operational overhead of managing and tuning clusters. Which architectural solution will meet the requirements?

- **A.** Implement a hybrid approach with scheduled batch jobs on custom cloud VMs.
- **B.** Deploy a dedicated, manually managed cluster optimized by in-house IT staff.
- ✅ **C.** Utilize Databricks serverless compute that automatically optimizes resources and abstracts cluster management.
- **D.** Use an auto-scaling cluster configured and monitored by the user.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Utilize Databricks serverless compute that automatically optimizes resources and abstracts cluster management.

Serverless compute quản lý cấp phát, co giãn và vận hành runtime, giảm gánh nặng quản lý cluster và lỗi cấu hình. Nó không bảo đảm logic ứng dụng hay mọi SLA tự động đúng.

#### Vì sao các phương án khác không phù hợp?

- **Use an auto-scaling cluster configured and monitored by the user.**: Cluster autoscaling do người dùng quản lý vẫn cần cấu hình, nâng cấp và theo dõi vận hành.
- **Implement a hybrid approach with scheduled batch jobs on custom cloud VMs.**: VM tùy chỉnh tăng trách nhiệm điều phối và bảo trì hạ tầng.
- **Deploy a dedicated, manually managed cluster optimized by in-house IT staff.**: Compute riêng quản lý tay vẫn giữ công việc quản lý cluster mà yêu cầu muốn tránh.

**Tham khảo:**

- [Migrate to serverless compute](https://docs.databricks.com/aws/en/compute/serverless/migration)

</details>


---

## Q376 · single choice · — not answered

What Databricks feature can be used to check the data sources and tables used in a workspace?

- **A.** Do not use the lineage feature as it only tracks activity from the last 3 months and will not provide full details on dependencies.
- ✅ **B.** Use the lineage feature to visualize a graph that shows all dependencies, including where the table is used in notebooks, other tables, and reports.
- **C.** Use the lineage feature to visualize a graph that highlights where the table is used only in reports.
- **D.** Use the lineage feature to visualize a graph that highlights where the table is used only in notebooks.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use the lineage feature to visualize a graph that shows all dependencies, including where the table is used in notebooks, other tables, and reports.

Lineage Unity Catalog trực quan hóa phụ thuộc trước và sau đã thu thập giữa bảng, notebook, truy vấn và dashboard. Nó giúp xác định nguồn và tài sản dùng dữ liệu, trong giới hạn thu thập và quyền truy cập.

#### Vì sao các phương án khác không phù hợp?

- **Use the lineage feature to visualize a graph that highlights where the table is used only in reports.**: Lineage không chỉ giới hạn ở báo cáo.
- **Use the lineage feature to visualize a graph that highlights where the table is used only in notebooks.**: Lineage không chỉ giới hạn ở notebook.
- **Do not use the lineage feature as it only tracks activity from the last 3 months and will not provide full details on dependencies.**: Khẳng định giới hạn toàn bộ ba tháng không phải lý do tránh lineage và mô tả sai phạm vi.

**Tham khảo:**

- [Lineage in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-lineage)

</details>


---

## Q377 · single choice · — not answered

A data engineer uses COPY INTO to load CSV files from an external location into a Delta table. The job is accidentally triggered twice within the same hour. What is the expected outcome?

- **A.** Records are duplicated because COPY INTO always reloads all files in the source path.
- **B.** The second run fails with a duplicate-file error and rolls back the first run.
- ✅ **C.** The second run loads only files that were not already ingested, because COPY INTO tracks loaded files idempotently.
- **D.** The target table is overwritten with only the newest file.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The second run loads only files that were not already ingested, because COPY INTO tracks loaded files idempotently.

COPY INTO theo dõi tệp nguồn đã nạp, khiến retry có tính idempotent bằng cách bỏ qua chúng và nạp tệp mới, trừ khi tùy chọn force cố ý đổi hành vi.

#### Vì sao các phương án khác không phù hợp?

- **Records are duplicated because COPY INTO always reloads all files in the source path.**: Mặc định bỏ qua tệp đã nạp nên kích hoạt lặp không luôn gây trùng.
- **The second run fails with a duplicate-file error and rolls back the first run.**: Bỏ qua tệp đã biết là hành vi bình thường, không phải lỗi trùng tệp làm rollback lượt đã commit.
- **The target table is overwritten with only the newest file.**: COPY INTO nối bản ghi nạp; không ngầm ghi đè bảng bằng tệp mới nhất.

**Tham khảo:**

- [COPY INTO](https://docs.databricks.com/aws/en/sql/language-manual/delta-copy-into)

</details>


---

## Q378 · single choice · — not answered

A data engineer must be notified by email whenever the row count of gold.daily_orders drops below 1,000 for the previous day. Which Databricks SQL feature meets this requirement?

- **A.** A dashboard with a scheduled refresh
- ✅ **B.** A query with a Databricks SQL alert configured on a threshold condition
- **C.** A DESCRIBE HISTORY job that writes to the event log
- **D.** A Delta table constraint with ON VIOLATION FAIL UPDATE

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A query with a Databricks SQL alert configured on a threshold condition

SQL alert đặt lịch truy vấn đếm, so sánh kết quả với ngưỡng và gửi tới địa chỉ email cấu hình khi điều kiện thỏa.

#### Vì sao các phương án khác không phù hợp?

- **A dashboard with a scheduled refresh**: Làm mới dashboard cập nhật hình hiển thị nhưng tự nó không định nghĩa email theo ngưỡng.
- **A Delta table constraint with ON VIOLATION FAIL UPDATE**: Expectation pipeline kiểm tra dòng đầu vào và có thể làm flow lỗi, không phải tính năng email theo ngưỡng số đếm SQL.
- **A DESCRIBE HISTORY job that writes to the event log**: DESCRIBE HISTORY trả lịch sử ghi, không phải quy tắc tự thông báo số dòng hôm qua.

**Tham khảo:**

- [Databricks SQL alerts](https://docs.databricks.com/aws/en/sql/user/alerts/)

</details>


---

## Q379 · single choice · — not answered

A data engineer needs to provide access to a group named manufacturing-team. The team needs privileges to create tables in the quality schema. Which set of SQL commands will grant a group named manufacturing-team to create tables in a schema named production with the parent catalog named manufacturing with the least privileges?

- **A.** GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;
- **B.** GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE CATALOG ON CATALOG manufacturing TO manufacturing-team;
- **C.** GRANT USE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;
- ✅ **D.** GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;

CREATE TABLE trên manufacturing.quality cùng USE SCHEMA và USE CATALOG cấp quyền tạo và truy cập không gian tên cần thiết. Không cần quyền tạo rộng hơn.

#### Vì sao các phương án khác không phù hợp?

- **GRANT USE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;**: USE TABLE không phải quyền CREATE TABLE cần dùng.
- **GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE CATALOG ON CATALOG manufacturing TO manufacturing-team;**: CREATE SCHEMA và CREATE CATALOG không thay quyền usage và không tối thiểu.
- **GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;**: CREATE SCHEMA không thay USE SCHEMA để truy cập schema đã có.

**Tham khảo:**

- [Unity Catalog privileges and securable objects](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges/privileges)

**Cần xem lại:** Đề dùng cả quality và production; mọi lệnh ghi manufacturing-team không có backtick. Cách xử lý: Giữ bộ quyền trong khóa; thống nhất schema thành manufacturing.quality trong đề và đặt principal thành `manufacturing-team` trong tất cả câu GRANT.

</details>


---

## Q380 · single choice · — not answered

Identify a scenario to use an external table. A Data Engineer needs to create a parquet bronze table and wants to ensure that it gets stored in a specific path in an external location. Which table can be created in this scenario?

- **A.** A managed table where the location is pointing to specific path in external location.
- **B.** A managed table where the catalog has managed location pointing to specific path in external location.
- **C.** An external table where the schema has managed location pointing to specific path in external location.
- ✅ **D.** An external table where the location is pointing to specific path in external location.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** An external table where the location is pointing to specific path in external location.

Bảng external có LOCATION rõ ràng đăng ký tệp ở đường dẫn được chọn và giữ vòng đời lưu trữ dưới quản lý bên ngoài.

#### Vì sao các phương án khác không phù hợp?

- **An external table where the schema has managed location pointing to specific path in external location.**: Managed location của schema điều khiển bảng managed, không phải đường dẫn dữ liệu rõ ràng của bảng external.
- **A managed table where the catalog has managed location pointing to specific path in external location.**: Managed location của catalog cho Unity Catalog chọn đường dẫn con của bảng managed, không tạo bảng Parquet external được yêu cầu.
- **A managed table where the location is pointing to specific path in external location.**: LOCATION bảng do người dùng chọn rõ ràng mang ý nghĩa external thay vì vị trí managed thông thường.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q381 · single choice · — not answered

An Auto Loader stream fails when a new column appears in incoming JSON files. The team wants the stream to add the new column automatically, restarting as needed, rather than failing permanently. Which cloudFiles.schemaEvolutionMode setting should be used?

- ✅ **A.** addNewColumns
- **B.** failOnNewColumns
- **C.** rescue
- **D.** none

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** addNewColumns

addNewColumns cập nhật schema suy luận khi có cột mới rồi dừng stream để lần khởi động lại tiếp tục với schema mở rộng. Job tự restart hoàn tất quy trình đó.

#### Vì sao các phương án khác không phù hợp?

- **none**: none không tự tiến hóa schema để thêm cột mới.
- **failOnNewColumns**: failOnNewColumns tiếp tục lỗi tới khi schema được sửa rõ ràng, không tự thêm trường.
- **rescue**: rescue lưu trường ngoài dự kiến vào rescued data thay vì thêm cột schema cấp cao.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q382 · single choice · — not answered

Which physical file format stores the main data records of a Delta Lake table, separate from its transaction log?

- **A.** Delta
- ✅ **B.** Parquet
- **C.** JSON
- **D.** SV

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án:** Parquet

Tệp dữ liệu Delta Lake dùng Parquet; nhật ký Delta ghi hành động và siêu dữ liệu để biến các tệp đó thành bảng giao dịch.

#### Vì sao các phương án khác không phù hợp?

- **JSON**: JSON dùng cho mục nhật ký giao dịch, không phải tệp dữ liệu bảng dạng cột chính.
- **SV**: SV không phải định dạng tệp dữ liệu Delta Lake.
- **Delta**: Delta là tên định dạng/giao thức bảng, trong khi định dạng vật lý tệp dữ liệu mà câu hướng tới là Parquet.

**Tham khảo:**

- [What is Delta Lake?](https://docs.databricks.com/aws/en/delta/)

</details>


---

## Q383 · single choice · — not answered

A data engineer is migrating pipeline tasks to reduce operational toil. The workspace used Unity Catalog and is in a region that supports serverless. The engineer wants Databricks to auto-select instance types, manage scaling, apply Photon, and handle runtime upgrades automatically for job runs. How should the data engineer meet this requirement while adhering to Databricks constraints?

- **A.** Use a Pro SQL warehouse and schedule Python notebook tasks to execute as pipeline steps.
- ✅ **B.** Run the job on a serverless compute for workflows configuration, ensuring Unity Catalog is enabled and regional support is available.
- **C.** Use an all-purpose cluster with cluster policies to enforce standard sizes and enable autoscaling.
- **D.** Create a job with a single-task job cluster and manually set instance families and min/max workers.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run the job on a serverless compute for workflows configuration, ensuring Unity Catalog is enabled and regional support is available.

Serverless jobs compute giao Databricks chọn instance, co giãn và nâng cấp runtime. Điều kiện Unity Catalog và vùng hỗ trợ được nêu khiến đây là lựa chọn thực thi có quản lý phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Use a Pro SQL warehouse and schedule Python notebook tasks to execute as pipeline steps.**: Pro SQL warehouse là compute SQL, không phải môi trường tác vụ notebook Python tổng quát được mô tả.
- **Create a job with a single-task job cluster and manually set instance families and min/max workers.**: Chọn tay dòng instance và giới hạn worker giữ lại quyết định hạ tầng mà yêu cầu muốn giao nền tảng.
- **Use an all-purpose cluster with cluster policies to enforce standard sizes and enable autoscaling.**: Policy giới hạn cluster classic nhưng không giao hoàn toàn việc cấp phát và nâng runtime.

**Tham khảo:**

- [Migrate to serverless compute](https://docs.databricks.com/aws/en/compute/serverless/migration)
- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q384 · single choice · — not answered

In a legacy Delta Live Tables SQL pipeline, a dataset is defined as follows:`CREATE STREAMING LIVE TABLE loyal_customers AS SELECT customer_id FROM STREAM(LIVE.customers) WHERE loyalty_level = 'high';`

Why is STREAM used around the customers source?

- **A.** The customers table is a reference to a Structured Streaming query on a PySpark DataFrame.
- **B.** The table being created is a live table.
- ✅ **C.** To read the customers source with incremental streaming semantics.
- **D.** The data in the customers table has been updated since its last run.
- **E.** The STREAM function is not needed and will cause an error.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án:** To read the customers source with incremental streaming semantics.

STREAM yêu cầu đọc streaming từ tập dữ liệu customers phía trước, xử lý bản ghi mới tăng dần thay vì tính lại snapshot batch.

#### Vì sao các phương án khác không phù hợp?

- **The STREAM function is not needed and will cause an error.**: STREAM là cú pháp DLT cũ hợp lệ để đọc streaming, không tự nó gây lỗi.
- **The table being created is a live table.**: Việc đích là live table riêng nó không buộc mọi lần đọc nguồn là streaming.
- **The customers table is a reference to a Structured Streaming query on a PySpark DataFrame.**: Đọc trong pipeline SQL không buộc nguồn được biểu diễn bởi truy vấn DataFrame PySpark.
- **The data in the customers table has been updated since its last run.**: Bảng thay đổi cũng có thể được đọc theo batch; riêng việc thay đổi không phải lý do dùng STREAM.

**Tham khảo:**

- [CREATE STREAMING TABLE pipelines](https://docs.databricks.com/gcp/en/ldp/developer/ldp-sql-ref-create-streaming-table)

</details>


---

## Q385 · single choice · — not answered

Which of the following commands will return the location of database customer360?

- **A.** DESCRIBE LOCATION customer360;
- **B.** USE DATABASE customer360;
- **C.** ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user' ;
- ✅ **D.** DESCRIBE DATABASE customer360;
- **E.** DROP DATABASE customer360;

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** DESCRIBE DATABASE customer360;

DESCRIBE DATABASE báo metadata của database gồm vị trí lưu trữ; DATABASE và SCHEMA dùng thay nhau trong câu lệnh này.

#### Vì sao các phương án khác không phù hợp?

- **DESCRIBE LOCATION customer360;**: DESCRIBE LOCATION không phải cú pháp xem schema này.
- **DROP DATABASE customer360;**: DROP DATABASE xóa đối tượng thay vì báo vị trí.
- **ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user' ;**: ALTER DATABASE đổi metadata; câu hiển thị còn sai cú pháp.
- **USE DATABASE customer360;**: USE đổi không gian tên đang dùng, không trả vị trí.

**Tham khảo:**

- [DESCRIBE SCHEMA](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-aux-describe-schema)

</details>


---

## Q386 · single choice · — not answered

A data engineer uses Auto Loader to ingest JSON files from cloud storage. When an unexpected new column appears, ingestion must stop and continue failing until an engineer reviews the change and explicitly updates the schema. Which cloudFiles.schemaEvolutionMode setting meets this requirement?

- ✅ **A.** failOnNewColumns
- **B.** rescue
- **C.** addNewColumns
- **D.** none

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** failOnNewColumns

failOnNewColumns gây lỗi khi phát hiện cột mới mà không tự đổi schema. Kỹ sư phải chủ động xử lý schema trước khi tiếp tục nạp.

#### Vì sao các phương án khác không phù hợp?

- **none**: none không thực hiện hành vi lỗi-đến-khi-duyệt được yêu cầu cho trường mới.
- **rescue**: rescue tiếp tục bằng cách lưu trường ngoài dự kiến vào rescued data thay vì dừng chờ duyệt.
- **addNewColumns**: addNewColumns tự thêm trường mới và cho restart mà không có quyết định schema thủ công dự kiến.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q387 · single choice · — not answered

A data engineer is attempting to drop a Spark SQL table my_table. The data engineer wants to delete all table metadata and data. They run the following command: DROP TABLE IF EXISTS my_table - While the object no longer appears when they run SHOW TABLES, the data files still exist. Which of the following describes why the data files still exist and the metadata files were deleted?

- **A.** The table did not have a location
- **B.** The table’s data was larger than 10 GB
- ✅ **C.** The table was external
- **D.** The table’s data was smaller than 10 GB
- **E.** The table was managed

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The table was external

Drop external table xóa đăng ký catalog nhưng giữ tệp dữ liệu do bên ngoài quản lý. Kích thước tệp không phải yếu tố quyết định.

#### Vì sao các phương án khác không phù hợp?

- **The table’s data was larger than 10 GB**: Không có ngưỡng mười gigabyte làm đổi ngữ nghĩa quyền quản lý khi DROP.
- **The table’s data was smaller than 10 GB**: Tập dữ liệu nhỏ không được giữ chỉ vì kích thước.
- **The table did not have a location**: Không có LOCATION tường minh không giải thích quy tắc sở hữu/vòng đời bảng.
- **The table was managed**: Managed tables có vòng đời dữ liệu do nền tảng quản lý, khác external; xóa hiện đại vẫn có thể trì hoãn do thời gian khôi phục.

**Tham khảo:**

- [DROP TABLE](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-drop-table)

</details>


---

## Q388 · single choice · — not answered

Which of the following data workloads will utilize a Gold table as its source?

- **A.** A job that ingests raw data from a streaming source into the Lakehouse
- **B.** A job that enriches data by parsing its timestamps into a human-readable format
- **C.** A job that cleans data by removing malformatted records
- **D.** A job that aggregates uncleaned data to create standard summary statistics
- ✅ **E.** A job that queries aggregated data designed to feed into a dashboard

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A job that queries aggregated data designed to feed into a dashboard

Gold là lớp tiêu thụ tổng hợp sẵn dùng cho kinh doanh, nên truy vấn dashboard trên dữ liệu tóm tắt đã chuẩn bị là tác vụ dự kiến.

#### Vì sao các phương án khác không phù hợp?

- **A job that enriches data by parsing its timestamps into a human-readable format**: Phân tích timestamp thô là bước tinh chỉnh thường thuộc chuẩn bị Silver.
- **A job that aggregates uncleaned data to create standard summary statistics**: Tổng hợp dữ liệu chưa sạch bỏ qua kiểm tra cần có trước đầu ra Gold cho kinh doanh.
- **A job that cleans data by removing malformatted records**: Loại bản ghi sai định dạng là tác vụ làm sạch Silver.
- **A job that ingests raw data from a streaming source into the Lakehouse**: Nạp streaming thô đưa dữ liệu vào Bronze thay vì tiêu thụ Gold.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q389 · single choice · — not answered

A notebook task check_volume calculates a daily data volume and writes it to a Lakeflow Jobs taskValue named record_count. If the count is greater than 1 million, the job should run high_volume_pipeline; otherwise, it should run normal_pipeline. Which control-flow feature should be used?

- **A.** Configure additional retries for check_volume until the count exceeds the threshold.
- **B.** Configure Run if conditions based purely on task status.
- **C.** Use a For each task over the record_count and stop when it is below the threshold.
- ✅ **D.** Add an If/else condition task that reads the record_count task value and routes to different downstream tasks.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add an If/else condition task that reads the record_count task value and routes to different downstream tasks.

If/else condition so sánh {{tasks.check_volume.values.record_count}} > 1000000 và nối từng pipeline với kết quả true hoặc false. Điều này phân nhánh theo giá trị dữ liệu, kể cả khi check_volume luôn thành công.

#### Vì sao các phương án khác không phù hợp?

- **Use a For each task over the record_count and stop when it is below the threshold.**: For each lặp trên tập phần tử, không chọn một nhánh theo ngưỡng số.
- **Configure additional retries for check_volume until the count exceeds the threshold.**: Retry khôi phục lỗi; không làm khối lượng dữ liệu thay đổi theo ý muốn.
- **Configure Run if conditions based purely on task status.**: Run if theo trạng thái không phân biệt hai lần chạy thành công có số bản ghi khác nhau.

**Tham khảo:**

- [Add branching logic to a job with the If/else task](https://docs.databricks.com/aws/en/jobs/tasks/if-else)

</details>


---

## Q390 · single choice · — not answered

A data engineer is setting up access control in Unity Catalog and needs to ensure that a group of data analysts can query tables but not modify data. Which permission should the data engineer grant to the data analysts?

- **A.** MODIFY
- **B.** INSERT
- ✅ **C.** SELECT
- **D.** ALL PRIVILEGES

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SELECT

SELECT cho phép đọc dữ liệu bảng mà không cấp thao tác ghi. Người dùng còn cần USE CATALOG và USE SCHEMA tương ứng ở cấp cha.

#### Vì sao các phương án khác không phù hợp?

- **ALL PRIVILEGES**: ALL PRIVILEGES cấp nhiều hơn đáng kể quyền chỉ đọc.
- **MODIFY**: MODIFY cho phép thay đổi dữ liệu, trái yêu cầu chỉ đọc.
- **INSERT**: INSERT là thao tác ghi, không phải quyền để truy vấn; Unity Catalog thường gom quyền ghi bảng dưới MODIFY.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q391 · single choice · — not answered

A departing platform owner currently holds ownership of multiple catalogs and controls storage credentials and external locations. The data engineer wants to ensure continuity: transfer catalog ownership to the platform team group, delegate ongoing privilege management, and retain the ability to receive and share data via Delta Sharing. Which role must be in place to perform these actions across the metastore?

- ✅ **A.** Metastore Admin, because metastore admins can transfer ownership and manage privileges across all metastore objects, including shares and recipients.
- **B.** Workspace Admin, because workspace admins can transfer ownership of any Unity Catalog object.
- **C.** Account Admin, because account admins can only create metastores but cannot change ownership of catalogs.
- **D.** Catalog Owner, because catalog owners can transfer any object in any catalog in the metastore.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Metastore Admin, because metastore admins can transfer ownership and manage privileges across all metastore objects, including shares and recipients.

Metastore admin có thẩm quyền toàn metastore để quản lý sở hữu và quyền, gồm đối tượng chia sẻ cấp cao, hỗ trợ tính liên tục vượt một catalog.

#### Vì sao các phương án khác không phù hợp?

- **Catalog Owner, because catalog owners can transfer any object in any catalog in the metastore.**: Thẩm quyền chủ catalog giới hạn ở catalog đó, không phải mọi catalog khác và đối tượng credential/chia sẻ cấp cao.
- **Workspace Admin, because workspace admins can transfer ownership of any Unity Catalog object.**: Phạm vi workspace admin không tự cấp quyền chuyển sở hữu mọi đối tượng metastore.
- **Account Admin, because account admins can only create metastores but cannot change ownership of catalogs.**: Mô tả account admin chỉ tạo được metastore là sai; họ có thể quản lý gán admin và quyền cấp metastore.

**Tham khảo:**

- [Admin privileges in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges/admin-privileges)
- [Manage privileges in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges)

</details>


---

## Q392 · single choice · — not answered

A data engineer is facing performance bottlenecks in an e-commerce transactions Delta table. The table is a managed Unity Catalog table, and it uses partitioning and Z-ordering in its data layout scheme. The predictive optimization for Unity Catalog tables is also enabled. The table has a frequently changing query filter, and the data engineer does not observe a benefit of the Data Layout or the Predictive Optimization. How should the data engineer fix the data layout bottlenecks?

- **A.** Enable Delta Caching so that query results can be read through caches.
- **B.** Tweak the Z-Order columns and run OPTIMIZE manually.
- **C.** Re-write the Data Layout with Liquid Clustering and cluster by the Z-Ordered columns.
- ✅ **D.** Switch the Data layout from Partition+Z-Ordering to Automatic Liquid Clustering.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Switch the Data layout from Partition+Z-Ordering to Automatic Liquid Clustering.

Automatic liquid clustering dùng mẫu truy vấn quan sát được để chọn và điều chỉnh khóa clustering, cùng predictive optimization bảo trì bố cục khi bộ lọc thay đổi.

#### Vì sao các phương án khác không phù hợp?

- **Re-write the Data Layout with Liquid Clustering and cluster by the Z-Ordered columns.**: Chọn tay lại cột Z-order cũ có thể không thích nghi bộ lọc thay đổi thường xuyên.
- **Enable Delta Caching so that query results can be read through caches.**: Disk cache tăng tốc đọc lặp nhưng không thiết kế lại bố cục hay điều chỉnh khóa clustering.
- **Tweak the Z-Order columns and run OPTIMIZE manually.**: Bảo trì Z-order thủ công giữ gánh nặng tinh chỉnh và không tự đổi khóa.

**Tham khảo:**

- [Use liquid clustering for tables](https://docs.databricks.com/gcp/en/tables/clustering)

</details>


---

## Q393 · single choice · — not answered

When using MERGE INTO in Delta Lake on Databricks, which clause allows you to atomically delete target rows that no longer match any source rows?

- **A.** WHEN MATCHED BY SOURCE THEN UPDATE SET NULL
- **B.** WHEN NOT MATCHED THEN DELETE
- ✅ **C.** WHEN NOT MATCHED BY SOURCE THEN DELETE
- **D.** WHEN MATCHED AND THEN DELETE

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** WHEN NOT MATCHED BY SOURCE THEN DELETE

WHEN NOT MATCHED BY SOURCE THEN DELETE xóa dòng đích không có dòng nguồn khớp. Thao tác thuộc cùng giao dịch MERGE nguyên tử.

#### Vì sao các phương án khác không phù hợp?

- **WHEN MATCHED BY SOURCE THEN UPDATE SET NULL**: WHEN MATCHED BY SOURCE không phải mệnh đề này và đặt NULL không phải xóa.
- **WHEN MATCHED AND THEN DELETE**: WHEN MATCHED xử lý dòng khớp và AND được hiển thị thiếu điều kiện.
- **WHEN NOT MATCHED THEN DELETE**: WHEN NOT MATCHED nói về dòng nguồn chưa có ở đích và hỗ trợ chèn chứ không phải kiểu xóa này.

**Tham khảo:**

- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q394 · single choice · — not answered

A data organization leader is upset about the data analysis team’s reports being different from the data engineering team’s reports. The leader believes the siloed nature of their organization’s data engineering and data analysis architectures is to blame. Which of the following describes how a data lakehouse could alleviate this issue?

- **A.** Both teams would be able to collaborate on projects in real-time
- **B.** Both teams would respond more quickly to ad-hoc requests
- **C.** Both teams would autoscale their work as data size evolves
- **D.** Both teams would reorganize to report to the same department
- ✅ **E.** Both teams would use the same source of truth for their work

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Both teams would use the same source of truth for their work

Nguồn sự thật chung trong lakehouse cho kỹ thuật và phân tích dùng cùng dữ liệu có quản trị, giảm các bản sao sai lệch gây báo cáo mâu thuẫn.

#### Vì sao các phương án khác không phù hợp?

- **Both teams would autoscale their work as data size evolves**: Autoscaling đổi năng lực tài nguyên, không quyết định hai nhóm dùng dữ liệu nhất quán.
- **Both teams would reorganize to report to the same department**: Công nghệ lakehouse không yêu cầu tổ chức lại tuyến báo cáo phòng ban.
- **Both teams would be able to collaborate on projects in real-time**: Cộng tác thời gian thực có thể hỗ trợ cách làm việc nhưng tự nó không hòa giải bản sao dữ liệu sai lệch.
- **Both teams would respond more quickly to ad-hoc requests**: Phản hồi ad hoc nhanh hơn giải quyết độ trễ, không giải quyết nguồn sự thật mâu thuẫn.

**Tham khảo:**

- [Databricks lakehouse architecture](https://docs.databricks.com/aws/en/getting-started/architecture)

</details>


---

## Q395 · single choice · — not answered

A data engineer maintains a Declarative Automation Bundle (formerly Databricks Asset Bundle), which deploys a dashboard. The databricks.yml includes: bundle: name: workspace_assets variables: dataset_catalog: default: catalog_dev targets: dev: variables: dataset_catalog: catalog_dev prod: variables: dataset_catalog: catalog_prod Which set of actions will enable the dashboard to be deployed in prod using catalog_prod without changing the resource definition?

- **A.** Run databricks bundle execute --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.
- **B.** Run databricks bundle deploy --var dataset_catalog=catalog_prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.
- ✅ **C.** Run databricks bundle deploy --target prod so the deployment uses targets.prod and overrides dataset_catalog to catalog_prod.
- **D.** Run databricks bundle deploy --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run databricks bundle deploy --target prod so the deployment uses targets.prod and overrides dataset_catalog to catalog_prod.

bundle deploy --target prod chọn cấu hình targets.prod, trong đó dataset_catalog có giá trị catalog_prod. Resource phải đã tham chiếu ${var.dataset_catalog} để override ảnh hưởng dashboard mà không sửa định nghĩa.

#### Vì sao các phương án khác không phù hợp?

- **Run databricks bundle execute --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.**: bundle execute không phải lệnh phù hợp; profile cũng không chọn target bundle.
- **Run databricks bundle deploy --var dataset_catalog=catalog_prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.**: --var ghi đè biến nhưng không tự chọn targets.prod; có thể triển khai sai môi trường.
- **Run databricks bundle deploy --profile prod so the CLI selects targets.prod and applies dataset_catalog: catalog_prod automatically.**: --profile chọn hồ sơ xác thực, không tự áp dụng target cùng tên.

**Tham khảo:**

- [Substitutions and variables in Declarative Automation Bundles](https://docs.databricks.com/aws/en/dev-tools/bundles/variables)
- [bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q396 · single choice · — not answered

A data engineer has inherited a Databricks pipeline from a previous team. The pipeline is missing SLAs and costs more than the allotted budget. On analysis, it is noted that the cluster is not being fully utilized, and the dataset is getting skewed. How should the data engineer resolve this issue?

- ✅ **A.** Repartition the dataset to have it be more optimally spread across all nodes.
- **B.** Use coalesce() on the dataset to merge partitions and reduce skew.
- **C.** Increase the number of executors for the job.
- **D.** Increase the executor memory for the job.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Repartition the dataset to have it be more optimally spread across all nodes.

Repartition phân phối lại bản ghi qua shuffle để trải công việc đều hơn giữa executor. Lệch khóa nặng có thể còn cần salting, xử lý skew thích ứng hoặc chọn khóa khác.

#### Vì sao các phương án khác không phù hợp?

- **Use coalesce() on the dataset to merge partitions and reduce skew.**: coalesce thường giảm phân vùng không shuffle cân bằng đầy đủ và có thể làm tài nguyên càng ít được dùng.
- **Increase the number of executors for the job.**: Thêm executor không giải quyết phân vùng không đều và có thể tăng phí nhàn.
- **Increase the executor memory for the job.**: Thêm bộ nhớ có thể giảm spill nhưng không phân phối lại dữ liệu lệch qua các nút.

**Tham khảo:**

- [DataFrame.repartition](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.repartition.html)
- [Spark SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

</details>


---

## Q397 · single choice · — not answered

A dataset has been defined using Delta Live Tables and includes an expectations clause: CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION FAIL UPDATE What is the expected behavior when a batch of data containing data that violates these constraints is processed?

- **A.** Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log.
- **B.** Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset.
- **C.** Records that violate the expectation are added to the target dataset and recorded as invalid in the event log.
- ✅ **D.** Records that violate the expectation cause the job to fail.
- **E.** Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Records that violate the expectation cause the job to fail.

ON VIOLATION FAIL UPDATE ngăn cập nhật bị ảnh hưởng commit khi dòng không đạt expectation timestamp; đây là chính sách fail thay vì loại dòng hay cảnh báo.

#### Vì sao các phương án khác không phù hợp?

- **Records that violate the expectation are added to the target dataset and recorded as invalid in the event log.**: Giữ dòng lỗi cùng số liệu là chính sách cảnh báo mặc định, không phải FAIL UPDATE.
- **Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset.**: Expectation không tự thêm cột cờ lỗi và dòng lỗi không được commit theo chính sách này.
- **Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log.**: Loại dòng lỗi tương ứng ON VIOLATION DROP ROW, chính sách khác.
- **Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table.**: Cách ly cần flow được thiết kế riêng, không tự xảy ra do FAIL UPDATE.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q398 · single choice · — not answered

A group named team needs the table privileges represented by ALL PRIVILEGES on table sales. The request is scoped to that table and does not include ownership transfer or the separate Unity Catalog MANAGE privilege. Which command grants those table privileges to the group?

- ✅ **A.** grant all privileges on table sales TO team;
- **B.** GRANT ALL PRIVILEGES ON TABLE team TO sales;
- **C.** GRANT SELECT ON TABLE sales TO team;
- **D.** GRANT SELECT CREATE MODIFY ON TABLE sales TO team;

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án:** grant all privileges on table sales TO team;

GRANT ALL PRIVILEGES ON TABLE sales TO team gán các quyền bảng được bao hàm cho đúng nhóm. Trong Unity Catalog, ALL PRIVILEGES riêng nó không bao gồm MANAGE hoặc chuyển sở hữu.

#### Vì sao các phương án khác không phù hợp?

- **GRANT SELECT ON TABLE sales TO team;**: SELECT chỉ cấp đọc, không cấp quyền quản lý bảng rộng được yêu cầu.
- **GRANT SELECT CREATE MODIFY ON TABLE sales TO team;**: Chuỗi quyền liệt kê không đúng cú pháp grant và không thay thế ALL PRIVILEGES.
- **GRANT ALL PRIVILEGES ON TABLE team TO sales;**: Mã đảo bảng và bên nhận, cấp trên team cho sales thay vì trên sales cho team.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q399 · single choice · — not answered

A data engineer is maintaining a data pipeline. Upon data ingestion, the data engineer notices that the source data is starting to have a lower level of quality. The data engineer would like to automate the process of monitoring the quality level. Which of the following tools can the data engineer use to solve this problem?

- ✅ **A.** Delta Live Tables
- **B.** Unity Catalog
- **C.** Delta Lake
- **D.** Data Explorer
- **E.** Auto Loader

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta Live Tables

Delta Live Tables, nay là Lakeflow pipelines, có thể định nghĩa expectation và ghi số liệu chất lượng trong quá trình nạp, tự động kiểm tra thay vì xem thủ công.

#### Vì sao các phương án khác không phù hợp?

- **Unity Catalog**: Unity Catalog quản trị quyền và siêu dữ liệu; cơ chế kiểm tra pipeline cụ thể là expectation.
- **Data Explorer**: Data Explorer duyệt tài sản và quyền, không thực thi kiểm tra chất lượng nạp.
- **Delta Lake**: Delta Lake bảo đảm nhất quán giao dịch/schema nhưng riêng nó không định nghĩa giám sát chất lượng nghiệp vụ liên tục được hỏi.
- **Auto Loader**: Auto Loader phát hiện và nạp tệp; expectation chất lượng nghiệp vụ nằm trong pipeline biến đổi.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q400 · single choice · — not answered

A data engineer is writing Spark code to group sales data by region and calculate total revenue for each region. Which Spark DataFrame transformation performs grouping operations?

- **A.** orderBy
- **B.** filter
- ✅ **C.** groupBy
- **D.** select

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** groupBy

groupBy tạo dữ liệu nhóm theo khóa region; phép tổng hợp như sum(revenue) sau đó tính tổng từng vùng.

#### Vì sao các phương án khác không phù hợp?

- **orderBy**: orderBy sắp xếp dòng thay vì tạo nhóm tổng hợp.
- **select**: select chọn cột và biểu thức nhưng tự nó không nhóm dòng theo khóa.
- **filter**: filter giữ dòng thỏa điều kiện thay vì nhóm chúng.

**Tham khảo:**

- [DataFrame.groupBy](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.groupBy.html)

</details>


---

## Q401 · single choice · — not answered

A Databricks Job with four sequential tasks is executed. The job failed at Task 3. After the root cause is fixed, the data engineer needs to complete the workflow without re-running the successful Tasks 1 and 2. Which action in the Job Run details page allows the engineer to resume execution from the point of failure?

- **A.** Reset job
- ✅ **B.** Repair run
- **C.** Run now
- **D.** Clone task

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Repair run

Repair run chạy lại tác vụ thất bại cùng tác vụ phụ thuộc bị bỏ qua, đồng thời giữ các tác vụ trước đã thành công trong lượt đó, tránh lặp không cần thiết.

#### Vì sao các phương án khác không phù hợp?

- **Reset job**: Reset job không phải hành động phục hồi lượt chạy được quy định và có thể chỉ việc sửa định nghĩa job.
- **Clone task**: Clone tác vụ sao chép định nghĩa thay vì tiếp tục lượt chạy lỗi.
- **Run now**: Run now bắt đầu lượt mới và thường lặp cả tác vụ đã thành công.

**Tham khảo:**

- [Troubleshoot and repair job failures](https://docs.databricks.com/aws/en/jobs/repair-job-failures)

</details>


---

## Q402 · single choice · — not answered

A data engineer wants to register a table over existing CSV files at /path/to/csv. In a CREATE TABLE statement with the location supplied separately, which provider clause explicitly identifies those source files as CSV?

- **A.** FROM CSV
- **B.** None of these lines of code are needed to successfully complete the task
- **C.** FROM "path/to/csv"
- ✅ **D.** USING CSV
- **E.** USING DELTA

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án:** USING CSV

USING CSV khai báo định dạng nguồn dữ liệu cho bảng trên tệp CSV; LOCATION và các tùy chọn phải được cung cấp ở phần khác của câu lệnh đầy đủ.

#### Vì sao các phương án khác không phù hợp?

- **None of these lines of code are needed to successfully complete the task**: Thiếu provider CSV rõ ràng, mặc định Databricks không xác định các tệp này là bảng dùng CSV.
- **FROM CSV**: FROM CSV không phải mệnh đề provider của CREATE TABLE.
- **USING DELTA**: USING DELTA mong lưu trữ bảng Delta thay vì tệp CSV thô.
- **FROM "path/to/csv"**: FROM đường dẫn riêng lẻ không khai báo provider và không thay hợp lệ USING CSV trong mẫu này.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q403 · single choice · — not answered

An organization is building a data lakehouse and needs to ingest data from multiple sources into Unity Catalog- managed tables: 

- Source 1: Salesforce (50+ objects, frequent schema changes, OAuth authentication required) 
- Source 2: On-premises SQL server database (100+ tables, CDC enabled, requires network connectivity) 
- Source 3: Daily JSON files landing in Azure Data Lake Storage Gen2 

The organization wants all ingested data to be governed by Unity Catalog, to minimize data engineering effort for schema changes, and to use serverless wherever possible to reduce operational overhead. 

Which ingestion strategy meets these requirements?

- **A.** Use partner connectors (Fivetran) for all three sources via Partner Connect, as they provide the most comprehensive integration with Unity Catalog and automated schema evolution.
- **B.** Use Lakeflow Connect managed connectors for all three sources, as they provide consistent serverless execution and Unity Catalog integration across all data source types.
- ✅ **C.** Use Lakeflow Connect managed connectors for Salesforce and SQL Server, and Auto Loader for ADLS files, all within Lakeflow Spark Declarative Pipelines.
- **D.** Use Auto Loader for all three sources with custom Python code to handle Salesforce API calls and SQL server CDC extraction, then write to Unity Catalog tables.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Lakeflow Connect managed connectors for Salesforce and SQL Server, and Auto Loader for ADLS files, all within Lakeflow Spark Declarative Pipelines.

Connector quản lý Salesforce và SQL Server xử lý xác thực, tiến độ theo nguồn; Auto Loader nạp JSON mới đến ADLS. Quản trị đích bằng Unity Catalog và cấu hình gateway/kết nối mạng SQL Server cần thiết.

#### Vì sao các phương án khác không phù hợp?

- **Use partner connectors (Fivetran) for all three sources via Partner Connect, as they provide the most comprehensive integration with Unity Catalog and automated schema evolution.**: Công cụ đối tác có thể nạp dữ liệu nhưng thêm nền tảng ngoài thay vì tổ hợp native ít bảo trì được đưa ra.
- **Use Lakeflow Connect managed connectors for all three sources, as they provide consistent serverless execution and Unity Catalog integration across all data source types.**: Connector ứng dụng/database quản lý không thay thế phổ quát việc nạp tệp cloud bất kỳ.
- **Use Auto Loader for all three sources with custom Python code to handle Salesforce API calls and SQL server CDC extraction, then write to Unity Catalog tables.**: Auto Loader phát hiện tệp; tự viết trích xuất API và CDC làm tăng đáng kể công sức.

**Tham khảo:**

- [Lakeflow Connect overview](https://docs.databricks.com/aws/en/ingestion/overview)
- [Auto Loader overview](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)

</details>


---

## Q404 · single choice · — not answered

A data engineering team has two tables. The first table march_transactions is a collection of all retail transactions in the month of March. The second table april_transactions is a collection of all retail transactions in the month of April. There are no duplicate records between the tables. Which of the following commands should be run to create a new table all_transactions that contains all records from march_transactions and april_transactions without duplicate records?

- **A.** CREATE TABLE all_transactions AS SELECT  FROM march_transactions INNER JOIN SELECT  FROM april_transactions;
- ✅ **B.** CREATE TABLE all_transactions AS SELECT  FROM march_transactions UNION SELECT  FROM april_transactions;
- **C.** CREATE TABLE all_transactions AS SELECT  FROM march_transactions OUTER JOIN SELECT  FROM april_transactions;
- **D.** CREATE TABLE all_transactions AS SELECT  FROM march_transactions INTERSECT SELECT  from april_transactions;
- **E.** CREATE TABLE all_transactions AS SELECT  FROM march_transactions MERGE SELECT  FROM april_transactions;

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE TABLE all_transactions AS SELECT * FROM march_transactions UNION SELECT * FROM april_transactions;

UNION kết hợp hai kết quả truy vấn tương thích và loại hàng trùng hoàn toàn. CTAS lưu kết quả gộp thành bảng all_transactions mới.

#### Vì sao các phương án khác không phù hợp?

- **CREATE TABLE all_transactions AS SELECT * FROM march_transactions INNER JOIN SELECT * FROM april_transactions;**: Inner join ghép cột giữa quan hệ thay vì xếp mọi giao dịch; cú pháp join được in còn sai.
- **CREATE TABLE all_transactions AS SELECT * FROM march_transactions OUTER JOIN SELECT * FROM april_transactions;**: Outer join kết hợp cột khớp/không khớp, không phải nối dọc được yêu cầu.
- **CREATE TABLE all_transactions AS SELECT * FROM march_transactions INTERSECT SELECT * from april_transactions;**: INTERSECT chỉ giữ hàng chung thay vì mọi hàng từ cả hai tháng.
- **CREATE TABLE all_transactions AS SELECT * FROM march_transactions MERGE SELECT * FROM april_transactions;**: MERGE là lệnh ghi đích có điều kiện, không phải toán tử tập SELECT theo dạng này.

**Tham khảo:**

- [Spark SQL set operators](https://spark.apache.org/docs/latest/sql-ref-syntax-qry-select-setops.html)

</details>


---

## Q405 · pick 2 · — not answered

Which languages are supported by Serverless compute clusters? (Choose two.)

- **A.** Scala
- ✅ **B.** Python
- **C.** Java
- **D.** R
- ✅ **E.** SQL

**Answer:** B, E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SQL; Python

SQL và Python là hai ngôn ngữ notebook serverless được đáp án hướng đến. Hỗ trợ ngôn ngữ phụ thuộc notebook, job hay API Connect.

#### Vì sao các phương án khác không phù hợp?

- **R**: R không được hỗ trợ trong notebook serverless.
- **Scala**: Scala không hỗ trợ trong notebook serverless dù các ngữ cảnh API/task serverless khác có khác biệt.
- **Java**: Java không phải ngôn ngữ notebook serverless; job JAR được hỗ trợ là ngữ cảnh khác.

**Tham khảo:**

- [Serverless compute limitations](https://docs.databricks.com/aws/en/compute/serverless/limitations)

**Cần xem lại:** Đề chưa giới hạn notebook, trong khi khóa Python/SQL chỉ phản ánh ngôn ngữ notebook serverless. Cách xử lý: Giữ khóa SQL và Python; sửa câu hỏi thành Which languages are supported in Databricks notebooks attached to serverless compute? (Choose two.)

</details>


---

## Q406 · pick 2 · — not answered

A data engineer is developing an ETL process based on Spark SQL. The execution fails. The data engineer checks the Spark UI and can see the ERRORS as follows: "java.lang.OutofMemoryError: Java heap space" Which two corrective actions should the data engineer perform to resolve this issue? (Choose two.)

- ✅ **A.** Narrow the filters in order to collect less data in the query
- **B.** Cache the dataset in order to boost the query performance
- **C.** Fix the shuffle partitions to 50 to ensure the allocation
- ✅ **D.** Upsize the worker nodes and activate autoshuffle partitions
- **E.** Upsize the driver node and deactivate autoshuffle partitions

**Answer:** A, D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Narrow the filters in order to collect less data in the query; Upsize the worker nodes and activate autoshuffle partitions

Thu hẹp điều kiện lọc giảm dữ liệu cần xử lý; worker nhiều bộ nhớ hơn và chia shuffle tự động giảm áp lực bộ nhớ mỗi task. Trước tiên xác định lỗi heap ở worker hay driver.

#### Vì sao các phương án khác không phù hợp?

- **Upsize the driver node and deactivate autoshuffle partitions**: Driver lớn hơn chỉ giúp áp lực phía driver; tắt auto shuffle không giải quyết partition worker quá lớn.
- **Cache the dataset in order to boost the query performance**: Cache tiêu thụ bộ nhớ và có thể làm thiếu heap nặng hơn.
- **Fix the shuffle partitions to 50 to ensure the allocation**: Cố định tùy ý 50 partition có thể tạo task quá lớn.

**Tham khảo:**

- [Spark memory issues](https://docs.databricks.com/aws/en/optimizations/spark-ui-guide/spark-memory-issues)
- [Adaptive query execution](https://docs.databricks.com/aws/en/optimizations/aqe)

</details>


---

## Q407 · single choice · — not answered

A data engineer is inspecting an ETL pipeline based on a Pyspark job that consistently encounters performance bottlenecks. Based on developer feedback, the data engineer assumes the job is low on compute resources. To pinpoint the issue, the data engineer observes the Spark UI and finds out the job has a high CPU time vs Task time. Which course of action should the data engineer take?

- **A.** High CPU time vs Task time means an under-utilized cluster. The data engineer may need to repartition data to spread the jobs more evenly throughout the cluster.
- ✅ **B.** High CPU time vs Task time means a CPU over-utilized job. The data engineer may need to consider executor and core tuning or resizing the cluster
- **C.** High CPU time vs Task time means efficient use of cluster and no change needed
- **D.** High CPU time vs Task time means over-utilized memory and the need to increase parallelism

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** High CPU time vs Task time means a CPU over-utilized job. The data engineer may need to consider executor and core tuning or resizing the cluster

Tỷ lệ thời gian CPU cao gợi ý xử lý bị giới hạn CPU, nên kiểm tra executor, số core và quy mô cụm. Xác nhận mức sử dụng, lệch dữ liệu và độ song song trước khi tăng tài nguyên.

#### Vì sao các phương án khác không phù hợp?

- **High CPU time vs Task time means an under-utilized cluster. The data engineer may need to repartition data to spread the jobs more evenly throughout the cluster.**: Tỷ lệ CPU cao tự nó không chứng minh thiếu sử dụng hay cần chia lại partition.
- **High CPU time vs Task time means efficient use of cluster and no change needed**: Xử lý nặng CPU vẫn có thể là nút thắt được quan sát.
- **High CPU time vs Task time means over-utilized memory and the need to increase parallelism**: Thời gian CPU không trực tiếp chẩn đoán quá tải bộ nhớ.

**Tham khảo:**

- [Debugging with the Spark UI](https://docs.databricks.com/gcp/en/compute/troubleshooting/debugging-spark-ui)

</details>


---

## Q408 · single choice · — not answered

A data engineer has been provided a PySpark DataFrame named df with columns product and revenue. The data engineer needs to compute complex aggregations to determine each product’s total revenue, average revenue, and transaction count. Which code snippet should the data engineer use?

- **A.** `from pyspark.sql import functions as F aggregated_df = df.select("product", "revenue").groupBy("product").agg( F.sum("revenue"), F.mean("revenue") )`
- **B.** `aggregated_df = df.groupby("product").agg( "sum(revenue)", "avg(revenue)", "count(revenue)" )`
- ✅ **C.** `from pyspark.sql import functions as F aggregated_df = df.groupBy("product").agg( F.sum("revenue").alias("total_revenue"), F.avg("revenue").alias("avg_revenue"), F.count("*").alias("transaction_count") )`
- **D.** `aggregated_df = df.groupBy("product").agg( {"revenue": "sum", "revenue": "avg", "revenue": "count"} )`

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** from pyspark.sql import functions as F aggregated_df = df.groupBy("product").agg( F.sum("revenue").alias("total_revenue"), F.avg("revenue").alias("avg_revenue"), F.count("*").alias("transaction_count") )

groupBy(product).agg với sum, avg và count(*) tính cả ba chỉ số cho từng sản phẩm. Alias đặt tên rõ các chỉ số kết quả.

#### Vì sao các phương án khác không phù hợp?

- **aggregated_df = df.groupby("product").agg( "sum(revenue)", "avg(revenue)", "count(revenue)" )**: agg không phân tích các chuỗi SQL đơn lẻ này thành biểu thức Column tổng hợp.
- **from pyspark.sql import functions as F aggregated_df = df.select("product", "revenue").groupBy("product").agg( F.sum("revenue"), F.mean("revenue") )**: Mã nhìn thấy thiếu số giao dịch và ghép import với phép gán sai cú pháp.
- **aggregated_df = df.groupBy("product").agg( {"revenue": "sum", "revenue": "avg", "revenue": "count"} )**: Khóa từ điển lặp ghi đè hàm trước, chỉ còn count; phép gán xuống dòng cũng không hợp lệ.

**Tham khảo:**

- [GroupedData.agg](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.GroupedData.agg.html)

</details>


---

## Q409 · single choice · — not answered

A developer has configured Databricks Connect and starts running PySpark code locally. They notice that Data Frame operations are executed on the remote cluster, but actions like .show() return results directly in their local console. What does this behaviour illustrate about how Databricks Connect is used?

- ✅ **A.** It proxies Spark commands from the local client to the remote cluster
- **B.** It mirrors the entire cluster environment on the developer's machine
- **C.** It runs all Spark compute locally and only reads remote files
- **D.** It requires manual synchronization of results from the cluster

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** It proxies Spark commands from the local client to the remote cluster

Databricks Connect gửi kế hoạch Spark từ máy khách cục bộ tới tài nguyên Databricks từ xa. Action như show nhận kết quả để hiển thị cục bộ trong khi thực thi phân tán vẫn ở xa.

#### Vì sao các phương án khác không phù hợp?

- **It requires manual synchronization of results from the cluster**: Máy khách nhận kết quả action mà không cần bước đồng bộ thủ công.
- **It runs all Spark compute locally and only reads remote files**: Tính toán DataFrame phân tán chạy từ xa, không hoàn toàn trên máy cục bộ.
- **It mirrors the entire cluster environment on the developer's machine**: Connect không sao chép toàn bộ môi trường cụm lên máy khách.

**Tham khảo:**

- [Databricks Connect](https://docs.databricks.com/aws/en/dev-tools/databricks-connect/)

</details>


---

## Q410 · single choice · — not answered

A data engineer is setting up a new Databricks pipeline that ingests clickstream events from Kafka and daily product catalogs from cloud object storage. To ensure auditability and easy reprocessing, the engineer wants to land all source data. Later stages will handle cleaning, deduplication, and business modeling before the data is used in dashboards. Which approach aligns to Medallion Architecture principles?

- ✅ **A.** Land both sources in the Bronze layer append-only with minimal validation, then build Silver/Gold downstream for quality and analytics.
- **B.** Land both sources directly into the Silver layer with schema enforcement and deduplication to reduce downstream complexity.
- **C.** Land both sources in Gold with denormalized star schemas to optimize BI while retaining full source fidelity.
- **D.** Land streaming events from Kafka in silver, and the product catalog directly in Gold to minimize layers for batch data.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Land both sources in the Bronze layer append-only with minimal validation, then build Silver/Gold downstream for quality and analytics.

Nạp cả hai nguồn vào Bronze với ít biến đổi và giữ lịch sử thô để xử lý lại. Silver xử lý chất lượng, Gold xây mô hình phục vụ nghiệp vụ.

#### Vì sao các phương án khác không phù hợp?

- **Land both sources in Gold with denormalized star schemas to optimize BI while retaining full source fidelity.**: Star schema Gold biến đổi bản ghi thô và không phải tầng tiếp nhận thô.
- **Land streaming events from Kafka in silver, and the product catalog directly in Gold to minimize layers for batch data.**: Batch hay streaming không phải lý do bỏ bước giữ nguồn ở Bronze.
- **Land both sources directly into the Silver layer with schema enforcement and deduplication to reduce downstream complexity.**: Làm sạch trực tiếp ở Silver có thể làm mất chi tiết nguồn cần kiểm toán và xử lý lại.

**Tham khảo:**

- [What is the medallion lakehouse architecture?](https://docs.databricks.com/gcp/en/lakehouse/medallion)

</details>


---

## Q411 · single choice · — not answered

A data engineer is onboarding a new bronze ingestion pipeline in Databricks with Unity Catalog. The team wants Databricks to handle storage layout, apply platform optimizations over time, and simplify lifecycle management so that when a table is dropped, its underlying data is also cleaned up according to Databricks-managed retention policies. Which table type should the data engineer create for these ingestion tables?

- ✅ **A.** Managed tables so that Unity Catalog manages both metadata and underlying data lifecycle.
- **B.** Temporary views over files to avoid table-level governance and lifecycle coupling.
- **C.** Foreign tables federated from an external catalog to delegate optimization to the source system.
- **D.** External tables with a LOCATION pointing to an external volume for full control of file layout.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Managed tables so that Unity Catalog manages both metadata and underlying data lifecycle.

Bảng managed giao cả siêu dữ liệu và vòng đời tệp cho Unity Catalog. Chúng phù hợp với bố trí, tối ưu và dọn dẹp sau khi xóa do nền tảng quản lý.

#### Vì sao các phương án khác không phù hợp?

- **External tables with a LOCATION pointing to an external volume for full control of file layout.**: Bảng external để người dùng quản lý vòng đời tệp thay vì Databricks.
- **Foreign tables federated from an external catalog to delegate optimization to the source system.**: Bảng foreign truy vấn hệ thống ngoài thay vì tạo lưu trữ nạp được quản lý.
- **Temporary views over files to avoid table-level governance and lifecycle coupling.**: Temporary view không quản lý dữ liệu nạp bền vững hay vòng đời lưu trữ.

**Tham khảo:**

- [Unity Catalog managed tables](https://docs.databricks.com/aws/en/tables/managed)

</details>


---

## Q412 · pick 2 · — not answered

A data engineer needs to compute metrics such as: •rolling 7-day sales •percent of total revenue •top-N most profitable categories Which two approaches are appropriate for implementing these metrics with PySpark DataFrames? (Choose two.)

- ✅ **A.** Using joins and groupBy to compute percent-of-total metrics.
- **B.** Using mapPartitions to manually implement rolling windows.
- ✅ **C.** Using window functions for rolling and ranking calculations.
- **D.** Collecting the DataFrame to the driver for faster iterative processing.
- **E.** Using RDD aggregations for better performance.

**Answer:** A, C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Using window functions for rolling and ranking calculations.; Using joins and groupBy to compute percent-of-total metrics.

Hàm cửa sổ thực hiện chỉ số trượt có thứ tự và xếp hạng mà không gộp mất từng dòng đầu vào. Tổng nhóm nối với chi tiết hoặc tổng danh mục cũng hỗ trợ tính phần trăm trên tổng.

#### Vì sao các phương án khác không phù hợp?

- **Using RDD aggregations for better performance.**: Tổng hợp RDD không mặc nhiên cải thiện các thao tác DataFrame được tối ưu này.
- **Using mapPartitions to manually implement rolling windows.**: Logic phân vùng thủ công phải tự tái tạo thứ tự và ngữ nghĩa xuyên phân vùng mà cửa sổ đã xử lý.
- **Collecting the DataFrame to the driver for faster iterative processing.**: Collect toàn bộ dữ liệu tập trung xử lý và có nguy cơ hết bộ nhớ driver.

**Tham khảo:**

- [PySpark Window](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.Window.html)
- [DataFrame.groupBy](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.groupBy.html)

</details>


---

## Q413 · single choice · — not answered

A data engineer is investigating a Lakehouse ETL job on Databricks that has suddenly become four times slower. They need to: 

- Identify the specific Spark stages that regressed. 
- Drill down to per-task metrics such as shuffle read/write size, spill, and GC time. 
- Correlate these with the executor resource usage during that run. 

Which Databricks-native capability is the starting point for this detailed job-level root-cause analysis?

- ✅ **A.** Spark UI opened from the job run's compute, using the Jobs and Stages tabs to inspect task metrics.
- **B.** The Jobs run details page timeline and graph views, without opening the Spark UI, to analyze all stage and task-level Spark metrics.
- **C.** Ganglia metrics for the cluster, which provide full visibility into Spark stages, tasks, and shuffle metrics for the job run.
- **D.** Cluster Metrics (Metrics tab on the compute) to view historical Spark and hardware metrics, without using the Spark UI.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Spark UI opened from the job run's compute, using the Jobs and Stages tabs to inspect task metrics.

Spark UI nối job với stage và metric từng task, gồm shuffle, spill và GC; màn hình executor giúp đối chiếu tài nguyên trong lần chạy đó.

#### Vì sao các phương án khác không phù hợp?

- **Cluster Metrics (Metrics tab on the compute) to view historical Spark and hardware metrics, without using the Spark UI.**: Metric compute tổng hợp tài nguyên nhưng không thay việc xem sâu stage/task.
- **The Jobs run details page timeline and graph views, without opening the Spark UI, to analyze all stage and task-level Spark metrics.**: Timeline task workflow tự nó không cung cấp mọi metric stage/task Spark.
- **Ganglia metrics for the cluster, which provide full visibility into Spark stages, tasks, and shuffle metrics for the job run.**: Ganglia giám sát hạ tầng thay vì cung cấp đầy đủ stage và shuffle Spark.

**Tham khảo:**

- [Spark Web UI](https://spark.apache.org/docs/latest/web-ui.html)

</details>


---

## Q414 · single choice · — not answered

A team is designing their Data bricks Asset Bundle for deployment. They want to ensure their bundle includes all necessary resources, targeted environment configurations, and deployment settings in a single version-controlled file. What is required as the main configuration file at the root of their project?

- **A.** A Python script called configure_bundle.py that dynamically creates resources at runtime
- **B.** A JSON file named bundle_config.json that stores all resource details and environment variables
- ✅ **C.** A databricks.yml YAML file that contains the bundle's name, targets, includes resources, and variables
- **D.** A directory with multiple TXT files, each describing a single resource for the bundle

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A databricks.yml YAML file that contains the bundle's name, targets, includes resources, and variables

databricks.yml là tệp YAML cấu hình gốc của bundle. Nó khai báo danh tính bundle và có thể định nghĩa hoặc đưa vào tài nguyên, biến và đích môi trường.

#### Vì sao các phương án khác không phù hợp?

- **A Python script called configure_bundle.py that dynamically creates resources at runtime**: Script Python chạy động không phải cấu hình gốc bắt buộc.
- **A directory with multiple TXT files, each describing a single resource for the bundle**: Mô tả TXT không đáp ứng lược đồ cấu hình bundle.
- **A JSON file named bundle_config.json that stores all resource details and environment variables**: bundle_config.json không phải tên hay định dạng tệp gốc được nhận diện.

**Tham khảo:**

- [Bundle configuration reference](https://docs.databricks.com/aws/en/dev-tools/bundles/reference)

</details>


---

## Q415 · single choice · — not answered

A data engineer must support self-serve BI dashboards for hundreds of business users who run ad hoc, high- concurrency SQL queries throughout the day against governed Unity Catalog tables. The team needs a near- instant start, autoscaling without manual tuning, and the best performance for SQL while minimizing operational overhead. Which Databricks compute should the data engineer use?

- ✅ **A.** SQL Warehouse (Serverless) with Photon enabled.
- **B.** All-purpose classic cluster with manual autoscaling enabled.
- **C.** Jobs compute clusters triggered by dashboards on a schedule.
- **D.** SQL Warehouse (Classic) with a fixed cluster size.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SQL Warehouse (Serverless) with Photon enabled.

SQL warehouse serverless cung cấp khởi động và mở rộng được quản lý cho BI SQL đồng thời cao. Photon tăng tốc thực thi SQL mà không cần quản trị cụm thủ công.

#### Vì sao các phương án khác không phù hợp?

- **SQL Warehouse (Classic) with a fixed cluster size.**: Warehouse classic cố định thiếu mở rộng được quản lý và khởi động nhanh serverless.
- **Jobs compute clusters triggered by dashboards on a schedule.**: Jobs theo lịch không cung cấp điểm phục vụ SQL tương tác, đột xuất được yêu cầu.
- **All-purpose classic cluster with manual autoscaling enabled.**: All-purpose classic còn nhiều công quản lý và không phải lựa chọn chuyên dụng cho BI.

**Tham khảo:**

- [SQL warehouse types](https://docs.databricks.com/aws/en/compute/sql-warehouse/warehouse-types)

</details>


---

## Q416 · single choice · — not answered

A team is using a Databricks workspace and needs to continuously ingest JSON files as they arrive. Which code snippet shows a valid Auto Loader source configuration?

- **A.** `spark.readStream.format("cloudFiles") .option("format", "json") .load("`
- ✅ **B.** `spark.readStream.format("cloudFiles") .option("cloudFiles.format", "json") .load("`
- **C.** `spark.readStream.format("cloudFiles") .option("cloudFiles.format", "json") .load("jdbc:sqlserver://;database=")`
- **D.** `spark.readStream.format("json") .option("cloudFiles.format", "json") .load("`

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** spark.readStream.format("cloudFiles") .option("cloudFiles.format", "json") .load("

Nguồn cloudFiles với cloudFiles.format bằng json phát hiện tệp JSON mới ở đường dẫn lưu trữ. Mã chạy hoàn chỉnh còn cần nối dòng Python hợp lệ cùng checkpoint/schema phù hợp ngữ cảnh.

#### Vì sao các phương án khác không phù hợp?

- **spark.readStream.format("json") .option("cloudFiles.format", "json") .load("**: Reader json là file streaming thường thay vì Auto Loader; option cloudFiles không đổi provider đã chọn.
- **spark.readStream.format("cloudFiles") .option("cloudFiles.format", "json") .load("jdbc:sqlserver://;database=")**: URL kết nối JDBC không phải thư mục tệp cloud cho Auto Loader.
- **spark.readStream.format("cloudFiles") .option("format", "json") .load("**: Option định dạng nguồn phải là cloudFiles.format, không phải format chung.

**Tham khảo:**

- [Auto Loader overview](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)

**Cần xem lại:** Đáp án Auto Loader được chọn có dòng .option và .load tách khỏi biểu thức, gây lỗi cú pháp Python. Cách xử lý: Giữ khóa hiện tại; bao toàn bộ spark.readStream.format("cloudFiles").option("cloudFiles.format", "json").load("

</details>


---

## Q417 · single choice · — not answered

A data engineer working in Databricks needs to control BI query latency and cost for a sales analytics domain. Silver tables already contain validated, normalized sales and product data. The team wants dashboard-friendly query performance and to align datasets with business concepts (e.g., weekly_sales and account_performance) without overloading analysts with complex joins. Which design approach should a data engineer choose for the Gold layer in a medallion architecture?

- **A.** Move raw, append-only source data directly into Gold to avoid transformation costs and enable time travel.
- ✅ **B.** Create denormalized, domain-aligned tables and materialized aggregates (e.g., weekly_sales) optimized for reporting and dashboards.
- **C.** Keep all data heavily normalized in Gold to minimize storage and rely on BI tools to join data at query time.
- **D.** Build only lightly cleansed views in Gold and preserve most business logic in Silver to reduce duplication.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Create denormalized, domain-aligned tables and materialized aggregates (e.g., weekly_sales) optimized for reporting and dashboards.

Gold nên cung cấp tập dữ liệu theo nghiệp vụ và chỉ số tổng hợp báo cáo. Bảng phi chuẩn hóa theo miền giảm lặp phép nối và phục vụ dashboard hiệu quả.

#### Vì sao các phương án khác không phù hợp?

- **Move raw, append-only source data directly into Gold to avoid transformation costs and enable time travel.**: Dữ liệu thô chỉ nối thêm thuộc Bronze và không đáp ứng mô hình dashboard.
- **Build only lightly cleansed views in Gold and preserve most business logic in Silver to reduce duplication.**: Chỉ làm sạch nhẹ không tạo ra chỉ số nghiệp vụ yêu cầu.
- **Keep all data heavily normalized in Gold to minimize storage and rely on BI tools to join data at query time.**: Chuẩn hóa mạnh giữ các phép nối phức tạp lúc truy vấn mà nhóm muốn tránh.

**Tham khảo:**

- [Medallion lakehouse architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q418 · single choice · — not answered

A data engineering team is analyzing customer transactions using a PySpark DataFrame named transactions with columns customer_id, amount, and category. 

The team needs to compute, for each customer, the total transaction amount, the average transaction amount, and the maximum amount - all in a single operation for efficiency. 

Which code fragment should be used to achieve this in PySpark?

- ✅ **A.** `transactions.groupBy("customer_id") .agg(sum("amount"), avg("amount"), max("amount"))`
- **B.** `transactions.groupBy("customer_id") .sum("amount") .avg("amount").max("amount")`
- **C.** `transactions.agg(groupBy("customer_id"), sum("amount"), avg("amount"), max("amount"))`
- **D.** `transactions.groupBy("customer_id") .select(sum("amount"), avg("amount"), max("amount"))`

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** transactions.groupBy("customer_id") .agg(sum("amount"), avg("amount"), max("amount"))

groupBy tạo nhóm theo khách hàng và agg tính tổng, trung bình cùng lớn nhất trong một lần khai báo. Các tên hàm phải trỏ đến hàm aggregate PySpark SQL.

#### Vì sao các phương án khác không phù hợp?

- **transactions.groupBy("customer_id") .select(sum("amount"), avg("amount"), max("amount"))**: GroupedData dùng agg thay vì select như đoạn này cho aggregate theo nhóm.
- **transactions.agg(groupBy("customer_id"), sum("amount"), avg("amount"), max("amount"))**: groupBy là phương thức DataFrame, không phải biểu thức aggregate bên trong agg.
- **transactions.groupBy("customer_id") .sum("amount") .avg("amount").max("amount")**: sum trả DataFrame; gọi avg và max tiếp theo không phải chuỗi aggregate GroupedData.

**Tham khảo:**

- [GroupedData.agg](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.GroupedData.agg.html)

</details>


---

## Q419 · single choice · — not answered

A data engineer needs to audit who made changes to a Delta table in the last 7 days. Which SQL statement returns the record of past operations, including timestamps, users, and operation types?

- **A.** DESCRIBE DETAIL my_table
- ✅ **B.** DESCRIBE HISTORY my_table
- **C.** SELECT * FROM 'delta.my_table/_delta_log/'
- **D.** SHOW TBLPROPERTIES my_table

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** DESCRIBE HISTORY my_table

DESCRIBE HISTORY trả lịch sử commit của Delta, gồm thời gian, danh tính người thao tác khi có và loại thao tác. Lọc kết quả theo timestamp để giới hạn bảy ngày cần kiểm tra.

#### Vì sao các phương án khác không phù hợp?

- **DESCRIBE DETAIL my_table**: DESCRIBE DETAIL trả thông tin hiện tại của bảng như vị trí và kích thước, không phải chuỗi thao tác.
- **SHOW TBLPROPERTIES my_table**: SHOW TBLPROPERTIES trả thuộc tính cấu hình chứ không có nhật ký người thay đổi.
- **SELECT * FROM 'delta.my_table/_delta_log/'**: Chuỗi này không phải cú pháp đọc log Delta hợp lệ và bỏ qua giao diện lịch sử được hỗ trợ.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

</details>


---

## Q420 · single choice · — not answered

A data engineer runs df.toPandas() on a wide DataFrame containing 50 million rows. The notebook cell fails with a java.lang.OutOfMemoryError on the driver. Which memory configuration is directly responsible for this failure?

- ✅ **A.** spark.driver.memory is too low to hold the collected result set
- **B.** spark.memory.fraction is too low, limiting the storage memory available for caching
- **C.** spark.executor.memory is too low to process the DataFrame transformations
- **D.** spark.sql.shuffle.partitions is set too high, causing excessive memory consumption during shuffles

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** spark.driver.memory is too low to hold the collected result set

toPandas gom kết quả về driver nên thiếu bộ nhớ driver giải thích lỗi đã báo. Nên lọc, tổng hợp hoặc lấy mẫu trước thay vì gom 50 triệu hàng rộng.

#### Vì sao các phương án khác không phù hợp?

- **spark.memory.fraction is too low, limiting the storage memory available for caching**: Tỷ lệ bộ nhớ cache không phải giới hạn chính khi gom kết quả pandas.
- **spark.executor.memory is too low to process the DataFrame transformations**: Bộ nhớ executor không giữ DataFrame pandas cục bộ cuối cùng.
- **spark.sql.shuffle.partitions is set too high, causing excessive memory consumption during shuffles**: Số shuffle cao không giải thích lỗi gom về driver này.

**Tham khảo:**

- [DataFrame.toPandas](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.toPandas.html)
- [Spark memory issues](https://docs.databricks.com/aws/en/optimizations/spark-ui-guide/spark-memory-issues)

</details>


---

## Q421 · single choice · — not answered

A data engineer is attempting to grant a user access to a view. They successfully run GRANT SELECT ON VIEW sales_catalog.market_data.summary TO analyst_group. However, the analyst still receives an "Insufficient Permissions" error when trying to query the view. In which order should the engineer verify the Hierarchy of Securable Objects to ensure the analyst has the necessary usage permissions?

- ✅ **A.** CATALOG -> SCHEMA -> VIEW
- **B.** STORAGE CREDENTIAL -> EXTERNAL LOCATION -> VIEW
- **C.** METASTORE -> TABLE -> VIEW
- **D.** WORKSPACE -> CLUSTER -> VIEW

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CATALOG -> SCHEMA -> VIEW

Kiểm tra USE CATALOG trên sales_catalog, USE SCHEMA trên market_data rồi SELECT trên view summary. Quyền đọc đối tượng không tự cấp quyền sử dụng hai container cha.

#### Vì sao các phương án khác không phù hợp?

- **METASTORE -> TABLE -> VIEW**: Table không phải container cha của view và quyền sử dụng metastore không thay thế hai quyền USE.
- **STORAGE CREDENTIAL -> EXTERNAL LOCATION -> VIEW**: Storage credential và external location kiểm soát lưu trữ, không phải phân cấp tên ba phần của view.
- **WORKSPACE -> CLUSTER -> VIEW**: Workspace và cluster kiểm soát môi trường thực thi, không thay thế quyền Unity Catalog.

**Tham khảo:**

- [Unity Catalog privileges reference](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q422 · single choice · — not answered

A data engineer configures a Databricks Lakeflow Job for daily customer data processing: 

- Entry task: Single notebook loads raw data 
- Parallel tasks: 

- SQL query task for cleansing 
- Notebook task for feature engineering 
- Pipeline task for model updates 
- Exit task: Dashboard refresh (must run after all parallel tasks complete) 
- Requirement: Implement this dependency pattern using a DAG-based task graph 

Which task configuration ensures all parallel tasks complete before the dashboard refresh task runs?

- **A.** Set the dashboard task to depend only on the SQL query task; other tasks run independently.
- **B.** Create separate Lakeflow Jobs for each parallel task and trigger them sequentially using external orchestration.
- ✅ **C.** Add the dashboard task as dependent on all three parallel tasks using fan-in control flow.
- **D.** Configure the parallel tasks with sequential dependencies so each task waits for the previous one to finish.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Add the dashboard task as dependent on all three parallel tasks using fan-in control flow.

Cho task dashboard phụ thuộc cả ba task song song với điều kiện All succeeded. Fan-in giữ tính song song nhưng chặn refresh cuối đến khi hoàn tất.

#### Vì sao các phương án khác không phù hợp?

- **Create separate Lakeflow Jobs for each parallel task and trigger them sequentially using external orchestration.**: Job riêng tuần tự thêm điều phối và bỏ đồ thị task chung được yêu cầu.
- **Configure the parallel tasks with sequential dependencies so each task waits for the previous one to finish.**: Phụ thuộc tuần tự làm các task độc lập chạy nối tiếp không cần thiết.
- **Set the dashboard task to depend only on the SQL query task; other tasks run independently.**: Chỉ phụ thuộc SQL cho phép refresh trước khi hai task còn lại xong.

**Tham khảo:**

- [Configure task dependencies](https://docs.databricks.com/aws/en/jobs/run-if)

</details>


---

## Q423 · single choice · — not answered

A data engineer uses the Databricks workspace UI with Unity Catalog enabled. In Data Explorer, they select catalog corp_marketing, then schema campaigns, and see table email_stats. The engineer must let the growth- analysts group read email_stats from their SQL warehouses, but not create, alter, or delete any objects in corp_marketing or campaigns. Which action sequence meets the requirement?

- ✅ **A.** 
  - On catalog corp_marketing, open Permissions and grant USE CATALOG to growth-analysts 2. On schema campaigns, open Permissions and grant USE SCHEMA to growth-analysts 3. On the table email_stats, open Permissions and grant SELECT to growth-analysts
- **B.** 
  - On schema campaigns, open Permissions and grant USE SCHEMA to growth-analysts 2. On the table email_stats, open Permissions and grant SELECT and MODIFY to growth-analysts
- **C.** 
  - On catalog corp_marketing, open Permissions and grant USE CATALOG and CREATE SCHEMA to growth- analysts 2. On schema campaigns, open Permissions and grant USE SCHEMA to growth-analysts 3. On the table email_stats, open Permissions and grant SELECT to growth-analysts
- **D.** 
  - On schema campaigns, open Permissions and grant USE SCHEMA and SELECT to growth-analysts 2. On the table email_stats, open Permissions and grant SELECT to growth-analysts

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** 1. On catalog corp_marketing, open Permissions and grant USE CATALOG to growth-analysts 2. On schema campaigns, open Permissions and grant USE SCHEMA to growth-analysts 3. On the table email_stats, open Permissions and grant SELECT to growth-analysts

USE CATALOG và USE SCHEMA cho phép đi qua không gian tên, còn SELECT trên email_stats chỉ cấp đọc bảng đó. Không cần quyền tạo hay sửa.

#### Vì sao các phương án khác không phù hợp?

- **1. On schema campaigns, open Permissions and grant USE SCHEMA to growth-analysts 2. On the table email_stats, open Permissions and grant SELECT and MODIFY to growth-analysts**: MODIFY cho phép đổi dữ liệu và còn thiếu USE CATALOG.
- **1. On catalog corp_marketing, open Permissions and grant USE CATALOG and CREATE SCHEMA to growth- analysts 2. On schema campaigns, open Permissions and grant USE SCHEMA to growth-analysts 3. On the table email_stats, open Permissions and grant SELECT to growth-analysts**: CREATE SCHEMA cho tạo đối tượng vượt yêu cầu chỉ đọc.
- **1. On schema campaigns, open Permissions and grant USE SCHEMA and SELECT to growth-analysts 2. On the table email_stats, open Permissions and grant SELECT to growth-analysts**: Thiếu USE CATALOG và SELECT toàn schema rộng hơn quyền trên một bảng.

**Tham khảo:**

- [Unity Catalog privileges](https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference)

</details>


---

## Q424 · single choice · — not answered

A data engineer has two DataFrames: orders_df (all orders) and customers_df (only active customers). The data engineer needs to filter out orders placed by inactive customers. Which operation should the data engineer use?

- **A.** customers_df left join with orders_df
- **B.** orders_df left join with customers_df
- ✅ **C.** orders_df and customers_df inner join
- **D.** orders_df and customers_df cross join

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** orders_df and customers_df inner join

Inner join theo customer_id chỉ giữ đơn hàng có khách tương ứng trong tập khách đang hoạt động. Vì khách không hoạt động không có bên customers_df, đơn của họ bị loại.

#### Vì sao các phương án khác không phù hợp?

- **customers_df left join with orders_df**: Left join từ customers giữ cả khách không có đơn, không phải chỉ tập đơn hàng cần lọc.
- **orders_df and customers_df cross join**: Cross join ghép mọi cặp, không kiểm tra quan hệ khách với đơn.
- **orders_df left join with customers_df**: Left join từ orders vẫn giữ đơn của khách không hoạt động với cột khách NULL.

**Tham khảo:**

- [JOIN](https://spark.apache.org/docs/latest/sql-ref-syntax-qry-select-join.html)

</details>


---

## Q425 · single choice · — not answered

A company has a strict 15-minute Service Level Agreement (SLA) for updating its currency exchange dashboard. The source data arrives in small increments every few minutes. The data engineering team needs a triggering strategy for their Lakeflow Job that keeps end-to-end latency within the SLA while minimizing compute cost and DBU consumption. Which triggering strategy for the Lakeflow Job is the recommended way to meet this 15-minute SLA?

- **A.** Use a Scheduled trigger set to run every 1 minute to ensure the SLA is never at risk.
- **B.** Use a File Arrival trigger configured to fire every time a single JSON file lands in the bucket.
- **C.** Use a Continuous trigger to ensure data is processed as soon as it arrives.
- ✅ **D.** Use a Scheduled trigger set to run every 12 minutes, with the streaming task configured to use Trigger.AvailableNow.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a Scheduled trigger set to run every 12 minutes, with the streaming task configured to use Trigger.AvailableNow.

Lịch mười hai phút với AvailableNow xử lý phần đầu vào tích lũy rồi dừng sau khi bắt kịp, giảm chi phí chạy luồng nhàn rỗi. Nó chỉ đạt SLA đầu-cuối mười lăm phút nếu khởi động và xử lý nằm trong phần thời gian còn lại.

#### Vì sao các phương án khác không phù hợp?

- **Use a Scheduled trigger set to run every 1 minute to ensure the SLA is never at risk.**: Chạy mỗi phút tăng chi phí khởi động và điều phối vượt mục tiêu độ mới nêu ra.
- **Use a File Arrival trigger configured to fire every time a single JSON file lands in the bucket.**: Kích hoạt theo từng tệp nhỏ có thể tạo quá nhiều lần chạy nhỏ thay vì gom lô tiết kiệm.
- **Use a Continuous trigger to ensure data is processed as soon as it arrives.**: Chạy liên tục tiêu tài nguyên giữa các lần dữ liệu tới khi SLA cho phép gom lô định kỳ.

**Tham khảo:**

- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

**Cần xem lại:** Đề thiếu giới hạn khởi động, chờ chạy và xử lý để chứng minh phương án 12 phút đạt SLA nghiêm ngặt. Cách xử lý: Giữ phương án lịch 12 phút với AvailableNow nếu bổ sung rằng tổng thời gian chờ tài nguyên, khởi động và xử lý đã đo không quá 3 phút, không có run bị dồn hàng đợi; nếu không, xác định lại lịch bằng thời gian đo.

</details>


---

## Q426 · single choice · — not answered

A data engineering team uses Declarative Automation Bundles (formerly Databricks Asset Bundles) to deploy the same codebase across dev, test, and prod environments. The team wants environment-specific behavior to be applied only through bundle configuration, without modifying notebooks, job definitions, or deployment logic during promotion. Which approach applies environment-specific configuration while meeting this requirement?

- **A.** Deploy the same bundle once and edit job settings in the workspace UI for each environment after deployment.
- **B.** Parameterize environment-specific values inside notebooks and set those parameters when each job run is triggered.
- **C.** Use separate Git branches per environment so each branch can contain environment-specific configuration values.
- ✅ **D.** Define bundle variables and reference them from bundle resources, then override variable values per environment using bundle targets.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Define bundle variables and reference them from bundle resources, then override variable values per environment using bundle targets.

Tham chiếu biến bundle trong cấu hình tài nguyên và ghi đè trong từng target. Giá trị theo target thay đổi cấu hình triển khai trong khi giữ cùng định nghĩa tài nguyên được quản lý phiên bản.

#### Vì sao các phương án khác không phù hợp?

- **Use separate Git branches per environment so each branch can contain environment-specific configuration values.**: Nhánh riêng tạo khác biệt mã theo môi trường thay vì chuyển môi trường chỉ bằng cấu hình.
- **Parameterize environment-specific values inside notebooks and set those parameters when each job run is triggered.**: Tham số notebook lúc chạy không phải cấu hình target ở mức triển khai yêu cầu.
- **Deploy the same bundle once and edit job settings in the workspace UI for each environment after deployment.**: Sửa giao diện thủ công tạo sai lệch ngoài bundle được quản lý phiên bản.

**Tham khảo:**

- [Bundle configuration reference](https://docs.databricks.com/aws/en/dev-tools/bundles/reference)

</details>


---

## Q427 · single choice · — not answered

A data engineer observes that an ETL job in Databricks has increased its execution time from 5 minutes (baseline) to 12 minutes over the past week. Using the Lakeflow Jobs run history view, the engineer needs to identify whether the slowdown is consistent or intermittent and determine the root cause. Which action should the engineer take to analyze execution time trends against the baseline?

- **A.** Rerun the job immediately to establish a new baseline since historical data becomes irrelevant after seven days.
- ✅ **B.** Compare cluster metrics in Lakeflow Jobs run history to spot resource spikes causing delays.
- **C.** Increase cluster size automatically whenever execution time exceeds the previous run's duration.
- **D.** Archive old job runs and resets the baseline counter to ensure accurate comparison of current performance.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Compare cluster metrics in Lakeflow Jobs run history to spot resource spikes causing delays.

So sánh thời lượng các lần chạy với mốc lịch sử và đối chiếu lần chậm với chỉ số tác vụ, tài nguyên. Cách này phân biệt chậm lặp lại với đột biến tài nguyên trước khi chọn cách sửa.

#### Vì sao các phương án khác không phù hợp?

- **Archive old job runs and resets the baseline counter to ensure accurate comparison of current performance.**: Lưu trữ bỏ lịch sử làm mất bằng chứng so sánh thay vì giải thích suy giảm.
- **Rerun the job immediately to establish a new baseline since historical data becomes irrelevant after seven days.**: Lần chạy mới không khiến các số đo mốc lịch sử mất giá trị.
- **Increase cluster size automatically whenever execution time exceeds the previous run's duration.**: Tự tăng cụm giả định nguyên nhân tài nguyên khi chưa khảo sát xu hướng.

**Tham khảo:**

- [Diagnose Lakeflow Jobs performance](https://docs.databricks.com/gcp/en/jobs/diagnose-job-performance)

</details>


---

## Q428 · single choice · — not answered

A data engineer has configured a Lakeflow Job that runs daily to ingest customer transaction data from a legacy relational database. The extracted data must be written directly to a Unity Catalog table and be immediately queryable via SQL. The team needs to ensure full data lineage is preserved. Which action enables this data ingestion with direct landing in Unity Catalog, preserved lineage, and immediate SQL query ability?

- **A.** Stage data in cloud storage via REST API, then load with a separate job
- **B.** Extract to Pandas DataFrame, convert to Spark, then save() to external path
- ✅ **C.** Use spark.read.format("jdbc") and write with saveAsTable("catalog.schema.table")
- **D.** Use ODBC pooling to extract all records in one batch and write to /dbfs/

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use spark.read.format("jdbc") and write with saveAsTable("catalog.schema.table")

Đọc nguồn quan hệ qua JDBC và dùng saveAsTable với tên Unity Catalog ba phần để đăng ký đích truy vấn SQL. Thực thi Databricks được hỗ trợ ghi lineage đích, nhưng riêng mã này không bảo đảm đầy đủ lineage nguồn ngoài.

#### Vì sao các phương án khác không phù hợp?

- **Stage data in cloud storage via REST API, then load with a separate job**: Đưa qua lưu trữ trung gian thêm một bước thay vì ghi trực tiếp vào bảng.
- **Extract to Pandas DataFrame, convert to Spark, then save() to external path**: Lưu ra đường dẫn ngoài tự nó không đăng ký bảng Unity Catalog cần thiết.
- **Use ODBC pooling to extract all records in one batch and write to /dbfs/**: Ghi vào /dbfs không tạo bảng SQL được quản trị hay bảo đảm lineage.

**Tham khảo:**

- [JDBC to other databases](https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html)
- [Lineage in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-lineage)

**Cần xem lại:** Yêu cầu full data lineage vượt khả năng được chứng minh bởi đoạn JDBC/saveAsTable trong khóa. Cách xử lý: Giữ phương án JDBC/saveAsTable cho ghi trực tiếp và truy vấn SQL; thêm yêu cầu đăng ký external metadata và quan hệ lineage từ nguồn legacy đến bảng Unity Catalog, hoặc thu hẹp đề thành lineage bên trong Databricks.

</details>


---

## Q429 · single choice · — not answered

A data engineer needs Task C to run ONLY if Task A succeeds AND Task B fails. Which dependency configuration implements this conditional logic?

- **A.** Create a Python task that checks dbutils.jobs.taskValues from Tasks A and B before running Task C.
- **B.** Task C depends on Task A (All done) and Task B (All done) with a condition widget.
- **C.** Task C depends on Task A (Success) with Task B listed as a negative dependency.
- ✅ **D.** Task C uses two dependency chains: Task A with All succeeded, Task B with at least one failed.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Task C uses two dependency chains: Task A with All succeeded, Task B with at least one failed.

Logic cần dùng là AND giữa Task A thành công và Task B thất bại. Tuy nhiên mỗi task có một điều kiện Run if cho các phụ thuộc, không có điều kiện thành công/thất bại riêng mỗi cạnh như đáp án ngụ ý.

#### Vì sao các phương án khác không phù hợp?

- **Task C depends on Task A (All done) and Task B (All done) with a condition widget.**: All done chỉ chờ hoàn tất; condition widget không được định nghĩa không thiết lập kiểm tra trạng thái cần có.
- **Task C depends on Task A (Success) with Task B listed as a negative dependency.**: Negative dependency không phải cấu hình phụ thuộc được tài liệu nêu.
- **Create a Python task that checks dbutils.jobs.taskValues from Tasks A and B before running Task C.**: taskValues là giá trị ứng dụng, không phải bản ghi trạng thái task tự động; lỗi có thể khiến không đặt được giá trị.

**Tham khảo:**

- [Configure task dependencies](https://docs.databricks.com/aws/en/jobs/run-if)

**Cần xem lại:** Cấu hình được chọn không diễn đạt cấu hình hợp lệ bảo đảm A thành công VÀ B thất bại. Cách xử lý: Thay phương án được chọn bằng cấu hình có cổng kiểm tra trạng thái A và B rõ ràng; giữ khóa hiện tại đến khi duyệt phương án thay thế.

</details>


---

## Q430 · single choice · — not answered

A governance team is evaluating whether to use Unity Catalog attribute-based access control (ABAC) policies or manually applied row filters and column masks to protect sensitive data across their catalog. Why should the team use ABAC policies instead of manually applied row filters and column masks?

- **A.** ABAC policies support applying multiple distinct row filters to the same table for a single user at query time, whereas manually applied row filters are limited to one filter per table.
- **B.** ABAC policies allow row filters and column masks to be written in Python and Scala directly, whereas manually applied filters and masks can only use SQL user-defined functions.
- **C.** ABAC policies can be applied to views and materialized views in addition to tables, whereas manually applied row filters and column masks can only be applied to tables.
- ✅ **D.** ABAC policies use governed tags to dynamically match tables and columns, so a single policy defined on a catalog automatically applies to all current and future tables within that catalog without per-table configuration.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** ABAC policies use governed tags to dynamically match tables and columns, so a single policy defined on a catalog automatically applies to all current and future tables within that catalog without per-table configuration.

Chính sách ABAC dùng governed tag để khớp đối tượng hiện tại và tương lai trong phạm vi. Cách này tập trung quy tắc thay vì gắn bộ lọc riêng từng bảng.

#### Vì sao các phương án khác không phù hợp?

- **ABAC policies allow row filters and column masks to be written in Python and Scala directly, whereas manually applied filters and masks can only use SQL user-defined functions.**: ABAC không cung cấp logic chính sách Scala/Python trực tiếp như khác biệt được nêu.
- **ABAC policies can be applied to views and materialized views in addition to tables, whereas manually applied row filters and column masks can only be applied to tables.**: Hỗ trợ view/materialized view không phải lợi thế phổ quát được nêu so với lọc mức bảng.
- **ABAC policies support applying multiple distinct row filters to the same table for a single user at query time, whereas manually applied row filters are limited to one filter per table.**: Nhiều bộ lọc hàng khác nhau cùng khớp gây xung đột thay vì được kết hợp tự do.

**Tham khảo:**

- [ABAC core concepts](https://docs.databricks.com/aws/en/data-governance/unity-catalog/abac/core-concepts)
- [ABAC requirements and limitations](https://docs.databricks.com/aws/en/data-governance/unity-catalog/abac/requirements)

</details>


---

## Q431 · single choice · — not answered

A data engineering team is designing the Gold layer in their Unity Catalog-governed lakehouse for downstream BI and analytics users. The team wants to expose business-ready metrics with fast query performance and consistent definitions, while keeping the transformation logic in Spark notebooks. Which type of Gold layer object meets this requirement?

- ✅ **A.** A materialized view that precomputes aggregations from Silver tables on a schedule and is queried by BI tools for faster, consistent analytics.
- **B.** A view that directly references raw Bronze tables so BI tools can define their own joins and aggregations.
- **C.** A collection of CSV files stored in a cloud storage object. BI users will parse the files to query the gold layer data.
- **D.** A streaming table that continuously ingests raw events from source systems and exposes them directly to BI users.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A materialized view that precomputes aggregations from Silver tables on a schedule and is queried by BI tools for faster, consistent analytics.

Materialized view lưu chỉ số nghiệp vụ tính trước cho BI nhanh và nhất quán. Phép biến đổi có thể được định nghĩa trong pipeline khai báo, còn người dùng truy vấn đối tượng Gold kết quả.

#### Vì sao các phương án khác không phù hợp?

- **A streaming table that continuously ingests raw events from source systems and exposes them directly to BI users.**: Nạp luồng thô là trách nhiệm Bronze chứ không phải chỉ số Gold sẵn dùng.
- **A view that directly references raw Bronze tables so BI tools can define their own joins and aggregations.**: View Bronze thô để người dùng tự xử lý phép nối và định nghĩa nghiệp vụ thiếu thống nhất.
- **A collection of CSV files stored in a cloud storage object. BI users will parse the files to query the gold layer data.**: Tệp CSV không cung cấp đối tượng truy vấn tính trước được quản trị cho BI.

**Tham khảo:**

- [Materialized views](https://docs.databricks.com/aws/en/ldp/materialized-views)

</details>


---

## Q432 · single choice · — not answered

A data engineer has manually created several Databricks jobs and dashboards using the workspace UI. The team now wants to manage these resources as code using Declarative Automation Bundles (formerly Databricks Asset Bundles), store the configuration in a Git repository, and deploy changes through CI/CD. Which approach converts the existing resources into a bundle project?

- **A.** Use the Databricks REST API to export each job's JSON definition, save the JSON files into a Git repository, and configure CI/CD to import them using the REST API on each deployment.
- ✅ **B.** Run databricks bundle generate for each existing resource, use --bind to link the generated configuration to the existing workspace resources, and commit the bundle project to Git for CI/CD deployment.
- **C.** Run databricks bundle init to create a new bundle project, then use databricks bundle deploy pointed at the workspace to automatically detect and import all existing resources into the bundle configuration.
- **D.** Clone an empty Git repository into a Git Folder, recreate each job and dashboard configuration in YAML by referencing the settings using workspace UI, then commit and deploy with databricks bundle deploy.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run databricks bundle generate for each existing resource, use --bind to link the generated configuration to the existing workspace resources, and commit the bundle project to Git for CI/CD deployment.

bundle generate xuất tài nguyên hiện có được hỗ trợ; --bind liên kết cấu hình sinh ra với ID tài nguyên đó. Commit bundle cho phép cập nhật CI/CD có phiên bản thay vì tạo bản thay thế không liên kết.

#### Vì sao các phương án khác không phù hợp?

- **Run databricks bundle init to create a new bundle project, then use databricks bundle deploy pointed at the workspace to automatically detect and import all existing resources into the bundle configuration.**: init tạo dự án; deploy không tự phát hiện và nhập mọi tài nguyên workspace.
- **Use the Databricks REST API to export each job's JSON definition, save the JSON files into a Git repository, and configure CI/CD to import them using the REST API on each deployment.**: Xuất REST và script triển khai tự chúng không tạo dự án bundle cùng liên kết triển khai.
- **Clone an empty Git repository into a Git Folder, recreate each job and dashboard configuration in YAML by referencing the settings using workspace UI, then commit and deploy with databricks bundle deploy.**: Có thể chép cấu hình thủ công nhưng tốn công hơn và thiếu bước binding tường minh.

**Tham khảo:**

- [Bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q433 · single choice · — not answered

A data engineer is running a Spark SQL job on Databricks and notices that joins between a small lookup table and a large fact table are slow. The data engineer wants Spark to automatically send the small lookup table to all executors to speed up the join. Which configuration parameter should the data engineer adjust?

- **A.** spark.sql.shuffle.partitions
- **B.** spark.default.parallelism
- **C.** spark.executor.memory
- ✅ **D.** spark.sql.autoBroadcastJoinThreshold

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** spark.sql.autoBroadcastJoinThreshold

spark.sql.autoBroadcastJoinThreshold đặt ngưỡng kích thước để Spark tự broadcast bảng. Thống kê kích thước chính xác và bộ nhớ executor vẫn quan trọng.

#### Vì sao các phương án khác không phù hợp?

- **spark.sql.shuffle.partitions**: Số partition shuffle không đặt ngưỡng broadcast.
- **spark.executor.memory**: Bộ nhớ executor đổi dung lượng thay vì ngưỡng lập kế hoạch join.
- **spark.default.parallelism**: Default parallelism điều khiển độ song song task, không điều kiện broadcast.

**Tham khảo:**

- [Spark SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

</details>


---

## Q434 · single choice · — not answered

A data engineer is troubleshooting two different pipeline failures: 

- Pipeline A fails with a java.lang.OutOfMemoryError is immediately thrown after the command display(df.collect()) is called on a 100GB dataset. 
- Pipeline B fails during a wide transformation (a join of two large tables) with an ExecutorLostFailure error message, indicating executor memory exhaustion during shuffle. 

Which action should the data engineer take to fix these two issues?

- **A.** For Pipeline A, switch to a Storage Optimized cluster; for Pipeline B, use a Compute Optimized cluster.
- **B.** For Pipeline A, increase the number of executors; for Pipeline B, increase the driver memory.
- ✅ **C.** For Pipeline A, increase the spark.driver.memory; for Pipeline B, increase the spark.sql.shuffle.partitions or executor memory.
- **D.** For both pipelines, enable Adaptive Query Execution (AQE) as it automatically manages memory allocation for both the driver and executors.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** For Pipeline A, increase the spark.driver.memory; for Pipeline B, increase the spark.sql.shuffle.partitions or executor memory.

Lỗi collect ở driver vì đưa toàn dataset về driver; nên tránh collect thay vì cố giữ 100 GB ở đó. Thiếu bộ nhớ shuffle ở executor có thể giảm bằng nhiều partition nhỏ hơn hoặc tăng bộ nhớ executor.

#### Vì sao các phương án khác không phù hợp?

- **For Pipeline A, switch to a Storage Optimized cluster; for Pipeline B, use a Compute Optimized cluster.**: Nhãn storage/compute-optimized không trực tiếp giải quyết lỗi bộ nhớ driver/executor tương ứng.
- **For Pipeline A, increase the number of executors; for Pipeline B, increase the driver memory.**: Lựa chọn đảo nơi tài nguyên xảy ra hai lỗi.
- **For both pipelines, enable Adaptive Query Execution (AQE) as it automatically manages memory allocation for both the driver and executors.**: AQE không tự tăng heap driver hay đảm bảo đủ bộ nhớ executor.

**Tham khảo:**

- [Spark memory issues](https://docs.databricks.com/aws/en/optimizations/spark-ui-guide/spark-memory-issues)
- [Adaptive query execution](https://docs.databricks.com/aws/en/optimizations/aqe)

</details>


---

## Q435 · single choice · — not answered

A data engineer has multiple Unity Catalog-managed Delta tables that require regular maintenance. Currently, the data engineer manually schedules OPTIMIZE and VACUUM jobs for each table, adjusting the frequency based on how often each table is queried and updated. The engineer needs to eliminate this manual maintenance overhead and have the platform automatically determine when and how to run these operations. Which action should the engineer take to meet the requirements?

- **A.** Configure Auto Loader with schema evolution enabled to automatically trigger OPTIMIZE and VACUUM after each data ingestion batch completes.
- **B.** Enable Liquid Clustering with CLUSTER BY on each table to automatically compact and remove stale data files on a scheduled basis.
- **C.** Set the delta.autoOptimize.autoCompact and delta.autoOptimize.optimizeWrite table properties to trigger automatic VACUUM and file compaction.
- ✅ **D.** Enable predictive optimization at the account, catalog, or schema level so the platform automatically identifies and runs OPTIMIZE and VACUUM on managed tables.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Enable predictive optimization at the account, catalog, or schema level so the platform automatically identifies and runs OPTIMIZE and VACUUM on managed tables.

Predictive optimization nhận diện bảo trì có lợi và tự chạy OPTIMIZE, VACUUM trên bảng managed. Thiết lập mức account, catalog hoặc schema loại nhu cầu tự đặt lịch từng bảng.

#### Vì sao các phương án khác không phù hợp?

- **Enable Liquid Clustering with CLUSTER BY on each table to automatically compact and remove stale data files on a scheduled basis.**: Liquid clustering tổ chức bố trí dữ liệu; tự nó không đặt lịch VACUUM.
- **Set the delta.autoOptimize.autoCompact and delta.autoOptimize.optimizeWrite table properties to trigger automatic VACUUM and file compaction.**: Optimized write và auto compaction không tự chạy VACUUM.
- **Configure Auto Loader with schema evolution enabled to automatically trigger OPTIMIZE and VACUUM after each data ingestion batch completes.**: Schema evolution Auto Loader xử lý schema nạp, không đặt lịch bảo trì bảng.

**Tham khảo:**

- [Predictive optimization](https://docs.databricks.com/aws/en/optimizations/predictive-optimization)

</details>


---

## Q436 · single choice · — not answered

A data engineering team runs multiple daily batch jobs. The team needs to run the jobs on a fixed overnight schedule with consistent performance and controlled resource usage. The team wants to minimize operational overhead and reduce idle cluster costs. Which compute option should the team use?

- ✅ **A.** Serverless jobs compute
- **B.** SQL warehouses
- **C.** Classic all-purpose compute
- **D.** Classic jobs compute

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Serverless jobs compute

Serverless jobs compute để Databricks cấp phát và tự điều chỉnh tài nguyên cho mỗi workload. Nhóm giảm quản lý cluster và tránh duy trì cluster nhàn rỗi giữa các đợt batch.

#### Vì sao các phương án khác không phù hợp?

- **SQL warehouses**: SQL warehouse phù hợp SQL; đề không giới hạn các job vào SQL.
- **Classic all-purpose compute**: All-purpose dành cho tương tác và dễ duy trì tài nguyên không cần thiết ngoài lịch chạy.
- **Classic jobs compute**: Classic jobs compute giảm idle nhưng vẫn cần cấu hình, quản lý hạ tầng nhiều hơn serverless.

**Tham khảo:**

- [Run Lakeflow Jobs with serverless compute](https://docs.databricks.com/aws/en/jobs/run-serverless-jobs)

</details>


---

## Q437 · single choice · — not answered

Which Databricks SQL predicate correctly performs a null-safe equality comparison so that rows are matched when both sides are NULL or when both are equal non-NULL values?

- **A.** WHERE customer_id <> :cid OR customer_id IS NULL
- **B.** WHERE COALESCE(customer_id, '') = COALESCE(:cid, '')
- ✅ **C.** WHERE customer_id <= > :cid
- **D.** WHERE customer_id = :cid

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** WHERE customer_id = > :cid

Toán tử đúng là => viết liền: nó coi hai NULL bằng nhau và so sánh bình thường cho giá trị không NULL. Khóa chỉ có thể đúng theo ý định vì văn bản = > bị tách và không phải cú pháp toán tử hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **WHERE customer_id = :cid**: Dấu = cho kết quả UNKNOWN khi có NULL, kể cả hai phía đều NULL.
- **WHERE COALESCE(customer_id, '') = COALESCE(:cid, '')**: Thay NULL bằng chuỗi rỗng làm NULL khớp nhầm chuỗi rỗng thật và có thể gây ép kiểu không hợp lệ.
- **WHERE customer_id > :cid OR customer_id IS NULL**: Điều kiện khác nhau hoặc customer_id NULL không thể hiện quan hệ bằng null-safe.

**Tham khảo:**

- [Null-safe equality operator](https://docs.databricks.com/aws/en/sql/language-manual/functions/lteqgtsign)

**Cần xem lại:** Phương án theo khóa viết = >, không phải toán tử null-safe hợp lệ =>. Cách xử lý: Sửa duy nhất = > thành => trong phương án WHERE customer_id => :cid; giữ nguyên khóa.

</details>


---

## Q438 · single choice · — not answered

A data engineer converts an external table to a managed table. A structured streaming job that reads from this table continues running during the conversion. After the conversion completes, the streaming job stops processing new records. How should the data engineer resolve this?

- **A.** Grant the streaming job additional permissions on the new managed storage location
- ✅ **B.** Restart the streaming job, so it picks up the new managed table location
- **C.** Run REFRESH TABLE on the converted table to update the streaming checkpoint
- **D.** Delete the streaming checkpoint directory and let the job reprocess from the beginning

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Restart the streaming job, so it picks up the new managed table location

Khởi động lại stream để nó giải quyết lại vị trí của bảng managed sau chuyển đổi. Giữ checkpoint hiện có để tiếp tục theo tiến độ đã ghi thay vì đọc lại toàn bộ.

#### Vì sao các phương án khác không phù hợp?

- **Grant the streaming job additional permissions on the new managed storage location**: Chuyển đổi giữ quyền của bảng; thêm quyền không cập nhật đường dẫn mà stream đang giữ.
- **Run REFRESH TABLE on the converted table to update the streaming checkpoint**: REFRESH TABLE làm mới cache/metadata, không chuyển checkpoint streaming sang vị trí mới.
- **Delete the streaming checkpoint directory and let the job reprocess from the beginning**: Xóa checkpoint mất tiến độ và có thể gây xử lý lại hoặc trùng dữ liệu.

**Tham khảo:**

- [Convert external or foreign Delta Lake tables to Unity Catalog managed tables](https://docs.databricks.com/aws/en/tables/convert-to-managed)

</details>


---

## Q439 · single choice · — not answered

A data engineer is designing a cost-optimized, event-driven pipeline. They configure a Lakeflow Job with a File Arrival trigger to watch an S3 bucket. The job runs a notebook that uses Auto Loader with trigger(availableNow=True) to ingest data into a Bronze table. What is the technical relationship between the File Arrival trigger and Auto Loader in this integration pattern?

- ✅ **A.** The File Arrival trigger starts the job run, while Auto Loader uses its internal checkpoint to independently identify and process only the new files that have arrived since the last successful commit.
- **B.** Auto Loader must be configured in File Notification mode to work with a Lakeflow Job File Arrival trigger.
- **C.** The File Arrival trigger automatically passes the specific file path of the new arrival to Auto Loader, allowing the engineer to skip the source path configuration in the code.
- **D.** Using a File Arrival trigger requires the engineer to disable Auto Loader's checkpointing to prevent the job from processing the same file multiple times.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The File Arrival trigger starts the job run, while Auto Loader uses its internal checkpoint to independently identify and process only the new files that have arrived since the last successful commit.

File Arrival trigger khởi chạy job, còn checkpoint bền vững của Auto Loader theo dõi tệp đã commit. AvailableNow xử lý tệp sẵn có chưa xử lý rồi dừng.

#### Vì sao các phương án khác không phù hợp?

- **Auto Loader must be configured in File Notification mode to work with a Lakeflow Job File Arrival trigger.**: Trigger job không bắt buộc một chế độ khám phá Auto Loader cụ thể.
- **The File Arrival trigger automatically passes the specific file path of the new arrival to Auto Loader, allowing the engineer to skip the source path configuration in the code.**: Notebook vẫn cần đường dẫn nguồn; trigger không thay cấu hình load.
- **Using a File Arrival trigger requires the engineer to disable Auto Loader's checkpointing to prevent the job from processing the same file multiple times.**: Checkpoint cần được giữ qua các lần chạy để tránh xử lý lại.

**Tham khảo:**

- [Trigger jobs when new files arrive](https://docs.databricks.com/aws/en/jobs/file-arrival-triggers)
- [Configure Structured Streaming trigger intervals](https://docs.databricks.com/aws/en/structured-streaming/triggers)

</details>


---

## Q440 · single choice · — not answered

A data engineer has finished developing a new Declarative Automation Bundle (formerly Databricks Asset Bundle) for a streaming pipeline. They need to ensure the configuration is syntactically correct, push the code to the workspace, and finally trigger the pipeline to verify it runs as expected. Which sequence of Databricks CLI commands should the engineer use to perform these steps in the correct order?

- **A.** databricks bundle validate -> databricks bundle sync -> databricks bundle execute
- **B.** databricks bundle init -> databricks bundle deploy -> databricks bundle run
- ✅ **C.** databricks bundle validate -> databricks bundle deploy -> databricks bundle run
- **D.** databricks bundle check -> databricks bundle upload -> databricks bundle start

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** databricks bundle validate -> databricks bundle deploy -> databricks bundle run

Validate kiểm tra cấu hình bundle, deploy đưa tài nguyên và mã lên workspace, run bắt đầu quy trình đã triển khai. Trình tự này kiểm tra định nghĩa trước khi chạy từ xa.

#### Vì sao các phương án khác không phù hợp?

- **databricks bundle init -> databricks bundle deploy -> databricks bundle run**: init tạo khung dự án thay vì kiểm tra cấu hình đã hoàn thành.
- **databricks bundle validate -> databricks bundle sync -> databricks bundle execute**: sync chép tệp nhưng không triển khai đầy đủ tài nguyên; execute không phải lệnh chạy quy trình.
- **databricks bundle check -> databricks bundle upload -> databricks bundle start**: check, upload, start không phải chuỗi lệnh kiểm tra/triển khai/chạy bundle này.

**Tham khảo:**

- [bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q441 · single choice · — not answered

A data engineer is preparing a Declarative Automation Bundle (formerly Databricks Asset Bundle) to deploy a Lakeflow pipeline. To ensure the pipeline is deployed to the correct environment, where should the workspace-specific configurations, such as the host URL and root storage path, be defined within the bundle project?

- **A.** In a global environment variable on the local development machine
- ✅ **B.** In the targets section of the databricks.yml file
- **C.** Inside the README.md file of the bundle root directory
- **D.** Within the Python source code of the Lakeflow pipeline

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** In the targets section of the databricks.yml file

Định nghĩa host workspace và root_path riêng môi trường trong targets của databricks.yml. Ghi đè theo target chọn cấu hình workspace phù hợp khi triển khai.

#### Vì sao các phương án khác không phù hợp?

- **In a global environment variable on the local development machine**: Biến toàn cục máy cá nhân không phải cấu hình target có phiên bản của bundle.
- **Within the Python source code of the Lakeflow pipeline**: Mã nguồn pipeline không nên cố định thiết lập workspace triển khai.
- **Inside the README.md file of the bundle root directory**: README là tài liệu, không phải cấu hình bundle được thực thi.

**Tham khảo:**

- [Declarative Automation Bundles configuration](https://docs.databricks.com/aws/en/dev-tools/bundles/settings)

</details>


---

## Q442 · single choice · — not answered

A data engineer is tasked with cleaning a bronze table. The requirement is to eliminate rows where either the customer_email or the customer_phone field is null. This data cleaning must be performed in a single operation using a single method call. Which PySpark approach supports filtering multiple columns for nulls in one call?

- **A.** df.where('customer_email IS NOT NULL').where('customer_phone IS NOT NULL')
- **B.** df.na.drop(how='all')
- ✅ **C.** df.dropna(subset=['customer_email', 'customer_phone'])
- **D.** df.filter(col('customer_email').isNotNull() & col('customer_phone').isNotNull())

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df.dropna(subset=['customer_email', 'customer_phone'])

dropna với subset giới hạn kiểm tra ở email và phone; how mặc định là any nên loại hàng nếu một trong hai bị NULL. Tuy nhiên filter với biểu thức AND cũng dùng một lời gọi DataFrame và cho cùng tập hàng.

#### Vì sao các phương án khác không phù hợp?

- **df.where('customer_email IS NOT NULL').where('customer_phone IS NOT NULL')**: Hai lời gọi where lọc đúng nhưng không đáp ứng một lời gọi.
- **df.na.drop(how='all')**: how=all chỉ loại hàng khi tất cả cột được kiểm tra đều thiếu và không giới hạn hai trường cần thiết.
- **df.filter(col('customer_email').isNotNull() & col('customer_phone').isNotNull())**: filter với AND là cách hợp lệ tương đương; không thể loại phương án này nếu một lời gọi được hiểu là một lời gọi DataFrame.

**Tham khảo:**

- [DataFrame.dropna](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.dropna.html)

**Cần xem lại:** Yêu cầu một lần gọi lọc chưa loại được phương án df.filter(...isNotNull() & ...isNotNull()). Cách xử lý: Thêm yêu cầu dùng API xử lý giá trị thiếu với tham số subset để khóa dropna là duy nhất, hoặc chấp nhận cả hai cách khi đổi thành câu nhiều đáp án.

</details>


---

## Q443 · single choice · — not answered

A data engineer uploads a CSV file using the "Create or modify a table using file upload" option in Databricks. To avoid incorrect schema inference, they disable Automatically detect column types before creating a Unity Catalog-managed table. What is the outcome?

- ✅ **A.** All columns are created with the STRING data type.
- **B.** Previously inferred column types are preserved.
- **C.** Numeric columns are inferred as numeric types; others are STRING.
- **D.** Table creation fails because column types are not specified.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** All columns are created with the STRING data type.

Tắt tự nhận diện kiểu cột khiến trường CSV tải lên được coi là STRING. Vẫn tạo được bảng và có thể chuyển kiểu rõ ràng sau đó.

#### Vì sao các phương án khác không phù hợp?

- **Numeric columns are inferred as numeric types; others are STRING.**: Suy luận kiểu số bị tắt cùng suy luận các kiểu khác.
- **Previously inferred column types are preserved.**: Thiết lập không giữ các kiểu số/ngày đã suy luận làm kết quả mặc định.
- **Table creation fails because column types are not specified.**: STRING cung cấp kiểu hợp lệ nên tạo bảng không thất bại vì lý do này.

**Tham khảo:**

- [Create or modify a table using file upload](https://docs.databricks.com/aws/en/ingestion/create-or-modify-table)

</details>


---

## Q444 · single choice · — not answered

A data engineer has developed a Python notebook in a Databricks workspace and has configured it to run as a scheduled Job to process daily sales data. How are the storage and execution of this notebook managed within the Databricks architecture?

- **A.** The notebook is stored securely and encrypted in Unity Catalog, and the code executes in Delta Lake when the job runs.
- **B.** The notebook is stored unencrypted in the workspace storage bucket, and the code executes on the cluster driver node in the compute plane when the job runs.
- ✅ **C.** The notebook is stored securely and encrypted in the control plane, and the code executes in the compute plane when the job runs.
- **D.** The notebook is stored securely and encrypted in the compute plane, and the code executes in the control plane when the job runs.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The notebook is stored securely and encrypted in the control plane, and the code executes in the compute plane when the job runs.

Nguồn notebook và quản lý workspace thuộc phía control plane, còn mã Jobs thực thi trên tài nguyên compute plane. Cách này tách tài sản soạn thảo được quản lý khỏi thực thi tải.

#### Vì sao các phương án khác không phù hợp?

- **The notebook is stored securely and encrypted in the compute plane, and the code executes in the control plane when the job runs.**: Phương án đảo ngược vai trò quản lý notebook và thực thi.
- **The notebook is stored securely and encrypted in Unity Catalog, and the code executes in Delta Lake when the job runs.**: Unity Catalog quản trị tài sản dữ liệu; Delta Lake là định dạng bảng, không phải mặt phẳng chạy notebook.
- **The notebook is stored unencrypted in the workspace storage bucket, and the code executes on the cluster driver node in the compute plane when the job runs.**: Khẳng định lưu trữ không mã hóa là sai dù driver chạy trong compute plane.

**Tham khảo:**

- [High-level architecture](https://docs.databricks.com/aws/en/getting-started/high-level-architecture/)

</details>


---

## Q445 · single choice · — not answered

A data engineer needs to find all customers who have never placed an order. The customers table contains customer_id, customer_name, and other customer attributes. The orders table contains order_id, customer_id, and other order attributes. Both tables share customer_id as the join key. The result must include only customer columns with no order-related columns in the output. Which expression exactly achieves this requirement?

- **A.** Left outer join from orders to customers
- **B.** Full outer join, then filter where order_id IS NULL
- ✅ **C.** Left anti-join from customers to orders
- **D.** Inner join, then filter for NULL order_id

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Left anti-join from customers to orders

Left anti join giữ các hàng customers không có customer_id khớp trong orders. Kết quả chỉ mang schema phía customers nên không cần loại cột đơn hàng sau join.

#### Vì sao các phương án khác không phù hợp?

- **Inner join, then filter for NULL order_id**: Inner join loại khách chưa đặt hàng trước khi kiểm tra NULL.
- **Left outer join from orders to customers**: Lấy orders làm phía trái giữ đơn hàng, không giữ mọi khách chưa đặt hàng.
- **Full outer join, then filter where order_id IS NULL**: Full outer join có thể tìm hàng không khớp nhưng vẫn xuất cột orders nếu không có phép chiếu bổ sung.

**Tham khảo:**

- [JOIN](https://spark.apache.org/docs/latest/sql-ref-syntax-qry-select-join.html)

</details>


---

## Q446 · single choice · — not answered

A data engineer needs to ingest JSON change data from Salesforce into Unity Catalog-governed Delta tables with a low-code, fully managed experience. Which Databricks capability should the data engineer use?

- **A.** Use the Salesforce REST API in a PySpark notebook to query changed records and write them to Delta tables
- **B.** Auto Loader reading JSON files from an S3 bucket exported by Salesforce
- ✅ **C.** A Lakeflow Connect managed Salesforce connector that writes into Unity Catalog Delta tables
- **D.** Auto Loader with a file arrival trigger on DBFS

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A Lakeflow Connect managed Salesforce connector that writes into Unity Catalog Delta tables

Dùng managed connector Salesforce cho pipeline nạp ít mã có quản trị Unity Catalog. Nền tảng quản lý connector thay vì yêu cầu tự trích qua API.

#### Vì sao các phương án khác không phù hợp?

- **Use the Salesforce REST API in a PySpark notebook to query changed records and write them to Delta tables**: Mã REST tự viết cần duy trì trích xuất, xác thực và trạng thái.
- **Auto Loader reading JSON files from an S3 bucket exported by Salesforce**: Auto Loader xử lý tệp xuất và phụ thuộc quy trình xuất Salesforce riêng.
- **Auto Loader with a file arrival trigger on DBFS**: Trigger tệp DBFS không phải managed connector Salesforce.

**Tham khảo:**

- [Salesforce ingestion](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/salesforce)
- [Lakeflow Connect connector concepts](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect)

</details>


---

## Q447 · single choice · — not answered

A data engineer is designing a Gold layer table for a BI team that needs to query complex aggregations. The requirements state that the data should be precomputed to ensure low latency for dashboard users, but the underlying data changes only once every few hours. Which object type should be implemented in Unity Catalog to meet these requirements?

- ✅ **A.** Materialized view
- **B.** External table
- **C.** View
- **D.** Streaming table

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Materialized view

Materialized view lưu kết quả tổng hợp đã tính để dashboard đọc nhanh. Có thể làm mới theo lịch phù hợp chu kỳ vài giờ của dữ liệu nguồn.

#### Vì sao các phương án khác không phù hợp?

- **Streaming table**: Streaming table phù hợp xử lý gia tăng; chỉ chọn nó không bảo đảm sẵn kết quả tổng hợp phức tạp mong muốn.
- **External table**: External table mô tả quyền quản lý lưu trữ chứ không tự tính và làm mới kết quả truy vấn.
- **View**: View thường lưu định nghĩa và tính truy vấn khi đọc nên không đáp ứng precompute.

**Tham khảo:**

- [Use standalone materialized views](https://docs.databricks.com/aws/en/sql/mv-st/materialized)

</details>


---

## Q448 · single choice · — not answered

A data engineering team ingests customer transaction data from three enterprise sources (SQL database, S3, and Kafka stream) into Unity Catalog tables. The data must maintain lineage and support compliance audits requiring historical snapshots. Which Lakeflow Connect configuration satisfies both the governance and audit requirements?

- **A.** Separate connectors with full-load sync only, archival of historical data, and external tables for audit queries.
- **B.** Single connector with batch scheduling, shared Unity Catalog schema, and incremental snapshots stored externally.
- ✅ **C.** Separate connectors per source with CDC, individual Unity Catalog schemas per source, and table versioning enabled for audit compliance.
- **D.** Single Lakeflow connector with all three sources, direct Delta writes, and disabled table versioning to reduce storage costs.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Separate connectors per source with CDC, individual Unity Catalog schemas per source, and table versioning enabled for audit compliance.

Luồng nạp riêng theo nguồn và bảng Delta đích được quản trị phù hợp nhất với lineage và kiểm toán lịch sử. CDC phù hợp bản ghi cơ sở dữ liệu thay đổi; giữ phiên bản lịch sử cần kế hoạch thời hạn giữ rõ ràng chứ không chỉ giả định bật versioning.

#### Vì sao các phương án khác không phù hợp?

- **Single Lakeflow connector with all three sources, direct Delta writes, and disabled table versioning to reduce storage costs.**: Một connector phổ quát và tắt lịch sử không đáp ứng đa nguồn hay kiểm toán.
- **Separate connectors with full-load sync only, archival of historical data, and external tables for audit queries.**: Chỉ nạp toàn bộ và kho lưu ngoài thiếu cách quản trị tăng dần tích hợp yêu cầu.
- **Single connector with batch scheduling, shared Unity Catalog schema, and incremental snapshots stored externally.**: Một connector không bao quát ngữ nghĩa nạp cơ sở dữ liệu, tệp và message bus khác nhau.

**Tham khảo:**

- [Streaming connectors](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/streaming-overview)
- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

**Cần xem lại:** Cấu hình không nêu cơ chế nạp được hỗ trợ cho từng nguồn và retention bảo đảm thời gian lưu snapshot kiểm toán. Cách xử lý: Nêu SQL CDC, cơ chế nạp S3/Kafka tương ứng và thời hạn lưu Delta log/data theo yêu cầu kiểm toán trong phương án được chọn.

</details>


---

## Q449 · single choice · — not answered

A data engineer is cleaning a bronze table that receives the same customer records from multiple source systems. Duplicate rows have the same customer_id and email but different ingestion_timestamp values. The silver table should contain only one record per unique combination of customer_id and email. Which PySpark operation correctly deduplicates based on the business keys?

- **A.** df.select('customer_id', 'email').distinct()
- **B.** df.distinct()
- ✅ **C.** df.dropDuplicates(['customer_id', 'email'])
- **D.** df.groupBy('customer_id', 'email').agg(max('ingestion_timestamp').alias('latest_ts'))

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df.dropDuplicates(['customer_id', 'email'])

dropDuplicates với customer_id và email so sánh đúng hai khóa nghiệp vụ và giữ các cột còn lại của một bản ghi đại diện. Hàm không bảo đảm giữ timestamp mới nhất; yêu cầu hiện tại không đòi chọn bản ghi mới nhất.

#### Vì sao các phương án khác không phù hợp?

- **df.groupBy('customer_id', 'email').agg(max('ingestion_timestamp').alias('latest_ts'))**: groupBy và max chỉ trả khóa cùng timestamp tổng hợp, không giữ toàn bộ bản ghi khách hàng.
- **df.select('customer_id', 'email').distinct()**: select rồi distinct làm mất mọi thuộc tính ngoài hai khóa.
- **df.distinct()**: distinct so sánh tất cả cột nên timestamp khác nhau vẫn tạo hàng khác nhau.

**Tham khảo:**

- [DataFrame.dropDuplicates](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.dropDuplicates.html)

**Cần xem lại:** select(customer_id,email).distinct() cũng cho một dòng mỗi cặp khóa; groupBy theo hai khóa cũng cho kết quả duy nhất. Cách xử lý: Bổ sung yêu cầu giữ nguyên toàn bộ cột của một bản ghi đầu vào và không tổng hợp để dropDuplicates(subset) là đáp án duy nhất.

</details>


---

## Q450 · single choice · — not answered

A data engineering team runs nightly batch ETL pipelines that transform large volumes of data stored in Delta Lake. The workloads are predictable and run on a fixed schedule. The team wants automatic scaling and cost efficiency, paying only for compute used during job execution. Which Databricks compute option is appropriate for this workload?

- **A.** A single-node compute cluster configured without autoscaling.
- ✅ **B.** A job compute cluster triggered by a scheduled workflow.
- **C.** A Databricks SQL warehouse configured for serverless execution.
- **D.** An all-purpose compute cluster configured with autoscaling.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A job compute cluster triggered by a scheduled workflow.

Jobs compute khởi tạo cho lần chạy theo lịch và kết thúc khi công việc hoàn tất; có thể bật autoscaling để điều chỉnh worker. Cách này phù hợp ETL batch dự đoán được và tránh giữ tài nguyên giữa các lần chạy.

#### Vì sao các phương án khác không phù hợp?

- **An all-purpose compute cluster configured with autoscaling.**: All-purpose phục vụ tương tác và không gắn vòng đời chặt với từng lần chạy job.
- **A Databricks SQL warehouse configured for serverless execution.**: SQL warehouse phù hợp tác vụ SQL; không phải lựa chọn tổng quát cho ETL Spark được hỏi.
- **A single-node compute cluster configured without autoscaling.**: Single-node không autoscale nên không đáp ứng yêu cầu mở rộng tự động.

**Tham khảo:**

- [Classic compute overview](https://docs.databricks.com/aws/en/compute/use-compute)

</details>


---

## Q451 · single choice · — not answered

A data engineer needs to support a Unity Catalog Delta table catalog.schema.sales that is currently registered as an external table. New requirements state: •Automatic file cleanup after a drop is handled by the platform. •Minimal downtime during migration while keeping the same table name, permissions, and history. •Enforced name-based access through Unity Catalog (no path-based access). Which action should the data engineer take to meet the requirements?

- **A.** Run ALTER TABLE catalog.schema.sales SET LOCATION to switch external paths now
- ✅ **B.** Run ALTER TABLE catalog.schema.sales SET MANAGED to convert and meet the goals
- **C.** Run DROP TABLE catalog.schema.sales PURGE to delete files and meet goals
- **D.** Create a new managed table with CTAS and migrate workloads to that table today

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Run ALTER TABLE catalog.schema.sales SET MANAGED to convert and meet the goals

ALTER TABLE ... SET MANAGED chuyển bảng Delta external đủ điều kiện thành managed trong khi giữ danh tính, quyền và lịch sử. Lưu trữ managed sau đó cho phép quản lý vòng đời nền tảng và quản trị theo tên.

#### Vì sao các phương án khác không phù hợp?

- **Run DROP TABLE catalog.schema.sales PURGE to delete files and meet goals**: Xóa bảng không giữ tính sẵn sàng, quyền hay lịch sử như một quá trình chuyển đổi.
- **Run ALTER TABLE catalog.schema.sales SET LOCATION to switch external paths now**: SET LOCATION thay đường dẫn nhưng không chuyển quyền quản lý vòng đời external.
- **Create a new managed table with CTAS and migrate workloads to that table today**: CTAS tạo bảng khác và không tự giữ danh tính, lịch sử gốc.

**Tham khảo:**

- [Convert external tables to managed](https://docs.databricks.com/aws/en/tables/convert-to-managed)

**Cần xem lại:** SET MANAGED không tự thỏa yêu cầu tuyệt đối cấm truy cập theo đường dẫn. Cách xử lý: Sửa yêu cầu thành ưu tiên truy cập bằng tên thay vì cấm tuyệt đối, hoặc bổ sung bước kiểm soát quyền/loại bỏ đường truy cập cũ và xác minh trước khi khẳng định đáp ứng.

</details>


---

## Q452 · single choice · — not answered

A data engineer is building a Silver layer pipeline that should only execute after the Bronze layer table has been successfully updated with new records. Which trigger type in Databricks Jobs is specifically designed to orchestrate this dependency by reacting to changes in the upstream Unity Catalog table?

- **A.** Scheduled trigger
- **B.** Continuous trigger
- ✅ **C.** Table update trigger
- **D.** File arrival trigger

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Table update trigger

Table update trigger theo dõi thay đổi đã ghi vào bảng Unity Catalog và kích hoạt job Silver khi có dữ liệu mới. Nó liên kết việc khởi chạy với trạng thái bảng thay vì ước lượng thời gian.

#### Vì sao các phương án khác không phù hợp?

- **File arrival trigger**: File arrival theo dõi tệp trong vị trí lưu trữ, không trực tiếp theo dõi giao dịch bảng Bronze.
- **Scheduled trigger**: Schedule kích hoạt theo đồng hồ dù Bronze chưa cập nhật thành công.
- **Continuous trigger**: Continuous giữ job chạy lặp lại, không chỉ kích hoạt bởi thay đổi bảng.

**Tham khảo:**

- [Trigger jobs when source tables are updated](https://docs.databricks.com/aws/en/jobs/trigger-table-update)

</details>


---

## Q453 · single choice · — not answered

A pipeline uses COPY INTO to ingest CSV files from cloud object storage into a Unity Catalog Delta table. Some files are occasionally re-uploaded with corrections using the same filename. The engineer needs the corrected data ingested as soon as it occurs. What should the engineer do?

- **A.** Overwrite the target Delta table on each run
- **B.** Reload all files from the source path on each run
- ✅ **C.** Load corrections as new files and apply updates to the target table
- **D.** Recreate the target table before each run

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Load corrections as new files and apply updates to the target table

Phát hành bản sửa thành tệp mới, nạp rồi áp dụng cập nhật theo khóa bằng MERGE. COPY INTO theo dõi tệp đã nạp nên dùng lại tên không phải chiến lược truyền sửa đổi đáng tin cậy.

#### Vì sao các phương án khác không phù hợp?

- **Reload all files from the source path on each run**: Nạp lại mọi tệp lãng phí và có thể trùng bản ghi nếu thiếu đối soát.
- **Recreate the target table before each run**: Tạo lại đích bỏ trạng thái và cần nạp toàn bộ.
- **Overwrite the target Delta table on each run**: Ghi đè toàn bảng không cần thiết và có nguy cơ mất lịch sử/dữ liệu hợp lệ.

**Tham khảo:**

- [COPY INTO](https://docs.databricks.com/aws/en/sql/language-manual/delta-copy-into)
- [Upsert into a Delta Lake table using merge](https://docs.databricks.com/aws/en/delta/merge)

</details>


---

## Q454 · single choice · — not answered

A developer is building a data pipeline that processes records from a bronze table into a silver table. The bronze table, bronze_events, contains duplicate records due to at-least-once delivery guarantees from the upstream ingestion system. The developer writes the following PySpark code to prepare the data: `deduped_df = df.dropDuplicates() deduped_df.summary("count", "mean", "stddev").show() from pyspark.sql.functions import approx_count_distinct deduped_df.select(approx_count_distinct("user_id")).show()`

The developer notices that after running dropDuplicates() without arguments, some rows that differ only in the event_timestamp column remain. The developer wants to de-duplicate based only on user_id and event_type, keeping one row per unique combination of these two columns. 

Which code change achieves this deduplication requirement?

- **A.** Replace df.dropDuplicates() with df.groupBy("user_id", "event_type").count()
- ✅ **B.** Replace df.dropDuplicates() with df.dropDuplicates(["user_id", "event_type"])
- **C.** Replace df.dropDuplicates() with df.distinct().select("user_id", "event_type")
- **D.** Replace df.dropDuplicates() with df.drop("event_timestamp").dropDuplicates()

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Replace df.dropDuplicates() with df.dropDuplicates(["user_id", "event_type"])

dropDuplicates với subset hai cột chỉ so user_id và event_type, giữ một hàng đại diện đầy đủ cho mỗi cặp dù timestamp khác nhau. Nó không bảo đảm chọn timestamp mới nhất.

#### Vì sao các phương án khác không phù hợp?

- **Replace df.dropDuplicates() with df.groupBy("user_id", "event_type").count()**: Nhóm và đếm thay hàng gốc bằng số đếm aggregate.
- **Replace df.dropDuplicates() with df.distinct().select("user_id", "event_type")**: distinct so mọi cột trước; chọn hai cột sau đó vẫn có thể còn cặp khóa lặp.
- **Replace df.dropDuplicates() with df.drop("event_timestamp").dropDuplicates()**: Bỏ timestamp làm đổi schema đầu ra và vẫn so mọi cột còn lại.

**Tham khảo:**

- [DataFrame.dropDuplicates](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.dropDuplicates.html)

</details>


---

## Q455 · single choice · — not answered

A data engineer ingests semi-structured JSON logs into a Delta table using Auto Loader with schema evolution enabled. A new string field userAgent appears in the JSON. What happens to the new userAgent field?

- ✅ **A.** The new userAgent field is added as a new nullable column in the Delta table, populated for new data.
- **B.** The new userAgent field is silently ignored, and its data is dropped for all new files.
- **C.** Ingestion fails with a schema-mismatch error until the table is altered.
- **D.** All existing data is backfilled with a default value for userAgent and made non-nullable.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The new userAgent field is added as a new nullable column in the Delta table, populated for new data.

Khi schema đầu đọc và đầu ghi Delta đều được phép tiến hóa, userAgent trở thành cột nullable; các hàng cũ có NULL và dữ liệu mới điền giá trị khi có. Với chế độ addNewColumns thông thường, Auto Loader cập nhật schema rồi dừng để khởi động lại trước khi tiếp tục.

#### Vì sao các phương án khác không phù hợp?

- **All existing data is backfilled with a default value for userAgent and made non-nullable.**: Thêm cột không tự backfill giá trị mặc định hoặc đặt NOT NULL.
- **Ingestion fails with a schema-mismatch error until the table is altered.**: Có thể dừng để restart nhưng không nhất thiết phải ALTER TABLE thủ công khi đã cấu hình evolution đầu ghi.
- **The new userAgent field is silently ignored, and its data is dropped for all new files.**: Bỏ trường không phải hành vi của chế độ thêm cột đã cấu hình.

**Tham khảo:**

- [Configure schema inference and evolution in Auto Loader](https://learn.microsoft.com/en-us/azure/databricks/ingestion/auto-loader/schema)
- [Schema evolution in Databricks](https://docs.databricks.com/aws/en/data-engineering/schema-evolution)

**Cần xem lại:** Chỉ bật schema evolution Auto Loader chưa bảo đảm cột mới được thêm ngay vào bảng Delta; addNewColumns có thể dừng luồng để khởi động lại. Cách xử lý: Nêu rõ Delta write bật mergeSchema/schema evolution và hỏi kết quả sau khi Auto Loader cập nhật schema rồi khởi động lại thành công.

</details>


---

## Q456 · single choice · — not answered

A data engineering team is building a new data transformation notebook. During development, they need fast testing, quick code changes, and easy debugging. Later, the notebook will run nightly as a scheduled job without human intervention. They want to optimize for development speed. Which compute should they use during development?

- **A.** Use SQL warehouses.
- **B.** Use classic job compute.
- ✅ **C.** Use interactive compute.
- **D.** Use instance pools.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use interactive compute.

Interactive compute giữ notebook sẵn cho các vòng sửa, chạy từng ô và gỡ lỗi nhanh. Khi chuyển sang vận hành theo lịch có thể chọn compute cho job riêng.

#### Vì sao các phương án khác không phù hợp?

- **Use instance pools.**: Instance pool cung cấp máy sẵn để giảm thời gian khởi tạo; bản thân pool không thực thi notebook.
- **Use classic job compute.**: Classic jobs compute gắn với lần chạy tự động và có chi phí khởi tạo giữa các lần thử.
- **Use SQL warehouses.**: SQL warehouse phục vụ SQL, không cung cấp môi trường notebook biến đổi tổng quát như compute tương tác.

**Tham khảo:**

- [Classic compute overview](https://docs.databricks.com/aws/en/compute/use-compute)

</details>


---

## Q457 · single choice · — not answered

A data engineer investigates a slow stage in the Databricks Spark UI. The engineer scrolls down to the Summary Metrics section for task durations, and they observe for that stage: •25th percentile duration: 40 seconds •Median duration: 45 seconds •75th percentile duration: 50 seconds •Max duration: 80 seconds What is the interpretation of these metrics?

- **A.** The stage is healthy.
- **B.** The cluster is under-provisioned.
- ✅ **C.** The stage likely suffers from data skew.
- **D.** There is a GC issue.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The stage likely suffers from data skew.

Thời gian lớn nhất 80 giây cao hơn phân vị 75 là 50 giây tới 60%, vượt ngưỡng gợi ý skew trong tài liệu. Cần kiểm tra partition không đều hay khóa lệch.

#### Vì sao các phương án khác không phù hợp?

- **There is a GC issue.**: Phân vị thời gian task tự nó không chứng minh vấn đề GC.
- **The stage is healthy.**: Đuôi thời gian dài gợi ý mất cân bằng thay vì thời lượng task đều khỏe.
- **The cluster is under-provisioned.**: Một giá trị tối đa chậm tương đối không chứng minh thiếu tài nguyên toàn cụm.

**Tham khảo:**

- [Skew and spill](https://docs.databricks.com/aws/en/optimizations/spark-ui-guide/long-spark-stage-page)

</details>


---

## Q458 · single choice · — not answered

A data engineer is designing a bronze-to-silver pipeline on the Databricks Data Intelligence Platform. The source system sends daily CSV files, and over time, new optional columns are added. The data engineer wants a storage format and table feature that together ensure the following: •The table prevents writes that do not conform to the defined schema. •The table can evolve its schema to include new optional columns without having to manually recreate the table. •Previous versions of the table can be queried later for debugging and auditing. Which solution fulfills the requirements?

- **A.** Use an external table with Auto Loader schema inference for CSV files.
- ✅ **B.** Use a Delta table with its native capabilities.
- **C.** Use a Delta table with schema enforcement and recreate the table whenever new columns are added.
- **D.** Use a Parquet table with Spark's default schema inference and rely on re-running the job when the schema changes.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a Delta table with its native capabilities.

Delta Lake kiểm tra schema khi ghi, hỗ trợ thêm cột khi bật schema evolution và lưu phiên bản để time travel. Việc tiến hóa phải được cấu hình và truy vấn quá khứ chỉ còn khả dụng trong thời hạn giữ log cùng tệp dữ liệu.

#### Vì sao các phương án khác không phù hợp?

- **Use a Parquet table with Spark's default schema inference and rely on re-running the job when the schema changes.**: Parquet với suy luận schema không cung cấp nhật ký giao dịch và time travel của Delta.
- **Use an external table with Auto Loader schema inference for CSV files.**: Auto Loader xử lý schema đầu vào; chỉ định external table không đảm bảo định dạng Delta và lịch sử phiên bản.
- **Use a Delta table with schema enforcement and recreate the table whenever new columns are added.**: Tạo lại bảng khi thêm cột bỏ qua schema evolution và có thể làm mất lịch sử.

**Tham khảo:**

- [Schema evolution in Databricks](https://docs.databricks.com/aws/en/data-engineering/schema-evolution)
- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

</details>


---

## Q459 · single choice · — not answered

A data engineering team needs to incrementally ingest customer transactions from a SaaS app into Data Intelligence Platform with: 

- Built-in change data capture (including updates and deletes) 
- Automatic schema evolution 
- Serverless execution with retries and minimal maintenance 
- OAuth support and basic monitoring 

Which solution meets all of these requirements?

- **A.** Schedule batch jobs per region that call SaaS REST APIs and write directly to silver tables with custom CDC and schema evolution, and use system tables for ad hoc basic monitoring.
- ✅ **B.** Use a Lakeflow Connect managed connector for the SaaS app with built-in CDC, schema evolution, OAuth, and serverless compute with retries, then process downstream with Lakeflow Spark Declarative Pipelines.
- **C.** Use Auto Loader on exported SaaS files and an SDP that calls the SaaS APIs, handling CDC, schema changes, OAuth, and retries in your own code.
- **D.** Use a Lakeflow Connect standard connector, implement MERGE-based CDC, schema evolution, and retries in workflows, and set up a dedicated monitoring dashboard.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use a Lakeflow Connect managed connector for the SaaS app with built-in CDC, schema evolution, OAuth, and serverless compute with retries, then process downstream with Lakeflow Spark Declarative Pipelines.

Managed connector Lakeflow Connect được hỗ trợ cung cấp nạp tăng dần, xử lý schema, xác thực, retry và giám sát có quản lý. Pipeline khai báo phía sau có thể xử lý bảng đã nạp.

#### Vì sao các phương án khác không phù hợp?

- **Use Auto Loader on exported SaaS files and an SDP that calls the SaaS APIs, handling CDC, schema changes, OAuth, and retries in your own code.**: Tự gọi API SaaS đòi hỏi tự duy trì CDC, xác thực và retry.
- **Schedule batch jobs per region that call SaaS REST APIs and write directly to silver tables with custom CDC and schema evolution, and use system tables for ad hoc basic monitoring.**: Job batch vùng tự viết thêm công bảo trì thay vì cung cấp tính năng managed.
- **Use a Lakeflow Connect standard connector, implement MERGE-based CDC, schema evolution, and retries in workflows, and set up a dedicated monitoring dashboard.**: Standard connector cộng workflow tự viết vẫn để nhóm tự xử lý CDC và retry.

**Tham khảo:**

- [Lakeflow Connect connector concepts](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect)

**Cần xem lại:** Không thể xác minh managed connector cho ứng dụng chưa xác định đáp ứng đầy đủ CDC gồm deletes, evolution và OAuth. Cách xử lý: Nêu tên ứng dụng SaaS và connector có tài liệu hỗ trợ toàn bộ yêu cầu, hoặc thêm giả định rõ rằng connector đó hỗ trợ updates/deletes, schema evolution và OAuth.

</details>


---

## Q460 · single choice · — not answered

A data engineer triggers a scheduled job but finds that the new run was not executed. The run history shows the run was skipped with a concurrency-related queue message. Which configuration should the engineer investigate?

- **A.** The cluster spot-instance availability in the cloud provider
- ✅ **B.** The job-level max_concurrent_runs setting and whether queueing is enabled
- **C.** The task-level timeout_seconds configuration
- **D.** The SQL warehouse permissions for the task

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The job-level max_concurrent_runs setting and whether queueing is enabled

Kiểm tra max_concurrent_runs và queueing của job vì chúng quyết định lần chạy chồng lấp chờ hay bị bỏ qua. Thông báo concurrency chỉ trực tiếp tầng lập lịch này.

#### Vì sao các phương án khác không phù hợp?

- **The SQL warehouse permissions for the task**: Quyền warehouse gây lỗi xác thực, không phải bỏ qua do concurrency đã báo.
- **The task-level timeout_seconds configuration**: Timeout task điều khiển thời lượng task chạy, không tiếp nhận job chồng lấp.
- **The cluster spot-instance availability in the cloud provider**: Khả năng cấp spot liên quan cấp compute, không phải giới hạn concurrency đã nêu.

**Tham khảo:**

- [Configure Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/configure-job)

</details>


---

## Q461 · single choice · — not answered

A data engineering team needs to integrate two data sources into Databricks: 

- Clickstream Events: Ingesting 5,000 events per second from an Apache Kafka topic. 
- Customer Master Data: Syncing only changed records every 4 hours from a Snowflake database. The solution must meet two key requirements: 
- Process the streaming clickstream data with a latency of under 30 seconds. 
- Prevent the reprocessing of customer master data that has not changed. 

Which data ingestion approach meets these requirements?

- **A.** Use Structured Streaming for Kafka and a Lakeflow Connect standard connector with full refresh for Snowflake.
- **B.** Use a non-incremental Snowflake connector with polling and fetch all data every 4 hours with MERGE operations.
- ✅ **C.** Use Structured Streaming for Kafka and Lakeflow Connect managed connector with incremental mode for Snowflake.
- **D.** Use spark.readStream() with Kafka and query Snowflake hourly with a time-based filter.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Structured Streaming for Kafka and Lakeflow Connect managed connector with incremental mode for Snowflake.

Structured Streaming hỗ trợ nạp Kafka độ trễ thấp. Snowflake có thể dùng query-based ingestion theo cursor qua foreign catalog liên kết được hỗ trợ, duy trì tiến độ bền thay vì full refresh. Cần cấu hình lịch bốn giờ và đo độ trễ Kafka; chế độ SCD có thể đọc lại cửa sổ lookback nhỏ rồi đối soát hàng không đổi theo tính idempotent.

#### Vì sao các phương án khác không phù hợp?

- **Use Structured Streaming for Kafka and a Lakeflow Connect standard connector with full refresh for Snowflake.**: Full refresh đọc lại bản ghi master không đổi.
- **Use spark.readStream() with Kafka and query Snowflake hourly with a time-based filter.**: Thăm dò hàng giờ khác yêu cầu bốn giờ và lọc thời gian tự viết cần cơ chế cập nhật/xóa đáng tin cậy.
- **Use a non-incremental Snowflake connector with polling and fetch all data every 4 hours with MERGE operations.**: Lấy mọi hàng vẫn xử lý lại dữ liệu không đổi dù MERGE tránh ghi trùng.

**Tham khảo:**

- [Lakeflow Connect connector concepts](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect)
- [SparkSession.readStream](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.SparkSession.readStream.html)

[Query-based connectors — Databricks](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/query-based-overview)

</details>


---

## Q462 · single choice · — not answered

A Data Engineer is designing Bronze layer in Databricks Medallion Architecture. The raw data is collected from multiple sources (Clickstream in JSON, Transactions in CSV). The task is to design the Bronze layer of the Medallion Architecture to ingest and store this raw data for further processing. Which operation applies to the Bronze layer?

- **A.** Apply complex business logic to enrich raw data with customer segmentation labels.
- **B.** Aggregate and transform source data to calculate daily sales performance metrics.
- ✅ **C.** Ingest raw data without transformations, preserving original schemas, and store in Delta format.
- **D.** Clean and standardize raw data by removing null values and enforcing schemas.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Ingest raw data without transformations, preserving original schemas, and store in Delta format.

Bronze nạp và giữ dữ liệu nguồn thô với ít biến đổi, thường ở Delta. Điều này giữ nguồn có thể xử lý lại cho các tầng sau.

#### Vì sao các phương án khác không phù hợp?

- **Clean and standardize raw data by removing null values and enforcing schemas.**: Làm sạch và chuẩn hóa thường thuộc Silver.
- **Apply complex business logic to enrich raw data with customer segmentation labels.**: Phân khúc khách hàng là làm giàu nghiệp vụ vượt quá nạp thô.
- **Aggregate and transform source data to calculate daily sales performance metrics.**: Tổng hợp doanh số ngày là đầu ra Gold cho nghiệp vụ.

**Tham khảo:**

- [What is the medallion lakehouse architecture?](https://docs.databricks.com/gcp/en/lakehouse/medallion)

</details>


---

## Q463 · single choice · — not answered

What is the primary function of the Silver layer in the Databricks medallion architecture?

- ✅ **A.** Validate, clean, and deduplicate data for further processing
- **B.** Ingest raw data in its original state
- **C.** Aggregate and enrich data for business analytics
- **D.** Store historical data solely for auditing purposes

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Validate, clean, and deduplicate data for further processing

Silver kiểm tra, làm sạch và khử trùng dữ liệu Bronze thành bản ghi tin cậy cho xử lý tiếp. Gold sau đó thường cấp tổng hợp phục vụ nghiệp vụ.

#### Vì sao các phương án khác không phù hợp?

- **Store historical data solely for auditing purposes**: Silver không chỉ dành cho lưu trữ kiểm toán.
- **Aggregate and enrich data for business analytics**: Tổng hợp phân tích nghiệp vụ chủ yếu là vai trò Gold.
- **Ingest raw data in its original state**: Nạp thô nguyên trạng là vai trò Bronze.

**Tham khảo:**

- [What is the medallion lakehouse architecture?](https://docs.databricks.com/gcp/en/lakehouse/medallion)

</details>


---

## Q464 · single choice · — not answered

A data engineer needs to combine sales data from an on-premises PostgreSQL database with customer data in Azure Synapse for a comprehensive report. The goal is to avoid data duplication and ensure up-to-date information. How should the data engineer achieve this using Databricks?

- **A.** Develop custom ETL pipelines to ingest data into Databricks
- **B.** Manually synchronize data from both sources into a single database
- ✅ **C.** Use Lakehouse Federation to query both data sources directly
- **D.** Export data from both sources to CSV files and upload them to Databricks

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Lakehouse Federation to query both data sources directly

Lakehouse Federation truy vấn trực tiếp các nguồn PostgreSQL và Azure Synapse được hỗ trợ qua connection và foreign catalog có quản trị. Cách này tránh duy trì bản sao nạp cho báo cáo.

#### Vì sao các phương án khác không phù hợp?

- **Export data from both sources to CSV files and upload them to Databricks**: Xuất CSV sao chép dữ liệu và cũ dần giữa các lần xuất.
- **Manually synchronize data from both sources into a single database**: Đồng bộ thủ công sao chép dữ liệu và thêm độ trễ vận hành.
- **Develop custom ETL pipelines to ingest data into Databricks**: Nạp tùy chỉnh tạo bản sao thay vì truy vấn tại nguồn.

**Tham khảo:**

- [Lakehouse Federation](https://docs.databricks.com/aws/en/query-federation/)

</details>


---

## Q465 · single choice · — not answered

A data engineer has inherited a Databricks pipeline from a previous team. The pipeline is missing its SLAs, and an initial investigation has identified memory spills in Spark. These increased runtimes are also driving up costs. The data engineer needs to reduce the runtime without significantly increasing costs. What should the data engineer do first to address this issue?

- **A.** Enable autoscaling in the cluster to match the requirements
- **B.** Ensure the cluster uses memory optimized node types.
- ✅ **C.** Tweak the "spark.sql.shuffle.partitions" configuration.
- **D.** Use a photon enabled execution engine.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Tweak the "spark.sql.shuffle.partitions" configuration.

Trước hết kiểm tra và điều chỉnh kích thước partition shuffle để mỗi task xử lý lượng dữ liệu vừa sức. Giảm partition quá lớn có thể giảm spill mà chưa phải tăng chi phí compute.

#### Vì sao các phương án khác không phù hợp?

- **Enable autoscaling in the cluster to match the requirements**: Autoscaling thêm tài nguyên nhưng có thể không giảm partition quá lớn hay chi phí.
- **Use a photon enabled execution engine.**: Photon có thể giúp truy vấn được hỗ trợ nhưng không trực tiếp chẩn đoán spill do partition.
- **Ensure the cluster uses memory optimized node types.**: Node tối ưu bộ nhớ có thể giúp nhưng đổi chi phí hạ tầng trước khi thử điều chỉnh partition.

**Tham khảo:**

- [Spark memory issues](https://docs.databricks.com/aws/en/optimizations/spark-ui-guide/spark-memory-issues)
- [Adaptive query execution](https://docs.databricks.com/aws/en/optimizations/aqe)

</details>


---

## Q466 · single choice · — not answered

What is the structure of an Asset Bundle?

- **A.** A Docker image containing runtime environments and the source code of the assets
- **B.** A single plain text file enumerating the names of assets to be migrated to a new workspace
- **C.** A compressed archive (ZIP) that solely contains workspace assets without any accompanying metadata
- ✅ **D.** A YAML configuration file that specifies the artifacts, resources, and configurations for the project

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A YAML configuration file that specifies the artifacts, resources, and configurations for the project

Bundle được định nghĩa bằng cấu hình YAML, bắt đầu từ databricks.yml, chỉ định tài nguyên, artifact và thiết lập triển khai dự án. Nó có thể kèm mã nguồn và tệp cấu hình bổ sung.

#### Vì sao các phương án khác không phù hợp?

- **A Docker image containing runtime environments and the source code of the assets**: Bundle không mặc nhiên là Docker image.
- **A compressed archive (ZIP) that solely contains workspace assets without any accompanying metadata**: Siêu dữ liệu cấu hình là thiết yếu, không bị bỏ đi.
- **A single plain text file enumerating the names of assets to be migrated to a new workspace**: Nó định nghĩa tài nguyên triển khai và thiết lập, không chỉ danh sách tên.

**Tham khảo:**

- [Declarative Automation Bundles configuration](https://docs.databricks.com/aws/en/dev-tools/bundles/settings)

</details>


---

## Q467 · single choice · — not answered

A data engineer is maintaining an ETL pipeline code with a GitHub repository linked to their Databricks account. The data engineer wants to deploy the ETL pipeline to production as a databricks workflow. Which approach should the data engineer use?

- ✅ **A.** Databricks Asset Bundles (DAB) + GitHub Integration
- **B.** Manually create and manage the workflow in UI
- **C.** Maintain workflow_config.json and deploy it using Terraform
- **D.** Maintain workflow_config.json and deploy it using Databricks CLI

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Databricks Asset Bundles (DAB) + GitHub Integration

Asset Bundles kết hợp GitHub cung cấp định nghĩa workflow có phiên bản và triển khai tự động. Bundle giữ mã, tài nguyên và thiết lập môi trường cùng nhau.

#### Vì sao các phương án khác không phù hợp?

- **Maintain workflow_config.json and deploy it using Databricks CLI**: Triển khai JSON bằng CLI có thể dùng nhưng cần tự quản lý cấu hình nhiều hơn.
- **Maintain workflow_config.json and deploy it using Terraform**: Terraform cần cấu hình resource, không chỉ triển khai workflow_config.json tùy ý.
- **Manually create and manage the workflow in UI**: Tạo thủ công qua giao diện không cung cấp triển khai tái lập dựa trên Git.

**Tham khảo:**

- [Declarative Automation Bundles configuration](https://docs.databricks.com/aws/en/dev-tools/bundles/settings)
- [GitHub Actions](https://docs.databricks.com/aws/en/dev-tools/ci-cd/github)

</details>


---

## Q468 · single choice · — not answered

A data engineer wants to reduce costs and optimize cloud spending. The data engineer has decided to use Databricks Serverless for lowering cloud costs while maintaining existing SLAs. What is the first step in migrating to Databricks Serverless?

- **A.** A frequently running and efficient Scala-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog
- **B.** Legacy Ingestion pipelines that include ingestion from sources API’s, files, JDBC/ODBC connections
- **C.** Low frequency BI Dashboarding and Adhoc SQL Analytics
- ✅ **D.** A frequently running and efficient Python-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** A frequently running and efficient Python-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog

Pipeline biến đổi Python tương thích là thí điểm ít rủi ro hợp lý khi chuyển sang serverless. Cần kiểm tra chi phí đại diện và SLA trước khi mở rộng; chạy thường xuyên tự nó không bảo đảm tiết kiệm.

#### Vì sao các phương án khác không phù hợp?

- **Legacy Ingestion pipelines that include ingestion from sources API’s, files, JDBC/ODBC connections**: Nạp dữ liệu cũ có thể vướng kết nối và phụ thuộc cần sửa nhiều hơn.
- **A frequently running and efficient Scala-based data transformation pipeline compatible with the latest Databricks runtime and Unity Catalog**: Notebook Scala không được hỗ trợ trong hướng di chuyển notebook serverless này.
- **Low frequency BI Dashboarding and Adhoc SQL Analytics**: Dashboard ít chạy thuộc bài toán di chuyển SQL warehouse thay vì thí điểm biến đổi tương thích này.

**Tham khảo:**

- [Migrate classic compute to serverless](https://docs.databricks.com/aws/en/compute/serverless/migration)

</details>


---

## Q469 · single choice · — not answered

A data engineering project involves processing large batches of data on a daily schedule using ETL. The jobs are resource-intensive and vary in size, requiring a scalable, cost-efficient compute solution that can automatically scale based on the workload. Which compute approach will satisfy the needs described?

- **A.** Databricks SQL Serverless
- **B.** Dedicated Cluster
- ✅ **C.** Job Cluster
- **D.** All-Purpose Cluster

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Job Cluster

Job cluster được tạo cho ETL tự động và có thể cấu hình tự mở rộng theo kích thước tải. Vòng đời theo tác vụ tránh giữ cụm tương tác chạy giữa các lần chạy hằng ngày.

#### Vì sao các phương án khác không phù hợp?

- **Dedicated Cluster**: Dedicated mô tả chế độ truy cập, không tự cung cấp vòng đời theo tác vụ hay chính sách tự mở rộng.
- **All-Purpose Cluster**: All-purpose hướng tới tương tác và ít phù hợp hơn với ETL sản xuất định kỳ.
- **Databricks SQL Serverless**: SQL serverless phù hợp với tác vụ SQL, không thay thế tổng quát cho mã ETL chưa xác định.

**Tham khảo:**

- [Configure compute for jobs](https://docs.databricks.com/aws/en/jobs/compute)

</details>


---

## Q470 · single choice · — not answered

A data engineer is configuring Delta Sharing for a multi-team project where teams from different departments will need to access shared data. The data engineer has successfully created a Unity Catalog metastore and is now setting up the Delta Share. The goal is to ensure that internal teams can access the shared data with full permissions, while external partners can only read the data. Which action should the Data Engineer take to configure the sharing correctly?

- **A.** Create a Delta Share, set up a secure access URL for internal teams and external partners, and distribute the URL to provide them access to the shared data.
- **B.** Grant READ permissions to external partners and READ/WRITE permissions to internal teams through the Delta Share.
- ✅ **C.** Assign READ permissions to external partners through the Delta Share and READ/WRITE permissions to internal teams, and ensure the correct tables and views are shared.
- **D.** Create a Delta Share, add the internal team's tables and views, and assign READ/WRITE permissions to both external partners and internal teams.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Assign READ permissions to external partners through the Delta Share and READ/WRITE permissions to internal teams, and ensure the correct tables and views are shared.

Dùng share chỉ đọc cho người nhận ngoài và quyền Unity Catalog trực tiếp cho nhóm nội bộ cần ghi. Phương án được chọn chỉ hợp lý nếu quyền READ/WRITE nội bộ cấp trên bảng nguồn bên ngoài share.

#### Vì sao các phương án khác không phù hợp?

- **Create a Delta Share, set up a secure access URL for internal teams and external partners, and distribute the URL to provide them access to the shared data.**: Phân phối URL không thiết lập quyền ghi nội bộ riêng hay quản trị người nhận phù hợp.
- **Create a Delta Share, add the internal team's tables and views, and assign READ/WRITE permissions to both external partners and internal teams.**: Delta Sharing không cấp quyền ghi bảng của nhà cung cấp cho người nhận.
- **Grant READ permissions to external partners and READ/WRITE permissions to internal teams through the Delta Share.**: Không thể cấp quyền đọc/ghi cho người nhận nội bộ thông qua chính share.

**Tham khảo:**

- [What is OpenSharing?](https://docs.databricks.com/aws/en/opensharing/)
- [Manage privileges and ownership](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges/ownership)

</details>


---

## Q471 · single choice · — not answered

A data engineer manages multiple external tables linked to various data sources. The data engineer wants to manage these external tables efficiently and ensure that only the necessary permissions are granted to users for accessing specific external tables. How should the data engineer manage access to these external tables?

- **A.** Create a single user role with full access to all external tables and assign it to all users.
- **B.** Set up Azure Blob Storage permissions at the container level, allowing access to all external tables.
- ✅ **C.** Use Unity Catalog to manage access controls and permissions for each external table individually.
- **D.** Grant permissions on the Databricks workspace level, which will automatically apply to all external tables.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Unity Catalog to manage access controls and permissions for each external table individually.

Cấp quyền tối thiểu trên từng bảng ngoài qua Unity Catalog. Quyền ở mức bảng cho người dùng truy vấn bảng được duyệt mà không cần quyền trực tiếp rộng trên mọi đối tượng lưu trữ.

#### Vì sao các phương án khác không phù hợp?

- **Set up Azure Blob Storage permissions at the container level, allowing access to all external tables.**: Quyền lưu trữ toàn container rộng hơn quyền trên các bảng được chọn.
- **Create a single user role with full access to all external tables and assign it to all users.**: Vai trò toàn quyền cho mọi người vi phạm nguyên tắc quyền tối thiểu.
- **Grant permissions on the Databricks workspace level, which will automatically apply to all external tables.**: Truy cập workspace không tự động cấp quyền trên mọi bảng Unity Catalog.

**Tham khảo:**

- [Manage privileges and ownership](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges/ownership)

</details>


---

## Q472 · single choice · — not answered

A data engineering team wants to validate a new ingestion pipeline locally while ensuring large aggregations run in serverless compute in their Databricks workspace. They plan to use Databricks Connect and have the option to attach to either a shared cluster or serverless. Which workspace requirement should be confirmed first to avoid connection failures?

- **A.** Verify that only assigned access mode clusters are used because serverless is not supported by Databricks Connect.
- **B.** Verify that the workspace has Unity Catalog disabled and the Databricks Connect version is less than the serverless Runtime version.
- ✅ **C.** Verify that the workspace has Unity Catalog enabled and that the Databricks Connect version supports serverless for the target Runtime release.
- **D.** Verify that the local Spark version equals the serverless Spark version to satisfy Spark Connect parity.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Verify that the workspace has Unity Catalog enabled and that the Databricks Connect version supports serverless for the target Runtime release.

Xác nhận Unity Catalog được bật và phiên bản Databricks Connect tương thích với môi trường serverless đích. Connect chạy công việc DataFrame được hỗ trợ từ xa nên cần kiểm tra hỗ trợ serverless và tương thích gói trước khi chạy.

#### Vì sao các phương án khác không phù hợp?

- **Verify that the workspace has Unity Catalog disabled and the Databricks Connect version is less than the serverless Runtime version.**: Phải bật Unity Catalog; một phiên bản Connect cũ bất kỳ chưa đủ.
- **Verify that only assigned access mode clusters are used because serverless is not supported by Databricks Connect.**: Databricks Connect hỗ trợ môi trường serverless tương thích nên không bắt buộc chỉ dùng cụm assigned.
- **Verify that the local Spark version equals the serverless Spark version to satisfy Spark Connect parity.**: Khớp Spark cục bộ không phải yêu cầu workspace; Connect dùng giao thức máy khách/máy chủ được hỗ trợ.

**Tham khảo:**

- [Databricks Connect usage requirements](https://docs.databricks.com/gcp/en/dev-tools/databricks-connect/requirements)

</details>


---

## Q473 · single choice · — not answered

A data engineer must deliver a trustworthy customer 360 dataset in Databricks for data scientists and BI teams. The engineer plans to join deduplicated customer records with cleaned transaction data, enforce schema and data quality checks, and create a conformed “customer_transactions” view. Later, highly aggregated, domain-specific tables (for weekly spend and executive summaries) will be produced for dashboards. Where should the engineer build the conformed “customer_transactions” dataset, and where should the aggregated, report-ready tables reside?

- **A.** Build “customer_transactions” in Gold and put the aggregated, report-ready tables in Silver.
- **B.** Build “customer_transactions” in Bronze and put the aggregated, report-ready tables in Silver.
- **C.** Build both “customer_transactions” and aggregated, report-ready tables in Silver to keep the model simpler.
- ✅ **D.** Build “customer_transactions” in Silver and put the aggregated, report-ready tables in Gold.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Build “customer_transactions” in Silver and put the aggregated, report-ready tables in Gold.

Dataset customer_transactions đã chuẩn hóa và làm sạch thuộc Silver; tổng hợp nghiệp vụ sẵn cho báo cáo thuộc Gold. Cách này tách bản ghi kiểm chứng dùng lại khỏi tóm tắt chuyên biệt.

#### Vì sao các phương án khác không phù hợp?

- **Build both “customer_transactions” and aggregated, report-ready tables in Silver to keep the model simpler.**: Đặt tổng hợp báo cáo ở Silver làm mờ vai trò phục vụ của Gold.
- **Build “customer_transactions” in Bronze and put the aggregated, report-ready tables in Silver.**: Bronze giữ đầu vào thô thay vì kết quả nối sạch đã chuẩn hóa.
- **Build “customer_transactions” in Gold and put the aggregated, report-ready tables in Silver.**: Lựa chọn đảo tầng dữ liệu đã kiểm chứng và tầng tổng hợp nghiệp vụ.

**Tham khảo:**

- [What is the medallion lakehouse architecture?](https://docs.databricks.com/gcp/en/lakehouse/medallion)

</details>


---

## Q474 · single choice · — not answered

A data engineer requires rapid iteration on pipelines while maintaining reliable rollbacks after bad ingests, ensuring audit trails for regulatory compliance, and providing consistent access to a single source of truth for both AI and BI workloads. Which strategy should the data engineer apply to meet the needs?

- **A.** Ephemeral in-memory DataFrames for audit trails and BI distribution.
- ✅ **B.** Delta Lake ACID transactions and time travel, governed by Unity Catalog for consistent access and lineage.
- **C.** Cloud objects storage only, with ad hoc SQL queries for recovery and governance.
- **D.** DBFS CSV storage with manual file versioning and nightly copies for rollback.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Delta Lake ACID transactions and time travel, governed by Unity Catalog for consistent access and lineage.

Giao dịch ACID và time travel Delta cung cấp phiên bản nhất quán và phục hồi trong thời hạn lưu giữ. Unity Catalog thêm kiểm soát truy cập, kiểm toán và lineage tập trung cho AI và BI.

#### Vì sao các phương án khác không phù hợp?

- **DBFS CSV storage with manual file versioning and nightly copies for rollback.**: Tự tạo phiên bản CSV thiếu bảo đảm giao dịch và phục hồi có quản trị tích hợp.
- **Ephemeral in-memory DataFrames for audit trails and BI distribution.**: DataFrame tạm thời không phải bản ghi kiểm toán hay phục hồi bền vững.
- **Cloud objects storage only, with ad hoc SQL queries for recovery and governance.**: Chỉ object storage không cung cấp giao dịch Delta hay quản trị Unity Catalog.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/delta/history)
- [Manage privileges in Unity Catalog](https://docs.databricks.com/gcp/en/data-governance/unity-catalog/manage-privileges/)
- [Lineage in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-lineage)

</details>


---

## Q475 · single choice · — not answered

A data engineer is building a PySpark ingestion pipeline in a local IDE and must execute heavy DataFrame transformations on a remote Databricks cluster for scale while stepping through business logic locally. The workspace uses Unity Catalog and a cluster running Databricks Runtime 15.4 LTS. The engineer also plans to register UDFs. What should the data engineer do to avoid runtime issues during development with Databricks Connect?

- **A.** Use any local Python version as long as the PySpark minor version matches, because the cluster’s Python version is isolated from the client.
- ✅ **B.** Match the local Python minor version to the cluster’s Python minor version when using UDF’s, and use a Databricks Connect package compatible with the cluster’s Runtime version
- **C.** Use serverless, because Databricks Connect does not support assigned or shared clusters.
- **D.** Disable Unity Catalog on the workspace because it conflicts with remote execution through Databricks Connect.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Match the local Python minor version to the cluster’s Python minor version when using UDF’s, and use a Databricks Connect package compatible with the cluster’s Runtime version

Dùng gói Connect tương thích Runtime đích và khớp phiên bản phụ Python để tuần tự hóa UDF. Thực thi từ xa không loại bỏ yêu cầu tương thích client/server.

#### Vì sao các phương án khác không phù hợp?

- **Use any local Python version as long as the PySpark minor version matches, because the cluster’s Python version is isolated from the client.**: Tuần tự hóa UDF cần khớp phiên bản phụ Python, không dùng tùy ý.
- **Use serverless, because Databricks Connect does not support assigned or shared clusters.**: Connect hỗ trợ cụm classic cấu hình phù hợp cũng như serverless được hỗ trợ.
- **Disable Unity Catalog on the workspace because it conflicts with remote execution through Databricks Connect.**: Unity Catalog được hỗ trợ và không cần tắt.

**Tham khảo:**

- [Databricks Connect requirements](https://docs.databricks.com/gcp/en/dev-tools/databricks-connect/requirements)

</details>


---

## Q476 · single choice · — not answered

A data engineer is standardizing repository layouts for multiple teams adopting Databricks Asset Bundles. The engineer wants to ensure every project has a single authoritative configuration file at the repository root that defines the bundle name, targets, workspace settings, permissions, and resource mappings (for jobs and pipelines). What strategy should the data engineer use to meet the goal?

- **A.** Place multiple databricks.yml files under each subfolder (for example, jobs/pipelines/, workspace/) and merge them at deploy time using the include mapping.
- **B.** Place a databricks.yaml at the repository root and optional databricks.yml in subfolders; the CLI prefers .yaml over .yml when both exist.
- ✅ **C.** Place exactly one databricks.yml at the repository root; it is the main configuration file and may reference additional configuration files via the include mapping.
- **D.** Place a databricks.yml in a databricks/hidden folder at the repository root; only hidden locations are valid for bundle configs.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Place exactly one databricks.yml at the repository root; it is the main configuration file and may reference additional configuration files via the include mapping.

Đúng một databricks.yml ở gốc định nghĩa bundle và có thể include tệp cấu hình bổ sung. Nó là cấu hình dự án chính mà CLI yêu cầu.

#### Vì sao các phương án khác không phù hợp?

- **Place multiple databricks.yml files under each subfolder (for example, jobs/pipelines/, workspace/) and merge them at deploy time using the include mapping.**: Bundle cần một databricks.yml gốc thay vì nhiều tệp chính cạnh tranh.
- **Place a databricks.yml in a databricks/hidden folder at the repository root; only hidden locations are valid for bundle configs.**: Cấu hình chính ở gốc dự án, không phải thư mục ẩn bắt buộc.
- **Place a databricks.yaml at the repository root and optional databricks.yml in subfolders; the CLI prefers .yaml over .yml when both exist.**: Tên tệp chính bắt buộc là databricks.yml, không phải ưu tiên databricks.yaml.

**Tham khảo:**

- [Declarative Automation Bundles configuration](https://docs.databricks.com/aws/en/dev-tools/bundles/settings)

</details>


---

## Q477 · single choice · — not answered

A data engineer wants to delegate day-to-day permission management for the schema main marketing to the mkt- admins group, without making them workspace admins. They should be able to grant and revoke privileges for other users on objects within that schema. Which approach aligns with UC’s ownership and privilege model?

- **A.** Grant MANAGE permissions on the metastore to mkt-admins, which allows managing privileges for all schemas and tables globally.
- ✅ **B.** Transfer ownership of the schema main. marketing to mkt-admins; owners can manage privileges on the schema and its contained objects.
- **C.** Make mkt-admins a workspace-level admins group, then SELECT on main.marketing to allow privilege delegation.
- **D.** Grant USE SCHEMA on main.marketing and MODIFY on all tables to mkt-admins, which enables managing grants within the schema.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Transfer ownership of the schema main. marketing to mkt-admins; owners can manage privileges on the schema and its contained objects.

Chuyển quyền sở hữu schema cho mkt-admins cho phép nhóm quản lý quyền trên schema và đối tượng bên trong. Không cần thành viên quản trị workspace cho phạm vi này.

#### Vì sao các phương án khác không phù hợp?

- **Grant MANAGE permissions on the metastore to mkt-admins, which allows managing privileges for all schemas and tables globally.**: MANAGE không phải quyền toàn metastore để ủy quyền toàn cục như mô tả.
- **Make mkt-admins a workspace-level admins group, then SELECT on main.marketing to allow privilege delegation.**: Quản trị workspace rộng quá mức và SELECT không ủy quyền cấp quyền.
- **Grant USE SCHEMA on main.marketing and MODIFY on all tables to mkt-admins, which enables managing grants within the schema.**: Quyền usage và sửa dữ liệu không cho quản lý cấp quyền của người khác.

**Tham khảo:**

- [Manage privileges in Unity Catalog](https://docs.databricks.com/gcp/en/data-governance/unity-catalog/manage-privileges/)
- [Unity Catalog privileges and securable objects](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges/privileges)

</details>


---

## Q478 · single choice · — not answered

A data engineer is decommissioning a sandbox schema in Unity Catalog. Some tables are ephemeral staging outputs that can be safety removed entirely, but a few tables point at shared cloud storage used by downstream jobs outside Databricks. The engineer must avoid deleting any shared files when cleaning up catalog objects. How does Unity Catalog behave when dropping Managed vs External tables?

- **A.** DROP external tables first to delete their files, then DROP managed tables to keep their files for recovery.
- **B.** DROP managed tables that are ephemeral and DROP external tables; files for both remain for 7 days.
- **C.** DROP all tables; Databricks will only remove metadata for both managed and external tables.
- ✅ **D.** DROP managed staging tables to remove data and metadata, and DROP external tables to remove only metadata

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** DROP managed staging tables to remove data and metadata, and DROP external tables to remove only metadata

Xóa bảng managed loại định nghĩa catalog và đưa dữ liệu vào quy trình xóa theo thời hạn giữ. Xóa bảng external chỉ loại siêu dữ liệu, giữ nguyên tệp lưu trữ dùng chung.

#### Vì sao các phương án khác không phù hợp?

- **DROP all tables; Databricks will only remove metadata for both managed and external tables.**: Bảng managed có vòng đời dữ liệu được quản lý nên không phải cả hai chỉ xóa siêu dữ liệu.
- **DROP managed tables that are ephemeral and DROP external tables; files for both remain for 7 days.**: Tệp external tồn tại độc lập với thời hạn xóa cố định bảy ngày.
- **DROP external tables first to delete their files, then DROP managed tables to keep their files for recovery.**: Các hành vi xóa tệp được mô tả bị đảo ngược.

**Tham khảo:**

- [DROP TABLE](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-drop-table)

</details>


---

## Q479 · single choice · — not answered

A data engineer needs to configure an external location and a storage credential so that a new bronze ingestion pipeline can land data in cloud storage governed by Unity Catalog. The engineer has CREATE TABLE permission on schemas but receives a permission error when attempting to create the external location. Which role is required to unblock this setup, the principle of least privilege?

- **A.** Assign the engineer as Metastore Admin because only Metastore Admins can create external locations.
- **B.** Grant ALL PRIVILEGES on the catalog so the engineer can create external locations under its schemas.
- **C.** Promote the engineer to Workspace Admin so they can manage objects and jobs.
- ✅ **D.** Grant CREATE EXTERNAL LOCATION on both the metastore and the referenced storage credential so the engineer can define the external location.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Grant CREATE EXTERNAL LOCATION on both the metastore and the referenced storage credential so the engineer can define the external location.

Cấp CREATE EXTERNAL LOCATION trên metastore và storage credential được tham chiếu. Các quyền theo đối tượng này cho phép thiết lập mà không cần nâng lên quản trị viên rộng.

#### Vì sao các phương án khác không phù hợp?

- **Grant ALL PRIVILEGES on the catalog so the engineer can create external locations under its schemas.**: Quyền catalog không thay cho quyền metastore và credential cần thiết.
- **Promote the engineer to Workspace Admin so they can manage objects and jobs.**: Quản trị workspace rộng hơn cần thiết và không phải cấp quyền tối thiểu.
- **Assign the engineer as Metastore Admin because only Metastore Admins can create external locations.**: Có thể ủy quyền tạo external location; không bắt buộc quản trị metastore.

**Tham khảo:**

- [CREATE EXTERNAL LOCATION](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-location)

</details>


---

## Q480 · single choice · — not answered

A Lakeflow Jobs workflow fails at the last task because of an error in a notebook task. This workflow is scheduled to run daily. The data engineer fixes the notebook and wants to rerun the pipeline. This workflow is very compute- intensive and expensive to run. Which action should the data engineer take in order to minimize downtime and compute cost?

- **A.** Switch to another cluster
- ✅ **B.** Repair run
- **C.** Re-run the entire workflow
- **D.** Restart the cluster

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Repair run

Sau khi sửa notebook, Repair run chạy lại task lỗi và các task phụ thuộc cần thiết, giữ kết quả task trước đã thành công nên tránh chi phí chạy lại toàn bộ.

#### Vì sao các phương án khác không phù hợp?

- **Restart the cluster**: Khởi động lại compute không tự sửa chọn lọc task workflow lỗi.
- **Re-run the entire workflow**: Chạy lại toàn bộ lặp lại các task đắt tiền đã thành công.
- **Switch to another cluster**: Đổi compute không chọn riêng task lỗi và có thể thêm chi phí khởi động.

**Tham khảo:**

- [Repair failed job runs](https://docs.databricks.com/aws/en/jobs/repair-job-failures)

</details>


---

## Q481 · single choice · — not answered

A data engineer is troubleshooting a Lakeflow Spark Declarative Pipelines (SDP) where several rows are dropped by expectations. The product owner requests details on which expectation failed most frequently during the last run and the corresponding affected table. The engineer wants to use Databricks' built-in observability data to answer this without adding new logging code. How should the data engineer troubleshoot SDP to verify the expectation failure?

- **A.** Export notebook run results to HTML and search for the expectations summary in the rendered output to compile the metrics.
- **B.** Increase the cluster's log level to DEBUG and parse the driver's Log4j logs for expectation metrics for the last run.
- **C.** Use the Spark UI's SQL tab to identify failed rows and expectation names from physical query plans.
- ✅ **D.** Query the Lakeflow Spark Declarative Pipelines event log to retrieve expectation metrics and failure details for the pipeline's most recent update.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Query the Lakeflow Spark Declarative Pipelines event log to retrieve expectation metrics and failure details for the pipeline's most recent update.

Lọc event log theo update mới nhất rồi xem metric expectation theo flow hoặc dataset. Số đếm xác định vi phạm thường gặp nhất và bảng liên quan mà không thêm mã logging.

#### Vì sao các phương án khác không phù hợp?

- **Export notebook run results to HTML and search for the expectations summary in the rendered output to compile the metrics.**: HTML notebook không phải nơi lưu có cấu trúc chuẩn cho metric expectation pipeline.
- **Use the Spark UI's SQL tab to identify failed rows and expectation names from physical query plans.**: Physical plan không liệt kê hàng vi phạm và số đếm expectation theo dạng được yêu cầu.
- **Increase the cluster's log level to DEBUG and parse the driver's Log4j logs for expectation metrics for the last run.**: Đổi mức logging lúc này không tái tạo metric có cấu trúc của lượt trước và không cần thiết.

**Tham khảo:**

- [Pipeline observability](https://docs.databricks.com/aws/en/ldp/observability)
- [Pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

</details>


---

## Q482 · single choice · — not answered

A data engineering team needs to ingest historical CSV files from a cloud storage location that already contains 50,000 existing files. They also expect new files to arrive continuously going forward. The team wants to use Auto Loader to incrementally process both existing files and new arrivals efficiently. Which Auto Loader mode should the team configure for this use case?

- **A.** Use directory listing mode because it provides better performance for the initial processing of 50,000 existing files through optimized incremental listing capabilities.
- **B.** Use file notification mode only after all existing files have been processed, as it cannot efficiently handle large volumes of pre-existing files.
- **C.** Use directory listing mode initially to process the 50,000 existing files, then reconfigure the stream to use file notification mode for ongoing ingestion of new arrivals.
- ✅ **D.** Use file notification mode because it scales efficiently for both large numbers of existing files and continuous new arrivals by using cloud storage events rather than repeatedly listing directories.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use file notification mode because it scales efficiently for both large numbers of existing files and continuous new arrivals by using cloud storage events rather than repeatedly listing directories.

File notification mở rộng khám phá qua sự kiện tệp đám mây và nạp cả tệp cũ lẫn mới. Liệt kê/backfill ban đầu xử lý lịch sử; thông báo tránh liệt kê toàn bộ lặp lại khi nạp tiếp.

#### Vì sao các phương án khác không phù hợp?

- **Use directory listing mode because it provides better performance for the initial processing of 50,000 existing files through optimized incremental listing capabilities.**: Directory listing dễ khởi động nhưng không phải chế độ khám phá mở rộng tốt hơn nói chung.
- **Use directory listing mode initially to process the 50,000 existing files, then reconfigure the stream to use file notification mode for ongoing ingestion of new arrivals.**: Có thể đổi chế độ nhưng không cần chỉ để nạp tệp đã có.
- **Use file notification mode only after all existing files have been processed, as it cannot efficiently handle large volumes of pre-existing files.**: Notification không bị giới hạn vào tệp đến sau khi đã nạp lịch sử.

**Tham khảo:**

- [Auto Loader file notification mode](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/file-notification-mode)
- [Auto Loader options](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/options)

</details>


---

## Q483 · single choice · — not answered

A data engineer is transforming a bronze table containing API response data into a silver table. The bronze table has a user_profile column of type STRING that contains JSON data. An example value is: `'{"user_id": "12345", "name": "John Smith", "age": 32, "email": "john@example.com"}'`

The silver table needs to make this data easily queryable for analytics without requiring JSON parsing in every downstream query. Which approach standardizes this column for the silver table?

- **A.** `SELECT from_json( user_profile, 'user_id STRING, name STRING, age STRING, email STRING' ) AS parsed_profile FROM bronze_table;`
- **B.** `SELECT get_json_object(user_profile, 'user_id') AS user_id, get_json_object(user_profile, 'name') AS name, get_json_object(user_profile, 'age') AS age, get_json_object(user_profile, 'email') AS email FROM bronze_table;`
- ✅ **C.** `SELECT get_json_object(user_profile, '$.user_id') AS user_id, get_json_object(user_profile, '$.name') AS name, CAST(get_json_object(user_profile, '$.age') AS INT) AS age, get_json_object(user_profile, '$.email') AS email FROM bronze_table;`
- **D.** `SELECT user_profile.user_id AS user_id, user_profile.name AS name, CAST(user_profile.age AS INT) AS age, user_profile.email AS email FROM bronze_table;`

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** SELECT get_json_object(user_profile, '$.user_id') AS user_id, get_json_object(user_profile, '$.name') AS name, CAST(get_json_object(user_profile, '$.age') AS INT) AS age, get_json_object(user_profile, '$.email') AS email FROM bronze_table;

Truy vấn đáp án trích trường bằng đường dẫn JSON $. hợp lệ và ép age thành INT. Lưu các cột này ở Silver tránh bắt truy vấn sau phân tích JSON lại.

#### Vì sao các phương án khác không phù hợp?

- **SELECT get_json_object(user_profile, 'user_id') AS user_id, get_json_object(user_profile, 'name') AS name, get_json_object(user_profile, 'age') AS age, get_json_object(user_profile, 'email') AS email FROM bronze_table;**: get_json_object cần đường dẫn như $.user_id, không phải tên trường đơn lẻ.
- **SELECT user_profile.user_id AS user_id, user_profile.name AS name, CAST(user_profile.age AS INT) AS age, user_profile.email AS email FROM bronze_table;**: Truy cập trường bằng dấu chấm không trích trực tiếp được từ STRING JSON.
- **SELECT from_json( user_profile, 'user_id STRING, name STRING, age STRING, email STRING' ) AS parsed_profile FROM bronze_table;**: from_json cũng là cách phân tích hợp lệ nhưng schema này giữ age thành STRING thay vì kiểu số.

**Tham khảo:**

- [get_json_object function](https://docs.databricks.com/aws/en/sql/language-manual/functions/get_json_object)
- [from_json function](https://docs.databricks.com/aws/en/sql/language-manual/functions/from_json)

**Cần xem lại:** Đề chưa yêu cầu cột phẳng và age dạng số nên from_json với age STRING cũng thỏa yêu cầu đã nêu. Cách xử lý: Bổ sung yêu cầu tạo các cột user_id,name,age,email ở mức trên cùng và age phải là INT để phương án get_json_object kèm CAST là duy nhất.

</details>


---

## Q484 · single choice · — not answered

A data engineer has a PySpark DataFrame events_df which contains a nested device struct, which itself includes a nested location struct, as shown: `event_id STRING, device STRUCT>, event_ts TIMESTAMP`

The goal is to flatten the nested fields into root-level columns while keeping the event identifiers and timestamp. Which PySpark expression achieves this?

- **A.** `events_df.select("event_id", "device[id]", "device[model]", "device.location[latitude]", "device.location[longitude]", "event_ts")`
- **B.** `events_df.withColumn("device_id", events_df["device.id"]).withColumn("device_model", events_df["device.model"]).withColumn("location", events_df["device.location"])`
- **C.** `events_df.select("event_id", "event_ts", "device.*")`
- ✅ **D.** `events_df.select("event_id", "event_ts", "device.id", "device.model", "device.location.latitude", "device.location.longitude")`

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** events_df.select("event_id", "event_ts", "device.id", "device.model", "device.location.latitude", "device.location.longitude")

Chọn từng trường lá lồng bằng đường dẫn dấu chấm đưa nó thành cột đầu ra cấp gốc, đồng thời giữ event_id và event_ts. Latitude và longitude được chọn riêng thay vì giữ location dạng struct.

#### Vì sao các phương án khác không phù hợp?

- **events_df.withColumn("device_id", events_df["device.id"]).withColumn("device_model", events_df["device.model"]).withColumn("location", events_df["device.location"])**: withColumn giữ device gốc và thêm location vẫn là struct lồng.
- **events_df.select("event_id", "device[id]", "device[model]", "device.location[latitude]", "device.location[longitude]", "event_ts")**: Biểu thức ngoặc vuông trong các chuỗi tên cột này không phải đường dẫn trường lồng hợp lệ.
- **events_df.select("event_id", "event_ts", "device.*")**: device.* chỉ mở một cấp, vẫn giữ location thành struct.

**Tham khảo:**

- [DataFrame.select](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.select.html)

</details>


---

## Q485 · single choice · — not answered

A data engineer needs to process SQL queries on a large dataset with fluctuating workloads. The workload requires automatic scaling based on the volume of queries, without the need to manage or provision infrastructure. The solution should be cost-efficient and charge only for the compute resources used during query execution. Which compute option should the data engineer use?

- ✅ **A.** Serverless SQL Warehouse
- **B.** Databricks Runtime for ML
- **C.** Databricks SQL Analytics
- **D.** Databricks Jobs

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Serverless SQL Warehouse

SQL warehouse serverless cung cấp tài nguyên SQL với quản lý tự động và mở rộng theo tải. Nó tránh tự cấp hạ tầng, nhưng không nên hiểu thanh toán chỉ tính đúng lúc từng truy vấn thực thi.

#### Vì sao các phương án khác không phù hợp?

- **Databricks Runtime for ML**: Runtime ML đóng gói công cụ học máy thay vì cung cấp phục vụ SQL được quản lý.
- **Databricks SQL Analytics**: SQL Analytics là tên sản phẩm rộng hơn, không chọn loại warehouse serverless cần thiết.
- **Databricks Jobs**: Jobs điều phối tác vụ và tự nó không phải loại tài nguyên phục vụ SQL.

**Tham khảo:**

- [SQL warehouse types](https://docs.databricks.com/aws/en/compute/sql-warehouse/warehouse-types)

**Cần xem lại:** SQL warehouse có thể bị tính phí khi còn chạy nhàn rỗi trước auto-stop, không chỉ trong thời gian thực thi truy vấn. Cách xử lý: Thay yêu cầu tính phí bằng trả theo mức sử dụng compute khi warehouse hoạt động và cấu hình auto-stop; giữ khóa Serverless SQL Warehouse.

</details>


---

## Q486 · single choice · — not answered

A data engineer is using the Databricks OPTIMIZE command on a Delta table. What happens when OPTIMIZE is run twice on the same table with the same data?

- ✅ **A.** t has no effect because it is idempotent.
- **B.** It changes the number of tuples per file significantly.
- **C.** It further reduces file sizes by re-clustering the data.
- **D.** It triggers a full liquid clustering process.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** t has no effect because it is idempotent.

Với OPTIMIZE gom tệp thông thường trên dữ liệu không đổi, lần chạy thứ hai không nén gộp thêm. Tính lũy đẳng này nói về gom tệp, không phải mọi thao tác phân cụm.

#### Vì sao các phương án khác không phù hợp?

- **It triggers a full liquid clustering process.**: Lặp lệnh thông thường không tự yêu cầu phân cụm liquid đầy đủ bằng OPTIMIZE FULL.
- **It changes the number of tuples per file significantly.**: Đầu vào không đổi không đòi phân phối lại đáng kể số dòng theo tệp.
- **It further reduces file sizes by re-clustering the data.**: Gom tệp nhằm hợp nhất tệp nhỏ, không liên tục làm chúng nhỏ hơn.

**Tham khảo:**

- [Optimize data file layout](https://docs.databricks.com/aws/en/delta/optimize)

</details>


---

## Q487 · single choice · — not answered

A data engineer wants to create an external table in Databricks that references data stored in an Azure Data Lake Storage (ADLS) location. The goal is to enable Databricks to access and query this external data without moving it into the Databricks-managed storage. Which step should the data engineer take to successfully create the external table?

- ✅ **A.** Use the CREATE TABLE statement and specify the LOCATION clause with the path to the external data.
- **B.** CREATE EXTERNAL TABLE statement without specifying a LOCATION clause
- **C.** Use the CREATE MANAGED TABLE statement and specify the LOCATION clause with the path to the external data.
- **D.** CREATE UNMANAGED TABLE statement without specifying a LOCATION clause.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use the CREATE TABLE statement and specify the LOCATION clause with the path to the external data.

CREATE TABLE với LOCATION đăng ký bảng ngoài trên đường dẫn lưu trữ hiện có đã được cấp quyền. Nó tham chiếu tệp ADLS mà không chép sang vị trí bảng managed mới.

#### Vì sao các phương án khác không phù hợp?

- **Use the CREATE MANAGED TABLE statement and specify the LOCATION clause with the path to the external data.**: CREATE MANAGED TABLE không phải cú pháp phù hợp để đăng ký dữ liệu ngoài hiện có.
- **CREATE UNMANAGED TABLE statement without specifying a LOCATION clause.**: CREATE UNMANAGED TABLE không phải câu lệnh được hỗ trợ và thiếu đường dẫn cần thiết.
- **CREATE EXTERNAL TABLE statement without specifying a LOCATION clause**: Bảng external cần LOCATION để xác định dữ liệu.

**Tham khảo:**

- [CREATE TABLE USING](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q488 · single choice · — not answered

How does Databricks Connect enable the engineer to develop, test, and debug code seamlessly on their local machine while interacting with Databricks clusters?

- **A.** By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code only through Databricks' own web interface
- **B.** By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using a specific IDE that is required by Databricks
- **C.** By allowing direct execution of Spark jobs from the local machine without needing a network connection
- ✅ **D.** By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using their preferred IDE

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using their preferred IDE

Databricks Connect cho phép dùng IDE cục bộ ưa thích trong khi DataFrame Spark chạy trên tài nguyên Databricks từ xa. Máy khách gửi kế hoạch và nhận kết quả thay vì tái tạo toàn bộ cụm Databricks cục bộ.

#### Vì sao các phương án khác không phù hợp?

- **By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code using a specific IDE that is required by Databricks**: Databricks Connect không bị giới hạn vào một IDE bắt buộc.
- **By providing a local environment that mimics the Databricks runtime, enabling the engineer to develop, test, and debug code only through Databricks' own web interface**: Mục đích của nó bao gồm phát triển ngoài giao diện web Databricks.
- **By allowing direct execution of Spark jobs from the local machine without needing a network connection**: Thực thi từ xa cần kết nối mạng tới Databricks.

**Tham khảo:**

- [Databricks Connect](https://docs.databricks.com/aws/en/dev-tools/databricks-connect/)

**Cần xem lại:** Databricks Connect là client chạy Spark trên compute từ xa, không tạo môi trường mô phỏng đầy đủ Databricks Runtime cục bộ. Cách xử lý: Viết lại phương án theo khóa thành dùng IDE cục bộ và Databricks Connect client để gửi Spark plans đến Databricks compute từ xa.

</details>


---

## Q489 · single choice · — not answered

A data engineer is working on a Databricks project that utilizes cloud storage. The data engineer wants to load several JSON files from containers on a storage account as soon as the file arrives within the storage account. Which syntax should the data engineer follow to first load the files into a dataframe and check that it is working as expected using Python

- **A.** df = spark.readStream.format("cloud").option("json").load("/input/path"
- ✅ **B.** df = spark.readStream.format("cloudFiles") .option("cloudFiles.formal", "json") .load("/input/path")
- **C.** spark.readStream.format("json").load("input/path")
- **D.** spark.read.json("input/path")

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** df = spark.readStream.format("cloudFiles") .option("cloudFiles.formal", "json") .load("/input/path")

Cách đọc Auto Loader được định hướng dùng readStream.format("cloudFiles") với cloudFiles.format là json. Phương án theo khóa lại in cloudFiles.formal nên không cung cấp tùy chọn định dạng nguồn bắt buộc như hiện tại.

#### Vì sao các phương án khác không phù hợp?

- **df = spark.readStream.format("cloud").option("json").load("/input/path"**: cloud không phải provider Auto Loader và option cần khóa cùng giá trị.
- **spark.readStream.format("json").load("input/path")**: Luồng tệp JSON có thể nạp tệp mới khi có lược đồ nhưng không phải cú pháp Auto Loader mà đáp án hướng tới.
- **spark.read.json("input/path")**: spark.read.json đọc lô và không tiếp tục theo dõi tệp mới.

**Tham khảo:**

- [Auto Loader schema inference and evolution](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

**Cần xem lại:** Phương án theo khóa sai tên tùy chọn cloudFiles.format và chưa có thao tác khởi chạy/kiểm tra luồng như đề yêu cầu. Cách xử lý: Sửa cloudFiles.formal thành cloudFiles.format; thêm schema/schemaLocation phù hợp và đoạn display(df) hoặc writeStream có checkpoint để kiểm tra luồng.

</details>


---

## Q490 · single choice · — not answered

An organization has implemented a data pipeline in Databricks and needs to ensure it can scale automatically based on varying workloads without manual cluster management. The goal is to meet the company's Service Level Agreements (SLAs), which require high availability and minimal downtime, while Databricks automatically handles resource allocation and optimization. Which approach fulfills these requirements?

- **A.** Use Interactive Clusters in Databricks, adjusting cluster sizes manually based on workload demands.
- **B.** Deploy Job Clusters with fixed configurations, dedicated to specific tasks, without automatic scaling.
- ✅ **C.** Use Serverless compute in Databricks to automatically scale and provision resources with minimal manual intervention.
- **D.** Use Spot Instances to allocate resources dynamically while minimizing costs, with potential interruptions.

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use Serverless compute in Databricks to automatically scale and provision resources with minimal manual intervention.

Compute serverless cấp và co giãn tài nguyên với ít quản lý hạ tầng thủ công. Nó phù hợp mô hình vận hành yêu cầu, tùy hỗ trợ tác vụ và giới hạn dịch vụ.

#### Vì sao các phương án khác không phù hợp?

- **Use Spot Instances to allocate resources dynamically while minimizing costs, with potential interruptions.**: Spot có thể bị ngắt và tự nó không cung cấp co giãn managed hay bảo đảm sẵn sàng.
- **Use Interactive Clusters in Databricks, adjusting cluster sizes manually based on workload demands.**: Tự đổi kích thước cụm interactive trái yêu cầu tự động hóa.
- **Deploy Job Clusters with fixed configurations, dedicated to specific tasks, without automatic scaling.**: Cụm job cố định không tự thay đổi năng lực như yêu cầu.

**Tham khảo:**

- [Serverless compute limitations](https://docs.databricks.com/aws/en/compute/serverless/limitations)
- [High-level architecture](https://docs.databricks.com/aws/en/getting-started/high-level-architecture/)

</details>


---

## Q491 · single choice · — not answered

A company is collaborating with a partner that does not use Databricks but needs access to a large historical dataset stored in Delta format. The data engineer needs to ensure that the partner can access the data securely, without the need for them to set up an account, and with read-only access. How should the data be shared?

- ✅ **A.** Share the dataset using Delta Sharing, which allows your partner to access the data using a secure, read- only URL without requiring a Databricks account, ensuring that they cannot modify the data.
- **B.** Grant your partner access to your Databricks workspace and assign them full write permissions to the Delta table, enabling them to modify the dataset.
- **C.** Share the dataset by exporting it to a CSV file and manually transferring the file to the partner's system.
- **D.** Share the dataset using Unity Catalog, ensuring that both teams have full write access to the data within the same organization.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Share the dataset using Delta Sharing, which allows your partner to access the data using a secure, read- only URL without requiring a Databricks account, ensuring that they cannot modify the data.

Delta Sharing cung cấp truy cập chỉ đọc cho bên nhận ngoài mà không cần tài khoản Databricks. Bên nhận mở xác thực bằng thông tin chia sẻ thay vì nhận quyền ghi workspace.

#### Vì sao các phương án khác không phù hợp?

- **Share the dataset using Unity Catalog, ensuring that both teams have full write access to the data within the same organization.**: Toàn quyền ghi trái yêu cầu chỉ đọc và giả định cùng tổ chức.
- **Share the dataset by exporting it to a CSV file and manually transferring the file to the partner's system.**: Chuyển CSV sao chép dataset lớn và mất chia sẻ/thu hồi có quản lý.
- **Grant your partner access to your Databricks workspace and assign them full write permissions to the Delta table, enabling them to modify the dataset.**: Quyền ghi workspace không cần thiết và trái trực tiếp yêu cầu chỉ đọc.

**Tham khảo:**

- [Secure open data sharing](https://docs.databricks.com/aws/en/delta-sharing/)

</details>


---

## Q492 · single choice · — not answered

Which SQL code snippet will correctly demonstrate a Data Definition Language (DDL) operation used to create a table?

- **A.** INSERT INTO employees (id, name) VALUES (1, 'Alice');
- **B.** DROP TABLE employees;
- **C.** ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);
- ✅ **D.** CREATE TABLE employees (id INT,name STRING);

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE TABLE employees (id INT,name STRING);

CREATE TABLE employees định nghĩa bảng mới và cột, là thao tác tạo DDL. Các lệnh khác sửa hàng hoặc đổi/xóa định nghĩa đã có.

#### Vì sao các phương án khác không phù hợp?

- **INSERT INTO employees (id, name) VALUES (1, 'Alice');**: INSERT là DML thêm hàng vào bảng đã có.
- **ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);**: ALTER TABLE là DDL nhưng đổi bảng đã có thay vì tạo mới.
- **DROP TABLE employees;**: DROP TABLE là DDL xóa bảng.

**Tham khảo:**

- [CREATE TABLE [USING]](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-ddl-create-table-using)

</details>


---

## Q493 · single choice · — not answered

A data engineer at a company that uses Databricks with Unity Catalog needs to share a collection of tables with an external partner who also uses a Databricks workspace enabled for Unity Catalog. The data engineer decides to use Delta Sharing to accomplish this. What is the first piece of information the data engineer should request from the external partner to set up Delta Sharing?

- **A.** The name of their Databricks cluster
- ✅ **B.** The sharing identifier of their Unity Catalog metastore
- **C.** The IP address of their Databricks workspace
- **D.** Their Databricks account password

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The sharing identifier of their Unity Catalog metastore

Yêu cầu sharing identifier của metastore bên nhận để cấu hình chia sẻ Databricks-to-Databricks. Nó xác định metastore Unity Catalog nhận mà không trao đổi mật khẩu.

#### Vì sao các phương án khác không phù hợp?

- **Their Databricks account password**: Không cần và không nên lấy mật khẩu đối tác để đăng ký người nhận.
- **The IP address of their Databricks workspace**: Địa chỉ IP workspace không xác định metastore nhận.
- **The name of their Databricks cluster**: Tên cụm là định danh tài nguyên, không phải định danh người nhận chia sẻ.

**Tham khảo:**

- [What is OpenSharing?](https://docs.databricks.com/aws/en/opensharing/)

</details>


---

## Q494 · single choice · — not answered

A data engineer has developed an ETL that produce a Delta managed table with liquid clustering feature activated as output. Several consumers are having issues regarding time delay when reading this table. How could the Data Engineer be sure about the OPTIMIZE command has been executed explicitly?

- **A.** Use SHOW TABLES EXTENDED to check the partitions columns used
- ✅ **B.** Use DESCRIBE HISTORY table to check if exists any OPTIMIZE operation
- **C.** Check the system table system.storage.predictive_optimization_operations_history
- **D.** Use DESCRIBE DETAIL table to see the file size and number of files for the table

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use DESCRIBE HISTORY table to check if exists any OPTIMIZE operation

DESCRIBE HISTORY liệt kê commit của bảng cùng tên thao tác, gồm OPTIMIZE. Nó kiểm chứng trực tiếp có giao dịch tối ưu thay vì suy từ kích thước tệp hiện tại.

#### Vì sao các phương án khác không phù hợp?

- **Use SHOW TABLES EXTENDED to check the partitions columns used**: Danh sách bảng và cột phân vùng không chứng minh đã có giao dịch OPTIMIZE.
- **Check the system table system.storage.predictive_optimization_operations_history**: Lịch sử predictive optimization ghi bảo trì tự động thay vì chứng minh lệnh được gọi thủ công.
- **Use DESCRIBE DETAIL table to see the file size and number of files for the table**: Số lượng và kích thước tệp hiện tại không xác định thao tác tạo chúng.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/tables/history)

</details>


---

## Q495 · single choice · — not answered

How are events formatted in Databricks audit logs?

- **A.** In Databricks, audit logs output events in a plain text format.
- **B.** In Databricks, audit logs output events in an XML format.
- **C.** In Databricks, audit logs output events in a CSV format.
- ✅ **D.** In Databricks, audit logs output events in a JSON format.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** In Databricks, audit logs output events in a JSON format.

Sự kiện nhật ký kiểm toán được chuyển đi dùng trường JSON có cấu trúc mô tả người thực hiện, hành động, thời gian và chi tiết khác. Bảng hệ thống kiểm toán cung cấp loại thông tin đó dưới dạng dòng truy vấn được.

#### Vì sao các phương án khác không phù hợp?

- **In Databricks, audit logs output events in a plain text format.**: Văn bản thuần phi cấu trúc không phải cách biểu diễn sự kiện có cấu trúc được tài liệu quy định.
- **In Databricks, audit logs output events in an XML format.**: XML không phải định dạng sự kiện kiểm toán tiêu chuẩn được chuyển đi.
- **In Databricks, audit logs output events in a CSV format.**: CSV không phải định dạng sự kiện kiểm toán tiêu chuẩn được chuyển đi.

**Tham khảo:**

- [Audit log reference](https://docs.databricks.com/aws/en/admin/account-settings/audit-logs)

</details>


---

## Q496 · single choice · — not answered

A global retail company sells products across multiple categories (e.g., Electronics, Clothing) and regions (e.g., North, South, East, West). 

The sales team has provided the data engineer with a PySpark dataframe named sales_df as below and the team wants the data engineer to analyze the sales data to help them make strategic decisions. 



Calculate the total sales amount for each product category and store the results in a new dataframe called category_sales.

> ⚠️ This question references an image that is missing on the source site (404).

- ✅ **A.** category_sales = sales_df.groupBy("category").agg(sum("sales_amount").alias("total_sales_amount"))
- **B.** category_sales = sales_df.agg(sum("sales_amount")).groupBy("category").alias("total_sales_amount")
- **C.** category_sales = sales_df.sum("sales_amount").groupBy("category").alias("total_sales_amount")
- **D.** category_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** category_sales = sales_df.groupBy("category").agg(sum("sales_amount").alias("total_sales_amount"))

Nhóm theo category và tính tổng sales_amount để tạo một tổng cho mỗi danh mục. Các dòng nguồn cho Electronics 500 và Clothing 900 với bí danh total_sales_amount yêu cầu.

#### Vì sao các phương án khác không phù hợp?

- **category_sales = sales_df.sum("sales_amount").groupBy("category").alias("total_sales_amount")**: DataFrame.sum không phải chuỗi tổng hợp nhóm này và phải giữ category làm khóa nhóm.
- **category_sales = sales_df.agg(sum("sales_amount")).groupBy("category").alias("total_sales_amount")**: Tổng hợp toàn bộ loại category trước khi groupBy được gọi.
- **category_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))**: Nhóm theo region tính tổng vùng thay vì tổng danh mục.

**Tham khảo:**

- [DataFrame.groupBy](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.groupBy.html)

</details>


---

## Q497 · single choice · — not answered

What is the functionality of AutoLoader in Databricks?

- ✅ **A.** Auto Loader automatically ingests and processes new files from cloud storage, handling both batch and streaming data with support for schema evolution.
- **B.** Auto Loader automatically ingests and processes new files from cloud storage, handling batch data with support for schema evolution.
- **C.** Auto Loader automatically ingests and processes new files from cloud storage, handling batch and streaming data with no support for schema evolution.
- **D.** Auto Loader automatically ingests and processes new files from cloud storage, handling only streaming data with no support for schema evolution.

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Auto Loader automatically ingests and processes new files from cloud storage, handling both batch and streaming data with support for schema evolution.

Auto Loader phát hiện tệp cloud tăng dần và hỗ trợ schema evolution. Trigger hữu hạn xử lý backlog hiện có như một lượt batch, còn cùng nguồn đó hỗ trợ streaming liên tục.

#### Vì sao các phương án khác không phù hợp?

- **Auto Loader automatically ingests and processes new files from cloud storage, handling batch and streaming data with no support for schema evolution.**: Phương án phủ nhận schema evolution trong khi Auto Loader hỗ trợ các chế độ cấu hình.
- **Auto Loader automatically ingests and processes new files from cloud storage, handling batch data with support for schema evolution.**: Giới hạn ở batch bỏ qua khả năng nạp streaming liên tục.
- **Auto Loader automatically ingests and processes new files from cloud storage, handling only streaming data with no support for schema evolution.**: Phương án vừa loại lượt hữu hạn vừa phủ nhận sai schema evolution.

**Tham khảo:**

- [Auto Loader overview](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/)
- [Auto Loader schema evolution](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q498 · single choice · — not answered

A data engineer is working in a Databricks notebook to design and manage a batch ETL pipeline. The engineer is writing SQL and Python code to clean data, transform it, and join large datasets from different sources. The engineer wants to organize these steps into a structured process that can be run regularly and scheduled as part of a data pipeline. Which Databricks notebook feature is applicable in the use case?

- ✅ **A.** Task workflows and job scheduling
- **B.** Real-time streaming support
- **C.** Notebook version control
- **D.** Collaborative editing

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Task workflows and job scheduling

Jobs ghép task notebook hoặc tệp với phụ thuộc và lịch, biến các bước ETL thành quy trình điều phối lặp lại được.

#### Vì sao các phương án khác không phù hợp?

- **Collaborative editing**: Cộng tác cho nhiều người cùng sửa nhưng không lên lịch chạy pipeline.
- **Real-time streaming support**: Streaming xử lý đầu vào liên tục thay vì điều phối pipeline batch theo lịch này.
- **Notebook version control**: Quản lý phiên bản theo dõi thay đổi nhưng không định nghĩa phụ thuộc chạy và lịch.

**Tham khảo:**

- [Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/)

</details>


---

## Q499 · single choice · — not answered

An organization needs to share a dataset stored in its Databricks Unity Catalog with an external partner who uses a different data platform that is not Databricks. The goal is to maintain data security and ensure the partner can access the data efficiently. Which method should the data engineer use to securely share the dataset with the external partner?

- ✅ **A.** Using Delta Sharing with the open sharing protocol
- **B.** Using a third-party API to access the Delta table
- **C.** Exporting data as CSV files and emailing them
- **D.** Databricks-to-Databricks Sharing

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Using Delta Sharing with the open sharing protocol

Open Delta Sharing cho bên nhận ngoài Databricks được cấp phép đọc dữ liệu chia sẻ có quản trị qua client tương thích, không cần workspace Databricks.

#### Vì sao các phương án khác không phù hợp?

- **Exporting data as CSV files and emailing them**: Gửi CSV qua email tạo bản sao khó quản trị và thiếu thu hồi quyền trực tiếp tại nguồn.
- **Using a third-party API to access the Delta table**: API riêng thêm công triển khai thay vì dùng giao thức chia sẻ mở được hỗ trợ.
- **Databricks-to-Databricks Sharing**: Chia sẻ Databricks-to-Databricks giả định bên nhận có môi trường Databricks tương ứng.

**Tham khảo:**

- [Open sharing](https://docs.databricks.com/aws/en/delta-sharing/share-data-open)

</details>


---

## Q500 · single choice · — not answered

A data engineer team has decided to implement a new data platform on Databricks and is currently deciding how to store each kind of data on each data layer. What is the appropriate layer and data pairing for medallion architecture?

- **A.** Silver Layer - Raw data from deposit account application
- **B.** Gold Layer - Deduplicated money transfer transaction
- ✅ **C.** Silver Layer - Cleansed master customer data
- **D.** Bronze Layer - Summary of cash deposit amount for each country and city

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Silver Layer - Cleansed master customer data

Bản ghi khách hàng chủ đã làm sạch phù hợp Silver, nơi đầu vào thô được kiểm tra, chuẩn hóa và khử trùng để tái sử dụng.

#### Vì sao các phương án khác không phù hợp?

- **Gold Layer - Deduplicated money transfer transaction**: Chỉ khử trùng là xử lý kiểu Silver, chưa nêu aggregate hoặc mô hình Gold sẵn cho nghiệp vụ.
- **Silver Layer - Raw data from deposit account application**: Dữ liệu ứng dụng chưa xử lý thuộc Bronze trước kiểm tra Silver.
- **Bronze Layer - Summary of cash deposit amount for each country and city**: Tổng tiền gửi theo quốc gia/thành phố là aggregate nghiệp vụ đặc trưng Gold.

**Tham khảo:**

- [Medallion architecture](https://docs.databricks.com/aws/en/lakehouse/medallion)

</details>


---

## Q501 · single choice · — not answered

Why is Delta Live Tables (DLT) an appropriate choice?

- **A.** Supports only batch processing, no data versioning, and high infrastructure costs
- ✅ **B.** Automatic data quality checks, built-in support for schema evolution, and declarative pipeline development
- **C.** Requires custom code for data quality checks, no support for streaming data, and complex pipeline maintenance
- **D.** Manual schema enforcement, high operational overhead, and limited scalability

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Automatic data quality checks, built-in support for schema evolution, and declarative pipeline development

Pipeline khai báo suy ra thực thi từ định nghĩa dataset, tích hợp expectation và tính năng xử lý schema, giảm điều phối tự viết. Các tính năng đó vẫn cần cấu hình phù hợp.

#### Vì sao các phương án khác không phù hợp?

- **Manual schema enforcement, high operational overhead, and limited scalability**: Chỉ ép schema thủ công và khả năng mở rộng hạn chế không mô tả cách khai báo được quản lý.
- **Requires custom code for data quality checks, no support for streaming data, and complex pipeline maintenance**: Expectation tích hợp và hỗ trợ streaming trái với các hạn chế được khẳng định.
- **Supports only batch processing, no data versioning, and high infrastructure costs**: Hỗ trợ cả batch và streaming nên khẳng định chỉ batch là sai.

**Tham khảo:**

- [Python pipeline development](https://docs.databricks.com/aws/en/ldp/developer/python-dev)

</details>


---

## Q502 · single choice · — not answered

A Python file is ready to go into production and the client wants to use the cheapest but most efficient type of cluster possible. The workload is quite small, only processing 10GBs of data with only simple joins and no complex aggregations or wide transformations. Which cluster meets the requirement?

- **A.** Interactive cluster
- **B.** Job cluster with spot instances disabled
- ✅ **C.** Job cluster with spot instances enabled
- **D.** Job cluster with Photon enabled

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Job cluster with spot instances enabled

Job compute theo lượt tránh tài nguyên tương tác nhàn, còn worker spot có thể giảm giá máy cho workload nhỏ chịu được gián đoạn. Đây là lựa chọn theo chi phí, không bảo đảm lượt hoàn tất nhanh nhất hay rẻ nhất.

#### Vì sao các phương án khác không phù hợp?

- **Interactive cluster**: Compute tương tác có thể nhàn và không phải lựa chọn production theo lượt được đưa ra.
- **Job cluster with spot instances disabled**: Tắt spot loại lợi ích máy giảm giá được đưa ra.
- **Job cluster with Photon enabled**: Photon có thể tăng tốc thao tác hỗ trợ nhưng giá/hiệu năng cần đo với workload nhỏ này.

**Tham khảo:**

- [Compute configuration](https://docs.databricks.com/aws/en/compute/configure)

</details>


---

## Q503 · single choice · — not answered

A junior data engineer has created the table 'orders_backup' as a copy of the table "orders". Recently, the team started getting an error when querying the orders_backup indicating that some data files are no longer present. The transaction logs for the orders tables show a recent run of VACUUM command. Which of the following explains how the data engineer created the orders_backup table ? Select one:

- ✅ **A.** The orders_backup table was created using Delta Lake's SHALLOW CLONE functionality from the orders table
- **B.** The orders_backup table was created using CRAS statement from orders table
- **C.** The orders_backup table was created using CTAS statement from orders table
- **D.** The orders_backup table was created using Delta Lake's DEEP CLONE functionality from the orders table

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The orders_backup table was created using Delta Lake's SHALLOW CLONE functionality from the orders table

Shallow clone legacy dùng lại tệp dữ liệu nguồn, nên VACUUM nguồn có thể xóa tệp đang tham chiếu và làm đọc lỗi. Bản sao sâu có tệp dữ liệu riêng.

#### Vì sao các phương án khác không phù hợp?

- **The orders_backup table was created using CTAS statement from orders table**: CTAS vật chất hóa kết quả độc lập thay vì giữ tham chiếu shallow.
- **The orders_backup table was created using Delta Lake's DEEP CLONE functionality from the orders table**: DEEP CLONE sao chép tệp dữ liệu nên tránh phụ thuộc tệp nguồn đó.
- **The orders_backup table was created using CRAS statement from orders table**: CREATE OR REPLACE AS SELECT cũng ghi kết quả thay vì tạo phụ thuộc shallow đã nêu.

**Tham khảo:**

- [Clone tables](https://docs.databricks.com/aws/en/tables/operations/clone)
- [Unity Catalog shallow clones](https://docs.databricks.com/aws/en/tables/operations/clone-unity-catalog)

</details>


---

## Q504 · single choice · — not answered

A data engineer is designing a streaming ingestion pipeline using Auto Loader. The requirement is that the pipeline should never fail on schema changes but must capture any new columns that arrive in the data for later inspection. Which configuration should the engineer use? Select one:

- **A.** failOnNewColumns
- **B.** none
- ✅ **C.** rescue
- **D.** addNewColumns

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** rescue

rescue lưu cột bất ngờ vào cột rescued-data mà không đổi schema khai báo hay gây lỗi vì cột mới. Lỗi vận hành khác vẫn có thể xảy ra.

#### Vì sao các phương án khác không phù hợp?

- **failOnNewColumns**: failOnNewColumns dừng khi xuất hiện cột chưa biết.
- **addNewColumns**: addNewColumns cập nhật schema rồi dừng stream để khởi động lại với schema đó.
- **none**: none bỏ qua cột mới trừ khi cấu hình rescue riêng, nên riêng chế độ này chưa bảo đảm lưu lại.

**Tham khảo:**

- [Auto Loader schema evolution](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/schema)

</details>


---

## Q505 · single choice · — not answered

A data engineer wants to create a Delta Lake table for storing user activities of a website. The table has the following schema: user_id LONG, page STRING, activity_type LONG, ip_address STRING, activity_time TIMESTAMP, activity_date DATE Based on the above schema, which column is a good candidate for partitioning the Delta Table? Select one:

- ✅ **A.** activity_date
- **B.** activity_time
- **C.** user_id
- **D.** activity_type

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** activity_date

activity_date tạo nhóm thời gian thô hơn timestamp và hỗ trợ pruning khi lọc ngày. Partition chỉ hữu ích khi bảng và dữ liệu mỗi ngày đủ lớn; liquid clustering là lựa chọn thiết kế hiện đại khác.

#### Vì sao các phương án khác không phù hợp?

- **user_id**: ID người dùng thường tạo quá nhiều partition do cardinality cao.
- **activity_time**: Timestamp quá chi tiết dễ chia dữ liệu thành nhiều partition rất nhỏ.
- **activity_type**: Loại hoạt động có thể phân bố lệch và không tạo tổ chức theo ngày được đưa ra.

**Tham khảo:**

- [Delta table best practices](https://docs.databricks.com/aws/en/delta/best-practices)

</details>


---

## Q506 · single choice · — not answered

A data engineer is working on a feature branch in a Git folder and attempts to create a pull request into the main branch of the project repository. However, Git detects conflicting changes between the feature branch and the main branch, resulting in a merge conflict. Which two options does the Git folder UI provide for resolving merge conflicts? Select one or more.

- ✅ **A.** Manually edit the changes and remove the conflict markers
- **B.** Delete the conflicting branch
- **C.** Move the changes to a new branch
- **D.** Accept all incoming or current changes

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Manually edit the changes and remove the conflict markers

Chỉnh sửa thủ công rồi bỏ dấu conflict là cách giải quyết được hỗ trợ. UI cũng cho giữ toàn bộ thay đổi hiện tại hoặc nhận toàn bộ thay đổi incoming, nên yêu cầu chọn hai không khớp khóa chỉ chọn một.

#### Vì sao các phương án khác không phù hợp?

- **Delete the conflicting branch**: Xóa nhánh bỏ công việc thay vì hợp nhất nội dung xung đột.
- **Move the changes to a new branch**: Chuyển thay đổi sang nhánh mới không tự giải quyết khác biệt với main.
- **Accept all incoming or current changes**: Nhận toàn bộ incoming hoặc current thực sự là lựa chọn UI hợp lệ; khóa bỏ sót cách giải quyết này.

**Tham khảo:**

- [Create and manage Git folders](https://docs.databricks.com/aws/en/repos/git-operations-with-repos/)

**Cần xem lại:** Khóa thiếu lựa chọn Accept all incoming or current changes, vốn cũng được Git folder UI hỗ trợ. Cách xử lý: Duyệt bổ sung phương án Accept all incoming or current changes vào khóa cùng Manually edit the changes and remove the conflict markers.

</details>


---

## Q507 · single choice · — not answered

A data engineering team is building a LDP pipeline to clean and validate hotel reservations data. Some completed reservations have null check-in or check-out dates, which violates business rules. To handle this, they implemented the following code: Which of the following correctly describes what this function does?Select one: This function streams only rows with valid check-in and check-out values into the silver_reservations table, while writing invalid rows into a separate partition.

- **A.** This function streams rows based on the quarantine_rules into two separate tables: silver_reservations for valid reservations, and is_quarantined for invalid reservations.
- ✅ **B.** This function streams all rows into the silver_reservations table, flags those with missing check-in or check- out values as quarantined, and partitions the table by the is_quarantined flag.
- **C.** This function streams only rows with valid check-in and check-out values into the silver_reservations table, while writing invalid rows into a separate partition.
- **D.** This function partitions the bronze_reservations table by the is_quarantined flag, streams valid partitions into the silver_reservations table, and drops the invalid partitions.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** This function streams all rows into the silver_reservations table, flags those with missing check-in or check- out values as quarantined, and partitions the table by the is_quarantined flag.

Theo khóa, hàm giữ mọi hàng trong silver_reservations, gắn is_quarantined cho hàng vi phạm và phân vùng theo cờ đó. Cờ và partition không tự loại bản ghi; cần filter downstream nếu chỉ muốn dữ liệu hợp lệ.

#### Vì sao các phương án khác không phù hợp?

- **This function streams only rows with valid check-in and check-out values into the silver_reservations table, while writing invalid rows into a separate partition.**: Mô tả chỉ stream hàng hợp lệ mâu thuẫn việc giữ cả hai nhóm trong cùng bảng được phân vùng.
- **This function partitions the bronze_reservations table by the is_quarantined flag, streams valid partitions into the silver_reservations table, and drops the invalid partitions.**: Phân vùng đầu ra không tự thay đổi hoặc xóa partition của bảng bronze.
- **This function streams rows based on the quarantine_rules into two separate tables: silver_reservations for valid reservations, and is_quarantined for invalid reservations.**: is_quarantined là cờ theo khóa, không phải tên bảng nhận dữ liệu lỗi.

**Tham khảo:**

- [Expectation recommendations and advanced patterns](https://docs.databricks.com/aws/en/ldp/expectation-patterns)

**Cần xem lại:** Không có mã để xác định hàm có gắn cờ và partition hay lọc hàng; đề chứa câu mô tả đáp án khác. Cách xử lý: Khôi phục đầy đủ đoạn mã hàm/expectations/partition_cols rồi xóa câu mô tả đáp án bị chèn cuối đề; đối chiếu lại khóa với mã đó.

</details>


---

## Q508 · single choice · — not answered

The data engineering team has a Delta table named 'users'. 

A recent CHECK constraint has been added to the table using the following command: ALTER TABLE users ADD CONSTRAINT valid_age CHECK (age> 0); 

The team attempted to insert a batch of new records to the table, but there were some records with negative age values which caused the write to fail because of the constraint violation. 

Which statement describes the outcome of this batch insert? Select one:

- **A.** All records except those that violate the table constraint have been inserted in the table. Records violating the constraint have been ignored.
- **B.** All records except those that violate the table constraint have been inserted in the table. Records violating the constraint have been recorded into the transaction log.
- **C.** Only records processed before reaching the first violating record have been inserted in the table
- ✅ **D.** None of the records have been inserted into the table.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** None of the records have been inserted into the table.

CHECK age > 0 được thực thi trước khi transaction ghi thành công. Khi một hàng vi phạm, toàn bộ lần ghi batch thất bại nên không có hàng nào từ transaction đó được commit.

#### Vì sao các phương án khác không phù hợp?

- **Only records processed before reaching the first violating record have been inserted in the table**: Delta ghi nguyên tử, không commit một tiền tố các hàng trước khi gặp lỗi.
- **All records except those that violate the table constraint have been inserted in the table. Records violating the constraint have been recorded into the transaction log.**: CHECK không tự tách hàng hợp lệ và ghi hàng lỗi vào log như một kho quarantine.
- **All records except those that violate the table constraint have been inserted in the table. Records violating the constraint have been ignored.**: CHECK không âm thầm bỏ hàng lỗi; cần pipeline lọc riêng cho hành vi đó.

**Tham khảo:**

- [Constraints on Databricks](https://docs.databricks.com/aws/en/tables/constraints)

</details>


---

## Q509 · single choice · — not answered

A data engineering team wants to ensure that a specific Python library is available every time a cluster starts. Which approach best achieves this goal? Select one:

- ✅ **A.** Use an init script to install the library during cluster startup
- **B.** Install the library when running a Python notebook
- **C.** Use Databricks CLI to upload the library files to the cluster after startup
- **D.** Manually install the library on the driver node each time the cluster starts

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Use an init script to install the library during cluster startup

Init script chạy ở lúc khởi động mỗi node của classic cluster, nên có thể tự cài thư viện trước workload. Trong các lựa chọn đây là cơ chế gắn với startup, nhưng hướng dẫn hiện hành ưu tiên quản lý thư viện qua compute policies thay vì init script.

#### Vì sao các phương án khác không phù hợp?

- **Manually install the library on the driver node each time the cluster starts**: Cài tay trên driver không bảo đảm tự động ở lần khởi động tiếp theo hoặc trên executor.
- **Install the library when running a Python notebook**: Cài trong notebook chỉ diễn ra khi notebook chạy và có thể chỉ có phạm vi notebook.
- **Use Databricks CLI to upload the library files to the cluster after startup**: Upload sau startup không tự cài hoặc tái áp dụng khi cluster khởi động.

**Tham khảo:**

- [What are init scripts?](https://docs.databricks.com/aws/en/init-scripts/)

</details>


---

## Q510 · single choice · — not answered

A data engineer is configuring a job using Databricks Asset Bundles and wants to limit its access to authorized users. The following job definition includes tasks and job clusters, but the engineer also needs to define which user groups can manage or view the job. Which option correctly fills in the blank to meet the specified requirement?Select one:

- **A.** Job settings
- **B.** roles
- ✅ **C.** Permissions
- **D.** access_control

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Permissions

Trường YAML permissions gán level cho group_name hoặc user_name trong bundle. Đặt quyền ở job resource cho phép nhóm quản lý nhận CAN_MANAGE và nhóm xem nhận CAN_VIEW.

#### Vì sao các phương án khác không phù hợp?

- **Job settings**: Job settings là khái niệm chung, không phải khóa ACL cần điền.
- **access_control**: access_control không phải trường quyền resource trong schema bundle này.
- **roles**: roles không khai báo các permission level của job theo schema bundle.

**Tham khảo:**

- [Set permissions for resources in Declarative Automation Bundles](https://docs.databricks.com/aws/en/dev-tools/bundles/permissions)

**Cần xem lại:** Thiếu YAML/chỗ trống được câu hỏi viện dẫn. Cách xử lý: Khôi phục YAML có vị trí permissions hoặc bỏ phần nhắc định nghĩa/chỗ trống để câu chỉ hỏi tên trường cấu hình quyền; giữ khóa Permissions.

</details>


---

## Q511 · single choice · — not answered

A data engineer has defined the following data quality constraint in a LDP pipeline: CONSTRAINT valid_id EXPECT (id IS NOT NULL) ______ Which clause correctly fills in the blank so records violating this constraint will be written to the target table, but reported in metrics? Select one:

- **A.** ON VIOLATION ADD ROW
- ✅ **B.** ON VIOLATION WARNING
- **C.** ON VIOLATION NULL
- **D.** There is no need to add the ON VIOLATION clause. By default, records violating the constraint will be kept, and reported as invalid in the pipeline metrics.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** ON VIOLATION WARNING

Khóa chọn ON VIOLATION WARNING nhưng đó không phải cú pháp expectation SQL được tài liệu hóa. Để giữ hàng vi phạm và ghi metrics, chỉ dùng EXPECT (id IS NOT NULL), không thêm ON VIOLATION.

#### Vì sao các phương án khác không phù hợp?

- **There is no need to add the ON VIOLATION clause. By default, records violating the constraint will be kept, and reported as invalid in the pipeline metrics.**: Không thêm ON VIOLATION thực sự là hành vi mặc định đúng theo tài liệu; khóa nguồn đã bỏ sót phương án này.
- **ON VIOLATION NULL**: ON VIOLATION NULL không phải hành động expectation hợp lệ.
- **ON VIOLATION ADD ROW**: ON VIOLATION ADD ROW không phải hành động expectation hợp lệ.

**Tham khảo:**

- [Manage data quality with pipeline expectations](https://docs.databricks.com/aws/en/ldp/expectations)

**Cần xem lại:** Muốn giữ hàng vi phạm và ghi metrics thì dùng EXPECT mặc định, không dùng ON VIOLATION WARNING. Cách xử lý: Duyệt đổi khóa sang phương án không thêm ON VIOLATION; không thay câu lệnh thành WARNING.

</details>


---

## Q512 · single choice · — not answered

A data engineer is working on a project where they need to integrate data from an external API into a Databricks workspace. For security reasons, they do not want to hardcode the API Key directly in their notebooks. Instead, they want to use Databricks Secrets to securely store and manage sensitive credentials. Which Databricks CLI commands should they use to accomplish this goal? Select one:

- **A.** databricks secrets create-secret api_secretsdatabricks secrets put-scope api_secrets api_key
- **B.** databricks secrets create-secret api_secretsdatabricks secrets put-scope api_key api_secrets
- **C.** databricks secrets create-scope api_scopedatabricks secrets put-secret api_key api_scope
- ✅ **D.** databricks secrets create-scope api_scopedatabricks secrets put-secret api_scope api_key

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** databricks secrets create-scope api_scopedatabricks secrets put-secret api_scope api_key

Chạy create-scope api_scope rồi put-secret api_scope api_key để tạo scope và lưu khóa trong scope đó. Khi đọc, notebook tham chiếu cùng scope và key bằng dbutils.secrets.get thay vì chứa giá trị bí mật trong mã.

#### Vì sao các phương án khác không phù hợp?

- **databricks secrets create-scope api_scopedatabricks secrets put-secret api_key api_scope**: put-secret yêu cầu scope trước key; đảo thứ tự nhắm sai scope.
- **databricks secrets create-secret api_secretsdatabricks secrets put-scope api_secrets api_key**: create-secret và put-scope không phải các lệnh CLI cho thao tác này.
- **databricks secrets create-secret api_secretsdatabricks secrets put-scope api_key api_secrets**: Ngoài tên lệnh không hợp lệ, thứ tự cũng không theo scope rồi key.

**Tham khảo:**

- [secrets command group](https://docs.databricks.com/aws/en/dev-tools/cli/reference/secrets-commands)

**Cần xem lại:** api_scopedatabricks khiến chuỗi lệnh theo khóa không thể thực thi đúng. Cách xử lý: Tách phương án theo khóa thành hai dòng: databricks secrets create-scope api_scope và databricks secrets put-secret api_scope api_key; giữ nguyên thứ tự scope,key và khóa.

</details>


---

## Q513 · single choice · — not answered

A data engineering team is discussing the optimal data layout strategy on a growing managed Delta table in Unity Catalog. They are considering partitioning, Z-ordering, and Liquid Clustering to improve query performance. Which scenario best indicates that Automatic Liquid Clustering is the recommended choice? Select one.

- **A.** The table is heavily filtered by a consistent, small set of date ranges.
- ✅ **B.** The table experiences diverse, frequently changing query filters across multiple columns, with unpredictable access patterns.
- **C.** The team has identified stable clustering keys for the table.
- **D.** None of the listed options are correct. Automatic Liquid Clustering can not be applied on managed tables.

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The table experiences diverse, frequently changing query filters across multiple columns, with unpredictable access patterns.

Automatic liquid clustering có thể chọn và điều chỉnh khóa dựa trên workload truy vấn, phù hợp bộ lọc nhiều cột thay đổi liên tục. Với bảng managed đủ điều kiện, CLUSTER BY AUTO và predictive optimization giảm nhu cầu tự chọn lại layout.

#### Vì sao các phương án khác không phù hợp?

- **None of the listed options are correct. Automatic Liquid Clustering can not be applied on managed tables.**: Managed tables chính là nhóm hỗ trợ automatic liquid clustering, nên phủ định này sai.
- **The team has identified stable clustering keys for the table.**: Khóa ổn định có thể dùng clustering thủ công; không thể hiện lợi ích thích ứng rõ bằng workload biến động.
- **The table is heavily filtered by a consistent, small set of date ranges.**: Bộ lọc ngày cố định có thể tối ưu với khóa biết trước; chưa phải lý do mạnh nhất để tự động chọn khóa.

**Tham khảo:**

- [Use liquid clustering for tables](https://docs.databricks.com/aws/en/tables/clustering)

</details>


---

## Q514 · single choice · — not answered

Which of the following functions can a data engineer use to return a new DataFrame containing the distinct rows from a given DataFrame based on multiple columns? Select one:

- **A.** pyspark.sql.DataFrame.dropna
- **B.** pyspark.sql.DataFrame.drop
- ✅ **C.** pyspark.sql.DataFrame.dropDuplicates
- **D.** pyspark.sql.DataFrame.distinct

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** pyspark.sql.DataFrame.dropDuplicates

dropDuplicates nhận subset gồm nhiều tên cột để xác định hàng trùng theo các cột đó. Nó vẫn giữ các thuộc tính khác của hàng đại diện thay vì buộc so sánh toàn bộ schema.

#### Vì sao các phương án khác không phù hợp?

- **pyspark.sql.DataFrame.distinct**: distinct loại trùng trên toàn bộ hàng và không nhận subset cột, nên không chọn riêng khóa so sánh.
- **pyspark.sql.DataFrame.dropna**: dropna loại hàng chứa giá trị thiếu, không kiểm tra trùng.
- **pyspark.sql.DataFrame.drop**: drop loại cột khỏi schema, không loại hàng trùng.

**Tham khảo:**

- [DataFrame.dropDuplicates](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.dropDuplicates.html)

</details>


---

## Q515 · single choice · — not answered

A data engineer wants to pass multiple parameters from a Databricks Job to a notebook. They already configured the key and value of each parameter in the configurations of the job. Which of the following utilities can the data engineer use to read the passed parameters inside the notebook? Select one:

- **A.** dbutils.library
- ✅ **B.** dbutils.widgets
- **C.** dbutils.secrets
- **D.** dbutils.notebook

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** dbutils.widgets

dbutils.widgets.get(tên) đọc giá trị tham số notebook do job truyền vào; getAll có thể lấy nhiều tham số. Widget trả chuỗi nên cần chuyển kiểu nếu xử lý số hoặc boolean.

#### Vì sao các phương án khác không phù hợp?

- **dbutils.library**: dbutils.library quản lý thư viện, không đọc tham số notebook.
- **dbutils.secrets**: dbutils.secrets lấy giá trị từ secret scope, không phải tham số job thông thường.
- **dbutils.notebook**: dbutils.notebook chạy hoặc kết thúc notebook; giá trị đầu vào được đọc qua widgets.

**Tham khảo:**

- [Databricks widgets](https://docs.databricks.com/aws/en/notebooks/widgets)

</details>


---

## Q516 · single choice · — not answered

Which of the following describes the minimal permissions a data engineer needs to start an existing cluster, and attach a notebook to it? Select one:

- **A.** "Can Manage" privilege on the cluster
- **B.** "Can Attach To" privilege on the cluster
- **C.** Cluster creation allowed + "Can Restart" privileges on the cluster
- ✅ **D.** "Can Restart" privilege on the cluster

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** "Can Restart" privilege on the cluster

CAN RESTART cho khởi động cụm đã có và bao gồm CAN ATTACH TO. Không cần tạo cụm mới.

#### Vì sao các phương án khác không phù hợp?

- **Cluster creation allowed + "Can Restart" privileges on the cluster**: Quyền tạo cụm là quyền thêm không cần thiết.
- **"Can Manage" privilege on the cluster**: CAN MANAGE dùng được nhưng rộng hơn tối thiểu.
- **"Can Attach To" privilege on the cluster**: Chỉ CAN ATTACH TO không khởi động được cụm đã dừng.

**Tham khảo:**

- [Classic compute overview](https://docs.databricks.com/aws/en/compute/use-compute)

</details>


---

## Q517 · single choice · — not answered

Which of the following methods does Not allow data engineers to create a multi-task job in Databricks? Select one:

- ✅ **A.** Lakeflow Declarative Pipelines
- **B.** REST API
- **C.** Databricks Asset Bundles (DABS)
- **D.** Workspace UI

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Lakeflow Declarative Pipelines

Lakeflow Declarative Pipelines định nghĩa pipeline xử lý và phụ thuộc dataset, không tạo Jobs nhiều task tùy ý. Jobs có thể điều phối pipeline thành một task.

#### Vì sao các phương án khác không phù hợp?

- **REST API**: Jobs REST API tạo được job nhiều task.
- **Databricks Asset Bundles (DABS)**: Bundle khai báo được job với nhiều task.
- **Workspace UI**: Giao diện Jobs workspace tạo được đồ thị nhiều task.

**Tham khảo:**

- [Configure pipelines](https://docs.databricks.com/aws/en/ldp/configure-pipeline)
- [Declarative Automation Bundles configuration](https://docs.databricks.com/aws/en/dev-tools/bundles/settings)
- [Configure Lakeflow Jobs](https://docs.databricks.com/aws/en/jobs/configure-job)

</details>


---

## Q518 · single choice · — not answered

A Spark job is taking longer than expected. Using the Spark UI, a data engineer notes that the Min, Median, and Max Durations for tasks in a particular stage show the minimum and median time to complete a task as roughly the same, but the max duration for a task to be roughly 100 times as long as the minimum. Which situation is causing increased duration of the overall job? Select one:

- **A.** Network latency due to some cluster nodes being in different regions from the source data
- ✅ **B.** Skew caused by more data being assigned to a subset of spark-partitions
- **C.** Task queueing resulting from improper thread pool assignment.
- **D.** Spill resulting from attached volume storage being too small

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Skew caused by more data being assigned to a subset of spark-partitions

Một vài task lâu gấp khoảng 100 lần task thông thường gợi ý mạnh partition bị lệch. Dữ liệu phân bố không đều khiến cả stage chờ nhóm task chậm cuối.

#### Vì sao các phương án khác không phù hợp?

- **Task queueing resulting from improper thread pool assignment.**: Chênh lệch thời lượng cực lớn không phải bằng chứng cấu hình thread pool sai.
- **Spill resulting from attached volume storage being too small**: Spill phát sinh do áp lực bộ nhớ, không chỉ vì volume gắn quá nhỏ.
- **Network latency due to some cluster nodes being in different regions from the source data**: Chỉ số không chứng minh node khác vùng hay độ trễ mạng.

**Tham khảo:**

- [Skew and spill](https://docs.databricks.com/aws/en/optimizations/spark-ui-guide/long-spark-stage-page)

</details>


---

## Q519 · single choice · — not answered

A data engineer is responsible for managing and orchestrating data workflows in their organization's Databricks environment. They have deployed a job called events_process_job using Databricks Asset Bundles. To execute this job, the engineer runs the following command from their terminal: databricks bundle run events_process_job After observing the command, a senior data engineer suggests that they could improve the execution process by adding the -t option when running the command. Which of the following explain the primary purpose of this option?

- **A.** To specify the target cluster size for the job run
- **B.** To trigger dry run of the job without actually processing data
- **C.** To enable temporary logging during job execution
- ✅ **D.** To select the target environment for the job run

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** To select the target environment for the job run

-t chọn target bundle theo tên như dev hoặc prod. Lần chạy dùng workspace và cấu hình của target đó.

#### Vì sao các phương án khác không phù hợp?

- **To specify the target cluster size for the job run**: Kích thước cụm cấu hình trong resource, không do riêng -t chọn.
- **To trigger dry run of the job without actually processing data**: Cờ target không phải tùy chọn chạy thử không thực thi.
- **To enable temporary logging during job execution**: Nó không bật ghi log tạm thời.

**Tham khảo:**

- [Bundle command group](https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands)

</details>


---

## Q520 · single choice · — not answered

The data engineering team maintains a Delta Lake table of SCD Type 1. A junior data engineer noticed a folder named '_change_data' in the table directory, and wants to understand what this folder is used for. Which of the following describes the purpose of this folder? Select one:

- **A.** Optimized Writes feature is enabled on the table. The '_change_data' folder is the location where the optimized data is stored
- **B.** All SCD Type 1 tables have the '_change_data' folder to track the updates applied on the table's data.
- ✅ **C.** CDF feature is enabled on the table. The '_change_data' folder is the location where CDF data is stored
- **D.** The '_change_data' folder is the default directory to track the evolution in schema definition

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CDF feature is enabled on the table. The '_change_data' folder is the location where CDF data is stored

_change_data chứa bản ghi change data feed khi CDF ghi tệp thay đổi riêng. Sự hiện diện phản ánh ghi CDF, không chỉ do loại SCD.

#### Vì sao các phương án khác không phù hợp?

- **The '_change_data' folder is the default directory to track the evolution in schema definition**: Đổi schema được ghi trong siêu dữ liệu giao dịch, không phải thư mục hàng thay đổi này.
- **All SCD Type 1 tables have the '_change_data' folder to track the updates applied on the table's data.**: SCD Type 1 không tự bật CDF.
- **Optimized Writes feature is enabled on the table. The '_change_data' folder is the location where the optimized data is stored**: Optimized write không dùng _change_data làm thư mục đầu ra thông thường.

**Tham khảo:**

- [Use Delta Lake change data feed](https://docs.databricks.com/aws/en/delta/delta-change-data-feed)

</details>


---

## Q521 · single choice · — not answered

A data engineer wants to optimize the following join operation by allowing the smaller dataFrame to be sent to all executor nodes in the cluster: largeDF.join(smallerDF, ["key"], "inner") Which of the following functions can be used to mark a dataFrame as small enough to fit in memory on all executors ? Select one:

- **A.** pyspark.sql.functions.explode
- **B.** pyspark.sql.functions.shuffle
- ✅ **C.** pyspark.sql.functions.broadcast
- **D.** pyspark.sql.functions.distribute

**Answer:** C

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** pyspark.sql.functions.broadcast

pyspark.sql.functions.broadcast đánh dấu DataFrame nhỏ để join broadcast. Executor dùng bản sao lookup cục bộ thay vì shuffle cả hai đầu vào.

#### Vì sao các phương án khác không phù hợp?

- **pyspark.sql.functions.shuffle**: shuffle không đánh dấu DataFrame làm đầu vào join broadcast.
- **pyspark.sql.functions.explode**: explode mở mảng hoặc map thành hàng.
- **pyspark.sql.functions.distribute**: distribute không phải hàm gợi ý broadcast PySpark.

**Tham khảo:**

- [Spark SQL performance tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html)

</details>


---

## Q522 · single choice · — not answered

A data engineer wants to store passwords securely in a Unity Catalog managed table. They need to hash user passwords using SHA2(password, 256) before storing them. To ensure proper storage, the engineer must also set a constraint on the column length to accommodate the full hash value. The engineer tests hashing the passwords "spark123" and "ApacheSpark111". What will the engineer notice about the resulting hash lengths? Select one:

- ✅ **A.** Both hashes will have the same length, regardless of input size
- **B.** The hash of "spark123" will be shorter than the hash of "ApacheSpark111"
- **C.** The hash of "ApacheSpark111" will be shorter than the hash of "spark123"
- **D.** Both hashes will have the same length because hash length depends on the number of numeric characters

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Both hashes will have the same length, regardless of input size

SHA2 256 bit trả digest kích thước cố định, biểu diễn bằng 64 ký tự hex. Vì vậy hai đầu vào có hash dài bằng nhau.

#### Vì sao các phương án khác không phù hợp?

- **The hash of "spark123" will be shorter than the hash of "ApacheSpark111"**: Đầu vào ngắn không làm digest SHA-256 ngắn hơn.
- **Both hashes will have the same length because hash length depends on the number of numeric characters**: Số ký tự số không quyết định độ dài digest.
- **The hash of "ApacheSpark111" will be shorter than the hash of "spark123"**: Đầu vào dài cũng không làm digest ngắn hơn.

**Tham khảo:**

- [sha2 function](https://docs.databricks.com/aws/en/sql/language-manual/functions/sha2)

</details>


---

## Q523 · single choice · — not answered

A data engineer is testing a transformation pipeline that adds a new column to an existing DataFrame. They want to ensure the resulting DataFrame matches the expected output. Which of the following functions can a data engineer use to verify equality? Select one:

- **A.** verifyEquality(actual_df, expected_df)
- **B.** assertEqual(actual_df, expected_df)
- **C.** assert(actual_df = expected_df)
- ✅ **D.** assertDataFrameEqual(actual_df, expected_df)

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** assertDataFrameEqual(actual_df, expected_df)

assertDataFrameEqual là hàm hỗ trợ chuyên dụng PySpark so sánh DataFrame thực tế và kỳ vọng. Cấu hình thứ tự hàng và sai số số học theo ý nghĩa bằng nhau của kiểm thử.

#### Vì sao các phương án khác không phù hợp?

- **assert(actual_df = expected_df)**: Cú pháp dùng phép gán thay vì kiểm tra DataFrame bằng nhau hợp lệ.
- **verifyEquality(actual_df, expected_df)**: verifyEquality không phải hàm kiểm thử PySpark được tài liệu nêu.
- **assertEqual(actual_df, expected_df)**: assertEqual tổng quát không phải API chuyên so sánh DataFrame phân tán.

**Tham khảo:**

- [assertDataFrameEqual](https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.testing.assertDataFrameEqual.html)

</details>


---

## Q524 · single choice · — not answered

A scheduled job failed due to an upstream data source issue. After resolving the issue, the data engineer wants to use the Jobs API to trigger the same job again without waiting for its next scheduled run. Which of the following REST API calls achieves this requirement? Select one:

- ✅ **A.** Send POST request to the endpoint '/api/2.2/jobs/run-now'
- **B.** Send POST request to the endpoint '/api/2.2/jobs/start'
- **C.** Send GET request to the endpoint '/api/2.2/jobs/run'
- **D.** Send POST request to the endpoint '/api/2.2/jobs/run'

**Answer:** A

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Send POST request to the endpoint '/api/2.2/jobs/run-now'

POST /api/2.2/jobs/run-now bắt đầu lần chạy mới của job đã lưu. Cung cấp job_id và tham số chạy cần thiết.

#### Vì sao các phương án khác không phù hợp?

- **Send GET request to the endpoint '/api/2.2/jobs/run'**: GET không kích hoạt job đã lưu và /jobs/run không phải endpoint này.
- **Send POST request to the endpoint '/api/2.2/jobs/start'**: jobs/start không phải endpoint run-now được tài liệu nêu.
- **Send POST request to the endpoint '/api/2.2/jobs/run'**: jobs/run không phải endpoint kích hoạt job đã lưu được tài liệu nêu.

**Tham khảo:**

- [Trigger a new job run](https://docs.databricks.com/api/workspace/jobs/runnow)

</details>


---

## Q525 · single choice · — not answered

The data engineering team has the following query for processing customers' requests to be forgotten: DELETE FROM customers WHERE customer_id IN (SELECT customer_id FROM delete_requests) Which statement describes the results of executing this query? Select one:

- **A.** The identified will be deleted from the both customers and delete_requests tables, and their associated data files will be permanently purged from the tables directories.
- **B.** The identified records will be deleted from the customers tables, and their associated data files will be permanently purged from the table directory.
- **C.** The identified records will be deleted from both customers and delete_requests tables, but they will still be accessible in the table history until VACUUM commands are run.
- ✅ **D.** The identified records will be deleted from the customers table, but they will still be accessible in the table history until a VACUUM command is run.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** The identified records will be deleted from the customers table, but they will still be accessible in the table history until a VACUUM command is run.

DELETE xóa hàng khớp khỏi phiên bản customers hiện tại; phiên bản cũ có thể giữ chúng đến khi hết lưu giữ và dọn tệp lịch sử. Bảng delete_requests chỉ được đọc.

#### Vì sao các phương án khác không phù hợp?

- **The identified records will be deleted from the customers tables, and their associated data files will be permanently purged from the table directory.**: DELETE là xóa logic có giao dịch, không xóa vĩnh viễn tệp tức thì.
- **The identified records will be deleted from both customers and delete_requests tables, but they will still be accessible in the table history until VACUUM commands are run.**: Truy vấn con không xóa hàng khỏi delete_requests.
- **The identified will be deleted from the both customers and delete_requests tables, and their associated data files will be permanently purged from the tables directories.**: Không xảy ra xóa cả hai bảng hay dọn vật lý tức thì.

**Tham khảo:**

- [Work with table history](https://docs.databricks.com/aws/en/delta/history)

</details>


---

## Q526 · single choice · — not answered

Which of the following commands can a data engineer use to create a Delta table "orders" with Automatic Liquid Clustering enabled? Select one:

- **A.** CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY (Id, updated, value);
- ✅ **B.** CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY AUTO;
- **C.** CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY NONE;
- **D.** CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY ALL;

**Answer:** B

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY AUTO;

CLUSTER BY AUTO bật liquid clustering tự động trên bảng Delta managed đủ điều kiện. Databricks chọn khóa phân cụm theo mẫu tải thay vì yêu cầu cột tường minh.

#### Vì sao các phương án khác không phù hợp?

- **CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY (Id, updated, value);**: Danh sách cột tường minh bật phân cụm thủ công thay vì tự chọn khóa.
- **CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY ALL;**: CLUSTER BY ALL không phải mệnh đề liquid clustering tự động.
- **CREATE OR REPLACE TABLE orders(id int, updated date, value double) CLUSTER BY NONE;**: CLUSTER BY NONE tắt phân cụm thay vì bật chọn tự động.

**Tham khảo:**

- [Use liquid clustering](https://docs.databricks.com/aws/en/delta/clustering)

</details>


---

## Q527 · single choice · — not answered

A data engineer has left the organization. The data team needs to transfer ownership of the data engineer’s Delta tables to a new data engineer. The new data engineer is the lead engineer on the data team. Assuming the original data engineer no longer has access, which of the following individuals must be the one to transfer ownership of the Delta tables in Data Explorer?

- **A.** This transfer is not possible
- **B.** New lead data engineer
- **C.** Original data engineer
- **D.** Databricks account representative
- ✅ **E.** Workspace administrator

**Answer:** E

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Workspace administrator

Nguồn giả định workspace administrator khôi phục quyền sở hữu, phù hợp một số ngữ cảnh kiểm soát bảng cũ. Unity Catalog cho phép quản lý sở hữu qua chủ liên quan, quyền MANAGE hoặc quản trị metastore; riêng vai trò workspace không có quyền tuyệt đối.

#### Vì sao các phương án khác không phù hợp?

- **Databricks account representative**: Đại diện tài khoản không tự có quyền trên bảng.
- **This transfer is not possible**: Chủ hoặc quản trị viên đủ quyền có thể chuyển sở hữu.
- **New lead data engineer**: Chức danh lead engineer tự nó không cấp quyền catalog.
- **Original data engineer**: Chủ cũ không còn truy cập không phải danh tính duy nhất có thể có quyền.

**Tham khảo:**

- [Manage privileges in Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges)

**Cần xem lại:** Đáp án Workspace administrator phụ thuộc mô hình quản trị chưa được nêu. Cách xử lý: Bổ sung phạm vi legacy Hive-metastore table ACL nếu giữ đáp án Workspace administrator. Nếu muốn hỏi Unity Catalog, phải viết riêng điều kiện quyền phù hợp; không gộp lại với câu 42.

</details>


---

## Q528 · single choice · — not answered

Which statement regarding the relationship between Silver tables and Bronze tables is always true?

- **A.** Silver tables contain more data than Bronze tables.
- **B.** Silver tables contain a less refined, less clean view of data than Bronze data.
- **C.** Silver tables contain less data than Bronze tables.
- ✅ **D.** Silver tables contain aggregates while Bronze data is unaggregated.

**Answer:** D

<details><summary>Explanation</summary>

**Nội dung đáp án theo khóa nguồn:** Silver tables contain aggregates while Bronze data is unaggregated.

Đáp án tổng hợp được cung cấp không luôn đúng: Silver thường kiểm tra và làm sạch, còn Gold thường chứa tổng hợp. Không phát biểu nào trong các lựa chọn luôn đúng.

#### Vì sao các phương án khác không phù hợp?

- **Silver tables contain a less refined, less clean view of data than Bronze data.**: Silver tinh chế hơn Bronze, không phải kém hơn.
- **Silver tables contain more data than Bronze tables.**: Làm giàu hoặc mở rộng có thể tăng hàng nhưng không đảm bảo.
- **Silver tables contain less data than Bronze tables.**: Khử trùng có thể giảm hàng nhưng Silver không luôn nhỏ hơn.

**Tham khảo:**

- [What is the medallion lakehouse architecture?](https://docs.databricks.com/gcp/en/lakehouse/medallion)

**Cần xem lại:** Câu hỏi luôn đúng nhưng khóa chọn Silver luôn có tổng hợp; điều này không bắt buộc, và các lựa chọn còn lại cũng không luôn đúng. Cách xử lý: Thay một lựa chọn bằng Silver chứa dữ liệu sạch và tinh lọc hơn Bronze rồi chọn lựa chọn đó, hoặc ngừng sử dụng câu này. Không đổi sang A/C/D hiện có; giữ nguyên khóa nguồn cho tới khi duyệt sửa nội dung.

</details>
