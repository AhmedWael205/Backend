// ------------------------------------------------------------------------------------------
// 1- Accounts and users
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
//      A- Manage account settings and profile
// ------------------------------------------------------------------------------------------
/**
 * @api {post} /accounts/signup SignUp (Register)
 * @apiVersion 0.1.0
 * @apiName PostSignUp
 * @apiGroup Account
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/accounts/signup.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/accounts/signup.json
 *
 *
 * @apiDescription SigningUp a new Ennovate account it returns 200 and generates the user_ID and set the creation date if the user is successfully signedup and returns 400 if the email is already used or any other error occured.
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
 *       "msg": "email already registered."
 *     }
 *
 * @apiError MinScreenNameLengthError If the user Entered a screen name less than 3 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"screen_name" length must be at least 3 characters long'
 *     }
 *
 * @apiError ScreenNameInvalidCharacter If the user Entered a screen name with an invalid character.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": "\"screen_name\" must only contain alpha-numeric and underscore characters"
 *     }
 *
 * @apiError PasswordIsRequired If the user doesn't enter the password value.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "msg": "\"password\" is required"
 *     }
 *
 * @apiError NameIsRequired If the user doesn't enter the name value.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "msg": "\"name\" is required"
 *     }
 *
 * @apiError ScreenNameIsRequired If the user doesn't enter the screen name value.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "msg": "\"screen_name\" is required"
 *     }
 *
 * @apiError EmailIsRequired If the user doesn't enter the email value.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "msg": "\"email\" is required"
 *     }
 *
 * @apiError MaxScreenNameLengthError If the user Entered a screen name more than 15 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"screen_name" length must be at less than or equal to 15 characters long'
 *     }
 *
 * @apiError MinNameLengthError If the user Entered a name less than 3 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"name" length must be at least 3 characters long'
 *     }
 *
 * @apiError MaxNameLengthError If the user Entered a name more than 15 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"name" length must be at less than or equal to 15 characters long'
 *     }
 *
 * @apiError MinEmailLengthError If the user Entered a name less than 5 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"email" length must be at least 5 characters long'
 *     }
 *
 * @apiError MaxEmailLengthError If the user Entered a name more than 128 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"email" length must be at less than or equal to 128 characters long'
 *     }
 *
 * @apiError MinPasswordLengthError If the user Entered a password less than 8 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"password" length must be at least 8 characters long'
 *     }
 *
 * @apiError MaxPasswordLengthError If the user Entered a password more than 25 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"passsword" length must be at less than or equal to 25 characters long'
 *     }
 *
 * @apiError EmailError If the user Entered an invalid Email.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"email" must be valid email'
 *     }
 *
 * @apiError ScreenNameAlreadyExists If the user screen name is already used by another user.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "screen name already registered."
 *     }
 *
 * @apiError UnableToSendEmail If the user Entered an invalid Email.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "msg":'Unable to send email'
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
 * @api {post} /accounts/signin SignIn (Log In)
 * @apiVersion 0.1.0
 * @apiName PostSignIn
 * @apiGroup Account
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/accounts/signin.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/accounts/signin.json
 *
 *
 * @apiDescription SignIn to Ennovate using your email and password if it signIn successfully it returns 200 and a token , but if signIn field it returns 404 and the Error Type.
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
 * @apiError PasswordIsRequired If the user doesn't enter the password value.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "msg": "\"password\" is required"
 *     }
 *
 * @apiError EmailIsRequired If the user doesn't enter the email value.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "msg": "\"email\" is required"
 *     }
 *
 * @apiError MinEmailLengthError If the user Entered a name less than 5 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"email" length must be at least 5 characters long'
 *     }
 *
 * @apiError MaxEmailLengthError If the user Entered a name more than 128 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"email" length must be at less than or equal to 128 characters long'
 *     }
 *
 * @apiError MinPasswordLengthError If the user Entered a password less than 8 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"password" length must be at least 8 characters long'
 *     }
 *
 * @apiError MaxPasswordLengthError If the user Entered a password more than 25 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"passsword" length must be at less than or equal to 25 characters long'
 *     }
 *
 * @apiError EmailError If the user Entered an invalid Email.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"email" must be valid email'
 *     }
 *
 * @apiSuccess {String} token User Hashed Password and it's Type.
 * @apiSuccess {String} msg A message to warn you that this user is not verified.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "token":"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe"
 *     }
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "msg": "Please verify your email",
 *      "token":"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe"
 *     }
 *
 */
function postSignIn() {
  return;
}
// ------------------------------------------------------------------------------------------

