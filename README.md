## Instalation

1. Make sure you have node 14+, also npm or yarn (I prefer yarn)
2. Download the repository ideally with this structure

- ss-project
  - ss_backend
  - ss_frontend

3. In the terminal go to ss_frontend folder and run `yarn` or `npm install`
4. Set the .env file with the followind data

```
VITE_BACK_API="http://localhost:3000/api/v1"
```

6. Now your app should be ready to run with `yarn dev` or `npm run dev`

## Used packages and explanation

- TailwindCSS: To give style inline to the components, also it's very handy with the TailwindCSS extension in VSCode
- react-router-dom: To handle routes and also protected routes through the react application
- zustand: Library that provides a store to handle data that is really easy to use that, in my opinion more that redux, redux-saga or RTK, also to make the app to preserve the session on page reload the localStorage is used to obtain the user data and keep logged.

## Design, structure decisions and extras

- The project has a file system that is common in react applications, screens are the components that goes in the router and are feeded by the components in the `components` folder. This way every folder performs a particular function in the App trying to make the search of the functions easier (You always can go to the router, see the tree structure and achieve the component you want)
- As is a typescript project the common interfaces (the intefaces that can be used through all the app) has its own folder, I consider that this is a good practice if the backend has a good documentation and a defined schema for each endpoint.
- This page has a minimal SEO, as a SPA only can have a single title and description, but is a good practice for the google crawler

## Improvements for future versions

- Create custom hooks to handle repetitive or common functions
- Use of react-query to save a caché and revalidation of requests
- Give more feedback to the user in case of an error on the response
- On sign up send a token email or a robust/safe alternative
- Create custom hooks to avoid repetition of certain operations, for example the common set of the token of requests, or the loading, error (this can be done with react-query library also).
- Pagination for the tables
