module.exports = ({ env }) => ({
	/* email: {
		config: {
		provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
		providerOptions: {
			apiKey: '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',
		},
		settings: {
			defaultFrom: 'milanblasko28@gmail.com',
			defaultReplyTo: 'milanblasko28@gmail.com',
			testAddress: 'milanblasko28@gmail.com',
		},
		},
	}, */
	"users-permissions": {
		config: {
			register: {
				allowedFields: ["nickname"],
			},
		},
	},
	email: {
		config: {
			provider: 'nodemailer',
			providerOptions: {
				host: 'localhost',
				port: 1025,
				ignoreTLS: true,
			},
			settings: {
				defaultFrom: 'milanblasko28@gmail.com',
				defaultReplyTo: 'milanblasko28@gmail.com',
				testAddress: 'milanblasko28@gmail.com',
			},
		},
	},
	ezforms:{
		config:{
			captchaProvider: {
				name: 'none',
			},
			notificationProviders: [
				{
					provider: 'nodemailer',
					enabled: true,
					config: {
						from: 'milanblasko28@gmail.com'
					}
				}
			]
		}
	},
	 upload: {
		config: {
		provider: "strapi-provider-upload-dos",
		providerOptions: {
			key: process.env.DO_SPACE_ACCESS_KEY,
			secret: process.env.DO_SPACE_SECRET_KEY,
			endpoint: process.env.DO_SPACE_ENDPOINT,
			space: process.env.DO_SPACE_BUCKET,
			directory: process.env.DO_SPACE_DIRECTORY,
		},
		},
	},

});