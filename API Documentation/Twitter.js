// ------------------------------------------------------------------------------------------
//1- Accounts and users
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine AccountGroup Account endpoints
 *
 * Here is the description for the "AccountGroup".
 */
// ------------------------------------------------------------------------------------------
//2- Manage account settings and profile
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /account/settings The user account settings.
 * @apiVersion 0.1.0
 * @apiName GetSettings
 * @apiGroup AccountGroup
 * @apiPermission private
 *
 * @apiDescription Returns settings for the authenticating user.
 *
 * @apiSuccess {boolean}   discoverable_by_email           Is the user discoverable by email.
 * @apiSuccess {string}     language    User language.
 * @apiSuccess {boolean}     protected          Is the user protected.
 * @apiSuccess {String} screen_name     The user's screen name.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "discoverable_by_email ": "true",
 *       "language": "en",
 *      "protected":"false",
 *      "screen_name":"theSeanCook"
 *     }
 */
function getUserSettings() {
  return;
}
