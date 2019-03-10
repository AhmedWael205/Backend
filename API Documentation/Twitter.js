// ------------------------------------------------------------------------------------------
//1- Accounts and users
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
//      A- Manage account settings and profile
// ------------------------------------------------------------------------------------------
/**
 * @api {post} /users/signup SignUp (Register)
 * @apiVersion 0.1.0
 * @apiName PostSignUp
 * @apiGroup User
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/users/signup.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/account/signup.json
 *
 *
 * @apiDescription SigningUp a new twitter account it returns 200 and generates the user_ID and set the creation date if the user is successfully signedup and returns 400 if the email is already used or any other error occured.
 *
 * @apiParam {String} name [Required] The user name as they have defined it , Not necessairly a person name.
 * @apiParam {String} screen_name [Required] The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiParam {String} email [Required] The user email , it must be never used to any other user.
 * @apiParam {String} password [Required] The user's password.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "name": "Ali Hany",
 *      "screen_name":"Messi_98",
 *      "email":"ali_hamdy98@outlook.com",
 *      "password":"User_Password"
 *    }
 *
 * @apiError EmailAlreadyExists If the user email is already used by another user.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "EmailAlreadyExists"
 *     }
 *
 * @apiUse miniUserObject
 *
 */
function postSignUp() {
  return;
}
// ------------------------------------------------------------------------------------------
/**
 * @api {post} /users/signin SignIn (Log In)
 * @apiVersion 0.1.0
 * @apiName PostSignIn
 * @apiGroup User
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/users/signin.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/account/signin.json
 *
 *
 * @apiDescription SignIn to twitter using your email and password if it signIn successfully it returns 200 and a token , but if signIn field it returns 404 and the Error Type.
 *
 * @apiParam {String} email [Required] The user email , it must be never used to any other user.
 * @apiParam {String} password [Required] The user's password.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "email":"ali_hamdy98@outlook.com",
 *      "password":"User_Password"
 *    }
 *
 * @apiError UserNotFound If the user email is not used or incorrect.
 * @apiError IncorrectPassword If the user entered a wrong password.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "IncorrectPassword"
 *     }
 *
 * @apiSuccess {Boolean} success Did the user signIn successfully.
 * @apiSuccess {String} token User Hashed Password and it's Type.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "success":true,
 *      "token":"Bearer "+"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe"
 *     }
 *
 */
function postSignIn() {
  return;
}
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
 * @apiSuccess {Number} ID The user ID Number.
 * @apiSuccess {String} screen_name The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiSuccess {String} name The user name as they have defined it , Not necessairly a person name.
 * @apiSuccess {String} location The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.
 * @apiSuccess {String} bio The user's biographical.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "ID":12345
 *      "screen_name": "Messi_98",
 *      "name":"Ali Hamdy",
 *      "location":null,
 *      "bio":null
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
 * @apiParam {String} screen_name [Optional] The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiParam {String} name [Optional] The user name as they have defined it , Not necessairly a person name.
 * @apiParam {String} location [Nullable] The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.
 * @apiParam {String} bio [Nullable] The user's biographical.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "screen_name": "Messi_98",
 *      "name":"Ali Hamdy",
 *      "location":null,
 *      "bio":null
 *    }
 *
 * @apiExample Example usage:
 * POST localhost:3000/account/settings.json?screen_name=Messi_98
 *
 * @apiSuccess {Number} ID The user ID Number.
 * @apiSuccess {String} screen_name The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiSuccess {String} name The user name as they have defined it , Not necessairly a person name.
 * @apiSuccess {String} location The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.
 * @apiSuccess {String} bio The user's biographical.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "ID":12345
 *      "screen_name": "Messi_98",
 *      "name":"Ali Hamdy",
 *      "location":null,
 *      "bio":null
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
 * @apiUse UserObject
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
 * @api {get} /friendships/Outgoing Friendship Pending Follow Requests' IDs
 * @apiVersion 0.1.0
 * @apiName GetFriendshipsOutgoing
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/outgoing.json
 *
 * @apiDescription Returns a collection of numeric IDs for every user for whom the authenticating user has a pending follow request.
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
 * @apiSuccess {Object} relationship.source The Source Info (id,screen_name,following,followed_by,notifications_enabled)
 * @apiSuccess {Number} relationship.source.ID The source's ID.
 * @apiSuccess {String} relationship.source.screen_name The source's screen_name.
 * @apiSuccess {Boolean} relationship.source.following Is The source followed by the target.
 * @apiSuccess {Boolean} relationship.source.followed_by Is The source following the target.
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
 *                                      "notifications_enabled": false
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
 *      The order of user IDs or screen names may not match the order of users in the returned array.
 *      If a requested user is unknown, suspended, or deleted, then that user will not be returned in the results list.
 *      If none of your lookup criteria can be satisfied by returning a user object, a HTTP 404 will be thrown.
 *      You are strongly encouraged to use a POST for larger requests.
 *
 * @apiError NoUsersFound If the user has not uploaded a profile banner
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "NoUsersFound"
 *     }
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

