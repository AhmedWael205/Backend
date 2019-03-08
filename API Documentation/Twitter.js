// ------------------------------------------------------------------------------------------
//1- Accounts and users
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
//      A- Manage account settings and profile
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /account/settings Account Settings
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
 * @api {get} /users/profile_banner Profile Banner
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
 * @apiParamExample {json} Request-Example:
 *    {
 *      "user_id": 12345,
 *      "screen_name":"noradio"
 *    }
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
 * @api {post} /account/remove_profile_banner Remove Profile Banner
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
 * @api {post} /account/settings Edit Account Settings
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
 * @apiParamExample {json} Request-Example:
 *    {
 *      "lang": "en"
 *    }
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
 * @api {post} /account/update_profile_image Update Profile Image
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
 * @apiParamExample {json} Request-Example:
 *     {
 *       "imageURL": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
 *     }
 *
 * @apiExample Example usage:
 * POST localhost:3000/account/update_profile_image.json?imageURL="http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
 *
 * @apiUse UserSuccess
 */
function postUpdateProfileImage() {
  return;
}

//---------------------------------------------------------------------------------------------------
/**
 * @api {get} /saved_searches/list Saved Searches
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
 * @api {post} /saved_searches/destroy/:id Delete search using ID
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
 * @apiParamExample {json} Request-Example:
 *     {
 *       "ID": 313006
 *     }
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
 * @api {post} /saved_searches/delete_all Delete all Searches
 * @apiVersion 0.1.0
 * @apiName PostDeleteSearchesAll
 * @apiGroup saved_searches
 * @apiPermission private
 * @apiSampleRequest localhost:3000/saved_searches/delete_all.json
 *
 * @apiDescription Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.
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

// ------------------------------------------------------------------------------------------
//      B- Follow, search, and get users
// ------------------------------------------------------------------------------------------

/**
 * @api {get} /followers/ids Followers IDs
 * @apiVersion 0.1.0
 * @apiName GetFollowersIDs
 * @apiGroup followers
 * @apiPermission private
 * @apiSampleRequest localhost:3000/followers/ids.json
 *
 * @apiDescription Returns a cursored collection of user IDs for every user following the specified user.
 * At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests.
 * This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.
 *
 * @apiParam {Number} user_ID [Optional] The ID of the user for whom to return results.
 * @apiParam {String} screen_name [Optional] The screen name of the user for whom to return results.
 * @apiParam {Number} cursor [Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first "page."
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID": 12345,
 *       "screen_name":"noradio",
 *       "cursor": 12893764510938
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/followers/ids.json?cursor=-1&screen_name=andypiper
 *
 * @apiSuccess {Number[]} followers_IDs The User Followers IDs.
 * @apiSuccess {Number} next_cursor To allow paging back and forth.
 * @apiSuccess {Number} previous_cursor To allow paging back and forth.
 *
 * @apiSuccessExample
 *      {
 *         "followers_IDs":[
 *                              455974794,
 *                              947576438684872705,
 *                              850839346009780224,
 *                              958850376630910976,
 *                              889483959943536640,
 *                              966094285119606784,
 *                              1020583045,
 *                              948604640811212801,
 *                              967155179614240768,
 *                              554514802,
 *                              14873932,
 *                              963916668731904000,
 *                              970763391181746178,
 *                              966091392631140358,
 *                              .
 *                              .
 *                              .
 *                              5000 ids later,
 *                              .
 *                              .
 *                              .
 *                              813143846,
 *                              958604886735716353,
 *                              402873729,
 *                              958603486551330817,
 *                              913076424897994753,
 *                              820967329068707840,
 *                              958593574932762624,
 *                              958589381102665728,
 *                              958573223737724929,
 *                              889474485694410752
 *                      ],
 *              "next_cursor": 1591087837626119954,
 *              "previous_cursor": 0
 *      }
 */
