require 'spec_helper'

describe Role do
  pending "add some examples to (or delete) #{__FILE__}"
  it { belongs_to(:resource) }
  it { has_and_belongs_to_many(:users) }
end
