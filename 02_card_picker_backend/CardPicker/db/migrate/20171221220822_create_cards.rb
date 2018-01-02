class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.belongs_to :wallet, foreign_key: true

      t.timestamps
    end
  end
end
