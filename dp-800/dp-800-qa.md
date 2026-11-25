# DP-800 — DP-800: Developing AI-Enabled Database Solutions: 141 questions

Source: tstudy.vercel.app (T-Study — data của ThinhNH39). Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).


---

## Q1 · pick 3

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

HOTSPOT  
You need to meet the development requirements for the FeedbackJson column.  
How should you complete the Transact-SQL query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```sql  
SELECT
  f.FeedbackId,
  f.VehicleId,
  [Dropdown 1] ,
  EDIT_DISTANCE_SIMILARITY(
    JSON_VALUE(f.FeedbackJson, '$.text'),
    @KnownIssueDescription
  ) AS SimilarityScore  
FROM
  dbo.CustomerFeedback f  
WHERE
  [Dropdown 2]  
ORDER BY
  [Dropdown 3]  
DESC;  
```

Each dropdown offers the same six options.

- **A.** CONTAINS(FeedbackJson, @Keyword)
- **B.** EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3
- **C.** EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3
- **D.** JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText
- ✅ **E.** JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText
- **F.** SimilarityScore
- ✅ **G.** CONTAINS(FeedbackJson, @Keyword)
- **H.** EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3
- **I.** EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3
- **J.** JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText
- **K.** JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText
- **L.** SimilarityScore
- **M.** CONTAINS(FeedbackJson, @Keyword)
- **N.** EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3
- **O.** EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3
- **P.** JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText
- **Q.** JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText
- ✅ **R.** SimilarityScore

**Answer:** E, G, R

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (SELECT list) → JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText; Dropdown 2 (WHERE) → CONTAINS(FeedbackJson, @Keyword); Dropdown 3 (ORDER BY) → SimilarityScore)

#### Corrected answer (graded)

Dropdown 1: JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText
Dropdown 2: CONTAINS(FeedbackJson, @Keyword)
Dropdown 3: SimilarityScore

> **💡 Why the source key was changed**
> The case study says FeedbackJson has a full-text index and asks to "filter rows where the JSON text contains a keyword". CONTAINS is the full-text predicate that tests whether the text contains a word. EDIT_DISTANCE(...) < 3 compares the whole feedback text with the keyword and only matches texts within two edits of it, so it cannot find a keyword inside a sentence. Dropdowns 1 and 3 are unchanged.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/queries/contains-transact-sql

#### Answer from the source

Original answer key: Dropdown 1 JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText; Dropdown 2 EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3; Dropdown 3 SimilarityScore.

🖼 [Original answer area · Question 1](https://tstudy.vercel.app/content/dp-800/q001-answer.png)

</details>


---

## Q2 · pick 2

DRAG DROP  
You have an Azure SQL database that contains a table named dbo.Orders.  
You have an application that calls a stored procedure named dbo.usp_CreateOrder to insert rows into dbo.Orders.  
When an insert fails, the application receives inconsistent error details.  
You need to implement error handling to ensure that any failures inside the procedure abort the transaction and return a consistent error to the caller.  
How should you complete the stored procedure? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE OR ALTER PROCEDURE dbo.usp_CreateOrder
    @CustomerId int,
    @Amount decimal(10,2),
    @OrderId int OUTPUT  
AS  
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        BEGIN TRANSACTION;
        INSERT INTO dbo.Orders(CustomerId, Amount, CreatedAt)
        VALUES (@CustomerId, @Amount, SYSUTCDATETIME());
        [Target 1] ;
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        [Target 2] ;
        THROW;
    END CATCH  
END  
```

- **A.** BEGIN CATCH
- ✅ **B.** IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
- **C.** RAISERROR('CreateOrder failed', 16, 1)
- **D.** ROLLBACK TRANSACTION
- ✅ **E.** SET @OrderId = SCOPE_IDENTITY()
- **F.** THROW

**Answer:** E, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (after the INSERT) → SET @OrderId = SCOPE_IDENTITY(); Target 2 (inside BEGIN CATCH) → IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION)

#### Answer from the source

Target 1: SET @OrderId = SCOPE_IDENTITY()
Target 2: IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION

🖼 [Original answer area · Question 2](https://tstudy.vercel.app/content/dp-800/q002-answer.png)

</details>


---

## Q3 · single choice

Your team is developing an Azure SQL dataset solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.  
You need to disable the GitHub Copilot repository-level instructions for yourself without affecting other users.  
What should you do?

- ✅ **A.** From Visual Studio Code, modify your GitHub Copilot Chat user settings.
- **B.** Add a --debug flag when you start the GitHub Copilot Chat extension.
- **C.** Delete .github/copilot-instructions.md.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. From Visual Studio Code, modify your GitHub Copilot Chat user settings.

Community vote distribution: A 100%

#### Explanation

Modifying user settings in Visual Studio Code applies configuration changes only to your local environment, ensuring other team members remain unaffected. Deleting the .github/copilot-instructions.md file would remove the instructions for everyone, violating the requirement to not affect other users.

</details>


---

## Q4 · single choice

You have an Azure SQL database that contains the following SQL graph tables:  
A NODE table named dbo.Person  
An EDGE table named dbo.Knows  
Each row in dbo.Person contains the following columns:  
PersonID (int)  
DisplayName (nvarchar(100))  
You need to use a MATCH operator and exactly two directed Knows relationships to return the PersonID and DisplayName of people that are reachable from the person identified by an input parameter named @StartPersonId.  
Which Transact-SQL query should you use?

#### Option A

```sql  
SELECT p2.PersonId, @StartPersonId  
FROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3  
WHERE p1.DisplayName = p2.DisplayName
  AND MATCH(p1-(k1)->p2-(k2)->p3);  
```

#### Option B

```sql  
SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1  
JOIN dbo.Knows AS k1 ON 1 = 1  
JOIN dbo.Person AS p2 ON 1 = 1  
JOIN dbo.Knows AS k2 ON 1 = 1  
JOIN dbo.Person AS p3 ON 1 = 1  
WHERE p1.PersonId = @StartPersonId
  AND MATCH(p3<-(k2)-p2<-(k1)-p1);  
```

#### Option C

```sql  
SELECT p3.PersonId, p3.DisplayName  
FROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3  
WHERE p1.PersonId = @StartPersonId
  AND MATCH(p1-(k1)->p2)   AND MATCH(p2-(k2)->p3);  
```

#### Option D

```sql  
SELECT p3.PersonId, p3.DisplayName  
FROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3  
WHERE p1.PersonId = @StartPersonId
  AND MATCH(p1-(k1)->p2-(k2)->p3);  
```

- **A.** Option A
- **B.** Option B
- **C.** Option C
- ✅ **D.** Option D

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. The query that filters p1.PersonId = @StartPersonId and uses MATCH(p1-(k1)->p2-(k2)->p3).

Community vote distribution: D 100%

</details>


---

## Q5 · single choice

You have a SQL database in Microsoft Fabric that contains a column named Payload. Payload stores customer data in JSON documents that have the following format.

```json  
{  
"date": "2020-01-25",  
"customer_email": "user@contoso.com",  
...  
}  
```

Data analysis shows that some customers have subaddressing in their email address, for example, user1+promo@contoso.com.  
You need to return a normalized email value that removes the subaddressing, for example, user1 +promo@contoso.com must be normalized to user1@contoso.com.  
Which Transact-SQL expression should you use?

- **A.** REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\+.*$', '')
- **B.** REGEXP_SUBSTR(JSON_VALUE(Payload, '$.customer_email'), '^[^+]+@.*$=')
- ✅ **C.** REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\+.*@', '@')
- **D.** REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\+.*', '')

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\+.*@', '@')

Community vote distribution: A 50%, C 50% (A is labeled "Most Voted", but the answer key is C)

> **ℹ️ Check against the example**
> Applying C to user1+promo@contoso.com replaces '+promo@' with '@' and returns user1@contoso.com. Options A and D remove everything from '+' to the end of the string and return user1, which drops the domain.

</details>


---

## Q6 · pick 3

DRAG DROP  
You have an Azure SQL database that contains a table named dbo.Orders. dbo.Orders contains a column named CreateDate that stores order creation dates.  
You need to create a stored procedure that filters Orders by CreateDate for a single calendar day. The solution must be SARGable.  
How should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE PROCEDURE dbo.usp_SearchOrders
  @StartDate date  
AS  
BEGIN
    SET NOCOUNT ON;
    DECLARE @EndDate date;
    SET @EndDate = [Target 1]
    SELECT o.CreateDate,
           o.OrderId,
           o.ShipDate
    FROM   dbo.Orders AS o
    WHERE  o.CreateDate >= [Target 2]
      AND  o.CreateDate < [Target 3] ;  
END;  
GO  
```

- ✅ **A.** @EndDate
- ✅ **B.** @StartDate
- **C.** CONVERT(char(10), CreateDate, 121)
- **D.** CONVERT(date, @StartDate)
- ✅ **E.** DATEADD(day, 1, @StartDate)
- **F.** GETDATE()

**Answer:** E, B, A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (SET @EndDate =) → DATEADD(day, 1, @StartDate); Target 2 (o.CreateDate >=) → @StartDate; Target 3 (o.CreateDate <) → @EndDate)

#### Answer from the source

Target 1: DATEADD(day, 1, @StartDate)
Target 2: @StartDate
Target 3: @EndDate

🖼 [Original answer area · Question 6](https://tstudy.vercel.app/content/dp-800/q006-answer.png)

</details>


---

## Q7 · single choice

You have an Azure SQL database.  
You need to create a scalar user-defined function (UDF) that returns the number of whole years between an input parameter named @OrderDate and the current date/time as a single positive integer. The function must be created in Azure SQL Database.  
You write the following code.

```sql  
01 CREATE FUNCTION dbo.ufnYearsSinceOrder (@OrderDate datetime2)  
02 RETURNS int  
03 AS  
04 BEGIN  
05  
06 END  
```

What should you insert at line 05?

- **A.** RETURN DATEDIFF(year, GETDATE(), @OrderDate);
- **B.** DATEDIFF(month, @orderdate, GETDATE()) / 12
- **C.** DATEPART(year, GETDATE()) - DATEPART(year, @orderdate)
- ✅ **D.** RETURN DATEDIFF(year, @OrderDate, GETDATE());

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. RETURN DATEDIFF(year, @OrderDate, GETDATE());

Community vote distribution: D 100%

</details>


---

## Q8 · single choice

You have an Azure SQL database.  
You deploy Data API builder (DAB) to Azure Container Apps by using the mcr.microsoft.com/azure-databases/data-api-builder:latest image.  
You have the following Container Apps secrets:  
MSSQL_CONNECTION_STRING that maps to the SQL connection string  
DAB_CONFIG_BASE64 that maps to the DAB configuration  
You need to initialize the DAB configuration to read the SQL connection string.  
Which command should you run?

- **A.** dab init --database-type mssql --connection-string "secretref:DAB_CONFIG_BASE64" --host-mode Production --config dab-config.json
- ✅ **B.** dab init --database-type mssql --connection-string "@env('MSSQL_CONNECTION_STRING')" --host-mode Production --config dab-config.json
- **C.** dab init --database-type mssql --connection-string "secretref:mssql-connection-string" --host-mode Production --config dab-config.json
- **D.** dab init --database-type mssql --connection-string "@env('DAB_CONFIG_BASE64')" --host-mode Production --config dab-config.json

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. dab init --database-type mssql --connection-string "@env('MSSQL_CONNECTION_STRING')" --host-mode Production --config dab-config.json

</details>


---

## Q9 · single choice

You have a SQL database in Microsoft Fabric that contains a nvarchar (max) column named MessageText. An ID is always contained within the first paragraph of MessageText.  
You need to write a Transact-SQL query that uses REGEXP_SUBSTR to extract the ID from MessageText.  
What should you include in the query?

- **A.** Apply STRING_ESCAPE(MessageText, 'json') before calling REGEXP_SUBSTR.
- ✅ **B.** Cast MessageText to nvarchar (4000) before calling REGEXP_SUBSTR.
- **C.** Add a COLLATE Latin1_General_CS_AS clause to MessageText before calling REGEXP_SUBSTR.
- **D.** Run TRY_CONVERT(varchar(max), MessageText) before calling REGEXP_SUBSTR.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. Cast MessageText to nvarchar (4000) before calling REGEXP_SUBSTR.

Community vote distribution: B 100%

> **ℹ️ Other source**
> Another version of this question marks A (STRING_ESCAPE). Microsoft documents that REGEXP_* functions accept varchar(max)/nvarchar(max) input only up to 2 MB; casting to nvarchar(4000) keeps the first paragraph that contains the ID within that limit, which supports B.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/functions/regular-expressions-functions-transact-sql

</details>


---

## Q10 · single choice

You have an Azure SQL database that contains database-level Data Definition Language (DDL) triggers, including a trigger named ddl_Audit.  
You need to prevent ddl_Audit from firing during the next deployment. The trigger object must remain in place.  
Which Transact-SQL statement should you use?

- **A.** ALTER TRIGGER
- **B.** ALTER DATABASE
- **C.** ALTER SERVER AUDIT SPECIFICATION
- ✅ **D.** DISABLE TRIGGER
- **E.** ALTER DATABASE AUDIT SPECIFICATION

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. DISABLE TRIGGER

</details>


---

## Q11 · single choice

Your development team uses GitHub Copilot Chat in Microsoft SQL Server Management Studio (SSMS) to generate and run Transact-SQL queries against an Azure SQL database named DB1. DB1 contains tables that store sensitive customer data.  
You need to ensure that any Transact-SQL queries that run from GitHub Copilot Chat in SSMS are restricted by the same permissions as the developer’s database login.  
What prevents the GitHub Copilot Chat-run queries from accessing data beyond the developer’s access?

- **A.** GitHub Copilot Chat runs queries in a read-only sandbox that is isolated from production database permissions.
- ✅ **B.** GitHub Copilot Chat runs queries by using the developer’s database identity and permissions.
- **C.** GitHub Copilot Chat filters query results on the client side to remove rows the developer is unauthorized to see.
- **D.** GitHub Copilot Chat uses different row-level security (RLS) policies than the developer.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. GitHub Copilot Chat runs queries by using the developer’s database identity and permissions.

</details>


---

## Q12 · pick 2

You have an Azure SQL database named AdventureWorksDB that contains a table named dbo.Employee.  
You have a C# Azure Functions app that uses an HTTP-triggered function with an Azure SQL input binding to query dbo.Employee.  
You are adding a second function that will react to row changes in dbo.Employee and write structured logs.  
You need to configure AdventureWorksDB and the app to meet the following requirements:  
Changes to dbo.Employee must trigger the new function within five seconds.  
Each invocation must process no more than 100 changes.  
Which two database configurations should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.

- **A.** Create an AFTER trigger on dbo.Employee for Data Manipulation Language (DML).
- **B.** Set Sql_Trigger_MaxBatchSize to 100.
- ✅ **C.** Enable change tracking on the dbo.Employee table.
- ✅ **D.** Enable change tracking at the database level.
- **E.** Set Sql_Trigger_PollingIntervalMs to 5000.
- **F.** Enable change data capture (CDC) for dbo.Employee table changes.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. Enable change tracking on the dbo.Employee table.
D. Enable change tracking at the database level.

Community vote distribution: CD 100%

</details>


---

## Q13 · pick 3

DRAG DROP  
You have a Microsoft SQL Server 2025 database that contains a table named dbo.CustomerMessages. dbo.CustomerMessages contains two columns named MessageID (int) and MessageRaw (nvarchar(max)).  
MessageRaw can contain a phone number in multiple formats, and some rows do NOT contain a phone number.  
You need to write a single SELECT query that meets the following requirements:  
The query must return MessageID, RawNumber, DigitsOnly, and PhoneStatus.  
RawNumber must contain the first substring that matches a phone-number pattern, or NULL if no match exists.  
DigitsOnly must remove all non-digit characters from RawNumber, or return NULL.  
PhoneStatus must return valid when a phone number exists in MessageRaw, otherwise return Missing.  
How should you complete the Transact-SQL query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
SELECT
  MessageID,
  [Target 1] MessageRaw, '\d{3}[)\-\s]*\d{3}[\-\s]*\d{4}' ) AS RawNumber,
  [Target 2] MessageRaw, '\d{3}[)\-\s]*\d{3}[\-\s]*\d{4}' ),'\D', '') AS DigitsOnly,
  CASE
    WHEN [Target 3] MessageRaw, '\d{3}[)\-\s]*\d{3}[\-\s]*\d{4}') = 1
    THEN 'Valid'
    ELSE 'Missing'
  END AS PhoneStatus  
FROM dbo.CustomerMessages;  
```

- **A.** REGEXP_COUNT(
- **B.** REGEXP_INSTR(
- ✅ **C.** REGEXP_LIKE(
- ✅ **D.** REGEXP_REPLACE( REGEXP_SUBSTR(
- ✅ **E.** REGEXP_SUBSTR(
- **F.** STRING_SIMILARITY(

**Answer:** E, D, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (RawNumber) → REGEXP_SUBSTR(; Target 2 (DigitsOnly) → REGEXP_REPLACE( REGEXP_SUBSTR(; Target 3 (PhoneStatus WHEN) → REGEXP_LIKE()

#### Answer from the source

Target 1: REGEXP_SUBSTR(
Target 2: REGEXP_REPLACE( REGEXP_SUBSTR(
Target 3: REGEXP_LIKE(

🖼 [Original answer area · Question 13](https://tstudy.vercel.app/content/dp-800/q013-answer.png)

</details>


---

## Q14 · single choice

You have an Azure SQL database that contains a table named Rooms. Rooms was created by using the following Transact-SQL statement.

```sql  
CREATE TABLE Rooms  
(
    RoomID int PRIMARY KEY,
    Owner nvarchar(100),
    Capacity int  
);  
```

You discover that some records in the Rooms table contain NULL values for the Owner field.  
You need to ensure that all future records have a value for the Owner field.  
What should you add?

- **A.** a foreign key
- ✅ **B.** a check constraint
- **C.** a nonclustered index
- **D.** a unique constraint

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. a check constraint

</details>


---

## Q15 · pick 2

DRAG DROP  
You have a SQL database in Microsoft Fabric that contains a table named WebSite.Logs. WebSite.Logs stores application telemetry data.  
WebSite.Logs contains a nvarchar (max) column named log that stores JSON documents.  
You have a daily report that filters by the $.severity JSON property and returns LogId, LogDateTime, and log. The report frequently causes full table scans.  
You need to modify WebSite.Logs to support efficient filtering by $.severity and avoid key lookups for the columns returned by the report.  
How should you complete the Transact-SQL code to avoid full table scans? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
ALTER TABLE WebSite.Logs  
ADD severity [Target 1] ;  
GO  
CREATE INDEX ix_severity  
ON WebSite.Logs(severity)  
[Target 2] ;  
GO  
```

- **A.** AS JSON_QUERY([log], '$.severity')
- ✅ **B.** AS JSON_VALUE([log], '$.severity') PERSISTED
- **C.** INCLUDE (log)
- ✅ **D.** INCLUDE (LogId, LogDateTime, [log])

**Answer:** B, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (ADD severity) → AS JSON_VALUE([log], '$.severity') PERSISTED; Target 2 (after ON WebSite.Logs(severity)) → INCLUDE (LogId, LogDateTime, [log]))

#### Answer from the source

Target 1: AS JSON_VALUE([log], '$.severity') PERSISTED
Target 2: INCLUDE (LogId, LogDateTime, [log])

