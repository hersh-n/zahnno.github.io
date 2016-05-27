################# GET/CREATE SOCIAL USER ######################

=begin

@apiGroup Users

@api {post} localhost:8000/:provider Get/Create Social User

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{admin_token}}

@apiHeaderExample Body-Example:
	{"user" :{"email":"DamnDaniel@gmail.com", "provider":"Facebook", "username":"Daniel"}}

@apiSuccess (Success: 200) {Object} User @users

@apiErrorExample Error-Response:
	Status: 422
	{"message":"Could not Create or find User"}

	
=end

################# GET USERS ######################

=begin

@apiGroup Users

@api {get} localhost:8000/api/users Get Users

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{admin_token}}

@apiSuccess (Success: 200) {Object} User @users
	
=end

################# GET USER ######################

=begin

@apiGroup Users

@api {get} localhost:8000/api/users/:id Get User

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{admin_token}}

@apiSuccess (Success: 200) {Object} User @user
	
=end

################# CLAIM GUEST ACCOUNT ################

=begin

@apiGroup Users

@api {put} localhost:8000/api/users/:id/claim_guest_account.json Claim Guest Account

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
  	{ "user": {"password":"spree123", "password_confirmation":"spree123"}}

@apiSuccess (Success: 200) {Object} User @users

@apiErrorExample Error-Response:
	Status: 422
	{ message: "Looks like you already have an account."}
	{ message: "You cannot claim your account without an email."}
	
=end

################# UPDATE PASSWORD ################

=begin

@apiGroup Users

@api {put} localhost:8000/users/update_password.json Update Password

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
  	{"id":"update_password", "user": { "password":"spree123", "password_confirmation":"spree123"}, "check_password": { "password": "spree123" } }

@apiSuccess (Success: 200) {Object} User @user

@apiErrorExample Error-Response:
	Status: 422

=end

################# FORGOT PASSWORD - SEND EMAIL ################

=begin

@apiGroup Users

@api {post} localhost:8000/password/recover.json Forgot Password - Send Email

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{admin_token}}

@apiHeaderExample Body-Example:
	{"spree_user": {"email": "spree@example.com"}}

@apiSuccessExample Success-Response: 
 	Status: 200
 	{"message":"Success"}

@apiErrorExample Error-Response:
	Status: 422

=end

################# FORGOT PASSWORD - CHANGE PASSWORD ################

=begin

@apiGroup Users

@api {patch} localhost:8000/user/spree_user/password Forgot Password - Change Password

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{admin_token}}

@apiHeaderExample Body-Example:
	{"spree_user": {"password": "spree", "password_confirmation": "spree", "reset_password_token": "tUC_sMAtWKQzDj4ucnyd"}}

@apiSuccessExample Success-Response: 
 	Status: 201
 	{"message":"Success"}

@apiErrorExample Error-Response:
	Status: 403

=end

################# UPDATE NEED STATE ################

=begin

@apiGroup Users

@api {put} localhost:8000/users/:id  Update Need State

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
	{"user": {"need_state_id": 19}}

@apiSuccess (Success: 200) {Object} User @user

=end


############### GUEST SIGNUP ####################

=begin

@apiGroup Users

@api {put} localhost:8000/api/users/:id/guest_user_signup  Guest Signup

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{guest user spree_api_token}}

@apiHeaderExample Body-Example:
	{"user": {"need_state_id": 19}}

@apiSuccess (Success: 201) {Object} User @user

@apiErrorExample Error-Response:
	Status: 422
	{ "message": "Your email already exist or email/password was empty" }

=end

################ LOGIN ##################

=begin

@apiGroup Users

@apiDescription 

1) General login

	When a user signs into the site before adding to cart. This the described below.

2) Guest login

	When a user adds to cart as a guest user and decides to login before checkout. This situation, will require a slightly different login process. To use this login method, follow the steps for general login and add the guest user token in the header of the request e.g X-Spree-Token : {{random token}}


The "registered" attribute can be used to determine if a user is a guest user and a registered user. If registered is "true" this means that the user is a registered user. "false" = guest user.

@api {post} localhost:8000/user/spree_user/sign_in.json Login

@apiHeaderExample Body-Example:
	{"spree_user": {"email": "xyz@gmail.com", "password": "123456"}}

@apiSuccess (Success: 200) {Object} User { "id": 5, "email": "1234@gmail.com", "persistence_token": null, "perishable_token": null, "last_request_at": null, "login": "12234@gmail.com", "ship_address_id": null, "bill_address_id": null, "authentication_token": null, "created_at": "2016-02-04T20:17:47.510Z", "updated_at": "2016-02-08T15:40:40.907Z", "spree_api_key": "a55ea0761091bbef075c0c676ba46c0e5a1d183e6f86956e", "deleted_at": null, "last_token_use": "2016-02-08T15:40:40.905Z", "newsletter": false, "registered": true }

@apiErrorExample Error-Response:
	Status: 422
	{ "message": "Your email already exist or email/password was empty" }

=end

############### LOGOUT ####################

=begin

@apiGroup Users

@api {get} localhost:8000/user/spree_user/logout.json  Logout

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiSuccessExample Success-Response: 
 	Status: 200

@apiErrorExample Error-Response:
	Status: 403

=end

############### SIGNUP ####################

=begin

@apiGroup Users

@api {post} localhost:8000/api/users.json  Signup

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{admin_token}}

@apiHeaderExample Body-Example:
	{"spree_user": {"email": "xyz@gmail.com", "password": "123456", "name": "John Doe"}}

@apiSuccess (Success: 200) {Object} User @user { "id": 9, "email": "xyz@gmail.com", "created_at": "2016-02-08T15:49:25.869Z", "updated_at": "2016-02-08T15:49:25.891Z", "spree_api_key": "157a0c1e8e03a56dbd150611b69ce7385e890f2ee07bbdbb", "bill_address": null, "ship_address": null, name: "John Doe" }

@apiErrorExample Error-Response:
	Status: 403

=end


############### CREATE NEW USER ####################

=begin

@apiGroup Users

@apiDescription 

Note

The guest user is excluded from the 15min token check and will not be timed out as a result. To test this, create a new guest user and check order history of that user after 15 mins. The user shouldn't be timed out at this point.

@api {post} localhost:80000/api/users.json Create User

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{admin_token}}

@apiHeaderExample Body-Example:
	{"user": {"password": "temppwd", "email": "lilwayne@example.com", "username": "zapper", "phone": "6476544567"}}

@apiSuccess (Success: 201) {Object} User @user { "id": 5, "email": null, "created_at": "2016-02-08T20:03:39.206Z", "updated_at": "2016-02-08T20:03:39.215Z", "spree_api_key": "7f4303d8e835e4a47e77a04af2793443fe5e0bebfd44b873", "bill_address": null, "ship_address": null, "username": null, "phone": null}

@apiErrorExample Error-Response:
	Status: 403

=end



############### UPDATE A USER ####################

=begin

@apiGroup Users

@api {put} localhost:8000/api/users/:id Update User Account

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
	{"user": { "email": "lilwayne@example.com", "need_state_id": 1 } }

@apiSuccess (Success: 201) {Object} User @user { "id": 5, "email": null, "created_at": "2016-02-08T20:03:39.206Z", "updated_at": "2016-02-08T20:03:39.215Z", "spree_api_key": "7f4303d8e835e4a47e77a04af2793443fe5e0bebfd44b873", "bill_address": null, "ship_address": null, "username": null, "phone": null}

=end