/**
 * @api {get} /accounts/settings Account Settings
 * @apiVersion 0.1.0
 * @apiName GetSettings
 * @apiGroup Account
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/accounts/settings.json
 *
 * @apiExample Example usage:
 * GET localhost:3000/accounts/settings.json
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
 * GET localhost:3000/users/profile_banner.json?screen_name=Ennovateapi
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
 * @api {post} /accounts/remove_profile_banner Remove Profile Banner
 * @apiVersion 0.1.0
 * @apiName PostRemoveProfileBanner
 * @apiGroup Account
 * @apiPermission private
 * @apiSampleRequest localhost:3000/accounts/remove_profile_banner.json
 *
 * @apiDescription Removes the uploaded profile banner for the authenticating user. Returns HTTP 200 upon success.
 *
 * @apiExample Example usage:
 * POST localhost:3000/accounts/remove_profile_banner.json
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
 * @api {post} /accounts/settings Edit Account Settings
 * @apiVersion 0.1.0
 * @apiName PostAccountSettings
 * @apiGroup Account
 * @apiPermission private
 * @apiSampleRequest localhost:3000/accounts/settings.json
 *
 * @apiDescription Updates the authenticating user's settings.
 *
 * @apiParam {String} screen_name [Optional] The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiParam {String} name [Optional] The user name as they have defined it , Not necessairly a person name.
 * @apiParam {String} location [Optional] The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.
 * @apiParam {String} bio [Optional] The user's biographical.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "screen_name": "Messi_98",
 *      "name":"Ali Hamdy",
 *      "location":"testLoc",
 *      "bio":"testBio"
 *    }
 * 
 * @apiError ScreenNameAlreadyExists If the user screen name is already used by another user.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "screen name already registered."
 *     }
 *
 * 
 * @apiError MinScreenNameLengthError If the user Entered a screen name less than 3 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"screen_name" length must be at least 3 characters long'
 *     }
 *
 * @apiError ScreenNameInvalidCharacter If the user Entered a screen name with an invalid character.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": "\"screen_name\" must only contain alpha-numeric and underscore characters"
 *     }
 *
 * 
 * @apiError MaxScreenNameLengthError If the user Entered a screen name more than 15 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"screen_name" length must be at less than or equal to 15 characters long'
 *     }
 * 
 *  @apiError MinNameLengthError If the user Entered a name less than 3 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"name" length must be at least 3 characters long'
 *     }
 *
 * @apiError MaxNameLengthError If the user Entered a name more than 15 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"name" length must be at less than or equal to 15 characters long'
 *     }
 *
 * 
 *  @apiError MaxBioLengthError If the user Entered bio more than 255 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *  "msg": '"bio" length must be less than or equal to 255 characters  long'
 *      }
 *
 *  @apiError MaxLocationLengthError If the user Entered location more than 255 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *  "msg": '"location" length must be less than or equal to 100 characters long'
 *      }

 * @apiExample Example usage:
 * POST localhost:3000/accounts/settings.json?screen_name=Messi_98
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
 * @api {post} /accounts/update_profile_image Update Profile Image
 * @apiVersion 0.1.0
 * @apiName PostUpdateProfileImage
 * @apiGroup Account
 * @apiPermission private
 * @apiSampleRequest localhost:3000/accounts/update_profile_image.json
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
 * POST localhost:3000/accounts/update_profile_image.json?imageURL="http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
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
 * @apiGroup Saved_searches
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
 *          "name": "@Ennovateapi",
 *          "query": "@Ennovateapi"
 *      },
 *       {
 *          "created_at": "2018-11-04T14:51:06.157Z",
 *          "id": 9569730,
 *          "name": "@Ennovate OR Ennovateapi OR "Ennovate api" OR "@anywhere"",
 *          "query": "@Ennovate OR Ennovateapi OR "Ennovate api" OR "@anywhere""
 *       }
 * ]
 */
function getSavedSearches() {
  return;
}

// ---------------------------------------------------------------------------------------------------
/**
 * @api {post} /saved_searches/destroy/:id Delete search using ID
 * @apiVersion 0.1.0
 * @apiName PostDeleteSearchByID
 * @apiGroup Saved_searches
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
 *          "name": "@Ennovateapi",
 *          "query": "@Ennovateapi"
 *      }
 */
function postDeleteSearchByID() {
  return;
}

// ---------------------------------------------------------------------------------------------------

