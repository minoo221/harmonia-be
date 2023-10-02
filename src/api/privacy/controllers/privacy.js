'use strict';

/**
 * privacy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::privacy.privacy', ({strapi}) => ({

	async findOne(ctx) {
		const {id} = ctx.params;
		const result = await strapi.db.query('api::privacy.privacy').findOne({
			where: {slug: id}
		})
		const sanitizedResults = await this.sanitizeOutput(result, ctx);

		return this.transformResponse(sanitizedResults);
	}

}))
