import { teardown } from 'jest-dev-server'
import fs from 'fs-extra'

export default async function globalTeardown() {
  await Promise.all([
    globalThis.IPFS_CONTROLLER.stop(),
    fs.rm(globalThis.TEMP_DIR_PATH, { force: true, recursive: true }),
  ])
  await teardown()
}
