
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

############### SIGNUP ####################

=begin

@apiGroup Users

@api {post} localhost:8000/api/users.json  Signup

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{admin_token}}

@apiHeaderExample Body-Example:
	{"spree_user": {"email": "xyz@gmail.com", "password": "123456"}}

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




