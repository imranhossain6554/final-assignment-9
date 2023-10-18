import { baseApi } from "./api/baseApi";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search/searchSlice";

export const reducer = {
  // [postApi.reducerPath]: postApi.reducer,
  user: userReducer,
  search: searchReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
