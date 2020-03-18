# Configure your routes here
# See: https://guides.hanamirb.org/routing/overview
#
# Example:
# get '/hello', to: ->(env) { [200, {}, ['Hello from Hanami!']] }

root to: 'quizzes#index'

get '/quizzes', to: 'quizzes#index'
get '/quizzes/:id', to: 'quizzes#show'

get '/hello', to: -> (env) { [200, {}, ['Hello from Hanami API!']] }
