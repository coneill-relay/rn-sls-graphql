/**
 *
 * @param event
 * @param context
 * @returns {Promise<void>}
 */
exports.hello = async (event, context) => {
  // http
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'hello'})
  };
};