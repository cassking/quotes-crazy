class Quote < ApplicationRecord
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


  def previous_id
    self.class.where('id < ?', self.id).pluck(:id).last
  end
end
