FactoryGirl.define do
  factory :user do
    email 'example@example.com'
    password 'please123'
    password_confirmation 'please123'
    # required if the Devise Confirmable module is used
    #confirmed_at Time.now

    #factory :admin do
    #    after(:create) {|user| user.add_role(:admin)}
    #end

    #factory :curator do
    #    after(:create) {|user| user.add_role(:curator)}
    #end

    #factory :super_admin do
    #    after(:create) {|user| user.add_role(:super_admin)}
    #end
  end
end
