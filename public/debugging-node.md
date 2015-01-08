## Debugging Node

>>>

## When Are We Debugging?

<<

- fixing bugs
- finding performance bottlenecks <!-- .element: class="fragment fade-in" -->
- writing new features <!-- .element: class="fragment fade-in" -->
- reverse-engineering APIs <!-- .element: class="fragment fade-in" -->

>>>

## How?

>>>

## `console.log()`

<<

Never commit `console.log()`

__NEVER EVER!!!__ <!-- .element: class="fragment fade-in" -->

But it's perfectly fine for quick answers. <!-- .element: class="fragment fade-in" -->

>>>

## debug module

`npm install debug`

<<

```bash
$ DEBUG=* node examples/bullshitter # show everything
$ DEBUG=bullshit node examples/bullshitter
$ DEBUG=bullshit:parser node examples/bullshitter
```

>>>

## `node debug`

<<

```bash
$ node debug examples/bullshitter
```

- debugger; statement <!-- .element: class="fragment fade-in" -->
- repl <!-- .element: class="fragment fade-in" -->

>>>

## `node --debug`
## `node --debug-brk`

<<

Wait. What?!

```bash
$ node --debug-brk examples/bullshitter
```

```bash
$ node debug localhost:5858
```

>>>

## node-inspector

`npm install -g node-inspector`

>>>

## About the event loop

<<

### `next`, `step in`, and `step out`

Only work on a single turn through the event loop

<<

### That means you can't step through anything asynchronous

- async callbacks <!-- .element: class="fragment fade-in" -->
- promises <!-- .element: class="fragment fade-in" -->
- generators <!-- .element: class="fragment fade-in" -->
- timers (setTimeout/setInterval) <!-- .element: class="fragment fade-in" -->
- process.nextTick/setImmediate <!-- .element: class="fragment fade-in" -->

<<

### Solution: breakpoints

>>>

# Let's debug a running process on a production server!

<<

next time...

:(