'use strict';

/**
 * test-option service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-option.test-option');
