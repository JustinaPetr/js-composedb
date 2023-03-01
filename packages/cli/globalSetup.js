import { join } from 'node:path'
import { Model } from '@ceramicnetwork/stream-model'
import fs from 'fs-extra'
import ipfsBin from 'go-ipfs'
import { createController } from 'ipfsd-ctl'
import { setup } from 'jest-dev-server'
import * as kuboRpcModule from 'kubo-rpc-client'
import { dir } from 'tmp-promise'

async function getIPFS() {
  return await createController({
    args: ['--enable-pubsub-experiment'],
    disposable: true,
    ipfsBin: ipfsBin.path(),
    kuboRpcModule,
  })
}

async function getPaths() {
  const tempDir = await dir({ unsafeCleanup: true })
  const tempPath = tempDir.path

  const configPath = join(tempPath, 'config')
  const stateStoreDir = join(tempPath, 'statestore')
  await Promise.all([fs.ensureDir(configPath), fs.ensureDir(stateStoreDir)])

  return {
    tempDir: tempPath,
    stateStoreDir,
    configFile: join(configPath, 'daemon.config.json'),
    indexingDB: join(tempPath, 'indexing.sqlite'),
  }
}

// Create the custom config here to make sure that we start with a clear indexing db setup each time
// TODO: Investigate why the indexing API throws errors when we run tests several times without cleaning the db
function getConfig(paths, ipfs) {
  return {
    anchor: {},
    'http-api': {
      'admin-dids': [
        'did:key:z6Mkh3VVZHjMWmBFkmixiYsZmJYAEkASk4ScjZDkawn6Npcu', // used in composites.test.ts
        'did:key:z6MkpRhEWywReoFtQMQGqSmTu5mp9vQVok86Qha2sn6e32Db', // used in models.test.ts
      ],
      'cors-allowed-origins': [new RegExp('.*')],
    },
    ipfs: { mode: 'remote', host: ipfs },
    logger: { 'log-level': 2, 'log-to-files': false },
    metrics: {
      'metrics-exporter-enabled': false,
      'metrics-port': 9090,
    },
    network: { name: 'inmemory' },
    node: {},
    'state-store': {
      mode: 'fs',
      'local-directory': paths.stateStoreDir,
    },
    indexing: {
      db: `sqlite://${paths.indexingDB}`,
      'allow-queries-before-historical-sync': true,
      models: [Model.MODEL.toString()],
    },
  }
}

export default async function globalSetup() {
  const [controller, paths] = await Promise.all([getIPFS(), getPaths()])

  globalThis.IPFS_CONTROLLER = controller
  globalThis.TEMP_DIR_PATH = paths.tempDir

  // Write the config file so that its path can be passed to deamon below
  const { address, port } = controller.apiAddr.nodeAddress()
  const config = getConfig(paths, `http://${address}:${port}`)
  await fs.writeJson(paths.configFile, config)

  await setup({
    command: `./node_modules/.bin/ceramic daemon --config ${paths.configFile}`,
    debug: true,
    launchTimeout: 240000,
    port: 7007,
  })
}
