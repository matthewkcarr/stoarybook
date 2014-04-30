class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.integer :book_id
      t.text :text
      t.integer :picture_id
      t.timestamps
    end
  end
end
