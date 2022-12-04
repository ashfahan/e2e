import { Response } from "../../types/types"
import { rtkApi } from "../rtk"
import { InsightAnalysis } from "./finance.interfaces"

export const financeApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    InsightAnalysis: builder.query<Response<{ insightAnalyses: InsightAnalysis[] }>, { linkRequestId: string }>({
      query: ({ linkRequestId }) => ({
        url: `/api/finance/LinkRequest/InsightAnalysis?linkRequestId=${linkRequestId}`,
        method: "get",
      }),
      providesTags: [{ type: "analysis" }],
    }),
  }),
})

export const { useInsightAnalysisQuery } = financeApi
