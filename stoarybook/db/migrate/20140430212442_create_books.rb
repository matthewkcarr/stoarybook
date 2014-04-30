class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.integer :author_id
      t.integer :number_of_pages
      t.integer :cover_photo_id
      t.timestamps
    end
  end
end