/**
 * @api {post} /saved_searches/delete_all Delete all Searches
 * @apiVersion 0.1.0
 * @apiName PostDeleteSearchesAll
 * @apiGroup Saved_searches
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
 *          "name": "@Ennovateapi",
 *          "query": "@Ennovateapi"
 *      },
 *       {
 *          "created_at": "2018-11-04T14:51:06.157Z",
 *          "id": 9569730,
 *          "name": "@Ennovate OR Ennovateapi OR "Ennovate api" OR "@anywhere"",
 *          "query": "@Ennovate OR Ennovateapi OR "Ennovate api" OR "@anywhere""
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
 * @apiGroup Followers
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
 * @apiGroup Followers
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
 * GET localhost:3000/followers/list.json?cursor=-1&screen_name=Ennovatedev
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
 * @apiGroup Followings
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
 * @apiGroup Followings
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
 * GET localhost:3000/followings/list.json?cursor=-1&screen_name=Ennovatedev
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
 * @apiGroup Friendships
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
 * @apiGroup Friendships
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
 * @apiGroup Friendships
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
 * @apiDescription Provides a simple, relevance-based search interface to public user accounts on Ennovate. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported.
 * Only the first 1,000 matching results are available.
 *
 * @apiParam {String} q [Required] The search query to run against people search.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "q":"Ennovate%20API"
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
 * @apiDescription Returns a variety of information about the user specified by the required user_id or screen_name parameter. The author's most recent nova will be returned inline when possible.
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
 * GET localhost:3000/users/show.json?screen_name=Ennovatedev
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
 * @apiGroup Friendships
 * @apiPermission private
 * @apiSampleRequest localhost:3000/friendships/create.json
 *
 * @apiDescription Allows the authenticating user to follow (friend) the user specified in the ID parameter.
 * Returns the followed user when successful. Returns a string describing the failure condition when unsuccessful. If the user is already friends with the user a HTTP 403 may be returned, though for performance reasons this method may also return a HTTP 200 OK message even if the follow relationship already exists.
 * Actions taken in this method are asynchronous. Changes will be eventually consistent.

 * @apiParam {Number} user_ID [Required] The ID of the user to follow.
 * @apiParam {String} screen_name [Optional] The screen name of the user to follow.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "user_ID":783214,
 *       "screen_name":"noradio",
 *     }
 *
 * @apiExample Example usage:
 * POST localhost:3000/friendships/create
 *
 * @apiSuccess {Object} users The User Required object.
 * @apiSuccess {Number} users.ID The user's ID.
 * @apiSuccess {String} users.email The user's email.
 * @apiSuccess {String} users.screen_name The user's screen name.
 * @apiSuccess {Object} status Array of novas Objects.
 * @apiSuccess {Object} status.nova nova Object.
 *
 * @apiSuccessExample
 *      HTTP/1.1 200 OK
 *         {
 *              user-object,
 *              "status":{nova-object}
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
 * @apiGroup Friendships
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
 * @apiSuccess {Object} status Array of novas Objects.
 * @apiSuccess {Object} status.nova nova Object.
 *
 * @apiSuccessExample
 *      HTTP/1.1 200 OK
 *         {
 *              user-object,
 *              "status":{nova-object}
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
 * @apiGroup Friendships
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
 *      "source_screen_name":"Ennovatedev",
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
 *                                      "screen_name": "Ennovatedev",
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
 * @apiName GetHomeTimeline
 * @apiGroup Statuses
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
 * @apiSuccess {String} created_at UTC time when this nova was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} user The user who posted this nova.
 * @apiSuccess {Number} reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} replied_novas_IDs Array of novas' IDs whom replied to this nova.
 *
 * 
@apiSuccessExample
 * [
 *   {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"nova Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":114749583439036416,
 *      "in_reply_to_user_id":819797,
 *      "in_reply_to_screen_name":"Ennovateapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Ennovate API",
 *                  "screen_name": "Ennovateapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Ennovate API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "novas_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "renova_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "renovaed":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "renovaed_by_IDs":[ 8437836 ],
 *          "replied_novas_IDs":[217361273 , 732456254 , 83217437]
 *  },
 * 
 * {
 *  "created_at":"Wed Aug 27 13:09:00 +0000 2008",
 *      "ID":114749583439038416,
 *      "text":"nova Button, Follow Button, and Web Intents",
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
 *                  "novas_count":48,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"https://si0.twimg.com/images/themes/theme1/bg.png",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":155,
 *          "renova_count":158,
 *          "favorite_count":118,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "renovaed":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "renovaed_by_IDs":[ 84376945 ],
 *          "replied_novas_IDs":[683484 , 7349867 , 398694876]
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
 *                  "novas_count":486,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":5437,
 *          "renova_count":6467,
 *          "favorite_count":364,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "renovaed":false,
 *          "favorited_by_IDs":[34745 , 57548],
 *          "renovaed_by_IDs":[ 6548659],
 *          "replied_novas_IDs":[69796 , 7349867 , 398694876]
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
 * @apiName GetUserTimeline
 * @apiGroup Statuses
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
 * @apiSuccess {String} created_at UTC time when this nova was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} user The user who posted this nova.
 * @apiSuccess {Number} reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} replied_novas_IDs Array of novas' IDs whom replied to this nova.
 * @apiSuccess {string}  renovaed_status nova that has been renovaed by the authenticating user.
 * 
 * @apiSuccessExample
 * [
 *   {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"nova Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":null,
 *      "in_reply_to_user_id":null,
 *      "in_reply_to_screen_name":"Ennovateapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Ennovate API",
 *                  "screen_name": "Ennovateapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Ennovate API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "novas_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "renova_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "renovaed":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "renovaed_by_IDs":[ 8437836 ],
 *          "replied_novas_IDs":[217361273 , 732456254 , 83217437]
 *  },
 *  {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"nova Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":null,
 *      "in_reply_to_user_id":null,
 *      "in_reply_to_screen_name":"Ennovateapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Ennovate API",
 *                  "screen_name": "Ennovateapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Ennovate API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "novas_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "renova_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "renovaed":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "renovaed_by_IDs":[ 8437836 ],
 *          "replied_novas_IDs":[217361273 , 732456254 , 83217437]
 *  },
 *  {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"Another Nova",
 *      "in_reply_to_status_id":114749583439036416,
 *      "in_reply_to_user_id":3683925,
 *      "in_reply_to_screen_name":"Ennovateapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Ennovate API",
 *                  "screen_name": "Ennovateapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Ennovate API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "novas_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "renova_count":1585,
 *          "favorite_count":1138,
 *          "entities": {
 *                          "hashtags":[],
 *                          "urls":[],
 *                          "user_mentions":[],
 *                          "media":[]
 *                      },
 *          "favorited":true,
 *          "renovaed":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "renovaed_by_IDs":[ 8437836 ],
 *          "replied_novas_IDs":[217361273 , 732456254 , 83217437]
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
 * @apiName GetMentionsTimeline
 * @apiGroup Statuses
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
 * @apiSuccess {String} created_at UTC time when this nova was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} user The user who posted this nova.
 * @apiSuccess {Number} reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} replied_novas_IDs Array of novas' IDs whom replied to this nova.
 *
 * 
@apiSuccessExample
 * [
 *   {
 *      "created_at":"Wed Aug 27 13:08:45 +0000 2008",
 *      "ID":114749583439036416,
 *      "text":"nova Button, Follow Button, and Web Intents",
 *      "in_reply_to_status_id":114749583439036416,
 *      "in_reply_to_user_id":819797,
 *      "in_reply_to_screen_name":"Ennovateapi",
 *       "user": {
 *                  "ID": 6253282,
 *                  "name": "Ennovate API",
 *                  "screen_name": "Ennovateapi",
 *                  "created_at":"2012-11-04T14:51:06.157Z",
 *                  "location": "San Francisco, CA",
 *                  "bio": "The Real Ennovate API.",
 *                  "followers_count": 21,
 *                  "friends_count": 32,
 *                  "favourites_count":13,
 *                  "novas_count":42,
 *                  "profile_background_color": "e8f2f7",
 *                  "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *                  "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":1585,
 *          "renova_count":1585,
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
 *          "renovaed":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "renovaed_by_IDs":[ 8437836 ],
 *          "replied_novas_IDs":[217361273 , 732456254 , 83217437]
 *  },
 * 
 * {
 *  "created_at":"Wed Aug 27 13:09:00 +0000 2008",
 *      "ID":114749583439038416,
 *      "text":"nova Button, Follow Button, and Web Intents",
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
 *                  "novas_count":48,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"https://si0.twimg.com/images/themes/theme1/bg.png",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":155,
 *          "renova_count":158,
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
 *          "renovaed":false,
 *          "favorited_by_IDs":[12345 , 76454],
 *          "renovaed_by_IDs":[ 84376945 ],
 *          "replied_novas_IDs":[683484 , 7349867 , 398694876]
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
 *                  "novas_count":486,
 *                  "profile_background_color": "C0DEED",
 *                  "profile_background_image_url":"http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg",
 *                  "profile_image_url":"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png",
 *                  "default_profile": fasle,
 *                  "default_profile_image": false
 *               },
 *          "reply_count":5437,
 *          "renova_count":6467,
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
 *          "renovaed":false,
 *          "favorited_by_IDs":[34745 , 57548],
 *          "renovaed_by_IDs":[ 6548659],
 *          "replied_novas_IDs":[69796 , 7349867 , 398694876]
 * 
 * }
 * ]
 * 
 * 
 **/
