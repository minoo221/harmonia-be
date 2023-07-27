module.exports = ({ env }) => ({
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
				host: env('SMTP_HOST'),
				port: env('SMTP_PORT'),
				auth: {
					user: env('SMTP_USERNAME'),
					pass: env('SMTP_PASSWORD'),
				},
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