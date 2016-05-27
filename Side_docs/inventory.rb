################# GET PRODUCT INVENTORY ######################

=begin

@apiGroup Products

@api {get} localhost:8000/api/v1/invetory Get Product Inventory

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{admin_token}}

@apiSuccess (Success: 200) {Object} Products { "products": [ { "master": { "id": 2, "name": "Lime Ginger", "display_price": "$12.00", "track_inventory": true, "in_stock": true, "is_backorderable": true, "total_on_hand": 5, "is_destroyed": false } } ] }
	
=end


################# GET A PRODUCT'S INVENTORY ######################

=begin

@apiGroup Products

@api {get} localhost:8000/api/v1/invetory/:id Get A Product Inventory

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{admin_token}}

@apiSuccess (Success: 200) {Object} Product { "master": { "id": 2, "name": "Lime Ginger", "display_price": "$12.00", "track_inventory": true, "in_stock": true, "is_backorderable": true, "total_on_hand": 5, "is_destroyed": false } }
	
=end
