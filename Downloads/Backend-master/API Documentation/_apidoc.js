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
 * @apiSuccess {Date} created_at Datetime that the user account was created on Ennovate.
 * @apiSuccess {String} location [Nullable] The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.
 * @apiSuccess {String} bio [Nullable] The user's biographical.
 * @apiSuccess {Number} followers_count The number of followers this account currently has.
 * @apiSuccess {Number} friends_count The number of users this account is following (AKA their “followings”).
 * @apiSuccess {Number} favourites_count The number of novas this user has liked in the account’s lifetime.
 * @apiSuccess {Number} novas_count The number of novas (including renovas) issued by the user.
 * @apiSuccess {Number[]} novas_IDs The IDs of User's novas and Renovas.
 * @apiSuccess {Number[]} favorites_novas_IDs The IDs of User's favorites novas.
 * @apiSuccess {String} profile_background_color The hexadecimal color chosen by the user for their background.
 * @apiSuccess {String} profile_background_image_url A HTTP-based URL pointing to the background image the user has uploaded for their profile.
 * @apiSuccess {String} profile_image_url A HTTP-based URL pointing to the user’s profile image.
 * @apiSuccess {Boolean} default_profile When true, indicates that the user has not altered the theme or background of their user profile.
 * @apiSuccess {Boolean} default_profile_image When true, indicates that the user has not uploaded their own profile image and a default image is used instead.
 * @apiSuccess {Object} notification_object The User Notifications.
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
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     {
 *       "ID": 6253282,
 *       "name": "Ennovate API",
 *       "screen_name": "Ennovateapi",
 *       "created_at":"2012-11-04T14:51:06.157Z",
 *       "location": "San Francisco, CA",
 *       "bio": "The Real Ennovate API.",
 *       "followers_count": 21,
 *       "friends_count": 32,
 *       "favourites_count":13,
 *       "novas_count":42,
 *       "novas_ID":[256321242121 , 3343726443],
 *       "favorites_novas_IDs":[38543785643 , 9384832948],
 *       "profile_background_color": "e8f2f7",
 *       "profile_background_image_url":"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png",
 *       "profile_image_url":"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
 *       "default_profile": fasle,
 *       "default_profile_image": false,
 *       "notification_object":{
 *                                  retweet_list:{[] , [], {}},
 *                                  mention_list:{[] , [] , {}},
 *                                  favorite_list:{[] , [],{}}
 *                              }
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
 * @apiSuccess {Date} created_at Datetime that the user account was created on Ennovate.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "ID":12345
 *      "screen_name": "Messi_98",
 *      "name":"Ali Hamdy",
 *      "password":"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe",
 *      "email":"ali_hamdy98@outlook.com",
 *      "created_at":"2012-11-04T14:51:06.157Z"
 *     }
 */

/**
 * @apiDefine novaObject
 * @apiVersion 0.1.0
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
 * @apiSuccessExample
 *  {
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
