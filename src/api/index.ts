import { backendApi } from "./../config/vars";
import type { User } from "../store/userStore";
import type { CatFactResponse, CatFact, CatFactCount, FavoriteCatFact } from "../interfaces";

const apiAuth = async (name: String, action: URL): Promise<User | null> => {
  const rawLoginResponse = await fetch(action, {
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      name: name
    }),
    method: "POST",
  })
  
  if (rawLoginResponse.ok) {
    const user: User = await rawLoginResponse.json(); 
    return user;
  }
  return null;
}


const apiLogin = async (name: String) => apiAuth(name, backendApi.login);

const apiSignUp = async (name: String) => apiAuth(name, backendApi.signUp);

const apiUserFavorites = async (token: String): Promise<CatFact[] | null> =>  {
  // const userData = useUserStore().user;
  const rawDataResponse = await fetch(backendApi.userFavorites, {
    headers: {
      authorization: token as any,
    },
    method: "POST",
  });

  if (rawDataResponse.ok) {
    const dataResponse: CatFact[] = await rawDataResponse.json();
    return dataResponse
  }
  return null;
}

const apiCommunityFavorites = async (token: String): Promise<CatFactCount[] | null > => {
  const rawDataResponse = await fetch(backendApi.communityFavorites, {
    headers: {
      authorization: token as any
    },
    method: "POST",
  });
  if (rawDataResponse.ok) {
    const dataResponse: CatFactCount[] = await rawDataResponse.json();
    return dataResponse
  }
  return null;
}

const apiGenerateCatFact = async (token: String): Promise<CatFactResponse | null> => {
  const rawDataResponse = await fetch(backendApi.generateCatFact, {
    headers: {
      authorization: `Bearer ${token}` as any
    },
    method: "POST",
  });
  if (rawDataResponse.ok) {
    const dataResponse: CatFactResponse = await rawDataResponse.json();
    return dataResponse
  }
  return null;
}

const apiAddFavorite = async (catFactId: Number, token: String): Promise<FavoriteCatFact | null> => {
  const rawDataResponse = await fetch(backendApi.addToFavorite, {
    headers: {
      authorization: `Bearer ${token}` as any,
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      cat_fact_id: catFactId,
    })
  });
  if (rawDataResponse.ok) {
    const favoriteCatFact: FavoriteCatFact  = await rawDataResponse.json();
    return favoriteCatFact;
  }
  return null
}

const apiDeleteFavorite = async (favoriteCatFactId: Number, catFactId: Number, token: String): Promise<Boolean> => {
  const rawDataResponse = await fetch(backendApi.deleteFavorite(favoriteCatFactId), {
    headers: {
      authorization: `Bearer ${token}` as any,
      "content-type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({
      cat_fact_id: catFactId,
    })
  });
  if (rawDataResponse.ok) {
    const favoriteCatFact: FavoriteCatFact = await rawDataResponse.json();
    return favoriteCatFact.status
  }
  return false;
}



export { apiLogin, apiSignUp, apiUserFavorites, apiCommunityFavorites, apiAddFavorite, apiGenerateCatFact, apiDeleteFavorite }