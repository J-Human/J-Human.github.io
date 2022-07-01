# Developer guide

## Prerequisites

-   Node.js v18 or higher[^fn]
-   pnpm v7 or higher[^fn]
-   Git

[^fn]: Lower versions may work but isn't tested.

## Process

1. Clone the repository. Then, make sure to go to the output directory.

```sh-session
git clone https://github.com/J-Human/J-Human.github.io.git
```

2. Install all dependencies:

```sh-session
pnpm install
```

3. Build the source by running `pnpm build`, or start a local server at http://localhost:3000 via `pnpm dev`.

ESLint is used to have a consistent style in the code, make sure to run `pnpm lint` to find possible errors.
