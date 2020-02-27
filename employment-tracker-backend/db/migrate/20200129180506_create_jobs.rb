class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :application_info
      t.string :company_name
      t.string :job_title
      t.string :link
      t.date :date_of
      t.integer :user_id

      t.timestamps
    end
  end
end