function getMentionTimeline() {
  return;
}
//--------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//      A- Post, retrieve and engage with Novas
// ------------------------------------------------------------------------------------------
/**
 *  @api {get} /statuses/renovas/:id Renova
 *  @apiVersion 0.1.0
 *  @apiName GetRenovas
 *  @apiGroup Statuses
 *  @apiPermission private
 *  @apiExample Example usage:
 *  GET localhost:3000/statuses/renovas/256321242121.json
 *
 *  @apiDescription Returns a collection of the 100 most recent renovas of the Nova specified by the id parameter.
 *
 *  @apiParam {Number} Id [Required] The numerical Id of the desired status.
 *  @apiParam {Number} count [Optional] Specifies the number of records to retrieve. Must be less than or equal to 100. default value is 100.
 *
 *
 *  @apiParamExample {json} Request-Example:
 *
 *    {
 *      "Id": "256321242121",
 *      "count":"50"
 *    }
 *
 * @apiSuccess {Object[]} novaObject The nova Object.
 * @apiSuccess {String} nova.created_at UTC time when this nova was created
 * @apiSuccess {Number} nova.ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} nova.text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} nova.in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} nova.in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} nova.in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} nova.user The user who posted this nova.
 * @apiSuccess {Number} nova.reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} nova.renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} nova.favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} nova.entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} nova.entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} nova.entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} nova.entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} nova.entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} nova.entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} nova.entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} nova.entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} nova.favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} nova.renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} nova.favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} nova.renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} nova.replied_novas_IDs Array of novas' IDs whom replied to this nova.
 *
 * @apiSuccessExample
 * [
 *      {nova-Object},{nova-Object}
 * ]
 *
 */
