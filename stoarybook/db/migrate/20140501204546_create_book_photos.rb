class CreateBookPhotos < ActiveRecord::Migration
  def change
    create_table :book_photos do |t|
      t.attachment :picture
    end
    create_table :book_photos_pages do |t|
      t.integer :book_photo_id 
      t.integer :page_id
    end
  end
end
