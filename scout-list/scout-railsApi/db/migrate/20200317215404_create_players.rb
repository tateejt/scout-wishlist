class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.text :description
      t.string :height
      t.string :weight
      t.string :imgUrl
      t.string :fourty
      t.string :school

      t.timestamps
    end
  end
end
