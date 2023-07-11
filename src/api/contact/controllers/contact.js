'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({strapi}) => ({

	async sendData(ctx) {
		// some more logic
		try {
			const response = await super.create(ctx);
			const {subject, name, tel, email, message  } = ctx.request.body.data;
			await strapi
			.plugin('email-designer')
			.service('email')
			.sendTemplatedEmail(
				{
					// required
					to: email,

					// optional if /config/plugins.js -> email.settings.defaultFrom is set

					// optional if /config/plugins.js -> email.settings.defaultReplyTo is set
					// optional array of files
					attachments: [],
					},
					{
					// required - Ref ID defined in the template designer (won't change on import)
					templateReferenceId: 4,

					// If provided here will override the template's subject.
					// Can include variables like `Thank you for your order {{= USER.firstName }}!`
					subject: subject,
					},
					{
						// this object must include all variables you're using in your email template
						name: name,
						email: email,
						tel: tel,
						subject: subject,
						message: message
					}
				)
			await strapi
			.plugin('email-designer')
			.service('email')
			.sendTemplatedEmail(
				{
					// required
					to: email,

					// optional if /config/plugins.js -> email.settings.defaultFrom is set

					// optional if /config/plugins.js -> email.settings.defaultReplyTo is set
					// optional array of files
					attachments: [],
					},
					{
					// required - Ref ID defined in the template designer (won't change on import)
					templateReferenceId: 5,

					// If provided here will override the template's subject.
					// Can include variables like `Thank you for your order {{= USER.firstName }}!`
					/* subject: `Odpoveď`, */
					},
					{
					// this object must include all variables you're using in your email template

					}
				)

				await strapi.service('api::contact.create');


				return response;
		} catch (err) {
			strapi.log.debug('📺: ', err);
			return ctx.badRequest(null, err);
		}
		/* const  {data} = ctx.body */
		/* console.log(ctx.body); */

	}

}));
