const utils: any = {};

const req = require.context('.', true, /^(?!.\/index).*.ts$/);

req.keys().forEach((key) => {
  const module = req(key).default;
  if (typeof module === 'object') {
    Object.keys(module).forEach((moduleKey) => {
      if (Object.prototype.hasOwnProperty.call(utils, moduleKey)) {
        console.error(`Duplicate values exist during "utils" registration. [${key}] => [${moduleKey}]`);
      }
      utils[moduleKey] = module[moduleKey]
    })
  }
});

export default utils;