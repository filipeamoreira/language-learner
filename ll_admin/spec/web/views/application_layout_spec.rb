require "spec_helper"

describe Web::Views::ApplicationLayout do
  let(:layout)   { Web::Views::ApplicationLayout.new({ format: :html }, "contents") }
  let(:rendered) { layout.render }

  it 'contains application name' do
    rendered.must_include('Web')
  end
end
