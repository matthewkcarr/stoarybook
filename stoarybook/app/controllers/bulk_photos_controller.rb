class BulkPhotosController < ApplicationController
  def index
    @photos = BookPhoto.all
    @book_photo = BookPhoto.new
  end

  def new 
    @book_photo = BookPhoto.new
  end

  def create
    if BookPhoto.create( photo_params )
      respond_to do |format|
        format.html {
          redirect_to :action => :index
        }
        format.json { render :status => :created, :template => nil}
      end
    else
      respond_to do |format|
        format.html {
          render :template => :new
        }
        format.json { render :status => :unprocessable_entity, :template => nil}
      end
    end
  end

  private
  def photo_params
    #params[:book_photo][:picture] ||= []
    params.require(:book_photo).permit(:picture, :picture => [])
  end

end
