class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.string :title
      t.string :company_name
      t.string :job_title
      t.string :interviewer
      t.string :link
      t.date :date_of
      t.time :time_of
      t.integer :user_id

      t.timestamps
    end
  end
end
