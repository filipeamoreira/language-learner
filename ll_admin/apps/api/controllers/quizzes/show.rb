module Api
  module Controllers
    module Quizzes
      class Show
        include Api::Action
        accept :json

        def call(params)
          # binding.pry
        end
      end
    end
  end
end
