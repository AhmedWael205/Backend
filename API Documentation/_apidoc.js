// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine UserSuccess
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number} ID The user ID Number.
 * @apiSuccess {String} name The user name as they have defined it , Not necessairly a person name.
 * @apiSuccess {String} screen_name The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiSuccess {Date} created_at Datetime that the user account was created on Twitter.
 * @apiSuccess {String} location [Nullable] The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.
 * @apiSuccess {String} bio [Nullable] The user's biographical.
 * @apiSuccess {Boolean} protected Is the user protected.
 * @apiSuccess {Boolean} verified Is the user account verfied.
 * @apiSuccess {Number} followers_count The number of followers this account currently has.
 * @apiSuccess {Number} friends_count The number of users this account is following (AKA their “followings”).
 * @apiSuccess {Number} favourites_count The number of Tweets this user has liked in the account’s lifetime.
 * @apiSuccess {Number} tweets_count The number of Tweets (including retweets) issued by the user.
 * @apiSuccess {String} profile_background_color The hexadecimal color chosen by the user for their background.
 * @apiSuccess {String} profile_background_image_url A HTTP-based URL pointing to the background image the user has uploaded for their profile.
 * @apiSuccess {String} profile_image_url A HTTP-based URL pointing to the user’s profile image.
 * @apiSuccess {Boolean} default_profile When true, indicates that the user has not altered the theme or background of their user profile.
 * @apiSuccess {Boolean} default_profile_image When true, indicates that the user has not uploaded their own profile image and a default image is used instead.
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     {
 *       "ID": 6253282,
 *       "name": "Twitter API",
 *       "screen_name": "twitterapi",
 *       "created_at":"2012-11-04T14:51:06.157Z",
 *       "location": "San Francisco, CA",
 *       "bio": "The Real Twitter API.",
 *       "protected":true,
 *       "verifed":false,
 *       "followers_count": 21,
 *       "friends_count": 32,
 *       "favourites_count":13,
 *       "tweets_count":42,
 *       "profile_background_color": "e8f2f7",
 *       "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png",
 *       "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *       "default_profile": fasle,
 *       "default_profile_image": false
 *     }
 *
 */

// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine CreateUserError
 * @apiVersion 0.1.0
 *
 * @apiError UserNameTooShort Minimum of 5 characters required.
 * @apiError NoAccessRight Only authenticated Users can access the data
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "UserNameTooShort"
 *     }
 */

// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine private User access rights needed.
 * Optionally you can write here further Informations about the permission. To be modified later
 *
 *
 * @apiVersion 0.1.0
 */

// ------------------------------------------------------------------------------------------
// Current Definitions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine LoginParam
 * @apiParam {String} username Your e-mail-address.
 * @apiParam {String} password Your password.
 */

/**
 * @apiDefine UserParam
 * @apiParam {String} name The user name.
 * @apiParam {int} ID User unique ID.
 */