function getFollowersIDs() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {get} /followers/list Followers List
 * @apiVersion 0.1.0
 * @apiName GetFollowersList
 * @apiGroup followers
 * @apiPermission private
 * @apiSampleRequest localhost:3000/followers/list.json
 *
 * @apiDescription Returns a cursored collection of user objects for users following the specified user.
 * At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests.roys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.
 *
 * @apiParam {Number} user_ID [Optional] The ID of the user for whom to return results.
 * @apiParam {String} screen_name [Optional] The screen name of the user for whom to return results.
 * @apiParam {Number} cursor [Semi-Optional] Causes the results to be broken into pages. If no cursor is provided, a value of -1 will be assumed, which is the first "page". The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID": 12345,
 *       "screen_name":"noradio",
 *       "cursor": 12893764510938
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/followers/list.json?cursor=-1&screen_name=twitterdev
 *
 * @apiSuccess {Object[]} users The User Followers object.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 * @apiSuccess {Number} next_cursor To allow paging back and forth.
 * @apiSuccess {Number} previous_cursor To allow paging back and forth.
 *
 * @apiSuccessExample
 *      {
 *          "users":[
 *                      {user-object},
 *                      {user-object}
 *                  ],
 *          "next_cursor": 1489467234237774933,
 *          "previous_cursor": 0
 *     }
 */
