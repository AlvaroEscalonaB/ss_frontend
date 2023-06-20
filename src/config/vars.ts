interface BackendApi {
  rootPath: URL,
  login: URL,
  logout: URL,
  signIn: URL,
  generateCatFact: URL,
  userFavorites: URL,
  communityFavorites: URL,
  addToFavorite: URL,
  deleteFavorite: (favoriteCatFact: Number) => URL,
}

const rootPath = import.meta.env.VITE_BACK_API || 'http://localhost:3001/api/v1';

const backendApi: BackendApi = {
  rootPath: new URL(rootPath),
  login: new URL(`${rootPath}/login`),
  logout: new URL(`${rootPath}/signout`),
  signIn: new URL(`${rootPath}/signin`),
  generateCatFact: new URL(`${rootPath}/cat_facts`),
  userFavorites: new URL(`${rootPath}/users/user_favorites`),
  communityFavorites: new URL(`${rootPath}/cat_facts/favorites`),
  addToFavorite: new URL(`${rootPath}/favorite_cat_facts`),
  deleteFavorite: (id) => new URL(`${rootPath}/favorite_cat_facts/${id}`),
}

export { backendApi }