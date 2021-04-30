---
title: Node JS 101
description: Get started with node js.
tags:
  - software
  - 101
  - node-js
lastmod: 2021-04-30T23:36:06-05:00
publishdate: 2021-04-30T23:36:06-05:00
coverImageUrl: ""
coverGifUrl: ""
---

## Table of contents

## Introduction

---

**JavaScript** is a `interpreted` language which means it needs to have an interpreter in the environment to read the actual source code and execute it. This differs from a compiled language which will `staticly analyse` the code in advance and then compile it down to a binary which will run on the machine.

> - Static program analysis is the analysis of computer software that is performed without actually executing programs, in contrast with dynamic analysis, which is analysis performed on programs while they are executing.

JavaScript was never designed to be complied language but mordern JavaScript engines like `V8` and `SpiderMonkey` uses features of a compiler to squeeze out additional performance from the language.
The both do `JIT compilation`. In the case of `V8`, it'll compile all of your JS code to native machine code before running it as oppose to interpreting byte code line by line like a normal interpreter.

**Node js** is a JavaScript runtime built on `V8 engine`. Node.js uses an `event-driven`, `non-blocking I/O` model that makes it lightweight and efficient. Also the Node.js package ecosystem, **npm**, is the largest ecosystem of open source libraries in the world.

## What is an event and event-driven?

---

An event is any significant occurrence or change in state for system hardware or software. An event is not the same as an event notification, which is a message or notification sent by the system to notify another part of the system that an event has taken place.

The `event-driven` model is where we have a `producer` and a `consumer` of that event. So when an event occurs the producer detects that event and transmits that to the consumer via an `event-channel`, where an event processing platform processes the event asynchronously. They might process the event or may only be impacted by it. The event processing platform will execute the correct response to an event and send the activity downstream to the right consumers. This downstream activity is where the outcome of an event is seen.

> - To know more about the **event-driven** architecture read the following `Red Hat` [post](https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture).

`EventEmitter` is a class that helps us create a publisher-subscriber pattern in NodeJS. With an event emitter, we can simply raise a new event from a different part of an application, and a listener will listen to the raised event and have some action performed for the event.

Let's listen to the `exit event`.

```javascript
// prcess is global that is available in the node environment
// When a process exits it emits an event called 'exit' and thats
// when the callback below will be called.

process.on("exit", function () {
  console.log("Process exit is instantiated");
});
```

Creating custom `event-emitter`

```javascript
const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("🍩");
});

eventEmitter.emit("lunch");
eventEmitter.emit("lunch");

// Output
// 🍩
// 🍩
```

## Understand the Event Loop

---

Since JavaScript is a `single treaded language`, a single intensive CPU task may destroy the language.
So to handle long running task **event loop** is used.

In basic sense, its an while loop that waits for messages from the queue and then process their synchronous instructions to completion.

```javascript
// Simple event loop

while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

And this event loop is used all the time when we are browser. For an example, you might setup an `event-listner` for a button click, when the user click that button it sends a message to the queue and the runtime will process whatever javascript you defined as the callback for that event and this is what makes javascript `non-blocking` because the only thing it ever does it listen to events and handle callbacks so it never actually waiting for the return value of a function, the only thing its actually waiting for is the CPU to process the synchronous code which and for most thing that on a scale of micro-seconds.

```javascript
const btn = document.getElementById("btn");
btn.onclick = myCallbackFunc;
```

Now consider the 1st iteration of the event loop, it will first handle all of the synchronous event in the code and after those are done, it will look for any messages or callbacks in the queue (**Task Queue**) ready to be executed. The below script will be explain this.

```javascript
setTimeout(() => console.log("this will be executed 2nd"), 0);
console.log("this will be executed 1st");
```

This is really amazing because now you can offload long running jobs (like `Browser APIs`, `File System Operation`, `HTTP Calls` and anything that async.) to completely separate thread pool.

But there is something know as **Micro Task** queues which are introduced via **Promises**. In the below script the promise will be enqueued in the micro task queue and the micro task queue has **priority** over the **main task queue** which is uses for `dom apis`, `setTimeout` and things like that.

```javascript
setTimeout(() => console.log("this will be executed 3rd"), 0);
Promise.resolve().then((v) => console.log("this will be executed 2nd"));
console.log("this will be executed 1st");
```

> **For each round of the event loop**
>
> - 1. Run the sync code
> - 2. Run Promise or microtask callbacks
> - 3. Run async task callbacks

> - For video reference view the event driven part of the following [video](https://www.youtube.com/watch?v=FSs_JYwnAdI&t=13s).

## File System

---

Node has an built in files system. We can use this system for various task using the `fs` module.

```javascript
const { readFile, readFileSync } = require("fs");

// Sync
const txt = readFileSync("./hello.txt", "utf8");
console.log(txt);

// Async
readFile("./hello.txt", "utf8", (err, txt) => {
  console.log(txt);
});

// Promise async
const { readFile } = require("fs").promise;

async function hello() {
  const file = await readFile("./hello.txt", "utf8");
}
```

## Modules

---

A module is a javascript file that exports its code. Built in modules are fs, events, etc...

> - Common JS uses this syntax - require()
> - ES Modules syntax - import/export

```javascript
// myModule.js
module.exports({
  name: "James Bond",
});
```

```javascript
// index.js

const myModule = require("./myModule");
console.log(myModule);

// output
// {
//   name: "James Bond";
// }
```
