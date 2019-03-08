// ------------------------------------------------------------------------------------------
//1- Accounts and users
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
//      A- Manage account settings and profile
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /account/settings Account Settings.
 * @apiVersion 0.1.0
 * @apiName GetSettings
 * @apiGroup Account
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/account/settings.json
 *
 * @apiExample Example usage:
 * GET localhost:3000/account/settings.json
 *
 *
 * @apiDescription Returns settings for the authenticating user.
 *
 * @apiSuccess {Boolean} discoverable_by_email  Is the user discoverable by email.
 * @apiSuccess {String} language  User language.
 * @apiSuccess {Boolean} protected   Is the user protected.
 * @apiSuccess {String}screen_name   The user's screen name.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "discoverable_by_email ": "true",
 *       "language": "en",
 *       "protected":"false",
 *       "screen_name":"theSeanCook"
 *     }
 */
function getUserSettings() {
  return;
}

//---------------------------------------------------------------------------------------------------

/**
 * @api {get} /users/profile_banner Profile Banner.
 * @apiVersion 0.1.0
 * @apiName GetProfileBanner
 * @apiPermission private
 * @apiGroup User
 * @apiSampleRequest localhost:3000/users/profile_banner.json
 *
 * @apiExample Example usage:
 * GET localhost:3000/users/profile_banner.json?screen_name=twitterapi
 *
 * @apiDescription Returns a map of the available size variations of the specified user's profile banner. If the user has not uploaded a profile banner, a HTTP 404 will be served instead. This method can be used instead of string manipulation on the profile_banner_url returned in user objects as described in Profile Images and Banners.
 *  The profile banner data available at each size variant's URL is in PNG format.
 *
 * @apiParam {Number} user_id [Optional] The ID of the user for whom to return results.
 * @apiParam {String} screen_name [Optional] The screen name of the user for whom to return results.
 *
 * @apiSuccess {Object} sizes   The Image sizes (height,width).
 * @apiSuccess {String}  url   The Image URL.
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "sizes ": {
 *                      "h":626,
 *                      "w":1252
 *                  },
 *      "url":"https://pbs.twimg.com/profile_banners/6253282/1347394302/"
 *     }
 *
 * @apiError NoBannerFound If the user has not uploaded a profile banner
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NoBannerFound"
 *     }
 */

function getProfileBanner() {
  return;
}

//---------------------------------------------------------------------------------------------------
/**
 * @api {post} /account/remove_profile_banner Remove Profile Banner.
 * @apiVersion 0.1.0
 * @apiName PostRemoveProfileBanner
 * @apiGroup Account
 * @apiPermission private
 * @apiSampleRequest localhost:3000/account/remove_profile_banner.json
 *
 * @apiDescription Removes the uploaded profile banner for the authenticating user. Returns HTTP 200 upon success.
 *
 * @apiExample Example usage:
 * POST localhost:3000/account/remove_profile_banner.json
 *
 * @apiSuccessExample  Success-Response:
 *     HTTP/1.1 200 OK
 *
 */
function postRemoveProfileBanner() {
  return;
}

//---------------------------------------------------------------------------------------------------

/**
 * @api {post} /account/settings Edit Account Settings.
 * @apiVersion 0.1.0
 * @apiName PostAccountSettings
 * @apiGroup Account
 * @apiPermission private
 * @apiSampleRequest localhost:3000/account/settings.json
 *
 * @apiDescription Updates the authenticating user's settings.
 *
 * @apiParam {String} lang [Optional] The language which Twitter should render in for this user. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by this endpoint .
 *
 * @apiExample Example usage:
 * POST localhost:3000/account/settings.json?lang=en
 *
 * @apiSuccess {Boolean} discoverable_by_email  Is the user discoverable by email.
 * @apiSuccess {String} language  User language.
 * @apiSuccess {Boolean} protected   Is the user protected.
 * @apiSuccess {String}screen_name   The user's screen name.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "discoverable_by_email ": "true",
 *       "language": "en",
 *       "protected":"false",
 *       "screen_name":"theSeanCook"
 *     }
 */
function postAccountSettings() {
  return;
}

//---------------------------------------------------------------------------------------------------
/**
 * @api {post} /account/update_profile_image Update Profile Image.
 * @apiVersion 0.1.0
 * @apiName PostUpdateProfileImage
 * @apiGroup Account
 * @apiPermission private
 * @apiSampleRequest localhost:3000/account/update_profile_image.json
 *
 * @apiDescription Updates the authenticating user's profile image. Note that this method expects image , not a URL to a raw multipart data.
 * This method asynchronously processes the uploaded file before updating the user's profile image URL. You can either update your local cache the next time you request the user's information, or, at least 5 seconds after uploading the image, ask for the updated URL using GET users / show.
 *
 * @apiParam {String} imageURL [Required] The URL of the image the user want to upload.
 *
 * @apiExample Example usage:
 * POST localhost:3000/account/update_profile_image.json?image="http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
 *
 * @apiUse UserSuccess
 */
