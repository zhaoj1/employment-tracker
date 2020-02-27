class CreateAlgorithms < ActiveRecord::Migration[6.0]
  def change
    create_table :algorithms do |t|
      t.string :title
      t.date :date_of
      t.integer :user_id

      t.timestamps
    end
  end
end
