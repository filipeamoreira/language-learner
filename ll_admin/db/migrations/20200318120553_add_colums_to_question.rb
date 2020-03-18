Hanami::Model.migration do
  change do
    alter_table :questions do
      add_column :title, String, null: false, unique: true
    end
  end
end
