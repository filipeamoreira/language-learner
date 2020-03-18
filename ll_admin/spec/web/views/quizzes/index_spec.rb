require_relative '../../../spec_helper'

describe Web::Views::Quizzes::Index do
  let(:exposures) { Hash[format: :html] }
  let(:template)  { Hanami::View::Template.new('apps/web/templates/quizzes/index.html.erb') }
  let(:view)      { Web::Views::Quizzes::Index.new(template, exposures) }
  let(:rendered)  { view.render }

  it 'exposes #format' do
    view.format.must_equal exposures.fetch(:format)
  end
end
