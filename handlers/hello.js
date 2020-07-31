const version = require('../package.json').version;
const envName = process.env.ENV_NAME;
const logger = require('logger')(version, envName, 'redisUtils');

/**
 *
 * @param event
 * @param context
 * @returns {Promise<void>}
 */
exports.hello = async (event, context) => {
  // http
  logger.log('http.called', 'we have called in our http handler!', {client_id: 'something can go here', event, context});
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'hello'})
  };
};
