require "spec_helper"

describe Api::Views::ApplicationLayout do
  let(:layout)   { Api::Views::ApplicationLayout.new({ format: :html }, "contents") }
  let(:rendered) { layout.render }

  it 'contains application name' do
    rendered.must_include('Api')
  end
end
