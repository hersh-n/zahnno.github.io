########### PRODUCTS ##########


##### GET PRODUCTS #####


=begin
 
@api {get} localhost:8000/api/pppp.json Request Products information

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{admin_token}}

@apiSuccess {Object} Product { "count": 2, "total_count": 2, "current_page": 1, "per_page": 25, "pages": 1, "products": [ { "id": 1, "name": "Carrot", "description": "", "price": "100.0", "display_price": "$100.00", ...etc..} 

@apiName GetProducts

@apiGroup Products
         
=end