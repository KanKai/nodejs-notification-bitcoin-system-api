const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('js-yaml');
const fs = require('fs');
const config = require('../config');

if (config.env === 'development') {
  // http://localhost:3000/api-docs
  const swaggerDocument = YAML.load(fs.readFileSync('../swagger.yaml', 'utf8'));
  router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = router;
