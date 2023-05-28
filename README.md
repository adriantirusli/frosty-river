# Frosty River

Frosty River is a Commodity Data based on location in Indonesia.
The live version is on [frosty-river.vercel.com](https://frosty-river.vercel.app/).

## Technologies Used

- [React](https://yarn.pm/react)
- [React Query](https://yarnpkg.com/package/@tanstack/react-query)
- [React Router DOM](https://yarnpkg.com/package/react-router-dom)
- [Redux Toolkit](https://yarnpkg.com/package/@reduxjs/toolkit)
- [Yarn](https://yarnpkg.com)

## Usage

To prevent conflict in module resolution, make sure to use [Yarn](https://yarnpkg.com)
so `yarn.lock` won't conflict with `package-lock.json`.

- Clone repo: `git clone git@github.com:adriantirusli/frosty-river.git`
- Install dependencies: `yarn`
- Start development server: `yarn start`

And using stable Node.js version is highly recommended.

## Production

If `.next` directory is not exists, please build the project first:

```bash
yarn build
```
