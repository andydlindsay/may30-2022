class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :quote

      # t.integer :movie_id

      t.references :movie, foreign_key: true, index: true

      t.timestamps
    end
  end
end
