module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7a51a83716bda5c7b9cd7b2ce23892fa'),
  },
});
