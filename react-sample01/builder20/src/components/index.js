// module.exports 사용하기 위해 'require' 사용
const { logConfig } = require('_constants')
const { log, chalk } = require('utils').default

logConfig.componentList && log(chalk.yellow('*** Component list ***'))

// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
// const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)
const req = require.context('./', true, /index\.js$/)


req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  logConfig.componentList && log(chalk.yellow(`  * ${chalk.bold(componentName)}: ${chalk.cyan(key)}`));
  module.exports[componentName] = req(key).default
})
