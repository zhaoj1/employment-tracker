class CreateMeetups < ActiveRecord::Migration[6.0]
  def change
    create_table :meetups do |t|
      t.string :topic
      t.string :location
      t.date :date_of_meetup
      t.string :link
      t.integer :user_id

      t.timestamps
    end
  end
end
