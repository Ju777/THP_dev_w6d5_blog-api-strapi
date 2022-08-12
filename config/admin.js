module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7568d335a3a5bb504278d824811199df'),
  },
});
