module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '83a3b8334f2485bb7f3057ee6c63c026'),
  },
});
