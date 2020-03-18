Hanami::Model.migration do
  change do
    alter_table :quizzes do
      add_column :title, String, null: false, unique: true
    end
  end
end