function GetRenovas() {
  return;
}
/**
 *  @api {get} statuses/renovas_of_me My Renovas
 *
 *  @apiVersion 0.1.0
 *  @apiName GetMyRenovas
 *  @apiGroup Statuses
 *  @apiPermission private
 *  @apiExample Example usage:
 *  GET localhost:3000/statuses/renovas_of_me.json
 *
 *  @apiDescription Returns the most recent Novas authored by the authenticating user that have been renovad by others. This timeline is a subset of the user's GET statuses / user_timeline.
 *
 *  @apiParam {number} count [optional] Specifies the number of records to retrieve. Must be less than or equal to 100. If omitted, 20 will be assumed.
 *  @apiParam {boolean} include_entities [optional] The nova entities node will not be included when set to false .
 *  @apiParam {boolean} include_user_entities [optional] The user entities node will not be included when set to false .
 *
 *  @apiParamExample {json} Request-Example:
 *
 *    {
 *      "count": "50",
 *      "include_entities":"false",
 *      "include_user_entities":"true"
 *    }
 *
 *
 * @apiSuccess {Object[]} novaObject The nova Object.
 * @apiSuccess {String} nova.created_at UTC time when this nova was created
 * @apiSuccess {Number} nova.ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} nova.text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} nova.in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} nova.in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} nova.in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} nova.user The user who posted this nova.
 * @apiSuccess {Number} nova.reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} nova.renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} nova.favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} nova.entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} nova.entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} nova.entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} nova.entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} nova.entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} nova.entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} nova.entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} nova.entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} nova.favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} nova.renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} nova.favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} nova.renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} nova.replied_novas_IDs Array of novas' IDs whom replied to this nova.
 *
 * @apiSuccessExample
 * [
 *      {nova-Object},{nova-Object}
 * ]
 *
 */
function GetMyRenovas() {
  return;
}
/**
 *
 *
 *
 *
 *
 * @api {post} /statuses/unrenova/:id UnReNova
 * @apiVersion 0.1.0
 * @apiName PostUnrenova
 * @apiGroup Statuses
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/statuses/unrenova/:id.json
 *
 * *@apidescription unNovas a novad status. returns the original nova with renova details embedded
 *
 *
 * @apiParam {Number} id [required]  the numerical ID of the desired status
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "id":12345
 *    }
 *
 * @apiExample Example usage:
 * POST localhost:3000/statuses/unrenova.json
 *
 *
 * @apiUse novaObject
 *
 **/

function postUnrenova() {
  return;
}

/**
 * @api {post} /statuses/update Update Novas
 * @apiVersion 0.1.0
 * @apiName PostUpdate
 * @apiGroup Statuses
 * @apiPermission private
 *
 *
 * @apiSampleRequest localhost:3000/statuses/update.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/statuses/update.json
 *
 * @apiDescription Updates the authenticating user's current status, also known as Novating. If the number of updates posted by the user reaches the current allowed limit this method will return an HTTP 403 error.
 *
 *
 * @apiParam {String} status [Required] The text of the status update.
 * @apiParam {Number} in_reply_to_status_id [Nullable] The ID of an existing status that the update is in reply to.
 * @apiParam {Number} media_ids [Optional] A media_id to associate with the Nova. You may include 1 photo or 1 animated GIF or 1 video in a Nova.
 * @apiParam {Number} place_id [Optional] A place in the world.
 * @apiParam {boolean} display_coordinates [Optional] Whether or not to put a pin on the exact coordinates a Nova has been sent from.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "status": "This is my first Nova",
 *      "in_reply_to_status_id":"455974794",
 *      "media_ids":"14873932",
 *      "place_id":"273468723",
 *      "display_coordinates": "false"
 *    }
 *
 * @apiUse novaObject
 *
 *
 **/
