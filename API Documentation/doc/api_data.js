define({ "api": [
  {
    "type": "get",
    "url": "/account/settings",
    "title": "Account Settings",
    "version": "0.1.0",
    "name": "GetSettings",
    "group": "Account",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/account/settings.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/account/settings.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns settings for the authenticating user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "discoverable_by_email",
            "description": "<p>Is the user discoverable by email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>User language.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "protected",
            "description": "<p>Is the user protected.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>The user's screen name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"discoverable_by_email \": \"true\",\n  \"language\": \"en\",\n  \"protected\":\"false\",\n  \"screen_name\":\"theSeanCook\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/settings",
    "title": "Edit Account Settings",
    "version": "0.1.0",
    "name": "PostAccountSettings",
    "group": "Account",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/account/settings.json"
      }
    ],
    "description": "<p>Updates the authenticating user's settings.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>[Optional] The language which Twitter should render in for this user. The language must be specified by the appropriate two letter ISO 639-1 representation. Currently supported languages are provided by this endpoint .</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/account/settings.json?lang=en",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "discoverable_by_email",
            "description": "<p>Is the user discoverable by email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>User language.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "protected",
            "description": "<p>Is the user protected.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>The user's screen name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"discoverable_by_email \": \"true\",\n  \"language\": \"en\",\n  \"protected\":\"false\",\n  \"screen_name\":\"theSeanCook\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/remove_profile_banner",
    "title": "Remove Profile Banner",
    "version": "0.1.0",
    "name": "PostRemoveProfileBanner",
    "group": "Account",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/account/remove_profile_banner.json"
      }
    ],
    "description": "<p>Removes the uploaded profile banner for the authenticating user. Returns HTTP 200 upon success.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/account/remove_profile_banner.json",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/update_profile_image",
    "title": "Update Profile Image",
    "version": "0.1.0",
    "name": "PostUpdateProfileImage",
    "group": "Account",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/account/update_profile_image.json"
      }
    ],
    "description": "<p>Updates the authenticating user's profile image. Note that this method expects image , not a URL to a raw multipart data. This method asynchronously processes the uploaded file before updating the user's profile image URL. You can either update your local cache the next time you request the user's information, or, at least 5 seconds after uploading the image, ask for the updated URL using GET users / show.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageURL",
            "description": "<p>[Required] The URL of the image the user want to upload.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/account/update_profile_image.json?image=\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\"",
        "type": "json"
      }
    ],
    "filename": "./Twitter.js",
    "groupTitle": "Account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The user ID Number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user name as they have defined it , Not necessairly a person name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Datetime that the user account was created on Twitter.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>[Nullable] The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>[Nullable] The user's biographical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "protected",
            "description": "<p>Is the user protected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>Is the user account verfied.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "followers_count",
            "description": "<p>The number of followers this account currently has.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "friends_count",
            "description": "<p>The number of users this account is following (AKA their “followings”).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favourites_count",
            "description": "<p>The number of Tweets this user has liked in the account’s lifetime.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tweets_count",
            "description": "<p>The number of Tweets (including retweets) issued by the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_background_color",
            "description": "<p>The hexadecimal color chosen by the user for their background.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_background_image_url",
            "description": "<p>A HTTP-based URL pointing to the background image the user has uploaded for their profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image_url",
            "description": "<p>A HTTP-based URL pointing to the user’s profile image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "default_profile",
            "description": "<p>When true, indicates that the user has not altered the theme or background of their user profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "default_profile_image",
            "description": "<p>When true, indicates that the user has not uploaded their own profile image and a default image is used instead.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"ID\": 6253282,\n  \"name\": \"Twitter API\",\n  \"screen_name\": \"twitterapi\",\n  \"created_at\":\"2012-11-04T14:51:06.157Z\",\n  \"location\": \"San Francisco, CA\",\n  \"bio\": \"The Real Twitter API.\",\n  \"protected\":true,\n  \"verifed\":false,\n  \"followers_count\": 21,\n  \"friends_count\": 32,\n  \"favourites_count\":13,\n  \"tweets_count\":42,\n  \"profile_background_color\": \"e8f2f7\",\n  \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/twitterapi-bg.png\",\n  \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n  \"default_profile\": fasle,\n  \"default_profile_image\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/profile_banner",
    "title": "Profile Banner",
    "version": "0.1.0",
    "name": "GetProfileBanner",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "group": "User",
    "sampleRequest": [
      {
        "url": "localhost:3000/users/profile_banner.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/users/profile_banner.json?screen_name=twitterapi",
        "type": "json"
      }
    ],
    "description": "<p>Returns a map of the available size variations of the specified user's profile banner. If the user has not uploaded a profile banner, a HTTP 404 will be served instead. This method can be used instead of string manipulation on the profile_banner_url returned in user objects as described in Profile Images and Banners. The profile banner data available at each size variant's URL is in PNG format.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>[Optional] The ID of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Optional] The screen name of the user for whom to return results.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sizes",
            "description": "<p>The Image sizes (height,width).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The Image URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"sizes \": {\n                 \"h\":626,\n                 \"w\":1252\n             },\n \"url\":\"https://pbs.twimg.com/profile_banners/6253282/1347394302/\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoBannerFound",
            "description": "<p>If the user has not uploaded a profile banner</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoBannerFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/followers/ids",
    "title": "Followers IDs",
    "version": "0.1.0",
    "name": "GetFollowersIDs",
    "group": "followers",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/followers/ids.json"
      }
    ],
    "description": "<p>Returns a cursored collection of user IDs for every user following the specified user. At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple &quot;pages&quot; of results can be navigated through using the next_cursor value in subsequent requests. This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_ID",
            "description": "<p>[Optional] The ID of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Optional] The screen name of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cursor",
            "description": "<p>[Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first &quot;page.&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/followers/ids.json?cursor=-1&screen_name=andypiper",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "followers_IDs",
            "description": "<p>The User Followers IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "next_cursor",
            "description": "<p>To allow paging back and forth.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "previous_cursor",
            "description": "<p>To allow paging back and forth.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"followers_IDs\":[\n                        455974794,\n                        947576438684872705,\n                        850839346009780224,\n                        958850376630910976,\n                        889483959943536640,\n                        966094285119606784,\n                        1020583045,\n                        948604640811212801,\n                        967155179614240768,\n                        554514802,\n                        14873932,\n                        963916668731904000,\n                        970763391181746178,\n                        966091392631140358,\n                        .\n                        .\n                        .\n                        5000 ids later,\n                        .\n                        .\n                        .\n                        813143846,\n                        958604886735716353,\n                        402873729,\n                        958603486551330817,\n                        913076424897994753,\n                        820967329068707840,\n                        958593574932762624,\n                        958589381102665728,\n                        958573223737724929,\n                        889474485694410752\n                ],\n        \"next_cursor\": 1591087837626119954,\n        \"previous_cursor\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "followers"
  },
  {
    "type": "get",
    "url": "/followers/list",
    "title": "Followers List",
    "version": "0.1.0",
    "name": "GetFollowersList",
    "group": "followers",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/followers/list.json"
      }
    ],
    "description": "<p>Returns a cursored collection of user objects for users following the specified user. At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple &quot;pages&quot; of results can be navigated through using the next_cursor value in subsequent requests.roys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_ID",
            "description": "<p>[Optional] The ID of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Optional] The screen name of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cursor",
            "description": "<p>[Semi-Optional] Causes the results to be broken into pages. If no cursor is provided, a value of -1 will be assumed, which is the first &quot;page&quot;. The response from the API will include a previous_cursor and next_cursor to allow paging back and forth.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/followers/list.json?cursor=-1&screen_name=twitterdev",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The User Followers object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.ID",
            "description": "<p>The user's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>The user's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.screen_name",
            "description": "<p>The user's screen name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "next_cursor",
            "description": "<p>To allow paging back and forth.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "previous_cursor",
            "description": "<p>To allow paging back and forth.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n     \"users\":[\n                 {user-object},\n                 {user-object}\n             ],\n     \"next_cursor\": 1489467234237774933,\n     \"previous_cursor\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "followers"
  },
  {
    "type": "get",
    "url": "/followings/ids",
    "title": "Followings IDs",
    "version": "0.1.0",
    "name": "GetFollowingsIDs",
    "group": "followings",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/followings/ids.json"
      }
    ],
    "description": "<p>eturns a cursored collection of user IDs for every user the specified user is following (otherwise known as their &quot;friends&quot;). At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple &quot;pages&quot; of results can be navigated through using the next_cursor value in subsequent requests. This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_ID",
            "description": "<p>[Optional] The ID of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Optional] The screen name of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cursor",
            "description": "<p>[Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first &quot;page.&quot;</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/followings/ids.json?cursor=-1&screen_name=andypiper",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "followings_IDs",
            "description": "<p>The User Followings IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "next_cursor",
            "description": "<p>To allow paging back and forth.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "previous_cursor",
            "description": "<p>To allow paging back and forth.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"followings_IDs\": [\n                657693,\n                183709371,\n                7588892,\n                38895958,\n                22891211,\n                9019482,\n                14488353,\n                11750202,\n                12249,\n                22915745,\n                1249881,\n                14927800,\n                1523501,\n                22548447,\n                15062340,\n                133031077,\n                17874544,\n                777925,\n                4265731,\n                27674040,\n                26123649,\n                9576402,\n                821958,\n                7852612,\n                819797,\n                1401881,\n                8285392,\n                9160152,\n                795649,\n                3191321,\n                783214\n            ],\n    \"next_cursor\": 0,\n    \"previous_cursor\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "followings"
  },
  {
    "type": "get",
    "url": "/saved_searches/list",
    "title": "Saved Searches",
    "version": "0.1.0",
    "name": "GetSavedSearches",
    "group": "saved_searches",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/saved_searches/list.json"
      }
    ],
    "description": "<p>Returns the authenticated user's saved search queries.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/saved_searches/list.json",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Search",
            "description": "<p>The search result info (created_at ,ID ,name ,query).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Search.created_at",
            "description": "<p>Datetime of the user's search.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Search.ID",
            "description": "<p>The search ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Search.name",
            "description": "<p>The search name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Search.query",
            "description": "<p>The search query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n     {\n         \"created_at\": \"2018-12-04T14:51:06.157Z\",\n         \"ID\": 9569704,\n         \"name\": \"@twitterapi\",\n         \"query\": \"@twitterapi\"\n     },\n      {\n         \"created_at\": \"2018-11-04T14:51:06.157Z\",\n         \"id\": 9569730,\n         \"name\": \"@twitter OR twitterapi OR \"twitter api\" OR \"@anywhere\"\",\n         \"query\": \"@twitter OR twitterapi OR \"twitter api\" OR \"@anywhere\"\"\n      }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "saved_searches"
  },
  {
    "type": "post",
    "url": "/saved_searches/destroy/:id",
    "title": "Delete search using ID",
    "version": "0.1.0",
    "name": "PostDeleteSearchByID",
    "group": "saved_searches",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/saved_searches/destroy/:id.json"
      }
    ],
    "description": "<p>Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>[Required] The ID of the saved search.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/saved_searches/destroy/9569704.json",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Search",
            "description": "<p>The search result info (created_at ,ID ,name ,query).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Search.created_at",
            "description": "<p>Datetime of the user's search.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Search.ID",
            "description": "<p>The search ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Search.name",
            "description": "<p>The search name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Search.query",
            "description": "<p>The search query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"created_at\": \"2018-12-04T14:51:06.157Z\",\n    \"ID\": 9569704,\n    \"name\": \"@twitterapi\",\n    \"query\": \"@twitterapi\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "saved_searches"
  },
  {
    "type": "post",
    "url": "/saved_searches/delete_all",
    "title": "Delete all Searches",
    "version": "0.1.0",
    "name": "PostDeleteSearchesAll",
    "group": "saved_searches",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/saved_searches/delete_all.json"
      }
    ],
    "description": "<p>Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>[Required] The ID of the saved search.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/saved_searches/delete_all.json",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Search",
            "description": "<p>The search result info (created_at ,ID ,name ,query).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Search.created_at",
            "description": "<p>Datetime of the user's search.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Search.ID",
            "description": "<p>The search ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Search.name",
            "description": "<p>The search name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Search.query",
            "description": "<p>The search query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n     {\n         \"created_at\": \"2018-12-04T14:51:06.157Z\",\n         \"ID\": 9569704,\n         \"name\": \"@twitterapi\",\n         \"query\": \"@twitterapi\"\n     },\n      {\n         \"created_at\": \"2018-11-04T14:51:06.157Z\",\n         \"id\": 9569730,\n         \"name\": \"@twitter OR twitterapi OR \"twitter api\" OR \"@anywhere\"\",\n         \"query\": \"@twitter OR twitterapi OR \"twitter api\" OR \"@anywhere\"\"\n      }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "saved_searches"
  }
] });
