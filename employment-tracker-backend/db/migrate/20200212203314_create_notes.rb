class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :note
      t.string :page_type
      t.integer :page_id
      t.integer :user_id

      t.timestamps
    end
  end
end