/**
 * @license
 * [BSD-3-Clause](https://github.com/pryv/pryv-boiler/blob/master/LICENSE)
 */
module.exports = {
  load: async function(store) {
    store.set('plugin-async', 'plugin async loaded');
    return 'plugin-async'; // my name
  }
}