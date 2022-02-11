/**
 * @license
 * Copyright (C) 2020-2022 Pryv S.A. https://pryv.com 
 * This file is part of Open-Pryv.io and released under BSD-Clause-3 License
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yaml = require('js-yaml');

exports.stringify = function (obj, options) {
  return yaml.dump(obj, options);
}

exports.parse = function (obj, options) {
  return yaml.load(obj, options);
}