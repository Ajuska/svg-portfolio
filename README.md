# svg-portfolio
A portfolio heavily build with SVG components.

## Developing

### Prerequisites

- [Bun](https://bun.sh) installed >=v1.0

Install dependencies with `bun install` and start a development server:

```bash
bun --bun run dev

# or start the server and open the app in a new browser tab
bun --bun run dev -- --open
```

To run the dev server with Node.js instead of Bun, you can omit the --bun flag.

## Building

To create a production version of the app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.