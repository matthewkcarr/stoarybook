require 'spec_helper'

describe BookPhoto do
  #pending "add some examples to (or delete) #{__FILE__}"
  it { should have_and_belong_to_many(:pages) }
  it { should have_attached_file(:picture) }
  it { should validate_attachment_presence(:picture) }
  it { should validate_attachment_content_type(:picture).
                allowing('image/png', 'image/gif').
                rejecting('text/plain', 'text/xml') }
end
