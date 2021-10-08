# Dashgo
Simple authentication using ReactJS and NextJS.

## Install Next and dependencies
To create a NextJS project in an existing directory, run `yarn create next-app .`

### Dependencies
```
# Primary dependencies
yarn add typescript sass @types/react @types/react @types/node -D

# Axios
yarn add axios

# Cookies library
yarn add nookies

# JWT Decode
yarn add jwt-decode
```

### Get the backend project
* Clone the project from https://github.com/rocketseat-education/ignite-reactjs-auth-backend
* Install the dependencies `yarn`
* Run the project `yarn dev`
* The project will run at http://localhost:3333

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Structure
```
📦src
 ┣ 📂components
 ┃ ┗ 📜Can.tsx
 ┣ 📂contexts
 ┃ ┗ 📜AuthContext.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useCan.ts
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜dashboard.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜metrics.tsx
 ┣ 📂public
 ┣ 📂services
 ┃ ┣ 📂errors
 ┃ ┃ ┗ 📜AuthTokenError.ts
 ┃ ┣ 📜api.ts
 ┃ ┗ 📜apiClient.ts
 ┣ 📂styles
 ┃ ┣ 📜Home.module.scss
 ┃ ┗ 📜globals.scss
 ┗ 📂utils
 ┃ ┣ 📜validateUserPermissions.ts
 ┃ ┣ 📜withSSRAuth.ts
 ┃ ┗ 📜withSSRGuest.ts
 ```