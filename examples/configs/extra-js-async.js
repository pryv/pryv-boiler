/**
 * @license
 * [BSD-3-Clause](https://github.com/pryv/pryv-boiler/blob/master/LICENSE)
 */


module.exports = async function() {
  await new Promise(r => setTimeout(r, 100));
  return {
    'extra-js-async': 'extra-js-async loaded'
  }
}
