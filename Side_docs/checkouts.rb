######### Checkouts ##########

=begin

@apiGroup Checkout

@apiDescription  Address Notes

Preferred addresses are assigned as follows:
-	The last ship address used during checkout is set to preferred
-	If addresses are added through account manager and the user has no order, the last address added will be the preferred address
When a user enters a ship address the bill address is assigned this same address
During the payment state if a user enters a credit card with same address as shipping, the bill address of the credit card will be updated and the payment profile will be updated on AuthroizeNetCim
If the user chooses to checkout with a credit card with a different billing address, the billing address will be updated, AuthroizeNetCim will be updated and the order bill address will be updated. 

To checkout with an existing address:

On the address step:
@apiHeaderExample Body-Example:
  { "order": { "existing_address": 892 } }

Payments

Case A: The user has saved cards

@apiHeaderExample Body-Example:
 {  "order": { "existing_card": "card_id" } }

Payment to confirm state. This becomes the new preferred card. To move from confirm to complete:

@apiHeaderExample Body-Example:
Body: {  "order": { } }

The order’s bill address with be updated with the saved payment’s address
	
Case B: A user has saved cards but chooses to adds a new saved payment during checkout and then checkout with it. 
	
@apiSuccess (Success: 204) {Object} Success
{
 "order": {
   "payments_attributes": [{
     "payment_method_id": ":authnetcim_method_id"
   }],
   "bill_address_attributes": {
      "firstname": "Spree",
      "lastname": "Commerce",
      "address1": "102 Someplace Lane",
      "address2": "Suite 10",
      "city": "Toronto",
      "zipcode": "l6p1v1",
      "phone": "123.4567.890",
      "country_id": 1
    }
 },
 "payment_source": {
     " :authnetcim_method_id ": {
       "number": "4111111111111111",
       "month": "1",
       "year": "2017",
       "verification_value": "123",
       "name": "John Smith",
       "cc_type": "VISA"
     }
   }
}

Bill_address_attributes are optional; this will update the card’s address as well as the order’s bill address. If this is not passed, the order will continue to use the ship address as the bill address. This assignment happens when the user enters their shipping address. This card becomes the new preferred card. The order will then be on the “confirm” state. To confirm the order:

Body: {  "order": { } }

The gateway payment profile id is the card that will be authorized on order confirm. 

Case C: The user has no saved cards and wants to add a saved card during checkout, then checkout with it.

Body:

{
 "order": {
   "payments_attributes": [{
     "payment_method_id": ":authnetcim_method_id"
   }],
},
 "payment_source": {
     ":authnetcim_method_id ": {
       "number": "4111111111111111",
       "month": "1",
       "year": "2017",
       "verification_value": "123",
       "name": "John Smith",
       "cc_type": "VISA"
     }
   }
}

The order will then be on the “confirm” state. To confirm the order:

PUT localhost:8000/api/checkouts/:order_number.json

Body: {  "order": { } }

The gateway payment profile id is the card that will be authorized on order confirm. The gateway customer profile is the profile the profile that was created in the previous call. 

Case D: The user checks out with a card they do not want to save, they may or may not have existing cards.

Body:

{
 "order": {
   "payments_attributes": [{
     "payment_method_id": ":authnet_method_id"
   }],
   "bill_address_attributes": {
      "firstname": "Spree",
      "lastname": "Commerce",
      "address1": "102 Someplace Lane",
      "address2": "Suite 10",
      "city": "Toronto",
      "zipcode": "l6p1v1",
      "phone": "123.4567.890",
      "country_id": 1
    }
 },
 "payment_source": {
     " :authnet_method_id ": {
       "number": "4111111111111111",
       "month": "1",
       "year": "2017",
       "verification_value": "123",
       "name": "John Smith",
       "cc_type": "VISA"
     }
   }
}

Bill_address_attributes are optional; this will update the card’s address as well as the order’s bill address. If this is not passed, the order will continue to use the ship address as the bill address. This assignment happens when the user enters their shipping address. The preferred card should still be the previous preferred card. 

@api {post} localhost:8000/api/checkouts/:order_number Checkout

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

=end
