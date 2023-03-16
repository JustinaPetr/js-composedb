import { ModelCodec } from '@composedb/model-codecs'
import { ioDecode } from '@composedb/services-rpc'
import { initTRPC } from '@trpc/server'
import * as io from 'io-ts'
// Workaround for TS2742 error - https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1270716220
import type {} from 'json-schema-typed/draft-2020-12.js'

import type { Service } from './service.js'

export type Context = {
  service: Service
}

const t = initTRPC.context<Context>().create()

export const router = t.router({
  createModel: t.procedure
    .input(
      ioDecode(
        io.intersection([
          io.strict({ model: ModelCodec }),
          io.partial({ indexDocuments: io.boolean }),
        ])
      )
    )
    .mutation(async () => {
      // return await req.ctx.service.models.create()
    }),
})

export type Router = typeof router
