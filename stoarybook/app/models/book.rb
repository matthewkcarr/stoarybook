class Book < ActiveRecord::Base

  has_many :pages
  belongs_to :author, :key => "author_id", :class => User

end
