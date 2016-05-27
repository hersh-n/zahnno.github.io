define({ "api": [
  {
    "group": "Addresses",
    "type": "delete",
    "url": "localhost:8000/api/addresses/:id.json",
    "title": "Remove Address From Address Book",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 200\n{\"message\":\"Address has been successfully deleted\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "DeleteLocalhost8000ApiAddressesIdJson"
  },
  {
    "group": "Addresses",
    "type": "get",
    "url": "localhost:8000/api/addresses/:id.json",
    "title": "Get Address",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>@address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "GetLocalhost8000ApiAddressesIdJson"
  },
  {
    "group": "Addresses",
    "type": "get",
    "url": "localhost:8000/api/v1/addresses.json",
    "title": "View Address Book",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>@address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "GetLocalhost8000ApiV1AddressesJson"
  },
  {
    "group": "Addresses",
    "type": "get",
    "url": "localhost:8000/api/v1/get_preferred_address.json",
    "title": "Get Preferred Address",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>@address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "GetLocalhost8000ApiV1Get_preferred_addressJson"
  },
  {
    "group": "Addresses",
    "type": "post",
    "url": "localhost:8000/api/addresses.json",
    "title": "Add Address To Address Book",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"address\": { \"firstname\": \"Spree\", \"lastname\": \"Commerce\", \"address1\": \"1 Someplace Lane\", \"address2\": \"Suite 1\", \"city\": \"Bethesda\", \"zipcode\": \"l6p1v9\", \"phone\": \"123.4567.890\", \"state_name\": \"Alaska\", \"company\": null, \"alternative_phone\": null, \"country_id\": 38, \"state_id\": 4200 } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>@address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "PostLocalhost8000ApiAddressesJson"
  },
  {
    "group": "Addresses",
    "type": "post",
    "url": "localhost:8000/api/v1/clear_preferred_address.json",
    "title": "Clear Preferred Address",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 200\n{\"message\":\"Default address cleared\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "PostLocalhost8000ApiV1Clear_preferred_addressJson"
  },
  {
    "group": "Addresses",
    "type": "post",
    "url": "localhost:8000/api/v1/set_preferred_address.json",
    "title": "Set Preferred Address",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"id\" : 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 200\n{\"message\":\"Address has been successfully deleted\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "PostLocalhost8000ApiV1Set_preferred_addressJson"
  },
  {
    "group": "Addresses",
    "type": "put",
    "url": "localhost:8000/api/addresses/12.json",
    "title": "Update Address",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"address\": { \"address1\": \"11 Someplace Lane\" } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>@address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422\n{\"Message\" : \"Failed to update address\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./addresses.rb",
    "groupTitle": "Addresses",
    "name": "PutLocalhost8000ApiAddresses12Json"
  },
  {
    "group": "Checkout",
    "description": "<p>Address Notes Preferred addresses are assigned as follows:</p> <ul> <li>The last ship address used during checkout is set to preferred</li> <li>If addresses are added through account manager and the user has no order, the last address added will be the preferred address When a user enters a ship address the bill address is assigned this same address During the payment state if a user enters a credit card with same address as shipping, the bill address of the credit card will be updated and the payment profile will be updated on AuthroizeNetCim If the user chooses to checkout with a credit card with a different billing address, the billing address will be updated, AuthroizeNetCim will be updated and the order bill address will be updated.</li> </ul> <p>To checkout with an existing address:</p> <p>On the address step:</p> <p>Body: { &quot;order&quot;: { &quot;existing_address&quot;: 892 } }</p> <p>Payments</p> <p>Case A: The user has saved cards</p> <p>Body: {  &quot;order&quot;: { &quot;existing_card&quot;: &quot;card_id&quot; } }</p> <p>Payment to confirm state. This becomes the new preferred card. To move from confirm to complete:</p> <p>Body: {  &quot;order&quot;: { } }</p> <p>The order’s bill address with be updated with the saved payment’s address</p> <p>Case B: A user has saved cards but chooses to adds a new saved payment during checkout and then checkout with it.</p> <p>Body:</p> <p>{ &quot;order&quot;: { &quot;payments_attributes&quot;: [{ &quot;payment_method_id&quot;: &quot;:authnetcim_method_id&quot; }], &quot;bill_address_attributes&quot;: { &quot;firstname&quot;: &quot;Spree&quot;, &quot;lastname&quot;: &quot;Commerce&quot;, &quot;address1&quot;: &quot;102 Someplace Lane&quot;, &quot;address2&quot;: &quot;Suite 10&quot;, &quot;city&quot;: &quot;Toronto&quot;, &quot;zipcode&quot;: &quot;l6p1v1&quot;, &quot;phone&quot;: &quot;123.4567.890&quot;, &quot;country_id&quot;: 1 } }, &quot;payment_source&quot;: { &quot; :authnetcim_method_id &quot;: { &quot;number&quot;: &quot;4111111111111111&quot;, &quot;month&quot;: &quot;1&quot;, &quot;year&quot;: &quot;2017&quot;, &quot;verification_value&quot;: &quot;123&quot;, &quot;name&quot;: &quot;John Smith&quot;, &quot;cc_type&quot;: &quot;VISA&quot; } } }</p> <p>Bill_address_attributes are optional; this will update the card’s address as well as the order’s bill address. If this is not passed, the order will continue to use the ship address as the bill address. This assignment happens when the user enters their shipping address. This card becomes the new preferred card. The order will then be on the “confirm” state. To confirm the order:</p> <p>Body: {  &quot;order&quot;: { } }</p> <p>The gateway payment profile id is the card that will be authorized on order confirm.</p> <p>Case C: The user has no saved cards and wants to add a saved card during checkout, then checkout with it.</p> <p>Body:</p> <p>{ &quot;order&quot;: { &quot;payments_attributes&quot;: [{ &quot;payment_method_id&quot;: &quot;:authnetcim_method_id&quot; }], }, &quot;payment_source&quot;: { &quot;:authnetcim_method_id &quot;: { &quot;number&quot;: &quot;4111111111111111&quot;, &quot;month&quot;: &quot;1&quot;, &quot;year&quot;: &quot;2017&quot;, &quot;verification_value&quot;: &quot;123&quot;, &quot;name&quot;: &quot;John Smith&quot;, &quot;cc_type&quot;: &quot;VISA&quot; } } }</p> <p>The order will then be on the “confirm” state. To confirm the order:</p> <p>PUT localhost:8000/api/checkouts/:order_number.json</p> <p>Body: {  &quot;order&quot;: { } }</p> <p>The gateway payment profile id is the card that will be authorized on order confirm. The gateway customer profile is the profile the profile that was created in the previous call.</p> <p>Case D: The user checks out with a card they do not want to save, they may or may not have existing cards.</p> <p>Body:</p> <p>{ &quot;order&quot;: { &quot;payments_attributes&quot;: [{ &quot;payment_method_id&quot;: &quot;:authnet_method_id&quot; }], &quot;bill_address_attributes&quot;: { &quot;firstname&quot;: &quot;Spree&quot;, &quot;lastname&quot;: &quot;Commerce&quot;, &quot;address1&quot;: &quot;102 Someplace Lane&quot;, &quot;address2&quot;: &quot;Suite 10&quot;, &quot;city&quot;: &quot;Toronto&quot;, &quot;zipcode&quot;: &quot;l6p1v1&quot;, &quot;phone&quot;: &quot;123.4567.890&quot;, &quot;country_id&quot;: 1 } }, &quot;payment_source&quot;: { &quot; :authnet_method_id &quot;: { &quot;number&quot;: &quot;4111111111111111&quot;, &quot;month&quot;: &quot;1&quot;, &quot;year&quot;: &quot;2017&quot;, &quot;verification_value&quot;: &quot;123&quot;, &quot;name&quot;: &quot;John Smith&quot;, &quot;cc_type&quot;: &quot;VISA&quot; } } }</p> <p>Bill_address_attributes are optional; this will update the card’s address as well as the order’s bill address. If this is not passed, the order will continue to use the ship address as the bill address. This assignment happens when the user enters their shipping address. The preferred card should still be the previous preferred card.</p>",
    "type": "post",
    "url": "localhost:8000/api/checkouts/:order_number",
    "title": "Checkout",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./checkouts.rb",
    "groupTitle": "Checkout",
    "name": "PostLocalhost8000ApiCheckoutsOrder_number"
  },
  {
    "group": "GiftCards",
    "description": "<p>General Notes</p> <ul> <li>A Gift Card action of redeemed is not created until the order reaches a complete state.</li> <li>A Gift Card may cover the cost of taxes and shipping.</li> <li>If the balance of an order is $0 after using a gift card, the order will not need a payment method.</li> <li>Only one Gift Card may be used per oder and they must have sufficient funds to use the amount specified.</li> <li>There is a rake task to create an Expired card action, set the balance to $0 and set the card's status to Empty. This task is scheduled to run daily with the whenever gem (see config/schedule.rb in UnchainedCommerce gem). whenever -w will write this to the crontab.</li> </ul>",
    "type": "get",
    "url": "localhost:8000/api/v1/gift_card_balance/:code",
    "title": "Get Gift Card Balance",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "GiftCard",
            "description": "<p>{ &quot;balance&quot;: &quot;$100.00&quot;, &quot;expiry_date&quot;: &quot;May 31, 2016&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./gift_cards.rb",
    "groupTitle": "GiftCards",
    "name": "GetLocalhost8000ApiV1Gift_card_balanceCode"
  },
  {
    "group": "GiftCards",
    "type": "post",
    "url": "localhost:8000/api/v1/redeem_gift_card/:order_number",
    "title": "Redeem a Gift Card",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        },
        {
          "title": "Body-Example: ",
          "content": "{ \"code\": \"493DEB62\", \"amount\": 100 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "GiftCard",
            "description": "<p>@gift_card</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./gift_cards.rb",
    "groupTitle": "GiftCards",
    "name": "PostLocalhost8000ApiV1Redeem_gift_cardOrder_number"
  },
  {
    "group": "GiftCards",
    "type": "post",
    "url": "localhost:8000/api/v1/remove_gift_card/:order_number",
    "title": "Remove a Gift Card",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        },
        {
          "title": "Body-Example: ",
          "content": "{ \"code\": \"493DEB62\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "order",
            "description": "<p>@order { message: 'Gift Card :code has been removed. }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./gift_cards.rb",
    "groupTitle": "GiftCards",
    "name": "PostLocalhost8000ApiV1Remove_gift_cardOrder_number"
  },
  {
    "group": "Orders",
    "type": "delete",
    "url": "localhost:8000/api/orders/:order_number/line_items/:line_item_id",
    "title": "Delete A Product From Order",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 204",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 404",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "DeleteLocalhost8000ApiOrdersOrder_numberLine_itemsLine_item_id"
  },
  {
    "group": "Orders",
    "type": "get",
    "url": "localhost:8000/api/orders/current.json",
    "title": "Get Active Order",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Order",
            "description": "<p>{ &quot;id&quot;: 7, &quot;number&quot;: &quot;R726717097&quot;, &quot;item_total&quot;: &quot;0.0&quot;, &quot;total&quot;: &quot;0.0&quot;, &quot;state&quot;: &quot;cart&quot;, &quot;adjustment_total&quot;: &quot;0.0&quot;, &quot;user_id&quot;: 3, &quot;created_at&quot;: &quot;2016-02-10T16:19:11.220Z&quot;, ...etc...}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "GetLocalhost8000ApiOrdersCurrentJson"
  },
  {
    "group": "Orders",
    "type": "get",
    "url": "localhost:8000/api/orders/mine",
    "title": "View Order History",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Order",
            "description": "<p>@order</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 403",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "GetLocalhost8000ApiOrdersMine"
  },
  {
    "group": "Orders",
    "type": "post",
    "url": "localhost:8000/api/orders.json",
    "title": "Create Order With Product",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example: ",
          "content": "\n{\"order\": { \"line_items\": [ { \"variant_id\":1, \"quantity\": 5 } ] } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 201": [
          {
            "group": "Success: 201",
            "type": "Object",
            "optional": false,
            "field": "Order",
            "description": "<p>{ &quot;id&quot;: 7, &quot;number&quot;: &quot;R726717097&quot;, &quot;item_total&quot;: &quot;0.0&quot;, &quot;total&quot;: &quot;0.0&quot;, &quot;state&quot;: &quot;cart&quot;, &quot;adjustment_total&quot;: &quot;0.0&quot;, &quot;user_id&quot;: 3, &quot;created_at&quot;: &quot;2016-02-10T16:19:11.220Z&quot;, &quot;updated_at&quot;: &quot;2016-02-10T16:19:11.773Z&quot;, &quot;completed_at&quot;: null, &quot;payment_total&quot;: &quot;0.0&quot;, &quot;shipment_state&quot;: null, &quot;payment_state&quot;: null, &quot;email&quot;: &quot;nicole.rego@galepartners.com&quot;, &quot;special_instructions&quot;: null, &quot;display_item_total&quot;: &quot;$0.00&quot;, &quot;total_quantity&quot;: 0, &quot;display_total&quot;: &quot;$0.00&quot;, ..etc...}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "PostLocalhost8000ApiOrdersJson"
  },
  {
    "group": "Orders",
    "type": "post",
    "url": "localhost:8000/api/orders/:order_number/line_items/line_items.json",
    "title": "Add Product To Order",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{ \"line_item\": { \"variant_id\":1, \"quantity\": 5 } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 201": [
          {
            "group": "Success: 201",
            "type": "Object",
            "optional": false,
            "field": "line_item",
            "description": "<p>@line_item</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"error\": \"The resource you were looking for could not be found.\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "PostLocalhost8000ApiOrdersOrder_numberLine_itemsLine_itemsJson"
  },
  {
    "group": "Orders",
    "type": "put",
    "url": "localhost:8000/api/orders/empty.json",
    "title": "Delete Order",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 204",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "PutLocalhost8000ApiOrdersEmptyJson"
  },
  {
    "group": "Orders",
    "type": "put",
    "url": "localhost:8000/api/orders/:order_number/apply_coupon_code",
    "title": "Apply Coupon Code To Order",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"coupon_code\": \"15OFF\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>{ &quot;success&quot;: &quot;The coupon code was successfully applied to your order.&quot;, &quot;error&quot;: null, &quot;successful&quot;: true, &quot;status_code&quot;: &quot;coupon_code_applied&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "PutLocalhost8000ApiOrdersOrder_numberApply_coupon_code"
  },
  {
    "group": "Orders",
    "type": "put",
    "url": "localhost:8000/api/orders/:order_number/line_items/:line_item_id",
    "title": "Change Quantity Of Product In Order",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{ \"line_item\": { \"variant_id\": 1, \"quantity\": 3 } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "line_item",
            "description": "<p>@line_item</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 404",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "PutLocalhost8000ApiOrdersOrder_numberLine_itemsLine_item_id"
  },
  {
    "group": "Orders",
    "type": "put",
    "url": "localhost:8000/api/orders/:order_number/remove_coupon_code",
    "title": "Remove Coupon Code From Order",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"coupon_code\": \"15OFF\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 204": [
          {
            "group": "Success: 204",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>{ &quot;message&quot;: &quot;Successfully removed promotion code.&quot;}</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 404",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./orders.rb",
    "groupTitle": "Orders",
    "name": "PutLocalhost8000ApiOrdersOrder_numberRemove_coupon_code"
  },
  {
    "group": "Payments",
    "type": "delete",
    "url": "localhost:8000/api/v1/credit_card/:id",
    "title": "Delete a Credit Card/Payment Profile",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./payments.rb",
    "groupTitle": "Payments",
    "name": "DeleteLocalhost8000ApiV1Credit_cardId"
  },
  {
    "group": "Payments",
    "type": "get",
    "url": "localhost:8000/api/v1/authorizenetcim_customer_profile",
    "title": "Get Customer Payment Profile",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./payments.rb",
    "groupTitle": "Payments",
    "name": "GetLocalhost8000ApiV1Authorizenetcim_customer_profile"
  },
  {
    "group": "Payments",
    "type": "get",
    "url": "localhost:8000/api/v1/credit_card/:id",
    "title": "Get a Credit Card/Payment Profile",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./payments.rb",
    "groupTitle": "Payments",
    "name": "GetLocalhost8000ApiV1Credit_cardId"
  },
  {
    "group": "Payments",
    "type": "get",
    "url": "localhost:8000/api/v1/credit_cards",
    "title": "Get all saved payments",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./payments.rb",
    "groupTitle": "Payments",
    "name": "GetLocalhost8000ApiV1Credit_cards"
  },
  {
    "group": "Payments",
    "description": "<p>General Notes</p> <p>Preferred cards are assigned as follows:</p> <ul> <li>The last card used during checkout will be set to preferred</li> <li>If the user has not checkout out yet but has existing cards, the preferred card will be the card most recently added</li> </ul> <p>Account Management</p> <ul> <li>Saved Payments created for account management will use AuthroizeNetCim. The first card that is created will create a Customer Profile and a Payment Profile. All cards created after this will use the same Customer Profile and will have a new Payment Profile created.</li> </ul>",
    "type": "post",
    "url": "localhost:8000/api/v1/credit_card",
    "title": "Create a Credit Card/Payment Profile",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{ \"credit_card\": {\n    \"number\": \"4111111111111111\",\n    \"month\": \"2\",\n    \"year\": \"2021\",\n    \"verification_value\": \"212\",\n    \"name\": \"John Smith\",\n    \"cc_type\": \"VISA\",\n    \"payment_method_id\": 3\n    },\n    \"address\": {\n      \"firstname\": \"Spree\",\n      \"lastname\": \"Commerce\",\n      \"address1\": \"12 Someplace Lane\",\n      \"address2\": \"Suite 1\",\n      \"city\": \"Bethesda\",\n      \"zipcode\": \"l5p1v1\",\n      \"phone\": \"123.4567.890\",\n      \"country_id\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./payments.rb",
    "groupTitle": "Payments",
    "name": "PostLocalhost8000ApiV1Credit_card"
  },
  {
    "group": "Payments",
    "description": "<p>This will only update the customer profile to use the current user’s email. Nothing else id editable by the user here.</p>",
    "type": "put",
    "url": "localhost:8000/api/v1/authorizenetcim_customer_profile",
    "title": "Update a Customer Payment Profile",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./payments.rb",
    "groupTitle": "Payments",
    "name": "PutLocalhost8000ApiV1Authorizenetcim_customer_profile"
  },
  {
    "group": "Payments",
    "type": "put",
    "url": "localhost:8000/api/v1/credit_card/:id",
    "title": "Update a Credit Card/Payment Profile",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{ \"credit_card\": {\n    \"number\": \"4111111111111111\",\n    \"month\": \"2\",\n    \"year\": \"2021\",\n    \"verification_value\": \"212\",\n    \"name\": \"John Smith\",\n    \"cc_type\": \"VISA\",\n    \"payment_method_id\": 3\n    },\n    \"address\": {\n      \"firstname\": \"Spree\",\n      \"lastname\": \"Commerce\",\n      \"address1\": \"12 Someplace Lane\",\n      \"address2\": \"Suite 1\",\n      \"city\": \"Bethesda\",\n      \"zipcode\": \"l5p1v1\",\n      \"phone\": \"123.4567.890\",\n      \"country_id\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./payments.rb",
    "groupTitle": "Payments",
    "name": "PutLocalhost8000ApiV1Credit_cardId"
  },
  {
    "group": "Products",
    "type": "get",
    "url": "localhost:8000/api/v1/invetory",
    "title": "Get Product Inventory",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Products",
            "description": "<p>{ &quot;products&quot;: [ { &quot;master&quot;: { &quot;id&quot;: 2, &quot;name&quot;: &quot;Lime Ginger&quot;, &quot;display_price&quot;: &quot;$12.00&quot;, &quot;track_inventory&quot;: true, &quot;in_stock&quot;: true, &quot;is_backorderable&quot;: true, &quot;total_on_hand&quot;: 5, &quot;is_destroyed&quot;: false } } ] }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./inventory.rb",
    "groupTitle": "Products",
    "name": "GetLocalhost8000ApiV1Invetory"
  },
  {
    "group": "Products",
    "type": "get",
    "url": "localhost:8000/api/v1/invetory/:id",
    "title": "Get A Product Inventory",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "Product",
            "description": "<p>{ &quot;master&quot;: { &quot;id&quot;: 2, &quot;name&quot;: &quot;Lime Ginger&quot;, &quot;display_price&quot;: &quot;$12.00&quot;, &quot;track_inventory&quot;: true, &quot;in_stock&quot;: true, &quot;is_backorderable&quot;: true, &quot;total_on_hand&quot;: 5, &quot;is_destroyed&quot;: false } }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./inventory.rb",
    "groupTitle": "Products",
    "name": "GetLocalhost8000ApiV1InvetoryId"
  },
  {
    "type": "get",
    "url": "localhost:8000/api/pppp.json",
    "title": "Request Products information",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Product",
            "description": "<p>{ &quot;count&quot;: 2, &quot;total_count&quot;: 2, &quot;current_page&quot;: 1, &quot;per_page&quot;: 25, &quot;pages&quot;: 1, &quot;products&quot;: [ { &quot;id&quot;: 1, &quot;name&quot;: &quot;Carrot&quot;, &quot;description&quot;: &quot;&quot;, &quot;price&quot;: &quot;100.0&quot;, &quot;display_price&quot;: &quot;$100.00&quot;, ...etc..}</p>"
          }
        ]
      }
    },
    "name": "GetProducts",
    "group": "Products",
    "version": "0.0.0",
    "filename": "./products.rb",
    "groupTitle": "Products"
  },
  {
    "group": "Promotions",
    "type": "put",
    "url": "localhost:8000/api/orders/{{order_number}}/apply_coupon_code",
    "title": "Apply Coupon Code",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"coupon_code\": \"BEETFREE\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "optional": false,
            "field": "Success",
            "description": "<p>{ &quot;success&quot;: &quot;The coupon code was successfully applied to your order.&quot;, &quot;error&quot;: null, &quot;successful&quot;: true, &quot;status_code&quot;: &quot;coupon_code_applied&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: coupon_code_already_applied\n{\"error\": \"The coupon code has already been applied to this order\"}\n\nStatus: coupon_code_not_eligible\n{\"error\": \"This coupon code is not eligible for this order\"}\n\nStatus: coupon_cide_unknown_error\n{\"error\": \"This coupon code could not be applied to the cart at this time.\"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./promotions.rb",
    "groupTitle": "Promotions",
    "name": "PutLocalhost8000ApiOrdersOrder_numberApply_coupon_code"
  },
  {
    "group": "Promotions",
    "type": "put",
    "url": "localhost:8000/api/orders/{{order_number}}/remove_coupon_code",
    "title": "Remove Coupon Code",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"coupon_code\": \"BEETFREE\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "optional": false,
            "field": "Success",
            "description": "<p>{ &quot;success&quot;: &quot;The coupon code was successfully removed from your order.&quot;, &quot;error&quot;: null, &quot;successful&quot;: true, &quot;status_code&quot;: &quot;coupon_code_removed&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./promotions.rb",
    "groupTitle": "Promotions",
    "name": "PutLocalhost8000ApiOrdersOrder_numberRemove_coupon_code"
  },
  {
    "group": "Taxonomies",
    "type": "get",
    "url": "localhost:8000/api/taxonomies",
    "title": "Request Taxonomies information",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Taxons",
            "description": "<p>{ &quot;count&quot;: 1, &quot;current_page&quot;: 1, &quot;pages&quot;: 1, &quot;taxonomies&quot;: [ { &quot;id&quot;: 1, &quot;name&quot;: &quot;Store&quot;, &quot;root&quot;: { &quot;id&quot;: 1, &quot;name&quot;: &quot;Store&quot;, &quot;pretty_name&quot;: &quot;Store&quot;, &quot;permalink&quot;: &quot;store&quot;, &quot;parent_id&quot;: null, &quot;taxonomy_id&quot;: 1, &quot;description&quot;: null, &quot;icon&quot;: &quot;/assets/default_taxon.png&quot;, &quot;taxons&quot;: [ { &quot;id&quot;: 2, &quot;name&quot;: &quot;Cleanse&quot;, &quot;pretty_name&quot;: &quot;Store -&gt; Cleanse&quot;, &quot;permalink&quot;: &quot;store/cleanse&quot;, &quot;parent_id&quot;: 1, &quot;taxonomy_id&quot;: 1, &quot;description&quot;: &quot;&quot;, &quot;icon&quot;: &quot;/spree/taxons/2/original/Invigoration-cleanse.png?1454600265&quot; }, { &quot;id&quot;: 3, &quot;name&quot;: &quot;Juices&quot;, &quot;pretty_name&quot;: &quot;Store -&gt; Juices&quot;, &quot;permalink&quot;: &quot;store/new-node&quot;, &quot;parent_id&quot;: 1, &quot;taxonomy_id&quot;: 1, &quot;description&quot;: &quot;&quot;, &quot;icon&quot;: &quot;/assets/default_taxon.png&quot; } ] } } ] }</p>"
          }
        ]
      }
    },
    "name": "GetTaxonomies",
    "version": "0.0.0",
    "filename": "./taxonomies.rb",
    "groupTitle": "Taxonomies"
  },
  {
    "group": "Taxonomies",
    "type": "get",
    "url": "localhost:8000/api/taxonomies/:id/taxons",
    "title": "Request Taxon information",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Taxon",
            "description": "<p>{{ &quot;count&quot;: 2, &quot;total_count&quot;: 2, &quot;current_page&quot;: 1, &quot;per_page&quot;: 25, &quot;pages&quot;: 1, &quot;taxons&quot;: [ { &quot;taxons&quot;: [], &quot;id&quot;: 2, &quot;name&quot;: &quot;Cleanse&quot;, &quot;pretty_name&quot;: &quot;Store -&gt; Cleanse&quot;, &quot;permalink&quot;: &quot;store/cleanse&quot;, &quot;parent_id&quot;: 1, &quot;taxonomy_id&quot;: 1, &quot;description&quot;: &quot;&quot;, &quot;icon&quot;: &quot;/spree/taxons/2/original/Invigoration-cleanse.png?1454600265&quot; }, { &quot;taxons&quot;: [], &quot;id&quot;: 3, &quot;name&quot;: &quot;Juices&quot;, &quot;pretty_name&quot;: &quot;Store -&gt; Juices&quot;, &quot;permalink&quot;: &quot;store/new-node&quot;, &quot;parent_id&quot;: 1, &quot;taxonomy_id&quot;: 1, &quot;description&quot;: &quot;&quot;, &quot;icon&quot;: &quot;/assets/default_taxon.png&quot; } ] }</p>"
          }
        ]
      }
    },
    "name": "GetTaxons",
    "version": "0.0.0",
    "filename": "./taxonomies.rb",
    "groupTitle": "Taxonomies"
  },
  {
    "group": "Users",
    "type": "get",
    "url": "localhost:8000/api/users",
    "title": "Get Users",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@users</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "GetLocalhost8000ApiUsers"
  },
  {
    "group": "Users",
    "type": "get",
    "url": "localhost:8000/api/users/:id",
    "title": "Get User",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "GetLocalhost8000ApiUsersId"
  },
  {
    "group": "Users",
    "type": "get",
    "url": "localhost:8000/user/spree_user/logout.json",
    "title": "Logout",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 200",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 403",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "GetLocalhost8000UserSpree_userLogoutJson"
  },
  {
    "group": "Users",
    "type": "patch",
    "url": "localhost:8000/user/spree_user/password",
    "title": "Forgot Password - Change Password",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"spree_user\": {\"password\": \"spree\", \"password_confirmation\": \"spree\", \"reset_password_token\": \"tUC_sMAtWKQzDj4ucnyd\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 201\n{\"message\":\"Success\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 403",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PatchLocalhost8000UserSpree_userPassword"
  },
  {
    "group": "Users",
    "description": "<p>Note</p> <p>The guest user is excluded from the 15min token check and will not be timed out as a result. To test this, create a new guest user and check order history of that user after 15 mins. The user shouldn't be timed out at this point.</p>",
    "type": "post",
    "url": "localhost:80000/api/users.json",
    "title": "Create User",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"user\": {\"password\": \"temppwd\", \"email\": \"lilwayne@example.com\", \"username\": \"zapper\", \"phone\": \"6476544567\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 201": [
          {
            "group": "Success: 201",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@user { &quot;id&quot;: 5, &quot;email&quot;: null, &quot;created_at&quot;: &quot;2016-02-08T20:03:39.206Z&quot;, &quot;updated_at&quot;: &quot;2016-02-08T20:03:39.215Z&quot;, &quot;spree_api_key&quot;: &quot;7f4303d8e835e4a47e77a04af2793443fe5e0bebfd44b873&quot;, &quot;bill_address&quot;: null, &quot;ship_address&quot;: null, &quot;username&quot;: null, &quot;phone&quot;: null}</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 403",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PostLocalhost80000ApiUsersJson"
  },
  {
    "group": "Users",
    "type": "post",
    "url": "localhost:8000/api/users.json",
    "title": "Signup",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"spree_user\": {\"email\": \"xyz@gmail.com\", \"password\": \"123456\", \"name\": \"John Doe\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@user { &quot;id&quot;: 9, &quot;email&quot;: &quot;xyz@gmail.com&quot;, &quot;created_at&quot;: &quot;2016-02-08T15:49:25.869Z&quot;, &quot;updated_at&quot;: &quot;2016-02-08T15:49:25.891Z&quot;, &quot;spree_api_key&quot;: &quot;157a0c1e8e03a56dbd150611b69ce7385e890f2ee07bbdbb&quot;, &quot;bill_address&quot;: null, &quot;ship_address&quot;: null, name: &quot;John Doe&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 403",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PostLocalhost8000ApiUsersJson"
  },
  {
    "group": "Users",
    "type": "post",
    "url": "localhost:8000/password/recover.json",
    "title": "Forgot Password - Send Email",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"spree_user\": {\"email\": \"spree@example.com\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "Status: 200\n{\"message\":\"Success\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PostLocalhost8000PasswordRecoverJson"
  },
  {
    "group": "Users",
    "type": "post",
    "url": "localhost:8000/:provider",
    "title": "Get/Create Social User",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{admin_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"user\" :{\"email\":\"DamnDaniel@gmail.com\", \"provider\":\"Facebook\", \"username\":\"Daniel\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@users</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422\n{\"message\":\"Could not Create or find User\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PostLocalhost8000Provider"
  },
  {
    "group": "Users",
    "description": "<ol> <li> <p>General login</p> <p>When a user signs into the site before adding to cart. This the described below.</p> </li> <li> <p>Guest login</p> <p>When a user adds to cart as a guest user and decides to login before checkout. This situation, will require a slightly different login process. To use this login method, follow the steps for general login and add the guest user token in the header of the request e.g X-Spree-Token : {{random token}}</p> </li> </ol> <p>The &quot;registered&quot; attribute can be used to determine if a user is a guest user and a registered user. If registered is &quot;true&quot; this means that the user is a registered user. &quot;false&quot; = guest user.</p>",
    "type": "post",
    "url": "localhost:8000/user/spree_user/sign_in.json",
    "title": "Login",
    "header": {
      "examples": [
        {
          "title": "Body-Example:",
          "content": "{\"spree_user\": {\"email\": \"xyz@gmail.com\", \"password\": \"123456\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>{ &quot;id&quot;: 5, &quot;email&quot;: &quot;1234@gmail.com&quot;, &quot;persistence_token&quot;: null, &quot;perishable_token&quot;: null, &quot;last_request_at&quot;: null, &quot;login&quot;: &quot;12234@gmail.com&quot;, &quot;ship_address_id&quot;: null, &quot;bill_address_id&quot;: null, &quot;authentication_token&quot;: null, &quot;created_at&quot;: &quot;2016-02-04T20:17:47.510Z&quot;, &quot;updated_at&quot;: &quot;2016-02-08T15:40:40.907Z&quot;, &quot;spree_api_key&quot;: &quot;a55ea0761091bbef075c0c676ba46c0e5a1d183e6f86956e&quot;, &quot;deleted_at&quot;: null, &quot;last_token_use&quot;: &quot;2016-02-08T15:40:40.905Z&quot;, &quot;newsletter&quot;: false, &quot;registered&quot;: true }</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422\n{ \"message\": \"Your email already exist or email/password was empty\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PostLocalhost8000UserSpree_userSign_inJson"
  },
  {
    "group": "Users",
    "type": "put",
    "url": "localhost:8000/api/users/:id",
    "title": "Update User Account",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"user\": { \"email\": \"lilwayne@example.com\", \"need_state_id\": 1 } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 201": [
          {
            "group": "Success: 201",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@user { &quot;id&quot;: 5, &quot;email&quot;: null, &quot;created_at&quot;: &quot;2016-02-08T20:03:39.206Z&quot;, &quot;updated_at&quot;: &quot;2016-02-08T20:03:39.215Z&quot;, &quot;spree_api_key&quot;: &quot;7f4303d8e835e4a47e77a04af2793443fe5e0bebfd44b873&quot;, &quot;bill_address&quot;: null, &quot;ship_address&quot;: null, &quot;username&quot;: null, &quot;phone&quot;: null}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PutLocalhost8000ApiUsersId"
  },
  {
    "group": "Users",
    "type": "put",
    "url": "localhost:8000/api/users/:id/claim_guest_account.json",
    "title": "Claim Guest Account",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{ \"user\": {\"password\":\"spree123\", \"password_confirmation\":\"spree123\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@users</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422\n{ message: \"Looks like you already have an account.\"}\n{ message: \"You cannot claim your account without an email.\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PutLocalhost8000ApiUsersIdClaim_guest_accountJson"
  },
  {
    "group": "Users",
    "type": "put",
    "url": "localhost:8000/api/users/:id/guest_user_signup",
    "title": "Guest Signup",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{guest user spree_api_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"user\": {\"need_state_id\": 19}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 201": [
          {
            "group": "Success: 201",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@user</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422\n{ \"message\": \"Your email already exist or email/password was empty\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PutLocalhost8000ApiUsersIdGuest_user_signup"
  },
  {
    "group": "Users",
    "type": "put",
    "url": "localhost:8000/users/:id",
    "title": "Update Need State",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"user\": {\"need_state_id\": 19}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PutLocalhost8000UsersId"
  },
  {
    "group": "Users",
    "type": "put",
    "url": "localhost:8000/users/update_password.json",
    "title": "Update Password",
    "header": {
      "examples": [
        {
          "title": "Header-Example: ",
          "content": "X-Spree-Token : {{user_token}}",
          "type": "json"
        },
        {
          "title": "Body-Example:",
          "content": "{\"id\":\"update_password\", \"user\": { \"password\":\"spree123\", \"password_confirmation\":\"spree123\"}, \"check_password\": { \"password\": \"spree123\" } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success: 200": [
          {
            "group": "Success: 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>@user</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Status: 422",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.rb",
    "groupTitle": "Users",
    "name": "PutLocalhost8000UsersUpdate_passwordJson"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_vagrant_unchainedcommerce_unchainedcommerce_ApiDoc_doc_main_js",
    "groupTitle": "_home_vagrant_unchainedcommerce_unchainedcommerce_ApiDoc_doc_main_js",
    "name": ""
  }
] });
