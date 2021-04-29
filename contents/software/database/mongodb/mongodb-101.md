---
title: MongoDB 101
description: Get started with MongoDB
tags:
  - software
  - 101
  - database
  - mongodb
lastmod: 2021-04-29T22:50:06-05:00
publishdate: 2021-04-29T22:50:06-05:00
coverImageUrl: ""
coverGifUrl: ""
---

## Table of contents

## What is Mongo DB Database

---

A `database` is a structured way to store and access data. A database is usually controlled by a `database management system (DBMS)`. `No SQL` databases non-tabular and store data other than relational tables. The main types of No SQL databases are `document`, `key-value`, `wide-column`, and `graph`. `Mongo DB` is a No SQL Document database which means data in Mongo DB is stored as documents and these documents are stored in collections of documents.

## What are Documents and Collections

---

> - **Documents** are a way to organize and store data as a set of field-value pairs.
>
> ```javascript
> {
>   <field>: <value>,
>   <field>: <value>,
>   "name": "James Bond",
>   "age": 39,
> }
> ```

> - **Collection** is an organized store of documents in Mongo DB, usually with common fields between documents.
> - Example can be collection of `blog posts` where each document represents individual `post`.

> - A database will contain multiple documents.
> - For example a collection of `users`, `posts` and `tags`.

## Differen between Document and Key-Value Pair databases

---

> Before knowing about the difference its important to know about `opaque` and `transparency` in
>
> - **Opaque** in terms of data types means a data type whose concrete data structure is not defined in an interface.
> - **Transparent** in terms of data types means a data type whose representation is visible is called transparent.

A **key-value** store provides the simplest possible data model and is exactly what the name suggests: it's a storage system that stores values indexed by a key. You're limited to query by key and the values are **opaque**, the store doesn't know anything about them. This allows very fast read and write operations (a simple disk access) and I see this model as a kind of non volatile cache (i.e. well suited if you need fast accesses by key to long-lived data).

A **document-oriented** database extends the previous model and values are stored in a structured format (a document, hence the name) that the database can understand. For example, a document could be a blog post and the comments and the tags stored in a denormalized way. Since the data are **transparent**, the store can do more work (like indexing fields of the document) and you're not limited to query by key. As I hinted, such databases allows to fetch an entire page's data with a single query and are well suited for content oriented applications (which is why big sites like Facebook or Amazon like them).

> **For more read the below**
>
> In general, documents have more visible structure to the engine managing them than key-value stores tend to have. Often, the values in key-value stores are opaque blobs that are regarded as little more than contiguous bytes of a specified length by the engine. There may be support for an equality check or something in the value area, but often equality is byte-by-byte equality.
>
> Document stores usually have a known format, often something like JSON or XML, that the engine can use to query and modify the contents beyond simple fetching using a key.
>
> Also, key-value stores tend to have smaller values, and are optimized for having lots and lots of little records. Document datastores are expected to have bigger records.

## What is Atlas?

---

Atlas is `database as a service (DAAS)` provided by Mongo DB where `Mongo DB` is used at the core of Atlas for storage and retrival of the data. There are many tools and services provided by Atlas which use Mongo DB database for data storage and retrival. Atlas features go beyond the functionality of organizing and storing data, examples are `Charts`, `Realm`, `Security` features and more.

Atlas users can deploy clusters. **Cluster** is a group of servers that store your data. These are servers are configured and are called **replica set** which is a set of a few connected Mongo DB **instances** that store the same data.

> - **Instance** is a single machine locally or in the cloud running a certain software. In this case it the `Mongo DB` database being run in the cloud.

This setup ensures that if something happens to one of the machine in the `replica set`, the data will remain intact and available for use by the application by the remaining working machines of the replica set. So every time you make changes to a document/collection, redundant copies of the data are stored within the replica set.

> - To know more about **cluster** read the following [stackoverflow post](https://stackoverflow.com/questions/43445975/what-is-a-cluster-in-mongodb/43447558), the 1st answer in post discusses about what are clusters, what are **shards** and complications involved with it.

## How does Mongo DB store data?

---

So data is store in documents.

### JSON

---

When you `view` or `update` documents in `mongo shell`, you are working with `JSON`. Here the document starts and ends with `curly brackets i.e. {}`. The `keys` are surrounded by `quotes i.e. ""`. Below is an example.

```json
{
  "name": "James Bond",
  "age": 39,
  "location": {
    "streetName": "968 Herzog Skyway",
    "county": "Cambridgeshire"
  }
}
```

Here if you noticed then you'll see `location` field contains a `document` as its value, this is called as **sub document**.

> **Pros and Cons of JSON**
>
> **Pros**
>
> - Friendly
> - Readable
> - Familiar
>
> **Cons**
>
> - JSON is in text based format & `text parsing` is very slow
> - JSON readable format is `space consuming`
> - JSON supports only limited data types

### BSON

---

The data stored in memory in Mongo DB is in **BSON** format. BSON bridges the gap between `binary representation` and `JSON`. It is optimized for **speed**, **space** and **flexibility** and it has **high performance** and focused on **general use**.

BSON has been extended to support other data types like `dates` and `binary` data types.

> **JSON**
>
> - Encoding - UTF-8 String
> - Data support - string, boolean, number, array
> - Readability - human, machine
>
> **BSON**
>
> - Encoding - binary
> - Data support - string, boolean, number(integer, long, float, etc...), array, date, raw binary
> - Readability - machine

> - Mongo DB stores the data in BSON both internally and over the network.
> - JSON can be natively stored and retrive in Mongo DB
> - Mongo DB document can still be thought of JSON format, anything you can represent in JSON can also be represented in BSON, just BSON provides additional features like speed and flexiblity

> - To know more about JSON and BSON follow the official Mongo DB [post](https://www.mongodb.com/json-and-bson)

## Importing and Exporting

---

We can import and export from/to local machine and different systems, also we can backup cloud data locally.

But you have to decide in which format you want to import or export data in `JSON` or `BSON`. For example if you want to create a backup locally for the cloud data or export data to a different system then in these cases `BSON` as data format is great but if you export to a local machine then `JSON` is a good option.

> **JSON**
>
> - **mongoimport** - for import
> - **mongoexport** - for export
>
> **BSON**
>
> - **mongorestore** - for import
> - **mongodump** - for export

### Export

---

```bash
mongodump --uri "<Atlas Cluster URI>"

# this exports the data in BSON
```

```bash
mongoexport --uri "<Atlas Cluster URI>" --collection=<collection name> --out=<filename>.json

# this exports the data in JSON
```

> - The **URI** (Uniform Resource Identifier), in case of Mongo DB, it uses **srv** string which establishes a `secure` connection between Mongo DB and your application.

### Import

---

To import you need to have JSON or BSON file that you want to import and depending on what you have available you can use `mongorestore` or `mongoimport`.

> - A **binary data backup** saves a copy of your directory data that you can use if the database files later become corrupted or deleted. This operation takes the back up of the database only and does not back up any other data such as configuration data and certificates.

mongorestore loads data from a `binary database dump`, created by mongodump. So using the two in conjunction can be a backup strategy if you do manual backup and restore it at some time. The `mongodump` is a utility for creating database backups. The utility can be used for creating binary export of the database contents.

```bash
mongorestore --uri "<Atlas Cluster URI>" --drop dump

# this imports the data in BSON dump
```

```bash
mongoimport --uri "<Atlas Cluster URI>" --drop=<filename>.json

# this imports the data in JSON
```
