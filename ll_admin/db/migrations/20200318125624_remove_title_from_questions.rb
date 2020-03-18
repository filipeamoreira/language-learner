Hanami::Model.migration do
  change do
    alter_table :questions do
      drop_column :title
    end
  end
end
