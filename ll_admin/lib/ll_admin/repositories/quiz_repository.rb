class QuizRepository < Hanami::Repository
  associations do
    has_many :questions
  end

  def create_with_questions(data:)
    assoc(:questions).create(data)
  end

  def find_with_questions(id:)
    aggregate(:questions).where(id: id).as(Quiz).one
  end
end
