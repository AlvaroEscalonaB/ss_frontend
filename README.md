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

## Used packages and explanation

- TailwindCSS: To give style inline to the components, also it's very handy with the TailwindCSS extension in VSCode
- react-router-dom: To handle routes and also protected routes through the react application
- zustand: Library that provides a store to handle data that is really easy to use that, in my opinion more that redux, redux-saga or RTK

## Improvements for future versions

- Use of react-query to save a caché and revalidation of requests
- Give more feedback to the user in case of an error on the response
- On sign up send a token email or a robust/safe alternative
- Create custom hooks to avoid repetition of certain operations, for example the common set of the token of requests, or the loading, error (this can be done with react-query library also).
