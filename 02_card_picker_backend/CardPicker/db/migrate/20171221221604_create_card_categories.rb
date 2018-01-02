class CreateCardCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :card_categories do |t|
      t.belongs_to :card, foreign_key: true
      t.belongs_to :category, foreign_key: true
      t.float :reward

      t.timestamps
    end
  end
end
