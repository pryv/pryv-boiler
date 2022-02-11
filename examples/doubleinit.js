/**
 * @license
 * Copyright (C) 2020-2022 Pryv S.A. https://pryv.com 
 * This file is part of Open-Pryv.io and released under BSD-Clause-3 License
 * SPDX-License-Identifier: BSD-3-Clause
 */
const boiler = require('../src');
const config = boiler.init({appName: 'sample-double-init'});

boiler.init({appName: 'sample-double-init2'});