function postUpdateNovas() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {post} /statuses/destroy Destroy id
 * @apiVersion 0.1.0
 * @apiName PostDestroy
 * @apiGroup Statuses
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/statuses/Destroy.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/statuses/destroy.json
 *
 * @apiDescription Destroys the status specified by the required ID parameter. The authenticating user must be the author of the specified status. Returns the destroyed status if successful.
 *
 *
 * @apiParam {Number} id [Required] The numerical ID of the desired status.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "id": "45354345"
 *    }
 *
 * @apiUse novaObject
 **/

function postDestroyid() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /statuses/show Show Nova
 * @apiVersion 0.1.0
 * @apiName GetNova
 * @apiGroup Statuses
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/statuses/show.json
 *
 * @apiExample Example usage:
 * GET localhost:3000/statuses/show.json
 *
 * @apiDescription Returns a single Nova, specified by the id parameter.
 *
 * @apiParam {Number} id [Required] The numerical ID of the desired Nova.
 * @apiParam {boolean} include_my_reNova [Optional] When set to either true , t or 1 , any Novas returned that have been reNovad by the authenticating user will include an additional current_user_reNova node, containing the ID of the source status for the reNova.
 * @apiParam {boolean} include_entities [Optional] The entities node will not be included when set to false.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "id": "45354345",
 *      "include_my_reNova":"t",
 *      "include_entities ":"false"
 *    }
 *
 * @apiUse novaObject
 **/

function getShowNova() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /statuses/lookup Lookup Nova
 * @apiVersion 0.1.0
 * @apiName GetLookup
 * @apiGroup Statuses
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/statuses/lookup.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/statuses/lookup.json
 *
 * @apiDescription Returns fully-hydrated Nova objects for up to 100 Novas per request, as specified by comma-separated values passed to the id parameter.
 *
 * @apiParam {Number} id [Required] A comma separated list of Nova IDs, up to 100 are allowed in a single request.
 * @apiParam {boolean} include_entities [Optional] The entities node that may appear within embedded statuses will not be included when set to false.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "id": "45354345",
 *      "include_entities": "false"
 *    }
 *
 * @apiUse novaObject
 **/

function getLookupNova() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {post} /statuses/reNova Renova
 * @apiVersion 0.1.0
 * @apiName PostRenova
 * @apiGroup Statuses
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/statuses/reNova.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/statuses/reNova.json
 *
 * @apiDescription ReNovas a Nova.
 * @apiParam {Number} id [Required] The numerical ID of the desired status.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "id": "34930345",
 *    }
 *
 * @apiUse novaObject
 **/

function postRenova() {
  return;
}

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /statuses/reNovars Renovars
 * @apiVersion 0.1.0
 * @apiName GetRenovars
 * @apiGroup Statuses
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/statuses/reNovars.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/statuses/reNovars.json
 *
 * @apiDescription Returns a collection of user IDs belonging to users who have reNovad the Nova specified by the id parameter.
 * @apiParam {Number} id [Required] The numerical ID of the desired status.
 * @apiParam {Number} count [Optional] Specifies the number of records to retrieve.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "id": "34930345",
 *      "count":"1"
 *    }
 *
 * @apiSuccess {Number[]} ids of reNovars.
 *
 * @apiSuccessExample
 *      {
 *         "ids":[
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
 *                      ]
 *      }
 **/

function getRenovars() {
  return;
}

//------------------------------------------------------------------------
/**
 * @api {post} /favorites/create Create Favorite(Like)
 * @apiVersion 0.1.0
 * @apiName PostFavoiteCreate
 * @apiGroup Favorites
 * @apiPermission private
 * @apiSampleRequest localhost:3000/favorites/create.json
 *
 * @apiDescription favorites are now known as likes.
 * Favorites (likes) the nova specified in the ID parameter as the authenticating user. Returns the favorite nova when successful.
 * The process invoked by this method is asynchronous. The immediately returned nova object may not indicate the resultant favorited status of the nova. A 200 OK response from this method will indicate whether the intended action was successful or not.
 *
 * @apiExample Example usage:
 * POST localhost:3000/favorites/create.json
 *
 * @apiParam {Number} ID The numerical ID of the nova to like
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "ID": 313006
 *     }
 *
 * @apiSuccess {String} created_at UTC time when this nova was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} user The user who posted this nova.
 * @apiSuccess {Number} reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} replied_novas_IDs Array of novas' IDs whom replied to this nova.
 *
 *
 *@apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {nova-object}
 */
