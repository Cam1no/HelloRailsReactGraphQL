class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, comment: 'FirstName'
      t.string :last_name, null: false, comment: 'LastName'
      t.string :email, null: false, comment: 'Email'
      t.integer :gender, null: false, comment: 'Gender'
      t.timestamps
    end
    add_index :users, :first_name
    add_index :users, :last_name
    add_index :users, :email
    add_index :users, :gender
  end
end
