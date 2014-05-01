class Book < ActiveRecord::Base

  has_many :pages
  belongs_to :author, :foreign_key => "author_id", :class_name => User

end
