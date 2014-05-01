class BookPhoto < ActiveRecord::Base
  has_and_belongs_to_many :pages
  has_attached_file :picture
  validates_attachment_presence :picture
  validates_attachment_content_type :picture, :content_type => /\Aimage/
  validates_attachment_file_name :picture, :matches => [/png\Z/, /jpe?g\Z/]
end
