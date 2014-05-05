require 'spec_helper'

describe User do
  #describe "roles have role" do
  #  FactoryGirl.create(:admin).has_role?('admin').should == true
  #end
  it { should have_many(:books) }
  it { should have_and_belong_to_many(:roles) }
  describe "can add role" do
    user = FactoryGirl.create(:user)
    user.add_role(:admin)
    user.has_role?(:admin).should == true 
  end
end