function postUpdateProfileImage() {
  return;
}

//---------------------------------------------------------------------------------------------------
/**
 * @api {get} /saved_searches/list Saved Searches.
 * @apiVersion 0.1.0
 * @apiName GetSavedSearches
 * @apiGroup saved_searches
 * @apiPermission private
 * @apiSampleRequest localhost:3000/saved_searches/list.json
 *
 * @apiDescription Returns the authenticated user's saved search queries.
 *
 * @apiExample Example usage:
 * GET localhost:3000/saved_searches/list.json
 *
 * @apiSuccess {Object[]} Search The search result info (created_at ,ID ,name ,query).
 * @apiSuccess {Date} Search.created_at Datetime of the user's search.
 * @apiSuccess {Number} Search.ID The search ID.
 * @apiSuccess {String} Search.name The search name.
 * @apiSuccess {String} Search.query The search query.
 *
 * @apiSuccessExample
 * [
 *      {
 *          "created_at": "2018-12-04T14:51:06.157Z",
 *          "ID": 9569704,
 *          "name": "@twitterapi",
 *          "query": "@twitterapi"
 *      },
 *       {
 *          "created_at": "2018-11-04T14:51:06.157Z",
 *          "id": 9569730,
 *          "name": "@twitter OR twitterapi OR "twitter api" OR "@anywhere"",
 *          "query": "@twitter OR twitterapi OR "twitter api" OR "@anywhere""
 *       }
 * ]
 */
function getSavedSearches() {
  return;
}

//---------------------------------------------------------------------------------------------------
/**
 * @api {post} /saved_searches/destroy/:id Delete search using ID.
 * @apiVersion 0.1.0
 * @apiName PostDeleteSearchByID
 * @apiGroup saved_searches
 * @apiPermission private
 * @apiSampleRequest localhost:3000/saved_searches/destroy/:id.json
 *
 * @apiDescription Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.
 *
 * @apiParam {Number} ID [Required] The ID of the saved search.
 *
 * @apiExample Example usage:
 * POST localhost:3000/saved_searches/destroy/9569704.json
 *
 * @apiSuccess {Object} Search The search result info (created_at ,ID ,name ,query).
 * @apiSuccess {Date}   Search.created_at Datetime of the user's search.
 * @apiSuccess {Number} Search.ID The search ID.
 * @apiSuccess {String} Search.name The search name.
 * @apiSuccess {String} Search.query The search query.
 *
 * @apiSuccessExample
 *      {
 *          "created_at": "2018-12-04T14:51:06.157Z",
 *          "ID": 9569704,
 *          "name": "@twitterapi",
 *          "query": "@twitterapi"
 *      }
 */
function postDeleteSearchByID() {
  return;
}

//---------------------------------------------------------------------------------------------------

/**
 * @api {post} /saved_searches/delete_all Delete all Searches.
 * @apiVersion 0.1.0
 * @apiName PostDeleteSearchesAll
 * @apiGroup saved_searches
 * @apiPermission private
 * @apiSampleRequest localhost:3000/saved_searches/delete_all.json
 *
 * @apiDescription Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.
 *
 * @apiParam {Number} ID [Required] The ID of the saved search.
 *
 * @apiExample Example usage:
 * POST localhost:3000/saved_searches/delete_all.json
 *
 * @apiSuccess {Object[]} Search The search result info (created_at ,ID ,name ,query).
 * @apiSuccess {Date} Search.created_at Datetime of the user's search.
 * @apiSuccess {Number} Search.ID The search ID.
 * @apiSuccess {String} Search.name The search name.
 * @apiSuccess {String} Search.query The search query.
 *
 * @apiSuccessExample
 * [
 *      {
 *          "created_at": "2018-12-04T14:51:06.157Z",
 *          "ID": 9569704,
 *          "name": "@twitterapi",
 *          "query": "@twitterapi"
 *      },
 *       {
 *          "created_at": "2018-11-04T14:51:06.157Z",
 *          "id": 9569730,
 *          "name": "@twitter OR twitterapi OR "twitter api" OR "@anywhere"",
 *          "query": "@twitter OR twitterapi OR "twitter api" OR "@anywhere""
 *       }
 * ]
 */
function postDeleteSearchesAll() {
  return;
}

//---------------------------------------------------------------------------------------------------
