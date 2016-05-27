################# ADD PROMOTION CODE ######################

=begin

@apiGroup Promotions

@api {put} localhost:8000/api/orders/{{order_number}}/apply_coupon_code Apply Coupon Code

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
	{"coupon_code": "BEETFREE"}

@apiSuccess (Success: 200) Success {
  "success": "The coupon code was successfully applied to your order.",
  "error": null,
  "successful": true,
  "status_code": "coupon_code_applied"
}

@apiErrorExample Error-Response:
	Status: coupon_code_already_applied
	{"error": "The coupon code has already been applied to this order"}

	Status: coupon_code_not_eligible
	{"error": "This coupon code is not eligible for this order"}

	Status: coupon_cide_unknown_error
	{"error": "This coupon code could not be applied to the cart at this time.""}
	
=end

################# REMOVE PROMOTION CODE ######################

=begin

@apiGroup Promotions

@api {put} localhost:8000/api/orders/{{order_number}}/remove_coupon_code Remove Coupon Code

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
	{"coupon_code": "BEETFREE"}

@apiSuccess (Success: 200) Success {
  "success": "The coupon code was successfully removed from your order.",
  "error": null,
  "successful": true,
  "status_code": "coupon_code_removed"
}

=end

