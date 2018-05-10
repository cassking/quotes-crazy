class StaticPagesController < ApplicationController
  def index
    @first_quote_id = Quote.first.id
  end
end
