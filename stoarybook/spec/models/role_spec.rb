require 'spec_helper'

describe Role do
  pending "add some examples to (or delete) #{__FILE__}"
  it { should belong_to(:resource) }
  it { should have_and_belong_to_many(:users) }
end
