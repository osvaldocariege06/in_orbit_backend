import { fastify } from 'fastify'
import z from 'zod'
import { createGoal } from '../functions/create-goal'

const app = fastify()

app.post('/goals', async request => {
  const createGoalSchema = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.number().int().min(1).max(7),
  })

  const { title, desiredWeeklyFrequency } = createGoalSchema.parse(request.body)

  await createGoal({
    title,
    desiredWeeklyFrequency,
  })
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP server running! 🚀🚀'))
