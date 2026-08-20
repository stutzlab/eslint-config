# @stutzlab/eslint-config

ESLint rules in 'Golang style' used by most of our projects.

## Quick Start

```bash
pnpm add -D @stutzlab/eslint-config
```

```js
// eslint.config.js
const baseConfig = require('@stutzlab/eslint-config');

module.exports = [
  ...baseConfig,
];
```

## Installation

```bash
npm install -D @stutzlab/eslint-config
# or
pnpm add -D @stutzlab/eslint-config
```

## Examples

See the sibling `example/` folder for a complete runnable example that consumes the packed artifact from `lib/dist2/`.

## Development

```bash
make build
make lint
make test
```

## License

MIT
