import { setup } from 'jest-dev-server'
import { Model } from '@ceramicnetwork/stream-model'
import fs from 'fs-extra'
import { join } from 'node:path'
import { dir } from 'tmp-promise'

async function getPaths() {
  const tempDir = await dir({ unsafeCleanup: true })
  const tempPath = tempDir.path
  const configPath = join(tempDir.path, 'config')
  return {
    tempDir: tempPath,
    configDir: configPath,
    configFile: join(configPath, 'daemon.config.json'),
    stateStoreDir: join(tempPath, 'statestore'),
    ipfsDir: join(tempPath, 'goipfs'),
    indexingDB: join(tempPath, 'indexing.sqlite'),
  }
}

// Create the custom config here to make sure that we start with a clear indexing db setup each time
// TODO: Investigate why the indexing API throws errors when we run tests several times without cleaning the db
function getConfig(paths) {
  return {
    anchor: {},
    'http-api': {
      'admin-dids': [
        'did:key:z6Mkh3VVZHjMWmBFkmixiYsZmJYAEkASk4ScjZDkawn6Npcu', // used in composites.test.ts
        'did:key:z6MkpRhEWywReoFtQMQGqSmTu5mp9vQVok86Qha2sn6e32Db', // used in models.test.ts
      ],
      'cors-allowed-origins': [new RegExp('.*')],
    },
    ipfs: { mode: 'bundled' },
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
  const paths = await getPaths()
  globalThis.TEMP_DIR_PATH = paths.tempDir

  // Create all of the dirs required for testing
  await Promise.all([
    fs.ensureDir(paths.configDir),
    fs.ensureDir(paths.stateStoreDir),
    fs.ensureDir(paths.ipfsDir),
  ])

  // Write the config file so that its path can be passed to deamon below
  await fs.writeJson(paths.configFile, getConfig(paths))

  await setup({
    command: `IPFS_PATH=\'${paths.ipfsDir}\' ./node_modules/.bin/ceramic daemon --config ${paths.configFile}`,
    debug: true,
    launchTimeout: 240000,
    port: 7007,
  })
}
