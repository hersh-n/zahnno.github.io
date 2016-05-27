######### Gift Cards ##########


######### Check Balance ##########

=begin

@apiGroup GiftCards

@apiDescription 

General Notes

- A Gift Card action of redeemed is not created until the order reaches a complete state.
- A Gift Card may cover the cost of taxes and shipping.
- If the balance of an order is $0 after using a gift card, the order will not need a payment method.
- Only one Gift Card may be used per oder and they must have sufficient funds to use the amount specified.
- There is a rake task to create an Expired card action, set the balance to $0 and set the card's status to Empty. This task is scheduled to run daily with the whenever gem (see config/schedule.rb in UnchainedCommerce gem). whenever -w will write this to the crontab.

@api {get}  localhost:8000/api/v1/gift_card_balance/:code Get Gift Card Balance

@apiHeaderExample Header-Example: 
 	 X-Spree-Token : {{user_token}

@apiSuccess (Success: 200) {Object} GiftCard { "balance": "$100.00", "expiry_date": "May 31, 2016" }

=end

######### Redeem Gift Card ##########

=begin

@apiGroup GiftCards

@api {post} localhost:8000/api/v1/redeem_gift_card/:order_number Redeem a Gift Card

@apiHeaderExample Header-Example: 
   X-Spree-Token : {{user_token}

@apiHeaderExample Body-Example: 
  { "code": "493DEB62", "amount": 100 }

@apiSuccess (Success: 200) {Object} GiftCard @gift_card

=end

######### Remove Gift Card from Order ##########

=begin

@apiGroup GiftCards

@api {post} localhost:8000/api/v1/remove_gift_card/:order_number Remove a Gift Card

@apiHeaderExample Header-Example: 
   X-Spree-Token : {{user_token}

@apiHeaderExample Body-Example: 
  { "code": "493DEB62" }

@apiSuccess (Success: 200) {Object} order @order { message: 'Gift Card :code has been removed. }

=end