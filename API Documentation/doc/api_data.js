define({ "api": [
  {
    "type": "get",
    "url": "/account/settings",
    "title": "The user account settings.",
    "version": "0.1.0",
    "name": "GetSettings",
    "group": "AccountGroup",
    "permission": [
      {
        "name": "private"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"discoverable_by_email \": \"true\",\n  \"language\": \"en\",\n \"protected\":\"false\",\n \"screen_name\":\"theSeanCook\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Twitter.js",
    "groupTitle": "Account endpoints",
    "groupDescription": "<p>Here is the description for the &quot;AccountGroup&quot;.</p>"
  },
  {
    "version": "0.1.0",
    "type": "",
    "url": "",
    "filename": "./_apidoc.js",
    "group": "D__Documents_CMPN_courses_Software_Engineering_Spring_2019_Project_Our_project_API_Documentation__apidoc_js",
    "groupTitle": "D__Documents_CMPN_courses_Software_Engineering_Spring_2019_Project_Our_project_API_Documentation__apidoc_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/users/profile_banner",
    "title": "The user's profile banner.",
    "version": "0.1.0",
    "name": "GetProfileBanner",
    "permission": [
      {
        "name": "private"
      }
    ],
    "group": "User",
    "description": "<p>Returns a map of the available size variations of the specified user's profile banner. If the user has not uploaded a profile banner, a HTTP 404 will be served instead. This method can be used instead of string manipulation on the profile_banner_url returned in user objects as described in Profile Images and Banners. The profile banner data available at each size variant's URL is in PNG format.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Optional The ID of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>Optional The screen name of the user for whom to return results.</p>"
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
  }
] });
