Hanami::Model.migration do
  change do
    create_table :questions do
      primary_key :id
      column :enunciate,  String,   null: false
      column :answer,     String,   null: false
      foreign_key :quiz_id, :quizzes, null: false

      column :created_at, DateTime, null: false
      column :updated_at, DateTime, null: false
    end
  end
end
