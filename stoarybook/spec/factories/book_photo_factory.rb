FactoryGirl.define do
  factory :book_photo do
    picture { fixture_file_upload(Rails.root.join('app', 'assets', 'images', 'theme', 'logo.png'), 'image/png') }
  end
end
