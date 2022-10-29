# recolors

`picocolors` alternative as a module!

```ts
import { green, italic } from 'recolors'

console.log(
  green(`How are ${italic(`you`)} doing?`)
)
```

Or alternatively:

```ts
import * as nc from 'recolors'

console.log(
  nc.green(`How are ${nc.italic(`you`)} doing?`)
)
```

> There are no default exports!

## Why

When embedding `picocolors`, you say goodbye to the tree shaking, this library is designed to be embedded instead, unused colors are removed from the final bundle.

## Difference with picocolors

- ES Module instead of CommonJS
- Better typings!
- `picocolors.isColorSupported` is `COLORS_SUPPORTED`

```ts
import { COLORS_SUPPORTED } from 'recolors'
```

- There are no default exports! You need to use `import { red } from 'recolors'` or `import * as nc from 'recolors'`