/**
 * @api {post} /friendships/create Create Friendship (Follow)
 * @apiVersion 0.1.0
 * @apiName PostFriendshipsCreate
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/create.json
 *
 * @apiDescription Allows the authenticating user to follow (friend) the user specified in the ID parameter.
 * Returns the followed user when successful. Returns a string describing the failure condition when unsuccessful. If the user is already friends with the user a HTTP 403 may be returned, though for performance reasons this method may also return a HTTP 200 OK message even if the follow relationship already exists.
 * Actions taken in this method are asynchronous. Changes will be eventually consistent.

 * @apiParam {Number} user_ID [Required] The ID of the user to follow.
 * @apiParam {String} screen_name [Optional] The screen name of the user to follow.
 * @apiParam {Boolean} follow [Optional] Enable notifications for the target user.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID":783214,
 *       "screen_name":"noradio",
 *       "follow":true
 *     }
 *
 * @apiExample Example usage:
 * POST localhost:3000/friendships/create.json?user_id=USER_ID_TO_FOLLOW&follow=true
 *
 * @apiSuccess {Object} users The User Required object.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 * @apiSuccess {Object} status Array of Tweets Objects.
 * @apiSuccess {Object} status.tweet Tweet Object.
 *
 * @apiSuccessExample
 *      HTTP/1.1 200 OK
 *         {
 *              user-object,
 *              "status":{tweet-object}
 *         }    
 */
function postFriendshipsCreate() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {post} /friendships/Destroy Destroy Friendship (Unfollow)
 * @apiVersion 0.1.0
 * @apiName PostFriendshipsDestroy
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/destroy.json
 *
 * @apiDescription AAllows the authenticating user to unfollow the user specified in the ID parameter.
 * Returns the unfollowed user when successful. Returns a string describing the failure condition when unsuccessful.
 * Actions taken in this method are asynchronous. Changes will be eventually consistent.

 * @apiParam {Number} user_ID [Required] The ID of the user to unfollow.
 * @apiParam {String} screen_name [Optional] The screen name of the user to unfollow.	
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID":783214,
 *       "screen_name":"noradio"
 *     }
 *
 * @apiExample Example usage:
 * POST localhost:3000/friendships/destroy.json?user_id=2244994945
 *
 * @apiSuccess {Object} users The Unfollowed user object.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 * @apiSuccess {Object} status Array of Tweets Objects.
 * @apiSuccess {Object} status.tweet Tweet Object.
 *
 * @apiSuccessExample
 *      HTTP/1.1 200 OK
 *         {
 *              user-object,
 *              "status":{tweet-object}
 *         }    
 */
