/**
 * @license
 * Copyright (C) 2020-2022 Pryv S.A. https://pryv.com 
 * This file is part of Open-Pryv.io and released under BSD-Clause-3 License
 * SPDX-License-Identifier: BSD-3-Clause
 */


module.exports = async function() {
  await new Promise(r => setTimeout(r, 100));
  return {
    'extra-js-async': 'extra-js-async loaded'
  }
}
