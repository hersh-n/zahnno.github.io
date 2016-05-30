###### GET TAXONOMIES ######

=begin
 
@apiGroup Taxonomies

@api {get} localhost:8000/api/taxonomies Request Taxonomies

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{admin_token}}

@apiSuccess {Object} Taxons { "count": 1, "current_page": 1, "pages": 1, "taxonomies": [ { "id": 1, "name": "Store", "root": { "id": 1, "name": "Store", "pretty_name": "Store", "permalink": "store", "parent_id": null, "taxonomy_id": 1, "description": null, "icon": "/assets/default_taxon.png", "taxons": [ { "id": 2, "name": "Cleanse", "pretty_name": "Store -> Cleanse", "permalink": "store/cleanse", "parent_id": 1, "taxonomy_id": 1, "description": "", "icon": "/spree/taxons/2/original/Invigoration-cleanse.png?1454600265" }, { "id": 3, "name": "Juices", "pretty_name": "Store -> Juices", "permalink": "store/new-node", "parent_id": 1, "taxonomy_id": 1, "description": "", "icon": "/assets/default_taxon.png" } ] } } ] }

@apiName GetTaxonomies
         
=end


###### GET TAXONS #########

=begin
 
@apiGroup Taxonomies

@api {get} localhost:8000/api/taxonomies/:id/taxons Request Taxon

@apiHeaderExample Header-Example: 
  X-Spree-Token : {{admin_token}}

@apiSuccess {Object} Taxon {{ "count": 2, "total_count": 2, "current_page": 1, "per_page": 25, "pages": 1, "taxons": [ { "taxons": [], "id": 2, "name": "Cleanse", "pretty_name": "Store -> Cleanse", "permalink": "store/cleanse", "parent_id": 1, "taxonomy_id": 1, "description": "", "icon": "/spree/taxons/2/original/Invigoration-cleanse.png?1454600265" }, { "taxons": [], "id": 3, "name": "Juices", "pretty_name": "Store -> Juices", "permalink": "store/new-node", "parent_id": 1, "taxonomy_id": 1, "description": "", "icon": "/assets/default_taxon.png" } ] }

@apiName GetTaxons
         
=end