function postFriendshipsDestroy() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {post} /friendships/update Friendship Update
 * @apiVersion 0.1.0
 * @apiName PostFriendshipsUpdate
 * @apiGroup friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/friendships/update.json
 *
 * @apiDescription Enable or disable device notifications from the specified user.
 *
 * @apiParam {Number} source_id [Required] The ID of the user being followed.
 * @apiParam {String} source_screen_name [Optional] The screen name of the user being followed.
 * @apiParam {Boolean} device [Optional] Enable/disable device notifications from the target user.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "source_id": 12345,
 *      "source_screen_name":"twitterdev",
 *      "device":true,
 *    }
 *
 * @apiExample Example usage:
 * POST localhost:3000/friendships/update.json?user_id=2244994945&device=true
 *
 * @apiSuccess {Object} relationship It shows the current relation between the source and the target.
 * @apiSuccess {Object} relationship.target The Target Info (id,screen_name,following,followed_by)
 * @apiSuccess {Number} relationship.target.ID The target's ID.
 * @apiSuccess {String} relationship.target.screen_name The target's screen_name.
 * @apiSuccess {Boolean} relationship.target.following Is The target followed by the source.
 * @apiSuccess {Boolean} relationship.target.followed_by Is The target following the source.
 * @apiSuccess {Object} relationship.source The Source Info (id,screen_name,following,followed_by,notifications_enabled)
 * @apiSuccess {Number} relationship.source.ID The source's ID.
 * @apiSuccess {String} relationship.source.screen_name The source's screen_name.
 * @apiSuccess {Boolean} relationship.source.following Is The source followed by the target.
 * @apiSuccess {Boolean} relationship.source.followed_by Is The source following the target.
 * @apiSuccess {Boolean} relationship.source.notifications_enabled Is The source wants to get notifications from the target.
 *
 * @apiSuccessExample
 *  {
 *      "relationship": {
 *                          "target":  {
 *                                      "id": 2244994945,
 *                                      "screen_name": "twitterdev",
 *                                      "following": true,
 *                                      "followed_by": true
 *                                     },
 *                          "source":  {
 *                                      "id": 819797,
 *                                      "screen_name": "episod",
 *                                      "following": true,
 *                                      "followed_by": true,
 *                                      "notifications_enabled": true
 *                                      }
 *                      }
 *  }
 *
 */
