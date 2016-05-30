
######### ORDERS ##########

################# CREATE ORDER WITH PRODUCT #################

=begin
 
@apiGroup Orders

@api {post} localhost:8000/api/orders.json Create Order With Product

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example: 

 {"order": { "line_items": [ { "variant_id":1, "quantity": 5 } ] } }

@apiSuccess (Success: 201) {Object} Order { "id": 7, "number": "R726717097", "item_total": "0.0", "total": "0.0", "state": "cart", "adjustment_total": "0.0", "user_id": 3, "created_at": "2016-02-10T16:19:11.220Z", "updated_at": "2016-02-10T16:19:11.773Z", "completed_at": null, "payment_total": "0.0", "shipment_state": null, "payment_state": null, "email": "nicole.rego@galepartners.com", "special_instructions": null, "display_item_total": "$0.00", "total_quantity": 0, "display_total": "$0.00", ..etc...}

=end

################# GET ORDER #################

=begin
 
@apiGroup Orders

@api {get} localhost:8000/api/orders/:order_number.json Get Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiSuccess (Success: 201) {Object} Order { "id": 7, "number": "R726717097", "item_total": "0.0", "total": "0.0", "state": "cart", "adjustment_total": "0.0", "user_id": 3, "created_at": "2016-02-10T16:19:11.220Z", "updated_at": "2016-02-10T16:19:11.773Z", "completed_at": null, "payment_total": "0.0", "shipment_state": null, "payment_state": null, "email": "nicole.rego@galepartners.com", "special_instructions": null, "display_item_total": "$0.00", "total_quantity": 0, "display_total": "$0.00", ..etc...}

=end


####################### GET ACTIVE ORDER #######################

=begin

@apiGroup Orders

@api {get} localhost:8000/api/orders/current.json Get Active Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiSuccess (Success: 200) {Object} Order { "id": 7, "number": "R726717097", "item_total": "0.0", "total": "0.0", "state": "cart", "adjustment_total": "0.0", "user_id": 3, "created_at": "2016-02-10T16:19:11.220Z", ...etc...}
  
=end


#################### ADD PRODUCT TO ORDER #######################

=begin

@apiGroup Orders

@api {post} localhost:8000/api/orders/:order_number/line_items?.json Add Product To Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
  { "line_item": { "variant_id":1, "quantity": 5 } }

@apiSuccess (Success: 201) {Object} line_item @line_item

@apiErrorExample {json} Error-Response:
	{ "error": "The resource you were looking for could not be found." }
	
=end


################## DELETE A PRODUCT FROM AN ORDER ###################

=begin

@apiGroup Orders

@api {delete} localhost:8000/api/orders/:order_number/line_items/:line_item_id Delete A Product From Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiSuccessExample Success-Response: 
 	Status: 204

@apiErrorExample Error-Response:
	Status: 404
	
=end


################# CHANGE QUANTITY OF PRODUCT IN ORDER ################

=begin

@apiGroup Orders

@api {put} localhost:8000/api/orders/:order_number/line_items/:line_item_id Change Quantity Of Product In Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
  { "line_item": { "variant_id": 1, "quantity": 3 } }

@apiSuccess (Success: 200) {Object} line_item @line_item

@apiErrorExample Error-Response:
	Status: 404
	
=end

######################## DELETE ORDER ######################

=begin

@apiGroup Orders

@api {put} localhost:8000/api/orders/empty.json Delete Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiSuccessExample Success-Response: 
 	Status: 204

=end


################# APPLY COUPON CODE TO ORDER ################

=begin

@apiGroup Orders

@api {put} localhost:8000/api/orders/:order_number/apply_coupon_code Apply Coupon Code To Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
  {"coupon_code": "15OFF"}

@apiSuccess (Success: 200) {Object} Success { "success": "The coupon code was successfully applied to your order.", "error": null, "successful": true, "status_code": "coupon_code_applied" }

@apiErrorExample Error-Response:
	Status: 422
	
=end


################# REMOVE COUPON CODE FROM ORDER ################

=begin

@apiGroup Orders

@api {put} localhost:8000/api/orders/:order_number/remove_coupon_code Remove Coupon Code From Order

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{user_token}}

@apiHeaderExample Body-Example:
  {"coupon_code": "15OFF"}

@apiSuccess (Success: 204) {Object} Success { "message": "Successfully removed promotion code."}

@apiErrorExample Error-Response:
	Status: 404
	
=end