🖼 [Original answer area · Question 15](https://tstudy.vercel.app/content/dp-800/q015-answer.png)

</details>


---

## Q16 · pick 2

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

HOTSPOT  
You need to create a solution that meets the development requirements for retrieving the patient lists.  
How should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE PROCEDURE dbo.GetActivePatients  
AS  
BEGIN
  SET NOCOUNT ON;
  SELECT p.Name
  FROM dbo.Patients AS p
  [Dropdown 1] (
    SELECT PatientId
    FROM dbo.Procedures AS pr
    [Dropdown 2]
      AND pr.TransactionDate >= DATEADD(DAY, -30, SYSUTCDATETIME())
  );  
END;  
```

- ✅ **A.** WHERE EXISTS
- **B.** WHERE NOT EXISTS
- **C.** WHERE p.PatienId IN
- **D.** WHERE p.PatienId NOT IN
- **E.** HAVING p.PatientId = pr.PatientId
- **F.** HAVING p.TransactionId = pr.TransactionId
- ✅ **G.** WHERE p.PatientId = pr.PatientId
- **H.** WHERE p.TransactionId = pr.TransactionId

**Answer:** A, G

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 → WHERE EXISTS; Dropdown 2 → WHERE p.PatientId = pr.PatientId)

#### Corrected answer (graded)

Dropdown 1: WHERE EXISTS
Dropdown 2: WHERE p.PatientId = pr.PatientId

> **💡 Why the source key was changed**
> The subquery is correlated to the outer row (WHERE p.PatientId = pr.PatientId), which is the EXISTS pattern: it returns each patient once as soon as one matching procedure in the last 30 days is found. WHERE p.PatientId IN with the same correlated subquery returns the same rows, but the correlation is then redundant. Another version of this question also marks WHERE EXISTS.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/language-elements/exists-transact-sql

#### Answers from the sources

Original answer key: Dropdown 1 = WHERE p.PatienId IN; Dropdown 2 = WHERE p.PatientId = pr.PatientId.

Other version: Dropdown 1 = WHERE EXISTS; Dropdown 2 = WHERE pr.PatientId = p.PatientId.

🖼 [Original answer area · Question 16](https://tstudy.vercel.app/content/dp-800/q016-answer.png)

</details>


---

## Q17 · single choice

You have an Azure SQL database named ToDo that contains a table named dbo.ToDo.  
Your company plans to develop an Azure Functions app to run whenever the rows in dbo.ToDo change. The app will process INSERT, UPDATE, and DELETE events by using the Azure SQL trigger binding.  
You need to configure ToDo to support the planned app.  
What should you do?

- ✅ **A.** Enable change tracking on ToDo and dbo.ToDo.
- **B.** On dbo.ToDo, create a Data Manipulation Language (DML) trigger that calls the Azure Functions HTTP endpoint.
- **C.** Enable change data capture (CDC) on ToDo and dbo.ToDo.
- **D.** On dbo.ToDo, create a Data Definition Language (DDL) trigger that calls the Azure Functions HTTP endpoint.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Enable change tracking on ToDo and dbo.ToDo.

Community vote distribution: A 100%

#### Explanation

The Azure Functions SQL trigger binding relies on the built-in Change Tracking feature of Azure SQL Database to detect row-level modifications.
You must enable Change Tracking at both the database level (for 'ToDo') and the table level (for 'dbo.ToDo') for the binding to function correctly.
This approach is distinct from Change Data Capture (CDC) or manual DML/DDL triggers, which are not utilized by this specific binding mechanism.

</details>


---

## Q18 · pick 3

DRAG DROP  
You have an Azure SQL database that contains a table named dbo.Customers. dbo.Customers contains the following columns:  
• CustomerId (int)(primary key)  
• ProfileJson (nvarchar(max))  
You have an application that returns phone numbers in a format of +000 000-000-0000. The phone numbers are stored in ProfileJson.  
You need to write a query that returns:  
• One row per customer  
• A PhoneNUmerals column that contains only the digits  
How should you complete the Transact-SQL query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
WITH PhoneCTE AS  
(
    SELECT DISTINCT
        c.CustomerId,
        [Target 1] AS PhoneRaw
    FROM dbo.Customers AS c  
)  
SELECT
    p.CustomerId,
    [Target 2] AS PhoneNUmerals  
FROM PhoneCTE AS p  
WHERE [Target 3] IS NOT NULL;  
```

- **A.** JSON_QUERY(c.ProfileJson, '$.contact.phone')
- ✅ **B.** JSON_VALUE(c.ProfileJson, '$.contact.phone')
- **C.** OPENJSON(c.ProfileJson, '$.contact.phone')
- ✅ **D.** p.PhoneRaw
- **E.** REGEXP_LIKE(p.PhoneRaw, '[^0-9]', '')
- ✅ **F.** REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', '')
- **G.** REGEXP_SUBSTR(p.PhoneRaw, '[0-9]+')

**Answer:** B, F, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (AS PhoneRaw) → JSON_VALUE(c.ProfileJson, '$.contact.phone'); Target 2 (AS PhoneNUmerals) → REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', ''); Target 3 (WHERE ... IS NOT NULL) → p.PhoneRaw)

#### Answer from the source

Target 1: JSON_VALUE(c.ProfileJson, '$.contact.phone')
Target 2: REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', '')
Target 3: p.PhoneRaw

🖼 [Original answer area · Question 18](https://tstudy.vercel.app/content/dp-800/q018-answer.png)

</details>


---

## Q19 · pick 2

DRAG DROP  
You have an Azure SQL database named SalesDB that supports an ecommerce application. SalesDB contains a table named dbo.Orders that has a clustered index on a column named OrderId.  
dbo.Orders receives continuous OLTP inserts and updates during business hours.  
Your analytics team runs hourly aggregate queries that scan dbo.Orders to calculate revenue trends for recent dates.  
You need to improve the performance of the hourly analytics queries without significantly affecting OLTP throughput. The solution must meet the following requirements:  
• Support near-real-time (NRT) analytics on the dbo.Orders table.  
• Reduce read time when retrieving analytical data from dbo.Orders.  
• Support indexing only rows that match a predicate, such as Active = 1.  
Which type of index should you use for each requirement? To answer, drag the appropriate index types to the correct requirements. Each index type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

- **A.** A clustered columnstore index
- **B.** A clustered rowstore index ordered by key columns
- ✅ **C.** A filtered nonclustered index with a WHERE predicate
- ✅ **D.** A nonclustered columnstore index on an existing rowstore table

**Answer:** D, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Support NRT analytics on dbo.Orders → A nonclustered columnstore index on an existing rowstore table; Reduce read time when retrieving analytical data → A filtered nonclustered index with a WHERE predicate; Index only rows that match a predicate → A filtered nonclustered index with a WHERE predicate)

#### Answer from the source

Support NRT analytics on dbo.Orders: A nonclustered columnstore index on an existing rowstore table
Reduce read time when retrieving analytical data: A filtered nonclustered index with a WHERE predicate
Index only rows that match a predicate: A filtered nonclustered index with a WHERE predicate

🖼 [Original answer area · Question 19](https://tstudy.vercel.app/content/dp-800/q019-answer.png)

</details>


---

## Q20 · pick 2

DRAG DROP  
You have an Azure SQL database that stores sales data and contains tables named Sales and Products. Sales contains three columns named SalesDate, ProductKey, and TotalSale,  
Sales is 10 TB and is loaded nightly by using a batch process. Most reporting queries scan large portions of Sales, filter on SalesDate or ProductKey, and use SUM() to aggregate TotalSale.  
Products is relatively small and is used primarily for point lookups and joins to Sales.  
You need to recommend which indexes to create to optimize the reporting queries. The solution must minimize storage requirements.  
Which type of index should you recommend for each table? To answer, drag the appropriate index types to the correct tables. Each index type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

- ✅ **A.** A clustered columnstore index
- **B.** A clustered rowstore index
- **C.** A nonclustered columnstore index
- ✅ **D.** A nonclustered rowstore index

**Answer:** A, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Sales → A clustered columnstore index; Products → A nonclustered rowstore index)

#### Answer from the source

Sales: A clustered columnstore index
Products: A nonclustered rowstore index

🖼 [Original answer area · Question 20](https://tstudy.vercel.app/content/dp-800/q020-answer.png)

</details>


---

## Q21 · pick 3

HOTSPOT  
You have an Azure SQL database that contains a table named dbo.SupportTickets. dbo.SupportTickets contains a JSON column named Payload and a datetime column CreatedAt.  
You need to generate a report for the last seven days that meets the following requirements:  
• Returns exactly one row per customer per day  
• For each customer and day, returns the earliest ticket  
• Includes the customer ID stored in Payload  
How should you complete the Transact-SQL query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```sql  
WITH TicketRanks AS  
(
    SELECT
        t.TicketId,
        CAST(t.CreatedAt AS date) AS TicketDate,
        [Dropdown 1] (t.Payload, '$.customer.id') AS CustomerId,
        t.CreatedAt,
        [Dropdown 2] () OVER
        (
            PARTITION BY
                CAST(t.CreatedAt AS date),
                JSON_VALUE(t.Payload, '$.customer.id')
            ORDER BY t.CreatedAt ASC
        ) AS rn
    FROM dbo.SupportTickets AS t
    WHERE t.CreatedAt >= DATEADD(day, -7, SYSUTCDATETIME())  
)  
SELECT
    TicketDate,
    CustomerId,
    TicketId,
    CreatedAt  
FROM TicketRanks  
WHERE rn = [Dropdown 3]  
ORDER BY TicketDate, CustomerId;  
```

- **A.** DENSE_RANK
- ✅ **B.** JSON_VALUE
- **C.** OPENJSON
- **D.** ROW_NUMBER
- **E.** DENSE_RANK
- **F.** JSON_VALUE
- **G.** OPENJSON
- ✅ **H.** ROW_NUMBER
- ✅ **I.** 1
- **J.** 7
- **K.** DATEDIFF(day, -7, SYSUTCDATETIME())

**Answer:** B, H, I

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 → JSON_VALUE; Dropdown 2 → ROW_NUMBER; Dropdown 3 → 1)

#### Answer from the source

Dropdown 1: JSON_VALUE
Dropdown 2: ROW_NUMBER
Dropdown 3: 1

🖼 [Original answer area · Question 21](https://tstudy.vercel.app/content/dp-800/q021-answer.png)

</details>


---

## Q22 · single choice

You are developing an Azure SQL database solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.  
You need to ensure that GitHub Copilot Chat can call the hosted GitHub MCP Server tools by using OAuth. The MCP server configuration must be scoped to the repository.  
What should you do in Visual Studio Code?

- **A.** Create a personal access token (PAT) that has the repo scope and store the PAT in the .vscode\mcp.json file as the Authorization header.
- ✅ **B.** From the Command Palette, enter MCP: add server, select HTTP (HTTP or Server-Sent Events), enter https://api.githubcopilot.com/mcp/, and then save the configuration to the workspace settings.
- **C.** From the Command Palette, enter MCP: add server, select HTTP (HTTP or Server-Sent Events), enter https://api.githubcopilot.com/mcp/, and then save the configuration to the user settings.
- **D.** Create a personal access token (PAT) that has the repo scope and store the PAT in the .github\mcp.json file as the Authorization header.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. From the Command Palette, enter MCP: add server, select HTTP (HTTP or Server-Sent Events), enter https://api.githubcopilot.com/mcp/, and then save the configuration to the workspace settings.

Community vote distribution: B 100%

</details>


---

## Q23 · pick 2

HOTSPOT  
You have an Azure SQL database that contains a table named Table1. Table1 contains 25,000,000 rows of data and a datetime2 column named DateKey. The data in Table1 spans the years 2020 through 2021.  
You need to partition the data in Table1 by year. The solution must minimize how long it takes to rebuild or reindex the table.  
How should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE PARTITION FUNCTION PartitionByYear (datetime2)  
AS [Dropdown 1]  
FOR VALUES ( [Dropdown 2] );  
```

- **A.** PARTITION
- **B.** RANGE LEFT
- ✅ **C.** RANGE RIGHT
- **D.** '2019-01-01 00:00:00', '2020-01-01 00:00:00', '2021-12-31 23:59:59'
- **E.** '2019-12-31 00:00:00', '2020-12-31 23:59:59'
- **F.** '2020-01-01 00:00:00', '2020-02-01 00:00:00', '2020-03-01 00:00:00'
- ✅ **G.** '2020-01-01 00:00:00', '2021-01-01 00:00:00'

**Answer:** C, G

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (AS) → RANGE RIGHT; Dropdown 2 (FOR VALUES) → '2020-01-01 00:00:00', '2021-01-01 00:00:00')

#### Answer from the source

Dropdown 1: RANGE RIGHT
Dropdown 2: '2020-01-01 00:00:00', '2021-01-01 00:00:00'

🖼 [Original answer area · Question 23](https://tstudy.vercel.app/content/dp-800/q023-answer.png)

</details>


---

## Q24 · single choice

You are developing an Azure SQL solution by using Microsoft Visual Studio 2026. The solution uses a GitHub repository.  
You plan to use GitHub Copilot Chat to access the GitHub repository tools by connecting to the GitHub MCP Server.  
You need to configure Visual Studio to support the planned configuration. The solution must rely on OAuth to access the MCP server.  
What should you create?

- **A.** the \.vs\settings.json file that contains the personal access token (PAT) that has the repo scope
- ✅ **B.** the \.mcp.json file that contains a URL of https://api.githubcopilot.com/mcp/
- **C.** the \.vscode\settings.json file that contains a URL of https://api.githubcopilot.com/mcp/
- **D.** the \.github\mcp.json file that contains the personal access token (PAT) that has the repo scope

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. the \.mcp.json file that contains a URL of https://api.githubcopilot.com/mcp/

Community vote distribution: B 100%

</details>


---

## Q25 · pick 2

DRAG DROP  
You have an Azure SQL database that contains a table named Sales.Orders. Sales.Orders contains the following columns.

| Column | Data type |  
| --- | --- |  
| OrderId | int |  
| CustomerId | int |  
| OrderDate | datetime2 |  
| TotalAmount | decimal(18,2) |

Reporting queries frequently repeat logic to calculate the number of days since an order was placed.  
You need to create a scalar user-defined function (UDF) that returns the number of days between an input value of @OrderDate and the current date and time.  
How should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE FUNCTION dbo.ufn_DaysSinceOrder  
(
    @OrderDate datetime2(0)  
)  
[Target 1]  
BEGIN
    DECLARE @Days int;
    SELECT @Days = [Target 2] ;
    RETURN @Days;  
END;  
GO  
```

- **A.** AS RETURN
- **B.** DATEADD(day, @OrderDate, GETDATE())
- ✅ **C.** DATEDIFF(day, @OrderDate, GETDATE())
- ✅ **D.** RETURNS INT
- **E.** RETURNS TABLE
- **F.** WITH SCHEMABINDING

**Answer:** D, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (after the parameter list) → RETURNS INT; Target 2 (SELECT @Days =) → DATEDIFF(day, @OrderDate, GETDATE()))

#### Answer from the source

Target 1: RETURNS INT
Target 2: DATEDIFF(day, @OrderDate, GETDATE())

🖼 [Original answer area · Question 25](https://tstudy.vercel.app/content/dp-800/q025-answer.png)

</details>


---

## Q26 · single choice

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

You plan to implement changes to sp_UpdateProcedureForPatient to meet the performance requirements.  
You change the stored procedure to run all its code within a transaction.  
Which transaction level should you use?

- ✅ **A.** REPEATABLE READ
- **B.** SERIALIZABLE
- **C.** SNAPSHOT
- **D.** READ COMMITTED SNAPSHOT

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. REPEATABLE READ

Community vote distribution: A 67%, C 33%

> **ℹ️ Other source**
> Another version of this question marks SNAPSHOT. The answer key and the majority vote are REPEATABLE READ. Microsoft documents REPEATABLE READ as preventing other transactions from modifying data that the current transaction has read until it completes, which is the case-study requirement. SNAPSHOT gives a consistent view but does not stop other transactions from changing those rows.

#### Explanation

The requirement states that records accessed by the stored procedure must NOT be changed by other transactions while it runs. The REPEATABLE READ isolation level holds shared locks on all rows read until the transaction completes, preventing other transactions from updating or deleting those specific rows. This satisfies the consistency requirement without imposing the broader range locks of SERIALIZABLE, which would also block new insertions into ranges not currently accessed.

</details>


---

## Q27 · pick 1

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

HOTSPOT  
You need to create a table in the database to store the telemetry data.  
You have the following Transact-SQL code.

```sql  
CREATE TABLE dbo.VehicleTelemetry  
(
  TelemetryId BIGINT IDENTITY(1,1) NOT NULL,
  VehicleId NVARCHAR(50) NOT NULL,
  TelemetryTimeUtc DATETIME2(3) NOT NULL,
  BatteryPercent TINYINT NULL,
  SpeedKmh SMALLINT NULL,
  LocationJson JSON NULL,
  ErrorCodesJson JSON NULL,
  RawPayload NVARCHAR(MAX) NULL,
  SysStartTime DATETIME2(7) GENERATED ALWAYS AS ROW START NOT NULL,
  SysEndTime DATETIME2(7) GENERATED ALWAYS AS ROW END NOT NULL,
  PERIOD FOR SYSTEM_TIME (SysStartTime, SysEndTime),
  CONSTRAINT PK_VehicleTelemetry PRIMARY KEY CLUSTERED (TelemetryId)  
)  
WITH  
(
  SYSTEM_VERSIONING = ON
  (
    HISTORY_TABLE = dbo.VehicleTelemetryHistory
  )  
);  
GO  
CREATE INDEX IX_VehicleTelemetry_Time ON dbo.VehicleTelemetry (TelemetryTimeUtc);  
CREATE JSON INDEX JI_VehicleTelemetry_Location ON dbo.VehicleTelemetry (LocationJson) FOR  
(
  '$.location. latitude', '$.location. longitude',
  '$.location. accuracy'  
);  
```

For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

- **A.** The code meets the database performance requirements for partitioning.
- ✅ **B.** The code meets the database performance requirements for JSON property querying.
- **C.** Queries that filter on $.location.heading will use the JI_VehicleTelemetry_Location index.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Corrected answer (graded)

Statement 1: No
Statement 2: Yes
Statement 3: No

> **💡 Why the source key was changed**
> A JSON index recursively indexes all keys and values from each listed SQL/JSON path onward. The index lists only $.location.latitude, $.location.longitude and $.location.accuracy, so $.location.heading is not indexed and a filter on it cannot seek this index. Statement 1 stays No: the table is not created on a partition scheme. (The spaces after "location." in the exhibit come from the source image.)
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/statements/create-json-index-transact-sql

#### Answer from the source

Original answer key: Statement 1 No; Statement 2 Yes; Statement 3 Yes.

🖼 [Original answer area · Question 27](https://tstudy.vercel.app/content/dp-800/q027-answer.png)

</details>


---

## Q28 · pick 2

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

HOTSPOT  
You are creating a table that will store customer profiles.  
You have the following Transact-SQL code.

```sql  
CREATE TABLE dbo.CustomerProfiles  
(
    CustomerId     BIGINT IDENTITY(1,1) PRIMARY KEY,
    FullName       NVARCHAR(200) MASKED WITH (FUNCTION = 'partial(1,"xxxx",1)'),
    EmailAddress   NVARCHAR(200) MASKED WITH (FUNCTION = 'email()'),
    PhoneNumber    NVARCHAR(50)  MASKED WITH (FUNCTION = 'default()'),
    RegionCode     NVARCHAR(10) NOT NULL  
);  
GO  
CREATE FUNCTION dbo.fn_FilterByRegion(@RegionCode NVARCHAR(10))  
RETURNS TABLE  
AS  
RETURN  
(
    SELECT 1
    FROM dbo.UserRegionAccess ura
    WHERE ura.UserPrincipalName = SUSER_SNAME()
      AND ura.RegionCode = @RegionCode  
);  
GO  
CREATE SECURITY POLICY CustomerRegionPolicy  
ADD FILTER PREDICATE dbo.fn_FilterByRegion(RegionCode)  
ON dbo.CustomerProfiles  
WITH (STATE = ON);  
GO  
```

For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

- ✅ **A.** The schema meets the security requirements for PII data.
- **B.** Administrators of the Azure SQL server can see all the rows in dbo.CustomerProfiles when they use an application.
- ✅ **C.** The masking rules will apply even when row-level security (RLS) filters out rows.

**Answer:** A, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Answer from the source

Statement 1: Yes
Statement 2: No
Statement 3: Yes

🖼 [Original answer area · Question 28](https://tstudy.vercel.app/content/dp-800/q028-answer.png)

</details>


---

## Q29 · pick 2

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

DRAG DROP  
You need to meet the database performance requirements for maintenance data.  
How should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE TRIGGER dbo.trgMaintenanceEvents_UpdateTimestamp  
ON dbo.MaintenanceEvents  
AFTER UPDATE  
AS  
BEGIN  
UPDATE m  
SET LastModifiedUtc = SYSUTCDATETIME()  
FROM dbo.MaintenanceEvents m  
INNER JOIN inserted i  
ON    [Target 1]  
WHERE [Target 2]  
END;  
GO  
```

- **A.** i.MaintenanceId IS NOT NULL
- ✅ **B.** m.LastModifiedUtc <> i.LastModifiedUtc
- ✅ **C.** m.MaintenanceId = i.MaintenanceId
- **D.** m.VehicleId = i.VehicleId

**Answer:** C, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (ON) → m.MaintenanceId = i.MaintenanceId; Target 2 (WHERE) → m.LastModifiedUtc <> i.LastModifiedUtc)

#### Corrected answer (graded)

Target 1: m.MaintenanceId = i.MaintenanceId
Target 2: m.LastModifiedUtc <> i.LastModifiedUtc

> **💡 Why the source key was changed**
> MaintenanceId is the primary key of MaintenanceEvents; VehicleId repeats across many maintenance rows. Joining the inserted pseudo-table on m.VehicleId = i.VehicleId would also stamp maintenance rows that were not changed. Joining on the key updates only the changed rows. Target 2 is kept from the source: it is the only option aimed at the "avoid recursive updates" requirement.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/statements/create-trigger-transact-sql

#### Answer from the source

Original answer key: Target 1 m.VehicleId = i.VehicleId; Target 2 m.LastModifiedUtc <> i.LastModifiedUtc.

🖼 [Original answer area · Question 29](https://tstudy.vercel.app/content/dp-800/q029-answer.png)

</details>


---

## Q30 · single choice

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

You need to recommend a solution to resolve the slow dashboard query issue.  
What should you recommend?

- **A.** Create a clustered index on LastUpdatedUtc.
- ✅ **B.** On FleetId, create a nonclustered index that includes LastUpdatedUtc, EngineStatus, and BatteryHealth.
- **C.** On LastUpdatedUtc, create a nonclustered index that includes FleetId.
- **D.** On FleetId, create a filtered index where LastUpdatedUtc > DATEADD(DAY, -7, SYSUTCDATETIME()).

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. On FleetId, create a nonclustered index that includes LastUpdatedUtc, EngineStatus, and BatteryHealth.

Community vote distribution: B 100%

</details>


---

## Q31 · pick 2

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

You need to recommend a solution that will resolve the ingestion pipeline failure issues.  
Which two actions should you recommend? Each correct answer presents part of the solution.

NOTE: Each correct selection is worth one point.

- **A.** Enable snapshot isolation on the database.
- **B.** Use a trigger to automatically rewrite malformed JSON.
- **C.** Add foreign key constraints on the table.
- ✅ **D.** Create a unique index on a hash of the payload.
- ✅ **E.** Add a check constraint that validates the JSON structure.

**Answer:** D, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. Create a unique index on a hash of the payload.
E. Add a check constraint that validates the JSON structure.

</details>


---

## Q32 · single choice

You have a Microsoft SQL Server 2025 instance that has a managed identity enabled.  
You have a database that contains a table named dbo.ManualChunks. dbo.ManualChunks contains product manuals.

A retrieval query already returns the top five matching chunks as nvarchar(max) text.  
You need to call an Azure OpenAI REST endpoint for chat completions. The solution must provide the highest level of security.

You write the following Transact-SQL code.

```sql  
01 CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders  
02  
03 GO  
04 CREATE OR ALTER PROCEDURE dbo.AskManuals  
05   ...  
06   SELECT @chunks =  
07   ...  
08   SET @payload =  
09   ...  
10   EXEC @retval = sys.sp_invoke_external_rest_endpoint  
11     @url = N'https://.openai.azure.com/openai/deployments//chat/completions?api-version=2024-02-15-preview',  
12     @method = N'POST',  
13     @credential = N'AzureOpenAIHeaders',  
14     @payload = @payload,  
15     @response = @response OUTPUT;  
16 END;  
17 GO  
```

What should you insert at line 02?

#### Option A

```sql  
WITH IDENTITY = 'HTTPEndpointQueryString',  
SECRET = N'{"api-key":""}';  
```

#### Option B

```sql  
WITH IDENTITY = 'Managed Identity',  
SECRET = '{"resourceid":""}';  
```

#### Option C

```sql  
WITH IDENTITY = 'Managed Identity',  
SECRET = N'{"api-key":""}';  
```

#### Option D

```sql  
WITH IDENTITY = 'HTTPEndpointHeaders',  
SECRET = N'{"api-key":""}';  
```

#### Option E

```sql  
WITH IDENTITY = 'AzureOpenAI',  
SECRET = N'{"resourceid":""}';  
```

- **A.** Option A
- ✅ **B.** Option B
- **C.** Option C
- **D.** Option D
- **E.** Option E

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. Option B

</details>


---

## Q33 · single choice

You have an Azure SQL database named SalesDB that contains a table named dbo.Articles. dbo.Articles contains two million articles with embeddings. The articles are updated frequently throughout the day.  
You query the embeddings by using VECTOR_SEARCH.  
Users report that semantic search results do NOT reflect the updates until the following day.  
You need to ensure that the embeddings are updated whenever the articles change. The solution must minimize CPU usage on SalesDB.  
Which embedding maintenance method should you implement?

- **A.** Modify the query to use VECTOR_DISTANCE instead of VECTOR_SEARCH.
- ✅ **B.** Enable change data capture (CDC) on dbo.Articles and use an Azure Functions app to process CDC changes.
- **C.** Run an hourly Transact-SQL job that regenerates embeddings for all the rows in dbo.Articles.
- **D.** On dbo.Articles, create a trigger that calls AI_GENERATE_EMBEDDINGS for each inserted or updated row.

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. Enable change data capture (CDC) on dbo.Articles and use an Azure Functions app to process CDC changes.

</details>


---

## Q34 · single choice

You have a GitHub Codespaces environment that has GitHub Copilot Chat installed and is connected to a SQL database in Microsoft Fabric named DB1. DB1 contains tables named Sales.Orders and Sales.Customers.  
You use GitHub Copilot Chat in the context of DB1.  
A company policy prohibits sharing customer Personally Identifiable Information (PII), secrets, and query result sets with any AI service.  
You need to use GitHub Copilot Chat to write and review Transact-SQL code for a new stored procedure that will join Sales.Orders to Sales.Customers and return customer names and email addresses. The solution must NOT share the actual data in the tables with GitHub Copilot Chat.  
What should you do?

- **A.** From Sales.Customers, paste several rows that include email addresses into a chat, so that GitHub Copilot Chat can infer edge cases.
- **B.** Run a SELECT statement that returns customer names and email addresses and provide the result set to GitHub Copilot Chat so that GitHub Copilot Chat can generate the stored procedure.
- **C.** Provide the database connection string to GitHub Copilot Chat so that GitHub Copilot Chat can validate the stored procedure.
- ✅ **D.** Ask GitHub Copilot Chat to generate the stored procedure by using schema details only.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. Ask GitHub Copilot Chat to generate the stored procedure by using schema details only.

</details>


---

## Q35 · pick 2

You have an Azure subscription. The subscription contains an Azure SQL database named SalesDB and an Azure App Service app named sales-api. sales-api uses virtual network integration to a subnet named vnet-prod/subnet-app and reads from SalesDB.  
You need to configure authentication and network access to meet the following requirements:  
Ensure that sales-api connects to SalesDB by using passwordless authentication.  
Ensure that all the database traffic remains within the subscription.  
The solution must minimize administrative effort.  
What should you configure? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

- **A.** Configure client certificate authentication for sales-api.
- **B.** Use a connection string with rotated SQL credentials weekly.
- ✅ **C.** Enable a managed identity and use Microsoft Entra authentication.
- **D.** Create a SQL login and store the SQL credentials in Azure Key Vault.
- **E.** Allow Azure services and keep the public endpoint enabled.
- ✅ **F.** Create a private endpoint and disable public network access.
- **G.** Add IP firewall rules for the App Service outbound IP addresses.
- **H.** Configure a database-level firewall rule for support IP addresses.

**Answer:** C, F

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (Authentication for sales-api) → Enable a managed identity and use Microsoft Entra authentication.; Dropdown 2 (Network access for SalesDB) → Create a private endpoint and disable public network access.)

#### Answer from the source

Dropdown 1 (Authentication for sales-api): Enable a managed identity and use Microsoft Entra authentication.
Dropdown 2 (Network access for SalesDB): Create a private endpoint and disable public network access.

🖼 [Original answer area · Question 35](https://tstudy.vercel.app/content/dp-800/eb-q035-answer.png)

Another version of this question marks: Authentication: system-assigned managed identity | Network: Private endpoint.

</details>


---

## Q36 · pick 3

You have a database named DB1. The schema is stored in a GitHub repository as an SDK-style SQL database project.

You use a feature branch workflow to deploy changes to DB1.  
You need to update the local feature branch with the latest changes to main, and then create a pull request to merge the feature branch into main for review.

How should you complete the GitHub CLI script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.

```sql  
git checkout feature/db1-add-staticdata  
[Target 1]  
[Target 2]  
[Target 3] \  
--title "Feature Update: DB1" \  
--body "Apply latest improvements and updates for review" \  
--head feature/db1-add-staticdata \  
--base main \  
--repo /DB1 \  
--web  
```

- ✅ **A.** gh pr create
- **B.** gh pr merge
- **C.** gh pr ready
- **D.** git checkout main
- ✅ **E.** git fetch origin
- ✅ **F.** git merge origin/main
- **G.** git pull origin main

**Answer:** E, F, A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (first command after checking out the feature branch) → git fetch origin; Target 2 (second command) → git merge origin/main; Target 3 (command that takes --title/--body/--head/--base/--repo/--web) → gh pr create)

#### Answer from the source

Target 1 (first command after checking out the feature branch): git fetch origin
Target 2 (second command): git merge origin/main
Target 3 (command that takes --title/--body/--head/--base/--repo/--web): gh pr create

🖼 [Original answer area · Question 36](https://tstudy.vercel.app/content/dp-800/eb-q036-answer.png)

</details>


---

## Q37 · single choice

You have an Azure SQL database that contains tables named dbo.ProductDocs and dbo.ProductDocsEmbeddings. dbo.ProductDocs contains product documentation and the following columns:  
DocID (int)  
Title (nvarchar(200))  
Body (nvarchar(max))  
LastModified (datetime2)  
The documentation is edited throughout the day.  
dbo.ProductDocsEmbeddings contains the following columns:  
DocID (int)  
ChunkOrder (int)  
ChunkText (nvarchar(max))  
Embedding (vector(1536))  
The current embedding pipeline runs once per night.  
You need to ensure that embeddings are updated every time the underlying documentation content changes. The solution must NOT require a nightly batch process.  
What should you include in the solution?

- **A.** fixed-size chunking
- **B.** a smaller embedding model
- **C.** table triggers
- ✅ **D.** change tracking on dbo.ProductDocs

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. change tracking on dbo.ProductDocs

</details>


---

## Q38 · pick 2

You have a database named db1. The schema is stored in a Git repository as an SDK-style SQL database project. The repository contains the following GitHub Action workflow.  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

```yaml  
name: Database CI/CD  
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main  
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: '8.x'
    - name: Build
      run: dotnet build db1.sqlproj --configuration Release
    - name: Deploy
      run: |
        SqlPackage /Action:Publish \
          /SourceFile:./bin/Release/db1.dacpac \
          /TargetConnectionString:"${{ secrets.Target_Connection_String }}"
  unit-tests:
    runs-on: ubuntu-latest
    needs: build-and-deploy
    if: github.ref == 'refs/heads/main'
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: '8.x'
    - name: Run unit tests
      run: dotnet test UnitTests.csproj --configuration Release  
```

- ✅ **A.** Unit tests run automatically whenever changes are pushed to main.
- ✅ **B.** Schema validation occurs during the Build step.
- **C.** Schema validation occurs during the Deploy step.

**Answer:** A, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Answer from the source

Statement 1: Yes
Statement 2: Yes
Statement 3: No

🖼 [Original answer area · Question 38](https://tstudy.vercel.app/content/dp-800/eb-q038-answer.png)

</details>


---

## Q39 · pick 2

You have a Microsoft SQL Server 2025 instance that contains a database named SalesDB. SalesDB supports a Retrieval Augmented Generation (RAG) pattern for internal support tickets. The SQL Server instance runs without any outbound network connectivity.  
You plan to generate embeddings inside the SQL Server instance and store them in a table for vector similarity queries.  
You need to ensure that only a database user account named AIApplicationUser can run embedding generation by using the model.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.

- **A.** Grant the CONTROL permission on SalesDB to AIApplicationUser.
- **B.** Create a database audit specification on SalesDB owned by AIApplicationUser.
- ✅ **C.** Grant the EXECUTE permission on the external model project to AIApplicationUser.
- ✅ **D.** Create an external model project by using ONNX runtime and local paths.
- **E.** Create an external model project that points to a Microsoft Foundry REST endpoint.

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Corrected answer (graded)

C. Grant the EXECUTE permission on the external model project to AIApplicationUser.
D. Create an external model project by using ONNX runtime and local paths.

> **💡 Why the source key was changed**
> The instance has no outbound network connectivity, so it cannot reach a Microsoft Foundry REST endpoint (option E). SQL Server 2025 can run an embedding model locally through an external model that uses the ONNX runtime and local file paths, and EXECUTE on the external model limits who can use it. The source key was C and E.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/statements/create-external-model-transact-sql

#### Answer from the source

C. Grant the EXECUTE permission on the external model project to AIApplicationUser.
E. Create an external model project that points to a Microsoft Foundry REST endpoint.

</details>


---

## Q40 · pick 4

You have an Azure SQL database that supports an OLTP application.  
You need to write Transact-SQL code that returns blocking chain details. The output must return only sessions that are blocked or are blocking other sessions.

How should you complete the code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

```sql  
WITH cteBL (session_id, blocking_these) AS  
(
    SELECT
        s.session_id,
        blocking_these = x.blocking_these
    FROM sys.dm_exec_sessions AS s
    CROSS APPLY
    (
        SELECT
            ISNULL(CONVERT(varchar(6), er.session_id), '') + ', '
        [Target 1] AS er
        WHERE er.blocking_session_id = ISNULL(s.session_id, 0)
          AND er.blocking_session_id <> 0
        FOR XML PATH('')

    ) AS x(blocking_these)  
)  
SELECT
    s.session_id,
    blocked_by = r.blocking_session_id,
    bl.blocking_these,
    batch_text = t.text,
    input_buffer = ib.event_info  
FROM sys.dm_exec_sessions AS s
    [Target 2] AS r ON r.session_id = s.session_id  
INNER JOIN cteBL AS bl ON s.session_id = bl.session_id
    [Target 3] AS t
    [Target 4] AS ib  
WHERE bl.blocking_these IS NOT NULL
   OR r.blocking_session_id > 0  
ORDER BY LEN(bl.blocking_these) DESC, r.blocking_session_id DESC, r.session_id;  
```

- **A.** CROSS APPLY sys.dm_exec_sql_text (r.sql_handle)
- ✅ **B.** FROM sys.dm_exec_requests
- **C.** FROM sys.dm_tran_locks
- **D.** INNER JOIN sys.dm_tran_locks
- ✅ **E.** LEFT OUTER JOIN sys.dm_exec_requests
- **F.** OUTER APPLY sys.dm_exec_input_buffer(r.session_id, 0)
- ✅ **G.** OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)
- ✅ **H.** OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)

**Answer:** B, E, H, G

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (source aliased AS er inside the CROSS APPLY subquery) → FROM sys.dm_exec_requests; Target 2 (... AS r ON r.session_id = s.session_id) → LEFT OUTER JOIN sys.dm_exec_requests; Target 3 (... AS t) → OUTER APPLY sys.dm_exec_sql_text (r.sql_handle); Target 4 (... AS ib) → OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL))

#### Answer from the source

Target 1 (source aliased AS er inside the CROSS APPLY subquery): FROM sys.dm_exec_requests
Target 2 (... AS r ON r.session_id = s.session_id): LEFT OUTER JOIN sys.dm_exec_requests
Target 3 (... AS t): OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)
Target 4 (... AS ib): OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)

🖼 [Original answer area · Question 40](https://tstudy.vercel.app/content/dp-800/eb-q040-answer.png)

</details>


---

## Q41 · single choice

You have an Azure SQL database that supports a customer-facing API. The API calls a stored procedure named dbo.GetCustomerOrders thousands of times per hour.  
After a deployment that updated indexes and statistics, users report that the API endpoint backed by dbo.GetCustomerOrders is slower. In Query Store, the same query now has two persisted execution plans. During the last hour, the newer plan had a significantly higher average duration and CPU time than the older plan.  
You need to restore the previous performance quickly, without changing the API code.  
Which Transact-SQL command should you run?

- **A.** EXEC sys.sp_query_store_set_hints
- **B.** DBCC FREEPROCCACHE
- ✅ **C.** EXEC sp_query_store_force_plan
- **D.** ALTER DATABASE

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. EXEC sp_query_store_force_plan

Another version of this question marks: D. EXEC sp_query_store_force_plan (same option, different letter).

</details>


---

## Q42 · pick 2

You have an Azure SQL database that has Query Store enabled.  
Query Performance Insight shows that one stored procedure has the longest runtime. The procedure runs the following parameterized query.  
The dbo.Orders table has approximately 120 million rows. CustomerId is highly selective, and OrderDate is used for range filtering and sorting.

You have the following indexes:  
Clustered index: PK_Orders on (OrderId)  
Nonclustered index: IX_Orders_OrderDate on (OrderDate) with no included columns  
An actual execution plan captured from Query Store for slow runs shows the following:  
An index seek on IX_Orders_OrderDate followed by a Key Lookup (Clustered) on PK_Orders for CustomerId, Status, and TotalAmount  
A sort operator before Top (50), because the results are ordered by OrderDate DESC  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE OR ALTER PROCEDURE dbo.GetRecentOrders
  @CustomerId int,
  @SinceDate  datetime2  
AS  
SELECT TOP (50)
    o.OrderId, o.OrderDate, o.Status, o.TotalAmount  
FROM dbo.Orders AS o  
WHERE o.CustomerId = @CustomerId
  AND o.OrderDate >= @SinceDate  
ORDER BY o.OrderDate DESC;  
```

- ✅ **A.** To avoid the explicit sort for the query, create a nonclustered index on (CustomerId, OrderDate DESC) that includes (Status, TotalAmount).
- **B.** To eliminate the sort and make the query use an ordered seek, add CustomerId as an included column to IX_Orders_OrderDate.
- ✅ **C.** The plan indicates a bottleneck from a suboptimal query plan, rather locking or blocking.

**Answer:** A, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Answer from the source

Statement 1: Yes
Statement 2: No
Statement 3: Yes

🖼 [Original answer area · Question 42](https://tstudy.vercel.app/content/dp-800/eb-q042-answer.png)

</details>


---

## Q43 · single choice

You have a database named DB1. The schema is stored in a Git repository as an SDK-style SQL database project.  
You have a GitHub Actions workflow that already runs dotnet build and produces a database artifact.  
You need to add a deployment step that publishes the .dacpac file to an Azure SQL database by using the secrets stored in GitHub repository secrets.  
What should you include in the workflow?

#### Option A

```yaml  
env:
  SQL_CONNECTION_STRING: Server=tcp:myserver.database.windows.net;  
...  
steps:  
- name: Publish
  uses: azure/sql-action@v2
  with:
    action: publish
    path: bin/Debug/db1.dacpac
    connection-string: ${{ env.SQL_CONNECTION_STRING }}  
```

#### Option B

```yaml  
- name: Publish
  uses: azure/sql-action@v2
  with:
    action: extract
    path: bin/Debug/db1.dacpac
    connection-string: ${{ secrets.SQL_CONNECTION_STRING }}  
```

#### Option C

```yaml  
- name: Publish
  uses: azure/sql-action@v2
  with:
    action: publish
    path: bin/Debug/db1.dacpac
    connection-string: ${{ secrets.SQL_CONNECTION_STRING }}  
```

#### Option D

```yaml  
- name: Publish
  run: |
    dotnet build db1.sqlproj \
      /p:TargetConnectionString="${{ secrets.SQL_CONNECTION_STRING }}"  
```

- **A.** Option A
- **B.** Option B
- ✅ **C.** Option C
- **D.** Option D

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. Option C

Another version of this question marks: D (the azure/sql-action publish step that uses ${{ secrets.SQL_CONNECTION_STRING }}; same option, different letter).

</details>


---

## Q44 · pick 1

You have a Microsoft Fabric workspace named Workspace1 that contains a SQL database named SalesDB and an API for GraphQL item named SalesApi.

You have a Microsoft Entra group named SqlUsers.

From Workspace1, you assign permission to SalesApi as shown in the following exhibit.  
The connection to SalesDB has the connectivity option configured as shown in the following exhibit.  
SqlUsers has the Viewer role for Workspace1.  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

Exhibit 1 (share/permission dialog for SalesApi): Recipient: SqlUsers. Additional permissions: [ ] Allow sharing the GraphQL item; [x] View and Edit GraphQL item (highlighted); [ ] Run Queries and Mutations. Notification Options: [x] Notify recipients by email. Add a message (optional).

Exhibit 2 (Choose connectivity option): "The selected option will be used for all datasources in the API" (Learn more). Selected: (o) Connect to Fabric data sources with single sign-on (SSO) authentication. Not selected: ( ) Connect to Fabric or external data sources using a saved credential. Buttons: OK, Cancel.

- **A.** The members of SqlUsers can modify the data in SalesDB via SalesAPI.
- **B.** The members of SqlUsers can view the data in SalesDB via SalesAPI.
- ✅ **C.** The members of SqlUsers can change the field mappings of SalesAPI.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Corrected answer (graded)

Statement 1: No
Statement 2: No
Statement 3: Yes

> **💡 Why the source key was changed**
> SalesApi was shared with "View and Edit GraphQL item" but not with "Run Queries and Mutations" (Execute), so the group cannot query or change data through the API. The edit permission is item-level Write permission on the API, which allows changing its definition, including field mappings. The source key was No for statement 3.
> Reference: https://learn.microsoft.com/en-us/fabric/security/permission-model

#### Answer from the source

Statement 1: No
Statement 2: No
Statement 3: No

🖼 [Original answer area · Question 44](https://tstudy.vercel.app/content/dp-800/eb-q044-answer.png)

</details>


---

## Q45 · single choice

You have an Azure SQL database that supports the OLTP workload of an order-processing application.  
During a 10-minute incident window, you run a dynamic management view query and discover the following:  
Session 72 is sleeping with open_transaction_count = 1.  
Multiple other sessions show blocking_session_id = 72 in sys.dm_exec_requests. sys.dm_exec_input_buffer(72, NULL) returns only BEGIN TRANSACTION UPDATE Sales.Orders.  
Users report that updates to Sales.Orders intermittently time out during the incident window. The timeouts stop only after you manually terminate session 72.  
What is a possible cause of the blocking?

- **A.** A long-running SELECT statement is blocking writers.
- **B.** Session 72 caused a deadlock.
- ✅ **C.** An explicit transaction was started but not committed or rolled back.
- **D.** A lock escalation occurred.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. An explicit transaction was started but not committed or rolled back.

</details>


---

## Q46 · pick 3

You have a SQL database in Microsoft Fabric that contains the following functions:  
A multi-statement table-valued function (TVF) named Sales.mstvf_OrderStatus() that returns order status information  
A scalar user-defined function (UDF) named dbo.ufn_GetTaxMultiplier (@TaxAmt money, @StateCode char(2)) that returns a numeric multiplier used in tax calculations  
Reporting queries frequently join Sales.mstvf_OrderStatus() to a table named Sales.SalesOrderHeader and return large result sets. A performance review shows that the queries produce inconsistent execution plans.

During a code review, a developer discovers that the following Transact-SQL statement produced an error.

EXEC @ret = ufn_GetTaxMultiplier @TaxAmt = 100.00, @StateCode = ‘WA’;  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

- ✅ **A.** You can use GETDATE() in dbo.ufn_GetTaxMultiplier to produce nondeterministic results.
- ✅ **B.** Rewriting Sales.mstvf_OrderStatus() as an inline table TVF will reduce the number of inconsistent execution plans.
- ✅ **C.** Replacing ufn_GetTaxMultiplier with dbo.ufn_GetTaxMultiplier in the EXEC function statement will resolve the error.

**Answer:** A, B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Answer from the source

Statement 1: Yes
Statement 2: Yes
Statement 3: Yes

🖼 [Original answer area · Question 46](https://tstudy.vercel.app/content/dp-800/eb-q046-answer.png)

</details>


---

## Q47 · single choice

You have an Azure SQL database named SalesDB on a logical server named sales-sql01.  
You have an Azure App Service web app named OrderApi that connects to SalesDB by using SQL authentication.  
You enable a user-assigned managed identity named OrderApi-Id for OrderApi.  
You need to configure OrderApi to connect to SalesDB by using Microsoft Entra authentication. The managed identity must have read and write permissions to SalesDB.  
Which Transact-SQL statements should you run in SalesDB?

#### Option A

```sql  
CREATE LOGIN [OrderApi-Id] FROM EXTERNAL PROVIDER;  
ALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];  
ALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];  
```

#### Option B

```sql  
CREATE USER [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!';  
ALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];  
ALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];  
```

#### Option C

```sql  
CREATE USER [OrderApi-Id] FROM EXTERNAL PROVIDER;  
ALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];  
ALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];  
```

#### Option D

```sql  
CREATE LOGIN [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!';  
ALTER SERVER ROLE sysadmin ADD MEMBER [OrderApi-Id];  
```

- **A.** Option A
- **B.** Option B
- ✅ **C.** Option C
- **D.** Option D

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. Option C

</details>


---

## Q48 · single choice

You have an Azure SQL database that contains a column named Notes.  
A security review discovers that Notes contains sensitive data.  
You need to ensure that the data is protected so that neither the stored values nor the query inputs reveal information about the actual data. The solution must prevent a user from inferring relationships or repetitions in the data based on the encrypted output.  
Which should you use?

- **A.** Always Encrypted with secure enclaves
- ✅ **B.** Always Encrypted with randomized encryption
- **C.** row-level security (RLS)
- **D.** Always Encrypted with deterministic encryption

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. Always Encrypted with randomized encryption

</details>


---

## Q49 · single choice

You have an Azure SQL database that stores order data.  
A reporting query aggregates monthly revenue per customer runs frequently.  
You need to reduce how long it takes to retrieve the calculated values. The solution must NOT alter any underlying table structure.  
What should you do?

- **A.** Create a view by using ORDER BY without TOP, and then create a unique clustered index on the view.
- **B.** Create a view without using WITH SCHEMABINDING, and then create a nonclustered index on the view.
- **C.** Create a view by using GROUP BY, and then create a unique clustered index on the view.
- ✅ **D.** Create a view by using WITH SCHEMABINDING, include COUNT_BIG(*), and then create a unique clustered index on the view.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. Create a view by using WITH SCHEMABINDING, include COUNT_BIG(*), and then create a unique clustered index on the view.

</details>


---

## Q50 · single choice

You have a GitHub Actions workflow that builds and deploys an Azure SQL database. The schema is stored in a GitHub repository as an SDK-style SQL database project.  
Following a code review, you discover that you need to generate a report that shows whether the production schema has diverged from the model in source control.  
Which action should you add to the pipeline?

- ✅ **A.** SqlPackage.exe /Action:DriftReport
- **B.** SqlPackage.exe /Action:DeployReport
- **C.** SqlPackage.exe /Action:Extract
- **D.** SqlPackage.exe /Action:Script

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. SqlPackage.exe /Action:DriftReport

</details>


---

## Q51 · single choice

> **ℹ️ Question series**  
> The source does not include the shared scenario text for this question series.

You need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.  
Solution: Identify the partition number for the oldest month, and then run the following Transact-SQL statement.

TRUNCATE TABLE dbo.Orders -  
WITH (PARTITIONS (partition number));  
Does this meet the goal?

- ✅ **A.** Yes
- **B.** No

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Yes

</details>


---

## Q52 · single choice

> **ℹ️ Question series**  
> The source does not include the shared scenario text for this question series.

You need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.  
Solution: Run the following Transact-SQL statement.

DELETE FROM dbo.Orders -  
WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. No

</details>


---

## Q53 · single choice

> **ℹ️ Question series**  
> The source does not include the shared scenario text for this question series.

You need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.  
Solution: Identify the partition scheme for the oldest month, and then run the following Transact-SQL statement.

ALTER TABLE dbo.Orders -  
DROP PARTITION SCHEME (partition_scheme_name);  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. No

</details>


---

## Q54 · single choice

> **ℹ️ Question series**  
> Series scenario: You have an SDK-style SQL database project stored in a Git repository targeting Azure SQL database.

The CI build fails with unresolved reference errors when the project references system objects.  
You need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.  
Solution: Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project.  
Does this meet the goal?

- ✅ **A.** Yes
- **B.** No

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Yes

</details>


---

## Q55 · single choice

> **ℹ️ Question series**  
> Series scenario: You have an SDK-style SQL database project stored in a Git repository targeting Azure SQL database.

The CI build fails with unresolved reference errors when the project references system objects.  
You need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.  
Solution: Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project.  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. No

Another version of this question marks: B. No.

</details>


---

## Q56 · single choice

> **ℹ️ Question series**  
> Series scenario: You have an SDK-style SQL database project stored in a Git repository targeting Azure SQL database.

The CI build fails with unresolved reference errors when the project references system objects.  
You need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.  
Solution: Add an artifact reference to the Azure SQL Database master.dacpac file.  
Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. No

Another version of this question marks: A. Yes.

> **ℹ️ Other source**
> Another version of this question marks Yes. Microsoft recommends NuGet package references (Microsoft.SqlServer.Dacpacs.Azure.Master for Azure SQL Database) instead of direct .dacpac artifact references in SDK-style projects, which supports No.
> Reference: https://learn.microsoft.com/en-us/sql/tools/sql-database-projects/concepts/database-references

</details>


---

## Q57 · pick 2

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

HOTSPOT  
You are evaluating the DAB configuration.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

- ✅ **A.** Applications can read data in the Procedures table without authentication.
- **B.** Applications can read and update data in the Transactions table once authenticated.
- ✅ **C.** Applications can execute the sp_UpdateProcedurePatient stored procedure.

**Answer:** A, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Answer from the source

Statement 1: Yes
Statement 2: No
Statement 3: Yes

🖼 [Original answer area · Question 57](https://tstudy.vercel.app/content/dp-800/eb-q057-answer.png)

Another version of this question marks: 1. Yes | 2. Yes | 3. Yes.

</details>


---

## Q58 · pick 3

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

HOTSPOT  
You need to create a solution that meets the development requirements for retrieving the patient transaction data. The solution must ensure that database developers use the resulting data to join to other tables.

How should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

```sql  
CREATE [Dropdown 1] dbo.CustomerTransactionsBetweenDates  
(
  @CustomerId INT,
  @StartDate DATETIME2,
  @EndDate   DATETIME2  
)  
RETURNS TABLE  
AS  
RETURN  
(
  SELECT
    t.TransactionId,
    t.CustomerId,
    t.TransactionDate,
    t.Amount,
    SUM(t.Amount) OVER (
          [Dropdown 2]
          [Dropdown 3]
      ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS RunningTotal
  FROM dbo.Transactions AS t
  WHERE t.CustomerId = @CustomerId
    AND t.TransactionDate >= @StartDate
    AND t.TransactionDate <=  @EndDate  
);  
```

- ✅ **A.** FUNCTION
- **B.** PROCEDURE
- **C.** VIEW
- **D.** GROUP BY t.CustomerId
- **E.** GROUP BY t.TransactionDate
- ✅ **F.** PARTITION BY t.CustomerId
- **G.** PARTITION BY t.TransactionDate
- **H.** HAVING DATEDIFF(DAY, t.TransactionDate, GETDATE()) = 1
- **I.** HAVING SUM (t.Amount) > 0
- ✅ **J.** ORDER BY t.TransactionDate, t.TransactionId
- **K.** ORDER BY t.TransactionId, t.CustomerId

**Answer:** A, F, J

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (CREATE ...) → FUNCTION; Dropdown 2 (first clause inside OVER) → PARTITION BY t.CustomerId; Dropdown 3 (second clause inside OVER) → ORDER BY t.TransactionDate, t.TransactionId)

#### Answer from the source

Dropdown 1 (CREATE ...): FUNCTION
Dropdown 2 (first clause inside OVER): PARTITION BY t.CustomerId
Dropdown 3 (second clause inside OVER): ORDER BY t.TransactionDate, t.TransactionId

🖼 [Original answer area · Question 58](https://tstudy.vercel.app/content/dp-800/eb-q058-answer.png)

Another version of this question marks: 1. FUNCTION | 2. PARTITION BY t.CustomerId | 3. ORDER BY t.TransactionDate.

</details>


---

## Q59 · single choice

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

You need to recommend a solution for the TransactionProcessing application that meets the security requirements.

What should you include in the recommendation?

- ✅ **A.** a service principal
- **B.** a system-assigned managed identity
- **C.** a shared access key
- **D.** a user-assigned managed identity

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. a service principal

Another version of this question marks: D. a system-assigned managed identity.

> **ℹ️ Other source**
> Another version of this question marks a system-assigned managed identity. TransactionProcessing runs on premises, and managed identities are available only to Azure-hosted resources, so a service principal is the passwordless option here.
> Reference: https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview

</details>


---

## Q60 · pick 2

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

HOTSPOT  
You create an SDK-style SQL database project in Microsoft Visual Studio Code named Database.sqlproj and add the project to a GitHub repository.

You need to configure a GitHub Actions workflow to support the planned changes for DB1.

How should you complete the workflow? To answer, select the appropriate options in the  
answer area.

NOTE: Each correct selection is worth one point.

```yaml  
name: Validate SQL Project  
on:
    [Dropdown 1] :
    branches: [ "main" ]  
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
 - uses: actions/checkout@v4
      - name: Step 1
        run: dotnet [Dropdown 2]  
```

- **A.** merge
- ✅ **B.** pull_request
- **C.** push
- ✅ **D.** build Database.sqlproj -c Release
- **E.** pack Database.sqlproj
- **F.** publish Database.sqlproj -c Production
- **G.** publish Database.sqlproj -c Release

**Answer:** B, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (workflow trigger under on:) → pull_request; Dropdown 2 (run: dotnet ...) → build Database.sqlproj -c Release)

#### Corrected answer (graded)

Dropdown 1: pull_request
Dropdown 2: build Database.sqlproj -c Release

> **💡 Why the source key was changed**
> The Fabrikam planned changes say every pull request to production must be validated before it can be merged, so the workflow must run on the pull_request event for main; deployments use the Release configuration. A push trigger only runs after the change is already in main. The source key was push; another version of this question also marks pull_request.
> Reference: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#pull_request

#### Answer from the source

Dropdown 1 (workflow trigger under on:): push
Dropdown 2 (run: dotnet ...): build Database.sqlproj -c Release

🖼 [Original answer area · Question 60](https://tstudy.vercel.app/content/dp-800/eb-q060-answer.png)

Another version of this question marks: Event trigger: pull_request | Run command: build Database.sqlproj.

</details>


---

## Q61 · single choice

> **ℹ️ Question series**  
> The source does not include the shared scenario text for this question series.

You need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.

Solution: Run the following Transact-SQL statement.

TRUNCATE TABLE dbo.Orders;

Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. No

</details>


---

## Q62 · single choice

> **ℹ️ Question series**  
> Series scenario: You have an SDK-style SQL database project stored in a Git repository targeting Azure SQL database.

The CI build fails with unresolved reference errors when the project references system objects.

You need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.

Solution: Build the project by running dotnet build -bl -flp:v=diag.

Does this meet the goal?

- **A.** Yes
- ✅ **B.** No

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. No

Another version of this question marks: B. No.

</details>


---

## Q63 · pick 1

HOTSPOT  
You have an SDK-style SQL database project named MyDatabaseProject.sqlproj stored in a private GitHub repository. The repository contains the following GitHub Actions workflow.  
The repository contains the AZURE_SQL_CONNECTION_STRING secrets.

The target is an Azure SQL database that allows access to Azure services and is configured to support mixed authentication.

The workflow runs successfully.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

```yaml  
name: Build and Deploy SQL Project  
on:
  push:
    branches:
      - main
  workflow_dispatch:  
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      - name: Build SQL project
        run: dotnet build MyDatabaseProject.sqlproj
      - name: Publish DACPAC
        uses: azure/sql-action@v2
        with:
          action: publish
          path: bin/Debug/MyDatabaseProject.dacpac
          connection-string: ${{ secrets.AZURE_SQL_CONNECTION_STRING }}  
```

- **A.** The workflow relies on a Microsoft Entra workload identity to access the target Azure SQL database.
- **B.** Changing the Build SQL project step to run: dotnet build MyDatabaseProject.sqlproj -c Release will result in a successful deployment.
- ✅ **C.** The workflow can be triggered manually, without making changes to the repository.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Answer from the source

Statement 1: No
Statement 2: No
Statement 3: Yes

🖼 [Original answer area · Question 63](https://tstudy.vercel.app/content/dp-800/eb-q063-answer.png)

</details>


---

## Q64 · pick 3

DRAG DROP  
You have an Azure SQL database that supports an AI-driven product search API.

You need to identify the top CPU-consuming queries from the last two hours by using Query Store data. The solution must aggregate CPU consumption across executions and return only the top 15 query hashes.

How should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all.

NOTE: Each correct selection is worth one point.

```sql  
WITH AggregatedCPU AS  
(
    SELECT
        q.query_hash,
        SUM(count_executions * [Target 1] / 1000.0) AS total_cpu_ms
    FROM sys.query_store_query_text AS qt
    INNER JOIN sys.query_store_query AS q
        ON qt.query_text_id = q.query_text_id
    INNER JOIN sys.query_store_plan AS p
        ON q.query_id = p.query_id
    INNER JOIN sys.query_store_runtime_stats AS rs
        ON rs.plan_id = p.plan_id
    INNER JOIN [Target 2] AS rsi
        ON rsi.runtime_stats_interval_id = rs.runtime_stats_interval_id
    WHERE rs.execution_type_desc IN ('Regular', 'Aborted', 'Exception')
      AND rsi.start_time >= [Target 3]
    GROUP BY q.query_hash  
),  
OrderedCPU AS  
(
    SELECT
        query_hash,
        total_cpu_ms,
        ROW_NUMBER() OVER (ORDER BY total_cpu_ms DESC, query_hash ASC) AS rn
    FROM AggregatedCPU  
)  
SELECT query_hash, total_cpu_ms  
FROM OrderedCPU  
WHERE rn <= 15  
ORDER BY total_cpu_ms DESC;  
```

- **A.** DATEADD(DAY, -2, GETDATE())
- **B.** DATEADD(HOUR, -2, GETDATE())
- ✅ **C.** DATEADD(HOUR, -2, GETUTCDATE())
- ✅ **D.** rs.avg_cpu_time
- **E.** rs.last_cpu_time
- **F.** sys.dm_exec_query_stats
- ✅ **G.** sys.query_store_runtime_stats_interval

**Answer:** D, G, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (SUM(count_executions * ... / 1000.0)) → rs.avg_cpu_time; Target 2 (INNER JOIN ... AS rsi) → sys.query_store_runtime_stats_interval; Target 3 (rsi.start_time >= ...) → DATEADD(HOUR, -2, GETUTCDATE()))

#### Answer from the source

Target 1 (SUM(count_executions * ... / 1000.0)): rs.avg_cpu_time
Target 2 (INNER JOIN ... AS rsi): sys.query_store_runtime_stats_interval
Target 3 (rsi.start_time >= ...): DATEADD(HOUR, -2, GETUTCDATE())

🖼 [Original answer area · Question 64](https://tstudy.vercel.app/content/dp-800/eb-q064-answer.png)

Another version of this question marks: 1. rs.avg_cpu_time | 2. sys.query_store_runtime_stats_interval | 3. DATEADD(hour, -2, GETUTCDATE()).

</details>


---

## Q65 · pick 3

HOTSPOT  
You have an Azure SQL database that contains a table named Sales.Customer. Sales.Customer contains columns named CustomerId, FullName, Email, TaxID, and RegionId.

You have a database role named AppSupport that is used by a support application.

You need to implement a security solution for AppSupport that meets the following requirements:

• AppSupport must be prevented from viewing TaxID.  
• AppSupport must be able to query Sales.Customer to troubleshoot issues.  
• AppSupport must be able to run a stored procedure named Sales.usp_GetCustomerByCustomerId.

Which Transact-SQL statements should you include in the solution? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

- **A.** DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;
- **B.** DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;
- ✅ **C.** GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;
- **D.** GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;
- **E.** GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;
- **F.** REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;
- **G.** DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;
- **H.** DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;
- **I.** GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;
- ✅ **J.** GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;
- **K.** GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;
- **L.** REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;
- **M.** DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;
- ✅ **N.** DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;
- **O.** GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;
- **P.** GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;
- **Q.** GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;
- **R.** REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;

**Answer:** C, J, N

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (To run Sales.usp_GetCustomerByCustomerId) → GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;; Dropdown 2 (To query Sales.Customer) → GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;; Dropdown 3 (To prevent viewing TaxID) → DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;)

#### Answer from the source

Dropdown 1 (To run Sales.usp_GetCustomerByCustomerId): GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;
Dropdown 2 (To query Sales.Customer): GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;
Dropdown 3 (To prevent viewing TaxID): DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;

🖼 [Original answer area · Question 65](https://tstudy.vercel.app/content/dp-800/eb-q065-answer.png)

</details>


---

## Q66 · pick 2

HOTSPOT  
You have an Azure SQL database named ProductsDB.

You deploy Data API builder (DAB) to Azure Container Apps.

You discover that the container app cannot connect to ProductsDB.

Your development team reports that the container app is unreachable from the internet for integration tests.

You need to update Azure SQL Database and Container Apps to meet the following requirements:

• Ensure that the Azure SQL logical server allows connections from Azure services.  
• Ensure that the Container Apps environment accepts inbound requests from the public internet.

What should you configure? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

- ✅ **A.** 0.0.0.0 to 0.0.0.0.
- **B.** 127.0.0.1 to 127.0.0.1
- **C.** 10.0.0.0 to 10.255.255.255
- **D.** Restrict ingress to internal traffic only.
- ✅ **E.** Set ingress to external and target port 5000.
- **F.** Set ingress to internal and target port 5000.

**Answer:** A, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (Start IP address and end IP address of the Azure SQL firewall rule) → 0.0.0.0 to 0.0.0.0.; Dropdown 2 (Container Apps ingress) → Set ingress to external and target port 5000.)

#### Answer from the source

Dropdown 1 (Start IP address and end IP address of the Azure SQL firewall rule): 0.0.0.0 to 0.0.0.0.
Dropdown 2 (Container Apps ingress): Set ingress to external and target port 5000.

🖼 [Original answer area · Question 66](https://tstudy.vercel.app/content/dp-800/eb-q066-answer.png)

#### Explanation

To allow the Azure SQL logical server to accept connections from other Azure services (like Container Apps), you must enable 'Allow Azure services and resources to access this server' in the networking settings.
To ensure the Container Apps environment accepts inbound requests from the public internet, you must configure the ingress setting to 'External', which exposes the app via a public FQDN.

</details>


---

## Q67 · single choice

You have a database that contains production data. The schema is stored in a Git repository as an SDK-style SQL database project and contains the following reference data.

| Name | Data type |  
| --- | --- |  
| RefId | int identity |  
| Code | nvarchar(10) |  
| CreateDate | datetime2 |  
| Description | nvarchar(255) |

A deployment pipeline can be rerun automatically when a transient failure occurs.

You need to deploy the reference data as part of the same CI/CD process. Rerunning the pipeline must produce the same outcome and must NOT create duplicate rows.

What should you do?

- ✅ **A.** Add a post-deployment script that inserts reference rows by using IF NOT EXISTS or MERGE logic.
- **B.** Restore a backup after each deployment.
- **C.** Store the reference values in GitHub repository secrets.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Add a post-deployment script that inserts reference rows by using IF NOT EXISTS or MERGE logic.

#### Explanation

Choice C is incorrect because GitHub repository secrets are designed for sensitive credentials and API keys, not for storing or deploying database reference data like tables or rows. To ensure idempotent deployment of reference data without duplicates during a rerun, you should use post-deployment scripts with MERGE statements or IF NOT EXISTS logic (Choice A), which check for existing rows before inserting. Choice B is inefficient and risky as it overwrites production changes, violating the requirement to only deploy schema/reference updates.

</details>


---

## Q68 · single choice

You have an Azure SQL database named ProductsDB.

You deploy Data API builder (DAB) to Azure Container Apps by using the mcr.microsoft.com/azure-databases /data-api-builder:latest image.

The container app has the following configurations:

• Secrets: mssql-connection-string, dab-config-base64  
• Environment variables:  
• MSSQL_CONNECTION_STRING=secretref:mssql-connection-string  
• DAB_CONFIG_BASE64=secretref:dab-config-base64  
• Ingress: External on port 5000

Users report that the /health endpoint returns a healthy response, but all requests that query an entity named Products fail and generate a connection error.

You confirm that the SQL login in the connection string is correct and the database exists.

You need to ensure that the container app can establish connections to the Azure SQL logical server without changing the container app deployment settings or the DAB configuration file.

What should you do on the Azure SQL logical server?

- **A.** Create an auto-failover group for ProductsDB.
- **B.** Run DBCC CHECKDB on ProductsDB.
- ✅ **C.** Create a firewall rule that allows a start and end IP address of 0.0.0.0.
- **D.** Enable FORCE_LAST_GOOD_PLAN automatic tuning for ProductsDB.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. Create a firewall rule that allows a start and end IP address of 0.0.0.0.

#### Explanation

The Azure Container Apps instance is failing to connect to the Azure SQL server due to network-level blocking.
Azure SQL servers use firewall rules to control inbound traffic based on IP addresses.
Adding a rule with start and end IP addresses of 0.0.0.0 effectively disables the firewall, allowing connections from any source, which resolves the connectivity issue without altering the container app configuration.

> **ℹ️ Note on the explanation**
> A firewall rule with start and end address 0.0.0.0 is the "Allow Azure services and resources to access this server" setting: it admits connections from Azure-hosted services such as Container Apps, not from every internet address.
> Reference: https://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure

</details>


---

## Q69 · single choice

You have an Azure SQL database named SalesDB and an Azure App Service app named sales-api. SalesDB contains a table named dbo.Customers. dbo.Customers contains two columns named CreditCardNumber and TenantId.

Currently, sales-api connects to SalesDB by using SQL authentication with stored username and password.

You need to recommend a solution that meets the following requirements:

• Provides a passwordless method for sales-api to access SalesDB.  
• Ensures that credit card numbers are NOT stored as plain text.

What should you include in the recommendation?

- **A.** Azure Key Vault and Always Encrypted
- **B.** Transparent Data Encryption (TDE) and row-level security (RLS)
- **C.** managed identities and dynamic data masking
- ✅ **D.** managed identities and Always Encrypted

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. managed identities and Always Encrypted

</details>


---

## Q70 · pick 2

DRAG DROP  
You have an Azure SQL database named sqldb-ai-prod that stores customer support tickets for a multitenant software as a service (SaaS) application. sqldb-ai-prod contains a table named Tickets. Tickets contains columns named TenantId, TicketId, CustomerEmail, CustomerPhone, and Notes.

You plan to harden data access, since a new support team will use ad hoc reporting tools that connect directly to sqldb-ai-prod.

You need to configure security to meet the following requirements:

• Support agents must see only the rows of their own TenantId column.  
• Support agents must see only the domain name portion of the CustomerEmail column.

What should you do for each requirement? To answer, drag the appropriate actions to the correct requirements. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

- ✅ **A.** Configure dynamic data masking on selected columns.
- **B.** Enable Transparent Data Encryption (TDE) and customer-managed keys.
- ✅ **C.** Create a row-level security (RLS) predicate that uses the user context.
- **D.** Encrypt sensitive columns by using Always Encrypted with Azure Key Vault.

**Answer:** C, A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (Support agents must see only the rows of their own TenantId) → Create a row-level security (RLS) predicate that uses the user context.; Target 2 (Support agents must see only the domain name portion of CustomerEmail) → Configure dynamic data masking on selected columns.)

#### Answer from the source

Target 1 (Support agents must see only the rows of their own TenantId): Create a row-level security (RLS) predicate that uses the user context.
Target 2 (Support agents must see only the domain name portion of CustomerEmail): Configure dynamic data masking on selected columns.

🖼 [Original answer area · Question 70](https://tstudy.vercel.app/content/dp-800/eb-q070-answer.png)

</details>


---

## Q71 · pick 1

HOTSPOT  
You have a SQL database in Microsoft Fabric that uses the default settings for a newly created database and contains a table named Sales.Orders.

You have an application that uses two stored procedures to access Sales.Orders.

While monitoring database activity, you discover the following:

• sys.dm_exec_requests shows multiple sessions in a suspended state with wait_type = LCK_M_X. All the sessions show the same wait_resource, which maps to Sales.Orders, and the same nonzero blocking_session_id.  
• sys.dm_exec_input_buffer(blocking_session_id, NULL) returns a last submitted command of BEGIN TRANSACTION UPDATE Sales.Orders.  
• sys.dm_exec_sessions for the blocking session shows status = sleeping and open_transaction_count = 1.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

- ✅ **A.** The blocking is caused by an uncommitted explicit transaction in the blocking session that is holding locks.
- **B.** While an UPDATE operation on Sales.Orders is occurring, SELECT statements will be blocked.
- **C.** Joining sys.dm_tran_locks to sys.dm_exec_requests will show which session holds locks involved in the blocking chain.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Corrected answer (graded)

Statement 1: Yes
Statement 2: No
Statement 3: No

> **💡 Why the source key was changed**
> A newly created SQL database in Fabric uses the Azure SQL Database default READ_COMMITTED_SNAPSHOT = ON, so SELECT statements read row versions and are not blocked by the open UPDATE. Statements 1 and 3 keep the source answers. The source key was Yes for statement 2.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql

#### Answer from the source

Statement 1: Yes
Statement 2: Yes
Statement 3: No

🖼 [Original answer area · Question 71](https://tstudy.vercel.app/content/dp-800/eb-q071-answer.png)

</details>


---

## Q72 · pick 3

DRAG DROP  
You have an Azure SQL database named SalesDB that has Query Store enabled. SalesDB supports an AI-driven product search API.

Users report that the latency of the API increased immediately after the API was deployed and remains high.

You need to identify whether the latency increase was caused by an execution plan regression and, if so, decide which corrective action will restore a previous plan. The solution must prevent any changes to the API code.

What should you use? To answer, drag the appropriate tools to the correct step. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

- **A.** Azure Monitor
- **B.** Log Analytics
- ✅ **C.** Query Performance Insight
- **D.** The Query Store plan store
- ✅ **E.** Plan forcing in Query Store
- ✅ **F.** The Regressed Queries pane in Query Store

**Answer:** C, F, E

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (To identify long-running queries:) → Query Performance Insight; Target 2 (To verify that the query has multiple persisted plans over time:) → The Regressed Queries pane in Query Store; Target 3 (To restore a previous plan without changing the code:) → Plan forcing in Query Store)

#### Answer from the source

Target 1 (To identify long-running queries:): Query Performance Insight
Target 2 (To verify that the query has multiple persisted plans over time:): The Regressed Queries pane in Query Store
Target 3 (To restore a previous plan without changing the code:): Plan forcing in Query Store

🖼 [Original answer area · Question 72](https://tstudy.vercel.app/content/dp-800/eb-q072-answer.png)

</details>


---

## Q73 · single choice

You have an Azure container app named app1-contoso-001 that hosts a Data API builder (DAB) container in front of an Azure SQL database.

You add an entity named Todo that uses a source named dbo.todos.

Which URL pattern should clients use to access the Todo REST endpoint?

- **A.** https://appl-contoso-001.azurestaticapps.net/data-api/graphq1/Todo
- ✅ **B.** https://appl-contoso-001.azurestaticapps.net/api/Todo
- **C.** https://appl-contoso-001.azurestaticapps.net/data-api/Todo
- **D.** https://appl-contoso-001.azurestaticapps.net/data-api/api/Todo

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. https://appl-contoso-001.azurestaticapps.net/api/Todo

> **ℹ️ Related item**
> A variant of this question (Extra question 5) adds Static Web Apps database connections and default DAB REST settings; that variant is kept separately with its own key.

</details>


---

## Q74 · single choice

You have an Azure SQL database that contains a table named Customer. Customer contains the following columns:

• NationalIDNumber is unique per customer.  
• InvestigationNotes contains free-form text.

You have a stored procedure that performs point lookups by NationalIDNumber and returns InvestigationNotes in the query results without filtering on InvestigationNotes.

You need to encrypt both columns by using Always Encrypted and the highest security possible.

Which type of Always Encrypted encryption should you use for each column?

- ✅ **A.** deterministic for NationalIDNumber and randomized for InvestigationNotes
- **B.** deterministic for NationalIDNumber and deterministic for InvestigationNotes
- **C.** randomized for NationalIDNumber and randomized for InvestigationNotes
- **D.** randomized for NationalIDNumber and deterministic for InvestigationNotes

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. deterministic for NationalIDNumber and randomized for InvestigationNotes

</details>


---

## Q75 · single choice

Your development team uses Microsoft Visual Studio Code with the MSSQL extension and the GitHub Copilot Chat extension.

The team connects to an Azure SQL database by using individual database logins and uses the @mssql chat participant to generate and run Transact-SQL queries from prompts.

What is used to ensure that GitHub Copilot Chat-generated queries run in the context of the developer?

- ✅ **A.** SQL permissions
- **B.** Azure role-based access control (Azure RBAC) permissions
- **C.** GitHub organization permissions
- **D.** shared MCP instruction files

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. SQL permissions

</details>


---

## Q76 · single choice

You have an Azure SQL database that supports an AI-enabled product catalog API. The database contains a table named Sales.Orders. Sales.Orders contains 20 million rows and has a nonclustered index on a column named CreateDate.

The API passes a date parameter named @OrderDate.

You have a stored procedure named get_latest_day_orders that filters by running the following query.

WHERE CAST(CreateDate AS date) = @0rderDate.

A review of the query execution reveals that the query causes an index scan.

You need to modify the predicate to ensure that Microsoft SQL Server can use an index seek on CreateDate for a single day.

Which WHERE clause should you use?

- ✅ **A.** WHERE CreateDate >= @OrderDate AND CreateDate < DATEADD(day, 1, @0rderDate)
- **B.** WHERE CreateDate LIKE CONVERT(char(10), @0rderDate, 121) + ‘%’
- **C.** WHERE LEFT(CONVERT(varchar(30), CreateDate, 121), 10) = CONVERT(char(10), @0rderDate, 121)
- **D.** WHERE CONVERT(char(10), CreateDate, 121) = CONVERT(char(10), @OrderDate, 121)

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. WHERE CreateDate >= @OrderDate AND CreateDate < DATEADD(day, 1, @0rderDate)

</details>


---

## Q77 · single choice

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

You need to generate embeddings to resolve the issues identified by the analysts.  
Which column should you use?

- **A.** VehicleLocation
- ✅ **B.** IncidentDescription
- **C.** IncidentType
- **D.** SeverityScore

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. IncidentDescription

</details>


---

## Q78 · single choice

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

You need to enable similarity search to provide the analysts with the ability to retrieve the most relevant health summary reports. The solution must minimize latency.  
What should you include in the solution?

- **A.** a computed column that manually compares vector values
- **B.** a standard nonclustered index on the Embeddings (vector (1536)) column
- **C.** a full-text index on the Embeddings (vector (1536)) column
- ✅ **D.** a vector index on the Embeddings (vector (1536)) column

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. a vector index on the Embeddings (vector (1536)) column

</details>


---

## Q79 · single choice

📋 **Contoso · Fleet Intelligence Platform case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Contoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.

| Table name | Columns |  
| --- | --- |  
| CustomerFeedback | FeedbackId (int) (primarykey); FeedbackJson (nvarchar (max)) |  
| Fleets | FleetId (int) (primarykey); FleetName (nvarchar(100)); Description (nvarchar(256)) |  
| MaintenanceEvents | MaintenanceId (int) (primarykey); VehicleId (int); LastModifiedUTC (datetime2); Description (nvarchar(256)) |  
| SupportTickets | TicketId (int) (primarykey); FleetId (int); CreatedUtc (datetime2) |  
| UserAccounts | UserId (int) (primarykey); UserPrincipalName (nvarchar(256)); JobRole (nvarchar(256)); StartDate (datetime2) |  
| VehicleIncidentReports | IncidentId (int) (primarykey); VehicleId (int); FleetId (int); IncidentType (nvarchar(50)); VehicleLocation (nvarchar(200)); IncidentDescription (nvarchar(max)); SeverityScore (int) |  
| Vehicles | VehicleId (int) (primarykey); VIN ((nvarchar(50)); VehicleDescription (nvarchar(256)) |  
| VehicleHealthSummary | VehicleId (int) (primarykey); FleetId (int); Summary (nvarchar(2000)); LastUpdatedUtc (datetime2); EngineStatus [bit]; EngineStatusLastUpdatedUtc (datetime2); BatteryHealth (int); Embeddings (vector (1536)) |

The FeedbackJson column has a full-text index and stores JSON documents in the following format.

```json  
{
  "text": "The battery drains too fast when driving uphill.",
  "category": "Battery",
  "metadata": {
    "appVersion": "5.2.1",
    "device": "Android",
    "language": "en-GB"
  }  
}  
```

The support staff at Contoso never has the UNMASK permission.

#### Problem Statements

Contoso is deploying a new Azure SQL database that will become the authoritative data store for the following:

- AI workloads

- Vector search

- Modernized API access

- Retrieval Augmented Generation (RAG) pipelines

Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.

The engineers at Contoso report that the following dashboard query runs slowly.

```sql  
SELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth  
FROM dbo.VehicleHealthSummary  
WHERE FleetId = @FleetId  
ORDER BY LastUpdatedUtc DESC;  
```

You review the execution plan and discover that the plan shows a clustered index scan.

VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.

#### Requirements

#### Planned Changes

Contoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.

#### Security Requirements

Contoso identifies the following security requirements:

- Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.

- Enforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.

#### Database Performance and Requirements

Contoso identifies the following telemetry requirements:

- Telemetry data must be stored in a partitioned table.

- Telemetry data must provide predictable performance for ingestion and retention operations.

- latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.

Contoso identifies the following maintenance data requirements:

- Ensure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.

- Avoid recursive updates.

#### AI Search, Embeddings, and Vector Indexing

Contoso plans to implement semantic search over incident data to meet the following requirements:

- Embeddings must be stored in dedicated Azure SQL Database tables.

- Embeddings must be generated from rich natural language fields.

- Chunking must preserve semantic coherence.

- Hybrid search must combine the following: vector similarity; keyword filtering or boosting.

#### Development Requirements

The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.

Contoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:

- Extract the customer feedback text from the JSON document.

- Filter rows where the JSON text contains a keyword.

- Calculate a fuzzy similarity score between the feedback text and a known issue description.

- Order the results by similarity score, with the highest score first.

You need to recommend a solution for the development team to retrieve the live metadata. The solution must meet the development requirements.  
What should you include in the recommendation?

- **A.** Export the database schema as a .dacpac file and load the schema into a GitHub Copilot context window.
- **B.** Add the schema to a GitHub Copilot instruction file.
- ✅ **C.** Use an MCP server.
- **D.** Include the database project in the code repository.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. Use an MCP server.

#### Explanation

The requirement specifies retrieving *live* metadata from the databases within the development environment using GitHub Copilot. An MCP (Model Context Protocol) server enables external tools like AI assistants to securely connect to live data sources and query current schema or metadata in real-time, unlike static exports or instruction files which do not reflect live changes.

</details>


---

## Q80 · pick 2

You have an Azure SQL database named SalesDB that contains tables named Sales.Orders and Sales.OrderLines. Both tables contain sales data.  
You have a Retrieval Augmented Generation (RAG) service that queries SalesDB to retrieve order details and passes the results to a large language model (LLM) as JSON text. The following is a simple of the JSON.  
You need to return one JSON document per order that includes the order header fields and an array of related order lines. The LLM must receive a single JSON array of orders, where each order contains a lines property that is a JSON array of line items.

Which Transact-SQL commands should you use to produce the required JSON shape from the relational tables? To answer, drag the appropriate commands to the correct operations. Each command may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

```json  
[
  {
    "orderHeaderId": 102348,
    "orderNumber": "SO-2026-000912",
    "orderDateUtc": "2026-01-28T14:22:09Z",
    "customerId": 77821,
    "currencyCode": "EUR",
    "orderTotal": 149.97,
    "lines": [
      {
        "lineNumber": 1,
        "productId": 5012,
        "sku": "CBL-USB-C-1M",
        "quantity": 2,
        "unitPrice": 19.99,
        "lineTotal": 39.98
      },
      {
        "lineNumber": 2,
        "productId": 8841,
        "sku": "HUB-USB-C-7P",
        "quantity": 1,
        "unitPrice": 109.99,
        "lineTotal": 109.99
      }
    ]
  }  
]  
```

- ✅ **A.** FOR JSON PATH
- **B.** JSON_MODIFY
- **C.** JSON_QUERY
- ✅ **D.** JSON_VALUE
- **E.** OPENJSON

**Answer:** A, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (Serialize the order-level JSON:) → FOR JSON PATH; Target 2 (Generate a nested lines array:) → FOR JSON PATH; Target 3 (Extract a single scalar value from the JSON text:) → JSON_VALUE)

#### Corrected answer (graded)

Serialize the order-level JSON: FOR JSON PATH
Generate a nested lines array: FOR JSON PATH
Extract a single scalar value from the JSON text: JSON_VALUE

> **💡 Why the source key was changed**
> FOR JSON PATH turns the order rows into a JSON array, and a correlated subquery that also uses FOR JSON PATH produces the nested lines array. JSON_QUERY only extracts an existing object or array from JSON text; it does not serialize relational rows. The source key was JSON_QUERY for the first operation.
> Reference: https://learn.microsoft.com/en-us/sql/relational-databases/json/format-nested-json-output-with-path-mode-sql-server

#### Answer from the source

Target 1 (Serialize the order-level JSON:): JSON_QUERY
Target 2 (Generate a nested lines array:): FOR JSON PATH
Target 3 (Extract a single scalar value from the JSON text:): JSON_VALUE

🖼 [Original answer area · Question 80](https://tstudy.vercel.app/content/dp-800/eb-q080-answer.png)

</details>


---

## Q81 · pick 2

You have an Azure SQL database that contains the following tables and columns.  
Embeddings in the NotesEmbeddings and DescriptionEmbeddings tables have been generated from values in the Description and Notes columns of the Articles table by using different chunk sizes.

You need to perform approximate nearest neighbor (ANN) queries across both embedding tables. The solution must minimize the impact of using different chunk sizes.

What should you use? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

| Tables | Columns |  
| --- | --- |  
| Articles | ArticleId (int); Title (nvarchar(200)); Notes (nvarchar(max)); Description (nvarchar(max)) |  
| NotesEmbeddings | ArticleId (int); ChunkIndex (int); Embedding (vector(1536)) |  
| DescriptionEmbeddings | ArticleId (int); ChunkIndex (int); Embedding (vector(1536)) |

- **A.** VECTOR_DISTANCE
- **B.** VECTOR_NORM
- ✅ **C.** VECTOR_SEARCH
- ✅ **D.** cosine distance
- **E.** dot product
- **F.** Euclidean distance

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (Function) → VECTOR_SEARCH; Dropdown 2 (Distance metric) → cosine distance)

#### Answer from the source

Dropdown 1 (Function): VECTOR_SEARCH
Dropdown 2 (Distance metric): cosine distance

🖼 [Original answer area · Question 81](https://tstudy.vercel.app/content/dp-800/eb-q081-answer.png)

</details>


---

## Q82 · pick 3

You have a SQL database in Microsoft Fabric named SalesDB that contains a table named dbo.Products.  
You need to modify SalesDB to meet the following requirements:

Create a vector index on the appropriate column.

Use a supplied natural language query vector.

How should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```sql  
CREATE VECTOR INDEX idx_products_embedding ON dbo.Products ( [Dropdown 1] )  
WITH (METRIC = 'cosine', TYPE = 'DiskANN');  
DECLARE @query_vector VECTOR(1536) = @SuppliedVector  
SELECT
    t.product_id,
    t.product_name,
    s.distance  
FROM
        [Dropdown 2] (
        TABLE = dbo.Products AS t,
        COLUMN = embedding,
        SIMILAR_TO = @query_vector,
        METRIC = 'cosine',
        TOP_N = 10
    ) AS s  
[Dropdown 3]  
```

- **A.** distance
- ✅ **B.** embedding
- **C.** product_name
- **D.** VECTOR_DISTANCE
- **E.** VECTOR_NORMALIZE
- ✅ **F.** VECTOR_SEARCH
- **G.** GROUP BY s.distance
- ✅ **H.** ORDER BY s.distance
- **I.** PARTITION BY s.distance

**Answer:** B, F, H

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (CREATE VECTOR INDEX column) → embedding; Dropdown 2 (FROM function) → VECTOR_SEARCH; Dropdown 3 (final clause) → ORDER BY s.distance)

#### Corrected answer (graded)

Dropdown 1: embedding
Dropdown 2: VECTOR_SEARCH
Dropdown 3: ORDER BY s.distance

> **💡 Why the source key was changed**
> A vector index is created on the vector column. The query searches COLUMN = embedding, so the index must be on embedding; product_name is a text column. The source key was product_name for Dropdown 1.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/statements/create-vector-index-transact-sql

#### Answer from the source

Dropdown 1 (CREATE VECTOR INDEX column): product_name
Dropdown 2 (FROM function): VECTOR_SEARCH
Dropdown 3 (final clause): ORDER BY s.distance

🖼 [Original answer area · Question 82](https://tstudy.vercel.app/content/dp-800/eb-q082-answer.png)

</details>


---

## Q83 · single choice

You have an Azure SQL database that contains a table named dbo.Products. dbo.Products contains three columns named Embedding, Category, and Price. The Embedding column is defined as VECTOR(1536).  
You use AI_GENERATE_EMBEDDINGS and VECTOR_SEARCH to support semantic search and apply additional filters on two columns named Category and Price.  
You plan to change the embedding model from text-embedding-ada-002 to text-embedding-3-small. Existing rows already contain embeddings in the Embedding column.  
You need to implement the model change. Applications must be able to use VECTOR_SEARCH without runtime errors.  
What should you do first?

- **A.** Regenerate embeddings for the existing rows.
- **B.** Normalize the vector lengths before storing new embeddings.
- **C.** Convert the Embedding column to nvarchar(max).
- ✅ **D.** Create a vector index on dbo.Products.Embedding.

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. Create a vector index on dbo.Products.Embedding.

</details>


---

## Q84 · pick 3

You have an Azure SQL database named DB1 that contains two tables named knowledge_base and query_cache. knowledge_base contains support articles and embeddings. query_cache contains chat questions, responses, and embeddings. DB1 supports an AI-enabled chat agent.

You need to design a solution that meets the following requirements:

Serializes the retrieved rows from knowledge_base  
Extracts the answer field from the response  
Extracts the embeddings to store in query_cache  
You will call the external large language model (LLM) by using the sp_invoke_external_rest_endpoint stored procedure.

Which Transact-SQL commands should you use for each requirement? To answer, drag the appropriate commands to the correct requirements. Each command may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

- **A.** AI_GENERATE_CHUNKS
- ✅ **B.** FOR JSON PATH
- **C.** FOR XML PATH
- ✅ **D.** JSON_QUERY
- ✅ **E.** JSON_VALUE
- **F.** OPENJSON
- **G.** VECTOR_DISTANCE

**Answer:** B, E, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (Serialize the retrieved rows from knowledge_base:) → FOR JSON PATH; Target 2 (Extract the answer field from the response:) → JSON_VALUE; Target 3 (Extract the embeddings to store in query_cache:) → JSON_QUERY)

#### Corrected answer (graded)

Serialize the retrieved rows: FOR JSON PATH
Extract the answer field: JSON_VALUE
Extract the embeddings: JSON_QUERY

> **💡 Why the source key was changed**
> The embedding in the model response is a JSON array, and JSON_QUERY returns arrays and objects from JSON text (JSON_VALUE returns only scalars). AI_GENERATE_CHUNKS splits text into chunks and cannot read a field from a response. The source key was AI_GENERATE_CHUNKS for the third requirement.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/functions/json-query-transact-sql

#### Answer from the source

Target 1 (Serialize the retrieved rows from knowledge_base:): FOR JSON PATH
Target 2 (Extract the answer field from the response:): JSON_VALUE
Target 3 (Extract the embeddings to store in query_cache:): AI_GENERATE_CHUNKS

🖼 [Original answer area · Question 84](https://tstudy.vercel.app/content/dp-800/eb-q084-answer.png)

</details>


---

## Q85 · pick 4

You have an Azure AI Search service and an index named hotels that includes a vector field named DescriptionVector.  
You query hotels by using the Search Documents REST API.

You add semantic ranking to the hybrid search query and discover that some queries return fewer results than expected, and captions and answers are missing.

You need to complete the hybrid search request to meet the following requirements:  
Include more documents when ranking.  
Always include captions and answers.

How should you complete the REST request body? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

```sql  
{
  "search": "ocean view",
  "vectorqueries": [
    {
      "vector": [/* embedding array */],
      "fields": "DescriptionVector",
      "k": [Dropdown 1]
      "kind": "vector"
    }
  ],
  "queryType": [Dropdown 2]
  "semanticConfiguration": "hotels",
  "captions": [Dropdown 3]
  "answers": [Dropdown 4]
  "top": 10,
  "hybridSearch": { "maxTextRecallSize": 50 }  
}  
```

- **A.** -50,
- **B.** 10,
- ✅ **C.** 50,
- **D.** "full",
- ✅ **E.** "semantic",
- **F.** "simple",
- ✅ **G.** "extractive",
- **H.** "generative",
- **I.** "none",
- ✅ **J.** "extractive",
- **K.** "generative",
- **L.** "none",

**Answer:** C, E, G, J

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 ("k") → 50,; Dropdown 2 ("queryType") → "semantic",; Dropdown 3 ("captions") → "extractive",; Dropdown 4 ("answers") → "extractive",)

#### Answer from the source

Dropdown 1 ("k"): 50,
Dropdown 2 ("queryType"): "semantic",
Dropdown 3 ("captions"): "extractive",
Dropdown 4 ("answers"): "extractive",

🖼 [Original answer area · Question 85](https://tstudy.vercel.app/content/dp-800/eb-q085-answer.png)

</details>


---

## Q86 · single choice

You have an Azure SQL database that contains a table named dbo.ManualChunks. dbo.ManualChunks contains product manuals.

A retrieval query already returns the top five matching chunks as nvarchar (max) text.  
You need to call an Azure OpenAI REST endpoint for chat completions. The request body must include both the user question and the retrieved chunks.

You write the following Transact-SQL code.

```sql  
01 CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders  
02 WITH IDENTITY = 'HTTPEndpointHeaders',  
03   SECRET = N'{"api-key":""}';  
04 GO  
05 CREATE OR ALTER PROCEDURE dbo.AskManuals  
06   . . .  
07   SELECT @chunks =  
08   (  
09     SELECT TOP (5)  
10       mc.ChunkText AS [text]  
11     FROM dbo.ManualChunks AS mc  
12     ORDER BY mc.Score DESC  
13     FOR JSON PATH  
14   );  
15   SET @payload =  
16   (  
17     SELECT  
18       'system' AS [messages[0].role],  
19       'Use only the provided manual chunks.' AS [messages[0].content],  
20       'user' AS [messages[1].role],  
21       CONCAT(@question, CHAR(10), JSON_QUERY(@chunks)) AS [messages[1].content]  
22  
23   );  
24  
25   EXEC @retval =  
26     . . .  
27 END;  
28 GO  
```

What should you insert at line 22?

- **A.** FOR XML AUTO, TYPE, XMLSCHEMA
- **B.** FOR JSON AUTO, INCLUDE_NULL_VALUES
- **C.** FOR XML PATH, INCLUDE_NULL_VALUES
- ✅ **D.** FOR JSON PATH, WITHOUT_ARRAY_WRAPPER

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. FOR JSON PATH, WITHOUT_ARRAY_WRAPPER

</details>


---

## Q87 · pick 2

You have an Azure SQL database that contains a table named knowledge_base. knowledge_base stores human resources (HR) policy documents and contains columns named title, content, category, and embedding.

You have an application named App1. App1 queries two relational tables named employee_profiles and benefits_enrollment that contain HR data. App1 hosts a chatbot that calls a large language model (LLM) directly.

Users report that the chatbot answers general HR questions correctly but provides outdated or incorrect answers when policies change. The chatbot also fails to answer questions that reference internal policy documents by title or category.  
You need to recommend a Retrieval Augmented Generation (RAG) solution to resolve the chatbot issues.

What should you recommend? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.

- **A.** employee_profiles and benefits_enrollment
- ✅ **B.** knowledge_base
- **C.** PDF exports of the policies
- **D.** The LLM training data
- **E.** Perform keyword searches.
- **F.** Call the LLM first, and then store the response.
- **G.** Fine-tune the LLM by using the data in knowledge_base.
- ✅ **H.** Generate query embeddings, and then run a vector similarity search.

**Answer:** B, H

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (Retrieve grounding data from) → knowledge_base; Dropdown 2 (Inference step to perform the retrieval) → Generate query embeddings, and then run a vector similarity search.)

#### Answer from the source

Dropdown 1 (Retrieve grounding data from): knowledge_base
Dropdown 2 (Inference step to perform the retrieval): Generate query embeddings, and then run a vector similarity search.

🖼 [Original answer area · Question 87](https://tstudy.vercel.app/content/dp-800/eb-q087-answer.png)

</details>


---

## Q88 · pick 2

Your company has an ecommerce catalog in a Microsoft SQL Server 2025 database named SalesDB. SalesDB contains a table named products. products contains the following columns: product_id (int) product_name (nvarchar(200)) description (nvarchar(max)) category (nvarchar(50)) brand (nvarchar(50)) price (decimal) sku (nvarchar(40))  
The description fields are updated daily by a content pipeline, and price can change multiple times per day.  
You want customers to be able to submit natural language queries and apply structured filters for brand and price.

You plan to store embeddings in a new VECTOR(1536) column and use VECTOR_SEARCH(... METRIC=‘cosine’ ...).

For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

- ✅ **A.** Generating an embedding by concatenating product_name, category, and description will support the customer requirements.
- **B.** Including price in the text used to generate embeddings is required.
- ✅ **C.** The underlying base type of the embeddings will be float(32).

**Answer:** A, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Corrected answer (graded)

Statement 1: Yes
Statement 2: No
Statement 3: Yes

> **💡 Why the source key was changed**
> Brand and price are applied as structured filters on their columns, and price changes several times a day, so it should not be baked into the embedding text. The descriptive text (product_name, category, description) is what natural language queries should match. Vector elements are stored as float32 by default. The source key was No for statement 1 and Yes for statement 2.
> Reference: https://learn.microsoft.com/en-us/sql/t-sql/data-types/vector-data-type

#### Answer from the source

Statement 1: No
Statement 2: Yes
Statement 3: Yes

🖼 [Original answer area · Question 88](https://tstudy.vercel.app/content/dp-800/eb-q088-answer.png)

</details>


---

## Q89 · single choice

You need to design a generative AI solution that uses a Microsoft SQL Server 2025 database named DB1 as a data source. The solution must generate responses that meet the following requirements:  
Are grounded in the latest transactional and reference data stored in DB1  
Do NOT require retraining or fine-tuning the language model when the data changes  
Can include citations or references to the source data used in the response  
Which scenario is the best use case for implementing a Retrieval Augmented Generation (RAG) pattern? More than one answer choice may achieve the goal. Select the BEST answer.

- **A.** summarizing free-form user input text
- **B.** training a custom language model on historical database data
- ✅ **C.** answering user questions based on company-specific knowledge
- **D.** generating marketing slogans based on user sentiment analysis

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. answering user questions based on company-specific knowledge

</details>


---

## Q90 · pick 3

You have an Azure SQL database that contains a table named stores. stores contains a column named description and a vector column named embedding.

You need to implement a hybrid search query that meets the following requirements:  
Uses full-text search on description for the keyword portion  
Returns the top 20 results based on a combined score that uses a weighted formula of 60% vector distance and 40% full-text rank  
How should you configure the query components? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

- ✅ **A.** VECTOR_DISTANCE and order by distance ascending
- **B.** VECTOR_SEARCH with METRIC cosine and TOP_N
- **C.** VECTORPROPERTY to calculate the similarity between two vectors
- **D.** CONTAINSTABLE on description and return ranked matches
- ✅ **E.** FREETEXTTABLE on description for keyword scoring
- **F.** JSON_VALUE extraction from description for keyword scoring
- ✅ **G.** order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4)
- **H.** order by (distance * 0.6) + (RANK * 0.4)
- **I.** order by (distance + RANK), and then apply TOP 20

**Answer:** A, E, G

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (Semantic query operator/function) → VECTOR_DISTANCE and order by distance ascending; Dropdown 2 (Keyword retrieval operator/function) → FREETEXTTABLE on description for keyword scoring; Dropdown 3 (Final ranking expression) → order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4))

#### Answer from the source

Dropdown 1 (Semantic query operator/function): VECTOR_DISTANCE and order by distance ascending
Dropdown 2 (Keyword retrieval operator/function): FREETEXTTABLE on description for keyword scoring
Dropdown 3 (Final ranking expression): order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4)

🖼 [Original answer area · Question 90](https://tstudy.vercel.app/content/dp-800/eb-q090-answer.png)

</details>


---

## Q91 · single choice

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

You need to use the UsefulPrompts table as defined in the AI requirements.

Which stored procedure should you use?

- **A.** sp_addendpoint
- **B.** xp_cmdshell
- **C.** sp_OACreate
- ✅ **D.** sp_invoke_external_rest_endpoint

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. sp_invoke_external_rest_endpoint

Another version of this question marks: B. sp_invoke_external_rest_endpoint (same option, different letter).

</details>


---

## Q92 · single choice

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

You implement ProcedureDocuments to support the planned changes.

When users consume data through the Retrieval Augmented Generation (RAG) pattern, they experience data retrieval delays.

You need to improve the data retrieval performance and reduce the number of tokens per retrieval.

What should you implement?

- ✅ **A.** chunking
- **B.** embeddings
- **C.** a small language model (SLM)
- **D.** JSON content

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Corrected answer (graded)

A. chunking

> **💡 Why the source key was changed**
> ProcedureDocuments already stores an Embedding for each row. Splitting the long Content into smaller, semantically coherent chunks means each retrieval returns only the relevant passages, which reduces the tokens sent to the model and speeds up retrieval. Embeddings alone do not reduce the size of what is retrieved. The source key was B (embeddings); another version of this question also marks chunking.
> Reference: https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents

#### Answer from the source

B. embeddings

Another version of this question marks: D. chunking.

</details>


---

## Q93 · single choice

Your team is developing an Azure SQL database solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.

You need to ensure that GitHub Copilot Chat uses the team’s coding standards when generating Transact-SQL code in Visual Studio Code.

What should you use?

- ✅ **A.** .github/copilot-instructions.md
- **B.** .vscode/settings.json
- **C.** %APPDATA%\Code\User\settings.json
- **D.** %APPDATA%\Code\User\copilot-instructions.md

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. .github/copilot-instructions.md

</details>


---

## Q94 · single choice

You have a Microsoft SQL Server 2025 database that contains a table named products. products contains two columns named description and embedding. embedding is generated from description.

You have an application named App1. App1 has a feature that uses the following query.

VECTOR_DISTANCE(‘cosine’, @query_vector, embedding)

Users report that the feature is slow during peak usage times.

You discover that during peak usage times, the semantic search latency increases and CPU utilization spikes.

You need to reduce latency and CPU utilization related to the App1 feature.

What should you do?

- **A.** Create a vector index on products.embedding and change the query to use VECTOR_NORMALIZE and NORM_TYPE = ‘norm1’.
- **B.** Use CONTAINSTABLE against description only and remove the vector search.
- ✅ **C.** Create a vector index on products.embedding and change the query to use VECTOR_SEARCH and METRIC = ‘cosine’.
- **D.** Add a nonclustered index on products.embedding.
- **E.** Change embedding to VARBINARY(8000).

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. Create a vector index on products.embedding and change the query to use VECTOR_SEARCH and METRIC = ‘cosine’.

</details>


---

## Q95 · pick 3

HOTSPOT  
You have a SQL database in Microsoft Fabric that contains a table named dbo.Products. dbo.Products contains product catalog data.

You need to create a stored procedure that performs hybrid search. The solution must meet the following requirements:

• Use approximate nearest neighbor (ANN) to retrieve the top 20 candidate products.  
• Re-rank only the candidates that also match a full-text query.  
• Generate the query embedding.

How should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

```sql  
CREATE OR ALTER PROCEDURE dbo.SearchProducts
    @query_text  NVARCHAR(4000),
    @keywords    NVARCHAR(4000)  
AS  
BEGIN
    SET NOCOUNT ON;
    DECLARE @qv VECTOR(1536) =
            [Dropdown 1] (@query_text USE MODEL Ada2Embeddings);
    ;WITH ann AS
    (
        SELECT t.product_id, t.product_name, s.distance
        FROM [Dropdown 2] (
            TABLE = dbo.Products AS t,
            COLUMN = embedding,
            SIMILAR_TO = @qv,
            TOP_N = 20,
            METRIC = 'cosine'
        ) AS s
    )
    SELECT TOP (20)
        t.product_id,
        t.product_name,
        ann.distance,
        fts.RANK AS text_rank
    FROM ann
    JOIN dbo.Products AS t
        ON t.product_id = ann.product_id
    JOIN [Dropdown 3] (dbo.Products, description, @keywords) AS fts
        ON t.product_id = fts.[KEY]
    ORDER BY (ann.distance * 0.6) + ((1.0 - fts.RANK/1000.0) * 0.4);  
END;  
GO  
```

- ✅ **A.** AI_GENERATE_EMBEDDINGS
- **B.** SEMANTICKEYPHRASETABLE
- **C.** VECTOR_NORMALIZE
- **D.** VECTOR_SEARCH
- **E.** CONTAINSTABLE
- **F.** SEMANTICSIMILARITYTABLE
- **G.** VECTOR_DISTANCE
- ✅ **H.** VECTOR_SEARCH
- ✅ **I.** CONTAINSTABLE
- **J.** FREETEXTTABLE
- **K.** SEMANTICKEYPHRASETABLE
- **L.** SEMANTICSIMILARITYDETAILSTABLE

**Answer:** A, H, I

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (DECLARE @qv = ... (@query_text USE MODEL Ada2Embeddings)) → AI_GENERATE_EMBEDDINGS; Dropdown 2 (FROM ... in ann CTE) → VECTOR_SEARCH; Dropdown 3 (JOIN ... (dbo.Products, description, @keywords) AS fts) → CONTAINSTABLE)

#### Answer from the source

Dropdown 1 (DECLARE @qv = ... (@query_text USE MODEL Ada2Embeddings)): AI_GENERATE_EMBEDDINGS
Dropdown 2 (FROM ... in ann CTE): VECTOR_SEARCH
Dropdown 3 (JOIN ... (dbo.Products, description, @keywords) AS fts): CONTAINSTABLE

🖼 [Original answer area · Question 95](https://tstudy.vercel.app/content/dp-800/eb-q095-answer.png)

</details>


---

## Q96 · single choice

You have a GitHub Enterprise subscription.

Your team is developing an Azure SQL dataset solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.

A mix of GitHub Copilot instructions is configured at different levels, including organization-wide, repository-wide, agent-specific, and personal.

Which instructions will take precedence over the others?

- **A.** repository-wide
- ✅ **B.** personal
- **C.** organization-wide
- **D.** agent-specific

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. personal

</details>


---

## Q97 · pick 3

DRAG DROP  
You have an Azure AI Search service and an index named hotels that includes a vector field named DescriptionVector.

You query hotels by using the Search Documents REST API.

You need to implement a hybrid search query that uses DescriptionVector and includes captions.

How should you complete the REST request body? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

```sql  
{
  "search": "ocean view",
  "queryType": [Target 1],
  "semanticConfiguration": [Target 2],
  "captions": [Target 3],
  "top": 10,
  "hybridSearch": { "maxTextRecallSize": 50 },
  "vectorQueries": [
    {
      "kind": "vector",
      "vector": [/* embedding array */],
      "fields": "DescriptionVector",
      "k": 50
    }
  ]  
}  
```

- **A.** "default"
- ✅ **B.** "extractive"
- **C.** "full"
- **D.** "generative"
- ✅ **E.** "hotels"
- **F.** "hybrid"
- **G.** "none"
- ✅ **H.** "semantic"
- **I.** "simple"

**Answer:** H, E, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 ("queryType") → "semantic"; Target 2 ("semanticConfiguration") → "hotels"; Target 3 ("captions") → "extractive")

#### Answer from the source

Target 1 ("queryType"): "semantic"
Target 2 ("semanticConfiguration"): "hotels"
Target 3 ("captions"): "extractive"

🖼 [Original answer area · Question 97](https://tstudy.vercel.app/content/dp-800/eb-q097-answer.png)

</details>


---

## Q98 · single choice

You have an Azure SQL database that contains tables named dbo.Tickets and dbo.TicketNotes. dbo.Tickets contains support tickets and dbo.TicketNotes contains ticket notes.

A retrieval query returns the top five relevant ticket notes for a user question.

You plan to implement a Retrieval Augmented Generation (RAG) pattern that meets the following requirements:

• Formats the retrieved relational data for large language model (LLM) processing  
• Sends the user question and retrieved context to an Azure OpenAI REST endpoint for chat completions  
• Extracts the response text from the LLM response

Which Transact-SQL function should you use to extract the response text?

- **A.** JSON_MODIFY(@response, ‘$.result’)
- **B.** OPENJSON(@response)
- **C.** JSON_QUERY(@response, ‘$.choices’)
- ✅ **D.** JSON_VALUE(@response, ‘$.choices[0].message.content’)

**Answer:** D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

D. JSON_VALUE(@response, ‘$.choices[0].message.content’)

</details>


---

## Q99 · pick 2

HOTSPOT  
You have an Azure SQL managed instance that supports a gaming leaderboard API and contains a table named dbo.Leaderboard.

You plan to reduce write latency during peak events of dbo.Leaderboard.

You need to ensure that dbo.Leaderboard supports point lookups. The leaderboard information does NOT need to persist after a restart.

Which type of table and index should you configure? To answer, select the appropriate options in the answer area.

NOTE: Each correct selection is worth one point.

- **A.** Rowstore disk-based
- **B.** SCHEMA_AND_DATA in-memory
- ✅ **C.** SCHEMA_ONLY in-memory
- ✅ **D.** HASH
- **E.** Nonclustered
- **F.** Nonclustered columnstore

**Answer:** C, D

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Dropdown 1 (Table type) → SCHEMA_ONLY in-memory; Dropdown 2 (Index type) → HASH)

#### Answer from the source

Dropdown 1 (Table type): SCHEMA_ONLY in-memory
Dropdown 2 (Index type): HASH

🖼 [Original answer area · Question 99](https://tstudy.vercel.app/content/dp-800/eb-q099-answer.png)

</details>


---

## Q100 · pick 3

DRAG DROP  
You have an Azure SQL database named SalesDB. SalesDB contains a table named dbo.Articles. dbo.Articles contains the following columns:

• ArticleId  
• Title  
• Body  
• LastModifiedUtc  
• EmbeddingVector

You have an application that generates embeddings from the concatenation of Title and Body and stores the results in EmbeddingVector.

You plan to implement an incremental embedding maintenance method that will use change data capture (CDC) to update embeddings only for rows that change, without scanning the entire table.

You need to ensure that only the columns required to generate the embeddings are captured. The solution must support querying net changes.

How should you complete the Transact-SQL script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

NOTE: Each correct selection is worth one point.

```sql  
USE [SalesDB];  
GO  
[Target 1]  
GO  
EXEC sys.sp_cdc_enable_table
    @source_schema = N'dbo',
    @source_name = N'Articles',
    @role_name = NULL,
    @captured_column_list = [Target 2],
    @supports_net_changes = [Target 3];  
GO  
```

- **A.** 0
- ✅ **B.** 1
- **C.** EXEC sys.sp_cdc_disable_db;
- ✅ **D.** EXEC sys.sp_cdc_enable_db;
- ✅ **E.** N'ArticleId, Title, Body'
- **F.** N'Title, Body, LastModifiedUtc, EmbeddingVector'

**Answer:** D, E, B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: ghép cặp — đáp án: Target 1 (statement after USE [SalesDB]; GO) → EXEC sys.sp_cdc_enable_db;; Target 2 (@captured_column_list) → N'ArticleId, Title, Body'; Target 3 (@supports_net_changes) → 1)

#### Answer from the source

Target 1 (statement after USE [SalesDB]; GO): EXEC sys.sp_cdc_enable_db;
Target 2 (@captured_column_list): N'ArticleId, Title, Body'
Target 3 (@supports_net_changes): 1

🖼 [Original answer area · Question 100](https://tstudy.vercel.app/content/dp-800/eb-q100-answer.png)

</details>


---

## Q101 · pick 2

You have an Azure SQL database that contains a table named Tickets_Embeddings. Tickets_Embeddings contains a VECTOR(1536) column.

Embeddings are generated by using text-embedding-ada-002 and the /openai/v1/embeddings endpoint.

After a review of the current environment, the following changes are requested:

• The AI architect has recommended switching to text-embedding-3-small.  
• The security team requires authentication by using Microsoft Entra managed identities only. Storing API keys in an application is prohibited.

Which two actions should you include in the solution? Each correct answer presents a complete solution.

NOTE: Each correct selection is worth one point.

- **A.** Alter the database tables.
- ✅ **B.** Regenerate all the embeddings.
- ✅ **C.** Change the endpoint.
- **D.** Change the primary keys for the tickets.
- **E.** Add a firewall rule.

**Answer:** B, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. Regenerate all the embeddings.
C. Change the endpoint.

</details>


---

## Q102 · single choice

You have an Azure container with a web app named app1-contoso-001 that hosts a Data API builder (DAB) container in front of an Azure SQL database. The app uses Azure Static Web Apps database connections for routing. The DAB container uses default runtime REST settings. You add an entity named Todo that uses a source named dbo.todos. Which URL pattern should clients use to access the Todo REST endpoint?

- **A.** https://app1-contoso-001.azurestaticapps.net/data-api/graphql/Todo
- **B.** https://app1-contoso-001.azurestaticapps.net/data-api/Todo
- ✅ **C.** https://app1-contoso-001.azurestaticapps.net/data-api/api/Todo
- **D.** https://app1-contoso-001.azurestaticapps.net/api/Todo

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. https://app1-contoso-001.azurestaticapps.net/data-api/api/Todo

</details>


---

## Q103 · pick 4

📋 **Fabrikam · DB1 case study**

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

#### Existing Environment

#### Azure Environment

Fabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:

- Patients

- Employees

- Procedures

- Transactions

- UsefulPrompts

- ProcedureDocuments

You store a column master key as a secret in Azure Key Vault.

You have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.

#### Problem Statements

Users report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.

#### Requirements

#### Planned Changes

Fabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.

#### Security Requirements

Fabrikam identifies the following security requirements:

- The TransactionProcessing application must use a passwordless connection to DB1.

- The Employees table contains two columns named TaxID and Salary that must be encrypted at rest.

- Auditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.

#### Database Performance Requirements

Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.

#### AI Search, Embeddings, and Vector Indexing

Fabrikam identifies the following AI-related requirements:

- Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).

- Users must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.

- The UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.

#### Development Requirements

Fabrikam identifies the following development requirements:

- Provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.

- Expose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API: read data from the procedures table without authentication; read and insert data into the Transactions table once authenticated; execute the sp_UpdateProcedurePatient stored procedure.

- Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.

- Information for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.

```sql  
CREATE TABLE dbo.ProcedureDocuments
  (
    DocumentId INT IDENTITY PRIMARY KEY,
    SourceId NVARCHAR(200) NULL,
    Content NVARCHAR(MAX) NOT NULL,
    Embedding VECTOR(1536) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );  
```

#### DAB

You create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.

```json  
"entities": {
  "Procedures": {
    "source": "dbo.Procedures",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "anonymous",
        "actions": [ "read" ]
      }
    ]
  },
  "Transactions": {
    "source": "dbo.Transactions",
    "rest": true,
    "graphql": true,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "read", "create" ]
      }
    ]
  },
  "UpdateProcedurePatient": {
    "source": "dbo.sp_ UpdateProcedurePatient",
    "rest": {
      "enabled": true,
      "method": "post",
      "path": "/procedurepatient"
    },
    "graphql": false,
    "permissions": [
      {
        "role": "authenticated",
        "actions": [ "execute" ]
      }
    ]
  }  
}  
```

In DB1, you plan to create a new table named EmployeesEncrypted to store employee data with ledger and column encryption capabilities. Which four actions should you perform in sequence?

> **ℹ️ Answer list only**  
> The source lists the four actions in its answer order and does not include distractor actions.

- ✅ **A.** Alter the Employees table to encrypt the TaxId and Salary columns.
- ✅ **B.** Create a column encryption key (CEK).
- ✅ **C.** Execute the sys.sp_copy_data_in_batches stored procedure.
- ✅ **D.** Create the EmployeesEncrypted table by generating a CREATE statement from the Employees table, changing the name to EmployeesEncrypted, and adding WITH (SYSTEM_VERSIONING = ON, LEDGER = ON (APPEND_ONLY = OFF)) to the end of the statement.

**Answer:** B, A, D, C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: sắp xếp thứ tự — thứ tự đúng: 1. Create a column encryption key (CEK). → 2. Alter the Employees table to encrypt the TaxId and Salary columns. → 3. Create the EmployeesEncrypted table by generating a CREATE statement from the Employees table, changing the name to EmployeesEncrypted, and adding WITH (SYSTEM_VERSIONING = ON, LEDGER = ON (APPEND_ONLY = OFF)) to the end of the statement. → 4. Execute the sys.sp_copy_data_in_batches stored procedure.)

#### Corrected answer (graded)

1. Create a column encryption key (CEK).
2. Alter the Employees table to encrypt the TaxId and Salary columns.
3. Create the EmployeesEncrypted table from the Employees CREATE statement with LEDGER = ON (APPEND_ONLY = OFF).
4. Execute the sys.sp_copy_data_in_batches stored procedure.

> **💡 Why the source key was changed**
> The CEK (protected by the column master key already in Azure Key Vault) must exist before columns can be encrypted. Encrypting TaxId and Salary in Employees first means the CREATE statement scripted from Employees carries the ENCRYPTED WITH definitions, so the new ledger table has the same encrypted columns. sys.sp_copy_data_in_batches then copies the rows from the regular table into the ledger table. The source listed step 3 before step 2, which would create the ledger table with plain-text columns.
> Reference: https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-how-to-convert-regular-table-ledger-table

#### Answer from the source

Source order: CEK → create EmployeesEncrypted (LEDGER = ON) → alter Employees to encrypt TaxId and Salary → sys.sp_copy_data_in_batches.

</details>


---

## Q104 · single choice

You need to mask the Salary column in the Employees table for non-privileged users so that it displays as 0 unless explicitly UNMASK permission is granted. Which function syntax should be applied?

- ✅ **A.** ADD MASKED WITH (FUNCTION = 'default()')
- **B.** ADD MASKED WITH (FUNCTION = 'partial(0, "xxxx", 0)')
- **C.** ADD MASKED WITH (FUNCTION = 'random(0, 0)')
- **D.** ADD MASKED WITH (FUNCTION = 'email()')

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. ADD MASKED WITH (FUNCTION = 'default()')

</details>


---

## Q105 · single choice

To secure tenant data isolation in a multi-tenant Azure SQL Database, which two T-SQL objects are required to implement Row-Level Security?

- ✅ **A.** An inline table-valued function and a Security Policy
- **B.** A scalar function and a Trigger
- **C.** A stored procedure and a View
- **D.** A Symmetric Key and a Certficate

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. An inline table-valued function and a Security Policy

</details>


---

## Q106 · single choice

You need to capture insert, update, and delete events on the dbo.Orders table without introducing performance overhead associated with synchronous T-SQL DML triggers. What feature should you enable?

- ✅ **A.** Change Data Capture (CDC)
- **B.** Change Tracking
- **C.** Temporal Tables
- **D.** Database Audit

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Change Data Capture (CDC)

#### Corrected answer (graded)

A. Change Data Capture (CDC)

> **💡 Why the source key was changed**
> CDC records insert, update and delete activity by reading the transaction log asynchronously, so it adds no synchronous work to the DML statements. Change Tracking is also trigger-free, but it is a synchronous mechanism that runs as part of each DML transaction and records only that a row changed, not the change events with their values. The source key was B.
> Reference: https://learn.microsoft.com/en-us/sql/relational-databases/track-changes/track-data-changes-sql-server

</details>


---

## Q107 · single choice

A query filtering by CategoryID and sorting by OrderDate performs an index scan. How should you design a nonclustered index to enable an index seek and eliminate the sort operator?

- ✅ **A.** CREATE INDEX IX_Orders ON dbo.Orders (CategoryID, OrderDate)
- **B.** CREATE INDEX IX_Orders ON dbo.Orders (OrderDate, CategoryID)
- **C.** CREATE INDEX IX_Orders ON dbo.Orders (CategoryID) INCLUDE (OrderDate)
- **D.** CREATE INDEX IX_Orders ON dbo.Orders (OrderDate) INCLUDE (CategoryID)

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. CREATE INDEX IX_Orders ON dbo.Orders (CategoryID, OrderDate)

</details>


---

## Q108 · single choice

Which system stored procedure must be called to retrieve the latest digest for database verification in Azure SQL Database Ledger?

- ✅ **A.** sys.sp_generate_database_ledger_digest
- **B.** sys.sp_verify_database_ledger
- **C.** sys.sp_get_ledger_digest
- **D.** sys.sp_copy_data_in_batches

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. sys.sp_generate_database_ledger_digest

</details>


---

## Q109 · single choice

When configuring Always Encrypted with enclave computations, where should the Column Master Key (CMK) be stored for secure automated application access?

- ✅ **A.** Azure Key Vault
- **B.** Azure SQL Master Database
- **C.** Local Windows Certificate Store on SQL Server
- **D.** Blob Storage Account

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Azure Key Vault

</details>


---

## Q110 · single choice

You add a new table named dbo.Products to your database. Which CLI command updates the dab-config.json file to expose this table as a GraphQL and REST entity named Product?

- ✅ **A.** dab add Product --source dbo.Products --permissions "anonymous:read"
- **B.** dab init --entity Product --source dbo.Products
- **C.** dab update Product --allow-anonymous
- **D.** dab start --config dab-config.json

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. dab add Product --source dbo.Products --permissions "anonymous:read"

</details>


---

## Q111 · single choice

You need to detect schema drift between your local SQL Database Project .dacpac and a target Azure SQL Database without executing any changes. Which SqlPackage action should you run?

- ✅ **A.** SqlPackage /Action:DeployReport
- **B.** SqlPackage /Action:Publish
- **C.** SqlPackage /Action:Script
- **D.** SqlPackage /Action:Extract

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. SqlPackage /Action:DeployReport

</details>


---

## Q112 · single choice

Without modifying application code or schema, you need to force a MAXDOP 1 hint on a specific query query_id = 42 using Query Store. Which command is correct?

- ✅ **A.** EXEC sys.sp_query_store_set_hints @query_id = 42, @query_hints = N'OPTION (MAXDOP 1)';
- **B.** ALTER DATABASE CURRENT SET MAXDOP = 1;
- **C.** EXEC sp_query_store_force_plan @query_id = 42, @plan_id = 1;
- **D.** OPTION (USE HINT('MAXDOP_1'))

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. EXEC sys.sp_query_store_set_hints @query_id = 42, @query_hints = N'OPTION (MAXDOP 1)';

</details>


---

## Q113 · single choice

To perform cosine similarity search on vector embeddings stored in Azure SQL Database, which T-SQL function is natively used?

- ✅ **A.** VECTOR_DISTANCE('cosine', vector1, vector2)
- **B.** COSINE_SIMILARITY(vector1, vector2)
- **C.** JSON_VALUE(vector1, '.distance')
- **D.** CHECKSUM_AGG(vector1)

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. VECTOR_DISTANCE('cosine', vector1, vector2)

</details>


---

## Q114 · single choice

Which database setting ensures that read operations do not block write operations without needing code changes in SELECT queries?

- ✅ **A.** ALTER DATABASE CURRENT SET READ_COMMITTED_SNAPSHOT ON;
- **B.** ALTER DATABASE CURRENT SET ALLOW_SNAPSHOT_ISOLATION ON;
- **C.** SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
- **D.** SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. ALTER DATABASE CURRENT SET READ_COMMITTED_SNAPSHOT ON;

</details>


---

## Q115 · single choice

You need to prevent developers with db_owner permissions from querying sensitive SSN data stored in a column. Which encryption technology guarantees this boundary?

- ✅ **A.** Always Encrypted
- **B.** Transparent Data Encryption (TDE)
- **C.** Dynamic Data Masking
- **D.** Column Level Grant/Deny Permissions

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Always Encrypted

</details>


---

## Q116 · single choice

Which SqlPackage action exports database schema and data into a compressed archive file for migration to Azure SQL Database?

- ✅ **A.** /Action:Export
- **B.** /Action:Extract
- **C.** /Action:Publish
- **D.** /Action:Import

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. /Action:Export

</details>


---

## Q117 · single choice

Which index type is best suited for accelerating query filter evaluation on high-cardinality non-key columns while keeping table storage compact?

- ✅ **A.** Nonclustered Index with INCLUDE columns
- **B.** Clustered Index
- **C.** Columnstore Index
- **D.** XML Index

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Nonclustered Index with INCLUDE columns

</details>


---

## Q118 · single choice

Which clause must be added to a CREATE TABLE statement to create a System-Versioned Temporal Table?

- ✅ **A.** WITH (SYSTEM_VERSIONING = ON (HISTORY_TABLE = dbo.TableHistory))
- **B.** WITH (LEDGER = ON)
- **C.** WITH (CHANGE_TRACKING = ON)
- **D.** WITH (MEMORY_OPTIMIZED = ON)

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. WITH (SYSTEM_VERSIONING = ON (HISTORY_TABLE = dbo.TableHistory))

</details>


---

## Q119 · single choice

When connecting to Azure SQL Database using Entra ID (Azure AD) passwordless authentication in a C# application, which connection string setting is required?

- ✅ **A.** Authentication=Active Directory Default;
- **B.** Integrated Security=SSPI;
- **C.** User ID=admin;Password=secret;
- **D.** Encrypt=False;

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Authentication=Active Directory Default;

</details>


---

## Q120 · single choice

To require JWT bearer token authentication for an entity in Data API Builder, which configuration property under permissions must be set?

- ✅ **A.** "role": "authenticated"
- **B.** "role": "anonymous"
- **C.** "role": "admin"
- **D.** "role": "public"

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. "role": "authenticated"

</details>


---

## Q121 · single choice

In an execution plan analysis, what does an 'Implicit Conversion' warning usually indicate?

- ✅ **A.** Data type mismatch causing an Index Scan instead of an Index Seek
- **B.** Outdated statistics causing incorrect row estimations
- **C.** Missing primary key constraint
- **D.** High TempDB usage

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Data type mismatch causing an Index Scan instead of an Index Seek

</details>


---

## Q122 · single choice

What is the key structural difference between an Append-Only Ledger Table and a System-Versioned Ledger Table?

- ✅ **A.** Append-Only tables disallow UPDATE and DELETE operations entirely.
- **B.** System-Versioned tables do not generate cryptographic digests.
- **C.** Append-Only tables do not support primary keys.
- **D.** System-Versioned tables do not store historical data.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Append-Only tables disallow UPDATE and DELETE operations entirely.

</details>


---

## Q123 · single choice

Which T-SQL command updates query optimizer statistics on a table with a full scan?

- ✅ **A.** UPDATE STATISTICS dbo.Orders WITH FULLSCAN;
- **B.** ALTER INDEX ALL ON dbo.Orders REBUILD;
- **C.** EXEC sp_updatestats;
- **D.** DBCC CHECKDB;

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. UPDATE STATISTICS dbo.Orders WITH FULLSCAN;

</details>


---

## Q124 · single choice

Which firewall configuration ensures Azure services can connect to your Azure SQL Database server while blocking all public IP access?

- **A.** Enable 'Allow Azure services and resources to access this server' and disable Public Network Access
- ✅ **B.** Disable Public Network Access and configure Private Endpoints
- **C.** Add 0.0.0.0 to 255.255.255.255 firewall rule
- **D.** Enable Service Endpoints only

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. Disable Public Network Access and configure Private Endpoints

</details>


---

## Q125 · single choice

Which function extracts a scalar value from a JSON string in Azure SQL Database?

- ✅ **A.** JSON_VALUE
- **B.** JSON_QUERY
- **C.** OPENJSON
- **D.** ISJSON

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. JSON_VALUE

</details>


---

## Q126 · single choice

Which catalog view in Query Store lists captured query runtime execution statistics?

- ✅ **A.** sys.query_store_runtime_stats
- **B.** sys.query_store_plan
- **C.** sys.query_store_query
- **D.** sys.query_store_wait_stats

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. sys.query_store_runtime_stats

</details>


---

## Q127 · single choice

To direct read-only query traffic to a Read Scale-Out replica in Azure SQL Database, what parameter must be specified in the connection string?

- ✅ **A.** ApplicationIntent=ReadOnly
- **B.** ReadScale=True
- **C.** Intent=Read
- **D.** Failover_Partner=ReadOnly

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. ApplicationIntent=ReadOnly

</details>


---

## Q128 · single choice

Which storage indexing technology is designed for real-time operational analytics (HTAP) on large transactional tables?

- ✅ **A.** Nonclustered Columnstore Index
- **B.** Clustered XML Index
- **C.** Spatial Index
- **D.** Hash Index

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Nonclustered Columnstore Index

</details>


---

## Q129 · single choice

How do you define environment-specific variables (such as target database names) in an SDK-style SQL Project?

- ✅ **A.** Using SqlCmdVariable items in the .sqlproj file
- **B.** Hardcoding values in T-SQL scripts
- **C.** Setting environment variables in app.config
- **D.** Defining JSON properties in dab-config.json

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Using SqlCmdVariable items in the .sqlproj file

</details>


---

## Q130 · single choice

What two database objects must be created prior to partitioning a large table in Azure SQL Database?

- ✅ **A.** Partition Function and Partition Scheme
- **B.** Partition Table and Clustered Index
- **C.** Filegroup and Data File
- **D.** Table Spec and Column Boundary

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Partition Function and Partition Scheme

</details>


---

## Q131 · single choice

Which lightweight event tracing tool in Azure SQL Database is used to capture database deadlock events?

- ✅ **A.** Extended Events (xml_deadlock_report)
- **B.** SQL Server Profiler
- **C.** DBCC TRACEON(1222)
- **D.** Activity Monitor

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Extended Events (xml_deadlock_report)

</details>


---

## Q132 · single choice

You need to grant a user permission to view execution plans without granting read access to underlying data. Which permission should be granted?

- ✅ **A.** GRANT VIEW DATABASE STATE TO [User];
- **B.** GRANT SELECT TO [User];
- **C.** ALTER ROLE db_datareader ADD MEMBER [User];
- **D.** GRANT VIEW DEFINITION TO [User];

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. GRANT VIEW DATABASE STATE TO [User];

</details>


---

## Q133 · single choice

In Data API Builder REST API, which HTTP verb is used to perform an upsert or full replacement of an entity?

- ✅ **A.** PUT
- **B.** POST
- **C.** PATCH
- **D.** GET

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. PUT

</details>


---

## Q134 · single choice

Which data type is typically used in SQL tables to implement row versioning for optimistic concurrency control?

- ✅ **A.** ROWVERSION / TIMESTAMP
- **B.** UNIQUEIDENTIFIER
- **C.** DATETIME2
- **D.** BIGINT

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. ROWVERSION / TIMESTAMP

</details>


---

## Q135 · single choice

Where can Azure SQL Database audit logs be target-configured to store log files?

- ✅ **A.** Azure Storage Account, Log Analytics Workspace, Event Hubs
- **B.** Local Disk drive only
- **C.** Azure Key Vault
- **D.** GitHub Artifacts

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Azure Storage Account, Log Analytics Workspace, Event Hubs

</details>


---

## Q136 · single choice

When connecting applications to Azure SQL Database, why is transient error handling (retry logic) essential?

- ✅ **A.** To handle temporary network drops, failovers, and service reconfigurations gracefully
- **B.** To fix T-SQL syntax errors automatically
- **C.** To bypass database authentication checks during downtime
- **D.** To automatically tune execution plans

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. To handle temporary network drops, failovers, and service reconfigurations gracefully

</details>


---

## Q137 · single choice

Retrieved documents are relevant and authorized for the caller, but their text may include commands addressed to the assistant. How should this text be handled when building a grounded model request?

- **A.** Use it as instruction text when the caller has access to the source.
- **B.** Use it as instruction text after removing apparent secrets.
- ✅ **C.** Use it as context data subordinate to application instructions.
- **D.** Use it as instruction text ordered by retrieval relevance scores.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

C. Use it as context data subordinate to application instructions.

#### Explanation from the source

Authorization permits the caller to access a document; it does not authorize that document to control the assistant. Supplying retrieved text as context data subordinate to application instructions preserves this boundary. Its facts can support a grounded response, while commands inside the text remain content to interpret rather than instructions to follow.

</details>


---

## Q138 · single choice

Exact search over all 200 eligible vectors meets the latency limit; ANN has measured recall below 100%. An ineligible vector is closer than every eligible vector. The query must return the exact nearest five eligible rows. Which plan guarantees the required result?

- ✅ **A.** Rank all eligible vectors by exact distance and take the nearest five.
- **B.** Use ANN over the eligible vectors and return its nearest five.
- **C.** Rerank 50 eligible ANN candidates exactly and take the nearest five.
- **D.** Rank all vectors by exact distance, take five, then remove ineligible rows.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Rank all eligible vectors by exact distance and take the nearest five.

#### Explanation from the source

Exact search already satisfies the latency limit. Rank all 200 eligible vectors by exact distance and take the nearest five, ensuring every eligible row participates in the ordering. ANN's incomplete recall can exclude a true neighbor, and exact reranking cannot recover a row absent from its candidate set. Taking five before filtering lets the closer ineligible vector consume a slot, leaving fewer than five eligible results.

</details>


---

## Q139 · single choice

Yesterday's executions were faster than today's, and the engine restarted overnight. Historical query capture was enabled throughout, with both periods still retained. Which source provides captured plans and runtime statistics for comparing the two periods?

- ✅ **A.** Query Store's retained plans and runtime statistics.
- **B.** Current plan-cache entries and cached execution statistics.
- **C.** An actual execution plan collected from a new execution.
- **D.** A snapshot of active requests and their current waits.

**Answer:** A

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

A. Query Store's retained plans and runtime statistics.

#### Explanation from the source

The comparison needs execution records from both sides of the restart. Query Store persists captured plans and runtime statistics across restarts, and both periods are retained here. It therefore provides the historical plans and performance measurements needed to compare yesterday with today. Current plan-cache entries cannot preserve that earlier execution history after the restart clears the cache.

</details>


---

## Q140 · single choice

You need a reusable number generator for invoice identifiers across multiple tables in an Azure SQL database.

The numbering object must be created independently of any table, and inserts should retrieve the next number when needed.

Which pair should you use?

- **A.** IDENTITY column and DBCC CHECKIDENT
- ✅ **B.** CREATE SEQUENCE and NEXT VALUE FOR
- **C.** UNIQUEIDENTIFIER and NEWID()
- **D.** ROW_NUMBER() and ORDER BY

**Answer:** B

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

#### Answer from the source

B. CREATE SEQUENCE and NEXT VALUE FOR

#### Explanation from the source

CREATE SEQUENCE defines a numbering object independently of table columns. Inserts into multiple tables can call NEXT VALUE FOR against the same sequence to obtain their next identifier, providing a reusable source of numbers. An IDENTITY property belongs to a particular table column and does not provide this shared, standalone generator.

</details>


---

## Q141 · pick 1

HOTSPOT  
You have an Azure SQL database named SalesDB.  
You have a Data API builder (DAB) instance that exposes the following entities in SalesDB.  
- A table entity named Order mapped to a table named dbo.Orders.  
- A stored procedure entity named FinalizeOrder mapped to a stored procedure named dbo.usp_FinalizeOrder.  
The DAB runtime configuration includes the following permissions.

```json  
{
   "entities": {
      "Order": {
          "source": "dbo.Orders",
          "permissions": [
             {
                "role": "authenticated",
                "actions": [ "read" ]
             }
          ]
      },
      "FinalizeOrder": {
           "source": "dbo.usp_FinalizeOrder",
           "permissions": [
             {
                 "role": "operations",
                 "actions": [ "execute" ],
                 "policy": {
                    "database": "TenantId = @claims.tenantId"
                 }
             }
           ]
       }
   }  
}  
```

Client requests include a Microsoft Entra access token.  
The client also sends HTTP header X-MS-API-ROLE: operations for both REST and GraphQL requests.  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.

- **A.** A REST GET request to the Order entity that includes the access token and X-MS-API-ROLE: operations will return data.
- **B.** When DAB runs the stored procedure, the database policy defined on the FinalizeOrder entity will be enforced.
- ✅ **C.** If the client omits the X-MS-API-ROLE header but still sends the same access token, the Order entity read request will run in the authenticated role context.

**Answer:** C

**Nguồn:** from ThinhNH39's data

<details><summary>Explanation</summary>

(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)

#### Answer from the source

Statement 1: No
Statement 2: No
Statement 3: Yes

#### Explanation from the source

DAB checks permissions for the role selected by x-MS-API-ROLE. The operations role has no read permission on Order and does not inherit the authenticated role’s permissions, so the GET request cannot return data.

DAB does not enforce database policies on stored-procedure entities. Any required tenant filtering must be implemented within the stored procedure.

With a valid access token and no role header, DAB uses the authenticated role, which has read permission on Order.

</details>
