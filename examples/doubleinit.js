/**
 * @license
 * [BSD-3-Clause](https://github.com/pryv/pryv-boiler/blob/master/LICENSE)
 */
/* eslint-disable */
const boiler = require('../src');
const config = boiler.init({ appName: 'sample-double-init' });

boiler.init({ appName: 'sample-double-init2' });
