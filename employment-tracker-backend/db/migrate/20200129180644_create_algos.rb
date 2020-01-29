class CreateAlgos < ActiveRecord::Migration[6.0]
  def change
    create_table :algos do |t|
      t.string :topic
      t.date :date_completed

      t.timestamps
    end
  end
end