function postFavoiteCreate() {
  return;
}
// ----------------------------------------------------------------------------
/**
 * @api {post} /favorites/destroy Destroy Favorite(UnLike)
 * @apiVersion 0.1.0
 * @apiName PostFavoriteDestroy
 * @apiGroup Favorites
 * @apiPermission private
 * @apiSampleRequest localhost:3000/favorites/destroy.json
 *
 * @apiDescription Note: favorites are now known as likes.
 * Unfavorites (un-likes) the nova specified in the ID parameter as the authenticating user. Returns the un-liked nova when successful.
 * The process invoked by this method is asynchronous. The immediately returned nova object may not indicate the resultant favorited status of the nova. A 200 OK response from this method will indicate whether the intended action was successful or not.
 *
 * @apiExample Example usage:
 * POST localhost:3000/favorites/destroy.json?id=243138128959913986
 *
 *
 * @apiParam {Number} ID The numerical ID of the nova to like
 * @apiParamExample {json} Request-Example:
 *     {
 *       "ID": 313006
 *     }
 *
 * @apiSuccess {String} created_at UTC time when this nova was created
 * @apiSuccess {Number} ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} user The user who posted this nova.
 * @apiSuccess {Number} reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} replied_novas_IDs Array of novas' IDs whom replied to this nova.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {nova-Object}
 */
function postFavoriteDestroy() {
  return;
}
// -----------------------------------------------------------------------------
/**
 * @api {get} /favorites/list Recent Favorites(Likes)
 * @apiVersion 0.1.0
 * @apiName GetFavoriteLike
 * @apiGroup Favorites
 * @apiPermission private
 * @apiSampleRequest localhost:3000/favorites/list.json
 *
 * @apiDescription Note: favorites are now known as likes.
 * Returns the 20 most recent novas liked by the authenticating or specified user.
 *
 * @apiExample Example usage:
 * GET localhost:3000/favorites/list.json?count=2&screen_name=episod
 *
 * @apiParam {Number} user_id [OPTIONAL] ID of user to show results.
 * @apiParam {Number} screen_name [OPTIONAL] The screen name of the user for whom to return results.
 * @apiParam {Number} count [OPTIONAL] Specifies the number of records to retrieve.
 *
 * @apiSuccess {Object[]} novaObject The nova Object.
 * @apiSuccess {String} nova.created_at UTC time when this nova was created
 * @apiSuccess {Number} nova.ID The integer representation of the unique identifier for this nova.
 * @apiSuccess {String} nova.text The actual UTF-8 text of the status update.
 * @apiSuccess {Number} nova.in_reply_to_status_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.
 * @apiSuccess {Number} nova.in_reply_to_user_id [Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.
 * @apiSuccess {String} nova.in_reply_to_screen_name [Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.
 * @apiSuccess {Object} nova.user The user who posted this nova.
 * @apiSuccess {Number} nova.reply_count Number of times this nova has been replied to.
 * @apiSuccess {Number} nova.renova_count Number of times this nova has been renovaed.
 * @apiSuccess {Number} nova.favorite_count [Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.
 * @apiSuccess {Object} nova.entitiesObject Entities which have been parsed out of the text of the nova.
 * @apiSuccess {String[]} nova.entitiesObject.hashtags [Nullable] Array of Hastags in the nova.
 * @apiSuccess {String[]} nova.entitiesObject.urls [Nullable] Array of URLs in the nova.
 * @apiSuccess {Number[]} nova.entitiesObject.users_mentions_ID [Nullabe] Array of Users' IDs whom are mentioned in the nova.
 * @apiSuccess {Object} nova.entitiesObject.media [Nullable] The Media Included in the nova.
 * @apiSuccess {String} nova.entitiesObject.media.type The media type or format.
 * @apiSuccess {Number} nova.entitiesObject.media.size The size of this file in KBs.
 * @apiSuccess {String} nova.entitiesObject.media.url The Media's URL.
 * @apiSuccess {Boolean} nova.favorited [Nullable] Indicates whether this nova has been liked by the authenticating user.
 * @apiSuccess {Boolean} nova.renovaed Indicates whether this nova has been Renovaed by the authenticating user.
 * @apiSuccess {Number[]} nova.favorited_by_IDs Array of Users' IDs whom favorite this nova.
 * @apiSuccess {Number[]} nova.renovaed_by_IDs Array of Users' IDs whom renovaed this nova.
 * @apiSuccess {Number[]} nova.replied_novas_IDs Array of novas' IDs whom replied to this nova.

 *
 *@apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       [
 *          nova-Object,
 *          nova-Object
 *       ]
 *     }
 */
