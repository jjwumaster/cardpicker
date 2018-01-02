class CreateMerchants < ActiveRecord::Migration[5.1]
  def change
    create_table :merchants do |t|
      t.belongs_to :user
      t.belongs_to :category
      t.string :name
      t.float :lat
      t.float :long
    end
  end
end
