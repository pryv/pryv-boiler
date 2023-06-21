
module.exports = { 
  init, 
  log
}

async function init(settings) {
  console.log('CUSTOM LOGGER initilaized with', settings);
}

/**
 * 
 * @param {string} level one of 'debug', 'info', 'warn', 'error'
 * @param {string} key ':' namespaced keys
 * @param {message} message 
 * @param {object} meta 
 */
function log(level, key, text, meta) {
  console.log('Custom: ' + JSON.stringify({level, key, text, meta}));
}