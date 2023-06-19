interface BackendApi {
  rootPath: String,
  login: String,
  logout: String,
  signIn: String,
  generateCatFact: String,
  userFavorites: String,
  communityFavorites: String,
  addToFavorite: String,
}

const rootPath = import.meta.env.VITE_BACK_API || 'http://localhost:3001/api/v1';

const backendApi: BackendApi = {
  rootPath: rootPath,
  login: `${rootPath}/login`,
  logout: `${rootPath}/signout`,
  signIn: `${rootPath}/signin`,
  generateCatFact: `${rootPath}/cat_facts`,
  userFavorites: `${rootPath}/users/user_favorites`,
  communityFavorites: `${rootPath}/cat_facts/favorites`,
  addToFavorite: `${rootPath}/favorite_cat_facts`,
}

export { backendApi }