function getFollowersList() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /followings/ids Followings IDs
 * @apiVersion 0.1.0
 * @apiName GetFollowingsIDs
 * @apiGroup followings
 * @apiPermission private
 * @apiSampleRequest localhost:3000/followings/ids.json
 *
 * @apiDescription Returns a cursored collection of user IDs for every user the specified user is following (otherwise known as their "friends").
 * At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests.
 * This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.
 *
 * @apiParam {Number} user_ID [Optional] The ID of the user for whom to return results.
 * @apiParam {String} screen_name [Optional] The screen name of the user for whom to return results.
 * @apiParam {Number} cursor [Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first "page."
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID": 12345,
 *       "screen_name":"noradio",
 *       "cursor": 12893764510938
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/followings/ids.json?cursor=-1&screen_name=andypiper
 *
 * @apiSuccess {Number[]} followings_IDs The User Followings IDs.
 * @apiSuccess {Number} next_cursor To allow paging back and forth.
 * @apiSuccess {Number} previous_cursor To allow paging back and forth.
 *
 * @apiSuccessExample
 *  {
 *      "followings_IDs": [
 *                  657693,
 *                  183709371,
 *                  7588892,
 *                  38895958,
 *                  22891211,
 *                  9019482,
 *                  14488353,
 *                  11750202,
 *                  12249,
 *                  22915745,
 *                  1249881,
 *                  14927800,
 *                  1523501,
 *                  22548447,
 *                  15062340,
 *                  133031077,
 *                  17874544,
 *                  777925,
 *                  4265731,
 *                  27674040,
 *                  26123649,
 *                  9576402,
 *                  821958,
 *                  7852612,
 *                  819797,
 *                  1401881,
 *                  8285392,
 *                  9160152,
 *                  795649,
 *                  3191321,
 *                  783214
 *              ],
 *      "next_cursor": 0,
 *      "previous_cursor": 0
 *  }
 *
 */
function getFollowingsIDs() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {get} /followings/list Followings List
 * @apiVersion 0.1.0
 * @apiName GetFollowingsList
 * @apiGroup followings
 * @apiPermission private
 * @apiSampleRequest localhost:3000/followings/list.json
 *
 * @apiDescription Returns a cursored collection of user objects for every user the specified user is following (otherwise known as their "friends").
 * At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests.
 *
 * @apiParam {Number} user_ID [Optional] The ID of the user for whom to return results.
 * @apiParam {String} screen_name [Optional] The screen name of the user for whom to return results.
 * @apiParam {Number} cursor [Semi-Optional] Causes the results to be broken into pages. If no cursor is provided, a value of -1 will be assumed, which is the first "page". The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID": 12345,
 *       "screen_name":"noradio",
 *       "cursor": 12893764510938
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/followings/list.json?cursor=-1&screen_name=twitterdev
 *
 * @apiSuccess {Object[]} users The User Followings object.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 * @apiSuccess {Number} next_cursor To allow paging back and forth.
 * @apiSuccess {Number} previous_cursor To allow paging back and forth.
 *
 * @apiSuccessExample
 *      {
 *          "users":[
 *                      {user-object},
 *                      {user-object}
 *                  ],
 *          "next_cursor": 1489467234237774933,
 *          "previous_cursor": 0
 *     }
 */
function getFollowingsList() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {get} /friendships/incoming Friendship Requests' IDs
 * @apiVersion 0.1.0
 * @apiName GetFriendshipsIncoming
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/incoming.json
 *
 * @apiDescription Returns a collection of numeric IDs for every user who has a pending request to follow the authenticating user.
 *
 * @apiParam {Number} cursor [Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first "page."
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "cursor": 12893764510938
 *     }
 * @apiExample Example usage:
 * GET localhost:3000/friendships/incoming.json
 *
 * @apiSuccess {Number[]} friendshipsRequetsIDs The User friendships Requests IDs.
 * @apiSuccess {Number} next_cursor To allow paging back and forth.
 * @apiSuccess {Number} previous_cursor To allow paging back and forth.
 *
 * @apiSuccessExample
 *  {
 *      "friendshipsRequetsIDs": [
 *                  657693,
 *                  183709371,
 *                  7588892,
 *                  783214
 *              ],
 *      "next_cursor": 0,
 *      "previous_cursor": 0
 *  }
 *
 */
function getFriendshipsIncoming() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {get} /friendships/no_retweets/ids Friendship No-Retweets
 * @apiVersion 0.1.0
 * @apiName GetFriendshipsNoRetweetsIDs
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/no_retweets/ids.json
 *
 * @apiDescription Returns a collection of user_ids that the currently authenticated user does not want to receive retweets from.
 * Use POST friendships / update to set the "no retweets" status for a given user account on behalf of the current user.
 *
 * @apiExample Example usage:
 * GET localhost:3000/friendships/no_retweets/ids.json
 *
 * @apiSuccess {Number[]} usersIDs The Users' IDs you don't wont to retweets from.
 *
 * @apiSuccessExample
 *  {
 *      "usersIDs": [
 *                  657693,
 *                  783214
 *              ]
 *  }
 *
 */
function getFriendshipsNoRetweetsIDs() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {get} /friendships/Outgoing Friendship Pending Follow Requests' IDs
 * @apiVersion 0.1.0
 * @apiName GetFriendshipsOutgoing
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/outgoing.json
 *
 * @apiDescription Returns a collection of numeric IDs for every protected user for whom the authenticating user has a pending follow request.
 *
 * @apiParam {Number} cursor [Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first "page."
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "cursor": 12893764510938
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/friendships/outgoing.json
 *
 * @apiSuccess {Number[]} friendshipsPendingIDs The Users' IDs with a pending follow request.
 * @apiSuccess {Number} next_cursor To allow paging back and forth.
 * @apiSuccess {Number} previous_cursor To allow paging back and forth.
 *
 * @apiSuccessExample
 *  {
 *      "friendshipsPendingIDs": [
 *                  657693,
 *                  183709371,
 *                  7588892,
 *                  1523501,
 *                  22548447,
 *                  15062340,
 *                  133031077,
 *                  17874544,
 *                  777925,
 *                  4265731,
 *                  783214
 *              ],
 *      "next_cursor": 0,
 *      "previous_cursor": 0
 *  }
 *
 */
function getFriendshipsOutgoing() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {get} /friendships/show Friendship Relations
 * @apiVersion 0.1.0
 * @apiName GetFriendshipsShow
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/friendships/show.json
 *
 * @apiDescription Returns detailed information about the relationship between two arbitrary users.
 *
 * @apiParam {Number} source_id [Required] The user_id of the subject user.
 * @apiParam {String} source_screen_name [Optional] The screen_name of the subject user.
 * @apiParam {Number} target_id [Required] The user_id of the target user.
 * @apiParam {String} target_screen_name [Optional] The screen_name of the target user.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "source_id": 3191321,
 *      "source_screen_name":"raffi",
 *      "target_id":20,
 *      "target_screen_name":"noradio"
 *    }
 *
 * @apiExample Example usage:
 * GET localhost:3000/friendships/show.json?source_screen_name=bert&target_screen_name=ernie
 *
 * @apiSuccess {Object} relationship It shows the current relation between the source and the target.
 * @apiSuccess {Object} relationship.target The Target Info (id,screen_name,following,followed_by)
 * @apiSuccess {Number} relationship.target.ID The target's ID.
 * @apiSuccess {String} relationship.target.screen_name The target's screen_name.
 * @apiSuccess {Boolean} relationship.target.following Is The target followed by the source.
 * @apiSuccess {Boolean} relationship.target.followed_by Is The target following the source.
 * @apiSuccess {Object} relationship.source The Source Info (id,screen_name,following,followed_by,want_retweets,notifications_enabled)
 * @apiSuccess {Number} relationship.source.ID The source's ID.
 * @apiSuccess {String} relationship.source.screen_name The source's screen_name.
 * @apiSuccess {Boolean} relationship.source.following Is The source followed by the target.
 * @apiSuccess {Boolean} relationship.source.followed_by Is The source following the target.
 * @apiSuccess {Boolean} relationship.source.want_retweets Is The source want to be retweeted by the target.
 * @apiSuccess {Boolean} relationship.source.notifications_enabled Is The source wants to get notifications from the target.
 *
 * @apiSuccessExample
 *  {
 *      "relationship": {
 *                          "target":  {
 *                                      "id": 12148,
 *                                      "screen_name": "ernie",
 *                                      "following": false,
 *                                      "followed_by": false
 *                                     },
 *                          "source":  {
 *                                      "id": 8649302,
 *                                      "screen_name": "bert",
 *                                      "following": false,
 *                                      "followed_by": false,
 *                                      "want_retweets": null,
 *                                      "notifications_enabled": null
 *                                      }
 *                      }
 *  }
 *
 */
function getFriendshipsShow() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /users/lookup Lookups
 * @apiVersion 0.1.0
 * @apiName GetUsersLookup
 * @apiGroup User
 * @apiPermission private
 * @apiSampleRequest localhost:3000/users/lookup.json
 *
 * @apiDescription Returns fully-hydrated user objects for up to 100 users per request, as specified by comma-separated values passed to the user_id and/or screen_name parameters.
 * This method is especially useful when used in conjunction with collections of user IDs returned from GET friends / ids and GET followers / ids.
 * GET users / show is used to retrieve a single user object.
 * There are a few things to note when using this method.
 *      You must be following a protected user to be able to see their most recent status update. If you don't follow a protected user their status will be removed.
 *      The order of user IDs or screen names may not match the order of users in the returned array.
 *      If a requested user is unknown, suspended, or deleted, then that user will not be returned in the results list.
 *      If none of your lookup criteria can be satisfied by returning a user object, a HTTP 404 will be thrown.
 *      You are strongly encouraged to use a POST for larger requests.
 *
 * @apiParam {Number[]} user_ID [Required] The ID of the user for whom to return results.
 * @apiParam {String[]} screen_name [Optional] The screen name of the user for whom to return results.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID": [
 *                      783214,
 *                      6253282
 *                  ],
 *       "screen_name":[
 *                      "noradio"
 *                     ]
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/users/lookup.json?user_id=783214,6253282
 *
 * @apiSuccess {Object[]} users The User Followers object.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 *
 * @apiSuccessExample
 *      {
 *          "users":[
 *                      {user-object},
 *                      {user-object}
 *                  ]
 *     }
 */
