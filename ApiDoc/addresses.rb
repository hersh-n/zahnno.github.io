################# ADD ADDRESS TO ADDRESS BOOK ################

=begin

@apiGroup Addresses

@api {post} localhost:8000/api/addresses.json Add Address To Address Book

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
  	{"address": { "firstname": "Spree", "lastname": "Commerce", "address1": "1 Someplace Lane", "address2": "Suite 1", "city": "Bethesda", "zipcode": "l6p1v9", "phone": "123.4567.890", "state_name": "Alaska", "company": null, "alternative_phone": null, "country_id": 38, "state_id": 4200 } }

@apiSuccess (Success: 200) {Object} Address @address

=end


################# REMOVE ADDRESS FROM ADDRESS BOOK ################

=begin

@apiGroup Addresses

@api {delete} localhost:8000/api/addresses/:id.json Remove Address From Address Book

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiSuccessExample Success-Response: 
 	Status: 200
 	{"message":"Address has been successfully deleted"}

=end

################# GET ADDRESS NAME ################

=begin

@apiGroup Addresses

@api {get} localhost:8000/api/addresses/:id.json Get Address

@apiHeaderExample Header-Example: 
    X-Spree-Token : {{user_token}}
        
@apiSuccess (Success: 200) {Object} Address @address

=end

################# UPDATE ADDRESS ################

=begin

@apiGroup Addresses

@api {put} localhost:8000/api/addresses/12.json Update Address

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
	{"address": { "address1": "11 Someplace Lane" } }

@apiSuccess (Success: 200) {Object} Address @address

@apiErrorExample Error-Response:
	Status: 422
	{"Message" : "Failed to update address"}

=end

################# SET PREFERRED ADDRESS ################

=begin

@apiGroup Addresses

@api {post} localhost:8000/api/v1/set_preferred_address.json Set Preferred Address

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
	{"id" : 1}

@apiSuccessExample Success-Response: 
 	Status: 200
 	{"message":"Address has been successfully deleted"}

=end

################# GET PREFERRED ADDRESS ################

=begin

@apiGroup Addresses

@api {get} localhost:8000/api/v1/get_preferred_address.json Get Preferred Address

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiSuccess (Success: 200) {Object} Address @address

=end

################# CLEAR PREFERRED ADDRESS ################

=begin

@apiGroup Addresses

@api {post} localhost:8000/api/v1/clear_preferred_address.json Clear Preferred Address

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiSuccessExample Success-Response: 
 	Status: 200
 	{"message":"Default address cleared"}

=end

################# VIEW ADDRESS BOOK ################

=begin

@apiGroup Addresses

@api {get} localhost:8000/api/v1/addresses.json View Address Book

@apiHeaderExample Header-Example: 
  	X-Spree-Token : {{user_token}}

@apiSuccess (Success: 200) {Object} Address @address

=end
