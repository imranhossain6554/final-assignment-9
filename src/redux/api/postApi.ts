 
import { baseApi } from "./baseApi";


export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostData: builder.query({
      query: () => "hotels",
    }),
    singlePostData: builder.query({
      query: (id) => ({
        url: `hotel/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostDataQuery, useSinglePostDataQuery } = productApi;