function getUsersLookup() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /users/search Search
 * @apiVersion 0.1.0
 * @apiName GetUsersSearch
 * @apiGroup User
 * @apiPermission private
 * @apiSampleRequest localhost:3000/users/search.json
 *
 * @apiDescription Provides a simple, relevance-based search interface to public user accounts on Twitter. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported.
 * Only the first 1,000 matching results are available.
 *
 * @apiParam {String} q [Required] The search query to run against people search.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "q":"Twitter%20API"
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/users/search.json?q=soccer
 *
 * @apiSuccess {Object[]} users The Users matching objects.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 *
 * @apiSuccessExample
 *      {
 *          "users":[
 *                      {user-object},
 *                      {user-object}
 *                  ]
 *     }
 */
function getUsersSearch() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /users/show Show
 * @apiVersion 0.1.0
 * @apiName GetUsersShow
 * @apiGroup User
 * @apiPermission private
 * @apiSampleRequest localhost:3000/users/show.json
 *
 * @apiDescription Returns a variety of information about the user specified by the required user_id or screen_name parameter. The author's most recent Tweet will be returned inline when possible.
 * GET users / lookup is used to retrieve a bulk collection of user objects.
 * You must be following a protected user to be able to see their most recent Tweet. If you don't follow a protected user, the user's Tweet will be removed. A Tweet will not always be returned in the current_status field.
 *
 * @apiParam {Number} user_ID [Required] The ID of the specified user.
 * @apiParam {String} screen_name [Required] The screen name of the specified user.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID":783214,
 *       "screen_name":"noradio"
 *     }
 *
 * @apiExample Example usage:
 * GET localhost:3000/users/show.json?screen_name=twitterdev
 *
 * @apiSuccess {Object} users The User Required object.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 *
 * @apiSuccessExample
 *         {user-object}
 */
function getUsersShow() {
  return;
}

// ------------------------------------------------------------------------------------------
