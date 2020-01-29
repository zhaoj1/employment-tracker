class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.string :title
      t.string :company_name
      t.string :job_title
      t.string :interviewer
      t.string :link
      t.date :date_of_interview

      t.timestamps
    end
  end
end
