# app/views/api/quotes/show.json.jbuilder
json.extract! @quote, :id, :quote, :author, :category, :next_id, :previous_id

# we now get a quote object like so
#quote.id, quote.quote,quote.next_id, etc
# {
# id: 1,
# quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
# author: "Ayn Rand",
# category: "Famous",
# next_id: 2,
# previous_id: null
# }
