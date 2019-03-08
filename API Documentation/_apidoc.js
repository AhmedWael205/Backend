// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------

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
 * @apiDefinePermission private User access rights needed.
 * Optionally you can write here further Informations about the permission.
 *
 * An "apiDefinePermission"-block can have an "apiVersion", so you can attach the block to a specific version.
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
