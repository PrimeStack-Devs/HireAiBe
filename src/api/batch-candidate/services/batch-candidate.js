'use strict';

/**
 * batch-candidate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::batch-candidate.batch-candidate');
