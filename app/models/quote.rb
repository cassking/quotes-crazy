class Quote < ApplicationRecord
  #more on virtual attributes
  #https://dev.to/andy/til-you-can-add-virtual-attributes-to-rails-models--2cbl
#Use pluck as a shortcut
#to select one or more attributes
# without loading a bunch of records
#just to grab the attributes you want.
#pluck is on the db level. It will
#only query the particular field.
#pluck directly converts a database result into an array
  def next_id
    self.class.where('id > ?', self.id).pluck(:id).first
  end

#the 'id<?' and 'id>?' are ways of querying
#active record, where id is greater than self id and viceversa
#then once you have that array, pick only last
  def previous_id
    self.class.where('id < ?', self.id).pluck(:id).last
  end

  binding.pry
end
