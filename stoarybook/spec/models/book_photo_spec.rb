require 'spec_helper'

describe BookPhoto do
  #pending "add some examples to (or delete) #{__FILE__}"
  it { should have_and_belong_to_many(:pages) }
  it { should have_attached_file(:picture) }
  it { should validate_attachment_presence(:picture) }
  it { should validate_attachment_content_type(:picture).
                allowing('image/png', 'image/gif').
                rejecting('text/plain', 'text/xml') }
  describe "create a book photo object" do
    book_photo = FactoryGirl.create(:book_photo)  
    book_photo.valid?.should == true
  end
  describe "create many book photo objects with array" do
    logo_photo = FactoryGirl.create(:book_photo)  
    book_photo1 = {:picture => fixture_file_upload(Rails.root.join('app', 'assets', 'images', 'theme', 'logo.png'), 'image/png')}
    book_photo2 = {:picture => fixture_file_upload(Rails.root.join('app', 'assets', 'images', 'theme', 'logo.png'), 'image/png')}
    it "should change the DB by 2" do
      lambda {
        BookPhoto.create( [book_photo1, book_photo2])
      }.should change{BookPhoto.count}.by(2)
    end
  end
end
