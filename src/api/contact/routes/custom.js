module.exports = {
  routes: [
	{ // Path defined with an URL parameter
      method: 'POST',
      path: '/send-contact',
      handler: 'contact.sendData',
	  config: {
        auth: false,
      },
    }
  ]
}
