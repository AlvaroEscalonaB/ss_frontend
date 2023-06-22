export interface CatFact {
  id: Number,
  fact: String,
}

export interface CatFactResponse {
  id: Number,
  fact: String,
  is_favorite: Boolean,
}

export interface CatFactCount {
  id: String,
  fact: String,
  count: Number,
}

export interface FavoriteCatFact {
  id: Number,
  status: Boolean,
}

export interface UserFavoriteCatFact {
  id: Number,
  cat_fact_id: Number,
  fact: String,
}