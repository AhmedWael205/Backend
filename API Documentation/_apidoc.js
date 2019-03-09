// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine UserObject
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number} ID The user ID Number.
 * @apiSuccess {String} name The user name as they have defined it , Not necessairly a person name.
 * @apiSuccess {String} screen_name The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiSuccess {Date} created_at Datetime that the user account was created on Twitter.
 * @apiSuccess {String} location [Nullable] The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.
 * @apiSuccess {String} bio [Nullable] The user's biographical.
 * @apiSuccess {Number} followers_count The number of followers this account currently has.
 * @apiSuccess {Number} friends_count The number of users this account is following (AKA their “followings”).
 * @apiSuccess {Number} favourites_count The number of Tweets this user has liked in the account’s lifetime.
 * @apiSuccess {Number} tweets_count The number of Tweets (including retweets) issued by the user.
 * @apiSuccess {Number[]} tweets_IDs The IDs of User's Tweets.
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
 *       "followers_count": 21,
 *       "friends_count": 32,
 *       "favourites_count":13,
 *       "tweets_count":42,
 *       "tweets_ID":[256321242121 , 3343726443],
 *       "profile_background_color": "e8f2f7",
 *       "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png",
 *       "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *       "default_profile": fasle,
 *       "default_profile_image": false
 *     }
 *
 */

/**
 * @apiDefine miniUserObject
 * @apiVersion 0.1.0
 *
 * @apiSuccess {Number} ID The user ID Number.
 * @apiSuccess {String} screen_name The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.
 * @apiSuccess {String} name The user name as they have defined it , Not necessairly a person name.
 * @apiSuccess {String} password The Hashed password of the user.
 * @apiSuccess {String} email The User's email.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "ID":12345
 *      "screen_name": "Messi_98",
 *      "name":"Ali Hamdy",
 *      "password":"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe",
 *      "email":"ali_hamdy98@outlook.com"
 *     }
 */

/**
 * @apiDefine TweetObject
 * @apiVersion 0.1.0
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
 * @apiSuccess {Number[]} replied_by_IDs Array of Users' IDs whom replied to this tweet.
 *
 * @apiSuccessExample
 *  {
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
 *          "replied_by_IDs":[217361273 , 732456254 , 83217437]
 *  }
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
