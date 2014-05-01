require 'spec_helper'

describe Page do
  pending "add some examples to (or delete) #{__FILE__}"
  it { should have_and_belong_to_many(:book_photos) }
  it { should belong_to(:book) }
end
