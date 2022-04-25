/**
 * @license
 * [BSD-3-Clause](https://github.com/pryv/pryv-boiler/blob/master/LICENSE)
 */
module.exports = {
  load: function(store) {
    store.set('plugin-sync', 'plugin sync loaded');
    return 'plugin-sync'; // my name
  }
}