function getFavoriteLike() {
  return;
}

// ------------------------------------------------------------------------------------------

/**
 * @api {get} /notification Notifications
 * @apiVersion 0.1.0
 * @apiName GetNotification
 * @apiGroup Notification
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/notification.json
 *
 * @apiExample Example usage:
 * GET localhost:3000/notification.json
 *
 *
 * @apiDescription Returns the most recent ten notifications for the authenticating user.
 *
 * @apiSuccess {Object[]} notification_object The User Notifications (Array of notifications).
 * @apiSuccess {Object} notification_object.renova_list the renova list notification.
 * @apiSuccess {Number[]} notification_object.renova_list.nova_ID the renovaed novas IDs.
 * @apiSuccess {Number[]} notification_object.renova_list.user_action_ID the user's ID who done the action
 * @apiSuccess {Date} notification_object.renova_list.date Date of the action.
 * @apiSuccess {Object} notification_object.mention_list the mention list notification.
 * @apiSuccess {Number[]} notification_object.mention_list.nova_ID the mention novas IDs.
 * @apiSuccess {Number[]} notification_object.mention_list.user_action_ID the user's ID who done the action
 * @apiSuccess {Date} notification_object.mention_list.date Date of the action.
 * @apiSuccess {Object} notification_object.favorite_list the favorite list notification.
 * @apiSuccess {Number[]} notification_object.favorite_list.nova_ID the favorite novas IDs.
 * @apiSuccess {Number[]} notification_object.favorite_list.user_action_ID the user's ID who done the action
 * @apiSuccess {Date} notification_object.favorite_list.date Date of the action.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       [
 *          notification_object,
 *          notification_object,
 *          notification_object,
 *          notification_object,
 *          notification_object,
 *          notification_object,
 *          notification_object,
 *          notification_object,
 *          notification_object,
 *          notification_object
 *       ]
 *     }
 */
function getNotification() {
  return;
}

//---------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /forget_password Forget Password
 * @apiVersion 0.1.0
 * @apiName GetForgetPassword
 * @apiGroup Forget Password
 * @apiPermission private
 *
 * @apiSampleRequest localhost:3000/forget_password.json
 *
 * @apiExample Example usage:
 * POST localhost:3000/forget_password.json
 *
 *
 * @apiDescription Sends a link a to your email where you can change your password.
 *
 * @apiParam {String} email [Required] The user email.
 *
 * @apiParamExample {json} Request-Example:
 *    {
 *      "email":"ali_hamdy98@outlook.com"
 *    }
 *
 * @apiError UserNotFound If the user email is not used or incorrect.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 *
 */
function getForgetPassword() {
  return;
}
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
/**
 * @api {get} /users/search Search
 * @apiVersion 0.1.0
 * @apiName GetUsersSearch
 * @apiGroup User
 * @apiPermission private
 * @apiSampleRequest localhost:3000/users/search.json
 *
 * @apiDescription Provides a simple, relevance-based search interface to public user accounts on Ennovate. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported.
 * Only the first 1,000 matching results are available.
 *
 * @apiParam {String} q [Required] The search query to run against people search.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "q":"Ennovate%20API"
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
 * @api {post} /reset_password reset password
 * @apiVersion 0.1.0
 * @apiName ResetPassword
 * @apiGroup Reset Password
 * @apiPermission private
 * @apiSampleRequest localhost:3000/reset_password
 *
 * @apiDescription changes the user with the given token password, return the modified user object and a token.
 *
 * @apiParam {String} password [Required] The user's new password
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "password":"kokiwawa"
 *     }
 * 
 * @apiError MinPasswordLengthError If the user Entered a password less than 8 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"password" length must be at least 8 characters long'
 *     }
 *
 * @apiError MaxPasswordLengthError If the user Entered a password more than 25 characters long.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "msg": '"passsword" length must be at less than or equal to 25 characters long'
 *     }
 * 
 * @apiError PasswordIsRequired If the user doesn't enter the password value.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "msg": "\"password\" is required"
 *     }
 *

 *
 * @apiExample Example usage:
 * POST localhost:3000/reset_password?token=$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe
 * 
 * @apiSuccess {Object} user The modified user object.
 * @apiSuccess {string} token The modified user token.
 * 
 *  @apiSuccessExample
 *      {
 *          "user":{user-object},
 *          "token": "$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe"
 *     }
 */
function resetPassword() {
  return;
}

// ------------------------------------------------------------------------------------------
