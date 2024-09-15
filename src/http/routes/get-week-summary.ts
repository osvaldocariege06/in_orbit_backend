import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../functions/create-goal'
import { getWeekSummary } from '../../functions/get-week-summary'

export const getWeekSummaryRoutes: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async () => {
    const result = await getWeekSummary()

    return result
  })
}
