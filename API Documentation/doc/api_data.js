define({ "api": [
  {
    "type": "get",
    "url": "/accounts/settings",
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
        "url": "localhost:3000/accounts/settings.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/accounts/settings.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns settings for the authenticating user.</p>",
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
            "field": "screen_name",
            "description": "<p>The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.</p>"
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
            "field": "location",
            "description": "<p>The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>The user's biographical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"ID\":12345\n \"screen_name\": \"Messi_98\",\n \"name\":\"Ali Hamdy\",\n \"location\":null,\n \"bio\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/accounts/settings",
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
        "url": "localhost:3000/accounts/settings.json"
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
            "field": "screen_name",
            "description": "<p>[Optional] The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Optional] The user name as they have defined it , Not necessairly a person name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>[Optional] The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>[Optional] The user's biographical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"screen_name\": \"Messi_98\",\n  \"name\":\"Ali Hamdy\",\n  \"location\":\"testLoc\",\n  \"bio\":\"testBio\"\n}",
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
            "field": "ScreenNameAlreadyExists",
            "description": "<p>If the user screen name is already used by another user.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinScreenNameLengthError",
            "description": "<p>If the user Entered a screen name less than 3 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ScreenNameInvalidCharacter",
            "description": "<p>If the user Entered a screen name with an invalid character.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxScreenNameLengthError",
            "description": "<p>If the user Entered a screen name more than 15 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinNameLengthError",
            "description": "<p>If the user Entered a name less than 3 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxNameLengthError",
            "description": "<p>If the user Entered a name more than 15 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxBioLengthError",
            "description": "<p>If the user Entered bio more than 255 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxLocationLengthError",
            "description": "<p>If the user Entered location more than 255 characters long.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"screen name already registered.\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"screen_name\" length must be at least 3 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": \"\\\"screen_name\\\" must only contain alpha-numeric and underscore characters\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"screen_name\" length must be at less than or equal to 15 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"name\" length must be at least 3 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"name\" length must be at less than or equal to 15 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n\"msg\": '\"bio\" length must be less than or equal to 255 characters  long'\n    }",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n\"msg\": '\"location\" length must be less than or equal to 100 characters long'\n    }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/accounts/settings.json?screen_name=Messi_98",
        "type": "json"
      }
    ],
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
            "field": "screen_name",
            "description": "<p>The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.</p>"
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
            "field": "location",
            "description": "<p>The user-defined location for this account’s profile. Not necessarily a location, nor machine-parseable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>The user's biographical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"ID\":12345\n \"screen_name\": \"Messi_98\",\n \"name\":\"Ali Hamdy\",\n \"location\":null,\n \"bio\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/accounts/remove_profile_banner",
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
        "url": "localhost:3000/accounts/remove_profile_banner.json"
      }
    ],
    "description": "<p>Removes the uploaded profile banner for the authenticating user. Returns HTTP 200 upon success.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/accounts/remove_profile_banner.json",
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
    "filename": "./Ennovate.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/accounts/signin",
    "title": "SignIn (Log In)",
    "version": "0.1.0",
    "name": "PostSignIn",
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
        "url": "localhost:3000/accounts/signin.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/accounts/signin.json",
        "type": "json"
      }
    ],
    "description": "<p>SignIn to Ennovate using your email and password if it signIn successfully it returns 200 and a token , but if signIn field it returns 404 and the Error Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>[Required] The user email , it must be never used to any other user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>[Required] The user's password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\":\"ali_hamdy98@outlook.com\",\n  \"password\":\"User_Password\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>If the user email is not used or incorrect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectPassword",
            "description": "<p>If the user entered a wrong password.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIsRequired",
            "description": "<p>If the user doesn't enter the password value.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailIsRequired",
            "description": "<p>If the user doesn't enter the email value.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinEmailLengthError",
            "description": "<p>If the user Entered a name less than 5 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxEmailLengthError",
            "description": "<p>If the user Entered a name more than 128 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinPasswordLengthError",
            "description": "<p>If the user Entered a password less than 8 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxPasswordLengthError",
            "description": "<p>If the user Entered a password more than 25 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailError",
            "description": "<p>If the user Entered an invalid Email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"IncorrectPassword\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"\\\"password\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"\\\"email\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"email\" length must be at least 5 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"email\" length must be at less than or equal to 128 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"password\" length must be at least 8 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"passsword\" length must be at less than or equal to 25 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"email\" must be valid email'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Hashed Password and it's Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>A message to warn you that this user is not verified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"token\":\"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"msg\": \"Please verify your email\",\n \"token\":\"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/accounts/signup",
    "title": "SignUp (Register)",
    "version": "0.1.0",
    "name": "PostSignUp",
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
        "url": "localhost:3000/accounts/signup.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/accounts/signup.json",
        "type": "json"
      }
    ],
    "description": "<p>SigningUp a new Ennovate account it returns 200 and generates the user_ID and set the creation date if the user is successfully signedup and returns 400 if the email is already used or any other error occured.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>[Required] The user name as they have defined it , Not necessairly a person name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Required] The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>[Required] The user email , it must be never used to any other user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>[Required] The user's password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Ali Hany\",\n  \"screen_name\":\"Messi_98\",\n  \"email\":\"ali_hamdy98@outlook.com\",\n  \"password\":\"User_Password\"\n}",
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
            "field": "EmailAlreadyExists",
            "description": "<p>If the user email is already used by another user.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinScreenNameLengthError",
            "description": "<p>If the user Entered a screen name less than 3 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ScreenNameInvalidCharacter",
            "description": "<p>If the user Entered a screen name with an invalid character.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIsRequired",
            "description": "<p>If the user doesn't enter the password value.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NameIsRequired",
            "description": "<p>If the user doesn't enter the name value.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ScreenNameIsRequired",
            "description": "<p>If the user doesn't enter the screen name value.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailIsRequired",
            "description": "<p>If the user doesn't enter the email value.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxScreenNameLengthError",
            "description": "<p>If the user Entered a screen name more than 15 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinNameLengthError",
            "description": "<p>If the user Entered a name less than 3 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxNameLengthError",
            "description": "<p>If the user Entered a name more than 15 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinEmailLengthError",
            "description": "<p>If the user Entered a name less than 5 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxEmailLengthError",
            "description": "<p>If the user Entered a name more than 128 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MinPasswordLengthError",
            "description": "<p>If the user Entered a password less than 8 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxPasswordLengthError",
            "description": "<p>If the user Entered a password more than 25 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailError",
            "description": "<p>If the user Entered an invalid Email.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ScreenNameAlreadyExists",
            "description": "<p>If the user screen name is already used by another user.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnableToSendEmail",
            "description": "<p>If the user Entered an invalid Email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"email already registered.\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"screen_name\" length must be at least 3 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": \"\\\"screen_name\\\" must only contain alpha-numeric and underscore characters\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"\\\"password\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"\\\"name\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"\\\"screen_name\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"\\\"email\\\" is required\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"screen_name\" length must be at less than or equal to 15 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"name\" length must be at least 3 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"name\" length must be at less than or equal to 15 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"email\" length must be at least 5 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"email\" length must be at less than or equal to 128 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"password\" length must be at least 8 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"passsword\" length must be at less than or equal to 25 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"email\" must be valid email'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"msg\": \"screen name already registered.\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"msg\":'Unable to send email'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
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
            "field": "screen_name",
            "description": "<p>The screen name, handle, or alias that this user identifies themselves with. screen_names are unique but subject to change. Use ID as a user identifier whenever possible.</p>"
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
            "field": "password",
            "description": "<p>The Hashed password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The User's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Datetime that the user account was created on Ennovate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"ID\":12345\n \"screen_name\": \"Messi_98\",\n \"name\":\"Ali Hamdy\",\n \"password\":\"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe\",\n \"email\":\"ali_hamdy98@outlook.com\",\n \"created_at\":\"2012-11-04T14:51:06.157Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/accounts/update_profile_image",
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
        "url": "localhost:3000/accounts/update_profile_image.json"
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"imageURL\": \"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/accounts/update_profile_image.json?imageURL=\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\"",
        "type": "json"
      }
    ],
    "filename": "./Ennovate.js",
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
            "description": "<p>Datetime that the user account was created on Ennovate.</p>"
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
            "description": "<p>The number of novas this user has liked in the account’s lifetime.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "novas_count",
            "description": "<p>The number of novas (including renovas) issued by the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "novas_IDs",
            "description": "<p>The IDs of User's novas and Renovas.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorites_novas_IDs",
            "description": "<p>The IDs of User's favorites novas.</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification_object",
            "description": "<p>The User Notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification_object.renova_list",
            "description": "<p>the renova list notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.renova_list.nova_ID",
            "description": "<p>the renovaed novas IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.renova_list.user_action_ID",
            "description": "<p>the user's ID who done the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notification_object.renova_list.date",
            "description": "<p>Date of the action.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification_object.mention_list",
            "description": "<p>the mention list notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.mention_list.nova_ID",
            "description": "<p>the mention novas IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.mention_list.user_action_ID",
            "description": "<p>the user's ID who done the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notification_object.mention_list.date",
            "description": "<p>Date of the action.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification_object.favorite_list",
            "description": "<p>the favorite list notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.favorite_list.nova_ID",
            "description": "<p>the favorite novas IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.favorite_list.user_action_ID",
            "description": "<p>the user's ID who done the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notification_object.favorite_list.date",
            "description": "<p>Date of the action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"ID\": 6253282,\n  \"name\": \"Ennovate API\",\n  \"screen_name\": \"Ennovateapi\",\n  \"created_at\":\"2012-11-04T14:51:06.157Z\",\n  \"location\": \"San Francisco, CA\",\n  \"bio\": \"The Real Ennovate API.\",\n  \"followers_count\": 21,\n  \"friends_count\": 32,\n  \"favourites_count\":13,\n  \"novas_count\":42,\n  \"novas_ID\":[256321242121 , 3343726443],\n  \"favorites_novas_IDs\":[38543785643 , 9384832948],\n  \"profile_background_color\": \"e8f2f7\",\n  \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n  \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n  \"default_profile\": fasle,\n  \"default_profile_image\": false,\n  \"notification_object\":{\n                             retweet_list:{[] , [], {}},\n                             mention_list:{[] , [] , {}},\n                             favorite_list:{[] , [],{}}\n                         }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/favorites/list",
    "title": "Recent Favorites(Likes)",
    "version": "0.1.0",
    "name": "GetFavoriteLike",
    "group": "Favorites",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/favorites/list.json"
      }
    ],
    "description": "<p>Note: favorites are now known as likes. Returns the 20 most recent novas liked by the authenticating or specified user.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/favorites/list.json?count=2&screen_name=episod",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>[OPTIONAL] ID of user to show results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[OPTIONAL] The screen name of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>[OPTIONAL] Specifies the number of records to retrieve.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "novaObject",
            "description": "<p>The nova Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nova.entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nova.entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "nova.favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "nova.renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  [\n     nova-Object,\n     nova-Object\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "post",
    "url": "/favorites/create",
    "title": "Create Favorite(Like)",
    "version": "0.1.0",
    "name": "PostFavoiteCreate",
    "group": "Favorites",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/favorites/create.json"
      }
    ],
    "description": "<p>favorites are now known as likes. Favorites (likes) the nova specified in the ID parameter as the authenticating user. Returns the favorite nova when successful. The process invoked by this method is asynchronous. The immediately returned nova object may not indicate the resultant favorited status of the nova. A 200 OK response from this method will indicate whether the intended action was successful or not.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/favorites/create.json",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The numerical ID of the nova to like</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ID\": 313006\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{nova-object}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "post",
    "url": "/favorites/destroy",
    "title": "Destroy Favorite(UnLike)",
    "version": "0.1.0",
    "name": "PostFavoriteDestroy",
    "group": "Favorites",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/favorites/destroy.json"
      }
    ],
    "description": "<p>Note: favorites are now known as likes. Unfavorites (un-likes) the nova specified in the ID parameter as the authenticating user. Returns the un-liked nova when successful. The process invoked by this method is asynchronous. The immediately returned nova object may not indicate the resultant favorited status of the nova. A 200 OK response from this method will indicate whether the intended action was successful or not.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/favorites/destroy.json?id=243138128959913986",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The numerical ID of the nova to like</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"ID\": 313006\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{nova-Object}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "get",
    "url": "/followers/ids",
    "title": "Followers IDs",
    "version": "0.1.0",
    "name": "GetFollowersIDs",
    "group": "Followers",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\": 12345,\n  \"screen_name\":\"noradio\",\n  \"cursor\": 12893764510938\n}",
          "type": "json"
        }
      ]
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
    "filename": "./Ennovate.js",
    "groupTitle": "Followers"
  },
  {
    "type": "get",
    "url": "/followers/list",
    "title": "Followers List",
    "version": "0.1.0",
    "name": "GetFollowersList",
    "group": "Followers",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\": 12345,\n  \"screen_name\":\"noradio\",\n  \"cursor\": 12893764510938\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/followers/list.json?cursor=-1&screen_name=Ennovatedev",
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
    "filename": "./Ennovate.js",
    "groupTitle": "Followers"
  },
  {
    "type": "get",
    "url": "/followings/ids",
    "title": "Followings IDs",
    "version": "0.1.0",
    "name": "GetFollowingsIDs",
    "group": "Followings",
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
    "description": "<p>Returns a cursored collection of user IDs for every user the specified user is following (otherwise known as their &quot;friends&quot;). At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple &quot;pages&quot; of results can be navigated through using the next_cursor value in subsequent requests. This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.</p>",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\": 12345,\n  \"screen_name\":\"noradio\",\n  \"cursor\": 12893764510938\n}",
          "type": "json"
        }
      ]
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
    "filename": "./Ennovate.js",
    "groupTitle": "Followings"
  },
  {
    "type": "get",
    "url": "/followings/list",
    "title": "Followings List",
    "version": "0.1.0",
    "name": "GetFollowingsList",
    "group": "Followings",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/followings/list.json"
      }
    ],
    "description": "<p>Returns a cursored collection of user objects for every user the specified user is following (otherwise known as their &quot;friends&quot;). At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple &quot;pages&quot; of results can be navigated through using the next_cursor value in subsequent requests.</p>",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\": 12345,\n  \"screen_name\":\"noradio\",\n  \"cursor\": 12893764510938\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/followings/list.json?cursor=-1&screen_name=Ennovatedev",
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
            "description": "<p>The User Followings object.</p>"
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
    "filename": "./Ennovate.js",
    "groupTitle": "Followings"
  },
  {
    "type": "get",
    "url": "/forget_password",
    "title": "Forget Password",
    "version": "0.1.0",
    "name": "GetForgetPassword",
    "group": "Forget_Password",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/forget_password.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/forget_password.json",
        "type": "json"
      }
    ],
    "description": "<p>Sends a link a to your email where you can change your password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>[Required] The user email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\":\"ali_hamdy98@outlook.com\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>If the user email is not used or incorrect.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Forget_Password"
  },
  {
    "type": "get",
    "url": "/friendships/incoming",
    "title": "Friendship Requests' IDs",
    "version": "0.1.0",
    "name": "GetFriendshipsIncoming",
    "group": "Friendships",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/friendships/incoming.json"
      }
    ],
    "description": "<p>Returns a collection of numeric IDs for every user who has a pending request to follow the authenticating user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cursor",
            "description": "<p>[Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first &quot;page.&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"cursor\": 12893764510938\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/friendships/incoming.json",
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
            "field": "friendshipsRequetsIDs",
            "description": "<p>The User friendships Requests IDs.</p>"
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
          "content": "{\n    \"friendshipsRequetsIDs\": [\n                657693,\n                183709371,\n                7588892,\n                783214\n            ],\n    \"next_cursor\": 0,\n    \"previous_cursor\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Friendships"
  },
  {
    "type": "get",
    "url": "/friendships/Outgoing",
    "title": "Friendship Pending Follow Requests' IDs",
    "version": "0.1.0",
    "name": "GetFriendshipsOutgoing",
    "group": "Friendships",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/friendships/outgoing.json"
      }
    ],
    "description": "<p>Returns a collection of numeric IDs for every user for whom the authenticating user has a pending follow request.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cursor",
            "description": "<p>[Semi-Optional] Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first &quot;page.&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"cursor\": 12893764510938\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/friendships/outgoing.json",
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
            "field": "friendshipsPendingIDs",
            "description": "<p>The Users' IDs with a pending follow request.</p>"
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
          "content": "{\n    \"friendshipsPendingIDs\": [\n                657693,\n                183709371,\n                7588892,\n                1523501,\n                22548447,\n                15062340,\n                133031077,\n                17874544,\n                777925,\n                4265731,\n                783214\n            ],\n    \"next_cursor\": 0,\n    \"previous_cursor\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Friendships"
  },
  {
    "type": "get",
    "url": "/friendships/show",
    "title": "Friendship Relations",
    "version": "0.1.0",
    "name": "GetFriendshipsShow",
    "group": "Friendships",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/friendships/friendships/show.json"
      }
    ],
    "description": "<p>Returns detailed information about the relationship between two arbitrary users.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>[Required] The user_id of the subject user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_screen_name",
            "description": "<p>[Optional] The screen_name of the subject user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "target_id",
            "description": "<p>[Required] The user_id of the target user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "target_screen_name",
            "description": "<p>[Optional] The screen_name of the target user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"source_id\": 3191321,\n  \"source_screen_name\":\"raffi\",\n  \"target_id\":20,\n  \"target_screen_name\":\"noradio\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/friendships/show.json?source_screen_name=bert&target_screen_name=ernie",
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
            "field": "relationship",
            "description": "<p>It shows the current relation between the source and the target.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "relationship.target",
            "description": "<p>The Target Info (id,screen_name,following,followed_by)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationship.target.ID",
            "description": "<p>The target's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship.target.screen_name",
            "description": "<p>The target's screen_name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.target.following",
            "description": "<p>Is The target followed by the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.target.followed_by",
            "description": "<p>Is The target following the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "relationship.source",
            "description": "<p>The Source Info (id,screen_name,following,followed_by,notifications_enabled)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationship.source.ID",
            "description": "<p>The source's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship.source.screen_name",
            "description": "<p>The source's screen_name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.source.following",
            "description": "<p>Is The source followed by the target.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.source.followed_by",
            "description": "<p>Is The source following the target.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.source.notifications_enabled",
            "description": "<p>Is The source wants to get notifications from the target.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"relationship\": {\n                        \"target\":  {\n                                    \"id\": 12148,\n                                    \"screen_name\": \"ernie\",\n                                    \"following\": false,\n                                    \"followed_by\": false\n                                   },\n                        \"source\":  {\n                                    \"id\": 8649302,\n                                    \"screen_name\": \"bert\",\n                                    \"following\": false,\n                                    \"followed_by\": false,\n                                    \"notifications_enabled\": false\n                                    }\n                    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Friendships"
  },
  {
    "type": "post",
    "url": "/friendships/create",
    "title": "Create Friendship (Follow)",
    "version": "0.1.0",
    "name": "PostFriendshipsCreate",
    "group": "Friendships",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/friendships/create.json"
      }
    ],
    "description": "<p>Allows the authenticating user to follow (friend) the user specified in the ID parameter. Returns the followed user when successful. Returns a string describing the failure condition when unsuccessful. If the user is already friends with the user a HTTP 403 may be returned, though for performance reasons this method may also return a HTTP 200 OK message even if the follow relationship already exists. Actions taken in this method are asynchronous. Changes will be eventually consistent.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_ID",
            "description": "<p>[Required] The ID of the user to follow.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Optional] The screen name of the user to follow.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\":783214,\n  \"screen_name\":\"noradio\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/friendships/create",
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
            "field": "users",
            "description": "<p>The User Required object.</p>"
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
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Array of novas Objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status.nova",
            "description": "<p>nova Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n        user-object,\n        \"status\":{nova-object}\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Friendships"
  },
  {
    "type": "post",
    "url": "/friendships/Destroy",
    "title": "Destroy Friendship (Unfollow)",
    "version": "0.1.0",
    "name": "PostFriendshipsDestroy",
    "group": "Friendships",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/friendships/destroy.json"
      }
    ],
    "description": "<p>AAllows the authenticating user to unfollow the user specified in the ID parameter. Returns the unfollowed user when successful. Returns a string describing the failure condition when unsuccessful. Actions taken in this method are asynchronous. Changes will be eventually consistent.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_ID",
            "description": "<p>[Required] The ID of the user to unfollow.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Optional] The screen name of the user to unfollow.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\":783214,\n  \"screen_name\":\"noradio\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/friendships/destroy.json?user_id=2244994945",
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
            "field": "users",
            "description": "<p>The Unfollowed user object.</p>"
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
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Array of novas Objects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status.nova",
            "description": "<p>nova Object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   {\n        user-object,\n        \"status\":{nova-object}\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Friendships"
  },
  {
    "type": "post",
    "url": "/friendships/update",
    "title": "Friendship Update",
    "version": "0.1.0",
    "name": "PostFriendshipsUpdate",
    "group": "Friendships",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/friendships/friendships/update.json"
      }
    ],
    "description": "<p>Enable or disable device notifications from the specified user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "source_id",
            "description": "<p>[Required] The ID of the user being followed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_screen_name",
            "description": "<p>[Optional] The screen name of the user being followed.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "device",
            "description": "<p>[Optional] Enable/disable device notifications from the target user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"source_id\": 12345,\n  \"source_screen_name\":\"Ennovatedev\",\n  \"device\":true,\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/friendships/update.json?user_id=2244994945&device=true",
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
            "field": "relationship",
            "description": "<p>It shows the current relation between the source and the target.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "relationship.target",
            "description": "<p>The Target Info (id,screen_name,following,followed_by)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationship.target.ID",
            "description": "<p>The target's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship.target.screen_name",
            "description": "<p>The target's screen_name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.target.following",
            "description": "<p>Is The target followed by the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.target.followed_by",
            "description": "<p>Is The target following the source.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "relationship.source",
            "description": "<p>The Source Info (id,screen_name,following,followed_by,notifications_enabled)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "relationship.source.ID",
            "description": "<p>The source's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relationship.source.screen_name",
            "description": "<p>The source's screen_name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.source.following",
            "description": "<p>Is The source followed by the target.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.source.followed_by",
            "description": "<p>Is The source following the target.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "relationship.source.notifications_enabled",
            "description": "<p>Is The source wants to get notifications from the target.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"relationship\": {\n                        \"target\":  {\n                                    \"id\": 2244994945,\n                                    \"screen_name\": \"Ennovatedev\",\n                                    \"following\": true,\n                                    \"followed_by\": true\n                                   },\n                        \"source\":  {\n                                    \"id\": 819797,\n                                    \"screen_name\": \"episod\",\n                                    \"following\": true,\n                                    \"followed_by\": true,\n                                    \"notifications_enabled\": true\n                                    }\n                    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Friendships"
  },
  {
    "type": "get",
    "url": "/notification",
    "title": "Notifications",
    "version": "0.1.0",
    "name": "GetNotification",
    "group": "Notification",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/notification.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/notification.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns the most recent ten notifications for the authenticating user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "notification_object",
            "description": "<p>The User Notifications (Array of notifications).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification_object.renova_list",
            "description": "<p>the renova list notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.renova_list.nova_ID",
            "description": "<p>the renovaed novas IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.renova_list.user_action_ID",
            "description": "<p>the user's ID who done the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notification_object.renova_list.date",
            "description": "<p>Date of the action.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification_object.mention_list",
            "description": "<p>the mention list notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.mention_list.nova_ID",
            "description": "<p>the mention novas IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.mention_list.user_action_ID",
            "description": "<p>the user's ID who done the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notification_object.mention_list.date",
            "description": "<p>Date of the action.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification_object.favorite_list",
            "description": "<p>the favorite list notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.favorite_list.nova_ID",
            "description": "<p>the favorite novas IDs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "notification_object.favorite_list.user_action_ID",
            "description": "<p>the user's ID who done the action</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notification_object.favorite_list.date",
            "description": "<p>Date of the action.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  [\n     notification_object,\n     notification_object,\n     notification_object,\n     notification_object,\n     notification_object,\n     notification_object,\n     notification_object,\n     notification_object,\n     notification_object,\n     notification_object\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/reset_password",
    "title": "reset password",
    "version": "0.1.0",
    "name": "ResetPassword",
    "group": "Reset_Password",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/reset_password"
      }
    ],
    "description": "<p>changes the user with the given token password, return the modified user object and a token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>[Required] The user's new password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"password\":\"kokiwawa\"\n}",
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
            "field": "MinPasswordLengthError",
            "description": "<p>If the user Entered a password less than 8 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MaxPasswordLengthError",
            "description": "<p>If the user Entered a password more than 25 characters long.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordIsRequired",
            "description": "<p>If the user doesn't enter the password value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"password\" length must be at least 8 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"msg\": '\"passsword\" length must be at less than or equal to 25 characters long'\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"msg\": \"\\\"password\\\" is required\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/reset_password?token=$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe",
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
            "field": "user",
            "description": "<p>The modified user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>The modified user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n     \"user\":{user-object},\n     \"token\": \"$2a$05$bvIG6Nmid91Mu9RcmmWZfO5HJIMCT8riNW0hEp8f6/FuA2/mHZFpe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Reset_Password"
  },
  {
    "type": "get",
    "url": "/saved_searches/list",
    "title": "Saved Searches",
    "version": "0.1.0",
    "name": "GetSavedSearches",
    "group": "Saved_searches",
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
            "field": "list",
            "description": "<p>The search result info (created_at ,id ,query,userId).</p>"
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
            "type": "number",
            "optional": false,
            "field": "Search.userId",
            "description": "<p>The user id who made the search.</p>"
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
          "title": "\"list\": [",
          "content": "\"list\": [\n      {\n          \"_id\": \"5cc9bac749ef210da830395f\",\n          \"userId\": \"5cba00939b8b142010867705\",\n          \"query\": \"wael\",\n          \"created_at\": \"2019-05-01T15:27:03.649Z\",\n          \"__v\": 0\n      },\n      {\n          \"_id\": \"5cc9bace49ef210da8303960\",\n          \"userId\": \"5cba00939b8b142010867705\",\n          \"query\": \"avjdsbvd\",\n          \"created_at\": \"2019-05-01T15:27:10.865Z\",\n          \"__v\": 0\n      },\n      {\n          \"_id\": \"5cc9badb49ef210da8303961\",\n          \"userId\": \"5cba00939b8b142010867705\",\n          \"query\": \"maramm\",\n          \"created_at\": \"2019-05-01T15:27:23.996Z\",\n          \"__v\": 0\n      }\n  ]",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Saved_searches"
  },
  {
    "type": "post",
    "url": "/saved_searches/destroy/:id",
    "title": "Delete search using ID",
    "version": "0.1.0",
    "name": "PostDeleteSearchByID",
    "group": "Saved_searches",
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
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "searchIdRequired",
            "description": "<p>if the required serach id was not sent in the header</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoMatchesFound",
            "description": "<p>if the user doesn't have this search and vise verca</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 bad request\n{\n   msg: \"serachId is required.\" \n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n   msg: \"No Matches Found\" \n}",
          "type": "json"
        }
      ]
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
            "field": "deletedsearch",
            "description": "<p>The search result info (created_at ,ID,query,userId).</p>"
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
            "type": "number",
            "optional": false,
            "field": "Search.userId",
            "description": "<p>The user id who made the search.</p>"
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
          "title": "\"deletedsearch\": {",
          "content": "  \"deletedsearch\": {\n    \"_id\": \"5cc9b3afdb6dad40ec8305d8\",\n    \"userId\": \"5cba00939b8b142010867705\",\n    \"query\": \"wael\",\n    \"created_at\": \"2019-05-01T14:56:47.643Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Saved_searches"
  },
  {
    "type": "post",
    "url": "/saved_searches/delete_all",
    "title": "Delete all Searches",
    "version": "0.1.0",
    "name": "PostDeleteSearchesAll",
    "group": "Saved_searches",
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
            "field": "deletedlist",
            "description": "<p>The search result info (created_at ,id,query,userId).</p>"
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
            "field": "Search.query",
            "description": "<p>The search query.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "Search.userId",
            "description": "<p>The user id who made the search.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "\"deletedlist\": [",
          "content": "\"deletedlist\": [\n        {\n            \"_id\": \"5cc9abb75425ba48b4303aab\",\n            \"userId\": \"5cba00939b8b142010867705\",\n            \"query\": \"maramm\",\n            \"created_at\": \"2019-05-01T14:22:47.703Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5cc9abc15425ba48b4303aac\",\n            \"userId\": \"5cba00939b8b142010867705\",\n            \"query\": \"waeeeeel\",\n            \"created_at\": \"2019-05-01T14:22:57.978Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5cc9abd45425ba48b4303aad\",\n            \"userId\": \"5cba00939b8b142010867705\",\n            \"query\": \"wael\",\n            \"created_at\": \"2019-05-01T14:23:16.197Z\",\n            \"__v\": 0\n        }\n    ]",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Saved_searches"
  },
  {
    "type": "get",
    "url": "/statuses/home_timeline",
    "title": "Home Timeline",
    "version": "0.1.0",
    "name": "GetHomeTimeline",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/home_timeline.json"
      }
    ],
    "description": "<p>Returns a collection of the most recent Novas and ReNovas posted by the authenticating user and the users they follow. The home timeline is central to how most users interact with the Nova service.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>[optional]\tSpecifies the number of records to retrieve.  The value of count is best thought of as a limit to the number of Novas to return because suspended or deleted content is removed after the count has been applied.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "exclude_replies",
            "description": "<p>[optional]\tThis parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count Novas — this is because the count parameter retrieves that many Novas before filtering out ReNovas and replies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "include_entities",
            "description": "<p>[optional] The entities node will not be included when set to false.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"Count\": 5,\n  \"exclude_replies\":false,\n  \"include_entities\":false\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/home_timeline.json",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n  {\n     \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n     \"ID\":114749583439036416,\n     \"text\":\"nova Button, Follow Button, and Web Intents\",\n     \"in_reply_to_status_id\":114749583439036416,\n     \"in_reply_to_user_id\":819797,\n     \"in_reply_to_screen_name\":\"Ennovateapi\",\n      \"user\": {\n                 \"ID\": 6253282,\n                 \"name\": \"Ennovate API\",\n                 \"screen_name\": \"Ennovateapi\",\n                 \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                 \"location\": \"San Francisco, CA\",\n                 \"bio\": \"The Real Ennovate API.\",\n                 \"followers_count\": 21,\n                 \"friends_count\": 32,\n                 \"favourites_count\":13,\n                 \"novas_count\":42,\n                 \"profile_background_color\": \"e8f2f7\",\n                 \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                 \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":1585,\n         \"renova_count\":1585,\n         \"favorite_count\":1138,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":[],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[12345 , 76454],\n         \"renovaed_by_IDs\":[ 8437836 ],\n         \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n },\n\n{\n \"created_at\":\"Wed Aug 27 13:09:00 +0000 2008\",\n     \"ID\":114749583439038416,\n     \"text\":\"nova Button, Follow Button, and Web Intents\",\n     \"in_reply_to_status_id\":114749583439038416,\n     \"in_reply_to_user_id\":819897,\n     \"in_reply_to_screen_name\":\"HarryWilliams\",\n      \"user\": {\n                 \"ID\": 6896009,\n                 \"name\": \"Harry Williams\",\n                 \"screen_name\": \"HarryWilliams\",\n                 \"created_at\":\"2012-11-04T14:58:06.157Z\",\n                 \"location\": \"San Francisco, CA\",\n                 \"bio\": \"Just a test\",\n                 \"followers_count\": 95,\n                 \"friends_count\": 82,\n                 \"favourites_count\":7,\n                 \"novas_count\":48,\n                 \"profile_background_color\": \"C0DEED\",\n                 \"profile_background_image_url\":\"https://si0.twimg.com/images/themes/theme1/bg.png\",\n                 \"profile_image_url\":\"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":155,\n         \"renova_count\":158,\n         \"favorite_count\":118,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":[],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[12345 , 76454],\n         \"renovaed_by_IDs\":[ 84376945 ],\n         \"replied_novas_IDs\":[683484 , 7349867 , 398694876]\n\n},\n\n{\n \"created_at\":\"Wed Aug 27 15:00:00 +0000 2008\",\n     \"ID\":819897,\n     \"text\":\"Another Test\",\n     \"in_reply_to_status_id\":819897,\n     \"in_reply_to_user_id\":114749593439038416,\n     \"in_reply_to_screen_name\":\"willSmith\",\n      \"user\": {\n                 \"ID\": 7540760,\n                 \"name\": \"Will Smith\",\n                 \"screen_name\": \"WillSmith\",\n                 \"created_at\":\"2012-11-04T14:49:09.157Z\",\n                 \"location\": \"New York, CA\",\n                 \"bio\": \"TEST\",\n                 \"followers_count\": 13214,\n                 \"friends_count\": 549,\n                 \"favourites_count\":79,\n                 \"novas_count\":486,\n                 \"profile_background_color\": \"C0DEED\",\n                 \"profile_background_image_url\":\"http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg\",\n                 \"profile_image_url\":\"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":5437,\n         \"renova_count\":6467,\n         \"favorite_count\":364,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":[],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[34745 , 57548],\n         \"renovaed_by_IDs\":[ 6548659],\n         \"replied_novas_IDs\":[69796 , 7349867 , 398694876]\n\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses"
  },
  {
    "type": "get",
    "url": "/statuses/lookup",
    "title": "Lookup Nova",
    "version": "0.1.0",
    "name": "GetLookup",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/lookup.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/lookup.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns fully-hydrated Nova objects for up to 100 Novas per request, as specified by comma-separated values passed to the id parameter.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[Required] A comma separated list of Nova IDs, up to 100 are allowed in a single request.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "include_entities",
            "description": "<p>[Optional] The entities node that may appear within embedded statuses will not be included when set to false.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"45354345\",\n  \"include_entities\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n    \"ID\":114749583439036416,\n    \"text\":\"nova Button, Follow Button, and Web Intents\",\n    \"in_reply_to_status_id\":114749583439036416,\n    \"in_reply_to_user_id\":819797,\n    \"in_reply_to_screen_name\":\"Ennovateapi\",\n     \"user\": {\n                \"ID\": 6253282,\n                \"name\": \"Ennovate API\",\n                \"screen_name\": \"Ennovateapi\",\n                \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                \"location\": \"San Francisco, CA\",\n                \"bio\": \"The Real Ennovate API.\",\n                \"followers_count\": 21,\n                \"friends_count\": 32,\n                \"favourites_count\":13,\n                \"novas_count\":42,\n                \"profile_background_color\": \"e8f2f7\",\n                \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                \"default_profile\": fasle,\n                \"default_profile_image\": false\n             },\n        \"reply_count\":1585,\n        \"renova_count\":1585,\n        \"favorite_count\":1138,\n        \"entities\": {\n                        \"hashtags\":[],\n                        \"urls\":[],\n                        \"user_mentions\":[],\n                        \"media\":[]\n                    },\n        \"favorited\":true,\n        \"renovaed\":false,\n        \"favorited_by_IDs\":[12345 , 76454],\n        \"renovaed_by_IDs\":[ 8437836 ],\n        \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/statuses/mentions_timeline",
    "title": "Mentions Timeline",
    "version": "0.1.0",
    "name": "GetMentionsTimeline",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/mentions_timeline.json"
      }
    ],
    "description": "<p>Returns the 20 most recent mentions (Novas containing a users's @screen_name) for the authenticating user. The timeline returned is the equivalent of the one seen when you view your mentions on Nova.com.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>[optional]\tSpecifies the number of records to retrieve.  The value of count is best thought of as a limit to the number of Novas to return because suspended or deleted content is removed after the count has been applied.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "exclude_replies",
            "description": "<p>[optional]\tThis parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count Novas — this is because the count parameter retrieves that many Novas before filtering out ReNovas and replies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "include_entities",
            "description": "<p>[optional] The entities node will not be included when set to false.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n        \n  \"Count\": 5,\n  \"exclude_replies\":true,\n  \"include_entities\":false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n  {\n     \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n     \"ID\":114749583439036416,\n     \"text\":\"nova Button, Follow Button, and Web Intents\",\n     \"in_reply_to_status_id\":114749583439036416,\n     \"in_reply_to_user_id\":819797,\n     \"in_reply_to_screen_name\":\"Ennovateapi\",\n      \"user\": {\n                 \"ID\": 6253282,\n                 \"name\": \"Ennovate API\",\n                 \"screen_name\": \"Ennovateapi\",\n                 \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                 \"location\": \"San Francisco, CA\",\n                 \"bio\": \"The Real Ennovate API.\",\n                 \"followers_count\": 21,\n                 \"friends_count\": 32,\n                 \"favourites_count\":13,\n                 \"novas_count\":42,\n                 \"profile_background_color\": \"e8f2f7\",\n                 \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                 \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":1585,\n         \"renova_count\":1585,\n         \"favorite_count\":1138,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":\n                     [\n                      {\n                           \"name\": \"Jason Costa\",\n                           \"id\": 14927800,\n                           \"screen_name\": \"jasoncosta\"\n                       }\n                     ],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[12345 , 76454],\n         \"renovaed_by_IDs\":[ 8437836 ],\n         \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n },\n\n{\n \"created_at\":\"Wed Aug 27 13:09:00 +0000 2008\",\n     \"ID\":114749583439038416,\n     \"text\":\"nova Button, Follow Button, and Web Intents\",\n     \"in_reply_to_status_id\":114749583439038416,\n     \"in_reply_to_user_id\":819897,\n     \"in_reply_to_screen_name\":\"HarryWilliams\",\n      \"user\": {\n                 \"ID\": 6896009,\n                 \"name\": \"Harry Williams\",\n                 \"screen_name\": \"HarryWilliams\",\n                 \"created_at\":\"2012-11-04T14:58:06.157Z\",\n                 \"location\": \"San Francisco, CA\",\n                 \"bio\": \"Just a test\",\n                 \"followers_count\": 95,\n                 \"friends_count\": 82,\n                 \"favourites_count\":7,\n                 \"novas_count\":48,\n                 \"profile_background_color\": \"C0DEED\",\n                 \"profile_background_image_url\":\"https://si0.twimg.com/images/themes/theme1/bg.png\",\n                 \"profile_image_url\":\"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":155,\n         \"renova_count\":158,\n         \"favorite_count\":118,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":\n                         [\n                          {\n                           \"name\": \"Jason Costa\",\n                           \"id\": 14927800,\n                           \"screen_name\": \"jasoncosta\"\n                          },  \n                          {\n                           \"name\": \"Matt Harris\",\n                           \"id\": 777925,\n                           \"screen_name\": \"themattharris\"\n                          },\n                          {\n                           \"name\": \"ThinkWall\",        \n                           \"id\": 117426578,\n                           \"screen_name\": \"thinkwall\"\n                           }\n                          ],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[12345 , 76454],\n         \"renovaed_by_IDs\":[ 84376945 ],\n         \"replied_novas_IDs\":[683484 , 7349867 , 398694876]\n\n},\n\n{\n \"created_at\":\"Wed Aug 27 15:00:00 +0000 2008\",\n     \"ID\":819897,\n     \"text\":\"Another Test\",\n     \"in_reply_to_status_id\":819897,\n     \"in_reply_to_user_id\":114749593439038416,\n     \"in_reply_to_screen_name\":\"willSmith\",\n      \"user\": {\n                 \"ID\": 7540760,\n                 \"name\": \"Will Smith\",\n                 \"screen_name\": \"WillSmith\",\n                 \"created_at\":\"2012-11-04T14:49:09.157Z\",\n                 \"location\": \"New York, CA\",\n                 \"bio\": \"TEST\",\n                 \"followers_count\": 13214,\n                 \"friends_count\": 549,\n                 \"favourites_count\":79,\n                 \"novas_count\":486,\n                 \"profile_background_color\": \"C0DEED\",\n                 \"profile_background_image_url\":\"http://a0.twimg.com/profile_images/730275945/oauth-dancer_normal.jpg\",\n                 \"profile_image_url\":\"https://si0.twimg.com/profile_images/1270234259/raffi-headshot-casual_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":5437,\n         \"renova_count\":6467,\n         \"favorite_count\":364,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":\n                         [ \n                          {                           \n                          \"name\": \"Jason Costa\",\n                           \"id\": 14927800,\n                           \"screen_name\": \"jasoncosta\"\n                          }\n                         ],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[34745 , 57548],\n         \"renovaed_by_IDs\":[ 6548659],\n         \"replied_novas_IDs\":[69796 , 7349867 , 398694876]\n\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses"
  },
  {
    "type": "get",
    "url": "statuses/renovas_of_me",
    "title": "My Renovas",
    "version": "0.1.0",
    "name": "GetMyRenovas",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/statuses/renovas_of_me.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns the most recent Novas authored by the authenticating user that have been renovad by others. This timeline is a subset of the user's GET statuses / user_timeline.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "count",
            "description": "<p>[optional] Specifies the number of records to retrieve. Must be less than or equal to 100. If omitted, 20 will be assumed.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "include_entities",
            "description": "<p>[optional] The nova entities node will not be included when set to false .</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "include_user_entities",
            "description": "<p>[optional] The user entities node will not be included when set to false .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n  \"count\": \"50\",\n  \"include_entities\":\"false\",\n  \"include_user_entities\":\"true\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "novaObject",
            "description": "<p>The nova Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nova.entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nova.entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "nova.favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "nova.renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n     {nova-Object},{nova-Object}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses"
  },
  {
    "type": "get",
    "url": "/statuses/show",
    "title": "Show Nova",
    "version": "0.1.0",
    "name": "GetNova",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/show.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/statuses/show.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns a single Nova, specified by the id parameter.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[Required] The numerical ID of the desired Nova.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "include_my_reNova",
            "description": "<p>[Optional] When set to either true , t or 1 , any Novas returned that have been reNovad by the authenticating user will include an additional current_user_reNova node, containing the ID of the source status for the reNova.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "include_entities",
            "description": "<p>[Optional] The entities node will not be included when set to false.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"45354345\",\n  \"include_my_reNova\":\"t\",\n  \"include_entities \":\"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n    \"ID\":114749583439036416,\n    \"text\":\"nova Button, Follow Button, and Web Intents\",\n    \"in_reply_to_status_id\":114749583439036416,\n    \"in_reply_to_user_id\":819797,\n    \"in_reply_to_screen_name\":\"Ennovateapi\",\n     \"user\": {\n                \"ID\": 6253282,\n                \"name\": \"Ennovate API\",\n                \"screen_name\": \"Ennovateapi\",\n                \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                \"location\": \"San Francisco, CA\",\n                \"bio\": \"The Real Ennovate API.\",\n                \"followers_count\": 21,\n                \"friends_count\": 32,\n                \"favourites_count\":13,\n                \"novas_count\":42,\n                \"profile_background_color\": \"e8f2f7\",\n                \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                \"default_profile\": fasle,\n                \"default_profile_image\": false\n             },\n        \"reply_count\":1585,\n        \"renova_count\":1585,\n        \"favorite_count\":1138,\n        \"entities\": {\n                        \"hashtags\":[],\n                        \"urls\":[],\n                        \"user_mentions\":[],\n                        \"media\":[]\n                    },\n        \"favorited\":true,\n        \"renovaed\":false,\n        \"favorited_by_IDs\":[12345 , 76454],\n        \"renovaed_by_IDs\":[ 8437836 ],\n        \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/statuses/reNovars",
    "title": "Renovars",
    "version": "0.1.0",
    "name": "GetRenovars",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/reNovars.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/reNovars.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns a collection of user IDs belonging to users who have reNovad the Nova specified by the id parameter.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[Required] The numerical ID of the desired status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>[Optional] Specifies the number of records to retrieve.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"34930345\",\n  \"count\":\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>of reNovars.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n   \"ids\":[\n                        455974794,\n                        947576438684872705,\n                        850839346009780224,\n                        958850376630910976,\n                        889483959943536640,\n                        966094285119606784,\n                        1020583045,\n                        948604640811212801,\n                        967155179614240768,\n                        554514802,\n                        14873932,\n                        963916668731904000,\n                        970763391181746178,\n                        966091392631140358,\n                        .\n                        .\n                        .\n                        5000 ids later,\n                        .\n                        .\n                        .\n                        813143846,\n                        958604886735716353,\n                        402873729,\n                        958603486551330817,\n                        913076424897994753,\n                        820967329068707840,\n                        958593574932762624,\n                        958589381102665728,\n                        958573223737724929,\n                        889474485694410752\n                ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses"
  },
  {
    "type": "get",
    "url": "/statuses/renovas/:id",
    "title": "Renova",
    "version": "0.1.0",
    "name": "GetRenovas",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/statuses/renovas/256321242121.json",
        "type": "json"
      }
    ],
    "description": "<p>Returns a collection of the 100 most recent renovas of the Nova specified by the id parameter.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>[Required] The numerical Id of the desired status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>[Optional] Specifies the number of records to retrieve. Must be less than or equal to 100. default value is 100.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n  \"Id\": \"256321242121\",\n  \"count\":\"50\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "novaObject",
            "description": "<p>The nova Object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nova.entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "nova.entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nova.entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nova.entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nova.entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "nova.favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "nova.renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "nova.replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n     {nova-Object},{nova-Object}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses"
  },
  {
    "type": "get",
    "url": "/statuses/User_timeline",
    "title": "User Timeline",
    "version": "0.1.0",
    "name": "GetUserTimeline",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/User_timeline.json"
      }
    ],
    "description": "<p>Returns a collection of the most recent Novas posted by the user indicated by the screen_name or user_id parameters The timeline returned is the equivalent of the one seen as a user's profile on  Nova.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>[optional]\tThe ID of the user for whom to    return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[optional]\tThe screen name of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>[optional]\tSpecifies the number of Novas  to try and retrieve. The value of count is best thought of as a limit to the number of Novas to return because suspended or deleted content is removed after the count has been applied.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "exclude_replies",
            "description": "<p>[optional]\tThis parameter will prevent replies from appearing in the returned timeline. Using exclude_replies with the count parameter will mean you will receive up-to count Novas — this is because the count parameter retrieves that many Novas before filtering out ReNovas and replies.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n  \"User_id\":12345,\n  \"Screen_name\":nordia,        \n  \"Count\": 5,\n  \"exclude_replies\":true\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/User_timeline.json",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "renovaed_status",
            "description": "<p>nova that has been renovaed by the authenticating user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "[\n  {\n     \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n     \"ID\":114749583439036416,\n     \"text\":\"nova Button, Follow Button, and Web Intents\",\n     \"in_reply_to_status_id\":null,\n     \"in_reply_to_user_id\":null,\n     \"in_reply_to_screen_name\":\"Ennovateapi\",\n      \"user\": {\n                 \"ID\": 6253282,\n                 \"name\": \"Ennovate API\",\n                 \"screen_name\": \"Ennovateapi\",\n                 \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                 \"location\": \"San Francisco, CA\",\n                 \"bio\": \"The Real Ennovate API.\",\n                 \"followers_count\": 21,\n                 \"friends_count\": 32,\n                 \"favourites_count\":13,\n                 \"novas_count\":42,\n                 \"profile_background_color\": \"e8f2f7\",\n                 \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                 \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":1585,\n         \"renova_count\":1585,\n         \"favorite_count\":1138,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":[],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[12345 , 76454],\n         \"renovaed_by_IDs\":[ 8437836 ],\n         \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n },\n {\n     \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n     \"ID\":114749583439036416,\n     \"text\":\"nova Button, Follow Button, and Web Intents\",\n     \"in_reply_to_status_id\":null,\n     \"in_reply_to_user_id\":null,\n     \"in_reply_to_screen_name\":\"Ennovateapi\",\n      \"user\": {\n                 \"ID\": 6253282,\n                 \"name\": \"Ennovate API\",\n                 \"screen_name\": \"Ennovateapi\",\n                 \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                 \"location\": \"San Francisco, CA\",\n                 \"bio\": \"The Real Ennovate API.\",\n                 \"followers_count\": 21,\n                 \"friends_count\": 32,\n                 \"favourites_count\":13,\n                 \"novas_count\":42,\n                 \"profile_background_color\": \"e8f2f7\",\n                 \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                 \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":1585,\n         \"renova_count\":1585,\n         \"favorite_count\":1138,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":[],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[12345 , 76454],\n         \"renovaed_by_IDs\":[ 8437836 ],\n         \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n },\n {\n     \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n     \"ID\":114749583439036416,\n     \"text\":\"Another Nova\",\n     \"in_reply_to_status_id\":114749583439036416,\n     \"in_reply_to_user_id\":3683925,\n     \"in_reply_to_screen_name\":\"Ennovateapi\",\n      \"user\": {\n                 \"ID\": 6253282,\n                 \"name\": \"Ennovate API\",\n                 \"screen_name\": \"Ennovateapi\",\n                 \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                 \"location\": \"San Francisco, CA\",\n                 \"bio\": \"The Real Ennovate API.\",\n                 \"followers_count\": 21,\n                 \"friends_count\": 32,\n                 \"favourites_count\":13,\n                 \"novas_count\":42,\n                 \"profile_background_color\": \"e8f2f7\",\n                 \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                 \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                 \"default_profile\": fasle,\n                 \"default_profile_image\": false\n              },\n         \"reply_count\":1585,\n         \"renova_count\":1585,\n         \"favorite_count\":1138,\n         \"entities\": {\n                         \"hashtags\":[],\n                         \"urls\":[],\n                         \"user_mentions\":[],\n                         \"media\":[]\n                     },\n         \"favorited\":true,\n         \"renovaed\":false,\n         \"favorited_by_IDs\":[12345 , 76454],\n         \"renovaed_by_IDs\":[ 8437836 ],\n         \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses"
  },
  {
    "type": "post",
    "url": "/statuses/destroy",
    "title": "Destroy id",
    "version": "0.1.0",
    "name": "PostDestroy",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/Destroy.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/destroy.json",
        "type": "json"
      }
    ],
    "description": "<p>Destroys the status specified by the required ID parameter. The authenticating user must be the author of the specified status. Returns the destroyed status if successful.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[Required] The numerical ID of the desired status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"45354345\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n    \"ID\":114749583439036416,\n    \"text\":\"nova Button, Follow Button, and Web Intents\",\n    \"in_reply_to_status_id\":114749583439036416,\n    \"in_reply_to_user_id\":819797,\n    \"in_reply_to_screen_name\":\"Ennovateapi\",\n     \"user\": {\n                \"ID\": 6253282,\n                \"name\": \"Ennovate API\",\n                \"screen_name\": \"Ennovateapi\",\n                \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                \"location\": \"San Francisco, CA\",\n                \"bio\": \"The Real Ennovate API.\",\n                \"followers_count\": 21,\n                \"friends_count\": 32,\n                \"favourites_count\":13,\n                \"novas_count\":42,\n                \"profile_background_color\": \"e8f2f7\",\n                \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                \"default_profile\": fasle,\n                \"default_profile_image\": false\n             },\n        \"reply_count\":1585,\n        \"renova_count\":1585,\n        \"favorite_count\":1138,\n        \"entities\": {\n                        \"hashtags\":[],\n                        \"urls\":[],\n                        \"user_mentions\":[],\n                        \"media\":[]\n                    },\n        \"favorited\":true,\n        \"renovaed\":false,\n        \"favorited_by_IDs\":[12345 , 76454],\n        \"renovaed_by_IDs\":[ 8437836 ],\n        \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/statuses/reNova",
    "title": "Renova",
    "version": "0.1.0",
    "name": "PostRenova",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/reNova.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/reNova.json",
        "type": "json"
      }
    ],
    "description": "<p>ReNovas a Nova.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[Required] The numerical ID of the desired status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"34930345\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n    \"ID\":114749583439036416,\n    \"text\":\"nova Button, Follow Button, and Web Intents\",\n    \"in_reply_to_status_id\":114749583439036416,\n    \"in_reply_to_user_id\":819797,\n    \"in_reply_to_screen_name\":\"Ennovateapi\",\n     \"user\": {\n                \"ID\": 6253282,\n                \"name\": \"Ennovate API\",\n                \"screen_name\": \"Ennovateapi\",\n                \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                \"location\": \"San Francisco, CA\",\n                \"bio\": \"The Real Ennovate API.\",\n                \"followers_count\": 21,\n                \"friends_count\": 32,\n                \"favourites_count\":13,\n                \"novas_count\":42,\n                \"profile_background_color\": \"e8f2f7\",\n                \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                \"default_profile\": fasle,\n                \"default_profile_image\": false\n             },\n        \"reply_count\":1585,\n        \"renova_count\":1585,\n        \"favorite_count\":1138,\n        \"entities\": {\n                        \"hashtags\":[],\n                        \"urls\":[],\n                        \"user_mentions\":[],\n                        \"media\":[]\n                    },\n        \"favorited\":true,\n        \"renovaed\":false,\n        \"favorited_by_IDs\":[12345 , 76454],\n        \"renovaed_by_IDs\":[ 8437836 ],\n        \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/statuses/unrenova/:id",
    "title": "UnReNova",
    "version": "0.1.0",
    "name": "PostUnrenova",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/unrenova/:id.json"
      }
    ],
    "description": "<p>unNovas a novad status. returns the original nova with renova details embedded</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>[required]  the numerical ID of the desired status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":12345\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/unrenova.json",
        "type": "json"
      }
    ],
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n    \"ID\":114749583439036416,\n    \"text\":\"nova Button, Follow Button, and Web Intents\",\n    \"in_reply_to_status_id\":114749583439036416,\n    \"in_reply_to_user_id\":819797,\n    \"in_reply_to_screen_name\":\"Ennovateapi\",\n     \"user\": {\n                \"ID\": 6253282,\n                \"name\": \"Ennovate API\",\n                \"screen_name\": \"Ennovateapi\",\n                \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                \"location\": \"San Francisco, CA\",\n                \"bio\": \"The Real Ennovate API.\",\n                \"followers_count\": 21,\n                \"friends_count\": 32,\n                \"favourites_count\":13,\n                \"novas_count\":42,\n                \"profile_background_color\": \"e8f2f7\",\n                \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                \"default_profile\": fasle,\n                \"default_profile_image\": false\n             },\n        \"reply_count\":1585,\n        \"renova_count\":1585,\n        \"favorite_count\":1138,\n        \"entities\": {\n                        \"hashtags\":[],\n                        \"urls\":[],\n                        \"user_mentions\":[],\n                        \"media\":[]\n                    },\n        \"favorited\":true,\n        \"renovaed\":false,\n        \"favorited_by_IDs\":[12345 , 76454],\n        \"renovaed_by_IDs\":[ 8437836 ],\n        \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/statuses/update",
    "title": "Update Novas",
    "version": "0.1.0",
    "name": "PostUpdate",
    "group": "Statuses",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/statuses/update.json"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST localhost:3000/statuses/update.json",
        "type": "json"
      }
    ],
    "description": "<p>Updates the authenticating user's current status, also known as Novating. If the number of updates posted by the user reaches the current allowed limit this method will return an HTTP 403 error.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>[Required] The text of the status update.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] The ID of an existing status that the update is in reply to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "media_ids",
            "description": "<p>[Optional] A media_id to associate with the Nova. You may include 1 photo or 1 animated GIF or 1 video in a Nova.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>[Optional] A place in the world.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "display_coordinates",
            "description": "<p>[Optional] Whether or not to put a pin on the exact coordinates a Nova has been sent from.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": \"This is my first Nova\",\n  \"in_reply_to_status_id\":\"455974794\",\n  \"media_ids\":\"14873932\",\n  \"place_id\":\"273468723\",\n  \"display_coordinates\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "Statuses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>UTC time when this nova was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>The integer representation of the unique identifier for this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The actual UTF-8 text of the status update.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_status_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "in_reply_to_user_id",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the integer representation of the original nova’s author ID. This will not necessarily always be the user directly mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "in_reply_to_screen_name",
            "description": "<p>[Nullable] If the represented nova is a reply, this field will contain the screen name of the original nova’s author.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user who posted this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>Number of times this nova has been replied to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "renova_count",
            "description": "<p>Number of times this nova has been renovaed.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite_count",
            "description": "<p>[Nullable] Indicates approximately how many times this nova has been liked by Ennovate users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject",
            "description": "<p>Entities which have been parsed out of the text of the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.hashtags",
            "description": "<p>[Nullable] Array of Hastags in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "entitiesObject.urls",
            "description": "<p>[Nullable] Array of URLs in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "entitiesObject.users_mentions_ID",
            "description": "<p>[Nullabe] Array of Users' IDs whom are mentioned in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entitiesObject.media",
            "description": "<p>[Nullable] The Media Included in the nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.type",
            "description": "<p>The media type or format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entitiesObject.media.size",
            "description": "<p>The size of this file in KBs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entitiesObject.media.url",
            "description": "<p>The Media's URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorited",
            "description": "<p>[Nullable] Indicates whether this nova has been liked by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "renovaed",
            "description": "<p>Indicates whether this nova has been Renovaed by the authenticating user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "favorited_by_IDs",
            "description": "<p>Array of Users' IDs whom favorite this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "renovaed_by_IDs",
            "description": "<p>Array of Users' IDs whom renovaed this nova.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "replied_novas_IDs",
            "description": "<p>Array of novas' IDs whom replied to this nova.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"created_at\":\"Wed Aug 27 13:08:45 +0000 2008\",\n    \"ID\":114749583439036416,\n    \"text\":\"nova Button, Follow Button, and Web Intents\",\n    \"in_reply_to_status_id\":114749583439036416,\n    \"in_reply_to_user_id\":819797,\n    \"in_reply_to_screen_name\":\"Ennovateapi\",\n     \"user\": {\n                \"ID\": 6253282,\n                \"name\": \"Ennovate API\",\n                \"screen_name\": \"Ennovateapi\",\n                \"created_at\":\"2012-11-04T14:51:06.157Z\",\n                \"location\": \"San Francisco, CA\",\n                \"bio\": \"The Real Ennovate API.\",\n                \"followers_count\": 21,\n                \"friends_count\": 32,\n                \"favourites_count\":13,\n                \"novas_count\":42,\n                \"profile_background_color\": \"e8f2f7\",\n                \"profile_background_image_url\":\"http://a2.twimg.com/profile_background_images/229557229/Ennovateapi-bg.png\",\n                \"profile_image_url\":\"http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png\",\n                \"default_profile\": fasle,\n                \"default_profile_image\": false\n             },\n        \"reply_count\":1585,\n        \"renova_count\":1585,\n        \"favorite_count\":1138,\n        \"entities\": {\n                        \"hashtags\":[],\n                        \"urls\":[],\n                        \"user_mentions\":[],\n                        \"media\":[]\n                    },\n        \"favorited\":true,\n        \"renovaed\":false,\n        \"favorited_by_IDs\":[12345 , 76454],\n        \"renovaed_by_IDs\":[ 8437836 ],\n        \"replied_novas_IDs\":[217361273 , 732456254 , 83217437]\n}",
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
        "content": "GET localhost:3000/users/profile_banner.json?screen_name=Ennovateapi",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_id\": 12345,\n  \"screen_name\":\"noradio\"\n}",
          "type": "json"
        }
      ]
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
    "filename": "./Ennovate.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/lookup",
    "title": "Lookups",
    "version": "0.1.0",
    "name": "GetUsersLookup",
    "group": "User",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/users/lookup.json"
      }
    ],
    "description": "<p>Returns fully-hydrated user objects for up to 100 users per request, as specified by comma-separated values passed to the user_id and/or screen_name parameters. This method is especially useful when used in conjunction with collections of user IDs returned from GET friends / ids and GET followers / ids. GET users / show is used to retrieve a single user object. There are a few things to note when using this method. The order of user IDs or screen names may not match the order of users in the returned array. If a requested user is unknown, suspended, or deleted, then that user will not be returned in the results list. If none of your lookup criteria can be satisfied by returning a user object, a HTTP 404 will be thrown. You are strongly encouraged to use a POST for larger requests.</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoUsersFound",
            "description": "<p>If the user has not uploaded a profile banner</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoUsersFound\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "user_ID",
            "description": "<p>[Required] The ID of the user for whom to return results.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Optional] The screen name of the user for whom to return results.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\": [\n                 783214,\n                 6253282\n             ],\n  \"screen_name\":[\n                 \"noradio\"\n                ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/users/lookup.json?user_id=783214,6253282",
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
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n     \"users\":[\n                 {user-object},\n                 {user-object}\n             ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/search",
    "title": "Search",
    "version": "0.1.0",
    "name": "GetUsersSearch",
    "group": "User",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/users/search.json"
      }
    ],
    "description": "<p>Provides a simple, relevance-based search interface to public user accounts on Ennovate. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported. Only the first 1,000 matching results are available.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>[Required] The search query to run against people search.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"q\":\"Ennovate%20API\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/users/search.json?q=soccer",
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
            "description": "<p>The Users matching objects.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n     \"users\":[\n                 {user-object},\n                 {user-object}\n             ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/search",
    "title": "Search",
    "version": "0.1.0",
    "name": "GetUsersSearch",
    "group": "User",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/users/search.json"
      }
    ],
    "description": "<p>Provides a simple, relevance-based search interface to public user accounts on Ennovate. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported. Only the first 1,000 matching results are available.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>[Required] The search query to run against people search.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"q\":\"Ennovate%20API\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/users/search.json?q=soccer",
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
            "description": "<p>The Users matching objects.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": " {\n     \"users\":[\n                 {user-object},\n                 {user-object}\n             ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/show",
    "title": "Show",
    "version": "0.1.0",
    "name": "GetUsersShow",
    "group": "User",
    "permission": [
      {
        "name": "private",
        "title": "User access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission. To be modified later</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "localhost:3000/users/show.json"
      }
    ],
    "description": "<p>Returns a variety of information about the user specified by the required user_id or screen_name parameter. The author's most recent nova will be returned inline when possible. GET users / lookup is used to retrieve a bulk collection of user objects.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_ID",
            "description": "<p>[Required] The ID of the specified user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screen_name",
            "description": "<p>[Required] The screen name of the specified user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user_ID\":783214,\n  \"screen_name\":\"noradio\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET localhost:3000/users/show.json?screen_name=Ennovatedev",
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
            "field": "users",
            "description": "<p>The User Required object.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "content": "{user-object}",
          "type": "user-object"
        }
      ]
    },
    "filename": "./Ennovate.js",
    "groupTitle": "User"
  }
] });
