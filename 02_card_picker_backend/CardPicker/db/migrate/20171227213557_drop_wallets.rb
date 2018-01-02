class DropWallets < ActiveRecord::Migration[5.1]
  def change
    remove_column :cards, :wallet_id 
    drop_table :wallets
  end
end