function postFriendshipsUpdate() {
  return;
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//2- Novas
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
//      A- Get Nova timelines
// ------------------------------------------------------------------------------------------
/**
 * @api {get} /statuses/home_timeline Home Timeline
 * @apiVersion 0.1.0
 * @apiName gethome_timeline
 * @apiGroup statuses
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/statuses/home_timeline.json
 *
 *
 *@apidescription Returns a collection of the most recent Novas and ReNovas posted by the authenticating user and the users they follow. The home timeline is central to how most users interact with the Nova service.
 *
 *@apiParam {Number} count	[optional]	Specifies the number of records to retrieve.  The value of count is best thought of as a limit to the number of Novas to return because suspended or deleted content is removed after the count has been applied.
 *
 * @apiParam {Boolean} exclude_replies	[optional]	This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count Novas — this is because the count parameter retrieves that many Novas before filtering out ReNovas and replies.
 * 
 * @apiParam {Boolean} include_entities	[optional] The entities node will not be included when set to false.
 * 
 *@apiParamExample {json} Request-Example:
 *    {
 *      "Count": 5,
 *      "exclude_replies":false,
 *      "include_entities":false
 *    }
 * 
 *   @apiExample Example usage:
 * POST localhost:3000/statuses/home_timeline.json
 * 
 * 
 * @apiSuccess {String} created_at UTC time when this Tweet was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this Tweet.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented Tweet is a reply, this field will contain the integer representation of the original Tweet’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented Tweet is a reply, this field will contain the integer representation of the original Tweet’s author ID. This will not necessarily always be the user directly mentioned in the Tweet.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented Tweet is a reply, this field will contain the screen name of the original Tweet’s author.
 * @apiSuccess {Object} user The user who posted this Tweet.
 * @apiSuccess {Number} reply_count Number of times this Tweet has been replied to.
 * @apiSuccess {Number} retweet_count Number of times this Tweet has been retweeted.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this Tweet has been liked by Twitter users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the Tweet.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the tweet.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the tweet.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the tweet.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the tweet.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this Tweet has been liked by the authenticating user.
 * @apiSuccess {Boolean} retweeted Indicates whether this Tweet has been Retweeted by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this tweet.
 * @apiSuccess {Number[]} retweeted_by_IDs Array of Users' IDs whom retweeted this tweet.
 * @apiSuccess {Number[]} replied_tweets_IDs Array of tweets' IDs whom replied to this tweet.
 *
 * 
@apiSuccessExample
 * [
 *   {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"Tweet Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":114749583439036416,
 *      "in_reply_to_user_id":819797,
 *      "in_reply_to_screen_name":"twitterapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Twitter API",
 *                  "screen_name": "twitterapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Twitter API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "tweets_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "retweet_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "retweeted_by_IDs":[ 8437836 ],
 *          "replied_tweets_IDs":[217361273 , 732456254 , 83217437]
 *  },
 * 
 * {
 *  "created_at":"Wed Aug 27 13:09:00 +0000 2008",
 *      "ID":114749583439038416,
 *      "text":"Tweet Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":114749583439038416,
 *      "in_reply_to_user_id":819897,
 *      "in_reply_to_screen_name":"HarryWilliams",
 *       "user": {
 *                  "ID": 6896009,
 *                  "name": "Harry Williams",
 *                  "screen_name": "HarryWilliams",
 *                  "created_at":"2012-11-04T14:58:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "Just a test",
 *                  "followers_count": 95,
 *                  "friends_count": 82,
 *                  "favourites_count":7,
 *                  "tweets_count":48,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"https://si0.twimg.com/images/themes/theme1/bg.png",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":155,
 *          "retweet_count":158,
 *          "favorite_count":118,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "retweeted_by_IDs":[ 84376945 ],
 *          "replied_tweets_IDs":[683484 , 7349867 , 398694876]
 *
 * },
 * 
 * {
 *  "created_at":"Wed Aug 27 15:00:00 +0000 2008",
 *      "ID":819897,
 *      "text":"Another Test",
 *      "in_reply_to_status_id":819897,
 *      "in_reply_to_user_id":114749593439038416,
 *      "in_reply_to_screen_name":"willSmith",
 *       "user": {
 *                  "ID": 7540760,
 *                  "name": "Will Smith",
 *                  "screen_name": "WillSmith",
 *                  "created_at":"2012-11-04T14:49:09.157Z",
 *                  "location": "New York, CA",
 *                  "bio": "TEST",
 *                  "followers_count": 13214,
 *                  "friends_count": 549,
 *                  "favourites_count":79,
 *                  "tweets_count":486,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":5437,
 *          "retweet_count":6467,
 *          "favorite_count":364,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[34745 , 57548],
 *          "retweeted_by_IDs":[ 6548659],
 *          "replied_tweets_IDs":[69796 , 7349867 , 398694876]
 * 
 * }
 * ]
 **/
function getHomeTimeline() {
  return;
}

/**
 * @api {get} /statuses/User_timeline User Timeline
 * @apiVersion 0.1.0
 * @apiName getuser_timeline
 * @apiGroup statuses
 * @apiPermission private
 * 
 * @apiSampleRequest localhost:3000/statuses/User_timeline.json
 *
 *
 *@apidescription Returns a collection of the most recent Novas posted by the user indicated by the screen_name or user_id parameters
 The timeline returned is the equivalent of the one seen as a user's profile on  Nova.
 *
 *
 * @apiParam {Number}  user_id	 [optional]	The ID of the user for whom to    return results.	
 *@apiparam {string} screen_name	[optional]	The screen name of the user for whom to return results.		
 *@apiParam {Number} count	[optional]	Specifies the number of Novas  to try and retrieve. The value of count is best thought of as a limit to the number of Novas to return because suspended or deleted content is removed after the count has been applied.
 * @apiParam {Boolean} exclude_replies	[optional]	This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count Novas — this is because the count parameter retrieves that many Novas before filtering out ReNovas and replies.
 * 
 *@apiParamExample {json} Request-Example:
 *    { 
 *      "User_id":12345,
 *      "Screen_name":nordia,        
 *      "Count": 5,
 *      "exclude_replies":true
 *    }
 * 
 *   @apiExample Example usage:
 * POST localhost:3000/statuses/User_timeline.json
 * 
 * 
 * @apiSuccess {String} created_at UTC time when this Tweet was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this Tweet.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented Tweet is a reply, this field will contain the integer representation of the original Tweet’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented Tweet is a reply, this field will contain the integer representation of the original Tweet’s author ID. This will not necessarily always be the user directly mentioned in the Tweet.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented Tweet is a reply, this field will contain the screen name of the original Tweet’s author.
 * @apiSuccess {Object} user The user who posted this Tweet.
 * @apiSuccess {Number} reply_count Number of times this Tweet has been replied to.
 * @apiSuccess {Number} retweet_count Number of times this Tweet has been retweeted.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this Tweet has been liked by Twitter users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the Tweet.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the tweet.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the tweet.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the tweet.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the tweet.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this Tweet has been liked by the authenticating user.
 * @apiSuccess {Boolean} retweeted Indicates whether this Tweet has been Retweeted by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this tweet.
 * @apiSuccess {Number[]} retweeted_by_IDs Array of Users' IDs whom retweeted this tweet.
 * @apiSuccess {Number[]} replied_tweets_IDs Array of tweets' IDs whom replied to this tweet.
 * @apiSuccess {string}  retweeted_status Tweet that has been retweeted by the authenticating user.
 * 
 * @apiSuccessExample
 * [
 *   {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"Tweet Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":null,
 *      "in_reply_to_user_id":null,
 *      "in_reply_to_screen_name":"twitterapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Twitter API",
 *                  "screen_name": "twitterapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Twitter API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "tweets_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "retweet_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "retweeted_by_IDs":[ 8437836 ],
 *          "replied_tweets_IDs":[217361273 , 732456254 , 83217437]
 *  },
 *  {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"Tweet Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":null,
 *      "in_reply_to_user_id":null,
 *      "in_reply_to_screen_name":"twitterapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Twitter API",
 *                  "screen_name": "twitterapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Twitter API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "tweets_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "retweet_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "retweeted_by_IDs":[ 8437836 ],
 *          "replied_tweets_IDs":[217361273 , 732456254 , 83217437]
 *  },
 *  {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"Another Nova",
 *      "in_reply_to_status_id":114749583439036416,
 *      "in_reply_to_user_id":3683925,
 *      "in_reply_to_screen_name":"twitterapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Twitter API",
 *                  "screen_name": "twitterapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Twitter API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "tweets_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "retweet_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "retweeted_by_IDs":[ 8437836 ],
 *          "replied_tweets_IDs":[217361273 , 732456254 , 83217437]
 *  }
 * ]
 * 
 * 
 * 
 * 
 **/
function getUserTimeline() {
  return;
}

/**
 * @api {get} /statuses/mentions_timeline Mentions Timeline
 * @apiVersion 0.1.0
 * @apiName getmentions_timeline
 * @apiGroup statuses
 * @apiPermission private
 * 
 * @apiSampleRequest localhost:3000/statuses/mentions_timeline.json
 *
 *
 *@apidescription Returns the 20 most recent mentions (Novas containing a users's @screen_name) for the authenticating user.
 The timeline returned is the equivalent of the one seen when you view your mentions on Nova.com.
 *
 *@apiParam {Number} count	[optional]	Specifies the number of records to retrieve.  The value of count is best thought of as a limit to the number of Novas to return because suspended or deleted content is removed after the count has been applied.
 *
 * @apiParam {Boolean} exclude_replies	[optional]	This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count Novas — this is because the count parameter retrieves that many Novas before filtering out ReNovas and replies.
 * 
 * @apiParam {Boolean} include_entities	[optional] The entities node will not be included when set to false.
 *
 * @apiParamExample {json} Request-Example:
 *    { 
 *            
 *      "Count": 5,
 *      "exclude_replies":true,
 *      "include_entities":false
 *    }
 * 
 * @apiSuccess {String} created_at UTC time when this Tweet was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this Tweet.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented Tweet is a reply, this field will contain the integer representation of the original Tweet’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented Tweet is a reply, this field will contain the integer representation of the original Tweet’s author ID. This will not necessarily always be the user directly mentioned in the Tweet.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented Tweet is a reply, this field will contain the screen name of the original Tweet’s author.
 * @apiSuccess {Object} user The user who posted this Tweet.
 * @apiSuccess {Number} reply_count Number of times this Tweet has been replied to.
 * @apiSuccess {Number} retweet_count Number of times this Tweet has been retweeted.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this Tweet has been liked by Twitter users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the Tweet.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the tweet.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the tweet.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the tweet.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the tweet.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this Tweet has been liked by the authenticating user.
 * @apiSuccess {Boolean} retweeted Indicates whether this Tweet has been Retweeted by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this tweet.
 * @apiSuccess {Number[]} retweeted_by_IDs Array of Users' IDs whom retweeted this tweet.
 * @apiSuccess {Number[]} replied_tweets_IDs Array of tweets' IDs whom replied to this tweet.
 *
 * 
@apiSuccessExample
 * [
 *   {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"Tweet Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":114749583439036416,
 *      "in_reply_to_user_id":819797,
 *      "in_reply_to_screen_name":"twitterapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Twitter API",
 *                  "screen_name": "twitterapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Twitter API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "tweets_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "retweet_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":
 *                      [
 *                       {
 *                            "name": "Jason Costa",
 *                            "id": 14927800,
 *                            "screen_name": "jasoncosta"
 *                        }
 *                      ],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "retweeted_by_IDs":[ 8437836 ],
 *          "replied_tweets_IDs":[217361273 , 732456254 , 83217437]
 *  },
 * 
 * {
 *  "created_at":"Wed Aug 27 13:09:00 +0000 2008",
 *      "ID":114749583439038416,
 *      "text":"Tweet Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":114749583439038416,
 *      "in_reply_to_user_id":819897,
 *      "in_reply_to_screen_name":"HarryWilliams",
 *       "user": {
 *                  "ID": 6896009,
 *                  "name": "Harry Williams",
 *                  "screen_name": "HarryWilliams",
 *                  "created_at":"2012-11-04T14:58:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "Just a test",
 *                  "followers_count": 95,
 *                  "friends_count": 82,
 *                  "favourites_count":7,
 *                  "tweets_count":48,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"https://si0.twimg.com/images/themes/theme1/bg.png",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":155,
 *          "retweet_count":158,
 *          "favorite_count":118,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":
 *                          [
 *                           {
 *                            "name": "Jason Costa",
 *                            "id": 14927800,
 *                            "screen_name": "jasoncosta"
 *                           },  
 *                           {
 *                            "name": "Matt Harris",
 *                            "id": 777925,
 *                            "screen_name": "themattharris"
 *                           },
 *                           {
 *                            "name": "ThinkWall",        
 *                            "id": 117426578,
 *                            "screen_name": "thinkwall"
 *                            }
 *                           ],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "retweeted_by_IDs":[ 84376945 ],
 *          "replied_tweets_IDs":[683484 , 7349867 , 398694876]
 *
 * },
 * 
 * {
 *  "created_at":"Wed Aug 27 15:00:00 +0000 2008",
 *      "ID":819897,
 *      "text":"Another Test",
 *      "in_reply_to_status_id":819897,
 *      "in_reply_to_user_id":114749593439038416,
 *      "in_reply_to_screen_name":"willSmith",
 *       "user": {
 *                  "ID": 7540760,
 *                  "name": "Will Smith",
 *                  "screen_name": "WillSmith",
 *                  "created_at":"2012-11-04T14:49:09.157Z",
 *                  "location": "New York, CA",
 *                  "bio": "TEST",
 *                  "followers_count": 13214,
 *                  "friends_count": 549,
 *                  "favourites_count":79,
 *                  "tweets_count":486,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":5437,
 *          "retweet_count":6467,
 *          "favorite_count":364,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":
 *                          [ 
 *                           {                           
 *                           "name": "Jason Costa",
 *                            "id": 14927800,
 *                            "screen_name": "jasoncosta"
 *                           }
 *                          ],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "retweeted":false,
 *          "favorited_by_IDs":[34745 , 57548],
 *          "retweeted_by_IDs":[ 6548659],
 *          "replied_tweets_IDs":[69796 , 7349867 , 398694876]
 * 
 * }
 * ]
 * 
 * 
 **/
//------------------------------------------------------------------------
/**
*@api {post} /Twitter/:Create Favorite(Like)
*@apiVersion 0.1.0
*@apiName Like
*@apiGroup Tweets
*
*
*@apiParam {Number} ID The numerical ID of the tweet to like
*
*@apiSuccess {Boolean} success The user did like
*
*
*
*@apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200 OK
*   {
*     tweet-object,
*    "user": {user-object}
*   }
*/
// ----------------------------------------------------------------------------
/**
*@api {post} /Twitter/:Remove Favorite(Like)
*@apiVersion 0.1.0
*@apiName UnLike
*@apiGroup Tweets
*
*
*@apiParam {Number} ID The numerical ID of the tweet to like
*
*@apiSuccess {Boolean} success The user did unlike
*
*
*
*@apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200 OK
*   {
*     "contributors": null,
*     "coordinates": null,
*     "created_at": "Wed Sep 05 00:07:01 +0000 2012",
*     "entities": {
*        "hashtags": [],
*        "urls": [],
*        "user_mentions": []
*      },
*      "favorited": false,
*      "geo": null,
*      "id": 243138128959913986,
*      "id_str": "243138128959913986",
*      "in_reply_to_screen_name": null,
*      "in_reply_to_status_id": null,
*      "in_reply_to_status_id_str": null,
*      "in_reply_to_user_id": null,
*      "in_reply_to_user_id_str": null,
*      "place": null,
*      "retweet_count": 0,
*      "retweeted": false,
*      "source": "Twitter for Mac",
*      "text": "That feel when you accidentally type Bash commands into Campfire, and you also make a typo in them.",
*      "truncated": false,
*      "user": {
*        "contributors_enabled": false,
*        "created_at": "Wed Apr 23 20:32:35 +0000 2008",
*        "default_profile": false,
*        "default_profile_image": false,
*        "description": "Developer at GitHub in San Francisco, CA.rnrnChicken nuggets is like my family.",
*        "entities": {
*          "description": {
*            "urls": []
*          },
*          "url": {
*            "urls": [
*              {
*                "display_url": null,
*                "expanded_url": null,
*                "indices": [
*                  0,
*                  21
*                ],
*                "url": "http://jakeboxer.com/"
*              }
*            ]
*          }
*        },
*        "favourites_count": 187,
*        "follow_request_sent": false,
*        "followers_count": 714,
*        "following": false,
*        "friends_count": 327,
*        "geo_enabled": true,
*        "id": 14500363,
*        "id_str": "14500363",
*        "is_translator": false,
*        "lang": "en",
*        "listed_count": 39,
*        "location": "San Francisco, CA",
*        "name": "Jake Boxer",
*        "notifications": false,
*        "profile_background_color": "352726",
*        "profile_background_image_url": "http://a0.twimg.com/images/themes/theme5/bg.gif",
*        "profile_background_image_url_https": "https://si0.twimg.com/images/themes/theme5/bg.gif",
*        "profile_background_tile": false,
*        "profile_image_url": "http://a0.twimg.com/profile_images/1621757700/twitter_normal.png",
*        "profile_image_url_https": "https://si0.twimg.com/profile_images/1621757700/twitter_normal.png",
*        "profile_link_color": "D02B55",
*        "profile_sidebar_border_color": "829D5E",
*        "profile_sidebar_fill_color": "99CC33",
*        "profile_text_color": "3E4415",
*        "profile_use_background_image": true,
*        "protected": false,
*        "screen_name": "jake_boxer",
*        "show_all_inline_media": false,
*        "statuses_count": 5398,
*        "time_zone": "Eastern Time (US & Canada)",
*       "url": "http://jakeboxer.com/",
*        "utc_offset": -18000,
*        "verified": false
*      }
*   }
*/
// -----------------------------------------------------------------------------
/**
*@api {get} /Twitter/: Recent Favorites(Likes)
*@apiVersion 0.1.0
*@apiName LikesList
*@apiGroup Tweets
*
*
*@apiParam {Number} user_id OPTIONAL ID of user to show results.
*@apiParam {Number} screen_name OPTIONAL The screen name of the user for whom to return results.
*@apiParam  {Number} count OPTIONAL Specifies the number of records to retrieve.
*
*@apiSuccess {Boolean} success
*
*@apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
*     {
*       [
*        {
*          "coordinates": null,
*          "truncated": false,
*          "favorited": true,
*          "created_at": "Tue Sep 04 15:55:52 +0000 2012",
*          "id_str": "243014525132091393",
*          "in_reply_to_user_id_str": null,
*          "entities": {
*            "urls": [
*
*            ],
*            "hashtags": [
*
*            ],
*            "user_mentions": [
*
*            ]
*          },
*          "text": "Note to self:  don't die during off-peak hours on a holiday weekend.",
*          "contributors": null,
*          "id": 243014525132091393,
*          "retweet_count": 0,
*          "in_reply_to_status_id_str": null,
*          "geo": null,
*          "retweeted": false,
*          "in_reply_to_user_id": null,
*          "in_reply_to_screen_name": null,
*          "source": "web",
*          "user": {
*            "profile_sidebar_fill_color": "252429",
*            "profile_background_tile": true,
*            "profile_sidebar_border_color": "181A1E",
*            "name": "Sean Cook",
*            "profile_image_url": "http://a0.twimg.com/profile_images/1751506047/dead_sexy_normal.JPG",
*            "location": "San Francisco",
*            "created_at": "Sat May 09 17:58:22 +0000 2009",
*            "follow_request_sent": false,
*            "is_translator": false,
*            "id_str": "38895958",
*            "profile_link_color": "2FC2EF",
*            "entities": {
*              "description": {
*                "urls": [
*
*                ]
*              }
*            },
*            "favourites_count": 594,
*            "url": null,
*            "default_profile": false,
*            "contributors_enabled": true,
*            "profile_image_url_https": "https://si0.twimg.com/profile_images/1751506047/dead_sexy_normal.JPG",
*            "utc_offset": -28800,
*            "id": 38895958,
*            "listed_count": 191,
*            "profile_use_background_image": true,
*            "followers_count": 10659,
*            "protected": false,
*            "profile_text_color": "666666",
*            "lang": "en",
*            "profile_background_color": "1A1B1F",
*            "time_zone": "Pacific Time (US & Canada)",
*            "verified": false,
*            "profile_background_image_url_https": "https://si0.twimg.com/profile_background_images/495742332/purty_wood.png",
*            "description": "I taught your phone that thing you like.  The Mobile Partner Engineer @Twitter. ",
*            "geo_enabled": true,
*            "notifications": false,
*            "default_profile_image": false,
*            "friends_count": 1186,
*            "profile_background_image_url": "http://a0.twimg.com/profile_background_images/495742332/purty_wood.png",
*            "statuses_count": 2629,
*            "following": true,
*            "screen_name": "theSeanCook",
*            "show_all_inline_media": true
*          },
*          "place": {
*            "name": "San Francisco",
*            "country_code": "US",
*            "country": "United States",
*            "attributes": {
*            },
*            "url": "http://api.twitter.com/1/geo/id/5a110d312052166f.json",
*            "id": "5a110d312052166f",
*            "bounding_box": {
*              "coordinates": [
*                [
*                  [
*                    -122.51368188,
*                    37.70813196
*                  ],
*                  [
*                    -122.35845384,
*                    37.70813196
*                  ],
*                  [
*                    -122.35845384,
*                    37.83245301
*                  ],
*                  [
*                    -122.51368188,
*                    37.83245301
*                  ]
*                ]
*              ],
*              "type": "Polygon"
*            },
*            "full_name": "San Francisco, CA",
*            "place_type": "city"
*          },
*          "in_reply_to_status_id": null
*        },
*        {
*          "coordinates": null,
*          "truncated": false,
*          "favorited": true,
*          "created_at": "Tue Sep 04 00:17:11 +0000 2012",
*          "id_str": "242778296117514240",
*          "in_reply_to_user_id_str": null,
*          "entities": {
*            "urls": [
*
*            ],
*            "hashtags": [
*
*            ],
*            "user_mentions": [
*
*            ]
*          },
*          "text": "TWIT NPC. TWIT DUNGEONMASTER.",
*          "contributors": null,
*          "id": 242778296117514240,
*          "retweet_count": 1,
*          "in_reply_to_status_id_str": null,
*          "geo": null,
*          "retweeted": false,
*          "in_reply_to_user_id": null,
*          "in_reply_to_screen_name": null,
*          "source": "Twitter for Android",
*          "user": {
*            "profile_sidebar_fill_color": "DDEEF6",
*            "profile_background_tile": false,
*            "profile_sidebar_border_color": "C0DEED",
*            "name": "REGIS",
*            "profile_image_url": "http://a0.twimg.com/profile_images/1812284389/allseeingeye_normal.jpg",
*            "location": "",
*            "created_at": "Wed May 07 19:27:16 +0000 2008",
*            "follow_request_sent": false,
*            "is_translator": false,
*            "id_str": "14690653",
*            "profile_link_color": "009999",
*            "entities": {
*              "description": {
*                "urls": [
*
*                ]
*              }
*            },
*            "favourites_count": 46407,
*            "url": null,
*            "default_profile": false,
*            "contributors_enabled": false,
*            "profile_image_url_https": "https://si0.twimg.com/profile_images/1812284389/allseeingeye_normal.jpg",
*            "utc_offset": -25200,
*            "id": 14690653,
*            "listed_count": 194,
*            "profile_use_background_image": true,
*            "followers_count": 4198,
*            "protected": false,
*            "profile_text_color": "333333",
*            "lang": "en",
*            "profile_background_color": "131516",
*            "time_zone": "Mountain Time (US & Canada)",
*            "verified": false,
*            "profile_background_image_url_https": "https://si0.twimg.com/profile_background_images/530267284/11111.JPG",
*            "description": "Everything I tweet is or shall be.",
*            "geo_enabled": true,
*            "notifications": false,
*            "default_profile_image": false,
*            "friends_count": 200,
*            "profile_background_image_url": "http://a0.twimg.com/profile_background_images/530267284/11111.JPG",
*            "statuses_count": 43345,
*            "following": true,
*            "screen_name": "regisl",
*            "show_all_inline_media": false
*          },
*          "place": null,
*          "in_reply_to_status_id": null
*        }
*      ]
*     }
*/
function getUserTimeline() {
  return;
}
