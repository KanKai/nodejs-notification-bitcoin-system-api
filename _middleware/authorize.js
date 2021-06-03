const jwt = require('express-jwt');
const { secret } = require('../config');
const db = require('../_helpers/db');
const message = require('../_helpers/message');

module.exports = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    jwt({ secret, algorithms: ['HS256'] }),
    async (req, res, next) => {
      const user = await db.User.findById(req.user.id);

      if (!user || (roles.length && !roles.includes(user.role))) {
        return res.status(401).json({ message: message.UN_AUTHORIZED });
      }

      req.user.role = user.role;
      const refreshToken = (token) =>
        !!refreshToken.find((x) => x.token === token);
      next();
    },
  ];
};
