import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { SessionState, logout, setCredentials } from "@/entities/session"
import { config } from "@/shared/config"

interface RefreshResult {
  data: any // тип данных, возвращаемых из /refresh
}

const baseQuery = fetchBaseQuery({
  baseUrl: `${config.API_ENDPOINT}/api`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as { session: SessionState }).session.accessToken
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error && "originalStatus" in result.error)
    if (result?.error?.originalStatus === 403) {
      console.log("sending refresh token")
      // send refresh token to get new access token
      const refreshResult = (await baseQuery("/refresh", api, extraOptions)) as RefreshResult
      console.log(refreshResult)
      if (refreshResult?.data) {
        const userId = (api.getState() as { session: SessionState }).session.userId
        // store the new token
        api.dispatch(setCredentials({ ...refreshResult.data, userId }))
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logout())
      }
    }

  return result
}

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
