const boiler = require('../src');
const config = boiler.init({appName: 'sample-double-init'});

boiler.init({appName: 'sample-double-init2'});