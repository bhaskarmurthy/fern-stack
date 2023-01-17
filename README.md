# FERN Stack

```
npx create-remix@latest --template remix-run/blues-stack
```

## What's in the stack

- [Firebase functions](https://firebase.google.com/docs/functions) for `Express` API
- [Firebase hosting](https://firebase.google.com/docs/hosting) for SPA using `ViteJS` + `React`
- [GitHub Actions](https://github.com/features/actions) for deploying on pull requests and merge
- [asdf](https://github.com/asdf-vm/asdf) for managing runtime versions

## Development

- Setup runtime versions:

   ```sh
   asdf install
   ```

- Intialize `Firebase` project:

  ```sh
  firebase init
  # update .firebaserc with project name
  ```

- Build `functions`:

  ```sh
  cd functions
  pnpm install
  pnpm run build
  ```

- Build `hosting`:

  ```sh
  cd web
  pnpm install
  pnpm run build
  ```

- Start dev emulators:

  ```sh
  firebase emulators:start --only hosting,functions
  ```

## Deployment

- Deploy `functions`

  ```sh
  cd functions
  pnpm run deploy
  ```

- Deploy `hosting`

  ```sh
  cd web
  pnpm run build
  pnpm run deploy
  ```
