######### Saved Payments ##########

######### Create a Saved Payment ##########

=begin

@apiGroup Payments

@apiDescription 

General Notes

Preferred cards are assigned as follows:
-	The last card used during checkout will be set to preferred
-	If the user has not checkout out yet but has existing cards, the preferred card will be the card most recently added

Account Management
- Saved Payments created for account management will use AuthroizeNetCim. The first card that is created will create a Customer Profile and a Payment Profile. All cards created after this will use the same Customer Profile and will have a new Payment Profile created.


@api {post} localhost:8000/api/v1/credit_card Create a Credit Card/Payment Profile

@apiParamExample {json} Request-Example:

{ "credit_card": {
    "number": "4111111111111111",
    "month": "2",
    "year": "2021",
    "verification_value": "212",
    "name": "John Smith",
    "cc_type": "VISA",
    "payment_method_id": 3
    },
    "address": {
      "firstname": "Spree",
      "lastname": "Commerce",
      "address1": "12 Someplace Lane",
      "address2": "Suite 1",
      "city": "Bethesda",
      "zipcode": "l5p1v1",
      "phone": "123.4567.890",
      "country_id": 1
    }
}

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}


=end

######### Get a Saved Payment ##########

=begin

@apiGroup Payments

@api {get} localhost:8000/api/v1/credit_card/:id Get a Credit Card/Payment Profile 

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

=end

=begin

@apiGroup Payments

@api {put} localhost:8000/api/v1/credit_card/:id Update a Credit Card/Payment Profile

@apiParamExample {json} Request-Example:

{ "credit_card": {
    "number": "4111111111111111",
    "month": "2",
    "year": "2021",
    "verification_value": "212",
    "name": "John Smith",
    "cc_type": "VISA",
    "payment_method_id": 3
    },
    "address": {
      "firstname": "Spree",
      "lastname": "Commerce",
      "address1": "12 Someplace Lane",
      "address2": "Suite 1",
      "city": "Bethesda",
      "zipcode": "l5p1v1",
      "phone": "123.4567.890",
      "country_id": 1
    }
}

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

=end

######### Delete a Saved Payment ##########

=begin

@apiGroup Payments

@api {delete} localhost:8000/api/v1/credit_card/:id Delete a Credit Card/Payment Profile


@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

=end

######### Get all Saved Payments ##########

=begin

@apiGroup Payments

@api {get} localhost:8000/api/v1/credit_cards Get all saved payments

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

=end

######### Get Customer Payment Profile ##########

=begin

@apiGroup Payments

@api {get} localhost:8000/api/v1/authorizenetcim_customer_profile Get Customer Payment Profile

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

=end

######### Update Customer Payment Profile ##########

=begin

@apiGroup Payments

@apiDescription

This will only update the customer profile to use the current user’s email. Nothing else id editable by the user here. 

@api {put} localhost:8000/api/v1/authorizenetcim_customer_profile Update a Customer Payment Profile

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

=end