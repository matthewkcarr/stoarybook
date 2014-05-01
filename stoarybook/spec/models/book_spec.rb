require 'spec_helper'

describe Book do
  pending "add some examples to (or delete) #{__FILE__}"
  it { should have_many(:pages) }
  it { should belong_to(:author) }
end
