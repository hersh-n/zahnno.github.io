########### PRODUCTS ##########


##### GET PRODUCTS #####


=begin
@apiGroup Products
 
@api {get} localhost:8000/api/products.json Request Products

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{spree_api_key}}

@apiSuccess {Object} Product { "count": 2, "total_count": 2, "current_page": 1, "per_page": 25, "pages": 1, "products": [ { "id": 1, "name": "Carrot", "description": "", "price": "100.0", "display_price": "$100.00", ...etc..} 

@apiName GetProducts
         
=end

#### GET A PRODUCT #####

=begin

@apiGroup Products

@api {get} localhost:8000/api/products/:id.json Request a Product

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{spree_api_key}}

@apiSuccess {Object} Product { "count": 2, "total_count": 2, "current_page": 1, "per_page": 25, "pages": 1, "products": [ { "id": 1, "name": "Carrot", "description": "", "price": "100.0", "display_price": "$100.00", ...etc..} 

@apiName GetProducts
         
=end